/* ---------------------------------------------------- +/

## Stories ##

All code related to the Stories collection goes here. 

/+ ---------------------------------------------------- */

Stories = new Meteor.Collection('stories');
Categories = new Meteor.Collection('categories');
StoriesCount = new Meteor.Collection('storiesCount');
// Allow/Deny

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

// Methods

Meteor.methods({
  createStory: function(story){
      Stories.insert(story);
  },
  removeStory: function(story){
    if(can.removeStory(Meteor.user(), story)){
      Stories.remove(story._id);
    }else{
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
    }
  }
});

