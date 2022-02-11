import { api }  from '../request.js'

export function login(data) {
	let obj = {
		url:'/login/userLogin',
		data:data,
		method:"post"
	}
	return api(obj)
	
	
  // return post("/connect/token", params)
}