import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function (userId, doc) {
		// the user must be logged in, and the document must be owned by the user
		return !!userId;
	},
	update: function (userId, doc) {
		// can only change your own documents
		return !!userId;
	},
	remove: function (userId, doc) {
		// can only remove your own documents
		return doc.owner === userId;
	},
	fetch: ['owner']
});

Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});


RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
	},
	desc: {
		type: String,
		label: "Description"
	},
	ingredients: {
		//Sub Document
		type: [Ingredient]
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
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

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Recipes.update(id, {
			$set: {inMenu: !currentState},
		});
	}
});

Recipes.attachSchema( RecipeSchema );





