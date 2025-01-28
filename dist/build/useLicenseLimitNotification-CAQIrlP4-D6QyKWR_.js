import{u as m,g0 as L,n as p,ap as I,r as g}from"./strapi-BASvZ4w3.js";import{i as S}from"./isNil-XlGSH83W.js";const f="strapi-notification-seat-limit",T="https://cloud.strapi.io/profile/billing",E="https://strapi.io/billing/request-seats",A=()=>{const{formatMessage:e}=m(),{license:a,isError:r,isLoading:l}=L(),{toggleNotification:c}=p(),{pathname:i}=I(),{enforcementUserCount:u,permittedSeats:s,licenseLimitStatus:t,isHostedOnStrapiCloud:o}=a??{};g.useEffect(()=>{if(r||l)return;const d=!S(s)&&!window.sessionStorage.getItem(`${f}-${i}`)&&(t==="AT_LIMIT"||t==="OVER_LIMIT");let n;t==="OVER_LIMIT"?n="danger":t==="AT_LIMIT"&&(n="warning"),d&&c({type:n,message:e({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:t}),title:e({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:t,enforcementUserCount:u,permittedSeats:s}),link:{url:o?T:E,label:e({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${f}-${i}`,"true")}})},[c,a,i,e,l,s,t,u,o,r])};export{A as u};
