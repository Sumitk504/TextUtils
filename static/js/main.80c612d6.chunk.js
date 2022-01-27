(this.webpackJsonptextut=this.webpackJsonptextut||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),n=a(15),s=a.n(n),l=(a(21),a(7)),i=(a(22),a(0));function r(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],o=t[1],n=Object(c.useState)("Enable dark mode"),s=Object(l.a)(n,2),r=s[0],d=s[1];return Object(i.jsxs)("div",{className:"container",style:a,children:[Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){"black"===a.color?(o({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable Light Mode")):(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},children:r})]})}var d=a(8);function b(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/about",children:e.aboutText})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link",to:"/",children:"Home"})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"white"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),o=a[0],n=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{Color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:o,style:{backgroundColor:"dark"===e.mode?"#4c84d7":"white"},onChange:function(e){n(e.target.value)},id:"mybox",rows:"8"})}),Object(i.jsx)("button",{className:"btn btn-primary my-1",onClick:function(){var e=o.toUpperCase();n(e)},children:"Convert to UppeCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-3 my-1",onClick:function(){var e=o.toLowerCase();n(e)},children:"Convert to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-0 my-1",onClick:function(){var e=document.getElementById("mybox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"})]}),Object(i.jsxs)("div",{className:"container",style:{Color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h3",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[o.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",o.length," characters"]}),Object(i.jsxs)("p",{children:[.008*o.split(" ").length," minuts to read"]}),Object(i.jsx)("h3",{children:"Preview"}),Object(i.jsx)("p",{children:o.length>0?o:"Enter something in the above textbox to preview it here"})]})]})}b.defaultProps={aboutText:"About us"};var j=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],o=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{title:"Textut",mode:a,toggleMode:function(){"light"===a?(o("dark"),document.body.style.backgroundColor="#4c84d7"):(o("light"),document.body.style.backgroundColor="white")}}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/about",children:Object(i.jsx)(r,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{heading:"Enter the text to analyze",mode:a})}),Object(i.jsx)(d.b,{})]}),Object(i.jsx)(h,{heading:"Enter the text to analyze",mode:a})]})]})})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),o(e),n(e),s(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),m()}},[[32,1,2]]]);
//# sourceMappingURL=main.80c612d6.chunk.js.map