
let pages = {
  1: 'brand',
  2: 'intro',
  3: 'projects',
  // 4: 'tech',
  5: 'contact'
};

// prev next pagination
// let fromPage = 1;
// let toPage = 1;
let curPage = 1;

removeClass = (elem, name) => {
  elem.classList.remove(name);
}

addClass = (elem, name) => {
  elem.classList.add(name);
}

let showPage = page => {
  // timeout to wait for the elems to be created first
  setTimeout(function () {
    let activePage = document.getElementById(page);
    addClass(activePage, 'page--active')
  })

  let showElem = document.getElementsByClassName(pages[page])[0];
  addClass(showElem, 'show')
  addClass(showElem, 'fadeIn')
}

hidePage = page => {
  let inactivePage = document.getElementById(page);
  removeClass(inactivePage, 'page--active')

  let hideElem = document.getElementsByClassName(pages[page])[0];
  removeClass(hideElem, 'show')
  addClass(hideElem, 'fadeOut')
  removeClass(hideElem, 'fadeIn')
  setTimeout(function () {
    removeClass(hideElem, 'fadeOut')
  })
}

// dynamically create pagination
createPagination = () => {
  let paginationContainer = document.getElementById('pages');
  for (var key in pages) {
    let page = document.createElement('span');
    page.className = 'page';
    page.setAttribute('id', key);

    paginationContainer.appendChild(page);
  }
}

(function () {
  showPage(1);
  createPagination();
})();

goTo = (to, cur) => {
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
// let prevBtn = document.getElementById('prev')
// prevBtn.onClick = goTo;
// let nextBtn = document.getElementById('next')
// nextBtn.onClick = goTo;

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('page')) {
    let toId = +event.target.id; // convert to number
    // if target page same is current page. do nothing
    if (toId === curPage) {
      return;
    }

    goTo(toId, curPage);
  }
}, false);
