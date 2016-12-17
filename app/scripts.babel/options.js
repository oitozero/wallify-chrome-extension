'use strict';

var app = new Vue({
  el: '#options',
  data: {
    // font: 'Abril Fatface',
    // size: [24,32,44,52,64],
    newQuote: '',
    quotes: [
      'Nothing is less productive than to make more efficient what should not be done at all.',
      'Consistently giving our time and attention to the things that are most important',
      'Working on the right thing is probably more important than working hard.',
      'If you’re hitting your marks, you didn’t set them high enough.',
      'Work hard until you don’t need to introduce yourself.'
    ]
  },
  methods: {
    addQuote: function () {
      var value = this.newQuote && this.newQuote.trim();
      if (!value) {
        return
      }
      this.quotes.push({
        id: new Date().getTime(),
        title: value
      });
      chrome.storage.sync.set({
        quotes: this.quotes
      }, function(){
        //
      });
      this.newQuote = '';
    },
    removeQuote: function (quote) {
      this.quotes.splice(this.quotes.indexOf(quote), 1);
      chrome.storage.sync.set({
        quotes: this.quotes
      }, function(){
        //
      });
    }
  }
});

chrome.storage.sync.get({
  quotes: [
    'Nothing is less productive than to make more efficient what should not be done at all.',
    'Consistently giving our time and attention to the things that are most important',
    'Working on the right thing is probably more important than working hard.',
    'If you’re hitting your marks, you didn’t set them high enough.',
    'Work hard until you don’t need to introduce yourself.'
  ]
}, function(data){
  app.quotes = data.quotes;
});
