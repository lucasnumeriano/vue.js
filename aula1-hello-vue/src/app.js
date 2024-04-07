const Pessoa = {
    data() {
        return {
            name: "",
            age_work: "",
            birthday: "",
            input_name: "",
            input_age_work: "",
            input_birthday: "",
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault()

            this.name = this.input_name;
            this.age_work = this.input_age_work;
            this.birthday = this.input_birthday;
        }
    }
}

Vue.createApp(Pessoa).mount("#pessoa");