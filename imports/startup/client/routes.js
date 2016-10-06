
//Import templates
import '../../ui/layouts/homelayout.js';
import '../../ui/layouts/mainlayout.js';
import '../../ui/layouts/recipes/recipe-book.js';
import '../../ui/layouts/recipes/RecipeSingle.js';
import '../../ui/layouts/Menu.js';
import '../../ui/layouts/ShoppingList.js';


if (Meteor.isClient){
	Accounts.onLogin(function () {
    	FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function () {
	    FlowRouter.go('home');
	});
}


FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
	 	FlowRouter.go('home');
	 }
}]);
//Route Definitions 
FlowRouter.route('/',{
	 name: 'home',
	 action() {
	 	if(Meteor.userId()){
	 		FlowRouter.go('recipe-book');
	 	}
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

FlowRouter.route('/recipe/:id',{
	 name: 'recipeSingle',
	 action() {
	 	BlazeLayout.render('MainLayout', {
	 		main: 'RecipeSingle'
	 	});
	 }
});

FlowRouter.route('/menu',{
	 name: 'menu',
	 action() {
	 	BlazeLayout.render('MainLayout', {
	 		main: 'Menu'
	 	});
	 }
});

FlowRouter.route('/shoppingList',{
	 name: 'shoppingList',
	 action() {
	 	BlazeLayout.render('MainLayout', {
	 		main: 'ShoppingList'
	 	});
	 }
});


