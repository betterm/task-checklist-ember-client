import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('task', params.task_id);
  },
  setupController: function(controller, model) {
    controller.set('task', model);
  },
  actions: {
    updateTask: function(task) {
      var _this = this;
      var projectId = task.get('project_id');
      task.save().then(function () {
        _this.transitionTo('projects.show', projectId);
      });
    }
  }
});
