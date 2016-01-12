import DS from 'ember-data';

var _private = {
  currentTime () {
    return new Date();
  }
};

export default DS.Model.extend({
  name: DS.attr('string'),
  tasks: DS.hasMany('task', {async: false} )
});
