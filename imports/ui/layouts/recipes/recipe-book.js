import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Recipes } from '../../../api/lists/recipes.js';

import './recipe-book.html';
import './newRecipe.js';
import './Recipe.js';

Template.Recipes.events({
	'click .new-recipe': () => {
		Session.set('newRecipe', true);
	}
})

Template.Recipes.onCreated(function bodyOnCreated() {
  var self =this;
  self.autorun(() => {
  	self.subscribe('recipes');
  })
});

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({})
	}
});






