import { createStore } from "vuex";
import getters from "./getters";
import state from "./state";
import mutations from "./mutations";

const store = createStore({
    state,
    mutations,
    getters
});

export default store;