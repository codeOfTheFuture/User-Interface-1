class TabLink {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    this.item = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.item);

    this.link.addEventListener('click', () => this.selected());
  }

  selected() {
    console.log('Clicked');
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
  console.log(tabLink);
});
