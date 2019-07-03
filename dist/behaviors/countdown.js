module.exports = Behavior({
    behaviors: [],
    properties: {
        time: {
            type: Date,
            value: new Date().getTime() + 86400000,
            observer: function (newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.getLatestTime();
                }
            }
        },
        status: {
            type: Boolean,
            value: true,
            observer: function (newVal, oldVal, changedPath) {
                if (newVal) {
                    this.init();
                } else if (!newVal) {
                    clearInterval(this.data.timer);
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
        },
        countdownType: {
            type: String,
            value: "normal"
        },
        isClearInterval: {
            type: Boolean,
            value: true
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

    detached: function () {
        if (this.data.isClearInterval) {
            clearInterval(this.data.timer);
        }
    },

    pageLifetimes: {
        hide() {
            if (this.data.isClearInterval) {
                clearInterval(this.data.timer);
            }

        },
        show() {
            if (this.data.isClearInterval) {
                this.getLatestTime();
            }
        }
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
                initAddTime,
                countdownType,
            } = this.data;
            // IOS不支持2019-04-23 的日期格式
            let countDownTime = time
            if (countdownType === "normal") {  //当countdownType === normal时，不影响之前的代码
                if (timeType !== 'second') {
                    countDownTime = typeof time === 'string' ? countDownTime.replace(/-/g, '/') : countDownTime;
                    countDownTime = Math.ceil((new Date(countDownTime).getTime() - new Date().getTime()) / 1000);
                }

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

            } else if (countdownType === "anniversary") { //  当countdownType === anniversary时，为纪念日模式
                if (timeType === "second") {    //  纪念日模式不能设置timeType === second
                    console.error(`countdownType为${countdownType}类型时，不可设置timeType值为second`)
                } else {
                    countDownTime = typeof time === 'string' ? countDownTime.replace(/-/g, '/') : countDownTime;
                    countDownTime = Math.ceil((new Date().getTime() - new Date(countDownTime).getTime()) / 1000);
                    if (countDownTime >= 0) {   //  countDownTime计算结果不能为负数
                        this.getLatestForCountDown(countDownTime);
                        this.init.call(this);
                    } else {
                        console.error("time传值错误")
                    }
                }
            } else { //  countdownType 不能设置为 normal，anniversary 以外的值
                console.error("错误的countdownType类型")
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
        },
    }
});