(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))A(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&A(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function A(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const oc="182",Vi={ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wp=0,zc=1,_p=2,js=1,lf=2,vr=3,Gn=0,uA=1,hA=2,Bn=0,ki=1,Wc=2,Xc=3,Yc=4,xp=5,ti=100,vp=101,Cp=102,Ep=103,yp=104,Mp=200,Up=201,Sp=202,Fp=203,Yo=204,Zo=205,bp=206,Tp=207,Qp=208,Ip=209,Lp=210,Rp=211,Dp=212,Hp=213,Pp=214,Jo=0,qo=1,$o=2,Yi=3,jo=4,el=5,tl=6,Al=7,cf=0,Np=1,Op=2,qA=0,hf=1,uf=2,ff=3,df=4,pf=5,gf=6,mf=7,Bf=300,ui=301,Zi=302,nl=303,il=304,ya=306,rl=1e3,mn=1001,sl=1002,zt=1003,Gp=1004,rs=1005,$t=1006,Wa=1007,si=1008,xA=1009,wf=1010,_f=1011,Pr=1012,lc=1013,en=1014,ZA=1015,xn=1016,cc=1017,hc=1018,Nr=1020,xf=35902,vf=35899,Cf=1021,Ef=1022,NA=1023,vn=1026,ai=1027,yf=1028,uc=1029,Ji=1030,fc=1031,dc=1033,ea=33776,ta=33777,Aa=33778,na=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,fl=37496,dl=37488,pl=37489,gl=37490,ml=37491,Bl=37808,wl=37809,_l=37810,xl=37811,vl=37812,Cl=37813,El=37814,yl=37815,Ml=37816,Ul=37817,Sl=37818,Fl=37819,bl=37820,Tl=37821,Ql=36492,Il=36494,Ll=36495,Rl=36283,Dl=36284,Hl=36285,Pl=36286,Vp=3200,Mf=0,kp=1,Rn="",AA="srgb",qi="srgb-linear",ca="linear",rt="srgb",mi=7680,Zc=519,Kp=512,zp=513,Wp=514,pc=515,Xp=516,Yp=517,gc=518,Zp=519,Jc=35044,qc="300 es",JA=2e3,ha=2001;function Uf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jp(){const n=ua("canvas");return n.style.display="block",n}const $c={};function jc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Le(...n){const e="THREE."+n.shift();console.warn(e,...n)}function $e(...n){const e="THREE."+n.shift();console.error(e,...n)}function Or(...n){const e=n.join(" ");e in $c||($c[e]=!0,Le(...n))}function qp(n,e,t){return new Promise(function(A,i){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:A()}}setTimeout(r,t)})}class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[e]===void 0&&(A[e]=[]),A[e].indexOf(t)===-1&&A[e].push(t)}hasEventListener(e,t){const A=this._listeners;return A===void 0?!1:A[e]!==void 0&&A[e].indexOf(t)!==-1}removeEventListener(e,t){const A=this._listeners;if(A===void 0)return;const i=A[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const A=t[e.type];if(A!==void 0){e.target=this;const i=A.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ia=Math.PI/180,Nl=180/Math.PI;function Yr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[A&255]+Xt[A>>8&255]+Xt[A>>16&255]+Xt[A>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function $p(n,e){return(n%e+e)%e}function Xa(n,e,t){return(1-t)*n+t*e}function ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function oA(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jp={DEG2RAD:ia};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,A=this.y,i=e.elements;return this.x=i[0]*t+i[3]*A+i[6],this.y=i[1]*t+i[4]*A+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(We(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(We(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y;return t*t+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const A=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*A-s*i+e.x,this.y=r*i+s*A+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(e=0,t=0,A=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=A,this._w=i}static slerpFlat(e,t,A,i,r,s,a){let o=A[i+0],l=A[i+1],c=A[i+2],h=A[i+3],u=r[s+0],d=r[s+1],g=r[s+2],B=r[s+3];if(a<=0){e[t+0]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(a>=1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=B;return}if(h!==B||o!==u||l!==d||c!==g){let p=o*u+l*d+c*g+h*B;p<0&&(u=-u,d=-d,g=-g,B=-B,p=-p);let f=1-a;if(p<.9995){const m=Math.acos(p),_=Math.sin(m);f=Math.sin(f*m)/_,a=Math.sin(a*m)/_,o=o*f+u*a,l=l*f+d*a,c=c*f+g*a,h=h*f+B*a}else{o=o*f+u*a,l=l*f+d*a,c=c*f+g*a,h=h*f+B*a;const m=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=m,l*=m,c*=m,h*=m}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,A,i,r,s){const a=A[i],o=A[i+1],l=A[i+2],c=A[i+3],h=r[s],u=r[s+1],d=r[s+2],g=r[s+3];return e[t]=a*g+c*h+o*d-l*u,e[t+1]=o*g+c*u+l*h-a*d,e[t+2]=l*g+c*d+a*u-o*h,e[t+3]=c*g-a*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,A,i){return this._x=e,this._y=t,this._z=A,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const A=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(A/2),c=a(i/2),h=a(r/2),u=o(A/2),d=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"YXZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"ZXY":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"ZYX":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"YZX":this._x=u*c*h+l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h-u*d*g;break;case"XZY":this._x=u*c*h-l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h+u*d*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const A=t/2,i=Math.sin(A);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,A=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=A+a+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(r-l)*d,this._z=(s-i)*d}else if(A>a&&A>h){const d=2*Math.sqrt(1+A-a-h);this._w=(c-o)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-A-h);this._w=(r-l)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-A-a);this._w=(s-i)/d,this._x=(r+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let A=e.dot(t)+1;return A<1e-8?(A=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=A):(this._x=0,this._y=-e.z,this._z=e.y,this._w=A)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=A),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const A=this.angleTo(e);if(A===0)return this;const i=Math.min(1,t/A);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const A=e._x,i=e._y,r=e._z,s=e._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=A*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-A*l,this._z=r*c+s*l+A*o-i*a,this._w=s*c-A*a-i*o-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let A=e._x,i=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(A=-A,i=-i,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+A*t,this._y=this._y*o+i*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+A*t,this._y=this._y*o+i*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,A){return this.copy(e).slerp(t,A)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),A=Math.random(),i=Math.sqrt(1-A),r=Math.sqrt(A);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,A=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=A}set(e,t,A){return A===void 0&&(A=this.z),this.x=e,this.y=t,this.z=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,A=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*A+r[6]*i,this.y=r[1]*t+r[4]*A+r[7]*i,this.z=r[2]*t+r[5]*A+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,A=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*A+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*A+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*A+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*A+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,A=this.y,i=this.z,r=e.x,s=e.y,a=e.z,o=e.w,l=2*(s*i-a*A),c=2*(a*t-r*i),h=2*(r*A-s*t);return this.x=t+o*l+s*h-a*c,this.y=A+o*c+a*l-r*h,this.z=i+o*h+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,A=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*A+r[8]*i,this.y=r[1]*t+r[5]*A+r[9]*i,this.z=r[2]*t+r[6]*A+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(We(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const A=e.x,i=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=i*o-r*a,this.y=r*s-A*o,this.z=A*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const A=e.dot(this)/t;return this.copy(e).multiplyScalar(A)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const A=this.dot(e)/t;return Math.acos(We(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,A=this.y-e.y,i=this.z-e.z;return t*t+A*A+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,A){const i=Math.sin(t)*e;return this.x=i*Math.sin(A),this.y=Math.cos(t)*e,this.z=i*Math.cos(A),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,A){return this.x=e*Math.sin(t),this.y=A,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),A=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=A,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,A=Math.sqrt(1-t*t);return this.x=A*Math.cos(e),this.y=t,this.z=A*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new b,eh=new Qt;class Pe{constructor(e,t,A,i,r,s,a,o,l){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,A,i,r,s,a,o,l)}set(e,t,A,i,r,s,a,o,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=r,c[5]=o,c[6]=A,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],this}extractBasis(e,t,A){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,i=t.elements,r=this.elements,s=A[0],a=A[3],o=A[6],l=A[1],c=A[4],h=A[7],u=A[2],d=A[5],g=A[8],B=i[0],p=i[3],f=i[6],m=i[1],_=i[4],x=i[7],E=i[2],C=i[5],M=i[8];return r[0]=s*B+a*m+o*E,r[3]=s*p+a*_+o*C,r[6]=s*f+a*x+o*M,r[1]=l*B+c*m+h*E,r[4]=l*p+c*_+h*C,r[7]=l*f+c*x+h*M,r[2]=u*B+d*m+g*E,r[5]=u*p+d*_+g*C,r[8]=u*f+d*x+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*s*c-t*a*l-A*r*c+A*a*o+i*r*l-i*s*o}invert(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,g=t*h+A*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const B=1/g;return e[0]=h*B,e[1]=(i*l-c*A)*B,e[2]=(a*A-i*s)*B,e[3]=u*B,e[4]=(c*t-i*o)*B,e[5]=(i*r-a*t)*B,e[6]=d*B,e[7]=(A*o-l*t)*B,e[8]=(s*t-A*r)*B,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,A,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(A*o,A*l,-A*(o*s+l*a)+s+e,-i*l,i*o,-i*(-l*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,A,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,A=e.elements;for(let i=0;i<9;i++)if(t[i]!==A[i])return!1;return!0}fromArray(e,t=0){for(let A=0;A<9;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Pe,th=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eg(){const n={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===rt&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],A=[.3127,.329];return n.define({[qi]:{primaries:e,whitePoint:A,transfer:ca,toXYZ:th,fromXYZ:Ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:AA},outputColorSpaceConfig:{drawingBufferColorSpace:AA}},[AA]:{primaries:e,whitePoint:A,transfer:rt,toXYZ:th,fromXYZ:Ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:AA}}}),n}const Ze=eg();function wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class tg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let A;if(e instanceof HTMLCanvasElement)A=e;else{Bi===void 0&&(Bi=ua("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),A=Bi}return A.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const A=t.getContext("2d");A.drawImage(e,0,0,e.width,e.height);const i=A.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=wn(r[s]/255)*255;return A.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let A=0;A<t.length;A++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[A]=Math.floor(wn(t[A]/255)*255):t[A]=wn(t[A]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ag=0;class mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const A={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Ja(i[s].image)):r.push(Ja(i[s]))}else r=Ja(i);A.url=r}return t||(e.images[this.uuid]=A),A}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let ng=0;const qa=new b;class iA extends di{constructor(e=iA.DEFAULT_IMAGE,t=iA.DEFAULT_MAPPING,A=mn,i=mn,r=$t,s=si,a=NA,o=xA,l=iA.DEFAULT_ANISOTROPY,c=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Yr(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=A,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const A=e[t];if(A===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&A&&i.isVector2&&A.isVector2||i&&A&&i.isVector3&&A.isVector3||i&&A&&i.isMatrix3&&A.isMatrix3?i.copy(A):this[t]=A}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const A={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),t||(e.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rl:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rl:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}iA.DEFAULT_IMAGE=null;iA.DEFAULT_MAPPING=Bf;iA.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,A=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=A,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,A,i){return this.x=e,this.y=t,this.z=A,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,A=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*A+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*A+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*A+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*A+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,A,i,r;const o=e.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],g=o[9],B=o[2],p=o[6],f=o[10];if(Math.abs(c-u)<.01&&Math.abs(h-B)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+B)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,x=(d+1)/2,E=(f+1)/2,C=(c+u)/4,M=(h+B)/4,F=(g+p)/4;return _>x&&_>E?_<.01?(A=0,i=.707106781,r=.707106781):(A=Math.sqrt(_),i=C/A,r=M/A):x>E?x<.01?(A=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),A=C/i,r=F/i):E<.01?(A=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),A=M/r,i=F/r),this.set(A,i,r,t),this}let m=Math.sqrt((p-g)*(p-g)+(h-B)*(h-B)+(u-c)*(u-c));return Math.abs(m)<.001&&(m=1),this.x=(p-g)/m,this.y=(h-B)/m,this.z=(u-c)/m,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const A=this.length();return this.divideScalar(A||1).multiplyScalar(We(A,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this.w=e.w+(t.w-e.w)*A,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ig extends di{constructor(e=1,t=1,A={}){super(),A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},A),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=A.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:A.depth},r=new iA(i);this.textures=[];const s=A.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(A),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=A.depthTexture,this.samples=A.samples,this.multiview=A.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let A=0;A<this.textures.length;A++)this.textures[A].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,A=1){if(this.width!==e||this.height!==t||this.depth!==A){this.width=e,this.height=t,this.depth=A;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=A,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,A=e.textures.length;t<A;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new mc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $A extends ig{constructor(e=1,t=1,A={}){super(e,t,A),this.isWebGLRenderTarget=!0}}class Sf extends iA{constructor(e=null,t=1,A=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:A,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rg extends iA{constructor(e=null,t=1,A=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:A,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t+=3)this.expandByPoint(LA.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,A=e.count;t<A;t++)this.expandByPoint(LA.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const A=LA.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(A),this.max.copy(e).add(A),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const A=e.geometry;if(A!==void 0){const r=A.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,LA):LA.fromBufferAttribute(r,s),LA.applyMatrix4(e.matrixWorld),this.expandByPoint(LA);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),ss.copy(A.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,LA),LA.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,A;return e.normal.x>0?(t=e.normal.x*this.min.x,A=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,A=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,A+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,A+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,A+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,A+=e.normal.z*this.min.z),t<=-e.constant&&A>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),as.subVectors(this.max,or),wi.subVectors(e.a,or),_i.subVectors(e.b,or),xi.subVectors(e.c,or),En.subVectors(_i,wi),yn.subVectors(xi,_i),Wn.subVectors(wi,xi);let t=[0,-En.z,En.y,0,-yn.z,yn.y,0,-Wn.z,Wn.y,En.z,0,-En.x,yn.z,0,-yn.x,Wn.z,0,-Wn.x,-En.y,En.x,0,-yn.y,yn.x,0,-Wn.y,Wn.x,0];return!$a(t,wi,_i,xi,as)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,wi,_i,xi,as))?!1:(os.crossVectors(En,yn),t=[os.x,os.y,os.z],$a(t,wi,_i,xi,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,LA).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(LA).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new b,new b,new b,new b,new b,new b,new b,new b],LA=new b,ss=new Zr,wi=new b,_i=new b,xi=new b,En=new b,yn=new b,Wn=new b,or=new b,as=new b,os=new b,Xn=new b;function $a(n,e,t,A,i){for(let r=0,s=n.length-3;r<=s;r+=3){Xn.fromArray(n,r);const a=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),o=e.dot(Xn),l=t.dot(Xn),c=A.dot(Xn);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const sg=new Zr,lr=new b,ja=new b;class Ma{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const A=this.center;t!==void 0?A.copy(t):sg.setFromPoints(e).getCenter(A);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,A.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const A=this.center.distanceToSquared(e);return t.copy(e),A>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const A=Math.sqrt(t),i=(A-this.radius)*.5;this.center.addScaledVector(lr,i/A),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(ja)),this.expandByPoint(lr.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cn=new b,eo=new b,ls=new b,Mn=new b,to=new b,cs=new b,Ao=new b;class Ua{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const A=t.dot(this.direction);return A<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,A)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,A,i){eo.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(eo);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ls),a=Mn.dot(this.direction),o=-Mn.dot(ls),l=Mn.lengthSq(),c=Math.abs(1-s*s);let h,u,d,g;if(c>0)if(h=s*o-a,u=s*a-o,g=r*c,h>=0)if(u>=-g)if(u<=g){const B=1/c;h*=B,u*=B,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l}else u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-g?(h=Math.max(0,-(-s*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;return A&&A.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(eo).addScaledVector(ls,u),d}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const A=cn.dot(this.direction),i=cn.dot(cn)-A*A,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=A-s,o=A+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const A=-(this.origin.dot(e.normal)+e.constant)/t;return A>=0?A:null}intersectPlane(e,t){const A=this.distanceToPlane(e);return A===null?null:this.at(A,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let A,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(A=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(A=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),c>=0?(r=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c),A>s||r>i||((r>A||isNaN(A))&&(A=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h),A>o||a>i)||((a>A||A!==A)&&(A=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(A>=0?A:i,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,A,i,r){to.subVectors(t,e),cs.subVectors(A,e),Ao.crossVectors(to,cs);let s=this.direction.dot(Ao),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Mn.subVectors(this.origin,e);const o=a*this.direction.dot(cs.crossVectors(Mn,cs));if(o<0)return null;const l=a*this.direction.dot(to.cross(Mn));if(l<0||o+l>s)return null;const c=-a*Mn.dot(Ao);return c<0?null:this.at(c/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,A,i,r,s,a,o,l,c,h,u,d,g,B,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,A,i,r,s,a,o,l,c,h,u,d,g,B,p)}set(e,t,A,i,r,s,a,o,l,c,h,u,d,g,B,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=A,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=h,f[14]=u,f[3]=d,f[7]=g,f[11]=B,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],t[9]=A[9],t[10]=A[10],t[11]=A[11],t[12]=A[12],t[13]=A[13],t[14]=A[14],t[15]=A[15],this}copyPosition(e){const t=this.elements,A=e.elements;return t[12]=A[12],t[13]=A[13],t[14]=A[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,A){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),A.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this)}makeBasis(e,t,A){return this.set(e.x,t.x,A.x,0,e.y,t.y,A.y,0,e.z,t.z,A.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,A=e.elements,i=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),s=1/vi.setFromMatrixColumn(e,2).length();return t[0]=A[0]*i,t[1]=A[1]*i,t[2]=A[2]*i,t[3]=0,t[4]=A[4]*r,t[5]=A[5]*r,t[6]=A[6]*r,t[7]=0,t[8]=A[8]*s,t[9]=A[9]*s,t[10]=A[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,A=e.x,i=e.y,r=e.z,s=Math.cos(A),a=Math.sin(A),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=s*c,d=s*h,g=a*c,B=a*h;t[0]=o*c,t[4]=-o*h,t[8]=l,t[1]=d+g*l,t[5]=u-B*l,t[9]=-a*o,t[2]=B-u*l,t[6]=g+d*l,t[10]=s*o}else if(e.order==="YXZ"){const u=o*c,d=o*h,g=l*c,B=l*h;t[0]=u+B*a,t[4]=g*a-d,t[8]=s*l,t[1]=s*h,t[5]=s*c,t[9]=-a,t[2]=d*a-g,t[6]=B+u*a,t[10]=s*o}else if(e.order==="ZXY"){const u=o*c,d=o*h,g=l*c,B=l*h;t[0]=u-B*a,t[4]=-s*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=s*c,t[9]=B-u*a,t[2]=-s*l,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){const u=s*c,d=s*h,g=a*c,B=a*h;t[0]=o*c,t[4]=g*l-d,t[8]=u*l+B,t[1]=o*h,t[5]=B*l+u,t[9]=d*l-g,t[2]=-l,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){const u=s*o,d=s*l,g=a*o,B=a*l;t[0]=o*c,t[4]=B-u*h,t[8]=g*h+d,t[1]=h,t[5]=s*c,t[9]=-a*c,t[2]=-l*c,t[6]=d*h+g,t[10]=u-B*h}else if(e.order==="XZY"){const u=s*o,d=s*l,g=a*o,B=a*l;t[0]=o*c,t[4]=-h,t[8]=l*c,t[1]=u*h+B,t[5]=s*c,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*c,t[10]=B*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,og)}lookAt(e,t,A){const i=this.elements;return gA.subVectors(e,t),gA.lengthSq()===0&&(gA.z=1),gA.normalize(),Un.crossVectors(A,gA),Un.lengthSq()===0&&(Math.abs(A.z)===1?gA.x+=1e-4:gA.z+=1e-4,gA.normalize(),Un.crossVectors(A,gA)),Un.normalize(),hs.crossVectors(gA,Un),i[0]=Un.x,i[4]=hs.x,i[8]=gA.x,i[1]=Un.y,i[5]=hs.y,i[9]=gA.y,i[2]=Un.z,i[6]=hs.z,i[10]=gA.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const A=e.elements,i=t.elements,r=this.elements,s=A[0],a=A[4],o=A[8],l=A[12],c=A[1],h=A[5],u=A[9],d=A[13],g=A[2],B=A[6],p=A[10],f=A[14],m=A[3],_=A[7],x=A[11],E=A[15],C=i[0],M=i[4],F=i[8],w=i[12],y=i[1],T=i[5],D=i[9],Q=i[13],N=i[2],V=i[6],O=i[10],R=i[14],X=i[3],J=i[7],ee=i[11],te=i[15];return r[0]=s*C+a*y+o*N+l*X,r[4]=s*M+a*T+o*V+l*J,r[8]=s*F+a*D+o*O+l*ee,r[12]=s*w+a*Q+o*R+l*te,r[1]=c*C+h*y+u*N+d*X,r[5]=c*M+h*T+u*V+d*J,r[9]=c*F+h*D+u*O+d*ee,r[13]=c*w+h*Q+u*R+d*te,r[2]=g*C+B*y+p*N+f*X,r[6]=g*M+B*T+p*V+f*J,r[10]=g*F+B*D+p*O+f*ee,r[14]=g*w+B*Q+p*R+f*te,r[3]=m*C+_*y+x*N+E*X,r[7]=m*M+_*T+x*V+E*J,r[11]=m*F+_*D+x*O+E*ee,r[15]=m*w+_*Q+x*R+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],A=e[4],i=e[8],r=e[12],s=e[1],a=e[5],o=e[9],l=e[13],c=e[2],h=e[6],u=e[10],d=e[14],g=e[3],B=e[7],p=e[11],f=e[15],m=o*d-l*u,_=a*d-l*h,x=a*u-o*h,E=s*d-l*c,C=s*u-o*c,M=s*h-a*c;return t*(B*m-p*_+f*x)-A*(g*m-p*E+f*C)+i*(g*_-B*E+f*M)-r*(g*x-B*C+p*M)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,A){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=A),this}invert(){const e=this.elements,t=e[0],A=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=e[9],u=e[10],d=e[11],g=e[12],B=e[13],p=e[14],f=e[15],m=h*p*l-B*u*l+B*o*d-a*p*d-h*o*f+a*u*f,_=g*u*l-c*p*l-g*o*d+s*p*d+c*o*f-s*u*f,x=c*B*l-g*h*l+g*a*d-s*B*d-c*a*f+s*h*f,E=g*h*o-c*B*o-g*a*u+s*B*u+c*a*p-s*h*p,C=t*m+A*_+i*x+r*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=m*M,e[1]=(B*u*r-h*p*r-B*i*d+A*p*d+h*i*f-A*u*f)*M,e[2]=(a*p*r-B*o*r+B*i*l-A*p*l-a*i*f+A*o*f)*M,e[3]=(h*o*r-a*u*r-h*i*l+A*u*l+a*i*d-A*o*d)*M,e[4]=_*M,e[5]=(c*p*r-g*u*r+g*i*d-t*p*d-c*i*f+t*u*f)*M,e[6]=(g*o*r-s*p*r-g*i*l+t*p*l+s*i*f-t*o*f)*M,e[7]=(s*u*r-c*o*r+c*i*l-t*u*l-s*i*d+t*o*d)*M,e[8]=x*M,e[9]=(g*h*r-c*B*r-g*A*d+t*B*d+c*A*f-t*h*f)*M,e[10]=(s*B*r-g*a*r+g*A*l-t*B*l-s*A*f+t*a*f)*M,e[11]=(c*a*r-s*h*r-c*A*l+t*h*l+s*A*d-t*a*d)*M,e[12]=E*M,e[13]=(c*B*i-g*h*i+g*A*u-t*B*u-c*A*p+t*h*p)*M,e[14]=(g*a*i-s*B*i-g*A*o+t*B*o+s*A*p-t*a*p)*M,e[15]=(s*h*i-c*a*i+c*A*o-t*h*o-s*A*u+t*a*u)*M,this}scale(e){const t=this.elements,A=e.x,i=e.y,r=e.z;return t[0]*=A,t[4]*=i,t[8]*=r,t[1]*=A,t[5]*=i,t[9]*=r,t[2]*=A,t[6]*=i,t[10]*=r,t[3]*=A,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],A=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,A,i))}makeTranslation(e,t,A){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,A,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),A=Math.sin(e);return this.set(1,0,0,0,0,t,-A,0,0,A,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,0,A,0,0,1,0,0,-A,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,0,A,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const A=Math.cos(t),i=Math.sin(t),r=1-A,s=e.x,a=e.y,o=e.z,l=r*s,c=r*a;return this.set(l*s+A,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+A,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+A,0,0,0,0,1),this}makeScale(e,t,A){return this.set(e,0,0,0,0,t,0,0,0,0,A,0,0,0,0,1),this}makeShear(e,t,A,i,r,s){return this.set(1,A,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,A){const i=this.elements,r=t._x,s=t._y,a=t._z,o=t._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,g=r*h,B=s*c,p=s*h,f=a*h,m=o*l,_=o*c,x=o*h,E=A.x,C=A.y,M=A.z;return i[0]=(1-(B+f))*E,i[1]=(d+x)*E,i[2]=(g-_)*E,i[3]=0,i[4]=(d-x)*C,i[5]=(1-(u+f))*C,i[6]=(p+m)*C,i[7]=0,i[8]=(g+_)*M,i[9]=(p-m)*M,i[10]=(1-(u+B))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,A){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return A.set(1,1,1),t.identity(),this;let r=vi.set(i[0],i[1],i[2]).length();const s=vi.set(i[4],i[5],i[6]).length(),a=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),RA.copy(this);const l=1/r,c=1/s,h=1/a;return RA.elements[0]*=l,RA.elements[1]*=l,RA.elements[2]*=l,RA.elements[4]*=c,RA.elements[5]*=c,RA.elements[6]*=c,RA.elements[8]*=h,RA.elements[9]*=h,RA.elements[10]*=h,t.setFromRotationMatrix(RA),A.x=r,A.y=s,A.z=a,this}makePerspective(e,t,A,i,r,s,a=JA,o=!1){const l=this.elements,c=2*r/(t-e),h=2*r/(A-i),u=(t+e)/(t-e),d=(A+i)/(A-i);let g,B;if(o)g=r/(s-r),B=s*r/(s-r);else if(a===JA)g=-(s+r)/(s-r),B=-2*s*r/(s-r);else if(a===ha)g=-s/(s-r),B=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=B,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,A,i,r,s,a=JA,o=!1){const l=this.elements,c=2/(t-e),h=2/(A-i),u=-(t+e)/(t-e),d=-(A+i)/(A-i);let g,B;if(o)g=1/(s-r),B=s/(s-r);else if(a===JA)g=-2/(s-r),B=-(s+r)/(s-r);else if(a===ha)g=-1/(s-r),B=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=B,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,A=e.elements;for(let i=0;i<16;i++)if(t[i]!==A[i])return!1;return!0}fromArray(e,t=0){for(let A=0;A<16;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){const A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e[t+9]=A[9],e[t+10]=A[10],e[t+11]=A[11],e[t+12]=A[12],e[t+13]=A[13],e[t+14]=A[14],e[t+15]=A[15],e}}const vi=new b,RA=new pt,ag=new b(0,0,0),og=new b(1,1,1),Un=new b,hs=new b,gA=new b,nh=new pt,ih=new Qt;class GA{constructor(e=0,t=0,A=0,i=GA.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=A,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,A,i=this._order){return this._x=e,this._y=t,this._z=A,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,A=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-We(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,A===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,A){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,A)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}GA.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lg=0;const rh=new b,Ci=new Qt,hn=new pt,us=new b,cr=new b,cg=new b,hg=new Qt,sh=new b(1,0,0),ah=new b(0,1,0),oh=new b(0,0,1),lh={type:"added"},ug={type:"removed"},Ei={type:"childadded",child:null},no={type:"childremoved",child:null};class Ut extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new b,t=new GA,A=new Qt,i=new b(1,1,1);function r(){A.setFromEuler(t,!1)}function s(){t.setFromQuaternion(A,void 0,!1)}t._onChange(r),A._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new Pe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,A){e.isVector3?us.copy(e):us.set(e,t,A);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(cr,us,this.up):hn.lookAt(us,cr,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(hn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ug),no.child=e,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let A=0,i=this.children.length;A<i;A++){const s=this.children[A].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,A=[]){this[e]===t&&A.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,A);return A}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let A=0,i=t.length;A<i;A++)t[A].updateMatrixWorld(e)}updateWorldMatrix(e,t){const A=this.parent;if(e===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",A={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const h=o[l];r(e.shapes,h)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(e.materials,this.material[o]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(e.animations,o))}}if(t){const a=s(e.geometries),o=s(e.materials),l=s(e.textures),c=s(e.images),h=s(e.shapes),u=s(e.skeletons),d=s(e.animations),g=s(e.nodes);a.length>0&&(A.geometries=a),o.length>0&&(A.materials=o),l.length>0&&(A.textures=l),c.length>0&&(A.images=c),h.length>0&&(A.shapes=h),u.length>0&&(A.skeletons=u),d.length>0&&(A.animations=d),g.length>0&&(A.nodes=g)}return A.object=i,A;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let A=0;A<e.children.length;A++){const i=e.children[A];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new b(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const DA=new b,un=new b,io=new b,fn=new b,yi=new b,Mi=new b,ch=new b,ro=new b,so=new b,ao=new b,oo=new vt,lo=new vt,co=new vt;class PA{constructor(e=new b,t=new b,A=new b){this.a=e,this.b=t,this.c=A}static getNormal(e,t,A,i){i.subVectors(A,t),DA.subVectors(e,t),i.cross(DA);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,A,i,r){DA.subVectors(i,t),un.subVectors(A,t),io.subVectors(e,t);const s=DA.dot(DA),a=DA.dot(un),o=DA.dot(io),l=un.dot(un),c=un.dot(io),h=s*l-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,d=(l*o-a*c)*u,g=(s*c-a*o)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,A,i){return this.getBarycoord(e,t,A,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,A,i,r,s,a,o){return this.getBarycoord(e,t,A,i,fn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,fn.x),o.addScaledVector(s,fn.y),o.addScaledVector(a,fn.z),o)}static getInterpolatedAttribute(e,t,A,i,r,s){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,A),co.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(oo,r.x),s.addScaledVector(lo,r.y),s.addScaledVector(co,r.z),s}static isFrontFacing(e,t,A,i){return DA.subVectors(A,t),un.subVectors(e,t),DA.cross(un).dot(i)<0}set(e,t,A){return this.a.copy(e),this.b.copy(t),this.c.copy(A),this}setFromPointsAndIndices(e,t,A,i){return this.a.copy(e[t]),this.b.copy(e[A]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,A,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,A),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return DA.subVectors(this.c,this.b),un.subVectors(this.a,this.b),DA.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return PA.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return PA.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,A,i,r){return PA.getInterpolation(e,this.a,this.b,this.c,t,A,i,r)}containsPoint(e){return PA.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return PA.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const A=this.a,i=this.b,r=this.c;let s,a;yi.subVectors(i,A),Mi.subVectors(r,A),ro.subVectors(e,A);const o=yi.dot(ro),l=Mi.dot(ro);if(o<=0&&l<=0)return t.copy(A);so.subVectors(e,i);const c=yi.dot(so),h=Mi.dot(so);if(c>=0&&h<=c)return t.copy(i);const u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return s=o/(o-c),t.copy(A).addScaledVector(yi,s);ao.subVectors(e,r);const d=yi.dot(ao),g=Mi.dot(ao);if(g>=0&&d<=g)return t.copy(r);const B=d*l-o*g;if(B<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(A).addScaledVector(Mi,a);const p=c*g-d*h;if(p<=0&&h-c>=0&&d-g>=0)return ch.subVectors(r,i),a=(h-c)/(h-c+(d-g)),t.copy(i).addScaledVector(ch,a);const f=1/(p+B+u);return s=B*f,a=u*f,t.copy(A).addScaledVector(yi,s).addScaledVector(Mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,A)}set(e,t,A){if(t===void 0&&A===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,A);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=AA){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,A,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=A,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,A,i=Ze.workingColorSpace){if(e=$p(e,1),t=We(t,0,1),A=We(A,0,1),t===0)this.r=this.g=this.b=A;else{const r=A<=.5?A*(1+t):A+t-A*t,s=2*A-r;this.r=ho(s,r,e+1/3),this.g=ho(s,r,e),this.b=ho(s,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=AA){function A(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=AA){const A=Ff[e.toLowerCase()];return A!==void 0?this.setHex(A,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=AA){return Ze.workingToColorSpace(Yt.copy(this),e),Math.round(We(Yt.r*255,0,255))*65536+Math.round(We(Yt.g*255,0,255))*256+Math.round(We(Yt.b*255,0,255))}getHexString(e=AA){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Yt.copy(this),t);const A=Yt.r,i=Yt.g,r=Yt.b,s=Math.max(A,i,r),a=Math.min(A,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case A:o=(i-r)/h+(i<r?6:0);break;case i:o=(r-A)/h+2;break;case r:o=(A-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=AA){Ze.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,A=Yt.g,i=Yt.b;return e!==AA?`color(${e} ${t.toFixed(3)} ${A.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(A*255)},${Math.round(i*255)})`}offsetHSL(e,t,A){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+A)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,A){return this.r=e.r+(t.r-e.r)*A,this.g=e.g+(t.g-e.g)*A,this.b=e.b+(t.b-e.b)*A,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(fs);const A=Xa(Sn.h,fs.h,t),i=Xa(Sn.s,fs.s,t),r=Xa(Sn.l,fs.l,t);return this.setHSL(A,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,A=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*A+r[6]*i,this.g=r[1]*t+r[4]*A+r[7]*i,this.b=r[2]*t+r[5]*A+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Fe;Fe.NAMES=Ff;let fg=0;class pi extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=ki,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=Zo,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const A=e[t];if(A===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(A):i&&i.isVector3&&A&&A.isVector3?i.copy(A):this[t]=A}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const A={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(A.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(A.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(A.dispersion=this.dispersion),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(A.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(A.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(A.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(e).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(e).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(e).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(e).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(e).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapRotation!==void 0&&(A.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(A.blending=this.blending),this.side!==Gn&&(A.side=this.side),this.vertexColors===!0&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=!0),this.blendSrc!==Yo&&(A.blendSrc=this.blendSrc),this.blendDst!==Zo&&(A.blendDst=this.blendDst),this.blendEquation!==ti&&(A.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(A.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(A.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(A.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(A.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(A.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(A.depthFunc=this.depthFunc),this.depthTest===!1&&(A.depthTest=this.depthTest),this.depthWrite===!1&&(A.depthWrite=this.depthWrite),this.colorWrite===!1&&(A.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(A.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(A.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(A.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(A.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(A.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(A.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(A.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(A.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaHash===!0&&(A.alphaHash=!0),this.alphaToCoverage===!0&&(A.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=!0),this.forceSinglePass===!0&&(A.forceSinglePass=!0),this.allowOverride===!1&&(A.allowOverride=!1),this.wireframe===!0&&(A.wireframe=!0),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=!0),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),Object.keys(this.userData).length>0&&(A.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(A.textures=r),s.length>0&&(A.images=s)}return A}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let A=null;if(t!==null){const i=t.length;A=new Array(i);for(let r=0;r!==i;++r)A[r]=t[r].clone()}return this.clippingPlanes=A,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jr extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new GA,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new b,ds=new Re;let dg=0;class CA{constructor(e,t,A=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=A,this.usage=Jc,this.updateRanges=[],this.gpuType=ZA,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,A){e*=this.itemSize,A*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[A+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,A=this.count;t<A;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,A=this.count;t<A;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,A=this.count;t<A;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,A=this.count;t<A;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,A=this.count;t<A;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let A=this.array[e*this.itemSize+t];return this.normalized&&(A=ar(A,this.array)),A}setComponent(e,t,A){return this.normalized&&(A=oA(A,this.array)),this.array[e*this.itemSize+t]=A,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=oA(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=oA(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=oA(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=oA(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,A){return e*=this.itemSize,this.normalized&&(t=oA(t,this.array),A=oA(A,this.array)),this.array[e+0]=t,this.array[e+1]=A,this}setXYZ(e,t,A,i){return e*=this.itemSize,this.normalized&&(t=oA(t,this.array),A=oA(A,this.array),i=oA(i,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=i,this}setXYZW(e,t,A,i,r){return e*=this.itemSize,this.normalized&&(t=oA(t,this.array),A=oA(A,this.array),i=oA(i,this.array),r=oA(r,this.array)),this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class bf extends CA{constructor(e,t,A){super(new Uint16Array(e),t,A)}}class Tf extends CA{constructor(e,t,A){super(new Uint32Array(e),t,A)}}class ke extends CA{constructor(e,t,A){super(new Float32Array(e),t,A)}}let pg=0;const yA=new pt,uo=new Ut,Ui=new b,mA=new Zr,hr=new Zr,Nt=new b;class gt extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uf(e)?Tf:bf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,A=0){this.groups.push({start:e,count:t,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const r=new Pe().getNormalMatrix(e);A.applyNormalMatrix(r),A.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yA.makeRotationFromQuaternion(e),this.applyMatrix4(yA),this}rotateX(e){return yA.makeRotationX(e),this.applyMatrix4(yA),this}rotateY(e){return yA.makeRotationY(e),this.applyMatrix4(yA),this}rotateZ(e){return yA.makeRotationZ(e),this.applyMatrix4(yA),this}translate(e,t,A){return yA.makeTranslation(e,t,A),this.applyMatrix4(yA),this}scale(e,t,A){return yA.makeScale(e,t,A),this.applyMatrix4(yA),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const A=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];A.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ke(A,3))}else{const A=Math.min(e.length,t.count);for(let i=0;i<A;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let A=0,i=t.length;A<i;A++){const r=t[A];mA.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,mA.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,mA.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(mA.min),this.boundingBox.expandByPoint(mA.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const A=this.boundingSphere.center;if(mA.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(mA.min,hr.min),mA.expandByPoint(Nt),Nt.addVectors(mA.max,hr.max),mA.expandByPoint(Nt)):(mA.expandByPoint(hr.min),mA.expandByPoint(hr.max))}mA.getCenter(A);let i=0;for(let r=0,s=e.count;r<s;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,A.distanceToSquared(Nt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Nt.fromBufferAttribute(a,l),o&&(Ui.fromBufferAttribute(e,l),Nt.add(Ui)),i=Math.max(i,A.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new CA(new Float32Array(4*A.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let F=0;F<A.count;F++)a[F]=new b,o[F]=new b;const l=new b,c=new b,h=new b,u=new Re,d=new Re,g=new Re,B=new b,p=new b;function f(F,w,y){l.fromBufferAttribute(A,F),c.fromBufferAttribute(A,w),h.fromBufferAttribute(A,y),u.fromBufferAttribute(r,F),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),c.sub(l),h.sub(l),d.sub(u),g.sub(u);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(B.copy(c).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(T),p.copy(h).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(T),a[F].add(B),a[w].add(B),a[y].add(B),o[F].add(p),o[w].add(p),o[y].add(p))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let F=0,w=m.length;F<w;++F){const y=m[F],T=y.start,D=y.count;for(let Q=T,N=T+D;Q<N;Q+=3)f(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const _=new b,x=new b,E=new b,C=new b;function M(F){E.fromBufferAttribute(i,F),C.copy(E);const w=a[F];_.copy(w),_.sub(E.multiplyScalar(E.dot(w))).normalize(),x.crossVectors(C,w);const T=x.dot(o[F])<0?-1:1;s.setXYZW(F,_.x,_.y,_.z,T)}for(let F=0,w=m.length;F<w;++F){const y=m[F],T=y.start,D=y.count;for(let Q=T,N=T+D;Q<N;Q+=3)M(e.getX(Q+0)),M(e.getX(Q+1)),M(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new CA(new Float32Array(t.count*3),3),this.setAttribute("normal",A);else for(let u=0,d=A.count;u<d;u++)A.setXYZ(u,0,0,0);const i=new b,r=new b,s=new b,a=new b,o=new b,l=new b,c=new b,h=new b;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),B=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,B),s.fromBufferAttribute(t,p),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.fromBufferAttribute(A,g),o.fromBufferAttribute(A,B),l.fromBufferAttribute(A,p),a.add(c),o.add(c),l.add(c),A.setXYZ(g,a.x,a.y,a.z),A.setXYZ(B,o.x,o.y,o.z),A.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),A.setXYZ(u+0,c.x,c.y,c.z),A.setXYZ(u+1,c.x,c.y,c.z),A.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,A=e.count;t<A;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,o){const l=a.array,c=a.itemSize,h=a.normalized,u=new l.constructor(o.length*c);let d=0,g=0;for(let B=0,p=o.length;B<p;B++){a.isInterleavedBufferAttribute?d=o[B]*a.data.stride+a.offset:d=o[B]*c;for(let f=0;f<c;f++)u[g++]=l[d++]}return new CA(u,c,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,A=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=e(o,A);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,h=l.length;c<h;c++){const u=l[c],d=e(u,A);o.push(d)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const A=this.attributes;for(const o in A){const l=A[o];e.data.attributes[o]=l.toJSON(e.data)}const i={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let h=0,u=l.length;h<u;h++){const d=l[h];c.push(d.toJSON(e.data))}c.length>0&&(i[o]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const A=e.index;A!==null&&this.setIndex(A.clone());const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],h=r[l];for(let u=0,d=h.length;u<d;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,c=s.length;l<c;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new pt,Yn=new Ua,ps=new Ma,uh=new b,gs=new b,ms=new b,Bs=new b,fo=new b,ws=new b,fh=new b,_s=new b;class ce extends Ut{constructor(e=new gt,t=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,A=Object.keys(t);if(A.length>0){const i=t[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const A=this.geometry,i=A.attributes.position,r=A.morphAttributes.position,s=A.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ws.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],h=r[o];c!==0&&(fo.fromBufferAttribute(h,e),s?ws.addScaledVector(fo,c):ws.addScaledVector(fo.sub(t),c))}t.add(ws)}return t}raycast(e,t){const A=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),ps.copy(A.boundingSphere),ps.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(ps.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(ps,uh)===null||Yn.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(hh.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(hh),!(A.boundingBox!==null&&Yn.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,A){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,B=u.length;g<B;g++){const p=u[g],f=s[p.materialIndex],m=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=m,E=_;x<E;x+=3){const C=a.getX(x),M=a.getX(x+1),F=a.getX(x+2);i=xs(this,f,e,A,l,c,h,C,M,F),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),B=Math.min(a.count,d.start+d.count);for(let p=g,f=B;p<f;p+=3){const m=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);i=xs(this,s,e,A,l,c,h,m,_,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,B=u.length;g<B;g++){const p=u[g],f=s[p.materialIndex],m=Math.max(p.start,d.start),_=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=m,E=_;x<E;x+=3){const C=x,M=x+1,F=x+2;i=xs(this,f,e,A,l,c,h,C,M,F),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),B=Math.min(o.count,d.start+d.count);for(let p=g,f=B;p<f;p+=3){const m=p,_=p+1,x=p+2;i=xs(this,s,e,A,l,c,h,m,_,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function gg(n,e,t,A,i,r,s,a){let o;if(e.side===uA?o=A.intersectTriangle(s,r,i,!0,a):o=A.intersectTriangle(i,r,s,e.side===Gn,a),o===null)return null;_s.copy(a),_s.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_s);return l<t.near||l>t.far?null:{distance:l,point:_s.clone(),object:n}}function xs(n,e,t,A,i,r,s,a,o,l){n.getVertexPosition(a,gs),n.getVertexPosition(o,ms),n.getVertexPosition(l,Bs);const c=gg(n,e,t,A,gs,ms,Bs,fh);if(c){const h=new b;PA.getBarycoord(fh,gs,ms,Bs,h),i&&(c.uv=PA.getInterpolatedAttribute(i,a,o,l,h,new Re)),r&&(c.uv1=PA.getInterpolatedAttribute(r,a,o,l,h,new Re)),s&&(c.normal=PA.getInterpolatedAttribute(s,a,o,l,h,new b),c.normal.dot(A.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new b,materialIndex:0};PA.getNormal(gs,ms,Bs,u.normal),c.face=u,c.barycoord=h}return c}class Tt extends gt{constructor(e=1,t=1,A=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:A,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],h=[];let u=0,d=0;g("z","y","x",-1,-1,A,t,e,s,r,0),g("z","y","x",1,-1,A,t,-e,s,r,1),g("x","z","y",1,1,e,A,t,i,s,2),g("x","z","y",1,-1,e,A,-t,i,s,3),g("x","y","z",1,-1,e,t,A,i,r,4),g("x","y","z",-1,-1,e,t,-A,i,r,5),this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2));function g(B,p,f,m,_,x,E,C,M,F,w){const y=x/M,T=E/F,D=x/2,Q=E/2,N=C/2,V=M+1,O=F+1;let R=0,X=0;const J=new b;for(let ee=0;ee<O;ee++){const te=ee*T-Q;for(let _e=0;_e<V;_e++){const Ce=_e*y-D;J[B]=Ce*m,J[p]=te*_,J[f]=N,l.push(J.x,J.y,J.z),J[B]=0,J[p]=0,J[f]=C>0?1:-1,c.push(J.x,J.y,J.z),h.push(_e/M),h.push(1-ee/F),R+=1}}for(let ee=0;ee<F;ee++)for(let te=0;te<M;te++){const _e=u+te+V*ee,Ce=u+te+V*(ee+1),Oe=u+(te+1)+V*(ee+1),Je=u+(te+1)+V*ee;o.push(_e,Ce,Je),o.push(Ce,Oe,Je),X+=6}a.addGroup(d,X,w),d+=X,u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const A in n[t]){const i=n[t][A];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][A]=null):e[t][A]=i.clone():Array.isArray(i)?e[t][A]=i.slice():e[t][A]=i}}return e}function tA(n){const e={};for(let t=0;t<n.length;t++){const A=$i(n[t]);for(const i in A)e[i]=A[i]}return e}function mg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Bg={clone:$i,merge:tA};var wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const A={};for(const i in this.extensions)this.extensions[i]===!0&&(A[i]=!0);return Object.keys(A).length>0&&(t.extensions=A),t}}class If extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=JA,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new b,dh=new Re,ph=new Re;class SA extends If{constructor(e=50,t=1,A=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=A,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,A){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,dh,ph),t.subVectors(ph,dh)}setViewOffset(e,t,A,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,A=2*t,i=this.aspect*A,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,t-=s.offsetY*A/l,i*=s.width/o,A*=s.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-A,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,Fi=1;class xg extends Ut{constructor(e,t,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new SA(Si,Fi,e,t);i.layers=this.layers,this.add(i);const r=new SA(Si,Fi,e,t);r.layers=this.layers,this.add(r);const s=new SA(Si,Fi,e,t);s.layers=this.layers,this.add(s);const a=new SA(Si,Fi,e,t);a.layers=this.layers,this.add(a);const o=new SA(Si,Fi,e,t);o.layers=this.layers,this.add(o);const l=new SA(Si,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[A,i,r,s,a,o]=t;for(const l of t)this.remove(l);if(e===JA)A.up.set(0,1,0),A.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ha)A.up.set(0,-1,0),A.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const B=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,e.setRenderTarget(A,0,i),e.render(t,r),e.setRenderTarget(A,1,i),e.render(t,s),e.setRenderTarget(A,2,i),e.render(t,a),e.setRenderTarget(A,3,i),e.render(t,o),e.setRenderTarget(A,4,i),e.render(t,l),A.texture.generateMipmaps=B,e.setRenderTarget(A,5,i),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=g,A.texture.needsPMREMUpdate=!0}}class Lf extends iA{constructor(e=[],t=ui,A,i,r,s,a,o,l,c){super(e,t,A,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rf extends $A{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const A={width:e,height:e,depth:1},i=[A,A,A,A,A,A];this.texture=new Lf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tt(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:$i(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:uA,blending:Bn});r.uniforms.tEquirect.value=t;const s=new ce(i,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=$t),new xg(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,A=!0,i=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,A,i);e.setRenderTarget(r)}}class Oi extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const A of e.hand.values())this._getHandJoint(t,A)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,A){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const B of e.hand.values()){const p=t.getJointPose(B,A),f=this._getHandJoint(l,B);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,A),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,A),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const A=new Oi;A.matrixAutoUpdate=!1,A.visible=!1,e.joints[t.jointName]=A,e.add(A)}return e.joints[t.jointName]}}class Cg extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new GA,this.environmentIntensity=1,this.environmentRotation=new GA,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eg extends iA{constructor(e=null,t=1,A=1,i,r,s,a,o,l=zt,c=zt,h,u){super(null,s,a,o,l,c,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:A},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const go=new b,yg=new b,Mg=new Pe;class In{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,A,i){return this.normal.set(e,t,A),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,A){const i=go.subVectors(A,t).cross(yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const A=e.delta(go),i=this.normal.dot(A);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(A,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),A=this.distanceToPoint(e.end);return t<0&&A>0||A<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const A=t||Mg.getNormalMatrix(e),i=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(A).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Ma,Ug=new Re(.5,.5),vs=new b;class wc{constructor(e=new In,t=new In,A=new In,i=new In,r=new In,s=new In){this.planes=[e,t,A,i,r,s]}set(e,t,A,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(A),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let A=0;A<6;A++)t[A].copy(e.planes[A]);return this}setFromProjectionMatrix(e,t=JA,A=!1){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],g=r[8],B=r[9],p=r[10],f=r[11],m=r[12],_=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,f-g,E-m).normalize(),i[1].setComponents(l+s,d+c,f+g,E+m).normalize(),i[2].setComponents(l+a,d+h,f+B,E+_).normalize(),i[3].setComponents(l-a,d-h,f-B,E-_).normalize(),A)i[4].setComponents(o,u,p,x).normalize(),i[5].setComponents(l-o,d-u,f-p,E-x).normalize();else if(i[4].setComponents(l-o,d-u,f-p,E-x).normalize(),t===JA)i[5].setComponents(l+o,d+u,f+p,E+x).normalize();else if(t===ha)i[5].setComponents(o,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){Zn.center.set(0,0,0);const t=Ug.distanceTo(e.center);return Zn.radius=.7071067811865476+t,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,A=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(A)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let A=0;A<6;A++){const i=t[A];if(vs.x=i.normal.x>0?e.max.x:e.min.x,vs.y=i.normal.y>0?e.max.y:e.min.y,vs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let A=0;A<6;A++)if(t[A].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class An extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fa=new b,da=new b,gh=new pt,ur=new Ua,Cs=new Ma,mo=new b,mh=new b;class gn extends Ut{constructor(e=new gt,t=new An){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,A=[0];for(let i=1,r=t.count;i<r;i++)fa.fromBufferAttribute(t,i-1),da.fromBufferAttribute(t,i),A[i]=A[i-1],A[i]+=fa.distanceTo(da);e.setAttribute("lineDistance",new ke(A,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const A=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),Cs.copy(A.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;gh.copy(i).invert(),ur.copy(e.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=A.index,u=A.attributes.position;if(c!==null){const d=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let B=d,p=g-1;B<p;B+=l){const f=c.getX(B),m=c.getX(B+1),_=Es(this,e,ur,o,f,m,B);_&&t.push(_)}if(this.isLineLoop){const B=c.getX(g-1),p=c.getX(d),f=Es(this,e,ur,o,B,p,g-1);f&&t.push(f)}}else{const d=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let B=d,p=g-1;B<p;B+=l){const f=Es(this,e,ur,o,B,B+1,B);f&&t.push(f)}if(this.isLineLoop){const B=Es(this,e,ur,o,g-1,d,g-1);B&&t.push(B)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,A=Object.keys(t);if(A.length>0){const i=t[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Es(n,e,t,A,i,r,s){const a=n.geometry.attributes.position;if(fa.fromBufferAttribute(a,i),da.fromBufferAttribute(a,r),t.distanceSqToSegment(fa,da,mo,mh)>A)return;mo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(mo);if(!(l<e.near||l>e.far))return{distance:l,point:mh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Bh=new b,wh=new b;class Cn extends gn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,A=[];for(let i=0,r=t.count;i<r;i+=2)Bh.fromBufferAttribute(t,i),wh.fromBufferAttribute(t,i+1),A[i]=i===0?0:A[i-1],A[i+1]=A[i]+Bh.distanceTo(wh);e.setAttribute("lineDistance",new ke(A,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gr extends iA{constructor(e,t,A=en,i,r,s,a=zt,o=zt,l,c=vn,h=1){if(c!==vn&&c!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,r,s,a,o,c,A,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sg extends Gr{constructor(e,t=en,A=ui,i,r,s=zt,a=zt,o,l=vn){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,A,i,r,s,a,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Df extends iA{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zt extends gt{constructor(e=1,t=1,A=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:A,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};const l=this;i=Math.floor(i),r=Math.floor(r);const c=[],h=[],u=[],d=[];let g=0;const B=[],p=A/2;let f=0;m(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2));function m(){const x=new b,E=new b;let C=0;const M=(t-e)/A;for(let F=0;F<=r;F++){const w=[],y=F/r,T=y*(t-e)+e;for(let D=0;D<=i;D++){const Q=D/i,N=Q*o+a,V=Math.sin(N),O=Math.cos(N);E.x=T*V,E.y=-y*A+p,E.z=T*O,h.push(E.x,E.y,E.z),x.set(V,M,O).normalize(),u.push(x.x,x.y,x.z),d.push(Q,1-y),w.push(g++)}B.push(w)}for(let F=0;F<i;F++)for(let w=0;w<r;w++){const y=B[w][F],T=B[w+1][F],D=B[w+1][F+1],Q=B[w][F+1];(e>0||w!==0)&&(c.push(y,T,Q),C+=3),(t>0||w!==r-1)&&(c.push(T,D,Q),C+=3)}l.addGroup(f,C,0),f+=C}function _(x){const E=g,C=new Re,M=new b;let F=0;const w=x===!0?e:t,y=x===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,p*y,0),u.push(0,y,0),d.push(.5,.5),g++;const T=g;for(let D=0;D<=i;D++){const N=D/i*o+a,V=Math.cos(N),O=Math.sin(N);M.x=w*O,M.y=p*y,M.z=w*V,h.push(M.x,M.y,M.z),u.push(0,y,0),C.x=V*.5+.5,C.y=O*.5*y+.5,d.push(C.x,C.y),g++}for(let D=0;D<i;D++){const Q=E+D,N=T+D;x===!0?c.push(N,N+1,Q):c.push(N+1,N,Q),F+=3}l.addGroup(f,F,x===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _c extends gt{constructor(e=[],t=[],A=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:A,detail:i};const r=[],s=[];a(i),l(A),c(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new b,x=new b,E=new b;for(let C=0;C<t.length;C+=3)d(t[C+0],_),d(t[C+1],x),d(t[C+2],E),o(_,x,E,m)}function o(m,_,x,E){const C=E+1,M=[];for(let F=0;F<=C;F++){M[F]=[];const w=m.clone().lerp(x,F/C),y=_.clone().lerp(x,F/C),T=C-F;for(let D=0;D<=T;D++)D===0&&F===C?M[F][D]=w:M[F][D]=w.clone().lerp(y,D/T)}for(let F=0;F<C;F++)for(let w=0;w<2*(C-F)-1;w++){const y=Math.floor(w/2);w%2===0?(u(M[F][y+1]),u(M[F+1][y]),u(M[F][y])):(u(M[F][y+1]),u(M[F+1][y+1]),u(M[F+1][y]))}}function l(m){const _=new b;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(m),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function c(){const m=new b;for(let _=0;_<r.length;_+=3){m.x=r[_+0],m.y=r[_+1],m.z=r[_+2];const x=p(m)/2/Math.PI+.5,E=f(m)/Math.PI+.5;s.push(x,1-E)}g(),h()}function h(){for(let m=0;m<s.length;m+=6){const _=s[m+0],x=s[m+2],E=s[m+4],C=Math.max(_,x,E),M=Math.min(_,x,E);C>.9&&M<.1&&(_<.2&&(s[m+0]+=1),x<.2&&(s[m+2]+=1),E<.2&&(s[m+4]+=1))}}function u(m){r.push(m.x,m.y,m.z)}function d(m,_){const x=m*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){const m=new b,_=new b,x=new b,E=new b,C=new Re,M=new Re,F=new Re;for(let w=0,y=0;w<r.length;w+=9,y+=6){m.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),C.set(s[y+0],s[y+1]),M.set(s[y+2],s[y+3]),F.set(s[y+4],s[y+5]),E.copy(m).add(_).add(x).divideScalar(3);const T=p(E);B(C,y+0,m,T),B(M,y+2,_,T),B(F,y+4,x,T)}}function B(m,_,x,E){E<0&&m.x===1&&(s[_]=m.x-1),x.x===0&&x.z===0&&(s[_]=E/2/Math.PI+.5)}function p(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.vertices,e.indices,e.radius,e.detail)}}class Gi extends _c{constructor(e=1,t=0){const A=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(A,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gi(e.radius,e.detail)}}class ji extends gt{constructor(e=1,t=1,A=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:A,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(A),o=Math.floor(i),l=a+1,c=o+1,h=e/a,u=t/o,d=[],g=[],B=[],p=[];for(let f=0;f<c;f++){const m=f*u-s;for(let _=0;_<l;_++){const x=_*h-r;g.push(x,-m,0),B.push(0,0,1),p.push(_/a),p.push(1-f/o)}}for(let f=0;f<o;f++)for(let m=0;m<a;m++){const _=m+l*f,x=m+l*(f+1),E=m+1+l*(f+1),C=m+1+l*f;d.push(_,x,C),d.push(x,E,C)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(B,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class qr extends gt{constructor(e=1,t=32,A=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:A,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),A=Math.max(2,Math.floor(A));const o=Math.min(s+a,Math.PI);let l=0;const c=[],h=new b,u=new b,d=[],g=[],B=[],p=[];for(let f=0;f<=A;f++){const m=[],_=f/A;let x=0;f===0&&s===0?x=.5/t:f===A&&o===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const C=E/t;h.x=-e*Math.cos(i+C*r)*Math.sin(s+_*a),h.y=e*Math.cos(s+_*a),h.z=e*Math.sin(i+C*r)*Math.sin(s+_*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),B.push(u.x,u.y,u.z),p.push(C+x,1-_),m.push(l++)}c.push(m)}for(let f=0;f<A;f++)for(let m=0;m<t;m++){const _=c[f][m+1],x=c[f][m],E=c[f+1][m],C=c[f+1][m+1];(f!==0||s>0)&&d.push(_,x,C),(f!==A-1||o<Math.PI)&&d.push(x,E,C)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(B,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ai extends gt{constructor(e=1,t=.4,A=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:A,tubularSegments:i,arc:r},A=Math.floor(A),i=Math.floor(i);const s=[],a=[],o=[],l=[],c=new b,h=new b,u=new b;for(let d=0;d<=A;d++)for(let g=0;g<=i;g++){const B=g/i*r,p=d/A*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(B),h.y=(e+t*Math.cos(p))*Math.sin(B),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),c.x=e*Math.cos(B),c.y=e*Math.sin(B),u.subVectors(h,c).normalize(),o.push(u.x,u.y,u.z),l.push(g/i),l.push(d/A)}for(let d=1;d<=A;d++)for(let g=1;g<=i;g++){const B=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,f=(i+1)*(d-1)+g,m=(i+1)*d+g;s.push(B,p,m),s.push(p,f,m)}this.setIndex(s),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vr extends gt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],A=new Set,i=new b,r=new b;if(e.index!==null){const s=e.attributes.position,a=e.index;let o=e.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,c=o.length;l<c;++l){const h=o[l],u=h.start,d=h.count;for(let g=u,B=u+d;g<B;g+=3)for(let p=0;p<3;p++){const f=a.getX(g+p),m=a.getX(g+(p+1)%3);i.fromBufferAttribute(s,f),r.fromBufferAttribute(s,m),_h(i,r,A)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){const c=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(s,c),r.fromBufferAttribute(s,h),_h(i,r,A)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function _h(n,e,t){const A=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(A)===!0||t.has(i)===!0?!1:(t.add(A),t.add(i),!0)}class Fg extends pi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class bg extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $r extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new GA,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tg extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qg extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hf extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Bo=new pt,xh=new b,vh=new b;class Ig{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=xA,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,A=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?A.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xc extends If{constructor(e=-1,t=1,A=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=A,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,A,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=A-e,s=A+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lg extends Ig{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vc extends Hf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Lg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Rg extends Hf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dg extends SA{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ch=new pt;class Pf{constructor(e,t,A=0,i=1/0){this.ray=new Ua(e,t),this.near=A,this.far=i,this.camera=null,this.layers=new Bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ch.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(e,t=!0,A=[]){return Ol(e,this,A,t),A.sort(Eh),A}intersectObjects(e,t=!0,A=[]){for(let i=0,r=e.length;i<r;i++)Ol(e[i],this,A,t);return A.sort(Eh),A}}function Eh(n,e){return n.distance-e.distance}function Ol(n,e,t,A){let i=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(i=!1),i===!0&&A===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Ol(r[s],e,t,!0)}}class yh{constructor(e=1,t=0,A=0){this.radius=e,this.phi=t,this.theta=A}set(e,t,A){return this.radius=e,this.phi=t,this.theta=A,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,A){return this.radius=Math.sqrt(e*e+t*t+A*A),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,A),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nf extends Cn{constructor(e=10,t=10,A=4473924,i=8947848){A=new Fe(A),i=new Fe(i);const r=t/2,s=e/t,a=e/2,o=[],l=[];for(let u=0,d=0,g=-a;u<=t;u++,g+=s){o.push(-a,0,g,a,0,g),o.push(g,0,-a,g,0,a);const B=u===r?A:i;B.toArray(l,d),d+=3,B.toArray(l,d),d+=3,B.toArray(l,d),d+=3,B.toArray(l,d),d+=3}const c=new gt;c.setAttribute("position",new ke(o,3)),c.setAttribute("color",new ke(l,3));const h=new An({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Pg extends Cn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],A=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new gt;i.setAttribute("position",new ke(t,3)),i.setAttribute("color",new ke(A,3));const r=new An({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,A){const i=new Fe,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(A),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Of extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Mh(n,e,t,A){const i=Ng(A);switch(t){case Cf:return n*e;case yf:return n*e/i.components*i.byteLength;case uc:return n*e/i.components*i.byteLength;case Ji:return n*e*2/i.components*i.byteLength;case fc:return n*e*2/i.components*i.byteLength;case Ef:return n*e*3/i.components*i.byteLength;case NA:return n*e*4/i.components*i.byteLength;case dc:return n*e*4/i.components*i.byteLength;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(n,16)*Math.max(e,8)/4;case al:case ll:return Math.max(n,8)*Math.max(e,8)/2;case hl:case ul:case dl:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:case gl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ql:case Il:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rl:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ng(n){switch(n){case xA:case wf:return{byteLength:1,components:1};case Pr:case _f:case xn:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case en:case lc:case ZA:return{byteLength:4,components:1};case xf:case vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);function Gf(){let n=null,e=!1,t=null,A=null;function i(r,s){t(r,s),A=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(A=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(A),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Og(n){const e=new WeakMap;function t(a,o){const l=a.array,c=a.usage,h=l.byteLength,u=n.createBuffer();n.bindBuffer(o,u),n.bufferData(o,l,c),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function A(a,o,l){const c=o.array,h=o.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,c);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){const g=h[u],B=h[d];B.start<=g.start+g.count+1?g.count=Math.max(g.count,B.start+B.count-g.start):(++u,h[u]=B)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){const B=h[d];n.bufferSubData(l,B.start*c.BYTES_PER_ELEMENT,c,B.start,B.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=e.get(a);o&&(n.deleteBuffer(o.buffer),e.delete(a))}function s(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,o));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(l.buffer,a,o),l.version=a.version}}return{get:i,remove:r,update:s}}var Gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vg=`#ifdef USE_ALPHAHASH
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
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
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
#endif`,Jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
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
#endif`,Im=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Nm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Om=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jm=`#if defined( USE_POINTS_UV )
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
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,s0=`#ifndef FLAT_SHADED
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
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
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
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
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
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
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
}`,j0=`uniform vec3 diffuse;
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
}`,eB=`#include <common>
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
}`,tB=`uniform vec3 diffuse;
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
}`,AB=`#define LAMBERT
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
}`,nB=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,iB=`#define MATCAP
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
}`,rB=`#define MATCAP
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
}`,sB=`#define NORMAL
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
}`,aB=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oB=`#define PHONG
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
}`,lB=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,cB=`#define STANDARD
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
}`,hB=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,uB=`#define TOON
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
}`,fB=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,dB=`uniform float size;
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
}`,pB=`uniform vec3 diffuse;
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
}`,gB=`#include <common>
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
}`,mB=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,BB=`uniform float rotation;
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
}`,wB=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Gg,alphahash_pars_fragment:Vg,alphamap_fragment:kg,alphamap_pars_fragment:Kg,alphatest_fragment:zg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:Yg,batching_pars_vertex:Zg,batching_vertex:Jg,begin_vertex:qg,beginnormal_vertex:$g,bsdfs:jg,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:rm,color_fragment:sm,color_pars_fragment:am,color_pars_vertex:om,color_vertex:lm,common:cm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:fm,displacementmap_vertex:dm,emissivemap_fragment:pm,emissivemap_pars_fragment:gm,colorspace_fragment:mm,colorspace_pars_fragment:Bm,envmap_fragment:wm,envmap_common_pars_fragment:_m,envmap_pars_fragment:xm,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Im,envmap_vertex:Cm,fog_vertex:Em,fog_pars_vertex:ym,fog_fragment:Mm,fog_pars_fragment:Um,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:Fm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Tm,lights_pars_begin:Qm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Rm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Nm,lights_fragment_begin:Om,lights_fragment_maps:Gm,lights_fragment_end:Vm,logdepthbuf_fragment:km,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:Ym,map_particle_fragment:Zm,map_particle_pars_fragment:Jm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:$m,morphinstance_vertex:jm,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:A0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:r0,normal_pars_fragment:s0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:f0,opaque_fragment:d0,packing:p0,premultiplied_alpha_fragment:g0,project_vertex:m0,dithering_fragment:B0,dithering_pars_fragment:w0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:C0,shadowmap_vertex:E0,shadowmask_pars_fragment:y0,skinbase_vertex:M0,skinning_pars_vertex:U0,skinning_vertex:S0,skinnormal_vertex:F0,specularmap_fragment:b0,specularmap_pars_fragment:T0,tonemapping_fragment:Q0,tonemapping_pars_fragment:I0,transmission_fragment:L0,transmission_pars_fragment:R0,uv_pars_fragment:D0,uv_pars_vertex:H0,uv_vertex:P0,worldpos_vertex:N0,background_vert:O0,background_frag:G0,backgroundCube_vert:V0,backgroundCube_frag:k0,cube_vert:K0,cube_frag:z0,depth_vert:W0,depth_frag:X0,distance_vert:Y0,distance_frag:Z0,equirect_vert:J0,equirect_frag:q0,linedashed_vert:$0,linedashed_frag:j0,meshbasic_vert:eB,meshbasic_frag:tB,meshlambert_vert:AB,meshlambert_frag:nB,meshmatcap_vert:iB,meshmatcap_frag:rB,meshnormal_vert:sB,meshnormal_frag:aB,meshphong_vert:oB,meshphong_frag:lB,meshphysical_vert:cB,meshphysical_frag:hB,meshtoon_vert:uB,meshtoon_frag:fB,points_vert:dB,points_frag:pB,shadow_vert:gB,shadow_frag:mB,sprite_vert:BB,sprite_frag:wB},he={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},YA={basic:{uniforms:tA([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:tA([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:tA([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:tA([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:tA([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:tA([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:tA([he.points,he.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:tA([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:tA([he.common,he.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:tA([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:tA([he.sprite,he.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:tA([he.common,he.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:tA([he.lights,he.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};YA.physical={uniforms:tA([YA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ys={r:0,b:0,g:0},Jn=new GA,_B=new pt;function xB(n,e,t,A,i,r,s){const a=new Fe(0);let o=r===!0?0:1,l,c,h=null,u=0,d=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function B(_){let x=!1;const E=g(_);E===null?f(a,o):E&&E.isColor&&(f(E,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?A.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(_,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===ya)?(c===void 0&&(c=new ce(new Tt(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:$i(YA.backgroundCube.uniforms),vertexShader:YA.backgroundCube.vertexShader,fragmentShader:YA.backgroundCube.fragmentShader,side:uA,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,M,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Jn.copy(x.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_B.makeRotationFromEuler(Jn)),c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==rt,(h!==E||u!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ce(new ji(2,2),new tn({name:"BackgroundMaterial",uniforms:$i(YA.background.uniforms),vertexShader:YA.background.vertexShader,fragmentShader:YA.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,u=E.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function f(_,x){_.getRGB(ys,Qf(n)),A.buffers.color.setClear(ys.r,ys.g,ys.b,x,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),o=x,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,f(a,o)},render:B,addToRenderList:p,dispose:m}}function vB(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),A={},i=u(null);let r=i,s=!1;function a(y,T,D,Q,N){let V=!1;const O=h(Q,D,T);r!==O&&(r=O,l(r.object)),V=d(y,Q,D,N),V&&g(y,Q,D,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,x(y,T,D,Q),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function o(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function h(y,T,D){const Q=D.wireframe===!0;let N=A[y.id];N===void 0&&(N={},A[y.id]=N);let V=N[T.id];V===void 0&&(V={},N[T.id]=V);let O=V[Q];return O===void 0&&(O=u(o()),V[Q]=O),O}function u(y){const T=[],D=[],Q=[];for(let N=0;N<t;N++)T[N]=0,D[N]=0,Q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:Q,object:y,attributes:{},index:null}}function d(y,T,D,Q){const N=r.attributes,V=T.attributes;let O=0;const R=D.getAttributes();for(const X in R)if(R[X].location>=0){const ee=N[X];let te=V[X];if(te===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),ee===void 0||ee.attribute!==te||te&&ee.data!==te.data)return!0;O++}return r.attributesNum!==O||r.index!==Q}function g(y,T,D,Q){const N={},V=T.attributes;let O=0;const R=D.getAttributes();for(const X in R)if(R[X].location>=0){let ee=V[X];ee===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));const te={};te.attribute=ee,ee&&ee.data&&(te.data=ee.data),N[X]=te,O++}r.attributes=N,r.attributesNum=O,r.index=Q}function B(){const y=r.newAttributes;for(let T=0,D=y.length;T<D;T++)y[T]=0}function p(y){f(y,0)}function f(y,T){const D=r.newAttributes,Q=r.enabledAttributes,N=r.attributeDivisors;D[y]=1,Q[y]===0&&(n.enableVertexAttribArray(y),Q[y]=1),N[y]!==T&&(n.vertexAttribDivisor(y,T),N[y]=T)}function m(){const y=r.newAttributes,T=r.enabledAttributes;for(let D=0,Q=T.length;D<Q;D++)T[D]!==y[D]&&(n.disableVertexAttribArray(D),T[D]=0)}function _(y,T,D,Q,N,V,O){O===!0?n.vertexAttribIPointer(y,T,D,N,V):n.vertexAttribPointer(y,T,D,Q,N,V)}function x(y,T,D,Q){B();const N=Q.attributes,V=D.getAttributes(),O=T.defaultAttributeValues;for(const R in V){const X=V[R];if(X.location>=0){let J=N[R];if(J===void 0&&(R==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),R==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const ee=J.normalized,te=J.itemSize,_e=e.get(J);if(_e===void 0)continue;const Ce=_e.buffer,Oe=_e.type,Je=_e.bytesPerElement,Y=Oe===n.INT||Oe===n.UNSIGNED_INT||J.gpuType===lc;if(J.isInterleavedBufferAttribute){const $=J.data,ge=$.stride,De=J.offset;if($.isInstancedInterleavedBuffer){for(let we=0;we<X.locationSize;we++)f(X.location+we,$.meshPerAttribute);y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let we=0;we<X.locationSize;we++)p(X.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let we=0;we<X.locationSize;we++)_(X.location+we,te/X.locationSize,Oe,ee,ge*Je,(De+te/X.locationSize*we)*Je,Y)}else{if(J.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)f(X.location+$,J.meshPerAttribute);y.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let $=0;$<X.locationSize;$++)p(X.location+$);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let $=0;$<X.locationSize;$++)_(X.location+$,te/X.locationSize,Oe,ee,te*Je,te/X.locationSize*$*Je,Y)}}else if(O!==void 0){const ee=O[R];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(X.location,ee);break;case 3:n.vertexAttrib3fv(X.location,ee);break;case 4:n.vertexAttrib4fv(X.location,ee);break;default:n.vertexAttrib1fv(X.location,ee)}}}}m()}function E(){F();for(const y in A){const T=A[y];for(const D in T){const Q=T[D];for(const N in Q)c(Q[N].object),delete Q[N];delete T[D]}delete A[y]}}function C(y){if(A[y.id]===void 0)return;const T=A[y.id];for(const D in T){const Q=T[D];for(const N in Q)c(Q[N].object),delete Q[N];delete T[D]}delete A[y.id]}function M(y){for(const T in A){const D=A[T];if(D[y.id]===void 0)continue;const Q=D[y.id];for(const N in Q)c(Q[N].object),delete Q[N];delete D[y.id]}}function F(){w(),s=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:B,enableAttribute:p,disableUnusedAttributes:m}}function CB(n,e,t){let A;function i(l){A=l}function r(l,c){n.drawArrays(A,l,c),t.update(c,A,1)}function s(l,c,h){h!==0&&(n.drawArraysInstanced(A,l,c,h),t.update(c,A,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,l,0,c,0,h);let d=0;for(let g=0;g<h;g++)d+=c[g];t.update(d,A,1)}function o(l,c,h,u){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)s(l[g],c[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(A,l,0,c,0,u,0,h);let g=0;for(let B=0;B<h;B++)g+=c[B]*u[B];t.update(g,A,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function EB(n,e,t,A){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){return!(M!==NA&&A.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const F=M===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==xA&&A.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ZA&&!F)}function o(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=o(l);c!==l&&(Le("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:B,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,maxSamples:E,samples:C}}function yB(n){const e=this;let t=null,A=0,i=!1,r=!1;const s=new In,a=new Pe,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||A!==0||i;return i=u,A=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){const g=h.clippingPlanes,B=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!i||g===null||g.length===0||r&&!p)r?c(null):l();else{const m=r?0:A,_=m*4;let x=f.clippingState||null;o.value=x,x=c(g,u,_,d);for(let E=0;E!==_;++E)x[E]=t[E];f.clippingState=x,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=m}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=A>0),e.numPlanes=A,e.numIntersection=0}function c(h,u,d,g){const B=h!==null?h.length:0;let p=null;if(B!==0){if(p=o.value,g!==!0||p===null){const f=d+B*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,x=d;_!==B;++_,x+=4)s.copy(h[_]).applyMatrix4(m,a),s.normal.toArray(p,x),p[x+3]=s.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=B,e.numIntersection=0,p}}function MB(n){let e=new WeakMap;function t(s,a){return a===nl?s.mapping=ui:a===il&&(s.mapping=Zi),s}function A(s){if(s&&s.isTexture){const a=s.mapping;if(a===nl||a===il)if(e.has(s)){const o=e.get(s).texture;return t(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new Rf(o.height);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",i),t(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function r(){e=new WeakMap}return{get:A,dispose:r}}const Dn=4,Uh=[.125,.215,.35,.446,.526,.582],ni=20,UB=256,fr=new xc,Sh=new Fe;let wo=null,_o=0,xo=0,vo=!1;const SB=new b;class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,A=.1,i=100,r={}){const{size:s=256,position:a=SB}=r;wo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,A,i,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,_o,xo),this._renderer.xr.enabled=vo,e.scissorTest=!1,bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=t||this._allocateTargets();return this._textureToCubeUV(e,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,A={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:xn,format:NA,colorSpace:qi,depthBuffer:!1},i=bh(e,t,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,A);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FB(r)),this._blurMaterial=TB(r,e,t),this._ggxMaterial=bB(r,e,t)}return i}_compileMaterial(e){const t=new ce(new gt,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,A,i,r){const o=new SA(90,1,t,A),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sh),h.toneMapping=qA,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Tt,new Jr({name:"PMREM.Background",side:uA,depthWrite:!1,depthTest:!1})));const B=this._backgroundBox,p=B.material;let f=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(Sh),f=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,l[_],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+c[_],r.y,r.z)):x===1?(o.up.set(0,0,l[_]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+c[_],r.z)):(o.up.set(0,l[_],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+c[_]));const E=this._cubeSize;bi(i,x*E,_>2?E:0,E,E),h.setRenderTarget(i),f&&h.render(B,o),h.render(e,o)}h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const A=this._renderer,i=e.mapping===ui||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;bi(t,0,0,3*o,2*o),A.setRenderTarget(t),A.render(s,fr)}_applyPMREM(e){const t=this._renderer,A=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=A}_applyGGXFilter(e,t,A){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[A];a.material=s;const o=s.uniforms,l=A/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),u=0+l*1.25,d=h*u,{_lodMax:g}=this,B=this._sizeLods[A],p=3*B*(A>g-Dn?A-g+Dn:0),f=4*(this._cubeSize-B);o.envMap.value=e.texture,o.roughness.value=d,o.mipInt.value=g-t,bi(r,p,f,3*B,2*B),i.setRenderTarget(r),i.render(a,fr),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-A,bi(e,p,f,3*B,2*B),i.setRenderTarget(e),i.render(a,fr)}_blur(e,t,A,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,A,i,"latitudinal",r),this._halfBlur(s,e,A,A,i,"longitudinal",r)}_halfBlur(e,t,A,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const c=3,h=this._lodMeshes[i];h.material=l;const u=l.uniforms,d=this._sizeLods[A]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ni-1),B=r/g,p=isFinite(r)?1+Math.floor(c*B):ni;p>ni&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const f=[];let m=0;for(let M=0;M<ni;++M){const F=M/B,w=Math.exp(-F*F/2);f.push(w),M===0?m+=w:M<p&&(m+=2*w)}for(let M=0;M<f.length;M++)f[M]=f[M]/m;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=s==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-A;const x=this._sizeLods[i],E=3*x*(i>_-Dn?i-_+Dn:0),C=4*(this._cubeSize-x);bi(t,E,C,3*x,2*x),o.setRenderTarget(t),o.render(h,fr)}}function FB(n){const e=[],t=[],A=[];let i=n;const r=n-Dn+1+Uh.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>n-Dn?o=Uh[s-n+Dn-1]:s===0&&(o=0),t.push(o);const l=1/(a-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,g=6,B=3,p=2,f=1,m=new Float32Array(B*g*d),_=new Float32Array(p*g*d),x=new Float32Array(f*g*d);for(let C=0;C<d;C++){const M=C%3*2/3-1,F=C>2?0:-1,w=[M,F,0,M+2/3,F,0,M+2/3,F+1,0,M,F,0,M+2/3,F+1,0,M,F+1,0];m.set(w,B*g*C),_.set(u,p*g*C);const y=[C,C,C,C,C,C];x.set(y,f*g*C)}const E=new gt;E.setAttribute("position",new CA(m,B)),E.setAttribute("uv",new CA(_,p)),E.setAttribute("faceIndex",new CA(x,f)),A.push(new ce(E,null)),i>Dn&&i--}return{lodMeshes:A,sizeLods:e,sigmas:t}}function bh(n,e,t){const A=new $A(n,e,t);return A.texture.mapping=ya,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function bi(n,e,t,A,i){n.viewport.set(e,t,A,i),n.scissor.set(e,t,A,i)}function bB(n,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UB,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function TB(n,e,t){const A=new Float32Array(ni),i=new b(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Th(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Qh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}function QB(n){let e=new WeakMap,t=null;function A(a){if(a&&a.isTexture){const o=a.mapping,l=o===nl||o===il,c=o===ui||o===Zi;if(l||c){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Fh(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||c&&d&&i(d)?(t===null&&(t=new Fh(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:A,dispose:s}}function IB(n){const e={};function t(A){if(e[A]!==void 0)return e[A];const i=n.getExtension(A);return e[A]=i,i}return{has:function(A){return t(A)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(A){const i=t(A);return i===null&&Or("WebGLRenderer: "+A+" extension not supported."),i}}}function LB(n,e,t,A){const i={},r=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete i[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),A.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",s),i[u.id]=!0,t.memory.geometries++),u}function o(h){const u=h.attributes;for(const d in u)e.update(u[d],n.ARRAY_BUFFER)}function l(h){const u=[],d=h.index,g=h.attributes.position;let B=0;if(d!==null){const m=d.array;B=d.version;for(let _=0,x=m.length;_<x;_+=3){const E=m[_+0],C=m[_+1],M=m[_+2];u.push(E,C,C,M,M,E)}}else if(g!==void 0){const m=g.array;B=g.version;for(let _=0,x=m.length/3-1;_<x;_+=3){const E=_+0,C=_+1,M=_+2;u.push(E,C,C,M,M,E)}}else return;const p=new(Uf(u)?Tf:bf)(u,1);p.version=B;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function c(h){const u=r.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:o,getWireframeAttribute:c}}function RB(n,e,t){let A;function i(u){A=u}let r,s;function a(u){r=u.type,s=u.bytesPerElement}function o(u,d){n.drawElements(A,d,r,u*s),t.update(d,A,1)}function l(u,d,g){g!==0&&(n.drawElementsInstanced(A,d,r,u*s,g),t.update(d,A,g))}function c(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,d,0,r,u,0,g);let p=0;for(let f=0;f<g;f++)p+=d[f];t.update(p,A,1)}function h(u,d,g,B){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)l(u[f]/s,d[f],B[f]);else{p.multiDrawElementsInstancedWEBGL(A,d,0,r,u,0,B,0,g);let f=0;for(let m=0;m<g;m++)f+=d[m]*B[m];t.update(f,A,1)}}this.setMode=i,this.setIndex=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function DB(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function A(r,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:$e("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:A}}function HB(n,e,t){const A=new WeakMap,i=new vt;function r(s,a,o){const l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let u=A.get(a);if(u===void 0||u.count!==h){let y=function(){F.dispose(),A.delete(a),a.removeEventListener("dispose",y)};var d=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,B=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),B===!0&&(x=2),p===!0&&(x=3);let E=a.attributes.position.count*x,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const M=new Float32Array(E*C*4*h),F=new Sf(M,E,C,h);F.type=ZA,F.needsUpdate=!0;const w=x*4;for(let T=0;T<h;T++){const D=f[T],Q=m[T],N=_[T],V=E*C*4*T;for(let O=0;O<D.count;O++){const R=O*w;g===!0&&(i.fromBufferAttribute(D,O),M[V+R+0]=i.x,M[V+R+1]=i.y,M[V+R+2]=i.z,M[V+R+3]=0),B===!0&&(i.fromBufferAttribute(Q,O),M[V+R+4]=i.x,M[V+R+5]=i.y,M[V+R+6]=i.z,M[V+R+7]=0),p===!0&&(i.fromBufferAttribute(N,O),M[V+R+8]=i.x,M[V+R+9]=i.y,M[V+R+10]=i.z,M[V+R+11]=N.itemSize===4?i.w:1)}}u={count:h,texture:F,size:new Re(E,C)},A.set(a,u),a.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const B=a.morphTargetsRelative?1:1-g;o.getUniforms().setValue(n,"morphTargetBaseInfluence",B),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function PB(n,e,t,A){let i=new WeakMap;function r(o){const l=A.render.frame,c=o.geometry,h=e.get(o,c);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),i.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),i.set(o,l))),o.isSkinnedMesh){const u=o.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:s}}const NB={[hf]:"LINEAR_TONE_MAPPING",[uf]:"REINHARD_TONE_MAPPING",[ff]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[gf]:"AGX_TONE_MAPPING",[mf]:"NEUTRAL_TONE_MAPPING",[pf]:"CUSTOM_TONE_MAPPING"};function OB(n,e,t,A,i){const r=new $A(e,t,{type:n,depthBuffer:A,stencilBuffer:i}),s=new $A(e,t,{type:xn,depthBuffer:!1,stencilBuffer:!1}),a=new gt;a.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ke([0,2,0,0,2,0],2));const o=new bg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new ce(a,o),c=new xc(-1,1,1,-1,0,1);let h=null,u=null,d=!1,g,B=null,p=[],f=!1;this.setSize=function(m,_){r.setSize(m,_),s.setSize(m,_);for(let x=0;x<p.length;x++){const E=p[x];E.setSize&&E.setSize(m,_)}},this.setEffects=function(m){p=m,f=p.length>0&&p[0].isRenderPass===!0;const _=r.width,x=r.height;for(let E=0;E<p.length;E++){const C=p[E];C.setSize&&C.setSize(_,x)}},this.begin=function(m,_){if(d||m.toneMapping===qA&&p.length===0)return!1;if(B=_,_!==null){const x=_.width,E=_.height;(r.width!==x||r.height!==E)&&this.setSize(x,E)}return f===!1&&m.setRenderTarget(r),g=m.toneMapping,m.toneMapping=qA,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=g,d=!0;let x=r,E=s;for(let C=0;C<p.length;C++){const M=p[C];if(M.enabled!==!1&&(M.render(m,E,x,_),M.needsSwap!==!1)){const F=x;x=E,E=F}}if(h!==m.outputColorSpace||u!==m.toneMapping){h=m.outputColorSpace,u=m.toneMapping,o.defines={},Ze.getTransfer(h)===rt&&(o.defines.SRGB_TRANSFER="");const C=NB[u];C&&(o.defines[C]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=x.texture,m.setRenderTarget(B),m.render(l,c),B=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),s.dispose(),a.dispose(),o.dispose()}}const Vf=new iA,Gl=new Gr(1,1),kf=new Sf,Kf=new rg,zf=new Lf,Ih=[],Lh=[],Rh=new Float32Array(16),Dh=new Float32Array(9),Hh=new Float32Array(4);function er(n,e,t){const A=n[0];if(A<=0||A>0)return n;const i=e*t;let r=Ih[i];if(r===void 0&&(r=new Float32Array(i),Ih[i]=r),e!==0){A.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,A=n.length;t<A;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,A=e.length;t<A;t++)n[t]=e[t]}function Fa(n,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let A=0;A!==e;++A)t[A]=n.allocateTextureUnit();return t}function GB(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function VB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function kB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function KB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function zB(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Dt(t,A))return;Hh.set(A),n.uniformMatrix2fv(this.addr,!1,Hh),Ht(t,A)}}function WB(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Dt(t,A))return;Dh.set(A),n.uniformMatrix3fv(this.addr,!1,Dh),Ht(t,A)}}function XB(n,e){const t=this.cache,A=e.elements;if(A===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Dt(t,A))return;Rh.set(A),n.uniformMatrix4fv(this.addr,!1,Rh),Ht(t,A)}}function YB(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function JB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function qB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function $B(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jB(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Aw(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(Gl.compareFunction=t.isReversedDepthBuffer()?gc:pc,r=Gl):r=Vf,t.setTexture2D(e||r,i)}function nw(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTexture3D(e||Kf,i)}function iw(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTextureCube(e||zf,i)}function rw(n,e,t){const A=this.cache,i=t.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),t.setTexture2DArray(e||kf,i)}function sw(n){switch(n){case 5126:return GB;case 35664:return VB;case 35665:return kB;case 35666:return KB;case 35674:return zB;case 35675:return WB;case 35676:return XB;case 5124:case 35670:return YB;case 35667:case 35671:return ZB;case 35668:case 35672:return JB;case 35669:case 35673:return qB;case 5125:return $B;case 36294:return jB;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}function aw(n,e){n.uniform1fv(this.addr,e)}function ow(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function lw(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function cw(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function hw(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uw(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fw(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dw(n,e){n.uniform1iv(this.addr,e)}function pw(n,e){n.uniform2iv(this.addr,e)}function gw(n,e){n.uniform3iv(this.addr,e)}function mw(n,e){n.uniform4iv(this.addr,e)}function Bw(n,e){n.uniform1uiv(this.addr,e)}function ww(n,e){n.uniform2uiv(this.addr,e)}function _w(n,e){n.uniform3uiv(this.addr,e)}function xw(n,e){n.uniform4uiv(this.addr,e)}function vw(n,e,t){const A=this.cache,i=e.length,r=Fa(t,i);Dt(A,r)||(n.uniform1iv(this.addr,r),Ht(A,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=Gl:s=Vf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||s,r[a])}function Cw(n,e,t){const A=this.cache,i=e.length,r=Fa(t,i);Dt(A,r)||(n.uniform1iv(this.addr,r),Ht(A,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Kf,r[s])}function Ew(n,e,t){const A=this.cache,i=e.length,r=Fa(t,i);Dt(A,r)||(n.uniform1iv(this.addr,r),Ht(A,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||zf,r[s])}function yw(n,e,t){const A=this.cache,i=e.length,r=Fa(t,i);Dt(A,r)||(n.uniform1iv(this.addr,r),Ht(A,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||kf,r[s])}function Mw(n){switch(n){case 5126:return aw;case 35664:return ow;case 35665:return lw;case 35666:return cw;case 35674:return hw;case 35675:return uw;case 35676:return fw;case 5124:case 35670:return dw;case 35667:case 35671:return pw;case 35668:case 35672:return gw;case 35669:case 35673:return mw;case 5125:return Bw;case 36294:return ww;case 36295:return _w;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return yw}}class Uw{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.setValue=sw(t.type)}}class Sw{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mw(t.type)}}class Fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,A){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],A)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function Ph(n,e){n.seq.push(e),n.map[e.id]=e}function bw(n,e,t){const A=n.name,i=A.length;for(Co.lastIndex=0;;){const r=Co.exec(A),s=Co.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){Ph(t,l===void 0?new Uw(a,n,e):new Sw(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Fw(a),Ph(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const A=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<A;++s){const a=e.getActiveUniform(t,s),o=e.getUniformLocation(t,a.name);bw(a,o,this)}const i=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,A,i){const r=this.map[t];r!==void 0&&r.setValue(e,A,i)}setOptional(e,t,A){const i=t[A];i!==void 0&&this.setValue(e,A,i)}static upload(e,t,A,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=A[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,t){const A=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&A.push(s)}return A}}function Nh(n,e,t){const A=n.createShader(e);return n.shaderSource(A,t),n.compileShader(A),A}const Tw=37297;let Qw=0;function Iw(n,e){const t=n.split(`
`),A=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;A.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return A.join(`
`)}const Oh=new Pe;function Lw(n){Ze._getMatrix(Oh,Ze.workingColorSpace,n);const e=`mat3( ${Oh.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case ca:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gh(n,e,t){const A=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(A&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Iw(n.getShaderSource(e),a)}else return r}function Rw(n,e){const t=Lw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Dw={[hf]:"Linear",[uf]:"Reinhard",[ff]:"Cineon",[df]:"ACESFilmic",[gf]:"AgX",[mf]:"Neutral",[pf]:"Custom"};function Hw(n,e){const t=Dw[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new b;function Pw(){Ze.getLuminanceCoefficients(Ms);const n=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Ow(n){const e=[];for(const t in n){const A=n[t];A!==!1&&e.push("#define "+t+" "+A)}return e.join(`
`)}function Gw(n,e){const t={},A=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<A;i++){const r=n.getActiveAttrib(e,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Cr(n){return n!==""}function Vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(n){return n.replace(Vw,Kw)}const kw=new Map;function Kw(n,e){let t=Ne[e];if(t===void 0){const A=kw.get(e);if(A!==void 0)t=Ne[A],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,A);else throw new Error("Can not resolve #include <"+e+">")}return Vl(t)}const zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(n){return n.replace(zw,Ww)}function Ww(n,e,t,A){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=A.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Xw={[js]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function Yw(n){return Xw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zw={[ui]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE_UV"};function Jw(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Zw[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const qw={[Zi]:"ENVMAP_MODE_REFRACTION"};function $w(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":qw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jw={[cf]:"ENVMAP_BLENDING_MULTIPLY",[Np]:"ENVMAP_BLENDING_MIX",[Op]:"ENVMAP_BLENDING_ADD"};function e_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":jw[n.combine]||"ENVMAP_BLENDING_NONE"}function t_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,A=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:A,maxMip:t}}function A_(n,e,t,A){const i=n.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=Yw(t),l=Jw(t),c=$w(t),h=e_(t),u=t_(t),d=Nw(t),g=Ow(r),B=i.createProgram();let p,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),f.length>0&&(f+=`
`)):(p=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),f=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qA?"#define TONE_MAPPING":"",t.toneMapping!==qA?Ne.tonemapping_pars_fragment:"",t.toneMapping!==qA?Hw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Rw("linearToOutputTexel",t.outputColorSpace),Pw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),s=Vl(s),s=Vh(s,t),s=kh(s,t),a=Vl(a),a=Vh(a,t),a=kh(a,t),s=Kh(s),a=Kh(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+p+s,x=m+f+a,E=Nh(i,i.VERTEX_SHADER,_),C=Nh(i,i.FRAGMENT_SHADER,x);i.attachShader(B,E),i.attachShader(B,C),t.index0AttributeName!==void 0?i.bindAttribLocation(B,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(B,0,"position"),i.linkProgram(B);function M(T){if(n.debug.checkShaderErrors){const D=i.getProgramInfoLog(B)||"",Q=i.getShaderInfoLog(E)||"",N=i.getShaderInfoLog(C)||"",V=D.trim(),O=Q.trim(),R=N.trim();let X=!0,J=!0;if(i.getProgramParameter(B,i.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,B,E,C);else{const ee=Gh(i,E,"vertex"),te=Gh(i,C,"fragment");$e("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(B,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+ee+`
`+te)}else V!==""?Le("WebGLProgram: Program Info Log:",V):(O===""||R==="")&&(J=!1);J&&(T.diagnostics={runnable:X,programLog:V,vertexShader:{log:O,prefix:p},fragmentShader:{log:R,prefix:f}})}i.deleteShader(E),i.deleteShader(C),F=new ra(i,B),w=Gw(i,B)}let F;this.getUniforms=function(){return F===void 0&&M(this),F};let w;this.getAttributes=function(){return w===void 0&&M(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(B,Tw)),y},this.destroy=function(){A.releaseStatesOfProgram(this),i.deleteProgram(B),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qw++,this.cacheKey=e,this.usedTimes=1,this.program=B,this.vertexShader=E,this.fragmentShader=C,this}let n_=0;class i_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,A=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(A),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const A of t)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let A=t.get(e);return A===void 0&&(A=new Set,t.set(e,A)),A}_getShaderStage(e){const t=this.shaderCache;let A=t.get(e);return A===void 0&&(A=new r_(e),t.set(e,A)),A}}class r_{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}}function s_(n,e,t,A,i,r,s){const a=new Bc,o=new i_,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function B(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,y,T,D,Q){const N=D.fog,V=Q.geometry,O=w.isMeshStandardMaterial?D.environment:null,R=(w.isMeshStandardMaterial?t:e).get(w.envMap||O),X=R&&R.mapping===ya?R.image.height:null,J=g[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&Le("WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=ee!==void 0?ee.length:0;let _e=0;V.morphAttributes.position!==void 0&&(_e=1),V.morphAttributes.normal!==void 0&&(_e=2),V.morphAttributes.color!==void 0&&(_e=3);let Ce,Oe,Je,Y;if(J){const nt=YA[J];Ce=nt.vertexShader,Oe=nt.fragmentShader}else Ce=w.vertexShader,Oe=w.fragmentShader,o.update(w),Je=o.getVertexShaderID(w),Y=o.getFragmentShaderID(w);const $=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),De=Q.isInstancedMesh===!0,we=Q.isBatchedMesh===!0,Xe=!!w.map,Pt=!!w.matcap,qe=!!R,At=!!w.aoMap,ot=!!w.lightMap,Ge=!!w.bumpMap,St=!!w.normalMap,I=!!w.displacementMap,Ft=!!w.emissiveMap,et=!!w.metalnessMap,ht=!!w.roughnessMap,ye=w.anisotropy>0,S=w.clearcoat>0,v=w.dispersion>0,H=w.iridescence>0,Z=w.sheen>0,j=w.transmission>0,W=ye&&!!w.anisotropyMap,Ue=S&&!!w.clearcoatMap,se=S&&!!w.clearcoatNormalMap,Ee=S&&!!w.clearcoatRoughnessMap,Ie=H&&!!w.iridescenceMap,ne=H&&!!w.iridescenceThicknessMap,oe=Z&&!!w.sheenColorMap,ve=Z&&!!w.sheenRoughnessMap,Me=!!w.specularMap,ae=!!w.specularColorMap,Ve=!!w.specularIntensityMap,L=j&&!!w.transmissionMap,fe=j&&!!w.thicknessMap,ie=!!w.gradientMap,pe=!!w.alphaMap,Ae=w.alphaTest>0,q=!!w.alphaHash,re=!!w.extensions;let He=qA;w.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(He=n.toneMapping);const ut={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:Ce,fragmentShader:Oe,defines:w.defines,customVertexShaderID:Je,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:we,batchingColor:we&&Q._colorsTexture!==null,instancing:De,instancingColor:De&&Q.instanceColor!==null,instancingMorph:De&&Q.morphTexture!==null,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:qi,alphaToCoverage:!!w.alphaToCoverage,map:Xe,matcap:Pt,envMap:qe,envMapMode:qe&&R.mapping,envMapCubeUVHeight:X,aoMap:At,lightMap:ot,bumpMap:Ge,normalMap:St,displacementMap:I,emissiveMap:Ft,normalMapObjectSpace:St&&w.normalMapType===kp,normalMapTangentSpace:St&&w.normalMapType===Mf,metalnessMap:et,roughnessMap:ht,anisotropy:ye,anisotropyMap:W,clearcoat:S,clearcoatMap:Ue,clearcoatNormalMap:se,clearcoatRoughnessMap:Ee,dispersion:v,iridescence:H,iridescenceMap:Ie,iridescenceThicknessMap:ne,sheen:Z,sheenColorMap:oe,sheenRoughnessMap:ve,specularMap:Me,specularColorMap:ae,specularIntensityMap:Ve,transmission:j,transmissionMap:L,thicknessMap:fe,gradientMap:ie,opaque:w.transparent===!1&&w.blending===ki&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ae,alphaHash:q,combine:w.combine,mapUv:Xe&&B(w.map.channel),aoMapUv:At&&B(w.aoMap.channel),lightMapUv:ot&&B(w.lightMap.channel),bumpMapUv:Ge&&B(w.bumpMap.channel),normalMapUv:St&&B(w.normalMap.channel),displacementMapUv:I&&B(w.displacementMap.channel),emissiveMapUv:Ft&&B(w.emissiveMap.channel),metalnessMapUv:et&&B(w.metalnessMap.channel),roughnessMapUv:ht&&B(w.roughnessMap.channel),anisotropyMapUv:W&&B(w.anisotropyMap.channel),clearcoatMapUv:Ue&&B(w.clearcoatMap.channel),clearcoatNormalMapUv:se&&B(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&B(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&B(w.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&B(w.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&B(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&B(w.sheenRoughnessMap.channel),specularMapUv:Me&&B(w.specularMap.channel),specularColorMapUv:ae&&B(w.specularColorMap.channel),specularIntensityMapUv:Ve&&B(w.specularIntensityMap.channel),transmissionMapUv:L&&B(w.transmissionMap.channel),thicknessMapUv:fe&&B(w.thicknessMap.channel),alphaMapUv:pe&&B(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(St||ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!V.attributes.uv&&(Xe||pe),fog:!!N,useFog:w.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:Q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:_e,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Xe&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===rt,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(w.emissiveMap.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hA,flipSided:w.side===uA,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:re&&w.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&w.extensions.multiDraw===!0||we)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function f(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const T in w.defines)y.push(T),y.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(m(y,w),_(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function m(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function _(w,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const y=g[w.type];let T;if(y){const D=YA[y];T=Bg.clone(D.uniforms)}else T=w.uniforms;return T}function E(w,y){let T=h.get(y);return T!==void 0?++T.usedTimes:(T=new A_(n,y,w,r),c.push(T),h.set(y,T)),T}function C(w){if(--w.usedTimes===0){const y=c.indexOf(w);c[y]=c[c.length-1],c.pop(),h.delete(w.cacheKey),w.destroy()}}function M(w){o.remove(w)}function F(){o.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:E,releaseProgram:C,releaseShaderCache:M,programs:c,dispose:F}}function a_(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function A(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:A,update:i,dispose:r}}function o_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xh(){const n=[];let e=0;const t=[],A=[],i=[];function r(){e=0,t.length=0,A.length=0,i.length=0}function s(h,u,d,g,B,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:d,groupOrder:g,renderOrder:h.renderOrder,z:B,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=B,f.group=p),e++,f}function a(h,u,d,g,B,p){const f=s(h,u,d,g,B,p);d.transmission>0?A.push(f):d.transparent===!0?i.push(f):t.push(f)}function o(h,u,d,g,B,p){const f=s(h,u,d,g,B,p);d.transmission>0?A.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,u){t.length>1&&t.sort(h||o_),A.length>1&&A.sort(u||Wh),i.length>1&&i.sort(u||Wh)}function c(){for(let h=e,u=n.length;h<u;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:A,transparent:i,init:r,push:a,unshift:o,finish:c,sort:l}}function l_(){let n=new WeakMap;function e(A,i){const r=n.get(A);let s;return r===void 0?(s=new Xh,n.set(A,[s])):i>=r.length?(s=new Xh,r.push(s)):s=r[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function c_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Fe};break;case"SpotLight":t={position:new b,direction:new b,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function h_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let u_=0;function f_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function d_(n){const e=new c_,t=h_(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)A.probe.push(new b);const i=new b,r=new pt,s=new pt;function a(l){let c=0,h=0,u=0;for(let w=0;w<9;w++)A.probe[w].set(0,0,0);let d=0,g=0,B=0,p=0,f=0,m=0,_=0,x=0,E=0,C=0,M=0;l.sort(f_);for(let w=0,y=l.length;w<y;w++){const T=l[w],D=T.color,Q=T.intensity,N=T.distance;let V=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Ji?V=T.shadow.map.texture:V=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)c+=D.r*Q,h+=D.g*Q,u+=D.b*Q;else if(T.isLightProbe){for(let O=0;O<9;O++)A.probe[O].addScaledVector(T.sh.coefficients[O],Q);M++}else if(T.isDirectionalLight){const O=e.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const R=T.shadow,X=t.get(T);X.shadowIntensity=R.intensity,X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,A.directionalShadow[d]=X,A.directionalShadowMap[d]=V,A.directionalShadowMatrix[d]=T.shadow.matrix,m++}A.directional[d]=O,d++}else if(T.isSpotLight){const O=e.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(D).multiplyScalar(Q),O.distance=N,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,A.spot[B]=O;const R=T.shadow;if(T.map&&(A.spotLightMap[E]=T.map,E++,R.updateMatrices(T),T.castShadow&&C++),A.spotLightMatrix[B]=R.matrix,T.castShadow){const X=t.get(T);X.shadowIntensity=R.intensity,X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,A.spotShadow[B]=X,A.spotShadowMap[B]=V,x++}B++}else if(T.isRectAreaLight){const O=e.get(T);O.color.copy(D).multiplyScalar(Q),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),A.rectArea[p]=O,p++}else if(T.isPointLight){const O=e.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){const R=T.shadow,X=t.get(T);X.shadowIntensity=R.intensity,X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,X.shadowCameraNear=R.camera.near,X.shadowCameraFar=R.camera.far,A.pointShadow[g]=X,A.pointShadowMap[g]=V,A.pointShadowMatrix[g]=T.shadow.matrix,_++}A.point[g]=O,g++}else if(T.isHemisphereLight){const O=e.get(T);O.skyColor.copy(T.color).multiplyScalar(Q),O.groundColor.copy(T.groundColor).multiplyScalar(Q),A.hemi[f]=O,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=he.LTC_FLOAT_1,A.rectAreaLTC2=he.LTC_FLOAT_2):(A.rectAreaLTC1=he.LTC_HALF_1,A.rectAreaLTC2=he.LTC_HALF_2)),A.ambient[0]=c,A.ambient[1]=h,A.ambient[2]=u;const F=A.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==B||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==m||F.numPointShadows!==_||F.numSpotShadows!==x||F.numSpotMaps!==E||F.numLightProbes!==M)&&(A.directional.length=d,A.spot.length=B,A.rectArea.length=p,A.point.length=g,A.hemi.length=f,A.directionalShadow.length=m,A.directionalShadowMap.length=m,A.pointShadow.length=_,A.pointShadowMap.length=_,A.spotShadow.length=x,A.spotShadowMap.length=x,A.directionalShadowMatrix.length=m,A.pointShadowMatrix.length=_,A.spotLightMatrix.length=x+E-C,A.spotLightMap.length=E,A.numSpotLightShadowsWithMaps=C,A.numLightProbes=M,F.directionalLength=d,F.pointLength=g,F.spotLength=B,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=m,F.numPointShadows=_,F.numSpotShadows=x,F.numSpotMaps=E,F.numLightProbes=M,A.version=u_++)}function o(l,c){let h=0,u=0,d=0,g=0,B=0;const p=c.matrixWorldInverse;for(let f=0,m=l.length;f<m;f++){const _=l[f];if(_.isDirectionalLight){const x=A.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(_.isSpotLight){const x=A.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(_.isRectAreaLight){const x=A.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),s.identity(),r.copy(_.matrixWorld),r.premultiply(p),s.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(_.isPointLight){const x=A.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){const x=A.hemi[B];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),B++}}}return{setup:a,setupView:o,state:A}}function Yh(n){const e=new d_(n),t=[],A=[];function i(c){l.camera=c,t.length=0,A.length=0}function r(c){t.push(c)}function s(c){A.push(c)}function a(){e.setup(t)}function o(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:A,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:o,pushLight:r,pushShadow:s}}function p_(n){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let a;return s===void 0?(a=new Yh(n),e.set(i,[a])):r>=s.length?(a=new Yh(n),s.push(a)):a=s[r],a}function A(){e=new WeakMap}return{get:t,dispose:A}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,B_=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],w_=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],Zh=new pt,dr=new b,Eo=new b;function __(n,e,t){let A=new wc;const i=new Re,r=new Re,s=new vt,a=new Tg,o=new Qg,l={},c=t.maxTextureSize,h={[Gn]:uA,[uA]:Gn,[hA]:hA},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:g_,fragmentShader:m_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new gt;g.setAttribute("position",new CA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const B=new ce(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let f=this.type;this.render=function(C,M,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;C.type===lf&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=js);const w=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Bn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const Q=f!==this.type;Q&&M.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=C.length;N<V;N++){const O=C[N],R=O.shadow;if(R===void 0){Le("WebGLShadowMap:",O,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const X=R.getFrameExtents();if(i.multiply(X),r.copy(R.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/X.x),i.x=r.x*X.x,R.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/X.y),i.y=r.y*X.y,R.mapSize.y=r.y)),R.map===null||Q===!0){if(R.map!==null&&(R.map.depthTexture!==null&&(R.map.depthTexture.dispose(),R.map.depthTexture=null),R.map.dispose()),this.type===vr){if(O.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}R.map=new $A(i.x,i.y,{format:Ji,type:xn,minFilter:$t,magFilter:$t,generateMipmaps:!1}),R.map.texture.name=O.name+".shadowMap",R.map.depthTexture=new Gr(i.x,i.y,ZA),R.map.depthTexture.name=O.name+".shadowMapDepth",R.map.depthTexture.format=vn,R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=zt,R.map.depthTexture.magFilter=zt}else{O.isPointLight?(R.map=new Rf(i.x),R.map.depthTexture=new Sg(i.x,en)):(R.map=new $A(i.x,i.y),R.map.depthTexture=new Gr(i.x,i.y,en)),R.map.depthTexture.name=O.name+".shadowMap",R.map.depthTexture.format=vn;const ee=n.state.buffers.depth.getReversed();this.type===js?(R.map.depthTexture.compareFunction=ee?gc:pc,R.map.depthTexture.minFilter=$t,R.map.depthTexture.magFilter=$t):(R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=zt,R.map.depthTexture.magFilter=zt)}R.camera.updateProjectionMatrix()}const J=R.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<J;ee++){if(R.map.isWebGLCubeRenderTarget)n.setRenderTarget(R.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(R.map),n.clear());const te=R.getViewport(ee);s.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),D.viewport(s)}if(O.isPointLight){const te=R.camera,_e=R.matrix,Ce=O.distance||te.far;Ce!==te.far&&(te.far=Ce,te.updateProjectionMatrix()),dr.setFromMatrixPosition(O.matrixWorld),te.position.copy(dr),Eo.copy(te.position),Eo.add(B_[ee]),te.up.copy(w_[ee]),te.lookAt(Eo),te.updateMatrixWorld(),_e.makeTranslation(-dr.x,-dr.y,-dr.z),Zh.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),R._frustum.setFromProjectionMatrix(Zh,te.coordinateSystem,te.reversedDepth)}else R.updateMatrices(O);A=R.getFrustum(),x(M,F,R.camera,O,this.type)}R.isPointLightShadow!==!0&&this.type===vr&&m(R,F),R.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(w,y,T)};function m(C,M){const F=e.update(B);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $A(i.x,i.y,{format:Ji,type:xn})),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,F,u,B,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,F,d,B,null)}function _(C,M,F,w){let y=null;const T=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=F.isPointLight===!0?o:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const D=y.uuid,Q=M.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let V=N[Q];V===void 0&&(V=y.clone(),N[Q]=V,M.addEventListener("dispose",E)),y=V}if(y.visible=M.visible,y.wireframe=M.wireframe,w===vr?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:h[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=n.properties.get(y);D.light=F}return y}function x(C,M,F,w,y){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===vr)&&(!C.frustumCulled||A.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const Q=e.update(C),N=C.material;if(Array.isArray(N)){const V=Q.groups;for(let O=0,R=V.length;O<R;O++){const X=V[O],J=N[X.materialIndex];if(J&&J.visible){const ee=_(C,J,w,y);C.onBeforeShadow(n,C,M,F,Q,ee,X),n.renderBufferDirect(F,null,Q,ee,C,X),C.onAfterShadow(n,C,M,F,Q,ee,X)}}}else if(N.visible){const V=_(C,N,w,y);C.onBeforeShadow(n,C,M,F,Q,V,null),n.renderBufferDirect(F,null,Q,V,C,null),C.onAfterShadow(n,C,M,F,Q,V,null)}}const D=C.children;for(let Q=0,N=D.length;Q<N;Q++)x(D[Q],M,F,w,y)}function E(C){C.target.removeEventListener("dispose",E);for(const F in l){const w=l[F],y=C.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const x_={[Jo]:qo,[$o]:tl,[jo]:Al,[Yi]:el,[qo]:Jo,[tl]:$o,[Al]:jo,[el]:Yi};function v_(n,e){function t(){let L=!1;const fe=new vt;let ie=null;const pe=new vt(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!L&&(n.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,q,re,He,ut){ut===!0&&(Ae*=He,q*=He,re*=He),fe.set(Ae,q,re,He),pe.equals(fe)===!1&&(n.clearColor(Ae,q,re,He),pe.copy(fe))},reset:function(){L=!1,ie=null,pe.set(-1,0,0,0)}}}function A(){let L=!1,fe=!1,ie=null,pe=null,Ae=null;return{setReversed:function(q){if(fe!==q){const re=e.get("EXT_clip_control");q?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),fe=q;const He=Ae;Ae=null,this.setClear(He)}},getReversed:function(){return fe},setTest:function(q){q?$(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(q){ie!==q&&!L&&(n.depthMask(q),ie=q)},setFunc:function(q){if(fe&&(q=x_[q]),pe!==q){switch(q){case Jo:n.depthFunc(n.NEVER);break;case qo:n.depthFunc(n.ALWAYS);break;case $o:n.depthFunc(n.LESS);break;case Yi:n.depthFunc(n.LEQUAL);break;case jo:n.depthFunc(n.EQUAL);break;case el:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case Al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=q}},setLocked:function(q){L=q},setClear:function(q){Ae!==q&&(fe&&(q=1-q),n.clearDepth(q),Ae=q)},reset:function(){L=!1,ie=null,pe=null,Ae=null,fe=!1}}}function i(){let L=!1,fe=null,ie=null,pe=null,Ae=null,q=null,re=null,He=null,ut=null;return{setTest:function(nt){L||(nt?$(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!L&&(n.stencilMask(nt),fe=nt)},setFunc:function(nt,KA,on){(ie!==nt||pe!==KA||Ae!==on)&&(n.stencilFunc(nt,KA,on),ie=nt,pe=KA,Ae=on)},setOp:function(nt,KA,on){(q!==nt||re!==KA||He!==on)&&(n.stencilOp(nt,KA,on),q=nt,re=KA,He=on)},setLocked:function(nt){L=nt},setClear:function(nt){ut!==nt&&(n.clearStencil(nt),ut=nt)},reset:function(){L=!1,fe=null,ie=null,pe=null,Ae=null,q=null,re=null,He=null,ut=null}}}const r=new t,s=new A,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],g=null,B=!1,p=null,f=null,m=null,_=null,x=null,E=null,C=null,M=new Fe(0,0,0),F=0,w=!1,y=null,T=null,D=null,Q=null,N=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,R=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=R>=1):X.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=R>=2);let J=null,ee={};const te=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Ce=new vt().fromArray(te),Oe=new vt().fromArray(_e);function Je(L,fe,ie,pe){const Ae=new Uint8Array(4),q=n.createTexture();n.bindTexture(L,q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<ie;re++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(fe+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return q}const Y={};Y[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),$(n.DEPTH_TEST),s.setFunc(Yi),Ge(!1),St(zc),$(n.CULL_FACE),At(Bn);function $(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function ge(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function De(L,fe){return h[L]!==fe?(n.bindFramebuffer(L,fe),h[L]=fe,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function we(L,fe){let ie=d,pe=!1;if(L){ie=u.get(fe),ie===void 0&&(ie=[],u.set(fe,ie));const Ae=L.textures;if(ie.length!==Ae.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let q=0,re=Ae.length;q<re;q++)ie[q]=n.COLOR_ATTACHMENT0+q;ie.length=Ae.length,pe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ie)}function Xe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Pt={[ti]:n.FUNC_ADD,[vp]:n.FUNC_SUBTRACT,[Cp]:n.FUNC_REVERSE_SUBTRACT};Pt[Ep]=n.MIN,Pt[yp]=n.MAX;const qe={[Mp]:n.ZERO,[Up]:n.ONE,[Sp]:n.SRC_COLOR,[Yo]:n.SRC_ALPHA,[Lp]:n.SRC_ALPHA_SATURATE,[Qp]:n.DST_COLOR,[bp]:n.DST_ALPHA,[Fp]:n.ONE_MINUS_SRC_COLOR,[Zo]:n.ONE_MINUS_SRC_ALPHA,[Ip]:n.ONE_MINUS_DST_COLOR,[Tp]:n.ONE_MINUS_DST_ALPHA,[Rp]:n.CONSTANT_COLOR,[Dp]:n.ONE_MINUS_CONSTANT_COLOR,[Hp]:n.CONSTANT_ALPHA,[Pp]:n.ONE_MINUS_CONSTANT_ALPHA};function At(L,fe,ie,pe,Ae,q,re,He,ut,nt){if(L===Bn){B===!0&&(ge(n.BLEND),B=!1);return}if(B===!1&&($(n.BLEND),B=!0),L!==xp){if(L!==p||nt!==w){if((f!==ti||x!==ti)&&(n.blendEquation(n.FUNC_ADD),f=ti,x=ti),nt)switch(L){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",L);break}else switch(L){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xc:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",L);break}m=null,_=null,E=null,C=null,M.set(0,0,0),F=0,p=L,w=nt}return}Ae=Ae||fe,q=q||ie,re=re||pe,(fe!==f||Ae!==x)&&(n.blendEquationSeparate(Pt[fe],Pt[Ae]),f=fe,x=Ae),(ie!==m||pe!==_||q!==E||re!==C)&&(n.blendFuncSeparate(qe[ie],qe[pe],qe[q],qe[re]),m=ie,_=pe,E=q,C=re),(He.equals(M)===!1||ut!==F)&&(n.blendColor(He.r,He.g,He.b,ut),M.copy(He),F=ut),p=L,w=!1}function ot(L,fe){L.side===hA?ge(n.CULL_FACE):$(n.CULL_FACE);let ie=L.side===uA;fe&&(ie=!ie),Ge(ie),L.blending===ki&&L.transparent===!1?At(Bn):At(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const pe=L.stencilWrite;a.setTest(pe),pe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function St(L){L!==wp?($(n.CULL_FACE),L!==T&&(L===zc?n.cullFace(n.BACK):L===_p?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),T=L}function I(L){L!==D&&(O&&n.lineWidth(L),D=L)}function Ft(L,fe,ie){L?($(n.POLYGON_OFFSET_FILL),(Q!==fe||N!==ie)&&(n.polygonOffset(fe,ie),Q=fe,N=ie)):ge(n.POLYGON_OFFSET_FILL)}function et(L){L?$(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function ht(L){L===void 0&&(L=n.TEXTURE0+V-1),J!==L&&(n.activeTexture(L),J=L)}function ye(L,fe,ie){ie===void 0&&(J===null?ie=n.TEXTURE0+V-1:ie=J);let pe=ee[ie];pe===void 0&&(pe={type:void 0,texture:void 0},ee[ie]=pe),(pe.type!==L||pe.texture!==fe)&&(J!==ie&&(n.activeTexture(ie),J=ie),n.bindTexture(L,fe||Y[L]),pe.type=L,pe.texture=fe)}function S(){const L=ee[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function Z(){try{n.texSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function j(){try{n.texSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Ue(){try{n.compressedTexSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Ee(){try{n.texStorage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function Ie(){try{n.texImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function ne(){try{n.texImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function oe(L){Ce.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ce.copy(L))}function ve(L){Oe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Oe.copy(L))}function Me(L,fe){let ie=l.get(fe);ie===void 0&&(ie=new WeakMap,l.set(fe,ie));let pe=ie.get(L);pe===void 0&&(pe=n.getUniformBlockIndex(fe,L.name),ie.set(L,pe))}function ae(L,fe){const pe=l.get(fe).get(L);o.get(fe)!==pe&&(n.uniformBlockBinding(fe,pe,L.__bindingPointIndex),o.set(fe,pe))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},J=null,ee={},h={},u=new WeakMap,d=[],g=null,B=!1,p=null,f=null,m=null,_=null,x=null,E=null,C=null,M=new Fe(0,0,0),F=0,w=!1,y=null,T=null,D=null,Q=null,N=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:$,disable:ge,bindFramebuffer:De,drawBuffers:we,useProgram:Xe,setBlending:At,setMaterial:ot,setFlipSided:Ge,setCullFace:St,setLineWidth:I,setPolygonOffset:Ft,setScissorTest:et,activeTexture:ht,bindTexture:ye,unbindTexture:S,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:Ie,texImage3D:ne,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:se,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:Ue,scissor:oe,viewport:ve,reset:Ve}}function C_(n,e,t,A,i,r,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,c=new WeakMap;let h;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return d?new OffscreenCanvas(S,v):ua("canvas")}function B(S,v,H){let Z=1;const j=ye(S);if((j.width>H||j.height>H)&&(Z=H/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(Z*j.width),Ue=Math.floor(Z*j.height);h===void 0&&(h=g(W,Ue));const se=v?g(W,Ue):h;return se.width=W,se.height=Ue,se.getContext("2d").drawImage(S,0,0,W,Ue),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Ue+")."),se}else return"data"in S&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function p(S){return S.generateMipmaps}function f(S){n.generateMipmap(S)}function m(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(S,v,H,Z,j=!1){if(S!==null){if(n[S]!==void 0)return n[S];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=v;if(v===n.RED&&(H===n.FLOAT&&(W=n.R32F),H===n.HALF_FLOAT&&(W=n.R16F),H===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(W=n.R8UI),H===n.UNSIGNED_SHORT&&(W=n.R16UI),H===n.UNSIGNED_INT&&(W=n.R32UI),H===n.BYTE&&(W=n.R8I),H===n.SHORT&&(W=n.R16I),H===n.INT&&(W=n.R32I)),v===n.RG&&(H===n.FLOAT&&(W=n.RG32F),H===n.HALF_FLOAT&&(W=n.RG16F),H===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(W=n.RG8UI),H===n.UNSIGNED_SHORT&&(W=n.RG16UI),H===n.UNSIGNED_INT&&(W=n.RG32UI),H===n.BYTE&&(W=n.RG8I),H===n.SHORT&&(W=n.RG16I),H===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(W=n.RGB8UI),H===n.UNSIGNED_SHORT&&(W=n.RGB16UI),H===n.UNSIGNED_INT&&(W=n.RGB32UI),H===n.BYTE&&(W=n.RGB8I),H===n.SHORT&&(W=n.RGB16I),H===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),H===n.UNSIGNED_INT&&(W=n.RGBA32UI),H===n.BYTE&&(W=n.RGBA8I),H===n.SHORT&&(W=n.RGBA16I),H===n.INT&&(W=n.RGBA32I)),v===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),v===n.RGBA){const Ue=j?ca:Ze.getTransfer(Z);H===n.FLOAT&&(W=n.RGBA32F),H===n.HALF_FLOAT&&(W=n.RGBA16F),H===n.UNSIGNED_BYTE&&(W=Ue===rt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(S,v){let H;return S?v===null||v===en||v===Nr?H=n.DEPTH24_STENCIL8:v===ZA?H=n.DEPTH32F_STENCIL8:v===Pr&&(H=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===en||v===Nr?H=n.DEPTH_COMPONENT24:v===ZA?H=n.DEPTH_COMPONENT32F:v===Pr&&(H=n.DEPTH_COMPONENT16),H}function E(S,v){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==zt&&S.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function C(S){const v=S.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&c.delete(v)}function M(S){const v=S.target;v.removeEventListener("dispose",M),y(v)}function F(S){const v=A.get(S);if(v.__webglInit===void 0)return;const H=S.source,Z=u.get(H);if(Z){const j=Z[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(S),Object.keys(Z).length===0&&u.delete(H)}A.remove(S)}function w(S){const v=A.get(S);n.deleteTexture(v.__webglTexture);const H=S.source,Z=u.get(H);delete Z[v.__cacheKey],s.memory.textures--}function y(S){const v=A.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),A.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let j=0;j<v.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=S.textures;for(let Z=0,j=H.length;Z<j;Z++){const W=A.get(H[Z]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),s.memory.textures--),A.remove(H[Z])}A.remove(S)}let T=0;function D(){T=0}function Q(){const S=T;return S>=i.maxTextures&&Le("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),T+=1,S}function N(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function V(S,v){const H=A.get(S);if(S.isVideoTexture&&et(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&H.__version!==S.version){const Z=S.image;if(Z===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,S,v);return}}else S.isExternalTexture&&(H.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+v)}function O(S,v){const H=A.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&H.__version!==S.version){Y(H,S,v);return}else S.isExternalTexture&&(H.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+v)}function R(S,v){const H=A.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&H.__version!==S.version){Y(H,S,v);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+v)}function X(S,v){const H=A.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&H.__version!==S.version){$(H,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+v)}const J={[rl]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[sl]:n.MIRRORED_REPEAT},ee={[zt]:n.NEAREST,[Gp]:n.NEAREST_MIPMAP_NEAREST,[rs]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},te={[Kp]:n.NEVER,[Zp]:n.ALWAYS,[zp]:n.LESS,[pc]:n.LEQUAL,[Wp]:n.EQUAL,[gc]:n.GEQUAL,[Xp]:n.GREATER,[Yp]:n.NOTEQUAL};function _e(S,v){if(v.type===ZA&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$t||v.magFilter===Wa||v.magFilter===rs||v.magFilter===si||v.minFilter===$t||v.minFilter===Wa||v.minFilter===rs||v.minFilter===si)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,J[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,J[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,J[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ee[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ee[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==rs&&v.minFilter!==si||v.type===ZA&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||A.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),A.get(v).__currentAnisotropy=v.anisotropy}}}function Ce(S,v){let H=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",C));const Z=v.source;let j=u.get(Z);j===void 0&&(j={},u.set(Z,j));const W=N(v);if(W!==S.__cacheKey){j[W]===void 0&&(j[W]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,H=!0),j[W].usedTimes++;const Ue=j[S.__cacheKey];Ue!==void 0&&(j[S.__cacheKey].usedTimes--,Ue.usedTimes===0&&w(v)),S.__cacheKey=W,S.__webglTexture=j[W].texture}return H}function Oe(S,v,H){return Math.floor(Math.floor(S/H)/v)}function Je(S,v,H,Z){const W=S.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,H,Z,v.data);else{W.sort((ne,oe)=>ne.start-oe.start);let Ue=0;for(let ne=1;ne<W.length;ne++){const oe=W[Ue],ve=W[ne],Me=oe.start+oe.count,ae=Oe(ve.start,v.width,4),Ve=Oe(oe.start,v.width,4);ve.start<=Me+1&&ae===Ve&&Oe(ve.start+ve.count-1,v.width,4)===ae?oe.count=Math.max(oe.count,ve.start+ve.count-oe.start):(++Ue,W[Ue]=ve)}W.length=Ue+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ne=0,oe=W.length;ne<oe;ne++){const ve=W[ne],Me=Math.floor(ve.start/4),ae=Math.ceil(ve.count/4),Ve=Me%v.width,L=Math.floor(Me/v.width),fe=ae,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ve,L,fe,ie,H,Z,v.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function Y(S,v,H){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);const j=Ce(S,v),W=v.source;t.bindTexture(Z,S.__webglTexture,n.TEXTURE0+H);const Ue=A.get(W);if(W.version!==Ue.__version||j===!0){t.activeTexture(n.TEXTURE0+H);const se=Ze.getPrimaries(Ze.workingColorSpace),Ee=v.colorSpace===Rn?null:Ze.getPrimaries(v.colorSpace),Ie=v.colorSpace===Rn||se===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ne=B(v.image,!1,i.maxTextureSize);ne=ht(v,ne);const oe=r.convert(v.format,v.colorSpace),ve=r.convert(v.type);let Me=_(v.internalFormat,oe,ve,v.colorSpace,v.isVideoTexture);_e(Z,v);let ae;const Ve=v.mipmaps,L=v.isVideoTexture!==!0,fe=Ue.__version===void 0||j===!0,ie=W.dataReady,pe=E(v,ne);if(v.isDepthTexture)Me=x(v.format===ai,v.type),fe&&(L?t.texStorage2D(n.TEXTURE_2D,1,Me,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Me,ne.width,ne.height,0,oe,ve,null));else if(v.isDataTexture)if(Ve.length>0){L&&fe&&t.texStorage2D(n.TEXTURE_2D,pe,Me,Ve[0].width,Ve[0].height);for(let Ae=0,q=Ve.length;Ae<q;Ae++)ae=Ve[Ae],L?ie&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,ae.width,ae.height,oe,ve,ae.data):t.texImage2D(n.TEXTURE_2D,Ae,Me,ae.width,ae.height,0,oe,ve,ae.data);v.generateMipmaps=!1}else L?(fe&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ne.width,ne.height),ie&&Je(v,ne,oe,ve)):t.texImage2D(n.TEXTURE_2D,0,Me,ne.width,ne.height,0,oe,ve,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,Ve[0].width,Ve[0].height,ne.depth);for(let Ae=0,q=Ve.length;Ae<q;Ae++)if(ae=Ve[Ae],v.format!==NA)if(oe!==null)if(L){if(ie)if(v.layerUpdates.size>0){const re=Mh(ae.width,ae.height,v.format,v.type);for(const He of v.layerUpdates){const ut=ae.data.subarray(He*re/ae.data.BYTES_PER_ELEMENT,(He+1)*re/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,He,ae.width,ae.height,1,oe,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,ae.width,ae.height,ne.depth,oe,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ae,Me,ae.width,ae.height,ne.depth,0,ae.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ae,0,0,0,ae.width,ae.height,ne.depth,oe,ve,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ae,Me,ae.width,ae.height,ne.depth,0,oe,ve,ae.data)}else{L&&fe&&t.texStorage2D(n.TEXTURE_2D,pe,Me,Ve[0].width,Ve[0].height);for(let Ae=0,q=Ve.length;Ae<q;Ae++)ae=Ve[Ae],v.format!==NA?oe!==null?L?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ae,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Ae,Me,ae.width,ae.height,0,ae.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,ae.width,ae.height,oe,ve,ae.data):t.texImage2D(n.TEXTURE_2D,Ae,Me,ae.width,ae.height,0,oe,ve,ae.data)}else if(v.isDataArrayTexture)if(L){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,ne.width,ne.height,ne.depth),ie)if(v.layerUpdates.size>0){const Ae=Mh(ne.width,ne.height,v.format,v.type);for(const q of v.layerUpdates){const re=ne.data.subarray(q*Ae/ne.data.BYTES_PER_ELEMENT,(q+1)*Ae/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,oe,ve,re)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,ve,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,oe,ve,ne.data);else if(v.isData3DTexture)L?(fe&&t.texStorage3D(n.TEXTURE_3D,pe,Me,ne.width,ne.height,ne.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,ve,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,oe,ve,ne.data);else if(v.isFramebufferTexture){if(fe)if(L)t.texStorage2D(n.TEXTURE_2D,pe,Me,ne.width,ne.height);else{let Ae=ne.width,q=ne.height;for(let re=0;re<pe;re++)t.texImage2D(n.TEXTURE_2D,re,Me,Ae,q,0,oe,ve,null),Ae>>=1,q>>=1}}else if(Ve.length>0){if(L&&fe){const Ae=ye(Ve[0]);t.texStorage2D(n.TEXTURE_2D,pe,Me,Ae.width,Ae.height)}for(let Ae=0,q=Ve.length;Ae<q;Ae++)ae=Ve[Ae],L?ie&&t.texSubImage2D(n.TEXTURE_2D,Ae,0,0,oe,ve,ae):t.texImage2D(n.TEXTURE_2D,Ae,Me,oe,ve,ae);v.generateMipmaps=!1}else if(L){if(fe){const Ae=ye(ne);t.texStorage2D(n.TEXTURE_2D,pe,Me,Ae.width,Ae.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,ve,ne)}else t.texImage2D(n.TEXTURE_2D,0,Me,oe,ve,ne);p(v)&&f(Z),Ue.__version=W.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function $(S,v,H){if(v.image.length!==6)return;const Z=Ce(S,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+H);const W=A.get(j);if(j.version!==W.__version||Z===!0){t.activeTexture(n.TEXTURE0+H);const Ue=Ze.getPrimaries(Ze.workingColorSpace),se=v.colorSpace===Rn?null:Ze.getPrimaries(v.colorSpace),Ee=v.colorSpace===Rn||Ue===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let q=0;q<6;q++)!Ie&&!ne?oe[q]=B(v.image[q],!0,i.maxCubemapSize):oe[q]=ne?v.image[q].image:v.image[q],oe[q]=ht(v,oe[q]);const ve=oe[0],Me=r.convert(v.format,v.colorSpace),ae=r.convert(v.type),Ve=_(v.internalFormat,Me,ae,v.colorSpace),L=v.isVideoTexture!==!0,fe=W.__version===void 0||Z===!0,ie=j.dataReady;let pe=E(v,ve);_e(n.TEXTURE_CUBE_MAP,v);let Ae;if(Ie){L&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ve,ve.width,ve.height);for(let q=0;q<6;q++){Ae=oe[q].mipmaps;for(let re=0;re<Ae.length;re++){const He=Ae[re];v.format!==NA?Me!==null?L?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,He.width,He.height,Me,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,Ve,He.width,He.height,0,He.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,He.width,He.height,Me,ae,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,Ve,He.width,He.height,0,Me,ae,He.data)}}}else{if(Ae=v.mipmaps,L&&fe){Ae.length>0&&pe++;const q=ye(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ve,q.width,q.height)}for(let q=0;q<6;q++)if(ne){L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,oe[q].width,oe[q].height,Me,ae,oe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ve,oe[q].width,oe[q].height,0,Me,ae,oe[q].data);for(let re=0;re<Ae.length;re++){const ut=Ae[re].image[q].image;L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,ut.width,ut.height,Me,ae,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,Ve,ut.width,ut.height,0,Me,ae,ut.data)}}else{L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me,ae,oe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ve,Me,ae,oe[q]);for(let re=0;re<Ae.length;re++){const He=Ae[re];L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,Me,ae,He.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,Ve,Me,ae,He.image[q])}}}p(v)&&f(n.TEXTURE_CUBE_MAP),W.__version=j.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ge(S,v,H,Z,j,W){const Ue=r.convert(H.format,H.colorSpace),se=r.convert(H.type),Ee=_(H.internalFormat,Ue,se,H.colorSpace),Ie=A.get(v),ne=A.get(H);if(ne.__renderTarget=v,!Ie.__hasExternalTextures){const oe=Math.max(1,v.width>>W),ve=Math.max(1,v.height>>W);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,W,Ee,oe,ve,v.depth,0,Ue,se,null):t.texImage2D(j,W,Ee,oe,ve,0,Ue,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Ft(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,j,ne.__webglTexture,0,I(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,j,ne.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(S,v,H){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const Z=v.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,W=x(v.stencilBuffer,j),Ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ft(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),W,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,S)}else{const Z=v.textures;for(let j=0;j<Z.length;j++){const W=Z[j],Ue=r.convert(W.format,W.colorSpace),se=r.convert(W.type),Ee=_(W.internalFormat,Ue,se,W.colorSpace);Ft(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),Ee,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),Ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(S,v,H){const Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=A.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v.depthTexture);const Ie=r.convert(v.depthTexture.format),ne=r.convert(v.depthTexture.type);let oe;v.depthTexture.format===vn?oe=n.DEPTH_COMPONENT24:v.depthTexture.format===ai&&(oe=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,oe,v.width,v.height,0,Ie,ne,null)}}else V(v.depthTexture,0);const W=j.__webglTexture,Ue=I(v),se=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,Ee=v.depthTexture.format===ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===vn)Ft(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,se,W,0,Ue):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,se,W,0);else if(v.depthTexture.format===ai)Ft(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,se,W,0,Ue):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,se,W,0);else throw new Error("Unknown depthTexture format")}function Xe(S){const v=A.get(S),H=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const Z=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=Z}if(S.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let Z=0;Z<6;Z++)we(v.__webglFramebuffer[Z],S,Z);else{const Z=S.texture.mipmaps;Z&&Z.length>0?we(v.__webglFramebuffer[0],S,0):we(v.__webglFramebuffer,S,0)}else if(H){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),De(v.__webglDepthbuffer[Z],S,!1);else{const j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,W)}}else{const Z=S.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),De(v.__webglDepthbuffer,S,!1);else{const j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(S,v,H){const Z=A.get(S);v!==void 0&&ge(Z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Xe(S)}function qe(S){const v=S.texture,H=A.get(S),Z=A.get(v);S.addEventListener("dispose",M);const j=S.textures,W=S.isWebGLCubeRenderTarget===!0,Ue=j.length>1;if(Ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,s.memory.textures++),W){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)H.__webglFramebuffer[se][Ee]=n.createFramebuffer()}else H.__webglFramebuffer[se]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)H.__webglFramebuffer[se]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let se=0,Ee=j.length;se<Ee;se++){const Ie=A.get(j[se]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),s.memory.textures++)}if(S.samples>0&&Ft(S)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const Ee=j[se];H.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[se]);const Ie=r.convert(Ee.format,Ee.colorSpace),ne=r.convert(Ee.type),oe=_(Ee.internalFormat,Ie,ne,Ee.colorSpace,S.isXRRenderTarget===!0),ve=I(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,oe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,H.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),De(H.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)ge(H.__webglFramebuffer[se][Ee],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee);else ge(H.__webglFramebuffer[se],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let se=0,Ee=j.length;se<Ee;se++){const Ie=j[se],ne=A.get(Ie);let oe=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,ne.__webglTexture),_e(oe,Ie),ge(H.__webglFramebuffer,S,Ie,n.COLOR_ATTACHMENT0+se,oe,0),p(Ie)&&f(oe)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),_e(se,v),v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)ge(H.__webglFramebuffer[Ee],S,v,n.COLOR_ATTACHMENT0,se,Ee);else ge(H.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,se,0);p(v)&&f(se),t.unbindTexture()}S.depthBuffer&&Xe(S)}function At(S){const v=S.textures;for(let H=0,Z=v.length;H<Z;H++){const j=v[H];if(p(j)){const W=m(S),Ue=A.get(j).__webglTexture;t.bindTexture(W,Ue),f(W),t.unbindTexture()}}}const ot=[],Ge=[];function St(S){if(S.samples>0){if(Ft(S)===!1){const v=S.textures,H=S.width,Z=S.height;let j=n.COLOR_BUFFER_BIT;const W=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=A.get(S),se=v.length>1;if(se)for(let Ie=0;Ie<v.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ee=S.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ie=0;Ie<v.length;Ie++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ie]);const ne=A.get(v[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,H,Z,0,0,H,Z,j,n.NEAREST),o===!0&&(ot.length=0,Ge.length=0,ot.push(n.COLOR_ATTACHMENT0+Ie),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ot.push(W),Ge.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Ie=0;Ie<v.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ie]);const ne=A.get(v[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&o){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(S){return Math.min(i.maxSamples,S.samples)}function Ft(S){const v=A.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function et(S){const v=s.render.frame;c.get(S)!==v&&(c.set(S,v),S.update())}function ht(S,v){const H=S.colorSpace,Z=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||H!==qi&&H!==Rn&&(Ze.getTransfer(H)===rt?(Z!==NA||j!==xA)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",H)),v}function ye(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=R,this.setTextureCube=X,this.rebindTextures=Pt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E_(n,e){function t(A,i=Rn){let r;const s=Ze.getTransfer(i);if(A===xA)return n.UNSIGNED_BYTE;if(A===cc)return n.UNSIGNED_SHORT_4_4_4_4;if(A===hc)return n.UNSIGNED_SHORT_5_5_5_1;if(A===xf)return n.UNSIGNED_INT_5_9_9_9_REV;if(A===vf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(A===wf)return n.BYTE;if(A===_f)return n.SHORT;if(A===Pr)return n.UNSIGNED_SHORT;if(A===lc)return n.INT;if(A===en)return n.UNSIGNED_INT;if(A===ZA)return n.FLOAT;if(A===xn)return n.HALF_FLOAT;if(A===Cf)return n.ALPHA;if(A===Ef)return n.RGB;if(A===NA)return n.RGBA;if(A===vn)return n.DEPTH_COMPONENT;if(A===ai)return n.DEPTH_STENCIL;if(A===yf)return n.RED;if(A===uc)return n.RED_INTEGER;if(A===Ji)return n.RG;if(A===fc)return n.RG_INTEGER;if(A===dc)return n.RGBA_INTEGER;if(A===ea||A===ta||A===Aa||A===na)if(s===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(A===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(A===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===al||A===ol||A===ll||A===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(A===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===hl||A===ul||A===fl||A===dl||A===pl||A===gl||A===ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(A===hl||A===ul)return s===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(A===fl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(A===dl)return r.COMPRESSED_R11_EAC;if(A===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(A===gl)return r.COMPRESSED_RG11_EAC;if(A===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(A===Bl||A===wl||A===_l||A===xl||A===vl||A===Cl||A===El||A===yl||A===Ml||A===Ul||A===Sl||A===Fl||A===bl||A===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(A===Bl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===wl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===_l)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===xl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===vl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===Cl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===El)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===yl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===Ml)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===Ul)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===Sl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===Fl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===bl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===Tl)return s===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===Ql||A===Il||A===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(A===Ql)return s===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===Rl||A===Dl||A===Hl||A===Pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(A===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(A===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===Nr?n.UNSIGNED_INT_24_8:n[A]!==void 0?n[A]:null}return{convert:t}}const y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const A=new Df(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=A}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,A=new tn({vertexShader:y_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new ji(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S_ extends di{constructor(e,t){super();const A=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,g=null;const B=typeof XRWebGLBinding<"u",p=new U_,f={},m=t.getContextAttributes();let _=null,x=null;const E=[],C=[],M=new Re;let F=null;const w=new SA;w.viewport=new vt;const y=new SA;y.viewport=new vt;const T=[w,y],D=new Dg;let Q=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=E[Y];return $===void 0&&($=new po,E[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=E[Y];return $===void 0&&($=new po,E[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=E[Y];return $===void 0&&($=new po,E[Y]=$),$.getHandSpace()};function V(Y){const $=C.indexOf(Y.inputSource);if($===-1)return;const ge=E[$];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,l||s),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",R);for(let Y=0;Y<E.length;Y++){const $=C[Y];$!==null&&(C[Y]=null,E[Y].disconnect($))}Q=null,N=null,p.reset();for(const Y in f)delete f[Y];e.setRenderTarget(_),d=null,u=null,h=null,i=null,x=null,Je.stop(),A.isPresenting=!1,e.setPixelRatio(F),e.setSize(M.width,M.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,A.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,A.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&B&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",O),i.addEventListener("inputsourceschange",R),m.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(M),B&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,De=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?ai:vn,De=m.stencil?Nr:en);const Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Xe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new $A(u.textureWidth,u.textureHeight,{format:NA,type:xA,depthTexture:new Gr(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new $A(d.framebufferWidth,d.framebufferHeight,{format:NA,type:xA,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function R(Y){for(let $=0;$<Y.removed.length;$++){const ge=Y.removed[$],De=C.indexOf(ge);De>=0&&(C[De]=null,E[De].disconnect(ge))}for(let $=0;$<Y.added.length;$++){const ge=Y.added[$];let De=C.indexOf(ge);if(De===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=C.length){C.push(ge),De=Xe;break}else if(C[Xe]===null){C[Xe]=ge,De=Xe;break}if(De===-1)break}const we=E[De];we&&we.connect(ge)}}const X=new b,J=new b;function ee(Y,$,ge){X.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);const De=X.distanceTo(J),we=$.projectionMatrix.elements,Xe=ge.projectionMatrix.elements,Pt=we[14]/(we[10]-1),qe=we[14]/(we[10]+1),At=(we[9]+1)/we[5],ot=(we[9]-1)/we[5],Ge=(we[8]-1)/we[0],St=(Xe[8]+1)/Xe[0],I=Pt*Ge,Ft=Pt*St,et=De/(-Ge+St),ht=et*-Ge;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ht),Y.translateZ(et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ye=Pt+et,S=qe+et,v=I-ht,H=Ft+(De-ht),Z=At*qe/S*ye,j=ot*qe/S*ye;Y.projectionMatrix.makePerspective(v,H,Z,j,ye,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function te(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let $=Y.near,ge=Y.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),D.near=y.near=w.near=$,D.far=y.far=w.far=ge,(Q!==D.near||N!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),Q=D.near,N=D.far),D.layers.mask=Y.layers.mask|6,w.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;const De=Y.parent,we=D.cameras;te(D,De);for(let Xe=0;Xe<we.length;Xe++)te(we[Xe],De);we.length===2?ee(D,w,y):D.projectionMatrix.copy(w.projectionMatrix),_e(Y,D,De)};function _e(Y,$,ge){ge===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Nl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(Y){o=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(Y){return f[Y]};let Ce=null;function Oe(Y,$){if(c=$.getViewerPose(l||s),g=$,c!==null){const ge=c.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let De=!1;ge.length!==D.cameras.length&&(D.cameras.length=0,De=!0);for(let qe=0;qe<ge.length;qe++){const At=ge[qe];let ot=null;if(d!==null)ot=d.getViewport(At);else{const St=h.getViewSubImage(u,At);ot=St.viewport,qe===0&&(e.setRenderTargetTextures(x,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(x))}let Ge=T[qe];Ge===void 0&&(Ge=new SA,Ge.layers.enable(qe),Ge.viewport=new vt,T[qe]=Ge),Ge.matrix.fromArray(At.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(At.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ot.x,ot.y,ot.width,ot.height),qe===0&&(D.matrix.copy(Ge.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),De===!0&&D.cameras.push(Ge)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&B){h=A.getBinding();const qe=h.getDepthInformation(ge[0]);qe&&qe.isValid&&qe.texture&&p.init(qe,i.renderState)}if(we&&we.includes("camera-access")&&B){e.state.unbindTexture(),h=A.getBinding();for(let qe=0;qe<ge.length;qe++){const At=ge[qe].camera;if(At){let ot=f[At];ot||(ot=new Df,f[At]=ot);const Ge=h.getCameraImage(At);ot.sourceTexture=Ge}}}}for(let ge=0;ge<E.length;ge++){const De=C[ge],we=E[ge];De!==null&&we!==void 0&&we.update(De,$,l||s)}Ce&&Ce(Y,$),$.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:$}),g=null}const Je=new Gf;Je.setAnimationLoop(Oe),this.setAnimationLoop=function(Y){Ce=Y},this.dispose=function(){}}}const qn=new GA,F_=new pt;function b_(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function A(p,f){f.color.getRGB(p.fogColor.value,Qf(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,m,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,x)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),B(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,m,_):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===uA&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===uA&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const m=e.get(f),_=m.envMap,x=m.envMapRotation;_&&(p.envMap.value=_,qn.copy(x),qn.x*=-1,qn.y*=-1,qn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),p.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(qn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,m,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*m,p.scale.value=_*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,m){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===uA&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function B(p,f){const m=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:i}}function T_(n,e,t,A){let i={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(m,_){const x=_.program;A.uniformBlockBinding(m,x)}function l(m,_){let x=i[m.id];x===void 0&&(g(m),x=c(m),i[m.id]=x,m.addEventListener("dispose",p));const E=_.program;A.updateUBOMapping(m,E);const C=e.render.frame;r[m.id]!==C&&(u(m),r[m.id]=C)}function c(m){const _=h();m.__bindingPointIndex=_;const x=n.createBuffer(),E=m.__size,C=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,E,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function h(){for(let m=0;m<a;m++)if(s.indexOf(m)===-1)return s.push(m),m;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=i[m.id],x=m.uniforms,E=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,M=x.length;C<M;C++){const F=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,y=F.length;w<y;w++){const T=F[w];if(d(T,C,w,E)===!0){const D=T.__offset,Q=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let V=0;V<Q.length;V++){const O=Q[V],R=B(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,D+N,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,N),N+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(m,_,x,E){const C=m.value,M=_+"_"+x;if(E[M]===void 0)return typeof C=="number"||typeof C=="boolean"?E[M]=C:E[M]=C.clone(),!0;{const F=E[M];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return E[M]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(m){const _=m.uniforms;let x=0;const E=16;for(let M=0,F=_.length;M<F;M++){const w=Array.isArray(_[M])?_[M]:[_[M]];for(let y=0,T=w.length;y<T;y++){const D=w[y],Q=Array.isArray(D.value)?D.value:[D.value];for(let N=0,V=Q.length;N<V;N++){const O=Q[N],R=B(O),X=x%E,J=X%R.boundary,ee=X+J;x+=J,ee!==0&&E-ee<R.storage&&(x+=E-ee),D.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=R.storage}}}const C=x%E;return C>0&&(x+=E-C),m.__size=x,m.__cache={},this}function B(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",m),_}function p(m){const _=m.target;_.removeEventListener("dispose",p);const x=s.indexOf(_.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function f(){for(const m in i)n.deleteBuffer(i[m]);s=[],i={},r={}}return{bind:o,update:l,dispose:f}}const Q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zA=null;function I_(){return zA===null&&(zA=new Eg(Q_,16,16,Ji,xn),zA.name="DFG_LUT",zA.minFilter=$t,zA.magFilter=$t,zA.wrapS=mn,zA.wrapT=mn,zA.generateMipmaps=!1,zA.needsUpdate=!0),zA}class L_{constructor(e={}){const{canvas:t=Jp(),context:A=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=xA}=e;this.isWebGLRenderer=!0;let g;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=A.getContextAttributes().alpha}else g=s;const B=d,p=new Set([dc,fc,uc]),f=new Set([xA,en,Pr,Nr,cc,hc]),m=new Uint32Array(4),_=new Int32Array(4);let x=null,E=null;const C=[],M=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qA,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let y=!1;this._outputColorSpace=AA;let T=0,D=0,Q=null,N=-1,V=null;const O=new vt,R=new vt;let X=null;const J=new Fe(0);let ee=0,te=t.width,_e=t.height,Ce=1,Oe=null,Je=null;const Y=new vt(0,0,te,_e),$=new vt(0,0,te,_e);let ge=!1;const De=new wc;let we=!1,Xe=!1;const Pt=new pt,qe=new b,At=new vt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function St(){return Q===null?Ce:1}let I=A;function Ft(U,P){return t.getContext(U,P)}try{const U={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",nt,!1),I===null){const P="webgl2";if(I=Ft(P,U),I===null)throw Ft(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw $e("WebGLRenderer: "+U.message),U}let et,ht,ye,S,v,H,Z,j,W,Ue,se,Ee,Ie,ne,oe,ve,Me,ae,Ve,L,fe,ie,pe,Ae;function q(){et=new IB(I),et.init(),ie=new E_(I,et),ht=new EB(I,et,e,ie),ye=new v_(I,et),ht.reversedDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),S=new DB(I),v=new a_,H=new C_(I,et,ye,v,ht,ie,S),Z=new MB(w),j=new QB(w),W=new Og(I),pe=new vB(I,W),Ue=new LB(I,W,S,pe),se=new PB(I,Ue,W,S),Ve=new HB(I,ht,H),ve=new yB(v),Ee=new s_(w,Z,j,et,ht,pe,ve),Ie=new b_(w,v),ne=new l_,oe=new p_(et),ae=new xB(w,Z,j,ye,se,g,o),Me=new __(w,se,ht),Ae=new T_(I,S,ht,ye),L=new CB(I,et,S),fe=new RB(I,et,S),S.programs=Ee.programs,w.capabilities=ht,w.extensions=et,w.properties=v,w.renderLists=ne,w.shadowMap=Me,w.state=ye,w.info=S}q(),B!==xA&&(F=new OB(B,t.width,t.height,i,r));const re=new S_(w,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const U=et.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=et.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(U){U!==void 0&&(Ce=U,this.setSize(te,_e,!1))},this.getSize=function(U){return U.set(te,_e)},this.setSize=function(U,P,z=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}te=U,_e=P,t.width=Math.floor(U*Ce),t.height=Math.floor(P*Ce),z===!0&&(t.style.width=U+"px",t.style.height=P+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,U,P)},this.getDrawingBufferSize=function(U){return U.set(te*Ce,_e*Ce).floor()},this.setDrawingBufferSize=function(U,P,z){te=U,_e=P,Ce=z,t.width=Math.floor(U*z),t.height=Math.floor(P*z),this.setViewport(0,0,U,P)},this.setEffects=function(U){if(B===xA){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let P=0;P<U.length;P++)if(U[P].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(O)},this.getViewport=function(U){return U.copy(Y)},this.setViewport=function(U,P,z,K){U.isVector4?Y.set(U.x,U.y,U.z,U.w):Y.set(U,P,z,K),ye.viewport(O.copy(Y).multiplyScalar(Ce).round())},this.getScissor=function(U){return U.copy($)},this.setScissor=function(U,P,z,K){U.isVector4?$.set(U.x,U.y,U.z,U.w):$.set(U,P,z,K),ye.scissor(R.copy($).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(U){ye.setScissorTest(ge=U)},this.setOpaqueSort=function(U){Oe=U},this.setTransparentSort=function(U){Je=U},this.getClearColor=function(U){return U.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(U=!0,P=!0,z=!0){let K=0;if(U){let k=!1;if(Q!==null){const le=Q.texture.format;k=p.has(le)}if(k){const le=Q.texture.type,me=f.has(le),ue=ae.getClearColor(),xe=ae.getClearAlpha(),Se=ue.r,Qe=ue.g,be=ue.b;me?(m[0]=Se,m[1]=Qe,m[2]=be,m[3]=xe,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Se,_[1]=Qe,_[2]=be,_[3]=xe,I.clearBufferiv(I.COLOR,0,_))}else K|=I.COLOR_BUFFER_BIT}P&&(K|=I.DEPTH_BUFFER_BIT),z&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ae.dispose(),ne.dispose(),oe.dispose(),v.dispose(),Z.dispose(),j.dispose(),se.dispose(),pe.dispose(),Ae.dispose(),Ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",Pc),re.removeEventListener("sessionend",Nc),Kn.stop()};function He(U){U.preventDefault(),jc("WebGLRenderer: Context Lost."),y=!0}function ut(){jc("WebGLRenderer: Context Restored."),y=!1;const U=S.autoReset,P=Me.enabled,z=Me.autoUpdate,K=Me.needsUpdate,k=Me.type;q(),S.autoReset=U,Me.enabled=P,Me.autoUpdate=z,Me.needsUpdate=K,Me.type=k}function nt(U){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function KA(U){const P=U.target;P.removeEventListener("dispose",KA),on(P)}function on(U){hp(U),v.remove(U)}function hp(U){const P=v.get(U).programs;P!==void 0&&(P.forEach(function(z){Ee.releaseProgram(z)}),U.isShaderMaterial&&Ee.releaseShaderCache(U))}this.renderBufferDirect=function(U,P,z,K,k,le){P===null&&(P=ot);const me=k.isMesh&&k.matrixWorld.determinant()<0,ue=fp(U,P,z,K,k);ye.setMaterial(K,me);let xe=z.index,Se=1;if(K.wireframe===!0){if(xe=Ue.getWireframeAttribute(z),xe===void 0)return;Se=2}const Qe=z.drawRange,be=z.attributes.position;let Ke=Qe.start*Se,st=(Qe.start+Qe.count)*Se;le!==null&&(Ke=Math.max(Ke,le.start*Se),st=Math.min(st,(le.start+le.count)*Se)),xe!==null?(Ke=Math.max(Ke,0),st=Math.min(st,xe.count)):be!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,be.count));const _t=st-Ke;if(_t<0||_t===1/0)return;pe.setup(k,K,ue,z,xe);let xt,lt=L;if(xe!==null&&(xt=W.get(xe),lt=fe,lt.setIndex(xt)),k.isMesh)K.wireframe===!0?(ye.setLineWidth(K.wireframeLinewidth*St()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(k.isLine){let Te=K.linewidth;Te===void 0&&(Te=1),ye.setLineWidth(Te*St()),k.isLineSegments?lt.setMode(I.LINES):k.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else k.isPoints?lt.setMode(I.POINTS):k.isSprite&&lt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Or("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Te=k._multiDrawStarts,it=k._multiDrawCounts,je=k._multiDrawCount,dA=xe?W.get(xe).bytesPerElement:1,gi=v.get(K).currentProgram.getUniforms();for(let pA=0;pA<je;pA++)gi.setValue(I,"_gl_DrawID",pA),lt.render(Te[pA]/dA,it[pA])}else if(k.isInstancedMesh)lt.renderInstances(Ke,_t,k.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,it=Math.min(z.instanceCount,Te);lt.renderInstances(Ke,_t,it)}else lt.render(Ke,_t)};function Hc(U,P,z){U.transparent===!0&&U.side===hA&&U.forceSinglePass===!1?(U.side=uA,U.needsUpdate=!0,is(U,P,z),U.side=Gn,U.needsUpdate=!0,is(U,P,z),U.side=hA):is(U,P,z)}this.compile=function(U,P,z=null){z===null&&(z=U),E=oe.get(z),E.init(P),M.push(E),z.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),U!==z&&U.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();const K=new Set;return U.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const le=k.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const ue=le[me];Hc(ue,z,k),K.add(ue)}else Hc(le,z,k),K.add(le)}),E=M.pop(),K},this.compileAsync=function(U,P,z=null){const K=this.compile(U,P,z);return new Promise(k=>{function le(){if(K.forEach(function(me){v.get(me).currentProgram.isReady()&&K.delete(me)}),K.size===0){k(U);return}setTimeout(le,10)}et.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ka=null;function up(U){ka&&ka(U)}function Pc(){Kn.stop()}function Nc(){Kn.start()}const Kn=new Gf;Kn.setAnimationLoop(up),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(U){ka=U,re.setAnimationLoop(U),U===null?Kn.stop():Kn.start()},re.addEventListener("sessionstart",Pc),re.addEventListener("sessionend",Nc),this.render=function(U,P){if(P!==void 0&&P.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const z=re.enabled===!0&&re.isPresenting===!0,K=F!==null&&(Q===null||z)&&F.begin(w,Q);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(P),P=re.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,P,Q),E=oe.get(U,M.length),E.init(P),M.push(E),Pt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),De.setFromProjectionMatrix(Pt,JA,P.reversedDepth),Xe=this.localClippingEnabled,we=ve.init(this.clippingPlanes,Xe),x=ne.get(U,C.length),x.init(),C.push(x),re.enabled===!0&&re.isPresenting===!0){const me=w.xr.getDepthSensingMesh();me!==null&&Ka(me,P,-1/0,w.sortObjects)}Ka(U,P,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(Oe,Je),Ge=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ge&&ae.addToRenderList(x,U),this.info.render.frame++,we===!0&&ve.beginShadows();const k=E.state.shadowsArray;if(Me.render(k,U,P),we===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&F.hasRenderPass())===!1){const me=x.opaque,ue=x.transmissive;if(E.setupLights(),P.isArrayCamera){const xe=P.cameras;if(ue.length>0)for(let Se=0,Qe=xe.length;Se<Qe;Se++){const be=xe[Se];Gc(me,ue,U,be)}Ge&&ae.render(U);for(let Se=0,Qe=xe.length;Se<Qe;Se++){const be=xe[Se];Oc(x,U,be,be.viewport)}}else ue.length>0&&Gc(me,ue,U,P),Ge&&ae.render(U),Oc(x,U,P)}Q!==null&&D===0&&(H.updateMultisampleRenderTarget(Q),H.updateRenderTargetMipmap(Q)),K&&F.end(w),U.isScene===!0&&U.onAfterRender(w,U,P),pe.resetDefaultState(),N=-1,V=null,M.pop(),M.length>0?(E=M[M.length-1],we===!0&&ve.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function Ka(U,P,z,K){if(U.visible===!1)return;if(U.layers.test(P.layers)){if(U.isGroup)z=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(P);else if(U.isLight)E.pushLight(U),U.castShadow&&E.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||De.intersectsSprite(U)){K&&At.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Pt);const me=se.update(U),ue=U.material;ue.visible&&x.push(U,me,ue,z,At.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||De.intersectsObject(U))){const me=se.update(U),ue=U.material;if(K&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),At.copy(U.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),At.copy(me.boundingSphere.center)),At.applyMatrix4(U.matrixWorld).applyMatrix4(Pt)),Array.isArray(ue)){const xe=me.groups;for(let Se=0,Qe=xe.length;Se<Qe;Se++){const be=xe[Se],Ke=ue[be.materialIndex];Ke&&Ke.visible&&x.push(U,me,Ke,z,At.z,be)}}else ue.visible&&x.push(U,me,ue,z,At.z,null)}}const le=U.children;for(let me=0,ue=le.length;me<ue;me++)Ka(le[me],P,z,K)}function Oc(U,P,z,K){const{opaque:k,transmissive:le,transparent:me}=U;E.setupLightsView(z),we===!0&&ve.setGlobalState(w.clippingPlanes,z),K&&ye.viewport(O.copy(K)),k.length>0&&ns(k,P,z),le.length>0&&ns(le,P,z),me.length>0&&ns(me,P,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Gc(U,P,z,K){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){const Ke=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new $A(1,1,{generateMipmaps:!0,type:Ke?xn:xA,minFilter:si,samples:ht.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const le=E.state.transmissionRenderTarget[K.id],me=K.viewport||O;le.setSize(me.z*w.transmissionResolutionScale,me.w*w.transmissionResolutionScale);const ue=w.getRenderTarget(),xe=w.getActiveCubeFace(),Se=w.getActiveMipmapLevel();w.setRenderTarget(le),w.getClearColor(J),ee=w.getClearAlpha(),ee<1&&w.setClearColor(16777215,.5),w.clear(),Ge&&ae.render(z);const Qe=w.toneMapping;w.toneMapping=qA;const be=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),we===!0&&ve.setGlobalState(w.clippingPlanes,K),ns(U,z,K),H.updateMultisampleRenderTarget(le),H.updateRenderTargetMipmap(le),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let st=0,_t=P.length;st<_t;st++){const xt=P[st],{object:lt,geometry:Te,material:it,group:je}=xt;if(it.side===hA&&lt.layers.test(K.layers)){const dA=it.side;it.side=uA,it.needsUpdate=!0,Vc(lt,z,K,Te,it,je),it.side=dA,it.needsUpdate=!0,Ke=!0}}Ke===!0&&(H.updateMultisampleRenderTarget(le),H.updateRenderTargetMipmap(le))}w.setRenderTarget(ue,xe,Se),w.setClearColor(J,ee),be!==void 0&&(K.viewport=be),w.toneMapping=Qe}function ns(U,P,z){const K=P.isScene===!0?P.overrideMaterial:null;for(let k=0,le=U.length;k<le;k++){const me=U[k],{object:ue,geometry:xe,group:Se}=me;let Qe=me.material;Qe.allowOverride===!0&&K!==null&&(Qe=K),ue.layers.test(z.layers)&&Vc(ue,P,z,xe,Qe,Se)}}function Vc(U,P,z,K,k,le){U.onBeforeRender(w,P,z,K,k,le),U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),k.onBeforeRender(w,P,z,K,U,le),k.transparent===!0&&k.side===hA&&k.forceSinglePass===!1?(k.side=uA,k.needsUpdate=!0,w.renderBufferDirect(z,P,K,k,U,le),k.side=Gn,k.needsUpdate=!0,w.renderBufferDirect(z,P,K,k,U,le),k.side=hA):w.renderBufferDirect(z,P,K,k,U,le),U.onAfterRender(w,P,z,K,k,le)}function is(U,P,z){P.isScene!==!0&&(P=ot);const K=v.get(U),k=E.state.lights,le=E.state.shadowsArray,me=k.state.version,ue=Ee.getParameters(U,k.state,le,P,z),xe=Ee.getProgramCacheKey(ue);let Se=K.programs;K.environment=U.isMeshStandardMaterial?P.environment:null,K.fog=P.fog,K.envMap=(U.isMeshStandardMaterial?j:Z).get(U.envMap||K.environment),K.envMapRotation=K.environment!==null&&U.envMap===null?P.environmentRotation:U.envMapRotation,Se===void 0&&(U.addEventListener("dispose",KA),Se=new Map,K.programs=Se);let Qe=Se.get(xe);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===me)return Kc(U,ue),Qe}else ue.uniforms=Ee.getUniforms(U),U.onBeforeCompile(ue,w),Qe=Ee.acquireProgram(ue,xe),Se.set(xe,Qe),K.uniforms=ue.uniforms;const be=K.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(be.clippingPlanes=ve.uniform),Kc(U,ue),K.needsLights=pp(U),K.lightsStateVersion=me,K.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function kc(U){if(U.uniformsList===null){const P=U.currentProgram.getUniforms();U.uniformsList=ra.seqWithValue(P.seq,U.uniforms)}return U.uniformsList}function Kc(U,P){const z=v.get(U);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function fp(U,P,z,K,k){P.isScene!==!0&&(P=ot),H.resetTextureUnits();const le=P.fog,me=K.isMeshStandardMaterial?P.environment:null,ue=Q===null?w.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:qi,xe=(K.isMeshStandardMaterial?j:Z).get(K.envMap||me),Se=K.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Qe=!!z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),be=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,st=!!z.morphAttributes.color;let _t=qA;K.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(_t=w.toneMapping);const xt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=xt!==void 0?xt.length:0,Te=v.get(K),it=E.state.lights;if(we===!0&&(Xe===!0||U!==V)){const eA=U===V&&K.id===N;ve.setState(K,U,eA)}let je=!1;K.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==it.state.version||Te.outputColorSpace!==ue||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==xe||K.fog===!0&&Te.fog!==le||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ve.numPlanes||Te.numIntersection!==ve.numIntersection)||Te.vertexAlphas!==Se||Te.vertexTangents!==Qe||Te.morphTargets!==be||Te.morphNormals!==Ke||Te.morphColors!==st||Te.toneMapping!==_t||Te.morphTargetsCount!==lt)&&(je=!0):(je=!0,Te.__version=K.version);let dA=Te.currentProgram;je===!0&&(dA=is(K,P,k));let gi=!1,pA=!1,sr=!1;const ft=dA.getUniforms(),sA=Te.uniforms;if(ye.useProgram(dA.program)&&(gi=!0,pA=!0,sr=!0),K.id!==N&&(N=K.id,pA=!0),gi||V!==U){ye.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",U.projectionMatrix),ft.setValue(I,"viewMatrix",U.matrixWorldInverse);const aA=ft.map.cameraPosition;aA!==void 0&&aA.setValue(I,qe.setFromMatrixPosition(U.matrixWorld)),ht.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ft.setValue(I,"isOrthographic",U.isOrthographicCamera===!0),V!==U&&(V=U,pA=!0,sr=!0)}if(Te.needsLights&&(it.state.directionalShadowMap.length>0&&ft.setValue(I,"directionalShadowMap",it.state.directionalShadowMap,H),it.state.spotShadowMap.length>0&&ft.setValue(I,"spotShadowMap",it.state.spotShadowMap,H),it.state.pointShadowMap.length>0&&ft.setValue(I,"pointShadowMap",it.state.pointShadowMap,H)),k.isSkinnedMesh){ft.setOptional(I,k,"bindMatrix"),ft.setOptional(I,k,"bindMatrixInverse");const eA=k.skeleton;eA&&(eA.boneTexture===null&&eA.computeBoneTexture(),ft.setValue(I,"boneTexture",eA.boneTexture,H))}k.isBatchedMesh&&(ft.setOptional(I,k,"batchingTexture"),ft.setValue(I,"batchingTexture",k._matricesTexture,H),ft.setOptional(I,k,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",k._indirectTexture,H),ft.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",k._colorsTexture,H));const EA=z.morphAttributes;if((EA.position!==void 0||EA.normal!==void 0||EA.color!==void 0)&&Ve.update(k,z,dA),(pA||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,ft.setValue(I,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(sA.envMap.value=xe,sA.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&P.environment!==null&&(sA.envMapIntensity.value=P.environmentIntensity),sA.dfgLUT!==void 0&&(sA.dfgLUT.value=I_()),pA&&(ft.setValue(I,"toneMappingExposure",w.toneMappingExposure),Te.needsLights&&dp(sA,sr),le&&K.fog===!0&&Ie.refreshFogUniforms(sA,le),Ie.refreshMaterialUniforms(sA,K,Ce,_e,E.state.transmissionRenderTarget[U.id]),ra.upload(I,kc(Te),sA,H)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ra.upload(I,kc(Te),sA,H),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ft.setValue(I,"center",k.center),ft.setValue(I,"modelViewMatrix",k.modelViewMatrix),ft.setValue(I,"normalMatrix",k.normalMatrix),ft.setValue(I,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const eA=K.uniformsGroups;for(let aA=0,za=eA.length;aA<za;aA++){const zn=eA[aA];Ae.update(zn,dA),Ae.bind(zn,dA)}}return dA}function dp(U,P){U.ambientLightColor.needsUpdate=P,U.lightProbe.needsUpdate=P,U.directionalLights.needsUpdate=P,U.directionalLightShadows.needsUpdate=P,U.pointLights.needsUpdate=P,U.pointLightShadows.needsUpdate=P,U.spotLights.needsUpdate=P,U.spotLightShadows.needsUpdate=P,U.rectAreaLights.needsUpdate=P,U.hemisphereLights.needsUpdate=P}function pp(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(U,P,z){const K=v.get(U);K.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),v.get(U.texture).__webglTexture=P,v.get(U.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:z,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,P){const z=v.get(U);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0};const gp=I.createFramebuffer();this.setRenderTarget=function(U,P=0,z=0){Q=U,T=P,D=z;let K=null,k=!1,le=!1;if(U){const ue=v.get(U);if(ue.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(I.FRAMEBUFFER,ue.__webglFramebuffer),O.copy(U.viewport),R.copy(U.scissor),X=U.scissorTest,ye.viewport(O),ye.scissor(R),ye.setScissorTest(X),N=-1;return}else if(ue.__webglFramebuffer===void 0)H.setupRenderTarget(U);else if(ue.__hasExternalTextures)H.rebindTextures(U,v.get(U.texture).__webglTexture,v.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Qe=U.depthTexture;if(ue.__boundDepthTexture!==Qe){if(Qe!==null&&v.has(Qe)&&(U.width!==Qe.image.width||U.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(U)}}const xe=U.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(le=!0);const Se=v.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Se[P])?K=Se[P][z]:K=Se[P],k=!0):U.samples>0&&H.useMultisampledRTT(U)===!1?K=v.get(U).__webglMultisampledFramebuffer:Array.isArray(Se)?K=Se[z]:K=Se,O.copy(U.viewport),R.copy(U.scissor),X=U.scissorTest}else O.copy(Y).multiplyScalar(Ce).floor(),R.copy($).multiplyScalar(Ce).floor(),X=ge;if(z!==0&&(K=gp),ye.bindFramebuffer(I.FRAMEBUFFER,K)&&ye.drawBuffers(U,K),ye.viewport(O),ye.scissor(R),ye.setScissorTest(X),k){const ue=v.get(U.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,z)}else if(le){const ue=P;for(let xe=0;xe<U.textures.length;xe++){const Se=v.get(U.textures[xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+xe,Se.__webglTexture,z,ue)}}else if(U!==null&&z!==0){const ue=v.get(U.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ue.__webglTexture,z)}N=-1},this.readRenderTargetPixels=function(U,P,z,K,k,le,me,ue=0){if(!(U&&U.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=v.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){ye.bindFramebuffer(I.FRAMEBUFFER,xe);try{const Se=U.textures[ue],Qe=Se.format,be=Se.type;if(!ht.textureFormatReadable(Qe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(be)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=U.width-K&&z>=0&&z<=U.height-k&&(U.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue),I.readPixels(P,z,K,k,ie.convert(Qe),ie.convert(be),le))}finally{const Se=Q!==null?v.get(Q).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(U,P,z,K,k,le,me,ue=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=v.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(P>=0&&P<=U.width-K&&z>=0&&z<=U.height-k){ye.bindFramebuffer(I.FRAMEBUFFER,xe);const Se=U.textures[ue],Qe=Se.format,be=Se.type;if(!ht.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),U.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue),I.readPixels(P,z,K,k,ie.convert(Qe),ie.convert(be),0);const st=Q!==null?v.get(Q).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,st);const _t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qp(I,_t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(Ke),I.deleteSync(_t),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,P=null,z=0){const K=Math.pow(2,-z),k=Math.floor(U.image.width*K),le=Math.floor(U.image.height*K),me=P!==null?P.x:0,ue=P!==null?P.y:0;H.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,me,ue,k,le),ye.unbindTexture()};const mp=I.createFramebuffer(),Bp=I.createFramebuffer();this.copyTextureToTexture=function(U,P,z=null,K=null,k=0,le=null){le===null&&(k!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=k,k=0):le=0);let me,ue,xe,Se,Qe,be,Ke,st,_t;const xt=U.isCompressedTexture?U.mipmaps[le]:U.image;if(z!==null)me=z.max.x-z.min.x,ue=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Se=z.min.x,Qe=z.min.y,be=z.isBox3?z.min.z:0;else{const EA=Math.pow(2,-k);me=Math.floor(xt.width*EA),ue=Math.floor(xt.height*EA),U.isDataArrayTexture?xe=xt.depth:U.isData3DTexture?xe=Math.floor(xt.depth*EA):xe=1,Se=0,Qe=0,be=0}K!==null?(Ke=K.x,st=K.y,_t=K.z):(Ke=0,st=0,_t=0);const lt=ie.convert(P.format),Te=ie.convert(P.type);let it;P.isData3DTexture?(H.setTexture3D(P,0),it=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(H.setTexture2DArray(P,0),it=I.TEXTURE_2D_ARRAY):(H.setTexture2D(P,0),it=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const je=I.getParameter(I.UNPACK_ROW_LENGTH),dA=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),pA=I.getParameter(I.UNPACK_SKIP_ROWS),sr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be);const ft=U.isDataArrayTexture||U.isData3DTexture,sA=P.isDataArrayTexture||P.isData3DTexture;if(U.isDepthTexture){const EA=v.get(U),eA=v.get(P),aA=v.get(EA.__renderTarget),za=v.get(eA.__renderTarget);ye.bindFramebuffer(I.READ_FRAMEBUFFER,aA.__webglFramebuffer),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,za.__webglFramebuffer);for(let zn=0;zn<xe;zn++)ft&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,k,be+zn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(P).__webglTexture,le,_t+zn)),I.blitFramebuffer(Se,Qe,me,ue,Ke,st,me,ue,I.DEPTH_BUFFER_BIT,I.NEAREST);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||U.isRenderTargetTexture||v.has(U)){const EA=v.get(U),eA=v.get(P);ye.bindFramebuffer(I.READ_FRAMEBUFFER,mp),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bp);for(let aA=0;aA<xe;aA++)ft?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,EA.__webglTexture,k,be+aA):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,EA.__webglTexture,k),sA?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,eA.__webglTexture,le,_t+aA):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,eA.__webglTexture,le),k!==0?I.blitFramebuffer(Se,Qe,me,ue,Ke,st,me,ue,I.COLOR_BUFFER_BIT,I.NEAREST):sA?I.copyTexSubImage3D(it,le,Ke,st,_t+aA,Se,Qe,me,ue):I.copyTexSubImage2D(it,le,Ke,st,Se,Qe,me,ue);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else sA?U.isDataTexture||U.isData3DTexture?I.texSubImage3D(it,le,Ke,st,_t,me,ue,xe,lt,Te,xt.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(it,le,Ke,st,_t,me,ue,xe,lt,xt.data):I.texSubImage3D(it,le,Ke,st,_t,me,ue,xe,lt,Te,xt):U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,Ke,st,me,ue,lt,Te,xt.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,Ke,st,xt.width,xt.height,lt,xt.data):I.texSubImage2D(I.TEXTURE_2D,le,Ke,st,me,ue,lt,Te,xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dA),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,pA),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sr),le===0&&P.generateMipmaps&&I.generateMipmap(it),ye.unbindTexture()},this.initRenderTarget=function(U){v.get(U).__webglFramebuffer===void 0&&H.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?H.setTextureCube(U,0):U.isData3DTexture?H.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?H.setTexture2DArray(U,0):H.setTexture2D(U,0),ye.unbindTexture()},this.resetState=function(){T=0,D=0,Q=null,ye.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return JA}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class jA{constructor(e,t,A,i,r="div"){this.parent=e,this.object=t,this.property=A,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),jA.nextNameID=jA.nextNameID||0,this.$name.id=`lil-gui-name-${++jA.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(A)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class R_ extends jA{constructor(e,t,A){super(e,t,A,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function kl(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const D_={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:kl,toHexString:kl},kr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},H_={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){const A=kr.fromHexString(n);e[0]=(A>>16&255)/255*t,e[1]=(A>>8&255)/255*t,e[2]=(A&255)/255*t},toHexString([n,e,t],A=1){A=255/A;const i=n*A<<16^e*A<<8^t*A<<0;return kr.toHexString(i)}},P_={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const A=kr.fromHexString(n);e.r=(A>>16&255)/255*t,e.g=(A>>8&255)/255*t,e.b=(A&255)/255*t},toHexString({r:n,g:e,b:t},A=1){A=255/A;const i=n*A<<16^e*A<<8^t*A<<0;return kr.toHexString(i)}},N_=[D_,kr,H_,P_];function O_(n){return N_.find(e=>e.match(n))}class G_ extends jA{constructor(e,t,A,i){super(e,t,A,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=O_(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=kl(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class yo extends jA{constructor(e,t,A){super(e,t,A,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class V_ extends jA{constructor(e,t,A,i,r,s){super(e,t,A,"lil-number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let m=parseFloat(this.$input.value);isNaN(m)||(this._stepExplicit&&(m=this._snap(m)),this.setValue(this._clamp(m)))},A=m=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+m),this.$input.value=this.getValue())},i=m=>{m.key==="Enter"&&this.$input.blur(),m.code==="ArrowUp"&&(m.preventDefault(),A(this._step*this._arrowKeyMultiplier(m))),m.code==="ArrowDown"&&(m.preventDefault(),A(this._step*this._arrowKeyMultiplier(m)*-1))},r=m=>{this._inputFocused&&(m.preventDefault(),A(this._step*this._normalizeMouseWheel(m)))};let s=!1,a,o,l,c,h;const u=5,d=m=>{a=m.clientX,o=l=m.clientY,s=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",B)},g=m=>{if(s){const _=m.clientX-a,x=m.clientY-o;Math.abs(x)>u?(m.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>u&&B()}if(!s){const _=m.clientY-l;h-=_*this._step*this._arrowKeyMultiplier(m),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}l=m.clientY},B=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",B)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(f,m,_,x,E)=>(f-m)/(_-m)*(E-x)+x,t=f=>{const m=this.$slider.getBoundingClientRect();let _=e(f,m.left,m.right,this._min,this._max);this._snapClampSetValue(_)},A=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,a,o;const l=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),s=!1},c=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,o=f.touches[0].clientY,s=!0):l(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",u))},h=f=>{if(s){const m=f.touches[0].clientX-a,_=f.touches[0].clientY-o;Math.abs(m)>Math.abs(_)?l(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",u))}else f.preventDefault(),t(f.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",u)},d=this._callOnFinishChange.bind(this),g=400;let B;const p=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const _=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(B),B=setTimeout(d,g)};this.$slider.addEventListener("mousedown",A),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:A}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,A=-e.wheelDelta/120,A*=this._stepExplicit?1:10),t+-A}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class k_ extends jA{constructor(e,t,A,i){super(e,t,A,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const A=document.createElement("option");A.textContent=t,this.$select.appendChild(A)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class K_ extends jA{constructor(e,t,A){super(e,t,A,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var z_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function W_(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Jh=!1;class Cc{constructor({parent:e,autoPlace:t=e===void 0,container:A,width:i,title:r="Controls",closeFolders:s=!1,injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),o&&this.domElement.classList.add("lil-allow-touch-styles"),!Jh&&a&&(W_(z_),Jh=!0),A?A.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=s}add(e,t,A,i,r){if(Object(A)===A)return new k_(this,e,t,A);const s=e[t];switch(typeof s){case"number":return new V_(this,e,t,A,i,r);case"boolean":return new R_(this,e,t);case"string":return new K_(this,e,t);case"function":return new yo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,A=1){return new G_(this,e,t,A)}addFolder(e){const t=new Cc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(A=>{A instanceof yo||A._name in e.controllers&&A.load(e.controllers[A._name])}),t&&e.folders&&this.folders.forEach(A=>{A._title in e.folders&&A.load(e.folders[A._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(A=>{if(!(A instanceof yo)){if(A._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${A._name}"`);t.controllers[A._name]=A.save()}}),e&&this.folders.forEach(A=>{if(A._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${A._title}"`);t.folders[A._title]=A.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const A=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",A))};this.$children.addEventListener("transitionend",A);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(A=>A.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const qh={type:"change"},Ec={type:"start"},Wf={type:"end"},Us=new Ua,$h=new In,X_=Math.cos(70*jp.DEG2RAD),Lt=new b,lA=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mo=1e-6;class Y_ extends Of{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new Qt,this._lastTargetPosition=new b,this._quat=new Qt().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yh,this._sphericalDelta=new yh,this._scale=1,this._panOffset=new b,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new b,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J_.bind(this),this._onPointerDown=Z_.bind(this),this._onPointerUp=q_.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=ex.bind(this),this._onKeyDown=tx.bind(this),this._onTouchStart=Ax.bind(this),this._onTouchMove=nx.bind(this),this._onMouseDown=$_.bind(this),this._onMouseMove=j_.bind(this),this._interceptControlDown=rx.bind(this),this._interceptControlUp=sx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qh),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let A=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(A)&&isFinite(i)&&(A<-Math.PI?A+=lA:A>Math.PI&&(A-=lA),i<-Math.PI?i+=lA:i>Math.PI&&(i-=lA),A<=i?this._spherical.theta=Math.max(A,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(A+i)/2?Math.max(A,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Lt.length();s=this._clampDistance(a*this._scale);const o=a-s;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),r=!!o}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=o!==this.object.zoom;const l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Us.origin.copy(this.object.position),Us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Us.direction))<X_?this.object.lookAt(this.target):($h.setFromNormalAndCoplanarPoint(this.object.up,this.target),Us.intersectPlane($h,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mo||this._lastTargetPosition.distanceToSquared(this.target)>Mo?(this.dispatchEvent(qh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?lA/60*this.autoRotateSpeed*e:lA/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const A=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Lt.copy(i).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/A.clientHeight,this.object.matrix),this._panUp(2*t*r/A.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/A.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/A.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const A=this.domElement.getBoundingClientRect(),i=e-A.left,r=t-A.top,s=A.width,a=A.height;this._mouse.x=i/s*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(lA*this._rotateDelta.x/t.clientHeight),this._rotateUp(lA*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(lA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-lA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(lA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-lA*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(A,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(A,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(A*A+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const A=this._getSecondPointerPosition(e),i=.5*(e.pageX+A.x),r=.5*(e.pageY+A.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(lA*this._rotateDelta.x/t.clientHeight),this._rotateUp(lA*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),A=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(A,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),A=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(A*A+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,A={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:A.deltaY*=16;break;case 2:A.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(A.deltaY*=10),A}}function Z_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function J_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function q_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wf),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=at.DOLLY;break;case Vi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=at.ROTATE}break;case Vi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Ec)}function j_(n){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ex(n){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(n.preventDefault(),this.dispatchEvent(Ec),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Wf))}function tx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ax(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=at.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=at.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Ec)}function nx(n){switch(this._trackPointer(n),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=at.NONE}}function ix(n){this.enabled!==!1&&n.preventDefault()}function rx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $n=new Pf,Jt=new b,bn=new b,Bt=new Qt,jh={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},Uo={type:"change"},eu={type:"mouseDown",mode:null},tu={type:"mouseUp",mode:null},Au={type:"objectChange"};class Xf extends Of{constructor(e,t=null){super(void 0,t);const A=new ux(this);this._root=A;const i=new fx;this._gizmo=i,A.add(i);const r=new dx;this._plane=r,A.add(r);const s=this;function a(_,x){let E=x;Object.defineProperty(s,_,{get:function(){return E!==void 0?E:x},set:function(C){E!==C&&(E=C,r[_]=C,i[_]=C,s.dispatchEvent({type:_+"-changed",value:C}),s.dispatchEvent(Uo))}}),s[_]=x,r[_]=x,i[_]=x}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const o=new b,l=new b,c=new Qt,h=new Qt,u=new b,d=new Qt,g=new b,B=new b,p=new b,f=0,m=new b;a("worldPosition",o),a("worldPositionStart",l),a("worldQuaternion",c),a("worldQuaternionStart",h),a("cameraPosition",u),a("cameraQuaternion",d),a("pointStart",g),a("pointEnd",B),a("rotationAxis",p),a("rotationAngle",f),a("eye",m),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new Qt,this._parentQuaternionInv=new Qt,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new Qt,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new Qt,this._scaleStart=new b,this._getPointer=ax.bind(this),this._onPointerDown=lx.bind(this),this._onPointerHover=ox.bind(this),this._onPointerMove=cx.bind(this),this._onPointerUp=hx.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&$n.setFromCamera(e,this.camera);const t=So(this._gizmo.picker[this.mode],$n);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&$n.setFromCamera(e,this.camera);const t=So(this._plane,$n,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,eu.mode=this.mode,this.dispatchEvent(eu)}}pointerMove(e){const t=this.axis,A=this.mode,i=this.object;let r=this.space;if(A==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&$n.setFromCamera(e,this.camera);const s=So(this._plane,$n,!0);if(s){if(this.pointEnd.copy(s.point).sub(this.worldPositionStart),A==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(Bt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(Jt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Jt.setFromMatrixPosition(i.parent.matrixWorld)))),i.position.x=Math.max(this.minX,Math.min(this.maxX,i.position.x)),i.position.y=Math.max(this.minY,Math.min(this.maxY,i.position.y)),i.position.z=Math.max(this.minZ,Math.min(this.maxZ,i.position.z));else if(A==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),bn.set(a,a,a)}else Jt.copy(this.pointStart),bn.copy(this.pointEnd),Jt.applyQuaternion(this._worldQuaternionInv),bn.applyQuaternion(this._worldQuaternionInv),bn.divide(Jt),t.search("X")===-1&&(bn.x=1),t.search("Y")===-1&&(bn.y=1),t.search("Z")===-1&&(bn.z=1);i.scale.copy(this._scaleStart).multiply(bn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(A==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Jt.setFromMatrixPosition(this.camera.matrixWorld));let o=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Jt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(jh[t]),Jt.copy(jh[t]),r==="local"&&Jt.applyQuaternion(this.worldQuaternion),Jt.cross(this.eye),Jt.length()===0?o=!0:this.rotationAngle=this._offset.dot(Jt.normalize())*a),(t==="E"||o)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(Bt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(Bt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Uo),this.dispatchEvent(Au)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(tu.mode=this.mode,this.dispatchEvent(tu)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Uo),this.dispatchEvent(Au),this.pointStart.copy(this.pointEnd))}getRaycaster(){return $n}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,A,i){const r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(A),r.active.color.set(i),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(A),r.activeTransparent.color.set(i),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(A),r.active._color&&r.active._color.set(i),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(A),r.activeTransparent._color&&r.activeTransparent._color.set(i)}}function ax(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function ox(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function lx(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function cx(n){this.enabled&&this.pointerMove(this._getPointer(n))}function hx(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function So(n,e,t){const A=e.intersectObject(n,!0);for(let i=0;i<A.length;i++)if(A[i].object.visible||t)return A[i];return!1}const Ss=new GA,ct=new b(0,1,0),nu=new b(0,0,0),iu=new pt,Fs=new Qt,sa=new Qt,WA=new b,ru=new pt,Er=new b(1,0,0),ei=new b(0,1,0),yr=new b(0,0,1),bs=new b,pr=new b,gr=new b;class ux extends Ut{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class fx extends Ut{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Jr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new An({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),A=e.clone();A.opacity=.15;const i=t.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const s=e.clone();s.color.setHex(65280);const a=e.clone();a.color.setHex(255);const o=e.clone();o.color.setHex(16711680),o.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const c=e.clone();c.color.setHex(255),c.opacity=.5;const h=e.clone();h.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25;const d=e.clone();d.color.setHex(16776960);const g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:s,zAxis:a,active:d,xAxisTransparent:o,yAxisTransparent:l,zAxisTransparent:c,activeTransparent:u};const B=new Zt(0,.04,.1,12);B.translate(0,.05,0);const p=new Tt(.08,.08,.08);p.translate(0,.04,0);const f=new gt;f.setAttribute("position",new ke([0,0,0,1,0,0],3));const m=new Zt(.0075,.0075,.5,3);m.translate(0,.25,0);function _(V,O){const R=new Ai(V,.0075,3,64,O*Math.PI*2);return R.rotateY(Math.PI/2),R.rotateX(Math.PI/2),R}function x(){const V=new gt;return V.setAttribute("position",new ke([0,0,0,1,1,1],3)),V}const E={X:[[new ce(B,r),[.5,0,0],[0,0,-Math.PI/2]],[new ce(B,r),[-.5,0,0],[0,0,Math.PI/2]],[new ce(m,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ce(B,s),[0,.5,0]],[new ce(B,s),[0,-.5,0],[Math.PI,0,0]],[new ce(m,s)]],Z:[[new ce(B,a),[0,0,.5],[Math.PI/2,0,0]],[new ce(B,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ce(m,a),null,[Math.PI/2,0,0]]],XYZ:[[new ce(new Gi(.1,0),h),[0,0,0]]],XY:[[new ce(new Tt(.15,.15,.01),c),[.15,.15,0]]],YZ:[[new ce(new Tt(.15,.15,.01),o),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Tt(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new ce(new Zt(.2,0,.6,4),A),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new Zt(.2,0,.6,4),A),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new Zt(.2,0,.6,4),A),[0,.3,0]],[new ce(new Zt(.2,0,.6,4),A),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new Zt(.2,0,.6,4),A),[0,0,.3],[Math.PI/2,0,0]],[new ce(new Zt(.2,0,.6,4),A),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Gi(.2,0),A)]],XY:[[new ce(new Tt(.2,.2,.01),A),[.15,.15,0]]],YZ:[[new ce(new Tt(.2,.2,.01),A),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Tt(.2,.2,.01),A),[.15,0,.15],[-Math.PI/2,0,0]]]},M={START:[[new ce(new Gi(.01,2),i),null,null,null,"helper"]],END:[[new ce(new Gi(.01,2),i),null,null,null,"helper"]],DELTA:[[new gn(x(),i),null,null,null,"helper"]],X:[[new gn(f,i),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new gn(f,i),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new gn(f,i),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},F={XYZE:[[new ce(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ce(_(.5,.5),r)]],Y:[[new ce(_(.5,.5),s),null,[0,0,-Math.PI/2]]],Z:[[new ce(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ce(_(.75,1),u),null,[0,Math.PI/2,0]]]},w={AXIS:[[new gn(f,i),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new ce(new qr(.25,10,8),A)]],X:[[new ce(new Ai(.5,.1,4,24),A),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ce(new Ai(.5,.1,4,24),A),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ce(new Ai(.5,.1,4,24),A),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ce(new Ai(.75,.1,2,24),A)]]},T={X:[[new ce(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new ce(m,r),[0,0,0],[0,0,-Math.PI/2]],[new ce(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ce(p,s),[0,.5,0]],[new ce(m,s)],[new ce(p,s),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ce(p,a),[0,0,.5],[Math.PI/2,0,0]],[new ce(m,a),[0,0,0],[Math.PI/2,0,0]],[new ce(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ce(new Tt(.15,.15,.01),c),[.15,.15,0]]],YZ:[[new ce(new Tt(.15,.15,.01),o),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Tt(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Tt(.1,.1,.1),h)]]},D={X:[[new ce(new Zt(.2,0,.6,4),A),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new Zt(.2,0,.6,4),A),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new Zt(.2,0,.6,4),A),[0,.3,0]],[new ce(new Zt(.2,0,.6,4),A),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new Zt(.2,0,.6,4),A),[0,0,.3],[Math.PI/2,0,0]],[new ce(new Zt(.2,0,.6,4),A),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ce(new Tt(.2,.2,.01),A),[.15,.15,0]]],YZ:[[new ce(new Tt(.2,.2,.01),A),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Tt(.2,.2,.01),A),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Tt(.2,.2,.2),A),[0,0,0]]]},Q={X:[[new gn(f,i),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new gn(f,i),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new gn(f,i),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function N(V){const O=new Ut;for(const R in V)for(let X=V[R].length;X--;){const J=V[R][X][0].clone(),ee=V[R][X][1],te=V[R][X][2],_e=V[R][X][3],Ce=V[R][X][4];J.name=R,J.tag=Ce,ee&&J.position.set(ee[0],ee[1],ee[2]),te&&J.rotation.set(te[0],te[1],te[2]),_e&&J.scale.set(_e[0],_e[1],_e[2]),J.updateMatrix();const Oe=J.geometry.clone();Oe.applyMatrix4(J.matrix),J.geometry=Oe,J.renderOrder=1/0,J.position.set(0,0,0),J.rotation.set(0,0,0),J.scale.set(1,1,1),O.add(J)}return O}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=N(E)),this.add(this.gizmo.rotate=N(F)),this.add(this.gizmo.scale=N(T)),this.add(this.picker.translate=N(C)),this.add(this.picker.rotate=N(y)),this.add(this.picker.scale=N(D)),this.add(this.helper.translate=N(M)),this.add(this.helper.rotate=N(w)),this.add(this.helper.scale=N(Q)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const A=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:sa;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const s=i[r];s.visible=!0,s.rotation.set(0,0,0),s.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),s.scale.set(1,1,1).multiplyScalar(a*this.size/4),s.tag==="helper"){s.visible=!1,s.name==="AXIS"?(s.visible=!!this.axis,this.axis==="X"&&(Bt.setFromEuler(Ss.set(0,0,0)),s.quaternion.copy(A).multiply(Bt),Math.abs(ct.copy(Er).applyQuaternion(A).dot(this.eye))>.9&&(s.visible=!1)),this.axis==="Y"&&(Bt.setFromEuler(Ss.set(0,0,Math.PI/2)),s.quaternion.copy(A).multiply(Bt),Math.abs(ct.copy(ei).applyQuaternion(A).dot(this.eye))>.9&&(s.visible=!1)),this.axis==="Z"&&(Bt.setFromEuler(Ss.set(0,Math.PI/2,0)),s.quaternion.copy(A).multiply(Bt),Math.abs(ct.copy(yr).applyQuaternion(A).dot(this.eye))>.9&&(s.visible=!1)),this.axis==="XYZE"&&(Bt.setFromEuler(Ss.set(0,Math.PI/2,0)),ct.copy(this.rotationAxis),s.quaternion.setFromRotationMatrix(iu.lookAt(nu,ct,ei)),s.quaternion.multiply(Bt),s.visible=this.dragging),this.axis==="E"&&(s.visible=!1)):s.name==="START"?(s.position.copy(this.worldPositionStart),s.visible=this.dragging):s.name==="END"?(s.position.copy(this.worldPosition),s.visible=this.dragging):s.name==="DELTA"?(s.position.copy(this.worldPositionStart),s.quaternion.copy(this.worldQuaternionStart),Jt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Jt.applyQuaternion(this.worldQuaternionStart.clone().invert()),s.scale.copy(Jt),s.visible=this.dragging):(s.quaternion.copy(A),this.dragging?s.position.copy(this.worldPositionStart):s.position.copy(this.worldPosition),this.axis&&(s.visible=this.axis.search(s.name)!==-1));continue}s.quaternion.copy(A),this.mode==="translate"||this.mode==="scale"?(s.name==="X"&&Math.abs(ct.copy(Er).applyQuaternion(A).dot(this.eye))>.99&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),s.name==="Y"&&Math.abs(ct.copy(ei).applyQuaternion(A).dot(this.eye))>.99&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),s.name==="Z"&&Math.abs(ct.copy(yr).applyQuaternion(A).dot(this.eye))>.99&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),s.name==="XY"&&Math.abs(ct.copy(yr).applyQuaternion(A).dot(this.eye))<.2&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),s.name==="YZ"&&Math.abs(ct.copy(Er).applyQuaternion(A).dot(this.eye))<.2&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1),s.name==="XZ"&&Math.abs(ct.copy(ei).applyQuaternion(A).dot(this.eye))<.2&&(s.scale.set(1e-10,1e-10,1e-10),s.visible=!1)):this.mode==="rotate"&&(Fs.copy(A),ct.copy(this.eye).applyQuaternion(Bt.copy(A).invert()),s.name.search("E")!==-1&&s.quaternion.setFromRotationMatrix(iu.lookAt(this.eye,nu,ei)),s.name==="X"&&(Bt.setFromAxisAngle(Er,Math.atan2(-ct.y,ct.z)),Bt.multiplyQuaternions(Fs,Bt),s.quaternion.copy(Bt)),s.name==="Y"&&(Bt.setFromAxisAngle(ei,Math.atan2(ct.x,ct.z)),Bt.multiplyQuaternions(Fs,Bt),s.quaternion.copy(Bt)),s.name==="Z"&&(Bt.setFromAxisAngle(yr,Math.atan2(ct.y,ct.x)),Bt.multiplyQuaternions(Fs,Bt),s.quaternion.copy(Bt))),s.visible=s.visible&&(s.name.indexOf("X")===-1||this.showX),s.visible=s.visible&&(s.name.indexOf("Y")===-1||this.showY),s.visible=s.visible&&(s.name.indexOf("Z")===-1||this.showZ),s.visible=s.visible&&(s.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),s.material._color=s.material._color||s.material.color.clone(),s.material._opacity=s.material._opacity||s.material.opacity,s.material.color.copy(s.material._color),s.material.opacity=s.material._opacity,this.enabled&&this.axis&&(s.name===this.axis?(s.material.color.copy(this.materialLib.active.color),s.material.opacity=1):this.axis.split("").some(function(o){return s.name===o})&&(s.material.color.copy(this.materialLib.active.color),s.material.opacity=1))}super.updateMatrixWorld(e)}}class dx extends ce{constructor(){super(new ji(1e5,1e5,2,2),new Jr({visible:!1,wireframe:!0,side:hA,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),bs.copy(Er).applyQuaternion(t==="local"?this.worldQuaternion:sa),pr.copy(ei).applyQuaternion(t==="local"?this.worldQuaternion:sa),gr.copy(yr).applyQuaternion(t==="local"?this.worldQuaternion:sa),ct.copy(pr),this.mode){case"translate":case"scale":switch(this.axis){case"X":ct.copy(this.eye).cross(bs),WA.copy(bs).cross(ct);break;case"Y":ct.copy(this.eye).cross(pr),WA.copy(pr).cross(ct);break;case"Z":ct.copy(this.eye).cross(gr),WA.copy(gr).cross(ct);break;case"XY":WA.copy(gr);break;case"YZ":WA.copy(bs);break;case"XZ":ct.copy(gr),WA.copy(pr);break;case"XYZ":case"E":WA.set(0,0,0);break}break;default:WA.set(0,0,0)}WA.length()===0?this.quaternion.copy(this.cameraQuaternion):(ru.lookAt(Jt.set(0,0,0),WA,ct),this.quaternion.setFromRotationMatrix(ru)),super.updateMatrixWorld(e)}}function Yf(n,e=!1){const t=n[0].index!==null,A=new Set(Object.keys(n[0].attributes)),i=new Set(Object.keys(n[0].morphAttributes)),r={},s={},a=n[0].morphTargetsRelative,o=new gt;let l=0;for(let c=0;c<n.length;++c){const h=n[c];let u=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!A.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),u++}if(u!==A.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(l,d,c),l+=d}}if(t){let c=0;const h=[];for(let u=0;u<n.length;++u){const d=n[u].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+c);c+=n[u].attributes.position.count}o.setIndex(h)}for(const c in r){const h=su(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,h)}for(const c in s){const h=s[c][0].length;if(h===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let u=0;u<h;++u){const d=[];for(let B=0;B<s[c].length;++B)d.push(s[c][B][u]);const g=su(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(g)}}return o}function su(n){let e,t,A,i=-1,r=0;for(let l=0;l<n.length;++l){const c=n[l];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(A===void 0&&(A=c.normalized),A!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=c.gpuType),i!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const s=new e(r),a=new CA(s,t,A);let o=0;for(let l=0;l<n.length;++l){const c=n[l];if(c.isInterleavedBufferAttribute){const h=o/t;for(let u=0,d=c.count;u<d;u++)for(let g=0;g<t;g++){const B=c.getComponent(u,g);a.setComponent(u+h,g,B)}}else s.set(c.array,o);o+=c.count*t}return i!==void 0&&(a.gpuType=i),a}function ii(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},A=n.getIndex(),i=n.getAttribute("position"),r=A?A.count:i.count;let s=0;const a=Object.keys(n.attributes),o={},l={},c=[],h=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let m=0,_=a.length;m<_;m++){const x=a[m],E=n.attributes[x];o[x]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const C=n.morphAttributes[x];C&&(l[x]||(l[x]=[]),C.forEach((M,F)=>{const w=new M.array.constructor(M.count*M.itemSize);l[x][F]=new M.constructor(w,M.itemSize,M.normalized)}))}const d=e*.5,g=Math.log10(1/e),B=Math.pow(10,g),p=d*B;for(let m=0;m<r;m++){const _=A?A.getX(m):m;let x="";for(let E=0,C=a.length;E<C;E++){const M=a[E],F=n.getAttribute(M),w=F.itemSize;for(let y=0;y<w;y++)x+=`${~~(F[h[y]](_)*B+p)},`}if(x in t)c.push(t[x]);else{for(let E=0,C=a.length;E<C;E++){const M=a[E],F=n.getAttribute(M),w=n.morphAttributes[M],y=F.itemSize,T=o[M],D=l[M];for(let Q=0;Q<y;Q++){const N=h[Q],V=u[Q];if(T[V](s,F[N](_)),w)for(let O=0,R=w.length;O<R;O++)D[O][V](s,w[O][N](_))}}t[x]=s,c.push(s),s++}}const f=n.clone();for(const m in n.attributes){const _=o[m];if(f.setAttribute(m,new _.constructor(_.array.slice(0,s*_.itemSize),_.itemSize,_.normalized)),m in l)for(let x=0;x<l[m].length;x++){const E=l[m][x];f.morphAttributes[m][x]=new E.constructor(E.array.slice(0,s*E.itemSize),E.itemSize,E.normalized)}}return f.setIndex(c),f}class px{parse(e,t,A={}){function i(_){e.traverse(function(x){if(x.isMesh===!0||x.isPoints){const E=x,C=E.geometry;C.hasAttribute("position")===!0&&_(E,C)}})}A=Object.assign({binary:!1,excludeAttributes:[],littleEndian:!1},A);const s=A.excludeAttributes;let a=!0,o=!1,l=!1,c=!1,h=0,u=0;e.traverse(function(_){if(_.isMesh===!0){const E=_.geometry,C=E.getAttribute("position"),M=E.getAttribute("normal"),F=E.getAttribute("uv"),w=E.getAttribute("color"),y=E.getIndex();if(C===void 0)return;h+=C.count,u+=y?y.count/3:C.count/3,M!==void 0&&(o=!0),F!==void 0&&(c=!0),w!==void 0&&(l=!0)}else if(_.isPoints){const E=_.geometry,C=E.getAttribute("position"),M=E.getAttribute("normal"),F=E.getAttribute("color");h+=C.count,M!==void 0&&(o=!0),F!==void 0&&(l=!0),a=!1}});const d=new Fe;if(a=a&&s.indexOf("index")===-1,o=o&&s.indexOf("normal")===-1,l=l&&s.indexOf("color")===-1,c=c&&s.indexOf("uv")===-1,a&&u!==Math.floor(u))return console.error("PLYExporter: Failed to generate a valid PLY file with triangle indices because the number of indices is not divisible by 3."),null;const g=4;let B=`ply
format ${A.binary?A.littleEndian?"binary_little_endian":"binary_big_endian":"ascii"} 1.0
element vertex ${h}
property float x
property float y
property float z
`;o===!0&&(B+=`property float nx
property float ny
property float nz
`),c===!0&&(B+=`property float s
property float t
`),l===!0&&(B+=`property uchar red
property uchar green
property uchar blue
`),a===!0&&(B+=`element face ${u}
property list uchar int vertex_index
`),B+=`end_header
`;const p=new b,f=new Pe;let m=null;if(A.binary===!0){const _=new TextEncoder().encode(B),x=h*(12+(o?12:0)+(l?3:0)+(c?8:0)),E=a?u*(g*3+1):0,C=new DataView(new ArrayBuffer(_.length+x+E));new Uint8Array(C.buffer).set(_,0);let M=_.length,F=_.length+x,w=0;i(function(y,T){const D=T.getAttribute("position"),Q=T.getAttribute("normal"),N=T.getAttribute("uv"),V=T.getAttribute("color"),O=T.getIndex();f.getNormalMatrix(y.matrixWorld);for(let R=0,X=D.count;R<X;R++)p.fromBufferAttribute(D,R),p.applyMatrix4(y.matrixWorld),C.setFloat32(M,p.x,A.littleEndian),M+=4,C.setFloat32(M,p.y,A.littleEndian),M+=4,C.setFloat32(M,p.z,A.littleEndian),M+=4,o===!0&&(Q!=null?(p.fromBufferAttribute(Q,R),p.applyMatrix3(f).normalize(),C.setFloat32(M,p.x,A.littleEndian),M+=4,C.setFloat32(M,p.y,A.littleEndian),M+=4,C.setFloat32(M,p.z,A.littleEndian),M+=4):(C.setFloat32(M,0,A.littleEndian),M+=4,C.setFloat32(M,0,A.littleEndian),M+=4,C.setFloat32(M,0,A.littleEndian),M+=4)),c===!0&&(N!=null?(C.setFloat32(M,N.getX(R),A.littleEndian),M+=4,C.setFloat32(M,N.getY(R),A.littleEndian),M+=4):(C.setFloat32(M,0,A.littleEndian),M+=4,C.setFloat32(M,0,A.littleEndian),M+=4)),l===!0&&(V!=null?(d.fromBufferAttribute(V,R),Ze.workingToColorSpace(d,AA),C.setUint8(M,Math.floor(d.r*255)),M+=1,C.setUint8(M,Math.floor(d.g*255)),M+=1,C.setUint8(M,Math.floor(d.b*255)),M+=1):(C.setUint8(M,255),M+=1,C.setUint8(M,255),M+=1,C.setUint8(M,255),M+=1));if(a===!0)if(O!==null)for(let R=0,X=O.count;R<X;R+=3)C.setUint8(F,3),F+=1,C.setUint32(F,O.getX(R+0)+w,A.littleEndian),F+=g,C.setUint32(F,O.getX(R+1)+w,A.littleEndian),F+=g,C.setUint32(F,O.getX(R+2)+w,A.littleEndian),F+=g;else for(let R=0,X=D.count;R<X;R+=3)C.setUint8(F,3),F+=1,C.setUint32(F,w+R,A.littleEndian),F+=g,C.setUint32(F,w+R+1,A.littleEndian),F+=g,C.setUint32(F,w+R+2,A.littleEndian),F+=g;w+=D.count}),m=C.buffer}else{let _=0,x="",E="";i(function(C,M){const F=M.getAttribute("position"),w=M.getAttribute("normal"),y=M.getAttribute("uv"),T=M.getAttribute("color"),D=M.getIndex();f.getNormalMatrix(C.matrixWorld);for(let Q=0,N=F.count;Q<N;Q++){p.fromBufferAttribute(F,Q),p.applyMatrix4(C.matrixWorld);let V=p.x+" "+p.y+" "+p.z;o===!0&&(w!=null?(p.fromBufferAttribute(w,Q),p.applyMatrix3(f).normalize(),V+=" "+p.x+" "+p.y+" "+p.z):V+=" 0 0 0"),c===!0&&(y!=null?V+=" "+y.getX(Q)+" "+y.getY(Q):V+=" 0 0"),l===!0&&(T!=null?(d.fromBufferAttribute(T,Q),Ze.workingToColorSpace(d,AA),V+=" "+Math.floor(d.r*255)+" "+Math.floor(d.g*255)+" "+Math.floor(d.b*255)):V+=" 255 255 255"),x+=V+`
`}if(a===!0){if(D!==null)for(let Q=0,N=D.count;Q<N;Q+=3)E+=`3 ${D.getX(Q+0)+_}`,E+=` ${D.getX(Q+1)+_}`,E+=` ${D.getX(Q+2)+_}
`;else for(let Q=0,N=F.count;Q<N;Q+=3)E+=`3 ${_+Q} ${_+Q+1} ${_+Q+2}
`;u+=D?D.count/3:F.count/3}_+=F.count}),m=`${B}${x}${a?`${E}
`:`
`}`}return typeof t=="function"&&requestAnimationFrame(()=>t(m)),m}}var Kl=function(n,e){return Kl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,A){t.__proto__=A}||function(t,A){for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(t[i]=A[i])},Kl(n,e)};function VA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Kl(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function MA(n,e,t,A){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(A.next(c))}catch(h){s(h)}}function o(c){try{l(A.throw(c))}catch(h){s(h)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((A=A.apply(n,[])).next())})}function BA(n,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},A,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(A)throw new TypeError("Generator is already executing.");for(;t;)try{if(A=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){t.label=l[1];break}if(l[0]===6&&t.label<r[1]){t.label=r[1],r=l;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(l);break}r[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(c){l=[6,c],i=0}finally{A=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var fi=(function(){function n(e,t,A,i){this.left=e,this.top=t,this.width=A,this.height=i}return n.prototype.add=function(e,t,A,i){return new n(this.left+e,this.top+t,this.width+A,this.height+i)},n.fromClientRect=function(e,t){return new n(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},n.fromDOMRectList=function(e,t){var A=Array.from(t).find(function(i){return i.width!==0});return A?new n(A.left+e.windowBounds.left,A.top+e.windowBounds.top,A.width,A.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n})(),yc=function(n,e){return fi.fromClientRect(n,e.getBoundingClientRect())},ba=function(n){for(var e=[],t=0,A=n.length;t<A;){var i=n.charCodeAt(t++);if(i>=55296&&i<=56319&&t<A){var r=n.charCodeAt(t++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},yt=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var t=n.length;if(!t)return"";for(var A=[],i=-1,r="";++i<t;){var s=n[i];s<=65535?A.push(s):(s-=65536,A.push((s>>10)+55296,s%1024+56320)),(i+1===t||A.length>16384)&&(r+=String.fromCharCode.apply(String,A),A.length=0)}return r},au="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gx=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ts=0;Ts<au.length;Ts++)gx[au.charCodeAt(Ts)]=Ts;var ou="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Mr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Qs=0;Qs<ou.length;Qs++)Mr[ou.charCodeAt(Qs)]=Qs;var mx=function(n){var e=n.length*.75,t=n.length,A,i=0,r,s,a,o;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)r=Mr[n.charCodeAt(A)],s=Mr[n.charCodeAt(A+1)],a=Mr[n.charCodeAt(A+2)],o=Mr[n.charCodeAt(A+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},Bx=function(n){for(var e=n.length,t=[],A=0;A<e;A+=2)t.push(n[A+1]<<8|n[A]);return t},wx=function(n){for(var e=n.length,t=[],A=0;A<e;A+=4)t.push(n[A+3]<<24|n[A+2]<<16|n[A+1]<<8|n[A]);return t},li=5,Mc=11,Fo=2,_x=Mc-li,Zf=65536>>li,xx=1<<li,bo=xx-1,vx=1024>>li,Cx=Zf+vx,Ex=Cx,yx=32,Mx=Ex+yx,Ux=65536>>Mc,Sx=1<<_x,Fx=Sx-1,lu=function(n,e,t){return n.slice?n.slice(e,t):new Uint16Array(Array.prototype.slice.call(n,e,t))},bx=function(n,e,t){return n.slice?n.slice(e,t):new Uint32Array(Array.prototype.slice.call(n,e,t))},Tx=function(n,e){var t=mx(n),A=Array.isArray(t)?wx(t):new Uint32Array(t),i=Array.isArray(t)?Bx(t):new Uint16Array(t),r=24,s=lu(i,r/2,A[4]/2),a=A[5]===2?lu(i,(r+A[4])/2):bx(A,Math.ceil((r+A[4])/4));return new Qx(A[0],A[1],A[2],A[3],s,a)},Qx=(function(){function n(e,t,A,i,r,s){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>li],t=(t<<Fo)+(e&bo),this.data[t];if(e<=65535)return t=this.index[Zf+(e-55296>>li)],t=(t<<Fo)+(e&bo),this.data[t];if(e<this.highStart)return t=Mx-Ux+(e>>Mc),t=this.index[t],t+=e>>li&Fx,t=this.index[t],t=(t<<Fo)+(e&bo),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n})(),cu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ix=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Is=0;Is<cu.length;Is++)Ix[cu.charCodeAt(Is)]=Is;var Lx="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",hu=50,Rx=1,Jf=2,qf=3,Dx=4,Hx=5,uu=7,$f=8,fu=9,Hn=10,zl=11,du=12,Wl=13,Px=14,Ur=15,Xl=16,Ls=17,mr=18,Nx=19,pu=20,Yl=21,Br=22,To=23,Ti=24,wA=25,Sr=26,Fr=27,Qi=28,Ox=29,ri=30,Gx=31,Rs=32,Ds=33,Zl=34,Jl=35,ql=36,Kr=37,$l=38,aa=39,oa=40,Qo=41,jf=42,Vx=43,kx=[9001,65288],ed="!",Ye="×",Hs="÷",jl=Tx(Lx),dn=[ri,ql],ec=[Rx,Jf,qf,Hx],td=[Hn,$f],gu=[Fr,Sr],Kx=ec.concat(td),mu=[$l,aa,oa,Zl,Jl],zx=[Ur,Wl],Wx=function(n,e){e===void 0&&(e="strict");var t=[],A=[],i=[];return n.forEach(function(r,s){var a=jl.get(r);if(a>hu?(i.push(!0),a-=hu):i.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return A.push(s),t.push(Xl);if(a===Dx||a===zl){if(s===0)return A.push(s),t.push(ri);var o=t[s-1];return Kx.indexOf(o)===-1?(A.push(A[s-1]),t.push(o)):(A.push(s),t.push(ri))}if(A.push(s),a===Gx)return t.push(e==="strict"?Yl:Kr);if(a===jf||a===Ox)return t.push(ri);if(a===Vx)return r>=131072&&r<=196605||r>=196608&&r<=262141?t.push(Kr):t.push(ri);t.push(a)}),[A,t,i]},Io=function(n,e,t,A){var i=A[t];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=t;r<=A.length;){r++;var s=A[r];if(s===e)return!0;if(s!==Hn)break}if(i===Hn)for(var r=t;r>0;){r--;var a=A[r];if(Array.isArray(n)?n.indexOf(a)!==-1:n===a)for(var o=t;o<=A.length;){o++;var s=A[o];if(s===e)return!0;if(s!==Hn)break}if(a!==Hn)break}return!1},Bu=function(n,e){for(var t=n;t>=0;){var A=e[t];if(A===Hn)t--;else return A}return 0},Xx=function(n,e,t,A,i){if(t[A]===0)return Ye;var r=A-1;if(Array.isArray(i)&&i[r]===!0)return Ye;var s=r-1,a=r+1,o=e[r],l=s>=0?e[s]:0,c=e[a];if(o===Jf&&c===qf)return Ye;if(ec.indexOf(o)!==-1)return ed;if(ec.indexOf(c)!==-1||td.indexOf(c)!==-1)return Ye;if(Bu(r,e)===$f)return Hs;if(jl.get(n[r])===zl||(o===Rs||o===Ds)&&jl.get(n[a])===zl||o===uu||c===uu||o===fu||[Hn,Wl,Ur].indexOf(o)===-1&&c===fu||[Ls,mr,Nx,Ti,Qi].indexOf(c)!==-1||Bu(r,e)===Br||Io(To,Br,r,e)||Io([Ls,mr],Yl,r,e)||Io(du,du,r,e))return Ye;if(o===Hn)return Hs;if(o===To||c===To)return Ye;if(c===Xl||o===Xl)return Hs;if([Wl,Ur,Yl].indexOf(c)!==-1||o===Px||l===ql&&zx.indexOf(o)!==-1||o===Qi&&c===ql||c===pu||dn.indexOf(c)!==-1&&o===wA||dn.indexOf(o)!==-1&&c===wA||o===Fr&&[Kr,Rs,Ds].indexOf(c)!==-1||[Kr,Rs,Ds].indexOf(o)!==-1&&c===Sr||dn.indexOf(o)!==-1&&gu.indexOf(c)!==-1||gu.indexOf(o)!==-1&&dn.indexOf(c)!==-1||[Fr,Sr].indexOf(o)!==-1&&(c===wA||[Br,Ur].indexOf(c)!==-1&&e[a+1]===wA)||[Br,Ur].indexOf(o)!==-1&&c===wA||o===wA&&[wA,Qi,Ti].indexOf(c)!==-1)return Ye;if([wA,Qi,Ti,Ls,mr].indexOf(c)!==-1)for(var h=r;h>=0;){var u=e[h];if(u===wA)return Ye;if([Qi,Ti].indexOf(u)!==-1)h--;else break}if([Fr,Sr].indexOf(c)!==-1)for(var h=[Ls,mr].indexOf(o)!==-1?s:r;h>=0;){var u=e[h];if(u===wA)return Ye;if([Qi,Ti].indexOf(u)!==-1)h--;else break}if($l===o&&[$l,aa,Zl,Jl].indexOf(c)!==-1||[aa,Zl].indexOf(o)!==-1&&[aa,oa].indexOf(c)!==-1||[oa,Jl].indexOf(o)!==-1&&c===oa||mu.indexOf(o)!==-1&&[pu,Sr].indexOf(c)!==-1||mu.indexOf(c)!==-1&&o===Fr||dn.indexOf(o)!==-1&&dn.indexOf(c)!==-1||o===Ti&&dn.indexOf(c)!==-1||dn.concat(wA).indexOf(o)!==-1&&c===Br&&kx.indexOf(n[a])===-1||dn.concat(wA).indexOf(c)!==-1&&o===mr)return Ye;if(o===Qo&&c===Qo){for(var d=t[r],g=1;d>0&&(d--,e[d]===Qo);)g++;if(g%2!==0)return Ye}return o===Rs&&c===Ds?Ye:Hs},Yx=function(n,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=Wx(n,e.lineBreak),A=t[0],i=t[1],r=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(i=i.map(function(a){return[wA,ri,jf].indexOf(a)!==-1?Kr:a}));var s=e.wordBreak==="keep-all"?r.map(function(a,o){return a&&n[o]>=19968&&n[o]<=40959}):void 0;return[A,i,s]},Zx=(function(){function n(e,t,A,i){this.codePoints=e,this.required=t===ed,this.start=A,this.end=i}return n.prototype.slice=function(){return yt.apply(void 0,this.codePoints.slice(this.start,this.end))},n})(),Jx=function(n,e){var t=ba(n),A=Yx(t,e),i=A[0],r=A[1],s=A[2],a=t.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=Ye;l<a&&(c=Xx(t,r,i,++l,s))===Ye;);if(c!==Ye||l===a){var h=new Zx(t,c,o,l);return o=l,{value:h,done:!1}}return{done:!0,value:null}}}},qx=1,$x=2,jr=4,wu=8,pa=10,_u=47,Ir=92,jx=9,ev=32,Ps=34,wr=61,tv=35,Av=36,nv=37,Ns=39,Os=40,_r=41,iv=95,cA=45,rv=33,sv=60,av=62,ov=64,lv=91,cv=93,hv=61,uv=123,Gs=63,fv=125,xu=124,dv=126,pv=128,vu=65533,Lo=42,oi=43,gv=44,mv=58,Bv=59,zr=46,wv=0,_v=8,xv=11,vv=14,Cv=31,Ev=127,XA=-1,Ad=48,nd=97,id=101,yv=102,Mv=117,Uv=122,rd=65,sd=69,ad=70,Sv=85,Fv=90,qt=function(n){return n>=Ad&&n<=57},bv=function(n){return n>=55296&&n<=57343},Ii=function(n){return qt(n)||n>=rd&&n<=ad||n>=nd&&n<=yv},Tv=function(n){return n>=nd&&n<=Uv},Qv=function(n){return n>=rd&&n<=Fv},Iv=function(n){return Tv(n)||Qv(n)},Lv=function(n){return n>=pv},Vs=function(n){return n===pa||n===jx||n===ev},ga=function(n){return Iv(n)||Lv(n)||n===iv},Cu=function(n){return ga(n)||qt(n)||n===cA},Rv=function(n){return n>=wv&&n<=_v||n===xv||n>=vv&&n<=Cv||n===Ev},Ln=function(n,e){return n!==Ir?!1:e!==pa},ks=function(n,e,t){return n===cA?ga(e)||Ln(e,t):ga(n)?!0:!!(n===Ir&&Ln(n,e))},Ro=function(n,e,t){return n===oi||n===cA?qt(e)?!0:e===zr&&qt(t):qt(n===zr?e:n)},Dv=function(n){var e=0,t=1;(n[e]===oi||n[e]===cA)&&(n[e]===cA&&(t=-1),e++);for(var A=[];qt(n[e]);)A.push(n[e++]);var i=A.length?parseInt(yt.apply(void 0,A),10):0;n[e]===zr&&e++;for(var r=[];qt(n[e]);)r.push(n[e++]);var s=r.length,a=s?parseInt(yt.apply(void 0,r),10):0;(n[e]===sd||n[e]===id)&&e++;var o=1;(n[e]===oi||n[e]===cA)&&(n[e]===cA&&(o=-1),e++);for(var l=[];qt(n[e]);)l.push(n[e++]);var c=l.length?parseInt(yt.apply(void 0,l),10):0;return t*(i+a*Math.pow(10,-s))*Math.pow(10,o*c)},Hv={type:2},Pv={type:3},Nv={type:4},Ov={type:13},Gv={type:8},Vv={type:21},kv={type:9},Kv={type:10},zv={type:11},Wv={type:12},Xv={type:14},Ks={type:23},Yv={type:1},Zv={type:25},Jv={type:24},qv={type:26},$v={type:27},jv={type:28},eC={type:29},tC={type:31},tc={type:32},od=(function(){function n(){this._value=[]}return n.prototype.write=function(e){this._value=this._value.concat(ba(e))},n.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==tc;)e.push(t),t=this.consumeToken();return e},n.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Ps:return this.consumeStringToken(Ps);case tv:var t=this.peekCodePoint(0),A=this.peekCodePoint(1),i=this.peekCodePoint(2);if(Cu(t)||Ln(A,i)){var r=ks(t,A,i)?$x:qx,s=this.consumeName();return{type:5,value:s,flags:r}}break;case Av:if(this.peekCodePoint(0)===wr)return this.consumeCodePoint(),Ov;break;case Ns:return this.consumeStringToken(Ns);case Os:return Hv;case _r:return Pv;case Lo:if(this.peekCodePoint(0)===wr)return this.consumeCodePoint(),Xv;break;case oi:if(Ro(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case gv:return Nv;case cA:var a=e,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(Ro(a,o,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(ks(a,o,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(o===cA&&l===av)return this.consumeCodePoint(),this.consumeCodePoint(),Jv;break;case zr:if(Ro(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case _u:if(this.peekCodePoint(0)===Lo)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Lo&&(c=this.consumeCodePoint(),c===_u))return this.consumeToken();if(c===XA)return this.consumeToken()}break;case mv:return qv;case Bv:return $v;case sv:if(this.peekCodePoint(0)===rv&&this.peekCodePoint(1)===cA&&this.peekCodePoint(2)===cA)return this.consumeCodePoint(),this.consumeCodePoint(),Zv;break;case ov:var h=this.peekCodePoint(0),u=this.peekCodePoint(1),d=this.peekCodePoint(2);if(ks(h,u,d)){var s=this.consumeName();return{type:7,value:s}}break;case lv:return jv;case Ir:if(Ln(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case cv:return eC;case hv:if(this.peekCodePoint(0)===wr)return this.consumeCodePoint(),Gv;break;case uv:return zv;case fv:return Wv;case Mv:case Sv:var g=this.peekCodePoint(0),B=this.peekCodePoint(1);return g===oi&&(Ii(B)||B===Gs)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case xu:if(this.peekCodePoint(0)===wr)return this.consumeCodePoint(),kv;if(this.peekCodePoint(0)===xu)return this.consumeCodePoint(),Vv;break;case dv:if(this.peekCodePoint(0)===wr)return this.consumeCodePoint(),Kv;break;case XA:return tc}return Vs(e)?(this.consumeWhiteSpace(),tC):qt(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):ga(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:yt(e)}},n.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},n.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},n.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},n.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Ii(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var A=!1;t===Gs&&e.length<6;)e.push(t),t=this.consumeCodePoint(),A=!0;if(A){var i=parseInt(yt.apply(void 0,e.map(function(o){return o===Gs?Ad:o})),16),r=parseInt(yt.apply(void 0,e.map(function(o){return o===Gs?ad:o})),16);return{type:30,start:i,end:r}}var s=parseInt(yt.apply(void 0,e),16);if(this.peekCodePoint(0)===cA&&Ii(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];Ii(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var r=parseInt(yt.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Os?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Os?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},n.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===XA)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Ns||t===Ps){var A=this.consumeStringToken(this.consumeCodePoint());return A.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===XA||this.peekCodePoint(0)===_r)?(this.consumeCodePoint(),{type:22,value:A.value}):(this.consumeBadUrlRemnants(),Ks)}for(;;){var i=this.consumeCodePoint();if(i===XA||i===_r)return{type:22,value:yt.apply(void 0,e)};if(Vs(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===XA||this.peekCodePoint(0)===_r?(this.consumeCodePoint(),{type:22,value:yt.apply(void 0,e)}):(this.consumeBadUrlRemnants(),Ks);if(i===Ps||i===Ns||i===Os||Rv(i))return this.consumeBadUrlRemnants(),Ks;if(i===Ir)if(Ln(i,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Ks;else e.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;Vs(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===_r||e===XA)return;Ln(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(e){for(var t=5e4,A="";e>0;){var i=Math.min(t,e);A+=yt.apply(void 0,this._value.splice(0,i)),e-=i}return this._value.shift(),A},n.prototype.consumeStringToken=function(e){var t="",A=0;do{var i=this._value[A];if(i===XA||i===void 0||i===e)return t+=this.consumeStringSlice(A),{type:0,value:t};if(i===pa)return this._value.splice(0,A),Yv;if(i===Ir){var r=this._value[A+1];r!==XA&&r!==void 0&&(r===pa?(t+=this.consumeStringSlice(A),A=-1,this._value.shift()):Ln(i,r)&&(t+=this.consumeStringSlice(A),t+=yt(this.consumeEscapedCodePoint()),A=-1))}A++}while(!0)},n.prototype.consumeNumber=function(){var e=[],t=jr,A=this.peekCodePoint(0);for((A===oi||A===cA)&&e.push(this.consumeCodePoint());qt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(A===zr&&qt(i))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=wu;qt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());A=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((A===sd||A===id)&&((i===oi||i===cA)&&qt(r)||qt(i)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=wu;qt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[Dv(e),t]},n.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],A=e[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(ks(i,r,s)){var a=this.consumeName();return{type:15,number:t,flags:A,unit:a}}return i===nv?(this.consumeCodePoint(),{type:16,number:t,flags:A}):{type:17,number:t,flags:A}},n.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Ii(e)){for(var t=yt(e);Ii(this.peekCodePoint(0))&&t.length<6;)t+=yt(this.consumeCodePoint());Vs(this.peekCodePoint(0))&&this.consumeCodePoint();var A=parseInt(t,16);return A===0||bv(A)||A>1114111?vu:A}return e===XA?vu:e},n.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(Cu(t))e+=yt(t);else if(Ln(t,this.peekCodePoint(0)))e+=yt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},n})(),ld=(function(){function n(e){this._tokens=e}return n.create=function(e){var t=new od;return t.write(e),new n(t.read())},n.parseValue=function(e){return n.create(e).parseComponentValue()},n.parseValues=function(e){return n.create(e).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},n.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},n.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},A=this.consumeToken();;){if(A.type===32||AC(A,e))return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue()),A=this.consumeToken()}},n.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var A=this.consumeToken();if(A.type===32||A.type===3)return t;this.reconsumeToken(A),t.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?tc:e},n.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},n})(),es=function(n){return n.type===15},Ta=function(n){return n.type===17},Ct=function(n){return n.type===20},Ac=function(n,e){return Ct(n)&&n.value===e},Qa=function(n){return n.type!==31&&n.type!==4},nn=function(n){var e=[],t=[];return n.forEach(function(A){if(A.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}A.type!==31&&t.push(A)}),t.length&&e.push(t),e},AC=function(n,e){return e===11&&n.type===12||e===28&&n.type===29?!0:e===2&&n.type===3},Vn=function(n){return n.type===17||n.type===15},It=function(n){return n.type===16||Vn(n)},cd=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},Wt={type:17,number:0,flags:jr},Uc={type:16,number:50,flags:jr},Pn={type:16,number:100,flags:jr},br=function(n,e,t){var A=n[0],i=n[1];return[dt(A,e),dt(typeof i<"u"?i:A,t)]},dt=function(n,e){if(n.type===16)return n.number/100*e;if(es(n))switch(n.unit){case"rem":case"em":return 16*n.number;default:return n.number}return n.number},hd="deg",ud="grad",fd="rad",dd="turn",Ia={name:"angle",parse:function(n,e){if(e.type===15)switch(e.unit){case hd:return Math.PI*e.number/180;case ud:return Math.PI/200*e.number;case fd:return e.number;case dd:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},pd=function(n){return n.type===15&&(n.unit===hd||n.unit===ud||n.unit===fd||n.unit===dd)},gd=function(n){var e=n.filter(Ct).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Wt,Wt];case"to top":case"bottom":return TA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Wt,Pn];case"to right":case"left":return TA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Pn,Pn];case"to bottom":case"top":return TA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Pn,Wt];case"to left":case"right":return TA(270)}return 0},TA=function(n){return Math.PI*n/180},On={name:"color",parse:function(n,e){if(e.type===18){var t=nC[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(n,e.values)}if(e.type===5){if(e.value.length===3){var A=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3);return Nn(parseInt(A+A,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(e.value.length===4){var A=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3),s=e.value.substring(3,4);return Nn(parseInt(A+A,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(e.value.length===6){var A=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6);return Nn(parseInt(A,16),parseInt(i,16),parseInt(r,16),1)}if(e.value.length===8){var A=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6),s=e.value.substring(6,8);return Nn(parseInt(A,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(e.type===20){var a=Wr[e.value.toUpperCase()];if(typeof a<"u")return a}return Wr.TRANSPARENT}},zi=function(n){return(255&n)===0},Ot=function(n){var e=255&n,t=255&n>>8,A=255&n>>16,i=255&n>>24;return e<255?"rgba("+i+","+A+","+t+","+e/255+")":"rgb("+i+","+A+","+t+")"},Nn=function(n,e,t,A){return(n<<24|e<<16|t<<8|Math.round(A*255)<<0)>>>0},Eu=function(n,e){if(n.type===17)return n.number;if(n.type===16){var t=e===3?1:255;return e===3?n.number/100*t:Math.round(n.number/100*t)}return 0},yu=function(n,e){var t=e.filter(Qa);if(t.length===3){var A=t.map(Eu),i=A[0],r=A[1],s=A[2];return Nn(i,r,s,1)}if(t.length===4){var a=t.map(Eu),i=a[0],r=a[1],s=a[2],o=a[3];return Nn(i,r,s,o)}return 0};function Do(n,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-n)*t*6+n:t<1/2?e:t<2/3?(e-n)*6*(2/3-t)+n:n}var Mu=function(n,e){var t=e.filter(Qa),A=t[0],i=t[1],r=t[2],s=t[3],a=(A.type===17?TA(A.number):Ia.parse(n,A))/(Math.PI*2),o=It(i)?i.number/100:0,l=It(r)?r.number/100:0,c=typeof s<"u"&&It(s)?dt(s,1):1;if(o===0)return Nn(l*255,l*255,l*255,1);var h=l<=.5?l*(o+1):l+o-l*o,u=l*2-h,d=Do(u,h,a+1/3),g=Do(u,h,a),B=Do(u,h,a-1/3);return Nn(d*255,g*255,B*255,c)},nC={hsl:Mu,hsla:Mu,rgb:yu,rgba:yu},Uu=function(n,e){return On.parse(n,ld.create(e).parseComponentValue())},Wr={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},iC={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,e){return e.map(function(t){if(Ct(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},rC={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},La=function(n,e){var t=On.parse(n,e[0]),A=e[1];return A&&It(A)?{color:t,stop:A}:{color:t,stop:null}},Su=function(n,e){var t=n[0],A=n[n.length-1];t.stop===null&&(t.stop=Wt),A.stop===null&&(A.stop=Pn);for(var i=[],r=0,s=0;s<n.length;s++){var a=n[s].stop;if(a!==null){var o=dt(a,e);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var h=s-l,u=i[l-1],d=(c-u)/(h+1),g=1;g<=h;g++)i[l+g-1]=d*g;l=null}}return n.map(function(B,p){var f=B.color;return{color:f,stop:Math.max(Math.min(1,i[p]/e),0)}})},sC=function(n,e,t){var A=e/2,i=t/2,r=dt(n[0],e)-A,s=i-dt(n[1],t);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},aC=function(n,e,t){var A=typeof n=="number"?n:sC(n,e,t),i=Math.abs(e*Math.sin(A))+Math.abs(t*Math.cos(A)),r=e/2,s=t/2,a=i/2,o=Math.sin(A-Math.PI/2)*a,l=Math.cos(A-Math.PI/2)*a;return[i,r-l,r+l,s-o,s+o]},HA=function(n,e){return Math.sqrt(n*n+e*e)},Fu=function(n,e,t,A,i){var r=[[0,0],[0,e],[n,0],[n,e]];return r.reduce(function(s,a){var o=a[0],l=a[1],c=HA(t-o,A-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},oC=function(n,e,t,A,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-i)):n.shape===1&&(r=Math.min(Math.abs(e),Math.abs(e-A)),s=Math.min(Math.abs(t),Math.abs(t-i)));break;case 2:if(n.shape===0)r=s=Math.min(HA(e,t),HA(e,t-i),HA(e-A,t),HA(e-A,t-i));else if(n.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-i))/Math.min(Math.abs(e),Math.abs(e-A)),o=Fu(A,i,e,t,!0),l=o[0],c=o[1];r=HA(l-e,(c-t)/a),s=a*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(e),Math.abs(e-A),Math.abs(t),Math.abs(t-i)):n.shape===1&&(r=Math.max(Math.abs(e),Math.abs(e-A)),s=Math.max(Math.abs(t),Math.abs(t-i)));break;case 3:if(n.shape===0)r=s=Math.max(HA(e,t),HA(e,t-i),HA(e-A,t),HA(e-A,t-i));else if(n.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-i))/Math.max(Math.abs(e),Math.abs(e-A)),h=Fu(A,i,e,t,!1),l=h[0],c=h[1];r=HA(l-e,(c-t)/a),s=a*r}break}return Array.isArray(n.size)&&(r=dt(n.size[0],A),s=n.size.length===2?dt(n.size[1],i):r),[r,s]},lC=function(n,e){var t=TA(180),A=[];return nn(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){t=gd(i);return}else if(pd(s)){t=Ia.parse(n,s);return}}var a=La(n,i);A.push(a)}),{angle:t,stops:A,type:1}},zs=function(n,e){var t=TA(180),A=[];return nn(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){t=gd(i);return}else if(pd(s)){t=(Ia.parse(n,s)+TA(270))%TA(360);return}}var a=La(n,i);A.push(a)}),{angle:t,stops:A,type:1}},cC=function(n,e){var t=TA(180),A=[],i=1,r=0,s=3,a=[];return nn(e).forEach(function(o,l){var c=o[0];if(l===0){if(Ct(c)&&c.value==="linear"){i=1;return}else if(Ct(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var h=On.parse(n,c.values[0]);A.push({stop:Wt,color:h})}else if(c.name==="to"){var h=On.parse(n,c.values[0]);A.push({stop:Pn,color:h})}else if(c.name==="color-stop"){var u=c.values.filter(Qa);if(u.length===2){var h=On.parse(n,u[1]),d=u[0];Ta(d)&&A.push({stop:{type:16,number:d.number*100,flags:d.flags},color:h})}}}}),i===1?{angle:(t+TA(180))%TA(360),stops:A,type:i}:{size:s,shape:r,stops:A,position:a,type:i}},md="closest-side",Bd="farthest-side",wd="closest-corner",_d="farthest-corner",xd="circle",vd="ellipse",Cd="cover",Ed="contain",hC=function(n,e){var t=0,A=3,i=[],r=[];return nn(e).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(h,u){if(l)if(Ct(u))switch(u.value){case"center":return r.push(Uc),h;case"top":case"left":return r.push(Wt),h;case"right":case"bottom":return r.push(Pn),h}else(It(u)||Vn(u))&&r.push(u);else if(Ct(u))switch(u.value){case xd:return t=0,!1;case vd:return t=1,!1;case"at":return l=!0,!1;case md:return A=0,!1;case Cd:case Bd:return A=1,!1;case Ed:case wd:return A=2,!1;case _d:return A=3,!1}else if(Vn(u)||It(u))return Array.isArray(A)||(A=[]),A.push(u),!1;return h},o)}if(o){var c=La(n,s);i.push(c)}}),{size:A,shape:t,stops:i,position:r,type:2}},Ws=function(n,e){var t=0,A=3,i=[],r=[];return nn(e).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,h){if(Ct(h))switch(h.value){case"center":return r.push(Uc),!1;case"top":case"left":return r.push(Wt),!1;case"right":case"bottom":return r.push(Pn),!1}else if(It(h)||Vn(h))return r.push(h),!1;return c},o):a===1&&(o=s.reduce(function(c,h){if(Ct(h))switch(h.value){case xd:return t=0,!1;case vd:return t=1,!1;case Ed:case md:return A=0,!1;case Bd:return A=1,!1;case wd:return A=2,!1;case Cd:case _d:return A=3,!1}else if(Vn(h)||It(h))return Array.isArray(A)||(A=[]),A.push(h),!1;return c},o)),o){var l=La(n,s);i.push(l)}}),{size:A,shape:t,stops:i,position:r,type:2}},uC=function(n){return n.type===1},fC=function(n){return n.type===2},Sc={name:"image",parse:function(n,e){if(e.type===22){var t={url:e.value,type:0};return n.cache.addImage(e.value),t}if(e.type===18){var A=yd[e.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return A(n,e.values)}throw new Error("Unsupported image type "+e.type)}};function dC(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!yd[n.name])}var yd={"linear-gradient":lC,"-moz-linear-gradient":zs,"-ms-linear-gradient":zs,"-o-linear-gradient":zs,"-webkit-linear-gradient":zs,"radial-gradient":hC,"-moz-radial-gradient":Ws,"-ms-radial-gradient":Ws,"-o-radial-gradient":Ws,"-webkit-radial-gradient":Ws,"-webkit-gradient":cC},pC={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(A){return Qa(A)&&dC(A)}).map(function(A){return Sc.parse(n,A)})}},gC={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,e){return e.map(function(t){if(Ct(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},mC={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,e){return nn(e).map(function(t){return t.filter(It)}).map(cd)}},BC={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,e){return nn(e).map(function(t){return t.filter(Ct).map(function(A){return A.value}).join(" ")}).map(wC)}},wC=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;default:return 0}},Wi;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(Wi||(Wi={}));var _C={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,e){return nn(e).map(function(t){return t.filter(xC)})}},xC=function(n){return Ct(n)||It(n)},Ra=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},vC=Ra("top"),CC=Ra("right"),EC=Ra("bottom"),yC=Ra("left"),Da=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return cd(t.filter(It))}}},MC=Da("top-left"),UC=Da("top-right"),SC=Da("bottom-right"),FC=Da("bottom-left"),Ha=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},bC=Ha("top"),TC=Ha("right"),QC=Ha("bottom"),IC=Ha("left"),Pa=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return es(t)?t.number:0}}},LC=Pa("top"),RC=Pa("right"),DC=Pa("bottom"),HC=Pa("left"),PC={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},NC={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,e){return e==="rtl"?1:0}},OC={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,e){return e.filter(Ct).reduce(function(t,A){return t|GC(A.value)},0)}},GC=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},VC={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},kC={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},ma;(function(n){n.NORMAL="normal",n.STRICT="strict"})(ma||(ma={}));var KC={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){return e==="strict"?ma.STRICT:ma.NORMAL}},zC={name:"line-height",initialValue:"normal",prefix:!1,type:4},bu=function(n,e){return Ct(n)&&n.value==="normal"?1.2*e:n.type===17?e*n.number:It(n)?dt(n,e):e},WC={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,e){return e.type===20&&e.value==="none"?null:Sc.parse(n,e)}},XC={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,e){return e==="inside"?0:1}},YC={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;default:return-1}}},Na=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},ZC=Na("top"),JC=Na("right"),qC=Na("bottom"),$C=Na("left"),jC={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,e){return e.filter(Ct).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;default:return 0}})}},eE={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){return e==="break-word"?"break-word":"normal"}},Oa=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},tE=Oa("top"),AE=Oa("right"),nE=Oa("bottom"),iE=Oa("left"),rE={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,e){switch(e){case"right":return 2;case"center":case"justify":return 1;default:return 0}}},sE={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},aE={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.length===1&&Ac(e[0],"none")?[]:nn(e).map(function(t){for(var A={color:Wr.TRANSPARENT,offsetX:Wt,offsetY:Wt,blur:Wt},i=0,r=0;r<t.length;r++){var s=t[r];Vn(s)?(i===0?A.offsetX=s:i===1?A.offsetY=s:A.blur=s,i++):A.color=On.parse(n,s)}return A})}},oE={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},lE={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=uE[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},cE=function(n){var e=n.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},hE=function(n){var e=n.filter(function(o){return o.type===17}).map(function(o){return o.number}),t=e[0],A=e[1];e[2],e[3];var i=e[4],r=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],a=e[13];return e[14],e[15],e.length===16?[t,A,i,r,s,a]:null},uE={matrix:cE,matrix3d:hE},Tu={type:16,number:50,flags:jr},fE=[Tu,Tu],dE={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,e){var t=e.filter(It);return t.length!==2?fE:[t[0],t[1]]}},pE={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,e){switch(e){case"hidden":return 1;case"collapse":return 2;default:return 0}}},Lr;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(Lr||(Lr={}));var gE={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"break-all":return Lr.BREAK_ALL;case"keep-all":return Lr.KEEP_ALL;default:return Lr.NORMAL}}},mE={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,e){if(e.type===20)return{auto:!0,order:0};if(Ta(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Md={name:"time",parse:function(n,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},BE={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,e){return Ta(e)?e.number:1}},wE={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},_E={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,e){return e.filter(Ct).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},xE={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,e){var t=[],A=[];return e.forEach(function(i){switch(i.type){case 20:case 0:t.push(i.value);break;case 17:t.push(i.number.toString());break;case 4:A.push(t.join(" ")),t.length=0;break}}),t.length&&A.push(t.join(" ")),A.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},vE={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},CE={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,e){return Ta(e)?e.number:Ct(e)&&e.value==="bold"?700:400}},EE={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.filter(Ct).map(function(t){return t.value})}},yE={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";default:return"normal"}}},Rt=function(n,e){return(n&e)!==0},ME={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,e){return e.filter(es).map(function(t){return Md.parse(n,t)})}},UE={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,e){return e.length===1&&Ac(e[0],"none")?[]:nn(e).map(function(t){for(var A={color:255,offsetX:Wt,offsetY:Wt,blur:Wt,spread:Wt,inset:!1},i=0,r=0;r<t.length;r++){var s=t[r];Ac(s,"inset")?A.inset=!0:Vn(s)?(i===0?A.offsetX=s:i===1?A.offsetY=s:i===2?A.blur=s:A.spread=s,i++):A.color=On.parse(n,s)}return A})}},SE={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,e){var t=[0,1,2],A=[];return e.filter(Ct).forEach(function(i){switch(i.value){case"stroke":A.push(1);break;case"fill":A.push(0);break;case"markers":A.push(2);break}}),t.forEach(function(i){A.indexOf(i)===-1&&A.push(i)}),A}},FE={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},bE={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,e){return es(e)?e.number:0}},TE=(function(){function n(e,t){var A,i;this.animationDuration=Be(e,ME,t.animationDuration),this.backgroundClip=Be(e,iC,t.backgroundClip),this.backgroundColor=Be(e,rC,t.backgroundColor),this.backgroundImage=Be(e,pC,t.backgroundImage),this.backgroundOrigin=Be(e,gC,t.backgroundOrigin),this.backgroundPosition=Be(e,mC,t.backgroundPosition),this.backgroundRepeat=Be(e,BC,t.backgroundRepeat),this.backgroundSize=Be(e,_C,t.backgroundSize),this.borderTopColor=Be(e,vC,t.borderTopColor),this.borderRightColor=Be(e,CC,t.borderRightColor),this.borderBottomColor=Be(e,EC,t.borderBottomColor),this.borderLeftColor=Be(e,yC,t.borderLeftColor),this.borderTopLeftRadius=Be(e,MC,t.borderTopLeftRadius),this.borderTopRightRadius=Be(e,UC,t.borderTopRightRadius),this.borderBottomRightRadius=Be(e,SC,t.borderBottomRightRadius),this.borderBottomLeftRadius=Be(e,FC,t.borderBottomLeftRadius),this.borderTopStyle=Be(e,bC,t.borderTopStyle),this.borderRightStyle=Be(e,TC,t.borderRightStyle),this.borderBottomStyle=Be(e,QC,t.borderBottomStyle),this.borderLeftStyle=Be(e,IC,t.borderLeftStyle),this.borderTopWidth=Be(e,LC,t.borderTopWidth),this.borderRightWidth=Be(e,RC,t.borderRightWidth),this.borderBottomWidth=Be(e,DC,t.borderBottomWidth),this.borderLeftWidth=Be(e,HC,t.borderLeftWidth),this.boxShadow=Be(e,UE,t.boxShadow),this.color=Be(e,PC,t.color),this.direction=Be(e,NC,t.direction),this.display=Be(e,OC,t.display),this.float=Be(e,VC,t.cssFloat),this.fontFamily=Be(e,xE,t.fontFamily),this.fontSize=Be(e,vE,t.fontSize),this.fontStyle=Be(e,yE,t.fontStyle),this.fontVariant=Be(e,EE,t.fontVariant),this.fontWeight=Be(e,CE,t.fontWeight),this.letterSpacing=Be(e,kC,t.letterSpacing),this.lineBreak=Be(e,KC,t.lineBreak),this.lineHeight=Be(e,zC,t.lineHeight),this.listStyleImage=Be(e,WC,t.listStyleImage),this.listStylePosition=Be(e,XC,t.listStylePosition),this.listStyleType=Be(e,YC,t.listStyleType),this.marginTop=Be(e,ZC,t.marginTop),this.marginRight=Be(e,JC,t.marginRight),this.marginBottom=Be(e,qC,t.marginBottom),this.marginLeft=Be(e,$C,t.marginLeft),this.opacity=Be(e,BE,t.opacity);var r=Be(e,jC,t.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=Be(e,eE,t.overflowWrap),this.paddingTop=Be(e,tE,t.paddingTop),this.paddingRight=Be(e,AE,t.paddingRight),this.paddingBottom=Be(e,nE,t.paddingBottom),this.paddingLeft=Be(e,iE,t.paddingLeft),this.paintOrder=Be(e,SE,t.paintOrder),this.position=Be(e,sE,t.position),this.textAlign=Be(e,rE,t.textAlign),this.textDecorationColor=Be(e,wE,(A=t.textDecorationColor)!==null&&A!==void 0?A:t.color),this.textDecorationLine=Be(e,_E,(i=t.textDecorationLine)!==null&&i!==void 0?i:t.textDecoration),this.textShadow=Be(e,aE,t.textShadow),this.textTransform=Be(e,oE,t.textTransform),this.transform=Be(e,lE,t.transform),this.transformOrigin=Be(e,dE,t.transformOrigin),this.visibility=Be(e,pE,t.visibility),this.webkitTextStrokeColor=Be(e,FE,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=Be(e,bE,t.webkitTextStrokeWidth),this.wordBreak=Be(e,gE,t.wordBreak),this.zIndex=Be(e,mE,t.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return zi(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return Rt(this.display,4)||Rt(this.display,33554432)||Rt(this.display,268435456)||Rt(this.display,536870912)||Rt(this.display,67108864)||Rt(this.display,134217728)},n})(),Be=function(n,e,t){var A=new od,i=t!==null&&typeof t<"u"?t.toString():e.initialValue;A.write(i);var r=new ld(A.read());switch(e.type){case 2:var s=r.parseComponentValue();return e.parse(n,Ct(s)?s.value:e.initialValue);case 0:return e.parse(n,r.parseComponentValue());case 1:return e.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(e.format){case"angle":return Ia.parse(n,r.parseComponentValue());case"color":return On.parse(n,r.parseComponentValue());case"image":return Sc.parse(n,r.parseComponentValue());case"length":var a=r.parseComponentValue();return Vn(a)?a:Wt;case"length-percentage":var o=r.parseComponentValue();return It(o)?o:Wt;case"time":return Md.parse(n,r.parseComponentValue())}break}},QE="data-html2canvas-debug",IE=function(n){var e=n.getAttribute(QE);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Qu=function(n,e){var t=IE(n);return t===1||e===t},rn=(function(){function n(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Qu(t,3))debugger;this.styles=new TE(e,window.getComputedStyle(t,null)),Iy(t)&&(this.styles.animationDuration.some(function(A){return A>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=yc(this.context,t),Qu(t,4)&&(this.flags|=16)}return n})(),LE="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Iu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Tr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Xs=0;Xs<Iu.length;Xs++)Tr[Iu.charCodeAt(Xs)]=Xs;var RE=function(n){var e=n.length*.75,t=n.length,A,i=0,r,s,a,o;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(A=0;A<t;A+=4)r=Tr[n.charCodeAt(A)],s=Tr[n.charCodeAt(A+1)],a=Tr[n.charCodeAt(A+2)],o=Tr[n.charCodeAt(A+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},DE=function(n){for(var e=n.length,t=[],A=0;A<e;A+=2)t.push(n[A+1]<<8|n[A]);return t},HE=function(n){for(var e=n.length,t=[],A=0;A<e;A+=4)t.push(n[A+3]<<24|n[A+2]<<16|n[A+1]<<8|n[A]);return t},ci=5,Fc=11,Ho=2,PE=Fc-ci,Ud=65536>>ci,NE=1<<ci,Po=NE-1,OE=1024>>ci,GE=Ud+OE,VE=GE,kE=32,KE=VE+kE,zE=65536>>Fc,WE=1<<PE,XE=WE-1,Lu=function(n,e,t){return n.slice?n.slice(e,t):new Uint16Array(Array.prototype.slice.call(n,e,t))},YE=function(n,e,t){return n.slice?n.slice(e,t):new Uint32Array(Array.prototype.slice.call(n,e,t))},ZE=function(n,e){var t=RE(n),A=Array.isArray(t)?HE(t):new Uint32Array(t),i=Array.isArray(t)?DE(t):new Uint16Array(t),r=24,s=Lu(i,r/2,A[4]/2),a=A[5]===2?Lu(i,(r+A[4])/2):YE(A,Math.ceil((r+A[4])/4));return new JE(A[0],A[1],A[2],A[3],s,a)},JE=(function(){function n(e,t,A,i,r,s){this.initialValue=e,this.errorValue=t,this.highStart=A,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>ci],t=(t<<Ho)+(e&Po),this.data[t];if(e<=65535)return t=this.index[Ud+(e-55296>>ci)],t=(t<<Ho)+(e&Po),this.data[t];if(e<this.highStart)return t=KE-zE+(e>>Fc),t=this.index[t],t+=e>>ci&XE,t=this.index[t],t=(t<<Ho)+(e&Po),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n})(),Ru="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qE=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ys=0;Ys<Ru.length;Ys++)qE[Ru.charCodeAt(Ys)]=Ys;var $E=1,No=2,Oo=3,Du=4,Hu=5,jE=7,Pu=8,Go=9,Vo=10,Nu=11,Ou=12,Gu=13,Vu=14,ko=15,ey=function(n){for(var e=[],t=0,A=n.length;t<A;){var i=n.charCodeAt(t++);if(i>=55296&&i<=56319&&t<A){var r=n.charCodeAt(t++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},ty=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var t=n.length;if(!t)return"";for(var A=[],i=-1,r="";++i<t;){var s=n[i];s<=65535?A.push(s):(s-=65536,A.push((s>>10)+55296,s%1024+56320)),(i+1===t||A.length>16384)&&(r+=String.fromCharCode.apply(String,A),A.length=0)}return r},Ay=ZE(LE),UA="×",Ko="÷",ny=function(n){return Ay.get(n)},iy=function(n,e,t){var A=t-2,i=e[A],r=e[t-1],s=e[t];if(r===No&&s===Oo)return UA;if(r===No||r===Oo||r===Du||s===No||s===Oo||s===Du)return Ko;if(r===Pu&&[Pu,Go,Nu,Ou].indexOf(s)!==-1||(r===Nu||r===Go)&&(s===Go||s===Vo)||(r===Ou||r===Vo)&&s===Vo||s===Gu||s===Hu||s===jE||r===$E)return UA;if(r===Gu&&s===Vu){for(;i===Hu;)i=e[--A];if(i===Vu)return UA}if(r===ko&&s===ko){for(var a=0;i===ko;)a++,i=e[--A];if(a%2===0)return UA}return Ko},ry=function(n){var e=ey(n),t=e.length,A=0,i=0,r=e.map(ny);return{next:function(){if(A>=t)return{done:!0,value:null};for(var s=UA;A<t&&(s=iy(e,r,++A))===UA;);if(s!==UA||A===t){var a=ty.apply(null,e.slice(i,A));return i=A,{value:a,done:!1}}return{done:!0,value:null}}}},sy=function(n){for(var e=ry(n),t=[],A;!(A=e.next()).done;)A.value&&t.push(A.value.slice());return t},ay=function(n){var e=123;if(n.createRange){var t=n.createRange();if(t.getBoundingClientRect){var A=n.createElement("boundtest");A.style.height=e+"px",A.style.display="block",n.body.appendChild(A),t.selectNode(A);var i=t.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(A),r===e)return!0}}return!1},oy=function(n){var e=n.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",n.body.appendChild(e);var t=n.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var A=e.firstChild,i=ba(A.data).map(function(o){return yt(o)}),r=0,s={},a=i.every(function(o,l){t.setStart(A,r),t.setEnd(A,r+o.length);var c=t.getBoundingClientRect();r+=o.length;var h=c.x>s.x||c.y>s.y;return s=c,l===0?!0:h});return n.body.removeChild(e),a},ly=function(){return typeof new Image().crossOrigin<"u"},cy=function(){return typeof new XMLHttpRequest().responseType=="string"},hy=function(n){var e=new Image,t=n.createElement("canvas"),A=t.getContext("2d");if(!A)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{A.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},ku=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},uy=function(n){var e=n.createElement("canvas"),t=100;e.width=t,e.height=t;var A=e.getContext("2d");if(!A)return Promise.reject(!1);A.fillStyle="rgb(0, 255, 0)",A.fillRect(0,0,t,t);var i=new Image,r=e.toDataURL();i.src=r;var s=nc(t,t,0,0,i);return A.fillStyle="red",A.fillRect(0,0,t,t),Ku(s).then(function(a){A.drawImage(a,0,0);var o=A.getImageData(0,0,t,t).data;A.fillStyle="red",A.fillRect(0,0,t,t);var l=n.createElement("div");return l.style.backgroundImage="url("+r+")",l.style.height=t+"px",ku(o)?Ku(nc(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return A.drawImage(a,0,0),ku(A.getImageData(0,0,t,t).data)}).catch(function(){return!1})},nc=function(n,e,t,A,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",A.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},Ku=function(n){return new Promise(function(e,t){var A=new Image;A.onload=function(){return e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},_A={get SUPPORT_RANGE_BOUNDS(){var n=ay(document);return Object.defineProperty(_A,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=_A.SUPPORT_RANGE_BOUNDS&&oy(document);return Object.defineProperty(_A,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=hy(document);return Object.defineProperty(_A,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?uy(document):Promise.resolve(!1);return Object.defineProperty(_A,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=ly();return Object.defineProperty(_A,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=cy();return Object.defineProperty(_A,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(_A,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(_A,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},Rr=(function(){function n(e,t){this.text=e,this.bounds=t}return n})(),fy=function(n,e,t,A){var i=gy(e,t),r=[],s=0;return i.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(_A.SUPPORT_RANGE_BOUNDS){var o=zu(A,s,a.length).getClientRects();if(o.length>1){var l=bc(a),c=0;l.forEach(function(u){r.push(new Rr(u,fi.fromDOMRectList(n,zu(A,c+s,u.length).getClientRects()))),c+=u.length})}else r.push(new Rr(a,fi.fromDOMRectList(n,o)))}else{var h=A.splitText(a.length);r.push(new Rr(a,dy(n,A))),A=h}else _A.SUPPORT_RANGE_BOUNDS||(A=A.splitText(a.length));s+=a.length}),r},dy=function(n,e){var t=e.ownerDocument;if(t){var A=t.createElement("html2canvaswrapper");A.appendChild(e.cloneNode(!0));var i=e.parentNode;if(i){i.replaceChild(A,e);var r=yc(n,A);return A.firstChild&&i.replaceChild(A.firstChild,A),r}}return fi.EMPTY},zu=function(n,e,t){var A=n.ownerDocument;if(!A)throw new Error("Node has no owner document");var i=A.createRange();return i.setStart(n,e),i.setEnd(n,e+t),i},bc=function(n){if(_A.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(n)).map(function(t){return t.segment})}return sy(n)},py=function(n,e){if(_A.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(n)).map(function(A){return A.segment})}return By(n,e)},gy=function(n,e){return e.letterSpacing!==0?bc(n):py(n,e)},my=[32,160,4961,65792,65793,4153,4241],By=function(n,e){for(var t=Jx(n,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),A=[],i,r=function(){if(i.value){var s=i.value.slice(),a=ba(s),o="";a.forEach(function(l){my.indexOf(l)===-1?o+=yt(l):(o.length&&A.push(o),A.push(yt(l)),o="")}),o.length&&A.push(o)}};!(i=t.next()).done;)r();return A},wy=(function(){function n(e,t,A){this.text=_y(t.data,A.textTransform),this.textBounds=fy(e,this.text,A,t)}return n})(),_y=function(n,e){switch(e){case 1:return n.toLowerCase();case 3:return n.replace(xy,vy);case 2:return n.toUpperCase();default:return n}},xy=/(^|\s|:|-|\(|\))([a-z])/g,vy=function(n,e,t){return n.length>0?e+t.toUpperCase():n},Sd=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.src=A.currentSrc||A.src,i.intrinsicWidth=A.naturalWidth,i.intrinsicHeight=A.naturalHeight,i.context.cache.addImage(i.src),i}return e})(rn),Fd=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.canvas=A,i.intrinsicWidth=A.width,i.intrinsicHeight=A.height,i}return e})(rn),bd=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this,r=new XMLSerializer,s=yc(t,A);return A.setAttribute("width",s.width+"px"),A.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(A)),i.intrinsicWidth=A.width.baseVal.value,i.intrinsicHeight=A.height.baseVal.value,i.context.cache.addImage(i.svg),i}return e})(rn),Td=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.value=A.value,i}return e})(rn),ic=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.start=A.start,i.reversed=typeof A.reversed=="boolean"&&A.reversed===!0,i}return e})(rn),Cy=[{type:15,flags:0,unit:"px",number:3}],Ey=[{type:16,flags:0,number:50}],yy=function(n){return n.width>n.height?new fi(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new fi(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},My=function(n){var e=n.type===Uy?new Array(n.value.length+1).join("•"):n.value;return e.length===0?n.placeholder||"":e},Ba="checkbox",wa="radio",Uy="password",Wu=707406591,Tc=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;switch(i.type=A.type.toLowerCase(),i.checked=A.checked,i.value=My(A),(i.type===Ba||i.type===wa)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=yy(i.bounds)),i.type){case Ba:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=Cy;break;case wa:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=Ey;break}return i}return e})(rn),Qd=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this,r=A.options[A.selectedIndex||0];return i.value=r&&r.text||"",i}return e})(rn),Id=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.value=A.value,i}return e})(rn),Ld=(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;i.src=A.src,i.width=parseInt(A.width,10)||0,i.height=parseInt(A.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(A.contentWindow&&A.contentWindow.document&&A.contentWindow.document.documentElement){i.tree=Fy(t,A.contentWindow.document.documentElement);var r=A.contentWindow.document.documentElement?Uu(t,getComputedStyle(A.contentWindow.document.documentElement).backgroundColor):Wr.TRANSPARENT,s=A.contentWindow.document.body?Uu(t,getComputedStyle(A.contentWindow.document.body).backgroundColor):Wr.TRANSPARENT;i.backgroundColor=zi(r)?zi(s)?i.styles.backgroundColor:s:r}}catch{}return i}return e})(rn),Sy=["OL","UL","MENU"],la=function(n,e,t,A){for(var i=e.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,Qy(i)&&i.data.trim().length>0)t.textNodes.push(new wy(n,i,t.styles));else if(Dd(i))if(Vy(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return la(n,a,t,A)});else{var s=Rd(n,i);s.styles.isVisible()&&(by(i,s,A)?s.flags|=4:Ty(s.styles)&&(s.flags|=2),Sy.indexOf(i.tagName)!==-1&&(s.flags|=8),t.elements.push(s),i.slot,i.shadowRoot?la(n,i.shadowRoot,s,A):!Pd(i)&&!Hd(i)&&!Nd(i)&&la(n,i,s,A))}},Rd=function(n,e){return Oy(e)?new Sd(n,e):Ny(e)?new Fd(n,e):Hd(e)?new bd(n,e):Ry(e)?new Td(n,e):Dy(e)?new ic(n,e):Hy(e)?new Tc(n,e):Nd(e)?new Qd(n,e):Pd(e)?new Id(n,e):Gy(e)?new Ld(n,e):new rn(n,e)},Fy=function(n,e){var t=Rd(n,e);return t.flags|=4,la(n,e,t,t),t},by=function(n,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||Py(n)&&t.styles.isTransparent()},Ty=function(n){return n.isPositioned()||n.isFloating()},Qy=function(n){return n.nodeType===Node.TEXT_NODE},Dd=function(n){return n.nodeType===Node.ELEMENT_NODE},Iy=function(n){return Dd(n)&&typeof n.style<"u"&&!Ly(n)},Ly=function(n){return typeof n.className=="object"},Ry=function(n){return n.tagName==="LI"},Dy=function(n){return n.tagName==="OL"},Hy=function(n){return n.tagName==="INPUT"},Hd=function(n){return n.tagName==="svg"},Py=function(n){return n.tagName==="BODY"},Ny=function(n){return n.tagName==="CANVAS"},Oy=function(n){return n.tagName==="IMG"},Gy=function(n){return n.tagName==="IFRAME"},Pd=function(n){return n.tagName==="TEXTAREA"},Nd=function(n){return n.tagName==="SELECT"},Vy=function(n){return n.tagName==="SLOT"},Xu={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Yu={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},ky={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},Ky={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Li=function(n,e,t,A,i,r){return n<e||n>t?Qc(n,i,r.length>0):A.integers.reduce(function(s,a,o){for(;n>=a;)n-=a,s+=A.values[o];return s},"")+r},Od=function(n,e,t,A){var i="";do t||n--,i=A(n)+i,n/=e;while(n*e>=e);return i},Et=function(n,e,t,A,i){var r=t-e+1;return(n<0?"-":"")+(Od(Math.abs(n),r,A,function(s){return yt(Math.floor(s%r)+e)})+i)},jn=function(n,e,t){t===void 0&&(t=". ");var A=e.length;return Od(Math.abs(n),A,!1,function(i){return e[Math.floor(i%A)]})+t},Hi=1,Tn=2,Qn=4,Qr=8,pn=function(n,e,t,A,i,r){if(n<-9999||n>9999)return Qc(n,4,i.length>0);var s=Math.abs(n),a=i;if(s===0)return e[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&Rt(r,Hi)&&a!==""?a=e[l]+a:l>1||l===1&&o===0||l===1&&o===1&&Rt(r,Tn)||l===1&&o===1&&Rt(r,Qn)&&n>100||l===1&&o>1&&Rt(r,Qr)?a=e[l]+(o>0?t[o-1]:"")+a:l===1&&o>0&&(a=t[o-1]+a),s=Math.floor(s/10)}return(n<0?A:"")+a},Zu="十百千萬",Ju="拾佰仟萬",qu="マイナス",zo="마이너스",Qc=function(n,e,t){var A=t?". ":"",i=t?"、":"",r=t?", ":"",s=t?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=Et(n,48,57,!0,A);return a.length<4?"0"+a:a;case 4:return jn(n,"〇一二三四五六七八九",i);case 6:return Li(n,1,3999,Xu,3,A).toLowerCase();case 7:return Li(n,1,3999,Xu,3,A);case 8:return Et(n,945,969,!1,A);case 9:return Et(n,97,122,!1,A);case 10:return Et(n,65,90,!1,A);case 11:return Et(n,1632,1641,!0,A);case 12:case 49:return Li(n,1,9999,Yu,3,A);case 35:return Li(n,1,9999,Yu,3,A).toLowerCase();case 13:return Et(n,2534,2543,!0,A);case 14:case 30:return Et(n,6112,6121,!0,A);case 15:return jn(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return jn(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return pn(n,"零一二三四五六七八九",Zu,"負",i,Tn|Qn|Qr);case 47:return pn(n,"零壹貳參肆伍陸柒捌玖",Ju,"負",i,Hi|Tn|Qn|Qr);case 42:return pn(n,"零一二三四五六七八九",Zu,"负",i,Tn|Qn|Qr);case 41:return pn(n,"零壹贰叁肆伍陆柒捌玖",Ju,"负",i,Hi|Tn|Qn|Qr);case 26:return pn(n,"〇一二三四五六七八九","十百千万",qu,i,0);case 25:return pn(n,"零壱弐参四伍六七八九","拾百千万",qu,i,Hi|Tn|Qn);case 31:return pn(n,"영일이삼사오육칠팔구","십백천만",zo,r,Hi|Tn|Qn);case 33:return pn(n,"零一二三四五六七八九","十百千萬",zo,r,0);case 32:return pn(n,"零壹貳參四五六七八九","拾百千",zo,r,Hi|Tn|Qn);case 18:return Et(n,2406,2415,!0,A);case 20:return Li(n,1,19999,Ky,3,A);case 21:return Et(n,2790,2799,!0,A);case 22:return Et(n,2662,2671,!0,A);case 22:return Li(n,1,10999,ky,3,A);case 23:return jn(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return jn(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Et(n,3302,3311,!0,A);case 28:return jn(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return jn(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return Et(n,3792,3801,!0,A);case 37:return Et(n,6160,6169,!0,A);case 38:return Et(n,4160,4169,!0,A);case 39:return Et(n,2918,2927,!0,A);case 40:return Et(n,1776,1785,!0,A);case 43:return Et(n,3046,3055,!0,A);case 44:return Et(n,3174,3183,!0,A);case 45:return Et(n,3664,3673,!0,A);case 46:return Et(n,3872,3881,!0,A);default:return Et(n,48,57,!0,A)}},$u;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})($u||($u={}));var zy=(function(){function n(){}return n.getOrigin=function(e){var t=n._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},n.isSameOrigin=function(e){return n.getOrigin(e)===n._origin},n.setContext=function(e){n._link=e.document.createElement("a"),n._origin=n.getOrigin(e.location.href)},n._origin="about:blank",n})(),de=(function(){function n(e,t){this.type=0,this.x=e,this.y=t}return n.prototype.add=function(e,t){return new n(this.x+e,this.y+t)},n})(),Ri=function(n,e,t){return new de(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t)},Zs=(function(){function n(e,t,A,i){this.type=1,this.start=e,this.startControl=t,this.endControl=A,this.end=i}return n.prototype.subdivide=function(e,t){var A=Ri(this.start,this.startControl,e),i=Ri(this.startControl,this.endControl,e),r=Ri(this.endControl,this.end,e),s=Ri(A,i,e),a=Ri(i,r,e),o=Ri(s,a,e);return t?new n(this.start,A,s,o):new n(o,a,r,this.end)},n.prototype.add=function(e,t){return new n(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n})(),FA=function(n){return n.type===1},Wy=(function(){function n(e){var t=e.styles,A=e.bounds,i=br(t.borderTopLeftRadius,A.width,A.height),r=i[0],s=i[1],a=br(t.borderTopRightRadius,A.width,A.height),o=a[0],l=a[1],c=br(t.borderBottomRightRadius,A.width,A.height),h=c[0],u=c[1],d=br(t.borderBottomLeftRadius,A.width,A.height),g=d[0],B=d[1],p=[];p.push((r+o)/A.width),p.push((g+h)/A.width),p.push((s+B)/A.height),p.push((l+u)/A.height);var f=Math.max.apply(Math,p);f>1&&(r/=f,s/=f,o/=f,l/=f,h/=f,u/=f,g/=f,B/=f);var m=A.width-o,_=A.height-u,x=A.width-h,E=A.height-B,C=t.borderTopWidth,M=t.borderRightWidth,F=t.borderBottomWidth,w=t.borderLeftWidth,y=dt(t.paddingTop,e.bounds.width),T=dt(t.paddingRight,e.bounds.width),D=dt(t.paddingBottom,e.bounds.width),Q=dt(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?mt(A.left+w/3,A.top+C/3,r-w/3,s-C/3,tt.TOP_LEFT):new de(A.left+w/3,A.top+C/3),this.topRightBorderDoubleOuterBox=r>0||s>0?mt(A.left+m,A.top+C/3,o-M/3,l-C/3,tt.TOP_RIGHT):new de(A.left+A.width-M/3,A.top+C/3),this.bottomRightBorderDoubleOuterBox=h>0||u>0?mt(A.left+x,A.top+_,h-M/3,u-F/3,tt.BOTTOM_RIGHT):new de(A.left+A.width-M/3,A.top+A.height-F/3),this.bottomLeftBorderDoubleOuterBox=g>0||B>0?mt(A.left+w/3,A.top+E,g-w/3,B-F/3,tt.BOTTOM_LEFT):new de(A.left+w/3,A.top+A.height-F/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?mt(A.left+w*2/3,A.top+C*2/3,r-w*2/3,s-C*2/3,tt.TOP_LEFT):new de(A.left+w*2/3,A.top+C*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?mt(A.left+m,A.top+C*2/3,o-M*2/3,l-C*2/3,tt.TOP_RIGHT):new de(A.left+A.width-M*2/3,A.top+C*2/3),this.bottomRightBorderDoubleInnerBox=h>0||u>0?mt(A.left+x,A.top+_,h-M*2/3,u-F*2/3,tt.BOTTOM_RIGHT):new de(A.left+A.width-M*2/3,A.top+A.height-F*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||B>0?mt(A.left+w*2/3,A.top+E,g-w*2/3,B-F*2/3,tt.BOTTOM_LEFT):new de(A.left+w*2/3,A.top+A.height-F*2/3),this.topLeftBorderStroke=r>0||s>0?mt(A.left+w/2,A.top+C/2,r-w/2,s-C/2,tt.TOP_LEFT):new de(A.left+w/2,A.top+C/2),this.topRightBorderStroke=r>0||s>0?mt(A.left+m,A.top+C/2,o-M/2,l-C/2,tt.TOP_RIGHT):new de(A.left+A.width-M/2,A.top+C/2),this.bottomRightBorderStroke=h>0||u>0?mt(A.left+x,A.top+_,h-M/2,u-F/2,tt.BOTTOM_RIGHT):new de(A.left+A.width-M/2,A.top+A.height-F/2),this.bottomLeftBorderStroke=g>0||B>0?mt(A.left+w/2,A.top+E,g-w/2,B-F/2,tt.BOTTOM_LEFT):new de(A.left+w/2,A.top+A.height-F/2),this.topLeftBorderBox=r>0||s>0?mt(A.left,A.top,r,s,tt.TOP_LEFT):new de(A.left,A.top),this.topRightBorderBox=o>0||l>0?mt(A.left+m,A.top,o,l,tt.TOP_RIGHT):new de(A.left+A.width,A.top),this.bottomRightBorderBox=h>0||u>0?mt(A.left+x,A.top+_,h,u,tt.BOTTOM_RIGHT):new de(A.left+A.width,A.top+A.height),this.bottomLeftBorderBox=g>0||B>0?mt(A.left,A.top+E,g,B,tt.BOTTOM_LEFT):new de(A.left,A.top+A.height),this.topLeftPaddingBox=r>0||s>0?mt(A.left+w,A.top+C,Math.max(0,r-w),Math.max(0,s-C),tt.TOP_LEFT):new de(A.left+w,A.top+C),this.topRightPaddingBox=o>0||l>0?mt(A.left+Math.min(m,A.width-M),A.top+C,m>A.width+M?0:Math.max(0,o-M),Math.max(0,l-C),tt.TOP_RIGHT):new de(A.left+A.width-M,A.top+C),this.bottomRightPaddingBox=h>0||u>0?mt(A.left+Math.min(x,A.width-w),A.top+Math.min(_,A.height-F),Math.max(0,h-M),Math.max(0,u-F),tt.BOTTOM_RIGHT):new de(A.left+A.width-M,A.top+A.height-F),this.bottomLeftPaddingBox=g>0||B>0?mt(A.left+w,A.top+Math.min(E,A.height-F),Math.max(0,g-w),Math.max(0,B-F),tt.BOTTOM_LEFT):new de(A.left+w,A.top+A.height-F),this.topLeftContentBox=r>0||s>0?mt(A.left+w+Q,A.top+C+y,Math.max(0,r-(w+Q)),Math.max(0,s-(C+y)),tt.TOP_LEFT):new de(A.left+w+Q,A.top+C+y),this.topRightContentBox=o>0||l>0?mt(A.left+Math.min(m,A.width+w+Q),A.top+C+y,m>A.width+w+Q?0:o-w+Q,l-(C+y),tt.TOP_RIGHT):new de(A.left+A.width-(M+T),A.top+C+y),this.bottomRightContentBox=h>0||u>0?mt(A.left+Math.min(x,A.width-(w+Q)),A.top+Math.min(_,A.height+C+y),Math.max(0,h-(M+T)),u-(F+D),tt.BOTTOM_RIGHT):new de(A.left+A.width-(M+T),A.top+A.height-(F+D)),this.bottomLeftContentBox=g>0||B>0?mt(A.left+w+Q,A.top+E,Math.max(0,g-(w+Q)),B-(F+D),tt.BOTTOM_LEFT):new de(A.left+w+Q,A.top+A.height-(F+D))}return n})(),tt;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(tt||(tt={}));var mt=function(n,e,t,A,i){var r=4*((Math.sqrt(2)-1)/3),s=t*r,a=A*r,o=n+t,l=e+A;switch(i){case tt.TOP_LEFT:return new Zs(new de(n,l),new de(n,l-a),new de(o-s,e),new de(o,e));case tt.TOP_RIGHT:return new Zs(new de(n,e),new de(n+s,e),new de(o,l-a),new de(o,l));case tt.BOTTOM_RIGHT:return new Zs(new de(o,e),new de(o,e+a),new de(n+s,l),new de(n,l));case tt.BOTTOM_LEFT:default:return new Zs(new de(o,l),new de(o-s,l),new de(n,e+a),new de(n,e))}},_a=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},Xy=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},xa=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},Yy=(function(){function n(e,t,A){this.offsetX=e,this.offsetY=t,this.matrix=A,this.type=0,this.target=6}return n})(),Js=(function(){function n(e,t){this.path=e,this.target=t,this.type=1}return n})(),Zy=(function(){function n(e){this.opacity=e,this.type=2,this.target=6}return n})(),Jy=function(n){return n.type===0},Gd=function(n){return n.type===1},qy=function(n){return n.type===2},ju=function(n,e){return n.length===e.length?n.some(function(t,A){return t===e[A]}):!1},$y=function(n,e,t,A,i){return n.map(function(r,s){switch(s){case 0:return r.add(e,t);case 1:return r.add(e+A,t);case 2:return r.add(e+A,t+i);case 3:return r.add(e,t+i)}return r})},Vd=(function(){function n(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n})(),kd=(function(){function n(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new Wy(this.container),this.container.styles.opacity<1&&this.effects.push(new Zy(this.container.styles.opacity)),this.container.styles.transform!==null){var A=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new Yy(A,i,r))}if(this.container.styles.overflowX!==0){var s=_a(this.curves),a=xa(this.curves);ju(s,a)?this.effects.push(new Js(s,6)):(this.effects.push(new Js(s,2)),this.effects.push(new Js(a,4)))}}return n.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,A=this.parent,i=this.effects.slice(0);A;){var r=A.effects.filter(function(o){return!Gd(o)});if(t||A.container.styles.position!==0||!A.parent){if(i.unshift.apply(i,r),t=[2,3].indexOf(A.container.styles.position)===-1,A.container.styles.overflowX!==0){var s=_a(A.curves),a=xa(A.curves);ju(s,a)||i.unshift(new Js(a,6))}}else i.unshift.apply(i,r);A=A.parent}return i.filter(function(o){return Rt(o.target,e)})},n})(),rc=function(n,e,t,A){n.container.elements.forEach(function(i){var r=Rt(i.flags,4),s=Rt(i.flags,2),a=new kd(i,n);Rt(i.styles.display,2048)&&A.push(a);var o=Rt(i.flags,8)?[]:A;if(r||s){var l=r||i.styles.isPositioned()?t:e,c=new Vd(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var h=i.styles.zIndex.order;if(h<0){var u=0;l.negativeZIndex.some(function(g,B){return h>g.element.container.styles.zIndex.order?(u=B,!1):u>0}),l.negativeZIndex.splice(u,0,c)}else if(h>0){var d=0;l.positiveZIndex.some(function(g,B){return h>=g.element.container.styles.zIndex.order?(d=B+1,!1):d>0}),l.positiveZIndex.splice(d,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);rc(a,c,r?c:t,o)}else i.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),rc(a,e,t,o);Rt(i.flags,8)&&Kd(i,o)})},Kd=function(n,e){for(var t=n instanceof ic?n.start:1,A=n instanceof ic?n.reversed:!1,i=0;i<e.length;i++){var r=e[i];r.container instanceof Td&&typeof r.container.value=="number"&&r.container.value!==0&&(t=r.container.value),r.listValue=Qc(t,r.container.styles.listStyleType,!0),t+=A?-1:1}},jy=function(n){var e=new kd(n,null),t=new Vd(e),A=[];return rc(e,t,t,A),Kd(e.container,A),t},ef=function(n,e){switch(e){case 0:return QA(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return QA(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return QA(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);default:return QA(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},eM=function(n,e){switch(e){case 0:return QA(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return QA(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return QA(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);default:return QA(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},tM=function(n,e){switch(e){case 0:return QA(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return QA(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return QA(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);default:return QA(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},AM=function(n,e){switch(e){case 0:return qs(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return qs(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return qs(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);default:return qs(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},qs=function(n,e){var t=[];return FA(n)?t.push(n.subdivide(.5,!1)):t.push(n),FA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},QA=function(n,e,t,A){var i=[];return FA(n)?i.push(n.subdivide(.5,!1)):i.push(n),FA(t)?i.push(t.subdivide(.5,!0)):i.push(t),FA(A)?i.push(A.subdivide(.5,!0).reverse()):i.push(A),FA(e)?i.push(e.subdivide(.5,!1).reverse()):i.push(e),i},zd=function(n){var e=n.bounds,t=n.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},va=function(n){var e=n.styles,t=n.bounds,A=dt(e.paddingLeft,t.width),i=dt(e.paddingRight,t.width),r=dt(e.paddingTop,t.width),s=dt(e.paddingBottom,t.width);return t.add(A+e.borderLeftWidth,r+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+A+i),-(e.borderTopWidth+e.borderBottomWidth+r+s))},nM=function(n,e){return n===0?e.bounds:n===2?va(e):zd(e)},iM=function(n,e){return n===0?e.bounds:n===2?va(e):zd(e)},Wo=function(n,e,t){var A=nM(Pi(n.styles.backgroundOrigin,e),n),i=iM(Pi(n.styles.backgroundClip,e),n),r=rM(Pi(n.styles.backgroundSize,e),t,A),s=r[0],a=r[1],o=br(Pi(n.styles.backgroundPosition,e),A.width-s,A.height-a),l=sM(Pi(n.styles.backgroundRepeat,e),o,r,A,i),c=Math.round(A.left+o[0]),h=Math.round(A.top+o[1]);return[l,c,h,s,a]},Di=function(n){return Ct(n)&&n.value===Wi.AUTO},$s=function(n){return typeof n=="number"},rM=function(n,e,t){var A=e[0],i=e[1],r=e[2],s=n[0],a=n[1];if(!s)return[0,0];if(It(s)&&a&&It(a))return[dt(s,t.width),dt(a,t.height)];var o=$s(r);if(Ct(s)&&(s.value===Wi.CONTAIN||s.value===Wi.COVER)){if($s(r)){var l=t.width/t.height;return l<r!=(s.value===Wi.COVER)?[t.width,t.width/r]:[t.height*r,t.height]}return[t.width,t.height]}var c=$s(A),h=$s(i),u=c||h;if(Di(s)&&(!a||Di(a))){if(c&&h)return[A,i];if(!o&&!u)return[t.width,t.height];if(u&&o){var d=c?A:i*r,g=h?i:A/r;return[d,g]}var B=c?A:t.width,p=h?i:t.height;return[B,p]}if(o){var f=0,m=0;return It(s)?f=dt(s,t.width):It(a)&&(m=dt(a,t.height)),Di(s)?f=m*r:(!a||Di(a))&&(m=f/r),[f,m]}var _=null,x=null;if(It(s)?_=dt(s,t.width):a&&It(a)&&(x=dt(a,t.height)),_!==null&&(!a||Di(a))&&(x=c&&h?_/A*i:t.height),x!==null&&Di(s)&&(_=c&&h?x/i*A:t.width),_!==null&&x!==null)return[_,x];throw new Error("Unable to calculate background-size for element")},Pi=function(n,e){var t=n[e];return typeof t>"u"?n[0]:t},sM=function(n,e,t,A,i){var r=e[0],s=e[1],a=t[0],o=t[1];switch(n){case 2:return[new de(Math.round(A.left),Math.round(A.top+s)),new de(Math.round(A.left+A.width),Math.round(A.top+s)),new de(Math.round(A.left+A.width),Math.round(o+A.top+s)),new de(Math.round(A.left),Math.round(o+A.top+s))];case 3:return[new de(Math.round(A.left+r),Math.round(A.top)),new de(Math.round(A.left+r+a),Math.round(A.top)),new de(Math.round(A.left+r+a),Math.round(A.height+A.top)),new de(Math.round(A.left+r),Math.round(A.height+A.top))];case 1:return[new de(Math.round(A.left+r),Math.round(A.top+s)),new de(Math.round(A.left+r+a),Math.round(A.top+s)),new de(Math.round(A.left+r+a),Math.round(A.top+s+o)),new de(Math.round(A.left+r),Math.round(A.top+s+o))];default:return[new de(Math.round(i.left),Math.round(i.top)),new de(Math.round(i.left+i.width),Math.round(i.top)),new de(Math.round(i.left+i.width),Math.round(i.height+i.top)),new de(Math.round(i.left),Math.round(i.height+i.top))]}},aM="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",tf="Hidden Text",oM=(function(){function n(e){this._data={},this._document=e}return n.prototype.parseMetrics=function(e,t){var A=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;A.style.visibility="hidden",A.style.fontFamily=e,A.style.fontSize=t,A.style.margin="0",A.style.padding="0",A.style.whiteSpace="nowrap",s.appendChild(A),i.src=aM,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(tf)),A.appendChild(r),A.appendChild(i);var a=i.offsetTop-r.offsetTop+2;A.removeChild(r),A.appendChild(this._document.createTextNode(tf)),A.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-A.offsetTop+2;return s.removeChild(A),{baseline:a,middle:o}},n.prototype.getMetrics=function(e,t){var A=e+" "+t;return typeof this._data[A]>"u"&&(this._data[A]=this.parseMetrics(e,t)),this._data[A]},n})(),Wd=(function(){function n(e,t){this.context=e,this.options=t}return n})(),lM=1e4;(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i._activeEffects=[],i.canvas=A.canvas?A.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),A.canvas||(i.canvas.width=Math.floor(A.width*A.scale),i.canvas.height=Math.floor(A.height*A.scale),i.canvas.style.width=A.width+"px",i.canvas.style.height=A.height+"px"),i.fontMetrics=new oM(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-A.x,-A.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+A.width+"x"+A.height+") with scale "+A.scale),i}return e.prototype.applyEffects=function(t){for(var A=this;this._activeEffects.length;)this.popEffect();t.forEach(function(i){return A.applyEffect(i)})},e.prototype.applyEffect=function(t){this.ctx.save(),qy(t)&&(this.ctx.globalAlpha=t.opacity),Jy(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),Gd(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return MA(this,void 0,void 0,function(){var A;return BA(this,function(i){switch(i.label){case 0:return A=t.element.container.styles,A.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return MA(this,void 0,void 0,function(){return BA(this,function(A){switch(A.label){case 0:if(Rt(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(t)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,A,i){var r=this;if(A===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+i);else{var s=bc(t.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,t.bounds.top+i),a+r.ctx.measureText(o).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var A=t.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=dM(t.fontFamily).join(", "),r=es(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,A,t.fontWeight,r,i].join(" "),i,r]},e.prototype.renderTextNode=function(t,A){return MA(this,void 0,void 0,function(){var i,r,s,a,o,l,c,h,u=this;return BA(this,function(d){return i=this.createFontStyle(A),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=A.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,h=A.paintOrder,t.textBounds.forEach(function(g){h.forEach(function(B){switch(B){case 0:u.ctx.fillStyle=Ot(A.color),u.renderTextWithLetterSpacing(g,A.letterSpacing,l);var p=A.textShadow;p.length&&g.text.trim().length&&(p.slice(0).reverse().forEach(function(f){u.ctx.shadowColor=Ot(f.color),u.ctx.shadowOffsetX=f.offsetX.number*u.options.scale,u.ctx.shadowOffsetY=f.offsetY.number*u.options.scale,u.ctx.shadowBlur=f.blur.number,u.renderTextWithLetterSpacing(g,A.letterSpacing,l)}),u.ctx.shadowColor="",u.ctx.shadowOffsetX=0,u.ctx.shadowOffsetY=0,u.ctx.shadowBlur=0),A.textDecorationLine.length&&(u.ctx.fillStyle=Ot(A.textDecorationColor||A.color),A.textDecorationLine.forEach(function(f){switch(f){case 1:u.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:u.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:u.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:A.webkitTextStrokeWidth&&g.text.trim().length&&(u.ctx.strokeStyle=Ot(A.webkitTextStrokeColor),u.ctx.lineWidth=A.webkitTextStrokeWidth,u.ctx.lineJoin=window.chrome?"miter":"round",u.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),u.ctx.strokeStyle="",u.ctx.lineWidth=0,u.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,A,i){if(i&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var r=va(t),s=xa(A);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,t.intrinsicWidth,t.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return MA(this,void 0,void 0,function(){var A,i,r,s,a,o,m,m,l,c,h,u,x,d,g,E,B,p,f,m,_,x,E;return BA(this,function(C){switch(C.label){case 0:this.applyEffects(t.getEffects(4)),A=t.container,i=t.curves,r=A.styles,s=0,a=A.textNodes,C.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:C.sent(),C.label=3;case 3:return s++,[3,1];case 4:if(!(A instanceof Sd))return[3,8];C.label=5;case 5:return C.trys.push([5,7,,8]),[4,this.context.cache.match(A.src)];case 6:return m=C.sent(),this.renderReplacedElement(A,i,m),[3,8];case 7:return C.sent(),this.context.logger.error("Error loading image "+A.src),[3,8];case 8:if(A instanceof Fd&&this.renderReplacedElement(A,i,A.canvas),!(A instanceof bd))return[3,12];C.label=9;case 9:return C.trys.push([9,11,,12]),[4,this.context.cache.match(A.svg)];case 10:return m=C.sent(),this.renderReplacedElement(A,i,m),[3,12];case 11:return C.sent(),this.context.logger.error("Error loading svg "+A.svg.substring(0,255)),[3,12];case 12:return A instanceof Ld&&A.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:A.backgroundColor,x:0,y:0,width:A.width,height:A.height}),[4,l.render(A.tree)]):[3,14];case 13:c=C.sent(),A.width&&A.height&&this.ctx.drawImage(c,0,0,A.width,A.height,A.bounds.left,A.bounds.top,A.bounds.width,A.bounds.height),C.label=14;case 14:if(A instanceof Tc&&(h=Math.min(A.bounds.width,A.bounds.height),A.type===Ba?A.checked&&(this.ctx.save(),this.path([new de(A.bounds.left+h*.39363,A.bounds.top+h*.79),new de(A.bounds.left+h*.16,A.bounds.top+h*.5549),new de(A.bounds.left+h*.27347,A.bounds.top+h*.44071),new de(A.bounds.left+h*.39694,A.bounds.top+h*.5649),new de(A.bounds.left+h*.72983,A.bounds.top+h*.23),new de(A.bounds.left+h*.84,A.bounds.top+h*.34085),new de(A.bounds.left+h*.39363,A.bounds.top+h*.79)]),this.ctx.fillStyle=Ot(Wu),this.ctx.fill(),this.ctx.restore()):A.type===wa&&A.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(A.bounds.left+h/2,A.bounds.top+h/2,h/4,0,Math.PI*2,!0),this.ctx.fillStyle=Ot(Wu),this.ctx.fill(),this.ctx.restore())),cM(A)&&A.value.length){switch(u=this.createFontStyle(r),x=u[0],d=u[1],g=this.fontMetrics.getMetrics(x,d).baseline,this.ctx.font=x,this.ctx.fillStyle=Ot(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=uM(A.styles.textAlign),E=va(A),B=0,A.styles.textAlign){case 1:B+=E.width/2;break;case 2:B+=E.width;break}p=E.add(B,0,0,-E.height/2+1),this.ctx.save(),this.path([new de(E.left,E.top),new de(E.left+E.width,E.top),new de(E.left+E.width,E.top+E.height),new de(E.left,E.top+E.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Rr(A.value,p),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Rt(A.styles.display,2048))return[3,20];if(A.styles.listStyleImage===null)return[3,19];if(f=A.styles.listStyleImage,f.type!==0)return[3,18];m=void 0,_=f.url,C.label=15;case 15:return C.trys.push([15,17,,18]),[4,this.context.cache.match(_)];case 16:return m=C.sent(),this.ctx.drawImage(m,A.bounds.left-(m.width+10),A.bounds.top),[3,18];case 17:return C.sent(),this.context.logger.error("Error loading list-style-image "+_),[3,18];case 18:return[3,20];case 19:t.listValue&&A.styles.listStyleType!==-1&&(x=this.createFontStyle(r)[0],this.ctx.font=x,this.ctx.fillStyle=Ot(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",E=new fi(A.bounds.left,A.bounds.top+dt(A.styles.paddingTop,A.bounds.width),A.bounds.width,bu(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Rr(t.listValue,E),r.letterSpacing,bu(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),C.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return MA(this,void 0,void 0,function(){var A,i,f,r,s,f,a,o,f,l,c,f,h,u,f,d,g,f,B,p,f;return BA(this,function(m){switch(m.label){case 0:if(Rt(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:m.sent(),A=0,i=t.negativeZIndex,m.label=2;case 2:return A<i.length?(f=i[A],[4,this.renderStack(f)]):[3,5];case 3:m.sent(),m.label=4;case 4:return A++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:m.sent(),r=0,s=t.nonInlineLevel,m.label=7;case 7:return r<s.length?(f=s[r],[4,this.renderNode(f)]):[3,10];case 8:m.sent(),m.label=9;case 9:return r++,[3,7];case 10:a=0,o=t.nonPositionedFloats,m.label=11;case 11:return a<o.length?(f=o[a],[4,this.renderStack(f)]):[3,14];case 12:m.sent(),m.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,m.label=15;case 15:return l<c.length?(f=c[l],[4,this.renderStack(f)]):[3,18];case 16:m.sent(),m.label=17;case 17:return l++,[3,15];case 18:h=0,u=t.inlineLevel,m.label=19;case 19:return h<u.length?(f=u[h],[4,this.renderNode(f)]):[3,22];case 20:m.sent(),m.label=21;case 21:return h++,[3,19];case 22:d=0,g=t.zeroOrAutoZIndexOrTransformedOrOpacity,m.label=23;case 23:return d<g.length?(f=g[d],[4,this.renderStack(f)]):[3,26];case 24:m.sent(),m.label=25;case 25:return d++,[3,23];case 26:B=0,p=t.positiveZIndex,m.label=27;case 27:return B<p.length?(f=p[B],[4,this.renderStack(f)]):[3,30];case 28:m.sent(),m.label=29;case 29:return B++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var A=this;t.forEach(function(i,r){var s=FA(i)?i.start:i;r===0?A.ctx.moveTo(s.x,s.y):A.ctx.lineTo(s.x,s.y),FA(i)&&A.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},e.prototype.renderRepeat=function(t,A,i,r){this.path(t),this.ctx.fillStyle=A,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},e.prototype.resizeImage=function(t,A,i){var r;if(t.width===A&&t.height===i)return t;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,A),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(t,0,0,t.width,t.height,0,0,A,i),a},e.prototype.renderBackgroundImage=function(t){return MA(this,void 0,void 0,function(){var A,i,r,s,a,o;return BA(this,function(l){switch(l.label){case 0:A=t.styles.backgroundImage.length-1,i=function(c){var h,u,d,y,O,R,Q,N,F,g,y,O,R,Q,N,B,p,f,m,_,x,E,C,M,F,w,y,T,D,Q,N,V,O,R,X,J,ee,te,_e,Ce,Oe,Je;return BA(this,function(Y){switch(Y.label){case 0:if(c.type!==0)return[3,5];h=void 0,u=c.url,Y.label=1;case 1:return Y.trys.push([1,3,,4]),[4,r.context.cache.match(u)];case 2:return h=Y.sent(),[3,4];case 3:return Y.sent(),r.context.logger.error("Error loading background-image "+u),[3,4];case 4:return h&&(d=Wo(t,A,[h.width,h.height,h.width/h.height]),y=d[0],O=d[1],R=d[2],Q=d[3],N=d[4],F=r.ctx.createPattern(r.resizeImage(h,Q,N),"repeat"),r.renderRepeat(y,F,O,R)),[3,6];case 5:uC(c)?(g=Wo(t,A,[null,null,null]),y=g[0],O=g[1],R=g[2],Q=g[3],N=g[4],B=aC(c.angle,Q,N),p=B[0],f=B[1],m=B[2],_=B[3],x=B[4],E=document.createElement("canvas"),E.width=Q,E.height=N,C=E.getContext("2d"),M=C.createLinearGradient(f,_,m,x),Su(c.stops,p).forEach(function($){return M.addColorStop($.stop,Ot($.color))}),C.fillStyle=M,C.fillRect(0,0,Q,N),Q>0&&N>0&&(F=r.ctx.createPattern(E,"repeat"),r.renderRepeat(y,F,O,R))):fC(c)&&(w=Wo(t,A,[null,null,null]),y=w[0],T=w[1],D=w[2],Q=w[3],N=w[4],V=c.position.length===0?[Uc]:c.position,O=dt(V[0],Q),R=dt(V[V.length-1],N),X=oC(c,O,R,Q,N),J=X[0],ee=X[1],J>0&&ee>0&&(te=r.ctx.createRadialGradient(T+O,D+R,0,T+O,D+R,J),Su(c.stops,J*2).forEach(function($){return te.addColorStop($.stop,Ot($.color))}),r.path(y),r.ctx.fillStyle=te,J!==ee?(_e=t.bounds.left+.5*t.bounds.width,Ce=t.bounds.top+.5*t.bounds.height,Oe=ee/J,Je=1/Oe,r.ctx.save(),r.ctx.translate(_e,Ce),r.ctx.transform(1,0,0,Oe,0,0),r.ctx.translate(-_e,-Ce),r.ctx.fillRect(T,Je*(D-Ce)+Ce,Q,N*Je),r.ctx.restore()):r.ctx.fill())),Y.label=6;case 6:return A--,[2]}})},r=this,s=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,A,i){return MA(this,void 0,void 0,function(){return BA(this,function(r){return this.path(ef(i,A)),this.ctx.fillStyle=Ot(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,A,i,r){return MA(this,void 0,void 0,function(){var s,a;return BA(this,function(o){switch(o.label){case 0:return A<3?[4,this.renderSolidBorder(t,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=eM(r,i),this.path(s),this.ctx.fillStyle=Ot(t),this.ctx.fill(),a=tM(r,i),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return MA(this,void 0,void 0,function(){var A,i,r,s,a,o,l,c,h=this;return BA(this,function(u){switch(u.label){case 0:return this.applyEffects(t.getEffects(2)),A=t.container.styles,i=!zi(A.backgroundColor)||A.backgroundImage.length,r=[{style:A.borderTopStyle,color:A.borderTopColor,width:A.borderTopWidth},{style:A.borderRightStyle,color:A.borderRightColor,width:A.borderRightWidth},{style:A.borderBottomStyle,color:A.borderBottomColor,width:A.borderBottomWidth},{style:A.borderLeftStyle,color:A.borderLeftColor,width:A.borderLeftWidth}],s=hM(Pi(A.backgroundClip,0),t.curves),i||A.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),zi(A.backgroundColor)||(this.ctx.fillStyle=Ot(A.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:u.sent(),this.ctx.restore(),A.boxShadow.slice(0).reverse().forEach(function(d){h.ctx.save();var g=_a(t.curves),B=d.inset?0:lM,p=$y(g,-B+(d.inset?1:-1)*d.spread.number,(d.inset?1:-1)*d.spread.number,d.spread.number*(d.inset?-2:2),d.spread.number*(d.inset?-2:2));d.inset?(h.path(g),h.ctx.clip(),h.mask(p)):(h.mask(g),h.ctx.clip(),h.path(p)),h.ctx.shadowOffsetX=d.offsetX.number+B,h.ctx.shadowOffsetY=d.offsetY.number,h.ctx.shadowColor=Ot(d.color),h.ctx.shadowBlur=d.blur.number,h.ctx.fillStyle=d.inset?Ot(d.color):"rgba(0,0,0,1)",h.ctx.fill(),h.ctx.restore()}),u.label=2;case 2:a=0,o=0,l=r,u.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!zi(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return u.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return u.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return u.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:u.sent(),u.label=11;case 11:a++,u.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,A,i,r,s){return MA(this,void 0,void 0,function(){var a,o,l,c,h,u,d,g,B,p,f,m,_,x,E,C,E,C;return BA(this,function(M){return this.ctx.save(),a=AM(r,i),o=ef(r,i),s===2&&(this.path(o),this.ctx.clip()),FA(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),FA(o[1])?(h=o[1].end.x,u=o[1].end.y):(h=o[1].x,u=o[1].y),i===0||i===2?d=Math.abs(l-h):d=Math.abs(c-u),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=A<3?A*3:A*2,B=A<3?A*2:A,s===3&&(g=A,B=A),p=!0,d<=g*2?p=!1:d<=g*2+B?(f=d/(2*g+B),g*=f,B*=f):(m=Math.floor((d+B)/(g+B)),_=(d-m*g)/(m-1),x=(d-(m+1)*g)/m,B=x<=0||Math.abs(B-_)<Math.abs(B-x)?_:x),p&&(s===3?this.ctx.setLineDash([0,g+B]):this.ctx.setLineDash([g,B])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=A):this.ctx.lineWidth=A*2+1.1,this.ctx.strokeStyle=Ot(t),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(FA(o[0])&&(E=o[3],C=o[0],this.ctx.beginPath(),this.formatPath([new de(E.end.x,E.end.y),new de(C.start.x,C.start.y)]),this.ctx.stroke()),FA(o[1])&&(E=o[1],C=o[2],this.ctx.beginPath(),this.formatPath([new de(E.end.x,E.end.y),new de(C.start.x,C.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return MA(this,void 0,void 0,function(){var A;return BA(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Ot(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),A=jy(t),[4,this.renderStack(A)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},e})(Wd);var cM=function(n){return n instanceof Id||n instanceof Qd?!0:n instanceof Tc&&n.type!==wa&&n.type!==Ba},hM=function(n,e){switch(n){case 0:return _a(e);case 2:return Xy(e);default:return xa(e)}},uM=function(n){switch(n){case 1:return"center";case 2:return"right";default:return"left"}},fM=["-apple-system","system-ui"],dM=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(e){return fM.indexOf(e)===-1}):n};(function(n){VA(e,n);function e(t,A){var i=n.call(this,t,A)||this;return i.canvas=A.canvas?A.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=A,i.canvas.width=Math.floor(A.width*A.scale),i.canvas.height=Math.floor(A.height*A.scale),i.canvas.style.width=A.width+"px",i.canvas.style.height=A.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-A.x,-A.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale),i}return e.prototype.render=function(t){return MA(this,void 0,void 0,function(){var A,i;return BA(this,function(r){switch(r.label){case 0:return A=nc(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,pM(A)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Ot(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e})(Wd);var pM=function(n){return new Promise(function(e,t){var A=new Image;A.onload=function(){e(A)},A.onerror=t,A.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})};typeof window<"u"&&zy.setContext(window);const Vt=new Cg;Vt.background=new Fe("#050505");const OA=new SA(45,window.innerWidth/window.innerHeight,.1,100);OA.position.set(6.36,2.6,-6.36);const IA=new L_({antialias:!0,preserveDrawingBuffer:!0});IA.setSize(window.innerWidth,window.innerHeight);IA.setPixelRatio(Math.min(window.devicePixelRatio,2));IA.outputColorSpace=AA;IA.shadowMap.enabled=!0;IA.shadowMap.type=lf;document.getElementById("app").appendChild(IA.domElement);const sn=new Y_(OA,IA.domElement);sn.enableDamping=!0;sn.dampingFactor=.08;sn.enablePan=!0;sn.minDistance=1.5;sn.maxDistance=80;sn.target.set(0,1.6,0);sn.update();const jt=new Oi;Vt.add(jt);const rA=new Oi;Vt.add(rA);const gM=new Rg(16777215,.72);Vt.add(gM);const fA=new vc(16777215,1.7);fA.position.set(6,8,5);fA.castShadow=!0;fA.shadow.mapSize.set(2048,2048);fA.shadow.camera.near=.5;fA.shadow.camera.far=40;fA.shadow.camera.left=-10;fA.shadow.camera.right=10;fA.shadow.camera.top=10;fA.shadow.camera.bottom=-10;fA.shadow.bias=-3e-4;fA.shadow.normalBias=.02;fA.shadow.radius=6;Vt.add(fA);Vt.add(fA.target);const Xd=new vc(9086719,.7);Xd.position.set(-6,3,-6);Vt.add(Xd);const Yd=new vc(16766643,.35);Yd.position.set(0,6,-8);Vt.add(Yd);const tr=new ce(new ji(200,200),new Fg({opacity:.18}));tr.rotation.x=-Math.PI/2;tr.position.y=0;tr.receiveShadow=!0;tr.material.depthWrite=!1;tr.renderOrder=-2;Vt.add(tr);const _n=new ce(new qr(1,32,32),new Jr({color:"#ffff00"}));Vt.add(_n);const vA=new Xf(OA,IA.domElement);vA.setMode("translate");vA.setSpace("world");vA.setSize(1.15);vA.attach(_n);vA.addEventListener("dragging-changed",n=>{sn.enabled=!n.value});vA.addEventListener("objectChange",()=>{G.attractorX=_n.position.x,G.attractorY=_n.position.y,G.attractorZ=_n.position.z,ze()});Vt.add(vA);Vt.add(vA.getHelper());const kt=new Xf(OA,IA.domElement);kt.setMode("translate");kt.setSpace("world");kt.setSize(1.1);Vt.add(kt);kt.visible=!1;const sc=new Pf,Xo=new Re;sc.params.Line.threshold=.2;const Gt=[];let Dr=null;const Xr=new Ut;Vt.add(Xr);const Ic=new Map;function Zd(n,e){e.boundingSphere||e.computeBoundingSphere()}function mM(n){const e=new Vr(n),t=new An({color:G.lineColor,transparent:!0,opacity:1});return new Cn(e,t)}function BM(n,e){const t=!!n.getAttribute("color"),A=e||new $r({vertexColors:t,roughness:.3,metalness:.45,side:hA});return new ce(n,A)}function Jd(n,e){if(n.getAttribute("color"))return;const t=n.getAttribute("position");if(!t)return;const A=new Fe(e||"#ffffff"),i=new Float32Array(t.count*3);for(let r=0;r<t.count;r+=1)i[r*3]=A.r,i[r*3+1]=A.g,i[r*3+2]=A.b;n.setAttribute("color",new CA(i,3))}function wM(n,e,t){const A=n instanceof Blob?n:new Blob([n],{type:t}),i=URL.createObjectURL(A),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function _M(){if(G.mode!=="mesh")return[];const n=[],e=A=>{if(!A||!A.isMesh||!A.geometry)return;A.updateMatrixWorld(!0);const i=A.geometry.clone();i.applyMatrix4(A.matrixWorld),Jd(i,G.baseColor),i.computeVertexNormals(),n.push(i)},t=Kt||Mt||wt;t&&t.isMesh?e(t):(e(Mt),e(wt));for(const A of rA.children)A.isMesh&&e(A);return n}function xM(){const n=_M();if(!n.length)return null;const e=Yf(n,!0);return e?(e.computeVertexNormals(),Jd(e,G.baseColor),e):null}function vM(n,e){e.position.copy(n.position),e.quaternion.copy(n.quaternion),e.scale.copy(n.scale),e.userData.isBaked=!0,e.userData.sourceGeometry=n.userData.sourceGeometry||n.geometry,e.userData.sourceMaterial=n.userData.sourceMaterial||n.material,e.userData.sourceMode=n.userData.sourceMode||"mesh",e.frustumCulled=!1,Ic.delete(n),rA.remove(n),rA.add(e),Zd(e,e.userData.sourceGeometry||e.geometry);const t=Gt.indexOf(n);return t>=0&&(Gt[t]=e),ts(),e}function CM(){if(rA.children.length===0)return;const n=G.mode==="lines",e=[];for(const t of rA.children)if(!(!t.userData||!t.userData.isBaked)){if(n&&t.isMesh){const A=t.userData.sourceGeometry||t.geometry,i=mM(A);i.userData={...t.userData,sourceMode:"mesh"},e.push({oldObj:t,newObj:i})}else if(!n&&t.isLineSegments&&t.userData.sourceMode==="mesh"){const A=t.userData.sourceGeometry||t.geometry,i=t.userData.sourceMaterial&&t.userData.sourceMaterial.clone?t.userData.sourceMaterial.clone():null,r=BM(A,i);r.userData={...t.userData},e.push({oldObj:t,newObj:r})}}for(const{oldObj:t,newObj:A}of e)vM(t,A)}function ts(){if(Gt.length===0){kt.detach(),kt.visible=!1,vA.attach(_n),vA.visible=!0;return}const n=new b;for(const e of Gt)n.add(e.position);n.multiplyScalar(1/Gt.length),Xr.position.copy(n),kt.visible=!0,kt.attach(Xr),kt.updateMatrixWorld(!0),vA.detach(),vA.visible=!1}function qd(n){Gt.length=0;for(const e of n)e&&!Gt.includes(e)&&Gt.push(e);ts()}function EM(n){const e=Gt.indexOf(n);e>=0?Gt.splice(e,1):Gt.push(n),ts()}kt.addEventListener("objectChange",()=>{if(!Dr)return;const n=Xr.position.clone().sub(Dr.pivotStart);for(let e=0;e<Gt.length;e+=1){const t=Dr.startPositions[e],A=Gt[e];t&&A&&A.position.copy(t).add(n)}});kt.addEventListener("dragging-changed",n=>{sn.enabled=!n.value,n.value?Dr={pivotStart:Xr.position.clone(),startPositions:Gt.map(e=>e.position.clone())}:Dr=null});const Lc=new Pg(2.5);Lc.material.transparent=!0;Lc.material.opacity=.35;Vt.add(Lc);const $d=2e3,yM=400,MM=100,Ar=new Nf($d,yM,"#1a1f24","#1a1f24");Ar.position.y=0;Ar.material.opacity=.12;Ar.material.transparent=!0;Ar.material.depthWrite=!1;Ar.renderOrder=-1;Vt.add(Ar);const nr=new Nf($d,MM,"#2a3238","#2a3238");nr.position.y=0;nr.material.opacity=.2;nr.material.transparent=!0;nr.material.depthWrite=!1;nr.renderOrder=-1;Vt.add(nr);const G={mode:"mesh",showEdges:!1,segments:250,simSegmentsCap:151,iterations:30,stepLength:.28,ringRadius:1.5,ringSegments:273,twist:-6.68,ruffleAmplitude:.3,ruffleFrequency:.5,ruffleGrowth:0,leafGrowth:.65,ridgeLift:.23,ridgeSharpness:.2,curl:.85,rimCurlWidth:.05,bowl:-.15,taper:0,attractorX:-.2,attractorY:2.35,attractorZ:-1.25,attractorRadius:.3,attractorStrength:.55,attractorBias:.57,meshThickness:0,lineColor:"#ffffff",smoothnessStrength:10,collisionStrength:0,collisionIterations:15,collisionRange:1,ridgeColor:"#ff0000",baseColor:"#4400ff",extrusionWidth:.35,baseQuadDivisions:4,baseCullFalloff:1.25,deformableZone:5,growthFalloff:.75,autoRotate:!1,bakeBaseOffset:1.35,bakeSpacing:1.872};let Mt=null,bA=null,nA=null,Ga=null,wt=null,ac=[],Kt=null,Xi=null,Ca=null;function Ea(n,e){const t=Math.max(.001,G.attractorRadius),A=t+Math.max(.001,G.baseCullFalloff),i=n.distanceTo(e);return i<=t?1:i>=A?0:1-(i-t)/(A-t)}function UM(n,e){if(!n||n.length<2)return null;const t=n.map(s=>({point:s,angle:Math.atan2(s.z,s.y)})).sort((s,a)=>s.angle-a.angle).map(s=>s.point),A=[0];let i=0;for(let s=1;s<t.length+1;s+=1){const a=t[s-1],o=t[s%t.length];i+=a.distanceTo(o),A.push(i)}if(i<=0)return null;const r=[];for(let s=0;s<e;s+=1){const a=i*s/e;let o=0;for(;o<A.length-1&&A[o+1]<a;)o+=1;const l=t[o%t.length],c=t[(o+1)%t.length],h=A[o+1]-A[o],u=h>0?(a-A[o])/h:0;r.push(l.clone().lerp(c,u))}return r}function jd(n,e){if(!n||n.length<2)return null;const t=n.length,A=[];for(let i=0;i<e;i+=1){const r=i/e*t,s=Math.floor(r),a=r-s,o=n[s%t],l=n[(s+1)%t];A.push(o.clone().lerp(l,a))}return A}function SM(n,e){if(!n||n.length<2)return null;const t=n.length,A=new Array(e);for(let i=0;i<e;i+=1){const r=i/e*t,s=Math.floor(r),a=r-s,o=n[s%t],l=n[(s+1)%t];A[i]=o+(l-o)*a}return A}function FM(n,e){return!n||n.length===0||n[0].points.length===e?n:n.map(A=>{const i=jd(A.points,e);if(!i)return A;const r=new b;for(const a of i)r.add(a);r.multiplyScalar(1/i.length);const s=A.mask?SM(A.mask,e):null;return{points:i,center:r,mask:s}})}function bM(){const n=[],e=new b(G.attractorX,G.attractorY,G.attractorZ),t=Math.max(1,G.iterations),A=Math.max(3,Math.floor(G.simSegmentsCap||G.segments)),i=Math.max(3,Math.min(G.segments,A)),r=UM(ac,i);Xi=r?r.map(o=>o.clone()):null;const s=[],a=[];for(let o=0;o<i;o+=1){const l=r?r[o].clone():new b(0,Math.cos(Math.PI*2*o/i)*G.ringRadius,Math.sin(Math.PI*2*o/i)*G.ringRadius),c=Ea(l,e);s.push(l),a.push(c)}Ca=s.map(o=>o.clone()),n.push({points:s,center:new b(0,0,0),mask:a});for(let o=1;o<=t;o+=1){const l=o/t,c=G.twist*l,h=1-G.taper*l,u=1+G.leafGrowth*l,d=G.stepLength*u,g=G.stepLength*.25,B=n[o-1],p=[],f=[];let m=new b;for(let _=0;_<i;_+=1){const E=(Math.PI*2*_/i+c)*G.ruffleFrequency+l*G.ruffleFrequency*.9,C=Math.pow(Math.abs(Math.sin(E)),G.ridgeSharpness),M=Math.sin(E)*G.ruffleAmplitude*(.25+G.ruffleGrowth*l),F=B.points[_],w=F.clone().sub(B.center);w.lengthSq()<1e-6&&w.set(1,0,0),w.normalize();const y=Ea(F,e),T=B.mask?B.mask[_]:y,D=Math.pow(y,G.growthFalloff),Q=Math.min(1,Math.max(0,T*(D+G.attractorBias))),N=Q*G.attractorStrength,V=e.clone().sub(F),O=Q>.02,R=F.clone().addScaledVector(w,d*h*(O?.3+N:0)).addScaledVector(new b(0,1,0),g*(O?.2+N:0)),X=w.clone().multiplyScalar(M*(O?.4+N:0)),J=R.add(X);J.y+=(Math.cos(E*.7)*G.ruffleAmplitude*.08+C*G.ridgeLift*(.2+l)*(.4+N))*(O?1:0);const ee=G.curl*(l-.15);J.applyAxisAngle(w,ee);const te=Math.max(.05,G.rimCurlWidth),_e=Math.max(0,1-te),Oe=.35*Math.min(1,Math.max(0,(l-_e)/te))*(.2+l);J.applyAxisAngle(w,Oe),J.y-=G.bowl*w.length()*w.length()*.35,G.attractorStrength>0&&Q>.001&&J.addScaledVector(V.normalize(),G.attractorStrength*Q*.25),p.push(J),m.add(J),f.push(Q)}m.multiplyScalar(1/p.length),TM(p,m,B,G.stepLength*.6,G.collisionStrength,G.collisionIterations,G.collisionRange),n.push({points:p,center:m,mask:f})}return n}function ep(n,e){const t=new Map;for(const A of n){const i=A.point,r=Math.floor(i.x/e),s=Math.floor(i.y/e),a=Math.floor(i.z/e),o=`${r}_${s}_${a}`,l=t.get(o)||[];l.push(A),t.set(o,l)}return{map:t,cellSize:e}}function tp(n,e){const t=[],A=e.cellSize,i=Math.floor(n.x/A),r=Math.floor(n.y/A),s=Math.floor(n.z/A);for(let a=-1;a<=1;a+=1)for(let o=-1;o<=1;o+=1)for(let l=-1;l<=1;l+=1){const c=`${i+a}_${r+o}_${s+l}`,h=e.map.get(c);h&&t.push(...h)}return t}function TM(n,e,t,A,i,r,s){if(!n||n.length<3)return;const o=Math.max(.001,A)*(1+Math.max(0,i)*.6),l=o*Math.max(1,s),c=Math.max(0,Math.floor(r));if(c!==0)for(let h=0;h<c;h+=1){const u=n.map(B=>({point:B,isStatic:!1})),d=t?t.points.map(B=>({point:B,isStatic:!0})):[],g=ep([...u,...d],l);for(const B of u){const p=B.point,f=tp(p,g);for(const _ of f){if(_.point===p)continue;const x=_.isStatic?.85*i:.65*i;Ap(p,_.point,o,l,x)}const m=p.clone().sub(e);if(m.lengthSq()>1e-6){const _=m.length();_<o*.5&&p.addScaledVector(m.normalize(),(o*.5-_)*.4)}}}}function Ap(n,e,t,A,i){const r=n.clone().sub(e),s=r.length();if(s<1e-5||s>=A)return;const a=(A-s)/A*i;s<t?r.normalize().multiplyScalar((t-s)*.3+a):r.normalize().multiplyScalar(a),n.add(r)}function QM(n){const e=Math.max(0,G.collisionStrength),t=Math.max(0,Math.floor(G.collisionIterations));if(e<=0||t===0)return;const A=Math.max(3,Math.floor(G.simSegmentsCap||G.segments)),i=n[0]?n[0].points.length:Math.max(3,Math.min(G.segments,A)),r=Math.max(.001,G.stepLength*.6),s=Math.max(1,Math.sqrt(i/140)),a=e*(1+(s-1)*.75),o=r*(.65+.6*a)*s,l=o*Math.max(1,G.collisionRange)*s;for(let c=0;c<t;c+=1){const h=[];for(let d=0;d<n.length;d+=1){const g=n[d].points,B=n[d].mask||[];for(let p=0;p<g.length;p+=1)B[p]<=.02||h.push({point:g[p],ringIndex:d,pointIndex:p})}const u=ep(h,l);for(const d of h){const g=tp(d.point,u);for(const B of g){if(B.point===d.point)continue;const p=Math.abs(d.ringIndex-B.ringIndex),f=Math.abs(d.pointIndex-B.pointIndex),m=Math.min(f,i-f);if(p===0&&m<=1)continue;const _=p<=1?a*.7:a;Ap(d.point,B.point,o,l,_)}}}}function IM(){Mt&&(jt.remove(Mt),Mt.geometry.dispose(),Mt.material.dispose(),Mt=null),bA&&(jt.remove(bA),bA.geometry.dispose(),bA.material.dispose(),bA=null),nA&&(jt.remove(nA),nA.geometry.dispose(),nA.material.dispose(),nA=null),Kt&&(jt.remove(Kt),Kt.geometry.dispose(),Kt.material.dispose(),Kt=null),Ga=null}function LM(n=!1){wt&&(jt.remove(wt),wt.geometry.dispose(),wt.material.dispose(),wt=null),ac=[];const e=Math.max(.01,G.extrusionWidth),t=Math.min(720,Math.max(24,Math.floor(G.ringSegments||240))),A=Math.max(1,Math.min(10,Math.floor(G.baseQuadDivisions))),i=[],r=[],s=[],a=[],o=new b(G.attractorX,G.attractorY,G.attractorZ),l=new Qt().setFromAxisAngle(new b(0,0,1),Math.PI/2),c=Array.from({length:A},()=>new Array(t).fill(!0)),h=Array.from({length:A},()=>new Array(t).fill(!1)),u=Array.from({length:A},()=>new Array(t).fill(!0)),d=new Fe(G.baseColor),g=new Fe(G.ridgeColor);let B=!1;for(let x=0;x<A;x+=1){const E=-e/2+e*x/A,C=-e/2+e*(x+1)/A;for(let M=0;M<t;M+=1){const F=(M+1)%t,w=Math.PI*2*M/t,y=Math.PI*2*F/t,T=Math.cos(w)*G.ringRadius,D=Math.sin(w)*G.ringRadius,Q=Math.cos(y)*G.ringRadius,N=Math.sin(y)*G.ringRadius,V=new b((T+Q)*.5,(E+C)*.5,(D+N)*.5);V.applyQuaternion(l);const O=Ea(V,o);h[x][M]=O>.01,c[x][M]=!h[x][M],c[x][M]&&(B=!0)}}if(!B)for(let x=0;x<A;x+=1)for(let E=0;E<t;E+=1)c[x][E]=!0;const p=new Map;new b(0,1,0),new b(1,0,0);function f(x,E,C){for(let M=0;M<A;M+=1){const F=-e/2+e*M/A,w=-e/2+e*(M+1)/A;for(let y=0;y<t;y+=1){if(!x[M][y])continue;const T=(y+1)%t,D=(y-1+t)%t,Q=Math.PI*2*y/t,N=Math.PI*2*T/t,V=Math.cos(Q)*G.ringRadius,O=Math.sin(Q)*G.ringRadius,R=Math.cos(N)*G.ringRadius,X=Math.sin(N)*G.ringRadius,J=new b(V,F,O),ee=new b(R,F,X),te=new b(R,w,X),_e=new b(V,w,O);if(J.applyQuaternion(l),ee.applyQuaternion(l),te.applyQuaternion(l),_e.applyQuaternion(l),C)if(G.mode==="mesh"){const Ce=i.length/3;i.push(J.x,J.y,J.z,ee.x,ee.y,ee.z,te.x,te.y,te.z,_e.x,_e.y,_e.z);const Oe=Math.min(1,Math.max(0,(J.x+e/2)/e)),Je=Math.min(1,Math.max(0,(ee.x+e/2)/e)),Y=Math.min(1,Math.max(0,(te.x+e/2)/e)),$=Math.min(1,Math.max(0,(_e.x+e/2)/e)),ge=d.clone().lerp(g,Oe),De=d.clone().lerp(g,Je),we=d.clone().lerp(g,Y),Xe=d.clone().lerp(g,$);a.push(ge.r,ge.g,ge.b,De.r,De.g,De.b,we.r,we.g,we.b,Xe.r,Xe.g,Xe.b),r.push(Ce,Ce+1,Ce+2,Ce,Ce+2,Ce+3)}else s.push(J.x,J.y,J.z,ee.x,ee.y,ee.z,ee.x,ee.y,ee.z,te.x,te.y,te.z,te.x,te.y,te.z,_e.x,_e.y,_e.z,_e.x,_e.y,_e.z,J.x,J.y,J.z);if(E){const Ce=[];h[M][T]&&Ce.push(ee.clone().add(te).multiplyScalar(.5)),h[M][D]&&Ce.push(J.clone().add(_e).multiplyScalar(.5)),M<A-1&&h[M+1][y]&&Ce.push(_e.clone().add(te).multiplyScalar(.5)),M>0&&h[M-1][y]&&Ce.push(J.clone().add(ee).multiplyScalar(.5));for(const Oe of Ce){const Je=`${Oe.x.toFixed(3)}_${Oe.y.toFixed(3)}_${Oe.z.toFixed(3)}`;p.has(Je)||p.set(Je,Oe)}}}}}f(c,!0,!1),f(u,!1,!0),ac=Array.from(p.values());const m=new gt;if(n||G.mode==="mesh"){m.setAttribute("position",new ke(i,3)),m.setAttribute("color",new ke(a,3)),m.setIndex(r);const x=ii(m,1e-4);x.computeVertexNormals();const E=new $r({vertexColors:!0,transparent:!0,opacity:1,roughness:.25,metalness:.5,side:hA});rp(x),x.computeVertexNormals(),wt=new ce(x,E),wt.castShadow=!0,wt.receiveShadow=!0,x.clone()}else{m.setAttribute("position",new ke(s,3));const x=new An({color:G.lineColor,transparent:!0,opacity:1});wt=new Cn(m,x)}jt.add(wt)}function np(){const n=Math.max(.01,G.extrusionWidth),e=Math.min(720,Math.max(24,Math.floor(G.ringSegments||240))),t=Math.max(1,Math.min(10,Math.floor(G.baseQuadDivisions))),A=[],i=[],r=new Qt().setFromAxisAngle(new b(0,0,1),Math.PI/2);for(let a=0;a<t;a+=1){const o=-n/2+n*a/t,l=-n/2+n*(a+1)/t;for(let c=0;c<e;c+=1){const h=(c+1)%e,u=Math.PI*2*c/e,d=Math.PI*2*h/e,g=Math.cos(u)*G.ringRadius,B=Math.sin(u)*G.ringRadius,p=Math.cos(d)*G.ringRadius,f=Math.sin(d)*G.ringRadius,m=new b(g,o,B).applyQuaternion(r),_=new b(p,o,f).applyQuaternion(r),x=new b(p,l,f).applyQuaternion(r),E=new b(g,l,B).applyQuaternion(r),C=A.length/3;A.push(m.x,m.y,m.z,_.x,_.y,_.z,x.x,x.y,x.z,E.x,E.y,E.z),i.push(C,C+1,C+2,C,C+2,C+3)}}const s=new gt;return s.setAttribute("position",new ke(A,3)),s.setIndex(i),s.computeVertexNormals(),s}function RM(){const n=Ga||Kt&&Kt.geometry||null;if(!n)return;const e=new Vr(n),t=new An({color:G.lineColor,transparent:!0,opacity:1});bA=new Cn(e,t),jt.add(bA);const A=np();if(!A)return;const i=new Vr(A),r=new An({color:G.lineColor,transparent:!0,opacity:1,linewidth:2,depthTest:!1});nA=new Cn(i,r),nA.scale.setScalar(1.01),nA.renderOrder=3,nA.frustumCulled=!1,jt.add(nA)}function DM(){const n=Ga||Kt&&Kt.geometry||null;if(!n)return;const e=new Vr(n),t=new An({color:G.lineColor,transparent:!0,opacity:.85});bA=new Cn(e,t),bA.renderOrder=4,bA.frustumCulled=!1,jt.add(bA);const A=np();if(!A)return;const i=new Vr(A),r=new An({color:G.lineColor,transparent:!0,opacity:.85});nA=new Cn(i,r),nA.scale.setScalar(1.01),nA.renderOrder=5,nA.frustumCulled=!1,jt.add(nA)}function Af(n){const e=n[0]?n[0].points.length:Math.max(3,G.segments),t=new Fe(G.baseColor),A=new Fe(G.ridgeColor),i=[],r=[],s=[],a=n.length,o=e;function l(u,d){return u*o+d}for(let u=0;u<n.length;u+=1){const d=t.clone().lerp(A,u/(n.length-1)),g=n[u].points,B=n[u].center,p=n[u].mask||[];for(let f=0;f<e;f+=1){const m=g[f],_=m.clone().sub(B);_.lengthSq()<1e-6&&_.set(1,0,0),_.normalize();const x=p[f]||0;i.push(m.x,m.y,m.z),r.push(d.r*x,d.g*x,d.b*x)}}for(let u=0;u<a-1;u+=1)for(let d=0;d<e;d+=1){const g=(d+1)%e,B=(n[u].mask||[])[d]||0,p=(n[u].mask||[])[g]||0,f=(n[u+1].mask||[])[d]||0,m=(n[u+1].mask||[])[g]||0;if(B<=.02&&p<=.02&&f<=.02&&m<=.02)continue;const _=l(u,d),x=l(u,g),E=l(u+1,d),C=l(u+1,g);s.push(_,E,x,x,E,C)}const c=new gt;c.setAttribute("position",new ke(i,3)),c.setAttribute("color",new ke(r,3)),c.setIndex(s),c.computeVertexNormals();const h=new $r({vertexColors:!0,transparent:!0,opacity:1,roughness:.35,metalness:.35,side:hA});Mt=new ce(c,h),Mt.castShadow=!0,Mt.receiveShadow=!0,jt.add(Mt)}function HM(){_n.position.set(G.attractorX,G.attractorY,G.attractorZ),_n.geometry.dispose(),_n.geometry=new qr(G.attractorRadius,32,32),vA.update()}function ze(){IM(),HM(),LM(!0);const n=bM();QM(n);const e=Math.max(3,G.segments),t=n[0]?n[0].points.length:e,A=t===e?n:FM(n,e);if(Xi&&t!==e){const i=jd(Xi,e);i&&(Xi=i)}A[0]&&A[0].points&&(Ca=A[0].points.map(i=>i.clone())),G.mode==="mesh"?(Af(A),nf(),G.showEdges&&DM()):(Af(A),nf(),Kt&&(Kt.visible=!1),Mt&&(Mt.visible=!1),wt&&(wt.visible=!1),RM()),CM()}function PM(){const n=G.mode==="lines"?bA||wt:Kt||Mt;if(!n||!n.geometry||!n.material)return;const e=n.geometry.clone();e.computeBoundingSphere();const t=n.material.clone();let A=null;n.isLineSegments?A=new Cn(e,t):(A=new ce(e,t),A.castShadow=!0,A.receiveShadow=!0),n.updateMatrixWorld(!0),A.position.copy(n.getWorldPosition(new b)),A.quaternion.copy(n.getWorldQuaternion(new Qt)),A.scale.copy(n.getWorldScale(new b)),A.userData.bakeIndex=rA.children.length;const i=G.ringRadius*2.5*G.bakeBaseOffset,r=G.ringRadius*1.2*G.bakeSpacing,s=i+A.userData.bakeIndex*r;A.position.x+=s,A.userData.isBaked=!0,A.userData.sourceGeometry=e,A.userData.sourceMaterial=t,A.userData.sourceMode=n.isLineSegments?"lines":"mesh",A.frustumCulled=!1,rA.add(A),A.updateMatrixWorld(!0),Zd(A,e),qd([A])}function ip(){if(rA.children.length===0)return;const n=G.ringRadius*2.5*G.bakeBaseOffset,e=G.ringRadius*1.2*G.bakeSpacing;for(const t of rA.children){if(!t.userData||!t.userData.isBaked)continue;const A=t.userData.bakeIndex??0;t.position.x=n+A*e}ts()}function NM(){for(Gt.length=0,kt.detach(),kt.visible=!1;rA.children.length>0;){const n=rA.children.pop();Ic.delete(n),n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}}function OM(){const n=rA.children.pop();n&&(Ic.delete(n),n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose());const e=Gt.indexOf(n);e>=0&&Gt.splice(e,1),ts()}function nf(){if(!Mt||!wt||!(Mt.geometry&&wt.geometry))return;const n=ii(wt.geometry.clone(),1e-4),e=ii(Mt.geometry.clone(),1e-4),t=Math.max(1,Math.min(15,Math.floor(G.smoothnessStrength)));rf(e,t+3,.24+t*.03),KM(n,e,G.attractorRadius*4);const A=Math.max(4,Math.min(12,Math.round(G.smoothnessStrength)+2)),i=kM(Xi,Ca,A),s=Yf(i?[n,e,i]:[n,e],!0);if(!s)return;const a=ii(s,1e-4),o=Math.max(.05,G.extrusionWidth*1.5,G.stepLength*6,G.attractorRadius*4);zM(a,Xi,Ca,o),XM(a);const l=Math.min(.015,o*.1),c=ii(a,l);let h=GM(c,G.meshThickness,1.6);G.meshThickness>0&&(h=ii(h,1e-4),rf(h,4,.18)),rp(h),VM(h,G.baseColor,G.ridgeColor),h.computeVertexNormals(),Ga=h.clone();const u=new $r({vertexColors:!0,transparent:!0,opacity:1,roughness:.3,metalness:.45,side:hA});Kt=new ce(h,u),Kt.castShadow=!0,Kt.receiveShadow=!0,jt.add(Kt),jt.remove(Mt),Mt.geometry.dispose(),Mt.material.dispose(),Mt=null,G.mode==="mesh"?(jt.remove(wt),wt.geometry.dispose(),wt.material.dispose(),wt=null):wt&&(wt.visible=!1)}function rp(n){const e=n.getIndex();if(!e)return;const t=e.array;for(let A=0;A<t.length;A+=3){const i=t[A+1];t[A+1]=t[A+2],t[A+2]=i}e.needsUpdate=!0}function GM(n,e,t){const A=Math.max(0,e);if(A<=0)return n;const i=Math.max(.1,t),r=n.index?n:ii(n,1e-6);r.computeVertexNormals();const s=r.getAttribute("position"),a=r.getAttribute("normal"),o=r.getIndex();if(!o)return n;const l=s.count,c=new Float32Array(l*3),h=new Float32Array(l*3);for(let m=0;m<l;m+=1){const _=A*.5*i,x=s.getX(m)+a.getX(m)*_,E=s.getY(m)+a.getY(m)*_,C=s.getZ(m)+a.getZ(m)*_,M=s.getX(m)-a.getX(m)*_,F=s.getY(m)-a.getY(m)*_,w=s.getZ(m)-a.getZ(m)*_;c[m*3]=x,c[m*3+1]=E,c[m*3+2]=C,h[m*3]=M,h[m*3+1]=F,h[m*3+2]=w}const u=Array.from(o.array),d=l,g=u.slice();for(let m=0;m<u.length;m+=3){const _=u[m]+d,x=u[m+1]+d,E=u[m+2]+d;g.push(_,E,x)}const B=new Map;for(let m=0;m<u.length;m+=3){const _=[u[m],u[m+1],u[m+2]];for(let x=0;x<3;x+=1){const E=_[x],C=_[(x+1)%3],M=E<C?`${E}_${C}`:`${C}_${E}`;B.set(M,(B.get(M)||0)+1)}}B.forEach((m,_)=>{if(m!==1)return;const x=_.split("_"),E=Number(x[0]),C=Number(x[1]),M=E+d,F=C+d;g.push(E,C,F,E,F,M)});const p=new gt,f=new Float32Array(l*6);return f.set(c,0),f.set(h,l*3),p.setAttribute("position",new ke(f,3)),p.setIndex(g),p.computeVertexNormals(),p}function VM(n,e,t){const A=n.getAttribute("position");if(!A)return;n.computeBoundingBox();const i=n.boundingBox;if(!i)return;const r=i.min.y,s=i.max.y,a=Math.max(1e-6,s-r),o=new Fe(e),l=new Fe(t),c=new Float32Array(A.count*3);for(let h=0;h<A.count;h+=1){const u=(A.getY(h)-r)/a,d=o.clone().lerp(l,u);c[h*3]=d.r,c[h*3+1]=d.g,c[h*3+2]=d.b}n.setAttribute("color",new CA(c,3))}function kM(n,e,t){if(!n||!e)return null;const A=Math.min(n.length,e.length);if(A<3)return null;const i=Math.max(2,Math.floor(t||2)),r=[],s=[],a=[],o=new Fe(G.baseColor),l=new Fe(G.ridgeColor),c=[];for(let u=0;u<i;u+=1){const d=u/(i-1),g=[];for(let B=0;B<A;B+=1)g.push(n[B].clone().lerp(e[B],d));c.push(g)}for(let u=0;u<c.length-1;u+=1){const d=c[u],g=c[u+1],B=u/(c.length-1),p=(u+1)/(c.length-1);for(let f=0;f<A;f+=1){const m=(f+1)%A,_=d[f],x=d[m],E=g[m],C=g[f],M=r.length/3;r.push(_.x,_.y,_.z,x.x,x.y,x.z,E.x,E.y,E.z,C.x,C.y,C.z);const F=o.clone().lerp(l,B),w=o.clone().lerp(l,B),y=o.clone().lerp(l,p),T=o.clone().lerp(l,p);s.push(F.r,F.g,F.b,w.r,w.g,w.b,y.r,y.g,y.b,T.r,T.g,T.b),a.push(M,M+1,M+2,M,M+2,M+3)}}const h=new gt;return h.setAttribute("position",new ke(r,3)),h.setAttribute("color",new ke(s,3)),h.setIndex(a),h.computeVertexNormals(),h}function KM(n,e,t){const A=n.getAttribute("position"),i=e.getAttribute("position");if(!A||!i)return;const r=Math.max(.01,t),s=r*r,a=[];for(let o=0;o<A.count;o+=1)a.push(new b(A.getX(o),A.getY(o),A.getZ(o)));for(let o=0;o<i.count;o+=1){const l=i.getX(o),c=i.getY(o),h=i.getZ(o);let u=null,d=1/0,g=-1;for(let B=0;B<a.length;B+=1){const p=a[B],f=p.x-l,m=p.y-c,_=p.z-h,x=f*f+m*m+_*_;x<d&&(d=x,u=p,g=B)}if(u&&d<=s){const B=(l+u.x)*.5,p=(c+u.y)*.5,f=(h+u.z)*.5;i.setXYZ(o,B,p,f),g>=0&&A.setXYZ(g,B,p,f)}}i.needsUpdate=!0,A.needsUpdate=!0}function zM(n,e,t,A){if(!n||!e||!t)return n;const i=Math.min(e.length,t.length);if(i<3)return n;const r=Math.max(.001,A),s=r*r,a=new Array(i);for(let l=0;l<i;l+=1){const c=e[l],h=t[l];a[l]=new b((c.x+h.x)*.5,(c.y+h.y)*.5,(c.z+h.z)*.5)}const o=n.getAttribute("position");for(let l=0;l<o.count;l+=1){const c=o.getX(l),h=o.getY(l),u=o.getZ(l);let d=-1,g=s;for(let B=0;B<i;B+=1){const p=a[B],f=p.x-c,m=p.y-h,_=p.z-u,x=f*f+m*m+_*_;x<g&&(g=x,d=B)}if(d>=0){const B=a[d],f=1-Math.sqrt(g)/r;o.setXYZ(l,c+(B.x-c)*f,h+(B.y-h)*f,u+(B.z-u)*f)}}return o.needsUpdate=!0,n}function WM(n){const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)}function XM(n){const e=n.getAttribute("position");if(!e)return;const t=Math.max(.001,G.ringRadius),A=Math.max(.001,G.extrusionWidth),i=new b(G.attractorX,G.attractorY,G.attractorZ),r=Math.max(.05,G.deformableZone||1),s=Math.max(A*1.5,G.stepLength*4),a=t-s,o=t+s,l=A*1.4;for(let c=0;c<e.count;c+=1){const h=e.getX(c);if(Math.abs(h)>l)continue;const u=e.getY(c),d=e.getZ(c),g=Math.sqrt(u*u+d*d);if(g<a||g>o||g<1e-6)continue;const B=Ea(new b(h,u,d),i),f=1-WM(Math.pow(B,.6*r));if(f<=0)continue;const m=t/g,_=u*m,x=d*m;e.setXYZ(c,h,u+(_-u)*f,d+(x-d)*f)}e.needsUpdate=!0}function rf(n,e,t){const A=n.getAttribute("position"),i=n.getIndex();if(!A||!i)return;const r=A.count,s=Array.from({length:r},()=>new Set),a=i.array;for(let l=0;l<a.length;l+=3){const c=a[l],h=a[l+1],u=a[l+2];s[c].add(h),s[c].add(u),s[h].add(c),s[h].add(u),s[u].add(c),s[u].add(h)}const o=new Float32Array(r*3);for(let l=0;l<e;l+=1){for(let c=0;c<r;c+=1){const h=s[c];if(!h||h.size===0){o[c*3]=A.getX(c),o[c*3+1]=A.getY(c),o[c*3+2]=A.getZ(c);continue}let u=0,d=0,g=0;h.forEach(_=>{u+=A.getX(_),d+=A.getY(_),g+=A.getZ(_)});const B=1/h.size;u*=B,d*=B,g*=B;const p=A.getX(c),f=A.getY(c),m=A.getZ(c);o[c*3]=p+(u-p)*t,o[c*3+1]=f+(d-f)*t,o[c*3+2]=m+(g-m)*t}for(let c=0;c<r;c+=1)A.setXYZ(c,o[c*3],o[c*3+1],o[c*3+2])}A.needsUpdate=!0}const kA=new Cc({width:250}),kn=kA.addFolder("Growth");kn.add(G,"mode",["mesh","lines"]).onChange(ze);kn.add(G,"showEdges").onChange(ze);kn.add(G,"segments",250,500,1).onChange(ze);kn.add(G,"simSegmentsCap",50,151,1).onChange(ze);kn.add(G,"iterations",4,30,1).onChange(ze);kn.add(G,"stepLength",.02,.3,.01).onChange(ze);kn.add(G,"twist",-10,10,.01).onChange(ze);kn.add(G,"growthFalloff",.2,2,.05).onChange(ze);const ir=kA.addFolder("Base");ir.add(G,"ringRadius",1,3,.05).onChange(ze);ir.add(G,"ringSegments",60,300,1).onChange(ze);ir.add(G,"extrusionWidth",.1,.5,.01).onChange(ze);ir.add(G,"baseQuadDivisions",1,10,1).onChange(ze);ir.add(G,"baseCullFalloff",.05,1.5,.01).onChange(ze);ir.add(G,"deformableZone",1,5,.05).onChange(ze);const an=kA.addFolder("Leaf");an.add(G,"ruffleAmplitude",0,1,.01).onChange(ze);an.add(G,"ruffleFrequency",.5,12,.1).onChange(ze);an.add(G,"ruffleGrowth",0,2,.05).onChange(ze);an.add(G,"leafGrowth",.1,3,.05).onChange(ze);an.add(G,"ridgeLift",0,1,.01).onChange(ze);an.add(G,"ridgeSharpness",.2,3,.05).onChange(ze);an.add(G,"curl",-1,1,.01).onChange(ze);an.add(G,"rimCurlWidth",.05,.3,.01).onChange(ze);an.add(G,"bowl",-.3,-.05,.01).onChange(ze);an.add(G,"taper",0,1.5,.01).onChange(ze);const Rc=kA.addFolder("Attractor");Rc.add(G,"attractorRadius",.1,.3,.01).onChange(ze);Rc.add(G,"attractorStrength",0,1,.01).onChange(ze);Rc.add(G,"attractorBias",0,.7,.01).onChange(ze);const sp=kA.addFolder("Material");sp.add(G,"meshThickness",0,.035,.001).onChange(ze);sp.add(G,"smoothnessStrength",1,20,1).onChange(ze);const Dc=kA.addFolder("Collision");Dc.add(G,"collisionStrength",0,.001,1e-4).onChange(ze);Dc.add(G,"collisionIterations",0,15,1).onChange(ze);Dc.add(G,"collisionRange",1,15,.05).onChange(ze);function sf(){const n=Math.random(),e=1,t=.5,A=new Fe;return A.setHSL(n,e,t),`#${A.getHexString()}`}const As=kA.addFolder("Color"),ap=As.addColor(G,"ridgeColor").onChange(ze),op=As.addColor(G,"baseColor").onChange(ze);As.addColor(G,"lineColor").onChange(ze);const xr=[];function YM(n,e){return Math.sqrt(Math.pow(n.r-e.r,2)+Math.pow(n.g-e.g,2)+Math.pow(n.b-e.b,2))}function ZM(n,e){const t={h:0,s:0,l:0},A={h:0,s:0,l:0};n.getHSL(t),e.getHSL(A);const i=Math.abs(t.h-A.h);return Math.min(i,1-i)}function af(n){for(let A=0;A<40;A+=1){const i=sf(),r=new Fe(i);let s=!0;for(const a of n){if(ZM(r,a)<.18){s=!1;break}if(YM(r,a)<.35){s=!1;break}}if(s)return i}return sf()}function JM(){const n=xr.map(A=>new Fe(A)).concat([new Fe(G.baseColor),new Fe(G.ridgeColor)]),e=af(n);n.push(new Fe(e));const t=af(n);G.ridgeColor=e,G.baseColor=t,xr.push(e,t),xr.length>12&&xr.splice(0,xr.length-12),ze(),ap.updateDisplay(),op.updateDisplay()}As.add({randomColors:JM},"randomColors");const of=As.controllers.at(-1);of&&of.onChange(()=>{ap.updateDisplay(),op.updateDisplay()});function qM(){if(G.mode!=="mesh"){alert("Switch to mesh mode before exporting.");return}const n=xM();if(!n)return;const e=new ce(n,new $r({vertexColors:!0})),A=new px().parse(e,void 0,{binary:!1});wM(A,"floral-ring.ply","text/plain")}const $M=kA.addFolder("Export");$M.add({"export .ply":qM},"export .ply");const rr=kA.addFolder("View");rr.add(G,"autoRotate");rr.add({bakeGeometry:PM},"bakeGeometry");rr.add({deleteLastBake:OM},"deleteLastBake");rr.add({clearBakes:NM},"clearBakes");rr.add(G,"bakeBaseOffset",.5,4,.05).onChange(ip);rr.add(G,"bakeSpacing",.5,10,.05).onChange(ip);kA.close();const hi=kA.domElement;let Hr=null;const Va=document.createElement("div");Va.className="gui-drag-bar";Va.textContent="Drag Me";hi.prepend(Va);function jM(n){if(!n.isPrimary||!n.target.classList.contains("gui-drag-bar"))return;n.preventDefault(),n.stopPropagation();const e=hi.getBoundingClientRect();hi.classList.add("is-dragging"),Hr={offsetX:n.clientX-e.left,offsetY:n.clientY-e.top},hi.style.right="auto",window.addEventListener("pointermove",lp),window.addEventListener("pointerup",eU,{once:!0})}function lp(n){if(!Hr)return;const e=n.clientX-Hr.offsetX,t=n.clientY-Hr.offsetY;hi.style.left=`${Math.max(0,e)}px`,hi.style.top=`${Math.max(0,t)}px`}function eU(){hi.classList.remove("is-dragging"),Hr=null,window.removeEventListener("pointermove",lp)}Va.addEventListener("pointerdown",jM);function tU(){OA.aspect=window.innerWidth/window.innerHeight,OA.updateProjectionMatrix(),IA.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",tU);const AU=new Hg;function cp(){requestAnimationFrame(cp);const n=AU.getDelta();G.autoRotate&&(jt.rotation.y+=n*.35),IA.render(Vt,OA),sn.update()}function nU(n){if(n.button!==0||n.target&&n.target.closest&&n.target.closest(".lil-gui")||kt.dragging)return;const e=IA.domElement.getBoundingClientRect();Xo.x=(n.clientX-e.left)/e.width*2-1,Xo.y=-((n.clientY-e.top)/e.height)*2+1,sc.setFromCamera(Xo,OA);const t=sc.intersectObjects(rA.children,!0);let A=null;if(t.length>0)if(A=t[0].object,A.userData.bakeTarget)A=A.userData.bakeTarget;else for(;A&&!A.userData.isBaked&&A.parent;)A=A.parent;else{let i=null,r=1/0;const s=new b,a=new b,o=new b;o.setFromMatrixColumn(OA.matrixWorld,0);for(const l of rA.children){if(!l.userData||!l.userData.isBaked)continue;const c=l.userData.sourceGeometry||l.geometry;if(!c||!c.boundingSphere)continue;l.getWorldPosition(s),s.project(OA);const h=(s.x+1)*.5*e.width+e.left,u=(-s.y+1)*.5*e.height+e.top,d=c.boundingSphere.radius*Math.max(l.scale.x,l.scale.y,l.scale.z);a.copy(o).multiplyScalar(d).add(l.position),a.project(OA);const g=(a.x+1)*.5*e.width+e.left,B=(-a.y+1)*.5*e.height+e.top,p=Math.max(12,Math.hypot(g-h,B-u)),f=h-n.clientX,m=u-n.clientY,_=Math.sqrt(f*f+m*m);_<=p*1.1&&_<r&&(r=_,i=l)}i&&(A=i)}if(A&&A.userData&&A.userData.isBaked){n.shiftKey?EM(A):qd([A]);return}n.shiftKey||(Gt.length=0,kt.detach(),kt.visible=!1)}window.addEventListener("pointerdown",nU,!0);ze();cp();
