<template>
  <div class="step-control">
        <input :class="{error:field.error}" v-model="valueInput" :type="field.type" v-if="field.type == 'text' || field.type == 'email'" @blur="handleInput($event)" @input="updateUserObj()"/>
        <div class="select" v-else-if="field.type == 'select'">
            <div >{{ field.label }}</div>
            <select name="" id="">
                <option selected disabled hidden value="">{{field.selectTitle}}</option>
                <option v-for="(option) in field.optionData" :value="option"  :key="option">{{option}}</option>
            </select>
        </div>
        <div class="checkbox" v-else-if="field.type == 'checkbox'">
          <input :id="field.title " :type="field.type" />
          <label :for="field.title ">{{ field.title }}</label>
        </div>
  </div>
</template>

<script>
import { mapGetters, } from 'vuex';

export default {
    name:'InputCustom',
    
    computed: {
    ...mapGetters(['getListField'])
    },
    props: {
      field: {
        type: Object,
      },
      name: {
        type: String,
      },
    },
    computeds:{
      valueInput:{
            setValue(value){
              return this.$store.dispatch("changeInput", { name: this.name, value });
            }
        },
       
      
    }
    ,
    methods:{
      updateUserObj(){
        this.$store.commit("updateUserObj",{name: this.name})
      },
      handleInput(e){
          this.$store.commit("changeInput", {
          name: this.name,
          value: e.target.value,
        });
      },
      
      
     

    },
    

}
</script>
    
<style scope>
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

</style>