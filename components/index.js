import pageComponent from './page.vue'



export const up = {
    install: function (Vue) {
        Vue.component('page', pageComponent)
    }
}


