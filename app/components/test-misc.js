import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import deepOrange from '@mui/material/colors/deepOrange';
import { next } from '@ember/runloop';

export default class TestMisc extends Component {
  @tracked oneOptionValue = null;
  @tracked twoOptionValue = null;
 // @tracked twoOptions = null;

  constructor() {
    super(...arguments);
    this.acSX = { width: 300 };
    this.oneOptions = [
      {
        value: 'singles',
        name: 'Singles',
      },
      {
        value: 'doubles',
        name: 'Doubles',
      },
      {
        value: 'triples',
        name: 'Triples',
      },
    ];

    this.singleOptions = [
      {
        value: 'a',
        name: 'A',
      },
      {
        value: 'b',
        name: 'B',
      },
      {
        value: 'c',
        name: 'C',
      },
      {
        value: 'd',
        name: 'D',
      },
      {
        value: 'e',
        name: 'E',
      },
    ];

    this.doubleOptions = [
      {
        value: 'aa',
        name: 'AA',
      },
      {
        value: 'bb',
        name: 'BB',
      },
      {
        value: 'cc',
        name: 'CC',
      },
    ];

    this.tripleOptions = [
      {
        value: 'aaa',
        name: 'AAA',
      },
      {
        value: 'bbb',
        name: 'BBB',
      },
    ];
  }

  @action
  optionsLabel(optionItem) {
    if (optionItem) {
      return optionItem.name;
    } else {
      return '';
    }
  }

  //change options by using get doesn't work after first change
  get twoOptions() {
    if (this.oneOptionValue) {
      switch (this.oneOptionValue.value) {
        case 'singles':
          console.log('assigning singleOptions');
          return this.singleOptions;
        case 'doubles':
          console.log('assigning doubleOptions');
          return this.doubleOptions;
        case 'triples':
          console.log('assigning tripleOptions');
          return this.tripleOptions;
        default:
          return null;
      }
    } else {
      return null;
    }
  }

  @action
  oneOptionChanged(value) {
    this.oneOptionValue = value;
    this.twoOptionValue = null;
  }

  @action
  twoOptionChanged(value) {
    this.twoOptionValue = value;
  }

  /*@action
  oneOptionChanged(value) {
    this.oneOptionValue = value;
    this.twoOptionValue = null;

    switch (this.oneOptionValue.value) {
      case 'singles':
        console.log('assigning singleOptions');
        this.twoOptions = this.singleOptions;
        console.log(`--------------`);
        break;
      case 'doubles':
        console.log('assigning doubleOptions');
        this.twoOptions = this.doubleOptions;
        console.log(`--------------`);
        break;
      case 'triples':
        console.log('assigning tripleOptions');
        this.twoOptions = this.tripleOptions;
        console.log(`--------------`);
        break;
    }
  }

  @action
  twoOptionChanged(value) {
    this.twoOptionValue = value;
  }*/

  /*@action
  twoOptionsUpdated() {
    console.log('twoOptionsUpdated');
  }*/
}
