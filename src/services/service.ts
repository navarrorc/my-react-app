/*
* Netflix's falcor library
*/
declare var falcor:any; // added so we can work with falcor w/o typescript complaining, quick fix for now
var model = new falcor.Model({
  cache: {
    recipes: [
      {
        name: 'Cookies',
        instructions: 'Bake them'
      },
      {
        name: 'Brownies',
        instructions: 'Also bake them'
      }
    ]
  }
});

export class MyService {
  getData(){
    // returns a promise
    return model.get('recipes[0..1]["name", "instructions"]')
  }
}
