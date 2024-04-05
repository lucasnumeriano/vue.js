const Pessoa = {
    data() {
        return {
            name: "Lucas",
            age: 18
        }
    }
}

Vue.createApp(Pessoa).mount("#pessoa");