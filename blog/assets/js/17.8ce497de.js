(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{409:function(e,r,t){e.exports=t.p+"assets/img/j1.26a2029f.png"},466:function(e,r,t){"use strict";t.r(r);var a=t(26),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[e._v("#")]),e._v(" 浏览器缓存：")]),e._v(" "),a("p",[e._v("浏览器根据开发者制定的"),a("strong",[e._v("缓存策略")]),e._v("，在向服务器请求资源的过程中，能够从"),a("strong",[e._v("缓存位置")]),e._v("读取资源，以减少网络开销、提高用户体验。")]),e._v(" "),a("h4",{attrs:{id:"缓存位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[e._v("#")]),e._v(" 缓存位置")]),e._v(" "),a("p",[e._v("浏览器按以下顺序访问缓存位置：")]),e._v(" "),a("ul",[a("li",[e._v("Service worker： 一个运行在浏览器背后的独立线程，相当于一个代理服务器，能够拦截请求，并缓存资源。")]),e._v(" "),a("li",[e._v("Memory Cache：资源小且读取频繁时，浏览器会选择将资源缓存于内存中。其读取效率更优。")]),e._v(" "),a("li",[e._v("Disk Cache: 资源较大时或系统内存占用率较高时，浏览器会选择将资源缓存于硬盘中。其容量和存储时效更优。")]),e._v(" "),a("li",[e._v("Push Cache：会话级别缓存，当session结束则被释放。")])]),e._v(" "),a("h4",{attrs:{id:"缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[e._v("#")]),e._v(" 缓存策略")]),e._v(" "),a("p",[e._v("在向服务器请求资源时，有以下缓存策略：")]),e._v(" "),a("ul",[a("li",[e._v("强缓存")]),e._v(" "),a("li",[e._v("协商缓存")])]),e._v(" "),a("p",[e._v("第一次请求资源时返回的响应头中表述了该资源将遵循的缓存策略。具体过程为：")]),e._v(" "),a("img",{staticStyle:{display:"block"},attrs:{src:t(409),width:"600"}}),e._v(" "),a("br"),e._v(" "),a("h5",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[e._v("#")]),e._v(" 强缓存")]),e._v(" "),a("p",[a("strong",[e._v("1.首次请求资源时，若响应头中标注了expires或cache-control规则时，该资源遵循强缓存策略。")])]),e._v(" "),a("p",[a("strong",[e._v("2.第二次请求资源时，若expires和cache-control未失效，则不会向服务器发送请求，直接从缓存位置中读取资源。")]),e._v("（此时控制台中显示200, from ** cache）")]),e._v(" "),a("p",[a("strong",[e._v("3.若expires和cache-control已失效，则向服务器发出请求，得到新的资源和刷新标识。")]),e._v("(此时控制台中显示200并有具体size)")]),e._v(" "),a("ul",[a("li",[e._v("expires:指定过期时间，在此时间前为缓存有效。（较旧）")]),e._v(" "),a("li",[e._v("Cache-Control：其优先级比expires高。（较新）"),a("a",{attrs:{href:"https://baike.baidu.com/item/Cache-control/1885913?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看具体规则"),a("OutboundLink")],1)])]),e._v(" "),a("h5",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[e._v("#")]),e._v(" 协商缓存")]),e._v(" "),a("p",[a("strong",[e._v("1.首次请求资源时，若响应头中标注了cache-control:no-cache且有lastModified或Etag，该资源遵循协商缓存策略。")])]),e._v(" "),a("p",[a("strong",[e._v("2.第二次请求资源时，请求头中携带If-modified-since（值为上述的lastModified）或if-None-match（值为上述的Etag）,询问服务器资源是否发生改变：")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("是，服务器返回304和noneModified，浏览器读取缓存")])]),e._v(" "),a("li",[a("p",[e._v("否，服务器返回200以及最新的资源和标识")])])]),e._v(" "),a("ul",[a("li",[e._v("lastModified：文件的修改时间，服务器中文件若发生改变，该值也会改变。（较旧）")]),e._v(" "),a("li",[e._v("Etag: 服务器生成的文件的唯一标识，服务器中文件若发生改变，该值也会改变。（较新）")])]),e._v(" "),a("h4",{attrs:{id:"缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存机制"}},[e._v("#")]),e._v(" 缓存机制")]),e._v(" "),a("ul",[a("li",[e._v("若开发者已制定了缓存策略，则强缓存优先于协商缓存执行，判断缓存失效时才向服务器请求最新资源。")]),e._v(" "),a("li",[e._v("若没有指定任何缓存策略，则浏览器会采用一个启发式的算法，通常会取响应头中的 Date 减去 Last-Modified 值的 10% 作为强缓存时间，在此段时间内二次发起请求通常会从内存中读取到缓存。")])]),e._v(" "),a("h5",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/54cc04190252",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解浏览器的缓存机制"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/hhthwx/article/details/80152728",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器缓存机制详解"),a("OutboundLink")],1)]),e._v(" "),a("h5",{attrs:{id:"扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[e._v("#")]),e._v(" 扩展阅读：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service Worker API _ MDN"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://lzw.me/a/pwa-service-worker.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service Worker 应用详解——志文工作室"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/36514327?rf=37353035",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是CDN"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/36514327?rf=37353035",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于CDN"),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);