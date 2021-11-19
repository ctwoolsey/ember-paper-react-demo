import { action } from "@ember/object";
import Component from '@glimmer/component';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class TestAttributes extends Component {
  @tracked ariaState = 0;
  @tracked dataState = 0;
  @tracked roleState = 0;
  @tracked myData = 'dataFirst';
  @tracked myAria = 'ariaFirst';
  @tracked myRole = 'icon';

  constructor() {
    super(...arguments);
  }

  @action
  onAriaChange() {
    if (this.ariaState === 0) {

      this.myAria = 'ariaSecond';
      this.ariaState = 1;
    } else {
      this.myAria = 'ariaFirst';
      this.ariaState = 0;
    }

  }

  @action
  onDataChange() {
    if (this.dataState === 0) {
      this.myData = 'dataSecond';
      this.dataState = 1;
    } else {
      this.myData = 'dataFirst';
      this.dataState = 0;
    }
  }

  @action
  onRoleChange() {
    if (this.roleState === 0) {
      this.myRole = 'button';
      this.roleState = 1;
    } else {
      this.myRole = null;
      this.roleState = 0;
    }
  }
}






