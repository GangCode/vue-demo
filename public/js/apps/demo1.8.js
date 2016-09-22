var prodsData = [
    {
        '实例名称': 't-00001',
        '实例ip': '120.33.40.12',
        '区域': '上海',
        '线路': '联通'
    },
    {
        '实例名称': 't-00002',
        '实例ip': '127.39.10.22',
        '区域': '杭州',
        '线路': '铁通'
    },
    {
        '实例名称': 't-00293',
        '实例ip': '10.98.40.1',
        '区域': '上海',
        '线路': '电信'
    },
    {
        '实例名称': 't-03891',
        '实例ip': '129.37.89.123',
        '区域': '苏州',
        '线路': '联通'
    }
];

var category = [
    {name: '实例名称', value: '1'},
    {name: '实例ip', value: '2'},
    {name: '区域', value: '3'},
    {name: '线路', value: '4'}
];

var selectLists = [
    {name: '实例名称', value: '1'},
    {name: '实例ip', value: '2'},
    {name: '区域', value: '3'},
    {name: '线路', value: '4'}
];


var table = Vue.extend({
    template: '#simp_tab',
    props: ['cates', 'prods', 'query'],
    data: function () {
        return {
            categorys: category,
            products: prodsData,
            searchQuery: ''
        };
    },
    methods: {
        deleteItem: function (index) {
            var tds = $('[data-id=' + index + ']').children('td');
            var prodName = $.trim(tds[0].textContent);
            var prodPrice = $.trim(tds[1].textContent);

            console.log('delete ...' + prodName + "," + prodPrice);
            //服务端删除数据成功后删除UI
            this.prods.splice(index, 1);
        }
    },
    components: {
        'simpple-query': {
            template: '#simp_query',
//            props: ['query'],
        }
    }
});

Vue.component('simmple-tab', table);

var tableComponent = new Vue({
    el: '#test_tab'
});

