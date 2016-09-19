/**
 * v-bind:class
 */
new Vue({
    el: '#test_class',
    data: {
        show: true
    },
    components: {
        'bind-class': {
            template: '#bind_class',
            props: ['show']
        }
    }
});

/**
 * 使用v-bind:style时style属性名称采用驼峰命名法
 */
new Vue({
    el: '#test_style',
    components: {
        'bind-style': {
            template: '#bind_style',
            data: function () {
                return{
                    bindStyle: {
                        color: 'red',
                        fontSize: '20px',
                        fontWeight: '600'
                    }
                };
            }
        }
    }
});

/**
 * v-on
 */
new Vue({
    el: '#test_click',
    data: {
        show: false
    },
    components: {
        'on-click': {
            template: '#on_click',
            props: ['show'],
            methods: {
                changeColor: function () {
                    this.show = !this.show;
                }
            }
        }
    }
});

/**
 * v-for
 */
new Vue({
    el: '#test_for',
    components: {
        'v-for': {
            template: '#for',
            data: function () {
                return {
                    items: ['item1', 'item2', 'item3']
                };
            }
        }
    }
});

/**
 * v-if v-else
 */
new Vue({
    el: '#test_if',
    data: {
        showPar: true
    },
    components: {
        'if-else': {
            template: '#if-else',
            data: function () {
                return {
                    showChi: true
                };
            }
        }
    }
});

/**
 * v-show v-else
 */
new Vue({
    el: '#test_show',
    data: {
        showPar: true
    },
    components: {
        'show-else': {
            template: '#show-else',
            data: function () {
                return {
                    showChi: false
                };
            }
        }
    }
});

/**
 * v-text
 */
new Vue({
    el: '#test_text',
    components: {
        'v-text': {
            template: '#text',
            data: function () {
                return {
                    updateText: 'update text'
                };
            },
            methods: {
                appendText: function () {
                    this.updateText += ' clicked';
                }
            }
        }
    }
});

