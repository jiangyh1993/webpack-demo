import _ from 'lodash';
import printMe from './print.js';
// import './style.css';
// import Icon from './icon.jpg';

function component() {
  	var element = document.createElement('div');
  	var btn = document.createElement('button');

  	//loadsh now import by this script
  	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  	btn.innerHTML = 'click me and check the console';
  	btn.onclick = printMe;

  	element.appendChild(btn);
  	// element.classList.add('hello');

  	// var myIcon = new Image();
  	// myIcon.src = Icon;

  	// element.appendChild(myIcon);

  	return element;
}

document.body.appendChild(component());