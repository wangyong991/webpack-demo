
import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	element.innerHTML = _.join(['hello', 'webpack'], ' ');

	btn.innerHTML = '点击这里，然后查看console!';
	btn.onclick = printMe;

	element.appendChild(btn)

	return element;
}

console.log(module.hot)
document.body.appendChild(component());
