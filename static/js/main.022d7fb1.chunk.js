(this.webpackJsonpanalytics=this.webpackJsonpanalytics||[]).push([[0],{184:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(44),r=a.n(s),i=(a(184),a(18)),o=a.n(i),l=a(25),d=a(9),j=a.p+"static/media/logo.f948a1cf.svg",u=a(1);function b(){return Object(u.jsx)("header",{children:Object(u.jsx)("img",{src:j,alt:"Parallel Analytics"})})}function h(e){var t=e/1e10;return Math.abs(Number(t))>=1e9?(Math.abs(Number(t))/1e9).toFixed(2)+"B":Math.abs(Number(t))>=1e6?(Math.abs(Number(t))/1e6).toFixed(2)+"M":Math.abs(Number(t))>=1e3?(Math.abs(Number(t))/1e3).toFixed(2)+"K":Math.abs(Number(t)).toFixed(2)}function p(e){return parseFloat(e.toFixed(2)).toLocaleString("en-US")}function O(e){return(100*e).toFixed(2)}var x=a(339),v=a(340),f=a(88),m=a(75),g=a(168),y=a(89),N=a(20),k=a.n(N);function w(e){var t,a,c=null===e||void 0===e||null===(t=e.dailyContrib)||void 0===t?void 0:t.stats,s=Object(n.useState)(),r=Object(d.a)(s,2),i=r[0],j=r[1],b=Object(n.useState)(),h=Object(d.a)(b,2),O=h[0],N=h[1],w=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://min-api.cryptocompare.com/data/v2/histoday?fsym=DOT&tsym=USD&limit="+Object.keys(c).length);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.Data.Data,s=c.map((function(e,t){var a;return{dates:null===e||void 0===e||null===(a=e.date)||void 0===a?void 0:a.replace(", 2021","")}})),r=c.map((function(e,t){return delete e.date,e})),i=r.map((function(e,t){return{dots:k.a.sum(k.a.values(r[t])),value:k.a.sum(k.a.values(r[t]))*a[t].close}})),l=k.a.merge(s,i),j(l),N(((i[i.length-1].value-i[i.length-2].value)/i[i.length-1].value*100).toFixed(2));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){w()}),[]);return a?"loading":Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"big",children:[i?"$"+p(parseFloat(i[i.length-1].value)):"",O&&Object(u.jsx)("span",{className:O.includes("-")?"negative variation":"positive variation",children:O.includes("-")?O+"%":"+"+O+"%"})]}),i&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"globalTvl",children:Object(u.jsx)(x.a,{className:"crowdloantvl",width:"100%",height:220,debounce:1,children:Object(u.jsxs)(v.a,{width:"100%",height:220,data:i,stroke:3,margin:{top:10,left:10,right:-10,bottom:0},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(u.jsx)(f.a,{dataKey:"dates",hide:!0}),Object(u.jsx)(m.a,{content:function(e){var t=e.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:t.map((function(e,t){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.payload.dates})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[p(e.payload.dots)," DOT "]})}),Object(u.jsxs)("p",{className:"small-gray",children:["$ ",p(e.payload.value)]})]},"item-".concat(t))}))})}}),Object(u.jsx)(g.a,{scaleToFit:!0,type:"monotone",dataKey:"value",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"}),Object(u.jsx)(y.a,{orientation:"right",tickFormatter:function(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(e)}})]})})})})]})}function C(e){var t,a=null===e||void 0===e||null===(t=e.dailyContrib)||void 0===t?void 0:t.stats,c=Object(n.useState)(),s=Object(d.a)(c,2),r=s[0],i=s[1],j=Object(n.useState)(),b=Object(d.a)(j,2),h=b[0],O=b[1],N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.map((function(e,t){var a;return{dates:null===e||void 0===e||null===(a=e.date)||void 0===a?void 0:a.replace(", 2021","")}})),n=a.map((function(e,t){return delete e.date,e})),c=n.map((function(e,t){return{dots:k.a.sum(k.a.values(n[t])),value:k.a.sum(k.a.values(n[t]))}})),s=k.a.merge(t,c),i(s),O(((c[c.length-1].value-c[c.length-2].value)/c[c.length-1].value*100).toFixed(2));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"big",children:[r?p(parseFloat(r[r.length-1].value))+" DOT":"",h&&Object(u.jsx)("span",{className:h.includes("-")?"negative variation":"positive variation",children:h.includes("-")?h+"%":"+"+h+"%"})]}),r&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"globalTvl",children:Object(u.jsx)(x.a,{className:"crowdloantvl",width:"100%",height:220,debounce:1,children:Object(u.jsxs)(v.a,{width:"100%",height:220,data:r,stroke:3,margin:{top:10,left:10,right:-10,bottom:0},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(u.jsx)(f.a,{dataKey:"dates",hide:!0}),Object(u.jsx)(m.a,{content:function(e){var t=e.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:t.map((function(e,t){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.payload.dates})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[p(e.payload.dots)," DOT "]})})]},"item-".concat(t))}))})}}),Object(u.jsx)(g.a,{scaleToFit:!0,type:"monotone",dataKey:"value",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"}),Object(u.jsx)(y.a,{orientation:"right",tickFormatter:function(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(e)}})]})})})})]})}function F(e){var t=null===e||void 0===e?void 0:e.data,a=Object.entries(t),c=a.map((function(e,t){return{date:e[0],val:e[1]/1e10}})),s=Object(n.useState)(),r=Object(d.a)(s,2),i=r[0],o=r[1];Object(n.useEffect)((function(){var e="https://min-api.cryptocompare.com/data/v2/histoday?fsym=DOT&tsym=USD&limit="+Object.keys(a).length;fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.Data.Data,a=c.reduce((function(e,t,a){var n=t.val,c={date:t.date,val:n+(0===a?0:e[a-1].val)};return e.push(c),e}),[]).map((function(e,a){return{date:e.date,val:e.val,usd:e.val*t[a].close}}));o(a)}))}),[]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{width:"100%",height:"100%",children:Object(u.jsxs)(v.a,{width:600,height:200,data:i,margin:{top:10,left:0,bottom:0},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(u.jsx)(f.a,{dataKey:"date",tick:{fontSize:13}}),Object(u.jsx)(m.a,{content:function(e){var t=e.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.payload.date})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[p(e.value)," DOT "]})}),Object(u.jsxs)("p",{className:"small-gray",children:["($",p(e.payload.usd),")"]})]},"item-".concat(t))}))})}}),Object(u.jsx)(g.a,{type:"monotone",dataKey:"val",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"})]})})})}function S(e){var t,a=null===e||void 0===e?void 0:e.data,c=e.market,s=null===e||void 0===e||null===(t=e.dailyContrib)||void 0===t?void 0:t.stats,r="",i=Object(n.useState)(!1),j=Object(d.a)(i,2),b=j[0],h=j[1],p=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c,i,l,d,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.entries(a),n=t.map((function(e,t){return{date:e[0],val:e[1]/1e10}})),r=null===s||void 0===s?void 0:s.map((function(e,t){var a;return{dates:null===e||void 0===e||null===(a=e.date)||void 0===a?void 0:a.replace(", 2021","")}})),c=s.map((function(e,t){return delete e.date,e})),i=c.map((function(e,t){return{dots:k.a.sum(k.a.values(c[t]))}})),l=n.reduce((function(e,t,a){var n=t.val,c={date:t.date,val:n+(0===a?0:e[a-1].val)};return e.push(c),e}),[]).map((function(e,t){return{date:e.date,dots:e.val}})),d=k.a.merge(r,i),console.log("final",d),j=null===d||void 0===d?void 0:d.map((function(e,t){var a;return{date:e.dates,val:(null===(a=l[t])||void 0===a?void 0:a.dots)/d[t].dots*100}})),h(j);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){s&&p()}),[]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"lockedTVL-container",children:[b&&Object(u.jsxs)("p",{className:"giant porcentshare",children:[Object(u.jsxs)("strong",{children:[c.porcent,"% "]}),Object(u.jsxs)("small",{children:["(",b[b.length-1].date,")"]})]}),Object(u.jsx)(x.a,{className:"lockedTVL",width:"100%",height:"100%",children:Object(u.jsxs)(v.a,{width:280,height:300,data:b,children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUva",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(u.jsx)(f.a,{dataKey:"date",tick:{fontSize:13}}),Object(u.jsx)(m.a,{content:function(e){var t=e.payload;return null===t||void 0===t?void 0:t.map((function(e,t){return Object(u.jsxs)("p",{className:"giant",children:[Object(u.jsxs)("strong",{children:[e.payload.val.toFixed(2),"% "]}),Object(u.jsxs)("small",{children:["(",e.payload.date,")"]})]},"item-".concat(t))}))},active:!0}),Object(u.jsx)(g.a,{type:"monotone",dataKey:"val",strokeWidth:"3",stroke:"#0C3EE3",dot:!1,fill:"url(#colorUva)"})]})})]})})}var E=a(344),T=a(175);function D(e){var t=null===e||void 0===e?void 0:e.contributions,a=Object.entries(t).map((function(e,t){return{date:e[0],val:e[1]/1e10}}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"dailydot",children:Object(u.jsx)(x.a,{className:"daily-dots",width:"100%",height:"100%",children:Object(u.jsxs)(E.a,{width:"100%",height:300,data:a,margin:{top:5,right:0,left:20,bottom:5},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUvb",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:.9}),Object(u.jsx)("stop",{offset:"57.88%",stopColor:"#0C3EE3",stopOpacity:.95}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"#0C3EE3",stopOpacity:1})]})}),Object(u.jsx)(f.a,{dataKey:"date",tick:{fontSize:13}}),Object(u.jsx)(y.a,{tick:{fontSize:13},orientation:"right",tickFormatter:function(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(e)},minTickGap:20}),Object(u.jsx)(m.a,{content:function(e){var t=e.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.payload.date})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[p(e.payload.val)," DOT "]})})]},"item-".concat(t))}))})}}),Object(u.jsx)(T.a,{dataKey:"val",stroke:"#0C3EE3",fill:"url(#colorUvb)",radius:[4,4,0,0]})]})})})})}var K=a(62);function I(e){var t,a=Object(n.useState)([]),c=Object(d.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)("#0C3EE3"),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(n.useState)("Parallel Finance"),h=Object(d.a)(b,2),O=h[0],v=h[1],g=e.parachain,N=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.stats,w=null===N||void 0===N?void 0:N.map((function(e,t){return k.a.mapKeys(e,(function(e,t){var a=t.substring(0,4);return"date"===a?a:g.find((function(e){return e.paraid===a.toString()})).name}))})),C=w.map((function(e,t){return Object.fromEntries(Object.entries(e).map((function(e){var a=Object(d.a)(e,2),n=a[0],c=a[1];return 0===t||"date"==n?[n,c]:c-parseInt(w[t-1][n])<1?[n,0]:[n,c-parseInt(w[t-1][n])]})))})),F=Object.entries(w[0]).map((function(e){var t=Object(d.a)(e,3),a=t[0];t[1],t[2];if("date"!==a.toString())return{label:a,color:"#0C3EE3",value:s.map((function(e){return e.key}))}}));Object(n.useEffect)((function(){r(C)}),[]);return Object(u.jsxs)(u.Fragment,{children:[0!==F.length&&Object(u.jsx)(K.a,{className:"select-dropdown",options:F.filter((function(e){return e})),placeholder:"Select a Network",onChange:function(e){return[v(e.label),j(e.color)]}}),Object(u.jsxs)("div",{className:"dailydot",children:[Object(u.jsx)("div",{className:"columns dashboard__numbers"}),Object(u.jsx)(x.a,{className:"daily-dots",width:"100%",height:"100%",children:Object(u.jsxs)(E.a,{width:"100%",height:300,data:s,margin:{right:0,top:5,left:20,bottom:5},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUvb",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:.9}),Object(u.jsx)("stop",{offset:"57.88%",stopColor:"#0C3EE3",stopOpacity:.95}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"#0C3EE3",stopOpacity:1})]})}),Object(u.jsx)(f.a,{dataKey:"date",tick:{fontSize:13}}),Object(u.jsx)(y.a,{tick:{fontSize:13},orientation:"right",tickFormatter:function(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(e)},minTickGap:20}),Object(u.jsx)(m.a,{content:function(e){var t=e.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.dataKey})}),Object(u.jsxs)("p",{children:["Date: ",e.payload.date]}),Object(u.jsxs)("p",{children:["Raised : ",p(e.payload[e.dataKey])," DOT"]})]},"item-".concat(t))}))})}}),Object(u.jsx)(T.a,{dataKey:O,fill:l,stroke:l,radius:[4,4,0,0]})]})})]})]})}function W(e){var t=e.src;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{src:t.icon,alt:t.name})},t)})}function A(e){var t=e.width,a=e.bar,n=e.bar2,c=(100-(100*a+100*n)).toFixed(2);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"meter",style:{width:800*t},children:[Object(u.jsx)("span",{style:{width:100*a+"%"},"data-tooltip":(100*a).toFixed(2)+"%"}),Object(u.jsx)("span",{style:{width:parseInt(100*n).toFixed(2)+"%"},"data-tooltip":parseInt(100*n).toFixed(2)+"%"}),Object(u.jsx)("span",{style:{width:c+"%"},"data-tooltip":c+"%"})]})})}function U(e){var t=e.raise,a=e.parachain,c=e.marketShare,s=Object(n.useState)([]),r=Object(d.a)(s,2),i=r[0],o=r[1];Object(n.useEffect)((function(){o(t.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"!==e.status})))}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"filterDetails",children:Object(u.jsx)(K.a,{options:[{label:"All",value:"all"},{label:"AUCTIONS #1-5",value:"auction15"},{label:"AUCTIONS #6-11",value:"auction611"}],defaultValue:{label:"AUCTIONS #6-11",value:"auction611"},onChange:function(e){return function(e){switch(e){case"all":o(t.sort((function(e,t){return t.raised-e.raised})));break;case"auction15":o(t.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"===e.status})));break;case"auction611":o(t.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"!==e.status})))}}(e.value)}})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"network-header flex justify",children:[Object(u.jsx)("h4",{className:"network-name",children:"PROJECT"}),Object(u.jsx)("h4",{className:"network-cap",children:"DOT"}),Object(u.jsx)("h4",{className:"network-auction",children:"% Auction"}),Object(u.jsx)("h4",{className:"network-total",children:"% Total"})]}),Object(u.jsx)("div",{className:"scroleable-box",children:t?null===i||void 0===i?void 0:i.map((function(e){var t=e.paraId,n=e.status,s=e.raised;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"network flex justify",children:a?a.filter((function(e){return e.paraid===t})).map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"network-name",children:[Object(u.jsx)(W,{src:e}),Object(u.jsxs)("span",{children:[e.name,"Won"===n?Object(u.jsxs)("strong",{className:"winner",children:[" ",n," "]}):""]})]}),Object(u.jsx)("p",{className:"network-cap",children:h(s)}),Object(u.jsx)("p",{className:"network-auction",children:O(s/c)+"%"}),Object(u.jsx)("p",{className:"network-total",children:O(s/1e10/"1103303471")+"%"})]})})):"Loading..."},t)})})):"Getting Data"})]})]})}var L=a.p+"static/media/binance.d8c61230.svg",M=a.p+"static/media/network.576efa45.svg",R=a.p+"static/media/parallel.5a293074.svg",B=a(346),Q=a(170),P=a(90);function z(e){var t,a=null===e||void 0===e?void 0:e.data,n=1e10,c=null===e||void 0===e||null===(t=e.share)||void 0===t?void 0:t.share,s=(null===e||void 0===e?void 0:e.share.market)/n,r=!1,i=!1,o=!1,l=!1,d=!1,j=!1;a&&(r=a[0].data.reduce((function(e,t){return parseInt(e)+parseInt(t.votedAmount)}),0),i=a[1].data.reduce((function(e,t){return parseInt(e)+parseInt(t.votedAmount)}),0),console.log(r,i),o=O((r+i)/s),l=O(c/n/s),d=parseFloat(o)+parseFloat(l),j=h((s-r-i-c/n)*n));var b=[{name:"Binance",value:parseInt(o)},{name:"Parallel Finance",value:parseInt(l)},{name:"Others",value:100-d}],p=["#f6cc27","#0c3ee3","#f8f8f8"];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"dominance",children:[Object(u.jsxs)("div",{className:"chart-dominance",children:[Object(u.jsxs)("div",{className:"centered score-text",children:[h(null===e||void 0===e?void 0:e.share.market)," ",Object(u.jsx)("small",{children:"DOT"})]}),Object(u.jsx)(x.a,{width:"100%",height:285,children:Object(u.jsx)(B.a,{children:Object(u.jsxs)(Q.a,{data:b,innerRadius:105,outerRadius:120,cornerRadius:50,paddingAngle:2,dataKey:"value",children:[Object(u.jsx)(m.a,{}),b.map((function(e,t){return Object(u.jsx)(P.a,{fill:p[t%p.length]},"cell-".concat(t))}))]})})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"logo",src:L,alt:"Binance"}),Object(u.jsxs)("p",{children:["Binance ",Object(u.jsxs)("strong",{children:[h((r+i)*n)+" ("+o+"%)","  "]})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"logo",src:R,alt:"Binance"}),Object(u.jsxs)("p",{children:["Parallel Finance ",Object(u.jsx)("strong",{children:c?h(c)+" ("+l+"%)":"getting"})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"logo",src:M,alt:"Binance"}),Object(u.jsxs)("p",{children:["Others ",Object(u.jsx)("strong",{children:c?j+" ("+(100-d).toFixed(2)+"%)":"getting"})]})]})]})})}function V(e){e.price.dotPrice;var t=e.dots,a=t.filter,n=t.totalContributions;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"big",children:p(n)+" Contributions"}),Object(u.jsx)("div",{className:"flex column",children:Object.keys(a).map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("div",{children:function(){switch(e){case"100":return Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"<100"})});case"1000":return Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"100 - 1k"})});case"10000":return Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"1k - 10k"})});case"100000":return Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"10k - 100k"})});default:return null}}()}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"travelcompany-input",children:Object(u.jsxs)("svg",{className:"score small",width:"48",height:"48",viewBox:"-25 -25 400 400",children:[Object(u.jsx)("circle",{className:"score-empty",cx:"175",cy:"175",r:"175",strokeWidth:"25",fill:"none"}),Object(u.jsx)("circle",{className:"js-circle score-circle",transform:"rotate(-90 175 175)",cx:"175",cy:"175",r:"175",strokeDasharray:"1100",strokeDashoffset:1100*(100-(100-O((n-a[e].total)/n)).toFixed(2))/100,strokeWidth:"25",fill:"none"}),Object(u.jsx)("text",{className:"js-text score-text big",x:"50%",y:"55%",dx:"-25",textAnchor:"middle",children:(100-O((n-a[e].total)/n)).toFixed(0)+"%"})]})},t)}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"travelcompany-input",children:Object(u.jsx)("span",{className:"input-label",children:p(a[e].value)})},t)})]})})}))})]})}function G(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),i=Object(d.a)(r,2),o=(i[0],i[1],null===e||void 0===e?void 0:e.raise),l=null===e||void 0===e?void 0:e.contributions,j=null===e||void 0===e?void 0:e.parachain,b=null===e||void 0===e?void 0:e.tvl,x=null===e||void 0===e?void 0:e.htvl,v=null===e||void 0===e?void 0:e.dotAmount,f=null===e||void 0===e?void 0:e.dailyContrib,m=[{}],g=null===e||void 0===e?void 0:e.other,y=k.a.merge(k.a.keyBy(null===e||void 0===e?void 0:e.other[0].data,"id"),k.a.keyBy(null===e||void 0===e?void 0:e.other[1].data,"id")),N=o.reduce((function(e,t){return parseInt(e)+parseInt(t.raised)}),0),E=l.reduce((function(e,t){return parseInt(e)+parseInt(t.total)}),0);m.market=N,m.share=E,m.porcent=O(m.share/m.market),Object(n.useEffect)((function(){s(o.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"!==e.status})))}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsxs)("div",{className:"box tvl half ml-25",children:[Object(u.jsx)("h3",{children:" Total Value Locked "}),b&&Object(u.jsxs)("p",{className:"giant",children:["$",p(b.totalValue)]}),x&&Object(u.jsx)(F,{data:x})]}),Object(u.jsxs)("div",{className:"box half mr-25",children:[Object(u.jsx)("h3",{className:"left",children:"Market Share"}),f&&x&&Object(u.jsx)(S,{market:m,data:x,dailyContrib:f})]})]}),Object(u.jsxs)("div",{className:"box full ",children:[Object(u.jsx)("h3",{children:"Crowdloan by Projects"}),Object(u.jsxs)("div",{className:"selectors",children:[Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"gray"})," Total DOT Raised "]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"blue"})," Raised on Parallel "]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"yellow"})," Raised on Binance "]})]}),Object(u.jsx)("div",{className:"filterDetails",children:Object(u.jsx)(K.a,{options:[{label:"All",value:"all"},{label:"AUCTIONS #1-5",value:"auction15"},{label:"AUCTIONS #6-11",value:"auction611"}],defaultValue:{label:"AUCTIONS #6-11",value:"auction611"},onChange:function(e){return function(e){switch(e){case"all":s(o.sort((function(e,t){return t.raised-e.raised})));break;case"auction15":s(o.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"===e.status})));break;case"auction611":s(o.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"!==e.status})))}}(e.value)}})})]}),o||g?null===c||void 0===c?void 0:c.map((function(e){var t=e.paraId,a=e.raised,n=o[0].raised,c=Object.values(y).filter((function(t){return t.code===e.paraId})),s=c[0]?1e10*c[0].votedAmount:0;return Object(u.jsx)("div",{id:t,children:Object(u.jsxs)("div",{className:"flex",children:[j?null===j||void 0===j?void 0:j.filter((function(e){return e.paraid===t})).map((function(t){return Object(u.jsx)(W,{src:t},e.paraId)})):"Loading...",l?l.filter((function(e){return e.paraId===t})).map((function(t){var c=t.total/a,r=s/a,i=a/n;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"crowdloan-by",children:[Object(u.jsx)(A,{width:i,bar:c,bar2:r},e.paraId),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{className:"marketData",children:[Object(u.jsx)("strong",{children:a?h(a):"0"})," | ",Object(u.jsx)("span",{children:O(c)+"% ("+h(t.total)+")"})]})})]})})})):"Loading..."]})},t)})):"Loading..."]}),Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsxs)("div",{className:"box small dominance-market",children:[Object(u.jsx)("h3",{children:"Market Dominance"}),g&&Object(u.jsx)(z,{data:g,share:m})]}),Object(u.jsxs)("div",{className:"box tvl auctions",children:[Object(u.jsxs)("h3",{children:["DOT Auctions ",Object(u.jsxs)("span",{children:["Total Supply: ",Object(u.jsx)("strong",{children:"1,103,303,471 DOT"})]})]}),Object(u.jsx)(U,{raise:o,parachain:j,marketShare:m.market})]})]}),Object(u.jsxs)("div",{className:"box full",children:[Object(u.jsx)("h3",{children:"Daily Increase of DOT raised during the crowdloan"}),x&&Object(u.jsx)(D,{contributions:x})]}),Object(u.jsxs)("div",{className:"box full",children:[Object(u.jsx)("h3",{children:"Daily Increase of DOT by Project"}),f&&Object(u.jsx)(I,{parachain:j,data:f})]}),Object(u.jsxs)("div",{className:"box half ml-25",children:[Object(u.jsx)("h3",{children:"Crowdloan USD TVL "}),b&&f&&Object(u.jsx)(w,{price:b,dailyContrib:f})]}),Object(u.jsxs)("div",{className:"box half mr-25",children:[Object(u.jsx)("h3",{children:"Crowdloan DOT TVL"}),b&&f&&Object(u.jsx)(C,{price:b,dailyContrib:f})]}),v&&b&&Object(u.jsxs)("div",{className:"box full distribution",children:[Object(u.jsx)("h3",{children:"Contribution Distribution"}),Object(u.jsx)(V,{dots:v,price:b})]})]})}var X=a(116);a(337);var H=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),r=Object(d.a)(s,2),i=r[0],j=r[1],h=Object(n.useState)(),p=Object(d.a)(h,2),O=p[0],x=p[1],v=Object(n.useState)(),f=Object(d.a)(v,2),m=f[0],g=(f[1],Object(n.useState)()),y=Object(d.a)(g,2),N=y[0],k=y[1],w=Object(n.useState)(),C=Object(d.a)(w,2),F=C[0],S=C[1],E=Object(n.useState)(),T=Object(d.a)(E,2),D=T[0],K=T[1],I=Object(n.useState)(),W=Object(d.a)(I,2),A=W[0],U=W[1],L=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn.jsdelivr.net/gh/parallel-finance/auction-toolkit@latest/crowdloans/projects/polkadot.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,U(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/polkadot");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/statistics/polkadot?fundIds=2000-1muqpuFcWvy1Q3tf9Tek882A6ngz46bWPsV6sWiYccnVjKb-0,2002-14e4GmLj5CccWe9Rant9q6yQro1oysqvKiBiHcpCRoscZ1yY-0,2003-1EdsnniYSKNjHNAvDgvBfRNzKnSzi6kgsHQFCG4PhAyyJWH-0,2004-12KHAurRWMFJyxU57S9pQerHsKLCwvWKM1d3dKZVx7gSfkFJ-1,2006-1j5YyEGdcPd9BxkzVNNjKkqdi5f7g3Dd7JMgaGUhsMrZ6dZ-0,2012-15kjdKF4hRbYWzLjovPiohT5pVheXhhk8oKHr3DyTaxF2evd-0,2013-152deMvsN7wxMbSmdApsds6LWNNNGgsJ8TTpZLTD2ipEHNg3-0,2015-1k9St8FDkcTVSe6HzSRQivYi3qgRuQfQp8btpVMrdTFs99S-0,2017-16RzEcgXVzXXn2gEQbqqp74Pw7MJSb7PKtz29BhVZmpXBKRn-0,2018-13n7S6wAFjSqppxyjfSxcPNqQv5jL7PYtxjg3Gxw3RALpyBk-0,2019-12EXcpt1CwnSAF9d7YWrh91bQw6R5wmCpJUXPWi7vn2CZFpJ-0,2021-12LxQoLA9hebiMSPT3G7ixz73LLuYomMNuRLqX7c9bRWxDFG-0,2028-13pQt6LnK2tXZtXbiQ6PBYikEoNTi6MXkeBdQCeyR9hm6k1p-0,2026-16LKv69ct6xDzSiUjuz154vCg62dkyysektHFCeJe85xb6X-0,2008-13QrQ7Xos6bseivYW3xRjvi4T2iHihxVnTrQgyHmWGTNv972-0,2027-14r48SVtMrJKxUWD9ijDy8aQU3asTXja8qny9mzXTutdByju-0,2028-13pQt6LnK2tXZtXbiQ6PBYikEoNTi6MXkeBdQCeyR9hm6k1p-0,2031-143pzStAtMv3RbYbcHyr2xHipWPkme8VjVgAr4QDQP8d3Xrc-0,2032-14gZicKnmFj3238utrQ6B7CGWBeNGntKUyoUHqoTN85FnHWk-0");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,K(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/polkadot/contributions");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,j(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/total-value");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,x(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/historical-tvl");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,k(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.binance.com/bapi/earn/v1/public/lending/dot/project/home/list?auctioning=true");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,fetch("https://www.binance.com/bapi/earn/v1/public/lending/dot/project/home/list?auctioning=false");case 8:return n=e.sent,e.next=11,n.json();case 11:c=e.sent,S([a,c]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){function e(){L(),R(),M(),B(),Q(),z(),P()}X.a.initialize("UA-212480889-2"),X.a.pageview("Homepage"),e(),setInterval((function(){e()}),3e4)}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b,{}),a&&A&&i&&F&&Object(u.jsx)(G,{raise:a,parachain:A,contributions:i,dailyContrib:D,tvl:O,htvl:N,other:F,dotAmount:m})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))}},[[338,1,2]]]);
//# sourceMappingURL=main.022d7fb1.chunk.js.map