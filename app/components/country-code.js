import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class CountryCode extends Component {

  constructor() {
    super(...arguments);
  }

  get countryCode() {
    if (this.args.isoCode) {
      return this.countryToFlag(this.args.isoCode);
    } else {
      return '00';
    }
  }

  countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }

}






