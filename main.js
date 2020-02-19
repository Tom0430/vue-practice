var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['りんご', 'バナナ', 'みかん'],
        count: 0,
        show: true,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgrey',
        styleObject: {
            color: "red",
            backgroundColor: "blue"
        }
    },
    methods: {
        handleClick: function (event) {
            alert(event.target)　//[object HTMLButtonElement] 任意の文字列でもいける
        },
        // increment: function(){
        //         this.count += 1;
        //     }
        // NGパターン　アロー関数でうまく行かず、、、ES2015でのアロー関数は関数が定義されているスコープをthisとして返す
        // ここのthisはインスタンスつまり　new Vue()の返り値と同じものをさす

        // increment: function () {
        //     setTimeout(function () { this.count++ }, 100)
        // }
        // NGパターン　コールバック関数の中でのthisはwindowになってしまう

        increment: function () {
            var vm = this
            setTimeout(function () { vm.count++ }, 100)
        }
        // OKパターン　thisを定義しておけばよし

        // increment: function () {
        //     setTimeout( ()=> { this.count++ }, 1000)
        // }
        // OKパターン　アロー関数はsetTimeoutで呼ばれるincrementメソッドのthisで、つまりvueインスタンスにアクセスできる


    }
})