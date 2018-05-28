/*! p5.dom.js v0.2.13 Oct 1, 2016 */ !function(a,b){"function"==typeof define&&define.amd?define("p5.dom",["p5"],function(a){b(a)}):b("object"==typeof exports?require("../p5"):a.p5)}(this,function(a){function b(b){var c=document;return"string"==typeof b&&"#"===b[0]?(b=b.slice(1),c=document.getElementById(b)||document):b instanceof a.Element?c=b.elt:b instanceof HTMLElement&&(c=b),c}function c(b){if("INPUT"===b.tagName&&"checkbox"===b.type){var c=new a.Element(b);return c.checked=function(){return 0===arguments.length?this.elt.checked:(arguments[0]?this.elt.checked=!0:this.elt.checked=!1,this)},c}return"VIDEO"===b.tagName||"AUDIO"===b.tagName?new a.MediaElement(b):new a.Element(b)}function d(b,c,d){var e=c._userNode?c._userNode:document.body;e.appendChild(b);var f=d?new a.MediaElement(b):new a.Element(b);return c._elements.push(f),f}function e(a,b,c,e){var f=document.createElement(b),c=c||"";"string"==typeof c&&(c=[c]);for(var g=0;g<c.length;g++){var h=document.createElement("source");h.src=c[g],f.appendChild(h)}if("undefined"!=typeof e){var i=function(){e(),f.removeEventListener("canplaythrough",i)};f.addEventListener("canplaythrough",i)}var j=d(f,a,!0);return j.loadedmetadata=!1,f.addEventListener("loadedmetadata",function(){j.width=f.videoWidth,j.height=f.videoHeight,0===j.elt.width&&(j.elt.width=f.videoWidth),0===j.elt.height&&(j.elt.height=f.videoHeight),j.loadedmetadata=!0}),j}a.prototype.select=function(a,d){var e=null,f=b(d);return"."===a[0]?(a=a.slice(1),e=f.getElementsByClassName(a),e=e.length?e[0]:null):"#"===a[0]?(a=a.slice(1),e=f.getElementById(a)):(e=f.getElementsByTagName(a),e=e.length?e[0]:null),e?c(e):null},a.prototype.selectAll=function(a,d){var e,f=[],g=b(d);if("."===a[0]?(a=a.slice(1),e=g.getElementsByClassName(a)):e=g.getElementsByTagName(a),e)for(var h=0;h<e.length;h++){var i=c(e[h]);f.push(i)}return f},a.prototype.removeElements=function(a){for(var b=0;b<this._elements.length;b++)this._elements[b].elt instanceof HTMLCanvasElement||this._elements[b].remove()};var f=["div","p","span"];f.forEach(function(b){var c="create"+b.charAt(0).toUpperCase()+b.slice(1);a.prototype[c]=function(a){var c=document.createElement(b);return c.innerHTML=void 0===typeof a?"":a,d(c,this)}}),a.prototype.createImg=function(){var a,b=document.createElement("img"),c=arguments,e=function(){a.width=b.offsetWidth,a.height=b.offsetHeight,c.length>1&&"function"==typeof c[1]?(a.fn=c[1],a.fn()):c.length>1&&"function"==typeof c[2]&&(a.fn=c[2],a.fn())};return b.src=c[0],c.length>1&&"string"==typeof c[1]&&(b.alt=c[1]),b.onload=function(){e()},a=d(b,this)},a.prototype.createA=function(a,b,c){var e=document.createElement("a");return e.href=a,e.innerHTML=b,c&&(e.target=c),d(e,this)},a.prototype.createSlider=function(a,b,c,e){var f=document.createElement("input");return f.type="range",f.min=a,f.max=b,0===e?f.step=1e-18:e&&(f.step=e),"number"==typeof c&&(f.value=c),d(f,this)},a.prototype.createButton=function(a,b){var c=document.createElement("button");return c.innerHTML=a,c.value=b,b&&(c.value=b),d(c,this)},a.prototype.createCheckbox=function(){var a=document.createElement("div"),b=document.createElement("input");b.type="checkbox",a.appendChild(b);var c=d(a,this);if(c.checked=function(){var a=c.elt.getElementsByTagName("input")[0];if(a){if(0===arguments.length)return a.checked;arguments[0]?a.checked=!0:a.checked=!1}return c},this.value=function(a){return c.value=a,this},arguments[0]){var e=Math.random().toString(36).slice(2),f=document.createElement("label");b.setAttribute("id",e),f.htmlFor=e,c.value(arguments[0]),f.appendChild(document.createTextNode(arguments[0])),a.appendChild(f)}return arguments[1]&&(b.checked=!0),c},a.prototype.createSelect=function(a){var b=document.createElement("select");a&&b.setAttribute("multiple","true");var c=d(b,this);return c.option=function(a,c){var d=document.createElement("option");d.innerHTML=a,arguments.length>1?d.value=c:d.value=a,b.appendChild(d)},c.selected=function(b){var c=[];if(arguments.length>0){for(var d=0;d<this.elt.length;d++)b.toString()===this.elt[d].value&&(this.elt.selectedIndex=d);return this}if(a){for(var d=0;d<this.elt.selectedOptions.length;d++)c.push(this.elt.selectedOptions[d].value);return c}return this.elt.value},c},a.prototype.createRadio=function(){var a=document.querySelectorAll("input[type=radio]"),b=0;if(a.length>1){var c=a.length,e=a[0].name,f=a[1].name;b=1;for(var g=1;c>g;g++)f=a[g].name,e!=f&&b++,e=f}else 1==a.length&&(b=1);var h=document.createElement("div"),i=d(h,this),j=-1;return i.option=function(a,c){var d=document.createElement("input");if(d.type="radio",d.innerHTML=a,arguments.length>1?d.value=c:d.value=a,d.setAttribute("name","defaultradio"+b),h.appendChild(d),a){j++;var e=(Math.random().toString(36).slice(2),document.createElement("label"));d.setAttribute("id","defaultradio"+b+"-"+j),e.htmlFor="defaultradio"+b+"-"+j,e.appendChild(document.createTextNode(a)),h.appendChild(e)}return d},i.selected=function(){var a=this.elt.childNodes.length;if(1==arguments.length){for(var b=0;a>b;b+=2)this.elt.childNodes[b].value==arguments[0]&&(this.elt.childNodes[b].checked=!0);return this}for(var b=0;a>b;b+=2)if(1==this.elt.childNodes[b].checked)return this.elt.childNodes[b].value},i.value=function(){var a=this.elt.childNodes.length;if(1==arguments.length){for(var b=0;a>b;b+=2)this.elt.childNodes[b].value==arguments[0]&&(this.elt.childNodes[b].checked=!0);return this}for(var b=0;a>b;b+=2)if(1==this.elt.childNodes[b].checked)return this.elt.childNodes[b].value;return""},i},a.prototype.createInput=function(a){var b=document.createElement("input");return b.type="text",a&&(b.value=a),d(b,this)},a.prototype.createFileInput=function(b,c){function e(c){function d(c){var d=new a.File(c);return function(a){d.data=a.target.result,b(d)}}for(var e=c.target.files,f=0;f<e.length;f++){var g=e[f],h=new FileReader;h.onload=d(g),g.type.indexOf("text")>-1?h.readAsText(g):h.readAsDataURL(g)}}if(window.File&&window.FileReader&&window.FileList&&window.Blob){var f=document.createElement("input");return f.type="file",c&&(f.multiple="multiple"),f.addEventListener("change",e,!1),d(f,this)}console.log("The File APIs are not fully supported in this browser. Cannot create element.")},a.prototype.createVideo=function(a,b){return e(this,"video",a,b)},a.prototype.createAudio=function(a,b){return e(this,"audio",a,b)},a.prototype.VIDEO="video",a.prototype.AUDIO="audio",navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,a.prototype.createCapture=function(){for(var b,c,e=!0,f=!0,g=0;g<arguments.length;g++)arguments[g]===a.prototype.VIDEO?f=!1:arguments[g]===a.prototype.AUDIO?e=!1:"object"==typeof arguments[g]?b=arguments[g]:"function"==typeof arguments[g]&&(c=arguments[g]);if(!navigator.getUserMedia)throw"getUserMedia not supported in this browser";var h=document.createElement("video");b||(b={video:e,audio:f}),navigator.getUserMedia(b,function(a){h.src=window.URL.createObjectURL(a),c&&c(a)},function(a){console.log(a)});var i=d(h,this,!0);return i.loadedmetadata=!1,h.addEventListener("loadedmetadata",function(){h.play(),i.width=i.elt.width=h.videoWidth,i.height=i.elt.height=h.videoHeight,i.loadedmetadata=!0}),i},a.prototype.createElement=function(a,b){var c=document.createElement(a);return"undefined"!=typeof b&&(c.innerHTML=b),d(c,this)},a.Element.prototype.addClass=function(a){return this.elt.className?this.elt.className=this.elt.className+" "+a:this.elt.className=a,this},a.Element.prototype.removeClass=function(a){var b=new RegExp("(?:^|\\s)"+a+"(?!\\S)");return this.elt.className=this.elt.className.replace(b,""),this.elt.className=this.elt.className.replace(/^\s+|\s+$/g,""),this},a.Element.prototype.child=function(b){return null===b?this.elt.childNodes:("string"==typeof b?("#"===b[0]&&(b=b.substring(1)),b=document.getElementById(b)):b instanceof a.Element&&(b=b.elt),this.elt.appendChild(b),this)},a.Element.prototype.center=function(a){var b=this.elt.style.display,c="none"===this.elt.style.display,d="none"===this.parent().style.display,e={x:this.elt.offsetLeft,y:this.elt.offsetTop};c&&this.show(),this.elt.style.display="block",this.position(0,0),d&&(this.parent().style.display="block");var f=Math.abs(this.parent().offsetWidth-this.elt.offsetWidth),g=Math.abs(this.parent().offsetHeight-this.elt.offsetHeight),h=e.y,i=e.x;return"both"===a||void 0===a?this.position(f/2,g/2):"horizontal"===a?this.position(f/2,h):"vertical"===a&&this.position(i,g/2),this.style("display",b),c&&this.hide(),d&&(this.parent().style.display="none"),this},a.Element.prototype.html=function(a){return"undefined"!=typeof a?(this.elt.innerHTML=a,this):this.elt.innerHTML},a.Element.prototype.position=function(){return 0===arguments.length?{x:this.elt.offsetLeft,y:this.elt.offsetTop}:(this.elt.style.position="absolute",this.elt.style.left=arguments[0]+"px",this.elt.style.top=arguments[1]+"px",this.x=arguments[0],this.y=arguments[1],this)},a.Element.prototype._translate=function(){this.elt.style.position="absolute";var a="";return this.elt.style.transform&&(a=this.elt.style.transform.replace(/translate3d\(.*\)/g,""),a=a.replace(/translate[X-Z]?\(.*\)/g,"")),2===arguments.length?this.elt.style.transform="translate("+arguments[0]+"px, "+arguments[1]+"px)":arguments.length>2&&(this.elt.style.transform="translate3d("+arguments[0]+"px,"+arguments[1]+"px,"+arguments[2]+"px)",3===arguments.length?this.elt.parentElement.style.perspective="1000px":this.elt.parentElement.style.perspective=arguments[3]+"px"),this.elt.style.transform+=a,this},a.Element.prototype._rotate=function(){var a="";if(this.elt.style.transform){var a=this.elt.style.transform.replace(/rotate3d\(.*\)/g,"");a=a.replace(/rotate[X-Z]?\(.*\)/g,"")}return 1===arguments.length?this.elt.style.transform="rotate("+arguments[0]+"deg)":2===arguments.length?this.elt.style.transform="rotate("+arguments[0]+"deg, "+arguments[1]+"deg)":3===arguments.length&&(this.elt.style.transform="rotateX("+arguments[0]+"deg)",this.elt.style.transform+="rotateY("+arguments[1]+"deg)",this.elt.style.transform+="rotateZ("+arguments[2]+"deg)"),this.elt.style.transform+=a,this},a.Element.prototype.style=function(b,c){var d=this;if(c instanceof a.Color&&(c="rgba("+c.levels[0]+","+c.levels[1]+","+c.levels[2]+","+c.levels[3]/255+")"),"undefined"==typeof c){if(-1===b.indexOf(":")){var e=window.getComputedStyle(d.elt),f=e.getPropertyValue(b);return f}for(var g=b.split(";"),h=0;h<g.length;h++){var i=g[h].split(":");i[0]&&i[1]&&(this.elt.style[i[0].trim()]=i[1].trim())}}else if("rotate"===b||"translate"===b||"position"===b){var j=Array.prototype.shift.apply(arguments),k=this[j]||this["_"+j];k.apply(this,arguments)}else if(this.elt.style[b]=c,"width"===b||"height"===b||"left"===b||"top"===b){var l=c.replace(/\D+/g,"");this[b]=parseInt(l,10)}return this},a.Element.prototype.attribute=function(a,b){return"undefined"==typeof b?this.elt.getAttribute(a):(this.elt.setAttribute(a,b),this)},a.Element.prototype.removeAttribute=function(a){return this.elt.removeAttribute(a),this},a.Element.prototype.value=function(){return arguments.length>0?(this.elt.value=arguments[0],this):"range"===this.elt.type?parseFloat(this.elt.value):this.elt.value},a.Element.prototype.show=function(){return this.elt.style.display="block",this},a.Element.prototype.hide=function(){return this.elt.style.display="none",this},a.Element.prototype.size=function(b,c){if(0===arguments.length)return{width:this.elt.offsetWidth,height:this.elt.offsetHeight};var d=b,e=c,f=a.prototype.AUTO;if(d!==f||e!==f){if(d===f?d=c*this.width/this.height:e===f&&(e=b*this.height/this.width),this.elt instanceof HTMLCanvasElement){var g={},h=this.elt.getContext("2d");for(var i in h)g[i]=h[i];this.elt.setAttribute("width",d*this._pInst._pixelDensity),this.elt.setAttribute("height",e*this._pInst._pixelDensity),this.elt.setAttribute("style","width:"+d+"px; height:"+e+"px"),this._pInst.scale(this._pInst._pixelDensity,this._pInst._pixelDensity);for(var i in g)this.elt.getContext("2d")[i]=g[i]}else this.elt.style.width=d+"px",this.elt.style.height=e+"px",this.elt.width=d,this.elt.height=e,this.width=d,this.height=e;this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight,this._pInst&&this._pInst._curElement.elt===this.elt&&(this._pInst._setProperty("width",this.elt.offsetWidth),this._pInst._setProperty("height",this.elt.offsetHeight))}return this},a.Element.prototype.remove=function(){for(var a in this._events)this.elt.removeEventListener(a,this._events[a]);this.elt.parentNode&&this.elt.parentNode.removeChild(this.elt),delete this},a.MediaElement=function(b,c){a.Element.call(this,b,c);var d=this;this.elt.crossOrigin="anonymous",this._prevTime=0,this._cueIDCounter=0,this._cues=[],this._pixelDensity=1,Object.defineProperty(d,"src",{get:function(){var a=d.elt.children[0].src,b=d.elt.src===window.location.href?"":d.elt.src,c=a===window.location.href?b:a;return c},set:function(a){for(var c=0;c<d.elt.children.length;c++)d.elt.removeChild(d.elt.children[c]);var e=document.createElement("source");e.src=a,b.appendChild(e),d.elt.src=a}}),d._onended=function(){},d.elt.onended=function(){d._onended(d)}},a.MediaElement.prototype=Object.create(a.Element.prototype),a.MediaElement.prototype.play=function(){return this.elt.currentTime===this.elt.duration&&(this.elt.currentTime=0),this.elt.readyState>1?this.elt.play():(this.elt.load(),this.elt.play()),this},a.MediaElement.prototype.stop=function(){return this.elt.pause(),this.elt.currentTime=0,this},a.MediaElement.prototype.pause=function(){return this.elt.pause(),this},a.MediaElement.prototype.loop=function(){return this.elt.setAttribute("loop",!0),this.play(),this},a.MediaElement.prototype.noLoop=function(){return this.elt.setAttribute("loop",!1),this},a.MediaElement.prototype.autoplay=function(a){return this.elt.setAttribute("autoplay",a),this},a.MediaElement.prototype.volume=function(a){return"undefined"==typeof a?this.elt.volume:void(this.elt.volume=a)},a.MediaElement.prototype.speed=function(a){return"undefined"==typeof a?this.elt.playbackRate:void(this.elt.playbackRate=a)},a.MediaElement.prototype.time=function(a){return"undefined"==typeof a?this.elt.currentTime:void(this.elt.currentTime=a)},a.MediaElement.prototype.duration=function(){return this.elt.duration},a.MediaElement.prototype.pixels=[],a.MediaElement.prototype.loadPixels=function(){return this.canvas||(this.canvas=document.createElement("canvas"),this.drawingContext=this.canvas.getContext("2d")),this.loadedmetadata&&(this.canvas.width!==this.elt.width&&(this.canvas.width=this.elt.width,this.canvas.height=this.elt.height,this.width=this.canvas.width,this.height=this.canvas.height),this.drawingContext.drawImage(this.elt,0,0,this.canvas.width,this.canvas.height),a.Renderer2D.prototype.loadPixels.call(this)),this},a.MediaElement.prototype.updatePixels=function(b,c,d,e){return this.loadedmetadata&&a.Renderer2D.prototype.updatePixels.call(this,b,c,d,e),this},a.MediaElement.prototype.get=function(b,c,d,e){return this.loadedmetadata?a.Renderer2D.prototype.get.call(this,b,c,d,e):b?[0,0,0,255]:new a.Image(1,1)},a.MediaElement.prototype.set=function(b,c,d){this.loadedmetadata&&a.Renderer2D.prototype.set.call(this,b,c,d)},a.MediaElement.prototype.copy=function(){a.Renderer2D.prototype.copy.apply(this,arguments)},a.MediaElement.prototype.mask=function(){this.loadPixels(),a.Image.prototype.mask.apply(this,arguments)},a.MediaElement.prototype.onended=function(a){return this._onended=a,this},a.MediaElement.prototype.connect=function(b){var c,d;if("function"==typeof a.prototype.getAudioContext)c=a.prototype.getAudioContext(),d=a.soundOut.input;else try{c=b.context,d=c.destination}catch(e){throw"connect() is meant to be used with Web Audio API or p5.sound.js"}this.audioSourceNode||(this.audioSourceNode=c.createMediaElementSource(this.elt),this.audioSourceNode.connect(d)),b?b.input?this.audioSourceNode.connect(b.input):this.audioSourceNode.connect(b):this.audioSourceNode.connect(d)},a.MediaElement.prototype.disconnect=function(){if(!this.audioSourceNode)throw"nothing to disconnect";this.audioSourceNode.disconnect()},a.MediaElement.prototype.showControls=function(){this.elt.style["text-align"]="inherit",this.elt.controls=!0},a.MediaElement.prototype.hideControls=function(){this.elt.controls=!1},a.MediaElement.prototype.addCue=function(a,b,c){var d=this._cueIDCounter++,e=new g(b,a,d,c);return this._cues.push(e),this.elt.ontimeupdate||(this.elt.ontimeupdate=this._onTimeUpdate.bind(this)),d},a.MediaElement.prototype.removeCue=function(a){for(var b=0;b<this._cues.length;b++){var c=this._cues[b];c.id===a&&this.cues.splice(b,1)}0===this._cues.length&&(this.elt.ontimeupdate=null)},a.MediaElement.prototype.clearCues=function(){this._cues=[],this.elt.ontimeupdate=null},a.MediaElement.prototype._onTimeUpdate=function(){for(var a=this.time(),b=0;b<this._cues.length;b++){var c=this._cues[b].time,d=this._cues[b].val;this._prevTime<c&&a>=c&&this._cues[b].callback(d)}this._prevTime=a};var g=function(a,b,c,d){this.callback=a,this.time=b,this.id=c,this.val=d};a.File=function(a,b){this.file=a,this._pInst=b;var c=a.type.split("/");this.type=c[0],this.subtype=c[1],this.name=a.name,this.size=a.size,this.data=void 0}});