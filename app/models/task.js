import DS from 'ember-data';

export default DS.Model.extend({
  project:    DS.belongsTo('project', { polymorphic: true }),
  name:       DS.attr('string'),
  complete:   DS.attr('boolean'),
  deadline:   DS.attr('string'),
  priority:   DS.attr('string'),
  project_id: DS.attr('string')
});
