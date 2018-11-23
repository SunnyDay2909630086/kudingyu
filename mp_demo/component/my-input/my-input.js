// component/my-input/my-input.js
const app=getApp()
const timeInterval=10
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myInput: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:"获取验证码",
    count: timeInterval,
    interval:-1,
    isGettingVcode:false //是否正在获取验证码
  },
  // attached() {
  //   console.log(app.globalData)
  // },
  detached(){
    console.log("组件被销毁了")
    if(this.dta.interval && this.data.myInput.type==='vcode'){
      clearInterval(this.data.interval)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInputBlur(e){
      console.log(e.detail)
      switch (this.data.myInput.type){
        case 'mobile':
          app.globalData.mobile=e.detail.value
          break;
        case 'vcode':
          app.globalData.vcode=e.detail.value
          break;
      }
      // console.log(app.globalData)

    },
    
    //当点击了获取验证码之后的处理函数
    getVcode(){
      // console.log("11111")
      //1.拿到手机号(从全局的globalData中获取)
      const result=this.validateMobile()
      console.log(result)
      
      if(!result){
      //2.进行验证，如果验证不通过，弹出一个提示(toast)
      // 显示消息提示框
        wx.showToast({
          title: '手机号不正确',
          image: '/images/失败.png',
          mask:true,
          duration: 2000
        })
        return
      }

      //节流阀处理，一般情况下，处理这种多次点击的时候，就使用一个boolean来进行
      //节流阀处理
      if(this.data.isGettingVcode) return
      console.log("1111111111")
      this.setData({
        title: `(${this.data.count})`
      })
      this.setData({
        isGettingVcode:true
      })
      //3.如果通过，标题进行倒计时，倒计时结束之后，恢复成获取验证码，并且要利用节流阀处理好多次点击
      this.data.interval=setInterval(()=>{
        this.data.count--
        //判断当前count的值，是否已经小于等于0，如果是，停止定时器，并且恢复成默认状态
        if(this.data.count<=0){
          clearInterval(this.data.interval)          
          this.data.interval=null
          this.data.count=10
          this.setData({
            isGettingVcode:false
          })
          this.setData({
            title:"获取验证码"
          })
          return
        }
        console.log(this.data.count)
        this.setData({
          title:`(${this.data.count})`
        })
      },1000)

    },
    //验证手机号的正则
    validateMobile() {
      var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/
      if (!reg.test(app.globalData.mobile)) {
        return false
      }
      return true
    }

  }
})
