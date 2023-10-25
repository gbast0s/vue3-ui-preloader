![logo](https://github.com/gbast0s/vue3-ui-preloader/assets/82844195/1ded0949-6132-419e-b0cd-5b86593b6253)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6325ad24ccc14097953ee6dc20109827)](https://app.codacy.com/gh/gbast0s/vue3-ui-preloader/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Netlify Status](https://api.netlify.com/api/v1/badges/19671b66-a541-4d59-805e-fe217b1e0955/deploy-status)](https://app.netlify.com/sites/vue3-ui-preloader/deploys)
[![Language](https://img.shields.io/badge/language-vue-green.svg)](https://img.shields.io/badge/language-vue-green.svg)
[![License](https://img.shields.io/badge/license-MIT-000000.svg)](https://img.shields.io/badge/license-MIT-000000.svg)
[![NPM Package](https://img.shields.io/npm/v/vue3-ui-preloader.svg)](https://www.npmjs.com/package/vue3-ui-preloader) 
[![NPM Downloads](https://img.shields.io/npm/dm/vue3-ui-preloader.svg)](https://www.npmjs.com/package/vue3-ui-preloader)
	<!-- <a href="https://github.com/vuejs/awesome-vue#loader"><img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome-Vue" /></a> -->


[![NPM](https://nodei.co/npm/vue3-ui-preloader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue3-ui-preloader/)

Remake made from: [Vue-ui-preloader](https://www.npmjs.com/package/vue-ui-preloader).

## Main changes

- Added support for Vue 3.
- Fixed the issue where the `"overflowHidden"` class remained active after the first use.
- Added options to add text to the loaders and customize them.





## Demo and playground
Live demo -  https://vue3-ui-preloader.netlify.app/

[Playground Website](https://vue3-ui-preloader.netlify.app/).
Adjust the settings using the playground options. On the bottom of the page you will find the source code that you can directly use in your project or you can manually change the props.

npm link - https://www.npmjs.com/package/vue3-ui-preloader

Vue 3 blitz link - https://stackblitz.com/edit/vue-xxhtha?file=src%2FApp.vue

## Installation

```bash
# use yarn
yarn add vue-ui-preloader
# use npm
npm install --save vue3-ui-preloader
```

## Usage

Vue 3 blitz link - https://stackblitz.com/edit/vue-xxhtha?file=src%2FApp.vue

In your main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import loader from "vue3-ui-preloader";

// Import the CSS or use your own!
import "vue3-ui-preloader/dist/loader.css"

const app = createApp(App)

app.component('loader', loader)

app.mount('#app')
```

In your template
```vue
<template>
	<loader  name="spinning" loadingText="Loading..." textColor="#ffffff" textSize="20" textWeight="500" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" :disableScrolling="true"></loader>
</template>
```

>**NOTE:** The best way to control the loader is to have a flag and use it in a **`v-if`** or **`v-show`** statement.<br>
>You can either use the [playground](https://vue3-ui-preloader.netlify.app/) website to automatically get all the props set or you can set them manaully using the below prop list. You can also resort to not passing any prop, in this case the preloader will use default settings.

## Via CDN

CDN demo link - https://jsfiddle.net/1t0jyeqh/10/

In your index.html
```html
<script src="https://unpkg.com/vue3-ui-preloader"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/vue3-ui-preloader/dist/loader.css">
```

In your template
```html
<div id="app">
	<loader  name="spinning" loadingText="Loading..." textColor="#ffffff" textSize="20" textWeight="500" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" :disableScrolling="true"></loader>
</div>
```

In your main.js
```js
const { createApp } = Vue

const app = createApp(loader)

app.mount('#app')
```

## Props
| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| name | string | 'spinning' | decides the type of loader |
| object | string | '#ff9633' | set the color of the loaders. hex or color |
| loadingText | string | 'Loading...' | set the text of some loaders. |
| textColor | string | '#ffffff' | set the color of the loadingText. hex or color |
| textSize | number | '15' | set the size of the loadingText. |
| textWeight | number/string | '800' | set the weight of the loadingText. (Ex: 800, bold) |
| color1 | string | only for circular | set the color of the circular loader disk1. hex or color |
| color2 | string | only for circular | set the color of the circular loader disk2. hex or color |
| size | number | 5 | set the size of loader |
| bg | string | '#343a40' | set the color of the loader background. hex or color |
| objectbg | string | '#999793' | set the color of the loader object background. hex or color |
| opacity | number | 80 | set the opacity of background |
| speed | number | 2 | animation speed in seconds |
| disableScrolling | boolean | false | disable page scrolling when preloader is open |

## Author

&#169; [Gonçalo Bastos](https://github.com/gbast0s)
