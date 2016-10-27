import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        user: this.get('user'),
        content: this.get('content'),
        article: this.get('article'),
      };
      console.log(params);
      console.log(this.article);
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
