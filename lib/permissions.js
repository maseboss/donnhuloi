/* ---------------------------------------------------- +/

## Permissions ##

Permission checks

Usage:

if (can.editStory(Meteor.user(), myStory)){
  // do something  
}

/+ ---------------------------------------------------- */

can = {
  createStory: function (userId) {
    return true;
  },
  editStory: function (userId, item) {
    return userId === story.userId;
  },
  removeStory: function (userId, item) {
    return userId === story.userId;
  }
}
