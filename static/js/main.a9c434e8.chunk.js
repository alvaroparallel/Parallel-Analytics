(this.webpackJsonpanalytics=this.webpackJsonpanalytics||[]).push([[0],{185:function(e,t,n){},338:function(e,t,n){},339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(45),s=n.n(c),i=(n(185),n(12)),o=n.n(i),l=n(21),u=n(9),d=n.p+"static/media/logo.f948a1cf.svg",j=n(1);function b(){return Object(j.jsx)("header",{children:Object(j.jsx)("img",{src:d,alt:"Parallel Analytics"})})}function p(e){var t=e/1e10;return Math.abs(Number(t))>=1e9?(Math.abs(Number(t))/1e9).toFixed(2)+"B":Math.abs(Number(t))>=1e6?(Math.abs(Number(t))/1e6).toFixed(2)+"M":Math.abs(Number(t))>=1e3?(Math.abs(Number(t))/1e3).toFixed(2)+"K":Math.abs(Number(t)).toFixed(2)}function h(e){return parseFloat(e.toFixed(2)).toLocaleString("en-US")}function f(e){return(100*e).toFixed(2)}var x=n(340),O=n(341),v=n(89),m=n(76),y=n(169),g=n(90),k=n(20),N=n.n(k);function w(e){var t,n,r=null===e||void 0===e||null===(t=e.dailyContrib)||void 0===t?void 0:t.stats,c=Object(a.useState)(),s=Object(u.a)(c,2),i=s[0],d=s[1],b=Object(a.useState)(),p=Object(u.a)(b,2),f=p[0],k=p[1],w=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,c,s,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://min-api.cryptocompare.com/data/v2/histoday?fsym=DOT&tsym=USD&limit="+Object.keys(r).length);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.Data.Data,c=r.map((function(e,t){var n;return{dates:null===e||void 0===e||null===(n=e.date)||void 0===n?void 0:n.replace(", 2021","")}})),s=r.map((function(e,t){return delete e.date,e})),i=s.map((function(e,t){return{dots:N.a.sum(N.a.values(s[t])),value:N.a.sum(N.a.values(s[t]))*n[t].close}})),l=N.a.merge(c,i),d(l),k(((i[i.length-1].value-i[i.length-2].value)/i[i.length-1].value*100).toFixed(2));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){w()}),[]);return n?"loading":Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{className:"big",children:[i?"$"+h(parseFloat(i[i.length-1].value)):"",f&&Object(j.jsx)("span",{className:f.includes("-")?"negative variation":"positive variation",children:f.includes("-")?f+"%":"+"+f+"%"})]}),i&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"globalTvl",children:Object(j.jsx)(x.a,{className:"crowdloantvl",width:"100%",height:220,debounce:1,children:Object(j.jsxs)(O.a,{width:"100%",height:220,data:i,stroke:3,margin:{top:10,left:10,right:-10,bottom:0},children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(j.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(j.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(j.jsx)(v.a,{dataKey:"dates",hide:!0}),Object(j.jsx)(m.a,{content:function(e){var t=e.payload;return Object(j.jsx)("ul",{className:"tvl-tooltip",children:t.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.payload.dates})}),Object(j.jsx)("p",{children:Object(j.jsxs)("strong",{children:[h(e.payload.dots)," DOT "]})}),Object(j.jsxs)("p",{className:"small-gray",children:["$ ",h(e.payload.value)]})]},"item-".concat(t))}))})}}),Object(j.jsx)(y.a,{scaleToFit:!0,type:"monotone",dataKey:"value",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"}),Object(j.jsx)(g.a,{orientation:"right",tickFormatter:function(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(e)}})]})})})})]})}function F(e){var t,n=null===e||void 0===e||null===(t=e.dailyContrib)||void 0===t?void 0:t.stats,r=Object(a.useState)(),c=Object(u.a)(r,2),s=c[0],i=c[1],d=Object(a.useState)(),b=Object(u.a)(d,2),p=b[0],f=b[1],k=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.map((function(e,t){var n;return{dates:null===e||void 0===e||null===(n=e.date)||void 0===n?void 0:n.replace(", 2021","")}})),a=n.map((function(e,t){return delete e.date,e})),r=a.map((function(e,t){return{dots:N.a.sum(N.a.values(a[t])),value:N.a.sum(N.a.values(a[t]))}})),c=N.a.merge(t,r),i(c),f(((r[r.length-1].value-r[r.length-2].value)/r[r.length-1].value*100).toFixed(2));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){k()}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{className:"big",children:[s?h(parseFloat(s[s.length-1].value))+" DOT":"",p&&Object(j.jsx)("span",{className:p.includes("-")?"negative variation":"positive variation",children:p.includes("-")?p+"%":"+"+p+"%"})]}),s&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"globalTvl",children:Object(j.jsx)(x.a,{className:"crowdloantvl",width:"100%",height:220,debounce:1,children:Object(j.jsxs)(O.a,{width:"100%",height:220,data:s,stroke:3,margin:{top:10,left:10,right:-10,bottom:0},children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(j.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(j.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(j.jsx)(v.a,{dataKey:"dates",hide:!0}),Object(j.jsx)(m.a,{content:function(e){var t=e.payload;return Object(j.jsx)("ul",{className:"tvl-tooltip",children:t.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.payload.dates})}),Object(j.jsx)("p",{children:Object(j.jsxs)("strong",{children:[h(e.payload.dots)," DOT "]})})]},"item-".concat(t))}))})}}),Object(j.jsx)(y.a,{scaleToFit:!0,type:"monotone",dataKey:"value",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"}),Object(j.jsx)(g.a,{orientation:"right",tickFormatter:function(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(e)}})]})})})})]})}function C(e){var t=null===e||void 0===e?void 0:e.data,n=Object.entries(t),r=n.map((function(e,t){return{date:e[0],val:e[1]/1e10}})),c=Object(a.useState)(),s=Object(u.a)(c,2),i=s[0],o=s[1];Object(a.useEffect)((function(){var e="https://min-api.cryptocompare.com/data/v2/histoday?fsym=DOT&tsym=USD&limit="+Object.keys(n).length;fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.Data.Data,n=r.reduce((function(e,t,n){var a=t.val,r={date:t.date,val:a+(0===n?0:e[n-1].val)};return e.push(r),e}),[]).map((function(e,n){return{date:e.date,val:e.val,usd:e.val*t[n].close}}));o(n)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(x.a,{width:"100%",height:"100%",children:Object(j.jsxs)(O.a,{width:600,height:200,data:i,margin:{top:10,left:0,bottom:0},children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(j.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(j.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(j.jsx)(v.a,{dataKey:"date",tick:{fontSize:13}}),Object(j.jsx)(m.a,{content:function(e){var t=e.payload;return Object(j.jsx)("ul",{className:"tvl-tooltip",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.payload.date})}),Object(j.jsx)("p",{children:Object(j.jsxs)("strong",{children:[h(e.value)," DOT "]})}),Object(j.jsxs)("p",{className:"small-gray",children:["($",h(e.payload.usd),")"]})]},"item-".concat(t))}))})}}),Object(j.jsx)(y.a,{type:"monotone",dataKey:"val",strokeWidth:"2.5",stroke:"#0C3EE3",fill:"url(#colorUv)"})]})})})}function S(e){var t,n=null===e||void 0===e?void 0:e.data,r=e.market,c=null===e||void 0===e||null===(t=e.dailyContrib)||void 0===t?void 0:t.stats,s="",i=Object(a.useState)(!1),d=Object(u.a)(i,2),b=d[0],p=d[1],h=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,i,l,u,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.entries(n),a=t.map((function(e,t){return{date:e[0],val:e[1]/1e10}})),s=null===c||void 0===c?void 0:c.map((function(e,t){var n;return{dates:null===e||void 0===e||null===(n=e.date)||void 0===n?void 0:n.replace(", 2021","")}})),r=c.map((function(e,t){return delete e.date,e})),i=r.map((function(e,t){return{dots:N.a.sum(N.a.values(r[t]))}})),l=a.reduce((function(e,t,n){var a=t.val,r={date:t.date,val:a+(0===n?0:e[n-1].val)};return e.push(r),e}),[]).map((function(e,t){return{date:e.date,dots:e.val}})),u=N.a.merge(s,i),d=null===u||void 0===u?void 0:u.map((function(e,t){var n;return{date:e.dates,val:(null===(n=l[t])||void 0===n?void 0:n.dots)/u[t].dots*100}})),p(d);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){c&&h()}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"lockedTVL-container",children:[b&&Object(j.jsxs)("p",{className:"giant porcentshare",children:[Object(j.jsxs)("strong",{children:[r.porcent,"% "]}),Object(j.jsxs)("small",{children:["(",b[b.length-1].date,")"]})]}),Object(j.jsx)(x.a,{className:"lockedTVL",width:"100%",height:"100%",children:Object(j.jsxs)(O.a,{width:280,height:300,data:b,children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorUva",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:1}),Object(j.jsx)("stop",{offset:"7.34%",stopColor:"#0C3EE3",stopOpacity:1}),Object(j.jsx)("stop",{offset:"97.88%",stopColor:"rgba(255, 255, 255, 0.64)",stopOpacity:1})]})}),Object(j.jsx)(v.a,{dataKey:"date",tick:{fontSize:13}}),Object(j.jsx)(m.a,{content:function(e){var t=e.payload;return null===t||void 0===t?void 0:t.map((function(e,t){return Object(j.jsxs)("p",{className:"giant",children:[Object(j.jsxs)("strong",{children:[e.payload.val.toFixed(2),"% "]}),Object(j.jsxs)("small",{children:["(",e.payload.date,")"]})]},"item-".concat(t))}))},active:!0}),Object(j.jsx)(y.a,{type:"monotone",dataKey:"val",strokeWidth:"3",stroke:"#0C3EE3",dot:!1,fill:"url(#colorUva)"})]})})]})})}var E=n(345),T=n(176);function D(e){var t=null===e||void 0===e?void 0:e.contributions,n=Object.entries(t).map((function(e,t){return{date:e[0],val:e[1]/1e10}}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"dailydot",children:Object(j.jsx)(x.a,{className:"daily-dots",width:"100%",height:"100%",children:Object(j.jsxs)(E.a,{width:"100%",height:300,data:n,margin:{top:5,right:0,left:20,bottom:5},children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorUvb",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:.9}),Object(j.jsx)("stop",{offset:"57.88%",stopColor:"#0C3EE3",stopOpacity:.95}),Object(j.jsx)("stop",{offset:"97.88%",stopColor:"#0C3EE3",stopOpacity:1})]})}),Object(j.jsx)(v.a,{dataKey:"date",tick:{fontSize:13}}),Object(j.jsx)(g.a,{tick:{fontSize:13},orientation:"right",tickFormatter:function(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(e)},minTickGap:20}),Object(j.jsx)(m.a,{content:function(e){var t=e.payload;return Object(j.jsx)("ul",{className:"tvl-tooltip",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.payload.date})}),Object(j.jsx)("p",{children:Object(j.jsxs)("strong",{children:[h(e.payload.val)," DOT "]})})]},"item-".concat(t))}))})}}),Object(j.jsx)(T.a,{dataKey:"val",stroke:"#0C3EE3",fill:"url(#colorUvb)",radius:[4,4,0,0]})]})})})})}var K=n(63);function A(e){var t,n=Object(a.useState)([]),r=Object(u.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)("#0C3EE3"),o=Object(u.a)(i,2),l=o[0],d=o[1],b=Object(a.useState)("Parallel Finance"),p=Object(u.a)(b,2),f=p[0],O=p[1],y=e.parachain,k=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.stats,w=null===k||void 0===k?void 0:k.map((function(e,t){return N.a.mapKeys(e,(function(e,t){var n=t.substring(0,4);return"date"===n?n:y.find((function(e){return e.paraid===n.toString()})).name}))})),F=w.map((function(e,t){return Object.fromEntries(Object.entries(e).map((function(e){var n=Object(u.a)(e,2),a=n[0],r=n[1];return 0===t||"date"===a?[a,r]:r-parseInt(w[t-1][a])<1?[a,0]:[a,r-parseInt(w[t-1][a])]})))})),C=Object.entries(w[0]).map((function(e){var t=Object(u.a)(e,3),n=t[0];t[1],t[2];if("date"!==n.toString())return{label:n,color:"#0C3EE3",value:c.map((function(e){return e.key}))}}));Object(a.useEffect)((function(){s(F)}),[]);return Object(j.jsxs)(j.Fragment,{children:[0!==C.length&&Object(j.jsx)(K.a,{className:"select-dropdown",options:C.filter((function(e){return e})),placeholder:"Select a Network",onChange:function(e){return[O(e.label),d(e.color)]}}),Object(j.jsxs)("div",{className:"dailydot",children:[Object(j.jsx)("div",{className:"columns dashboard__numbers"}),Object(j.jsx)(x.a,{className:"daily-dots",width:"100%",height:"100%",children:Object(j.jsxs)(E.a,{width:"100%",height:300,data:c,margin:{right:0,top:5,left:20,bottom:5},children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorUvb",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5.23%",stopColor:"#0C3EE3",stopOpacity:.9}),Object(j.jsx)("stop",{offset:"57.88%",stopColor:"#0C3EE3",stopOpacity:.95}),Object(j.jsx)("stop",{offset:"97.88%",stopColor:"#0C3EE3",stopOpacity:1})]})}),Object(j.jsx)(v.a,{dataKey:"date",tick:{fontSize:13}}),Object(j.jsx)(g.a,{tick:{fontSize:13},orientation:"right",tickFormatter:function(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(e)},minTickGap:20}),Object(j.jsx)(m.a,{content:function(e){var t=e.payload;return Object(j.jsx)("ul",{className:"tvl-tooltip",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.dataKey})}),Object(j.jsxs)("p",{children:["Date: ",e.payload.date]}),Object(j.jsxs)("p",{children:["Raised : ",h(e.payload[e.dataKey])," DOT"]})]},"item-".concat(t))}))})}}),Object(j.jsx)(T.a,{dataKey:f,fill:l,stroke:l,radius:[4,4,0,0]})]})})]})]})}function W(e){var t=e.src;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)("img",{src:t.icon,alt:t.name})},t)})}function M(e){var t=e.width,n=e.bar,a=e.bar2,r=(100-(100*n+100*a)).toFixed(2);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"meter",style:{width:800*t},children:[Object(j.jsx)("span",{style:{width:100*n+"%"},"data-tooltip":(100*n).toFixed(2)+"%"}),Object(j.jsx)("span",{style:{width:parseInt(100*a).toFixed(2)+"%"},"data-tooltip":parseInt(100*a).toFixed(2)+"%"}),Object(j.jsx)("span",{style:{width:r+"%"},"data-tooltip":r+"%"})]})})}function L(e){var t=e.raise,n=e.parachain,r=e.marketShare,c=Object(a.useState)([]),s=Object(u.a)(c,2),i=s[0],o=s[1];Object(a.useEffect)((function(){o(t.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"!==e.status})))}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"filterDetails",children:Object(j.jsx)(K.a,{options:[{label:"All",value:"all"},{label:"AUCTIONS #1-5",value:"auction15"},{label:"AUCTIONS #6-11",value:"auction611"}],defaultValue:{label:"AUCTIONS #6-11",value:"auction611"},onChange:function(e){return function(e){switch(e){case"all":o(t.sort((function(e,t){return t.raised-e.raised})));break;case"auction15":o(t.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"===e.status})));break;case"auction611":o(t.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"!==e.status})))}}(e.value)}})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"network-header flex justify",children:[Object(j.jsx)("h4",{className:"network-name",children:"PROJECT"}),Object(j.jsx)("h4",{className:"network-cap",children:"DOT"}),Object(j.jsx)("h4",{className:"network-auction",children:"% Auction"}),Object(j.jsx)("h4",{className:"network-total",children:"% Total"})]}),Object(j.jsx)("div",{className:"scroleable-box",children:t?null===i||void 0===i?void 0:i.map((function(e){var t=e.paraId,a=e.status,c=e.raised;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"network flex justify",children:n?n.filter((function(e){return e.paraid===t})).map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"network-name",children:[Object(j.jsx)(W,{src:e}),Object(j.jsxs)("span",{children:[e.name,"Won"===a?Object(j.jsxs)("strong",{className:"winner",children:[" ",a," "]}):""]})]}),Object(j.jsx)("p",{className:"network-cap",children:p(c)}),Object(j.jsx)("p",{className:"network-auction",children:f(c/r)+"%"}),Object(j.jsx)("p",{className:"network-total",children:f(c/1e10/"1103303471")+"%"})]})})):"Loading..."},t)})})):"Getting Data"})]})]})}var Q=n(22),U=n(347),R=n(171),I=n(91);function G(e){var t,n="https://auction-service-prod.parallel.fi/crowdloan/marketshare/",r=Object(a.useState)({}),c=Object(u.a)(r,2),s=c[0],i=c[1],d=null===e||void 0===e||null===(t=e.share)||void 0===t?void 0:t.share,b=null===e||void 0===e?void 0:e.share.market,h=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"13LHN6KoMJ2BFh12FeE1Lm1kGGT8V2SV3oH6Ftuk3LyqDUmN");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,c=null===(t=Object.entries(r.data))||void 0===t?void 0:t.reduce((function(e,t){return parseFloat(e+t[1])}),0),i((function(e){return e(Q.a)(e(Q.a)({},e),{},{kucoin:{name:"Kucoin",value:c,color:"#23af91",market:(c/b*100).toFixed(2)}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"1xhXb5ZjsKpN1xcvTNMuThndfb1WP9saLKMpNxofGm64U2X");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,c=null===(t=Object.entries(r.data))||void 0===t?void 0:t.reduce((function(e,t){return parseFloat(e+t[1])}),0),i((function(e){return e(Q.a)(e(Q.a)({},e),{},{binance:{name:"Binance",value:c,color:"#f6cc27",market:(c/b*100).toFixed(2)}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"1344zprT7A4VFrQ46GJycLrjhBoYjf1RcsjbRLmk5DtsYshV");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,c=null===(t=Object.entries(r.data))||void 0===t?void 0:t.reduce((function(e,t){return parseFloat(e+t[1])}),0),i((function(e){return e(Q.a)(e(Q.a)({},e),{},{kraken:{name:"Kraken",value:c,color:"#5841d8",market:(c/b*100).toFixed(2)}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"14AMZ3gw4tRsrdp78i4MmHZ8EFbXTMfuXGQMEC3t1GoqLboH");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,c=null===(t=Object.entries(r.data))||void 0===t?void 0:t.reduce((function(e,t){return parseFloat(e+t[1])}),0),i((function(e){return e(Q.a)(e(Q.a)({},e),{},{bifrost:{name:"Biforst",value:c,color:"#cb5688",market:(c/b*100).toFixed(2)}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"15abPBmJrMY7QJeCEQJQbQ9a62A7ndfTo8KC7Wn4dzt9zMMg");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,c=null===(t=Object.entries(r.data))||void 0===t?void 0:t.reduce((function(e,t){return parseFloat(e+t[1])}),0),i((function(e){return e(Q.a)(e(Q.a)({},e),{},{okex:{name:"Okex",value:c,color:"#88bcf2",market:(c/b*100).toFixed(2)}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"13uWt4NnfTuVFxnqTQCryktasmFEFAGpndn19K1ZGxidf7XR");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,c=null===(t=Object.entries(r.data))||void 0===t?void 0:t.reduce((function(e,t){return parseFloat(e+t[1])}),0),i((function(e){return e(Q.a)(e(Q.a)({},e),{},{gate:{name:"Gate.io",value:c,color:"#e64e62",market:(c/b*100).toFixed(2)}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"13rWYJ2DWj4ZQrZWfVJRJXqVSaQfd34QmRJrsJdSsApnnmK");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,c=null===(t=Object.entries(r.data))||void 0===t?void 0:t.reduce((function(e,t){return parseFloat(e+t[1])}),0),i((function(e){return e(Q.a)(e(Q.a)({},e),{},{equilibrium:{name:"Equilibrium",value:c,color:"#1792ff",market:(c/b*100).toFixed(2)}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){i((function(e){return e(Q.a)(e(Q.a)({},e),{},{parallel:{name:"Parallel",value:d,color:"#0c3ee3",market:(d/b*100).toFixed(2)}})})),f(),O(),v(),k(),y(),g(),h()}),[]),8===Object.keys(s).length&&function(){var e,t=null===(e=Object.entries(s))||void 0===e?void 0:e.reduce((function(e,t){var n="others"===t[0]?0:t[1].value;return parseFloat(e+n)}),0);i((function(e){return e(Q.a)(e(Q.a)({},e),{},{others:{name:"Others",value:t,color:"#cccccc",market:(t/b*100).toFixed(2)}})}))}();var N=Object.values(s).sort((function(e,t){return t.value-e.value})).map((function(e,t){return{name:e.name,value:parseFloat(e.market)}})),w=Object.values(s).sort((function(e,t){return t.value-e.value})).map((function(e,t){return e.color}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"dominance",children:[Object(j.jsxs)("div",{className:"chart-dominance",children:[Object(j.jsxs)("div",{className:"centered score-text",children:[p(null===e||void 0===e?void 0:e.share.market)," ",Object(j.jsx)("small",{children:"DOT"})]}),Object(j.jsx)(x.a,{width:"100%",height:285,children:Object(j.jsx)(U.a,{children:Object(j.jsxs)(R.a,{data:N,innerRadius:105,outerRadius:120,cornerRadius:50,paddingAngle:1,minAngle:8,isAnimationActive:!1,dataKey:"value",children:[Object(j.jsx)(m.a,{active:!0,wrapperStyle:{visibility:"visible"}}),N.map((function(e,t){return Object(j.jsx)(I.a,{fill:w[t%w.length]},"cell-".concat(t))}))]})})})]}),s&&Object.values(s).sort((function(e,t){return t.value-e.value})).map((function(e,t){e.name.toLowerCase();return Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"market-paragraph",children:[Object(j.jsx)("span",{style:{background:e.color}}),e.name," :",Object(j.jsxs)("strong",{children:[" ",p(e.value)," ","("+e.market+"%)"]})]})},t)}))]})})}function V(e){e.price.dotPrice;var t=e.dots,n=t.filter,a=t.totalContributions;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"big",children:h(a)+" Contributions"}),Object(j.jsx)("div",{className:"flex column",children:Object.keys(n).map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{children:function(){switch(e){case"100":return Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"<100"})});case"1000":return Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"100 - 1k"})});case"10000":return Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"1k - 10k"})});case"100000":return Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"10k - 100k"})});default:return null}}()}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"travelcompany-input",children:Object(j.jsxs)("svg",{className:"score small",width:"48",height:"48",viewBox:"-25 -25 400 400",children:[Object(j.jsx)("circle",{className:"score-empty",cx:"175",cy:"175",r:"175",strokeWidth:"25",fill:"none"}),Object(j.jsx)("circle",{className:"js-circle score-circle",transform:"rotate(-90 175 175)",cx:"175",cy:"175",r:"175",strokeDasharray:"1100",strokeDashoffset:1100*(100-(100-f((a-n[e].total)/a)).toFixed(2))/100,strokeWidth:"25",fill:"none"}),Object(j.jsx)("text",{className:"js-text score-text big",x:"50%",y:"55%",dx:"-25",textAnchor:"middle",children:(100-f((a-n[e].total)/a)).toFixed(0)+"%"})]})},t)}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"travelcompany-input",children:Object(j.jsx)("span",{className:"input-label",children:h(n[e].value)})},t)})]})})}))})]})}function X(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)("auction611"),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)([]),b=Object(u.a)(d,2),x=(b[0],b[1],null===e||void 0===e?void 0:e.raise),O=null===e||void 0===e?void 0:e.contributions,v=null===e||void 0===e?void 0:e.parachain,m=null===e||void 0===e?void 0:e.tvl,y=null===e||void 0===e?void 0:e.htvl,g=null===e||void 0===e?void 0:e.dotAmount,k=null===e||void 0===e?void 0:e.dailyContrib,E=[{}],T=null===e||void 0===e?void 0:e.other,Q=N.a.merge(N.a.keyBy(null===e||void 0===e?void 0:e.other[0].data,"id"),N.a.keyBy(null===e||void 0===e?void 0:e.other[1].data,"id")),U=x.reduce((function(e,t){return parseInt(e)+parseInt(t.raised)}),0),R=O.reduce((function(e,t){return parseInt(e)+parseInt(t.total)}),0);Q=Object.values(Q).filter((function(e){return"FAILED"!==e.auctionStatus})),E.market=U,E.share=R,E.porcent=f(E.share/E.market),Object(a.useEffect)((function(){c(x.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"!==e.status})))}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("div",{className:"box tvl half ml-25",children:[Object(j.jsx)("h3",{children:" Total Value Locked "}),m&&Object(j.jsxs)("p",{className:"giant",children:["$",h(m.totalValue)]}),y&&Object(j.jsx)(C,{data:y})]}),Object(j.jsxs)("div",{className:"box half mr-25",children:[Object(j.jsx)("h3",{className:"left",children:"Market Share"}),k&&y&&Object(j.jsx)(S,{market:E,data:y,dailyContrib:k})]})]}),Object(j.jsxs)("div",{className:"box full ",children:[Object(j.jsx)("h3",{children:"Crowdloan by Projects"}),Object(j.jsxs)("div",{className:"selectors",children:[Object(j.jsxs)("p",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"gray"})," Total DOT Raised "]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"blue"})," Raised on Parallel "]}),"auction611"===o?"":Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"yellow"})," Raised on Binance "]})]}),Object(j.jsx)("div",{className:"filterDetails",children:Object(j.jsx)(K.a,{options:[{label:"All",value:"all"},{label:"AUCTIONS #1-5",value:"auction15"},{label:"AUCTIONS #6-11",value:"auction611"}],defaultValue:{label:"AUCTIONS #6-11",value:"auction611"},onChange:function(e){return function(e){switch(e){case"all":c(x.sort((function(e,t){return t.raised-e.raised}))),l("all");break;case"auction15":c(x.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"===e.status}))),l("auction15");break;case"auction611":c(x.sort((function(e,t){return t.raised-e.raised})).filter((function(e){return"Won"!==e.status}))),l("auction611")}}(e.value)}})})]}),x||T?null===r||void 0===r?void 0:r.map((function(e){var t=e.paraId,n=e.raised,a=x[0].raised,r=Object.values(Q).filter((function(t){return t.code===e.paraId})),c=r[0]?1e10*r[0].votedAmount:0;return Object(j.jsx)("div",{id:t,children:Object(j.jsxs)("div",{className:"flex",children:[v?null===v||void 0===v?void 0:v.filter((function(e){return e.paraid===t})).map((function(t){return Object(j.jsx)(W,{src:t},e.paraId)})):"Loading...",O?O.filter((function(e){return e.paraId===t})).map((function(t){var r=t.total/n,s=c/n,i=n/a;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"crowdloan-by",children:[Object(j.jsx)(M,{width:i,bar:r,bar2:s},e.paraId),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"marketData",children:[Object(j.jsx)("strong",{children:n?p(n):"0"})," | ",Object(j.jsx)("span",{children:f(r)+"% ("+p(t.total)+")"})]})})]})})})):"Loading..."]})},t)})):"Loading..."]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("div",{className:"box small dominance-market",children:[Object(j.jsx)("h3",{children:"Market Dominance"}),E&&Object(j.jsx)(G,{share:E})]}),Object(j.jsxs)("div",{className:"box tvl auctions",children:[Object(j.jsxs)("h3",{children:["DOT Auctions ",Object(j.jsxs)("span",{children:["Total Supply: ",Object(j.jsx)("strong",{children:"1,103,303,471 DOT"})]})]}),Object(j.jsx)(L,{raise:x,parachain:v,marketShare:E.market})]})]}),Object(j.jsxs)("div",{className:"box full",children:[Object(j.jsx)("h3",{children:"Daily Increase of DOT raised during the crowdloan"}),y&&Object(j.jsx)(D,{contributions:y})]}),Object(j.jsxs)("div",{className:"box full",children:[Object(j.jsx)("h3",{children:"Daily Increase of DOT by Project"}),k&&Object(j.jsx)(A,{parachain:v,data:k})]}),Object(j.jsxs)("div",{className:"box half ml-25",children:[Object(j.jsx)("h3",{children:"Crowdloan USD TVL "}),m&&k&&Object(j.jsx)(w,{price:m,dailyContrib:k})]}),Object(j.jsxs)("div",{className:"box half mr-25",children:[Object(j.jsx)("h3",{children:"Crowdloan DOT TVL"}),m&&k&&Object(j.jsx)(F,{price:m,dailyContrib:k})]}),g&&m&&Object(j.jsxs)("div",{className:"box full distribution",children:[Object(j.jsx)("h3",{children:"Contribution Distribution"}),Object(j.jsx)(V,{dots:g,price:m})]})]})}var z=n(117);n(338);var B=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(u.a)(c,2),i=s[0],d=s[1],p=Object(a.useState)(),h=Object(u.a)(p,2),f=h[0],x=h[1],O=Object(a.useState)(),v=Object(u.a)(O,2),m=v[0],y=(v[1],Object(a.useState)()),g=Object(u.a)(y,2),k=g[0],N=g[1],w=Object(a.useState)(),F=Object(u.a)(w,2),C=F[0],S=F[1],E=Object(a.useState)(),T=Object(u.a)(E,2),D=T[0],K=T[1],A=Object(a.useState)(),W=Object(u.a)(A,2),M=W[0],L=W[1],Q=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn.jsdelivr.net/gh/parallel-finance/auction-toolkit@latest/crowdloans/projects/polkadot.json?v2");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,L(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/polkadot");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/statistics/polkadot?fundIds=2000-1muqpuFcWvy1Q3tf9Tek882A6ngz46bWPsV6sWiYccnVjKb-0,2002-14e4GmLj5CccWe9Rant9q6yQro1oysqvKiBiHcpCRoscZ1yY-0,2003-1EdsnniYSKNjHNAvDgvBfRNzKnSzi6kgsHQFCG4PhAyyJWH-0,2004-12KHAurRWMFJyxU57S9pQerHsKLCwvWKM1d3dKZVx7gSfkFJ-1,2006-1j5YyEGdcPd9BxkzVNNjKkqdi5f7g3Dd7JMgaGUhsMrZ6dZ-0,2012-15kjdKF4hRbYWzLjovPiohT5pVheXhhk8oKHr3DyTaxF2evd-0,2013-152deMvsN7wxMbSmdApsds6LWNNNGgsJ8TTpZLTD2ipEHNg3-0,2015-1k9St8FDkcTVSe6HzSRQivYi3qgRuQfQp8btpVMrdTFs99S-0,2017-16RzEcgXVzXXn2gEQbqqp74Pw7MJSb7PKtz29BhVZmpXBKRn-0,2018-13n7S6wAFjSqppxyjfSxcPNqQv5jL7PYtxjg3Gxw3RALpyBk-0,2019-12EXcpt1CwnSAF9d7YWrh91bQw6R5wmCpJUXPWi7vn2CZFpJ-0,2021-12LxQoLA9hebiMSPT3G7ixz73LLuYomMNuRLqX7c9bRWxDFG-0,2028-13pQt6LnK2tXZtXbiQ6PBYikEoNTi6MXkeBdQCeyR9hm6k1p-0,2026-16LKv69ct6xDzSiUjuz154vCg62dkyysektHFCeJe85xb6X-0,2008-13QrQ7Xos6bseivYW3xRjvi4T2iHihxVnTrQgyHmWGTNv972-0,2027-14r48SVtMrJKxUWD9ijDy8aQU3asTXja8qny9mzXTutdByju-0,2028-13pQt6LnK2tXZtXbiQ6PBYikEoNTi6MXkeBdQCeyR9hm6k1p-0,2031-143pzStAtMv3RbYbcHyr2xHipWPkme8VjVgAr4QDQP8d3Xrc-0,2032-14gZicKnmFj3238utrQ6B7CGWBeNGntKUyoUHqoTN85FnHWk-0");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,K(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/polkadot/contributions");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/total-value");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,x(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://auction-service-prod.parallel.fi/crowdloan/historical-tvl");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,N(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.binance.com/bapi/earn/v1/public/lending/dot/project/home/list?auctioning=true");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,fetch("https://www.binance.com/bapi/earn/v1/public/lending/dot/project/home/list?auctioning=false");case 8:return a=e.sent,e.next=11,a.json();case 11:r=e.sent,S([n,r]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){function e(){Q(),R(),U(),I(),G(),B(),V()}z.a.initialize("UA-212480889-2"),z.a.pageview("Homepage"),e(),setInterval((function(){e()}),3e4)}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{}),n&&M&&i&&C&&Object(j.jsx)(X,{raise:n,parachain:M,contributions:i,dailyContrib:D,tvl:f,htvl:k,other:C,dotAmount:m})]})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}},[[339,1,2]]]);
//# sourceMappingURL=main.a9c434e8.chunk.js.map