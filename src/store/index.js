import { createStore } from 'vuex'

const store = createStore({
    state: { 
        currentStep:1,
        form: [],
        error: [],
    },
    getters: {
        
    },
    actions:{
        backStep({commit}){
            commit("backStep");
        },
        prevStep({commit}){
            commit("prevStep");
        },
        resetStep({commit}){
            commit("resetStep");
        },
        sendStep({commit}){
            commit("sendStep");
        }

    },
    mutations: {
        backStep(state) {
           
            state.currentStep++;
        },
        prevStep(state){
            if(state.currentStep===1){
                state.currentStep=1
            }else{
               state.currentStep--; 
            }
            
        }
        ,
        resetStep(state){
            state.currentStep=1
            state.form=[],
            state.error=[]
        },
        

    },
})
export default store;