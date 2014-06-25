/* ---------------------------------------------------- +/

## Story ##

Code related to the story template

/+ ---------------------------------------------------- */

Template.story.created = function () {
  //
};

Template.story.helpers({
    isLoggedIn: function () {
    return !!Meteor.user();
  }
});

Template.story.rendered = function () {
  //
};

Template.story.events({

  'submit': function (e, tmpl) {

    var newComment = {
	story_id : this.story._id,
	username : Meteor.user().username,
	createdDate : new Date(),
	body : tmpl.find("#text").value
    }

    var id = Comments.insert(newComment);
  }
});
