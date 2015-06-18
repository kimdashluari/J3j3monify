/**
* j3j3m0nify.js | Copyright (c) 2015 Kim Maravilla | www.maravillakim.info
*
*/

(function($){

	"use strict";

	var J3j3m0nify = function(el,options){

		this.el = $(el);
		
		this.options = $.extend({},$.fn.j3j3m0nify.defaults,options);

		this.originalWords = ["hello","po","ako","si"];

		this.jejeWords = ["eow","phouws","aq","xii"];
	
		this.jejeThis();

	}

	J3j3m0nify.prototype = {
		jejeThis : function(){
			var oldText = this.el.text();
			var words = oldText.split(" ");
			var newWords = words.map(function(word){
					var w = this.originalWords.indexOf(word);	
					if( w > -1 )
						return this.jejeWords[w];
					return word;
				}.bind(this));
			this.el.text(newWords.join(" "));
		}
	};

	$.fn.j3j3m0nify = function(options){
		return this.each(function(){
			var $this = $(this);
				new J3j3m0nify(this,options);
		});
	}

	$.fn.j3j3m0nify.defaults = {};

}(jQuery));
