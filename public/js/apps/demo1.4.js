Vue.component('grid', {
    template: '#grid-temp',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    }
})

new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        gridColumns: ['name', 'age', 'sex'],
        gridData: [
            {
                name: 'Jack',
                age: 30,
                sex: 'Male'
            }, {
                name: 'Bill',
                age: 26,
                sex: 'Male'
            }, {
                name: 'Tracy',
                age: 22,
                sex: 'Female'
            }, {
                name: 'Chris',
                age: 36,
                sex: 'Male'
            }
        ]
    }
})


