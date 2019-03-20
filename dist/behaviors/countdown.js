module.exports = Behavior({
    behaviors: [],
    properties: {
        time: {
            type: Date,
            value: new Date().getTime() + 86400000
        },
        status: {
            type: Boolean,
            value: true,
            observer: function (newVal, oldVal, changedPath) {
                if (newVal) {
                    this.init();
                }
            }
        },
        timeType: {
            type: String,
            value: 'datetime'
        },
        format: {
            type: String,
            value: '{%d}天{%h}时{%m}分{%s}秒'
        },
        isZeroPadd: {
            type: Boolean,
            value: true,
        }
    },
    data: {
        initAddTime: 0,
        timer: null,
        date: [],
    },
    ready: function () {
        this.getLatestTime();
    },
    methods: {
        // 自动补零
        zeroPadding(num) {
            num = num.toString()
            return num[1] ? num : '0' + num
        },

        init() {
            clearInterval(this.data.timer);
            const timer = setTimeout(() => {
                this.getLatestTime.call(this);
            }, 1000);
            this.setData({
                timer
            })
        },

        getLatestTime() {
            let {
                time,
                status,
                timeType,
                initAddTime
            } = this.data;
            let countDownTime = timeType === 'second' ?
                time :
                Math.ceil((new Date(time).getTime() - new Date().getTime()) / 1000);
            if (countDownTime < 0 && timeType !== 'second') {
                this._getTimeValue(0);
                this.CountdownEnd();
                return
            }

            if (countDownTime - initAddTime > 0) {
                this.getLatestForCountDown(countDownTime);
            } else if (countDownTime - initAddTime < 0) {
                this.getLatestForAddTime(countDownTime);
            } else if (countDownTime - initAddTime === 0) {
                if (initAddTime <= 0) {
                    this._getTimeValue(countDownTime);
                }
                this.CountdownEnd();
            }
            if (status && countDownTime - initAddTime !== 0) {
                this.init.call(this);
            }
        },

        getLatestForAddTime(countDownTime) {
            let {
                initAddTime
            } = this.data;
            if (initAddTime !== Math.abs(countDownTime)) {
                initAddTime++;
                this._getTimeValue(initAddTime);
                this.setData({
                    initAddTime
                })
            }
        },

        getLatestForCountDown(countDownTime) {
            this._getTimeValue(countDownTime);
            this.setData({
                time: this.data.timeType === 'second' ? --countDownTime : this.data.time,
            });
        },

        _getTimeValue(countDownTime) {
            const {
                format
            } = this.data;
            const date = [];
            const fomatArray = format.split(/(\{.*?\})/);
            const formatType = [{
                key: '{%d}',
                type: 'day',
                count: 86400
            }, {
                key: '{%h}',
                type: 'hour',
                count: 3600
            }, {
                key: '{%m}',
                type: 'minute',
                count: 60
            }, {
                key: '{%s}',
                type: 'second',
                count: 1,
            }];
            let diffSecond = countDownTime;
            formatType.forEach(format => {
                const index = this._findTimeName(fomatArray, format.key);
                if (index === -1) return;
                const name = fomatArray[index];
                const formatItem = {
                    type: format.type,
                    name,
                    value: parseInt(diffSecond / format.count)
                };
                if (this.data.isZeroPadd) {
                    formatItem.value = this.zeroPadding(formatItem.value);
                }
                diffSecond %= format.count;
                date.push(formatItem);
            });
            this.setData({
                date
            });
            return date;
        },

        _findTimeName(fomatArray, str) {
            const index = fomatArray.indexOf(str);
            if (index === -1) return -1;
            return index + 1
        },

        CountdownEnd() {
            this.triggerEvent("linend", {});
        }
    }
});