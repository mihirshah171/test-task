(this["webpackJsonpatc-frontend-starter"]=this["webpackJsonpatc-frontend-starter"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var s=a(2),l=a(0),c=a.n(l),o=a(29),n=a.n(o),i=(a(108),a(109),a(95)),d=a(14),r=(a(38),a(193),a(196),a(194),a(98),a(197),a.p,a(93)),h=a(94),b=a(102),m=a(99),j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABFQAAARUBKX4CGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD1SURBVFiF1ZQ7DsIwDECfuGZhaacegYWRgStWMFScg7AUqUA+dmIXUalLEue9JLYBTsAEdCEEtviBAzADZ4AbEIAH0G8A7xdWWCTeBlwlIqz9a2L0lkgddL3ATSJ3y58LzSVKTxwLMJOQ5FcqsFlCmty5DaolNJVV2kgtoS1ryWnEEjU9RXqlRYnahqZJqqRESzfVZvaXRAtcLZCQaCtXbUBEoqlh7fj191dPEIGPkTGfJIzBc9VhKpCDt0qYwFskzOC1EqbwGglzuFbCBa6RcINLJVzhEgl3eEkCYPCGZyQ6gPsW8ITEBHBZJAZv+EqiB67A8QleTA2oJqi7DQAAAABJRU5ErkJggg==",u=a.p+"static/media/activity.00799587.png",p=a.p+"static/media/home.283e8f3a.png",O=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={modal:!1,collapse:!1,collapseDropDown:!1,collapseSubDropDown:!1,collapseSubSubDropDown:!1,collapseSubSubSubDropDown:!1,selectOne:!1,activityModal:!1,homeModal:!1,dropdown:!1},e}return Object(h.a)(a,[{key:"handleClick",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleCancel",value:function(){this.setState({modal:!1,activityModal:!1,homeModal:!1,collapse:!1,collapseDropDown:!1,collapseSubDropDown:!1,collapseSubSubSubDropDown:!1,selectOne:!1})}},{key:"handleActivityModalCancel",value:function(){this.setState({activityModal:!this.state.activityModal})}},{key:"handleHomeModalCancel",value:function(){this.setState({homeModal:!this.state.homeModal})}},{key:"handleCollapse",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"handleCollapseDropDown",value:function(){this.setState({collapseDropDown:!this.state.collapseDropDown})}},{key:"handleCollapseSubDropDown",value:function(){this.setState({collapseSubDropDown:!this.state.collapseSubDropDown})}},{key:"handleCollapseSubSubDropDown",value:function(){this.setState({collapseSubSubDropDown:!this.state.collapseSubSubDropDown})}},{key:"handleCollapseSubSubSubDropDown",value:function(){this.setState({collapseSubSubSubDropDown:!this.state.collapseSubSubSubDropDown})}},{key:"handleSelectOne",value:function(){this.setState({selectOne:!this.state.selectOne})}},{key:"handleActivityOption",value:function(){this.setState({activityModal:!this.state.activityModal})}},{key:"handleHomeOption",value:function(){this.setState({homeModal:!this.state.homeModal})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"product-page-wrapper",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsxs)("div",{className:"product-popup",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#myModal",onClick:function(){return e.handleClick()},children:"Open modal"}),Object(s.jsx)("div",{className:this.state.activityModal?"modal-open modal show":"modal",id:"myModal",children:Object(s.jsx)("div",{className:"modal-dialog",children:Object(s.jsx)("div",{className:"modal-content",children:Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h4",{className:"modal-title",children:"Activity"}),Object(s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:Object(s.jsx)("img",{src:j,alt:"cancel-modal",onClick:function(){return e.handleActivityModalCancel()}})})]})})})}),Object(s.jsx)("div",{className:this.state.homeModal?"modal-open modal show":"modal",id:"myModal",children:Object(s.jsx)("div",{className:"modal-dialog",children:Object(s.jsx)("div",{className:"modal-content",children:Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h4",{className:"modal-title",children:"Home"}),Object(s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:Object(s.jsx)("img",{src:j,alt:"cancel-modal",onClick:function(){return e.handleHomeModalCancel()}})})]})})})}),Object(s.jsx)("div",{className:!this.state.modal||this.state.activityModal||this.state.homeModal?"modal":"modal-open modal show",id:"myModal",children:Object(s.jsx)("div",{className:"modal-dialog",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h4",{className:"modal-title",children:"Create your main product"}),Object(s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:Object(s.jsx)("img",{src:j,alt:"cancel-modal",onClick:function(){return e.handleCancel()}})})]}),Object(s.jsxs)("div",{className:"modal-body",children:[Object(s.jsx)("div",{className:"bs-example product-info",children:Object(s.jsx)("div",{className:"accordion",id:"accordionExample",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header",id:"headingOne",children:Object(s.jsx)("h2",{className:"mb-0",onClick:function(){return e.handleCollapse()},children:Object(s.jsxs)("button",{type:"button",className:this.state.collapse?"btn btn-link collapsed":"btn btn-link","data-toggle":"collapse","data-target":"#collapseOne",children:[Object(s.jsx)("i",{className:this.state.collapse?"fa fa-minus":"fa fa-plus"}),Object(s.jsx)("b",{children:"I will import a main product information from my other calendar"})]})})}),Object(s.jsx)("div",{id:"collapseOne",className:this.state.collapse?"collapse show":"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("p",{children:" Select product to resuse from another calender "}),Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(s.jsx)("ul",{className:"navbar-nav",children:Object(s.jsxs)("li",{className:this.state.collapseDropDown?"nav-item dropdown show":"nav-item dropdown ",children:[Object(s.jsxs)("a",{className:"nav-link dropdown-toggle",href:!0,id:"navbarDropdownMenuLink","data-toggle":"dropdown",ariaHasPopup:"true","aria-expanded":"true",onClick:function(){return e.handleCollapseDropDown()},children:[" Select ",Object(s.jsx)("i",{className:"fas fa-chevron-right"})," "]}),Object(s.jsxs)("ul",{className:this.state.collapseDropDown?"dropdown-menu show":"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(s.jsx)("li",{children:Object(s.jsxs)("a",{className:"dropdown-item border-bottom",href:!0,children:["calender title 1 ",Object(s.jsx)("i",{className:"fas fa-chevron-right"})]})}),Object(s.jsxs)("li",{className:"dropdown-submenu",children:[Object(s.jsxs)("a",{onClick:function(){return e.handleCollapseSubDropDown()},className:"dropdown-item dropdown-toggle border-bottom",href:!0,children:["Calender title 2 ",Object(s.jsx)("i",{className:"fas fa-chevron-right"})]}),Object(s.jsxs)("ul",{className:this.state.collapseSubDropDown?"dropdown-menu show":"dropdown-menu",children:[Object(s.jsxs)("li",{className:"dropdown-submenu bg-yellow",children:[Object(s.jsxs)("a",{onClick:function(){return e.handleCollapseSubSubDropDown()},className:"dropdown-item dropdown-toggle border-bottom",href:!0,children:["Activity",Object(s.jsx)("i",{className:"fas fa-chevron-right"})]}),Object(s.jsxs)("ul",{className:this.state.collapseSubSubDropDown?"dropdown-menu show":"dropdown-menu",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"dropdown-item",href:!0,children:"Subsubmenu action"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"dropdown-item",href:!0,children:"Another subsubmenu action"})})]})]}),Object(s.jsxs)("li",{className:"dropdown-submenu bg-yellow",children:[Object(s.jsxs)("a",{onClick:function(){return e.handleCollapseSubSubSubDropDown()},className:"dropdown-item dropdown-toggle",href:!0,children:["itinerary ",Object(s.jsx)("i",{className:"fas fa-chevron-right"})]}),Object(s.jsxs)("ul",{className:this.state.collapseSubSubSubDropDown?"dropdown-menu show bg-yellow fontstyle":"dropdown-menu bg-yellow fontstyle",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"dropdown-item",href:!0,children:"Main product1"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"dropdown-item",href:!0,children:"Main product2"})})]})]})]})]})]})]})})})})]})})]})})}),Object(s.jsx)("div",{className:"product-text",children:Object(s.jsx)("p",{children:"Describe the main product you will like to use to attract travelers to make a purchase. This is what gets you access to customers calendar. This is what gets you access to customers calendar. You'll be able to add more details next."})}),Object(s.jsxs)("form",{action:"/action_page.php",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsxs)("label",{for:"usr",children:["Enter Your Product Title ",Object(s.jsx)("sup",{children:Object(s.jsx)("i",{className:"fas fa-info-circle",style:{color:"#e2c022"}})})]}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"usr",name:"username"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsxs)("label",{for:"usr",children:["Select Category ",Object(s.jsx)("sup",{children:Object(s.jsx)("i",{className:"fas fa-info-circle",style:{color:"#e2c022"}})})]}),Object(s.jsxs)("div",{className:this.state.selectOne?"dropdown show":"dropdown",children:[Object(s.jsxs)("button",{onClick:function(){return e.handleSelectOne()},type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown",children:["Select One  ",Object(s.jsx)("i",{className:"fas fa-chevron-right"})]}),Object(s.jsxs)("div",{className:this.state.selectOne?"dropdown-menu show":"dropdown-menu",children:[Object(s.jsxs)("a",{onClick:function(){return e.handleActivityOption()},className:"dropdown-item",href:!0,children:[Object(s.jsx)("img",{src:u,alt:"activity"})," Activity"]}),Object(s.jsxs)("a",{onClick:function(){return e.handleHomeOption()},className:"dropdown-item",href:!0,children:[Object(s.jsx)("img",{src:p,alt:"home"})," Home"]})]})]})]}),Object(s.jsxs)("div",{className:"form-group textarea",children:[Object(s.jsx)("label",{for:"comment",children:"Why shold travellers book this tour?"}),Object(s.jsx)("textarea",{className:"form-control",rows:"5",id:"comment",placeholder:"Lorem Ipsum is simply dummy text of the printing "}),Object(s.jsx)("p",{children:"100 characters needed"})]})]})]}),Object(s.jsxs)("div",{className:"modal-footer",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-danger continue","data-dismiss":"modal",children:"Continue"}),Object(s.jsxs)("button",{type:"button",className:"btn btn-danger help","data-dismiss":"modal",children:[Object(s.jsx)("i",{className:"far fa-question-circle"})," Help"]})]})]})})})]})})}),Object(s.jsx)("div",{className:this.state.modal?"modal-backdrop show":""})]})}}]),a}(l.Component),x=function(){return Object(s.jsx)(i.a,{children:Object(s.jsx)(d.b,{children:Object(s.jsx)(O,{})})})};a(187),a(188),a(189);var w=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(x,{})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,198)).then((function(t){var a=t.getCLS,s=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),s(e),l(e),c(e),o(e)}))};n.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),f()}},[[190,1,2]]]);
//# sourceMappingURL=main.f1f37237.chunk.js.map