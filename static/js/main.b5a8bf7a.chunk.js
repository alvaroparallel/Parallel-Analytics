(this.webpackJsonpanalytics=this.webpackJsonpanalytics||[]).push([[0],{184:function(t,e,a){},337:function(t,e,a){},338:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(44),r=a.n(s),i=(a(184),a(18)),o=a.n(i),l=a(25),d=a(11),j=a.p+"static/media/logo.f948a1cf.svg",u=a(1);function b(){return Object(u.jsx)("header",{children:Object(u.jsx)("img",{src:j,alt:"Parallel Analytics"})})}function h(t){var e=t/1e10;return Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(2)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e)).toFixed(2)}function p(t){return parseFloat(t.toFixed(2)).toLocaleString("en-US")}function x(t){return(100*t).toFixed(2)}var O=a(339),v=a(340),m=a(87),f=a(74),g=a(167),y=a(88),N=a(20),k=a.n(N);function w(t){var e,a,c=null===t||void 0===t||null===(e=t.dailyContrib)||void 0===e?void 0:e.stats,s=Object(n.useState)(),r=Object(d.a)(s,2),i=r[0],j=r[1],b=Object(n.useState)(),h=Object(d.a)(b,2),x=h[0],N=h[1],w=function(){var t=Object(l.a)(o.a.mark((function t(){var e,n,s,r,i,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://min-api.cryptocompare.com/data/v2/histoday?fsym=DOT&tsym=USD&limit="+Object.keys(c).length);case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a=n.Data.Data,s=c.map((function(t,e){var a;return{dates:null===t||void 0===t||null===(a=t.date)||void 0===a?void 0:a.replace(", 2021","")}})),r=c.map((function(t,e){return delete t.date,t})),i=r.map((function(t,e){return{dots:k.a.sum(k.a.values(r[e])),value:k.a.sum(k.a.values(r[e]))*a[e].close}})),l=k.a.merge(s,i),j(l),N(((i[i.length-1].value-i[i.length-2].value)/i[i.length-1].value*100).toFixed(2));case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){w()}),[]);return a?"loading":Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"big",children:[i?"$"+p(parseFloat(i[i.length-1].value)):"",x&&Object(u.jsx)("span",{className:x.includes("-")?"negative variation":"positive variation",children:x.includes("-")?x+"%":"+"+x+"%"})]}),i&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"globalTvl",children:Object(u.jsx)(O.a,{className:"crowdloantvl",width:"100%",height:220,debounce:1,children:Object(u.jsxs)(v.a,{width:"100%",height:220,data:i,stroke:3,margin:{top:10,left:10,right:-10,bottom:0},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(u.jsx)(m.a,{dataKey:"dates",hide:!0}),Object(u.jsx)(f.a,{content:function(t){var e=t.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:e.map((function(t,e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:t.payload.dates})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[p(t.payload.dots)," DOT "]})}),Object(u.jsxs)("p",{className:"small-gray",children:["$ ",p(t.payload.value)]})]},"item-".concat(e))}))})}}),Object(u.jsx)(g.a,{scaleToFit:!0,type:"monotone",dataKey:"value",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"}),Object(u.jsx)(y.a,{orientation:"right",tickFormatter:function(t){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(t)}})]})})})})]})}function C(t){var e,a=null===t||void 0===t||null===(e=t.dailyContrib)||void 0===e?void 0:e.stats,c=Object(n.useState)(),s=Object(d.a)(c,2),r=s[0],i=s[1],j=Object(n.useState)(),b=Object(d.a)(j,2),h=b[0],x=b[1],N=function(){var t=Object(l.a)(o.a.mark((function t(){var e,n,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=a.map((function(t,e){var a;return{dates:null===t||void 0===t||null===(a=t.date)||void 0===a?void 0:a.replace(", 2021","")}})),n=a.map((function(t,e){return delete t.date,t})),c=n.map((function(t,e){return{dots:k.a.sum(k.a.values(n[e])),value:k.a.sum(k.a.values(n[e]))}})),s=k.a.merge(e,c),i(s),x(((c[c.length-1].value-c[c.length-2].value)/c[c.length-1].value*100).toFixed(2));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){N()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"big",children:[r?p(parseFloat(r[r.length-1].value))+" DOT":"",h&&Object(u.jsx)("span",{className:h.includes("-")?"negative variation":"positive variation",children:h.includes("-")?h+"%":"+"+h+"%"})]}),r&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"globalTvl",children:Object(u.jsx)(O.a,{className:"crowdloantvl",width:"100%",height:220,debounce:1,children:Object(u.jsxs)(v.a,{width:"100%",height:220,data:r,stroke:3,margin:{top:10,left:10,right:-10,bottom:0},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(u.jsx)(m.a,{dataKey:"dates",hide:!0}),Object(u.jsx)(f.a,{content:function(t){var e=t.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:e.map((function(t,e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:t.payload.dates})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[p(t.payload.dots)," DOT "]})})]},"item-".concat(e))}))})}}),Object(u.jsx)(g.a,{scaleToFit:!0,type:"monotone",dataKey:"value",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"}),Object(u.jsx)(y.a,{orientation:"right",tickFormatter:function(t){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(t)}})]})})})})]})}function F(t){var e=null===t||void 0===t?void 0:t.data,a=Object.entries(e),c=a.map((function(t,e){return{date:t[0],val:t[1]/1e10}})),s=Object(n.useState)(),r=Object(d.a)(s,2),i=r[0],o=r[1];Object(n.useEffect)((function(){var t="https://min-api.cryptocompare.com/data/v2/histoday?fsym=DOT&tsym=USD&limit="+Object.keys(a).length;fetch(t).then((function(t){return t.json()})).then((function(t){var e=t.Data.Data,a=c.reduce((function(t,e,a){var n=e.val,c={date:e.date,val:n+(0===a?0:t[a-1].val)};return t.push(c),t}),[]).map((function(t,a){return{date:t.date,val:t.val,usd:t.val*e[a].close}}));o(a)}))}),[]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(O.a,{width:"100%",height:"100%",children:Object(u.jsxs)(v.a,{width:600,height:200,data:i,margin:{top:10,left:0,bottom:0},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(u.jsx)(m.a,{dataKey:"date",tick:{fontSize:13}}),Object(u.jsx)(f.a,{content:function(t){var e=t.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:null===e||void 0===e?void 0:e.map((function(t,e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:t.payload.date})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[p(t.value)," DOT "]})}),Object(u.jsxs)("p",{className:"small-gray",children:["($",p(t.payload.usd),")"]})]},"item-".concat(e))}))})}}),Object(u.jsx)(g.a,{type:"monotone",dataKey:"val",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"})]})})})}function E(t){var e,a=null===t||void 0===t?void 0:t.data,c=t.market,s=null===t||void 0===t||null===(e=t.dailyContrib)||void 0===e?void 0:e.stats,r="",i=Object(n.useState)(!1),j=Object(d.a)(i,2),b=j[0],h=j[1],p=function(){var t=Object(l.a)(o.a.mark((function t(){var e,n,c,i,l,d,j;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=Object.entries(a),n=e.map((function(t,e){return{date:t[0],val:t[1]/1e10}})),r=null===s||void 0===s?void 0:s.map((function(t,e){var a;return{dates:null===t||void 0===t||null===(a=t.date)||void 0===a?void 0:a.replace(", 2021","")}})),c=s.map((function(t,e){return delete t.date,t})),i=c.map((function(t,e){return{dots:k.a.sum(k.a.values(c[e]))}})),l=n.reduce((function(t,e,a){var n=e.val,c={date:e.date,val:n+(0===a?0:t[a-1].val)};return t.push(c),t}),[]).map((function(t,e){return{date:t.date,dots:t.val}})),d=k.a.merge(r,i),j=d.map((function(t,e){return{date:t.dates,val:l[e].dots/d[e].dots*100}})),h(j);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){s&&p()}),[]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"lockedTVL-container",children:[b&&Object(u.jsxs)("p",{className:"giant porcentshare",children:[Object(u.jsxs)("strong",{children:[c.porcent,"% "]}),Object(u.jsxs)("small",{children:["(",b[b.length-1].date,")"]})]}),Object(u.jsx)(O.a,{className:"lockedTVL",width:"100%",height:"100%",children:Object(u.jsxs)(v.a,{width:280,height:300,data:b,children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUva",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(u.jsx)(m.a,{dataKey:"date",tick:{fontSize:13}}),Object(u.jsx)(f.a,{content:function(t){var e=t.payload;return null===e||void 0===e?void 0:e.map((function(t,e){return Object(u.jsxs)("p",{className:"giant",children:[Object(u.jsxs)("strong",{children:[t.payload.val.toFixed(2)," % "]}),Object(u.jsxs)("small",{children:["(",t.payload.date,")"]})]},"item-".concat(e))}))},active:!0}),Object(u.jsx)(g.a,{type:"monotone",dataKey:"val",strokeWidth:"3",stroke:"#0C3EE3",dot:!1,fill:"url(#colorUva)"})]})})]})})}var S=a(344),T=a(175);function D(t){var e=null===t||void 0===t?void 0:t.contributions,a=Object.entries(e).map((function(t,e){return{date:t[0],val:t[1]/1e10}}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"dailydot",children:Object(u.jsx)(O.a,{className:"daily-dots",width:"100%",height:"100%",children:Object(u.jsxs)(S.a,{width:"100%",height:300,data:a,margin:{top:5,right:0,left:20,bottom:5},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUvb",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:.9}),Object(u.jsx)("stop",{offset:"57.88%",stopColor:"#0C3EE3",stopOpacity:.95}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"#0C3EE3",stopOpacity:1})]})}),Object(u.jsx)(m.a,{dataKey:"date",tick:{fontSize:13}}),Object(u.jsx)(y.a,{tick:{fontSize:13},orientation:"right",tickFormatter:function(t){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(t)},minTickGap:20}),Object(u.jsx)(f.a,{content:function(t){var e=t.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:null===e||void 0===e?void 0:e.map((function(t,e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:t.payload.date})}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[p(t.payload.val)," DOT "]})})]},"item-".concat(e))}))})}}),Object(u.jsx)(T.a,{dataKey:"val",stroke:"#0C3EE3",fill:"url(#colorUvb)",radius:[4,4,0,0]})]})})})})}var K=a(173);function I(t){var e,a=Object(n.useState)([]),c=Object(d.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)("#0C3EE3"),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(n.useState)("Acala"),h=Object(d.a)(b,2),x=h[0],v=h[1],g=t.parachain,N=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats,w=null===N||void 0===N?void 0:N.map((function(t,e){return k.a.mapKeys(t,(function(t,e){var a=e.substring(0,4);return"date"===a?a:g.find((function(t){return t.paraid===a.toString()})).name}))})),C=w.map((function(t,e){return Object.fromEntries(Object.entries(t).map((function(t){var a=Object(d.a)(t,2),n=a[0],c=a[1];return 0===e||"date"==n?[n,c]:c-parseInt(w[e-1][n])<1?[n,0]:[n,c-parseInt(w[e-1][n])]})))})),F=Object.entries(w[0]).map((function(t){var e=Object(d.a)(t,3),a=e[0];e[1],e[2];if("date"!==a.toString())return{label:a,color:"#0C3EE3",value:s.map((function(t){return t.key}))}}));Object(n.useEffect)((function(){r(C)}),[]);return Object(u.jsxs)(u.Fragment,{children:[0!==F.length&&Object(u.jsx)(K.a,{className:"select-dropdown",options:F.filter((function(t){return t})),placeholder:"Select a Network",onChange:function(t){return[v(t.label),j(t.color)]}}),Object(u.jsxs)("div",{className:"dailydot",children:[Object(u.jsx)("div",{className:"columns dashboard__numbers"}),Object(u.jsx)(O.a,{className:"daily-dots",width:"100%",height:"100%",children:Object(u.jsxs)(S.a,{width:"100%",height:300,data:s,margin:{right:0,top:5,left:20,bottom:5},children:[Object(u.jsx)("defs",{children:Object(u.jsxs)("linearGradient",{id:"colorUvb",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(u.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:.9}),Object(u.jsx)("stop",{offset:"57.88%",stopColor:"#0C3EE3",stopOpacity:.95}),Object(u.jsx)("stop",{offset:"97.88%",stopColor:"#0C3EE3",stopOpacity:1})]})}),Object(u.jsx)(m.a,{dataKey:"date",tick:{fontSize:13}}),Object(u.jsx)(y.a,{tick:{fontSize:13},orientation:"right",tickFormatter:function(t){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(t)},minTickGap:20}),Object(u.jsx)(f.a,{content:function(t){var e=t.payload;return Object(u.jsx)("ul",{className:"tvl-tooltip",children:null===e||void 0===e?void 0:e.map((function(t,e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:t.dataKey})}),Object(u.jsxs)("p",{children:["Date: ",t.payload.date]}),Object(u.jsxs)("p",{children:["Raised : ",p(t.payload[t.dataKey])," DOT"]})]},"item-".concat(e))}))})}}),Object(u.jsx)(T.a,{dataKey:x,fill:l,stroke:l,radius:[4,4,0,0]})]})})]})]})}function L(t){var e=t.src;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{src:e.icon,alt:e.name})},e)})}function M(t){var e=t.width,a=t.bar,n=t.bar2,c=(100-(100*a+100*n)).toFixed(2);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"meter",style:{width:800*e},children:[Object(u.jsx)("span",{style:{width:100*a+"%"},"data-tooltip":(100*a).toFixed(2)+"%"}),Object(u.jsx)("span",{style:{width:parseInt(100*n).toFixed(2)+"%"},"data-tooltip":parseInt(100*n).toFixed(2)+"%"}),Object(u.jsx)("span",{style:{width:c+"%"},"data-tooltip":c+"%"})]})})}function R(t){var e=t.raise,a=t.parachain,n=t.marketShare;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"network-header flex justify",children:[Object(u.jsx)("h4",{className:"network-name",children:"PROJECT"}),Object(u.jsx)("h4",{className:"network-cap",children:"DOT"}),Object(u.jsx)("h4",{className:"network-auction",children:"% Auction"}),Object(u.jsx)("h4",{className:"network-total",children:"% Total"})]}),Object(u.jsx)("div",{children:e?e.sort((function(t,e){return e.raised-t.raised})).filter((function(t){return"2026"!==t.paraId})).map((function(t){var e=t.paraId,c=t.status,s=t.raised;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"network flex justify",children:a?a.filter((function(t){return t.paraid===e})).map((function(t){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"network-name",children:[Object(u.jsx)(L,{src:t}),Object(u.jsxs)("span",{children:[t.name,"Won"===c?Object(u.jsxs)("strong",{className:"winner",children:[" ",c," "]}):""]})]}),Object(u.jsx)("p",{className:"network-cap",children:h(s)}),Object(u.jsx)("p",{className:"network-auction",children:x(s/n)+"%"}),Object(u.jsx)("p",{className:"network-total",children:x(s/1e10/"1103303471")+"%"})]})})):"Loading..."},e)})})):"Getting Data"})]})})}var W=a.p+"static/media/binance.d8c61230.svg",B=a.p+"static/media/network.576efa45.svg",Q=a.p+"static/media/parallel.5a293074.svg",U=a(346),A=a(169),P=a(89);function z(t){var e,a=null===t||void 0===t?void 0:t.data,n=1e10,c=null===t||void 0===t||null===(e=t.share)||void 0===e?void 0:e.share,s=(null===t||void 0===t?void 0:t.share.market)/n,r=!1,i=!1,o=!1,l=!1,d=!1,j=!1;a&&(o=x(((r=a[0].data.reduce((function(t,e){return parseInt(t)+parseInt(e.votedAmount)}),0))+(i=a[1].data.reduce((function(t,e){return parseInt(t)+parseInt(e.votedAmount)}),0)))/s),l=x(c/n/s),d=parseFloat(o)+parseFloat(l),j=h((s-r-i-c/n)*n));var b=[{name:"Binance",value:parseInt(o)},{name:"Parallel Finance",value:parseInt(l)},{name:"Others",value:100-d}],p=["#f6cc27","#0c3ee3","#f8f8f8"];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"dominance",children:[Object(u.jsxs)("div",{className:"chart-dominance",children:[Object(u.jsxs)("div",{className:"centered score-text",children:[h(null===t||void 0===t?void 0:t.share.market)," ",Object(u.jsx)("small",{children:"DOT"})]}),Object(u.jsx)(O.a,{width:"100%",height:285,children:Object(u.jsx)(U.a,{children:Object(u.jsxs)(A.a,{data:b,innerRadius:105,outerRadius:120,cornerRadius:50,paddingAngle:2,dataKey:"value",children:[Object(u.jsx)(f.a,{}),b.map((function(t,e){return Object(u.jsx)(P.a,{fill:p[e%p.length]},"cell-".concat(e))}))]})})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"logo",src:W,alt:"Binance"}),Object(u.jsxs)("p",{children:["Binance ",Object(u.jsxs)("strong",{children:[r?h((r+i)*n)+" ("+o+"%)":"loading","  "]})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"logo",src:Q,alt:"Binance"}),Object(u.jsxs)("p",{children:["Parallel Finance ",Object(u.jsx)("strong",{children:c?h(c)+" ("+l+"%)":"getting"})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"logo",src:B,alt:"Binance"}),Object(u.jsxs)("p",{children:["Others ",Object(u.jsx)("strong",{children:c?j+" ("+(100-d).toFixed(2)+"%)":"getting"})]})]})]})})}function G(t){t.price.dotPrice;var e=t.dots,a=e.filter,n=e.totalContributions;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"big",children:p(n)+" Contributions"}),Object(u.jsx)("div",{className:"flex column",children:Object.keys(a).map((function(t,e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("div",{children:function(){switch(t){case"100":return Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"<100"})});case"1000":return Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"100 - 1k"})});case"10000":return Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"1k - 10k"})});case"100000":return Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"10k - 100k"})});default:return null}}()}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"travelcompany-input",children:Object(u.jsxs)("svg",{className:"score small",width:"48",height:"48",viewBox:"-25 -25 400 400",children:[Object(u.jsx)("circle",{className:"score-empty",cx:"175",cy:"175",r:"175",strokeWidth:"25",fill:"none"}),Object(u.jsx)("circle",{className:"js-circle score-circle",transform:"rotate(-90 175 175)",cx:"175",cy:"175",r:"175",strokeDasharray:"1100",strokeDashoffset:1100*(100-(100-x((n-a[t].total)/n)).toFixed(2))/100,strokeWidth:"25",fill:"none"}),Object(u.jsx)("text",{className:"js-text score-text big",x:"50%",y:"55%",dx:"-25",textAnchor:"middle",children:(100-x((n-a[t].total)/n)).toFixed(0)+"%"})]})},e)}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"travelcompany-input",children:Object(u.jsx)("span",{className:"input-label",children:p(a[t].value)})},e)})]})})}))})]})}function V(t){var e=null===t||void 0===t?void 0:t.raise,a=null===t||void 0===t?void 0:t.contributions,n=null===t||void 0===t?void 0:t.parachain,c=null===t||void 0===t?void 0:t.tvl,s=null===t||void 0===t?void 0:t.htvl,r=null===t||void 0===t?void 0:t.dotAmount,i=null===t||void 0===t?void 0:t.dailyContrib,o=[{}],l=null===t||void 0===t?void 0:t.other,d=k.a.merge(k.a.keyBy(null===t||void 0===t?void 0:t.other[0].data,"id"),k.a.keyBy(null===t||void 0===t?void 0:t.other[1].data,"id")),j=e.reduce((function(t,e){return parseInt(t)+parseInt(e.raised)}),0),b=a.reduce((function(t,e){return parseInt(t)+parseInt(e.total)}),0);return o.market=j,o.share=b,o.porcent=x(o.share/o.market),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsxs)("div",{className:"box tvl half ml-25",children:[Object(u.jsx)("h3",{children:" Total Value Locked "}),c&&Object(u.jsxs)("p",{className:"giant",children:["$",p(c.totalValue)]}),s&&Object(u.jsx)(F,{data:s})]}),Object(u.jsxs)("div",{className:"box half mr-25",children:[Object(u.jsx)("h3",{className:"left",children:"Market Share"}),i&&s&&Object(u.jsx)(E,{market:o,data:s,dailyContrib:i})]})]}),Object(u.jsxs)("div",{className:"box full ",children:[Object(u.jsx)("h3",{children:"Crowdloan by Projects"}),Object(u.jsx)("div",{className:"selectors",children:Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"gray"})," Total DOT Raised "]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"blue"})," Raised on Parallel "]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"yellow"})," Raised on Binance "]})]})}),e||l?e.sort((function(t,e){return e.raised-t.raised})).filter((function(t){return"2050"!==t.paraId})).map((function(t){var c=t.paraId,s=t.raised,r=e[0].raised,i=Object.values(d).filter((function(e){return e.code===t.paraId})),o=i[0]?1e10*i[0].votedAmount:0;return Object(u.jsx)("div",{id:c,children:Object(u.jsxs)("div",{className:"flex",children:[n?null===n||void 0===n?void 0:n.filter((function(t){return t.paraid===c})).map((function(e){return Object(u.jsx)(L,{src:e},t.paraId)})):"Loading...",a?a.filter((function(t){return t.paraId===c})).map((function(e){var a=e.total/s,n=o/s,c=s/r;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"crowdloan-by",children:[Object(u.jsx)(M,{width:c,bar:a,bar2:n},t.paraId),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{className:"marketData",children:[Object(u.jsx)("strong",{children:s?h(s):"0"})," | ",Object(u.jsx)("span",{children:x(a)+"% ("+h(e.total)+")"})]})})]})})})):"Loading..."]})},c)})):"Loading..."]}),Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsxs)("div",{className:"box small dominance-market",children:[Object(u.jsx)("h3",{children:"Market Dominance"}),l&&Object(u.jsx)(z,{data:l,share:o})]}),Object(u.jsxs)("div",{className:"box tvl auctions",children:[Object(u.jsxs)("h3",{children:["DOT Auctions ",Object(u.jsxs)("span",{children:["Total Supply: ",Object(u.jsx)("strong",{children:"1,103,303,471 DOT"})]})]}),Object(u.jsx)(R,{raise:e,parachain:n,marketShare:o.market})]})]}),Object(u.jsxs)("div",{className:"box full",children:[Object(u.jsx)("h3",{children:"Daily Increase of DOT by Project"}),i&&Object(u.jsx)(I,{parachain:n,data:i})]}),Object(u.jsxs)("div",{className:"box full",children:[Object(u.jsx)("h3",{children:"Daily Increase of DOT raised during the crowdloan"}),s&&Object(u.jsx)(D,{contributions:s})]}),Object(u.jsxs)("div",{className:"box half ml-25",children:[Object(u.jsx)("h3",{children:"Crowdloan USD TVL "}),c&&i&&Object(u.jsx)(w,{price:c,dailyContrib:i})]}),Object(u.jsxs)("div",{className:"box half mr-25",children:[Object(u.jsx)("h3",{children:"Crowdloan DOT TVL"}),c&&i&&Object(u.jsx)(C,{price:c,dailyContrib:i})]}),r&&c&&Object(u.jsxs)("div",{className:"box full distribution",children:[Object(u.jsx)("h3",{children:"Contribution Distribution"}),Object(u.jsx)(G,{dots:r,price:c})]})]})}var X=a(115);a(337);var H=function(){var t=Object(n.useState)(),e=Object(d.a)(t,2),a=e[0],c=e[1],s=Object(n.useState)(),r=Object(d.a)(s,2),i=r[0],j=r[1],h=Object(n.useState)(),p=Object(d.a)(h,2),x=p[0],O=p[1],v=Object(n.useState)(),m=Object(d.a)(v,2),f=m[0],g=(m[1],Object(n.useState)()),y=Object(d.a)(g,2),N=y[0],k=y[1],w=Object(n.useState)(),C=Object(d.a)(w,2),F=C[0],E=C[1],S=Object(n.useState)(),T=Object(d.a)(S,2),D=T[0],K=T[1],I=Object(n.useState)(),L=Object(d.a)(I,2),M=L[0],R=L[1],W=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cdn.jsdelivr.net/gh/parallel-finance/auction-toolkit@latest/crowdloans/projects/polkadot.json");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,R(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/polkadot");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,c(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/statistics/polkadot?fundIds=2000-1muqpuFcWvy1Q3tf9Tek882A6ngz46bWPsV6sWiYccnVjKb-0,2002-14e4GmLj5CccWe9Rant9q6yQro1oysqvKiBiHcpCRoscZ1yY-0,2003-1EdsnniYSKNjHNAvDgvBfRNzKnSzi6kgsHQFCG4PhAyyJWH-0,2004-12KHAurRWMFJyxU57S9pQerHsKLCwvWKM1d3dKZVx7gSfkFJ-1,2006-1j5YyEGdcPd9BxkzVNNjKkqdi5f7g3Dd7JMgaGUhsMrZ6dZ-0,2012-15kjdKF4hRbYWzLjovPiohT5pVheXhhk8oKHr3DyTaxF2evd-0,2013-152deMvsN7wxMbSmdApsds6LWNNNGgsJ8TTpZLTD2ipEHNg3-0,2015-1k9St8FDkcTVSe6HzSRQivYi3qgRuQfQp8btpVMrdTFs99S-0,2017-16RzEcgXVzXXn2gEQbqqp74Pw7MJSb7PKtz29BhVZmpXBKRn-0,2018-13n7S6wAFjSqppxyjfSxcPNqQv5jL7PYtxjg3Gxw3RALpyBk-0,2019-12EXcpt1CwnSAF9d7YWrh91bQw6R5wmCpJUXPWi7vn2CZFpJ-0,2021-12LxQoLA9hebiMSPT3G7ixz73LLuYomMNuRLqX7c9bRWxDFG-0,2028-13pQt6LnK2tXZtXbiQ6PBYikEoNTi6MXkeBdQCeyR9hm6k1p-0,2026-16LKv69ct6xDzSiUjuz154vCg62dkyysektHFCeJe85xb6X-0,2008-13QrQ7Xos6bseivYW3xRjvi4T2iHihxVnTrQgyHmWGTNv972-0,2027-14r48SVtMrJKxUWD9ijDy8aQU3asTXja8qny9mzXTutdByju-0,2028-13pQt6LnK2tXZtXbiQ6PBYikEoNTi6MXkeBdQCeyR9hm6k1p-0,2031-143pzStAtMv3RbYbcHyr2xHipWPkme8VjVgAr4QDQP8d3Xrc-0,2032-14gZicKnmFj3238utrQ6B7CGWBeNGntKUyoUHqoTN85FnHWk-0");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,K(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/polkadot/contributions");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,j(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/total-value");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,O(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/historical-tvl");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,k(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.binance.com/bapi/earn/v1/public/lending/dot/project/home/list?auctioning=true");case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.next=8,fetch("https://www.binance.com/bapi/earn/v1/public/lending/dot/project/home/list?auctioning=false");case 8:return n=t.sent,t.next=11,n.json();case 11:c=t.sent,E([a,c]);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){function t(){W(),Q(),B(),U(),A(),z(),P()}X.a.initialize("UA-212480889-2"),X.a.pageview("Homepage"),t(),setInterval((function(){t()}),3e4)}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b,{}),a&&M&&i&&F&&Object(u.jsx)(V,{raise:a,parachain:M,contributions:i,dailyContrib:D,tvl:x,htvl:N,other:F,dotAmount:f})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))}},[[338,1,2]]]);
//# sourceMappingURL=main.b5a8bf7a.chunk.js.map