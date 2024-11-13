import './assets/main.css'
import { createApp, type ComponentOptions } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const isVisible = true;

type DispData = { 
    //returns local state of data in component (kind of like a template specifying data type expected)
    counter: number
    name: string
    meowImage: Object
    array_items: number[]
} 


const AppContent = {
    template: ` 
        <div>
            <h1> My Counter: {{ counter }} </h1>
            <label for="your-name"> 
                Write your name here (2 way binding)
                <input placeholder="name" id="name" v-model="name">
                <img
                    v-bind:src="meowImage.src" 
                    v-bind:alt="meowImage.alt" 
                    v-bind:class="meowImage.class" 
                    v-bind:style="meowImage.style" 
                />
                <label for="meow-image"> Meow :3 </label>

                <ul>
                    <li v-for="val in array_items" v-bind:key="val">Element is {{val}}</li>
                </ul>
                
            </label>    
        </div> 
    `,

    data(): DispData {
        return {
            name: '',
            counter: 0,
            meowImage: {
                src: "https://res.cloudinary.com/mayashavin/image/upload/TheCute%20Cat",
                alt: "cute little cat meowwwww",
                class: {
                    cat: isVisible, //if isVisible is true, class for image will be "cat"
                    image: !isVisible //else, class is just generic "image"
                },

                style: [{
                    marginBlock: '10px',
                    marginInline: '20px'
                }, {
                    padding: '20px'
                }]
            },
            array_items: [10, 727, 12, 0xFF, 0x1C, 0xB0BACAFE],
            
        }
    },
    
    created() {
        //hook that runs after component created, but before being mounted by the DOM
        const interval = setInterval(() => {
            (this as ComponentOptions<DispData>).counter++;
        }, 500); //schedules repeated exectuion of callback func every delay, syntax is setInterval(callback, delay).
        
        setTimeout(() => { //after 5 seconds, stop the counter from going up. 
            clearInterval(interval)
        }, 5000); 
    },
}

const App = {
    components: { AppContent },
    template: `<AppContent/>`    
}



const app = createApp(App)
app.mount('#app') // mounts the unique identifier associated with app in HTML 


app.use(createPinia())
app.use(router)
