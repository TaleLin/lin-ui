import countDownBehavios from '../behaviors/countdown';
Component({
  externalClasses: [
    'l-class',
    'l-class-time',
    'l-time-class'
  ],
  behaviors:[countDownBehavios],
  properties: {
    doneText:{
      type:String,
      value:'已结束'
    }
  },
  methods: {
        
  }
});