import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateValue(value) {
      this.set('category.value', value);
    },
    saveTicket() {
      let newTicket = this.store.createRecord('ticket', {
        category: this.get('category.value'),
        product: this.get('product.value'),
        createdAt: new Date(),
        updatedAt: '--',
        attendedBy: '--',
        status: 'Aberto',
        message: this.get('message')
      });
      // newTicket.save()
      //   .then(() => this.transitionTo('tickets'));
    }
  }
});
