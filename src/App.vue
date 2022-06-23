<template>
  <div>
    <ProgressBar/>
    <TitleVue/>
    <FormStep/>
      
    
   
  </div>
  
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import TitleVue from './components/Title.vue'
import FormStep from './components/FormStep.vue'


export default {
  name: 'App',
  components: {
    ProgressBar,
    FormStep,
    TitleVue,
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
</style>
