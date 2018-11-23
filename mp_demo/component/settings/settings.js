// component/settings/settings.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    settings:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached(){
    // console.log(this.data)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clickSettings(e){
      if(!e.currentTarget.dataset.navigateTo) return
      this.triggerEvent('goToSettingsPage',e.currentTarget.dataset.navigateTo)
    }
  }
})
