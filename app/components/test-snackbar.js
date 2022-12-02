import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import AirportShuttle from '@mui/icons-material/AirportShuttle';
import CloseIcon from '@mui/icons-material/Close';

export default class TestSnackbar extends Component {
  @tracked alertSnackbarOpen = false;
  @tracked simpleSnackbarOpen = false;
  constructor() {
    super(...arguments);
    this.warningIcon = { icon: AirportShuttle };
    this.closeIcon = { icon: CloseIcon };
    this.simpleSnackbarPosition = { vertical: 'bottom', horizontal: 'center' };
    this.alertSnackbarPosition = { vertical: 'top', horizontal: 'right' };
  }

  @action
  actionClicked() {
    console.log('Action Clicked');
  }

  @action
  openSnackbarSimpleButtonClicked() {
    this.simpleSnackbarOpen = !this.simpleSnackbarOpen;
  }

  @action
  openSnackbarAlertButtonClicked() {
    this.alertSnackbarOpen = !this.alertSnackbarOpen;
  }

  @action
  simpleSnackbarOnClose() {
    this.simpleSnackbarOpen = false;
  }

  @action
  alertSnackbarOnClose() {
    this.alertSnackbarOpen = false;
  }
}
