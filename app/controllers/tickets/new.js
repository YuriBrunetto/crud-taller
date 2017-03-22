import Ember from 'ember';

export default Ember.Controller.extend({
  categories: ['Dúvida', 'Conta violada', 'Outros'],
  category: 'Dúvida',

  products: ['General Wars', 'Barbarians', 'Magic Campus'],
  product: 'General Wars',

  actions: {
    chooseCategory(cat) {
      this.set('category', cat);
    },
    chooseProduct(prod) {
      this.set('product', prod);
    },
    saveTicket() {
      let newTicket = this.store.createRecord('ticket', {
        category: this.get('category'),
        product: this.get('product'),
        createdAt: new Date(),
        updatedAt: '--',
        attendedBy: '--',
        status: 'Aberto',
        message: this.get('message'),
        response: null
      });

      newTicket.save()
        .then(() => this.transitionToRoute('tickets'));
    }
  }
});
