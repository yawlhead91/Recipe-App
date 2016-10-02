import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Recipes } from '../../../api/lists/recipes.js';

import './recipe-book.html'
import './newRecipe.js'

Template.Recipes.onCreated(function bodyOnCreated() {
  Meteor.subscribe('recipes');
});




