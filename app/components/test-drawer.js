import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class TestDrawer extends Component {
  @tracked drawerBottomOpen = false;
  @tracked drawerLeftOpen = false;
  @tracked drawerTopOpen = false;
  @tracked contentList = A(['A', 'B', 'C']);

  constructor() {
    super(...arguments);
    this.leftDrawerModalProps = {
      keepMounted: true
    }
  }

  @action
  onToggleBottomDrawer() {
    this.drawerBottomOpen = !this.drawerBottomOpen;
  }

  @action
  onToggleLeftDrawer() {
    this.drawerLeftOpen = !this.drawerLeftOpen;
  }

  @action
  onToggleTopDrawer() {
    this.drawerTopOpen = !this.drawerTopOpen;
  }

  @action
  onTopDrawerClose() {
    this.drawerTopOpen = false;
  }

  @action
  onLeftDrawerClose() {
    this.drawerLeftOpen = false;
  }

  @action
  onBottomDrawerClose() {
    this.drawerBottomOpen = false;
  }

  @action
  onDrawerOpen() {
    console.log('Drawer Opening');
  }

  @action
  onAddContent() {
    this.contentList.pushObject('Y');
  }

  @action
  onRemoveContent() {
    this.contentList.popObject();
  }
}
