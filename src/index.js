
import _ from 'lodash';
import './style.css';
import Icon from './wz.png';

function component() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['hello', 'webpack'], ' ');
	element.classList.add('hello')

	//将图像添加到我们已经存在的div中
	var myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	return element
}

document.body.appendChild(component());