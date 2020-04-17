export default {
    setLanguage(state, value) {
        state.language = value;
        localStorage.setItem('language', value);
    },
};
