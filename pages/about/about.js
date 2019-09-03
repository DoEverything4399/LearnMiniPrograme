Page({
  data:{
    name:'Feynman',
    age:18,
    movies:[
      '进击的巨人',
      '哪吒-魔童降世',
      '海王',
      '变形金刚'
    ],
    counter:0
  },
  clickAdd(){
    //内部没有数据响应，这点像react
    // this.data.counter++

    this.setData({
      //不支持++
      counter:this.data.counter+1
    })
  },
  clickSubstraction(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})