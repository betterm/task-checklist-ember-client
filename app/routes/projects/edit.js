import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('project', params.project_id);
  },
  setupController: function(controller, model) {
    controller.set('project', model);
  },
  actions: {
    updateProject: function(project) {
      var _this = this;
      project.save().then(function(){
        _this.transitionTo('projects');
      });
    }
  }
});
