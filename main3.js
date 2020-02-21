
var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
    data: {
        message: 'こんにちは',
        count: 0,
        val: [],
        value: "",
        price: 100,
        text: "",
        scrollY: 0,
        timer: null
    },
    methods: {
        handleClick: function () {
            alert('クリックしたよ')
        },
        handler: function (comment) {
            console.log(comment)
        },
        handleScroll: function () {
            if (this.timer === null) {
                this.timer = setTimeout(function () {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this), 200)
            }
        },
        scrollTop: function () {
            scroll.animateScroll(0)
        }
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll',this.handleScroll)
    },
})
