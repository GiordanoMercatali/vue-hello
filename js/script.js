const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            message: "Message to print",
            image: "https://i.pinimg.com/474x/4e/a2/97/4ea297707fd164ad11ec42aca9675f57.jpg",
            imgClass: "",
            squareRounded: false,
            squareBlue: true
        };
    },
    methods: {
        addBorder: function(){
            this.imgClass = "border";
        },

        makeRounded: function(){
            this.squareRounded = !this.squareRounded; //Changes the condition to the opposite of the current one
        },

        changeColor: function(){
            this.squareBlue = !this.squareBlue; //Changes the condition to the opposite of the current one

        }
    },
}).mount("#app");

// app.mount("#app");