import { Meteor } from 'meteor/meteor';
import { Recipes } from '../recipes.js';


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('recipes', function(){
  	console.log('Published')
    return Recipes.find({author: this.userId});
  });

  Meteor.publish('singleRecipe', function(id){
  	check(id,String);

    return Recipes.find({_id: id});
  });

}else{
	console.log("Not server");
}

