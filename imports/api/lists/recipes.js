import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Recipes = new Mongo.Collection('recipes');

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
	},
	desc: {
		type: String,
		label: "Description"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.use;rId
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		}
	}
});

Recipes.attachSchema( RecipeSchema );