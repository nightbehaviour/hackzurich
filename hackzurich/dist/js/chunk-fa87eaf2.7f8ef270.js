(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa87eaf2","chunk-9b936ce4","chunk-9b936ce4","chunk-31ff2f48","chunk-05e57484","chunk-79287820"],{"0789":function(t,e,s){"use strict";var i=s("80d2"),a=function(t="",e=!1){const s=e?"width":"height",a=`offset${Object(i["u"])(s)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow,[s]:t.style[s]}},enter(e){const i=e._initialStyle,n=`${e[a]}px`;e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=i.visibility,e.style.overflow="hidden",e.style[s]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[s]=n})},afterEnter:r,enterCancelled:r,leave(t){t._initialStyle={transition:"",visibility:"",overflow:t.style.overflow,[s]:t.style[s]},t.style.overflow="hidden",t.style[s]=`${t[a]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[s]="0")},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){const e=t._initialStyle[s];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[s]=e),delete t._initialStyle}};s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return o})),s.d(e,"a",(function(){return l}));Object(i["h"])("carousel-transition"),Object(i["h"])("carousel-reverse-transition"),Object(i["h"])("tab-transition"),Object(i["h"])("tab-reverse-transition"),Object(i["h"])("menu-transition"),Object(i["h"])("fab-transition","center center","out-in"),Object(i["h"])("dialog-transition"),Object(i["h"])("dialog-bottom-transition");const n=Object(i["h"])("fade-transition"),r=Object(i["h"])("scale-transition"),o=(Object(i["h"])("scroll-x-transition"),Object(i["h"])("scroll-x-reverse-transition"),Object(i["h"])("scroll-y-transition"),Object(i["h"])("scroll-y-reverse-transition"),Object(i["h"])("slide-x-transition")),l=(Object(i["h"])("slide-x-reverse-transition"),Object(i["h"])("slide-y-transition"),Object(i["h"])("slide-y-reverse-transition"),Object(i["e"])("expand-transition",a()),Object(i["e"])("expand-x-transition",a("",!0)))},"0fd9":function(t,e,s){"use strict";s("4b85");var i=s("2b0e"),a=s("d9f7"),n=s("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce((s,i)=>{return s[t+Object(n["u"])(i)]=e(),s},{})}const c=t=>[...o,"baseline","stretch"].includes(t),h=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),d=l("justify",()=>({type:String,default:null,validator:u})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,s){let i=b[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const m=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:p},...v},render(t,{props:e,data:s,children:i}){let n="";for(const a in e)n+=String(e[a]);let r=m.get(n);if(!r){let t;for(t in r=[],g)g[t].forEach(s=>{const i=e[s],a=f(t,s,i);a&&r.push(a)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),m.set(n,r)}return t(e.tag,Object(a["a"])(s,{staticClass:"row",class:r}),i)}})},"132d":function(t,e,s){"use strict";s("4804");var i,a=s("7e2b"),n=s("a9ad"),r=s("af2b"),o=s("7560"),l=s("80d2"),c=s("2b0e"),h=s("58df");function u(t){return["fas","far","fal","fab"].some(e=>t.includes(e))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const p=Object(h["a"])(a["a"],n["a"],r["a"],o["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["t"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["q"])(t).find(e=>t[e]);return e&&i[e]||Object(l["d"])(this.size)},getDefaultData(){const t=Boolean(this.listeners$.click||this.listeners$["!click"]),e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!t,role:t?"button":null,...this.attrs$},on:this.listeners$};return e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const s=[],i=this.getDefaultData();let a="material-icons";const n=t.indexOf("-"),r=n<=-1;r?s.push(t):(a=t.slice(0,n),u(a)&&(a="")),i.class[a]=!0,i.class[t]=!r;const o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.tag,i,s)},renderSvgIcon(t,e){const s=this.getDefaultData();s.class["v-icon--svg"]=!0,s.attrs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24",role:"img","aria-hidden":!this.attrs$["aria-label"],"aria-label":this.attrs$["aria-label"]};const i=this.getSize();return i&&(s.style={fontSize:i,height:i,width:i},s.attrs.height=i,s.attrs.width=i),this.applyColors(s),e("svg",s,[e("path",{attrs:{d:t}})])},renderSvgIconComponent(t,e){const s=this.getDefaultData();s.class["v-icon--is-component"]=!0;const i=this.getSize();i&&(s.style={fontSize:i,height:i}),this.applyColors(s);const a=t.component;return s.props=t.props,s.nativeOn=s.on,e(a,s)}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:s}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,i?[i]:s)}})},"1c87":function(t,e,s){"use strict";var i=s("2b0e"),a=s("5607"),n=s("80d2");e["a"]=i["a"].extend({name:"routable",directives:{Ripple:a["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to?t:(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive),t)},computedRipple(){return null!=this.ripple?this.ripple:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},methods:{click(t){this.$emit("click",t)},generateRouteLink(){let t,e=this.exact;const s={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,click:this.click},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,a=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),a=`${a} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:e,activeClass:i,exactActiveClass:a,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass} ${this.proxyClass||""}`.trim(),e=`_vnode.data.class.${t}`;this.$nextTick(()=>{Object(n["k"])(this.$refs.link,e)&&this.toggle()})},toggle:()=>{}}})},"22da":function(t,e,s){"use strict";var i=s("490a");e["a"]=i["a"]},"24b2":function(t,e,s){"use strict";var i=s("80d2"),a=s("2b0e");e["a"]=a["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=Object(i["d"])(this.height),s=Object(i["d"])(this.minHeight),a=Object(i["d"])(this.minWidth),n=Object(i["d"])(this.maxHeight),r=Object(i["d"])(this.maxWidth),o=Object(i["d"])(this.width);return e&&(t.height=e),s&&(t.minHeight=s),a&&(t.minWidth=a),n&&(t.maxHeight=n),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"25a8":function(t,e,s){},4804:function(t,e,s){},"490a":function(t,e,s){"use strict";s("8d4f");var i=s("a9ad"),a=s("80d2");e["a"]=i["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:Object(a["d"])(this.calculatedSize),width:Object(a["d"])(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"4b85":function(t,e,s){},"4e82":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s("3206");function a(t,e,s){const a=Object(i["a"])(t,e,s).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}});return a}a("itemGroup")},8336:function(t,e,s){"use strict";s("86cc");var i=s("8dd9"),a=i["a"],n=s("22da"),r=s("4e82"),o=s("f2e7"),l=s("fe6c"),c=s("1c87"),h=s("af2b"),u=s("58df"),d=s("d9bd");const p=Object(u["a"])(a,c["a"],l["a"],h["a"],Object(r["a"])("btnToggle"),Object(o["b"])("inputValue"));e["a"]=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...c["a"].options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},contained(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple(){const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=this.ripple?this.ripple:t)},isFlat(){return Boolean(this.icon||this.text||this.outlined)},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(d["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(n["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],s=this.isFlat?this.setTextColor:this.setBackgroundColor,{tag:i,data:a}=this.generateRouteLink();return"button"===i&&(a.attrs.type=this.type,a.attrs.disabled=this.disabled),a.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?a:s(this.color,a),e)}})},"86cc":function(t,e,s){},"8adc":function(t,e,s){},"8ce9":function(t,e,s){},"8d4f":function(t,e,s){},"8dd9":function(t,e,s){"use strict";s("25a8");var i=s("7e2b"),a=s("a9ad"),n=s("2b0e"),r=n["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t?{}:isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}}),o=s("24b2"),l=s("7560"),c=s("58df");e["a"]=Object(c["a"])(i["a"],a["a"],r,o["a"],l["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes(){return{"v-sheet":!0,"v-sheet--tile":this.tile,...this.themeClasses,...this.elevationClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},"92f2":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Are you looking to travel by yourself or are you bringing company?")]),s("v-divider",{staticClass:"hdiv",attrs:{mb:"12"}}),t._l(t.passengers,(function(e,i){return s("passenger",{key:i,staticClass:"passengers",attrs:{passenger:e},on:{input:function(e){t.passengers[i]=e}}})})),s("v-btn",{staticClass:"buttonpeople",attrs:{text:"",color:"secondary"},on:{click:function(e){return t.passengers.push({halbtax:!1,ga:!1})}}},[s("v-icon",{attrs:{color:"primary"}},[t._v("mdi-plus")])],1)],2)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"flex-grow-0"},[s("v-spacer"),s("h3",[t._v("Passenger")]),s("v-spacer"),s("v-chip",{staticClass:"chips",attrs:{color:t.passengerData.halbtax?"primary":"",value:t.passengerData.halbtax},on:{click:function(e){t.passengerData.halbtax=!t.passengerData.halbtax}}},[t._v("1/2")]),s("v-chip",{staticClass:"chips",attrs:{color:t.passengerData.ga?"primary":"",value:t.passengerData.ga},on:{click:function(e){t.passengerData.ga=!t.passengerData.ga}}},[t._v("GA")]),s("v-spacer")],1)},r=[],o={name:"WizardPeople",components:{},props:{passenger:Object},data(){return{passengerData:{halbtax:!1,ga:!1}}},created(){this.passengerData=this.passenger},watch:{passengerData:{deep:!0,handler(){this.$parent.$emit("input",this.passengerData)}}}},l=o,c=s("2877"),h=s("6544"),u=s.n(h),d=(s("8adc"),s("58df")),p=s("0789"),v=s("9d26"),g=s("a9ad"),b=s("4e82"),f=s("7560"),m=s("f2e7"),y=s("1c87"),x=s("af2b"),C=s("d9bd"),$=Object(d["a"])(g["a"],x["a"],y["a"],f["a"],Object(b["a"])("chipGroup"),Object(m["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$vuetify.icons.delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$vuetify.icons.complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...y["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(y["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(C["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(v["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(p["a"],t)},genClose(){return this.$createElement(v["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:t=>{t.stopPropagation(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const a=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(a,i),e)}}),k=s("0fd9"),S=s("2fa4"),O=Object(c["a"])(l,n,r,!1,null,null,null),j=O.exports;u()(O,{VChip:$,VRow:k["a"],VSpacer:S["a"]});var w={name:"WizardPeople",components:{passenger:j},data(){return{passengers:[{halbtax:!1,ga:!1}]}},watch:{passengers(){this.$store.commit("setPassengers",this.passengers)}}},B=w,_=s("8336"),z=s("ce7e"),D=s("132d"),A=Object(c["a"])(B,i,a,!1,null,"a8a8616e",null);e["default"]=A.exports;u()(A,{VBtn:_["a"],VDivider:z["a"],VIcon:D["a"]})},"9d26":function(t,e,s){"use strict";var i=s("132d");e["a"]=i["a"]},ce7e:function(t,e,s){"use strict";s("8ce9");var i=s("7560");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},d9f7:function(t,e,s){"use strict";
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */
function i(){const t={};let e,s,i=arguments.length;while(i--)for(e of Object.keys(arguments[i]))switch(e){case"class":case"style":case"directives":Array.isArray(t[e])||(t[e]=[]),t[e]=t[e].concat(arguments[i][e]);break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":t[e]||(t[e]={});const a=t[e];for(s of Object.keys(arguments[i][e]||{}))a[s]?a[s]=Array().concat(a[s],arguments[i][e][s]):a[s]=arguments[i][e][s];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":t[e]||(t[e]={}),t[e]={...arguments[i][e],...t[e]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[e]||(t[e]=arguments[i][e])}return t}s.d(e,"a",(function(){return i}))},f2e7:function(t,e,s){"use strict";s.d(e,"b",(function(){return a}));var i=s("2b0e");function a(t="value",e="input"){return i["a"].extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(s){!!s!==this[t]&&this.$emit(e,s)}}})}const n=a();e["a"]=n}}]);
//# sourceMappingURL=chunk-fa87eaf2.7f8ef270.js.map