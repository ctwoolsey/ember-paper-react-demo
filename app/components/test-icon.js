import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
import AcUnit from '@mui/icons-material/AcUnit';
import blueGrey from '@mui/material/colors/blueGrey';
import brown from '@mui/material/colors/brown';
import pink from '@mui/material/colors/pink';
import green from '@mui/material/colors/green';

export default class TestIcon extends Component {
  @service themeManager;
  @tracked alarmIcon = AccessAlarmRounded;
  @tracked fontAwesomeIconName = 'fa-award';
  @tracked googleIconName = 'add_circle';

  constructor() {
    super(...arguments);
    this.themeNumber = 0;
    this.theme0 = this.themeManager.createTheme({
      primary: {
        main: blueGrey[500],
      },
      secondary: {
        main: brown[500],
      },
    });

    this.theme1 = this.themeManager.createTheme({
      primary: {
        main: pink[500],
      },
      secondary: {
        main: green[500],
      },
    });
    this.themeManager.theme = this.theme0;
  }

  @action
  toggleTheme() {
    if (this.themeNumber) {
      this.themeNumber = 0;
      this.themeManager.theme = this.theme0;
      console.log('Theme 0');
    } else {
      this.themeNumber = 1;
      this.themeManager.theme = this.theme1;
      console.log('Theme 1');
    }
  }

  @action
  changeReactIcon() {
    if (this.alarmIcon === AccessAlarmRounded) {
      this.alarmIcon = AcUnit;
    } else {
      this.alarmIcon = AccessAlarmRounded;
    }
  }

  @action
  changeMaterialIcon() {
    if (this.googleIconName === 'add_circle') {
      this.googleIconName = 'description';
    } else {
      this.googleIconName = 'add_circle';
    }
  }

  @action
  changeFontAwesomeIcon() {
    if (this.fontAwesomeIconName === 'fa-award') {
      this.fontAwesomeIconName = 'fa-baby';
    } else {
      this.fontAwesomeIconName = 'fa-award';
    }
  }
}
