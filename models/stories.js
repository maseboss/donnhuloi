/* ---------------------------------------------------- +/

## Stories ##

All code related to the Stories collection goes here. 

/+ ---------------------------------------------------- */

Stories = new Meteor.Collection('stories');
Categories = new Meteor.Collection('categories');
StoriesCount = new Meteor.Collection('storiesCount');
Comments = new Meteor.Collection('comments');

// Allow/Deny

Comments.allow({
  insert: function(storyId, doc){
    return true;
  }
});

Stories.allow({
  insert: function(userId, doc){
    return true;
  },
  update:  function(userId, doc, fieldNames, modifier){
    return true;
  },
  remove:  function(userId, doc){
    return can.removeStory(userId, doc);
  }
});

