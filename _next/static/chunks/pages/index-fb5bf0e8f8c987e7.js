(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4263)}])},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return s},default:function(){return l}});let n=r(8754),i=(r(7294),n._(r(8976)));function a(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let r=i.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let l=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=l?l().then(a):Promise.resolve(a(()=>null))}):(delete n.webpack,delete n.modules,s(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let n=r(8754),i=n._(r(7294)),a=i.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return A}});let n=r(8754),i=n._(r(7294)),a=r(2254),s=[],l=[],o=!1;function d(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function s(){if(!n){let t=new c(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!o){let e=r.webpack?r.webpack():r.modules;e&&l.push(t=>{for(let r of e)if(t.includes(r))return s()})}function d(e,t){!function(){s();let e=i.default.useContext(a.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let l=i.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return i.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),i.default.useMemo(()=>{var t;return l.loading||l.error?i.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:n.retry}):l.loaded?i.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return d.preload=()=>s(),d.displayName="LoadableComponent",i.default.forwardRef(d)}(d,e)}function h(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return h(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{h(s).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(o=!0,t());h(l,e).then(r,r)})),window.__NEXT_PRELOADREADY=u.preloadReady;let A=u},3734:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(5893),i=r(1329);function a(e){return(0,n.jsx)(i.Z,{className:"w-1/2 h-7",onClick:()=>alert("Work in progress."),children:e.text})}},4486:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),i=r(7357),a=r(9937),s=r(4267),l=r(3965),o=r(5861),d=r(1519),c=r(2023),u=r(1496),h=r(9583);let A=(0,u.ZP)(i.Z)({display:"inline-flex",alignItems:"center",justifyContent:"center",minHeight:"50vh"}),m=(0,u.ZP)(a.Z)({backgroundColor:"#800404",color:"white",width:"200px",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.25)",borderRadius:"16px 4px 4px 16px"}),f=(0,u.ZP)(s.Z)({textAlign:"left",font:"Roboto"});function g(e){return(0,n.jsx)(A,{children:(0,n.jsx)(i.Z,{width:"300px",children:(0,n.jsxs)(m,{children:[(0,n.jsx)(l.Z,{className:"card-img",component:"img",height:"140",image:e.src}),(0,n.jsxs)(f,{children:[(0,n.jsxs)(o.Z,{gutterBottom:!0,variant:"h6",component:"div",children:[" ",e.name," "]}),(0,n.jsx)(d.Z,{style:{backgroundColor:"white"}}),(0,n.jsx)(o.Z,{variant:"body2",color:"white",children:e.desc})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(h.ltd,{size:32,href:e.linkedin}),(0,n.jsx)(h.Zf_,{size:32,href:e.instagram})]})]})})})}},9561:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),i=r(4486);let a=[{name:"Mikolaj Kostrzewa",desc:"Project Manager",linkedin:"",instagram:"https://www.instagram.com/koste707/",src:"people/Mikolaj.jpg"},{name:"Ankit Verghese",desc:"Chief Engineer",linkedin:"https://linkedin.com/in/ankit-verghese",instagram:"https://www.instagram.com/_agv108/",src:"people/Ankit.jpg"},{name:"Lucas Ballmer",desc:"Attorney General",linkedin:"",instagram:"",src:"https://media.licdn.com/dms/image/D5603AQF4kWHIat-3Lw/profile-displayphoto-shrink_200_200/0/1679191174432?e=1687996800&v=beta&t=PaH1NPF1-mRvviFwMSup63D5R_0gWzGokqCUqihnnls"},{name:"Isabelle Summann",desc:"Media Chair",linkedin:"",instagram:"",src:"https://ca.slack-edge.com/T04HUDB1KMK-U04TKR3H3NC-50d4d52bfcec-72"},{name:"Nick Thoennes",desc:"Computer Science",linkedin:"https://linkedin.com/in/nicholas-thoennes-166a02252",instagram:"https://www.instagram.com/_agv108/",src:"https://media.licdn.com/dms/image/D4E03AQFtd5xxbWImCw/profile-displayphoto-shrink_200_200/0/1681923403641?e=1687996800&v=beta&t=L7U-yn60Knol2D1Cudbb_UVyNfjnL1Eoz8ulStowuJE"},{name:"Chris M Reina",desc:"Aerospace Engineering",linkedin:"https://linkedin.com/in/chris-martinez-reina",instagram:"https://www.instagram.com/colawastedpanda/",src:"https://media.licdn.com/dms/image/C4D03AQF_C8M1tXZ49g/profile-displayphoto-shrink_200_200/0/1632143182216?e=1687996800&v=beta&t=JjEzDDdTu7bLMbaPasX9Tbw8-j25Yx9x06BBQPVJJP0"},{name:"Patrick Sullivan",desc:"Computer Science",linkedin:"https://linkedin.com/in/patrick-sullivan-03172b265",instagram:"https://www.instagram.com/patrickttsulliv/",src:"people/Patrick.jpg"}];function s(){return(0,n.jsx)("div",{className:"member-explorer",children:a.map(e=>(0,n.jsx)(i.default,{name:e.name,src:e.src,desc:e.desc,linkedin:e.linkedin,instagram:e.instagram},e.src))})}},1914:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);function i(e){return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"rotated-background",children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),e.children]})})}},1497:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893);function i(){return(0,n.jsx)("div",{className:"vert-spcr"})}},1806:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893),i=r(5675),a=r.n(i),s={src:"/_next/static/media/earth-clipped.6eeafd7e.png",height:197,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAXUlEQVR42mNIz5/BzAABcm5eicUm5l4FQLY0SEBHzwkiF5/e61tWM/l7TUP//7jEkv8GJt5f5RRM3CH6RJIkUnNmfOqfsvb/rPnzfyVl5P7y8Iv5LyVn9UZYWFAIAMo8HlsWkfHvAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},l={src:"/_next/static/media/mars.2068288d.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+ElEQVR42g3JvUrDQBwA8H+u14vFkiaro1sHN5cgFPERfIosfZ88hFOfwCVkcBEUAkIVExRspPm0d/e/L/Nbfx5M9tvbtRU67YWKnw4SHsoxJ6cumaqgH9u79cJg5nk2EoQAehQCf7755GdZpLobGlKTrpZ+1LQSKwGMG4TLhYdEs2imzlPqB8u45QoUZSxkUwY+rGaWMeKgqEVM0REY/hS89wY65cFLg2CMg9dWwZEj0O9W5ocON/tOY3my7G1U4LTCI5dsFCIn+deYVAM2jdRsVBp8sGA1MqdE81wPyWxXVL/X4Xxnnb1yBi+4lPan67PHsr4HgOIf8TKUEJ7jduYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};function o(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(a(),{priority:!0,className:"background-image",id:"mars",src:l,width:450,height:450,alt:""}),(0,n.jsx)(a(),{priority:!0,className:"background-image",id:"earth",src:s,width:450,height:450,alt:""})]})}r(7294)},8350:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(5893),i=r(5675),a=r.n(i),s=r(1329),l=r(1496),o={src:"/_next/static/media/logo.23d14ab1.svg",height:332,width:331,blurWidth:0,blurHeight:0};let d=[{text:"About",key:"AboutBtn",href:"#about",scroll:"about"},{text:"Projects",key:"ProjectsBtn",href:"#projects",scroll:"about"},{text:"Team",key:"TeamBtn",href:"#team",scroll:"team"},{text:"Sponsors",key:"SupportBtn",href:"#support_us",scroll:"support"},{text:"Contact",key:"ContactBtn",href:"#contact",scroll:"contact"}],c="#770000",u="#780000",h=(0,l.ZP)(s.Z)({boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"0px",borderRadius:"0px",lineHeight:1.5,backgroundColor:u,borderColor:u,"&:hover":{backgroundColor:"#8F0000",borderColor:c,boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:c}});function A(){return(0,n.jsxs)("div",{className:"top-bar",children:[(0,n.jsx)("div",{className:"logo w-50vw",children:(0,n.jsx)(a(),{priority:!0,className:"logo w-10vw",src:o,width:200,height:200,alt:""})}),(0,n.jsxs)("div",{className:"navbar",children:[(0,n.jsx)("div",{className:"off-screen-navbar"}),(0,n.jsx)("div",{className:"navbar-flex-container",children:d.map(e=>(0,n.jsxs)(h,{className:"navbar-btn",variant:"contained",href:e.href,onClick:()=>{var t;let r;return t=e.scroll,void(null!=(r=document.getElementById(t))&&r.scrollIntoView())},children:[" ",e.text," "]},e.key))})]})]})}},4263:function(e,t,r){"use strict";r.r(t),r.d(t,{Team:function(){return w},default:function(){return j}});var n=r(5893),i=r(1806),a=r(8350),s=r(1497),l=r(3734),o=r(1914),d=r(5675),c=r.n(d),u={src:"/_next/static/media/Rover.ad4ed910.png",height:420,width:594,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAsklEQVR42mMAgf8fbzCC6EM7FrpuWzejCcTetHI2MwMITO6exVzRncDmFlOjvmXDktZVa1bsSK6bkQmS2797IURRbvvs9cVts/+3Tpz1f/rsGf/L2+dsYoCB9dYM0lMnTq+eM2vm61m9Xf83Tir9v3XJxBmHt0yrvnB8ijbD1ih/j9VVaWe2zGhcd3hF14VDM7Kjd/Q2t23tz+y8cbzIggEE1ni6a6z188xYnxa3kwENAACFHk4G/4guJgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},h={src:"/_next/static/media/Arm.5cb895da.png",height:524,width:476,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAwUlEQVR42mM4uKqZmQEIdi6uTzmxsV0PxD67tYuJAQQW9maxgOhFfdkZe5bU1oAVLqpiYQCBaS3pjCB6cmOK/I6FNZtB7LhwL5bYyCBGhlBfe0ZvTzdmiCk5m9tLo1UYsIG+utSy/sa0FbP7SuIZGBiEQGIifh62Z9ZMLz5SlR99Kjkx7nFMuN8Hd3eXIAYzM9MWdyfLae3lcQ9iw33/+weE7jQzs3BhAAF9E3MWBhAQc5T19/dNszZg4ANx3dxcmQEKKzvY4gs50AAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},A={src:"/_next/static/media/Suspension.4d2dcb8e.png",height:430,width:580,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAsElEQVR42mMAgSDPrPR0v5YuEHtBT33zjo2b5odlbLRngIGEyhLDrKrGFB1pw/wp7a3f16/d9t/Rf3EzAwxUVRanRsfEf0tMSP8fEJH2Py0j9X9hcbcTAwjYWEf1hYTlbY+ODHzQWhD5riKv7nxq6bxMT7/Kyeo6JicYhKXkNzMwmFmCFDv6h6WEu1dFMjDo5ctI8S2VEGKwZUAGynK6obJKUidMDRjENbSM5BkYGBgA0Y84rvE13KsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},m={src:"/_next/static/media/WhoAreTheTerraformers.c608d187.png",height:196,width:1060,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGN8//aNBsP//5z//v5l/f//PwMjExMPkP+PmYXl879///4DADvwEvd0YxY0AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},f={src:"/_next/static/media/OurRover.ed0e7163.png",height:411,width:397,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AbStov8IAgEA1MvQAO7r2QA9TFT+FxEMAuTUx99GHe82AbCspf/z7+cABfr3AAACEgDq7e8AGBgL/QP89wPk286eAa2qo//v6dwACgsIAP8AFQDm6O0AEAwC/+vw7wGLpbbzAVlXT/8mIBwA7vDvABIOBAAZGR4A6vD2AM3O0AD3+Pz/ATg2MP9MQzAA1dfiAB8nLADr7e4A0dDW/wcGAwFvZlrmAXV2dv8VCt79FxQVA8vP4QDV4Pr/AAIC/D41KQVdVUl+AV5cV/4bIiYBEQj5AO3q5ADj6/8A3t7cAD01LqmLkp1YAXh6dUIiIR9+/P39Ov/8+gXc2tnj497WlmViaYgEBPUAmsl76EjSRxsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},g=r(9561),p=r(5152),b=r.n(p);let x=b()(()=>r.e(764).then(r.bind(r,1764)),{loadableGenerated:{webpack:()=>[1764]},loading:()=>(0,n.jsx)("p",{children:"Loading..."})});function j(){return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-betsween p-10",children:[(0,n.jsx)(x,{}),(0,n.jsx)("div",{id:"home"}),(0,n.jsx)(a.default,{}),(0,n.jsxs)(o.default,{children:[(0,n.jsx)("h1",{id:"about",children:" About the Terraformers "}),(0,n.jsxs)("div",{className:"content-flex-container",id:"about",children:[(0,n.jsx)(c(),{priority:!0,className:"content-img",id:"Rover",src:u,width:450,height:450,alt:""}),(0,n.jsxs)("p",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"We’re a group of programmers, engineers, designers, and amateur scientists from UMD out to create a functional rover here on Earth. We’re competing in Utah in 2024 with other rovers from around the globe, and will hopefully bring back a win for UMD!"]})]})]}),(0,n.jsx)(s.default,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{id:"projects",children:" Projects "}),(0,n.jsxs)("div",{className:"content-flex-container",children:[(0,n.jsx)(c(),{priority:!0,className:"content-img",id:"suspension",src:A,width:450,height:450,alt:""}),(0,n.jsx)("div",{}),(0,n.jsx)(c(),{priority:!0,className:"content-img",id:"arm",src:h,width:450,height:450,alt:""})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("br",{}),"The Terraformers are constantly working to improve our rover and reach out to the community. Find out what we’re working on now here!"]})]}),(0,n.jsx)(s.default,{}),(0,n.jsxs)(o.default,{children:[(0,n.jsx)("div",{id:"team"}),(0,n.jsx)(c(),{priority:!0,className:"content-img",id:"ter-img",src:m,width:450,height:450,alt:""}),(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"We’re a group of programmers, engineers, designers, and amateur scientists from UMD out to create a functional rover here on Earth. We’re competing in Utah in 2024 with other rovers from around the globe, and will hopefully bring back a win for UMD!"]})}),(0,n.jsx)(s.default,{}),(0,n.jsx)("div",{className:"vert-spcr",children:" "}),(0,n.jsx)(g.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(s.default,{})]}),(0,n.jsx)("div",{className:"vert-spcr",children:" "}),(0,n.jsx)("h1",{id:"support",children:" Support Us! "}),(0,n.jsxs)("div",{className:"content-flex-container",children:[(0,n.jsx)(c(),{priority:!0,className:"content-img",id:"our-rover",src:f,width:450,height:450,alt:""}),(0,n.jsxs)("div",{className:"f1",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Making a fully functional Mars rover is no easy task, that’s why we need your help! Supporting our program via our tier system gets you increasingly cool rewards and helps keep the rover up and running."]}),(0,n.jsx)(s.default,{}),(0,n.jsx)(l.default,{text:"Learn more"})]})]}),(0,n.jsx)(s.default,{}),(0,n.jsx)("h1",{id:"contact",children:" Contact Us "}),(0,n.jsx)("p",{children:"You can reach us at terraformers@terraformers.tech"}),(0,n.jsx)(s.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(i.default,{})]})}function w(){return(0,n.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-betsween p-10"})}},5152:function(e,t,r){e.exports=r(5677)}},function(e){e.O(0,[445,335,329,402,675,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);