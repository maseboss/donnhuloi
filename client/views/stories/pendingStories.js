/* ---------------------------------------------------- +/

## Story ##

Code related to the story template

/+ ---------------------------------------------------- */

Template.pendingStories.created = function () {
  //
};

Template.pendingStories.helpers({

});

Template.pendingStories.rendered = function () {
  //
};

Template.pendingStories.events({

  'click .publishLink': function(e) {

    var storyId = this._id;
    Meteor.call("getStoryCount", function(error,result) { 

    	Stories.update({_id: storyId}, { $set: { published : true , number : result  } }, function(error) {console.log('error: ' + error);} );
    });
    //send email
  },

  'click .rejectLink': function(e) {

    Stories.update({_id: this._id}, { $set: { published : false} }, function(error) {console.log('error: ' + error);} );
    //send email
  }

});
