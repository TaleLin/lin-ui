Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    relations: {
        '../grid-item/index': {
            type: 'child',
            linked(target) {
                this.initGrids();

            },
            unlinked(target) {
                this.initGrids();
            }
        },

    },
    externalClasses: ['l-class', 'l-class-grid'],
    properties: {
        rowNum: {
            type: String,
            value: 3,
        },
        showBorder: Boolean,
        showColBorder: Boolean,
        showRowBorder: Boolean,
    },
    data: {
        gridItems: [],
        childNum: 0,
        currentIndex: -1,
        currentCell: -1,
    },
    ready() {
        this.initGrids();
    },

    lifetimes: {
        show() {

        },
    },
    methods: {
        initGrids() {
            let items = this.getRelationNodes('../grid-item/index');
            if (this.data.childNum === items.length) return;
            const gridItems = items.map((item, index) => {
                item.setData({
                    index,
                })
                return {
                    index:index,
                    key: item.data.key,
                    cell: item.data.cell
                }
            });
            this.setData({
                gridItems: gridItems,
                childNum: items.length
            })
        },

        tapGridItem(e) {
            const { gridIndex } = e.target.dataset;
            this.setData({
                currentIndex: gridIndex,
                currentCell: this.data.gridItems[gridIndex].cell
            });
        },

        tapGrid(e) {
            this.triggerEvent('lintap', {
                index: this.data.currentIndex,
                cell: this.data.currentCell
            }, { bubbles: true, composed: true });

            this.setData({
                currentIndex: -1,
                currentCell: -1
            });
        }
    }
});