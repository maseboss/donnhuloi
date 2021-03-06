/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all stories

Meteor.publish('allStories', function(params, opts) {
  return Stories.find(params, opts);
});

Meteor.publish('allStoriesCount', function(params) {
  var self = this;
  self.added("storiesCount", Meteor.uuid(), {count : Stories.find(params).count() });
  self.ready();

});

Meteor.publish('pendingStories', function() {
  return Stories.find({published : null});
});

// Publish a single story

Meteor.publish('singleStory', function(number) {
  return Stories.find({ number : parseInt(number)});
});

//Publish categories

Meteor.publish('categories', function() {
  return Categories.find();
});

// Publish Comments

Meteor.publish('allComments', function(number) {
  var story = Stories.findOne({ number : parseInt(number)});
  var comments = Comments.find({story_id : story._id});
  return comments;
});


