import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReview: function() {
      var newReview = this.store.createRecord('review', {
        name: this.get('name'),
        body: this.get('body'),
        rating: this.get('rating')
      });
      newReview.save();
      this.setProperties({
        name:'',
        body:'',
        rating:''
      });
    }
  }
});
