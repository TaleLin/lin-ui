Component({
  behaviors: ['wx://form-field'],
  externalClasses: ['l-class', 'l-title-class'],
  relations: {
    '../checkbox-group/index': {
      type: 'parent'
    }
  },
  properties: {
    value: {
      type: String,
      value: ''
    },
    detail: {
      type: Object,
      value: {}
    },
    // checkbox的形状
    shape: {
      type: String,
      value: 'right'
    },
    type: {
      type: String,
      value: 'square'  // square 方形   circle 圆形
    },
    // checkbox的大小
    size: {
      type: [String, Number],
      value: 36
    },
    // 是否选中
    checked: {
      type: Boolean,
      value: false
    },
    // 不可选状态
    disabled: {
      type: Boolean,
      value: false
    },
    //  选中后的颜色
    color: {
      type: String,
      value: '#3963BC'
    },
    //  是否自定义内容
    custom: {
      type: Boolean,
      value: false
    },
    // radio的布局
    placement: {
      type: String,
      value: 'left'
    }
  },
  data: {
    right: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAp1JREFUeAHtmD1IlVEYx80KLckSpIw2kxAcAoeGBiODGlpcJGgxRChBsMGpocWpqSUcXFxaIlBoaYikoaEhaAgaAtdIKsK+yL5uvweu8HI7PO+9571cOvf9P/DnvO95znPO+f+uvl8dHQoREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERaDaBSqXSg/Y2e97k5wPKIHqM/qDvaBntT95YMwwAYgS9RbWx1Iz5k54DIifRu1oy1fMvtJ1JGyyyecyPog9VGKFmm85yXo8wfgp9DFHJ9K0V+QGSrQXAabSVARE63KBzIFmTsRvH9Bj6HCKS6XvN8bHYNZKtw/Q4+poBETp8RefRZE3GbhzTF9C3EJFM30uOD8eukWwdpi8ie/jz4gXJ/mRNxm4c0xPIbtdePCfZF7tGS+vY6CF0Fp0oujBzTKKfyItnJA8WXasl9Wz0CspeJ+5z3huzOHWX0S/kxVOSB2Lmb3kNGx1GPwJu7NrQ0PMI46fQb+TFE5I9LTcauyCbve64sYe2oXrmZtwMyoPziDFpvamz4WvIi02Sox4k8rPIPld48ZBktzfPf5lj0wPoveeM3Cd0LmSA/vmcWks/QF2h+iT62PwZZBC8sFv2pawhzhe8gmpulTb9N3NM2CcI+3fywq4xcwaJ9oY3sJq7R7snCzXpY8wcR3Zhzov1vAHk76LdSQMJbR5TR5Dd4ovECsXt+0UQc72onr8Shv0Ty/TsCsFvqz5MdiF7om4k7jC4/eHs/NKY7URLdRK6vVNXuhZAN3Mg3SodlFrDALqKQq8Si7VjS3sOoPPIPo1avEHTpYXhGQfMPi+vnAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIQCME/gJuaIsjMhxDzAAAAABJRU5ErkJggg==',
    circle: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAjlJREFUeAHtmjFOw0AQRWOUApGSBqhNR8MZcgEKehcUXCMnAlHmFBTQQU1ooAtCAsn8j9aS5SRaR56xlc0f6cuOdz2z87wbe9cejWQiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIi0A+BrJ8wm6OUZXmI0nPoFDoLNd+wXUAvWZZ9h2P7swGUCVRAd9AS2mQsY50CmiRPCEmOoVtoAW1rPIfnjpMEhcRy6AnqavSRJwUJCU2hz65kaufT1zQJSEwE+qklZ7VLn7sNCQlwWFn2nCZc+nYdbm63eTScf6aP0IXzUHiG/0s8Dvx6xDnwcBp83mDrDYehGIOxXMylB6H38JnlFTpxafWq03ccytGLlqtF3Y549aBrNKsvOCTAWIxpbl6ArsxbGnfoEtN8iGF4cW71AR3FczKt8QVvx9ZzN48exIln33BImjEZ29Q8AFUzctOGtnRmHtsDEJcthjLz2B6AhoLjEtcDEBe6hjIutJmaByDzRm6RsfnF0W0+Qt+8B4XnkHkkrkfx3PoZiI00BxQyf/AgEPHpEtN8iDEJTVYjlzLMqmeRapbFsxDT0ue/L5ceRM+pLJiZE687BKSdX3Kt5+OyD0hatI+RDZAsF+/Tee1TwQvDTS8OKyDrtoCkV8/rwDSPAVT18cI99mMfL7BOwXOafvr47Xabb9t4JF59/sLFrmo9h5NOTnr38/OXtvBUTwREQAREQAREQAREQAREQAREQAREQAREQAREQAREICkCf2RxAMVsHYMpAAAAAElFTkSuQmCC',
    checked: true
  },
  methods: {
    onChangeHandle(current, type) {
      if (this.data.disabled)  return;
      // 页面不调用，由父组件调用 改变选中状态
      this.setData({
        checked: current
      });
      // 将值传递给父组件
      if (type === 'init' && current) {
        const item = {
          current: current,
          value: this.data.value,
          detail: this.data.detail
        };
        const parent = this.getRelationNodes('../checkbox-group/index')[0];
        parent ? parent.currentChange(item) : this.triggerEvent('linchange', item);
      }

    },
    // 点击 checkbox
    onCheckBoxChangeTap() {
      if (this.data.disabled) return;
      const item = {
        current: !this.data.checked,
        value: this.data.value,
        detail: this.data.detail,
        all: null
      };
      const parent = this.getRelationNodes('../checkbox-group/index')[0];
      parent ? parent.onEmitEventHandle(item) : this.triggerEvent('linchange', item);
      // parent ? console.log('') : this.onChangeHandle(true);
      this.setData({
        checked: !this.data.checked
      });
    }
  }
});