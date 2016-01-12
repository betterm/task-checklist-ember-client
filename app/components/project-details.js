import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    deleteProject: function() {
      this.sendAction('action', this.get('project'));
    }
  }
});
