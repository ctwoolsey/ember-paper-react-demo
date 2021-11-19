import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';

export default class TestTextField extends Component {
  @tracked age = 30;
  @tracked multiAge = [];
  @tracked multiAgeOptions = A([
    { age: 10, text: 'Ten' },
    { age: 20, text: 'Twenty' },
    { age: 30, text: 'Thirty' },
    { age: 50, text: 'Fifty' },
    { age: 60, text: 'Sixty' },
    { age: 70, text: 'Seventy' },
  ]);
  @tracked age2 = '';
  @tracked options = A([
    { age: '', text: 'Empty' },
    { age: 10, text: 'Ten' },
    { age: 20, text: 'Twenty' },
    { age: 30, text: 'Thirty' },
  ]);

  constructor() {
    super(...arguments);
    this.alarmIcon = AccessAlarmRounded;
    this.inputProps = { 'aria-label': 'Without label' };
  }

  @action
  onMultiAgeChange(evt, child) {
    this.multiAge = evt.target.value;
  }

  @action
  onAgeChange(evt, child) {
    this.age = evt.target.value;
  }

  @action
  handleChange2(evt) {
    this.age2 = evt.target.value;
  }

  @action
  onAddOption() {
    this.options.pushObject({ age: 40, text: 'Forty' });
  }

  @action
  onRenderValue(value) {
    return value;
  }
}
