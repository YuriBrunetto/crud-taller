import DS from 'ember-data';

export default DS.Model.extend({
  ticket: DS.belongsTo('ticket'),
  body: DS.attr('string'),
  date: DS.attr('string'),
  author: DS.attr('string')
});
