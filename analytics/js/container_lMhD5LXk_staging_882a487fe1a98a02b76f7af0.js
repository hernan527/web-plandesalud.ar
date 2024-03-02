/*!!
 * Matomo - free/libre analytics platform
 *
 * Matomo Tag Manager
 *
 * @link https://matomo.org
 * @source https://github.com/matomo-org/tag-manager/blob/master/js/piwik.js
 * @license https://matomo.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 */
(function(){var b=document;var a=window;
/*!!! previewModeHook */
;if(typeof window.MatomoTagManager!=="object"){if(typeof window._mtm!=="object"){window._mtm=[]}window.MatomoTagManager=(function(){var k=new Date().getTime();function j(){if(window.mtmPreviewWindow&&"object"===typeof window.mtmPreviewWindow.mtmLogs){var G=new Date();var I=[];for(var H=0;H<arguments.length;H++){I.push(JSON.stringify(arguments[H],function(i,J){if(typeof J==="object"&&J instanceof Node){return J.nodeName}else{return J}}))}window.mtmPreviewWindow.mtmLogs.push({time:G.toLocaleTimeString()+"."+G.getMilliseconds(),messages:I})}}function d(G){if(window.mtmPreviewWindow&&"object"===typeof window.mtmPreviewWindow.mtmEvents&&G){var i=new Date();G.time=i.toLocaleTimeString()+"."+i.getMilliseconds();
window.mtmPreviewWindow.mtmEvents.push(G)}}var y={enabled:!!window.mtmPreviewWindow,log:function(){j.apply(a,arguments);if(this.enabled&&"undefined"!==typeof console&&console&&console.debug){console.debug.apply(console,arguments)}},error:function(){j.apply(a,arguments);if("undefined"!==typeof console&&console&&console.error){console.error.apply(console,arguments)}}};function C(i){y.error(i);if(typeof l!=="object"||l.THROW_ERRORS){throw new Error(i)}}function u(H,J){if(B.isString(H)&&H.indexOf(".")!==-1){var I=H.split(".");var G;for(G=0;G<I.length;G++){if(I[G] in J){J=J[I[G]]}else{return}}return J}}function F(K){var J="mtm:";var G={};function I(N){return K in a&&B.isObject(a[K])}function M(N){return I()&&B.isFunction(a[K][N])}function L(P,N){if(M("setItem")){try{a[K].setItem(J+P,JSON.stringify(N))}catch(O){}}else{G[P]=N}}function H(P){if(M("getItem")){try{var N=a[K].getItem(J+P);if(N){N=JSON.parse(N);if(B.isObject(N)){return N}}}catch(O){}return{}}else{if(P in G){return G[P]}}}function i(O){if(M("removeItem")){try{a[K].removeItem(J+O)
}catch(N){}}else{if(O in G){delete G[O]}}}this.set=function(R,O,S,N){var P=null;if(N){P=(new Date().getTime())+(parseInt(N,10)*1000)}var Q=H(R);Q[O]={value:S,expire:P};L(R,Q)};this.get=function(P,N){var O=H(P);if(O&&N in O&&"value" in O[N]){if(O[N].expire&&O[N].expire<(new Date().getTime())){delete O[N];L(P);return}return O[N].value}};this.clearAll=function(){G={};if(I()&&B.isFunction(Object.keys)){var N=Object.keys(a[K]);if(N){for(var O=0;O<N.length;O++){if(String(N[O]).substr(0,J.length)===J){i(String(N[O]).substr(J.length))}}}}}}var x=new F("localStorage");var e=new F("sessionStorage");var B={_compare:function(J,G,I){var H=["equals","starts_with","contains","ends_with"];if(this.indexOfArray(H,I)!==-1){J=String(J).toLowerCase();G=String(G).toLowerCase()}switch(I){case"equals":return String(J)===String(G);case"equals_exactly":return String(J)===String(G);case"regexp":return null!==(String(J).match(new RegExp(G)));case"regexp_ignore_case":return null!==(String(J).match(new RegExp(G,"i")));
case"lower_than":return J<G;case"lower_than_or_equals":return J<=G;case"greater_than":return J>G;case"greater_than_or_equals":return J>=G;case"contains":return String(J).indexOf(G)!==-1;case"match_css_selector":if(!G||!J){return false}var i=A.bySelector(G);return B.indexOfArray(i,J)!==-1;case"starts_with":return String(J).indexOf(G)===0;case"ends_with":return String(J).substring(J.length-G.length,J.length)===G}return false},compare:function(J,G,H){var I=String(H).indexOf("not_")===0;if(I){H=String(H).substr("not_".length)}var i=this._compare(J,G,H);if(I){return !i}return i},trim:function(i){if(i&&String(i)===i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}return i},isDefined:function(G){var i=typeof G;return i!=="undefined"},isFunction:function(i){return typeof i==="function"},isObject:function(i){return typeof i==="object"&&i!==null},isString:function(i){return typeof i==="string"},isNumber:function(i){return typeof i==="number"},isArray:function(G){if(!B.isObject(G)){return false
}if("function"===typeof Array.isArray&&Array.isArray){return Array.isArray(G)}var H=Object.prototype.toString;var i=H.call([]);return H.call(G)===i},hasProperty:function(i,G){return Object.prototype.hasOwnProperty.call(i,G)},indexOfArray:function(I,H){if(!I){return -1}if("function"===typeof I.indexOf&&I.indexOf){return I.indexOf(H)}if(!this.isArray(I)){return -1}for(var G=0;G<I.length;G++){if(I[G]===H){return G}}return -1},setMethodWrapIfNeeded:function(G,H,J){if(!(H in G)){G[H]=J;return}var I=G[H];if(!l.utils.isFunction(I)){G[H]=J;return}try{G[H]=function(){try{var K=I.apply(G,[].slice.call(arguments,0))}catch(L){J.apply(G,[].slice.call(arguments,0));throw L}J.apply(G,[].slice.call(arguments,0));return K}}catch(i){}}};var t=function(){this.values={};this.events=[];this.callbacks=[];this.reset=function(){this.values={};this.events=[];this.callbacks=[]};this.push=function(H){if(!B.isObject(H)){y.log("pushed dataLayer value is not an object",H);return}this.events.push(H);var G;for(G in H){if(B.hasProperty(H,G)){this.set(G,H[G])
}}for(G=0;G<this.callbacks.length;G++){if(this.callbacks[G]){this.callbacks[G](H)}}};this.on=function(i){this.callbacks.push(i);return this.callbacks.length-1};this.off=function(i){if(i in this.callbacks){this.callbacks[i]=null}};this.set=function(i,G){this.values[i]=G};this.getAllEvents=function(i){return this.events};this.get=function(i){if(i in this.values){if(B.isFunction(this.values[i])){return this.values[i]()}else{if(B.isObject(this.values[i])&&B.isFunction(this.values[i].get)){return this.values[i].get()}}return this.values[i]}var G=u(i,this.values);if(B.isDefined(G)){return G}}};var p=new t();var E={matchesDateRange:function(H,G,I){var J=Date.UTC(H.getUTCFullYear(),H.getUTCMonth(),H.getUTCDate(),H.getUTCHours(),H.getUTCMinutes(),H.getUTCSeconds());if(G){G=String(G).replace(/-/g,"/")}if(I){I=String(I).replace(/-/g,"/")}var L,i;try{L=this.convertStringToDate(G)}catch(K){if(G){C("Invalid startDateTime given")}}try{i=this.convertStringToDate(I)}catch(K){if(I){C("Invalid endDateTime given")
}}if(G&&isNaN&&isNaN(L.getTime())){C("Invalid startDateTime given")}if(I&&isNaN&&isNaN(i.getTime())){C("Invalid endDateTime given")}if(G&&J<L.getTime()){return false}if(I&&J>i.getTime()){return false}return true},convertStringToDate:function(i){var G=(i&&i.split(" ").length>2);i=i+(i&&i.toLowerCase()!=="invalid date"&&!G?" UTC":"");return new Date(i)}};var r={parseUrl:function(i,J){try{var K=document.createElement("a");K.href=i;var G=K.href;K=document.createElement("a");K.href=G;if(J&&J in K){if("hash"===J){return String(K[J]).replace("#","")}else{if("protocol"===J){return String(K[J]).replace(":","")}else{if("search"===J){return String(K[J]).replace("?","")}else{if("port"===J&&!K[J]){if(K.protocol==="https:"){return"443"}else{if(K.protocol==="http:"){return"80"}}}}}}if("pathname"===J&&K[J]&&String(K[J]).substr(0,1)!=="/"){return"/"+K[J]}if("port"===J&&K[J]){return String(K[J])}return K[J]}if("origin"===J&&"protocol" in K&&K.protocol){return K.protocol+"//"+K.hostname+(K.port?":"+K.port:"")
}return}catch(I){if("function"===typeof URL){var H=new URL(i);if(J&&J in H){if("hash"===J){return String(H[J]).replace("#","")}else{if("protocol"===J){return String(H[J]).replace(":","")}else{if("search"===J){return String(H[J]).replace("?","")}else{if("port"===J&&!H[J]){if(H.protocol==="https:"){return"443"}else{if(H.protocol==="http:"){return"80"}}}}}}return H[J]}return}}},decodeSafe:function(G){try{return a.decodeURIComponent(G)}catch(i){return a.unescape(G)}},getQueryParameter:function(K,G){if(!B.isDefined(G)){G=a.location.search}if(!G||!B.isDefined(K)||K===null||K===false||K===""){return null}var i=G.substr(0,1);if(G!=="?"&&G!=="&"){G="?"+G}K=K.replace("[","\\[");K=K.replace("]","\\]");var J=new RegExp("[?&]"+K+"(=([^&#]*)|&|#|$)");var I=J.exec(G);if(!I){return null}if(!I[2]){return""}var H=I[2].replace(/\+/g," ");return this.decodeSafe(H)}};var c;var D={hasSetupScroll:false,scrollCallbacks:[],scrollListenEvents:["scroll","resize"],offScroll:function(G){if(G in this.scrollCallbacks){this.scrollCallbacks[G]=null
}var I=0,H=0;for(I in this.scrollCallbacks){if(this.scrollCallbacks[I]){H++}}if(!H){for(I=0;I<this.scrollListenEvents.length;I++){if(b.removeEventListener){a.removeEventListener(this.scrollListenEvents[I],this.didScroll,true)}else{a.detachEvent("on"+this.scrollListenEvents[I],this.didScroll)}}this.hasSetupScroll=false}},didScroll:function(i){if(c){return}if(i&&i.type&&i.type==="scroll"&&i.target&&i.target!==b&&i.target!==a){return}c=setTimeout(function(){c=null;var G;for(G=0;G<D.scrollCallbacks.length;G++){if(D.scrollCallbacks[G]){D.scrollCallbacks[G](i)}}},120)},onScroll:function(G){this.scrollCallbacks.push(G);if(!this.hasSetupScroll){this.hasSetupScroll=true;var i=0;for(i=0;i<this.scrollListenEvents.length;i++){if(b.addEventListener){a.addEventListener(this.scrollListenEvents[i],this.didScroll,true)}else{a.attachEvent("on"+this.scrollListenEvents[i],this.didScroll)}}}return this.scrollCallbacks.length-1},getScreenHeight:function(){return a.screen.height},getScreenWidth:function(){return a.screen.width
},getViewportWidth:function(){var i=a.innerWidth||b.documentElement.clientWidth||b.body.clientWidth;if(!i){return 0}return i},getViewportHeight:function(){var i=a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight;if(!i){return 0}return i},getPerformanceTiming:function(i){if("performance" in a&&B.isObject(a.performance)&&B.isObject(a.performance.timing)&&i in a.performance.timing){return a.performance.timing[i]}return 0}};var A={loadScriptUrl:function(H,G){if(!G){G={}}if(!B.isDefined(G.defer)){G.defer=true}if(!B.isDefined(G.async)){G.async=true}if(!B.isDefined(G.type)){G.type="text/javascript"}var i=document.createElement("script");i.src=H;i.type=G.type;i.defer=!!G.defer;i.async=!!G.async;if(B.isFunction(G.onload)){i.onload=G.onload}if(B.isFunction(G.onerror)){i.onerror=G.onerror}if(B.isDefined(G.charset)){i.charset=G.charset}if(B.isDefined(G.id)){i.id=G.id}b.head.appendChild(i)},getScrollLeft:function(){return a.document.body.scrollLeft||a.document.documentElement.scrollLeft
},getScrollTop:function(){return a.document.body.scrollTop||a.document.documentElement.scrollTop},getDocumentHeight:function(){return Math.max(b.body.offsetHeight,b.body.scrollHeight,b.documentElement.offsetHeight,b.documentElement.clientHeight,b.documentElement.scrollHeight,1)},getDocumentWidth:function(){return Math.max(b.body.offsetWidth,b.body.scrollWidth,b.documentElement.offsetWidth,b.documentElement.clientWidth,b.documentElement.scrollWidth,1)},addEventListener:function(I,H,G,i){if(!I){y.log("element not found, cannot add event listener",I,this);return}if(I.addEventListener){i=i||false;I.addEventListener(H,G,i);return true}if(I.attachEvent){return I.attachEvent("on"+H,G)}I["on"+H]=G},getElementText:function(G){if(!G){return}if(l.dom.shouldElementBeMasked(G)&&G.children.length===0){return"*******"}if(l.dom.elementHasMaskedChild(G)){return l.dom.getElementTextWithMaskedChildren(G)}var i=G.innerText||G.textContent||"";i=i.replace(/([\s\uFEFF\xA0])+/g," ");i=i.replace(/(\s)+/g," ");return B.trim(i)
},getElementClassNames:function(i){if(i&&i.className){return B.trim(String(i.className).replace(/\s{2,}/g," "))}return""},getElementAttribute:function(I,G){if(!I||!G){return}var i=G.toLowerCase();if((i==="value"||i==="title"||i==="alt"||i==="label"||i==="placeholder")&&l.dom.shouldElementBeMasked(I)){return"*******"}if(I&&I.getAttribute){return I.getAttribute(G)}if(!I||!I.attributes){return}var H=(typeof I.attributes[G]);if("undefined"===H){return null}if(I.attributes[G].value){return I.attributes[G].value}if(I.attributes[G].nodeValue){return I.attributes[G].nodeValue}return null},_htmlCollectionToArray:function(H){var i=[];if(!H||!H.length){return i}var G;for(G=0;G<H.length;G++){i.push(H[G])}return i},byId:function(i){if(B.isString(i)&&i.substr(0,1)==="#"){i=i.substr(1)}return b.getElementById(i)},byClassName:function(i){if(i&&"getElementsByClassName" in b){return this._htmlCollectionToArray(b.getElementsByClassName(i))}return[]},byTagName:function(i){if(i&&"getElementsByTagName" in b){return this._htmlCollectionToArray(b.getElementsByTagName(i))
}return[]},bySelector:function(i){if(i&&"querySelectorAll" in b){return this._htmlCollectionToArray(b.querySelectorAll(i))}return[]},isElementContext:function(I,i){if(!I||!i){return false}I=String(I).toLowerCase();i=String(i).toLowerCase();var H=I.lastIndexOf("<"+i);if(H===-1){return false}var G=I.substring(H);return !G.match(new RegExp("<\\s*/\\s*"+i+">"))},isAttributeContext:function(M,K){if(!M||!K){return false}M=String(M).replace(/([\s\uFEFF\xA0]*=[\s\uFEFF\xA0]*)/g,"=");var H=M.lastIndexOf("<");if(H===-1){return false}var O=M.substring(H);var G=O.indexOf(">");if(G!==-1){return false}var N=O.lastIndexOf("=");if(N===-1){return false}var J=O.lastIndexOf(" ",N);var L=O.substring(J,N);L=B.trim(L);if(L.toLowerCase()!==K.toLowerCase()){return false}var I=O.substring(N).replace("=","");var i=I.substring(0,1);if('"'===i){return -1===I.substring(1).indexOf('"')}else{if("'"===i){return -1===I.substring(1).indexOf("'")}}return -1===I.indexOf(" ")},onLoad:function(i){if(b.readyState==="complete"){i()
}else{if(a.addEventListener){a.addEventListener("load",i)}else{if(a.attachEvent){a.attachEvent("onload",i)}}}},onReady:function(H){var i=false;if(b.attachEvent){i=b.readyState==="complete"}else{i=b.readyState!=="loading"}if(i){H();return}if(b.addEventListener){this.addEventListener(b,"DOMContentLoaded",function G(){b.removeEventListener("DOMContentLoaded",G,false);if(!i){i=true;H()}})}else{if(b.attachEvent){b.attachEvent("onreadystatechange",function G(){if(b.readyState==="complete"){b.detachEvent("onreadystatechange",G);if(!i){i=true;H()}}})}}this.onLoad(function(){if(!i){i=true;H()}})},onClick:function(G,i){if(typeof i==="undefined"){i=b.body}l.dom.addEventListener(i,"click",function(H){var I=(H.which?H.which:1);if(I===1){G(H,"left")}},true);l.dom.addEventListener(i,"auxclick",function(H){var I=(H.which?H.which:2);if(I===2){G(H,"middle")}},true);l.dom.addEventListener(i,"contextmenu",function(H){var I=(H.which?H.which:3);if(I===3){G(H,"right")}},true)},shouldElementBeMasked:function(G){if(typeof G==="undefined"){return false
}if(G.hasAttribute("data-matomo-mask")||G.hasAttribute("data-piwik-mask")){return true}if(G.hasAttribute("data-matomo-unmask")||G.hasAttribute("data-piwik-unmask")){return false}var i=G.parentElement;while(i){if(i.hasAttribute("data-matomo-mask")||i.hasAttribute("data-piwik-mask")){return true}if(i.hasAttribute("data-matomo-unmask")||i.hasAttribute("data-piwik-unmask")){return false}i=i.parentElement}return false},elementHasMaskedChild:function(i){if(typeof i==="undefined"){return false}if(i.children.length===0){return false}if(i.hasAttribute("data-matomo-mask")||i.hasAttribute("data-piwik-mask")||l.dom.shouldElementBeMasked(i)){return true}return i.querySelector("[data-matomo-mask],[data-piwik-mask]")!==null},getElementTextWithMaskedChildren:function(H){var K="";var J=H.children;for(var G=0;G<J.length;G++){var I=J[G];K+=l.dom.getElementText(I)+" "}return B.trim(K)}};function w(H){this.window=a;this.document=b;this.set=function(i,I){this[i]=I};this.get=function(I,i){if(I===null||I===false||!B.isDefined(I)){return i
}if(I in this){if(B.isObject(this[I])&&"get" in this[I]&&B.isFunction(this[I].get)){return this[I].get()}return this[I]}var J=u(I,this);if(B.isDefined(J)){return J}return i};this.buildVariable=function(i){return o(i,this.get("container"))};if(B.isObject(H)){for(var G in H){if(B.hasProperty(H,G)){this.set(G,H[G])}}}}function z(G,i){this.isValid=function(){var I=o(G.actual,i).get();var H=o(G.expected,i).get();return B.compare(I,H,G.comparison)}}function o(G,i){if(B.isObject(G)&&G.joinedVariable&&B.isArray(G.joinedVariable)){return new q(G.joinedVariable,i)}else{if(B.isObject(G)&&G.type){return new s(G,i)}}return new m(G,i)}function q(G,i){this.name="";this.type="JoinedVariable";this.getDefinition=function(){return G};this.get=function(){var I="",J;for(var H=0;H<G.length;H++){J=o(G[H],i).toString();if(J!==false&&J!==null&&B.isDefined(J)){I+=J}}return I};this.toString=function(){return this.get()};this.addDebugValues=function(H){H.push({name:null,type:"_joined",value:this.get()})}}function m(I,G){this.name="";
this.type="ConstantVariable";this.getDefinition=function(){return I};function H(K){return K&&B.isObject(K)&&!B.isArray(K)&&(B.hasProperty(K,"type")||B.hasProperty(K,"joinedVariable"))}function J(M){if(M==null||typeof M!=="object"){return M}var K=new M.constructor();var L;for(L in M){if(B.hasProperty(M,L)){K[L]=J(M[L])}}return K}function i(L){var K;if(H(L)){L=o(L,G).get()}else{if(L&&B.isArray(L)){for(K=0;K<L.length;K++){L[K]=i(L[K])}}else{if(L&&B.isObject(L)){for(K in L){if(B.hasProperty(L,K)){L[K]=i(L[K])}}}}}return L}this.get=function(){var K=I;if(B.isObject(K)){K=J(K);K=i(K)}return K};this.toString=function(){return I};this.addDebugValues=function(K){K.push({name:null,type:"_constant",value:this.get()})}}function s(H,G){this.type=H.type;this.name=H.name;this.lookUpTable=H.lookUpTable||[];this.defaultValue=undefined;this.parameters=H.parameters||{};this.getDefinition=function(){return H};this.get=function(){var L;try{L=this.theVariable.get()}catch(M){y.error("Failed to get value of variable",M,this);
L=undefined}if((!B.isDefined(L)||L===null||L===false)&&B.isDefined(this.defaultValue)){L=this.defaultValue}var K;for(K=0;K<this.lookUpTable.length;K++){var N=this.lookUpTable[K];if(B.compare(L,N.matchValue,N.comparison)){return N.outValue}}return L};this.toString=function(){if(this.theVariable&&B.hasProperty(this.theVariable,"toString")&&B.isFunction(this.theVariable.toString)){try{return this.theVariable.toString()}catch(i){y.error("Failed to get toString of variable",i,this);return}}return this.get()};this.addDebugValues=function(i){i.push({name:this.name,type:this.type,value:this.get()})};if("undefined"!==typeof H.defaultValue){this.defaultValue=H.defaultValue}if(!B.isDefined(H.Variable)||!H.Variable){y.log("no template defined for variable ",H);return}var I,J=new w({variable:this,container:G});if(B.isObject(H.parameters)){for(I in H.parameters){if(B.hasProperty(H.parameters,I)){J.set(I,o(H.parameters[I],G))}}}if(B.isFunction(H.Variable)){this.theVariable=new H.Variable(J,l)}else{if(B.isObject(H.Variable)){this.theVariable=H.Variable
}else{if(H.Variable in G.templates){this.theVariable=new G.templates[H.Variable](J,l)}else{C("No matching variable template found")}}}}function f(I,G){this.referencedTags=[];this.id=I.id;this.type=I.type;this.name=I.name;this.conditions=[];this.parameters=I.parameters||{};var H=this;this.getId=function(){return this.id};this.setUp=function(){if(this.theTrigger&&this.theTrigger.setUp&&B.isFunction(this.theTrigger.setUp)){this.theTrigger.setUp(function(P){p.push(P);if(!("event" in P)){return}var L={tags:[],variables:[],metTrigger:null,name:P.event,eventData:P,container:{}};var O,N;if(H.meetsConditions()){y.log("The condition is met for trigger "+H.name,H);L.metTrigger={name:H.name,type:H.type};var M=H.getReferencedTags();for(N=0;N<M.length;N++){if(M[N].hasBlockTrigger(H)){M[N].block();M[N].addDebugValues(L.tags,"Block")}else{if(M[N].hasFireTrigger(H)){M[N].fire();M[N].addDebugValues(L.tags,"Fire")}}}}if(window.mtmPreviewWindow||y.enabled){G.addDebugValues(L.container);d(L);if(y.enabled){y.log("event: ",L)
}}})}};this.addReferencedTag=function(i){this.referencedTags.push(i)};this.getReferencedTags=function(){return this.referencedTags};this.meetsConditions=function(){var L,M;for(L=0;L<this.conditions.length;L++){M=new z(this.conditions[L],G);if(!M.isValid()){return false}}return true};if(I.conditions&&B.isArray(I.conditions)){this.conditions=I.conditions}var J,K=new w({trigger:this,container:G});if(B.isObject(I.parameters)){for(J in I.parameters){if(B.hasProperty(I.parameters,J)){K.set(J,o(I.parameters[J],G))}}}if(!B.isDefined(I.Trigger)||!I.Trigger){y.error("no template defined for trigger ",I);return}if(B.isFunction(I.Trigger)){this.theTrigger=new I.Trigger(K,l)}else{if(B.isObject(I.Trigger)){this.theTrigger=I.Trigger}else{if(I.Trigger in G.templates){this.theTrigger=new G.templates[I.Trigger](K,l)}else{C("No matching trigger template found")}}}K=null}function h(G,H){this.type=G.type;this.name=G.name;this.fireTriggerIds=G.fireTriggerIds?G.fireTriggerIds:[];this.blockTriggerIds=G.blockTriggerIds?G.blockTriggerIds:[];
this.fireLimit=G.fireLimit?G.fireLimit:h.FIRE_LIMIT_UNLIMITED;this.fireDelay=G.fireDelay?parseInt(G.fireDelay,10):0;this.startDate=G.startDate?G.startDate:null;this.endDate=G.endDate?G.endDate:null;this.numExecuted=0;this.blocked=false;this.parameters=G.parameters||{};var I=this;this.addDebugValues=function(i,L){i.push({action:L,type:this.type,name:this.name,numExecuted:this.numExecuted})};this._doFire=function(){if(this.blocked){y.log("not firing as this tag is blocked",this);return"tag is blocked"}if(this.fireLimit!==h.FIRE_LIMIT_UNLIMITED&&this.numExecuted){y.log("not firing as this tag has limit reached",this);return"fire limit is restricted"}var L="tag";if(H.id){L+="_"+H.id}if(this.fireLimit===h.FIRE_LIMIT_ONCE_24HOURS&&!window.mtmPreviewWindow){if(x.get(L,this.name)){y.log("not firing as this tag has 24hours limit reached",this);return"fire limit 24hours is restricted"}}if(this.fireLimit===h.FIRE_LIMIT_ONCE_LIFETIME&&!window.mtmPreviewWindow){if(x.get(L,this.name)){y.log("not firing as this tag has limit reached",this);
return"fire limit lifetime is restricted"}}if(!E.matchesDateRange(new Date(),this.startDate,this.endDate)){y.log("not firing as this tag does not match date",this);return"date range does not match"}if(!this.theTag||!this.theTag.fire){y.log("not firing as tag does not exist anymore",this);return"tag not found"}y.log("firing this tag",this);this.numExecuted++;if(this.fireLimit===h.FIRE_LIMIT_ONCE_24HOURS){var i=24*60*60;x.set(L,this.name,"1",i)}if(this.fireLimit===h.FIRE_LIMIT_ONCE_LIFETIME){x.set(L,this.name,"1")}this.theTag.fire();y.log("fired this tag",this)};this.fire=function(){if(this.fireDelay){setTimeout(function(){I._doFire()},this.fireDelay)}else{return this._doFire()}};this.block=function(){this.blocked=true};this.hasFireTrigger=function(i){if(!this.fireTriggerIds||!this.fireTriggerIds.length){return false}if(!i){return false}var L=i.getId();return B.indexOfArray(this.fireTriggerIds,L)!==-1};this.hasBlockTrigger=function(i){if(!this.blockTriggerIds||!this.blockTriggerIds.length){return false
}if(!i){return false}var L=i.getId();return B.indexOfArray(this.blockTriggerIds,L)!==-1};if(!B.isDefined(G.Tag)||!G.Tag){y.error("no template defined for tag ",G);return}var J,K=new w({tag:this,container:H});if(B.isObject(G.parameters)){for(J in G.parameters){if(B.hasProperty(G.parameters,J)){K.set(J,o(G.parameters[J],H))}}}if(B.isFunction(G.Tag)){this.theTag=new G.Tag(K,l)}else{if(B.isObject(G.Tag)){this.theTag=G.Tag}else{if(G.Tag in H.templates){this.theTag=new H.templates[G.Tag](K,l)}else{C("No matching tag template found")}}}}h.FIRE_LIMIT_ONCE_PAGE="once_page";h.FIRE_LIMIT_ONCE_24HOURS="once_24hours";h.FIRE_LIMIT_ONCE_LIFETIME="once_lifetime";h.FIRE_LIMIT_UNLIMITED="unlimited";function n(H,M){var I=this;this.id=H.id;this.idsite=H.idsite||null;this.versionName=H.versionName||null;this.revision=H.revision||null;this.environment=H.environment||null;this.templates=M||{};this.dataLayer=new t();this.variables=[];this.triggers=[];this.tags=[];this.onNewGlobalDataLayerValue=function(i){this.dataLayer.push(i)
};p.on(function(i){I.onNewGlobalDataLayerValue(i)});this.addDebugValues=function(O){O.variables=[];var P;for(P=0;P<this.variables.length;P++){this.variables[P].addDebugValues(O.variables)}O.tags=[];for(P=0;P<this.tags.length;P++){this.tags[P].addDebugValues(O.tags,"Not Fired Yet")}O.id=this.id;O.versionName=this.versionName;O.dataLayer=JSON.parse(JSON.stringify(this.dataLayer.values,function(i,Q){if(typeof Q==="object"&&Q instanceof Node){return Q.nodeName}else{return Q}}))};this.getTriggerById=function(O){if(!O){return}var P;for(P=0;P<this.triggers.length;P++){if(this.triggers[P].getId()===O){return this.triggers[P]}}};this.addTrigger=function(i){if(!i){return}var O=this.getTriggerById(i.id);if(!O){O=new f(i,this);this.triggers.push(O)}return O};var L,K,G,N,J;if(H.variables&&B.isArray(H.variables)){for(L=0;L<H.variables.length;L++){this.variables.push(o(H.variables[L],this))}}if(H.triggers&&B.isArray(H.triggers)){if(H.tags&&B.isArray(H.tags)){H.triggers.sort(function(P,O){var Q=false,S=false,i,R;
for(R=0;R<H.tags.length;R++){i=H.tags[R];if(i&&i.blockTriggerIds&&B.isArray(i.blockTriggerIds)){Q=Q||B.indexOfArray(i.blockTriggerIds,P.id)!==-1;S=S||B.indexOfArray(i.blockTriggerIds,O.id)!==-1}}if(Q&&!S){return -1}else{if(S&&!Q){return 1}}if(P.id<O.id){return -1}return 1})}for(L=0;L<H.triggers.length;L++){this.addTrigger(H.triggers[L])}}if(H.tags&&B.isArray(H.tags)){for(L=0;L<H.tags.length;L++){N=H.tags[L];G=new h(N,this);this.tags.push(G);if(N.blockTriggerIds&&B.isArray(N.blockTriggerIds)){for(K=0;K<N.blockTriggerIds.length;K++){J=this.getTriggerById(N.blockTriggerIds[K]);if(J){J.addReferencedTag(G)}}}if(N.fireTriggerIds&&B.isArray(N.fireTriggerIds)){for(K=0;K<N.fireTriggerIds.length;K++){J=this.getTriggerById(N.fireTriggerIds[K]);if(J){J.addReferencedTag(G)}}}}}this.run=function(){var P=p.getAllEvents();var O;for(O=0;O<P.length;O++){this.onNewGlobalDataLayerValue(P[O])}for(O=0;O<this.triggers.length;O++){this.triggers[O].setUp()}}}var l={THROW_ERRORS:true,dataLayer:p,containers:[],url:r,date:E,utils:B,debug:y,dom:A,window:D,Variable:s,storage:{local:x,session:e},_buildVariable:o,Condition:z,TemplateParameters:w,Trigger:f,Tag:h,throwError:C,Container:n,addContainer:function(M,J){var K=r.getQueryParameter("mtmSetDebugFlag");
if(K){var H=encodeURIComponent(M.idsite);var i=encodeURIComponent(M.id);if(K==1){var I=new Date();I.setTime(I.getTime()+(7*24*60*60*1000));document.cookie="mtmPreviewMode=mtmPreview"+H+"_"+i+"%3D1;expires="+I.toUTCString()+";SameSite=Lax"}else{document.cookie="mtmPreviewMode=mtmPreview"+H+"_"+i+"%3D1;expires=Thu, 01 Jan 1970 00:00:00 UTC;SameSite=Lax";window.close()}}if(!window.mtmPreviewWindow){var L=b.getElementById("mtmDebugFrame");if(L&&L.contentWindow){window.mtmPreviewWindow=L.contentWindow}}y.log("creating container");var G=new n(M,J);this.containers.push(G);G.dataLayer.push({"mtm.containerId":G.id});y.log("running container");G.run();return G},enableDebugMode:function(){y.enabled=true}};if("matomoTagManagerAsyncInit" in a&&B.isFunction(a.matomoTagManagerAsyncInit)){a.matomoTagManagerAsyncInit(l)}function g(){var K,I,H,M,N;for(K=0;K<arguments.length;K+=1){N=null;if(arguments[K]&&arguments[K].slice){N=arguments[K].slice()}M=arguments[K];if(B.isObject(M)&&!B.isArray(M)){p.push(M);continue
}H=M.shift();var L=B.isString(H)&&H.indexOf("::")>0;if(L){var G,J;G=H.split("::");J=G[0];H=G[1];if("object"===typeof l[J]&&B.isFunction(l[J][H])){l[J][H].apply(l[J],M)}}else{if(H&&H in l&&B.isFunction(l[H])){l[H].apply(l,M)}else{y.error("method "+H+" is not valid")}}}}B.setMethodWrapIfNeeded(a._mtm,"push",g);var v;for(v=0;v<a._mtm.length;v++){g(a._mtm[v])}p.push({"mtm.mtmScriptLoadedTime":k});if("undefined"!==typeof a.dataLayer&&B.isArray(a.dataLayer)){for(v=0;v<a.dataLayer.length;v++){if(B.isObject(a.dataLayer[v])){p.push(a.dataLayer[v])}}}return l})()}
/*!!! initContainerHook */
})();