import { Template } from 'meteor/templating';
import { Recipes } from '../../api/lists/recipes.js';


import './ShoppingList.html'

Template.ShoppingList.onCreated(function bodyOnCreated() {
  var self =this;
  self.autorun(() => {
  	self.subscribe('recipes');
  })
});

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Recipes.find({inMenu: true});
	}
});