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
    },
    color1: {
      type: String,
    },
    color2: {
      type: String,
    },
    loadingText: {
        type: String,
    },
    textColor: {
        type: String,
    },
    textSize: {
        type: [String, Number],
    },
    textWeight: {
        type: [String, Number],
    },
    size: {
        type: [String, Number],
    },
    speed: {
        type: [String, Number],
    },
    opacity: {
        type: [String, Number],
    },
    bg: {
      type: String,
    },
    objectbg: {
      type: String,
    },
    name: {
      type: String,
    },
    disableScrolling: {
      type: Boolean,
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
