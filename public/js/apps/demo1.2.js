//1.定义子组件构造器
var Child = Vue.extend({
    template: '#child_temp',
    data: function () {
        return {
            items: [
                {name: 'item1'},
                {name: 'item2'},
                {name: 'item3'}
            ]
        };
    }
});

//2.定义父组件构造器，父组件内注册子组件
var Parent = Vue.extend({
    template: '#parent_temp',
    components: {
        'child': Child
    }
});

//3.全局注册父组件
Vue.component('parent', Parent);

//4.创建组件实例
new Vue({
    el: '#parent'
});