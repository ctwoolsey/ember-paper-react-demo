import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class TestTextField extends Component {
  @service inputMaskTypes;

  @tracked inputTextValue = 'B';
  @tracked inputMaskTextValue = '';
  @tracked inputUnMaskedTextValue;
  @tracked regularInputTextValue = '';
  @tracked controlInputTextValue = '';

  @tracked regularIMaskTextValue = '';
  @tracked controlIMaskTextValue = '888';
  @tracked controlNMaskTextValue = '999';

  @tracked contentList = A(['A', 'B', 'C']);
  @tracked currency = 'EUR';
  @tracked controlledValue = '';
  @tracked iMaskControlledValue = '';

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
        }
      ]
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
    this.inputMaskTypes.addNumberFormatType(
      'currencyNoDecimal',
      currencyNoDecimalNMask
    );
    this.inputMaskTypes.addNumberFormatType(
      'currencyWithDecimal',
      currencyWithDecimalNMask
    );
    this.inputMaskTypes.addNumberFormatType(
      'percentageWithDecimal',
      percentageWithDecimalNFMask
    );

    /*this.inputMask.extendAliases({
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
      socialSecurity: {
        mask: '999--99--9999',
      },
    });*/
    //this.inputMaskAliases = ;

    // this.mask = { alias: 'currencyNoDecimal' };
    //this.mask = 'aa-9{4}';

    this.iMask = /^\w+$/;
    this.iMaskPrepare = (str) => { return str.toUpperCase(); };

    this.iMaskCurrencyMask = Number;
    this.iMaskCurrencyPrepare = (str) => {
      return `$ ${str}`;
    };

    this.textFieldErrors = [
      'error 1',
      'error 2'
    ]

    this.textFieldErrors = 'error 3';
  }

  @action
  onIMaskInputTextChanged(value) {
    console.log(`onIMaskInputTextChanged: ${value}`);
  }

  @action
  onMaskedTFChange(value) {
    console.log(`onMaskedTFChange, value: ${value}`);
  }

  @action
  onControlledChanged(value) {
    console.log(`React Demo -- onControlledChanged: this.controlledValue: ${value}`);
    this.controlledValue = value;
  }

  @action
  onInputTextChanged(value) {
    this.inputTextValue = value;
  }

  @action
  onInputTextInputMaskChanged(evt) {
    this.inputUnMaskedTextValue = evt.target.value;
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
  onRegularInputTextChangedNative(evt) {
    console.log(`onRegularInputTextChangedNative: ${evt.target.value}`);
    this.controlInputTextValue = evt.target.value;
  }

  @action
  onRegularInputTextChanged(value) {
    this.regularInputTextValue = value;
    this.controlInputTextValue = this.regularInputTextValue;
  }

  @action
  onControlInputTextChanged(value) {
    this.controlInputTextValue = value;
  }

  @action
  onUpdateControlIMaskTextValue() {
    this.controlIMaskTextValue = '123';
  }

  @action
  onRegularIMaskTextChanged(value) {
//    console.log(`onRegularIMaskTextChanged: ${value}`);
   // this.regularIMaskTextValue = value;
    this.controlIMaskTextValue = value;
  }

  @action
  onControlIMaskTextChanged(value) {
    console.log(`onControlIMaskTextChanged: ${value}`);
    this.controlIMaskTextValue = value;
  }

  @action
  onRegularNMaskTextChanged(value) {
    console.log(`onRegularNMaskTextChanged: ${value}`);
    this.controlNMaskTextValue = value;
  }

  @action
  onControlNMaskTextChanged(value) {
    console.log(`onControlNMaskTextChanged: ${value}`);
    this.controlNMaskTextValue = value;
  }

  @action
  onUpdateControlBMaskTextValue() {
    this.controlNMaskTextValue = '246';
  }

  @action
  handleCurrencyChange(value) {
    this.currency = value;
  }

  @action
  onIMaskPercentageChanged(value) {

  }
}
