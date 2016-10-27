import Ember from 'ember';

export default Ember.Component.extend({
  editCommentForm: false,
  actions: {
    editCommentForm() {
      this.set('editCommentForm', true);
    },
    edit(comment) {
      var params = {
        user: this.get('user'),
        content: this.get('content')
      }
      this.set('editCommentForm', false);
      this.sendAction('editComment', comment, params);
    },
    delete(comment) {
      if(confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment)
      }
    }
  }
});
