// CHECK
console.log('JS VUE OK', Vue);

// ESTRAPOLO FUNZIONE DA VUE
const {createApp} = Vue;

// CREO VARIBILE E RICHIAMO LA FUNZIONE
const app = createApp ({
    name: 'WhatsApp',
    // USO DATA CON ALL'INTENRO IL RETURN 
    data() {
        return {
            // DATI UTENTE 
            user: data.user,
            // DATI CONTATTI
            contacts: data.contacts,
            // UTENTE SELEZIONATO
            active: 1,
            // TESTO INPUT MESSAGGIO
            write:''
        }
    },

    // COME VORREI CHE ...
    computed: {
        // CONTATTO SELEZIONATO
        selectedContact(){
            // INDIVIDUO ELEMENTO SPECIFICO
            const contactCycle = this.contacts.find((element) => {
                // SE ELEMENTO ID E' IDENTICO
                if(element.id === this.active) {
                    return true
                } else {
                    return false
                }   
            }) 

        return contactCycle; 

        }
    },

    // FUNZIONI
    methods:{

        // COLORE MESSAGGI
        messageColor(status) {
            // SE STATUS E'IDENTICO
            if(status === 'sent') {
               return 'message-sent'
            } else {
               return 'message-received'  
            }
        },

        // CREA MESSAGGIO
        createMessages() {
            // SE NON C'E' TESTO
            if(!this.write) return;

            // CREO OGETTO
            const newMessages = 
            {
                id: new Date().getTime(),
                date: new Date().toLocaleString(),
                text: this.write,
                status: 'sent'
            }

            // METTO OGGETTO NELLA COMPUTED CONTATTO SELEZIONATO
            this.selectedContact.messages.push(newMessages);

            this.write = '';
            
        },

        // RICEVI MESSAGGIO
        receivedMessages() {

            // METODO DOPO TOT SECONDI
            setTimeout(() => {

            // CREO OGETTO
            const answer = 
            {
                id: new Date().getTime(),
                date: new Date().toLocaleString() ,
                text: 'Ok',
                status: 'received'
            }
            // METTO OGGETTO NELLA COMPUTED CONTATTO SELEZIONATO
            this.selectedContact.messages.push(answer);

            },3000) // RITARDO
            
        },
    }

})

// COLLEGO ID 
app.mount('#root');