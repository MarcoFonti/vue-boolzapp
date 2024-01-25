// CHECK
console.log('JS VUE OK', Vue);

// ESTRAPOLO FUNZIONE DA VUE
const {createApp} = Vue;

// CREO VARIBILE E RICHIAMO LA FUNZIONE
const app = createApp ({
    name: 'MiaApp',
    // USO DATA CON ALL'INTENRO IL RETURN 
    data() {
        return {
            user: data.user,
            contacts: data.contacts,
            active: ''
        }
    },

    computed:{
       
        selectedUser() {
          
            return 

        }

    },

    methods: {

        currentUser(id){
        const userClick = this.contacts.filter((user) => {
            if(id !== user.id) {
                return false
                } else {
                    return true
                }
            })

            console.log(userClick)

            this.active = userClick

        },


        getHours() {
            
        }

    }

})

// COLLEGO ID 
app.mount('#root');