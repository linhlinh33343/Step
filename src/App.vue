<template>
  <div>
    <ProgressBar/>
    <StepTitle/>
    <InputField/>
    <ButtonForm/>
  </div>
  
</template>

<script>
import StepTitle from './components/StepTitle.vue'
import InputField from './components/InputForm/InputField.vue'
import ProgressBar from './components/ProgressBar.vue'
import ButtonForm from './components/ButtonForm.vue'
export default {
  name: 'App',
  components: {
    StepTitle,
    InputField,
    ProgressBar,
    ButtonForm
  }
}
</script>

<style>
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}
body{
    display: flex;
    justify-content: center;
    
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.step__wrap {
        width: 900px;
        margin: auto;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
        margin-top: 15px;
        padding: 20px;
    }
</style>
