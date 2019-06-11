function my$(id) {
	return document.getElementById(id);
}

//innerText和textContent的兼容解决函数

/**
 * 设置标签内容
 * @param {Object} element标签名
 * @param {Object} text设置的文本
 */
function setinnerText(element, text) {
	if(typeof element.textContent != "undefined") {
		element.textContent = text;
	} else {
		element.innerText = text;
	}
}

/**
 * 得到标签的文本
 * @param {Object} element标签名
 */
function getinnerText(element) {
	if(typeof element.textContent != "undefined") {
		return element.textContent;
	} else {
		return element.innerText;
	}
}

/**
 * 获取元素的第一个子节点
 * @param {Object} element元素
 */
function getFirstChildElement(element) {
	var list = element.firstElementChild;
	if(list) {
		return list;
	} else {
		list = element.firstChild;
		while(list && list.nodeType != 1) {
			list = list.nextSibling;
		}
		return list;
	}
}

/**
 * 获取元素的最后一个子节点
 * @param {Object} element元素
 */
function getLastChildElement(element) {
	var list = element.lastElementChild;
	if(list) {
		return list;
	} else {
		list = element.lastChild;
		while(list && list.nodeType != 1) {
			list = list.previousSibling;
		}
		return list;
	}
}

/**
 * 为元素绑定事件兼容代码
 * @param {Object} element元素
 * @param {Object} type绑定的事件类型
 * @param {Object} fn函数
 */
function addEventListener(element, type, fn) {
	if(element.addEventListener) {
		element.addEventListener(type, fn, false);
	} else if(element.attachEvent) {
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}

/**
 * 为元素解绑事件兼容代码
 * @param {Object} element元素
 * @param {Object} type解绑事件类型
 * @param {Object} fn解绑的函数名
 */
function removeEventListener(element, type, fn) {
	if(element.removeEventListener) {
		element.removeEventListener(type, fn, false);
	} else if(element.detachEvent()) {
		element.detachEvent(type, fn);
	} else {
		element["on" + type] = null;
	}
}