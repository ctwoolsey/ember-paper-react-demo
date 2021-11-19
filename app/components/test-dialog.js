import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class TestDialog extends Component {
  @tracked dialogOpen = false;
  @tracked titleStatement = 'really';
  @tracked contentList = A(['A', 'B', 'C']);

  constructor() {
    super(...arguments);
  }

  @action
  onDialogButtonClicked() {
    console.log('Dialog Btn Clicked');
    if (this.dialogOpen) {
      this.dialogOpen = false;
    } else {
      this.dialogOpen = true;
    }
  }

  @action
  onDialogClose(evt, reason) {
    this.dialogOpen = false;
    console.log('on close called');
  }

  @action
  onBackgroundClicked(evt) {
    console.log('on background clicked called');
  }

  @action
  onDialogActionBtnClicked() {
    console.log('Dialog Action Btn Clicked');
    this.dialogOpen = false;
  }

  @action
  onToggleTitleText() {
    if (this.titleStatement === 'really') {
      this.titleStatement = 'very';
    } else {
      this.titleStatement = 'really';
    }
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
