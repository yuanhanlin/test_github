var vm = new Vue({
  el: '#example',
  data: {
    name: 'Vue.js',
    checkedNames: {},
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      /*// 方法内 `this` 指向 vm
      alert('Hello ' + this.name + '!');
      // `event` 是原生 DOM 事件
      alert(event.target.tagName);*/
      console.log(vm.checkedNames);
      vm.checkedNames.firstName = "changesByJs";
      
    }
  }
});

// 也可以在 JavaScript 代码中调用方法
