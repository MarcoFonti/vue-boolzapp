// CHECK
console.log('JS VUE OK', Vue);


/* ESTRAPOLO FUNZIONE DA VUE */
const { createApp } = Vue;


/* CREO VARIBILE E RICHIAMO LA FUNZIONE */
const app = createApp({


    /* NOME PAGINA */
    name: 'WhatsApp',


    /* DATI DI BASE DA UTILIZZARE */
    data() {
        return {


            /* DATI UTENTE  */
            user: data.user,


            /* DATI CONTATTI */
            contacts: data.contacts,


            /* UTENTE SELEZIONATO */
            active: 1,


            /* TESTO INPUT MESSAGGIO */
            write: '',


            /* TESTO INPUT CERCA */
            searchText: '',
        }
    },

    
    /* CREO UNA COMPUTED PER INTERAGIRE CON LA FUNZIONE DATA() */
    computed: {


        /* CREO UNA COMPUTED CHE MI DA I DATI DEL CONTATTO SELEZIONATO */
        selectedContact() {


            /* RECUPERO ARRAY FORNITO DEI CONTATTI E CON IL METODO FIND RECUPERO ELEMENTO SPECIFICO  */
            const contactCycle = this.contacts.find((element) => {


                /* SE ID DELL'ELEMENTO DELL'ARRAY E' IDENTICO AD ACTIVE */
                if (element.id === this.active) {


                    /* RESTITUSCO ELEMENTO SPECIFICO */
                    return true


                    /* ALTRIMENTI */
                } else {


                    /* RESTITUSCO UNDEFINED */
                    return false
                }
            })


            /* RESTITUSCO LA VARIVBILE */
            return contactCycle;

        },


        /* CREO COMPUTED PER IL CERCA DEL CONTATTO */
        searchUser() {


            /* RECUPERO L'ARRAY FORNITO E CON IL METODO FILTER SELEZIONO SOLO ALCUNI ELEMENTI */
            const searchFilter = this.contacts.filter((element) => {


                /* SE IL NOME DELL'ELEMENTO TRASFORMATO IN MINUSCOLO, SE QUESTA STRINGA CONTIENE LA STRINGA IMMESSA DALL'UTENTE  */
                if (element.name.toLowerCase().includes(this.searchText.toLowerCase())) {


                    /* RESTITUISCI TRUE (INCLUDI) */
                    return true


                    /* ALTRIMENTI */
                } else {


                    /* RESTITUISCI FALSE (ESCLUDI) */
                    return false
                }

            })


            /* RESTITUSCO LA VARIBILE (SOLO CON GLI ELEMENTI INCLUSI) */
            return searchFilter;

        }
    },


    /* CREO FUNZIONI */
    methods: {


        /* CREO FUNZIONE PER IL COLORE DEI MESSAGGI A CUI PASSO COME ARGOMENTO LO STATO DEL MESSAGGIO */
        messageColor(status) {


            /* SE IL MESSAGGIO E' IDENTOCO A SENT (INVIATO DA ME) */
            if (status === 'sent') {


                /* RESTITUISCO QUESTA TIPO DI STRINGA */
                return 'message-sent'


                /* ALTRIMENTI */
            } else {


                /* RESTITUISCO QUESTA TIPO DI STRINGA */
                return 'message-received'
            }
        },


        /* FUNZIONE PER CREAZIONE DEL MESSAGGIO */
        createMessages() {


            /* SE INPUT E' VUOTO E MANDO L'INVIO, BLOCCO L'AVANZAMENTO DEL CODICE */
            if (!this.write) return;


            /* CRO UN OGETTO CON LE CHIAVI CHE MI SERVONO */
            const newMessages =
            {
                /* GENERO ID */
                id: new Date().getTime(),
                /* GENERO DATA */
                date: new Date().toLocaleString(),
                /* ASSEGNO ALLA CHIAVE CIO' CHE SRA SCRITTO NELL'INPUT */
                text: this.write,
                /* STATO MESSAGGIO */
                status: 'sent'
            }


            /* RICHIAMO COMPUTED ED ENTRO NELL'ARRAY MESSAGES E AGGIUNGO IL NUOVO MESSAGGIO CREATO */
            this.selectedContact.messages.push(newMessages);


            /* AD OGNI INVIO SVUOTO IL CAMPO */
            this.write = '';

        },


        /* FUNZIONE PER RICEVERE MESSAGGIO */
        receivedMessages() {


            /* DOPO TOT DI SECONDI */
            setTimeout(() => {


                /* CRO UN OGETTO CON LE CHIAVI CHE MI SERVONO */
                const answer =
                {
                    /* GENERO ID */
                    id: new Date().getTime(),
                    /* GENERO DATA */
                    date: new Date().toLocaleString(),
                    /* MESSAGGIO DA RICEVERE */
                    text: 'Ok',
                    /* STATO MESSAGGIO */
                    status: 'received'
                }


                /* RICHIAMO COMPUTED ED ENTRO NELL'ARRAY MESSAGES E AGGIUNGO IL NUOVO MESSAGGIO CREATO */
                this.selectedContact.messages.push(answer);


                /* RITARDO */
            }, 3000)

        },
    }

})

/* COLLEGO ID */
app.mount('#root');