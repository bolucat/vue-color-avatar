var Be=Object.defineProperty,Ne=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ye=(e,t,o)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,q=(e,t)=>{for(var o in t||(t={}))qe.call(t,o)&&ye(e,o,t[o]);if(we)for(var o of we(t))Me.call(t,o)&&ye(e,o,t[o]);return e},W=(e,t)=>Ne(e,ze(t));import{c as He,u as Ue,d as R,a as K,b as X,o as E,e as b,F as oe,r as se,f as _,n as M,g as l,h as T,i as ne,P as Ge,j as _e,k as ie,w as Ae,C as We,l as pe,m as H,t as U,p as O,q as De,s as Ie,T as Je,v as Ye,x as ae,y as Ze,z as ve,A as fe,B as Ke,D as Xe,E as Qe}from"./vendor.7ab4b5f7.js";const et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};et();var F;(function(e){e.ZH="zh",e.EN="en"})(F||(F={}));var $;(function(e){e.Undo="undo",e.Redo="redo",e.Flip="flip",e.Code="code"})($||($={}));var re;(function(e){e.Male="male",e.Female="female",e.NotSet="notSet"})(re||(re={}));var n;(function(e){e.Face="face",e.Tops="tops",e.Ear="ear",e.Earrings="earrings",e.Eyebrows="eyebrows",e.Eyes="eyes",e.Nose="nose",e.Glasses="glasses",e.Mouth="mouth",e.Beard="beard",e.Clothes="clothes"})(n||(n={}));var j;(function(e){e.Circle="circle",e.Square="square",e.Squircle="squircle"})(j||(j={}));var J;(function(e){e.Base="base"})(J||(J={}));var m;(function(e){e.Fonze="fonze",e.Funny="funny",e.Clean="clean",e.Punk="punk",e.Danny="danny",e.Wave="wave",e.Turban="turban",e.Pixie="pixie",e.Beanie="beanie"})(m||(m={}));var B;(function(e){e.Attached="attached",e.Detached="detached"})(B||(B={}));var G;(function(e){e.Hoop="hoop",e.Stud="stud",e.None="none"})(G||(G={}));var S;(function(e){e.Up="up",e.Down="down",e.Eyelashesup="eyelashesup",e.Eyelashesdown="eyelashesdown"})(S||(S={}));var L;(function(e){e.Ellipse="ellipse",e.Smiling="smiling",e.Eyeshadow="eyeshadow",e.Round="round"})(L||(L={}));var V;(function(e){e.Curve="curve",e.Round="round",e.Pointed="pointed"})(V||(V={}));var A;(function(e){e.Frown="frown",e.Laughing="laughing",e.Nervous="nervous",e.Pucker="pucker",e.Sad="sad",e.Smile="smile",e.Smirk="smirk",e.Surprised="surprised"})(A||(A={}));var Q;(function(e){e.Scruff="scruff",e.None="none"})(Q||(Q={}));var Y;(function(e){e.Round="round",e.Square="square",e.None="none"})(Y||(Y={}));var k;(function(e){e.Crew="crew",e.Collared="collared",e.Open="open"})(k||(k={}));const tt="modulepreload",Oe={},ot="/",s=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${ot}${a}`,a in Oe)return;Oe[a]=!0;const r=a.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":tt,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((g,h)=>{u.addEventListener("load",g),u.addEventListener("error",h)})})).then(()=>t())},Re={[n.Face]:{zIndex:10},[n.Ear]:{zIndex:102},[n.Earrings]:{zIndex:103},[n.Eyebrows]:{zIndex:70},[n.Eyes]:{zIndex:50},[n.Nose]:{zIndex:60},[n.Glasses]:{zIndex:90},[n.Mouth]:{zIndex:100},[n.Beard]:{zIndex:105},[n.Tops]:{zIndex:80},[n.Clothes]:{zIndex:110}},D={gender:[re.Male,re.Female],wrapperShape:Object.values(j),faceShape:Object.values(J),topsShape:Object.values(m),earShape:Object.values(B),earringsShape:Object.values(G),eyebrowsShape:Object.values(S),eyesShape:Object.values(L),noseShape:Object.values(V),glassesShape:Object.values(Y),mouthShape:Object.values(A),beardShape:Object.values(Q),clothesShape:Object.values(k),backgroundColor:["#6BD9E9","#FC909F","#F4D150","#E0DDFF","#D2EFF3","#FFEDEF","#FFEBA4","#506AF4","#F48150","#48A99A","#C09FFF","#FD6F5D","linear-gradient(45deg, #E3648C, #D97567)","linear-gradient(62deg, #8EC5FC, #E0C3FC)","linear-gradient(90deg, #ffecd2, #fcb69f)","linear-gradient(120deg, #a1c4fd, #c2e9fb)","linear-gradient(-135deg, #fccb90, #d57eeb)","transparent"],skinColor:["#F9C9B6","#AC6651"],clothesColor:["#9287FF","#6BD9E9","#FC909F","#F4D150","#77311D"]},Ce={lg:976},N="none",st=.1,Se=[{wrapperShape:"squircle",background:{color:"#E0DDFF"},widgets:{face:{shape:J.Base},tops:{shape:m.Pixie},ear:{shape:B.Attached},earrings:{shape:G.Stud},eyebrows:{shape:S.Up},eyes:{shape:L.Eyeshadow},nose:{shape:V.Pointed},glasses:{shape:N},mouth:{shape:A.Laughing},beard:{shape:N},clothes:{shape:k.Crew}}},{wrapperShape:"squircle",background:{color:"#F4D150"},widgets:{face:{shape:J.Base},tops:{shape:m.Clean},ear:{shape:B.Attached},earrings:{shape:N},eyebrows:{shape:S.Eyelashesdown},eyes:{shape:L.Round},nose:{shape:V.Round},glasses:{shape:N},mouth:{shape:A.Surprised},beard:{shape:N},clothes:{shape:k.Crew}}}],at=["quark","micromessenger","weibo","douban"],rt=800;function C(e,{avoid:t=[],usually:o=[]}={}){const a=t.filter(Boolean),r=e.filter(p=>!a.includes(p)),i=o.filter(Boolean).reduce((p,d)=>p.concat(new Array(15).fill(d)),[]),u=r.concat(i),g=Math.floor(Math.random()*u.length);return u[g]}function he(e={},t={}){var u,g,h,p,d,v,c,w,f,y,I,x,z,de,ee;const o=C(D.gender),a=[];let r=[m.Danny,m.Wave,m.Pixie];return o===re.Male&&(a.push(Q.Scruff),r=D.topsShape.filter(te=>!r.includes(te))),{gender:o,wrapperShape:(e==null?void 0:e.wrapperShape)||C(D.wrapperShape),background:{color:C(D.backgroundColor,{avoid:[(u=t.background)==null?void 0:u.color]})},widgets:{face:{shape:C(D.faceShape)},tops:{shape:C(r,{avoid:[(h=(g=t.widgets)==null?void 0:g.tops)==null?void 0:h.shape]})},ear:{shape:C(D.earShape,{avoid:[(d=(p=t.widgets)==null?void 0:p.ear)==null?void 0:d.shape]})},earrings:{shape:C(D.earringsShape,{usually:[N]})},eyebrows:{shape:C(D.eyebrowsShape,{avoid:[(c=(v=t.widgets)==null?void 0:v.eyebrows)==null?void 0:c.shape]})},eyes:{shape:C(D.eyesShape,{avoid:[(f=(w=t.widgets)==null?void 0:w.eyes)==null?void 0:f.shape]})},nose:{shape:C(D.noseShape,{avoid:[(I=(y=t.widgets)==null?void 0:y.nose)==null?void 0:I.shape]})},glasses:{shape:C(D.glassesShape,{usually:[N]})},mouth:{shape:C(D.mouthShape,{avoid:[(z=(x=t.widgets)==null?void 0:x.mouth)==null?void 0:z.shape]})},beard:{shape:C(a,{usually:[N]})},clothes:{shape:C(D.clothesShape,{avoid:[(ee=(de=t.widgets)==null?void 0:de.clothes)==null?void 0:ee.shape]})}}}}function Le(){return Se[Math.floor(Math.random()*Se.length)]}function nt(){s(()=>import("./confetti.module.0762cd04.js"),[]).then(e=>{const t=document.querySelector("#confetti");if(!t)return;const o=e.create(t,{resize:!0,useWorker:!0,disableForReducedMotion:!0}),a=performance.now()+1*1e3,r=["#6967fe","#85e9f4","#e16984"];(function i(){o({particleCount:r.length,angle:60,spread:55,origin:{x:0},colors:r}),o({particleCount:r.length,angle:120,spread:55,origin:{x:1},colors:r}),performance.now()<a&&requestAnimationFrame(i)})()})}function it(e){return e?(typeof e!="string"&&(e=JSON.stringify(e,void 0,2)),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,t=>{let o="";return/^"/.test(t)?/:$/.test(t)?o="key":o="string":/true|false/.test(t)?o="boolean":/null/.test(t)?o="null":o="number",`<span class="token ${o}">${t}</span>`})):""}const Pe="SET_AVATAR_OPTION",Te="UNDO",Ve="REDO",Ee="SET_SIDER_STATUS";var lt=He({strict:!0,state:{history:{past:[],present:he({wrapperShape:j.Squircle}),future:[]},isSiderCollapsed:window.innerWidth<=Ce.lg},mutations:{[Pe](e,t){e.history={past:[...e.history.past,e.history.present],present:t,future:[]}},[Te](e){if(e.history.past.length>0){const t=e.history.past[e.history.past.length-1],o=e.history.past.slice(0,e.history.past.length-1);e.history={past:o,present:t,future:[e.history.present,...e.history.future]}}},[Ve](e){if(e.history.future.length>0){const t=e.history.future[0],o=e.history.future.slice(1);e.history={past:[...e.history.past,e.history.present],present:t,future:o}}},[Ee](e,t){t!==e.isSiderCollapsed&&(e.isSiderCollapsed=t)}}});const ke=Symbol();function le(){return Ue(ke)}var ct="/assets/icon-back.88612e3f.svg",ut="/assets/icon-code.ed069616.svg",dt="/assets/icon-flip.5d6b1bc4.svg",_t="/assets/icon-next.a3453347.svg";var P=(e,t)=>{for(const[o,a]of t)e[o]=a;return e};const pt={class:"action-menu"},vt=["title","onClick"],ft=["src","alt"],ht=R({emits:["action"],setup(e,{emit:t}){const{t:o}=K(),a=le(),r=X(()=>a.state.history.past.length>0),i=X(()=>a.state.history.future.length>0),u=X(()=>[{type:$.Undo,icon:ct,tip:o("action.undo"),disabled:!r.value},{type:$.Redo,icon:_t,tip:o("action.redo"),disabled:!i.value},{type:$.Flip,icon:dt,tip:o("action.flip")},{type:$.Code,icon:ut,tip:o("action.code")}]);return(g,h)=>(E(),b("div",pt,[(E(!0),b(oe,null,se(_(u),p=>(E(),b("div",{key:p.type,class:M(["menu-item",{disabled:p.disabled}]),title:p.tip,onClick:d=>t("action",p.type)},[l("img",{src:p.icon,alt:p.tip},null,8,ft)],10,vt))),128))]))}});var Et=P(ht,[["__scopeId","data-v-8479895a"]]),mt="/assets/icon-close.093e6e68.svg";const Fe=R({props:{options:{type:null,required:!1}},setup(e){const t=e,o=T();let a;return ne(()=>{if(!o.value){console.warn("No valid 'PerfectScrollbar' container found");return}a=new Ge(o.value,q({minScrollbarLength:20,maxScrollbarLength:160},t.options))}),_e(()=>{a.destroy()}),(r,i)=>(E(),b("div",{ref:(u,g)=>{g.scrollWrapper=u,o.value=u},style:{position:"relative",overflow:"hidden"}},[ie(r.$slots,"default")],512))}});function me(){const e=le();return[X(()=>e.state.history.present),a=>{e.commit(Pe,a)}]}function $e(){const e=le();return{isCollapsed:X(()=>e.state.isSiderCollapsed),openSider:()=>{e.commit(Ee,!1)},closeSider:()=>{e.commit(Ee,!0)}}}const gt={class:"code-box"},bt={class:"code-header"},wt={class:"title"},yt=["src","alt"],At={class:"code-content-box"},Dt=["innerHTML"],It=["data-clipboard-text"],Ot=R({props:{visible:{type:Boolean,required:!1}},emits:["close"],setup(e,{emit:t}){const o=e,{t:a}=K(),[r]=me(),i=X(()=>JSON.stringify(r.value,null,4)),u=T("");Ae(()=>{i.value&&(u.value=it(i.value))});const g=T(!1);let h;return ne(()=>{h=new We("#copy-code-btn"),h.on("success",p=>{g.value=!0,setTimeout(()=>{g.value=!1},800),p.clearSelection()})}),_e(()=>{h.destroy()}),(p,d)=>(E(),pe(Je,{name:"fade"},{default:H(()=>[o.visible?(E(),b("div",{key:0,class:"code-modal",onClick:d[1]||(d[1]=De(v=>t("close"),["self"]))},[l("div",gt,[l("div",bt,[l("div",wt,U(_(a)("text.codeModalTitle")),1),l("div",{class:"close-btn",onClick:d[0]||(d[0]=v=>t("close"))},[l("img",{src:_(mt),class:"icon-close",alt:_(a)("action.close")},null,8,yt)])]),l("div",At,[O(Fe,{class:"code-scroll-wrapper",options:{suppressScrollX:!1}},{default:H(()=>[l("pre",null,[l("code",{class:"code-content",innerHTML:u.value},null,8,Dt)])]),_:1}),l("button",{id:"copy-code-btn",class:M(["copy-btn",{copied:g.value}]),"data-clipboard-text":_(i)},U(g.value?_(a)("action.copied"):_(a)("action.copyCode")),11,It)])])])):Ie("",!0)]),_:1}))}});var Rt=P(Ot,[["__scopeId","data-v-e42c9b8a"]]);const Ct={class:"setting-section"},St={class:"section-title"},Lt=R({props:{title:{type:String,required:!1}},setup(e){const t=e;return(o,a)=>(E(),b("div",Ct,[l("div",St,U(t.title),1),l("div",null,[ie(o.$slots,"default",{},void 0,!0)])]))}});var ge=P(Lt,[["__scopeId","data-v-0a042232"]]);const ce={[n.Face]:{[J.Base]:()=>s(()=>import("./base.4513d367.js"),[])},[n.Ear]:{[B.Attached]:()=>s(()=>import("./attached.d5a509e9.js"),[]),[B.Detached]:()=>s(()=>import("./detached.cd5c0883.js"),[])},[n.Eyes]:{[L.Ellipse]:()=>s(()=>import("./ellipse.4dd13248.js"),[]),[L.Eyeshadow]:()=>s(()=>import("./eyeshadow.ee5505a9.js"),[]),[L.Round]:()=>s(()=>import("./round.53811b8f.js"),[]),[L.Smiling]:()=>s(()=>import("./smiling.6213728a.js"),[])},[n.Beard]:{[Q.Scruff]:()=>s(()=>import("./scruff.0d474b9d.js"),[])},[n.Clothes]:{[k.Collared]:()=>s(()=>import("./collared.851a9f8c.js"),[]),[k.Crew]:()=>s(()=>import("./crew.f37ae6b7.js"),[]),[k.Open]:()=>s(()=>import("./open.1f183d62.js"),[])},[n.Earrings]:{[G.Hoop]:()=>s(()=>import("./hoop.99b38c8d.js"),[]),[G.Stud]:()=>s(()=>import("./stud.736f2a3a.js"),[])},[n.Eyebrows]:{[S.Down]:()=>s(()=>import("./down.caab3e66.js"),[]),[S.Eyelashesdown]:()=>s(()=>import("./eyelashesdown.68c94734.js"),[]),[S.Eyelashesup]:()=>s(()=>import("./eyelashesup.75d72440.js"),[]),[S.Up]:()=>s(()=>import("./up.571f52b7.js"),[])},[n.Glasses]:{[Y.Round]:()=>s(()=>import("./round.934cf884.js"),[]),[Y.Square]:()=>s(()=>import("./square.5c3898cc.js"),[])},[n.Mouth]:{[A.Frown]:()=>s(()=>import("./frown.b826704b.js"),[]),[A.Laughing]:()=>s(()=>import("./laughing.0e9c4472.js"),[]),[A.Nervous]:()=>s(()=>import("./nervous.9a08f217.js"),[]),[A.Pucker]:()=>s(()=>import("./pucker.909c210d.js"),[]),[A.Sad]:()=>s(()=>import("./sad.6402e6ab.js"),[]),[A.Smile]:()=>s(()=>import("./smile.49a9ae94.js"),[]),[A.Smirk]:()=>s(()=>import("./smirk.2f70da95.js"),[]),[A.Surprised]:()=>s(()=>import("./surprised.6574eb42.js"),[])},[n.Nose]:{[V.Curve]:()=>s(()=>import("./curve.b1680b44.js"),[]),[V.Pointed]:()=>s(()=>import("./pointed.9d9a810c.js"),[]),[V.Round]:()=>s(()=>import("./round.f5932b17.js"),[])},[n.Tops]:{[m.Beanie]:()=>s(()=>import("./beanie.d28ca1af.js"),[]),[m.Clean]:()=>s(()=>import("./clean.1ea659e6.js"),[]),[m.Danny]:()=>s(()=>import("./danny.0c19d968.js"),[]),[m.Fonze]:()=>s(()=>import("./fonze.f855fa3e.js"),[]),[m.Funny]:()=>s(()=>import("./funny.ffc2c94c.js"),[]),[m.Pixie]:()=>s(()=>import("./pixie.832b1a28.js"),[]),[m.Punk]:()=>s(()=>import("./punk.5772bc1f.js"),[]),[m.Turban]:()=>s(()=>import("./turban.029b07b7.js"),[]),[m.Wave]:()=>s(()=>import("./wave.948486fe.js"),[])}},ue={[n.Face]:{[J.Base]:()=>s(()=>import("./base.d88a270a.js"),[])},[n.Ear]:{[B.Attached]:()=>s(()=>import("./attached.04632675.js"),[]),[B.Detached]:()=>s(()=>import("./detached.05f1ed8c.js"),[])},[n.Eyes]:{[L.Ellipse]:()=>s(()=>import("./ellipse.e17c0112.js"),[]),[L.Eyeshadow]:()=>s(()=>import("./eyeshadow.e952b02b.js"),[]),[L.Round]:()=>s(()=>import("./round.0e7c03f1.js"),[]),[L.Smiling]:()=>s(()=>import("./smiling.1b7c47a4.js"),[])},[n.Beard]:{[Q.Scruff]:()=>s(()=>import("./scruff.9fff0b98.js"),[])},[n.Clothes]:{[k.Collared]:()=>s(()=>import("./collared.534fe35b.js"),[]),[k.Crew]:()=>s(()=>import("./crew.0d8fb0c6.js"),[]),[k.Open]:()=>s(()=>import("./open.43353202.js"),[])},[n.Earrings]:{[G.Hoop]:()=>s(()=>import("./hoop.08ec4532.js"),[]),[G.Stud]:()=>s(()=>import("./stud.2f888642.js"),[])},[n.Eyebrows]:{[S.Down]:()=>s(()=>import("./down.4a71f911.js"),[]),[S.Eyelashesdown]:()=>s(()=>import("./eyelashesdown.54878f1c.js"),[]),[S.Eyelashesup]:()=>s(()=>import("./eyelashesup.824704b4.js"),[]),[S.Up]:()=>s(()=>import("./up.251891a5.js"),[])},[n.Glasses]:{[Y.Round]:()=>s(()=>import("./round.64817114.js"),[]),[Y.Square]:()=>s(()=>import("./square.32f26cf0.js"),[])},[n.Mouth]:{[A.Frown]:()=>s(()=>import("./frown.d56d8487.js"),[]),[A.Laughing]:()=>s(()=>import("./laughing.00bb9e02.js"),[]),[A.Nervous]:()=>s(()=>import("./nervous.e5b20b14.js"),[]),[A.Pucker]:()=>s(()=>import("./pucker.4175d388.js"),[]),[A.Sad]:()=>s(()=>import("./sad.b2f40925.js"),[]),[A.Smile]:()=>s(()=>import("./smile.a51fc949.js"),[]),[A.Smirk]:()=>s(()=>import("./smirk.bcd1ce10.js"),[]),[A.Surprised]:()=>s(()=>import("./surprised.165d4852.js"),[])},[n.Nose]:{[V.Curve]:()=>s(()=>import("./curve.07b09785.js"),[]),[V.Pointed]:()=>s(()=>import("./pointed.530a8d46.js"),[]),[V.Round]:()=>s(()=>import("./round.acb35e17.js"),[])},[n.Tops]:{[m.Beanie]:()=>s(()=>import("./beanie.ba4230be.js"),[]),[m.Clean]:()=>s(()=>import("./clean.e228de68.js"),[]),[m.Danny]:()=>s(()=>import("./danny.3969d15b.js"),[]),[m.Fonze]:()=>s(()=>import("./fonze.82adb1ce.js"),[]),[m.Funny]:()=>s(()=>import("./funny.78babb5a.js"),[]),[m.Pixie]:()=>s(()=>import("./pixie.641bae09.js"),[]),[m.Punk]:()=>s(()=>import("./punk.03f85ac7.js"),[]),[m.Turban]:()=>s(()=>import("./turban.0309ef68.js"),[]),[m.Wave]:()=>s(()=>import("./wave.e02ee196.js"),[])}};const Pt={class:"configurator"},Tt={class:"wrapper-shape"},Vt=["title","onClick"],kt={class:"bg-color-list"},Ft=["onClick"],$t={class:"widget-list"},jt=["onClick","innerHTML"],xt=R({setup(e){const{t}=K(),[o,a]=me(),r=Ye(Object.values(n)),i=T([]);ne(()=>{(async()=>{const d=await Promise.all(r.map(v=>u(v)));i.value=r.map((v,c)=>({widgetType:v,widgetList:d[c]}))})()});async function u(d){const v=D[`${d}Shape`],c=v.map(async f=>{var y;return f!=="none"&&((y=ue==null?void 0:ue[d])==null?void 0:y[f])?(await ue[d][f]()).default:"X"});return await Promise.all(c).then(f=>f.map((y,I)=>({widgetType:d,widgetShape:v[I],svgRaw:y})))}function g(d){d!==o.value.wrapperShape&&a(W(q({},o.value),{wrapperShape:d}))}function h(d){d!==o.value.background.color&&a(W(q({},o.value),{background:W(q({},o.value.background),{color:d})}))}function p(d,v){var c,w;v&&((c=o.value.widgets)==null?void 0:c[d])&&a(W(q({},o.value),{widgets:W(q({},o.value.widgets),{[d]:W(q({},(w=o.value.widgets)==null?void 0:w[d]),{shape:v})})}))}return(d,v)=>(E(),pe(Fe,{class:"configurator-scroll"},{default:H(()=>[l("div",Pt,[O(ge,{title:_(t)("label.wrapperShape")},{default:H(()=>[l("ul",Tt,[(E(!0),b(oe,null,se(_(D).wrapperShape,c=>(E(),b("li",{key:c,class:"wrapper-shape__item",title:_(t)(`wrapperShape.${c}`),onClick:w=>g(c)},[l("i",{class:M(["shape",[c,{active:c===_(o).wrapperShape}]])},null,2)],8,Vt))),128))])]),_:1},8,["title"]),O(ge,{title:_(t)("label.backgroundColor")},{default:H(()=>[l("ul",kt,[(E(!0),b(oe,null,se(_(D).backgroundColor,c=>(E(),b("li",{key:c,class:"bg-color-list__item",onClick:w=>h(c)},[l("div",{style:ae({background:c}),class:M(["bg-color",{active:c===_(o).background.color,transparent:c==="transparent"}])},null,6)],8,Ft))),128))])]),_:1},8,["title"]),(E(!0),b(oe,null,se(i.value,c=>(E(),pe(ge,{key:c.widgetType,title:_(t)(`widgetType.${c.widgetType}`)},{default:H(()=>[l("ul",$t,[(E(!0),b(oe,null,se(c.widgetList,w=>{var f,y;return E(),b("li",{key:w.widgetShape,class:M(["list-item",{selected:w.widgetShape===((y=(f=_(o).widgets)==null?void 0:f[c.widgetType])==null?void 0:y.shape)}]),onClick:I=>p(c.widgetType,w.widgetShape),innerHTML:w.svgRaw},null,10,jt)}),128))])]),_:2},1032,["title"]))),128))])]),_:1}))}});var Bt=P(xt,[["__scopeId","data-v-06ef9b01"]]);const Nt={class:"modal-body"},zt={class:"avatar-preview"},qt=["src"],Mt={class:"tip"},Ht=R({props:{visible:{type:Boolean,required:!1},imageUrl:{type:String,required:!0}},emits:["close"],setup(e,{emit:t}){const o=e,{t:a}=K();return(r,i)=>o.visible?(E(),b("div",{key:0,class:"download-modal-wrapper",onClick:i[2]||(i[2]=u=>t("close"))},[l("div",{class:"download-modal",onClick:i[1]||(i[1]=De(()=>{},["stop"]))},[l("div",Nt,[l("div",zt,[l("img",{alt:"vue-color-avatar",src:o.imageUrl,class:"avatar-img"},null,8,qt)]),l("p",Mt,U(_(a)("text.downloadTip"))+" \u{1F973}",1)]),l("button",{class:"close-btn",onClick:i[0]||(i[0]=u=>t("close"))},U(_(a)("action.close")),1)])])):Ie("",!0)}});var Ut=P(Ht,[["__scopeId","data-v-c86612e0"]]);const Gt=R({props:{color:{type:null,required:!0}},setup(e){const t=e;return(o,a)=>(E(),b("div",{class:"avatar-background",style:ae({background:t.color})},null,4))}});var Wt=P(Gt,[["__scopeId","data-v-90fc29f2"]]);const Jt=["innerHTML"],Yt=R({props:{option:{type:null,required:!0,default:()=>he()},size:{type:Number,required:!1,default:280}},setup(e,{expose:t}){const o=e,{option:a,size:r}=Ze(o),i=T();t({avatarRef:i});function u(){return{[j.Circle]:a.value.wrapperShape===j.Circle,[j.Square]:a.value.wrapperShape===j.Square,[j.Squircle]:a.value.wrapperShape===j.Squircle}}const g=T("");return Ae(async()=>{const h=Object.entries(a.value.widgets).sort((v,c)=>{var y,I,x,z;const w=(I=(y=Re[v[0]])==null?void 0:y.zIndex)!=null?I:0,f=(z=(x=Re[c[0]])==null?void 0:x.zIndex)!=null?z:0;return w-f}),p=h.map(async([v,c])=>{var w;return c.shape!==N&&((w=ce==null?void 0:ce[v])==null?void 0:w[c.shape])?(await ce[v][c.shape]()).default:""}),d=await Promise.all(p).then(v=>v.map((c,w)=>{const f=c.slice(c.indexOf(">",c.indexOf("<svg"))+1).replace("</svg>","");return`
        <g id="vue-color-avatar-${h[w][0]}">
          ${f}
        </g>
      `}));g.value=`
    <svg
      width="${r.value}"
      height="${r.value}"
      viewBox="0 0 ${r.value/.7} ${r.value/.7}"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(100, 65)">
        ${d.join("")}
      </g>
    </svg>
  `}),(h,p)=>(E(),b("div",{ref:(d,v)=>{v.avatarRef=d,i.value=d},class:M(["vue-color-avatar",u()]),style:ae({width:`${_(r)}px`,height:`${_(r)}px`})},[O(Wt,{color:_(a).background.color},null,8,["color"]),l("div",{class:"avatar-payload",innerHTML:g.value},null,8,Jt)],6))}});var Zt=P(Yt,[["__scopeId","data-v-bf576ea2"]]);const Kt=R({setup(e){const{isCollapsed:t,openSider:o,closeSider:a}=$e();function r(){window.innerWidth<=Ce.lg?a():o()}return ne(()=>{(function(){(function(u,g,h){h=h||window;let p=!1;const d=()=>{p||(p=!0,requestAnimationFrame(()=>{h.dispatchEvent(new CustomEvent(g)),p=!1}))};h.addEventListener(u,d)})("resize","optimizedResize",window)})(),window.addEventListener("optimizedResize",r)}),_e(()=>{window.removeEventListener("optimizedResize",r)}),(i,u)=>(E(),b("section",{class:M(["container",{full:_(t)}])},[ie(i.$slots,"default",{},void 0,!0)],2))}});var Xt=P(Kt,[["__scopeId","data-v-2b11f052"]]);const je=e=>(ve("data-v-ef965c52"),e=e(),fe(),e),Qt={class:"footer"},eo=je(()=>l("div",null,[Ke(" Made by "),l("a",{class:"link",href:"https://leoku.top",target:"_blank",rel:"nofollow noopener noreferrer"}," LeoKu ")],-1)),to=je(()=>l("div",{class:"divider"},"|",-1)),oo=R({setup(e){const{locale:t}=K();function o(){t.value=t.value===F.EN?F.ZH:F.EN}return(a,r)=>(E(),b("footer",Qt,[eo,to,l("div",{class:"locale",onClick:o},U(_(t)===_(F).EN?"\u7B80\u4F53\u4E2D\u6587":"English"),1)]))}});var so=P(oo,[["__scopeId","data-v-ef965c52"]]),ao="/assets/icon-github.af1ac57d.svg",ro="/assets/logo.f5999a59.svg";const no=["src"],io=R({props:{size:{type:Number,required:!1,default:2.5}},setup(e){const t=e;return(o,a)=>(E(),b("img",{style:ae([{width:"40px",height:"40px"},{width:`${t.size}rem`,height:`${t.size}rem`}]),src:_(ro),alt:"logo"},null,12,no))}});function Z(e,t){window==null||window.gtag("event",e,t)}const xe=e=>(ve("data-v-238e7bdb"),e=e(),fe(),e),lo={class:"header"},co=xe(()=>l("h2",{class:"site-title"},"Color Avatar",-1)),uo={class:"header-right"},_o={href:"https://github.com/Codennnn/vue-color-avatar",target:"_blank",rel:"nofollow noopener noreferrer"},po=["src"],vo=xe(()=>l("span",{class:"text"},"GitHub",-1)),fo=R({setup(e){return(t,o)=>(E(),b("header",lo,[O(io),co,l("div",uo,[l("a",_o,[l("button",{class:"github-button",onClick:o[0]||(o[0]=a=>_(Z)("click_github",{event_category:"click"}))},[l("img",{src:_(ao),alt:"GitHub"},null,8,po),vo])])])]))}});var ho=P(fo,[["__scopeId","data-v-238e7bdb"]]),Eo="/assets/icon-right.8e89d2c1.svg";const mo=["src"],go=R({setup(e){const{isCollapsed:t,openSider:o,closeSider:a}=$e();return(r,i)=>(E(),b("aside",{class:M(["sider",{collapsed:_(t)}])},[ie(r.$slots,"default",{},void 0,!0),l("div",{class:"trigger",onClick:i[0]||(i[0]=u=>_(t)?_(o)():_(a)())},[l("img",{src:_(Eo),class:"icon-right",alt:"arrow"},null,8,mo)])],2))}});var bo=P(go,[["__scopeId","data-v-ae0acb34"]]);const wo={},yo={id:"confetti",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}};function Ao(e,t){return E(),b("canvas",yo)}var Do=P(wo,[["render",Ao]]);const Io=e=>(ve("data-v-6854001e"),e=e(),fe(),e),Oo={class:"main"},Ro={class:"content-warpper"},Co={class:"content-view"},So={class:"playground"},Lo={class:"avatar-wrapper"},Po={class:"action-group"},To=["disabled"],Vo=Io(()=>l("div",{class:"gradient-bg"},[l("div",{class:"gradient-top"}),l("div",{class:"gradient-bottom"})],-1)),ko=R({setup(e){const t=le(),[o,a]=me(),{t:r}=K(),i=T();function u(){if(Math.random()<=st){let f=Le();for(;JSON.stringify(f)===JSON.stringify(o.value);)f=Le();f.wrapperShape=o.value.wrapperShape,a(f),nt()}else{const f=he(o.value);a(f)}Z("click_randomize",{event_category:"click"})}const g=T(!1),h=T(!1),p=T("");async function d(){var f;try{h.value=!0;const y=(f=i.value)==null?void 0:f.avatarRef,I=window.navigator.userAgent.toLowerCase(),x=at.some(z=>I.indexOf(z)!==-1);if(y){const ee=(await(await s(()=>import("./html2canvas.esm.0488f9f9.js"),[])).default(y,{backgroundColor:null})).toDataURL();if(x)p.value=ee,g.value=!0;else{const te=document.createElement("a");te.href=ee,te.download="vue-color-avatar.png",te.click()}}Z("click_download",{event_category:"click"})}finally{setTimeout(()=>{h.value=!1},rt)}}const v=T(!1),c=T(!1);function w(f){switch(f){case $.Undo:t.commit(Te),Z("action_undo",{event_category:"action",event_label:"Undo"});break;case $.Redo:t.commit(Ve),Z("action_redo",{event_category:"action",event_label:"Redo"});break;case $.Flip:v.value=!v.value,Z("action_flip_avatar",{event_category:"action",event_label:"Flip Avatar"});break;case $.Code:c.value=!c.value,Z("action_view_code",{event_category:"action",event_label:"View Avatar Option Code"});break}}return(f,y)=>(E(),b("main",Oo,[O(Xt,null,{default:H(()=>[l("div",Ro,[l("div",Co,[O(ho),l("div",So,[l("div",Lo,[O(Zt,{ref:(I,x)=>{x.colorAvatarRef=I,i.value=I},option:_(o),size:280,style:ae({transform:`rotateY(${v.value?-180:0}deg)`})},null,8,["option","style"])]),O(Et,{onAction:w}),l("div",Po,[l("button",{class:"action-randomize",onClick:u},U(_(r)("action.randomize")),1),l("button",{class:"action-download",disabled:h.value,onClick:d},U(h.value?`${_(r)("action.downloading")}...`:_(r)("action.download")),9,To)])]),O(so),O(Rt,{visible:c.value,onClose:y[0]||(y[0]=I=>c.value=!1)},null,8,["visible"]),O(Ut,{visible:g.value,"image-url":p.value,onClose:y[1]||(y[1]=I=>{g.value=!1,p.value=""})},null,8,["visible","image-url"])]),O(Do),Vo])]),_:1}),O(bo,null,{default:H(()=>[O(Bt)]),_:1})]))}});var Fo=P(ko,[["__scopeId","data-v-6854001e"]]),$o={action:{undo:"undo",redo:"redo",flip:"flip",code:"code",randomize:"Randomize",download:"Download",copyCode:"Copy",copied:"Copied",downloading:"Downloading",close:"Close"},label:{wrapperShape:"Avatar Shape",backgroundColor:"Background Color"},widgetType:{[n.Face]:"Face",[n.Tops]:"Tops",[n.Ear]:"Ear",[n.Earrings]:"Earrings",[n.Eyebrows]:"Eyebrows",[n.Eyes]:"Eyes",[n.Nose]:"Nose",[n.Glasses]:"Glasses",[n.Mouth]:"Mouth",[n.Beard]:"Beard",[n.Clothes]:"Clothes"},wrapperShape:{circle:"Circle",square:"Square",squircle:"Squircle"},text:{codeModalTitle:"Code",downloadTip:"LONG PRESS or RIGHT CLICK to save"}},jo={action:{undo:"\u64A4\u9500",redo:"\u8FD8\u539F",flip:"\u6C34\u5E73\u7FFB\u8F6C",code:"\u914D\u7F6E\u4EE3\u7801",randomize:"\u968F\u673A\u751F\u6210",download:"\u4E0B\u8F7D\u5934\u50CF",copyCode:"\u590D\u5236\u4EE3\u7801",copied:"\u5DF2\u590D\u5236",downloading:"\u51C6\u5907\u4E0B\u8F7D",close:"\u5173\u95ED"},label:{wrapperShape:"\u5934\u50CF\u5F62\u72B6",backgroundColor:"\u80CC\u666F\u989C\u8272"},widgetType:{[n.Face]:"\u8138\u86CB",[n.Tops]:"\u5934\u53D1 / \u5934\u9970",[n.Ear]:"\u8033\u6735",[n.Earrings]:"\u8033\u73AF",[n.Eyebrows]:"\u7709\u6BDB",[n.Eyes]:"\u773C\u775B",[n.Nose]:"\u9F3B\u5B50",[n.Glasses]:"\u773C\u955C",[n.Mouth]:"\u5634\u5DF4",[n.Beard]:"\u80E1\u5B50",[n.Clothes]:"\u8863\u7740"},wrapperShape:{circle:"\u5706\u5F62",square:"\u65B9\u5F62",squircle:"\u65B9\u5706\u5F62"},text:{codeModalTitle:"\u914D\u7F6E\u4EE3\u7801",downloadTip:"\u957F\u6309\u56FE\u7247\u6216\u53F3\u952E\u70B9\u51FB\u4E0B\u8F7D\u81F3\u672C\u5730\u76F8\u518C"}};const xo={en:$o,zh:jo},[Bo,No]=/^zh\b/.test(window.navigator.language)?[F.ZH,F.EN]:[F.EN,F.ZH];var zo=Xe({locale:Bo,fallbackLocale:No,messages:xo});const be=Qe(Fo);be.use(lt,ke);be.use(zo);be.mount("#app");