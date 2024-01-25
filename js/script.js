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
            active: '',
            write: '',

        }
    },

    computed:{
       
        selectedUser() {
          
        }

    },

    methods: {

        // CONFRONTO ID 
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

        // CREI MESSAGGIO 
        createMessages() {
            const newMessages = 
            {
                id: 10,
                date: '10/01/2020 15:30:55',
                text: this.write,
                status: 'sent'
            }

            this.contacts.forEach(element => {
                element.messages.push(newMessages)
            });
            
        },

        // RICEVI MESSAGGIO
        receivedMessages() {

            setTimeout(() => {

            const answer = 

            {
                id: 90,
                date: '10/01/2020 15:30:55',
                text: 'Ok',
                status: 'received'
            }

            this.contacts.forEach(element => {
                element.messages.push(answer)
            });

            },3000)
            
        },

    }

})

// COLLEGO ID 
app.mount('#root');