//import React = require('react');
//import ReactDOM = require('react-dom');
import {MyService} from '../services/Service';
declare var ReactDOM:any; // added so we can work with ReactDOM w/o typescript complaining

/**
* React Components
**/

/*Parent Component*/
class RecipeList extends React.Component<any, any> {
  constructor(props:any){
    super(props);
    this.state = { recipes: [] }; // setting initial state
  }
  componentWillMount(){
    var query1 = ['recipes', {from: 0, to: 9}, Recipe.recipe()];
    var query2 = ['recipes', {from: 0, to: 9}, 'ingredients', {from: 0, to:9}, Ingredients.ingredients()];

    var service = new MyService();
    service.model().get(query1, query2)
      .then( data=>{
        console.log(data.json);
        console.log(JSON.stringify(data.json, null, 4));
        this.setState({
          recipes: _.values(data.json.recipes)
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.recipes.map( (recipe, index) => {
          return (
            <Recipe key={index} {...recipe} />
          );
        })}
      </div>
    );
  }
}

/*Child and Parent Compenent*/
class Recipe extends React.Component<any, any> {
  constructor(props:any){
    super(props);
  }
  static recipe() {
    //see: http://stackoverflow.com/questions/29433130/react-statics-with-es6-classes
    return _.union( Name.recipe(), Instructions.recipe(), Authors.recipe());
  }
  static ingredients() {
    return Ingredients.ingredients();
  }
  render() {
    return (
      <div>
        <Name name={this.props.name}/>
        <Instructions instructions={this.props.instructions} />
        <Ingredients ingredients={this.props.ingredients}/>
        <Authors authors={this.props.authors}/>
        <hr/>
      </div>
    );
  }
}

/*Child Component, Leaf*/
class Name extends React.Component<any, any> {
  constructor(props:any){
    super(props);
  }
  static recipe() {
    //see: http://stackoverflow.com/questions/29433130/react-statics-with-es6-classes
    return ['name']
  }
  render() {
    return (
      <h1>Name: {this.props.name}</h1>
    );
  }
}

/*Child Component, Leaf*/
class Instructions extends React.Component<any, any> {
  constructor(props:any){
    super(props);
  }
  static recipe() {
    //see: http://stackoverflow.com/questions/29433130/react-statics-with-es6-classes
    return ['instructions'];
  }
  render() {
    return (
      <h1>Instructions: {this.props.instructions}</h1>
    );
  }
}

/*Child Component, Leaf*/
class Ingredients extends React.Component<any, any> {
  constructor(props:any){
    super(props);
  }
  static ingredients() {
    //see: http://stackoverflow.com/questions/29433130/react-statics-with-es6-classes
    return ['name', 'description'];
  }
  render() {
    return (
      <h1>{JSON.stringify(this.props.ingredients)}</h1>
    );
  }
}

/*Child Component, Leaf*/
class Authors extends React.Component<any, any> {
  constructor(props:any){
    super(props);
  }
  static recipe() {
    //see: http://stackoverflow.com/questions/29433130/react-statics-with-es6-classes
    return ['authors'];
  }
  render() {
    return (
      <h1>Authors: {JSON.stringify(this.props.authors)}</h1>
    );
  }
}


/*Main App Component*/
export class App extends React.Component<any, any> {
  constructor(props:any){
    super(props);
  }
  render() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }
  show() {
    ReactDOM.render(
      <App />,
      document.getElementById('target')
    );
  }
}
