import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import deepOrange from '@mui/material/colors/deepOrange';

export default class TestMisc extends Component {
  @tracked optionValue = null;
  @tracked buttonValue = 0;
  @tracked filterdOptions = [];

  constructor() {
    super(...arguments);
    this.acSX = { width: 300 };
    this.options = [
      {
        value: 1,
        name: 'Choice 1',
      },
      {
        value: 2,
        name: 'Choice 2',
      },
      {
        value: 3,
        name: 'Choice 3',
      },
    ];
    this.filterdOptions = this.options.filter(this._filterFunction.bind(this));
  }

  get optionArray() {
    console.log(`=============`);
    let arr = this.filterdOptions; //this.options.filter(this._filterFunction.bind(this));
    console.log(`=============`);
    return arr;
  }

  _filterFunction(optionItem) {
    let retValue = false;

    switch (this.buttonValue) {
      case 0:
        retValue = true;
        break;
      case 1:
        if (optionItem.value === 1 || optionItem.value === 2) {
          retValue = true;
        }
        break;
      case 2:
        if (optionItem.value === 2) {
          retValue = true;
        }
        break;
      case 3:
        if (optionItem.value === 3) {
          retValue = true;
        }
        break;
    }

    console.log(
      `BV: ${this.buttonValue}, Item: ${optionItem.name} == ${retValue}`
    );

    return retValue;
  }

  optionsLabel(optionItem) {
    if (optionItem) {
      return optionItem.name;
    } else {
      return '';
    }
  }

  @action
  optionChanged(value) {
    this.optionValue = value;
  }

  @action
  onButtonClear() {
    console.log('bv0');
    this.buttonValue = 0;
    this.filterdOptions = this.options.filter(this._filterFunction.bind(this));
  }

  @action
  onButtonChoice1() {
    console.log('bv1');
    this.buttonValue = 1;
    this.filterdOptions = this.options.filter(this._filterFunction.bind(this));
  }

  @action
  onButtonChoice2() {
    console.log('bv2');
    this.buttonValue = 2;
    this.filterdOptions = this.options.filter(this._filterFunction.bind(this));
  }

  @action
  onButtonChoice3() {
    console.log('bv3');
    this.buttonValue = 3;
    this.filterdOptions = this.options.filter(this._filterFunction.bind(this));
  }
}
