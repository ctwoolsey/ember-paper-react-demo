import { action } from '@ember/object';
import Component from '@glimmer/component';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { FilmList } from '../utilities/film-list';
import { CountryList } from '../utilities/country-list';
import AirportShuttle from '@mui/icons-material/AirportShuttle';
import blueGrey from '@mui/material/colors/blueGrey';
import brown from '@mui/material/colors/brown';
import pink from '@mui/material/colors/pink';
import green from '@mui/material/colors/green';
import { inject as service } from '@ember/service';

export default class TestAutocomplete extends Component {
  @service themeManager;
  @tracked customFilmOptions;
  @tracked groupHeaders;
  @tracked acValue = [];
  @tracked countriesFiltered;
  @tracked myOptions;
  @tracked controlOptions = ['A', 'B', 'C'];
  @tracked controlledValue = null;

  constructor() {
    super(...arguments);
    this.initializeThemeStuff();
    ///////////////
    //Basic Select
    this.myOptions = ['A', 'B', 'C'];
    ////////////////

    ////////////////
    //Country Autocomplete
    this.acSX = { width: 300 };
    this.clearIcon = { icon: AirportShuttle };
    this.countries = CountryList;

    ////////////////

    ////////////////
    //Film Autocomplete
    this.filmOptions = FilmList.map((option) => {
      const firstLetter = option.title[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
      };
    });
    this.filmOptions.sort(this.filmSorter);
    ////////////////////////////////////////
  }

  @action
  controllerChanged(value) {
    this.controlledValue = value;
  }

  @action
  controlledChanged(value) {
    this.controlledValue = value;
  }

  filmSorter(a, b) {
    let str2 = a.firstLetter;
    let str1 = b.firstLetter;
    return -str1.localeCompare(str2);
  }

  movieOptionLabel(option) {
    if (option) {
      return option.title + ' (' + option.year + ') ';
    } else {
      return '';
    }
  }

  movieGrouping(option) {
    return option.firstLetter;
  }

  @action
  optionsFilter(options, state) {
    const optionsFiltered = [];
    options.forEach((option) => {
      const showValue = option.title + ' ' + option.year;
      if (showValue.toLowerCase().includes(state.inputValue.toLowerCase())) {
        optionsFiltered.push(option);
      }
    });
    this.customFilmOptions = optionsFiltered;

    this.createGroupHeaders();

    return optionsFiltered;
  }

  createGroupHeaders() {
    this.groupHeaders = A();
    this.customFilmOptions.forEach((filmOption) => {
      if (!this.groupHeaders.includes(filmOption.firstLetter)) {
        this.groupHeaders.addObject(filmOption.firstLetter);
      }
    });
  }

  ///////////////////////
  //Basic Select
  @action
  addToOptions() {
    this.myOptions.push('D');
  }

  @action
  removeFromOptions() {
    this.myOptions.pop();
  }
  ////////////////////////

  ////////////////////////
  //Country Autocomplete
  @action
  onAcChange(event, value, reason, details) {
    this.acValue = value;
    //this.acValue = value ? value.label : '';
    console.log('onAcChange Called');
  }

  @action
  onInputAcChange(event, value, reason) {
    console.log(`input changed, value: (${value})`);
  }

  countryOptionLabel(option) {
    if (option) {
      return option.label;
    } else {
      return '';
    }
  }

  @action
  countryFilterOptions(options, state) {
    return this.countryFilteredOptions(options, state.inputValue);
  }

  countryFilteredOptions(options, inputValue) {
    this.countriesFiltered = [];
    options.forEach((option) => {
      const showValue = option.label + ' ' + option.code + ' +' + option.phone;
      if (showValue.toLowerCase().includes(inputValue.toLowerCase())) {
        this.countriesFiltered.push(option);
      }
    });

    return this.countriesFiltered;
  }

  ///////////////////////
  initializeThemeStuff() {
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
}
