Component({
    relations: {
        '../grid/index': {
            type: 'parent'
        },
    },
    externalClasses: [],
    properties: {
        key: String
    },
    data: {},
    attached() {

    },

    lifetimes: {
        show() {

        },
    },
    methods: {
        tapGridItem(e) {
            this.triggerEvent('lintap', {
                ...e
            }, {
                composed: true
            })
        },
    }
});