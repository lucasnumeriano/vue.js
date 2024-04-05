const Pessoa = {
    data() {
        return {
            name: "Lucas"
        }
    }
}

Vue.createApp(Pessoa).mount("#pessoa")