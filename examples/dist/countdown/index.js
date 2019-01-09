import countDownBehavios from '../behaviors/countdown';
Component({
    externalClasses: ['l-class','l-class-time'],
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