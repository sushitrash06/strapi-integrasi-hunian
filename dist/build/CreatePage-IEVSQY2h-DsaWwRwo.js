import{g as F,k as b,i as y,bn as L,n as T,u as k,a3 as N,r as D,bo as q,q as B,bp as V,bq as O,br as Q,bs as U,j as e,P as p,ba as _,N as G,O as H,b as R,F as u,S as P,a0 as z,bt as W,B as l,T as M,Q as g,U as d,X,ak as J,d as K,aN as Y,b1 as S}from"./strapi-DYsZX9B9.js";import{P as Z}from"./Permissions-gB8QZDch-C_N1T63y.js";import{f as ee}from"./index-BdNejX87.js";import"./groupBy-BdwgMJGB.js";import"./_baseEach-xte9IVOM.js";import"./index-BRVyLNfZ.js";const se=F().shape({name:b().required(y.required.id),description:b().required(y.required.id)}),re=()=>{const{id:s}=L(),{toggleNotification:o}=T(),{formatMessage:r}=k(),C=N(),m=D.useRef(null),{trackUsage:h}=q(),{_unstableFormatAPIError:f,_unstableFormatValidationErrors:x}=B(),{isLoading:E,currentData:j}=V({role:s??""}),{currentData:w,isLoading:v}=O({id:s},{skip:!s,refetchOnMountOrArgChange:!0}),[I]=Q(),[$]=U(),A=async(c,t)=>{try{h(s?"willDuplicateRole":"willCreateNewRole");const a=await I(c);if("error"in a){S(a.error)&&a.error.name==="ValidationError"?t.setErrors(x(a.error)):o({type:"danger",message:f(a.error)});return}const{permissionsToSend:n}=m.current?.getPermissions()??{};if(a.data.id&&Array.isArray(n)&&n.length>0){const i=await $({id:a.data.id,permissions:n});if("error"in i){S(i.error)&&i.error.name==="ValidationError"?t.setErrors(x(i.error)):o({type:"danger",message:f(i.error)});return}}o({type:"success",message:r({id:"Settings.roles.created",defaultMessage:"created"})}),C(`../roles/${a.data.id.toString()}`,{replace:!0})}catch{o({type:"danger",message:r({id:"notification.error",defaultMessage:"An error occurred"})})}};return E&&v||!j?e.jsx(p.Loading,{}):e.jsxs(_,{children:[e.jsx(p.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(G,{initialValues:{name:"",description:`${r({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${ee(new Date,"PPP")}`},onSubmit:A,validationSchema:se,validateOnChange:!1,children:({values:c,errors:t,handleReset:a,handleChange:n,isSubmitting:i})=>e.jsx(H,{children:e.jsxs(e.Fragment,{children:[e.jsx(R.Header,{primaryAction:e.jsxs(u,{gap:2,children:[e.jsx(P,{variant:"secondary",onClick:()=>{a(),m.current?.resetForm()},children:r({id:"app.components.Button.reset",defaultMessage:"Reset"})}),e.jsx(P,{type:"submit",loading:i,startIcon:e.jsx(z,{}),children:r({id:"global.save",defaultMessage:"Save"})})]}),title:r({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:r({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.jsx(W,{fallback:"../roles"})}),e.jsx(R.Content,{children:e.jsxs(u,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(l,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(u,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(u,{justifyContent:"space-between",children:[e.jsxs(l,{children:[e.jsx(l,{children:e.jsx(M,{fontWeight:"bold",children:r({id:"global.details",defaultMessage:"Details"})})}),e.jsx(l,{children:e.jsx(M,{variant:"pi",textColor:"neutral600",children:r({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),e.jsx(ae,{children:r({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),e.jsxs(g.Root,{gap:4,children:[e.jsx(g.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{name:"name",error:t.name&&r({id:t.name}),required:!0,children:[e.jsx(d.Label,{children:r({id:"global.name",defaultMessage:"Name"})}),e.jsx(X,{onChange:n,value:c.name}),e.jsx(d.Error,{})]})}),e.jsx(g.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{name:"description",error:t.description&&r({id:t.description}),children:[e.jsx(d.Label,{children:r({id:"global.description",defaultMessage:"Description"})}),e.jsx(J,{onChange:n,value:c.description})]})})]})]})}),e.jsx(l,{shadow:"filterShadow",hasRadius:!0,children:e.jsx(Z,{isFormDisabled:!1,ref:m,permissions:w,layout:j})})]})})]})})})]})},ae=K.div`
  border: 1px solid ${({theme:s})=>s.colors.primary200};
  background: ${({theme:s})=>s.colors.primary100};
  padding: ${({theme:s})=>`${s.spaces[2]} ${s.spaces[4]}`};
  color: ${({theme:s})=>s.colors.primary600};
  border-radius: ${({theme:s})=>s.borderRadius};
  font-size: 1.2rem;
  font-weight: bold;
`,ce=()=>{const s=Y(o=>o.admin_app.permissions.settings?.roles.create);return e.jsx(p.Protect,{permissions:s,children:e.jsx(re,{})})};export{re as CreatePage,ce as ProtectedCreatePage};
