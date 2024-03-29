import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tickets', function() {
    this.route('new');
    this.route('edit', { path: '/:ticket_id/edit' });
  });
});

export default Router;
