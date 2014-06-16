/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data 
if ( Categories.find().count() === 0) {
 
  Categories.insert({
    _id: "Love"
  });

  Categories.insert({
    _id: "Money"
  });

  Categories.insert({
    _id: "Work"
  });

  Categories.insert({
    _id: "Children"
  });

  Categories.insert({
    _id: "Pets"
  });

  Categories.insert({
    _id: "Health"
  });

  Categories.insert({
    _id: "Others"
  });

  Accounts.createUser({
    username: "Bui Thuy Ngan",
    email: "ngan@test.com",
    password: "Susu"
  });

  Accounts.createUser({
    username: "Mathieu RIO",
    email: "mathieu@test.com",
    password: "Susu"
  });


  // counters
  setCounter("storyNumber",0);

function insertNewStory(story){

  Stories.insert(story, {w: 1}, function(err, story){
    console.log("New story added as "+ story._id);
  });
}

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Love",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'mathieu@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Pets",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'mathieu@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });

  insertNewStory({
    number : incrementCounter("storyNumber"),
    body: "Hom nay, ..... DNL.",
    createdDate : new Date(),
    category_id : "Others",
    published : true,
    countValidated: 0,
    countDeserved: 0,
    owner : Meteor.users.findOne({ "emails.address" : 'ngan@test.com' })
  });



}
