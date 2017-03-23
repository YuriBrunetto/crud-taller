import Ember from 'ember';

export default Ember.Controller.extend({
  categories: ['Dúvida', 'Conta violada', 'Outros'],
  category: 'Dúvida',

  products: ['General Wars', 'Barbarians', 'Magic Campus'],
  product: 'General Wars',

  formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `${day}/${month+1}/${year}`;
  },

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
        createdAt: this.formatDate(new Date()),
        updatedAt: '--',
        attendedBy: '--',
        status: 'Aguardando',
        message: this.get('message'),
        response: null
      });

      newTicket.save()
        .then(() => this.transitionToRoute('tickets'));
    }
  }
});
