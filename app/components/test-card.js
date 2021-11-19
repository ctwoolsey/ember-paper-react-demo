import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import AirportShuttle from "@mui/icons-material/AirportShuttle";
import AccessAlarmRounded from "@mui/icons-material/AccessAlarmRounded";

export default class TestCard extends Component {
  @tracked cardTitle = 'Some Card Title';
  @tracked titleProps = { backgroundColor: 'red'};
  constructor() {
    super(...arguments);
  }

  @action
  onCardClicked() {
    console.log('card clicked');
  }

  @action
  changeCardTitle() {
    if (this.cardTitle === 'Some Card Title') {
      this.cardTitle = 'Some New Card Title';
      this.titleProps = { backgroundColor: 'blue'};
    } else {
      this.cardTitle = 'Some Card Title';
      this.titleProps = { backgroundColor: 'red'};
    }
  }

  @action
  onCardActionBtnClick() {
    console.log('Card action button clicked');
  }

}
