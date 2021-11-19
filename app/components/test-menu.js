import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';


export default class TestMenu extends Component {
  @tracked menuOpen = false;
  @tracked menuOpen2 = false;
  @tracked contentList = A(['Menu A', 'Menu B', 'Menu C']);

  constructor() {
    super(...arguments);
  }

  @action
  onToggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @action
  onToggleMenu2() {
    this.menuOpen2 = !this.menuOpen2;
  }


  @action
  onMenuClose() {
    this.menuOpen = false;
  }

  @action
  onMenuClose2() {
    this.menuOpen2 = false;
  }

  @action
  menu2Anchor() {
    return document.getElementById('menuTrigger2');
  }

  @action
  onMenuItemClicked() {
    console.log('menu item clicked');
  }

  @action
  onAddMenuContent() {
    this.contentList.pushObject('Menu Y');
  }

  @action
  onRemoveMenuContent() {
    this.contentList.popObject();
  }
}






