<template>
  <div class="step__wrap wrap-title ">
    <div class="" v-for="step in getformStep" :key="step.stepId" :class="['title',{active:step.stepId == currentStep}]" >
        <span class="title-number">{{step.stepId}}</span>
        <label class="title-text">{{step.stepName}}</label>
    </div>
  </div>
</template>

<script>

import { mapGetters,mapState } from 'vuex';

export default {
    name:'StepTitle',
     computed: {
        ...mapState(['currentStep']),
        ...mapGetters(['getformStep'])
    },
    methods:{
              
    }

}
</script>

<style>
    
    .wrap-title{
        display: flex;
        justify-content: space-between;
    }
    .title {
        padding: 8px 20px;
        border-radius: 12px;
        background-color: #f3f3f3;
        padding:8px 20px;
        display: flex;
        align-items: center;
        border:3px solid transparent;
        transition: all 0.025s;
        opacity: 0.5;
    }
    span.title-number{
        background-color: brown;
        color: white;
        padding: 3px 10px;
        border-radius: 25px;
        font-size: 16px;
        margin-right: 8px;

    }
    
    label.title-text {
        color: #8f9294;
        font-size: 14px;
        font-weight: 500;
    }
    .title.active{
        border:3px solid #a9c3db;
        opacity: 1;
    }
    .title.done{
        border:3px solid #e3a1af;
        opacity: 1;
    }
</style>