<template>
  
    <div class="step__btns">
      <div v-if="currentStep>0 && currentStep < getformStep.length">
        <button class="btn btn-previous" @click="prevStep()">previous</button>
        <button class="btn btn-next" @click="nextStep()">next</button>
      </div>
      <div v-else >
        <button class="btn btn-next" @click="resetStep()">Reset</button>
        <button class="btn btn-previous" @click="sendStep()">Send</button>
      </div>
    </div>

</template>

<script>

import { mapGetters,mapState } from 'vuex';
export default {
  name: "ButtonForm",
  computed: {
    ...mapState(["currentStep"]),
    ...mapGetters(['getformStep'])
  }
  ,
  methods: {
    
    resetStep() {
        this.$store.dispatch('resetStep')
    },
    sendStep() {
       
             this.$store.dispatch("sendStep");
    
    },
    prevStep() {
        this.$store.dispatch('prevStep')
    },
    nextStep() {

             this.$store.dispatch("backStep");
    },
  }
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
