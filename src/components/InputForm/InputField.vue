<template>
  <div >
    <section class="step__wrap">
      <div class="step__group">
        <div class="step-control " v-for="(field,index) in getListField" :key="index" >
          <label :for="key">{{field.label}}</label>
            <InputCustom :id="key" :field="field" :name="index"/>
            <p class="message">{{field.message}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import InputCustom from './InputCustom.vue' 
import {  mapGetters } from 'vuex'
export default {
    name:'InputField',
    components: {
      InputCustom
    },
    computed:{
      ...mapGetters(['getListField'])
    },
    

}
</script>

<style>
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


</style>