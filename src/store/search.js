import api from '@/api'
const actions = {
    // 请求获取搜索列表
    async reqgetSearch({ commit }, params) {
        try {
            let result = await api.getSearch(params);
            if (result.code == 200) {
                // console.log(result.result)
                commit('REQGETSEARCH', result.result)
                return 'ok'
            }
        } catch (error) {
            return Promise.resolve('fail')
        }
    },
    //请求获取搜索建议
    async reqsearchSuggest({ commit }, params) {
        let result = await api.getSearchSuggest(params);
        // console.log(result)
        try {
            if (result.code == 200) {
                // console.log(result.result)
                commit('REQSEARCHSUGGEST', result.result)
                return 'ok'
            }
        } catch (error) {
            return Promise.resolve('fail')
        }
    },
}
const mutations = {
    //存储搜索列表
    REQGETSEARCH(state, searchResult) {
        state.searchResult = searchResult
    },
    // 存储搜索建议
    REQSEARCHSUGGEST(state, searchSuggestResult) {
        state.searchSuggest = searchSuggestResult
    }
}
const state = {
    searchResult: {},
    searchSuggest: {}
}
const getters = {}
export default {
    namespaced: true,
    actions, mutations, state, getters
}