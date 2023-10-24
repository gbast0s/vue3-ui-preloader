<template>
    <div id="overlay-box" :style="{'background-color': bgcolors}">
        <div class="load-box" :style="{'background': object,'width': size*20+'px','height': size*20+'px'}">
        </div>
    </div>
</template>

<script>

import overflowMixin from '../../mixins/overflow';

export default {
    name: "box",
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
        root.style.setProperty('--time-animation', "loading "+ this.speed +"s linear infinite");
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
        --time-animation: loading 2s linear infinite;
    }

    #overlay-box{
        background-color: rgba(52,58,64,1);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:1000;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        perspective:200px;
    }

    .load-box {
        border-radius:15px;
        animation:var(--time-animation);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index:2000;
    }

    @keyframes loading {
        0% {
            transform: rotateX(0deg) rotateY(0deg);
        }
        50% {
            transform:rotateX(0deg) rotateY(180deg);
        }

        100% {
            transform:rotateX(180deg) rotateY(180deg);
        }
    }
</style>