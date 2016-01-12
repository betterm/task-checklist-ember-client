import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects', function() {
    this.route('new');
    this.route('edit', { path: '/:project_id/edit'});
    this.route('show', { path: '/:project_id' }, function() {
    });
  });
  this.route('tasks', function() {
    this.route('edit', { path: '/:task_id/edit' });
  });
});

export default Router;
