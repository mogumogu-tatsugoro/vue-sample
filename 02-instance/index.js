let data = {test: 'test'};

const vm = new Vue({
  el: '#app',
  data: data
});

app.test = 'test1';

console.log( vm.test );
console.log( vm.test === data.test );

data.test = 'test2';
console.log( data.test );
console.log( vm.test === data.test );

app.testes = 'test3';
console.log(`app.testes => ${app.testes}`);
console.log(`data.testes === typeof undefined => ${typeof data.testes === 'undefined'}`);

let data2 = { a: 1 };

Object.freeze(data2);

const app2 =  new Vue({
  el: '#app2',
  data: data2,
  methods: {
    changeData: function() {
      this.a += this.a
    }
  }
});

data3 = {a: 1, b: 2};

const app3 = new Vue({
  el: '#app3',
  data: data3
});

console.log(app3.$el === document.getElementById('app3'));
console.log(app3.$data === data3);
// true


const vm4 = new Vue({
  el: '#vm4',
  data: {
    no: 0,
    text: 'text'
  },
  methods: {
    printNo: function() {
      return this.no += 1
    },
    test: function() {
      this.text = ''
    },
  },
  created: function() {
    console.log(`created is ${this.printNo()}`)
    // created is 1
  },
  mounted: function() {
    console.log(`mounted is ${this.printNo()}`)
    // mounted is 2
  },
  updated: function() {
    console.log(`updated is ${this.printNo()}`)
    // updated is 3
  },
});
