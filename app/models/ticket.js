import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  product: DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),
  attendedBy: DS.attr('string'),
  status: DS.attr('string'),
  message: DS.attr('string'),
  responses: DS.hasMany('response')
});
