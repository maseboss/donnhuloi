
Template.storyForm.rendered = function(){
        $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
    };

Template.storyForm.events = {
    'submit': function (e, tmpl) {
        // Don't postback
        e.preventDefault();

        Meteor.call("getStoryCount", function(error,result) { 

		var newStory = {
		number : result,
		body:tmpl.find("#update").value,
		createdDate : new Date(),
		category_id: tmpl.find("#cat").value,
		published : true,
		countValidated: 0,
		countDeserved: 0,
		owner : tmpl.find("#username").value
        	};
 
        	Stories.insert(newStory);
	});

	alert('Thanks for your post');
	Router.go('/stories');
    }
};

