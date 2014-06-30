Template.storyForm.helpers({
  isLoggedIn: function () {
    return !!Meteor.user();
  }
})

Template.storyForm.rendered = function(){
        $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
    };


Template.storyForm.events = {
    'submit': function (e, tmpl) {
        // Don't postback
        e.preventDefault();

        //Meteor.call("getStoryCount", function(error,result) { 

		var newStory = {
		number : null, //result,
		body:tmpl.find("#update").value,
		createdDate : new Date(),
		category_id: tmpl.find("#cat").value,
		published : null,
		countValidated: 0,
		countDeserved: 0,
		owner : tmpl.find("#username").value,
		ownerEmail : tmpl.find("#email").value
        	};
 
        	Stories.insert(newStory);
	//});

	alert('Thanks for your post');
	Router.go('/stories');
    }
};

