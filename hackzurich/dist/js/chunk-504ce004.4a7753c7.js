(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-504ce004"],{6107:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("How much are you willing to spend for your surprise trip?")]),r("v-divider",{staticClass:"hdiv",attrs:{mb:"12"}}),r("v-row",[r("v-spacer"),r("v-col",[r("v-btn",{staticClass:"priceBtn",attrs:{onclick:"this.maxPrice=5",outlined:"",depressed:""}},[e._v("0-5 CHF")]),r("v-btn",{staticClass:"priceBtn",attrs:{onclick:"this.maxPrice=20",outlined:"",depressed:""}},[e._v("15-20 CHF")])],1),r("v-col",[r("v-btn",{staticClass:"priceBtn",attrs:{onclick:"this.maxPrice=10",outlined:"",depressed:""}},[e._v("5-10 CHF")]),r("v-btn",{staticClass:"priceBtn",attrs:{onclick:"this.maxPrice=999",outlined:"",depressed:""}},[e._v("20+ CHF")])],1),r("v-spacer")],1)],1)},i=[],a={name:"WizardPrice",data(){return{maxPrice:0}},watch:{maxPrice(){this.$store.commit("setMaxPrice",this.maxPrice)}}},n=a,c=r("2877"),l=r("6544"),o=r.n(l),d=r("8336"),u=r("62ad"),f=r("ce7e"),p=r("0fd9"),v=r("2fa4"),h=Object(c["a"])(n,s,i,!1,null,"1b383462",null);t["default"]=h.exports;o()(h,{VBtn:d["a"],VCol:u["a"],VDivider:f["a"],VRow:p["a"],VSpacer:v["a"]})},"62ad":function(e,t,r){"use strict";r("4b85");var s=r("2b0e"),i=r("d9f7"),a=r("80d2");const n=["sm","md","lg","xl"],c=(()=>{return n.reduce((e,t)=>{return e[t]={type:[Boolean,String,Number],default:!1},e},{})})(),l=(()=>{return n.reduce((e,t)=>{return e["offset"+Object(a["u"])(t)]={type:[String,Number],default:null},e},{})})(),o=(()=>{return n.reduce((e,t)=>{return e["order"+Object(a["u"])(t)]={type:[String,Number],default:null},e},{})})(),d={col:Object.keys(c),offset:Object.keys(l),order:Object.keys(o)};function u(e,t,r){let s=e;if(null!=r&&!1!==r){if(t){const r=t.replace(e,"");s+=`-${r}`}return"col"!==e||""!==r&&!0!==r?(s+=`-${r}`,s.toLowerCase()):s.toLowerCase()}}const f=new Map;t["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...c,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...o,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:r,children:s,parent:a}){let n="";for(const i in t)n+=String(t[i]);let c=f.get(n);if(!c){let e;for(e in c=[],d)d[e].forEach(r=>{const s=t[r],i=u(e,r,s);i&&c.push(i)});const r=c.some(e=>e.startsWith("col-"));c.push({col:!r||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),f.set(n,c)}return e(t.tag,Object(i["a"])(r,{class:c}),s)}})},"8ce9":function(e,t,r){},ce7e:function(e,t,r){"use strict";r("8ce9");var s=r("7560");t["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-504ce004.4a7753c7.js.map