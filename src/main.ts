import './assets/main.css'
import { createApp, type ComponentOptions } from 'vue'
import { createPinia } from 'pinia'

//import App from './App.vue'
import router from './router'

/*
const appDesc = {
    //Main description for app.
    render() {
        return "this is sample text rendered in vue.js"
    }
}
*/


type Data = { 
    //returns local state of data in component (kind of like a template specifying data type expected)
    title: string
} 

const App = {
    //components: { appDesc },


    // moustache syntax, aka double curly braces {{}}
    template: `
        <div><h1> My Title: {{ title }} </h1></div> 
    `,
    created() {
        //hook that runs after component created, but before being mounted by the DOM
        console.log((this as ComponentOptions<Data>).title) //output to console what is displayed by title string upon creation
    },
    
    data(): Data {
        //anonymous function, retirning object 
        return {
            title: "Vue component with data injection."
        }
    }


    
}

const app = createApp(App)
app.mount('#app') // mounts the unique identifier associated with app in HTML 


app.use(createPinia())
app.use(router)
