import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import green from "@mui/material/colors/green";
import AirportShuttle from "@mui/icons-material/AirportShuttle";


export default class TestChip extends Component {


  constructor() {
    super(...arguments);
    this.handleChipDelete = this.handleChipDelete.bind(this);
    this.chipIcon = { icon: AirportShuttle };

    this.avatarProps = {
      children: 'CW',
      sx: {
        bgcolor: green[500],
        width: 20,
        height: 20
      }
    }

    this.chipIconProps = {
      iconProps: {
        baseClassName: 'fas fa-award'
      }
    }
  }

  handleChipDelete(evt) {
    console.log('handling chip delete');
  }

  get labelForChip() {
    return 'custom label';
  }


}






