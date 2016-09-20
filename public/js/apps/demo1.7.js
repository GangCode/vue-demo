var prodsData = [
    {
        '商品名称': 'mac air',
        '商品单价': 10000
    },
    {
        '商品名称': 'ipad',
        '商品单价': 9000
    },
    {
        '商品名称': 'iphone8',
        '商品单价': 5000
    },
    {
        '商品名称': 'apple watch',
        '商品单价': 3000
    }
];

var category = [
    {name: '商品名称'},
    {name: '商品单价'}
];

var table = Vue.extend({
    template: '#simp_tab',
    props: ['cates', 'prods', 'query','selects'],
    methods: {
        deleteItem: function (index) {
            var tds = $('[data-id=' + index + ']').children('td');
            var prodName = tds[0];
            var prodPrice = tds[1];

            //服务端删除数据成功后删除UI
            this.prods.splice(index, 1);
        }
    }
});

Vue.component('simmple-tab', table);

var v_tab = new Vue({
    el: '#test_tab',
    data: {
        categorys: category,
        products: prodsData,
        searchQuery: '',
        selectLists: [
            {name:'商品名称'},
            {name:'商品单价'}
        ]
    }
});

