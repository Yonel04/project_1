function i(t){let n,a=t[0],e=1;for(;e<t.length;){const o=t[e],l=t[e+1];if(e+=2,(o==="optionalAccess"||o==="optionalCall")&&a==null)return;o==="access"||o==="optionalAccess"?(n=a,a=l(a)):(o==="call"||o==="optionalCall")&&(a=l((...c)=>a.call(n,...c)),n=void 0)}return a}function s(){const t=i([navigator,"optionalAccess",n=>n.userAgentData,"optionalAccess",n=>n.platform])||i([navigator,"optionalAccess",n=>n.platform])||i([navigator,"optionalAccess",n=>n.userAgent])||"unknown";return/iPad|iPhone|iPod/.test(t)?!0:navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(t)}export{s as i};
