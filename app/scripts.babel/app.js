'use strict';

var app = new Vue({
  el: '#app',
  data: {
    quote: {
      title: 'Work hard until you don’t need to introduce yourself.'
    },
    palletes: [
      {
        color: '#0968C9',
        background: '#FCFCFC'
      },
      {
        color: '#ED5E61',
        background: '#FCFCFC'
      },
      {
        color: '#2EB872',
        background: '#FCFCFC'
      },
      {
        color: '#FABC41',
        background: '#FCFCFC'
      },
      {
        color: '#FF7844',
        background: '#FCFCFC'
      },
      {
        color: '#574B90',
        background: '#FCFCFC'
      }
    ]
  },
  computed: {
    font: function () {
      return '"Abril Fatface", cursive';
    },
    pallete: function(){
      return this.palletes[Math.floor(this.palletes.length * Math.random())]
    }
  }
});

chrome.storage.sync.get({
  quotes: [

  ]
}, function(data){
  app.quotes = data.quotes;
  app.quote = data.quotes[Math.floor(data.quotes.length * Math.random())];
});
