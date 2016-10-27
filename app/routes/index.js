import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('article'),
      comments: this.store.findAll('comment')
    });
  },
  actions:{
    articleToDb(params){
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    },
    setTechnique(){
      console.log("This works!");
      this.set('chosenCategory', true);
    },
    setShopping(){
      chosenCategory = "shopping";
    },
    checkEquals(){
      // return (chosenCategory === article.category);
      this.set('chosenCategory', true);
    }

  }
});
