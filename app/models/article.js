import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  authorPhoto: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  title: DS.attr()
});
