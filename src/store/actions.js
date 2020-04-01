export default {
    setLanguage({ commit }, language) {
        localStorage.clear();
        commit('setLanguage', language);
    }
}