import{u as L,aN as O,q as N,n as v,r as M,aO as $,t as V,a3 as q,o as W,j as e,P as j,b as T,S as H,be as w,bf as U,y as z,bg as G,z as Q,A as _,C as x,T as i,V as J,D as K,bh as X,G as Y,bi as Z,bj as ee,bk as se,aa as te,E as f,F as ae,B as ne,I as oe,bl as le}from"./strapi-CnAUqVXw.js";import{u as ie}from"./useAdminRoles-BuTW6fsO-BVzMUCc8.js";import{s as re}from"./selectors-BZApelK9-DLMHm2HO.js";const de=({id:s,name:n,description:a,usersCount:c,icons:u,rowIndex:m,canUpdate:g,cursor:h})=>{const{formatMessage:r}=L(),[,E]=u,d=r({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:c});return e.jsxs(_,{cursor:h,"aria-rowindex":m,onClick:g?E.onClick:void 0,children:[e.jsx(f,{maxWidth:"13rem",children:e.jsx(i,{ellipsis:!0,textColor:"neutral800",children:n})}),e.jsx(f,{maxWidth:"25rem",children:e.jsx(i,{ellipsis:!0,textColor:"neutral800",children:a})}),e.jsx(f,{children:e.jsx(i,{textColor:"neutral800",children:d})}),e.jsx(f,{children:e.jsx(ae,{justifyContent:"flex-end",onClick:o=>o.stopPropagation(),children:u.map((o,p)=>o?e.jsx(ne,{paddingLeft:p===0?0:1,children:e.jsx(oe,{...o,variant:"ghost"})},o.label):null)})})]},s)},ce=()=>{const{formatMessage:s}=L(),n=O(re),{formatAPIError:a}=N(),{toggleNotification:c}=v(),[u,m]=M.useState(!1),[{query:g}]=$(),{isLoading:h,allowedActions:{canCreate:r,canDelete:E,canRead:d,canUpdate:o}}=V(n.settings?.roles),{roles:p,refetch:A}=ie({filters:g?._q?{name:{$containsi:g._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:h||!d}),C=q(),[{roleToDelete:y},b]=M.useReducer(ge,ue),{post:k}=W(),P=async()=>{try{b({type:"ON_REMOVE_ROLES"}),await k("/admin/roles/batch-delete",{ids:[y]}),await A(),b({type:"RESET_DATA_TO_DELETE"})}catch(t){le(t)&&c({type:"danger",message:a(t)})}},R=()=>C("new"),D=()=>m(t=>!t),S=t=>l=>{l.preventDefault(),l.stopPropagation(),t.usersCount?c({type:"info",message:s({id:"Roles.ListPage.notification.delete-not-allowed"})}):(b({type:"SET_ROLE_TO_DELETE",id:t.id}),D())},F=t=>l=>{l.preventDefault(),l.stopPropagation(),C(`duplicate/${t.id}`)},B=p.length+1,I=6;return h?e.jsx(j.Loading,{}):e.jsxs(j.Main,{children:[e.jsx(j.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(T.Header,{primaryAction:r?e.jsx(H,{onClick:R,startIcon:e.jsx(w,{}),size:"S",children:s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:s({id:"global.roles",defaultMessage:"roles"}),subtitle:s({id:"Settings.roles.list.description",defaultMessage:"List of roles"})}),d&&e.jsx(T.Action,{startActions:e.jsx(U,{label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:s({id:"global.roles",defaultMessage:"roles"})})})}),d&&e.jsx(T.Content,{children:e.jsxs(z,{colCount:I,rowCount:B,footer:r?e.jsx(G,{cursor:"pointer",onClick:R,icon:e.jsx(w,{}),children:s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[e.jsx(Q,{children:e.jsxs(_,{"aria-rowindex":1,children:[e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.name",defaultMessage:"Name"})})}),e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.description",defaultMessage:"Description"})})}),e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.users",defaultMessage:"Users"})})}),e.jsx(x,{children:e.jsx(J,{children:s({id:"global.actions",defaultMessage:"Actions"})})})]})}),e.jsx(K,{children:p?.map((t,l)=>e.jsx(de,{cursor:"pointer",id:t.id,name:t.name,description:t.description,usersCount:t.usersCount,icons:[r&&{onClick:F(t),label:s({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),children:e.jsx(X,{})},o&&{onClick:()=>C(t.id.toString()),label:s({id:"app.utils.edit",defaultMessage:"Edit"}),children:e.jsx(Y,{})},E&&{onClick:S(t),label:s({id:"global.delete",defaultMessage:"Delete"}),children:e.jsx(Z,{})}].filter(Boolean),rowIndex:l+2,canUpdate:o},t.id))})]})}),e.jsx(ee.Root,{open:u,onOpenChange:D,children:e.jsx(se,{onConfirm:P})})]})},ue={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ge=(s,n)=>te(s,a=>{switch(n.type){case"ON_REMOVE_ROLES":{a.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{a.shouldRefetchData=!0,a.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{a.shouldRefetchData=!1,a.roleToDelete=null,a.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{a.roleToDelete=n.id;break}default:return a}}),fe=()=>{const s=O(n=>n.admin_app.permissions.settings?.roles.read);return e.jsx(j.Protect,{permissions:s,children:e.jsx(ce,{})})};export{ce as ListPage,fe as ProtectedListPage};
