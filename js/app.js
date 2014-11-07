App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts');
  this.resource('post', { path: ':post_id' });
});

App.PostsRoute = Ember.Route.extend({
   model: function () {
       return posts;
   }
});

var posts = [
    {
        id: '1',
        title: "Rails is Omakase",
        author: { name: 'd2h'},
        date: new Date('12-27-2012'),
        excerpt: "There are alots of softwares",
        body: 'I want this'
    }, {
        id: '2',
        title: "The Parley Letter",
        author: { name: 'd2h'},
        date: new Date('12-27-2012'),
        excerpt: "My appearance on the Ruby Roques",
        body: 'A long list of topics'
}];