Component({
    /**
     * 组件的属性列表
     */
    externalClasses: ['l-class', 'l-class-icon'],
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        count: {
            type: Number,
            value: 5
        },
        score:{
            type: Number,
            value: 0
        },
        size: {
            type: String,
            value: '36'
        },
        disabled: Boolean,
        activeColor: {
            type: String,
            value: '#FFDD55'
        },
        inActiveColor: {
            type: String,
            value: '#FFF5CE'
        },
        name:{
            type:String,
            value:'favor-fill'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleClick(e){
            if(this.data.disabled) return;
            const {index} = e.currentTarget.dataset;
            this.setData({
                score:index + 1 
            })
            this.triggerEvent('linChange',{score:index+1})
        }
    }
})