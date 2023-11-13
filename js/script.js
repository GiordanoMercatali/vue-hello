const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: "Message to print",
        };
    }
})

app.mount("#app");