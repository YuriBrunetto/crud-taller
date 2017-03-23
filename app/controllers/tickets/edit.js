import Ember from 'ember';

export default Ember.Controller.extend({
  messages: Ember.computed.alias('model.message'),

  formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `${day}/${month+1}/${year}`;
  },

  actions: {
    closeTicket(params) {
      this.store.findRecord('ticket', params.id)
        .then((ticket) => {
          ticket.set('status', 'Fechado');
          ticket.set('updatedAt', this.formatDate(new Date()));
          ticket.save();
          this.transitionToRoute('tickets');
        });
    },
    answerTicket(params) {
      let ticket = this.store.peekRecord('ticket', params.id);
      let response = this.store.createRecord('response', {
        ticket: ticket,
        body: this.get('response'),
        author: this.get('author'),
        date: this.formatDate(new Date())
      });
      response.save();

      this.store.findRecord('ticket', params.id)
        .then((ticket) => {
          ticket.set('updatedAt', this.formatDate(new Date()));
          ticket.set('status', 'Aberto');
          ticket.set('attendedBy', this.get('author'));
          ticket.save();
          this.transitionToRoute('tickets');
        });
    }
  }
});
