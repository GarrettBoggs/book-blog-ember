import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addArticle(){
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        authorPhoto: this.get("authorPhoto"),
        content: this.get("article-content"),
        image: this.get("image")
      };
      this.sendAction("saveArticle", params);
    }
  }
});
