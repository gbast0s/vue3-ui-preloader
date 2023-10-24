<template>
  <div id="app" class="container">
    <loader :object="styling.objectcolor"
            :color1="styling.animationcolor"
            :color2="styling.animationcolor2"
            :loadingText="styling.loadingText"
            :textColor="styling.textColor"
            :textSize="styling.textSize"
            :textWeight="styling.textWeight"
            :size="styling.size"
            :speed="styling.speed"
            :bg="styling.bgcolor"
            :objectbg="styling.objectbg"
            :opacity="styling.opacity"
            :name="selected"
            :disableScrolling="styling.disableScrolling" v-if="loadComponent"></loader>

      <div class="row justify-content-md-center">
          <div class="col-md-auto">
              <a href="https://www.npmjs.com/package/vue3-ui-preloader"><img src="https://img.shields.io/npm/v/vue3-ui-preloader.svg" class="batch"></a>
              <a href="https://www.npmjs.com/package/vue3-ui-preloader"><img src="https://img.shields.io/npm/dm/vue3-ui-preloader.svg" class="batch"></a>
          </div>
      </div>
      <h1><b><span id="ui">UI</span><span id="topia">topia</span></b></h1>

      <p class="row justify-content-md-center">Vue3 Ui Preloader component made with CSS transistions and animations</p>
      <div class="remake">
        <span class="row justify-content-md-center">Remake made from:</span>
        <a href="https://www.npmjs.com/package/vue-ui-preloader" target=”_blank”>Vue-ui-preloader</a>
      </div>
      <transition-fade :easing="{ enter: 'ease-in', leave: 'ease-out'}" :duration="500">
        <div class="container form" v-if="flag">
            <div class="row">
                <div class="col-sm">
                    <h5 class="options-loader"><span class="textLoading">Text color:</span>
                        <input type="text" class="form-control costum-input" id="favcolor" name="favcolor" v-model="styling.loadingText">
                    </h5>
                    <h5 class="options-loader">Text color:
                        <input type="color" id="favcolor" name="favcolor" v-model="styling.textColor">
                        {{styling.textColor}}</h5>
                    <h5 class="options-loader">Object color:
                        <input type="color" id="favcolor" name="favcolor" v-model="styling.objectcolor">
                        {{styling.objectcolor}}</h5>
                    <h5 class="options-loader"> Additional Color1:
                        <input type="color" id="favcolor" name="favcolor" v-model="styling.animationcolor">
                        {{styling.animationcolor}}</h5>
                    <h5 class="options-loader"> Additional Color2:
                        <input type="color" id="favcolor" name="favcolor" v-model="styling.animationcolor2">
                        {{styling.animationcolor2}}</h5>
                    <h5 class="options-loader">Background color:
                        <input type="color" id="favcolor" name="favcolor" v-model="styling.bgcolor">
                        {{styling.bgcolor}}</h5>
                    <h5 class="options-loader">Object bg color:
                        <input type="color" id="favcolor" name="favcolor" v-model="styling.objectbg">
                        {{styling.objectbg}}</h5>
                    <h5 class="options-loader">Disable page scrolling:
                        <input class="form-check-input mt-0" type="checkbox" id="favcolor" name="pageScrollingDisabled" v-model="styling.disableScrolling">
                        {{styling.disableScrolling}}</h5>
                </div>
                <div class="col-sm">
                    <h5>Background color opacity: {{ styling.opacity }}%</h5>
                    <input type="range" class="form-range" v-model="styling.opacity" min="0" max="100">
                    <h5>Size of animation: {{ styling.size }}px</h5>
                    <input type="range" class="form-range" v-model="styling.size" min="0" max="30">
                    <h5>Text Size: {{ styling.textSize }}px</h5>
                    <input type="range" class="form-range" v-model="styling.textSize" min="0" max="30">
                    <h5>Text Weight: {{ styling.textWeight }}</h5>
                    <input type="range" class="form-range" v-model="styling.textWeight" min="100" max="1000" step="50">
                    <h5>Speed: {{ styling.speed }}s</h5>
                    <div>
                        <input type="range" class="form-range" v-model="styling.speed" min="0.1" max="10" step="0.1">
                    </div>
                </div>
            </div>
            <hr>
            <h4>Test Duration: {{ value }}s</h4>
            <div>
                <input type="range" class="form-range" v-model="value" min="0" max="10">
            </div>
        </div>
      </transition-fade>

      <transition-fade :easing="{ enter: 'ease-in', leave: 'ease-out'}" :duration="500">
        <div class="container" v-if="flag">
            <div id="outer">
                <div class="inner"><button class="btn btn-danger" @click="loader('spinning')" ><h2>Spinner</h2></button></div>
                <div class="inner"><button class="btn btn-danger" @click="loader('dots')"><h2>Dots</h2></button></div>
                <div class="inner"><button class="btn btn-danger" @click="loader('loading')"><h2>Loading</h2></button></div>
                <div class="inner"><button class="btn btn-danger" @click="loader('circular')"><h2>Circular</h2></button></div>
                <div class="inner"><button class="btn btn-danger" @click="loader('box')"><h2>Box</h2></button></div>
            </div>
        </div>
      </transition-fade>

      <br>

    <transition-slide :easing="{ enter: 'ease-in', leave: 'ease-out'}" :duration="900"> 
      <div class="container form" v-if="flag">
        <h1>Playground Code</h1>
        <textarea 
          @click="copyToClipboard"
          id="textarea" 
          class="w-100 costum-text-area"
          ref="textArea"
          v-model="code" 
          readonly
          rows="3" 
          placeholder="Your code snippet will be displayed here after you select Pre-Loader, paste this code after installation.">
        </textarea>
      </div>
    </transition-slide>
    <br>
  </div>
</template>

<script>
import loader from "./components/loader.vue";
import { TransitionSlide, TransitionFade } from '@morev/vue-transitions';

export default {
  name: 'App',
  components: {
    loader,
    TransitionSlide,
    TransitionFade
  },
  data(){
    return{
      selected: '',
        value: 2,
        styling: {
            objectcolor: '#ff9633',
            animationcolor: '#ffffff',
            animationcolor2: '#17fd3d',
            objectbg: '#999793',
            opacity: 80,
            bgcolor: '#343a40',
            size: 5,
            speed: 2,
            loadingText: 'Loading...',
            textColor: '#ffffff',
            textSize: 20,
            textWeight: 800,
            disableScrolling: false,
        },
        code: ``,
        flag: false,
        loadComponent: false,
    };
  },
  methods: {
    loader(loader) {
      this.selected=loader;
      this.loadComponent=true;
      this.$refs.textArea.style.cursor = "pointer";
      this.code=`<loader  name="${this.selected}" loadingText="${this.styling.loadingText}" textColor="${this.styling.textColor}" textSize="${this.styling.textSize}" textWeight="${this.styling.textWeight}" object="${this.styling.objectcolor}" color1="${this.styling.animationcolor}" color2="${this.styling.animationcolor2}" size="${this.styling.size}" speed="${this.styling.speed}" bg="${this.styling.bgcolor}" objectbg="${this.styling.objectbg}" opacity="${this.styling.opacity}" :disableScrolling="${this.styling.disableScrolling}"></loader>`
      setTimeout(() => {
        this.loadComponent=false;
      }, this.value*1000);
    },
    copyToClipboard() {
      if(this.code.trim().length > 0)
      {
        navigator.clipboard.writeText(this.code);
        this.$toast.success('Copied to clipboard');
      }
    }
  },
  mounted() {
    this.flag=true;
  },

}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  
  .remake {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-weight: bold;
    color: lightyellow;
    font-size: 20px;
  }

  .options-loader{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .costum-input{
    width: 50%;
  }

  .textLoading {
    min-width: 105px;
  }

  .costum-text-area {
    outline: 0;
    cursor: default;
  }

  h1{
      text-align: center;
      padding-bottom: 5px;
      font-family: 'Noto Sans', sans-serif;
  }
  .header h1{
    font-family: 'Noto Sans', sans-serif;
      margin: 10px 10px 10px 10px;
  }
  #ui{
    color: red;
    font-size: 70px;
    font-family: 'Noto Sans', sans-serif;
  }
  #topia{
    color: blue;
      font-size: 50px;
    font-family: 'Noto Sans', sans-serif;
  }
  .form{
      margin-bottom: 20px;
      margin-top: 20px;
      padding: 20px 20px 20px 20px;
      background-color: rgb(75, 106, 163);
      border-radius: 15px;
      box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.75);
      color: white;
  }
  #textarea{
    text-align: center;
    font-weight: bold;
    box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.75);
  }
  #outer
  {
      width:100%;
      text-align: center;
  }
  .inner
  {
      margin: 10px 10px 10px 10px;
      display: inline-block;
  }
  .batch{
      text-align: center;
      margin: 10px 10px 10px 10px;
  }
      p{
          color: lightyellow;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
      }
  .fade-enter {
      opacity: 0;
  }

  .fade-enter-active {
      transition: opacity 2s;
  }

  .fade-leave-active {
      transition: opacity 2s;
      opacity: 0;
  }
  .slide-enter {
      opacity: 0;
      /*transform: translateY(20px);*/
  }

  .slide-enter-active {
      animation: slide-in 1s ease-out forwards;
      transition: opacity 0.5s;
  }

  .slide-leave-active {
      animation: slide-out 1s ease-out forwards;
      transition: opacity 1s;
      opacity: 0;
      position: absolute;
  }

  .slide-move {
      transition: transform 1s;
  }

  @keyframes slide-in {
      from {
          transform: translateY(20px);
      }
      to {
          transform: translateY(0);
      }
  }

  @keyframes slide-out {
      from {
          transform: translateY(0);
      }
      to {
          transform: translateY(20px);
      }
  }

  @media screen and (max-width: 1200px) {
    .costum-input{
      width: 100%;
    }
  }
</style>
