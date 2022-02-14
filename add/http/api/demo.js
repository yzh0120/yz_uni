import { post }  from '../request.js'

export function login(data,other) {
	// let obj = {
	// 	url:'/login/userLogin',
	// 	data:data,
	// 	method:"POST"
	// }
	// return api(obj)
	

	
	
  return post('/login/userLogin', data,other)
}

export function twoHundred(data, other) {
  return post('/request/twoHundred', data, other)
}

export function notTwoHundred(data, other) {
  return post('/request/notTwoHundred', data, other)
}