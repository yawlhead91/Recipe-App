import { Template } from 'meteor/templating';
import { Recipes } from '../../../api/lists/recipes.js';

import './Recipe.html';

Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
})

Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu)	
	},
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get());
	}

})

Template.Recipe.helpers({
    recipe() {
        return Recipes;
    },
    updateRecipeId() {
    	return this._id;
    },
    editMode() {
    	return Template.instance().editMode.get();
    }
});
