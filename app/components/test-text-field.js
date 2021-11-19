import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';

export default class TestTextField extends Component {
  @tracked inputTextValue = 'B';
  @tracked inputMaskTextValue = '';
  @tracked inputUnMaskedTextValue;
  @tracked regularInputTextValue = '';
  @tracked controlInputTextValue = '';
  @tracked contentList = A(['A', 'B', 'C']);
  @tracked currency = 'EUR';

  constructor() {
    super(...arguments);
    this.currencies = [
      {
        value: 'USD',
        label: '$',
      },
      {
        value: 'EUR',
        label: '€',
      },
      {
        value: 'BTC',
        label: '฿',
      },
      {
        value: 'JPY',
        label: '¥',
      },
    ];


    this.alarmIcon = AccessAlarmRounded;
    this.inputMaskAliases = {
      currencyNoDecimal: {
        alias: 'currency',
        digits: 0,
        prefix: '$ ',
      },
      creditScore: {
        mask: '999',
        placeholder: '_',
      },
      percentageWithDecimal: {
        alias: 'percentage',
        digits: 1,
      },
    };

    //this.mask = { alias: 'creditScore' };
    this.mask = 'aa-9{4}';
  }

  @action
  onInputTextChanged(evt) {
    this.inputTextValue = evt.target.value;
  }

  @action
  onInputTextInputMaskChanged(evt, unmaskedValue) {
    this.inputMaskTextValue = evt.target.value;
    this.inputUnMaskedTextValue = unmaskedValue;
  }

  @action
  onAddContent() {
    this.contentList.pushObject('Y');
  }

  @action
  onRemoveContent() {
    this.contentList.popObject();
  }

  @action
  onRegularInputTextChanged(evt) {
    this.regularInputTextValue = evt.target.value;
    this.controlInputTextValue = this.regularInputTextValue;
  }

  @action
  onControlInputTextChanged(evt) {
    this.controlInputTextValue = evt.target.value;
  }

  @action
  handleCurrencyChange(evt) {
    this.currency = evt.target.value;
  }
}
