export default {
    namespaced:true,
    state:{
        count:123
    },
    mutations:{
        add(state){
            state.count +=1
        }
    },
    getters:{
        get2(state,getters,rootState,rootGetters){
           
            console.info(arguments)
            return "" + state.count +"_"+getters.get3+"_"+rootState.count+"_"+rootGetters.get1
        },
        get3(){
            return "get3"
        }
    },
    actions:{
        act1(context){
            console.info(context)
        }
    }
}