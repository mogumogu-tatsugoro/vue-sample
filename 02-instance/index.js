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
