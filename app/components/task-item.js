import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteTask: function () {
      var task = this.get('task');
      var project = task.get('project');
      project.get('tasks').removeObject(task);
      task.destroyRecord();
    },
    toggleComplete: function () {
      var task = this.get('task');
      task.set('complete', !task.get('complete'));
      task.save();
    }
  }
});
