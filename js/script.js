const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: "Message to print",
            image: "https://i.pinimg.com/474x/4e/a2/97/4ea297707fd164ad11ec42aca9675f57.jpg"
        };
    }
}).mount("#app");

// app.mount("#app");