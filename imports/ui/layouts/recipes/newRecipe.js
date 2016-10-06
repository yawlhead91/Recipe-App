import { Template } from 'meteor/templating';
import { Recipes } from '../../../api/lists/recipes.js';

import './newRecipe.html';

Template.NewRecipe.events({
	'click .fa-close': function() {
		Session.set('newRecipe',false);
	}
})

Template.NewRecipe.helpers({
    formCollection() {
        return Recipes;
    }
});

