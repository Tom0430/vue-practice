new Vue({
    el: '#app',
    data: {
      list: [],
      current: '',
      topics: [
        { value: 'vue', name: 'Vue.js' },
        { value: 'jQuery', name: 'jQuery' }
        ],
      price: 19800
    },
    filters: {
        localNum: function (val) {
            return val.toLocalString()
        },
        // 小数点以下を第2位に丸めるフィルタ
        round: function (val) {
          return Math.round(val * 100) / 100
        },
        // 度からラジアンに変換するフィルタ
        radian: function (val) {
          return val * Math.PI / 180
        }
    },
    watch: {
      current: function (val) {
        // GitHubのAPIからトピックのリポジトリを検索

        axios.get('https://api.github.com/search/repositories', {
          params: {
            q: 'topic:' + val
          },
        }).then(function (response) {
            this.list = response.data.items
        }.bind(this))
      }
    },
})
