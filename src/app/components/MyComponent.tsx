import React = require('react');
import ReactDOM = require('react-dom');

/*React Component*/
export class MyComponent extends React.Component<any, any> {
  constructor(props:any){
    super(props);
  }
  render() {
     return <h1>Hello World!</h1>
  }
  showComponent() {
    ReactDOM.render(
      <MyComponent />,
      document.getElementById('target')
    );
  }
}
