(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ee5190e"],{"04bb":function(e,t,a){"use strict";a("5a0d")},"5a0d":function(e,t,a){},e669:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=Object(n["withScopeId"])("data-v-498827a4");Object(n["pushScopeId"])("data-v-498827a4");var o={class:"article-page-wrap"},r={class:"article-page"},b=Object(n["createVNode"])("h1",{class:"article-h1"}," Tabs 标签页 ",-1),d=Object(n["createVNode"])("p",{class:"article-p"}," Tabs 标签页，插槽式设计 ",-1),s=Object(n["createVNode"])("h2",{class:"article-h2"}," 基础使用 ",-1),i={class:"demo-wrap"},l=Object(n["createTextVNode"])("item-1"),u=Object(n["createTextVNode"])("item-2"),f=Object(n["createTextVNode"])("item-3"),m=Object(n["createTextVNode"])("item-4"),p=Object(n["createTextVNode"])("item-disabled"),O=Object(n["createTextVNode"])("content-1"),j=Object(n["createTextVNode"])("content-2"),N=Object(n["createTextVNode"])("content-3"),V=Object(n["createTextVNode"])("content-4"),h=Object(n["createVNode"])("h2",{class:"article-h2"}," Props 属性 Tabs ",-1),v=Object(n["createVNode"])("h2",{class:"article-h2"}," Props 属性 TabsItem ",-1),T=Object(n["createVNode"])("h2",{class:"article-h2"}," Props 属性 TabsPan ",-1);Object(n["popScopeId"])();var _=c((function(e,t,a,_,P,x){var w=Object(n["resolveComponent"])("code-pan"),y=Object(n["resolveComponent"])("fe-tabs-item"),g=Object(n["resolveComponent"])("fe-tabs-head"),I=Object(n["resolveComponent"])("fe-tabs-pane"),C=Object(n["resolveComponent"])("fe-tabs-body"),S=Object(n["resolveComponent"])("fe-tabs");return Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[Object(n["createVNode"])("div",r,[b,Object(n["createVNode"])(w,{code:e.iport,canexpand:!1},null,8,["code"]),d,s,Object(n["createVNode"])("div",i,[Object(n["createVNode"])(S,{selected:"2"},{default:c((function(){return[Object(n["createVNode"])(g,null,{default:c((function(){return[Object(n["createVNode"])(y,{name:"1"},{default:c((function(){return[l]})),_:1}),Object(n["createVNode"])(y,{name:"2"},{default:c((function(){return[u]})),_:1}),Object(n["createVNode"])(y,{name:"3"},{default:c((function(){return[f]})),_:1}),Object(n["createVNode"])(y,{name:"4"},{default:c((function(){return[m]})),_:1}),Object(n["createVNode"])(y,{name:"5",disabled:""},{default:c((function(){return[p]})),_:1})]})),_:1}),Object(n["createVNode"])(C,null,{default:c((function(){return[Object(n["createVNode"])(I,{name:"1"},{default:c((function(){return[O]})),_:1}),Object(n["createVNode"])(I,{name:"2"},{default:c((function(){return[j]})),_:1}),Object(n["createVNode"])(I,{name:"3"},{default:c((function(){return[N]})),_:1}),Object(n["createVNode"])(I,{name:"4"},{default:c((function(){return[V]})),_:1})]})),_:1})]})),_:1})]),Object(n["createVNode"])(w,{code:e.baseDemo,language:"html"},null,8,["code"]),h,Object(n["createVNode"])(w,{code:e.tabsProps},null,8,["code"]),v,Object(n["createVNode"])(w,{code:e.tabsItemProps},null,8,["code"]),T,Object(n["createVNode"])(w,{code:e.tabsPanProps},null,8,["code"])])])})),P=Object(n["defineComponent"])({name:"Tabs",data:function(){return{iport:x,baseDemo:w,tabsProps:y,tabsItemProps:g,tabsPanProps:I}}}),x="import {Tabs, TabsHead, TabsBody, TabsItem,TabsPane} from 'fedora';",w='<fe-tabs selected="2">\n  <fe-tabs-head>\n    <fe-tabs-item name="1">item-1</fe-tabs-item>\n    <fe-tabs-item name="2">item-2</fe-tabs-item>\n    <fe-tabs-item name="3">item-3</fe-tabs-item>\n    <fe-tabs-item name="4">item-4</fe-tabs-item>\n    <fe-tabs-item name="5" disabled>item-disabled</fe-tabs-item>\n  </fe-tabs-head>\n  <fe-tabs-body>\n    <fe-tabs-pane name="1">content-1</fe-tabs-pane>\n    <fe-tabs-pane name="2">content-2</fe-tabs-pane>\n    <fe-tabs-pane name="3">content-3</fe-tabs-pane>\n    <fe-tabs-pane name="4">content-4</fe-tabs-pane>\n  </fe-tabs-body>\n</fe-tabs>',y="props: {\n  selected: { // 默认选中的标签\n    type: String,\n    required: true,\n  },\n  direction: { // 版式，默认横版\n    type: String,\n    default: 'horizontal',\n    validator(value) {\n      return ['horizontal', 'vertical'].indexOf(value) >= 0;\n    },\n  },\n},",g="props: {\n  disabled: { // 不可选中\n    type: Boolean,\n    default: false,\n  },\n  name: { // tab名\n    type: [String, Number],\n    required: true,\n  },\n},",I="  props: {\n    name: { // 名对应tab-item名\n      type: [String, Number],\n      required: true,\n    },\n  },";a("04bb");P.render=_,P.__scopeId="data-v-498827a4";t["default"]=P}}]);
//# sourceMappingURL=chunk-3ee5190e.1f038e85.js.map