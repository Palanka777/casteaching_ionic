export default {
    debug:false,
    user: {
        name:'Pepe'
    },
    get(state){
        if (this.debug) console.log('getMessageAction triggered with', state)
        return this[state]
    }
}