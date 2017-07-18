(function(h){var c={preloadImg:true};var e=false;var d=function(l){l=l.replace(/^url\((.*)\)/,"$1").replace(/^\"(.*)\"$/,"$1");var j=new Image();j.src=l.replace(/\.([a-zA-Z]*)$/,"-hover.$1");var k=new Image();k.src=l.replace(/\.([a-zA-Z]*)$/,"-focus.$1")};var b=function(j){var l=h(j.get(0).form);var m=j.next();if(!m.is("label")){m=j.prev();if(m.is("label")){var k=j.attr("id");if(k){m=l.find('label[for="'+k+'"]')}}}if(m.is("label")){return m.css("cursor","pointer")}return false};var f=function(j){var k=h(".jqTransformSelectWrapper ul:visible");k.each(function(){var l=h(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);if(!(j&&l.oLabel&&l.oLabel.get(0)==j.get(0))){h(this).hide()}})};var a=function(j){if(h(j.target).parents(".jqTransformSelectWrapper").length===0){f(h(j.target))}};var i=function(){h(document).mousedown(a)};var g=function(j){var k;h(".jqTransformSelectWrapper select",j).each(function(){k=(this.selectedIndex<0)?0:this.selectedIndex;h("ul",h(this).parent()).each(function(){h("a:eq("+k+")",this).click()})});h("a.jqTransformCheckbox, a.jqTransformRadio",j).removeClass("jqTransformChecked");h("input:checkbox, input:radio",j).each(function(){if(this.checked){h("a",h(this).parent()).addClass("jqTransformChecked")}})};h.fn.jqTransInputText=function(){return this.each(function(){var j=h(this);if(j.hasClass("jqtranformdone")||!j.is("input")){return}j.addClass("jqtranformdone");var k=b(h(this));k&&k.bind("click",function(){j.focus()});j.addClass("jqTransformInput").wrap('<div class="jqTransformInputWrapper"><div class="jqTransformInputInner"><div></div></div></div>');var l=j.parent().parent().parent();j.focus(function(){l.addClass("jqTransformInputWrapper_focus")}).blur(function(){l.removeClass("jqTransformInputWrapper_focus")}).hover(function(){l.addClass("jqTransformInputWrapper_hover")},function(){l.removeClass("jqTransformInputWrapper_hover")});h.browser.safari&&l.addClass("jqTransformSafari");this.wrapper=l})};h.fn.jqTransCheckBox=function(){return this.each(function(){if(h(this).hasClass("jqTransformHidden")){return}var l=h(this);var k=this;var m=b(l);m&&m.click(function(){j.trigger("click")});var j=h('<a href="#" class="jqTransformCheckbox"></a>');l.change(function(){this.checked&&j.addClass("jqTransformChecked")||j.removeClass("jqTransformChecked");return true});j.click(function(){if(l.attr("disabled")){return false}l.trigger("click").trigger("change");return false});this.checked&&j.addClass("jqTransformChecked")})};h.fn.jqTransRadio=function(){return this.each(function(){if(h(this).hasClass("jqTransformHidden")){return}var j=h(this);var l=this;oLabel=b(j);oLabel&&oLabel.click(function(){k.trigger("click")});var k=h('<a href="#" class="jqTransformRadio" rel="'+this.name+'"></a>');j.change(function(){l.checked&&k.addClass("jqTransformChecked")||k.removeClass("jqTransformChecked");return true});k.click(function(){if(j.attr("disabled")){return false}j.trigger("click").trigger("change");h('input[name="'+j.attr("name")+'"]',l.form).not(j).each(function(){h(this).attr("type")=="radio"&&h(this).trigger("change")});return false});l.checked&&k.addClass("jqTransformChecked")})};h.fn.jqTransTextarea=function(){return this.each(function(){var k=h(this);if(k.hasClass("jqtransformdone")){return}k.addClass("jqtransformdone");oLabel=b(k);oLabel&&oLabel.click(function(){k.focus()});var l='<table cellspacing="0" cellpadding="0" border="0" class="jqTransformTextarea">';l+='<tr><td id="jqTransformTextarea-tl"></td><td id="jqTransformTextarea-tm"></td><td id="jqTransformTextarea-tr"></td></tr>';l+='<tr><td id="jqTransformTextarea-ml">&nbsp;</td><td id="jqTransformTextarea-mm"><div></div></td><td id="jqTransformTextarea-mr">&nbsp;</td></tr>';l+='<tr><td id="jqTransformTextarea-bl"></td><td id="jqTransformTextarea-bm"></td><td id="jqTransformTextarea-br"></td></tr>';l+="</table>";var j=h(l).insertAfter(k).hover(function(){!j.hasClass("jqTransformTextarea-focus")&&j.addClass("jqTransformTextarea-hover")},function(){j.removeClass("jqTransformTextarea-hover")});k.focus(function(){j.removeClass("jqTransformTextarea-hover").addClass("jqTransformTextarea-focus")}).blur(function(){j.removeClass("jqTransformTextarea-focus")}).appendTo(h("#jqTransformTextarea-mm div",j));this.oTable=j})};h.fn.jqTransSelect=function(){return this.each(function(o){var j=h(this);if(j.hasClass("jqTransformHidden")){return}if(j.attr("multiple")){return}var l=b(j);var n=j.addClass("jqTransformHidden").wrap('<div class="jqTransformSelectWrapper"></div>').parent();n.prepend('<div><span></span><a href="#" class="jqTransformSelectOpen"></a></div><ul></ul>');var m=h("ul",n).hide();h("option",this).each(function(q){var r=h('<li><a href="#" index="'+q+'">'+h(this).html()+"</a></li>");m.append(r)});m.find("a").click(function(){h("a.selected",n).removeClass("selected");h(this).addClass("selected");if(j[0].selectedIndex!=h(this).attr("index")&&j[0].onchange){j[0].selectedIndex=h(this).attr("index");j[0].onchange()}j[0].selectedIndex=h(this).attr("index");h("span:eq(0)",n).html(h(this).html());m.hide();return false});h("a:eq("+this.selectedIndex+")",m).click();h("span:first",n).click(function(){h("a.jqTransformSelectOpen",n).trigger("click")});l&&l.click(function(){h("a.jqTransformSelectOpen",n).trigger("click")});this.oLabel=l;var p=h("a.jqTransformSelectOpen",n).click(function(){if(m.css("display")=="none"){f()}if(j.attr("disabled")){return false}m.slideToggle("fast",function(){var q=(h("a.selected",m).offset().top-m.offset().top);m.animate({scrollTop:q})});return false});m.css({display:"block",visibility:"hidden"});var k=(h("li",m).length)*(h("li:first",m).height());(k<m.height())&&m.css({height:k,overflow:"hidden"});m.css({display:"none",visibility:"visible"})})};h.fn.jqTransform=function(k){var j=h.extend({},c,k);return this.each(function(){var l=h(this);if(l.hasClass("jqtransformdone")){return}l.addClass("jqtransformdone");h("input:text, input:password",this).jqTransInputText();h("input:checkbox",this).jqTransCheckBox();h("input:radio",this).jqTransRadio();h("textarea",this).jqTransTextarea();if(h("select",this).jqTransSelect().length>0){i()}l.bind("reset",function(){var m=function(){g(this)};window.setTimeout(m,10)})})}})(jQuery);