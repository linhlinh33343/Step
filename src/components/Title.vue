<template>
  <div class="step__wrap wrap-title ">
    <div :class="['title',currentStep==1?'active':'',  ]">
        <span class="title-number">1</span>
        <span class="title-text">About</span>
    </div>
    <div :class="['title',currentStep==2?'active':'']">
        <span class="title-number">2</span>
        <span class="title-text">About your Company</span>
    </div>
    <div :class="['title',currentStep==3?'active':'']">
        <span class="title-number">3</span>
        <span class="title-text">Finishing Up</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name:'TitleVue',
    computed:{
        ...mapState(['currentStep']),
        
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
    
    span.title-text {
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