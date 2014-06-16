
Template.storyForm.events = {
    'submit': function (e, tmpl) {
        // Don't postback
        e.preventDefault();
 
        var newStory = {
		number : incrementCounter("storyNumber"),
		body:tmpl.find("#text").value,
		createdDate : new Date(),
		category_id: tmpl.find("#category").value,
		published : true,
		countValidated: 0,
		countDeserved: 0,
		owner : Meteor.users.findOne({ "emails.address" : 'mathieu@test.com' })
        };
 
        Stories.insert(newStory);
    }
};
