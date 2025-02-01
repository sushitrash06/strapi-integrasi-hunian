import{u as h,aF as S,t as I,g0 as j,j as e,Q as C,T as i,F as d,b6 as R,at as A,c as E,e as _}from"./strapi-DYsZX9B9.js";import{s as F}from"./selectors-BZApelK9-BJwa2RFS.js";const M="https://cloud.strapi.io/profile/billing",T="https://strapi.io/billing/request-seats",O=()=>{const{formatMessage:s}=h(),{settings:l}=S(F),{isLoading:a,allowedActions:{canRead:c,canCreate:m,canUpdate:u,canDelete:p}}=I(l?.users??{}),{license:n,isError:g,isLoading:x}=j({enabled:!a&&c&&m&&u&&p});if(g||(a||x)||!n)return null;const{licenseLimitStatus:L,enforcementUserCount:o,permittedSeats:t,isHostedOnStrapiCloud:r}=n;return t?e.jsxs(C.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:[e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),e.jsxs(d,{gap:2,children:[e.jsx(d,{children:e.jsx(i,{tag:"p",children:s({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:t,enforcementUserCount:o,text:f=>e.jsx(i,{fontWeight:"semiBold",textColor:o>t?"danger500":void 0,children:f})})})}),L==="OVER_LIMIT"&&e.jsx(R,{label:s({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:e.jsx(A,{width:"1.4rem",height:"1.4rem",fill:"danger500"})})]}),e.jsx(E,{href:r?M:T,isExternal:!0,endIcon:e.jsx(_,{}),children:s({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:r})})]}):null};export{O as AdminSeatInfoEE};
