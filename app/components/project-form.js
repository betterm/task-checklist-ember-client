import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: function() {
    return (this.get('project').id) ? 'Update Project' : 'Add Project';
  }.property(),
  actions: {
    submit: function () {
      this.sendAction('action', this.get('project'));
    }
  }
});
