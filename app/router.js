import EmberRouter from '@ember/routing/router';
import config from 'ember-paper-react-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('app-bar');
  this.route('attributes');
  this.route('autocomplete');
  this.route('avatar');
  this.route('badge');
  this.route('button');
  this.route('card');
  this.route('checkbox-radio-switch');
  this.route('chip');
  this.route('circular-progress-backdrop');
  this.route('dialog');
  this.route('drawer');
  this.route('icon');
  this.route('menu');
  this.route('select');
  this.route('tabs');
  this.route('text-field');
  this.route('tooltip');
  this.route('paper');
  this.route('validations');
});
