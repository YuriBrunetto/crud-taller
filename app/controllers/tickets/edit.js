import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    closeTicket(params) {
      this.store.findRecord('ticket', params.id)
        .then((ticket) => {
          ticket.set('status', 'Fechado');
          ticket.set('updatedAt', new Date());
          this.transitionToRoute('tickets');
        });
    },
    answerTicket(params) {
      this.store.findRecord('ticket', params.id)
        .then((ticket) => {
          this.set('response', this.get('response'));
          ticket.set('updatedAt', new Date());
          this.transitionToRoute('tickets');
        });
    }
  }
});
