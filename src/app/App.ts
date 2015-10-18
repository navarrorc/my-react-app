//$ = jQuery = require('jquery');
require('../sass/styles.scss');

import {MyComponent} from './components/MyComponent';
import {MyService} from '../services/service';

var myComponent = new MyComponent(null)
myComponent.showComponent();

var myService = new MyService();
myService.getData().then( data => {
  console.log(data);
});
