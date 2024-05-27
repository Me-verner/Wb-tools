(()=>{var e={383:function(e){e.exports=function(){"use strict";var e=['a[href]:not([tabindex^="-"])','area[href]:not([tabindex^="-"])','input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])','input[type="radio"]:not([disabled]):not([tabindex^="-"])','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','iframe:not([tabindex^="-"])','audio[controls]:not([tabindex^="-"])','video[controls]:not([tabindex^="-"])','[contenteditable]:not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])'];function t(e){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.$el=e,this.shown=!1,this._id=this.$el.getAttribute("data-a11y-dialog")||this.$el.id,this._previouslyFocused=null,this._listeners={},this.create()}function n(e,t){return n=(t||document).querySelectorAll(e),Array.prototype.slice.call(n);var n}function o(e){(e.querySelector("[autofocus]")||e).focus()}function i(){n("[data-a11y-dialog]").forEach((function(e){new t(e)}))}return t.prototype.create=function(){this.$el.setAttribute("aria-hidden",!0),this.$el.setAttribute("aria-modal",!0),this.$el.setAttribute("tabindex",-1),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),this._openers=n('[data-a11y-dialog-show="'+this._id+'"]'),this._openers.forEach(function(e){e.addEventListener("click",this._show)}.bind(this));const e=this.$el;return this._closers=n("[data-a11y-dialog-hide]",this.$el).filter((function(t){return t.closest('[aria-modal="true"], [data-a11y-dialog]')===e})).concat(n('[data-a11y-dialog-hide="'+this._id+'"]')),this._closers.forEach(function(e){e.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},t.prototype.show=function(e){return this.shown||(document.documentElement.style.overflowY="hidden",this._previouslyFocused=document.activeElement,this.$el.removeAttribute("aria-hidden"),this.shown=!0,o(this.$el),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",e)),this},t.prototype.hide=function(e){return this.shown?(document.documentElement.style.overflowY="",this.shown=!1,this.$el.setAttribute("aria-hidden","true"),this._previouslyFocused&&this._previouslyFocused.focus&&this._previouslyFocused.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",e),this):this},t.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(e){e.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(e){e.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},t.prototype.on=function(e,t){return void 0===this._listeners[e]&&(this._listeners[e]=[]),this._listeners[e].push(t),this},t.prototype.off=function(e,t){var n=(this._listeners[e]||[]).indexOf(t);return n>-1&&this._listeners[e].splice(n,1),this},t.prototype._fire=function(e,t){var n=this._listeners[e]||[],o=new CustomEvent(e,{detail:t});this.$el.dispatchEvent(o),n.forEach(function(e){e(this.$el,t)}.bind(this))},t.prototype._bindKeypress=function(t){const o=document.activeElement;o&&o.closest('[aria-modal="true"]')!==this.$el||(this.shown&&"Escape"===t.key&&"alertdialog"!==this.$el.getAttribute("role")&&(t.preventDefault(),this.hide(t)),this.shown&&"Tab"===t.key&&function(t,o){var i=function(t){return n(e.join(","),t).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}))}(t),s=i.indexOf(document.activeElement);o.shiftKey&&0===s?(i[i.length-1].focus(),o.preventDefault()):o.shiftKey||s!==i.length-1||(i[0].focus(),o.preventDefault())}(this.$el,t))},t.prototype._maintainFocus=function(e){!this.shown||e.target.closest('[aria-modal="true"]')||e.target.closest("[data-a11y-dialog-ignore-focus-trap]")||o(this.$el)},"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):window.requestAnimationFrame?window.requestAnimationFrame(i):window.setTimeout(i,16)),t}()}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=["Abadi MT Condensed Light","Albertus Extra Bold","Albertus Medium","Amazone BT","AmerType Md BT","American Typewriter","Andale Mono","Antique Olive","Arial","Arial Black","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","Avenir","Avenir Next","Avenir Next Condensed","Bahnschrift","BankGothic Md BT","Baskerville","Bazooka","Benguiat Bk BT","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Book Antiqua","Bookman Old Style","Boulder","Bradley Hand","Bremen Bd BT","Brush Script MT","CG Omega","CG Times","Calibri","Calisto MT","Calligrapher","Cambria","Cambria Math","Candara","CaslonOpnface BT","Century Gothic","Century Schoolbook","Cezanne","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter","Charter BT","Charter Bd BT","Chaucer","ChelthmITC Bk BT","Clarendon Condensed","CloisterBlack BT","Cochin","Comic Sans MS","Consolas","Constantia","CopperplGoth Bd BT","Copperplate","Copperplate Gothic Bold","Copperplate Gothic Light","Corbel","Cornerstone","Coronet","Courier","Courier New","Cuckoo","DIN Alternate","DIN Condensed","Dauphin","Denmark","Didot","Ebrima","English 111 Vivace BT","EngraversGothic BT","Exotc350 Bd BT","Franklin Gothic Medium","Fransiscan","Freefrm721 Blk BT","FrnkGothITC Bk BT","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Gadugi","Galliard BT","Garamond","Geneva","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","Georgia","Gill Sans","GoudyHandtooled BT","GoudyOLSt BT","Haettenschweiler","Heather","Helvetica","Helvetica Neue","Herald","Herculanum","Hoefler Text","HoloLens MDL2 Assets","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Impact","Incised901 BT","Incised901 Bd BT","Incised901 Lt BT","Informal011 BT","Ink Free","Javanese Text","Jester","Kabel Bk BT","Kabel Ult BT","Kaufmann BT","Kaufmann Bd BT","Korinna BT","Leelawadee UI","Letter Gothic","Lithograph","Lithograph Light","Long Island","Lucida Console","Lucida Grande","Lucida Handwriting","Lucida Sans","Lucida Sans Unicode","Luminari","Lydian BT","MS Gothic","MS LineDraw","MV Boli","Malgun Gothic","Marigold","Marker Felt","Market","Marlett","Matisse ITC","Menlo","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft YaHei","Microsoft Yi Baiti","MingLiU-ExtB","Monaco","Mongolian Baiti","Monotype Corsiva","Myanmar Text","News GothicMT","NewsGoth BT","Nirmala UI","Noteworthy","OCR A Extended","Old Century","Onyx BT","Optima","OzHandicraft BT","PTBarnum BT","Palatino","Palatino Linotype","Papyrus","Pegasus","Phosphate","Pickwick","Poster","PosterBodoni BT","Pythagoras","Ribbon131 Bd BT","Rockwell","Savoye LET","Sceptre","Segoe MDL2 Assets","Segoe Print","Segoe Script","Segoe UI","Segoe UI Emoji","Segoe UI Historic","Segoe UI Symbol","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","SignPainter","Signboard","SimSun","Sitka","Skia","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Storybook","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Symbol","Tahoma","Technical","Teletype","Tempus Sans ITC","Times","Times New Roman","Times New Roman PS","Trattatello","Trebuchet MS","Tristan","Tubular","TypoUpright BT","Unicorn","Univers","Univers Condensed","Vagabond","Verdana","Webdings","Westminster\tAllegro","Wingdings","Yu Gothic","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT"];function t(){var e=this;e.n=document.querySelector("nav"),e.close=function(){document.body.style.overflow="auto",e.n.classList.remove("active")},e.open=function(){document.body.style.overflow="hidden",e.n.classList.add("active")},e.n&&(document.querySelector("nav>button").addEventListener("click",(()=>{console.log("toggleNav"),e.n.classList.contains("active")?e.close():e.open()})),document.querySelector("nav>.nav-overlay").addEventListener("click",(()=>{e.close()})),document.querySelectorAll("nav ul > a").forEach((t=>t.addEventListener("click",(()=>{e.close()})))))}var o=n(383),i=n.n(o);function s(){var e=document.getElementsByClassName("theme-toggle");if(window.CSS&&CSS.supports("color","var(--bg)")&&e){var t=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");t&&document.documentElement.setAttribute("data-theme",t);for(var n=0;n<e.length;n++)e[n].onclick=function(){var e="light";"light"===document.documentElement.getAttribute("data-theme")&&(e="dark"),document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)}}}function a(){var e=this;e.gt=document.getElementById("gt-link"),e.scrollToTop=function(){window.scroll({top:0,left:0,behavior:"smooth"})},e.listeners=function(){window.addEventListener("scroll",(()=>{window.scrollY>0?e.gt.classList.remove("hidden"):e.gt.classList.add("hidden")})),e.gt.onclick=function(t){t.preventDefault(),(document.documentElement.scrollTop||document.body.scrollTop>0)&&e.scrollToTop()}},e.gt&&e.listeners()}function r(){let e=document.querySelectorAll("[class*=_aos]");if(IntersectionObserver&&e){let t=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&!e.target.classList.contains("_aos-done")?e.target.classList.add("_aos-done"):e.target.classList.remove("_aos-done")}))}),{root:null,threshold:0});e.forEach((e=>{t.observe(e)}))}}function l(){var e=["monospace","sans-serif","serif"],t=document.getElementsByTagName("body")[0],n=document.createElement("span");n.style.fontSize="72px",n.innerHTML="abcdefghilmnopqrstuvz";var o={},i={};for(var s in e)n.style.fontFamily=e[s],t.appendChild(n),o[e[s]]=n.offsetWidth,i[e[s]]=n.offsetHeight,t.removeChild(n);this.detect=function(s){var a=!1;for(var r in e){n.style.fontFamily=s+","+e[r],t.appendChild(n);var l=n.offsetWidth!=o[e[r]]||n.offsetHeight!=i[e[r]];t.removeChild(n),a=a||l}return a}}const d="<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='var(--blue)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' ><path stroke='none' d='M0 0h24v24H0z'/><path d='M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0'/><path d='M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0'/></svg>",c="<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='var(--green)' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><circle cx='12' cy='12' r='9'/><path d='M9 12l2 2 4-4'/></svg>";const u=document.querySelector("#dlg_changelog");new(i())(u);new class{constructor(e){this.LS=null,this.name=e,this.checkLS(),this.init(e)}clearAll(){this.LS.clear()}checkLS(){window&&window.localStorage?this.LS=window.localStorage:console.log("localStorage is there?")}init(e){this.LS&&(this.LS[e]?this.data=JSON.parse(this.LS[e]):this.data={})}set(e,t){this.data[e]=t,this.LS&&(this.LS[this.name]=JSON.stringify(this.data))}get(e){return!!this.data[e]&&this.data[e]}}("toolz").get("version");var h=new function(e){const t=this;t.snack=document.createElement("div"),t.snack.className="snackbar",t.message=document.createElement("div"),t.snack.appendChild(t.message),document.body.appendChild(t.snack),t.top=e.topPos,t.classNames=e.classNames,t.autoClose="boolean"==typeof e.autoClose&&e.autoClose,t.autoCloseTimeout=e.autoClose&&"number"==typeof e.autoCloseTimeout?e.autoCloseTimeout:3e3,t.reset=function(){t.message.innerHTML="",t.snack.classList.remove(t.classNames)},t.show=function(e,n){t.hide(),t.message.innerHTML=e,t.snack.style.top=t.top,t.snack.classList.add(n||t.classNames),t.autoClose&&setTimeout((function(){t.hide()}),t.autoCloseTimeout)},t.hide=function(){t.snack.style.top="-100%",t.reset()}}({topPos:"10px",classNames:"success",autoClose:!0,autoCloseTimeout:2e3});const m=document.getElementById("f_options"),f=document.getElementById("font_test"),p=document.getElementById("r_fw"),v=document.getElementById("r_fw_value"),g=document.getElementById("r_fs"),y=document.getElementById("r_fs_value"),T=document.getElementById("r_ls"),B=document.getElementById("r_ls_value"),w=document.getElementById("r_lh"),b=document.getElementById("r_lh_value");function S(){var e=document.getElementById("css-code"),t=document.createRange();t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),h.show("CSS copied to clipboard !")}function C(){var e=".custom-font {\n  font-family: "+m.value+";\n  font-weight: "+v.innerText+";\n  font-size: "+y.innerText+";\n  letter-spacing: "+B.innerText+";\n  line-height: "+b.innerText+";\n}";document.getElementById("css-code").innerText=e}document.addEventListener("DOMContentLoaded",(()=>{new s,new t,new a;var n=0,o=0,i=0,u=new l;const h=document.querySelector("#flist");e.forEach((e=>{n++;var t=u.detect(e);if(t){var s=document.createElement("div");s.innerText=e,s.className="card _aos";var a=document.createElement("option");a.value=e,a.innerText=e,m.appendChild(a),s.style.fontFamily=e,h.appendChild(s),o++}else i++;console.log(t)}));document.querySelector("#results").innerHTML="<span>"+n+" Tested Fonts </span><span>"+c+" "+o+" Detected fonts</span><span>"+d+" "+i+" Not available </span>",new r,m.onchange=function(){f.style.fontFamily=this.value,C()},p.oninput=function(){f.style["font-weight"]=this.value,v.innerText=this.value,C()},g.oninput=function(){f.style["font-size"]=this.value+"px",y.innerText=this.value+"px",C()},T.oninput=function(){f.style["letter-spacing"]=this.value+"px",B.innerText=this.value+"px",C()},w.oninput=function(){f.style["line-height"]=this.value,b.innerText=this.value,C()},document.querySelector("#css_code_copy").addEventListener("click",S)}))})()})();