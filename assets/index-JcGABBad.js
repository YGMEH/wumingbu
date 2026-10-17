const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/level-86xCa90C.js","assets/util-CghuE2jn.js","assets/level-CLmiCo7F.js"])))=>i.map(i=>d[i]);
var vp=Object.defineProperty;var xp=(r,e,t)=>e in r?vp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var _=(r,e,t)=>xp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rc="170",yp=0,Mh=1,_p=2,zd=1,Hd=2,ri=3,Vn=0,Xt=1,Ct=2,Ut=0,Ai=1,Gt=2,Sh=3,El=4,Vd=5,Pn=100,Mp=101,Sp=102,wp=103,bp=104,dr=200,Tp=201,Ep=202,Ap=203,Al=204,Cl=205,Rl=206,Cp=207,Pl=208,Rp=209,Pp=210,Lp=211,Dp=212,Ip=213,Np=214,Ll=0,Dl=1,Il=2,Ls=3,Nl=4,Ul=5,kl=6,Ol=7,Gd=0,Up=1,kp=2,Ci=0,Wd=1,Xd=2,Yd=3,Pc=4,Op=5,qd=6,jd=7,wh="attached",Fp="detached",Kd=300,Ds=301,Is=302,Fl=303,Bl=304,ha=306,sn=1e3,bi=1001,Ar=1002,Rt=1003,Zd=1004,fr=1005,Zt=1006,Xo=1007,ci=1008,Gn=1009,Jd=1010,Qd=1011,Cr=1012,Lc=1013,Wi=1014,In=1015,un=1016,Dc=1017,Ic=1018,Xi=1020,$d=35902,ef=1021,tf=1022,cn=1023,nf=1024,sf=1025,Cs=1026,Yi=1027,ua=1028,Nc=1029,rf=1030,Uc=1031,kc=1033,Yo=33776,qo=33777,jo=33778,Ko=33779,zl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,Yl=37496,ql=37808,jl=37809,Kl=37810,Zl=37811,Jl=37812,Ql=37813,$l=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,Zo=36492,ac=36494,lc=36495,of=36283,cc=36284,hc=36285,uc=36286,Oc=2200,Fc=2201,Bp=2202,Rr=2300,Pr=2301,ya=2302,Ms=2400,Ss=2401,na=2402,Bc=2500,zp=2501,Hp=0,af=1,dc=2,Vp=3200,Gp=3201,zc=0,Wp=1,Ln="",pt="srgb",Qt="srgb-linear",da="linear",ct="srgb",Qi=7680,bh=519,Xp=512,Yp=513,qp=514,lf=515,jp=516,Kp=517,Zp=518,Jp=519,fc=35044,zn=35048,Th="300 es",hi=2e3,ia=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eh=1234567;const vr=Math.PI/180,Ns=180/Math.PI;function xn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Nt(r,e,t){return Math.max(e,Math.min(t,r))}function Hc(r,e){return(r%e+e)%e}function Qp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function $p(r,e,t){return r!==e?(t-r)/(e-r):0}function xr(r,e,t){return(1-t)*r+t*e}function em(r,e,t,n){return xr(r,e,1-Math.exp(-t*n))}function tm(r,e=1){return e-Math.abs(Hc(r,e*2)-e)}function nm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function im(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function sm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function rm(r,e){return r+Math.random()*(e-r)}function om(r){return r*(.5-Math.random())}function am(r){r!==void 0&&(Eh=r);let e=Eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lm(r){return r*vr}function cm(r){return r*Ns}function hm(r){return(r&r-1)===0&&r!==0}function um(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fm(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*v,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*v,a*c);break;case"ZYZ":r.set(l*v,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const it={DEG2RAD:vr,RAD2DEG:Ns,generateUUID:xn,clamp:Nt,euclideanModulo:Hc,mapLinear:Qp,inverseLerp:$p,lerp:xr,damp:em,pingpong:tm,smoothstep:nm,smootherstep:im,randInt:sm,randFloat:rm,randFloatSpread:om,seededRandom:am,degToRad:lm,radToDeg:cm,isPowerOfTwo:hm,ceilPowerOfTwo:um,floorPowerOfTwo:dm,setQuaternionFromProperEuler:fm,normalize:ht,denormalize:Dn};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],v=n[8],x=i[0],p=i[3],g=i[6],w=i[1],M=i[4],y=i[7],L=i[2],P=i[5],C=i[8];return s[0]=o*x+a*w+l*L,s[3]=o*p+a*M+l*P,s[6]=o*g+a*y+l*C,s[1]=c*x+h*w+u*L,s[4]=c*p+h*M+u*P,s[7]=c*g+h*y+u*C,s[2]=d*x+f*w+v*L,s[5]=d*p+f*M+v*P,s[8]=d*g+f*y+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,v=t*u+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new qe;function cf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pm(){const r=Lr("canvas");return r.style.display="block",r}const Ah={};function pr(r){r in Ah||(Ah[r]=!0,console.warn(r))}function mm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function gm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(r.r=Rs(r.r),r.g=Rs(r.g),r.b=Rs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?da:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ui(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ch=[.64,.33,.3,.6,.15,.06],Rh=[.2126,.7152,.0722],Ph=[.3127,.329],Lh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Qt]:{primaries:Ch,whitePoint:Ph,transfer:da,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:Rh,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:Ch,whitePoint:Ph,transfer:ct,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:Rh,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}});let $i;class xm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=Lr("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ym=0;class hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ma(i[o].image)):s.push(Ma(i[o]))}else s=Ma(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ma(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0;class bt extends Ki{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=bi,i=bi,s=Zt,o=ci,a=cn,l=Gn,c=bt.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=xn(),this.name="",this.source=new hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sn:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sn:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Kd;bt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],v=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(f+1)/2,L=(g+1)/2,P=(h+d)/4,C=(u+x)/4,I=(v+p)/4;return M>y&&M>L?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=P/n,s=C/n):y>L?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=P/i,s=I/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=C/s,i=I/s),this.set(n,i,s,t),this}let w=Math.sqrt((p-v)*(p-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-v)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mm extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Mm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uf extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sm extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==v){let p=1-a;const g=l*d+c*f+h*v+u*x,w=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const L=Math.sqrt(M),P=Math.atan2(L,g*w);p=Math.sin(p*P)/L,a=Math.sin(a*P)/L}const y=a*w;if(l=l*p+d*y,c=c*p+f*y,h=h*p+v*y,u=u*p+x*y,p===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],v=s[o+3];return e[t]=a*v+h*u+l*f-c*d,e[t+1]=l*v+h*d+c*u-a*f,e[t+2]=c*v+h*f+a*d-l*u,e[t+3]=h*v-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"YXZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"ZXY":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"ZYX":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"YZX":this._x=d*h*u+c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u-d*f*v;break;case"XZY":this._x=d*h*u-c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,n=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new S,Ih=new At;class Mt{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),qr.subVectors(this.max,Ks),es.subVectors(e.a,Ks),ts.subVectors(e.b,Ks),ns.subVectors(e.c,Ks),gi.subVectors(ts,es),vi.subVectors(ns,ts),Li.subVectors(es,ns);let t=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Li.z,Li.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Li.z,0,-Li.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Li.y,Li.x,0];return!wa(t,es,ts,ns,qr)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,es,ts,ns,qr))?!1:(jr.crossVectors(gi,vi),t=[jr.x,jr.y,jr.z],wa(t,es,ts,ns,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new S,new S,new S,new S,new S,new S,new S,new S],Sn=new S,Yr=new Mt,es=new S,ts=new S,ns=new S,gi=new S,vi=new S,Li=new S,Ks=new S,qr=new S,jr=new S,Di=new S;function wa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Di.fromArray(r,s);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wm=new Mt,Zs=new S,ba=new S;class Wn{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(ba)),this.expandByPoint(Zs.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new S,Ta=new S,Kr=new S,xi=new S,Ea=new S,Zr=new S,Aa=new S;class Fr{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ta.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Ta);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=xi.dot(this.direction),l=-xi.dot(Kr),c=xi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,v;if(h>0)if(u=o*l-a,d=o*a-l,v=s*h,u>=0)if(d>=-v)if(d<=v){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ta).addScaledVector(Kr,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,s){Ea.subVectors(t,e),Zr.subVectors(n,e),Aa.crossVectors(Ea,Zr);let o=this.direction.dot(Aa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const l=a*this.direction.dot(Zr.crossVectors(xi,Zr));if(l<0)return null;const c=a*this.direction.dot(Ea.cross(xi));if(c<0||l+c>o)return null;const h=-a*xi.dot(Aa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,v,x,p){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,v,x,p)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,v,x,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=v,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,v=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+v*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=v+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,v=c*h,x=c*u;t[0]=d+x*a,t[4]=v*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-v,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,v=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=v+f*a,t[1]=f+v*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,v=a*h,x=a*u;t[0]=l*h,t[4]=v*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,v=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=v*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+v,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,v=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-v,t[2]=v*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bm,e,Tm)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(n,on),yi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(n,on)),yi.normalize(),Jr.crossVectors(on,yi),i[0]=yi.x,i[4]=Jr.x,i[8]=on.x,i[1]=yi.y,i[5]=Jr.y,i[9]=on.y,i[2]=yi.z,i[6]=Jr.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],v=n[2],x=n[6],p=n[10],g=n[14],w=n[3],M=n[7],y=n[11],L=n[15],P=i[0],C=i[4],I=i[8],E=i[12],b=i[1],D=i[5],H=i[9],N=i[13],W=i[2],Q=i[6],j=i[10],K=i[14],V=i[3],ee=i[7],te=i[11],O=i[15];return s[0]=o*P+a*b+l*W+c*V,s[4]=o*C+a*D+l*Q+c*ee,s[8]=o*I+a*H+l*j+c*te,s[12]=o*E+a*N+l*K+c*O,s[1]=h*P+u*b+d*W+f*V,s[5]=h*C+u*D+d*Q+f*ee,s[9]=h*I+u*H+d*j+f*te,s[13]=h*E+u*N+d*K+f*O,s[2]=v*P+x*b+p*W+g*V,s[6]=v*C+x*D+p*Q+g*ee,s[10]=v*I+x*H+p*j+g*te,s[14]=v*E+x*N+p*K+g*O,s[3]=w*P+M*b+y*W+L*V,s[7]=w*C+M*D+y*Q+L*ee,s[11]=w*I+M*H+y*j+L*te,s[15]=w*E+M*N+y*K+L*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],v=e[3],x=e[7],p=e[11],g=e[15];return v*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+g*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],v=e[12],x=e[13],p=e[14],g=e[15],w=u*p*c-x*d*c+x*l*f-a*p*f-u*l*g+a*d*g,M=v*d*c-h*p*c-v*l*f+o*p*f+h*l*g-o*d*g,y=h*x*c-v*u*c+v*a*f-o*x*f-h*a*g+o*u*g,L=v*u*l-h*x*l-v*a*d+o*x*d+h*a*p-o*u*p,P=t*w+n*M+i*y+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=w*C,e[1]=(x*d*s-u*p*s-x*i*f+n*p*f+u*i*g-n*d*g)*C,e[2]=(a*p*s-x*l*s+x*i*c-n*p*c-a*i*g+n*l*g)*C,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*C,e[4]=M*C,e[5]=(h*p*s-v*d*s+v*i*f-t*p*f-h*i*g+t*d*g)*C,e[6]=(v*l*s-o*p*s-v*i*c+t*p*c+o*i*g-t*l*g)*C,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*C,e[8]=y*C,e[9]=(v*u*s-h*x*s-v*n*f+t*x*f+h*n*g-t*u*g)*C,e[10]=(o*x*s-v*a*s+v*n*c-t*x*c-o*n*g+t*a*g)*C,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*C,e[12]=L*C,e[13]=(h*x*i-v*u*i+v*n*d-t*x*d-h*n*p+t*u*p)*C,e[14]=(v*a*i-o*x*i-v*n*l+t*x*l+o*n*p-t*a*p)*C,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,v=s*u,x=o*h,p=o*u,g=a*u,w=l*c,M=l*h,y=l*u,L=n.x,P=n.y,C=n.z;return i[0]=(1-(x+g))*L,i[1]=(f+y)*L,i[2]=(v-M)*L,i[3]=0,i[4]=(f-y)*P,i[5]=(1-(d+g))*P,i[6]=(p+w)*P,i[7]=0,i[8]=(v+M)*C,i[9]=(p-w)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=is.set(i[0],i[1],i[2]).length();const o=is.set(i[4],i[5],i[6]).length(),a=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const c=1/s,h=1/o,u=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=hi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,v;if(a===hi)f=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ia)f=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=hi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,f=(n+i)*h;let v,x;if(a===hi)v=(o+s)*u,x=-2*u;else if(a===ia)v=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new S,wn=new ke,bm=new S(0,0,0),Tm=new S(1,1,1),yi=new S,Jr=new S,on=new S,Nh=new ke,Uh=new At;class $e{constructor(e=0,t=0,n=0,i=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Em=0;const kh=new S,ss=new At,Qn=new ke,Qr=new S,Js=new S,Am=new S,Cm=new At,Oh=new S(1,0,0),Fh=new S(0,1,0),Bh=new S(0,0,1),zh={type:"added"},Rm={type:"removed"},rs={type:"childadded",child:null},Ca={type:"childremoved",child:null};class yt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new S,t=new $e,n=new At,i=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new qe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Js,Qr,this.up):Qn.lookAt(Qr,Js,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Qn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new S(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new S,$n=new S,Ra=new S,ei=new S,os=new S,as=new S,Hh=new S,Pa=new S,La=new S,Da=new S,Ia=new st,Na=new st,Ua=new st;class vn{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),$n.subVectors(n,t),Ra.subVectors(e,t);const o=bn.dot(bn),a=bn.dot($n),l=bn.dot(Ra),c=$n.dot($n),h=$n.dot(Ra),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ia.setScalar(0),Na.setScalar(0),Ua.setScalar(0),Ia.fromBufferAttribute(e,t),Na.fromBufferAttribute(e,n),Ua.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ia,s.x),o.addScaledVector(Na,s.y),o.addScaledVector(Ua,s.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),$n.subVectors(e,t),bn.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;os.subVectors(i,n),as.subVectors(s,n),Pa.subVectors(e,n);const l=os.dot(Pa),c=as.dot(Pa);if(l<=0&&c<=0)return t.copy(n);La.subVectors(e,i);const h=os.dot(La),u=as.dot(La);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(os,o);Da.subVectors(e,s);const f=os.dot(Da),v=as.dot(Da);if(v>=0&&f<=v)return t.copy(s);const x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(as,a);const p=h*v-f*u;if(p<=0&&u-h>=0&&f-v>=0)return Hh.subVectors(s,i),a=(u-h)/(u-h+(f-v)),t.copy(i).addScaledVector(Hh,a);const g=1/(p+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},$r={h:0,s:0,l:0};function ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Hc(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ka(o,s,e+1/3),this.g=ka(o,s,e),this.b=ka(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Nt(zt.r*255,0,255))*65536+Math.round(Nt(zt.g*255,0,255))*256+Math.round(Nt(zt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,s=zt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=pt){Qe.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL($r);const n=xr(_i.h,$r.h,t),i=xr(_i.s,$r.s,t),s=xr(_i.l,$r.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ae;Ae.NAMES=df;let Pm=0;class yn extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=xn(),this.name="",this.blending=Ai,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Cl,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dt extends yn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new S,eo=new ae;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}}class ff extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pf extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lm=0;const fn=new ke,Oa=new yt,ls=new S,an=new Mt,Qs=new Mt,Dt=new S;class Tt extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?pf:ff)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(an.min,Qs.min),an.expandByPoint(Dt),Dt.addVectors(an.max,Qs.max),an.expandByPoint(Dt)):(an.expandByPoint(Qs.min),an.expandByPoint(Qs.max))}an.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Dt.add(ls)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new S,l[I]=new S;const c=new S,h=new S,u=new S,d=new ae,f=new ae,v=new ae,x=new S,p=new S;function g(I,E,b){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,E),v.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),v.sub(d);const D=1/(f.x*v.y-v.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-f.y).multiplyScalar(D),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(D),a[I].add(x),a[E].add(x),a[b].add(x),l[I].add(p),l[E].add(p),l[b].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,E=w.length;I<E;++I){const b=w[I],D=b.start,H=b.count;for(let N=D,W=D+H;N<W;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const M=new S,y=new S,L=new S,P=new S;function C(I){L.fromBufferAttribute(i,I),P.copy(L);const E=a[I];M.copy(E),M.sub(L.multiplyScalar(L.dot(E))).normalize(),y.crossVectors(P,E);const D=y.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,D)}for(let I=0,E=w.length;I<E;++I){const b=w[I],D=b.start,H=b.count;for(let N=D,W=D+H;N<W;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new S,s=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[v++]=c[f++]}return new _t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new ke,Ii=new Fr,to=new Wn,Gh=new S,no=new S,io=new S,so=new S,Fa=new S,ro=new S,Wh=new S,oo=new S;class Be extends yt{constructor(e=new Tt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Fa.fromBufferAttribute(u,e),o?ro.addScaledVector(Fa,h):ro.addScaledVector(Fa.sub(t),h))}t.add(ro)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(to.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(to,Gh)===null||Ii.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Vh.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const p=d[v],g=o[p.materialIndex],w=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,L=M;y<L;y+=3){const P=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);i=ao(this,g,e,n,c,h,u,P,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=v,g=x;p<g;p+=3){const w=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);i=ao(this,o,e,n,c,h,u,w,M,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const p=d[v],g=o[p.materialIndex],w=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,L=M;y<L;y+=3){const P=y,C=y+1,I=y+2;i=ao(this,g,e,n,c,h,u,P,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=v,g=x;p<g;p+=3){const w=p,M=p+1,y=p+2;i=ao(this,o,e,n,c,h,u,w,M,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Dm(r,e,t,n,i,s,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Vn,a),l===null)return null;oo.copy(a),oo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:r}}function ao(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,no),r.getVertexPosition(l,io),r.getVertexPosition(c,so);const h=Dm(r,e,t,n,no,io,so,Wh);if(h){const u=new S;vn.getBarycoord(Wh,no,io,so,u),i&&(h.uv=vn.getInterpolatedAttribute(i,a,l,c,u,new ae)),s&&(h.uv1=vn.getInterpolatedAttribute(s,a,l,c,u,new ae)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new S,materialIndex:0};vn.getNormal(no,io,so,d.normal),h.face=d,h.barycoord=u}return h}class zs extends Tt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function v(x,p,g,w,M,y,L,P,C,I,E){const b=y/C,D=L/I,H=y/2,N=L/2,W=P/2,Q=C+1,j=I+1;let K=0,V=0;const ee=new S;for(let te=0;te<j;te++){const O=te*D-N;for(let ce=0;ce<Q;ce++){const le=ce*b-H;ee[x]=le*w,ee[p]=O*M,ee[g]=W,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[p]=0,ee[g]=P>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ce/C),u.push(1-te/I),K+=1}}for(let te=0;te<I;te++)for(let O=0;O<C;O++){const ce=d+O+Q*te,le=d+O+Q*(te+1),z=d+(O+1)+Q*(te+1),q=d+(O+1)+Q*te;l.push(ce,le,q),l.push(le,z,q),V+=6}a.addGroup(f,V,E),f+=V,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=Us(r[t]);for(const i in n)e[i]=n[i]}return e}function Im(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const ln={clone:Us,merge:jt};var Nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends yn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nm,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gf extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new S,Xh=new ae,Yh=new ae;class kt extends gf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,Yh),t.subVectors(Yh,Xh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,hs=1;class km extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(cs,hs,e,t);i.layers=this.layers,this.add(i);const s=new kt(cs,hs,e,t);s.layers=this.layers,this.add(s);const o=new kt(cs,hs,e,t);o.layers=this.layers,this.add(o);const a=new kt(cs,hs,e,t);a.layers=this.layers,this.add(a);const l=new kt(cs,hs,e,t);l.layers=this.layers,this.add(l);const c=new kt(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class vf extends bt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Om extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zs(5,5,5),s=new xt({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Ut});s.uniforms.tEquirect.value=t;const o=new Be(i,s),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Zt),new km(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ba=new S,Fm=new S,Bm=new qe;class wi{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ba.subVectors(n,t).cross(Fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bm.getNormalMatrix(e),i=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Wn,lo=new S;class Gc{constructor(e=new wi,t=new wi,n=new wi,i=new wi,s=new wi,o=new wi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],v=i[9],x=i[10],p=i[11],g=i[12],w=i[13],M=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,p-f,y-g).normalize(),n[1].setComponents(l+s,d+c,p+f,y+g).normalize(),n[2].setComponents(l+o,d+h,p+v,y+w).normalize(),n[3].setComponents(l-o,d-h,p-v,y-w).normalize(),n[4].setComponents(l-a,d-u,p-x,y-M).normalize(),t===hi)n[5].setComponents(l+a,d+u,p+x,y+M).normalize();else if(t===ia)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lo.x=i.normal.x>0?e.max.x:e.min.x,lo.y=i.normal.y>0?e.max.y:e.min.y,lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zm(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<u.length;f++){const v=u[d],x=u[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,v=u.length;f<v;f++){const x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class nn extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],v=[],x=[],p=[];for(let g=0;g<h;g++){const w=g*d-o;for(let M=0;M<c;M++){const y=M*u-s;v.push(y,-w,0),x.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<a;w++){const M=w+c*g,y=w+c*(g+1),L=w+1+c*(g+1),P=w+1+c*g;f.push(M,y,P),f.push(y,L,P)}this.setIndex(f),this.setAttribute("position",new ut(v,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Hm,alphahash_pars_fragment:Vm,alphamap_fragment:Gm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:Ym,aomap_fragment:qm,aomap_pars_fragment:jm,batching_pars_vertex:Km,batching_vertex:Zm,begin_vertex:Jm,beginnormal_vertex:Qm,bsdfs:$m,iridescence_fragment:eg,bumpmap_pars_fragment:tg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:sg,clipping_planes_vertex:rg,color_fragment:og,color_pars_fragment:ag,color_pars_vertex:lg,color_vertex:cg,common:hg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:dg,displacementmap_pars_vertex:fg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:vg,colorspace_pars_fragment:xg,envmap_fragment:yg,envmap_common_pars_fragment:_g,envmap_pars_fragment:Mg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:Ig,envmap_vertex:wg,fog_vertex:bg,fog_pars_vertex:Tg,fog_fragment:Eg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Cg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Dg,lights_toon_fragment:Ng,lights_toon_pars_fragment:Ug,lights_phong_fragment:kg,lights_phong_pars_fragment:Og,lights_physical_fragment:Fg,lights_physical_pars_fragment:Bg,lights_fragment_begin:zg,lights_fragment_maps:Hg,lights_fragment_end:Vg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:Yg,map_fragment:qg,map_pars_fragment:jg,map_particle_fragment:Kg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Qg,morphinstance_vertex:$g,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:o0,normal_pars_vertex:a0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:v0,dithering_fragment:x0,dithering_pars_fragment:y0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:w0,shadowmap_vertex:b0,shadowmask_pars_fragment:T0,skinbase_vertex:E0,skinning_pars_vertex:A0,skinning_vertex:C0,skinnormal_vertex:R0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:I0,transmission_fragment:N0,transmission_pars_fragment:U0,uv_pars_fragment:k0,uv_pars_vertex:O0,uv_vertex:F0,worldpos_vertex:B0,background_vert:z0,background_frag:H0,backgroundCube_vert:V0,backgroundCube_frag:G0,cube_vert:W0,cube_frag:X0,depth_vert:Y0,depth_frag:q0,distanceRGBA_vert:j0,distanceRGBA_frag:K0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:$0,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:sv,meshmatcap_frag:rv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:hv,meshphysical_frag:uv,meshtoon_vert:dv,meshtoon_frag:fv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:vv,sprite_vert:xv,sprite_frag:yv},ve={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Fn={basic:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:jt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:jt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:jt([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:jt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:jt([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:jt([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:jt([ve.common,ve.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:jt([ve.lights,ve.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Fn.physical={uniforms:jt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const co={r:0,b:0,g:0},Ui=new $e,_v=new ke;function Mv(r,e,t,n,i,s,o){const a=new Ae(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function v(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function x(w){let M=!1;const y=v(w);y===null?g(a,l):y&&y.isColor&&(g(y,1),M=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(w,M){const y=v(M);y&&(y.isCubeTexture||y.mapping===ha)?(h===void 0&&(h=new Be(new zs(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Us(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ui.copy(M.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_v.makeRotationFromEuler(Ui)),h.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ct,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Be(new nn(2,2),new xt({name:"BackgroundMaterial",uniforms:Us(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,M){w.getRGB(co,mf(r)),n.buffers.color.setClear(co.r,co.g,co.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(a,l)},render:x,addToRenderList:p}}function Sv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(b,D,H,N,W){let Q=!1;const j=u(N,H,D);s!==j&&(s=j,c(s.object)),Q=f(b,N,H,W),Q&&v(b,N,H,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(b,D,H,N),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,D,H){const N=H.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let Q=W[D.id];Q===void 0&&(Q={},W[D.id]=Q);let j=Q[N];return j===void 0&&(j=d(l()),Q[N]=j),j}function d(b){const D=[],H=[],N=[];for(let W=0;W<t;W++)D[W]=0,H[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:N,object:b,attributes:{},index:null}}function f(b,D,H,N){const W=s.attributes,Q=D.attributes;let j=0;const K=H.getAttributes();for(const V in K)if(K[V].location>=0){const te=W[V];let O=Q[V];if(O===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),te===void 0||te.attribute!==O||O&&te.data!==O.data)return!0;j++}return s.attributesNum!==j||s.index!==N}function v(b,D,H,N){const W={},Q=D.attributes;let j=0;const K=H.getAttributes();for(const V in K)if(K[V].location>=0){let te=Q[V];te===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const O={};O.attribute=te,te&&te.data&&(O.data=te.data),W[V]=O,j++}s.attributes=W,s.attributesNum=j,s.index=N}function x(){const b=s.newAttributes;for(let D=0,H=b.length;D<H;D++)b[D]=0}function p(b){g(b,0)}function g(b,D){const H=s.newAttributes,N=s.enabledAttributes,W=s.attributeDivisors;H[b]=1,N[b]===0&&(r.enableVertexAttribArray(b),N[b]=1),W[b]!==D&&(r.vertexAttribDivisor(b,D),W[b]=D)}function w(){const b=s.newAttributes,D=s.enabledAttributes;for(let H=0,N=D.length;H<N;H++)D[H]!==b[H]&&(r.disableVertexAttribArray(H),D[H]=0)}function M(b,D,H,N,W,Q,j){j===!0?r.vertexAttribIPointer(b,D,H,W,Q):r.vertexAttribPointer(b,D,H,N,W,Q)}function y(b,D,H,N){x();const W=N.attributes,Q=H.getAttributes(),j=D.defaultAttributeValues;for(const K in Q){const V=Q[K];if(V.location>=0){let ee=W[K];if(ee===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ee!==void 0){const te=ee.normalized,O=ee.itemSize,ce=e.get(ee);if(ce===void 0)continue;const le=ce.buffer,z=ce.type,q=ce.bytesPerElement,oe=z===r.INT||z===r.UNSIGNED_INT||ee.gpuType===Lc;if(ee.isInterleavedBufferAttribute){const Z=ee.data,ue=Z.stride,fe=ee.offset;if(Z.isInstancedInterleavedBuffer){for(let Re=0;Re<V.locationSize;Re++)g(V.location+Re,Z.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Re=0;Re<V.locationSize;Re++)p(V.location+Re);r.bindBuffer(r.ARRAY_BUFFER,le);for(let Re=0;Re<V.locationSize;Re++)M(V.location+Re,O/V.locationSize,z,te,ue*q,(fe+O/V.locationSize*Re)*q,oe)}else{if(ee.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)g(V.location+Z,ee.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Z=0;Z<V.locationSize;Z++)p(V.location+Z);r.bindBuffer(r.ARRAY_BUFFER,le);for(let Z=0;Z<V.locationSize;Z++)M(V.location+Z,O/V.locationSize,z,te,O*q,O/V.locationSize*Z*q,oe)}}else if(j!==void 0){const te=j[K];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(V.location,te);break;case 3:r.vertexAttrib3fv(V.location,te);break;case 4:r.vertexAttrib4fv(V.location,te);break;default:r.vertexAttrib1fv(V.location,te)}}}}w()}function L(){I();for(const b in n){const D=n[b];for(const H in D){const N=D[H];for(const W in N)h(N[W].object),delete N[W];delete D[H]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const H in D){const N=D[H];for(const W in N)h(N[W].object),delete N[W];delete D[H]}delete n[b.id]}function C(b){for(const D in n){const H=n[D];if(H[b.id]===void 0)continue;const N=H[b.id];for(const W in N)h(N[W].object),delete N[W];delete H[b.id]}}function I(){E(),o=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:w}}function wv(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*d[x];t.update(v,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==cn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Gn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==In&&!I)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:L,maxSamples:P}}function Tv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new wi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const v=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||v===null||v.length===0||s&&!p)s?h(null):c();else{const w=s?0:n,M=w*4;let y=g.clippingState||null;l.value=y,y=h(v,d,M,f);for(let L=0;L!==M;++L)y[L]=t[L];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,v){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const g=f+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=f;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(w,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Ev(r){let e=new WeakMap;function t(o,a){return a===Fl?o.mapping=Ds:a===Bl&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fl||a===Bl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Om(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fa extends gf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,qh=[.125,.215,.35,.446,.526,.582],zi=20,za=new fa,jh=new Ae;let Ha=null,Va=0,Ga=0,Wa=!1;const Bi=(1+Math.sqrt(5))/2,us=1/Bi,Kh=[new S(-Bi,us,0),new S(Bi,us,0),new S(-us,0,Bi),new S(us,0,Bi),new S(0,Bi,-us),new S(0,Bi,us),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)];class pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Va,Ga),this._renderer.xr.enabled=Wa,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:un,format:cn,colorSpace:Qt,depthBuffer:!1},i=Zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Av(s)),this._blurMaterial=Cv(s,e,t)}return i}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,i){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jh),h.toneMapping=Ci,h.autoClear=!1;const f=new dt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),v=new Be(new zs,f);let x=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(jh),x=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):w===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const M=this._cubeSize;ho(i,w*M,g>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ds||e.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kh[(i-s-1)%Kh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Be(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zi-1),x=s/v,p=isFinite(s)?1+Math.floor(h*x):zi;p>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const g=[];let w=0;for(let C=0;C<zi;++C){const I=C/x,E=Math.exp(-I*I/2);g.push(E),C===0?w+=E:C<p&&(w+=2*E)}for(let C=0;C<g.length;C++)g[C]=g[C]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=v,d.mipInt.value=M-n;const y=this._sizeLods[i],L=3*y*(i>M-ws?i-M+ws:0),P=4*(this._cubeSize-y);ho(t,L,P,3*y,2*y),l.setRenderTarget(t),l.render(u,za)}}function Av(r){const e=[],t=[],n=[];let i=r;const s=r-ws+1+qh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ws?l=qh[o-r+ws-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,v=6,x=3,p=2,g=1,w=new Float32Array(x*v*f),M=new Float32Array(p*v*f),y=new Float32Array(g*v*f);for(let P=0;P<f;P++){const C=P%3*2/3-1,I=P>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];w.set(E,x*v*P),M.set(d,p*v*P);const b=[P,P,P,P,P,P];y.set(b,g*v*P)}const L=new Tt;L.setAttribute("position",new _t(w,x)),L.setAttribute("uv",new _t(M,p)),L.setAttribute("faceIndex",new _t(y,g)),e.push(L),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zh(r,e,t){const n=new Jt(r,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Cv(r,e,t){const n=new Float32Array(zi),i=new S(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Jh(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Qh(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fl||l===Bl,h=l===Ds||l===Is;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new pc(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new pc(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lv(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let p=0,g=x.length;p<g;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)e.update(d[v],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const v in f){const x=f[v];for(let p=0,g=x.length;p<g;p++)e.update(x[p],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,v=u.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let M=0,y=w.length;M<y;M+=3){const L=w[M+0],P=w[M+1],C=w[M+2];d.push(L,P,P,C,C,L)}}else if(v!==void 0){const w=v.array;x=v.version;for(let M=0,y=w.length/3-1;M<y;M+=3){const L=M+0,P=M+1,C=M+2;d.push(L,P,P,C,C,L)}}else return;const p=new(cf(d)?pf:ff)(d,1);p.version=x;const g=s.get(u);g&&e.remove(g),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dv(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,v){v!==0&&(r.drawElementsInstanced(n,f,s,d*o,v),t.update(f,n,v))}function h(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,v);let p=0;for(let g=0;g<v;g++)p+=f[g];t.update(p,n,1)}function u(d,f,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,v);let g=0;for(let w=0;w<v;w++)g+=f[w]*x[w];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Iv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Nv(r,e,t){const n=new WeakMap,i=new st;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let L=a.attributes.position.count*y,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*P*4*u),I=new uf(C,L,P,u);I.type=In,I.needsUpdate=!0;const E=y*4;for(let D=0;D<u;D++){const H=g[D],N=w[D],W=M[D],Q=L*P*4*D;for(let j=0;j<H.count;j++){const K=j*E;v===!0&&(i.fromBufferAttribute(H,j),C[Q+K+0]=i.x,C[Q+K+1]=i.y,C[Q+K+2]=i.z,C[Q+K+3]=0),x===!0&&(i.fromBufferAttribute(N,j),C[Q+K+4]=i.x,C[Q+K+5]=i.y,C[Q+K+6]=i.z,C[Q+K+7]=0),p===!0&&(i.fromBufferAttribute(W,j),C[Q+K+8]=i.x,C[Q+K+9]=i.y,C[Q+K+10]=i.z,C[Q+K+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new ae(L,P)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Uv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Xc extends bt{constructor(e,t,n,i,s,o,a,l,c,h=Cs){if(h!==Cs&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=Wi),n===void 0&&h===Yi&&(n=Xi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yf=new bt,$h=new Xc(1,1),_f=new uf,Mf=new Sm,Sf=new vf,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function Hs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=eu[i];if(s===void 0&&(s=new Float32Array(i),eu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function pa(r,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function kv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function Fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function Bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function zv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;su.set(n),r.uniformMatrix2fv(this.addr,!1,su),Lt(t,n)}}function Hv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;iu.set(n),r.uniformMatrix3fv(this.addr,!1,iu),Lt(t,n)}}function Vv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;nu.set(n),r.uniformMatrix4fv(this.addr,!1,nu),Lt(t,n)}}function Gv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Wv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function Xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function Yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function qv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function Kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function Zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function Jv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?($h.compareFunction=lf,s=$h):s=yf,t.setTexture2D(e||s,i)}function Qv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mf,i)}function $v(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sf,i)}function ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_f,i)}function tx(r){switch(r){case 5126:return kv;case 35664:return Ov;case 35665:return Fv;case 35666:return Bv;case 35674:return zv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return jv;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return ex}}function nx(r,e){r.uniform1fv(this.addr,e)}function ix(r,e){const t=Hs(e,this.size,2);r.uniform2fv(this.addr,t)}function sx(r,e){const t=Hs(e,this.size,3);r.uniform3fv(this.addr,t)}function rx(r,e){const t=Hs(e,this.size,4);r.uniform4fv(this.addr,t)}function ox(r,e){const t=Hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ax(r,e){const t=Hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lx(r,e){const t=Hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cx(r,e){r.uniform1iv(this.addr,e)}function hx(r,e){r.uniform2iv(this.addr,e)}function ux(r,e){r.uniform3iv(this.addr,e)}function dx(r,e){r.uniform4iv(this.addr,e)}function fx(r,e){r.uniform1uiv(this.addr,e)}function px(r,e){r.uniform2uiv(this.addr,e)}function mx(r,e){r.uniform3uiv(this.addr,e)}function gx(r,e){r.uniform4uiv(this.addr,e)}function vx(r,e,t){const n=this.cache,i=e.length,s=pa(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||yf,s[o])}function xx(r,e,t){const n=this.cache,i=e.length,s=pa(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mf,s[o])}function yx(r,e,t){const n=this.cache,i=e.length,s=pa(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Sf,s[o])}function _x(r,e,t){const n=this.cache,i=e.length,s=pa(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_f,s[o])}function Mx(r){switch(r){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return _x}}class Sx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tx(t.type)}}class wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mx(t.type)}}class bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function ru(r,e){r.seq.push(e),r.map[e.id]=e}function Tx(r,e,t){const n=r.name,i=n.length;for(Xa.lastIndex=0;;){const s=Xa.exec(n),o=Xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ru(t,c===void 0?new Sx(a,r,e):new wx(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new bx(a),ru(t,u)),t=u}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Tx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ou(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ex=37297;let Ax=0;function Cx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const au=new qe;function Rx(r){Qe._getMatrix(au,Qe.workingColorSpace,r);const e=`mat3( ${au.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(r)){case da:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function lu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cx(r.getShaderSource(e),o)}else return i}function Px(r,e){const t=Rx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lx(r,e){let t;switch(e){case Wd:t="Linear";break;case Xd:t="Reinhard";break;case Yd:t="Cineon";break;case Pc:t="ACESFilmic";break;case qd:t="AgX";break;case jd:t="Neutral";break;case Op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new S;function Dx(){Qe.getLuminanceCoefficients(uo);const r=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ix(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Nx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ux(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function mr(r){return r!==""}function cu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(r){return r.replace(kx,Fx)}const Ox=new Map;function Fx(r,e){let t=je[e];if(t===void 0){const n=Ox.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(r){return r.replace(Bx,zx)}function zx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function du(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Vx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Is:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function Wx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gd:e="ENVMAP_BLENDING_MULTIPLY";break;case Up:e="ENVMAP_BLENDING_MIX";break;case kp:e="ENVMAP_BLENDING_ADD";break}return e}function Xx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hx(t),c=Vx(t),h=Gx(t),u=Wx(t),d=Xx(t),f=Ix(t),v=Nx(s),x=i.createProgram();let p,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(mr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(mr).join(`
`),g.length>0&&(g+=`
`)):(p=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),g=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?je.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Px("linearToOutputTexel",t.outputColorSpace),Dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=mc(o),o=cu(o,t),o=hu(o,t),a=mc(a),a=cu(a,t),a=hu(a,t),o=uu(o),a=uu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=w+p+o,y=w+g+a,L=ou(i,i.VERTEX_SHADER,M),P=ou(i,i.FRAGMENT_SHADER,y);i.attachShader(x,L),i.attachShader(x,P),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(D){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(L).trim(),W=i.getShaderInfoLog(P).trim();let Q=!0,j=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,L,P);else{const K=lu(i,L,"vertex"),V=lu(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+K+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||W==="")&&(j=!1);j&&(D.diagnostics={runnable:Q,programLog:H,vertexShader:{log:N,prefix:p},fragmentShader:{log:W,prefix:g}})}i.deleteShader(L),i.deleteShader(P),I=new Jo(i,x),E=Ux(i,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,Ex)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ax++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=P,this}let qx=0;class jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kx(e),t.set(e,n)),n}}class Kx{constructor(e){this.id=qx++,this.code=e,this.usedTimes=0}}function Zx(r,e,t,n,i,s,o){const a=new Vc,l=new jx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,b,D,H,N){const W=H.fog,Q=N.geometry,j=E.isMeshStandardMaterial?H.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),V=K&&K.mapping===ha?K.image.height:null,ee=v[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const te=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,O=te!==void 0?te.length:0;let ce=0;Q.morphAttributes.position!==void 0&&(ce=1),Q.morphAttributes.normal!==void 0&&(ce=2),Q.morphAttributes.color!==void 0&&(ce=3);let le,z,q,oe;if(ee){const lt=Fn[ee];le=lt.vertexShader,z=lt.fragmentShader}else le=E.vertexShader,z=E.fragmentShader,l.update(E),q=l.getVertexShaderID(E),oe=l.getFragmentShaderID(E);const Z=r.getRenderTarget(),ue=r.state.buffers.depth.getReversed(),fe=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Oe=!!E.map,Ce=!!E.matcap,Ne=!!K,U=!!E.aoMap,re=!!E.lightMap,xe=!!E.bumpMap,be=!!E.normalMap,Se=!!E.displacementMap,et=!!E.emissiveMap,me=!!E.metalnessMap,R=!!E.roughnessMap,T=E.anisotropy>0,G=E.clearcoat>0,ne=E.dispersion>0,se=E.iridescence>0,$=E.sheen>0,Pe=E.transmission>0,ge=T&&!!E.anisotropyMap,ye=G&&!!E.clearcoatMap,Ke=G&&!!E.clearcoatNormalMap,he=G&&!!E.clearcoatRoughnessMap,Te=se&&!!E.iridescenceMap,Fe=se&&!!E.iridescenceThicknessMap,ze=$&&!!E.sheenColorMap,Ee=$&&!!E.sheenRoughnessMap,Je=!!E.specularMap,Ve=!!E.specularColorMap,tt=!!E.specularIntensityMap,k=Pe&&!!E.transmissionMap,pe=Pe&&!!E.thicknessMap,J=!!E.gradientMap,ie=!!E.alphaMap,we=E.alphaTest>0,_e=!!E.alphaHash,Xe=!!E.extensions;let wt=Ci;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(wt=r.toneMapping);const Ft={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:z,defines:E.defines,customVertexShaderID:q,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:fe,instancingColor:fe&&N.instanceColor!==null,instancingMorph:fe&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Qt,alphaToCoverage:!!E.alphaToCoverage,map:Oe,matcap:Ce,envMap:Ne,envMapMode:Ne&&K.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:re,bumpMap:xe,normalMap:be,displacementMap:d&&Se,emissiveMap:et,normalMapObjectSpace:be&&E.normalMapType===Wp,normalMapTangentSpace:be&&E.normalMapType===zc,metalnessMap:me,roughnessMap:R,anisotropy:T,anisotropyMap:ge,clearcoat:G,clearcoatMap:ye,clearcoatNormalMap:Ke,clearcoatRoughnessMap:he,dispersion:ne,iridescence:se,iridescenceMap:Te,iridescenceThicknessMap:Fe,sheen:$,sheenColorMap:ze,sheenRoughnessMap:Ee,specularMap:Je,specularColorMap:Ve,specularIntensityMap:tt,transmission:Pe,transmissionMap:k,thicknessMap:pe,gradientMap:J,opaque:E.transparent===!1&&E.blending===Ai&&E.alphaToCoverage===!1,alphaMap:ie,alphaTest:we,alphaHash:_e,combine:E.combine,mapUv:Oe&&x(E.map.channel),aoMapUv:U&&x(E.aoMap.channel),lightMapUv:re&&x(E.lightMap.channel),bumpMapUv:xe&&x(E.bumpMap.channel),normalMapUv:be&&x(E.normalMap.channel),displacementMapUv:Se&&x(E.displacementMap.channel),emissiveMapUv:et&&x(E.emissiveMap.channel),metalnessMapUv:me&&x(E.metalnessMap.channel),roughnessMapUv:R&&x(E.roughnessMap.channel),anisotropyMapUv:ge&&x(E.anisotropyMap.channel),clearcoatMapUv:ye&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(E.sheenRoughnessMap.channel),specularMapUv:Je&&x(E.specularMap.channel),specularColorMapUv:Ve&&x(E.specularColorMap.channel),specularIntensityMapUv:tt&&x(E.specularIntensityMap.channel),transmissionMapUv:k&&x(E.transmissionMap.channel),thicknessMapUv:pe&&x(E.thicknessMap.channel),alphaMapUv:ie&&x(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(be||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Q.attributes.uv&&(Oe||ie),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ue,skinning:N.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:wt,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===ct,decodeVideoTextureEmissive:et&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ct,flipSided:E.side===Xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&E.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function g(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)b.push(D),b.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(w(b,E),M(b,E),b.push(r.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function w(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function M(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const b=v[E.type];let D;if(b){const H=Fn[b];D=ln.clone(H.uniforms)}else D=E.uniforms;return D}function L(E,b){let D;for(let H=0,N=h.length;H<N;H++){const W=h[H];if(W.cacheKey===b){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Yx(r,b,E,s),h.push(D)),D}function P(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:L,releaseProgram:P,releaseShaderCache:C,programs:h,dispose:I}}function Jx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Qx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function fu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,v,x,p){let g=r[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:x,group:p},r[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=v,g.renderOrder=u.renderOrder,g.z=x,g.group=p),e++,g}function a(u,d,f,v,x,p){const g=o(u,d,f,v,x,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(u,d,f,v,x,p){const g=o(u,d,f,v,x,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||Qx),n.length>1&&n.sort(d||fu),i.length>1&&i.sort(d||fu)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function $x(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new pu,r.set(n,[o])):i>=s.length?(o=new pu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ey(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ae};break;case"SpotLight":t={position:new S,direction:new S,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new S,halfWidth:new S,halfHeight:new S};break}return r[e.id]=t,t}}}function ty(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ny=0;function iy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sy(r){const e=new ey,t=ty(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const i=new S,s=new ke,o=new ke;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,v=0,x=0,p=0,g=0,w=0,M=0,y=0,L=0,P=0,C=0;c.sort(iy);for(let E=0,b=c.length;E<b;E++){const D=c[E],H=D.color,N=D.intensity,W=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*N,u+=H.g*N,d+=H.b*N;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],N);C++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=D.shadow.matrix,w++}n.directional[f]=j,f++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(H).multiplyScalar(N),j.distance=W,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[x]=j;const K=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,K.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[x]=K.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=Q,y++}x++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(H).multiplyScalar(N),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=j,p++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const K=D.shadow,V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=Q,n.pointShadowMatrix[v]=D.shadow.matrix,M++}n.point[v]=j,v++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(N),j.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[g]=j,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==w||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==L||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,I.directionalLength=f,I.pointLength=v,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=w,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=L,I.numLightProbes=C,n.version=ny++)}function l(c,h){let u=0,d=0,f=0,v=0,x=0;const p=h.matrixWorldInverse;for(let g=0,w=c.length;g<w;g++){const M=c[g];if(M.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(M.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function mu(r){const e=new sy(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ry(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new mu(r),e.set(i,[a])):s>=o.length?(a=new mu(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class oy extends yn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ay extends yn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hy(r,e,t){let n=new Gc;const i=new ae,s=new ae,o=new st,a=new oy({depthPacking:Gp}),l=new ay,c={},h=t.maxTextureSize,u={[Vn]:Xt,[Xt]:Vn,[Ct]:Ct},d=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Tt;v.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Be(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let g=this.type;this.render=function(P,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const E=r.getRenderTarget(),b=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Ut),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const N=g!==ri&&this.type===ri,W=g===ri&&this.type!==ri;for(let Q=0,j=P.length;Q<j;Q++){const K=P[Q],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ee=V.getFrameExtents();if(i.multiply(ee),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ee.x),i.x=s.x*ee.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ee.y),i.y=s.y*ee.y,V.mapSize.y=s.y)),V.map===null||N===!0||W===!0){const O=this.type!==ri?{minFilter:Rt,magFilter:Rt}:{};V.map!==null&&V.map.dispose(),V.map=new Jt(i.x,i.y,O),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const te=V.getViewportCount();for(let O=0;O<te;O++){const ce=V.getViewport(O);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),H.viewport(o),V.updateMatrices(K,O),n=V.getFrustum(),y(C,I,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&w(V,I),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(E,b,D)};function w(P,C){const I=e.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Jt(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(C,null,I,d,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(C,null,I,f,x,null)}function M(P,C,I,E){let b=null;const D=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)b=D;else if(b=I.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=b.uuid,N=C.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let Q=W[N];Q===void 0&&(Q=b.clone(),W[N]=Q,C.addEventListener("dispose",L)),b=Q}if(b.visible=C.visible,b.wireframe=C.wireframe,E===ri?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=r.properties.get(b);H.light=I}return b}function y(P,C,I,E,b){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===ri)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const N=e.update(P),W=P.material;if(Array.isArray(W)){const Q=N.groups;for(let j=0,K=Q.length;j<K;j++){const V=Q[j],ee=W[V.materialIndex];if(ee&&ee.visible){const te=M(P,ee,E,b);P.onBeforeShadow(r,P,C,I,N,te,V),r.renderBufferDirect(I,null,N,te,P,V),P.onAfterShadow(r,P,C,I,N,te,V)}}}else if(W.visible){const Q=M(P,W,E,b);P.onBeforeShadow(r,P,C,I,N,Q,null),r.renderBufferDirect(I,null,N,Q,P,null),P.onAfterShadow(r,P,C,I,N,Q,null)}}const H=P.children;for(let N=0,W=H.length;N<W;N++)y(H[N],C,I,E,b)}function L(P){P.target.removeEventListener("dispose",L);for(const I in c){const E=c[I],b=P.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const uy={[Ll]:Dl,[Il]:kl,[Nl]:Ol,[Ls]:Ul,[Dl]:Ll,[kl]:Il,[Ol]:Nl,[Ul]:Ls};function dy(r,e){function t(){let k=!1;const pe=new st;let J=null;const ie=new st(0,0,0,0);return{setMask:function(we){J!==we&&!k&&(r.colorMask(we,we,we,we),J=we)},setLocked:function(we){k=we},setClear:function(we,_e,Xe,wt,Ft){Ft===!0&&(we*=wt,_e*=wt,Xe*=wt),pe.set(we,_e,Xe,wt),ie.equals(pe)===!1&&(r.clearColor(we,_e,Xe,wt),ie.copy(pe))},reset:function(){k=!1,J=null,ie.set(-1,0,0,0)}}}function n(){let k=!1,pe=!1,J=null,ie=null,we=null;return{setReversed:function(_e){if(pe!==_e){const Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const wt=we;we=null,this.setClear(wt)}pe=_e},getReversed:function(){return pe},setTest:function(_e){_e?Z(r.DEPTH_TEST):ue(r.DEPTH_TEST)},setMask:function(_e){J!==_e&&!k&&(r.depthMask(_e),J=_e)},setFunc:function(_e){if(pe&&(_e=uy[_e]),ie!==_e){switch(_e){case Ll:r.depthFunc(r.NEVER);break;case Dl:r.depthFunc(r.ALWAYS);break;case Il:r.depthFunc(r.LESS);break;case Ls:r.depthFunc(r.LEQUAL);break;case Nl:r.depthFunc(r.EQUAL);break;case Ul:r.depthFunc(r.GEQUAL);break;case kl:r.depthFunc(r.GREATER);break;case Ol:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ie=_e}},setLocked:function(_e){k=_e},setClear:function(_e){we!==_e&&(pe&&(_e=1-_e),r.clearDepth(_e),we=_e)},reset:function(){k=!1,J=null,ie=null,we=null,pe=!1}}}function i(){let k=!1,pe=null,J=null,ie=null,we=null,_e=null,Xe=null,wt=null,Ft=null;return{setTest:function(lt){k||(lt?Z(r.STENCIL_TEST):ue(r.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!k&&(r.stencilMask(lt),pe=lt)},setFunc:function(lt,_n,jn){(J!==lt||ie!==_n||we!==jn)&&(r.stencilFunc(lt,_n,jn),J=lt,ie=_n,we=jn)},setOp:function(lt,_n,jn){(_e!==lt||Xe!==_n||wt!==jn)&&(r.stencilOp(lt,_n,jn),_e=lt,Xe=_n,wt=jn)},setLocked:function(lt){k=lt},setClear:function(lt){Ft!==lt&&(r.clearStencil(lt),Ft=lt)},reset:function(){k=!1,pe=null,J=null,ie=null,we=null,_e=null,Xe=null,wt=null,Ft=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],v=null,x=!1,p=null,g=null,w=null,M=null,y=null,L=null,P=null,C=new Ae(0,0,0),I=0,E=!1,b=null,D=null,H=null,N=null,W=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=K>=2);let ee=null,te={};const O=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),le=new st().fromArray(O),z=new st().fromArray(ce);function q(k,pe,J,ie){const we=new Uint8Array(4),_e=r.createTexture();r.bindTexture(k,_e),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<J;Xe++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(pe,0,r.RGBA,1,1,ie,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(pe+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return _e}const oe={};oe[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(r.DEPTH_TEST),o.setFunc(Ls),xe(!1),be(Mh),Z(r.CULL_FACE),U(Ut);function Z(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function ue(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function fe(k,pe){return u[k]!==pe?(r.bindFramebuffer(k,pe),u[k]=pe,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=pe),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=pe),!0):!1}function Re(k,pe){let J=f,ie=!1;if(k){J=d.get(pe),J===void 0&&(J=[],d.set(pe,J));const we=k.textures;if(J.length!==we.length||J[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,Xe=we.length;_e<Xe;_e++)J[_e]=r.COLOR_ATTACHMENT0+_e;J.length=we.length,ie=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,ie=!0);ie&&r.drawBuffers(J)}function Oe(k){return v!==k?(r.useProgram(k),v=k,!0):!1}const Ce={[Pn]:r.FUNC_ADD,[Mp]:r.FUNC_SUBTRACT,[Sp]:r.FUNC_REVERSE_SUBTRACT};Ce[wp]=r.MIN,Ce[bp]=r.MAX;const Ne={[dr]:r.ZERO,[Tp]:r.ONE,[Ep]:r.SRC_COLOR,[Al]:r.SRC_ALPHA,[Pp]:r.SRC_ALPHA_SATURATE,[Pl]:r.DST_COLOR,[Rl]:r.DST_ALPHA,[Ap]:r.ONE_MINUS_SRC_COLOR,[Cl]:r.ONE_MINUS_SRC_ALPHA,[Rp]:r.ONE_MINUS_DST_COLOR,[Cp]:r.ONE_MINUS_DST_ALPHA,[Lp]:r.CONSTANT_COLOR,[Dp]:r.ONE_MINUS_CONSTANT_COLOR,[Ip]:r.CONSTANT_ALPHA,[Np]:r.ONE_MINUS_CONSTANT_ALPHA};function U(k,pe,J,ie,we,_e,Xe,wt,Ft,lt){if(k===Ut){x===!0&&(ue(r.BLEND),x=!1);return}if(x===!1&&(Z(r.BLEND),x=!0),k!==Vd){if(k!==p||lt!==E){if((g!==Pn||y!==Pn)&&(r.blendEquation(r.FUNC_ADD),g=Pn,y=Pn),lt)switch(k){case Ai:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gt:r.blendFunc(r.ONE,r.ONE);break;case Sh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case El:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ai:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gt:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case El:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,M=null,L=null,P=null,C.set(0,0,0),I=0,p=k,E=lt}return}we=we||pe,_e=_e||J,Xe=Xe||ie,(pe!==g||we!==y)&&(r.blendEquationSeparate(Ce[pe],Ce[we]),g=pe,y=we),(J!==w||ie!==M||_e!==L||Xe!==P)&&(r.blendFuncSeparate(Ne[J],Ne[ie],Ne[_e],Ne[Xe]),w=J,M=ie,L=_e,P=Xe),(wt.equals(C)===!1||Ft!==I)&&(r.blendColor(wt.r,wt.g,wt.b,Ft),C.copy(wt),I=Ft),p=k,E=!1}function re(k,pe){k.side===Ct?ue(r.CULL_FACE):Z(r.CULL_FACE);let J=k.side===Xt;pe&&(J=!J),xe(J),k.blending===Ai&&k.transparent===!1?U(Ut):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const ie=k.stencilWrite;a.setTest(ie),ie&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),et(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function xe(k){b!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),b=k)}function be(k){k!==yp?(Z(r.CULL_FACE),k!==D&&(k===Mh?r.cullFace(r.BACK):k===_p?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ue(r.CULL_FACE),D=k}function Se(k){k!==H&&(j&&r.lineWidth(k),H=k)}function et(k,pe,J){k?(Z(r.POLYGON_OFFSET_FILL),(N!==pe||W!==J)&&(r.polygonOffset(pe,J),N=pe,W=J)):ue(r.POLYGON_OFFSET_FILL)}function me(k){k?Z(r.SCISSOR_TEST):ue(r.SCISSOR_TEST)}function R(k){k===void 0&&(k=r.TEXTURE0+Q-1),ee!==k&&(r.activeTexture(k),ee=k)}function T(k,pe,J){J===void 0&&(ee===null?J=r.TEXTURE0+Q-1:J=ee);let ie=te[J];ie===void 0&&(ie={type:void 0,texture:void 0},te[J]=ie),(ie.type!==k||ie.texture!==pe)&&(ee!==J&&(r.activeTexture(J),ee=J),r.bindTexture(k,pe||oe[k]),ie.type=k,ie.texture=pe)}function G(){const k=te[ee];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(k){le.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),le.copy(k))}function Ee(k){z.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),z.copy(k))}function Je(k,pe){let J=c.get(pe);J===void 0&&(J=new WeakMap,c.set(pe,J));let ie=J.get(k);ie===void 0&&(ie=r.getUniformBlockIndex(pe,k.name),J.set(k,ie))}function Ve(k,pe){const ie=c.get(pe).get(k);l.get(pe)!==ie&&(r.uniformBlockBinding(pe,ie,k.__bindingPointIndex),l.set(pe,ie))}function tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ee=null,te={},u={},d=new WeakMap,f=[],v=null,x=!1,p=null,g=null,w=null,M=null,y=null,L=null,P=null,C=new Ae(0,0,0),I=0,E=!1,b=null,D=null,H=null,N=null,W=null,le.set(0,0,r.canvas.width,r.canvas.height),z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:ue,bindFramebuffer:fe,drawBuffers:Re,useProgram:Oe,setBlending:U,setMaterial:re,setFlipSided:xe,setCullFace:be,setLineWidth:Se,setPolygonOffset:et,setScissorTest:me,activeTexture:R,bindTexture:T,unbindTexture:G,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:Te,texImage3D:Fe,updateUBOMapping:Je,uniformBlockBinding:Ve,texStorage2D:Ke,texStorage3D:he,texSubImage2D:$,texSubImage3D:Pe,compressedTexSubImage2D:ge,compressedTexSubImage3D:ye,scissor:ze,viewport:Ee,reset:tt}}function gu(r,e,t,n){const i=fy(n);switch(t){case ef:return r*e;case nf:return r*e;case sf:return r*e*2;case ua:return r*e/i.components*i.byteLength;case Nc:return r*e/i.components*i.byteLength;case rf:return r*e*2/i.components*i.byteLength;case Uc:return r*e*2/i.components*i.byteLength;case tf:return r*e*3/i.components*i.byteLength;case cn:return r*e*4/i.components*i.byteLength;case kc:return r*e*4/i.components*i.byteLength;case Yo:case qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jo:case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Gl:return Math.max(r,16)*Math.max(e,8)/4;case zl:case Vl:return Math.max(r,8)*Math.max(e,8)/2;case Wl:case Xl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zo:case ac:case lc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case of:case cc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hc:case uc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(r){switch(r){case Gn:case Jd:return{byteLength:1,components:1};case Cr:case Qd:case un:return{byteLength:2,components:1};case Dc:case Ic:return{byteLength:2,components:4};case Wi:case Lc:case In:return{byteLength:4,components:1};case $d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function py(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,T){return f?new OffscreenCanvas(R,T):Lr("canvas")}function x(R,T,G){let ne=1;const se=me(R);if((se.width>G||se.height>G)&&(ne=G/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(ne*se.width),Pe=Math.floor(ne*se.height);u===void 0&&(u=v($,Pe));const ge=T?v($,Pe):u;return ge.width=$,ge.height=Pe,ge.getContext("2d").drawImage(R,0,0,$,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+$+"x"+Pe+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){r.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,T,G,ne,se=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=T;if(T===r.RED&&(G===r.FLOAT&&($=r.R32F),G===r.HALF_FLOAT&&($=r.R16F),G===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.R8UI),G===r.UNSIGNED_SHORT&&($=r.R16UI),G===r.UNSIGNED_INT&&($=r.R32UI),G===r.BYTE&&($=r.R8I),G===r.SHORT&&($=r.R16I),G===r.INT&&($=r.R32I)),T===r.RG&&(G===r.FLOAT&&($=r.RG32F),G===r.HALF_FLOAT&&($=r.RG16F),G===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RG8UI),G===r.UNSIGNED_SHORT&&($=r.RG16UI),G===r.UNSIGNED_INT&&($=r.RG32UI),G===r.BYTE&&($=r.RG8I),G===r.SHORT&&($=r.RG16I),G===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGB8UI),G===r.UNSIGNED_SHORT&&($=r.RGB16UI),G===r.UNSIGNED_INT&&($=r.RGB32UI),G===r.BYTE&&($=r.RGB8I),G===r.SHORT&&($=r.RGB16I),G===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGBA8UI),G===r.UNSIGNED_SHORT&&($=r.RGBA16UI),G===r.UNSIGNED_INT&&($=r.RGBA32UI),G===r.BYTE&&($=r.RGBA8I),G===r.SHORT&&($=r.RGBA16I),G===r.INT&&($=r.RGBA32I)),T===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),T===r.RGBA){const Pe=se?da:Qe.getTransfer(ne);G===r.FLOAT&&($=r.RGBA32F),G===r.HALF_FLOAT&&($=r.RGBA16F),G===r.UNSIGNED_BYTE&&($=Pe===ct?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(R,T){let G;return R?T===null||T===Wi||T===Xi?G=r.DEPTH24_STENCIL8:T===In?G=r.DEPTH32F_STENCIL8:T===Cr&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wi||T===Xi?G=r.DEPTH_COMPONENT24:T===In?G=r.DEPTH_COMPONENT32F:T===Cr&&(G=r.DEPTH_COMPONENT16),G}function L(R,T){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rt&&R.minFilter!==Zt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){const T=R.target;T.removeEventListener("dispose",P),I(T),T.isVideoTexture&&h.delete(T)}function C(R){const T=R.target;T.removeEventListener("dispose",C),b(T)}function I(R){const T=n.get(R);if(T.__webglInit===void 0)return;const G=R.source,ne=d.get(G);if(ne){const se=ne[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&E(R),Object.keys(ne).length===0&&d.delete(G)}n.remove(R)}function E(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const G=R.source,ne=d.get(G);delete ne[T.__cacheKey],o.memory.textures--}function b(R){const T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let se=0;se<T.__webglFramebuffer[ne].length;se++)r.deleteFramebuffer(T.__webglFramebuffer[ne][se]);else r.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)r.deleteFramebuffer(T.__webglFramebuffer[ne]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=R.textures;for(let ne=0,se=G.length;ne<se;ne++){const $=n.get(G[ne]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[ne])}n.remove(R)}let D=0;function H(){D=0}function N(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function W(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function Q(R,T){const G=n.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(G,R,T);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+T)}function j(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){z(G,R,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+T)}function K(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){z(G,R,T);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+T)}function V(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){q(G,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+T)}const ee={[sn]:r.REPEAT,[bi]:r.CLAMP_TO_EDGE,[Ar]:r.MIRRORED_REPEAT},te={[Rt]:r.NEAREST,[Zd]:r.NEAREST_MIPMAP_NEAREST,[fr]:r.NEAREST_MIPMAP_LINEAR,[Zt]:r.LINEAR,[Xo]:r.LINEAR_MIPMAP_NEAREST,[ci]:r.LINEAR_MIPMAP_LINEAR},O={[Xp]:r.NEVER,[Jp]:r.ALWAYS,[Yp]:r.LESS,[lf]:r.LEQUAL,[qp]:r.EQUAL,[Zp]:r.GEQUAL,[jp]:r.GREATER,[Kp]:r.NOTEQUAL};function ce(R,T){if(T.type===In&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zt||T.magFilter===Xo||T.magFilter===fr||T.magFilter===ci||T.minFilter===Zt||T.minFilter===Xo||T.minFilter===fr||T.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ee[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ee[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ee[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,te[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,te[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rt||T.minFilter!==fr&&T.minFilter!==ci||T.type===In&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function le(R,T){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",P));const ne=T.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const $=W(T);if($!==R.__cacheKey){se[$]===void 0&&(se[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[$].usedTimes++;const Pe=se[R.__cacheKey];Pe!==void 0&&(se[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&E(T)),R.__cacheKey=$,R.__webglTexture=se[$].texture}return G}function z(R,T,G){let ne=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=r.TEXTURE_3D);const se=le(R,T),$=T.source;t.bindTexture(ne,R.__webglTexture,r.TEXTURE0+G);const Pe=n.get($);if($.version!==Pe.__version||se===!0){t.activeTexture(r.TEXTURE0+G);const ge=Qe.getPrimaries(Qe.workingColorSpace),ye=T.colorSpace===Ln?null:Qe.getPrimaries(T.colorSpace),Ke=T.colorSpace===Ln||ge===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let he=x(T.image,!1,i.maxTextureSize);he=et(T,he);const Te=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let ze=M(T.internalFormat,Te,Fe,T.colorSpace,T.isVideoTexture);ce(ne,T);let Ee;const Je=T.mipmaps,Ve=T.isVideoTexture!==!0,tt=Pe.__version===void 0||se===!0,k=$.dataReady,pe=L(T,he);if(T.isDepthTexture)ze=y(T.format===Yi,T.type),tt&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,ze,he.width,he.height):t.texImage2D(r.TEXTURE_2D,0,ze,he.width,he.height,0,Te,Fe,null));else if(T.isDataTexture)if(Je.length>0){Ve&&tt&&t.texStorage2D(r.TEXTURE_2D,pe,ze,Je[0].width,Je[0].height);for(let J=0,ie=Je.length;J<ie;J++)Ee=Je[J],Ve?k&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Te,Fe,Ee.data):t.texImage2D(r.TEXTURE_2D,J,ze,Ee.width,Ee.height,0,Te,Fe,Ee.data);T.generateMipmaps=!1}else Ve?(tt&&t.texStorage2D(r.TEXTURE_2D,pe,ze,he.width,he.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he.width,he.height,Te,Fe,he.data)):t.texImage2D(r.TEXTURE_2D,0,ze,he.width,he.height,0,Te,Fe,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ve&&tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,ze,Je[0].width,Je[0].height,he.depth);for(let J=0,ie=Je.length;J<ie;J++)if(Ee=Je[J],T.format!==cn)if(Te!==null)if(Ve){if(k)if(T.layerUpdates.size>0){const we=gu(Ee.width,Ee.height,T.format,T.type);for(const _e of T.layerUpdates){const Xe=Ee.data.subarray(_e*we/Ee.data.BYTES_PER_ELEMENT,(_e+1)*we/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,_e,Ee.width,Ee.height,1,Te,Xe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,he.depth,Te,Ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,ze,Ee.width,Ee.height,he.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,he.depth,Te,Fe,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,ze,Ee.width,Ee.height,he.depth,0,Te,Fe,Ee.data)}else{Ve&&tt&&t.texStorage2D(r.TEXTURE_2D,pe,ze,Je[0].width,Je[0].height);for(let J=0,ie=Je.length;J<ie;J++)Ee=Je[J],T.format!==cn?Te!==null?Ve?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,J,ze,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?k&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Te,Fe,Ee.data):t.texImage2D(r.TEXTURE_2D,J,ze,Ee.width,Ee.height,0,Te,Fe,Ee.data)}else if(T.isDataArrayTexture)if(Ve){if(tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,ze,he.width,he.height,he.depth),k)if(T.layerUpdates.size>0){const J=gu(he.width,he.height,T.format,T.type);for(const ie of T.layerUpdates){const we=he.data.subarray(ie*J/he.data.BYTES_PER_ELEMENT,(ie+1)*J/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,Te,Fe,we)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,Fe,he.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,he.width,he.height,he.depth,0,Te,Fe,he.data);else if(T.isData3DTexture)Ve?(tt&&t.texStorage3D(r.TEXTURE_3D,pe,ze,he.width,he.height,he.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,Fe,he.data)):t.texImage3D(r.TEXTURE_3D,0,ze,he.width,he.height,he.depth,0,Te,Fe,he.data);else if(T.isFramebufferTexture){if(tt)if(Ve)t.texStorage2D(r.TEXTURE_2D,pe,ze,he.width,he.height);else{let J=he.width,ie=he.height;for(let we=0;we<pe;we++)t.texImage2D(r.TEXTURE_2D,we,ze,J,ie,0,Te,Fe,null),J>>=1,ie>>=1}}else if(Je.length>0){if(Ve&&tt){const J=me(Je[0]);t.texStorage2D(r.TEXTURE_2D,pe,ze,J.width,J.height)}for(let J=0,ie=Je.length;J<ie;J++)Ee=Je[J],Ve?k&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Te,Fe,Ee):t.texImage2D(r.TEXTURE_2D,J,ze,Te,Fe,Ee);T.generateMipmaps=!1}else if(Ve){if(tt){const J=me(he);t.texStorage2D(r.TEXTURE_2D,pe,ze,J.width,J.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Fe,he)}else t.texImage2D(r.TEXTURE_2D,0,ze,Te,Fe,he);p(T)&&g(ne),Pe.__version=$.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function q(R,T,G){if(T.image.length!==6)return;const ne=le(R,T),se=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const $=n.get(se);if(se.version!==$.__version||ne===!0){t.activeTexture(r.TEXTURE0+G);const Pe=Qe.getPrimaries(Qe.workingColorSpace),ge=T.colorSpace===Ln?null:Qe.getPrimaries(T.colorSpace),ye=T.colorSpace===Ln||Pe===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let ie=0;ie<6;ie++)!Ke&&!he?Te[ie]=x(T.image[ie],!0,i.maxCubemapSize):Te[ie]=he?T.image[ie].image:T.image[ie],Te[ie]=et(T,Te[ie]);const Fe=Te[0],ze=s.convert(T.format,T.colorSpace),Ee=s.convert(T.type),Je=M(T.internalFormat,ze,Ee,T.colorSpace),Ve=T.isVideoTexture!==!0,tt=$.__version===void 0||ne===!0,k=se.dataReady;let pe=L(T,Fe);ce(r.TEXTURE_CUBE_MAP,T);let J;if(Ke){Ve&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Je,Fe.width,Fe.height);for(let ie=0;ie<6;ie++){J=Te[ie].mipmaps;for(let we=0;we<J.length;we++){const _e=J[we];T.format!==cn?ze!==null?Ve?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,_e.width,_e.height,ze,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Je,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,_e.width,_e.height,ze,Ee,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Je,_e.width,_e.height,0,ze,Ee,_e.data)}}}else{if(J=T.mipmaps,Ve&&tt){J.length>0&&pe++;const ie=me(Te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te[ie].width,Te[ie].height,ze,Ee,Te[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Je,Te[ie].width,Te[ie].height,0,ze,Ee,Te[ie].data);for(let we=0;we<J.length;we++){const Xe=J[we].image[ie].image;Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Xe.width,Xe.height,ze,Ee,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Je,Xe.width,Xe.height,0,ze,Ee,Xe.data)}}else{Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ze,Ee,Te[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Je,ze,Ee,Te[ie]);for(let we=0;we<J.length;we++){const _e=J[we];Ve?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,ze,Ee,_e.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Je,ze,Ee,_e.image[ie])}}}p(T)&&g(r.TEXTURE_CUBE_MAP),$.__version=se.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function oe(R,T,G,ne,se,$){const Pe=s.convert(G.format,G.colorSpace),ge=s.convert(G.type),ye=M(G.internalFormat,Pe,ge,G.colorSpace),Ke=n.get(T),he=n.get(G);if(he.__renderTarget=T,!Ke.__hasExternalTextures){const Te=Math.max(1,T.width>>$),Fe=Math.max(1,T.height>>$);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,$,ye,Te,Fe,T.depth,0,Pe,ge,null):t.texImage2D(se,$,ye,Te,Fe,0,Pe,ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),be(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,se,he.__webglTexture,0,xe(T)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,se,he.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(R,T,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){const ne=T.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,$=y(T.stencilBuffer,se),Pe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=xe(T);be(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,$,T.width,T.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,R)}else{const ne=T.textures;for(let se=0;se<ne.length;se++){const $=ne[se],Pe=s.convert($.format,$.colorSpace),ge=s.convert($.type),ye=M($.internalFormat,Pe,ge,$.colorSpace),Ke=xe(T);G&&be(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,ye,T.width,T.height):be(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,ye,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ye,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(T.depthTexture);ne.__renderTarget=T,(!ne.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const se=ne.__webglTexture,$=xe(T);if(T.depthTexture.format===Cs)be(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(T.depthTexture.format===Yi)be(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function fe(R){const T=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){const se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=ne}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(T.__webglFramebuffer,R)}else if(G){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=r.createRenderbuffer(),Z(T.__webglDepthbuffer[ne],R,!1);else{const se=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[ne];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,$)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Z(T.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(R,T,G){const ne=n.get(R);T!==void 0&&oe(ne.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&fe(R)}function Oe(R){const T=R.texture,G=n.get(R),ne=n.get(T);R.addEventListener("dispose",C);const se=R.textures,$=R.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=T.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let ye=0;ye<T.mipmaps.length;ye++)G.__webglFramebuffer[ge][ye]=r.createFramebuffer()}else G.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)G.__webglFramebuffer[ge]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let ge=0,ye=se.length;ge<ye;ge++){const Ke=n.get(se[ge]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&be(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){const ye=se[ge];G.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const Ke=s.convert(ye.format,ye.colorSpace),he=s.convert(ye.type),Te=M(ye.internalFormat,Ke,he,ye.colorSpace,R.isXRRenderTarget===!0),Fe=xe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Te,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),ce(r.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)oe(G.__webglFramebuffer[ge][ye],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else oe(G.__webglFramebuffer[ge],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(T)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,ye=se.length;ge<ye;ge++){const Ke=se[ge],he=n.get(Ke);t.bindTexture(r.TEXTURE_2D,he.__webglTexture),ce(r.TEXTURE_2D,Ke),oe(G.__webglFramebuffer,R,Ke,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,0),p(Ke)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let ge=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,ne.__webglTexture),ce(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)oe(G.__webglFramebuffer[ye],R,T,r.COLOR_ATTACHMENT0,ge,ye);else oe(G.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,ge,0);p(T)&&g(ge),t.unbindTexture()}R.depthBuffer&&fe(R)}function Ce(R){const T=R.textures;for(let G=0,ne=T.length;G<ne;G++){const se=T[G];if(p(se)){const $=w(R),Pe=n.get(se).__webglTexture;t.bindTexture($,Pe),g($),t.unbindTexture()}}}const Ne=[],U=[];function re(R){if(R.samples>0){if(be(R)===!1){const T=R.textures,G=R.width,ne=R.height;let se=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=n.get(R),ge=T.length>1;if(ge)for(let ye=0;ye<T.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const Ke=n.get(T[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,G,ne,0,0,G,ne,se,r.NEAREST),l===!0&&(Ne.length=0,U.length=0,Ne.push(r.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ne.push($),U.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let ye=0;ye<T.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const Ke=n.get(T[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function xe(R){return Math.min(i.maxSamples,R.samples)}function be(R){const T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Se(R){const T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function et(R,T){const G=R.colorSpace,ne=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Qt&&G!==Ln&&(Qe.getTransfer(G)===ct?(ne!==cn||se!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=be}function my(r,e){function t(n,i=Ln){let s;const o=Qe.getTransfer(i);if(n===Gn)return r.UNSIGNED_BYTE;if(n===Dc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ic)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$d)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jd)return r.BYTE;if(n===Qd)return r.SHORT;if(n===Cr)return r.UNSIGNED_SHORT;if(n===Lc)return r.INT;if(n===Wi)return r.UNSIGNED_INT;if(n===In)return r.FLOAT;if(n===un)return r.HALF_FLOAT;if(n===ef)return r.ALPHA;if(n===tf)return r.RGB;if(n===cn)return r.RGBA;if(n===nf)return r.LUMINANCE;if(n===sf)return r.LUMINANCE_ALPHA;if(n===Cs)return r.DEPTH_COMPONENT;if(n===Yi)return r.DEPTH_STENCIL;if(n===ua)return r.RED;if(n===Nc)return r.RED_INTEGER;if(n===rf)return r.RG;if(n===Uc)return r.RG_INTEGER;if(n===kc)return r.RGBA_INTEGER;if(n===Yo||n===qo||n===jo||n===Ko)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Hl||n===Vl||n===Gl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===Yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wl||n===Xl)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===jl||n===Kl||n===Zl||n===Jl||n===Ql||n===$l||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ql)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===ac||n===lc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zo)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===of||n===cc||n===hc||n===uc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class gy extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vy={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _y{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xt({vertexShader:xy,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class My extends Ki{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,v=null;const x=new _y,p=t.getContextAttributes();let g=null,w=null;const M=[],y=[],L=new ae;let P=null;const C=new kt;C.viewport=new st;const I=new kt;I.viewport=new st;const E=[C,I],b=new gy;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=M[z];return q===void 0&&(q=new Ya,M[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=M[z];return q===void 0&&(q=new Ya,M[z]=q),q.getGripSpace()},this.getHand=function(z){let q=M[z];return q===void 0&&(q=new Ya,M[z]=q),q.getHandSpace()};function N(z){const q=y.indexOf(z.inputSource);if(q===-1)return;const oe=M[q];oe!==void 0&&(oe.update(z.inputSource,z.frame,c||o),oe.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Q);for(let z=0;z<M.length;z++){const q=y[z];q!==null&&(y[z]=null,M[z].disconnect(q))}D=null,H=null,x.reset(),e.setRenderTarget(g),f=null,d=null,u=null,i=null,w=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Jt(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,oe=null,Z=null;p.depth&&(Z=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=p.stencil?Yi:Cs,oe=p.stencil?Xi:Wi);const ue={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ue),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Jt(d.textureWidth,d.textureHeight,{format:cn,type:Gn,depthTexture:new Xc(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(z){for(let q=0;q<z.removed.length;q++){const oe=z.removed[q],Z=y.indexOf(oe);Z>=0&&(y[Z]=null,M[Z].disconnect(oe))}for(let q=0;q<z.added.length;q++){const oe=z.added[q];let Z=y.indexOf(oe);if(Z===-1){for(let fe=0;fe<M.length;fe++)if(fe>=y.length){y.push(oe),Z=fe;break}else if(y[fe]===null){y[fe]=oe,Z=fe;break}if(Z===-1)break}const ue=M[Z];ue&&ue.connect(oe)}}const j=new S,K=new S;function V(z,q,oe){j.setFromMatrixPosition(q.matrixWorld),K.setFromMatrixPosition(oe.matrixWorld);const Z=j.distanceTo(K),ue=q.projectionMatrix.elements,fe=oe.projectionMatrix.elements,Re=ue[14]/(ue[10]-1),Oe=ue[14]/(ue[10]+1),Ce=(ue[9]+1)/ue[5],Ne=(ue[9]-1)/ue[5],U=(ue[8]-1)/ue[0],re=(fe[8]+1)/fe[0],xe=Re*U,be=Re*re,Se=Z/(-U+re),et=Se*-U;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(et),z.translateZ(Se),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ue[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const me=Re+Se,R=Oe+Se,T=xe-et,G=be+(Z-et),ne=Ce*Oe/R*me,se=Ne*Oe/R*me;z.projectionMatrix.makePerspective(T,G,ne,se,me,R),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ee(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let q=z.near,oe=z.far;x.texture!==null&&(x.depthNear>0&&(q=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),b.near=I.near=C.near=q,b.far=I.far=C.far=oe,(D!==b.near||H!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,H=b.far),C.layers.mask=z.layers.mask|2,I.layers.mask=z.layers.mask|4,b.layers.mask=C.layers.mask|I.layers.mask;const Z=z.parent,ue=b.cameras;ee(b,Z);for(let fe=0;fe<ue.length;fe++)ee(ue[fe],Z);ue.length===2?V(b,C,I):b.projectionMatrix.copy(C.projectionMatrix),te(z,b,Z)};function te(z,q,oe){oe===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(oe.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ns*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let O=null;function ce(z,q){if(h=q.getViewerPose(c||o),v=q,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let Z=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let fe=0;fe<oe.length;fe++){const Re=oe[fe];let Oe=null;if(f!==null)Oe=f.getViewport(Re);else{const Ne=u.getViewSubImage(d,Re);Oe=Ne.viewport,fe===0&&(e.setRenderTargetTextures(w,Ne.colorTexture,d.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(w))}let Ce=E[fe];Ce===void 0&&(Ce=new kt,Ce.layers.enable(fe),Ce.viewport=new st,E[fe]=Ce),Ce.matrix.fromArray(Re.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Re.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),fe===0&&(b.matrix.copy(Ce.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Z===!0&&b.cameras.push(Ce)}const ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const fe=u.getDepthInformation(oe[0]);fe&&fe.isValid&&fe.texture&&x.init(e,fe,i.renderState)}}for(let oe=0;oe<M.length;oe++){const Z=y[oe],ue=M[oe];Z!==null&&ue!==void 0&&ue.update(Z,q,c||o)}O&&O(z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),v=null}const le=new xf;le.setAnimationLoop(ce),this.setAnimationLoop=function(z){O=z},this.dispose=function(){}}}const ki=new $e,Sy=new ke;function wy(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,mf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,w,M,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),v(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,w,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Xt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Xt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const w=e.get(g),M=w.envMap,y=w.envMapRotation;M&&(p.envMap.value=M,ki.copy(y),ki.x*=-1,ki.y*=-1,ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),p.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(ki)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,w,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*w,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,w){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const w=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function by(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const y=M.program;n.uniformBlockBinding(w,y)}function c(w,M){let y=i[w.id];y===void 0&&(v(w),y=h(w),i[w.id]=y,w.addEventListener("dispose",p));const L=M.program;n.updateUBOMapping(w,L);const P=e.render.frame;s[w.id]!==P&&(d(w),s[w.id]=P)}function h(w){const M=u();w.__bindingPointIndex=M;const y=r.createBuffer(),L=w.__size,P=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,L,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=i[w.id],y=w.uniforms,L=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let P=0,C=y.length;P<C;P++){const I=Array.isArray(y[P])?y[P]:[y[P]];for(let E=0,b=I.length;E<b;E++){const D=I[E];if(f(D,P,E,L)===!0){const H=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Q=0;Q<N.length;Q++){const j=N[Q],K=x(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,H+W,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(w,M,y,L){const P=w.value,C=M+"_"+y;if(L[C]===void 0)return typeof P=="number"||typeof P=="boolean"?L[C]=P:L[C]=P.clone(),!0;{const I=L[C];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return L[C]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function v(w){const M=w.uniforms;let y=0;const L=16;for(let C=0,I=M.length;C<I;C++){const E=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,D=E.length;b<D;b++){const H=E[b],N=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Q=N.length;W<Q;W++){const j=N[W],K=x(j),V=y%L,ee=V%K.boundary,te=V+ee;y+=ee,te!==0&&L-te<K.storage&&(y+=L-te),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=K.storage}}}const P=y%L;return P>0&&(y+=L-P),w.__size=y,w.__cache={},this}function x(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){const M=w.target;M.removeEventListener("dispose",p);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}class wf{constructor(e={}){const{canvas:t=pm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const v=new Uint32Array(4),x=new Int32Array(4);let p=null,g=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=Ci,this.toneMappingExposure=1;const y=this;let L=!1,P=0,C=0,I=null,E=-1,b=null;const D=new st,H=new st;let N=null;const W=new Ae(0);let Q=0,j=t.width,K=t.height,V=1,ee=null,te=null;const O=new st(0,0,j,K),ce=new st(0,0,j,K);let le=!1;const z=new Gc;let q=!1,oe=!1;const Z=new ke,ue=new ke,fe=new S,Re=new st,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Ne(){return I===null?V:1}let U=n;function re(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rc}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",_e,!1),U===null){const F="webgl2";if(U=re(F,A),U===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,be,Se,et,me,R,T,G,ne,se,$,Pe,ge,ye,Ke,he,Te,Fe,ze,Ee,Je,Ve,tt,k;function pe(){xe=new Pv(U),xe.init(),Ve=new my(U,xe),be=new bv(U,xe,e,Ve),Se=new dy(U,xe),be.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),et=new Iv(U),me=new Jx,R=new py(U,xe,Se,me,be,Ve,et),T=new Ev(y),G=new Rv(y),ne=new zm(U),tt=new Sv(U,ne),se=new Lv(U,ne,et,tt),$=new Uv(U,se,ne,et),ze=new Nv(U,be,R),he=new Tv(me),Pe=new Zx(y,T,G,xe,be,tt,he),ge=new wy(y,me),ye=new $x,Ke=new ry(xe),Fe=new Mv(y,T,G,Se,$,f,l),Te=new hy(y,$,be),k=new by(U,et,be,Se),Ee=new wv(U,xe,et),Je=new Dv(U,xe,et),et.programs=Pe.programs,y.capabilities=be,y.extensions=xe,y.properties=me,y.renderLists=ye,y.shadowMap=Te,y.state=Se,y.info=et}pe();const J=new My(y,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(j,K,!1))},this.getSize=function(A){return A.set(j,K)},this.setSize=function(A,F,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,K=F,t.width=Math.floor(A*V),t.height=Math.floor(F*V),X===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(j*V,K*V).floor()},this.setDrawingBufferSize=function(A,F,X){j=A,K=F,V=X,t.width=Math.floor(A*X),t.height=Math.floor(F*X),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,F,X,Y){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,F,X,Y),Se.viewport(D.copy(O).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,F,X,Y){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,F,X,Y),Se.scissor(H.copy(ce).multiplyScalar(V).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){Se.setScissorTest(le=A)},this.setOpaqueSort=function(A){ee=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(A=!0,F=!0,X=!0){let Y=0;if(A){let B=!1;if(I!==null){const de=I.texture.format;B=de===kc||de===Uc||de===Nc}if(B){const de=I.texture.type,Me=de===Gn||de===Wi||de===Cr||de===Xi||de===Dc||de===Ic,Le=Fe.getClearColor(),De=Fe.getClearAlpha(),Ge=Le.r,Ye=Le.g,Ie=Le.b;Me?(v[0]=Ge,v[1]=Ye,v[2]=Ie,v[3]=De,U.clearBufferuiv(U.COLOR,0,v)):(x[0]=Ge,x[1]=Ye,x[2]=Ie,x[3]=De,U.clearBufferiv(U.COLOR,0,x))}else Y|=U.COLOR_BUFFER_BIT}F&&(Y|=U.DEPTH_BUFFER_BIT),X&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ye.dispose(),Ke.dispose(),me.dispose(),T.dispose(),G.dispose(),$.dispose(),tt.dispose(),k.dispose(),Pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",fh),J.removeEventListener("sessionend",ph),Pi.stop()};function ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=et.autoReset,F=Te.enabled,X=Te.autoUpdate,Y=Te.needsUpdate,B=Te.type;pe(),et.autoReset=A,Te.enabled=F,Te.autoUpdate=X,Te.needsUpdate=Y,Te.type=B}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xe(A){const F=A.target;F.removeEventListener("dispose",Xe),wt(F)}function wt(A){Ft(A),me.remove(A)}function Ft(A){const F=me.get(A).programs;F!==void 0&&(F.forEach(function(X){Pe.releaseProgram(X)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,X,Y,B,de){F===null&&(F=Oe);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Le=pp(A,F,X,Y,B);Se.setMaterial(Y,Me);let De=X.index,Ge=1;if(Y.wireframe===!0){if(De=se.getWireframeAttribute(X),De===void 0)return;Ge=2}const Ye=X.drawRange,Ie=X.attributes.position;let nt=Ye.start*Ge,mt=(Ye.start+Ye.count)*Ge;de!==null&&(nt=Math.max(nt,de.start*Ge),mt=Math.min(mt,(de.start+de.count)*Ge)),De!==null?(nt=Math.max(nt,0),mt=Math.min(mt,De.count)):Ie!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,Ie.count));const gt=mt-nt;if(gt<0||gt===1/0)return;tt.setup(B,Y,Le,X,De);let $t,rt=Ee;if(De!==null&&($t=ne.get(De),rt=Je,rt.setIndex($t)),B.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*Ne()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(B.isLine){let Ue=Y.linewidth;Ue===void 0&&(Ue=1),Se.setLineWidth(Ue*Ne()),B.isLineSegments?rt.setMode(U.LINES):B.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else B.isPoints?rt.setMode(U.POINTS):B.isSprite&&rt.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)rt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ue=B._multiDrawStarts,Kn=B._multiDrawCounts,ot=B._multiDrawCount,Mn=De?ne.get(De).bytesPerElement:1,Ji=me.get(Y).currentProgram.getUniforms();for(let rn=0;rn<ot;rn++)Ji.setValue(U,"_gl_DrawID",rn),rt.render(Ue[rn]/Mn,Kn[rn])}else if(B.isInstancedMesh)rt.renderInstances(nt,gt,B.count);else if(X.isInstancedBufferGeometry){const Ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Kn=Math.min(X.instanceCount,Ue);rt.renderInstances(nt,gt,Kn)}else rt.render(nt,gt)};function lt(A,F,X){A.transparent===!0&&A.side===Ct&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,Xr(A,F,X),A.side=Vn,A.needsUpdate=!0,Xr(A,F,X),A.side=Ct):Xr(A,F,X)}this.compile=function(A,F,X=null){X===null&&(X=A),g=Ke.get(X),g.init(F),M.push(g),X.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),A!==X&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const Y=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Le=de[Me];lt(Le,X,B),Y.add(Le)}else lt(de,X,B),Y.add(de)}),M.pop(),g=null,Y},this.compileAsync=function(A,F,X=null){const Y=this.compile(A,F,X);return new Promise(B=>{function de(){if(Y.forEach(function(Me){me.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){B(A);return}setTimeout(de,10)}xe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let _n=null;function jn(A){_n&&_n(A)}function fh(){Pi.stop()}function ph(){Pi.start()}const Pi=new xf;Pi.setAnimationLoop(jn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){_n=A,J.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},J.addEventListener("sessionstart",fh),J.addEventListener("sessionend",ph),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,F,I),g=Ke.get(A,M.length),g.init(F),M.push(g),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),z.setFromProjectionMatrix(ue),oe=this.localClippingEnabled,q=he.init(this.clippingPlanes,oe),p=ye.get(A,w.length),p.init(),w.push(p),J.enabled===!0&&J.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&xa(de,F,-1/0,y.sortObjects)}xa(A,F,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ee,te),Ce=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ce&&Fe.addToRenderList(p,A),this.info.render.frame++,q===!0&&he.beginShadows();const X=g.state.shadowsArray;Te.render(X,A,F),q===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,B=p.transmissive;if(g.setupLights(),F.isArrayCamera){const de=F.cameras;if(B.length>0)for(let Me=0,Le=de.length;Me<Le;Me++){const De=de[Me];gh(Y,B,A,De)}Ce&&Fe.render(A);for(let Me=0,Le=de.length;Me<Le;Me++){const De=de[Me];mh(p,A,De,De.viewport)}}else B.length>0&&gh(Y,B,A,F),Ce&&Fe.render(A),mh(p,A,F);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,F),tt.resetDefaultState(),E=-1,b=null,M.pop(),M.length>0?(g=M[M.length-1],q===!0&&he.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function xa(A,F,X,Y){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){Y&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const Me=$.update(A),Le=A.material;Le.visible&&p.push(A,Me,Le,X,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||z.intersectsObject(A))){const Me=$.update(A),Le=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Re.copy(Me.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Le)){const De=Me.groups;for(let Ge=0,Ye=De.length;Ge<Ye;Ge++){const Ie=De[Ge],nt=Le[Ie.materialIndex];nt&&nt.visible&&p.push(A,Me,nt,X,Re.z,Ie)}}else Le.visible&&p.push(A,Me,Le,X,Re.z,null)}}const de=A.children;for(let Me=0,Le=de.length;Me<Le;Me++)xa(de[Me],F,X,Y)}function mh(A,F,X,Y){const B=A.opaque,de=A.transmissive,Me=A.transparent;g.setupLightsView(X),q===!0&&he.setGlobalState(y.clippingPlanes,X),Y&&Se.viewport(D.copy(Y)),B.length>0&&Wr(B,F,X),de.length>0&&Wr(de,F,X),Me.length>0&&Wr(Me,F,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function gh(A,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Jt(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?un:Gn,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const de=g.state.transmissionRenderTarget[Y.id],Me=Y.viewport||D;de.setSize(Me.z,Me.w);const Le=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(W),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Ce&&Fe.render(X);const De=y.toneMapping;y.toneMapping=Ci;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),q===!0&&he.setGlobalState(y.clippingPlanes,Y),Wr(A,X,Y),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ie=0,nt=F.length;Ie<nt;Ie++){const mt=F[Ie],gt=mt.object,$t=mt.geometry,rt=mt.material,Ue=mt.group;if(rt.side===Ct&&gt.layers.test(Y.layers)){const Kn=rt.side;rt.side=Xt,rt.needsUpdate=!0,vh(gt,X,Y,$t,rt,Ue),rt.side=Kn,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de))}y.setRenderTarget(Le),y.setClearColor(W,Q),Ge!==void 0&&(Y.viewport=Ge),y.toneMapping=De}function Wr(A,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let B=0,de=A.length;B<de;B++){const Me=A[B],Le=Me.object,De=Me.geometry,Ge=Y===null?Me.material:Y,Ye=Me.group;Le.layers.test(X.layers)&&vh(Le,F,X,De,Ge,Ye)}}function vh(A,F,X,Y,B,de){A.onBeforeRender(y,F,X,Y,B,de),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(y,F,X,Y,A,de),B.transparent===!0&&B.side===Ct&&B.forceSinglePass===!1?(B.side=Xt,B.needsUpdate=!0,y.renderBufferDirect(X,F,Y,B,A,de),B.side=Vn,B.needsUpdate=!0,y.renderBufferDirect(X,F,Y,B,A,de),B.side=Ct):y.renderBufferDirect(X,F,Y,B,A,de),A.onAfterRender(y,F,X,Y,B,de)}function Xr(A,F,X){F.isScene!==!0&&(F=Oe);const Y=me.get(A),B=g.state.lights,de=g.state.shadowsArray,Me=B.state.version,Le=Pe.getParameters(A,B.state,de,F,X),De=Pe.getProgramCacheKey(Le);let Ge=Y.programs;Y.environment=A.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(A.isMeshStandardMaterial?G:T).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",Xe),Ge=new Map,Y.programs=Ge);let Ye=Ge.get(De);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===Me)return yh(A,Le),Ye}else Le.uniforms=Pe.getUniforms(A),A.onBeforeCompile(Le,y),Ye=Pe.acquireProgram(Le,De),Ge.set(De,Ye),Y.uniforms=Le.uniforms;const Ie=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=he.uniform),yh(A,Le),Y.needsLights=gp(A),Y.lightsStateVersion=Me,Y.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function xh(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Jo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function yh(A,F){const X=me.get(A);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function pp(A,F,X,Y,B){F.isScene!==!0&&(F=Oe),R.resetTextureUnits();const de=F.fog,Me=Y.isMeshStandardMaterial?F.environment:null,Le=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qt,De=(Y.isMeshStandardMaterial?G:T).get(Y.envMap||Me),Ge=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ye=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,mt=!!X.morphAttributes.color;let gt=Ci;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(gt=y.toneMapping);const $t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rt=$t!==void 0?$t.length:0,Ue=me.get(Y),Kn=g.state.lights;if(q===!0&&(oe===!0||A!==b)){const dn=A===b&&Y.id===E;he.setState(Y,A,dn)}let ot=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Kn.state.version||Ue.outputColorSpace!==Le||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==De||Y.fog===!0&&Ue.fog!==de||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==he.numPlanes||Ue.numIntersection!==he.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==Ye||Ue.morphTargets!==Ie||Ue.morphNormals!==nt||Ue.morphColors!==mt||Ue.toneMapping!==gt||Ue.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ue.__version=Y.version);let Mn=Ue.currentProgram;ot===!0&&(Mn=Xr(Y,F,B));let Ji=!1,rn=!1,qs=!1;const vt=Mn.getUniforms(),kn=Ue.uniforms;if(Se.useProgram(Mn.program)&&(Ji=!0,rn=!0,qs=!0),Y.id!==E&&(E=Y.id,rn=!0),Ji||b!==A){Se.buffers.depth.getReversed()?(Z.copy(A.projectionMatrix),gm(Z),vm(Z),vt.setValue(U,"projectionMatrix",Z)):vt.setValue(U,"projectionMatrix",A.projectionMatrix),vt.setValue(U,"viewMatrix",A.matrixWorldInverse);const pi=vt.map.cameraPosition;pi!==void 0&&pi.setValue(U,fe.setFromMatrixPosition(A.matrixWorld)),be.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,rn=!0,qs=!0)}if(B.isSkinnedMesh){vt.setOptional(U,B,"bindMatrix"),vt.setOptional(U,B,"bindMatrixInverse");const dn=B.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),vt.setValue(U,"boneTexture",dn.boneTexture,R))}B.isBatchedMesh&&(vt.setOptional(U,B,"batchingTexture"),vt.setValue(U,"batchingTexture",B._matricesTexture,R),vt.setOptional(U,B,"batchingIdTexture"),vt.setValue(U,"batchingIdTexture",B._indirectTexture,R),vt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(U,"batchingColorTexture",B._colorsTexture,R));const js=X.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&ze.update(B,X,Mn),(rn||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,vt.setValue(U,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(kn.envMap.value=De,kn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(kn.envMapIntensity.value=F.environmentIntensity),rn&&(vt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&mp(kn,qs),de&&Y.fog===!0&&ge.refreshFogUniforms(kn,de),ge.refreshMaterialUniforms(kn,Y,V,K,g.state.transmissionRenderTarget[A.id]),Jo.upload(U,xh(Ue),kn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Jo.upload(U,xh(Ue),kn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(U,"center",B.center),vt.setValue(U,"modelViewMatrix",B.modelViewMatrix),vt.setValue(U,"normalMatrix",B.normalMatrix),vt.setValue(U,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const dn=Y.uniformsGroups;for(let pi=0,mi=dn.length;pi<mi;pi++){const _h=dn[pi];k.update(_h,Mn),k.bind(_h,Mn)}}return Mn}function mp(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function gp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,F,X){me.get(A.texture).__webglTexture=F,me.get(A.depthTexture).__webglTexture=X;const Y=me.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const X=me.get(A);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,X=0){I=A,P=F,C=X;let Y=!0,B=null,de=!1,Me=!1;if(A){const De=me.get(A);if(De.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(De.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(De.__hasExternalTextures)R.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ie=A.depthTexture;if(De.__boundDepthTexture!==Ie){if(Ie!==null&&me.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const Ye=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[F])?B=Ye[F][X]:B=Ye[F],de=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?B=me.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[X]:B=Ye,D.copy(A.viewport),H.copy(A.scissor),N=A.scissorTest}else D.copy(O).multiplyScalar(V).floor(),H.copy(ce).multiplyScalar(V).floor(),N=le;if(Se.bindFramebuffer(U.FRAMEBUFFER,B)&&Y&&Se.drawBuffers(A,B),Se.viewport(D),Se.scissor(H),Se.setScissorTest(N),de){const De=me.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,X)}else if(Me){const De=me.get(A.texture),Ge=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.__webglTexture,X||0,Ge)}E=-1},this.readRenderTargetPixels=function(A,F,X,Y,B,de,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){Se.bindFramebuffer(U.FRAMEBUFFER,Le);try{const De=A.texture,Ge=De.format,Ye=De.type;if(!be.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-Y&&X>=0&&X<=A.height-B&&U.readPixels(F,X,Y,B,Ve.convert(Ge),Ve.convert(Ye),de)}finally{const De=I!==null?me.get(I).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,F,X,Y,B,de,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){const De=A.texture,Ge=De.format,Ye=De.type;if(!be.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-Y&&X>=0&&X<=A.height-B){Se.bindFramebuffer(U.FRAMEBUFFER,Le);const Ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(F,X,Y,B,Ve.convert(Ge),Ve.convert(Ye),0);const nt=I!==null?me.get(I).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,nt);const mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mm(U,mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.deleteBuffer(Ie),U.deleteSync(mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,X=0){A.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-X),B=Math.floor(A.image.width*Y),de=Math.floor(A.image.height*Y),Me=F!==null?F.x:0,Le=F!==null?F.y:0;R.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Me,Le,B,de),Se.unbindTexture()},this.copyTextureToTexture=function(A,F,X=null,Y=null,B=0){A.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],F=arguments[2],B=arguments[3]||0,X=null);let de,Me,Le,De,Ge,Ye,Ie,nt,mt;const gt=A.isCompressedTexture?A.mipmaps[B]:A.image;X!==null?(de=X.max.x-X.min.x,Me=X.max.y-X.min.y,Le=X.isBox3?X.max.z-X.min.z:1,De=X.min.x,Ge=X.min.y,Ye=X.isBox3?X.min.z:0):(de=gt.width,Me=gt.height,Le=gt.depth||1,De=0,Ge=0,Ye=0),Y!==null?(Ie=Y.x,nt=Y.y,mt=Y.z):(Ie=0,nt=0,mt=0);const $t=Ve.convert(F.format),rt=Ve.convert(F.type);let Ue;F.isData3DTexture?(R.setTexture3D(F,0),Ue=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Ue=U.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Ue=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Kn=U.getParameter(U.UNPACK_ROW_LENGTH),ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ji=U.getParameter(U.UNPACK_SKIP_ROWS),rn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const qs=A.isDataArrayTexture||A.isData3DTexture,vt=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const kn=me.get(A),js=me.get(F),dn=me.get(kn.__renderTarget),pi=me.get(js.__renderTarget);Se.bindFramebuffer(U.READ_FRAMEBUFFER,dn.__webglFramebuffer),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let mi=0;mi<Le;mi++)qs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.get(A).__webglTexture,B,Ye+mi),A.isDepthTexture?(vt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.get(F).__webglTexture,B,mt+mi),U.blitFramebuffer(De,Ge,de,Me,Ie,nt,de,Me,U.DEPTH_BUFFER_BIT,U.NEAREST)):vt?U.copyTexSubImage3D(Ue,B,Ie,nt,mt+mi,De,Ge,de,Me):U.copyTexSubImage2D(Ue,B,Ie,nt,mt+mi,De,Ge,de,Me);Se.bindFramebuffer(U.READ_FRAMEBUFFER,null),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else vt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ue,B,Ie,nt,mt,de,Me,Le,$t,rt,gt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ue,B,Ie,nt,mt,de,Me,Le,$t,gt.data):U.texSubImage3D(Ue,B,Ie,nt,mt,de,Me,Le,$t,rt,gt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Ie,nt,de,Me,$t,rt,gt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Ie,nt,gt.width,gt.height,$t,gt.data):U.texSubImage2D(U.TEXTURE_2D,B,Ie,nt,de,Me,$t,rt,gt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Kn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ji),U.pixelStorei(U.UNPACK_SKIP_IMAGES,rn),B===0&&F.generateMipmaps&&U.generateMipmap(Ue),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,F,X=null,Y=null,B=0){return A.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],F=arguments[3],B=arguments[4]||0),pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,X,Y,B)},this.initRenderTarget=function(A){me.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){P=0,C=0,I=null,Se.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class Yc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new Yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qc extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new S;class Dr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gc extends yn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ds;const $s=new S,fs=new S,ps=new S,ms=new ae,er=new ae,Tf=new ke,fo=new S,tr=new S,po=new S,vu=new ae,qa=new ae,xu=new ae;class yu extends yt{constructor(e=new gc){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bf(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Dr(n,3,0,!1)),ds.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=ds,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Tf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;mo(fo.set(-.5,-.5,0),ps,o,fs,i,s),mo(tr.set(.5,-.5,0),ps,o,fs,i,s),mo(po.set(.5,.5,0),ps,o,fs,i,s),vu.set(0,0),qa.set(1,0),xu.set(1,1);let a=e.ray.intersectTriangle(fo,tr,po,!1,$s);if(a===null&&(mo(tr.set(-.5,.5,0),ps,o,fs,i,s),qa.set(0,1),a=e.ray.intersectTriangle(fo,po,tr,!1,$s),a===null))return;const l=e.ray.origin.distanceTo($s);l<e.near||l>e.far||t.push({distance:l,point:$s.clone(),uv:vn.getInterpolation($s,fo,tr,po,vu,qa,xu,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mo(r,e,t,n,i,s){ms.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(er.x=s*ms.x-i*ms.y,er.y=i*ms.x+s*ms.y):er.copy(ms),r.copy(e),r.x+=er.x,r.y+=er.y,r.applyMatrix4(Tf)}const _u=new S,Mu=new st,Su=new st,Ty=new S,wu=new ke,go=new S,ja=new Wn,bu=new ke,Ka=new Fr;class Ey extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,go),this.boundingBox.expandByPoint(go)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,go),this.boundingSphere.expandByPoint(go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(i),e.ray.intersectsSphere(ja)!==!1&&(bu.copy(i).invert(),Ka.copy(e.ray).applyMatrix4(bu),!(this.boundingBox!==null&&Ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mu.fromBufferAttribute(i.attributes.skinIndex,e),Su.fromBufferAttribute(i.attributes.skinWeight,e),_u.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Su.getComponent(s);if(o!==0){const a=Mu.getComponent(s);wu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ty.copy(_u).applyMatrix4(wu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ef extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Br extends bt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Rt,h=Rt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new ke,Ay=new ke;class jc{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Ay;Tu.multiplyMatrices(a,t[s]),Tu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Br(t,e,e,cn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ef),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class sa extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new ke,Eu=new ke,vo=[],Au=new Mt,Cy=new ke,nr=new Be,ir=new Wn;class ra extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Au.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(Au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),ir.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),Eu.multiplyMatrices(n,gs),nr.matrixWorld=Eu,nr.raycast(e,vo);for(let o=0,a=vo.length;o<a;o++){const l=vo[o];l.instanceId=s,l.object=this,t.push(l)}vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(i*this.count),i,this.count,ua,In));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Af extends yn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new S,aa=new S,Cu=new ke,sr=new Fr,xo=new Wn,Za=new S,Ru=new S;class Kc extends yt{constructor(e=new Tt,t=new Af){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)oa.fromBufferAttribute(t,i-1),aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oa.distanceTo(aa);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=s,e.ray.intersectsSphere(xo)===!1)return;Cu.copy(i).invert(),sr.copy(e.ray).applyMatrix4(Cu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let x=f,p=v-1;x<p;x+=c){const g=h.getX(x),w=h.getX(x+1),M=yo(this,e,sr,l,g,w);M&&t.push(M)}if(this.isLineLoop){const x=h.getX(v-1),p=h.getX(f),g=yo(this,e,sr,l,x,p);g&&t.push(g)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=f,p=v-1;x<p;x+=c){const g=yo(this,e,sr,l,x,x+1);g&&t.push(g)}if(this.isLineLoop){const x=yo(this,e,sr,l,v-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yo(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(oa.fromBufferAttribute(o,i),aa.fromBufferAttribute(o,s),t.distanceSqToSegment(oa,aa,Za,Ru)>n)return;Za.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Za);if(!(l<e.near||l>e.far))return{distance:l,point:Ru.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Pu=new S,Lu=new S;class Ry extends Kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Pu.fromBufferAttribute(t,i),Lu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pu.distanceTo(Lu);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Py extends Kc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cf extends yn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Du=new ke,vc=new Fr,_o=new Wn,Mo=new S;class Rf extends yt{constructor(e=new Tt,t=new Cf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(i),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;Du.copy(i).invert(),vc.copy(e.ray).applyMatrix4(Du);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,x=f;v<x;v++){const p=c.getX(v);Mo.fromBufferAttribute(u,p),Iu(Mo,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let v=d,x=f;v<x;v++)Mo.fromBufferAttribute(u,v),Iu(Mo,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Iu(r,e,t,n,i,s,o){const a=vc.distanceSqToPoint(r);if(a<t){const l=new S;vc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zc extends bt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ae:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],s=[],o=[],a=new S,l=new ke;for(let f=0;f<=e;f++){const v=f/e;i[f]=this.getTangentAt(v,new S)}s[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Nt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,v))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Nt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(i[v],f*v)),o[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jc extends Xn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ly extends Jc{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const So=new S,Ja=new Qc,Qa=new Qc,$a=new Qc;class Pf extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(So.subVectors(i[0],i[1]).add(i[0]),c=So);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(So.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),v<1e-4&&(v=x),p<1e-4&&(p=x),Ja.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,v,x,p),Qa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,v,x,p),$a.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,v,x,p)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Qa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$a.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ja.calc(l),Qa.calc(l),$a.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nu(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Dy(r,e){const t=1-r;return t*t*e}function Iy(r,e){return 2*(1-r)*r*e}function Ny(r,e){return r*r*e}function yr(r,e,t,n){return Dy(r,e)+Iy(r,t)+Ny(r,n)}function Uy(r,e){const t=1-r;return t*t*t*e}function ky(r,e){const t=1-r;return 3*t*t*r*e}function Oy(r,e){return 3*(1-r)*r*r*e}function Fy(r,e){return r*r*r*e}function _r(r,e,t,n,i){return Uy(r,e)+ky(r,t)+Oy(r,n)+Fy(r,i)}class Lf extends Xn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,i.x,s.x,o.x,a.x),_r(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class By extends Xn{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,i.x,s.x,o.x,a.x),_r(e,i.y,s.y,o.y,a.y),_r(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Df extends Xn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zy extends Xn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class If extends Xn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(yr(e,i.x,s.x,o.x),yr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nf extends Xn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(yr(e,i.x,s.x,o.x),yr(e,i.y,s.y,o.y),yr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uf extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Nu(a,l.x,c.x,h.x,u.x),Nu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var xc=Object.freeze({__proto__:null,ArcCurve:Ly,CatmullRomCurve3:Pf,CubicBezierCurve:Lf,CubicBezierCurve3:By,EllipseCurve:Jc,LineCurve:Df,LineCurve3:zy,QuadraticBezierCurve:If,QuadraticBezierCurve3:Nf,SplineCurve:Uf});class Hy extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new xc[i.type]().fromJSON(i))}return this}}class Uu extends Hy{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Df(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new If(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Lf(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Uf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Jc(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mr extends Tt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new S,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zr extends Tt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let v=0;const x=[],p=n/2;let g=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function w(){const y=new S,L=new S;let P=0;const C=(t-e)/n;for(let I=0;I<=s;I++){const E=[],b=I/s,D=b*(t-e)+e;for(let H=0;H<=i;H++){const N=H/i,W=N*l+a,Q=Math.sin(W),j=Math.cos(W);L.x=D*Q,L.y=-b*n+p,L.z=D*j,u.push(L.x,L.y,L.z),y.set(Q,C,j).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-b),E.push(v++)}x.push(E)}for(let I=0;I<i;I++)for(let E=0;E<s;E++){const b=x[E][I],D=x[E+1][I],H=x[E+1][I+1],N=x[E][I+1];(e>0||E!==0)&&(h.push(b,D,N),P+=3),(t>0||E!==s-1)&&(h.push(D,H,N),P+=3)}c.addGroup(g,P,0),g+=P}function M(y){const L=v,P=new ae,C=new S;let I=0;const E=y===!0?e:t,b=y===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),v++;const D=v;for(let H=0;H<=i;H++){const W=H/i*l+a,Q=Math.cos(W),j=Math.sin(W);C.x=E*j,C.y=p*b,C.z=E*Q,u.push(C.x,C.y,C.z),d.push(0,b,0),P.x=Q*.5+.5,P.y=j*.5*b+.5,f.push(P.x,P.y),v++}for(let H=0;H<i;H++){const N=L+H,W=D+H;y===!0?h.push(W,W+1,N):h.push(W+1,W,N),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $c extends zr{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $c(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kf extends Uu{constructor(e){super(e),this.uuid=xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Uu().fromJSON(i))}return this}}const Vy={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Of(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=qy(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let v=t;v<i;v+=t)u=r[v],d=r[v+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ir(s,o,t,a,l,f,0),o}};function Of(r,e,t,n,i){let s,o;if(i===s_(r,e,t,n)>0)for(s=e;s<t;s+=n)o=ku(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=ku(s,r[s],r[s+1],o);return o&&ma(o,o.next)&&(Ur(o),o=o.next),o}function qi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ma(t,t.next)||St(t.prev,t,t.next)===0)){if(Ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ir(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Qy(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Wy(r,n,i,s):Gy(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Ur(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Xy(qi(r),e,t),Ir(r,e,t,n,i,s,2)):o===2&&Yy(r,e,t,n,i,s):Ir(qi(r),e,t,n,i,s,1);break}}}function Gy(r){const e=r.prev,t=r,n=r.next;if(St(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=d&&v.y>=u&&v.y<=f&&bs(i,a,s,l,o,c,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Wy(r,e,t,n){const i=r.prev,s=r,o=r.next;if(St(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,v=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=yc(f,v,e,t,n),w=yc(x,p,e,t,n);let M=r.prevZ,y=r.nextZ;for(;M&&M.z>=g&&y&&y.z<=w;){if(M.x>=f&&M.x<=x&&M.y>=v&&M.y<=p&&M!==i&&M!==o&&bs(a,h,l,u,c,d,M.x,M.y)&&St(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=x&&y.y>=v&&y.y<=p&&y!==i&&y!==o&&bs(a,h,l,u,c,d,y.x,y.y)&&St(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=v&&M.y<=p&&M!==i&&M!==o&&bs(a,h,l,u,c,d,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=x&&y.y>=v&&y.y<=p&&y!==i&&y!==o&&bs(a,h,l,u,c,d,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xy(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!ma(i,s)&&Ff(i,n,n.next,s)&&Nr(i,s)&&Nr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ur(n),Ur(n.next),n=r=s),n=n.next}while(n!==r);return qi(n)}function Yy(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t_(o,a)){let l=Bf(o,a);o=qi(o,o.next),l=qi(l,l.next),Ir(o,e,t,n,i,s,0),Ir(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function qy(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Of(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(e_(c));for(i.sort(jy),s=0;s<i.length;s++)t=Ky(i[s],t);return t}function jy(r,e){return r.x-e.x}function Ky(r,e){const t=Zy(r,e);if(!t)return e;const n=Bf(t,r);return qi(n,n.next),qi(t,t.next)}function Zy(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&bs(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Nr(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Jy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Jy(r,e){return St(r.prev,r,e.prev)<0&&St(e.next,r,r.next)<0}function Qy(r,e,t,n){let i=r;do i.z===0&&(i.z=yc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,$y(i)}function $y(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function yc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function e_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function bs(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function t_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!n_(r,e)&&(Nr(r,e)&&Nr(e,r)&&i_(r,e)&&(St(r.prev,r,e.prev)||St(r,e.prev,e))||ma(r,e)&&St(r.prev,r,r.next)>0&&St(e.prev,e,e.next)>0)}function St(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ma(r,e){return r.x===e.x&&r.y===e.y}function Ff(r,e,t,n){const i=bo(St(r,e,t)),s=bo(St(r,e,n)),o=bo(St(t,n,r)),a=bo(St(t,n,e));return!!(i!==s&&o!==a||i===0&&wo(r,t,e)||s===0&&wo(r,n,e)||o===0&&wo(t,r,n)||a===0&&wo(t,e,n))}function wo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function bo(r){return r>0?1:r<0?-1:0}function n_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Ff(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Nr(r,e){return St(r.prev,r,r.next)<0?St(r,e,r.next)>=0&&St(r,r.prev,e)>=0:St(r,e,r.prev)<0||St(r,r.next,e)<0}function i_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Bf(r,e){const t=new _c(r.i,r.x,r.y),n=new _c(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ku(r,e,t,n){const i=new _c(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ur(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _c(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function s_(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Sr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Sr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Ou(e),Fu(n,e);let o=e.length;t.forEach(Ou);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Fu(n,t[l]);const a=Vy.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ou(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Fu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ga extends Tt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new S,v=new ae;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){const g=s+p/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,h.push(v.x,v.y)}u+=d}for(let x=0;x<i;x++){const p=x*(n+1);for(let g=0;g<n;g++){const w=g+p,M=w,y=w+n+1,L=w+n+2,P=w+1;a.push(M,y,P),a.push(y,L,P)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class eh extends Tt{constructor(e=new kf([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ut(i,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const v=d.holes;Sr.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=v.length;p<g;p++){const w=v[p];Sr.isClockWise(w)===!0&&(v[p]=w.reverse())}const x=Sr.triangulateShape(f,v);for(let p=0,g=v.length;p<g;p++){const w=v[p];f=f.concat(w)}for(let p=0,g=f.length;p<g;p++){const w=f[p];i.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let p=0,g=x.length;p<g;p++){const w=x[p],M=w[0]+u,y=w[1]+u,L=w[2]+u;n.push(M,y,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return r_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new eh(n,e.curveSegments)}}function r_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class th extends Tt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new S,d=new S,f=[],v=[],x=[],p=[];for(let g=0;g<=n;g++){const w=[],M=g/n;let y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const P=L/t;u.x=-e*Math.cos(i+P*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+P*s)*Math.sin(o+M*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(P+y,1-M),w.push(c++)}h.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){const M=h[g][w+1],y=h[g][w],L=h[g+1][w],P=h[g+1][w+1];(g!==0||o>0)&&f.push(M,y,P),(g!==n-1||l<Math.PI)&&f.push(y,L,P)}this.setIndex(f),this.setAttribute("position",new ut(v,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nh extends Tt{constructor(e=new Nf(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new ae;let h=new S;const u=[],d=[],f=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function x(){for(let M=0;M<t;M++)p(M);p(s===!1?t:0),w(),g()}function p(M){h=e.getPointAt(M/t,h);const y=o.normals[M],L=o.binormals[M];for(let P=0;P<=i;P++){const C=P/i*Math.PI*2,I=Math.sin(C),E=-Math.cos(C);l.x=E*y.x+I*L.x,l.y=E*y.y+I*L.y,l.z=E*y.z+I*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let y=1;y<=i;y++){const L=(i+1)*(M-1)+(y-1),P=(i+1)*M+(y-1),C=(i+1)*M+y,I=(i+1)*(M-1)+y;v.push(L,P,I),v.push(P,C,I)}}function w(){for(let M=0;M<=t;M++)for(let y=0;y<=i;y++)c.x=M/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new nh(new xc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class o_ extends xt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Hn extends yn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends Hn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class a_ extends yn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function To(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function l_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function c_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function zf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class h_ extends Hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ms,endingEnd:Ms}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ss:s=e,a=2*t-n;break;case na:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ss:o=e,l=2*n-t;break;case na:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(i-t),x=v*v,p=x*v,g=-d*p+2*d*x-d*v,w=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*v+1,M=(-1-f)*p+(1.5+f)*x+.5*v,y=f*p-f*x;for(let L=0;L!==a;++L)s[L]=g*o[h+L]+w*o[c+L]+M*o[l+L]+y*o[u+L];return s}}class Hf extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class u_ extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=To(t,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:To(e.times,Array),values:To(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new u_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new h_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case Pr:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&l_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ya,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let v=0;v!==n;++v){const x=t[u+v];if(x!==t[d+v]||x!==t[f+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Pr;class Vs extends qn{constructor(e,t,n){super(e,t,n)}}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Rr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vf extends qn{}Vf.prototype.ValueTypeName="color";class ks extends qn{}ks.prototype.ValueTypeName="number";class d_ extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)At.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Os extends qn{InterpolantFactoryMethodLinear(e){return new d_(this.times,this.values,this.getValueSize(),e)}}Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends qn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Rr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends qn{}Fs.prototype.ValueTypeName="vector";class la{constructor(e="",t=-1,n=[],i=Bc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(p_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=c_(l);l=Bu(l,1,h),c=Bu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ks(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,v,x){if(f.length!==0){const p=[],g=[];zf(f,p,g,v),p.length!==0&&x.push(new u(d,p,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let x=0;x<d[v].morphTargets.length;x++)f[d[v].morphTargets[x]]=-1;for(const x in f){const p=[],g=[];for(let w=0;w!==d[v].morphTargets.length;++w){const M=d[v];p.push(M.time),g.push(M.morphTarget===x?1:0)}i.push(new ks(".morphTargetInfluence["+x+"]",p,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Fs,f+".position",d,"pos",i),n(Os,f+".quaternion",d,"rot",i),n(Fs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function f_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ks;case"vector":case"vector2":case"vector3":case"vector4":return Fs;case"color":return Vf;case"quaternion":return Os;case"bool":case"boolean":return Vs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function p_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f_(r.type);if(r.times===void 0){const t=[],n=[];zf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ti={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class m_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],v=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const g_=new m_;class Ws{constructor(e){this.manager=e!==void 0?e:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class v_ extends Error{constructor(e,t){super(e),this.response=t}}class Gf extends Ws{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ti.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:i});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ti[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,v=f!==0;let x=0;const p=new ReadableStream({start(g){w();function w(){u.read().then(({done:M,value:y})=>{if(M)g.close();else{x+=y.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:f});for(let P=0,C=h.length;P<C;P++){const I=h[P];I.onProgress&&I.onProgress(L)}g.enqueue(y),w()}},M=>{g.error(M)})}}});return new Response(p)}else throw new v_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(v=>f.decode(v))}}}).then(c=>{Ti.add(e,c);const h=ti[e];delete ti[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ti[e];if(h===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class x_ extends Ws{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ti.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Lr("img");function l(){h(),Ti.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Gi extends Ws{constructor(e){super(e)}load(e,t,n,i){const s=new bt,o=new x_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Xs extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class y_ extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const el=new ke,zu=new S,Hu=new S;class ih{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class __ extends ih{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class M_ extends Xs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new __}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vu=new ke,rr=new S,tl=new S;class S_ extends ih{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),tl.copy(n.position),tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tl),n.updateMatrixWorld(),i.makeTranslation(-rr.x,-rr.y,-rr.z),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu)}}class Ys extends Xs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new S_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class w_ extends ih{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kr extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new w_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wf extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class b_ extends Ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ti.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ti.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ti.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ti.add(e,l),s.manager.itemStart(e)}}class Xf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gu(){return performance.now()}class T_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){At.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;At.multiplyQuaternionsFlat(e,o,e,t,e,n),At.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const sh="\\[\\]\\.:\\/",E_=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",A_="[^"+sh.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",rh),R_=/(WCOD+)?/.source.replace("WCOD",A_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),D_=new RegExp("^"+C_+R_+P_+L_+"$"),I_=["material","materials","bones","map"];class N_{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(E_,"")}static parseTrackName(e){const t=D_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);I_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=N_;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class U_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ms,endingEnd:Ms};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case zp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Bc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Bp;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Oc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ss,i.endingEnd=Ss):(e?i.endingStart=this.zeroSlopeAtStart?Ss:Ms:i.endingStart=na,t?i.endingEnd=this.zeroSlopeAtEnd?Ss:Ms:i.endingEnd=na)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const k_=new Float32Array(1);class oh extends Ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let v=h[f];if(v!==void 0)++v.referenceCount,o[u]=v;else{if(v=o[u],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;v=new T_(at.create(n,f,x),d.ValueTypeName,d.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,f),o[u]=v}a[u].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Hf(new Float32Array(2),new Float32Array(2),1,k_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?la.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Bc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new U_(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?la.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Wu=new ke;class Yf{constructor(e,t,n=0,i=1/0){this.ray=new Fr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,n=[]){return Mc(e,this,n,t),n.sort(Xu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Mc(e[i],this,n,t);return n.sort(Xu),n}}function Xu(r,e){return r.distance-e.distance}function Mc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Mc(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);const m={scene:null,camera:null,renderer:null,composer:null,bloom:null,smaa:null,gtao:null,grade:null,input:null,player:null,enemies:null,fx:null,stones:null,chain:null,world:null,audio:null,runtime:null,prog:null,ui:null,time:0,hitstop:0,kills:0,combo:0,comboTimer:0,aim:new S,slowmo:0,camPunch:0};function O_(r){m.slowmo=Math.max(m.slowmo,r)}function Yu(r){m.camPunch=Math.max(m.camPunch,r)}function An(r){m.hitstop=Math.max(m.hitstop,r)}function qf(r){m.kills+=r,m.combo+=r,m.comboTimer=3}const Eo={title:"audio/music/dark-shrine-loop-qubodup-yd.ogg",combat:"audio/music/unsolved-investigation-isaiah658.ogg"};class F_{constructor(e){_(this,"scene","title");_(this,"flags",{paused:!1,cinematic:!1,dead:!1,combat:!1});_(this,"unlocked",!1);_(this,"hidden",document.hidden);_(this,"disposed",!1);_(this,"epoch",0);_(this,"pending",null);_(this,"requested",null);_(this,"playing",null);_(this,"failures",new Map);_(this,"blocked",new Set);_(this,"calls",0);_(this,"stops",0);_(this,"gestures",0);_(this,"onGesture",e=>{if(!e.isTrusted||this.disposed)return;const t=this.getAudio();t!=null&&t.ctx&&(t.ctx.state==="suspended"&&t.ctx.resume().catch(()=>{}),this.unlocked=!0,this.gestures++,this.blocked.size&&this.blocked.clear(),this.sync())});_(this,"onVisibility",()=>{this.hidden=document.hidden,this.hidden?this.stop():this.sync()});this.getAudio=e,document.addEventListener("pointerdown",this.onGesture,!0),document.addEventListener("keydown",this.onGesture,!0),document.addEventListener("visibilitychange",this.onVisibility)}update(e,t){this.disposed||(this.scene=e,this.flags=t,this.sync())}target(){const e=this.scene==="level"&&this.flags.combat;let t=e?Eo.combat:Eo.title;const n=this.flags.paused?.25:this.flags.cinematic||this.flags.dead?.35:e?.9:this.scene==="title"?.65:.8;if(this.blocked.has(t))if(e&&!this.blocked.has(Eo.title))t=Eo.title;else return null;return{track:t,volume:n,key:t+"@"+n}}sync(){const e=this.getAudio();if(this.disposed||this.hidden||!this.unlocked||!(e!=null&&e.ctx))return;const t=this.target();if(!t||t.key===this.pending||this.pending===null&&t.key===this.requested)return;const n=++this.epoch;this.pending=t.key,this.calls++,e.playMusic(t.track,t.volume,.5).then(i=>{n!==this.epoch||this.disposed||this.hidden||e!==this.getAudio()||(this.pending=null,i?(this.requested=t.key,this.playing={track:t.track,volume:t.volume},this.blocked.delete(t.track)):(this.blocked.add(t.track),this.failures.set(t.track,(this.failures.get(t.track)??0)+1)),this.sync())},()=>{n!==this.epoch||this.disposed||this.hidden||(this.pending=null,this.blocked.add(t.track),this.failures.set(t.track,(this.failures.get(t.track)??0)+1),this.sync())})}stop(){var e;++this.epoch,(e=this.getAudio())==null||e.stopMusic(),this.stops++,this.pending=this.requested=null,this.playing=null}getDiagnostics(){return{scene:this.scene,flags:{...this.flags},unlocked:this.unlocked,hidden:this.hidden,disposed:this.disposed,pending:this.pending,requested:this.requested,playing:this.playing,failures:[...this.failures],blocked:[...this.blocked],playMusicCalls:this.calls,stopMusicCalls:this.stops,gestures:this.gestures}}dispose(){this.disposed||(this.disposed=!0,document.removeEventListener("pointerdown",this.onGesture,!0),document.removeEventListener("keydown",this.onGesture,!0),document.removeEventListener("visibilitychange",this.onVisibility),this.stop())}}const jf=new F_(()=>m.audio),br={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ri{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const B_=new fa(-1,1,1,-1,0,1);class z_ extends Tt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const H_=new z_;class Vr{constructor(e){this._mesh=new Be(H_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,B_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Kf extends Ri{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ln.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qu extends Ri{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class V_ extends Ri{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Kf(br),this.copyPass.material.blending=Ut,this.clock=new Xf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qu!==void 0&&(o instanceof qu?n=!0:o instanceof V_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class W_ extends Ri{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const X_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Bs extends Ri{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(s,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Jt(s,o,{type:un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Jt(s,o,{type:un});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=X_;this.highPassUniforms=ln.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=br;this.copyUniforms=ln.clone(h.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new dt,this.fsQuad=new Vr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ae(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Bs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Bs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Bs.BlurDirectionX=new ae(1,0);Bs.BlurDirectionY=new ae(0,1);const Y_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class q_ extends Ri{constructor(){super();const e=Y_;this.uniforms=ln.clone(e.uniforms),this.material=new o_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ao={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Co={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},nl={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class j_ extends Ri{constructor(e,t){super(),this.edgesRT=new Jt(e,t,{depthBuffer:!1,type:un}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Jt(e,t,{depthBuffer:!1,type:un}),this.weightsRT.texture.name="SMAAPass.weights";const n=this,i=new Image;i.src=this.getAreaTexture(),i.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new bt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=i,this.areaTexture.minFilter=Zt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new bt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Rt,this.searchTexture.minFilter=Rt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=ln.clone(Ao.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new xt({defines:Object.assign({},Ao.defines),uniforms:this.uniformsEdges,vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader}),this.uniformsWeights=ln.clone(Co.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new xt({defines:Object.assign({},Co.defines),uniforms:this.uniformsWeights,vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader}),this.uniformsBlend=ln.clone(nl.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new xt({uniforms:this.uniformsBlend,vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader}),this.fsQuad=new Vr(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const Ro={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ae},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ke},cameraProjectionMatrixInverse:{value:new ke},cameraWorldMatrix:{value:new ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new S(-1,-1,-1)},sceneBoxMax:{value:new S(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Po={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},il={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function K_(r=5){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=Z_(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new S(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const s=new Br(i,e,e);return s.wrapS=sn,s.wrapT=sn,s.needsUpdate=!0,s}function Z_(r){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),s=e-1;for(let o=1;o<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=o++;s++,i--}return n}const Lo={defines:{SAMPLES:16,SAMPLE_VECTORS:Zf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ae},cameraProjectionMatrixInverse:{value:new ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Zf(r,e,t){const n=J_(r,e,t);let i="vec3[SAMPLES](";for(let s=0;s<r;s++){const o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function J_(r,e,t){const n=[];for(let i=0;i<r;i++){const s=2*Math.PI*e*i/r,o=Math.pow(i/(r-1),t);n.push(new S(Math.cos(s),Math.sin(s),o))}return n}class Q_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}noise(e,t){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,v=e-d,x=t-f;let p,g;v>x?(p=1,g=0):(p=0,g=1);const w=v-p+h,M=x-g+h,y=v-1+2*h,L=x-1+2*h,P=l&255,C=c&255,I=this.perm[P+this.perm[C]]%12,E=this.perm[P+p+this.perm[C+g]]%12,b=this.perm[P+1+this.perm[C+1]]%12;let D=.5-v*v-x*x;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[I],v,x));let H=.5-w*w-M*M;H<0?i=0:(H*=H,i=H*H*this.dot(this.grad3[E],w,M));let N=.5-y*y-L*L;return N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[b],y,L)),70*(n+i+s)}noise3d(e,t,n){let i,s,o,a;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,v=(h+u+d)*f,x=h-v,p=u-v,g=d-v,w=e-x,M=t-p,y=n-g;let L,P,C,I,E,b;w>=M?M>=y?(L=1,P=0,C=0,I=1,E=1,b=0):w>=y?(L=1,P=0,C=0,I=1,E=0,b=1):(L=0,P=0,C=1,I=1,E=0,b=1):M<y?(L=0,P=0,C=1,I=0,E=1,b=1):w<y?(L=0,P=1,C=0,I=0,E=1,b=1):(L=0,P=1,C=0,I=1,E=1,b=0);const D=w-L+f,H=M-P+f,N=y-C+f,W=w-I+2*f,Q=M-E+2*f,j=y-b+2*f,K=w-1+3*f,V=M-1+3*f,ee=y-1+3*f,te=h&255,O=u&255,ce=d&255,le=this.perm[te+this.perm[O+this.perm[ce]]]%12,z=this.perm[te+L+this.perm[O+P+this.perm[ce+C]]]%12,q=this.perm[te+I+this.perm[O+E+this.perm[ce+b]]]%12,oe=this.perm[te+1+this.perm[O+1+this.perm[ce+1]]]%12;let Z=.6-w*w-M*M-y*y;Z<0?i=0:(Z*=Z,i=Z*Z*this.dot3(this.grad3[le],w,M,y));let ue=.6-D*D-H*H-N*N;ue<0?s=0:(ue*=ue,s=ue*ue*this.dot3(this.grad3[z],D,H,N));let fe=.6-W*W-Q*Q-j*j;fe<0?o=0:(fe*=fe,o=fe*fe*this.dot3(this.grad3[q],W,Q,j));let Re=.6-K*K-V*V-ee*ee;return Re<0?a=0:(Re*=Re,a=Re*Re*this.dot3(this.grad3[oe],K,V,ee)),32*(i+s+o+a)}noise4d(e,t,n,i){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,v;const x=(e+t+n+i)*l,p=Math.floor(e+x),g=Math.floor(t+x),w=Math.floor(n+x),M=Math.floor(i+x),y=(p+g+w+M)*c,L=p-y,P=g-y,C=w-y,I=M-y,E=e-L,b=t-P,D=n-C,H=i-I,N=E>b?32:0,W=E>D?16:0,Q=b>D?8:0,j=E>H?4:0,K=b>H?2:0,V=D>H?1:0,ee=N+W+Q+j+K+V,te=o[ee][0]>=3?1:0,O=o[ee][1]>=3?1:0,ce=o[ee][2]>=3?1:0,le=o[ee][3]>=3?1:0,z=o[ee][0]>=2?1:0,q=o[ee][1]>=2?1:0,oe=o[ee][2]>=2?1:0,Z=o[ee][3]>=2?1:0,ue=o[ee][0]>=1?1:0,fe=o[ee][1]>=1?1:0,Re=o[ee][2]>=1?1:0,Oe=o[ee][3]>=1?1:0,Ce=E-te+c,Ne=b-O+c,U=D-ce+c,re=H-le+c,xe=E-z+2*c,be=b-q+2*c,Se=D-oe+2*c,et=H-Z+2*c,me=E-ue+3*c,R=b-fe+3*c,T=D-Re+3*c,G=H-Oe+3*c,ne=E-1+4*c,se=b-1+4*c,$=D-1+4*c,Pe=H-1+4*c,ge=p&255,ye=g&255,Ke=w&255,he=M&255,Te=a[ge+a[ye+a[Ke+a[he]]]]%32,Fe=a[ge+te+a[ye+O+a[Ke+ce+a[he+le]]]]%32,ze=a[ge+z+a[ye+q+a[Ke+oe+a[he+Z]]]]%32,Ee=a[ge+ue+a[ye+fe+a[Ke+Re+a[he+Oe]]]]%32,Je=a[ge+1+a[ye+1+a[Ke+1+a[he+1]]]]%32;let Ve=.6-E*E-b*b-D*D-H*H;Ve<0?h=0:(Ve*=Ve,h=Ve*Ve*this.dot4(s[Te],E,b,D,H));let tt=.6-Ce*Ce-Ne*Ne-U*U-re*re;tt<0?u=0:(tt*=tt,u=tt*tt*this.dot4(s[Fe],Ce,Ne,U,re));let k=.6-xe*xe-be*be-Se*Se-et*et;k<0?d=0:(k*=k,d=k*k*this.dot4(s[ze],xe,be,Se,et));let pe=.6-me*me-R*R-T*T-G*G;pe<0?f=0:(pe*=pe,f=pe*pe*this.dot4(s[Ee],me,R,T,G));let J=.6-ne*ne-se*se-$*$-Pe*Pe;return J<0?v=0:(J*=J,v=J*J*this.dot4(s[Je],ne,se,$,Pe)),27*(h+u+d+f+v)}}class Cn extends Ri{constructor(e,t,n,i,s,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=K_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Jt(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xt({defines:Object.assign({},Ro.defines),uniforms:ln.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,blending:Ut,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new a_,this.normalMaterial.blending=Ut,this.pdMaterial=new xt({defines:Object.assign({},Lo.defines),uniforms:ln.clone(Lo.uniforms),vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xt({defines:Object.assign({},Po.defines),uniforms:ln.clone(Po.uniforms),vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,blending:Ut}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xt({uniforms:ln.clone(br.uniforms),vertexShader:br.vertexShader,fragmentShader:br.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Pl,blendDst:dr,blendEquation:Pn,blendSrcAlpha:Rl,blendDstAlpha:dr,blendEquationAlpha:Pn}),this.blendMaterial=new xt({uniforms:ln.clone(il.uniforms),vertexShader:il.vertexShader,fragmentShader:il.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vd,blendSrc:Pl,blendDst:dr,blendEquation:Pn,blendSrcAlpha:Rl,blendDstAlpha:dr,blendEquationAlpha:Pn}),this.fsQuad=new Vr(null),this.originalClearColor=new Ae,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Xc,this.depthTexture.format=Yi,this.depthTexture.type=Xi,this.normalRenderTarget=new Jt(this.width,this.height,{minFilter:Rt,magFilter:Rt,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Zf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Cn.OUTPUT.Off:break;case Cn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){const t=new Q_,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const s=new Br(i,e,e,cn,Gn);return s.wrapS=sn,s.wrapT=sn,s.needsUpdate=!0,s}}Cn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};class $_ extends qc{constructor(){super();const e=new zs;e.deleteAttribute("uv");const t=new Hn({side:Xt}),n=new Hn,i=new Ys(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Be(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Be(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Be(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Be(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Be(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Be(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Be(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Be(e,vs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Be(e,vs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const v=new Be(e,vs(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const x=new Be(e,vs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new Be(e,vs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const g=new Be(e,vs(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function vs(r){const e=new dt;return e.color.setScalar(r),e}const eM=150,tM=new Set(["attack","dash","hook","stake","skill1","skill2"]),ju={gameplay:!0,controls:!0,interact:!0,epoch:0};class nM{constructor(e){_(this,"keys",new Set);_(this,"moveX",0);_(this,"moveY",0);_(this,"mouseX",0);_(this,"mouseY",0);_(this,"usingMouse",!1);_(this,"isTouch",!1);_(this,"cameraYaw",0);_(this,"cameraPitch",0);_(this,"observing",!1);_(this,"pressed",new Map);_(this,"stickX",0);_(this,"stickY",0);_(this,"contextReader",()=>ju);_(this,"lastEpoch",ju.epoch);_(this,"epochSeen",!1);_(this,"readerInstalled",!1);_(this,"rebound",!1);_(this,"frameIndex",-1);addEventListener("keydown",i=>{if(i.repeat)return;this.keys.add(i.code),i.code==="KeyC"&&(this.cameraYaw=this.cameraPitch=0);const s=iM[i.code];s&&this.press(s)}),addEventListener("keyup",i=>this.keys.delete(i.code)),addEventListener("blur",()=>this.clearTransient()),e.addEventListener("contextmenu",i=>i.preventDefault()),e.addEventListener("mousemove",i=>{this.observing||(this.mouseX=i.clientX,this.mouseY=i.clientY,this.usingMouse=!0)}),e.addEventListener("mousedown",i=>{this.isTouch||i.button===1||this.observing||(this.mouseX=i.clientX,this.mouseY=i.clientY,this.usingMouse=!0,i.button===0&&this.press("attack"),i.button===2&&this.press("hook"))});let t=null;e.addEventListener("pointerdown",i=>{t||this.needsLandscape||!(i.button===1||i.pointerType==="touch")||(this.observing=!0,this.usingMouse=!1,t={id:i.pointerId,x:i.clientX,y:i.clientY},e.setPointerCapture(i.pointerId),i.preventDefault())}),e.addEventListener("pointermove",i=>{if(!t||t.id!==i.pointerId||this.needsLandscape)return;const s=this.cameraYaw-(i.clientX-t.x)*.004;this.cameraYaw=Math.atan2(Math.sin(s),Math.cos(s)),this.cameraPitch=Math.max(-.8,Math.min(1.1,this.cameraPitch+(i.clientY-t.y)*.004)),t.x=i.clientX,t.y=i.clientY});const n=i=>{(t==null?void 0:t.id)===i.pointerId&&(t=null,this.observing=!1)};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("lostpointercapture",n),addEventListener("blur",()=>{t=null,this.observing=!1}),addEventListener("visibilitychange",()=>{typeof document<"u"&&document.visibilityState==="hidden"&&this.clearTransient()}),(matchMedia("(pointer: coarse)").matches||new URLSearchParams(location.search).has("touch"))&&this.setupTouch()}get needsLandscape(){return this.isTouch&&innerHeight>innerWidth}setContextReader(e){this.contextReader=e,this.rebound=this.readerInstalled,this.readerInstalled=!0,this.epochSeen=!1}reset(){this.clearTransient()}syncContext(){const e=this.contextReader(),t=e.epoch;this.epochSeen?t!==this.lastEpoch&&(this.lastEpoch=t,this.pressed.clear()):(this.epochSeen=!0,this.rebound&&t!==this.lastEpoch&&this.pressed.clear(),this.rebound=!1,this.lastEpoch=t);for(const n of this.pressed.keys())this.blocked(n,e)&&this.pressed.delete(n);return e}clearTransient(){this.keys.clear(),this.moveX=this.moveY=0,this.stickX=this.stickY=0,this.pressed.clear()}blocked(e,t){return!!(!t.gameplay&&tM.has(e)||e==="pause"&&!t.controls||e==="interact"&&!t.interact)}onGrantFrame(e){return e.frame>=0&&e.frame===this.frameIndex}valid(e,t){const n=this.onGrantFrame(e)?e.grantedAt:e.t;return t-n<=eM}press(e){const t=this.syncContext();if(!this.needsLandscape){if(this.blocked(e,t)){this.pressed.delete(e);return}if(e==="pause"){const n=document.body.classList;if(n.contains("cutscene")||n.contains("dialog")||!!document.getElementById("loading-overlay")){this.pressed.delete("pause");return}}this.pressed.set(e,{t:performance.now(),frame:-1,grantedAt:0})}}consume(e){const t=this.syncContext();return this.blocked(e,t)?(this.pressed.delete(e),!1):this.takeBuffered(e,performance.now())}update(){if(this.syncContext(),this.frameIndex++,this.needsLandscape){this.moveX=this.moveY=this.stickX=this.stickY=0,this.keys.clear(),this.pressed.clear();return}const e=performance.now();for(const[,o]of this.pressed)o.frame<0&&(o.frame=this.frameIndex,o.grantedAt=e);for(const[o,a]of Array.from(this.pressed))this.valid(a,e)||this.pressed.delete(o);let t=this.stickX,n=this.stickY;const i=this.keys;(i.has("KeyA")||i.has("ArrowLeft"))&&(t-=1),(i.has("KeyD")||i.has("ArrowRight"))&&(t+=1),(i.has("KeyW")||i.has("ArrowUp"))&&(n+=1),(i.has("KeyS")||i.has("ArrowDown"))&&(n-=1);const s=Math.hypot(t,n);s>1&&(t/=s,n/=s),this.moveX=t,this.moveY=n}takeBuffered(e,t){const n=this.pressed.get(e);return n===void 0?!1:this.valid(n,t)?(this.pressed.delete(e),!0):(this.pressed.delete(e),!1)}setupTouch(){var l,c;this.isTouch=!0,document.body.classList.add("touch");const e=document.getElementById("stick"),t=document.getElementById("knob");let n=null;matchMedia("(orientation: portrait)").addEventListener("change",()=>{n=null,this.moveX=this.moveY=this.stickX=this.stickY=0,this.keys.clear(),this.pressed.clear(),t.style.transform=""});const i=()=>{n=null,this.stickX=this.stickY=0,t.style.transform=""},s=h=>{const u=e.getBoundingClientRect();let d=h.clientX-(u.left+u.width/2),f=h.clientY-(u.top+u.height/2);const v=Math.max(1,(u.width-t.getBoundingClientRect().width)/2-2),x=Math.hypot(d,f);x>v&&(d=d/x*v,f=f/x*v),t.style.transform=`translate(${d}px, ${f}px)`,this.stickX=d/v,this.stickY=-f/v};e.addEventListener("touchstart",h=>{if(h.preventDefault(),this.needsLandscape||n!==null)return;const u=h.changedTouches[0]||h.touches[0];u&&(n=u.identifier,s(u))},{passive:!1}),addEventListener("touchmove",h=>{if(n===null)return;h.preventDefault();const u=Array.from(h.touches).find(d=>d.identifier===n)||Array.from(h.changedTouches).find(d=>d.identifier===n);u&&s(u)},{passive:!1});const o=h=>{if(n===null)return;const u=Array.from(h.touches).some(f=>f.identifier===n);(Array.from(h.changedTouches).some(f=>f.identifier===n)||!u)&&i()};addEventListener("touchend",o,{passive:!1}),addEventListener("touchcancel",o,{passive:!1});const a=(h,u)=>document.getElementById(h).addEventListener("touchstart",d=>{d.preventDefault(),this.usingMouse=!1,this.press(u)},{passive:!1});a("t-attack","attack"),a("t-dash","dash"),a("t-hook","hook"),a("t-pull","stake"),(l=document.getElementById("t-pause"))==null||l.addEventListener("touchstart",h=>{h.preventDefault(),this.press("pause")},{passive:!1}),(c=document.getElementById("t-talk"))==null||c.addEventListener("touchstart",h=>{h.preventDefault(),this.press("interact")},{passive:!1})}}const iM={KeyJ:"attack",Space:"dash",ShiftLeft:"dash",KeyL:"dash",KeyK:"hook",KeyQ:"hook",KeyE:"stake",Escape:"pause",KeyP:"pause",Digit1:"skill1",Digit2:"skill2",KeyF:"interact"};function sM(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Tt;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let v=0;v<f.count;++v)u.push(f.getX(v)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Ku(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const v=Ku(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function Ku(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const o=new e(s),a=new _t(o,t,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let v=0;v<t;v++){const x=h.getComponent(d,v);a.setComponent(d+u,v,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Zu(r,e){if(e===Hp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===dc||e===af){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===dc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class rM extends Ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new bM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=wr.extractUrlBase(e);o=wr.resolveURL(c,this.path)}else o=wr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Gf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jf){try{o[Ze.KHR_BINARY_GLTF]=new TM(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new FM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new lM;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new EM(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new AM;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new CM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function oM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aM{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Qt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new kr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ys(h),c.distance=u;break;case"spot":c=new M_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class lM{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return dt}extendParams(e,t,n){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,pt))}return Promise.all(i)}}class cM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class hM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(a,a)}return Promise.all(s)}}class uM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class dM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class fM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,pt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class pM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class mM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],Qt),Promise.all(s)}}class gM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class vM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,pt)),Promise.all(s)}}class xM{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class yM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class _M{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class MM{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class SM{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wM{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class bM{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const v of u){const x=new ke,p=new S,g=new At,w=new S(1,1,1),M=new ra(v.geometry,v.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&w.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(p,g,w));for(const y in l)if(y==="_COLOR_0"){const L=l[y];M.instanceColor=new sa(L.array,L.itemSize,L.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&v.geometry.setAttribute(y,l[y]);yt.prototype.copy.call(M,v),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Jf="glTF",or=12,Ju={JSON:1313821514,BIN:5130562};class TM{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,or),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-or,s=new DataView(e,or);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Ju.JSON){const c=new Uint8Array(e,or+o,a);this.content=n.decode(c)}else if(l===Ju.BIN){const c=or+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class EM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Sc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Sc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ps[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const v in f.attributes){const x=f.attributes[v],p=l[v];p!==void 0&&(x.normalized=p)}u(f)},a,c,Qt,d)})})}}class AM{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class CM{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Qf extends Hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,v=e*c,x=v-c,p=-2*f+3*d,g=f-d,w=1-p,M=g-d+u;for(let y=0;y!==a;y++){const L=o[x+y+a],P=o[x+y+l]*h,C=o[v+y+a],I=o[v+y]*h;s[y]=w*L+M*P+p*C+g*I}return s}}const RM=new At;class PM extends Qf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return RM.fromArray(s).normalize().toArray(s),s}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qu={9728:Rt,9729:Zt,9984:Zd,9985:Xo,9986:fr,9987:ci},$u={33071:bi,33648:Ar,10497:sn},sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},LM={CUBICSPLINE:void 0,LINEAR:Pr,STEP:Rr},rl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Hn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),r.DefaultMaterial}function Oi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function IM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function NM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UM(r){let e;const t=r.extensions&&r.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ol(t.attributes):e=r.indices+":"+ol(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ol(r.targets[n]);return e}function ol(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function wc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const OM=new ke;class FM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Gi(this.options.manager):this.textureLoader=new b_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Oi(s,a,i),oi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(wr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=sl[i.type],a=Ps[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new _t(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=sl[i.type],c=Ps[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let x,p;if(f&&f!==u){const g=Math.floor(d/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(w);M||(x=new c(a,g*f,i.count*f/h),M=new bf(x,f/h),t.cache.add(w,M)),p=new Dr(M,l,d%f/h,v)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),p=new _t(x,l,v);if(i.sparse!==void 0){const g=sl.SCALAR,w=Ps[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,L=new w(o[1],M,i.sparse.count*g),P=new c(o[2],y,i.sparse.count*l);a!==null&&(p=new _t(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,I=L.length;C<I;C++){const E=L[C];if(p.setX(E,P[C*l]),l>=2&&p.setY(E,P[C*l+1]),l>=3&&p.setZ(E,P[C*l+2]),l>=4&&p.setW(E,P[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=v}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Qu[d.magFilter]||Zt,h.minFilter=Qu[d.minFilter]||ci,h.wrapS=$u[d.wrapS]||sn,h.wrapT=$u[d.wrapT]||sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==Zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){const p=new bt(x);p.needsUpdate=!0,d(p)}),t.load(wr.resolveURL(u,s.path),v,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),oi(u,o),u.userData.mimeType=o.mimeType||kM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Cf,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Af,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ct);const h=s.alphaMode||rl.OPAQUE;if(h===rl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===rl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==dt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ae(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==dt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==dt){const u=s.emissiveFactor;a.emissive=new Ae().setRGB(u[0],u[1],u[2],Qt)}return s.emissiveTexture!==void 0&&o!==dt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,pt)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),oi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Oi(i,u,s),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ed(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=UM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=ed(new Tt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?DM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,v=h.length;f<v;f++){const x=h[f],p=o[f];let g;const w=c[f];if(p.mode===mn.TRIANGLES||p.mode===mn.TRIANGLE_STRIP||p.mode===mn.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new Ey(x,w):new Be(x,w),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===mn.TRIANGLE_STRIP?g.geometry=Zu(g.geometry,af):p.mode===mn.TRIANGLE_FAN&&(g.geometry=Zu(g.geometry,dc));else if(p.mode===mn.LINES)g=new Ry(x,w);else if(p.mode===mn.LINE_STRIP)g=new Kc(x,w);else if(p.mode===mn.LINE_LOOP)g=new Py(x,w);else if(p.mode===mn.POINTS)g=new Rf(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&NM(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),oi(g,s),p.extensions&&Oi(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,v=u.length;f<v;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Oi(i,u[0],s),u[0];const d=new Nn;s.extensions&&Oi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,v=u.length;f<v;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(it.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],v=i.samplers[f.sampler],x=f.target,p=x.node,g=i.parameters!==void 0?i.parameters[v.input]:v.input,w=i.parameters!==void 0?i.parameters[v.output]:v.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",w)),c.push(v),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],v=u[2],x=u[3],p=u[4],g=[];for(let w=0,M=d.length;w<M;w++){const y=d[w],L=f[w],P=v[w],C=x[w],I=p[w];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const E=n._createAnimationTracks(y,L,P,C,I);if(E)for(let b=0;b<E.length;b++)g.push(E[b])}return new la(s,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,OM)});for(let f=0,v=u.length;f<v;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Ef:c.length>1?h=new Nn:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),oi(h,s),s.extensions&&Oi(n,h,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Nn;n.name&&(s.name=i.createUniqueName(n.name)),oi(s,n),n.extensions&&Oi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof yn||d instanceof bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Si[s.path]===Si.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Si[s.path]){case Si.weights:c=ks;break;case Si.rotation:c=Os;break;case Si.position:case Si.scale:c=Fs;break;default:switch(n.itemSize){case 1:c=ks;break;case 2:case 3:default:c=Fs;break}break}const h=i.interpolation!==void 0?LM[i.interpolation]:Pr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new c(l[d]+"."+Si[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Os?PM:Qf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function BM(r,e,t){const n=e.attributes,i=new Mt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),a.normalized){const h=wc(Ps[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new S,l=new S;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const x=wc(Ps[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Wn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function ed(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Sc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),oi(r,e),BM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?IM(r,e.targets,t):r})}function ah(r){const e=new Map,t=new Map,n=r.clone();return $f(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function $f(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)$f(r.children[n],e.children[n],t)}const ep=new rM,zM=new Gi;function HM(r,e){r.traverse(t=>{const n=t;n.isMesh&&(n.castShadow=e,n.receiveShadow=!0)})}function tp(r,e){return HM(r.scene,e),{scene:r.scene,clips:r.animations}}async function VM(r,e=!0){const t=await ep.loadAsync(r);return tp(t,e)}async function ft(r,e=!0){let t;try{const n=await fetch(r,{method:"GET"}),i=n.headers.get("content-type")??"";if(!n.ok||i.includes("text/html"))return console.warn(`[assets] 模型缺失：${r}（请检查 tools/copy-assets.mjs 的 PROPS 表）`),null;t=await n.arrayBuffer()}catch{return console.warn(`[assets] 模型缺失：${r}（请检查 tools/copy-assets.mjs 的 PROPS 表）`),null}try{const n=await ep.parseAsync(t,new URL(".",new URL(r,location.href)).href);return tp(n,e)}catch(n){throw console.warn(`[assets] 模型解析失败：${r}`),n}}function Qo(r){return ah(r.scene)}function np(r,...e){for(const t of e){const n=r.find(i=>i.name.toLowerCase()===t.toLowerCase());if(n)return n}for(const t of e){const n=r.find(i=>i.name.toLowerCase().includes(t.toLowerCase()));if(n)return n}}function Tn(r,e,t=!0){const n=e();return zM.load(r,i=>{n.image=t?GM(i.image):i.image,n.needsUpdate=!0},void 0,()=>{}),n}function GM(r,e=1024){const t=Math.min(1,e/Math.max(r.width,r.height)),n=document.createElement("canvas");n.width=Math.round(r.width*t),n.height=Math.round(r.height*t);const i=n.getContext("2d");i.drawImage(r,0,0,n.width,n.height);const s=i.getImageData(0,0,n.width,n.height),o=s.data;for(let a=0;a<o.length;a+=4){const l=Math.max(o[a],o[a+1],o[a+2]);o[a]=o[a+1]=o[a+2]=l}return i.putImageData(s,0,0),n}function ip(r,e,t=.9,n=2.6){const i=new Ae(e);r.onBeforeCompile=s=>{s.uniforms.uRimColor={value:i},s.uniforms.uRimStrength={value:t},s.uniforms.uRimPower={value:n},s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRimColor;
uniform float uRimStrength;
uniform float uRimPower;`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        float rimGeometryFacing = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // 使用几何法线而不是纹理扰动法线，避免法线贴图把整块衣服染成白色。
          totalEmissiveRadiance += uRimColor * pow(rimGeometryFacing, uRimPower) * uRimStrength;
        }`)},r.needsUpdate=!0}function Kt(r=128){const e=document.createElement("canvas");e.width=e.height=r;const t=e.getContext("2d"),n=t.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);n.addColorStop(0,"#ffffff"),n.addColorStop(.25,"#bbbbbb"),n.addColorStop(.6,"#303030"),n.addColorStop(1,"#000000"),t.fillStyle=n,t.fillRect(0,0,r,r);const i=new Zc(e);return i.colorSpace=pt,i}let al=null;function sp(){if(al)return al;const r=WM();return new Gi().load("/wumingbu/assets/vfx/chain-strip.png",e=>{r.image=e.image,r.needsUpdate=!0}),al=r,r}function WM(){const r=document.createElement("canvas");r.width=256,r.height=64;const e=r.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,64),e.shadowColor="#fff",e.shadowBlur=10,e.strokeStyle="#fff",e.lineWidth=7;for(const i of[8,136])e.beginPath(),e.ellipse(i+56,32,50,17,0,0,Math.PI*2),e.stroke();e.lineWidth=9;for(const i of[0,128,256])e.beginPath(),e.moveTo(i-30,32),e.lineTo(i+30,32),e.stroke();const t=e.createLinearGradient(0,0,0,64);t.addColorStop(0,"rgba(0,0,0,0)"),t.addColorStop(.5,"rgba(120,120,120,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.globalCompositeOperation="lighter",e.shadowBlur=0,e.fillStyle=t,e.fillRect(0,0,256,64);const n=new Zc(r);return n.wrapS=sn,n.colorSpace=pt,n.anisotropy=4,n}class Ts{constructor(e,t=.55,n=512,i=sp()){_(this,"mesh");_(this,"geo",new Tt);_(this,"cap");_(this,"pos");_(this,"uv");_(this,"col");_(this,"mat");this.width=t,this.cap=n,this.pos=new Float32Array(n*2*3),this.uv=new Float32Array(n*2*2),this.col=new Float32Array(n*2*3);const s=[];for(let o=0;o<n-1;o++){const a=o*2;s.push(a,a+1,a+2,a+1,a+3,a+2)}this.geo.setIndex(s),this.geo.setAttribute("position",new _t(this.pos,3).setUsage(zn)),this.geo.setAttribute("uv",new _t(this.uv,2).setUsage(zn)),this.geo.setAttribute("color",new _t(this.col,3).setUsage(zn)),this.mat=new dt({map:i,color:e,vertexColors:!0,blending:Gt,transparent:!0,depthWrite:!1,side:Ct}),this.mesh=new Be(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=8}set(e,t=()=>1,n=!1){const i=Math.min(e.length+(n?1:0),this.cap);if(i<2){this.geo.setDrawRange(0,0);return}let s=0;const o=this.width/2;for(let a=0;a<i;a++){const l=e[a%e.length],c=e[Math.max(0,a-1)%e.length],h=e[Math.min(i-1,a+1)%e.length];a>0&&(s+=l.distanceTo(c));let u=h.x-c.x,d=h.z-c.z;const f=Math.hypot(u,d)||1;u/=f,d/=f;const v=a*6;this.pos[v]=l.x-d*o,this.pos[v+1]=l.y,this.pos[v+2]=l.z+u*o,this.pos[v+3]=l.x+d*o,this.pos[v+4]=l.y,this.pos[v+5]=l.z-u*o;const x=s/(this.width*4.8);this.uv.set([x,0,x,1],a*4);const p=t(a,i);this.col.set([p,p,p,p,p,p],v)}this.geo.setDrawRange(0,(i-1)*6);for(const a of["position","uv","color"])this.geo.getAttribute(a).needsUpdate=!0}clear(){this.geo.setDrawRange(0,0)}}function bc(r,e,t,n=!1){const i=r.onBeforeCompile,s=r.customProgramCacheKey(),o={value:1};n&&(r.userData.shorelineStrength=o),r.customProgramCacheKey=()=>s+(n?"|valley-depth-shore-v3":"|valley-depth-v1"),r.onBeforeCompile=function(a,l){i.call(this,a,l),a.uniforms.uValleyColor={value:new Ae(e)},a.uniforms.uValleyBase={value:t+8},n&&(a.uniforms.uValleyRiver={value:t},a.uniforms.uValleyShoreStrength=o),a.vertexShader=`varying vec3 vValleyWorld;
`+a.vertexShader,a.vertexShader=a.vertexShader.replace("#include <worldpos_vertex>",`
      #include <worldpos_vertex>
      vec4 valleyPosition = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        valleyPosition = instanceMatrix * valleyPosition;
      #endif
      vValleyWorld = (modelMatrix * valleyPosition).xyz;
    `),a.fragmentShader=`uniform vec3 uValleyColor; uniform float uValleyBase; varying vec3 vValleyWorld;
`+(n?`uniform float uValleyRiver; uniform float uValleyShoreStrength;
`:"")+a.fragmentShader,a.fragmentShader=a.fragmentShader.replace("#include <opaque_fragment>",`
      vec3 valleyRay = vValleyWorld - cameraPosition;
      float valleyLength = length(valleyRay);
      float valleyColumn = 0.0;
      for (int valleySample = 0; valleySample < 4; valleySample++) {
        float valleyY = cameraPosition.y + valleyRay.y * (float(valleySample) + 0.5) * 0.25;
        valleyColumn += exp(-max(valleyY - uValleyBase, 0.0) * 0.038) * 0.25;
      }
      float valleyDepth = 1.0 - exp(-max(valleyLength - 38.0, 0.0) * 0.0048 * valleyColumn);
      outgoingLight = mix(outgoingLight, uValleyColor, valleyDepth * 0.78);
      ${n?`
      // 岸脚高度带在真实生成网格上柔化入水接触线，不加全屏白雾片，也不消除山体轮廓。
      float shoreNoise = 0.5 + 0.5 * sin(vValleyWorld.x * 0.16 + sin(vValleyWorld.z * 0.13) * 2.4);
      float shoreHeight = abs(vValleyWorld.y - uValleyRiver - 1.2);
      float shoreVeil = exp(-shoreHeight * 0.18) * (0.38 + shoreNoise * 0.20)
        * smoothstep(18.0, 55.0, valleyLength);
      outgoingLight = mix(outgoingLight, uValleyColor * vec3(0.78, 1.08, 1.12), shoreVeil * uValleyShoreStrength);
      `:""}
      #include <opaque_fragment>
    `),n&&(r.userData.shorelineVeilCompiled=a.fragmentShader.includes("float shoreVeil"))},r.userData.valleyDepth=!0,r.userData.shorelineVeil=n}function XM(r,e){const t=r.onBeforeCompile,n=r.customProgramCacheKey(),i={value:1};r.userData.bridgeRiverBounce=i;const s=/^generated-bridge-deck-projection-v\d+$/.test(n);r.customProgramCacheKey=()=>s?n:n+"|bridge-river-bounce-v2",r.onBeforeCompile=function(o,a){t.call(this,o,a),o.uniforms.uBridgeBounceStrength=i,o.uniforms.uBridgeDeckHeight={value:e},o.vertexShader=`varying float vBridgeBounceY; varying float vBridgeBounceNormalY; varying vec3 vBridgeBounceWorld;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      vBridgeBounceY = (modelMatrix * vec4(transformed, 1.0)).y;
      vBridgeBounceNormalY = inverseTransformDirection(normalize(normalMatrix * normal), viewMatrix).y;
      vBridgeBounceWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
    `),o.fragmentShader=`varying float vBridgeBounceY; varying float vBridgeBounceNormalY; varying vec3 vBridgeBounceWorld; uniform float uBridgeBounceStrength; uniform float uBridgeDeckHeight;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`
      #include <emissivemap_fragment>
      // 只补桥腹朝下的暗面；桥面、灯具和正面雕花不被整体刷青/升曝光。
      float bridgeBelowDeck = 1.0 - smoothstep(uBridgeDeckHeight - 0.2, uBridgeDeckHeight + 0.2, vBridgeBounceY);
      float bridgeFacesRiver = 0.12 + 0.88 * (1.0 - smoothstep(-0.52, 0.28, vBridgeBounceNormalY));
      // 用水面反射的低频条带给桥腹结构分层；不是整块刷成同一片青色。
      // 叠一层与桥身纵向构件同向的明暗节奏，把原模型背面薄片从“整块黑”拉回
      // 石材结构读法；只作用于桥腹，不改变桥面、栏柱和门楼的曝光。
      float riverBandA = 0.5 + 0.5 * sin(vBridgeBounceWorld.x * 0.17 + vBridgeBounceWorld.z * 0.043);
      float riverBandB = 0.5 + 0.5 * sin(vBridgeBounceWorld.x * -0.071 + vBridgeBounceWorld.z * 0.13 + 1.7);
      float undersideRibs = 0.5 + 0.5 * sin(vBridgeBounceWorld.z * 0.47 + sin(vBridgeBounceWorld.x * 0.19) * 1.3);
      float undersideLayer = mix(0.70, 1.0, smoothstep(0.25, 0.78, undersideRibs));
      float riverReflection = mix(0.62, 1.0, (riverBandA * 0.56 + riverBandB * 0.34 + undersideRibs * 0.10));
      float waterLift = 0.72 + 0.28 * (1.0 - smoothstep(-10.0, -0.8, vBridgeBounceY));
      float undersideMask = bridgeBelowDeck * bridgeFacesRiver * waterLift * uBridgeBounceStrength;
      totalEmissiveRadiance += diffuseColor.rgb * vec3(0.38, 0.54, 0.58)
        * undersideMask * riverReflection * undersideLayer;
      // 独立的冷色环境填光只留在朝河面暗面，避免材质底色过黑时完全丢失桥腹轮廓。
      totalEmissiveRadiance += vec3(0.004, 0.009, 0.011)
        * undersideMask * (0.74 + 0.26 * undersideLayer) * riverReflection;
    `),o.fragmentShader=o.fragmentShader.replace("#include <opaque_fragment>",`
      float bridgeUnderAmbient = bridgeBelowDeck * mix(0.54, 1.0, bridgeFacesRiver)
        * waterLift * uBridgeBounceStrength;
      // 填光随真实石材底色变化；旧两层常量青光会冲掉雕花/砖缝，像整块蓝塑料。
      vec3 bridgeStoneFill = mix(diffuseColor.rgb, sqrt(max(diffuseColor.rgb, vec3(0.0))), 0.40);
      outgoingLight += bridgeStoneFill * vec3(0.28, 0.36, 0.40) * bridgeUnderAmbient
        * (0.76 + 0.24 * undersideLayer) * riverReflection;
      #include <opaque_fragment>
    `)}}const td={near:6,mid:20};function YM(r,e){const t=r.map(()=>2),n=r.map((o,a)=>({id:a,size:Number.isFinite(o)?Math.max(0,o):0}));n.sort((o,a)=>a.size*(e[a.id]===0?1.06:1)-o.size*(e[o.id]===0?1.06:1)||o.id-a.id);let i=0,s=0;for(const{id:o,size:a}of n)a>=(e[o]===0?48:60)&&i<td.near?(t[o]=0,i++):a>=(e[o]===1?16:20)&&s<td.mid&&(t[o]=1,s++);return t}function qM(r,e,t,n,i,s,o,a=[]){const l=[],c=new Set,h=new Set,u=new Set,d={value:0},f=[],v=N=>{r.add(N),l.push(N),c.add(N.geometry),(Array.isArray(N.material)?N.material:[N.material]).forEach(W=>h.add(W))},x=new Gi().load("/wumingbu/"+e);x.colorSpace=pt,x.wrapS=sn,u.add(x);const p=new dt({map:x,side:Xt,fog:!1,depthWrite:!1});p.customProgramCacheKey=()=>"bridge-sky-horizon-v3",p.onBeforeCompile=N=>{N.uniforms.uSkyFog={value:new Ae(s)},N.vertexShader=`varying vec3 vSkyWorld;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSkyWorld = (modelMatrix * vec4(transformed,1.0)).xyz;`),N.fragmentShader=`uniform vec3 uSkyFog; varying vec3 vSkyWorld;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <map_fragment>",`
      vec2 skyUv = vec2(vMapUv.x, clamp((vMapUv.y - 0.25) * 1.8, 0.0, 1.0));
      vec4 skyColor = texture2D(map, skyUv);
      vec3 seamColor = (texture2D(map, vec2(0.025, skyUv.y)).rgb + texture2D(map, vec2(0.975, skyUv.y)).rgb) * 0.5;
      float edge = smoothstep(0.0, 0.07, min(skyUv.x, 1.0 - skyUv.x));
      skyColor.rgb = mix(seamColor, skyColor.rgb, edge);
      float elevation = normalize(vSkyWorld - cameraPosition).y;
      float horizon = smoothstep(0.015, 0.20, elevation);
      diffuseColor.rgb *= mix(uSkyFog, skyColor.rgb * 0.72, horizon);
    `)};const g=new Be(new th(560,48,32),p);if(g.name="world-panorama",g.position.z=35,g.rotation.y=-Math.PI*.1,g.renderOrder=-20,v(g),t){const N=a.map(V=>{const ee=[];return V==null||V.scene.updateMatrixWorld(!0),V==null||V.scene.traverse(te=>{te.isMesh&&ee.push(te)}),ee});let W=0;t.scene.updateMatrixWorld(!0);const Q=new Mt().setFromObject(t.scene),j=Q.getSize(new S).y,K=Array.from({length:88},(V,ee)=>{const te=ee%2?-1:1,O=o(),ce=O<.24?-26+o()*34:O<.72?8+o()*78:86+o()*84,le=O<.24?4+o()*20:O<.72?10+o()*35:20+o()*58;return new S(te*(n.width/2+le),i+.2,ce)});t.scene.traverse(V=>{const ee=V;if(!ee.isMesh)return;const te=ee.geometry.clone().applyMatrix4(ee.matrixWorld);te.translate(0,-Q.min.y,0);const O=[te];if(N.length===2&&N.every(re=>re[W]))for(const re of N){const xe=re[W],be=xe.geometry.clone().applyMatrix4(xe.matrixWorld);be.translate(0,-Q.min.y,0),O.push(be)}W++;const ce=Array.isArray(ee.material)?ee.material[0]:ee.material,le=new Hn({map:ce.map,normalMap:ce.normalMap,color:11719885,emissive:5217690,emissiveIntensity:.98,roughness:.96,metalness:0,envMapIntensity:.1,transparent:!0,opacity:.78,depthWrite:!1,fog:!0,vertexColors:!0});le.normalScale.setScalar(.22),le.customProgramCacheKey=()=>"river-soul-volume-v4",le.onBeforeCompile=re=>{re.uniforms.uGhostTime=d,re.uniforms.uGhostHeight={value:Math.max(j,.01)},re.vertexShader=`uniform float uGhostTime; uniform float uGhostHeight; varying float vSoulHeight;
`+re.vertexShader,re.vertexShader=re.vertexShader.replace("#include <begin_vertex>",`
          #include <begin_vertex>
          float ghostPhase = instanceMatrix[3].x * 0.07 + instanceMatrix[3].z * 0.013;
          float soulY = clamp(position.y / uGhostHeight, 0.0, 1.0);
          vSoulHeight = soulY;
          float tailSway = (1.0 - soulY) * (1.0 - soulY);
          transformed.x += sin(uGhostTime * 0.62 + ghostPhase + soulY * 2.5) * uGhostHeight * 0.022 * tailSway;
          transformed.z += cos(uGhostTime * 0.44 + ghostPhase + soulY * 2.0) * uGhostHeight * 0.014 * tailSway;
        `),re.fragmentShader=`uniform float uGhostTime; varying float vSoulHeight;
`+re.fragmentShader,re.fragmentShader=re.fragmentShader.replace("#include <map_fragment>",`
          #include <map_fragment>
          float soulDetail = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
          // 保留 instanceColor 的前中后景分层，不把所有魂压成同一块青色。
          diffuseColor.rgb *= vec3(0.56, 0.84, 0.80) * (0.65 + soulDetail * 0.55);
        `),re.fragmentShader=re.fragmentShader.replace("#include <opaque_fragment>",`
          float soulRim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.4);
          float soulBody = smoothstep(0.0, 0.26, vSoulHeight);
          float soulBreath = 0.92 + 0.08 * sin(uGhostTime * 0.73 + vSoulHeight * 3.0);
          diffuseColor.a *= soulBody * (0.55 + soulRim * 0.45) * soulBreath;
          outgoingLight += vec3(0.035, 0.11, 0.105) * soulRim * soulBody;
          #include <opaque_fragment>
        `)},bc(le,s,i);const z=O.map((re,xe)=>{const be=new ra(re,le,K.length);return be.name=xe===0?"world-river-souls":"world-river-souls-"+(xe===1?"mid":"far"),be.count=xe===0?K.length:0,be.frustumCulled=!1,be.renderOrder=2-xe,be.instanceMatrix.setUsage(zn),be.instanceColor=new sa(new Float32Array(K.length*3),3),be.instanceColor.setUsage(zn),be.userData.generatedAsset=!0,be.userData.soulLodTier=xe,be.userData.soulIds=[],be.userData.soulLodReady=O.length===3,be.userData.source=xe===0?"runtime-20260930/river-ghost-volume-20261002-v1.glb":"runtime-20261008/river-ghost-"+(xe===1?"mid-900":"far-180")+"-r1.glb",v(be),be}),q=z[0],oe=new ke,Z=new At,ue=K.map(re=>re.clone()),fe=K.map(()=>o()*Math.PI*2),Re=K.map((re,xe)=>Math.PI+Math.sin(xe*1.7)*.45),Oe=K.map(re=>.78+(1-it.smoothstep(re.z,-26,104))*.52),Ce=K.map((re,xe)=>{const be=1-it.smoothstep(re.z,-26,104),Se=it.smoothstep(re.z,72,166);return(3.05+be*1.42+xe%4*.2-Se*.34)/Math.max(j,.01)}),Ne=new Float32Array(K.length*3),U=new Ae;K.forEach((re,xe)=>{Z.setFromAxisAngle(new S(0,1,0),Re[xe]),oe.compose(re,Z,new S(Ce[xe],Ce[xe],Ce[xe])),q.setMatrixAt(xe,oe);const be=1-it.smoothstep(re.z,-26,104),Se=it.smoothstep(re.z,72,166);U.setRGB(it.lerp(.7,1,be)*(1-Se*.2),it.lerp(.82,1,be)*(1-Se*.16),it.lerp(.78,.98,be)*(1-Se*.12)),U.toArray(Ne,xe*3)}),q.instanceColor.array.set(Ne),q.instanceColor.needsUpdate=!0,f.push({meshes:z,base:ue,phase:fe,angle:Re,scale:Ce,drift:Oe,colors:Ne,levels:K.map(()=>0),order:K.map((re,xe)=>xe),slots:z.map(()=>0),height:j,lastSort:-1/0})})}const w=new dt({color:10479342,transparent:!0,opacity:.34,depthWrite:!1,side:Ct});w.onBeforeCompile=N=>{N.uniforms.uFallTime=d,N.vertexShader=`varying vec2 vFallUv;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFallUv = uv;`),N.fragmentShader=`uniform float uFallTime; varying vec2 vFallUv;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      float edge = sin(vFallUv.x * 3.14159);
      float streak = pow(0.5 + 0.5 * sin(vFallUv.x * 81.0 + sin(vFallUv.y * 17.0 - uFallTime * 2.0)), 3.0);
      float fade = smoothstep(0.0,0.12,vFallUv.y) * (1.0-smoothstep(0.9,1.0,vFallUv.y));
      diffuseColor.a *= edge * fade * (0.2 + streak * 0.8);
    `)};for(const[N,W,Q,j]of[[-45,63,19,2],[-91,157,35,2],[56,120,26,2],[106,200,44,3],[-149,249,48,3]]){const K=new Be(new nn(j,Q),w);K.position.set(N,i+Q/2,W),K.name="world-cliff-waterfall",v(K)}const M=new ke,y=new At,L=new S,P=new S,C=new S(0,1,0),I=new S,E=Array.from({length:88},()=>new ke),b=Array.from({length:88},()=>new S),D=new Float64Array(88),H=new Float64Array(88);return{update(N,W,Q=720){d.value=N;const j=M,K=y,V=L,ee=P;for(const te of f){te.base.forEach((z,q)=>{const oe=te.phase[q],Z=te.drift[q];V.set(z.x+Math.sin(N*.21*Z+oe)*(1.55*Z),z.y+.44+Math.sin(N*.68*Z+oe)*(.82*Z),z.z+Math.cos(N*.17*Z+oe*1.17)*(2.05*Z)),K.setFromAxisAngle(C,te.angle[q]+Math.sin(N*.22+oe)*.22);const ue=1+Math.sin(N*.72+oe*1.3)*.055;ee.setScalar(te.scale[q]*ue),j.compose(V,K,ee),E[q].copy(j),b[q].copy(V)});const O=performance.now()*.001;let ce=!1;if(W&&te.meshes.length===3&&O-te.lastSort>=.2){W.updateMatrixWorld();for(let z=0;z<te.base.length;z++){I.copy(b[z]).applyMatrix4(W.matrixWorldInverse);const q=-I.z;D[z]=q;const oe=te.height*te.scale[z],Z=q>.1&&Math.abs(I.x*W.projectionMatrix.elements[0]/q)<1.25&&Math.abs(I.y*W.projectionMatrix.elements[5]/q)<1.3;H[z]=Z?oe*Q*W.projectionMatrix.elements[5]/(2*q):0}te.levels=YM(Array.from(H),te.levels),te.order.sort((z,q)=>D[q]-D[z]||z-q),te.lastSort=O,ce=!0}const le=te.slots;le.fill(0);for(const z of te.order){const q=te.meshes.length===3?te.levels[z]:0,oe=te.meshes[q],Z=le[q]++;oe.setMatrixAt(Z,E[z]),ce&&oe.instanceColor.array.set(te.colors.subarray(z*3,z*3+3),Z*3),oe.userData.soulIds[Z]=z}te.meshes.forEach((z,q)=>{z.count=le[q],z.userData.soulIds.length=le[q],z.instanceMatrix.needsUpdate=!0,ce&&(z.instanceColor.needsUpdate=!0)})}},dispose(){l.forEach(N=>r.remove(N)),c.forEach(N=>N.dispose()),h.forEach(N=>N.dispose()),u.forEach(N=>N.dispose())}}}function jM(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function KM(r,e,t,n){const i=new dt({alphaMap:r,color:9152430,transparent:!0,opacity:n,depthWrite:!1,side:Ct,fog:!1});return i.onBeforeCompile=s=>{s.uniforms.uValleyTime=e,s.uniforms.uValleySeed={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vValleyUv; varying vec3 vMistNormal; varying vec3 vMistWorld;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vValleyUv = uv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMistNormal = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0)); vMistWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vValleyUv;
        varying vec3 vMistNormal; varying vec3 vMistWorld;
        uniform float uValleyTime;
        uniform float uValleySeed;
        float valleyHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float valleyNoise(vec2 p) {
          vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(valleyHash(i), valleyHash(i + vec2(1,0)), f.x),
            mix(valleyHash(i + vec2(0,1)), valleyHash(i + vec2(1,1)), f.x), f.y);
        }
        float valleyFbm(vec2 p) {
          return valleyNoise(p) * 0.57 + valleyNoise(p * 2.03 + 17.9) * 0.28
            + valleyNoise(p * 4.11 + 35.2) * 0.15;
        }`).replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
        // 径向蒙版之外再软化几何矩形边界，低角度不再看到截平的雾层上沿。
        vec2 fogEdge = smoothstep(vec2(0.0), vec2(0.16, 0.23), vValleyUv)
          * (1.0 - smoothstep(vec2(0.84, 0.77), vec2(1.0), vValleyUv));
        diffuseColor.a *= fogEdge.x * fogEdge.y;
        // 贴片从下方/侧面掠过会压成硬白线；斜掠时退隐，正视仍保留全部云雾。
        float fogGrazing = abs(dot(normalize(vMistNormal), normalize(cameraPosition - vMistWorld)));
        diffuseColor.a *= smoothstep(0.04, 0.20, fogGrazing);
        vec2 fogUv = vValleyUv * vec2(5.0, 3.0) + uValleySeed;
        vec2 fogDrift = vec2(uValleyTime * 0.018, -uValleyTime * 0.007);
        float fogWarp = valleyFbm(fogUv * 0.71 - fogDrift * 0.6);
        float fogDensity = valleyFbm(fogUv + fogDrift + fogWarp * 1.6);
        diffuseColor.a *= smoothstep(0.16, 0.64, fogDensity) * 1.9;`),i.userData.mistGrazingCompiled=s.fragmentShader.includes("float fogGrazing")},i.customProgramCacheKey=()=>"valley-mist-soft-noise-grazing-v3",i}const rp=new st(-360,-220,720,760),Bn=512;function ZM(){const r=new Br(new Uint8Array(Bn*Bn),Bn,Bn,ua);return r.name="generated-bank-water-contact",r.minFilter=r.magFilter=Zt,r.generateMipmaps=!1,r.needsUpdate=!0,r}function JM(r,e,t){const n=e.image.data;n.fill(0);const i=rp,s=i.z/Bn,o=i.w/Bn,a=new S,l=new S,c=new S,h=new S,u=new S;let d=0,f=0,v=0;const x=(p,g)=>{const M=Math.max(0,Math.floor((Math.min(p.x,g.x)-9-i.x)/s)),y=Math.min(Bn-1,Math.ceil((Math.max(p.x,g.x)+9-i.x)/s)),L=Math.max(0,Math.floor((Math.min(p.z,g.z)-9-i.y)/o)),P=Math.min(Bn-1,Math.ceil((Math.max(p.z,g.z)+9-i.y)/o)),C=g.x-p.x,I=g.z-p.z,E=C*C+I*I;for(let b=L;b<=P;b++)for(let D=M;D<=y;D++){const H=i.x+(D+.5)*s,N=i.y+(b+.5)*o,W=E>1e-8?it.clamp(((H-p.x)*C+(N-p.z)*I)/E,0,1):0,Q=H-p.x-C*W,j=N-p.z-I*W,K=Math.round(Math.exp(-(Q*Q+j*j)/24)*255),V=b*Bn+D;n[V]=Math.max(n[V],K)}};for(const p of r){if(!p.userData.environment)continue;p.updateMatrixWorld(!0);const g=d;p.traverse(w=>{const M=w;if(!M.isMesh)return;const y=M.geometry.getAttribute("position"),L=M.geometry.index,P=(L==null?void 0:L.count)??y.count;for(let C=0;C+2<P;C+=3){if(a.fromBufferAttribute(y,L?L.getX(C):C).applyMatrix4(M.matrixWorld),l.fromBufferAttribute(y,L?L.getX(C+1):C+1).applyMatrix4(M.matrixWorld),c.fromBufferAttribute(y,L?L.getX(C+2):C+2).applyMatrix4(M.matrixWorld),f++,Math.min(a.y,l.y,c.y)>t||Math.max(a.y,l.y,c.y)<t)continue;let I=0;const E=(b,D)=>{const H=D.y-b.y;if(Math.abs(H)<1e-8)return;const N=(t-b.y)/H;if(N<0||N>1||I>=2)return;const W=I===0?h:u;W.copy(b).lerp(D,N),!(I===1&&W.distanceToSquared(h)<1e-8)&&I++};E(a,l),E(l,c),E(c,a),I===2&&(x(h,u),d++)}}),d>g&&v++}return e.needsUpdate=!0,e.userData.contactBake={triangles:f,segments:d,contributors:v,resolution:Bn,riverY:t,nonzero:n.reduce((p,g)=>p+(g>0?1:0),0)},e.userData.contactBake}function QM(r,e,t,n){const i=new Map,s=new Uint32Array(r.count);for(let a=0;a<r.count;a++){const l=[r.getX(a),r.getY(a),r.getZ(a)].map(h=>Math.round(h*1e6)).join(",");let c=i.get(l);c===void 0&&(c=i.size,i.set(l,c)),s[a]=c}let o=0;for(let a=0;a<12;a++){const l=Uint32Array.from({length:i.size},(x,p)=>p),c=x=>{for(;l[x]!==x;)l[x]=l[l[x]],x=l[x];return x},h=(x,p)=>{x=c(x),p=c(p),x!==p&&(l[x]=p)};for(let x=0;x<n.length;x++){if(n[x])continue;const p=s[e.getX(x*3)];h(p,s[e.getX(x*3+1)]),h(p,s[e.getX(x*3+2)])}const u=new Map;for(let x=0;x<n.length;x++){if(n[x])continue;const p=c(s[e.getX(x*3)]);let g=u.get(p);g||(g={faces:0,minY:1/0,minZ:1/0,maxZ:-1/0,x:0},u.set(p,g)),g.faces++;for(let w=0;w<3;w++){const M=t[e.getX(x*3+w)];g.minY=Math.min(g.minY,M.y),g.minZ=Math.min(g.minZ,M.z),g.maxZ=Math.max(g.maxZ,M.z),g.x+=M.x}}const d=[...u.values()].sort((x,p)=>p.faces-x.faces)[0],f=[...u.values()].filter(x=>x!==d&&x.minY>.35);if(!f.length)break;let v=0;for(let x=0;x<n.length;x++){if(!n[x])continue;const p=[0,1,2].map(g=>t[e.getX(x*3+g)]);f.some(g=>p.every(w=>w.x*Math.sign(g.x)>0)&&Math.max(...p.map(w=>w.z))>=g.minZ-.05&&Math.min(...p.map(w=>w.z))<=g.maxZ+.05)&&(n[x]=0,v++)}if(o+=v,!v)break}return o}function $M(r,e){const t=[],n=new S,i=[new S,new S,new S],s=[];return r.updateMatrixWorld(!0),r.traverse(o=>{const a=o;if(!a.isMesh||a.isSkinnedMesh)return;const l=a.geometry,c=l.getAttribute("position"),h=l.index;if(!h||l.groups.length>1)return;const u=[];for(let p=0;p<c.count;p++)u.push(n.fromBufferAttribute(c,p).applyMatrix4(a.matrixWorld).clone());const d=[],f=new Uint8Array(h.count/3);for(let p=0;p<h.count;p+=3){const g=[h.getX(p),h.getX(p+1),h.getX(p+2)];for(let L=0;L<3;L++)i[L].copy(u[g[L]]);const w=Math.min(...i.map(L=>L.y)),M=(i[0].z+i[1].z+i[2].z)/3;w>.35&&e.some(L=>M>L.minZ&&M<L.maxZ&&i.every(P=>P.x*L.side>10.5))&&(f[p/3]=1)}QM(c,h,u,f);let v=0;for(let p=0;p<f.length;p++)f[p]?v++:d.push(h.getX(p*3),h.getX(p*3+1),h.getX(p*3+2));if(v===0)return;if(v>h.count/3*.16)throw new Error("Unsafe generated rail crop");const x=l.clone();x.setIndex(d),x.groups.length&&(x.clearGroups(),x.addGroup(0,d.length,l.groups[0].materialIndex)),x.computeBoundingBox(),x.computeBoundingSphere(),a.geometry=x,t.push(x),s.push({originalTriangles:h.count/3,removedTriangles:v,floorGuardY:.35,outerGuardX:10.5,originalGeometry:l.uuid,adaptedGeometry:x.uuid})}),r.userData.bridgeRailAdaptation={breaks:e,records:s,sourcePreserved:!0},t}const nd=new nn(1,1),Vt="/wumingbu/assets/models/";function id(r){return r==="runtime:judge_gate-lod-20260930"?Vt+"runtime-20261008/judge_gate-welded-28k-r1.glb":r==="runtime:bridge_module-separated-rails-20261008-r1"?Vt+"runtime-20261008/bridge_module-separated-rails-r2.glb":r==="runtime:bridge_rail-detail-20261008-r1"?Vt+"runtime-20261008/bridge_rail-detail-6k-r1.glb":r==="runtime:bridge_module-playable-lod-20260930"?Vt+"runtime-20260930/bridge-module-deck-conditioned-30k-20261007-r1.glb":r.startsWith("runtime:")?Vt+"runtime-20260930/"+r.slice(8)+".glb":r.startsWith("gen:")?Vt+"gen/"+r.slice(4)+".glb":Vt+`props/${r}.glb`}function eS(r){return r==="runtime:reaper-cliff"?[Vt+"runtime-20260930/skull-cliff.glb"]:r==="runtime:karst-mountain"?[Vt+"runtime-20260930/karst-mountain-fallback.glb"]:[]}class tS{constructor(){_(this,"sceneRevision",0);_(this,"anchors",[]);_(this,"size",46);_(this,"embers",{t:0});_(this,"mine",[]);_(this,"props",[]);_(this,"propSources",new Map);_(this,"modelCache",new Map);_(this,"moon",null);_(this,"moteColor",8370431);_(this,"water",null);_(this,"lanterns",[]);_(this,"fogLayers",[]);_(this,"lanternLights",[]);_(this,"lanternSites",[]);_(this,"deckWarmMaterials",[]);_(this,"atmosphere",null);_(this,"shadowAt",new S(1/0,1/0,1/0));_(this,"bridgeBounds",null);_(this,"propIndex",[]);_(this,"ownedGeometries",new Set);_(this,"ownedMaterials",new Set);_(this,"ownedTextures",new Set);_(this,"gateLines",[]);_(this,"riverTime",{value:0});_(this,"viewOccluders",[]);_(this,"viewRay",new Yf);_(this,"viewTarget",new S);_(this,"viewDirection",new S);_(this,"viewBoxHit",new S);_(this,"viewCheckClock",0);_(this,"flames",[])}get cameraSceneRevision(){return this.sceneRevision}loadSceneModel(e){let t=this.modelCache.get(e);return t||(t=ft(e).then(n=>(n||this.modelCache.delete(e),n)).catch(n=>{throw this.modelCache.delete(e),n}),this.modelCache.set(e,t)),t}get isBridge(){return this.bridgeBounds!==null}get bridgeRange(){return this.bridgeBounds?{min:this.bridgeBounds.minZ,max:this.bridgeBounds.maxZ,halfWidth:(this.bridgeBounds.maxX-this.bridgeBounds.minX)/2}:null}async preload(e,t){const n=[...new Set(e.props.map(x=>x.model))],i=n.length,s=new Array(n.length).fill(null),o=new Array(n.length).fill(null);let a=0;const l=x=>{if(t)try{t(a,i,x)}catch{}};if(l(""),i===0){this.props=[],this.propIndex=[],this.propSources.clear();return}const c=async x=>{const p=[id(x),...eS(x)];let g=null,w=null;for(const M of p)if(g=await this.loadSceneModel(M),g||(await new Promise(y=>setTimeout(y,400)),g=await this.loadSceneModel(M)),g){w=M;break}s[n.indexOf(x)]=g,g&&(o[n.indexOf(x)]=w)};let h=!1,u,d=0;const f=Math.min(6,i),v=async()=>{for(;;){if(h)return;const x=d++;if(x>=i)return;const p=n[x];try{await c(p)}catch(g){h||(h=!0,u=g);return}a++,l(p)}};if(await Promise.all(Array.from({length:f},()=>v())),h)throw u;this.props=s.filter(x=>x!==null),this.propIndex=n.filter((x,p)=>s[p]!==null),this.propSources.clear();for(let x=0;x<n.length;x++){const p=o[x];p!==null&&this.propSources.set(n[x],p)}}async init(e,t){var Q,j,K,V,ee,te;this.clear(e),this.sceneRevision++;const n=jM(t.layoutSeed??t.background^Math.imul(t.groundRadius,65537));this.moteColor=t.mote??8370431,e.background=new Ae(t.background),e.fog=new Yc(t.fog.color,t.fog.density*(t.bridge?1.28:1)),this.size=t.groundRadius,this.bridgeBounds=t.bridge?{minX:-t.bridge.width/2,maxX:t.bridge.width/2,minZ:t.bridge.min,maxZ:t.bridge.max}:null;const i=t.bridge,[s,o,a]=t.light.hemi,l=new y_(s,o,a);e.add(l),this.mine.push(l);const c=new Wf(t.bridge?9017754:7441816,t.bridge?.48:.28);e.add(c),this.mine.push(c);const[h,u]=t.light.sun,d=new kr(h,u);d.position.set(-18,30,10),d.castShadow=!0,d.shadow.mapSize.set(1024,1024);const f=d.shadow.camera;if(f.left=f.bottom=-30,f.right=f.top=30,f.near=1,f.far=80,d.shadow.bias=-5e-4,e.add(d,d.target),this.mine.push(d,d.target),i){const O=new kr(6193812,.48);O.position.set(46,18,-28),O.target.position.set(0,1,44),e.add(O,O.target),this.mine.push(O,O.target)}this.moon=d;const v=t.water&&!i?t.groundRadius:t.groundRadius+30,x=((Q=t.groundTex)==null?void 0:Q.repeat)??14,p=i?i.max-i.min:0,g=(i==null?void 0:i.deckY)??0,w=new Hn({color:t.ground,roughness:i?.94:t.wet?.42:.95,metalness:i?0:t.wet?.18:0,envMapIntensity:i?.12:1});if((j=t.groundTex)!=null&&j.map){const O=new Gi().load("/wumingbu/assets/tex/"+t.groundTex.map);O.wrapS=O.wrapT=sn,i?O.repeat.set(Math.max(6,i.width/3.8),Math.max(18,p/3.8)):O.repeat.set(x,x),O.colorSpace=pt,O.anisotropy=8,w.map=O,w.color.set(16777215)}const M=new Be(i?new nn(i.width,p):new Mr(v,96),w);if(i&&M.position.set(0,g+.012,(i.min+i.max)/2),M.rotation.x=-Math.PI/2,M.receiveShadow=!0,e.add(M),this.mine.push(M),i){const O=sp();for(const le of[-1,1])for(let z=i.min+4;z<i.max-4;z+=8.8){const q=new Ts(8623774,.24,13,O);q.mat.blending=Ai,q.mat.opacity=.65,q.mat.fog=!0,q.mat.onBeforeCompile=Z=>{Z.fragmentShader=Z.fragmentShader.replace("#include <map_fragment>",`
              #include <map_fragment>
              float chainMask = max(diffuseColor.r, max(diffuseColor.g, diffuseColor.b));
              diffuseColor.a *= smoothstep(0.015, 0.12, chainMask);
              diffuseColor.rgb = vec3(chainMask) * vec3(0.19, 0.24, 0.27);
            `)};const oe=Array.from({length:13},(Z,ue)=>{const fe=ue/12;return new S(le*(i.width/2-.9),g+1.1-Math.sin(Math.PI*fe)*.85,z+fe*8.8)});q.set(oe),q.mesh.name="world-hanging-chain",q.mesh.userData.sharedTexture=!0,q.mesh.renderOrder=2,e.add(q.mesh),this.mine.push(q.mesh)}const ce=new dt({color:4495764,transparent:!0,opacity:.28,depthWrite:!1,side:Ct});for(let le=0;le<2;le++){const z=new Be(new nn(i.width-2.6,.18),ce);z.rotation.x=-Math.PI/2,z.name="world-area-seal",z.visible=!1,e.add(z),this.mine.push(z),this.gateLines.push(z)}}if((K=t.groundTex)!=null&&K.detail){const O=new Gi().load("/wumingbu/assets/tex/"+t.groundTex.detail);O.wrapS=O.wrapT=sn,O.repeat.set(x/3.5,x/3.5),O.colorSpace=pt;const ce=new Be(i?new nn(i.width-1.2,p-1.2):new Mr(v,64),new dt({map:O,blending:El,transparent:!0,opacity:.5,depthWrite:!1}));ce.rotation.x=-Math.PI/2,ce.position.y=.008,ce.renderOrder=1,e.add(ce),this.mine.push(ce)}const y=Kt(128),L=[1711654,2304548,2762272];for(let O=0;O<26;O++){const ce=n()*Math.PI*2,le=Math.sqrt(n())*(v-4),z=i?(n()-.5)*(i.width-5):Math.cos(ce)*le,q=i?i.min+3+n()*Math.max(1,p-6):Math.sin(ce)*le,oe=2.5+n()*7,Z=new Be(nd,new dt({map:y,color:L[n()*L.length|0],transparent:!0,opacity:.16+n()*.16,depthWrite:!1,blending:Ai}));Z.rotation.set(-Math.PI/2,0,n()*Math.PI,"YXZ"),Z.position.set(z,((i==null?void 0:i.deckY)??0)+.012+O*4e-4,q),Z.scale.set(oe*(.7+n()*.6),oe,1),Z.renderOrder=2,e.add(Z),this.mine.push(Z)}if(t.skyline){const O=t.skyline,ce=await this.loadSceneModel(O.model.startsWith("gen:")?Vt+"gen/"+O.model.slice(4)+".glb":Vt+`props/${O.model}.glb`);if(ce){const le=O.tint??1712169,z=new Mt().setFromObject(ce.scene).getSize(new S).y;for(let q=0;q<O.count;q++){const oe=q/O.count*Math.PI*2+n()*.25,Z=O.radius*(.85+n()*.3),ue=Qo(ce),fe=.7+n()*.7,Re=O.scale*fe;O.height!==void 0&&z>0?ue.scale.multiplyScalar(O.height/z*fe):ue.scale.setScalar(Re),ue.rotation.y=n()*Math.PI*2;const Oe=O.baseY===void 0?-Re*.12:O.baseY-new Mt().setFromObject(ue).min.y;ue.position.set(Math.cos(oe)*Z,Oe,Math.sin(oe)*Z),ue.name="world-skyline",ue.traverse(Ce=>{const Ne=Ce;Ne.isMesh&&(Ne.material=new dt({color:le,fog:!1}),this.ownedMaterials.add(Ne.material),Ne.castShadow=!1,Ne.receiveShadow=!1)}),e.add(ue),this.mine.push(ue)}}}if(t.panorama&&i){const O=await this.loadSceneModel(Vt+"runtime-20260930/river-ghost-volume-20261002-v1.glb"),ce=await Promise.all([this.loadSceneModel(Vt+"runtime-20261008/river-ghost-mid-900-r1.glb"),this.loadSceneModel(Vt+"runtime-20261008/river-ghost-far-180-r1.glb")]);this.atmosphere=qM(e,t.panorama,O,i,((V=t.water)==null?void 0:V.y)??-14,t.fog.color,n,ce)}const P=new Be(new Mr(9,48),new dt({map:Kt(256),color:5902352,blending:Gt,transparent:!0,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.y=.02,e.add(P),this.mine.push(P);const C=i?ZM():null;if(C&&this.ownedTextures.add(C),t.water){const O=t.water,ce=O.y??-1.2,le=i?760:t.groundRadius+130,z=i?1520:0,q=i?new nn(le*2,z,32,40):new ga(t.groundRadius-.5,t.groundRadius+130,96,4),oe=new Hn({color:O.color,roughness:i?.62:.5,metalness:i?.04:.08,envMapIntensity:i?.24:1,emissive:new Ae(i?821915:O.color).multiplyScalar(i?.3:.55),transparent:!1,opacity:1,side:Vn});if(i){const Oe=await new Gi().loadAsync("/wumingbu/assets/art/forgotten-river-water-2.5-4k-20260930.png");Oe.colorSpace=pt,Oe.wrapS=Oe.wrapT=Ar,Oe.anisotropy=Math.min(4,m.renderer.capabilities.getMaxAnisotropy()),this.ownedTextures.add(Oe);const Ce=new Ae(t.fog.color);oe.customProgramCacheKey=()=>"bridge-river-natural-flow-contact-v5";const Ne={value:1};oe.userData.bankContactStrength=Ne,oe.userData.bankContactMap=C,oe.onBeforeCompile=U=>{U.uniforms.uRiverTime=this.riverTime,U.uniforms.uBankContactMap={value:C},U.uniforms.uBankContactDomain={value:rp},U.uniforms.uBankContactStrength=Ne,U.uniforms.uRiverDetail={value:Oe},U.uniforms.uRiverFog={value:Ce},U.vertexShader=`varying vec3 vRiverWorld;
`+U.vertexShader,U.vertexShader=`uniform float uRiverTime;
`+U.vertexShader,U.vertexShader=U.vertexShader.replace("#include <begin_vertex>",`
            #include <begin_vertex>
          `),U.vertexShader=U.vertexShader.replace("#include <worldpos_vertex>",`
            #include <worldpos_vertex>
            vRiverWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
          `),U.fragmentShader=`uniform float uRiverTime; uniform sampler2D uRiverDetail; uniform vec3 uRiverFog; uniform sampler2D uBankContactMap; uniform vec4 uBankContactDomain; uniform float uBankContactStrength; varying vec3 vRiverWorld;
`+U.fragmentShader,U.fragmentShader=U.fragmentShader.replace("#include <color_fragment>",`
            #include <color_fragment>
            vec2 q = vRiverWorld.xz;
            vec2 warp = vec2(sin(q.y * 0.024 + q.x * 0.016), cos(q.x * 0.021 - q.y * 0.011)) * 0.045;
            vec2 flowUv = q / vec2(52.0, 35.0) + warp;
            vec3 detailA = texture2D(uRiverDetail, flowUv + vec2(0.006, -0.023) * uRiverTime).rgb;
            vec2 crossUv = mat2(0.94, -0.34, 0.34, 0.94) * q / vec2(39.0, 58.0);
            vec3 detailB = texture2D(uRiverDetail, crossUv - warp + vec2(-0.004, -0.012) * uRiverTime).rgb;
            vec3 riverDetail = mix(detailA, detailB, 0.28);
            float current = 0.5 + 0.5 * sin(q.y * 0.19 - q.x * 0.065 + uRiverTime * 1.72);
            float streak = smoothstep(0.56, 0.96, current) * (0.55 + 0.45 * sin(q.x * 0.11 + uRiverTime * 0.82));
            float foamField = smoothstep(0.46, 0.84, max(detailA.g, detailB.b))
              * (0.54 + 0.46 * current);
            float curlField = smoothstep(0.40, 0.76, dot(mix(detailA, detailB, 0.55), vec3(0.22, 0.52, 0.26)));
            float crest = max(foamField, curlField * 0.74) * (0.62 + streak * 0.38);
            riverDetail += vec3(0.020, 0.105, 0.130) * streak * smoothstep(0.06, 0.42, dot(riverDetail, vec3(0.333)));
            float nearRiver = 1.0 - smoothstep(95.0, 330.0, length(q - cameraPosition.xz));
            // 保留暗处水色与碎波，远景降低纹理对比；不再叠加规则正弦亮线。
            diffuseColor.rgb = mix(vec3(0.016, 0.042, 0.050),
              vec3(0.010, 0.030, 0.040) + riverDetail * vec3(0.62, 0.88, 0.86)
                + vec3(0.028, 0.115, 0.13) * crest, nearRiver);
          `),U.fragmentShader=U.fragmentShader.replace("#include <emissivemap_fragment>",`
            #include <emissivemap_fragment>
            totalEmissiveRadiance += (riverDetail * vec3(0.10, 0.20, 0.21)
              + vec3(0.025, 0.10, 0.105) * crest) * nearRiver;
          `),U.fragmentShader=U.fragmentShader.replace("#include <normal_fragment_maps>",`
            #include <normal_fragment_maps>
            vec3 riverRipple = vec3(cos(q.x * 0.38 - uRiverTime * 0.84) * 0.24, 0.0,
              sin(q.y * 0.31 + q.x * 0.17 - uRiverTime * 1.35) * 0.30);
            normal = normalize(normal + mat3(viewMatrix) * riverRipple);
          `),U.fragmentShader=U.fragmentShader.replace("#include <opaque_fragment>",`
            float riverDistance = length(vRiverWorld.xz - cameraPosition.xz);
            outgoingLight = mix(outgoingLight, uRiverFog, smoothstep(135.0,400.0,riverDistance));
            // 接触雾来自 GLB 三角形与实际水面的交线，不按包围盒制造规则海岸。
            vec2 bankUv = (vRiverWorld.xz - uBankContactDomain.xy) / uBankContactDomain.zw;
            float bankInDomain = step(0.0, bankUv.x) * step(0.0, bankUv.y)
              * step(bankUv.x, 1.0) * step(bankUv.y, 1.0);
            float bankContact = texture2D(uBankContactMap, bankUv).r * bankInDomain;
            outgoingLight = mix(outgoingLight, uRiverFog * vec3(0.78, 1.08, 1.12), bankContact * 0.72 * uBankContactStrength);

            #include <opaque_fragment>
          `),oe.userData.bankContactCompiled=U.fragmentShader.includes("float bankContact = texture2D")}}i&&bc(oe,t.fog.color,ce);const Z=new Be(q,oe);if(Z.name="world-river",Z.userData.detailTexture=i?"forgotten-river-water-2.5-4k-20260930.png":null,Z.rotation.x=-Math.PI/2,Z.position.set(0,ce,i?(i.min+i.max)/2:0),e.add(Z),this.mine.push(Z),!i){const Oe=new zr(t.groundRadius,t.groundRadius*.82,Math.abs(ce)+2,64,1,!0),Ce=new Be(Oe,new Hn({color:2764856,roughness:.9,side:Ct}));Ce.position.y=ce/2,e.add(Ce),this.mine.push(Ce)}this.water={mesh:Z,base:q.attributes.position.array.slice(),wave:O.wave??.35};const ue=i?8:O.lanterns??40,fe=new nn(.5,.5),Re=new dt({map:Kt(64),color:13203541,blending:Gt,transparent:!0,opacity:.42,depthWrite:!1});for(let Oe=0;Oe<ue;Oe++){const Ce=n()*Math.PI*2,Ne=t.groundRadius+6+n()*70,U=i?(n()<.5?-1:1)*(i.width/2+6+n()*Math.max(1,le-i.width/2-18)):void 0,re=i?i.min+4+n()*Math.max(1,p-8):void 0,xe=i?U:Math.cos(Ce)*Ne,be=i?re:Math.sin(Ce)*Ne,Se=new Be(fe,Re);Se.position.set(xe,ce+.35,be),Se.rotation.x=-Math.PI/2,e.add(Se),this.mine.push(Se),this.lanterns.push({mesh:Se,phase:n()*6.28,speed:.2+n()*.3,radius:Ne,angle:Ce,baseX:U,baseZ:re})}}const I=Kt(256);I.colorSpace=Ln;const E=[-34,31,-38,36,-29],b=[-20,8,41,75,108],D=[-9.8,-8.7,-7.4,-6.2,-5.1],H=[-68,61,-74,70,-62,66],N=[-40,-4,34,78,124,170],W=[-4.8,-2.2,-5.8,-.8,2.6,5.8];for(let O=0;O<(i?11:20);O++){const ce=!!i&&O>=5,le=ce?O-5:O,z=i?(ce?[122,104,136,116,128,112][le]:[48,42,56,46,52][le])+n()*(ce?22:20):30+n()*55,q=n()*Math.PI*2,oe=i?KM(I,this.riverTime,q,ce?.2:.3):new dt({alphaMap:I,transparent:!0,depthWrite:!1,opacity:.07+n()*.06,color:9414848}),Z=new Be(new nn(z,ce?z*.32:z),oe);Z.rotation.x=ce?-.12:-Math.PI/2;const ue=n()*Math.PI*2,fe=22+n()*60,Re=i?ce?W[le]:D[le]:2+n()*5,Oe=i?ce?H[le]:E[le]:Math.cos(ue)*fe,Ce=i?ce?N[le]:b[le]:Math.sin(ue)*fe;Z.position.set(Oe,Re,Ce),Z.rotation.z=ce?0:n()*Math.PI,Z.name="world-valley-mist",Z.renderOrder=3,e.add(Z),this.mine.push(Z),this.fogLayers.push({mesh:Z,speed:.12+n()*.26,phase:q,baseY:Re,baseX:Z.position.x,baseZ:Z.position.z,vertical:ce,spin:(n()-.5)*.012})}for(const O of t.props){const ce=this.propIndex.indexOf(O.model);if(ce<0)continue;const le=Qo(this.props[ce]);if(le.traverse(ue=>{var Ce,Ne;const fe=ue;if(!fe.isMesh)return;fe.castShadow=!O.environment&&(O.anchor===!0||O.model.includes("judge_gate")),fe.receiveShadow=!O.environment;const Re=U=>{const re=U.clone();return this.ownedMaterials.add(re),re};fe.material=Array.isArray(fe.material)?fe.material.map(Re):Re(fe.material);const Oe=Array.isArray(fe.material)?fe.material:[fe.material];for(const U of Oe){const re=U;if(re.map&&(re.map.colorSpace=pt,re.map.needsUpdate=!0),re.normalMap&&(re.normalMap.colorSpace=Ln),re.metalness!==void 0&&re.metalness>.5&&(re.metalness=.05,re.roughness=Math.max(re.roughness,.8)),i&&O.environment&&re.isMeshStandardMaterial&&(re.roughnessMap=null,re.metalnessMap=null,re.roughness=.92,re.metalness=.02,re.envMapIntensity=.22,bc(re,t.fog.color,((Ce=t.water)==null?void 0:Ce.y)??-14,!0)),i&&/stone_lantern|soul_lamp/.test(O.model)&&re.isMeshStandardMaterial&&(re.customProgramCacheKey=()=>"bridge-lamp-muted-warm-v1",re.onBeforeCompile=xe=>{xe.fragmentShader=xe.fragmentShader.replace("#include <map_fragment>",`
                #include <map_fragment>
                float warmPixel = smoothstep(1.15, 1.65, diffuseColor.r / max(diffuseColor.g, 0.001))
                  * smoothstep(1.1, 1.5, diffuseColor.g / max(diffuseColor.b, 0.001));
                float warmLum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
                diffuseColor.rgb = mix(diffuseColor.rgb, mix(vec3(warmLum), diffuseColor.rgb, 0.65) * 0.72, warmPixel);
              `)}),i&&O.model==="runtime:bridge_rail-detail-20261008-r1"&&re.isMeshStandardMaterial&&(re.metalness=0,re.roughness=.92,re.envMapIntensity=.15,re.normalScale.multiplyScalar(.65),re.color.multiplyScalar(.78)),i&&O.model.includes("bridge_module")&&re.isMeshStandardMaterial&&(re.roughnessMap=null,re.metalnessMap=null,re.roughness=.92,re.metalness=0,re.envMapIntensity=.08,re.color.multiplyScalar(.57),(Ne=re.normalScale)==null||Ne.multiplyScalar(.65),re.side=Ct,!O.environment&&w.map)){const xe=w.map;re.userData.bridgeDeckTexture=xe.name="generated-wet-stone-deck",re.customProgramCacheKey=()=>"generated-bridge-deck-projection-v5";const be={value:1},Se=Array.from({length:4},()=>new S(0,-999,0));re.userData.deckWetStrength=be,re.userData.deckWarmPositions=Se;const et=[0,0,0,0];re.userData.deckWarmPower=et,this.deckWarmMaterials.push({material:re,positions:Se,power:et}),re.onBeforeCompile=me=>{me.uniforms.uDeckStone={value:xe},me.uniforms.uDeckWetStrength=be,me.uniforms.uDeckLampPositions={value:Se},me.uniforms.uDeckLampPower={value:et},me.uniforms.uDeckY={value:g},me.vertexShader=`varying vec3 vDeckWorld; varying float vDeckUp;
`+me.vertexShader,me.vertexShader=me.vertexShader.replace("#include <begin_vertex>",`
                  #include <begin_vertex>
                  vDeckWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
                  vDeckUp = inverseTransformDirection(normalize(normalMatrix * normal), viewMatrix).y;
                `),me.fragmentShader=`uniform sampler2D uDeckStone; uniform float uDeckY; uniform float uDeckWetStrength; uniform vec3 uDeckLampPositions[4]; uniform float uDeckLampPower[4]; varying vec3 vDeckWorld; varying float vDeckUp;
`+me.fragmentShader,me.fragmentShader=me.fragmentShader.replace("#include <map_fragment>",`
                  #include <map_fragment>
                  float deckMask = smoothstep(0.65, 0.92, vDeckUp)
                    * (1.0 - smoothstep(0.3, 0.85, abs(vDeckWorld.y - uDeckY)));
                  // 世界坐标连续投影，四段桥相接不重置 UV；旧 10m 周期让裂石大到像竞技场。
                  vec3 deckStone = texture2D(uDeckStone, vDeckWorld.xz / 5.4).rgb;
                  // 压掉湿石板过亮的蓝白纹，保留生成石材的纹理与局部冷色，不整片染灰。
                  float stoneLum = dot(deckStone, vec3(0.2126, 0.7152, 0.0722));
                  float middleWet = smoothstep(20.0, 37.0, vDeckWorld.z)
                    * (1.0 - smoothstep(59.0, 78.0, vDeckWorld.z));
                  float weatherPatch = 0.5 + 0.5 * sin(vDeckWorld.x * 0.43 + sin(vDeckWorld.z * 0.21) * 1.7);
                  float deckWeather = mix(0.97, 0.84, middleWet * weatherPatch);
                  vec3 gradedStone = mix(vec3(stoneLum), deckStone, 0.68) * 0.73 * deckWeather;
                  diffuseColor.rgb = mix(diffuseColor.rgb, gradedStone, deckMask * 0.96);
                  // 雨湿只作用于真实桥面：石板裂隙比凸起湿，保留干石而非整桥银亮。
                  // 复用同一张生成湿石纹理，不添加反光贴花、点光或屏幕空间反射。
                  float deckWetPatch = texture2D(uDeckStone, vDeckWorld.xz / vec2(19.0, 23.0)).r;
                  deckWetPatch = 1.0 - smoothstep(0.018, 0.12, deckWetPatch);
                  float deckWetCrevice = 1.0 - smoothstep(0.045, 0.18, stoneLum);
                  float deckWetMask = deckMask * smoothstep(0.46, 0.82, deckWetPatch)
                    * (0.38 + deckWetCrevice * 0.62) * uDeckWetStrength;
                `),me.fragmentShader=me.fragmentShader.replace("#include <roughnessmap_fragment>",`
                  #include <roughnessmap_fragment>
                  roughnessFactor = mix(roughnessFactor, 0.62, deckWetMask);
                  float deckWarmPool = 0.0;
                  for (int deckLamp = 0; deckLamp < 4; deckLamp++) {
                    vec2 lampDelta = vDeckWorld.xz - uDeckLampPositions[deckLamp].xz;
                    deckWarmPool += exp(-dot(lampDelta, lampDelta) / 18.0) * uDeckLampPower[deckLamp];
                  }
                  deckWarmPool = clamp(deckWarmPool, 0.0, 1.0) * deckMask * (0.40 + 0.60 * deckWetMask);
                  // 湿石只接收灯池的低幅暖反光，避免整块桥面变橙或栏柱过曝。
                  diffuseColor.rgb += vec3(0.22, 0.065, 0.020) * deckWarmPool;
                `),me.fragmentShader=me.fragmentShader.replace("#include <lights_fragment_end>",`
                  #include <lights_fragment_end>
                  reflectedLight.directSpecular *= mix(1.0, 0.20, deckMask);
                  reflectedLight.indirectSpecular *= mix(1.0, 0.20, deckMask);
                `),me.fragmentShader=me.fragmentShader.replace("#include <emissivemap_fragment>",`
                  #include <emissivemap_fragment>
                  totalEmissiveRadiance += vec3(0.055, 0.013, 0.0035) * deckWarmPool;
                `),me.fragmentShader=me.fragmentShader.replace("#include <normal_fragment_maps>",`
                  #include <normal_fragment_maps>
                  // 原烘焙木纹/银纹法线不应穿过新石板；桥侧雕刻仍保留原凹凸。
                  normal = normalize(mix(normal, nonPerturbedNormal, deckMask * 0.82));
                `),re.userData.deckProjectionCompiled=me.fragmentShader.includes("float deckWeather")}}i&&O.model.includes("bridge_module")&&re.isMeshStandardMaterial&&XM(re,g)}}),O.scale3?le.scale.set(...O.scale3):le.scale.setScalar(O.scale??1.6),O.height){const ue=new Mt().setFromObject(le).getSize(new S).y;ue>0&&le.scale.multiplyScalar(O.height/ue)}O.baseY!==void 0&&(le.position.y=O.baseY-new Mt().setFromObject(le).min.y);const z=O.baseY!==void 0?le.position.y:O.pos[1];le.position.set(O.pos[0],z,O.pos[2]),le.rotation.y=O.rotY??n()*Math.PI;const q=id(O.model),oe=this.propSources.get(O.model)??q;if(le.userData.modelId=O.model,le.userData.assetSource=oe,le.userData.fallbackAsset=oe!==q,le.userData.environment=!!O.environment,le.userData.environmentRole=O.environmentRole,le.userData.anchor=!!O.anchor,le.userData.generatedAsset=O.model.startsWith("gen:")||O.model.startsWith("runtime:"),le.updateMatrixWorld(!0),i&&((ee=O.railBreaks)!=null&&ee.length)&&O.model.includes("bridge_module")&&!O.environment)for(const ue of $M(le,O.railBreaks))this.ownedGeometries.add(ue);const Z=new Mt().setFromObject(le);if(le.userData.runtimeBounds={min:Z.min.toArray(),max:Z.max.toArray(),size:Z.getSize(new S).toArray()},O.model.includes("judge_gate")&&!O.environment){const ue={value:1},fe={value:1.5};this.viewOccluders.push({box:Z,root:le,fade:ue,floor:fe,blocks:!1}),le.traverse(Re=>{const Oe=Re;if(Oe.isMesh)for(const Ce of Array.isArray(Oe.material)?Oe.material:[Oe.material])Ce.transparent=!0,Ce.depthWrite=!0,Ce.customProgramCacheKey=()=>"gate-camera-soft-fade-v3",Ce.onBeforeCompile=Ne=>{Ne.uniforms.uGateFade=ue,Ne.uniforms.uGateFloor=fe,Ne.vertexShader=`varying float vGateY;
`+Ne.vertexShader,Ne.vertexShader=Ne.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vGateY = (modelMatrix * vec4(transformed, 1.0)).y;`),Ne.fragmentShader=`uniform float uGateFade; uniform float uGateFloor; varying float vGateY;
`+Ne.fragmentShader,Ne.fragmentShader=Ne.fragmentShader.replace("#include <alphatest_fragment>",`
                #include <alphatest_fragment>
                // 只淡出挡住角色的上部，不用随机像素造成整屏黑色颗粒。
                float gateUpper = smoothstep(uGateFloor, uGateFloor + 1.0, vGateY);
                // Proximity/occlusion fade is binary for the upper mass. Partial alpha on the
                // dense gate creates a translucent double-image and leaves the black silhouette.
                diffuseColor.a *= mix(1.0, step(0.5, uGateFade), gateUpper);
              `)}})}if(e.add(le),this.mine.push(le),O.anchor){this.anchors.push({pos:new S(O.pos[0],O.anchorY??2.2,O.pos[2]),radius:1.1,obj:le});const ue=new S(O.pos[0],(O.anchorY??2.2)+2,O.pos[2]);this.flames.push(ue)}}C&&JM(this.mine,C,((te=t.water)==null?void 0:te.y)??-14),await this.addRedLanterns(e,t),this.batchStaticDressing(e),this.registerOwnedMeshes()}batchStaticDressing(e){const t=new Set(["runtime:bridge_rail-detail-20261008-r1","runtime:bridge_rail","runtime:stone_lantern","runtime:soul_lamp","runtime:soul_banner"]),n=new Map;for(const i of this.mine){const s=i.userData.modelId;i.userData.environment||i.userData.anchor||i.name!=="world-red-lantern"&&(!s||!t.has(s))||(i.updateMatrixWorld(!0),i.traverse(o=>{const a=o;if(!a.isMesh||a.isSkinnedMesh||!a.visible)return;const l=`${s??i.name}:${a.geometry.uuid}:${a.castShadow}:${a.receiveShadow}`,c=n.get(l)??{modelId:s??i.name,meshes:[]};c.meshes.push(a),n.set(l,c)}))}for(const{modelId:i,meshes:s}of n.values()){if(s.length<2)continue;const o=s[0],a=new ra(o.geometry,o.material,s.length);a.name="world-static-dressing-batch",a.castShadow=o.castShadow,a.receiveShadow=o.receiveShadow,a.userData.sharedModelAsset=!0,a.userData.sourceModelId=i,a.userData.instances=s.length,s.forEach((l,c)=>{a.setMatrixAt(c,l.matrixWorld),l.removeFromParent()}),a.computeBoundingBox(),a.computeBoundingSphere(),e.add(a),this.mine.push(a)}}registerOwnedMeshes(){for(const e of this.mine){const t=e;if(!t.isMesh||t.userData.sharedModelAsset)continue;t.geometry!==nd&&this.ownedGeometries.add(t.geometry);const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)if(this.ownedMaterials.add(i),!t.userData.sharedTexture)for(const s of Object.values(i))s instanceof bt&&this.ownedTextures.add(s)}}updateView(e){var s;(s=this.atmosphere)==null||s.update(m.time,m.camera,m.renderer.domElement.clientHeight||720);const t=m.camera.position,n=m.player.pos;this.viewCheckClock-=e;const i=this.viewCheckClock<=0;i&&(this.viewCheckClock=.1);for(const o of this.viewOccluders){if(o.floor.value=n.y+1.5,i){o.blocks=!1;for(const l of[1.9,2.9]){this.viewTarget.copy(n),this.viewTarget.y+=l,this.viewDirection.subVectors(this.viewTarget,t);const c=this.viewDirection.length();if(c<.01)continue;this.viewRay.set(t,this.viewDirection.multiplyScalar(1/c)),this.viewRay.far=c;const h=this.viewRay.ray.intersectBox(o.box,this.viewBoxHit);if(!h||t.distanceTo(h)>c)continue;const u=this.viewRay.intersectObject(o.root,!0)[0];if(u&&u.distance<c-.1&&u.point.y>o.floor.value){o.blocks=!0;break}}}const a=o.blocks?.08:1;o.fade.value+=(a-o.fade.value)*(1-Math.exp(-9*e))}}isCameraInsideOccluder(e){return this.viewOccluders.some(t=>t.box.containsPoint(e))}getCameraEscapeX(e){let t=null,n=1/0;for(const i of this.viewOccluders){if(!i.box.containsPoint(e))continue;const s=2.4,o=i.box.min.x-s,a=i.box.max.x+s,l=Math.abs(e.x-o),c=Math.abs(a-e.x),h=l<=c?o:a,u=Math.min(l,c);u<n&&(t=h,n=u)}return t}async addRedLanterns(e,t){const n=await this.loadSceneModel(Vt+"thirdparty/lantern-red.glb");if(!n)return;const i=t.bridge,s=[],o=new Map,a=[],c=new Mt().setFromObject(n.scene).getSize(new S).y,h=(i==null?void 0:i.min)??-18,u=(i==null?void 0:i.max)??90,d=i?i.width/2-2.7:14;if(i)for(const f of this.anchors){const v=new Mt().setFromObject(f.obj),x=v.getCenter(new S).setY(v.max.y);s.push([-1,1].map((p,g)=>{const w=x.clone().add(new S(Math.sign(f.pos.x)*.48,-.42-g*.13,p*.58));return o.set(w,{support:x,supportId:f.obj.uuid}),w}))}else for(let f=h+9,v=0;f<=u-8;f+=18,v++)for(const x of[-1,1]){const p=x*(d+Math.sin(v*1.7)*.4);s.push([0,1,2].map(g=>new S(p,2.6+g*.62,f+x*1.5+(g-1)*.7)))}for(const f of s){for(const[v,x]of f.entries()){const p=Qo(n),g=i?Math.min(.85,Math.max(.3,x.y-(i.deckY??0)-.22)):0;p.scale.setScalar(i?g/Math.max(.01,c):v===1?1.3:1.15),p.position.copy(x),p.rotation.y=x.z*.37%Math.PI,p.name="world-red-lantern",p.traverse(M=>{if(!M.isMesh)return;const y=M;y.castShadow=!1,y.receiveShadow=!1;const L=P=>{const C=P.clone();if(C.emissive){const I=C.color.r>C.color.g*3&&C.color.r>.2;if(C.emissive.set(I?11684648:0),C.emissiveIntensity=I?.38:0,I){C.color.setHSL(.026,.5,.165),C.roughness=.96,C.metalness=0,C.envMapIntensity=.08,y.geometry.computeBoundingBox();const E=y.geometry.boundingBox,b=E.getCenter(new S),D=E.getSize(new S);C.customProgramCacheKey=()=>"lantern-paper-transmission-v2";const H={value:1};C.userData.paperGlowStrength=H,C.onBeforeCompile=N=>{C.userData.paperTransmissionCompiled=!0,N.uniforms.uPaperGlowStrength=H,N.uniforms.uPaperCenter={value:b},N.uniforms.uPaperSize={value:D},N.vertexShader=`varying vec3 vPaperLocal;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vPaperLocal = position;`),N.fragmentShader=`uniform vec3 uPaperCenter; uniform vec3 uPaperSize; uniform float uPaperGlowStrength; varying vec3 vPaperLocal;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <emissivemap_fragment>",`
                    #include <emissivemap_fragment>
                    vec3 paper = (vPaperLocal - uPaperCenter) / max(uPaperSize, vec3(0.001));
                    float ribs = pow(0.5 + 0.5 * cos(atan(paper.z, paper.x) * 16.0), 10.0);
                    float belly = pow(max(0.0, 1.0 - abs(paper.y) * 1.8), 1.25);
                    diffuseColor.rgb *= 1.0 - ribs * 0.30;
                    totalEmissiveRadiance *= (0.22 + belly * 1.32) * (1.0 - ribs * 0.45) * uPaperGlowStrength;
                  `)}}I&&C.map&&(C.map.colorSpace=pt,C.map.needsUpdate=!0)}return this.ownedMaterials.add(C),C};y.material=Array.isArray(y.material)?y.material.map(L):L(y.material)});const w=o.get(x);if(w){p.updateMatrixWorld(!0);const M=new Mt().setFromObject(p),y=M.getCenter(new S).setY(M.max.y);p.position.add(x.clone().sub(y)),p.updateMatrixWorld(!0);const L=new Mt().setFromObject(p);p.userData.runtimeBounds={min:L.min.toArray(),max:L.max.toArray(),size:L.getSize(new S).toArray()},p.userData.assetSource=Vt+"thirdparty/lantern-red.glb",p.userData.lanternMount={support:w.support.toArray(),supportId:w.supportId,lanternTop:x.toArray()};const P=w.support.clone().lerp(x,.5);P.y-=.08,a.push(new nh(new Pf([w.support,P,x]),6,.025,5,!1))}e.add(p),this.mine.push(p)}this.lanternSites.push(f[0].clone().add(new S(0,i?-.4:.4,0)))}if(a.length){const f=sM(a);if(a.forEach(v=>v.dispose()),f){const v=new Be(f,new Hn({color:3156776,roughness:.88,metalness:.12}));v.name="world-lantern-ties",v.userData.connectionCount=o.size,e.add(v),this.mine.push(v)}}for(let f=0;f<4;f++){const v=new Ys(12943977,4.2,12,2);v.position.copy(this.lanternSites[f]??new S),e.add(v),this.mine.push(v),this.lanternLights.push(v)}}clear(e){var t,n;(t=m.stones)==null||t.clear();for(const i of this.mine)e.remove(i),(i instanceof Xs||i instanceof ra)&&i.dispose();for(const i of this.ownedGeometries)i.dispose();for(const i of this.ownedMaterials)i.dispose();for(const i of this.ownedTextures)i.dispose();this.ownedGeometries.clear(),this.ownedMaterials.clear(),this.ownedTextures.clear(),(n=this.atmosphere)==null||n.dispose(),this.atmosphere=null,this.viewOccluders=[],this.viewCheckClock=0,this.lanternLights=[],this.lanternSites=[],this.deckWarmMaterials=[],this.shadowAt.set(1/0,1/0,1/0),this.gateLines=[],this.mine=[],this.anchors=[],this.flames=[],this.moon=null,this.water=null,this.lanterns=[],this.fogLayers=[],this.bridgeBounds=null}clampPosition(e,t=0){if(this.bridgeBounds)return e.x=it.clamp(e.x,this.bridgeBounds.minX+t,this.bridgeBounds.maxX-t),e.z=it.clamp(e.z,this.bridgeBounds.minZ+t,this.bridgeBounds.maxZ-t),e;const n=Math.hypot(e.x,e.z),i=Math.max(0,this.size-t);return n>i&&n>1e-4&&(e.x*=i/n,e.z*=i/n),e}collide(e,t){var n;for(const i of this.anchors){const s=e.x-i.pos.x,o=e.z-i.pos.z,a=Math.hypot(s,o),l=i.radius+t;a<l&&a>1e-4&&(e.x=i.pos.x+s/a*l,e.z=i.pos.z+o/a*l)}this.clampPosition(e,t),(n=m.runtime)==null||n.constrainToArea(e,t)}update(e){this.riverTime.value=m.time;const t=m.player.pos,n=this.lanternSites.slice().sort((o,a)=>o.distanceToSquared(t)-a.distanceToSquared(t));this.lanternLights.forEach((o,a)=>{n[a]&&o.position.copy(n[a])});for(const o of this.deckWarmMaterials)for(let a=0;a<o.positions.length;a++){const l=this.lanternLights[a];l&&o.positions[a].copy(l.position),o.power[a]=l?it.clamp(l.intensity/4.2,0,1):0}t.distanceToSquared(this.shadowAt)>4&&(this.shadowAt.copy(t),m.renderer.shadowMap.needsUpdate=!0);const i=m.runtime,s=i==null?void 0:i.area;for(const[o,a]of this.gateLines.entries())a.visible=!!(i!=null&&i.gateClosed),s&&a.position.set(s.center[0],.035,s.center[1]+(o===0?-1:1)*s.radius);if(this.moon&&(this.moon.position.set(t.x-18,30,t.z+10),this.moon.target.position.set(t.x,0,t.z)),this.water&&!this.isBridge){const o=this.water.mesh.geometry.attributes.position,a=this.water.base,l=m.time;for(let c=0;c<o.count;c++){const h=a[c*3],u=a[c*3+1],d=Math.hypot(h,u);o.setZ(c,Math.sin(d*.12-l*1.1)*this.water.wave+Math.sin(h*.05+l*.7)*this.water.wave*.5)}o.needsUpdate=!0}for(const o of this.fogLayers){const a=.62+o.speed*1.35,l=o.vertical?2.6:4.4;o.mesh.position.x=o.baseX+Math.sin(m.time*.025*a+o.phase)*l,o.mesh.position.z=o.baseZ+Math.sin(m.time*.018*a+o.phase)*(o.vertical?4.2:7.4),o.mesh.position.y=o.baseY+Math.sin(m.time*.22*a+o.phase)*(o.vertical?.55:.4),o.vertical||(o.mesh.rotation.z+=o.spin*e),o.mesh.rotation.y=Math.sin(m.time*.16+o.phase)*.045,o.mesh.material.opacity=(this.isBridge?o.vertical?.22:.34:.085)+Math.sin(m.time*.14+o.phase)*.025}for(const o of this.lanterns)o.angle+=o.speed*e*.02,o.baseX!==void 0&&o.baseZ!==void 0?(o.mesh.position.x=o.baseX+Math.cos(o.angle)*.9,o.mesh.position.z=o.baseZ+Math.sin(o.angle*.8)*1.4):(o.mesh.position.x=Math.cos(o.angle)*o.radius,o.mesh.position.z=Math.sin(o.angle)*o.radius),o.mesh.position.y=(this.water?this.water.mesh.position.y:0)+.35+Math.sin(m.time*.8+o.phase)*.12;if(this.embers.t-=e,this.embers.t<=0){if(this.embers.t=.05,this.flames.length){const l=this.flames[Math.random()*this.flames.length|0];m.fx.glow.add({pos:l.clone().add(new S((Math.random()-.5)*.4,0,(Math.random()-.5)*.4)),vel:new S(0,1.5,0),life:.7,size:1.4,sizeEnd:.3,color:this.isBridge?6015743:16736304})}const o=Math.random()*Math.PI*2,a=4+Math.random()*16;m.fx.glow.add({pos:new S(t.x+Math.cos(o)*a,.2,t.z+Math.sin(o)*a),vel:new S(0,.6+Math.random(),0),life:3,size:.2,color:this.moteColor,alpha:.38})}}}const gr=.12,op=.12,nS=gr+op,ll=Object.freeze({visible:!1,distance:0,opacity:0,done:!0});function iS(r,e=22){if(typeof e!="number"||!Number.isFinite(e)||e<=0)return{...ll};if(typeof r!="number"||!Number.isFinite(r))return{...ll};const t=r<0?0:r;if(t>=nS)return{...ll};let n;t<gr?n=t/gr*e:n=e;let i;return t<gr?i=1:i=1-(t-gr)/op,{visible:!0,distance:n,opacity:i,done:!1}}const sS=1.8,rS=Object.freeze(new S(0,0,1)),gn=r=>typeof r=="number"&&Number.isFinite(r),sd=r=>{if(!r||typeof r!="object")return!1;const e=r;return gn(e.x)&&gn(e.y)&&gn(e.z)},rd=r=>gn(r.min.x)&&gn(r.min.y)&&gn(r.min.z)&&gn(r.max.x)&&gn(r.max.y)&&gn(r.max.z),oS=15325091,aS=11967310,lS=.75,od=r=>{const e=r;!e||!e.isMeshStandardMaterial||!/^(LightSteel|Steel)$/i.test(r.name)||(e.color.setHex(oS),e.emissive.setHex(aS),e.emissiveIntensity=lS)};class cS{constructor(e,t){_(this,"root");_(this,"_materials");_(this,"_geometry");_(this,"_origin");_(this,"_direction");_(this,"_length");_(this,"_age");_(this,"_active");_(this,"_disposed");if(!e||typeof e.add!="function")throw new TypeError("SoulArrowVisual: scene required");if(!t||typeof t.traverse!="function")throw new TypeError("SoulArrowVisual: loaded glTF scene required");this.root=new Nn,this.root.name="SoulArrowVisualRoot",this.root.matrixAutoUpdate=!0,this._materials=[],this._geometry=[],this._origin=new S,this._direction=new S(0,0,1),this._length=22,this._age=0,this._active=!1,this._disposed=!1;const i=new Mt().setFromObject(t),s=i.max.z-i.min.z;if(!rd(i)||!gn(s)||s<=1e-6)throw new TypeError("SoulArrowVisual: non-empty finite model bounds required");const o=sS/s,a=new Map,l=t.clone(!0);if(l.updateMatrixWorld(!0),l.matrixWorld.premultiply(new ke().makeScale(o,o,o)),l.matrixWorld.decompose(l.position,l.quaternion,l.scale),rd(i)&&(l.position.z-=i.min.z*o),l.matrixAutoUpdate=!0,l.traverse(c=>{const h=c;if(!h.isMesh||!h.material)return;const d=(Array.isArray(h.material)?h.material:[h.material]).map(f=>{if(!a.has(f)){const v=f.clone();v.transparent=!0,v.depthWrite=!1,typeof v.opacity=="number"&&(v.opacity=1);const x=String(v.name||"");/steel/i.test(x)&&od(v),a.set(f,v),this._materials.push(v)}return a.get(f)});h.material=Array.isArray(h.material)?d:d[0],h.geometry&&this._geometry.push(h.geometry),h.castShadow=!1,h.receiveShadow=!1,h.matrixAutoUpdate=!0,h.frustumCulled=!1}),this._geometry.length===0||this._materials.length===0){for(const c of this._materials)c.dispose();throw new TypeError("SoulArrowVisual: real mesh geometry/material required")}for(const c of this._materials)od(c);this.root.add(l),this.root.visible=!1,e.add(this.root)}get active(){return this._active}spawn(e,t,n=22){if(this._disposed||!sd(e)||!sd(t)||!gn(n)||n<=0)return!1;const i=new S(t.x,t.y,t.z);if(i.lengthSq()<1e-12)return!1;i.normalize(),this._origin.set(e.x,e.y,e.z),this._direction.copy(i),this._length=n,this._age=0,this._active=!0,this.root.quaternion.setFromUnitVectors(rS,i),this.root.position.copy(this._origin);for(const s of this._materials)s.opacity=1;return this.root.visible=!0,!0}update(e){if(this._disposed||!this._active||!gn(e)||e<0)return;this._age+=e;const t=iS(this._age,this._length);if(!t.visible||t.done){this._active=!1,this.root.visible=!1;for(const n of this._materials)n.opacity=0;return}this.root.visible=!0,this.root.position.copy(this._origin).addScaledVector(this._direction,t.distance);for(const n of this._materials)n.opacity=t.opacity}clear(){if(!this._disposed){this._active=!1,this._age=0,this.root.visible=!1;for(const e of this._materials)e.opacity=0}}dispose(){if(!this._disposed){this.clear(),this._disposed=!0,this.root.parent&&this.root.parent.remove(this.root);for(const e of this._materials)e.dispose();this._materials.length=0,this._geometry.length=0,this.root.clear()}}}const Do=[{name:"引魂·斜斩",color:16764563,tilt:-.25,roll:-.05,life:.2,width:1.16,height:1.05,sparks:5},{name:"断链·横扫",color:16753012,tilt:-1.42,roll:.18,life:.24,width:1.62,height:.88,sparks:7},{name:"落印·重斩",color:16769451,tilt:0,roll:-.36,life:.2,width:.56,height:.9,sparks:9}],Fi={reachFraction:.6,handExtension:.25,groundHeight:.12,sealWidth:1.8},hS=24,ar=9230548,qt=4e3,uS=`
attribute float aSize;
attribute float aAlpha;
attribute float aRot;
attribute vec3 aColor;
varying float vAlpha;
varying float vRot;
varying vec3 vColor;
uniform float uScale;
void main() {
  vAlpha = aAlpha; vRot = aRot; vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,dS=`
uniform sampler2D map;
varying float vAlpha;
varying float vRot;
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float c = cos(vRot), s = sin(vRot);
  p = mat2(c, -s, s, c) * p + 0.5;
  if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) discard;
  vec4 t = texture2D(map, p);
  // RPicster CC0贴图是白RGB+形状alpha；丢alpha会变成实心白块。
  // 黑底生图贴图alpha=1，维持原有加色行为。
  gl_FragColor = vec4(t.rgb * t.a * vColor * vAlpha, 1.0);
}`;class cl{constructor(e){_(this,"geo",new Tt);_(this,"pos",new Float32Array(qt*3));_(this,"col",new Float32Array(qt*3));_(this,"size",new Float32Array(qt));_(this,"alpha",new Float32Array(qt));_(this,"rot",new Float32Array(qt));_(this,"vel",new Float32Array(qt*3));_(this,"life",new Float32Array(qt));_(this,"maxLife",new Float32Array(qt));_(this,"s0",new Float32Array(qt));_(this,"s1",new Float32Array(qt));_(this,"a0",new Float32Array(qt));_(this,"grav",new Float32Array(qt));_(this,"drag",new Float32Array(qt));_(this,"spin",new Float32Array(qt));_(this,"count",0);_(this,"points");_(this,"mat");const t=this.geo;t.setAttribute("position",new _t(this.pos,3).setUsage(zn)),t.setAttribute("aColor",new _t(this.col,3).setUsage(zn)),t.setAttribute("aSize",new _t(this.size,1).setUsage(zn)),t.setAttribute("aAlpha",new _t(this.alpha,1).setUsage(zn)),t.setAttribute("aRot",new _t(this.rot,1).setUsage(zn)),this.mat=new xt({uniforms:{map:{value:e},uScale:{value:600}},vertexShader:uS,fragmentShader:dS,blending:Gt,depthWrite:!1,transparent:!0}),this.points=new Rf(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=10}add(e){if(this.count>=qt)return;const t=this.count++,n=new Ae(e.color??16777215);this.pos.set([e.pos.x,e.pos.y,e.pos.z],t*3),this.vel.set(e.vel?[e.vel.x,e.vel.y,e.vel.z]:[0,0,0],t*3),this.col.set([n.r,n.g,n.b],t*3),this.life[t]=this.maxLife[t]=e.life??.6,this.s0[t]=e.size??1,this.s1[t]=e.sizeEnd??this.s0[t],this.a0[t]=e.alpha??1,this.grav[t]=e.gravity??0,this.drag[t]=e.drag??0,this.rot[t]=e.rot??Math.random()*Math.PI*2,this.spin[t]=e.spin??0}update(e){let t=0;for(;t<this.count;){if(this.life[t]-=e,this.life[t]<=0){this.swap(t,--this.count);continue}const n=1-this.life[t]/this.maxLife[t],i=Math.max(0,1-this.drag[t]*e),s=t*3;this.vel[s]*=i,this.vel[s+2]*=i,this.vel[s+1]=this.vel[s+1]*i-this.grav[t]*e,this.pos[s]+=this.vel[s]*e,this.pos[s+1]+=this.vel[s+1]*e,this.pos[s+2]+=this.vel[s+2]*e,this.size[t]=this.s0[t]+(this.s1[t]-this.s0[t])*n,this.alpha[t]=this.a0[t]*Math.min(1,n*8)*(1-n*n),this.rot[t]+=this.spin[t]*e,t++}this.geo.setDrawRange(0,this.count);for(const n of["position","aColor","aSize","aAlpha","aRot"])this.geo.getAttribute(n).needsUpdate=!0}clear(){this.count=0,this.geo.setDrawRange(0,0);for(const e of["position","aColor","aSize","aAlpha","aRot"])this.geo.getAttribute(e).needsUpdate=!0}swap(e,t){const n=[this.pos,this.vel,this.col];for(const s of n)for(let o=0;o<3;o++)s[e*3+o]=s[t*3+o];const i=[this.size,this.alpha,this.rot,this.life,this.maxLife,this.s0,this.s1,this.a0,this.grav,this.drag,this.spin];for(const s of i)s[e]=s[t]}}class fS{constructor(e){_(this,"glow");_(this,"smoke");_(this,"spark");_(this,"ringTex");_(this,"slashTex");_(this,"pillarTex");_(this,"burstTex");_(this,"burstRadial");_(this,"swirlTex");_(this,"flareTex");_(this,"soulCutAtlas",[]);_(this,"decals",[]);_(this,"warmupDecals",[]);_(this,"warmupCenter",new S);_(this,"shakeAmt",0);_(this,"shakeOffset",new S);_(this,"soulArrow");_(this,"soulArrowLoading");_(this,"arrowTrailAge",0);_(this,"arrowTrailTip",new S);this.scene=e;const t="/wumingbu/assets/vfx/";this.glow=new cl(Tn(t+"rp/glow.png",()=>Kt())),this.spark=new cl(Tn(t+"rp/star.png",()=>Kt(64))),this.burstTex=Tn(t+"soul-burst-1k.png",()=>Kt(),!1),this.smoke=new cl(Tn(t+"dust-smoke.png",()=>Kt())),this.smoke.mat.blending=Gt,this.ringTex=Tn(t+"shockwave-ring.png",()=>Kt()),this.burstRadial=Tn(t+"rp/burst.png",()=>Kt()),this.swirlTex=Tn(t+"rp/swirl.png",()=>Kt()),this.flareTex=Tn(t+"rp/flare.png",()=>Kt()),this.slashTex=Tn(t+"slash-arc.png",()=>Kt()),this.pillarTex=Tn(t+"light-pillar.png",()=>Kt());for(const[n,i,s,o]of[[0,0,650,809],[625,200,870,430],[1570,0,372,809]]){const a=Tn(t+"cinnabar-slashes-official-20261007-r1.png",()=>Kt(),!1);a.name="cinnabar-slashes-official-20261007-r1",a.offset.set(n/1942,1-(i+o)/809),a.repeat.set(s/1942,o/809),this.soulCutAtlas.push(a)}e.add(this.smoke.points,this.glow.points,this.spark.points)}async prepareSoulArrow(){if(!this.soulArrow)return this.soulArrowLoading||(this.soulArrowLoading=(async()=>{try{const e=await ft("/wumingbu/assets/models/runtime-20261008/arrow-quaternius-cc0-20261008-r1.glb");if(!e){console.warn("[fx] soul arrow model missing: arrow-quaternius-cc0-20261008-r1.glb (keep original slash visuals)");return}this.soulArrow=new cS(this.scene,e.scene)}catch(e){console.warn("[fx] soul arrow model failed to load (keep original slash visuals)",e)}finally{this.soulArrowLoading=void 0}})()),this.soulArrowLoading}soulArrowShot(e,t){const n=this.soulArrow;if(!n)return!1;const i=t.clone().sub(e),s=i.length();return!Number.isFinite(s)||s<=1.8||(this.scene.add(n.root),!n.spawn(e,i,s-1.8))?!1:(this.arrowTrailAge=0,this.burst(e,14071153,5,3),m.audio.play("dash",{vol:.35,pitch:1.3}),!0)}warmupGraphics(e=new S){if(this.soulArrow&&(this.soulArrow.clear(),this.scene.add(this.soulArrow.root),this.soulArrow.root.position.copy(e).add(new S(0,1.2,0)),this.soulArrow.root.quaternion.identity(),this.soulArrow.root.visible=!0,this.soulArrow.root.traverse(n=>{const i=n;if(!i.isMesh||!i.material)return;const s=Array.isArray(i.material)?i.material:[i.material];for(const o of s)o.opacity=1})),this.warmupDecals.length){const n=e.clone().sub(this.warmupCenter);for(const i of this.warmupDecals)i.mesh.position.add(n),m.scene.add(i.mesh);this.warmupCenter.copy(e),this.burst(e.clone().setY(1.1),16740416,8,5);return}const t=this.decals.length;this.soulCut(e,.3,2,3.8),this.soulParry(e),this.burst(e.clone().setY(1.1),16740416,8,5),this.decal(this.ringTex,e,{size:1.4,sizeEnd:4.5,life:3,color:16732208}),this.decal(this.slashTex,e.clone().setY(.12),{angle:.35,size:2.5,sizeEnd:3.2,life:3,color:8444159}),this.decal(this.burstRadial,e.clone().setY(.14),{size:3.2,sizeEnd:4.4,life:3,color:16752720,alpha:.8}),this.decal(this.swirlTex,e.clone().setY(.16),{size:2.2,sizeEnd:3.2,life:3,color:9423103,alpha:.8}),this.decal(this.flareTex,e.clone().setY(1.6),{size:2.4,sizeEnd:3.2,life:3,color:16765056,alpha:.8}),this.pillar(e.clone().setY(.2),7387391,7,3),this.flashLine(e.clone().add(new S(-3,.25,-1)),e.clone().add(new S(3,.25,1)),7395583,1.3,3),this.polyFlash([new ae(e.x-2.2,e.z-1.5),new ae(e.x+2.2,e.z-1.5),new ae(e.x+1.3,e.z+2.1),new ae(e.x-1.3,e.z+2.1)],6338815),this.warmupDecals=this.decals.splice(t),this.warmupCenter.copy(e);for(const n of this.warmupDecals)n.mesh.name="graphics-warmup:fx:"+n.mesh.name}clearWarmupGraphics(){var e,t;(e=this.soulArrow)==null||e.clear();for(const n of this.warmupDecals)(t=n.mesh.parent)==null||t.remove(n.mesh)}clearTransient(){var e;(e=this.soulArrow)==null||e.clear(),this.clearWarmupGraphics();for(const t of this.decals){m.scene.remove(t.mesh);const n=t.mesh.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n.dispose(),t.s0===-2&&t.mesh.geometry.dispose()}this.decals.length=0,this.arrowTrailAge=.24,this.glow.clear(),this.spark.clear(),this.smoke.clear(),this.shakeAmt=0,this.shakeOffset.set(0,0,0)}shake(e){this.shakeAmt=Math.min(1.2,Math.max(this.shakeAmt,e))}skillPlane(e,t,n,i,s,o,a,l=.72,c=!0){if(this.decals.filter(d=>d.mesh.userData.skillArt).length>=hS)return null;const h=new dt({map:e,color:i,blending:Gt,depthWrite:!1,transparent:!0,side:Ct,opacity:l,toneMapped:!1});c&&(h.onBeforeCompile=d=>{d.fragmentShader=d.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
#ifdef USE_MAP
 diffuseColor.rgb = diffuse * vec3(dot(sampledDiffuseColor.rgb, vec3(0.299, 0.587, 0.114)));
#endif`)}),h.customProgramCacheKey=()=>c?"soul-art-luminance-v1":"soul-art-native-v1";const u=new Be(ad,h);return u.name="skill-art:"+n,u.userData.skillArt={life:s,width:o,height:a},u.position.copy(t),u.scale.set(o,a,1),u.renderOrder=8,m.scene.add(u),this.decals.push({mesh:u,life:s,max:s,s0:-3,s1:-3,a0:l}),u}soulWindup(e,t,n){const i=Do[n]??Do[0],s=e.clone().add(new S(Math.sin(t)*.5,1.25,Math.cos(t)*.5));this.glow.add({pos:s,life:.12,size:.32,sizeEnd:.65,color:i.color,alpha:.4})}anchorCut(e,t){if(!e)return;const n=e.userData.skillArt;n.cutTip=t.clone(),n.cutUp=new S(0,1,0).applyQuaternion(e.quaternion),e.position.copy(t).addScaledVector(n.cutUp,n.height/2)}soulCut(e,t,n,i,s){const o=Do[n]??Do[0],a=new S(Math.sin(t),0,Math.cos(t)),l=n===2,c=i*(l?Fi.reachFraction:.36),h=e.clone().addScaledVector(a,c);if(l&&s){const v=s.clone().sub(e).setY(0).addScaledVector(a,Fi.handExtension);v.clampLength(0,i*.8),h.copy(e).add(v)}const u=h.clone();u.y+=l?i*o.height/2+Fi.groundHeight:n===0?1.55:1;const d=this.soulCutAtlas[n]??this.soulCutAtlas[0],f=this.skillPlane(d,u,o.name,16777215,o.life,i*o.width,i*o.height,.85,!1);if(f&&(f.rotation.set(o.tilt,t+(l?Math.PI/2:Math.PI),o.roll,"YXZ"),n===1&&(f.scale.x*=-1)),n===2){const v=h.clone();v.y+=Fi.groundHeight,this.anchorCut(f,v);const x=this.skillPlane(d,u,"落印·回响",ar,.12,i*.2,i*o.height,.24);x==null||x.rotation.set(0,t+Math.PI/2,o.roll,"YXZ"),this.anchorCut(x,v);const p=this.skillPlane(this.burstRadial,v,"落印·石面爆点",12162665,.26,Fi.sealWidth,Fi.sealWidth,.48);p==null||p.rotation.set(-Math.PI/2,t,0,"YXZ")}for(let v=0;v<o.sparks;v++){const x=t-.9+v/Math.max(1,o.sparks-1)*1.8,p=new S(Math.sin(x),0,Math.cos(x)),g=l?h.clone():e.clone().addScaledVector(p,i*.72);g.y+=l?Fi.groundHeight+.06:.8,this.spark.add({pos:g,vel:p.multiplyScalar(3.4).setY(.8+v%3),life:.18+v%3*.045,size:.21,sizeEnd:.02,color:o.color,alpha:.55,drag:5,gravity:7})}}soulStep(e,t){const n=new S(-Math.sin(t),0,-Math.cos(t));for(const i of[-1,1]){const s=e.clone().add(new S(Math.cos(t)*i*.32,.35,-Math.sin(t)*i*.32));this.smoke.add({pos:s,vel:n.clone().multiplyScalar(2.5).setY(.7),life:.28,size:.65,sizeEnd:1.2,color:ar,alpha:.17,drag:4,spin:i*.4})}}soulParry(e){const t=e.clone();t.y+=1.45;const n=this.skillPlane(this.flareTex,t,"见切·凝魂",ar,.24,2.1,2.1,.7);n==null||n.quaternion.copy(m.camera.quaternion);const i=this.skillPlane(this.ringTex,e.clone().setY(e.y+.1),"见切·余波",ar,.32,3.8,3.8,.28);i==null||i.rotation.set(-Math.PI/2,0,0);for(let s=0;s<7;s++){const o=s/7*Math.PI*2;this.spark.add({pos:t,vel:new S(Math.cos(o)*3,Math.sin(o)*2+1,Math.sin(o)*3),life:.21,size:.26,sizeEnd:.02,color:ar,alpha:.6,drag:5})}}burst(e,t,n=14,i=8){for(let s=0;s<n;s++){const o=Math.random()*Math.PI*2,a=i*(.4+Math.random()*.8);this.spark.add({pos:e,vel:new S(Math.cos(o)*a,2+Math.random()*i*.8,Math.sin(o)*a),life:.35+Math.random()*.35,size:.9,sizeEnd:.1,color:t,gravity:18,drag:3})}this.glow.add({pos:e,life:.25,size:5,sizeEnd:7,color:t,alpha:.9});for(let s=0;s<3;s++)this.smoke.add({pos:e.clone().add(new S(Math.random()-.5,.2,Math.random()-.5)),vel:new S((Math.random()-.5)*2,1.2,(Math.random()-.5)*2),life:.7,size:1.8,sizeEnd:3.5,color:2761776,alpha:.35,spin:.6,drag:1.5})}decal(e,t,n){const i=new dt({map:e,color:n.color,blending:Gt,transparent:!0,depthWrite:!1,side:Ct}),s=new Be(ad,i);s.position.set(t.x,n.y??.08,t.z),s.rotation.set(-Math.PI/2,n.angle??0,0,"YXZ"),n.flip&&(s.scale.x=-1),s.renderOrder=5,m.scene.add(s);const o=n.alpha??1;return this.decals.push({mesh:s,life:n.life,max:n.life,s0:n.size,s1:n.sizeEnd??n.size,a0:o}),s}pillar(e,t,n=8,i=.6){const s=new gc({map:this.pillarTex,color:t,blending:Gt,depthWrite:!1,transparent:!0}),o=new yu(s);o.center.set(.5,.05),o.position.copy(e),o.scale.set(n*.5,n,1),m.scene.add(o),this.decals.push({mesh:o,life:i,max:i,s0:-1,s1:-1,a0:1})}pillarMesh(e,t,n=7){const i=new gc({map:this.pillarTex,color:t,blending:Gt,depthWrite:!1,transparent:!0,opacity:.75}),s=new yu(i);return s.center.set(.5,0),s.position.copy(e),s.scale.set(n*.5,n,1),s.renderOrder=9,s}flashLine(e,t,n,i=1.6,s=.25){const o=new Ts(n,i,2);o.set([e,t],()=>1.5),m.scene.add(o.mesh),this.decals.push({mesh:o.mesh,life:s,max:s,s0:-2,s1:-2,a0:1})}polyFlash(e,t){const n=new kf(e.map(a=>new ae(a.x,-a.y))),i=new eh(n),s=new dt({color:t,blending:Gt,transparent:!0,depthWrite:!1,side:Ct,opacity:.7}),o=new Be(i,s);o.rotation.x=-Math.PI/2,o.position.y=.06,m.scene.add(o),this.decals.push({mesh:o,life:.5,max:.5,s0:-2,s1:-2,a0:.7})}update(e){const t=this.soulArrow;if(t){const s=t.active;if(t.update(e),s&&Number.isFinite(e)&&e>0&&(this.arrowTrailAge+=e,t.active&&this.arrowTrailAge<=.12)){t.root.updateWorldMatrix(!0,!0);const o=t.root.localToWorld(this.arrowTrailTip.set(0,0,1.8)).clone();this.glow.add({pos:o,life:.1,size:.55,sizeEnd:.05,color:14071153,alpha:.45})}}this.glow.update(e),this.spark.update(e),this.smoke.update(e);const n=innerHeight*Math.min(devicePixelRatio,2);for(const s of[this.glow,this.spark,this.smoke])s.mat.uniforms.uScale.value=n*.9;for(let s=this.decals.length-1;s>=0;s--){const o=this.decals[s];o.life-=e;const a=1-o.life/o.max,l=o.mesh.material;if(o.life<=0){m.scene.remove(o.mesh),l.dispose(),o.s0===-2&&o.mesh.geometry.dispose(),this.decals.splice(s,1);continue}if(l.opacity=o.a0*(1-a)*Math.min(1,a*10),o.s0===-3){l.opacity=o.a0*Math.min(1,a*14)*Math.pow(1-a,.7);const c=o.mesh.userData.skillArt,h=Math.sign(o.mesh.scale.x||1),u=c.height*(c.cutTip?1-a*.65:1+a*.08);o.mesh.scale.set(h*c.width*(1+a*.08),u,1),c.cutTip&&o.mesh.position.copy(c.cutTip).addScaledVector(c.cutUp,u/2)}if(o.s0>0){const c=o.s0+(o.s1-o.s0)*(1-(1-a)*(1-a));o.mesh.scale.set(Math.sign(o.mesh.scale.x||1)*c,c,c)}}this.shakeAmt*=Math.exp(-e*9);const i=this.shakeAmt;this.shakeOffset.set((Math.random()-.5)*i,(Math.random()-.5)*i*.6,(Math.random()-.5)*i)}}const ad=new nn(1,1),hl=.42,ul=10,ld=10,pS=new nn(1,1);class mS{constructor(e){_(this,"assets",[]);_(this,"stones",[]);_(this,"owner",null);_(this,"revision",-1);_(this,"castSerial",0);_(this,"warmup",[]);this.scene=e}async init(){const e="/wumingbu/assets/models/runtime-20260930/",t=await Promise.all(["boulder-skill-lod-20261007-r2.glb"].map(async n=>{try{return await ft(e+n)}catch(i){return console.warn("[stonefall] GLB加载失败",n,i),null}}));this.assets=t.filter(n=>!!n)}get ready(){return this.assets.length===1}warmupGraphics(e){if(this.ready){if(!this.warmup.length)for(let t=0;t<5;t++)this.warmup.push(this.make(t,e.clone()));this.warmup.forEach((t,n)=>{t.obj.name="graphics-warmup:stonefall:"+n,t.marker.name="graphics-warmup:stonefall-marker:"+n,t.obj.position.copy(e).add(new S((n-2)*2.8,0,1.5)),t.obj.visible=!0,t.marker.position.copy(t.obj.position).add(new S(0,.08,0)),this.scene.add(t.obj,t.marker)})}}clearWarmupGraphics(){for(const e of this.warmup)this.scene.remove(e.obj,e.marker)}get status(){return{ready:this.ready,active:this.stones.length,landed:this.stones.filter(e=>e.landed).length,max:ld,entries:this.stones.map(e=>({age:e.age,phase:e.obj.userData.stonefall.phase,at:e.at.toArray(),y:e.obj.position.y,height:e.height,impactCount:e.obj.userData.stonefall.impactCount,anchorActive:e.anchor.active===!0}))}}make(e,t){const n=new Nn,s=this.assets[e%this.assets.length].scene.clone(!0),o=[];s.traverse(x=>{if(!(x instanceof Be))return;const p=g=>{const w=g.clone();return w.transparent=!0,o.push(w),w};x.material=Array.isArray(x.material)?x.material.map(p):p(x.material),x.castShadow=!0,x.receiveShadow=!0});const a=new Mt().setFromObject(s),l=a.getSize(new S),c=1.7+e%3*.12,h=c/Math.max(l.y,.001);s.scale.multiplyScalar(h),s.position.set(-((a.min.x+a.max.x)/2)*h,-a.min.y*h,-((a.min.z+a.max.z)/2)*h),n.add(s),n.name="skill-entity:衔石:"+this.castSerial+":"+e,n.userData.stonefall={phase:"warning",impactCount:0,assetSource:"assets/models/runtime-20260930/boulder-skill-lod-20261007-r2.glb"},n.position.copy(t).setY(t.y+8),n.rotation.y=e*1.37+this.castSerial*.47,n.visible=!1;const u=Math.max(.8,Math.min(1.35,Math.max(l.x,l.z)*h*.43)),d={pos:t.clone().setY(t.y+c*.82),radius:u,obj:n,temporary:!0,active:!1},f=new dt({map:m.fx.ringTex,color:11968897,opacity:.18,blending:Gt,transparent:!0,depthWrite:!1,side:Ct}),v=new Be(pS,f);return v.name="skill-entity:衔石预兆",v.position.copy(t).setY(t.y+.08),v.rotation.x=-Math.PI/2,v.scale.setScalar(u*2.35),this.scene.add(n,v),{obj:n,at:t,anchor:d,marker:v,mats:o,age:-e*.09,landed:!1,height:c,startTilt:.16}}cast(){var i,s,o;if(!m.runtime||!m.player.alive)return!1;if(!this.ready)return(i=m.ui)==null||i.hint("落石模型未加载，衔石暂不可用","stonefall",2500),!1;if(this.stones.length+5>ld)return(s=m.ui)==null||s.hint("石阵尚未消散","stonefall",1800),!1;const e=new S(Math.sin(m.player.facing),0,Math.cos(m.player.facing)),t=new S(e.z,0,-e.x),n=[];for(let a=0;a<5;a++){let l=null;for(const c of[0,-2,-4]){for(const h of[0,3,-3,6,-6,9,-9]){const u=m.player.pos.clone().setY(0).addScaledVector(e,Math.max(3,4+a*3+c)).addScaledVector(t,h);if(m.world.clampPosition(u,1.5),m.runtime.constrainToArea(u,1.5),!(u.distanceTo(m.player.pos.clone().setY(0))<3)&&!n.some(d=>d.distanceTo(u)<3.1)&&!m.world.anchors.some(d=>Math.hypot(d.pos.x-u.x,d.pos.z-u.z)<d.radius+1.6)){l=u;break}}if(l)break}if(!l)return(o=m.ui)==null||o.hint("前方没有足够的落石空间","stonefall",1800),!1;n.push(l)}return this.owner=m.runtime,this.revision=m.world.cameraSceneRevision,this.castSerial++,n.forEach((a,l)=>this.stones.push(this.make(l,a))),m.audio.play("riser",{vol:.28,pitch:.8}),!0}land(e){e.landed=!0,e.anchor.active=!0,e.obj.position.copy(e.at),e.obj.rotation.x=0,e.obj.userData.stonefall.phase="landed",e.obj.userData.stonefall.impactCount++,m.world.anchors.push(e.anchor),m.renderer.shadowMap.needsUpdate=!0,this.scene.remove(e.marker),e.marker.material.dispose(),m.fx.burst(e.at.clone().setY(.3),11573881,8,5),m.audio.play("boom",{vol:.45,pitch:.82+(e.height-1.7)*.8}),m.fx.shake(.25);for(const t of m.enemies.inRadius(e.at,3))m.enemies.damage(t,60,e.at,{knock:18,kind:"burst"}),t.state!=="dead"&&(t.state="stun",t.timer=2)}update(e){if(this.stones.length){if(this.owner!==m.runtime||this.revision!==m.world.cameraSceneRevision||!m.player.alive){this.clear();return}if(!(e<=0))for(let t=this.stones.length-1;t>=0;t--){const n=this.stones[t];if(n.age+=e,n.age<0)continue;if(n.obj.visible=!0,!n.landed){const s=Math.min(1,n.age/hl);n.obj.userData.stonefall.phase="falling",n.obj.position.y=n.at.y+(1-s*s)*8,n.obj.rotation.x=n.startTilt*(1-s),n.marker.material.opacity=.12+s*.14,n.age>=hl&&this.land(n)}const i=n.age-hl;if(i>ul-1.2){const s=it.clamp((i-ul+1.2)/1.2,0,1);n.obj.position.y=n.at.y-s*.24;for(const o of n.mats)o.transparent=!0,o.opacity=1-s}i>=ul&&(this.remove(n),this.stones.splice(t,1))}}}remove(e){e.anchor.active=!1;const t=m.world.anchors.indexOf(e.anchor);t>=0&&m.world.anchors.splice(t,1),m.chain.cancelTemporaryAnchor(e.anchor),m.player.onAnchorRemoved(e.anchor),this.scene.remove(e.obj,e.marker),m.renderer.shadowMap.needsUpdate=!0,e.landed||e.marker.material.dispose(),e.mats.forEach(n=>n.dispose())}clear(){for(const e of this.stones)this.remove(e);this.stones.length=0,this.owner=null}}function gS(r,e,t){let n=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const o=t[i],a=t[s];o.y>e!=a.y>e&&r<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function vS(r,e,t,n){const i=e.clone().sub(r),s=n.clone().sub(t),o=i.x*s.y-i.y*s.x;if(Math.abs(o)<1e-9)return null;const a=t.clone().sub(r),l=(a.x*s.y-a.y*s.x)/o,c=(a.x*i.y-a.y*i.x)/o;return l<0||l>1||c<0||c>1?null:r.clone().addScaledVector(i,l)}function cd(r,e,t,n,i,s){const o=i-t,a=s-n,l=o*o+a*a||1e-9,c=Math.max(0,Math.min(1,((r-t)*o+(e-n)*a)/l));return Math.hypot(r-(t+o*c),e-(n+a*c))}function hd(r){let e=0;for(let t=0,n=r.length-1;t<r.length;n=t++)e+=(r[n].x+r[t].x)*(r[n].y-r[t].y);return Math.abs(e/2)}const dl=new S;function Ei(r,e,t=""){dl.copy(e).project(m.camera);const n=document.createElement("div");n.className="pop "+t,n.textContent=r,n.style.left=(dl.x+1)/2*innerWidth+"px",n.style.top=(1-dl.y)/2*innerHeight+"px",document.getElementById("hud").appendChild(n),setTimeout(()=>n.remove(),1200)}const Io={melee:-99,loop:-99,line:-99,hook:-99},ud={melee:"斩",loop:"锁",line:"绞",hook:"勾"};function Es(r){var t;Io[r]=m.time,(t=m.runtime)==null||t.markUsed(r==="melee"?"melee":r==="loop"?"loop":r==="line"?"line":"hook");const e=Object.keys(Io).filter(n=>m.time-Io[n]<5);if(dd(e),e.length>=m.prog.modifiers.soulBurstStyles){for(const n of e)Io[n]=-99;dd([]),xS()}}function dd(r){const e=document.getElementById("styles");e&&(e.innerHTML=Object.keys(ud).map(t=>`<span class="${r.includes(t)?"on":""}">${ud[t]}</span>`).join(""))}function xS(){const r=m.player.pos;m.runtime&&(m.runtime.soulBurstSeen=!0),An(.14),m.fx.shake(1.1),m.fx.pillar(r.clone(),10475775,16,.9),m.fx.decal(m.fx.ringTex,r,{size:4,sizeEnd:24,life:.7,color:8374527,alpha:1}),m.fx.decal(m.fx.burstRadial,r,{size:8,sizeEnd:26,life:.45,color:12575999,alpha:1,y:.35}),m.fx.decal(m.fx.burstTex,r,{size:6,sizeEnd:22,life:.6,color:16777215,alpha:.9,y:.3});for(let t=0;t<60;t++){const n=Math.random()*Math.PI*2,i=10+Math.random()*14;m.fx.spark.add({pos:r.clone().setY(1),vel:new S(Math.cos(n)*i,3+Math.random()*6,Math.sin(n)*i),life:.7,size:1.2,sizeEnd:.1,color:11460863,drag:2,gravity:6})}let e=0;for(const t of m.enemies.inRadius(r,10*m.prog.modifiers.soulBurstRadius))m.enemies.damage(t,t.type==="brute"?15:99,r,{knock:18,kind:"burst"})&&e++;Ei(`魂爆 ×${e}`,r.clone().setY(3),"big blue"),m.audio.play("soulburst",{vol:1}),m.audio.play("boom",{vol:.7,pitch:1.2}),m.grade.punch(1),m.grade.chroma(.7)}const yS=4.5,_S=.35,MS=.22,SS=5,wS=22,fd=18,bS=75;new Ae(16730662);class TS{constructor(e){_(this,"trail",[]);_(this,"trailRibbon",new Ts(16777215,.75,700));_(this,"loops",[]);_(this,"stake",null);_(this,"stakeObj");_(this,"tether",new Ts(16756800,.4,2));_(this,"hook",null);_(this,"hookRibbon",new Ts(16765088,.35,2));_(this,"link",null);_(this,"forceTrail",!1);_(this,"drag",null);_(this,"dragVol",0);_(this,"hookReady",0);e.add(this.trailRibbon.mesh,this.tether.mesh,this.hookRibbon.mesh),this.stakeObj=new Be(new $c(.22,1.4,6),new dt({color:16752720})),this.stakeObj.rotation.x=Math.PI,this.stakeObj.visible=!1,e.add(this.stakeObj)}sample(){const e=m.player.pos,t=new ae(e.x,e.z),n=this.trail[this.trail.length-1];if(n&&n.p.distanceTo(t)<_S||(this.trail.push({p:t,t:m.time}),this.trail.length<4))return;const i=this.trail[this.trail.length-2].p,s=t;for(let o=0;o<this.trail.length-4;o++){const a=vS(i,s,this.trail[o].p,this.trail[o+1].p);if(!a)continue;const l=[a,...this.trail.slice(o+1,this.trail.length-1).map(c=>c.p.clone())];if(!(hd(l)<SS)){this.closeLoop(l),this.trail=[{p:t.clone(),t:m.time}];return}}}closeLoop(e){var s;const t=new ae;for(const o of e)t.add(o);t.divideScalar(e.length);const n=m.enemies.alive.filter(o=>o.state!=="spawn"&&o.state!=="held"&&gS(o.pos.x,o.pos.z,e));for(const o of n)o.state="held",o.vel.set(0,0,0);const i=new Ts(16760944,.8,e.length+2);m.scene.add(i.mesh),this.loops.push({poly:e,c:t,t:0,enemies:n,ribbon:i}),(s=m.runtime)==null||s.markUsed("loop"),m.fx.polyFlash(e,8396816),An(.03),m.audio.play("lock",{vol:.7}),m.audio.play("chain",{vol:.5}),m.prog.fire("loopClose",e,t,n)}bindLoop(e){const t=new S(e.c.x,0,e.c.y),n=m.prog.modifiers.loopBind;for(const i of e.enemies)i.state="stun",i.timer=n,i.vel.set(0,0,0),i.bound=!0,setTimeout(()=>{i.bound=!1},n*1e3);m.fx.decal(m.fx.ringTex,t,{size:2,sizeEnd:8,life:.5,color:10475775}),m.audio.play("sheet",{vol:.8,pitch:.8}),e.enemies.length&&(m.fx.shake(.3),Ei(`定身 ×${e.enemies.length}`,t.clone().setY(2.5),"blue"))}updateLoops(e){for(let t=this.loops.length-1;t>=0;t--){const n=this.loops[t];n.t+=e;const i=Math.min(1,n.t/MS),s=1-.55*i*i,o=n.poly.map(a=>new S(n.c.x+(a.x-n.c.x)*s,.25,n.c.y+(a.y-n.c.y)*s));n.ribbon.set(o,()=>1.3,!0);for(const a of n.enemies)a.pos.x+=(n.c.x-a.pos.x)*e*3,a.pos.z+=(n.c.y-a.pos.z)*e*3;i<1||(m.prog.modifiers.loopBind>0?this.bindLoop(n):this.detonate(n),m.scene.remove(n.ribbon.mesh),n.ribbon.mesh.geometry.dispose(),n.ribbon.mat.dispose(),this.loops.splice(t,1))}}detonate(e){const t=e.enemies.length,n=new S(e.c.x,0,e.c.y);let i=0;for(const o of e.enemies)o.state!=="dead"&&(o.state="chase",m.enemies.damage(o,(80+t*6)*m.prog.modifiers.loopDamage,n,{knock:10,kind:"loop"})&&i++);for(let o=0;o<e.poly.length;o+=2){const a=e.poly[o],l=new S(e.c.x+(a.x-e.c.x)*.45,.4,e.c.y+(a.y-e.c.y)*.45);m.fx.spark.add({pos:l,vel:new S((Math.random()-.5)*6,5+Math.random()*6,(Math.random()-.5)*6),life:.6,size:.9,sizeEnd:.1,color:16756816,gravity:16})}const s=Math.sqrt(hd(e.poly)/Math.PI);m.fx.decal(m.fx.ringTex,n,{size:s*.8,sizeEnd:s*2.6,life:.55,color:16740400}),m.fx.decal(m.fx.swirlTex,n,{size:s*.6,sizeEnd:s*2,life:.5,color:16752736,alpha:.85,y:.4}),t>0&&(m.fx.pillar(n.clone(),16738864,6+Math.min(t,12),.6),An(Math.min(.05+t*.008,.16)),m.fx.shake(.35+Math.min(t*.05,.7)),Ei(`锁阵 ×${t}`,n.clone().setY(2.5),t>=8?"big":""),m.audio.play("boom",{vol:.5+Math.min(t,14)*.03}),m.audio.play("crack",{vol:.4+Math.min(t,10)*.03})),i>0&&Es("loop"),m.prog.fire("loopDetonate",n,s)}cutTrailNear(e,t){const n=this.trail;for(let i=n.length-2;i>=0;i--)if(cd(e.x,e.z,n[i].p.x,n[i].p.y,n[i+1].p.x,n[i+1].p.y)<t)return this.trail=n.slice(i+2),!0;return!1}plantOrSnap(){if(!this.stake){this.stake=m.player.pos.clone(),this.stakeObj.position.copy(this.stake).setY(.6),this.stakeObj.visible=!0,m.fx.decal(m.fx.ringTex,this.stake,{size:.5,sizeEnd:3,life:.35,color:16752704}),m.fx.burst(this.stake.clone().setY(.3),16752704,8,4),m.audio.play("hookHit",{vol:.8,pitch:1.2});return}this.snap()}snap(){var c;const e=this.stake,t=m.player.pos;this.stake=null,this.stakeObj.visible=!1,this.tether.clear();const n=new S(t.x-e.x,0,t.z-e.z),i=n.length();if(i<1)return;(c=m.runtime)==null||c.markUsed("line"),n.normalize();const s=new S(-n.z,0,n.x);let o=0,a=0;const l=[];for(const h of m.enemies.alive){if(h.state==="spawn"||cd(h.pos.x,h.pos.z,e.x,e.z,t.x,t.z)>1+h.def.radius)continue;a++,l.push(h),h.shield=!1;for(const v of h.shieldMeshes)v.visible=!1;const u=Math.sign(s.dot(new S(h.pos.x-e.x,0,h.pos.z-e.z)))||1,d=h.pos.clone().addScaledVector(s,-u),f=(h.type==="brute"?150:95)*m.prog.modifiers.meleeDamage;m.enemies.damage(h,f,d,{knock:12,kind:"line"})&&o++}m.prog.fire("snap",e,t,l),m.fx.flashLine(e.clone().setY(.6),t.clone().setY(.6),16773312,1.6,.25);for(let h=0;h<i;h+=.8){const u=e.clone().addScaledVector(n,h).setY(.6);m.fx.spark.add({pos:u,vel:s.clone().multiplyScalar((Math.random()-.5)*16).setY(2+Math.random()*3),life:.4,size:.8,sizeEnd:.1,color:16765056,drag:3,gravity:10})}a>0&&(An(Math.min(.06+a*.01,.15)),m.fx.shake(.5),Ei(`绞 ×${a}`,t.clone().setY(2.5)),m.audio.play("sheet",{vol:.75,pitch:.9}),m.audio.play("hit",{vol:.5})),o>0&&Es("line")}pickHookTarget(e,t){let n=null,i=1/0;const s=m.input.isTouch?45:32,o=Math.cos(s*Math.PI/180),a=(l,c)=>{const h=new S(l.x-e.x,0,l.z-e.z),u=h.length(),d=fd*m.prog.modifiers.hookRange;if(u>d||u<1.2)return 1/0;const f=h.divideScalar(u).dot(t);return f<o?1/0:u*(2-f)+c};for(const l of m.world.anchors){if(l.active===!1)continue;const c=a(l.pos,2);c<i&&(i=c,n={kind:"anchor",a:l})}for(const l of m.enemies.alive){if(l.state==="spawn"||l.state==="held")continue;const c=a(l.pos,l.type==="brute"?-6:0);c<i&&(i=c,n={kind:"enemy",e:l})}return n??{kind:"none",p:e.clone().addScaledVector(t,fd*.7)}}resetTransient(){var e;for(const t of this.loops){for(const n of t.enemies)n.state==="held"&&(n.state="chase");m.scene.remove(t.ribbon.mesh),t.ribbon.mesh.geometry.dispose(),t.ribbon.mat.dispose()}this.loops.length=0,this.trail.length=0,this.trailRibbon.clear(),this.stake=null,this.stakeObj.visible=!1,this.tether.clear(),this.hook=null,this.hookReady=0,this.link=null,this.hookRibbon.clear(),(e=this.drag)==null||e.stop(),this.drag=null,this.dragVol=0}throwHook(e,t){if(this.hook)return!1;const n=performance.now()<this.hookReady;if(this.hookReady=0,m.player.hookCd>0&&!n)return!1;m.player.hookCd=.35;const i=this.pickHookTarget(e,t),s=i.kind==="anchor"?i.a.pos.clone():i.kind==="enemy"?i.e.pos.clone().setY(1):i.p.setY(1);return this.hook={pos:m.player.weaponHandPosition(),dest:s,target:i,back:!1},!0}updateHook(e){var s;const t=this.hook,n=m.player.weaponHandPosition();if(t){t.target.kind==="enemy"&&t.dest.copy(t.target.e.pos).setY(1);const o=t.back?n:t.dest,a=o.clone().sub(t.pos),l=bS*e;a.length()<=l?(t.pos.copy(o),t.back?this.hook=null:t.target.kind==="none"||t.target.kind==="enemy"&&t.target.e.state==="dead"?t.back=!0:(this.hook=null,m.player.onHook(t.target),m.prog.fire(t.target.kind==="anchor"?"hookHitAnchor":"hookHitEnemy",t.target.kind==="enemy"?t.target.e:t.target.a))):t.pos.addScaledVector(a.normalize(),l),m.fx.glow.add({pos:t.pos,life:.12,size:1.2,color:16756848})}const i=((s=this.hook)==null?void 0:s.pos)??this.link;i?this.hookRibbon.set([n,i.clone()],()=>1.2):this.hookRibbon.clear()}cancelTemporaryAnchor(e){var t;this.link===e.pos&&(this.link=null),((t=this.hook)==null?void 0:t.target.kind)==="anchor"&&this.hook.target.a===e&&(this.hook.back=!0,this.hook.target={kind:"none",p:e.pos.clone()})}update(e){var i;if(!m.player.alive){this.resetTransient();return}if(e<=0)return;this.sample();const t=yS*m.prog.modifiers.trailLife;for(;this.trail.length&&m.time-this.trail[0].t>t;)this.trail.shift();const n=this.trail.map(s=>new S(s.p.x,.15,s.p.y));if(n.push(m.player.pos.clone().setY(.15)),this.trailRibbon.set(n,s=>{const o=s<this.trail.length?(m.time-this.trail[s].t)/t:0;return(1-o)*(1-o)*1.1}),this.updateLoops(e),this.stake){const s=m.player.pos;Math.hypot(s.x-this.stake.x,s.z-this.stake.z)>wS?this.snap():(this.tether.set([this.stake.clone().setY(.6),s.clone().setY(.6)],()=>.7+Math.sin(m.time*30)*.3),this.stakeObj.rotation.y+=e*4)}if(this.updateHook(e),m.audio.ready){this.drag||(this.drag=m.audio.loop("chain",0));const s=m.player.vel.length(),o=this.trail.length,a=Math.min(.32,o/120*Math.min(s/9.5,1.4)*.32);this.dragVol+=(a-this.dragVol)*(1-Math.exp(-6*e)),(i=this.drag)==null||i.setVol(this.dragVol)}}}const ES={update:(r,e,t)=>{const n=.25+Math.sin(e*2.4)*.16;r.position.y=n+0;const i=t==="chase"?.12:.03;r.rotation.x=i+Math.sin(e*3.1)*.03,r.rotation.z=Math.sin(e*1.7)*.045;const s=1+Math.sin(e*2.4)*.02;r.scale.setScalar((r.userData.baseScale??1)*s)}},pd={update:(r,e,t)=>{const n=r.userData.baseScale??1;if(t==="chase"){const i=Math.abs(Math.sin(e*7))*.07;r.position.y=i,r.rotation.z=Math.sin(e*7)*.06,r.rotation.x=.04,r.scale.setScalar(n*(1+Math.sin(e*14)*.015))}else t==="windup"?(r.rotation.x=-.22,r.rotation.z=0,r.scale.setScalar(n*1.06)):t==="recover"?(r.rotation.x=.2,r.scale.setScalar(n*.96)):t==="stun"?(r.rotation.z=Math.sin(e*40)*.1,r.rotation.x=.05,r.scale.setScalar(n)):(r.rotation.x=.02,r.rotation.z=0,r.position.y=Math.sin(e*1.8)*.02,r.scale.setScalar(n))}},AS={update:(r,e,t)=>{const n=r.userData.baseScale??1;t==="chase"?(r.position.y=Math.abs(Math.sin(e*3.2))*.22,r.rotation.z=Math.sin(e*3.2)*.09,r.rotation.x=.05):t==="windup"?(r.rotation.x=-.3,r.position.y=.15,r.scale.setScalar(n*1.08)):t==="recover"?(r.rotation.x=.28,r.position.y=-.1,r.scale.setScalar(n*.94)):t==="stun"?(r.rotation.x=Math.sin(e*30)*.06,r.position.y=0):(r.rotation.x=.03,r.position.y=Math.sin(e*1.4)*.04)}},CS=1.35;function RS(r){switch(r){case"minion":return ES;case"shield":return pd;case"brute":return AS;case"cutter":return pd}}const PS={minion:{hp:40,speed:4.2,radius:.55,scale:1.7,dmg:8,range:1.6,windup:.55,mass:1},shield:{hp:90,speed:3.4,radius:.65,scale:1.8,dmg:12,range:1.8,windup:.7,mass:1.6},cutter:{hp:30,speed:7.2,radius:.5,scale:1.6,dmg:6,range:1.4,windup:.35,mass:.8,tint:4243711},brute:{hp:420,speed:2.6,radius:1.3,scale:3.6,dmg:22,range:3.2,windup:1,mass:5,tint:16728096}},LS=[[-4,0,-1],[-1.3,0,1.5],[1.6,0,1.2],[4,0,-.8]],DS=["minion","shield","cutter","brute"],ni="/wumingbu/assets/models/",It=new S;class IS{constructor(){_(this,"list",[]);_(this,"assets",{});_(this,"spawnT",1);_(this,"bruteT",14);_(this,"elapsed",0);_(this,"warmupList",[]);_(this,"warmMaterials",new Map);_(this,"released",new WeakSet);_(this,"endless",!1);_(this,"onSpawn",null);_(this,"usingGenModels",{minion:!1,shield:!1,brute:!1,cutter:!1})}archiveAsset(e){return this.assets[e]}async init(){const e=ni+"runtime-20260930/actors/",t=ni+"gen/",[n,i,s,o,a,l,c]=await Promise.all([ft(e+"ghost_wisp.glb").then(async u=>u??await ft(ni+"rigged/ghost_wisp.glb")??await ft(t+"ghost_wisp.glb")),ft(e+"ghost_shield.glb").then(async u=>u??await ft(ni+"rigged/ghost_shield.glb")??await ft(t+"ghost_shield.glb")),ft(e+"ghost_brute.glb").then(async u=>u??await ft(ni+"rigged/ghost_brute.glb")??await ft(t+"ghost_brute.glb")),ft(e+"ghost_cutter.glb").then(async u=>u??await ft(ni+"rigged/ghost_cutter.glb")??await ft(t+"ghost_cutter.glb")),ft(ni+"skeleton-minion.glb"),ft(ni+"skeleton-warrior.glb"),ft(ni+"skeleton-rogue.glb")]);this.assets={minion:n??a,shield:i??l,brute:s??l,cutter:o??c},this.usingGenModels={minion:!!n,shield:!!i,brute:!!s,cutter:!!o};const h=Object.values(this.usingGenModels).filter(Boolean).length;h&&console.log(`[enemies] 已启用 ${h}/4 个 AI 生成的鬼怪模型`)}get alive(){return this.list.filter(e=>e.state!=="dead")}warmupGraphics(e=new S){this.clearWarmupGraphics(),DS.forEach((t,n)=>{const i=LS[n],s=e.clone().add(new S(i[0],i[1],i[2])),o=this.createInstance(t,s,!0);o.state="chase",o.timer=0,o.pos.y=0,o.obj.rotation.y=(n-1.5)*.5,m.scene.add(o.obj),this.warmupList.push(o)})}createInstance(e,t,n=!1){const i=PS[e],s=this.assets[e],o=Qo(s);o.scale.setScalar(i.scale);const a=n?this.warmMaterials.get(e):void 0,l=[],c=[];if(o.traverse(p=>{const g=p;if(!g.isMesh)return;const w=a?a[l.length]:void 0;if(a&&!w)throw new Error("Enemy warmup material slot missing: "+e);let M;w?M=w:(M=g.material.clone(),i.tint&&M.color.lerp(new Ae(i.tint),.35),M.metalness=.05,M.roughness=.85,ip(M,e==="cutter"?6344959:e==="brute"?16740432:10471679,e==="brute"?.55:.7,2.2),M.emissive=new Ae(1185824)),g.material=M,l.push(M),/shield/i.test(p.name)&&c.push(p),g.castShadow=e==="brute"}),n&&!a&&this.warmMaterials.set(e,l),a&&l.length!==a.length)throw new Error("Enemy warmup mesh topology changed: "+e);if(e!=="shield")for(const p of c)p.visible=!1;const h=i.scale*1;o.position.copy(t).setY(-h);const u=new oh(o),d=s.clips,f=(...p)=>{const g=np(d,...p);return g?u.clipAction(g):void 0},v={idle:f("Idle","Skeletons_Idle","Float"),walk:f("Walk",e==="cutter"?"Running_A":"Walking_A","Float","Walking_D","Running_B"),attack:f("Attack",e==="brute"?"2H_Melee_Attack_Chop":"1H_Melee_Attack_Chop","1H_Melee_Attack_Slice_Diagonal"),hit:f("Hit","Hit_A","Hit_B"),rise:f("Skeletons_Awaken_Floor","Spawn_Ground","Skeletons_Awaken_Standing"),death:f("Death","Death_A","Death_B")},x={type:e,def:i,obj:o,mixer:u,acts:v,pos:o.position,vel:new S,knock:new S,hp:i.hp,state:"spawn",timer:.45,cd:0,shield:e==="shield",mats:l,shieldMeshes:c,flash:0,yVel:0,spin:0,proc:this.usingGenModels[e]&&v.walk===void 0,procPhase:Math.random()*10,baseScale:i.scale,anim:RS(e),spawnDepth:h};return o.userData.baseScale=i.scale,this.play(x,"walk"),x}releaseInstance(e,t=!1){var i;if(this.released.has(e))return;this.released.add(e),(i=e.obj.parent)==null||i.remove(e.obj),e.mixer.stopAllAction(),e.mixer.uncacheRoot(e.obj);const n=new Set;e.obj.traverse(s=>{const o=s;o.isSkinnedMesh&&n.add(o.skeleton)});for(const s of n)s.dispose();if(!t)for(const s of new Set(e.mats))s.dispose()}clearWarmupGraphics(){if(this.warmupList.length){for(const e of[...this.warmupList])this.releaseInstance(e,!0);this.warmupList.length=0}}clearAll(){this.clearWarmupGraphics();for(const e of[...this.list])this.releaseInstance(e);this.list=[],this.spawnT=1,this.bruteT=14,this.elapsed=0}spawn(e,t){var i;const n=this.createInstance(e,t);return m.scene.add(n.obj),this.list.push(n),(i=this.onSpawn)==null||i.call(this,e),m.fx.pillar(t.clone(),e==="brute"?16728096:5934335,e==="brute"?10:5,.5),n}play(e,t,n=.12,i=!1){const s=e.acts[t];!s||s===e.cur||(s.reset(),i&&(s.setLoop(Oc,1),s.clampWhenFinished=!0),s.play(),e.cur&&e.cur.crossFadeTo(s,n,!1),e.cur=s)}inRadius(e,t){return this.list.filter(n=>n.state!=="dead"&&Math.hypot(n.pos.x-e.x,n.pos.z-e.z)<t+n.def.radius)}damage(e,t,n,i){if(e.state==="dead")return!1;if(It.set(e.pos.x-n.x,0,e.pos.z-n.z),It.lengthSq()<1e-6&&It.set(Math.random()-.5,0,Math.random()-.5),It.normalize(),e.shield){const a=new S(Math.sin(e.obj.rotation.y),0,Math.cos(e.obj.rotation.y)).dot(It)<-.35;if((i.kind==="melee"||i.kind==="burst")&&a)return m.fx.burst(e.pos.clone().setY(1.1).addScaledVector(It,-.6),16765040,8,6),e.knock.addScaledVector(It,i.knock*.3),e.flash=.06,m.audio.play("clang",{vol:.6,pitch:1.1}),m.fx.spark.add({pos:e.pos.clone().setY(1.2),vel:new S(-It.x*6,4,-It.z*6),life:.3,size:.9,color:16765040}),!1;(i.kind==="loop"||i.kind==="hook"||i.kind==="flail")&&this.breakShield(e)}return e.bound&&(t*=1.5),e.hp-=t,e.flash=.12,e.knock.addScaledVector(It,i.knock/e.def.mass),e.hp<=0?(this.kill(e,It,i.knock),!0):((e.type==="brute"?t>60:!0)&&e.state!=="held"&&(e.state="stun",e.timer=e.type==="brute"?.4:.3,this.play(e,"hit",.05,!0)),!1)}breakShield(e){if(e.shield){e.shield=!1;for(const t of e.shieldMeshes)t.visible=!1;m.fx.burst(e.pos.clone().setY(1.2),16760912,16,8)}}kill(e,t,n){var i,s;e.state="dead",e.timer=.55,e.vel.copy(t).multiplyScalar(4+n*.9/e.def.mass),e.yVel=5+Math.min(n,20)*.35,e.spin=(Math.random()-.5)*18,e.acts.death?this.play(e,"death",.08,!0):(i=e.cur)==null||i.stop(),qf(1),(s=m.runtime)==null||s.onKill(e.type==="brute"?12:e.type==="shield"?4:2),m.prog.fire("kill",e),m.fx.burst(e.pos.clone().setY(1),16732208,10,7),m.audio.play("die",{vol:.45,pitch:e.type==="brute"?.7:1.1}),m.audio.play("crack",{vol:e.type==="brute"?.6:.3,pitch:e.type==="brute"?.8:1.2})}update(e){this.direct(e);const t=m.player.pos,n=this.list;for(let i=n.length-1;i>=0;i--){const s=n[i];if(s.mixer.update(e),s.proc&&s.state!=="dead"&&(s.obj.rotation.order="YXZ",s.anim.update(s.obj,m.time+s.procPhase,s.state,e)),s.flash>0){s.flash-=e;const a=Math.max(0,s.flash/.12);for(const l of s.mats)l.emissive.setRGB(.07+a*1.5,.09+a*1.1,.12+a*1)}if(s.state==="dead"){if(s.timer-=e,s.pos.addScaledVector(s.vel,e),s.yVel-=32*e,s.pos.y=Math.max(0,s.pos.y+s.yVel*e),s.proc?(s.obj.rotation.order="YXZ",s.obj.rotation.x=Math.min(CS,s.obj.rotation.x+e*5)):(s.obj.rotation.y+=s.spin*e,s.obj.rotation.x+=s.spin*.4*e),s.timer<=0){const a=s.pos.clone().setY(1);m.fx.decal(m.fx.swirlTex,s.pos,{size:.8,sizeEnd:3.2,life:.55,color:9423103,alpha:.8,y:.3});for(let l=0;l<10;l++)m.fx.glow.add({pos:a,vel:new S((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5),life:.8,size:.8,sizeEnd:.1,color:7319807,drag:2});this.releaseInstance(s),n.splice(i,1)}continue}if(s.state==="held")continue;if(s.state==="spawn"){s.timer-=e,s.pos.y=-s.spawnDepth*Math.max(0,s.timer/.45),s.timer<=0&&(s.pos.y=0,s.state="chase");continue}It.set(t.x-s.pos.x,0,t.z-s.pos.z);const o=It.length();if(It.normalize(),s.cd-=e,s.state==="stun")s.timer-=e,s.timer<=0&&(s.state="chase",this.play(s,"walk"));else if(s.state==="chase")s.vel.lerp(It.clone().multiplyScalar(s.def.speed),1-Math.exp(-6*e)),this.face(s,Math.atan2(s.vel.x,s.vel.z),e,10),this.play(s,"walk"),o<s.def.range&&s.cd<=0&&m.player.alive&&(s.state="windup",s.timer=s.def.windup,s.vel.set(0,0,0),this.play(s,"attack",.08,!0),s.acts.attack&&(s.acts.attack.timeScale=s.acts.attack.getClip().duration*.55/s.def.windup),m.fx.decal(m.fx.ringTex,s.pos,{size:s.def.range*.6,sizeEnd:s.def.range*2,life:s.def.windup,color:16722448,alpha:.55}));else if(s.state==="windup"){if(this.face(s,Math.atan2(It.x,It.z),e,4),s.timer-=e,s.timer<=0){const a=new S(Math.sin(s.obj.rotation.y),0,Math.cos(s.obj.rotation.y));o<s.def.range+.7&&a.dot(It)>.3&&m.player.hurt(s.def.dmg,s.pos),s.type==="brute"&&(m.fx.decal(m.fx.ringTex,s.pos.clone().addScaledVector(a,2),{size:2,sizeEnd:6,life:.4,color:16736304}),m.fx.shake(.5)),s.state="recover",s.timer=.5,s.cd=1.2+Math.random()*.8}}else s.state==="recover"&&(s.timer-=e,s.timer<=0&&(s.state="chase"));s.type==="cutter"&&m.chain.cutTrailNear(s.pos,.9)&&m.fx.burst(s.pos.clone().setY(.6),4243711,12,6),s.state!=="chase"&&s.vel.multiplyScalar(Math.exp(-10*e)),s.pos.addScaledVector(s.vel,e).addScaledVector(s.knock,e),s.knock.multiplyScalar(Math.exp(-7*e))}this.separate();for(const i of n)i.state!=="dead"&&i.state!=="held"&&m.world.collide(i.pos,i.def.radius)}face(e,t,n,i){let s=t-e.obj.rotation.y;s=Math.atan2(Math.sin(s),Math.cos(s)),e.obj.rotation.y+=s*(1-Math.exp(-i*n))}separate(){const e=this.list;for(let t=0;t<e.length;t++){const n=e[t];if(!(n.state==="dead"||n.state==="held"))for(let i=t+1;i<e.length;i++){const s=e[i];if(s.state==="dead"||s.state==="held")continue;const o=s.pos.x-n.pos.x,a=s.pos.z-n.pos.z,l=n.def.radius+s.def.radius,c=o*o+a*a;if(c<l*l&&c>1e-6){const h=Math.sqrt(c),u=(l-h)/h,d=s.def.mass/(n.def.mass+s.def.mass),f=1-d;n.pos.x-=o*u*d,n.pos.z-=a*u*d,s.pos.x+=o*u*f,s.pos.z+=a*u*f}}}}direct(e){if(!m.player.alive||!this.endless)return;this.elapsed+=e,this.spawnT-=e,this.bruteT-=e;const t=this.elapsed,n=Math.min(22+t*.6,75),i=this.alive.length;if(this.spawnT<=0&&i<n){this.spawnT=1.6;const s=Math.random()*Math.PI*2,o=15+Math.random()*7,a=m.player.pos,l=new S(a.x+Math.cos(s)*o,0,a.z+Math.sin(s)*o);m.world.clampPosition(l,3);const c=5+Math.floor(Math.random()*4);for(let h=0;h<c;h++){const u=Math.random(),d=t>45&&u<.15?"cutter":t>20&&u<.35?"shield":"minion";this.spawn(d,l.clone().add(new S((Math.random()-.5)*5,0,(Math.random()-.5)*5)))}}if(this.bruteT<=0&&(this.bruteT=22,this.list.filter(s=>s.type==="brute"&&s.state!=="dead").length<3)){const s=Math.random()*Math.PI*2,o=m.player.pos.clone().add(new S(Math.cos(s)*14,0,Math.sin(s)*14));m.world.clampPosition(o,3),this.spawn("brute",o)}}}function NS(r,e,t=0){if(![0,1,2].includes(r)||!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<0)throw new Error("Invalid combat clip durations");const n=[13/30,16/30,2][r];if(Math.abs(e-n)>.001||r<2&&t<=0||r===2&&t!==0)throw new Error("Unexpected UAL2 donor clip; refuse guessed timing");const i=e+t,s=r===0?[[0,0],[.14,.18],[.22,.225],[.3,.3],[.34,e],[.58,i]]:r===1?[[0,0],[.17,.21],[.25,.24],[.33,.32],[.38,e],[.62,i]]:[[0,0],[.1,.2],[.22,.42],[.38,.65],[.52,.9],[.82,i]];for(let o=0;o<s.length;o++){const[a,l]=s[o];if(!Number.isFinite(a)||!Number.isFinite(l)||a<0||l<0||l>i||o>0&&(a<=s[o-1][0]||l<=s[o-1][1]))throw new Error("Invalid combat markers")}return s}function US(r,e){if(!Number.isFinite(e)||e<0||r.length<2)throw new Error("Invalid animation game time");for(let t=1;t<r.length;t++){const[n,i]=r[t],[s,o]=r[t-1];if(e<=n)return o+(i-o)*((e-s)/(n-s))}return r[r.length-1][1]}const No=.16,md=11,fl=9.5,kS=30,Uo=.2,OS=.35,ii=[{hit:.22,total:.58,cancel:.34,r:3,arc:150,dmg:22,knock:8,lunge:5.8,stop:.035,clip:"1H_Melee_Attack_Slice_Diagonal"},{hit:.25,total:.62,cancel:.38,r:3,arc:150,dmg:24,knock:8,lunge:5.8,stop:.035,clip:"1H_Melee_Attack_Slice_Horizontal"},{hit:.38,total:.82,cancel:.52,r:3.8,arc:220,dmg:45,knock:20,lunge:9.5,stop:.08,clip:"1H_Melee_Attack_Chop"}],xs=new S,gd=new Map;function FS(r){const e=gd.get(r);if(e)return e;const t=r.image,n=document.createElement("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0);const s=i.getImageData(0,0,n.width,n.height),o=s.data,a=new Ae,l={h:0,s:0,l:0};for(let h=0;h<o.length;h+=4)if(a.setRGB(o[h]/255,o[h+1]/255,o[h+2]/255),a.getHSL(l),!(l.s<.12)){if(l.h>.18&&l.h<.45)a.setHSL(.6,l.s*.5,Math.min(.5,l.l*.95));else if(l.h<.12||l.h>.95)a.setHSL(.99,l.s*.85,Math.min(.42,l.l*.9));else if(l.h>.5&&l.h<.8)a.setHSL(.6,l.s*.6,Math.min(.55,l.l*1.05));else continue;o[h]=a.r*255,o[h+1]=a.g*255,o[h+2]=a.b*255}i.putImageData(s,0,0);const c=new Zc(n);return c.colorSpace=r.colorSpace,c.flipY=r.flipY,c.magFilter=r.magFilter,c.minFilter=r.minFilter,gd.set(r,c),c}class BS{constructor(){_(this,"obj",new Nn);_(this,"pos",this.obj.position);_(this,"vel",new S);_(this,"facing",0);_(this,"speedMul",1);_(this,"hookCd",0);_(this,"shield",0);_(this,"hp",100);_(this,"maxHp",100);_(this,"state","move");_(this,"t",0);_(this,"combo",0);_(this,"comboWindow",0);_(this,"hitDone",!1);_(this,"dashCd",0);_(this,"iframes",0);_(this,"dashDir",new S);_(this,"perfect",0);_(this,"rushFrom",new S);_(this,"rushHit",new Set);_(this,"ghostT",0);_(this,"model");_(this,"weaponHand");_(this,"usingGenHero",!1);_(this,"anchor",null);_(this,"orbitAng",0);_(this,"orbitR",4);_(this,"orbitDir",1);_(this,"orbitDone",0);_(this,"flailE",null);_(this,"flailAng",0);_(this,"flailHit",new Map);_(this,"mixer");_(this,"acts",{});_(this,"cur");_(this,"combatClocks",new Map);_(this,"mats",[]);_(this,"baseEmissive",new Map);_(this,"baseEmissiveIntensity",new Map);_(this,"poseBones",{});_(this,"appliedPose",new Map);_(this,"poseBaseline",new Map);_(this,"poseDelta",new At);_(this,"armPose",{shoulder:new S,elbow:new S,direction:new S,target:new S,targetWorld:new S,root:new At,parent:new At,swing:new At,local:new At,identity:new At});_(this,"denseRig",!1);_(this,"locomotionContacts",[]);_(this,"contactVertex",new S);_(this,"contactOrigin",new S);_(this,"contactScale",new S);_(this,"modelBaseY",0);_(this,"contactLift",0);_(this,"fillLight");_(this,"fillOffset",new S)}get alive(){return this.state!=="dead"}async init(){const e=await ft("/wumingbu/assets/models/runtime-20260930/actors/hero-ual2-sword-combo-20261007-r1.glb")??await ft("/wumingbu/assets/models/runtime-20260930/actors/hero-quaternius-locomotion-20261007-r2.glb")??await ft("/wumingbu/assets/models/runtime-20260930/actors/hero-dense-kaykit-20261002-v2.glb")??await ft("/wumingbu/assets/models/runtime-20260930/actors/hero-dense-kaykit-20261002-v1.glb")??await ft("/wumingbu/assets/models/runtime-20260930/actors/hero-retargeted-kaykit-20261001-v4.glb")??await ft("/wumingbu/assets/models/runtime-20260930/actors/hero-polished-v2.glb")??await ft("/wumingbu/assets/models/runtime-20260930/actors/hero-polished.glb")??await ft("/wumingbu/assets/models/runtime-20260930/actors/hero.glb")??await ft("/wumingbu/assets/models/rigged/hero.glb"),t=e??await VM("/wumingbu/assets/models/hero.glb");this.usingGenHero=!!e;const n=t.scene;if(this.usingGenHero){const h=new Mt().setFromObject(n).getSize(new S).y;n.scale.multiplyScalar(3.45/Math.max(h,.01))}else n.scale.setScalar(1.05);n.traverse(h=>{const u=h;u.isBone&&u.name==="chest"&&(this.denseRig=!0),u.isBone&&u.name==="handR"&&(this.weaponHand=u),u.isBone&&["spine","chest","neck","upper_armL","forearmL","wristL","upper_armR","forearmR","wristR"].includes(u.name)&&(this.poseBones[u.name]=u,this.poseBaseline.set(u,new At));const d=h;if(!d.isMesh)return;const f=h;if(f.isSkinnedMesh){const x=new Set(f.skeleton.bones.flatMap((M,y)=>/^(foot|toes)[LR]$/.test(M.name)?[y]:[])),p=f.geometry.getAttribute("skinIndex"),g=f.geometry.getAttribute("skinWeight"),w=[];if(p&&g)for(let M=0;M<p.count;M++){let y=0;for(let L=0;L<4;L++)x.has(p.getComponent(M,L))&&(y+=g.getComponent(M,L));y>.5&&w.push(M)}w.length&&this.locomotionContacts.push({mesh:f,indices:w})}const v=(Array.isArray(d.material)?d.material:[d.material]).map(x=>{const p=x.clone();return!this.usingGenHero&&p.map&&(p.map=FS(p.map)),this.usingGenHero||ip(p,9352395,.22,3),p.emissive=new Ae(1054752),p.emissiveIntensity=this.usingGenHero?.055:.18,this.usingGenHero&&p.map&&(p.emissive.set(16777215),p.emissiveMap=p.map),p.metalness=.05,p.roughness=.85,this.usingGenHero&&(p.roughnessMap=null,p.metalnessMap=null,p.envMapIntensity=.22),p.map&&(p.map.colorSpace=pt),p.normalMap&&(p.normalMap.colorSpace=Ln),this.mats.push(p),this.baseEmissive.set(p,p.emissive.clone()),this.baseEmissiveIntensity.set(p,p.emissiveIntensity),p});d.material=Array.isArray(d.material)?v:v[0]}),this.obj.add(n),this.model=n,this.modelBaseY=n.position.y,m.scene.add(this.obj);const i=new Be(new ga(.7,.85,40),new dt({color:16730662,transparent:!0,opacity:.6,blending:Gt,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.05,this.obj.add(i);const s=new Ys(12964822,16,10,2);s.position.set(0,2.75,-2),this.fillLight=s,s.name="hero-fill-stable",m.scene.add(s),this.mixer=new oh(n);const o=(...h)=>{const u=np(t.clips,...h);return u?this.mixer.clipAction(u):void 0};this.acts={idle:o("Locomotion_Q_Idle","Idle","Walk"),run:o("Locomotion_Q_Run","Run","Walk","Running_A","Running_B"),dash:o("Dodge_Forward","Roll","Walk"),a0:o("Attack_1","Attack",ii[0].clip),a1:o("Attack_2","Attack",ii[1].clip,"1H_Melee_Attack_Stab"),a2:o("Attack_3","Attack",ii[2].clip,"2H_Melee_Attack_Spin"),throw:o("Attack_1","Attack","Throw","1H_Ranged_Shoot","Spellcast_Shoot"),spin:o("Attack_3","Attack","2H_Melee_Attack_Spinning","2H_Melee_Attack_Spin","Spin"),jump:o("Dodge_Forward","Jump_Idle","Jump_Full_Short","Jump","Walk"),hit:o("Hit","Hit_A","Hit_B"),death:o("Death","Death_A","Death_B"),rush:o("Attack_3","Attack",ii[2].clip,"2H_Melee_Attack_Spin")};const l=["Combat_UAL2_A","Combat_UAL2_B","Combat_UAL2_C"].map(h=>t.clips.find(u=>u.name===h)),c=["Combat_UAL2_A_Recovery","Combat_UAL2_B_Recovery"].map(h=>t.clips.find(u=>u.name===h));l.every(Boolean)&&c.every(Boolean)&&l.forEach((h,u)=>{const d=h,f=c[u];let v=d;if(f){const p=d.tracks.map(g=>{const w=f.tracks.find(C=>C.name===g.name);if(!w||w.getValueSize()!==g.getValueSize())throw new Error("UAL2 recovery channel mismatch");const M=Array.from(g.times),y=Array.from(g.values),L=g.getValueSize();for(let C=0;C<w.times.length;C++){const I=d.duration+w.times[C];if(!(I<=M[M.length-1])){M.push(I);for(let E=0;E<L;E++)y.push(w.values[C*L+E])}}const P=g.clone();return P.times=new Float32Array(M),P.values=new Float32Array(y),P});v=new la(d.name+"_Gameplay",d.duration+f.duration,p)}const x=this.mixer.clipAction(v);this.acts["a"+u]=x,this.combatClocks.set(x,NS(u,d.duration,(f==null?void 0:f.duration)??0))}),this.play("idle")}weaponHandPosition(e=new S){return this.weaponHand?(this.weaponHand.updateWorldMatrix(!0,!1),this.weaponHand.getWorldPosition(e)):e.copy(this.pos).add(new S(0,1.2,0))}animationRate(e,t,n=.92){var s;const i=(s=this.acts[e])==null?void 0:s.getClip();return i?Math.max(.8,i.duration/Math.max(.05,t)*n):1}play(e,t=.1,n=!1,i=1){const s=this.acts[e];if(s){if(s===this.cur&&!n){s.timeScale=i;return}s.reset(),s.enabled=!0,s.setEffectiveWeight(1),s.timeScale=i,s.setLoop(n?Oc:Fc,1/0),s.clampWhenFinished=n,s.play(),this.cur&&this.cur!==s&&this.cur.crossFadeTo(s,t,!1),this.cur=s}}clearCombatPose(){for(const[e,t]of this.appliedPose)e.quaternion.copy(t);this.appliedPose.clear(),this.contactLift!==0&&(this.model.position.y=this.modelBaseY,this.contactLift=0)}keepLocomotionFeetAboveGround(){if(!this.locomotionContacts.length)return;this.obj.updateMatrixWorld(!0);let e=1/0;for(const{mesh:n,indices:i}of this.locomotionContacts)for(const s of i)n.getVertexPosition(s,this.contactVertex).applyMatrix4(n.matrixWorld),e=Math.min(e,this.contactVertex.y);const t=this.obj.getWorldPosition(this.contactOrigin).y+.004;e<t&&(this.obj.getWorldScale(this.contactScale),this.contactLift=(t-e)/Math.max(1e-4,Math.abs(this.contactScale.y)),this.model.position.y=this.modelBaseY+this.contactLift)}applyCombatPose(){var o;this.clearCombatPose();const t=this.denseRig?.68:1,n=(a,l)=>{const c=this.poseBones[a];if(!c)return;const h=this.poseBaseline.get(c);h.copy(c.quaternion),this.appliedPose.set(c,h),c.quaternion.multiply(this.poseDelta.setFromEuler(l))},i=(o=this.cur)==null?void 0:o.getClip().name,s=i==="Locomotion_Q_Run"||i==="Locomotion_Q_Idle";if(this.cur&&this.combatClocks.has(this.cur)){this.keepLocomotionFeetAboveGround();return}if(this.state==="move"&&s&&this.keepLocomotionFeetAboveGround(),this.state==="move"&&this.vel.lengthSq()>.25&&!s){const a=this.acts.run,l=a?a.time/Math.max(.01,a.getClip().duration)*Math.PI*2:this.t*9,c=Math.sin(l*2)*.025;n("spine",new $e(-.045,0,c)),n("chest",new $e(-.028,0,c*.45)),n("neck",new $e(.018,0,-c*.25)),n("upper_armR",new $e(.035,-.045,-.17)),n("forearmR",new $e(.02,0,-.055)),n("upper_armL",new $e(.035,.045,.17)),n("forearmL",new $e(.02,0,.055)),n("wristR",new $e(0,.018,-.035)),n("wristL",new $e(0,-.018,.035)),this.settleLocomotionArms(!1)}else if(this.state==="attack"||this.state==="rush"){const a=this.state==="rush"?2:this.combo,l=this.state==="rush"?No:ii[a].total,c=it.clamp(this.t/Math.max(.01,l),0,1),h=1-it.smoothstep(c,.02,.34),u=Math.sin(it.clamp((c-.16)/.72,0,1)*Math.PI),d=(a===2?1.18:1)*t,f=a===1?-1:1;n("chest",new $e(-.032*d*h+.055*d*u,f*.082*d*u,-f*.022*d*u)),n("neck",new $e(.02*d*u,-f*.036*d*u,0)),n("spine",new $e(-.045*d*h+.045*d*u,f*d*(-.07*h+.1*u),-f*.04*u)),n("upper_armR",new $e(-.07*d*h-.12*d*u,-f*.11*d*h,-.15*f*d*u)),n("forearmR",new $e(-.055*d*u,0,-.18*f*d*u)),n("upper_armL",new $e(.045*d*h,f*.075*d*h,.075*f*d*u)),n("forearmL",new $e(.03*d*u,0,.09*f*d*u)),n("wristR",new $e(-.018*d*u,.02*f*d*u,-.075*f*d*u)),n("wristL",new $e(.014*d*u,-.014*f*d*u,.045*f*d*u))}else this.state==="dash"&&(n("spine",new $e(-.19*t,0,0)),n("chest",new $e(-.075*t,0,0)),n("neck",new $e(.035*t,0,0)),n("upper_armR",new $e(.1*t,0,-.16*t)),n("upper_armL",new $e(.1*t,0,.16*t)),n("wristR",new $e(-.015*t,0,-.045*t)),n("wristL",new $e(-.015*t,0,.045*t)),this.settleLocomotionArms(!0))}settleLocomotionArms(e){if(!this.denseRig)return;const t=this.armPose;this.obj.getWorldQuaternion(t.root);for(const n of["L","R"]){const i=this.poseBones[n==="L"?"upper_armL":"upper_armR"],s=this.poseBones[n==="L"?"forearmL":"forearmR"];if(!(i!=null&&i.parent)||!s)continue;i.getWorldPosition(t.shoulder),s.getWorldPosition(t.elbow),t.direction.subVectors(t.elbow,t.shoulder).normalize(),t.target.copy(t.direction).applyQuaternion(t.local.copy(t.root).invert()),t.target.x*=e?.54:.7,t.target.y=Math.min(t.target.y,e?-.42:-.6),t.target.z*=e?.94:.86,t.targetWorld.copy(t.target).applyQuaternion(t.root).normalize();const o=e?.23:.32;t.swing.setFromUnitVectors(t.direction,t.targetWorld);const a=t.identity.angleTo(t.swing);if(a>o&&t.swing.slerp(t.identity,1-o/a),i.parent.getWorldQuaternion(t.parent),!this.appliedPose.has(i)){const l=this.poseBaseline.get(i);l.copy(i.quaternion),this.appliedPose.set(i,l)}t.local.copy(t.parent).invert().multiply(t.swing).multiply(t.parent),i.quaternion.premultiply(t.local).normalize()}}moveDir(){const e=m.input,t=m.camera.getWorldDirection(xs).setY(0).normalize(),n=t.x,i=t.z;return xs.set(-i*e.moveX+n*e.moveY,0,n*e.moveX+i*e.moveY).clone()}aimDir(){const e=m.input;if(e.usingMouse&&!e.isTouch){const n=new S(m.aim.x-this.pos.x,0,m.aim.z-this.pos.z);if(n.lengthSq()>.01)return n.normalize()}const t=this.moveDir();return t.lengthSq()>.04?t.normalize():new S(Math.sin(this.facing),0,Math.cos(this.facing))}softLock(e,t){let n=null,i=1/0;for(const s of m.enemies.alive){if(s.state==="spawn")continue;const o=new S(s.pos.x-this.pos.x,0,s.pos.z-this.pos.z),a=o.length();if(a>t)continue;const l=a*(2-o.divideScalar(a||1).dot(e));l<i&&(i=l,n=s)}return n}startRush(){this.perfect=0;const e=this.aimDir(),t=this.softLock(e,md);t&&e.set(t.pos.x-this.pos.x,0,t.pos.z-this.pos.z).normalize(),this.dashDir.copy(e),this.facing=Math.atan2(e.x,e.z),this.rushFrom.copy(this.pos),this.rushHit.clear(),this.state="rush",this.t=0,this.iframes=No+.2,this.play("rush",.03,!0,2.4),Yu(1),m.audio.play("riser",{vol:.6,pitch:1.4}),m.grade.punch(.9),m.grade.chroma(1)}finishRush(){const e=this.rushFrom.clone(),t=this.pos;m.fx.flashLine(e.clone().setY(1),t.clone().setY(1),13625599,2.2,.35),m.fx.flashLine(e.clone().setY(1),t.clone().setY(1),16777215,.5,.5);const n=[...this.rushHit];setTimeout(()=>{let i=0;for(const s of n)m.enemies.damage(s,s.type==="brute"?140:120,e,{knock:10,kind:"line"})&&i++,m.fx.burst(s.pos.clone().setY(1.1),13625599,12,9);n.length&&(An(.12),m.fx.shake(.9),Ei(`突斩 ×${n.length}`,this.pos.clone().setY(2.8),"big blue"),m.audio.play("rushHit",{vol:.9}),m.audio.play("crack",{vol:.5})),i&&Es("melee")},220),this.state="move",this.vel.copy(this.dashDir).multiplyScalar(6)}ghost(e){const t=ah(this.model),n=new dt({color:e,transparent:!0,opacity:.45,blending:Gt,depthWrite:!1});t.traverse(o=>{const a=o;a.isMesh&&(a.material=n,a.castShadow=!1)}),t.position.copy(this.pos),t.rotation.y=this.facing,m.scene.add(t);let i=.3;const s=()=>{i-=1/60,n.opacity=Math.max(0,i/.3)*.45,i>0?requestAnimationFrame(s):(m.scene.remove(t),n.dispose())};s()}startAttack(e){var l;const t=this.aimDir(),n=this.softLock(t,5);n&&t.set(n.pos.x-this.pos.x,0,n.pos.z-this.pos.z).normalize(),this.facing=Math.atan2(t.x,t.z),!e&&this.comboWindow<=0&&(this.combo=0);const i=ii[this.combo];this.state="attack",this.t=0,this.hitDone=!1,this.vel.copy(t).multiplyScalar(i.lunge);const s="a"+this.combo,o=this.acts[s],a=o&&this.combatClocks.has(o);this.play(s,.05,!0,a?0:this.animationRate(s,i.total)),a&&(o.time=0,this.mixer.update(0)),m.audio.play("swing",{vol:this.combo===2?.9:.7,pan:0}),m.fx.soulWindup(this.pos,this.facing,this.combo),(l=m.runtime)==null||l.markUsed("melee")}doHit(){var a;const e=ii[this.combo],t=new S(Math.sin(this.facing),0,Math.cos(this.facing)),n=Math.cos(e.arc/2*Math.PI/180);let i=0,s=0;for(const l of m.enemies.inRadius(this.pos,e.r)){if(l.state==="spawn"||(xs.set(l.pos.x-this.pos.x,0,l.pos.z-this.pos.z).normalize(),xs.dot(t)<n))continue;i++;const c=this.perfect>0?m.prog.modifiers.critAfterPerfect:1,h=e.dmg*m.prog.modifiers.meleeDamage*c;m.enemies.damage(l,h,this.pos,{knock:e.knock,kind:"melee"})&&s++,m.prog.fire("meleeHit",l,this.combo,this.pos),m.fx.burst(l.pos.clone().setY(1.1),16769216,6,6)}const o=this.combo===2?(a=this.poseBones.wristR)==null?void 0:a.getWorldPosition(new S):void 0;m.fx.soulCut(this.pos,this.facing,this.combo,e.r,o),this.combo===2&&m.fx.shake(.3),i&&(An(e.stop+Math.min(i,6)*.004),m.fx.shake(.12+i*.02),m.audio.play("hit",{vol:.55+Math.min(i,5)*.08,pan:(Math.random()-.5)*.5}),this.combo===2&&m.audio.play("heavy",{vol:.8})),s&&Es("melee")}startDash(){var t;const e=this.moveDir();this.dashDir.copy(e.lengthSq()>.04?e.normalize():this.aimDir()),this.facing=Math.atan2(this.dashDir.x,this.dashDir.z),this.state="dash",this.t=0,this.iframes=Uo+.08,this.dashCd=OS*m.prog.modifiers.dashCd,this.play("dash",.05,!0,this.animationRate("dash",Uo)),m.audio.play("dash",{vol:.5,pitch:1.1}),m.grade.punch(.55),(t=m.runtime)==null||t.markUsed("dash"),m.prog.fire("dashStart",this.facing,this.pos),m.fx.soulStep(this.pos,this.facing)}tryHook(){if(m.chain.throwHook(this.pos,this.aimDir())){const e=this.aimDir();this.facing=Math.atan2(e.x,e.z),this.play("throw",.05,!0,2),m.audio.play("chain",{vol:.6,pitch:1.3})}}onHook(e){var t,n;if(e.kind==="anchor"){(t=m.runtime)==null||t.markUsed("hook"),this.anchor=e.a,this.state="zip",this.t=0;const i=new S(e.a.pos.x-this.pos.x,0,e.a.pos.z-this.pos.z),s=this.moveDir(),o=s.lengthSq()>.04?i.x*s.z-i.z*s.x:1;this.orbitDir=o>=0?-1:1,this.play("jump",.08),m.fx.burst(e.a.pos.clone(),16756848,10,5),m.audio.play("hookHit",{vol:.7})}else if(e.kind==="enemy"){(n=m.runtime)==null||n.markUsed("hook");const i=e.e;if(i.type==="brute")this.flailE=i,i.state="held",this.breakShieldIf(i),this.state="flail",this.t=0,this.flailAng=Math.atan2(i.pos.x-this.pos.x,i.pos.z-this.pos.z),this.flailHit.clear(),this.play("spin",.08,!1,1.4),Ei("勾魂！",i.pos.clone().setY(3.5),"big"),An(.08),m.fx.shake(.4),m.audio.play("chain",{vol:.8,pitch:.8}),m.audio.play("hookHit",{vol:.8});else{this.breakShieldIf(i);const s=new S(this.pos.x-i.pos.x,0,this.pos.z-i.pos.z),o=s.length();i.knock.copy(s.normalize().multiplyScalar(Math.max(0,o-1.6)*7)),m.enemies.damage(i,30,i.pos.clone().addScaledVector(s,-1),{knock:0,kind:"hook"})?Es("hook"):(i.state="stun",i.timer=.8),An(.05),m.fx.burst(i.pos.clone().setY(1),16756848,10,6),m.audio.play("hookHit",{vol:.7})}}}breakShieldIf(e){e.shield&&m.enemies.breakShield(e)}hurt(e,t){var n;if(this.state==="dash"&&this.iframes>0){m.slowmo<=0&&(O_(1.4),Yu(.6),this.perfect=2*m.prog.modifiers.parryWindow,(n=m.runtime)==null||n.markUsed("parry"),m.prog.fire("perfect"),Ei("见切",this.pos.clone().setY(2.6),"big blue"),m.audio.play("parry",{vol:.85,pitch:1.6}),m.audio.play("riser",{vol:.4}),m.fx.soulParry(this.pos));return}if(!(this.iframes>0||!this.alive||this.state==="swing"||this.state==="flail"||this.state==="rush")){if(this.shield>0){this.shield--,this.iframes=.6,m.fx.decal(m.fx.ringTex,this.pos,{size:1,sizeEnd:5,life:.35,color:10475775}),m.fx.burst(this.pos.clone().setY(1),10475775,14,7),m.audio.play("parry",{vol:.7,pitch:.9}),Ei("挡",this.pos.clone().setY(2.2),"blue");return}this.hp-=e,this.iframes=.6,xs.set(this.pos.x-t.x,0,this.pos.z-t.z).normalize(),this.vel.copy(xs).multiplyScalar(12),m.fx.shake(.5),An(.06);for(const i of this.mats)i.emissive.setRGB(1,.1,.05),i.emissiveIntensity=1.15;if(setTimeout(()=>{for(const i of this.mats)i.emissive.copy(this.baseEmissive.get(i)??new Ae(1054752)),i.emissiveIntensity=this.baseEmissiveIntensity.get(i)??.18},90),m.fx.burst(this.pos.clone().setY(1),16719888,10,6),m.audio.play("hurt",{vol:.7}),m.audio.play("hit",{vol:.5,pitch:.7}),m.grade.chroma(1),this.hp<=0){this.hp=0,this.state="dead",this.play("death",.1,!0);return}this.state="hurt",this.t=0,this.play("hit",.05,!0,1.5)}}respawn(){this.hp=this.maxHp,this.state="move",this.pos.set(0,0,0),this.vel.set(0,0,0),this.iframes=1.5,this.play("idle")}invuln(e){this.iframes=Math.max(this.iframes,e)}revive(){this.hp=this.maxHp,this.state="move",this.vel.set(0,0,0),this.perfect=0,this.iframes=2,this.facing=0,this.obj.visible=!0,this.play("idle"),m.fx.pillar(this.pos.clone(),10475775,8,.6),m.audio.play("riser",{vol:.4,pitch:1.2})}updateLighting(){this.fillLight&&(this.fillOffset.copy(m.camera.position).sub(this.pos).setY(0),this.fillOffset.lengthSq()<.001&&this.fillOffset.set(0,0,-1),this.fillOffset.normalize().multiplyScalar(1.7),this.fillOffset.y=2.75,this.fillLight.position.copy(this.pos).add(this.fillOffset),this.fillLight.intensity=m.runtime&&this.alive?16:0)}update(e){var s;const t=m.input;if(this.clearCombatPose(),this.state==="attack"&&this.cur){const o=this.combatClocks.get(this.cur);o&&(this.cur.time=US(o,this.t+e),this.cur.setEffectiveTimeScale(0))}if(this.mixer.update(e),this.t+=e,this.iframes-=e,this.dashCd-=e,this.comboWindow-=e,!this.alive){this.vel.multiplyScalar(Math.exp(-8*e)),this.pos.addScaledVector(this.vel,e);return}const n=this.state==="move"||this.state==="attack"&&this.t>=ii[this.combo].cancel||this.state==="hurt"&&this.t>.25,i=n||this.state==="swing"||this.state==="zip";if(this.perfect-=e,this.hookCd-=e,this.perfect>0&&(n||this.state==="dash")&&t.consume("attack"))this.startRush();else if(i&&this.dashCd<=0&&t.consume("dash"))this.startDash();else if(i&&t.consume("hook"))(this.state==="swing"||this.state==="zip")&&this.releaseSwing(),this.tryHook();else if((n||this.state==="dash")&&t.consume("stake"))m.chain.plantOrSnap();else if(n&&t.consume("attack")){const o=this.state==="attack";o&&(this.combo=(this.combo+1)%3),this.startAttack(o)}switch(this.state){case"move":{const a=this.moveDir().multiplyScalar(fl*this.speedMul*m.prog.modifiers.moveSpeed),l=1-Math.exp(-60/(fl*this.speedMul)*e);this.vel.lerp(a,l);const c=this.vel.length();c>.5?(this.faceTo(Math.atan2(this.vel.x,this.vel.z),e,18),this.play("run",.1,!1,Math.max(.8,c/fl*1.2))):this.play("idle",.15);break}case"attack":{const o=ii[this.combo];this.vel.multiplyScalar(Math.exp(-14*e)),!this.hitDone&&this.t>=o.hit&&(this.hitDone=!0,this.doHit()),this.t>=o.total&&(this.state="move",this.comboWindow=.35,this.combo=(this.combo+1)%3);break}case"dash":{this.vel.copy(this.dashDir).multiplyScalar(kS*(1-this.t/Uo*.5)),m.fx.glow.add({pos:this.pos.clone().setY(1),life:.25,size:2.2,sizeEnd:.5,color:5934335,alpha:.5}),this.ghostT-=e,this.ghostT<=0&&(this.ghostT=.04,this.ghost(4881663));const o=m.prog.modifiers.dashBind;if(o>0)for(const a of m.enemies.inRadius(this.pos,1.6+.4))a.state==="dead"||a.state==="stun"||(a.state="stun",a.timer=o,m.fx.glow.add({pos:a.pos.clone().setY(1),life:.4,size:2.5,sizeEnd:.6,color:8370431,alpha:.8}));this.t>=Uo&&(this.state="move",this.vel.multiplyScalar(.45),m.prog.fire("dashEnd",this.facing,this.pos));break}case"rush":{this.vel.copy(this.dashDir).multiplyScalar(md/No);for(const o of m.enemies.inRadius(this.pos,1.8))o.state!=="spawn"&&this.rushHit.add(o);this.ghostT-=e,this.ghostT<=0&&(this.ghostT=.02,this.ghost(13625599)),this.t>=No&&this.finishRush();break}case"zip":{const o=this.anchor,a=new S(o.pos.x-this.pos.x,0,o.pos.z-this.pos.z),l=a.length();m.chain.link=o.pos,this.orbitR=it.clamp(l*.6,3.2,5.5),l<=this.orbitR+.3||this.t>.6?(this.state="swing",this.t=0,this.orbitDone=0,this.orbitAng=Math.atan2(this.pos.x-o.pos.x,this.pos.z-o.pos.z)):this.vel.copy(a.normalize().multiplyScalar(38));break}case"swing":{const o=this.anchor,a=21/this.orbitR*this.orbitDir*e;this.orbitAng+=a,this.orbitDone+=Math.abs(a);const l=new S(o.pos.x+Math.sin(this.orbitAng)*this.orbitR,0,o.pos.z+Math.cos(this.orbitAng)*this.orbitR);this.vel.copy(l.sub(this.pos)).divideScalar(e).setY(0),this.pos.y=Math.sin(Math.min(1,this.orbitDone/(Math.PI*2))*Math.PI)*1.2,this.faceTo(Math.atan2(this.vel.x,this.vel.z),e,30),m.chain.link=o.pos;for(const c of m.enemies.inRadius(this.pos,1.3))c.state!=="held"&&m.enemies.damage(c,10,this.pos,{knock:14,kind:"hook"});this.orbitDone>=Math.PI*2+.5&&this.releaseSwing();break}case"flail":{const o=this.flailE,a=1.8*m.prog.modifiers.flailDuration;this.vel.multiplyScalar(Math.exp(-10*e));const l=this.moveDir();this.vel.addScaledVector(l,25*e);const c=7+Math.min(this.t,1)*6;this.flailAng+=c*e;const h=4.2;o.pos.set(this.pos.x+Math.sin(this.flailAng)*h,1.2+Math.sin(this.t*6)*.3,this.pos.z+Math.cos(this.flailAng)*h),o.obj.rotation.y=this.flailAng+Math.PI/2,this.facing=this.flailAng,m.chain.link=o.pos,m.fx.glow.add({pos:o.pos,life:.3,size:3,sizeEnd:1,color:16732192,alpha:.6});for(const u of m.enemies.inRadius(o.pos,2)){if(u===o)continue;const d=this.flailHit.get(u)??-9;m.time-d<.4||(this.flailHit.set(u,m.time),m.fx.burst(u.pos.clone().setY(1),16740416,8,8),m.enemies.damage(u,60,o.pos,{knock:24,kind:"flail"})&&Es("hook"),An(.025),m.fx.shake(.25))}(this.t>=a||o.state==="dead")&&this.throwFlail();break}case"hurt":{this.vel.multiplyScalar(Math.exp(-8*e)),this.t>.35&&(this.state="move");break}}this.state!=="swing"&&this.state!=="flail"&&this.state!=="zip"&&(m.chain.link=null),this.state!=="swing"&&(this.pos.y=Math.max(0,this.pos.y-e*8)),this.pos.addScaledVector(this.vel,e),this.state!=="swing"?m.world.collide(this.pos,.5):(m.world.clampPosition(this.pos,.5),(s=m.runtime)==null||s.constrainToArea(this.pos,.5)),this.obj.rotation.y=this.facing,this.applyCombatPose(),this.obj.visible=!(this.iframes>0&&this.state!=="dash"&&this.state!=="rush"&&Math.floor(m.time*20)%2===0)}releaseSwing(){this.state!=="swing"&&this.state!=="zip"||(this.state="move",this.anchor=null,m.chain.link=null,this.vel.setLength(Math.min(this.vel.length(),16)))}onAnchorRemoved(e){this.anchor===e&&(this.releaseSwing(),this.anchor=null)}throwFlail(){const e=this.flailE;if(this.flailE=null,this.state="move",m.chain.link=null,e.state==="dead")return;const t=this.aimDir();e.state="stun",e.timer=1.2,e.pos.set(this.pos.x+t.x*3,0,this.pos.z+t.z*3),e.knock.copy(t).multiplyScalar(26);const n=e.pos.clone().addScaledVector(t,4);m.fx.decal(m.fx.ringTex,n,{size:2,sizeEnd:9,life:.5,color:16732192}),m.fx.burst(n.clone().setY(.5),16736304,24,12);for(const i of m.enemies.inRadius(n,4.5))i!==e&&m.enemies.damage(i,70,n,{knock:20,kind:"flail"});m.enemies.damage(e,120,this.pos,{knock:0,kind:"flail"}),An(.1),m.fx.shake(.8),m.audio.play("boom",{vol:.85}),m.audio.play("crack",{vol:.6})}faceTo(e,t,n){let i=e-this.facing;i=Math.atan2(Math.sin(i),Math.cos(i)),this.facing+=i*(1-Math.exp(-n*t))}}const ko={swing:["audio/swing/swing-1.m4a","audio/swing/swing-2.m4a","audio/swing/swing-3.m4a","audio/swing/swing-4.m4a"],hit:["audio/hit/hit-1.m4a","audio/hit/hit-2.m4a","audio/hit/hit-3.m4a","audio/hit/hit-4.m4a"],heavy:["audio/impact/deep.wav","audio/impact/metal-heavy-1.m4a"],clang:["audio/metal/clang-1.m4a","audio/metal/clang-2.m4a","audio/metal/clang-3.m4a"],lock:["audio/metal/lock-1.m4a","audio/metal/lock-2.m4a"],chain:["audio/metal/chain-1.m4a","audio/metal/chain-2.m4a","audio/metal/chain-3.m4a"],sheet:["audio/metal/sheet-1.m4a","audio/metal/sheet-2.m4a"],hookHit:["audio/impact/metal-heavy-2.m4a","audio/metal/clang-3.m4a"],dash:["audio/impact/whoosh-high.wav","audio/impact/whoosh-low.wav"],parry:["audio/impact/bell-heavy.m4a","audio/impact/metal-heavy-1.m4a"],riser:["audio/impact/riser.wav","audio/impact/swell.wav"],rushHit:["audio/impact/subdrop.wav","audio/impact/deep.wav"],soulburst:["audio/impact/tail.wav","audio/boom/cannon-1.m4a"],boom:["audio/boom/bang-1.m4a","audio/boom/bang-2.m4a","audio/boom/cannon-2.m4a"],die:["audio/death/die-1.m4a","audio/death/die-2.m4a"],crack:["audio/death/crack-1.m4a","audio/death/crack-2.m4a"],hurt:["audio/hurt/grunt-1.m4a","audio/hurt/grunt-2.m4a","audio/hurt/grunt-3.m4a"]};class si extends Error{constructor(e,t,n){super(e),this.stage=t,this.httpStatus=n}}const zS=4,HS=30,vd=24,VS=4,GS=4,Oo=64*1024*1024,WS={hurt:3,parry:3,lock:2,dash:2,rushHit:2,soulburst:2,heavy:1,boom:1},en=(r,e,t)=>Number.isFinite(r)?Math.max(e,Math.min(t,r)):e;class XS{constructor(){_(this,"ctx",null);_(this,"master",null);_(this,"sfxBus",null);_(this,"musicBus",null);_(this,"buffers",new Map);_(this,"decoded",new Map);_(this,"inFlight",new Map);_(this,"pinnedURLs",new Set);_(this,"assets",new Map);_(this,"recent",new Map);_(this,"lastVariant",new Map);_(this,"loading",[]);_(this,"failedKeys",new Set);_(this,"totalPreload",0);_(this,"timedOut",!1);_(this,"disposed",!1);_(this,"voices",new Set);_(this,"music",null);_(this,"retiringMusic",null);_(this,"musicGeneration",0);_(this,"requestedMusic",null);_(this,"droppedByRate",0);_(this,"droppedByBudget",0);_(this,"evictedVoices",0);_(this,"playbackErrors",[]);_(this,"unlock",()=>{var e;((e=this.ctx)==null?void 0:e.state)==="suspended"&&this.ctx.resume().catch(t=>this.recordPlaybackError(t))});_(this,"volumes",{master:1,sfx:1,music:.6});_(this,"ready",!1)}init(){if(this.ctx||this.disposed)return;const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.sfxBus=this.ctx.createGain(),this.musicBus=this.ctx.createGain(),this.sfxBus.connect(this.master),this.musicBus.connect(this.master),this.master.connect(this.ctx.destination),this.applyVolumes(),addEventListener("pointerdown",this.unlock),addEventListener("keydown",this.unlock),this.totalPreload=Object.values(ko).reduce((t,n)=>t+n.length,0);for(const t of Object.values(ko))for(const n of t)this.pinnedURLs.add(this.fullURL(n));for(const[t,n]of Object.entries(ko))n.forEach((i,s)=>this.loading.push(this.load(`${t}:${s}`,i)))}fullURL(e){return"/wumingbu/assets/"+e.replace(/^\/+/,"")}async load(e,t){try{const n=await this.getBuffer(t);this.disposed||this.buffers.set(e,n)}catch{this.disposed||this.failedKeys.add(e)}finally{this.ready=!this.disposed&&this.buffers.size>0&&this.buffers.size+this.failedKeys.size===this.totalPreload}}getBuffer(e){var l;const t=this.fullURL(e),n=this.ctx,i=this.decoded.get(t);if(i)return this.decoded.delete(t),this.decoded.set(t,i),Promise.resolve(i);const s=this.inFlight.get(t);if(s)return s;if(!n||this.disposed)return Promise.reject(new si("Audio disposed/uninitialized","cancelled"));const o={url:t,state:"loading",attempts:(((l=this.assets.get(t))==null?void 0:l.attempts)??0)+1};this.assets.set(t,o);const a=(async()=>{var c;try{let h;try{h=await fetch(t)}catch(v){throw new si(String(v),"fetch")}if(o.httpStatus=h.status,!h.ok)throw new si(`HTTP ${h.status}`,"http",h.status);const u=((c=h.headers.get("content-type"))==null?void 0:c.toLowerCase())??"";if(u.includes("text/html")||u.includes("application/json"))throw new si(`Not audio: ${u}`,"content-type",h.status);if(this.disposed||this.ctx!==n)throw new si("Audio request cancelled","cancelled");let d;try{d=await h.arrayBuffer()}catch(v){throw new si(String(v),"fetch")}let f;try{f=await n.decodeAudioData(d)}catch(v){throw new si(String(v),"decode")}if(this.disposed||this.ctx!==n)throw new si("Audio decode cancelled","cancelled");return o.state="ready",f.length*f.numberOfChannels*4<=Oo&&(this.decoded.set(t,f),this.trimCache()),f}catch(h){throw o.state="failed",o.error=h instanceof Error?h.message:String(h),o.stage=h instanceof si?h.stage:"fetch",h}})().finally(()=>{this.inFlight.delete(t)});return this.inFlight.set(t,a),a}trimCache(){let e=this.cacheBytes();for(const[t,n]of this.decoded){if(e<=Oo)break;this.pinnedURLs.has(t)||(e-=n.length*n.numberOfChannels*4,this.decoded.delete(t))}}cacheBytes(){let e=0;for(const t of this.decoded.values())e+=t.length*t.numberOfChannels*4;return e}status(){return!this.ctx||this.disposed?"idle":this.buffers.size+this.failedKeys.size<this.totalPreload?"loading":!this.buffers.size&&this.totalPreload?"failed":this.failedKeys.size?"degraded":"ready"}async waitReady(e=8e3){let t;const n=Promise.all(this.loading);try{this.timedOut=await Promise.race([n.then(()=>!1),new Promise(i=>{t=setTimeout(()=>i(!0),Math.max(0,e))})])}finally{clearTimeout(t)}return this.getDiagnostics()}getDiagnostics(){var i,s;const e=[...this.voices],n=[...new Set([...this.decoded.values(),...this.buffers.values(),...e.map(o=>o.src.buffer).filter(o=>!!o)])].reduce((o,a)=>o+a.length*a.numberOfChannels*4,0);return{status:this.status(),ready:this.ready,disposed:this.disposed,contextState:((i=this.ctx)==null?void 0:i.state)??"none",preload:{total:this.totalPreload,loaded:this.buffers.size,failed:this.failedKeys.size,pending:Math.max(0,this.totalPreload-this.buffers.size-this.failedKeys.size),timedOut:this.timedOut},assets:[...this.assets.values()].map(o=>({...o})),pendingRequests:this.inFlight.size,cachedFiles:this.decoded.size,decodedCacheBytes:this.cacheBytes(),cacheBudgetBytes:Oo,retainedBufferBytes:n,retainedOverBudget:n>Oo,activeVoices:e.length,sfxVoices:e.filter(o=>o.kind!=="music").length,loopingSFX:e.filter(o=>o.kind==="loop").length,musicVoices:e.filter(o=>o.kind==="music").length,music:((s=this.music)==null?void 0:s.key)??null,requestedMusic:this.requestedMusic,generation:this.musicGeneration,droppedByRate:this.droppedByRate,droppedByBudget:this.droppedByBudget,evictedVoices:this.evictedVoices,playbackErrors:[...this.playbackErrors]}}applyVolumes(){!this.master||!this.sfxBus||!this.musicBus||(this.master.gain.value=en(this.volumes.master,0,1),this.sfxBus.gain.value=en(this.volumes.sfx,0,1),this.musicBus.gain.value=en(this.volumes.music,0,1))}selectVariant(e,t){const n=ko[e];if(!n)return null;const i=n.map((l,c)=>c).filter(l=>this.buffers.has(`${e}:${l}`)),s=this.lastVariant.get(e),o=t&&i.length>1?i.filter(l=>l!==s):i;if(!o.length)return null;const a=o[Math.random()*o.length|0];return{index:a,buffer:this.buffers.get(`${e}:${a}`)}}admit(e,t){const n=[...this.voices].filter(o=>o.kind!=="music");if(t&&n.filter(o=>o.kind==="loop").length>=GS)return this.droppedByBudget++,!1;const i=e>=2?vd:vd-VS;if(n.length<i)return!0;const s=e>=2?n.filter(o=>o.kind==="sfx"&&o.priority<e).sort((o,a)=>o.priority-a.priority)[0]:void 0;return s?(this.stopVoice(s),this.evictedVoices++,!0):(this.droppedByBudget++,!1)}recordPlaybackError(e){this.playbackErrors.push(e instanceof Error?e.message:String(e)),this.playbackErrors.length>10&&this.playbackErrors.shift()}releaseVoice(e){var t;e.closed||(e.closed=!0,e.src.onended=null,e.src.disconnect(),e.gain.disconnect(),(t=e.pan)==null||t.disconnect(),this.voices.delete(e),this.music===e&&(this.music=null),this.retiringMusic===e&&(this.retiringMusic=null))}stopVoice(e){if(!e.closed){e.src.onended=null;try{e.src.stop()}catch{}this.releaseVoice(e)}}rampGain(e,t,n){const i=this.ctx.currentTime,s=e.ramp,o=s?en((i-s.start)/(s.end-s.start),0,1):1,a=s?s.from+(s.to-s.from)*o:e.gain.gain.value;e.gain.gain.cancelScheduledValues(i),e.gain.gain.setValueAtTime(a,i),n>0?(e.gain.gain.linearRampToValueAtTime(t,i+n),e.ramp={from:a,to:t,start:i,end:i+n}):(e.gain.gain.setValueAtTime(t,i),e.ramp=void 0)}startVoice(e,t,n,i,s,o={}){const a=this.ctx,l=n==="music"?this.musicBus:this.sfxBus;if(!a||!l||this.disposed)return null;const c=a.createBufferSource(),h=a.createGain(),u={src:c,gain:h,key:e,kind:n,priority:s,closed:!1};try{if(c.buffer=t,c.loop=n!=="sfx",n==="sfx"){const d=en(o.detune??.08,0,.95);c.playbackRate.value=en((1+(Math.random()*2-1)*d)*en(o.pitch??1,.1,4),.1,4)}return h.gain.value=en(i,0,2),c.connect(h),o.pan&&a.createStereoPanner?(u.pan=a.createStereoPanner(),u.pan.pan.value=en(o.pan,-1,1),h.connect(u.pan),u.pan.connect(l)):h.connect(l),c.onended=()=>this.releaseVoice(u),this.voices.add(u),c.start(),u}catch(d){return this.recordPlaybackError(d),this.stopVoice(u),null}}play(e,t={}){if(!this.ctx||this.disposed)return;const n=this.selectVariant(e,!0);if(!n)return;const i=performance.now(),s=(this.recent.get(e)??[]).filter(a=>i-a<HS);if(s.length>=zS){this.droppedByRate++;return}const o=WS[e]??0;this.admit(o,!1)&&this.startVoice(e,n.buffer,"sfx",t.vol??1,o,t)&&(s.push(i),this.recent.set(e,s),this.lastVariant.set(e,n.index))}loop(e,t=.5){const n=this.selectVariant(e,!1);if(!n||this.disposed||!this.admit(1,!0))return null;const i=this.startVoice(e,n.buffer,"loop",t,1);return i?{setVol:s=>{i.closed||(i.gain.gain.value=en(s,0,2))},stop:()=>this.stopVoice(i)}:null}async playMusic(e,t=1,n=.25){var o;const i=++this.musicGeneration,s=this.ctx;if(!s||!this.musicBus||this.disposed)return!1;if(this.requestedMusic=e,((o=this.music)==null?void 0:o.key)===e&&!this.music.closed)return this.rampGain(this.music,en(t,0,2),en(n,0,3)),!0;try{const a=await this.getBuffer(e);if(i!==this.musicGeneration||this.ctx!==s||this.disposed)return!1;const l=en(n,0,3);this.retiringMusic&&this.stopVoice(this.retiringMusic);const c=this.startVoice(e,a,"music",l?0:t,0);if(!c)return!1;const h=this.music;return h&&(l?(this.rampGain(h,0,l),h.src.stop(s.currentTime+l),this.retiringMusic=h):this.stopVoice(h)),this.music=c,l&&this.rampGain(c,en(t,0,2),l),!0}catch{return!1}}stopMusic(){++this.musicGeneration,this.requestedMusic=null,this.music&&this.stopVoice(this.music),this.retiringMusic&&this.stopVoice(this.retiringMusic)}stopSFX(){for(const e of[...this.voices])e.kind!=="music"&&this.stopVoice(e)}async dispose(){var t,n,i;if(this.disposed)return;this.disposed=!0,this.stopMusic(),this.stopSFX(),removeEventListener("pointerdown",this.unlock),removeEventListener("keydown",this.unlock),(t=this.master)==null||t.disconnect(),(n=this.sfxBus)==null||n.disconnect(),(i=this.musicBus)==null||i.disconnect(),this.buffers.clear(),this.decoded.clear(),this.recent.clear(),this.lastVariant.clear(),this.ready=!1;const e=this.ctx;if(this.ctx=null,e&&e.state!=="closed")try{await e.close()}catch(s){this.recordPlaybackError(s)}}}const Hi={default:{shadow:[.92,.99,1.1],highlight:[1.05,1,.94],contrast:1.06,saturation:1.05,vignette:.42,radial:0,chroma:0},fengdu:{shadow:[.96,.99,1.06],highlight:[1.06,1,.95],contrast:1.1,saturation:1.04,vignette:.46,radial:0,chroma:0},jingwei:{shadow:[.82,1.02,1.12],highlight:[.98,1.06,1.06],contrast:1.05,saturation:1.12,vignette:.4,radial:0,chroma:0},kuafu:{shadow:[1.08,.96,.86],highlight:[1.1,1.02,.88],contrast:1.08,saturation:1.1,vignette:.42,radial:0,chroma:0},houyi:{shadow:[1.02,.99,.9],highlight:[1.12,1.06,.92],contrast:1.1,saturation:1.05,vignette:.44,radial:0,chroma:0},mengpo:{shadow:[.98,.92,1.16],highlight:[1.02,.98,1.04],contrast:1,saturation:.72,vignette:.55,radial:0,chroma:0},diyu:{shadow:[.76,.9,1],highlight:[1.18,1.02,.86],contrast:1.2,preserveShadows:!0,saturation:1.12,vignette:.45,radial:0,chroma:0},"prologue-valley":{shadow:[.9,.98,1.03],highlight:[1.08,1,.91],contrast:1.12,preserveShadows:!0,saturation:.99,vignette:.34,radial:0,chroma:0},xingtian:{shadow:[1.16,.86,.86],highlight:[1.12,.98,.94],contrast:1.12,saturation:1.08,vignette:.5,radial:0,chroma:0}},YS=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,qS=`
uniform sampler2D tDiffuse;
uniform vec3 uShadow;
uniform vec3 uHighlight;
uniform float uContrast;
uniform float uPreserveShadows;
uniform float uSaturation;
uniform float uVignette;
uniform float uRadial;
uniform float uChroma;
uniform vec2 uCenter;   // 屏幕中心（径向模糊与色差用），0..1
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec2 dir = uv - uCenter;
  float dist = length(dir);

  // 色差：越靠边缘越明显
  vec4 c;
  if (uChroma > 0.001) {
    vec2 o = dir * dist * uChroma * 0.06;
    c.r = texture2D(tDiffuse, uv + o).r;
    c.g = texture2D(tDiffuse, uv).g;
    c.b = texture2D(tDiffuse, uv - o).b;
    c.a = 1.0;
  } else {
    c = texture2D(tDiffuse, uv);
  }

  // 径向模糊：朝中心取样若干次
  if (uRadial > 0.001) {
    vec3 acc = vec3(0.0);
    const int N = 8;
    for (int i = 0; i < N; i++) {
      float t = float(i) / float(N) * uRadial;
      acc += texture2D(tDiffuse, uv - dir * t).rgb;
    }
    acc /= float(N);
    c.rgb = mix(c.rgb, acc, clamp(uRadial, 0.0, 1.0));
  }

  // 分级：暗部乘 shadow，亮部乘 highlight
  float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));
  vec3 graded = c.rgb * mix(uShadow, uHighlight, smoothstep(0.0, 0.75, luma));
  // 对比
  // OutputPass 前仍是线性颜色；幂曲线加深暗部但不丢掉纹理和角色细节。
  graded = uPreserveShadows > 0.5
    ? pow(max(graded, vec3(0.0)), vec3(uContrast))
    : (graded - 0.5) * uContrast + 0.5;
  // 饱和度
  float g = dot(graded, vec3(0.299, 0.587, 0.114));
  graded = mix(vec3(g), graded, uSaturation);
  // 暗角
  float vig = smoothstep(0.95, 0.35, dist * (1.0 + uVignette * 0.7));
  graded *= mix(1.0, vig, uVignette);

  gl_FragColor = vec4(clamp(graded, 0.0, 1.0), c.a);
}
`;class jS extends xt{constructor(){super({uniforms:{tDiffuse:{value:null},uShadow:{value:new S(...Hi.default.shadow)},uHighlight:{value:new S(...Hi.default.highlight)},uContrast:{value:Hi.default.contrast},uPreserveShadows:{value:0},uSaturation:{value:Hi.default.saturation},uVignette:{value:Hi.default.vignette},uRadial:{value:0},uChroma:{value:0},uCenter:{value:new ae(.5,.5)}},vertexShader:YS,fragmentShader:qS})}set look(e){this.uniforms.uShadow.value.set(...e.shadow),this.uniforms.uHighlight.value.set(...e.highlight),this.uniforms.uContrast.value=e.contrast,this.uniforms.uPreserveShadows.value=e.preserveShadows?1:0,this.uniforms.uSaturation.value=e.saturation,this.uniforms.uVignette.value=e.vignette}punch(e){this.uniforms.uRadial.value=Math.max(this.uniforms.uRadial.value,e)}chroma(e){this.uniforms.uChroma.value=Math.max(this.uniforms.uChroma.value,e)}setCenter(e,t){this.uniforms.uCenter.value.set(e,t)}decay(e){this.uniforms.uRadial.value=Math.max(0,this.uniforms.uRadial.value-e*4),this.uniforms.uChroma.value=Math.max(0,this.uniforms.uChroma.value-e*3)}}function KS(){const r=new jS;return{pass:new Kf(r),grade:r}}const xd="wumingbu-save-v1",Tc=1;function Fo(){return{version:Tc,level:"prologue",cleared:[],unlocked:["prologue"],choices:{},pages:[],souls:0,lamps:0,settings:{master:1,sfx:1,music:.6,quality:"high"},level_:1,kills:0,discoveredSouls:[]}}const yd={};class ZS{constructor(){_(this,"data",Fo());_(this,"hasExisting",!1)}load(){try{const e=localStorage.getItem(xd);if(!e)return;const t=JSON.parse(e);let n={...Fo(),...t};for(;n.version<Tc&&yd[n.version];)n=yd[n.version](n);n.version=Tc,n.discoveredSouls=Array.isArray(n.discoveredSouls)?[...new Set(n.discoveredSouls.filter(i=>typeof i=="string"))]:[],this.data=n,this.hasExisting=!0}catch{this.data=Fo()}}save(){try{localStorage.setItem(xd,JSON.stringify(this.data))}catch{}}reset(){this.data=Fo(),this.save()}addSouls(e){this.data.souls+=e}spendSouls(e){return this.data.souls<e?!1:(this.data.souls-=e,!0)}clearLevel(e){this.data.cleared.includes(e)||this.data.cleared.push(e),this.save()}unlock(e){this.data.unlocked.includes(e)||this.data.unlocked.push(e),this.save()}collectPage(e){this.data.pages.includes(e)||(this.data.pages.push(e),this.save())}setChoice(e,t){this.data.choices[e]=t,this.save()}addKills(e){this.data.kills+=e}}const We=new ZS,Or=new Set;let lh=0,$o=!1;const pl=r=>1e-10*Math.max(1,Math.abs(r));function ji(r){var e,t;if(r.alive){r.alive=!1,Or.delete(r);try{(t=(e=r.def).onEnd)==null||t.call(e)}catch(n){console.error("[effect-clock] cleanup failed",r.def.tag,n)}}}function ch(r){if(!r.alive||r.epoch!==lh||!m.runtime||r.runtime!==m.runtime||!m.player||r.player!==m.player||!m.player.alive)return!1;try{return!r.def.isValid||r.def.isValid()!==!1}catch(e){return console.error("[effect-clock] validity failed",r.def.tag,e),!1}}function ap(r,e){if(!ch(r)){ji(r);return}try{r.def.callback(e)}catch(t){console.error("[effect-clock] pulse failed",r.def.tag,t),ji(r)}}function Ec(r,e={}){if(!r||!Number.isFinite(r.duration)||r.duration<0||!Number.isFinite(r.interval)||typeof r.callback!="function")throw new RangeError("Invalid timed effect");if(r.interval>0&&r.duration/r.interval>4096)throw new RangeError("Too many effect pulses");if($o)throw new Error("Cannot register an effect during lifecycle cleanup");const t={def:Object.freeze({...r,tag:r.tag??e.tag}),runtime:m.runtime,player:m.player,epoch:lh,alive:!0,elapsed:0,pulse:1};return Or.add(t),ch(t)?e.immediate&&r.interval>0&&ap(t,0):ji(t),{cancel:()=>ji(t)}}function ai(){if($o)return;$o=!0,lh++;const r=[...Or];Or.clear();try{for(const e of r)ji(e)}finally{$o=!1}}function ml(r){for(const e of[...Or]){if(!ch(e)){ji(e);continue}if(!(!Number.isFinite(r)||r<=0)){if(e.elapsed=Math.min(e.def.duration,e.elapsed+r),e.def.interval>0)for(;e.alive;){const t=e.pulse*e.def.interval;if(t>e.def.duration+pl(e.def.duration)||t>e.elapsed+pl(e.elapsed))break;e.pulse++,ap(e,Math.min(t,e.def.duration))}e.alive&&e.elapsed>=e.def.duration-pl(e.def.duration)&&ji(e)}}}const JS="modulepreload",QS=function(r){return"/wumingbu/"+r},_d={},gl=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=QS(l),l in _d)return;_d[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":JS,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},lp={prologue:()=>gl(()=>import("./level-CG5agZP0.js"),[]),"ch1-jingwei":()=>gl(()=>import("./level-86xCa90C.js"),__vite__mapDeps([0,1])),trial:()=>gl(()=>import("./level-CLmiCo7F.js"),__vite__mapDeps([2,1]))};class $S{constructor(){_(this,"def");_(this,"areaIndex",0);_(this,"waveIndex",-1);_(this,"phase","intro");_(this,"areaT",0);_(this,"areaEntered",!1);_(this,"waveT",0);_(this,"spawnedWaves",new Set);_(this,"soulLight",null);_(this,"ranThisLife",0);_(this,"endless",!1);_(this,"souls",0);_(this,"kills",0);_(this,"onAreaClear",null);_(this,"onWaveSpawn",null);_(this,"used",{melee:!1,loop:!1,line:!1,hook:!1,dash:!1,parry:!1});_(this,"soulBurstSeen",!1);_(this,"totalKills",0);_(this,"soulLightLight",null)}get area(){return this.def.areas[this.areaIndex]}get gateClosed(){var e;return((e=this.area)==null?void 0:e.gate)===!0&&this.areaEntered&&(this.phase==="intro"||this.phase==="fighting")}constrainToArea(e,t=0){const n=this.area;if(!n||!this.gateClosed)return e;const i=Math.max(0,n.radius-t);if(m.world.isBridge)e.z=it.clamp(e.z,n.center[1]-i,n.center[1]+i);else{const s=e.x-n.center[0],o=e.z-n.center[1],a=Math.hypot(s,o);a>i&&a>1e-4&&(e.x=n.center[0]+s*i/a,e.z=n.center[1]+o*i/a)}return e}start(e,t=0){var s;ai(),(s=m.chain)==null||s.resetTransient(),this.def=e,this.areaIndex=t,this.waveIndex=-1,this.phase="intro",this.areaT=0,this.waveT=0,this.souls=0,this.kills=0,this.resetUsed(),this.totalKills=0,this.soulBurstSeen=!1,this.ranThisLife=0,this.spawnedWaves.clear(),this.clearSoulLight(),this.endless=e.areas.every(o=>o.waves.length===0),m.enemies.endless=this.endless,m.enemies.clearAll(),m.enemies.endless=this.endless;const n=e.spawnAt??[0,0];m.player.pos.set(n[0],0,n[1]),m.player.vel.set(0,0,0),m.player.hp=m.player.maxHp,m.player.alive||m.player.revive();const i=this.area;this.areaEntered=!!i&&Math.hypot(n[0]-i.center[0],n[1]-i.center[1])<=i.radius-1}restartArea(){var n,i;ai(),(n=m.chain)==null||n.resetTransient(),(i=m.stones)==null||i.clear(),this.waveIndex=-1,this.phase="intro",this.areaT=0,this.waveT=0,this.spawnedWaves.clear(),m.enemies.clearAll();const e=this.area,t=e?e.center:[0,0];m.player.pos.set(t[0],0,t[1]-(e?e.radius*.8:0)),m.player.vel.set(0,0,0),m.player.hp=m.player.maxHp,this.areaEntered=!0,m.player.revive()}dropSouls(e,t){if(this.clearSoulLight(),t<=0)return;const n=m.fx.pillarMesh(e.clone(),16760928,7),i=new Ys(16752704,10,12,2);i.position.copy(e).setY(1.5),m.scene.add(i,n),this.soulLight={pos:e.clone(),souls:t,obj:n,alive:!0},this.soulLightLight=i,this.souls=0}clearSoulLight(){this.soulLight&&(m.scene.remove(this.soulLight.obj),this.soulLight.alive=!1,this.soulLight=null,this.soulLightLight&&(m.scene.remove(this.soulLightLight),this.soulLightLight=null))}tryPickup(){const e=this.soulLight;!(e!=null&&e.alive)||!m.player.alive||m.player.pos.distanceTo(e.pos)<1.6&&(this.souls+=e.souls,m.fx.burst(e.pos.clone().setY(1),16760928,24,10),m.fx.pillar(e.pos.clone(),16765056,8,.6),m.audio.play("soulburst",{vol:.6}),m.audio.play("parry",{vol:.5,pitch:1.3}),this.clearSoulLight())}addSouls(e){this.souls+=e}update(e){var s,o;const t=this.area;if(!t){this.phase="all-clear";return}if(this.tryPickup(),this.phase==="intro"&&!this.areaEntered){const a=m.player.pos;if(Math.hypot(a.x-t.center[0],a.z-t.center[1])>t.radius-1)return;this.areaEntered=!0,this.areaT=0}if(this.areaT+=e,this.phase==="intro"){this.areaT>.8&&(this.phase="fighting",this.waveT=0);return}if(this.phase!=="fighting"||(this.waveT+=e,this.endless))return;const n=m.enemies.alive;if(!t.waves.some((a,l)=>!this.spawnedWaves.has(l))&&n.length===0){this.phase="area-clear",(s=this.onAreaClear)==null||s.call(this,t,this.areaIndex),this.souls+=60,We.addSouls(60),m.audio.play("lock",{vol:.9,pitch:.8}),m.fx.pillar(m.player.pos.clone(),10475775,10,.8);return}for(let a=0;a<t.waves.length;a++){if(this.spawnedWaves.has(a))continue;const l=t.waves[a];if(l.at==="clear"?this.spawnedWaves.size>0&&n.length===0:this.waveT>=l.at){this.spawnedWaves.add(a),this.waveIndex=a,this.spawnWave(t,l),(o=this.onWaveSpawn)==null||o.call(this,l,a);break}}}nextArea(){var e,t;return ai(),(e=m.chain)==null||e.resetTransient(),(t=m.stones)==null||t.clear(),this.areaIndex+1>=this.def.areas.length?(this.phase="all-clear",!1):(this.areaIndex++,this.waveIndex=-1,this.areaEntered=!1,this.phase="intro",this.areaT=0,this.waveT=0,this.spawnedWaves.clear(),!0)}spawnWave(e,t){const[n,i]=e.center;for(const s of t.spawn){const o=s.ring??Math.min(e.radius*.85,16);for(let a=0;a<s.n;a++){const l=a/s.n*Math.PI*2+Math.random()*.4,c=o*(.85+Math.random()*.3),h=new S(n+Math.cos(l)*c,0,i+Math.sin(l)*c);m.world.clampPosition(h,2),m.enemies.spawn(s.type,h)}}m.audio.play("riser",{vol:.35,pitch:t.elite?.7:1.1}),t.elite&&m.fx.decal(m.fx.ringTex,new S(n,0,i),{size:2,sizeEnd:e.radius*2,life:.8,color:16724e3,alpha:.7})}onKill(e){this.kills++,this.totalKills++,this.souls+=Math.round(e*m.prog.modifiers.soulGain),this.ranThisLife++,qf(1),We.addKills(1)}markUsed(e){this.used[e]=!0}resetUsed(){this.used={melee:!1,loop:!1,line:!1,hook:!1,dash:!1,parry:!1}}settle(){We.addSouls(this.souls),We.clearLevel(this.def.id),this.souls=0}}class ew{constructor(e,t=[]){_(this,"valid");_(this,"seen",new Set);_(this,"queue",[]);_(this,"queued",new Set);_(this,"current",null);this.valid=new Set(e),this.restore(t)}restore(e){this.seen=new Set(Array.isArray(e)?e.filter(t=>typeof t=="string"&&this.valid.has(t)):[]),this.clearPending()}get discovered(){return[...this.seen]}get pendingCount(){return this.queue.length}has(e){return this.seen.has(e)}observe(e){return!this.valid.has(e)||this.seen.has(e)||this.queued.has(e)||this.current===e?!1:(this.queue.push(e),this.queued.add(e),!0)}beginNext(){if(this.current)return null;const e=this.queue.shift();return e?(this.queued.delete(e),this.current=e,this.seen.add(e),e):null}finish(){this.current=null}clearPending(){this.queue=[],this.queued.clear(),this.current=null}}const Bo="",zo="名录尚未展开",ca=Object.freeze([Object.freeze({id:"minion",name:"失籍游魂",epithet:"被涂掉名字之后，还剩一口气的那个人",region:"序章 · 奈何桥 · 桥头",story:Object.freeze(["他原本是渡口搬货的，一个冬天扛盐袋折了腰，死在自己那间漏雨的屋子里。同乡替他去籍上画了名，谁知道墨太淡，风一吹就没了。他到了桥头，簿子翻烂了也找不到自己这一行。","别的魂领了灯就往前走，他不敢走，怕走到尽头还是查无此人。他在桥头蹲了三天，把每个过路人的脸都记住了，只为了证明自己确实来过一趟。第四天他忘了自己叫什么。","他朝活人伸手，不是要伤人。他记得活人身上有温度、有名字、有一口气；只要按住一个活人，他就能借着那口气重新想起自己是谁。所以他一个也不肯放过。"]),warning:"没有甲，血量也不厚，可它从来不是单独一只。它们总是一拥而上，被围在中间时不要原地站桩——转身挪步把它们拉成一串，再一起清掉。",kind:"enemy",modelType:"minion"}),Object.freeze({id:"shield",name:"守簿役",epithet:"记性好到不用看簿子的老吏，也是被留在桥上的那一个",region:"序章 · 奈何桥 · 桥中",story:Object.freeze(["他在衙里管了三十年名册，闭着眼也能背出半城的人。簿子破的那夜他正抱着名册在灯下誊抄，火从窗纸外烧进来，他把名册揣在怀里，人被塌下来的梁压住了。","到了桥头，上头没给他排班，也没说让他过。他就自己站到桥中，把记得的名字一个一个报出去，替那些翻不到簿子的人点名。这么多年下来，他背熟了很多人，也忘掉了很多。","他举着那面旧簿册挡人，是因为每一个从他身边过去的活人，都可能让他想起又一个已经忘干净的名字。他宁可不听，宁可不认，也要把簿子举在自己胸前。"]),warning:"举盾挡在身前：从正面砍过去会被硬生生挡住，一滴血都不掉，只弹开一点火星。它挡不住从背后来的攻击，也挡不住锁阵把它整个人圈住——绕到侧后，或者用锁阵起爆从根上破。",kind:"enemy",modelType:"shield"}),Object.freeze({id:"cutter",name:"断名卒",epithet:"奉命割名的小卒，割到一半手抖了",region:"序章 · 奈何桥 · 桥中断栏",story:Object.freeze(["他奉命去石碑上割名，一天割三千个。上头说这些名字早该从世上抹掉，割干净了才算办完差。他割到第一千多个的时候，一眼认出自己妻子的名字也在这一批里。","他一刀下去偏了半分，那个名字只割掉一半。半截名字挂在那里，人既算不得死了，也算不得活着。他被罚留在桥上，手里那把割名的小刃从此放不下来。","他现在追着活人手上那根链子跑。链子拖到哪儿他就割到哪儿，因为那根链子上缠着许多还没割完的名字。他觉得只要割断一次，就能替妻子把剩下那半刀补上。"]),warning:"它比其他滞魂跑得更快，却经不起重击。它专门追着你移动时留下的锁阵拖尾下刀。优先点掉它，拖尾被剪断时锁阵就白铺了。",kind:"enemy",modelType:"cutter"}),Object.freeze({id:"brute",name:"负债狱卒",epithet:"守着牢门的人，自己也欠着一笔没还完的账",region:"序章 · 奈何桥 · 断桥",story:Object.freeze(["他在狱里守了四十年门。牢里死了人，上头只问他为什么没看住，不问人是怎么死的。他一年一年被扣俸，那笔账越扣越多，到死也没还清。","临终那个冬天他本可以在偏房烤火，他偏要走进牢里，拿钥匙把每一道门都锁上。他死后还在锁，锁到铁门上刻满了痕，刻满了，就轮到别人来找他讨。","他抡下来的每一下都很慢，慢到像是故意留给人躲。他并不想砸死谁，他只是要把这笔账推出去一个人，替他把欠的那些年还上，好让他自己能松一次手。"]),warning:"极慢、极重：起手那一记抡砸慢得看得清，可一旦落在身上要掉一大截血。硬拼换血不划算，它出手途中绕开，等它砸空再回头打。",kind:"enemy",modelType:"brute"}),Object.freeze({id:"jingwei",name:Bo,epithet:zo,region:"名录未记",story:Object.freeze([]),warning:"",kind:"figure"}),Object.freeze({id:"kuafu",name:Bo,epithet:zo,region:"名录未记",story:Object.freeze([]),warning:"",kind:"figure"}),Object.freeze({id:"mengpo",name:Bo,epithet:zo,region:"名录未记",story:Object.freeze([]),warning:"",kind:"figure"}),Object.freeze({id:"xingtian",name:Bo,epithet:zo,region:"名录未记",story:Object.freeze([]),warning:"",kind:"figure"})]),tw=new Map(ca.map(r=>[r.id,r]));new Set(ca.map(r=>r.id));function nw(r){if(!(typeof r!="string"||r.length===0))return tw.get(r)}const Md=3,iw=.72,sw=1.5,Ho=128,Sd=4096,rw=.4,wd=3.2,bd=1.15,Td=.008,ow=32,aw=465440,lw="(prefers-reduced-motion: reduce)",Ed=2e5,cw=400,Vo=(r,e,t)=>r<e?e:r>t?t:r,vl=()=>typeof document<"u"&&!!document;class hw{constructor(e){_(this,"host");_(this,"renderer",null);_(this,"canvas",null);_(this,"fallback",null);_(this,"scene");_(this,"camera");_(this,"pivot");_(this,"resizeObserver",null);_(this,"reducedQuery");_(this,"model",null);_(this,"mixer",null);_(this,"materials",new Set);_(this,"active",!1);_(this,"disposed",!1);_(this,"dragging",!1);_(this,"pointerId",-1);_(this,"lastX",0);_(this,"lastY",0);_(this,"spin",0);_(this,"yaw",0);_(this,"pitch",0);_(this,"lastTime",0);_(this,"radius",Md*.5);_(this,"reducedMotion",!1);_(this,"tick",e=>{var s;const t=this.renderer;if(!this.active||this.disposed||!t||!this.model)return;const n=e/1e3,i=this.lastTime?Math.min(.1,Math.max(0,n-this.lastTime)):0;this.lastTime=n,i>0&&(!this.dragging&&!this.reducedMotion&&(this.spin+=rw*i),(s=this.mixer)==null||s.update(i)),this.applyRotation(),t.render(this.scene,this.camera)});_(this,"onVisibilityChange",()=>{this.armLoop()});_(this,"onMotionChange",()=>{var e;this.reducedMotion=!!((e=this.reducedQuery)!=null&&e.matches),this.lastTime=0});_(this,"onPointerDown",e=>{var t,n;!this.canvas||e.button!==0||(this.dragging=!0,this.pointerId=e.pointerId,this.lastX=e.clientX,this.lastY=e.clientY,(n=(t=this.canvas).setPointerCapture)==null||n.call(t,e.pointerId),e.preventDefault())});_(this,"onPointerMove",e=>{if(!this.dragging||e.pointerId!==this.pointerId)return;const t=e.clientX-this.lastX,n=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.yaw=Vo(this.yaw+t*Td,-wd,wd),this.pitch=Vo(this.pitch+n*Td,-bd,bd),this.applyRotation(),e.preventDefault()});_(this,"onPointerUp",e=>{var t,n;!this.dragging||e.pointerId!==this.pointerId||(this.dragging=!1,this.pointerId=-1,(n=(t=this.canvas)==null?void 0:t.releasePointerCapture)==null||n.call(t,e.pointerId))});var s,o,a;if(!e||typeof e.appendChild!="function")throw new TypeError("SoulPortrait: 需要一个 HTMLElement 作为 host");this.host=e,this.scene=new qc,this.camera=new kt(ow,1,.1,60),this.pivot=new Nn,this.scene.add(this.pivot),this.scene.add(new Wf(13625074,.5));const t=new kr(16767400,2.1);t.position.set(2.6,3.4,4.2);const n=new kr(9423103,1.15);n.position.set(-3.2,1.2,-2.6),this.scene.add(t,n);const i=this.host.style;if(i&&!i.position&&(i.position="relative"),this.reducedQuery=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia(lw):null,this.reducedMotion=!!((s=this.reducedQuery)!=null&&s.matches),(a=(o=this.reducedQuery)==null?void 0:o.addEventListener)==null||a.call(o,"change",this.onMotionChange),this.renderer=this.tryCreateRenderer(),this.renderer){const l=this.renderer;l.setClearColor(aw,.92),l.shadowMap.enabled=!1,l.outputColorSpace=pt;const c=l.domElement;this.canvas=c,c.style.display="block",c.style.width="100%",c.style.height="100%",c.style.borderRadius="inherit",c.style.touchAction="none",c.style.userSelect="none","webkitUserSelect"in c.style&&(c.style.webkitUserSelect="none"),c.setAttribute("aria-hidden","true"),c.addEventListener("pointerdown",this.onPointerDown),c.addEventListener("pointermove",this.onPointerMove),c.addEventListener("pointerup",this.onPointerUp),c.addEventListener("pointercancel",this.onPointerUp),this.host.appendChild(c),typeof ResizeObserver=="function"&&(this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.host)),this.resize()}vl()&&document.addEventListener("visibilitychange",this.onVisibilityChange)}show(e,t){if(this.disposed)return;if(this.hide(),!this.renderer){this.showFallback("当前设备无法显示模型，故事仍可阅读。");return}const n=this.buildClone(e);if(!n){this.showFallback("角色形象暂不可用。");return}this.radius=n.radius,this.model=n.root,this.pivot.add(n.root);const i=uw(t,e);if(i.length){const s=new oh(n.root);s.timeScale=1;for(const o of i){const a=s.clipAction(o);a.setLoop(Fc,1/0),a.clampWhenFinished=!1,a.reset().play()}this.mixer=s}this.active=!0,this.spin=0,this.yaw=0,this.pitch=0,this.applyRotation(),this.resize(),this.armLoop()}hide(){var e;this.active=!1,this.armLoop(),this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model),this.mixer=null),(e=this.model)==null||e.removeFromParent(),this.model=null;for(const t of this.materials)pw(t);this.materials.clear(),this.fallback&&(this.fallback.style.display="none")}dispose(){var e,t,n,i,s,o,a;if(!this.disposed){this.hide(),this.disposed=!0,vl()&&document.removeEventListener("visibilitychange",this.onVisibilityChange),(e=this.resizeObserver)==null||e.disconnect(),(n=(t=this.reducedQuery)==null?void 0:t.removeEventListener)==null||n.call(t,"change",this.onMotionChange),this.canvas&&(this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp));try{(i=this.renderer)==null||i.setAnimationLoop(null),(s=this.renderer)==null||s.dispose()}catch{}this.renderer=null,(o=this.canvas)==null||o.remove(),this.canvas=null,(a=this.fallback)==null||a.remove(),this.fallback=null}}get diagnostics(){return{active:this.active,canvasCount:this.canvas?1:0,mode:this.disposed?"disposed":this.renderer?"webgl":"fallback",materialCount:this.materials.size}}createRenderer(){return new wf({alpha:!0,antialias:!0,powerPreference:"low-power"})}tryCreateRenderer(){try{const e=this.createRenderer();return e||(this.showFallback("WebGLRenderer 不可用"),null)}catch(e){return this.showFallback(e),null}}dpr(){const e=typeof window<"u"?window.devicePixelRatio:1;return typeof e=="number"&&e>0?e:1}armLoop(){const e=this.renderer;if(!e)return;this.lastTime=0;const t=vl()&&document.hidden;e.setAnimationLoop(this.active&&!this.disposed&&!t?this.tick:null)}buildClone(e){if(!e||typeof e.traverse!="function")return null;const t=ah(e);return t.name="soul-portrait-clone",t.traverse(n=>{const i=n;if(!i.isMesh)return;const s=i.material;Array.isArray(s)?i.material=s.map(o=>this.takeMaterial(o)):s&&(i.material=this.takeMaterial(s)),i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1}),{root:t,radius:dw(t,Md)}}takeMaterial(e){const t=e.clone();return this.materials.add(t),t}resize(){var h,u;const e=this.renderer;if(!e||!this.canvas)return;const t=(u=(h=this.host).getBoundingClientRect)==null?void 0:u.call(h),n=t&&t.width?t.width:this.host.clientWidth||0,i=t&&t.height?t.height:this.host.clientHeight||0,s=Vo(Math.round(n)||Ho,Ho,Sd),o=Vo(Math.round(i)||Ho,Ho,Sd);e.setPixelRatio(Math.min(sw,this.dpr())),e.setSize(s,o,!1),this.canvas.style.width="100%",this.canvas.style.height="100%";const a=this.camera.fov*Math.PI/360;this.camera.aspect=s/o;const l=Math.atan(Math.tan(a)*Math.min(1,this.camera.aspect)),c=this.radius/Math.max(.05,iw*Math.tan(l));this.camera.position.set(0,0,c),this.camera.near=Math.max(.05,c*.05),this.camera.far=c*4+10,this.camera.updateProjectionMatrix(),this.camera.lookAt(0,0,0)}applyRotation(){this.pivot.rotation.y=this.yaw+this.spin,this.pivot.rotation.x=this.pitch}showFallback(e){const t=String((e==null?void 0:e.message)??e??"WebGL unavailable"),n=document.createElement("div");n.dataset.role="soul-portrait-fallback",n.setAttribute("role","status"),n.style.cssText=["position:absolute","inset:0","display:flex","align-items:center","justify-content:center","background:rgba(7,26,32,0.92)","border-radius:inherit","color:#cfe6f2",'font:12px/1.5 system-ui,-apple-system,"Microsoft YaHei",sans-serif',"text-align:center","padding:10px","box-sizing:border-box","pointer-events:none"].join(";"),n.textContent="3D 立绘不可用（本机 WebGL 初始化失败）",n.title=t,this.fallback=n,this.host.appendChild(n)}}function uw(r,e){var s;const t=[],n=o=>{if(Array.isArray(o))for(const a of o)a&&t.push(a)};n(r),t.length||n((s=e.userData)==null?void 0:s.animations);const i=t.find(o=>/idle|standing|breath/i.test(o.name));return i?[i]:[]}function dw(r,e){r.position.set(0,0,0),r.rotation.set(0,0,0),r.scale.setScalar(1),r.updateMatrixWorld(!0);const t=fw(r),n=t.getSize(new S),i=e/Math.max(n.x,n.y,n.z,.01);r.scale.setScalar(i);const s=t.getCenter(new S).multiplyScalar(i);return r.position.set(-s.x,-s.y,-s.z),r.updateMatrixWorld(!0),Math.max(.2,n.length()*.5*i)}function fw(r){const e=new Mt,t=new S;let n=0;return r.traverse(i=>{var h,u;if(n>=Ed)return;const s=i;if(s.isBone&&s.position){e.expandByPoint(t.copy(s.position).applyMatrix4(i.matrixWorld)),n++;return}const o=i;if(!o.isMesh)return;const a=(u=(h=o.geometry)==null?void 0:h.getAttribute)==null?void 0:u.call(h,"position"),l=Number((a==null?void 0:a.count)??0);if(!a||!l)return;const c=Math.max(1,Math.ceil(l/cw));for(let d=0;d<l&&(typeof o.getVertexPosition=="function"?o.getVertexPosition(d,t):t.fromBufferAttribute(a,d),e.expandByPoint(t.applyMatrix4(i.matrixWorld)),!(++n>=Ed));d+=c);}),e.isEmpty()&&e.set(new S(-.5,0,-.5),new S(.5,2,.5)),e}function pw(r){try{r.dispose()}catch{}}const xl=r=>r.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class mw{constructor(){_(this,"store",new ew(ca.map(e=>e.id)));_(this,"root");_(this,"list");_(this,"portraitHost");_(this,"portraitStatus");_(this,"portrait");_(this,"mode","library");_(this,"previousFocus",null);_(this,"selected",null);_(this,"portraitFailed",!1);_(this,"revision",0);_(this,"onGateChange",null);_(this,"modelForEntry",null);this.root=document.createElement("dialog"),this.root.id="soul-archive",this.root.className="soul-archive",this.root.setAttribute("aria-labelledby","soul-archive-title"),this.root.innerHTML=`<div class="soul-shell">
      <header class="soul-head"><div><span class="soul-kicker">魂藏</span><h2 id="soul-archive-title">所见之魂，皆有所来</h2></div>
      <button class="soul-close" type="button" data-soul-action="close" aria-label="关闭魂藏">关闭</button></header>
      <div class="soul-body"><nav class="soul-index" aria-label="魂藏目录"></nav>
      <section class="soul-detail" aria-label="角色详情"><div class="soul-portrait-wrap"><div class="soul-portrait"></div><p class="soul-portrait-status">形象准备中</p><span class="soul-portrait-note">拖动可转动形象</span></div>
      <div class="soul-copy"><span class="soul-region"></span><h3 class="soul-name"></h3><p class="soul-epithet"></p><div class="soul-story"></div><aside class="soul-warning"></aside></div></section></div>
      <footer class="soul-foot"><p class="soul-foot-note"></p><button type="button" data-soul-action="continue">继续</button></footer></div>`,document.body.appendChild(this.root),this.list=this.root.querySelector(".soul-index"),this.portraitHost=this.root.querySelector(".soul-portrait"),this.portraitStatus=this.root.querySelector(".soul-portrait-status"),this.root.addEventListener("cancel",e=>{e.preventDefault(),this.close()}),this.root.addEventListener("click",e=>{const t=e.target.closest("button");if(!t)return;if(t.dataset.soulAction){this.close();return}const n=t.dataset.soulId;n&&this.store.has(n)&&this.renderDetail(n)}),this.root.addEventListener("keydown",e=>{if(e.code==="Escape"){e.preventDefault(),e.stopPropagation(),this.close();return}if(e.code==="Tab"){const t=[...this.root.querySelectorAll("button:not(:disabled)")].filter(s=>s.offsetParent!==null),n=t[0],i=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),i==null||i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),n==null||n.focus())}e.stopPropagation()})}get blocking(){return this.root.open}get discovered(){return this.store.discovered}get diagnostics(){return{blocking:this.blocking,mode:this.mode,selected:this.selected,discovered:this.store.discovered,pending:this.store.pendingCount,portraitFailed:this.portraitFailed}}syncSave(){this.close(),this.store.restore(We.data.discoveredSouls)}observe(e){return this.store.observe(e)}pump(e){if(!e||this.blocking)return;const t=this.store.beginNext();t&&(We.data.discoveredSouls=this.store.discovered,We.save(),this.open("encounter"),this.renderDetail(t))}openLibrary(){this.blocking||(this.open("library"),this.renderDetail(this.store.discovered[0]??null))}open(e){this.mode=e,this.previousFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.root.dataset.mode=e,this.root.querySelector("h2").textContent=e==="encounter"?"初遇之魂":"所见之魂，皆有所来",this.root.querySelector(".soul-foot-note").textContent=e==="encounter"?"战斗已暂停。故事已记入魂藏，同类不会重复打断。":"已遇见的角色可回看。未见之魂，尚无名可录。",this.root.querySelector('[data-soul-action="continue"]').textContent=e==="encounter"?"记下，继续前行":"返回",this.renderList(),this.changeGate(),typeof this.root.showModal=="function"?this.root.showModal():this.root.setAttribute("open",""),this.root.querySelector('[data-soul-action="continue"]').focus()}renderList(){this.list.innerHTML=ca.map(e=>this.store.has(e.id)?`<button type="button" class="soul-entry" data-soul-id="${xl(e.id)}"><span>${xl(e.name)}</span><small>${xl(e.epithet)}</small></button>`:'<button type="button" class="soul-entry soul-unknown" disabled aria-label="未遇见的角色"><span>？？？</span><small>未见之魂</small></button>').join("")}renderDetail(e){var l,c;const t=e&&this.store.has(e)?nw(e):void 0;this.selected=(t==null?void 0:t.id)??null,(l=this.portrait)==null||l.hide(),this.portraitStatus.textContent=t?"形象准备中":"尚未记录任何角色",this.portraitStatus.hidden=!1;const n=this.root.querySelector(".soul-name"),i=this.root.querySelector(".soul-region"),s=this.root.querySelector(".soul-epithet"),o=this.root.querySelector(".soul-story"),a=this.root.querySelector(".soul-warning");if(n.textContent=(t==null?void 0:t.name)??"？？？",i.textContent=(t==null?void 0:t.region)??"未见之魂",s.textContent=(t==null?void 0:t.epithet)??"每一次相遇，都会留下一页。",o.replaceChildren(),a.textContent=t?"辨险 · "+t.warning:"继续前行，魂藏会在初遇时自动记下角色的来历。",t){for(const u of t.story){const d=document.createElement("p");d.textContent=u,o.appendChild(d)}const h=(c=this.modelForEntry)==null?void 0:c.call(this,t);if(h)try{this.portrait??(this.portrait=new hw(this.portraitHost)),this.portrait.show(h.scene,h.clips);const u=this.portrait.diagnostics.mode==="webgl"&&this.portrait.diagnostics.active;this.portraitStatus.hidden=u,u||(this.portraitFailed=!0,this.portraitStatus.textContent="当前设备无法显示形象，故事仍可阅读。")}catch{this.portraitFailed=!0,this.portraitStatus.textContent="当前设备无法显示形象，故事仍可阅读。"}else this.portraitStatus.textContent="形象尚未准备好，故事仍可阅读。"}this.list.querySelectorAll("[data-soul-id]").forEach(h=>{const u=h.dataset.soulId===this.selected;h.classList.toggle("selected",u),h.setAttribute("aria-current",String(u))})}close(){var e,t;this.blocking&&((e=this.portrait)==null||e.hide(),typeof this.root.close=="function"?this.root.close():this.root.removeAttribute("open"),this.store.finish(),this.changeGate(),(t=this.previousFocus)!=null&&t.isConnected&&this.previousFocus.focus(),this.previousFocus=null)}clearPending(){this.close(),this.store.clearPending()}changeGate(){var e;this.revision++,(e=this.onGateChange)==null||e.call(this)}}const Wt=new mw,gw={high:"高",medium:"中",low:"低"};class vw{constructor(){_(this,"root");_(this,"screen",null);_(this,"deathEl");_(this,"titleEl");_(this,"paused",!1);_(this,"hooks");_(this,"tipQueue",[]);_(this,"tipActive",null);_(this,"tipPending",null);_(this,"tipTimer",null);_(this,"tipFading",null);this.root=document.createElement("div"),this.root.id="ui",document.body.appendChild(this.root),this.deathEl=document.createElement("div"),this.deathEl.id="death",this.deathEl.innerHTML='<div class="brush">魂散</div>',document.body.appendChild(this.deathEl),this.titleEl=document.createElement("div"),this.titleEl.id="titlecard",this.titleEl.innerHTML='<div class="tc-name"></div><div class="tc-sub"></div>',document.body.appendChild(this.titleEl)}get isPaused(){return this.paused}panel(e,t=""){this.clear();const n=document.createElement("div");return n.className="screen "+t,n.innerHTML=e,this.root.appendChild(n),this.screen=n,n}clear(){this.screen&&(this.screen.remove(),this.screen=null),this.root.classList.remove("visible")}show(){this.root.classList.add("visible")}bind(e,t){e.querySelectorAll("[data-act]").forEach(n=>{const i=t[n.dataset.act];i&&n.addEventListener("click",()=>{m.audio.play("hookHit",{vol:.5,pitch:1.4}),i()})})}title(e){const t=We.hasExisting,n=document.body.classList.contains("touch"),i=this.panel(`
      <div class="menu-art"></div>
      <div class="vignette"></div>
      <div class="menu">
        <h1>无名簿</h1>
        <p class="tag">有名者，有命。无名者，无命。</p>
        <div class="btns">
          ${t?'<button data-act="continue">继续</button>':""}
          <button data-act="new">${t?"重新开始":"开始"}</button>
          ${t?'<button data-act="hub">奈何桥</button>':""}
          <button data-act="settings">设置</button>
          <button data-act="archive">魂藏</button>
        </div>
        <p class="foot">${n?"横屏触控：左侧摇杆移动 · 右侧按键战斗 · 空白场景拖动观察 · 右上角暂停":"方向键 / WASD 移动 · 鼠标左键 攻击 · 空格 冲刺 · 右键 链钩 · E 绞索 · 中键观察 / C 复位"}</p>
      </div>
    `,"title-screen");if(e){const s=document.createElement("p");s.className="start-error",s.setAttribute("role","alert"),s.textContent=e,i.querySelector(".menu").appendChild(s)}this.show(),this.bind(i,{continue:()=>this.hooks.startLevel(We.data.level),new:()=>{We.reset(),Wt.syncSave(),this.hooks.startLevel("prologue")},hub:()=>this.hooks.toHub(),settings:()=>this.settings(()=>this.title()),archive:()=>Wt.openLibrary()})}pause(e,t){var i;if(this.paused)return;(i=m.input)==null||i.reset(),this.paused=!0,this.titleEl.classList.remove("show");const n=this.panel(`
      <div class="vignette"></div>
      <div class="menu">
        <h2>暂停</h2>
        <div class="btns">
          <button data-act="resume">继续</button>
          <button data-act="archive">魂藏</button>
          <button data-act="settings">设置</button>
          <button data-act="hub">回到桥头</button>
        </div>
      </div>
    `,"pause-screen");this.show(),this.bind(n,{archive:()=>Wt.openLibrary(),resume:()=>{this.close(),e()},settings:()=>this.settings(()=>{this.paused=!1,this.pause(e,t)}),hub:()=>{this.close(),t()}})}close(){var e;(e=m.input)==null||e.reset(),this.paused=!1,this.clear()}settings(e){const t=We.data.settings,n=this.panel(`
      <div class="vignette"></div>
      <div class="menu">
        <h2>设置</h2>
        <div class="row"><label>主音量</label><input type="range" min="0" max="1" step="0.05" value="${t.master}" data-set="master"><span data-out="master">${Go(t.master)}</span></div>
        <div class="row"><label>音效</label><input type="range" min="0" max="1" step="0.05" value="${t.sfx}" data-set="sfx"><span data-out="sfx">${Go(t.sfx)}</span></div>
        <div class="row"><label>音乐</label><input type="range" min="0" max="1" step="0.05" value="${t.music}" data-set="music"><span data-out="music">${Go(t.music)}</span></div>
        <div class="row"><label>画质</label>
          <div class="segs" data-qual>
            ${["high","medium","low"].map(i=>`<button class="${t.quality===i?"on":""}" data-q="${i}">${gw[i]}</button>`).join("")}
          </div>
        </div>
        <div class="btns"><button data-act="back">返回</button></div>
      </div>
    `,"settings-screen");this.show(),n.querySelectorAll("input[type=range]").forEach(i=>{i.addEventListener("input",()=>{const s=i.dataset.set,o=Number(i.value);We.data.settings[s]=o,n.querySelector(`[data-out=${s}]`).textContent=Go(o),m.audio.volumes[s]=o,m.audio.applyVolumes()})}),n.querySelectorAll("[data-q]").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.q;We.data.settings.quality=s,We.save(),n.querySelectorAll("[data-q]").forEach(o=>o.classList.toggle("on",o===i)),cp(s)})}),this.bind(n,{back:e})}areaTitle(e,t){this.titleEl.querySelector(".tc-name").textContent=e,this.titleEl.querySelector(".tc-sub").textContent=t??"",this.titleEl.classList.add("show"),setTimeout(()=>this.titleEl.classList.remove("show"),2600)}showDeath(){this.deathEl.classList.add("show"),document.body.classList.add("dead")}hideDeath(){this.deathEl.classList.remove("show"),document.body.classList.remove("dead")}result(e,t,n,i,s){const a=e.id==="prologue"?'<p class="demo-note">序章已完成。后续章节的资金尚未到位，目前是一个可玩的 demo——已经做出来的内容会继续开放给你，尚未完成的部分还在路上。</p>':"",l=this.panel(`
      <div class="vignette"></div>
      <div class="menu">
        <h2>${e.name}</h2>
        <p class="tag">已通</p>
        <div class="stats">
          <div><span>${t}</span><small>收魂</small></div>
          <div><span>${n}</span><small>魂火</small></div>
          <div><span>${We.data.lamps}</span><small>桥灯</small></div>
        </div>
        ${a}
        <div class="btns">
          ${i?`<button data-act="next">前往 ${lp[i]?"下一章":"继续"}</button>`:""}
          <button data-act="hub">回到桥头</button>
        </div>
      </div>
    `,"result-screen");this.show(),this.bind(l,{next:()=>{i&&this.hooks.startLevel(i)},hub:()=>s?s():this.hooks.toTitle()})}showTip(e,t){var s;const n=document.getElementById("tip-"+e);if(this.tipActive===e&&n){n.innerHTML=t;return}if(((s=this.tipPending)==null?void 0:s.id)===e){this.tipPending.html=t;return}const i=this.tipQueue.find(o=>o.id===e);if(i){i.html=t;return}this.tipActive===null&&this.tipPending===null&&!this.tipFading?this.mountTip(e,t):(this.tipQueue.push({id:e,html:t}),this.advanceTip())}mountTip(e,t){var i;(i=document.getElementById("tip-"+e))==null||i.remove(),this.tipActive=e;const n=document.createElement("div");n.id="tip-"+e,n.className="tip",n.innerHTML=t,document.getElementById("hud").appendChild(n),requestAnimationFrame(()=>n.classList.add("in"))}advanceTip(){if(this.tipActive!==null||this.tipPending!==null)return;const e=this.tipQueue.shift();e&&(this.tipPending=e,this.tipTimer=setTimeout(()=>{this.tipPending===e&&(this.tipPending=null,this.tipTimer=null,this.mountTip(e.id,e.html))},520))}hideTip(e){var t;if(this.tipActive===e){const n=document.getElementById("tip-"+e);n&&(n.classList.add("out"),this.tipFading=n,setTimeout(()=>{n.remove(),this.tipFading===n&&(this.tipFading=null,this.advanceTip())},500)),this.tipActive=null,this.advanceTip()}else((t=this.tipPending)==null?void 0:t.id)===e?(this.tipTimer!==null&&clearTimeout(this.tipTimer),this.tipTimer=null,this.tipPending=null,this.advanceTip()):this.tipQueue=this.tipQueue.filter(n=>n.id!==e)}clearTips(){this.tipTimer!==null&&clearTimeout(this.tipTimer),this.tipTimer=null,this.tipPending=null,this.tipFading=null,document.querySelectorAll(".tip").forEach(e=>e.remove()),this.tipQueue=[],this.tipActive=null}custom(e,t,n){var s;const i=this.panel(`
      <div class="vignette"></div>
      <div class="panel ${n}-panel">
        <h2>${e}</h2>
        <div class="p-body">${t}</div>
        <div class="btns"><button data-act="close">关闭</button></div>
      </div>
    `,"custom-screen "+n+"-screen");return this.show(),(s=m.input)==null||s.reset(),this.paused=!0,this.bind(i,{close:()=>{this.paused=!1,this.clear()}}),i}hint(e,t,n=6e3){const i="hint-"+t;if(document.getElementById(i))return;const s=document.createElement("div");s.id=i,s.className="tip",s.innerHTML=e,document.getElementById("hud").appendChild(s),requestAnimationFrame(()=>s.classList.add("in")),setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),500)},n)}}let tn;function xw(r){tn=r}function Go(r){return Math.round(r*100)+"%"}function cp(r){var s;const e=m.renderer;if(!e)return;const t=matchMedia("(pointer: coarse)").matches;e.setPixelRatio(r==="high"?Math.min(devicePixelRatio,t?1:1.35):r==="medium"?1:.85),e.shadowMap.enabled=r==="high",e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0,m.bloom&&(m.bloom.enabled=r!=="low");const n=m.smaa;n&&(n.enabled=r!=="low");const i=m.gtao;i&&(i.enabled=!1),e.setSize(innerWidth,innerHeight),(s=m.composer)==null||s.setSize(innerWidth,innerHeight)}const yw="/wumingbu/assets/ui/ink-mask.png",yl="/wumingbu/assets/vfx/soul-burst-1k.png",_w=350,Ad=12,Cd=30,Mw=900;class Sw{constructor(){_(this,"root");_(this,"playing",!1);_(this,"skip",!1);_(this,"nextShot",!1);_(this,"fast",!1);_(this,"shotRev",0);_(this,"canvas");_(this,"ctx");_(this,"particles",[]);_(this,"fxKind");_(this,"decoded",new Map);_(this,"rafId",0);_(this,"lastT",0);_(this,"shotNo",0);_(this,"shotTotal",0);_(this,"subEl");_(this,"textEl");_(this,"voiceEl");_(this,"progressEl");_(this,"counterEl");_(this,"keyHandler",e=>{if(this.playing&&!(e.repeat||this.isControl(e.target))){if(e.code==="Escape"){this.skip=!0;return}(e.code==="Space"||e.code==="Enter"||e.code==="KeyJ")&&this.advance()}});_(this,"pDownX",0);_(this,"pDownY",0);_(this,"pDownId",-1);_(this,"pMoved",!1);_(this,"lastTapT",0);_(this,"onPointerDown",e=>{if(!(!this.playing||!e.isPrimary)){if(this.pDownId!==-1){this.pMoved=!0;return}this.pDownId=e.pointerId,this.pDownX=e.clientX,this.pDownY=e.clientY,this.pMoved=!1}});_(this,"onPointerMove",e=>{if(e.pointerId!==this.pDownId)return;const t=e.clientX-this.pDownX,n=e.clientY-this.pDownY;t*t+n*n>Ad*Ad&&(this.pMoved=!0)});_(this,"onPointerUp",e=>{!this.playing||e.pointerId!==this.pDownId||(this.pDownId=-1,!this.pMoved&&(this.isControl(e.target)||this.handleTap()))});_(this,"onPointerCancel",e=>{e.pointerId===this.pDownId&&(this.pDownId=-1),this.pMoved=!0});_(this,"onBtnClick",e=>{var n,i;const t=(i=(n=e.target)==null?void 0:n.closest)==null?void 0:i.call(n,".cs-btn");!t||!this.playing||(t.dataset.act==="skip"?this.skip=!0:(this.fast=!0,this.nextShot=!0))});_(this,"inkT",0);this.root=document.createElement("div"),this.root.id="cutscene",this.root.innerHTML=`
      <div class="cs-stage">
        <div class="cs-layer" data-i="0"></div>
        <div class="cs-layer" data-i="1"></div>
      </div>
      <canvas class="cs-fx"></canvas>
      <div class="cs-flash" aria-hidden="true"></div>
      <div class="cs-bar"><div class="cs-progress"></div></div>
      <div class="cs-skip">双击 / Space 下一张 · Esc 跳过</div>
      <div class="cs-ctl">
        <button type="button" class="cs-btn" data-act="next">下一张</button>
        <button type="button" class="cs-btn" data-act="skip">跳过介绍</button>
      </div>
      <div class="cs-count"><span class="cs-now">1</span>/<span class="cs-all">1</span></div>
      <div class="cs-sub"><div class="cs-voice"></div><div class="cs-text"></div></div>
      <div class="cs-ink"></div>
    `,document.body.appendChild(this.root),this.canvas=this.root.querySelector(".cs-fx"),this.ctx=this.canvas.getContext("2d"),this.subEl=this.root.querySelector(".cs-sub"),this.textEl=this.root.querySelector(".cs-text"),this.voiceEl=this.root.querySelector(".cs-voice"),this.progressEl=this.root.querySelector(".cs-progress"),this.counterEl=this.root.querySelector(".cs-count"),addEventListener("keydown",this.keyHandler),addEventListener("resize",()=>this.resize()),this.root.addEventListener("pointerdown",this.onPointerDown),this.root.addEventListener("pointermove",this.onPointerMove),this.root.addEventListener("pointerup",this.onPointerUp),this.root.addEventListener("pointercancel",this.onPointerCancel),this.root.addEventListener("click",this.onBtnClick)}decode(e){let t=this.decoded.get(e);return t||(t=new Promise(n=>{const i=new Image;i.src=e,i.decode().then(()=>n(),()=>n())}),this.decoded.set(e,t)),t}advance(){this.fast?this.nextShot=!0:this.fast=!0}handleTap(){const e=performance.now();this.lastTapT>0&&e-this.lastTapT<=_w?(this.lastTapT=0,this.fast=!0,this.nextShot=!0):(this.lastTapT=e,this.fast=!0)}isControl(e){return e instanceof Element&&!!e.closest(".cs-btn")}resize(){const e=Math.min(devicePixelRatio,2);this.canvas.width=innerWidth*e,this.canvas.height=innerHeight*e,this.ctx.setTransform(e,0,0,e,0,0)}async play(e){if(!(!e.length||this.playing)){this.playing=!0,this.skip=!1,this.nextShot=!1,this.fast=!1,this.shotNo=1,this.lastTapT=0,this.pDownId=-1,this.shotTotal=e.length,this.updateCounter(),this.flashEl().style.opacity="0",this.resize(),this.root.classList.add("show"),document.body.classList.add("cutscene");try{if(await this.readyOrSkip(Promise.all([this.decode(e[0].img),...(e[0].layers??[]).map(t=>this.decode(t.img))])),e.some(t=>t.transition==="flash")&&this.decode(yl),e.slice(1).forEach(t=>{this.decode(t.img),(t.layers??[]).forEach(n=>void this.decode(n.img))}),this.layerEls().forEach(t=>{t.style.opacity="0",t.style.backgroundImage=""}),await this.wait(.1),this.skip)return;for(let t=0;t<e.length&&(t>0&&(this.nextShot=!1,this.fast=!1),this.lastTapT=0,this.shotNo=t+1,this.updateCounter(),await this.showShot(e[t],t),!this.skip);t++);}finally{await this.finish()}}}async readyOrSkip(e){let t=!1,n;for(e.then(()=>{t=!0},i=>{n=i,t=!0});!t&&!this.skip;)await this.wait(Cd/1e3);if(n)throw n}async finish(){this.shotRev++,this.nextShot=!1,this.fast=!1,this.root.classList.remove("show"),document.body.classList.remove("cutscene"),this.subEl.classList.remove("show"),this.progressEl.style.width="0%",this.layerEls().forEach(e=>{e.style.opacity="0",e.style.backgroundImage=""}),this.stopFx(),this.playing=!1,this.skip=!1,await this.wait(.6)}layerEls(){return[...this.root.querySelectorAll(".cs-layer")]}updateCounter(){const e=this.counterEl.querySelector(".cs-now"),t=this.counterEl.querySelector(".cs-all");e&&(e.textContent=String(this.shotNo)),t&&(t.textContent=String(this.shotTotal))}async showShot(e,t){const n=this.layerEls(),i=n[t%2],s=n[(t+1)%2],o=++this.shotRev,a=e.transition==="flash"&&matchMedia("(prefers-reduced-motion: reduce)").matches?"fade":e.transition??"fade";if(await this.readyOrSkip(Promise.all([this.decode(e.img),...(e.layers??[]).map(f=>this.decode(f.img))])),this.skip||this.nextShot)return;i.style.backgroundImage=`url("${e.img}")`;const l=e.cam??{from:[50,50,1.06],to:[50,50,1.16]};i.style.transition="none",i.style.transform=`translate(${50-l.from[0]}%, ${50-l.from[1]}%) scale(${l.from[2]})`,i.style.opacity=a==="cut"?"1":"0";for(const f of i.querySelectorAll(".cs-par"))f.remove();for(const f of e.layers??[]){const v=document.createElement("div");v.className="cs-par",v.style.backgroundImage=`url("${f.img}")`,v.dataset.depth=String(f.depth),v.style.transition="none",v.style.transform=`translate(0,0) scale(${1+f.depth*.04})`,i.appendChild(v)}if(e.text?(this.voiceEl.textContent=e.voice??"",this.voiceEl.style.display=e.voice?"block":"none",this.textEl.textContent="",this.typewriter(this.textEl,e.text,e.dur,o),this.subEl.classList.add("show")):this.subEl.classList.remove("show"),a==="ink"?(await this.inkCover(),i.style.opacity="1",s.style.transition="none",s.style.opacity="0",s.style.transform="scale(1.06)",await this.wait(.05),await this.inkReveal()):a==="flash"?await this.flashTransition(i,s):a==="fade"?(i.offsetWidth,i.style.transition="opacity .4s linear",i.style.opacity="1",s.style.transition="opacity .4s linear",s.style.opacity="0",await this.wait(.42)):(i.style.opacity="1",s.style.transition="none",s.style.opacity="0"),this.skip||this.nextShot){this.endShot(e,o);return}const c=performance.now();i.style.transition=`transform ${e.dur+.4}s linear, opacity .45s linear`,i.style.transform=`translate(${50-l.to[0]}%, ${50-l.to[1]}%) scale(${l.to[2]})`;for(const f of i.querySelectorAll(".cs-par")){const v=Number(f.dataset.depth);f.style.transition=`transform ${e.dur+.4}s linear, opacity .5s linear`,f.style.transform=`translate(${-v*4}%, ${-v*2.5}%) scale(${1+v*.06})`,f.style.opacity="1"}this.startFx(e.fx);const h=performance.now(),u=e.dur*1e3;for(;performance.now()-h<u&&!(this.skip||this.nextShot);){const f=(performance.now()-h)/u;this.progressEl.style.width=f*100+"%",await this.wait(Cd/1e3)}const d=Mw-(performance.now()-c);this.endShot(e,o),d>0&&await this.wait(Math.min(.25,d/1e3))}endShot(e,t){e.text&&t===this.shotRev&&(this.textEl.textContent=e.text),t===this.shotRev&&(this.nextShot=!1,this.fast=!1,this.subEl.classList.remove("show"),this.shotRev++)}async typewriter(e,t,n,i){const s=Math.min(.045,n*.7/Math.max(t.length,1));e.textContent="";for(let o=0;o<t.length;o++){if(i!==this.shotRev||this.skip)return;if(this.fast){e.textContent=t;return}e.textContent+=t[o];const a=/[，。！？、；：]/.test(t[o])?.2:s;await this.wait(a)}i===this.shotRev&&(e.textContent=t)}flashEl(){return this.root.querySelector(".cs-flash")}async flashTransition(e,t){await this.decode(yl);const n=this.flashEl();n.style.backgroundImage=`url("${yl}")`,n.style.transition="none",n.style.transform="scale(.78)",n.style.opacity="0",n.offsetWidth,n.style.transition="opacity .16s ease-in, transform .64s cubic-bezier(.2,.7,.2,1)",n.style.transform="scale(1.32)",n.style.opacity=".86",await this.wait(.17),e.style.transition="opacity .22s ease-out",e.style.opacity="1",t.style.transition="opacity .22s ease-out",t.style.opacity="0",n.style.transition="opacity .46s ease-out, transform .46s ease-out",n.style.transform="scale(1.5)",n.style.opacity="0",await this.wait(.48),n.style.transition="none",n.style.transform="scale(.78)"}inkEl(){return this.root.querySelector(".cs-ink")}setInk(e,t){const n=this.inkEl();n.style.backgroundImage=`url("${yw}")`,n.style.transition=t,n.style.transform=`scale(${e})`,n.style.opacity="1"}async inkCover(){this.inkT||(this.inkT=performance.now()),this.setInk(.02,"none"),await this.wait(.02),this.setInk(9,"transform .46s cubic-bezier(.55,0,.85,.2)"),await this.wait(.48)}async inkReveal(){this.setInk(9,"none"),await this.wait(.02);const e=this.inkEl();e.style.transition="transform .62s cubic-bezier(.2,.9,.25,1), opacity .3s linear .34s",e.style.transform="scale(0.02)",e.style.opacity="0",await this.wait(.5)}startFx(e){if(this.fxKind=e,this.particles=[],this.stopFx(),!e)return;this.lastT=performance.now();const t=()=>{const n=performance.now(),i=Math.min((n-this.lastT)/1e3,.05);this.lastT=n,this.stepFx(i),this.rafId=requestAnimationFrame(t)};this.rafId=requestAnimationFrame(t)}stopFx(){this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=0,this.ctx.clearRect(0,0,innerWidth,innerHeight)}stepFx(e){const t=innerWidth,n=innerHeight,i=this.fxKind;if(!i)return;const s=i==="rain"?6:2;if(this.particles.length<260)for(let a=0;a<s;a++){const l=Math.random();i==="embers"?this.particles.push({x:Math.random()*t,y:n+10,vx:(Math.random()-.5)*18,vy:-(18+l*40),r:1+l*2,a:.5+l*.5,c:l>.7?"255,190,110":"255,110,60"}):i==="ash"?this.particles.push({x:Math.random()*t,y:-10,vx:(Math.random()-.5)*30,vy:12+l*26,r:.8+l*1.6,a:.3+l*.4,c:"210,200,190"}):i==="rain"?this.particles.push({x:Math.random()*t,y:-20,vx:-60,vy:700+l*400,r:.7+l*.8,a:.18+l*.2,c:"180,215,255"}):i==="snow"?this.particles.push({x:Math.random()*t,y:-10,vx:(Math.random()-.5)*20,vy:22+l*30,r:1+l*2.2,a:.3+l*.5,c:"225,235,245"}):this.particles.push({x:Math.random()*t,y:n+10,vx:(Math.random()-.5)*12,vy:-(10+l*22),r:.8+l*1.6,a:.25+l*.4,c:"190,215,255"})}const o=this.ctx;o.clearRect(0,0,t,n),o.globalCompositeOperation="lighter";for(let a=this.particles.length-1;a>=0;a--){const l=this.particles[a];if(l.x+=l.vx*e+(i==="embers"?Math.sin((l.y+l.x)*.01)*12*e:0),l.y+=l.vy*e,l.y<-30||l.y>n+30||l.x<-40||l.x>t+40){this.particles.splice(a,1);continue}o.beginPath(),o.arc(l.x,l.y,l.r,0,Math.PI*2),o.fillStyle=`rgba(${l.c},${l.a})`,o.fill()}o.globalCompositeOperation="source-over"}wait(e){return new Promise(t=>setTimeout(t,e*1e3))}stop(){this.skip=!0}}const di=new Sw;class ww{constructor(){_(this,"root");_(this,"typing",!1);_(this,"waiting",!1);_(this,"advanceFlag",!1);_(this,"playing",!1);_(this,"onKey",e=>{this.playing&&(e.code==="Space"||e.code==="Enter"||e.code==="KeyJ")&&(e.preventDefault(),this.advance())});this.root=document.createElement("div"),this.root.id="dialog",this.root.innerHTML=`
      <div class="dl-portrait"><img alt=""></div>
      <div class="dl-box">
        <div class="dl-who"></div>
        <div class="dl-text"></div>
        <div class="dl-next">▼ 空格 / 点击 继续</div>
      </div>
    `,document.body.appendChild(this.root),this.root.addEventListener("click",()=>this.advance()),addEventListener("keydown",this.onKey)}advance(){if(this.typing){this.advanceFlag=!0;return}this.waiting&&(this.advanceFlag=!0)}async play(e){if(e.length){this.playing=!0,document.body.classList.add("dialog"),this.root.classList.add("show");for(const t of e)await this.showLine(t);this.root.classList.remove("show"),document.body.classList.remove("dialog"),this.playing=!1}}async showLine(e){this.advanceFlag=!1;const t=this.root.querySelector(".dl-who"),n=this.root.querySelector(".dl-text"),i=this.root.querySelector(".dl-portrait"),s=i.querySelector("img"),o=this.root.querySelector(".dl-next");t.textContent=e.who,t.style.display=e.who?"block":"none",e.portrait?(s.getAttribute("src")!==e.portrait&&(s.src=e.portrait),i.classList.add("show"),i.classList.remove("talk"),i.offsetWidth,i.classList.add("talk")):i.classList.remove("show"),n.textContent="",o.style.opacity="0",this.typing=!0;for(let a=0;a<e.text.length&&!this.advanceFlag;a++)n.textContent+=e.text[a],await Rd(/[，。！？、；：]/.test(e.text[a])?.19:.032);for(n.textContent=e.text,this.typing=!1,o.style.opacity="0.55",this.waiting=!0,this.advanceFlag=!1;!this.advanceFlag;)await Rd(.03);this.waiting=!1}stop(){this.playing&&(this.advanceFlag=!0,this.playing=!1,this.root.classList.remove("show"),document.body.classList.remove("dialog"))}}function Rd(r){return new Promise(e=>setTimeout(e,r*1e3))}const hn=new ww,bw=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;class Tw{constructor(){_(this,"active",!1);_(this,"camFrom",new S);_(this,"camTo",new S);_(this,"lookFrom",new S);_(this,"lookTo",new S);_(this,"fovFrom",42);_(this,"fovTo",42);_(this,"t",0);_(this,"dur",1);_(this,"resolve",null);_(this,"look",new S)}moveCamera(e,t,n=1.2,i=42){return new Promise(s=>{this.active=!0,this.camFrom.copy(m.camera.position),this.camTo.copy(e),this.lookFrom.copy(this.look),this.lookTo.copy(t),this.fovFrom=m.camera.fov,this.fovTo=i,this.t=0,this.dur=n,this.resolve=s})}wait(e){return new Promise(t=>setTimeout(t,e*1e3))}showTitle(e,t,n=2600){const i=document.createElement("div");i.className="boss-title",i.innerHTML=`<div class="bt-name">${e}</div><div class="bt-sub">${t}</div>`,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("show")),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),700)},n)}update(e){if(!this.active)return;this.t+=e;const t=Math.min(1,this.t/this.dur),n=bw(t);if(m.camera.position.lerpVectors(this.camFrom,this.camTo,n),this.look.lerpVectors(this.lookFrom,this.lookTo,n),m.camera.fov=this.fovFrom+(this.fovTo-this.fovFrom)*n,m.camera.updateProjectionMatrix(),m.camera.lookAt(this.look),t>=1){this.active=!1;const i=this.resolve;this.resolve=null,i==null||i()}}}const li=new Tw,Vi="/wumingbu/assets/cut/";async function Ew(){await di.play([{img:Vi+"prologue-1.png",dur:3.2,cam:{from:[50,52,1.02],to:[52,48,1.14]},fx:"motefall",text:"酆都。人间死了，都往这里来。"},{img:Vi+"prologue-2.png",dur:2.6,cam:{from:[50,46,1.06],to:[50,52,1.2]},fx:"ash",text:"那一夜，簿子破了。"},{img:Vi+"prologue-3.png",transition:"flash",dur:2.8,cam:{from:[46,54,1.04],to:[56,50,1.16]},fx:"motefall"},{img:Vi+"prologue-4.png",dur:3.4,cam:{from:[50,46,1.04],to:[50,44,1.18]},fx:"embers",voice:"崔珏",text:"五个没有名字的魂，跑到人间去了。"}])}async function Aw(){await hn.play([{who:"谢必安",text:"醒了？今天活多。"},{who:"谢必安",text:"簿子破了，魂跑了一地。你那条链子，还记得怎么用吧？"},{who:"谢必安",text:"别愣着，桥头那几只在等你。"}])}async function Cw(){await hn.play([{who:"谢必安",text:"干净。"},{who:"谢必安",text:"……你每收一个魂，链子都会抖一下。发现了吗？"},{who:"谢必安",text:"别多想。它认生。"}])}async function Rw(){const r=m.player.pos,e=new S(0,0,92);await li.moveCamera(new S(r.x*.3,9,r.z+12),new S(e.x,3.2,e.z),1.6,38),li.showTitle("崔珏","判官 · 一手改了贞观十三年的那个人",3e3),await li.wait(2.6),await hn.play([{who:"崔珏",text:"五个。"},{who:"崔珏",text:"五个不在簿上的魂，跑到了人间。"},{who:"崔珏",text:"精卫、夸父、后羿、孟婆……还有一个，你到了自然会知道。"},{who:"崔珏",text:"它们本来就不该存在。簿上没有它们的名字，只有它们的结局。"},{who:"崔珏",text:"去勾回来。"},{who:"崔珏",text:"簿上没写的东西，终究会把人间撕开。"}]),await li.moveCamera(new S(r.x,24,r.z-29),new S(r.x,.8,r.z+6),1,52),li.active=!1,await di.play([{img:Vi+"prologue-4.png",dur:5,cam:{from:[50,50,1.1],to:[46,46,1.24]},fx:"ash",text:"有名者，有命。"},{img:Vi+"prologue-3.png",dur:6,cam:{from:[54,50,1.08],to:[46,52,1.2]},fx:"motefall",text:"无名者……"},{img:Vi+"prologue-1.png",dur:5,cam:{from:[50,54,1.2],to:[50,44,1.36]},fx:"ash",text:"……无命。"}])}const Pw={"prologue:area1":()=>Aw(),"prologue:area2":()=>Cw(),"prologue:area3":()=>Rw(),"ch1:area1":()=>{}},Lw={prologue:()=>Ew()},Dw=()=>{var r;return((r=m.input)==null?void 0:r.isTouch)===!0};function ys(r,e){return Dw()?e:r}const Iw=[{id:"move",text:()=>`用 ${ys("WASD","左下摇杆")} 移动`,when:()=>!0,done:()=>m.player.vel.length()>4},{id:"attack",text:()=>`按 ${ys("鼠标左键 / J","击")} 连斩三段`,when:()=>{var r;return!(((r=m.runtime)==null?void 0:r.used.melee)??!1)},done:()=>{var r;return((r=m.runtime)==null?void 0:r.used.melee)??!1}},{id:"loop",text:()=>"拖着锁链绕一圈，首尾相交——把魂圈在里面，然后收紧",when:()=>{var r,e;return((r=m.runtime)==null?void 0:r.used.melee)===!0&&!(((e=m.runtime)==null?void 0:e.used.loop)??!1)},done:()=>{var r;return((r=m.runtime)==null?void 0:r.used.loop)??!1},autoHide:14},{id:"dash",text:()=>`按 ${ys("空格","闪")} 冲刺。冲刺时无敌，擦过攻击会触发见切`,when:()=>{var r,e;return((r=m.runtime)==null?void 0:r.used.loop)===!0&&!(((e=m.runtime)==null?void 0:e.used.dash)??!1)},done:()=>{var r;return((r=m.runtime)==null?void 0:r.used.dash)??!1}},{id:"hook",text:()=>`按 ${ys("鼠标右键 / K","钩")} 对石柱发链钩，绕柱荡一圈`,when:()=>{var r,e;return((r=m.runtime)==null?void 0:r.used.dash)===!0&&!(((e=m.runtime)==null?void 0:e.used.hook)??!1)},done:()=>{var r;return((r=m.runtime)==null?void 0:r.used.hook)??!1},autoHide:18},{id:"line",text:()=>`按 ${ys("E","收")} 钉下桩，跑开，再按一次 ${ys("E","收")} 收紧——线上的魂会被切开`,when:()=>{var r,e;return((r=m.runtime)==null?void 0:r.used.hook)===!0&&!(((e=m.runtime)==null?void 0:e.used.line)??!1)},done:()=>{var r;return((r=m.runtime)==null?void 0:r.used.line)??!1},autoHide:20},{id:"soulburst",text:()=>"五秒内用三种不同的招式击杀，触发魂爆",when:()=>{var r,e;return((r=m.runtime)==null?void 0:r.used.line)===!0&&!((e=m.runtime)!=null&&e.soulBurstSeen)},done:()=>{var r;return((r=m.runtime)==null?void 0:r.soulBurstSeen)??!1},autoHide:20}];class Nw{constructor(){_(this,"shown",new Set);_(this,"hidden",new Set);_(this,"timers",new Map)}update(e){if(m.runtime){for(const t of Iw)if(!this.hidden.has(t.id)){if(this.shown.has(t.id)){const n=(this.timers.get(t.id)??0)-e;this.timers.set(t.id,n),(t.done()||n<=0)&&(tn.hideTip(t.id),this.shown.delete(t.id),this.hidden.add(t.id));continue}t.when()&&(this.shown.add(t.id),this.timers.set(t.id,t.autoHide??9999),tn.showTip(t.id,t.text()))}}}reset(){for(const e of this.shown)tn.hideTip(e);this.shown.clear(),this.hidden.clear(),this.timers.clear()}}const Pd=new Nw,_l=new WeakMap,As=new Map;let Ld,Dd;function Ml(){var r;(Ld!==m.player||Dd!==m.runtime||!m.runtime||!((r=m.player)!=null&&r.alive)||(m.prog.loadout.mods.zhuri??0)<=0)&&(m._runT=0),Ld=m.player,Dd=m.runtime}function hh(r,e,t,n,i){var h,u;(u=(h=As.get(r))==null?void 0:h.cancel)==null||u.call(h);const s=m.player;let o=_l.get(s);o||(o={base:s.speedMul,boosts:new Map},_l.set(s,o));const a=o;a.boosts.set(r,e),s.speedMul=Math.max(a.base,...a.boosts.values());const l={};As.set(r,l);const c=Ec({tag:r,duration:t,interval:0,callback:()=>{},isValid:n,onEnd:()=>{a.boosts.delete(r),s.speedMul=Math.max(a.base,...a.boosts.values()),a.boosts.size===0&&_l.delete(s),As.get(r)===l&&As.delete(r),i==null||i()}});l.cancel=c.cancel}function Id(){return{loopDamage:1,meleeDamage:1,hookRange:1,trailLife:1,moveSpeed:1,dashCd:1,parryWindow:1,soulBurstStyles:3,soulBurstRadius:1,loopBind:0,flailDuration:1,dashBind:0,critAfterPerfect:1,soulGain:1}}const Sl={heaven:"天",earth:"地",human:"人"},Tr=[{id:"tanlang",name:"贪狼",polarity:"heaven",cost:6,desc:"锁阵闭合时，把圈外 6 米内的敌人也吸进来",hook:(r,...e)=>{if(r!=="loopClose")return;const t=e[0],n=e[1];for(const i of m.enemies.alive){if(i.state==="spawn"||i.state==="held")continue;const s=Math.hypot(i.pos.x-n.x,i.pos.z-n.y);if(s>6||Bw(i.pos.x,i.pos.z,t))continue;const o=1-20/Math.max(s,.1);i.knock.set((n.x-i.pos.x)*3*o,0,(n.y-i.pos.z)*3*o)}}},{id:"lianhuan",name:"连环",polarity:"heaven",cost:5,desc:"锁阵引爆后，在原位留一个小圈，1 秒后再爆一次",hook:(r,...e)=>{if(r!=="loopDetonate")return;const t=e[0],n=e[1];setTimeout(()=>{if(m.runtime){m.fx.decal(m.fx.ringTex,t,{size:n*.4,sizeEnd:n*.9,life:.3,color:16748608}),m.audio.play("boom",{vol:.5,pitch:1.3});for(const i of m.enemies.inRadius(t,n*.5))m.enemies.damage(i,60,t,{knock:8,kind:"loop"})}},1e3)}},{id:"huishou",name:"回首",polarity:"human",cost:4,desc:"冲刺结束时自动向身后斩一刀",hook:(r,...e)=>{if(r!=="dashEnd")return;const t=e[0],n=e[1],i=t+Math.PI,s=new S(Math.sin(i),0,Math.cos(i));let o=0;for(const a of m.enemies.inRadius(n,3.2))new S(a.pos.x-n.x,0,a.pos.z-n.z).normalize().dot(s)<.1||(m.enemies.damage(a,30,n,{knock:12,kind:"melee"}),o++);o&&(m.fx.decal(m.fx.slashTex,n.clone().addScaledVector(s,1.4),{angle:i+Math.PI,size:4,sizeEnd:4.6,life:.18,color:16767152,y:.9}),m.audio.play("swing",{vol:.5}))}},{id:"duanliu",name:"断流",polarity:"earth",cost:5,desc:"绞索切过的敌人会变成新的钉桩（可以连着绞）",hook:(r,...e)=>{if(r!=="snap")return;const t=e[2];if(!t.length)return;const n=t[t.length-1];m.chain.stake=n.pos.clone()}},{id:"ninlin",name:"逆鳞",polarity:"human",cost:4,desc:"见切判定窗口 +100%",apply:(r,e)=>{r.parryWindow*=1+.5*e}},{id:"qianjun",name:"千钧",polarity:"earth",cost:6,desc:"流星锤时间 +100%，但移动速度 -30%",apply:(r,e)=>{r.flailDuration*=1+.5*e,r.moveSpeed*=.7}},{id:"yujin",name:"余烬",polarity:"heaven",cost:6,desc:"锁链拖尾留下火线，敌人碰到受伤",hook:(r,...e)=>{if(r!=="tick")return;const t=e[0],n=m.chain.trail;if(n.length<4)return;const i=m;if(i._emberT=(i._emberT??0)-t,!(i._emberT>0)){i._emberT=.2;for(const s of m.enemies.alive){if(s.state==="dead"||s.state==="spawn")continue;let o=!1;for(let a=0;a<n.length-1&&!o;a++){const l=n[a].p,c=n[a+1].p,h=c.x-l.x,u=c.y-l.y,d=h*h+u*u||1e-6,f=Math.max(0,Math.min(1,((s.pos.x-l.x)*h+(s.pos.z-l.y)*u)/d)),v=l.x+h*f,x=l.y+u*f;Math.hypot(s.pos.x-v,s.pos.z-x)<1+s.def.radius&&(o=!0)}o&&(m.enemies.damage(s,12,s.pos.clone(),{knock:0,kind:"burst"}),m.fx.glow.add({pos:s.pos.clone().setY(.6),life:.3,size:1.6,color:16740384}))}}}},{id:"qiansi",name:"牵丝",polarity:"human",cost:5,desc:"链钩命中后 1 秒内可以再发一次（二段钩）",hook:(r,...e)=>{r!=="hookHitEnemy"&&r!=="hookHitAnchor"||(m.chain.hookReady=performance.now()+1e3)}},{id:"fuying",name:"缚影",polarity:"earth",cost:5,desc:"冲刺穿过的敌人被定身 1.5 秒",apply:(r,e)=>{r.dashBind=1+.5*e}},{id:"guiyi",name:"归一",polarity:"heaven",cost:7,desc:"魂爆只需 2 种招式，但范围 -40%",apply:r=>{r.soulBurstStyles=2,r.soulBurstRadius*=.6}},{id:"zhanhou",name:"斩首",polarity:"human",cost:6,desc:"对血量低于 25% 的敌人斩击直接处决",hook:(r,...e)=>{if(r!=="meleeHit")return;const t=e[0];if(t.state!=="dead"&&t.hp>0&&t.hp/t.def.hp<.25){const n=e[0],i=e[2];m.enemies.damage(n,9999,i,{knock:14,kind:"melee"}),m.audio.play("crack",{vol:.8,pitch:.7})}}},{id:"changye",name:"长夜",polarity:"earth",cost:4,desc:"锁链拖尾寿命 +60%（可以画更大的圈）",apply:(r,e)=>{r.trailLife*=1+.3*e}},{id:"jifeng",name:"疾风",polarity:"human",cost:5,desc:"冲刺冷却 -60%",apply:(r,e)=>{r.dashCd*=Math.max(.2,1-.3*e)}},{id:"niming",name:"逆命",polarity:"heaven",cost:8,desc:"受到致命伤时触发一次免费魂爆，并保留 1 点血（每个区域一次）",hook:(r,...e)=>{if(r!=="tick")return;const t=m.player;if(t.hp>1||t.hp<=0)return;const n=m;if(!n._nimingUsed){n._nimingUsed=!0,t.hp=1,t.invuln(1.5),m.fx.pillar(t.pos.clone(),16765056,12,.8),m.audio.play("soulburst",{vol:1});for(const i of m.enemies.inRadius(t.pos,10))m.enemies.damage(i,9999,t.pos,{knock:20,kind:"burst"})}}},{id:"xianshi",name:"衔石",polarity:"earth",cost:5,desc:"绞索收紧时抛出石块，落点成为新的钉桩",hook:(r,...e)=>{if(r!=="snap")return;const t=e[0].clone().add(e[1]).multiplyScalar(.5);m.fx.burst(t.clone().setY(.6),9470058,16,8),m.chain.stake=t}},{id:"zhuri",name:"逐日",polarity:"human",cost:6,desc:"持续移动 3 秒后速度 +40%",hook:(r,...e)=>{var i,s;if(r!=="tick")return;const t=e[0];if(!Number.isFinite(t)||t<=0||!m.runtime||!m.player.alive)return;const n=m;n._runT=m.player.vel.length()>6?(n._runT??0)+t:0,(n._runT??0)>3?As.has("mod:zhuri")||hh("mod:zhuri",1.4,Number.MAX_SAFE_INTEGER,()=>(m.prog.loadout.mods.zhuri??0)>0,()=>{n._runT=0}):(s=(i=As.get("mod:zhuri"))==null?void 0:i.cancel)==null||s.call(i),(n._runT??0)>3&&m.fx.glow.add({pos:m.player.pos.clone().setY(.6),life:.3,size:1.4,color:16744496,alpha:.5})}},{id:"she",name:"射日",polarity:"heaven",cost:8,desc:"第三段斩改为射出一道贯穿箭",hook:(r,...e)=>{if(r!=="meleeHit"||e[1]!==2)return;const n=e[2],i=new S(Math.sin(m.player.facing),0,Math.cos(m.player.facing)),s=n.clone().addScaledVector(i,22);m.fx.soulArrowShot(m.player.weaponHandPosition(),s.clone().setY(1.2));let o=0;for(const a of m.enemies.alive){if(a.state==="dead"||a.state==="spawn")continue;const l=new S(a.pos.x-n.x,0,a.pos.z-n.z),c=l.dot(i);c<0||c>22||l.clone().addScaledVector(i,-c).length()>1.4+a.def.radius||(m.enemies.damage(a,90,n,{knock:16,kind:"line"}),m.fx.burst(a.pos.clone().setY(1.1),14260837,4,3),o++)}o&&(m.audio.play("sheet",{vol:.8,pitch:1.4}),m.grade.punch(.6))}},{id:"wangyou",name:"忘忧",polarity:"earth",cost:6,desc:"被锁阵锁住的敌人会互相攻击 3 秒",hook:(r,...e)=>{if(r!=="loopClose")return;const t=e[2];for(const n of t)n.timer=Math.max(n.timer,1)}},{id:"ganqi",name:"干戚",polarity:"human",cost:7,desc:"血越少伤害越高：每损失 10% 血，伤害 +8%",apply:r=>{const e=1-m.player.hp/m.player.maxHp,t=1+Math.floor(e*10)*.08;r.meleeDamage*=t,r.loopDamage*=t}},{id:"wuming",name:"无名",polarity:"heaven",cost:3,desc:"所有槽位的极性视为相同（装配不再受极性限制）"}],Er={gouhun:{id:"gouhun",name:"勾魂链",unlock:"初始",desc:"均衡。锁阵收紧后引爆，四用法俱全。",loopBind:0,comboLen:3,damageMul:1,tempo:1},kunxian:{id:"kunxian",name:"捆仙索",unlock:"通过序章后",desc:"锁阵不引爆，改为定身 5 秒，被定身的敌人受到 +50% 伤害。",loopBind:5,comboLen:3,damageMul:.9,tempo:1},zhenhun:{id:"zhenhun",name:"镇魂钉链",unlock:"通过第三章后",desc:"沉重。两段斩，每段都带冲击波，伤害更高。",loopBind:0,comboLen:2,damageMul:1.5,tempo:.75},yehuo:{id:"yehuo",name:"业火链",unlock:"通过第四章后",desc:"锁阵留下 3 秒火圈，绞索切过的地面燃烧。",loopBind:0,comboLen:3,damageMul:1.1,tempo:1}},Uw={mask:"面具",hand:"护手",waist:"腰牌",boot:"靴子"},Ac=[{id:"wumian",slot:"mask",name:"无面",affix:"见切后 3 秒内所有攻击伤害翻倍",apply:r=>{r.critAfterPerfect=2}},{id:"guiyan",slot:"mask",name:"鬼眼",affix:"看得见剪链鬼的剪线预警（红线）",hook:(r,...e)=>{if(r!=="tick")return;const t=e[0],n=m;if(n._eyT=(n._eyT??0)-t,!((n._eyT??0)>0)){n._eyT=.15;for(const i of m.enemies.alive){if(i.type!=="cutter"||i.state==="dead")continue;const s=new S(m.player.pos.x-i.pos.x,0,m.player.pos.z-i.pos.z),o=s.length();o>9||m.fx.flashLine(i.pos.clone().setY(.5),i.pos.clone().addScaledVector(s.normalize(),o).setY(.5),16724016,.12,.16)}}}},{id:"tiesuo",slot:"hand",name:"铁索手",affix:"链钩射程 +50%",apply:r=>{r.hookRange*=1.5}},{id:"juhun",slot:"hand",name:"拘魂爪",affix:"拽回来的小怪直接被捏碎",hook:(r,...e)=>{if(r!=="hookHitEnemy")return;const t=e[0];t.type==="brute"||t.state==="dead"||(m.enemies.damage(t,9999,m.player.pos,{knock:8,kind:"hook"}),m.fx.burst(m.player.pos.clone().setY(1.2),16740432,12,7))}},{id:"fengdu",slot:"waist",name:"酆都令",affix:"每闭合 5 个锁阵，获得一层护盾（吸收一次伤害）",hook:(r,...e)=>{if(r!=="loopClose")return;const t=m;t._loopCount=(t._loopCount??0)+1,t._loopCount%5===0&&(m.player.shield++,m.fx.pillar(m.player.pos.clone(),10475775,6,.5),m.audio.play("parry",{vol:.6,pitch:1.2}))}},{id:"yinsi",slot:"waist",name:"阴司簿",affix:"魂火掉落 +80%",apply:r=>{r.soulGain*=1.8}},{id:"tawu",slot:"boot",name:"踏雾",affix:"冲刺穿过敌人时也留下锁链拖尾",hook:(r,...e)=>{r==="dashStart"&&(m.chain.forceTrail=!0)}},{id:"naihe",slot:"boot",name:"奈何步",affix:"冲刺结束后的 1 秒内移动速度 +30%",hook:(r,...e)=>{r==="dashEnd"&&hh("gear:naihe",1.3,1,()=>m.prog.loadout.gear.boot==="naihe")}}],uh={xianshi:{id:"xianshi",name:"衔石",cd:12,desc:"向面前砸下 5 块巨石，砸晕敌人，石块留在场上 10 秒可当钉桩",cast:()=>m.stones.cast()},zhuri:{id:"zhuri",name:"逐日",cd:18,desc:"3 秒内移动速度 ×2，锁链拖尾变成火焰",cast:()=>{hh("skill:zhuri",2,3,void 0,()=>{m._fireTrail=!1}),m._fireTrail=!0,m.fx.pillar(m.player.pos.clone(),16736288,10,.6),m.audio.play("riser",{vol:.7})}},she:{id:"she",name:"射日",cd:15,desc:"射出一道贯穿全场的箭，箭路上的敌人被钉住 2 秒",cast:()=>{const r=m.player.pos,e=new S(Math.sin(m.player.facing),0,Math.cos(m.player.facing)),t=r.clone().addScaledVector(e,40);m.fx.flashLine(r.clone().setY(1.2),t.clone().setY(1.2),16769184,2.4,.45),m.grade.punch(.9),m.audio.play("sheet",{vol:.9,pitch:1.3});for(const n of m.enemies.alive){if(n.state==="dead")continue;const i=new S(n.pos.x-r.x,0,n.pos.z-r.z),s=i.dot(e);s<0||s>40||i.clone().addScaledVector(e,-s).length()>1.6+n.def.radius||(m.enemies.damage(n,120,r,{knock:10,kind:"line"}),n.state!=="dead"&&(n.state="stun",n.timer=2))}}},wangchuan:{id:"wangchuan",name:"忘川",cd:20,desc:"半径 10 米的领域，领域内敌人忘记目标、原地游荡 5 秒",cast:()=>{const r=m.player.pos.clone();m.fx.decal(m.fx.burstTex,r,{size:8,sizeEnd:20,life:1.2,color:9419007,alpha:.8}),m.audio.play("riser",{vol:.7,pitch:.8}),Ec({tag:"skill:wangchuan",duration:5e3/1e3,interval:200/1e3,callback:()=>{for(const e of m.enemies.inRadius(r,10))e.state!=="dead"&&(e.cd=1,e.vel.multiplyScalar(.2))}})}},ganqi:{id:"ganqi",name:"干戚",cd:30,desc:"召唤刑天的无头虚影跟你一起战斗 8 秒",cast:()=>{var r;(r=m.ui)==null||r.hint("刑天的虚影出现了","ganqi",3e3),Ec({tag:"skill:ganqi",duration:8e3/1e3,interval:600/1e3,callback:()=>{const e=m.player.pos.clone();m.fx.flashLine(e.clone().setY(1.4),e.clone().setY(1.4).add(new S(0,0,0)),16756832,.1,.1);for(const t of m.enemies.inRadius(e,5))m.enemies.damage(t,40,e,{knock:6,kind:"melee"});m.fx.decal(m.fx.slashTex,e.clone().addScaledVector(new S(Math.sin(m.player.facing),0,Math.cos(m.player.facing)),2),{angle:m.player.facing+Math.PI,size:5,sizeEnd:5,life:.2,color:16752720,y:1})}})}}};function kw(){return{weapon:"gouhun",mods:{},gear:{mask:null,hand:null,waist:null,boot:null},skills:[null,null]}}const ea=["heaven","human","earth","heaven","human","earth"];function Ow(r){return Math.min(10+(r-1)*2,30)}function Cc(r,e,t,n){const i=r.cost+(e-1);if((n.mods.wuming??0)>0)return Math.ceil(i*.5);const o=t.filter(l=>l===r.polarity).length,a=t.filter(l=>l!==r.polarity).length;return o>0?Math.ceil(i*.5):a>0?Math.ceil(i*1.25):i}class Fw{constructor(){_(this,"loadout",kw());_(this,"owned",{});_(this,"ownedGear",[]);_(this,"unlockedWeapons",["gouhun"]);_(this,"unlockedSkills",[]);_(this,"skillCd",[0,0]);_(this,"modifiers",Id())}recompute(){var t,n,i;ml(0),Ml(),this.modifiers=Id();const e=Er[this.loadout.weapon]??Er.gouhun;this.modifiers.loopBind=e.loopBind,this.modifiers.meleeDamage*=e.damageMul;for(const[s,o]of Object.entries(this.loadout.mods)){if(o<=0)continue;const a=Tr.find(l=>l.id===s);(t=a==null?void 0:a.apply)==null||t.call(a,this.modifiers,o)}for(const s of["mask","hand","waist","boot"]){const o=this.loadout.gear[s];o&&((i=(n=Ac.find(a=>a.id===o))==null?void 0:n.apply)==null||i.call(n,this.modifiers))}}fire(e,...t){var n,i,s,o;ml(0),Ml();for(const[a,l]of Object.entries(this.loadout.mods))l<=0||(i=(n=Tr.find(c=>c.id===a))==null?void 0:n.hook)==null||i.call(n,e,...t);for(const a of["mask","hand","waist","boot"]){const l=this.loadout.gear[a];l&&((o=(s=Ac.find(c=>c.id===l))==null?void 0:s.hook)==null||o.call(s,e,...t))}}usedCapacity(){let e=0;for(const[t,n]of Object.entries(this.loadout.mods)){if(n<=0)continue;const i=Tr.find(s=>s.id===t);i&&(e+=Cc(i,n,ea,this.loadout))}return e}tickCd(e){ml(e),Ml(),!(!Number.isFinite(e)||e<=0)&&(this.skillCd[0]=Math.max(0,this.skillCd[0]-e),this.skillCd[1]=Math.max(0,this.skillCd[1]-e))}clearTimedEffects(){ai(),m._runT=0}castSkill(e){const t=this.loadout.skills[e];if(!t)return;const n=uh[t];!n||this.skillCd[e]>0||n.cast()!==!1&&(this.skillCd[e]=n.cd)}}const He=new Fw;function Bw(r,e,t){let n=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const o=t[i],a=t[s];o.y>e!=a.y>e&&r<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}class zw{constructor(){_(this,"facilities",[]);_(this,"markers",[]);_(this,"nearest",null)}build(){this.facilities=[{id:"smith",name:"铁匠 · 换武器",pos:new S(-6,0,-4),needLamps:0,open:()=>this.openSmith()},{id:"mods",name:"命格台",pos:new S(6,0,-4),needLamps:0,open:()=>this.openModTable()},{id:"gear",name:"装备库",pos:new S(-10,0,6),needLamps:1,open:()=>this.openGear()},{id:"skills",name:"魂技龛",pos:new S(10,0,6),needLamps:1,open:()=>this.openSkills()},{id:"trial",name:"试炼场",pos:new S(0,0,14),needLamps:0,open:()=>void Rn.startLevel("trial")},{id:"mengpo",name:"孟婆",pos:new S(0,0,-10),needLamps:0,open:()=>this.talkMengpo()},{id:"pages",name:"残页书阁",pos:new S(-14,0,-8),needLamps:2,open:()=>this.openPages()}];for(const e of this.facilities){const t=We.data.lamps>=e.needLamps,n=new zr(.5,.5,.3,12),i=new Be(n,new dt({color:t?13214282:5593696,transparent:!0,opacity:.85}));i.position.copy(e.pos).setY(.2),m.scene.add(i);const s=new Ys(t?16760928:4210752,t?5:1,8,2);s.position.copy(e.pos).setY(1.4),m.scene.add(s),this.markers.push({mesh:i,f:e,light:s})}}update(){let e=null,t=3.2;for(const n of this.markers){if(We.data.lamps<n.f.needLamps)continue;const i=m.player.pos.distanceTo(n.f.pos);i<t&&(t=i,e=n.f)}if(e!==this.nearest)if(this.nearest=e,e){const n=m.input.isTouch?"谈":"F";tn.showTip("hub",`<kbd>${n}</kbd> ${e.name}`)}else tn.hideTip("hub");for(const n of this.markers){const i=We.data.lamps>=n.f.needLamps;n.light.intensity=i?4+Math.sin(m.time*2+n.f.pos.x)*1.5:1}}interact(){var e;(e=this.nearest)==null||e.open()}openSmith(){const t=Object.keys(Er).map(n=>{const i=Er[n],s=He.unlockedWeapons.includes(n),o=He.loadout.weapon===n;return`<div class="card ${o?"on":""} ${s?"":"locked"}" data-weapon="${n}">
        <div class="c-name">${i.name}${o?" · 使用中":""}</div>
        <div class="c-desc">${i.desc}</div>
        <div class="c-meta">${s?"已拥有":"未解锁："+i.unlock}</div>
      </div>`}).join("");tn.custom("铁匠",`<div class="cards">${t}</div><p class="hintline">武器决定锁链四种用法的性质，不是数值。</p>`,"smith"),document.querySelectorAll("[data-weapon]").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.weapon;if(!He.unlockedWeapons.includes(i)){tn.hint("还没解锁："+Er[i].unlock,"lockw",2600);return}He.loadout.weapon=i,He.recompute(),this.saveLoadout(),m.audio.play("lock",{vol:.7}),this.openSmith()})})}openModTable(){const e=Ow(We.data.level_),t=He.usedCapacity(),n=ea.map((s,o)=>`<div class="slot pol-${s}" title="第 ${o+1} 槽 · ${Sl[s]}"><span>${Sl[s]}</span></div>`).join(""),i=Tr.map(s=>{const o=He.loadout.mods[s.id]??0,a=(He.owned[s.id]??0)>0,l=Cc(s,Math.max(1,o),ea,He.loadout);return a?`<div class="mod ${o>0?"on":""}" data-mod="${s.id}">
        <span class="pol pol-${s.polarity}">${Sl[s.polarity]}</span>
        <span class="m-name">${s.name}</span>
        <span class="m-cost">${l}</span>
        <span class="m-lv">${o>0?"等级 "+o+"（点击卸下）":"点击装配"}</span>
        <span class="m-desc">${s.desc}</span>
      </div>`:""}).join("");tn.custom("命格台",`
      <div class="capbar"><div class="capfill" style="width:${Math.min(100,t/e*100)}%"></div>
        <span>容量 ${t} / ${e}</span></div>
      <div class="slots">${n}</div>
      <div class="mods">${i||'<p class="hintline">还没有命格。精英和 Boss 会掉落。</p>'}</div>
      <p class="hintline">极性相同的槽位消耗减半。「无名」命格可解除极性限制。</p>
    `,"mods"),document.querySelectorAll("[data-mod]").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.mod;if((He.loadout.mods[o]??0)>0)He.loadout.mods[o]=0;else{const l=Tr.find(h=>h.id===o),c=Cc(l,1,ea,He.loadout);if(t+c>e){tn.hint("容量不够","cap",2e3);return}He.loadout.mods[o]=1}He.recompute(),this.saveLoadout(),m.audio.play("lock",{vol:.6,pitch:1.2}),this.openModTable()})})}openGear(){const t=["mask","hand","waist","boot"].map(n=>{const i=He.loadout.gear[n],s=Ac.filter(o=>o.slot===n&&He.ownedGear.includes(o.id));return`<div class="gearrow">
        <div class="gslot">${Uw[n]}</div>
        <div class="gopts">
          <button class="gopt ${i?"":"on"}" data-gear="${n}:">不装</button>
          ${s.map(o=>`<button class="gopt ${i===o.id?"on":""}" data-gear="${n}:${o.id}" title="${o.affix}">${o.name}</button>`).join("")}
        </div>
      </div>`}).join("");tn.custom("装备库",`<div class="gear">${t}</div><p class="hintline">每件装备带一条固定词条，都改变打法。</p>`,"gear"),document.querySelectorAll("[data-gear]").forEach(n=>{n.addEventListener("click",()=>{const[i,s]=n.dataset.gear.split(":");He.loadout.gear[i]=s||null,He.recompute(),this.saveLoadout(),m.audio.play("lock",{vol:.6,pitch:1.3}),this.openGear()})})}openSkills(){const e=Object.values(uh).map(t=>{const n=He.unlockedSkills.includes(t.id),i=He.loadout.skills.indexOf(t.id);return`<div class="card ${i>=0?"on":""} ${n?"":"locked"}" data-skill="${t.id}">
        <div class="c-name">${t.name}${i>=0?` · 槽 ${i+1}`:""}</div>
        <div class="c-desc">${t.desc}</div>
        <div class="c-meta">${n?"冷却 "+t.cd+" 秒":"未获得（击败对应人物）"}</div>
      </div>`}).join("");tn.custom("魂技龛",`<div class="cards">${e}</div><p class="hintline">按 1 / 2 释放。魂技来自被击败的传说人物。</p>`,"skills"),document.querySelectorAll("[data-skill]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.skill;if(!He.unlockedSkills.includes(n)){tn.hint("还没获得这个魂技","sk",2e3);return}const i=He.loadout.skills.indexOf(n);if(i>=0)He.loadout.skills[i]=null;else{const s=He.loadout.skills.indexOf(null);He.loadout.skills[s>=0?s:0]=n}this.saveLoadout(),m.audio.play("lock",{vol:.6,pitch:1.4}),this.openSkills()})})}async talkMengpo(){We.data.cleared.includes("ch4-mengpo")?await hn.play([{who:"孟婆",text:"……你是谁家的孩子？"},{who:"孟婆",text:"来，喝碗汤。喝了就不冷了。"}]):We.data.lamps===0?await hn.play([{who:"孟婆",text:"慢点走，桥滑。"}]):await hn.play([{who:"孟婆",text:"回来了？"},{who:"孟婆",text:"灯又亮了一盏。"}])}openPages(){const e=We.data.pages.length;tn.custom("残页书阁",`
      <p class="hintline">已收集 ${e} 页残页。</p>
      <p class="hintline">（每章 6 页，收齐一章会解锁一段判官的页边批注。文本在 M9 补齐。）</p>
    `,"pages")}saveLoadout(){We.data.loadout=He.loadout,We.data.ownedMods=He.owned,We.data.ownedGear=He.ownedGear,We.data.unlockedWeapons=He.unlockedWeapons,We.data.unlockedSkills=He.unlockedSkills,We.save()}}const ta=new zw,Hw={"level-data":"读取关卡数据…",preload:"下载场景模型…","world-init":"搭建场景…","graphics-warmup":"图形预热…","fade-in":"进入关卡…"};function Vw(r){return Hw[r]??`加载中（${r}）…`}class Gw{constructor(){_(this,"root",null);_(this,"stageEl");_(this,"detailEl");_(this,"barWrap");_(this,"barFill");_(this,"elapsedEl");_(this,"hintEl");_(this,"previousFocus",null);_(this,"underlay",null);_(this,"previousInert",!1);_(this,"clockId",null);_(this,"startedAt",0);_(this,"savedButtons",[])}get visible(){return!!this.root}get elapsedSeconds(){return this.startedAt?Math.max(0,(performance.now()-this.startedAt)/1e3):0}show(e="level-data"){if(this.root){this.setStage(e);return}this.startedAt=performance.now();const t=document.createElement("div");t.id="loading-overlay",Object.assign(t.style,{position:"fixed",inset:"0",zIndex:"9000",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(5, 7, 11, 0.66)",overscrollBehavior:"contain",touchAction:"none",pointerEvents:"auto",cursor:"progress",userSelect:"none",WebkitUserSelect:"none"}),t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-busy","true"),t.setAttribute("aria-label","关卡加载中");const n=document.createElement("div");Object.assign(n.style,{minWidth:"min(78vw, 420px)",maxWidth:"86vw",padding:"22px 26px 20px",background:"rgba(6, 9, 14, 0.82)",border:"1px solid rgba(159, 216, 255, 0.28)",borderRadius:"14px",boxShadow:"0 18px 48px rgba(0, 0, 0, 0.6)",color:"#e8eef8",fontFamily:'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',textAlign:"center",backdropFilter:"blur(3px)"});const i=document.createElement("div");i.textContent="进入关卡",Object.assign(i.style,{fontSize:"15px",letterSpacing:"0.18em",opacity:"0.72",marginBottom:"10px"});const s=document.createElement("div");Object.assign(s.style,{fontSize:"19px",lineHeight:"1.4",fontWeight:"600",color:"#f4f8ff"});const o=document.createElement("div");Object.assign(o.style,{marginTop:"8px",fontSize:"13px",lineHeight:"1.5",minHeight:"18px",color:"#a9bcd6",fontVariantNumeric:"tabular-nums"});const a=document.createElement("div");Object.assign(a.style,{position:"relative",height:"6px",marginTop:"14px",borderRadius:"999px",background:"rgba(159, 216, 255, 0.14)",overflow:"hidden"});const l=document.createElement("div");Object.assign(l.style,{width:"0%",height:"100%",borderRadius:"999px",background:"linear-gradient(90deg, #6fa8dc, #9fd8ff)",transition:"width 160ms linear"}),a.appendChild(l);const c=document.createElement("div");Object.assign(c.style,{marginTop:"10px",fontSize:"12px",letterSpacing:"0.04em",color:"#8fa3bd",fontVariantNumeric:"tabular-nums"});const h=document.createElement("div");h.textContent="首次进入需要下载地图与模型，网速较慢时可能需要一分钟以上，请稍候",Object.assign(h.style,{marginTop:"6px",fontSize:"12px",lineHeight:"1.6",color:"#7c8ea6"}),n.append(i,s,o,a,c,h),t.appendChild(n),document.body.appendChild(t),this.root=t,this.stageEl=s,this.detailEl=o,this.barWrap=a,this.barFill=l,this.elapsedEl=c,this.hintEl=h,this.disableStartButtons(),this.previousFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.underlay=document.getElementById("ui"),this.underlay&&(this.previousInert=this.underlay.inert,this.underlay.inert=!0),t.tabIndex=-1,t.focus({preventScroll:!0}),a.setAttribute("role","progressbar"),a.setAttribute("aria-valuemin","0"),a.setAttribute("aria-valuemax","0"),a.setAttribute("aria-valuenow","0"),a.setAttribute("aria-label","场景模型下载进度"),this.startedAt=performance.now(),this.tickElapsed(),this.clockId=window.setInterval(()=>this.tickElapsed(),1e3),this.setStage(e)}setStage(e,t){this.root&&(this.stageEl.textContent=t??Vw(e))}models(e,t,n){if(!this.root)return;const i=Math.max(0,Math.floor(e)||0),s=Math.max(0,Math.floor(t)||0);if(s>0){const o=Math.min(i,s);this.detailEl.textContent=`模型已处理 ${o}/${s}`,this.barFill.style.width=`${o/s*100}%`,this.barWrap.setAttribute("aria-valuemax",String(s)),this.barWrap.setAttribute("aria-valuenow",String(o)),this.barWrap.setAttribute("aria-valuetext",`${o}/${s}`)}else this.detailEl.textContent=i>0?`已完成 ${i} 个文件`:"正在准备模型…",this.barWrap.setAttribute("aria-valuemax","0"),this.barWrap.setAttribute("aria-valuenow","0"),this.barWrap.setAttribute("aria-valuetext","")}fail(e){this.root&&(this.setStage("error",e),this.hintEl.textContent="可返回标题重新开始")}hide(){var t;this.clockId!==null&&(window.clearInterval(this.clockId),this.clockId=null),this.startedAt=0,this.restoreButtons(),this.underlay&&(this.underlay.inert=this.previousInert),this.underlay=null;const e=this.root;e&&(e.setAttribute("aria-busy","false"),e.style.pointerEvents="none",e.remove()),this.root=null,this.savedButtons=[],(t=this.previousFocus)!=null&&t.isConnected&&this.previousFocus.focus({preventScroll:!0}),this.previousFocus=null}tickElapsed(){if(!this.elapsedEl)return;const e=Math.floor(this.elapsedSeconds);this.elapsedEl.textContent=`已等待 ${e} 秒`}disableStartButtons(){this.savedButtons=[];let e=[];try{e=Array.from(document.querySelectorAll('button[data-act="new"], button[data-act="continue"]'))}catch{e=[]}for(const t of e)t instanceof HTMLButtonElement&&(this.savedButtons.push({el:t,disabled:t.disabled}),t.disabled=!0)}restoreButtons(){for(const{el:e,disabled:t}of this.savedButtons)e.isConnected&&(e.disabled=t)}}const En=new Gw;class Ww{constructor(){_(this,"ui",new vw);_(this,"runtime",new $S);_(this,"current",null);_(this,"state","title");_(this,"deadT",0);_(this,"fade");_(this,"busy",!1);_(this,"transitionStage","idle");_(this,"inputEpoch",0);_(this,"playedOpenings",new Set);this.fade=document.createElement("div"),this.fade.id="fade",document.body.appendChild(this.fade),xw(this.ui),m.ui=this.ui,this.ui.hooks={startLevel:e=>void this.startLevel(e),resume:()=>{},toTitle:()=>this.toTitle(),toHub:()=>this.toHub()},this.runtime.onAreaClear=(e,t)=>{this.onAreaCleared(e,t)}}get isTransitioning(){return this.busy}get inputContext(){const t=(this.state==="level"||this.state==="hub")&&!this.busy&&this.fade.style.pointerEvents!=="auto"&&!document.hidden&&!m.input.needsLandscape&&!di.playing&&!hn.playing&&!Wt.blocking&&!document.getElementById("loading-overlay"),n=t&&!this.ui.isPaused&&m.player.alive;return{gameplay:n,controls:t,interact:n,epoch:`${this.state}:${this.inputEpoch}:${this.runtime.areaIndex}:${Wt.revision}`}}resetInput(){var e;this.inputEpoch++,(e=m.input)==null||e.reset()}resetDeath(){var e;this.deadT=0,this.ui.hideDeath(),(e=m.chain)==null||e.resetTransient()}get canUseSkills(){return this.state==="level"&&!!this.current&&!!this.runtime&&!!m.runtime&&m.player.alive&&!this.busy&&!this.ui.isPaused&&!m.input.needsLandscape&&!hn.playing&&!Wt.blocking&&!di.playing}async onAreaCleared(e,t){this.ui.areaTitle("鬼门开",`第 ${t+1} 区 · 已破`);const n=e.onClear?Pw[e.onClear]:void 0;if(n)try{await n(this)}catch(i){console.error("[story]",i)}if(this.state==="level")if(this.runtime.nextArea()){const i=this.runtime.area;this.ui.areaTitle("第 "+(this.runtime.areaIndex+1)+" 区",(i==null?void 0:i.name)??"")}else this.finish()}async startLevel(e){var s;if(this.busy)return;const t=lp[e];if(!t){this.ui.hint("关卡不存在："+e,"nolevel");return}this.resetInput(),this.resetDeath(),this.busy=!0,En.show("level-data"),(s=m.stones)==null||s.clear(),document.body.classList.remove("hub");let n=!1,i=null;try{this.transitionStage="level-data",await new Promise(c=>requestAnimationFrame(()=>c()));const o=(await t()).default,a=Lw[e];a&&!this.playedOpenings.has(e)&&(this.playedOpenings.add(e),En.hide(),i=a().catch(c=>{console.error("[opening]",c)})),this.transitionStage="preload",i||En.setStage("preload");const l=m.world.preload(o.scene,(c,h,u)=>{i||(En.setStage("preload"),En.models(c,h,u))});if(i){await i;let c=!1;l.then(()=>{c=!0},()=>{c=!0}),c||En.show("preload")}await l,this.transitionStage="fade-out",await this.fadeOut(),this.transitionStage="world-init",En.setStage("world-init"),await m.world.init(m.scene,o.scene),this.transitionStage="runtime-start",He.recompute(),this.runtime.start(o),m.runtime=this.runtime,m.input.cameraYaw=m.input.cameraPitch=0,this.transitionStage="graphics-warmup",En.setStage("graphics-warmup"),await this.warmupMobileGraphics(),m.grade.look=Hi[o.scene.look??"fengdu"]??Hi.default,this.current=o,We.data.level=e,We.unlock(e),We.save(),this.ui.close(),this.state="level",this.ui.areaTitle(o.name,o.subtitle),this.ui.clearTips(),Pd.reset(),this.transitionStage="fade-in",En.setStage("fade-in"),await this.fadeIn(),n=!0}catch(o){const a=this.transitionStage;console.error("[flow] startLevel failed",{id:e,stage:a,error:o}),ai(),this.state="title",this.current=null,m.runtime=null,m.enemies.clearAll(),m.fx.clearTransient(),this.runtime.clearSoulLight(),this.ui.close(),this.ui.clearTips();const l={"level-data":"关卡数据",preload:"场景模型","fade-out":"转场","world-init":"场景搭建","runtime-start":"关卡初始化","graphics-warmup":"图形预热","fade-in":"转场显示"};En.fail("未能进入关卡（"+(l[a]??"加载")+"）。已返回标题，可再次点击开始。");try{await m.world.preload(Wo),await m.world.init(m.scene,Wo)}catch(c){console.error("[flow] title background recovery failed",c)}this.ui.title("未能进入关卡（"+(l[a]??"加载")+"）。已返回标题，可再次点击开始。"),await this.fadeIn()}finally{this.fade.style.opacity="0",this.fade.style.pointerEvents="none",En.hide(),this.busy=!1,this.transitionStage="idle"}n&&i&&await i.catch(()=>{})}async warmupMobileGraphics(){var t;const e=m.player.pos.clone();try{await m.fx.prepareSoulArrow(),m.enemies.warmupGraphics(e),m.fx.warmupGraphics(e),m.stones.warmupGraphics(e);const n=new kt(48,Math.max(1,innerWidth/innerHeight),.1,120);n.position.set(e.x+10,e.y+14,e.z+18),n.lookAt(e.x,e.y+1.2,e.z),await m.renderer.compileAsync(m.scene,n),m.renderer.render(m.scene,n),(t=m.composer)==null||t.render(),m.renderer.getContext().finish()}finally{m.enemies.clearWarmupGraphics(),m.stones.clearWarmupGraphics(),m.fx.clearTransient()}await new Promise(n=>requestAnimationFrame(()=>n()))}finish(){if(!this.current)return;this.resetInput(),this.resetDeath(),m.stones.clear(),ai(),this.state="result";const e=this.runtime.kills,t=this.runtime.souls;this.runtime.settle(),We.data.lamps=Math.max(We.data.lamps,We.data.cleared.length),We.save();const n=Xw[this.current.id];this.ui.result(this.current,e,t,n,()=>this.toHub())}toTitle(){var e;Wt.clearPending(),this.resetInput(),this.resetDeath(),ai(),(e=m.stones)==null||e.clear(),this.state="title",m.runtime=null,m.enemies.clearAll(),document.body.classList.remove("hub"),this.fadeOut().then(async()=>{this.current=null,await m.world.preload(Wo),await m.world.init(m.scene,Wo),this.ui.title(),await this.fadeIn()})}toHub(){var e;Wt.clearPending(),this.resetInput(),this.resetDeath(),ai(),(e=m.stones)==null||e.clear(),this.state="hub",m.runtime=null,m.enemies.clearAll(),this.fadeOut().then(async()=>{this.current=null,await m.world.preload(Nd),await m.world.init(m.scene,Nd),ta.build(),this.ui.close(),document.body.classList.add("hub"),this.ui.areaTitle("奈何桥","灯 "+We.data.lamps+" 盏 · 魂火 "+We.data.souls),await this.fadeIn()})}update(e){if(jf.update(this.state,{paused:this.ui.isPaused||m.input.needsLandscape,cinematic:this.busy||di.playing||hn.playing,dead:this.state==="level"&&!m.player.alive,combat:this.state==="level"&&this.runtime.phase==="fighting"&&m.enemies.list.some(t=>t.state!=="dead")}),this.canUseSkills||(m.input.consume("skill1"),m.input.consume("skill2")),!this.busy){if(this.state==="hub"){ta.update(),m.input.consume("interact")&&ta.interact(),m.input.consume("pause")&&this.toTitle();return}this.state!=="level"||!this.current||(m.player.alive?(this.deadT=0,this.ui.hideDeath(),e>0&&(this.runtime.update(e),Pd.update(e))):(ai(),m.stones.clear(),this.deadT+=e,this.deadT>.6&&this.deadT-e<=.6&&(this.ui.showDeath(),this.runtime.dropSouls(m.player.pos.clone(),this.runtime.souls)),this.deadT>2.8&&(this.deadT=0,this.ui.hideDeath(),this.resetInput(),this.runtime.restartArea())),this.canUseSkills?(m.input.consume("skill1")&&He.castSkill(0),m.input.consume("skill2")&&He.castSkill(1)):(m.input.consume("skill1"),m.input.consume("skill2")),!hn.playing&&m.input.consume("pause")&&this.togglePause())}}togglePause(){if(this.ui.isPaused){this.ui.close();return}this.ui.pause(()=>{},()=>this.toTitle())}fadeOut(){return new Promise(e=>{this.fade.style.pointerEvents="auto",this.fade.style.opacity="1",setTimeout(e,420)})}fadeIn(){return new Promise(e=>{this.fade.style.opacity="0",setTimeout(()=>{this.fade.style.pointerEvents="none",e()},460)})}}const Xw={prologue:"ch1-jingwei","ch1-jingwei":void 0,trial:void 0},Nd={ground:8028040,groundRadius:26,fog:{color:2831168,density:.013},background:1712169,light:{hemi:[10530504,3945528,2.6],sun:[14673653,2.8]},mote:10475775,look:"fengdu",water:{color:1318958,y:-1.4,wave:.4,lanterns:40},props:[...Yw("pillar",8,22,.2,{anchor:!0}),{model:"post_lantern",pos:[-12,0,-12],scale:1.5},{model:"post_lantern",pos:[12,0,-12],scale:1.5},{model:"post_lantern",pos:[-12,0,12],scale:1.5},{model:"post_lantern",pos:[12,0,12],scale:1.5},{model:"shrine",pos:[0,0,-18],scale:1.8},{model:"fence",pos:[-18,0,0],scale:1.6,rotY:Math.PI/2},{model:"fence",pos:[18,0,0],scale:1.6,rotY:Math.PI/2},{model:"gravestone",pos:[-8,0,18],scale:1.6,rotY:.3},{model:"tree_dead_mid",pos:[9,0,18],scale:1.6},{model:"candle",pos:[0,0,0],scale:1.5}]};function Yw(r,e,t,n,i={}){return Array.from({length:e},(s,o)=>{const a=o/e*Math.PI*2+n;return{model:r,pos:[Math.cos(a)*t,0,Math.sin(a)*t],scale:i.scale??1.6,rotY:Math.random()*Math.PI,anchor:i.anchor}})}const Wo={ground:658706,groundRadius:60,fog:{color:658706,density:.03},background:526863,light:{hemi:[6980264,1708050,1.2],sun:[10467583,1.4]},mote:10475775,props:[{model:"pillar",pos:[10,0,-6],scale:2.2,anchor:!0},{model:"pillar",pos:[-12,0,-2],scale:2.4,anchor:!0},{model:"pillar",pos:[2,0,12],scale:2,anchor:!0}]},Rn=new Ww;class qw{constructor(){_(this,"btns",[]);_(this,"missingWarned",!1)}mount(){if(this.btns.length)return!0;const e=[];for(const t of[0,1]){const n=document.getElementById(t===0?"t-skill1":"t-skill2");if(!(n instanceof HTMLButtonElement))return this.missingWarned||(this.missingWarned=!0,console.warn("[touch-skills] 缺少魂技按钮节点，跳过绑定")),this.btns=[],!1;e.push({slot:t,el:n,name:null,state:null,seconds:-1,percent:-1,label:""})}this.btns=e;for(const t of this.btns)this.bind(t);return!0}bind(e){e.el.addEventListener("touchstart",t=>{t.preventDefault(),!e.el.disabled&&(m.input.needsLandscape||(m.input.isTouch=!0,m.input.usingMouse=!1,m.input.press(e.slot===0?"skill1":"skill2")))},{passive:!1}),e.el.addEventListener("mousedown",t=>{m.input.isTouch&&t.preventDefault()})}update(e){if(!this.mount())return;const t=m.prog,n=e&&!!t&&!!m.runtime&&m.player.alive;for(const i of this.btns){const s=(t==null?void 0:t.loadout.skills[i.slot])??null,o=s?uh[s]:void 0,a=!!o,l=n&&a&&t.skillCd[i.slot]<=0,c=a?l?"ready":n?"cd":"blocked":"empty",h=a&&o.cd>0?Math.ceil(t.skillCd[i.slot]):-1,u=a&&o.cd>0?Math.round(Math.max(0,Math.min(1,t.skillCd[i.slot]/o.cd))*100):0;i.el.disabled===l&&(i.el.disabled=!l),this.paint(i,(o==null?void 0:o.name)??"",c,h),i.percent!==u&&(i.percent=u,i.el.style.setProperty("--cd",u+"%"));const d=`${i.el.dataset.labelBase}：${(o==null?void 0:o.name)??"空槽"}${h>0?"，冷却 "+h+" 秒":!l&&a?"，暂不可用":""}`;i.label!==d&&(i.label=d,i.el.setAttribute("aria-label",d));const f=String(!l);i.el.getAttribute("aria-disabled")!==f&&i.el.setAttribute("aria-disabled",f)}}paint(e,t,n,i){if(e.name!==t){e.name=t,e.el.dataset.name=t;const s=t||"空槽";e.el.querySelector(".ts-name").textContent=s}if(e.state!==n&&(e.state=n,e.el.dataset.state=n,e.el.classList.toggle("empty",n==="empty"),e.el.classList.toggle("cd",n==="cd"),e.el.classList.toggle("blocked",n==="blocked")),e.seconds!==i){e.seconds=i;const s=e.el.querySelector(".ts-cd");s.textContent=i>0?String(i):"",e.el.classList.toggle("cooling",i>0)}}}const hp=new qw,dh=document.getElementById("game"),Ot=new wf({canvas:dh,antialias:!0,powerPreference:"high-performance"}),jw=matchMedia("(pointer: coarse)").matches,Gr=new URLSearchParams(location.search).has("test");Ot.setPixelRatio(Gr?.5:Math.min(devicePixelRatio,jw?1.5:2));Ot.setSize(innerWidth,innerHeight);Ot.shadowMap.enabled=!Gr;Ot.shadowMap.type=Hd;Ot.toneMapping=Pc;Ot.toneMappingExposure=1.1;const Un=new qc;let Ud;function up(){const r=new pc(Ot),e=new $_,t=r.fromScene(e,.04);e.dispose(),r.dispose();const n=Ud;Ud=t,Un.environment=t.texture,n==null||n.dispose(),Un.userData.environmentRevision=(Un.userData.environmentRevision??0)+1}up();Un.environmentIntensity=.48;dh.addEventListener("webglcontextrestored",()=>{up(),Ot.shadowMap.needsUpdate=!0,Un.traverse(r=>{const e=r;e.isLight&&e.shadow&&(e.shadow.needsUpdate=!0)})});const Ht=new kt(42,innerWidth/innerHeight,.5,200);m.scene=Un;m.camera=Ht;m.renderer=Ot;const fi=new G_(Ot);fi.addPass(new W_(Un,Ht));const dp=new Bs(new ae(innerWidth,innerHeight),.42,.4,.9);fi.addPass(dp);const va=new j_(innerWidth*Ot.getPixelRatio(),innerHeight*Ot.getPixelRatio());va.enabled=!Gr;fi.addPass(va);const Zi=new Cn(Un,Ht,innerWidth,innerHeight);Zi.output=Cn.OUTPUT.Default;Zi.updateGtaoMaterial({radius:.35,distanceExponent:1,thickness:.6,scale:1,samples:16,distanceFallOff:1,screenSpaceRadius:!1});Zi.blendIntensity=.35;Zi.enabled=!1;fi.addPass(Zi);const{pass:Kw,grade:Zw}=KS();fi.addPass(Kw);fi.addPass(new q_);m.composer=fi;m.bloom=dp;m.smaa=va;m.gtao=Zi;m.grade=Zw;addEventListener("resize",()=>{Ht.aspect=innerWidth/innerHeight,Ht.updateProjectionMatrix(),Ot.setSize(innerWidth,innerHeight),fi.setSize(innerWidth,innerHeight),va.setSize(innerWidth*Ot.getPixelRatio(),innerHeight*Ot.getPixelRatio()),Zi.setSize(innerWidth,innerHeight)});m.input=new nM(dh);m.audio=new XS;m.audio.init();m.world=new tS;m.fx=new fS(Un);m.chain=new TS(Un);m.prog=He;m.enemies=new IS;m.player=new BS;m.stones=new mS(Un);m.input.setContextReader(()=>Rn.inputContext);const _s=new S(0,20,14),On=new S;let lr=1,pn=0,cr=0,wl=0,hr=0,bl=-1;const kd=new Yf,Jw=new wi(new S(0,1,0),0),Od=new ae;function Qw(r){const e=m.player.pos,t=m.world.isBridge;if(li.active){li.update(r);return}const n=m.enemies.inRadius(e,12).length,i=1+Math.min(n,32)/(t?260:100);lr+=(i-lr)*(1-Math.exp(-1.5*r));const s=m.player.vel.clone().multiplyScalar(.1);let o=0,a=0,l=19,c=13,h=0;if(t){const K=m.world.bridgeRange,V=K?it.clamp((e.z-K.min)/Math.max(1,K.max-K.min),0,1):.5,ee=1-it.smoothstep(V,0,.28),te=it.smoothstep(V,.72,1),O=1-ee-te;o=2.4*ee+2.8*O+3.4*te,a=-5.8*ee-5.2*O-13.5*te,l=7.25*ee+6.95*O+7.45*te,c=14*ee+13.4*O+14.1*te,h=it.clamp(e.x*.08,-1,1)}const u=t?m.input.cameraYaw:0,d=1-Math.exp(-10*r),f=Math.atan2(Math.sin(u-pn),Math.cos(u-pn));pn+=f*d,pn=Math.atan2(Math.sin(pn),Math.cos(pn)),cr+=((t?m.input.cameraPitch:0)-cr)*d;const v=t?it.smoothstep(Math.abs(Math.sin(pn)),.22,.94):0,x=t?it.smoothstep(Math.abs(pn),.4,2.2):0,p=a*Math.cos(pn)-c*Math.sin(pn),g=-a*Math.sin(pn)-c*Math.cos(pn),w=e.x+s.x+h+Math.sign(p)*v*4,M=e.z+s.z+o*(1-x),y=1-Math.exp(-(t?10:8)*r);On.x+=(w-On.x)*y,On.z+=(M-On.z)*y;const L=t?it.smoothstep(-cr,.65,.8)*it.smoothstep(v,.45,.9):0,P=3.15-cr*2.6-v*2.4;On.y=t?it.lerp(P,-1,L):.8,li.look.copy(On);const C=t?it.lerp(Math.max(4.2,l+cr*9),-3,L):19;let I=On.x+(t?p*lr:0);if(t&&L>0){const K=m.world.bridgeRange.halfWidth,V=Math.sign(p||-1)*Math.max(Math.abs(I),K+18);I=it.lerp(I,V,L)}_s.set(I,C*lr,On.z+(t?g:13)*lr).add(m.fx.shakeOffset);const E=Math.abs(m.input.cameraYaw||0),b=Math.abs(m.input.cameraPitch||0),D=1-it.smoothstep(E,.16,.62),H=1-it.smoothstep(b,.12,.7),N=t?.15*D*H:0;if(wl+=(N-wl)*(1-Math.exp(-8*r)),_s.y+=wl,t){bl!==m.world.cameraSceneRevision&&(bl=m.world.cameraSceneRevision,hr=0);const K=m.world.getCameraEscapeX(_s),V=K===null?0:K-_s.x;hr+=(V-hr)*(1-Math.exp(-4.5*r)),_s.x+=hr}else hr=0,bl=-1;Ht.position.copy(_s),Ht.lookAt(On.clone().add(m.fx.shakeOffset)),m.world.updateView(r),m.camPunch*=Math.exp(-6*r);const Q=(t?44:42)-m.camPunch*7,j=t?650:200;Ht.far!==j&&(Ht.far=j,Ht.updateProjectionMatrix()),Math.abs(Ht.fov-Q)>.01&&(Ht.fov=Q,Ht.updateProjectionMatrix()),Ht.updateMatrixWorld(!0),Od.set(m.input.mouseX/innerWidth*2-1,-(m.input.mouseY/innerHeight)*2+1),kd.setFromCamera(Od,Ht),kd.ray.intersectPlane(Jw,m.aim)}const $w=document.getElementById("hp-fill"),eb=document.getElementById("combo"),tb=document.getElementById("souls"),nb=tb.firstChild;function ib(){$w.style.width=m.player.hp/m.player.maxHp*100+"%",eb.innerHTML=m.combo>=5?`${m.combo}<small>连斩 · 共 ${m.kills} 魂</small>`:`<small>共 ${m.kills} 魂</small>`;const r=m.runtime;nb.nodeValue=`魂火 ${We.data.souls+(r?r.souls:0)} · `}const Fd=new Xf;let ur=!1,Tl=0,Bd=null;function fp(){const r=Math.min(Fd.getDelta(),Gr?.125:.03333333333333333);m.input.update(),m.runtime!==Bd&&(Bd=m.runtime,Tl=0),m.runtime&&(Tl+=r);const e=!!m.runtime&&m.runtime.kills>=1&&Tl>=3;Wt.pump(!Rn.isTransitioning&&!Rn.ui.isPaused&&!di.playing&&!hn.playing&&!document.hidden&&!m.input.needsLandscape&&!!m.runtime&&m.player.alive&&e);const t=Wt.blocking||document.hidden||m.input.needsLandscape||Rn.isTransitioning||Rn.ui.isPaused||di.playing||hn.playing;t!==ur&&(ur=t,Fd.getDelta());let n=r;!ur&&m.hitstop>0&&(m.hitstop-=r,n=r*.04),ur&&(n=0),m.time+=n;const i=m.slowmo>0?n*.25:n;!ur&&m.slowmo>0&&(m.slowmo-=r),document.body.classList.toggle("slowmo",m.slowmo>0),n>0?(m.stones.update(n),m.player.update(n),m.chain.update(n),m.enemies.update(i),m.world.update(n),Rn.update(n)):m.input.needsLandscape||Rn.update(0),n>0&&(m.prog.fire("tick",n,m.time),m.prog.tickCd(n)),m.comboTimer-=r,m.comboTimer<=0&&(m.combo=0),m.fx.update(r),Qw(r),m.player.updateLighting(),ib(),hp.update(Rn.canUseSkills),m.grade.decay(r);const s=On.clone().project(Ht);m.grade.setCenter((s.x+1)/2,(s.y+1)/2),!di.playing&&!Wt.blocking&&(Ot.info.autoReset=!1,Ot.info.reset(),fi.render()),requestAnimationFrame(fp)}async function sb(){We.load(),Wt.syncSave(),Wt.onGateChange=()=>m.input.reset(),Wt.modelForEntry=t=>t.modelType?m.enemies.archiveAsset(t.modelType):void 0,m.enemies.onSpawn=t=>{m.runtime&&Wt.observe(t)};const r=We.data;r.loadout&&(He.loadout=r.loadout),r.ownedMods&&(He.owned=r.ownedMods),r.ownedGear&&(He.ownedGear=r.ownedGear),r.unlockedWeapons&&(He.unlockedWeapons=r.unlockedWeapons),r.unlockedSkills&&(He.unlockedSkills=r.unlockedSkills),r.cleared.includes("prologue")&&(He.unlockedWeapons.includes("kunxian")||He.unlockedWeapons.push("kunxian"),He.ownedGear.includes("guiyan")||He.ownedGear.push("guiyan"),He.ownedGear.includes("tiesuo")||He.ownedGear.push("tiesuo")),He.recompute();const e=We.data.settings;m.audio.volumes={master:e.master,sfx:e.sfx,music:e.music},m.audio.applyVolumes(),await Promise.all([m.enemies.init(),m.player.init(),m.stones.init()]),cp(Gr?"low":e.quality),hp.mount(),requestAnimationFrame(fp),window.G=m,window.flow=Rn,window.save=We,window.cutscene=di,window.musicDirector=jf,window.dialog=hn,window.cinematic=li,window.progression=He,window.hub=ta,m.audio.waitReady(4e3),window.soulArchive=Wt,Rn.toTitle()}sb().catch(r=>{console.error(r),document.getElementById("hint").textContent="加载失败："+r});
