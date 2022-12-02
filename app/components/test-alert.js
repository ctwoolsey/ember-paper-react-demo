import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import AirportShuttle from '@mui/icons-material/AirportShuttle';
import CloseIcon from '@mui/icons-material/Close'


export default class TestAlert extends Component {

  constructor() {
    super(...arguments);
    this.warningIcon = { icon: AirportShuttle };
    this.closeIcon = { icon: CloseIcon };
  }

  @action
  actionClicked() {
    console.log('Action Clicked');
  }
}
