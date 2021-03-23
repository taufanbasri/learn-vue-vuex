import { createStore } from "vuex";

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './modules/counter/index';

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
});

export default store;