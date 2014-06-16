/* ---------------------------------------------------- +/

## Story ##

Code related to the story template

/+ ---------------------------------------------------- */

Template.stories.created = function () {
  //
};

Template.stories.helpers({

  pagination : function () {
   var pagination = '';

   if(this.count > 10)
   {
	var currentPage = Session.get('page') == null ? 1 : Session.get('page');
	pagination += '<div class="pagination"><ul class="left">';

	for(var i = 0; i < 10 && i <= (this.count/10); i++)
	{
		if(currentPage < 10)
			pagination += '<li><a href="?page=' + (i+1) +'">'+ (i+1) +'</a></li>';
		else
			pagination += '<li><a href="?page=' + (currentPage - 5 + i) +'">'+ (currentPage - 5 + i) +'</a></li>';
	}
		

	pagination += '</ul><ul class="right">';

	if(currentPage == 1)
		pagination += '<li class="inactive">« Previous page</li>';
	else
		pagination += '<li><a href="?page=' + (currentPage-1) +'">« Previous page</li></a>';

	if(currentPage >= (this.count/10))
		pagination += '<li class="inactive">Next page »</li>';
	else
		pagination += '<li><a href="?page=' + (currentPage+1) +'">Next page »</li></a>';

	pagination += '</ul></div>';

   }

   return pagination;
  }
});

Template.stories.rendered = function () {
  //
};

Template.stories.events({
 //
});
