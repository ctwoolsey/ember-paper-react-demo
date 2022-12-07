import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class TestDatePickers extends Component {
  @tracked datePickerValue = null;
  @tracked timePickerValue = null;
  @tracked staticTimePickerValue = null;
  @tracked dateTimePickerValue = null;
  @tracked locale = 'en';

  constructor() {
    super(...arguments);
    this.errors = ['enter a valid date'];
    this.popperProps = { className: 'my-popper'}
  }

  @action
  datePickerOnChange(newValue) {
    this.datePickerValue = newValue;
  }

  @action
  timePickerOnChange(newValue) {
    this.timePickerValue = newValue;
  }

  @action
  staticTimePickerOnChange(newValue) {
    this.staticTimePickerValue = newValue;
  }

  @action
  dateTimePickerOnChange(newValue) {
    this.dateTimePickerValue = newValue;
  }


  @action
  onChangeLocale() {
    if (this.locale === 'en') {
      this.locale = 'de';
    } else {
      this.locale = 'en';
    }
  }
}
