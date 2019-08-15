Component({
    relations: {
        '../grid/index': {
            type: 'parent'
        },
    },
    externalClasses: ['l-grid-item'],
    properties: {
        key: String,
        cell:{
            type:Object,
            value:{}
        },
    },
    data: {
        index:0,
    },
    attached() {

    },

    lifetimes: {
        show() {

        },
    },
    methods: {
        tapGridItem(e) {
            this.triggerEvent('linitemtap', {
                ...this.data
            }, { bubbles: true, composed: true })
        },
    }
});