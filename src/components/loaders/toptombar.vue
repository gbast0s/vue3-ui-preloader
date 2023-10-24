<template>
    <div id="overlay-bar" :style="{'background-color': bgcolors}">
        <div class="loader-bar" :style="{'color': object,'font-size': size+'px',}"><span class="load-text">{{loadingText}}</span></div>
    </div>
</template>

<script>

import overflowMixin from '../../mixins/overflow';

export default {
    name: "toptombar",
    mixins: [overflowMixin],
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
        disableScrolling: {
            type: Boolean,
        },
    },
    data() {
        return{
            bgcolors: ''

        };
    },
    created() {
        let root = document.documentElement;
        root.style.setProperty('--time-animation', "load " + this.speed + "s infinite alternate ease-in-out");
        root.style.setProperty('--color-bar',this.objectbg);

        root.style.setProperty('--load-text-color', this.textColor);
        root.style.setProperty('--load-text-size', this.textSize + 'px');
        root.style.setProperty('--load-text-weight', this.textWeight);

        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(this.bg))
        {
            let c = this.bg.substring(1).split('');
            if(c.length == 3) c= [c[0], c[0], c[1], c[1], c[2], c[2]];

            c = '0x'+c.join('');
            this.bgcolors= 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + this.opacity/100 +')';
        }
    }   
    
}
</script>


<style>

    :root{
        --time-animation: load .7s infinite alternate ease-in-out;
        --color-bar: #ffbb0f;
        --load-text-size: 12px;
        --load-text-color: #384aeb;
        --load-text-weight: 800;
    }

    #overlay-bar{
        background-color: rgba(52,58,64,1);
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:1000;
    }

    .load-text{
        font-size: var(--load-text-size);
        color: var(--load-text-color);
        font-weight: var(--load-text-weight);
    }
    .loader-bar{
        width: 250px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-weight: 900;
        color: #ce4233;
        letter-spacing: 0.2em;
    }

    .loader-bar:before, .loader-bar:after {
        content: "";
        display: block;
        width: 15px;
        height: 15px;
        background: var(--color-bar);
        position: absolute;
        animation: var(--time-animation);
    }
  
    .loader-bar:before {
        top: 0;
    }
  
    .loader-bar:after {
        bottom: 0;
    }

    @keyframes load {
        0% { left: 0; height: 30px; width: 15px }
        50% { height: 8px; width: 40px }
        100% { left: 235px; height: 30px; width: 15px}
    }
</style>