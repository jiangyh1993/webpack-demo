import _ from 'lodash';

function component() {
  	var element = document.createElement('div');

  	//loadsh now import by this script
  	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  	return element;
}

document.body.appendChild(component());