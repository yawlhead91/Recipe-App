import { Template } from 'meteor/templating';
import { Recipes } from '../../../api/lists/recipes.js';

import './newRecipe.html';

Template.NewRecipe.helpers({
    formCollection() {
        return Recipes;
    }
});

