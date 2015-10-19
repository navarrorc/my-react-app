/*
* Netflix's falcor library example
*/
declare var falcor:any; // added so we can work with falcor w/o typescript complaining, quick fix for now...waiting on tsd definition to be released
const $ref = falcor.Model.ref; // helper, see http://goo.gl/ALFsGP
const $atom = falcor.Model.atom;

var json = {
  ingredientsById: {
    1: {
      name: 'Flour',
      description: 'white and powdery'
    },
    2: {
      name: 'Chocolate Chips',
      description: 'delicious'
    }
  },
  recipes: [
    {
      name: 'Cookies',
      instructions: 'Bake them',
      ingredients: [
        $ref('ingredientsById[1]'),
        $ref('ingredientsById[2]')
      ],
      authors: $atom(['Robert', 'John'])
    },
    {
      name: 'Brownies',
      instructions: 'Also bake them',
      ingredients: [
        $ref('ingredientsById[1]')
      ],
      authors: $atom(['Carlos', 'Bonnie'])
    }
  ]
}

var model = new falcor.Model({
  cache: json
});

export class MyService {
  model(){
    // returns a promise
    //return model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions","authors"]');
    //return model.get(query1, query2);
    return model;
  }
}
