//创建组件构造器
var UL = Vue.extend({
    template: '#c-ul', //组件模板ID
    props: {nums: Array}//传递数据给自组件:指定传递数据的类型
});
Vue.component("c-ul", UL);//注册组件
//实例化组件
new Vue({
    el: "#list", //渲染位置的ID
    data: {//数据
        datanums: [
            {num: '1'},
            {num: '2'},
            {num: '3'}
        ]
    }
});

