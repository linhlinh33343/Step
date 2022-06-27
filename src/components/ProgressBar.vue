<template>
    <div class="progress">
        <div :style="{width: progressWidth() +'%'}" class="progress-done">
            {{Math.round((this.currentStep / this.getLengthFormStep) *100)}}%
        </div>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name:'ProgressBar',
    computed:{
        ...mapState(['currentStep']),
        ...mapGetters(['getLengthFormStep'])
    },
    methods:{
        progressWidth(){
            return Math.round((this.currentStep / this.getLengthFormStep) *100)
        }
    }
    
}
</script>

<style>
    .progress{
        background-color:#d8d8d8;
        border-radius:20px ;
        height:30px;
        width: 900px;
    }
    .progress-done{
        display:flex;
        align-items:center;
        justify-content:center;
        color: white;
        background:linear-gradient(to left,#f2709c,#ff9472);
        box-shadow:0 2px 2px -1px #f2709c, 0 2px 2px #ff9472;
        border-radius:20px ;
        height:100%;
        width: 30%;
        opacity: 1;
        transition:1s ease;
    }

</style>