import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const theme = {
    themes: {
        light: {
            primary: '#d50000',
            secondary: '#ffdc12',
            accent: '#ff0326',
            error: '#b71c1c',
        },
        dark: {
            primary: '#d50000',
            secondary: '#ffdc12',
            accent: '#ff0326',
            error: '#b71c1c',
        }
    }
}

export default new Vuetify({
    theme,
});
