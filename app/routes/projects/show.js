import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.findRecord('project', params.project_id);
  },
  afterModel: function(params) {
    return this.store.findAll('task', params.project_id);
  },
  setupController: function(controller, model, afterModel) {
    controller.set('project', model);
    controller.set('tasks', afterModel);
  },
  actions: {
    deleteProject: function(project) {
      var _this = this;
      project.destroyRecord().then(function() {
        _this.transitionTo('projects');
      });
    }

  }
});
