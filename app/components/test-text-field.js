import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class TestTextField extends Component {
  @service inputMaskTypes;

  @tracked controlInputTextValue = '';
  @tracked controlIMaskTextValue = '';
  @tracked controlNMaskTextValue = 999;
  @tracked controlNMaskPatternValue = 246;

  constructor() {
    super(...arguments);

    const currencyNoDecimalIMask = {
      mask: '$num',
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ',',
        },
      },
    };
    const currencyWithDecimalIMask = {
      mask: '$num',
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ',',
          scale: 2,
          radix: '.',
        },
      },
    };

    const currencyNoDecimalNMask = {
      thousandSeparator: true,
      prefix: '$ ',
      decimalScale: 0,
    };
    const currencyWithDecimalNMask = {
      thousandSeparator: true,
      prefix: '$ ',
      decimalScale: 2,
    };

    const percentageWithDecimalNFMask = {
      suffix: ' %',
      decimalScale: 2,
      isAllowed: (value) => {
        return value.floatValue <= 100 || value.value === '';
      },
    };

    const percentageWithDecimalIMask = {
      mask: [
        {
          mask: '',
        },
        {
          mask: 'num %',
          lazy: false,
          blocks: {
            num: {
              mask: Number,
              scale: 3,
              min: 1,
              max: 100,
              radix: '.',
              mapToRadix: [','],
            },
          },
        },
      ],
    };

    this.inputMaskTypes.addIMaskType(
      'currencyNoDecimal',
      currencyNoDecimalIMask
    );
    this.inputMaskTypes.addIMaskType(
      'currencyWithDecimal',
      currencyWithDecimalIMask
    );
    this.inputMaskTypes.addIMaskType(
      'percentageWithDecimal',
      percentageWithDecimalIMask
    );
    this.inputMaskTypes.addNumberFormatNumericType(
      'currencyNoDecimal',
      currencyNoDecimalNMask
    );
    this.inputMaskTypes.addNumberFormatNumericType(
      'currencyWithDecimal',
      currencyWithDecimalNMask
    );
    this.inputMaskTypes.addNumberFormatNumericType(
      'percentageWithDecimal',
      percentageWithDecimalNFMask
    );

    this.iMask = /^\w+$/;
    this.iMaskPrepare = (str) => {
      return str.toUpperCase();
    };

    this.iMaskCurrencyMask = Number;
    this.iMaskCurrencyPrepare = (str) => {
      return `$ ${str}`;
    };

    this.textFieldErrors = ['error 1', 'error 2'];

    this.textFieldErrors = 'error 3';

    this.inputModeInputProps = { inputMode: 'decimal' };
  }

  //keep
  @action
  onRegularInputTextChangedNative(evt) {
    console.log(`onRegularInputTextChangedNative: ${evt.target.value}`);
    this.controlInputTextValue = evt.target.value;
  }

  //keep
  @action
  onControlInputTextChanged(value) {
    this.controlInputTextValue = value;
  }

  //keep
  @action
  onRegularIMaskTextChanged(value) {
    this.controlIMaskTextValue = value;
  }

  //keep
  @action
  onControlIMaskTextChanged(value) {
    console.log(`onControlIMaskTextChanged: ${value}`);
   // this.controlIMaskTextValue = value;
  }

  //keep
  @action
  onRegularNMaskTextChanged(value) {
    this.controlNMaskTextValue = value;
  }

  //keep
  @action
  onControlNMaskTextChanged(value) {
    this.controlNMaskTextValue = value;
  }

  //keep
  @action
  onDefaultValueNMaskTextChanged(value) {}

  @action
  onControlNMaskPatternValueChanged(value) {
    this.controlNMaskPatternValue = value;
  }

  @action
  onFocusHandler(event) {
    console.log('Focused');
  }

  @action
  onClickHandler(event) {
    console.log('Clicked');
  }

  @action
  onMouseHandler(event) {
    console.log('Mouse Down');
  }
}
