import axios from './AxiosInterceptors';
import DoApi from './DoApi';

// api装饰器
function send(target, name, descriptor, callback) {
	descriptor.value = (...args) => {
		return callback(...args);
	};
	return descriptor;
}

// 添加 路径
function url(url) {
	return function (target, name, descriptor) {
		descriptor.url = url;
	};
}


function get(target, name, descriptor) {
	return send(target, name, descriptor, function (args, urlArgs = {}, config) {
		return axios.get(setUrlArgs(descriptor.url, urlArgs) + '?' + DoApi.jsonUrlFormat(args), config);
	});
}

function post(target, name, descriptor) {
	return send(target, name, descriptor, function (args, params = {}, urlArgs = {}, config) {
		return axios.post(
			setUrlArgs(descriptor.url, urlArgs) + '?' + DoApi.jsonUrlFormat(params),
			DoApi.doJson(args),
			config
		);
	});
}

function del(target, name, descriptor) {
	return send(target, name, descriptor, function (args = {}, urlArgs = {}, config) {
		return axios.delete(setUrlArgs(descriptor.url, urlArgs) + '?' + DoApi.jsonUrlFormat(args), config);
	});
}

function put(target, name, descriptor) {
	return send(target, name, descriptor, function (args = {}, params = {}, urlArgs = {}, config) {
		return axios.put(
			setUrlArgs(descriptor.url, urlArgs) + '?' + DoApi.jsonUrlFormat(params),
			DoApi.doJson(args),
			config
		);
	});
}

function patch(target, name, descriptor) {
	return send(target, name, descriptor, function (args = {}, urlArgs = {}, config) {
		return axios.patch(setUrlArgs(descriptor.url, urlArgs) + '?' + DoApi.jsonUrlFormat({}), DoApi.doJson(args), config);
	});
}

// 满足一些接口需要 url/{id} 形式传参
function setUrlArgs(url, args) {
	args = Object.values(args);
	if (args.length) {
		url += '/' + args.join('/');
	}
	return url;
}


export { get, url, post, del, put, patch };
