import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
import AcUnit from '@mui/icons-material/AcUnit';

export default class TestAvatar extends Component {
  constructor() {
    super(...arguments);
    this.acUnit = AcUnit;
  }
}






