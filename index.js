const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

const app2 = new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

const app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
});

const app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      { text: 'aaa' },
      { text: 'bbb' },
      { text: 'ccc' },
    ]
  }
});

const app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

const app6 = new Vue({
  el: '#app6',
  data: {
    message: 'Hello Vue!'
  }
});
