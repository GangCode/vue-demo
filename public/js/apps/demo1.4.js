var Child = Vue.extend({
    template: '#child_temp',
    props: ['proEdit', 'proDelete'],//1.在子组件中定义props属性
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

var Parent = Vue.extend({
    template: '#parent_temp',
    components: {
        'child': Child
    },
    data: function () {//父组件中的数据
        return  {
            edit: '修改',
            delete: '删除'
        };
    }
});

Vue.component('parent', Parent);

new Vue({
    el: '#parent'
});



