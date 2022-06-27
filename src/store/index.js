import { createStore } from 'vuex'

const store = createStore({
    state: {
      currentStep: 1,
      formStep: [
        { 
          stepId:1,
          stepName: "About you",
          success: false,
          listField: {
              name: {
                value: "",
                label: "Full Name",
                type: "text",
                validate() {
                  if (this.value=='') {
                    this.error = true;
                    this.message = "The field is required!";
                  } 
                },
                error: false,
                message: "",
              },
              email: {
                value: "",
                label: "Your Email",
                type: "email",
                validate() {
                  if (this.value=='') {
                    this.error = true;
                    this.message = "The field is required!";
                    return;
                  }
                  if (!(/^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/).test(this.value)) {
                    this.error = true;
                    this.message = "The field must be email!";
                  } 
                },
                error: false,
                message: "",
              },
          },
        },
        {
          stepId:2,
          stepName: "About Your Company",
          success: false,
          listField: {
            company: {
              value: "",
              label: "Your Company Name",
              type: "text",
              validate() {
                if (this.value.length <= 0) {
                  this.error = true;
                  this.message = "The field is required!";
                  return false;
                } 
                return true;
              },
              error: false,
              message: "",
            },
            numberEmployees: {
              value: "",
              label: "Number of Employees",
              type: "text",
              validate() {
                if (this.value=='') {
                  this.error = true;
                  this.message = "The field is required!";
                  return ;
                }else {
                  this.error = false;
                  this.message = "";
                }
  
                if (isNaN(this.value)) {
                  this.error = true;
                  this.message = "Should be a valid value!";
                  return false;
                } 
                return true;
              },
              error: false,
              message: "",
            },
          },
        },
        { 
          stepId:3,
          stepName: "Finishing Up",
          success: false,
          listField: {
            connectUs: {
              value: "",
              label: "From Where did you hear about us?",
              type: "select",
              validate() {
                if (this.value.length <= 0) {
                  this.error = true;
                  this.message = "The field is required!";
                } else {
                  this.error = false;
                  this.message = "";
                }
              },
              selectTitle: "-- Choose answer --",
              optionData: ["Friend", "FaceBook", "Websites"],
              error: false,
              message: "",
            },
            terms: {
              value: false,
              label: "",
              type: "checkbox",
              title: "I accept terms & conditions",
              validate() {
                if (!this.value) {
                  this.error = true;
                  this.message = "The field is required!";
                  return;
                } else {
                  this.error = false;
                  this.message = "";
                }
              },
              error: true,
              message: "",
            },
          },
        },
      ],
    },
  
    getters: {
      getformStep(state){
        return state.formStep;
      },
      getListField(state){
        return state.formStep[state.currentStep-1].listField;
      },
      getLengthFormStep(state){
         return state.formStep.length;
      }
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
      },
      changeInput({commit}){
          commit("changeInput");
      },
      updateUserObj({commit}){
          commit('updateUserObj');
      },
      changeCheckbox({commit}){
        commit("changeCheckbox");
    },

    },
  
    mutations: {
      
      backStep(state) {
        const Form = state.formStep[state.currentStep - 1];
        for (let name in Form.listField) {
          Form.listField[name].validate();
        }
        let success = true;
        for (let name in Form.listField) {
          success = success && !Form.listField[name].error;
        }
        Form.success = success;
        if (state.formStep[state.currentStep - 1].success)
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
         
          const Form = state.formStep[state.currentStep - 1];
          for (let key in Form.listField) {
            Form[key].error=false;
            Form[key].message=''
          }
          
      },
      sendStep(state) {
        state.formStep.forEach((form) => {
          for (let key in form.listField) {
            form.listField[key].validate();
          }
        });
      },
      
      
      changeInput(state, { name, value }){
        const currForm = state.formStep[state.currentStep - 1];
        currForm.listField[name].value = value;
        currForm.listField[name].validate();

      },
     
      updateUserObj(state,{name}){
        const currForm = state.formStep[state.currentStep - 1];
        currForm.listField[name].error = false;
        currForm.listField[name].message = '';
      }
    }
  });
  
export default store;