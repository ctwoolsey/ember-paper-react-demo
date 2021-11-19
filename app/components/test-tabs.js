import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';


export default class TestTabs extends Component {
  @tracked tabValue = 0;
  @tracked tabValue2 = 0;

  constructor() {
    super(...arguments);
  }

  @action
  handleChange(evt, newValue) {
    this.tabValue = newValue;
  }

  @action
  handleChange2(evt, newValue) {
    this.tabValue2 = newValue;
  }
}






