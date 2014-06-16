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

// Publish a single story

Meteor.publish('singleStory', function(id) {
  return Stories.find(id);
});