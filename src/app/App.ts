//$ = jQuery = require('jquery');
require('../sass/styles.scss');

import {App} from './components/App';
import {MyService} from './services/Service';

var app = new App(null)
app.show();

//var myService = new MyService();
// myService.getData().then( data => {
//   console.log(data);
// });
