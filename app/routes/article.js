import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      article: this.store.findRecord('article', params.article_id),
      comments:  this.store.findAll('comment')
    });
  },
  actions:{
    delete(model){
      model.destroyRecord();
      this.transitionTo('index');
    },
    update(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('index');
    },

    saveComment(params){
      var newComment = this.store.createRecord('comment', params);
      var article = params.article;
      article.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return article.save();
      });
      this.transitionTo('article');
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('article');
    }
  }
});
