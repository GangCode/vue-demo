Vue.component('modal', {
    template: '#modal-temp',
    props: ['show']
});

new Vue({
    el: '#modal',
    data: {
        show: false
    },
    methods: {
        showModal: function () {
            this.show = true;
        },
        hiddenModal: function () {
            this.show = false;
        }
    }
});