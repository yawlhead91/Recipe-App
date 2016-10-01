
//Import templates
import '../../ui/layouts/homelayout.js';
import '../../ui/layouts/mainlayout.js';
import '../../ui/layouts/recipes/recipe-book.js';


//Route Definitions 
FlowRouter.route('/',{
	 name: 'home',
	 action() {
	 	BlazeLayout.render('HomeLayout');
	 }
});

FlowRouter.route('/recipe-book',{
	 name: 'recipe-book',
	 action() {
	 	BlazeLayout.render('MainLayout', {
	 		main: 'Recipes'
	 	});
	 }
});

