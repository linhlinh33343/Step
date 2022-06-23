<template>
  <div class="step__wrap">
    <section v-if="currentStep == 1">
      <div class="step__group">
        <div class="step-control">
          <label for="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname"  
          v-model="form.name" 
          @blur="validateName()" 
          :class="error.name?'error':''"
          @input="updateUserObj('name',$event)"
          />
          <p class="message">{{error.name}}</p>
        </div>
        <div class="step-control">
          <label for="email">Your Email</label>
          <input type="text" id="email" name="email" 
          v-model="form.email" 
          @blur="validateEmail()" 
          :class="error.email?'error':''"
          @input="updateUserObj('email',$event)"
          />
          <p class="message">{{error.email}}</p>
        </div>
      </div>
    </section>
    <section v-if="currentStep == 2">
      <div class="step__group">
        <div class="step-control">
          <label for="company">Your Company Name</label>
          <input type="text" id="company" name="company" class="" 
          v-model="form.company" 
          @blur="validateCopany()" 
          :class="error.company?'error':''"
          @input="updateUserObj('company',$event)"
          
          />
          <p class="message">{{error.company}}</p>
        </div>
        <div class="step-control">
          <label for="employee">Number of Employees</label>
          <input type="text" id="employee" name="employee" class=""  
          v-model="form.employee"
          @blur="validateEmployee()" 
          :class="error.employee?'error':''"
          @input="updateUserObj('employee',$event)"
          />
          <p class="message">{{error.employee}}</p>
        </div>
      </div>
    </section>
    <section v-if="currentStep == 3">
      <div class="step__group">
        <div class="step-control">
          <label for="name">From Where did you hear about us</label>
          <select  @change="validateSelect($event)"
          :class="!error.selected ? 'error': ''"
          >
            <option selected  value=" ">--choose anwser--</option>
            <option value="frend">Friend</option>
            <option value="facebook">Facebook</option>
            <option value="website">Website</option>
          </select>
          <p class="message">{{error.selected}}</p>
        </div>
        <div class="step-control">
          <div class="check-term">
            <input type="checkbox" :class="error.accept !=='' ?'error' : ''" @change="accept($event)"/>
            <label for="name">I accept terms & conditions</label>
          </div>
          <p class="message">{{error.accept}}</p>
        </div>
      </div>
    </section>
    <div class="step__btns">
      <div v-if="currentStep == 3">
        <button class="btn btn-next" @click="resetStep()">Reset</button>
        <button class="btn btn-previous" @click="sendStep()">Send</button>
      </div>
      <div v-if="currentStep < 3">
        <button class="btn btn-previous" @click="prevStep()">previous</button>
        <button class="btn btn-next" @click="nextStep()">next</button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  name: "FormStep",
  computed: {
    ...mapState(["currentStep",'form','error']),
  },
  methods: {
    
    resetStep() {
       
        this.$store.dispatch('resetStep')
        
    },
    sendStep() {
        if(this.checkForm()){
             this.$store.dispatch("sendStep");
        }
    },
    prevStep() {
        this.$store.dispatch('prevStep')
    },
    nextStep() {
        if(this.checkForm()){
             this.$store.dispatch("backStep");
        }
     
    },
    updateUserObj(attribute){
           if(this.error[attribute]){
            this.error[attribute] =''
           } 
        
        },
    // 
    validateName(){
       
        if(!this.form.name){
            this.error.name='The field is required!'
             return false;
        }
        return true;
    },
    validateEmail(){
      
        if(!this.form.email){
            this.error.email='The field is required!'
            return false;
        }else if(!(/^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/.test(this.form.email))){
            this.error.email= "The field must be email!"
            return false;
        }
        return  true;
    },
    validateCopany(){
        if(!this.form.company){
            
            this.error.company='The field is required!'
            return false;
        }
        return true;
    },
    validateEmployee(){
         if(!this.form.employee){
            this.error.employee='The field is required!'
            return false;
        }else if(!(/^[0-9]/.test(this.form.employee))){
            this.error.employee= "The field must be number!"
            return false;
        }
        return true;
    },
    validateSelect(event){
        this.form.selected=event.target.value;
        
        if(!this.form.selected || this.form.selected === ''){
            this.error.selected='The field is required!'
            return false;
        }
        return true;
         
    },
    accept(event){
        this.form.accept = event.target.checked;
        if(!this.form.accept || this.form.accept === ''){
            this.error.accept='The field is required!'
            return false;
        }
        return true;
    },

    checkForm(){
        
        if(this.currentStep==1){
            if(!this.validateName()||!this.validateEmail()){
                this.validateName();
                this.validateEmail();
                return false;
            }
        }
         if(this.currentStep==2){
            if(!this.validateCopany()||!this.validateEmployee()){
                this.validateCopany();
                this.validateEmployee();
                return false;
            }
        }
        if(this.currentStep==3){
            if(!this.validateCopany()||!this.validateEmployee()){
                this.validateCopany();
                this.validateEmployee();
                return false;
            }
        }
       return true
    }

  },
};
</script>

<style>
.step__wrap {
  width: 900px;
  margin: auto;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;
}
.step__group {
}
.step-control {
  text-align: left;
  display: flex;
  flex-direction: column;
}
.step-control:not(:first-child) {
  margin-top: 14px;
}
.step-control input {
  color: #586068;
  font-size: 16px;

  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}
.step-control input:focus {
  outline: 3px solid #c2d9fb;
  box-shadow: unset;
  border: 1px solid transparent;
  background-color: #f6f9fcf6;
}
/* khi có lỗi  */
.step-control input.error {
  box-shadow: 0 0 4px #f4b6c1;
  border: 1px solid #aa4651;
}
/*  có lỗi và focus */
.step-control input.error:focus {
  box-shadow: 0 0 4px #f4b6c1;
  border: 1px solid #aa4651;
  outline: 3px solid #f4b6c1;
  background-color: #de4a4a17;
}
label {
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 16px;
}
.step-control p {
  margin: 8px 0px 0px;
  font-size: 12px;
}
.step-control p.message {
  color: #aa4651;
}

select {
  color: #586068;
  font-size: 16px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}
input[type="checkbox"] {
  margin-right: 8px;
}
.step__btns {
  margin-top: 50px;
}
.btn {
  border: unset;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 24px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
}
.btn-previous {
  background-color: #72e6b1;
}
.btn-next {
  background-color: #1e68cf;
}

.btn:not(:first-child) {
  margin-left: 16px;
}
.btn:hover {
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%), 6px 6px 12px rgb(0 0 0 / 20%);
}
</style>
