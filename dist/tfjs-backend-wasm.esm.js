var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod2) => function __require2() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

// (disabled):src/node_modules/.pnpm/node-fetch@3.2.10/node_modules/node-fetch/src/index.js
var src_exports = {};
var init_src = __esm({
  "(disabled):src/node_modules/.pnpm/node-fetch@3.2.10/node_modules/node-fetch/src/index.js"() {
  }
});

// (disabled):util
var require_util = __commonJS({
  "(disabled):util"() {
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/alea.js"(exports, module) {
    (function(global2, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor128.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v, w;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init2(me2, seed2) {
          var j, w, X = [];
          if (seed2 === (seed2 | 0)) {
            w = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8)
            X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j)
            ;
          if (j == 8)
            w = X[7] = -1;
          else
            w = X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init2(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init2(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2)
              v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0)
              w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init2(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      ;
      function impl(seed, opts) {
        if (seed == null)
          seed = +new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/tychei.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      typeof define == "function" && define
    );
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global2, pool2, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten2(
          options.entropy ? [seed, tostring(pool2)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool2);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else
            return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      ;
      function flatten2(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten2(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global2.crypto || global2.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global2.navigator, plugins = browser && browser.plugins;
          return [+new Date(), global2, plugins, global2.screen, tostring(pool2)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool2);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom2;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom2;
        });
      } else {
        math["seed" + rngname] = seedrandom2;
      }
    })(
      typeof self !== "undefined" ? self : exports,
      [],
      Math
    );
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js"(exports, module) {
    var alea2 = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea2;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// (disabled):path
var require_path = __commonJS({
  "(disabled):path"() {
  }
});

// (disabled):fs
var require_fs = __commonJS({
  "(disabled):fs"() {
  }
});

// (disabled):worker_threads
var require_worker_threads = __commonJS({
  "(disabled):worker_threads"() {
  }
});

// (disabled):perf_hooks
var require_perf_hooks = __commonJS({
  "(disabled):perf_hooks"() {
  }
});

// (disabled):os
var require_os = __commonJS({
  "(disabled):os"() {
  }
});

// src/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-threaded-simd.js
var require_tfjs_backend_wasm_threaded_simd = __commonJS({
  "src/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-threaded-simd.js"(exports, module) {
    "use strict";
    var WasmBackendModuleThreadedSimd2 = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined")
        _scriptDir = _scriptDir || __filename;
      return function(WasmBackendModuleThreadedSimd3) {
        WasmBackendModuleThreadedSimd3 = WasmBackendModuleThreadedSimd3 || {};
        function GROWABLE_HEAP_I8() {
          if (wasmMemory.buffer != buffer2) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAP8;
        }
        function GROWABLE_HEAP_U8() {
          if (wasmMemory.buffer != buffer2) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAPU8;
        }
        function GROWABLE_HEAP_I16() {
          if (wasmMemory.buffer != buffer2) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAP16;
        }
        function GROWABLE_HEAP_U16() {
          if (wasmMemory.buffer != buffer2) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAPU16;
        }
        function GROWABLE_HEAP_I32() {
          if (wasmMemory.buffer != buffer2) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAP32;
        }
        function GROWABLE_HEAP_F32() {
          if (wasmMemory.buffer != buffer2) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAPF32;
        }
        function GROWABLE_HEAP_F64() {
          if (wasmMemory.buffer != buffer2) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAPF64;
        }
        var Module2 = typeof WasmBackendModuleThreadedSimd3 !== "undefined" ? WasmBackendModuleThreadedSimd3 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module2["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var beforeListeners;
        if (typeof process !== "undefined" && process.listeners) {
          beforeListeners = { uncaughtException: process.listeners("uncaughtException"), unhandledRejection: process.listeners("unhandledRejection") };
        }
        var moduleOverrides = Object.assign({}, Module2);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window === "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
        var ENVIRONMENT_IS_NODE2 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
        var ENVIRONMENT_IS_PTHREAD = Module2["ENVIRONMENT_IS_PTHREAD"] || false;
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module2["locateFile"]) {
            return Module2["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus)
            return;
          let toLog = e;
          err2("exiting due to exception: " + toLog);
        }
        var fs;
        var nodePath;
        var requireNodeFS;
        if (ENVIRONMENT_IS_NODE2) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = require_path().dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          requireNodeFS = () => {
            if (!nodePath) {
              fs = require_fs();
              nodePath = require_path();
            }
          };
          read_ = function shell_read(filename, binary) {
            requireNodeFS();
            filename = nodePath["normalize"](filename);
            return fs.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror) => {
            requireNodeFS();
            filename = nodePath["normalize"](filename);
            fs.readFile(filename, function(err3, data) {
              if (err3)
                onerror(err3);
              else
                onload(data.buffer);
            });
          };
          if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
          }
          arguments_ = process["argv"].slice(2);
          process["on"]("uncaughtException", function(ex) {
            if (!(ex instanceof ExitStatus)) {
              throw ex;
            }
          });
          process["on"]("unhandledRejection", function(reason) {
            throw reason;
          });
          quit_ = (status, toThrow) => {
            if (keepRuntimeAlive()) {
              process["exitCode"] = status;
              throw toThrow;
            }
            logExceptionOnExit(toThrow);
            process["exit"](status);
          };
          Module2["inspect"] = function() {
            return "[Emscripten Module object]";
          };
          let nodeWorkerThreads;
          try {
            nodeWorkerThreads = require_worker_threads();
          } catch (e) {
            console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?');
            throw e;
          }
          global.Worker = nodeWorkerThreads.Worker;
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document !== "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          if (!ENVIRONMENT_IS_NODE2) {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        if (ENVIRONMENT_IS_NODE2) {
          if (typeof performance === "undefined") {
            global.performance = require_perf_hooks().performance;
          }
        }
        var defaultPrint = console.log.bind(console);
        var defaultPrintErr = console.warn.bind(console);
        if (ENVIRONMENT_IS_NODE2) {
          requireNodeFS();
          defaultPrint = (str) => fs.writeSync(1, str + "\n");
          defaultPrintErr = (str) => fs.writeSync(2, str + "\n");
        }
        var out = Module2["print"] || defaultPrint;
        var err2 = Module2["printErr"] || defaultPrintErr;
        Object.assign(Module2, moduleOverrides);
        moduleOverrides = null;
        if (Module2["arguments"])
          arguments_ = Module2["arguments"];
        if (Module2["thisProgram"])
          thisProgram = Module2["thisProgram"];
        if (Module2["quit"])
          quit_ = Module2["quit"];
        var POINTER_SIZE = 4;
        function warnOnce(text) {
          if (!warnOnce.shown)
            warnOnce.shown = {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            err2(text);
          }
        }
        function convertJsFunctionToWasm(func, sig) {
          if (typeof WebAssembly.Function === "function") {
            var typeNames = { "i": "i32", "j": "i64", "f": "f32", "d": "f64" };
            var type = { parameters: [], results: sig[0] == "v" ? [] : [typeNames[sig[0]]] };
            for (var i = 1; i < sig.length; ++i) {
              type.parameters.push(typeNames[sig[i]]);
            }
            return new WebAssembly.Function(type, func);
          }
          var typeSection = [1, 0, 1, 96];
          var sigRet = sig.slice(0, 1);
          var sigParam = sig.slice(1);
          var typeCodes = { "i": 127, "j": 126, "f": 125, "d": 124 };
          typeSection.push(sigParam.length);
          for (var i = 0; i < sigParam.length; ++i) {
            typeSection.push(typeCodes[sigParam[i]]);
          }
          if (sigRet == "v") {
            typeSection.push(0);
          } else {
            typeSection = typeSection.concat([1, typeCodes[sigRet]]);
          }
          typeSection[1] = typeSection.length - 2;
          var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
          var module2 = new WebAssembly.Module(bytes);
          var instance = new WebAssembly.Instance(module2, { "e": { "f": func } });
          var wrappedFunc = instance.exports["f"];
          return wrappedFunc;
        }
        var freeTableIndexes = [];
        var functionsInTableMap;
        function getEmptyTableSlot() {
          if (freeTableIndexes.length) {
            return freeTableIndexes.pop();
          }
          try {
            wasmTable.grow(1);
          } catch (err3) {
            if (!(err3 instanceof RangeError)) {
              throw err3;
            }
            throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
          }
          return wasmTable.length - 1;
        }
        function updateTableMap(offset, count) {
          for (var i = offset; i < offset + count; i++) {
            var item = getWasmTableEntry(i);
            if (item) {
              functionsInTableMap.set(item, i);
            }
          }
        }
        var tempRet0 = 0;
        var setTempRet0 = (value) => {
          tempRet0 = value;
        };
        var Atomics_load = Atomics.load;
        var Atomics_store = Atomics.store;
        var Atomics_compareExchange = Atomics.compareExchange;
        var wasmBinary;
        if (Module2["wasmBinary"])
          wasmBinary = Module2["wasmBinary"];
        var noExitRuntime = Module2["noExitRuntime"] || true;
        if (typeof WebAssembly !== "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var wasmModule;
        var ABORT = false;
        var EXITSTATUS;
        function assert2(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        function getCFunc(ident) {
          var func = Module2["_" + ident];
          return func;
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = { "string": function(str) {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              var len = (str.length << 2) + 1;
              ret2 = stackAlloc(len);
              stringToUTF8(str, ret2, len);
            }
            return ret2;
          }, "array": function(arr) {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          } };
          function convertReturnValue(ret2) {
            if (returnType === "string")
              return UTF8ToString(ret2);
            if (returnType === "boolean")
              return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack2 = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack2 === 0)
                  stack2 = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack2 !== 0)
              stackRestore(stack2);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        function cwrap(ident, returnType, argTypes, opts) {
          argTypes = argTypes || [];
          var numericArgs = argTypes.every(function(type) {
            return type === "number";
          });
          var numericRet = returnType !== "string";
          if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
          }
          return function() {
            return ccall(ident, returnType, argTypes, arguments, opts);
          };
        }
        var ALLOC_STACK = 1;
        function TextDecoderWrapper(encoding) {
          var textDecoder = new TextDecoder(encoding);
          this.decode = (data) => {
            if (data.buffer instanceof SharedArrayBuffer) {
              data = new Uint8Array(data);
            }
            return textDecoder.decode.call(textDecoder, data);
          };
        }
        var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoderWrapper("utf8") : void 0;
        function UTF8ArrayToString(heap, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heap[endPtr] && !(endPtr >= endIdx))
            ++endPtr;
          if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
            return UTF8Decoder.decode(heap.subarray(idx, endPtr));
          } else {
            var str = "";
            while (idx < endPtr) {
              var u0 = heap[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heap[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heap[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0))
            return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx)
                break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx)
                break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx)
                break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx)
                break;
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343)
              u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
            if (u <= 127)
              ++len;
            else if (u <= 2047)
              len += 2;
            else if (u <= 65535)
              len += 3;
            else
              len += 4;
          }
          return len;
        }
        var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoderWrapper("utf-16le") : void 0;
        function writeArrayToMemory(array, buffer3) {
          GROWABLE_HEAP_I8().set(array, buffer3);
        }
        function writeAsciiToMemory(str, buffer3, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            GROWABLE_HEAP_I8()[buffer3++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull)
            GROWABLE_HEAP_I8()[buffer3 >> 0] = 0;
        }
        function alignUp(x, multiple) {
          if (x % multiple > 0) {
            x += multiple - x % multiple;
          }
          return x;
        }
        var buffer2, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        if (ENVIRONMENT_IS_PTHREAD) {
          buffer2 = Module2["buffer"];
        }
        function updateGlobalBufferAndViews(buf) {
          buffer2 = buf;
          Module2["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module2["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module2["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module2["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module2["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module2["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module2["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module2["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var INITIAL_MEMORY = Module2["INITIAL_MEMORY"] || 16777216;
        if (ENVIRONMENT_IS_PTHREAD) {
          wasmMemory = Module2["wasmMemory"];
          buffer2 = Module2["buffer"];
        } else {
          if (Module2["wasmMemory"]) {
            wasmMemory = Module2["wasmMemory"];
          } else {
            wasmMemory = new WebAssembly.Memory({ "initial": INITIAL_MEMORY / 65536, "maximum": 2147483648 / 65536, "shared": true });
            if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
              err2("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
              if (ENVIRONMENT_IS_NODE2) {
                console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)");
              }
              throw Error("bad memory");
            }
          }
        }
        if (wasmMemory) {
          buffer2 = wasmMemory.buffer;
        }
        INITIAL_MEMORY = buffer2.byteLength;
        updateGlobalBufferAndViews(buffer2);
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATEXIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeExited = false;
        var runtimeKeepaliveCounter = 0;
        function keepRuntimeAlive() {
          return noExitRuntime || runtimeKeepaliveCounter > 0;
        }
        function preRun() {
          if (Module2["preRun"]) {
            if (typeof Module2["preRun"] == "function")
              Module2["preRun"] = [Module2["preRun"]];
            while (Module2["preRun"].length) {
              addOnPreRun(Module2["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          if (ENVIRONMENT_IS_PTHREAD)
            return;
          callRuntimeCallbacks(__ATINIT__);
        }
        function exitRuntime() {
          if (ENVIRONMENT_IS_PTHREAD)
            return;
          PThread.terminateAllThreads();
          runtimeExited = true;
        }
        function postRun() {
          if (ENVIRONMENT_IS_PTHREAD)
            return;
          if (Module2["postRun"]) {
            if (typeof Module2["postRun"] == "function")
              Module2["postRun"] = [Module2["postRun"]];
            while (Module2["postRun"].length) {
              addOnPostRun(Module2["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module2["monitorRunDependencies"]) {
            Module2["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module2["monitorRunDependencies"]) {
            Module2["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        Module2["preloadedImages"] = {};
        Module2["preloadedAudios"] = {};
        function abort(what) {
          if (ENVIRONMENT_IS_PTHREAD) {
            postMessage({ "cmd": "onAbort", "arg": what });
          } else {
            if (Module2["onAbort"]) {
              Module2["onAbort"](what);
            }
          }
          what = "Aborted(" + what + ")";
          err2(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -s ASSERTIONS=1 for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "tfjs-backend-wasm-threaded-simd.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            } else {
              throw "both async and sync fetching of the wasm failed";
            }
          } catch (err3) {
            abort(err3);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(function() {
                return getBinary(wasmBinaryFile);
              });
            } else {
              if (readAsync) {
                return new Promise(function(resolve, reject) {
                  readAsync(wasmBinaryFile, function(response) {
                    resolve(new Uint8Array(response));
                  }, reject);
                });
              }
            }
          }
          return Promise.resolve().then(function() {
            return getBinary(wasmBinaryFile);
          });
        }
        function createWasm() {
          var info = { "env": asmLibraryArg, "wasi_snapshot_preview1": asmLibraryArg };
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module2["asm"] = exports3;
            registerTlsInit(Module2["asm"]["emscripten_tls_init"]);
            wasmTable = Module2["asm"]["__indirect_function_table"];
            addOnInit(Module2["asm"]["__wasm_call_ctors"]);
            wasmModule = module2;
            if (!ENVIRONMENT_IS_PTHREAD) {
              var numWorkersToLoad = PThread.unusedWorkers.length;
              PThread.unusedWorkers.forEach(function(w) {
                PThread.loadWasmModuleToWorker(w, function() {
                  if (!--numWorkersToLoad)
                    removeRunDependency("wasm-instantiate");
                });
              });
            }
          }
          if (!ENVIRONMENT_IS_PTHREAD) {
            addRunDependency("wasm-instantiate");
          }
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"], result["module"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(function(instance) {
              return instance;
            }).then(receiver, function(reason) {
              err2("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                  err2("wasm streaming compile failed: " + reason);
                  err2("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(receiveInstantiationResult);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module2["instantiateWasm"]) {
            try {
              var exports2 = Module2["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err2("Module.instantiateWasm callback failed with error: " + e);
              return false;
            }
          }
          instantiateAsync().catch(readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        var ASM_CONSTS = {};
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            var callback = callbacks.shift();
            if (typeof callback == "function") {
              callback(Module2);
              continue;
            }
            var func = callback.func;
            if (typeof func === "number") {
              if (callback.arg === void 0) {
                getWasmTableEntry(func)();
              } else {
                getWasmTableEntry(func)(callback.arg);
              }
            } else {
              func(callback.arg === void 0 ? null : callback.arg);
            }
          }
        }
        function withStackSave(f) {
          var stack2 = stackSave();
          var ret = f();
          stackRestore(stack2);
          return ret;
        }
        function demangle(func) {
          return func;
        }
        function demangleAll(text) {
          var regex = /\b_Z[\w\d_]+/g;
          return text.replace(regex, function(x) {
            var y = demangle(x);
            return x === y ? x : y + " [" + x + "]";
          });
        }
        function killThread(pthread_ptr) {
          GROWABLE_HEAP_I32()[pthread_ptr >> 2] = 0;
          var pthread = PThread.pthreads[pthread_ptr];
          delete PThread.pthreads[pthread_ptr];
          pthread.worker.terminate();
          __emscripten_thread_free_data(pthread_ptr);
          PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker), 1);
          pthread.worker.pthread = void 0;
        }
        function cancelThread(pthread_ptr) {
          var pthread = PThread.pthreads[pthread_ptr];
          pthread.worker.postMessage({ "cmd": "cancel" });
        }
        function cleanupThread(pthread_ptr) {
          var pthread = PThread.pthreads[pthread_ptr];
          if (pthread) {
            GROWABLE_HEAP_I32()[pthread_ptr >> 2] = 0;
            var worker = pthread.worker;
            PThread.returnWorkerToPool(worker);
          }
        }
        function _exit(status) {
          exit(status);
        }
        function handleException(e) {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          quit_(1, e);
        }
        var PThread = { unusedWorkers: [], runningWorkers: [], tlsInitFunctions: [], init: function() {
          if (ENVIRONMENT_IS_PTHREAD) {
            PThread.initWorker();
          } else {
            PThread.initMainThread();
          }
        }, initMainThread: function() {
          var pthreadPoolSize = 8;
          for (var i = 0; i < pthreadPoolSize; ++i) {
            PThread.allocateUnusedWorker();
          }
        }, initWorker: function() {
          noExitRuntime = false;
        }, pthreads: {}, setExitStatus: function(status) {
          EXITSTATUS = status;
        }, terminateAllThreads: function() {
          for (var t in PThread.pthreads) {
            var pthread = PThread.pthreads[t];
            if (pthread && pthread.worker) {
              PThread.returnWorkerToPool(pthread.worker);
            }
          }
          for (var i = 0; i < PThread.unusedWorkers.length; ++i) {
            var worker = PThread.unusedWorkers[i];
            worker.terminate();
          }
          PThread.unusedWorkers = [];
        }, returnWorkerToPool: function(worker) {
          PThread.runWithoutMainThreadQueuedCalls(function() {
            delete PThread.pthreads[worker.pthread.threadInfoStruct];
            PThread.unusedWorkers.push(worker);
            PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
            __emscripten_thread_free_data(worker.pthread.threadInfoStruct);
            worker.pthread = void 0;
          });
        }, runWithoutMainThreadQueuedCalls: function(func) {
          GROWABLE_HEAP_I32()[__emscripten_allow_main_runtime_queued_calls >> 2] = 0;
          try {
            func();
          } finally {
            GROWABLE_HEAP_I32()[__emscripten_allow_main_runtime_queued_calls >> 2] = 1;
          }
        }, receiveObjectTransfer: function(data) {
        }, threadInit: function() {
          for (var i in PThread.tlsInitFunctions) {
            PThread.tlsInitFunctions[i]();
          }
        }, loadWasmModuleToWorker: function(worker, onFinishedLoading) {
          worker.onmessage = (e) => {
            var d = e["data"];
            var cmd = d["cmd"];
            if (worker.pthread)
              PThread.currentProxiedOperationCallerThread = worker.pthread.threadInfoStruct;
            if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
              var thread = PThread.pthreads[d.targetThread];
              if (thread) {
                thread.worker.postMessage(d, d["transferList"]);
              } else {
                err2('Internal error! Worker sent a message "' + cmd + '" to target pthread ' + d["targetThread"] + ", but that thread no longer exists!");
              }
              PThread.currentProxiedOperationCallerThread = void 0;
              return;
            }
            if (cmd === "processQueuedMainThreadWork") {
              _emscripten_main_thread_process_queued_calls();
            } else if (cmd === "spawnThread") {
              spawnThread(d);
            } else if (cmd === "cleanupThread") {
              cleanupThread(d["thread"]);
            } else if (cmd === "killThread") {
              killThread(d["thread"]);
            } else if (cmd === "cancelThread") {
              cancelThread(d["thread"]);
            } else if (cmd === "loaded") {
              worker.loaded = true;
              if (onFinishedLoading)
                onFinishedLoading(worker);
              if (worker.runPthread) {
                worker.runPthread();
                delete worker.runPthread;
              }
            } else if (cmd === "print") {
              out("Thread " + d["threadId"] + ": " + d["text"]);
            } else if (cmd === "printErr") {
              err2("Thread " + d["threadId"] + ": " + d["text"]);
            } else if (cmd === "alert") {
              alert("Thread " + d["threadId"] + ": " + d["text"]);
            } else if (d.target === "setimmediate") {
              worker.postMessage(d);
            } else if (cmd === "onAbort") {
              if (Module2["onAbort"]) {
                Module2["onAbort"](d["arg"]);
              }
            } else {
              err2("worker sent an unknown command " + cmd);
            }
            PThread.currentProxiedOperationCallerThread = void 0;
          };
          worker.onerror = (e) => {
            var message = "worker sent an error!";
            err2(message + " " + e.filename + ":" + e.lineno + ": " + e.message);
            throw e;
          };
          if (ENVIRONMENT_IS_NODE2) {
            worker.on("message", function(data) {
              worker.onmessage({ data });
            });
            worker.on("error", function(e) {
              worker.onerror(e);
            });
            worker.on("detachedExit", function() {
            });
          }
          worker.postMessage({ "cmd": "load", "urlOrBlob": Module2["mainScriptUrlOrBlob"] || _scriptDir, "wasmMemory": wasmMemory, "wasmModule": wasmModule });
        }, allocateUnusedWorker: function() {
          var pthreadMainJs = locateFile("tfjs-backend-wasm-threaded-simd.worker.js");
          PThread.unusedWorkers.push(new Worker(pthreadMainJs));
        }, getNewWorker: function() {
          if (PThread.unusedWorkers.length == 0) {
            PThread.allocateUnusedWorker();
            PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
          }
          return PThread.unusedWorkers.pop();
        } };
        function establishStackSpace() {
          var pthread_ptr = _pthread_self();
          var stackTop = GROWABLE_HEAP_I32()[pthread_ptr + 44 >> 2];
          var stackSize = GROWABLE_HEAP_I32()[pthread_ptr + 48 >> 2];
          var stackMax = stackTop - stackSize;
          _emscripten_stack_set_limits(stackTop, stackMax);
          stackRestore(stackTop);
        }
        Module2["establishStackSpace"] = establishStackSpace;
        function exitOnMainThread(returnCode) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(1, 0, returnCode);
          try {
            _exit(returnCode);
          } catch (e) {
            handleException(e);
          }
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function invokeEntryPoint(ptr, arg) {
          return getWasmTableEntry(ptr)(arg);
        }
        Module2["invokeEntryPoint"] = invokeEntryPoint;
        function jsStackTrace() {
          var error = new Error();
          if (!error.stack) {
            try {
              throw new Error();
            } catch (e) {
              error = e;
            }
            if (!error.stack) {
              return "(no stack trace available)";
            }
          }
          return error.stack.toString();
        }
        function registerTlsInit(tlsInitFunc, moduleExports, metadata) {
          PThread.tlsInitFunctions.push(tlsInitFunc);
        }
        function setWasmTableEntry(idx, func) {
          wasmTable.set(idx, func);
          wasmTableMirror[idx] = func;
        }
        var _emscripten_get_now;
        if (ENVIRONMENT_IS_NODE2) {
          _emscripten_get_now = () => {
            var t = process["hrtime"]();
            return t[0] * 1e3 + t[1] / 1e6;
          };
        } else if (ENVIRONMENT_IS_PTHREAD) {
          _emscripten_get_now = () => performance.now() - Module2["__performance_now_clock_drift"];
        } else
          _emscripten_get_now = () => performance.now();
        var _emscripten_get_now_is_monotonic = true;
        function setErrNo(value) {
          GROWABLE_HEAP_I32()[___errno_location() >> 2] = value;
          return value;
        }
        function _clock_gettime(clk_id, tp) {
          var now2;
          if (clk_id === 0) {
            now2 = Date.now();
          } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
            now2 = _emscripten_get_now();
          } else {
            setErrNo(28);
            return -1;
          }
          GROWABLE_HEAP_I32()[tp >> 2] = now2 / 1e3 | 0;
          GROWABLE_HEAP_I32()[tp + 4 >> 2] = now2 % 1e3 * 1e3 * 1e3 | 0;
          return 0;
        }
        function ___clock_gettime(a0, a1) {
          return _clock_gettime(a0, a1);
        }
        function ___emscripten_init_main_thread_js(tb) {
          __emscripten_thread_init(tb, !ENVIRONMENT_IS_WORKER, 1, !ENVIRONMENT_IS_WEB);
          PThread.threadInit();
        }
        function ___emscripten_thread_cleanup(thread) {
          if (!ENVIRONMENT_IS_PTHREAD)
            cleanupThread(thread);
          else
            postMessage({ "cmd": "cleanupThread", "thread": thread });
        }
        function spawnThread(threadParams) {
          var worker = PThread.getNewWorker();
          if (!worker) {
            return 6;
          }
          PThread.runningWorkers.push(worker);
          var pthread = PThread.pthreads[threadParams.pthread_ptr] = { worker, threadInfoStruct: threadParams.pthread_ptr };
          worker.pthread = pthread;
          var msg = { "cmd": "run", "start_routine": threadParams.startRoutine, "arg": threadParams.arg, "threadInfoStruct": threadParams.pthread_ptr };
          worker.runPthread = () => {
            msg.time = performance.now();
            worker.postMessage(msg, threadParams.transferList);
          };
          if (worker.loaded) {
            worker.runPthread();
            delete worker.runPthread;
          }
          return 0;
        }
        function ___pthread_create_js(pthread_ptr, attr, start_routine, arg) {
          if (typeof SharedArrayBuffer === "undefined") {
            err2("Current environment does not support SharedArrayBuffer, pthreads are not available!");
            return 6;
          }
          var transferList = [];
          var error = 0;
          if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
            return _emscripten_sync_run_in_main_thread_4(687865856, pthread_ptr, attr, start_routine, arg);
          }
          if (error)
            return error;
          var threadParams = { startRoutine: start_routine, pthread_ptr, arg, transferList };
          if (ENVIRONMENT_IS_PTHREAD) {
            threadParams.cmd = "spawnThread";
            postMessage(threadParams, transferList);
            return 0;
          }
          return spawnThread(threadParams);
        }
        function __emscripten_default_pthread_stack_size() {
          return 2097152;
        }
        function __emscripten_notify_thread_queue(targetThreadId, mainThreadId) {
          if (targetThreadId == mainThreadId) {
            postMessage({ "cmd": "processQueuedMainThreadWork" });
          } else if (ENVIRONMENT_IS_PTHREAD) {
            postMessage({ "targetThread": targetThreadId, "cmd": "processThreadQueue" });
          } else {
            var pthread = PThread.pthreads[targetThreadId];
            var worker = pthread && pthread.worker;
            if (!worker) {
              return;
            }
            worker.postMessage({ "cmd": "processThreadQueue" });
          }
          return 1;
        }
        function _abort() {
          abort("");
        }
        function _emscripten_check_blocking_allowed() {
          if (ENVIRONMENT_IS_NODE2)
            return;
          if (ENVIRONMENT_IS_WORKER)
            return;
          warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
        }
        function _emscripten_get_heap_max() {
          return 2147483648;
        }
        function _emscripten_memcpy_big(dest, src, num) {
          GROWABLE_HEAP_U8().copyWithin(dest, src, src + num);
        }
        function _emscripten_num_logical_cores() {
          if (ENVIRONMENT_IS_NODE2)
            return require_os().cpus().length;
          return navigator["hardwareConcurrency"];
        }
        function _emscripten_proxy_to_main_thread_js(index, sync) {
          var numCallArgs = arguments.length - 2;
          var outerArgs = arguments;
          return withStackSave(function() {
            var serializedNumCallArgs = numCallArgs;
            var args = stackAlloc(serializedNumCallArgs * 8);
            var b = args >> 3;
            for (var i = 0; i < numCallArgs; i++) {
              var arg = outerArgs[2 + i];
              GROWABLE_HEAP_F64()[b + i] = arg;
            }
            return _emscripten_run_in_main_runtime_thread_js(index, serializedNumCallArgs, args, sync);
          });
        }
        var _emscripten_receive_on_main_thread_js_callArgs = [];
        function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {
          _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
          var b = args >> 3;
          for (var i = 0; i < numCallArgs; i++) {
            _emscripten_receive_on_main_thread_js_callArgs[i] = GROWABLE_HEAP_F64()[b + i];
          }
          var isEmAsmConst = index < 0;
          var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];
          return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs);
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer2.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = GROWABLE_HEAP_U8().length;
          requestedSize = requestedSize >>> 0;
          if (requestedSize <= oldSize) {
            return false;
          }
          var maxHeapSize = _emscripten_get_heap_max();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var JSEvents = { inEventHandler: 0, removeAllEventListeners: function() {
          for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
            JSEvents._removeHandler(i);
          }
          JSEvents.eventHandlers = [];
          JSEvents.deferredCalls = [];
        }, registerRemoveEventListeners: function() {
          if (!JSEvents.removeEventListenersRegistered) {
            __ATEXIT__.push(JSEvents.removeAllEventListeners);
            JSEvents.removeEventListenersRegistered = true;
          }
        }, deferredCalls: [], deferCall: function(targetFunction, precedence, argsList) {
          function arraysHaveEqualContent(arrA, arrB) {
            if (arrA.length != arrB.length)
              return false;
            for (var i2 in arrA) {
              if (arrA[i2] != arrB[i2])
                return false;
            }
            return true;
          }
          for (var i in JSEvents.deferredCalls) {
            var call = JSEvents.deferredCalls[i];
            if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
              return;
            }
          }
          JSEvents.deferredCalls.push({ targetFunction, precedence, argsList });
          JSEvents.deferredCalls.sort(function(x, y) {
            return x.precedence < y.precedence;
          });
        }, removeDeferredCalls: function(targetFunction) {
          for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
              JSEvents.deferredCalls.splice(i, 1);
              --i;
            }
          }
        }, canPerformEventHandlerRequests: function() {
          return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
        }, runDeferredCalls: function() {
          if (!JSEvents.canPerformEventHandlerRequests()) {
            return;
          }
          for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            var call = JSEvents.deferredCalls[i];
            JSEvents.deferredCalls.splice(i, 1);
            --i;
            call.targetFunction.apply(null, call.argsList);
          }
        }, eventHandlers: [], removeAllHandlersOnTarget: function(target, eventTypeString) {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
              JSEvents._removeHandler(i--);
            }
          }
        }, _removeHandler: function(i) {
          var h = JSEvents.eventHandlers[i];
          h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
          JSEvents.eventHandlers.splice(i, 1);
        }, registerOrRemoveHandler: function(eventHandler) {
          var jsEventHandler = function jsEventHandler2(event) {
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            JSEvents.runDeferredCalls();
            eventHandler.handlerFunc(event);
            JSEvents.runDeferredCalls();
            --JSEvents.inEventHandler;
          };
          if (eventHandler.callbackfunc) {
            eventHandler.eventListenerFunc = jsEventHandler;
            eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
            JSEvents.eventHandlers.push(eventHandler);
            JSEvents.registerRemoveEventListeners();
          } else {
            for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
              if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                JSEvents._removeHandler(i--);
              }
            }
          }
        }, queueEventHandlerOnThread_iiii: function(targetThread, eventHandlerFunc, eventTypeId, eventData, userData) {
          withStackSave(function() {
            var varargs = stackAlloc(12);
            GROWABLE_HEAP_I32()[varargs >> 2] = eventTypeId;
            GROWABLE_HEAP_I32()[varargs + 4 >> 2] = eventData;
            GROWABLE_HEAP_I32()[varargs + 8 >> 2] = userData;
            _emscripten_dispatch_to_thread_(targetThread, 637534208, eventHandlerFunc, eventData, varargs);
          });
        }, getTargetThreadForEventCallback: function(targetThread) {
          switch (targetThread) {
            case 1:
              return 0;
            case 2:
              return PThread.currentProxiedOperationCallerThread;
            default:
              return targetThread;
          }
        }, getNodeNameForTarget: function(target) {
          if (!target)
            return "";
          if (target == window)
            return "#window";
          if (target == screen)
            return "#screen";
          return target && target.nodeName ? target.nodeName : "";
        }, fullscreenEnabled: function() {
          return document.fullscreenEnabled || document.webkitFullscreenEnabled;
        } };
        function stringToNewUTF8(jsString) {
          var length = lengthBytesUTF8(jsString) + 1;
          var cString = _malloc(length);
          stringToUTF8(jsString, cString, length);
          return cString;
        }
        function _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height) {
          withStackSave(function() {
            var varargs = stackAlloc(12);
            var targetCanvasPtr = 0;
            if (targetCanvas) {
              targetCanvasPtr = stringToNewUTF8(targetCanvas);
            }
            GROWABLE_HEAP_I32()[varargs >> 2] = targetCanvasPtr;
            GROWABLE_HEAP_I32()[varargs + 4 >> 2] = width;
            GROWABLE_HEAP_I32()[varargs + 8 >> 2] = height;
            _emscripten_dispatch_to_thread_(targetThread, 657457152, 0, targetCanvasPtr, varargs);
          });
        }
        function _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, targetCanvas, width, height) {
          targetCanvas = targetCanvas ? UTF8ToString(targetCanvas) : "";
          _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height);
        }
        function maybeCStringToJsString(cString) {
          return cString > 2 ? UTF8ToString(cString) : cString;
        }
        var specialHTMLTargets = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
        function findEventTarget(target) {
          target = maybeCStringToJsString(target);
          var domElement = specialHTMLTargets[target] || (typeof document !== "undefined" ? document.querySelector(target) : void 0);
          return domElement;
        }
        function findCanvasEventTarget(target) {
          return findEventTarget(target);
        }
        function _emscripten_set_canvas_element_size_calling_thread(target, width, height) {
          var canvas = findCanvasEventTarget(target);
          if (!canvas)
            return -4;
          if (canvas.canvasSharedPtr) {
            GROWABLE_HEAP_I32()[canvas.canvasSharedPtr >> 2] = width;
            GROWABLE_HEAP_I32()[canvas.canvasSharedPtr + 4 >> 2] = height;
          }
          if (canvas.offscreenCanvas || !canvas.controlTransferredOffscreen) {
            if (canvas.offscreenCanvas)
              canvas = canvas.offscreenCanvas;
            var autoResizeViewport = false;
            if (canvas.GLctxObject && canvas.GLctxObject.GLctx) {
              var prevViewport = canvas.GLctxObject.GLctx.getParameter(2978);
              autoResizeViewport = prevViewport[0] === 0 && prevViewport[1] === 0 && prevViewport[2] === canvas.width && prevViewport[3] === canvas.height;
            }
            canvas.width = width;
            canvas.height = height;
            if (autoResizeViewport) {
              canvas.GLctxObject.GLctx.viewport(0, 0, width, height);
            }
          } else if (canvas.canvasSharedPtr) {
            var targetThread = GROWABLE_HEAP_I32()[canvas.canvasSharedPtr + 8 >> 2];
            _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, target, width, height);
            return 1;
          } else {
            return -4;
          }
          return 0;
        }
        function _emscripten_set_canvas_element_size_main_thread(target, width, height) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(2, 1, target, width, height);
          return _emscripten_set_canvas_element_size_calling_thread(target, width, height);
        }
        function _emscripten_set_canvas_element_size(target, width, height) {
          var canvas = findCanvasEventTarget(target);
          if (canvas) {
            return _emscripten_set_canvas_element_size_calling_thread(target, width, height);
          } else {
            return _emscripten_set_canvas_element_size_main_thread(target, width, height);
          }
        }
        function _emscripten_unwind_to_js_event_loop() {
          throw "unwind";
        }
        function __webgl_enable_ANGLE_instanced_arrays(ctx) {
          var ext = ctx.getExtension("ANGLE_instanced_arrays");
          if (ext) {
            ctx["vertexAttribDivisor"] = function(index, divisor) {
              ext["vertexAttribDivisorANGLE"](index, divisor);
            };
            ctx["drawArraysInstanced"] = function(mode, first, count, primcount) {
              ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
            };
            ctx["drawElementsInstanced"] = function(mode, count, type, indices, primcount) {
              ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
            };
            return 1;
          }
        }
        function __webgl_enable_OES_vertex_array_object(ctx) {
          var ext = ctx.getExtension("OES_vertex_array_object");
          if (ext) {
            ctx["createVertexArray"] = function() {
              return ext["createVertexArrayOES"]();
            };
            ctx["deleteVertexArray"] = function(vao) {
              ext["deleteVertexArrayOES"](vao);
            };
            ctx["bindVertexArray"] = function(vao) {
              ext["bindVertexArrayOES"](vao);
            };
            ctx["isVertexArray"] = function(vao) {
              return ext["isVertexArrayOES"](vao);
            };
            return 1;
          }
        }
        function __webgl_enable_WEBGL_draw_buffers(ctx) {
          var ext = ctx.getExtension("WEBGL_draw_buffers");
          if (ext) {
            ctx["drawBuffers"] = function(n, bufs) {
              ext["drawBuffersWEBGL"](n, bufs);
            };
            return 1;
          }
        }
        function __webgl_enable_WEBGL_multi_draw(ctx) {
          return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
        }
        var GL = { counter: 1, buffers: [], programs: [], framebuffers: [], renderbuffers: [], textures: [], shaders: [], vaos: [], contexts: {}, offscreenCanvases: {}, queries: [], stringCache: {}, unpackAlignment: 4, recordError: function recordError(errorCode) {
          if (!GL.lastError) {
            GL.lastError = errorCode;
          }
        }, getNewId: function(table) {
          var ret = GL.counter++;
          for (var i = table.length; i < ret; i++) {
            table[i] = null;
          }
          return ret;
        }, getSource: function(shader, count, string, length) {
          var source = "";
          for (var i = 0; i < count; ++i) {
            var len = length ? GROWABLE_HEAP_I32()[length + i * 4 >> 2] : -1;
            source += UTF8ToString(GROWABLE_HEAP_I32()[string + i * 4 >> 2], len < 0 ? void 0 : len);
          }
          return source;
        }, createContext: function(canvas, webGLContextAttributes) {
          if (!canvas.getContextSafariWebGL2Fixed) {
            canvas.getContextSafariWebGL2Fixed = canvas.getContext;
            canvas.getContext = function(ver, attrs) {
              var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
              return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null;
            };
          }
          var ctx = canvas.getContext("webgl", webGLContextAttributes);
          if (!ctx)
            return 0;
          var handle = GL.registerContext(ctx, webGLContextAttributes);
          return handle;
        }, registerContext: function(ctx, webGLContextAttributes) {
          var handle = _malloc(8);
          GROWABLE_HEAP_I32()[handle + 4 >> 2] = _pthread_self();
          var context = { handle, attributes: webGLContextAttributes, version: webGLContextAttributes.majorVersion, GLctx: ctx };
          if (ctx.canvas)
            ctx.canvas.GLctxObject = context;
          GL.contexts[handle] = context;
          if (typeof webGLContextAttributes.enableExtensionsByDefault === "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
            GL.initExtensions(context);
          }
          return handle;
        }, makeContextCurrent: function(contextHandle) {
          GL.currentContext = GL.contexts[contextHandle];
          Module2.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
          return !(contextHandle && !GLctx);
        }, getContext: function(contextHandle) {
          return GL.contexts[contextHandle];
        }, deleteContext: function(contextHandle) {
          if (GL.currentContext === GL.contexts[contextHandle])
            GL.currentContext = null;
          if (typeof JSEvents === "object")
            JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
          if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas)
            GL.contexts[contextHandle].GLctx.canvas.GLctxObject = void 0;
          _free(GL.contexts[contextHandle].handle);
          GL.contexts[contextHandle] = null;
        }, initExtensions: function(context) {
          if (!context)
            context = GL.currentContext;
          if (context.initExtensionsDone)
            return;
          context.initExtensionsDone = true;
          var GLctx2 = context.GLctx;
          __webgl_enable_ANGLE_instanced_arrays(GLctx2);
          __webgl_enable_OES_vertex_array_object(GLctx2);
          __webgl_enable_WEBGL_draw_buffers(GLctx2);
          {
            GLctx2.disjointTimerQueryExt = GLctx2.getExtension("EXT_disjoint_timer_query");
          }
          __webgl_enable_WEBGL_multi_draw(GLctx2);
          var exts = GLctx2.getSupportedExtensions() || [];
          exts.forEach(function(ext) {
            if (!ext.includes("lose_context") && !ext.includes("debug")) {
              GLctx2.getExtension(ext);
            }
          });
        } };
        var __emscripten_webgl_power_preferences = ["default", "low-power", "high-performance"];
        function _emscripten_webgl_do_create_context(target, attributes) {
          var a = attributes >> 2;
          var powerPreference = GROWABLE_HEAP_I32()[a + (24 >> 2)];
          var contextAttributes = { "alpha": !!GROWABLE_HEAP_I32()[a + (0 >> 2)], "depth": !!GROWABLE_HEAP_I32()[a + (4 >> 2)], "stencil": !!GROWABLE_HEAP_I32()[a + (8 >> 2)], "antialias": !!GROWABLE_HEAP_I32()[a + (12 >> 2)], "premultipliedAlpha": !!GROWABLE_HEAP_I32()[a + (16 >> 2)], "preserveDrawingBuffer": !!GROWABLE_HEAP_I32()[a + (20 >> 2)], "powerPreference": __emscripten_webgl_power_preferences[powerPreference], "failIfMajorPerformanceCaveat": !!GROWABLE_HEAP_I32()[a + (28 >> 2)], majorVersion: GROWABLE_HEAP_I32()[a + (32 >> 2)], minorVersion: GROWABLE_HEAP_I32()[a + (36 >> 2)], enableExtensionsByDefault: GROWABLE_HEAP_I32()[a + (40 >> 2)], explicitSwapControl: GROWABLE_HEAP_I32()[a + (44 >> 2)], proxyContextToMainThread: GROWABLE_HEAP_I32()[a + (48 >> 2)], renderViaOffscreenBackBuffer: GROWABLE_HEAP_I32()[a + (52 >> 2)] };
          var canvas = findCanvasEventTarget(target);
          if (!canvas) {
            return 0;
          }
          if (contextAttributes.explicitSwapControl) {
            return 0;
          }
          var contextHandle = GL.createContext(canvas, contextAttributes);
          return contextHandle;
        }
        function _emscripten_webgl_create_context(a0, a1) {
          return _emscripten_webgl_do_create_context(a0, a1);
        }
        var SYSCALLS = { mappings: {}, buffers: [null, [], []], printChar: function(stream, curr) {
          var buffer3 = SYSCALLS.buffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err2)(UTF8ArrayToString(buffer3, 0));
            buffer3.length = 0;
          } else {
            buffer3.push(curr);
          }
        }, varargs: void 0, get: function() {
          SYSCALLS.varargs += 4;
          var ret = GROWABLE_HEAP_I32()[SYSCALLS.varargs - 4 >> 2];
          return ret;
        }, getStr: function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        }, get64: function(low, high) {
          return low;
        } };
        function _fd_close(fd) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(3, 1, fd);
          return 0;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(4, 1, fd, offset_low, offset_high, whence, newOffset);
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return _emscripten_proxy_to_main_thread_js(5, 1, fd, iov, iovcnt, pnum);
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = GROWABLE_HEAP_I32()[iov >> 2];
            var len = GROWABLE_HEAP_I32()[iov + 4 >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              SYSCALLS.printChar(fd, GROWABLE_HEAP_U8()[ptr + j]);
            }
            num += len;
          }
          GROWABLE_HEAP_I32()[pnum >> 2] = num;
          return 0;
        }
        function _setTempRet0(val) {
          setTempRet0(val);
        }
        PThread.init();
        var GLctx;
        var proxiedFunctionTable = [null, exitOnMainThread, _emscripten_set_canvas_element_size_main_thread, _fd_close, _fd_seek, _fd_write];
        var ASSERTIONS = false;
        var asmLibraryArg = { "__clock_gettime": ___clock_gettime, "__emscripten_init_main_thread_js": ___emscripten_init_main_thread_js, "__emscripten_thread_cleanup": ___emscripten_thread_cleanup, "__pthread_create_js": ___pthread_create_js, "_emscripten_default_pthread_stack_size": __emscripten_default_pthread_stack_size, "_emscripten_notify_thread_queue": __emscripten_notify_thread_queue, "abort": _abort, "emscripten_check_blocking_allowed": _emscripten_check_blocking_allowed, "emscripten_get_heap_max": _emscripten_get_heap_max, "emscripten_get_now": _emscripten_get_now, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_num_logical_cores": _emscripten_num_logical_cores, "emscripten_receive_on_main_thread_js": _emscripten_receive_on_main_thread_js, "emscripten_resize_heap": _emscripten_resize_heap, "emscripten_set_canvas_element_size": _emscripten_set_canvas_element_size, "emscripten_unwind_to_js_event_loop": _emscripten_unwind_to_js_event_loop, "emscripten_webgl_create_context": _emscripten_webgl_create_context, "exit": _exit, "fd_close": _fd_close, "fd_seek": _fd_seek, "fd_write": _fd_write, "memory": wasmMemory || Module2["wasmMemory"], "setTempRet0": _setTempRet0 };
        var asm = createWasm();
        var ___wasm_call_ctors = Module2["___wasm_call_ctors"] = function() {
          return (___wasm_call_ctors = Module2["___wasm_call_ctors"] = Module2["asm"]["__wasm_call_ctors"]).apply(null, arguments);
        };
        var _init = Module2["_init"] = function() {
          return (_init = Module2["_init"] = Module2["asm"]["init"]).apply(null, arguments);
        };
        var _init_with_threads_count = Module2["_init_with_threads_count"] = function() {
          return (_init_with_threads_count = Module2["_init_with_threads_count"] = Module2["asm"]["init_with_threads_count"]).apply(null, arguments);
        };
        var _get_threads_count = Module2["_get_threads_count"] = function() {
          return (_get_threads_count = Module2["_get_threads_count"] = Module2["asm"]["get_threads_count"]).apply(null, arguments);
        };
        var _register_tensor = Module2["_register_tensor"] = function() {
          return (_register_tensor = Module2["_register_tensor"] = Module2["asm"]["register_tensor"]).apply(null, arguments);
        };
        var _dispose_data = Module2["_dispose_data"] = function() {
          return (_dispose_data = Module2["_dispose_data"] = Module2["asm"]["dispose_data"]).apply(null, arguments);
        };
        var _dispose = Module2["_dispose"] = function() {
          return (_dispose = Module2["_dispose"] = Module2["asm"]["dispose"]).apply(null, arguments);
        };
        var _Abs = Module2["_Abs"] = function() {
          return (_Abs = Module2["_Abs"] = Module2["asm"]["Abs"]).apply(null, arguments);
        };
        var _Add = Module2["_Add"] = function() {
          return (_Add = Module2["_Add"] = Module2["asm"]["Add"]).apply(null, arguments);
        };
        var _AddN = Module2["_AddN"] = function() {
          return (_AddN = Module2["_AddN"] = Module2["asm"]["AddN"]).apply(null, arguments);
        };
        var _All = Module2["_All"] = function() {
          return (_All = Module2["_All"] = Module2["asm"]["All"]).apply(null, arguments);
        };
        var _Any = Module2["_Any"] = function() {
          return (_Any = Module2["_Any"] = Module2["asm"]["Any"]).apply(null, arguments);
        };
        var _ArgMax = Module2["_ArgMax"] = function() {
          return (_ArgMax = Module2["_ArgMax"] = Module2["asm"]["ArgMax"]).apply(null, arguments);
        };
        var _AvgPool = Module2["_AvgPool"] = function() {
          return (_AvgPool = Module2["_AvgPool"] = Module2["asm"]["AvgPool"]).apply(null, arguments);
        };
        var _BatchMatMul = Module2["_BatchMatMul"] = function() {
          return (_BatchMatMul = Module2["_BatchMatMul"] = Module2["asm"]["BatchMatMul"]).apply(null, arguments);
        };
        var _Ceil = Module2["_Ceil"] = function() {
          return (_Ceil = Module2["_Ceil"] = Module2["asm"]["Ceil"]).apply(null, arguments);
        };
        var _ClipByValue = Module2["_ClipByValue"] = function() {
          return (_ClipByValue = Module2["_ClipByValue"] = Module2["asm"]["ClipByValue"]).apply(null, arguments);
        };
        var _Conv2D = Module2["_Conv2D"] = function() {
          return (_Conv2D = Module2["_Conv2D"] = Module2["asm"]["Conv2D"]).apply(null, arguments);
        };
        var _Conv2DBackpropInput = Module2["_Conv2DBackpropInput"] = function() {
          return (_Conv2DBackpropInput = Module2["_Conv2DBackpropInput"] = Module2["asm"]["Conv2DBackpropInput"]).apply(null, arguments);
        };
        var _Cos = Module2["_Cos"] = function() {
          return (_Cos = Module2["_Cos"] = Module2["asm"]["Cos"]).apply(null, arguments);
        };
        var _Cosh = Module2["_Cosh"] = function() {
          return (_Cosh = Module2["_Cosh"] = Module2["asm"]["Cosh"]).apply(null, arguments);
        };
        var _CropAndResize = Module2["_CropAndResize"] = function() {
          return (_CropAndResize = Module2["_CropAndResize"] = Module2["asm"]["CropAndResize"]).apply(null, arguments);
        };
        var _Cumprod = Module2["_Cumprod"] = function() {
          return (_Cumprod = Module2["_Cumprod"] = Module2["asm"]["Cumprod"]).apply(null, arguments);
        };
        var _Cumsum = Module2["_Cumsum"] = function() {
          return (_Cumsum = Module2["_Cumsum"] = Module2["asm"]["Cumsum"]).apply(null, arguments);
        };
        var _DepthToSpace = Module2["_DepthToSpace"] = function() {
          return (_DepthToSpace = Module2["_DepthToSpace"] = Module2["asm"]["DepthToSpace"]).apply(null, arguments);
        };
        var _DepthwiseConv2dNative = Module2["_DepthwiseConv2dNative"] = function() {
          return (_DepthwiseConv2dNative = Module2["_DepthwiseConv2dNative"] = Module2["asm"]["DepthwiseConv2dNative"]).apply(null, arguments);
        };
        var _Elu = Module2["_Elu"] = function() {
          return (_Elu = Module2["_Elu"] = Module2["asm"]["Elu"]).apply(null, arguments);
        };
        var _Equal = Module2["_Equal"] = function() {
          return (_Equal = Module2["_Equal"] = Module2["asm"]["Equal"]).apply(null, arguments);
        };
        var _Exp = Module2["_Exp"] = function() {
          return (_Exp = Module2["_Exp"] = Module2["asm"]["Exp"]).apply(null, arguments);
        };
        var _FlipLeftRight = Module2["_FlipLeftRight"] = function() {
          return (_FlipLeftRight = Module2["_FlipLeftRight"] = Module2["asm"]["FlipLeftRight"]).apply(null, arguments);
        };
        var _Floor = Module2["_Floor"] = function() {
          return (_Floor = Module2["_Floor"] = Module2["asm"]["Floor"]).apply(null, arguments);
        };
        var _FloorDiv = Module2["_FloorDiv"] = function() {
          return (_FloorDiv = Module2["_FloorDiv"] = Module2["asm"]["FloorDiv"]).apply(null, arguments);
        };
        var _FusedBatchNorm = Module2["_FusedBatchNorm"] = function() {
          return (_FusedBatchNorm = Module2["_FusedBatchNorm"] = Module2["asm"]["FusedBatchNorm"]).apply(null, arguments);
        };
        var _FusedConv2D = Module2["_FusedConv2D"] = function() {
          return (_FusedConv2D = Module2["_FusedConv2D"] = Module2["asm"]["FusedConv2D"]).apply(null, arguments);
        };
        var _FusedDepthwiseConv2D = Module2["_FusedDepthwiseConv2D"] = function() {
          return (_FusedDepthwiseConv2D = Module2["_FusedDepthwiseConv2D"] = Module2["asm"]["FusedDepthwiseConv2D"]).apply(null, arguments);
        };
        var _Gather = Module2["_Gather"] = function() {
          return (_Gather = Module2["_Gather"] = Module2["asm"]["Gather"]).apply(null, arguments);
        };
        var _GatherNd = Module2["_GatherNd"] = function() {
          return (_GatherNd = Module2["_GatherNd"] = Module2["asm"]["GatherNd"]).apply(null, arguments);
        };
        var _Greater = Module2["_Greater"] = function() {
          return (_Greater = Module2["_Greater"] = Module2["asm"]["Greater"]).apply(null, arguments);
        };
        var _GreaterEqual = Module2["_GreaterEqual"] = function() {
          return (_GreaterEqual = Module2["_GreaterEqual"] = Module2["asm"]["GreaterEqual"]).apply(null, arguments);
        };
        var _LeakyRelu = Module2["_LeakyRelu"] = function() {
          return (_LeakyRelu = Module2["_LeakyRelu"] = Module2["asm"]["LeakyRelu"]).apply(null, arguments);
        };
        var _Less = Module2["_Less"] = function() {
          return (_Less = Module2["_Less"] = Module2["asm"]["Less"]).apply(null, arguments);
        };
        var _LessEqual = Module2["_LessEqual"] = function() {
          return (_LessEqual = Module2["_LessEqual"] = Module2["asm"]["LessEqual"]).apply(null, arguments);
        };
        var _Log = Module2["_Log"] = function() {
          return (_Log = Module2["_Log"] = Module2["asm"]["Log"]).apply(null, arguments);
        };
        var _LogicalAnd = Module2["_LogicalAnd"] = function() {
          return (_LogicalAnd = Module2["_LogicalAnd"] = Module2["asm"]["LogicalAnd"]).apply(null, arguments);
        };
        var _LogicalNot = Module2["_LogicalNot"] = function() {
          return (_LogicalNot = Module2["_LogicalNot"] = Module2["asm"]["LogicalNot"]).apply(null, arguments);
        };
        var _LogicalOr = Module2["_LogicalOr"] = function() {
          return (_LogicalOr = Module2["_LogicalOr"] = Module2["asm"]["LogicalOr"]).apply(null, arguments);
        };
        var _LogicalXor = Module2["_LogicalXor"] = function() {
          return (_LogicalXor = Module2["_LogicalXor"] = Module2["asm"]["LogicalXor"]).apply(null, arguments);
        };
        var _Max = Module2["_Max"] = function() {
          return (_Max = Module2["_Max"] = Module2["asm"]["Max"]).apply(null, arguments);
        };
        var _MaxPool = Module2["_MaxPool"] = function() {
          return (_MaxPool = Module2["_MaxPool"] = Module2["asm"]["MaxPool"]).apply(null, arguments);
        };
        var _Maximum = Module2["_Maximum"] = function() {
          return (_Maximum = Module2["_Maximum"] = Module2["asm"]["Maximum"]).apply(null, arguments);
        };
        var _Mean = Module2["_Mean"] = function() {
          return (_Mean = Module2["_Mean"] = Module2["asm"]["Mean"]).apply(null, arguments);
        };
        var _Min = Module2["_Min"] = function() {
          return (_Min = Module2["_Min"] = Module2["asm"]["Min"]).apply(null, arguments);
        };
        var _Minimum = Module2["_Minimum"] = function() {
          return (_Minimum = Module2["_Minimum"] = Module2["asm"]["Minimum"]).apply(null, arguments);
        };
        var _MirrorPad = Module2["_MirrorPad"] = function() {
          return (_MirrorPad = Module2["_MirrorPad"] = Module2["asm"]["MirrorPad"]).apply(null, arguments);
        };
        var _Multiply = Module2["_Multiply"] = function() {
          return (_Multiply = Module2["_Multiply"] = Module2["asm"]["Multiply"]).apply(null, arguments);
        };
        var _Neg = Module2["_Neg"] = function() {
          return (_Neg = Module2["_Neg"] = Module2["asm"]["Neg"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV3 = Module2["_NonMaxSuppressionV3"] = function() {
          return (_NonMaxSuppressionV3 = Module2["_NonMaxSuppressionV3"] = Module2["asm"]["NonMaxSuppressionV3"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV4 = Module2["_NonMaxSuppressionV4"] = function() {
          return (_NonMaxSuppressionV4 = Module2["_NonMaxSuppressionV4"] = Module2["asm"]["NonMaxSuppressionV4"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV5 = Module2["_NonMaxSuppressionV5"] = function() {
          return (_NonMaxSuppressionV5 = Module2["_NonMaxSuppressionV5"] = Module2["asm"]["NonMaxSuppressionV5"]).apply(null, arguments);
        };
        var _NotEqual = Module2["_NotEqual"] = function() {
          return (_NotEqual = Module2["_NotEqual"] = Module2["asm"]["NotEqual"]).apply(null, arguments);
        };
        var _OneHot = Module2["_OneHot"] = function() {
          return (_OneHot = Module2["_OneHot"] = Module2["asm"]["OneHot"]).apply(null, arguments);
        };
        var _PadV2 = Module2["_PadV2"] = function() {
          return (_PadV2 = Module2["_PadV2"] = Module2["asm"]["PadV2"]).apply(null, arguments);
        };
        var _Pow = Module2["_Pow"] = function() {
          return (_Pow = Module2["_Pow"] = Module2["asm"]["Pow"]).apply(null, arguments);
        };
        var _Prelu = Module2["_Prelu"] = function() {
          return (_Prelu = Module2["_Prelu"] = Module2["asm"]["Prelu"]).apply(null, arguments);
        };
        var _Prod = Module2["_Prod"] = function() {
          return (_Prod = Module2["_Prod"] = Module2["asm"]["Prod"]).apply(null, arguments);
        };
        var _RealDiv = Module2["_RealDiv"] = function() {
          return (_RealDiv = Module2["_RealDiv"] = Module2["asm"]["RealDiv"]).apply(null, arguments);
        };
        var _Relu = Module2["_Relu"] = function() {
          return (_Relu = Module2["_Relu"] = Module2["asm"]["Relu"]).apply(null, arguments);
        };
        var _Relu6 = Module2["_Relu6"] = function() {
          return (_Relu6 = Module2["_Relu6"] = Module2["asm"]["Relu6"]).apply(null, arguments);
        };
        var _ResizeBilinear = Module2["_ResizeBilinear"] = function() {
          return (_ResizeBilinear = Module2["_ResizeBilinear"] = Module2["asm"]["ResizeBilinear"]).apply(null, arguments);
        };
        var _ResizeNearestNeighbor = Module2["_ResizeNearestNeighbor"] = function() {
          return (_ResizeNearestNeighbor = Module2["_ResizeNearestNeighbor"] = Module2["asm"]["ResizeNearestNeighbor"]).apply(null, arguments);
        };
        var _Reverse = Module2["_Reverse"] = function() {
          return (_Reverse = Module2["_Reverse"] = Module2["asm"]["Reverse"]).apply(null, arguments);
        };
        var _RotateWithOffset = Module2["_RotateWithOffset"] = function() {
          return (_RotateWithOffset = Module2["_RotateWithOffset"] = Module2["asm"]["RotateWithOffset"]).apply(null, arguments);
        };
        var _Round = Module2["_Round"] = function() {
          return (_Round = Module2["_Round"] = Module2["asm"]["Round"]).apply(null, arguments);
        };
        var _Rsqrt = Module2["_Rsqrt"] = function() {
          return (_Rsqrt = Module2["_Rsqrt"] = Module2["asm"]["Rsqrt"]).apply(null, arguments);
        };
        var _ScatterNd = Module2["_ScatterNd"] = function() {
          return (_ScatterNd = Module2["_ScatterNd"] = Module2["asm"]["ScatterNd"]).apply(null, arguments);
        };
        var _SelectV2 = Module2["_SelectV2"] = function() {
          return (_SelectV2 = Module2["_SelectV2"] = Module2["asm"]["SelectV2"]).apply(null, arguments);
        };
        var _Sigmoid = Module2["_Sigmoid"] = function() {
          return (_Sigmoid = Module2["_Sigmoid"] = Module2["asm"]["Sigmoid"]).apply(null, arguments);
        };
        var _Sin = Module2["_Sin"] = function() {
          return (_Sin = Module2["_Sin"] = Module2["asm"]["Sin"]).apply(null, arguments);
        };
        var _Softmax = Module2["_Softmax"] = function() {
          return (_Softmax = Module2["_Softmax"] = Module2["asm"]["Softmax"]).apply(null, arguments);
        };
        var _SparseFillEmptyRows = Module2["_SparseFillEmptyRows"] = function() {
          return (_SparseFillEmptyRows = Module2["_SparseFillEmptyRows"] = Module2["asm"]["SparseFillEmptyRows"]).apply(null, arguments);
        };
        var _SparseReshape = Module2["_SparseReshape"] = function() {
          return (_SparseReshape = Module2["_SparseReshape"] = Module2["asm"]["SparseReshape"]).apply(null, arguments);
        };
        var _SparseSegmentReduction = Module2["_SparseSegmentReduction"] = function() {
          return (_SparseSegmentReduction = Module2["_SparseSegmentReduction"] = Module2["asm"]["SparseSegmentReduction"]).apply(null, arguments);
        };
        var _Sqrt = Module2["_Sqrt"] = function() {
          return (_Sqrt = Module2["_Sqrt"] = Module2["asm"]["Sqrt"]).apply(null, arguments);
        };
        var _Square = Module2["_Square"] = function() {
          return (_Square = Module2["_Square"] = Module2["asm"]["Square"]).apply(null, arguments);
        };
        var _SquaredDifference = Module2["_SquaredDifference"] = function() {
          return (_SquaredDifference = Module2["_SquaredDifference"] = Module2["asm"]["SquaredDifference"]).apply(null, arguments);
        };
        var _Step = Module2["_Step"] = function() {
          return (_Step = Module2["_Step"] = Module2["asm"]["Step"]).apply(null, arguments);
        };
        var _StridedSlice = Module2["_StridedSlice"] = function() {
          return (_StridedSlice = Module2["_StridedSlice"] = Module2["asm"]["StridedSlice"]).apply(null, arguments);
        };
        var _Sub = Module2["_Sub"] = function() {
          return (_Sub = Module2["_Sub"] = Module2["asm"]["Sub"]).apply(null, arguments);
        };
        var _Sum = Module2["_Sum"] = function() {
          return (_Sum = Module2["_Sum"] = Module2["asm"]["Sum"]).apply(null, arguments);
        };
        var _Tan = Module2["_Tan"] = function() {
          return (_Tan = Module2["_Tan"] = Module2["asm"]["Tan"]).apply(null, arguments);
        };
        var _Tanh = Module2["_Tanh"] = function() {
          return (_Tanh = Module2["_Tanh"] = Module2["asm"]["Tanh"]).apply(null, arguments);
        };
        var _Tile = Module2["_Tile"] = function() {
          return (_Tile = Module2["_Tile"] = Module2["asm"]["Tile"]).apply(null, arguments);
        };
        var _TopK = Module2["_TopK"] = function() {
          return (_TopK = Module2["_TopK"] = Module2["asm"]["TopK"]).apply(null, arguments);
        };
        var _Transform = Module2["_Transform"] = function() {
          return (_Transform = Module2["_Transform"] = Module2["asm"]["Transform"]).apply(null, arguments);
        };
        var _Transpose = Module2["_Transpose"] = function() {
          return (_Transpose = Module2["_Transpose"] = Module2["asm"]["Transpose"]).apply(null, arguments);
        };
        var __FusedMatMul = Module2["__FusedMatMul"] = function() {
          return (__FusedMatMul = Module2["__FusedMatMul"] = Module2["asm"]["_FusedMatMul"]).apply(null, arguments);
        };
        var _malloc = Module2["_malloc"] = function() {
          return (_malloc = Module2["_malloc"] = Module2["asm"]["malloc"]).apply(null, arguments);
        };
        var _free = Module2["_free"] = function() {
          return (_free = Module2["_free"] = Module2["asm"]["free"]).apply(null, arguments);
        };
        var _emscripten_tls_init = Module2["_emscripten_tls_init"] = function() {
          return (_emscripten_tls_init = Module2["_emscripten_tls_init"] = Module2["asm"]["emscripten_tls_init"]).apply(null, arguments);
        };
        var ___errno_location = Module2["___errno_location"] = function() {
          return (___errno_location = Module2["___errno_location"] = Module2["asm"]["__errno_location"]).apply(null, arguments);
        };
        var _pthread_self = Module2["_pthread_self"] = function() {
          return (_pthread_self = Module2["_pthread_self"] = Module2["asm"]["pthread_self"]).apply(null, arguments);
        };
        var _emscripten_main_thread_process_queued_calls = Module2["_emscripten_main_thread_process_queued_calls"] = function() {
          return (_emscripten_main_thread_process_queued_calls = Module2["_emscripten_main_thread_process_queued_calls"] = Module2["asm"]["emscripten_main_thread_process_queued_calls"]).apply(null, arguments);
        };
        var __emscripten_thread_crashed = Module2["__emscripten_thread_crashed"] = function() {
          return (__emscripten_thread_crashed = Module2["__emscripten_thread_crashed"] = Module2["asm"]["_emscripten_thread_crashed"]).apply(null, arguments);
        };
        var __emscripten_thread_init = Module2["__emscripten_thread_init"] = function() {
          return (__emscripten_thread_init = Module2["__emscripten_thread_init"] = Module2["asm"]["_emscripten_thread_init"]).apply(null, arguments);
        };
        var _emscripten_current_thread_process_queued_calls = Module2["_emscripten_current_thread_process_queued_calls"] = function() {
          return (_emscripten_current_thread_process_queued_calls = Module2["_emscripten_current_thread_process_queued_calls"] = Module2["asm"]["emscripten_current_thread_process_queued_calls"]).apply(null, arguments);
        };
        var _emscripten_main_browser_thread_id = Module2["_emscripten_main_browser_thread_id"] = function() {
          return (_emscripten_main_browser_thread_id = Module2["_emscripten_main_browser_thread_id"] = Module2["asm"]["emscripten_main_browser_thread_id"]).apply(null, arguments);
        };
        var _emscripten_sync_run_in_main_thread_2 = Module2["_emscripten_sync_run_in_main_thread_2"] = function() {
          return (_emscripten_sync_run_in_main_thread_2 = Module2["_emscripten_sync_run_in_main_thread_2"] = Module2["asm"]["emscripten_sync_run_in_main_thread_2"]).apply(null, arguments);
        };
        var _emscripten_sync_run_in_main_thread_4 = Module2["_emscripten_sync_run_in_main_thread_4"] = function() {
          return (_emscripten_sync_run_in_main_thread_4 = Module2["_emscripten_sync_run_in_main_thread_4"] = Module2["asm"]["emscripten_sync_run_in_main_thread_4"]).apply(null, arguments);
        };
        var _emscripten_run_in_main_runtime_thread_js = Module2["_emscripten_run_in_main_runtime_thread_js"] = function() {
          return (_emscripten_run_in_main_runtime_thread_js = Module2["_emscripten_run_in_main_runtime_thread_js"] = Module2["asm"]["emscripten_run_in_main_runtime_thread_js"]).apply(null, arguments);
        };
        var _emscripten_dispatch_to_thread_ = Module2["_emscripten_dispatch_to_thread_"] = function() {
          return (_emscripten_dispatch_to_thread_ = Module2["_emscripten_dispatch_to_thread_"] = Module2["asm"]["emscripten_dispatch_to_thread_"]).apply(null, arguments);
        };
        var __emscripten_thread_free_data = Module2["__emscripten_thread_free_data"] = function() {
          return (__emscripten_thread_free_data = Module2["__emscripten_thread_free_data"] = Module2["asm"]["_emscripten_thread_free_data"]).apply(null, arguments);
        };
        var __emscripten_thread_exit = Module2["__emscripten_thread_exit"] = function() {
          return (__emscripten_thread_exit = Module2["__emscripten_thread_exit"] = Module2["asm"]["_emscripten_thread_exit"]).apply(null, arguments);
        };
        var _memalign = Module2["_memalign"] = function() {
          return (_memalign = Module2["_memalign"] = Module2["asm"]["memalign"]).apply(null, arguments);
        };
        var _emscripten_stack_set_limits = Module2["_emscripten_stack_set_limits"] = function() {
          return (_emscripten_stack_set_limits = Module2["_emscripten_stack_set_limits"] = Module2["asm"]["emscripten_stack_set_limits"]).apply(null, arguments);
        };
        var stackSave = Module2["stackSave"] = function() {
          return (stackSave = Module2["stackSave"] = Module2["asm"]["stackSave"]).apply(null, arguments);
        };
        var stackRestore = Module2["stackRestore"] = function() {
          return (stackRestore = Module2["stackRestore"] = Module2["asm"]["stackRestore"]).apply(null, arguments);
        };
        var stackAlloc = Module2["stackAlloc"] = function() {
          return (stackAlloc = Module2["stackAlloc"] = Module2["asm"]["stackAlloc"]).apply(null, arguments);
        };
        var dynCall_iijjiiii = Module2["dynCall_iijjiiii"] = function() {
          return (dynCall_iijjiiii = Module2["dynCall_iijjiiii"] = Module2["asm"]["dynCall_iijjiiii"]).apply(null, arguments);
        };
        var dynCall_jiji = Module2["dynCall_jiji"] = function() {
          return (dynCall_jiji = Module2["dynCall_jiji"] = Module2["asm"]["dynCall_jiji"]).apply(null, arguments);
        };
        var __emscripten_allow_main_runtime_queued_calls = Module2["__emscripten_allow_main_runtime_queued_calls"] = 21664;
        Module2["cwrap"] = cwrap;
        Module2["keepRuntimeAlive"] = keepRuntimeAlive;
        Module2["PThread"] = PThread;
        Module2["PThread"] = PThread;
        Module2["wasmMemory"] = wasmMemory;
        Module2["ExitStatus"] = ExitStatus;
        var calledRun;
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        dependenciesFulfilled = function runCaller() {
          if (!calledRun)
            run();
          if (!calledRun)
            dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          if (ENVIRONMENT_IS_PTHREAD) {
            readyPromiseResolve(Module2);
            initRuntime();
            postMessage({ "cmd": "loaded" });
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun)
              return;
            calledRun = true;
            Module2["calledRun"] = true;
            if (ABORT)
              return;
            initRuntime();
            readyPromiseResolve(Module2);
            if (Module2["onRuntimeInitialized"])
              Module2["onRuntimeInitialized"]();
            postRun();
          }
          if (Module2["setStatus"]) {
            Module2["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module2["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        Module2["run"] = run;
        function exit(status, implicit) {
          EXITSTATUS = status;
          if (!implicit) {
            if (ENVIRONMENT_IS_PTHREAD) {
              exitOnMainThread(status);
              throw "unwind";
            } else {
            }
          }
          if (keepRuntimeAlive()) {
          } else {
            exitRuntime();
          }
          procExit(status);
        }
        function procExit(code) {
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            PThread.terminateAllThreads();
            if (Module2["onExit"])
              Module2["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        if (Module2["preInit"]) {
          if (typeof Module2["preInit"] == "function")
            Module2["preInit"] = [Module2["preInit"]];
          while (Module2["preInit"].length > 0) {
            Module2["preInit"].pop()();
          }
        }
        run();
        var listenersAdded;
        if (beforeListeners) {
          listenersAdded = { uncaughtException: process.listeners("uncaughtException").filter(function(listener) {
            return !beforeListeners.uncaughtException.indexOf(listener) > -1;
          }), unhandledRejection: process.listeners("unhandledRejection").filter(function(listener) {
            return !beforeListeners.unhandledRejection.indexOf(listener) > -1;
          }) };
        }
        var actualModule;
        if (typeof WasmBackendModule !== "undefined") {
          actualModule = WasmBackendModule;
        } else if (typeof WasmBackendModuleThreadedSimd3 !== "undefined") {
          actualModule = WasmBackendModuleThreadedSimd3;
        } else {
          throw new Error("Could not find wasm module in post.js");
        }
        if (listenersAdded) {
          var tmpDispose = actualModule["_dispose"];
          actualModule["_dispose"] = function() {
            tmpDispose();
            listenersAdded.uncaughtException.forEach(function(listener) {
              process.removeListener("uncaughtException", listener);
            });
            listenersAdded.unhandledRejection.forEach(function(listener) {
              process.removeListener("unhandledRejection", listener);
            });
          };
        }
        return WasmBackendModuleThreadedSimd3.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = WasmBackendModuleThreadedSimd2;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return WasmBackendModuleThreadedSimd2;
      });
    else if (typeof exports === "object")
      exports["WasmBackendModuleThreadedSimd"] = WasmBackendModuleThreadedSimd2;
  }
});

// src/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm.js
var require_tfjs_backend_wasm = __commonJS({
  "src/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm.js"(exports, module) {
    "use strict";
    var WasmBackendModule2 = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined")
        _scriptDir = _scriptDir || __filename;
      return function(WasmBackendModule3) {
        WasmBackendModule3 = WasmBackendModule3 || {};
        var Module2 = typeof WasmBackendModule3 !== "undefined" ? WasmBackendModule3 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module2["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var beforeListeners;
        if (typeof process !== "undefined" && process.listeners) {
          beforeListeners = { uncaughtException: process.listeners("uncaughtException"), unhandledRejection: process.listeners("unhandledRejection") };
        }
        var moduleOverrides = Object.assign({}, Module2);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window === "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
        var ENVIRONMENT_IS_NODE2 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module2["locateFile"]) {
            return Module2["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus)
            return;
          let toLog = e;
          err2("exiting due to exception: " + toLog);
        }
        var fs;
        var nodePath;
        var requireNodeFS;
        if (ENVIRONMENT_IS_NODE2) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = require_path().dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          requireNodeFS = () => {
            if (!nodePath) {
              fs = require_fs();
              nodePath = require_path();
            }
          };
          read_ = function shell_read(filename, binary) {
            requireNodeFS();
            filename = nodePath["normalize"](filename);
            return fs.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror) => {
            requireNodeFS();
            filename = nodePath["normalize"](filename);
            fs.readFile(filename, function(err3, data) {
              if (err3)
                onerror(err3);
              else
                onload(data.buffer);
            });
          };
          if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
          }
          arguments_ = process["argv"].slice(2);
          process["on"]("uncaughtException", function(ex) {
            if (!(ex instanceof ExitStatus)) {
              throw ex;
            }
          });
          process["on"]("unhandledRejection", function(reason) {
            throw reason;
          });
          quit_ = (status, toThrow) => {
            if (keepRuntimeAlive()) {
              process["exitCode"] = status;
              throw toThrow;
            }
            logExceptionOnExit(toThrow);
            process["exit"](status);
          };
          Module2["inspect"] = function() {
            return "[Emscripten Module object]";
          };
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document !== "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        var out = Module2["print"] || console.log.bind(console);
        var err2 = Module2["printErr"] || console.warn.bind(console);
        Object.assign(Module2, moduleOverrides);
        moduleOverrides = null;
        if (Module2["arguments"])
          arguments_ = Module2["arguments"];
        if (Module2["thisProgram"])
          thisProgram = Module2["thisProgram"];
        if (Module2["quit"])
          quit_ = Module2["quit"];
        var POINTER_SIZE = 4;
        function warnOnce(text) {
          if (!warnOnce.shown)
            warnOnce.shown = {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            err2(text);
          }
        }
        function convertJsFunctionToWasm(func, sig) {
          if (typeof WebAssembly.Function === "function") {
            var typeNames = { "i": "i32", "j": "i64", "f": "f32", "d": "f64" };
            var type = { parameters: [], results: sig[0] == "v" ? [] : [typeNames[sig[0]]] };
            for (var i = 1; i < sig.length; ++i) {
              type.parameters.push(typeNames[sig[i]]);
            }
            return new WebAssembly.Function(type, func);
          }
          var typeSection = [1, 0, 1, 96];
          var sigRet = sig.slice(0, 1);
          var sigParam = sig.slice(1);
          var typeCodes = { "i": 127, "j": 126, "f": 125, "d": 124 };
          typeSection.push(sigParam.length);
          for (var i = 0; i < sigParam.length; ++i) {
            typeSection.push(typeCodes[sigParam[i]]);
          }
          if (sigRet == "v") {
            typeSection.push(0);
          } else {
            typeSection = typeSection.concat([1, typeCodes[sigRet]]);
          }
          typeSection[1] = typeSection.length - 2;
          var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
          var module2 = new WebAssembly.Module(bytes);
          var instance = new WebAssembly.Instance(module2, { "e": { "f": func } });
          var wrappedFunc = instance.exports["f"];
          return wrappedFunc;
        }
        var freeTableIndexes = [];
        var functionsInTableMap;
        function getEmptyTableSlot() {
          if (freeTableIndexes.length) {
            return freeTableIndexes.pop();
          }
          try {
            wasmTable.grow(1);
          } catch (err3) {
            if (!(err3 instanceof RangeError)) {
              throw err3;
            }
            throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
          }
          return wasmTable.length - 1;
        }
        function updateTableMap(offset, count) {
          for (var i = offset; i < offset + count; i++) {
            var item = getWasmTableEntry(i);
            if (item) {
              functionsInTableMap.set(item, i);
            }
          }
        }
        var tempRet0 = 0;
        var setTempRet0 = (value) => {
          tempRet0 = value;
        };
        var wasmBinary;
        if (Module2["wasmBinary"])
          wasmBinary = Module2["wasmBinary"];
        var noExitRuntime = Module2["noExitRuntime"] || true;
        if (typeof WebAssembly !== "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert2(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        function getCFunc(ident) {
          var func = Module2["_" + ident];
          return func;
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = { "string": function(str) {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              var len = (str.length << 2) + 1;
              ret2 = stackAlloc(len);
              stringToUTF8(str, ret2, len);
            }
            return ret2;
          }, "array": function(arr) {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          } };
          function convertReturnValue(ret2) {
            if (returnType === "string")
              return UTF8ToString(ret2);
            if (returnType === "boolean")
              return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack2 = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack2 === 0)
                  stack2 = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack2 !== 0)
              stackRestore(stack2);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        function cwrap(ident, returnType, argTypes, opts) {
          argTypes = argTypes || [];
          var numericArgs = argTypes.every(function(type) {
            return type === "number";
          });
          var numericRet = returnType !== "string";
          if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
          }
          return function() {
            return ccall(ident, returnType, argTypes, arguments, opts);
          };
        }
        var ALLOC_STACK = 1;
        var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heap, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heap[endPtr] && !(endPtr >= endIdx))
            ++endPtr;
          if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
            return UTF8Decoder.decode(heap.subarray(idx, endPtr));
          } else {
            var str = "";
            while (idx < endPtr) {
              var u0 = heap[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heap[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heap[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0))
            return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx)
                break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx)
                break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx)
                break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx)
                break;
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343)
              u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
            if (u <= 127)
              ++len;
            else if (u <= 2047)
              len += 2;
            else if (u <= 65535)
              len += 3;
            else
              len += 4;
          }
          return len;
        }
        var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : void 0;
        function writeArrayToMemory(array, buffer3) {
          HEAP8.set(array, buffer3);
        }
        function writeAsciiToMemory(str, buffer3, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer3++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull)
            HEAP8[buffer3 >> 0] = 0;
        }
        function alignUp(x, multiple) {
          if (x % multiple > 0) {
            x += multiple - x % multiple;
          }
          return x;
        }
        var buffer2, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer2 = buf;
          Module2["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module2["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module2["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module2["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module2["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module2["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module2["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module2["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var INITIAL_MEMORY = Module2["INITIAL_MEMORY"] || 16777216;
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeExited = false;
        var runtimeKeepaliveCounter = 0;
        function keepRuntimeAlive() {
          return noExitRuntime || runtimeKeepaliveCounter > 0;
        }
        function preRun() {
          if (Module2["preRun"]) {
            if (typeof Module2["preRun"] == "function")
              Module2["preRun"] = [Module2["preRun"]];
            while (Module2["preRun"].length) {
              addOnPreRun(Module2["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function exitRuntime() {
          runtimeExited = true;
        }
        function postRun() {
          if (Module2["postRun"]) {
            if (typeof Module2["postRun"] == "function")
              Module2["postRun"] = [Module2["postRun"]];
            while (Module2["postRun"].length) {
              addOnPostRun(Module2["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module2["monitorRunDependencies"]) {
            Module2["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module2["monitorRunDependencies"]) {
            Module2["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        Module2["preloadedImages"] = {};
        Module2["preloadedAudios"] = {};
        function abort(what) {
          {
            if (Module2["onAbort"]) {
              Module2["onAbort"](what);
            }
          }
          what = "Aborted(" + what + ")";
          err2(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -s ASSERTIONS=1 for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "tfjs-backend-wasm.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            } else {
              throw "both async and sync fetching of the wasm failed";
            }
          } catch (err3) {
            abort(err3);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(function() {
                return getBinary(wasmBinaryFile);
              });
            } else {
              if (readAsync) {
                return new Promise(function(resolve, reject) {
                  readAsync(wasmBinaryFile, function(response) {
                    resolve(new Uint8Array(response));
                  }, reject);
                });
              }
            }
          }
          return Promise.resolve().then(function() {
            return getBinary(wasmBinaryFile);
          });
        }
        function createWasm() {
          var info = { "env": asmLibraryArg, "wasi_snapshot_preview1": asmLibraryArg };
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module2["asm"] = exports3;
            wasmMemory = Module2["asm"]["memory"];
            updateGlobalBufferAndViews(wasmMemory.buffer);
            wasmTable = Module2["asm"]["__indirect_function_table"];
            addOnInit(Module2["asm"]["__wasm_call_ctors"]);
            removeRunDependency("wasm-instantiate");
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(function(instance) {
              return instance;
            }).then(receiver, function(reason) {
              err2("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                  err2("wasm streaming compile failed: " + reason);
                  err2("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(receiveInstantiationResult);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module2["instantiateWasm"]) {
            try {
              var exports2 = Module2["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err2("Module.instantiateWasm callback failed with error: " + e);
              return false;
            }
          }
          instantiateAsync().catch(readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            var callback = callbacks.shift();
            if (typeof callback == "function") {
              callback(Module2);
              continue;
            }
            var func = callback.func;
            if (typeof func === "number") {
              if (callback.arg === void 0) {
                getWasmTableEntry(func)();
              } else {
                getWasmTableEntry(func)(callback.arg);
              }
            } else {
              func(callback.arg === void 0 ? null : callback.arg);
            }
          }
        }
        function demangle(func) {
          return func;
        }
        function demangleAll(text) {
          var regex = /\b_Z[\w\d_]+/g;
          return text.replace(regex, function(x) {
            var y = demangle(x);
            return x === y ? x : y + " [" + x + "]";
          });
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function jsStackTrace() {
          var error = new Error();
          if (!error.stack) {
            try {
              throw new Error();
            } catch (e) {
              error = e;
            }
            if (!error.stack) {
              return "(no stack trace available)";
            }
          }
          return error.stack.toString();
        }
        function setWasmTableEntry(idx, func) {
          wasmTable.set(idx, func);
          wasmTableMirror[idx] = func;
        }
        function _abort() {
          abort("");
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function _emscripten_get_heap_max() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer2.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = _emscripten_get_heap_max();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var SYSCALLS = { mappings: {}, buffers: [null, [], []], printChar: function(stream, curr) {
          var buffer3 = SYSCALLS.buffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err2)(UTF8ArrayToString(buffer3, 0));
            buffer3.length = 0;
          } else {
            buffer3.push(curr);
          }
        }, varargs: void 0, get: function() {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
          return ret;
        }, getStr: function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        }, get64: function(low, high) {
          return low;
        } };
        function _fd_close(fd) {
          return 0;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAP32[iov >> 2];
            var len = HEAP32[iov + 4 >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
          }
          HEAP32[pnum >> 2] = num;
          return 0;
        }
        function _setTempRet0(val) {
          setTempRet0(val);
        }
        var ASSERTIONS = false;
        var asmLibraryArg = { "abort": _abort, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "fd_close": _fd_close, "fd_seek": _fd_seek, "fd_write": _fd_write, "setTempRet0": _setTempRet0 };
        var asm = createWasm();
        var ___wasm_call_ctors = Module2["___wasm_call_ctors"] = function() {
          return (___wasm_call_ctors = Module2["___wasm_call_ctors"] = Module2["asm"]["__wasm_call_ctors"]).apply(null, arguments);
        };
        var _init = Module2["_init"] = function() {
          return (_init = Module2["_init"] = Module2["asm"]["init"]).apply(null, arguments);
        };
        var _init_with_threads_count = Module2["_init_with_threads_count"] = function() {
          return (_init_with_threads_count = Module2["_init_with_threads_count"] = Module2["asm"]["init_with_threads_count"]).apply(null, arguments);
        };
        var _get_threads_count = Module2["_get_threads_count"] = function() {
          return (_get_threads_count = Module2["_get_threads_count"] = Module2["asm"]["get_threads_count"]).apply(null, arguments);
        };
        var _register_tensor = Module2["_register_tensor"] = function() {
          return (_register_tensor = Module2["_register_tensor"] = Module2["asm"]["register_tensor"]).apply(null, arguments);
        };
        var _dispose_data = Module2["_dispose_data"] = function() {
          return (_dispose_data = Module2["_dispose_data"] = Module2["asm"]["dispose_data"]).apply(null, arguments);
        };
        var _dispose = Module2["_dispose"] = function() {
          return (_dispose = Module2["_dispose"] = Module2["asm"]["dispose"]).apply(null, arguments);
        };
        var _Abs = Module2["_Abs"] = function() {
          return (_Abs = Module2["_Abs"] = Module2["asm"]["Abs"]).apply(null, arguments);
        };
        var _Add = Module2["_Add"] = function() {
          return (_Add = Module2["_Add"] = Module2["asm"]["Add"]).apply(null, arguments);
        };
        var _AddN = Module2["_AddN"] = function() {
          return (_AddN = Module2["_AddN"] = Module2["asm"]["AddN"]).apply(null, arguments);
        };
        var _All = Module2["_All"] = function() {
          return (_All = Module2["_All"] = Module2["asm"]["All"]).apply(null, arguments);
        };
        var _Any = Module2["_Any"] = function() {
          return (_Any = Module2["_Any"] = Module2["asm"]["Any"]).apply(null, arguments);
        };
        var _ArgMax = Module2["_ArgMax"] = function() {
          return (_ArgMax = Module2["_ArgMax"] = Module2["asm"]["ArgMax"]).apply(null, arguments);
        };
        var _AvgPool = Module2["_AvgPool"] = function() {
          return (_AvgPool = Module2["_AvgPool"] = Module2["asm"]["AvgPool"]).apply(null, arguments);
        };
        var _BatchMatMul = Module2["_BatchMatMul"] = function() {
          return (_BatchMatMul = Module2["_BatchMatMul"] = Module2["asm"]["BatchMatMul"]).apply(null, arguments);
        };
        var _Ceil = Module2["_Ceil"] = function() {
          return (_Ceil = Module2["_Ceil"] = Module2["asm"]["Ceil"]).apply(null, arguments);
        };
        var _ClipByValue = Module2["_ClipByValue"] = function() {
          return (_ClipByValue = Module2["_ClipByValue"] = Module2["asm"]["ClipByValue"]).apply(null, arguments);
        };
        var _Conv2D = Module2["_Conv2D"] = function() {
          return (_Conv2D = Module2["_Conv2D"] = Module2["asm"]["Conv2D"]).apply(null, arguments);
        };
        var _Conv2DBackpropInput = Module2["_Conv2DBackpropInput"] = function() {
          return (_Conv2DBackpropInput = Module2["_Conv2DBackpropInput"] = Module2["asm"]["Conv2DBackpropInput"]).apply(null, arguments);
        };
        var _Cos = Module2["_Cos"] = function() {
          return (_Cos = Module2["_Cos"] = Module2["asm"]["Cos"]).apply(null, arguments);
        };
        var _Cosh = Module2["_Cosh"] = function() {
          return (_Cosh = Module2["_Cosh"] = Module2["asm"]["Cosh"]).apply(null, arguments);
        };
        var _CropAndResize = Module2["_CropAndResize"] = function() {
          return (_CropAndResize = Module2["_CropAndResize"] = Module2["asm"]["CropAndResize"]).apply(null, arguments);
        };
        var _Cumprod = Module2["_Cumprod"] = function() {
          return (_Cumprod = Module2["_Cumprod"] = Module2["asm"]["Cumprod"]).apply(null, arguments);
        };
        var _Cumsum = Module2["_Cumsum"] = function() {
          return (_Cumsum = Module2["_Cumsum"] = Module2["asm"]["Cumsum"]).apply(null, arguments);
        };
        var _DepthToSpace = Module2["_DepthToSpace"] = function() {
          return (_DepthToSpace = Module2["_DepthToSpace"] = Module2["asm"]["DepthToSpace"]).apply(null, arguments);
        };
        var _DepthwiseConv2dNative = Module2["_DepthwiseConv2dNative"] = function() {
          return (_DepthwiseConv2dNative = Module2["_DepthwiseConv2dNative"] = Module2["asm"]["DepthwiseConv2dNative"]).apply(null, arguments);
        };
        var _Elu = Module2["_Elu"] = function() {
          return (_Elu = Module2["_Elu"] = Module2["asm"]["Elu"]).apply(null, arguments);
        };
        var _Equal = Module2["_Equal"] = function() {
          return (_Equal = Module2["_Equal"] = Module2["asm"]["Equal"]).apply(null, arguments);
        };
        var _Exp = Module2["_Exp"] = function() {
          return (_Exp = Module2["_Exp"] = Module2["asm"]["Exp"]).apply(null, arguments);
        };
        var _FlipLeftRight = Module2["_FlipLeftRight"] = function() {
          return (_FlipLeftRight = Module2["_FlipLeftRight"] = Module2["asm"]["FlipLeftRight"]).apply(null, arguments);
        };
        var _Floor = Module2["_Floor"] = function() {
          return (_Floor = Module2["_Floor"] = Module2["asm"]["Floor"]).apply(null, arguments);
        };
        var _FloorDiv = Module2["_FloorDiv"] = function() {
          return (_FloorDiv = Module2["_FloorDiv"] = Module2["asm"]["FloorDiv"]).apply(null, arguments);
        };
        var _FusedBatchNorm = Module2["_FusedBatchNorm"] = function() {
          return (_FusedBatchNorm = Module2["_FusedBatchNorm"] = Module2["asm"]["FusedBatchNorm"]).apply(null, arguments);
        };
        var _FusedConv2D = Module2["_FusedConv2D"] = function() {
          return (_FusedConv2D = Module2["_FusedConv2D"] = Module2["asm"]["FusedConv2D"]).apply(null, arguments);
        };
        var _FusedDepthwiseConv2D = Module2["_FusedDepthwiseConv2D"] = function() {
          return (_FusedDepthwiseConv2D = Module2["_FusedDepthwiseConv2D"] = Module2["asm"]["FusedDepthwiseConv2D"]).apply(null, arguments);
        };
        var _Gather = Module2["_Gather"] = function() {
          return (_Gather = Module2["_Gather"] = Module2["asm"]["Gather"]).apply(null, arguments);
        };
        var _GatherNd = Module2["_GatherNd"] = function() {
          return (_GatherNd = Module2["_GatherNd"] = Module2["asm"]["GatherNd"]).apply(null, arguments);
        };
        var _Greater = Module2["_Greater"] = function() {
          return (_Greater = Module2["_Greater"] = Module2["asm"]["Greater"]).apply(null, arguments);
        };
        var _GreaterEqual = Module2["_GreaterEqual"] = function() {
          return (_GreaterEqual = Module2["_GreaterEqual"] = Module2["asm"]["GreaterEqual"]).apply(null, arguments);
        };
        var _LeakyRelu = Module2["_LeakyRelu"] = function() {
          return (_LeakyRelu = Module2["_LeakyRelu"] = Module2["asm"]["LeakyRelu"]).apply(null, arguments);
        };
        var _Less = Module2["_Less"] = function() {
          return (_Less = Module2["_Less"] = Module2["asm"]["Less"]).apply(null, arguments);
        };
        var _LessEqual = Module2["_LessEqual"] = function() {
          return (_LessEqual = Module2["_LessEqual"] = Module2["asm"]["LessEqual"]).apply(null, arguments);
        };
        var _Log = Module2["_Log"] = function() {
          return (_Log = Module2["_Log"] = Module2["asm"]["Log"]).apply(null, arguments);
        };
        var _LogicalAnd = Module2["_LogicalAnd"] = function() {
          return (_LogicalAnd = Module2["_LogicalAnd"] = Module2["asm"]["LogicalAnd"]).apply(null, arguments);
        };
        var _LogicalNot = Module2["_LogicalNot"] = function() {
          return (_LogicalNot = Module2["_LogicalNot"] = Module2["asm"]["LogicalNot"]).apply(null, arguments);
        };
        var _LogicalOr = Module2["_LogicalOr"] = function() {
          return (_LogicalOr = Module2["_LogicalOr"] = Module2["asm"]["LogicalOr"]).apply(null, arguments);
        };
        var _LogicalXor = Module2["_LogicalXor"] = function() {
          return (_LogicalXor = Module2["_LogicalXor"] = Module2["asm"]["LogicalXor"]).apply(null, arguments);
        };
        var _Max = Module2["_Max"] = function() {
          return (_Max = Module2["_Max"] = Module2["asm"]["Max"]).apply(null, arguments);
        };
        var _MaxPool = Module2["_MaxPool"] = function() {
          return (_MaxPool = Module2["_MaxPool"] = Module2["asm"]["MaxPool"]).apply(null, arguments);
        };
        var _Maximum = Module2["_Maximum"] = function() {
          return (_Maximum = Module2["_Maximum"] = Module2["asm"]["Maximum"]).apply(null, arguments);
        };
        var _Mean = Module2["_Mean"] = function() {
          return (_Mean = Module2["_Mean"] = Module2["asm"]["Mean"]).apply(null, arguments);
        };
        var _Min = Module2["_Min"] = function() {
          return (_Min = Module2["_Min"] = Module2["asm"]["Min"]).apply(null, arguments);
        };
        var _Minimum = Module2["_Minimum"] = function() {
          return (_Minimum = Module2["_Minimum"] = Module2["asm"]["Minimum"]).apply(null, arguments);
        };
        var _MirrorPad = Module2["_MirrorPad"] = function() {
          return (_MirrorPad = Module2["_MirrorPad"] = Module2["asm"]["MirrorPad"]).apply(null, arguments);
        };
        var _Multiply = Module2["_Multiply"] = function() {
          return (_Multiply = Module2["_Multiply"] = Module2["asm"]["Multiply"]).apply(null, arguments);
        };
        var _Neg = Module2["_Neg"] = function() {
          return (_Neg = Module2["_Neg"] = Module2["asm"]["Neg"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV3 = Module2["_NonMaxSuppressionV3"] = function() {
          return (_NonMaxSuppressionV3 = Module2["_NonMaxSuppressionV3"] = Module2["asm"]["NonMaxSuppressionV3"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV4 = Module2["_NonMaxSuppressionV4"] = function() {
          return (_NonMaxSuppressionV4 = Module2["_NonMaxSuppressionV4"] = Module2["asm"]["NonMaxSuppressionV4"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV5 = Module2["_NonMaxSuppressionV5"] = function() {
          return (_NonMaxSuppressionV5 = Module2["_NonMaxSuppressionV5"] = Module2["asm"]["NonMaxSuppressionV5"]).apply(null, arguments);
        };
        var _NotEqual = Module2["_NotEqual"] = function() {
          return (_NotEqual = Module2["_NotEqual"] = Module2["asm"]["NotEqual"]).apply(null, arguments);
        };
        var _OneHot = Module2["_OneHot"] = function() {
          return (_OneHot = Module2["_OneHot"] = Module2["asm"]["OneHot"]).apply(null, arguments);
        };
        var _PadV2 = Module2["_PadV2"] = function() {
          return (_PadV2 = Module2["_PadV2"] = Module2["asm"]["PadV2"]).apply(null, arguments);
        };
        var _Pow = Module2["_Pow"] = function() {
          return (_Pow = Module2["_Pow"] = Module2["asm"]["Pow"]).apply(null, arguments);
        };
        var _Prelu = Module2["_Prelu"] = function() {
          return (_Prelu = Module2["_Prelu"] = Module2["asm"]["Prelu"]).apply(null, arguments);
        };
        var _Prod = Module2["_Prod"] = function() {
          return (_Prod = Module2["_Prod"] = Module2["asm"]["Prod"]).apply(null, arguments);
        };
        var _RealDiv = Module2["_RealDiv"] = function() {
          return (_RealDiv = Module2["_RealDiv"] = Module2["asm"]["RealDiv"]).apply(null, arguments);
        };
        var _Relu = Module2["_Relu"] = function() {
          return (_Relu = Module2["_Relu"] = Module2["asm"]["Relu"]).apply(null, arguments);
        };
        var _Relu6 = Module2["_Relu6"] = function() {
          return (_Relu6 = Module2["_Relu6"] = Module2["asm"]["Relu6"]).apply(null, arguments);
        };
        var _ResizeBilinear = Module2["_ResizeBilinear"] = function() {
          return (_ResizeBilinear = Module2["_ResizeBilinear"] = Module2["asm"]["ResizeBilinear"]).apply(null, arguments);
        };
        var _ResizeNearestNeighbor = Module2["_ResizeNearestNeighbor"] = function() {
          return (_ResizeNearestNeighbor = Module2["_ResizeNearestNeighbor"] = Module2["asm"]["ResizeNearestNeighbor"]).apply(null, arguments);
        };
        var _Reverse = Module2["_Reverse"] = function() {
          return (_Reverse = Module2["_Reverse"] = Module2["asm"]["Reverse"]).apply(null, arguments);
        };
        var _RotateWithOffset = Module2["_RotateWithOffset"] = function() {
          return (_RotateWithOffset = Module2["_RotateWithOffset"] = Module2["asm"]["RotateWithOffset"]).apply(null, arguments);
        };
        var _Round = Module2["_Round"] = function() {
          return (_Round = Module2["_Round"] = Module2["asm"]["Round"]).apply(null, arguments);
        };
        var _Rsqrt = Module2["_Rsqrt"] = function() {
          return (_Rsqrt = Module2["_Rsqrt"] = Module2["asm"]["Rsqrt"]).apply(null, arguments);
        };
        var _ScatterNd = Module2["_ScatterNd"] = function() {
          return (_ScatterNd = Module2["_ScatterNd"] = Module2["asm"]["ScatterNd"]).apply(null, arguments);
        };
        var _SelectV2 = Module2["_SelectV2"] = function() {
          return (_SelectV2 = Module2["_SelectV2"] = Module2["asm"]["SelectV2"]).apply(null, arguments);
        };
        var _Sigmoid = Module2["_Sigmoid"] = function() {
          return (_Sigmoid = Module2["_Sigmoid"] = Module2["asm"]["Sigmoid"]).apply(null, arguments);
        };
        var _Sin = Module2["_Sin"] = function() {
          return (_Sin = Module2["_Sin"] = Module2["asm"]["Sin"]).apply(null, arguments);
        };
        var _Softmax = Module2["_Softmax"] = function() {
          return (_Softmax = Module2["_Softmax"] = Module2["asm"]["Softmax"]).apply(null, arguments);
        };
        var _SparseFillEmptyRows = Module2["_SparseFillEmptyRows"] = function() {
          return (_SparseFillEmptyRows = Module2["_SparseFillEmptyRows"] = Module2["asm"]["SparseFillEmptyRows"]).apply(null, arguments);
        };
        var _SparseReshape = Module2["_SparseReshape"] = function() {
          return (_SparseReshape = Module2["_SparseReshape"] = Module2["asm"]["SparseReshape"]).apply(null, arguments);
        };
        var _SparseSegmentReduction = Module2["_SparseSegmentReduction"] = function() {
          return (_SparseSegmentReduction = Module2["_SparseSegmentReduction"] = Module2["asm"]["SparseSegmentReduction"]).apply(null, arguments);
        };
        var _Sqrt = Module2["_Sqrt"] = function() {
          return (_Sqrt = Module2["_Sqrt"] = Module2["asm"]["Sqrt"]).apply(null, arguments);
        };
        var _Square = Module2["_Square"] = function() {
          return (_Square = Module2["_Square"] = Module2["asm"]["Square"]).apply(null, arguments);
        };
        var _SquaredDifference = Module2["_SquaredDifference"] = function() {
          return (_SquaredDifference = Module2["_SquaredDifference"] = Module2["asm"]["SquaredDifference"]).apply(null, arguments);
        };
        var _Step = Module2["_Step"] = function() {
          return (_Step = Module2["_Step"] = Module2["asm"]["Step"]).apply(null, arguments);
        };
        var _StridedSlice = Module2["_StridedSlice"] = function() {
          return (_StridedSlice = Module2["_StridedSlice"] = Module2["asm"]["StridedSlice"]).apply(null, arguments);
        };
        var _Sub = Module2["_Sub"] = function() {
          return (_Sub = Module2["_Sub"] = Module2["asm"]["Sub"]).apply(null, arguments);
        };
        var _Sum = Module2["_Sum"] = function() {
          return (_Sum = Module2["_Sum"] = Module2["asm"]["Sum"]).apply(null, arguments);
        };
        var _Tan = Module2["_Tan"] = function() {
          return (_Tan = Module2["_Tan"] = Module2["asm"]["Tan"]).apply(null, arguments);
        };
        var _Tanh = Module2["_Tanh"] = function() {
          return (_Tanh = Module2["_Tanh"] = Module2["asm"]["Tanh"]).apply(null, arguments);
        };
        var _Tile = Module2["_Tile"] = function() {
          return (_Tile = Module2["_Tile"] = Module2["asm"]["Tile"]).apply(null, arguments);
        };
        var _TopK = Module2["_TopK"] = function() {
          return (_TopK = Module2["_TopK"] = Module2["asm"]["TopK"]).apply(null, arguments);
        };
        var _Transform = Module2["_Transform"] = function() {
          return (_Transform = Module2["_Transform"] = Module2["asm"]["Transform"]).apply(null, arguments);
        };
        var _Transpose = Module2["_Transpose"] = function() {
          return (_Transpose = Module2["_Transpose"] = Module2["asm"]["Transpose"]).apply(null, arguments);
        };
        var __FusedMatMul = Module2["__FusedMatMul"] = function() {
          return (__FusedMatMul = Module2["__FusedMatMul"] = Module2["asm"]["_FusedMatMul"]).apply(null, arguments);
        };
        var _malloc = Module2["_malloc"] = function() {
          return (_malloc = Module2["_malloc"] = Module2["asm"]["malloc"]).apply(null, arguments);
        };
        var _free = Module2["_free"] = function() {
          return (_free = Module2["_free"] = Module2["asm"]["free"]).apply(null, arguments);
        };
        var ___errno_location = Module2["___errno_location"] = function() {
          return (___errno_location = Module2["___errno_location"] = Module2["asm"]["__errno_location"]).apply(null, arguments);
        };
        var _emscripten_main_thread_process_queued_calls = Module2["_emscripten_main_thread_process_queued_calls"] = function() {
          return (_emscripten_main_thread_process_queued_calls = Module2["_emscripten_main_thread_process_queued_calls"] = Module2["asm"]["emscripten_main_thread_process_queued_calls"]).apply(null, arguments);
        };
        var stackSave = Module2["stackSave"] = function() {
          return (stackSave = Module2["stackSave"] = Module2["asm"]["stackSave"]).apply(null, arguments);
        };
        var stackRestore = Module2["stackRestore"] = function() {
          return (stackRestore = Module2["stackRestore"] = Module2["asm"]["stackRestore"]).apply(null, arguments);
        };
        var stackAlloc = Module2["stackAlloc"] = function() {
          return (stackAlloc = Module2["stackAlloc"] = Module2["asm"]["stackAlloc"]).apply(null, arguments);
        };
        var dynCall_iijjiiii = Module2["dynCall_iijjiiii"] = function() {
          return (dynCall_iijjiiii = Module2["dynCall_iijjiiii"] = Module2["asm"]["dynCall_iijjiiii"]).apply(null, arguments);
        };
        var dynCall_jiji = Module2["dynCall_jiji"] = function() {
          return (dynCall_jiji = Module2["dynCall_jiji"] = Module2["asm"]["dynCall_jiji"]).apply(null, arguments);
        };
        Module2["cwrap"] = cwrap;
        var calledRun;
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        dependenciesFulfilled = function runCaller() {
          if (!calledRun)
            run();
          if (!calledRun)
            dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun)
              return;
            calledRun = true;
            Module2["calledRun"] = true;
            if (ABORT)
              return;
            initRuntime();
            readyPromiseResolve(Module2);
            if (Module2["onRuntimeInitialized"])
              Module2["onRuntimeInitialized"]();
            postRun();
          }
          if (Module2["setStatus"]) {
            Module2["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module2["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        Module2["run"] = run;
        function procExit(code) {
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            if (Module2["onExit"])
              Module2["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        if (Module2["preInit"]) {
          if (typeof Module2["preInit"] == "function")
            Module2["preInit"] = [Module2["preInit"]];
          while (Module2["preInit"].length > 0) {
            Module2["preInit"].pop()();
          }
        }
        run();
        var listenersAdded;
        if (beforeListeners) {
          listenersAdded = { uncaughtException: process.listeners("uncaughtException").filter(function(listener) {
            return !beforeListeners.uncaughtException.indexOf(listener) > -1;
          }), unhandledRejection: process.listeners("unhandledRejection").filter(function(listener) {
            return !beforeListeners.unhandledRejection.indexOf(listener) > -1;
          }) };
        }
        var actualModule;
        if (typeof WasmBackendModule3 !== "undefined") {
          actualModule = WasmBackendModule3;
        } else if (typeof WasmBackendModuleThreadedSimd !== "undefined") {
          actualModule = WasmBackendModuleThreadedSimd;
        } else {
          throw new Error("Could not find wasm module in post.js");
        }
        if (listenersAdded) {
          var tmpDispose = actualModule["_dispose"];
          actualModule["_dispose"] = function() {
            tmpDispose();
            listenersAdded.uncaughtException.forEach(function(listener) {
              process.removeListener("uncaughtException", listener);
            });
            listenersAdded.unhandledRejection.forEach(function(listener) {
              process.removeListener("unhandledRejection", listener);
            });
          };
        }
        return WasmBackendModule3.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = WasmBackendModule2;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return WasmBackendModule2;
      });
    else if (typeof exports === "object")
      exports["WasmBackendModule"] = WasmBackendModule2;
  }
});

// src/tfjs-core/src/backends/backend.ts
var EPSILON_FLOAT32 = 1e-7;
var EPSILON_FLOAT16 = 1e-4;
var DataStorage = class {
  constructor(backend, dataMover) {
    this.backend = backend;
    this.dataMover = dataMover;
    this.data = /* @__PURE__ */ new WeakMap();
    this.dataIdsCount = 0;
  }
  get(dataId) {
    if (!this.data.has(dataId)) {
      this.dataMover.moveData(this.backend, dataId);
    }
    return this.data.get(dataId);
  }
  set(dataId, value) {
    this.dataIdsCount++;
    this.data.set(dataId, value);
  }
  has(dataId) {
    return this.data.has(dataId);
  }
  delete(dataId) {
    this.dataIdsCount--;
    return this.data.delete(dataId);
  }
  numDataIds() {
    return this.dataIdsCount;
  }
};
var KernelBackend = class {
  refCount(dataId) {
    return notYetImplemented("refCount");
  }
  incRef(dataId) {
    return notYetImplemented("incRef");
  }
  timerAvailable() {
    return true;
  }
  time(f) {
    return notYetImplemented("time");
  }
  read(dataId) {
    return notYetImplemented("read");
  }
  readSync(dataId) {
    return notYetImplemented("readSync");
  }
  readToGPU(dataId, options) {
    return notYetImplemented("readToGPU");
  }
  numDataIds() {
    return notYetImplemented("numDataIds");
  }
  disposeData(dataId, force) {
    return notYetImplemented("disposeData");
  }
  write(values, shape, dtype) {
    return notYetImplemented("write");
  }
  move(dataId, values, shape, dtype, refCount) {
    return notYetImplemented("move");
  }
  memory() {
    return notYetImplemented("memory");
  }
  floatPrecision() {
    return notYetImplemented("floatPrecision");
  }
  epsilon() {
    return this.floatPrecision() === 32 ? EPSILON_FLOAT32 : EPSILON_FLOAT16;
  }
  dispose() {
    return notYetImplemented("dispose");
  }
};
function notYetImplemented(kernelName) {
  throw new Error(
    `'${kernelName}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`
  );
}

// src/tfjs-core/src/util_base.ts
function shuffle(array) {
  let counter = array.length;
  let index = 0;
  while (counter > 0) {
    index = Math.random() * counter | 0;
    counter--;
    swap(array, counter, index);
  }
}
function shuffleCombo(array, array2) {
  if (array.length !== array2.length) {
    throw new Error(
      `Array sizes must match to be shuffled together First array length was ${array.length}Second array length was ${array2.length}`
    );
  }
  let counter = array.length;
  let index = 0;
  while (counter > 0) {
    index = Math.random() * counter | 0;
    counter--;
    swap(array, counter, index);
    swap(array2, counter, index);
  }
}
function clamp(min3, x, max3) {
  return Math.max(min3, Math.min(x, max3));
}
function nearestLargerEven(val) {
  return val % 2 === 0 ? val : val + 1;
}
function swap(object, left, right) {
  const temp = object[left];
  object[left] = object[right];
  object[right] = temp;
}
function sum(arr) {
  let sum4 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum4 += arr[i];
  }
  return sum4;
}
function randUniform(a, b) {
  const r = Math.random();
  return b * r + (1 - r) * a;
}
function distSquared(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = Number(a[i]) - Number(b[i]);
    result += diff * diff;
  }
  return result;
}
function assert(expr, msg) {
  if (!expr) {
    throw new Error(typeof msg === "string" ? msg : msg());
  }
}
function assertShapesMatch(shapeA, shapeB, errorMessagePrefix = "") {
  assert(
    arraysEqual(shapeA, shapeB),
    () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`
  );
}
function assertNonNull(a) {
  assert(
    a != null,
    () => `The input to the tensor constructor must be a non-null value.`
  );
}
function flatten(arr, result = [], skipTypedArray = false) {
  if (result == null) {
    result = [];
  }
  if (Array.isArray(arr) || isTypedArray(arr) && !skipTypedArray) {
    for (let i = 0; i < arr.length; ++i) {
      flatten(arr[i], result, skipTypedArray);
    }
  } else {
    result.push(arr);
  }
  return result;
}
function sizeFromShape(shape) {
  if (shape.length === 0) {
    return 1;
  }
  let size = shape[0];
  for (let i = 1; i < shape.length; i++) {
    size *= shape[i];
  }
  return size;
}
function isScalarShape(shape) {
  return shape.length === 0;
}
function arraysEqual(n1, n2) {
  if (n1 === n2) {
    return true;
  }
  if (n1 == null || n2 == null) {
    return false;
  }
  if (n1.length !== n2.length) {
    return false;
  }
  for (let i = 0; i < n1.length; i++) {
    if (n1[i] !== n2[i]) {
      return false;
    }
  }
  return true;
}
function isInt(a) {
  return a % 1 === 0;
}
function tanh(x) {
  if (Math.tanh != null) {
    return Math.tanh(x);
  }
  if (x === Infinity) {
    return 1;
  } else if (x === -Infinity) {
    return -1;
  } else {
    const e2x = Math.exp(2 * x);
    return (e2x - 1) / (e2x + 1);
  }
}
function sizeToSquarishShape(size) {
  const width = Math.ceil(Math.sqrt(size));
  return [width, Math.ceil(size / width)];
}
function createShuffledIndices(n) {
  const shuffledIndices = new Uint32Array(n);
  for (let i = 0; i < n; ++i) {
    shuffledIndices[i] = i;
  }
  shuffle(shuffledIndices);
  return shuffledIndices;
}
function rightPad(a, size) {
  if (size <= a.length) {
    return a;
  }
  return a + " ".repeat(size - a.length);
}
function repeatedTry(checkFn, delayFn = (counter) => 0, maxCounter) {
  return new Promise((resolve, reject) => {
    let tryCount = 0;
    const tryFn = () => {
      if (checkFn()) {
        resolve();
        return;
      }
      tryCount++;
      const nextBackoff = delayFn(tryCount);
      if (maxCounter != null && tryCount >= maxCounter) {
        reject();
        return;
      }
      setTimeout(tryFn, nextBackoff);
    };
    tryFn();
  });
}
function inferFromImplicitShape(shape, size) {
  let shapeProd = 1;
  let implicitIdx = -1;
  for (let i = 0; i < shape.length; ++i) {
    if (shape[i] >= 0) {
      shapeProd *= shape[i];
    } else if (shape[i] === -1) {
      if (implicitIdx !== -1) {
        throw Error(
          `Shapes can only have 1 implicit size. Found -1 at dim ${implicitIdx} and dim ${i}`
        );
      }
      implicitIdx = i;
    } else if (shape[i] < 0) {
      throw Error(`Shapes can not be < 0. Found ${shape[i]} at dim ${i}`);
    }
  }
  if (implicitIdx === -1) {
    if (size > 0 && size !== shapeProd) {
      throw Error(`Size(${size}) must match the product of shape ${shape}`);
    }
    return shape;
  }
  if (shapeProd === 0) {
    throw Error(
      `Cannot infer the missing size in [${shape}] when there are 0 elements`
    );
  }
  if (size % shapeProd !== 0) {
    throw Error(
      `The implicit shape can't be a fractional number. Got ${size} / ${shapeProd}`
    );
  }
  const newShape = shape.slice();
  newShape[implicitIdx] = size / shapeProd;
  return newShape;
}
function parseAxisParam(axis, shape) {
  const rank = shape.length;
  axis = axis == null ? shape.map((s, i) => i) : [].concat(axis);
  assert(
    axis.every((ax) => ax >= -rank && ax < rank),
    () => `All values in axis param must be in range [-${rank}, ${rank}) but got axis ${axis}`
  );
  assert(
    axis.every((ax) => isInt(ax)),
    () => `All values in axis param must be integers but got axis ${axis}`
  );
  return axis.map((a) => a < 0 ? rank + a : a);
}
function squeezeShape(shape, axis) {
  const newShape = [];
  const keptDims = [];
  const isEmptyArray = axis != null && Array.isArray(axis) && axis.length === 0;
  const axes = axis == null || isEmptyArray ? null : parseAxisParam(axis, shape).sort();
  let j = 0;
  for (let i = 0; i < shape.length; ++i) {
    if (axes != null) {
      if (axes[j] === i && shape[i] !== 1) {
        throw new Error(
          `Can't squeeze axis ${i} since its dim '${shape[i]}' is not 1`
        );
      }
      if ((axes[j] == null || axes[j] > i) && shape[i] === 1) {
        newShape.push(shape[i]);
        keptDims.push(i);
      }
      if (axes[j] <= i) {
        j++;
      }
    }
    if (shape[i] !== 1) {
      newShape.push(shape[i]);
      keptDims.push(i);
    }
  }
  return { newShape, keptDims };
}
function getTypedArrayFromDType(dtype, size) {
  let values = null;
  if (dtype == null || dtype === "float32") {
    values = new Float32Array(size);
  } else if (dtype === "int32") {
    values = new Int32Array(size);
  } else if (dtype === "bool") {
    values = new Uint8Array(size);
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
  return values;
}
function getArrayFromDType(dtype, size) {
  let values = null;
  if (dtype == null || dtype === "float32") {
    values = new Float32Array(size);
  } else if (dtype === "int32") {
    values = new Int32Array(size);
  } else if (dtype === "bool") {
    values = new Uint8Array(size);
  } else if (dtype === "string") {
    values = new Array(size);
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
  return values;
}
function checkConversionForErrors(vals, dtype) {
  for (let i = 0; i < vals.length; i++) {
    const num = vals[i];
    if (isNaN(num) || !isFinite(num)) {
      throw Error(`A tensor of type ${dtype} being uploaded contains ${num}.`);
    }
  }
}
function isValidDtype(dtype) {
  return dtype === "bool" || dtype === "complex64" || dtype === "float32" || dtype === "int32" || dtype === "string";
}
function hasEncodingLoss(oldType, newType) {
  if (newType === "complex64") {
    return false;
  }
  if (newType === "float32" && oldType !== "complex64") {
    return false;
  }
  if (newType === "int32" && oldType !== "float32" && oldType !== "complex64") {
    return false;
  }
  if (newType === "bool" && oldType === "bool") {
    return false;
  }
  return true;
}
function isTypedArray(a) {
  return a instanceof Float32Array || a instanceof Int32Array || a instanceof Uint8Array || a instanceof Uint8ClampedArray;
}
function bytesPerElement(dtype) {
  if (dtype === "float32" || dtype === "int32") {
    return 4;
  } else if (dtype === "complex64") {
    return 8;
  } else if (dtype === "bool") {
    return 1;
  } else {
    throw new Error(`Unknown dtype ${dtype}`);
  }
}
function bytesFromStringArray(arr) {
  if (arr == null) {
    return 0;
  }
  let bytes = 0;
  arr.forEach((x) => bytes += x.length);
  return bytes;
}
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isNumber(value) {
  return typeof value === "number";
}
function inferDtype(values) {
  if (Array.isArray(values)) {
    return inferDtype(values[0]);
  }
  if (values instanceof Float32Array) {
    return "float32";
  } else if (values instanceof Int32Array || values instanceof Uint8Array || values instanceof Uint8ClampedArray) {
    return "int32";
  } else if (isNumber(values)) {
    return "float32";
  } else if (isString(values)) {
    return "string";
  } else if (isBoolean(values)) {
    return "bool";
  }
  return "float32";
}
function isFunction(f) {
  return !!(f && f.constructor && f.call && f.apply);
}
function nearestDivisor(size, start) {
  for (let i = start; i < size; ++i) {
    if (size % i === 0) {
      return i;
    }
  }
  return size;
}
function computeStrides(shape) {
  const rank = shape.length;
  if (rank < 2) {
    return [];
  }
  const strides = new Array(rank - 1);
  strides[rank - 2] = shape[rank - 1];
  for (let i = rank - 3; i >= 0; --i) {
    strides[i] = strides[i + 1] * shape[i + 1];
  }
  return strides;
}
function createNestedArray(offset, shape, a, isComplex = false) {
  const ret = new Array();
  if (shape.length === 1) {
    const d = shape[0] * (isComplex ? 2 : 1);
    for (let i = 0; i < d; i++) {
      ret[i] = a[offset + i];
    }
  } else {
    const d = shape[0];
    const rest = shape.slice(1);
    const len = rest.reduce((acc, c) => acc * c) * (isComplex ? 2 : 1);
    for (let i = 0; i < d; i++) {
      ret[i] = createNestedArray(offset + i * len, rest, a, isComplex);
    }
  }
  return ret;
}
function toNestedArray(shape, a, isComplex = false) {
  if (shape.length === 0) {
    return a[0];
  }
  const size = shape.reduce((acc, c) => acc * c) * (isComplex ? 2 : 1);
  if (size === 0) {
    return [];
  }
  if (size !== a.length) {
    throw new Error(`[${shape}] does not match the input size ${a.length}${isComplex ? " for a complex tensor" : ""}.`);
  }
  return createNestedArray(0, shape, a, isComplex);
}
function makeOnesTypedArray(size, dtype) {
  const array = makeZerosTypedArray(size, dtype);
  for (let i = 0; i < array.length; i++) {
    array[i] = 1;
  }
  return array;
}
function makeZerosTypedArray(size, dtype) {
  if (dtype == null || dtype === "float32" || dtype === "complex64") {
    return new Float32Array(size);
  } else if (dtype === "int32") {
    return new Int32Array(size);
  } else if (dtype === "bool") {
    return new Uint8Array(size);
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
}
function makeZerosNestedTypedArray(shape, dtype) {
  const size = shape.reduce((prev, curr) => prev * curr, 1);
  if (dtype == null || dtype === "float32") {
    return toNestedArray(shape, new Float32Array(size));
  } else if (dtype === "int32") {
    return toNestedArray(shape, new Int32Array(size));
  } else if (dtype === "bool") {
    return toNestedArray(shape, new Uint8Array(size));
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
}
function assertNonNegativeIntegerDimensions(shape) {
  shape.forEach((dimSize) => {
    assert(
      Number.isInteger(dimSize) && dimSize >= 0,
      () => `Tensor must have a shape comprised of positive integers but got shape [${shape}].`
    );
  });
}
function locToIndex(locs, rank, strides) {
  if (rank === 0) {
    return 0;
  } else if (rank === 1) {
    return locs[0];
  }
  let index = locs[locs.length - 1];
  for (let i = 0; i < locs.length - 1; ++i) {
    index += strides[i] * locs[i];
  }
  return index;
}
function indexToLoc(index, rank, strides) {
  if (rank === 0) {
    return [];
  } else if (rank === 1) {
    return [index];
  }
  const locs = new Array(rank);
  for (let i = 0; i < locs.length - 1; ++i) {
    locs[i] = Math.floor(index / strides[i]);
    index -= locs[i] * strides[i];
  }
  locs[locs.length - 1] = index;
  return locs;
}
function isPromise(object) {
  return object && object.then && typeof object.then === "function";
}

// src/tfjs-core/src/environment.ts
var TENSORFLOWJS_FLAGS_PREFIX = "tfjsflags";
var Environment = class {
  constructor(global2) {
    this.global = global2;
    this.flags = {};
    this.flagRegistry = {};
    this.urlFlags = {};
    this.getQueryParams = getQueryParams;
    this.populateURLFlags();
  }
  setPlatform(platformName, platform) {
    if (this.platform != null) {
      if (!(env().getBool("IS_TEST") || env().getBool("PROD"))) {
        console.warn(
          `Platform ${this.platformName} has already been set. Overwriting the platform with ${platformName}.`
        );
      }
    }
    this.platformName = platformName;
    this.platform = platform;
  }
  registerFlag(flagName, evaluationFn, setHook) {
    this.flagRegistry[flagName] = { evaluationFn, setHook };
    if (this.urlFlags[flagName] != null) {
      const flagValue = this.urlFlags[flagName];
      if (!(env().getBool("IS_TEST") || env().getBool("PROD"))) {
        console.warn(
          `Setting feature override from URL ${flagName}: ${flagValue}.`
        );
      }
      this.set(flagName, flagValue);
    }
  }
  async getAsync(flagName) {
    if (flagName in this.flags) {
      return this.flags[flagName];
    }
    this.flags[flagName] = await this.evaluateFlag(flagName);
    return this.flags[flagName];
  }
  get(flagName) {
    if (flagName in this.flags) {
      return this.flags[flagName];
    }
    const flagValue = this.evaluateFlag(flagName);
    if (isPromise(flagValue)) {
      throw new Error(
        `Flag ${flagName} cannot be synchronously evaluated. Please use getAsync() instead.`
      );
    }
    this.flags[flagName] = flagValue;
    return this.flags[flagName];
  }
  getNumber(flagName) {
    return this.get(flagName);
  }
  getBool(flagName) {
    return this.get(flagName);
  }
  getFlags() {
    return this.flags;
  }
  get features() {
    return this.flags;
  }
  set(flagName, value) {
    if (this.flagRegistry[flagName] == null) {
      throw new Error(
        `Cannot set flag ${flagName} as it has not been registered.`
      );
    }
    this.flags[flagName] = value;
    if (this.flagRegistry[flagName].setHook != null) {
      this.flagRegistry[flagName].setHook(value);
    }
  }
  evaluateFlag(flagName) {
    if (this.flagRegistry[flagName] == null) {
      throw new Error(
        `Cannot evaluate flag '${flagName}': no evaluation function found.`
      );
    }
    return this.flagRegistry[flagName].evaluationFn();
  }
  setFlags(flags) {
    this.flags = Object.assign({}, flags);
  }
  reset() {
    this.flags = {};
    this.urlFlags = {};
    this.populateURLFlags();
  }
  populateURLFlags() {
    if (typeof this.global === "undefined" || typeof this.global.location === "undefined" || typeof this.global.location.search === "undefined") {
      return;
    }
    const urlParams = this.getQueryParams(this.global.location.search);
    if (TENSORFLOWJS_FLAGS_PREFIX in urlParams) {
      const keyValues = urlParams[TENSORFLOWJS_FLAGS_PREFIX].split(",");
      keyValues.forEach((keyValue) => {
        const [key, value] = keyValue.split(":");
        this.urlFlags[key] = parseValue(key, value);
      });
    }
  }
};
function getQueryParams(queryString) {
  const params = {};
  queryString.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, (s, ...t) => {
    decodeParam(params, t[0], t[1]);
    return t.join("=");
  });
  return params;
}
function decodeParam(params, name, value) {
  params[decodeURIComponent(name)] = decodeURIComponent(value || "");
}
function parseValue(flagName, value) {
  value = value.toLowerCase();
  if (value === "true" || value === "false") {
    return value === "true";
  } else if (`${+value}` === value) {
    return +value;
  }
  throw new Error(
    `Could not parse value flag value ${value} for flag ${flagName}.`
  );
}
function env() {
  return ENV;
}
var ENV = null;
function setEnvironmentGlobal(environment) {
  ENV = environment;
}

// src/tfjs-core/src/global_util.ts
var globalNameSpace;
function getGlobalNamespace() {
  if (globalNameSpace == null) {
    let ns;
    if (typeof window !== "undefined") {
      ns = window;
    } else if (typeof global !== "undefined") {
      ns = global;
    } else if (typeof process !== "undefined") {
      ns = process;
    } else if (typeof self !== "undefined") {
      ns = self;
    } else {
      throw new Error("Could not find a global object");
    }
    globalNameSpace = ns;
  }
  return globalNameSpace;
}
function getGlobalMap() {
  const ns = getGlobalNamespace();
  if (ns._tfGlobals == null) {
    ns._tfGlobals = /* @__PURE__ */ new Map();
  }
  return ns._tfGlobals;
}
function getGlobal(key, init2) {
  const globalMap = getGlobalMap();
  if (globalMap.has(key)) {
    return globalMap.get(key);
  } else {
    const singleton = init2();
    globalMap.set(key, singleton);
    return globalMap.get(key);
  }
}

// src/tfjs-core/src/kernel_names.ts
var Abs = "Abs";
var Acos = "Acos";
var Acosh = "Acosh";
var Add = "Add";
var AddN = "AddN";
var All = "All";
var Any = "Any";
var ArgMax = "ArgMax";
var ArgMin = "ArgMin";
var Asin = "Asin";
var Asinh = "Asinh";
var Atan = "Atan";
var Atanh = "Atanh";
var Atan2 = "Atan2";
var AvgPool = "AvgPool";
var AvgPool3D = "AvgPool3D";
var BatchMatMul = "BatchMatMul";
var BatchToSpaceND = "BatchToSpaceND";
var Bincount = "Bincount";
var BroadcastArgs = "BroadcastArgs";
var Cast = "Cast";
var Ceil = "Ceil";
var ClipByValue = "ClipByValue";
var Complex = "Complex";
var ComplexAbs = "ComplexAbs";
var Concat = "Concat";
var Conv2D = "Conv2D";
var Conv2DBackpropFilter = "Conv2DBackpropFilter";
var Conv2DBackpropInput = "Conv2DBackpropInput";
var Conv3D = "Conv3D";
var Conv3DBackpropInputV2 = "Conv3DBackpropInputV2";
var Cos = "Cos";
var Cosh = "Cosh";
var Cumprod = "Cumprod";
var Cumsum = "Cumsum";
var CropAndResize = "CropAndResize";
var DenseBincount = "DenseBincount";
var DepthToSpace = "DepthToSpace";
var DepthwiseConv2dNative = "DepthwiseConv2dNative";
var DepthwiseConv2dNativeBackpropFilter = "DepthwiseConv2dNativeBackpropFilter";
var DepthwiseConv2dNativeBackpropInput = "DepthwiseConv2dNativeBackpropInput";
var Diag = "Diag";
var Dilation2D = "Dilation2D";
var RealDiv = "RealDiv";
var Einsum = "Einsum";
var Elu = "Elu";
var Erf = "Erf";
var Equal = "Equal";
var Exp = "Exp";
var ExpandDims = "ExpandDims";
var Expm1 = "Expm1";
var FFT = "FFT";
var Fill = "Fill";
var FlipLeftRight = "FlipLeftRight";
var Floor = "Floor";
var FloorDiv = "FloorDiv";
var FusedBatchNorm = "FusedBatchNorm";
var GatherV2 = "GatherV2";
var GatherNd = "GatherNd";
var Greater = "Greater";
var GreaterEqual = "GreaterEqual";
var Identity = "Identity";
var IFFT = "IFFT";
var Imag = "Imag";
var IsFinite = "IsFinite";
var IsInf = "IsInf";
var IsNan = "IsNan";
var LeakyRelu = "LeakyRelu";
var Less = "Less";
var LessEqual = "LessEqual";
var Log = "Log";
var Log1p = "Log1p";
var LogicalAnd = "LogicalAnd";
var LogicalNot = "LogicalNot";
var LogicalOr = "LogicalOr";
var LogicalXor = "LogicalXor";
var LRN = "LRN";
var Max = "Max";
var Maximum = "Maximum";
var MaxPool = "MaxPool";
var MaxPool3D = "MaxPool3D";
var MaxPoolWithArgmax = "MaxPoolWithArgmax";
var Mean = "Mean";
var Min = "Min";
var Minimum = "Minimum";
var MirrorPad = "MirrorPad";
var Mod = "Mod";
var Multinomial = "Multinomial";
var Multiply = "Multiply";
var Neg = "Neg";
var NotEqual = "NotEqual";
var NonMaxSuppressionV3 = "NonMaxSuppressionV3";
var NonMaxSuppressionV4 = "NonMaxSuppressionV4";
var NonMaxSuppressionV5 = "NonMaxSuppressionV5";
var OnesLike = "OnesLike";
var OneHot = "OneHot";
var Pack = "Pack";
var PadV2 = "PadV2";
var Pow = "Pow";
var Prelu = "Prelu";
var Prod = "Prod";
var RaggedTensorToTensor = "RaggedTensorToTensor";
var Range = "Range";
var Real = "Real";
var Reciprocal = "Reciprocal";
var Relu = "Relu";
var Reshape = "Reshape";
var ResizeNearestNeighbor = "ResizeNearestNeighbor";
var ResizeBilinear = "ResizeBilinear";
var Relu6 = "Relu6";
var Reverse = "Reverse";
var Round = "Round";
var Rsqrt = "Rsqrt";
var ScatterNd = "ScatterNd";
var SearchSorted = "SearchSorted";
var Select = "Select";
var Selu = "Selu";
var Slice = "Slice";
var Sin = "Sin";
var Sinh = "Sinh";
var Sign = "Sign";
var Sigmoid = "Sigmoid";
var Softplus = "Softplus";
var Sqrt = "Sqrt";
var Sum = "Sum";
var SpaceToBatchND = "SpaceToBatchND";
var SplitV = "SplitV";
var Softmax = "Softmax";
var SparseFillEmptyRows = "SparseFillEmptyRows";
var SparseReshape = "SparseReshape";
var SparseSegmentMean = "SparseSegmentMean";
var SparseSegmentSum = "SparseSegmentSum";
var SparseToDense = "SparseToDense";
var SquaredDifference = "SquaredDifference";
var Square = "Square";
var StridedSlice = "StridedSlice";
var StringNGrams = "StringNGrams";
var StringSplit = "StringSplit";
var StringToHashBucketFast = "StringToHashBucketFast";
var Sub = "Sub";
var Tan = "Tan";
var Tanh = "Tanh";
var Tile = "Tile";
var TopK = "TopK";
var Transform = "Transform";
var Transpose = "Transpose";
var Unique = "Unique";
var Unpack = "Unpack";
var UnsortedSegmentSum = "UnsortedSegmentSum";
var ZerosLike = "ZerosLike";
var Step = "Step";
var FromPixels = "FromPixels";
var RotateWithOffset = "RotateWithOffset";
var _FusedMatMul = "_FusedMatMul";
var FusedConv2D = "FusedConv2D";
var FusedDepthwiseConv2D = "FusedDepthwiseConv2D";

// src/tfjs-core/src/log.ts
function warn(...msg) {
  if (!(env().getBool("IS_TEST") || env().getBool("PROD"))) {
    console.warn(...msg);
  }
}
function log(...msg) {
  if (!(env().getBool("IS_TEST") || env().getBool("PROD"))) {
    console.log(...msg);
  }
}

// src/tfjs-core/src/kernel_registry.ts
var kernelRegistry = getGlobal("kernelRegistry", () => /* @__PURE__ */ new Map());
var gradRegistry = getGlobal("gradRegistry", () => /* @__PURE__ */ new Map());
function getKernel(kernelName, backendName) {
  const key = makeKey(kernelName, backendName);
  return kernelRegistry.get(key);
}
function getGradient(kernelName) {
  return gradRegistry.get(kernelName);
}
function getKernelsForBackend(backendName) {
  const it = kernelRegistry.entries();
  const result = [];
  while (true) {
    const { done, value } = it.next();
    if (done) {
      break;
    }
    const [key, config] = value;
    const [backend] = key.split("_");
    if (backend === backendName) {
      result.push(config);
    }
  }
  return result;
}
function registerKernel(config) {
  const { kernelName, backendName } = config;
  const key = makeKey(kernelName, backendName);
  if (kernelRegistry.has(key)) {
    warn(
      `The kernel '${kernelName}' for backend '${backendName}' is already registered`
    );
  }
  kernelRegistry.set(key, config);
}
function makeKey(kernelName, backendName) {
  return `${backendName}_${kernelName}`;
}

// src/tfjs-core/src/util.ts
var util_exports = {};
__export(util_exports, {
  arraysEqual: () => arraysEqual,
  assert: () => assert,
  assertNonNegativeIntegerDimensions: () => assertNonNegativeIntegerDimensions,
  assertNonNull: () => assertNonNull,
  assertShapesMatch: () => assertShapesMatch,
  bytesFromStringArray: () => bytesFromStringArray,
  bytesPerElement: () => bytesPerElement,
  checkConversionForErrors: () => checkConversionForErrors,
  clamp: () => clamp,
  computeStrides: () => computeStrides,
  createScalarValue: () => createScalarValue,
  createShuffledIndices: () => createShuffledIndices,
  decodeString: () => decodeString,
  distSquared: () => distSquared,
  encodeString: () => encodeString,
  fetch: () => fetch3,
  fingerPrint64: () => fingerPrint64,
  flatten: () => flatten,
  getArrayFromDType: () => getArrayFromDType,
  getTypedArrayFromDType: () => getTypedArrayFromDType,
  hasEncodingLoss: () => hasEncodingLoss,
  hexToLong: () => hexToLong,
  indexToLoc: () => indexToLoc,
  inferDtype: () => inferDtype,
  inferFromImplicitShape: () => inferFromImplicitShape,
  isBoolean: () => isBoolean,
  isFunction: () => isFunction,
  isInt: () => isInt,
  isNumber: () => isNumber,
  isPromise: () => isPromise,
  isScalarShape: () => isScalarShape,
  isString: () => isString,
  isTypedArray: () => isTypedArray,
  isValidDtype: () => isValidDtype,
  locToIndex: () => locToIndex,
  makeOnesTypedArray: () => makeOnesTypedArray,
  makeZerosNestedTypedArray: () => makeZerosNestedTypedArray,
  makeZerosTypedArray: () => makeZerosTypedArray,
  nearestDivisor: () => nearestDivisor,
  nearestLargerEven: () => nearestLargerEven,
  now: () => now,
  parseAxisParam: () => parseAxisParam,
  randUniform: () => randUniform,
  repeatedTry: () => repeatedTry,
  rightPad: () => rightPad,
  shuffle: () => shuffle,
  shuffleCombo: () => shuffleCombo,
  sizeFromShape: () => sizeFromShape,
  sizeToSquarishShape: () => sizeToSquarishShape,
  squeezeShape: () => squeezeShape,
  sum: () => sum,
  swap: () => swap,
  tanh: () => tanh,
  toNestedArray: () => toNestedArray,
  toTypedArray: () => toTypedArray
});

// src/node_modules/.pnpm/long@5.2.0/node_modules/long/index.js
var long_exports = {};
__export(long_exports, {
  default: () => long_default
});
var wasm = null;
try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    13,
    2,
    96,
    0,
    1,
    127,
    96,
    4,
    127,
    127,
    127,
    127,
    1,
    127,
    3,
    7,
    6,
    0,
    1,
    1,
    1,
    1,
    1,
    6,
    6,
    1,
    127,
    1,
    65,
    0,
    11,
    7,
    50,
    6,
    3,
    109,
    117,
    108,
    0,
    1,
    5,
    100,
    105,
    118,
    95,
    115,
    0,
    2,
    5,
    100,
    105,
    118,
    95,
    117,
    0,
    3,
    5,
    114,
    101,
    109,
    95,
    115,
    0,
    4,
    5,
    114,
    101,
    109,
    95,
    117,
    0,
    5,
    8,
    103,
    101,
    116,
    95,
    104,
    105,
    103,
    104,
    0,
    0,
    10,
    191,
    1,
    6,
    4,
    0,
    35,
    0,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    126,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    127,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    128,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    129,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    130,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11
  ])), {}).exports;
} catch (e) {
}
function Long(low, high, unsigned) {
  this.low = low | 0;
  this.high = high | 0;
  this.unsigned = !!unsigned;
}
Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", { value: true });
function isLong(obj) {
  return (obj && obj["__isLong__"]) === true;
}
function ctz32(value) {
  var c = Math.clz32(value & -value);
  return value ? 31 - c : c;
}
Long.isLong = isLong;
var INT_CACHE = {};
var UINT_CACHE = {};
function fromInt(value, unsigned) {
  var obj, cachedObj, cache;
  if (unsigned) {
    value >>>= 0;
    if (cache = 0 <= value && value < 256) {
      cachedObj = UINT_CACHE[value];
      if (cachedObj)
        return cachedObj;
    }
    obj = fromBits(value, 0, true);
    if (cache)
      UINT_CACHE[value] = obj;
    return obj;
  } else {
    value |= 0;
    if (cache = -128 <= value && value < 128) {
      cachedObj = INT_CACHE[value];
      if (cachedObj)
        return cachedObj;
    }
    obj = fromBits(value, value < 0 ? -1 : 0, false);
    if (cache)
      INT_CACHE[value] = obj;
    return obj;
  }
}
Long.fromInt = fromInt;
function fromNumber(value, unsigned) {
  if (isNaN(value))
    return unsigned ? UZERO : ZERO;
  if (unsigned) {
    if (value < 0)
      return UZERO;
    if (value >= TWO_PWR_64_DBL)
      return MAX_UNSIGNED_VALUE;
  } else {
    if (value <= -TWO_PWR_63_DBL)
      return MIN_VALUE;
    if (value + 1 >= TWO_PWR_63_DBL)
      return MAX_VALUE;
  }
  if (value < 0)
    return fromNumber(-value, unsigned).neg();
  return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
}
Long.fromNumber = fromNumber;
function fromBits(lowBits, highBits, unsigned) {
  return new Long(lowBits, highBits, unsigned);
}
Long.fromBits = fromBits;
var pow_dbl = Math.pow;
function fromString(str, unsigned, radix) {
  if (str.length === 0)
    throw Error("empty string");
  if (typeof unsigned === "number") {
    radix = unsigned;
    unsigned = false;
  } else {
    unsigned = !!unsigned;
  }
  if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
    return unsigned ? UZERO : ZERO;
  radix = radix || 10;
  if (radix < 2 || 36 < radix)
    throw RangeError("radix");
  var p;
  if ((p = str.indexOf("-")) > 0)
    throw Error("interior hyphen");
  else if (p === 0) {
    return fromString(str.substring(1), unsigned, radix).neg();
  }
  var radixToPower = fromNumber(pow_dbl(radix, 8));
  var result = ZERO;
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = fromNumber(pow_dbl(radix, size));
      result = result.mul(power).add(fromNumber(value));
    } else {
      result = result.mul(radixToPower);
      result = result.add(fromNumber(value));
    }
  }
  result.unsigned = unsigned;
  return result;
}
Long.fromString = fromString;
function fromValue(val, unsigned) {
  if (typeof val === "number")
    return fromNumber(val, unsigned);
  if (typeof val === "string")
    return fromString(val, unsigned);
  return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
}
Long.fromValue = fromValue;
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
var ZERO = fromInt(0);
Long.ZERO = ZERO;
var UZERO = fromInt(0, true);
Long.UZERO = UZERO;
var ONE = fromInt(1);
Long.ONE = ONE;
var UONE = fromInt(1, true);
Long.UONE = UONE;
var NEG_ONE = fromInt(-1);
Long.NEG_ONE = NEG_ONE;
var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
Long.MAX_VALUE = MAX_VALUE;
var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
Long.MIN_VALUE = MIN_VALUE;
var LongPrototype = Long.prototype;
LongPrototype.toInt = function toInt() {
  return this.unsigned ? this.low >>> 0 : this.low;
};
LongPrototype.toNumber = function toNumber() {
  if (this.unsigned)
    return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
  return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};
LongPrototype.toString = function toString(radix) {
  radix = radix || 10;
  if (radix < 2 || 36 < radix)
    throw RangeError("radix");
  if (this.isZero())
    return "0";
  if (this.isNegative()) {
    if (this.eq(MIN_VALUE)) {
      var radixLong = fromNumber(radix), div2 = this.div(radixLong), rem1 = div2.mul(radixLong).sub(this);
      return div2.toString(radix) + rem1.toInt().toString(radix);
    } else
      return "-" + this.neg().toString(radix);
  }
  var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
  var result = "";
  while (true) {
    var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
    rem = remDiv;
    if (rem.isZero())
      return digits + result;
    else {
      while (digits.length < 6)
        digits = "0" + digits;
      result = "" + digits + result;
    }
  }
};
LongPrototype.getHighBits = function getHighBits() {
  return this.high;
};
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
  return this.high >>> 0;
};
LongPrototype.getLowBits = function getLowBits() {
  return this.low;
};
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
  return this.low >>> 0;
};
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
  if (this.isNegative())
    return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
  var val = this.high != 0 ? this.high : this.low;
  for (var bit = 31; bit > 0; bit--)
    if ((val & 1 << bit) != 0)
      break;
  return this.high != 0 ? bit + 33 : bit + 1;
};
LongPrototype.isZero = function isZero() {
  return this.high === 0 && this.low === 0;
};
LongPrototype.eqz = LongPrototype.isZero;
LongPrototype.isNegative = function isNegative() {
  return !this.unsigned && this.high < 0;
};
LongPrototype.isPositive = function isPositive() {
  return this.unsigned || this.high >= 0;
};
LongPrototype.isOdd = function isOdd() {
  return (this.low & 1) === 1;
};
LongPrototype.isEven = function isEven() {
  return (this.low & 1) === 0;
};
LongPrototype.equals = function equals(other) {
  if (!isLong(other))
    other = fromValue(other);
  if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
    return false;
  return this.high === other.high && this.low === other.low;
};
LongPrototype.eq = LongPrototype.equals;
LongPrototype.notEquals = function notEquals(other) {
  return !this.eq(other);
};
LongPrototype.neq = LongPrototype.notEquals;
LongPrototype.ne = LongPrototype.notEquals;
LongPrototype.lessThan = function lessThan(other) {
  return this.comp(other) < 0;
};
LongPrototype.lt = LongPrototype.lessThan;
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
  return this.comp(other) <= 0;
};
LongPrototype.lte = LongPrototype.lessThanOrEqual;
LongPrototype.le = LongPrototype.lessThanOrEqual;
LongPrototype.greaterThan = function greaterThan(other) {
  return this.comp(other) > 0;
};
LongPrototype.gt = LongPrototype.greaterThan;
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
  return this.comp(other) >= 0;
};
LongPrototype.gte = LongPrototype.greaterThanOrEqual;
LongPrototype.ge = LongPrototype.greaterThanOrEqual;
LongPrototype.compare = function compare(other) {
  if (!isLong(other))
    other = fromValue(other);
  if (this.eq(other))
    return 0;
  var thisNeg = this.isNegative(), otherNeg = other.isNegative();
  if (thisNeg && !otherNeg)
    return -1;
  if (!thisNeg && otherNeg)
    return 1;
  if (!this.unsigned)
    return this.sub(other).isNegative() ? -1 : 1;
  return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
};
LongPrototype.comp = LongPrototype.compare;
LongPrototype.negate = function negate() {
  if (!this.unsigned && this.eq(MIN_VALUE))
    return MIN_VALUE;
  return this.not().add(ONE);
};
LongPrototype.neg = LongPrototype.negate;
LongPrototype.add = function add(addend) {
  if (!isLong(addend))
    addend = fromValue(addend);
  var a48 = this.high >>> 16;
  var a32 = this.high & 65535;
  var a16 = this.low >>> 16;
  var a00 = this.low & 65535;
  var b48 = addend.high >>> 16;
  var b32 = addend.high & 65535;
  var b16 = addend.low >>> 16;
  var b00 = addend.low & 65535;
  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 + b48;
  c48 &= 65535;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
};
LongPrototype.subtract = function subtract(subtrahend) {
  if (!isLong(subtrahend))
    subtrahend = fromValue(subtrahend);
  return this.add(subtrahend.neg());
};
LongPrototype.sub = LongPrototype.subtract;
LongPrototype.multiply = function multiply(multiplier) {
  if (this.isZero())
    return this;
  if (!isLong(multiplier))
    multiplier = fromValue(multiplier);
  if (wasm) {
    var low = wasm["mul"](
      this.low,
      this.high,
      multiplier.low,
      multiplier.high
    );
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }
  if (multiplier.isZero())
    return this.unsigned ? UZERO : ZERO;
  if (this.eq(MIN_VALUE))
    return multiplier.isOdd() ? MIN_VALUE : ZERO;
  if (multiplier.eq(MIN_VALUE))
    return this.isOdd() ? MIN_VALUE : ZERO;
  if (this.isNegative()) {
    if (multiplier.isNegative())
      return this.neg().mul(multiplier.neg());
    else
      return this.neg().mul(multiplier).neg();
  } else if (multiplier.isNegative())
    return this.mul(multiplier.neg()).neg();
  if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
    return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
  var a48 = this.high >>> 16;
  var a32 = this.high & 65535;
  var a16 = this.low >>> 16;
  var a00 = this.low & 65535;
  var b48 = multiplier.high >>> 16;
  var b32 = multiplier.high & 65535;
  var b16 = multiplier.low >>> 16;
  var b00 = multiplier.low & 65535;
  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 65535;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
};
LongPrototype.mul = LongPrototype.multiply;
LongPrototype.divide = function divide(divisor) {
  if (!isLong(divisor))
    divisor = fromValue(divisor);
  if (divisor.isZero())
    throw Error("division by zero");
  if (wasm) {
    if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
      return this;
    }
    var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(
      this.low,
      this.high,
      divisor.low,
      divisor.high
    );
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }
  if (this.isZero())
    return this.unsigned ? UZERO : ZERO;
  var approx, rem, res;
  if (!this.unsigned) {
    if (this.eq(MIN_VALUE)) {
      if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
        return MIN_VALUE;
      else if (divisor.eq(MIN_VALUE))
        return ONE;
      else {
        var halfThis = this.shr(1);
        approx = halfThis.div(divisor).shl(1);
        if (approx.eq(ZERO)) {
          return divisor.isNegative() ? ONE : NEG_ONE;
        } else {
          rem = this.sub(divisor.mul(approx));
          res = approx.add(rem.div(divisor));
          return res;
        }
      }
    } else if (divisor.eq(MIN_VALUE))
      return this.unsigned ? UZERO : ZERO;
    if (this.isNegative()) {
      if (divisor.isNegative())
        return this.neg().div(divisor.neg());
      return this.neg().div(divisor).neg();
    } else if (divisor.isNegative())
      return this.div(divisor.neg()).neg();
    res = ZERO;
  } else {
    if (!divisor.unsigned)
      divisor = divisor.toUnsigned();
    if (divisor.gt(this))
      return UZERO;
    if (divisor.gt(this.shru(1)))
      return UONE;
    res = UZERO;
  }
  rem = this;
  while (rem.gte(divisor)) {
    approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
    var log22 = Math.ceil(Math.log(approx) / Math.LN2), delta = log22 <= 48 ? 1 : pow_dbl(2, log22 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
    while (approxRem.isNegative() || approxRem.gt(rem)) {
      approx -= delta;
      approxRes = fromNumber(approx, this.unsigned);
      approxRem = approxRes.mul(divisor);
    }
    if (approxRes.isZero())
      approxRes = ONE;
    res = res.add(approxRes);
    rem = rem.sub(approxRem);
  }
  return res;
};
LongPrototype.div = LongPrototype.divide;
LongPrototype.modulo = function modulo(divisor) {
  if (!isLong(divisor))
    divisor = fromValue(divisor);
  if (wasm) {
    var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(
      this.low,
      this.high,
      divisor.low,
      divisor.high
    );
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }
  return this.sub(this.div(divisor).mul(divisor));
};
LongPrototype.mod = LongPrototype.modulo;
LongPrototype.rem = LongPrototype.modulo;
LongPrototype.not = function not() {
  return fromBits(~this.low, ~this.high, this.unsigned);
};
LongPrototype.countLeadingZeros = function countLeadingZeros() {
  return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
};
LongPrototype.clz = LongPrototype.countLeadingZeros;
LongPrototype.countTrailingZeros = function countTrailingZeros() {
  return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
};
LongPrototype.ctz = LongPrototype.countTrailingZeros;
LongPrototype.and = function and(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};
LongPrototype.or = function or(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};
LongPrototype.xor = function xor(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};
LongPrototype.shiftLeft = function shiftLeft(numBits) {
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  else if (numBits < 32)
    return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
  else
    return fromBits(0, this.low << numBits - 32, this.unsigned);
};
LongPrototype.shl = LongPrototype.shiftLeft;
LongPrototype.shiftRight = function shiftRight(numBits) {
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  else if (numBits < 32)
    return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
  else
    return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
};
LongPrototype.shr = LongPrototype.shiftRight;
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  if (numBits < 32)
    return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
  if (numBits === 32)
    return fromBits(this.high, 0, this.unsigned);
  return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
};
LongPrototype.shru = LongPrototype.shiftRightUnsigned;
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
LongPrototype.rotateLeft = function rotateLeft(numBits) {
  var b;
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  if (numBits === 32)
    return fromBits(this.high, this.low, this.unsigned);
  if (numBits < 32) {
    b = 32 - numBits;
    return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
  }
  numBits -= 32;
  b = 32 - numBits;
  return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
};
LongPrototype.rotl = LongPrototype.rotateLeft;
LongPrototype.rotateRight = function rotateRight(numBits) {
  var b;
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  if (numBits === 32)
    return fromBits(this.high, this.low, this.unsigned);
  if (numBits < 32) {
    b = 32 - numBits;
    return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
  }
  numBits -= 32;
  b = 32 - numBits;
  return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
};
LongPrototype.rotr = LongPrototype.rotateRight;
LongPrototype.toSigned = function toSigned() {
  if (!this.unsigned)
    return this;
  return fromBits(this.low, this.high, false);
};
LongPrototype.toUnsigned = function toUnsigned() {
  if (this.unsigned)
    return this;
  return fromBits(this.low, this.high, true);
};
LongPrototype.toBytes = function toBytes(le) {
  return le ? this.toBytesLE() : this.toBytesBE();
};
LongPrototype.toBytesLE = function toBytesLE() {
  var hi = this.high, lo = this.low;
  return [
    lo & 255,
    lo >>> 8 & 255,
    lo >>> 16 & 255,
    lo >>> 24,
    hi & 255,
    hi >>> 8 & 255,
    hi >>> 16 & 255,
    hi >>> 24
  ];
};
LongPrototype.toBytesBE = function toBytesBE() {
  var hi = this.high, lo = this.low;
  return [
    hi >>> 24,
    hi >>> 16 & 255,
    hi >>> 8 & 255,
    hi & 255,
    lo >>> 24,
    lo >>> 16 & 255,
    lo >>> 8 & 255,
    lo & 255
  ];
};
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
  return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
  return new Long(
    bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24,
    bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24,
    unsigned
  );
};
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
  return new Long(
    bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7],
    bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3],
    unsigned
  );
};
var long_default = Long;

// src/tfjs-core/src/hash_util.ts
var Long2 = long_default || long_exports;
function hexToLong(hex) {
  return Long2.fromString(hex, true, 16);
}
var k0 = hexToLong("c3a5c85c97cb3127");
var k1 = hexToLong("b492b66fbe98f273");
var k2 = hexToLong("9ae16a3b2f90404f");
function shiftMix(val) {
  return val.xor(val.shru(47));
}
function fetch2(s, offset, numBytes) {
  const bytes = s.slice(offset, offset + numBytes);
  return Long2.fromBytes(Array.from(bytes), true, true);
}
function fetch64(s, offset) {
  return fetch2(s, offset, 8);
}
function fetch32(s, offset) {
  return fetch2(s, offset, 4);
}
function rotate64(val, shift) {
  return shift === 0 ? val : val.shru(shift).or(val.shl(64 - shift));
}
function hashLen16(u, v, mul2 = hexToLong("9ddfea08eb382d69")) {
  let a = u.xor(v).mul(mul2);
  a = a.xor(a.shru(47));
  let b = v.xor(a).mul(mul2);
  b = b.xor(b.shru(47));
  b = b.mul(mul2);
  return b;
}
function weakHashLen32WithSeeds(w, x, y, z, a, b) {
  a = a.add(w);
  b = rotate64(b.add(a).add(z), 21);
  const c = a;
  a = a.add(x);
  a = a.add(y);
  b = b.add(rotate64(a, 44));
  return [a.add(z), b.add(c)];
}
function weakHashLen32WithSeedsStr(s, offset, a, b) {
  return weakHashLen32WithSeeds(
    fetch64(s, offset),
    fetch64(s, offset + 8),
    fetch64(s, offset + 16),
    fetch64(s, offset + 24),
    a,
    b
  );
}
function hashLen0to16(s, len = s.length) {
  if (len >= 8) {
    const mul2 = k2.add(len * 2);
    const a = fetch64(s, 0).add(k2);
    const b = fetch64(s, len - 8);
    const c = rotate64(b, 37).mul(mul2).add(a);
    const d = rotate64(a, 25).add(b).mul(mul2);
    return hashLen16(c, d, mul2);
  }
  if (len >= 4) {
    const mul2 = k2.add(len * 2);
    const a = fetch32(s, 0);
    return hashLen16(a.shl(3).add(len), fetch32(s, len - 4), mul2);
  }
  if (len > 0) {
    const a = s[0];
    const b = s[len >> 1];
    const c = s[len - 1];
    const y = a + (b << 8);
    const z = len + (c << 2);
    return shiftMix(k2.mul(y).xor(k0.mul(z))).mul(k2);
  }
  return k2;
}
function hashLen17to32(s, len = s.length) {
  const mul2 = k2.add(len * 2);
  const a = fetch64(s, 0).mul(k1);
  const b = fetch64(s, 8);
  const c = fetch64(s, len - 8).mul(mul2);
  const d = fetch64(s, len - 16).mul(k2);
  return hashLen16(
    rotate64(a.add(b), 43).add(rotate64(c, 30)).add(d),
    a.add(rotate64(b.add(k2), 18)).add(c),
    mul2
  );
}
function hashLen33to64(s, len = s.length) {
  const mul2 = k2.add(len * 2);
  const a = fetch64(s, 0).mul(k2);
  const b = fetch64(s, 8);
  const c = fetch64(s, len - 8).mul(mul2);
  const d = fetch64(s, len - 16).mul(k2);
  const y = rotate64(a.add(b), 43).add(rotate64(c, 30)).add(d);
  const z = hashLen16(y, a.add(rotate64(b.add(k2), 18)).add(c), mul2);
  const e = fetch64(s, 16).mul(mul2);
  const f = fetch64(s, 24);
  const g = y.add(fetch64(s, len - 32)).mul(mul2);
  const h = z.add(fetch64(s, len - 24)).mul(mul2);
  return hashLen16(
    rotate64(e.add(f), 43).add(rotate64(g, 30)).add(h),
    e.add(rotate64(f.add(a), 18)).add(g),
    mul2
  );
}
function fingerPrint64(s, len = s.length) {
  const seed = Long2.fromNumber(81, true);
  if (len <= 32) {
    if (len <= 16) {
      return hashLen0to16(s, len);
    } else {
      return hashLen17to32(s, len);
    }
  } else if (len <= 64) {
    return hashLen33to64(s, len);
  }
  let x = seed;
  let y = seed.mul(k1).add(113);
  let z = shiftMix(y.mul(k2).add(113)).mul(k2);
  let v = [Long2.UZERO, Long2.UZERO];
  let w = [Long2.UZERO, Long2.UZERO];
  x = x.mul(k2).add(fetch64(s, 0));
  let offset = 0;
  const end = (len - 1 >> 6) * 64;
  const last64 = end + (len - 1 & 63) - 63;
  do {
    x = rotate64(x.add(y).add(v[0]).add(fetch64(s, offset + 8)), 37).mul(k1);
    y = rotate64(y.add(v[1]).add(fetch64(s, offset + 48)), 42).mul(k1);
    x = x.xor(w[1]);
    y = y.add(v[0]).add(fetch64(s, offset + 40));
    z = rotate64(z.add(w[0]), 33).mul(k1);
    v = weakHashLen32WithSeedsStr(s, offset, v[1].mul(k1), x.add(w[0]));
    w = weakHashLen32WithSeedsStr(
      s,
      offset + 32,
      z.add(w[1]),
      y.add(fetch64(s, offset + 16))
    );
    [z, x] = [x, z];
    offset += 64;
  } while (offset !== end);
  const mul2 = k1.add(z.and(255).shl(1));
  offset = last64;
  w[0] = w[0].add(len - 1 & 63);
  v[0] = v[0].add(w[0]);
  w[0] = w[0].add(v[0]);
  x = rotate64(x.add(y).add(v[0]).add(fetch64(s, offset + 8)), 37).mul(mul2);
  y = rotate64(y.add(v[1]).add(fetch64(s, offset + 48)), 42).mul(mul2);
  x = x.xor(w[1].mul(9));
  y = y.add(v[0].mul(9).add(fetch64(s, offset + 40)));
  z = rotate64(z.add(w[0]), 33).mul(mul2);
  v = weakHashLen32WithSeedsStr(s, offset, v[1].mul(mul2), x.add(w[0]));
  w = weakHashLen32WithSeedsStr(
    s,
    offset + 32,
    z.add(w[1]),
    y.add(fetch64(s, offset + 16))
  );
  [z, x] = [x, z];
  return hashLen16(
    hashLen16(v[0], w[0], mul2).add(shiftMix(y).mul(k0)).add(z),
    hashLen16(v[1], w[1], mul2).add(x),
    mul2
  );
}

// src/tfjs-core/src/util.ts
function createScalarValue(value, dtype) {
  if (dtype === "string") {
    return encodeString(value);
  }
  return toTypedArray([value], dtype);
}
function noConversionNeeded(a, dtype) {
  return a instanceof Float32Array && dtype === "float32" || a instanceof Int32Array && dtype === "int32" || a instanceof Uint8Array && dtype === "bool";
}
function toTypedArray(a, dtype) {
  if (dtype === "string") {
    throw new Error("Cannot convert a string[] to a TypedArray");
  }
  if (Array.isArray(a)) {
    a = flatten(a);
  }
  if (env().getBool("DEBUG")) {
    checkConversionForErrors(a, dtype);
  }
  if (noConversionNeeded(a, dtype)) {
    return a;
  }
  if (dtype == null || dtype === "float32" || dtype === "complex64") {
    return new Float32Array(a);
  } else if (dtype === "int32") {
    return new Int32Array(a);
  } else if (dtype === "bool") {
    const bool = new Uint8Array(a.length);
    for (let i = 0; i < bool.length; ++i) {
      if (Math.round(a[i]) !== 0) {
        bool[i] = 1;
      }
    }
    return bool;
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
}
function now() {
  return env().platform.now();
}
function fetch3(path, requestInits) {
  return env().platform.fetch(path, requestInits);
}
function encodeString(s, encoding = "utf-8") {
  encoding = encoding || "utf-8";
  return env().platform.encode(s, encoding);
}
function decodeString(bytes, encoding = "utf-8") {
  encoding = encoding || "utf-8";
  return env().platform.decode(bytes, encoding);
}

// src/tfjs-core/src/profiler.ts
var Profiler = class {
  constructor(backendTimer, logger) {
    this.backendTimer = backendTimer;
    this.logger = logger;
    if (logger == null) {
      this.logger = new Logger();
    }
  }
  profileKernel(kernelName, inputs, f) {
    let outputs;
    const holdResultWrapperFn = () => {
      outputs = f();
    };
    let timer;
    const start = now();
    if (this.backendTimer.timerAvailable()) {
      timer = this.backendTimer.time(holdResultWrapperFn);
    } else {
      holdResultWrapperFn();
      for (const output of outputs) {
        output.dataSync();
      }
      timer = Promise.resolve({ kernelMs: now() - start });
    }
    if (env().getBool("CHECK_COMPUTATION_FOR_ERRORS")) {
      for (let i = 0; i < outputs.length; i++) {
        const output = outputs[i];
        output.data().then((tensorVals) => {
          checkComputationForErrors(tensorVals, output.dtype, kernelName);
        });
      }
    }
    const kernelProfile = {
      kernelName,
      outputs,
      inputs,
      timeMs: timer.then((timing) => timing.kernelMs),
      extraInfo: timer.then(
        (timing) => timing.getExtraProfileInfo != null ? timing.getExtraProfileInfo() : ""
      )
    };
    return kernelProfile;
  }
  logKernelProfile(kernelProfile) {
    const { kernelName, outputs, timeMs, inputs, extraInfo } = kernelProfile;
    outputs.forEach((result) => {
      Promise.all([result.data(), timeMs, extraInfo]).then((valueContainer) => {
        this.logger.logKernelProfile(
          kernelName,
          result,
          valueContainer[0],
          valueContainer[1],
          inputs,
          valueContainer[2]
        );
      });
    });
  }
};
function checkComputationForErrors(vals, dtype, kernelName) {
  if (dtype !== "float32") {
    return false;
  }
  for (let i = 0; i < vals.length; i++) {
    const num = vals[i];
    if (isNaN(num) || !isFinite(num)) {
      console.warn(`Found ${num} in the result of '${kernelName}'`);
      return true;
    }
  }
  return false;
}
var Logger = class {
  logKernelProfile(name, result, vals, timeMs, inputs, extraInfo) {
    const time = typeof timeMs === "number" ? rightPad(`${timeMs}ms`, 9) : timeMs["error"];
    const paddedName = rightPad(name, 25);
    const rank = result.rank;
    const size = result.size;
    const shape = rightPad(result.shape.toString(), 14);
    let inputShapesDescription = "";
    for (const name2 in inputs) {
      const input = inputs[name2];
      if (input != null) {
        const inputShape = input.shape || result.shape;
        const inputRank = inputShape.length;
        inputShapesDescription += `${name2}: ${inputRank}D ${inputRank > 0 ? inputShape : ""} `;
      }
    }
    console.log(
      `%c${paddedName}	%c${time}	%c${rank}D ${shape}	%c${size}	%c${inputShapesDescription}	%c${extraInfo}`,
      "font-weight:bold",
      "color:red",
      "color:blue",
      "color: orange",
      "color: green",
      "color: steelblue"
    );
  }
};

// src/tfjs-core/src/tape.ts
function getFilteredNodesXToY(tape, xs, y) {
  const tensorsFromX = {};
  const nodesFromX = {};
  for (let i = 0; i < xs.length; i++) {
    tensorsFromX[xs[i].id] = true;
  }
  for (let i = 0; i < tape.length; i++) {
    const node = tape[i];
    const nodeInputs = node.inputs;
    for (const inputName in nodeInputs) {
      const input = nodeInputs[inputName];
      let anyInputFromX = false;
      for (let j = 0; j < xs.length; j++) {
        if (tensorsFromX[input.id]) {
          node.outputs.forEach((output) => tensorsFromX[output.id] = true);
          anyInputFromX = true;
          nodesFromX[node.id] = true;
          break;
        }
      }
      if (anyInputFromX) {
        break;
      }
    }
  }
  const tensorsLeadToY = {};
  tensorsLeadToY[y.id] = true;
  const nodesToY = {};
  for (let i = tape.length - 1; i >= 0; i--) {
    const node = tape[i];
    const nodeInputs = node.inputs;
    for (let j = 0; j < node.outputs.length; j++) {
      if (tensorsLeadToY[node.outputs[j].id]) {
        for (const inputName in nodeInputs) {
          tensorsLeadToY[nodeInputs[inputName].id] = true;
          nodesToY[node.id] = true;
        }
        break;
      }
    }
  }
  const filteredTape = [];
  for (let i = 0; i < tape.length; i++) {
    const node = tape[i];
    if (nodesFromX[node.id] && nodesToY[node.id]) {
      const prunedInputs = {};
      for (const inputName in node.inputs) {
        const nodeInput = node.inputs[inputName];
        if (tensorsFromX[nodeInput.id]) {
          prunedInputs[inputName] = nodeInput;
        }
      }
      const prunedNode = Object.assign({}, node);
      prunedNode.inputs = prunedInputs;
      prunedNode.outputs = node.outputs;
      filteredTape.push(prunedNode);
    }
  }
  return filteredTape;
}
function backpropagateGradients(tensorAccumulatedGradientMap, filteredTape, tidy2, add5) {
  for (let i = filteredTape.length - 1; i >= 0; i--) {
    const node = filteredTape[i];
    const dys = [];
    node.outputs.forEach((o) => {
      const gradTensor = tensorAccumulatedGradientMap[o.id];
      if (gradTensor != null) {
        dys.push(gradTensor);
      } else {
        dys.push(null);
      }
    });
    if (node.gradient == null) {
      throw new Error(
        `Cannot compute gradient: gradient function not found for ${node.kernelName}.`
      );
    }
    const inputGradients = node.gradient(dys);
    for (const inputName in node.inputs) {
      if (!(inputName in inputGradients)) {
        throw new Error(
          `Cannot backprop through input ${inputName}. Available gradients found: ${Object.keys(inputGradients)}.`
        );
      }
      const dx = tidy2(() => inputGradients[inputName]());
      if (dx.dtype !== "float32") {
        throw new Error(
          `Error in gradient for op ${node.kernelName}. The gradient of input ${inputName} must have 'float32' dtype, but has '${dx.dtype}'`
        );
      }
      const x = node.inputs[inputName];
      if (!arraysEqual(dx.shape, x.shape)) {
        throw new Error(
          `Error in gradient for op ${node.kernelName}. The gradient of input '${inputName}' has shape '${dx.shape}', which does not match the shape of the input '${x.shape}'`
        );
      }
      if (tensorAccumulatedGradientMap[x.id] == null) {
        tensorAccumulatedGradientMap[x.id] = dx;
      } else {
        const curGradient = tensorAccumulatedGradientMap[x.id];
        tensorAccumulatedGradientMap[x.id] = add5(curGradient, dx);
        curGradient.dispose();
      }
    }
  }
}

// src/tfjs-core/src/tensor_format.ts
var FORMAT_LIMIT_NUM_VALS = 20;
var FORMAT_NUM_FIRST_LAST_VALS = 3;
var FORMAT_NUM_SIG_DIGITS = 7;
function tensorToString(vals, shape, dtype, verbose) {
  const strides = computeStrides(shape);
  const padPerCol = computeMaxSizePerColumn(vals, shape, dtype, strides);
  const rank = shape.length;
  const valsLines = subTensorToString(vals, shape, dtype, strides, padPerCol);
  const lines = ["Tensor"];
  if (verbose) {
    lines.push(`  dtype: ${dtype}`);
    lines.push(`  rank: ${rank}`);
    lines.push(`  shape: [${shape}]`);
    lines.push(`  values:`);
  }
  lines.push(valsLines.map((l) => "    " + l).join("\n"));
  return lines.join("\n");
}
function computeMaxSizePerColumn(vals, shape, dtype, strides) {
  const n = sizeFromShape(shape);
  const numCols = strides[strides.length - 1];
  const padPerCol = new Array(numCols).fill(0);
  const rank = shape.length;
  const valuesOrTuples = dtype === "complex64" ? createComplexTuples(vals) : vals;
  if (rank > 1) {
    for (let row = 0; row < n / numCols; row++) {
      const offset = row * numCols;
      for (let j = 0; j < numCols; j++) {
        padPerCol[j] = Math.max(
          padPerCol[j],
          valToString(valuesOrTuples[offset + j], 0, dtype).length
        );
      }
    }
  }
  return padPerCol;
}
function valToString(val, pad3, dtype) {
  let valStr;
  if (Array.isArray(val)) {
    valStr = `${parseFloat(val[0].toFixed(FORMAT_NUM_SIG_DIGITS))} + ${parseFloat(val[1].toFixed(FORMAT_NUM_SIG_DIGITS))}j`;
  } else if (isString(val)) {
    valStr = `'${val}'`;
  } else if (dtype === "bool") {
    valStr = boolNumToString(val);
  } else {
    valStr = parseFloat(val.toFixed(FORMAT_NUM_SIG_DIGITS)).toString();
  }
  return rightPad(valStr, pad3);
}
function boolNumToString(v) {
  return v === 0 ? "false" : "true";
}
function subTensorToString(vals, shape, dtype, strides, padPerCol, isLast = true) {
  const storagePerElement = dtype === "complex64" ? 2 : 1;
  const size = shape[0];
  const rank = shape.length;
  if (rank === 0) {
    if (dtype === "complex64") {
      const complexTuple = createComplexTuples(vals);
      return [valToString(complexTuple[0], 0, dtype)];
    }
    if (dtype === "bool") {
      return [boolNumToString(vals[0])];
    }
    return [vals[0].toString()];
  }
  if (rank === 1) {
    if (size > FORMAT_LIMIT_NUM_VALS) {
      const firstValsSize = FORMAT_NUM_FIRST_LAST_VALS * storagePerElement;
      let firstVals = Array.from(
        vals.slice(0, firstValsSize)
      );
      let lastVals = Array.from(vals.slice(
        (size - FORMAT_NUM_FIRST_LAST_VALS) * storagePerElement,
        size * storagePerElement
      ));
      if (dtype === "complex64") {
        firstVals = createComplexTuples(firstVals);
        lastVals = createComplexTuples(lastVals);
      }
      return [
        "[" + firstVals.map((x, i) => valToString(x, padPerCol[i], dtype)).join(", ") + ", ..., " + lastVals.map(
          (x, i) => valToString(
            x,
            padPerCol[size - FORMAT_NUM_FIRST_LAST_VALS + i],
            dtype
          )
        ).join(", ") + "]"
      ];
    }
    const displayVals = dtype === "complex64" ? createComplexTuples(vals) : Array.from(vals);
    return [
      "[" + displayVals.map((x, i) => valToString(x, padPerCol[i], dtype)).join(", ") + "]"
    ];
  }
  const subshape = shape.slice(1);
  const substrides = strides.slice(1);
  const stride = strides[0] * storagePerElement;
  const lines = [];
  if (size > FORMAT_LIMIT_NUM_VALS) {
    for (let i = 0; i < FORMAT_NUM_FIRST_LAST_VALS; i++) {
      const start = i * stride;
      const end = start + stride;
      lines.push(...subTensorToString(
        vals.slice(start, end),
        subshape,
        dtype,
        substrides,
        padPerCol,
        false
      ));
    }
    lines.push("...");
    for (let i = size - FORMAT_NUM_FIRST_LAST_VALS; i < size; i++) {
      const start = i * stride;
      const end = start + stride;
      lines.push(...subTensorToString(
        vals.slice(start, end),
        subshape,
        dtype,
        substrides,
        padPerCol,
        i === size - 1
      ));
    }
  } else {
    for (let i = 0; i < size; i++) {
      const start = i * stride;
      const end = start + stride;
      lines.push(...subTensorToString(
        vals.slice(start, end),
        subshape,
        dtype,
        substrides,
        padPerCol,
        i === size - 1
      ));
    }
  }
  const sep = rank === 2 ? "," : "";
  lines[0] = "[" + lines[0] + sep;
  for (let i = 1; i < lines.length - 1; i++) {
    lines[i] = " " + lines[i] + sep;
  }
  let newLineSep = ",\n";
  for (let i = 2; i < rank; i++) {
    newLineSep += "\n";
  }
  lines[lines.length - 1] = " " + lines[lines.length - 1] + "]" + (isLast ? "" : newLineSep);
  return lines;
}
function createComplexTuples(vals) {
  const complexTuples = [];
  for (let i = 0; i < vals.length; i += 2) {
    complexTuples.push([vals[i], vals[i + 1]]);
  }
  return complexTuples;
}

// src/tfjs-core/src/tensor.ts
var TensorBuffer = class {
  constructor(shape, dtype, values) {
    this.dtype = dtype;
    this.shape = shape.slice();
    this.size = sizeFromShape(shape);
    if (values != null) {
      const n = values.length;
      assert(
        n === this.size,
        () => `Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`
      );
    }
    if (dtype === "complex64") {
      throw new Error(
        `complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`
      );
    }
    this.values = values || getArrayFromDType(dtype, this.size);
    this.strides = computeStrides(shape);
  }
  set(value, ...locs) {
    if (locs.length === 0) {
      locs = [0];
    }
    assert(
      locs.length === this.rank,
      () => `The number of provided coordinates (${locs.length}) must match the rank (${this.rank})`
    );
    const index = this.locToIndex(locs);
    this.values[index] = value;
  }
  get(...locs) {
    if (locs.length === 0) {
      locs = [0];
    }
    let i = 0;
    for (const loc of locs) {
      if (loc < 0 || loc >= this.shape[i]) {
        const msg = `Requested out of range element at ${locs}.   Buffer shape=${this.shape}`;
        throw new Error(msg);
      }
      i++;
    }
    let index = locs[locs.length - 1];
    for (let i2 = 0; i2 < locs.length - 1; ++i2) {
      index += this.strides[i2] * locs[i2];
    }
    return this.values[index];
  }
  locToIndex(locs) {
    if (this.rank === 0) {
      return 0;
    } else if (this.rank === 1) {
      return locs[0];
    }
    let index = locs[locs.length - 1];
    for (let i = 0; i < locs.length - 1; ++i) {
      index += this.strides[i] * locs[i];
    }
    return index;
  }
  indexToLoc(index) {
    if (this.rank === 0) {
      return [];
    } else if (this.rank === 1) {
      return [index];
    }
    const locs = new Array(this.shape.length);
    for (let i = 0; i < locs.length - 1; ++i) {
      locs[i] = Math.floor(index / this.strides[i]);
      index -= locs[i] * this.strides[i];
    }
    locs[locs.length - 1] = index;
    return locs;
  }
  get rank() {
    return this.shape.length;
  }
  toTensor() {
    return trackerFn().makeTensor(this.values, this.shape, this.dtype);
  }
};
var trackerFn = null;
var opHandler = null;
var deprecationWarningFn = null;
function setTensorTracker(fn) {
  trackerFn = fn;
}
function setOpHandler(handler) {
  opHandler = handler;
}
function setDeprecationWarningFn(fn) {
  deprecationWarningFn = fn;
}
var Tensor = class {
  constructor(shape, dtype, dataId, id) {
    this.kept = false;
    this.isDisposedInternal = false;
    this.shape = shape.slice();
    this.dtype = dtype || "float32";
    this.size = sizeFromShape(shape);
    this.strides = computeStrides(shape);
    this.dataId = dataId;
    this.id = id;
    this.rankType = this.rank < 5 ? this.rank.toString() : "higher";
  }
  get rank() {
    return this.shape.length;
  }
  async buffer() {
    const vals = await this.data();
    return opHandler.buffer(this.shape, this.dtype, vals);
  }
  bufferSync() {
    return opHandler.buffer(this.shape, this.dtype, this.dataSync());
  }
  async array() {
    const vals = await this.data();
    return toNestedArray(this.shape, vals, this.dtype === "complex64");
  }
  arraySync() {
    return toNestedArray(
      this.shape,
      this.dataSync(),
      this.dtype === "complex64"
    );
  }
  async data() {
    this.throwIfDisposed();
    const data = trackerFn().read(this.dataId);
    if (this.dtype === "string") {
      const bytes = await data;
      try {
        return bytes.map((b) => decodeString(b));
      } catch {
        throw new Error(
          "Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes()."
        );
      }
    }
    return data;
  }
  dataToGPU(options) {
    this.throwIfDisposed();
    return trackerFn().readToGPU(this.dataId, options);
  }
  dataSync() {
    this.throwIfDisposed();
    const data = trackerFn().readSync(this.dataId);
    if (this.dtype === "string") {
      try {
        return data.map((b) => decodeString(b));
      } catch {
        throw new Error(
          "Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes()."
        );
      }
    }
    return data;
  }
  async bytes() {
    this.throwIfDisposed();
    const data = await trackerFn().read(this.dataId);
    if (this.dtype === "string") {
      return data;
    } else {
      return new Uint8Array(data.buffer);
    }
  }
  dispose() {
    if (this.isDisposed) {
      return;
    }
    trackerFn().disposeTensor(this);
    this.isDisposedInternal = true;
  }
  get isDisposed() {
    return this.isDisposedInternal;
  }
  throwIfDisposed() {
    if (this.isDisposed) {
      throw new Error(`Tensor is disposed.`);
    }
  }
  print(verbose = false) {
    return opHandler.print(this, verbose);
  }
  clone() {
    this.throwIfDisposed();
    return opHandler.clone(this);
  }
  toString(verbose = false) {
    const vals = this.dataSync();
    return tensorToString(vals, this.shape, this.dtype, verbose);
  }
  cast(dtype) {
    this.throwIfDisposed();
    return opHandler.cast(this, dtype);
  }
  variable(trainable = true, name, dtype) {
    this.throwIfDisposed();
    return trackerFn().makeVariable(this, trainable, name, dtype);
  }
};
Object.defineProperty(Tensor, Symbol.hasInstance, {
  value: (instance) => {
    return !!instance && instance.data != null && instance.dataSync != null && instance.throwIfDisposed != null;
  }
});
function getGlobalTensorClass() {
  return getGlobal("Tensor", () => {
    return Tensor;
  });
}
getGlobalTensorClass();
var Variable = class extends Tensor {
  constructor(initialValue, trainable, name, tensorId) {
    super(
      initialValue.shape,
      initialValue.dtype,
      initialValue.dataId,
      tensorId
    );
    this.trainable = trainable;
    this.name = name;
  }
  assign(newValue) {
    if (newValue.dtype !== this.dtype) {
      throw new Error(
        `dtype of the new value (${newValue.dtype}) and previous value (${this.dtype}) must match`
      );
    }
    if (!arraysEqual(newValue.shape, this.shape)) {
      throw new Error(
        `shape of the new value (${newValue.shape}) and previous value (${this.shape}) must match`
      );
    }
    trackerFn().disposeTensor(this);
    this.dataId = newValue.dataId;
    trackerFn().incRef(this, null);
  }
  dispose() {
    trackerFn().disposeVariable(this);
    this.isDisposedInternal = true;
  }
};
Object.defineProperty(Variable, Symbol.hasInstance, {
  value: (instance) => {
    return instance instanceof Tensor && instance.assign != null && instance.assign instanceof Function;
  }
});

// src/tfjs-core/src/types.ts
var UpcastInt32AndMap = /* @__PURE__ */ ((UpcastInt32AndMap2) => {
  UpcastInt32AndMap2["float32"] = "float32";
  UpcastInt32AndMap2["int32"] = "int32";
  UpcastInt32AndMap2["bool"] = "int32";
  UpcastInt32AndMap2["complex64"] = "complex64";
  return UpcastInt32AndMap2;
})(UpcastInt32AndMap || {});
var UpcastBoolAndMap = /* @__PURE__ */ ((UpcastBoolAndMap2) => {
  UpcastBoolAndMap2["float32"] = "float32";
  UpcastBoolAndMap2["int32"] = "int32";
  UpcastBoolAndMap2["bool"] = "bool";
  UpcastBoolAndMap2["complex64"] = "complex64";
  return UpcastBoolAndMap2;
})(UpcastBoolAndMap || {});
var UpcastFloat32AndMap = /* @__PURE__ */ ((UpcastFloat32AndMap2) => {
  UpcastFloat32AndMap2["float32"] = "float32";
  UpcastFloat32AndMap2["int32"] = "float32";
  UpcastFloat32AndMap2["bool"] = "float32";
  UpcastFloat32AndMap2["complex64"] = "complex64";
  return UpcastFloat32AndMap2;
})(UpcastFloat32AndMap || {});
var UpcastComplex64AndMap = /* @__PURE__ */ ((UpcastComplex64AndMap2) => {
  UpcastComplex64AndMap2["float32"] = "complex64";
  UpcastComplex64AndMap2["int32"] = "complex64";
  UpcastComplex64AndMap2["bool"] = "complex64";
  UpcastComplex64AndMap2["complex64"] = "complex64";
  return UpcastComplex64AndMap2;
})(UpcastComplex64AndMap || {});
var upcastTypeMap = {
  "float32": UpcastFloat32AndMap,
  "int32": UpcastInt32AndMap,
  "bool": UpcastBoolAndMap,
  "complex64": UpcastComplex64AndMap
};
function upcastType(typeA, typeB) {
  if (typeA === "string" || typeB === "string") {
    if (typeA === "string" && typeB === "string") {
      return "string";
    }
    throw new Error(`Can not upcast ${typeA} with ${typeB}`);
  }
  return upcastTypeMap[typeA][typeB];
}

// src/tfjs-core/src/tensor_util.ts
function makeTypesMatch(a, b) {
  if (a.dtype === b.dtype) {
    return [a, b];
  }
  const dtype = upcastType(a.dtype, b.dtype);
  return [a.cast(dtype), b.cast(dtype)];
}
function assertTypesMatch(a, b) {
  assert(
    a.dtype === b.dtype,
    () => `The dtypes of the first(${a.dtype}) and second(${b.dtype}) input must match`
  );
}
function getTensorsInContainer(result) {
  const list = [];
  const seen = /* @__PURE__ */ new Set();
  walkTensorContainer(result, list, seen);
  return list;
}
function walkTensorContainer(container, list, seen) {
  if (container == null) {
    return;
  }
  if (container instanceof Tensor) {
    list.push(container);
    return;
  }
  if (!isIterable(container)) {
    return;
  }
  const iterable = container;
  for (const k in iterable) {
    const val = iterable[k];
    if (!seen.has(val)) {
      seen.add(val);
      walkTensorContainer(val, list, seen);
    }
  }
}
function isIterable(obj) {
  return Array.isArray(obj) || typeof obj === "object";
}

// src/tfjs-core/src/engine.ts
function isRegisteredKernelInvocation(kernelInvocation) {
  return kernelInvocation.kernelName != null;
}
var EngineState = class {
  constructor() {
    this.registeredVariables = {};
    this.nextTapeNodeId = 0;
    this.numBytes = 0;
    this.numTensors = 0;
    this.numStringTensors = 0;
    this.numDataBuffers = 0;
    this.gradientDepth = 0;
    this.kernelDepth = 0;
    this.scopeStack = [];
    this.numDataMovesStack = [];
    this.nextScopeId = 0;
    this.tensorInfo = /* @__PURE__ */ new WeakMap();
    this.profiling = false;
    this.activeProfile = {
      newBytes: 0,
      newTensors: 0,
      peakBytes: 0,
      kernels: [],
      result: null,
      get kernelNames() {
        return Array.from(new Set(this.kernels.map((k) => k.name)));
      }
    };
  }
  dispose() {
    for (const variableName in this.registeredVariables) {
      this.registeredVariables[variableName].dispose();
    }
  }
};
var _Engine = class {
  constructor(ENV4) {
    this.ENV = ENV4;
    this.registry = {};
    this.registryFactory = {};
    this.pendingBackendInitId = 0;
    this.state = new EngineState();
  }
  async ready() {
    if (this.pendingBackendInit != null) {
      return this.pendingBackendInit.then(() => {
      });
    }
    if (this.backendInstance != null) {
      return;
    }
    const sortedBackends = this.getSortedBackends();
    for (let i = 0; i < sortedBackends.length; i++) {
      const backendName = sortedBackends[i];
      const success = await this.initializeBackend(backendName).success;
      if (success) {
        await this.setBackend(backendName);
        return;
      }
    }
    throw new Error(
      `Could not initialize any backends, all backend initializations failed.`
    );
  }
  get backend() {
    if (this.pendingBackendInit != null) {
      throw new Error(
        `Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`
      );
    }
    if (this.backendInstance == null) {
      const { name, asyncInit } = this.initializeBackendsAndReturnBest();
      if (asyncInit) {
        throw new Error(
          `The highest priority backend '${name}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`
        );
      }
      this.setBackend(name);
    }
    return this.backendInstance;
  }
  backendNames() {
    return Object.keys(this.registryFactory);
  }
  findBackend(backendName) {
    if (!(backendName in this.registry)) {
      if (backendName in this.registryFactory) {
        const { asyncInit } = this.initializeBackend(backendName);
        if (asyncInit) {
          return null;
        }
      } else {
        return null;
      }
    }
    return this.registry[backendName];
  }
  findBackendFactory(backendName) {
    if (!(backendName in this.registryFactory)) {
      return null;
    }
    return this.registryFactory[backendName].factory;
  }
  registerBackend(backendName, factory, priority = 1) {
    if (backendName in this.registryFactory) {
      warn(
        `${backendName} backend was already registered. Reusing existing backend factory.`
      );
      return false;
    }
    this.registryFactory[backendName] = { factory, priority };
    return true;
  }
  async setBackend(backendName) {
    if (this.registryFactory[backendName] == null) {
      throw new Error(`Backend name '${backendName}' not found in registry`);
    }
    this.backendName = backendName;
    if (this.registry[backendName] == null) {
      this.backendInstance = null;
      const { success, asyncInit } = this.initializeBackend(backendName);
      const result = asyncInit ? await success : success;
      if (!result) {
        return false;
      }
    }
    this.backendInstance = this.registry[backendName];
    this.setupRegisteredKernels();
    this.profiler = new Profiler(this.backendInstance);
    return true;
  }
  setupRegisteredKernels() {
    const kernels = getKernelsForBackend(this.backendName);
    kernels.forEach((kernel) => {
      if (kernel.setupFunc != null) {
        kernel.setupFunc(this.backendInstance);
      }
    });
  }
  disposeRegisteredKernels(backendName) {
    const kernels = getKernelsForBackend(backendName);
    kernels.forEach((kernel) => {
      if (kernel.disposeFunc != null) {
        kernel.disposeFunc(this.registry[backendName]);
      }
    });
  }
  initializeBackend(backendName) {
    const registryFactoryEntry = this.registryFactory[backendName];
    if (registryFactoryEntry == null) {
      throw new Error(
        `Cannot initialize backend ${backendName}, no registration found.`
      );
    }
    try {
      const backend = registryFactoryEntry.factory();
      if (backend && !(backend instanceof KernelBackend) && typeof backend.then === "function") {
        const promiseId = ++this.pendingBackendInitId;
        const success = backend.then((backendInstance) => {
          if (promiseId < this.pendingBackendInitId) {
            return false;
          }
          this.registry[backendName] = backendInstance;
          this.pendingBackendInit = null;
          return true;
        }).catch((err2) => {
          if (promiseId < this.pendingBackendInitId) {
            return false;
          }
          this.pendingBackendInit = null;
          warn(`Initialization of backend ${backendName} failed`);
          warn(err2.stack || err2.message);
          return false;
        });
        this.pendingBackendInit = success;
        return { success, asyncInit: true };
      } else {
        this.registry[backendName] = backend;
        return { success: true, asyncInit: false };
      }
    } catch (err2) {
      warn(`Initialization of backend ${backendName} failed`);
      warn(err2.stack || err2.message);
      return { success: false, asyncInit: false };
    }
  }
  removeBackend(backendName) {
    if (!(backendName in this.registryFactory)) {
      throw new Error(`${backendName} backend not found in registry`);
    }
    if (this.backendName === backendName && this.pendingBackendInit != null) {
      this.pendingBackendInitId++;
    }
    if (backendName in this.registry) {
      this.disposeRegisteredKernels(backendName);
      this.registry[backendName].dispose();
      delete this.registry[backendName];
    }
    delete this.registryFactory[backendName];
    if (this.backendName === backendName) {
      this.pendingBackendInit = null;
      this.backendName = null;
      this.backendInstance = null;
    }
  }
  getSortedBackends() {
    if (Object.keys(this.registryFactory).length === 0) {
      throw new Error("No backend found in registry.");
    }
    return Object.keys(this.registryFactory).sort((a, b) => {
      return this.registryFactory[b].priority - this.registryFactory[a].priority;
    });
  }
  initializeBackendsAndReturnBest() {
    const sortedBackends = this.getSortedBackends();
    for (let i = 0; i < sortedBackends.length; i++) {
      const backendName = sortedBackends[i];
      const { success, asyncInit } = this.initializeBackend(backendName);
      if (asyncInit || success) {
        return { name: backendName, asyncInit };
      }
    }
    throw new Error(
      `Could not initialize any backends, all backend initializations failed.`
    );
  }
  moveData(backend, dataId) {
    const info = this.state.tensorInfo.get(dataId);
    const srcBackend = info.backend;
    const values = this.readSync(dataId);
    const refCount = srcBackend.refCount(dataId);
    srcBackend.disposeData(dataId, true);
    info.backend = backend;
    backend.move(dataId, values, info.shape, info.dtype, refCount);
    if (this.shouldCheckForMemLeaks()) {
      this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++;
    }
  }
  tidy(nameOrFn, fn) {
    let name = null;
    if (fn == null) {
      if (typeof nameOrFn !== "function") {
        throw new Error("Please provide a function to tidy()");
      }
      fn = nameOrFn;
    } else {
      if (typeof nameOrFn !== "string" && !(nameOrFn instanceof String)) {
        throw new Error(
          "When calling with two arguments, the first argument to tidy() must be a string"
        );
      }
      if (typeof fn !== "function") {
        throw new Error(
          "When calling with two arguments, the 2nd argument to tidy() must be a function"
        );
      }
      name = nameOrFn;
    }
    let result;
    return this.scopedRun(
      () => this.startScope(name),
      () => this.endScope(result),
      () => {
        result = fn();
        if (result instanceof Promise) {
          console.error("Cannot return a Promise inside of tidy.");
        }
        return result;
      }
    );
  }
  scopedRun(start, end, f) {
    start();
    try {
      const res = f();
      end();
      return res;
    } catch (ex) {
      end();
      throw ex;
    }
  }
  nextTensorId() {
    return _Engine.nextTensorId++;
  }
  nextVariableId() {
    return _Engine.nextVariableId++;
  }
  clone(x) {
    const y = ENGINE.runKernel(Identity, { x });
    const inputs = { x };
    const grad2 = (dy) => ({
      x: () => {
        const dtype = "float32";
        const gradInputs = { x: dy };
        const attrs = { dtype };
        return ENGINE.runKernel(
          Cast,
          gradInputs,
          attrs
        );
      }
    });
    const saved = [];
    this.addTapeNode(this.state.activeScope.name, inputs, [y], grad2, saved, {});
    return y;
  }
  runKernel(kernelName, inputs, attrs) {
    if (this.backendName == null) {
      this.backend;
    }
    const hasKernel = getKernel(kernelName, this.backendName) != null;
    if (!hasKernel) {
      throw new Error(`Kernel '${kernelName}' not registered for backend '${this.backendName}'`);
    }
    return this.runKernelFunc({ kernelName, inputs, attrs });
  }
  shouldCheckForMemLeaks() {
    return this.ENV.getBool("IS_TEST");
  }
  checkKernelForMemLeak(kernelName, numDataIdsBefore, outInfos) {
    const numDataIdsAfter = this.backend.numDataIds();
    let numOutputDataIds = 0;
    outInfos.forEach((info) => {
      numOutputDataIds += info.dtype === "complex64" ? 3 : 1;
    });
    const numMoves = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1];
    const dataIdsLeaked = numDataIdsAfter - numDataIdsBefore - numOutputDataIds - numMoves;
    if (dataIdsLeaked > 0) {
      throw new Error(
        `Backend '${this.backendName}' has an internal memory leak (${dataIdsLeaked} data ids) after running '${kernelName}'`
      );
    }
  }
  runKernelFunc(kernelParams) {
    let outputs;
    let saved = [];
    const isTapeOn = this.isTapeOn();
    const startingBytecount = this.state.numBytes;
    const startingNumTensors = this.state.numTensors;
    if (this.shouldCheckForMemLeaks()) {
      this.state.numDataMovesStack.push(0);
    }
    let kernelFunc3;
    if (this.backendName == null) {
      this.backend;
    }
    let out;
    const kernelOrScopeName = isRegisteredKernelInvocation(kernelParams) ? kernelParams.kernelName : this.state.activeScope != null ? this.state.activeScope.name : "";
    if (isRegisteredKernelInvocation(kernelParams)) {
      const { kernelName, inputs: inputs2, attrs: attrs2 } = kernelParams;
      if (this.backendName == null) {
        this.backend;
      }
      const kernel = getKernel(kernelName, this.backendName);
      assert(
        kernel != null,
        () => `Cannot find registered kernel '${kernelName}' for backend '${this.backendName}'`
      );
      kernelFunc3 = () => {
        const numDataIdsBefore = this.backend.numDataIds();
        out = kernel.kernelFunc({ inputs: inputs2, attrs: attrs2, backend: this.backend });
        const outInfos = Array.isArray(out) ? out : [out];
        if (this.shouldCheckForMemLeaks()) {
          this.checkKernelForMemLeak(kernelName, numDataIdsBefore, outInfos);
        }
        const outTensors = outInfos.map((outInfo) => {
          if (outInfo.rank != null) {
            return outInfo;
          }
          return this.makeTensorFromTensorInfo(outInfo);
        });
        if (isTapeOn) {
          const tensorsToSave = this.getTensorsForGradient(kernelName, inputs2, outTensors);
          saved = this.saveTensorsForBackwardMode(tensorsToSave);
        }
        return outTensors;
      };
    } else {
      const { forwardFunc } = kernelParams;
      const saveFunc = (tensors) => {
        if (!isTapeOn) {
          return;
        }
        saved = tensors.map((tensor2) => this.keep(this.clone(tensor2)));
      };
      kernelFunc3 = () => {
        const numDataIdsBefore = this.backend.numDataIds();
        out = this.tidy(() => forwardFunc(this.backend, saveFunc));
        const outs = Array.isArray(out) ? out : [out];
        if (this.shouldCheckForMemLeaks()) {
          this.checkKernelForMemLeak(kernelOrScopeName, numDataIdsBefore, outs);
        }
        return outs;
      };
    }
    const { inputs, attrs } = kernelParams;
    const backwardsFunc = isRegisteredKernelInvocation(kernelParams) ? null : kernelParams.backwardsFunc;
    let kernelProfile;
    this.scopedRun(
      () => this.state.kernelDepth++,
      () => this.state.kernelDepth--,
      () => {
        if (!this.ENV.getBool("DEBUG") && !this.state.profiling) {
          outputs = kernelFunc3();
        } else {
          kernelProfile = this.profiler.profileKernel(
            kernelOrScopeName,
            inputs,
            () => kernelFunc3()
          );
          if (this.ENV.getBool("DEBUG")) {
            this.profiler.logKernelProfile(kernelProfile);
          }
          outputs = kernelProfile.outputs;
        }
      }
    );
    if (isTapeOn) {
      this.addTapeNode(
        kernelOrScopeName,
        inputs,
        outputs,
        backwardsFunc,
        saved,
        attrs
      );
    }
    if (this.state.profiling) {
      this.state.activeProfile.kernels.push({
        name: kernelOrScopeName,
        bytesAdded: this.state.numBytes - startingBytecount,
        totalBytesSnapshot: this.state.numBytes,
        tensorsAdded: this.state.numTensors - startingNumTensors,
        totalTensorsSnapshot: this.state.numTensors,
        inputShapes: Object.keys(inputs).map(
          (key) => inputs[key] != null ? inputs[key].shape : null
        ),
        outputShapes: outputs.map((item) => item.shape),
        kernelTimeMs: kernelProfile.timeMs,
        extraInfo: kernelProfile.extraInfo
      });
    }
    return Array.isArray(out) ? outputs : outputs[0];
  }
  saveTensorsForBackwardMode(tensors) {
    const saved = tensors.map((tensor2) => this.keep(this.clone(tensor2)));
    return saved;
  }
  getTensorsForGradient(kernelName, inputs, outputs) {
    const gradConfig = getGradient(kernelName);
    if (gradConfig != null) {
      const inputsToSave = gradConfig.inputsToSave || [];
      const outputsToSave = gradConfig.outputsToSave || [];
      let inputTensorsToSave;
      if (gradConfig.saveAllInputs) {
        assert(
          Array.isArray(inputs),
          () => "saveAllInputs is true, expected inputs to be an array."
        );
        inputTensorsToSave = Object.keys(inputs).map((key) => inputs[key]);
      } else {
        inputTensorsToSave = inputsToSave.map((inputName) => inputs[inputName]);
      }
      const outputTensorsToSave = outputs.filter((_, i) => outputsToSave[i]);
      return inputTensorsToSave.concat(outputTensorsToSave);
    }
    return [];
  }
  makeTensor(values, shape, dtype, backend) {
    if (values == null) {
      throw new Error("Values passed to engine.makeTensor() are null");
    }
    dtype = dtype || "float32";
    backend = backend || this.backend;
    let backendVals = values;
    if (dtype === "string" && isString(values[0])) {
      backendVals = values.map((d) => encodeString(d));
    }
    const dataId = backend.write(backendVals, shape, dtype);
    const t = new Tensor(shape, dtype, dataId, this.nextTensorId());
    this.trackTensor(t, backend);
    if (dtype === "string") {
      const info = this.state.tensorInfo.get(dataId);
      const newBytes = bytesFromStringArray(backendVals);
      this.state.numBytes += newBytes - info.bytes;
      info.bytes = newBytes;
    }
    return t;
  }
  makeTensorFromDataId(dataId, shape, dtype, backend) {
    dtype = dtype || "float32";
    const tensorInfo = { dataId, shape, dtype };
    return this.makeTensorFromTensorInfo(tensorInfo, backend);
  }
  makeTensorFromTensorInfo(tensorInfo, backend) {
    const { dataId, shape, dtype } = tensorInfo;
    const t = new Tensor(shape, dtype, dataId, this.nextTensorId());
    this.trackTensor(t, backend);
    return t;
  }
  makeVariable(initialValue, trainable = true, name, dtype) {
    name = name || this.nextVariableId().toString();
    if (dtype != null && dtype !== initialValue.dtype) {
      initialValue = initialValue.cast(dtype);
    }
    const v = new Variable(initialValue, trainable, name, this.nextTensorId());
    if (this.state.registeredVariables[v.name] != null) {
      throw new Error(`Variable with name ${v.name} was already registered`);
    }
    this.state.registeredVariables[v.name] = v;
    this.incRef(v, this.backend);
    return v;
  }
  trackTensor(a, backend) {
    this.state.numTensors++;
    if (a.dtype === "string") {
      this.state.numStringTensors++;
    }
    let bytes = 0;
    if (a.dtype !== "complex64" && a.dtype !== "string") {
      bytes = a.size * bytesPerElement(a.dtype);
    }
    this.state.numBytes += bytes;
    if (!this.state.tensorInfo.has(a.dataId)) {
      this.state.numDataBuffers++;
      this.state.tensorInfo.set(a.dataId, {
        backend: backend || this.backend,
        dtype: a.dtype,
        shape: a.shape,
        bytes
      });
    }
    if (!(a instanceof Variable)) {
      this.track(a);
    }
  }
  incRef(a, backend) {
    this.trackTensor(a, backend);
    this.backend.incRef(a.dataId);
  }
  removeDataId(dataId, backend) {
    if (this.state.tensorInfo.has(dataId) && this.state.tensorInfo.get(dataId).backend === backend) {
      this.state.tensorInfo.delete(dataId);
      this.state.numDataBuffers--;
    }
  }
  disposeTensor(a) {
    if (!this.state.tensorInfo.has(a.dataId)) {
      return;
    }
    const info = this.state.tensorInfo.get(a.dataId);
    this.state.numTensors--;
    if (a.dtype === "string") {
      this.state.numStringTensors--;
      this.state.numBytes -= info.bytes;
    }
    if (a.dtype !== "complex64" && a.dtype !== "string") {
      const bytes = a.size * bytesPerElement(a.dtype);
      this.state.numBytes -= bytes;
    }
    if (info.backend.disposeData(a.dataId)) {
      this.removeDataId(a.dataId, info.backend);
    }
  }
  disposeVariables() {
    for (const varName in this.state.registeredVariables) {
      const v = this.state.registeredVariables[varName];
      this.disposeVariable(v);
    }
  }
  disposeVariable(v) {
    this.disposeTensor(v);
    if (this.state.registeredVariables[v.name] != null) {
      delete this.state.registeredVariables[v.name];
    }
  }
  memory() {
    const info = this.backend.memory();
    info.numTensors = this.state.numTensors;
    info.numDataBuffers = this.state.numDataBuffers;
    info.numBytes = this.state.numBytes;
    if (this.state.numStringTensors > 0) {
      info.unreliable = true;
      if (info.reasons == null) {
        info.reasons = [];
      }
      info.reasons.push(
        "Memory usage by string tensors is approximate (2 bytes per character)"
      );
    }
    return info;
  }
  async profile(query) {
    this.state.profiling = true;
    const startBytes = this.state.numBytes;
    const startNumTensors = this.state.numTensors;
    this.state.activeProfile.kernels = [];
    this.state.activeProfile.result = await query();
    this.state.profiling = false;
    this.state.activeProfile.peakBytes = Math.max(
      ...this.state.activeProfile.kernels.map((d) => d.totalBytesSnapshot)
    );
    this.state.activeProfile.newBytes = this.state.numBytes - startBytes;
    this.state.activeProfile.newTensors = this.state.numTensors - startNumTensors;
    for (const kernel of this.state.activeProfile.kernels) {
      kernel.kernelTimeMs = await kernel.kernelTimeMs;
      kernel.extraInfo = await kernel.extraInfo;
    }
    return this.state.activeProfile;
  }
  isTapeOn() {
    return this.state.gradientDepth > 0 && this.state.kernelDepth === 0;
  }
  addTapeNode(kernelName, inputs, outputs, gradientsFunc, saved, attrs) {
    const tapeNode = { id: this.state.nextTapeNodeId++, kernelName, inputs, outputs, saved };
    const gradConfig = getGradient(kernelName);
    if (gradConfig != null) {
      gradientsFunc = gradConfig.gradFunc;
    }
    if (gradientsFunc != null) {
      tapeNode.gradient = (dys) => {
        dys = dys.map((dy, i) => {
          if (dy == null) {
            const output = outputs[i];
            const vals = makeZerosTypedArray(output.size, output.dtype);
            return this.makeTensor(vals, output.shape, output.dtype);
          }
          return dy;
        });
        return gradientsFunc(dys.length > 1 ? dys : dys[0], saved, attrs);
      };
    }
    this.state.activeTape.push(tapeNode);
  }
  keep(result) {
    result.kept = true;
    return result;
  }
  startTape() {
    if (this.state.gradientDepth === 0) {
      this.state.activeTape = [];
    }
    this.state.gradientDepth++;
  }
  endTape() {
    this.state.gradientDepth--;
  }
  startScope(name) {
    const scopeInfo = {
      track: [],
      name: "unnamed scope",
      id: this.state.nextScopeId++
    };
    if (name) {
      scopeInfo.name = name;
    }
    this.state.scopeStack.push(scopeInfo);
    this.state.activeScope = scopeInfo;
  }
  endScope(result) {
    const tensorsToTrackInParent = getTensorsInContainer(result);
    const tensorsToTrackInParentSet = new Set(tensorsToTrackInParent.map((t) => t.id));
    for (let i = 0; i < this.state.activeScope.track.length; i++) {
      const tensor2 = this.state.activeScope.track[i];
      if (!tensor2.kept && !tensorsToTrackInParentSet.has(tensor2.id)) {
        tensor2.dispose();
      }
    }
    const oldScope = this.state.scopeStack.pop();
    this.state.activeScope = this.state.scopeStack.length === 0 ? null : this.state.scopeStack[this.state.scopeStack.length - 1];
    tensorsToTrackInParent.forEach((tensor2) => {
      if (!tensor2.kept && tensor2.scopeId === oldScope.id) {
        this.track(tensor2);
      }
    });
  }
  gradients(f, xs, dy, allowNoGradients = false) {
    assert(
      xs.length > 0,
      () => "gradients() received an empty list of xs."
    );
    if (dy != null && dy.dtype !== "float32") {
      throw new Error(`dy must have 'float32' dtype, but has '${dy.dtype}'`);
    }
    const y = this.scopedRun(
      () => this.startTape(),
      () => this.endTape(),
      () => this.tidy("forward", f)
    );
    assert(
      y instanceof Tensor,
      () => "The result y returned by f() must be a tensor."
    );
    const filteredTape = getFilteredNodesXToY(this.state.activeTape, xs, y);
    if (!allowNoGradients && filteredTape.length === 0 && xs.length > 0) {
      throw new Error(
        "Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y."
      );
    }
    return this.tidy("backward", () => {
      const accumulatedGradientMap = {};
      accumulatedGradientMap[y.id] = dy == null ? ones(y.shape) : dy;
      backpropagateGradients(
        accumulatedGradientMap,
        filteredTape,
        (f2) => this.tidy(f2),
        add2
      );
      const grads2 = xs.map((x) => accumulatedGradientMap[x.id]);
      if (this.state.gradientDepth === 0) {
        this.state.activeTape.forEach((node) => {
          for (const tensor2 of node.saved) {
            tensor2.dispose();
          }
        });
        this.state.activeTape = null;
      }
      return { value: y, grads: grads2 };
    });
  }
  customGrad(f) {
    assert(
      isFunction(f),
      () => "The f passed in customGrad(f) must be a function."
    );
    return (...inputs) => {
      assert(
        inputs.every((t) => t instanceof Tensor),
        () => "The args passed in customGrad(f)(x1, x2,...) must all be tensors"
      );
      let res;
      const inputMap = {};
      inputs.forEach((input, i) => {
        inputMap[i] = input;
      });
      const forwardFunc = (_, save) => {
        res = f(...[...inputs, save]);
        assert(
          res.value instanceof Tensor,
          () => "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"
        );
        assert(
          isFunction(res.gradFunc),
          () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."
        );
        return res.value;
      };
      const backwardsFunc = (dy, saved) => {
        const gradRes = res.gradFunc(dy, saved);
        const grads2 = Array.isArray(gradRes) ? gradRes : [gradRes];
        assert(
          grads2.length === inputs.length,
          () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."
        );
        assert(
          grads2.every((t) => t instanceof Tensor),
          () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."
        );
        const gradMap = {};
        grads2.forEach((grad2, i) => {
          gradMap[i] = () => grad2;
        });
        return gradMap;
      };
      return this.runKernelFunc({
        forwardFunc,
        backwardsFunc,
        inputs: inputMap
      });
    };
  }
  readSync(dataId) {
    const info = this.state.tensorInfo.get(dataId);
    return info.backend.readSync(dataId);
  }
  read(dataId) {
    const info = this.state.tensorInfo.get(dataId);
    return info.backend.read(dataId);
  }
  readToGPU(dataId, options) {
    const info = this.state.tensorInfo.get(dataId);
    return info.backend.readToGPU(dataId, options);
  }
  async time(query) {
    const start = now();
    const timingInfo = await this.backend.time(query);
    timingInfo.wallMs = now() - start;
    return timingInfo;
  }
  track(result) {
    if (this.state.activeScope != null) {
      result.scopeId = this.state.activeScope.id;
      this.state.activeScope.track.push(result);
    }
    return result;
  }
  get registeredVariables() {
    return this.state.registeredVariables;
  }
  reset() {
    this.pendingBackendInitId++;
    this.state.dispose();
    this.ENV.reset();
    this.state = new EngineState();
    for (const backendName in this.registry) {
      this.disposeRegisteredKernels(backendName);
      this.registry[backendName].dispose();
      delete this.registry[backendName];
    }
    this.backendName = null;
    this.backendInstance = null;
    this.pendingBackendInit = null;
  }
};
var Engine = _Engine;
Engine.nextTensorId = 0;
Engine.nextVariableId = 0;
function ones(shape) {
  const values = makeOnesTypedArray(sizeFromShape(shape), "float32");
  return ENGINE.makeTensor(values, shape, "float32");
}
function getOrMakeEngine() {
  const ns = getGlobalNamespace();
  if (ns._tfengine == null) {
    const environment = new Environment(ns);
    ns._tfengine = new Engine(environment);
  }
  setEnvironmentGlobal(ns._tfengine.ENV);
  setTensorTracker(() => ns._tfengine);
  return ns._tfengine;
}
var ENGINE = getOrMakeEngine();
function add2(a, b) {
  const inputs = { a, b };
  return ENGINE.runKernel(Add, inputs);
}

// src/tfjs-core/src/device_util.ts
function isBrowser() {
  return typeof window !== "undefined" && window.document != null || typeof WorkerGlobalScope !== "undefined";
}

// src/tfjs-core/src/flags.ts
var ENV2 = env();
ENV2.registerFlag("DEBUG", () => false, (debugValue) => {
  if (debugValue) {
    console.warn(
      "Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance."
    );
  }
});
ENV2.registerFlag("IS_BROWSER", () => isBrowser());
ENV2.registerFlag(
  "IS_NODE",
  () => typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined"
);
ENV2.registerFlag(
  "IS_CHROME",
  () => typeof navigator !== "undefined" && navigator != null && navigator.userAgent != null && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
);
ENV2.registerFlag("PROD", () => false);
ENV2.registerFlag(
  "TENSORLIKE_CHECK_SHAPE_CONSISTENCY",
  () => ENV2.getBool("DEBUG")
);
ENV2.registerFlag("DEPRECATION_WARNINGS_ENABLED", () => true);
ENV2.registerFlag("IS_TEST", () => false);
ENV2.registerFlag("CHECK_COMPUTATION_FOR_ERRORS", () => true);
ENV2.registerFlag("WRAP_TO_IMAGEBITMAP", () => false);
ENV2.registerFlag("ENGINE_COMPILE_ONLY", () => false);
ENV2.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU", () => false);

// src/tfjs-core/src/tensor_util_env.ts
function inferShape(val, dtype) {
  let firstElem = val;
  if (isTypedArray(val)) {
    return dtype === "string" ? [] : [val.length];
  }
  if (!Array.isArray(val)) {
    return [];
  }
  const shape = [];
  while (Array.isArray(firstElem) || isTypedArray(firstElem) && dtype !== "string") {
    shape.push(firstElem.length);
    firstElem = firstElem[0];
  }
  if (Array.isArray(val) && env().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")) {
    deepAssertShapeConsistency(val, shape, []);
  }
  return shape;
}
function deepAssertShapeConsistency(val, shape, indices) {
  indices = indices || [];
  if (!Array.isArray(val) && !isTypedArray(val)) {
    assert(
      shape.length === 0,
      () => `Element arr[${indices.join("][")}] is a primitive, but should be an array/TypedArray of ${shape[0]} elements`
    );
    return;
  }
  assert(
    shape.length > 0,
    () => `Element arr[${indices.join("][")}] should be a primitive, but is an array of ${val.length} elements`
  );
  assert(
    val.length === shape[0],
    () => `Element arr[${indices.join("][")}] should have ${shape[0]} elements, but has ${val.length} elements`
  );
  const subShape = shape.slice(1);
  for (let i = 0; i < val.length; ++i) {
    deepAssertShapeConsistency(val[i], subShape, indices.concat(i));
  }
}
function assertDtype(expectedDtype, actualDType, argName, functionName) {
  if (expectedDtype === "string_or_numeric") {
    return;
  }
  if (expectedDtype == null) {
    throw new Error(`Expected dtype cannot be null.`);
  }
  if (expectedDtype !== "numeric" && expectedDtype !== actualDType || expectedDtype === "numeric" && actualDType === "string") {
    throw new Error(
      `Argument '${argName}' passed to '${functionName}' must be ${expectedDtype} tensor, but got ${actualDType} tensor`
    );
  }
}
function convertToTensor(x, argName, functionName, parseAsDtype = "numeric") {
  if (x instanceof Tensor) {
    assertDtype(parseAsDtype, x.dtype, argName, functionName);
    return x;
  }
  let inferredDtype = inferDtype(x);
  if (inferredDtype !== "string" && ["bool", "int32", "float32"].indexOf(parseAsDtype) >= 0) {
    inferredDtype = parseAsDtype;
  }
  assertDtype(parseAsDtype, inferredDtype, argName, functionName);
  if (x == null || !isTypedArray(x) && !Array.isArray(x) && typeof x !== "number" && typeof x !== "boolean" && typeof x !== "string") {
    const type = x == null ? "null" : x.constructor.name;
    throw new Error(
      `Argument '${argName}' passed to '${functionName}' must be a Tensor or TensorLike, but got '${type}'`
    );
  }
  const inferredShape = inferShape(x, inferredDtype);
  if (!isTypedArray(x) && !Array.isArray(x)) {
    x = [x];
  }
  const skipTypedArray = true;
  const values = inferredDtype !== "string" ? toTypedArray(x, inferredDtype) : flatten(x, [], skipTypedArray);
  return ENGINE.makeTensor(values, inferredShape, inferredDtype);
}
function convertToTensorArray(arg, argName, functionName, parseAsDtype = "numeric") {
  if (!Array.isArray(arg)) {
    throw new Error(
      `Argument ${argName} passed to ${functionName} must be a \`Tensor[]\` or \`TensorLike[]\``
    );
  }
  const tensors = arg;
  return tensors.map(
    (t, i) => convertToTensor(t, `${argName}[${i}]`, functionName, parseAsDtype)
  );
}

// src/tfjs-core/src/ops/operation.ts
var OP_SCOPE_SUFFIX = "__op";
function op(f) {
  const keys = Object.keys(f);
  if (keys.length !== 1) {
    throw new Error(
      `Please provide an object with a single key (operation name) mapping to a function. Got an object with ${keys.length} keys.`
    );
  }
  let opName = keys[0];
  const fn = f[opName];
  if (opName.endsWith("_")) {
    opName = opName.substring(0, opName.length - 1);
  }
  opName = opName + OP_SCOPE_SUFFIX;
  const f2 = (...args) => {
    ENGINE.startScope(opName);
    try {
      const result = fn(...args);
      if (isPromise(result)) {
        console.error("Cannot return a Promise inside of tidy.");
      }
      ENGINE.endScope(result);
      return result;
    } catch (ex) {
      ENGINE.endScope(null);
      throw ex;
    }
  };
  Object.defineProperty(f2, "name", { value: opName, configurable: true });
  return f2;
}

// src/tfjs-core/src/ops/complex.ts
function complex_(real3, imag2) {
  const $real = convertToTensor(real3, "real", "complex");
  const $imag = convertToTensor(imag2, "imag", "complex");
  assertShapesMatch(
    $real.shape,
    $imag.shape,
    `real and imag shapes, ${$real.shape} and ${$imag.shape}, must match in call to tf.complex().`
  );
  const inputs = { real: $real, imag: $imag };
  return ENGINE.runKernel(Complex, inputs);
}
var complex = op({ complex_ });

// src/tfjs-core/src/ops/tensor_ops_util.ts
function makeTensor(values, shape, inferredShape, dtype) {
  if (dtype == null) {
    dtype = inferDtype(values);
  }
  if (dtype === "complex64") {
    throw new Error(
      `Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`
    );
  }
  if (!isTypedArray(values) && !Array.isArray(values) && typeof values !== "number" && typeof values !== "boolean" && typeof values !== "string") {
    throw new Error(
      "values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray"
    );
  }
  if (shape != null) {
    assertNonNegativeIntegerDimensions(shape);
    const providedSize = sizeFromShape(shape);
    const inferredSize = sizeFromShape(inferredShape);
    assert(
      providedSize === inferredSize,
      () => `Based on the provided shape, [${shape}], the tensor should have ${providedSize} values but has ${inferredSize}`
    );
    for (let i = 0; i < inferredShape.length; ++i) {
      const inferred = inferredShape[i];
      const flatDimsDontMatch = i === inferredShape.length - 1 ? inferred !== sizeFromShape(shape.slice(i)) : true;
      assert(
        inferredShape[i] === shape[i] || !flatDimsDontMatch,
        () => `Error creating a new Tensor. Inferred shape (${inferredShape}) does not match the provided shape (${shape}). `
      );
    }
  }
  if (!isTypedArray(values) && !Array.isArray(values)) {
    values = [values];
  }
  shape = shape || inferredShape;
  values = dtype !== "string" ? toTypedArray(values, dtype) : flatten(values, [], true);
  return ENGINE.makeTensor(values, shape, dtype);
}

// src/tfjs-core/src/ops/tensor.ts
function tensor(values, shape, dtype) {
  const inferredShape = inferShape(values, dtype);
  return makeTensor(values, shape, inferredShape, dtype);
}

// src/tfjs-core/src/io/io_utils.ts
var useNodeBuffer = typeof Buffer !== "undefined" && (typeof Blob === "undefined" || typeof atob === "undefined" || typeof btoa === "undefined");
function stringByteLength(str) {
  if (useNodeBuffer) {
    return Buffer.byteLength(str);
  }
  return new Blob([str]).size;
}
function arrayBufferToBase64String(buffer2) {
  if (useNodeBuffer) {
    return Buffer.from(buffer2).toString("base64");
  }
  const buf = new Uint8Array(buffer2);
  let s = "";
  for (let i = 0, l = buf.length; i < l; i++) {
    s += String.fromCharCode(buf[i]);
  }
  return btoa(s);
}
function base64StringToArrayBuffer(str) {
  if (useNodeBuffer) {
    const buf = Buffer.from(str, "base64");
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  }
  const s = atob(str);
  const buffer2 = new Uint8Array(s.length);
  for (let i = 0; i < s.length; ++i) {
    buffer2.set([s.charCodeAt(i)], i);
  }
  return buffer2.buffer;
}
function concatenateArrayBuffers(buffers) {
  if (buffers.length === 1) {
    return buffers[0];
  }
  let totalByteLength = 0;
  buffers.forEach((buffer2) => {
    totalByteLength += buffer2.byteLength;
  });
  const temp = new Uint8Array(totalByteLength);
  let offset = 0;
  buffers.forEach((buffer2) => {
    temp.set(new Uint8Array(buffer2), offset);
    offset += buffer2.byteLength;
  });
  return temp.buffer;
}
function getModelJSONForModelArtifacts(artifacts, manifest) {
  const result = {
    modelTopology: artifacts.modelTopology,
    format: artifacts.format,
    generatedBy: artifacts.generatedBy,
    convertedBy: artifacts.convertedBy,
    weightsManifest: manifest
  };
  if (artifacts.signature != null) {
    result.signature = artifacts.signature;
  }
  if (artifacts.userDefinedMetadata != null) {
    result.userDefinedMetadata = artifacts.userDefinedMetadata;
  }
  if (artifacts.modelInitializer != null) {
    result.modelInitializer = artifacts.modelInitializer;
  }
  if (artifacts.trainingConfig != null) {
    result.trainingConfig = artifacts.trainingConfig;
  }
  return result;
}
async function getModelArtifactsForJSON(modelJSON, loadWeights2) {
  const modelArtifacts = {
    modelTopology: modelJSON.modelTopology,
    format: modelJSON.format,
    generatedBy: modelJSON.generatedBy,
    convertedBy: modelJSON.convertedBy
  };
  if (modelJSON.trainingConfig != null) {
    modelArtifacts.trainingConfig = modelJSON.trainingConfig;
  }
  if (modelJSON.weightsManifest != null) {
    const [weightSpecs, weightData] = await loadWeights2(modelJSON.weightsManifest);
    modelArtifacts.weightSpecs = weightSpecs;
    modelArtifacts.weightData = weightData;
  }
  if (modelJSON.signature != null) {
    modelArtifacts.signature = modelJSON.signature;
  }
  if (modelJSON.userDefinedMetadata != null) {
    modelArtifacts.userDefinedMetadata = modelJSON.userDefinedMetadata;
  }
  if (modelJSON.modelInitializer != null) {
    modelArtifacts.modelInitializer = modelJSON.modelInitializer;
  }
  return modelArtifacts;
}
function getModelArtifactsInfoForJSON(modelArtifacts) {
  if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
    throw new Error("Expected JSON model topology, received ArrayBuffer.");
  }
  return {
    dateSaved: new Date(),
    modelTopologyType: "JSON",
    modelTopologyBytes: modelArtifacts.modelTopology == null ? 0 : stringByteLength(JSON.stringify(modelArtifacts.modelTopology)),
    weightSpecsBytes: modelArtifacts.weightSpecs == null ? 0 : stringByteLength(JSON.stringify(modelArtifacts.weightSpecs)),
    weightDataBytes: modelArtifacts.weightData == null ? 0 : modelArtifacts.weightData.byteLength
  };
}

// src/tfjs-core/src/io/router_registry.ts
var IORouterRegistry = class {
  constructor() {
    this.saveRouters = [];
    this.loadRouters = [];
  }
  static getInstance() {
    if (IORouterRegistry.instance == null) {
      IORouterRegistry.instance = new IORouterRegistry();
    }
    return IORouterRegistry.instance;
  }
  static registerSaveRouter(saveRouter) {
    IORouterRegistry.getInstance().saveRouters.push(saveRouter);
  }
  static registerLoadRouter(loadRouter) {
    IORouterRegistry.getInstance().loadRouters.push(loadRouter);
  }
  static getSaveHandlers(url) {
    return IORouterRegistry.getHandlers(url, "save");
  }
  static getLoadHandlers(url, loadOptions) {
    return IORouterRegistry.getHandlers(url, "load", loadOptions);
  }
  static getHandlers(url, handlerType, loadOptions) {
    const validHandlers = [];
    const routers = handlerType === "load" ? IORouterRegistry.getInstance().loadRouters : IORouterRegistry.getInstance().saveRouters;
    routers.forEach((router) => {
      const handler = router(url, loadOptions);
      if (handler !== null) {
        validHandlers.push(handler);
      }
    });
    return validHandlers;
  }
};

// src/tfjs-core/src/io/indexed_db.ts
var DATABASE_NAME = "tensorflowjs";
var DATABASE_VERSION = 1;
var MODEL_STORE_NAME = "models_store";
var INFO_STORE_NAME = "model_info_store";
function getIndexedDBFactory() {
  if (!env().getBool("IS_BROWSER")) {
    throw new Error(
      "Failed to obtain IndexedDB factory because the current environmentis not a web browser."
    );
  }
  const theWindow = typeof window === "undefined" ? self : window;
  const factory = theWindow.indexedDB || theWindow.mozIndexedDB || theWindow.webkitIndexedDB || theWindow.msIndexedDB || theWindow.shimIndexedDB;
  if (factory == null) {
    throw new Error(
      "The current browser does not appear to support IndexedDB."
    );
  }
  return factory;
}
function setUpDatabase(openRequest) {
  const db = openRequest.result;
  db.createObjectStore(MODEL_STORE_NAME, { keyPath: "modelPath" });
  db.createObjectStore(INFO_STORE_NAME, { keyPath: "modelPath" });
}
var BrowserIndexedDB = class {
  constructor(modelPath) {
    this.indexedDB = getIndexedDBFactory();
    if (modelPath == null || !modelPath) {
      throw new Error(
        "For IndexedDB, modelPath must not be null, undefined or empty."
      );
    }
    this.modelPath = modelPath;
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error(
        "BrowserLocalStorage.save() does not support saving model topology in binary formats yet."
      );
    }
    return this.databaseAction(this.modelPath, modelArtifacts);
  }
  async load() {
    return this.databaseAction(this.modelPath);
  }
  databaseAction(modelPath, modelArtifacts) {
    return new Promise((resolve, reject) => {
      const openRequest = this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
      openRequest.onupgradeneeded = () => setUpDatabase(openRequest);
      openRequest.onsuccess = () => {
        const db = openRequest.result;
        if (modelArtifacts == null) {
          const modelTx = db.transaction(MODEL_STORE_NAME, "readonly");
          const modelStore = modelTx.objectStore(MODEL_STORE_NAME);
          const getRequest = modelStore.get(this.modelPath);
          getRequest.onsuccess = () => {
            if (getRequest.result == null) {
              db.close();
              return reject(new Error(
                `Cannot find model with path '${this.modelPath}' in IndexedDB.`
              ));
            } else {
              resolve(getRequest.result.modelArtifacts);
            }
          };
          getRequest.onerror = (error) => {
            db.close();
            return reject(getRequest.error);
          };
          modelTx.oncomplete = () => db.close();
        } else {
          const modelArtifactsInfo = getModelArtifactsInfoForJSON(modelArtifacts);
          const infoTx = db.transaction(INFO_STORE_NAME, "readwrite");
          let infoStore = infoTx.objectStore(INFO_STORE_NAME);
          const putInfoRequest = infoStore.put({ modelPath: this.modelPath, modelArtifactsInfo });
          let modelTx;
          putInfoRequest.onsuccess = () => {
            modelTx = db.transaction(MODEL_STORE_NAME, "readwrite");
            const modelStore = modelTx.objectStore(MODEL_STORE_NAME);
            const putModelRequest = modelStore.put({
              modelPath: this.modelPath,
              modelArtifacts,
              modelArtifactsInfo
            });
            putModelRequest.onsuccess = () => resolve({ modelArtifactsInfo });
            putModelRequest.onerror = (error) => {
              infoStore = infoTx.objectStore(INFO_STORE_NAME);
              const deleteInfoRequest = infoStore.delete(this.modelPath);
              deleteInfoRequest.onsuccess = () => {
                db.close();
                return reject(putModelRequest.error);
              };
              deleteInfoRequest.onerror = (error2) => {
                db.close();
                return reject(putModelRequest.error);
              };
            };
          };
          putInfoRequest.onerror = (error) => {
            db.close();
            return reject(putInfoRequest.error);
          };
          infoTx.oncomplete = () => {
            if (modelTx == null) {
              db.close();
            } else {
              modelTx.oncomplete = () => db.close();
            }
          };
        }
      };
      openRequest.onerror = (error) => reject(openRequest.error);
    });
  }
};
BrowserIndexedDB.URL_SCHEME = "indexeddb://";
var indexedDBRouter = (url) => {
  if (!env().getBool("IS_BROWSER")) {
    return null;
  } else {
    if (!Array.isArray(url) && url.startsWith(BrowserIndexedDB.URL_SCHEME)) {
      return browserIndexedDB(url.slice(BrowserIndexedDB.URL_SCHEME.length));
    } else {
      return null;
    }
  }
};
IORouterRegistry.registerSaveRouter(indexedDBRouter);
IORouterRegistry.registerLoadRouter(indexedDBRouter);
function browserIndexedDB(modelPath) {
  return new BrowserIndexedDB(modelPath);
}
function maybeStripScheme(key) {
  return key.startsWith(BrowserIndexedDB.URL_SCHEME) ? key.slice(BrowserIndexedDB.URL_SCHEME.length) : key;
}
var BrowserIndexedDBManager = class {
  constructor() {
    this.indexedDB = getIndexedDBFactory();
  }
  async listModels() {
    return new Promise(
      (resolve, reject) => {
        const openRequest = this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
        openRequest.onupgradeneeded = () => setUpDatabase(openRequest);
        openRequest.onsuccess = () => {
          const db = openRequest.result;
          const tx = db.transaction(INFO_STORE_NAME, "readonly");
          const store = tx.objectStore(INFO_STORE_NAME);
          const getAllInfoRequest = store.getAll();
          getAllInfoRequest.onsuccess = () => {
            const out = {};
            for (const item of getAllInfoRequest.result) {
              out[item.modelPath] = item.modelArtifactsInfo;
            }
            resolve(out);
          };
          getAllInfoRequest.onerror = (error) => {
            db.close();
            return reject(getAllInfoRequest.error);
          };
          tx.oncomplete = () => db.close();
        };
        openRequest.onerror = (error) => reject(openRequest.error);
      }
    );
  }
  async removeModel(path) {
    path = maybeStripScheme(path);
    return new Promise((resolve, reject) => {
      const openRequest = this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
      openRequest.onupgradeneeded = () => setUpDatabase(openRequest);
      openRequest.onsuccess = () => {
        const db = openRequest.result;
        const infoTx = db.transaction(INFO_STORE_NAME, "readwrite");
        const infoStore = infoTx.objectStore(INFO_STORE_NAME);
        const getInfoRequest = infoStore.get(path);
        let modelTx;
        getInfoRequest.onsuccess = () => {
          if (getInfoRequest.result == null) {
            db.close();
            return reject(new Error(
              `Cannot find model with path '${path}' in IndexedDB.`
            ));
          } else {
            const deleteInfoRequest = infoStore.delete(path);
            const deleteModelData = () => {
              modelTx = db.transaction(MODEL_STORE_NAME, "readwrite");
              const modelStore = modelTx.objectStore(MODEL_STORE_NAME);
              const deleteModelRequest = modelStore.delete(path);
              deleteModelRequest.onsuccess = () => resolve(getInfoRequest.result.modelArtifactsInfo);
              deleteModelRequest.onerror = (error) => reject(getInfoRequest.error);
            };
            deleteInfoRequest.onsuccess = deleteModelData;
            deleteInfoRequest.onerror = (error) => {
              deleteModelData();
              db.close();
              return reject(getInfoRequest.error);
            };
          }
        };
        getInfoRequest.onerror = (error) => {
          db.close();
          return reject(getInfoRequest.error);
        };
        infoTx.oncomplete = () => {
          if (modelTx == null) {
            db.close();
          } else {
            modelTx.oncomplete = () => db.close();
          }
        };
      };
      openRequest.onerror = (error) => reject(openRequest.error);
    });
  }
};

// src/tfjs-core/src/io/local_storage.ts
var PATH_SEPARATOR = "/";
var PATH_PREFIX = "tensorflowjs_models";
var INFO_SUFFIX = "info";
var MODEL_TOPOLOGY_SUFFIX = "model_topology";
var WEIGHT_SPECS_SUFFIX = "weight_specs";
var WEIGHT_DATA_SUFFIX = "weight_data";
var MODEL_METADATA_SUFFIX = "model_metadata";
function getModelKeys(path) {
  return {
    info: [PATH_PREFIX, path, INFO_SUFFIX].join(PATH_SEPARATOR),
    topology: [PATH_PREFIX, path, MODEL_TOPOLOGY_SUFFIX].join(PATH_SEPARATOR),
    weightSpecs: [PATH_PREFIX, path, WEIGHT_SPECS_SUFFIX].join(PATH_SEPARATOR),
    weightData: [PATH_PREFIX, path, WEIGHT_DATA_SUFFIX].join(PATH_SEPARATOR),
    modelMetadata: [PATH_PREFIX, path, MODEL_METADATA_SUFFIX].join(PATH_SEPARATOR)
  };
}
function removeItems(keys) {
  for (const key of Object.values(keys)) {
    window.localStorage.removeItem(key);
  }
}
function getModelPathFromKey(key) {
  const items = key.split(PATH_SEPARATOR);
  if (items.length < 3) {
    throw new Error(`Invalid key format: ${key}`);
  }
  return items.slice(1, items.length - 1).join(PATH_SEPARATOR);
}
function maybeStripScheme2(key) {
  return key.startsWith(BrowserLocalStorage.URL_SCHEME) ? key.slice(BrowserLocalStorage.URL_SCHEME.length) : key;
}
var BrowserLocalStorage = class {
  constructor(modelPath) {
    if (!env().getBool("IS_BROWSER") || typeof window === "undefined" || typeof window.localStorage === "undefined") {
      throw new Error(
        "The current environment does not support local storage."
      );
    }
    this.LS = window.localStorage;
    if (modelPath == null || !modelPath) {
      throw new Error(
        "For local storage, modelPath must not be null, undefined or empty."
      );
    }
    this.modelPath = modelPath;
    this.keys = getModelKeys(this.modelPath);
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error(
        "BrowserLocalStorage.save() does not support saving model topology in binary formats yet."
      );
    } else {
      const topology = JSON.stringify(modelArtifacts.modelTopology);
      const weightSpecs = JSON.stringify(modelArtifacts.weightSpecs);
      const modelArtifactsInfo = getModelArtifactsInfoForJSON(modelArtifacts);
      try {
        this.LS.setItem(this.keys.info, JSON.stringify(modelArtifactsInfo));
        this.LS.setItem(this.keys.topology, topology);
        this.LS.setItem(this.keys.weightSpecs, weightSpecs);
        this.LS.setItem(
          this.keys.weightData,
          arrayBufferToBase64String(modelArtifacts.weightData)
        );
        const metadata = {
          format: modelArtifacts.format,
          generatedBy: modelArtifacts.generatedBy,
          convertedBy: modelArtifacts.convertedBy,
          signature: modelArtifacts.signature != null ? modelArtifacts.signature : void 0,
          userDefinedMetadata: modelArtifacts.userDefinedMetadata != null ? modelArtifacts.userDefinedMetadata : void 0,
          modelInitializer: modelArtifacts.modelInitializer != null ? modelArtifacts.modelInitializer : void 0,
          trainingConfig: modelArtifacts.trainingConfig != null ? modelArtifacts.trainingConfig : void 0
        };
        this.LS.setItem(this.keys.modelMetadata, JSON.stringify(metadata));
        return { modelArtifactsInfo };
      } catch (err2) {
        removeItems(this.keys);
        throw new Error(
          `Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${modelArtifactsInfo.modelTopologyBytes}, weightSpecsBytes=${modelArtifactsInfo.weightSpecsBytes}, weightDataBytes=${modelArtifactsInfo.weightDataBytes}.`
        );
      }
    }
  }
  async load() {
    const info = JSON.parse(this.LS.getItem(this.keys.info));
    if (info == null) {
      throw new Error(
        `In local storage, there is no model with name '${this.modelPath}'`
      );
    }
    if (info.modelTopologyType !== "JSON") {
      throw new Error(
        "BrowserLocalStorage does not support loading non-JSON model topology yet."
      );
    }
    const out = {};
    const topology = JSON.parse(this.LS.getItem(this.keys.topology));
    if (topology == null) {
      throw new Error(
        `In local storage, the topology of model '${this.modelPath}' is missing.`
      );
    }
    out.modelTopology = topology;
    const weightSpecs = JSON.parse(this.LS.getItem(this.keys.weightSpecs));
    if (weightSpecs == null) {
      throw new Error(
        `In local storage, the weight specs of model '${this.modelPath}' are missing.`
      );
    }
    out.weightSpecs = weightSpecs;
    const metadataString = this.LS.getItem(this.keys.modelMetadata);
    if (metadataString != null) {
      const metadata = JSON.parse(metadataString);
      out.format = metadata.format;
      out.generatedBy = metadata.generatedBy;
      out.convertedBy = metadata.convertedBy;
      if (metadata.signature != null) {
        out.signature = metadata.signature;
      }
      if (metadata.userDefinedMetadata != null) {
        out.userDefinedMetadata = metadata.userDefinedMetadata;
      }
      if (metadata.modelInitializer != null) {
        out.modelInitializer = metadata.modelInitializer;
      }
      if (metadata.trainingConfig != null) {
        out.trainingConfig = metadata.trainingConfig;
      }
    }
    const weightDataBase64 = this.LS.getItem(this.keys.weightData);
    if (weightDataBase64 == null) {
      throw new Error(
        `In local storage, the binary weight values of model '${this.modelPath}' are missing.`
      );
    }
    out.weightData = base64StringToArrayBuffer(weightDataBase64);
    return out;
  }
};
BrowserLocalStorage.URL_SCHEME = "localstorage://";
var localStorageRouter = (url) => {
  if (!env().getBool("IS_BROWSER")) {
    return null;
  } else {
    if (!Array.isArray(url) && url.startsWith(BrowserLocalStorage.URL_SCHEME)) {
      return browserLocalStorage(
        url.slice(BrowserLocalStorage.URL_SCHEME.length)
      );
    } else {
      return null;
    }
  }
};
IORouterRegistry.registerSaveRouter(localStorageRouter);
IORouterRegistry.registerLoadRouter(localStorageRouter);
function browserLocalStorage(modelPath) {
  return new BrowserLocalStorage(modelPath);
}
var BrowserLocalStorageManager = class {
  constructor() {
    assert(
      env().getBool("IS_BROWSER"),
      () => "Current environment is not a web browser"
    );
    assert(
      typeof window === "undefined" || typeof window.localStorage !== "undefined",
      () => "Current browser does not appear to support localStorage"
    );
    this.LS = window.localStorage;
  }
  async listModels() {
    const out = {};
    const prefix = PATH_PREFIX + PATH_SEPARATOR;
    const suffix = PATH_SEPARATOR + INFO_SUFFIX;
    for (let i = 0; i < this.LS.length; ++i) {
      const key = this.LS.key(i);
      if (key.startsWith(prefix) && key.endsWith(suffix)) {
        const modelPath = getModelPathFromKey(key);
        out[modelPath] = JSON.parse(this.LS.getItem(key));
      }
    }
    return out;
  }
  async removeModel(path) {
    path = maybeStripScheme2(path);
    const keys = getModelKeys(path);
    if (this.LS.getItem(keys.info) == null) {
      throw new Error(`Cannot find model at path '${path}'`);
    }
    const info = JSON.parse(this.LS.getItem(keys.info));
    removeItems(keys);
    return info;
  }
};

// src/tfjs-core/src/io/model_management.ts
var URL_SCHEME_SUFFIX = "://";
var ModelStoreManagerRegistry = class {
  constructor() {
    this.managers = {};
  }
  static getInstance() {
    if (ModelStoreManagerRegistry.instance == null) {
      ModelStoreManagerRegistry.instance = new ModelStoreManagerRegistry();
    }
    return ModelStoreManagerRegistry.instance;
  }
  static registerManager(scheme, manager) {
    assert(scheme != null, () => "scheme must not be undefined or null.");
    if (scheme.endsWith(URL_SCHEME_SUFFIX)) {
      scheme = scheme.slice(0, scheme.indexOf(URL_SCHEME_SUFFIX));
    }
    assert(scheme.length > 0, () => "scheme must not be an empty string.");
    const registry = ModelStoreManagerRegistry.getInstance();
    assert(
      registry.managers[scheme] == null,
      () => `A model store manager is already registered for scheme '${scheme}'.`
    );
    registry.managers[scheme] = manager;
  }
  static getManager(scheme) {
    const manager = ModelStoreManagerRegistry.getInstance().managers[scheme];
    if (manager == null) {
      throw new Error(`Cannot find model manager for scheme '${scheme}'`);
    }
    return manager;
  }
  static getSchemes() {
    return Object.keys(ModelStoreManagerRegistry.getInstance().managers);
  }
};

// src/tfjs-core/src/platforms/platform_browser.ts
var PlatformBrowser = class {
  fetch(path, init2) {
    return fetch(path, init2);
  }
  now() {
    return performance.now();
  }
  encode(text, encoding) {
    if (encoding !== "utf-8" && encoding !== "utf8") {
      throw new Error(
        `Browser's encoder only supports utf-8, but got ${encoding}`
      );
    }
    if (this.textEncoder == null) {
      this.textEncoder = new TextEncoder();
    }
    return this.textEncoder.encode(text);
  }
  decode(bytes, encoding) {
    return new TextDecoder(encoding).decode(bytes);
  }
};
if (env().get("IS_BROWSER")) {
  env().setPlatform("browser", new PlatformBrowser());
  try {
    ModelStoreManagerRegistry.registerManager(
      BrowserLocalStorage.URL_SCHEME,
      new BrowserLocalStorageManager()
    );
  } catch (err2) {
  }
  try {
    ModelStoreManagerRegistry.registerManager(
      BrowserIndexedDB.URL_SCHEME,
      new BrowserIndexedDBManager()
    );
  } catch (err2) {
  }
}

// src/tfjs-core/src/platforms/platform_node.ts
var getNodeFetch = {
  importFetch: () => (init_src(), __toCommonJS(src_exports))
};
var systemFetch;
var PlatformNode = class {
  constructor() {
    this.util = require_util();
    this.textEncoder = new this.util.TextEncoder();
  }
  fetch(path, requestInits) {
    if (env().global.fetch != null) {
      return env().global.fetch(path, requestInits);
    }
    if (systemFetch == null) {
      systemFetch = getNodeFetch.importFetch();
    }
    return systemFetch(path, requestInits);
  }
  now() {
    const time = process.hrtime();
    return time[0] * 1e3 + time[1] / 1e6;
  }
  encode(text, encoding) {
    if (encoding !== "utf-8" && encoding !== "utf8") {
      throw new Error(
        `Node built-in encoder only supports utf-8, but got ${encoding}`
      );
    }
    return this.textEncoder.encode(text);
  }
  decode(bytes, encoding) {
    if (bytes.length === 0) {
      return "";
    }
    return new this.util.TextDecoder(encoding).decode(bytes);
  }
};
if (env().get("IS_NODE") && !env().get("IS_BROWSER")) {
  env().setPlatform("node", new PlatformNode());
}

// src/tfjs-core/src/ops/buffer.ts
function buffer(shape, dtype = "float32", values) {
  dtype = dtype || "float32";
  assertNonNegativeIntegerDimensions(shape);
  return new TensorBuffer(shape, dtype, values);
}

// src/tfjs-core/src/ops/cast.ts
function cast_(x, dtype) {
  const $x = convertToTensor(x, "x", "cast");
  if (!isValidDtype(dtype)) {
    throw new Error(`Failed to cast to unknown dtype ${dtype}`);
  }
  if (dtype === "string" && $x.dtype !== "string" || dtype !== "string" && $x.dtype === "string") {
    throw new Error("Only strings can be casted to strings");
  }
  const inputs = { x: $x };
  const attrs = { dtype };
  return ENGINE.runKernel(
    Cast,
    inputs,
    attrs
  );
}
var cast = op({ cast_ });

// src/tfjs-core/src/ops/clone.ts
function clone_(x) {
  const $x = convertToTensor(x, "x", "clone", "string_or_numeric");
  const inputs = { x: $x };
  return ENGINE.runKernel(Identity, inputs);
}
var clone = op({ clone_ });

// src/tfjs-core/src/ops/print.ts
function print(x, verbose = false) {
  console.log(x.toString(verbose));
}

// src/tfjs-core/src/base_side_effects.ts
getOrMakeEngine();
var opHandler2 = {
  buffer,
  cast,
  clone,
  print
};
setOpHandler(opHandler2);

// src/tfjs-core/src/io/browser_files.ts
var DEFAULT_FILE_NAME_PREFIX = "model";
var DEFAULT_JSON_EXTENSION_NAME = ".json";
var DEFAULT_WEIGHT_DATA_EXTENSION_NAME = ".weights.bin";
function defer(f) {
  return new Promise((resolve) => setTimeout(resolve)).then(f);
}
var _BrowserDownloads = class {
  constructor(fileNamePrefix) {
    if (!env().getBool("IS_BROWSER")) {
      throw new Error(
        "browserDownloads() cannot proceed because the current environment is not a browser."
      );
    }
    if (fileNamePrefix.startsWith(_BrowserDownloads.URL_SCHEME)) {
      fileNamePrefix = fileNamePrefix.slice(_BrowserDownloads.URL_SCHEME.length);
    }
    if (fileNamePrefix == null || fileNamePrefix.length === 0) {
      fileNamePrefix = DEFAULT_FILE_NAME_PREFIX;
    }
    this.modelJsonFileName = fileNamePrefix + DEFAULT_JSON_EXTENSION_NAME;
    this.weightDataFileName = fileNamePrefix + DEFAULT_WEIGHT_DATA_EXTENSION_NAME;
  }
  async save(modelArtifacts) {
    if (typeof document === "undefined") {
      throw new Error(
        "Browser downloads are not supported in this environment since `document` is not present"
      );
    }
    const weightsURL = window.URL.createObjectURL(new Blob(
      [modelArtifacts.weightData],
      { type: "application/octet-stream" }
    ));
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error(
        "BrowserDownloads.save() does not support saving model topology in binary formats yet."
      );
    } else {
      const weightsManifest = [{
        paths: ["./" + this.weightDataFileName],
        weights: modelArtifacts.weightSpecs
      }];
      const modelJSON = getModelJSONForModelArtifacts(modelArtifacts, weightsManifest);
      const modelJsonURL = window.URL.createObjectURL(
        new Blob([JSON.stringify(modelJSON)], { type: "application/json" })
      );
      const jsonAnchor = this.modelJsonAnchor == null ? document.createElement("a") : this.modelJsonAnchor;
      jsonAnchor.download = this.modelJsonFileName;
      jsonAnchor.href = modelJsonURL;
      await defer(() => jsonAnchor.dispatchEvent(new MouseEvent("click")));
      if (modelArtifacts.weightData != null) {
        const weightDataAnchor = this.weightDataAnchor == null ? document.createElement("a") : this.weightDataAnchor;
        weightDataAnchor.download = this.weightDataFileName;
        weightDataAnchor.href = weightsURL;
        await defer(
          () => weightDataAnchor.dispatchEvent(new MouseEvent("click"))
        );
      }
      return { modelArtifactsInfo: getModelArtifactsInfoForJSON(modelArtifacts) };
    }
  }
};
var BrowserDownloads = _BrowserDownloads;
BrowserDownloads.URL_SCHEME = "downloads://";
var browserDownloadsRouter = (url) => {
  if (!env().getBool("IS_BROWSER")) {
    return null;
  } else {
    if (!Array.isArray(url) && url.startsWith(BrowserDownloads.URL_SCHEME)) {
      return browserDownloads(url.slice(BrowserDownloads.URL_SCHEME.length));
    } else {
      return null;
    }
  }
};
IORouterRegistry.registerSaveRouter(browserDownloadsRouter);
function browserDownloads(fileNamePrefix = "model") {
  return new BrowserDownloads(fileNamePrefix);
}

// src/tfjs-core/src/io/progress.ts
function monitorPromisesProgress(promises, onProgress, startFraction, endFraction) {
  checkPromises(promises);
  startFraction = startFraction == null ? 0 : startFraction;
  endFraction = endFraction == null ? 1 : endFraction;
  checkFraction(startFraction, endFraction);
  let resolvedPromise = 0;
  const registerMonitor = (promise) => {
    promise.then((value) => {
      const fraction = startFraction + ++resolvedPromise / promises.length * (endFraction - startFraction);
      onProgress(fraction);
      return value;
    });
    return promise;
  };
  function checkPromises(promises2) {
    assert(
      promises2 != null && Array.isArray(promises2) && promises2.length > 0,
      () => "promises must be a none empty array"
    );
  }
  function checkFraction(startFraction2, endFraction2) {
    assert(
      startFraction2 >= 0 && startFraction2 <= 1,
      () => `Progress fraction must be in range [0, 1], but got startFraction ${startFraction2}`
    );
    assert(
      endFraction2 >= 0 && endFraction2 <= 1,
      () => `Progress fraction must be in range [0, 1], but got endFraction ${endFraction2}`
    );
    assert(
      endFraction2 >= startFraction2,
      () => `startFraction must be no more than endFraction, but got startFraction ${startFraction2} and endFraction ${endFraction2}`
    );
  }
  return Promise.all(promises.map(registerMonitor));
}

// src/tfjs-core/src/io/weights_loader.ts
async function loadWeightsAsArrayBuffer(fetchURLs, loadOptions) {
  if (loadOptions == null) {
    loadOptions = {};
  }
  const fetchFunc = loadOptions.fetchFunc == null ? env().platform.fetch : loadOptions.fetchFunc;
  const requests = fetchURLs.map(
    (fetchURL) => fetchFunc(fetchURL, loadOptions.requestInit, { isBinary: true })
  );
  const fetchStartFraction = 0;
  const fetchEndFraction = 0.5;
  const responses = loadOptions.onProgress == null ? await Promise.all(requests) : await monitorPromisesProgress(
    requests,
    loadOptions.onProgress,
    fetchStartFraction,
    fetchEndFraction
  );
  const bufferPromises = responses.map((response) => response.arrayBuffer());
  const bufferStartFraction = 0.5;
  const bufferEndFraction = 1;
  const buffers = loadOptions.onProgress == null ? await Promise.all(bufferPromises) : await monitorPromisesProgress(
    bufferPromises,
    loadOptions.onProgress,
    bufferStartFraction,
    bufferEndFraction
  );
  return buffers;
}

// src/tfjs-core/src/io/http.ts
var OCTET_STREAM_MIME_TYPE = "application/octet-stream";
var JSON_TYPE = "application/json";
var HTTPRequest = class {
  constructor(path, loadOptions) {
    this.DEFAULT_METHOD = "POST";
    if (loadOptions == null) {
      loadOptions = {};
    }
    this.weightPathPrefix = loadOptions.weightPathPrefix;
    this.onProgress = loadOptions.onProgress;
    this.weightUrlConverter = loadOptions.weightUrlConverter;
    if (loadOptions.fetchFunc != null) {
      assert(
        typeof loadOptions.fetchFunc === "function",
        () => "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"
      );
      this.fetch = loadOptions.fetchFunc;
    } else {
      this.fetch = env().platform.fetch;
    }
    assert(
      path != null && path.length > 0,
      () => "URL path for http must not be null, undefined or empty."
    );
    if (Array.isArray(path)) {
      assert(
        path.length === 2,
        () => `URL paths for http must have a length of 2, (actual length is ${path.length}).`
      );
    }
    this.path = path;
    if (loadOptions.requestInit != null && loadOptions.requestInit.body != null) {
      throw new Error(
        "requestInit is expected to have no pre-existing body, but has one."
      );
    }
    this.requestInit = loadOptions.requestInit || {};
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error(
        "BrowserHTTPRequest.save() does not support saving model topology in binary formats yet."
      );
    }
    const init2 = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit);
    init2.body = new FormData();
    const weightsManifest = [{
      paths: ["./model.weights.bin"],
      weights: modelArtifacts.weightSpecs
    }];
    const modelTopologyAndWeightManifest = getModelJSONForModelArtifacts(modelArtifacts, weightsManifest);
    init2.body.append(
      "model.json",
      new Blob(
        [JSON.stringify(modelTopologyAndWeightManifest)],
        { type: JSON_TYPE }
      ),
      "model.json"
    );
    if (modelArtifacts.weightData != null) {
      init2.body.append(
        "model.weights.bin",
        new Blob([modelArtifacts.weightData], { type: OCTET_STREAM_MIME_TYPE }),
        "model.weights.bin"
      );
    }
    const response = await this.fetch(this.path, init2);
    if (response.ok) {
      return {
        modelArtifactsInfo: getModelArtifactsInfoForJSON(modelArtifacts),
        responses: [response]
      };
    } else {
      throw new Error(
        `BrowserHTTPRequest.save() failed due to HTTP response status ${response.status}.`
      );
    }
  }
  async load() {
    const modelConfigRequest = await this.fetch(this.path, this.requestInit);
    if (!modelConfigRequest.ok) {
      throw new Error(
        `Request to ${this.path} failed with status code ${modelConfigRequest.status}. Please verify this URL points to the model JSON of the model to load.`
      );
    }
    let modelJSON;
    try {
      modelJSON = await modelConfigRequest.json();
    } catch (e) {
      let message = `Failed to parse model JSON of response from ${this.path}.`;
      if (this.path.endsWith(".pb")) {
        message += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.";
      } else {
        message += " Please make sure the server is serving valid JSON for this request.";
      }
      throw new Error(message);
    }
    const modelTopology = modelJSON.modelTopology;
    const weightsManifest = modelJSON.weightsManifest;
    if (modelTopology == null && weightsManifest == null) {
      throw new Error(
        `The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`
      );
    }
    return getModelArtifactsForJSON(
      modelJSON,
      (weightsManifest2) => this.loadWeights(weightsManifest2)
    );
  }
  async loadWeights(weightsManifest) {
    const weightPath = Array.isArray(this.path) ? this.path[1] : this.path;
    const [prefix, suffix] = parseUrl(weightPath);
    const pathPrefix = this.weightPathPrefix || prefix;
    const weightSpecs = [];
    for (const entry of weightsManifest) {
      weightSpecs.push(...entry.weights);
    }
    const fetchURLs = [];
    const urlPromises = [];
    for (const weightsGroup of weightsManifest) {
      for (const path of weightsGroup.paths) {
        if (this.weightUrlConverter != null) {
          urlPromises.push(this.weightUrlConverter(path));
        } else {
          fetchURLs.push(pathPrefix + path + suffix);
        }
      }
    }
    if (this.weightUrlConverter) {
      fetchURLs.push(...await Promise.all(urlPromises));
    }
    const buffers = await loadWeightsAsArrayBuffer(fetchURLs, {
      requestInit: this.requestInit,
      fetchFunc: this.fetch,
      onProgress: this.onProgress
    });
    return [weightSpecs, concatenateArrayBuffers(buffers)];
  }
};
HTTPRequest.URL_SCHEME_REGEX = /^https?:\/\//;
function parseUrl(url) {
  const lastSlash = url.lastIndexOf("/");
  const lastSearchParam = url.lastIndexOf("?");
  const prefix = url.substring(0, lastSlash);
  const suffix = lastSearchParam > lastSlash ? url.substring(lastSearchParam) : "";
  return [prefix + "/", suffix];
}
function isHTTPScheme(url) {
  return url.match(HTTPRequest.URL_SCHEME_REGEX) != null;
}
var httpRouter = (url, loadOptions) => {
  if (typeof fetch === "undefined" && (loadOptions == null || loadOptions.fetchFunc == null)) {
    return null;
  } else {
    let isHTTP = true;
    if (Array.isArray(url)) {
      isHTTP = url.every((urlItem) => isHTTPScheme(urlItem));
    } else {
      isHTTP = isHTTPScheme(url);
    }
    if (isHTTP) {
      return http(url, loadOptions);
    }
  }
  return null;
};
IORouterRegistry.registerSaveRouter(httpRouter);
IORouterRegistry.registerLoadRouter(httpRouter);
function http(path, loadOptions) {
  return new HTTPRequest(path, loadOptions);
}

// src/tfjs-core/src/ops/mat_mul.ts
function matMul_(a, b, transposeA = false, transposeB = false) {
  let $a = convertToTensor(a, "a", "matMul");
  let $b = convertToTensor(b, "b", "matMul");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  const attrs = { transposeA, transposeB };
  return ENGINE.runKernel(
    BatchMatMul,
    inputs,
    attrs
  );
}
var matMul = op({ matMul_ });

// src/tfjs-core/src/ops/one_hot.ts
function oneHot_(indices, depth, onValue = 1, offValue = 0) {
  if (depth < 2) {
    throw new Error(`Error in oneHot: depth must be >=2, but it is ${depth}`);
  }
  const $indices = convertToTensor(indices, "indices", "oneHot", "int32");
  const inputs = { indices: $indices };
  const attrs = { depth, onValue, offValue };
  return ENGINE.runKernel(
    OneHot,
    inputs,
    attrs
  );
}
var oneHot = op({ oneHot_ });

// src/tfjs-core/src/globals.ts
function deprecationWarn(msg) {
  if (env().getBool("DEPRECATION_WARNINGS_ENABLED")) {
    console.warn(
      msg + " You can disable deprecation warnings with tf.disableDeprecationWarnings()."
    );
  }
}
setDeprecationWarningFn(deprecationWarn);
function engine() {
  return ENGINE;
}
function tidy(nameOrFn, fn) {
  return ENGINE.tidy(nameOrFn, fn);
}
function dispose(container) {
  const tensors = getTensorsInContainer(container);
  tensors.forEach((tensor2) => tensor2.dispose());
}
function keep(result) {
  return ENGINE.keep(result);
}
function registerBackend(name, factory, priority = 1) {
  return ENGINE.registerBackend(name, factory, priority);
}

// src/tfjs-core/src/ops/imag.ts
function imag_(input) {
  const $input = convertToTensor(input, "input", "imag");
  const inputs = { input: $input };
  return ENGINE.runKernel(Imag, inputs);
}
var imag = op({ imag_ });

// src/tfjs-core/src/ops/neg.ts
function neg_(x) {
  const $x = convertToTensor(x, "x", "neg");
  const inputs = { x: $x };
  return ENGINE.runKernel(Neg, inputs);
}
var neg = op({ neg_ });

// src/tfjs-core/src/ops/real.ts
function real_(input) {
  const $input = convertToTensor(input, "input", "real");
  const inputs = { input: $input };
  return ENGINE.runKernel(Real, inputs);
}
var real = op({ real_ });

// src/tfjs-core/src/ops/transpose.ts
function transpose_(x, perm, conjugate) {
  const $x = convertToTensor(x, "x", "transpose");
  if (perm == null) {
    perm = $x.shape.map((s, i) => i).reverse();
  }
  assert(
    $x.rank === perm.length,
    () => `Error in transpose: rank of input ${$x.rank} must match length of perm ${perm}.`
  );
  perm.forEach((axis) => {
    assert(
      axis >= 0 && axis < $x.rank,
      () => `All entries in 'perm' must be between 0 and ${$x.rank - 1} but got ${perm}`
    );
  });
  if ($x.rank <= 1) {
    return $x.clone();
  }
  const inputs = { x: $x };
  const attrs = { perm };
  if ($x.dtype === "complex64") {
    return tidy(() => {
      let $real = real($x);
      let $imag = imag($x);
      $real = ENGINE.runKernel(
        Transpose,
        { x: $real },
        attrs
      );
      $imag = ENGINE.runKernel(
        Transpose,
        { x: $imag },
        attrs
      );
      if (conjugate) {
        $imag = neg($imag);
      }
      return complex($real, $imag);
    });
  }
  return ENGINE.runKernel(
    Transpose,
    inputs,
    attrs
  );
}
var transpose = op({ transpose_ });

// src/tfjs-core/src/ops/confusion_matrix.ts
function confusionMatrix_(labels, predictions, numClasses) {
  const $labels = convertToTensor(labels, "labels", "confusionMatrix");
  const $predictions = convertToTensor(predictions, "predictions", "confusionMatrix");
  assert(
    numClasses == null || numClasses > 0 && Number.isInteger(numClasses),
    () => `If provided, numClasses must be a positive integer, but got ${numClasses}`
  );
  assert(
    $labels.rank === 1,
    () => `Expected the rank of labels to be 1, but got ${$labels.rank}`
  );
  assert(
    $predictions.rank === 1,
    () => `Expected the rank of predictions to be 1, but got ${$predictions.rank}`
  );
  assert(
    $labels.shape[0] === $predictions.shape[0],
    () => `Mismatch in the number of examples: ${$labels.shape[0]} vs. ${$predictions.shape[0]}. Labels and predictions should have the same number of elements.`
  );
  assert(
    numClasses > 0 && Number.isInteger(numClasses),
    () => `numClasses is required to be a positive integer, but got ${numClasses}`
  );
  const oneHotLabels = oneHot(cast($labels, "int32"), numClasses);
  const oneHotPredictions = oneHot(cast($predictions, "int32"), numClasses);
  const oneHotLabelsT = transpose(oneHotLabels);
  const product = matMul(oneHotLabelsT, oneHotPredictions);
  return cast(product, "int32");
}
var confusionMatrix = op({ confusionMatrix_ });

// src/tfjs-core/src/ops/broadcast_util.ts
var broadcast_util_exports = {};
__export(broadcast_util_exports, {
  assertAndGetBroadcastShape: () => assertAndGetBroadcastShape,
  getBroadcastDims: () => getBroadcastDims,
  getReductionAxes: () => getReductionAxes
});
function getBroadcastDims(inShape, outShape) {
  const inRank = inShape.length;
  const dims = [];
  for (let i = 0; i < inRank; i++) {
    const dim = inRank - 1 - i;
    const a = inShape[dim] || 1;
    const b = outShape[outShape.length - 1 - i] || 1;
    if (b > 1 && a === 1) {
      dims.unshift(dim);
    }
  }
  return dims;
}
function getReductionAxes(inShape, outShape) {
  const result = [];
  for (let i = 0; i < outShape.length; i++) {
    const inDim = inShape[inShape.length - i - 1];
    const outAxis = outShape.length - i - 1;
    const outDim = outShape[outAxis];
    if (inDim == null || inDim === 1 && outDim > 1) {
      result.unshift(outAxis);
    }
  }
  return result;
}
function assertAndGetBroadcastShape(shapeA, shapeB) {
  const result = [];
  const l = Math.max(shapeA.length, shapeB.length);
  for (let i = 0; i < l; i++) {
    let a = shapeA[shapeA.length - i - 1];
    if (a == null) {
      a = 1;
    }
    let b = shapeB[shapeB.length - i - 1];
    if (b == null) {
      b = 1;
    }
    if (a === 1) {
      result.unshift(b);
    } else if (b === 1) {
      result.unshift(a);
    } else if (a !== b) {
      const errMsg = `Operands could not be broadcast together with shapes ${shapeA} and ${shapeB}.`;
      throw Error(errMsg);
    } else {
      result.unshift(a);
    }
  }
  return result;
}

// src/tfjs-core/src/ops/tensor3d.ts
function tensor3d(values, shape, dtype) {
  assertNonNull(values);
  if (shape != null && shape.length !== 3) {
    throw new Error("tensor3d() requires shape to have three numbers");
  }
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 3 && inferredShape.length !== 1) {
    throw new Error(
      "tensor3d() requires values to be number[][][] or flat/TypedArray"
    );
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error(
      "tensor3d() requires shape to be provided when `values` are a flat array"
    );
  }
  return makeTensor(values, shape, inferredShape, dtype);
}

// src/tfjs-core/src/ops/browser.ts
var fromPixels2DContext;
function fromPixels_(pixels, numChannels = 3) {
  if (numChannels > 4) {
    throw new Error(
      "Cannot construct Tensor with more than 4 channels from pixels."
    );
  }
  if (pixels == null) {
    throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
  }
  let isPixelData = false;
  let isImageData = false;
  let isVideo = false;
  let isImage = false;
  let isCanvasLike = false;
  let isImageBitmap = false;
  if (pixels.data instanceof Uint8Array) {
    isPixelData = true;
  } else if (typeof ImageData !== "undefined" && pixels instanceof ImageData) {
    isImageData = true;
  } else if (typeof HTMLVideoElement !== "undefined" && pixels instanceof HTMLVideoElement) {
    isVideo = true;
  } else if (typeof HTMLImageElement !== "undefined" && pixels instanceof HTMLImageElement) {
    isImage = true;
  } else if (pixels.getContext != null) {
    isCanvasLike = true;
  } else if (typeof ImageBitmap !== "undefined" && pixels instanceof ImageBitmap) {
    isImageBitmap = true;
  } else {
    throw new Error(
      `pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${pixels.constructor.name}`
    );
  }
  const kernel = getKernel(FromPixels, ENGINE.backendName);
  if (kernel != null) {
    const inputs = { pixels };
    const attrs = { numChannels };
    return ENGINE.runKernel(
      FromPixels,
      inputs,
      attrs
    );
  }
  const [width, height] = isVideo ? [
    pixels.videoWidth,
    pixels.videoHeight
  ] : [pixels.width, pixels.height];
  let vals;
  if (isCanvasLike) {
    vals = pixels.getContext("2d").getImageData(0, 0, width, height).data;
  } else if (isImageData || isPixelData) {
    vals = pixels.data;
  } else if (isImage || isVideo || isImageBitmap) {
    if (fromPixels2DContext == null) {
      if (typeof document === "undefined") {
        if (typeof OffscreenCanvas !== "undefined" && typeof OffscreenCanvasRenderingContext2D !== "undefined") {
          fromPixels2DContext = new OffscreenCanvas(1, 1).getContext("2d");
        } else {
          throw new Error(
            "Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported."
          );
        }
      } else {
        fromPixels2DContext = document.createElement("canvas").getContext(
          "2d",
          { willReadFrequently: true }
        );
      }
    }
    fromPixels2DContext.canvas.width = width;
    fromPixels2DContext.canvas.height = height;
    fromPixels2DContext.drawImage(
      pixels,
      0,
      0,
      width,
      height
    );
    vals = fromPixels2DContext.getImageData(0, 0, width, height).data;
  }
  let values;
  if (numChannels === 4) {
    values = new Int32Array(vals);
  } else {
    const numPixels = width * height;
    values = new Int32Array(numPixels * numChannels);
    for (let i = 0; i < numPixels; i++) {
      for (let channel = 0; channel < numChannels; ++channel) {
        values[i * numChannels + channel] = vals[i * 4 + channel];
      }
    }
  }
  const outShape = [height, width, numChannels];
  return tensor3d(values, outShape, "int32");
}
var fromPixels = op({ fromPixels_ });

// src/tfjs-core/src/ops/gather_nd_util.ts
var gather_nd_util_exports = {};
__export(gather_nd_util_exports, {
  prepareAndValidate: () => prepareAndValidate
});
function prepareAndValidate(tensor2, indices) {
  const tensorRank = tensor2.shape.length;
  const indicesRank = indices.shape.length;
  if (tensorRank < 1) {
    throw new Error(
      `tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${tensorRank}.`
    );
  }
  if (indicesRank < 1) {
    throw new Error(
      `tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${indicesRank}.`
    );
  }
  if (indices.dtype !== "int32") {
    throw new Error(
      `tf.gatherND() expects the indices to be int32 type, but the dtype was ${indices.dtype}.`
    );
  }
  if (indices.shape[indicesRank - 1] > tensorRank) {
    throw new Error(
      `index innermost dimension length must be <= tensor rank; saw: ${indices.shape[indicesRank - 1]} vs. ${tensorRank}`
    );
  }
  if (sizeFromShape(tensor2.shape) === 0) {
    throw new Error(
      `Requested more than 0 entries, but input is empty. Input shape: ${tensor2.shape}.`
    );
  }
  const indicesShape = indices.shape;
  const sliceRank = indicesShape[indicesShape.length - 1];
  let nResult = 1;
  for (let i = 0; i < indicesShape.length - 1; ++i) {
    nResult *= indicesShape[i];
  }
  const inputShape = tensor2.shape;
  const resultShape = indicesShape.slice();
  resultShape.pop();
  let sliceSize = 1;
  for (let i = sliceRank; i < tensorRank; ++i) {
    sliceSize *= inputShape[i];
    resultShape.push(inputShape[i]);
  }
  const strides = [
    ...computeStrides(tensor2.shape).map((stride) => stride / sliceSize),
    1
  ].slice(0, sliceRank);
  return [resultShape, nResult, sliceSize, strides];
}

// src/tfjs-core/src/ops/scatter_nd_util.ts
var scatter_nd_util_exports = {};
__export(scatter_nd_util_exports, {
  calculateShapes: () => calculateShapes,
  validateInput: () => validateInput,
  validateUpdateShape: () => validateUpdateShape
});
function validateUpdateShape(shape, indices, updates) {
  const sliceDim = indices.rank > 1 ? indices.shape[indices.rank - 1] : 1;
  const batchDim = indices.rank > 1 ? indices.rank - 1 : 1;
  const shapeError = `Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${updates.shape}, indices.shape: ${indices.shape}, shape: ${shape}, sliceDim: ${sliceDim}, and batchDim: ${batchDim}.`;
  if (updates.rank < batchDim) {
    throw new Error(shapeError + ` update.rank < ${batchDim}. `);
  }
  if (shape.length < sliceDim + (updates.rank - batchDim)) {
    throw new Error(
      shapeError + ` Output shape length < ${sliceDim + (updates.rank - batchDim)}`
    );
  }
  if (updates.rank !== batchDim + shape.length - sliceDim) {
    throw new Error(
      shapeError + ` update.rank != ${batchDim + shape.length - sliceDim}`
    );
  }
  for (let d = 0; d < batchDim; ++d) {
    if (updates.shape[d] !== indices.shape[d]) {
      throw new Error(
        shapeError + ` updates.shape[${d}] (${updates.shape[d]}) != indices.shape[${d}] (${indices.shape[d]}).`
      );
    }
  }
  for (let d = 0; d < updates.rank - batchDim; ++d) {
    if (updates.shape[d + batchDim] !== shape[d + sliceDim]) {
      throw new Error(
        shapeError + ` updates.shape[${d + batchDim}] (${updates.shape[d + batchDim]}) != shape[${d + batchDim}] (${shape[d + batchDim]})`
      );
    }
  }
}
function validateInput(updates, indices, shape) {
  if (indices.rank < 1) {
    throw new Error(
      `tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${indices.rank}.`
    );
  }
  if (updates.rank < 1) {
    throw new Error(
      `tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${updates.rank}.`
    );
  }
  if (indices.dtype !== "int32") {
    throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${indices.dtype}`);
  }
  if (shape.length < 1) {
    throw new Error(
      `Output rank must be greater or equal to 1, but got shape: ${shape}`
    );
  }
  if (shape.length === 0) {
    if (indices.size === 0) {
      throw new Error(`Indices specified for empty output. indices shape: ${indices.shape}`);
    }
    if (updates.size === 0) {
      throw new Error(`Updates specified for empty output. updates shape: ${updates.shape}`);
    }
  }
  validateUpdateShape(shape, indices, updates);
}
function calculateShapes(updates, indices, shape) {
  const indicesRank = indices.shape.length;
  const sliceRank = indicesRank > 1 ? indices.shape[indicesRank - 1] : 1;
  const totalNd = shape.length;
  let sliceSize = 1;
  for (let i = sliceRank; i < totalNd; ++i) {
    sliceSize *= shape[i];
  }
  const safeSliceDim = sliceRank < 1 ? 1 : sliceRank;
  const numUpdates = sizeFromShape(indices.shape) / safeSliceDim;
  const strides = [...computeStrides(shape.slice(0, sliceRank)), 1];
  const outputSize = sizeFromShape(shape);
  return { sliceRank, numUpdates, sliceSize, strides, outputSize };
}

// src/tfjs-core/src/ops/slice_util.ts
var slice_util_exports = {};
__export(slice_util_exports, {
  assertParamsValid: () => assertParamsValid,
  computeFlatOffset: () => computeFlatOffset,
  computeOutShape: () => computeOutShape,
  getNormalizedAxes: () => getNormalizedAxes,
  isSliceContinous: () => isSliceContinous,
  maskToAxes: () => maskToAxes,
  parseSliceParams: () => parseSliceParams,
  sliceInfo: () => sliceInfo,
  startForAxis: () => startForAxis,
  startIndicesWithElidedDims: () => startIndicesWithElidedDims,
  stopForAxis: () => stopForAxis,
  stopIndicesWithElidedDims: () => stopIndicesWithElidedDims,
  stridesForAxis: () => stridesForAxis,
  stridesWithElidedDims: () => stridesWithElidedDims
});
var NEW_AXIS = -2;
var SHRINK_AXIS = -1;
function assertParamsValid(input, begin, size) {
  const inputRank = input.shape.length;
  assert(
    inputRank === begin.length,
    () => `Error in slice${inputRank}D: Length of begin ${begin} must match the rank of the array (${inputRank}).`
  );
  assert(
    inputRank === size.length,
    () => `Error in slice${inputRank}D: Length of size ${size} must match the rank of the array (${inputRank}).`
  );
  for (let i = 0; i < inputRank; ++i) {
    assert(
      begin[i] + size[i] <= input.shape[i],
      () => `Error in slice${inputRank}D: begin[${i}] + size[${i}] (${begin[i] + size[i]}) would overflow input.shape[${i}] (${input.shape[i]})`
    );
  }
}
function maskToAxes(mask) {
  const axes = [];
  let axis = 0;
  while (mask > 0) {
    if (mask & 1) {
      axes.push(axis);
    }
    mask /= 2;
    axis++;
  }
  return axes;
}
function computeOutShape(begin, end, strides) {
  const size = [];
  for (let axis = 0; axis < begin.length; axis++) {
    size[axis] = Math.ceil((end[axis] - begin[axis]) / strides[axis]);
  }
  return size;
}
function stridesWithElidedDims(strides, ellipsisInsertionIndex, numElidedAxes, inputShape) {
  const newStrides = [...strides];
  for (let i = newStrides.length; i < inputShape.length; i++) {
    newStrides.push(1);
  }
  for (let i = 0; i < numElidedAxes; i++) {
    if (i === 0) {
      newStrides[ellipsisInsertionIndex] = 1;
    } else {
      newStrides.splice(
        ellipsisInsertionIndex,
        0,
        1
      );
      newStrides.pop();
    }
  }
  return newStrides;
}
function unnormalizeAxis(ellipsisInsertionIndex, numElidedAxes, normalizedAxis) {
  if (normalizedAxis <= ellipsisInsertionIndex) {
    return normalizedAxis;
  }
  return normalizedAxis - (numElidedAxes - 1);
}
function getElidedAxes(numElidedAxes, ellipsisInsertionIndex) {
  const elidedAxes = [];
  for (let i = 0; i < numElidedAxes; i++) {
    elidedAxes.push(ellipsisInsertionIndex + i);
  }
  return elidedAxes;
}
function getNormalizedAxes(inputShape, ellipsisAxes, numInterpolatedAxes, begin, end, strides, beginMask, endMask, ellipsisMask) {
  const inputRank = inputShape.length;
  let normalizedBegin = new Array(inputRank), normalizedEnd = new Array(inputRank), normalizedStrides = new Array(inputRank);
  if (ellipsisAxes.length && numInterpolatedAxes > 0) {
    const fullIndex = ellipsisAxes[0];
    const numElidedAxes = numInterpolatedAxes + 1;
    normalizedBegin = startIndicesWithElidedDims(
      beginMask,
      fullIndex,
      numElidedAxes,
      begin,
      inputShape
    );
    normalizedEnd = stopIndicesWithElidedDims(
      endMask,
      fullIndex,
      numElidedAxes,
      end,
      inputShape
    );
    normalizedStrides = stridesWithElidedDims(strides, fullIndex, numElidedAxes, inputShape);
  } else {
    for (let axis = 0; axis < inputRank; axis++) {
      normalizedBegin[axis] = startForAxis(
        beginMask,
        begin,
        strides,
        inputShape,
        axis,
        ellipsisMask
      );
      normalizedEnd[axis] = stopForAxis(endMask, end, strides, inputShape, axis, ellipsisMask);
      normalizedStrides[axis] = stridesForAxis(strides, axis, ellipsisMask);
    }
  }
  return {
    begin: normalizedBegin,
    end: normalizedEnd,
    strides: normalizedStrides
  };
}
function startIndicesWithElidedDims(beginMask, ellipsisInsertionIndex, numElidedAxes, originalBegin, inputShape) {
  const newIndices = [...inputShape];
  const elidedAxes = getElidedAxes(numElidedAxes, ellipsisInsertionIndex);
  for (let axis = 0; axis < newIndices.length; axis++) {
    if (elidedAxes.indexOf(axis) > -1) {
      newIndices[axis] = 0;
    } else {
      const originalAxis = unnormalizeAxis(ellipsisInsertionIndex, numElidedAxes, axis);
      let originalValue = originalBegin[originalAxis];
      if (beginMask & 1 << originalAxis) {
        originalValue = 0;
      }
      newIndices[axis] = originalValue;
    }
  }
  return newIndices;
}
function stopIndicesWithElidedDims(endMask, ellipsisInsertionIndex, numElidedAxes, originalEnd, inputShape) {
  const newIndices = [...inputShape];
  const elidedAxes = getElidedAxes(numElidedAxes, ellipsisInsertionIndex);
  for (let axis = 0; axis < newIndices.length; axis++) {
    if (elidedAxes.indexOf(axis) > -1) {
      newIndices[axis] = Number.MAX_SAFE_INTEGER;
    } else {
      const originalAxis = unnormalizeAxis(ellipsisInsertionIndex, numElidedAxes, axis);
      let originalValue = originalEnd[originalAxis];
      if (endMask & 1 << originalAxis) {
        originalValue = Number.MAX_SAFE_INTEGER;
      }
      newIndices[axis] = originalValue;
    }
  }
  for (let i = 0; i < newIndices.length; i++) {
    const axisSize = inputShape[i];
    if (newIndices[i] < 0) {
      newIndices[i] += axisSize;
    }
    newIndices[i] = clamp(0, newIndices[i], inputShape[i]);
  }
  return newIndices;
}
function stridesForAxis(strides, axis, ellipsisMask) {
  let stride = strides[axis];
  if (ellipsisMask & 1 << axis || stride == null) {
    stride = 1;
  }
  return stride;
}
function startForAxis(beginMask, startIndices, strides, inputShape, axis, ellipsisMask) {
  let start = startIndices[axis];
  const stride = strides[axis] || 1;
  if (beginMask & 1 << axis || ellipsisMask & 1 << axis || start == null) {
    if (stride > 0) {
      start = Number.MIN_SAFE_INTEGER;
    } else {
      start = Number.MAX_SAFE_INTEGER;
    }
  }
  const axisSize = inputShape[axis];
  if (start < 0) {
    start += axisSize;
  }
  start = clamp(0, start, axisSize - 1);
  return start;
}
function stopForAxis(endMask, stopIndices, strides, inputShape, axis, ellipsisMask) {
  let stop = stopIndices[axis];
  const stride = strides[axis] || 1;
  if (endMask & 1 << axis || ellipsisMask & 1 << axis || stop == null) {
    if (stride > 0) {
      stop = Number.MAX_SAFE_INTEGER;
    } else {
      stop = Number.MIN_SAFE_INTEGER;
    }
  }
  const axisSize = inputShape[axis];
  if (stop < 0) {
    stop += axisSize;
  }
  if (stride > 0) {
    stop = clamp(0, stop, axisSize);
  } else {
    stop = clamp(-1, stop, axisSize - 1);
  }
  return stop;
}
function isSliceContinous(shape, begin, size) {
  let firstNonOneAxis = size.length;
  for (let i = 0; i < size.length; i++) {
    if (size[i] > 1) {
      firstNonOneAxis = i;
      break;
    }
  }
  for (let i = firstNonOneAxis + 1; i < size.length; i++) {
    if (begin[i] > 0 || size[i] !== shape[i]) {
      return false;
    }
  }
  return true;
}
function computeFlatOffset(begin, strides) {
  let flatOffset = begin.length > 0 ? begin[begin.length - 1] : 1;
  for (let i = 0; i < begin.length - 1; i++) {
    flatOffset += begin[i] * strides[i];
  }
  return flatOffset;
}
function parseSliceParams(x, begin, size) {
  let begin_;
  const xRank = x.shape.length;
  if (typeof begin === "number") {
    begin_ = [begin, ...new Array(xRank - 1).fill(0)];
  } else if (begin.length < xRank) {
    begin_ = begin.concat(new Array(xRank - begin.length).fill(0));
  } else {
    begin_ = begin.slice();
  }
  begin_.forEach((d) => {
    assert(
      d !== -1,
      () => "slice() does not support negative begin indexing."
    );
  });
  let size_;
  if (size == null) {
    size_ = new Array(xRank).fill(-1);
  } else if (typeof size === "number") {
    size_ = [size, ...new Array(xRank - 1).fill(-1)];
  } else if (size.length < xRank) {
    size_ = size.concat(new Array(xRank - size.length).fill(-1));
  } else {
    size_ = size;
  }
  size_ = size_.map((d, i) => {
    if (d >= 0) {
      return d;
    } else {
      assert(
        d === -1,
        () => `Negative size values should be exactly -1 but got ${d} for the slice() size at index ${i}.`
      );
      return x.shape[i] - begin_[i];
    }
  });
  return [begin_, size_];
}
function sliceInfo(xShape, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask) {
  let stridesNonNull;
  if (strides == null) {
    stridesNonNull = new Array(begin.length);
    stridesNonNull.fill(1);
  } else {
    stridesNonNull = strides;
  }
  if (ellipsisMask != null && (ellipsisMask & ellipsisMask - 1) !== 0) {
    throw new Error("Multiple ellipses in slice is not allowed.");
  }
  let ellipsisSeen = false;
  const sparseSpec = {
    dims: stridesNonNull.length,
    numAddAxisAfterEllipsis: 0,
    begin: begin.slice(),
    end: end.slice(),
    strides: stridesNonNull.slice(),
    beginMask,
    endMask,
    ellipsisMask,
    newAxisMask,
    shrinkAxisMask
  };
  for (let i = 0; i < sparseSpec.dims; i++) {
    if (ellipsisSeen && (1 << i & newAxisMask) !== 0) {
      sparseSpec.numAddAxisAfterEllipsis++;
    }
    if (1 << i & ellipsisMask) {
      ellipsisSeen = true;
    }
  }
  if (!ellipsisSeen) {
    sparseSpec.ellipsisMask |= 1 << sparseSpec.dims;
    sparseSpec.dims++;
  }
  const denseSpec = {
    dims: xShape.length,
    beginMask: 0,
    endMask: 0,
    beginValid: false,
    endValid: false
  };
  buildDenseSpec(sparseSpec, denseSpec);
  let isIdentity = true;
  let sliceDim0 = true;
  let isSimpleSlice = true;
  const processingShape = [];
  const finalShape = [];
  for (let i = 0; i < xShape.length; ++i) {
    if (denseSpec.strides[i] === 0) {
      throw Error(`strides[${i}] must be non-zero`);
    }
    const shrinkI = !!(denseSpec.shrinkAxisMask & 1 << i);
    const dimI = xShape[i];
    if (dimI === -1) {
      processingShape.push(shrinkI ? 1 : -1);
      continue;
    }
    const masks = [denseSpec.beginMask & 1 << i, denseSpec.endMask & 1 << i];
    const validRange = [
      denseSpec.strides[i] > 0 ? 0 : -1,
      denseSpec.strides[i] > 0 ? dimI : dimI - 1
    ];
    if (shrinkI && denseSpec.strides[i] <= 0) {
      throw Error("only stride 1 allowed on non-range indexing.");
    }
    isSimpleSlice = isSimpleSlice && denseSpec.strides[i] === 1;
    const beginAndEndMasked = !!(denseSpec.beginMask & 1 << i && denseSpec.endMask & 1 << i);
    if (denseSpec.beginValid && denseSpec.endValid) {
      if (shrinkI) {
        const xFwd = denseSpec.begin[i] < 0 ? dimI + denseSpec.begin[i] : denseSpec.begin[i];
        denseSpec.begin[i] = xFwd;
        denseSpec.end[i] = denseSpec.begin[i] + 1;
        if (xFwd < 0 || xFwd >= dimI) {
          throw Error(`slice index ${denseSpec.begin[i]} of dimension ${i} out of bounds.`);
        }
      } else {
        denseSpec.begin[i] = canonical(
          denseSpec.begin[i],
          0,
          denseSpec.strides[i],
          dimI,
          masks,
          validRange
        );
        denseSpec.end[i] = canonical(
          denseSpec.end[i],
          1,
          denseSpec.strides[i],
          dimI,
          masks,
          validRange
        );
      }
      const takeAllInDimension = denseSpec.strides[i] === 1 && denseSpec.begin[i] === 0 && denseSpec.end[i] === dimI;
      isIdentity = isIdentity && takeAllInDimension;
      sliceDim0 = sliceDim0 && (i === 0 && denseSpec.strides[i] === 1 || takeAllInDimension);
    } else {
      isIdentity = isIdentity && (denseSpec.strides[i] === 1 && beginAndEndMasked);
      sliceDim0 = sliceDim0 && (i === 0 && denseSpec.strides[i] === 1 || beginAndEndMasked);
    }
    let intervalLength;
    let knownInterval = false;
    if (denseSpec.beginValid && denseSpec.endValid) {
      intervalLength = denseSpec.end[i] - denseSpec.begin[i];
      knownInterval = true;
    } else if (shrinkI) {
      intervalLength = 1;
      knownInterval = true;
    } else if (beginAndEndMasked) {
      if (dimI >= 0) {
        if (denseSpec.strides[i] < 0) {
          intervalLength = -dimI;
        } else {
          intervalLength = dimI;
        }
        knownInterval = true;
      }
    }
    if (knownInterval) {
      let sizeI;
      if (intervalLength === 0 || intervalLength < 0 !== denseSpec.strides[i] < 0) {
        sizeI = 0;
      } else {
        sizeI = Math.trunc(intervalLength / denseSpec.strides[i]) + (intervalLength % denseSpec.strides[i] !== 0 ? 1 : 0);
      }
      processingShape.push(sizeI);
    } else {
      processingShape.push(-1);
    }
  }
  for (let denseDim = 0; denseDim < denseSpec.finalShapeGatherIndices.length; ++denseDim) {
    const gatherIndex = denseSpec.finalShapeGatherIndices[denseDim];
    if (gatherIndex >= 0) {
      finalShape.push(processingShape[gatherIndex]);
    } else if (gatherIndex === NEW_AXIS) {
      finalShape.push(1);
    }
  }
  const finalShapeSparse = finalShape.filter(
    (dim, i) => denseSpec.finalShapeGatherIndices[i] !== NEW_AXIS
  );
  return {
    finalShapeSparse,
    finalShape,
    isIdentity,
    sliceDim0,
    isSimpleSlice,
    begin: denseSpec.begin,
    end: denseSpec.end,
    strides: denseSpec.strides
  };
}
function buildDenseSpec(sparse, dense) {
  dense.beginMask = 0;
  dense.endMask = 0;
  dense.shrinkAxisMask = 0;
  let fullIndex = 0;
  dense.beginValid = sparse.begin != null;
  dense.endValid = sparse.end != null;
  dense.begin = new Array(dense.dims);
  dense.end = new Array(dense.dims);
  dense.strides = new Array(dense.dims);
  dense.finalShapeGatherIndices = [];
  dense.finalShapeGatherIndicesSparse = [];
  dense.inputShapeGatherIndicesSparse = new Array(dense.dims);
  for (let i = 0; i < sparse.dims; i++) {
    if (1 << i & sparse.ellipsisMask) {
      const nextIndex = Math.min(
        dense.dims - (sparse.dims - i) + 1 + sparse.numAddAxisAfterEllipsis,
        dense.dims
      );
      for (; fullIndex < nextIndex; fullIndex++) {
        dense.begin[fullIndex] = 0;
        dense.end[fullIndex] = 0;
        dense.strides[fullIndex] = 1;
        dense.beginMask |= 1 << fullIndex;
        dense.endMask |= 1 << fullIndex;
        dense.finalShapeGatherIndices.push(fullIndex);
        dense.finalShapeGatherIndicesSparse.push(-1);
        dense.inputShapeGatherIndicesSparse[fullIndex] = i;
      }
    } else if (1 << i & sparse.newAxisMask) {
      dense.finalShapeGatherIndices.push(NEW_AXIS);
      dense.finalShapeGatherIndicesSparse.push(-1);
    } else {
      if (fullIndex === dense.begin.length) {
        throw Error(
          `Index out of range using input dim ${fullIndex}; input has only ${dense.dims} dims, ${dense.begin.length}.`
        );
      }
      if (sparse.begin != null) {
        dense.begin[fullIndex] = sparse.begin[i];
      }
      if (sparse.end != null) {
        dense.end[fullIndex] = sparse.end[i];
      }
      dense.strides[fullIndex] = sparse.strides[i];
      if (sparse.beginMask & 1 << i) {
        dense.beginMask |= 1 << fullIndex;
      }
      if (sparse.endMask & 1 << i) {
        dense.endMask |= 1 << fullIndex;
      }
      if (sparse.shrinkAxisMask & 1 << i) {
        dense.finalShapeGatherIndices.push(SHRINK_AXIS);
        dense.finalShapeGatherIndicesSparse.push(-1);
        dense.shrinkAxisMask |= 1 << fullIndex;
      } else {
        dense.finalShapeGatherIndices.push(fullIndex);
        dense.finalShapeGatherIndicesSparse.push(i);
      }
      dense.inputShapeGatherIndicesSparse[fullIndex] = i;
      fullIndex++;
    }
  }
}
function canonical(x, c, strideI, dimI, masks, validRange) {
  if (masks[c]) {
    return strideI > 0 ? validRange[c] : validRange[c + 1 & 1];
  } else {
    const xFwd = x < 0 ? dimI + x : x;
    return xFwd < validRange[0] ? validRange[0] : xFwd > validRange[1] ? validRange[1] : xFwd;
  }
}

// src/tfjs-core/src/serialization.ts
var Serializable = class {
  getClassName() {
    return this.constructor.className;
  }
  static fromConfig(cls, config) {
    return new cls(config);
  }
};
var SerializationMap = class {
  constructor() {
    this.classNameMap = {};
  }
  static getMap() {
    if (SerializationMap.instance == null) {
      SerializationMap.instance = new SerializationMap();
    }
    return SerializationMap.instance;
  }
  static register(cls) {
    SerializationMap.getMap().classNameMap[cls.className] = [cls, cls.fromConfig];
  }
};
function registerClass(cls) {
  assert(
    cls.className != null,
    () => `Class being registered does not have the static className property defined.`
  );
  assert(
    typeof cls.className === "string",
    () => `className is required to be a string, but got type ` + typeof cls.className
  );
  assert(
    cls.className.length > 0,
    () => `Class being registered has an empty-string as its className, which is disallowed.`
  );
  SerializationMap.register(cls);
}

// src/tfjs-core/src/ops/add.ts
function add_(a, b) {
  let $a = convertToTensor(a, "a", "add");
  let $b = convertToTensor(b, "b", "add");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Add, inputs);
}
var add3 = op({ add_ });

// src/tfjs-core/src/ops/floorDiv.ts
function floorDiv_(a, b) {
  let $a = convertToTensor(a, "a", "floorDiv");
  let $b = convertToTensor(b, "b", "floorDiv");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(FloorDiv, inputs);
}
var floorDiv = op({ floorDiv_ });

// src/tfjs-core/src/ops/div.ts
function div_(a, b) {
  let $a = convertToTensor(a, "a", "div");
  let $b = convertToTensor(b, "b", "div");
  [$a, $b] = makeTypesMatch($a, $b);
  if ($a.dtype === "int32" && $b.dtype === "int32") {
    return floorDiv($a, $b);
  }
  const inputs = { a: $a, b: $b };
  const attrs = {};
  return ENGINE.runKernel(RealDiv, inputs, attrs);
}
var div = op({ div_ });

// src/tfjs-core/src/ops/mul.ts
function mul_(a, b) {
  let $a = convertToTensor(a, "a", "mul");
  let $b = convertToTensor(b, "b", "mul");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Multiply, inputs);
}
var mul = op({ mul_ });

// src/tfjs-core/src/ops/abs.ts
function abs_(x) {
  const $x = convertToTensor(x, "x", "abs");
  if ($x.dtype === "complex64") {
    const inputs = { x: $x };
    return ENGINE.runKernel(ComplexAbs, inputs);
  } else {
    const inputs = { x: $x };
    return ENGINE.runKernel(Abs, inputs);
  }
}
var abs = op({ abs_ });

// src/tfjs-core/src/ops/acos.ts
function acos_(x) {
  const $x = convertToTensor(x, "x", "acos");
  const inputs = { x: $x };
  return ENGINE.runKernel(Acos, inputs);
}
var acos = op({ acos_ });

// src/tfjs-core/src/ops/acosh.ts
function acosh_(x) {
  const $x = convertToTensor(x, "x", "acosh");
  const inputs = { x: $x };
  return ENGINE.runKernel(Acosh, inputs);
}
var acosh = op({ acosh_ });

// src/tfjs-core/src/ops/add_n.ts
function addN_(tensors) {
  assert(
    Array.isArray(tensors),
    () => "The argument passed to tf.addN() must be a list of tensors"
  );
  assert(
    tensors.length >= 1,
    () => `Must pass at least one tensor to tf.addN(), but got ${tensors.length}`
  );
  const $tensors = tensors.map((t, i) => convertToTensor(t, `tensors${i}`, "addN"));
  const firstTensor = $tensors[0];
  $tensors.forEach((t) => {
    if (t.dtype !== firstTensor.dtype) {
      throw new Error(
        "All tensors passed to tf.addN() must have the same dtype"
      );
    }
  });
  $tensors.forEach((t) => {
    if (!arraysEqual(t.shape, firstTensor.shape)) {
      throw new Error(
        "All tensors passed to tf.addN() must have the same shape"
      );
    }
  });
  const inputs = $tensors;
  return ENGINE.runKernel(AddN, inputs);
}
var addN = op({ addN_ });

// src/tfjs-core/src/ops/all.ts
function all_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "all", "bool");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(
    All,
    inputs,
    attrs
  );
}
var all = op({ all_ });

// src/tfjs-core/src/ops/any.ts
function any_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "any", "bool");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(
    Any,
    inputs,
    attrs
  );
}
var any = op({ any_ });

// src/tfjs-core/src/ops/arg_max.ts
function argMax_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "argMax");
  const inputs = { x: $x };
  const attrs = { axis };
  return ENGINE.runKernel(
    ArgMax,
    inputs,
    attrs
  );
}
var argMax = op({ argMax_ });

// src/tfjs-core/src/ops/arg_min.ts
function argMin_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "argMin");
  const inputs = { x: $x };
  const attrs = { axis };
  return ENGINE.runKernel(
    ArgMin,
    inputs,
    attrs
  );
}
var argMin = op({ argMin_ });

// src/tfjs-core/src/ops/asin.ts
function asin_(x) {
  const $x = convertToTensor(x, "x", "asin");
  const inputs = { x: $x };
  return ENGINE.runKernel(Asin, inputs);
}
var asin = op({ asin_ });

// src/tfjs-core/src/ops/asinh.ts
function asinh_(x) {
  const $x = convertToTensor(x, "x", "asinh");
  const inputs = { x: $x };
  return ENGINE.runKernel(Asinh, inputs);
}
var asinh = op({ asinh_ });

// src/tfjs-core/src/ops/atan.ts
function atan_(x) {
  const $x = convertToTensor(x, "x", "atan");
  const inputs = { x: $x };
  return ENGINE.runKernel(Atan, inputs);
}
var atan = op({ atan_ });

// src/tfjs-core/src/ops/atan2.ts
function atan2_(a, b) {
  let $a = convertToTensor(a, "a", "atan2");
  let $b = convertToTensor(b, "b", "atan2");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Atan2, inputs);
}
var atan2 = op({ atan2_ });

// src/tfjs-core/src/ops/atanh.ts
function atanh_(x) {
  const $x = convertToTensor(x, "x", "atanh");
  const inputs = { x: $x };
  return ENGINE.runKernel(Atanh, inputs);
}
var atanh = op({ atanh_ });

// src/tfjs-core/src/ops/conv_util.ts
function computeDilation2DInfo(inputShape, filterShape, strides, pad3, dataFormat = "NHWC", dilations) {
  const inputChannels = inputShape[3];
  const $filterShape = [...filterShape, inputChannels];
  const $dataFormat = convertConv2DDataFormat(dataFormat);
  return computeConv2DInfo(
    inputShape,
    $filterShape,
    strides,
    dilations,
    pad3,
    null,
    null,
    $dataFormat
  );
}
function computePool2DInfo(inShape, filterSize, strides, dilations, pad3, roundingMode, dataFormat = "channelsLast") {
  const [filterHeight, filterWidth] = parseTupleParam(filterSize);
  let filterShape;
  if (dataFormat === "channelsLast") {
    filterShape = [filterHeight, filterWidth, inShape[3], inShape[3]];
  } else if (dataFormat === "channelsFirst") {
    filterShape = [filterHeight, filterWidth, inShape[1], inShape[1]];
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  return computeConv2DInfo(
    inShape,
    filterShape,
    strides,
    dilations,
    pad3,
    roundingMode,
    false,
    dataFormat
  );
}
function computePool3DInfo(inShape, filterSize, strides, dilations, pad3, roundingMode, dataFormat = "NDHWC") {
  const [filterDepth, filterHeight, filterWidth] = parse3TupleParam(filterSize);
  let filterShape;
  let $dataFormat;
  if (dataFormat === "NDHWC") {
    $dataFormat = "channelsLast";
    filterShape = [filterDepth, filterHeight, filterWidth, inShape[4], inShape[4]];
  } else if (dataFormat === "NCDHW") {
    $dataFormat = "channelsFirst";
    filterShape = [filterDepth, filterHeight, filterWidth, inShape[1], inShape[1]];
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  return computeConv3DInfo(
    inShape,
    filterShape,
    strides,
    dilations,
    pad3,
    false,
    $dataFormat,
    roundingMode
  );
}
function computeConv2DInfo(inShape, filterShape, strides, dilations, pad3, roundingMode, depthwise = false, dataFormat = "channelsLast") {
  let [batchSize, inHeight, inWidth, inChannels] = [-1, -1, -1, -1];
  if (dataFormat === "channelsLast") {
    [batchSize, inHeight, inWidth, inChannels] = inShape;
  } else if (dataFormat === "channelsFirst") {
    [batchSize, inChannels, inHeight, inWidth] = inShape;
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  const [filterHeight, filterWidth, , filterChannels] = filterShape;
  const [strideHeight, strideWidth] = parseTupleParam(strides);
  const [dilationHeight, dilationWidth] = parseTupleParam(dilations);
  const effectiveFilterHeight = getEffectiveFilterSize(filterHeight, dilationHeight);
  const effectiveFilterWidth = getEffectiveFilterSize(filterWidth, dilationWidth);
  const { padInfo, outHeight, outWidth } = getPadAndOutInfo(
    pad3,
    inHeight,
    inWidth,
    strideHeight,
    strideWidth,
    effectiveFilterHeight,
    effectiveFilterWidth,
    roundingMode,
    dataFormat
  );
  const outChannels = depthwise ? filterChannels * inChannels : filterChannels;
  let outShape;
  if (dataFormat === "channelsFirst") {
    outShape = [batchSize, outChannels, outHeight, outWidth];
  } else if (dataFormat === "channelsLast") {
    outShape = [batchSize, outHeight, outWidth, outChannels];
  }
  return {
    batchSize,
    dataFormat,
    inHeight,
    inWidth,
    inChannels,
    outHeight,
    outWidth,
    outChannels,
    padInfo,
    strideHeight,
    strideWidth,
    filterHeight,
    filterWidth,
    effectiveFilterHeight,
    effectiveFilterWidth,
    dilationHeight,
    dilationWidth,
    inShape,
    outShape,
    filterShape
  };
}
function computeConv3DInfo(inShape, filterShape, strides, dilations, pad3, depthwise = false, dataFormat = "channelsLast", roundingMode) {
  let [batchSize, inDepth, inHeight, inWidth, inChannels] = [-1, -1, -1, -1, -1];
  if (dataFormat === "channelsLast") {
    [batchSize, inDepth, inHeight, inWidth, inChannels] = inShape;
  } else if (dataFormat === "channelsFirst") {
    [batchSize, inChannels, inDepth, inHeight, inWidth] = inShape;
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  const [filterDepth, filterHeight, filterWidth, , filterChannels] = filterShape;
  const [strideDepth, strideHeight, strideWidth] = parse3TupleParam(strides);
  const [dilationDepth, dilationHeight, dilationWidth] = parse3TupleParam(dilations);
  const effectiveFilterDepth = getEffectiveFilterSize(filterDepth, dilationDepth);
  const effectiveFilterHeight = getEffectiveFilterSize(filterHeight, dilationHeight);
  const effectiveFilterWidth = getEffectiveFilterSize(filterWidth, dilationWidth);
  const { padInfo, outDepth, outHeight, outWidth } = get3DPadAndOutInfo(
    pad3,
    inDepth,
    inHeight,
    inWidth,
    strideDepth,
    strideHeight,
    strideWidth,
    effectiveFilterDepth,
    effectiveFilterHeight,
    effectiveFilterWidth,
    roundingMode
  );
  const outChannels = depthwise ? filterChannels * inChannels : filterChannels;
  let outShape;
  if (dataFormat === "channelsFirst") {
    outShape = [batchSize, outChannels, outDepth, outHeight, outWidth];
  } else if (dataFormat === "channelsLast") {
    outShape = [batchSize, outDepth, outHeight, outWidth, outChannels];
  }
  return {
    batchSize,
    dataFormat,
    inDepth,
    inHeight,
    inWidth,
    inChannels,
    outDepth,
    outHeight,
    outWidth,
    outChannels,
    padInfo,
    strideDepth,
    strideHeight,
    strideWidth,
    filterDepth,
    filterHeight,
    filterWidth,
    effectiveFilterDepth,
    effectiveFilterHeight,
    effectiveFilterWidth,
    dilationDepth,
    dilationHeight,
    dilationWidth,
    inShape,
    outShape,
    filterShape
  };
}
function computeOutputShape2D(inShape, fieldSize, stride, zeroPad, roundingMode) {
  if (zeroPad == null) {
    zeroPad = computeDefaultPad(inShape, fieldSize, stride);
  }
  const inputRows = inShape[0];
  const inputCols = inShape[1];
  const outputRows = round((inputRows - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  const outputCols = round((inputCols - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  return [outputRows, outputCols];
}
function computeOutputShape4D(inShape, fieldSize, outChannels, stride, zeroPad, roundingMode) {
  if (zeroPad == null) {
    zeroPad = computeDefaultPad(inShape, fieldSize, stride);
  }
  const inputDepth = inShape[0];
  const inputRows = inShape[1];
  const inputCols = inShape[2];
  const outputDepths = round((inputDepth - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  const outputRows = round((inputRows - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  const outputCols = round((inputCols - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
  return [outputDepths, outputRows, outputCols, outChannels];
}
function computeDefaultPad(inputShape, fieldSize, stride, dilation = 1) {
  const effectiveFieldSize = getEffectiveFilterSize(fieldSize, dilation);
  return Math.floor(
    (inputShape[0] * (stride - 1) - stride + effectiveFieldSize) / 2
  );
}
function parseTupleParam(param) {
  if (typeof param === "number") {
    return [param, param, param];
  }
  if (param.length === 2) {
    return [param[0], param[1], 1];
  }
  return param;
}
function parse3TupleParam(param) {
  return typeof param === "number" ? [param, param, param] : param;
}
function getEffectiveFilterSize(filterSize, dilation) {
  if (dilation <= 1) {
    return filterSize;
  }
  return filterSize + (filterSize - 1) * (dilation - 1);
}
function getPadAndOutInfo(pad3, inHeight, inWidth, strideHeight, strideWidth, filterHeight, filterWidth, roundingMode, dataFormat) {
  let padInfo;
  let outHeight;
  let outWidth;
  if (typeof pad3 === "number") {
    const padType = pad3 === 0 ? "VALID" : "NUMBER";
    padInfo = { top: pad3, bottom: pad3, left: pad3, right: pad3, type: padType };
    const outShape = computeOutputShape2D(
      [inHeight, inWidth],
      filterHeight,
      strideHeight,
      pad3,
      roundingMode
    );
    outHeight = outShape[0];
    outWidth = outShape[1];
  } else if (pad3 === "same") {
    outHeight = Math.ceil(inHeight / strideHeight);
    outWidth = Math.ceil(inWidth / strideWidth);
    const padAlongHeight = Math.max(0, (outHeight - 1) * strideHeight + filterHeight - inHeight);
    const padAlongWidth = Math.max(0, (outWidth - 1) * strideWidth + filterWidth - inWidth);
    const top = Math.floor(padAlongHeight / 2);
    const bottom = padAlongHeight - top;
    const left = Math.floor(padAlongWidth / 2);
    const right = padAlongWidth - left;
    padInfo = { top, bottom, left, right, type: "SAME" };
  } else if (pad3 === "valid") {
    padInfo = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" };
    outHeight = Math.ceil((inHeight - filterHeight + 1) / strideHeight);
    outWidth = Math.ceil((inWidth - filterWidth + 1) / strideWidth);
  } else if (typeof pad3 === "object") {
    const top = dataFormat === "channelsLast" ? pad3[1][0] : pad3[2][0];
    const bottom = dataFormat === "channelsLast" ? pad3[1][1] : pad3[2][1];
    const left = dataFormat === "channelsLast" ? pad3[2][0] : pad3[3][0];
    const right = dataFormat === "channelsLast" ? pad3[2][1] : pad3[3][1];
    const padType = top === 0 && bottom === 0 && left === 0 && right === 0 ? "VALID" : "EXPLICIT";
    padInfo = { top, bottom, left, right, type: padType };
    outHeight = round(
      (inHeight - filterHeight + top + bottom) / strideHeight + 1,
      roundingMode
    );
    outWidth = round(
      (inWidth - filterWidth + left + right) / strideWidth + 1,
      roundingMode
    );
  } else {
    throw Error(`Unknown padding parameter: ${pad3}`);
  }
  return { padInfo, outHeight, outWidth };
}
function get3DPadAndOutInfo(pad3, inDepth, inHeight, inWidth, strideDepth, strideHeight, strideWidth, filterDepth, filterHeight, filterWidth, roundingMode) {
  let padInfo;
  let outDepth;
  let outHeight;
  let outWidth;
  if (typeof pad3 === "number") {
    const padType = pad3 === 0 ? "VALID" : "NUMBER";
    padInfo = {
      top: pad3,
      bottom: pad3,
      left: pad3,
      right: pad3,
      front: pad3,
      back: pad3,
      type: padType
    };
    const outShape = computeOutputShape4D(
      [inDepth, inHeight, inWidth, 1],
      filterDepth,
      1,
      strideDepth,
      pad3,
      roundingMode
    );
    outDepth = outShape[0];
    outHeight = outShape[1];
    outWidth = outShape[2];
  } else if (pad3 === "same") {
    outDepth = Math.ceil(inDepth / strideDepth);
    outHeight = Math.ceil(inHeight / strideHeight);
    outWidth = Math.ceil(inWidth / strideWidth);
    const padAlongDepth = (outDepth - 1) * strideDepth + filterDepth - inDepth;
    const padAlongHeight = (outHeight - 1) * strideHeight + filterHeight - inHeight;
    const padAlongWidth = (outWidth - 1) * strideWidth + filterWidth - inWidth;
    const front = Math.floor(padAlongDepth / 2);
    const back = padAlongDepth - front;
    const top = Math.floor(padAlongHeight / 2);
    const bottom = padAlongHeight - top;
    const left = Math.floor(padAlongWidth / 2);
    const right = padAlongWidth - left;
    padInfo = { top, bottom, left, right, front, back, type: "SAME" };
  } else if (pad3 === "valid") {
    padInfo = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      front: 0,
      back: 0,
      type: "VALID"
    };
    outDepth = Math.ceil((inDepth - filterDepth + 1) / strideDepth);
    outHeight = Math.ceil((inHeight - filterHeight + 1) / strideHeight);
    outWidth = Math.ceil((inWidth - filterWidth + 1) / strideWidth);
  } else {
    throw Error(`Unknown padding parameter: ${pad3}`);
  }
  return { padInfo, outDepth, outHeight, outWidth };
}
function round(value, roundingMode) {
  if (!roundingMode) {
    return Math.trunc(value);
  }
  switch (roundingMode) {
    case "round":
      return Math.round(value);
    case "ceil":
      return Math.ceil(value);
    case "floor":
      return Math.floor(value);
    default:
      throw new Error(`Unknown roundingMode ${roundingMode}`);
  }
}
function tupleValuesAreOne(param) {
  const [dimA, dimB, dimC] = parseTupleParam(param);
  return dimA === 1 && dimB === 1 && dimC === 1;
}
function eitherStridesOrDilationsAreOne(strides, dilations) {
  return tupleValuesAreOne(strides) || tupleValuesAreOne(dilations);
}
function convertConv2DDataFormat(dataFormat) {
  if (dataFormat === "NHWC") {
    return "channelsLast";
  } else if (dataFormat === "NCHW") {
    return "channelsFirst";
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
}
function checkPadOnDimRoundingMode(opDesc, pad3, dimRoundingMode) {
  if (dimRoundingMode != null) {
    if (typeof pad3 === "string") {
      throw Error(
        `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad3}.`
      );
    } else if (typeof pad3 === "number") {
      assert(
        isInt(pad3),
        () => `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad3}.`
      );
    } else if (typeof pad3 === "object") {
      pad3.forEach((p) => {
        p.forEach((v) => {
          assert(
            isInt(v),
            () => `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${v}.`
          );
        });
      });
    } else {
      throw Error(`Error in ${opDesc}: Unknown padding parameter: ${pad3}`);
    }
  }
}

// src/tfjs-core/src/ops/reshape.ts
function reshape_(x, shape) {
  const $x = convertToTensor(x, "x", "reshape", "string_or_numeric");
  const inputs = { x: $x };
  const attrs = { shape };
  return ENGINE.runKernel(
    Reshape,
    inputs,
    attrs
  );
}
var reshape = op({ reshape_ });

// src/tfjs-core/src/ops/avg_pool.ts
function avgPool_(x, filterSize, strides, pad3, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "avgPool", "float32");
  const dilations = 1;
  assert(
    eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in avgPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(
    x4D.rank === 4,
    () => `Error in avgPool: x must be rank 4 but got rank ${x4D.rank}.`
  );
  checkPadOnDimRoundingMode("avgPool", pad3, dimRoundingMode);
  const inputs = { x: x4D };
  const attrs = { filterSize, strides, pad: pad3, dimRoundingMode };
  let res = ENGINE.runKernel(
    AvgPool,
    inputs,
    attrs
  );
  res = cast(res, $x.dtype);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var avgPool = op({ avgPool_ });

// src/tfjs-core/src/ops/avg_pool_3d.ts
function avgPool3d_(x, filterSize, strides, pad3, dimRoundingMode, dataFormat = "NDHWC") {
  const $x = convertToTensor(x, "x", "avgPool3d", "float32");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(
    x5D.rank === 5,
    () => `Error in avgPool3d: x must be rank 5 but got rank ${x5D.rank}.`
  );
  assert(
    dataFormat === "NDHWC",
    () => `Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${dataFormat}`
  );
  checkPadOnDimRoundingMode("avgPool3d", pad3, dimRoundingMode);
  const inputs = { x: x5D };
  const attrs = { filterSize, strides, pad: pad3, dimRoundingMode, dataFormat };
  let res = ENGINE.runKernel(
    AvgPool3D,
    inputs,
    attrs
  );
  res = cast(res, x5D.dtype);
  if (reshapedTo5D) {
    return reshape(
      res,
      [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]
    );
  }
  return res;
}
var avgPool3d = op({ avgPool3d_ });

// src/tfjs-core/src/ops/concat.ts
function concat_(tensors, axis = 0) {
  assert(tensors.length >= 1, () => "Pass at least one tensor to concat");
  const $tensors = convertToTensorArray(tensors, "tensors", "concat", "string_or_numeric");
  if ($tensors[0].dtype === "complex64") {
    $tensors.forEach((tensor2) => {
      if (tensor2.dtype !== "complex64") {
        throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${tensor2.dtype}. `);
      }
    });
  }
  if ($tensors.length === 1) {
    return clone($tensors[0]);
  }
  const inputs = $tensors;
  const attr = { axis };
  return ENGINE.runKernel(
    Concat,
    inputs,
    attr
  );
}
var concat = op({ concat_ });

// src/tfjs-core/src/ops/sigmoid.ts
function sigmoid_(x) {
  const $x = convertToTensor(x, "x", "sigmoid", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sigmoid, inputs);
}
var sigmoid = op({ sigmoid_ });

// src/tfjs-core/src/ops/slice.ts
function slice_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice", "string_or_numeric");
  if ($x.rank === 0) {
    throw new Error("Slicing scalar is not possible");
  }
  const inputs = { x: $x };
  const attrs = { begin, size };
  return ENGINE.runKernel(
    Slice,
    inputs,
    attrs
  );
}
var slice = op({ slice_ });

// src/tfjs-core/src/ops/tanh.ts
function tanh_(x) {
  const $x = convertToTensor(x, "x", "tanh", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Tanh, inputs);
}
var tanh2 = op({ tanh_ });

// src/tfjs-core/src/ops/basic_lstm_cell.ts
function basicLSTMCell_(forgetBias, lstmKernel, lstmBias, data, c, h) {
  const $forgetBias = convertToTensor(forgetBias, "forgetBias", "basicLSTMCell");
  const $lstmKernel = convertToTensor(lstmKernel, "lstmKernel", "basicLSTMCell");
  const $lstmBias = convertToTensor(lstmBias, "lstmBias", "basicLSTMCell");
  const $data = convertToTensor(data, "data", "basicLSTMCell");
  const $c = convertToTensor(c, "c", "basicLSTMCell");
  const $h = convertToTensor(h, "h", "basicLSTMCell");
  const combined = concat([$data, $h], 1);
  const weighted = matMul(combined, $lstmKernel);
  const res = add3(weighted, $lstmBias);
  const batchSize = res.shape[0];
  const sliceCols = res.shape[1] / 4;
  const sliceSize = [batchSize, sliceCols];
  const i = slice(res, [0, 0], sliceSize);
  const j = slice(res, [0, sliceCols], sliceSize);
  const f = slice(res, [0, sliceCols * 2], sliceSize);
  const o = slice(res, [0, sliceCols * 3], sliceSize);
  const newC = add3(
    mul(sigmoid(i), tanh2(j)),
    mul($c, sigmoid(add3($forgetBias, f)))
  );
  const newH = mul(tanh2(newC), sigmoid(o));
  return [newC, newH];
}
var basicLSTMCell = op({ basicLSTMCell_ });

// src/tfjs-core/src/ops/batch_to_space_nd.ts
function batchToSpaceND_(x, blockShape, crops) {
  const $x = convertToTensor(x, "x", "batchToSpaceND");
  const prod3 = blockShape.reduce((a, b) => a * b);
  assert(
    $x.rank >= 1 + blockShape.length,
    () => `input rank is ${$x.rank} but should be > than blockShape.length ${blockShape.length}`
  );
  assert(
    crops.length === blockShape.length,
    () => `crops.length is ${crops.length} but should be equal to blockShape.length  ${blockShape.length}`
  );
  assert(
    $x.shape[0] % prod3 === 0,
    () => `input tensor batch is ${$x.shape[0]} but is not divisible by the product of the elements of blockShape ${blockShape.join(" * ")} === ${prod3}`
  );
  const inputs = { x: $x };
  const attrs = { blockShape, crops };
  return ENGINE.runKernel(
    BatchToSpaceND,
    inputs,
    attrs
  );
}
var batchToSpaceND = op({ batchToSpaceND_ });

// src/tfjs-core/src/ops/batchnorm_util.ts
function xAs4D(x) {
  let x4D;
  if (x.rank === 0 || x.rank === 1) {
    x4D = reshape(x, [1, 1, 1, x.size]);
  } else if (x.rank === 2) {
    x4D = reshape(x, [1, 1, x.shape[0], x.shape[1]]);
  } else if (x.rank === 3) {
    x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
  } else {
    x4D = x;
  }
  return x4D;
}

// src/tfjs-core/src/ops/batchnorm.ts
function batchNorm_(x, mean3, variance, offset, scale, varianceEpsilon) {
  if (varianceEpsilon == null) {
    varianceEpsilon = 1e-3;
  }
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean3, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale != null) {
    $scale = convertToTensor(scale, "scale", "batchNorm");
  }
  let $offset;
  if (offset != null) {
    $offset = convertToTensor(offset, "offset", "batchNorm");
  }
  assert(
    $mean.rank === $variance.rank,
    () => "Batch normalization gradient requires mean and variance to have equal ranks."
  );
  assert(
    $offset == null || $mean.rank === $offset.rank,
    () => "Batch normalization gradient requires mean and offset to have equal ranks."
  );
  assert(
    $scale == null || $mean.rank === $scale.rank,
    () => "Batch normalization gradient requires mean and scale to have equal ranks."
  );
  const x4D = xAs4D($x);
  const inputs = {
    x: x4D,
    scale: $scale,
    offset: $offset,
    mean: $mean,
    variance: $variance
  };
  const attrs = { varianceEpsilon };
  const res = ENGINE.runKernel(
    FusedBatchNorm,
    inputs,
    attrs
  );
  return reshape(res, $x.shape);
}
var batchNorm = op({ batchNorm_ });

// src/tfjs-core/src/ops/batchnorm2d.ts
function batchNorm2d_(x, mean3, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean3, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale != null) {
    $scale = convertToTensor(scale, "scale", "batchNorm");
  }
  let $offset;
  if (offset != null) {
    $offset = convertToTensor(offset, "offset", "batchNorm");
  }
  assert(
    $x.rank === 2,
    () => `Error in batchNorm2D: x must be rank 2 but got rank ${$x.rank}.`
  );
  assert(
    $mean.rank === 2 || $mean.rank === 1,
    () => `Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${$mean.rank}.`
  );
  assert(
    $variance.rank === 2 || $variance.rank === 1,
    () => `Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${$variance.rank}.`
  );
  if ($scale != null) {
    assert(
      $scale.rank === 2 || $scale.rank === 1,
      () => `Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${$scale.rank}.`
    );
  }
  if ($offset != null) {
    assert(
      $offset.rank === 2 || $offset.rank === 1,
      () => `Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${$offset.rank}.`
    );
  }
  return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
var batchNorm2d = op({ batchNorm2d_ });

// src/tfjs-core/src/ops/batchnorm3d.ts
function batchNorm3d_(x, mean3, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean3, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale != null) {
    $scale = convertToTensor(scale, "scale", "batchNorm");
  }
  let $offset;
  if (offset != null) {
    $offset = convertToTensor(offset, "offset", "batchNorm");
  }
  assert(
    $x.rank === 3,
    () => `Error in batchNorm3D: x must be rank 3 but got rank ${$x.rank}.`
  );
  assert(
    $mean.rank === 3 || $mean.rank === 1,
    () => `Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${$mean.rank}.`
  );
  assert(
    $variance.rank === 3 || $variance.rank === 1,
    () => `Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${$variance.rank}.`
  );
  if ($scale != null) {
    assert(
      $scale.rank === 3 || $scale.rank === 1,
      () => `Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${$scale.rank}.`
    );
  }
  if ($offset != null) {
    assert(
      $offset.rank === 3 || $offset.rank === 1,
      () => `Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${$offset.rank}.`
    );
  }
  return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
var batchNorm3d = op({ batchNorm3d_ });

// src/tfjs-core/src/ops/batchnorm4d.ts
function batchNorm4d_(x, mean3, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean3, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale != null) {
    $scale = convertToTensor(scale, "scale", "batchNorm");
  }
  let $offset;
  if (offset != null) {
    $offset = convertToTensor(offset, "offset", "batchNorm");
  }
  assert(
    $x.rank === 4,
    () => `Error in batchNorm4D: x must be rank 4 but got rank ${$x.rank}.`
  );
  assert(
    $mean.rank === 4 || $mean.rank === 1,
    () => `Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${$mean.rank}.`
  );
  assert(
    $variance.rank === 4 || $variance.rank === 1,
    () => `Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${$variance.rank}.`
  );
  if ($scale != null) {
    assert(
      $scale.rank === 4 || $scale.rank === 1,
      () => `Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${$scale.rank}.`
    );
  }
  if ($offset != null) {
    assert(
      $offset.rank === 4 || $offset.rank === 1,
      () => `Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${$offset.rank}.`
    );
  }
  return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
var batchNorm4d = op({ batchNorm4d_ });

// src/tfjs-core/src/ops/bincount.ts
function bincount_(x, weights, size) {
  const $x = convertToTensor(x, "x", "bincount");
  const $weights = convertToTensor(weights, "weights", "bincount");
  assert(
    $x.dtype === "int32",
    () => `Error in bincount: input dtype must be int32, but got ${$x.dtype}`
  );
  assert(size >= 0, () => `size must be non-negative, but got ${size}.`);
  assert(
    $weights.size === $x.size || $weights.size === 0,
    () => `Error in bincount: weights must have the same size as input or0-length, but got input shape: ${$x.shape}, weights shape: ${$weights.shape}.`
  );
  const inputs = { x: $x, weights: $weights };
  const attrs = { size };
  return ENGINE.runKernel(
    Bincount,
    inputs,
    attrs
  );
}
var bincount = op({ bincount_ });

// src/tfjs-core/src/ops/broadcast_args.ts
function broadcastArgs_(s0, s1) {
  const shape1Input = convertToTensor(s0, "s0", "broadcastArgs", "int32");
  const shape2Input = convertToTensor(s1, "s1", "broadcastArgs", "int32");
  if (shape1Input.rank !== 1) {
    throw new Error(
      `broadcastArgs(): first input must be a vector (rank=1). Has rank ${shape1Input.rank}`
    );
  }
  if (shape2Input.rank !== 1) {
    throw new Error(
      `broadcastArgs(): second input must be a vector (rank=1). Has rank ${shape2Input.rank}`
    );
  }
  const inputs = { s0: shape1Input, s1: shape2Input };
  return ENGINE.runKernel(BroadcastArgs, inputs);
}
var broadcastArgs = op({ broadcastArgs_ });

// src/tfjs-core/src/ops/broadcast_to.ts
function broadcastTo_(x, shape) {
  let input = convertToTensor(x, "broadcastTo", "x");
  const xShape = input.shape;
  if (shape.some((d) => !(d > 0) || d % 1 !== 0)) {
    throw new Error(`broadcastTo(): Invalid broadcast shape [${shape}].`);
  }
  if (shape.length < input.rank) {
    throw new Error(`broadcastTo(): shape.length=${shape.length} < input.rank=${input.rank}.`);
  }
  if (shape.length > input.rank) {
    const newShape = input.shape.slice();
    while (newShape.length < shape.length) {
      newShape.unshift(1);
    }
    input = reshape(input, newShape);
  }
  const inputShape = input.shape;
  const reps = Array.from(shape);
  for (let i = shape.length - 1; i >= 0; i--) {
    if (inputShape[i] === shape[i]) {
      reps[i] = 1;
    } else if (input.shape[i] !== 1) {
      throw new Error(
        `broadcastTo(): [${xShape}] cannot be broadcast to [${shape}].`
      );
    }
  }
  const axes = reps.map((n, i) => n > 1 ? i : -1).filter((i) => i >= 0);
  if (axes.length === 0) {
    return clone(input);
  }
  const inputs = { x: input };
  const attrs = { reps };
  return ENGINE.runKernel(
    Tile,
    inputs,
    attrs
  );
}
var broadcastTo = op({ broadcastTo_ });

// src/tfjs-core/src/ops/ceil.ts
function ceil_(x) {
  const $x = convertToTensor(x, "x", "ceil", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Ceil, inputs);
}
var ceil = op({ ceil_ });

// src/tfjs-core/src/ops/clip_by_value.ts
function clipByValue_(x, clipValueMin, clipValueMax) {
  const $x = convertToTensor(x, "x", "clipByValue");
  assert(
    clipValueMin <= clipValueMax,
    () => `Error in clip: min (${clipValueMin}) must be less than or equal to max (${clipValueMax}).`
  );
  const inputs = { x: $x };
  const attrs = { clipValueMin, clipValueMax };
  return ENGINE.runKernel(
    ClipByValue,
    inputs,
    attrs
  );
}
var clipByValue = op({ clipByValue_ });

// src/tfjs-core/src/ops/concat_1d.ts
function concat1d_(tensors) {
  return concat(tensors, 0);
}
var concat1d = op({ concat1d_ });

// src/tfjs-core/src/ops/concat_2d.ts
function concat2d_(tensors, axis) {
  return concat(tensors, axis);
}
var concat2d = op({ concat2d_ });

// src/tfjs-core/src/ops/concat_3d.ts
function concat3d_(tensors, axis) {
  return concat(tensors, axis);
}
var concat3d = op({ concat3d_ });

// src/tfjs-core/src/ops/concat_4d.ts
function concat4d_(tensors, axis) {
  return concat(tensors, axis);
}
var concat4d = op({ concat4d_ });

// src/tfjs-core/src/ops/conv2d.ts
function conv2d_(x, filter, strides, pad3, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "conv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(
    x4D.rank === 4,
    () => `Error in conv2d: input must be rank 4, but got rank ${x4D.rank}.`
  );
  assert(
    $filter.rank === 4,
    () => `Error in conv2d: filter must be rank 4, but got rank ${$filter.rank}.`
  );
  checkPadOnDimRoundingMode("conv2d", pad3, dimRoundingMode);
  const inDepth = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  assert(
    inDepth === $filter.shape[2],
    () => `Error in conv2d: depth of input (${inDepth}) must match input depth for filter ${$filter.shape[2]}.`
  );
  assert(
    eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in conv2D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad3, dataFormat, dilations, dimRoundingMode };
  const res = ENGINE.runKernel(
    Conv2D,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var conv2d = op({ conv2d_ });

// src/tfjs-core/src/ops/conv1d.ts
function conv1d_(x, filter, stride, pad3, dataFormat = "NWC", dilation = 1, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv1d");
  const $filter = convertToTensor(filter, "filter", "conv1d");
  let x3D = $x;
  let reshapedTo3D = false;
  if ($x.rank === 2) {
    reshapedTo3D = true;
    x3D = reshape($x, [1, $x.shape[0], $x.shape[1]]);
  }
  assert(
    x3D.rank === 3,
    () => `Error in conv1d: input must be rank 3, but got rank ${x3D.rank}.`
  );
  assert(
    $filter.rank === 3,
    () => `Error in conv1d: filter must be rank 3, but got rank ${$filter.rank}.`
  );
  checkPadOnDimRoundingMode("conv1d", pad3, dimRoundingMode);
  assert(
    x3D.shape[2] === $filter.shape[1],
    () => `Error in conv1d: depth of input (${x3D.shape[2]}) must match input depth for filter ${$filter.shape[1]}.`
  );
  assert(
    eitherStridesOrDilationsAreOne(stride, dilation),
    () => `Error in conv1D: Either stride or dilation must be 1. Got stride ${stride} and dilation '${dilation}'`
  );
  assert(
    dataFormat === "NWC",
    () => `Error in conv1d: got dataFormat of ${dataFormat} but only NWC is currently supported.`
  );
  const filter4D = reshape(
    $filter,
    [1, $filter.shape[0], $filter.shape[1], $filter.shape[2]]
  );
  const input4D = reshape(x3D, [x3D.shape[0], 1, x3D.shape[1], x3D.shape[2]]);
  const strides = [1, stride];
  const dilations = [1, dilation];
  const conv2dDataFormat = "NHWC";
  const res = conv2d(
    input4D,
    filter4D,
    strides,
    pad3,
    conv2dDataFormat,
    dilations,
    dimRoundingMode
  );
  if (reshapedTo3D) {
    return reshape(res, [res.shape[2], res.shape[3]]);
  }
  return reshape(res, [res.shape[0], res.shape[2], res.shape[3]]);
}
var conv1d = op({ conv1d_ });

// src/tfjs-core/src/ops/conv2d_backprop_input.ts
function conv2DBackpropInput_(xShape, dy, filter, strides, pad3, dataFormat = "NHWC", dimRoundingMode) {
  assert(
    xShape.length === dy.rank,
    () => `Length of inShape (${xShape.length}) and rank of dy (${dy.rank}) must match`
  );
  let xShape4D = xShape;
  let dy4D = dy;
  let reshapedTo4D = false;
  if (dy.rank === 3) {
    reshapedTo4D = true;
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
    xShape4D = [1, xShape[0], xShape[1], xShape[2]];
  }
  assert(
    xShape4D.length === 4,
    () => `Error in conv2dDerInput: inShape must be length 4, but got length ${xShape4D.length}.`
  );
  assert(
    dy4D.rank === 4,
    () => `Error in conv2dDerInput: dy must be rank 4, but got rank ${dy4D.rank}`
  );
  assert(
    filter.rank === 4,
    () => `Error in conv2dDerInput: filter must be rank 4, but got rank ${filter.rank}`
  );
  const inDepth = dataFormat === "NHWC" ? xShape4D[3] : xShape4D[1];
  const outDepth = dataFormat === "NHWC" ? dy4D.shape[3] : dy4D.shape[1];
  assert(
    inDepth === filter.shape[2],
    () => `Error in conv2dDerInput: depth of input (${inDepth}) must match input depth for filter ${filter.shape[2]}.`
  );
  assert(
    outDepth === filter.shape[3],
    () => `Error in conv2dDerInput: depth of output (${outDepth}) must match output depth for filter ${filter.shape[3]}.`
  );
  checkPadOnDimRoundingMode("conv2dDerInput", pad3, dimRoundingMode);
  const inputs = { dy: dy4D, filter };
  const attrs = { strides, pad: pad3, dataFormat, dimRoundingMode, inputShape: xShape4D };
  const res = ENGINE.runKernel(
    Conv2DBackpropInput,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var conv2DBackpropInput = op({ conv2DBackpropInput_ });

// src/tfjs-core/src/ops/conv2d_transpose.ts
function conv2dTranspose_(x, filter, outputShape, strides, pad3, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv2dTranspose");
  const $filter = convertToTensor(filter, "filter", "conv2dTranspose");
  return conv2DBackpropInput(
    outputShape,
    $x,
    $filter,
    strides,
    pad3,
    "NHWC",
    dimRoundingMode
  );
}
var conv2dTranspose = op({ conv2dTranspose_ });

// src/tfjs-core/src/ops/conv3d.ts
function conv3d_(x, filter, strides, pad3, dataFormat = "NDHWC", dilations = [1, 1, 1]) {
  const $x = convertToTensor(x, "x", "conv3d");
  const $filter = convertToTensor(filter, "filter", "conv3d");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(
    x5D.rank === 5,
    () => `Error in conv3d: input must be rank 5, but got rank ${x5D.rank}.`
  );
  assert(
    $filter.rank === 5,
    () => `Error in conv3d: filter must be rank 5, but got rank ${$filter.rank}.`
  );
  assert(
    x5D.shape[4] === $filter.shape[3],
    () => `Error in conv3d: depth of input (${x5D.shape[4]}) must match input depth for filter ${$filter.shape[3]}.`
  );
  assert(
    eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in conv3D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  assert(
    dataFormat === "NDHWC",
    () => `Error in conv3d: got dataFormat of ${dataFormat} but only NDHWC is currently supported.`
  );
  const inputs = { x: x5D, filter: $filter };
  const attrs = { strides, pad: pad3, dataFormat, dilations };
  const res = ENGINE.runKernel(
    Conv3D,
    inputs,
    attrs
  );
  if (reshapedTo5D) {
    return reshape(
      res,
      [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]
    );
  }
  return res;
}
var conv3d = op({ conv3d_ });

// src/tfjs-core/src/ops/conv3d_backprop_input.ts
function conv3DBackpropInput_(xShape, dy, filter, strides, pad3) {
  assert(
    xShape.length === dy.rank,
    () => `Length of inShape (${xShape.length}) and rank of dy (${dy.rank}) must match`
  );
  let xShape5D = xShape;
  let dy5D = dy;
  let reshapedTo5D = false;
  if (dy.rank === 4) {
    reshapedTo5D = true;
    dy5D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2], dy.shape[3]]);
    xShape5D = [1, xShape[0], xShape[1], xShape[2], xShape[3]];
  }
  const inDepth = xShape5D[4];
  const outDepth = dy5D.shape[4];
  assert(
    xShape5D.length === 5,
    () => `Error in conv3dDerInput: inShape must be length 5, but got length ${xShape5D.length}.`
  );
  assert(
    dy5D.rank === 5,
    () => `Error in conv3dDerInput: dy must be rank 5, but got rank ${dy5D.rank}`
  );
  assert(
    filter.rank === 5,
    () => `Error in conv3dDerInput: filter must be rank 5, but got rank ${filter.rank}`
  );
  assert(
    inDepth === filter.shape[3],
    () => `Error in conv3dDerInput: depth of input (${inDepth}) must match input depth for filter ${filter.shape[3]}.`
  );
  assert(
    outDepth === filter.shape[4],
    () => `Error in conv3dDerInput: depth of output (${outDepth}) must match output depth for filter ${filter.shape[4]}.`
  );
  const inputs = { dy: dy5D, filter };
  const attrs = { pad: pad3, strides, inputShape: xShape5D };
  const res = ENGINE.runKernel(
    Conv3DBackpropInputV2,
    inputs,
    attrs
  );
  if (reshapedTo5D) {
    return reshape(
      res,
      [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]
    );
  }
  return res;
}
var conv3DBackpropInput = op({ conv3DBackpropInput_ });

// src/tfjs-core/src/ops/conv3d_transpose.ts
function conv3dTranspose_(x, filter, outputShape, strides, pad3) {
  const $x = convertToTensor(x, "x", "conv3dTranspose");
  const $filter = convertToTensor(filter, "filter", "conv3dTranspose");
  return conv3DBackpropInput(outputShape, $x, $filter, strides, pad3);
}
var conv3dTranspose = op({ conv3dTranspose_ });

// src/tfjs-core/src/ops/cos.ts
function cos_(x) {
  const $x = convertToTensor(x, "x", "cos", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Cos, inputs);
}
var cos = op({ cos_ });

// src/tfjs-core/src/ops/cosh.ts
function cosh_(x) {
  const $x = convertToTensor(x, "x", "cosh", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Cosh, inputs);
}
var cosh = op({ cosh_ });

// src/tfjs-core/src/ops/cumprod.ts
function cumprod_(x, axis = 0, exclusive = false, reverse3 = false) {
  const $x = convertToTensor(x, "x", "cumprod");
  const inputs = { x: $x };
  const attrs = { axis, exclusive, reverse: reverse3 };
  return ENGINE.runKernel(
    Cumprod,
    inputs,
    attrs
  );
}
var cumprod = op({ cumprod_ });

// src/tfjs-core/src/ops/cumsum.ts
function cumsum_(x, axis = 0, exclusive = false, reverse3 = false) {
  const $x = convertToTensor(x, "x", "cumsum");
  const inputs = { x: $x };
  const attrs = { axis, exclusive, reverse: reverse3 };
  return ENGINE.runKernel(
    Cumsum,
    inputs,
    attrs
  );
}
var cumsum = op({ cumsum_ });

// src/tfjs-core/src/ops/dense_bincount.ts
function denseBincount_(x, weights, size, binaryOutput = false) {
  const $x = convertToTensor(x, "x", "denseBincount");
  const $weights = convertToTensor(weights, "weights", "denseBincount");
  assert(
    $x.dtype === "int32",
    () => `Error in denseBincount: input dtype must be int32, but got ${$x.dtype}`
  );
  assert(
    $x.rank <= 2,
    () => `Error in denseBincount: input must be at most rank 2, but got rank ${$x.rank}.`
  );
  assert(size >= 0, () => `size must be non-negative, but got ${size}.`);
  assert(
    $weights.size === $x.size || $weights.size === 0,
    () => `Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${$x.shape}, weights shape: ${$weights.shape}.`
  );
  const inputs = { x: $x, weights: $weights };
  const attrs = { size, binaryOutput };
  return ENGINE.runKernel(
    DenseBincount,
    inputs,
    attrs
  );
}
var denseBincount = op({ denseBincount_ });

// src/tfjs-core/src/ops/depth_to_space.ts
function depthToSpace_(x, blockSize, dataFormat = "NHWC") {
  const $x = convertToTensor(x, "x", "depthToSpace", "float32");
  const inputHeight = dataFormat === "NHWC" ? $x.shape[1] : $x.shape[2];
  const inputWidth = dataFormat === "NHWC" ? $x.shape[2] : $x.shape[3];
  const inputDepth = dataFormat === "NHWC" ? $x.shape[3] : $x.shape[1];
  assert(
    blockSize > 1,
    () => `blockSize should be > 1 for depthToSpace, but was: ${blockSize}`
  );
  assert(
    inputHeight * blockSize >= 0,
    () => `Negative dimension size caused by overflow when multiplying
    ${inputHeight} and ${blockSize}  for depthToSpace with input shape
    ${$x.shape}`
  );
  assert(
    inputWidth * blockSize >= 0,
    () => `Negative dimension size caused by overflow when multiplying
    ${inputWidth} and ${blockSize} for depthToSpace with input shape
        ${$x.shape}`
  );
  assert(
    inputDepth % (blockSize * blockSize) === 0,
    () => `Dimension size must be evenly divisible by ${blockSize * blockSize} but is ${inputDepth} for depthToSpace with input shape ${$x.shape}`
  );
  const inputs = { x: $x };
  const attrs = { blockSize, dataFormat };
  return ENGINE.runKernel(
    DepthToSpace,
    inputs,
    attrs
  );
}
var depthToSpace = op({ depthToSpace_ });

// src/tfjs-core/src/ops/depthwise_conv2d.ts
function depthwiseConv2d_(x, filter, strides, pad3, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode) {
  const $x = convertToTensor(x, "x", "depthwiseConv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "depthwiseConv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(
    x4D.rank === 4,
    () => `Error in depthwiseConv2d: input must be rank 4, but got rank ${x4D.rank}.`
  );
  assert(
    $filter.rank === 4,
    () => `Error in depthwiseConv2d: filter must be rank 4, but got rank ${$filter.rank}.`
  );
  const inChannels = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  assert(
    inChannels === $filter.shape[2],
    () => `Error in depthwiseConv2d: number of input channels (${inChannels}) must match the inChannels dimension in filter ${$filter.shape[2]}.`
  );
  checkPadOnDimRoundingMode("depthwiseConv2d", pad3, dimRoundingMode);
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad3, dataFormat, dilations, dimRoundingMode };
  const res = ENGINE.runKernel(
    DepthwiseConv2dNative,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var depthwiseConv2d = op({ depthwiseConv2d_ });

// src/tfjs-core/src/ops/diag.ts
function diag_(x) {
  const $x = convertToTensor(x, "x", "diag");
  const inputs = { x: $x };
  return ENGINE.runKernel(Diag, inputs);
}
var diag = op({ diag_ });

// src/tfjs-core/src/ops/dilation2d.ts
function dilation2d_(x, filter, strides, pad3, dilations = [1, 1], dataFormat = "NHWC") {
  const $x = convertToTensor(x, "x", "dilation2d");
  const $filter = convertToTensor(filter, "filter", "dilation2d");
  assert(
    $x.rank === 3 || $x.rank === 4,
    () => `Error in dilation2d: input must be rank 3 or 4, but got rank ${$x.rank}.`
  );
  assert(
    $filter.rank === 3,
    () => `Error in dilation2d: filter must be rank 3, but got rank ${$filter.rank}.`
  );
  assert(
    dataFormat === "NHWC",
    () => `Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${dataFormat}`
  );
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    reshapedTo4D = true;
  }
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad3, dilations };
  const res = ENGINE.runKernel(
    Dilation2D,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var dilation2d = op({ dilation2d_ });

// src/tfjs-core/src/ops/equal.ts
function equal_(a, b) {
  let $a = convertToTensor(a, "a", "equal", "string_or_numeric");
  let $b = convertToTensor(b, "b", "equal", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Equal, inputs);
}
var equal = op({ equal_ });

// src/tfjs-core/src/ops/where.ts
function where_(condition, a, b) {
  const $a = convertToTensor(a, "a", "where");
  const $b = convertToTensor(b, "b", "where");
  const $condition = convertToTensor(condition, "condition", "where", "bool");
  const broadcastShape = assertAndGetBroadcastShape(
    assertAndGetBroadcastShape($condition.shape, $a.shape),
    $b.shape
  );
  const $broadcastedCondition = broadcastTo($condition, broadcastShape);
  const $broadcastedA = broadcastTo($a, broadcastShape);
  const $broadcastedB = broadcastTo($b, broadcastShape);
  const inputs = {
    condition: $broadcastedCondition,
    t: $broadcastedA,
    e: $broadcastedB
  };
  return ENGINE.runKernel(Select, inputs);
}
var where = op({ where_ });

// src/tfjs-core/src/ops/zeros_like.ts
function zerosLike_(x) {
  const $x = convertToTensor(x, "x", "zerosLike");
  const inputs = { x: $x };
  return ENGINE.runKernel(ZerosLike, inputs);
}
var zerosLike = op({ zerosLike_ });

// src/tfjs-core/src/ops/div_no_nan.ts
function divNoNan_(a, b) {
  let $a = convertToTensor(a, "a", "div");
  let $b = convertToTensor(b, "b", "div");
  [$a, $b] = makeTypesMatch($a, $b);
  const divResult = div($a, $b);
  const zeros3 = zerosLike(divResult);
  const bEqualsZero = equal($b, zeros3);
  return where(bEqualsZero, zeros3, divResult);
}
var divNoNan = op({ divNoNan_ });

// src/tfjs-core/src/ops/dot.ts
function dot_(t1, t2) {
  const $t1 = convertToTensor(t1, "t1", "dot");
  const $t2 = convertToTensor(t2, "t2", "dot");
  assert(
    ($t1.rank === 1 || $t1.rank === 2) && ($t2.rank === 1 || $t2.rank === 2),
    () => `Error in dot: inputs must all be rank 1 or 2, but got ranks ${$t1.rank} and ${$t2.rank}.`
  );
  const t1Inner = $t1.rank === 1 ? $t1.size : $t1.shape[1];
  const t2Inner = $t2.rank === 1 ? $t2.size : $t2.shape[0];
  assert(
    t1Inner === t2Inner,
    () => `Error in dot: inner dimensions of inputs must match, but got ${t1Inner} and ${t2Inner}.`
  );
  if ($t1.rank === 1 && $t2.rank === 1) {
    const t12D = reshape($t1, [1, -1]);
    const t22D = reshape($t2, [-1, 1]);
    const t1t2 = matMul(t12D, t22D);
    return reshape(t1t2, []);
  } else if ($t1.rank === 1 && $t2.rank === 2) {
    const t12D = reshape($t1, [1, -1]);
    const t22D = reshape($t2, [$t2.shape[0], $t2.shape[1]]);
    const t1t2 = matMul(t12D, t22D);
    return reshape(t1t2, [t1t2.size]);
  } else if ($t1.rank === 2 && $t2.rank === 1) {
    const t22D = reshape($t2, [-1, 1]);
    const t1t2 = matMul($t1, t22D);
    return reshape(t1t2, [t1t2.size]);
  } else {
    const t22D = reshape($t2, [$t2.shape[0], $t2.shape[1]]);
    const t1t2 = matMul($t1, t22D);
    return t1t2;
  }
}
var dot = op({ dot_ });

// src/tfjs-core/src/ops/einsum.ts
function einsum_(equation, ...tensors) {
  const $tensors = tensors.map((t, i) => convertToTensor(t, `tensors${i}`, "einsum"));
  const attrs = { equation };
  return ENGINE.runKernel(
    Einsum,
    $tensors,
    attrs
  );
}
var einsum = op({ einsum_ });

// src/tfjs-core/src/ops/elu.ts
function elu_(x) {
  const $x = convertToTensor(x, "x", "elu", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Elu, inputs);
}
var elu = op({ elu_ });

// src/tfjs-core/src/ops/erf.ts
function erf_(x) {
  let $x = convertToTensor(x, "x", "erf");
  assert(
    $x.dtype === "int32" || $x.dtype === "float32",
    () => "Input dtype must be `int32` or `float32`."
  );
  if ($x.dtype === "int32") {
    $x = cast($x, "float32");
  }
  const inputs = { x: $x };
  return ENGINE.runKernel(Erf, inputs);
}
var erf = op({ erf_ });

// src/tfjs-core/src/ops/axis_util.ts
function axesAreInnerMostDims(axes, rank) {
  for (let i = 0; i < axes.length; ++i) {
    if (axes[axes.length - i - 1] !== rank - 1 - i) {
      return false;
    }
  }
  return true;
}
function combineLocations(outputLoc, reduceLoc, axes) {
  const rank = outputLoc.length + reduceLoc.length;
  const loc = [];
  let outIdx = 0;
  let reduceIdx = 0;
  for (let dim = 0; dim < rank; dim++) {
    if (axes.indexOf(dim) === -1) {
      loc.push(outputLoc[outIdx++]);
    } else {
      loc.push(reduceLoc[reduceIdx++]);
    }
  }
  return loc;
}
function computeOutAndReduceShapes(aShape, axes) {
  const outShape = [];
  const rank = aShape.length;
  for (let dim = 0; dim < rank; dim++) {
    if (axes.indexOf(dim) === -1) {
      outShape.push(aShape[dim]);
    }
  }
  const reduceShape = axes.map((dim) => aShape[dim]);
  return [outShape, reduceShape];
}
function expandShapeToKeepDim(shape, axes) {
  const reduceSubShape = axes.map((x) => 1);
  return combineLocations(shape, reduceSubShape, axes);
}
function assertAxesAreInnerMostDims(msg, axes, rank) {
  assert(
    axesAreInnerMostDims(axes, rank),
    () => `${msg} supports only inner-most axes for now. Got axes ${axes} and rank-${rank} input.`
  );
}
function getAxesPermutation(axes, rank) {
  if (axesAreInnerMostDims(axes, rank)) {
    return null;
  }
  const result = [];
  for (let i = 0; i < rank; ++i) {
    if (axes.indexOf(i) === -1) {
      result.push(i);
    }
  }
  axes.forEach((axis) => result.push(axis));
  return result;
}
function getUndoAxesPermutation(axes) {
  return axes.map((axis, i) => [i, axis]).sort((a, b) => a[1] - b[1]).map((x) => x[0]);
}
function getInnerMostAxes(numAxes, rank) {
  const res = [];
  for (let i = rank - numAxes; i < rank; ++i) {
    res.push(i);
  }
  return res;
}

// src/tfjs-core/src/ops/max.ts
function max_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "max");
  const inputs = { x: $x };
  const attrs = { reductionIndices: axis, keepDims };
  return ENGINE.runKernel(
    Max,
    inputs,
    attrs
  );
}
var max = op({ max_ });

// src/tfjs-core/src/ops/min.ts
function min_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "min");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(
    Min,
    inputs,
    attrs
  );
}
var min = op({ min_ });

// src/tfjs-core/src/ops/pow.ts
function pow_(base, exp3) {
  let $base = convertToTensor(base, "base", "pow");
  let $exp = convertToTensor(exp3, "exp", "pow");
  [$base, $exp] = makeTypesMatch($base, $exp);
  const inputs = { a: $base, b: $exp };
  return ENGINE.runKernel(Pow, inputs);
}
var pow = op({ pow_ });

// src/tfjs-core/src/ops/scalar.ts
function scalar(value, dtype) {
  if ((isTypedArray(value) && dtype !== "string" || Array.isArray(value)) && dtype !== "complex64") {
    throw new Error(
      "Error creating a new Scalar: value must be a primitive (number|boolean|string)"
    );
  }
  if (dtype === "string" && isTypedArray(value) && !(value instanceof Uint8Array)) {
    throw new Error(
      "When making a scalar from encoded string, the value must be `Uint8Array`."
    );
  }
  const shape = [];
  const inferredShape = [];
  return makeTensor(value, shape, inferredShape, dtype);
}

// src/tfjs-core/src/ops/sqrt.ts
function sqrt_(x) {
  const $x = convertToTensor(x, "x", "sqrt", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sqrt, inputs);
}
var sqrt = op({ sqrt_ });

// src/tfjs-core/src/ops/square.ts
function square_(x) {
  const $x = convertToTensor(x, "x", "square");
  const attrs = {};
  return ENGINE.runKernel("Square", { x: $x }, attrs);
}
var square = op({ square_ });

// src/tfjs-core/src/ops/sum.ts
function sum_(x, axis = null, keepDims = false) {
  let $x = convertToTensor(x, "x", "sum");
  if ($x.dtype === "bool") {
    $x = cast($x, "int32");
  }
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(
    Sum,
    inputs,
    attrs
  );
}
var sum2 = op({ sum_ });

// src/tfjs-core/src/ops/norm.ts
function norm_(x, ord = "euclidean", axis = null, keepDims = false) {
  x = convertToTensor(x, "x", "norm");
  const norm2 = normImpl(x, ord, axis);
  let keepDimsShape = norm2.shape;
  if (keepDims) {
    const axes = parseAxisParam(axis, x.shape);
    keepDimsShape = expandShapeToKeepDim(norm2.shape, axes);
  }
  return reshape(norm2, keepDimsShape);
}
function normImpl(x, p, axis = null) {
  if (x.rank === 0) {
    return abs(x);
  }
  if (x.rank !== 1 && axis === null) {
    return normImpl(reshape(x, [-1]), p, axis);
  }
  if (x.rank === 1 || typeof axis === "number" || Array.isArray(axis) && axis.length === 1) {
    if (p === 1) {
      return sum2(abs(x), axis);
    }
    if (p === Infinity) {
      return max(abs(x), axis);
    }
    if (p === -Infinity) {
      return min(abs(x), axis);
    }
    if (p === "euclidean" || p === 2) {
      return sqrt(sum2(pow(abs(x), scalar(2, "int32")), axis));
    }
    throw new Error(`Error in norm: invalid ord value: ${p}`);
  }
  if (Array.isArray(axis) && axis.length === 2) {
    if (p === 1) {
      return max(sum2(abs(x), axis[0]), axis[1] - 1);
    }
    if (p === Infinity) {
      return max(sum2(abs(x), axis[1]), axis[0]);
    }
    if (p === -Infinity) {
      return min(sum2(abs(x), axis[1]), axis[0]);
    }
    if (p === "fro" || p === "euclidean") {
      return sqrt(sum2(square(x), axis));
    }
    throw new Error(`Error in norm: invalid ord value: ${p}`);
  }
  throw new Error(`Error in norm: invalid axis: ${axis}`);
}
var norm = op({ norm_ });

// src/tfjs-core/src/ops/euclidean_norm.ts
function euclideanNorm_(x, axis = null, keepDims = false) {
  return norm(x, "euclidean", axis, keepDims);
}
var euclideanNorm = op({ euclideanNorm_ });

// src/tfjs-core/src/ops/exp.ts
function exp_(x) {
  const $x = convertToTensor(x, "x", "exp");
  const inputs = { x: $x };
  return ENGINE.runKernel(Exp, inputs);
}
var exp = op({ exp_ });

// src/tfjs-core/src/ops/expand_dims.ts
function expandDims_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "expandDims", "string_or_numeric");
  assert(axis <= $x.rank, () => "Axis must be <= rank of the tensor");
  const inputs = { input: $x };
  const attrs = { dim: axis };
  return ENGINE.runKernel(
    ExpandDims,
    inputs,
    attrs
  );
}
var expandDims = op({ expandDims_ });

// src/tfjs-core/src/ops/expm1.ts
function expm1_(x) {
  const $x = convertToTensor(x, "x", "expm1");
  const inputs = { x: $x };
  return ENGINE.runKernel(Expm1, inputs);
}
var expm1 = op({ expm1_ });

// src/tfjs-core/src/ops/tile.ts
function tile_(x, reps) {
  const $x = convertToTensor(x, "x", "tile", "string_or_numeric");
  assert(
    $x.rank === reps.length,
    () => `Error in transpose: rank of input ${$x.rank} must match length of reps ${reps}.`
  );
  const inputs = { x: $x };
  const attrs = { reps };
  return ENGINE.runKernel(
    Tile,
    inputs,
    attrs
  );
}
var tile = op({ tile_ });

// src/tfjs-core/src/ops/eye.ts
function eye_(numRows, numColumns, batchShape, dtype = "float32") {
  if (numColumns == null) {
    numColumns = numRows;
  }
  const buff = buffer([numRows, numColumns], dtype);
  const n = numRows <= numColumns ? numRows : numColumns;
  for (let i = 0; i < n; ++i) {
    buff.set(1, i, i);
  }
  const out = reshape(buff.toTensor(), [numRows, numColumns]);
  if (batchShape == null) {
    return out;
  } else {
    if (batchShape.length === 1) {
      return tile(expandDims(out, 0), [batchShape[0], 1, 1]);
    } else if (batchShape.length === 2) {
      return tile(
        expandDims(expandDims(out, 0), 0),
        [batchShape[0], batchShape[1], 1, 1]
      );
    } else if (batchShape.length === 3) {
      return tile(expandDims(expandDims(expandDims(out, 0), 0), 0), [
        batchShape[0],
        batchShape[1],
        batchShape[2],
        1,
        1
      ]);
    } else {
      throw new Error(
        `eye() currently supports only 1D and 2D batchShapes, but received ${batchShape.length}D.`
      );
    }
  }
}
var eye = op({ eye_ });

// src/tfjs-core/src/ops/fill.ts
function fill(shape, value, dtype) {
  const attrs = { shape, value, dtype };
  return ENGINE.runKernel(Fill, {}, attrs);
}

// src/tfjs-core/src/ops/floor.ts
function floor_(x) {
  const $x = convertToTensor(x, "x", "floor", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Floor, inputs);
}
var floor = op({ floor_ });

// src/tfjs-core/src/ops/gather.ts
function gather_(x, indices, axis = 0, batchDims = 0) {
  const $x = convertToTensor(x, "x", "gather");
  const $indices = convertToTensor(indices, "indices", "gather", "int32");
  const inputs = { x: $x, indices: $indices };
  const attrs = { axis, batchDims };
  return ENGINE.runKernel(
    GatherV2,
    inputs,
    attrs
  );
}
var gather = op({ gather_ });

// src/tfjs-core/src/ops/greater.ts
function greater_(a, b) {
  let $a = convertToTensor(a, "a", "greater", "string_or_numeric");
  let $b = convertToTensor(b, "b", "greater", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Greater, inputs);
}
var greater = op({ greater_ });

// src/tfjs-core/src/ops/greater_equal.ts
function greaterEqual_(a, b) {
  let $a = convertToTensor(a, "a", "greaterEqual", "string_or_numeric");
  let $b = convertToTensor(b, "b", "greaterEqual", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(GreaterEqual, inputs);
}
var greaterEqual = op({ greaterEqual_ });

// src/tfjs-core/src/ops/is_finite.ts
function isFinite_(x) {
  const $x = convertToTensor(x, "x", "isFinite");
  const inputs = { x: $x };
  return ENGINE.runKernel(IsFinite, inputs);
}
var isFinite2 = op({ isFinite_ });

// src/tfjs-core/src/ops/is_inf.ts
function isInf_(x) {
  const $x = convertToTensor(x, "x", "isInf");
  const inputs = { x: $x };
  return ENGINE.runKernel(IsInf, inputs);
}
var isInf = op({ isInf_ });

// src/tfjs-core/src/ops/is_nan.ts
function isNaN_(x) {
  const $x = convertToTensor(x, "x", "isNaN");
  const inputs = { x: $x };
  return ENGINE.runKernel(IsNan, inputs);
}
var isNaN2 = op({ isNaN_ });

// src/tfjs-core/src/ops/leaky_relu.ts
function leakyRelu_(x, alpha = 0.2) {
  const $x = convertToTensor(x, "x", "leakyRelu");
  const inputs = { x: $x };
  const attrs = { alpha };
  return ENGINE.runKernel(
    LeakyRelu,
    inputs,
    attrs
  );
}
var leakyRelu = op({ leakyRelu_ });

// src/tfjs-core/src/ops/less.ts
function less_(a, b) {
  let $a = convertToTensor(a, "a", "less", "string_or_numeric");
  let $b = convertToTensor(b, "b", "less", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Less, inputs);
}
var less = op({ less_ });

// src/tfjs-core/src/ops/less_equal.ts
function lessEqual_(a, b) {
  let $a = convertToTensor(a, "a", "lessEqual", "string_or_numeric");
  let $b = convertToTensor(b, "b", "lessEqual", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(LessEqual, inputs);
}
var lessEqual = op({ lessEqual_ });

// src/tfjs-core/src/ops/local_response_normalization.ts
function localResponseNormalization_(x, depthRadius = 5, bias = 1, alpha = 1, beta = 0.5) {
  const $x = convertToTensor(x, "x", "localResponseNormalization");
  assert(
    $x.rank === 4 || $x.rank === 3,
    () => `Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${$x.rank}.`
  );
  assert(
    isInt(depthRadius),
    () => `Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${depthRadius}.`
  );
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  const inputs = { x: x4D };
  const attrs = { depthRadius, bias, alpha, beta };
  const res = ENGINE.runKernel(
    LRN,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  } else {
    return res;
  }
}
var localResponseNormalization = op({ localResponseNormalization_ });

// src/tfjs-core/src/ops/log.ts
function log_(x) {
  const $x = convertToTensor(x, "x", "log", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Log, inputs);
}
var log2 = op({ log_ });

// src/tfjs-core/src/ops/log1p.ts
function log1p_(x) {
  const $x = convertToTensor(x, "x", "log1p");
  const inputs = { x: $x };
  return ENGINE.runKernel(Log1p, inputs);
}
var log1p = op({ log1p_ });

// src/tfjs-core/src/gradients.ts
function variableGrads(f, varList) {
  assert(
    isFunction(f),
    () => "The f passed in variableGrads(f) must be a function"
  );
  assert(
    varList == null || Array.isArray(varList) && varList.every((v) => v instanceof Variable),
    () => "The varList passed in variableGrads(f, varList) must be an array of variables"
  );
  const specifiedVarList = varList != null;
  if (!specifiedVarList) {
    varList = [];
    for (const varName in ENGINE.registeredVariables) {
      varList.push(ENGINE.registeredVariables[varName]);
    }
  }
  const specifiedNonTrainable = specifiedVarList ? varList.filter((variable2) => !variable2.trainable) : null;
  const originalVarCount = varList.length;
  varList = varList.filter((variable2) => variable2.trainable);
  assert(
    varList.length > 0,
    () => `variableGrads() expects at least one of the input variables to be trainable, but none of the ${originalVarCount} variables is trainable.`
  );
  const allowNoGradients = true;
  const { value, grads: grads2 } = ENGINE.gradients(f, varList, null, allowNoGradients);
  assert(
    grads2.some((g) => g != null),
    () => "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."
  );
  assert(
    value.rank === 0,
    () => `The f passed in variableGrads(f) must return a scalar, but it returned a rank-${value.rank} tensor`
  );
  const namedGrads = {};
  varList.forEach((v, i) => {
    if (grads2[i] != null) {
      namedGrads[v.name] = grads2[i];
    }
  });
  if (specifiedNonTrainable != null) {
    specifiedNonTrainable.forEach((v) => namedGrads[v.name] = null);
  }
  return { value, grads: namedGrads };
}
function customGrad(f) {
  return ENGINE.customGrad(f);
}

// src/tfjs-core/src/ops/softplus.ts
function softplus_(x) {
  const $x = convertToTensor(x, "x", "softplus");
  const inputs = { x: $x };
  return ENGINE.runKernel(Softplus, inputs);
}
var softplus = op({ softplus_ });

// src/tfjs-core/src/ops/log_sigmoid.ts
function logSigmoid_(x) {
  const $x = convertToTensor(x, "x", "logSigmoid");
  const customOp = customGrad((x2) => {
    const value = neg(softplus(neg(x2)));
    const gradFunc = (dy) => {
      const derX = mul(dy, sigmoid(neg(x2)));
      return derX;
    };
    return { value, gradFunc };
  });
  return customOp($x);
}
var logSigmoid = op({ logSigmoid_ });

// src/tfjs-core/src/ops/sub.ts
function sub_(a, b) {
  let $a = convertToTensor(a, "a", "sub");
  let $b = convertToTensor(b, "b", "sub");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Sub, inputs);
}
var sub = op({ sub_ });

// src/tfjs-core/src/ops/log_softmax.ts
function logSoftmax_(logits, axis = -1) {
  const $logits = convertToTensor(logits, "logits", "logSoftmax");
  if (axis === -1) {
    axis = $logits.rank - 1;
  }
  if (axis !== $logits.rank - 1) {
    throw Error(
      `Log Softmax along a non-last dimension is not yet supported. Logits was rank ${$logits.rank} and axis was ${axis}`
    );
  }
  const customOp = customGrad((logits2, save) => {
    const keepDims = true;
    const xMax = max(logits2, axis, true);
    const shifted = sub(logits2, xMax);
    const value = sub(cast(shifted, "float32"), log2(sum2(exp(shifted), axis, keepDims)));
    save([value]);
    const gradFunc = (dy, saved) => {
      const [value2] = saved;
      const keepDims2 = true;
      const softmax3 = exp(value2);
      return sub(dy, mul(sum2(dy, axis, keepDims2), softmax3));
    };
    return { value, gradFunc };
  });
  return customOp($logits);
}
var logSoftmax = op({ logSoftmax_ });

// src/tfjs-core/src/ops/log_sum_exp.ts
function logSumExp_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "logSumExp");
  const axes = parseAxisParam(axis, $x.shape);
  const xMax = max($x, axes, true);
  const a = sub($x, xMax);
  const b = exp(a);
  const c = sum2(b, axes);
  const d = log2(c);
  const res = add3(reshape(xMax, d.shape), d);
  if (keepDims) {
    const newShape = expandShapeToKeepDim(res.shape, axes);
    return reshape(res, newShape);
  }
  return res;
}
var logSumExp = op({ logSumExp_ });

// src/tfjs-core/src/ops/logical_and.ts
function logicalAnd_(a, b) {
  const $a = convertToTensor(a, "a", "logicalAnd", "bool");
  const $b = convertToTensor(b, "b", "logicalAnd", "bool");
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(LogicalAnd, inputs);
}
var logicalAnd = op({ logicalAnd_ });

// src/tfjs-core/src/ops/logical_not.ts
function logicalNot_(x) {
  const $x = convertToTensor(x, "x", "logicalNot", "bool");
  const inputs = { x: $x };
  return ENGINE.runKernel(LogicalNot, inputs);
}
var logicalNot = op({ logicalNot_ });

// src/tfjs-core/src/ops/logical_or.ts
function logicalOr_(a, b) {
  const $a = convertToTensor(a, "a", "logicalOr", "bool");
  const $b = convertToTensor(b, "b", "logicalOr", "bool");
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(LogicalOr, inputs);
}
var logicalOr = op({ logicalOr_ });

// src/tfjs-core/src/ops/logical_xor.ts
function logicalXor_(a, b) {
  const $a = convertToTensor(a, "a", "logicalXor", "bool");
  const $b = convertToTensor(b, "b", "logicalXor", "bool");
  assertAndGetBroadcastShape($a.shape, $b.shape);
  return logicalAnd(logicalOr(a, b), logicalNot(logicalAnd(a, b)));
}
var logicalXor = op({ logicalXor_ });

// src/tfjs-core/src/ops/search_sorted.ts
var INT32_MAX = 2147483648;
function searchSorted_(sortedSequence, values, side = "left") {
  const $sortedSequence = convertToTensor(sortedSequence, "sortedSequence", "searchSorted");
  const $values = convertToTensor(values, "values", "searchSorted");
  const sequenceSize = $sortedSequence.shape[$sortedSequence.shape.length - 1];
  const valuesSize = $values.shape[$values.shape.length - 1];
  const $sortedSequence2D = reshape($sortedSequence, [-1, sequenceSize]);
  const $values2D = reshape($values, [-1, valuesSize]);
  if ($sortedSequence2D.rank < 2) {
    throw new Error(`Sorted input argument must be at least 2-dimensional`);
  }
  if ($sortedSequence2D.shape[0] !== $values2D.shape[0]) {
    throw new Error(
      `Leading dimension of 'sortedSequence' and 'values' must match.`
    );
  }
  if (sizeFromShape($values2D.shape) >= INT32_MAX) {
    throw new Error(`values tensor size must less than ${INT32_MAX}`);
  }
  if ($sortedSequence2D.shape[1] >= INT32_MAX) {
    throw new Error(`trailing dim_size must less than ${INT32_MAX} for int32 output type, was ${$sortedSequence2D.shape[1]}`);
  }
  const inputs = {
    sortedSequence: $sortedSequence2D,
    values: $values2D
  };
  const attrs = { side };
  return ENGINE.runKernel(SearchSorted, inputs, attrs);
}
var searchSorted = op({ searchSorted_ });

// src/tfjs-core/src/ops/max_pool.ts
function maxPool_(x, filterSize, strides, pad3, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "maxPool");
  const dilations = 1;
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(
    x4D.rank === 4,
    () => `Error in maxPool: input must be rank 4 but got rank ${x4D.rank}.`
  );
  assert(
    eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  checkPadOnDimRoundingMode("maxPool", pad3, dimRoundingMode);
  const inputs = { x: x4D };
  const attrs = { filterSize, strides, pad: pad3, dimRoundingMode };
  const res = ENGINE.runKernel(
    MaxPool,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var maxPool = op({ maxPool_ });

// src/tfjs-core/src/ops/max_pool_3d.ts
function maxPool3d_(x, filterSize = [1, 1, 1], strides, pad3, dimRoundingMode, dataFormat = "NDHWC") {
  const $x = convertToTensor(x, "x", "maxPool3d");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(
    x5D.rank === 5,
    () => `Error in maxPool3d: x must be rank 5 but got rank ${x5D.rank}.`
  );
  assert(
    dataFormat === "NDHWC",
    () => `Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${dataFormat}`
  );
  checkPadOnDimRoundingMode("maxPool3d", pad3, dimRoundingMode);
  const inputs = { x: x5D };
  const attrs = { filterSize, strides, pad: pad3, dimRoundingMode, dataFormat };
  const res = ENGINE.runKernel(
    MaxPool3D,
    inputs,
    attrs
  );
  if (reshapedTo5D) {
    return reshape(
      res,
      [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]
    );
  }
  return res;
}
var maxPool3d = op({ maxPool3d_ });

// src/tfjs-core/src/ops/max_pool_with_argmax.ts
function maxPoolWithArgmax_(x, filterSize, strides, pad3, includeBatchInIndex = false) {
  const $x = convertToTensor(x, "x", "maxPoolWithArgmax");
  const inputs = { x: $x };
  const attrs = { filterSize, strides, pad: pad3, includeBatchInIndex };
  const result = ENGINE.runKernel(
    MaxPoolWithArgmax,
    inputs,
    attrs
  );
  return { result: result[0], indexes: result[1] };
}
var maxPoolWithArgmax = op({ maxPoolWithArgmax_ });

// src/tfjs-core/src/ops/maximum.ts
function maximum_(a, b) {
  let $a = convertToTensor(a, "a", "maximum");
  let $b = convertToTensor(b, "b", "maximum");
  [$a, $b] = makeTypesMatch($a, $b);
  if ($a.dtype === "bool") {
    $a = cast($a, "int32");
    $b = cast($b, "int32");
  }
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Maximum, inputs);
}
var maximum = op({ maximum_ });

// src/tfjs-core/src/ops/mean.ts
function mean_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "mean");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(
    Mean,
    inputs,
    attrs
  );
}
var mean = op({ mean_ });

// src/tfjs-core/src/ops/zeros.ts
function zeros(shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real3 = zeros(shape, "float32");
    const imag2 = zeros(shape, "float32");
    return complex(real3, imag2);
  }
  const values = makeZerosTypedArray(sizeFromShape(shape), dtype);
  return ENGINE.makeTensor(values, shape, dtype);
}

// src/tfjs-core/src/ops/ones.ts
function ones2(shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real3 = ones2(shape, "float32");
    const imag2 = zeros(shape, "float32");
    return complex(real3, imag2);
  }
  const values = makeOnesTypedArray(sizeFromShape(shape), dtype);
  return ENGINE.makeTensor(values, shape, dtype);
}

// src/tfjs-core/src/ops/minimum.ts
function minimum_(a, b) {
  let $a = convertToTensor(a, "a", "minimum");
  let $b = convertToTensor(b, "b", "minimum");
  [$a, $b] = makeTypesMatch($a, $b);
  if ($a.dtype === "bool") {
    $a = cast($a, "int32");
    $b = cast($b, "int32");
  }
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Minimum, inputs);
}
var minimum = op({ minimum_ });

// src/tfjs-core/src/ops/mirror_pad.ts
function mirrorPad_(x, paddings, mode) {
  assert(
    mode === "reflect" || mode === "symmetric",
    () => `Invalid mode. Mode must be either reflect or symmetric. Got ${mode}.`
  );
  const $x = convertToTensor(x, "x", "mirrorPad");
  if ($x.rank === 0) {
    throw new Error(
      "mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad"
    );
  }
  assert(
    paddings.length === $x.rank,
    () => `Padding doesn't match input. Must be ${$x.rank}. Got ${paddings.length}.`
  );
  const shapeOffset = mode === "reflect" ? 1 : 0;
  for (let i = 0; i < $x.rank; i++) {
    assert(
      paddings[i].length === 2,
      () => `Invalid number of paddings. Must be length of 2 each.`
    );
    assert(
      paddings[i][0] >= 0 && paddings[i][0] <= $x.shape[i] - shapeOffset && paddings[i][1] >= 0 && paddings[i][1] <= $x.shape[i] - shapeOffset,
      () => `Padding in dimension ${i} cannot be greater than or equal to ${$x.shape[i] - shapeOffset} or less than 0 for input of shape ${$x.shape}`
    );
  }
  const attrs = { paddings, mode };
  const inputs = { x: $x };
  return ENGINE.runKernel(
    MirrorPad,
    inputs,
    attrs
  );
}
var mirrorPad = op({ mirrorPad_ });

// src/tfjs-core/src/ops/mod.ts
function mod_(a, b) {
  let $a = convertToTensor(a, "a", "mod");
  let $b = convertToTensor(b, "b", "mod");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Mod, inputs);
}
var mod = op({ mod_ });

// src/tfjs-core/src/ops/moments.ts
function moments_(x, axis = null, keepDims = false) {
  x = convertToTensor(x, "x", "moments");
  const axes = parseAxisParam(axis, x.shape);
  const xMean = mean(x, axes, keepDims);
  let keepDimsShape = xMean.shape;
  if (!keepDims) {
    keepDimsShape = expandShapeToKeepDim(xMean.shape, axes);
  }
  const devSquared = square(sub(cast(x, "float32"), reshape(xMean, keepDimsShape)));
  const variance = mean(devSquared, axes, keepDims);
  return { mean: xMean, variance };
}
var moments = op({ moments_ });

// src/tfjs-core/src/ops/multi_rnn_cell.ts
function multiRNNCell_(lstmCells, data, c, h) {
  const $data = convertToTensor(data, "data", "multiRNNCell");
  const $c = convertToTensorArray(c, "c", "multiRNNCell");
  const $h = convertToTensorArray(h, "h", "multiRNNCell");
  let input = $data;
  const newStates = [];
  for (let i = 0; i < lstmCells.length; i++) {
    const output = lstmCells[i](input, $c[i], $h[i]);
    newStates.push(output[0]);
    newStates.push(output[1]);
    input = output[1];
  }
  const newC = [];
  const newH = [];
  for (let i = 0; i < newStates.length; i += 2) {
    newC.push(newStates[i]);
    newH.push(newStates[i + 1]);
  }
  return [newC, newH];
}
var multiRNNCell = op({ multiRNNCell_ });

// src/tfjs-core/src/ops/multinomial.ts
function multinomial_(logits, numSamples, seed, normalized = false) {
  const $logits = convertToTensor(logits, "logits", "multinomial");
  const numOutcomes = $logits.size;
  const origRank = $logits.rank;
  if (numOutcomes < 2) {
    throw new Error(
      `Error in multinomial: you need at least 2 outcomes, but got ${numOutcomes}.`
    );
  }
  if (origRank > 2) {
    throw new Error(`Rank of probabilities must be 1 or 2, but is ${origRank}`);
  }
  seed = seed || Math.random();
  const logits2D = origRank === 1 ? reshape($logits, [1, -1]) : $logits;
  const inputs = { logits: logits2D };
  const attrs = { numSamples, seed, normalized };
  const res = ENGINE.runKernel(
    Multinomial,
    inputs,
    attrs
  );
  return origRank === 1 ? reshape(res, [res.size]) : res;
}
var multinomial = op({ multinomial_ });

// src/tfjs-core/src/ops/not_equal.ts
function notEqual_(a, b) {
  let $a = convertToTensor(a, "a", "notEqual", "string_or_numeric");
  let $b = convertToTensor(b, "b", "notEqual", "string_or_numeric");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(NotEqual, inputs);
}
var notEqual = op({ notEqual_ });

// src/tfjs-core/src/ops/ones_like.ts
function onesLike_(x) {
  const $x = convertToTensor(x, "x", "onesLike");
  const inputs = { x: $x };
  return ENGINE.runKernel(OnesLike, inputs);
}
var onesLike = op({ onesLike_ });

// src/tfjs-core/src/ops/outer_product.ts
function outerProduct_(v1, v2) {
  const $v1 = convertToTensor(v1, "v1", "outerProduct");
  const $v2 = convertToTensor(v2, "v2", "outerProduct");
  assert(
    $v1.rank === 1 && $v2.rank === 1,
    () => `Error in outerProduct: inputs must be rank 1, but got ranks ${$v1.rank} and ${$v2.rank}.`
  );
  const v12D = reshape($v1, [-1, 1]);
  const v22D = reshape($v2, [1, -1]);
  return matMul(v12D, v22D);
}
var outerProduct = op({ outerProduct_ });

// src/tfjs-core/src/ops/pad.ts
function pad_(x, paddings, constantValue = 0) {
  const $x = convertToTensor(x, "x", "pad");
  if ($x.rank === 0) {
    throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
  }
  const attrs = { paddings, constantValue };
  const inputs = { x: $x };
  return ENGINE.runKernel(
    PadV2,
    inputs,
    attrs
  );
}
var pad = op({ pad_ });

// src/tfjs-core/src/ops/pad1d.ts
function pad1d_(x, paddings, constantValue = 0) {
  assert(
    paddings.length === 2,
    () => "Invalid number of paddings. Must be length of 2."
  );
  return pad(x, [paddings], constantValue);
}
var pad1d = op({ pad1d_ });

// src/tfjs-core/src/ops/pad2d.ts
function pad2d_(x, paddings, constantValue = 0) {
  assert(
    paddings.length === 2 && paddings[0].length === 2 && paddings[1].length === 2,
    () => "Invalid number of paddings. Must be length of 2 each."
  );
  return pad(x, paddings, constantValue);
}
var pad2d = op({ pad2d_ });

// src/tfjs-core/src/ops/pad3d.ts
function pad3d_(x, paddings, constantValue = 0) {
  assert(
    paddings.length === 3 && paddings[0].length === 2 && paddings[1].length === 2 && paddings[2].length === 2,
    () => "Invalid number of paddings. Must be length of 2 each."
  );
  return pad(x, paddings, constantValue);
}
var pad3d = op({ pad3d_ });

// src/tfjs-core/src/ops/pad4d.ts
function pad4d_(x, paddings, constantValue = 0) {
  assert(
    paddings.length === 4 && paddings[0].length === 2 && paddings[1].length === 2 && paddings[2].length === 2 && paddings[3].length === 2,
    () => "Invalid number of paddings. Must be length of 2 each."
  );
  return pad(x, paddings, constantValue);
}
var pad4d = op({ pad4d_ });

// src/tfjs-core/src/ops/space_to_batch_nd.ts
function spaceToBatchND_(x, blockShape, paddings) {
  const $x = convertToTensor(x, "x", "spaceToBatchND");
  assert(
    $x.rank >= 1 + blockShape.length,
    () => `input rank ${$x.rank} should be > than [blockShape] ${blockShape.length}`
  );
  assert(
    paddings.length === blockShape.length,
    () => `paddings.shape[0] ${paddings.length} must be equal to [blockShape] ${blockShape.length}`
  );
  assert(
    $x.shape.reduce(
      (a, b, i) => {
        if (i > 0 && i <= blockShape.length) {
          return a && (b + paddings[i - 1][0] + paddings[i - 1][1]) % blockShape[i - 1] === 0;
        }
        return a;
      },
      true
    ),
    () => `input spatial dimensions ${$x.shape.slice(1)} with paddings ${paddings.toString()} must be divisible by blockShapes ${blockShape.toString()}`
  );
  const inputs = { x: $x };
  const attrs = { blockShape, paddings };
  return ENGINE.runKernel(
    SpaceToBatchND,
    inputs,
    attrs
  );
}
var spaceToBatchND = op({ spaceToBatchND_ });

// src/tfjs-core/src/ops/pool.ts
function pool_(input, windowShape, poolingType, pad3, dilations, strides, dimRoundingMode) {
  if (dilations == null) {
    dilations = [1, 1];
  }
  if (strides == null) {
    strides = 1;
  }
  if (pad3 === 0) {
    pad3 = "valid";
  }
  const $x = convertToTensor(input, "x", "maxPool");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(
    eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in pool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  const convInfo = computePool2DInfo(
    x4D.shape,
    windowShape,
    strides,
    dilations,
    pad3
  );
  const dilation = [convInfo.dilationHeight, convInfo.dilationWidth];
  let basePadding;
  if (pad3 === "same") {
    basePadding = withSpaceToBatchBasePaddings(
      [convInfo.filterHeight, convInfo.filterWidth],
      dilation
    );
  } else {
    basePadding = [[0, 0], [0, 0]];
  }
  const isDilationOne = dilation[0] === 1 && dilation[1] === 1;
  const [adjustedPadding, adjustedCrops] = requiredSpaceToBatchPaddings(
    [convInfo.inHeight, convInfo.inWidth],
    dilation,
    basePadding
  );
  const convertedPad = isDilationOne ? pad3 : "valid";
  const convertedX = isDilationOne ? x4D : spaceToBatchND(x4D, dilation, adjustedPadding);
  const forwardOp = poolingType === "avg" ? () => avgPool(
    convertedX,
    windowShape,
    strides,
    convertedPad,
    dimRoundingMode
  ) : () => maxPool(
    convertedX,
    windowShape,
    strides,
    convertedPad,
    dimRoundingMode
  );
  const y = forwardOp();
  const res = isDilationOne ? y : batchToSpaceND(y, dilation, adjustedCrops);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
function requiredSpaceToBatchPaddings(inputShape, blockShape, basePadding) {
  const padStart = basePadding.map((b) => b[0]);
  const origPadEnd = basePadding.map((b) => b[1]);
  const fullInputShape = inputShape.concat(padStart, origPadEnd);
  const padEndExtra = blockShape.map((b, i) => (b - fullInputShape[i] % b) % b);
  const padEnd = origPadEnd.map((s, i) => s + padEndExtra[i]);
  const paddings = blockShape.map((_, i) => [padStart[i], padEnd[i]]);
  const crops = blockShape.map((_, i) => [0, padEndExtra[i]]);
  return [paddings, crops];
}
function withSpaceToBatchBasePaddings(filterShape, dilation) {
  const dilatedFilterShape = filterShape.map((s, i) => {
    return s + (s - 1) * (dilation[i] - 1);
  });
  const padExtraShape = dilatedFilterShape.map((s) => s - 1);
  const padExtraStart = padExtraShape.map((s) => Math.floor(s / 2));
  const padExtraEnd = padExtraShape.map((s, i) => s - padExtraStart[i]);
  return padExtraShape.map((_, i) => {
    return [padExtraStart[i], padExtraEnd[i]];
  });
}
var pool = op({ pool_ });

// src/tfjs-core/src/ops/prelu.ts
function prelu_(x, alpha) {
  const $x = convertToTensor(x, "x", "prelu");
  const $alpha = convertToTensor(alpha, "alpha", "prelu");
  const inputs = { x: $x, alpha: $alpha };
  return ENGINE.runKernel(Prelu, inputs);
}
var prelu = op({ prelu_ });

// src/tfjs-core/src/ops/prod.ts
function prod_(x, axis = null, keepDims = false) {
  let $x = convertToTensor(x, "x", "prod");
  if ($x.dtype === "bool") {
    $x = cast($x, "int32");
  }
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(
    Prod,
    inputs,
    attrs
  );
}
var prod = op({ prod_ });

// src/tfjs-core/src/ops/ragged_tensor_to_tensor.ts
function raggedTensorToTensor_(shape, values, defaultValue, rowPartitionTensors, rowPartitionTypes) {
  const $shape = convertToTensor(shape, "shape", "raggedTensorToTensor", "int32");
  const $values = convertToTensor(values, "values", "raggedTensorToTensor");
  const $defaultValue = convertToTensor(
    defaultValue,
    "defaultValue",
    "raggedTensorToTensor",
    $values.dtype
  );
  const $rowPartitionTensors = rowPartitionTensors.map(
    (t, i) => convertToTensor(t, `tensors${i}`, "raggedTensorToTensor", "int32")
  );
  const inputs = {
    shape: $shape,
    values: $values,
    defaultValue: $defaultValue,
    rowPartitionTensors: $rowPartitionTensors
  };
  const attrs = { rowPartitionTypes };
  return ENGINE.runKernel(RaggedTensorToTensor, inputs, attrs);
}
var raggedTensorToTensor = op({ raggedTensorToTensor_ });

// src/tfjs-core/src/ops/rand.ts
function rand_(shape, randFunction, dtype) {
  const size = sizeFromShape(shape);
  let values = null;
  if (dtype == null || dtype === "float32") {
    values = new Float32Array(size);
  } else if (dtype === "int32") {
    values = new Int32Array(size);
  } else if (dtype === "bool") {
    values = new Uint8Array(size);
  } else {
    throw new Error(`Unknown data type ${dtype}`);
  }
  for (let i = 0; i < size; i++) {
    values[i] = randFunction();
  }
  return ENGINE.makeTensor(values, shape, dtype);
}
var rand = op({ rand_ });

// src/tfjs-core/src/ops/rand_util.ts
var seedrandom = __toESM(require_seedrandom2());
var MPRandGauss = class {
  constructor(mean3, stdDeviation, dtype, truncated, seed) {
    this.mean = mean3;
    this.stdDev = stdDeviation;
    this.dtype = dtype;
    this.nextVal = NaN;
    this.truncated = truncated;
    if (this.truncated) {
      this.upper = this.mean + this.stdDev * 2;
      this.lower = this.mean - this.stdDev * 2;
    }
    const seedValue = seed ? seed : Math.random();
    this.random = seedrandom.alea(seedValue.toString());
  }
  nextValue() {
    if (!isNaN(this.nextVal)) {
      const value = this.nextVal;
      this.nextVal = NaN;
      return value;
    }
    let resultX, resultY;
    let isValid = false;
    while (!isValid) {
      let v1, v2, s;
      do {
        v1 = 2 * this.random() - 1;
        v2 = 2 * this.random() - 1;
        s = v1 * v1 + v2 * v2;
      } while (s >= 1 || s === 0);
      const mul2 = Math.sqrt(-2 * Math.log(s) / s);
      resultX = this.mean + this.stdDev * v1 * mul2;
      resultY = this.mean + this.stdDev * v2 * mul2;
      if (!this.truncated || this.isValidTruncated(resultX)) {
        isValid = true;
      }
    }
    if (!this.truncated || this.isValidTruncated(resultY)) {
      this.nextVal = this.convertValue(resultY);
    }
    return this.convertValue(resultX);
  }
  convertValue(value) {
    if (this.dtype == null || this.dtype === "float32") {
      return value;
    }
    return Math.round(value);
  }
  isValidTruncated(value) {
    return value <= this.upper && value >= this.lower;
  }
};
var RandGamma = class {
  constructor(alpha, beta, dtype, seed) {
    this.alpha = alpha;
    this.beta = 1 / beta;
    this.dtype = dtype;
    const seedValue = seed ? seed : Math.random();
    this.randu = seedrandom.alea(seedValue.toString());
    this.randn = new MPRandGauss(0, 1, dtype, false, this.randu());
    if (alpha < 1) {
      this.d = alpha + 2 / 3;
    } else {
      this.d = alpha - 1 / 3;
    }
    this.c = 1 / Math.sqrt(9 * this.d);
  }
  nextValue() {
    let x2, v0, v1, x, u, v;
    while (true) {
      do {
        x = this.randn.nextValue();
        v = 1 + this.c * x;
      } while (v <= 0);
      v *= v * v;
      x2 = x * x;
      v0 = 1 - 0.331 * x2 * x2;
      v1 = 0.5 * x2 + this.d * (1 - v + Math.log(v));
      u = this.randu();
      if (u < v0 || Math.log(u) < v1) {
        break;
      }
    }
    v = 1 / this.beta * this.d * v;
    if (this.alpha < 1) {
      v *= Math.pow(this.randu(), 1 / this.alpha);
    }
    return this.convertValue(v);
  }
  convertValue(value) {
    if (this.dtype === "float32") {
      return value;
    }
    return Math.round(value);
  }
};
var UniformRandom = class {
  constructor(min3 = 0, max3 = 1, dtype, seed) {
    this.canReturnFloat = () => this.dtype == null || this.dtype === "float32";
    this.min = min3;
    this.range = max3 - min3;
    this.dtype = dtype;
    if (seed == null) {
      seed = Math.random();
    }
    if (typeof seed === "number") {
      seed = seed.toString();
    }
    if (!this.canReturnFloat() && this.range <= 1) {
      throw new Error(
        `The difference between ${min3} - ${max3} <= 1 and dtype is not float`
      );
    }
    this.random = seedrandom.alea(seed);
  }
  convertValue(value) {
    if (this.canReturnFloat()) {
      return value;
    }
    return Math.round(value);
  }
  nextValue() {
    return this.convertValue(this.min + this.range * this.random());
  }
};

// src/tfjs-core/src/ops/random_gamma.ts
function randomGamma_(shape, alpha, beta = 1, dtype = "float32", seed) {
  if (beta == null) {
    beta = 1;
  }
  if (dtype == null) {
    dtype = "float32";
  }
  if (dtype !== "float32" && dtype !== "int32") {
    throw new Error(`Unsupported data type ${dtype}`);
  }
  const rgamma = new RandGamma(alpha, beta, dtype, seed);
  const res = buffer(shape, dtype);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = rgamma.nextValue();
  }
  return res.toTensor();
}
var randomGamma = op({ randomGamma_ });

// src/tfjs-core/src/ops/random_normal.ts
function randomNormal_(shape, mean3 = 0, stdDev = 1, dtype, seed) {
  if (dtype != null && dtype === "bool") {
    throw new Error(`Unsupported data type ${dtype}`);
  }
  const randGauss = new MPRandGauss(mean3, stdDev, dtype, false, seed);
  const res = buffer(shape, dtype);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = randGauss.nextValue();
  }
  return res.toTensor();
}
var randomNormal = op({ randomNormal_ });

// src/tfjs-core/src/ops/random_standard_normal.ts
function randomStandardNormal_(shape, dtype, seed) {
  if (dtype != null && dtype === "bool") {
    throw new Error(`Unsupported data type ${dtype}`);
  }
  return randomNormal(shape, 0, 1, dtype, seed);
}
var randomStandardNormal = op({ randomStandardNormal_ });

// src/tfjs-core/src/ops/random_uniform.ts
function randomUniform_(shape, minval = 0, maxval = 1, dtype = "float32", seed) {
  const res = buffer(shape, dtype);
  const random = new UniformRandom(minval, maxval, null, seed);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = random.nextValue();
  }
  return res.toTensor();
}
var randomUniform = op({ randomUniform_ });

// src/tfjs-core/src/ops/range.ts
function range(start, stop, step3 = 1, dtype = "float32") {
  if (step3 === 0) {
    throw new Error("Cannot have a step of zero");
  }
  const attrs = { start, stop, step: step3, dtype };
  return ENGINE.runKernel(Range, {}, attrs);
}

// src/tfjs-core/src/ops/reciprocal.ts
function reciprocal_(x) {
  const $x = convertToTensor(x, "x", "reciprocal");
  const inputs = { x: $x };
  return ENGINE.runKernel(Reciprocal, inputs);
}
var reciprocal = op({ reciprocal_ });

// src/tfjs-core/src/ops/relu.ts
function relu_(x) {
  const $x = convertToTensor(x, "x", "relu");
  const inputs = { x: $x };
  return ENGINE.runKernel(Relu, inputs);
}
var relu = op({ relu_ });

// src/tfjs-core/src/ops/relu6.ts
function relu6_(x) {
  const $x = convertToTensor(x, "x", "relu6");
  const inputs = { x: $x };
  return ENGINE.runKernel(Relu6, inputs);
}
var relu6 = op({ relu6_ });

// src/tfjs-core/src/ops/reverse.ts
function reverse_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  const inputs = { x: $x };
  const attrs = { dims: axis };
  return ENGINE.runKernel(
    Reverse,
    inputs,
    attrs
  );
}
var reverse = op({ reverse_ });

// src/tfjs-core/src/ops/reverse_1d.ts
function reverse1d_(x) {
  const $x = convertToTensor(x, "x", "reverse");
  assert(
    $x.rank === 1,
    () => `Error in reverse1D: x must be rank 1 but got rank ${$x.rank}.`
  );
  return reverse($x, 0);
}
var reverse1d = op({ reverse1d_ });

// src/tfjs-core/src/ops/reverse_2d.ts
function reverse2d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert(
    $x.rank === 2,
    () => `Error in reverse2D: x must be rank 2 but got rank ${$x.rank}.`
  );
  return reverse($x, axis);
}
var reverse2d = op({ reverse2d_ });

// src/tfjs-core/src/ops/reverse_3d.ts
function reverse3d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert(
    $x.rank === 3,
    () => `Error in reverse3D: x must be rank 3 but got rank ${$x.rank}.`
  );
  return reverse($x, axis);
}
var reverse3d = op({ reverse3d_ });

// src/tfjs-core/src/ops/reverse_4d.ts
function reverse4d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert(
    $x.rank === 4,
    () => `Error in reverse4D: x must be rank 4 but got rank ${$x.rank}.`
  );
  return reverse($x, axis);
}
var reverse4d = op({ reverse4d_ });

// src/tfjs-core/src/ops/round.ts
function round_(x) {
  const $x = convertToTensor(x, "x", "round");
  const inputs = { x: $x };
  return ENGINE.runKernel(Round, inputs);
}
var round2 = op({ round_ });

// src/tfjs-core/src/ops/rsqrt.ts
function rsqrt_(x) {
  const $x = convertToTensor(x, "x", "rsqrt", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Rsqrt, inputs);
}
var rsqrt = op({ rsqrt_ });

// src/tfjs-core/src/ops/selu.ts
function selu_(x) {
  const $x = convertToTensor(x, "x", "selu");
  const inputs = { x: $x };
  return ENGINE.runKernel(Selu, inputs);
}
var selu = op({ selu_ });

// src/tfjs-core/src/ops/separable_conv2d.ts
function separableConv2d_(x, depthwiseFilter, pointwiseFilter, strides, pad3, dilation = [1, 1], dataFormat = "NHWC") {
  const $x = convertToTensor(x, "x", "separableConv2d");
  const $depthwiseFilter = convertToTensor(depthwiseFilter, "depthwiseFilter", "separableConv2d");
  const $pointwiseFilter = convertToTensor(pointwiseFilter, "pointwiseFilter", "separableConv2d");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  if (dataFormat === "NCHW") {
    throw new Error(
      "separableConv2d currently does not support dataFormat NCHW; only NHWC is supported"
    );
  }
  assert(
    x4D.rank === 4,
    () => `Error in separableConv2d: input must be rank 4, but got rank ${x4D.rank}.`
  );
  assert(
    $depthwiseFilter.rank === 4,
    () => `Error in separableConv2d: depthwise filter must be rank 4, but got rank ${$depthwiseFilter.rank}.`
  );
  assert(
    $pointwiseFilter.rank === 4,
    () => `Error in separableConv2d: pointwise filter must be rank 4, but got rank ${$depthwiseFilter.rank}.`
  );
  assert(
    $pointwiseFilter.shape[0] === 1,
    () => `Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${$pointwiseFilter.shape[0]}.`
  );
  assert(
    $pointwiseFilter.shape[1] === 1,
    () => `Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${$pointwiseFilter.shape[1]}.`
  );
  const inChannels = $depthwiseFilter.shape[2];
  const channelMultiplier = $depthwiseFilter.shape[3];
  assert(
    $pointwiseFilter.shape[2] === inChannels * channelMultiplier,
    () => `Error in separableConv2d: the third dimension of pointwise filter must be ${inChannels * channelMultiplier}, but got ${$pointwiseFilter.shape[2]}.`
  );
  const depthwise = depthwiseConv2d(
    x4D,
    $depthwiseFilter,
    strides,
    pad3,
    dataFormat,
    dilation
  );
  const pointwiseStride = 1;
  const res = conv2d(depthwise, $pointwiseFilter, pointwiseStride, "valid", dataFormat);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var separableConv2d = op({ separableConv2d_ });

// src/tfjs-core/src/ops/sign.ts
function sign_(x) {
  const $x = convertToTensor(x, "x", "sign");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sign, inputs);
}
var sign = op({ sign_ });

// src/tfjs-core/src/ops/sin.ts
function sin_(x) {
  const $x = convertToTensor(x, "x", "sin", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sin, inputs);
}
var sin = op({ sin_ });

// src/tfjs-core/src/ops/sinh.ts
function sinh_(x) {
  const $x = convertToTensor(x, "x", "sinh");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sinh, inputs);
}
var sinh = op({ sinh_ });

// src/tfjs-core/src/ops/slice1d.ts
function slice1d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice1d");
  assert(
    $x.rank === 1,
    () => `slice1d expects a rank-1 tensor, but got a rank-${$x.rank} tensor`
  );
  return slice($x, [begin], [size]);
}
var slice1d = op({ slice1d_ });

// src/tfjs-core/src/ops/slice2d.ts
function slice2d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice2d");
  assert(
    $x.rank === 2,
    () => `slice2d expects a rank-2 tensor, but got a rank-${$x.rank} tensor`
  );
  return slice($x, begin, size);
}
var slice2d = op({ slice2d_ });

// src/tfjs-core/src/ops/slice3d.ts
function slice3d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice3d");
  assert(
    $x.rank === 3,
    () => `slice3d expects a rank-3 tensor, but got a rank-${$x.rank} tensor`
  );
  return slice($x, begin, size);
}
var slice3d = op({ slice3d_ });

// src/tfjs-core/src/ops/slice4d.ts
function slice4d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice4d");
  assert(
    $x.rank === 4,
    () => `slice4d expects a rank-4 tensor, but got a rank-${$x.rank} tensor`
  );
  return slice($x, begin, size);
}
var slice4d = op({ slice4d_ });

// src/tfjs-core/src/ops/softmax.ts
function softmax_(logits, dim = -1) {
  const $logits = convertToTensor(logits, "logits", "softmax", "float32");
  if (dim === -1) {
    dim = $logits.rank - 1;
  }
  if (dim !== $logits.rank - 1) {
    throw Error(
      `Softmax along a non-last dimension is not yet supported. Logits was rank ${$logits.rank} and dim was ${dim}`
    );
  }
  const inputs = { logits: $logits };
  const attrs = { dim };
  return ENGINE.runKernel(
    Softmax,
    inputs,
    attrs
  );
}
var softmax = op({ softmax_ });

// src/tfjs-core/src/ops/spectral/fft.ts
function fft_(input) {
  assert(
    input.dtype === "complex64",
    () => `The dtype for tf.spectral.fft() must be complex64 but got ${input.dtype}.`
  );
  const inputs = { input };
  return ENGINE.runKernel(FFT, inputs);
}
var fft = op({ fft_ });

// src/tfjs-core/src/ops/spectral/ifft.ts
function ifft_(input) {
  assert(
    input.dtype === "complex64",
    () => `The dtype for tf.spectral.ifft() must be complex64 but got ${input.dtype}.`
  );
  const inputs = { input };
  return ENGINE.runKernel(IFFT, inputs);
}
var ifft = op({ ifft_ });

// src/tfjs-core/src/ops/spectral/irfft.ts
function irfft_(input) {
  const innerDimensionSize = input.shape[input.shape.length - 1];
  const batch = input.size / innerDimensionSize;
  let ret;
  if (innerDimensionSize <= 2) {
    const complexInput = reshape(input, [batch, innerDimensionSize]);
    ret = ifft(complexInput);
  } else {
    const outputShape = [batch, 2 * (innerDimensionSize - 1)];
    const realInput = reshape(real(input), [batch, innerDimensionSize]);
    const imagInput = reshape(imag(input), [batch, innerDimensionSize]);
    const realConjugate = reverse(slice(realInput, [0, 1], [batch, innerDimensionSize - 2]), 1);
    const imagConjugate = mul(
      reverse(slice(imagInput, [0, 1], [batch, innerDimensionSize - 2]), 1),
      scalar(-1)
    );
    const r = concat([realInput, realConjugate], 1);
    const i = concat([imagInput, imagConjugate], 1);
    const complexInput = reshape(complex(r, i), [outputShape[0], outputShape[1]]);
    ret = ifft(complexInput);
  }
  ret = real(ret);
  if (input.rank === 3 && input.shape[0] !== 0) {
    const temp = ret;
    const batch2 = input.shape[0];
    ret = reshape(ret, [batch2, ret.shape[0] / batch2, ret.shape[1]]);
    temp.dispose();
  }
  return ret;
}
var irfft = op({ irfft_ });

// src/tfjs-core/src/ops/split.ts
function split_(x, numOrSizeSplits, axis = 0) {
  const $x = convertToTensor(x, "x", "split");
  const inputs = { x: $x };
  const attr = { numOrSizeSplits, axis };
  return ENGINE.runKernel(
    SplitV,
    inputs,
    attr
  );
}
var split = op({ split_ });

// src/tfjs-core/src/ops/spectral/rfft.ts
function rfft_(input, fftLength) {
  assert(
    input.dtype === "float32",
    () => `The dtype for rfft() must be real value but got ${input.dtype}`
  );
  let innerDimensionSize = input.shape[input.shape.length - 1];
  const batch = input.size / innerDimensionSize;
  let adjustedInput;
  if (fftLength != null && fftLength < innerDimensionSize) {
    const begin = input.shape.map((v) => 0);
    const size = input.shape.map((v) => v);
    size[input.shape.length - 1] = fftLength;
    adjustedInput = slice(input, begin, size);
    innerDimensionSize = fftLength;
  } else if (fftLength != null && fftLength > innerDimensionSize) {
    const zerosShape = input.shape.map((v) => v);
    zerosShape[input.shape.length - 1] = fftLength - innerDimensionSize;
    adjustedInput = concat([input, zeros(zerosShape)], input.shape.length - 1);
    innerDimensionSize = fftLength;
  } else {
    adjustedInput = input;
  }
  const zerosInput = zerosLike(adjustedInput);
  const complexInput = reshape(complex(adjustedInput, zerosInput), [batch, innerDimensionSize]);
  const ret = fft(complexInput);
  const half = Math.floor(innerDimensionSize / 2) + 1;
  const realValues = real(ret);
  const imagValues = imag(ret);
  const realComplexConjugate = split(
    realValues,
    [half, innerDimensionSize - half],
    realValues.shape.length - 1
  );
  const imagComplexConjugate = split(
    imagValues,
    [half, innerDimensionSize - half],
    imagValues.shape.length - 1
  );
  const outputShape = adjustedInput.shape.slice();
  outputShape[adjustedInput.shape.length - 1] = half;
  return reshape(
    complex(realComplexConjugate[0], imagComplexConjugate[0]),
    outputShape
  );
}
var rfft = op({ rfft_ });

// src/tfjs-core/src/ops/squared_difference.ts
function squaredDifference_(a, b) {
  let $a = convertToTensor(a, "a", "squaredDifference");
  let $b = convertToTensor(b, "b", "squaredDifference");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  const attrs = {};
  return ENGINE.runKernel(
    SquaredDifference,
    inputs,
    attrs
  );
}
var squaredDifference = op({ squaredDifference_ });

// src/tfjs-core/src/ops/squeeze.ts
function squeeze_(x, axis) {
  const $x = convertToTensor(x, "x", "squeeze", "string_or_numeric");
  return reshape($x, squeezeShape($x.shape, axis).newShape);
}
var squeeze = op({ squeeze_ });

// src/tfjs-core/src/ops/stack.ts
function stack_(tensors, axis = 0) {
  const $tensors = convertToTensorArray(tensors, "tensors", "stack", "string_or_numeric");
  assert(
    $tensors.length >= 1,
    () => "Pass at least one tensor to tf.stack"
  );
  if ($tensors.length > 0) {
    assert(
      axis <= $tensors[0].rank,
      () => "Axis must be <= rank of the tensor"
    );
  }
  const inputs = $tensors;
  const attrs = { axis };
  return ENGINE.runKernel(
    Pack,
    inputs,
    attrs
  );
}
var stack = op({ stack_ });

// src/tfjs-core/src/ops/step.ts
function step_(x, alpha = 0) {
  const $x = convertToTensor(x, "x", "step");
  const inputs = { x: $x };
  const attrs = { alpha };
  return ENGINE.runKernel(
    Step,
    inputs,
    attrs
  );
}
var step = op({ step_ });

// src/tfjs-core/src/ops/strided_slice.ts
function stridedSlice_(x, begin, end, strides, beginMask = 0, endMask = 0, ellipsisMask = 0, newAxisMask = 0, shrinkAxisMask = 0) {
  const $x = convertToTensor(x, "x", "stridedSlice", "string_or_numeric");
  const inputs = { x: $x };
  const attrs = {
    begin,
    end,
    strides,
    beginMask,
    endMask,
    ellipsisMask,
    newAxisMask,
    shrinkAxisMask
  };
  return ENGINE.runKernel(
    StridedSlice,
    inputs,
    attrs
  );
}
var stridedSlice = op({ stridedSlice_ });

// src/tfjs-core/src/ops/tan.ts
function tan_(x) {
  const $x = convertToTensor(x, "x", "tan", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Tan, inputs);
}
var tan = op({ tan_ });

// src/tfjs-core/src/ops/tensor1d.ts
function tensor1d(values, dtype) {
  assertNonNull(values);
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 1) {
    throw new Error("tensor1d() requires values to be a flat/TypedArray");
  }
  const shape = null;
  return makeTensor(values, shape, inferredShape, dtype);
}

// src/tfjs-core/src/ops/tensor2d.ts
function tensor2d(values, shape, dtype) {
  assertNonNull(values);
  if (shape != null && shape.length !== 2) {
    throw new Error("tensor2d() requires shape to have two numbers");
  }
  const inferredShape = inferShape(values, dtype);
  if (inferredShape.length !== 2 && inferredShape.length !== 1) {
    throw new Error(
      "tensor2d() requires values to be number[][] or flat/TypedArray"
    );
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error(
      "tensor2d() requires shape to be provided when `values` are a flat/TypedArray"
    );
  }
  return makeTensor(values, shape, inferredShape, dtype);
}

// src/tfjs-core/src/ops/topk.ts
function topk_(x, k = 1, sorted = true) {
  const $x = convertToTensor(x, "x", "topk");
  if ($x.rank === 0) {
    throw new Error("topk() expects the input to be of rank 1 or higher");
  }
  const lastDim = $x.shape[$x.shape.length - 1];
  if (k < 0) {
    throw new Error(`'k' passed to topk() must be >= 0 but got ${k}`);
  }
  if (k > lastDim) {
    throw new Error(
      `'k' passed to topk() must be <= the last dimension (${lastDim}) but got ${k}`
    );
  }
  const inputs = { x: $x };
  const attrs = { k, sorted };
  const [values, indices] = ENGINE.runKernel(
    TopK,
    inputs,
    attrs
  );
  return { values, indices };
}
var topk = op({ topk_ });

// src/tfjs-core/src/ops/truncated_normal.ts
function truncatedNormal_(shape, mean3 = 0, stdDev = 1, dtype, seed) {
  if (dtype != null && dtype === "bool") {
    throw new Error(`Unsupported data type $ { dtype }`);
  }
  const randGauss = new MPRandGauss(mean3, stdDev, dtype, true, seed);
  const res = buffer(shape, dtype);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = randGauss.nextValue();
  }
  return res.toTensor();
}
var truncatedNormal = op({ truncatedNormal_ });

// src/tfjs-core/src/ops/unique.ts
function unique_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "unique", "string_or_numeric");
  assert($x.rank > 0, () => "The input tensor must be at least 1D");
  const inputs = { x: $x };
  const attrs = { axis };
  const [values, indices] = ENGINE.runKernel(
    Unique,
    inputs,
    attrs
  );
  return { values, indices };
}
var unique = op({ unique_ });

// src/tfjs-core/src/ops/unsorted_segment_sum.ts
function unsortedSegmentSum_(x, segmentIds, numSegments) {
  const $x = convertToTensor(x, "x", "unsortedSegmentSum");
  const $segmentIds = convertToTensor(segmentIds, "segmentIds", "unsortedSegmentSum", "int32");
  assert(isInt(numSegments), () => "numSegments must be of dtype int");
  const inputs = { x: $x, segmentIds: $segmentIds };
  const attrs = { numSegments };
  return ENGINE.runKernel(
    UnsortedSegmentSum,
    inputs,
    attrs
  );
}
var unsortedSegmentSum = op({ unsortedSegmentSum_ });

// src/tfjs-core/src/ops/unstack.ts
function unstack_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "unstack", "string_or_numeric");
  assert(
    axis >= -$x.shape.length && axis < $x.shape.length,
    () => `Axis = ${axis} is not in [-${$x.shape.length}, ${$x.shape.length})`
  );
  const inputs = { value: $x };
  const attrs = { axis };
  return ENGINE.runKernel(
    Unpack,
    inputs,
    attrs
  );
}
var unstack = op({ unstack_ });

// src/tfjs-core/src/ops/moving_average.ts
function movingAverage_(v, x, decay, step3, zeroDebias = true) {
  const $v = convertToTensor(v, "v", "movingAverage");
  const $x = convertToTensor(x, "x", "movingAverage");
  const $decay = convertToTensor(decay, "decay", "movingAverage");
  assertTypesMatch($v, $x);
  assert(
    arraysEqual($v.shape, $x.shape),
    () => "Shape mismatch in v and x"
  );
  const one = scalar(1);
  const oneMinusDecay = sub(one, $decay);
  let update = mul(sub($x, $v), oneMinusDecay);
  if (zeroDebias) {
    assert(
      step3 != null,
      () => "When using zeroDebias: true, step is required."
    );
    const $step = convertToTensor(step3, "step", "movingAverage");
    update = div(update, sub(one, pow($decay, $step)));
  }
  return add3($v, update);
}
var movingAverage = op({ movingAverage_ });

// src/tfjs-core/src/ops/scatter_nd.ts
function scatterND_(indices, updates, shape) {
  const $indices = convertToTensor(indices, "indices", "scatterND", "int32");
  const $updates = convertToTensor(updates, "updates", "scatterND");
  validateInput($updates, $indices, shape);
  const inputs = { indices: $indices, updates: $updates };
  const attrs = { shape };
  return ENGINE.runKernel(
    ScatterNd,
    inputs,
    attrs
  );
}
var scatterND = op({ scatterND_ });

// src/tfjs-core/src/ops/sparse_to_dense_util.ts
function validateInput2(sparseIndices, sparseValues, outputShape, defaultValues) {
  if (sparseIndices.dtype !== "int32") {
    throw new Error(
      `tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${sparseIndices.dtype}.`
    );
  }
  if (sparseIndices.rank > 2) {
    throw new Error(
      `sparseIndices should be a scalar, vector, or matrix, but got shape ${sparseIndices.shape}.`
    );
  }
  const numElems = sparseIndices.rank > 0 ? sparseIndices.shape[0] : 1;
  const numDims = sparseIndices.rank > 1 ? sparseIndices.shape[1] : 1;
  if (outputShape.length !== numDims) {
    throw new Error(
      `outputShape has incorrect number of elements:, ${outputShape.length}, should be: ${numDims}.`
    );
  }
  const numValues = sparseValues.size;
  if (!(sparseValues.rank === 0 || sparseValues.rank === 1 && numValues === numElems)) {
    throw new Error(
      `sparseValues has incorrect shape ${sparseValues.shape}, should be [] or [${numElems}]`
    );
  }
  if (sparseValues.dtype !== defaultValues.dtype) {
    throw new Error("sparseValues.dtype must match defaultValues.dtype");
  }
}

// src/tfjs-core/src/ops/sparse_to_dense.ts
function sparseToDense_(sparseIndices, sparseValues, outputShape, defaultValue = 0) {
  const $sparseIndices = convertToTensor(sparseIndices, "sparseIndices", "sparseToDense", "int32");
  const $sparseValues = convertToTensor(
    sparseValues,
    "sparseValues",
    "sparseToDense",
    "string_or_numeric"
  );
  const $defaultValue = convertToTensor(
    defaultValue,
    "defaultValue",
    "sparseToDense",
    $sparseValues.dtype
  );
  validateInput2(
    $sparseIndices,
    $sparseValues,
    outputShape,
    $defaultValue
  );
  const inputs = {
    sparseIndices: $sparseIndices,
    sparseValues: $sparseValues,
    defaultValue: $defaultValue
  };
  const attrs = { outputShape };
  return ENGINE.runKernel(
    SparseToDense,
    inputs,
    attrs
  );
}
var sparseToDense = op({ sparseToDense_ });

// src/tfjs-core/src/ops/gather_nd.ts
function gatherND_(x, indices) {
  const $indices = convertToTensor(indices, "indices", "gatherND", "int32");
  const $x = convertToTensor(x, "x", "gatherND", "string_or_numeric");
  const inputs = { params: $x, indices: $indices };
  return ENGINE.runKernel(GatherNd, inputs);
}
var gatherND = op({ gatherND_ });

// src/tfjs-core/src/ops/dropout_util.ts
function getNoiseShape(x, noiseShape) {
  if (noiseShape == null) {
    return x.shape.slice();
  }
  if (arraysEqual(x.shape, noiseShape)) {
    return noiseShape;
  }
  if (x.shape.length === noiseShape.length) {
    const newDimension = [];
    for (let i = 0; i < x.shape.length; i++) {
      if (noiseShape[i] == null && x.shape[i] != null) {
        newDimension.push(x.shape[i]);
      } else {
        newDimension.push(noiseShape[i]);
      }
    }
    return newDimension;
  }
  return noiseShape;
}

// src/tfjs-core/src/ops/dropout.ts
function dropout_(x, rate, noiseShape, seed) {
  const $x = convertToTensor(x, "x", "dropout");
  assert(
    $x.dtype === "float32",
    () => `x has to be a floating point tensor since it's going to be scaled, but got a ${$x.dtype} tensor instead.`
  );
  assert(
    rate >= 0 && rate < 1,
    () => `rate must be a float in the range [0, 1), but got ${rate}.`
  );
  if (rate === 0) {
    return x instanceof Tensor ? $x.clone() : $x;
  }
  const $noiseShape = getNoiseShape($x, noiseShape);
  const keepProb = 1 - rate;
  const multiplier = div(
    floor(add3(randomUniform($noiseShape, 0, 1, "float32", seed), keepProb)),
    keepProb
  );
  return mul($x, multiplier);
}
var dropout = op({ dropout_ });

// src/tfjs-core/src/ops/signal_ops_util.ts
function enclosingPowerOfTwo(value) {
  return Math.floor(Math.pow(2, Math.ceil(Math.log(value) / Math.log(2))));
}
function cosineWindow(windowLength, a, b) {
  const even = 1 - windowLength % 2;
  const newValues = new Float32Array(windowLength);
  for (let i = 0; i < windowLength; ++i) {
    const cosArg = 2 * Math.PI * i / (windowLength + even - 1);
    newValues[i] = a - b * Math.cos(cosArg);
  }
  return tensor1d(newValues, "float32");
}

// src/tfjs-core/src/ops/conv2d_backprop_filter.ts
function conv2DBackpropFilter_(x, dy, filterShape, strides, pad3, dataFormat = "NHWC", dimRoundingMode) {
  let x4D = x;
  if (x.rank === 3) {
    x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
  }
  let dy4D = dy;
  if (dy4D.rank === 3) {
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  assert(
    x4D.rank === 4,
    () => `Error in conv2dDerFilter: input must be rank 4, but got shape ${x4D.shape}.`
  );
  assert(
    dy4D.rank === 4,
    () => `Error in conv2dDerFilter: dy must be rank 4, but got shape ${dy4D.shape}.`
  );
  assert(
    filterShape.length === 4,
    () => `Error in conv2dDerFilter: filterShape must be length 4, but got ${filterShape}.`
  );
  const inDepth = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  const outDepth = dataFormat === "NHWC" ? dy4D.shape[3] : dy4D.shape[1];
  assert(
    inDepth === filterShape[2],
    () => `Error in conv2dDerFilter: depth of input ${inDepth}) must match input depth in filter (${filterShape[2]}.`
  );
  assert(
    outDepth === filterShape[3],
    () => `Error in conv2dDerFilter: depth of dy (${outDepth}) must match output depth for filter (${filterShape[3]}).`
  );
  checkPadOnDimRoundingMode("conv2dDerFilter", pad3, dimRoundingMode);
  const inputs = { x: x4D, dy: dy4D };
  const attrs = { strides, pad: pad3, dataFormat, dimRoundingMode, filterShape };
  return ENGINE.runKernel(
    Conv2DBackpropFilter,
    inputs,
    attrs
  );
}
var conv2DBackpropFilter = op({ conv2DBackpropFilter_ });

// src/tfjs-core/src/ops/fused_util.ts
function getFusedDyActivation(dy, y, activation) {
  if (activation == null || activation === "linear") {
    return dy;
  }
  if (activation === "relu") {
    return mul(dy, step(y));
  }
  throw new Error(
    `Cannot compute gradient for fused activation ${activation}.`
  );
}
function getFusedBiasGradient(bias, dyActivation) {
  let res = dyActivation;
  const reduceAxes = getReductionAxes(bias.shape, dyActivation.shape);
  if (reduceAxes.length > 0) {
    res = sum2(res, reduceAxes);
  }
  return reshape(res, bias.shape);
}
function applyActivation(x, activation, preluActivationWeights, leakyreluAlpha) {
  if (activation === "linear") {
    return x;
  } else if (activation === "relu") {
    return relu(x);
  } else if (activation === "elu") {
    return elu(x);
  } else if (activation === "relu6") {
    return relu6(x);
  } else if (activation === "prelu") {
    return prelu(x, preluActivationWeights);
  } else if (activation === "leakyrelu") {
    return leakyRelu(x, leakyreluAlpha);
  } else if (activation === "sigmoid") {
    return sigmoid(x);
  }
  throw new Error(`Unknown fused activation ${activation}.`);
}
var shouldFuse = (gradientDepth, activation) => {
  const gradientMode = gradientDepth > 0;
  return !gradientMode || activation === "linear";
};

// src/tfjs-core/src/ops/fused/conv2d.ts
function fusedConv2d_({
  x,
  filter,
  strides,
  pad: pad3,
  dataFormat = "NHWC",
  dilations = [1, 1],
  dimRoundingMode,
  bias,
  activation = "linear",
  preluActivationWeights,
  leakyreluAlpha
}) {
  activation = activation || "linear";
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
    assert(
      dataFormat === "NHWC",
      () => `Error in fused conv2d: got dataFormat of ${dataFormat} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`
    );
    let result = conv2d(
      x,
      filter,
      strides,
      pad3,
      dataFormat,
      dilations,
      dimRoundingMode
    );
    if (bias != null) {
      result = add3(result, bias);
    }
    return applyActivation(
      result,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    );
  }
  const $x = convertToTensor(x, "x", "conv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "conv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(
    x4D.rank === 4,
    () => `Error in fused conv2d: input must be rank 4, but got rank ${x4D.rank}.`
  );
  assert(
    $filter.rank === 4,
    () => `Error in fused conv2d: filter must be rank 4, but got rank ${$filter.rank}.`
  );
  checkPadOnDimRoundingMode("fused conv2d", pad3, dimRoundingMode);
  const inputChannels = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  assert(
    $filter.shape[2] === inputChannels,
    () => `Error in conv2d: depth of input (${inputChannels}) must match input depth for filter ${$filter.shape[2]}.`
  );
  assert(
    eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in conv2D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  const convInfo = computeConv2DInfo(
    x4D.shape,
    $filter.shape,
    strides,
    dilations,
    pad3,
    dimRoundingMode
  );
  let $bias;
  if (bias != null) {
    $bias = convertToTensor(bias, "bias", "fused conv2d");
    [$bias] = makeTypesMatch($bias, $x);
    if (dataFormat === "NHWC") {
      assertAndGetBroadcastShape(convInfo.outShape, $bias.shape);
    } else {
      assert(
        $bias.shape.length <= 1,
        () => `Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${$bias.shape.length}.`
      );
      assert(
        $bias.shape.length === 0 || $bias.shape[0] === convInfo.outChannels || $bias.shape[0] === 1,
        () => `Error in fused conv2d: bias shape (${$bias.shape}) is not compatible with the number of output channels (${convInfo.outChannels})`
      );
    }
  }
  let $preluActivationWeights;
  if (preluActivationWeights != null) {
    const alphaShape = preluActivationWeights.shape;
    assert(
      alphaShape.length <= 1 || alphaShape.length === 3,
      () => `Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${alphaShape.length}.`
    );
    if (alphaShape.length === 1) {
      assert(
        alphaShape[0] === 1 || alphaShape[0] === convInfo.outChannels,
        () => `Error in fused conv2d: PReLU activation weights (${alphaShape}) is not compatible with the number of output channels (${convInfo.outChannels}).`
      );
    } else if (alphaShape.length === 3) {
      try {
        assertAndGetBroadcastShape(
          alphaShape,
          convInfo.outShape
        );
      } catch (e) {
        const errMsg = `Error in fused conv2d: PReLU activation weights (${alphaShape}) is not compatible with the output shape of the conv2d (${convInfo.outShape}).`;
        throw Error(errMsg);
      }
    }
    $preluActivationWeights = convertToTensor(
      preluActivationWeights,
      "prelu weights",
      "fused conv2d"
    );
  }
  const grad2 = (dy, saved) => {
    assert(
      dataFormat === "NHWC",
      () => `Error in gradient of fused conv2D: got dataFormat of ${dataFormat} but only NHWC is currently supported.`
    );
    const [$filter2, x4D2, y, $bias2] = saved;
    const dyActivation = getFusedDyActivation(dy, y, activation);
    assert(
      tupleValuesAreOne(dilations),
      () => `Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${dilations}'`
    );
    const xDer = conv2DBackpropInput(x4D2.shape, dyActivation, $filter2, strides, pad3);
    const filterDer = conv2DBackpropFilter(x4D2, dyActivation, $filter2.shape, strides, pad3);
    const der = [xDer, filterDer];
    if ($bias2 != null) {
      const biasDer = getFusedBiasGradient($bias2, dyActivation);
      der.push(biasDer);
    }
    return der;
  };
  const inputs = {
    x: x4D,
    filter: $filter,
    bias: $bias,
    preluActivationWeights: $preluActivationWeights
  };
  const attrs = {
    strides,
    pad: pad3,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  };
  if (bias == null) {
    const customOp = customGrad((x4D2, filter2, save) => {
      let res = ENGINE.runKernel(
        FusedConv2D,
        inputs,
        attrs
      );
      save([filter2, x4D2, res]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOp(x4D, $filter);
  } else {
    const customOpWithBias = customGrad(
      (x4D2, filter2, bias2, save) => {
        let res = ENGINE.runKernel(
          FusedConv2D,
          inputs,
          attrs
        );
        save([filter2, x4D2, res, bias2]);
        if (reshapedTo4D) {
          res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
        }
        return { value: res, gradFunc: grad2 };
      }
    );
    return customOpWithBias(x4D, $filter, $bias);
  }
}
var conv2d2 = op({ fusedConv2d_ });

// src/tfjs-core/src/ops/depthwise_conv2d_native_backprop_filter.ts
function depthwiseConv2dNativeBackpropFilter_(x, dy, filterShape, strides, pad3, dilations = [1, 1], dimRoundingMode) {
  let x4D = x;
  if (x.rank === 3) {
    x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
  }
  let dy4D = dy;
  if (dy4D.rank === 3) {
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  const inputs = { x: x4D, dy: dy4D };
  const attrs = { strides, pad: pad3, dimRoundingMode, dilations, filterShape };
  return ENGINE.runKernel(
    DepthwiseConv2dNativeBackpropFilter,
    inputs,
    attrs
  );
}
var depthwiseConv2dNativeBackpropFilter = op({ depthwiseConv2dNativeBackpropFilter_ });

// src/tfjs-core/src/ops/depthwise_conv2d_native_backprop_input.ts
function depthwiseConv2dNativeBackpropInput_(xShape, dy, filter, strides, pad3, dilations = [1, 1], dimRoundingMode) {
  let dy4D = dy;
  let reshapedTo4D = false;
  if (dy.rank === 3) {
    reshapedTo4D = true;
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  const inputs = { dy: dy4D, filter };
  const attrs = { strides, pad: pad3, dimRoundingMode, dilations, inputShape: xShape };
  const res = ENGINE.runKernel(
    DepthwiseConv2dNativeBackpropInput,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var depthwiseConv2dNativeBackpropInput = op({ depthwiseConv2dNativeBackpropInput_ });

// src/tfjs-core/src/ops/fused/depthwise_conv2d.ts
function fusedDepthwiseConv2d_({
  x,
  filter,
  strides,
  pad: pad3,
  dataFormat = "NHWC",
  dilations = [1, 1],
  dimRoundingMode,
  bias,
  activation = "linear",
  preluActivationWeights,
  leakyreluAlpha
}) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
    let result = depthwiseConv2d(
      x,
      filter,
      strides,
      pad3,
      dataFormat,
      dilations,
      dimRoundingMode
    );
    if (bias != null) {
      result = add3(result, bias);
    }
    return applyActivation(
      result,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    );
  }
  const $x = convertToTensor(x, "x", "depthwiseConv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "depthwiseConv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(
    x4D.rank === 4,
    () => `Error in fused depthwiseConv2d: input must be rank 4, but got rank ${x4D.rank}.`
  );
  assert(
    $filter.rank === 4,
    () => `Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${$filter.rank}.`
  );
  assert(
    x4D.shape[3] === $filter.shape[2],
    () => `Error in fused depthwiseConv2d: number of input channels (${x4D.shape[3]}) must match the inChannels dimension in filter ${$filter.shape[2]}.`
  );
  if (dilations == null) {
    dilations = [1, 1];
  }
  assert(
    eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  checkPadOnDimRoundingMode(
    "fused depthwiseConv2d",
    pad3,
    dimRoundingMode
  );
  const convInfo = computeConv2DInfo(
    x4D.shape,
    $filter.shape,
    strides,
    dilations,
    pad3,
    dimRoundingMode,
    true
  );
  let $bias;
  if (bias != null) {
    $bias = convertToTensor(bias, "bias", "fused conv2d");
    [$bias] = makeTypesMatch($bias, $x);
    assertAndGetBroadcastShape(convInfo.outShape, $bias.shape);
  }
  let $preluActivationWeights;
  if (preluActivationWeights != null) {
    $preluActivationWeights = convertToTensor(
      preluActivationWeights,
      "prelu weights",
      "fused depthwiseConv2d"
    );
  }
  const grad2 = (dy, saved) => {
    assert(
      tupleValuesAreOne(dilations),
      () => `Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${dilations}'`
    );
    const [$filter2, x4D2, y, bias2] = saved;
    const dyActivation = getFusedDyActivation(dy, y, activation);
    const xDer = depthwiseConv2dNativeBackpropInput(
      x4D2.shape,
      dyActivation,
      $filter2,
      strides,
      pad3,
      dilations,
      dimRoundingMode
    );
    const filterDer = depthwiseConv2dNativeBackpropFilter(
      x4D2,
      dyActivation,
      $filter2.shape,
      strides,
      pad3,
      dilations,
      dimRoundingMode
    );
    if (bias2 != null) {
      const biasDer = getFusedBiasGradient($bias, dyActivation);
      return [xDer, filterDer, biasDer];
    }
    return [xDer, filterDer];
  };
  const inputs = {
    x: x4D,
    filter: $filter,
    bias: $bias,
    preluActivationWeights: $preluActivationWeights
  };
  const attrs = {
    strides,
    pad: pad3,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  };
  if (bias == null) {
    const customOp = customGrad((x4D2, filter2, save) => {
      let res = ENGINE.runKernel(
        FusedDepthwiseConv2D,
        inputs,
        attrs
      );
      save([filter2, x4D2, res]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOp(x4D, $filter);
  } else {
    const customOpWithBias = customGrad(
      (x4D2, filter2, bias2, save) => {
        let res = ENGINE.runKernel(
          FusedDepthwiseConv2D,
          inputs,
          attrs
        );
        save([filter2, x4D2, res, bias2]);
        if (reshapedTo4D) {
          res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
        }
        return { value: res, gradFunc: grad2 };
      }
    );
    return customOpWithBias(x4D, $filter, $bias);
  }
}
var depthwiseConv2d2 = op({ fusedDepthwiseConv2d_ });

// src/tfjs-core/src/ops/fused/mat_mul.ts
function fusedMatMul_({
  a,
  b,
  transposeA = false,
  transposeB = false,
  bias,
  activation = "linear",
  preluActivationWeights,
  leakyreluAlpha = 0.2
}) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
    let result = matMul(a, b, transposeA, transposeB);
    if (bias != null) {
      result = add3(result, bias);
    }
    return applyActivation(
      result,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    );
  }
  let $a = convertToTensor(a, "a", "fused matMul");
  let $b = convertToTensor(b, "b", "fused matMul");
  [$a, $b] = makeTypesMatch($a, $b);
  const innerShapeA = transposeA ? $a.shape[$a.rank - 2] : $a.shape[$a.rank - 1];
  const innerShapeB = transposeB ? $b.shape[$b.rank - 1] : $b.shape[$b.rank - 2];
  const outerShapeA = transposeA ? $a.shape[$a.rank - 1] : $a.shape[$a.rank - 2];
  const outerShapeB = transposeB ? $b.shape[$b.rank - 2] : $b.shape[$b.rank - 1];
  const outerDimsA = $a.shape.slice(0, -2);
  const outerDimsB = $b.shape.slice(0, -2);
  const batchDimA = sizeFromShape(outerDimsA);
  const batchDimB = sizeFromShape(outerDimsB);
  assert(
    innerShapeA === innerShapeB,
    () => `Error in fused matMul: inner shapes (${innerShapeA}) and (${innerShapeB}) of Tensors with shapes ${$a.shape} and ${$b.shape} and transposeA=${transposeA} and transposeB=${transposeB} must match.`
  );
  const outShapeOuterDims = assertAndGetBroadcastShape(
    $a.shape.slice(0, -2),
    $b.shape.slice(0, -2)
  );
  const outShape = outShapeOuterDims.concat([outerShapeA, outerShapeB]);
  const a3D = transposeA ? reshape($a, [batchDimA, innerShapeA, outerShapeA]) : reshape($a, [batchDimA, outerShapeA, innerShapeA]);
  const b3D = transposeB ? reshape($b, [batchDimB, outerShapeB, innerShapeB]) : reshape($b, [batchDimB, innerShapeB, outerShapeB]);
  let $bias;
  if (bias != null) {
    $bias = convertToTensor(bias, "bias", "fused matMul");
    [$bias] = makeTypesMatch($bias, $a);
    assertAndGetBroadcastShape(outShape, $bias.shape);
  }
  let $preluActivationWeights;
  if (preluActivationWeights != null) {
    $preluActivationWeights = convertToTensor(
      preluActivationWeights,
      "prelu weights",
      "fused matMul"
    );
  }
  const grad2 = (dy, saved) => {
    const [a3D2, b3D2, y, $bias2] = saved;
    const dyActivation = getFusedDyActivation(reshape(dy, y.shape), y, activation);
    let aDer;
    let bDer;
    if (!transposeA && !transposeB) {
      aDer = matMul(dyActivation, b3D2, false, true);
      bDer = matMul(a3D2, dyActivation, true, false);
    } else if (!transposeA && transposeB) {
      aDer = matMul(dyActivation, b3D2, false, false);
      bDer = matMul(dyActivation, a3D2, true, false);
    } else if (transposeA && !transposeB) {
      aDer = matMul(b3D2, dyActivation, false, true);
      bDer = matMul(a3D2, dyActivation, false, false);
    } else {
      aDer = matMul(b3D2, dyActivation, true, true);
      bDer = matMul(dyActivation, a3D2, true, true);
    }
    if (bias != null) {
      const biasDer = getFusedBiasGradient($bias2, dyActivation);
      return [aDer, bDer, biasDer];
    } else {
      return [aDer, bDer];
    }
  };
  const inputs = {
    a: a3D,
    b: b3D,
    bias: $bias,
    preluActivationWeights: $preluActivationWeights
  };
  const attrs = { transposeA, transposeB, activation, leakyreluAlpha };
  if (bias == null) {
    const customOp = customGrad((a3D2, b3D2, save) => {
      const res = ENGINE.runKernel(
        _FusedMatMul,
        inputs,
        attrs
      );
      save([a3D2, b3D2, res]);
      return { value: reshape(res, outShape), gradFunc: grad2 };
    });
    return customOp(a3D, b3D);
  } else {
    const customOpWithBias = customGrad(
      (a3D2, b3D2, $bias2, save) => {
        const res = ENGINE.runKernel(
          _FusedMatMul,
          inputs,
          attrs
        );
        save([a3D2, b3D2, res, $bias2]);
        return { value: reshape(res, outShape), gradFunc: grad2 };
      }
    );
    return customOpWithBias(a3D, b3D, $bias);
  }
}
var matMul2 = op({ fusedMatMul_ });

// src/tfjs-core/src/ops/signal/hamming_window.ts
function hammingWindow_(windowLength) {
  return cosineWindow(windowLength, 0.54, 0.46);
}
var hammingWindow = op({ hammingWindow_ });

// src/tfjs-core/src/ops/signal/hann_window.ts
function hannWindow_(windowLength) {
  return cosineWindow(windowLength, 0.5, 0.5);
}
var hannWindow = op({ hannWindow_ });

// src/tfjs-core/src/ops/signal/frame.ts
function frame_(signal, frameLength, frameStep, padEnd = false, padValue = 0) {
  let start = 0;
  const output = [];
  while (start + frameLength <= signal.size) {
    output.push(slice(signal, start, frameLength));
    start += frameStep;
  }
  if (padEnd) {
    while (start < signal.size) {
      const padLen = start + frameLength - signal.size;
      const pad3 = concat([
        slice(signal, start, frameLength - padLen),
        fill([padLen], padValue)
      ]);
      output.push(pad3);
      start += frameStep;
    }
  }
  if (output.length === 0) {
    return tensor2d([], [0, frameLength]);
  }
  return reshape(concat(output), [output.length, frameLength]);
}
var frame = op({ frame_ });

// src/tfjs-core/src/ops/signal/stft.ts
function stft_(signal, frameLength, frameStep, fftLength, windowFn = hannWindow) {
  if (fftLength == null) {
    fftLength = enclosingPowerOfTwo(frameLength);
  }
  const framedSignal = frame(signal, frameLength, frameStep);
  const windowedSignal = mul(framedSignal, windowFn(frameLength));
  return rfft(windowedSignal, fftLength);
}
var stft = op({ stft_ });

// src/tfjs-core/src/ops/image/crop_and_resize.ts
function cropAndResize_(image, boxes, boxInd, cropSize, method = "bilinear", extrapolationValue = 0) {
  const $image = convertToTensor(image, "image", "cropAndResize");
  const $boxes = convertToTensor(boxes, "boxes", "cropAndResize", "float32");
  const $boxInd = convertToTensor(boxInd, "boxInd", "cropAndResize", "int32");
  const numBoxes = $boxes.shape[0];
  assert(
    $image.rank === 4,
    () => `Error in cropAndResize: image must be rank 4,but got rank ${$image.rank}.`
  );
  assert(
    $boxes.rank === 2 && $boxes.shape[1] === 4,
    () => `Error in cropAndResize: boxes must be have size [${numBoxes},4] but had shape ${$boxes.shape}.`
  );
  assert(
    $boxInd.rank === 1 && $boxInd.shape[0] === numBoxes,
    () => `Error in cropAndResize: boxInd must be have size [${numBoxes}] but had shape ${$boxes.shape}.`
  );
  assert(
    cropSize.length === 2,
    () => `Error in cropAndResize: cropSize must be of length 2, but got length ${cropSize.length}.`
  );
  assert(
    cropSize[0] >= 1 && cropSize[1] >= 1,
    () => `cropSize must be atleast [1,1], but was ${cropSize}`
  );
  assert(
    method === "bilinear" || method === "nearest",
    () => `method must be bilinear or nearest, but was ${method}`
  );
  const inputs = { image: $image, boxes: $boxes, boxInd: $boxInd };
  const attrs = { method, extrapolationValue, cropSize };
  const res = ENGINE.runKernel(
    CropAndResize,
    inputs,
    attrs
  );
  return res;
}
var cropAndResize = op({ cropAndResize_ });

// src/tfjs-core/src/ops/image/flip_left_right.ts
function flipLeftRight_(image) {
  const $image = convertToTensor(image, "image", "flipLeftRight", "float32");
  assert(
    $image.rank === 4,
    () => `Error in flipLeftRight: image must be rank 4,but got rank ${$image.rank}.`
  );
  const inputs = { image: $image };
  const res = ENGINE.runKernel(FlipLeftRight, inputs, {});
  return res;
}
var flipLeftRight = op({ flipLeftRight_ });

// src/tfjs-core/src/ops/image/grayscale_to_rgb.ts
function grayscaleToRGB_(image) {
  const $image = convertToTensor(image, "image", "grayscaleToRGB");
  const lastDimsIdx = $image.rank - 1;
  const lastDims = $image.shape[lastDimsIdx];
  assert(
    $image.rank >= 2,
    () => `Error in grayscaleToRGB: images must be at least rank 2, but got rank ${$image.rank}.`
  );
  assert(
    lastDims === 1,
    () => `Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${lastDims}.`
  );
  const reps = new Array($image.rank);
  reps.fill(1, 0, lastDimsIdx);
  reps[lastDimsIdx] = 3;
  return tile($image, reps);
}
var grayscaleToRGB = op({ grayscaleToRGB_ });

// src/tfjs-core/src/ops/image/rotate_with_offset.ts
function rotateWithOffset_(image, radians, fillValue = 0, center = 0.5) {
  const $image = convertToTensor(image, "image", "rotateWithOffset", "float32");
  assert(
    $image.rank === 4,
    () => `Error in rotateWithOffset: image must be rank 4,but got rank ${$image.rank}.`
  );
  const inputs = { image: $image };
  const attrs = { radians, fillValue, center };
  const res = ENGINE.runKernel(
    RotateWithOffset,
    inputs,
    attrs
  );
  return res;
}
var rotateWithOffset = op({ rotateWithOffset_ });

// src/tfjs-core/src/ops/nonmax_util.ts
function nonMaxSuppSanityCheck(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma) {
  if (iouThreshold == null) {
    iouThreshold = 0.5;
  }
  if (scoreThreshold == null) {
    scoreThreshold = Number.NEGATIVE_INFINITY;
  }
  if (softNmsSigma == null) {
    softNmsSigma = 0;
  }
  const numBoxes = boxes.shape[0];
  maxOutputSize = Math.min(maxOutputSize, numBoxes);
  assert(
    0 <= iouThreshold && iouThreshold <= 1,
    () => `iouThreshold must be in [0, 1], but was '${iouThreshold}'`
  );
  assert(
    boxes.rank === 2,
    () => `boxes must be a 2D tensor, but was of rank '${boxes.rank}'`
  );
  assert(
    boxes.shape[1] === 4,
    () => `boxes must have 4 columns, but 2nd dimension was ${boxes.shape[1]}`
  );
  assert(scores.rank === 1, () => "scores must be a 1D tensor");
  assert(
    scores.shape[0] === numBoxes,
    () => `scores has incompatible shape with boxes. Expected ${numBoxes}, but was ${scores.shape[0]}`
  );
  assert(
    0 <= softNmsSigma && softNmsSigma <= 1,
    () => `softNmsSigma must be in [0, 1], but was '${softNmsSigma}'`
  );
  return { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma };
}

// src/tfjs-core/src/ops/image/non_max_suppression.ts
function nonMaxSuppression_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression", "float32");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression", "float32");
  const inputs = nonMaxSuppSanityCheck(
    $boxes,
    $scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold
  );
  maxOutputSize = inputs.maxOutputSize;
  iouThreshold = inputs.iouThreshold;
  scoreThreshold = inputs.scoreThreshold;
  const attrs = { maxOutputSize, iouThreshold, scoreThreshold };
  return ENGINE.runKernel(
    NonMaxSuppressionV3,
    { boxes: $boxes, scores: $scores },
    attrs
  );
}
var nonMaxSuppression = op({ nonMaxSuppression_ });

// src/tfjs-core/src/ops/image/non_max_suppression_with_score.ts
function nonMaxSuppressionWithScore_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression");
  const params = nonMaxSuppSanityCheck(
    $boxes,
    $scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma
  );
  maxOutputSize = params.maxOutputSize;
  iouThreshold = params.iouThreshold;
  scoreThreshold = params.scoreThreshold;
  softNmsSigma = params.softNmsSigma;
  const inputs = { boxes: $boxes, scores: $scores };
  const attrs = { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma };
  const result = ENGINE.runKernel(
    NonMaxSuppressionV5,
    inputs,
    attrs
  );
  return { selectedIndices: result[0], selectedScores: result[1] };
}
var nonMaxSuppressionWithScore = op({ nonMaxSuppressionWithScore_ });

// src/tfjs-core/src/ops/image/non_max_suppression_padded.ts
function nonMaxSuppressionPadded_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression");
  const params = nonMaxSuppSanityCheck(
    $boxes,
    $scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    null
  );
  const $maxOutputSize = params.maxOutputSize;
  const $iouThreshold = params.iouThreshold;
  const $scoreThreshold = params.scoreThreshold;
  const inputs = { boxes: $boxes, scores: $scores };
  const attrs = {
    maxOutputSize: $maxOutputSize,
    iouThreshold: $iouThreshold,
    scoreThreshold: $scoreThreshold,
    padToMaxOutputSize
  };
  const result = ENGINE.runKernel(
    NonMaxSuppressionV4,
    inputs,
    attrs
  );
  return { selectedIndices: result[0], validOutputs: result[1] };
}
var nonMaxSuppressionPadded = op({ nonMaxSuppressionPadded_ });

// src/tfjs-core/src/ops/image/resize_bilinear.ts
function resizeBilinear_(images, size, alignCorners = false, halfPixelCenters = false) {
  const $images = convertToTensor(images, "images", "resizeBilinear");
  assert(
    $images.rank === 3 || $images.rank === 4,
    () => `Error in resizeBilinear: x must be rank 3 or 4, but got rank ${$images.rank}.`
  );
  assert(
    size.length === 2,
    () => `Error in resizeBilinear: new shape must 2D, but got shape ${size}.`
  );
  assert(
    halfPixelCenters === false || alignCorners === false,
    () => `Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`
  );
  let batchImages = $images;
  let reshapedTo4D = false;
  if ($images.rank === 3) {
    reshapedTo4D = true;
    batchImages = reshape(
      $images,
      [1, $images.shape[0], $images.shape[1], $images.shape[2]]
    );
  }
  const [] = size;
  const inputs = { images: batchImages };
  const attrs = { alignCorners, halfPixelCenters, size };
  const res = ENGINE.runKernel(
    ResizeBilinear,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var resizeBilinear = op({ resizeBilinear_ });

// src/tfjs-core/src/ops/image/resize_nearest_neighbor.ts
function resizeNearestNeighbor_(images, size, alignCorners = false, halfPixelCenters = false) {
  const $images = convertToTensor(images, "images", "resizeNearestNeighbor");
  assert(
    $images.rank === 3 || $images.rank === 4,
    () => `Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${$images.rank}.`
  );
  assert(
    size.length === 2,
    () => `Error in resizeNearestNeighbor: new shape must 2D, but got shape ${size}.`
  );
  assert(
    $images.dtype === "float32" || $images.dtype === "int32",
    () => "`images` must have `int32` or `float32` as dtype"
  );
  assert(
    halfPixelCenters === false || alignCorners === false,
    () => `Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`
  );
  let batchImages = $images;
  let reshapedTo4D = false;
  if ($images.rank === 3) {
    reshapedTo4D = true;
    batchImages = reshape(
      $images,
      [1, $images.shape[0], $images.shape[1], $images.shape[2]]
    );
  }
  const [] = size;
  const inputs = { images: batchImages };
  const attrs = { alignCorners, halfPixelCenters, size };
  const res = ENGINE.runKernel(
    ResizeNearestNeighbor,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var resizeNearestNeighbor = op({ resizeNearestNeighbor_ });

// src/tfjs-core/src/ops/image/threshold.ts
function threshold_(image, method = "binary", inverted = false, threshValue = 0.5) {
  const $image = convertToTensor(image, "image", "threshold");
  const RED_INTENCITY_COEF = 0.2989;
  const GREEN_INTENCITY_COEF = 0.587;
  const BLUE_INTENCITY_COEF = 0.114;
  const totalPixelsInImage = $image.shape[0] * $image.shape[1];
  let $threshold = mul(tensor1d([threshValue]), 255);
  let r, g, b, grayscale;
  assert(
    $image.rank === 3,
    () => `Error in threshold: image must be rank 3,but got rank ${$image.rank}.`
  );
  assert(
    $image.shape[2] === 3 || $image.shape[2] === 1,
    () => `Error in threshold: image color channel must be equal to 3 or 1but got ${$image.shape[2]}.`
  );
  assert(
    $image.dtype === "int32" || $image.dtype === "float32",
    () => `Error in dtype: image dtype must be int32 or float32,but got dtype ${$image.dtype}.`
  );
  assert(
    method === "otsu" || method === "binary",
    () => `Method must be binary or otsu, but was ${method}`
  );
  if ($image.shape[2] === 3) {
    [r, g, b] = split($image, [1, 1, 1], -1);
    const $r = mul(r, RED_INTENCITY_COEF);
    const $g = mul(g, GREEN_INTENCITY_COEF);
    const $b = mul(b, BLUE_INTENCITY_COEF);
    grayscale = add3(add3($r, $g), $b);
  } else {
    grayscale = image;
  }
  if (method === "otsu") {
    const $histogram = bincount(
      cast(round2(grayscale), "int32"),
      tensor([]),
      256
    );
    $threshold = otsu($histogram, totalPixelsInImage);
  }
  const invCondition = inverted ? lessEqual(grayscale, $threshold) : greater(grayscale, $threshold);
  const result = cast(mul(invCondition, 255), "int32");
  return result;
}
function otsu(histogram, total) {
  let bestThresh = tensor1d([-1]);
  let bestInBetVar = tensor1d([0]);
  let cInBetVar = tensor1d([0]);
  let classFirst, classSecond, meanFirst, meanSec, weightForeground, weightBack;
  for (let index = 0; index < histogram.size - 1; index++) {
    classFirst = slice(histogram, 0, index + 1);
    classSecond = slice(histogram, index + 1);
    weightForeground = div(sum2(classFirst), total);
    weightBack = div(sum2(classSecond), total);
    const meanFirstDivA = sum2(mul(classFirst, range(0, classFirst.size)));
    meanFirst = div(meanFirstDivA, sum2(classFirst));
    const meanSecFill = fill(classSecond.shape, classFirst.size);
    const meanSecAdd = add3(range(0, classSecond.size), meanSecFill);
    const meanSecMul = mul(classSecond, meanSecAdd);
    meanSec = div(sum2(meanSecMul), sum2(classSecond));
    const cInBetVarSubA = sub(meanFirst, meanSec);
    const cInBetVarSubB = sub(meanFirst, meanSec);
    const cInBetVarMul = mul(weightForeground, weightBack);
    cInBetVar = mul(mul(cInBetVarMul, cInBetVarSubA), cInBetVarSubB);
    const condition = greater(cInBetVar, bestInBetVar);
    bestInBetVar = where(condition, cInBetVar, bestInBetVar);
    bestThresh = where(condition, tensor1d([index]), bestThresh);
  }
  return bestThresh;
}
var threshold = op({ threshold_ });

// src/tfjs-core/src/ops/image/transform.ts
function transform_(image, transforms, interpolation = "nearest", fillMode = "constant", fillValue = 0, outputShape) {
  const $image = convertToTensor(image, "image", "transform", "float32");
  const $transforms = convertToTensor(transforms, "transforms", "transform", "float32");
  assert(
    $image.rank === 4,
    () => `Error in transform: image must be rank 4,but got rank ${$image.rank}.`
  );
  assert(
    $transforms.rank === 2 && ($transforms.shape[0] === $image.shape[0] || $transforms.shape[0] === 1) && $transforms.shape[1] === 8,
    () => `Error in transform: Input transform should be batch x 8 or 1 x 8`
  );
  assert(
    outputShape == null || outputShape.length === 2,
    () => `Error in transform: outputShape must be [height, width] or null, but got ${outputShape}.`
  );
  const inputs = { image: $image, transforms: $transforms };
  const attrs = { interpolation, fillMode, fillValue, outputShape };
  return ENGINE.runKernel(
    Transform,
    inputs,
    attrs
  );
}
var transform = op({ transform_ });

// src/tfjs-core/src/ops/linalg/band_part.ts
function bandPart_(a, numLower, numUpper) {
  assert(
    numLower % 1 === 0,
    () => `bandPart(): numLower must be an integer, got ${numLower}.`
  );
  assert(
    numUpper % 1 === 0,
    () => `bandPart(): numUpper must be an integer, got ${numUpper}.`
  );
  const $a = convertToTensor(a, "a", "bandPart");
  assert(
    $a.rank >= 2,
    () => `bandPart(): Rank must be at least 2, got ${$a.rank}.`
  );
  const shape = $a.shape;
  const [M, N] = $a.shape.slice(-2);
  if (!(numLower <= M)) {
    throw new Error(
      `bandPart(): numLower (${numLower}) must not be greater than the number of rows (${M}).`
    );
  }
  if (!(numUpper <= N)) {
    throw new Error(
      `bandPart(): numUpper (${numUpper}) must not be greater than the number of columns (${N}).`
    );
  }
  if (numLower < 0) {
    numLower = M;
  }
  if (numUpper < 0) {
    numUpper = N;
  }
  const i = reshape(range(0, M, 1, "int32"), [-1, 1]);
  const j = range(0, N, 1, "int32");
  const ij = sub(i, j);
  const inBand = logicalAnd(
    lessEqual(ij, scalar(+numLower, "int32")),
    greaterEqual(ij, scalar(-numUpper, "int32"))
  );
  const zero = zeros([M, N], $a.dtype);
  return reshape(
    stack(unstack(reshape($a, [-1, M, N])).map((mat) => where(inBand, mat, zero))),
    shape
  );
}
var bandPart = op({ bandPart_ });

// src/tfjs-core/src/ops/linalg/gram_schmidt.ts
function gramSchmidt_(xs) {
  let inputIsTensor2D;
  if (Array.isArray(xs)) {
    inputIsTensor2D = false;
    assert(
      xs != null && xs.length > 0,
      () => "Gram-Schmidt process: input must not be null, undefined, or empty"
    );
    const dim = xs[0].shape[0];
    for (let i = 1; i < xs.length; ++i) {
      assert(
        xs[i].shape[0] === dim,
        () => `Gram-Schmidt: Non-unique lengths found in the input vectors: (${xs[i].shape[0]} vs. ${dim})`
      );
    }
  } else {
    inputIsTensor2D = true;
    xs = split(xs, xs.shape[0], 0).map((x) => squeeze(x, [0]));
  }
  assert(
    xs.length <= xs[0].shape[0],
    () => `Gram-Schmidt: Number of vectors (${xs.length}) exceeds number of dimensions (${xs[0].shape[0]}).`
  );
  const ys = [];
  const xs1d = xs;
  for (let i = 0; i < xs.length; ++i) {
    ys.push(ENGINE.tidy(() => {
      let x = xs1d[i];
      if (i > 0) {
        for (let j = 0; j < i; ++j) {
          const proj = mul(sum2(mul(ys[j], x)), ys[j]);
          x = sub(x, proj);
        }
      }
      return div(x, norm(x, "euclidean"));
    }));
  }
  if (inputIsTensor2D) {
    return stack(ys, 0);
  } else {
    return ys;
  }
}
var gramSchmidt = op({ gramSchmidt_ });

// src/tfjs-core/src/ops/linalg/qr.ts
function qr_(x, fullMatrices = false) {
  assert(
    x.rank >= 2,
    () => `qr() requires input tensor to have a rank >= 2, but got rank ${x.rank}`
  );
  if (x.rank === 2) {
    return qr2d(x, fullMatrices);
  } else {
    const outerDimsProd = x.shape.slice(0, x.shape.length - 2).reduce((value, prev) => value * prev);
    const x2ds = unstack(
      reshape(
        x,
        [
          outerDimsProd,
          x.shape[x.shape.length - 2],
          x.shape[x.shape.length - 1]
        ]
      ),
      0
    );
    const q2ds = [];
    const r2ds = [];
    x2ds.forEach((x2d) => {
      const [q2d, r2d] = qr2d(x2d, fullMatrices);
      q2ds.push(q2d);
      r2ds.push(r2d);
    });
    const q = reshape(stack(q2ds, 0), x.shape);
    const r = reshape(stack(r2ds, 0), x.shape);
    return [q, r];
  }
}
function qr2d(x, fullMatrices = false) {
  return ENGINE.tidy(() => {
    assert(
      x.shape.length === 2,
      () => `qr2d() requires a 2D Tensor, but got a ${x.shape.length}D Tensor.`
    );
    const m = x.shape[0];
    const n = x.shape[1];
    let q = eye(m);
    let r = clone(x);
    const one2D = tensor2d([[1]], [1, 1]);
    let w = clone(one2D);
    const iters = m >= n ? n : m;
    for (let j = 0; j < iters; ++j) {
      const rTemp = r;
      const wTemp = w;
      const qTemp = q;
      [w, r, q] = ENGINE.tidy(() => {
        const rjEnd1 = slice(r, [j, j], [m - j, 1]);
        const normX = norm(rjEnd1);
        const rjj = slice(r, [j, j], [1, 1]);
        const s = where(greater(rjj, 0), tensor2d([[-1]]), tensor2d([[1]]));
        const u1 = sub(rjj, mul(s, normX));
        const wPre = div(rjEnd1, u1);
        if (wPre.shape[0] === 1) {
          w = clone(one2D);
        } else {
          w = concat(
            [
              one2D,
              slice(wPre, [1, 0], [wPre.shape[0] - 1, wPre.shape[1]])
            ],
            0
          );
        }
        const tau = neg(div(matMul(s, u1), normX));
        const rjEndAll = slice(r, [j, 0], [m - j, n]);
        const tauTimesW = mul(tau, w);
        const wT = transpose(w);
        if (j === 0) {
          r = sub(rjEndAll, matMul(tauTimesW, matMul(wT, rjEndAll)));
        } else {
          const rTimesTau = sub(rjEndAll, matMul(tauTimesW, matMul(wT, rjEndAll)));
          r = concat([slice(r, [0, 0], [j, n]), rTimesTau], 0);
        }
        const tawTimesWT = transpose(tauTimesW);
        const qAllJEnd = slice(q, [0, j], [m, q.shape[1] - j]);
        if (j === 0) {
          q = sub(qAllJEnd, matMul(matMul(qAllJEnd, w), tawTimesWT));
        } else {
          const qTimesTau = sub(qAllJEnd, matMul(matMul(qAllJEnd, w), tawTimesWT));
          q = concat([slice(q, [0, 0], [m, j]), qTimesTau], 1);
        }
        return [w, r, q];
      });
      dispose([rTemp, wTemp, qTemp]);
    }
    if (!fullMatrices && m > n) {
      q = slice(q, [0, 0], [m, n]);
      r = slice(r, [0, 0], [n, n]);
    }
    return [q, r];
  });
}
var qr = op({ qr_ });

// src/tfjs-core/src/ops/losses/compute_weighted_loss.ts
function computeWeightedLoss_(losses, weights, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  const $losses = convertToTensor(losses, "losses", "computeWeightedLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "computeWeightedLoss");
  }
  const weightedLoss = $weights == null ? $losses : mul($losses, $weights);
  if (reduction === 0 /* NONE */) {
    return weightedLoss;
  }
  if (reduction === 2 /* SUM */) {
    return sum2(weightedLoss);
  }
  if (reduction === 1 /* MEAN */) {
    if ($weights == null) {
      return mean(weightedLoss);
    } else {
      const broadcastFactor = $losses.size / $weights.size;
      const result = div(sum2(weightedLoss), sum2($weights));
      return broadcastFactor > 1 ? div(result, scalar(broadcastFactor)) : result;
    }
  }
  if (reduction === 3 /* SUM_BY_NONZERO_WEIGHTS */) {
    if ($weights == null) {
      return div(sum2(weightedLoss), scalar($losses.size));
    } else {
      const broadcastedWeights = mul($weights, ones2($losses.shape));
      const numNonZeros = cast(sum2(notEqual(broadcastedWeights, scalar(0))), "float32");
      return div(sum2(weightedLoss), numNonZeros);
    }
  }
  throw Error(`Unknown reduction: ${reduction}`);
}
var computeWeightedLoss = op({ computeWeightedLoss_ });

// src/tfjs-core/src/ops/losses/absolute_difference.ts
function absoluteDifference_(labels, predictions, weights, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  const $labels = convertToTensor(labels, "labels", "absoluteDifference");
  const $predictions = convertToTensor(predictions, "predictions", "absoluteDifference");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "absoluteDifference");
  }
  assertShapesMatch(
    $labels.shape,
    $predictions.shape,
    "Error in absoluteDifference: "
  );
  const losses = abs(sub($labels, $predictions));
  return computeWeightedLoss(losses, $weights, reduction);
}
var absoluteDifference = op({ absoluteDifference_ });

// src/tfjs-core/src/ops/losses/cosine_distance.ts
function cosineDistance_(labels, predictions, axis, weights, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  const $labels = convertToTensor(labels, "labels", "cosineDistance");
  const $predictions = convertToTensor(predictions, "predictions", "cosineDistance");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "cosineDistance");
  }
  assertShapesMatch(
    $labels.shape,
    $predictions.shape,
    "Error in cosineDistance: "
  );
  const one = scalar(1);
  const losses = sub(one, sum2(mul($labels, $predictions), axis, true));
  return computeWeightedLoss(losses, $weights, reduction);
}
var cosineDistance = op({ cosineDistance_ });

// src/tfjs-core/src/ops/losses/hinge_loss.ts
function hingeLoss_(labels, predictions, weights, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  let $labels = convertToTensor(labels, "labels", "hingeLoss");
  const $predictions = convertToTensor(predictions, "predictions", "hingeLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "hingeLoss");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in hingeLoss: ");
  const one = scalar(1);
  $labels = sub(mul(scalar(2), $labels), one);
  const losses = relu(sub(one, mul($labels, $predictions)));
  return computeWeightedLoss(losses, $weights, reduction);
}
var hingeLoss = op({ hingeLoss_ });

// src/tfjs-core/src/ops/losses/huber_loss.ts
function huberLoss_(labels, predictions, weights, delta = 1, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  const $labels = convertToTensor(labels, "labels", "huberLoss");
  const $predictions = convertToTensor(predictions, "predictions", "huberLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "huberLoss");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in huberLoss: ");
  const deltaScalar = scalar(delta);
  const error = abs(sub($predictions, $labels));
  const quadratic = minimum(error, deltaScalar);
  const linear = sub(error, quadratic);
  const losses = add3(mul(scalar(0.5), square(quadratic)), mul(deltaScalar, linear));
  return computeWeightedLoss(losses, $weights, reduction);
}
var huberLoss = op({ huberLoss_ });

// src/tfjs-core/src/ops/losses/log_loss.ts
function logLoss_(labels, predictions, weights, epsilon = 1e-7, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  const $labels = convertToTensor(labels, "labels", "logLoss");
  const $predictions = convertToTensor(predictions, "predictions", "logLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "logLoss");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in logLoss: ");
  const one = scalar(1);
  const epsilonScalar = scalar(epsilon);
  const l1 = neg(mul($labels, log2(add3($predictions, epsilonScalar))));
  const l2 = mul(sub(one, $labels), log2(add3(sub(one, $predictions), epsilonScalar)));
  const losses = sub(l1, l2);
  return computeWeightedLoss(losses, $weights, reduction);
}
var logLoss = op({ logLoss_ });

// src/tfjs-core/src/ops/losses/mean_squared_error.ts
function meanSquaredError_(labels, predictions, weights, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  const $labels = convertToTensor(labels, "labels", "meanSquaredError");
  const $predictions = convertToTensor(predictions, "predictions", "meanSquaredError");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "meanSquaredError");
  }
  assertShapesMatch(
    $labels.shape,
    $predictions.shape,
    "Error in meanSquaredError: "
  );
  const losses = squaredDifference($labels, $predictions);
  return computeWeightedLoss(losses, $weights, reduction);
}
var meanSquaredError = op({ meanSquaredError_ });

// src/tfjs-core/src/ops/losses/sigmoid_cross_entropy.ts
function sigmoidCrossEntropyWithLogits_(labels, logits) {
  const $labels = convertToTensor(labels, "labels", "sigmoidCrossEntropyWithLogits");
  const $logits = convertToTensor(logits, "logits", "sigmoidCrossEntropyWithLogits");
  assertShapesMatch(
    $labels.shape,
    $logits.shape,
    "Error in sigmoidCrossEntropyWithLogits: "
  );
  const maxOutput = relu($logits);
  const outputXTarget = mul($logits, $labels);
  const sigmoidOutput = log1p(exp(neg(abs($logits))));
  return add3(sub(maxOutput, outputXTarget), sigmoidOutput);
}
function sigmoidCrossEntropy_(multiClassLabels, logits, weights, labelSmoothing = 0, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  let $multiClassLabels = convertToTensor(
    multiClassLabels,
    "multiClassLabels",
    "sigmoidCrossEntropy"
  );
  const $logits = convertToTensor(logits, "logits", "sigmoidCrossEntropy");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "sigmoidCrossEntropy");
  }
  assertShapesMatch(
    $multiClassLabels.shape,
    $logits.shape,
    "Error in sigmoidCrossEntropy: "
  );
  if (labelSmoothing > 0) {
    const labelSmoothingScalar = scalar(labelSmoothing);
    const one = scalar(1);
    const half = scalar(0.5);
    $multiClassLabels = add3(
      mul($multiClassLabels, sub(one, labelSmoothingScalar)),
      mul(half, labelSmoothingScalar)
    );
  }
  const losses = sigmoidCrossEntropyWithLogits_($multiClassLabels, $logits);
  return computeWeightedLoss(losses, $weights, reduction);
}
var sigmoidCrossEntropy = op({ sigmoidCrossEntropy_ });

// src/tfjs-core/src/ops/losses/softmax_cross_entropy.ts
function softmaxCrossEntropyWithLogits_(labels, logits, dim = -1) {
  if (dim === -1) {
    dim = logits.rank - 1;
  }
  if (dim !== logits.rank - 1) {
    throw Error(
      `Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${logits.rank} and dim was ${dim}`
    );
  }
  const customOp = customGrad((labels2, logits2, save) => {
    const keepDims = true;
    const lse = logSumExp(logits2, [dim], keepDims);
    const logResult = sub(cast(logits2, "float32"), lse);
    save([labels2, logResult]);
    const costVector = neg(mul(logResult, labels2));
    const value = sum2(costVector, [dim]);
    const gradFunc = (dy, saved) => {
      const [labels3, logResult2] = saved;
      const dyShape = expandShapeToKeepDim(dy.shape, [dim]);
      return [
        mul(
          reshape(dy, dyShape),
          sub(cast(labels3, "float32"), exp(logResult2))
        ),
        mul(
          reshape(dy, dyShape),
          sub(exp(logResult2), cast(labels3, "float32"))
        )
      ];
    };
    return { value, gradFunc };
  });
  return customOp(labels, logits);
}
function softmaxCrossEntropy_(onehotLabels, logits, weights, labelSmoothing = 0, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  let $onehotLabels = convertToTensor(onehotLabels, "onehotLabels", "softmaxCrossEntropy");
  const $logits = convertToTensor(logits, "logits", "softmaxCrossEntropy");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "softmaxCrossEntropy");
  }
  assertShapesMatch(
    $onehotLabels.shape,
    $logits.shape,
    "Error in softmaxCrossEntropy: "
  );
  if (labelSmoothing > 0) {
    const labelSmoothingScalar = scalar(labelSmoothing);
    const one = scalar(1);
    const numClasses = scalar($onehotLabels.shape[1]);
    $onehotLabels = add3(
      mul($onehotLabels, sub(one, labelSmoothingScalar)),
      div(labelSmoothingScalar, numClasses)
    );
  }
  const losses = softmaxCrossEntropyWithLogits_($onehotLabels, $logits);
  return computeWeightedLoss(losses, $weights, reduction);
}
var softmaxCrossEntropy = op({ softmaxCrossEntropy_ });

// src/tfjs-core/src/ops/sparse/sparse_fill_empty_rows.ts
function sparseFillEmptyRows_(indices, values, denseShape, defaultValue) {
  const $indices = convertToTensor(indices, "indices", "sparseFillEmptyRows", "int32");
  const $values = convertToTensor(values, "values", "sparseFillEmptyRows");
  const $denseShape = convertToTensor(denseShape, "denseShape", "sparseFillEmptyRows", "int32");
  const $defaultValue = convertToTensor(
    defaultValue,
    "defaultValue",
    "sparseFillEmptyRows",
    $values.dtype
  );
  if ($indices.rank !== 2) {
    throw new Error(`Indices should be Tensor2D but received shape
        ${$indices.shape}`);
  }
  if ($values.rank !== 1) {
    throw new Error(
      `Values should be Tensor1D but received shape ${$values.shape}`
    );
  }
  if ($denseShape.rank !== 1) {
    throw new Error(`Dense shape should be Tensor1D but received shape ${$denseShape.shape}`);
  }
  if ($defaultValue.rank !== 0) {
    throw new Error(`Default value should be a scalar but received shape ${$defaultValue.shape}`);
  }
  const inputs = {
    indices: $indices,
    values: $values,
    denseShape: $denseShape,
    defaultValue: $defaultValue
  };
  const result = ENGINE.runKernel(SparseFillEmptyRows, inputs);
  return {
    outputIndices: result[0],
    outputValues: result[1],
    emptyRowIndicator: result[2],
    reverseIndexMap: result[3]
  };
}
var sparseFillEmptyRows = op({ sparseFillEmptyRows_ });

// src/tfjs-core/src/ops/sparse/sparse_reshape.ts
function sparseReshape_(inputIndices, inputShape, newShape) {
  const $inputIndices = convertToTensor(inputIndices, "inputIndices", "sparseReshape", "int32");
  const $inputShape = convertToTensor(inputShape, "inputShape", "sparseReshape", "int32");
  const $newShape = convertToTensor(newShape, "newShape", "sparseReshape", "int32");
  if ($inputIndices.rank !== 2) {
    throw new Error(`Input indices should be Tensor2D but received shape
        ${$inputIndices.shape}`);
  }
  if ($inputShape.rank !== 1) {
    throw new Error(`Input shape should be Tensor1D but received shape ${$inputShape.shape}`);
  }
  if ($newShape.rank !== 1) {
    throw new Error(
      `New shape should be Tensor1D but received shape ${$newShape.shape}`
    );
  }
  const inputs = {
    inputIndices: $inputIndices,
    inputShape: $inputShape,
    newShape: $newShape
  };
  const result = ENGINE.runKernel(SparseReshape, inputs);
  return { outputIndices: result[0], outputShape: result[1] };
}
var sparseReshape = op({ sparseReshape_ });

// src/tfjs-core/src/ops/sparse/sparse_segment_mean.ts
function sparseSegmentMean_(data, indices, segmentIds) {
  const $data = convertToTensor(data, "data", "sparseSegmentMean");
  const $indices = convertToTensor(indices, "indices", "sparseSegmentMean", "int32");
  const $segmentIds = convertToTensor(segmentIds, "segmentIds", "sparseSegmentMean", "int32");
  if ($data.rank < 1) {
    throw new Error(
      `Data should be at least 1 dimensional but received scalar`
    );
  }
  if ($indices.rank !== 1) {
    throw new Error(`Indices should be Tensor1D but received shape
          ${$indices.shape}`);
  }
  if ($segmentIds.rank !== 1) {
    throw new Error(`Segment ids should be Tensor1D but received shape
          ${$segmentIds.shape}`);
  }
  const inputs = {
    data: $data,
    indices: $indices,
    segmentIds: $segmentIds
  };
  return ENGINE.runKernel(SparseSegmentMean, inputs);
}
var sparseSegmentMean = op({ sparseSegmentMean_ });

// src/tfjs-core/src/ops/sparse/sparse_segment_sum.ts
function sparseSegmentSum_(data, indices, segmentIds) {
  const $data = convertToTensor(data, "data", "sparseSegmentSum");
  const $indices = convertToTensor(indices, "indices", "sparseSegmentSum", "int32");
  const $segmentIds = convertToTensor(segmentIds, "segmentIds", "sparseSegmentSum", "int32");
  if ($data.rank < 1) {
    throw new Error(
      `Data should be at least 1 dimensional but received scalar`
    );
  }
  if ($indices.rank !== 1) {
    throw new Error(`Indices should be Tensor1D but received shape
         ${$indices.shape}`);
  }
  if ($segmentIds.rank !== 1) {
    throw new Error(`Segment ids should be Tensor1D but received shape
         ${$segmentIds.shape}`);
  }
  const inputs = {
    data: $data,
    indices: $indices,
    segmentIds: $segmentIds
  };
  return ENGINE.runKernel(SparseSegmentSum, inputs);
}
var sparseSegmentSum = op({ sparseSegmentSum_ });

// src/tfjs-core/src/ops/string/string_n_grams.ts
function stringNGrams_(data, dataSplits, separator, nGramWidths, leftPad, rightPad2, padWidth, preserveShortSequences) {
  const $data = convertToTensor(data, "data", "stringNGrams", "string");
  if ($data.dtype !== "string") {
    throw new Error("Data must be of datatype string");
  }
  if ($data.shape.length !== 1) {
    throw new Error(`Data must be a vector, saw: ${$data.shape}`);
  }
  const $dataSplits = convertToTensor(dataSplits, "dataSplits", "stringNGrams");
  if ($dataSplits.dtype !== "int32") {
    throw new Error("Data splits must be of datatype int32");
  }
  const attrs = {
    separator,
    nGramWidths,
    leftPad,
    rightPad: rightPad2,
    padWidth,
    preserveShortSequences
  };
  const inputs = { data: $data, dataSplits: $dataSplits };
  const result = ENGINE.runKernel(StringNGrams, inputs, attrs);
  return { nGrams: result[0], nGramsSplits: result[1] };
}
var stringNGrams = op({ stringNGrams_ });

// src/tfjs-core/src/ops/string/string_split.ts
function stringSplit_(input, delimiter, skipEmpty = true) {
  const $input = convertToTensor(input, "input", "stringSplit", "string");
  const $delimiter = convertToTensor(delimiter, "delimiter", "stringSplit", "string");
  if ($input.rank !== 1) {
    throw new Error(
      `Input should be Tensor1D but received shape ${$input.shape}`
    );
  }
  if ($delimiter.rank !== 0) {
    throw new Error(
      `Delimiter should be a scalar but received shape ${$delimiter.shape}`
    );
  }
  const attrs = { skipEmpty };
  const inputs = { input: $input, delimiter: $delimiter };
  const result = ENGINE.runKernel(StringSplit, inputs, attrs);
  return { indices: result[0], values: result[1], shape: result[2] };
}
var stringSplit = op({ stringSplit_ });

// src/tfjs-core/src/ops/string/string_to_hash_bucket_fast.ts
function stringToHashBucketFast_(input, numBuckets) {
  const $input = convertToTensor(input, "input", "stringToHashBucketFast", "string");
  const attrs = { numBuckets };
  if (numBuckets <= 0) {
    throw new Error(`Number of buckets must be at least 1`);
  }
  const inputs = { input: $input };
  return ENGINE.runKernel(StringToHashBucketFast, inputs, attrs);
}
var stringToHashBucketFast = op({ stringToHashBucketFast_ });

// src/tfjs-core/src/optimizers/optimizer.ts
var Optimizer = class extends Serializable {
  minimize(f, returnCost = false, varList) {
    const { value, grads: grads2 } = this.computeGradients(f, varList);
    if (varList != null) {
      const gradArray = varList.map((v) => ({ name: v.name, tensor: grads2[v.name] }));
      this.applyGradients(gradArray);
    } else {
      this.applyGradients(grads2);
    }
    dispose(grads2);
    if (returnCost) {
      return value;
    } else {
      value.dispose();
      return null;
    }
  }
  get iterations() {
    if (this.iterations_ == null) {
      this.iterations_ = 0;
    }
    return this.iterations_;
  }
  incrementIterations() {
    this.iterations_ = this.iterations + 1;
  }
  computeGradients(f, varList) {
    return variableGrads(f, varList);
  }
  dispose() {
    if (this.iterations_ != null) {
      dispose(this.iterations_);
    }
  }
  async saveIterations() {
    if (this.iterations_ == null) {
      this.iterations_ = 0;
    }
    return {
      name: "iter",
      tensor: scalar(this.iterations_, "int32")
    };
  }
  async getWeights() {
    throw new Error("getWeights() is not implemented for this optimizer yet.");
  }
  async setWeights(weightValues) {
    throw new Error(
      `setWeights() is not implemented for this optimizer class ${this.getClassName()}`
    );
  }
  async extractIterations(weightValues) {
    this.iterations_ = (await weightValues[0].tensor.data())[0];
    return weightValues.slice(1);
  }
};
Object.defineProperty(Optimizer, Symbol.hasInstance, {
  value: (instance) => {
    return instance.minimize != null && instance.computeGradients != null && instance.applyGradients != null;
  }
});

// src/tfjs-core/src/optimizers/adadelta_optimizer.ts
var AdadeltaOptimizer = class extends Optimizer {
  constructor(learningRate, rho, epsilon = null) {
    super();
    this.learningRate = learningRate;
    this.rho = rho;
    this.epsilon = epsilon;
    this.accumulatedGrads = [];
    this.accumulatedUpdates = [];
    if (epsilon == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    variableNames.forEach((name, i) => {
      const value = ENGINE.registeredVariables[name];
      const trainable = false;
      if (this.accumulatedGrads[i] == null) {
        this.accumulatedGrads[i] = {
          originalName: `${name}/accum_grad`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      if (this.accumulatedUpdates[i] == null) {
        this.accumulatedUpdates[i] = {
          originalName: `${name}/accum_var`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const accumulatedGrad = this.accumulatedGrads[i].variable;
      const accumulatedUpdate = this.accumulatedUpdates[i].variable;
      tidy(() => {
        const newAccumulatedGrad = add3(
          mul(accumulatedGrad, this.rho),
          mul(square(gradient), 1 - this.rho)
        );
        const updates = mul(
          div(
            sqrt(add3(accumulatedUpdate, this.epsilon)),
            sqrt(add3(accumulatedGrad, this.epsilon))
          ),
          gradient
        );
        const newAccumulatedUpdate = add3(
          mul(accumulatedUpdate, this.rho),
          mul(square(updates), 1 - this.rho)
        );
        accumulatedGrad.assign(newAccumulatedGrad);
        accumulatedUpdate.assign(newAccumulatedUpdate);
        const newValue = add3(mul(updates, -this.learningRate), value);
        value.assign(newValue);
      });
    });
    this.incrementIterations();
  }
  dispose() {
    if (this.accumulatedUpdates != null) {
      dispose(this.accumulatedGrads.map((v) => v.variable));
      dispose(this.accumulatedUpdates.map((v) => v.variable));
    }
  }
  async getWeights() {
    const variables = [...this.accumulatedGrads, ...this.accumulatedUpdates];
    return [await this.saveIterations()].concat(
      variables.map((v) => ({ name: v.originalName, tensor: v.variable }))
    );
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const variableCount = weightValues.length / 2;
    const trainable = false;
    this.accumulatedGrads = weightValues.slice(0, variableCount).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(
        trainable
      )
    }));
    this.accumulatedUpdates = weightValues.slice(variableCount, variableCount * 2).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "rho": this.rho,
      "epsilon": this.epsilon
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["rho"], config["epsilon"]);
  }
};
AdadeltaOptimizer.className = "Adadelta";
registerClass(AdadeltaOptimizer);

// src/tfjs-core/src/optimizers/adagrad_optimizer.ts
var AdagradOptimizer = class extends Optimizer {
  constructor(learningRate, initialAccumulatorValue = 0.1) {
    super();
    this.learningRate = learningRate;
    this.initialAccumulatorValue = initialAccumulatorValue;
    this.accumulatedGrads = [];
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    variableNames.forEach((name, i) => {
      const value = ENGINE.registeredVariables[name];
      if (this.accumulatedGrads[i] == null) {
        const trainable = false;
        this.accumulatedGrads[i] = {
          originalName: `${name}/accumulator`,
          variable: tidy(
            () => fill(value.shape, this.initialAccumulatorValue).variable(trainable)
          )
        };
      }
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const accumulatedGrad = this.accumulatedGrads[i].variable;
      tidy(() => {
        const newAccumulatedGrad = add3(accumulatedGrad, square(gradient));
        accumulatedGrad.assign(newAccumulatedGrad);
        const newValue = add3(
          mul(
            div(
              gradient,
              sqrt(add3(newAccumulatedGrad, ENGINE.backend.epsilon()))
            ),
            -this.learningRate
          ),
          value
        );
        value.assign(newValue);
      });
    });
    this.incrementIterations();
  }
  dispose() {
    if (this.accumulatedGrads != null) {
      dispose(this.accumulatedGrads.map((v) => v.variable));
    }
  }
  async getWeights() {
    return [await this.saveIterations()].concat(this.accumulatedGrads.map(
      (v) => ({ name: v.originalName, tensor: v.variable })
    ));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const trainable = false;
    this.accumulatedGrads = weightValues.map(
      (v) => ({ originalName: v.name, variable: v.tensor.variable(trainable) })
    );
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "initialAccumulatorValue": this.initialAccumulatorValue
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["initialAccumulatorValue"]);
  }
};
AdagradOptimizer.className = "Adagrad";
registerClass(AdagradOptimizer);

// src/tfjs-core/src/optimizers/adam_optimizer.ts
var AdamOptimizer = class extends Optimizer {
  constructor(learningRate, beta1, beta2, epsilon = null) {
    super();
    this.learningRate = learningRate;
    this.beta1 = beta1;
    this.beta2 = beta2;
    this.epsilon = epsilon;
    this.accumulatedFirstMoment = [];
    this.accumulatedSecondMoment = [];
    tidy(() => {
      this.accBeta1 = scalar(beta1).variable();
      this.accBeta2 = scalar(beta2).variable();
    });
    if (epsilon == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  applyGradients(variableGradients) {
    const varNames = Array.isArray(variableGradients) ? variableGradients.map((v) => v.name) : Object.keys(variableGradients);
    tidy(() => {
      const oneMinusAccBeta1 = sub(1, this.accBeta1);
      const oneMinusAccBeta2 = sub(1, this.accBeta2);
      varNames.forEach((name, i) => {
        const value = ENGINE.registeredVariables[name];
        const trainable = false;
        if (this.accumulatedFirstMoment[i] == null) {
          this.accumulatedFirstMoment[i] = {
            originalName: `${name}/m`,
            variable: tidy(() => zerosLike(value).variable(trainable))
          };
        }
        if (this.accumulatedSecondMoment[i] == null) {
          this.accumulatedSecondMoment[i] = {
            originalName: `${name}/v`,
            variable: tidy(() => zerosLike(value).variable(trainable))
          };
        }
        const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
        if (gradient == null) {
          return;
        }
        const firstMoment = this.accumulatedFirstMoment[i].variable;
        const secondMoment = this.accumulatedSecondMoment[i].variable;
        const newFirstMoment = add3(mul(firstMoment, this.beta1), mul(gradient, 1 - this.beta1));
        const newSecondMoment = add3(
          mul(secondMoment, this.beta2),
          mul(square(gradient), 1 - this.beta2)
        );
        const biasCorrectedFirstMoment = div(newFirstMoment, oneMinusAccBeta1);
        const biasCorrectedSecondMoment = div(newSecondMoment, oneMinusAccBeta2);
        firstMoment.assign(newFirstMoment);
        secondMoment.assign(newSecondMoment);
        const newValue = add3(
          mul(
            div(
              biasCorrectedFirstMoment,
              add3(sqrt(biasCorrectedSecondMoment), this.epsilon)
            ),
            -this.learningRate
          ),
          value
        );
        value.assign(newValue);
      });
      this.accBeta1.assign(mul(this.accBeta1, this.beta1));
      this.accBeta2.assign(mul(this.accBeta2, this.beta2));
    });
    this.incrementIterations();
  }
  dispose() {
    this.accBeta1.dispose();
    this.accBeta2.dispose();
    if (this.accumulatedFirstMoment != null) {
      dispose(this.accumulatedFirstMoment.map((v) => v.variable));
    }
    if (this.accumulatedSecondMoment != null) {
      dispose(this.accumulatedSecondMoment.map((v) => v.variable));
    }
  }
  async getWeights() {
    const variables = [...this.accumulatedFirstMoment, ...this.accumulatedSecondMoment];
    return [await this.saveIterations()].concat(
      variables.map((v) => ({ name: v.originalName, tensor: v.variable }))
    );
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    tidy(() => {
      this.accBeta1.assign(pow(this.beta1, this.iterations_ + 1));
      this.accBeta2.assign(pow(this.beta2, this.iterations_ + 1));
    });
    const variableCount = weightValues.length / 2;
    const trainable = false;
    this.accumulatedFirstMoment = weightValues.slice(0, variableCount).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(
        trainable
      )
    }));
    this.accumulatedSecondMoment = weightValues.slice(variableCount, variableCount * 2).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "beta1": this.beta1,
      "beta2": this.beta2,
      "epsilon": this.epsilon
    };
  }
  static fromConfig(cls, config) {
    return new cls(
      config["learningRate"],
      config["beta1"],
      config["beta2"],
      config["epsilon"]
    );
  }
};
AdamOptimizer.className = "Adam";
registerClass(AdamOptimizer);

// src/tfjs-core/src/optimizers/adamax_optimizer.ts
var AdamaxOptimizer = class extends Optimizer {
  constructor(learningRate, beta1, beta2, epsilon = null, decay = 0) {
    super();
    this.learningRate = learningRate;
    this.beta1 = beta1;
    this.beta2 = beta2;
    this.epsilon = epsilon;
    this.decay = decay;
    this.accumulatedFirstMoment = [];
    this.accumulatedWeightedInfNorm = [];
    tidy(() => {
      this.iteration = scalar(0).variable();
      this.accBeta1 = scalar(beta1).variable();
    });
    if (epsilon == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    tidy(() => {
      const oneMinusAccBeta1 = sub(1, this.accBeta1);
      const lr = div(-this.learningRate, add3(mul(this.iteration, this.decay), 1));
      variableNames.forEach((name, i) => {
        const value = ENGINE.registeredVariables[name];
        const trainable = false;
        if (this.accumulatedFirstMoment[i] == null) {
          this.accumulatedFirstMoment[i] = {
            originalName: `${name}/m`,
            variable: zerosLike(value).variable(trainable)
          };
        }
        if (this.accumulatedWeightedInfNorm[i] == null) {
          this.accumulatedWeightedInfNorm[i] = {
            originalName: `${name}/v`,
            variable: zerosLike(value).variable(trainable)
          };
        }
        const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
        if (gradient == null) {
          return;
        }
        const firstMoment = this.accumulatedFirstMoment[i].variable;
        const weightedInfNorm = this.accumulatedWeightedInfNorm[i].variable;
        const newFirstMoment = add3(mul(firstMoment, this.beta1), mul(gradient, 1 - this.beta1));
        const ut0 = mul(weightedInfNorm, this.beta2);
        const ut1 = abs(gradient);
        const newWeightedInfNorm = maximum(ut0, ut1);
        firstMoment.assign(newFirstMoment);
        weightedInfNorm.assign(newWeightedInfNorm);
        const newValue = add3(
          mul(
            div(lr, oneMinusAccBeta1),
            div(newFirstMoment, add3(newWeightedInfNorm, this.epsilon))
          ),
          value
        );
        value.assign(newValue);
      });
      this.iteration.assign(add3(this.iteration, 1));
      this.accBeta1.assign(mul(this.accBeta1, this.beta1));
    });
    this.incrementIterations();
  }
  dispose() {
    this.accBeta1.dispose();
    this.iteration.dispose();
    if (this.accumulatedFirstMoment != null) {
      dispose(this.accumulatedFirstMoment.map((v) => v.variable));
    }
    if (this.accumulatedWeightedInfNorm != null) {
      dispose(this.accumulatedWeightedInfNorm.map((v) => v.variable));
    }
  }
  async getWeights() {
    throw new Error("getWeights() is not implemented for Adamax yet.");
  }
  async setWeights(weightValues) {
    throw new Error("setWeights() is not implemented for Adamax yet.");
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "beta1": this.beta1,
      "beta2": this.beta2,
      "epsilon": this.epsilon,
      "decay": this.decay
    };
  }
  static fromConfig(cls, config) {
    return new cls(
      config["learningRate"],
      config["beta1"],
      config["beta2"],
      config["epsilon"],
      config["decay"]
    );
  }
};
AdamaxOptimizer.className = "Adamax";
registerClass(AdamaxOptimizer);

// src/tfjs-core/src/optimizers/sgd_optimizer.ts
var SGDOptimizer = class extends Optimizer {
  constructor(learningRate) {
    super();
    this.learningRate = learningRate;
    this.setLearningRate(learningRate);
  }
  applyGradients(variableGradients) {
    const varNames = Array.isArray(variableGradients) ? variableGradients.map((v) => v.name) : Object.keys(variableGradients);
    varNames.forEach((name, i) => {
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const value = ENGINE.registeredVariables[name];
      tidy(() => {
        const newValue = add3(mul(this.c, gradient), value);
        value.assign(newValue);
      });
    });
    this.incrementIterations();
  }
  setLearningRate(learningRate) {
    this.learningRate = learningRate;
    if (this.c != null) {
      this.c.dispose();
    }
    this.c = keep(scalar(-learningRate));
  }
  dispose() {
    this.c.dispose();
  }
  async getWeights() {
    return [await this.saveIterations()];
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    if (weightValues.length !== 0) {
      throw new Error("SGD optimizer does not have settable weights.");
    }
  }
  getConfig() {
    return { "learningRate": this.learningRate };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"]);
  }
};
SGDOptimizer.className = "SGD";
registerClass(SGDOptimizer);

// src/tfjs-core/src/optimizers/momentum_optimizer.ts
var MomentumOptimizer = class extends SGDOptimizer {
  constructor(learningRate, momentum, useNesterov = false) {
    super(learningRate);
    this.learningRate = learningRate;
    this.momentum = momentum;
    this.useNesterov = useNesterov;
    this.accumulations = [];
    this.m = scalar(this.momentum);
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    variableNames.forEach((name, i) => {
      const value = ENGINE.registeredVariables[name];
      if (this.accumulations[i] == null) {
        const trainable = false;
        this.accumulations[i] = {
          originalName: `${name}/momentum`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      const accumulation = this.accumulations[i].variable;
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      tidy(() => {
        let newValue;
        const newAccumulation = add3(mul(this.m, accumulation), gradient);
        if (this.useNesterov) {
          newValue = add3(
            mul(this.c, add3(gradient, mul(newAccumulation, this.m))),
            value
          );
        } else {
          newValue = add3(mul(this.c, newAccumulation), value);
        }
        accumulation.assign(newAccumulation);
        value.assign(newValue);
      });
    });
    this.incrementIterations();
  }
  dispose() {
    this.m.dispose();
    if (this.accumulations != null) {
      dispose(this.accumulations.map((v) => v.variable));
    }
  }
  setMomentum(momentum) {
    this.momentum = momentum;
  }
  async getWeights() {
    return [await this.saveIterations()].concat(this.accumulations.map(
      (v) => ({ name: v.originalName, tensor: v.variable })
    ));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const trainable = false;
    this.accumulations = weightValues.map(
      (v) => ({ originalName: v.name, variable: v.tensor.variable(trainable) })
    );
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "momentum": this.momentum,
      "useNesterov": this.useNesterov
    };
  }
  static fromConfig(cls, config) {
    return new cls(
      config["learningRate"],
      config["momentum"],
      config["useNesterov"]
    );
  }
};
MomentumOptimizer.className = "Momentum";
registerClass(MomentumOptimizer);

// src/tfjs-core/src/optimizers/rmsprop_optimizer.ts
var RMSPropOptimizer = class extends Optimizer {
  constructor(learningRate, decay = 0.9, momentum = 0, epsilon = null, centered = false) {
    super();
    this.learningRate = learningRate;
    this.decay = decay;
    this.momentum = momentum;
    this.epsilon = epsilon;
    this.accumulatedMeanSquares = [];
    this.accumulatedMoments = [];
    this.accumulatedMeanGrads = [];
    this.centered = centered;
    if (epsilon == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
    if (learningRate == null) {
      throw new Error(`learningRate for RMSPropOptimizer must be defined.`);
    }
  }
  applyGradients(variableGradients) {
    const variableNames = Array.isArray(variableGradients) ? variableGradients.map((item) => item.name) : Object.keys(variableGradients);
    variableNames.forEach((name, i) => {
      const value = ENGINE.registeredVariables[name];
      const trainable = false;
      if (this.accumulatedMeanSquares[i] == null) {
        this.accumulatedMeanSquares[i] = {
          originalName: `${name}/rms`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      if (this.accumulatedMoments[i] == null) {
        this.accumulatedMoments[i] = {
          originalName: `${name}/momentum`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      if (this.accumulatedMeanGrads[i] == null && this.centered) {
        this.accumulatedMeanGrads[i] = {
          originalName: `${name}/mg`,
          variable: tidy(() => zerosLike(value).variable(trainable))
        };
      }
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const accumulatedMeanSquare = this.accumulatedMeanSquares[i].variable;
      const accumulatedMoments = this.accumulatedMoments[i].variable;
      tidy(() => {
        const newAccumulatedMeanSquare = add3(
          mul(accumulatedMeanSquare, this.decay),
          mul(square(gradient), 1 - this.decay)
        );
        if (this.centered) {
          const accumulatedMeanGrad = this.accumulatedMeanGrads[i].variable;
          const newAccumulatedMeanGrad = add3(
            mul(accumulatedMeanGrad, this.decay),
            mul(gradient, 1 - this.decay)
          );
          const gradContribution = div(
            mul(gradient, this.learningRate),
            sqrt(
              sub(
                newAccumulatedMeanSquare,
                add3(square(newAccumulatedMeanGrad), this.epsilon)
              )
            )
          );
          const newAccumulatedMoments = add3(mul(accumulatedMoments, this.momentum), gradContribution);
          accumulatedMeanSquare.assign(newAccumulatedMeanSquare);
          accumulatedMeanGrad.assign(newAccumulatedMeanGrad);
          accumulatedMoments.assign(newAccumulatedMoments);
          const newValue = sub(value, newAccumulatedMoments);
          value.assign(newValue);
        } else {
          const newAccumulatedMeanSquare2 = add3(
            mul(accumulatedMeanSquare, this.decay),
            mul(square(gradient), 1 - this.decay)
          );
          const newAccumulatedMoments = add3(
            mul(accumulatedMoments, this.momentum),
            div(
              mul(gradient, this.learningRate),
              sqrt(add3(newAccumulatedMeanSquare2, this.epsilon))
            )
          );
          accumulatedMeanSquare.assign(newAccumulatedMeanSquare2);
          accumulatedMoments.assign(newAccumulatedMoments);
          const newValue = sub(value, newAccumulatedMoments);
          value.assign(newValue);
        }
      });
    });
    this.incrementIterations();
  }
  dispose() {
    if (this.accumulatedMeanSquares != null) {
      dispose(this.accumulatedMeanSquares.map((v) => v.variable));
    }
    if (this.accumulatedMeanGrads != null && this.centered) {
      dispose(this.accumulatedMeanGrads.map((v) => v.variable));
    }
    if (this.accumulatedMoments != null) {
      dispose(this.accumulatedMoments.map((v) => v.variable));
    }
  }
  async getWeights() {
    const variables = [...this.accumulatedMeanSquares, ...this.accumulatedMoments];
    if (this.centered) {
      variables.push(...this.accumulatedMeanGrads);
    }
    return [await this.saveIterations()].concat(
      variables.map((v) => ({ name: v.originalName, tensor: v.variable }))
    );
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const variableCount = this.centered ? weightValues.length / 3 : weightValues.length / 2;
    const trainable = false;
    this.accumulatedMeanSquares = weightValues.slice(0, variableCount).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(
        trainable
      )
    }));
    this.accumulatedMoments = weightValues.slice(variableCount, variableCount * 2).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
    }));
    if (this.centered) {
      this.accumulatedMeanGrads = weightValues.slice(variableCount * 2, variableCount * 3).map((v) => ({
        originalName: v.name,
        variable: v.tensor.variable(trainable)
      }));
    }
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "decay": this.decay,
      "momentum": this.momentum,
      "epsilon": this.epsilon,
      "centered": this.centered
    };
  }
  static fromConfig(cls, config) {
    return new cls(
      config["learningRate"],
      config["decay"],
      config["momentum"],
      config["epsilon"],
      config["centered"]
    );
  }
};
RMSPropOptimizer.className = "RMSProp";
registerClass(RMSPropOptimizer);

// src/tfjs-core/src/optimizers/optimizer_constructors.ts
var OptimizerConstructors = class {
  static sgd(learningRate) {
    return new SGDOptimizer(learningRate);
  }
  static momentum(learningRate, momentum, useNesterov = false) {
    return new MomentumOptimizer(learningRate, momentum, useNesterov);
  }
  static rmsprop(learningRate, decay = 0.9, momentum = 0, epsilon = null, centered = false) {
    return new RMSPropOptimizer(
      learningRate,
      decay,
      momentum,
      epsilon,
      centered
    );
  }
  static adam(learningRate = 1e-3, beta1 = 0.9, beta2 = 0.999, epsilon = null) {
    return new AdamOptimizer(learningRate, beta1, beta2, epsilon);
  }
  static adadelta(learningRate = 1e-3, rho = 0.95, epsilon = null) {
    return new AdadeltaOptimizer(learningRate, rho, epsilon);
  }
  static adamax(learningRate = 2e-3, beta1 = 0.9, beta2 = 0.999, epsilon = null, decay = 0) {
    return new AdamaxOptimizer(learningRate, beta1, beta2, epsilon, decay);
  }
  static adagrad(learningRate, initialAccumulatorValue = 0.1) {
    return new AdagradOptimizer(learningRate, initialAccumulatorValue);
  }
};

// src/tfjs-core/src/train.ts
var train = {
  sgd: OptimizerConstructors.sgd,
  momentum: OptimizerConstructors.momentum,
  adadelta: OptimizerConstructors.adadelta,
  adagrad: OptimizerConstructors.adagrad,
  rmsprop: OptimizerConstructors.rmsprop,
  adamax: OptimizerConstructors.adamax,
  adam: OptimizerConstructors.adam
};

// src/tfjs-core/src/browser_util.ts
var delayCallback = (() => {
  if (typeof requestAnimationFrame !== "undefined") {
    return requestAnimationFrame;
  } else if (typeof setImmediate !== "undefined") {
    return setImmediate;
  }
  return (f) => f();
})();

// src/tfjs-core/src/backends/backend_util.ts
var backend_util_exports = {};
__export(backend_util_exports, {
  ERF_A1: () => ERF_A1,
  ERF_A2: () => ERF_A2,
  ERF_A3: () => ERF_A3,
  ERF_A4: () => ERF_A4,
  ERF_A5: () => ERF_A5,
  ERF_P: () => ERF_P,
  PARALLELIZE_THRESHOLD: () => PARALLELIZE_THRESHOLD,
  RowPartitionType: () => RowPartitionType,
  SELU_SCALE: () => SELU_SCALE,
  SELU_SCALEALPHA: () => SELU_SCALEALPHA,
  applyActivation: () => applyActivation,
  assertAndGetBroadcastShape: () => assertAndGetBroadcastShape,
  assertAxesAreInnerMostDims: () => assertAxesAreInnerMostDims,
  assertParamsConsistent: () => assertParamsConsistent,
  assignToTypedArray: () => assignToTypedArray,
  axesAreInnerMostDims: () => axesAreInnerMostDims,
  calculateShapes: () => calculateShapes,
  checkEinsumDimSizes: () => checkEinsumDimSizes,
  checkPadOnDimRoundingMode: () => checkPadOnDimRoundingMode,
  combineLocations: () => combineLocations,
  combineRaggedTensorToTensorShapes: () => combineRaggedTensorToTensorShapes,
  complexWithEvenIndex: () => complexWithEvenIndex,
  complexWithOddIndex: () => complexWithOddIndex,
  computeConv2DInfo: () => computeConv2DInfo,
  computeConv3DInfo: () => computeConv3DInfo,
  computeDefaultPad: () => computeDefaultPad,
  computeDilation2DInfo: () => computeDilation2DInfo,
  computeOptimalWindowSize: () => computeOptimalWindowSize,
  computeOutAndReduceShapes: () => computeOutAndReduceShapes,
  computeOutShape: () => computeOutShape2,
  computePool2DInfo: () => computePool2DInfo,
  computePool3DInfo: () => computePool3DInfo,
  convertConv2DDataFormat: () => convertConv2DDataFormat,
  decodeEinsumEquation: () => decodeEinsumEquation,
  eitherStridesOrDilationsAreOne: () => eitherStridesOrDilationsAreOne,
  expandShapeToKeepDim: () => expandShapeToKeepDim,
  exponent: () => exponent,
  exponents: () => exponents,
  fromStringArrayToUint8: () => fromStringArrayToUint8,
  fromUint8ToStringArray: () => fromUint8ToStringArray,
  getAxesPermutation: () => getAxesPermutation,
  getBroadcastDims: () => getBroadcastDims,
  getComplexWithIndex: () => getComplexWithIndex,
  getEinsumComputePath: () => getEinsumComputePath,
  getEinsumPermutation: () => getEinsumPermutation,
  getFusedBiasGradient: () => getFusedBiasGradient,
  getFusedDyActivation: () => getFusedDyActivation,
  getImageCenter: () => getImageCenter,
  getInnerMostAxes: () => getInnerMostAxes,
  getPermuted: () => getPermuted,
  getRaggedRank: () => getRaggedRank,
  getReductionAxes: () => getReductionAxes,
  getReshaped: () => getReshaped,
  getReshapedPermuted: () => getReshapedPermuted,
  getRowPartitionTypesHelper: () => getRowPartitionTypesHelper,
  getSliceBeginCoords: () => getSliceBeginCoords,
  getSliceSize: () => getSliceSize,
  getSparseFillEmptyRowsIndicesDenseShapeMismatch: () => getSparseFillEmptyRowsIndicesDenseShapeMismatch,
  getSparseFillEmptyRowsNegativeIndexErrorMessage: () => getSparseFillEmptyRowsNegativeIndexErrorMessage,
  getSparseFillEmptyRowsOutOfRangeIndexErrorMessage: () => getSparseFillEmptyRowsOutOfRangeIndexErrorMessage,
  getSparseReshapeEmptyTensorZeroOutputDimErrorMessage: () => getSparseReshapeEmptyTensorZeroOutputDimErrorMessage,
  getSparseReshapeInputOutputMismatchErrorMessage: () => getSparseReshapeInputOutputMismatchErrorMessage,
  getSparseReshapeInputOutputMultipleErrorMessage: () => getSparseReshapeInputOutputMultipleErrorMessage,
  getSparseReshapeMultipleNegativeOneOutputDimErrorMessage: () => getSparseReshapeMultipleNegativeOneOutputDimErrorMessage,
  getSparseReshapeNegativeOutputDimErrorMessage: () => getSparseReshapeNegativeOutputDimErrorMessage,
  getSparseSegmentReductionIndicesOutOfRangeErrorMessage: () => getSparseSegmentReductionIndicesOutOfRangeErrorMessage,
  getSparseSegmentReductionNegativeSegmentIdsErrorMessage: () => getSparseSegmentReductionNegativeSegmentIdsErrorMessage,
  getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage: () => getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage,
  getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage: () => getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage,
  getUndoAxesPermutation: () => getUndoAxesPermutation,
  isIdentityPermutation: () => isIdentityPermutation,
  log: () => log,
  mergeRealAndImagArrays: () => mergeRealAndImagArrays,
  prepareAndValidate: () => prepareAndValidate,
  prepareSplitSize: () => prepareSplitSize,
  segment_util: () => segment_util_exports,
  shouldFuse: () => shouldFuse,
  slice_util: () => slice_util_exports,
  splitRealAndImagArrays: () => splitRealAndImagArrays,
  tupleValuesAreOne: () => tupleValuesAreOne,
  upcastType: () => upcastType,
  validateDefaultValueShape: () => validateDefaultValueShape,
  validateInput: () => validateInput,
  validateUpdateShape: () => validateUpdateShape,
  warn: () => warn
});

// src/tfjs-core/src/ops/concat_util.ts
function assertParamsConsistent(shapes, axis) {
  const rank = shapes[0].length;
  shapes.forEach((shape, i) => {
    assert(
      shape.length === rank,
      () => `Error in concat${rank}D: rank of tensors[${i}] must be the same as the rank of the rest (${rank})`
    );
  });
  assert(
    axis >= 0 && axis < rank,
    () => `Error in concat${rank}D: axis must be between 0 and ${rank - 1}.`
  );
  const firstShape = shapes[0];
  shapes.forEach((shape, i) => {
    for (let r = 0; r < rank; r++) {
      assert(
        r === axis || shape[r] === firstShape[r],
        () => `Error in concat${rank}D: Shape of tensors[${i}] (${shape}) does not match the shape of the rest (${firstShape}) along the non-concatenated axis ${i}.`
      );
    }
  });
}
function computeOutShape2(shapes, axis) {
  const outputShape = shapes[0].slice();
  for (let i = 1; i < shapes.length; i++) {
    outputShape[axis] += shapes[i][axis];
  }
  return outputShape;
}

// src/tfjs-core/src/ops/ragged_to_dense_util.ts
var RowPartitionType = /* @__PURE__ */ ((RowPartitionType3) => {
  RowPartitionType3[RowPartitionType3["FIRST_DIM_SIZE"] = 0] = "FIRST_DIM_SIZE";
  RowPartitionType3[RowPartitionType3["VALUE_ROWIDS"] = 1] = "VALUE_ROWIDS";
  RowPartitionType3[RowPartitionType3["ROW_LENGTHS"] = 2] = "ROW_LENGTHS";
  RowPartitionType3[RowPartitionType3["ROW_SPLITS"] = 3] = "ROW_SPLITS";
  RowPartitionType3[RowPartitionType3["ROW_LIMITS"] = 4] = "ROW_LIMITS";
  RowPartitionType3[RowPartitionType3["ROW_STARTS"] = 5] = "ROW_STARTS";
  return RowPartitionType3;
})(RowPartitionType || {});
function combineRaggedTensorToTensorShapes(raggedRank, shape, valueShape) {
  let outputShape = new Array();
  if (valueShape == null && shape == null) {
    return outputShape;
  }
  if (shape == null) {
    while (outputShape.length < raggedRank + valueShape.length) {
      outputShape.push(-1);
    }
  } else {
    outputShape = shape.slice();
  }
  if (valueShape == null) {
    return outputShape;
  }
  if (raggedRank + valueShape.length !== outputShape.length) {
    throw new Error(
      `rt input.shape and shape=${shape} are incompatible: rt input.rank = ${raggedRank + valueShape.length}, but shape.rank = ${outputShape.length}`
    );
  }
  for (let i = 1; i < valueShape.length; ++i) {
    const valueDim = valueShape[i];
    const outputShapeDimIndex = outputShape[outputShape.length - valueShape.length + i];
    const outputShapeDim = outputShape[outputShapeDimIndex];
    if (valueDim >= 0) {
      if (outputShapeDim >= 0) {
        if (outputShapeDim !== valueDim) {
          throw new Error(`rt input.shape and shape=${shape} are incompatible: rt input.shape[${i + raggedRank}] = ${valueDim} but shape[${i + raggedRank}] = ${outputShapeDim}`);
        }
      } else {
        outputShape[outputShapeDimIndex] = valueDim;
      }
    }
  }
  return outputShape;
}
function getRowPartitionTypesHelper(rowPartitionTypeStrings) {
  const stringToType = {
    "FIRST_DIM_SIZE": 0 /* FIRST_DIM_SIZE */,
    "VALUE_ROWIDS": 1 /* VALUE_ROWIDS */,
    "ROW_LENGTHS": 2 /* ROW_LENGTHS */,
    "ROW_SPLITS": 3 /* ROW_SPLITS */,
    "ROW_LIMITS": 4 /* ROW_LIMITS */,
    "ROW_STARTS": 5 /* ROW_STARTS */
  };
  const result = [];
  for (const typeStr of rowPartitionTypeStrings) {
    if (typeStr in stringToType) {
      result.push(stringToType[typeStr]);
    } else {
      break;
    }
  }
  return result;
}
function getRaggedRank(rowPartitionTypes) {
  if (rowPartitionTypes.length === 0) {
    return 0;
  }
  if (rowPartitionTypes[0] === 0 /* FIRST_DIM_SIZE */) {
    return rowPartitionTypes.length - 1;
  }
  return rowPartitionTypes.length;
}
function validateDefaultValueShape(defaultValueShape, valueShape) {
  if (defaultValueShape == null || valueShape == null) {
    return;
  }
  const defaultNDims = defaultValueShape.length;
  const valuesNDims = valueShape.length;
  if (defaultNDims >= valuesNDims) {
    throw new Error(`defaultValue.shape=${defaultValueShape} and ragged tensor flatValues.shape=${valueShape}, are incompatible: defaultValue.rank = ${defaultNDims} must be less than ragged tensor input flatValues.rank = ${valuesNDims})`);
  }
  for (let i = 0; i < Math.min(defaultNDims, valuesNDims - 1); ++i) {
    const defaultDim = defaultValueShape[i];
    const valueDim = valueShape[i + 1];
    if (defaultDim >= 0 && valueDim >= 0 && defaultDim !== 1 && defaultDim !== valueDim) {
      throw new Error(`defaultValue.shape=${defaultValueShape}, and ragged tensor input flatValues.shape=${valueShape} are incompatible: defaultValue.shape[${i - defaultValueShape.length}] = ${defaultDim} but ragged tensor input.flatValues.shape[${i - defaultValueShape.length}] = ${valueDim}`);
    }
  }
}

// src/tfjs-core/src/ops/reduce_util.ts
var PARALLELIZE_THRESHOLD = 30;
function computeOptimalWindowSize(inSize) {
  if (inSize <= PARALLELIZE_THRESHOLD) {
    return inSize;
  }
  return nearestDivisor(inSize, Math.floor(Math.sqrt(inSize)));
}

// src/tfjs-core/src/ops/rotate_util.ts
function getImageCenter(center, imageHeight, imageWidth) {
  const centerX = imageWidth * (typeof center === "number" ? center : center[0]);
  const centerY = imageHeight * (typeof center === "number" ? center : center[1]);
  return [centerX, centerY];
}

// src/tfjs-core/src/ops/array_ops_util.ts
function getReshaped(inputShape, blockShape, prod3, batchToSpace = true) {
  let reshaped = [];
  if (batchToSpace) {
    reshaped = reshaped.concat(blockShape.slice(0));
    reshaped.push(inputShape[0] / prod3);
    reshaped = reshaped.concat(inputShape.slice(1));
  } else {
    reshaped = reshaped.concat(inputShape[0]);
    const spatialLength = blockShape.length;
    for (let i = 0; i < spatialLength; ++i) {
      reshaped = reshaped.concat([inputShape[i + 1] / blockShape[i], blockShape[i]]);
    }
    reshaped = reshaped.concat(inputShape.slice(spatialLength + 1));
  }
  return reshaped;
}
function getPermuted(reshapedRank, blockShapeRank, batchToSpace = true) {
  const permuted = [];
  if (batchToSpace) {
    permuted.push(blockShapeRank);
    for (let i = blockShapeRank + 1; i < reshapedRank; ++i) {
      if (i <= 2 * blockShapeRank) {
        permuted.push(i);
        permuted.push(i - (blockShapeRank + 1));
      } else {
        permuted.push(i);
      }
    }
  } else {
    const permutedBeforeBatch = [];
    const permutedAfterBatch = [];
    for (let i = 1; i < reshapedRank; ++i) {
      if (i >= blockShapeRank * 2 + 1 || i % 2 === 1) {
        permutedAfterBatch.push(i);
      } else {
        permutedBeforeBatch.push(i);
      }
    }
    permuted.push(...permutedBeforeBatch);
    permuted.push(0);
    permuted.push(...permutedAfterBatch);
  }
  return permuted;
}
function getReshapedPermuted(inputShape, blockShape, prod3, batchToSpace = true) {
  const reshapedPermuted = [];
  if (batchToSpace) {
    reshapedPermuted.push(inputShape[0] / prod3);
  } else {
    reshapedPermuted.push(inputShape[0] * prod3);
  }
  for (let i = 1; i < inputShape.length; ++i) {
    if (i <= blockShape.length) {
      if (batchToSpace) {
        reshapedPermuted.push(blockShape[i - 1] * inputShape[i]);
      } else {
        reshapedPermuted.push(inputShape[i] / blockShape[i - 1]);
      }
    } else {
      reshapedPermuted.push(inputShape[i]);
    }
  }
  return reshapedPermuted;
}
function getSliceBeginCoords(crops, blockShape) {
  const sliceBeginCoords = [0];
  for (let i = 0; i < blockShape; ++i) {
    sliceBeginCoords.push(crops[i][0]);
  }
  return sliceBeginCoords;
}
function getSliceSize(uncroppedShape, crops, blockShape) {
  const sliceSize = uncroppedShape.slice(0, 1);
  for (let i = 0; i < blockShape; ++i) {
    sliceSize.push(uncroppedShape[i + 1] - crops[i][0] - crops[i][1]);
  }
  return sliceSize;
}

// src/tfjs-core/src/ops/selu_util.ts
var SELU_SCALEALPHA = 1.7580993408473768;
var SELU_SCALE = 1.0507009873554805;

// src/tfjs-core/src/ops/erf_util.ts
var ERF_P = 0.3275911;
var ERF_A1 = 0.254829592;
var ERF_A2 = -0.284496736;
var ERF_A3 = 1.421413741;
var ERF_A4 = -1.453152027;
var ERF_A5 = 1.061405429;

// src/tfjs-core/src/backends/complex_util.ts
function mergeRealAndImagArrays(real3, imag2) {
  if (real3.length !== imag2.length) {
    throw new Error(
      `Cannot merge real and imag arrays of different lengths. real:${real3.length}, imag: ${imag2.length}.`
    );
  }
  const result = new Float32Array(real3.length * 2);
  for (let i = 0; i < result.length; i += 2) {
    result[i] = real3[i / 2];
    result[i + 1] = imag2[i / 2];
  }
  return result;
}
function splitRealAndImagArrays(complex3) {
  const real3 = new Float32Array(complex3.length / 2);
  const imag2 = new Float32Array(complex3.length / 2);
  for (let i = 0; i < complex3.length; i += 2) {
    real3[i / 2] = complex3[i];
    imag2[i / 2] = complex3[i + 1];
  }
  return { real: real3, imag: imag2 };
}
function complexWithEvenIndex(complex3) {
  const len = Math.ceil(complex3.length / 4);
  const real3 = new Float32Array(len);
  const imag2 = new Float32Array(len);
  for (let i = 0; i < complex3.length; i += 4) {
    real3[Math.floor(i / 4)] = complex3[i];
    imag2[Math.floor(i / 4)] = complex3[i + 1];
  }
  return { real: real3, imag: imag2 };
}
function complexWithOddIndex(complex3) {
  const len = Math.floor(complex3.length / 4);
  const real3 = new Float32Array(len);
  const imag2 = new Float32Array(len);
  for (let i = 2; i < complex3.length; i += 4) {
    real3[Math.floor(i / 4)] = complex3[i];
    imag2[Math.floor(i / 4)] = complex3[i + 1];
  }
  return { real: real3, imag: imag2 };
}
function getComplexWithIndex(complex3, index) {
  const real3 = complex3[index * 2];
  const imag2 = complex3[index * 2 + 1];
  return { real: real3, imag: imag2 };
}
function assignToTypedArray(data, real3, imag2, index) {
  data[index * 2] = real3;
  data[index * 2 + 1] = imag2;
}
function exponents(n, inverse) {
  const real3 = new Float32Array(n / 2);
  const imag2 = new Float32Array(n / 2);
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    const x = (inverse ? 2 : -2) * Math.PI * (i / n);
    real3[i] = Math.cos(x);
    imag2[i] = Math.sin(x);
  }
  return { real: real3, imag: imag2 };
}
function exponent(k, n, inverse) {
  const x = (inverse ? 2 : -2) * Math.PI * (k / n);
  const real3 = Math.cos(x);
  const imag2 = Math.sin(x);
  return { real: real3, imag: imag2 };
}

// src/tfjs-core/src/backends/einsum_util.ts
var ARROW = "->";
var ARROW_REGEX = /->/g;
var COMMA = ",";
var ELLIPSIS = "...";
function decodeEinsumEquation(equation, numTensors) {
  equation = equation.replace(/\s/g, "");
  const numArrows = (equation.length - equation.replace(ARROW_REGEX, "").length) / ARROW.length;
  if (numArrows < 1) {
    throw new Error("Equations without an arrow are not supported.");
  } else if (numArrows > 1) {
    throw new Error(`Equation must contain exactly one arrow ("${ARROW}").`);
  }
  const [inputString, outputString] = equation.split(ARROW);
  assert(
    inputString.indexOf(ELLIPSIS) === -1,
    () => `The ellipsis notation ("${ELLIPSIS}") is not supported yet.`
  );
  const inputTerms = inputString.split(COMMA);
  const numInputs = inputTerms.length;
  if (numTensors !== numInputs) {
    throw new Error(
      `Expected ${numInputs} input tensors, received ${numTensors}`
    );
  }
  if (numInputs > 2) {
    throw new Error(
      "Support for more than 2 input tensors is not implemented yet."
    );
  }
  const allDims = [];
  for (let i = 0; i < outputString.length; ++i) {
    const dimName = outputString[i];
    if (!inputTerms.some((inputTerm) => inputTerm.indexOf(dimName) !== -1)) {
      throw new Error(
        `Output subscripts contain the label ${dimName} not present in the input subscripts.`
      );
    }
    if (allDims.indexOf(dimName) === -1) {
      allDims.push(dimName);
    }
  }
  for (let i = 0; i < inputString.length; ++i) {
    const dimName = inputString[i];
    if (allDims.indexOf(dimName) === -1 && dimName !== COMMA) {
      allDims.push(dimName);
    }
  }
  const idDims = new Array(inputTerms.length);
  for (let i = 0; i < numInputs; ++i) {
    if (new Set(inputTerms[i].split("")).size !== inputTerms[i].length) {
      throw new Error(
        `Found duplicate axes in input component ${inputTerms[i]}. Support for duplicate axes in input is not implemented yet.`
      );
    }
    idDims[i] = [];
    for (let j = 0; j < inputTerms[i].length; ++j) {
      idDims[i].push(allDims.indexOf(inputTerms[i][j]));
    }
  }
  const numDims = allDims.length;
  const numOutDims = outputString.length;
  const summedDims = [];
  for (let i = numOutDims; i < numDims; ++i) {
    summedDims.push(i);
  }
  return { allDims, summedDims, idDims };
}
function getEinsumPermutation(nDims, idDims) {
  let permutationIndices = new Array(nDims);
  permutationIndices.fill(-1);
  for (let i = 0; i < idDims.length; ++i) {
    permutationIndices[idDims[i]] = i;
  }
  const expandDims3 = [];
  for (let i = 0; i < nDims; ++i) {
    if (permutationIndices[i] === -1) {
      expandDims3.push(i);
    }
  }
  permutationIndices = permutationIndices.filter((d) => d !== -1);
  return { permutationIndices, expandDims: expandDims3 };
}
function checkEinsumDimSizes(nDims, idDims, tensors) {
  const dimSizes = new Array(nDims);
  for (let i = 0; i < tensors.length; ++i) {
    const shape = tensors[i].shape;
    for (let j = 0; j < idDims[i].length; ++j) {
      if (dimSizes[idDims[i][j]] === void 0) {
        dimSizes[idDims[i][j]] = shape[j];
      } else {
        assert(
          dimSizes[idDims[i][j]] === shape[j],
          () => `Expected dimension ${dimSizes[idDims[i][j]]} at axis ${j} of input shaped ${JSON.stringify(shape)}, but got dimension ${shape[j]}`
        );
      }
    }
  }
}
function getEinsumComputePath(summedDims, idDims) {
  const path = summedDims;
  const steps = [];
  let nSteps = 0;
  if (summedDims.length === 0) {
    path.push(-1);
  }
  nSteps = summedDims.length + 1;
  for (let i = 0; i < nSteps; ++i) {
    steps.push([]);
  }
  const computedTermIndices = [];
  for (let i = 0; i < path.length; ++i) {
    const summedDim = path[i];
    const termIndices = findTermsWithDim(idDims, summedDim);
    for (const termIndex of termIndices) {
      if (computedTermIndices.indexOf(termIndex) === -1) {
        steps[i].push(termIndex);
        computedTermIndices.push(termIndex);
      }
    }
  }
  return { path, steps };
}
function isIdentityPermutation(perm) {
  return perm.every((dim, index) => dim === index);
}
function findTermsWithDim(idDims, dim) {
  const termIndices = [];
  for (let i = 0; i < idDims.length; ++i) {
    if (idDims[i].length === 0 || idDims[i].indexOf(dim) !== -1 || dim === -1) {
      termIndices.push(i);
    }
  }
  return termIndices;
}

// src/tfjs-core/src/ops/split_util.ts
function prepareSplitSize(x, numOrSizeSplits, axis = 0) {
  let splitSizes = [];
  if (typeof numOrSizeSplits === "number") {
    assert(
      x.shape[axis] % numOrSizeSplits === 0,
      () => "Number of splits must evenly divide the axis."
    );
    splitSizes = new Array(numOrSizeSplits).fill(x.shape[axis] / numOrSizeSplits);
  } else {
    const numOfNegs = numOrSizeSplits.reduce((count, value) => {
      if (value === -1) {
        count += 1;
      }
      return count;
    }, 0);
    assert(
      numOfNegs <= 1,
      () => "There should be only one negative value in split array."
    );
    const negIndex = numOrSizeSplits.indexOf(-1);
    if (negIndex !== -1) {
      const total = numOrSizeSplits.reduce((a, b) => b > 0 ? a + b : a);
      numOrSizeSplits[negIndex] = x.shape[axis] - total;
    }
    assert(
      x.shape[axis] === numOrSizeSplits.reduce((a, b) => a + b),
      () => "The sum of sizes must match the size of the axis dimension."
    );
    splitSizes = numOrSizeSplits;
  }
  return splitSizes;
}

// src/tfjs-core/src/ops/sparse/sparse_fill_empty_rows_util.ts
function getSparseFillEmptyRowsIndicesDenseShapeMismatch(indicesLength) {
  return `Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${indicesLength}`;
}
function getSparseFillEmptyRowsNegativeIndexErrorMessage(index, value) {
  return `indices(${index}, 0) is invalid: ${value} < 0`;
}
function getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(index, value, limit) {
  return `indices(${index}, 0) is invalid: ${value} >= ${limit}`;
}

// src/tfjs-core/src/ops/sparse/sparse_reshape_util.ts
function getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(dim1, dim2) {
  return `only one output dimension may be -1, not both ${dim1} and ${dim2}`;
}
function getSparseReshapeNegativeOutputDimErrorMessage(dim, value) {
  return `size ${dim} must be non-negative, not ${value}`;
}
function getSparseReshapeEmptyTensorZeroOutputDimErrorMessage() {
  return "reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero";
}
function getSparseReshapeInputOutputMultipleErrorMessage(inputShape, outputShape) {
  const inputSize = sizeFromShape(inputShape);
  const outputSize = sizeFromShape(outputShape);
  return `Input to reshape is a SparseTensor with ${inputSize}
  dense values, but the requested shape requires a multiple of ${outputSize}. inputShape=${inputShape} outputShape= ${outputShape}`;
}
function getSparseReshapeInputOutputMismatchErrorMessage(inputShape, outputShape) {
  const inputSize = sizeFromShape(inputShape);
  const outputSize = sizeFromShape(outputShape);
  return `Input to reshape is a tensor with ${inputSize} dense values, but the requested shape has ${outputSize}. inputShape=${inputShape} outputShape=${outputShape}`;
}

// src/tfjs-core/src/ops/sparse/sparse_segment_reduction_util.ts
function getSparseSegmentReductionNegativeSegmentIdsErrorMessage() {
  return `segment ids must be >= 0`;
}
function getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage() {
  return `segment ids are not increasing`;
}
function getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(segmentId, outputRows) {
  return `Segment id ${segmentId} out of range [0, ${outputRows}), possibly because segmentIds input is not sorted.`;
}
function getSparseSegmentReductionIndicesOutOfRangeErrorMessage(index, indexValue, inputRows) {
  return `Bad: indices[${index}] == ${indexValue} out of range [0, ${inputRows})`;
}

// src/tfjs-core/src/ops/segment_util.ts
var segment_util_exports = {};
__export(segment_util_exports, {
  collectGatherOpShapeInfo: () => collectGatherOpShapeInfo,
  computeOutShape: () => computeOutShape3,
  segOpComputeOptimalWindowSize: () => segOpComputeOptimalWindowSize
});
function segOpComputeOptimalWindowSize(inSize, numSegments) {
  let done = false;
  let res;
  if (inSize <= PARALLELIZE_THRESHOLD) {
    res = inSize;
    done = true;
  } else {
    res = nearestDivisor(inSize, Math.floor(Math.sqrt(inSize)));
  }
  while (!done) {
    if (res > numSegments || res === inSize) {
      done = true;
    } else {
      res = nearestDivisor(inSize, res + 1);
    }
  }
  return res;
}
function computeOutShape3(aShape, axis, numSegments) {
  const outShape = [];
  const rank = aShape.length;
  for (let dim = 0; dim < rank; dim++) {
    if (dim !== axis) {
      outShape.push(aShape[dim]);
    } else {
      outShape.push(numSegments);
    }
  }
  return outShape;
}
function collectGatherOpShapeInfo(x, indices, axis, batchDims) {
  const indicesRank = indices.shape.length;
  const xRank = x.shape.length;
  if (batchDims !== 0) {
    if (batchDims < -indicesRank || batchDims > indicesRank) {
      throw new Error(`Expect batchDims in the range of [-${indicesRank}, ${indicesRank}], but got ${batchDims}`);
    }
  }
  if (batchDims < 0) {
    batchDims += indicesRank;
  }
  if (batchDims > xRank) {
    throw new Error(`batchDims (${batchDims}) must be less than rank(x) (
    ${xRank}).`);
  }
  if (axis < batchDims) {
    throw new Error(`batchDims (${batchDims}) must be less than or equal to axis (${axis}).`);
  }
  for (let i = 0; i < batchDims; ++i) {
    if (x.shape[i] !== indices.shape[i]) {
      throw new Error(
        `x.shape[${i}]: ${x.shape[i]} should be equal to indices.shape[${i}]: ${indices.shape[i]}.`
      );
    }
  }
  const dimSize = x.shape[axis];
  const outputShape = [];
  let batchSize = 1;
  let outerSize = 1;
  let sliceSize = 1;
  for (let i = 0; i < batchDims; ++i) {
    outputShape.push(x.shape[i]);
    batchSize *= x.shape[i];
  }
  for (let i = batchDims; i < axis; i++) {
    outputShape.push(x.shape[i]);
    outerSize *= x.shape[i];
  }
  for (let i = batchDims; i < indicesRank; i++) {
    outputShape.push(indices.shape[i]);
  }
  for (let i = axis + 1; i < xRank; i++) {
    outputShape.push(x.shape[i]);
    sliceSize *= x.shape[i];
  }
  return { batchSize, sliceSize, outerSize, dimSize, outputShape };
}

// src/tfjs-core/src/backends/backend_util.ts
function fromUint8ToStringArray(vals) {
  try {
    return vals.map((val) => decodeString(val));
  } catch (err2) {
    throw new Error(
      `Failed to decode encoded string bytes into utf-8, error: ${err2}`
    );
  }
}
function fromStringArrayToUint8(strings) {
  return strings.map((s) => encodeString(s));
}

// src/tfjs-backend-wasm/src/kernels/types.ts
var CppDType = /* @__PURE__ */ ((CppDType2) => {
  CppDType2[CppDType2["float32"] = 0] = "float32";
  CppDType2[CppDType2["int32"] = 1] = "int32";
  CppDType2[CppDType2["bool"] = 2] = "bool";
  CppDType2[CppDType2["string"] = 3] = "string";
  CppDType2[CppDType2["complex64"] = 4] = "complex64";
  return CppDType2;
})(CppDType || {});
var FusableActivation = /* @__PURE__ */ ((FusableActivation2) => {
  FusableActivation2[FusableActivation2["linear"] = 0] = "linear";
  FusableActivation2[FusableActivation2["relu"] = 1] = "relu";
  FusableActivation2[FusableActivation2["relu6"] = 2] = "relu6";
  FusableActivation2[FusableActivation2["prelu"] = 3] = "prelu";
  FusableActivation2[FusableActivation2["leakyrelu"] = 4] = "leakyrelu";
  FusableActivation2[FusableActivation2["sigmoid"] = 5] = "sigmoid";
  FusableActivation2[FusableActivation2["elu"] = 6] = "elu";
  return FusableActivation2;
})(FusableActivation || {});

// src/tfjs-backend-wasm/src/kernels/_FusedMatMul.ts
var wasmFusedMatMul;
function setup(backend) {
  wasmFusedMatMul = backend.wasm.cwrap(_FusedMatMul, null, [
    "number",
    "array",
    "number",
    "number",
    "array",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function fusedBatchMatMul(args) {
  const { inputs, backend, attrs } = args;
  const { a, b, bias, preluActivationWeights } = inputs;
  if (a.dtype !== "float32" || b.dtype !== "float32") {
    throw new Error(
      `_FusedMatMul for non non-float32 tensors not yet supported.`
    );
  }
  const { transposeA, transposeB, activation, leakyreluAlpha } = attrs;
  const aId = backend.dataIdMap.get(a.dataId).id;
  const bId = backend.dataIdMap.get(b.dataId).id;
  let biasId = 0;
  if (bias != null) {
    const biasData = backend.dataIdMap.get(bias.dataId);
    if (biasData.shape.length !== 1) {
      throw new Error(
        `_FusedMatMul only supports rank-1 bias but got rank ${biasData.shape.length}.`
      );
    }
    biasId = biasData.id;
  }
  const preluActivationWeightsId = preluActivationWeights == null ? 0 : backend.dataIdMap.get(preluActivationWeights.dataId).id;
  const fusedActivation = FusableActivation[activation];
  if (fusedActivation == null) {
    throw new Error(
      `${activation} activation not yet supported for FusedConv2D in the wasm backend.`
    );
  }
  const leftDim = transposeA ? a.shape[2] : a.shape[1];
  const rightDim = transposeB ? b.shape[1] : b.shape[2];
  const batchDims = broadcast_util_exports.assertAndGetBroadcastShape(
    a.shape.slice(0, -2),
    b.shape.slice(0, -2)
  );
  const out = backend.makeOutput([...batchDims, leftDim, rightDim], a.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const aShapeBytes = new Uint8Array(new Int32Array(a.shape).buffer);
  const bShapeBytes = new Uint8Array(new Int32Array(b.shape).buffer);
  wasmFusedMatMul(
    aId,
    aShapeBytes,
    a.shape.length,
    bId,
    bShapeBytes,
    b.shape.length,
    transposeA,
    transposeB,
    fusedActivation,
    biasId,
    preluActivationWeightsId,
    leakyreluAlpha || 0,
    outId
  );
  return out;
}
var _fusedMatMulConfig = {
  kernelName: _FusedMatMul,
  backendName: "wasm",
  setupFunc: setup,
  kernelFunc: fusedBatchMatMul
};

// src/tfjs-backend-wasm/src/kernels/unary_kernel.ts
function createUnaryKernelConfig(kernelName, outType) {
  let wasmFunc9;
  function setupFunc3(backend) {
    wasmFunc9 = backend.wasm.cwrap(kernelName, null, [
      "number",
      "number",
      "number"
    ]);
  }
  function kernelFunc3(args) {
    const { backend, inputs: { x } } = args;
    const xId = backend.dataIdMap.get(x.dataId).id;
    const out = backend.makeOutput(x.shape, outType || x.dtype);
    const outId = backend.dataIdMap.get(out.dataId).id;
    if (util_exports.sizeFromShape(out.shape) === 0) {
      return out;
    }
    wasmFunc9(xId, CppDType[x.dtype], outId);
    return out;
  }
  return { kernelName, backendName: "wasm", setupFunc: setupFunc3, kernelFunc: kernelFunc3 };
}

// src/tfjs-backend-wasm/src/kernels/Abs.ts
var absConfig = createUnaryKernelConfig(Abs);

// src/tfjs-backend-wasm/src/kernels/binary_kernel.ts
function createBinaryKernelConfig(kernelName, supportsFullBroadcast19, dtype) {
  let wasmFunc9;
  function setupFunc3(backend) {
    wasmFunc9 = backend.wasm.cwrap(kernelName, null, [
      "number",
      "array",
      "number",
      "number",
      "array",
      "number",
      "number",
      "number"
    ]);
  }
  function kernelFunc3(args) {
    const { backend, inputs } = args;
    const { a, b } = inputs;
    const aId = backend.dataIdMap.get(a.dataId).id;
    const bId = backend.dataIdMap.get(b.dataId).id;
    const outputType = dtype != null ? dtype : a.dtype;
    const newShape = backend_util_exports.assertAndGetBroadcastShape(a.shape, b.shape);
    const out = backend.makeOutput(newShape, outputType);
    if (util_exports.sizeFromShape(newShape) === 0) {
      return out;
    }
    const aShapeBytes = new Uint8Array(new Int32Array(a.shape).buffer);
    const bShapeBytes = new Uint8Array(new Int32Array(b.shape).buffer);
    const outId = backend.dataIdMap.get(out.dataId).id;
    const kernelFunc4 = () => wasmFunc9(
      aId,
      aShapeBytes,
      a.shape.length,
      bId,
      bShapeBytes,
      b.shape.length,
      CppDType[a.dtype],
      outId
    );
    kernelFunc4();
    return out;
  }
  return { kernelName, backendName: "wasm", setupFunc: setupFunc3, kernelFunc: kernelFunc3 };
}

// src/tfjs-backend-wasm/src/kernels/Add.ts
var supportsFullBroadcast = true;
var addConfig = createBinaryKernelConfig(Add, supportsFullBroadcast);

// src/tfjs-backend-wasm/src/kernels/AddN.ts
var wasmFunc;
function setupFunc(backend) {
  wasmFunc = backend.wasm.cwrap(AddN, null, [
    "array",
    "number",
    "number",
    "number"
  ]);
}
function addn(args) {
  const { inputs, backend } = args;
  const out = backend.makeOutput(inputs[0].shape, inputs[0].dtype);
  if (util_exports.sizeFromShape(out.shape) === 0) {
    return out;
  }
  const inputIds = inputs.map((x) => backend.dataIdMap.get(x.dataId).id);
  const inputIdsBytes = new Uint8Array(new Int32Array(inputIds).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmFunc(inputIdsBytes, inputIds.length, CppDType[out.dtype], outId);
  return out;
}
var addNConfig = {
  kernelName: AddN,
  backendName: "wasm",
  setupFunc,
  kernelFunc: addn
};

// src/tfjs-backend-wasm/src/kernels/Identity.ts
function identity(args) {
  const { inputs: { x }, backend } = args;
  const out = backend.makeOutput(x.shape, x.dtype);
  const inVals = backend.typedArrayFromHeap(x);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.set(inVals);
  return out;
}
var identityConfig = {
  kernelName: Identity,
  backendName: "wasm",
  kernelFunc: identity
};

// src/tfjs-backend-wasm/src/kernels/Transpose.ts
var wasmTranspose;
function setup2(backend) {
  wasmTranspose = backend.wasm.cwrap(Transpose, null, [
    "number",
    "array",
    "number",
    "number",
    "number",
    "array",
    "number"
  ]);
}
function transpose2(args) {
  const { inputs, backend, attrs } = args;
  const [reducedShape, perm] = removeOneSizeDims(inputs.x.shape, attrs.perm);
  let permIsNoOp = true;
  for (let i = 0; i < perm.length; i++) {
    if (perm[i] !== i) {
      permIsNoOp = false;
    }
  }
  const outShape = computeOutShape4(inputs.x.shape, attrs.perm);
  const x = {
    dataId: inputs.x.dataId,
    shape: reducedShape,
    dtype: inputs.x.dtype
  };
  if (permIsNoOp) {
    const cloned = identity({ inputs, backend });
    cloned.shape = outShape;
    return cloned;
  }
  const out = backend.makeOutput(outShape, x.dtype);
  const xId = backend.dataIdMap.get(x.dataId).id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const permBytes = new Uint8Array(new Int32Array(perm).buffer);
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  wasmTranspose(
    xId,
    xShapeBytes,
    x.shape.length,
    CppDType[x.dtype],
    outId,
    permBytes,
    perm.length
  );
  return out;
}
function computeOutShape4(inShape, perm) {
  const outShape = new Array(inShape.length);
  for (let i = 0; i < outShape.length; i++) {
    outShape[i] = inShape[perm[i]];
  }
  return outShape;
}
function removeOneSizeDims(shape, perm) {
  const newShape = [];
  const newPerm = [];
  for (let i = 0; i < shape.length; ++i) {
    if (shape[i] !== 1) {
      newShape.push(shape[i]);
    }
    if (shape[perm[i]] !== 1) {
      newPerm.push(perm[i]);
    }
  }
  for (let i = 0; i < newPerm.length; ++i) {
    let minValIdx = -1;
    for (let j = 0; j < newPerm.length; ++j) {
      if (newPerm[j] >= i && (minValIdx === -1 || newPerm[minValIdx] > newPerm[j])) {
        minValIdx = j;
      }
    }
    newPerm[minValIdx] = i;
  }
  return [newShape, newPerm];
}
var transposeConfig = {
  kernelName: Transpose,
  backendName: "wasm",
  kernelFunc: transpose2,
  setupFunc: setup2
};

// src/tfjs-backend-wasm/src/kernels/kernel_utils.ts
function permuteAxesAndTranspose(x, axis, backend) {
  const xShape = x.shape;
  const xRank = x.shape.length;
  const originalAxes = util_exports.parseAxisParam(axis, xShape);
  let axes = originalAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let xTransposed = null;
  let inputWasTransposed = false;
  if (permutedAxes != null) {
    const newShape = new Array(xRank);
    for (let i = 0; i < newShape.length; i++) {
      newShape[i] = xShape[permutedAxes[i]];
    }
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
    xTransposed = transpose2({ inputs: { x }, attrs: { perm: permutedAxes }, backend });
    const xId = backend.dataIdMap.get(x.dataId).id;
    const transposedId = backend.dataIdMap.get(xTransposed.dataId).id;
    if (transposedId !== xId) {
      inputWasTransposed = true;
    }
  }
  return { transposed: xTransposed, originalAxes, axes, inputWasTransposed };
}

// src/tfjs-backend-wasm/src/kernels/All.ts
var wasmAll;
function setup3(backend) {
  wasmAll = backend.wasm.cwrap(All, null, ["number, number, number"]);
}
function all2(args) {
  const { backend, inputs, attrs } = args;
  const { axis, keepDims } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const { transposed, axes, originalAxes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    input = transposed;
    inputId = transposedId;
  }
  const inputRank = input.shape.length;
  backend_util_exports.assertAxesAreInnerMostDims("all", axes, inputRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, x.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmAll(inputId, reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var allConfig = {
  kernelName: All,
  backendName: "wasm",
  setupFunc: setup3,
  kernelFunc: all2
};

// src/tfjs-backend-wasm/src/kernels/Any.ts
var wasmAny;
function setup4(backend) {
  wasmAny = backend.wasm.cwrap(Any, null, ["number, number, number"]);
}
function any2(args) {
  const { backend, inputs, attrs } = args;
  const { axis, keepDims } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const { transposed, axes, originalAxes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    input = transposed;
    inputId = transposedId;
  }
  const inputRank = input.shape.length;
  backend_util_exports.assertAxesAreInnerMostDims("any", axes, inputRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, x.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmAny(inputId, reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var anyConfig = {
  kernelName: Any,
  backendName: "wasm",
  setupFunc: setup4,
  kernelFunc: any2
};

// src/tfjs-backend-wasm/src/kernels/ArgMax.ts
var wasmFunc2;
function setup5(backend) {
  wasmFunc2 = backend.wasm.cwrap(ArgMax, null, [
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function argmax(args) {
  const { backend, inputs, attrs } = args;
  const { axis } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const { transposed, axes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
    }
  }
  const outShape = input.shape.slice(0, -1);
  const out = backend.makeOutput(outShape, "int32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const outerSize = util_exports.sizeFromShape(out.shape);
  const innerSize = input.shape[axes[0]];
  wasmFunc2(inputId, CppDType[input.dtype], outerSize, innerSize, outId);
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  return out;
}
var argMaxConfig = {
  kernelName: ArgMax,
  backendName: "wasm",
  kernelFunc: argmax,
  setupFunc: setup5
};

// src/tfjs-backend-wasm/src/kernels/AvgPool.ts
var wasmAvgPool;
function setup6(backend) {
  wasmAvgPool = backend.wasm.cwrap(AvgPool, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function avgPool2(args) {
  const { inputs, attrs, backend } = args;
  const x = inputs.x;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const { filterSize, strides, pad: pad3, dimRoundingMode } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(
    x.shape,
    filterSize,
    strides,
    1,
    pad3,
    dimRoundingMode
  );
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const channels = convInfo.inChannels;
  if (convInfo.dataFormat !== "channelsLast") {
    throw new Error(
      `wasm backend does not support dataFormat:'${convInfo.dataFormat}'. Please use 'channelsLast'.`
    );
  }
  if (convInfo.dilationWidth !== 1 || convInfo.dilationHeight !== 1) {
    throw new Error(
      `was backend only supports average pooling with dilation = [1, 1], got [${convInfo.dilationHeight}, ${convInfo.dilationWidth}].`
    );
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmAvgPool(
    xId,
    x.shape[0],
    x.shape[1],
    x.shape[2],
    filterHeight,
    filterWidth,
    padTop,
    padRight,
    padBottom,
    padLeft,
    strideHeight,
    strideWidth,
    channels,
    outId
  );
  return out;
}
var avgPoolConfig = {
  kernelName: AvgPool,
  backendName: "wasm",
  setupFunc: setup6,
  kernelFunc: avgPool2
};

// src/tfjs-backend-wasm/src/kernels/Reshape.ts
function reshape2(args) {
  const { inputs, attrs } = args;
  const { x } = inputs;
  const { shape } = attrs;
  const xSize = util_exports.sizeFromShape(x.shape);
  const $shape = util_exports.inferFromImplicitShape(shape, xSize);
  util_exports.assert(
    xSize === util_exports.sizeFromShape($shape),
    () => `new shape: ${$shape}, old shape: ${x.shape}. New shape and old shape must have the same number of elements.`
  );
  args.backend.incRef(x.dataId);
  return { dataId: x.dataId, shape: $shape, dtype: x.dtype };
}
var reshapeConfig = {
  kernelName: Reshape,
  backendName: "wasm",
  kernelFunc: reshape2
};

// src/tfjs-backend-wasm/src/kernels/BatchMatMul.ts
var wasmBatchMatMul;
function setup7(backend) {
  wasmBatchMatMul = backend.wasm.cwrap(BatchMatMul, null, [
    "number",
    "array",
    "number",
    "number",
    "array",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function batchMatMul(args) {
  const { inputs, backend, attrs } = args;
  const { a, b } = inputs;
  const { transposeA, transposeB } = attrs;
  if (a.dtype !== "float32" || b.dtype !== "float32") {
    throw new Error(
      `BatchMatMul for non non-float32 tensors not yet supported.`
    );
  }
  const aRank = a.shape.length;
  const bRank = b.shape.length;
  const innerShapeA = transposeA ? a.shape[aRank - 2] : a.shape[aRank - 1];
  const innerShapeB = transposeB ? b.shape[bRank - 1] : b.shape[bRank - 2];
  const outerShapeA = transposeA ? a.shape[aRank - 1] : a.shape[aRank - 2];
  const outerShapeB = transposeB ? b.shape[bRank - 2] : b.shape[bRank - 1];
  const outerDimsA = a.shape.slice(0, -2);
  const outerDimsB = b.shape.slice(0, -2);
  const batchDimA = util_exports.sizeFromShape(outerDimsA);
  const batchDimB = util_exports.sizeFromShape(outerDimsB);
  const outShapeOuterDims = broadcast_util_exports.assertAndGetBroadcastShape(
    a.shape.slice(0, -2),
    b.shape.slice(0, -2)
  );
  const outShape = outShapeOuterDims.concat([outerShapeA, outerShapeB]);
  util_exports.assert(
    innerShapeA === innerShapeB,
    () => `Error in matMul: inner shapes (${innerShapeA}) and (${innerShapeB}) of Tensors with shapes ${a.shape} and ${b.shape} and transposeA=${transposeA} and transposeB=${transposeB} must match.`
  );
  const a3dShape = transposeA ? [batchDimA, innerShapeA, outerShapeA] : [batchDimA, outerShapeA, innerShapeA];
  const b3dShape = transposeB ? [batchDimB, outerShapeB, innerShapeB] : [batchDimB, innerShapeB, outerShapeB];
  const a3d = reshape2({ inputs: { x: a }, backend, attrs: { shape: a3dShape } });
  const b3d = reshape2({ inputs: { x: b }, backend, attrs: { shape: b3dShape } });
  const a3dId = backend.dataIdMap.get(a3d.dataId).id;
  const b3dId = backend.dataIdMap.get(b3d.dataId).id;
  const leftDim = transposeA ? a3d.shape[2] : a3d.shape[1];
  const rightDim = transposeB ? b3d.shape[1] : b3d.shape[2];
  const batchDim = Math.max(batchDimA, batchDimB);
  const out = backend.makeOutput([batchDim, leftDim, rightDim], a3d.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const aShapeBytes = new Uint8Array(new Int32Array(a3d.shape).buffer);
  const bShapeBytes = new Uint8Array(new Int32Array(b3d.shape).buffer);
  wasmBatchMatMul(
    a3dId,
    aShapeBytes,
    a3d.shape.length,
    b3dId,
    bShapeBytes,
    b3d.shape.length,
    transposeA,
    transposeB,
    outId
  );
  backend.disposeData(a3d.dataId);
  backend.disposeData(b3d.dataId);
  out.shape = outShape;
  return out;
}
var batchMatMulConfig = {
  kernelName: BatchMatMul,
  backendName: "wasm",
  setupFunc: setup7,
  kernelFunc: batchMatMul
};

// src/tfjs-backend-cpu/src/cpu_util.ts
function assertNotComplex(tensor2, opName) {
  if (!Array.isArray(tensor2)) {
    tensor2 = [tensor2];
  }
  tensor2.forEach((t) => {
    if (t != null) {
      util_exports.assert(
        t.dtype !== "complex64",
        () => `${opName} does not support complex64 tensors in the CPU backend.`
      );
    }
  });
}

// src/tfjs-backend-cpu/src/utils/binary_impl.ts
function createSimpleBinaryKernelImpl(op2) {
  return (aShape, bShape, aVals, bVals, dtype) => {
    const newShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    const resultRank = newShape.length;
    const resultStrides = util_exports.computeStrides(newShape);
    const resultSize = util_exports.sizeFromShape(newShape);
    const result = util_exports.getTypedArrayFromDType(dtype, resultSize);
    const aRank = aShape.length;
    const bRank = bShape.length;
    const aStrides = util_exports.computeStrides(aShape);
    const bStrides = util_exports.computeStrides(bShape);
    const aBroadcastDims = backend_util_exports.getBroadcastDims(aShape, newShape);
    const bBroadcastDims = backend_util_exports.getBroadcastDims(bShape, newShape);
    if (aBroadcastDims.length + bBroadcastDims.length === 0) {
      for (let i = 0; i < result.length; ++i) {
        result[i] = op2(aVals[i % aVals.length], bVals[i % bVals.length]);
      }
    } else {
      for (let i = 0; i < result.length; ++i) {
        const loc = util_exports.indexToLoc(i, resultRank, resultStrides);
        const aLoc = loc.slice(-aRank);
        aBroadcastDims.forEach((d) => aLoc[d] = 0);
        const aIndex = util_exports.locToIndex(aLoc, aRank, aStrides);
        const bLoc = loc.slice(-bRank);
        bBroadcastDims.forEach((d) => bLoc[d] = 0);
        const bIndex = util_exports.locToIndex(bLoc, bRank, bStrides);
        result[i] = op2(aVals[aIndex], bVals[bIndex]);
      }
    }
    return [result, newShape];
  };
}

// src/tfjs-backend-cpu/src/kernels/Complex.ts
function complex2(args) {
  const { inputs, backend } = args;
  const { real: real3, imag: imag2 } = inputs;
  const realVals = backend.data.get(real3.dataId).values;
  const imagVals = backend.data.get(imag2.dataId).values;
  const complexInfo = backend.makeTensorInfo(real3.shape, "complex64");
  const complex3 = backend.data.get(complexInfo.dataId);
  complex3.complexTensorInfos = {
    real: backend.makeTensorInfo(real3.shape, "float32", realVals),
    imag: backend.makeTensorInfo(imag2.shape, "float32", imagVals)
  };
  return complexInfo;
}

// src/tfjs-backend-cpu/src/utils/zeros_impl.ts
function zeros2(backend, shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real3 = zeros2(backend, shape, "float32");
    const imag2 = zeros2(backend, shape, "float32");
    return complex2({ inputs: { real: real3, imag: imag2 }, backend });
  }
  const values = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(shape), dtype);
  return backend.makeTensorInfo(shape, dtype, values);
}

// src/tfjs-backend-cpu/src/kernels/Identity.ts
function identity2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  backend.incRef(x.dataId);
  return { dataId: x.dataId, shape: x.shape, dtype: x.dtype };
}

// src/tfjs-backend-cpu/src/kernels/Real.ts
function real2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const real3 = backend.data.get(input.dataId).complexTensorInfos.real;
  const realVal = backend.data.get(real3.dataId).values;
  return backend.makeTensorInfo(real3.shape, real3.dtype, realVal);
}

// src/tfjs-backend-cpu/src/kernels/Cast.ts
function cast2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { dtype } = attrs;
  if (dtype === "complex64") {
    if (x.dtype === "complex64") {
      return identity2({ inputs: { x }, backend });
    }
    const zerosTensorInfo = zeros2(backend, x.shape, x.dtype);
    const floatX = cast2({ inputs: { x }, backend, attrs: { dtype: "float32" } });
    const result = complex2({ inputs: { real: floatX, imag: zerosTensorInfo }, backend });
    backend.disposeIntermediateTensorInfo(zerosTensorInfo);
    backend.disposeIntermediateTensorInfo(floatX);
    return result;
  }
  if (x.dtype === "complex64") {
    const realPart = real2({ inputs: { input: x }, backend });
    const result = cast2({ inputs: { x: realPart }, backend, attrs: { dtype } });
    backend.disposeIntermediateTensorInfo(realPart);
    return result;
  }
  if (!util_exports.hasEncodingLoss(x.dtype, dtype)) {
    const result = identity2({ inputs: { x }, backend });
    return { dataId: result.dataId, shape: result.shape, dtype };
  }
  if (dtype === "int32") {
    const values = backend.data.get(x.dataId).values;
    const resultValues = Int32Array.from(values);
    return backend.makeTensorInfo(x.shape, "int32", resultValues);
  }
  if (dtype === "bool") {
    const xVals = backend.data.get(x.dataId).values;
    const zero = util_exports.toTypedArray([0], x.dtype);
    const [resultData, resultShape] = createSimpleBinaryKernelImpl(
      (a, b) => a !== b ? 1 : 0
    )(x.shape, [], xVals, zero, "bool");
    return backend.makeTensorInfo(resultShape, "bool", resultData);
  }
  throw new Error(`Error in Cast: failed to cast ${x.dtype} to ${dtype}`);
}

// src/tfjs-backend-cpu/src/utils/binary_utils.ts
function binaryKernelFunc(name, simpleImpl, complexImpl, dtype) {
  if (complexImpl == null) {
    return ({ inputs, backend }) => {
      const { a, b } = inputs;
      const cpuBackend = backend;
      assertNotComplex([a, b], name);
      const aVals = cpuBackend.data.get(a.dataId).values;
      const bVals = cpuBackend.data.get(b.dataId).values;
      const decodedAVals = a.dtype === "string" ? backend_util_exports.fromUint8ToStringArray(aVals) : aVals;
      const decodedBVals = a.dtype === "string" ? backend_util_exports.fromUint8ToStringArray(bVals) : bVals;
      const $dtype = dtype || a.dtype;
      const [resultData, resultShape] = simpleImpl(a.shape, b.shape, decodedAVals, decodedBVals, $dtype);
      return cpuBackend.makeTensorInfo(resultShape, $dtype, resultData);
    };
  }
  return ({ inputs, backend }) => {
    const { a, b } = inputs;
    const cpuBackend = backend;
    if (a.dtype === "complex64" || b.dtype === "complex64") {
      const $aComplex = cast2(
        { inputs: { x: a }, backend: cpuBackend, attrs: { dtype: "complex64" } }
      );
      const $aComplexVals = cpuBackend.data.get($aComplex.dataId);
      const aReal = $aComplexVals.complexTensorInfos.real;
      const aImag = $aComplexVals.complexTensorInfos.imag;
      const aRealVals = cpuBackend.data.get(aReal.dataId).values;
      const aImagVals = cpuBackend.data.get(aImag.dataId).values;
      const $bComplex = cast2(
        { inputs: { x: b }, backend: cpuBackend, attrs: { dtype: "complex64" } }
      );
      const $bComplexVals = cpuBackend.data.get($bComplex.dataId);
      const bReal = $bComplexVals.complexTensorInfos.real;
      const bImag = $bComplexVals.complexTensorInfos.imag;
      const bRealVals = cpuBackend.data.get(bReal.dataId).values;
      const bImagVals = cpuBackend.data.get(bImag.dataId).values;
      const [resultRealData, resultImagData, resultShape] = complexImpl(
        a.shape,
        b.shape,
        aRealVals,
        aImagVals,
        bRealVals,
        bImagVals
      );
      const resultReal = cpuBackend.makeTensorInfo(resultShape, "float32", resultRealData);
      const resultImag = cpuBackend.makeTensorInfo(resultShape, "float32", resultImagData);
      const result = complex2(
        { inputs: { real: resultReal, imag: resultImag }, backend: cpuBackend }
      );
      cpuBackend.disposeIntermediateTensorInfo($aComplex);
      cpuBackend.disposeIntermediateTensorInfo($bComplex);
      cpuBackend.disposeIntermediateTensorInfo(resultReal);
      cpuBackend.disposeIntermediateTensorInfo(resultImag);
      return result;
    } else {
      const aVals = cpuBackend.data.get(a.dataId).values;
      const bVals = cpuBackend.data.get(b.dataId).values;
      const $dtype = dtype || a.dtype;
      const [resultData, resultShape] = simpleImpl(a.shape, b.shape, aVals, bVals, $dtype);
      return cpuBackend.makeTensorInfo(resultShape, $dtype, resultData);
    }
  };
}
function createComplexBinaryKernelImpl(op2) {
  return (aShape, bShape, aRealVals, aImagVals, bRealVals, bImagVals) => {
    const resultShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    const resultSize = util_exports.sizeFromShape(resultShape);
    const resultRank = resultShape.length;
    const resultStrides = util_exports.computeStrides(resultShape);
    const resultRealVals = util_exports.getTypedArrayFromDType("float32", resultSize);
    const resultImagVals = util_exports.getTypedArrayFromDType("float32", resultSize);
    const aBroadcastDims = backend_util_exports.getBroadcastDims(aShape, resultShape);
    const bBroadcastDims = backend_util_exports.getBroadcastDims(bShape, resultShape);
    const aVals = backend_util_exports.mergeRealAndImagArrays(aRealVals, aImagVals);
    const bVals = backend_util_exports.mergeRealAndImagArrays(bRealVals, bImagVals);
    const aRank = aShape.length;
    const aStrides = util_exports.computeStrides(aShape);
    const bRank = bShape.length;
    const bStrides = util_exports.computeStrides(bShape);
    if (aBroadcastDims.length + bBroadcastDims.length === 0) {
      for (let i = 0; i < resultRealVals.length; i++) {
        const aIdx = i % aVals.length;
        const bIdx = i % bVals.length;
        const result = op2(
          aVals[aIdx * 2],
          aVals[aIdx * 2 + 1],
          bVals[bIdx * 2],
          bVals[bIdx * 2 + 1]
        );
        resultRealVals[i] = result.real;
        resultImagVals[i] = result.imag;
      }
    } else {
      for (let i = 0; i < resultRealVals.length; i++) {
        const loc = util_exports.indexToLoc(i, resultRank, resultStrides);
        const aLoc = loc.slice(-aRank);
        aBroadcastDims.forEach((d) => aLoc[d] = 0);
        const aIndex = util_exports.locToIndex(aLoc, aRank, aStrides);
        const bLoc = loc.slice(-bRank);
        bBroadcastDims.forEach((d) => bLoc[d] = 0);
        const bIndex = util_exports.locToIndex(bLoc, bRank, bStrides);
        const opResult = op2(
          aVals[aIndex * 2],
          aVals[aIndex * 2 + 1],
          bVals[bIndex * 2],
          bVals[bIndex * 2 + 1]
        );
        resultRealVals[i] = opResult.real;
        resultImagVals[i] = opResult.imag;
      }
    }
    return [resultRealVals, resultImagVals, resultShape];
  };
}

// src/tfjs-backend-cpu/src/kernels/Add.ts
var addImpl = createSimpleBinaryKernelImpl((a, b) => a + b);
var addComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return { real: aReal + bReal, imag: aImag + bImag };
});
var add4 = binaryKernelFunc(Add, addImpl, addComplexImpl);

// src/tfjs-backend-cpu/src/utils/unary_impl.ts
function createSimpleUnaryImpl(op2) {
  return (values, dtype, attrs) => {
    const newValues = util_exports.getTypedArrayFromDType(dtype, values.length);
    for (let i = 0; i < values.length; ++i) {
      newValues[i] = op2(values[i], attrs);
    }
    return newValues;
  };
}

// src/tfjs-backend-cpu/src/utils/unary_utils.ts
function unaryKernelFunc(name, op2, dtype) {
  return ({ inputs, attrs, backend }) => {
    const { x } = inputs;
    assertNotComplex(x, name);
    if (x.dtype === "string" || dtype === "string") {
      throw new Error("unaryKernelFunc does not support string input/output");
    }
    const cpuBackend = backend;
    const values = cpuBackend.data.get(x.dataId).values;
    const xSize = util_exports.sizeFromShape(x.shape);
    const $dtype = dtype || x.dtype;
    const newValues = util_exports.getArrayFromDType($dtype, xSize);
    for (let i = 0; i < xSize; ++i) {
      newValues[i] = op2(values[i], attrs);
    }
    return cpuBackend.makeTensorInfo(x.shape, $dtype, newValues);
  };
}
function unaryKernelFuncFromImpl(name, unaryImpl, dtype) {
  return ({ inputs, attrs, backend }) => {
    const { x } = inputs;
    assertNotComplex(x, name);
    if (x.dtype === "string" || dtype === "string") {
      throw new Error("unaryKernelFunc does not support string input/output");
    }
    const cpuBackend = backend;
    const values = cpuBackend.data.get(x.dataId).values;
    const $dtype = dtype || x.dtype;
    const newValues = unaryImpl(values, $dtype, attrs);
    return cpuBackend.makeTensorInfo(x.shape, $dtype, newValues);
  };
}

// src/tfjs-backend-cpu/src/kernels/Ceil.ts
var ceilImpl = createSimpleUnaryImpl((xi) => Math.ceil(xi));
var ceil2 = unaryKernelFuncFromImpl(Ceil, ceilImpl);

// src/tfjs-backend-cpu/src/kernels/Concat_impl.ts
function concatImpl(inputs, outShape, dtype, simplyConcat) {
  const outVals = util_exports.getArrayFromDType(dtype, util_exports.sizeFromShape(outShape));
  if (simplyConcat && dtype !== "string") {
    let offset = 0;
    inputs.forEach((input) => {
      const size = util_exports.sizeFromShape(input.shape);
      outVals.set(input.vals, offset);
      offset += size;
    });
  } else {
    let colOffset = 0;
    inputs.forEach((input) => {
      const decodedData = dtype === "string" ? backend_util_exports.fromUint8ToStringArray(input.vals) : input.vals;
      let tIdx = 0;
      for (let row = 0; row < input.shape[0]; ++row) {
        const resIdx = row * outShape[1] + colOffset;
        for (let col = 0; col < input.shape[1]; ++col) {
          outVals[resIdx + col] = decodedData[tIdx++];
        }
      }
      colOffset += input.shape[1];
    });
  }
  return outVals;
}

// src/tfjs-backend-cpu/src/kernels/Equal.ts
var equalImpl = createSimpleBinaryKernelImpl((a, b) => a === b ? 1 : 0);
var equal2 = binaryKernelFunc(Equal, equalImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/Exp.ts
var expImpl = createSimpleUnaryImpl((xi) => Math.exp(xi));
var exp2 = unaryKernelFuncFromImpl(Exp, expImpl, "float32");

// src/tfjs-backend-cpu/src/kernels/Expm1.ts
var expm1Impl = createSimpleUnaryImpl((xi) => Math.expm1(xi));
var expm12 = unaryKernelFuncFromImpl(Expm1, expm1Impl);

// src/tfjs-backend-cpu/src/kernels/Floor.ts
var floorImpl = createSimpleUnaryImpl((xi) => Math.floor(xi));
var floor2 = unaryKernelFuncFromImpl(Floor, floorImpl);

// src/tfjs-backend-cpu/src/kernels/Greater.ts
var greaterImpl = createSimpleBinaryKernelImpl((a, b) => a > b ? 1 : 0);
var greater2 = binaryKernelFunc(Greater, greaterImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/GreaterEqual.ts
var greaterEqualImpl = createSimpleBinaryKernelImpl((a, b) => a >= b ? 1 : 0);
var greaterEqual2 = binaryKernelFunc(
  GreaterEqual,
  greaterEqualImpl,
  null,
  "bool"
);

// src/tfjs-backend-cpu/src/kernels/Less.ts
var lessImpl = createSimpleBinaryKernelImpl((a, b) => a < b ? 1 : 0);
var less2 = binaryKernelFunc(Less, lessImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/LessEqual.ts
var lessEqualImpl = createSimpleBinaryKernelImpl((a, b) => a <= b ? 1 : 0);
var lessEqual2 = binaryKernelFunc(LessEqual, lessEqualImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/Log.ts
var logImpl = createSimpleUnaryImpl((xi) => Math.log(xi));
var log3 = unaryKernelFuncFromImpl(Log, logImpl);

// src/tfjs-backend-cpu/src/kernels/Maximum.ts
var maximumImpl = createSimpleBinaryKernelImpl(
  (aValue, bValue) => Math.max(aValue, bValue)
);
var maximum2 = binaryKernelFunc(Maximum, maximumImpl);

// src/tfjs-backend-cpu/src/kernels/Minimum.ts
var minimumImpl = createSimpleBinaryKernelImpl(
  (aValue, bValue) => Math.min(aValue, bValue)
);
var minimum2 = binaryKernelFunc(Minimum, minimumImpl);

// src/tfjs-backend-cpu/src/kernels/Multiply.ts
var multiplyImpl = createSimpleBinaryKernelImpl(
  (aValue, bValue) => aValue * bValue
);
var multiplyComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return {
    real: aReal * bReal - aImag * bImag,
    imag: aReal * bImag + aImag * bReal
  };
});
var multiply2 = binaryKernelFunc(Multiply, multiplyImpl, multiplyComplexImpl);

// src/tfjs-backend-cpu/src/kernels/NotEqual.ts
var notEqualImpl = createSimpleBinaryKernelImpl((a, b) => a !== b ? 1 : 0);
var notEqual2 = binaryKernelFunc(NotEqual, notEqualImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/RaggedTensorToTensor_impl.ts
var RowPartitionType2 = backend_util_exports.RowPartitionType;

// src/tfjs-backend-cpu/src/kernels/Range_impl.ts
function rangeImpl(start, stop, step3, dtype) {
  const sameStartStop = start === stop;
  const increasingRangeNegativeStep = start < stop && step3 < 0;
  const decreasingRangePositiveStep = stop < start && step3 > 1;
  if (sameStartStop || increasingRangeNegativeStep || decreasingRangePositiveStep) {
    return util_exports.makeZerosTypedArray(0, dtype);
  }
  const numElements = Math.abs(Math.ceil((stop - start) / step3));
  const values = util_exports.makeZerosTypedArray(numElements, dtype);
  if (stop < start && step3 === 1) {
    step3 = -1;
  }
  values[0] = start;
  for (let i = 1; i < values.length; i++) {
    values[i] = values[i - 1] + step3;
  }
  return values;
}

// src/tfjs-backend-cpu/src/kernels/Rsqrt.ts
var rsqrtImpl = createSimpleUnaryImpl((xi) => 1 / Math.sqrt(xi));
var rsqrt2 = unaryKernelFuncFromImpl(Rsqrt, rsqrtImpl);

// src/tfjs-backend-cpu/src/kernels/Sigmoid.ts
var sigmoidImpl = createSimpleUnaryImpl((xi) => 1 / (1 + Math.exp(-xi)));
var sigmoid2 = unaryKernelFunc(Sigmoid, (xi) => 1 / (1 + Math.exp(-xi)));

// src/tfjs-backend-cpu/src/kernels/Slice.ts
function sliceImpl(vals, begin, size, shape, dtype) {
  const isContinous = slice_util_exports.isSliceContinous(shape, begin, size);
  const length = util_exports.sizeFromShape(size);
  const xStrides = util_exports.computeStrides(shape);
  if (isContinous) {
    const flatOffset = slice_util_exports.computeFlatOffset(begin, xStrides);
    if (dtype === "string") {
      return vals.slice(flatOffset, flatOffset + length);
    }
    return vals.subarray(flatOffset, flatOffset + length);
  }
  const decodedData = dtype === "string" ? backend_util_exports.fromUint8ToStringArray(vals) : vals;
  const inBuf = buffer(shape, dtype, decodedData);
  const outBuf = buffer(size, dtype);
  for (let i = 0; i < outBuf.size; ++i) {
    const outLoc = outBuf.indexToLoc(i);
    const inLoc = outLoc.map((idx, j) => idx + begin[j]);
    outBuf.set(inBuf.get(...inLoc), ...outLoc);
  }
  if (dtype === "string") {
    return backend_util_exports.fromStringArrayToUint8(outBuf.values);
  }
  return outBuf.values;
}

// src/tfjs-backend-cpu/src/kernels/Sqrt.ts
var sqrtImpl = createSimpleUnaryImpl((xi) => Math.sqrt(xi));
var sqrt2 = unaryKernelFunc(Sqrt, (xi) => Math.sqrt(xi));

// src/tfjs-backend-cpu/src/kernels/SquaredDifference.ts
var squaredDifferenceImpl = createSimpleBinaryKernelImpl((a, b) => {
  const diff = a - b;
  return diff * diff;
});
var squaredDifference2 = binaryKernelFunc(SquaredDifference, squaredDifferenceImpl);

// src/tfjs-backend-cpu/src/kernels/StringNGrams_impl.ts
var StringNGramsOp = class {
  constructor(separator, nGramWidths, leftPad, rightPad2, padWidth, preserveShortSequences) {
    this.separator = util_exports.encodeString(separator);
    this.nGramWidths = nGramWidths;
    this.leftPad = util_exports.encodeString(leftPad);
    this.rightPad = util_exports.encodeString(rightPad2);
    this.padWidth = padWidth;
    this.preserveShort = preserveShortSequences;
  }
  getPadWidth(nGramWidth) {
    return Math.min(
      this.padWidth < 0 ? nGramWidth - 1 : this.padWidth,
      nGramWidth - 1
    );
  }
  getNumNGrams(length, nGramWidth) {
    const padWidth = this.getPadWidth(nGramWidth);
    return Math.max(0, length + 2 * padWidth - nGramWidth + 1);
  }
  createNGrams(data, splitIndex, output, outputStartIndex, numNGrams, nGramWidth) {
    for (let nGramIndex = 0; nGramIndex < numNGrams; ++nGramIndex) {
      const padWidth = this.getPadWidth(nGramWidth);
      const leftPadding = Math.max(0, padWidth - nGramIndex);
      const rightPadding = Math.max(0, padWidth - (numNGrams - (nGramIndex + 1)));
      const numTokens = nGramWidth - (leftPadding + rightPadding);
      const dataStartIndex = splitIndex + (leftPadding > 0 ? 0 : nGramIndex - padWidth);
      let nGramSize = 0;
      nGramSize += leftPadding * this.leftPad.length;
      for (let n = 0; n < numTokens; ++n) {
        nGramSize += data[dataStartIndex + n].length;
      }
      nGramSize += rightPadding * this.rightPad.length;
      const numSeparators = leftPadding + rightPadding + numTokens - 1;
      nGramSize += numSeparators * this.separator.length;
      output[outputStartIndex + nGramIndex] = new Uint8Array(nGramSize);
      const nGram = output[outputStartIndex + nGramIndex];
      let nextNGramIndex = 0;
      const appendToNGram = (str) => str.forEach((value) => nGram[nextNGramIndex++] = value);
      for (let n = 0; n < leftPadding; ++n) {
        appendToNGram(this.leftPad);
        appendToNGram(this.separator);
      }
      for (let n = 0; n < numTokens - 1; ++n) {
        appendToNGram(data[dataStartIndex + n]);
        appendToNGram(this.separator);
      }
      if (numTokens > 0) {
        appendToNGram(data[dataStartIndex + numTokens - 1]);
        for (let n = 0; n < rightPadding; ++n) {
          appendToNGram(this.separator);
          appendToNGram(this.rightPad);
        }
      } else {
        for (let n = 0; n < rightPadding - 1; ++n) {
          appendToNGram(this.rightPad);
          appendToNGram(this.separator);
        }
        appendToNGram(this.rightPad);
      }
    }
  }
  compute(data, splits) {
    const inputDataSize = data.length;
    const splitsSize = splits.length;
    if (splitsSize > 0) {
      let prevSplit = splits[0];
      if (prevSplit !== 0) {
        throw new Error(`First split value must be 0, got ${prevSplit}`);
      }
      for (let i = 1; i < splitsSize; ++i) {
        let validSplits = splits[i] >= prevSplit;
        validSplits = validSplits && splits[i] <= inputDataSize;
        if (!validSplits) {
          throw new Error(`Invalid split value ${splits[i]}, must be in [${prevSplit}, ${inputDataSize}]`);
        }
        prevSplit = splits[i];
      }
      if (prevSplit !== inputDataSize) {
        throw new Error(`Last split value must be data size. Expected ${inputDataSize}, got ${prevSplit}`);
      }
    }
    const numBatchItems = splitsSize - 1;
    const nGramsSplits = util_exports.getArrayFromDType("int32", splitsSize);
    if (inputDataSize === 0 || splitsSize === 0) {
      const empty = new Array(inputDataSize);
      for (let i = 0; i <= numBatchItems; ++i) {
        nGramsSplits[i] = 0;
      }
      return [empty, nGramsSplits];
    }
    nGramsSplits[0] = 0;
    for (let i = 1; i <= numBatchItems; ++i) {
      const length = splits[i] - splits[i - 1];
      let numNGrams = 0;
      this.nGramWidths.forEach((nGramWidth) => {
        numNGrams += this.getNumNGrams(length, nGramWidth);
      });
      if (this.preserveShort && length > 0 && numNGrams === 0) {
        numNGrams = 1;
      }
      nGramsSplits[i] = nGramsSplits[i - 1] + numNGrams;
    }
    const nGrams = new Array(nGramsSplits[numBatchItems]);
    for (let i = 0; i < numBatchItems; ++i) {
      const splitIndex = splits[i];
      let outputStartIdx = nGramsSplits[i];
      this.nGramWidths.forEach((nGramWidth) => {
        const length = splits[i + 1] - splits[i];
        const numNGrams = this.getNumNGrams(length, nGramWidth);
        this.createNGrams(
          data,
          splitIndex,
          nGrams,
          outputStartIdx,
          numNGrams,
          nGramWidth
        );
        outputStartIdx += numNGrams;
      });
      if (this.preserveShort && outputStartIdx === nGramsSplits[i]) {
        const dataLength = splits[i + 1] - splits[i];
        if (dataLength === 0) {
          continue;
        }
        const nGramWidth = dataLength + 2 * this.padWidth;
        const numNGrams = 1;
        this.createNGrams(
          data,
          splitIndex,
          nGrams,
          outputStartIdx,
          numNGrams,
          nGramWidth
        );
      }
    }
    return [nGrams, nGramsSplits];
  }
};
function stringNGramsImpl(data, dataSplits, separator, nGramWidths, leftPad, rightPad2, padWidth, preserveShortSequences) {
  return new StringNGramsOp(
    separator,
    nGramWidths,
    leftPad,
    rightPad2,
    padWidth,
    preserveShortSequences
  ).compute(data, dataSplits);
}

// src/tfjs-backend-cpu/src/kernels/StringSplit_impl.ts
function split2(str, delimiters, skipEmpty, result) {
  if (!str.length) {
    return;
  }
  if (delimiters.length === 0) {
    for (let i = 0; i < str.length; ++i) {
      result.push(str.subarray(i, i + 1));
    }
    return;
  }
  if (delimiters.length === 1) {
    const delimiter = delimiters[0];
    let f = str.indexOf(delimiter);
    while (f !== -1) {
      const token = str.subarray(0, f);
      if (!skipEmpty || token.length !== 0) {
        result.push(token);
      }
      str = str.subarray(f + 1);
      f = str.indexOf(delimiter);
    }
    if (!skipEmpty || str.length !== 0) {
      result.push(str);
    }
    return;
  }
  let tokenStart = 0;
  for (let i = 0; i < str.length + 1; i++) {
    if (i === str.length || delimiters.indexOf(str[i]) !== -1) {
      const token = str.subarray(tokenStart, i);
      if (!skipEmpty || token.length !== 0) {
        result.push(token);
      }
      tokenStart = i + 1;
    }
  }
}
function stringSplitImpl(input, delimiter, skipEmpty) {
  const batchSize = input.length;
  const tokens = [];
  let outputSize = 0;
  let maxNumEntries = 0;
  const numIndices = new Array(batchSize);
  for (let i = 0; i < batchSize; ++i) {
    const prevTokensLength = tokens.length;
    split2(input[i], delimiter, skipEmpty, tokens);
    const nEntries = tokens.length - prevTokensLength;
    numIndices[i] = nEntries;
    outputSize += nEntries;
    maxNumEntries = Math.max(maxNumEntries, nEntries);
  }
  const indices = util_exports.getArrayFromDType("int32", outputSize * 2);
  const values = new Array(outputSize);
  const shape = [batchSize, maxNumEntries];
  let c = 0;
  for (let i = 0; i < batchSize; ++i) {
    for (let j = 0; j < numIndices[i]; ++j) {
      indices[c * 2] = i;
      indices[c * 2 + 1] = j;
      values[c] = tokens[c];
      ++c;
    }
  }
  return [indices, values, shape];
}

// src/tfjs-backend-cpu/src/kernels/StringToHashBucketFast_impl.ts
function stringToHashBucketFastImpl(input, numBuckets) {
  const output = util_exports.getArrayFromDType("int32", input.length);
  for (let i = 0; i < input.length; ++i) {
    output[i] = util_exports.fingerPrint64(input[i]).modulo(numBuckets).getLowBitsUnsigned();
  }
  return output;
}

// src/tfjs-backend-cpu/src/kernels/Sub.ts
var subImpl = createSimpleBinaryKernelImpl(
  (aValue, bValue) => aValue - bValue
);
var subComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return { real: aReal - bReal, imag: aImag - bImag };
});
var sub2 = binaryKernelFunc(Sub, subImpl, subComplexImpl);

// src/tfjs-backend-wasm/src/kernels/Slice.ts
function slice2(args) {
  const { inputs: { x }, attrs: { begin, size }, backend } = args;
  const [begin_, size_] = slice_util_exports.parseSliceParams(x, begin, size);
  const isContinous = slice_util_exports.isSliceContinous(x.shape, begin_, size_);
  const xVals = backend.readSync(x.dataId);
  const out = backend.makeOutput(size_, x.dtype);
  const xStrides = util_exports.computeStrides(x.shape);
  const outData = backend.dataIdMap.get(out.dataId);
  if (isContinous) {
    const flatOffset = slice_util_exports.computeFlatOffset(begin_, xStrides);
    if (x.dtype === "string") {
      outData.stringBytes = xVals.slice(flatOffset, flatOffset + util_exports.sizeFromShape(size_));
    } else {
      const outVals2 = backend.typedArrayFromHeap(out);
      outVals2.set(
        xVals.subarray(flatOffset, flatOffset + util_exports.sizeFromShape(size_))
      );
    }
    return out;
  }
  if (x.dtype === "string") {
    const res = sliceImpl(xVals, begin_, size_, x.shape, x.dtype);
    outData.stringBytes = res;
    return out;
  }
  const outVals = backend.typedArrayFromHeap(out);
  const rank = x.shape.length;
  if (rank === 2) {
    slice2d2(
      xVals,
      xStrides[0],
      outVals,
      begin_,
      size_
    );
  } else if (rank === 3) {
    slice3d2(
      xVals,
      xStrides[0],
      xStrides[1],
      outVals,
      begin_,
      size_
    );
  } else if (rank === 4) {
    slice4d2(
      xVals,
      xStrides[0],
      xStrides[1],
      xStrides[2],
      outVals,
      begin_,
      size_
    );
  } else {
    const res = sliceImpl(xVals, begin_, size_, x.shape, x.dtype);
    outVals.set(res);
  }
  return out;
}
function slice2d2(xVals, xStride, outVals, begin, size) {
  let outOffset = 0;
  const beginI = begin[0];
  const beginJ = begin[1];
  const endI = beginI + size[0];
  for (let i = beginI; i < endI; i++) {
    const xOffset = i * xStride + beginJ;
    outVals.set(xVals.subarray(xOffset, xOffset + size[1]), outOffset);
    outOffset += size[1];
  }
}
function slice3d2(xVals, xStride1, xStride2, outVals, begin, size) {
  let outOffset = 0;
  const beginI = begin[0];
  const beginJ = begin[1];
  const beginK = begin[2];
  const endI = beginI + size[0];
  const endJ = beginJ + size[1];
  for (let i = beginI; i < endI; i++) {
    for (let j = beginJ; j < endJ; j++) {
      const xOffset = i * xStride1 + j * xStride2 + beginK;
      outVals.set(xVals.subarray(xOffset, xOffset + size[2]), outOffset);
      outOffset += size[2];
    }
  }
}
function slice4d2(xVals, xStride1, xStride2, xStride3, outVals, begin, size) {
  let outOffset = 0;
  const beginI = begin[0];
  const beginJ = begin[1];
  const beginK = begin[2];
  const endI = beginI + size[0];
  const endJ = beginJ + size[1];
  const endK = beginK + size[2];
  const beginL = begin[3];
  for (let i = beginI; i < endI; i++) {
    for (let j = beginJ; j < endJ; j++) {
      for (let k = beginK; k < endK; k++) {
        const xOffset = i * xStride1 + j * xStride2 + k * xStride3 + beginL;
        outVals.set(xVals.subarray(xOffset, xOffset + size[3]), outOffset);
        outOffset += size[3];
      }
    }
  }
}
var sliceConfig = {
  kernelName: Slice,
  backendName: "wasm",
  kernelFunc: slice2
};

// src/tfjs-backend-wasm/src/kernels/BatchToSpaceND.ts
function batchToSpaceND2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockShape, crops } = attrs;
  const prod3 = blockShape.reduce((a, b) => a * b);
  const reshaped = backend_util_exports.getReshaped(x.shape, blockShape, prod3);
  const permuted = backend_util_exports.getPermuted(reshaped.length, blockShape.length);
  const reshapedPermuted = backend_util_exports.getReshapedPermuted(x.shape, blockShape, prod3);
  const sliceBeginCoords = backend_util_exports.getSliceBeginCoords(crops, blockShape.length);
  const sliceSize = backend_util_exports.getSliceSize(reshapedPermuted, crops, blockShape.length);
  const xReshaped = reshape2({ inputs: { x }, backend, attrs: { shape: reshaped } });
  const xTransposed = transpose2({ inputs: { x: xReshaped }, backend, attrs: { perm: permuted } });
  const xTransposedReshaped = reshape2(
    { inputs: { x: xTransposed }, backend, attrs: { shape: reshapedPermuted } }
  );
  const result = slice2({
    inputs: { x: xTransposedReshaped },
    backend,
    attrs: { begin: sliceBeginCoords, size: sliceSize }
  });
  backend.disposeData(xReshaped.dataId);
  backend.disposeData(xTransposed.dataId);
  backend.disposeData(xReshaped.dataId);
  return result;
}
var batchToSpaceNDConfig = {
  kernelName: BatchToSpaceND,
  backendName: "wasm",
  kernelFunc: batchToSpaceND2
};

// src/tfjs-backend-wasm/src/kernels/Cast.ts
function cast3(args) {
  const { inputs: { x }, attrs: { dtype }, backend } = args;
  const out = backend.makeOutput(x.shape, dtype);
  const inVals = backend.typedArrayFromHeap(x);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.set(inVals);
  return out;
}
var castConfig = {
  kernelName: Cast,
  backendName: "wasm",
  kernelFunc: cast3
};

// src/tfjs-backend-wasm/src/kernels/Ceil.ts
var ceilConfig = createUnaryKernelConfig(Ceil);

// src/tfjs-backend-wasm/src/kernels/ClipByValue.ts
var wasmClip;
function setup8(backend) {
  wasmClip = backend.wasm.cwrap(ClipByValue, null, [
    "number",
    "number",
    "number",
    "number"
  ]);
}
function clip(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { clipValueMin, clipValueMax } = attrs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmClip(xId, clipValueMin, clipValueMax, outId);
  return out;
}
var clipByValueConfig = {
  kernelName: ClipByValue,
  backendName: "wasm",
  setupFunc: setup8,
  kernelFunc: clip
};

// src/tfjs-backend-wasm/src/kernels/Concat.ts
function concat2(args) {
  const { inputs, backend } = args;
  const axis = util_exports.parseAxisParam(args.attrs.axis, inputs[0].shape)[0];
  let outShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), axis);
  const $inputs = inputs.filter((t) => util_exports.sizeFromShape(t.shape) > 0);
  if ($inputs.length === 1) {
    return identity({ inputs: { x: $inputs[0] }, backend });
  }
  const out = backend.makeOutput(outShape, inputs[0].dtype);
  if (util_exports.sizeFromShape(outShape) === 0) {
    return out;
  }
  const shapes = $inputs.map((t) => t.shape);
  backend_util_exports.assertParamsConsistent(shapes, axis);
  if ($inputs[0].dtype === "string") {
    const inputs2D = $inputs.map((t) => {
      const innerSize = util_exports.sizeFromShape(t.shape.slice(axis));
      const shape = [-1, innerSize];
      return reshape2({ inputs: { x: t }, backend, attrs: { shape } });
    });
    const inputsValShapes = inputs2D.map((t) => {
      return { vals: backend.readSync(t.dataId), shape: t.shape };
    });
    outShape = backend_util_exports.computeOutShape(inputs2D.map((t) => t.shape), 1);
    const simplyConcat = inputs2D[0].shape[0] === 1;
    const outVals2 = concatImpl(
      inputsValShapes,
      outShape,
      inputs[0].dtype,
      simplyConcat
    );
    const finalOutShape = backend_util_exports.computeOutShape($inputs.map((t) => t.shape), axis);
    out.shape = finalOutShape;
    const outData = backend.dataIdMap.get(out.dataId);
    outData.stringBytes = backend_util_exports.fromStringArrayToUint8(outVals2);
    inputs2D.forEach((t) => backend.disposeData(t.dataId));
    return out;
  }
  const batchDim = util_exports.sizeFromShape($inputs[0].shape.slice(0, axis));
  let sumInnerDims = 0;
  const innerDims = $inputs.map((input) => {
    const innerDim = util_exports.sizeFromShape(input.shape.slice(axis));
    sumInnerDims += innerDim;
    return innerDim;
  });
  const inVals = $inputs.map((input) => backend.typedArrayFromHeap(input));
  const outVals = backend.typedArrayFromHeap(out);
  for (let b = 0; b < batchDim; b++) {
    let outOffset = b * sumInnerDims;
    for (let i = 0; i < inVals.length; i++) {
      const innerDim = innerDims[i];
      const inOffset = b * innerDim;
      const vals = inVals[i].subarray(inOffset, inOffset + innerDim);
      outVals.set(vals, outOffset);
      outOffset += innerDim;
    }
  }
  return out;
}
var concatConfig = {
  kernelName: Concat,
  backendName: "wasm",
  kernelFunc: concat2
};

// src/tfjs-backend-wasm/src/kernels/Conv2D.ts
var wasmConv2d;
function setup9(backend) {
  wasmConv2d = backend.wasm.cwrap(Conv2D, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function conv2d3(args) {
  const { inputs, attrs, backend } = args;
  const { x, filter } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  const { strides, dilations, pad: pad3, dimRoundingMode, dataFormat } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    dilations,
    pad3,
    dimRoundingMode,
    false,
    $dataFormat
  );
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const outputChannels = convInfo.outChannels;
  const isSamePad = convInfo.padInfo.type === "SAME" ? 1 : 0;
  if (convInfo.dataFormat !== "channelsLast") {
    throw new Error(
      `wasm backend Conv2D does not support dataFormat:'${convInfo.dataFormat}'. Please use 'channelsLast'.`
    );
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmConv2d(
    xId,
    x.shape[0],
    x.shape[1],
    x.shape[2],
    filterId,
    filterHeight,
    filterWidth,
    padTop,
    padRight,
    padBottom,
    padLeft,
    isSamePad,
    dilationHeight,
    dilationWidth,
    strideHeight,
    strideWidth,
    inputChannels,
    outputChannels,
    outId
  );
  return out;
}
var conv2DConfig = {
  kernelName: Conv2D,
  backendName: "wasm",
  setupFunc: setup9,
  kernelFunc: conv2d3
};

// src/tfjs-backend-wasm/src/kernels/Conv2DBackpropInput.ts
var wasmConv2DBackpropInput;
function setup10(backend) {
  wasmConv2DBackpropInput = backend.wasm.cwrap(Conv2DBackpropInput, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function conv2DBackpropInput2(args) {
  const { backend, inputs, attrs } = args;
  const { dy, filter } = inputs;
  const { strides, pad: pad3, dataFormat, dimRoundingMode, inputShape } = attrs;
  const dilations = 1;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(
    inputShape,
    filter.shape,
    strides,
    dilations,
    pad3,
    dimRoundingMode,
    false,
    $dataFormat
  );
  const {
    batchSize,
    filterHeight,
    filterWidth,
    inChannels,
    inHeight,
    inWidth,
    outChannels,
    outHeight,
    outWidth,
    strideHeight,
    strideWidth
  } = convInfo;
  const topPad = filterHeight - 1 - convInfo.padInfo.top;
  const leftPad = filterWidth - 1 - convInfo.padInfo.left;
  const isChannelsLast = convInfo.dataFormat === "channelsLast";
  const dxStrides = util_exports.computeStrides(convInfo.inShape);
  const dyStrides = util_exports.computeStrides(dy.shape);
  const [fltS0, fltS1, fltS2] = util_exports.computeStrides(filter.shape);
  const xBatchStride = dxStrides[0];
  const xRowStride = isChannelsLast ? dxStrides[1] : dxStrides[2];
  const xColStride = isChannelsLast ? dxStrides[2] : 1;
  const xChannelStride = isChannelsLast ? 1 : dxStrides[1];
  const yBatchStride = dyStrides[0];
  const yRowStride = isChannelsLast ? dyStrides[1] : dyStrides[2];
  const yColStride = isChannelsLast ? dyStrides[2] : 1;
  const yChannelStride = isChannelsLast ? 1 : dyStrides[1];
  const out = backend.makeOutput(convInfo.inShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const dyId = backend.dataIdMap.get(dy.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  wasmConv2DBackpropInput(
    dyId,
    filterId,
    batchSize,
    filterHeight,
    filterWidth,
    inHeight,
    inWidth,
    inChannels,
    outHeight,
    outWidth,
    outChannels,
    strideHeight,
    strideWidth,
    topPad,
    leftPad,
    fltS0,
    fltS1,
    fltS2,
    xBatchStride,
    xRowStride,
    xColStride,
    xChannelStride,
    yBatchStride,
    yRowStride,
    yColStride,
    yChannelStride,
    outId
  );
  return out;
}
var conv2DBackpropInputConfig = {
  kernelName: Conv2DBackpropInput,
  backendName: "wasm",
  setupFunc: setup10,
  kernelFunc: conv2DBackpropInput2
};

// src/tfjs-backend-wasm/src/kernels/Cos.ts
var cosConfig = createUnaryKernelConfig(Cos);

// src/tfjs-backend-wasm/src/kernels/Cosh.ts
var coshConfig = createUnaryKernelConfig(Cosh);

// src/tfjs-backend-wasm/src/kernels/CropAndResize.ts
var InterpolationMethod = /* @__PURE__ */ ((InterpolationMethod2) => {
  InterpolationMethod2[InterpolationMethod2["bilinear"] = 0] = "bilinear";
  InterpolationMethod2[InterpolationMethod2["nearest"] = 1] = "nearest";
  return InterpolationMethod2;
})(InterpolationMethod || {});
var wasmCropAndResize;
function setup11(backend) {
  wasmCropAndResize = backend.wasm.cwrap(CropAndResize, null, [
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function cropAndResize2(args) {
  const { backend, inputs, attrs } = args;
  const { method, extrapolationValue, cropSize } = attrs;
  const { image, boxes, boxInd } = inputs;
  const numBoxes = boxes.shape[0];
  const [cropHeight, cropWidth] = cropSize;
  const outShape = [numBoxes, cropHeight, cropWidth, image.shape[3]];
  let imagesData = backend.dataIdMap.get(image.dataId);
  let castedData;
  if (image.dtype !== "float32") {
    castedData = cast3({ backend, inputs: { x: image }, attrs: { dtype: "float32" } });
    imagesData = backend.dataIdMap.get(castedData.dataId);
  }
  const imagesId = imagesData.id;
  const boxesId = backend.dataIdMap.get(boxes.dataId).id;
  const boxIndId = backend.dataIdMap.get(boxInd.dataId).id;
  const out = backend.makeOutput(outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const imagesShapeBytes = new Uint8Array(new Int32Array(image.shape).buffer);
  wasmCropAndResize(
    imagesId,
    boxesId,
    boxIndId,
    numBoxes,
    imagesShapeBytes,
    cropHeight,
    cropWidth,
    InterpolationMethod[method],
    extrapolationValue,
    outId
  );
  if (castedData != null) {
    backend.disposeData(castedData.dataId);
  }
  return out;
}
var cropAndResizeConfig = {
  kernelName: CropAndResize,
  backendName: "wasm",
  setupFunc: setup11,
  kernelFunc: cropAndResize2
};

// src/tfjs-backend-wasm/src/kernels/Cumprod.ts
var wasmCumprod;
function setup12(backend) {
  wasmCumprod = backend.wasm.cwrap(Cumprod, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function cumprod2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, exclusive, reverse: reverse3 } = attrs;
  const xRank = x.shape.length;
  util_exports.assert(
    x.dtype === "float32" || x.dtype === "int32",
    () => `cumprod does not support ${x.dtype} tensors in the WASM backend`
  );
  const permutation = backend_util_exports.getAxesPermutation([axis], xRank);
  let permutedX = x;
  if (permutation !== null) {
    permutedX = transpose2({ inputs: { x }, attrs: { perm: permutation }, backend });
  }
  const permutedAxis = backend_util_exports.getInnerMostAxes(1, xRank)[0];
  backend_util_exports.assertAxesAreInnerMostDims("cumprod", [permutedAxis], xRank);
  const permutedOut = backend.makeOutput(permutedX.shape, permutedX.dtype);
  const finalDim = permutedX.shape[permutedAxis];
  const permutedXId = backend.dataIdMap.get(permutedX.dataId).id;
  const permutedOutId = backend.dataIdMap.get(permutedOut.dataId).id;
  wasmCumprod(
    permutedXId,
    exclusive ? 1 : 0,
    reverse3 ? 1 : 0,
    finalDim,
    permutedOutId,
    CppDType[x.dtype]
  );
  let out = permutedOut;
  if (permutation !== null) {
    const undoPermutation = backend_util_exports.getUndoAxesPermutation(permutation);
    out = transpose2(
      { inputs: { x: permutedOut }, attrs: { perm: undoPermutation }, backend }
    );
    backend.disposeData(permutedX.dataId);
    backend.disposeData(permutedOut.dataId);
  }
  return out;
}
var cumprodConfig = {
  kernelName: Cumprod,
  backendName: "wasm",
  setupFunc: setup12,
  kernelFunc: cumprod2
};

// src/tfjs-backend-wasm/src/kernels/Cumsum.ts
var wasmCumsum;
function setup13(backend) {
  wasmCumsum = backend.wasm.cwrap(Cumsum, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function cumsum2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, exclusive, reverse: reverse3 } = attrs;
  const xRank = x.shape.length;
  util_exports.assert(
    x.dtype === "float32" || x.dtype === "int32",
    () => `cumsum does not support ${x.dtype} tensors in the WASM backend`
  );
  const permutation = backend_util_exports.getAxesPermutation([axis], xRank);
  let permutedX = x;
  if (permutation !== null) {
    permutedX = transpose2({ inputs: { x }, attrs: { perm: permutation }, backend });
  }
  const permutedAxis = backend_util_exports.getInnerMostAxes(1, xRank)[0];
  backend_util_exports.assertAxesAreInnerMostDims("cumsum", [permutedAxis], xRank);
  const permutedOut = backend.makeOutput(permutedX.shape, permutedX.dtype);
  const finalDim = permutedX.shape[permutedAxis];
  const permutedXId = backend.dataIdMap.get(permutedX.dataId).id;
  const permutedOutId = backend.dataIdMap.get(permutedOut.dataId).id;
  wasmCumsum(
    permutedXId,
    exclusive ? 1 : 0,
    reverse3 ? 1 : 0,
    finalDim,
    permutedOutId,
    CppDType[x.dtype]
  );
  let out = permutedOut;
  if (permutation !== null) {
    const undoPermutation = backend_util_exports.getUndoAxesPermutation(permutation);
    out = transpose2(
      { inputs: { x: permutedOut }, attrs: { perm: undoPermutation }, backend }
    );
    backend.disposeData(permutedX.dataId);
    backend.disposeData(permutedOut.dataId);
  }
  return out;
}
var cumsumConfig = {
  kernelName: Cumsum,
  backendName: "wasm",
  setupFunc: setup13,
  kernelFunc: cumsum2
};

// src/tfjs-backend-wasm/src/kernels/DepthToSpace.ts
var wasmDepthToSpace;
function setup14(backend) {
  wasmDepthToSpace = backend.wasm.cwrap(DepthToSpace, null, [
    "number",
    "number",
    "number",
    "array",
    "number",
    "array",
    "array",
    "number",
    "number"
  ]);
}
function depthToSpace2(args) {
  const { backend, inputs, attrs } = args;
  const { x } = inputs;
  const { blockSize, dataFormat } = attrs;
  const batchSize = x.shape[0];
  const inputHeight = dataFormat === "NHWC" ? x.shape[1] : x.shape[2];
  const inputWidth = dataFormat === "NHWC" ? x.shape[2] : x.shape[3];
  const inputDepth = dataFormat === "NHWC" ? x.shape[3] : x.shape[1];
  const outputHeight = inputHeight * blockSize;
  const outputWidth = inputWidth * blockSize;
  const outputDepth = inputDepth / (blockSize * blockSize);
  const outputShape = dataFormat === "NHWC" ? [batchSize, outputHeight, outputWidth, outputDepth] : [batchSize, outputDepth, outputHeight, outputWidth];
  const out = backend.makeOutput(outputShape, "float32");
  const xData = backend.dataIdMap.get(x.dataId);
  const xId = xData.id;
  const xStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(x.shape)).buffer);
  const outputShapeBytes = new Uint8Array(new Int32Array(outputShape).buffer);
  const outStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(outputShape)).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const channelsLast = dataFormat === "NHWC" ? 1 : 0;
  wasmDepthToSpace(
    xId,
    blockSize,
    channelsLast,
    xStridesBytes,
    x.shape.length - 1,
    outputShapeBytes,
    outStridesBytes,
    outputShape.length,
    outId
  );
  return out;
}
var depthToSpaceConfig = {
  kernelName: DepthToSpace,
  backendName: "wasm",
  setupFunc: setup14,
  kernelFunc: depthToSpace2
};

// src/tfjs-backend-wasm/src/kernels/DepthwiseConv2dNative.ts
var wasmDepthwiseConv2d;
function setup15(backend) {
  wasmDepthwiseConv2d = backend.wasm.cwrap(DepthwiseConv2dNative, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function depthwiseConv2d3(args) {
  const { inputs, attrs, backend } = args;
  const { x, filter } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  const { strides, dilations, pad: pad3, dimRoundingMode } = attrs;
  const $dilations = dilations == null ? [1, 1] : dilations;
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    $dilations,
    pad3,
    dimRoundingMode,
    true
  );
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const outputChannels = convInfo.outChannels;
  const isSamePad = convInfo.padInfo.type === "SAME" ? 1 : 0;
  if (convInfo.dataFormat !== "channelsLast") {
    throw new Error(
      `wasm backend DepthwiseConv2dNative does not support dataFormat:'${convInfo.dataFormat}'. Please use 'channelsLast'.`
    );
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmDepthwiseConv2d(
    xId,
    x.shape[0],
    x.shape[1],
    x.shape[2],
    filterId,
    filterHeight,
    filterWidth,
    padTop,
    padRight,
    padBottom,
    padLeft,
    isSamePad,
    dilationHeight,
    dilationWidth,
    strideHeight,
    strideWidth,
    inputChannels,
    outputChannels,
    outId
  );
  return out;
}
var depthwiseConv2dNativeConfig = {
  kernelName: DepthwiseConv2dNative,
  backendName: "wasm",
  setupFunc: setup15,
  kernelFunc: depthwiseConv2d3
};

// src/tfjs-backend-wasm/src/kernels/Elu.ts
var eluConfig = createUnaryKernelConfig(Elu);

// src/tfjs-backend-wasm/src/kernels/Equal.ts
var supportsFullBroadcast2 = false;
var equalConfig = createBinaryKernelConfig(Equal, supportsFullBroadcast2, "bool");

// src/tfjs-backend-wasm/src/kernels/Exp.ts
var expConfig = createUnaryKernelConfig(Exp, "float32");

// src/tfjs-backend-wasm/src/kernels/ExpandDims.ts
function expandDims2(args) {
  const { inputs, attrs, backend } = args;
  const { input } = inputs;
  const { dim } = attrs;
  const inputRank = input.shape.length;
  const newShape = input.shape.slice();
  let $dim = dim;
  if (dim < 0) {
    util_exports.assert(
      -(inputRank + 1) <= dim,
      () => `Axis must be in the interval [${-(inputRank + 1)}, ${inputRank}]`
    );
    $dim = inputRank + dim + 1;
  }
  newShape.splice($dim, 0, 1);
  return reshape2({ inputs: { x: input }, backend, attrs: { shape: newShape } });
}
var expandDimsConfig = {
  kernelName: ExpandDims,
  backendName: "wasm",
  kernelFunc: expandDims2
};

// src/tfjs-backend-wasm/src/kernels/Fill.ts
function fill2(args) {
  const { attrs: { shape, value, dtype }, backend } = args;
  const out = backend.makeOutput(shape, dtype);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.fill(value);
  return out;
}
var fillConfig = {
  kernelName: Fill,
  backendName: "wasm",
  kernelFunc: fill2
};

// src/tfjs-backend-wasm/src/kernels/FlipLeftRight.ts
var wasmFlipLeftRight;
function setup16(backend) {
  wasmFlipLeftRight = backend.wasm.cwrap(FlipLeftRight, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function flipLeftRight2(args) {
  const { inputs, backend } = args;
  const { image } = inputs;
  const out = backend.makeOutput(image.shape, image.dtype);
  const imageId = backend.dataIdMap.get(image.dataId).id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  wasmFlipLeftRight(
    imageId,
    batch,
    imageHeight,
    imageWidth,
    numChannels,
    outId
  );
  return out;
}
var flipLeftRightConfig = {
  kernelName: FlipLeftRight,
  backendName: "wasm",
  kernelFunc: flipLeftRight2,
  setupFunc: setup16
};

// src/tfjs-backend-wasm/src/kernels/Floor.ts
var floorConfig = createUnaryKernelConfig(Floor);

// src/tfjs-backend-wasm/src/kernels/FloorDiv.ts
var supportsFullBroadcast3 = false;
var floorDivConfig = createBinaryKernelConfig(FloorDiv, supportsFullBroadcast3);

// src/tfjs-backend-wasm/src/kernels/FusedBatchNorm.ts
var wasmBatchNorm;
function setup17(backend) {
  wasmBatchNorm = backend.wasm.cwrap(
    FusedBatchNorm,
    null,
    ["number", "number", "number", "number", "number", "number", "number"]
  );
}
function fusedBatchNorm(args) {
  const { backend, inputs, attrs } = args;
  const { varianceEpsilon } = attrs;
  const { x, mean: mean3, variance, offset, scale } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const meanId = backend.dataIdMap.get(mean3.dataId).id;
  const varianceId = backend.dataIdMap.get(variance.dataId).id;
  const offsetId = offset != null ? backend.dataIdMap.get(offset.dataId).id : 0;
  const scaleId = scale != null ? backend.dataIdMap.get(scale.dataId).id : 0;
  const out = backend.makeOutput(x.shape, x.dtype);
  if (util_exports.sizeFromShape(x.shape) === 0) {
    return out;
  }
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmBatchNorm(
    xId,
    meanId,
    varianceId,
    offsetId,
    scaleId,
    varianceEpsilon,
    outId
  );
  return out;
}
var fusedBatchNormConfig = {
  kernelName: FusedBatchNorm,
  backendName: "wasm",
  setupFunc: setup17,
  kernelFunc: fusedBatchNorm
};

// src/tfjs-backend-wasm/src/kernels/FusedConv2D.ts
var wasmFusedConv2d;
function setup18(backend) {
  wasmFusedConv2d = backend.wasm.cwrap(FusedConv2D, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function fusedConv2d(args) {
  const { inputs, attrs, backend } = args;
  const { x, filter, bias, preluActivationWeights } = inputs;
  const {
    strides,
    pad: pad3,
    dilations,
    dataFormat,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  } = attrs;
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    dilations,
    pad3,
    dimRoundingMode
  );
  const fusedActivation = FusableActivation[activation];
  if (fusedActivation == null) {
    throw new Error(
      `${activation} activation not yet supported for FusedConv2D in the wasm backend.`
    );
  }
  const xId = backend.dataIdMap.get(x.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  const outputChannels = convInfo.outChannels;
  let biasId = 0;
  if (bias != null) {
    const biasData = backend.dataIdMap.get(bias.dataId);
    if (biasData.shape.length !== 1) {
      throw new Error(
        `FusedConv2D only supports rank-1 bias but got rank ${biasData.shape.length}.`
      );
    }
    if (biasData.shape[0] !== outputChannels) {
      throw new Error(
        `FusedConv2D bias shape (${biasData.shape}) does not match the number of output channels (${outputChannels})`
      );
    }
    biasId = biasData.id;
  }
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const isSamePad = convInfo.padInfo.type === "SAME" ? 1 : 0;
  const batchSize = convInfo.batchSize;
  const inHeight = convInfo.inHeight;
  const inWidth = convInfo.inWidth;
  if (dataFormat !== "NHWC") {
    throw new Error(
      `wasm backend FusedConv2D does not support dataFormat:'${dataFormat}'. Please use 'NHWC'.`
    );
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const preluActivationWeightsId = preluActivationWeights == null ? 0 : backend.dataIdMap.get(preluActivationWeights.dataId).id;
  wasmFusedConv2d(
    xId,
    batchSize,
    inHeight,
    inWidth,
    filterId,
    filterHeight,
    filterWidth,
    biasId,
    padTop,
    padRight,
    padBottom,
    padLeft,
    isSamePad,
    dilationHeight,
    dilationWidth,
    strideHeight,
    strideWidth,
    inputChannels,
    outputChannels,
    fusedActivation,
    preluActivationWeightsId,
    leakyreluAlpha || 0,
    outId
  );
  return out;
}
var fusedConv2DConfig = {
  kernelName: FusedConv2D,
  backendName: "wasm",
  setupFunc: setup18,
  kernelFunc: fusedConv2d
};

// src/tfjs-backend-wasm/src/kernels/FusedDepthwiseConv2D.ts
var wasmFusedDepthwiseConv2d;
function setup19(backend) {
  wasmFusedDepthwiseConv2d = backend.wasm.cwrap(FusedDepthwiseConv2D, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function fusedDepthwiseConv2d(args) {
  const { inputs, attrs, backend } = args;
  const { x, filter, bias, preluActivationWeights } = inputs;
  const {
    strides,
    pad: pad3,
    dilations,
    dataFormat,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  } = attrs;
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    dilations,
    pad3,
    dimRoundingMode,
    true
  );
  const fusedActivation = FusableActivation[activation];
  if (fusedActivation == null) {
    throw new Error(
      `${activation} activation not yet supported for FusedDepthwiseConv2D in the wasm backend.`
    );
  }
  const xId = backend.dataIdMap.get(x.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  const outputChannels = convInfo.outChannels;
  let biasId = 0;
  if (bias != null) {
    const biasData = backend.dataIdMap.get(bias.dataId);
    if (biasData.shape.length !== 1) {
      throw new Error(
        `FusedDepthwiseConv2D only supports rank-1 bias but got rank ${biasData.shape.length}.`
      );
    }
    if (biasData.shape[0] !== outputChannels) {
      throw new Error(
        `FusedDepthwiseConv2D bias shape (${biasData.shape}) does not match the number of output channels (${outputChannels})`
      );
    }
    biasId = biasData.id;
  }
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const isSamePad = convInfo.padInfo.type === "SAME" ? 1 : 0;
  const batchSize = convInfo.batchSize;
  const inHeight = convInfo.inHeight;
  const inWidth = convInfo.inWidth;
  if (dataFormat !== "NHWC") {
    throw new Error(
      `wasm backend FusedDepthwiseConv2D does not support dataFormat:'${dataFormat}'. Please use 'NHWC'.`
    );
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const preluActivationWeightsId = preluActivationWeights == null ? 0 : backend.dataIdMap.get(preluActivationWeights.dataId).id;
  wasmFusedDepthwiseConv2d(
    xId,
    batchSize,
    inHeight,
    inWidth,
    filterId,
    filterHeight,
    filterWidth,
    biasId,
    padTop,
    padRight,
    padBottom,
    padLeft,
    isSamePad,
    dilationHeight,
    dilationWidth,
    strideHeight,
    strideWidth,
    inputChannels,
    outputChannels,
    fusedActivation,
    preluActivationWeightsId,
    leakyreluAlpha || 0,
    outId
  );
  return out;
}
var fusedDepthwiseConv2DConfig = {
  kernelName: FusedDepthwiseConv2D,
  backendName: "wasm",
  setupFunc: setup19,
  kernelFunc: fusedDepthwiseConv2d
};

// src/tfjs-backend-wasm/src/kernels/GatherNd.ts
var wasmGatherNd;
function setup20(backend) {
  wasmGatherNd = backend.wasm.cwrap(GatherNd, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number"
  ]);
}
function gatherNd(args) {
  const { backend, inputs } = args;
  const { params, indices } = inputs;
  const [resultShape, numSlices, sliceSize, strides] = gather_nd_util_exports.prepareAndValidate(params, indices);
  const out = backend.makeOutput(resultShape, params.dtype);
  if (numSlices === 0) {
    return out;
  }
  const indicesShape = indices.shape;
  const sliceRank = indicesShape[indicesShape.length - 1];
  const xData = backend.dataIdMap.get(params.dataId);
  const xId = xData.id;
  const indicesData = backend.dataIdMap.get(indices.dataId);
  const indicesId = indicesData.id;
  const stridesBytes = new Uint8Array(new Int32Array(strides).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmGatherNd(
    xId,
    CppDType[params.dtype],
    indicesId,
    numSlices,
    sliceRank,
    sliceSize,
    stridesBytes,
    outId
  );
  return out;
}
var gatherNdConfig = {
  kernelName: GatherNd,
  backendName: "wasm",
  setupFunc: setup20,
  kernelFunc: gatherNd
};

// src/tfjs-backend-wasm/src/kernels/GatherV2.ts
var wasmGather;
function setup21(backend) {
  wasmGather = backend.wasm.cwrap("Gather", null, [
    "number",
    "number",
    "array",
    "number",
    "number",
    "number",
    "array",
    "number"
  ]);
}
function gatherV2(args) {
  const { backend, inputs, attrs } = args;
  const { x, indices } = inputs;
  const { axis, batchDims } = attrs;
  const parsedAxis = util_exports.parseAxisParam(axis, x.shape)[0];
  const indicesVals = backend.readSync(indices.dataId);
  const axisDim = x.shape[parsedAxis];
  for (let i = 0; i < indicesVals.length; ++i) {
    const index = indicesVals[i];
    util_exports.assert(
      index <= axisDim - 1 && index >= 0,
      () => `GatherV2: the index value ${index} is not in [0, ${axisDim - 1}]`
    );
  }
  const shapeInfo = backend_util_exports.segment_util.collectGatherOpShapeInfo(
    x,
    indices,
    parsedAxis,
    batchDims
  );
  const flattenX = reshape2({
    inputs: { x },
    attrs: {
      shape: [
        shapeInfo.batchSize,
        shapeInfo.outerSize,
        shapeInfo.dimSize,
        shapeInfo.sliceSize
      ]
    },
    backend
  });
  const indicesSize = util_exports.sizeFromShape(indices.shape);
  const flattenIndex = reshape2({
    inputs: { x: indices },
    attrs: { shape: [shapeInfo.batchSize, indicesSize / shapeInfo.batchSize] },
    backend
  });
  const flattenOutputShape = [
    shapeInfo.batchSize,
    shapeInfo.outerSize,
    indicesSize / shapeInfo.batchSize,
    shapeInfo.sliceSize
  ];
  const out = backend.makeOutput(flattenOutputShape, x.dtype);
  if (util_exports.sizeFromShape(x.shape) === 0) {
    return out;
  }
  const stridesSize = flattenX.shape.length - 1;
  const xData = backend.dataIdMap.get(flattenX.dataId);
  const xId = xData.id;
  const indicesData = backend.dataIdMap.get(flattenIndex.dataId);
  const indicesId = indicesData.id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const xStridesBytes = new Uint8Array(
    new Int32Array(util_exports.computeStrides(flattenX.shape)).buffer
  );
  const outStridesBytes = new Uint8Array(
    new Int32Array(util_exports.computeStrides(flattenOutputShape)).buffer
  );
  wasmGather(
    xId,
    CppDType[x.dtype],
    xStridesBytes,
    stridesSize,
    indicesId,
    shapeInfo.batchSize,
    outStridesBytes,
    outId
  );
  backend.disposeData(flattenX.dataId);
  backend.disposeData(flattenIndex.dataId);
  out.shape = shapeInfo.outputShape;
  return out;
}
var gatherV2Config = {
  kernelName: GatherV2,
  backendName: "wasm",
  setupFunc: setup21,
  kernelFunc: gatherV2
};

// src/tfjs-backend-wasm/src/kernels/Greater.ts
var supportsFullBroadcast4 = false;
var greaterConfig = createBinaryKernelConfig(Greater, supportsFullBroadcast4, "bool");

// src/tfjs-backend-wasm/src/kernels/GreaterEqual.ts
var supportsFullBroadcast5 = false;
var greaterEqualConfig = createBinaryKernelConfig(GreaterEqual, supportsFullBroadcast5, "bool");

// src/tfjs-backend-wasm/src/kernels/LeakyRelu.ts
var wasmFunc3;
function setupFunc2(backend) {
  wasmFunc3 = backend.wasm.cwrap(LeakyRelu, null, [
    "number",
    "number",
    "number",
    "number"
  ]);
}
function leakyRelu2(args) {
  const { inputs: { x }, attrs: { alpha }, backend } = args;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(x.shape, "float32");
  if (util_exports.sizeFromShape(x.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmFunc3(xId, CppDType[x.dtype], alpha, outId);
  }
  return out;
}
var leakyReluConfig = {
  kernelName: LeakyRelu,
  backendName: "wasm",
  setupFunc: setupFunc2,
  kernelFunc: leakyRelu2
};

// src/tfjs-backend-wasm/src/kernels/Less.ts
var supportsFullBroadcast6 = false;
var lessConfig = createBinaryKernelConfig(Less, supportsFullBroadcast6, "bool");

// src/tfjs-backend-wasm/src/kernels/LessEqual.ts
var supportsFullBroadcast7 = false;
var lessEqualConfig = createBinaryKernelConfig(LessEqual, supportsFullBroadcast7, "bool");

// src/tfjs-backend-wasm/src/kernels/Log.ts
var logConfig = createUnaryKernelConfig(Log);

// src/tfjs-backend-wasm/src/kernels/LogicalAnd.ts
var supportsFullBroadcast8 = false;
var logicalAndConfig = createBinaryKernelConfig(LogicalAnd, supportsFullBroadcast8, "bool");

// src/tfjs-backend-wasm/src/kernels/LogicalNot.ts
var logicalNotConfig = createUnaryKernelConfig(LogicalNot);

// src/tfjs-backend-wasm/src/kernels/LogicalOr.ts
var supportsFullBroadcast9 = false;
var logicalOrConfig = createBinaryKernelConfig(LogicalOr, supportsFullBroadcast9, "bool");

// src/tfjs-backend-wasm/src/kernels/LogicalXor.ts
var supportsFullBroadcast10 = false;
var logicalXorConfig = createBinaryKernelConfig(LogicalXor, supportsFullBroadcast10, "bool");

// src/tfjs-backend-wasm/src/kernels/Max.ts
var wasmMax;
function setup22(backend) {
  wasmMax = backend.wasm.cwrap(Max, null, [
    "number",
    "number",
    "number",
    "number"
  ]);
}
function max2(args) {
  const { backend, inputs, attrs } = args;
  const { reductionIndices: axis, keepDims } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const { transposed, axes, originalAxes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    input = transposed;
    inputId = transposedId;
  }
  const inputRank = input.shape.length;
  backend_util_exports.assertAxesAreInnerMostDims("max", axes, inputRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, x.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmMax(inputId, CppDType[x.dtype], reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var maxConfig = {
  kernelName: Max,
  backendName: "wasm",
  setupFunc: setup22,
  kernelFunc: max2
};

// src/tfjs-backend-wasm/src/kernels/Maximum.ts
var supportsFullBroadcast11 = false;
var maximumConfig = createBinaryKernelConfig(Maximum, supportsFullBroadcast11);

// src/tfjs-backend-wasm/src/kernels/MaxPool.ts
var wasmMaxPool;
function setup23(backend) {
  wasmMaxPool = backend.wasm.cwrap(MaxPool, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function maxPool2(args) {
  const { inputs, attrs, backend } = args;
  const x = inputs.x;
  const xId = backend.dataIdMap.get(x.dataId).id;
  util_exports.assert(
    x.dtype === "float32",
    () => `Error in MaxPool: only float32 input is supported. Got ${x.dtype}.`
  );
  const { filterSize, strides, pad: pad3, dimRoundingMode } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(
    x.shape,
    filterSize,
    strides,
    1,
    pad3,
    dimRoundingMode
  );
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const outputChannels = convInfo.outChannels;
  if (convInfo.dataFormat !== "channelsLast") {
    throw new Error(
      `wasm backend does not support dataFormat:'${convInfo.dataFormat}'. Please use 'channelsLast'.`
    );
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmMaxPool(
    xId,
    x.shape[0],
    x.shape[1],
    x.shape[2],
    filterHeight,
    filterWidth,
    padTop,
    padRight,
    padBottom,
    padLeft,
    dilationHeight,
    dilationWidth,
    strideHeight,
    strideWidth,
    inputChannels,
    outputChannels,
    outId
  );
  return out;
}
var maxPoolConfig = {
  kernelName: MaxPool,
  backendName: "wasm",
  setupFunc: setup23,
  kernelFunc: maxPool2
};

// src/tfjs-backend-wasm/src/kernels/Mean.ts
var wasmMean;
function setup24(backend) {
  wasmMean = backend.wasm.cwrap(Mean, null, ["number, number, number"]);
}
function mean2(args) {
  const { backend, inputs, attrs } = args;
  const { axis, keepDims } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const { transposed, axes, originalAxes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
  let reductionAxes = axes;
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
      reductionAxes = backend_util_exports.getInnerMostAxes(
        reductionAxes.length,
        input.shape.length
      );
    }
  }
  backend_util_exports.assertAxesAreInnerMostDims(
    "mean",
    reductionAxes,
    input.shape.length
  );
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, reductionAxes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  let castedInput = input;
  if (input.dtype !== "float32") {
    castedInput = cast3({ backend, inputs: { x: input }, attrs: { dtype: "float32" } });
    inputId = backend.dataIdMap.get(castedInput.dataId).id;
  }
  const out = backend.makeOutput(outShape, "float32");
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmMean(inputId, reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  if (input.dtype !== "float32") {
    backend.disposeData(castedInput.dataId);
  }
  return out;
}
var meanConfig = {
  kernelName: Mean,
  backendName: "wasm",
  setupFunc: setup24,
  kernelFunc: mean2
};

// src/tfjs-backend-wasm/src/kernels/Min.ts
var wasmMin;
function setup25(backend) {
  wasmMin = backend.wasm.cwrap(Min, null, [
    "number",
    "number",
    "number",
    "number"
  ]);
}
function min2(args) {
  const { backend, inputs, attrs } = args;
  const { axis, keepDims } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const { transposed, axes, originalAxes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
    }
  }
  const inputRank = input.shape.length;
  backend_util_exports.assertAxesAreInnerMostDims("min", axes, inputRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, input.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmMin(inputId, CppDType[x.dtype], reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var minConfig = {
  kernelName: Min,
  backendName: "wasm",
  setupFunc: setup25,
  kernelFunc: min2
};

// src/tfjs-backend-wasm/src/kernels/Minimum.ts
var supportsFullBroadcast12 = false;
var minimumConfig = createBinaryKernelConfig(Minimum, supportsFullBroadcast12);

// src/tfjs-backend-wasm/src/kernels/MirrorPad.ts
var MirrorPaddingMode = /* @__PURE__ */ ((MirrorPaddingMode2) => {
  MirrorPaddingMode2[MirrorPaddingMode2["reflect"] = 0] = "reflect";
  MirrorPaddingMode2[MirrorPaddingMode2["symmetric"] = 1] = "symmetric";
  return MirrorPaddingMode2;
})(MirrorPaddingMode || {});
var wasmMirrorPad;
function setup26(backend) {
  wasmMirrorPad = backend.wasm.cwrap(MirrorPad, null, [
    "number",
    "array",
    "number",
    "number",
    "array",
    "array",
    "number",
    "number"
  ]);
}
function mirrorPad2(args) {
  const { inputs: { x }, backend, attrs: { paddings, mode } } = args;
  const outShape = paddings.map(
    (p, i) => p[0] + x.shape[i] + p[1]
  );
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(outShape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  const prePaddingsFlat = paddings.map((padTuple) => padTuple[0]);
  const postPaddingsFlat = paddings.map((padTuple) => padTuple[1]);
  const prePaddingsBytes = new Uint8Array(new Int32Array(prePaddingsFlat).buffer);
  const postPaddingsBytes = new Uint8Array(new Int32Array(postPaddingsFlat).buffer);
  wasmMirrorPad(
    xId,
    xShapeBytes,
    x.shape.length,
    CppDType[x.dtype],
    prePaddingsBytes,
    postPaddingsBytes,
    MirrorPaddingMode[mode],
    outId
  );
  return out;
}
var mirrorPadConfig = {
  kernelName: MirrorPad,
  backendName: "wasm",
  kernelFunc: mirrorPad2,
  setupFunc: setup26
};

// src/tfjs-backend-wasm/src/kernels/Multiply.ts
var supportsFullBroadcast13 = true;
var multiplyConfig = createBinaryKernelConfig(Multiply, supportsFullBroadcast13);

// src/tfjs-backend-wasm/src/kernels/Neg.ts
var negConfig = createUnaryKernelConfig(Neg);

// src/tfjs-backend-wasm/src/kernels/NonMaxSuppression_util.ts
function parseResultStruct(backend, resOffset) {
  const result = new Int32Array(backend.wasm.HEAPU8.buffer, resOffset, 4);
  const pSelectedIndices = result[0];
  const selectedSize = result[1];
  const pSelectedScores = result[2];
  const pValidOutputs = result[3];
  backend.wasm._free(resOffset);
  return { pSelectedIndices, selectedSize, pSelectedScores, pValidOutputs };
}

// src/tfjs-backend-wasm/src/kernels/NonMaxSuppressionV3.ts
var wasmFunc4;
function setup27(backend) {
  wasmFunc4 = backend.wasm.cwrap(
    NonMaxSuppressionV3,
    "number",
    [
      "number",
      "number",
      "number",
      "number",
      "number"
    ]
  );
}
function kernelFunc(args) {
  const { backend, inputs, attrs } = args;
  const { iouThreshold, maxOutputSize, scoreThreshold } = attrs;
  const { boxes, scores } = inputs;
  const boxesId = backend.dataIdMap.get(boxes.dataId).id;
  const scoresId = backend.dataIdMap.get(scores.dataId).id;
  const resOffset = wasmFunc4(boxesId, scoresId, maxOutputSize, iouThreshold, scoreThreshold);
  const { pSelectedIndices, selectedSize, pSelectedScores, pValidOutputs } = parseResultStruct(backend, resOffset);
  backend.wasm._free(pSelectedScores);
  backend.wasm._free(pValidOutputs);
  const selectedIndicesTensor = backend.makeOutput([selectedSize], "int32", pSelectedIndices);
  return selectedIndicesTensor;
}
var nonMaxSuppressionV3Config = {
  kernelName: NonMaxSuppressionV3,
  backendName: "wasm",
  setupFunc: setup27,
  kernelFunc
};

// src/tfjs-backend-wasm/src/kernels/NonMaxSuppressionV4.ts
var wasmFunc5;
function setup28(backend) {
  wasmFunc5 = backend.wasm.cwrap(
    NonMaxSuppressionV4,
    "number",
    [
      "number",
      "number",
      "number",
      "number",
      "number",
      "bool"
    ]
  );
}
function nonMaxSuppressionV4(args) {
  const { backend, inputs, attrs } = args;
  const { iouThreshold, maxOutputSize, scoreThreshold, padToMaxOutputSize } = attrs;
  const { boxes, scores } = inputs;
  const boxesId = backend.dataIdMap.get(boxes.dataId).id;
  const scoresId = backend.dataIdMap.get(scores.dataId).id;
  const resOffset = wasmFunc5(
    boxesId,
    scoresId,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    padToMaxOutputSize
  );
  const { pSelectedIndices, selectedSize, pSelectedScores, pValidOutputs } = parseResultStruct(backend, resOffset);
  backend.wasm._free(pSelectedScores);
  const selectedIndicesTensor = backend.makeOutput([selectedSize], "int32", pSelectedIndices);
  const validOutputsTensor = backend.makeOutput([], "int32", pValidOutputs);
  return [selectedIndicesTensor, validOutputsTensor];
}
var nonMaxSuppressionV4Config = {
  kernelName: NonMaxSuppressionV4,
  backendName: "wasm",
  setupFunc: setup28,
  kernelFunc: nonMaxSuppressionV4
};

// src/tfjs-backend-wasm/src/kernels/NonMaxSuppressionV5.ts
var wasmFunc6;
function setup29(backend) {
  wasmFunc6 = backend.wasm.cwrap(
    NonMaxSuppressionV5,
    "number",
    [
      "number",
      "number",
      "number",
      "number",
      "number",
      "number"
    ]
  );
}
function kernelFunc2(args) {
  const { backend, inputs, attrs } = args;
  const { iouThreshold, maxOutputSize, scoreThreshold, softNmsSigma } = attrs;
  const { boxes, scores } = inputs;
  const boxesId = backend.dataIdMap.get(boxes.dataId).id;
  const scoresId = backend.dataIdMap.get(scores.dataId).id;
  const resOffset = wasmFunc6(
    boxesId,
    scoresId,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma
  );
  const { pSelectedIndices, selectedSize, pSelectedScores, pValidOutputs } = parseResultStruct(backend, resOffset);
  backend.wasm._free(pValidOutputs);
  const selectedIndicesTensor = backend.makeOutput([selectedSize], "int32", pSelectedIndices);
  const selectedScoresTensor = backend.makeOutput([selectedSize], "float32", pSelectedScores);
  return [selectedIndicesTensor, selectedScoresTensor];
}
var nonMaxSuppressionV5Config = {
  kernelName: NonMaxSuppressionV5,
  backendName: "wasm",
  setupFunc: setup29,
  kernelFunc: kernelFunc2
};

// src/tfjs-backend-wasm/src/kernels/NotEqual.ts
var supportsFullBroadcast14 = false;
var notEqualConfig = createBinaryKernelConfig(NotEqual, supportsFullBroadcast14, "bool");

// src/tfjs-backend-wasm/src/kernels/OneHot.ts
var wasmOneHot;
function setup30(backend) {
  wasmOneHot = backend.wasm.cwrap(OneHot, null, [
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function oneHot2(args) {
  const { inputs, backend, attrs } = args;
  const { indices } = inputs;
  const { depth, onValue, offValue } = attrs;
  const out = backend.makeOutput([...indices.shape, depth], "int32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const indicesData = backend.dataIdMap.get(indices.dataId);
  const indicesId = indicesData.id;
  wasmOneHot(indicesId, depth, onValue, offValue, outId);
  return out;
}
var oneHotConfig = {
  kernelName: OneHot,
  backendName: "wasm",
  setupFunc: setup30,
  kernelFunc: oneHot2
};

// src/tfjs-backend-wasm/src/kernels/OnesLike.ts
function onesLike2(args) {
  const { inputs: { x }, backend } = args;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.fill(1);
  return out;
}
var onesLikeConfig = {
  kernelName: OnesLike,
  backendName: "wasm",
  kernelFunc: onesLike2
};

// src/tfjs-backend-wasm/src/kernels/Pack.ts
function pack(args) {
  const { inputs, backend, attrs } = args;
  const { axis } = attrs;
  if (inputs.length === 1) {
    return expandDims2(
      { inputs: { input: inputs[0] }, backend, attrs: { dim: axis } }
    );
  }
  const shape = inputs[0].shape;
  const dtype = inputs[0].dtype;
  inputs.forEach((t) => {
    util_exports.assertShapesMatch(
      shape,
      t.shape,
      "All tensors passed to stack must have matching shapes"
    );
    util_exports.assert(
      dtype === t.dtype,
      () => "All tensors passed to stack must have matching dtypes"
    );
  });
  const intermediateTensorInfos = [];
  const expandedTensors = inputs.map((t) => {
    const expandedT = expandDims2({ inputs: { input: t }, backend, attrs: { dim: axis } });
    intermediateTensorInfos.push(expandedT);
    return expandedT;
  });
  const result = concat2({ inputs: expandedTensors, backend, attrs: { axis } });
  intermediateTensorInfos.forEach((t) => backend.disposeData(t.dataId));
  return result;
}
var packConfig = {
  kernelName: Pack,
  backendName: "wasm",
  kernelFunc: pack
};

// src/tfjs-backend-wasm/src/kernels/PadV2.ts
var wasmPadV2;
function setup31(backend) {
  wasmPadV2 = backend.wasm.cwrap(PadV2, null, [
    "number",
    "array",
    "number",
    "number",
    "array",
    "array",
    "number",
    "number"
  ]);
}
function pad2(args) {
  const { inputs: { x }, backend, attrs: { paddings, constantValue } } = args;
  const outShape = paddings.map(
    (p, i) => p[0] + x.shape[i] + p[1]
  );
  if (util_exports.sizeFromShape(x.shape) === 0) {
    return fill2({
      backend,
      attrs: { shape: outShape, value: constantValue, dtype: x.dtype }
    });
  }
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(outShape, x.dtype);
  const outTensorData = backend.dataIdMap.get(out.dataId);
  const outId = outTensorData.id;
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  const prePaddingsFlat = paddings.map((padTuple) => padTuple[0]);
  const postPaddingsFlat = paddings.map((padTuple) => padTuple[1]);
  const prePaddingsBytes = new Uint8Array(new Int32Array(prePaddingsFlat).buffer);
  const postPaddingsBytes = new Uint8Array(new Int32Array(postPaddingsFlat).buffer);
  wasmPadV2(
    xId,
    xShapeBytes,
    x.shape.length,
    CppDType[x.dtype],
    prePaddingsBytes,
    postPaddingsBytes,
    constantValue,
    outId
  );
  return out;
}
var padV2Config = {
  kernelName: PadV2,
  backendName: "wasm",
  kernelFunc: pad2,
  setupFunc: setup31
};

// src/tfjs-backend-wasm/src/kernels/Pow.ts
var supportsFullBroadcast15 = false;
var powConfig = createBinaryKernelConfig(Pow, supportsFullBroadcast15);

// src/tfjs-backend-wasm/src/kernels/Prelu.ts
var wasmPrelu;
function setup32(backend) {
  wasmPrelu = backend.wasm.cwrap(Prelu, null, [
    "number",
    "number",
    "number"
  ]);
}
function prelu2(args) {
  const { inputs, backend } = args;
  const { x, alpha } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const weightsId = backend.dataIdMap.get(alpha.dataId).id;
  let inputId = xId;
  const input = x;
  let castedInput = input;
  if (input.dtype !== "float32") {
    castedInput = cast3({ backend, inputs: { x }, attrs: { dtype: "float32" } });
    inputId = backend.dataIdMap.get(castedInput.dataId).id;
  }
  const out = backend.makeOutput(x.shape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmPrelu(inputId, weightsId, outId);
  if (input.dtype !== "float32") {
    backend.disposeData(castedInput.dataId);
  }
  return out;
}
var preluConfig = {
  kernelName: Prelu,
  backendName: "wasm",
  setupFunc: setup32,
  kernelFunc: prelu2
};

// src/tfjs-backend-wasm/src/kernels/Prod.ts
var wasmProd;
function setup33(backend) {
  wasmProd = backend.wasm.cwrap(Prod, null, [
    "number",
    "number",
    "number",
    "number"
  ]);
}
function prod2(args) {
  const { backend, inputs, attrs } = args;
  const { axis, keepDims } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const { transposed, axes, originalAxes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
  let reductionAxes = axes;
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
      reductionAxes = backend_util_exports.getInnerMostAxes(
        reductionAxes.length,
        input.shape.length
      );
    }
  }
  backend_util_exports.assertAxesAreInnerMostDims(
    "prod",
    reductionAxes,
    input.shape.length
  );
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, reductionAxes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, input.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmProd(inputId, reduceSize, CppDType[out.dtype], outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var prodConfig = {
  kernelName: Prod,
  backendName: "wasm",
  setupFunc: setup33,
  kernelFunc: prod2
};

// src/tfjs-backend-wasm/src/kernels/Range.ts
var range2 = (args) => {
  const { backend, attrs } = args;
  const { start, stop, step: step3, dtype } = attrs;
  const values = rangeImpl(start, stop, step3, dtype);
  const out = backend.makeOutput([values.length], dtype);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.set(values);
  return out;
};
var rangeConfig = {
  kernelName: Range,
  backendName: "wasm",
  kernelFunc: range2
};

// src/tfjs-backend-wasm/src/kernels/RealDiv.ts
var supportsFullBroadcast16 = true;
var realDivConfig = createBinaryKernelConfig(RealDiv, supportsFullBroadcast16);

// src/tfjs-backend-wasm/src/kernels/Relu.ts
var reluConfig = createUnaryKernelConfig(Relu);

// src/tfjs-backend-wasm/src/kernels/Relu6.ts
var relu6Config = createUnaryKernelConfig(Relu6);

// src/tfjs-backend-wasm/src/kernels/ResizeBilinear.ts
var wasmResizeBilinear;
function setup34(backend) {
  wasmResizeBilinear = backend.wasm.cwrap(ResizeBilinear, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function resizeBilinear2(args) {
  const { backend, inputs, attrs } = args;
  const { images } = inputs;
  const { alignCorners, halfPixelCenters, size } = attrs;
  const [newHeight, newWidth] = size;
  const [batch, oldHeight, oldWidth, numChannels] = images.shape;
  const outShape = [batch, newHeight, newWidth, numChannels];
  let xData = backend.dataIdMap.get(images.dataId);
  let castedData;
  if (xData.dtype !== "float32") {
    castedData = cast3({ backend, inputs: { x: images }, attrs: { dtype: "float32" } });
    xData = backend.dataIdMap.get(castedData.dataId);
  }
  const xId = xData.id;
  const out = backend.makeOutput(outShape, "float32");
  if (util_exports.sizeFromShape(images.shape) === 0) {
    return out;
  }
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmResizeBilinear(
    xId,
    batch,
    oldHeight,
    oldWidth,
    numChannels,
    newHeight,
    newWidth,
    alignCorners ? 1 : 0,
    halfPixelCenters ? 1 : 0,
    outId
  );
  if (castedData != null) {
    backend.disposeData(castedData.dataId);
  }
  return out;
}
var resizeBilinearConfig = {
  kernelName: ResizeBilinear,
  backendName: "wasm",
  setupFunc: setup34,
  kernelFunc: resizeBilinear2
};

// src/tfjs-backend-wasm/src/kernels/ResizeNearestNeighbor.ts
var wasmResizeNearestNeighbor;
function setup35(backend) {
  wasmResizeNearestNeighbor = backend.wasm.cwrap(
    ResizeNearestNeighbor,
    null,
    [
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number"
    ]
  );
}
function resizeNearestNeighbor2(args) {
  const { backend, inputs, attrs } = args;
  const { images } = inputs;
  const { alignCorners, halfPixelCenters, size } = attrs;
  const [newHeight, newWidth] = size;
  const [batch, oldHeight, oldWidth, numChannels] = images.shape;
  const outShape = [batch, newHeight, newWidth, numChannels];
  const out = backend.makeOutput(outShape, "float32");
  if (util_exports.sizeFromShape(images.shape) === 0) {
    return out;
  }
  let xData = backend.dataIdMap.get(images.dataId);
  let castedData;
  if (xData.dtype !== "float32") {
    castedData = cast3({
      backend,
      inputs: { x: images },
      attrs: { dtype: "float32" }
    });
    xData = backend.dataIdMap.get(castedData.dataId);
  }
  const xId = xData.id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmResizeNearestNeighbor(
    xId,
    batch,
    oldHeight,
    oldWidth,
    numChannels,
    newHeight,
    newWidth,
    alignCorners ? 1 : 0,
    halfPixelCenters ? 1 : 0,
    outId
  );
  if (castedData != null) {
    backend.disposeData(castedData.dataId);
  }
  return out;
}
var resizeNearestNeighborConfig = {
  kernelName: ResizeNearestNeighbor,
  backendName: "wasm",
  setupFunc: setup35,
  kernelFunc: resizeNearestNeighbor2
};

// src/tfjs-backend-wasm/src/kernels/Reverse.ts
var wasmReverse;
function setup36(backend) {
  wasmReverse = backend.wasm.cwrap(Reverse, null, [
    "number",
    "array",
    "number",
    "array",
    "number",
    "number"
  ]);
}
function reverse2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { dims } = attrs;
  const axes = util_exports.parseAxisParam(dims, x.shape);
  if (x.shape.length === 0) {
    return identity({ inputs: { x }, backend });
  }
  const out = backend.makeOutput(x.shape, x.dtype);
  const xId = backend.dataIdMap.get(x.dataId).id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const axesBytes = new Uint8Array(new Int32Array(axes).buffer);
  const outShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  wasmReverse(
    xId,
    axesBytes,
    axes.length,
    outShapeBytes,
    x.shape.length,
    outId
  );
  const reshaped = reshape2({ inputs: { x: out }, attrs: { shape: x.shape }, backend });
  backend.disposeData(out.dataId);
  return reshaped;
}
var reverseConfig = {
  kernelName: Reverse,
  backendName: "wasm",
  kernelFunc: reverse2,
  setupFunc: setup36
};

// src/tfjs-backend-wasm/src/kernels/RotateWithOffset.ts
var wasmRotate;
function setup37(backend) {
  wasmRotate = backend.wasm.cwrap(RotateWithOffset, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "number"
  ]);
}
function rotateWithOffset2(args) {
  const { inputs, backend, attrs } = args;
  const { image } = inputs;
  const { radians, fillValue, center } = attrs;
  const out = backend.makeOutput(image.shape, image.dtype);
  const imageId = backend.dataIdMap.get(image.dataId).id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  const [centerX, centerY] = backend_util_exports.getImageCenter(center, imageHeight, imageWidth);
  const fillIsBlack = fillValue === 0;
  const fullOpacityValue = 255;
  const fillValues = typeof fillValue === "number" ? [fillValue, fillValue, fillValue, fillIsBlack ? 0 : fullOpacityValue] : [...fillValue, fullOpacityValue];
  const fillBytes = new Uint8Array(new Int32Array(fillValues).buffer);
  wasmRotate(
    imageId,
    batch,
    imageHeight,
    imageWidth,
    numChannels,
    radians,
    centerX,
    centerY,
    fillBytes,
    fillValues.length,
    outId
  );
  return out;
}
var rotateWithOffsetConfig = {
  kernelName: RotateWithOffset,
  backendName: "wasm",
  kernelFunc: rotateWithOffset2,
  setupFunc: setup37
};

// src/tfjs-backend-wasm/src/kernels/Round.ts
var roundConfig = createUnaryKernelConfig(Round);

// src/tfjs-backend-wasm/src/kernels/Rsqrt.ts
var rsqrtConfig = createUnaryKernelConfig(Rsqrt);

// src/tfjs-backend-wasm/src/kernels/ScatterNd.ts
var wasmScatterNd;
function setup38(backend) {
  wasmScatterNd = backend.wasm.cwrap(ScatterNd, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "number"
  ]);
}
function scatterNd(args) {
  const { backend, inputs, attrs } = args;
  const { indices, updates } = inputs;
  const { shape } = attrs;
  const out = backend.makeOutput(shape, updates.dtype);
  if (util_exports.sizeFromShape(shape) === 0) {
    return out;
  }
  const { sliceRank, numUpdates, sliceSize, strides, outputSize } = scatter_nd_util_exports.calculateShapes(updates, indices, shape);
  const indicesData = backend.dataIdMap.get(indices.dataId);
  const indicesId = indicesData.id;
  const updatesData = backend.dataIdMap.get(updates.dataId);
  const updatesId = updatesData.id;
  const stridesBytes = new Uint8Array(new Int32Array(strides).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmScatterNd(
    indicesId,
    updatesId,
    CppDType[updates.dtype],
    sliceRank,
    numUpdates,
    sliceSize,
    stridesBytes,
    outputSize,
    outId
  );
  return out;
}
var scatterNdConfig = {
  kernelName: ScatterNd,
  backendName: "wasm",
  setupFunc: setup38,
  kernelFunc: scatterNd
};

// src/tfjs-backend-wasm/src/kernels/Select.ts
var wasmSelect;
function setup39(backend) {
  wasmSelect = backend.wasm.cwrap("SelectV2", null, [
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function select(args) {
  const { inputs, backend } = args;
  const { condition, t, e } = inputs;
  const conditionId = backend.dataIdMap.get(condition.dataId).id;
  const tId = backend.dataIdMap.get(t.dataId).id;
  const eId = backend.dataIdMap.get(e.dataId).id;
  const out = backend.makeOutput(t.shape, t.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const cRank = condition.shape.length;
  const tRank = t.shape.length;
  const offset = cRank === 0 || cRank > 1 || tRank === 1 ? 1 : util_exports.sizeFromShape(t.shape.slice(1));
  wasmSelect(conditionId, tId, eId, offset, outId);
  return out;
}
var selectConfig = {
  kernelName: Select,
  backendName: "wasm",
  kernelFunc: select,
  setupFunc: setup39
};

// src/tfjs-backend-wasm/src/kernels/Sigmoid.ts
var wasmFunc7;
function setup40(backend) {
  wasmFunc7 = backend.wasm.cwrap(Sigmoid, null, ["number", "number"]);
}
function sigmoid3(args) {
  const { backend, inputs: { x } } = args;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  if (util_exports.sizeFromShape(out.shape) === 0) {
    return out;
  }
  wasmFunc7(xId, outId);
  return out;
}
var sigmoidConfig = {
  kernelName: "Sigmoid",
  backendName: "wasm",
  setupFunc: setup40,
  kernelFunc: sigmoid3
};

// src/tfjs-backend-wasm/src/kernels/Sin.ts
var sinConfig = createUnaryKernelConfig(Sin);

// src/tfjs-backend-wasm/src/kernels/Softmax.ts
var wasmFunc8;
function setup41(backend) {
  wasmFunc8 = backend.wasm.cwrap(Softmax, null, [
    "number",
    "number",
    "number",
    "number"
  ]);
}
function softmax2(args) {
  const { backend, inputs: { logits }, attrs: { dim } } = args;
  const xId = backend.dataIdMap.get(logits.dataId).id;
  const out = backend.makeOutput(logits.shape, logits.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const channels = logits.shape[dim];
  const batch = util_exports.sizeFromShape(logits.shape) / channels;
  if (util_exports.sizeFromShape(out.shape) === 0) {
    return out;
  }
  wasmFunc8(xId, outId, channels, batch);
  return out;
}
var softmaxConfig = {
  kernelName: Softmax,
  backendName: "wasm",
  setupFunc: setup41,
  kernelFunc: softmax2
};

// src/tfjs-backend-wasm/src/kernels/SpaceToBatchND.ts
function spaceToBatchND2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockShape, paddings } = attrs;
  const prod3 = util_exports.sizeFromShape(blockShape);
  const completePaddings = [[0, 0]];
  completePaddings.push(...paddings);
  for (let i = 1 + blockShape.length; i < x.shape.length; ++i) {
    completePaddings.push([0, 0]);
  }
  const paddedX = padV2Config.kernelFunc({
    inputs: { x },
    backend,
    attrs: { paddings: completePaddings, constantValue: 0 }
  });
  const reshapedPaddedShape = backend_util_exports.getReshaped(paddedX.shape, blockShape, prod3, false);
  const permutedReshapedPaddedPermutation = backend_util_exports.getPermuted(
    reshapedPaddedShape.length,
    blockShape.length,
    false
  );
  const flattenShape = backend_util_exports.getReshapedPermuted(paddedX.shape, blockShape, prod3, false);
  const reshapeInputs = { x: paddedX };
  const reshapeAttrs = { shape: reshapedPaddedShape };
  const paddedXReshaped = reshape2({ inputs: reshapeInputs, backend, attrs: reshapeAttrs });
  const transposeInputs = { x: paddedXReshaped };
  const transposeAttrs = { perm: permutedReshapedPaddedPermutation };
  const paddedXT = transpose2({ inputs: transposeInputs, backend, attrs: transposeAttrs });
  const resultReshapeInputs = { x: paddedXT };
  const resultReshapeAttrs = { shape: flattenShape };
  const result = reshape2(
    { inputs: resultReshapeInputs, backend, attrs: resultReshapeAttrs }
  );
  backend.disposeData(paddedX.dataId);
  backend.disposeData(paddedXReshaped.dataId);
  backend.disposeData(paddedXT.dataId);
  return result;
}
var spaceToBatchNDConfig = {
  kernelName: SpaceToBatchND,
  backendName: "wasm",
  kernelFunc: spaceToBatchND2
};

// src/tfjs-backend-wasm/src/kernels/SparseFillEmptyRows.ts
var wasmSparseFillEmptyRows;
function setup42(backend) {
  wasmSparseFillEmptyRows = backend.wasm.cwrap("SparseFillEmptyRows", "number", [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function sparseFillEmptyRows2(args) {
  const { backend, inputs } = args;
  const { indices, values, denseShape, defaultValue } = inputs;
  const indicesCount = indices.shape[0];
  const rank = indices.shape[1];
  const denseRows = backend.readSync(denseShape.dataId)[0];
  const maxOutputIndicesShape = [indicesCount + denseRows, rank];
  const indicesId = backend.dataIdMap.get(indices.dataId).id;
  const valuesId = backend.dataIdMap.get(values.dataId).id;
  const defaultValueId = backend.dataIdMap.get(defaultValue.dataId).id;
  const outputIndices = backend.makeOutput(maxOutputIndicesShape, indices.dtype);
  const outputIndicesId = backend.dataIdMap.get(outputIndices.dataId).id;
  const outputValues = backend.makeOutput(maxOutputIndicesShape.slice(0, 1), values.dtype);
  const outputValuesId = backend.dataIdMap.get(outputValues.dataId).id;
  const emptyRowIndicator = backend.makeOutput([denseRows], "bool");
  const emptyRowIndicatorId = backend.dataIdMap.get(emptyRowIndicator.dataId).id;
  const reverseIndexMap = backend.makeOutput([indicesCount], indices.dtype);
  const reverseIndexMapId = backend.dataIdMap.get(reverseIndexMap.dataId).id;
  const exceptionValues = backend.makeOutput([4], "int32");
  const exceptionValuesId = backend.dataIdMap.get(exceptionValues.dataId).id;
  const outputRows = wasmSparseFillEmptyRows(
    indicesId,
    valuesId,
    CppDType[values.dtype],
    indicesCount,
    denseRows,
    rank,
    defaultValueId,
    outputIndicesId,
    outputValuesId,
    emptyRowIndicatorId,
    reverseIndexMapId,
    exceptionValuesId
  );
  const exceptionValuesArray = backend.readSync(exceptionValues.dataId);
  let exceptionMessage;
  switch (exceptionValuesArray[0]) {
    case 1: {
      exceptionMessage = backend_util_exports.getSparseFillEmptyRowsIndicesDenseShapeMismatch(
        exceptionValuesArray[1]
      );
      break;
    }
    case 2: {
      exceptionMessage = backend_util_exports.getSparseFillEmptyRowsNegativeIndexErrorMessage(
        exceptionValuesArray[1],
        exceptionValuesArray[2]
      );
      break;
    }
    case 3:
      exceptionMessage = backend_util_exports.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(
        exceptionValuesArray[1],
        exceptionValuesArray[2],
        exceptionValuesArray[3]
      );
      break;
    default:
      exceptionMessage = "";
  }
  backend.disposeData(exceptionValues.dataId);
  if (exceptionMessage) {
    backend.disposeData(outputIndices.dataId);
    backend.disposeData(outputValues.dataId);
    backend.disposeData(emptyRowIndicator.dataId);
    backend.disposeData(reverseIndexMap.dataId);
    throw new Error(exceptionMessage);
  }
  let resizedIndices = outputIndices;
  let resizedValues = outputValues;
  if (outputRows !== maxOutputIndicesShape[0]) {
    resizedIndices = slice2({
      inputs: { x: outputIndices },
      attrs: { begin: 0, size: [outputRows, rank] },
      backend
    });
    resizedValues = slice2({
      inputs: { x: outputValues },
      attrs: { begin: 0, size: outputRows },
      backend
    });
    backend.disposeData(outputIndices.dataId);
    backend.disposeData(outputValues.dataId);
  }
  return [resizedIndices, resizedValues, emptyRowIndicator, reverseIndexMap];
}
var sparseFillEmptyRowsConfig = {
  kernelName: SparseFillEmptyRows,
  backendName: "wasm",
  setupFunc: setup42,
  kernelFunc: sparseFillEmptyRows2
};

// src/tfjs-backend-wasm/src/kernels/SparseReshape.ts
var wasmSparseReshape;
function setup43(backend) {
  wasmSparseReshape = backend.wasm.cwrap(SparseReshape, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function sparseReshape2(args) {
  const { backend, inputs } = args;
  const { inputIndices, inputShape, newShape } = inputs;
  if (inputIndices.shape.length !== 2) {
    throw new Error(`Input indices should be a matrix but received shape
        ${inputIndices.shape}`);
  }
  if (inputShape.shape.length !== 1) {
    throw new Error(`Input shape should be a vector but received shape
        ${inputShape.shape}`);
  }
  if (newShape.shape.length !== 1) {
    throw new Error(
      `Target shape should be a vector but received shape ${newShape.shape}`
    );
  }
  const inputIndicesId = backend.dataIdMap.get(inputIndices.dataId).id;
  const inputShapeId = backend.dataIdMap.get(inputShape.dataId).id;
  const newShapeId = backend.dataIdMap.get(newShape.dataId).id;
  const nnz = inputIndices.shape[0];
  const outputRank = util_exports.sizeFromShape(newShape.shape);
  const newIndices = backend.makeOutput([nnz, outputRank], inputIndices.dtype);
  const newIndicesId = backend.dataIdMap.get(newIndices.dataId).id;
  const outputShape = backend.makeOutput([outputRank], newShape.dtype);
  const outputShapeId = backend.dataIdMap.get(outputShape.dataId).id;
  const exceptionValues = backend.makeOutput([3], "int32");
  const exceptionValuesId = backend.dataIdMap.get(exceptionValues.dataId).id;
  wasmSparseReshape(
    inputIndicesId,
    inputShapeId,
    newShapeId,
    nnz,
    newIndicesId,
    outputShapeId,
    exceptionValuesId
  );
  const exceptionValuesArray = backend.readSync(exceptionValues.dataId);
  let exceptionMessage;
  switch (exceptionValuesArray[0]) {
    case 0: {
      exceptionMessage = backend_util_exports.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(
        exceptionValuesArray[1],
        exceptionValuesArray[2]
      );
      break;
    }
    case 1: {
      exceptionMessage = backend_util_exports.getSparseReshapeNegativeOutputDimErrorMessage(
        exceptionValuesArray[1],
        exceptionValuesArray[2]
      );
      break;
    }
    case 2:
      exceptionMessage = backend_util_exports.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage();
      break;
    case 3: {
      const inputShapeValues = Array.from(backend.readSync(inputShape.dataId)), outputShapeValues = Array.from(backend.readSync(outputShape.dataId));
      exceptionMessage = backend_util_exports.getSparseReshapeInputOutputMultipleErrorMessage(
        inputShapeValues,
        outputShapeValues
      );
      break;
    }
    case 4: {
      const inputShapeValues = Array.from(backend.readSync(inputShape.dataId)), outputShapeValues = Array.from(backend.readSync(outputShape.dataId));
      exceptionMessage = backend_util_exports.getSparseReshapeInputOutputMismatchErrorMessage(
        inputShapeValues,
        outputShapeValues
      );
      break;
    }
    default:
      exceptionMessage = "";
  }
  backend.disposeData(exceptionValues.dataId);
  if (exceptionMessage) {
    backend.disposeData(newIndices.dataId);
    backend.disposeData(outputShape.dataId);
    throw new Error(exceptionMessage);
  }
  return [newIndices, outputShape];
}
var sparseReshapeConfig = {
  kernelName: SparseReshape,
  backendName: "wasm",
  setupFunc: setup43,
  kernelFunc: sparseReshape2
};

// src/tfjs-backend-wasm/src/kernels/SparseSegmentReduction.ts
var wasmSparseSegmentReduction;
function setup44(backend) {
  wasmSparseSegmentReduction = backend.wasm.cwrap("SparseSegmentReduction", null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function sparseSegmentReduction(args, isMean) {
  const { backend, inputs } = args;
  const { data, indices, segmentIds } = inputs;
  const numIndices = indices.shape[0];
  const segmentIdsBack = backend.readSync(segmentIds.dataId, numIndices - 1, numIndices)[0];
  const lastSegmentIdPlusOne = numIndices > 0 ? segmentIdsBack + 1 : 0;
  const outputRows = lastSegmentIdPlusOne;
  if (outputRows < 0) {
    throw new Error(
      backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage()
    );
  }
  const outputShape = data.shape.slice();
  outputShape[0] = outputRows;
  const dataId = backend.dataIdMap.get(data.dataId).id;
  const indicesId = backend.dataIdMap.get(indices.dataId).id;
  const segmentIdsId = backend.dataIdMap.get(segmentIds.dataId).id;
  const output = backend.makeOutput(outputShape, data.dtype);
  const outputId = backend.dataIdMap.get(output.dataId).id;
  const exceptionValues = backend.makeOutput([4], "int32");
  const exceptionValuesId = backend.dataIdMap.get(exceptionValues.dataId).id;
  wasmSparseSegmentReduction(
    dataId,
    CppDType[data.dtype],
    data.shape[0],
    indicesId,
    segmentIdsId,
    outputId,
    exceptionValuesId,
    isMean,
    0
  );
  const exceptionValuesArray = backend.readSync(exceptionValues.dataId);
  let exceptionMessage;
  switch (exceptionValuesArray[0]) {
    case 0: {
      exceptionMessage = backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage();
      break;
    }
    case 1: {
      exceptionMessage = backend_util_exports.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage();
      break;
    }
    case 2:
      exceptionMessage = backend_util_exports.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(
        exceptionValuesArray[1],
        exceptionValuesArray[2]
      );
      break;
    case 3:
      exceptionMessage = backend_util_exports.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(
        exceptionValuesArray[1],
        exceptionValuesArray[2],
        exceptionValuesArray[3]
      );
      break;
    default:
      exceptionMessage = "";
  }
  backend.disposeData(exceptionValues.dataId);
  if (exceptionMessage) {
    backend.disposeData(output.dataId);
    throw new Error(exceptionMessage);
  }
  return output;
}

// src/tfjs-backend-wasm/src/kernels/SparseSegmentMean.ts
function sparseSegmentMean2(args) {
  return sparseSegmentReduction(args, true);
}
var sparseSegmentMeanConfig = {
  kernelName: SparseSegmentMean,
  backendName: "wasm",
  setupFunc: setup44,
  kernelFunc: sparseSegmentMean2
};

// src/tfjs-backend-wasm/src/kernels/SparseSegmentSum.ts
function sparseSegmentSum2(args) {
  return sparseSegmentReduction(args, false);
}
var sparseSegmentSumConfig = {
  kernelName: SparseSegmentSum,
  backendName: "wasm",
  setupFunc: setup44,
  kernelFunc: sparseSegmentSum2
};

// src/tfjs-backend-wasm/src/kernels/SplitV.ts
function splitV(args) {
  const { inputs, attrs, backend } = args;
  const { x } = inputs;
  const { numOrSizeSplits, axis } = attrs;
  const $axis = util_exports.parseAxisParam(axis, x.shape)[0];
  const splitSizes = backend_util_exports.prepareSplitSize(x, numOrSizeSplits, $axis);
  const begin = new Array(x.shape.length).fill(0);
  const size = x.shape.slice();
  return splitSizes.map((s) => {
    const xSliceSize = [...size];
    xSliceSize[$axis] = s;
    const xSlice = slice2({ inputs: { x }, attrs: { begin, size: xSliceSize }, backend });
    begin[$axis] += s;
    return xSlice;
  });
}
var splitVConfig = {
  kernelName: SplitV,
  backendName: "wasm",
  kernelFunc: splitV
};

// src/tfjs-backend-wasm/src/kernels/Sqrt.ts
var sqrtConfig = createUnaryKernelConfig(Sqrt);

// src/tfjs-backend-wasm/src/kernels/Square.ts
var squareConfig = createUnaryKernelConfig(Square);

// src/tfjs-backend-wasm/src/kernels/SquaredDifference.ts
var supportsFullBroadcast17 = true;
var squaredDifferenceConfig = createBinaryKernelConfig(SquaredDifference, supportsFullBroadcast17);

// src/tfjs-backend-wasm/src/kernels/Step.ts
var wasmStep;
function setup45(backend) {
  wasmStep = backend.wasm.cwrap(Step, null, [
    "number",
    "number",
    "number",
    "number"
  ]);
}
function step2(args) {
  const { backend, inputs, attrs } = args;
  const { alpha } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmStep(xId, alpha, CppDType[x.dtype], outId);
  return out;
}
var stepConfig = {
  kernelName: Step,
  backendName: "wasm",
  setupFunc: setup45,
  kernelFunc: step2
};

// src/tfjs-backend-wasm/src/kernels/StridedSlice.ts
var wasmStridedSlice;
function setup46(backend) {
  wasmStridedSlice = backend.wasm.cwrap(StridedSlice, null, [
    "number",
    "array",
    "number",
    "array",
    "array",
    "array",
    "array",
    "array",
    "number",
    "number"
  ]);
}
function stridedSlice2(args) {
  const { backend, inputs, attrs } = args;
  const { x } = inputs;
  const {
    begin,
    end,
    strides,
    beginMask,
    endMask,
    ellipsisMask,
    newAxisMask,
    shrinkAxisMask
  } = attrs;
  const {
    finalShapeSparse,
    finalShape,
    isIdentity,
    sliceDim0,
    isSimpleSlice,
    begin: $begin,
    end: $end,
    strides: $strides
  } = slice_util_exports.sliceInfo(
    x.shape,
    begin,
    end,
    strides,
    beginMask,
    endMask,
    ellipsisMask,
    newAxisMask,
    shrinkAxisMask
  );
  let result;
  if (isIdentity) {
    result = reshape2({ inputs: { x }, backend, attrs: { shape: finalShape } });
  } else if (sliceDim0 || isSimpleSlice) {
    util_exports.assert(
      x.shape.length >= 1,
      () => `Input must have rank at least 1, got: ${x.shape.length}`
    );
    const size = slice_util_exports.computeOutShape($begin, $end, $strides);
    const sliced = slice2({ inputs: { x }, backend, attrs: { begin: $begin, size } });
    result = reshape2({ inputs: { x: sliced }, backend, attrs: { shape: finalShape } });
    backend.disposeData(sliced.dataId);
  } else {
    const out = backend.makeOutput(finalShapeSparse, "float32");
    const xId = backend.dataIdMap.get(x.dataId).id;
    const xStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(x.shape)).buffer);
    const beginBytes = new Uint8Array(new Int32Array($begin).buffer);
    const endBytes = new Uint8Array(new Int32Array($end).buffer);
    const stridesBytes = new Uint8Array(new Int32Array($strides).buffer);
    const outputShapeBytes = new Uint8Array(new Int32Array(finalShapeSparse).buffer);
    const outStridesBytes = new Uint8Array(
      new Int32Array(util_exports.computeStrides(finalShapeSparse)).buffer
    );
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmStridedSlice(
      xId,
      xStridesBytes,
      x.shape.length,
      beginBytes,
      endBytes,
      stridesBytes,
      outputShapeBytes,
      outStridesBytes,
      finalShapeSparse.length,
      outId
    );
    result = reshape2({ inputs: { x: out }, backend, attrs: { shape: finalShape } });
    backend.disposeData(out.dataId);
  }
  return result;
}
var stridedSliceConfig = {
  kernelName: StridedSlice,
  backendName: "wasm",
  setupFunc: setup46,
  kernelFunc: stridedSlice2
};

// src/tfjs-backend-wasm/src/kernels/StringNGrams.ts
function stringNGrams2(args) {
  const { backend, inputs, attrs } = args;
  const { data, dataSplits } = inputs;
  const {
    separator,
    nGramWidths,
    leftPad,
    rightPad: rightPad2,
    padWidth,
    preserveShortSequences
  } = attrs;
  const $data = backend.readSync(data.dataId);
  const $dataSplits = backend.readSync(dataSplits.dataId);
  const [nGrams, nGramsSplits] = stringNGramsImpl(
    $data,
    $dataSplits,
    separator,
    nGramWidths,
    leftPad,
    rightPad2,
    padWidth,
    preserveShortSequences
  );
  const nGramsOut = backend.makeOutput([nGrams.length], "string");
  const nGramsOutData = backend.dataIdMap.get(nGramsOut.dataId);
  nGramsOutData.stringBytes = nGrams;
  const nGramsSplitsOut = backend.makeOutput(dataSplits.shape, "int32");
  const nGramsSplitsOutVals = backend.typedArrayFromHeap(nGramsSplitsOut);
  nGramsSplitsOutVals.set(nGramsSplits);
  return [nGramsOut, nGramsSplitsOut];
}
var stringNGramsConfig = {
  kernelName: StringNGrams,
  backendName: "wasm",
  kernelFunc: stringNGrams2
};

// src/tfjs-backend-wasm/src/kernels/StringSplit.ts
function stringSplit2(args) {
  const { backend, inputs, attrs } = args;
  const { input, delimiter } = inputs;
  const { skipEmpty } = attrs;
  const inputVals = backend.readSync(input.dataId);
  const delimiterVals = backend.readSync(delimiter.dataId);
  const [indices, values, shape] = stringSplitImpl(inputVals, delimiterVals[0], skipEmpty);
  const outputSize = values.length;
  const indicesOut = backend.makeOutput([outputSize, 2], "int32");
  const indicesOutVals = backend.typedArrayFromHeap(indicesOut);
  indicesOutVals.set(indices);
  const valuesOut = backend.makeOutput([outputSize], "string");
  const valuesOutData = backend.dataIdMap.get(valuesOut.dataId);
  valuesOutData.stringBytes = values;
  const shapeOut = backend.makeOutput([2], "int32");
  const shapeOutVals = backend.typedArrayFromHeap(shapeOut);
  shapeOutVals.set(shape);
  return [indicesOut, valuesOut, shapeOut];
}
var stringSplitConfig = {
  kernelName: StringSplit,
  backendName: "wasm",
  kernelFunc: stringSplit2
};

// src/tfjs-backend-wasm/src/kernels/StringToHashBucketFast.ts
function stringToHashBucketFast2(args) {
  const { backend, inputs, attrs } = args;
  const { input } = inputs;
  const { numBuckets } = attrs;
  const inputVals = backend.readSync(input.dataId);
  const values = stringToHashBucketFastImpl(inputVals, numBuckets);
  const out = backend.makeOutput(input.shape, "int32");
  const outVals = backend.typedArrayFromHeap(out);
  outVals.set(values);
  return out;
}
var stringToHashBucketFastConfig = {
  kernelName: StringToHashBucketFast,
  backendName: "wasm",
  kernelFunc: stringToHashBucketFast2
};

// src/tfjs-backend-wasm/src/kernels/Sub.ts
var supportsFullBroadcast18 = true;
var subConfig = createBinaryKernelConfig(Sub, supportsFullBroadcast18);

// src/tfjs-backend-wasm/src/kernels/Sum.ts
var wasmSum;
function setup47(backend) {
  wasmSum = backend.wasm.cwrap(Sum, null, [
    "number",
    "number",
    "number",
    "number"
  ]);
}
function sum3(args) {
  const { backend, inputs, attrs } = args;
  const { axis, keepDims } = attrs;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const { transposed, axes, originalAxes, inputWasTransposed } = permuteAxesAndTranspose(x, axis, backend);
  let reductionAxes = axes;
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
      reductionAxes = backend_util_exports.getInnerMostAxes(
        reductionAxes.length,
        input.shape.length
      );
    }
  }
  backend_util_exports.assertAxesAreInnerMostDims(
    "sum",
    reductionAxes,
    input.shape.length
  );
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, reductionAxes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, input.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmSum(inputId, reduceSize, CppDType[out.dtype], outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var sumConfig = {
  kernelName: Sum,
  backendName: "wasm",
  setupFunc: setup47,
  kernelFunc: sum3
};

// src/tfjs-backend-wasm/src/kernels/Tan.ts
var tanConfig = createUnaryKernelConfig(Tan);

// src/tfjs-backend-wasm/src/kernels/Tanh.ts
var tanhConfig = createUnaryKernelConfig(Tanh);

// src/tfjs-backend-wasm/src/kernels/Tile.ts
var wasmTile;
function setup48(backend) {
  wasmTile = backend.wasm.cwrap(Tile, null, [
    "number",
    "array",
    "number",
    "array",
    "number",
    "number"
  ]);
}
function tile2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const { reps } = attrs;
  const newShape = new Array(x.shape.length);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = x.shape[i] * reps[i];
  }
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  const newShapeBytes = new Uint8Array(new Int32Array(newShape).buffer);
  const out = backend.makeOutput(newShape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmTile(
    xId,
    xShapeBytes,
    x.shape.length,
    newShapeBytes,
    newShape.length,
    CppDType[out.dtype],
    outId
  );
  return out;
}
var tileConfig = {
  kernelName: Tile,
  backendName: "wasm",
  setupFunc: setup48,
  kernelFunc: tile2
};

// src/tfjs-backend-wasm/src/kernels/TopK.ts
var wasmTopK;
function setup49(backend) {
  wasmTopK = backend.wasm.cwrap(TopK, null, [
    "number",
    "array",
    "number",
    "number",
    "number",
    "bool",
    "number",
    "number"
  ]);
}
var topk2 = ({ inputs, backend, attrs }) => {
  const { x } = inputs;
  const { k, sorted } = attrs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  const outputShape = x.shape.slice();
  outputShape[outputShape.length - 1] = k;
  const outValues = backend.makeOutput(outputShape, x.dtype);
  const outValuesId = backend.dataIdMap.get(outValues.dataId).id;
  const outIndices = backend.makeOutput(outputShape, "int32");
  const outIndicesId = backend.dataIdMap.get(outIndices.dataId).id;
  wasmTopK(
    xId,
    xShapeBytes,
    x.shape.length,
    CppDType[x.dtype],
    k,
    sorted,
    outValuesId,
    outIndicesId
  );
  return [outValues, outIndices];
};
var topKConfig = {
  kernelName: TopK,
  backendName: "wasm",
  setupFunc: setup49,
  kernelFunc: topk2
};

// src/tfjs-backend-wasm/src/kernels/Transform.ts
var wasmTransform;
function setup50(backend) {
  wasmTransform = backend.wasm.cwrap(Transform, null, [
    "number",
    "number",
    "bool",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "array",
    "number",
    "number",
    "number",
    "number",
    "number"
  ]);
}
function transform2(args) {
  const { backend, inputs, attrs } = args;
  const { image, transforms } = inputs;
  const { interpolation, fillMode, fillValue, outputShape } = attrs;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  const [outHeight, outWidth] = outputShape != null ? outputShape : [imageHeight, imageWidth];
  const outShape = [
    batch,
    outHeight,
    outWidth,
    numChannels
  ];
  const inputStrides = new Uint8Array(new Int32Array(util_exports.computeStrides(image.shape)).buffer);
  const outputStrides = new Uint8Array(new Int32Array(util_exports.computeStrides(outShape)).buffer);
  const out = backend.makeOutput(outShape, image.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const imageData = backend.dataIdMap.get(image.dataId);
  const imageId = imageData.id;
  const transformsData = backend.dataIdMap.get(transforms.dataId);
  const transformsId = transformsData.id;
  const interpolationModeId = interpolation === "nearest" ? 1 : 2;
  let fillModeId;
  switch (fillMode) {
    case "constant":
      fillModeId = 1;
      break;
    case "reflect":
      fillModeId = 2;
      break;
    case "wrap":
      fillModeId = 3;
      break;
    case "nearest":
      fillModeId = 4;
      break;
    default:
      fillModeId = 1;
      break;
  }
  wasmTransform(
    imageId,
    transformsId,
    transforms.shape[0] > 1,
    batch,
    outHeight,
    outWidth,
    numChannels,
    imageWidth,
    imageHeight,
    inputStrides,
    image.shape.length - 1,
    outputStrides,
    outShape.length - 1,
    interpolationModeId,
    fillModeId,
    fillValue,
    outId
  );
  return out;
}
var transformConfig = {
  kernelName: Transform,
  backendName: "wasm",
  setupFunc: setup50,
  kernelFunc: transform2
};

// src/tfjs-backend-wasm/src/kernels/Unpack.ts
function unpack(args) {
  const { inputs, backend, attrs } = args;
  const { value } = inputs;
  let { axis } = attrs;
  if (axis < 0) {
    axis += value.shape.length;
  }
  const numOutputs = value.shape[axis];
  const rank = value.shape.length;
  const outShape = new Array(rank - 1);
  let outIndex = 0;
  for (let i = 0; i < rank; i++) {
    if (i !== axis) {
      outShape[outIndex++] = value.shape[i];
    }
  }
  const outs = new Array(numOutputs);
  const begin = new Array(rank).fill(0);
  const size = value.shape.slice();
  size[axis] = 1;
  for (let i = 0; i < outs.length; i++) {
    begin[axis] = i;
    outs[i] = slice2({ inputs: { x: value }, attrs: { begin, size }, backend });
  }
  return outs.map(({ dataId, dtype }) => ({ dataId, dtype, shape: outShape }));
}
var unpackConfig = {
  kernelName: Unpack,
  backendName: "wasm",
  kernelFunc: unpack
};

// src/tfjs-backend-wasm/src/kernels/ZerosLike.ts
function zerosLike2(args) {
  const { inputs: { x }, backend } = args;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.fill(0);
  return out;
}
var zerosLikeConfig = {
  kernelName: ZerosLike,
  backendName: "wasm",
  kernelFunc: zerosLike2
};

// src/tfjs-backend-wasm/src/register_all_kernels.ts
var kernelConfigs = [
  _fusedMatMulConfig,
  absConfig,
  addConfig,
  addNConfig,
  allConfig,
  anyConfig,
  argMaxConfig,
  avgPoolConfig,
  batchMatMulConfig,
  batchToSpaceNDConfig,
  castConfig,
  ceilConfig,
  clipByValueConfig,
  concatConfig,
  conv2DConfig,
  conv2DBackpropInputConfig,
  cosConfig,
  coshConfig,
  cropAndResizeConfig,
  cumprodConfig,
  cumsumConfig,
  depthToSpaceConfig,
  depthwiseConv2dNativeConfig,
  eluConfig,
  equalConfig,
  expConfig,
  expandDimsConfig,
  fillConfig,
  flipLeftRightConfig,
  floorConfig,
  floorDivConfig,
  fusedBatchNormConfig,
  fusedConv2DConfig,
  fusedDepthwiseConv2DConfig,
  gatherNdConfig,
  gatherV2Config,
  greaterConfig,
  greaterEqualConfig,
  identityConfig,
  leakyReluConfig,
  lessConfig,
  lessEqualConfig,
  logConfig,
  logicalAndConfig,
  logicalNotConfig,
  logicalOrConfig,
  logicalXorConfig,
  maxConfig,
  maximumConfig,
  maxPoolConfig,
  meanConfig,
  minConfig,
  minimumConfig,
  mirrorPadConfig,
  multiplyConfig,
  negConfig,
  nonMaxSuppressionV3Config,
  nonMaxSuppressionV4Config,
  nonMaxSuppressionV5Config,
  notEqualConfig,
  oneHotConfig,
  onesLikeConfig,
  packConfig,
  padV2Config,
  powConfig,
  preluConfig,
  prodConfig,
  rangeConfig,
  realDivConfig,
  reluConfig,
  relu6Config,
  reshapeConfig,
  resizeBilinearConfig,
  resizeNearestNeighborConfig,
  reverseConfig,
  rotateWithOffsetConfig,
  roundConfig,
  rsqrtConfig,
  scatterNdConfig,
  selectConfig,
  sigmoidConfig,
  sinConfig,
  sliceConfig,
  softmaxConfig,
  spaceToBatchNDConfig,
  sparseFillEmptyRowsConfig,
  sparseReshapeConfig,
  sparseSegmentMeanConfig,
  sparseSegmentSumConfig,
  splitVConfig,
  sqrtConfig,
  squareConfig,
  squaredDifferenceConfig,
  stepConfig,
  stridedSliceConfig,
  stringNGramsConfig,
  stringSplitConfig,
  stringToHashBucketFastConfig,
  subConfig,
  sumConfig,
  tanConfig,
  tanhConfig,
  tileConfig,
  topKConfig,
  transformConfig,
  transposeConfig,
  unpackConfig,
  zerosLikeConfig
];
for (const kernelConfig of kernelConfigs) {
  registerKernel(kernelConfig);
}

// src/tfjs-backend-wasm/src/flags_wasm.ts
var ENV3 = env();
ENV3.registerFlag(
  "WASM_HAS_SIMD_SUPPORT",
  async () => WebAssembly.validate(new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    2,
    1,
    0,
    10,
    9,
    1,
    7,
    0,
    65,
    0,
    253,
    15,
    26,
    11
  ]))
);
ENV3.registerFlag("WASM_HAS_MULTITHREAD_SUPPORT", async () => {
  if (ENV3.get("IS_NODE")) {
    return false;
  }
  try {
    new MessageChannel().port1.postMessage(new SharedArrayBuffer(1));
    return WebAssembly.validate(new Uint8Array([
      0,
      97,
      115,
      109,
      1,
      0,
      0,
      0,
      1,
      4,
      1,
      96,
      0,
      0,
      3,
      2,
      1,
      0,
      5,
      4,
      1,
      3,
      1,
      1,
      10,
      11,
      1,
      9,
      0,
      65,
      0,
      254,
      16,
      2,
      0,
      26,
      11
    ]));
  } catch (e) {
    return false;
  }
});

// src/tfjs-backend-wasm/src/backend_wasm.ts
var wasmFactoryThreadedSimd_import = __toESM(require_tfjs_backend_wasm_threaded_simd());

// src/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-threaded-simd.worker.js
var Module = {};
var ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
if (ENVIRONMENT_IS_NODE) {
  nodeWorkerThreads = require_worker_threads();
  parentPort = nodeWorkerThreads.parentPort;
  parentPort.on("message", function(data) {
    onmessage({ data });
  });
  fs = require_fs();
  Object.assign(global, { self: global, require: __require, Module, location: { href: __filename }, Worker: nodeWorkerThreads.Worker, importScripts: function(f) {
    (0, eval)(fs.readFileSync(f, "utf8"));
  }, postMessage: function(msg) {
    parentPort.postMessage(msg);
  }, performance: global.performance || { now: function() {
    return Date.now();
  } } });
}
var nodeWorkerThreads;
var parentPort;
var fs;
function threadPrintErr() {
  var text = Array.prototype.slice.call(arguments).join(" ");
  if (ENVIRONMENT_IS_NODE) {
    fs.writeSync(2, text + "\n");
    return;
  }
  console.error(text);
}
function threadAlert() {
  var text = Array.prototype.slice.call(arguments).join(" ");
  postMessage({ cmd: "alert", text, threadId: Module["_pthread_self"]() });
}
var err = threadPrintErr;
self.alert = threadAlert;
Module["instantiateWasm"] = (info, receiveInstance) => {
  var instance = new WebAssembly.Instance(Module["wasmModule"], info);
  receiveInstance(instance);
  Module["wasmModule"] = null;
  return instance.exports;
};
self.onmessage = (e) => {
  try {
    if (e.data.cmd === "load") {
      Module["wasmModule"] = e.data.wasmModule;
      Module["wasmMemory"] = e.data.wasmMemory;
      Module["buffer"] = Module["wasmMemory"].buffer;
      Module["ENVIRONMENT_IS_PTHREAD"] = true;
      if (typeof e.data.urlOrBlob === "string") {
        importScripts(e.data.urlOrBlob);
      } else {
        var objectUrl = URL.createObjectURL(e.data.urlOrBlob);
        importScripts(objectUrl);
        URL.revokeObjectURL(objectUrl);
      }
      WasmBackendModuleThreadedSimd(Module).then(function(instance) {
        Module = instance;
      });
    } else if (e.data.cmd === "run") {
      Module["__performance_now_clock_drift"] = performance.now() - e.data.time;
      Module["__emscripten_thread_init"](e.data.threadInfoStruct, 0, 0, 1);
      Module["establishStackSpace"]();
      Module["PThread"].receiveObjectTransfer(e.data);
      Module["PThread"].threadInit();
      try {
        var result = Module["invokeEntryPoint"](e.data.start_routine, e.data.arg);
        if (Module["keepRuntimeAlive"]()) {
          Module["PThread"].setExitStatus(result);
        } else {
          Module["__emscripten_thread_exit"](result);
        }
      } catch (ex) {
        if (ex != "unwind") {
          if (ex instanceof Module["ExitStatus"]) {
            if (Module["keepRuntimeAlive"]()) {
            } else {
              Module["__emscripten_thread_exit"](ex.status);
            }
          } else {
            throw ex;
          }
        }
      }
    } else if (e.data.cmd === "cancel") {
      if (Module["_pthread_self"]()) {
        Module["__emscripten_thread_exit"](-1);
      }
    } else if (e.data.target === "setimmediate") {
    } else if (e.data.cmd === "processThreadQueue") {
      if (Module["_pthread_self"]()) {
        Module["_emscripten_current_thread_process_queued_calls"]();
      }
    } else if (e.data.cmd === "processProxyingQueue") {
      if (Module["_pthread_self"]()) {
        Module["_emscripten_proxy_execute_queue"](e.data.queue);
      }
    } else {
      err("worker.js received unknown command " + e.data.cmd);
      err(e.data);
    }
  } catch (ex) {
    err("worker.js onmessage() captured an uncaught exception: " + ex);
    if (ex && ex.stack)
      err(ex.stack);
    if (Module["__emscripten_thread_crashed"]) {
      Module["__emscripten_thread_crashed"]();
    }
    throw ex;
  }
};

// src/tfjs-backend-wasm/src/backend_wasm.ts
var wasmFactory_import = __toESM(require_tfjs_backend_wasm());
var wasmFactoryThreadedSimd = wasmFactoryThreadedSimd_import.default || wasmFactoryThreadedSimd_import;
var wasmFactory = wasmFactory_import.default || wasmFactory_import;
var BackendWasm = class extends KernelBackend {
  constructor(wasm2) {
    super();
    this.wasm = wasm2;
    this.dataIdNextNumber = 1;
    this.wasm.tfjs.initWithThreadsCount(threadsCount);
    actualThreadsCount = this.wasm.tfjs.getThreadsCount();
    this.dataIdMap = new DataStorage(this, engine());
  }
  write(values, shape, dtype) {
    const dataId = { id: this.dataIdNextNumber++ };
    this.move(dataId, values, shape, dtype, 1);
    return dataId;
  }
  numDataIds() {
    return this.dataIdMap.numDataIds();
  }
  async time(f) {
    const start = util_exports.now();
    f();
    const kernelMs = util_exports.now() - start;
    return { kernelMs };
  }
  move(dataId, values, shape, dtype, refCount) {
    const id = this.dataIdNextNumber++;
    if (dtype === "string") {
      const stringBytes = values;
      this.dataIdMap.set(
        dataId,
        { id, stringBytes, shape, dtype, memoryOffset: null, refCount }
      );
      return;
    }
    const size = util_exports.sizeFromShape(shape);
    const numBytes = size * util_exports.bytesPerElement(dtype);
    const memoryOffset = this.wasm._malloc(numBytes);
    this.dataIdMap.set(dataId, { id, memoryOffset, shape, dtype, refCount });
    this.wasm.tfjs.registerTensor(id, size, memoryOffset);
    if (values != null) {
      this.wasm.HEAPU8.set(
        new Uint8Array(
          values.buffer,
          values.byteOffset,
          numBytes
        ),
        memoryOffset
      );
    }
  }
  async read(dataId) {
    return this.readSync(dataId);
  }
  readSync(dataId, start, end) {
    const { memoryOffset, dtype, shape, stringBytes } = this.dataIdMap.get(dataId);
    if (dtype === "string") {
      if ((start == null || start === 0) && (end == null || end >= stringBytes.length)) {
        return stringBytes;
      }
      return stringBytes.slice(start, end);
    }
    start = start || 0;
    end = end || util_exports.sizeFromShape(shape);
    const bytesPerElement2 = util_exports.bytesPerElement(dtype);
    const bytes = this.wasm.HEAPU8.slice(
      memoryOffset + start * bytesPerElement2,
      memoryOffset + end * bytesPerElement2
    );
    return typedArrayFromBuffer(bytes.buffer, dtype);
  }
  disposeData(dataId, force = false) {
    if (this.dataIdMap.has(dataId)) {
      const data = this.dataIdMap.get(dataId);
      data.refCount--;
      if (!force && data.refCount > 0) {
        return false;
      }
      this.wasm._free(data.memoryOffset);
      this.wasm.tfjs.disposeData(data.id);
      this.dataIdMap.delete(dataId);
    }
    return true;
  }
  refCount(dataId) {
    if (this.dataIdMap.has(dataId)) {
      const tensorData = this.dataIdMap.get(dataId);
      return tensorData.refCount;
    }
    return 0;
  }
  incRef(dataId) {
    const data = this.dataIdMap.get(dataId);
    if (data != null) {
      data.refCount++;
    }
  }
  floatPrecision() {
    return 32;
  }
  getMemoryOffset(dataId) {
    return this.dataIdMap.get(dataId).memoryOffset;
  }
  dispose() {
    this.wasm.tfjs.dispose();
    if ("PThread" in this.wasm) {
      this.wasm.PThread.terminateAllThreads();
    }
    this.wasm = null;
  }
  memory() {
    return { unreliable: false };
  }
  makeOutput(shape, dtype, memoryOffset) {
    let dataId;
    if (memoryOffset == null) {
      dataId = this.write(null, shape, dtype);
    } else {
      const id = this.dataIdNextNumber++;
      dataId = { id };
      this.dataIdMap.set(dataId, { id, memoryOffset, shape, dtype, refCount: 1 });
      const size = util_exports.sizeFromShape(shape);
      this.wasm.tfjs.registerTensor(id, size, memoryOffset);
    }
    return { dataId, shape, dtype };
  }
  typedArrayFromHeap({ shape, dtype, dataId }) {
    const buffer2 = this.wasm.HEAPU8.buffer;
    const { memoryOffset } = this.dataIdMap.get(dataId);
    const size = util_exports.sizeFromShape(shape);
    switch (dtype) {
      case "float32":
        return new Float32Array(buffer2, memoryOffset, size);
      case "int32":
        return new Int32Array(buffer2, memoryOffset, size);
      case "bool":
        return new Uint8Array(buffer2, memoryOffset, size);
      default:
        throw new Error(`Unknown dtype ${dtype}`);
    }
  }
};
function createInstantiateWasmFunc(path) {
  return (imports, callback) => {
    util_exports.fetch(path, { credentials: "same-origin" }).then((response) => {
      if (!response["ok"]) {
        imports.env.a(`failed to load wasm binary file at '${path}'`);
      }
      response.arrayBuffer().then((binary) => {
        WebAssembly.instantiate(binary, imports).then((output) => {
          callback(output.instance, output.module);
        });
      });
    });
    return {};
  };
}
function getPathToWasmBinary(simdSupported, threadsSupported, wasmModuleFolder) {
  if (wasmPath != null) {
    return wasmPath;
  }
  let path = "tfjs-backend-wasm.wasm";
  if (simdSupported && threadsSupported) {
    path = "tfjs-backend-wasm-threaded-simd.wasm";
  } else if (simdSupported) {
    path = "tfjs-backend-wasm-simd.wasm";
  }
  if (wasmFileMap != null) {
    if (wasmFileMap[path] != null) {
      return wasmFileMap[path];
    }
  }
  return wasmModuleFolder + path;
}
async function init() {
  const [simdSupported, threadsSupported] = await Promise.all([
    env().getAsync("WASM_HAS_SIMD_SUPPORT"),
    env().getAsync("WASM_HAS_MULTITHREAD_SUPPORT")
  ]);
  return new Promise((resolve, reject) => {
    const factoryConfig = {};
    factoryConfig.locateFile = (path, prefix) => {
      if (path.endsWith(".worker.js")) {
        const response = (void 0).replace(/\n/g, "\\n");
        const blob = new Blob([response], { type: "application/javascript" });
        return URL.createObjectURL(blob);
      }
      if (path.endsWith(".wasm")) {
        return getPathToWasmBinary(
          simdSupported,
          threadsSupported,
          wasmPathPrefix != null ? wasmPathPrefix : prefix
        );
      }
      return prefix + path;
    };
    if (customFetch) {
      factoryConfig.instantiateWasm = createInstantiateWasmFunc(getPathToWasmBinary(
        simdSupported,
        threadsSupported,
        wasmPathPrefix != null ? wasmPathPrefix : ""
      ));
    }
    let initialized = false;
    factoryConfig.onAbort = () => {
      if (initialized) {
        return;
      }
      if (initAborted) {
        return;
      }
      initAborted = true;
      const rejectMsg = "Make sure the server can serve the `.wasm` file relative to the bundled js file. For more details see https://github.com/tensorflow/tfjs/blob/master/tfjs-backend-wasm/README.md#using-bundlers";
      reject({ message: rejectMsg });
    };
    let wasm2;
    if (threadsSupported && simdSupported && wasmPath == null) {
      factoryConfig.mainScriptUrlOrBlob = new Blob(
        [`var WasmBackendModuleThreadedSimd = ` + wasmFactoryThreadedSimd.toString()],
        { type: "text/javascript" }
      );
      wasm2 = wasmFactoryThreadedSimd(factoryConfig);
    } else {
      wasm2 = wasmFactory(factoryConfig);
    }
    wasm2.then((module) => {
      initialized = true;
      initAborted = false;
      const voidReturnType = null;
      module.tfjs = {
        init: module.cwrap("init", null, []),
        initWithThreadsCount: module.cwrap("init_with_threads_count", null, ["number"]),
        getThreadsCount: module.cwrap("get_threads_count", "number", []),
        registerTensor: module.cwrap(
          "register_tensor",
          null,
          [
            "number",
            "number",
            "number"
          ]
        ),
        disposeData: module.cwrap("dispose_data", voidReturnType, ["number"]),
        dispose: module.cwrap("dispose", voidReturnType, [])
      };
      resolve({ wasm: module });
    }).catch(reject);
  });
}
function typedArrayFromBuffer(buffer2, dtype) {
  switch (dtype) {
    case "float32":
      return new Float32Array(buffer2);
    case "int32":
      return new Int32Array(buffer2);
    case "bool":
      return new Uint8Array(buffer2);
    default:
      throw new Error(`Unknown dtype ${dtype}`);
  }
}
var wasmBinaryNames = [
  "tfjs-backend-wasm.wasm",
  "tfjs-backend-wasm-simd.wasm",
  "tfjs-backend-wasm-threaded-simd.wasm"
];
var wasmPath = null;
var wasmPathPrefix = null;
var wasmFileMap = {};
var initAborted = false;
var customFetch = false;
function setWasmPath(path, usePlatformFetch = false) {
  deprecationWarn(
    "setWasmPath has been deprecated in favor of setWasmPaths and will be removed in a future release."
  );
  if (initAborted) {
    throw new Error(
      "The WASM backend was already initialized. Make sure you call `setWasmPath()` before you call `tf.setBackend()` or `tf.ready()`"
    );
  }
  wasmPath = path;
  customFetch = usePlatformFetch;
}
function setWasmPaths(prefixOrFileMap, usePlatformFetch = false) {
  if (initAborted) {
    throw new Error(
      "The WASM backend was already initialized. Make sure you call `setWasmPaths()` before you call `tf.setBackend()` or `tf.ready()`"
    );
  }
  if (typeof prefixOrFileMap === "string") {
    wasmPathPrefix = prefixOrFileMap;
  } else {
    wasmFileMap = prefixOrFileMap;
    const missingPaths = wasmBinaryNames.filter((name) => wasmFileMap[name] == null);
    if (missingPaths.length > 0) {
      throw new Error(
        `There were no entries found for the following binaries: ${missingPaths.join(",")}. Please either call setWasmPaths with a map providing a path for each binary, or with a string indicating the directory where all the binaries can be found.`
      );
    }
  }
  customFetch = usePlatformFetch;
}
var threadsCount = -1;
var actualThreadsCount = -1;
function setThreadsCount(numThreads) {
  threadsCount = numThreads;
}
function getThreadsCount() {
  if (actualThreadsCount === -1) {
    throw new Error(`WASM backend not initialized.`);
  }
  return actualThreadsCount;
}

// src/tfjs-backend-wasm/src/version.ts
var version2 = "0.0.0";

// src/tfjs-backend-wasm/src/base.ts
var WASM_PRIORITY = 2;
registerBackend("wasm", async () => {
  const { wasm: wasm2 } = await init();
  return new BackendWasm(wasm2);
}, WASM_PRIORITY);
export {
  BackendWasm,
  getThreadsCount,
  setThreadsCount,
  setWasmPath,
  setWasmPaths,
  version2 as version_wasm
};
/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/** @license See the LICENSE file. */
//# sourceMappingURL=tfjs-backend-wasm.esm.js.map
