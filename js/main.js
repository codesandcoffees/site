
var pages = {
  1: 'brand',
  2: 'intro',
  3: 'projects',
  // 4: 'tech',
  5: 'contact'
};

var projectsList = [
  { title: 'AR Go', url: 'https://codesandcoffees.github.io/argo-site/', img: null },
  { title: 'brewing...', url: null, img: null },
];

// prev next pagination
// var fromPage = 1;
// var toPage = 1;
var curPage = 1;
var projectListElem = document.getElementsByClassName('projects-list')[0];

function removeClass(elem, name) {
  elem.classList.remove(name);
}

function addClass(elem, name) {
  elem.classList.add(name);
}

function showPage(page) {
  // timeout to wait for the elems to be created first
  setTimeout(function () {
    var activePage = document.getElementById(page);
    addClass(activePage, 'page--active')
  })

  // show/hide projects list since it not inside .main-content
  if (page !== 3) {
    projectListElem.style.display = 'none';
  } else {
    projectListElem.style.display = 'grid';
  }

  var showElem = document.getElementsByClassName(pages[page])[0];
  addClass(showElem, 'show')
  addClass(showElem, 'fadeIn')
}

function hidePage(page) {
  var inactivePage = document.getElementById(page);
  removeClass(inactivePage, 'page--active')

  var hideElem = document.getElementsByClassName(pages[page])[0];
  removeClass(hideElem, 'show')
  addClass(hideElem, 'fadeOut')
  removeClass(hideElem, 'fadeIn')
  setTimeout(function () {
    removeClass(hideElem, 'fadeOut')
  })
}

// dynamically create pagination
function createPagination() {
  var paginationContainer = document.getElementById('pages');
  for (var key in pages) {
    var page = document.createElement('span');
    page.className = 'page';
    page.setAttribute('id', key);

    paginationContainer.appendChild(page);
  }
}

function randomColor() {
  var pastel = "hsl(" + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' +
    (85 + 10 * Math.random()) + '%)';
  return pastel;
}

function fillInProjectsList() {
  for (var i = 0; i < projectsList.length; i++) {
    var projItem = document.createElement('div');
    var projLink = document.createElement('a');
    // if has img use it
    if (projectsList[i].img) {
      projLink.style.backgroundImage  = 'url(../img/' + projectsList[i].img + ')';
    } else {
      // else use random pastel color
      projLink.style.background = randomColor();
    }
    projLink.className = 'project-item';
    projLink.href = projectsList[i].url || 'javascript:void(0)';
    projItemTitle = document.createElement('h2');
    projItemTitle.innerHTML = projectsList[i].title;
    projItemTitle.className = 'project-title';
    projLink.appendChild(projItemTitle);
    projectListElem.appendChild(projLink);
  }
}

(function () {
  showPage(1); //initial page to show
  createPagination();
  // fillInProjectsList();
})();

function goTo(to, cur) {
  // prev next pagination
  // switch (data) {
  //   case 1: // next
  //     fromPage = toPage;
  //     toPage = fromPage + 1;
  //     break;
  //   default: // prev
  //     fromPage = toPage;
  //     toPage = fromPage - 1;
  // }
  curPage = to;
  hidePage(cur);
  showPage(to);
}

// prev next pagination
// var prevBtn = document.getElementById('prev')
// prevBtn.onClick = goTo;
// var nextBtn = document.getElementById('next')
// nextBtn.onClick = goTo;

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('page')) {
    var toId = +event.target.id; // convert to number
    // if target page same is current page. do nothing
    if (toId === curPage) {
      return;
    }

    goTo(toId, curPage);
  }
}, false);
