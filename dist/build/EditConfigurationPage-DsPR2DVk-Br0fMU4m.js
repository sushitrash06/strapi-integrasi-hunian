import{bo as T,u as I,n as A,q as D,cy as N,cD as v,f5 as k,r as w,eQ as O,j as s,P as u}from"./strapi-CnAUqVXw.js";import{C as Q,T as R}from"./Form-C1IcWm1u-Ceud23bi.js";import{u as U}from"./hooks-E5u1mcgM-BrUe1GZV.js";import{s as q}from"./objects-D6yBsdmx-FgpZpFNi.js";import"./useDragAndDrop-DJ6jqvZN-BBSVFwPt.js";import"./ComponentIcon-u4bIXTFY-CfDJCkea.js";import"./FieldTypeIcon-CMlNO8PE-Rv87X5tk.js";import"./getEmptyImage-CjqolaH3.js";const G=()=>{const{trackUsage:o}=T(),{formatMessage:n}=I(),{toggleNotification:a}=A(),{_unstableFormatAPIError:c}=D(),{isLoading:F,schema:y,model:L}=N(),{isLoading:S,error:h,list:E,edit:g}=v(),{fieldSizes:x,error:d,isLoading:_,isFetching:j}=k(void 0,{selectFromResult:e=>{const l=Object.entries(e.data?.fieldSizes??{}).reduce((r,[t,{default:i}])=>(r[t]=i,r),{});return{isFetching:e.isFetching,isLoading:e.isLoading,error:e.error,fieldSizes:l}}});w.useEffect(()=>{d&&a({type:"danger",message:c(d)})},[d,c,a]);const C=F||S||_||j,[M]=O(),P=async e=>{try{o("willSaveContentTypeLayout");const l=Object.entries(E.metadatas).reduce((t,[i,{mainField:m,...f}])=>{const z=g.metadatas[i],{__temp_key__:H,size:V,name:$,...b}=e.layout.flatMap(p=>p.children).find(p=>p.name===i)??{};return t[i]={edit:{...z,...b},list:f},t},{}),r=await M({layouts:{edit:e.layout.map(t=>t.children.reduce((i,{name:m,size:f})=>m!==R?[...i,{name:m,size:f}]:i,[])),list:E.layout.map(t=>t.name)},settings:q(e.settings,"displayName",void 0),metadatas:l,uid:L});"data"in r?(o("didEditEditSettings"),a({type:"success",message:n({id:"notification.success.saved",defaultMessage:"Saved"})})):a({type:"danger",message:c(r.error)})}catch{a({type:"danger",message:n({id:"notification.error",defaultMessage:"An error occurred"})})}};return C?s.jsx(u.Loading,{}):d||h||!y?s.jsx(u.Error,{}):s.jsxs(s.Fragment,{children:[s.jsx(u.Title,{children:`Configure ${g.settings.displayName} Edit View`}),s.jsx(Q,{onSubmit:P,attributes:y.attributes,fieldSizes:x,layout:g})]})},te=()=>{const o=U(n=>n.admin_app.permissions.contentManager?.collectionTypesConfigurations);return s.jsx(u.Protect,{permissions:o,children:s.jsx(G,{})})};export{G as EditConfigurationPage,te as ProtectedEditConfigurationPage};
