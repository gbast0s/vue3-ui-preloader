<template>
    <div id="overlay-spinner" :style="{'background-color': bgcolors}">

        <span class="load-text">{{loadingText}}</span>
        <div class="loader-spinner" :style="{'border': size + 'px solid ' + objectbg,'border-top': size + 'px solid ' + object}"></div>
    </div>
</template>

<script>

import overflowMixin from '../../mixins/overflow';

export default {
    name: "static-loader",
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
        root.style.setProperty('--time-animation', "spin "+ this.speed + "s linear infinite");
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
        --time-animation: spin 2s linear infinite;
        --load-text-size: 15px;
        --load-text-color: #384aeb;
        --load-text-weight: 800;
    }

    #overlay-spinner{

        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:1000;
        font-family: 'Montserrat',Helvetica,Arial,Lucida,sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 12px;
        font-weight: 800;
    }

    .load-text{
        font-size: var(--load-text-size);
        color: var(--load-text-color);
        font-weight: var(--load-text-weight);
    }

    .loader-spinner{
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: var(--time-animation);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index:2000;
    }

    @keyframes spin {
        0%{ transform: rotate(0deg);}
        100%{ transform: rotate(360deg);}

    }
</style>