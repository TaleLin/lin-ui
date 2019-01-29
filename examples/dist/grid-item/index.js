Component({
    relations: {
        '../grid/index': {
            type: 'parent'
        },
    },
    externalClasses: [],
    properties: {
        key:String
    },
    data: {
    },
    attached() {

    },

    lifetimes: {
        show() {

        },
    },
    methods: {
        tapGridItem(e){
            console.log('tapGridItem',e)
           
        },
    }
});