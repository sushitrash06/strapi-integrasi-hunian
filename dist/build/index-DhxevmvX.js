import{cl as R,cm as T}from"./strapi-BASvZ4w3.js";import{a as t}from"./index-BRVyLNfZ.js";function N(f,a){var o,c;R(1,arguments);var e=T(f);if(isNaN(e.getTime()))throw new RangeError("Invalid time value");var i=String((o=a?.format)!==null&&o!==void 0?o:"extended"),r=String((c=a?.representation)!==null&&c!==void 0?c:"complete");if(i!=="extended"&&i!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(r!=="date"&&r!=="time"&&r!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var n="",d="",v=i==="extended"?"-":"",u=i==="extended"?":":"";if(r!=="time"){var g=t(e.getDate(),2),s=t(e.getMonth()+1,2),p=t(e.getFullYear(),4);n="".concat(p).concat(v).concat(s).concat(v).concat(g)}if(r!=="date"){var m=e.getTimezoneOffset();if(m!==0){var l=Math.abs(m),h=t(Math.floor(l/60),2),w=t(l%60,2),x=m<0?"+":"-";d="".concat(x).concat(h,":").concat(w)}else d="Z";var D=t(e.getHours(),2),b=t(e.getMinutes(),2),M=t(e.getSeconds(),2),S=n===""?"":"T",E=[D,b,M].join(u);n="".concat(n).concat(S).concat(E).concat(d)}return n}export{N as f};
