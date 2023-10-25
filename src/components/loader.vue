<template>
<div>
  <component :is="name"
            :object="object"
            :color1="color1"
            :color2="color2"
            :loadingText="loadingText"
            :textColor="textColor"
            :textSize="textSize"
            :textWeight="textWeight"
            :size="size"
            :speed="speed"
            :bg="bg"
            :objectbg="objectbg"
            :opacity="opacity"
            :disableScrolling="disableScrolling"></component>
</div> 
</template>

<script>
import loader1 from "./loaders/loader1.vue";
import dots from "./loaders/dots.vue";
import circular from "./loaders/circular.vue";
import toptombar from "./loaders/toptombar.vue";
import box from "./loaders/box.vue";

export default {
  name: 'loader',
  components:{
      spinning: loader1,
      dots: dots,
      circular : circular,
      loading : toptombar,
      box: box,
  },
  props: {
    object: {
      type: String,
      default: '#ff9633',
    },
    color1: {
      type: String,
      default: '#ffffff',
    },
    color2: {
      type: String,
      default: '#17fd3d',
    },
    loadingText: {
        type: String,
        default: 'LOADING...',
    },
    textColor: {
        type: String,
        default: '#ffffff',
    },
    textSize: {
        type: [String, Number],
        default: 15,
    },
    textWeight: {
        type: [String, Number],
        default: 800,
    },
    size: {
        type: [String, Number],
        default: 5,
    },
    speed: {
        type: [String, Number],
        default: 2,
    },
    opacity: {
        type: [String, Number],
        default: 80,
    },
    bg: {
      type: String,
      default: '#343a40',
    },
    objectbg: {
      type: String,
      default: '#999793',
    },
    name: {
      type: String,
      default: 'spinning',
    },
    disableScrolling: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body.overflowHidden {
      overflow: hidden !important;
  }
</style>
