import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Recipes } from '../../api/lists/recipes.js';

import './Menu.html';


Template.Menu.onCreated(function bodyOnCreated() {
  var self =this;
  self.autorun(() => {
  	self.subscribe('recipes');
  })
});

Template.Menu.helpers({
	recipes: ()=> {
		return Recipes.find({inMenu: true});
	}
});