/* ---------------------------------------------------- +/

## storyControl ##

Code related to the storyControl template

/+ ---------------------------------------------------- */

Template.storyControl.created = function () {
  //
};

Template.storyControl.helpers({

 validated: function() {

    if(Session.get("V_" + this._id) != true)
	return '<a href="#" class="validateLink">I validate</a>';
    else
	return 'Thanks for your vote';
  },
 deserved: function() {

    if(Session.get("D_" + this._id) != true)
	return '<a href="#" class="deserveLink"> You deserved it </a>';
    else
	return 'Thanks for your vote';
  }

});

Template.storyControl.rendered = function () {
  //
};

Template.storyControl.events({

  'click .validateLink': function(e) {
    e.preventDefault();
    Stories.update({_id: this._id}, {$inc: { countValidated : 1} }, function(error) {console.log('error: ' + error);} );
    Session.set("V_" + this._id, true);
  },

  'click .deserveLink': function(e) {
    e.preventDefault();
    Stories.update({_id: this._id}, {$inc: { countDeserved : 1} }, function(error) {console.log('error: ' + error);} );
    Session.set("D_" + this._id, true);
  }

});
