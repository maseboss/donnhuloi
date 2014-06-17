
Meteor.methods({
  getStoryCount: function () {
	return incrementCounter("storyNumber");
  }
});

