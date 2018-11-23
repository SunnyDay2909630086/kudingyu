Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    course: {
      type: Object
    }
  },
  data: {
    // 这里是一些组件内部数据
   
  },
  methods: {
    // 这里是一个自定义方法,传值给父页面
    clickCourse(e){
      // console.log("11111111",e.currentTarget.dataset)
      if(e.currentTarget.dataset.isFull) return
      this.triggerEvent('tapCourse',{
        id:e.currentTarget.dataset.id,
        title:e.currentTarget.dataset.title
      })
    },
  }
})