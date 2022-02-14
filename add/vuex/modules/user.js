const state = {
  userInfo: {}
}

const mutations = {
	userInfo_fn(state,params){
		state.userInfo = params
	}
}

const actions = {
	
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}