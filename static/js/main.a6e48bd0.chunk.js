(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(e,t,a){e.exports=a(366)},229:function(e,t,a){},230:function(e,t,a){},366:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(229),a(45)),i=a(138),s=a(139),m=a(147),u=a(140),h=a(148),d=a(141),g=a(87),E=a(42),w=a(85),f=a(7),p=(a(230),a(143)),y=a.n(p),b=function(e){var t=e.onHelp;return r.a.createElement(f.l,{container:!0,direction:"row",alignItems:"center",spacing:16},r.a.createElement(f.l,{item:!0},r.a.createElement(f.q,{variant:"title"},"Contract-Based Account Tracker by Tasit")),r.a.createElement(f.l,{item:!0},r.a.createElement(f.m,{"aria-label":"Delete",color:"secondary",onClick:function(){return t&&t()}},r.a.createElement(y.a,null))))},v=a(26),B=Object(v.withStyles)(function(e){return Object(v.createStyles)({errorText:{fontFamily:"Inconsolata, Monaco, monospace"}})})(function(e){var t=e.classes,a=e.error;return r.a.createElement(f.l,{container:!0,direction:"column"},r.a.createElement(f.l,{item:!0},r.a.createElement(f.q,{variant:"h6",component:"h3",className:t.id},"Error")),r.a.createElement(f.l,{item:!0},r.a.createElement(f.l,{container:!0},r.a.createElement(f.q,{mode:"paragraph",color:"secondary"},r.a.createElement("pre",{className:t.errorText},JSON.stringify(a,void 0,2))))))}),O=Object(v.withStyles)(function(e){return Object(v.createStyles)({actionArea:{maxWidth:300},id:{textOverflow:"ellipsis",overflow:"hidden"}})})(function(e){var t=e.classes,a=e.id;return r.a.createElement(f.l,{item:!0},r.a.createElement(f.b,null,r.a.createElement(f.c,{className:t.actionArea},r.a.createElement(f.d,null,r.a.createElement(f.q,{variant:"h6",component:"h3",className:t.id},a)))))}),j=Object(v.withStyles)(function(e){return Object(v.createStyles)({title:{marginTop:2*e.spacing.unit}})})(function(e){var t=e.classes,a=e.contractBasedAccounts;return r.a.createElement(f.l,{container:!0,direction:"column",spacing:16},r.a.createElement(f.l,{item:!0},r.a.createElement(f.q,{variant:"title",className:t.title},"Gnosis Safe"),r.a.createElement(f.q,{color:"textSecondary"},a.length," contract-based accounts")),r.a.createElement(f.l,{item:!0},r.a.createElement(f.l,{container:!0,direction:"row",spacing:16},a.map(function(e){return r.a.createElement(O,Object.assign({key:e.id},e))}))))}),S=Object(v.withStyles)(function(e){return Object(v.createStyles)({orderBySelect:{marginLeft:e.spacing.unit}})})(function(e){var t=e.classes,a=e.onToggleWithName,n=e.onToggleWithImage,c=e.onOrderBy,o=e.withName,l=e.withImage,i=e.orderBy;return r.a.createElement(f.l,{item:!0},r.a.createElement(f.l,{container:!0,direction:"row"},r.a.createElement(f.k,{control:r.a.createElement(f.e,{checked:o,onChange:function(e){return a&&a()}}),label:"With names"}),r.a.createElement(f.k,{control:r.a.createElement(f.e,{checked:l,onChange:function(e){return n&&n()}}),label:"With images"}),r.a.createElement(f.k,{control:r.a.createElement(f.p,{className:t.orderBySelect,value:i,onChange:function(e){return c&&c(e.target.value)}},r.a.createElement(f.o,{value:"id"},"ID")),label:"Order By:",labelPlacement:"start"})))});function k(){var e=Object(d.a)(["\n  query contractBasedAccounts(\n    $where: ContractBasedAccount_filter!\n    $orderBy: ContractBasedAccount_orderBy!\n  ) {\n    contractBasedAccounts(\n      first: 100\n      where: $where\n      orderBy: $orderBy\n      orderDirection: asc\n    ) {\n      id\n    }\n  }\n"]);return k=function(){return e},e}var N=new g.a({uri:"https://api.thegraph.com/subgraphs/name/tasitlabs/gnosis-safe",cache:new E.a}),I=Object(g.b)(k()),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggleHelpDialog=function(){a.setState(function(e){return Object(l.a)({},e,{showHelpDialog:!e.showHelpDialog})})},a.gotoQuickStartGuide=function(){window.location.href="https://tasit.io"},a.state={withImage:!1,withName:!1,orderBy:"id",showHelpDialog:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.withImage,n=t.withName,c=t.orderBy,o=t.showHelpDialog;return r.a.createElement(w.a,{client:N},r.a.createElement("div",{className:"App"},r.a.createElement(f.l,{container:!0,direction:"column"},r.a.createElement(b,{onHelp:this.toggleHelpDialog}),r.a.createElement(S,{orderBy:c,withImage:a,withName:n,onOrderBy:function(t){return e.setState(function(e){return Object(l.a)({},e,{orderBy:t})})},onToggleWithImage:function(){return e.setState(function(e){return Object(l.a)({},e,{withImage:!e.withImage})})},onToggleWithName:function(){return e.setState(function(e){return Object(l.a)({},e,{withName:!e.withName})})}}),r.a.createElement(f.l,{item:!0},r.a.createElement(f.l,{container:!0},r.a.createElement(w.b,{query:I,variables:{where:{},orderBy:c}},function(e){var t=e.data,a=e.error;return e.loading?r.a.createElement(f.n,{variant:"query",style:{width:"100%"}}):a?r.a.createElement(B,{error:a}):r.a.createElement(j,{contractBasedAccounts:t.contractBasedAccounts})})))),r.a.createElement(f.f,{fullScreen:!1,open:o,onClose:this.toggleHelpDialog,"aria-labelledby":"help-dialog"},r.a.createElement(f.j,{id:"help-dialog"},"What's Tasit?"),r.a.createElement(f.h,null,r.a.createElement(f.i,null,"There's more info about the Tasit project over at tasit.io. Should we take you there now?")),r.a.createElement(f.g,null,r.a.createElement(f.a,{onClick:this.toggleHelpDialog,color:"primary"},"Nah, I'm good"),r.a.createElement(f.a,{onClick:this.gotoQuickStartGuide,color:"primary",autoFocus:!0},"Yes, please")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[224,1,2]]]);
//# sourceMappingURL=main.a6e48bd0.chunk.js.map