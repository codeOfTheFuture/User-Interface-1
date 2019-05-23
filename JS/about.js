window.addEventListener('load', () => startInterval);

class TabLink {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    this.item = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.item);

    this.link.addEventListener('click', () => this.selected());

    this.link.addEventListener('click', () => this.tabInterval());
  }

  selected() {
    const links = document.querySelectorAll('.tab-link');

    Array.from(links).forEach(link => {
      link.classList.remove('tab-link-selected');
    });

    this.link.classList.add('tab-link-selected');

    this.tabItem.selected();
  }
}

class TabItem {
  constructor(item) {
    this.item = item;
  }

  selected() {
    const tabItems = document.querySelectorAll('.tab-item');

    Array.from(tabItems).forEach(item => {
      item.classList.remove('tab-item-selected');
    });

    this.item.classList.add('tab-item-selected');
  }
}

const links = document.querySelectorAll('.tab-link').forEach(link => {
  const tabLink = new TabLink(link);
});

const startInterval = setInterval(() => {
  let currLink, currIndex, currItem, currItemIndex;

  const links = document
    .querySelectorAll('.tab-link')
    .forEach((link, index) => {
      if (Array.from(link.classList).includes('tab-link-selected')) {
        currLink = link;
        currIndex = index;
      }
    });

  const tabs = document.querySelectorAll('.tab-item').forEach((item, index) => {
    if (Array.from(item.classList).includes('tab-item-selected')) {
      currItem = item;
      currItemIndex = index;
    }
  });

  const linksLength = document.querySelectorAll('.tab-link').length,
    itemsLength = document.querySelectorAll('.tab-item').length;

  if (currIndex < linksLength - 1 && currItemIndex < itemsLength - 1) {
    let nextIndex = currIndex + 1,
      nextItemIndex = currItemIndex + 1;

    const nextLink = Array.from(document.querySelectorAll('.tab-link')),
      nextItem = Array.from(document.querySelectorAll('.tab-item'));

    currLink.classList.remove('tab-link-selected');

    currItem.classList.remove('tab-item-selected');

    nextLink[nextIndex].classList.add('tab-link-selected');

    nextItem[nextItemIndex].classList.add('tab-item-selected');
  } else {
    let nextIndex = 0,
      nextItemIndex = 0;

    const nextLink = Array.from(document.querySelectorAll('.tab-link')),
      nextItem = Array.from(document.querySelectorAll('.tab-item'));

    currLink.classList.remove('tab-link-selected');

    currItem.classList.remove('tab-item-selected');

    nextLink[nextIndex].classList.add('tab-link-selected');

    nextItem[nextItemIndex].classList.add('tab-item-selected');
  }
}, 5000);

document.querySelector('.tab-link').addEventListener('click', stopInterval);

function stopInterval() {
  clearInterval(startInterval);
}
