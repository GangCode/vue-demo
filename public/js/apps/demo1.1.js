/**
 *全局注册组件 
 *1.创建构造器
 *2.注册组件
 *3.创建Vue实例
 */
var globalComponent = Vue.extend({
    template: '<div>global component</div>'
});
Vue.component('global-component', globalComponent);
new Vue({
    el: '#global_comp'
});

/**
 * 局部注册组件
 *1.创建构造器
 *2.注册组件
 *3.创建Vue实例
 */
var localComponent = Vue.extend({
    template: '<div>local component</div>'
});
new Vue({
    el: '#loacal_comp',
    components: {
        'local-component': localComponent
    }
});

/**
 * 简化注册
 */
//1.在html中创建组件模板
//2.注册组件时使用模板id
new Vue({
    el: '#simpple_comp',
    components: {
        'simpple-component': {
            template: '#temp'
        }
    }
});

