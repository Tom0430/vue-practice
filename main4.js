var app = new Vue({
    el: "#app",
    data: {
        width: "",
        height: "",

        // フォームの入力と紐付けるデータ
        budget: 300,
        // 表示件数
        limit: 2,
        // もとになるリスト
        list: [
        { id: 1, name: 'りんご', price: 100 },
        { id: 2, name: 'ばなな', price: 200 },
        { id: 3, name: 'いちご', price: 400 },
        { id: 4, name: 'おれんじ', price: 300 },
        { id: 5, name: 'めろん', price: 500 }
        ],
        order: false
    },
    computed: {
        halfWidth: function () {
            return this.width / 2
        },
        halfHeight: function() {
        return this.height / 2
        },
        // 「width × height」の中心座標をオブジェクトで返す
        halfPoint: function() {
        return {
            x: this.halfWidth,
            y: this.halfHeight
            }
        },
        computedData: function () { return Math.random() },
        // budget以下のリストを返す算出プロパティ
        matched: function() {
            return this.list.filter(function(el) {
            return el.price <= this.budget
            }, this)
        },
        // sortedを新しく追加
        sorted: function () {
            console.log("まっちど",this.matched)
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
            // _はloadsh.min.jsを入れることで使えるようになる　この引数の書き方もそうかも
        },
        // limitedで使用するリストをsortedに変更
        limited: function () {
            console.log(this.sorted)
            return this.sorted.slice(0, this.limit)
        }
        },
        methods: {
            methodsData: function() { return Math.random() }
        }
})

// 算出プロパティはリアクティブな依存データに基づき結果をキャッシュする
// 今回　computedData: function() { return Math.random() } には基づく依存データがないから
// 何度使っても同じ数字が返される

// methodの方は再描画されるたびに毎回動くから、inputに文字を入力したりすると何度も数字が変わる

// 算出プロパティは元のデータに変更があるまで何度使用しても関数内の処理が一度しか行われない
// だから複雑な処理に向いている