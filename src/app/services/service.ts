/*
* Netflix's falcor library example
*/
declare var falcor:any; // added so we can work with falcor w/o typescript complaining, quick fix for now
const $ref = falcor.Model.ref; // helper, see http://goo.gl/ALFsGP
var model = new falcor.Model({
  cache: {
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
        ]
      },
      {
        name: 'Brownies',
        instructions: 'Also bake them',
        ingredients: [
          $ref('ingredientsById[1]')
        ]
      }
    ]
  }
});

export class MyService {
  getData(){
    // returns a promise
    return model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions"]');
  }
}
