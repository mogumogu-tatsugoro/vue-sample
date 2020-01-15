let data = { test: 'test' };

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
