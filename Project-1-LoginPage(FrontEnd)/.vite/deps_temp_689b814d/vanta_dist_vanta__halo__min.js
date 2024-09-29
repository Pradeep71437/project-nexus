import {
  __commonJS
} from "./chunk-5WRI5ZAA.js";

// node_modules/vanta/dist/vanta.halo.min.js
var require_vanta_halo_min = __commonJS({
  "node_modules/vanta/dist/vanta.halo.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports._vantaEffect = t() : e._vantaEffect = t();
    }("undefined" != typeof self ? self : exports, () => (() => {
      "use strict";
      var e = { d: (t2, i2) => {
        for (var n2 in i2) e.o(i2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: i2[n2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { default: () => f }), Number.prototype.clamp = function(e2, t2) {
        return Math.min(Math.max(this, e2), t2);
      };
      function i(e2) {
        for (; e2.children && e2.children.length > 0; ) i(e2.children[0]), e2.remove(e2.children[0]);
        e2.geometry && e2.geometry.dispose(), e2.material && (Object.keys(e2.material).forEach((t2) => {
          e2.material[t2] && null !== e2.material[t2] && "function" == typeof e2.material[t2].dispose && e2.material[t2].dispose();
        }), e2.material.dispose());
      }
      const n = "object" == typeof window;
      let o = n && window.THREE || {};
      n && !window.VANTA && (window.VANTA = {});
      const s = n && window.VANTA || {};
      s.register = (e2, t2) => s[e2] = (e3) => new t2(e3), s.version = "0.5.24";
      const r = function() {
        return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments);
      };
      s.VantaBase = class {
        constructor(e2 = {}) {
          if (!n) return false;
          s.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.windowGyroWrapper = this.windowGyroWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this);
          const t2 = "function" == typeof this.getDefaultOptions ? this.getDefaultOptions() : this.defaultOptions;
          if (this.options = Object.assign({ mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1 }, t2), (e2 instanceof HTMLElement || "string" == typeof e2) && (e2 = { el: e2 }), Object.assign(this.options, e2), this.options.THREE && (o = this.options.THREE), this.el = this.options.el, null == this.el) r('Instance needs "el" param!');
          else if (!(this.options.el instanceof HTMLElement)) {
            const e3 = this.el;
            if (this.el = (i2 = e3, document.querySelector(i2)), !this.el) return void r("Cannot find element", e3);
          }
          var i2, a2;
          this.prepareEl(), this.initThree(), this.setSize();
          try {
            this.init();
          } catch (e3) {
            return r("Init error", e3), this.renderer && this.renderer.domElement && this.el.removeChild(this.renderer.domElement), void (this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = (a2 = this.options.backgroundColor, "number" == typeof a2 ? "#" + ("00000" + a2.toString(16)).slice(-6) : a2)));
          }
          this.initMouse(), this.resize(), this.animationLoop();
          const c2 = window.addEventListener;
          c2("resize", this.resize), window.requestAnimationFrame(this.resize), this.options.mouseControls && (c2("scroll", this.windowMouseMoveWrapper), c2("mousemove", this.windowMouseMoveWrapper)), this.options.touchControls && (c2("touchstart", this.windowTouchWrapper), c2("touchmove", this.windowTouchWrapper)), this.options.gyroControls && c2("deviceorientation", this.windowGyroWrapper);
        }
        setOptions(e2 = {}) {
          Object.assign(this.options, e2), this.triggerMouseMove();
        }
        prepareEl() {
          let e2, t2;
          if ("undefined" != typeof Node && Node.TEXT_NODE) for (e2 = 0; e2 < this.el.childNodes.length; e2++) {
            const t3 = this.el.childNodes[e2];
            if (t3.nodeType === Node.TEXT_NODE) {
              const e3 = document.createElement("span");
              e3.textContent = t3.textContent, t3.parentElement.insertBefore(e3, t3), t3.remove();
            }
          }
          for (e2 = 0; e2 < this.el.children.length; e2++) t2 = this.el.children[e2], "static" === getComputedStyle(t2).position && (t2.style.position = "relative"), "auto" === getComputedStyle(t2).zIndex && (t2.style.zIndex = 1);
          "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative");
        }
        applyCanvasStyles(e2, t2 = {}) {
          Object.assign(e2.style, { position: "absolute", zIndex: 0, top: 0, left: 0, background: "" }), Object.assign(e2.style, t2), e2.classList.add("vanta-canvas");
        }
        initThree() {
          o.WebGLRenderer ? (this.renderer = new o.WebGLRenderer({ alpha: true, antialias: true }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new o.Scene()) : console.warn("[VANTA] No THREE defined on window");
        }
        getCanvasElement() {
          return this.renderer ? this.renderer.domElement : this.p5renderer ? this.p5renderer.canvas : void 0;
        }
        getCanvasRect() {
          const e2 = this.getCanvasElement();
          return !!e2 && e2.getBoundingClientRect();
        }
        windowMouseMoveWrapper(e2) {
          const t2 = this.getCanvasRect();
          if (!t2) return false;
          const i2 = e2.clientX - t2.left, n2 = e2.clientY - t2.top;
          i2 >= 0 && n2 >= 0 && i2 <= t2.width && n2 <= t2.height && (this.mouseX = i2, this.mouseY = n2, this.options.mouseEase || this.triggerMouseMove(i2, n2));
        }
        windowTouchWrapper(e2) {
          const t2 = this.getCanvasRect();
          if (!t2) return false;
          if (1 === e2.touches.length) {
            const i2 = e2.touches[0].clientX - t2.left, n2 = e2.touches[0].clientY - t2.top;
            i2 >= 0 && n2 >= 0 && i2 <= t2.width && n2 <= t2.height && (this.mouseX = i2, this.mouseY = n2, this.options.mouseEase || this.triggerMouseMove(i2, n2));
          }
        }
        windowGyroWrapper(e2) {
          const t2 = this.getCanvasRect();
          if (!t2) return false;
          const i2 = Math.round(2 * e2.alpha) - t2.left, n2 = Math.round(2 * e2.beta) - t2.top;
          i2 >= 0 && n2 >= 0 && i2 <= t2.width && n2 <= t2.height && (this.mouseX = i2, this.mouseY = n2, this.options.mouseEase || this.triggerMouseMove(i2, n2));
        }
        triggerMouseMove(e2, t2) {
          void 0 === e2 && void 0 === t2 && (this.options.mouseEase ? (e2 = this.mouseEaseX, t2 = this.mouseEaseY) : (e2 = this.mouseX, t2 = this.mouseY)), this.uniforms && (this.uniforms.iMouse.value.x = e2 / this.scale, this.uniforms.iMouse.value.y = t2 / this.scale);
          const i2 = e2 / this.width, n2 = t2 / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(i2, n2);
        }
        setSize() {
          this.scale || (this.scale = 1), "undefined" != typeof navigator && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600) && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = Math.max(this.el.offsetWidth, this.options.minWidth), this.height = Math.max(this.el.offsetHeight, this.options.minHeight);
        }
        initMouse() {
          (!this.mouseX && !this.mouseY || this.mouseX === this.options.minWidth / 2 && this.mouseY === this.options.minHeight / 2) && (this.mouseX = this.width / 2, this.mouseY = this.height / 2, this.triggerMouseMove(this.mouseX, this.mouseY));
        }
        resize() {
          this.setSize(), this.camera && (this.camera.aspect = this.width / this.height, "function" == typeof this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix()), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize();
        }
        isOnScreen() {
          const e2 = this.el.offsetHeight, t2 = this.el.getBoundingClientRect(), i2 = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop, n2 = t2.top + i2;
          return n2 - window.innerHeight <= i2 && i2 <= n2 + e2;
        }
        animationLoop() {
          this.t || (this.t = 0), this.t2 || (this.t2 = 0);
          const e2 = performance.now();
          if (this.prevNow) {
            let t2 = (e2 - this.prevNow) / (1e3 / 60);
            t2 = Math.max(0.2, Math.min(t2, 5)), this.t += t2, this.t2 += (this.options.speed || 1) * t2, this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2);
          }
          return this.prevNow = e2, this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > 0.1 && (this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), (this.isOnScreen() || this.options.forceAnimate) && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update(), "function" == typeof this.afterRender && this.afterRender()), this.req = window.requestAnimationFrame(this.animationLoop);
        }
        restart() {
          if (this.scene) for (; this.scene.children.length; ) this.scene.remove(this.scene.children[0]);
          "function" == typeof this.onRestart && this.onRestart(), this.init();
        }
        init() {
          "function" == typeof this.onInit && this.onInit();
        }
        destroy() {
          "function" == typeof this.onDestroy && this.onDestroy();
          const e2 = window.removeEventListener;
          e2("touchstart", this.windowTouchWrapper), e2("touchmove", this.windowTouchWrapper), e2("scroll", this.windowMouseMoveWrapper), e2("mousemove", this.windowMouseMoveWrapper), e2("deviceorientation", this.windowGyroWrapper), e2("resize", this.resize), window.cancelAnimationFrame(this.req);
          const t2 = this.scene;
          t2 && t2.children && i(t2), this.renderer && (this.renderer.domElement && this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null), s.current === this && (s.current = null);
        }
      };
      const a = s.VantaBase;
      let c = "object" == typeof window && window.THREE;
      class h extends a {
        constructor(e2) {
          c = e2.THREE || c, c.Color.prototype.toVector = function() {
            return new c.Vector3(this.r, this.g, this.b);
          }, super(e2), this.updateUniforms = this.updateUniforms.bind(this);
        }
        init() {
          this.mode = "shader", this.uniforms = { iTime: { type: "f", value: 1 }, iResolution: { type: "v2", value: new c.Vector2(1, 1) }, iDpr: { type: "f", value: window.devicePixelRatio || 1 }, iMouse: { type: "v2", value: new c.Vector2(this.mouseX || 0, this.mouseY || 0) } }, super.init(), this.fragmentShader && this.initBasicShader();
        }
        setOptions(e2) {
          super.setOptions(e2), this.updateUniforms();
        }
        initBasicShader(e2 = this.fragmentShader, t2 = this.vertexShader) {
          t2 || (t2 = "uniform float uTime;\nuniform vec2 uResolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"), this.updateUniforms(), "function" == typeof this.valuesChanger && this.valuesChanger();
          const i2 = new c.ShaderMaterial({ uniforms: this.uniforms, vertexShader: t2, fragmentShader: e2 }), n2 = this.options.texturePath;
          n2 && (this.uniforms.iTex = { type: "t", value: new c.TextureLoader().load(n2) });
          const o2 = new c.Mesh(new c.PlaneGeometry(2, 2), i2);
          this.scene.add(o2), this.camera = new c.Camera(), this.camera.position.z = 1;
        }
        updateUniforms() {
          const e2 = {};
          let t2, i2;
          for (t2 in this.options) i2 = this.options[t2], -1 !== t2.toLowerCase().indexOf("color") ? e2[t2] = { type: "v3", value: new c.Color(i2).toVector() } : "number" == typeof i2 && (e2[t2] = { type: "f", value: i2 });
          return Object.assign(this.uniforms, e2);
        }
        resize() {
          super.resize(), this.uniforms.iResolution.value.x = this.width / this.scale, this.uniforms.iResolution.value.y = this.height / this.scale;
        }
      }
      let l = "object" == typeof window && window.THREE;
      class u extends h {
        constructor(e2) {
          l = e2.THREE || l, super(e2);
        }
        getDefaultOptions() {
          return { baseColor: 6745, color2: 15918901, backgroundColor: 1251907, amplitudeFactor: 1, ringFactor: 1, rotationFactor: 1, xOffset: 0, yOffset: 0, size: 1, speed: 1, mouseEase: true, scaleMobile: 1, scale: 1 };
        }
        onInit() {
          const e2 = { minFilter: l.LinearFilter, magFilter: l.LinearFilter, format: l.RGBFormat }, t2 = this.width * window.devicePixelRatio / this.scale, i2 = this.height * window.devicePixelRatio / this.scale;
          this.bufferTarget = new l.WebGLRenderTarget(t2, i2, e2), this.bufferFeedback = new l.WebGLRenderTarget(t2, i2, e2);
        }
        initBasicShader(e2, t2) {
          super.initBasicShader(e2, t2), this.uniforms.iBuffer = { type: "t", value: this.bufferTarget.texture };
        }
        onUpdate() {
          this.uniforms.iBuffer.value = this.bufferFeedback.texture;
          const e2 = this.renderer;
          e2.setRenderTarget(this.bufferTarget), e2.render(this.scene, this.camera), e2.setRenderTarget(null), e2.clear();
          let t2 = this.bufferTarget;
          this.bufferTarget = this.bufferFeedback, this.bufferFeedback = t2;
        }
        onResize() {
          if (this.bufferTarget) {
            const e2 = this.width * window.devicePixelRatio / this.scale, t2 = this.height * window.devicePixelRatio / this.scale;
            this.bufferTarget.setSize(e2, t2), this.bufferFeedback.setSize(e2, t2);
          }
        }
        onDestroy() {
          this.bufferTarget = null, this.bufferFeedback = null;
        }
      }
      const f = s.register("HALO", u);
      return u.prototype.fragmentShader = "uniform vec2 iResolution;\nuniform float iDpr;\nuniform vec2 iMouse;\nuniform float iTime;\n\nuniform float xOffset;\nuniform float yOffset;\nuniform vec3 baseColor;\nuniform vec3 color2;\nuniform vec3 backgroundColor;\nuniform float size;\nuniform float shape;\nuniform float ringFactor;\nuniform float rotationFactor;\nuniform float amplitudeFactor;\n\nuniform sampler2D iBuffer;\nuniform sampler2D iTex;\nconst float PI = 3.14159265359;\n\n// float length2(vec2 p) { return dot(p, p); }\n\n// float noise(vec2 p){\n//   return fract(sin(fract(sin(p.x) * (43.13311)) + p.y) * 31.0011);\n// }\n\n// float worley(vec2 p) {\n//     float d = 1e30;\n//     for (int xo = -1; xo <= 1; ++xo) {\n//         for (int yo = -1; yo <= 1; ++yo) {\n//             vec2 tp = floor(p) + vec2(xo, yo);\n//             d = min(d, length2(p - tp - vec2(noise(tp))));\n//         }\n//     }\n//     vec2 uv = gl_FragCoord.xy / iResolution.xy;\n//     float timeOffset =  0.15 * sin(iTime * 2.0 + 10.0*(uv.x - uv.y));\n//     return 3.0*exp(-4.0*abs(2.0*d - 1.0 + timeOffset));\n// }\n\n// float fworley(vec2 p) {\n//     return sqrt(\n//     1.1 * // light\n//     worley(p*10. + .3 + iTime*.0525) *\n//     sqrt(worley(p * 50. / size + 0.1 + iTime * -0.75)) *\n//     4.1 *\n//     sqrt(sqrt(worley(p * -1. + 9.3))));\n// }\n\nvec4 j2hue(float c) {\n  return .5+.5*cos(6.28*c+vec4(0,-2.1,2.1,0));\n}\n\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise(vec2 v){\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n           -0.577350269189626, 0.024390243902439);\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n    dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvec2 sincos( float x ){return vec2(sin(x), cos(x));}\nvec2 rotate2d(vec2 uv, float phi){vec2 t = sincos(phi); return vec2(uv.x*t.y-uv.y*t.x, uv.x*t.x+uv.y*t.y);}\nvec3 rotate3d(vec3 p, vec3 v, float phi){ v = normalize(v); vec2 t = sincos(-phi); float s = t.x, c = t.y, x =-v.x, y =-v.y, z =-v.z; mat4 M = mat4(x*x*(1.-c)+c,x*y*(1.-c)-z*s,x*z*(1.-c)+y*s,0.,y*x*(1.-c)+z*s,y*y*(1.-c)+c,y*z*(1.-c)-x*s,0.,z*x*(1.-c)-y*s,z*y*(1.-c)+x*s,z*z*(1.-c)+c,0.,0.,0.,0.,1.);return (vec4(p,1.)*M).xyz;}\n\n// Classic Perlin 3D Noise\n// by Stefan Gustavson\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat p3d(vec3 P){\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n\nvoid main() {\n  vec2 res2 = iResolution.xy * iDpr;\n  vec2 pixel = vec2(gl_FragCoord.xy - 0.5 * res2) / res2.y; // center-origin pixel coord\n  pixel.x -= xOffset * res2.x / res2.y;\n  pixel.y -= yOffset;\n\n  vec2 uv = gl_FragCoord.xy / res2; // 0 to 1\n\n  // float nn1 = snoise(uv * 0.25 + iTime * 0.005 + mixedColor.b * 0.01) * 0.1;\n  // float nn2 = snoise(uv * 0.25 + iTime * 0.005 + mixedColor.b * 0.01 + 1000.) * 0.1;\n  // uv += vec2(nn1, nn2);\n\n  // PERLIN DISTORTION\n  // float noiseScale = 10.;\n  // float timeScale = 0.5;\n  // uv += vec2( p3d(vec3(uv * noiseScale, iTime * timeScale)), p3d(vec3(1000. + uv * noiseScale , iTime * timeScale)) ) * 0.001;\n\n  // uv = rotate2d(uv, 0.001);\n  // pixel = rotate2d(pixel, 0.001);\n\n  vec2 mouse2 = (iMouse * iDpr / res2 - 0.5) * vec2(1.,-1.);\n  vec2 uvBig = (uv - 0.5) * 0.996 + 0.5;\n\n  vec4 oldImage = texture2D(iBuffer, uv);\n  vec3 mixedColor = oldImage.rgb - backgroundColor;\n\n  // float spinDist = 0.002 + 0.002 * sin(iTime * 0.4);\n  float cropDist = 0.01;\n  float cropXOffset = 0.2;\n  float cropYOffset = 0.2;\n  // float cropXOffset = 0.4 + 0.1 * sin(iTime * 0.4);\n  // float cropYOffset = 0.4 + 0.1 * cos(iTime * 0.6);\n\n  vec2 offset = uv + vec2((mixedColor.g - cropXOffset) * cropDist, (mixedColor.r - cropYOffset) * cropDist);\n\n  // float nn = snoise(uv * 10.) * 0.001;\n  // offset += nn;\n\n  float spinDist = 0.001;\n  float spinSpeed = 0.2 + 0.15 * cos(iTime * 0.5);\n  float timeFrac = mod(iTime, 6.5);\n  vec2 offset2 = uvBig + vec2(cos(timeFrac * spinSpeed) * spinDist, sin(timeFrac * spinSpeed) * spinDist);\n\n  mixedColor = texture2D(iBuffer, offset).rgb * 0.4\n    + texture2D(iBuffer, offset2).rgb * 0.6\n    - backgroundColor;\n\n\n  // mixedColor *= .875;\n  float fadeAmt = 0.0015; // fade this amount each frame // 0.002\n  mixedColor = (mixedColor - fadeAmt) * .995;\n\n  // float nn = snoise(uvBig * 10.) * 20.;\n  // mixedColor *= clamp(nn, 0.98, 1.0);\n\n  vec4 spectrum = abs( abs( .95*atan(uv.x, uv.y) -vec4(0,2,4,0) ) -3. )-1.;\n  float angle = atan(pixel.x, pixel.y);\n  float dist = length(pixel - mouse2*0.15) * 8. + sin(iTime) * .01;\n\n  // mixedColor *= pow(1.-dist*0.002, 2.);\n\n\n  // Flowery shapes\n  // float edge = abs(dist * 0.5);\n  float flowerPeaks = .05 * amplitudeFactor * size;\n  float flowerPetals = 7.;\n  float edge = abs((dist + sin(angle * flowerPetals + iTime * 0.5) * sin(iTime * 1.5) * flowerPeaks) * 0.65 / size);\n  // float edge = abs((dist + sin(angle * 4. + iTime * 2.) * sin(iTime * 3.) * 0.75) * 1.);\n\n  // vec4 rainbow = abs( abs( .95*mod(iTime * 1., 2. * PI) - vec4(0,2,4,0) ) -3. )-1.;\n  // vec4 rainbow = vec4(0,2,4,0);\n\n  float colorChangeSpeed = 0.75 + 0.05 * sin(iTime) * 1.5;\n  float rainbowInput = timeFrac * colorChangeSpeed;\n  // NOISE!\n  // float nn = snoise(uv * 0.25 + iTime * 0.005 + mixedColor.b * 0.01) * 20.;\n  // rainbowInput += nn;\n\n  float brightness = 0.7;\n  vec4 rainbow = sqrt(j2hue(cos(rainbowInput))) + vec4(baseColor,0) - 1.0 + brightness;\n  float factor = smoothstep(1., .9, edge) * pow(edge, 2.);\n  vec3 color = rainbow.rgb * smoothstep(1., .9, edge) * pow(edge, 20.);\n  vec4 ring = vec4(\n    backgroundColor + clamp( mixedColor + color, 0., 1.)\n    , 1.0);\n\n  // float t = fworley(uv * u_resolution.xy / 1500.0);\n  // t *= exp(-length2(abs(0.7*uv - 1.0)));\n  // float tExp = pow(t, 2. - t);\n  // vec3 c1 = color1 * (1.0 - t);\n  // vec3 c2 = color2 * tExp;\n  // vec4 cells = vec4(mixedColor * 0.25, 1.) + vec4(pow(t, 1.0 - t) * (c1 + c2), 1.0);\n  // gl_FragColor = clamp(ring + cells * 0.5, 0.0, 1.0);\n\n  // float nn = snoise(uv * 10.) * 0.01; // creepy!\n  gl_FragColor = ring;\n}\n", t;
    })());
  }
});
export default require_vanta_halo_min();
//# sourceMappingURL=vanta_dist_vanta__halo__min.js.map
