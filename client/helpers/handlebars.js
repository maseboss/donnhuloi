/* ---------------------------------------------------- +/

## Handlebars Helpers ##

Custom Handlebars helpers.

/+ ---------------------------------------------------- */

Handlebars.registerHelper('myHelper', function(myArgument){
  return "Hello, " + myArgument;
});

Handlebars.registerHelper('formatDate', function(date) {
  return  moment(date).format('DD/MM/YYYY HH:mm:ss');
});
