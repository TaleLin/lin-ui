Component({
    externalClasses: ['l-class','l-class-text'],
    properties: {
        icon: String,
        text: String,
        iconStyle: String,
        src: String,
        openData: Array,
        shape: {
            type: String,
            value:'circle'
        },
        mode: {
            type: String,
            value:'scaleToFill'
        },
        size: {
            type: Number,
            value: 120,
        },
        placement:{
            type: String,
            value:'right'
        }
    },
    methods: {
        tapAvatar:function(e){
            this.triggerEvent('lintap',{e},{ bubbles:false });
            this.triggerEvent('lintapcatch',{ e }, { bubbles:true });
        },
    }
});