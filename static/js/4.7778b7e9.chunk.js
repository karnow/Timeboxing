(this.webpackJsonptimeboxing=this.webpackJsonptimeboxing||[]).push([[4],{258:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(34),l=n(15),o=n(16),c=n(18),u=n(17),s=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",totalTimeInMinutes:""},e.handleTitleChange=function(t){e.setState({title:t.target.value})},e.handleTotalTimeInMinutesChange=function(t){e.setState({totalTimeInMinutes:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onCreate({title:e.state.title,totalTimeInMinutes:e.state.totalTimeInMinutes}),e.setState({title:"",totalTimeInMinutes:""})},e}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit,className:"TimeboxCreator"},i.a.createElement("label",null,"Co robisz? ",i.a.createElement("input",{value:this.state.title,onChange:this.handleTitleChange,type:"text"})),i.a.createElement("br",null),i.a.createElement("label",null,"Ile minut? ",i.a.createElement("input",{value:this.state.totalTimeInMinutes,onChange:this.handleTotalTimeInMinutesChange,type:"number",step:"0.01"})),i.a.createElement("br",null),i.a.createElement("button",null,"Dodaj TimeBox"))}}]),n}(i.a.Component),m=n(120);var d=function(e){var t=e.refresch,n=e.handleSearch,a=e.handleSubmit,r=e.searchQuery;return i.a.createElement("div",{className:"Timebox"},i.a.createElement("form",{onSubmit:a},i.a.createElement("label",null,"Wyszukiwanie timbox\xf3w ",i.a.createElement("input",{value:r,onChange:n,placeholder:"Search",type:"text"})),i.a.createElement("button",null,"Wyszukaj timeboxy"),i.a.createElement("button",{onClick:t},"Odswie\u017c")))},h=n(63),b=n(6);var p=Object(r.b)((function(e){return{timeboxes:Object(b.f)(e)}}))((function(e){var t=e.renderTimebox,n=e.timeboxes,a=Object(r.d)((function(e){return Object(b.g)(e)}));console.log(a);var i=Object(r.d)((function(e){return e}));return console.log(i),n.map(t)}));var f=function(e){var t=e.timebox,n=t.title,a=t.totalTimeInMinutes;if(a<=0)throw new Error("ca\u0142kowity czas musi by\u0107 wi\u0119kszy ni\u017c zero");return i.a.createElement("div",{className:"Timebox"},i.a.createElement("h3",null,n," - ",a," min. "))},v=n(62);var E=function(e){var t=e.timebox,n=e.onDelete,a=e.isEditable,r=e.onEdit,l=e.onMakeCurrent,o=t.title,c=t.totalTimeInMinutes;return i.a.createElement("div",{className:"Timebox"},i.a.createElement("h3",null,o," - ",c," min. "),i.a.createElement("button",{disabled:a,onClick:function(e){console.log("to jest zdarzenie: ",e.type),n()}},"Usu\u0144"),i.a.createElement("button",{disabled:a,onClick:r},"Zmie\u0144"),i.a.createElement("button",{disabled:a,onClick:l},"Zacznij teraz"))},g=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:e.props.title,totalTimeInMinutes:e.props.totalTimeInMinutes},e.handleTitleChange=function(t){e.setState({title:t.target.value}),console.log(e.state.title)},e.handleTotalTimeInMinutesChange=function(t){e.setState({totalTimeInMinutes:t.target.value})},e.handleSubmitForm=function(t){console.log("submit dzia\u0142a"),t.preventDefault();var n=e.state,a=n.title,i=n.totalTimeInMinutes;e.props.onUpdate(e.props.id,{id:e.props.id,title:a,totalTimeInMinutes:i})},e.handleCancel=function(){e.props.onCancel()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.totalTimeInMinutes;return console.log(this.props.id),console.log(this.state.title),i.a.createElement("div",{className:"Timebox"},i.a.createElement("form",{onSubmit:this.handleSubmitForm},i.a.createElement("input",{type:"text",onChange:this.handleTitleChange,value:t}),i.a.createElement("input",{type:"number",step:"0.01",onChange:this.handleTotalTimeInMinutesChange,value:n}),i.a.createElement("button",{type:"submit"},"edytuj"),i.a.createElement("button",{type:"button",onClick:this.handleCancel},"anuluj")))}}]),n}(i.a.Component),j=Object(r.b)((function(e,t){return{isEdited:Object(b.l)(e,t.timebox),isEditable:Object(b.i)(e)}}),(function(e,t){return{onEdit:function(){return e(Object(v.k)(t.timebox))},onCancel:function(){return e(Object(v.l)())},onMakeCurrent:function(){return e(Object(v.e)(t.timebox))}}}))((function(e){var t=e.timebox,n=e.isEdited,a=e.onEdit,r=e.onCancel,l=e.onUpdate,o=e.onDelete,c=e.isEditable,u=e.onMakeCurrent;return i.a.createElement(i.a.Fragment,null,n?i.a.createElement(g,{id:t.id,title:t.title,totalTimeInMinutes:t.totalTimeInMinutes,onUpdate:l,onCancel:r}):i.a.createElement(E,{key:t.id,timebox:t,isEditable:c,onDelete:o,onEdit:a,onMakeCurrent:u}))}));function O(e){var t=e.hasError,n=e.message,a=e.children;return t?n:a}var T=function(){var e=Object(r.c)(),t=Object(a.useContext)(h.a).accessToken,n=Object(r.d)((function(e){return Object(b.g)(e)})),l=Object(r.d)((function(e){return Object(b.a)(e)})),o=Object(r.d)((function(e){return Object(b.h)(e)})),c=Object(r.d)((function(e){return Object(b.e)(e)})),u=Object(r.d)((function(e){return Object(b.j)(e)})),E=Object(r.d)((function(e){return e}));return console.log(E),Object(a.useEffect)((function(){e(Object(v.a)(t))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{refresch:function(){return e(Object(v.h)())},handleSearch:function(t){return e(Object(v.i)(t))},handleSubmit:function(n){return e(Object(v.j)(n,t))},searchQuery:n}),i.a.createElement(O,{hasError:u,message:"POda\u0142e\u015b nie prawid\u0142ow\u0105 warto\u015b\u0107"},i.a.createElement(s,{onCreate:function(n){return e(Object(v.b)(n,t))}})),l?"Timeboxy is loading...":null,o?"Nie uda\u0142o si\u0119 za\u0142adowa\u0107":null,console.log(o),i.a.createElement(m.a,{message:"co\u015b si\u0119 wykrzaczy\u0142o :("},i.a.createElement(p,{renderTimebox:function(n,a){return i.a.createElement(j,{timebox:n,onUpdate:function(n,a){return e(Object(v.f)(n,a,t))},onDelete:function(){return e(Object(v.g)(n,t))}})}})),0===c.length?null:i.a.createElement(i.a.Fragment,null,console.log(c),i.a.createElement("h3",null,"Uko\u0144czone zadania"),c.map((function(e){return i.a.createElement(f,{key:e.id,timebox:e})}))))},k=n(64),C=n(65);var y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={hours:0,minutes:0,secounds:0},e.getDate=function(){e.intervalId=window.setInterval((function(){console.count("licz\u0119 zegar");var t=(new Date).getHours(),n=(new Date).getMinutes(),a=(new Date).getSeconds();e.setState({hours:t,minutes:n,secounds:a})}),1e3)},e.stopTimer=function(){window.clearInterval(e.intervalId)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getDate()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return i.a.createElement("h2",{className:"clock "},"Aktualny Czas ",i.a.createElement("span",{className:"clock__minutes"},this.state.hours),":",i.a.createElement("span",{className:"clock__minutes"},this.state.minutes),".",i.a.createElement("span",{className:"clock__secunds"},this.state.secounds))}}]),n}(i.a.Component),I=function e(t){var n=t.className,a=t.minutes,r=t.seconds;return e.defaultProps={className:"",minutes:33,secounds:11},i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"clock "+n},"Pozosta\u0142o ",i.a.createElement("span",{className:"clock__minutes clock--italic"},a),i.a.createElement("span",{className:"clock__dwukropek"},":"),i.a.createElement("span",{className:"clock__secunds clock--italic"},r)),i.a.createElement(y,null))},w=n(236),S=n.n(w);var x=function(e){var t=e.className,n=void 0===t?"":t,a=e.percent,r=void 0===a?33:a,l=e.big,o=void 0!==l&&l,c=e.color,u=void 0===c?null:c,s=S()("progress",n,{"progress--big":o,"progress--color-red":"red"===u,"progress--color-blue":"blue"===u,"progress--color-green":"green"===u});return i.a.createElement("div",{className:s},i.a.createElement("div",{className:"progress__bar",style:{width:"".concat(r,"%")}}))};var M=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isRunning:!1,isPaused:!1,isFinished:!1,pausesCount:0,elpsedTimeInSecounds:0},a.handleStart=a.handleStart.bind(Object(C.a)(a)),a.handleStop=a.handleStop.bind(Object(C.a)(a)),a.togglePause=a.togglePause.bind(Object(C.a)(a)),a.intervalId=null,a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.count("componentDidMount")}},{key:"componentDidUpdate",value:function(e,t){!t.isFinished&&this.state.isFinished&&this.props.onFinish(),console.count("componentDid Update")}},{key:"componentWillUnmount",value:function(){console.count("componentwillUnmount"),this.stopTimer()}},{key:"handleStart",value:function(e){this.setState({isRunning:!0}),this.startTimer()}},{key:"handleStop",value:function(e){this.setState({isRunning:!1,isPaused:!1,pausesCount:0,elpsedTimeInSecounds:0}),this.stopTimer()}},{key:"startTimer",value:function(){var e=this;null===this.intervalId&&(this.intervalId=window.setInterval((function(){console.log("timer works"),e.setState((function(t){var n=60*e.props.totalTimeInMinutes,a=Math.min(t.elpsedTimeInSecounds+.1,n),i=t.isFinished||a>=n;return i&&e.stopTimer(),{elpsedTimeInSecounds:a,isFinished:i,isRunning:t.isRunning&&!i,isPaused:t.isPaused&&!i}}))}),100))}},{key:"stopTimer",value:function(){window.clearInterval(this.intervalId),this.intervalId=null}},{key:"togglePause",value:function(){this.setState((function(e){var t=!e.isPaused;return t?this.stopTimer():this.startTimer(),{isPaused:t,pausesCount:t?e.pausesCount+1:e.pausesCount}}))}},{key:"render",value:function(){var e,t=this.state,n=t.isFinished,a=t.isPaused,r=t.isRunning,l=t.pausesCount,o=t.elpsedTimeInSecounds,c=this.props,u=c.title,s=60*c.totalTimeInMinutes,m=(e=s-o,[Math.floor(e/60),Math.floor(e%60)]),d=Object(k.a)(m,2),h=d[0],b=d[1],p=o/s*100;return i.a.createElement("div",{className:"CurrentTimebox"},i.a.createElement("h1",null,u),i.a.createElement(I,{minutes:h,seconds:b,className:a?"inactive":""}),i.a.createElement(x,{percent:p,className:a?"inactive":"",big:!0,color:"white"}),i.a.createElement("button",{onClick:this.handleStart,disabled:r||n},"Start"),i.a.createElement("button",{onClick:this.handleStop,disabled:!r},"Stop"),i.a.createElement("button",{onClick:this.togglePause,disabled:!r},a?"wzn\xf3w":"pauzuj"),"Liczba przerw: ",l)}}]),n}(i.a.Component);var z=Object(r.b)((function(e){var t=Object(b.d)(e);return console.log(t),{currentTimebox:t}}),(function(e,t){return console.log("usuwam ja mapdispachyo props"),{onFinish:function(){e(Object(v.d)(t.currentTimebox))}}}))((function(e){var t=e.currentTimebox,n=e.onFinish;if(t){var a=t.title,r=t.totalTimeInMinutes;return i.a.createElement(M,{title:a,totalTimeInMinutes:r,onFinish:n})}return null})),N=n(35),F=n.n(N),D=n(237),P=n.n(D);var _=function(e){return i.a.createElement(h.a.Consumer,null,(function(e){var t=e.accessToken;return i.a.createElement(i.a.Fragment,null," Witaj ",function(e){return P.a.decode(e).email}(t)," ")}))};var U=function(e){var t=e.children;if(i.a.Children.count(t)<1)throw new Error("Header har to have at least one child");return i.a.createElement("header",{className:"header"},i.a.createElement(W,null,i.a.createElement("h5",{style:{textAlign:"center"}},"The cake is a like - this is Portal")),i.a.createElement(_,null),t)};function W(e){var t=e.children;return i.a.createElement(R,null,t)}var R=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).container=document.createElement("div"),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.body.prepend(this.container)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.container)}},{key:"render",value:function(){return F.a.createPortal(this.props.children,this.container)}}]),n}(i.a.Component),A=n(256);var q=function(){var e=Object(a.useState)(A.getQuote()),t=Object(k.a)(e,2),n=t[0];return t[1],i.a.createElement(i.a.Fragment,null,i.a.createElement(Q,{quote:n,text:n.text,author:n.author}))};function Q(e){var t=e.quote,n=e.text,a=e.author;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement("figure",null,i.a.createElement("blockquote",null,n),i.a.createElement("figcaption",null,i.a.createElement("cite",null,a))):"...")}var H=n(114);t.default=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,null,i.a.createElement(H.a.Consumer,null,(function(e){var t=e.Logout;return i.a.createElement(i.a.Fragment,null," ",i.a.createElement("a",{onClick:t,className:"header__logout-link",href:"#"}," Wyloguj si\u0119")," ")}))),i.a.createElement(T,null),i.a.createElement(z,null),i.a.createElement(q,null))}}}]);
//# sourceMappingURL=4.7778b7e9.chunk.js.map