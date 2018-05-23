
var pages = {
  1: 'brand',
  2: 'intro',
  3: 'projects',
  // 4: 'tech',
  5: 'contact'
};

// prev next pagination
// var fromPage = 1;
// var toPage = 1;
var curPage = 1;

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

(function () {
  showPage(1);
  createPagination();
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
