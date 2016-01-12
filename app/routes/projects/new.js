import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('project');
  },
  setupController: function(controller, model) {
    controller.set('project', model);
  },
  actions: {
    createProject: function(project) {
      var _this = this;
      project.save().then(function(project) {
        _this.transitionTo('projects.show', project);
      });
    }
  }
});
