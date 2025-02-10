import{j as e,P as c,aF as R,u as f,q as v,n as C,fZ as P,f_ as w,t as h,f$ as x,b as g,Z as F,S as A,a0 as I,F as L,T as E,Q as p,aV as D,U as d,aW as U,aX as _,bl as B}from"./strapi-CnAUqVXw.js";import{S as H}from"./schemas-DdA2ic2U-DEDHQl7G.js";const m=R,V=()=>{const{formatMessage:s}=f(),{formatAPIError:r}=v(),{toggleNotification:n}=C(),{data:u,isLoading:a}=P(),[t,{isLoading:S}]=w(),j=m(i=>i.admin_app.permissions.settings?.releases),{allowedActions:{canUpdate:T}}=h(j),{timezoneList:y}=x(new Date),z=async i=>{const{defaultTimezone:l}=i,b=y.some(o=>o.value===l),M=!l||!b?{defaultTimezone:null}:{...i};try{const o=await t(M);"data"in o?n({type:"success",message:s({id:"content-releases.pages.Settings.releases.setting.default-timezone-notification-success",defaultMessage:"Default timezone updated."})}):B(o.error)?n({type:"danger",message:r(o.error)}):n({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})}catch{n({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})})}};return a?e.jsx(c.Loading,{}):e.jsxs(g.Root,{children:[e.jsx(c.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Releases"})}),e.jsx(c.Main,{"aria-busy":a,tabIndex:-1,children:e.jsx(F,{method:"PUT",initialValues:{defaultTimezone:u?.data.defaultTimezone},onSubmit:z,validationSchema:H,children:({modified:i,isSubmitting:l})=>e.jsxs(e.Fragment,{children:[e.jsx(g.Header,{primaryAction:T?e.jsx(A,{disabled:!i||S,loading:l,startIcon:e.jsx(I,{}),type:"submit",children:s({id:"global.save",defaultMessage:"Save"})}):null,title:s({id:"content-releases.pages.Settings.releases.title",defaultMessage:"Releases"}),subtitle:s({id:"content-releases.pages.Settings.releases.description",defaultMessage:"Create and manage content updates"})}),e.jsx(g.Content,{children:e.jsxs(L,{direction:"column",background:"neutral0",alignItems:"stretch",padding:6,gap:6,shadow:"filterShadow",hasRadius:!0,children:[e.jsx(E,{variant:"delta",tag:"h2",children:s({id:"content-releases.pages.Settings.releases.preferences.title",defaultMessage:"Preferences"})}),e.jsx(p.Root,{children:e.jsx(p.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(G,{})})})]})})]})})})]})},G=()=>{const s=m(t=>t.admin_app.permissions.settings?.releases),{allowedActions:{canUpdate:r}}=h(s),{formatMessage:n}=f(),{timezoneList:u}=x(new Date),a=D("defaultTimezone");return e.jsxs(d.Root,{name:"defaultTimezone",hint:n({id:"content-releases.pages.Settings.releases.timezone.hint",defaultMessage:"The timezone of every release can still be changed individually. "}),error:a.error,children:[e.jsx(d.Label,{children:n({id:"content-releases.pages.Settings.releases.timezone.label",defaultMessage:"Default timezone"})}),e.jsx(U,{autocomplete:{type:"list",filter:"contains"},onChange:t=>a.onChange("defaultTimezone",t),onTextValueChange:t=>a.onChange("defaultTimezone",t),onClear:()=>a.onChange("defaultTimezone",""),value:a.value,disabled:!r,children:u.map(t=>e.jsx(_,{value:t.value,children:t.value.replace(/&/," ")},t.value))}),e.jsx(d.Hint,{}),e.jsx(d.Error,{})]})},Z=()=>{const s=m(r=>r.admin_app.permissions.settings?.releases?.read);return e.jsx(c.Protect,{permissions:s,children:e.jsx(V,{})})};export{Z as ProtectedReleasesSettingsPage};
