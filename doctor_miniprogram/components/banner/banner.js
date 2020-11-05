Component({
  behaviors: [],
  properties: {
    // myProperty: { // 属性名
    //   type: String,
    //   value: ''
    // },
    // myProperty2: String // 简化的定义方式
  },
  
  data: {
    imageSrc: '/images/background_new.png'
  }, 

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function() { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },

  methods: {
    
  }
})