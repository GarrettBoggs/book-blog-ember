import Ember from 'ember';

export default Ember.Component.extend({
  chosenCategory: true,
  actions:{
    setTechnique(){

      this.set("chosenCategory", true);
      console.log(this.chosenCategory)
    },
    setShopping(){
      this.set('chosenCategory', "shopping");
      console.log(this.chosenCategory)
    },
    checkEquals: function() {
      return chosenCategory;
    }.property('article')

  }
});
