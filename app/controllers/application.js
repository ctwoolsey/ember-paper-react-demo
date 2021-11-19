import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import pink from '@mui/material/colors/pink';
import green from '@mui/material/colors/green';
import orange from '@mui/material/colors/orange';
import lightBlue from '@mui/material/colors/lightBlue';
import blueGrey from '@mui/material/colors/blueGrey';
import brown from '@mui/material/colors/brown';
import deepOrange from '@mui/material/colors/deepOrange';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
import AirportShuttle from '@mui/icons-material/AirportShuttle';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { A } from '@ember/array';

//import Avatar from '@mui/material/Avatar';
//import CreateReactComponent from 'ember-paper-react/addon/utlities/create-react-component';

export default class ApplicationController extends Controller {
  @service themeManager;
  @tracked btnClass;
  @tracked btnStyle;
  @tracked variant;
  @tracked themeButtonText;
  @tracked cbClass;
  @tracked indeterminate;
  @tracked myLabel2;


  @tracked acValue;
  @tracked tooltipDisabled;
  @tracked dialogOpen = false;
  @tracked really = 'really';
  @tracked avatarSX = { bgcolor: deepOrange[500] };
  @tracked fontAwesomeIconName = 'fa-award';
  @tracked chipIcon = AccessAlarmRounded;
  @tracked googleIconName = 'add_circle';




  constructor() {
    super(...arguments);

    this.popupIcon = ArrowCircleDownIcon;
    this.clearIcon= AirportShuttle;
    this.btnClass = 'flex-33';
    this.btnStyle = 'background-color:#44aaaa';
    this.cbClass = 'my-cb3';
    this.indeterminate = true;
    this.myLabel2 = 'My Label2';
    this.tooltipDisabled = false;
    this.variant = 'contained';
    this.themeButtonText = 'change theme';
    this.faIconProps = {
      baseClassName: 'fas fa-award'
    }

    this.theme0 = this.themeManager.createTheme({
      primary: {
        main: blueGrey[500]
      },
      secondary: {
        main: brown[500]
      }
    });

    this.theme1 = this.themeManager.createTheme({
      primary: {
        main: pink[500]
      },
      secondary: {
        main: green[500]
      }
    });

    this.themeManager.theme = this.theme0;

    this.theme2 = this.themeManager.createTheme({
      primary: {
        main: orange[500]
      },
      secondary: {
        main: lightBlue[500]
      }
    });







    this.backdropSx = {
      color: '#fff',
      zIndex: this.backdropSxZIndex
    }

    //this.cardAvatar = CreateReactComponent.helperComponent(Avatar, null, AirportShuttle);
  }

  backdropSxZIndex(theme) {
    return theme.zIndex.drawer + 1;
  }



  /*acRenderInput(params) {

  }*/
  @action
  onReactThemeBtnClicked() {
    console.log('react button clicked');
    if (this.btnClass === 'flex-33') {
      this.btnClass = 'flex-50';
      this.btnStyle = 'background-color:#44aaaa';
      this.cbClass = 'my-cb4 whatStyle';
      this.indeterminate = false;
      this.themeManager.theme = this.theme2;
      this.myLabel2 = 'My New Label2';
      this.tooltipDisabled = true;
      this.really = 'very';
      this.variant = null;
      this.themeButtonText = 'Changed Text';
      this.fontAwesomeIconName = 'fa-balance-scale';
      this.chipIcon = AirportShuttle;
      this.googleIconName = 'feedback';
    } else {
      this.btnClass = 'flex-33';
      this.btnStyle = 'background-color:#44cc44';
      this.cbClass = 'my-cb3 whatStyle';
      this.indeterminate = true;
      this.themeManager.theme = this.theme1;
      this.myLabel2 = '';
      this.tooltipDisabled = false;
      this.really = 'really';
      this.variant = 'contained';
      this.themeButtonText = 'change theme';
      this.fontAwesomeIconName = 'fa-award';
      this.chipIcon = AccessAlarmRounded;
      this.googleIconName = 'add_circle';
    }
  }







}
