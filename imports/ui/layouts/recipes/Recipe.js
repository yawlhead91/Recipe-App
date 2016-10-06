import { Template } from 'meteor/templating';
import './Recipe.html';

Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu)	
	}
})