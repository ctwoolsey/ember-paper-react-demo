import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import blueGrey from '@mui/material/colors/blueGrey';
import brown from '@mui/material/colors/brown';
import pink from '@mui/material/colors/pink';
import green from '@mui/material/colors/green';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavigationIcon from '@mui/icons-material/Navigation';

export default class TestButton extends Component {
  @service themeManager;
  @tracked variant = 'contained';
  @tracked btnText = 'Contained Button';
  @tracked iconState = 0;
  @tracked fabIconState = 0;
  @tracked shoppingCartIcon = AddShoppingCartIcon;
  @tracked googleIconName = 'add_circle';
  @tracked fontAwesomeIconName = 'fa-baby';

  @tracked fabShoppingCartIcon = AddShoppingCartIcon;
  @tracked fabGoogleIconName = 'add_circle';
  @tracked fabFontAwesomeIconName = 'fa-baby';

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
    //this.themeManager.theme = this.theme0;

    this.alarmIcon = { icon: AccessAlarmRounded };
    this.navigationIcon = NavigationIcon;
    this.navigateSX = { mr: 1 };
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
  onToggleIcons() {
    if (this.iconState === 0) {
      this.shoppingCartIcon = AccessAlarmRounded;
      this.googleIconName = 'description';
      this.fontAwesomeIconName = 'fa-award';
      this.iconState = 1;
    } else {
      this.shoppingCartIcon = AddShoppingCartIcon;
      this.googleIconName = 'add_circle';
      this.fontAwesomeIconName = 'fa-baby';
      this.iconState = 0;
    }
    console.log(`Icon State: ${this.iconState}`);
  }

  @action
  onToggleFabIcons() {
    if (this.fabIconState === 0) {
      this.fabShoppingCartIcon = AccessAlarmRounded;
      this.fabGoogleIconName = 'description';
      this.fabFontAwesomeIconName = 'fa-award';
      this.fabIconState = 1;
    } else {
      this.fabShoppingCartIcon = AddShoppingCartIcon;
      this.fabGoogleIconName = 'add_circle';
      this.fabFontAwesomeIconName = 'fa-baby';
      this.fabIconState = 0;
    }
    console.log(`Fab Icon State: ${this.fabIconState}`);
  }

  @action
  onTestBtnClicked() {
    if (this.variant === 'contained') {
      this.variant = 'outlined';
      this.btnText = 'Outlined Button';
    } else {
      if (this.variant === 'outlined') {
        this.variant = 'text';
        this.btnText = 'Text Button';
      } else if (this.variant === 'text') {
        this.variant = 'contained';
        this.btnText = 'Contained Button';
      }
    }
  }
}
