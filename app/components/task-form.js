import Ember from 'ember';

export default Ember.Component.extend({
  task: {},

  actions: {
    addTask: function() {
      var _task = this.get('task');
      var projectId = this.get('_targetObject.project.id');
      var store = this.get('_targetObject.project.store');
      var project = store.peekRecord('project', projectId);
      var task = store.createRecord('task', _task);

      task.setProperties({
        'name': this.get('task.name'),
        'project': project,
        'priority': this.get('task.priority'),
        'deadline': this.get('task.deadline')
      });
      task.set('project', project);
      if (!task.name) return;
      task.save().then(function() {
        project.save();
      });

      this.set('task.name', '');

      var $task = this.$('#task-form');
      $task.focus();
    }
  }
});
