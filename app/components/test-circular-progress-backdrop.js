import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class TestCircularProgressBackdrop extends Component {
  @tracked backdropOpen = false;
  constructor() {
    super(...arguments);
  }

  @action
  onToggleBackdrop() {
    this.backdropOpen = !this.backdropOpen;
  }

  @action
  handleBackdropClose() {
    console.log('Handling Backdrop Close');
    this.backdropOpen = false;
  }

}
