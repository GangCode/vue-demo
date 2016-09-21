new Vue({
    el: 'body',
    data: {
        msg: 'input text',
        city : [],
        sex: [],
        opts:[
            {name : '惊喜',value:'1'},
            {name : '非常满意',value:'2'},
            {name : '满意',value:'3'},
            {name : '不满意',value:'4'}
        ],
        selected :'0'
    }
});