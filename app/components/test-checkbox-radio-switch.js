import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';


export default class TestCheckboxRadioSwitch extends Component {
  @tracked radioGroupValue = 'truck';
  @tracked radioGroupRow = true;
  @tracked cbClick1Value = false;


  constructor() {
    super(...arguments);
    this.radioGroups = A(['car', 'truck', 'mini-van']);
  }

  @action
  cbClick(value) {
    console.log('cb click1');
    this.cbClick1Value = value;
  }

  @action
  cbClick2() {
    console.log('cb click2');
  }

  @action
  swChange1() {
    console.log('sw change1');
  }
  @action
  swChange2() {
    console.log('sw change2');
  }
  @action
  rbClick1() {
    console.log('rb click1');
  }
  @action
  rbClick2() {
    console.log('rb click2');
  }
  @action
  onRadioGroupChange(event) {
    const value = event.currentTarget.value;
    console.log('Radio Group Value: '+ value);
    this.radioGroupValue = value;
  }

  @action
  onAddRadio() {
    this.radioGroups.pushObject('semi');
  }

  @action
  onRemoveRadio() {
    this.radioGroups.popObject();
  }

  @action
  updateDirection() {
    this.radioGroupRow = !this.radioGroupRow;
  }

}






