import DS from 'ember-data';

export default DS.Model.extend({
  codigo: DS.attr('string'),
  categoria: DS.attr('string'),
  produto: DS.attr('string'),
  criado: DS.attr('date'),
  atualizado: DS.attr('date'),
  atendido: DS.attr('string'),
  status: DS.attr('string')
});
