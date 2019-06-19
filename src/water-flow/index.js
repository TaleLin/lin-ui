// pages/components/water/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        columnGap: {
            type: String,
            value: '20rpx'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        data: [],
        leftData: [],
        rightData: []
    },

    attached() {
        this._init()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        _init() {
            wx.lin = wx.lin || {}
            wx.lin.renderWaterFlow = (data = [], success) => {
                if (Object.prototype.toString.call(data) !== '[object Array]') {
                    console.error("[data]参数类型错误，渲染失败");
                    return false;
                }
                this._select(data).then(() => {
                    success && success()
                })
            }
        },
        _select(data) {
            const query = wx.createSelectorQuery().in(this)
            this.columnNodes = query.selectAll('#left, #right')

            return new Promise((resolve, reject) => {
                this._render(data, 0, () => {
                    resolve()
                })
            })
        },
        _render(data, i, success) {
            if (data.length > i) {
                this.columnNodes.boundingClientRect().exec(res => {
                    const rects = res[0]
                    const leftHeight = rects[0].height
                    const rightHeight = rects[1].height

                    if (leftHeight <= rightHeight) {
                        this.data.leftData.push(data[i])
                    } else {
                        this.data.rightData.push(data[i])
                    }

                    this.setData({
                        leftData: this.data.leftData,
                        rightData: this.data.rightData
                    }, _ => {
                        this._render(data, ++i, success)
                    })
                })
            } else {
                success && success()
            }
        }
    }
})