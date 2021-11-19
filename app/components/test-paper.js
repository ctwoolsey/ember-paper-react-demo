import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import deepOrange from '@mui/material/colors/deepOrange';

export default class TestPaper extends Component {
  @tracked elevation = 0;
  @tracked square = false;
  @tracked variant = 'elevation';
  @tracked buttonList = A(['A', 'B']);
  @tracked paperSX = null;
  @tracked paperClass = 'dummy-class';
  @tracked paperStyle = { backgroundColor: 'green' };
  @tracked paperStyleIndicator = 0;

  constructor() {
    super(...arguments);
  }

  @action
  changeElevation() {
    if (this.elevation === 24) {
      this.elevation = 0;
    } else {
      this.elevation = this.elevation + 1;
    }
  }

  @action
  changeShape() {
    this.square = !this.square;
  }

  @action
  changeVariant() {
    if (this.variant === 'elevation') {
      this.variant = 'outlined';
    } else {
      this.variant = 'elevation';
    }
  }

  @action
  addButton() {
    this.buttonList.pushObject('Y');
  }

  @action
  removeButton() {
    this.buttonList.popObject();
  }

  @action
  changeBackgroundColor() {
    if (this.paperSX) {
      this.paperSX = null;
    } else {
      this.paperSX = { bgcolor: deepOrange[500] };
    }
  }

  @action
  toggleClass() {
    if (this.paperClass !== 'dummy-class') {
      this.paperClass = 'dummy-class';
    } else {
      this.paperClass = 'color-me-blue';
    }
  }

  @action
  toggleStyle() {
    this.paperStyleIndicator =
      this.paperStyleIndicator === 2 ? 0 : ++this.paperStyleIndicator;

    switch (this.paperStyleIndicator) {
      case 0:
        this.paperStyle = { backgroundColor: 'green' };
        break;
      case 1:
        this.paperStyle = null;
        break;
      default:
        this.paperStyle = { backgroundColor: 'yellow' };
        break;
    }
  }

  @action
  onMouseDown(evt) {
    console.log('mouse down');
  }

  @action
  onDblClick(evt) {
    console.log('double click');
  }
}
