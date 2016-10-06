import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Recipes } from '../../../api/lists/recipes.js';

import './RecipeSingle.html';

Template.RecipeSingle.onCreated(function() {
  var self =this;
  self.autorun(()=> {
  	var id = FlowRouter.getParam('id');
  	self.subscribe('singleRecipe', id);
  })
});

Template.RecipeSingle.helpers({
	recipe: ()=> {
		var id = FlowRouter.getParam('id');
		console.log(Recipes);
		return Recipes.findOne({_id:id});
	}
});