var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      aula: 'FRONT END COM VUEJS',
      states: []
    },
    methods: {
        changeInputValue(event){
            console.log(event)
            this.message = event.target.value;
        },
        getStates(){
            this.states = ['parana', 'sao paulo']
        }
    },
    created(){
        console.log('criou componente')
        this.getStates()
    }
  })