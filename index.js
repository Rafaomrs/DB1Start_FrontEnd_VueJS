var app = new Vue({
    el: '#app',
    data: {
        title: 'Meus estados favoritos',
        message: 'Hello Vue!',
        aula: 'FRONT END COM VUEJS',
        stateName: '',
        states: [{"id":2,"nome":"Paraná"}
            ,{"id":3,"nome":"Rio de Janeiro"}
            ,{"id":4,"nome":"Bahia"}
            ,{"id":5,"nome":"Santa Catarina"}]

    },
    methods: {
        changeInputValue(event){
            console.log(event)
            this.message = event.target.value;
        },
        getStates(){
            //this.states = ['parana', 'sao paulo']
        },
        setNewState(event){
            this.stateName = event.target.value;
        },
        addState(){
            const id = this.states.length;
            this.states.push({
                id: id,
                nome: this.stateName
            });
        }
    },
    created(){
        console.log('criou componente')
        this.getStates()
    }
  })