(this["webpackJsonpreact-material-admin"]=this["webpackJsonpreact-material-admin"]||[]).push([[27],{294:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=104,i=280},308:function(e,t,a){"use strict";var n=a(336),i=a(294),c=a(125),r=a(1);t.a=function(e){var t=e.children,a=Object(c.b)().collapsed?i.a:i.b;return Object(r.jsx)(n.a,{color:"default",position:"fixed",sx:{width:{lg:"calc(100% - ".concat(a,"px)")},marginLeft:{lg:a}},children:t})}},309:function(e,t,a){"use strict";var n=a(289),i=a(335),c=a(287),r=a(315),l=a.n(r),o=a(125),s=a(1);t.a=function(e){var t=e.children,a=e.title,r=Object(o.b)().toggleDrawer;return Object(s.jsxs)(i.a,{sx:{px:{xs:3,sm:6}},children:[Object(s.jsx)(n.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:r,sx:{display:{lg:"none"},marginRight:2},children:Object(s.jsx)(l.a,{})}),Object(s.jsx)(c.a,{variant:"h2",component:"h1",sx:{flexGrow:1},children:a}),t]})}},448:function(e,t,a){"use strict";var n=a(384),i=a(413),c=a(468),r=a(47),l=a(827),o=a(832),s=a(446),d=a(719),j=a(1);t.a=function(e){var t=e.height,a=void 0===t?120:t,b=e.title,u=e.value,h=Object(r.a)();return Object(j.jsxs)(n.a,{children:[Object(j.jsx)(c.a,{title:b}),Object(j.jsx)(i.a,{children:Object(j.jsx)(l.a,{width:"99%",height:a,children:Object(j.jsxs)(o.a,{innerRadius:"85%",outerRadius:"85%",barSize:32,data:[{fill:h.palette.primary.main,value:u}],startAngle:90,endAngle:-270,children:[Object(j.jsx)(s.a,{type:"number",domain:[0,100],dataKey:"value",angleAxisId:0,tick:!1}),Object(j.jsx)(d.a,{cornerRadius:16,label:{fill:h.palette.text.primary,fontSize:h.typography.h1.fontSize,fontWeight:h.typography.h1.fontWeight,position:"center"},background:{fill:h.palette.background.default},dataKey:"value"})]})})})]})}},834:function(e,t,a){"use strict";a.r(t);var n=a(465),i=a(247),c=a(538),r=a(466),l=a(780),o=a(765),s=a(287),d=a(738),j=a.n(d),b=a(350),u=a.n(b),h=a(0),x=a.n(h),p=a(183),f=a(88),m=a(11),O=a(92),g=a(140),v=a(127),y=a(308),k=a(309),w=a(448),z=a(1),A=[{key:"profile.menu.activity",path:""},{key:"profile.menu.info",path:"./information"},{key:"profile.menu.password",path:"./password"}];t.default=function(){var e=Object(O.b)(),t=e.isLoggingOut,a=e.logout,d=e.userInfo,b=Object(v.b)(),h=Object(p.a)().t;return Object(z.jsxs)(x.a.Fragment,{children:[Object(z.jsx)(y.a,{children:Object(z.jsx)(k.a,{children:Object(z.jsx)(c.a,{"aria-label":"logout",color:"secondary",disabled:t,onClick:function(){a().catch((function(){return b.error(h("common.errors.unexpected.subTitle"))}))},children:Object(z.jsx)(j.a,{})})})}),Object(z.jsxs)(r.a,{container:!0,spacing:12,children:[Object(z.jsxs)(r.a,{item:!0,xs:12,md:4,marginTop:3,children:[Object(z.jsxs)(i.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",mb:6},children:[Object(z.jsx)(n.a,{sx:{bgcolor:"background.paper",mb:3,height:160,width:160},children:Object(z.jsx)(u.a,{sx:{fontSize:120}})}),Object(z.jsx)(s.a,{component:"div",variant:"h4",children:"".concat(null===d||void 0===d?void 0:d.firstName," ").concat(null===d||void 0===d?void 0:d.lastName)}),Object(z.jsx)(s.a,{variant:"body2",children:null===d||void 0===d?void 0:d.role})]}),Object(z.jsx)(w.a,{height:244,title:h("profile.completion.title"),value:75})]}),Object(z.jsxs)(r.a,{item:!0,xs:12,md:8,marginTop:3,children:[Object(z.jsx)(i.a,{sx:{mb:4},children:Object(z.jsx)(o.a,{"aria-label":"profile nav tabs",value:!1,children:A.map((function(e){return Object(z.jsx)(l.a,{activeClassName:"Mui-selected",end:!0,component:f.c,label:h(e.key),to:e.path},e.key)}))})}),Object(z.jsx)(g.a,{children:Object(z.jsx)(m.b,{})})]})]})]})}}}]);
//# sourceMappingURL=27.5918498d.chunk.js.map