import axios from "axios"
import qs from 'qs'
import baseUrl from "@/api/env.js"
axios.defaults.baseURL = baseUrl
export default function ajax(url, data = {}, type = "GET") {
	return new Promise(function(resolve, reject) {
		let promise;
		switch (type) {
			case "GET":
				let dataStr = ''
				Object.keys(data).forEach(key => {
					dataStr += key + '=' + data[key] + '&'
				})
				if (dataStr !== '') {
					dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
					url = url + '?' + dataStr
				}
				promise = axios.get(url)
				break;
			case "D":
				promise = axios.delete(url, data)
				break;
			case "List":
				promise = axios.post(url, data)
				break;
			case "POST2":
				promise = axios.post(url, data)
				break;
			default:
				promise = axios.post(url, qs.stringify(data))
				break;
		}
		promise.then(res => {
			resolve(res.data)
		}).catch(error => {
			reject(error)
		})
	})
}
