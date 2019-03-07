Component({
    externalClasses: ['l-class','l-class-self',],
    options: {
        addGlobalClass: true,
    },
    properties: {
        name: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: '',
        },
        size: {
            type: String,
            value: '',
        },
    },

    data:{
        default:{
            size:40,
            color:'#45526B',
        },
    },

    ready:function(){
        if(!this.data.name) {
            console.error('请传入Icon组件的name属性');
        }
    },
    methods: {
    }
});
