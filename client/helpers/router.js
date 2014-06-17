/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  myFilter: function () {
    // do something
  },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop(); 
    }
  }

}

Router.before(filters.myFilter, {only: ['stories']});

// Routes

Router.map(function() {

  // Stories

  this.route('stories', {
    before: function() {
         Session.set('page', this.params.page);
    },
    path: '/stories/:category?',
    waitOn: function () {
      var perPage = 10;
      var filter = {};
      var sort = {createdDate:-1};

      if(this.params.category != null)
      {
	if(this.params.category == 'top')
		sort = { countValidated:-1 , createdDate:-1 }
	else
		filter = {category_id : this.params.category};
      }

      var options = {
	   sort: sort,
           limit: perPage,
           skip:  perPage * Session.get('page') - perPage
         }

      return [Meteor.subscribe('allStories', filter, options),
              Meteor.subscribe('allStoriesCount', filter) ];
    },
    data: function () {
      return {
        stories: Stories.find(),
	count : StoriesCount.findOne().count
      }
    }
  });

  this.route('story', {
    path: '/story/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleStory', this.params._id);
    },
    data: function () {
      return {
        story: Stories.findOne(this.params._id)
      }
    }
  });

  this.route('storyForm', {
    waitOn: function () {
      return Meteor.subscribe('categories');
    },
    data: function () {
      return {
        categories: Categories.find()
      }
    }

  });

  // Pages

  this.route('homepage', {
    path: '/',
    before: function() {
         this.redirect('/stories');
    }
  });

  this.route('content');

  // Users

  this.route('login'); 

  this.route('signup'); 

  this.route('forgot'); 

});
