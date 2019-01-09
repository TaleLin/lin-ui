// Message初始数据
const default_data = {
  visible: false,
  content: '',
  time: 2,
  icon: true,
  name: '',
  type: 'default',
} 

let timmer = null;

Component({
  externalClasses: ['l-class'],
  properties: {
    
  },

  data: {
    ...default_data
  },

  methods: {
    // Show
    handleShow(options) {
      const {
        type = 'default', time = 2, icon = true, name = ''
      } = options;

      this.setData({
        ...options,
        type,
        icon,
        name,
        time,
        visible: true
      });

      // ms转换为s
      const d = this.data.time * 1000;

      if (timmer) clearTimeout(timmer);
      if (d !== 0) {
        timmer = setTimeout(() => {
          this.handleHide();
          timmer = null;
        }, d);
      }
    },

    //Hide
    handleHide() {
      this.setData({
        ...default_data
      });
    }
  }
});