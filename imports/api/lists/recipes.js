import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Recipes = new Mongo.Collection('recipes');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('recipes', function tasksPublication() {
    return recipes.find({author: this.userId});
  });
}

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
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Recipes.attachSchema( RecipeSchema );