import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  product: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  attendedBy: DS.attr('string'),
  status: DS.attr('string'),
  message: DS.attr('string'),
  response: DS.attr('string')
});
