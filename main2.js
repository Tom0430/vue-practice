var app = new Vue({
    el: '#app',
    data: {
        count: 0,
        item: {
            id: 4,
            class: 'textarea',
        },
        //  オブジェクトで一気にクラス指定することができる v-bind
        type: 'B',
        // list: [
        //     { id: 1, name: 'スライム', hp: 100 },
        //     { id: 2, name: 'ゴブリン', hp: 200 },
        //     { id: 3, name: 'ドラゴン', hp: 500 }
        // ],
        list:[],
        name: '',
    },
    methods: {
        increment: function () {
            this.count += 1;
        },
        typeChange: function () {
            if (this.type === 'A') {
                this.type = 'B';
            } else if (this.type === 'B') {
                this.type = 'C'
            } else {
                this.type = 'A'
            }
        },
        doAdd: function () {
            // リスト内で1番大きいIDを取得
            var max = this.list.reduce(function (a, b) {
              return a > b.id ? a : b.id
            }, 0)
            // 新しいモンスターをリストに追加
            this.list.push({
              id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
              name: this.name, // 現在のフォームの入力値
              hp: 500
            })
        },
        doRemove: function (index){
            this.list.splice(index, 1)
        },
        doAttack: function (index) {
            this.list[index].hp -= 10 // HPを減らす
          }
    },
    // created: function () {
    //     //全ての要素にactiveプロパティを追加したい
    //     this.list.forEach(function (item) {
    //         this.$set(item,'active', false)
    //     },this),
    // }
    created: function () {
        axios.get('https://api.myjson.com/bins/1cbak0').then(function (response) {
            console.log(response)
            console.log(response.data)
            this.list = response.data
        }.bind(this)).catch(function (e){
            console.error(e)
        })
    },
    mounted: function () {
        console.log(this.$el)  //<div id="app"></div>  インスタンスがマウントするmounted以降じゃなければ読み込めない
    }
})