import { createApp } from "vue/dist/vue.esm-bundler"

const App = {
    data(){
        return {
            message:"Hello World"
        }
    },
    template: "<h1>{{message}}</h1>"
}
createApp(App).mount("#app")