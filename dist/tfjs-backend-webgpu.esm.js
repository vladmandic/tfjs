var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// src/node_modules/long/src/long.js
var require_long = __commonJS({
  "src/node_modules/long/src/long.js"(exports, module) {
    module.exports = Long2;
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
    function Long2(low, high, unsigned) {
      this.low = low | 0;
      this.high = high | 0;
      this.unsigned = !!unsigned;
    }
    Long2.prototype.__isLong__;
    Object.defineProperty(Long2.prototype, "__isLong__", { value: true });
    function isLong(obj) {
      return (obj && obj["__isLong__"]) === true;
    }
    Long2.isLong = isLong;
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
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
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
    Long2.fromInt = fromInt;
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
    Long2.fromNumber = fromNumber;
    function fromBits(lowBits, highBits, unsigned) {
      return new Long2(lowBits, highBits, unsigned);
    }
    Long2.fromBits = fromBits;
    var pow_dbl = Math.pow;
    function fromString(str, unsigned, radix) {
      if (str.length === 0)
        throw Error("empty string");
      if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
      if (typeof unsigned === "number") {
        radix = unsigned, unsigned = false;
      } else {
        unsigned = !!unsigned;
      }
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
    Long2.fromString = fromString;
    function fromValue(val, unsigned) {
      if (typeof val === "number")
        return fromNumber(val, unsigned);
      if (typeof val === "string")
        return fromString(val, unsigned);
      return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
    }
    Long2.fromValue = fromValue;
    var TWO_PWR_16_DBL = 1 << 16;
    var TWO_PWR_24_DBL = 1 << 24;
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
    var ZERO = fromInt(0);
    Long2.ZERO = ZERO;
    var UZERO = fromInt(0, true);
    Long2.UZERO = UZERO;
    var ONE = fromInt(1);
    Long2.ONE = ONE;
    var UONE = fromInt(1, true);
    Long2.UONE = UONE;
    var NEG_ONE = fromInt(-1);
    Long2.NEG_ONE = NEG_ONE;
    var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
    Long2.MAX_VALUE = MAX_VALUE;
    var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
    Long2.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
    var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
    Long2.MIN_VALUE = MIN_VALUE;
    var LongPrototype = Long2.prototype;
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
    LongPrototype.add = function add4(addend) {
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
    LongPrototype.multiply = function multiply2(multiplier) {
      if (this.isZero())
        return ZERO;
      if (!isLong(multiplier))
        multiplier = fromValue(multiplier);
      if (wasm) {
        var low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
      }
      if (multiplier.isZero())
        return ZERO;
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
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
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
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
      }
      return this.sub(this.div(divisor).mul(divisor));
    };
    LongPrototype.mod = LongPrototype.modulo;
    LongPrototype.rem = LongPrototype.modulo;
    LongPrototype.not = function not() {
      return fromBits(~this.low, ~this.high, this.unsigned);
    };
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
      numBits &= 63;
      if (numBits === 0)
        return this;
      else {
        var high = this.high;
        if (numBits < 32) {
          var low = this.low;
          return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
        } else if (numBits === 32)
          return fromBits(high, 0, this.unsigned);
        else
          return fromBits(high >>> numBits - 32, 0, this.unsigned);
      }
    };
    LongPrototype.shru = LongPrototype.shiftRightUnsigned;
    LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
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
    Long2.fromBytes = function fromBytes(bytes, unsigned, le) {
      return le ? Long2.fromBytesLE(bytes, unsigned) : Long2.fromBytesBE(bytes, unsigned);
    };
    Long2.fromBytesLE = function fromBytesLE(bytes, unsigned) {
      return new Long2(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
    };
    Long2.fromBytesBE = function fromBytesBE(bytes, unsigned) {
      return new Long2(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
    };
  }
});

// (disabled):src/node_modules/node-fetch/browser.js
var require_browser = __commonJS({
  "(disabled):src/node_modules/node-fetch/browser.js"() {
  }
});

// (disabled):util
var require_util = __commonJS({
  "(disabled):util"() {
  }
});

// src/node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "src/node_modules/seedrandom/lib/alea.js"(exports, module) {
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
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// src/node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "src/node_modules/seedrandom/lib/xor128.js"(exports, module) {
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
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// src/node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "src/node_modules/seedrandom/lib/xorwow.js"(exports, module) {
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
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// src/node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "src/node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
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
        function init(me2, seed2) {
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
        init(me, seed);
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
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// src/node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "src/node_modules/seedrandom/lib/xor4096.js"(exports, module) {
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
        function init(me2, seed2) {
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
              i = t == 0 ? i + 1 : 0;
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
        init(me, seed);
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
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// src/node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "src/node_modules/seedrandom/lib/tychei.js"(exports, module) {
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
    })(exports, typeof module == "object" && module, typeof define == "function" && define);
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// src/node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "src/node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global2, pool2, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten2(options.entropy ? [seed, tostring(pool2)] : seed == null ? autoseed() : seed, 3), key);
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
        })(prng, shortseed, "global" in options ? options.global : this == math, options.state);
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
    })(typeof self !== "undefined" ? self : exports, [], Math);
  }
});

// src/node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "src/node_modules/seedrandom/index.js"(exports, module) {
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
  throw new Error(`'${kernelName}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`);
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
    throw new Error(`Array sizes must match to be shuffled together First array length was ${array.length}Second array length was ${array2.length}`);
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
  assert(arraysEqual(shapeA, shapeB), () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
}
function assertNonNull(a) {
  assert(a != null, () => `The input to the tensor constructor must be a non-null value.`);
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
        throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${implicitIdx} and dim ${i}`);
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
    throw Error(`Cannot infer the missing size in [${shape}] when there are 0 elements`);
  }
  if (size % shapeProd !== 0) {
    throw Error(`The implicit shape can't be a fractional number. Got ${size} / ${shapeProd}`);
  }
  const newShape = shape.slice();
  newShape[implicitIdx] = size / shapeProd;
  return newShape;
}
function parseAxisParam(axis, shape) {
  const rank = shape.length;
  axis = axis == null ? shape.map((s, i) => i) : [].concat(axis);
  assert(axis.every((ax) => ax >= -rank && ax < rank), () => `All values in axis param must be in range [-${rank}, ${rank}) but got axis ${axis}`);
  assert(axis.every((ax) => isInt(ax)), () => `All values in axis param must be integers but got axis ${axis}`);
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
        throw new Error(`Can't squeeze axis ${i} since its dim '${shape[i]}' is not 1`);
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
    assert(Number.isInteger(dimSize) && dimSize >= 0, () => `Tensor must have a shape comprised of positive integers but got shape [${shape}].`);
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
        console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${platformName}.`);
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
        console.warn(`Setting feature override from URL ${flagName}: ${flagValue}.`);
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
      throw new Error(`Flag ${flagName} cannot be synchronously evaluated. Please use getAsync() instead.`);
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
      throw new Error(`Cannot set flag ${flagName} as it has not been registered.`);
    }
    this.flags[flagName] = value;
    if (this.flagRegistry[flagName].setHook != null) {
      this.flagRegistry[flagName].setHook(value);
    }
  }
  evaluateFlag(flagName) {
    if (this.flagRegistry[flagName] == null) {
      throw new Error(`Cannot evaluate flag '${flagName}': no evaluation function found.`);
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
  throw new Error(`Could not parse value flag value ${value} for flag ${flagName}.`);
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
function getGlobal(key, init) {
  const globalMap = getGlobalMap();
  if (globalMap.has(key)) {
    return globalMap.get(key);
  } else {
    const singleton = init();
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
    warn(`The kernel '${kernelName}' for backend '${backendName}' is already registered`);
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

// src/tfjs-core/src/hash_util.ts
var LongExports = __toESM(require_long());
var Long = LongExports.default || LongExports;
function hexToLong(hex) {
  return Long.fromString(hex, true, 16);
}
var k0 = hexToLong("c3a5c85c97cb3127");
var k1 = hexToLong("b492b66fbe98f273");
var k2 = hexToLong("9ae16a3b2f90404f");
function shiftMix(val) {
  return val.xor(val.shru(47));
}
function fetch2(s, offset, numBytes) {
  const bytes = s.slice(offset, offset + numBytes);
  return Long.fromBytes(Array.from(bytes), true, true);
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
  return weakHashLen32WithSeeds(fetch64(s, offset), fetch64(s, offset + 8), fetch64(s, offset + 16), fetch64(s, offset + 24), a, b);
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
  return hashLen16(rotate64(a.add(b), 43).add(rotate64(c, 30)).add(d), a.add(rotate64(b.add(k2), 18)).add(c), mul2);
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
  return hashLen16(rotate64(e.add(f), 43).add(rotate64(g, 30)).add(h), e.add(rotate64(f.add(a), 18)).add(g), mul2);
}
function fingerPrint64(s, len = s.length) {
  const seed = Long.fromNumber(81, true);
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
  let v = [Long.UZERO, Long.UZERO];
  let w = [Long.UZERO, Long.UZERO];
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
    w = weakHashLen32WithSeedsStr(s, offset + 32, z.add(w[1]), y.add(fetch64(s, offset + 16)));
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
  w = weakHashLen32WithSeedsStr(s, offset + 32, z.add(w[1]), y.add(fetch64(s, offset + 16)));
  [z, x] = [x, z];
  return hashLen16(hashLen16(v[0], w[0], mul2).add(shiftMix(y).mul(k0)).add(z), hashLen16(v[1], w[1], mul2).add(x), mul2);
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
      extraInfo: timer.then((timing) => timing.getExtraProfileInfo != null ? timing.getExtraProfileInfo() : "")
    };
    return kernelProfile;
  }
  logKernelProfile(kernelProfile) {
    const { kernelName, outputs, timeMs, inputs, extraInfo } = kernelProfile;
    outputs.forEach((result) => {
      Promise.all([result.data(), timeMs, extraInfo]).then((valueContainer) => {
        this.logger.logKernelProfile(kernelName, result, valueContainer[0], valueContainer[1], inputs, valueContainer[2]);
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
    console.log(`%c${paddedName}	%c${time}	%c${rank}D ${shape}	%c${size}	%c${inputShapesDescription}	%c${extraInfo}`, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue");
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
function backpropagateGradients(tensorAccumulatedGradientMap, filteredTape, tidy2, add4) {
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
      throw new Error(`Cannot compute gradient: gradient function not found for ${node.kernelName}.`);
    }
    const inputGradients = node.gradient(dys);
    for (const inputName in node.inputs) {
      if (!(inputName in inputGradients)) {
        throw new Error(`Cannot backprop through input ${inputName}. Available gradients found: ${Object.keys(inputGradients)}.`);
      }
      const dx = tidy2(() => inputGradients[inputName]());
      if (dx.dtype !== "float32") {
        throw new Error(`Error in gradient for op ${node.kernelName}. The gradient of input ${inputName} must have 'float32' dtype, but has '${dx.dtype}'`);
      }
      const x = node.inputs[inputName];
      if (!arraysEqual(dx.shape, x.shape)) {
        throw new Error(`Error in gradient for op ${node.kernelName}. The gradient of input '${inputName}' has shape '${dx.shape}', which does not match the shape of the input '${x.shape}'`);
      }
      if (tensorAccumulatedGradientMap[x.id] == null) {
        tensorAccumulatedGradientMap[x.id] = dx;
      } else {
        const curGradient = tensorAccumulatedGradientMap[x.id];
        tensorAccumulatedGradientMap[x.id] = add4(curGradient, dx);
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
        padPerCol[j] = Math.max(padPerCol[j], valToString(valuesOrTuples[offset + j], 0, dtype).length);
      }
    }
  }
  return padPerCol;
}
function valToString(val, pad2, dtype) {
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
  return rightPad(valStr, pad2);
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
      let firstVals = Array.from(vals.slice(0, firstValsSize));
      let lastVals = Array.from(vals.slice((size - FORMAT_NUM_FIRST_LAST_VALS) * storagePerElement, size * storagePerElement));
      if (dtype === "complex64") {
        firstVals = createComplexTuples(firstVals);
        lastVals = createComplexTuples(lastVals);
      }
      return [
        "[" + firstVals.map((x, i) => valToString(x, padPerCol[i], dtype)).join(", ") + ", ..., " + lastVals.map((x, i) => valToString(x, padPerCol[size - FORMAT_NUM_FIRST_LAST_VALS + i], dtype)).join(", ") + "]"
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
      lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, false));
    }
    lines.push("...");
    for (let i = size - FORMAT_NUM_FIRST_LAST_VALS; i < size; i++) {
      const start = i * stride;
      const end = start + stride;
      lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, i === size - 1));
    }
  } else {
    for (let i = 0; i < size; i++) {
      const start = i * stride;
      const end = start + stride;
      lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, i === size - 1));
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
      assert(n === this.size, () => `Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`);
    }
    if (dtype === "complex64") {
      throw new Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);
    }
    this.values = values || getArrayFromDType(dtype, this.size);
    this.strides = computeStrides(shape);
  }
  set(value, ...locs) {
    if (locs.length === 0) {
      locs = [0];
    }
    assert(locs.length === this.rank, () => `The number of provided coordinates (${locs.length}) must match the rank (${this.rank})`);
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
    return toNestedArray(this.shape, this.dataSync(), this.dtype === "complex64");
  }
  async data() {
    this.throwIfDisposed();
    const data = trackerFn().read(this.dataId);
    if (this.dtype === "string") {
      const bytes = await data;
      try {
        return bytes.map((b) => decodeString(b));
      } catch {
        throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
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
        throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
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
    super(initialValue.shape, initialValue.dtype, initialValue.dataId, tensorId);
    this.trainable = trainable;
    this.name = name;
  }
  assign(newValue) {
    if (newValue.dtype !== this.dtype) {
      throw new Error(`dtype of the new value (${newValue.dtype}) and previous value (${this.dtype}) must match`);
    }
    if (!arraysEqual(newValue.shape, this.shape)) {
      throw new Error(`shape of the new value (${newValue.shape}) and previous value (${this.shape}) must match`);
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
function sumOutType(type) {
  return upcastType(type, "int32");
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
  assert(a.dtype === b.dtype, () => `The dtypes of the first(${a.dtype}) and second(${b.dtype}) input must match`);
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
    throw new Error(`Could not initialize any backends, all backend initializations failed.`);
  }
  get backend() {
    if (this.pendingBackendInit != null) {
      throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);
    }
    if (this.backendInstance == null) {
      const { name, asyncInit } = this.initializeBackendsAndReturnBest();
      if (asyncInit) {
        throw new Error(`The highest priority backend '${name}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);
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
      warn(`${backendName} backend was already registered. Reusing existing backend factory.`);
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
      throw new Error(`Cannot initialize backend ${backendName}, no registration found.`);
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
        }).catch((err) => {
          if (promiseId < this.pendingBackendInitId) {
            return false;
          }
          this.pendingBackendInit = null;
          warn(`Initialization of backend ${backendName} failed`);
          warn(err.stack || err.message);
          return false;
        });
        this.pendingBackendInit = success;
        return { success, asyncInit: true };
      } else {
        this.registry[backendName] = backend;
        return { success: true, asyncInit: false };
      }
    } catch (err) {
      warn(`Initialization of backend ${backendName} failed`);
      warn(err.stack || err.message);
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
    throw new Error(`Could not initialize any backends, all backend initializations failed.`);
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
        throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
      }
      if (typeof fn !== "function") {
        throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
      }
      name = nameOrFn;
    }
    let result;
    return this.scopedRun(() => this.startScope(name), () => this.endScope(result), () => {
      result = fn();
      if (result instanceof Promise) {
        console.error("Cannot return a Promise inside of tidy.");
      }
      return result;
    });
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
        return ENGINE.runKernel(Cast, gradInputs, attrs);
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
      throw new Error(`Backend '${this.backendName}' has an internal memory leak (${dataIdsLeaked} data ids) after running '${kernelName}'`);
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
    let kernelFunc;
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
      assert(kernel != null, () => `Cannot find registered kernel '${kernelName}' for backend '${this.backendName}'`);
      kernelFunc = () => {
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
          const { dataId, shape, dtype } = outInfo;
          return this.makeTensorFromDataId(dataId, shape, dtype);
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
      kernelFunc = () => {
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
    this.scopedRun(() => this.state.kernelDepth++, () => this.state.kernelDepth--, () => {
      if (!this.ENV.getBool("DEBUG") && !this.state.profiling) {
        outputs = kernelFunc();
      } else {
        kernelProfile = this.profiler.profileKernel(kernelOrScopeName, inputs, () => kernelFunc());
        if (this.ENV.getBool("DEBUG")) {
          this.profiler.logKernelProfile(kernelProfile);
        }
        outputs = kernelProfile.outputs;
      }
    });
    if (isTapeOn) {
      this.addTapeNode(kernelOrScopeName, inputs, outputs, backwardsFunc, saved, attrs);
    }
    if (this.state.profiling) {
      this.state.activeProfile.kernels.push({
        name: kernelOrScopeName,
        bytesAdded: this.state.numBytes - startingBytecount,
        totalBytesSnapshot: this.state.numBytes,
        tensorsAdded: this.state.numTensors - startingNumTensors,
        totalTensorsSnapshot: this.state.numTensors,
        inputShapes: Object.keys(inputs).map((key) => inputs[key] != null ? inputs[key].shape : null),
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
        assert(Array.isArray(inputs), () => "saveAllInputs is true, expected inputs to be an array.");
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
      info.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)");
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
    this.state.activeProfile.peakBytes = Math.max(...this.state.activeProfile.kernels.map((d) => d.totalBytesSnapshot));
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
    assert(xs.length > 0, () => "gradients() received an empty list of xs.");
    if (dy != null && dy.dtype !== "float32") {
      throw new Error(`dy must have 'float32' dtype, but has '${dy.dtype}'`);
    }
    const y = this.scopedRun(() => this.startTape(), () => this.endTape(), () => this.tidy("forward", f));
    assert(y instanceof Tensor, () => "The result y returned by f() must be a tensor.");
    const filteredTape = getFilteredNodesXToY(this.state.activeTape, xs, y);
    if (!allowNoGradients && filteredTape.length === 0 && xs.length > 0) {
      throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
    }
    return this.tidy("backward", () => {
      const accumulatedGradientMap = {};
      accumulatedGradientMap[y.id] = dy == null ? ones(y.shape) : dy;
      backpropagateGradients(accumulatedGradientMap, filteredTape, (f2) => this.tidy(f2), add);
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
    assert(isFunction(f), () => "The f passed in customGrad(f) must be a function.");
    return (...inputs) => {
      assert(inputs.every((t) => t instanceof Tensor), () => "The args passed in customGrad(f)(x1, x2,...) must all be tensors");
      let res;
      const inputMap = {};
      inputs.forEach((input, i) => {
        inputMap[i] = input;
      });
      const forwardFunc = (_, save) => {
        res = f(...[...inputs, save]);
        assert(res.value instanceof Tensor, () => "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor");
        assert(isFunction(res.gradFunc), () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.");
        return res.value;
      };
      const backwardsFunc = (dy, saved) => {
        const gradRes = res.gradFunc(dy, saved);
        const grads2 = Array.isArray(gradRes) ? gradRes : [gradRes];
        assert(grads2.length === inputs.length, () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).");
        assert(grads2.every((t) => t instanceof Tensor), () => "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");
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
function add(a, b) {
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
    console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");
  }
});
ENV2.registerFlag("IS_BROWSER", () => isBrowser());
ENV2.registerFlag("IS_NODE", () => typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined");
ENV2.registerFlag("IS_CHROME", () => typeof navigator !== "undefined" && navigator != null && navigator.userAgent != null && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor));
ENV2.registerFlag("PROD", () => false);
ENV2.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", () => ENV2.getBool("DEBUG"));
ENV2.registerFlag("DEPRECATION_WARNINGS_ENABLED", () => true);
ENV2.registerFlag("IS_TEST", () => false);
ENV2.registerFlag("CHECK_COMPUTATION_FOR_ERRORS", () => true);
ENV2.registerFlag("WRAP_TO_IMAGEBITMAP", () => false);
ENV2.registerFlag("ENGINE_COMPILE_ONLY", () => false);

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
    assert(shape.length === 0, () => `Element arr[${indices.join("][")}] is a primitive, but should be an array/TypedArray of ${shape[0]} elements`);
    return;
  }
  assert(shape.length > 0, () => `Element arr[${indices.join("][")}] should be a primitive, but is an array of ${val.length} elements`);
  assert(val.length === shape[0], () => `Element arr[${indices.join("][")}] should have ${shape[0]} elements, but has ${val.length} elements`);
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
    throw new Error(`Argument '${argName}' passed to '${functionName}' must be ${expectedDtype} tensor, but got ${actualDType} tensor`);
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
    throw new Error(`Argument '${argName}' passed to '${functionName}' must be a Tensor or TensorLike, but got '${type}'`);
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
    throw new Error(`Argument ${argName} passed to ${functionName} must be a \`Tensor[]\` or \`TensorLike[]\``);
  }
  const tensors = arg;
  return tensors.map((t, i) => convertToTensor(t, `${argName}[${i}]`, functionName, parseAsDtype));
}

// src/tfjs-core/src/ops/operation.ts
var OP_SCOPE_SUFFIX = "__op";
function op(f) {
  const keys = Object.keys(f);
  if (keys.length !== 1) {
    throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${keys.length} keys.`);
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
function complex_(real4, imag3) {
  const $real = convertToTensor(real4, "real", "complex");
  const $imag = convertToTensor(imag3, "imag", "complex");
  assertShapesMatch($real.shape, $imag.shape, `real and imag shapes, ${$real.shape} and ${$imag.shape}, must match in call to tf.complex().`);
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
    throw new Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);
  }
  if (!isTypedArray(values) && !Array.isArray(values) && typeof values !== "number" && typeof values !== "boolean" && typeof values !== "string") {
    throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
  }
  if (shape != null) {
    assertNonNegativeIntegerDimensions(shape);
    const providedSize = sizeFromShape(shape);
    const inferredSize = sizeFromShape(inferredShape);
    assert(providedSize === inferredSize, () => `Based on the provided shape, [${shape}], the tensor should have ${providedSize} values but has ${inferredSize}`);
    for (let i = 0; i < inferredShape.length; ++i) {
      const inferred = inferredShape[i];
      const flatDimsDontMatch = i === inferredShape.length - 1 ? inferred !== sizeFromShape(shape.slice(i)) : true;
      assert(inferredShape[i] === shape[i] || !flatDimsDontMatch, () => `Error creating a new Tensor. Inferred shape (${inferredShape}) does not match the provided shape (${shape}). `);
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
    throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
  }
  const theWindow = typeof window === "undefined" ? self : window;
  const factory = theWindow.indexedDB || theWindow.mozIndexedDB || theWindow.webkitIndexedDB || theWindow.msIndexedDB || theWindow.shimIndexedDB;
  if (factory == null) {
    throw new Error("The current browser does not appear to support IndexedDB.");
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
      throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
    }
    this.modelPath = modelPath;
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
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
              return reject(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));
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
    return new Promise((resolve, reject) => {
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
    });
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
            return reject(new Error(`Cannot find model with path '${path}' in IndexedDB.`));
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
      throw new Error("The current environment does not support local storage.");
    }
    this.LS = window.localStorage;
    if (modelPath == null || !modelPath) {
      throw new Error("For local storage, modelPath must not be null, undefined or empty.");
    }
    this.modelPath = modelPath;
    this.keys = getModelKeys(this.modelPath);
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
    } else {
      const topology = JSON.stringify(modelArtifacts.modelTopology);
      const weightSpecs = JSON.stringify(modelArtifacts.weightSpecs);
      const modelArtifactsInfo = getModelArtifactsInfoForJSON(modelArtifacts);
      try {
        this.LS.setItem(this.keys.info, JSON.stringify(modelArtifactsInfo));
        this.LS.setItem(this.keys.topology, topology);
        this.LS.setItem(this.keys.weightSpecs, weightSpecs);
        this.LS.setItem(this.keys.weightData, arrayBufferToBase64String(modelArtifacts.weightData));
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
      } catch (err) {
        removeItems(this.keys);
        throw new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${modelArtifactsInfo.modelTopologyBytes}, weightSpecsBytes=${modelArtifactsInfo.weightSpecsBytes}, weightDataBytes=${modelArtifactsInfo.weightDataBytes}.`);
      }
    }
  }
  async load() {
    const info = JSON.parse(this.LS.getItem(this.keys.info));
    if (info == null) {
      throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);
    }
    if (info.modelTopologyType !== "JSON") {
      throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
    }
    const out = {};
    const topology = JSON.parse(this.LS.getItem(this.keys.topology));
    if (topology == null) {
      throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);
    }
    out.modelTopology = topology;
    const weightSpecs = JSON.parse(this.LS.getItem(this.keys.weightSpecs));
    if (weightSpecs == null) {
      throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);
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
      throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);
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
      return browserLocalStorage(url.slice(BrowserLocalStorage.URL_SCHEME.length));
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
    assert(env().getBool("IS_BROWSER"), () => "Current environment is not a web browser");
    assert(typeof window === "undefined" || typeof window.localStorage !== "undefined", () => "Current browser does not appear to support localStorage");
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
    assert(registry.managers[scheme] == null, () => `A model store manager is already registered for scheme '${scheme}'.`);
    registry.managers[scheme] = manager;
  }
  static getManager(scheme) {
    const manager = this.getInstance().managers[scheme];
    if (manager == null) {
      throw new Error(`Cannot find model manager for scheme '${scheme}'`);
    }
    return manager;
  }
  static getSchemes() {
    return Object.keys(this.getInstance().managers);
  }
};

// src/tfjs-core/src/platforms/platform_browser.ts
var PlatformBrowser = class {
  fetch(path, init) {
    return fetch(path, init);
  }
  now() {
    return performance.now();
  }
  encode(text, encoding) {
    if (encoding !== "utf-8" && encoding !== "utf8") {
      throw new Error(`Browser's encoder only supports utf-8, but got ${encoding}`);
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
    ModelStoreManagerRegistry.registerManager(BrowserLocalStorage.URL_SCHEME, new BrowserLocalStorageManager());
  } catch (err) {
  }
  try {
    ModelStoreManagerRegistry.registerManager(BrowserIndexedDB.URL_SCHEME, new BrowserIndexedDBManager());
  } catch (err) {
  }
}

// src/tfjs-core/src/platforms/platform_node.ts
var getNodeFetch = {
  importFetch: () => require_browser()
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
      throw new Error(`Node built-in encoder only supports utf-8, but got ${encoding}`);
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
  return ENGINE.runKernel(Cast, inputs, attrs);
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
      throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
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
      throw new Error("Browser downloads are not supported in this environment since `document` is not present");
    }
    const weightsURL = window.URL.createObjectURL(new Blob([modelArtifacts.weightData], { type: "application/octet-stream" }));
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
    } else {
      const weightsManifest = [{
        paths: ["./" + this.weightDataFileName],
        weights: modelArtifacts.weightSpecs
      }];
      const modelJSON = getModelJSONForModelArtifacts(modelArtifacts, weightsManifest);
      const modelJsonURL = window.URL.createObjectURL(new Blob([JSON.stringify(modelJSON)], { type: "application/json" }));
      const jsonAnchor = this.modelJsonAnchor == null ? document.createElement("a") : this.modelJsonAnchor;
      jsonAnchor.download = this.modelJsonFileName;
      jsonAnchor.href = modelJsonURL;
      await defer(() => jsonAnchor.dispatchEvent(new MouseEvent("click")));
      if (modelArtifacts.weightData != null) {
        const weightDataAnchor = this.weightDataAnchor == null ? document.createElement("a") : this.weightDataAnchor;
        weightDataAnchor.download = this.weightDataFileName;
        weightDataAnchor.href = weightsURL;
        await defer(() => weightDataAnchor.dispatchEvent(new MouseEvent("click")));
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
    assert(promises2 != null && Array.isArray(promises2) && promises2.length > 0, () => "promises must be a none empty array");
  }
  function checkFraction(startFraction2, endFraction2) {
    assert(startFraction2 >= 0 && startFraction2 <= 1, () => `Progress fraction must be in range [0, 1], but got startFraction ${startFraction2}`);
    assert(endFraction2 >= 0 && endFraction2 <= 1, () => `Progress fraction must be in range [0, 1], but got endFraction ${endFraction2}`);
    assert(endFraction2 >= startFraction2, () => `startFraction must be no more than endFraction, but got startFraction ${startFraction2} and endFraction ${endFraction2}`);
  }
  return Promise.all(promises.map(registerMonitor));
}

// src/tfjs-core/src/io/weights_loader.ts
async function loadWeightsAsArrayBuffer(fetchURLs, loadOptions) {
  if (loadOptions == null) {
    loadOptions = {};
  }
  const fetchFunc = loadOptions.fetchFunc == null ? env().platform.fetch : loadOptions.fetchFunc;
  const requests = fetchURLs.map((fetchURL) => fetchFunc(fetchURL, loadOptions.requestInit, { isBinary: true }));
  const fetchStartFraction = 0;
  const fetchEndFraction = 0.5;
  const responses = loadOptions.onProgress == null ? await Promise.all(requests) : await monitorPromisesProgress(requests, loadOptions.onProgress, fetchStartFraction, fetchEndFraction);
  const bufferPromises = responses.map((response) => response.arrayBuffer());
  const bufferStartFraction = 0.5;
  const bufferEndFraction = 1;
  const buffers = loadOptions.onProgress == null ? await Promise.all(bufferPromises) : await monitorPromisesProgress(bufferPromises, loadOptions.onProgress, bufferStartFraction, bufferEndFraction);
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
      assert(typeof loadOptions.fetchFunc === "function", () => "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)");
      this.fetch = loadOptions.fetchFunc;
    } else {
      this.fetch = env().platform.fetch;
    }
    assert(path != null && path.length > 0, () => "URL path for http must not be null, undefined or empty.");
    if (Array.isArray(path)) {
      assert(path.length === 2, () => `URL paths for http must have a length of 2, (actual length is ${path.length}).`);
    }
    this.path = path;
    if (loadOptions.requestInit != null && loadOptions.requestInit.body != null) {
      throw new Error("requestInit is expected to have no pre-existing body, but has one.");
    }
    this.requestInit = loadOptions.requestInit || {};
  }
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
    }
    const init = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit);
    init.body = new FormData();
    const weightsManifest = [{
      paths: ["./model.weights.bin"],
      weights: modelArtifacts.weightSpecs
    }];
    const modelTopologyAndWeightManifest = getModelJSONForModelArtifacts(modelArtifacts, weightsManifest);
    init.body.append("model.json", new Blob([JSON.stringify(modelTopologyAndWeightManifest)], { type: JSON_TYPE }), "model.json");
    if (modelArtifacts.weightData != null) {
      init.body.append("model.weights.bin", new Blob([modelArtifacts.weightData], { type: OCTET_STREAM_MIME_TYPE }), "model.weights.bin");
    }
    const response = await this.fetch(this.path, init);
    if (response.ok) {
      return {
        modelArtifactsInfo: getModelArtifactsInfoForJSON(modelArtifacts),
        responses: [response]
      };
    } else {
      throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${response.status}.`);
    }
  }
  async load() {
    const modelConfigRequest = await this.fetch(this.path, this.requestInit);
    if (!modelConfigRequest.ok) {
      throw new Error(`Request to ${this.path} failed with status code ${modelConfigRequest.status}. Please verify this URL points to the model JSON of the model to load.`);
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
      throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);
    }
    return getModelArtifactsForJSON(modelJSON, (weightsManifest2) => this.loadWeights(weightsManifest2));
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
  return ENGINE.runKernel(BatchMatMul, inputs, attrs);
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
  return ENGINE.runKernel(OneHot, inputs, attrs);
}
var oneHot = op({ oneHot_ });

// src/tfjs-core/src/ops/transpose.ts
function transpose_(x, perm) {
  const $x = convertToTensor(x, "x", "transpose");
  if (perm == null) {
    perm = $x.shape.map((s, i) => i).reverse();
  }
  assert($x.rank === perm.length, () => `Error in transpose: rank of input ${$x.rank} must match length of perm ${perm}.`);
  perm.forEach((axis) => {
    assert(axis >= 0 && axis < $x.rank, () => `All entries in 'perm' must be between 0 and ${$x.rank - 1} but got ${perm}`);
  });
  if ($x.rank <= 1) {
    return $x.clone();
  }
  const inputs = { x: $x };
  const attrs = { perm };
  return ENGINE.runKernel(Transpose, inputs, attrs);
}
var transpose = op({ transpose_ });

// src/tfjs-core/src/ops/confusion_matrix.ts
function confusionMatrix_(labels, predictions, numClasses) {
  const $labels = convertToTensor(labels, "labels", "confusionMatrix");
  const $predictions = convertToTensor(predictions, "predictions", "confusionMatrix");
  assert(numClasses == null || numClasses > 0 && Number.isInteger(numClasses), () => `If provided, numClasses must be a positive integer, but got ${numClasses}`);
  assert($labels.rank === 1, () => `Expected the rank of labels to be 1, but got ${$labels.rank}`);
  assert($predictions.rank === 1, () => `Expected the rank of predictions to be 1, but got ${$predictions.rank}`);
  assert($labels.shape[0] === $predictions.shape[0], () => `Mismatch in the number of examples: ${$labels.shape[0]} vs. ${$predictions.shape[0]}. Labels and predictions should have the same number of elements.`);
  assert(numClasses > 0 && Number.isInteger(numClasses), () => `numClasses is required to be a positive integer, but got ${numClasses}`);
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
    throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
  }
  return makeTensor(values, shape, inferredShape, dtype);
}

// src/tfjs-core/src/ops/browser.ts
var fromPixels2DContext;
function fromPixels_(pixels, numChannels = 3) {
  if (numChannels > 4) {
    throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
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
    throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${pixels.constructor.name}`);
  }
  if (isVideo) {
    const HAVE_CURRENT_DATA_READY_STATE = 2;
    if (isVideo && pixels.readyState < HAVE_CURRENT_DATA_READY_STATE) {
      throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");
    }
  }
  const kernel = getKernel(FromPixels, ENGINE.backendName);
  if (kernel != null) {
    const inputs = { pixels };
    const attrs = { numChannels };
    return ENGINE.runKernel(FromPixels, inputs, attrs);
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
          throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");
        }
      } else {
        fromPixels2DContext = document.createElement("canvas").getContext("2d");
      }
    }
    fromPixels2DContext.canvas.width = width;
    fromPixels2DContext.canvas.height = height;
    fromPixels2DContext.drawImage(pixels, 0, 0, width, height);
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
function prepareAndValidate(tensor2, indices) {
  const tensorRank = tensor2.shape.length;
  const indicesRank = indices.shape.length;
  if (tensorRank < 1) {
    throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${tensorRank}.`);
  }
  if (indicesRank < 1) {
    throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${indicesRank}.`);
  }
  if (indices.dtype !== "int32") {
    throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${indices.dtype}.`);
  }
  if (indices.shape[indicesRank - 1] > tensorRank) {
    throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${indices.shape[indicesRank - 1]} vs. ${tensorRank}`);
  }
  if (sizeFromShape(tensor2.shape) === 0) {
    throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${tensor2.shape}.`);
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
function validateUpdateShape(shape, indices, updates) {
  const sliceDim = indices.rank > 1 ? indices.shape[indices.rank - 1] : 1;
  const batchDim = indices.rank > 1 ? indices.rank - 1 : 1;
  const shapeError = `Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${updates.shape}, indices.shape: ${indices.shape}, shape: ${shape}, sliceDim: ${sliceDim}, and batchDim: ${batchDim}.`;
  if (updates.rank < batchDim) {
    throw new Error(shapeError + ` update.rank < ${batchDim}. `);
  }
  if (shape.length < sliceDim + (updates.rank - batchDim)) {
    throw new Error(shapeError + ` Output shape length < ${sliceDim + (updates.rank - batchDim)}`);
  }
  if (updates.rank !== batchDim + shape.length - sliceDim) {
    throw new Error(shapeError + ` update.rank != ${batchDim + shape.length - sliceDim}`);
  }
  for (let d = 0; d < batchDim; ++d) {
    if (updates.shape[d] !== indices.shape[d]) {
      throw new Error(shapeError + ` updates.shape[${d}] (${updates.shape[d]}) != indices.shape[${d}] (${indices.shape[d]}).`);
    }
  }
  for (let d = 0; d < updates.rank - batchDim; ++d) {
    if (updates.shape[d + batchDim] !== shape[d + sliceDim]) {
      throw new Error(shapeError + ` updates.shape[${d + batchDim}] (${updates.shape[d + batchDim]}) != shape[${d + batchDim}] (${shape[d + batchDim]})`);
    }
  }
}
function validateInput(updates, indices, shape) {
  if (indices.rank < 1) {
    throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${indices.rank}.`);
  }
  if (updates.rank < 1) {
    throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${updates.rank}.`);
  }
  if (indices.dtype !== "int32") {
    throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${indices.dtype}`);
  }
  if (shape.length < 1) {
    throw new Error(`Output rank must be greater or equal to 1, but got shape: ${shape}`);
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
  assert(inputRank === begin.length, () => `Error in slice${inputRank}D: Length of begin ${begin} must match the rank of the array (${inputRank}).`);
  assert(inputRank === size.length, () => `Error in slice${inputRank}D: Length of size ${size} must match the rank of the array (${inputRank}).`);
  for (let i = 0; i < inputRank; ++i) {
    assert(begin[i] + size[i] <= input.shape[i], () => `Error in slice${inputRank}D: begin[${i}] + size[${i}] (${begin[i] + size[i]}) would overflow input.shape[${i}] (${input.shape[i]})`);
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
      newStrides.splice(ellipsisInsertionIndex, 0, 1);
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
    normalizedBegin = startIndicesWithElidedDims(beginMask, fullIndex, numElidedAxes, begin, inputShape);
    normalizedEnd = stopIndicesWithElidedDims(endMask, fullIndex, numElidedAxes, end, inputShape);
    normalizedStrides = stridesWithElidedDims(strides, fullIndex, numElidedAxes, inputShape);
  } else {
    for (let axis = 0; axis < inputRank; axis++) {
      normalizedBegin[axis] = startForAxis(beginMask, begin, strides, inputShape, axis, ellipsisMask);
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
    assert(d !== -1, () => "slice() does not support negative begin indexing.");
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
      assert(d === -1, () => `Negative size values should be exactly -1 but got ${d} for the slice() size at index ${i}.`);
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
        denseSpec.begin[i] = canonical(denseSpec.begin[i], 0, denseSpec.strides[i], dimI, masks, validRange);
        denseSpec.end[i] = canonical(denseSpec.end[i], 1, denseSpec.strides[i], dimI, masks, validRange);
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
  const finalShapeSparse = finalShape.filter((dim, i) => denseSpec.finalShapeGatherIndices[i] !== NEW_AXIS);
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
      const nextIndex = Math.min(dense.dims - (sparse.dims - i) + 1 + sparse.numAddAxisAfterEllipsis, dense.dims);
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
        throw Error(`Index out of range using input dim ${fullIndex}; input has only ${dense.dims} dims, ${dense.begin.length}.`);
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
  assert(cls.className != null, () => `Class being registered does not have the static className property defined.`);
  assert(typeof cls.className === "string", () => `className is required to be a string, but got type ` + typeof cls.className);
  assert(cls.className.length > 0, () => `Class being registered has an empty-string as its className, which is disallowed.`);
  SerializationMap.register(cls);
}

// src/tfjs-core/src/globals.ts
function deprecationWarn(msg) {
  if (env().getBool("DEPRECATION_WARNINGS_ENABLED")) {
    console.warn(msg + " You can disable deprecation warnings with tf.disableDeprecationWarnings().");
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

// src/tfjs-core/src/ops/add.ts
function add_(a, b) {
  let $a = convertToTensor(a, "a", "add");
  let $b = convertToTensor(b, "b", "add");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Add, inputs);
}
var add2 = op({ add_ });

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
  assert(Array.isArray(tensors), () => "The argument passed to tf.addN() must be a list of tensors");
  assert(tensors.length >= 1, () => `Must pass at least one tensor to tf.addN(), but got ${tensors.length}`);
  const $tensors = tensors.map((t, i) => convertToTensor(t, `tensors${i}`, "addN"));
  const firstTensor = $tensors[0];
  $tensors.forEach((t) => {
    if (t.dtype !== firstTensor.dtype) {
      throw new Error("All tensors passed to tf.addN() must have the same dtype");
    }
  });
  $tensors.forEach((t) => {
    if (!arraysEqual(t.shape, firstTensor.shape)) {
      throw new Error("All tensors passed to tf.addN() must have the same shape");
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
  return ENGINE.runKernel(All, inputs, attrs);
}
var all = op({ all_ });

// src/tfjs-core/src/ops/any.ts
function any_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "any", "bool");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(Any, inputs, attrs);
}
var any = op({ any_ });

// src/tfjs-core/src/ops/arg_max.ts
function argMax_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "argMax");
  const inputs = { x: $x };
  const attrs = { axis };
  return ENGINE.runKernel(ArgMax, inputs, attrs);
}
var argMax = op({ argMax_ });

// src/tfjs-core/src/ops/arg_min.ts
function argMin_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "argMin");
  const inputs = { x: $x };
  const attrs = { axis };
  return ENGINE.runKernel(ArgMin, inputs, attrs);
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
function computeDilation2DInfo(inputShape, filterShape, strides, pad2, dataFormat = "NHWC", dilations) {
  const inputChannels = inputShape[3];
  const $filterShape = [...filterShape, inputChannels];
  const $dataFormat = convertConv2DDataFormat(dataFormat);
  return computeConv2DInfo(inputShape, $filterShape, strides, dilations, pad2, null, null, $dataFormat);
}
function computePool2DInfo(inShape, filterSize, strides, dilations, pad2, roundingMode, dataFormat = "channelsLast") {
  const [filterHeight, filterWidth] = parseTupleParam(filterSize);
  let filterShape;
  if (dataFormat === "channelsLast") {
    filterShape = [filterHeight, filterWidth, inShape[3], inShape[3]];
  } else if (dataFormat === "channelsFirst") {
    filterShape = [filterHeight, filterWidth, inShape[1], inShape[1]];
  } else {
    throw new Error(`Unknown dataFormat ${dataFormat}`);
  }
  return computeConv2DInfo(inShape, filterShape, strides, dilations, pad2, roundingMode, false, dataFormat);
}
function computePool3DInfo(inShape, filterSize, strides, dilations, pad2, roundingMode, dataFormat = "NDHWC") {
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
  return computeConv3DInfo(inShape, filterShape, strides, dilations, pad2, false, $dataFormat, roundingMode);
}
function computeConv2DInfo(inShape, filterShape, strides, dilations, pad2, roundingMode, depthwise = false, dataFormat = "channelsLast") {
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
  const { padInfo, outHeight, outWidth } = getPadAndOutInfo(pad2, inHeight, inWidth, strideHeight, strideWidth, effectiveFilterHeight, effectiveFilterWidth, roundingMode, dataFormat);
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
function computeConv3DInfo(inShape, filterShape, strides, dilations, pad2, depthwise = false, dataFormat = "channelsLast", roundingMode) {
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
  const { padInfo, outDepth, outHeight, outWidth } = get3DPadAndOutInfo(pad2, inDepth, inHeight, inWidth, strideDepth, strideHeight, strideWidth, effectiveFilterDepth, effectiveFilterHeight, effectiveFilterWidth, roundingMode);
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
  return Math.floor((inputShape[0] * (stride - 1) - stride + effectiveFieldSize) / 2);
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
function getPadAndOutInfo(pad2, inHeight, inWidth, strideHeight, strideWidth, filterHeight, filterWidth, roundingMode, dataFormat) {
  let padInfo;
  let outHeight;
  let outWidth;
  if (typeof pad2 === "number") {
    const padType = pad2 === 0 ? "VALID" : "NUMBER";
    padInfo = { top: pad2, bottom: pad2, left: pad2, right: pad2, type: padType };
    const outShape = computeOutputShape2D([inHeight, inWidth], filterHeight, strideHeight, pad2, roundingMode);
    outHeight = outShape[0];
    outWidth = outShape[1];
  } else if (pad2 === "same") {
    outHeight = Math.ceil(inHeight / strideHeight);
    outWidth = Math.ceil(inWidth / strideWidth);
    const padAlongHeight = Math.max(0, (outHeight - 1) * strideHeight + filterHeight - inHeight);
    const padAlongWidth = Math.max(0, (outWidth - 1) * strideWidth + filterWidth - inWidth);
    const top = Math.floor(padAlongHeight / 2);
    const bottom = padAlongHeight - top;
    const left = Math.floor(padAlongWidth / 2);
    const right = padAlongWidth - left;
    padInfo = { top, bottom, left, right, type: "SAME" };
  } else if (pad2 === "valid") {
    padInfo = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" };
    outHeight = Math.ceil((inHeight - filterHeight + 1) / strideHeight);
    outWidth = Math.ceil((inWidth - filterWidth + 1) / strideWidth);
  } else if (typeof pad2 === "object") {
    const top = dataFormat === "channelsLast" ? pad2[1][0] : pad2[2][0];
    const bottom = dataFormat === "channelsLast" ? pad2[1][1] : pad2[2][1];
    const left = dataFormat === "channelsLast" ? pad2[2][0] : pad2[3][0];
    const right = dataFormat === "channelsLast" ? pad2[2][1] : pad2[3][1];
    const padType = top === 0 && bottom === 0 && left === 0 && right === 0 ? "VALID" : "EXPLICIT";
    padInfo = { top, bottom, left, right, type: padType };
    outHeight = round((inHeight - filterHeight + top + bottom) / strideHeight + 1, roundingMode);
    outWidth = round((inWidth - filterWidth + left + right) / strideWidth + 1, roundingMode);
  } else {
    throw Error(`Unknown padding parameter: ${pad2}`);
  }
  return { padInfo, outHeight, outWidth };
}
function get3DPadAndOutInfo(pad2, inDepth, inHeight, inWidth, strideDepth, strideHeight, strideWidth, filterDepth, filterHeight, filterWidth, roundingMode) {
  let padInfo;
  let outDepth;
  let outHeight;
  let outWidth;
  if (typeof pad2 === "number") {
    const padType = pad2 === 0 ? "VALID" : "NUMBER";
    padInfo = {
      top: pad2,
      bottom: pad2,
      left: pad2,
      right: pad2,
      front: pad2,
      back: pad2,
      type: padType
    };
    const outShape = computeOutputShape4D([inDepth, inHeight, inWidth, 1], filterDepth, 1, strideDepth, pad2, roundingMode);
    outDepth = outShape[0];
    outHeight = outShape[1];
    outWidth = outShape[2];
  } else if (pad2 === "same") {
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
  } else if (pad2 === "valid") {
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
    throw Error(`Unknown padding parameter: ${pad2}`);
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
function checkPadOnDimRoundingMode(opDesc, pad2, dimRoundingMode) {
  if (dimRoundingMode != null) {
    if (typeof pad2 === "string") {
      throw Error(`Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
    } else if (typeof pad2 === "number") {
      assert(isInt(pad2), () => `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
    } else if (typeof pad2 === "object") {
      pad2.forEach((p) => {
        p.forEach((v) => {
          assert(isInt(v), () => `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${v}.`);
        });
      });
    } else {
      throw Error(`Error in ${opDesc}: Unknown padding parameter: ${pad2}`);
    }
  }
}

// src/tfjs-core/src/ops/reshape.ts
function reshape_(x, shape) {
  const $x = convertToTensor(x, "x", "reshape", "string_or_numeric");
  const inputs = { x: $x };
  const attrs = { shape };
  return ENGINE.runKernel(Reshape, inputs, attrs);
}
var reshape = op({ reshape_ });

// src/tfjs-core/src/ops/avg_pool.ts
function avgPool_(x, filterSize, strides, pad2, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "avgPool", "float32");
  const dilations = 1;
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in avgPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in avgPool: x must be rank 4 but got rank ${x4D.rank}.`);
  checkPadOnDimRoundingMode("avgPool", pad2, dimRoundingMode);
  const inputs = { x: x4D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
  let res = ENGINE.runKernel(AvgPool, inputs, attrs);
  res = cast(res, $x.dtype);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var avgPool = op({ avgPool_ });

// src/tfjs-core/src/ops/avg_pool_3d.ts
function avgPool3d_(x, filterSize, strides, pad2, dimRoundingMode, dataFormat = "NDHWC") {
  const $x = convertToTensor(x, "x", "avgPool3d", "float32");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(x5D.rank === 5, () => `Error in avgPool3d: x must be rank 5 but got rank ${x5D.rank}.`);
  assert(dataFormat === "NDHWC", () => `Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${dataFormat}`);
  checkPadOnDimRoundingMode("avgPool3d", pad2, dimRoundingMode);
  const inputs = { x: x5D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat };
  let res = ENGINE.runKernel(AvgPool3D, inputs, attrs);
  res = cast(res, x5D.dtype);
  if (reshapedTo5D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
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
  return ENGINE.runKernel(Concat, inputs, attr);
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
  return ENGINE.runKernel(Slice, inputs, attrs);
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
  const res = add2(weighted, $lstmBias);
  const batchSize = res.shape[0];
  const sliceCols = res.shape[1] / 4;
  const sliceSize = [batchSize, sliceCols];
  const i = slice(res, [0, 0], sliceSize);
  const j = slice(res, [0, sliceCols], sliceSize);
  const f = slice(res, [0, sliceCols * 2], sliceSize);
  const o = slice(res, [0, sliceCols * 3], sliceSize);
  const newC = add2(mul(sigmoid(i), tanh2(j)), mul($c, sigmoid(add2($forgetBias, f))));
  const newH = mul(tanh2(newC), sigmoid(o));
  return [newC, newH];
}
var basicLSTMCell = op({ basicLSTMCell_ });

// src/tfjs-core/src/ops/batch_to_space_nd.ts
function batchToSpaceND_(x, blockShape, crops) {
  const $x = convertToTensor(x, "x", "batchToSpaceND");
  const prod3 = blockShape.reduce((a, b) => a * b);
  assert($x.rank >= 1 + blockShape.length, () => `input rank is ${$x.rank} but should be > than blockShape.length ${blockShape.length}`);
  assert(crops.length === blockShape.length, () => `crops.length is ${crops.length} but should be equal to blockShape.length  ${blockShape.length}`);
  assert($x.shape[0] % prod3 === 0, () => `input tensor batch is ${$x.shape[0]} but is not divisible by the product of the elements of blockShape ${blockShape.join(" * ")} === ${prod3}`);
  const inputs = { x: $x };
  const attrs = { blockShape, crops };
  return ENGINE.runKernel(BatchToSpaceND, inputs, attrs);
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
  assert($mean.rank === $variance.rank, () => "Batch normalization gradient requires mean and variance to have equal ranks.");
  assert($offset == null || $mean.rank === $offset.rank, () => "Batch normalization gradient requires mean and offset to have equal ranks.");
  assert($scale == null || $mean.rank === $scale.rank, () => "Batch normalization gradient requires mean and scale to have equal ranks.");
  const x4D = xAs4D($x);
  const inputs = {
    x: x4D,
    scale: $scale,
    offset: $offset,
    mean: $mean,
    variance: $variance
  };
  const attrs = { varianceEpsilon };
  const res = ENGINE.runKernel(FusedBatchNorm, inputs, attrs);
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
  assert($x.rank === 2, () => `Error in batchNorm2D: x must be rank 2 but got rank ${$x.rank}.`);
  assert($mean.rank === 2 || $mean.rank === 1, () => `Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${$mean.rank}.`);
  assert($variance.rank === 2 || $variance.rank === 1, () => `Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${$variance.rank}.`);
  if ($scale != null) {
    assert($scale.rank === 2 || $scale.rank === 1, () => `Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${$scale.rank}.`);
  }
  if ($offset != null) {
    assert($offset.rank === 2 || $offset.rank === 1, () => `Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${$offset.rank}.`);
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
  assert($x.rank === 3, () => `Error in batchNorm3D: x must be rank 3 but got rank ${$x.rank}.`);
  assert($mean.rank === 3 || $mean.rank === 1, () => `Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${$mean.rank}.`);
  assert($variance.rank === 3 || $variance.rank === 1, () => `Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${$variance.rank}.`);
  if ($scale != null) {
    assert($scale.rank === 3 || $scale.rank === 1, () => `Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${$scale.rank}.`);
  }
  if ($offset != null) {
    assert($offset.rank === 3 || $offset.rank === 1, () => `Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${$offset.rank}.`);
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
  assert($x.rank === 4, () => `Error in batchNorm4D: x must be rank 4 but got rank ${$x.rank}.`);
  assert($mean.rank === 4 || $mean.rank === 1, () => `Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${$mean.rank}.`);
  assert($variance.rank === 4 || $variance.rank === 1, () => `Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${$variance.rank}.`);
  if ($scale != null) {
    assert($scale.rank === 4 || $scale.rank === 1, () => `Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${$scale.rank}.`);
  }
  if ($offset != null) {
    assert($offset.rank === 4 || $offset.rank === 1, () => `Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${$offset.rank}.`);
  }
  return batchNorm($x, $mean, $variance, $offset, $scale, varianceEpsilon);
}
var batchNorm4d = op({ batchNorm4d_ });

// src/tfjs-core/src/ops/bincount.ts
function bincount_(x, weights, size) {
  const $x = convertToTensor(x, "x", "bincount");
  const $weights = convertToTensor(weights, "weights", "bincount");
  assert($x.dtype === "int32", () => `Error in bincount: input dtype must be int32, but got ${$x.dtype}`);
  assert(size >= 0, () => `size must be non-negative, but got ${size}.`);
  assert($weights.size === $x.size || $weights.size === 0, () => `Error in bincount: weights must have the same size as input or0-length, but got input shape: ${$x.shape}, weights shape: ${$weights.shape}.`);
  const inputs = { x: $x, weights: $weights };
  const attrs = { size };
  return ENGINE.runKernel(Bincount, inputs, attrs);
}
var bincount = op({ bincount_ });

// src/tfjs-core/src/ops/broadcast_args.ts
function broadcastArgs_(s0, s1) {
  const shape1Input = convertToTensor(s0, "s0", "broadcastArgs", "int32");
  const shape2Input = convertToTensor(s1, "s1", "broadcastArgs", "int32");
  if (shape1Input.rank !== 1) {
    throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${shape1Input.rank}`);
  }
  if (shape2Input.rank !== 1) {
    throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${shape2Input.rank}`);
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
      throw new Error(`broadcastTo(): [${xShape}] cannot be broadcast to [${shape}].`);
    }
  }
  const axes = reps.map((n, i) => n > 1 ? i : -1).filter((i) => i >= 0);
  if (axes.length === 0) {
    return clone(input);
  }
  const inputs = { x: input };
  const attrs = { reps };
  return ENGINE.runKernel(Tile, inputs, attrs);
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
  assert(clipValueMin <= clipValueMax, () => `Error in clip: min (${clipValueMin}) must be less than or equal to max (${clipValueMax}).`);
  const inputs = { x: $x };
  const attrs = { clipValueMin, clipValueMax };
  return ENGINE.runKernel(ClipByValue, inputs, attrs);
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
function conv2d_(x, filter, strides, pad2, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "conv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in conv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($filter.rank === 4, () => `Error in conv2d: filter must be rank 4, but got rank ${$filter.rank}.`);
  checkPadOnDimRoundingMode("conv2d", pad2, dimRoundingMode);
  const inDepth = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  assert(inDepth === $filter.shape[2], () => `Error in conv2d: depth of input (${inDepth}) must match input depth for filter ${$filter.shape[2]}.`);
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in conv2D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad2, dataFormat, dilations, dimRoundingMode };
  const res = ENGINE.runKernel(Conv2D, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var conv2d = op({ conv2d_ });

// src/tfjs-core/src/ops/conv1d.ts
function conv1d_(x, filter, stride, pad2, dataFormat = "NWC", dilation = 1, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv1d");
  const $filter = convertToTensor(filter, "filter", "conv1d");
  let x3D = $x;
  let reshapedTo3D = false;
  if ($x.rank === 2) {
    reshapedTo3D = true;
    x3D = reshape($x, [1, $x.shape[0], $x.shape[1]]);
  }
  assert(x3D.rank === 3, () => `Error in conv1d: input must be rank 3, but got rank ${x3D.rank}.`);
  assert($filter.rank === 3, () => `Error in conv1d: filter must be rank 3, but got rank ${$filter.rank}.`);
  checkPadOnDimRoundingMode("conv1d", pad2, dimRoundingMode);
  assert(x3D.shape[2] === $filter.shape[1], () => `Error in conv1d: depth of input (${x3D.shape[2]}) must match input depth for filter ${$filter.shape[1]}.`);
  assert(eitherStridesOrDilationsAreOne(stride, dilation), () => `Error in conv1D: Either stride or dilation must be 1. Got stride ${stride} and dilation '${dilation}'`);
  assert(dataFormat === "NWC", () => `Error in conv1d: got dataFormat of ${dataFormat} but only NWC is currently supported.`);
  const filter4D = reshape($filter, [1, $filter.shape[0], $filter.shape[1], $filter.shape[2]]);
  const input4D = reshape(x3D, [x3D.shape[0], 1, x3D.shape[1], x3D.shape[2]]);
  const strides = [1, stride];
  const dilations = [1, dilation];
  const conv2dDataFormat = "NHWC";
  const res = conv2d(input4D, filter4D, strides, pad2, conv2dDataFormat, dilations, dimRoundingMode);
  if (reshapedTo3D) {
    return reshape(res, [res.shape[2], res.shape[3]]);
  }
  return reshape(res, [res.shape[0], res.shape[2], res.shape[3]]);
}
var conv1d = op({ conv1d_ });

// src/tfjs-core/src/ops/conv2d_backprop_input.ts
function conv2DBackpropInput_(xShape, dy, filter, strides, pad2, dataFormat = "NHWC", dimRoundingMode) {
  assert(xShape.length === dy.rank, () => `Length of inShape (${xShape.length}) and rank of dy (${dy.rank}) must match`);
  let xShape4D = xShape;
  let dy4D = dy;
  let reshapedTo4D = false;
  if (dy.rank === 3) {
    reshapedTo4D = true;
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
    xShape4D = [1, xShape[0], xShape[1], xShape[2]];
  }
  assert(xShape4D.length === 4, () => `Error in conv2dDerInput: inShape must be length 4, but got length ${xShape4D.length}.`);
  assert(dy4D.rank === 4, () => `Error in conv2dDerInput: dy must be rank 4, but got rank ${dy4D.rank}`);
  assert(filter.rank === 4, () => `Error in conv2dDerInput: filter must be rank 4, but got rank ${filter.rank}`);
  const inDepth = dataFormat === "NHWC" ? xShape4D[3] : xShape4D[1];
  const outDepth = dataFormat === "NHWC" ? dy4D.shape[3] : dy4D.shape[1];
  assert(inDepth === filter.shape[2], () => `Error in conv2dDerInput: depth of input (${inDepth}) must match input depth for filter ${filter.shape[2]}.`);
  assert(outDepth === filter.shape[3], () => `Error in conv2dDerInput: depth of output (${outDepth}) must match output depth for filter ${filter.shape[3]}.`);
  checkPadOnDimRoundingMode("conv2dDerInput", pad2, dimRoundingMode);
  const inputs = { dy: dy4D, filter };
  const attrs = { strides, pad: pad2, dataFormat, dimRoundingMode, inputShape: xShape4D };
  const res = ENGINE.runKernel(Conv2DBackpropInput, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var conv2DBackpropInput = op({ conv2DBackpropInput_ });

// src/tfjs-core/src/ops/conv2d_transpose.ts
function conv2dTranspose_(x, filter, outputShape, strides, pad2, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv2dTranspose");
  const $filter = convertToTensor(filter, "filter", "conv2dTranspose");
  return conv2DBackpropInput(outputShape, $x, $filter, strides, pad2, "NHWC", dimRoundingMode);
}
var conv2dTranspose = op({ conv2dTranspose_ });

// src/tfjs-core/src/ops/conv3d.ts
function conv3d_(x, filter, strides, pad2, dataFormat = "NDHWC", dilations = [1, 1, 1]) {
  const $x = convertToTensor(x, "x", "conv3d");
  const $filter = convertToTensor(filter, "filter", "conv3d");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(x5D.rank === 5, () => `Error in conv3d: input must be rank 5, but got rank ${x5D.rank}.`);
  assert($filter.rank === 5, () => `Error in conv3d: filter must be rank 5, but got rank ${$filter.rank}.`);
  assert(x5D.shape[4] === $filter.shape[3], () => `Error in conv3d: depth of input (${x5D.shape[4]}) must match input depth for filter ${$filter.shape[3]}.`);
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in conv3D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  assert(dataFormat === "NDHWC", () => `Error in conv3d: got dataFormat of ${dataFormat} but only NDHWC is currently supported.`);
  const inputs = { x: x5D, filter: $filter };
  const attrs = { strides, pad: pad2, dataFormat, dilations };
  const res = ENGINE.runKernel(Conv3D, inputs, attrs);
  if (reshapedTo5D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
  }
  return res;
}
var conv3d = op({ conv3d_ });

// src/tfjs-core/src/ops/conv3d_backprop_input.ts
function conv3DBackpropInput_(xShape, dy, filter, strides, pad2) {
  assert(xShape.length === dy.rank, () => `Length of inShape (${xShape.length}) and rank of dy (${dy.rank}) must match`);
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
  assert(xShape5D.length === 5, () => `Error in conv3dDerInput: inShape must be length 5, but got length ${xShape5D.length}.`);
  assert(dy5D.rank === 5, () => `Error in conv3dDerInput: dy must be rank 5, but got rank ${dy5D.rank}`);
  assert(filter.rank === 5, () => `Error in conv3dDerInput: filter must be rank 5, but got rank ${filter.rank}`);
  assert(inDepth === filter.shape[3], () => `Error in conv3dDerInput: depth of input (${inDepth}) must match input depth for filter ${filter.shape[3]}.`);
  assert(outDepth === filter.shape[4], () => `Error in conv3dDerInput: depth of output (${outDepth}) must match output depth for filter ${filter.shape[4]}.`);
  const inputs = { dy: dy5D, filter };
  const attrs = { pad: pad2, strides, inputShape: xShape5D };
  const res = ENGINE.runKernel(Conv3DBackpropInputV2, inputs, attrs);
  if (reshapedTo5D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
  }
  return res;
}
var conv3DBackpropInput = op({ conv3DBackpropInput_ });

// src/tfjs-core/src/ops/conv3d_transpose.ts
function conv3dTranspose_(x, filter, outputShape, strides, pad2) {
  const $x = convertToTensor(x, "x", "conv3dTranspose");
  const $filter = convertToTensor(filter, "filter", "conv3dTranspose");
  return conv3DBackpropInput(outputShape, $x, $filter, strides, pad2);
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
function cumprod_(x, axis = 0, exclusive = false, reverse2 = false) {
  const $x = convertToTensor(x, "x", "cumprod");
  const inputs = { x: $x };
  const attrs = { axis, exclusive, reverse: reverse2 };
  return ENGINE.runKernel(Cumprod, inputs, attrs);
}
var cumprod = op({ cumprod_ });

// src/tfjs-core/src/ops/cumsum.ts
function cumsum_(x, axis = 0, exclusive = false, reverse2 = false) {
  const $x = convertToTensor(x, "x", "cumsum");
  const inputs = { x: $x };
  const attrs = { axis, exclusive, reverse: reverse2 };
  return ENGINE.runKernel(Cumsum, inputs, attrs);
}
var cumsum = op({ cumsum_ });

// src/tfjs-core/src/ops/dense_bincount.ts
function denseBincount_(x, weights, size, binaryOutput = false) {
  const $x = convertToTensor(x, "x", "denseBincount");
  const $weights = convertToTensor(weights, "weights", "denseBincount");
  assert($x.dtype === "int32", () => `Error in denseBincount: input dtype must be int32, but got ${$x.dtype}`);
  assert($x.rank <= 2, () => `Error in denseBincount: input must be at most rank 2, but got rank ${$x.rank}.`);
  assert(size >= 0, () => `size must be non-negative, but got ${size}.`);
  assert($weights.size === $x.size || $weights.size === 0, () => `Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${$x.shape}, weights shape: ${$weights.shape}.`);
  const inputs = { x: $x, weights: $weights };
  const attrs = { size, binaryOutput };
  return ENGINE.runKernel(DenseBincount, inputs, attrs);
}
var denseBincount = op({ denseBincount_ });

// src/tfjs-core/src/ops/depth_to_space.ts
function depthToSpace_(x, blockSize, dataFormat = "NHWC") {
  const $x = convertToTensor(x, "x", "depthToSpace", "float32");
  const inputHeight = dataFormat === "NHWC" ? $x.shape[1] : $x.shape[2];
  const inputWidth = dataFormat === "NHWC" ? $x.shape[2] : $x.shape[3];
  const inputDepth = dataFormat === "NHWC" ? $x.shape[3] : $x.shape[1];
  assert(blockSize > 1, () => `blockSize should be > 1 for depthToSpace, but was: ${blockSize}`);
  assert(inputHeight * blockSize >= 0, () => `Negative dimension size caused by overflow when multiplying
    ${inputHeight} and ${blockSize}  for depthToSpace with input shape
    ${$x.shape}`);
  assert(inputWidth * blockSize >= 0, () => `Negative dimension size caused by overflow when multiplying
    ${inputWidth} and ${blockSize} for depthToSpace with input shape
        ${$x.shape}`);
  assert(inputDepth % (blockSize * blockSize) === 0, () => `Dimension size must be evenly divisible by ${blockSize * blockSize} but is ${inputDepth} for depthToSpace with input shape ${$x.shape}`);
  const inputs = { x: $x };
  const attrs = { blockSize, dataFormat };
  return ENGINE.runKernel(DepthToSpace, inputs, attrs);
}
var depthToSpace = op({ depthToSpace_ });

// src/tfjs-core/src/ops/depthwise_conv2d.ts
function depthwiseConv2d_(x, filter, strides, pad2, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode) {
  const $x = convertToTensor(x, "x", "depthwiseConv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "depthwiseConv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in depthwiseConv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($filter.rank === 4, () => `Error in depthwiseConv2d: filter must be rank 4, but got rank ${$filter.rank}.`);
  assert(x4D.shape[3] === $filter.shape[2], () => `Error in depthwiseConv2d: number of input channels (${x4D.shape[3]}) must match the inChannels dimension in filter ${$filter.shape[2]}.`);
  checkPadOnDimRoundingMode("depthwiseConv2d", pad2, dimRoundingMode);
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad2, dataFormat, dilations, dimRoundingMode };
  const res = ENGINE.runKernel(DepthwiseConv2dNative, inputs, attrs);
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
function dilation2d_(x, filter, strides, pad2, dilations = [1, 1], dataFormat = "NHWC") {
  const $x = convertToTensor(x, "x", "dilation2d");
  const $filter = convertToTensor(filter, "filter", "dilation2d");
  assert($x.rank === 3 || $x.rank === 4, () => `Error in dilation2d: input must be rank 3 or 4, but got rank ${$x.rank}.`);
  assert($filter.rank === 3, () => `Error in dilation2d: filter must be rank 3, but got rank ${$filter.rank}.`);
  assert(dataFormat === "NHWC", () => `Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${dataFormat}`);
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
    reshapedTo4D = true;
  }
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad2, dilations };
  const res = ENGINE.runKernel(Dilation2D, inputs, attrs);
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
  const broadcastShape = assertAndGetBroadcastShape(assertAndGetBroadcastShape($condition.shape, $a.shape), $b.shape);
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
  assert(($t1.rank === 1 || $t1.rank === 2) && ($t2.rank === 1 || $t2.rank === 2), () => `Error in dot: inputs must all be rank 1 or 2, but got ranks ${$t1.rank} and ${$t2.rank}.`);
  const t1Inner = $t1.rank === 1 ? $t1.size : $t1.shape[1];
  const t2Inner = $t2.rank === 1 ? $t2.size : $t2.shape[0];
  assert(t1Inner === t2Inner, () => `Error in dot: inner dimensions of inputs must match, but got ${t1Inner} and ${t2Inner}.`);
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
  return ENGINE.runKernel(Einsum, $tensors, attrs);
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
  assert($x.dtype === "int32" || $x.dtype === "float32", () => "Input dtype must be `int32` or `float32`.");
  if ($x.dtype === "int32") {
    $x = cast($x, "float32");
  }
  const inputs = { x: $x };
  return ENGINE.runKernel(Erf, inputs);
}
var erf = op({ erf_ });

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
  return ENGINE.runKernel(ExpandDims, inputs, attrs);
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
  assert($x.rank === reps.length, () => `Error in transpose: rank of input ${$x.rank} must match length of reps ${reps}.`);
  const inputs = { x: $x };
  const attrs = { reps };
  return ENGINE.runKernel(Tile, inputs, attrs);
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
      return tile(expandDims(expandDims(out, 0), 0), [batchShape[0], batchShape[1], 1, 1]);
    } else if (batchShape.length === 3) {
      return tile(expandDims(expandDims(expandDims(out, 0), 0), 0), [
        batchShape[0],
        batchShape[1],
        batchShape[2],
        1,
        1
      ]);
    } else {
      throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${batchShape.length}D.`);
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
  return ENGINE.runKernel(GatherV2, inputs, attrs);
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

// src/tfjs-core/src/ops/imag.ts
function imag_(input) {
  const $input = convertToTensor(input, "input", "imag");
  const inputs = { input: $input };
  return ENGINE.runKernel(Imag, inputs);
}
var imag = op({ imag_ });

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
  return ENGINE.runKernel(LeakyRelu, inputs, attrs);
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
  assert($x.rank === 4 || $x.rank === 3, () => `Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${$x.rank}.`);
  assert(isInt(depthRadius), () => `Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${depthRadius}.`);
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  const inputs = { x: x4D };
  const attrs = { depthRadius, bias, alpha, beta };
  const res = ENGINE.runKernel(LRN, inputs, attrs);
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
  assert(isFunction(f), () => "The f passed in variableGrads(f) must be a function");
  assert(varList == null || Array.isArray(varList) && varList.every((v) => v instanceof Variable), () => "The varList passed in variableGrads(f, varList) must be an array of variables");
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
  assert(varList.length > 0, () => `variableGrads() expects at least one of the input variables to be trainable, but none of the ${originalVarCount} variables is trainable.`);
  const allowNoGradients = true;
  const { value, grads: grads2 } = ENGINE.gradients(f, varList, null, allowNoGradients);
  assert(grads2.some((g) => g != null), () => "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().");
  assert(value.rank === 0, () => `The f passed in variableGrads(f) must return a scalar, but it returned a rank-${value.rank} tensor`);
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

// src/tfjs-core/src/ops/neg.ts
function neg_(x) {
  const $x = convertToTensor(x, "x", "neg");
  const inputs = { x: $x };
  return ENGINE.runKernel(Neg, inputs);
}
var neg = op({ neg_ });

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

// src/tfjs-core/src/ops/max.ts
function max_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "max");
  const inputs = { x: $x };
  const attrs = { reductionIndices: axis, keepDims };
  return ENGINE.runKernel(Max, inputs, attrs);
}
var max = op({ max_ });

// src/tfjs-core/src/ops/sub.ts
function sub_(a, b) {
  let $a = convertToTensor(a, "a", "sub");
  let $b = convertToTensor(b, "b", "sub");
  [$a, $b] = makeTypesMatch($a, $b);
  const inputs = { a: $a, b: $b };
  return ENGINE.runKernel(Sub, inputs);
}
var sub = op({ sub_ });

// src/tfjs-core/src/ops/sum.ts
function sum_(x, axis = null, keepDims = false) {
  let $x = convertToTensor(x, "x", "sum");
  if ($x.dtype === "bool") {
    $x = cast($x, "int32");
  }
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(Sum, inputs, attrs);
}
var sum2 = op({ sum_ });

// src/tfjs-core/src/ops/log_softmax.ts
function logSoftmax_(logits, axis = -1) {
  const $logits = convertToTensor(logits, "logits", "logSoftmax");
  if (axis === -1) {
    axis = $logits.rank - 1;
  }
  if (axis !== $logits.rank - 1) {
    throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${$logits.rank} and axis was ${axis}`);
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
  assert(axesAreInnerMostDims(axes, rank), () => `${msg} supports only inner-most axes for now. Got axes ${axes} and rank-${rank} input.`);
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

// src/tfjs-core/src/ops/log_sum_exp.ts
function logSumExp_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "logSumExp");
  const axes = parseAxisParam(axis, $x.shape);
  const xMax = max($x, axes, true);
  const a = sub($x, xMax);
  const b = exp(a);
  const c = sum2(b, axes);
  const d = log2(c);
  const res = add2(reshape(xMax, d.shape), d);
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

// src/tfjs-core/src/ops/max_pool.ts
function maxPool_(x, filterSize, strides, pad2, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "maxPool");
  const dilations = 1;
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in maxPool: input must be rank 4 but got rank ${x4D.rank}.`);
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  checkPadOnDimRoundingMode("maxPool", pad2, dimRoundingMode);
  const inputs = { x: x4D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
  const res = ENGINE.runKernel(MaxPool, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var maxPool = op({ maxPool_ });

// src/tfjs-core/src/ops/max_pool_3d.ts
function maxPool3d_(x, filterSize = [1, 1, 1], strides, pad2, dimRoundingMode, dataFormat = "NDHWC") {
  const $x = convertToTensor(x, "x", "maxPool3d");
  let x5D = $x;
  let reshapedTo5D = false;
  if ($x.rank === 4) {
    reshapedTo5D = true;
    x5D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2], $x.shape[3]]);
  }
  assert(x5D.rank === 5, () => `Error in maxPool3d: x must be rank 5 but got rank ${x5D.rank}.`);
  assert(dataFormat === "NDHWC", () => `Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${dataFormat}`);
  checkPadOnDimRoundingMode("maxPool3d", pad2, dimRoundingMode);
  const inputs = { x: x5D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat };
  const res = ENGINE.runKernel(MaxPool3D, inputs, attrs);
  if (reshapedTo5D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3], res.shape[4]]);
  }
  return res;
}
var maxPool3d = op({ maxPool3d_ });

// src/tfjs-core/src/ops/max_pool_with_argmax.ts
function maxPoolWithArgmax_(x, filterSize, strides, pad2, includeBatchInIndex = false) {
  const $x = convertToTensor(x, "x", "maxPoolWithArgmax");
  const inputs = { x: $x };
  const attrs = { filterSize, strides, pad: pad2, includeBatchInIndex };
  const result = ENGINE.runKernel(MaxPoolWithArgmax, inputs, attrs);
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
  return ENGINE.runKernel(Mean, inputs, attrs);
}
var mean = op({ mean_ });

// src/tfjs-core/src/ops/zeros.ts
function zeros(shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real4 = zeros(shape, "float32");
    const imag3 = zeros(shape, "float32");
    return complex(real4, imag3);
  }
  const values = makeZerosTypedArray(sizeFromShape(shape), dtype);
  return ENGINE.makeTensor(values, shape, dtype);
}

// src/tfjs-core/src/ops/ones.ts
function ones2(shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real4 = ones2(shape, "float32");
    const imag3 = zeros(shape, "float32");
    return complex(real4, imag3);
  }
  const values = makeOnesTypedArray(sizeFromShape(shape), dtype);
  return ENGINE.makeTensor(values, shape, dtype);
}

// src/tfjs-core/src/ops/min.ts
function min_(x, axis = null, keepDims = false) {
  const $x = convertToTensor(x, "x", "min");
  const inputs = { x: $x };
  const attrs = { axis, keepDims };
  return ENGINE.runKernel(Min, inputs, attrs);
}
var min = op({ min_ });

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
  assert(mode === "reflect" || mode === "symmetric", () => `Invalid mode. Mode must be either reflect or symmetric. Got ${mode}.`);
  const $x = convertToTensor(x, "x", "mirrorPad");
  if ($x.rank === 0) {
    throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");
  }
  assert(paddings.length === $x.rank, () => `Padding doesn't match input. Must be ${$x.rank}. Got ${paddings.length}.`);
  const shapeOffset = mode === "reflect" ? 1 : 0;
  for (let i = 0; i < $x.rank; i++) {
    assert(paddings[i].length === 2, () => `Invalid number of paddings. Must be length of 2 each.`);
    assert(paddings[i][0] >= 0 && paddings[i][0] <= $x.shape[i] - shapeOffset && paddings[i][1] >= 0 && paddings[i][1] <= $x.shape[i] - shapeOffset, () => `Padding in dimension ${i} cannot be greater than or equal to ${$x.shape[i] - shapeOffset} or less than 0 for input of shape ${$x.shape}`);
  }
  const attrs = { paddings, mode };
  const inputs = { x: $x };
  return ENGINE.runKernel(MirrorPad, inputs, attrs);
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

// src/tfjs-core/src/ops/square.ts
function square_(x) {
  const $x = convertToTensor(x, "x", "square");
  const attrs = {};
  return ENGINE.runKernel("Square", { x: $x }, attrs);
}
var square = op({ square_ });

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
    throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${numOutcomes}.`);
  }
  if (origRank > 2) {
    throw new Error(`Rank of probabilities must be 1 or 2, but is ${origRank}`);
  }
  seed = seed || Math.random();
  const logits2D = origRank === 1 ? reshape($logits, [1, -1]) : $logits;
  const inputs = { logits: logits2D };
  const attrs = { numSamples, seed, normalized };
  const res = ENGINE.runKernel(Multinomial, inputs, attrs);
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
  assert($v1.rank === 1 && $v2.rank === 1, () => `Error in outerProduct: inputs must be rank 1, but got ranks ${$v1.rank} and ${$v2.rank}.`);
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
  return ENGINE.runKernel(PadV2, inputs, attrs);
}
var pad = op({ pad_ });

// src/tfjs-core/src/ops/pad1d.ts
function pad1d_(x, paddings, constantValue = 0) {
  assert(paddings.length === 2, () => "Invalid number of paddings. Must be length of 2.");
  return pad(x, [paddings], constantValue);
}
var pad1d = op({ pad1d_ });

// src/tfjs-core/src/ops/pad2d.ts
function pad2d_(x, paddings, constantValue = 0) {
  assert(paddings.length === 2 && paddings[0].length === 2 && paddings[1].length === 2, () => "Invalid number of paddings. Must be length of 2 each.");
  return pad(x, paddings, constantValue);
}
var pad2d = op({ pad2d_ });

// src/tfjs-core/src/ops/pad3d.ts
function pad3d_(x, paddings, constantValue = 0) {
  assert(paddings.length === 3 && paddings[0].length === 2 && paddings[1].length === 2 && paddings[2].length === 2, () => "Invalid number of paddings. Must be length of 2 each.");
  return pad(x, paddings, constantValue);
}
var pad3d = op({ pad3d_ });

// src/tfjs-core/src/ops/pad4d.ts
function pad4d_(x, paddings, constantValue = 0) {
  assert(paddings.length === 4 && paddings[0].length === 2 && paddings[1].length === 2 && paddings[2].length === 2 && paddings[3].length === 2, () => "Invalid number of paddings. Must be length of 2 each.");
  return pad(x, paddings, constantValue);
}
var pad4d = op({ pad4d_ });

// src/tfjs-core/src/ops/space_to_batch_nd.ts
function spaceToBatchND_(x, blockShape, paddings) {
  const $x = convertToTensor(x, "x", "spaceToBatchND");
  assert($x.rank >= 1 + blockShape.length, () => `input rank ${$x.rank} should be > than [blockShape] ${blockShape.length}`);
  assert(paddings.length === blockShape.length, () => `paddings.shape[0] ${paddings.length} must be equal to [blockShape] ${blockShape.length}`);
  assert($x.shape.reduce((a, b, i) => {
    if (i > 0 && i <= blockShape.length) {
      return a && (b + paddings[i - 1][0] + paddings[i - 1][1]) % blockShape[i - 1] === 0;
    }
    return a;
  }, true), () => `input spatial dimensions ${$x.shape.slice(1)} with paddings ${paddings.toString()} must be divisible by blockShapes ${blockShape.toString()}`);
  const inputs = { x: $x };
  const attrs = { blockShape, paddings };
  return ENGINE.runKernel(SpaceToBatchND, inputs, attrs);
}
var spaceToBatchND = op({ spaceToBatchND_ });

// src/tfjs-core/src/ops/pool.ts
function pool_(input, windowShape, poolingType, pad2, dilations, strides, dimRoundingMode) {
  if (dilations == null) {
    dilations = [1, 1];
  }
  if (strides == null) {
    strides = 1;
  }
  if (pad2 === 0) {
    pad2 = "valid";
  }
  const $x = convertToTensor(input, "x", "maxPool");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in pool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const convInfo = computePool2DInfo(x4D.shape, windowShape, strides, dilations, pad2);
  const dilation = [convInfo.dilationHeight, convInfo.dilationWidth];
  let basePadding;
  if (pad2 === "same") {
    basePadding = withSpaceToBatchBasePaddings([convInfo.filterHeight, convInfo.filterWidth], dilation);
  } else {
    basePadding = [[0, 0], [0, 0]];
  }
  const isDilationOne = dilation[0] === 1 && dilation[1] === 1;
  const [adjustedPadding, adjustedCrops] = requiredSpaceToBatchPaddings([convInfo.inHeight, convInfo.inWidth], dilation, basePadding);
  const convertedPad = isDilationOne ? pad2 : "valid";
  const convertedX = isDilationOne ? x4D : spaceToBatchND(x4D, dilation, adjustedPadding);
  const forwardOp = poolingType === "avg" ? () => avgPool(convertedX, windowShape, strides, convertedPad, dimRoundingMode) : () => maxPool(convertedX, windowShape, strides, convertedPad, dimRoundingMode);
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

// src/tfjs-core/src/ops/pow.ts
function pow_(base, exp4) {
  let $base = convertToTensor(base, "base", "pow");
  let $exp = convertToTensor(exp4, "exp", "pow");
  [$base, $exp] = makeTypesMatch($base, $exp);
  const inputs = { a: $base, b: $exp };
  return ENGINE.runKernel(Pow, inputs);
}
var pow = op({ pow_ });

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
  return ENGINE.runKernel(Prod, inputs, attrs);
}
var prod = op({ prod_ });

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
      throw new Error(`The difference between ${min3} - ${max3} <= 1 and dtype is not float`);
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
function range(start, stop, step2 = 1, dtype = "float32") {
  if (step2 === 0) {
    throw new Error("Cannot have a step of zero");
  }
  const attrs = { start, stop, step: step2, dtype };
  return ENGINE.runKernel(Range, {}, attrs);
}

// src/tfjs-core/src/ops/real.ts
function real_(input) {
  const $input = convertToTensor(input, "input", "real");
  const inputs = { input: $input };
  return ENGINE.runKernel(Real, inputs);
}
var real = op({ real_ });

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
  return ENGINE.runKernel(Reverse, inputs, attrs);
}
var reverse = op({ reverse_ });

// src/tfjs-core/src/ops/reverse_1d.ts
function reverse1d_(x) {
  const $x = convertToTensor(x, "x", "reverse");
  assert($x.rank === 1, () => `Error in reverse1D: x must be rank 1 but got rank ${$x.rank}.`);
  return reverse($x, 0);
}
var reverse1d = op({ reverse1d_ });

// src/tfjs-core/src/ops/reverse_2d.ts
function reverse2d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert($x.rank === 2, () => `Error in reverse2D: x must be rank 2 but got rank ${$x.rank}.`);
  return reverse($x, axis);
}
var reverse2d = op({ reverse2d_ });

// src/tfjs-core/src/ops/reverse_3d.ts
function reverse3d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert($x.rank === 3, () => `Error in reverse3D: x must be rank 3 but got rank ${$x.rank}.`);
  return reverse($x, axis);
}
var reverse3d = op({ reverse3d_ });

// src/tfjs-core/src/ops/reverse_4d.ts
function reverse4d_(x, axis) {
  const $x = convertToTensor(x, "x", "reverse");
  assert($x.rank === 4, () => `Error in reverse4D: x must be rank 4 but got rank ${$x.rank}.`);
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

// src/tfjs-core/src/ops/scalar.ts
function scalar(value, dtype) {
  if ((isTypedArray(value) && dtype !== "string" || Array.isArray(value)) && dtype !== "complex64") {
    throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
  }
  if (dtype === "string" && isTypedArray(value) && !(value instanceof Uint8Array)) {
    throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
  }
  const shape = [];
  const inferredShape = [];
  return makeTensor(value, shape, inferredShape, dtype);
}

// src/tfjs-core/src/ops/selu.ts
function selu_(x) {
  const $x = convertToTensor(x, "x", "selu");
  const inputs = { x: $x };
  return ENGINE.runKernel(Selu, inputs);
}
var selu = op({ selu_ });

// src/tfjs-core/src/ops/separable_conv2d.ts
function separableConv2d_(x, depthwiseFilter, pointwiseFilter, strides, pad2, dilation = [1, 1], dataFormat = "NHWC") {
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
    throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
  }
  assert(x4D.rank === 4, () => `Error in separableConv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($depthwiseFilter.rank === 4, () => `Error in separableConv2d: depthwise filter must be rank 4, but got rank ${$depthwiseFilter.rank}.`);
  assert($pointwiseFilter.rank === 4, () => `Error in separableConv2d: pointwise filter must be rank 4, but got rank ${$depthwiseFilter.rank}.`);
  assert($pointwiseFilter.shape[0] === 1, () => `Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${$pointwiseFilter.shape[0]}.`);
  assert($pointwiseFilter.shape[1] === 1, () => `Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${$pointwiseFilter.shape[1]}.`);
  const inChannels = $depthwiseFilter.shape[2];
  const channelMultiplier = $depthwiseFilter.shape[3];
  assert($pointwiseFilter.shape[2] === inChannels * channelMultiplier, () => `Error in separableConv2d: the third dimension of pointwise filter must be ${inChannels * channelMultiplier}, but got ${$pointwiseFilter.shape[2]}.`);
  const depthwise = depthwiseConv2d(x4D, $depthwiseFilter, strides, pad2, dataFormat, dilation);
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
  assert($x.rank === 1, () => `slice1d expects a rank-1 tensor, but got a rank-${$x.rank} tensor`);
  return slice($x, [begin], [size]);
}
var slice1d = op({ slice1d_ });

// src/tfjs-core/src/ops/slice2d.ts
function slice2d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice2d");
  assert($x.rank === 2, () => `slice2d expects a rank-2 tensor, but got a rank-${$x.rank} tensor`);
  return slice($x, begin, size);
}
var slice2d = op({ slice2d_ });

// src/tfjs-core/src/ops/slice3d.ts
function slice3d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice3d");
  assert($x.rank === 3, () => `slice3d expects a rank-3 tensor, but got a rank-${$x.rank} tensor`);
  return slice($x, begin, size);
}
var slice3d = op({ slice3d_ });

// src/tfjs-core/src/ops/slice4d.ts
function slice4d_(x, begin, size) {
  const $x = convertToTensor(x, "x", "slice4d");
  assert($x.rank === 4, () => `slice4d expects a rank-4 tensor, but got a rank-${$x.rank} tensor`);
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
    throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${$logits.rank} and dim was ${dim}`);
  }
  const inputs = { logits: $logits };
  const attrs = { dim };
  return ENGINE.runKernel(Softmax, inputs, attrs);
}
var softmax = op({ softmax_ });

// src/tfjs-core/src/ops/spectral/fft.ts
function fft_(input) {
  assert(input.dtype === "complex64", () => `The dtype for tf.spectral.fft() must be complex64 but got ${input.dtype}.`);
  const inputs = { input };
  return ENGINE.runKernel(FFT, inputs);
}
var fft = op({ fft_ });

// src/tfjs-core/src/ops/spectral/ifft.ts
function ifft_(input) {
  assert(input.dtype === "complex64", () => `The dtype for tf.spectral.ifft() must be complex64 but got ${input.dtype}.`);
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
    const imagConjugate = mul(reverse(slice(imagInput, [0, 1], [batch, innerDimensionSize - 2]), 1), scalar(-1));
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
  return ENGINE.runKernel(SplitV, inputs, attr);
}
var split = op({ split_ });

// src/tfjs-core/src/ops/spectral/rfft.ts
function rfft_(input, fftLength) {
  assert(input.dtype === "float32", () => `The dtype for rfft() must be real value but got ${input.dtype}`);
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
  const realComplexConjugate = split(realValues, [half, innerDimensionSize - half], realValues.shape.length - 1);
  const imagComplexConjugate = split(imagValues, [half, innerDimensionSize - half], imagValues.shape.length - 1);
  const outputShape = adjustedInput.shape.slice();
  outputShape[adjustedInput.shape.length - 1] = half;
  return reshape(complex(realComplexConjugate[0], imagComplexConjugate[0]), outputShape);
}
var rfft = op({ rfft_ });

// src/tfjs-core/src/ops/sqrt.ts
function sqrt_(x) {
  const $x = convertToTensor(x, "x", "sqrt", "float32");
  const inputs = { x: $x };
  return ENGINE.runKernel(Sqrt, inputs);
}
var sqrt = op({ sqrt_ });

// src/tfjs-core/src/ops/squared_difference.ts
function squaredDifference_(a, b) {
  let $a = convertToTensor(a, "a", "squaredDifference");
  let $b = convertToTensor(b, "b", "squaredDifference");
  [$a, $b] = makeTypesMatch($a, $b);
  assertAndGetBroadcastShape($a.shape, $b.shape);
  const inputs = { a: $a, b: $b };
  const attrs = {};
  return ENGINE.runKernel(SquaredDifference, inputs, attrs);
}
var squaredDifference = op({ squaredDifference_ });

// src/tfjs-core/src/ops/squeeze.ts
function squeeze_(x, axis) {
  const $x = convertToTensor(x, "x", "squeeze");
  return reshape($x, squeezeShape($x.shape, axis).newShape);
}
var squeeze = op({ squeeze_ });

// src/tfjs-core/src/ops/stack.ts
function stack_(tensors, axis = 0) {
  const $tensors = convertToTensorArray(tensors, "tensors", "stack", "string_or_numeric");
  assert($tensors.length >= 1, () => "Pass at least one tensor to tf.stack");
  if ($tensors.length > 0) {
    assert(axis <= $tensors[0].rank, () => "Axis must be <= rank of the tensor");
  }
  const inputs = $tensors;
  const attrs = { axis };
  return ENGINE.runKernel(Pack, inputs, attrs);
}
var stack = op({ stack_ });

// src/tfjs-core/src/ops/step.ts
function step_(x, alpha = 0) {
  const $x = convertToTensor(x, "x", "step");
  const inputs = { x: $x };
  const attrs = { alpha };
  return ENGINE.runKernel(Step, inputs, attrs);
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
  return ENGINE.runKernel(StridedSlice, inputs, attrs);
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
    throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
  }
  if (inferredShape.length === 1 && shape == null) {
    throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
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
    throw new Error(`'k' passed to topk() must be <= the last dimension (${lastDim}) but got ${k}`);
  }
  const inputs = { x: $x };
  const attrs = { k, sorted };
  const [values, indices] = ENGINE.runKernel(TopK, inputs, attrs);
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
  const [values, indices] = ENGINE.runKernel(Unique, inputs, attrs);
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
  return ENGINE.runKernel(UnsortedSegmentSum, inputs, attrs);
}
var unsortedSegmentSum = op({ unsortedSegmentSum_ });

// src/tfjs-core/src/ops/unstack.ts
function unstack_(x, axis = 0) {
  const $x = convertToTensor(x, "x", "unstack", "string_or_numeric");
  assert(axis >= -$x.shape.length && axis < $x.shape.length, () => `Axis = ${axis} is not in [-${$x.shape.length}, ${$x.shape.length})`);
  const inputs = { value: $x };
  const attrs = { axis };
  return ENGINE.runKernel(Unpack, inputs, attrs);
}
var unstack = op({ unstack_ });

// src/tfjs-core/src/backends/where_impl.ts
function whereImpl(condShape, condVals) {
  const indices = [];
  for (let i = 0; i < condVals.length; i++) {
    if (condVals[i]) {
      indices.push(i);
    }
  }
  const inBuffer = buffer(condShape, "int32");
  const out = buffer([indices.length, condShape.length], "int32");
  for (let i = 0; i < indices.length; i++) {
    const loc = inBuffer.indexToLoc(indices[i]);
    const offset = i * condShape.length;
    out.values.set(loc, offset);
  }
  return out.toTensor();
}

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

// src/tfjs-core/src/ops/moving_average.ts
function movingAverage_(v, x, decay, step2, zeroDebias = true) {
  const $v = convertToTensor(v, "v", "movingAverage");
  const $x = convertToTensor(x, "x", "movingAverage");
  const $decay = convertToTensor(decay, "decay", "movingAverage");
  assertTypesMatch($v, $x);
  assert(arraysEqual($v.shape, $x.shape), () => "Shape mismatch in v and x");
  const one = scalar(1);
  const oneMinusDecay = sub(one, $decay);
  let update = mul(sub($x, $v), oneMinusDecay);
  if (zeroDebias) {
    assert(step2 != null, () => "When using zeroDebias: true, step is required.");
    const $step = convertToTensor(step2, "step", "movingAverage");
    update = div(update, sub(one, pow($decay, $step)));
  }
  return add2($v, update);
}
var movingAverage = op({ movingAverage_ });

// src/tfjs-core/src/ops/scatter_nd.ts
function scatterND_(indices, updates, shape) {
  const $indices = convertToTensor(indices, "indices", "scatterND", "int32");
  const $updates = convertToTensor(updates, "updates", "scatterND");
  validateInput($updates, $indices, shape);
  const inputs = { indices: $indices, updates: $updates };
  const attrs = { shape };
  return ENGINE.runKernel(ScatterNd, inputs, attrs);
}
var scatterND = op({ scatterND_ });

// src/tfjs-core/src/ops/sparse_to_dense_util.ts
function validateInput2(sparseIndices, sparseValues, outputShape, defaultValues) {
  if (sparseIndices.dtype !== "int32") {
    throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${sparseIndices.dtype}.`);
  }
  if (sparseIndices.rank > 2) {
    throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${sparseIndices.shape}.`);
  }
  const numElems = sparseIndices.rank > 0 ? sparseIndices.shape[0] : 1;
  const numDims = sparseIndices.rank > 1 ? sparseIndices.shape[1] : 1;
  if (outputShape.length !== numDims) {
    throw new Error(`outputShape has incorrect number of elements:, ${outputShape.length}, should be: ${numDims}.`);
  }
  const numValues = sparseValues.size;
  if (!(sparseValues.rank === 0 || sparseValues.rank === 1 && numValues === numElems)) {
    throw new Error(`sparseValues has incorrect shape ${sparseValues.shape}, should be [] or [${numElems}]`);
  }
  if (sparseValues.dtype !== defaultValues.dtype) {
    throw new Error("sparseValues.dtype must match defaultValues.dtype");
  }
}

// src/tfjs-core/src/ops/sparse_to_dense.ts
function sparseToDense_(sparseIndices, sparseValues, outputShape, defaultValue = 0) {
  const $sparseIndices = convertToTensor(sparseIndices, "sparseIndices", "sparseToDense", "int32");
  const $sparseValues = convertToTensor(sparseValues, "sparseValues", "sparseToDense");
  const $defaultValue = convertToTensor(defaultValue, "defaultValue", "sparseToDense", $sparseValues.dtype);
  validateInput2($sparseIndices, $sparseValues, outputShape, $defaultValue);
  const inputs = {
    sparseIndices: $sparseIndices,
    sparseValues: $sparseValues,
    defaultValue: $defaultValue
  };
  const attrs = { outputShape };
  return ENGINE.runKernel(SparseToDense, inputs, attrs);
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
  assert($x.dtype === "float32", () => `x has to be a floating point tensor since it's going to be scaled, but got a ${$x.dtype} tensor instead.`);
  assert(rate >= 0 && rate < 1, () => `rate must be a float in the range [0, 1), but got ${rate}.`);
  if (rate === 0) {
    return x instanceof Tensor ? $x.clone() : $x;
  }
  const $noiseShape = getNoiseShape($x, noiseShape);
  const keepProb = 1 - rate;
  const multiplier = div(floor(add2(randomUniform($noiseShape, 0, 1, "float32", seed), keepProb)), keepProb);
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
function conv2DBackpropFilter_(x, dy, filterShape, strides, pad2, dataFormat = "NHWC", dimRoundingMode) {
  let x4D = x;
  if (x.rank === 3) {
    x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
  }
  let dy4D = dy;
  if (dy4D.rank === 3) {
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in conv2dDerFilter: input must be rank 4, but got shape ${x4D.shape}.`);
  assert(dy4D.rank === 4, () => `Error in conv2dDerFilter: dy must be rank 4, but got shape ${dy4D.shape}.`);
  assert(filterShape.length === 4, () => `Error in conv2dDerFilter: filterShape must be length 4, but got ${filterShape}.`);
  const inDepth = dataFormat === "NHWC" ? x4D.shape[3] : x4D.shape[1];
  const outDepth = dataFormat === "NHWC" ? dy4D.shape[3] : dy4D.shape[1];
  assert(inDepth === filterShape[2], () => `Error in conv2dDerFilter: depth of input ${inDepth}) must match input depth in filter (${filterShape[2]}.`);
  assert(outDepth === filterShape[3], () => `Error in conv2dDerFilter: depth of dy (${outDepth}) must match output depth for filter (${filterShape[3]}).`);
  checkPadOnDimRoundingMode("conv2dDerFilter", pad2, dimRoundingMode);
  const inputs = { x: x4D, dy: dy4D };
  const attrs = { strides, pad: pad2, dataFormat, dimRoundingMode, filterShape };
  return ENGINE.runKernel(Conv2DBackpropFilter, inputs, attrs);
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
  throw new Error(`Cannot compute gradient for fused activation ${activation}.`);
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
  pad: pad2,
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
    let result = conv2d(x, filter, strides, pad2, dataFormat, dilations, dimRoundingMode);
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
  }
  const $x = convertToTensor(x, "x", "conv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "conv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in fused conv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($filter.rank === 4, () => `Error in fused conv2d: filter must be rank 4, but got rank ${$filter.rank}.`);
  checkPadOnDimRoundingMode("fused conv2d", pad2, dimRoundingMode);
  assert(x4D.shape[3] === $filter.shape[2], () => `Error in conv2d: depth of input (${x4D.shape[3]}) must match input depth for filter ${$filter.shape[2]}.`);
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in conv2D: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  assert(dataFormat === "NHWC", () => `Error in conv2d: got dataFormat of ${dataFormat} but only NHWC is currently supported.`);
  const convInfo = computeConv2DInfo(x4D.shape, $filter.shape, strides, dilations, pad2, dimRoundingMode);
  let $bias;
  if (bias != null) {
    $bias = convertToTensor(bias, "bias", "fused conv2d");
    [$bias] = makeTypesMatch($bias, $x);
    assertAndGetBroadcastShape(convInfo.outShape, $bias.shape);
  }
  let $preluActivationWeights;
  if (preluActivationWeights != null) {
    $preluActivationWeights = convertToTensor(preluActivationWeights, "prelu weights", "fused conv2d");
  }
  const grad2 = (dy, saved) => {
    const [$filter2, x4D2, y, $bias2] = saved;
    const dyActivation = getFusedDyActivation(dy, y, activation);
    assert(tupleValuesAreOne(dilations), () => `Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${dilations}'`);
    const xDer = conv2DBackpropInput(x4D2.shape, dyActivation, $filter2, strides, pad2);
    const filterDer = conv2DBackpropFilter(x4D2, dyActivation, $filter2.shape, strides, pad2);
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
    pad: pad2,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  };
  if (bias == null) {
    const customOp = customGrad((x4D2, filter2, save) => {
      let res = ENGINE.runKernel(FusedConv2D, inputs, attrs);
      save([filter2, x4D2, res]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOp(x4D, $filter);
  } else {
    const customOpWithBias = customGrad((x4D2, filter2, bias2, save) => {
      let res = ENGINE.runKernel(FusedConv2D, inputs, attrs);
      save([filter2, x4D2, res, bias2]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOpWithBias(x4D, $filter, $bias);
  }
}
var conv2d2 = op({ fusedConv2d_ });

// src/tfjs-core/src/ops/depthwise_conv2d_native_backprop_filter.ts
function depthwiseConv2dNativeBackpropFilter_(x, dy, filterShape, strides, pad2, dilations = [1, 1], dimRoundingMode) {
  let x4D = x;
  if (x.rank === 3) {
    x4D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2]]);
  }
  let dy4D = dy;
  if (dy4D.rank === 3) {
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  const inputs = { x: x4D, dy: dy4D };
  const attrs = { strides, pad: pad2, dimRoundingMode, dilations, filterShape };
  return ENGINE.runKernel(DepthwiseConv2dNativeBackpropFilter, inputs, attrs);
}
var depthwiseConv2dNativeBackpropFilter = op({ depthwiseConv2dNativeBackpropFilter_ });

// src/tfjs-core/src/ops/depthwise_conv2d_native_backprop_input.ts
function depthwiseConv2dNativeBackpropInput_(xShape, dy, filter, strides, pad2, dilations = [1, 1], dimRoundingMode) {
  let dy4D = dy;
  let reshapedTo4D = false;
  if (dy.rank === 3) {
    reshapedTo4D = true;
    dy4D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2]]);
  }
  const inputs = { dy: dy4D, filter };
  const attrs = { strides, pad: pad2, dimRoundingMode, dilations, inputShape: xShape };
  const res = ENGINE.runKernel(DepthwiseConv2dNativeBackpropInput, inputs, attrs);
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
  pad: pad2,
  dataFormat = "NHWC",
  dilations = [1, 1],
  dimRoundingMode,
  bias,
  activation = "linear",
  preluActivationWeights,
  leakyreluAlpha
}) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
    let result = depthwiseConv2d(x, filter, strides, pad2, dataFormat, dilations, dimRoundingMode);
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
  }
  const $x = convertToTensor(x, "x", "depthwiseConv2d", "float32");
  const $filter = convertToTensor(filter, "filter", "depthwiseConv2d", "float32");
  let x4D = $x;
  let reshapedTo4D = false;
  if ($x.rank === 3) {
    reshapedTo4D = true;
    x4D = reshape($x, [1, $x.shape[0], $x.shape[1], $x.shape[2]]);
  }
  assert(x4D.rank === 4, () => `Error in fused depthwiseConv2d: input must be rank 4, but got rank ${x4D.rank}.`);
  assert($filter.rank === 4, () => `Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${$filter.rank}.`);
  assert(x4D.shape[3] === $filter.shape[2], () => `Error in fused depthwiseConv2d: number of input channels (${x4D.shape[3]}) must match the inChannels dimension in filter ${$filter.shape[2]}.`);
  if (dilations == null) {
    dilations = [1, 1];
  }
  assert(eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  checkPadOnDimRoundingMode("fused depthwiseConv2d", pad2, dimRoundingMode);
  const convInfo = computeConv2DInfo(x4D.shape, $filter.shape, strides, dilations, pad2, dimRoundingMode, true);
  let $bias;
  if (bias != null) {
    $bias = convertToTensor(bias, "bias", "fused conv2d");
    [$bias] = makeTypesMatch($bias, $x);
    assertAndGetBroadcastShape(convInfo.outShape, $bias.shape);
  }
  let $preluActivationWeights;
  if (preluActivationWeights != null) {
    $preluActivationWeights = convertToTensor(preluActivationWeights, "prelu weights", "fused depthwiseConv2d");
  }
  const grad2 = (dy, saved) => {
    assert(tupleValuesAreOne(dilations), () => `Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${dilations}'`);
    const [$filter2, x4D2, y, bias2] = saved;
    const dyActivation = getFusedDyActivation(dy, y, activation);
    const xDer = depthwiseConv2dNativeBackpropInput(x4D2.shape, dyActivation, $filter2, strides, pad2, dilations, dimRoundingMode);
    const filterDer = depthwiseConv2dNativeBackpropFilter(x4D2, dyActivation, $filter2.shape, strides, pad2, dilations, dimRoundingMode);
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
    pad: pad2,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  };
  if (bias == null) {
    const customOp = customGrad((x4D2, filter2, save) => {
      let res = ENGINE.runKernel(FusedDepthwiseConv2D, inputs, attrs);
      save([filter2, x4D2, res]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
    return customOp(x4D, $filter);
  } else {
    const customOpWithBias = customGrad((x4D2, filter2, bias2, save) => {
      let res = ENGINE.runKernel(FusedDepthwiseConv2D, inputs, attrs);
      save([filter2, x4D2, res, bias2]);
      if (reshapedTo4D) {
        res = reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
      }
      return { value: res, gradFunc: grad2 };
    });
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
  leakyreluAlpha
}) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
    let result = matMul(a, b, transposeA, transposeB);
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(result, activation, preluActivationWeights, leakyreluAlpha);
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
  assert(innerShapeA === innerShapeB, () => `Error in fused matMul: inner shapes (${innerShapeA}) and (${innerShapeB}) of Tensors with shapes ${$a.shape} and ${$b.shape} and transposeA=${transposeA} and transposeB=${transposeB} must match.`);
  const outShapeOuterDims = assertAndGetBroadcastShape($a.shape.slice(0, -2), $b.shape.slice(0, -2));
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
    $preluActivationWeights = convertToTensor(preluActivationWeights, "prelu weights", "fused matMul");
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
      const res = ENGINE.runKernel(_FusedMatMul, inputs, attrs);
      save([a3D2, b3D2, res]);
      return { value: reshape(res, outShape), gradFunc: grad2 };
    });
    return customOp(a3D, b3D);
  } else {
    const customOpWithBias = customGrad((a3D2, b3D2, $bias2, save) => {
      const res = ENGINE.runKernel(_FusedMatMul, inputs, attrs);
      save([a3D2, b3D2, res, $bias2]);
      return { value: reshape(res, outShape), gradFunc: grad2 };
    });
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
      const pad2 = concat([
        slice(signal, start, frameLength - padLen),
        fill([padLen], padValue)
      ]);
      output.push(pad2);
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
  assert($image.rank === 4, () => `Error in cropAndResize: image must be rank 4,but got rank ${$image.rank}.`);
  assert($boxes.rank === 2 && $boxes.shape[1] === 4, () => `Error in cropAndResize: boxes must be have size [${numBoxes},4] but had shape ${$boxes.shape}.`);
  assert($boxInd.rank === 1 && $boxInd.shape[0] === numBoxes, () => `Error in cropAndResize: boxInd must be have size [${numBoxes}] but had shape ${$boxes.shape}.`);
  assert(cropSize.length === 2, () => `Error in cropAndResize: cropSize must be of length 2, but got length ${cropSize.length}.`);
  assert(cropSize[0] >= 1 && cropSize[1] >= 1, () => `cropSize must be atleast [1,1], but was ${cropSize}`);
  assert(method === "bilinear" || method === "nearest", () => `method must be bilinear or nearest, but was ${method}`);
  const inputs = { image: $image, boxes: $boxes, boxInd: $boxInd };
  const attrs = { method, extrapolationValue, cropSize };
  const res = ENGINE.runKernel(CropAndResize, inputs, attrs);
  return res;
}
var cropAndResize = op({ cropAndResize_ });

// src/tfjs-core/src/ops/image/flip_left_right.ts
function flipLeftRight_(image) {
  const $image = convertToTensor(image, "image", "flipLeftRight", "float32");
  assert($image.rank === 4, () => `Error in flipLeftRight: image must be rank 4,but got rank ${$image.rank}.`);
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
  assert($image.rank >= 2, () => `Error in grayscaleToRGB: images must be at least rank 2, but got rank ${$image.rank}.`);
  assert(lastDims === 1, () => `Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${lastDims}.`);
  const reps = new Array($image.rank);
  reps.fill(1, 0, lastDimsIdx);
  reps[lastDimsIdx] = 3;
  return tile($image, reps);
}
var grayscaleToRGB = op({ grayscaleToRGB_ });

// src/tfjs-core/src/ops/image/rotate_with_offset.ts
function rotateWithOffset_(image, radians, fillValue = 0, center = 0.5) {
  const $image = convertToTensor(image, "image", "rotateWithOffset", "float32");
  assert($image.rank === 4, () => `Error in rotateWithOffset: image must be rank 4,but got rank ${$image.rank}.`);
  const inputs = { image: $image };
  const attrs = { radians, fillValue, center };
  const res = ENGINE.runKernel(RotateWithOffset, inputs, attrs);
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
  assert(0 <= iouThreshold && iouThreshold <= 1, () => `iouThreshold must be in [0, 1], but was '${iouThreshold}'`);
  assert(boxes.rank === 2, () => `boxes must be a 2D tensor, but was of rank '${boxes.rank}'`);
  assert(boxes.shape[1] === 4, () => `boxes must have 4 columns, but 2nd dimension was ${boxes.shape[1]}`);
  assert(scores.rank === 1, () => "scores must be a 1D tensor");
  assert(scores.shape[0] === numBoxes, () => `scores has incompatible shape with boxes. Expected ${numBoxes}, but was ${scores.shape[0]}`);
  assert(0 <= softNmsSigma && softNmsSigma <= 1, () => `softNmsSigma must be in [0, 1], but was '${softNmsSigma}'`);
  return { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma };
}

// src/tfjs-core/src/ops/image/non_max_suppression.ts
function nonMaxSuppression_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression", "float32");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression", "float32");
  const inputs = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold);
  maxOutputSize = inputs.maxOutputSize;
  iouThreshold = inputs.iouThreshold;
  scoreThreshold = inputs.scoreThreshold;
  const attrs = { maxOutputSize, iouThreshold, scoreThreshold };
  return ENGINE.runKernel(NonMaxSuppressionV3, { boxes: $boxes, scores: $scores }, attrs);
}
var nonMaxSuppression = op({ nonMaxSuppression_ });

// src/tfjs-core/src/backends/non_max_suppression_util.ts
function binaryInsert(arr, element, comparator) {
  const index = binarySearch(arr, element, comparator);
  const insertionPoint = index < 0 ? -(index + 1) : index;
  arr.splice(insertionPoint, 0, element);
}
function binarySearch(arr, target, comparator) {
  return binarySearch_(arr, target, comparator || defaultComparator);
}
function defaultComparator(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function binarySearch_(arr, target, comparator) {
  let left = 0;
  let right = arr.length;
  let middle = 0;
  let found = false;
  while (left < right) {
    middle = left + (right - left >>> 1);
    const compareResult = comparator(target, arr[middle]);
    if (compareResult > 0) {
      left = middle + 1;
    } else {
      right = middle;
      found = !compareResult;
    }
  }
  return found ? left : -left - 1;
}

// src/tfjs-core/src/backends/non_max_suppression_impl.ts
function nonMaxSuppressionV3Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
  return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, 0);
}
function nonMaxSuppressionV4Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize) {
  return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, 0, false, padToMaxOutputSize, true);
}
function nonMaxSuppressionV5Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma) {
  return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma, true);
}
function nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma, returnScoresTensor = false, padToMaxOutputSize = false, returnValidOutputs = false) {
  const candidates = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > scoreThreshold) {
      candidates.push({ score: scores[i], boxIndex: i, suppressBeginIndex: 0 });
    }
  }
  candidates.sort(ascendingComparator);
  const scale = softNmsSigma > 0 ? -0.5 / softNmsSigma : 0;
  const selectedIndices = [];
  const selectedScores = [];
  while (selectedIndices.length < maxOutputSize && candidates.length > 0) {
    const candidate = candidates.pop();
    const { score: originalScore, boxIndex, suppressBeginIndex } = candidate;
    if (originalScore < scoreThreshold) {
      break;
    }
    let ignoreCandidate = false;
    for (let j = selectedIndices.length - 1; j >= suppressBeginIndex; --j) {
      const iou = intersectionOverUnion(boxes, boxIndex, selectedIndices[j]);
      if (iou >= iouThreshold) {
        ignoreCandidate = true;
        break;
      }
      candidate.score = candidate.score * suppressWeight(iouThreshold, scale, iou);
      if (candidate.score <= scoreThreshold) {
        break;
      }
    }
    candidate.suppressBeginIndex = selectedIndices.length;
    if (!ignoreCandidate) {
      if (candidate.score === originalScore) {
        selectedIndices.push(boxIndex);
        selectedScores.push(candidate.score);
      } else if (candidate.score > scoreThreshold) {
        binaryInsert(candidates, candidate, ascendingComparator);
      }
    }
  }
  const validOutputs = selectedIndices.length;
  const elemsToPad = maxOutputSize - validOutputs;
  if (padToMaxOutputSize && elemsToPad > 0) {
    selectedIndices.push(...new Array(elemsToPad).fill(0));
    selectedScores.push(...new Array(elemsToPad).fill(0));
  }
  const result = { selectedIndices };
  if (returnScoresTensor) {
    result["selectedScores"] = selectedScores;
  }
  if (returnValidOutputs) {
    result["validOutputs"] = validOutputs;
  }
  return result;
}
function intersectionOverUnion(boxes, i, j) {
  const iCoord = boxes.subarray(i * 4, i * 4 + 4);
  const jCoord = boxes.subarray(j * 4, j * 4 + 4);
  const yminI = Math.min(iCoord[0], iCoord[2]);
  const xminI = Math.min(iCoord[1], iCoord[3]);
  const ymaxI = Math.max(iCoord[0], iCoord[2]);
  const xmaxI = Math.max(iCoord[1], iCoord[3]);
  const yminJ = Math.min(jCoord[0], jCoord[2]);
  const xminJ = Math.min(jCoord[1], jCoord[3]);
  const ymaxJ = Math.max(jCoord[0], jCoord[2]);
  const xmaxJ = Math.max(jCoord[1], jCoord[3]);
  const areaI = (ymaxI - yminI) * (xmaxI - xminI);
  const areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);
  if (areaI <= 0 || areaJ <= 0) {
    return 0;
  }
  const intersectionYmin = Math.max(yminI, yminJ);
  const intersectionXmin = Math.max(xminI, xminJ);
  const intersectionYmax = Math.min(ymaxI, ymaxJ);
  const intersectionXmax = Math.min(xmaxI, xmaxJ);
  const intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0) * Math.max(intersectionXmax - intersectionXmin, 0);
  return intersectionArea / (areaI + areaJ - intersectionArea);
}
function suppressWeight(iouThreshold, scale, iou) {
  const weight = Math.exp(scale * iou * iou);
  return iou <= iouThreshold ? weight : 0;
}
function ascendingComparator(c1, c2) {
  return c1.score - c2.score || c1.score === c2.score && c2.boxIndex - c1.boxIndex;
}

// src/tfjs-core/src/ops/image/non_max_suppression_with_score.ts
function nonMaxSuppressionWithScore_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression");
  const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
  maxOutputSize = params.maxOutputSize;
  iouThreshold = params.iouThreshold;
  scoreThreshold = params.scoreThreshold;
  softNmsSigma = params.softNmsSigma;
  const inputs = { boxes: $boxes, scores: $scores };
  const attrs = { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma };
  const result = ENGINE.runKernel(NonMaxSuppressionV5, inputs, attrs);
  return { selectedIndices: result[0], selectedScores: result[1] };
}
var nonMaxSuppressionWithScore = op({ nonMaxSuppressionWithScore_ });

// src/tfjs-core/src/ops/image/non_max_suppression_padded.ts
function nonMaxSuppressionPadded_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppression");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppression");
  const params = nonMaxSuppSanityCheck($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, null);
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
  const result = ENGINE.runKernel(NonMaxSuppressionV4, inputs, attrs);
  return { selectedIndices: result[0], validOutputs: result[1] };
}
var nonMaxSuppressionPadded = op({ nonMaxSuppressionPadded_ });

// src/tfjs-core/src/ops/image/resize_bilinear.ts
function resizeBilinear_(images, size, alignCorners = false, halfPixelCenters = false) {
  const $images = convertToTensor(images, "images", "resizeBilinear");
  assert($images.rank === 3 || $images.rank === 4, () => `Error in resizeBilinear: x must be rank 3 or 4, but got rank ${$images.rank}.`);
  assert(size.length === 2, () => `Error in resizeBilinear: new shape must 2D, but got shape ${size}.`);
  assert(halfPixelCenters === false || alignCorners === false, () => `Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`);
  let batchImages = $images;
  let reshapedTo4D = false;
  if ($images.rank === 3) {
    reshapedTo4D = true;
    batchImages = reshape($images, [1, $images.shape[0], $images.shape[1], $images.shape[2]]);
  }
  const [] = size;
  const inputs = { images: batchImages };
  const attrs = { alignCorners, halfPixelCenters, size };
  const res = ENGINE.runKernel(ResizeBilinear, inputs, attrs);
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var resizeBilinear = op({ resizeBilinear_ });

// src/tfjs-core/src/ops/image/resize_nearest_neighbor.ts
function resizeNearestNeighbor_(images, size, alignCorners = false, halfPixelCenters = false) {
  const $images = convertToTensor(images, "images", "resizeNearestNeighbor");
  assert($images.rank === 3 || $images.rank === 4, () => `Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${$images.rank}.`);
  assert(size.length === 2, () => `Error in resizeNearestNeighbor: new shape must 2D, but got shape ${size}.`);
  assert($images.dtype === "float32" || $images.dtype === "int32", () => "`images` must have `int32` or `float32` as dtype");
  assert(halfPixelCenters === false || alignCorners === false, () => `Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`);
  let batchImages = $images;
  let reshapedTo4D = false;
  if ($images.rank === 3) {
    reshapedTo4D = true;
    batchImages = reshape($images, [1, $images.shape[0], $images.shape[1], $images.shape[2]]);
  }
  const [] = size;
  const inputs = { images: batchImages };
  const attrs = { alignCorners, halfPixelCenters, size };
  const res = ENGINE.runKernel(ResizeNearestNeighbor, inputs, attrs);
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
  assert($image.rank === 3, () => `Error in threshold: image must be rank 3,but got rank ${$image.rank}.`);
  assert($image.shape[2] === 3 || $image.shape[2] === 1, () => `Error in threshold: image color channel must be equal to 3 or 1but got ${$image.shape[2]}.`);
  assert($image.dtype === "int32" || $image.dtype === "float32", () => `Error in dtype: image dtype must be int32 or float32,but got dtype ${$image.dtype}.`);
  assert(method === "otsu" || method === "binary", () => `Method must be binary or otsu, but was ${method}`);
  if ($image.shape[2] === 3) {
    [r, g, b] = split($image, [1, 1, 1], -1);
    const $r = mul(r, RED_INTENCITY_COEF);
    const $g = mul(g, GREEN_INTENCITY_COEF);
    const $b = mul(b, BLUE_INTENCITY_COEF);
    grayscale = add2(add2($r, $g), $b);
  } else {
    grayscale = image;
  }
  if (method === "otsu") {
    const $histogram = bincount(cast(round2(grayscale), "int32"), tensor([]), 256);
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
    const meanSecAdd = add2(range(0, classSecond.size), meanSecFill);
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
  assert($image.rank === 4, () => `Error in transform: image must be rank 4,but got rank ${$image.rank}.`);
  assert($transforms.rank === 2 && ($transforms.shape[0] === $image.shape[0] || $transforms.shape[0] === 1) && $transforms.shape[1] === 8, () => `Error in transform: Input transform should be batch x 8 or 1 x 8`);
  assert(outputShape == null || outputShape.length === 2, () => `Error in transform: outputShape must be [height, width] or null, but got ${outputShape}.`);
  const inputs = { image: $image, transforms: $transforms };
  const attrs = { interpolation, fillMode, fillValue, outputShape };
  return ENGINE.runKernel(Transform, inputs, attrs);
}
var transform = op({ transform_ });

// src/tfjs-core/src/ops/linalg/band_part.ts
function bandPart_(a, numLower, numUpper) {
  assert(numLower % 1 === 0, () => `bandPart(): numLower must be an integer, got ${numLower}.`);
  assert(numUpper % 1 === 0, () => `bandPart(): numUpper must be an integer, got ${numUpper}.`);
  const $a = convertToTensor(a, "a", "bandPart");
  assert($a.rank >= 2, () => `bandPart(): Rank must be at least 2, got ${$a.rank}.`);
  const shape = $a.shape;
  const [M, N] = $a.shape.slice(-2);
  if (!(numLower <= M)) {
    throw new Error(`bandPart(): numLower (${numLower}) must not be greater than the number of rows (${M}).`);
  }
  if (!(numUpper <= N)) {
    throw new Error(`bandPart(): numUpper (${numUpper}) must not be greater than the number of columns (${N}).`);
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
  const inBand = logicalAnd(lessEqual(ij, scalar(+numLower, "int32")), greaterEqual(ij, scalar(-numUpper, "int32")));
  const zero = zeros([M, N], $a.dtype);
  return reshape(stack(unstack(reshape($a, [-1, M, N])).map((mat) => where(inBand, mat, zero))), shape);
}
var bandPart = op({ bandPart_ });

// src/tfjs-core/src/ops/linalg/gram_schmidt.ts
function gramSchmidt_(xs) {
  let inputIsTensor2D;
  if (Array.isArray(xs)) {
    inputIsTensor2D = false;
    assert(xs != null && xs.length > 0, () => "Gram-Schmidt process: input must not be null, undefined, or empty");
    const dim = xs[0].shape[0];
    for (let i = 1; i < xs.length; ++i) {
      assert(xs[i].shape[0] === dim, () => `Gram-Schmidt: Non-unique lengths found in the input vectors: (${xs[i].shape[0]} vs. ${dim})`);
    }
  } else {
    inputIsTensor2D = true;
    xs = split(xs, xs.shape[0], 0).map((x) => squeeze(x, [0]));
  }
  assert(xs.length <= xs[0].shape[0], () => `Gram-Schmidt: Number of vectors (${xs.length}) exceeds number of dimensions (${xs[0].shape[0]}).`);
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
  assert(x.rank >= 2, () => `qr() requires input tensor to have a rank >= 2, but got rank ${x.rank}`);
  if (x.rank === 2) {
    return qr2d(x, fullMatrices);
  } else {
    const outerDimsProd = x.shape.slice(0, x.shape.length - 2).reduce((value, prev) => value * prev);
    const x2ds = unstack(reshape(x, [
      outerDimsProd,
      x.shape[x.shape.length - 2],
      x.shape[x.shape.length - 1]
    ]), 0);
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
    assert(x.shape.length === 2, () => `qr2d() requires a 2D Tensor, but got a ${x.shape.length}D Tensor.`);
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
          w = concat([
            one2D,
            slice(wPre, [1, 0], [wPre.shape[0] - 1, wPre.shape[1]])
          ], 0);
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
  assertShapesMatch($labels.shape, $predictions.shape, "Error in absoluteDifference: ");
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
  assertShapesMatch($labels.shape, $predictions.shape, "Error in cosineDistance: ");
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
  const losses = add2(mul(scalar(0.5), square(quadratic)), mul(deltaScalar, linear));
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
  const l1 = neg(mul($labels, log2(add2($predictions, epsilonScalar))));
  const l2 = mul(sub(one, $labels), log2(add2(sub(one, $predictions), epsilonScalar)));
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
  assertShapesMatch($labels.shape, $predictions.shape, "Error in meanSquaredError: ");
  const losses = squaredDifference($labels, $predictions);
  return computeWeightedLoss(losses, $weights, reduction);
}
var meanSquaredError = op({ meanSquaredError_ });

// src/tfjs-core/src/ops/losses/sigmoid_cross_entropy.ts
function sigmoidCrossEntropyWithLogits_(labels, logits) {
  const $labels = convertToTensor(labels, "labels", "sigmoidCrossEntropyWithLogits");
  const $logits = convertToTensor(logits, "logits", "sigmoidCrossEntropyWithLogits");
  assertShapesMatch($labels.shape, $logits.shape, "Error in sigmoidCrossEntropyWithLogits: ");
  const maxOutput = relu($logits);
  const outputXTarget = mul($logits, $labels);
  const sigmoidOutput = log1p(exp(neg(abs($logits))));
  return add2(sub(maxOutput, outputXTarget), sigmoidOutput);
}
function sigmoidCrossEntropy_(multiClassLabels, logits, weights, labelSmoothing = 0, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  let $multiClassLabels = convertToTensor(multiClassLabels, "multiClassLabels", "sigmoidCrossEntropy");
  const $logits = convertToTensor(logits, "logits", "sigmoidCrossEntropy");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "sigmoidCrossEntropy");
  }
  assertShapesMatch($multiClassLabels.shape, $logits.shape, "Error in sigmoidCrossEntropy: ");
  if (labelSmoothing > 0) {
    const labelSmoothingScalar = scalar(labelSmoothing);
    const one = scalar(1);
    const half = scalar(0.5);
    $multiClassLabels = add2(mul($multiClassLabels, sub(one, labelSmoothingScalar)), mul(half, labelSmoothingScalar));
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
    throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${logits.rank} and dim was ${dim}`);
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
        mul(reshape(dy, dyShape), sub(cast(labels3, "float32"), exp(logResult2))),
        mul(reshape(dy, dyShape), sub(exp(logResult2), cast(labels3, "float32")))
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
  assertShapesMatch($onehotLabels.shape, $logits.shape, "Error in softmaxCrossEntropy: ");
  if (labelSmoothing > 0) {
    const labelSmoothingScalar = scalar(labelSmoothing);
    const one = scalar(1);
    const numClasses = scalar($onehotLabels.shape[1]);
    $onehotLabels = add2(mul($onehotLabels, sub(one, labelSmoothingScalar)), div(labelSmoothingScalar, numClasses));
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
  const $defaultValue = convertToTensor(defaultValue, "defaultValue", "sparseFillEmptyRows", $values.dtype);
  if ($indices.rank !== 2) {
    throw new Error(`Indices should be Tensor2D but received shape
        ${$indices.shape}`);
  }
  if ($values.rank !== 1) {
    throw new Error(`Values should be Tensor1D but received shape ${$values.shape}`);
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
    throw new Error(`New shape should be Tensor1D but received shape ${$newShape.shape}`);
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
    throw new Error(`Data should be at least 1 dimensional but received scalar`);
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
    throw new Error(`Data should be at least 1 dimensional but received scalar`);
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
    throw new Error(`Input should be Tensor1D but received shape ${$input.shape}`);
  }
  if ($delimiter.rank !== 0) {
    throw new Error(`Delimiter should be a scalar but received shape ${$delimiter.shape}`);
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
    throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`);
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
        const newAccumulatedGrad = add2(mul(accumulatedGrad, this.rho), mul(square(gradient), 1 - this.rho));
        const updates = mul(div(sqrt(add2(accumulatedUpdate, this.epsilon)), sqrt(add2(accumulatedGrad, this.epsilon))), gradient);
        const newAccumulatedUpdate = add2(mul(accumulatedUpdate, this.rho), mul(square(updates), 1 - this.rho));
        accumulatedGrad.assign(newAccumulatedGrad);
        accumulatedUpdate.assign(newAccumulatedUpdate);
        const newValue = add2(mul(updates, -this.learningRate), value);
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
    return [await this.saveIterations()].concat(variables.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const variableCount = weightValues.length / 2;
    const trainable = false;
    this.accumulatedGrads = weightValues.slice(0, variableCount).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
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
          variable: tidy(() => fill(value.shape, this.initialAccumulatorValue).variable(trainable))
        };
      }
      const gradient = Array.isArray(variableGradients) ? variableGradients[i].tensor : variableGradients[name];
      if (gradient == null) {
        return;
      }
      const accumulatedGrad = this.accumulatedGrads[i].variable;
      tidy(() => {
        const newAccumulatedGrad = add2(accumulatedGrad, square(gradient));
        accumulatedGrad.assign(newAccumulatedGrad);
        const newValue = add2(mul(div(gradient, sqrt(add2(newAccumulatedGrad, ENGINE.backend.epsilon()))), -this.learningRate), value);
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
    return [await this.saveIterations()].concat(this.accumulatedGrads.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const trainable = false;
    this.accumulatedGrads = weightValues.map((v) => ({ originalName: v.name, variable: v.tensor.variable(trainable) }));
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
        const newFirstMoment = add2(mul(firstMoment, this.beta1), mul(gradient, 1 - this.beta1));
        const newSecondMoment = add2(mul(secondMoment, this.beta2), mul(square(gradient), 1 - this.beta2));
        const biasCorrectedFirstMoment = div(newFirstMoment, oneMinusAccBeta1);
        const biasCorrectedSecondMoment = div(newSecondMoment, oneMinusAccBeta2);
        firstMoment.assign(newFirstMoment);
        secondMoment.assign(newSecondMoment);
        const newValue = add2(mul(div(biasCorrectedFirstMoment, add2(sqrt(biasCorrectedSecondMoment), this.epsilon)), -this.learningRate), value);
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
    return [await this.saveIterations()].concat(variables.map((v) => ({ name: v.originalName, tensor: v.variable })));
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
      variable: v.tensor.variable(trainable)
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
    return new cls(config["learningRate"], config["beta1"], config["beta2"], config["epsilon"]);
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
      const lr = div(-this.learningRate, add2(mul(this.iteration, this.decay), 1));
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
        const newFirstMoment = add2(mul(firstMoment, this.beta1), mul(gradient, 1 - this.beta1));
        const ut0 = mul(weightedInfNorm, this.beta2);
        const ut1 = abs(gradient);
        const newWeightedInfNorm = maximum(ut0, ut1);
        firstMoment.assign(newFirstMoment);
        weightedInfNorm.assign(newWeightedInfNorm);
        const newValue = add2(mul(div(lr, oneMinusAccBeta1), div(newFirstMoment, add2(newWeightedInfNorm, this.epsilon))), value);
        value.assign(newValue);
      });
      this.iteration.assign(add2(this.iteration, 1));
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
    return new cls(config["learningRate"], config["beta1"], config["beta2"], config["epsilon"], config["decay"]);
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
        const newValue = add2(mul(this.c, gradient), value);
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
        const newAccumulation = add2(mul(this.m, accumulation), gradient);
        if (this.useNesterov) {
          newValue = add2(mul(this.c, add2(gradient, mul(newAccumulation, this.m))), value);
        } else {
          newValue = add2(mul(this.c, newAccumulation), value);
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
    return [await this.saveIterations()].concat(this.accumulations.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const trainable = false;
    this.accumulations = weightValues.map((v) => ({ originalName: v.name, variable: v.tensor.variable(trainable) }));
  }
  getConfig() {
    return {
      "learningRate": this.learningRate,
      "momentum": this.momentum,
      "useNesterov": this.useNesterov
    };
  }
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["momentum"], config["useNesterov"]);
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
        const newAccumulatedMeanSquare = add2(mul(accumulatedMeanSquare, this.decay), mul(square(gradient), 1 - this.decay));
        if (this.centered) {
          const accumulatedMeanGrad = this.accumulatedMeanGrads[i].variable;
          const newAccumulatedMeanGrad = add2(mul(accumulatedMeanGrad, this.decay), mul(gradient, 1 - this.decay));
          const gradContribution = div(mul(gradient, this.learningRate), sqrt(sub(newAccumulatedMeanSquare, add2(square(newAccumulatedMeanGrad), this.epsilon))));
          const newAccumulatedMoments = add2(mul(accumulatedMoments, this.momentum), gradContribution);
          accumulatedMeanSquare.assign(newAccumulatedMeanSquare);
          accumulatedMeanGrad.assign(newAccumulatedMeanGrad);
          accumulatedMoments.assign(newAccumulatedMoments);
          const newValue = sub(value, newAccumulatedMoments);
          value.assign(newValue);
        } else {
          const newAccumulatedMeanSquare2 = add2(mul(accumulatedMeanSquare, this.decay), mul(square(gradient), 1 - this.decay));
          const newAccumulatedMoments = add2(mul(accumulatedMoments, this.momentum), div(mul(gradient, this.learningRate), sqrt(add2(newAccumulatedMeanSquare2, this.epsilon))));
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
    return [await this.saveIterations()].concat(variables.map((v) => ({ name: v.originalName, tensor: v.variable })));
  }
  async setWeights(weightValues) {
    weightValues = await this.extractIterations(weightValues);
    const variableCount = this.centered ? weightValues.length / 3 : weightValues.length / 2;
    const trainable = false;
    this.accumulatedMeanSquares = weightValues.slice(0, variableCount).map((v) => ({
      originalName: v.name,
      variable: v.tensor.variable(trainable)
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
    return new cls(config["learningRate"], config["decay"], config["momentum"], config["epsilon"], config["centered"]);
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
    return new RMSPropOptimizer(learningRate, decay, momentum, epsilon, centered);
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
  getReductionAxes: () => getReductionAxes,
  getReshaped: () => getReshaped,
  getReshapedPermuted: () => getReshapedPermuted,
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
  validateInput: () => validateInput,
  validateUpdateShape: () => validateUpdateShape,
  warn: () => warn
});

// src/tfjs-core/src/ops/concat_util.ts
function assertParamsConsistent(shapes, axis) {
  const rank = shapes[0].length;
  shapes.forEach((shape, i) => {
    assert(shape.length === rank, () => `Error in concat${rank}D: rank of tensors[${i}] must be the same as the rank of the rest (${rank})`);
  });
  assert(axis >= 0 && axis < rank, () => `Error in concat${rank}D: axis must be between 0 and ${rank - 1}.`);
  const firstShape = shapes[0];
  shapes.forEach((shape, i) => {
    for (let r = 0; r < rank; r++) {
      assert(r === axis || shape[r] === firstShape[r], () => `Error in concat${rank}D: Shape of tensors[${i}] (${shape}) does not match the shape of the rest (${firstShape}) along the non-concatenated axis ${i}.`);
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
function mergeRealAndImagArrays(real4, imag3) {
  if (real4.length !== imag3.length) {
    throw new Error(`Cannot merge real and imag arrays of different lengths. real:${real4.length}, imag: ${imag3.length}.`);
  }
  const result = new Float32Array(real4.length * 2);
  for (let i = 0; i < result.length; i += 2) {
    result[i] = real4[i / 2];
    result[i + 1] = imag3[i / 2];
  }
  return result;
}
function splitRealAndImagArrays(complex4) {
  const real4 = new Float32Array(complex4.length / 2);
  const imag3 = new Float32Array(complex4.length / 2);
  for (let i = 0; i < complex4.length; i += 2) {
    real4[i / 2] = complex4[i];
    imag3[i / 2] = complex4[i + 1];
  }
  return { real: real4, imag: imag3 };
}
function complexWithEvenIndex(complex4) {
  const len = Math.ceil(complex4.length / 4);
  const real4 = new Float32Array(len);
  const imag3 = new Float32Array(len);
  for (let i = 0; i < complex4.length; i += 4) {
    real4[Math.floor(i / 4)] = complex4[i];
    imag3[Math.floor(i / 4)] = complex4[i + 1];
  }
  return { real: real4, imag: imag3 };
}
function complexWithOddIndex(complex4) {
  const len = Math.floor(complex4.length / 4);
  const real4 = new Float32Array(len);
  const imag3 = new Float32Array(len);
  for (let i = 2; i < complex4.length; i += 4) {
    real4[Math.floor(i / 4)] = complex4[i];
    imag3[Math.floor(i / 4)] = complex4[i + 1];
  }
  return { real: real4, imag: imag3 };
}
function getComplexWithIndex(complex4, index) {
  const real4 = complex4[index * 2];
  const imag3 = complex4[index * 2 + 1];
  return { real: real4, imag: imag3 };
}
function assignToTypedArray(data, real4, imag3, index) {
  data[index * 2] = real4;
  data[index * 2 + 1] = imag3;
}
function exponents(n, inverse) {
  const real4 = new Float32Array(n / 2);
  const imag3 = new Float32Array(n / 2);
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    const x = (inverse ? 2 : -2) * Math.PI * (i / n);
    real4[i] = Math.cos(x);
    imag3[i] = Math.sin(x);
  }
  return { real: real4, imag: imag3 };
}
function exponent(k, n, inverse) {
  const x = (inverse ? 2 : -2) * Math.PI * (k / n);
  const real4 = Math.cos(x);
  const imag3 = Math.sin(x);
  return { real: real4, imag: imag3 };
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
  assert(inputString.indexOf(ELLIPSIS) === -1, () => `The ellipsis notation ("${ELLIPSIS}") is not supported yet.`);
  const inputTerms = inputString.split(COMMA);
  const numInputs = inputTerms.length;
  if (numTensors !== numInputs) {
    throw new Error(`Expected ${numInputs} input tensors, received ${numTensors}`);
  }
  if (numInputs > 2) {
    throw new Error("Support for more than 2 input tensors is not implemented yet.");
  }
  const allDims = [];
  for (let i = 0; i < outputString.length; ++i) {
    const dimName = outputString[i];
    if (!inputTerms.some((inputTerm) => inputTerm.indexOf(dimName) !== -1)) {
      throw new Error(`Output subscripts contain the label ${dimName} not present in the input subscripts.`);
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
      throw new Error(`Found duplicate axes in input component ${inputTerms[i]}. Support for duplicate axes in input is not implemented yet.`);
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
        assert(dimSizes[idDims[i][j]] === shape[j], () => `Expected dimension ${dimSizes[idDims[i][j]]} at axis ${j} of input shaped ${JSON.stringify(shape)}, but got dimension ${shape[j]}`);
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
    assert(x.shape[axis] % numOrSizeSplits === 0, () => "Number of splits must evenly divide the axis.");
    splitSizes = new Array(numOrSizeSplits).fill(x.shape[axis] / numOrSizeSplits);
  } else {
    const numOfNegs = numOrSizeSplits.reduce((count, value) => {
      if (value === -1) {
        count += 1;
      }
      return count;
    }, 0);
    assert(numOfNegs <= 1, () => "There should be only one negative value in split array.");
    const negIndex = numOrSizeSplits.indexOf(-1);
    if (negIndex !== -1) {
      const total = numOrSizeSplits.reduce((a, b) => b > 0 ? a + b : a);
      numOrSizeSplits[negIndex] = x.shape[axis] - total;
    }
    assert(x.shape[axis] === numOrSizeSplits.reduce((a, b) => a + b), () => "The sum of sizes must match the size of the axis dimension.");
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
      throw new Error(`x.shape[${i}]: ${x.shape[i]} should be equal to indices.shape[${i}]: ${indices.shape[i]}.`);
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
  } catch (err) {
    throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${err}`);
  }
}
function fromStringArrayToUint8(strings) {
  return strings.map((s) => encodeString(s));
}

// src/tfjs-core/src/backends/kernel_impls.ts
var kernel_impls_exports = {};
__export(kernel_impls_exports, {
  nonMaxSuppressionV3Impl: () => nonMaxSuppressionV3Impl,
  nonMaxSuppressionV4Impl: () => nonMaxSuppressionV4Impl,
  nonMaxSuppressionV5Impl: () => nonMaxSuppressionV5Impl,
  whereImpl: () => whereImpl
});

// src/tfjs-backend-webgpu/src/flags_webgpu.ts
var ENV3 = env();
ENV3.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE", () => 15);
ENV3.registerFlag("WEBGPU_CPU_FORWARD", () => true);
ENV3.registerFlag("WEBGPU_MATMUL_WORK_PER_THREAD", () => 4);
ENV3.registerFlag("WEBGPU_USE_NAIVE_CONV2D", () => false);
ENV3.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE", () => false);
ENV3.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER", () => false);
ENV3.registerFlag("WEBGPU_USE_LOW_POWER_GPU", () => false);
ENV3.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD", () => 1e3);
ENV3.registerFlag("WEBGPU_USE_PROFILE_TOOL", () => false);
ENV3.registerFlag("WEBGPU_USE_IMPORT", () => false);

// src/tfjs-backend-webgpu/src/shader_util.ts
function symbolicallyComputeStrides(indicesArr, variableName) {
  if (Math.max(...indicesArr) > 3) {
    throw new Error("Cannot symbolically compute strides for rank > 4 tensor.");
  }
  const numCoords = indicesArr.length;
  const shape = indicesArr.map((d) => `${variableName}[${d}]`);
  const strides = new Array(numCoords - 1);
  strides[numCoords - 2] = shape[numCoords - 1];
  for (let i = numCoords - 3; i >= 0; --i) {
    strides[i] = `(${strides[i + 1]} * ${shape[i + 1]})`;
  }
  return strides;
}

// src/tfjs-backend-webgpu/src/shader_preprocessor.ts
function getCoordsDataType(rank) {
  if (rank <= 1) {
    return "i32";
  } else if (rank === 2) {
    return `vec2<i32>`;
  } else if (rank === 3) {
    return `vec3<i32>`;
  } else if (rank === 4) {
    return `vec4<i32>`;
  } else {
    throw Error(`GPU for rank ${rank} is not yet supported`);
  }
}
function mapToWgslTypes(type, isVec4) {
  if (type === "float32") {
    return isVec4 ? "vec4<f32>" : "f32";
  } else if (type === "int32") {
    return isVec4 ? "vec4<i32>" : "i32";
  } else if (type === "bool") {
    return isVec4 ? "vec4<i32>" : "i32";
  }
  return type;
}
function getWorkGroupSizeString() {
  return `
  @stage(compute) @workgroup_size(workGroupSizeX, workGroupSizeY, workGroupSizeZ)
`;
}
function getMainHeaderString() {
  return `
  ${getWorkGroupSizeString()}
  fn main(@builtin(local_invocation_id) LocalId : vec3<u32>,
          @builtin(global_invocation_id) GlobalId : vec3<u32>,
          @builtin(num_workgroups) NumWorkgroups: vec3<u32>) {
    localId = LocalId;
    globalId = GlobalId;
    numWorkgroups = NumWorkgroups;
`;
}
function getMainHeaderAndGlobalIndexString() {
  return `
    ${getMainHeaderString()}
      let index = getGlobalIndex();
`;
}
function makeShader(inputInfo, outputData, program, isFromPixel = false) {
  const prefixSnippets = [];
  prefixSnippets.push(`
    let workGroupSizeX = ${program.workGroupSize[0]}u;
    let workGroupSizeY = ${program.workGroupSize[1]}u;
    let workGroupSizeZ = ${program.workGroupSize[2]}u;

    var<private> localId: vec3<u32>;
    var<private> globalId: vec3<u32>;
    var<private> numWorkgroups: vec3<u32>;

    // Only used when the y/z dimension of workgroup size is 1.
    fn getGlobalIndex() -> i32 {
      if (numWorkgroups.y == 1u && numWorkgroups.z == 1u) {
        return i32(globalId.x);
      }

      let localInvocationIndex = localId.z * workGroupSizeX * workGroupSizeY +
          localId.y * workGroupSizeX + localId.x;
      let workGroupID = (globalId - localId)/vec3<u32>(
          workGroupSizeX, workGroupSizeY, workGroupSizeZ);

      return i32((workGroupID.z * numWorkgroups.x * numWorkgroups.y +
        workGroupID.y * numWorkgroups.x + workGroupID.x) *
        (workGroupSizeX * workGroupSizeY * workGroupSizeZ) +
        localInvocationIndex);
    }
  `);
  if (isFromPixel === true) {
    prefixSnippets.push(`
      struct Matrix0 {
        numbers: array<${mapToWgslTypes(outputData.dtype, program.isVec4)}>;
      };
      struct Uniform {
        size            : i32;
        numChannels     : i32;
        outShapeStrides : vec2<i32>;
        dispatchSize    : vec3<u32>;
      };

      @group(0) @binding(0) var<storage, write> result : Matrix0;
      @group(0) @binding(2) var<uniform> uniforms: Uniform;
    `);
    return [
      commonSnippet,
      prefixSnippets.join("\n"),
      getCoordsFromIndexSnippet(outputData.shape),
      program.getUserCode()
    ].join("\n");
  }
  let uniformDeclaration = "struct Uniforms { NAN : f32; ";
  program.variableNames.forEach((x, i) => {
    uniformDeclaration += `${x.charAt(0).toLowerCase() + x.slice(1)}Shape : ${getCoordsDataType(inputInfo[i].shape.length)}; `;
  });
  uniformDeclaration += `outShape : ${getCoordsDataType(outputData.shape.length)} ; `;
  const stridesLength = outputData.shape.length - 1;
  uniformDeclaration += `
       outShapeStrides: ${getCoordsDataType(stridesLength)}; `;
  if (program.size) {
    uniformDeclaration += "size : i32; ";
  }
  if (program.uniforms) {
    uniformDeclaration += program.uniforms;
  }
  uniformDeclaration += "};";
  prefixSnippets.push(uniformDeclaration);
  if (program.atomic) {
    prefixSnippets.push(`
    struct Matrix0 {
        numbers: array<atomic<i32>>;
    };

    @group(0) @binding(0) var<storage, read_write> result : Matrix0;
  `);
  } else {
    prefixSnippets.push(`
    struct Matrix0 {
        numbers: array<${mapToWgslTypes(outputData.dtype, program.isVec4)}>;
    };

    @group(0) @binding(0) var<storage, write> result : Matrix0;
  `);
  }
  program.variableNames.forEach((x, i) => {
    prefixSnippets.push(`
    struct Matrix${1 + i} {
      numbers: array<${mapToWgslTypes(inputInfo[i].dtype, program.isVec4)}>;
    };
    @group(0) @binding(${1 + i}) var<storage, read> ${x} : Matrix${1 + i};
    `);
  });
  if (uniformDeclaration !== "") {
    prefixSnippets.push(`
    @group(0) @binding(${1 + program.variableNames.length}) var<uniform> uniforms : Uniforms;
    `);
  }
  const [coordsSnippet, dispatchLayoutRank] = getOutputCoordsSnippet(outputData.shape, program.dispatchLayout);
  const sources = [
    commonSnippet,
    prefixSnippets.join("\n"),
    getCoordsFromIndexSnippet(outputData.shape),
    coordsSnippet,
    getOutputIndexFromCoordsSnippet(outputData.shape.length)
  ];
  if (!program.atomic) {
    sources.push(setOutputSnippet(outputData.shape, outputData.dtype, program.isVec4));
  }
  if (dispatchLayoutRank === outputData.shape.length) {
    const inputSnippet = inputInfo.map((x) => getInputSnippet(x, outputData.shape, program.isVec4, program.dispatchLayout.x.length === outputData.shape.length)).join("\n");
    sources.push(inputSnippet);
  }
  sources.push(program.getUserCode());
  const source = sources.join("\n");
  return source;
}
var commonSnippet = `
  // Checks whether coordinates lie within the bounds of the shape.
  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {
    return all(coord >= vec2<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {
    return all(coord >= vec3<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {
    return all(coord >= vec4<i32>(0)) && all(coord < shape);
  }

  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {
    return coord;
  }
  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {
    return dot(coords, vec2<i32>(shape.y, 1));
  }
  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {
    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));
  }
  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
    return dot(coords, vec4<i32>(
        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
  }

  fn idiv(a: i32, b: i32, sign: f32) -> i32 {
    var res: i32 = a / b;
    let mod: i32 = a % b;
    if (sign < 0. && mod != 0) {
      res = res - 1;
    }
    return res;
  }

  // NaN defination in IEEE 754-1985 is :
  //   - sign = either 0 or 1.
  //   - biased exponent = all 1 bits.
  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).
  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers
  fn isnan(val: f32) -> bool {
    let floatToUint: u32 = bitcast<u32>(val);
    return (floatToUint & 0x7fffffffu) > 0x7f800000u;
  }
  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {
    return vec4<bool>(isnan(val[0]), isnan(val[1]), isnan(val[2]), isnan(val[3]));
  }
`;
function getOutputIndexFromCoordsSnippet(outRank) {
  let snippet = "";
  switch (outRank) {
    case 0:
    case 1:
      snippet += `
        fn getOutputIndexFromCoords(coords : i32) -> i32 {
          return coords;
        }
        `;
      break;
    case 2:
      snippet += `
        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {
          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));
        }
        `;
      break;
    case 3:
      snippet += `
        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {
          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));
        }
        `;
      break;
    case 4:
      snippet += `
        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
          return dot(coords, vec4<i32>(
            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));
        }
        `;
      break;
    default:
      util_exports.assert(false, () => `Unsupported ${outRank}D shape`);
      break;
  }
  return snippet;
}
function setOutputSnippet(outShape, outBufferType, isVec4) {
  const outRank = outShape.length;
  const wgslType = mapToWgslTypes(outBufferType, isVec4);
  let snippet;
  if (isVec4) {
    snippet = `fn setOutputAtIndex(flatIndex : i32, value : vec4<f32>) {
      result.numbers[flatIndex] = ${wgslType}(value);
    }
    fn setOutputAtIndexI32(flatIndex : i32, value : vec4<i32>) {
      result.numbers[flatIndex] = ${wgslType}(value);
    }`;
  } else {
    snippet = `fn setOutputAtIndex(flatIndex : i32, value : f32) {
      result.numbers[flatIndex] = ${wgslType}(value);
    }
    fn setOutputAtIndexI32(flatIndex : i32, value : i32) {
      result.numbers[flatIndex] = ${wgslType}(value);
    }`;
  }
  if (outRank >= 2) {
    const dims = ["d0", "d1", "d2", "d3"].slice(0, outRank);
    const type = getCoordsDataType(outRank);
    if (isVec4) {
      snippet += `
      fn setOutputAtCoords(${dims.map((d) => `${d} : i32`).join(", ")}, value : vec4<f32>) {
        let flatIndex = getOutputIndexFromCoords(${type}(${dims.join(", ")}));
        setOutputAtIndex(flatIndex / 4, value);
      }
      fn setOutputAtCoordsI32(${dims.map((d) => `${d} : i32`).join(", ")}, value : vec4<i32>) {
        let flatIndex = getOutputIndexFromCoords(${type}(${dims.join(", ")}));
        setOutputAtIndexI32(flatIndex / 4, value);
      }
    `;
    } else {
      snippet += `
      fn setOutputAtCoords(${dims.map((d) => `${d} : i32`).join(", ")}, value : f32) {
        let flatIndex = getOutputIndexFromCoords(${type}(${dims.join(", ")}));
        setOutputAtIndex(flatIndex, value);
      }
      fn setOutputAtCoordsI32(${dims.map((d) => `${d} : i32`).join(", ")}, value : i32) {
        let flatIndex = getOutputIndexFromCoords(${type}(${dims.join(", ")}));
        setOutputAtIndexI32(flatIndex, value);
      }
    `;
    }
  }
  return snippet;
}
function getInputSnippet(inputInfo, outShape, isVec4, isFlatDispatchLayout) {
  let res = getInputAtCoordsSnippet(inputInfo, isVec4);
  const inShape = inputInfo.shape;
  if (inShape.length <= outShape.length) {
    res += getInputByOutputSnippet(inputInfo, outShape, isVec4, isFlatDispatchLayout);
  }
  return res;
}
function getInputAtCoordsSnippet(inputInfo, isVec4) {
  const texName = inputInfo.name;
  const rank = inputInfo.shape.length;
  const type = getCoordsDataType(rank);
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const dims = ["d0", "d1", "d2", "d3"].slice(0, rank);
  const inputs = dims.map((d) => `${d} : i32`).join(", ");
  if (rank < 1) {
    if (isVec4) {
      return `
        fn ${funcName}() -> vec4<f32> {
          return vec4<f32>(${texName}.numbers[0]);
        }
      `;
    }
    return `
      fn ${funcName}() ->f32 {
        return f32(${texName}.numbers[0]);
      }
    `;
  }
  const shapeStr = `uniforms.${texName.charAt(0).toLowerCase() + texName.slice(1)}Shape`;
  let rankStr = `${rank}D`;
  if (rank === 0) {
    rankStr = "1D";
  }
  if (isVec4) {
    return `
      fn ${funcName}(${inputs}) -> vec4<f32> {
        return vec4<f32>(${texName}.numbers[getIndexFromCoords${rankStr}(${type}(${dims.join(",")}),
          ${shapeStr}) / 4]);
      }
      `;
  }
  return `
    fn ${funcName}(${inputs}) -> f32 {
      return f32(${texName}.numbers[getIndexFromCoords${rankStr}(${type}(${dims.join(",")}),
        ${shapeStr})]);
    }
   `;
}
function getInputByOutputSnippet(inputInfo, outShape, isVec4, isFlatDispatchLayout) {
  const texName = inputInfo.name;
  const texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
  const funcName = "get" + texFuncSnippet + "ByOutput";
  const inRank = inputInfo.shape.length;
  const outRank = outShape.length;
  const type = getCoordsDataType(outRank);
  if (util_exports.arraysEqual(inputInfo.shape, outShape) && isFlatDispatchLayout) {
    if (isVec4) {
      return `
        fn ${funcName}Index(globalIndex : i32) -> vec4<f32> {
          return vec4<f32>(${texName}.numbers[globalIndex]);
        }

        fn ${funcName}Coords(coords : ${type}) -> vec4<f32> {
          return vec4<f32>(${texName}.numbers[${outRank > 1 ? "getOutputIndexFromCoords(coords)" : "coords"} / 4]);
        }
        `;
    } else {
      return `
      fn ${funcName}Index(globalIndex : i32) -> f32 {
        return f32(${texName}.numbers[globalIndex]);
      }

      fn ${funcName}Coords(coords : ${type}) -> f32 {
        return f32(${texName}.numbers[${outRank > 1 ? "getOutputIndexFromCoords(coords)" : "coords"}]);
      }
      `;
    }
  }
  const broadcastDims = backend_util_exports.getBroadcastDims(inputInfo.shape, outShape);
  const rankDiff = outRank - inRank;
  let coordsSnippet = "";
  if (inRank === 0) {
    if (isVec4) {
      return `
      fn ${funcName}Index(globalIndex : i32) -> vec4<f32> {
        return get${texFuncSnippet}();
      }

      fn ${funcName}Coords(coords : ${type}) -> vec4<f32> {
        return get${texFuncSnippet}();
      }
    `;
    }
    return `
      fn ${funcName}Index(globalIndex : i32) -> f32{
        return get${texFuncSnippet}();
      }

      fn ${funcName}Coords(coords : ${type}) -> f32{
        return get${texFuncSnippet}();
      }
    `;
  } else {
    if (outRank < 2 && broadcastDims.length >= 1) {
      coordsSnippet = "coords = 0;";
    } else {
      coordsSnippet = broadcastDims.map((d) => `coords[${d + rankDiff}] = 0;`).join("\n");
    }
  }
  let unpackedCoordsSnippet = "";
  if (outRank < 2 && inRank > 0) {
    unpackedCoordsSnippet = "coords";
  } else {
    if (outRank > 1) {
      const coordsType = getCoordsDataType(inRank);
      const coordsValues = inputInfo.shape.map((s, i) => `coords[${i + rankDiff}]`).join(", ");
      unpackedCoordsSnippet = `${coordsType}(${coordsValues})`;
    } else {
      unpackedCoordsSnippet = "coords";
    }
  }
  const shapeStr = `uniforms.${texName.charAt(0).toLowerCase() + texName.slice(1)}Shape`;
  const rankStr = `${inRank}D`;
  if (isVec4) {
    return `
      fn ${funcName}Index(globalIndex : i32) -> vec4<f32> {
        var coords = getCoordsFromIndex(globalIndex);
        ${coordsSnippet}
        return ${texName}.numbers[getIndexFromCoords${rankStr}(${unpackedCoordsSnippet}, ${shapeStr}) / 4];
      }

      fn ${funcName}Coords(coordsIn : ${type}) -> vec4<f32> {
        var coords = coordsIn;
        ${coordsSnippet}
        return ${texName}.numbers[getIndexFromCoords${rankStr}(${unpackedCoordsSnippet}, ${shapeStr}) / 4];
      }
    `;
  }
  return `
    fn ${funcName}Index(globalIndex : i32) -> f32 {
      var coords = getCoordsFromIndex(globalIndex);
      ${coordsSnippet}
      return f32(${texName}.numbers[getIndexFromCoords${rankStr}(${unpackedCoordsSnippet}, ${shapeStr})]);
    }

    fn ${funcName}Coords(coordsIn : ${type}) -> f32 {
      var coords = coordsIn;
      ${coordsSnippet}
      return f32(${texName}.numbers[getIndexFromCoords${rankStr}(${unpackedCoordsSnippet}, ${shapeStr})]);
    }
  `;
}
function getOutputCoordsSnippet(outShape, dispatchLayout) {
  const { x, y = [], z = [] } = dispatchLayout;
  const outRank = outShape.length;
  if (x.length === outRank) {
    const dtype2 = getCoordsDataType(outRank);
    const snippet2 = `fn getOutputCoords() -> ${dtype2}{
      let globalIndex = getGlobalIndex();
      return getCoordsFromIndex(globalIndex);
    }
    `;
    return [snippet2, outRank];
  }
  let gatherDimensionsStr = "";
  const dims = [x, y, z];
  let rank = 0;
  for (let i = 0; i < dims.length; i++) {
    const arr = dims[i];
    if (arr.length === 0) {
      continue;
    }
    rank += arr.length;
    if (arr.length === 1) {
      gatherDimensionsStr += `let d${arr[0]} = i32(globalId[${i}]);`;
    } else {
      const strides = symbolicallyComputeStrides(arr, "uniforms.outShape");
      gatherDimensionsStr += `var index${i} = i32(globalId[${i}]);`;
      for (let j = 0; j < strides.length; j++) {
        gatherDimensionsStr += `let d${arr[j]} = index${i} / ${strides[j]};`;
        if (j === strides.length - 1) {
          gatherDimensionsStr += `let d${arr[j + 1]} = index${i} - d${arr[j]} * ${strides[j]};`;
        } else {
          gatherDimensionsStr += `index${i} = index${i} - d${arr[j]} * ${strides[j]};`;
        }
      }
    }
  }
  const dimensions = [];
  for (let i = 0; i < rank; i++) {
    dimensions.push(`d${i}`);
  }
  const dtype = getCoordsDataType(rank);
  let snippet = `fn getOutputCoords() -> ${dtype} {
    ${gatherDimensionsStr}
  `;
  if (dimensions.length === 0) {
    snippet += `return ${dtype}(0); }`;
  } else {
    snippet += `return ${dtype}(${dimensions.join(",")}); }`;
  }
  return [snippet, rank];
}
function getCoordsFromIndexSnippet(shape) {
  const rank = shape.length;
  if (rank <= 1) {
    return `fn getCoordsFromIndex(index : i32) -> i32 { return index; }`;
  }
  const strides = util_exports.computeStrides(shape);
  const dtype = getCoordsDataType(rank);
  const coords2 = [];
  for (let i = 0; i < rank; i++) {
    coords2.push(`d${i}`);
  }
  if (strides.length === 1) {
    return `    fn getCoordsFromIndex(index : i32) -> vec2<i32> {
      let d0 = index / uniforms.outShapeStrides; let d1 = index - d0 * uniforms.outShapeStrides;
      return vec2<i32>(d0, d1);
    }`;
  }
  const snippet = "var index2 = index;" + strides.map((_, i) => {
    const line1 = `let ${coords2[i]} = index2 / uniforms.outShapeStrides[${i}]`;
    const line2 = i === strides.length - 1 ? `let ${coords2[i + 1]} = index2 - ${coords2[i]} * uniforms.outShapeStrides[${i}]` : `index2 = index2 - ${coords2[i]} * uniforms.outShapeStrides[${i}]`;
    return `${line1}; ${line2};`;
  }).join("");
  return `
    fn getCoordsFromIndex(index : i32) -> ${dtype} {
      ${snippet}
      return ${dtype}(${coords2.join(",")});
    }
  `;
}

// src/tfjs-backend-webgpu/src/webgpu_util.ts
var webgpu_util_exports = {};
__export(webgpu_util_exports, {
  ArrayBufferToTypedArray: () => ArrayBufferToTypedArray,
  GPUBytesPerElement: () => GPUBytesPerElement,
  computeDispatch: () => computeDispatch,
  computeWorkGroupSizeForConv2d: () => computeWorkGroupSizeForConv2d,
  computeWorkGroupSizeForMatMul: () => computeWorkGroupSizeForMatMul,
  computeWorkPerThreadForConv2d: () => computeWorkPerThreadForConv2d,
  flatDispatchLayout: () => flatDispatchLayout,
  isWebGPUSupported: () => isWebGPUSupported,
  tilesFitEvenlyIntoShape: () => tilesFitEvenlyIntoShape
});
var arrayProduct = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};
function tilesFitEvenlyIntoShape(tileSize, shape) {
  if (tileSize.length !== shape.length) {
    throw new Error(`Cannot compute whether rank ${tileSize.length} tiles fit evenly into rank ${shape.length} shape - ranks must match.`);
  }
  return shape.every((dim, dimIdx) => dim % tileSize[dimIdx] === 0);
}
function computeDispatch(layout, outputShape, workGroupSize = [1, 1, 1], elementsPerThread = [1, 1, 1]) {
  const [dispatchX, dispatchY, dispatchZ] = [
    Math.ceil(arrayProduct(layout.x.map((d) => outputShape[d])) / (workGroupSize[0] * elementsPerThread[0])),
    layout.y ? Math.ceil(arrayProduct(layout.y.map((d) => outputShape[d])) / (workGroupSize[1] * elementsPerThread[1])) : 1,
    layout.z ? Math.ceil(arrayProduct(layout.z.map((d) => outputShape[d])) / (workGroupSize[2] * elementsPerThread[2])) : 1
  ];
  return [dispatchX, dispatchY, dispatchZ];
}
function computeWorkGroupSizeForConv2d(layout, outputShape) {
  const dim0 = arrayProduct(layout.x.map((d) => outputShape[d]));
  const dim1 = arrayProduct(layout.y.map((d) => outputShape[d]));
  if (dim0 <= 4) {
    return [4, 16, 1];
  }
  if (dim1 <= 4) {
    return [16, 4, 1];
  }
  return [16, 16, 1];
}
function computeWorkGroupSizeForMatMul(dimAOuter, dimInner, dimBOuter) {
  if (dimAOuter === 1) {
    return [32, 1, 1];
  } else if (dimBOuter === 1) {
    return [1, 32, 1];
  }
  return [8, 8, 1];
}
function computeWorkPerThreadForConv2d(layout, outputShape) {
  const dim0 = arrayProduct(layout.x.map((d) => outputShape[d]));
  const dim1 = arrayProduct(layout.y.map((d) => outputShape[d]));
  if (dim0 <= 4) {
    return [1, 2, 1];
  }
  if (dim1 <= 4) {
    return [2, 1, 1];
  }
  return [2, 2, 1];
}
function flatDispatchLayout(shape) {
  return { x: shape.map((d, i) => i) };
}
function GPUBytesPerElement(dtype) {
  if (dtype === "float32" || dtype === "int32" || dtype === "bool" || dtype === "string") {
    return 4;
  } else if (dtype === "complex64") {
    return 8;
  } else {
    throw new Error(`Unknown dtype ${dtype}`);
  }
}
function ArrayBufferToTypedArray(data, dtype) {
  if (dtype === "float32") {
    return new Float32Array(data);
  } else if (dtype === "int32") {
    return new Int32Array(data);
  } else if (dtype === "bool" || dtype === "string") {
    return Uint8Array.from(new Int32Array(data));
  } else {
    throw new Error(`Unknown dtype ${dtype}`);
  }
}
function isWebGPUSupported() {
  return (typeof window !== "undefined" || typeof WorkerGlobalScope !== "undefined") && !!navigator.gpu;
}

// src/tfjs-backend-webgpu/src/binary_op_util.ts
var ADD = "return a + b;";
var COMPLEX_MULTIPLY_REAL = "return areal * breal - aimag * bimag;";
var COMPLEX_MULTIPLY_IMAG = "return areal * bimag + aimag * breal;";
var DIV = "return a / b;";
var MUL = "return a * b;";
var SQUARED_DIFFERENCE = "return (a - b) * (a - b);";
var SUB = "return a - b;";
var EQUAL = "return f32(a == b);";
var EQUAL_VEC4 = "return vec4<f32>(a == b);";
var GREATER = "return f32(a > b);";
var GREATER_VEC4 = "return vec4<f32>(a > b);";
var GREATER_EQUAL = "return f32(a >= b);";
var GREATER_EQUAL_VEC4 = "return vec4<f32>(a >= b);";
var LESS = "return f32(a < b);";
var LESS_VEC4 = "return vec4<f32>(a < b);";
var LESS_EQUAL = "return f32(a <= b);";
var LESS_EQUAL_VEC4 = "return vec4<f32>(a <= b);";
var LOGICAL_AND = "return f32(f32(a) >= 1.0 && f32(b) >= 1.0);";
var LOGICAL_AND_VEC4 = `return (vec4<f32>(a >= vec4<f32>(1.0)) *
  vec4<f32>(b >= vec4<f32>(1.0)));`;
var CHECK_NAN_SNIPPET = `
  if (isnan(a)) { return a; }
  if (isnan(b)) { return b; }
  `;
var CHECK_NAN_SNIPPET_VEC4 = `
  if (isNaN.r) {
    resultTemp.r = uniforms.NAN;
  }
  if (isNaN.g) {
    resultTemp.g = uniforms.NAN;
  }
  if (isNaN.b) {
    resultTemp.b = uniforms.NAN;
  }
  if (isNaN.a) {
    resultTemp.a = uniforms.NAN;
  }
  `;
var INT_DIV = `
  let s = sign(a) * sign(b);
  let ia = i32(round(a));
  let ib = i32(round(b));
  return f32(idiv(ia, ib, s));
  `;
var INT_DIV_VEC4 = `
  let ia = vec4<i32>(round(a));
  let ib = vec4<i32>(round(b));
  let cond = ib != vec4<i32>(0);
  var resultTemp = vec4<i32>(0);
  let s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    resultTemp[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    resultTemp[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    resultTemp[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    resultTemp[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4<f32>(resultTemp);
  `;
var NOT_EQUAL = "return f32(a != b);";
var NOT_EQUAL_VEC4 = "return vec4<f32>(a != b);";
var POW = `
  if(a < 0.0 && floor(b) < b) {
    return uniforms.NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  if (round(abs(b) % 2.0) != 1.0) {
    return pow(abs(a), b);
  }
  return sign(a) * pow(abs(a), b);
  `;
var POW_VEC4 = `
  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);
  let isModRound1 = vec4<f32>(isModRound1Bool);
  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);
  var resultTemp = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  let isExpZero = b == vec4<f32>(0.0);
  if (isExpZero.r) {
    resultTemp.r = 1.0;
  }
  if (isExpZero.g) {
    resultTemp.g = 1.0;
  }
  if (isExpZero.b) {
    resultTemp.b = 1.0;
  }
  if (isExpZero.a) {
    resultTemp.a = 1.0;
  }
  let isNaN = a < vec4<f32>(0.0) & floor(b) < b;
  ${CHECK_NAN_SNIPPET_VEC4}
  return resultTemp;
  `;
var PRELU = `if (a < 0.0) { return b * a; }  return a;`;
var PRELU_VEC4 = `
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
  `;
function getMinMaxString(op2, useVec4) {
  const checkNanSnippet = useVec4 ? CHECK_NAN_SNIPPET_VEC4 : CHECK_NAN_SNIPPET;
  return useVec4 ? `
    var resultTemp = vec4<f32>(${op2}(a, b));
    let isNaN = isnanVec4(a) | isnanVec4(b);
    ` + checkNanSnippet + `
    return resultTemp;
  ` : checkNanSnippet + `
    return ${op2}(a, b);
  `;
}
function getBinaryOpString(type, useVec4) {
  switch (type) {
    case 0 /* MUL */:
      return MUL;
    case 1 /* ADD */:
      return ADD;
    case 2 /* SUB */:
      return SUB;
    case 3 /* DIV */:
      return DIV;
    case 4 /* EQUAL */:
      return useVec4 ? EQUAL_VEC4 : EQUAL;
    case 5 /* GREATER */:
      return useVec4 ? GREATER_VEC4 : GREATER;
    case 6 /* GREATER_EQUAL */:
      return useVec4 ? GREATER_EQUAL_VEC4 : GREATER_EQUAL;
    case 7 /* LESS */:
      return useVec4 ? LESS_VEC4 : LESS;
    case 8 /* LESS_EQUAL */:
      return useVec4 ? LESS_EQUAL_VEC4 : LESS_EQUAL;
    case 9 /* LOGICAL_AND */:
      return useVec4 ? LOGICAL_AND_VEC4 : LOGICAL_AND;
    case 10 /* NOT_EQUAL */:
      return useVec4 ? NOT_EQUAL_VEC4 : NOT_EQUAL;
    case 11 /* SQUARED_DIFFERENCE */:
      return SQUARED_DIFFERENCE;
    case 12 /* INT_DIV */:
      return useVec4 ? INT_DIV_VEC4 : INT_DIV;
    case 14 /* PRELU */:
      return useVec4 ? PRELU_VEC4 : PRELU;
    case 15 /* MAX */:
      return getMinMaxString("max", useVec4);
    case 16 /* MIN */:
      return getMinMaxString("min", useVec4);
    case 13 /* POW */:
      return useVec4 ? POW_VEC4 : POW;
    case 17 /* COMPLEX_MULTIPLY_REAL */:
      return COMPLEX_MULTIPLY_REAL;
    case 18 /* COMPLEX_MULTIPLY_IMAG */:
      return COMPLEX_MULTIPLY_IMAG;
    default:
      throw new Error(`BinaryType ${type} is not implemented!`);
  }
}

// src/tfjs-backend-webgpu/src/unary_op_util.ts
var ABS = `return abs(a);`;
var CEIL = `return ceil(a);`;
var COS = `return cos(a);`;
var COSH = `
  let e2x = exp(-a);
  return (e2x + 1.0 / e2x) / 2.0;
`;
var EXPM1 = `return exp(a) - 1.0;`;
var ELU = `if (a >= 0.0) { return a; }  return (exp(a) - 1.0);`;
var ELU_VEC4 = `
  var resFloat = exp(a) - vec4<f32>(1.0);
  if (a.r >= 0.0) {
    resFloat.r = a.r;
  }
  if (a.g >= 0.0) {
    resFloat.g = a.g;
  }
  if (a.b >= 0.0) {
    resFloat.b = a.b;
  }
  if (a.a >= 0.0) {
    resFloat.a = a.a;
  }
  return resFloat;
`;
var EXP = `return exp(a);`;
var FLOOR = `return floor(a);`;
var LINEAR = `return a;`;
var LOG = `if (a < 0.0) { return 1.0/0.0; }
  return log(a);`;
var LOGICAL_NOT = `return f32(!(a >= 1.0));`;
var NEG = `return -a;`;
var PRELU2 = `return (a < 0.0) ? b * a : a;`;
var LEAKYRELU = `if (a < 0.0) { return uniforms.alpha * a; } return a;`;
var RELU = `if(a < 0.0) { return 0.0; } return a;`;
var RELU6 = "return clamp(a, 0.0, 6.0);";
var RELU6_VEC4 = "return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));";
var RELU_VEC4 = `
  var resFloat = a * vec4<f32>(a >= vec4<f32>(0.0));
  let isNaN = isnanVec4(a);

  if (isNaN.r) {
    resFloat.r = a.r;
  }
  if (isNaN.g) {
    resFloat.g = a.g;
  }
  if (isNaN.b) {
    resFloat.b = a.b;
  }
  if (isNaN.a) {
    resFloat.a = a.a;
  }
  return resFloat;
`;
var RSQRT = `return 1.0/sqrt(a);`;
var SIGMOID = `return 1.0 / (1.0 + exp(-1.0 * a));`;
var SIN = `return sin(a);`;
var SINH = `
  let e2x = exp(a);
  return (e2x - 1.0 / e2x) / 2.0;
`;
var SQRT = `return sqrt(a);`;
var SQUARE = `return a * a;`;
var TANH = `
  let e2x = exp(-2.0 * abs(a));
  return sign(a) * (1.0 - e2x) / (1.0 + e2x);
`;
var TO_INT = `return f32(i32((a)));`;
function getUnaryOpString(type, useVec4) {
  switch (type) {
    case 0 /* ABS */:
      return ABS;
    case 2 /* COS */:
      return COS;
    case 3 /* COSH */:
      return COSH;
    case 1 /* CEIL */:
      return CEIL;
    case 4 /* ELU */:
      return useVec4 ? ELU_VEC4 : ELU;
    case 5 /* EXP */:
      return EXP;
    case 6 /* EXPM1 */:
      return EXPM1;
    case 7 /* FLOOR */:
      return FLOOR;
    case 8 /* LINEAR */:
      return LINEAR;
    case 9 /* LOG */:
      return LOG;
    case 10 /* LOGICAL_NOT */:
      return LOGICAL_NOT;
    case 11 /* NEG */:
      return NEG;
    case 12 /* PRELU */:
      return PRELU2;
    case 15 /* LEAKYRELU */:
      return LEAKYRELU;
    case 13 /* RELU */:
      return useVec4 ? RELU_VEC4 : RELU;
    case 14 /* RELU6 */:
      return useVec4 ? RELU6_VEC4 : RELU6;
    case 16 /* RSQRT */:
      return RSQRT;
    case 19 /* SIGMOID */:
      return SIGMOID;
    case 17 /* SIN */:
      return SIN;
    case 18 /* SINH */:
      return SINH;
    case 20 /* SQRT */:
      return SQRT;
    case 21 /* SQUARE */:
      return SQUARE;
    case 22 /* TANH */:
      return TANH;
    case 23 /* TO_INT */:
      return TO_INT;
    default:
      throw new Error(`BinaryType ${type} is not implemented!`);
  }
}

// src/tfjs-backend-webgpu/src/activation_util.ts
function mapActivationToShaderProgram(activation, packed = false) {
  if (activation === null) {
    return null;
  } else if (activation === "linear") {
    return getUnaryOpString(8 /* LINEAR */);
  } else if (activation === "relu") {
    return getUnaryOpString(13 /* RELU */, packed);
  } else if (activation === "elu") {
    return getUnaryOpString(4 /* ELU */, packed);
  } else if (activation === "relu6") {
    return getUnaryOpString(14 /* RELU6 */, packed);
  } else if (activation === "prelu") {
    return getBinaryOpString(14 /* PRELU */, packed);
  } else if (activation === "sigmoid") {
    return getUnaryOpString(19 /* SIGMOID */);
  }
  throw new Error(`Activation ${activation} has not been implemented for the WebGPU backend.`);
}

// src/tfjs-backend-webgpu/src/matmul_packed_vec4_webgpu.ts
function makeMatMulPackedVec4Source(workPerThread, tileAOuter, tileBOuter, tileInner) {
  util_exports.assert(tileInner % 4 === 0 && workPerThread[0] === 4, () => "tileInner must be divisible by 4. And ColPerThread must be 4");
  return `
  var<workgroup> mm_Asub : array<array<vec4<f32>, ${tileInner / workPerThread[0]}>, ${tileAOuter}>;
  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${tileBOuter / workPerThread[0]}>, ${tileInner}>;

  let RowPerThread = ${workPerThread[1]};
  let ColPerThread = ${workPerThread[0]};
  let TileInner = ${tileInner};

  ${getMainHeaderString()}

    let tileRow = ${tileAOuter === 1 ? "0" : "i32(localId.y) * RowPerThread"};
    let tileCol = i32(localId.x);

    let globalRow = ${tileAOuter === 1 ? "0" : "i32(globalId.y) * RowPerThread"};
    let globalCol = i32(globalId.x);
    let numTiles = (uniforms.dimInner - 1) / TileInner + 1;

    var acc: array<vec4<f32>, RowPerThread>;
    var ACached : vec4<f32>;
    var BCached : array<vec4<f32>, 4>;

    // Loop over shared dimension.
    var globalColA = tileCol;
    let RowPerThreadB = TileInner / i32(workGroupSizeY);
    let tileRowB = i32(localId.y) * RowPerThreadB;
    for (var t = 0; t < numTiles; t = t + 1) {
        // Load one tile of A into local memory.
        for (var innerRow = 0; innerRow < RowPerThread; innerRow = innerRow + 1) {
            let inputRow = tileRow + innerRow;
            let inputCol = tileCol;
            mm_Asub[inputRow][inputCol] = mm_readA(globalRow + innerRow, globalColA, globalId);
        }
        globalColA = globalColA + TileInner / ColPerThread;

        // Load one tile of B into local memory.
        for (var innerRow = 0; innerRow < RowPerThreadB; innerRow = innerRow + 1) {
            let inputRow = tileRowB + innerRow;
            let inputCol = tileCol;
            mm_Bsub[inputRow][inputCol] = mm_readB(t * TileInner + inputRow, globalCol, globalId);
        }

        workgroupBarrier();

        // Compute acc values for a single thread.
        for (var k = 0; k < TileInner / ColPerThread; k = k + 1) {
            BCached[0] = mm_Bsub[k * ColPerThread][tileCol];
            BCached[1] = mm_Bsub[k * ColPerThread + 1][tileCol];
            BCached[2] = mm_Bsub[k * ColPerThread + 2][tileCol];
            BCached[3] = mm_Bsub[k * ColPerThread + 3][tileCol];

            for (var i = 0; i < RowPerThread; i = i + 1) {
                ACached = mm_Asub[tileRow + i][k];
                acc[i] = BCached[0] * ACached.x + acc[i];
                acc[i] = BCached[1] * ACached.y + acc[i];
                acc[i] = BCached[2] * ACached.z + acc[i];
                acc[i] = BCached[3] * ACached.w + acc[i];
            }
        }

        workgroupBarrier();
    }

    for (var innerRow = 0; innerRow < RowPerThread; innerRow = innerRow + 1) {
        mm_write(globalRow + innerRow,
                 globalCol,
                 acc[innerRow], globalId);
    }
  }`;
}
var MatMulPackedVec4Program = class {
  constructor(aShape, outputShape, rowPerThread, bias = null, activation = null, preluActivationWeights = null) {
    this.variableNames = ["A", "B"];
    this.uniforms = `dimAOuter : i32; dimBOuter : i32; dimInner : i32;`;
    this.workGroupSize = [8, 8, 1];
    this.isVec4 = true;
    this.outputShape = outputShape;
    this.dispatchLayout = { x: [2], y: [1], z: [0] };
    if (outputShape[1] === 1) {
      this.elementsPerThread = [4, 1, 1];
    } else {
      this.elementsPerThread = [4, 4, 1];
    }
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, this.elementsPerThread);
    const addBias = bias != null;
    const hasPreluActivationWeights = preluActivationWeights != null;
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    this.tileAOuter = outputShape[1] === 1 ? 1 : this.workGroupSize[1] * this.elementsPerThread[1];
    this.tileBOuter = this.workGroupSize[0] * this.elementsPerThread[0];
    this.tileInner = this.tileBOuter;
    this.aShape = aShape;
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivationWeights = hasPreluActivationWeights;
    [this.fitA, this.fitB] = this.getShapeFit();
    this.shaderKey = `matMulPackedVec4_${this.activation}_${this.fitA}_${this.fitB}_${this.elementsPerThread}`;
  }
  getShapeFit() {
    const dimInner = this.aShape[2];
    const dimBOuter = this.outputShape[2];
    const bShape = [this.outputShape[0], dimInner, dimBOuter];
    const tileSizeA = [this.tileAOuter, this.tileInner];
    const tileSizeB = [this.tileInner, this.tileBOuter];
    return [
      tilesFitEvenlyIntoShape(tileSizeA, this.aShape.slice(1)),
      tilesFitEvenlyIntoShape(tileSizeB, bShape.slice(1))
    ];
  }
  getUserCode() {
    const sampleA = this.fitA ? `return A.numbers[batch * batchASize + row * uniforms.dimInner / 4 + col]` : `if (coordsInBounds2D(vec2<i32>(row, col * 4), vec2<i32>(uniforms.dimAOuter, uniforms.dimInner))) {
            return A.numbers[batch * batchASize + row * uniforms.dimInner / 4 + col];
        }
        return vec4<f32>(0.0)`;
    const sampleB = this.fitB ? `return B.numbers[batch * batchBSize + row * uniforms.dimBOuter / 4 + col]` : `if(coordsInBounds2D(vec2<i32>(row, col * 4), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {
             return B.numbers[batch * batchBSize + row * uniforms.dimBOuter / 4 + col];
        }
        return vec4<f32>(0.0)`;
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation, this.isVec4);
      if (this.hasPreluActivationWeights) {
        activationSnippet = `fn activation(a : vec4<f32>, outCoord : vec3<i32>) -> vec4<f32> {
                  let b = getPreluActivationWeightsByOutputCoords(outCoord);
                  ${activationOp}
                }`;
      } else {
        activationSnippet = `
            fn activation(a : vec4<f32>, outCoord : vec3<i32>) -> vec4<f32> {
              ${activationOp}
            }`;
      }
      applyActivationSnippet = "value = activation(value, outCoord);";
    }
    const addBiasSnippet = this.addBias ? "value = value + getBiasByOutputCoords(outCoord);" : "";
    const userCode = `
      ${activationSnippet}
      fn mm_readA(row : i32, col : i32,  globalId : vec3<u32>) -> vec4<f32> {
        let batchASize = uniforms.aShape[1] * uniforms.aShape[2] / 4;
        let batch = i32(globalId.z);
        ${sampleA};
      }

      fn mm_readB(row : i32, col : i32,  globalId : vec3<u32>) -> vec4<f32> {
        let batchBSize = uniforms.bShape[1] * uniforms.bShape[2] / 4;
        let batch = i32(globalId.z);
        ${sampleB};
      }

      fn mm_write(row : i32, col : i32, valueIn : vec4<f32>, globalId : vec3<u32>) {
        if (row < uniforms.aShape[1] && col * 4 < uniforms.bShape[2])
        {
          var value = valueIn;
          let batch = i32(globalId.z);
          let outCoord = vec3<i32>(batch, row, col * 4);
          ${addBiasSnippet}
          ${applyActivationSnippet}
          setOutputAtCoords(outCoord[0], outCoord[1], outCoord[2], value);
        }
      }
      ${makeMatMulPackedVec4Source(this.elementsPerThread, this.tileAOuter, this.tileBOuter, this.tileInner)}
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/matmul_packed_webgpu.ts
function makeMatMulPackedSource(workPerThread, workGroupSize) {
  const tileAOuter = workGroupSize[1] * workPerThread[1];
  const tileBOuter = workGroupSize[0] * workPerThread[0];
  const tileInner = tileAOuter > tileBOuter ? tileAOuter : tileBOuter;
  return `
    var<workgroup> mm_Asub : array<array<f32, ${tileInner}>, ${tileAOuter}>;
    var<workgroup> mm_Bsub : array<array<f32, ${tileBOuter}>, ${tileInner}>;
    ${getMainHeaderString()}
      let tileRow = i32(localId.y) * ${workPerThread[1]};
      let tileCol = i32(localId.x) * ${workPerThread[0]};

      let globalRow = i32(globalId.y) * ${workPerThread[1]};
      let globalCol = i32(globalId.x) * ${workPerThread[0]};

      let numTiles = (uniforms.dimInner - 1) / ${tileInner} + 1;

      var acc : array<array<f32, ${workPerThread[0]}>, ${workPerThread[1]}>;
      var ACached : f32;
      var BCached : array<f32, ${workPerThread[0]}>;

      // Without this initialization strange values show up in acc.
      for (var innerRow = 0; innerRow < ${workPerThread[1]}; innerRow = innerRow + 1) {
        for (var innerCol = 0; innerCol < ${workPerThread[0]}; innerCol = innerCol + 1) {
          acc[innerRow][innerCol] = 0.0;
        }
      }

      let ColPerThreadA = ${tileInner} / ${workGroupSize[0]};
      let tileColA = i32(localId.x) * ColPerThreadA;
      let RowPerThreadB = ${tileInner} / ${workGroupSize[1]};
      let tileRowB = i32(localId.y) * RowPerThreadB;

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t = t + 1) {
        // Load one tile of A into local memory.
        for (var innerRow = 0; innerRow < ${workPerThread[1]}; innerRow = innerRow + 1) {
          for (var innerCol = 0; innerCol < ColPerThreadA; innerCol = innerCol + 1) {
            let inputRow = tileRow + innerRow;
            let inputCol = tileColA + innerCol;

            mm_Asub[inputRow][inputCol] = mm_readA(
                globalRow + innerRow,
                t * ${tileInner} + inputCol, globalId);
          }
        }
        // Load one tile of B into local memory.
        for (var innerRow = 0; innerRow < RowPerThreadB; innerRow = innerRow + 1) {
          for (var innerCol = 0; innerCol < ${workPerThread[0]}; innerCol = innerCol + 1) {
            let inputRow = tileRowB + innerRow;
            let inputCol = tileCol + innerCol;

            mm_Bsub[inputRow][inputCol] = mm_readB(
              t * ${tileInner} + inputRow,
              globalCol + innerCol, globalId);
          }
        }

        workgroupBarrier();

        // Compute acc values for a single thread.
        for (var k = 0; k < ${tileInner}; k = k + 1) {
          for (var inner = 0; inner < ${workPerThread[0]}; inner = inner + 1) {
            BCached[inner] = mm_Bsub[k][tileCol + inner];
          }

          for (var innerRow = 0; innerRow < ${workPerThread[1]}; innerRow = innerRow + 1) {
            ACached = mm_Asub[tileRow + innerRow][k];
            for (var innerCol = 0; innerCol < ${workPerThread[0]}; innerCol = innerCol + 1) {
              acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
            }
          }
        }

        workgroupBarrier();
      }

      for (var innerRow = 0; innerRow < ${workPerThread[1]}; innerRow = innerRow + 1) {
        for (var innerCol = 0; innerCol < ${workPerThread[0]}; innerCol = innerCol + 1) {

          if ((globalCol + innerCol) < uniforms.dimBOuter &&
              (globalRow + innerRow) < uniforms.dimAOuter) {
            mm_write(globalRow + innerRow,
                     globalCol + innerCol,
                     acc[innerRow][innerCol], globalId);
          }
        }
      }
    }
  `;
}
function makeMatMulVectorSource(workGroupSize) {
  return `
    let TileSize = ${workGroupSize[0] * 4};
    var<workgroup> mm_Asub : array<vec4<f32>, ${workGroupSize[0]}>;

    ${getMainHeaderString()}
      let tileCol = i32(localId.x);
      let globalCol = i32(globalId.x);
      let globalRow = i32(globalId.y);

      let numTiles = (uniforms.dimInner - 1) / TileSize + 1;

      // Without this initialization strange values show up in acc.
      var acc = 0.0;

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t = t + 1) {
        // Load one tile of A into local memory.
        let colA = t * TileSize + tileCol * 4;
        mm_Asub[tileCol] = vec4<f32>(mm_readA(globalRow, colA, globalId),
                                mm_readA(globalRow, colA + 1, globalId),
                                mm_readA(globalRow, colA + 2, globalId),
                                mm_readA(globalRow, colA + 3, globalId));
        workgroupBarrier();

        // Compute acc values for a single thread.
        for (var k = 0; k < TileSize / 4; k = k + 1) {
          let rowB = t * TileSize + k * 4;
          let BCached = vec4<f32>(mm_readB(rowB, globalCol, globalId),
                              mm_readB(rowB + 1, globalCol, globalId),
                              mm_readB(rowB + 2, globalCol, globalId),
                              mm_readB(rowB + 3, globalCol, globalId));

          let ACached = mm_Asub[k];
          acc = acc + dot(ACached, BCached);
        }

        workgroupBarrier();
      }

      if (globalRow < uniforms.dimAOuter && globalCol < uniforms.dimBOuter) {
        mm_write(globalRow, globalCol, acc, globalId);
      }
    }
  `;
}
var MatMulPackedProgram = class {
  constructor(aShape, outputShape, workPerThread, transposeA = false, transposeB = false, bias = null, activation = null, preluActivationWeights = null) {
    this.variableNames = ["A", "B"];
    this.uniforms = `dimAOuter : i32; dimBOuter : i32; dimInner : i32;`;
    this.workGroupSize = [16, 16, 1];
    this.outputShape = outputShape;
    this.dispatchLayout = { x: [2], y: [1], z: [0] };
    const dimInner = transposeA ? aShape[1] : aShape[2];
    this.workGroupSize = computeWorkGroupSizeForMatMul(outputShape[1], dimInner, outputShape[2]);
    if (outputShape[1] === 1 || outputShape[2] === 1) {
      workPerThread = 1;
    }
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [workPerThread, workPerThread, 1]);
    if (util_exports.arraysEqual(this.dispatch, [1, 1, 1])) {
      workPerThread = 1;
      this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [workPerThread, workPerThread, 1]);
    }
    const addBias = bias != null;
    const hasPreluActivationWeights = preluActivationWeights != null;
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    this.workPerThread = workPerThread;
    this.aShape = aShape;
    this.transposeA = transposeA;
    this.transposeB = transposeB;
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivationWeights = hasPreluActivationWeights;
    const dimBOuter = this.outputShape[2];
    const bShape = this.transposeB ? [this.outputShape[0], dimBOuter, dimInner] : [this.outputShape[0], dimInner, dimBOuter];
    [this.fitA, this.fitB] = this.getShapeFit(bShape);
    this.shaderKey = `matMulPacked_${this.workPerThread}_${transposeA}_${transposeB}_${this.activation}_${this.fitA}_${this.fitB}_${this.outputShape[1] > 1}`;
  }
  getShapeFit(bShape) {
    const tileAOuter = this.workGroupSize[1] * this.workPerThread;
    const tileBOuter = this.workGroupSize[0] * this.workPerThread;
    let tileInner = tileAOuter > tileBOuter ? tileAOuter : tileBOuter;
    if (this.outputShape[1] === 1) {
      tileInner *= 4;
    }
    util_exports.assert(tileInner % this.workGroupSize[0] === 0 && tileInner % this.workGroupSize[1] === 0, () => `tileInner must be multiple of workgroupsize.x and workgroupsize.y`);
    const tileSizeA = [tileAOuter, tileInner];
    const tileSizeB = [tileInner, tileBOuter];
    return [
      tilesFitEvenlyIntoShape(tileSizeA, this.aShape.slice(1)),
      tilesFitEvenlyIntoShape(tileSizeB, bShape.slice(1))
    ];
  }
  getUserCode() {
    let sampleA;
    if (this.transposeA === false) {
      sampleA = this.fitA ? `return A.numbers[batch * batchASize + row * uniforms.dimInner + col];` : `if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimAOuter, uniforms.dimInner))) {
             return A.numbers[batch * batchASize + row * uniforms.dimInner + col];
           }
           return 0.0;`;
    } else {
      sampleA = this.fitA ? `return A.numbers[batch * batchASize + col * uniforms.dimAOuter + row];` : `if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimAOuter, uniforms.dimInner))) {
             return A.numbers[batch* batchASize + col * uniforms.dimAOuter + row];
           }
           return 0.0;`;
    }
    let sampleB;
    if (this.transposeB === false) {
      sampleB = this.fitB ? `return B.numbers[batch * batchBSize + row * uniforms.dimBOuter + col];` : `if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {
             return B.numbers[batch * batchBSize + row * uniforms.dimBOuter + col];
           }
           return 0.0;`;
    } else {
      sampleB = this.fitB ? `return B.numbers[batch * batchBSize + col * uniforms.dimInner + row];` : `if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {
             return B.numbers[batch * batchBSize + col * uniforms.dimInner + row];
           }
           return 0.0;`;
    }
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation, false);
      if (this.hasPreluActivationWeights) {
        activationSnippet = `fn activation(a : f32, outCoord : vec3<i32>) -> f32 {
               let b = getPreluActivationWeightsByOutputCoords(outCoord);
               ${activationOp}
            }`;
      } else {
        activationSnippet = `
              fn activation(a : f32, outCoord : vec3<i32>) -> f32 {
                ${activationOp}
              }
            `;
      }
      applyActivationSnippet = "value = activation(value, outCoord);";
    }
    const addBiasSnippet = this.addBias ? "value = value + getBiasByOutputCoords(outCoord);" : "";
    const userCode = `
      ${activationSnippet}

      fn mm_readA(row : i32, col : i32,  globalId : vec3<u32>) -> f32 {
        let batchASize = uniforms.aShape[1] * uniforms.aShape[2];
        let batch = i32(globalId.z);
        ${sampleA}
      }

      fn mm_readB(row : i32, col : i32,  globalId : vec3<u32>) -> f32 {
        let batch = i32(globalId.z);
        let batchBSize = uniforms.bShape[1] * uniforms.bShape[2];
        ${sampleB}
      }

      fn mm_write(row : i32, col : i32, valueIn : f32, globalId : vec3<u32>) {
        var value = valueIn;
        let batch = i32(globalId.z);
        let outCoord = vec3<i32>(batch, row, col);
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutputAtCoords(batch, row, col, value);
      }
      ${this.outputShape[1] > 1 ? makeMatMulPackedSource([this.workPerThread, this.workPerThread, 1], this.workGroupSize) : makeMatMulVectorSource(this.workGroupSize)}
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/matmul_reduce.ts
function makeMatMulReduceSource() {
  return `
    var<workgroup> sumValues : array<f32, workGroupSizeX>;
    ${getMainHeaderString()}
      let coords = getOutputCoords();
      let batch = coords[0];
      let row = coords[1];
      let col = coords[2];
      var sum = 0.0;
      let Length = uniforms.dimInner;
      for (var k = i32(localId.x); k < Length; k = k + i32(workGroupSizeX)) {
        let dataA = mm_readA(batch, row, k);
        let dataB = mm_readB(batch, k, col);
        sum = sum + dataA * dataB;
      }
      sumValues[localId.x] = sum;
      workgroupBarrier();

      for(var currentSize = workGroupSizeX / 2u; currentSize > 1u;
          currentSize = currentSize / 2u) {
        if (localId.x < currentSize)
        {
          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];
        }
        workgroupBarrier();
      }

      if (localId.x == 0u) {
        sum = sumValues[0] + sumValues[1];
        mm_write(batch, row, col, sum);
      }
    }
  `;
}
var MatMulReduceProgram = class {
  constructor(outputShape, transposeA = false, transposeB = false, bias = null, activation = null, preluActivationWeights = null) {
    this.variableNames = ["A", "B"];
    this.uniforms = `dimAOuter : i32; dimBOuter : i32; dimInner : i32;`;
    this.workGroupSize = [256, 1, 1];
    this.outputShape = outputShape;
    this.dispatchLayout = { x: [], y: [1, 2], z: [0] };
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    const addBias = bias != null;
    const hasPreluActivationWeights = preluActivationWeights != null;
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    this.transposeA = transposeA;
    this.transposeB = transposeB;
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivationWeights = hasPreluActivationWeights;
    this.shaderKey = `matMulReduce_${this.activation}_${transposeA}_${transposeB}`;
  }
  getUserCode() {
    let sampleA;
    if (this.transposeA === false) {
      sampleA = `return A.numbers[batch * batchASize + row * uniforms.dimInner + col];`;
    } else {
      sampleA = `return A.numbers[batch * batchASize + col * uniforms.dimAOuter + row];`;
    }
    let sampleB;
    if (this.transposeB === false) {
      sampleB = `return B.numbers[batch * batchBSize + row * uniforms.dimBOuter + col];`;
    } else {
      sampleB = `return B.numbers[batch * batchBSize + col * uniforms.dimInner + row];`;
    }
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation, false);
      if (this.hasPreluActivationWeights) {
        activationSnippet = `fn activation(a : f32, outCoord : vec3<i32>) -> f32 {
               let b = getPreluActivationWeightsByOutputCoords(outCoord);
               ${activationOp}
            }`;
      } else {
        activationSnippet = `
              fn activation(a : f32, outCoord : vec3<i32>) -> f32 {
                ${activationOp}
              }
            `;
      }
      applyActivationSnippet = "value = activation(value, outCoord);";
    }
    const addBiasSnippet = this.addBias ? "value = value + getBiasByOutputCoords(outCoord);" : "";
    const userCode = `
      ${activationSnippet}

      fn mm_readA(batch: i32, row : i32, col : i32) -> f32 {
        let batchASize = uniforms.aShape[1] * uniforms.aShape[2];
        ${sampleA}
      }

      fn mm_readB(batch: i32, row : i32, col : i32) -> f32 {
        let batchBSize = uniforms.bShape[1] * uniforms.bShape[2];
        ${sampleB}
      }

      fn mm_write(batch: i32, row : i32, col : i32, valueIn : f32) {
        var value = valueIn;
        let outCoord = vec3<i32>(batch, row, col);
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutputAtCoords(batch, row, col, value);
      }
      ${makeMatMulReduceSource()}
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/matmul_small_output_size_webgpu.ts
function makeMatMulSmallOutputSizeSource(workGroupSize) {
  const tileAOuter = workGroupSize[1] / 2;
  const tileBOuter = workGroupSize[0];
  const tileInner = tileAOuter > tileBOuter ? tileAOuter : tileBOuter;
  return `
  var<workgroup> mm_Asub1 : array<array<f32, ${tileInner}>, ${tileAOuter}>;
  var<workgroup> mm_Bsub1 : array<array<f32, ${tileBOuter}>, ${tileInner}>;
  var<workgroup> mm_Asub2 : array<array<f32, ${tileInner}>, ${tileAOuter}>;
  var<workgroup> mm_Bsub2 : array<array<f32, ${tileBOuter}>, ${tileInner}>;

  // If the output size is small for matrix multiplication, avoid to use vec4
  // and handle some elements per thread to optimally utilize the ALU.
  // Introduces two shared memory buffers, some logical threads could handle
  // arithmetic operations and others handle IO operations between barrier api,
  // makes ALUs and load/store units work simultaneously, could improves
  // the performance.
  ${getMainHeaderString()}
    let tileRow = i32(localId.y);
    let tileCol = i32(localId.x);
    let globalRow = i32(globalId.y);
    let globalCol = i32(globalId.x);

    // uniforms.dimInner should be greater than 0.
    let numTiles = (uniforms.dimInner - 1) / ${tileInner} + 1;
    var acc = 0.0;

    var globalColA = tileCol;
    var globalRowB = tileRow;
    for (var t = 0; t < numTiles; t = t + 1) {
      if (t == 0) {
        if (tileRow < ${tileAOuter}) {
          // Load one tile of A and B into local memory.
          // globalRow is always greater than or equal tileRow.
          mm_Asub1[tileRow][tileCol] =
              mm_readA((globalRow - tileRow) / 2 + tileRow, globalColA, globalId);
          globalColA = globalColA + ${tileInner};
          mm_Bsub1[tileRow][tileCol] = mm_readB(globalRowB, globalCol, globalId);
          globalRowB = globalRowB + ${tileInner};
        }
      } else {
        if (tileRow < ${tileAOuter}) {
          // Load one tile of A and B into local memory.
          // globalRow is always greater than or equal tileRow.
          mm_Asub1[tileRow][tileCol] =
              mm_readA((globalRow - tileRow) / 2 + tileRow, globalColA, globalId);
          globalColA = globalColA + ${tileInner};
          mm_Bsub1[tileRow][tileCol] = mm_readB(globalRowB, globalCol, globalId);
          globalRowB = globalRowB + ${tileInner};
        } else {
          // Compute acc values for a single thread.
          for (var k = 0; k < ${tileInner}; k = k + 1) {
            let subRow = tileRow - ${tileAOuter};
            if (subRow < 0) {
              continue;
            }
            acc = acc + mm_Asub2[subRow][k] * mm_Bsub2[k][tileCol];
          }
        }
      }
      workgroupBarrier();
      if (t != 0) {
        t = t + 1;
      }

      if (t < numTiles) {
        if (tileRow < ${tileAOuter}) {
          // Load one tile of A and B into local memory.
          // globalRow is always greater than or equal tileRow.
          mm_Asub2[tileRow][tileCol] =
              mm_readA((globalRow - tileRow) / 2 + tileRow, globalColA, globalId);
          globalColA = globalColA + ${tileInner};
          mm_Bsub2[tileRow][tileCol] = mm_readB(globalRowB, globalCol, globalId);
          globalRowB = globalRowB + ${tileInner};
        } else {
          // Compute acc values for a single thread.
          for (var k = 0; k < ${tileInner}; k = k + 1) {
            let subRow = tileRow - ${tileAOuter};
            if (subRow < 0) {
              continue;
            }
            acc = acc + mm_Asub1[subRow][k] * mm_Bsub1[k][tileCol];
          }
        }
      }
      workgroupBarrier();
    }
    let writeCol = (globalRow - tileRow) / 2 + tileRow - ${tileAOuter};
    if (tileRow >= ${tileAOuter} && writeCol >= 0) {
      mm_write(writeCol, globalCol, acc, globalId);
    }
  }
  `;
}
var MatMulSmallOutputSizeProgram = class {
  constructor(aShape, bShape, outputShape, bias = null, activation = null, preluActivationWeights = null) {
    this.variableNames = ["A", "B"];
    this.uniforms = `dimAOuter : i32; dimBOuter : i32; dimInner : i32;`;
    this.workGroupSize = [8, 16, 1];
    util_exports.assert(aShape[1] <= 16 || bShape[2] <= 16, () => "This program can be only used when A width or B Height are small");
    this.outputShape = outputShape;
    this.dispatchLayout = { x: [2], y: [1], z: [0] };
    this.dispatch = [
      Math.ceil(outputShape[2] / this.workGroupSize[0]),
      Math.ceil(outputShape[1] * 2 / this.workGroupSize[1]),
      outputShape[0]
    ];
    const addBias = bias != null;
    if (addBias) {
      this.variableNames.push("bias");
    }
    const hasPreluActivationWeights = preluActivationWeights != null;
    if (hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivationWeights = hasPreluActivationWeights;
    this.shaderKey = `matMulSmallOutputSize_${this.activation}`;
  }
  getUserCode() {
    const sampleA = `if (coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimAOuter, uniforms.dimInner))) {
          return A.numbers[batch * batchASize + row * uniforms.dimInner + col];
        }
        return 0.0;`;
    const sampleB = `if (coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {
           return B.numbers[batch * batchBSize + row * uniforms.dimBOuter + col];
         }
         return 0.0;`;
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation, false);
      if (this.hasPreluActivationWeights) {
        activationSnippet = `fn activation(a : f32, outCoord : vec3<i32>) -> f32 {
            let b = getPreluActivationWeightsByOutputCoords(outCoord);
            ${activationOp}
            }`;
      } else {
        activationSnippet = `fn activation(a : f32, outCoord : vec3<i32>) -> f32 {
            ${activationOp}
        }`;
      }
      applyActivationSnippet = "value = activation(value, outCoord);";
    }
    const addBiasSnippet = this.addBias ? "value = value + getBiasByOutputCoords(outCoord);" : "";
    const userCode = `
      ${activationSnippet}

      fn mm_readA(row : i32, col : i32,  globalId : vec3<u32>) -> f32 {
        let batchASize = uniforms.aShape[1] * uniforms.aShape[2];
        let batch = i32(globalId.z);
        ${sampleA}
      }
      fn mm_readB(row : i32, col : i32,  globalId : vec3<u32>) -> f32 {
        let batch = i32(globalId.z);
        let batchBSize = uniforms.bShape[1] * uniforms.bShape[2];
        ${sampleB}
      }
      fn mm_write(row : i32, col : i32, valueIn : f32, globalId : vec3<u32>) {
        if (coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimAOuter, uniforms.dimBOuter))) {
          let batch = i32(globalId.z);
          let outCoord = vec3<i32>(batch, row, col);
          var value = valueIn;
          ${addBiasSnippet}
          ${applyActivationSnippet}
          setOutputAtCoords(batch, row, col, value);
        }
      }
      ${makeMatMulSmallOutputSizeSource(this.workGroupSize)}
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Reshape.ts
function reshape2(args) {
  const { inputs, attrs } = args;
  const { x } = inputs;
  const { shape } = attrs;
  const xSize = util_exports.sizeFromShape(x.shape);
  const $shape = util_exports.inferFromImplicitShape(shape, xSize);
  const $xSize = util_exports.sizeFromShape($shape);
  util_exports.assert(xSize === $xSize, () => `The new shape (${$shape}) has ${$xSize} elements and the old shape (${x.shape}) has ${xSize} elements. The new shape and old shape must have the same number of elements.`);
  args.backend.incRef(x.dataId);
  return { dataId: x.dataId, shape: $shape, dtype: x.dtype };
}
var reshapeConfig = {
  kernelName: Reshape,
  backendName: "webgpu",
  kernelFunc: reshape2
};

// src/tfjs-backend-webgpu/src/kernels/BatchMatMul_impl.ts
function batchMatMulImpl({
  a,
  b,
  transposeA,
  transposeB,
  backend,
  bias = null,
  preluActivationWeights = null,
  leakyreluAlpha = 0,
  activation = null
}) {
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
  const outShapeOuterDims = broadcast_util_exports.assertAndGetBroadcastShape(a.shape.slice(0, -2), b.shape.slice(0, -2));
  const outShape = outShapeOuterDims.concat([outerShapeA, outerShapeB]);
  util_exports.assert(innerShapeA === innerShapeB, () => `Error in matMul: inner shapes (${innerShapeA}) and (${innerShapeB}) of Tensors with shapes ${a.shape} and ${b.shape} and transposeA=${transposeA} and transposeB=${transposeB} must match.`);
  const a3dShape = transposeA ? [batchDimA, innerShapeA, outerShapeA] : [batchDimA, outerShapeA, innerShapeA];
  const b3dShape = transposeB ? [batchDimB, outerShapeB, innerShapeB] : [batchDimB, innerShapeB, outerShapeB];
  const a3d = reshape2({ inputs: { x: a }, backend, attrs: { shape: a3dShape } });
  const b3d = reshape2({ inputs: { x: b }, backend, attrs: { shape: b3dShape } });
  const intermediates = [a3d, b3d];
  const batchDim = Math.max(batchDimA, batchDimB);
  const useVec4 = innerShapeA % 4 === 0 && outerShapeB % 4 === 0 && !transposeA && !transposeB && outerShapeB >= 32;
  let program;
  if (outerShapeA * outerShapeB <= 32) {
    program = new MatMulReduceProgram([batchDim, outerShapeA, outerShapeB], transposeA, transposeB, bias, activation, preluActivationWeights);
  } else if (!transposeA && !transposeB && (outerShapeA <= 16 && (outerShapeB <= 512 || innerShapeB >= 2 * outerShapeB) || outerShapeB <= 16 && (outerShapeA <= 512 || innerShapeA >= 2 * outerShapeA))) {
    program = new MatMulSmallOutputSizeProgram(a3dShape, b3dShape, [batchDim, outerShapeA, outerShapeB], bias, activation, preluActivationWeights);
  } else if (useVec4) {
    program = new MatMulPackedVec4Program(a3dShape, [batchDim, outerShapeA, outerShapeB], env().get("WEBGPU_MATMUL_WORK_PER_THREAD"), bias, activation, preluActivationWeights);
  } else {
    program = new MatMulPackedProgram(a3dShape, [batchDim, outerShapeA, outerShapeB], env().get("WEBGPU_MATMUL_WORK_PER_THREAD"), transposeA, transposeB, bias, activation, preluActivationWeights);
  }
  const inputs = [a3d, b3d];
  if (bias) {
    inputs.push(bias);
  }
  if (preluActivationWeights) {
    inputs.push(preluActivationWeights);
  }
  const dimensions = [
    { type: "int32", data: [outerShapeA] },
    { type: "int32", data: [outerShapeB] },
    { type: "int32", data: [innerShapeA] }
  ];
  const out = backend.runWebGPUProgram(program, inputs, a.dtype, dimensions);
  const outReshaped = reshape2({ inputs: { x: out }, backend, attrs: { shape: outShape } });
  intermediates.push(out);
  for (const i of intermediates) {
    backend.disposeData(i.dataId);
  }
  return outReshaped;
}

// src/tfjs-backend-webgpu/src/kernels/_FusedMatMul.ts
function _fusedMatMul(args) {
  const { inputs, backend, attrs } = args;
  const { a, b, bias, preluActivationWeights } = inputs;
  const { transposeA, transposeB, activation, leakyreluAlpha } = attrs;
  return batchMatMulImpl({
    a,
    b,
    transposeA,
    transposeB,
    backend,
    bias,
    preluActivationWeights,
    leakyreluAlpha,
    activation
  });
}
var _fusedMatMulConfig = {
  kernelName: _FusedMatMul,
  backendName: "webgpu",
  kernelFunc: _fusedMatMul
};

// src/tfjs-backend-webgpu/src/binary_op_complex_webgpu.ts
var BinaryOpComplexProgram = class {
  constructor(op2, aShape, bShape) {
    this.variableNames = ["AReal", "AImag", "BReal", "BImag"];
    this.workGroupSize = [128, 1, 1];
    this.size = true;
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = `binaryOpComplex_${op2}`;
    this.op = op2;
  }
  getUserCode() {
    const opStr = getBinaryOpString(this.op, false);
    const userCode = `
      fn binaryOpComplex(
          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {
        ${opStr}
      }

      ${getMainHeaderAndGlobalIndexString()}
        if(index < uniforms.size) {
          let areal = getARealByOutputIndex(index);
          let aimag = getAImagByOutputIndex(index);
          let breal = getBRealByOutputIndex(index);
          let bimag = getBImagByOutputIndex(index);
          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/binary_op_shared_webgpu.ts
var BinaryOpSharedProgram = class {
  constructor(op2, aShape, bShape, useSharedMemoryWithB) {
    this.variableNames = ["A", "B"];
    this.size = true;
    const workGroupSizeX = 256;
    this.workGroupSize = [workGroupSizeX, 1, 1];
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.lastDimensionSize = useSharedMemoryWithB ? bShape[0] : aShape[0];
    if (this.lastDimensionSize < 256) {
      this.workPerThread = 1;
    } else if (this.lastDimensionSize < 512) {
      this.workPerThread = 2;
    } else {
      this.workPerThread = 4;
    }
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    this.useSharedMemoryWithB = useSharedMemoryWithB;
    this.op = op2;
    this.shaderKey = `binaryShared_${op2}_${this.lastDimensionSize}_${this.useSharedMemoryWithB}`;
  }
  getUserCode() {
    const sharedIndexSnippet = this.lastDimensionSize > 1 ? `coords[${this.outputShape.length - 1}]` : "0";
    const accessDataSnippet = this.useSharedMemoryWithB ? `let a = getAByOutputCoords(coords);
         let b = sharedBuf[${sharedIndexSnippet}];` : `let a = sharedBuf[${sharedIndexSnippet}];
         let b = getBByOutputCoords(coords);`;
    const opStr = getBinaryOpString(this.op, false);
    const userCode = `
        fn binaryOperation(a : f32, b : f32) -> f32 {
          ${opStr}
        }
        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;
        ${getMainHeaderAndGlobalIndexString()}

          // Fill in the shared memory buffer. Here we need a loop to make sure
          // that all data in A|B are uploaded when |sharedMemorySize| is larger
          // than work group size.
          for(var localIndex = i32(localId.x); localIndex < ${this.lastDimensionSize}; localIndex = localIndex + ${this.workGroupSize[0]}) {
            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB ? "B" : "A"}.numbers[localIndex]);
          }
          workgroupBarrier();

          for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
            let flatIndex = index * ${this.workPerThread} + i;
            if(flatIndex < uniforms.size) {
              let coords = getCoordsFromIndex(flatIndex);

              ${accessDataSnippet}
              setOutputAtIndex(flatIndex, binaryOperation(a, b));
            }
          }
        }
        `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/binary_op_vec4_webgpu.ts
var BinaryOpVec4Program = class {
  constructor(op2, aShape, bShape) {
    this.variableNames = ["A", "B"];
    this.workPerThread = 4;
    this.isVec4 = true;
    this.size = true;
    const workGroupSizeX = 128;
    this.workGroupSize = [workGroupSizeX, 1, 1];
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    this.op = op2;
    this.shaderKey = `binaryVec4_${op2}`;
  }
  getUserCode() {
    const opStr = getBinaryOpString(this.op, this.isVec4);
    const userCode = `
      fn binaryOperation(a : vec4<f32>, b : vec4<f32>) -> vec4<f32> {
        ${opStr}
      }
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let a = getAByOutputIndex(index);
          let b = getBByOutputIndex(index);
          setOutputAtIndex(index, binaryOperation(a, b));
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/binary_op_webgpu.ts
var BinaryOpProgram = class {
  constructor(op2, aShape, bShape) {
    this.variableNames = ["A", "B"];
    this.size = true;
    const workGroupSizeX = 128;
    this.workGroupSize = [workGroupSizeX, 1, 1];
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = `binary_${op2}`;
    this.op = op2;
  }
  getUserCode() {
    const opStr = getBinaryOpString(this.op, false);
    const userCode = `
      fn binaryOperation(a : f32, b : f32) -> f32 {
        ${opStr}
      }
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let a = getAByOutputIndex(index);
          let b = getBByOutputIndex(index);
          setOutputAtIndex(index, binaryOperation(a, b));
        }
      }
      `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/binary_ops.ts
function getBinaryProgram(op2, aShape, bShape) {
  const useVec4 = util_exports.arraysEqual(aShape, bShape) && util_exports.sizeFromShape(aShape) % 4 === 0;
  if (useVec4) {
    return new BinaryOpVec4Program(op2, aShape, bShape);
  }
  const useSharedMemoryWithA = aShape.length === 1 && bShape.length > 1 && aShape[0] < 1024;
  const useSharedMemoryWithB = bShape.length === 1 && aShape.length > 1 && bShape[0] < 1024;
  if (useSharedMemoryWithA || useSharedMemoryWithB) {
    return new BinaryOpSharedProgram(op2, aShape, bShape, useSharedMemoryWithB);
  } else {
    return new BinaryOpProgram(op2, aShape, bShape);
  }
}

// src/tfjs-backend-webgpu/src/kernels/Identity.ts
function identity(args) {
  const { inputs } = args;
  const { x } = inputs;
  args.backend.incRef(x.dataId);
  return { dataId: x.dataId, shape: x.shape, dtype: x.dtype };
}
var identityConfig = {
  kernelName: Identity,
  backendName: "webgpu",
  kernelFunc: identity
};

// src/tfjs-backend-webgpu/src/kernels/Complex.ts
function complex2(args) {
  const { inputs, backend } = args;
  const { real: real4, imag: imag3 } = inputs;
  const complexInfo = backend.makeTensorInfo(real4.shape, "complex64");
  const complex4 = backend.tensorMap.get(complexInfo.dataId);
  const realTensorInfo = identity({ inputs: { x: real4 }, backend });
  const imagTensorInfo = identity({ inputs: { x: imag3 }, backend });
  complex4.complexTensorInfos = { real: realTensorInfo, imag: imagTensorInfo };
  return complexInfo;
}
var complexConfig = {
  kernelName: Complex,
  backendName: "webgpu",
  kernelFunc: complex2
};

// src/tfjs-backend-webgpu/src/unary_op_webgpu.ts
var UnaryOpProgram = class {
  constructor(outputShape, op2) {
    this.variableNames = ["A"];
    this.size = true;
    const workGroupSizeX = 128;
    this.workGroupSize = [workGroupSizeX, 1, 1];
    this.outputShape = outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.op = op2;
    this.shaderKey = `unary_${op2}`;
  }
  getUserCode() {
    return `
      fn unaryOperation(a : f32) -> f32 {
        ${getUnaryOpString(this.op, false)}
      }
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let a = getAByOutputIndex(index);
          setOutputAtIndex(index, unaryOperation(a));
        }
      }
      `;
  }
};

// src/tfjs-backend-webgpu/src/kernel_utils/kernel_funcs_utils.ts
function unaryKernelFunc({ opType, cpuKernelImpl, dtype }) {
  return ({ inputs, backend }) => {
    const { x } = inputs;
    const webgpuBackend = backend;
    const $dtype = dtype || x.dtype;
    if (webgpuBackend.shouldExecuteOnCPU([x]) && cpuKernelImpl != null) {
      const xData = webgpuBackend.tensorMap.get(x.dataId);
      const outValues = cpuKernelImpl(xData.values, $dtype);
      return webgpuBackend.makeTensorInfo(x.shape, $dtype, outValues);
    }
    const program = new UnaryOpProgram(x.shape, opType);
    return webgpuBackend.runWebGPUProgram(program, [x], $dtype);
  };
}
function binaryKernelFunc({ opSnippet, cpuKernelImpl, supportsComplex = false, dtype }) {
  return ({ inputs, backend }) => {
    const { a, b } = inputs;
    const webgpuBackend = backend;
    if (supportsComplex && a.dtype === "complex64") {
      const aData = webgpuBackend.tensorMap.get(a.dataId);
      const bData = webgpuBackend.tensorMap.get(b.dataId);
      let real4, imag3;
      if (opSnippet !== 0 /* MUL */) {
        [real4, imag3] = [
          [aData.complexTensorInfos.real, bData.complexTensorInfos.real],
          [aData.complexTensorInfos.imag, bData.complexTensorInfos.imag]
        ].map((complexParts) => {
          const [aPart, bPart] = complexParts;
          const aHandle = {
            dataId: aPart.dataId,
            dtype: aPart.dtype,
            shape: a.shape
          };
          const bHandle = {
            dataId: bPart.dataId,
            dtype: bPart.dtype,
            shape: b.shape
          };
          const program2 = getBinaryProgram(opSnippet, a.shape, b.shape);
          return webgpuBackend.runWebGPUProgram(program2, [aHandle, bHandle], upcastType(aPart.dtype, bPart.dtype));
        });
      } else {
        const realProgram = new BinaryOpComplexProgram(17 /* COMPLEX_MULTIPLY_REAL */, a.shape, b.shape);
        const imagProgram = new BinaryOpComplexProgram(18 /* COMPLEX_MULTIPLY_IMAG */, a.shape, b.shape);
        const inputs2 = [
          {
            dataId: aData.complexTensorInfos.real.dataId,
            dtype: aData.complexTensorInfos.real.dtype,
            shape: a.shape
          },
          {
            dataId: aData.complexTensorInfos.imag.dataId,
            dtype: aData.complexTensorInfos.imag.dtype,
            shape: a.shape
          },
          {
            dataId: bData.complexTensorInfos.real.dataId,
            dtype: bData.complexTensorInfos.real.dtype,
            shape: b.shape
          },
          {
            dataId: bData.complexTensorInfos.imag.dataId,
            dtype: bData.complexTensorInfos.imag.dtype,
            shape: b.shape
          }
        ];
        real4 = webgpuBackend.runWebGPUProgram(realProgram, inputs2, "float32");
        imag3 = webgpuBackend.runWebGPUProgram(imagProgram, inputs2, "float32");
      }
      const complexOutput = complex2({ inputs: { real: real4, imag: imag3 }, backend: webgpuBackend });
      webgpuBackend.disposeData(real4.dataId);
      webgpuBackend.disposeData(imag3.dataId);
      return complexOutput;
    }
    const $dtype = dtype || upcastType(a.dtype, b.dtype);
    if ((a.dtype === "string" || b.dtype === "string" || webgpuBackend.shouldExecuteOnCPU([a, b])) && cpuKernelImpl != null) {
      const aData = webgpuBackend.tensorMap.get(a.dataId).values;
      const bData = webgpuBackend.tensorMap.get(b.dataId).values;
      const decodedAVals = a.dtype === "string" ? backend_util_exports.fromUint8ToStringArray(aData) : aData;
      const decodedBVals = a.dtype === "string" ? backend_util_exports.fromUint8ToStringArray(bData) : bData;
      const [outValues, outShape] = cpuKernelImpl(a.shape, b.shape, decodedAVals, decodedBVals, $dtype);
      return webgpuBackend.makeTensorInfo(outShape, $dtype, outValues);
    }
    const program = getBinaryProgram(opSnippet, a.shape, b.shape);
    return webgpuBackend.runWebGPUProgram(program, [a, b], $dtype);
  };
}

// src/tfjs-backend-cpu/src/shared.ts
var shared_exports = {};
__export(shared_exports, {
  addImpl: () => addImpl,
  bincountImpl: () => bincountImpl,
  bincountReduceImpl: () => bincountReduceImpl,
  ceilImpl: () => ceilImpl,
  concatImpl: () => concatImpl,
  equalImpl: () => equalImpl,
  expImpl: () => expImpl,
  expm1Impl: () => expm1Impl,
  floorImpl: () => floorImpl,
  gatherNdImpl: () => gatherNdImpl,
  gatherV2Impl: () => gatherV2Impl,
  greaterEqualImpl: () => greaterEqualImpl,
  greaterImpl: () => greaterImpl,
  lessEqualImpl: () => lessEqualImpl,
  lessImpl: () => lessImpl,
  linSpaceImpl: () => linSpaceImpl,
  logImpl: () => logImpl,
  maxImpl: () => maxImpl,
  maximumImpl: () => maximumImpl,
  minimumImpl: () => minimumImpl,
  multiplyImpl: () => multiplyImpl,
  negImpl: () => negImpl,
  notEqualImpl: () => notEqualImpl,
  prodImpl: () => prodImpl,
  rangeImpl: () => rangeImpl,
  rsqrtImpl: () => rsqrtImpl,
  sigmoidImpl: () => sigmoidImpl,
  simpleAbsImpl: () => simpleAbsImpl,
  sliceImpl: () => sliceImpl,
  sparseFillEmptyRowsImpl: () => sparseFillEmptyRowsImpl,
  sparseReshapeImpl: () => sparseReshapeImpl,
  sparseSegmentReductionImpl: () => sparseSegmentReductionImpl,
  sqrtImpl: () => sqrtImpl,
  squaredDifferenceImpl: () => squaredDifferenceImpl,
  stridedSliceImpl: () => stridedSliceImpl,
  stringNGramsImpl: () => stringNGramsImpl,
  stringSplitImpl: () => stringSplitImpl,
  stringToHashBucketFastImpl: () => stringToHashBucketFastImpl,
  subImpl: () => subImpl,
  tileImpl: () => tileImpl,
  topKImpl: () => topKImpl,
  transposeImpl: () => transposeImpl,
  uniqueImpl: () => uniqueImpl
});

// src/tfjs-backend-cpu/src/cpu_util.ts
function assertNotComplex(tensor2, opName) {
  if (!Array.isArray(tensor2)) {
    tensor2 = [tensor2];
  }
  tensor2.forEach((t) => {
    if (t != null) {
      util_exports.assert(t.dtype !== "complex64", () => `${opName} does not support complex64 tensors in the CPU backend.`);
    }
  });
}

// src/tfjs-backend-cpu/src/kernels/Abs.ts
function simpleAbsImpl(vals) {
  const resultValues = new Float32Array(vals.length);
  for (let i = 0; i < vals.length; ++i) {
    resultValues[i] = Math.abs(vals[i]);
  }
  return resultValues;
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
function complex3(args) {
  const { inputs, backend } = args;
  const { real: real4, imag: imag3 } = inputs;
  const realVals = backend.data.get(real4.dataId).values;
  const imagVals = backend.data.get(imag3.dataId).values;
  const complexInfo = backend.makeTensorInfo(real4.shape, "complex64");
  const complex4 = backend.data.get(complexInfo.dataId);
  complex4.complexTensorInfos = {
    real: backend.makeTensorInfo(real4.shape, "float32", realVals),
    imag: backend.makeTensorInfo(imag3.shape, "float32", imagVals)
  };
  return complexInfo;
}

// src/tfjs-backend-cpu/src/utils/zeros_impl.ts
function zeros2(backend, shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real4 = zeros2(backend, shape, "float32");
    const imag3 = zeros2(backend, shape, "float32");
    return complex3({ inputs: { real: real4, imag: imag3 }, backend });
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
  const real4 = backend.data.get(input.dataId).complexTensorInfos.real;
  const realVal = backend.data.get(real4.dataId).values;
  return backend.makeTensorInfo(real4.shape, real4.dtype, realVal);
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
    const result = complex3({ inputs: { real: floatX, imag: zerosTensorInfo }, backend });
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
    const [resultData, resultShape] = createSimpleBinaryKernelImpl((a, b) => a !== b ? 1 : 0)(x.shape, [], xVals, zero, "bool");
    return backend.makeTensorInfo(resultShape, "bool", resultData);
  }
  throw new Error(`Error in Cast: failed to cast ${x.dtype} to ${dtype}`);
}

// src/tfjs-backend-cpu/src/utils/binary_utils.ts
function binaryKernelFunc2(name, simpleImpl, complexImpl, dtype) {
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
      const $aComplex = cast2({ inputs: { x: a }, backend: cpuBackend, attrs: { dtype: "complex64" } });
      const $aComplexVals = cpuBackend.data.get($aComplex.dataId);
      const aReal = $aComplexVals.complexTensorInfos.real;
      const aImag = $aComplexVals.complexTensorInfos.imag;
      const aRealVals = cpuBackend.data.get(aReal.dataId).values;
      const aImagVals = cpuBackend.data.get(aImag.dataId).values;
      const $bComplex = cast2({ inputs: { x: b }, backend: cpuBackend, attrs: { dtype: "complex64" } });
      const $bComplexVals = cpuBackend.data.get($bComplex.dataId);
      const bReal = $bComplexVals.complexTensorInfos.real;
      const bImag = $bComplexVals.complexTensorInfos.imag;
      const bRealVals = cpuBackend.data.get(bReal.dataId).values;
      const bImagVals = cpuBackend.data.get(bImag.dataId).values;
      const [resultRealData, resultImagData, resultShape] = complexImpl(a.shape, b.shape, aRealVals, aImagVals, bRealVals, bImagVals);
      const resultReal = cpuBackend.makeTensorInfo(resultShape, "float32", resultRealData);
      const resultImag = cpuBackend.makeTensorInfo(resultShape, "float32", resultImagData);
      const result = complex3({ inputs: { real: resultReal, imag: resultImag }, backend: cpuBackend });
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
        const result = op2(aVals[aIdx * 2], aVals[aIdx * 2 + 1], bVals[bIdx * 2], bVals[bIdx * 2 + 1]);
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
        const opResult = op2(aVals[aIndex * 2], aVals[aIndex * 2 + 1], bVals[bIndex * 2], bVals[bIndex * 2 + 1]);
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
var add3 = binaryKernelFunc2(Add, addImpl, addComplexImpl);

// src/tfjs-backend-cpu/src/kernels/Bincount_impl.ts
function bincountImpl(xVals, weightsVals, weightsDtype, weightsShape, size) {
  const weightsSize = util_exports.sizeFromShape(weightsShape);
  const outVals = util_exports.makeZerosTypedArray(size, weightsDtype);
  for (let i = 0; i < xVals.length; i++) {
    const value = xVals[i];
    if (value < 0) {
      throw new Error("Input x must be non-negative!");
    }
    if (value >= size) {
      continue;
    }
    if (weightsSize > 0) {
      outVals[value] += weightsVals[i];
    } else {
      outVals[value] += 1;
    }
  }
  return outVals;
}
function bincountReduceImpl(xBuf, weightsBuf, size, binaryOutput = false) {
  const numRows = xBuf.shape[0];
  const numCols = xBuf.shape[1];
  const outBuf = buffer([numRows, size], weightsBuf.dtype);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const value = xBuf.get(i, j);
      if (value < 0) {
        throw new Error("Input x must be non-negative!");
      }
      if (value >= size) {
        continue;
      }
      if (binaryOutput) {
        outBuf.set(1, i, value);
      } else {
        if (weightsBuf.size > 0) {
          outBuf.set(outBuf.get(i, value) + weightsBuf.get(i, j), i, value);
        } else {
          outBuf.set(outBuf.get(i, value) + 1, i, value);
        }
      }
    }
  }
  return outBuf;
}

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
function unaryKernelFunc2(name, op2, dtype) {
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
var equal2 = binaryKernelFunc2(Equal, equalImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/Exp.ts
var expImpl = createSimpleUnaryImpl((xi) => Math.exp(xi));
var exp2 = unaryKernelFuncFromImpl(Exp, expImpl, "float32");

// src/tfjs-backend-cpu/src/kernels/Expm1.ts
var expm1Impl = createSimpleUnaryImpl((xi) => Math.expm1(xi));
var expm12 = unaryKernelFuncFromImpl(Expm1, expm1Impl);

// src/tfjs-backend-cpu/src/kernels/Floor.ts
var floorImpl = createSimpleUnaryImpl((xi) => Math.floor(xi));
var floor2 = unaryKernelFuncFromImpl(Floor, floorImpl);

// src/tfjs-backend-cpu/src/kernels/GatherNd_Impl.ts
function gatherNdImpl(indicesData, paramsBuf, dtype, numSlices, sliceRank, sliceSize, strides, paramsShape, paramsSize) {
  const outBuf = buffer([numSlices, sliceSize], dtype);
  for (let i = 0; i < numSlices; i++) {
    const index = [];
    let flattenIndex = 0;
    for (let j = 0; j < sliceRank; j++) {
      const dim = indicesData[i * sliceRank + j];
      flattenIndex += dim * strides[j];
      index.push(dim);
    }
    if (flattenIndex < 0 || flattenIndex >= paramsSize / sliceSize) {
      throw new Error(`Invalid indices: ${index} does not index into ${paramsShape}`);
    }
    for (let k = 0; k < sliceSize; k++) {
      outBuf.values[i * sliceSize + k] = paramsBuf.get(...paramsBuf.indexToLoc(flattenIndex * sliceSize + k));
    }
  }
  return outBuf;
}

// src/tfjs-backend-cpu/src/kernels/GatherV2_impl.ts
function gatherV2Impl(xBuf, indicesBuf, flattenOutputShape) {
  const outBuf = buffer(flattenOutputShape, xBuf.dtype);
  for (let i = 0; i < outBuf.size; ++i) {
    const newLoc = outBuf.indexToLoc(i);
    const originalLoc = newLoc.slice();
    const batchIdx = originalLoc[0];
    const indicesIdx = originalLoc[2];
    const indicesIndex = indicesBuf.locToIndex([batchIdx, indicesIdx]);
    originalLoc[2] = indicesBuf.values[indicesIndex];
    const originalIndex = xBuf.locToIndex(originalLoc);
    if (0 <= originalIndex && originalIndex < xBuf.values.length) {
      outBuf.values[i] = xBuf.values[originalIndex];
    }
  }
  return outBuf;
}

// src/tfjs-backend-cpu/src/kernels/Greater.ts
var greaterImpl = createSimpleBinaryKernelImpl((a, b) => a > b ? 1 : 0);
var greater2 = binaryKernelFunc2(Greater, greaterImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/GreaterEqual.ts
var greaterEqualImpl = createSimpleBinaryKernelImpl((a, b) => a >= b ? 1 : 0);
var greaterEqual2 = binaryKernelFunc2(GreaterEqual, greaterEqualImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/Less.ts
var lessImpl = createSimpleBinaryKernelImpl((a, b) => a < b ? 1 : 0);
var less2 = binaryKernelFunc2(Less, lessImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/LessEqual.ts
var lessEqualImpl = createSimpleBinaryKernelImpl((a, b) => a <= b ? 1 : 0);
var lessEqual2 = binaryKernelFunc2(LessEqual, lessEqualImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/LinSpace_impl.ts
function linSpaceImpl(start, stop, num) {
  const step2 = (stop - start) / (num - 1);
  const values = util_exports.makeZerosTypedArray(num, "float32");
  values[0] = start;
  for (let i = 1; i < values.length; i++) {
    values[i] = values[i - 1] + step2;
  }
  return values;
}

// src/tfjs-backend-cpu/src/kernels/Log.ts
var logImpl = createSimpleUnaryImpl((xi) => Math.log(xi));
var log3 = unaryKernelFuncFromImpl(Log, logImpl);

// src/tfjs-backend-cpu/src/kernels/Max_impl.ts
function maxImpl(aVals, reduceSize, outShape, dtype) {
  const vals = util_exports.getTypedArrayFromDType(dtype, util_exports.sizeFromShape(outShape));
  for (let i = 0; i < vals.length; ++i) {
    const offset = i * reduceSize;
    let max3 = aVals[offset];
    for (let j = 0; j < reduceSize; ++j) {
      const value = aVals[offset + j];
      if (Number.isNaN(value) || value > max3) {
        max3 = value;
      }
    }
    vals[i] = max3;
  }
  return vals;
}

// src/tfjs-backend-cpu/src/kernels/Maximum.ts
var maximumImpl = createSimpleBinaryKernelImpl((aValue, bValue) => Math.max(aValue, bValue));
var maximum2 = binaryKernelFunc2(Maximum, maximumImpl);

// src/tfjs-backend-cpu/src/kernels/Minimum.ts
var minimumImpl = createSimpleBinaryKernelImpl((aValue, bValue) => Math.min(aValue, bValue));
var minimum2 = binaryKernelFunc2(Minimum, minimumImpl);

// src/tfjs-backend-cpu/src/kernels/Multiply.ts
var multiplyImpl = createSimpleBinaryKernelImpl((aValue, bValue) => aValue * bValue);
var multiplyComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return {
    real: aReal * bReal - aImag * bImag,
    imag: aReal * bImag + aImag * bReal
  };
});
var multiply = binaryKernelFunc2(Multiply, multiplyImpl, multiplyComplexImpl);

// src/tfjs-backend-cpu/src/kernels/Neg.ts
function negImpl(xVals, xShape, xDtype) {
  const minusOne = util_exports.createScalarValue(-1, xDtype);
  return multiplyImpl([], xShape, minusOne, xVals, xDtype);
}

// src/tfjs-backend-cpu/src/kernels/NotEqual.ts
var notEqualImpl = createSimpleBinaryKernelImpl((a, b) => a !== b ? 1 : 0);
var notEqual2 = binaryKernelFunc2(NotEqual, notEqualImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/Transpose_impl.ts
function transposeImpl(xVals, xShape, dtype, perm, newShape) {
  const xRank = xShape.length;
  const xSize = util_exports.sizeFromShape(xShape);
  const xStrides = util_exports.computeStrides(xShape);
  const newStrides = util_exports.computeStrides(newShape);
  const result = util_exports.getTypedArrayFromDType(dtype, util_exports.sizeFromShape(newShape));
  for (let i = 0; i < xSize; ++i) {
    const loc = util_exports.indexToLoc(i, xRank, xStrides);
    const newLoc = new Array(loc.length);
    for (let i2 = 0; i2 < newLoc.length; i2++) {
      newLoc[i2] = loc[perm[i2]];
    }
    const newIndex = util_exports.locToIndex(newLoc, xRank, newStrides);
    result[newIndex] = xVals[i];
  }
  return result;
}

// src/tfjs-backend-cpu/src/kernels/Prod.ts
function prodImpl(xShape, xDtype, xVals, reductionAxes) {
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(xShape, reductionAxes);
  const outDtype = upcastType(xDtype, "int32");
  const outVals = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(outShape), outDtype);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  for (let i = 0; i < outVals.length; ++i) {
    const offset = i * reduceSize;
    let prod3 = 1;
    for (let j = 0; j < reduceSize; ++j) {
      prod3 *= xVals[offset + j];
    }
    outVals[i] = prod3;
  }
  return { outVals, outShape, outDtype };
}

// src/tfjs-backend-cpu/src/kernels/Range_impl.ts
function rangeImpl(start, stop, step2, dtype) {
  const sameStartStop = start === stop;
  const increasingRangeNegativeStep = start < stop && step2 < 0;
  const decreasingRangePositiveStep = stop < start && step2 > 1;
  if (sameStartStop || increasingRangeNegativeStep || decreasingRangePositiveStep) {
    return util_exports.makeZerosTypedArray(0, dtype);
  }
  const numElements = Math.abs(Math.ceil((stop - start) / step2));
  const values = util_exports.makeZerosTypedArray(numElements, dtype);
  if (stop < start && step2 === 1) {
    step2 = -1;
  }
  values[0] = start;
  for (let i = 1; i < values.length; i++) {
    values[i] = values[i - 1] + step2;
  }
  return values;
}

// src/tfjs-backend-cpu/src/kernels/Rsqrt.ts
var rsqrtImpl = createSimpleUnaryImpl((xi) => 1 / Math.sqrt(xi));
var rsqrt2 = unaryKernelFuncFromImpl(Rsqrt, rsqrtImpl);

// src/tfjs-backend-cpu/src/kernels/Sigmoid.ts
var sigmoidImpl = createSimpleUnaryImpl((xi) => 1 / (1 + Math.exp(-xi)));
var sigmoid2 = unaryKernelFunc2(Sigmoid, (xi) => 1 / (1 + Math.exp(-xi)));

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

// src/tfjs-backend-cpu/src/kernels/SparseFillEmptyRows_impl.ts
function sparseFillEmptyRowsImpl(indices, indicesShape, indicesDType, values, valuesDType, denseShape, defaultValue) {
  const indicesCount = indicesShape[0];
  const denseRows = denseShape[0];
  const emptyRowIndicator = new Array(denseRows);
  const reverseIndexMap = new Array(indicesCount);
  const rank = indicesShape[1];
  if (denseRows === 0) {
    if (indicesCount !== 0) {
      throw new Error(backend_util_exports.getSparseFillEmptyRowsIndicesDenseShapeMismatch(indicesCount));
    }
    const outputIndices = util_exports.getArrayFromDType(indicesDType, 0);
    const outputValues = util_exports.getArrayFromDType(valuesDType, 0);
    return [
      outputIndices,
      [0, rank],
      outputValues,
      emptyRowIndicator,
      reverseIndexMap
    ];
  }
  let rowsAreOrdered = true;
  let lastIndicesRow = 0;
  const csrOffset = new Array(denseRows).fill(0);
  for (let i = 0; i < indicesCount; ++i) {
    const row = indices[i * rank];
    if (row < 0) {
      throw new Error(backend_util_exports.getSparseFillEmptyRowsNegativeIndexErrorMessage(i, row));
    }
    if (row >= denseRows) {
      throw new Error(backend_util_exports.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(i, row, denseRows));
    }
    ++csrOffset[row];
    rowsAreOrdered = rowsAreOrdered && row >= lastIndicesRow;
    lastIndicesRow = row;
  }
  let allRowsFull = true;
  for (let row = 0; row < denseRows; ++row) {
    const rowEmpty = csrOffset[row] === 0;
    emptyRowIndicator[row] = rowEmpty;
    allRowsFull = allRowsFull && !rowEmpty;
    csrOffset[row] = Math.max(csrOffset[row], 1);
    if (row > 0) {
      csrOffset[row] += csrOffset[row - 1];
    }
  }
  if (allRowsFull && rowsAreOrdered) {
    const outputIndices = indices;
    const outputValues = values;
    for (let i = 0; i < indicesCount; ++i) {
      reverseIndexMap[i] = i;
    }
    return [
      outputIndices,
      [indicesCount, rank],
      outputValues,
      emptyRowIndicator,
      reverseIndexMap
    ];
  } else {
    const fullIndicesCount = csrOffset[denseRows - 1];
    const outputIndices = util_exports.getArrayFromDType(indicesDType, fullIndicesCount * rank);
    const outputValues = util_exports.getArrayFromDType(valuesDType, fullIndicesCount);
    const filledCount = new Array(denseRows).fill(0);
    for (let i = 0; i < indicesCount; ++i) {
      const row = indices[i * rank];
      const offset = filledCount[row];
      const outputI = (row === 0 ? 0 : csrOffset[row - 1]) + offset;
      filledCount[row]++;
      for (let j = 0; j < rank; ++j) {
        outputIndices[outputI * rank + j] = indices[i * rank + j];
      }
      outputValues[outputI] = values[i];
      reverseIndexMap[i] = outputI;
    }
    for (let row = 0; row < denseRows; ++row) {
      const rowCount = filledCount[row];
      if (rowCount === 0) {
        const startingIndex = row === 0 ? 0 : csrOffset[row - 1];
        outputIndices[startingIndex * rank + 0] = row;
        for (let col = 1; col < rank; ++col) {
          outputIndices[startingIndex * rank + col] = 0;
        }
        outputValues[startingIndex] = defaultValue;
      }
    }
    return [
      outputIndices,
      [fullIndicesCount, rank],
      outputValues,
      emptyRowIndicator,
      reverseIndexMap
    ];
  }
}

// src/tfjs-backend-cpu/src/kernels/SparseReshape_impl.ts
function sparseReshapeImpl(inputIndices, inputIndicesShape, inputDType, inputShape, targetShape) {
  const denseSize = util_exports.sizeFromShape(inputShape);
  const nnz = inputIndicesShape[0];
  const outputRank = targetShape.length;
  const outputShape = [];
  let product = 1;
  let unknownIndex = -1;
  for (let d = 0; d < outputRank; ++d) {
    const size = targetShape[d];
    if (size === -1) {
      if (unknownIndex !== -1) {
        throw new Error(backend_util_exports.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(unknownIndex, d));
      }
      unknownIndex = d;
      outputShape.push(1);
    } else {
      if (size < 0) {
        throw new Error(backend_util_exports.getSparseReshapeNegativeOutputDimErrorMessage(d, size));
      }
      product *= size;
      outputShape.push(size);
    }
  }
  if (unknownIndex !== -1) {
    if (product <= 0) {
      throw new Error(backend_util_exports.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());
    }
    const missing = Math.trunc(denseSize / product);
    if (product * missing !== denseSize) {
      throw new Error(backend_util_exports.getSparseReshapeInputOutputMultipleErrorMessage(inputShape, outputShape));
    }
    outputShape[unknownIndex] = missing;
  }
  const outputSize = util_exports.sizeFromShape(outputShape);
  if (outputSize !== denseSize) {
    throw new Error(backend_util_exports.getSparseReshapeInputOutputMismatchErrorMessage(inputShape, outputShape));
  }
  const inputRank = inputShape.length;
  const inputStrides = [];
  if (inputRank > 0) {
    inputStrides[inputRank - 1] = 1;
    for (let d = inputRank - 2; d >= 0; --d) {
      inputStrides[d] = inputStrides[d + 1] * inputShape[d + 1];
    }
  }
  const outputStrides = [];
  if (outputRank > 0) {
    outputStrides[outputRank - 1] = 1;
    for (let d = outputRank - 2; d >= 0; --d) {
      outputStrides[d] = outputStrides[d + 1] * outputShape[d + 1];
    }
  }
  const newIndices = util_exports.getArrayFromDType(inputDType, nnz * outputRank);
  for (let i = 0; i < nnz; ++i) {
    let id = 0;
    for (let j = 0; j < inputRank; ++j) {
      id += inputIndices[i * inputRank + j] * inputStrides[j];
    }
    for (let j = 0; j < outputRank; ++j) {
      newIndices[i * outputRank + j] = Math.trunc(id / outputStrides[j]);
      id %= outputStrides[j];
    }
  }
  return [newIndices, [nnz, outputRank], outputShape];
}

// src/tfjs-backend-cpu/src/kernels/SparseSegmentReduction_impl.ts
function sparseSegmentReductionImpl(input, inputShape, inputDType, indices, segmentIds, isMean = false, defaultValue = 0) {
  const numIndices = indices.length;
  const inputFlat = [inputShape[0], input.length / inputShape[0]];
  const numCol = inputFlat[1];
  const lastSegmentIdPlusOne = numIndices > 0 ? segmentIds[numIndices - 1] + 1 : 0;
  const outputRows = lastSegmentIdPlusOne;
  if (outputRows < 0) {
    throw new Error(backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
  }
  const outputShape = inputShape.slice();
  outputShape[0] = outputRows;
  const outputLength = outputShape.reduce((product, value) => product * value, 1);
  const output = util_exports.getArrayFromDType(inputDType, outputLength);
  if (numIndices === 0) {
    if (outputRows > 0) {
      output.fill(defaultValue);
    }
    return [output, outputShape];
  }
  if (outputRows <= 0) {
    throw new Error(backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
  }
  let start = 0, end = 1;
  let uninitializedIndex = 0;
  let outIndex = segmentIds[start];
  while (true) {
    let nextIndex = 0;
    if (end < numIndices) {
      nextIndex = segmentIds[end];
      if (outIndex === nextIndex) {
        ++end;
        continue;
      }
      if (outIndex >= nextIndex) {
        throw new Error(backend_util_exports.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage());
      }
    }
    if (outIndex < 0 || outIndex >= outputRows) {
      throw new Error(backend_util_exports.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(outIndex, outputRows));
    }
    if (outIndex > uninitializedIndex) {
      output.fill(defaultValue, uninitializedIndex * numCol, outIndex * numCol);
    }
    for (let i = start; i < end; ++i) {
      const index = indices[i];
      if (index < 0 || index >= inputFlat[0]) {
        throw new Error(backend_util_exports.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(i, indices[i], inputFlat[0]));
      }
      for (let j = 0; j < numCol; j++) {
        output[outIndex * numCol + j] += input[index * numCol + j];
      }
    }
    if (isMean) {
      for (let j = 0; j < numCol; j++) {
        output[outIndex * numCol + j] /= end - start;
      }
    }
    start = end;
    ++end;
    uninitializedIndex = outIndex + 1;
    outIndex = nextIndex;
    if (end > numIndices) {
      break;
    }
  }
  if (uninitializedIndex < outputRows) {
    output.fill(defaultValue, uninitializedIndex * numCol, outputRows * numCol);
  }
  return [output, outputShape];
}

// src/tfjs-backend-cpu/src/kernels/Sqrt.ts
var sqrtImpl = createSimpleUnaryImpl((xi) => Math.sqrt(xi));
var sqrt2 = unaryKernelFunc2(Sqrt, (xi) => Math.sqrt(xi));

// src/tfjs-backend-cpu/src/kernels/SquaredDifference.ts
var squaredDifferenceImpl = createSimpleBinaryKernelImpl((a, b) => {
  const diff = a - b;
  return diff * diff;
});
var squaredDifference2 = binaryKernelFunc2(SquaredDifference, squaredDifferenceImpl);

// src/tfjs-backend-cpu/src/kernels/StridedSlice_impl.ts
function stridedSliceImpl(outShape, xBuf, strides, begin) {
  const outBuf = buffer(outShape, xBuf.dtype);
  for (let i = 0; i < outBuf.size; i++) {
    const loc = outBuf.indexToLoc(i);
    const newLoc = new Array(loc.length);
    for (let j = 0; j < newLoc.length; j++) {
      newLoc[j] = loc[j] * strides[j] + begin[j];
    }
    outBuf.set(xBuf.get(...newLoc), ...loc);
  }
  return outBuf;
}

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
    return Math.min(this.padWidth < 0 ? nGramWidth - 1 : this.padWidth, nGramWidth - 1);
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
        this.createNGrams(data, splitIndex, nGrams, outputStartIdx, numNGrams, nGramWidth);
        outputStartIdx += numNGrams;
      });
      if (this.preserveShort && outputStartIdx === nGramsSplits[i]) {
        const dataLength = splits[i + 1] - splits[i];
        if (dataLength === 0) {
          continue;
        }
        const nGramWidth = dataLength + 2 * this.padWidth;
        const numNGrams = 1;
        this.createNGrams(data, splitIndex, nGrams, outputStartIdx, numNGrams, nGramWidth);
      }
    }
    return [nGrams, nGramsSplits];
  }
};
function stringNGramsImpl(data, dataSplits, separator, nGramWidths, leftPad, rightPad2, padWidth, preserveShortSequences) {
  return new StringNGramsOp(separator, nGramWidths, leftPad, rightPad2, padWidth, preserveShortSequences).compute(data, dataSplits);
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
var subImpl = createSimpleBinaryKernelImpl((aValue, bValue) => aValue - bValue);
var subComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return { real: aReal - bReal, imag: aImag - bImag };
});
var sub2 = binaryKernelFunc2(Sub, subImpl, subComplexImpl);

// src/tfjs-backend-cpu/src/kernels/Tile_impl.ts
function tileImpl(xBuf, reps) {
  const newShape = new Array(xBuf.rank);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = xBuf.shape[i] * reps[i];
  }
  const result = buffer(newShape, xBuf.dtype);
  for (let i = 0; i < result.values.length; ++i) {
    const newLoc = result.indexToLoc(i);
    const originalLoc = new Array(xBuf.rank);
    for (let j = 0; j < originalLoc.length; j++) {
      originalLoc[j] = newLoc[j] % xBuf.shape[j];
    }
    const originalIndex = xBuf.locToIndex(originalLoc);
    result.values[i] = xBuf.values[originalIndex];
  }
  return result;
}

// src/tfjs-backend-cpu/src/kernels/TopK_impl.ts
var comparePair = (a, b) => {
  const valueDiff = b.value - a.value;
  return valueDiff === 0 ? a.index - b.index : valueDiff;
};
function select(array, k, left = 0, right = array.length - 1) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const i2 = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * Math.sign(i2 - n / 2);
      const newLeft = Math.max(left, Math.floor(k - i2 * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - i2) * s / n + sd));
      select(array, k, newLeft, newRight);
    }
    const t = array[k];
    let i = left;
    let j = right;
    util_exports.swap(array, left, k);
    if (comparePair(array[right], t) > 0) {
      util_exports.swap(array, left, right);
    }
    while (i < j) {
      util_exports.swap(array, i, j);
      i++;
      j--;
      while (comparePair(array[i], t) < 0) {
        i = i + 1;
      }
      while (comparePair(array[j], t) > 0) {
        j = j - 1;
      }
    }
    if (comparePair(array[left], t) === 0) {
      util_exports.swap(array, left, j);
    } else {
      j = j + 1;
      util_exports.swap(array, j, right);
    }
    if (j <= k) {
      left = j + 1;
    }
    if (k <= j) {
      right = j - 1;
    }
  }
}
function topKImpl(x, xShape, xDtype, k, sorted) {
  const lastDim = xShape[xShape.length - 1];
  const [batch, size] = [x.length / lastDim, lastDim];
  const allTopKVals = util_exports.getTypedArrayFromDType(xDtype, batch * k);
  const allTopKIndices = util_exports.getTypedArrayFromDType("int32", batch * k);
  for (let b = 0; b < batch; b++) {
    const offset = b * size;
    const vals = x.subarray(offset, offset + size);
    let valAndInd = new Array(vals.length);
    vals.forEach((value, index) => valAndInd[index] = { value, index });
    if (k < valAndInd.length) {
      select(valAndInd, k);
      valAndInd = valAndInd.slice(0, k);
    }
    if (sorted) {
      valAndInd.sort(comparePair);
    }
    const outOffset = b * k;
    const topKVals = allTopKVals.subarray(outOffset, outOffset + k);
    const topKIndices = allTopKIndices.subarray(outOffset, outOffset + k);
    for (let i = 0; i < k; i++) {
      topKVals[i] = valAndInd[i].value;
      topKIndices[i] = valAndInd[i].index;
    }
  }
  const outputShape = xShape.slice();
  outputShape[outputShape.length - 1] = k;
  return [
    buffer(outputShape, xDtype, allTopKVals),
    buffer(outputShape, "int32", allTopKIndices)
  ];
}

// src/tfjs-backend-cpu/src/kernels/Unique_impl.ts
function uniqueImpl(values, axis, shape, dtype) {
  const $axis = util_exports.parseAxisParam(axis, shape)[0];
  const newShape = [1, shape[0], 1];
  for (let i = 0; i < $axis; i++) {
    newShape[0] *= shape[i];
  }
  newShape[1] = shape[$axis];
  for (let i = $axis + 1; i < shape.length; i++) {
    newShape[2] *= shape[i];
  }
  const uniqueElements = {};
  const indices = new Int32Array(shape[$axis]);
  const inputBuffer = new TensorBuffer(newShape, dtype, values);
  const uniqueIndices = [];
  const is1DTensor = newShape[0] === 1 && newShape[2] === 1;
  for (let i = 0; i < shape[$axis]; i++) {
    let element;
    if (is1DTensor) {
      element = values[i].toString();
    } else {
      const axisValues = [];
      for (let m = 0; m < newShape[0]; m++) {
        for (let n = 0; n < newShape[2]; n++) {
          axisValues.push(inputBuffer.get(m, i, n));
        }
      }
      element = axisValues.join(",");
    }
    if (uniqueElements[element] !== void 0) {
      indices[i] = uniqueElements[element];
    } else {
      const uniqueIndex = Object.keys(uniqueElements).length;
      uniqueElements[element] = uniqueIndex;
      indices[i] = uniqueIndex;
      uniqueIndices.push(i);
    }
  }
  const outputTmpShape = newShape.slice();
  outputTmpShape[1] = Object.keys(uniqueElements).length;
  const outputBuffer = new TensorBuffer(outputTmpShape, dtype);
  uniqueIndices.forEach((uniqueElementIndex, i) => {
    for (let m = 0; m < newShape[0]; m++) {
      for (let n = 0; n < newShape[2]; n++) {
        outputBuffer.set(inputBuffer.get(m, uniqueElementIndex, n), m, i, n);
      }
    }
  });
  const outputShape = shape.slice();
  outputShape[$axis] = outputTmpShape[1];
  return {
    outputValues: outputBuffer.values,
    outputShape,
    indices
  };
}

// src/tfjs-backend-webgpu/src/kernel_utils/shared.ts
var {
  addImpl: addImplCPU,
  ceilImpl: ceilImplCPU,
  concatImpl: concatImplCPU,
  equalImpl: equalImplCPU,
  expImpl: expImplCPU,
  expm1Impl: expm1ImplCPU,
  floorImpl: floorImplCPU,
  gatherNdImpl: gatherNdImplCPU,
  gatherV2Impl: gatherV2ImplCPU,
  greaterEqualImpl: greaterEqualImplCPU,
  greaterImpl: greaterImplCPU,
  lessEqualImpl: lessEqualImplCPU,
  lessImpl: lessImplCPU,
  logImpl: logImplCPU,
  maxImpl: maxImplCPU,
  maximumImpl: maximumImplCPU,
  minimumImpl: minimumImplCPU,
  multiplyImpl: multiplyImplCPU,
  negImpl: negImplCPU,
  notEqualImpl: notEqualImplCPU,
  prodImpl: prodImplCPU,
  rangeImpl: rangeImplCPU,
  rsqrtImpl: rsqrtImplCPU,
  simpleAbsImpl: simpleAbsImplCPU,
  sliceImpl: sliceImplCPU,
  stridedSliceImpl: stridedSliceImplCPU,
  stringNGramsImpl: stringNGramsImplCPU,
  subImpl: subImplCPU,
  tileImpl: tileImplCPU,
  topKImpl: topKImplCPU,
  transposeImpl: transposeImplCPU,
  uniqueImpl: uniqueImplCPU
} = shared_exports;

// src/tfjs-backend-webgpu/src/kernels/Abs.ts
var abs2 = unaryKernelFunc({ opType: 0 /* ABS */, cpuKernelImpl: simpleAbsImplCPU });
var absConfig = {
  kernelName: Abs,
  backendName: "webgpu",
  kernelFunc: abs2
};

// src/tfjs-backend-webgpu/src/kernels/Add.ts
var addKernelFunc = binaryKernelFunc({
  opSnippet: 1 /* ADD */,
  cpuKernelImpl: addImplCPU,
  supportsComplex: true
});
var addConfig = {
  kernelName: Add,
  backendName: "webgpu",
  kernelFunc: addKernelFunc
};

// src/tfjs-backend-webgpu/src/addn_packed_webgpu.ts
var AddNPackedProgram = class {
  constructor(shapes) {
    this.workPerThread = 4;
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = shapes[0];
    this.variableNames = shapes.map((_, i) => `T${i}`);
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    this.shaderKey = "addN";
  }
  getUserCode() {
    const snippets = [];
    this.variableNames.forEach((variable2) => {
      snippets.push(`let v${variable2} = get${variable2}ByOutputCoords(coords);`);
    });
    const operation = this.variableNames.map((variable2) => {
      return `v${variable2}`;
    }).join(" + ");
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if (flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            ${snippets.join("\n        ")}
            setOutputAtIndex(flatIndex, ${operation});
          }
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/AddN.ts
function addN2(args) {
  const { inputs, backend } = args;
  const tensors = inputs;
  if (tensors.length === 1) {
    return identity({ inputs: { x: tensors[0] }, backend });
  }
  const dtype = tensors.map((t) => t.dtype).reduce((d1, d2) => upcastType(d1, d2));
  const shapes = tensors.map((t) => t.shape);
  const program = new AddNPackedProgram(shapes);
  return backend.runWebGPUProgram(program, tensors, dtype);
}
var addNConfig = {
  kernelName: AddN,
  backendName: "webgpu",
  kernelFunc: addN2
};

// src/tfjs-backend-webgpu/src/argminmax_webgpu.ts
var ArgMinMaxProgram = class {
  constructor(inputShape, axis, reduceType) {
    this.workGroupSize = [64, 1, 1];
    this.variableNames = ["x"];
    this.uniforms = "axis : i32; infinityValue : f32;";
    this.size = true;
    const axes = [axis];
    backend_util_exports.assertAxesAreInnerMostDims("arg" + reduceType.charAt(0).toUpperCase() + reduceType.slice(1), axes, inputShape.length);
    this.op = reduceType === "min" ? "<" : ">";
    const [outputShape] = backend_util_exports.computeOutAndReduceShapes(inputShape, axes);
    this.outputShape = outputShape.length === 0 ? [1] : outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, [1, 1, 1]);
    this.inputShape = inputShape;
    this.shaderKey = `argMinMax${this.op}`;
  }
  getUserCode() {
    const sharedMemorySnippet = `
      var<workgroup> xBestIndices : array<i32, ${this.workGroupSize[0]}>;
      var<workgroup> xBestValues : array<f32, ${this.workGroupSize[0]}>;
    `;
    const indexOutputCoords = (outputCoords, index) => {
      if (this.outputShape.length === 1) {
        return outputCoords;
      } else {
        return `${outputCoords}[${index}]`;
      }
    };
    const indexInputShape = (index) => {
      if (this.inputShape.length === 1) {
        return "uniforms.xShape";
      } else {
        return `uniforms.xShape[${index}]`;
      }
    };
    const userCode = `
      fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
      }

      ${sharedMemorySnippet}

      // In order to get a flattened index into the input tensor, we need to
      // add back the index along the reduced dimension to |outputCoords|.
      // This function outputs the offset to the first value along
      // |axis| and the stride to get the next value of the input along |axis|.
      fn getInputCoordInfo(outputIndex : i32) -> vec2<i32>{
        let outputCoords = getCoordsFromIndex(outputIndex);
        var i = ${this.outputShape.length - 1};

        var stride = 1;
        var inputStride = 1;
        var offset = 0;

        for (var r = 1; r <= ${this.inputShape.length}; r = r + 1) {
          let length = ${indexInputShape(`${this.inputShape.length} - r`)};
          if (${this.inputShape.length} - r == uniforms.axis) {
            inputStride = stride;
          } else {
            offset = offset + ${indexOutputCoords("outputCoords", "i")} * stride;
            i = i - 1;
          }
          stride = stride * length;
        }

        return vec2<i32>(offset, inputStride);
      }

      fn getInputIndex(coordInfo : vec2<i32>, index : i32) -> i32{
        return coordInfo[0] + coordInfo[1] * index;
      }

      ${getMainHeaderAndGlobalIndexString()}
        let outputIndex = index / i32(workGroupSizeX);
        let coordInfo = getInputCoordInfo(outputIndex);
        let Length = ${indexInputShape("uniforms.axis")};

        var bestIndex = i32(localId.x);
        var bestValue = uniforms.infinityValue;

        for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;
            k = k + i32(workGroupSizeX)) {
          let candidate = f32(x.numbers[getInputIndex(coordInfo, k)]);
          if (!isnan(candidate) && candidate ${this.op} bestValue) {
            bestValue = candidate;
            bestIndex = k;
          }
        }
        xBestValues[localId.x] = bestValue;
        xBestIndices[localId.x] = bestIndex;
        workgroupBarrier();

        var reduceSize = min(u32(Length), workGroupSizeX);
        for (var currentSize = reduceSize / 2u; reduceSize > 1u;
            currentSize = reduceSize / 2u) {
          let interval = DIV_CEIL(reduceSize, 2u);
          if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              xBestValues[localId.x] = bestValue;
              xBestIndices[localId.x] = xBestIndices[localId.x + interval];
            }
          }
          reduceSize = interval;
          workgroupBarrier();
        }

        if (localId.x == 0u && outputIndex < uniforms.size) {
          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/transpose_shared_webgpu.ts
var TransposeSharedProgram = class {
  constructor(aShape, newDim) {
    this.variableNames = ["A"];
    this.workGroupSize = [16, 16, 1];
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[newDim[i]];
    }
    this.outputShape = outputShape;
    this.dispatchLayout = { x: [0], y: [1] };
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [1, 1, 1]);
    this.shaderKey = "transposeShared";
  }
  getUserCode() {
    const userCode = `
      let TILE_DIM = ${this.workGroupSize[0]};
      var<workgroup> tile : array<array<f32, ${this.workGroupSize[0] + 1}>, ${this.workGroupSize[0]}>;
      ${getWorkGroupSizeString()}
      fn main(@builtin(local_invocation_id) localId : vec3<u32>,
              @builtin(workgroup_id) workgroupId : vec3<u32>) {
        var x = i32(workgroupId.x) * TILE_DIM + i32(localId.x);
        var y = i32(workgroupId.y) * TILE_DIM + i32(localId.y);
        let width = uniforms.outShape[0];
        let height = uniforms.outShape[1];
        if (x < width && y < height) {
          tile[localId.y][localId.x] =
              A.numbers[y * width + x];
        }
        workgroupBarrier();

        x = i32(workgroupId.y) * TILE_DIM + i32(localId.x);
        y = i32(workgroupId.x) * TILE_DIM + i32(localId.y);
        if (x < height && y < width) {
          setOutputAtIndex((y * height + x), tile[localId.x]
            [localId.y]);
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/transpose_webgpu.ts
var TransposeProgram = class {
  constructor(aShape, newDim) {
    this.variableNames = ["A"];
    this.workPerThread = 4;
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[newDim[i]];
    }
    this.outputShape = outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    this.newDim = newDim;
    this.shaderKey = `transpose_${newDim}`;
  }
  getUserCode() {
    const dtype = getCoordsDataType(this.outputShape.length);
    const switched = getSwitchedCoords(this.newDim);
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}

        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let resRC = getCoordsFromIndex(flatIndex);
            setOutputAtIndex(flatIndex, A.numbers[getIndexFromCoords${this.outputShape.length}D(
              ${dtype}(${switched}), uniforms.aShape)]);
          }
        }
      }
    `;
    return userCode;
  }
};
function getSwitchedCoords(newDim) {
  const rank = newDim.length;
  if (rank > 4) {
    throw Error(`Transpose for rank ${rank} is not yet supported`);
  }
  const switchedCoords = new Array(rank);
  for (let i = 0; i < newDim.length; i++) {
    switchedCoords[newDim[i]] = `resRC[${i}]`;
  }
  return switchedCoords.join();
}

// src/tfjs-backend-webgpu/src/kernels/Transpose.ts
function transpose3(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { perm } = attrs;
  const webgpuBackend = backend;
  const xRank = x.shape.length;
  const newShape = new Array(xRank);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = x.shape[perm[i]];
  }
  if (backend.shouldExecuteOnCPU([x])) {
    const xData = webgpuBackend.tensorMap.get(x.dataId);
    const values = xData.values;
    const outValues = transposeImplCPU(values, x.shape, x.dtype, perm, newShape);
    return backend.makeTensorInfo(newShape, x.dtype, outValues);
  }
  if (x.shape.length === 2 && util_exports.arraysEqual(perm, [1, 0])) {
    const program2 = new TransposeSharedProgram(x.shape, perm);
    return webgpuBackend.runWebGPUProgram(program2, [x], x.dtype);
  }
  const program = new TransposeProgram(x.shape, perm);
  return webgpuBackend.runWebGPUProgram(program, [x], x.dtype);
}
var transposeConfig = {
  kernelName: Transpose,
  backendName: "webgpu",
  kernelFunc: transpose3
};

// src/tfjs-backend-webgpu/src/kernels/ArgMax.ts
function argMax2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis } = attrs;
  let axes = util_exports.parseAxisParam(axis, x.shape);
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  const intermediateTensorInfos = [];
  if (permutedAxes != null) {
    $x = transpose3({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    intermediateTensorInfos.push($x);
    axes = backend_util_exports.getInnerMostAxes(axes.length, $x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("argMax", [axes[0]], $x.shape.length);
  const program = new ArgMinMaxProgram($x.shape, axes[0], "max");
  const uniformData = [
    { type: "int32", data: [axes[0]] },
    { type: "float32", data: [Number.NEGATIVE_INFINITY] }
  ];
  const out = backend.runWebGPUProgram(program, [$x], "int32", uniformData);
  intermediateTensorInfos.forEach((t) => backend.disposeData(t.dataId));
  return out;
}
var argMaxConfig = {
  kernelName: ArgMax,
  backendName: "webgpu",
  kernelFunc: argMax2
};

// src/tfjs-backend-webgpu/src/kernels/ArgMin.ts
function argMin2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis } = attrs;
  let axes = util_exports.parseAxisParam(axis, x.shape);
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  const intermediateTensorInfos = [];
  if (permutedAxes != null) {
    $x = transpose3({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    intermediateTensorInfos.push($x);
    axes = backend_util_exports.getInnerMostAxes(axes.length, $x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("argMin", [axes[0]], $x.shape.length);
  const program = new ArgMinMaxProgram($x.shape, axes[0], "min");
  const uniformData = [
    { type: "int32", data: [axes[0]] },
    { type: "float32", data: [Number.POSITIVE_INFINITY] }
  ];
  const out = backend.runWebGPUProgram(program, [$x], "int32", uniformData);
  intermediateTensorInfos.forEach((t) => backend.disposeData(t.dataId));
  return out;
}
var argMinConfig = {
  kernelName: ArgMin,
  backendName: "webgpu",
  kernelFunc: argMin2
};

// src/tfjs-backend-webgpu/src/pool2d_webgpu.ts
var Pool2DProgram = class {
  constructor(convInfo, poolType) {
    this.variableNames = ["x"];
    this.uniforms = `stride : vec2<i32>; pad : vec2<i32>; dilation : vec2<i32>; convDims : vec2<i32>; filterDims : vec2<i32>;`;
    this.workGroupSize = [128, 1, 1];
    this.size = true;
    this.outputShape = convInfo.outShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = `pool2D_${poolType}`;
    this.poolType = poolType;
  }
  getUserCode() {
    let updateSnippet = `resultValue = max(value, resultValue);`;
    if (this.poolType === "avg") {
      updateSnippet = `resultValue = resultValue + value; count = count + 1.0;`;
    }
    let returnValue = `resultValue`;
    if (this.poolType === "avg") {
      returnValue = `resultValue / count`;
    }
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let xRCCorner = vec2<i32>(coords.yz) * uniforms.stride - uniforms.pad;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          var resultValue = ${this.poolType === "avg" ? "0.0" : "-1.0 / pow(10.0, -20.0)"};
          var count = 0.0;

          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilation.x) {
            let xR = xRCorner + wR;

            if (xR < 0 || xR >= uniforms.convDims.x) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilation.y) {
              let xC = xCCorner + wC;
              if (xC < 0 || xC >= uniforms.convDims.y) {
                continue;
              }

              let value = getX(batch, xR, xC, coords[3]);
              ${updateSnippet}
            }
          }

          setOutputAtIndex(index, ${returnValue});
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/pool_filtersizeone_webgpu.ts
var PoolWithFilterSizeEqualsOneProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x"];
    this.uniforms = `stride : vec2<i32>;`;
    this.workGroupSize = [256, 1, 1];
    this.size = true;
    this.outputShape = convInfo.outShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = "poolWithFilterSizeEqualsOne";
  }
  getUserCode() {
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];

          let xRCCorner = coords.yz * uniforms.stride;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          let value = getX(batch, xRCorner, xCCorner, d);
          setOutputAtIndex(index, value);
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/AvgPool.ts
function avgPool2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const dilations = 1;
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, dilations, pad2, dimRoundingMode);
  if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 && util_exports.arraysEqual(convInfo.inShape, convInfo.outShape)) {
    return identity({ inputs: { x }, backend });
  }
  let program;
  const dimensions = [{ type: "int32", data: [convInfo.strideHeight, convInfo.strideWidth] }];
  if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1) {
    program = new PoolWithFilterSizeEqualsOneProgram(convInfo);
  } else {
    program = new Pool2DProgram(convInfo, "avg");
    dimensions.push({ type: "int32", data: [convInfo.padInfo.top, convInfo.padInfo.left] }, {
      type: "int32",
      data: [convInfo.dilationHeight, convInfo.dilationWidth]
    }, { type: "int32", data: [convInfo.inHeight, convInfo.inWidth] }, {
      type: "int32",
      data: [convInfo.effectiveFilterHeight, convInfo.effectiveFilterWidth]
    });
  }
  return backend.runWebGPUProgram(program, [x], x.dtype, dimensions);
}
var avgPoolConfig = {
  kernelName: AvgPool,
  backendName: "webgpu",
  kernelFunc: avgPool2
};

// src/tfjs-backend-webgpu/src/kernels/BatchMatMul.ts
function batchMatMul(args) {
  const { inputs, backend, attrs } = args;
  const { a, b } = inputs;
  const { transposeA, transposeB } = attrs;
  return batchMatMulImpl({ a, b, transposeA, transposeB, backend });
}
var batchMatMulConfig = {
  kernelName: BatchMatMul,
  backendName: "webgpu",
  kernelFunc: batchMatMul
};

// src/tfjs-backend-webgpu/src/slice_webgpu.ts
var SliceProgram = class {
  constructor(start, destSize) {
    this.variableNames = ["source"];
    this.workPerThread = 1;
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = destSize;
    this.rank = destSize.length;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    this.start = start;
    this.uniforms = `start : ${getCoordsDataType(start.length)}; `;
    this.shaderKey = "slice";
  }
  getUserCode() {
    const dtype = getCoordsDataType(this.rank);
    const sourceCoords = getCoords(this.rank);
    let coordSum;
    if (this.start.length === 1) {
      coordSum = this.outputShape.map((_, i) => {
        return `sourceLoc = uniforms.start + coords;`;
      });
    } else {
      coordSum = this.outputShape.map((_, i) => {
        return `sourceLoc.${coords[i]} = uniforms.start[${i}] + coords.${coords[i]};`;
      });
    }
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          var sourceLoc : ${dtype};
          let coords = getCoordsFromIndex(index);
          ${coordSum.join("\n")}
          setOutputAtIndex(index, getSource(${sourceCoords}));
        }
      }
    `;
    return userCode;
  }
};
var coords = ["x", "y", "z", "w", "u", "v"];
function getCoords(rank) {
  if (rank === 1) {
    return "sourceLoc";
  } else if (rank <= 6) {
    return coords.slice(0, rank).map((coord) => `sourceLoc.${coord}`).join(",");
  } else {
    throw Error(`Slicing for rank ${rank} is not yet supported`);
  }
}

// src/tfjs-backend-webgpu/src/kernels/Slice.ts
function slice2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { begin, size } = attrs;
  const [$begin, $size] = slice_util_exports.parseSliceParams(x, begin, size);
  slice_util_exports.assertParamsValid(x, $begin, $size);
  if (backend.shouldExecuteOnCPU([x]) || x.dtype === "string") {
    const xBufferInfo = backend.tensorMap.get(x.dataId);
    const outValues = sliceImplCPU(xBufferInfo.values, $begin, $size, x.shape, x.dtype);
    return backend.makeTensorInfo($size, x.dtype, outValues);
  }
  if (util_exports.sizeFromShape($size) === 0) {
    return backend.makeTensorInfo($size, x.dtype, []);
  }
  const program = new SliceProgram($begin, $size);
  const uniformData = [{ type: "int32", data: $begin }];
  return backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
}
var sliceConfig = {
  kernelName: Slice,
  backendName: "webgpu",
  kernelFunc: slice2
};

// src/tfjs-backend-webgpu/src/kernels/BatchToSpaceND.ts
var batchToSpaceND2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockShape, crops } = attrs;
  util_exports.assert(x.shape.length <= 4, () => "batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet");
  const prod3 = blockShape.reduce((a, b) => a * b);
  const reshaped = backend_util_exports.getReshaped(x.shape, blockShape, prod3);
  const permuted = backend_util_exports.getPermuted(reshaped.length, blockShape.length);
  const reshapedPermuted = backend_util_exports.getReshapedPermuted(x.shape, blockShape, prod3);
  const sliceBeginCoords = backend_util_exports.getSliceBeginCoords(crops, blockShape.length);
  const sliceSize = backend_util_exports.getSliceSize(reshapedPermuted, crops, blockShape.length);
  const toDispose = [];
  const reshapedIntermediate = reshape2({ inputs: { x }, backend, attrs: { shape: reshaped } });
  const transposedIntermediate = transpose3({ inputs: { x: reshapedIntermediate }, backend, attrs: { perm: permuted } });
  const reshapedIntermediate2 = reshape2({
    inputs: { x: transposedIntermediate },
    backend,
    attrs: { shape: reshapedPermuted }
  });
  const sliced = slice2({
    inputs: { x: reshapedIntermediate2 },
    backend,
    attrs: { begin: sliceBeginCoords, size: sliceSize }
  });
  toDispose.push(reshapedIntermediate);
  toDispose.push(transposedIntermediate);
  toDispose.push(reshapedIntermediate2);
  toDispose.forEach((t) => backend.disposeData(t.dataId));
  return sliced;
};
var batchToSpaceNDConfig = {
  kernelName: BatchToSpaceND,
  backendName: "webgpu",
  kernelFunc: batchToSpaceND2
};

// src/tfjs-backend-webgpu/src/kernels/NotEqual.ts
var notEqual3 = binaryKernelFunc({
  opSnippet: 10 /* NOT_EQUAL */,
  dtype: "bool",
  cpuKernelImpl: notEqualImplCPU
});
var notEqualConfig = {
  kernelName: NotEqual,
  backendName: "webgpu",
  kernelFunc: notEqual3
};

// src/tfjs-backend-webgpu/src/kernels/Real.ts
function real3(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const inputData = backend.tensorMap.get(input.dataId);
  return identity({ inputs: { x: inputData.complexTensorInfos.real }, backend });
}
var realConfig = {
  kernelName: Real,
  backendName: "webgpu",
  kernelFunc: real3
};

// src/tfjs-backend-webgpu/src/kernel_utils/int.ts
function int(input, backend) {
  const program = new UnaryOpProgram(input.shape, 23 /* TO_INT */);
  const output = backend.runWebGPUProgram(program, [input], "int32");
  return { dataId: output.dataId, shape: output.shape, dtype: output.dtype };
}

// src/tfjs-backend-webgpu/src/kernels/Cast.ts
function cast3(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { dtype } = attrs;
  if (dtype === "complex64") {
    if (x.dtype === "complex64") {
      return identity({ inputs: { x }, backend });
    }
    const zerosTensor = zeros(x.shape);
    const floatX = cast3({ inputs: { x }, backend, attrs: { dtype: "float32" } });
    const result = complex2({ inputs: { real: floatX, imag: zerosTensor }, backend });
    zerosTensor.dispose();
    backend.disposeData(floatX.dataId);
    return result;
  }
  if (x.dtype === "complex64") {
    const realPart = real3({ inputs: { input: x }, backend });
    const result = cast3({ inputs: { x: realPart }, backend, attrs: { dtype } });
    backend.disposeData(realPart.dataId);
    return result;
  }
  if (!util_exports.hasEncodingLoss(x.dtype, dtype)) {
    const result = identity({ inputs: { x }, backend });
    return { dataId: result.dataId, shape: result.shape, dtype };
  }
  if (dtype === "int32") {
    return int(x, backend);
  }
  if (dtype === "bool") {
    const zerosTensorInfo = backend.makeTensorInfo([], "bool", util_exports.getTypedArrayFromDType("bool", 1));
    const binaryInputs = { a: x, b: zerosTensorInfo };
    const result = notEqual3({ inputs: binaryInputs, backend });
    backend.disposeData(zerosTensorInfo.dataId);
    return result;
  }
  throw new Error(`Error in Cast: failed to cast ${x.dtype} to ${dtype}`);
}
var castConfig = {
  kernelName: Cast,
  backendName: "webgpu",
  kernelFunc: cast3
};

// src/tfjs-backend-webgpu/src/kernels/Ceil.ts
var ceil3 = unaryKernelFunc({ opType: 1 /* CEIL */, cpuKernelImpl: ceilImplCPU });
var ceilConfig = {
  kernelName: Ceil,
  backendName: "webgpu",
  kernelFunc: ceil3
};

// src/tfjs-backend-webgpu/src/clip_vec4_webgpu.ts
var ClipVec4Program = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.uniforms = "minVal : f32; maxVal : f32;";
    this.workPerThread = 4;
    this.workGroupSize = [64, 1, 1];
    this.isVec4 = true;
    this.size = true;
    this.outputShape = outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    this.shaderKey = "clipVec4";
  }
  getUserCode() {
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          var clampedValue : vec4<f32>;
          for (var i = 0; i < 4; i = i + 1) {
            if (isnan(value[i])) {
              clampedValue[i] = value[i];
            } else {
              clampedValue[i] = clamp(value[i], uniforms.minVal, uniforms.maxVal);
            }
          }

          setOutputAtIndex(index, clampedValue);
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/clip_webgpu.ts
var ClipProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.uniforms = "minVal : f32; maxVal : f32;";
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = "clip";
  }
  getUserCode() {
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          if (isnan(value)) {
            setOutputAtIndex(index, value);
            return;
          }
          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/ClipByValue.ts
function clipByValue2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { clipValueMin, clipValueMax } = attrs;
  let program;
  const uniformData = [
    { type: "float32", data: [clipValueMin] },
    { type: "float32", data: [clipValueMax] }
  ];
  if (util_exports.sizeFromShape(x.shape) % 4 === 0) {
    program = new ClipVec4Program(x.shape);
  } else {
    program = new ClipProgram(x.shape);
  }
  return backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
}
var clipByValueConfig = {
  kernelName: ClipByValue,
  backendName: "webgpu",
  kernelFunc: clipByValue2
};

// src/tfjs-backend-webgpu/src/concat_webgpu.ts
var ConcatProgram = class {
  constructor(shapes) {
    this.uniforms = "";
    this.workPerThread = 4;
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = backend_util_exports.computeOutShape(shapes, 1);
    this.variableNames = shapes.map((_, i) => `T${i}`);
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    this.offsetLength = shapes.length - 1;
    for (let i = 0; i < this.offsetLength; i++) {
      this.uniforms += `offset${i} : i32;`;
    }
    this.shaderKey = "concat";
  }
  getUserCode() {
    const snippets = [];
    if (this.offsetLength > 0) {
      snippets.push(`if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }`);
      for (let i = 1; i < this.offsetLength; i++) {
        snippets.push(`else if (yC < uniforms.offset${[i]}){ setOutputAtCoords(coords.x, coords.y, getT${i}(yR, yC - uniforms.offset${i - 1})); }`);
      }
      const lastIndex = this.offsetLength;
      const lastShiftIndex = this.offsetLength - 1;
      snippets.push(`else { setOutputAtCoords(coords.x, coords.y, getT${lastIndex}(yR, yC - uniforms.offset${lastShiftIndex})); }`);
    } else {
      snippets.push(`setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));`);
    }
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            let yR = coords.x;
            let yC = coords.y;

            ${snippets.join("\n        ")}
          }
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Imag.ts
function imag2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const inputData = backend.tensorMap.get(input.dataId);
  return identity({ inputs: { x: inputData.complexTensorInfos.imag }, backend });
}
var imagConfig = {
  kernelName: Imag,
  backendName: "webgpu",
  kernelFunc: imag2
};

// src/tfjs-backend-webgpu/src/kernels/Concat_impl.ts
function concatImpl2(inputs, axis, backend) {
  const dtype = inputs[0].dtype;
  if (dtype === "complex64") {
    const reals = inputs.map((t) => real3({ inputs: { input: t }, backend }));
    const imags = inputs.map((t) => imag2({ inputs: { input: t }, backend }));
    const realConcated = concatImpl2(reals, axis, backend);
    const imagConcated = concatImpl2(imags, axis, backend);
    const result = complex2({ inputs: { real: realConcated, imag: imagConcated }, backend });
    reals.forEach((r) => backend.disposeData(r.dataId));
    imags.forEach((i) => backend.disposeData(i.dataId));
    backend.disposeData(realConcated.dataId);
    backend.disposeData(imagConcated.dataId);
    return result;
  }
  let runOnCpu = backend.shouldExecuteOnCPU(inputs);
  if (dtype === "string") {
    runOnCpu = true;
  }
  if (runOnCpu) {
    const tensors2D2 = inputs.map((t) => {
      const innerSize = util_exports.sizeFromShape(t.shape.slice(axis));
      const shape = [-1, innerSize];
      return reshape2({ inputs: { x: t }, backend, attrs: { shape } });
    });
    const inputsValShapes = tensors2D2.map((t) => {
      return { vals: backend.readSync(t.dataId), shape: t.shape };
    });
    const outShape2 = backend_util_exports.computeOutShape(tensors2D2.map((t) => t.shape), 1);
    const simplyConcat = tensors2D2[0].shape[0] === 1;
    const outVals = concatImplCPU(inputsValShapes, outShape2, dtype, simplyConcat);
    const finalOutShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), axis);
    const outInfo = backend.makeTensorInfo(finalOutShape, dtype, outVals);
    tensors2D2.forEach((t) => backend.disposeData(t.dataId));
    return outInfo;
  }
  const { tensors2D, outShape } = computeTensors2D(inputs, axis, backend);
  const shapes = tensors2D.map((t) => t.shape);
  const program = new ConcatProgram(shapes);
  const uniformData = [];
  const offsets = new Array(shapes.length - 1);
  if (offsets.length > 0) {
    offsets[0] = shapes[0][1];
    uniformData.push({ type: "int32", data: [offsets[0]] });
    for (let i = 1; i < offsets.length; i++) {
      offsets[i] = offsets[i - 1] + shapes[i][1];
      uniformData.push({ type: "int32", data: [offsets[i]] });
    }
  }
  const res = backend.runWebGPUProgram(program, tensors2D, tensors2D[0].dtype, uniformData);
  tensors2D.forEach((r) => backend.disposeData(r.dataId));
  const reshapedResult = reshape2({ inputs: { x: res }, backend, attrs: { shape: outShape } });
  backend.disposeData(res.dataId);
  return reshapedResult;
}
function computeTensors2D(inputs, axis, backend) {
  const outShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), axis);
  const tensors2D = inputs.map((t) => reshape2({
    inputs: { x: t },
    backend,
    attrs: {
      shape: [
        util_exports.sizeFromShape(t.shape.slice(0, axis)),
        util_exports.sizeFromShape(t.shape.slice(axis))
      ]
    }
  }));
  return { tensors2D, outShape };
}

// src/tfjs-backend-webgpu/src/kernels/Concat.ts
function concat2(args) {
  const { inputs, backend, attrs } = args;
  const { axis } = attrs;
  const $axis = util_exports.parseAxisParam(axis, inputs[0].shape)[0];
  const outShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), $axis);
  if (util_exports.sizeFromShape(outShape) === 0) {
    return backend.makeTensorInfo(outShape, inputs[0].dtype, []);
  }
  const $inputs = inputs.filter((t) => util_exports.sizeFromShape(t.shape) > 0);
  if ($inputs.length === 1) {
    return identity({ inputs: { x: $inputs[0] }, backend });
  }
  const shapes = $inputs.map((t) => t.shape);
  backend_util_exports.assertParamsConsistent(shapes, $axis);
  return concatImpl2($inputs, $axis, backend);
}
var concatConfig = {
  kernelName: Concat,
  backendName: "webgpu",
  kernelFunc: concat2
};

// src/tfjs-backend-webgpu/src/im2col_webgpu.ts
var Im2ColProgram = class {
  constructor(outputShape, isChannelsLast) {
    this.variableNames = ["A"];
    this.uniforms = `pad : vec2<i32>; stride : vec2<i32>; dilation : vec2<i32>; outWidth : i32; itemsPerBlockRow : i32;
      inChannels : i32;`;
    this.workPerThread = 4;
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    this.isChannelsLast = isChannelsLast;
    this.shaderKey = `im2col_${this.isChannelsLast}`;
  }
  getUserCode() {
    const rowDim = this.isChannelsLast ? 0 : 1;
    const colDim = this.isChannelsLast ? 1 : 2;
    const userCode = `
    ${getMainHeaderAndGlobalIndexString()}

      for(var i = 0; i<${this.workPerThread}; i = i + 1) {
        let flatIndex = index * ${this.workPerThread} + i;

        let rc = getCoordsFromIndex(flatIndex);

        if(flatIndex < uniforms.size) {
          let blockIndex = rc[0];
          let pos = rc[1];

          let offsetY = blockIndex / uniforms.outWidth * uniforms.stride[1] - uniforms.pad[1];
          let d0 = offsetY + uniforms.dilation[1] * pos / uniforms.itemsPerBlockRow;
          var value = 0.0;
          if(d0 < uniforms.aShape[${rowDim}] && d0 >= 0) {
            let offsetX = (blockIndex % uniforms.outWidth) * uniforms.stride[0] -
              uniforms.pad[0];
            let d1 = offsetX + uniforms.dilation[0] * ((pos %
              uniforms.itemsPerBlockRow) / uniforms.inChannels);
            let ch = pos % uniforms.inChannels;
            if(d1 < uniforms.aShape[${colDim}] && d1 >= 0) {
              value = getA(d0, d1, ch);
            }
          }
          setOutputAtIndex(flatIndex, value);
        }
      }
    }
  `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/conv2d_mm_vec4_webgpu.ts
var Conv2DMMVec4Program = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivationWeights = false, hasLeakyreluAlpha = false) {
    this.variableNames = ["x", "W"];
    this.uniforms = `filterDims : vec2<i32>; pad : vec2<i32>; stride : vec2<i32>; dilation : vec2<i32>;
      dimAOuter : i32; dimBOuter : i32; dimInner : i32;`;
    this.workGroupSize = [8, 8, 1];
    this.isVec4 = true;
    this.outputShape = convInfo.outShape;
    util_exports.assert(convInfo.dataFormat === "channelsLast", () => "TODO: NCHW is unimplemented");
    this.dispatchLayout = { x: [3], y: [1, 2], z: [0] };
    if (this.outputShape[1] === 1) {
      this.elementsPerThread = [4, 1, 1];
    } else {
      this.elementsPerThread = [4, 4, 1];
    }
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, this.elementsPerThread);
    this.convInfo = convInfo;
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivationWeights = hasPreluActivationWeights;
    this.hasLeakyreluAlpha = hasLeakyreluAlpha;
    if (this.addBias) {
      this.variableNames.push("bias");
    }
    if (this.hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    if (this.hasLeakyreluAlpha) {
      this.variableNames.push("leakyreluAlpha");
    }
    this.tileAOuter = this.outputShape[1] === 1 ? 1 : this.workGroupSize[1] * this.elementsPerThread[1];
    this.tileBOuter = this.workGroupSize[0] * this.elementsPerThread[0];
    this.tileInner = this.tileBOuter;
    [this.fitA, this.fitB] = this.getShapeFit();
    this.shaderKey = `conv2DMMVec4_${this.activation}_${this.fitA}_${this.fitB}_${this.elementsPerThread}`;
  }
  getShapeFit() {
    const tileSizeA = [this.tileAOuter, this.tileInner];
    const tileSizeB = [this.tileInner, this.tileBOuter];
    const dimAOuter = this.outputShape[1] * this.outputShape[2];
    const dimBOuter = this.outputShape[3];
    const dimInner = this.convInfo.filterHeight * this.convInfo.filterWidth * this.convInfo.inChannels;
    return [
      tilesFitEvenlyIntoShape(tileSizeA, [dimAOuter, dimInner]),
      tilesFitEvenlyIntoShape(tileSizeB, [dimInner, dimBOuter])
    ];
  }
  getSampleAWithRemainder(index) {
    return `let flatIndex${index} = getIndexFromCoords4D(coord, uniforms.xShape);
    let divBy4Remainder${index} = flatIndex${index} % 4;
    let divBy4Index${index} = flatIndex${index} / 4;
    let curData${index} = x.numbers[divBy4Index${index}];
    if (divBy4Remainder${index} == 0) {
      temp = curData${index};
    } else {
      // TODO: This could end up being a redundant load with another one in
      // the same shader invocation. Perhaps there's an opportunity for
      // optimization
      let nextData${index} = x.numbers[divBy4Index${index} + 1];
      if (divBy4Remainder${index} == 1) {
        temp = vec4<f32>(curData${index}.yzw, nextData${index}.x);
      } else if (divBy4Remainder${index} == 2) {
        temp = vec4<f32>(curData${index}.zw, nextData${index}.xy);
      } else if (divBy4Remainder${index} == 3) {
        temp = vec4<f32>(curData${index}.w, nextData${index}.xyz);
      }
    }
    `;
  }
  getUserCode() {
    const matMulSource = makeMatMulPackedVec4Source(this.elementsPerThread, this.tileAOuter, this.tileBOuter, this.tileInner);
    const remainder = this.convInfo.inChannels % 4;
    const remainderSnippet = remainder === 0 ? `// The bounds checking is always needed since we use it to pad zero for
          // the 'same' padding type.
          if (coordsInBounds4D(coord, uniforms.xShape)) {
            resData = x.numbers[getIndexFromCoords4D(coord, uniforms.xShape) / 4];
          } else {
            resData = vec4<f32>(0.0); }` : `var temp = vec4<f32>(0.0);
          ${this.getSampleAWithRemainder(1)}
          resData = temp;
          if (WCol == (uniforms.filterDims[1] - 1)) {
            coord = vec4<i32>(
              coord.x, coord.y + 1, coord.z + 1 - uniforms.filterDims[1], 0);
              ${this.getSampleAWithRemainder(2)}
            if (inChCoord == 0) {
              resData = vec4<f32>(resData.xyz, temp.x);
            } else if (inChCoord == 1) {
              resData = vec4<f32>(resData.xy, temp.xy);
            } else {
              resData = vec4<f32>(resData.x, temp.xyz);
            }
          }
          `;
    const readASnippet = `let outRow = r / uniforms.outShape[2];
        let outCol = r % uniforms.outShape[2];
        let WRow = c / (uniforms.filterDims[1] * uniforms.xShape[3]);
        let WCol = c / uniforms.xShape[3] % uniforms.filterDims[1];
        let inChCoord = c % uniforms.xShape[3];
        var coord = vec4<i32>(
            batch,
            outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0],
            outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1],
            inChCoord);
        var resData = vec4<f32>(0.0);
        ${remainderSnippet}
        return resData;`;
    const sampleA = this.fitA ? `${readASnippet}` : `if (r < uniforms.dimAOuter && c < uniforms.dimInner) {
          ${readASnippet}
         }
         return vec4<f32>(0.0);
        `;
    const sampleB = this.fitB ? `return W.numbers[row * uniforms.dimBOuter / 4 + col];` : `if(coordsInBounds2D(vec2<i32>(row, col * 4), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {
           return W.numbers[row * uniforms.dimBOuter / 4 + col];
         }
         return vec4<f32>(0.0);
        `;
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation, this.isVec4);
      if (this.hasPreluActivationWeights) {
        activationSnippet = `fn activation(a : vec4<f32>, outCoord : vec4<i32>) -> vec4<f32> {
          let b = getPreluActivationWeightsByOutputCoords(outCoord);
          ${activationOp}
        }`;
      } else if (this.hasLeakyreluAlpha) {
        activationSnippet = `fn activation(outCoord: vec4<f32>) -> vec4<f32> {
          let b = getLeakyreluAlphaByOutputCoords(outCoord);
          ${activationOp}
        }`;
        throw new Error("Leakyrelu is not supported.");
      } else {
        activationSnippet = `
        fn activation(a : vec4<f32>, outCoord : vec4<i32>) -> vec4<f32> {
          ${activationOp}
        }`;
      }
      applyActivationSnippet = `value = activation(value, outCoord);`;
    }
    const addBiasSnippet = this.addBias ? "value = value + getBiasByOutputCoords(outCoord);" : "";
    const userCode = `
        ${activationSnippet}
        fn mm_readA(row : i32, col : i32, globalId : vec3<u32>) -> vec4<f32> {
          let r = row;
          let c = col * 4;
          var batch = i32(globalId.z);
          ${sampleA}
        }

        fn mm_readB(row : i32, col : i32, globalId : vec3<u32>) -> vec4<f32> {
          ${sampleB}
        }

        fn mm_write(row : i32, col : i32, valueInput : vec4<f32>, globalId : vec3<u32>) {
          var batch = i32(globalId.z);
          var value = valueInput;
          if (row < uniforms.dimAOuter && col * 4 < uniforms.dimBOuter)
          {
            let outCoord = vec4<i32>(
              batch,
              row / uniforms.outShape[2],
              row % uniforms.outShape[2],
              col * 4);
            ${addBiasSnippet}
            ${applyActivationSnippet}
            setOutputAtCoords(outCoord[0], outCoord[1], outCoord[2], outCoord[3],
              value);
          }
        }
        ${matMulSource}
      `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/conv2d_mm_webgpu.ts
var Conv2DMMProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivationWeights = false) {
    this.variableNames = ["x", "W"];
    this.uniforms = `filterDims : vec2<i32>; pad : vec2<i32>; stride : vec2<i32>; dilation : vec2<i32>; dimAOuter : i32; dimBOuter : i32; dimInner : i32;`;
    this.outputShape = convInfo.outShape;
    util_exports.assert(convInfo.dataFormat === "channelsLast", () => "TODO: NCHW is unimplemented");
    this.dispatchLayout = { x: [3], y: [1, 2], z: [0] };
    this.workGroupSize = computeWorkGroupSizeForConv2d(this.dispatchLayout, this.outputShape);
    this.elementsPerThread = computeWorkPerThreadForConv2d(this.dispatchLayout, this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, this.elementsPerThread);
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    this.convInfo = convInfo;
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivationWeights = hasPreluActivationWeights;
    [this.fitA, this.fitB] = this.getShapeFit();
    this.shaderKey = `conv2DMM_${this.elementsPerThread}_${this.activation}_${this.fitA}_${this.fitB}`;
  }
  getShapeFit() {
    const tileAOuter = this.workGroupSize[1] * this.elementsPerThread[1];
    const tileBOuter = this.workGroupSize[0] * this.elementsPerThread[0];
    const tileInner = tileAOuter > tileBOuter ? tileAOuter : tileBOuter;
    util_exports.assert(tileInner % this.workGroupSize[0] === 0 && tileInner % this.workGroupSize[1] === 0, () => "tileInner must be multiple of workgroupsize.x and workgroupsize.y");
    const tileSizeA = [tileAOuter, tileInner];
    const tileSizeB = [tileInner, tileBOuter];
    const dimAOuter = this.outputShape[1] * this.outputShape[2];
    const dimBOuter = this.outputShape[3];
    const dimInner = this.convInfo.filterHeight * this.convInfo.filterWidth * this.convInfo.inChannels;
    return [
      tilesFitEvenlyIntoShape(tileSizeA, [dimAOuter, dimInner]),
      tilesFitEvenlyIntoShape(tileSizeB, [dimInner, dimBOuter])
    ];
  }
  getUserCode() {
    const matMulSource = makeMatMulPackedSource(this.elementsPerThread, this.workGroupSize);
    const readASnippet = `
    let outRow = row / uniforms.outShape[2];
    let outCol = row % uniforms.outShape[2];

    let WRow = col / (uniforms.filterDims[1] * uniforms.xShape[3]);
    let WCol = col / uniforms.xShape[3] % uniforms.filterDims[1];
    let coord = vec4<i32>(
        batch,
        outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0],
        outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1],
        col % uniforms.xShape[3]);
    // The bounds checking is always needed since we use it to pad zero for the
    // 'same' padding type.
    if(coordsInBounds4D(coord, uniforms.xShape)) {
      return x.numbers[getIndexFromCoords4D(coord, uniforms.xShape)];
    }
    return 0.0;`;
    const sampleA = this.fitA ? `${readASnippet}` : `if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
      ${readASnippet}
    }
    return 0.0;
    `;
    const sampleB = this.fitB ? `return W.numbers[row * uniforms.dimBOuter + col];` : `if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {
           return W.numbers[row * uniforms.dimBOuter + col];
	 }
	 return 0.0;
	 `;
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation, false);
      if (this.hasPreluActivationWeights) {
        activationSnippet = `fn activation(a: f32, outCoord : vec4<i32>) -> f32 {
                  let b = getPreluActivationWeightsByOutputCoords(outCoord);
                  ${activationOp}
                }`;
      } else {
        activationSnippet = `
                  fn activation(a : f32, outCoord : vec4<i32>) -> f32 {
                    ${activationOp}
                  }
                `;
      }
      applyActivationSnippet = `value = activation(value, outCoord);`;
    }
    const addBiasSnippet = this.addBias ? "value = value + getBiasByOutputCoords(outCoord);" : "";
    const userCode = `
    ${activationSnippet}
    fn mm_readA(row : i32, col : i32, globalId : vec3<u32>) -> f32 {
      var batch = i32(globalId.z);
      ${sampleA}
    }

    fn mm_readB(row : i32, col : i32, globalId : vec3<u32>) -> f32 {
      ${sampleB}
    }

    fn mm_write(row : i32, col : i32, valueInput : f32, globalId : vec3<u32>) {
      var batch = i32(globalId.z);
      var value = valueInput;
      let outCoord = vec4<i32>(
          batch,
          row / uniforms.outShape[2],
          row % uniforms.outShape[2],
          col);
      ${addBiasSnippet}
      ${applyActivationSnippet}
      result.numbers[getIndexFromCoords4D(outCoord, uniforms.outShape)] = value;
    }
    ${matMulSource}
  `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/conv2d_naive_webgpu.ts
var Conv2DNaiveProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivationWeights = false) {
    this.variableNames = ["x", "W"];
    this.uniforms = `filterDims : vec2<i32>; pad : vec2<i32>; stride : vec2<i32>; dilation : vec2<i32>;`;
    this.workGroupSize = [128, 1, 1];
    this.outputShape = convInfo.outShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    util_exports.assert(convInfo.dataFormat === "channelsLast", () => "TODO: NCHW is unimplemented");
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    this.convInfo = convInfo;
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivationWeights = hasPreluActivationWeights;
    this.shaderKey = `conv2DNaive_${this.activation}`;
  }
  getUserCode() {
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation);
      if (this.hasPreluActivationWeights) {
        activationSnippet = `fn activation(a : f32, outCoord : vec4<i32>) -> f32{
               let b = getPreluActivationWeightsByOutputCoords(outCoord);
               ${activationOp}
             }`;
      } else {
        activationSnippet = `
                  fn activation(a : f32, outCoord : vec4<i32>) -> f32{
                    ${activationOp}
                  }
                `;
      }
      applyActivationSnippet = `value = activation(value, outCoord);`;
    }
    const addBiasSnippet = this.addBias ? "value = value + getBiasByOutputCoords(outCoord);" : "";
    const userCode = `
      ${activationSnippet}
      fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32 {
        let coord = vec4<i32>(batch, row, col, chan);
        if(coordsInBounds4D(coord, uniforms.xShape)) {
          return getX(batch, row, col, chan);
        }
        return 0.0;
      }

      fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{
        let coord = vec4<i32>(row, col, xChannel, outChannel);
        if(coordsInBounds4D(coord, uniforms.wShape)) {
          return getW(row, col, xChannel, outChannel);
        }
        return 0.0;
      }

      fn writeResult(batch : i32, row : i32, col : i32, chan : i32, value : f32) {
        let coord = vec4<i32>(batch, row, col, chan);
        if (coordsInBounds4D(coord, uniforms.outShape)) {
          ${addBiasSnippet}
          ${applyActivationSnippet}
          setOutputAtCoords(batch, row, col, chan, value);
        }
      }

      ${getMainHeaderString()}
        let coords = getOutputCoords();
        let batch = coords[0];
        let outChannel = coords[3];

        var acc = 0.0;

        for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {
          for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {
            for (var xChannel = 0; xChannel < uniforms.xShape[3]; xChannel = xChannel + 1) {
              let coordRow = coords[1] * uniforms.stride[0] + uniforms.dilation[0] * row - uniforms.pad[0];
              let coordCol = coords[2] * uniforms.stride[1] + uniforms.dilation[1] * col - uniforms.pad[1];
              let v = readInp(batch, coordRow, coordCol, xChannel);
              let f = readFilt(row, col, xChannel, outChannel);
              acc = acc + v * f;
            }
          }
        }

        writeResult(batch, coords[1], coords[2], outChannel, acc);
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Conv2D_impl.ts
function conv2dByMatMul({
  x,
  filter,
  convInfo,
  backend,
  bias = null,
  preluActivationWeights = null,
  leakyreluAlpha = 0,
  activation = null
}) {
  const xShape = x.shape;
  const isChannelsLast = convInfo.dataFormat === "channelsLast";
  const transposeA = false;
  const transposeB = false;
  const sameSize = convInfo.filterHeight === convInfo.inHeight && convInfo.filterWidth === convInfo.inWidth && convInfo.padInfo.type === "VALID";
  let xReshaped;
  let filterReshaped;
  if (sameSize) {
    const sharedDim = convInfo.inHeight * convInfo.inWidth * convInfo.inChannels;
    xReshaped = reshape2({
      inputs: { x },
      backend,
      attrs: { shape: [1, convInfo.batchSize, sharedDim] }
    });
    filterReshaped = reshape2({
      inputs: { x: filter },
      backend,
      attrs: { shape: [1, sharedDim, convInfo.outChannels] }
    });
  } else {
    const targetShape = isChannelsLast ? xShape[0] * xShape[1] * xShape[2] : xShape[0] * xShape[2] * xShape[3];
    xReshaped = reshape2({
      inputs: { x },
      backend,
      attrs: { shape: [1, targetShape, convInfo.inChannels] }
    });
    filterReshaped = reshape2({
      inputs: { x: filter },
      backend,
      attrs: { shape: [1, convInfo.inChannels, convInfo.outChannels] }
    });
  }
  const result = batchMatMulImpl({
    a: xReshaped,
    b: filterReshaped,
    transposeA,
    transposeB,
    backend,
    bias,
    activation,
    preluActivationWeights,
    leakyreluAlpha
  });
  const out = reshape2({ inputs: { x: result }, backend, attrs: { shape: convInfo.outShape } });
  backend.disposeData(xReshaped.dataId);
  backend.disposeData(filterReshaped.dataId);
  backend.disposeData(result.dataId);
  return out;
}
function conv2dWithIm2Col({
  x,
  filter,
  convInfo,
  backend,
  bias = null,
  preluActivationWeights = null,
  leakyreluAlpha = 0,
  activation = null
}) {
  const {
    filterWidth,
    filterHeight,
    inChannels,
    strideWidth,
    strideHeight,
    padInfo,
    outWidth,
    outHeight,
    dilationWidth,
    dilationHeight,
    dataFormat
  } = convInfo;
  const isChannelsLast = dataFormat === "channelsLast";
  const sharedDim = filterWidth * filterHeight * inChannels;
  const numCols = outHeight * outWidth;
  const x2ColShape = [numCols, sharedDim];
  const transposeA = false;
  const transposeB = false;
  const intermediates = [];
  const xSqueezed = reshape2({ inputs: { x }, backend, attrs: { shape: x.shape.slice(1) } });
  const w2Row = reshape2({ inputs: { x: filter }, backend, attrs: { shape: [1, sharedDim, -1] } });
  intermediates.push(xSqueezed);
  intermediates.push(w2Row);
  const im2ColProgram = new Im2ColProgram(x2ColShape, isChannelsLast);
  const dimensions = [
    { type: "int32", data: [padInfo.left, padInfo.top] },
    { type: "int32", data: [strideWidth, strideHeight] },
    { type: "int32", data: [dilationWidth, dilationHeight] },
    { type: "int32", data: [outWidth] },
    { type: "int32", data: [inChannels * filterWidth] },
    { type: "int32", data: [inChannels] }
  ];
  const im2Col = backend.runWebGPUProgram(im2ColProgram, [xSqueezed], xSqueezed.dtype, dimensions);
  const im2Col3D = reshape2({
    inputs: { x: im2Col },
    backend,
    attrs: { shape: [1, x2ColShape[0], x2ColShape[1]] }
  });
  intermediates.push(im2Col);
  intermediates.push(im2Col3D);
  const a3dShape = [1, x2ColShape[0], x2ColShape[1]];
  const matMulProgram = new MatMulPackedProgram(a3dShape, [1, numCols, convInfo.outChannels], env().get("WEBGPU_MATMUL_WORK_PER_THREAD"), transposeA, transposeB, bias, activation, preluActivationWeights);
  const dimAOuter = a3dShape[1];
  const dimInner = a3dShape[2];
  const dimBOuter = convInfo.outChannels;
  const matmulDimensions = [
    { type: "int32", data: [dimAOuter] },
    { type: "int32", data: [dimBOuter] },
    { type: "int32", data: [dimInner] }
  ];
  const inputs = [im2Col3D, w2Row];
  if (bias) {
    inputs.push(bias);
  }
  if (preluActivationWeights) {
    inputs.push(preluActivationWeights);
  }
  const result = backend.runWebGPUProgram(matMulProgram, inputs, im2Col3D.dtype, matmulDimensions);
  const outShape = isChannelsLast ? [1, outHeight, outWidth, convInfo.outChannels] : [1, convInfo.outChannels, outHeight, outWidth];
  const out = reshape2({ inputs: { x: result }, backend, attrs: { shape: outShape } });
  intermediates.push(result);
  for (const i of intermediates) {
    backend.disposeData(i.dataId);
  }
  return out;
}
function conv2DImpl({
  x,
  filter,
  convInfo,
  backend,
  bias = null,
  preluActivationWeights = null,
  leakyreluAlpha = 0,
  activation = null
}) {
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  let program;
  const sameSize = convInfo.filterHeight === convInfo.inHeight && convInfo.filterWidth === convInfo.inWidth && convInfo.padInfo.type === "VALID";
  if (sameSize || convInfo.filterHeight === 1 && convInfo.filterWidth === 1 && convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 && convInfo.strideHeight === 1 && convInfo.strideWidth === 1 && (convInfo.padInfo.type === "SAME" || convInfo.padInfo.type === "VALID")) {
    return conv2dByMatMul({
      x,
      filter,
      convInfo,
      backend,
      bias,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    });
  }
  if (env().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER") && x.shape[0] === 1) {
    return conv2dWithIm2Col({
      x,
      filter,
      convInfo,
      backend,
      bias,
      preluActivationWeights,
      leakyreluAlpha,
      activation
    });
  }
  const useNaive = env().getBool("WEBGPU_USE_NAIVE_CONV2D");
  const useVec4 = (convInfo.inChannels % 4 === 0 || convInfo.inChannels === 3 && convInfo.padInfo.type === "VALID") && convInfo.outChannels % 4 === 0 && convInfo.outChannels >= 32;
  const padInfo = [convInfo.padInfo.top, convInfo.padInfo.left];
  const dimensions = [
    { type: "int32", data: [convInfo.filterHeight, convInfo.filterWidth] },
    { type: "int32", data: [...padInfo] },
    { type: "int32", data: [convInfo.strideHeight, convInfo.strideWidth] },
    { type: "int32", data: [convInfo.dilationHeight, convInfo.dilationWidth] }
  ];
  if (useNaive) {
    program = new Conv2DNaiveProgram(convInfo, hasBias, activation, hasPreluActivationWeights);
  } else {
    if (useVec4) {
      program = new Conv2DMMVec4Program(convInfo, hasBias, activation, hasPreluActivationWeights);
    } else {
      program = new Conv2DMMProgram(convInfo, hasBias, activation, hasPreluActivationWeights);
    }
    const dimAOuter = convInfo.outShape[1] * convInfo.outShape[2];
    const dimBOuter = convInfo.outShape[3];
    const dimInner = convInfo.filterHeight * convInfo.filterWidth * convInfo.inShape[3];
    dimensions.push({ type: "int32", data: [dimAOuter] }, { type: "int32", data: [dimBOuter] }, { type: "int32", data: [dimInner] });
  }
  const inputVar = [x, filter];
  if (hasBias) {
    inputVar.push(bias);
  }
  if (hasPreluActivationWeights) {
    inputVar.push(preluActivationWeights);
  }
  return backend.runWebGPUProgram(program, inputVar, x.dtype, dimensions);
}

// src/tfjs-backend-webgpu/src/kernels/Conv2D.ts
function conv2d3(args) {
  const { inputs, attrs, backend } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dataFormat, dilations, dimRoundingMode } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad2, dimRoundingMode, false, $dataFormat);
  return conv2DImpl({ x, filter, convInfo, backend });
}
var conv2DConfig = {
  kernelName: Conv2D,
  backendName: "webgpu",
  kernelFunc: conv2d3
};

// src/tfjs-backend-webgpu/src/conv_backprop_mm_webgpu.ts
var Conv2DDerInputMMProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "W"];
    this.uniforms = "filterDims : vec2<i32>; pads : vec2<i32>; stride : vec2<i32>; outBackprop : vec4<i32>; dimAOuter : i32; dimBOuter : i32; dimInner : i32;";
    this.outputShape = convInfo.inShape;
    util_exports.assert(convInfo.dataFormat === "channelsLast", () => "TODO: NCHW is unimplemented");
    this.dispatchLayout = { x: [3], y: [1, 2], z: [0] };
    this.workGroupSize = computeWorkGroupSizeForConv2d(this.dispatchLayout, this.outputShape);
    this.elementsPerThread = computeWorkPerThreadForConv2d(this.dispatchLayout, this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, this.elementsPerThread);
    this.shaderKey = `conv2DDerInputMM_${this.elementsPerThread}`;
  }
  getUserCode() {
    const matMulSource = makeMatMulPackedSource(this.elementsPerThread, this.workGroupSize);
    const readASnippet = `
    let outRow = row / uniforms.outShape[2];
    let outCol = row % uniforms.outShape[2];

    let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
    let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];
    let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.stride[0]);
    let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.stride[1]);
    if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {
      return 0.0;
    }
    if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {
      return 0.0;
    }
    let coord = vec4<i32>(
        batch,
        i32(xR),
        i32(xC),
        col % uniforms.outBackprop[3]);
    return x.numbers[getIndexFromCoords4D(coord, uniforms.xShape)];`;
    const sampleA = `if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
      ${readASnippet}
    }
    return 0.0;`;
    const userCode = `
    fn mm_readA(row : i32, col : i32, globalId : vec3<u32>) -> f32 {
      var batch = i32(globalId.z);
      ${sampleA}
    }

    fn mm_readB(row : i32, col : i32, globalId : vec3<u32>) -> f32 {
      let coordX = uniforms.filterDims.x - 1 -
          row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
      let coordY = uniforms.filterDims.y - 1 -
          (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];
      if (row < uniforms.dimInner && col < uniforms.dimBOuter &&
          coordX >= 0 && coordY >= 0) {
        let coord = vec4<i32>(coordX, coordY, col,
            row % uniforms.outBackprop[3]);
        return W.numbers[getIndexFromCoords4D(coord, uniforms.wShape)];
      }
      return 0.0;
    }

    fn mm_write(row : i32, col : i32, valueInput : f32, globalId : vec3<u32>) {
      var batch = i32(globalId.z);
      var value = valueInput;
      let outCoord = vec4<i32>(
          batch,
          row / uniforms.outShape[2],
          row % uniforms.outShape[2],
          col);
      result.numbers[getIndexFromCoords4D(outCoord, uniforms.outShape)] = value;
    }

    ${matMulSource}
  `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/conv_backprop_webgpu.ts
var Conv2DDerInputProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "W"];
    this.uniforms = "filterDims : vec2<i32>; pads : vec2<i32>; stride : vec2<i32>; outBackprop : vec4<i32>;";
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = convInfo.inShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.isChannelsLast = convInfo.dataFormat === "channelsLast";
    this.shaderKey = `conv2DDerInput_${this.isChannelsLast}`;
  }
  getUserCode() {
    const rowDim = this.isChannelsLast ? 1 : 2;
    const colDim = this.isChannelsLast ? 2 : 3;
    const channelDim = this.isChannelsLast ? 3 : 1;
    return `
    ${getMainHeaderAndGlobalIndexString()} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[${channelDim}];

        let dyCorner = vec2<i32>(coords[${rowDim}]), coords[${colDim}]) - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.stride.x);
          let wRPerm = uniforms.filterDims.x - 1 - wR;
          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||
              wRPerm < 0) {
            continue;
          }
          let idyR = dyR;

          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.stride.y);
            let wCPerm = uniforms.filterDims.y - 1 - wC;
            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
                fract(dyC) > 0.0 || wCPerm < 0) {
              continue;
            }
            let idyC = dyC;

            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {
              if (${this.isChannelsLast}) {
                let xValue = getDy(batch, idyR, idyC, d2);
                let wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd = dotProd + xValue * wValue;
              } else {
                let xValue = getDy(batch, d2, idyR, idyC);
                let wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd = dotProd + xValue * wValue;
              }

            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Conv2DBackpropInput.ts
function conv2DBackpropInput2(args) {
  const { inputs, backend, attrs } = args;
  const { dy, filter } = inputs;
  const { inputShape, strides, pad: pad2, dataFormat, dimRoundingMode } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(inputShape, filter.shape, strides, 1, pad2, dimRoundingMode, false, $dataFormat);
  const dimensions = [
    { type: "int32", data: [convInfo.filterHeight, convInfo.filterWidth] },
    {
      type: "int32",
      data: [
        convInfo.filterHeight - 1 - convInfo.padInfo.top,
        convInfo.filterWidth - 1 - convInfo.padInfo.left
      ]
    },
    { type: "int32", data: [convInfo.strideHeight, convInfo.strideWidth] },
    {
      type: "int32",
      data: [
        convInfo.batchSize,
        convInfo.outHeight,
        convInfo.outWidth,
        convInfo.outChannels
      ]
    }
  ];
  let program;
  if (env().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")) {
    program = new Conv2DDerInputProgram(convInfo);
  } else {
    program = new Conv2DDerInputMMProgram(convInfo);
    const dimAOuter = convInfo.inShape[1] * convInfo.inShape[2];
    const dimBOuter = convInfo.inShape[3];
    const dimInner = convInfo.filterHeight * convInfo.filterWidth * convInfo.outChannels;
    dimensions.push({ type: "uint32", data: [dimAOuter] }, { type: "uint32", data: [dimBOuter] }, { type: "uint32", data: [dimInner] });
  }
  return backend.runWebGPUProgram(program, [dy, filter], "float32", dimensions);
}
var conv2DBackpropInputConfig = {
  kernelName: Conv2DBackpropInput,
  backendName: "webgpu",
  kernelFunc: conv2DBackpropInput2
};

// src/tfjs-backend-webgpu/src/kernels/Cos.ts
var cos2 = unaryKernelFunc({ opType: 2 /* COS */ });
var cosConfig = {
  kernelName: Cos,
  backendName: "webgpu",
  kernelFunc: cos2
};

// src/tfjs-backend-webgpu/src/kernels/Cosh.ts
var cosh2 = unaryKernelFunc({ opType: 3 /* COSH */ });
var coshConfig = {
  kernelName: Cosh,
  backendName: "webgpu",
  kernelFunc: cosh2
};

// src/tfjs-backend-webgpu/src/crop_and_resize_webgpu.ts
var CropAndResizeProgram = class {
  constructor(channnel, boxShape, cropSize, method) {
    this.variableNames = ["Image", "Boxes", "BoxInd"];
    this.uniforms = "extrapolationValue : f32;";
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    const [numBoxes] = boxShape;
    this.outputShape = [numBoxes, cropSize[0], cropSize[1], channnel];
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.methodId = method === "bilinear" ? 1 : 0;
    this.cropHeightBiggerThan1 = this.outputShape[1] > 1;
    this.cropWidthBiggerThan1 = this.outputShape[2] > 1;
    this.shaderKey = `cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`;
  }
  getUserCode() {
    const [inputHeightFloat, inputWidthFloat] = [`f32(uniforms.imageShape[1] - 1)`, `f32(uniforms.imageShape[2] - 1)`];
    const [heightRatio, heightScale, inY] = this.cropHeightBiggerThan1 ? [
      `(${inputHeightFloat} / f32(uniforms.outShape[1] - 1))`,
      "(y2-y1) * height_ratio",
      `y1*${inputHeightFloat} + f32(y)*(height_scale)`
    ] : [
      "0.0",
      "0.0",
      `0.5 * (y1+y2) * ${inputHeightFloat}`
    ];
    const [widthRatio, widthScale, inX] = this.cropWidthBiggerThan1 ? [
      `(${inputWidthFloat} / f32(uniforms.outShape[2] - 1))`,
      "(x2-x1) * width_ratio",
      `x1*${inputWidthFloat} + f32(x)*(width_scale)`
    ] : [
      "0.0",
      "0.0",
      `0.5 * (x1+x2) * ${inputWidthFloat}`
    ];
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let height_ratio = f32(${heightRatio});
        let width_ratio = f32(${widthRatio});
        let b = coords[0];
        let y = coords[1];
        let x = coords[2];
        let d = coords[3];
        // get box vals
        let y1 = getBoxes(b, 0);
        let x1 = getBoxes(b, 1);
        let y2 = getBoxes(b, 2);
        let x2 = getBoxes(b, 3);
        // get image in batch index
        let bInd = i32(round(getBoxInd(b)));
        if(bInd < 0 || bInd >= uniforms.outShape[0]) {
          return;
        }
        let height_scale = ${heightScale};
        let width_scale = ${widthScale};
        let in_y = ${inY};
        if( in_y < 0.0 || in_y > ${inputHeightFloat} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let in_x = ${inX};
        if( in_x < 0.0 || in_x > ${inputWidthFloat} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let sourceFracIndexCR = vec2<f32>(in_x,in_y);
        if(${this.methodId} == 1) {
          // Compute the four integer indices.
          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);
          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));
          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);
          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);
          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);
          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);
          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);
          let top = topLeft + (topRight - topLeft) * fracCR.x;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          let newValue = top + (bottom - top) * fracCR.y;
          setOutputAtIndex(index, newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          let sourceNearestCR = vec2<i32>(floor(
            sourceFracIndexCR + vec2<f32>(0.5,0.5)));
          let newValue = getImage(
            bInd, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutputAtIndex(index, newValue);
        }
      }
    }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/CropAndResize.ts
var cropAndResize2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { image, boxes, boxInd } = inputs;
  const { cropSize, method, extrapolationValue } = attrs;
  const program = new CropAndResizeProgram(image.shape[3], boxes.shape, cropSize, method);
  const uniformData = [{ type: "float32", data: [extrapolationValue] }];
  return backend.runWebGPUProgram(program, [image, boxes, boxInd], "float32", uniformData);
};
var cropAndResizeConfig = {
  kernelName: CropAndResize,
  backendName: "webgpu",
  kernelFunc: cropAndResize2
};

// src/tfjs-backend-webgpu/src/depth_to_space_webgpu.ts
var DepthToSpaceProgram = class {
  constructor(outputShape, dataFormat) {
    this.variableNames = ["x"];
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.uniforms = "blockSize : i32;";
    this.outputShape = outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = `depthToSpace_${dataFormat}`;
    this.dataFormat = dataFormat;
  }
  getUserCode() {
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let h = ${this.getHeightCoordString()};
          let w = ${this.getWidthCoordString()};
          let d = ${this.getDepthCoordString()};

          let in_h = h / uniforms.blockSize;
          let offset_h = h % uniforms.blockSize;
          let in_w = w / uniforms.blockSize;
          let offset_w = w % uniforms.blockSize;
          let offset_d = (offset_h * uniforms.blockSize + offset_w) *
            ${this.getOutputDepthSize()};
          let in_d = d + offset_d;

          let rlt = ${this.getInputSamplingString()};
          setOutputAtIndex(index, rlt);
        }
      }`;
    return userCode;
  }
  getHeightCoordString() {
    if (this.dataFormat === "NHWC") {
      return `coords[1]`;
    } else {
      return `coords[2]`;
    }
  }
  getWidthCoordString() {
    if (this.dataFormat === "NHWC") {
      return `coords[2]`;
    } else {
      return `coords[3]`;
    }
  }
  getDepthCoordString() {
    if (this.dataFormat === "NHWC") {
      return `coords[3]`;
    } else {
      return `coords[1]`;
    }
  }
  getOutputDepthSize() {
    if (this.dataFormat === "NHWC") {
      return `uniforms.outShape[3]`;
    } else {
      return `uniforms.outShape[1]`;
    }
  }
  getInputSamplingString() {
    if (this.dataFormat === "NHWC") {
      return `getX(b, in_h, in_w, in_d)`;
    } else {
      return `getX(b, in_d, in_h, in_w)`;
    }
  }
};

// src/tfjs-backend-webgpu/src/kernels/DepthToSpace.ts
function depthToSpace2(args) {
  const { inputs, backend, attrs } = args;
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
  const uniformData = [
    { type: "int32", data: [blockSize] }
  ];
  const program = new DepthToSpaceProgram(outputShape, dataFormat);
  return backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
}
var depthToSpaceConfig = {
  kernelName: DepthToSpace,
  backendName: "webgpu",
  kernelFunc: depthToSpace2
};

// src/tfjs-backend-webgpu/src/depthwise_conv2d_3x3_webgpu.ts
var DepthwiseConv2D3x3Program = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false) {
    this.variableNames = ["x", "W"];
    this.uniforms = "pad : vec2<i32>; stride : vec2<i32>; dilation : vec2<i32>; inDims : vec2<i32>;";
    this.workGroupSize = [4, 4, 4];
    this.isVec4 = true;
    this.outputShape = convInfo.outShape;
    this.dispatchLayout = { x: [0, 1], y: [2], z: [3] };
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [1, 4, 4]);
    util_exports.assert(convInfo.dataFormat === "channelsLast", () => "TODO: NCHW is unimplemented");
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    this.convInfo = convInfo;
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivation = hasPreluActivation;
    this.shaderKey = `depthwise3x3_${activation}`;
  }
  getUserCode() {
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation, this.isVec4);
      if (this.hasPreluActivation) {
        activationSnippet = `fn activation(a : vec4<f32>, outCoord : vec4<i32>) -> vec4<f32> {
          let b = getPreluActivationWeightsByOutputCoords(outCoord);
          ${activationOp}
        }`;
      } else {
        activationSnippet = `
        fn activation(a : vec4<f32>, outCoord : vec4<i32>) -> vec4<f32> {
            ${activationOp}
          }
        `;
      }
      applyActivationSnippet = `dotProd[i] = activation(dotProd[i], coords);`;
    }
    const addBiasSnippet = this.addBias ? "dotProd[i] = dotProd[i] + getBiasByOutputCoords(coords);" : "";
    const userCode = `
      ${activationSnippet}

      ${getWorkGroupSizeString()}
      fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {
        let batch = 0;
        let r = i32(globalId.x);
        let c = i32(globalId.y) * 4;
        let d2 = i32(globalId.z) * 4;
        let xRCCorner = vec2<i32>(r, c) * uniforms.stride - uniforms.pad;
        let d1 = d2;
        let q = 0;

        let xRCorner = xRCCorner.x;
        let xCCorner = xRCCorner.y;

        var wVals : array<vec4<f32>, 9>;
        wVals[0] = getW(0, 0, d1, q);
        wVals[1] = getW(0, 1, d1, q);
        wVals[2] = getW(0, 2, d1, q);
        wVals[3] = getW(1, 0, d1, q);
        wVals[4] = getW(1, 1, d1, q);
        wVals[5] = getW(1, 2, d1, q);
        wVals[6] = getW(2, 0, d1, q);
        wVals[7] = getW(2, 1, d1, q);
        wVals[8] = getW(2, 2, d1, q);

        var xVals : array<array<vec4<f32>, 6>, 3>;
        for (var wR = 0; wR < 3; wR = wR + 1) {
          let xR = xRCorner + wR * uniforms.dilation[0];
          for (var wC = 0; wC < 6; wC = wC + 1) {
            let xC = xCCorner + wC * uniforms.dilation[1];
            if (xR < 0 || xR >= uniforms.inDims[0] || xC < 0 || xC >= uniforms.inDims[1]) {
              xVals[wR][wC] = vec4<f32>(0.0);
            } else {
              xVals[wR][wC] = getX(batch, xR, xC, d1);
            }
          }
        }

        var dotProd : array<vec4<f32>, 4>;
        dotProd[0] = vec4<f32>(0.0);
        dotProd[1] = vec4<f32>(0.0);
        dotProd[2] = vec4<f32>(0.0);
        dotProd[3] = vec4<f32>(0.0);

        for (var wR = 0; wR < 3; wR = wR + 1) {
          for (var wC = 0; wC < 3; wC = wC + 1) {
            let indexW = wR * 3 + wC;
            dotProd[0] = dotProd[0] + xVals[wR][0 + wC] * wVals[indexW];
            dotProd[1] = dotProd[1] + xVals[wR][1 + wC] * wVals[indexW];
            dotProd[2] = dotProd[2] + xVals[wR][2 + wC] * wVals[indexW];
            dotProd[3] = dotProd[3] + xVals[wR][3 + wC] * wVals[indexW];
          }
        }

        for (var i = 0; i < 4; i = i + 1) {
          let coords = vec4<i32>(batch, r, c + i, d2);
          if (coordsInBounds4D(coords, uniforms.outShape)) {
            ${addBiasSnippet}
            ${applyActivationSnippet}
            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);
          }
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/depthwise_conv2d_webgpu.ts
var DepthwiseConv2DProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false) {
    this.variableNames = ["x", "W"];
    this.uniforms = `pad : vec2<i32>; stride : vec2<i32>; dilation : vec2<i32>;
      inDims : vec2<i32>; filterHeight : i32; filterWidth : i32;
      channelMul : i32;`;
    this.workGroupSize = [256, 1, 1];
    this.outputShape = convInfo.outShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    util_exports.assert(convInfo.dataFormat === "channelsLast", () => "TODO: NCHW is unimplemented");
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    this.convInfo = convInfo;
    this.addBias = addBias;
    this.activation = activation;
    this.hasPreluActivation = hasPreluActivation;
    this.shaderKey = `depthwise_${this.activation}`;
  }
  getUserCode() {
    let activationSnippet = "", applyActivationSnippet = "";
    if (this.activation) {
      const activationOp = mapActivationToShaderProgram(this.activation, false);
      if (this.hasPreluActivation) {
        activationSnippet = `fn activation(a : f32, outCoord : vec4<i32>) -> f32 {
          let b = getPreluActivationWeightsByOutputCoords(outCoord);
          ${activationOp}
        }`;
      } else {
        activationSnippet = `
          fn activation(a : f32, outCoord : vec4<i32>) -> f32 {
            ${activationOp}
          }
        `;
      }
      applyActivationSnippet = `dotProd = activation(dotProd, coords);`;
    }
    const addBiasSnippet = this.addBias ? "dotProd = dotProd + getBiasByOutputCoords(coords);" : "";
    const userCode = `
      ${activationSnippet}

      fn writeResult(batch : i32, row : i32, col : i32, chan : i32,
          value : f32) {
        let coord = vec4<i32>(batch, row, col, chan);
        if (coordsInBounds4D(coord, uniforms.outShape)) {
          setOutputAtCoords(batch, row, col, chan, value);
        }
      }

      ${getMainHeaderString()}
        let coords = getOutputCoords();
        let batch = coords[0];
        let xRCCorner = vec2<i32>(coords.yz) * uniforms.stride - uniforms.pad;
        let d2 = coords[3];
        let d1 = d2 / uniforms.channelMul;
        let q = d2 - d1 * uniforms.channelMul;

        let inputRowStart = xRCCorner.x;
        let inputColStart = xRCCorner.y;
        let inputRowEnd = inputRowStart + uniforms.filterHeight *
            uniforms.dilation[0];
        let inputColEnd = inputColStart + uniforms.filterWidth *
            uniforms.dilation[1];

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;

        // Extract if checking out of for loop for performance.
        if (inputRowStart >= 0 && inputColStart >= 0 &&
          inputRowEnd < uniforms.inDims[0] &&
              inputColEnd < uniforms.inDims[1]) {
            // Here using a constant value |this.convInfo.filterHeight| instead
            // of uniform value is in order to loop unrolling.
            for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
              let xR = inputRowStart + wR * uniforms.dilation[0];

              for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                let xC = inputColStart + wC * uniforms.dilation[1];

                let xVal = getX(batch, xR, xC, d1);
                let wVal = getW(wR, wC, d1, q);
                dotProd = dotProd + xVal * wVal;
              }
            }
          } else {
            for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
              let xR = inputRowStart + wR * uniforms.dilation[0];

              if (xR < 0 || xR >= uniforms.inDims[0]) {
                continue;
              }

              for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                let xC = inputColStart + wC * uniforms.dilation[1];

                if (xC < 0 || xC >= uniforms.inDims[1]) {
                  continue;
                }

                let xVal = getX(batch, xR, xC, d1);
                let wVal = getW(wR, wC, d1, q);
                dotProd = dotProd + xVal * wVal;
              }
            }
          }

        ${addBiasSnippet}
        ${applyActivationSnippet}
        writeResult(batch, coords[1], coords[2], d2, dotProd);
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/DepthwiseConv2dNative.ts
function depthwiseConv2dNative(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dilations, dimRoundingMode } = attrs;
  let $dilations = dilations;
  if ($dilations == null) {
    $dilations = [1, 1];
  }
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, $dilations, pad2, dimRoundingMode, true);
  const dimensions = [
    { type: "int32", data: [convInfo.padInfo.top, convInfo.padInfo.left] },
    { type: "int32", data: [convInfo.strideHeight, convInfo.strideWidth] },
    { type: "int32", data: [convInfo.dilationHeight, convInfo.dilationWidth] },
    { type: "int32", data: [convInfo.inHeight, convInfo.inWidth] }
  ];
  let program;
  if (convInfo.batchSize === 1 && convInfo.inHeight === convInfo.outHeight && convInfo.inWidth === convInfo.outWidth && convInfo.strideHeight === 1 && convInfo.strideWidth === 1 && convInfo.filterHeight === convInfo.filterWidth && convInfo.inChannels === convInfo.outChannels && convInfo.filterHeight === 3 && convInfo.inChannels % 4 === 0) {
    program = new DepthwiseConv2D3x3Program(convInfo);
  } else {
    program = new DepthwiseConv2DProgram(convInfo);
    dimensions.push({ type: "int32", data: [convInfo.filterHeight] }, { type: "int32", data: [convInfo.filterWidth] }, { type: "int32", data: [convInfo.outChannels / convInfo.inChannels] });
  }
  return backend.runWebGPUProgram(program, [x, filter], x.dtype, dimensions);
}
var depthwiseConv2dNativeConfig = {
  kernelName: DepthwiseConv2dNative,
  backendName: "webgpu",
  kernelFunc: depthwiseConv2dNative
};

// src/tfjs-backend-webgpu/src/kernels/Multiply.ts
var multiplyKernelFunc = binaryKernelFunc({
  opSnippet: 0 /* MUL */,
  cpuKernelImpl: multiplyImplCPU,
  supportsComplex: true
});
var multiplyConfig = {
  kernelName: Multiply,
  backendName: "webgpu",
  kernelFunc: multiplyKernelFunc
};

// src/tfjs-backend-webgpu/src/reduce_webgpu.ts
var ReduceProgram = class {
  constructor(reduceInfo, reduceType) {
    this.workGroupSize = [64, 1, 1];
    this.variableNames = ["x"];
    this.uniforms = "reduceSize : i32;";
    this.size = true;
    this.inputShape = [reduceInfo.batchSize, reduceInfo.inSize];
    const [outputShape] = backend_util_exports.computeOutAndReduceShapes(this.inputShape, [1]);
    this.outputShape = outputShape.length === 0 ? [1] : outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, [1, 1, 1]);
    this.reduceType = reduceType;
    this.shaderKey = `reduce_${reduceType}`;
  }
  getUserCode() {
    let reduceOp = ``;
    let initValue = "0.0";
    if (this.reduceType === "min" || this.reduceType === "max") {
      reduceOp = `
         if (isnan(candidate)) {
          bestValue = uniforms.NAN;
         } else if (!isnan(bestValue) && candidate ${this.reduceType === "min" ? "<" : ">"} bestValue)
           {  bestValue = candidate; }`;
      initValue = "f32(x.numbers[offset])";
    } else if (this.reduceType === "sum" || this.reduceType === "mean") {
      reduceOp = " bestValue = bestValue + candidate; ";
    } else if (this.reduceType === "prod") {
      reduceOp = " bestValue = bestValue * candidate; ";
      initValue = "1.0";
    }
    const outputSnippet = this.reduceType === "mean" ? `setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));` : `setOutputAtIndex(outputIndex, bestValue);`;
    const sharedMemorySnippet = `
         var<workgroup> xBestValues : array<f32, ${this.workGroupSize[0]}>;
       `;
    const userCode = `
       fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
       }

       ${sharedMemorySnippet}
       fn getOffset(outputIndex : i32) -> i32 {
         let outputCoords = getCoordsFromIndex(outputIndex);
         let offset = ${this.outputShape.length === 1 ? "outputCoords" : "outputCoords[0]"} * uniforms.reduceSize;
          return offset;
       }
       ${getMainHeaderAndGlobalIndexString()}
         let outputIndex = index / i32(workGroupSizeX);
         let offset = getOffset(outputIndex);
         var bestValue = ${initValue};
         let Length = uniforms.reduceSize;
         let WorkPerThread = DIV_CEIL(u32(Length), workGroupSizeX);
         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;
             k = k + i32(workGroupSizeX)) {
           let candidate = f32(x.numbers[offset + k]);
           ${reduceOp}
         }
         xBestValues[localId.x] = bestValue;
         workgroupBarrier();

         var reduceSize = min(u32(Length), workGroupSizeX);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            ${reduceOp}
            xBestValues[localId.x] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (localId.x == 0u && outputIndex < uniforms.size) {
          ${outputSnippet}
        }
       }
     `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernel_utils/reduce.ts
function reduce(x, axis, keepDims, reduceType, backend) {
  const xRank = x.shape.length;
  const toDispose = [];
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let input = x;
  if (permutedAxes != null) {
    input = transpose3({ inputs: { x }, attrs: { perm: permutedAxes }, backend });
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
    toDispose.push(input);
  }
  backend_util_exports.assertAxesAreInnerMostDims(reduceType, axes, xRank);
  const [reduceOutShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  let resOutShape = reduceOutShape;
  if (keepDims) {
    resOutShape = backend_util_exports.expandShapeToKeepDim(reduceOutShape, origAxes);
  }
  let res;
  if ((reduceType === "max" || reduceType === "prod") && backend.shouldExecuteOnCPU([input])) {
    const xVals = backend.tensorMap.get(input.dataId).values;
    switch (reduceType) {
      case "max":
        const outValues = maxImplCPU(xVals, util_exports.sizeFromShape(reduceShape), resOutShape, x.dtype);
        res = backend.makeTensorInfo(resOutShape, x.dtype, outValues);
        break;
      case "prod":
        const { outVals, outShape, outDtype } = prodImplCPU(input.shape, input.dtype, xVals, axes);
        res = backend.makeTensorInfo(outShape, outDtype, outVals);
        break;
      default:
        throw new Error(`${reduceType} CPU implementation is not yet supported.`);
    }
  } else {
    const inSize = util_exports.sizeFromShape(reduceShape);
    const xSize = util_exports.sizeFromShape(input.shape);
    const batchSize = xSize / inSize;
    const reduceInfo = { windowSize: inSize, inSize, batchSize, outSize: 1 };
    const dtype = reduceType === "mean" ? "float32" : sumOutType(x.dtype);
    const uniformData = [
      { type: "int32", data: [inSize] }
    ];
    const program = new ReduceProgram(reduceInfo, reduceType);
    const reduced = backend.runWebGPUProgram(program, [input], dtype, uniformData);
    toDispose.push(reduced);
    res = reshape2({ inputs: { x: reduced }, attrs: { shape: resOutShape }, backend });
  }
  toDispose.forEach((t) => backend.disposeData(t.dataId));
  return res;
}

// src/tfjs-backend-webgpu/src/kernels/Sum.ts
function sum3(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  return reduce(x, axis, keepDims, "sum", backend);
}
var sumConfig = {
  kernelName: Sum,
  backendName: "webgpu",
  kernelFunc: sum3
};

// src/tfjs-backend-webgpu/src/kernels/Einsum.ts
function einsum2(args) {
  const { inputs, backend, attrs } = args;
  const { equation } = attrs;
  const tensors = inputs;
  const { allDims, summedDims, idDims } = backend_util_exports.decodeEinsumEquation(equation, tensors.length);
  backend_util_exports.checkEinsumDimSizes(allDims.length, idDims, tensors);
  const { path, steps } = backend_util_exports.getEinsumComputePath(summedDims, idDims);
  const nSteps = steps.length;
  let out = null;
  let numDimsRemaining = allDims.length;
  const tensorsToDispose = [];
  for (let i = 0; i < nSteps; ++i) {
    for (const idTerm of steps[i]) {
      const { permutationIndices: perm, expandDims: dimsToExpand } = backend_util_exports.getEinsumPermutation(numDimsRemaining, idDims[idTerm]);
      let x;
      if (backend_util_exports.isIdentityPermutation(perm)) {
        x = tensors[idTerm];
      } else {
        x = transpose3({ inputs: { x: tensors[idTerm] }, backend, attrs: { perm } });
        tensorsToDispose.push(x);
      }
      const targetShape = x.shape.slice();
      for (let k = 0; k < dimsToExpand.length; ++k) {
        targetShape.splice(dimsToExpand[k], 0, 1);
      }
      if (!util_exports.arraysEqual(x.shape, targetShape)) {
        x = reshape2({ inputs: { x }, backend, attrs: { shape: targetShape } });
        tensorsToDispose.push(x);
      }
      if (out === null) {
        out = x;
      } else {
        out = multiplyKernelFunc({ inputs: { a: x, b: out }, backend });
        tensorsToDispose.push(out);
      }
    }
    if (i < nSteps - 1) {
      if (path[i] >= 0) {
        out = sum3({
          inputs: { x: out },
          backend,
          attrs: {
            axis: path[i] - (allDims.length - numDimsRemaining),
            keepDims: false
          }
        });
        tensorsToDispose.push(out);
      }
      numDimsRemaining--;
    }
  }
  for (const tensorInfo of tensorsToDispose) {
    if (tensorInfo === out) {
      continue;
    }
    backend.disposeData(tensorInfo.dataId);
  }
  return out;
}
var einsumConfig = {
  kernelName: Einsum,
  backendName: "webgpu",
  kernelFunc: einsum2
};

// src/tfjs-backend-webgpu/src/kernels/Elu.ts
var elu2 = unaryKernelFunc({ opType: 4 /* ELU */ });
var eluConfig = {
  kernelName: Elu,
  backendName: "webgpu",
  kernelFunc: elu2
};

// src/tfjs-backend-webgpu/src/kernels/Equal.ts
var equal3 = binaryKernelFunc({ opSnippet: 4 /* EQUAL */, dtype: "bool", cpuKernelImpl: equalImplCPU });
var equalConfig = {
  kernelName: Equal,
  backendName: "webgpu",
  kernelFunc: equal3
};

// src/tfjs-backend-webgpu/src/kernels/Exp.ts
var exp3 = unaryKernelFunc({
  opType: 5 /* EXP */,
  cpuKernelImpl: expImplCPU,
  dtype: "float32"
});
var expConfig = {
  kernelName: Exp,
  backendName: "webgpu",
  kernelFunc: exp3
};

// src/tfjs-backend-webgpu/src/kernels/ExpandDims.ts
function expandDims2(args) {
  const { inputs, attrs, backend } = args;
  const { dim } = attrs;
  const { input } = inputs;
  const inputRank = input.shape.length;
  const newShape = input.shape.slice();
  let $dim = dim;
  if (dim < 0) {
    util_exports.assert(-(inputRank + 1) <= dim, () => `Axis must be in the interval [${-(inputRank + 1)}, ${inputRank}]`);
    $dim = inputRank + dim + 1;
  }
  newShape.splice($dim, 0, 1);
  return reshape2({ inputs: { x: input }, backend, attrs: { shape: newShape } });
}
var expandDimsConfig = {
  kernelName: ExpandDims,
  backendName: "webgpu",
  kernelFunc: expandDims2
};

// src/tfjs-backend-webgpu/src/kernels/Expm1.ts
var expm13 = unaryKernelFunc({ opType: 6 /* EXPM1 */, cpuKernelImpl: expm1ImplCPU });
var expm1Config = {
  kernelName: Expm1,
  backendName: "webgpu",
  kernelFunc: expm13
};

// src/tfjs-backend-webgpu/src/fill_webgpu.ts
var FillProgram = class {
  constructor(shape) {
    this.variableNames = [];
    this.outputShape = [];
    this.uniforms = "value : f32;";
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = shape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = "fill";
  }
  getUserCode() {
    const userCode = `
    ${getMainHeaderAndGlobalIndexString()}
      if (index < uniforms.size) {
        setOutputAtIndex(index, uniforms.value);
      }
    }
  `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Fill.ts
function fill2(args) {
  const { backend, attrs } = args;
  const { shape, value } = attrs;
  let { dtype } = attrs;
  dtype = dtype || util_exports.inferDtype(value);
  if (dtype === "string") {
    const values = util_exports.getArrayFromDType(dtype, util_exports.sizeFromShape(shape));
    values.fill(value);
    return backend.makeTensorInfo(shape, dtype, values);
  } else {
    const program = new FillProgram(shape);
    const uniformData = [{ type: "float32", data: [value] }];
    return backend.runWebGPUProgram(program, [], dtype, uniformData);
  }
}
var fillConfig = {
  kernelName: Fill,
  backendName: "webgpu",
  kernelFunc: fill2
};

// src/tfjs-backend-webgpu/src/flip_left_right_webgpu.ts
var FlipLeftRightProgram = class {
  constructor(imageShape) {
    this.outputShape = [];
    this.variableNames = ["x"];
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = imageShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = "flipLeftRight";
  }
  getUserCode() {
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let coordX = uniforms.xShape[2] - coords[2] - 1;
          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);
          setOutputAtIndex(index, outputValue);
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/FlipLeftRight.ts
var flipLeftRightConfig = {
  kernelName: FlipLeftRight,
  backendName: "webgpu",
  kernelFunc: ({ inputs, backend }) => {
    const { image } = inputs;
    const webgpuBackend = backend;
    const program = new FlipLeftRightProgram(image.shape);
    const output = webgpuBackend.runWebGPUProgram(program, [image], image.dtype);
    return output;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Floor.ts
var floor3 = unaryKernelFunc({ opType: 7 /* FLOOR */, cpuKernelImpl: floorImplCPU });
var floorConfig = {
  kernelName: Floor,
  backendName: "webgpu",
  kernelFunc: floor3
};

// src/tfjs-backend-webgpu/src/kernels/FloorDiv.ts
var floorDiv2 = binaryKernelFunc({ opSnippet: 12 /* INT_DIV */, dtype: "int32" });
var floorDivConfig = {
  kernelName: FloorDiv,
  backendName: "webgpu",
  kernelFunc: floorDiv2
};

// src/tfjs-backend-webgpu/src/webgpu_program.ts
var makeBindGroup = (device, bindGroupLayout, inputs, output, uniforms) => {
  const bindings = [output, ...inputs];
  if (uniforms) {
    bindings.push(uniforms);
  }
  return device.createBindGroup({
    layout: bindGroupLayout,
    entries: bindings.map((b, i) => ({ binding: i, resource: b }))
  });
};
var compileProgram = (device, program, pipelineLayout, inputsData, output, isFromPixel = false) => {
  const outputData = { dtype: output.dtype, shape: output.shape };
  const source = makeShader(inputsData, outputData, program, isFromPixel);
  const module = device.createShaderModule({ code: source, label: program.constructor.name });
  const pipeline = device.createComputePipeline({
    layout: pipelineLayout,
    compute: { module, entryPoint: "main" },
    label: program.constructor.name
  });
  return pipeline;
};
function makeShaderKey(program, shapes, types, broadcastDimsKey = "", inputShapesEqualsOutShape = "") {
  const key = program.shaderKey + "_" + (program.workGroupSize ? program.workGroupSize.join(",") : "") + shapes.map((shape) => shape.length).join(",") + types.join(",") + program.variableNames.join(",") + broadcastDimsKey + inputShapesEqualsOutShape;
  return key;
}

// src/tfjs-backend-webgpu/src/FromPixelsExternalImage.ts
function fromPixelsExternalImage(args) {
  const { externalImage, backend, attrs, outShape, useImport } = args;
  const { numChannels } = attrs;
  const size = util_exports.sizeFromShape(outShape);
  const strides = util_exports.computeStrides(outShape);
  const output = backend.makeTensorInfo(outShape, "int32");
  const program = backend.getFromPixelsProgram(useImport ? "import" : "copyExternal");
  program.updateOutputShape(outShape);
  const outputShapes = [output.shape];
  const outputTypes = [output.dtype, useImport ? "import" : "copyExternal"];
  const key = makeShaderKey(program, outputShapes, outputTypes);
  const layout = program.getLayout(backend.device);
  const pipeline = backend.getAndSavePipeline(key, () => {
    return compileProgram(backend.device, program, layout.pipelineLayout, [], output, true);
  });
  program.setPipeline(pipeline);
  if (!useImport) {
    backend.queue.copyExternalImageToTexture({ source: externalImage, origin: { x: 0, y: 0 } }, {
      texture: program.makeInputTexture(backend.device, outShape[1], outShape[0])
    }, [outShape[1], outShape[0]]);
  }
  const info = backend.tensorMap.get(output.dataId);
  info.bufferInfo.buffer = backend.acquireBuffer(info.bufferInfo.byteSize);
  const uniformData = [size, numChannels, ...strides, ...program.dispatch];
  program.setUniform(backend.device, uniformData);
  let externalResource;
  if (useImport) {
    const externalTextureDescriptor = {
      source: externalImage
    };
    externalResource = backend.device.importExternalTexture(externalTextureDescriptor);
  } else {
    externalResource = program.inputTexture.createView();
  }
  backend.runFromPixelsProgram(program, info.bufferInfo.buffer, layout, externalResource, output.dataId);
  return output;
}

// src/tfjs-backend-webgpu/src/kernels/FromPixels.ts
var fromPixelsConfig = {
  kernelName: FromPixels,
  backendName: "webgpu",
  kernelFunc: fromPixels2
};
var fromPixels2DContext2;
function fromPixels2(args) {
  const { inputs, backend, attrs } = args;
  let { pixels } = inputs;
  const { numChannels } = attrs;
  if (pixels == null) {
    throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
  }
  const isVideo = typeof HTMLVideoElement !== "undefined" && pixels instanceof HTMLVideoElement;
  const isImage = typeof HTMLImageElement !== "undefined" && pixels instanceof HTMLImageElement;
  const isCanvas = typeof HTMLCanvasElement !== "undefined" && pixels instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && pixels instanceof OffscreenCanvas;
  const isImageBitmap = typeof ImageBitmap !== "undefined" && pixels instanceof ImageBitmap;
  const [width, height] = isVideo ? [
    pixels.videoWidth,
    pixels.videoHeight
  ] : [pixels.width, pixels.height];
  const outShape = [height, width, numChannels];
  if (env().getBool("WEBGPU_USE_IMPORT")) {
    if (isVideo) {
      return fromPixelsExternalImage({
        externalImage: pixels,
        backend,
        attrs,
        outShape,
        useImport: true
      });
    }
  }
  if (isVideo || isImage) {
    if (fromPixels2DContext2 == null) {
      fromPixels2DContext2 = document.createElement("canvas").getContext("2d");
    }
    fromPixels2DContext2.canvas.width = width;
    fromPixels2DContext2.canvas.height = height;
    fromPixels2DContext2.drawImage(pixels, 0, 0, width, height);
    pixels = fromPixels2DContext2.canvas;
  }
  if (isImageBitmap || isCanvas || isVideo || isImage) {
    return fromPixelsExternalImage({
      externalImage: pixels,
      backend,
      attrs,
      outShape,
      useImport: false
    });
  }
  const imageData = pixels.data;
  let pixelArray = imageData;
  if (numChannels != null && numChannels !== 4) {
    pixelArray = new Uint8Array(pixels.width * pixels.height * numChannels);
    const dataLength = imageData.length;
    let j = 0;
    for (let i = 0; i < dataLength; i++) {
      if (i % 4 < numChannels) {
        pixelArray[j++] = imageData[i];
      }
    }
  }
  const output = backend.makeTensorInfo(outShape, "int32");
  const info = backend.tensorMap.get(output.dataId);
  info.values = new Int32Array(pixelArray);
  backend.maybeReleaseBuffer(output.dataId);
  backend.uploadToGPU(output.dataId);
  return output;
}

// src/tfjs-backend-webgpu/src/batchnorm_webgpu.ts
var BatchNormProgram = class {
  constructor(xShape, meanShape, varianceShape, offsetShape, scaleShape) {
    this.uniforms = "varianceEpsilon : f32;";
    this.workGroupSize = [128, 1, 1];
    this.size = true;
    this.variableNames = ["x", "mean", "variance"];
    backend_util_exports.assertAndGetBroadcastShape(xShape, meanShape);
    backend_util_exports.assertAndGetBroadcastShape(xShape, varianceShape);
    this.outputShape = xShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    if (offsetShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, offsetShape);
      this.variableNames.push("offset");
    }
    if (scaleShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, scaleShape);
      this.variableNames.push("scale");
    }
    this.offsetShape = offsetShape;
    this.scaleShape = scaleShape;
    this.shaderKey = "batchNorm";
  }
  getUserCode() {
    let offsetSnippet = "0.0";
    if (this.offsetShape != null) {
      offsetSnippet = "getOffsetByOutputIndex(index)";
    }
    let scaleSnippet = "1.0";
    if (this.scaleShape != null) {
      scaleSnippet = "getScaleByOutputIndex(index)";
    }
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size)
        {
          let xValue = getXByOutputIndex(index);
          let meanValue = getMeanByOutputIndex(index);
          let varianValue = getVarianceByOutputIndex(index);
          let offsetValue = ${offsetSnippet};
          let scaleValue = ${scaleSnippet};
          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));
          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));
        }
      }
  `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/FusedBatchNorm.ts
var fusedBatchNormConfig = {
  kernelName: FusedBatchNorm,
  backendName: "webgpu",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { x, scale, offset, mean: mean3, variance } = inputs;
    const { varianceEpsilon } = attrs;
    const webGPUBackend = backend;
    const batchNormInputs = [x, mean3, variance];
    let offsetShape = null;
    if (offset != null) {
      offsetShape = offset.shape;
      batchNormInputs.push(offset);
    }
    let scaleShape = null;
    if (scale != null) {
      scaleShape = scale.shape;
      batchNormInputs.push(scale);
    }
    const program = new BatchNormProgram(x.shape, mean3.shape, variance.shape, offsetShape, scaleShape);
    const uniformData = [{ type: "float32", data: [varianceEpsilon] }];
    return webGPUBackend.runWebGPUProgram(program, batchNormInputs, x.dtype, uniformData);
  }
};

// src/tfjs-backend-webgpu/src/kernels/FusedConv2D.ts
function fusedConv2d(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter, bias, preluActivationWeights } = inputs;
  const {
    strides,
    pad: pad2,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad2, dimRoundingMode, false, $dataFormat);
  return conv2DImpl({
    x,
    filter,
    convInfo,
    backend,
    bias,
    preluActivationWeights,
    leakyreluAlpha,
    activation
  });
}
var fusedConv2DConfig = {
  kernelName: FusedConv2D,
  backendName: "webgpu",
  kernelFunc: fusedConv2d
};

// src/tfjs-backend-webgpu/src/kernels/FusedDepthwiseConv2D.ts
function fusedDepthwiseConv2D(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter, bias, preluActivationWeights } = inputs;
  const { strides, pad: pad2, dilations, dimRoundingMode, activation } = attrs;
  let $dilations = dilations;
  if ($dilations == null) {
    $dilations = [1, 1];
  }
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, $dilations), () => `Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${$dilations}'`);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, $dilations, pad2, dimRoundingMode, true);
  const programInputs = [x, filter];
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  if (hasBias) {
    programInputs.push(bias);
  }
  if (hasPreluActivationWeights) {
    programInputs.push(preluActivationWeights);
  }
  const dimensions = [
    { type: "int32", data: [convInfo.padInfo.top, convInfo.padInfo.left] },
    { type: "int32", data: [convInfo.strideHeight, convInfo.strideWidth] },
    { type: "int32", data: [convInfo.dilationHeight, convInfo.dilationWidth] },
    { type: "int32", data: [convInfo.inHeight, convInfo.inWidth] }
  ];
  let program;
  if (convInfo.batchSize === 1 && convInfo.inHeight === convInfo.outHeight && convInfo.inWidth === convInfo.outWidth && convInfo.strideHeight === 1 && convInfo.strideWidth === 1 && convInfo.filterHeight === convInfo.filterWidth && convInfo.inChannels === convInfo.outChannels && convInfo.filterHeight === 3 && convInfo.inChannels % 4 === 0) {
    program = new DepthwiseConv2D3x3Program(convInfo, hasBias, activation, hasPreluActivationWeights);
  } else {
    program = new DepthwiseConv2DProgram(convInfo, hasBias, activation, hasPreluActivationWeights);
    dimensions.push({ type: "int32", data: [convInfo.filterHeight] }, { type: "int32", data: [convInfo.filterWidth] }, { type: "int32", data: [convInfo.outChannels / convInfo.inChannels] });
  }
  const result = backend.runWebGPUProgram(program, programInputs, "float32", dimensions);
  return result;
}
var fusedDepthwiseConv2DConfig = {
  kernelName: FusedDepthwiseConv2D,
  backendName: "webgpu",
  kernelFunc: fusedDepthwiseConv2D
};

// src/tfjs-backend-webgpu/src/gather_nd_webgpu.ts
var GatherNDProgram = class {
  constructor(sliceDim, shape) {
    this.variableNames = ["A", "indices"];
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = shape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = `gathernd_${sliceDim}`;
    this.sliceDim = sliceDim;
    this.uniforms = `sliceDim : i32; strides : ${getCoordsDataType(sliceDim)};`;
  }
  getUserCode() {
    let strideString;
    if (this.sliceDim > 1) {
      strideString = "uniforms.strides[j]";
    } else {
      strideString = "uniforms.strides";
    }
    const userCode = `
        ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          var flattenIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexTemp = i32(round(getIndices(coords[0], j)));
            let strideNum = ${strideString};
            flattenIndex = flattenIndex + indexTemp * strideNum;
          }

          setOutputAtIndex(index, getA(flattenIndex, coords[1]));
        }
      }
      `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/GatherNd.ts
function gatherNd(args) {
  const { inputs, backend } = args;
  const { params, indices } = inputs;
  const indicesShape = indices.shape;
  const sliceRank = indicesShape[indicesShape.length - 1];
  const paramsSize = util_exports.sizeFromShape(params.shape);
  const [resultShape, numSlices, sliceSize, strides] = backend_util_exports.prepareAndValidate(params, indices);
  const flattenIndices = reshape2({ inputs: { x: indices }, backend, attrs: { shape: [numSlices, sliceRank] } });
  const flattenX = reshape2({
    inputs: { x: params },
    backend,
    attrs: { shape: [util_exports.sizeFromShape(params.shape) / sliceSize, sliceSize] }
  });
  if (backend.shouldExecuteOnCPU([params, indices]) || params.dtype === "string") {
    const indicesData = backend.readSync(indices.dataId);
    const paramsBuf = backend.bufferSync(params);
    const outValue = gatherNdImplCPU(indicesData, paramsBuf, params.dtype, numSlices, sliceRank, sliceSize, strides, params.shape, paramsSize);
    return backend.makeTensorInfo(resultShape, params.dtype, outValue.values);
  }
  const program = new GatherNDProgram(sliceRank, [numSlices, sliceSize]);
  const uniformData = [{ type: "int32", data: [sliceRank] }, { type: "int32", data: strides }];
  const res = backend.runWebGPUProgram(program, [flattenX, flattenIndices], flattenX.dtype, uniformData);
  const reshaped = reshape2({ inputs: { x: res }, backend, attrs: { shape: resultShape } });
  backend.disposeData(flattenIndices.dataId);
  backend.disposeData(flattenX.dataId);
  backend.disposeData(res.dataId);
  return reshaped;
}
var gatherNdConfig = {
  kernelName: GatherNd,
  backendName: "webgpu",
  kernelFunc: gatherNd
};

// src/tfjs-backend-webgpu/src/gather_webgpu.ts
var GatherProgram = class {
  constructor(aShape, outputShape) {
    this.variableNames = ["A", "indices"];
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = aShape.slice();
    this.aShape = aShape;
    this.outputShape = outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = `gather`;
  }
  getUserCode() {
    const sourceCoords = getSourceCoords(this.aShape, "i32");
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          setOutputAtIndex(index, getA(${sourceCoords}));
        }
      }
    `;
    return userCode;
  }
};
function getSourceCoords(aShape, typePrefix = "int") {
  const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"];
  const sourceCoords = [];
  for (let i = 0; i < aShape.length; i++) {
    if (i === 2) {
      sourceCoords.push(`${typePrefix}(getIndices(resRC.x, resRC.z))`);
    } else {
      sourceCoords.push(`${currentCoords[i]}`);
    }
  }
  return sourceCoords.join();
}

// src/tfjs-backend-webgpu/src/kernels/GatherV2.ts
function gatherV2(args) {
  const { inputs, backend, attrs } = args;
  const { x, indices } = inputs;
  const { axis, batchDims } = attrs;
  const parsedAxis = util_exports.parseAxisParam(axis, x.shape)[0];
  const shapeInfo = backend_util_exports.segment_util.collectGatherOpShapeInfo(x, indices, parsedAxis, batchDims);
  const indicesSize = util_exports.sizeFromShape(indices.shape);
  const toDispose = [];
  const flattenX = reshape2({
    inputs: { x },
    backend,
    attrs: {
      shape: [
        shapeInfo.batchSize,
        shapeInfo.outerSize,
        shapeInfo.dimSize,
        shapeInfo.sliceSize
      ]
    }
  });
  const flattenIndex = reshape2({
    inputs: { x: indices },
    backend,
    attrs: { shape: [shapeInfo.batchSize, indicesSize / shapeInfo.batchSize] }
  });
  toDispose.push(flattenX);
  toDispose.push(flattenIndex);
  const flattenOutputShape = [
    shapeInfo.batchSize,
    shapeInfo.outerSize,
    indicesSize / shapeInfo.batchSize,
    shapeInfo.sliceSize
  ];
  if (backend.shouldExecuteOnCPU([x, indices])) {
    const indicesBufferInfo = backend.tensorMap.get(flattenIndex.dataId);
    const indicesValues = indicesBufferInfo.values;
    const indicesBuf = buffer(flattenIndex.shape, flattenIndex.dtype, indicesValues);
    const xBufferInfo = backend.tensorMap.get(flattenX.dataId);
    const xValues = xBufferInfo.values;
    const xBuf = buffer(flattenX.shape, flattenX.dtype, xValues);
    const outBuf = gatherV2ImplCPU(xBuf, indicesBuf, flattenOutputShape);
    toDispose.forEach((t) => backend.disposeData(t.dataId));
    return backend.makeTensorInfo(shapeInfo.outputShape, outBuf.dtype, outBuf.values);
  }
  const program = new GatherProgram(flattenX.shape, flattenOutputShape);
  const res = backend.runWebGPUProgram(program, [flattenX, flattenIndex], flattenX.dtype);
  toDispose.push(res);
  const reshaped = reshape2({ inputs: { x: res }, backend, attrs: { shape: shapeInfo.outputShape } });
  toDispose.forEach((t) => backend.disposeData(t.dataId));
  return reshaped;
}
var gatherV2Config = {
  kernelName: GatherV2,
  backendName: "webgpu",
  kernelFunc: gatherV2
};

// src/tfjs-backend-webgpu/src/kernels/Greater.ts
var greater3 = binaryKernelFunc({
  opSnippet: 5 /* GREATER */,
  cpuKernelImpl: greaterImplCPU,
  dtype: "bool"
});
var greaterConfig = {
  kernelName: Greater,
  backendName: "webgpu",
  kernelFunc: greater3
};

// src/tfjs-backend-webgpu/src/kernels/GreaterEqual.ts
var greaterEqual3 = binaryKernelFunc({
  opSnippet: 6 /* GREATER_EQUAL */,
  dtype: "bool",
  cpuKernelImpl: greaterEqualImplCPU
});
var greaterEqualConfig = {
  kernelName: GreaterEqual,
  backendName: "webgpu",
  kernelFunc: greaterEqual3
};

// src/tfjs-backend-webgpu/src/kernels/LeakyRelu.ts
function leakyRelu2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { alpha } = attrs;
  const uniformData = [{ type: "float32", data: [alpha] }];
  const program = new UnaryOpProgram(x.shape, 15 /* LEAKYRELU */);
  program.uniforms = "alpha : f32;";
  return backend.runWebGPUProgram(program, [x], "float32", uniformData);
}
var leakyReluConfig = {
  kernelName: LeakyRelu,
  backendName: "webgpu",
  kernelFunc: leakyRelu2
};

// src/tfjs-backend-webgpu/src/kernels/Less.ts
var less3 = binaryKernelFunc({ opSnippet: 7 /* LESS */, dtype: "bool", cpuKernelImpl: lessImplCPU });
var lessConfig = {
  kernelName: Less,
  backendName: "webgpu",
  kernelFunc: less3
};

// src/tfjs-backend-webgpu/src/kernels/LessEqual.ts
var lessEqual3 = binaryKernelFunc({
  opSnippet: 8 /* LESS_EQUAL */,
  dtype: "bool",
  cpuKernelImpl: lessEqualImplCPU
});
var lessEqualConfig = {
  kernelName: LessEqual,
  backendName: "webgpu",
  kernelFunc: lessEqual3
};

// src/tfjs-backend-webgpu/src/kernels/Log.ts
var log4 = unaryKernelFunc({ opType: 9 /* LOG */, cpuKernelImpl: logImplCPU });
var logConfig = {
  kernelName: Log,
  backendName: "webgpu",
  kernelFunc: log4
};

// src/tfjs-backend-webgpu/src/kernels/LogicalAnd.ts
var logicalAnd2 = binaryKernelFunc({
  opSnippet: 9 /* LOGICAL_AND */,
  dtype: "bool"
});
var logicalAndConfig = {
  kernelName: LogicalAnd,
  backendName: "webgpu",
  kernelFunc: logicalAnd2
};

// src/tfjs-backend-webgpu/src/kernels/LogicalNot.ts
var logicalNot2 = unaryKernelFunc({ opType: 10 /* LOGICAL_NOT */ });
var logicalNotConfig = {
  kernelName: LogicalNot,
  backendName: "webgpu",
  kernelFunc: logicalNot2
};

// src/tfjs-backend-webgpu/src/kernels/Max.ts
function max2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { reductionIndices, keepDims } = attrs;
  return reduce(x, reductionIndices, keepDims, "max", backend);
}
var maxConfig = {
  kernelName: Max,
  backendName: "webgpu",
  kernelFunc: max2
};

// src/tfjs-backend-webgpu/src/kernels/Maximum.ts
var maximum3 = binaryKernelFunc({
  opSnippet: 15 /* MAX */,
  cpuKernelImpl: maximumImplCPU
});
var maximumConfig = {
  kernelName: Maximum,
  backendName: "webgpu",
  kernelFunc: maximum3
};

// src/tfjs-backend-webgpu/src/kernels/MaxPool.ts
function maxPool2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const dilations = 1;
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, dilations, pad2, dimRoundingMode);
  let program;
  const dimensions = [];
  if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1) {
    if (util_exports.arraysEqual(convInfo.inShape, convInfo.outShape)) {
      return identity({ inputs: { x }, backend });
    }
    program = new PoolWithFilterSizeEqualsOneProgram(convInfo);
    dimensions.push({ type: "int32", data: [convInfo.strideHeight, convInfo.strideWidth] });
  } else {
    program = new Pool2DProgram(convInfo, "max");
    dimensions.push({ type: "int32", data: [convInfo.strideHeight, convInfo.strideWidth] }, { type: "int32", data: [convInfo.padInfo.top, convInfo.padInfo.left] }, {
      type: "int32",
      data: [convInfo.dilationHeight, convInfo.dilationWidth]
    }, { type: "int32", data: [convInfo.inHeight, convInfo.inWidth] }, {
      type: "int32",
      data: [convInfo.effectiveFilterHeight, convInfo.effectiveFilterWidth]
    });
  }
  return backend.runWebGPUProgram(program, [x], x.dtype, dimensions);
}
var maxPoolConfig = {
  kernelName: MaxPool,
  backendName: "webgpu",
  kernelFunc: maxPool2
};

// src/tfjs-backend-webgpu/src/kernels/Mean.ts
function mean2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { keepDims, axis } = attrs;
  return reduce(x, axis, keepDims, "mean", backend);
}
var meanConfig = {
  kernelName: Mean,
  backendName: "webgpu",
  kernelFunc: mean2
};

// src/tfjs-backend-webgpu/src/kernels/Min.ts
function min2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  return reduce(x, axis, keepDims, "min", backend);
}
var minConfig = {
  kernelName: Min,
  backendName: "webgpu",
  kernelFunc: min2
};

// src/tfjs-backend-webgpu/src/kernels/Minimum.ts
var minimum3 = binaryKernelFunc({
  opSnippet: 16 /* MIN */,
  cpuKernelImpl: minimumImplCPU
});
var minimumConfig = {
  kernelName: Minimum,
  backendName: "webgpu",
  kernelFunc: minimum3
};

// src/tfjs-backend-webgpu/src/mirror_pad_webgpu.ts
var MirrorPadProgram = class {
  constructor(xShape, paddings, mode) {
    this.uniforms = "";
    this.variableNames = ["x"];
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = paddings.map((p, i) => p[0] + xShape[i] + p[1]);
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.xShape = xShape;
    paddings.map((_, i) => {
      this.uniforms += ` pad${i} : vec2<i32>;`;
    });
    this.offset = mode === "reflect" ? 0 : 1;
    this.shaderKey = `mirrorPad_${mode}`;
  }
  getUserCode() {
    const rank = this.xShape.length;
    const start = this.xShape.map((_, i) => `uniforms.pad${i}[0]`).join(",");
    const end = this.xShape.map((_, i) => `uniforms.pad${i}[0] + uniforms.xShape${rank > 1 ? `[${i}]` : ""}`).join(",");
    const shaderStart = rank === 1 ? "start" : "start[i]";
    const shaderEnd = rank === 1 ? "end" : "end[i]";
    const shaderOutC = rank === 1 ? "outC" : "outC[i]";
    const dtype = getCoordsDataType(rank);
    const unpackedCoords = rank > 1 ? ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, rank) : "coords";
    return `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let start = ${dtype}(${start});
          let end = ${dtype}(${end});
          var outC = getCoordsFromIndex(index);
          for (var i = 0; i < ${rank}; i = i + 1) {
            if (${shaderOutC} < ${shaderStart}) {
              ${shaderOutC} = ${shaderStart} * 2 - ${shaderOutC} - ${this.offset};
            } else if(${shaderOutC} >= ${shaderEnd}) {
              ${shaderOutC} = (${shaderEnd} - 1) * 2 - ${shaderOutC} + ${this.offset};
            }
          }
          let coords = outC - start;
          setOutputAtIndex(index, getX(${unpackedCoords}));
        }
      }
    `;
  }
};

// src/tfjs-backend-webgpu/src/kernels/MirrorPad.ts
var mirrorPadConfig = {
  kernelName: MirrorPad,
  backendName: "webgpu",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { x } = inputs;
    const { paddings, mode } = attrs;
    const webGPUBackend = backend;
    const uniformData = paddings.map((p) => {
      return { type: "int32", data: [p[0], p[1]] };
    });
    const program = new MirrorPadProgram(x.shape, paddings, mode);
    const output = webGPUBackend.runWebGPUProgram(program, [x], x.dtype, uniformData);
    return output;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Neg.ts
function neg2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  if (backend.shouldExecuteOnCPU([x])) {
    const xData = backend.tensorMap.get(x.dataId);
    const [outValues, newShape] = negImplCPU(xData.values, x.shape, x.dtype);
    return backend.makeTensorInfo(newShape, x.dtype, outValues);
  }
  const program = new UnaryOpProgram(x.shape, 11 /* NEG */);
  return backend.runWebGPUProgram(program, [x], x.dtype);
}
var negConfig = {
  kernelName: Neg,
  backendName: "webgpu",
  kernelFunc: neg2
};

// src/tfjs-backend-webgpu/src/kernels/NonMaxSuppressionV3.ts
function nonMaxSuppressionV3(args) {
  console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  const { inputs, backend, attrs } = args;
  const { boxes, scores } = inputs;
  const { maxOutputSize, iouThreshold, scoreThreshold } = attrs;
  const boxesVals = backend.readSync(boxes.dataId);
  const scoresVals = backend.readSync(scores.dataId);
  const { selectedIndices } = kernel_impls_exports.nonMaxSuppressionV3Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold);
  return backend.makeTensorInfo([selectedIndices.length], "int32", new Int32Array(selectedIndices));
}
var nonMaxSuppressionV3Config = {
  kernelName: NonMaxSuppressionV3,
  backendName: "webgpu",
  kernelFunc: nonMaxSuppressionV3
};

// src/tfjs-backend-webgpu/src/kernels/NonMaxSuppressionV5.ts
function nonMaxSuppressionV5(args) {
  console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  const { inputs, backend, attrs } = args;
  const { boxes, scores } = inputs;
  const { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma } = attrs;
  const boxesVals = backend.readSync(boxes.dataId);
  const scoresVals = backend.readSync(scores.dataId);
  const maxOutputSizeVal = maxOutputSize;
  const iouThresholdVal = iouThreshold;
  const scoreThresholdVal = scoreThreshold;
  const softNmsSigmaVal = softNmsSigma;
  const { selectedIndices, selectedScores } = kernel_impls_exports.nonMaxSuppressionV5Impl(boxesVals, scoresVals, maxOutputSizeVal, iouThresholdVal, scoreThresholdVal, softNmsSigmaVal);
  return [
    backend.makeTensorInfo([selectedIndices.length], "int32", new Int32Array(selectedIndices)),
    backend.makeTensorInfo([selectedScores.length], "float32", new Float32Array(selectedScores))
  ];
}
var nonMaxSuppressionV5Config = {
  kernelName: NonMaxSuppressionV5,
  backendName: "webgpu",
  kernelFunc: nonMaxSuppressionV5
};

// src/tfjs-backend-webgpu/src/kernels/ZerosLike.ts
function zerosLike2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  if (x.dtype === "complex64") {
    const realPart = real3({ inputs: { input: x }, backend });
    const r = zerosLike2({ inputs: { x: realPart }, backend });
    const imagPart = imag2({ inputs: { input: x }, backend });
    const i = zerosLike2({ inputs: { x: imagPart }, backend });
    const result = complex2({ inputs: { real: r, imag: i }, backend });
    backend.disposeData(realPart.dataId);
    backend.disposeData(r.dataId);
    backend.disposeData(imagPart.dataId);
    backend.disposeData(i.dataId);
    return result;
  } else {
    return fill2({
      attrs: {
        shape: x.shape,
        dtype: x.dtype,
        value: x.dtype === "string" ? "" : 0
      },
      backend
    });
  }
}
var zerosLikeConfig = {
  kernelName: ZerosLike,
  backendName: "webgpu",
  kernelFunc: zerosLike2
};

// src/tfjs-backend-webgpu/src/kernels/OnesLike.ts
function onesLike2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  if (x.dtype === "string") {
    throw new Error("onesLike is not supported under string dtype");
  } else if (x.dtype === "complex64") {
    const realPart = real3({ inputs: { input: x }, backend });
    const r = onesLike2({ inputs: { x: realPart }, backend });
    const imagPart = imag2({ inputs: { input: x }, backend });
    const i = zerosLike2({ inputs: { x: imagPart }, backend });
    const result = complex2({ inputs: { real: r, imag: i }, backend });
    backend.disposeData(realPart.dataId);
    backend.disposeData(r.dataId);
    backend.disposeData(imagPart.dataId);
    backend.disposeData(i.dataId);
    return result;
  } else {
    return fill2({ attrs: { shape: x.shape, dtype: x.dtype, value: 1 }, backend });
  }
}
var onesLikeConfig = {
  kernelName: OnesLike,
  backendName: "webgpu",
  kernelFunc: onesLike2
};

// src/tfjs-backend-webgpu/src/kernels/Pack.ts
function pack(args) {
  const { inputs, backend, attrs } = args;
  const { axis } = attrs;
  if (inputs.length === 1) {
    return expandDims2({ inputs: { input: inputs[0] }, backend, attrs: { dim: axis } });
  }
  const shape = inputs[0].shape;
  const dtype = inputs[0].dtype;
  inputs.forEach((t) => {
    util_exports.assertShapesMatch(shape, t.shape, "All tensors passed to stack must have matching shapes");
    util_exports.assert(dtype === t.dtype, () => "All tensors passed to stack must have matching dtypes");
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
  backendName: "webgpu",
  kernelFunc: pack
};

// src/tfjs-backend-webgpu/src/pad_webgpu.ts
var PadProgram = class {
  constructor(xShape, paddings) {
    this.variableNames = ["x"];
    this.uniforms = "constantValue : f32;";
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = paddings.map((p, i) => p[0] + xShape[i] + p[1]);
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    paddings.map((_, i) => {
      this.uniforms += ` pad${i} : vec2<i32>;`;
    });
    this.xShape = xShape;
    this.shaderKey = "pad";
  }
  getUserCode() {
    const rank = this.xShape.length;
    const type = getCoordsDataType(rank);
    const start = this.xShape.map((_, i) => `uniforms.pad${i}[0]`).join(",");
    const end = this.xShape.map((_, i) => `uniforms.pad${i}[0] + uniforms.xShape${rank > 1 ? `[${i}]` : ""}`).join(",");
    const startValue = rank > 1 ? `${type}(${start})` : `${start}`;
    const endValue = rank > 1 ? `${type}(${end})` : `${end}`;
    const leftPadCondition = rank > 1 ? `any(outC < start)` : `outC < start`;
    const rightPadCondition = rank > 1 ? `any(outC >= end)` : `outC >= end`;
    const unpackedCoords = rank > 1 ? ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, rank) : "coords";
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let start = ${startValue};
          let end = ${endValue};
          let outC = getCoordsFromIndex(index);

          if (${leftPadCondition} || ${rightPadCondition}) {
            setOutputAtIndex(index, uniforms.constantValue);
          } else {
            let coords = outC - start;
            setOutputAtIndex(index, getX(${unpackedCoords}));
          }
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/PadV2.ts
var padV2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { paddings, constantValue } = attrs;
  if (paddings.every((p) => util_exports.arraysEqual(p, [0, 0]))) {
    return identity({ inputs: { x }, backend });
  }
  if (util_exports.sizeFromShape(x.shape) === 0) {
    const outputShape = paddings.map((p, i) => p[0] + x.shape[i] + p[1]);
    return fill2({
      backend,
      attrs: { shape: outputShape, value: constantValue, dtype: x.dtype }
    });
  }
  const uniformData = [{ type: "float32", data: [constantValue] }];
  paddings.map((p) => uniformData.push({ type: "int32", data: [p[0], p[1]] }));
  const program = new PadProgram(x.shape, paddings);
  return backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
};
var padV2Config = {
  kernelName: PadV2,
  backendName: "webgpu",
  kernelFunc: padV2
};

// src/tfjs-backend-webgpu/src/kernels/Pow.ts
var pow2 = binaryKernelFunc({
  opSnippet: 13 /* POW */
});
var powConfig = {
  kernelName: Pow,
  backendName: "webgpu",
  kernelFunc: pow2
};

// src/tfjs-backend-webgpu/src/kernels/Prelu.ts
function prelu2(args) {
  const { inputs, backend } = args;
  const { x, alpha } = inputs;
  const program = new BinaryOpProgram(14 /* PRELU */, x.shape, alpha.shape);
  return backend.runWebGPUProgram(program, [x, alpha], "float32");
}
var preluConfig = {
  kernelName: Prelu,
  backendName: "webgpu",
  kernelFunc: prelu2
};

// src/tfjs-backend-webgpu/src/kernels/Prod.ts
function prod2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  return reduce(x, axis, keepDims, "prod", backend);
}
var prodConfig = {
  kernelName: Prod,
  backendName: "webgpu",
  kernelFunc: prod2
};

// src/tfjs-backend-webgpu/src/kernels/Range.ts
var range2 = (args) => {
  const { backend, attrs } = args;
  const { start, stop, step: step2, dtype } = attrs;
  const values = rangeImplCPU(start, stop, step2, dtype);
  return backend.makeTensorInfo([values.length], dtype, values);
};
var rangeConfig = {
  kernelName: Range,
  backendName: "webgpu",
  kernelFunc: range2
};

// src/tfjs-backend-webgpu/src/kernels/RealDiv.ts
var realDiv = binaryKernelFunc({ opSnippet: 3 /* DIV */ });
var realDivConfig = {
  kernelName: RealDiv,
  backendName: "webgpu",
  kernelFunc: realDiv
};

// src/tfjs-backend-webgpu/src/kernels/Relu.ts
var relu2 = unaryKernelFunc({ opType: 13 /* RELU */ });
var reluConfig = {
  kernelName: Relu,
  backendName: "webgpu",
  kernelFunc: relu2
};

// src/tfjs-backend-webgpu/src/kernels/Relu6.ts
var relu62 = unaryKernelFunc({ opType: 14 /* RELU6 */ });
var relu6Config = {
  kernelName: Relu6,
  backendName: "webgpu",
  kernelFunc: relu62
};

// src/tfjs-backend-webgpu/src/resize_bilinear_webgpu.ts
var ResizeBilinearProgram = class {
  constructor(inputShape, newHeight, newWidth) {
    this.variableNames = ["x"];
    this.uniforms = "adjustHeightWidth : vec2<f32>; halfPixelCenters : f32;";
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = [inputShape[0], newHeight, newWidth, inputShape[3]];
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = `resizeBilinear`;
  }
  getUserCode() {
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC =
            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *
            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);

          // Compute the four integer indices.
          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);
          let sourceCeilRC = vec2<i32>(
            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));

          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);
          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);
          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);
          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);

          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);

          let top = topLeft + (topRight - topLeft) * fracRC.y;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
          let newValue = top + (bottom - top) * fracRC.x;

          setOutputAtIndex(index, newValue);
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/ResizeBilinear.ts
function resizeBilinear2(args) {
  const { inputs, backend, attrs } = args;
  const { images } = inputs;
  const { alignCorners, size, halfPixelCenters } = attrs;
  const [newHeight, newWidth] = size;
  const adjustHeight = alignCorners && newHeight > 1 ? 1 : 0;
  const adjustWidth = alignCorners && newWidth > 1 ? 1 : 0;
  const halfPixelCentersValue = halfPixelCenters ? 0.5 : 0;
  const uniformData = [
    { type: "float32", data: [adjustHeight, adjustWidth] },
    { type: "float32", data: [halfPixelCentersValue] }
  ];
  const program = new ResizeBilinearProgram(images.shape, newHeight, newWidth);
  return backend.runWebGPUProgram(program, [images], "float32", uniformData);
}
var resizeBilinearConfig = {
  kernelName: ResizeBilinear,
  backendName: "webgpu",
  kernelFunc: resizeBilinear2
};

// src/tfjs-backend-webgpu/src/resize_nearest_neighbor_webgpu.ts
var ResizeNearestNeighborProgram = class {
  constructor(inputShape, newHeight, newWidth, halfPixelCenters) {
    this.variableNames = ["x"];
    this.uniforms = "adjustHeightWidth : vec2<f32>; roundBase : f32;";
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = [inputShape[0], newHeight, newWidth, inputShape[3]];
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.halfPixelCenters = halfPixelCenters;
    this.shaderKey = `resizeNearest_${halfPixelCenters}`;
  }
  getUserCode() {
    let sourceFracIndexRC;
    if (this.halfPixelCenters) {
      sourceFracIndexRC = `max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))`;
    } else {
      sourceFracIndexRC = `vec2<f32>(rc) * effectiveInputOverOutputRatioRC`;
    }
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC = ${sourceFracIndexRC};

          // Compute the coordinators of nearest neighbor point.
          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));
          let sourceNearestRC = vec2<i32>(
            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));
          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);

          setOutputAtIndex(index, newValue);
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/ResizeNearestNeighbor.ts
function resizeNearestNeighbor2(args) {
  const { inputs, backend, attrs } = args;
  const { images } = inputs;
  const { alignCorners, halfPixelCenters, size } = attrs;
  const [newHeight, newWidth] = size;
  const adjustHeight = alignCorners && newHeight > 1 ? 1 : 0;
  const adjustWidth = alignCorners && newWidth > 1 ? 1 : 0;
  const roundBase = alignCorners ? 0.5 : 0;
  const uniformData = [
    { type: "float32", data: [adjustHeight, adjustWidth] },
    { type: "float32", data: [roundBase] }
  ];
  const program = new ResizeNearestNeighborProgram(images.shape, newHeight, newWidth, halfPixelCenters);
  return backend.runWebGPUProgram(program, [images], images.dtype, uniformData);
}
var resizeNearestNeighborConfig = {
  kernelName: ResizeNearestNeighbor,
  backendName: "webgpu",
  kernelFunc: resizeNearestNeighbor2
};

// src/tfjs-backend-webgpu/src/rotate_webgpu.ts
var RotateProgram = class {
  constructor(imageShape, fillValue) {
    this.outputShape = [];
    this.variableNames = ["x"];
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = imageShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.uniforms = `centerX : f32; centerY : f32; sinRadians : f32;
          cosRadians : f32;`;
    this.shaderKey = "rotate";
    this.outputShape = imageShape;
    if (typeof fillValue === "number") {
      this.uniforms += ` fillValue : f32;`;
      this.fillSnippet = `var outputValue = uniforms.fillValue;`;
      this.shaderKey += "_float";
    } else {
      this.uniforms += ` fillValue : vec3<f32>;`;
      this.fillSnippet = `var outputValue = uniforms.fillValue[coords[3]];`;
      this.shaderKey += "_vec3";
    }
  }
  getUserCode() {
    const userCode = `
        ${getMainHeaderAndGlobalIndexString()}

          if (index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *
                uniforms.sinRadians;
            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *
                uniforms.cosRadians;
            let coordX = i32(round(coordXFloat + uniforms.centerX));
            let coordY = i32(round(coordYFloat + uniforms.centerY));
            ${this.fillSnippet}
            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&
                coordY < uniforms.xShape[1]) {
              outputValue = getX(coords[0], coordY, coordX, coords[3]);
            }
            setOutputAtIndex(index, outputValue);
          }
        }
      `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/RotateWithOffset.ts
var rotateWithOffsetConfig = {
  kernelName: RotateWithOffset,
  backendName: "webgpu",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { image } = inputs;
    const { radians, fillValue, center } = attrs;
    const webgpuBackend = backend;
    const program = new RotateProgram(image.shape, fillValue);
    const [centerX, centerY] = backend_util_exports.getImageCenter(center, image.shape[1], image.shape[2]);
    const uniformData = [
      { type: "float32", data: [centerX] },
      { type: "float32", data: [centerY] },
      { type: "float32", data: [Math.sin(radians)] },
      { type: "float32", data: [Math.cos(radians)] }
    ];
    if (typeof fillValue === "number") {
      uniformData.push({ type: "float32", data: [Number.parseFloat(fillValue.toFixed(2))] });
    } else {
      uniformData.push({ type: "float32", data: fillValue });
    }
    const output = webgpuBackend.runWebGPUProgram(program, [image], image.dtype, uniformData);
    return output;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Rsqrt.ts
var rsqrt3 = unaryKernelFunc({ opType: 16 /* RSQRT */, cpuKernelImpl: rsqrtImplCPU });
var rsqrtConfig = {
  kernelName: Rsqrt,
  backendName: "webgpu",
  kernelFunc: rsqrt3
};

// src/tfjs-backend-webgpu/src/scatter_optimized_webgpu.ts
var ScatterOptimizedProgram = class {
  constructor(flattenXShape, sliceDim, indicesRank, updatesRank, strides, shape, outputDtype) {
    this.variableNames = ["updates", "indices"];
    this.workGroupSize = [64, 1, 1];
    this.atomic = true;
    this.outputShape = shape;
    this.type = outputDtype;
    this.dispatchLayout = flatDispatchLayout(flattenXShape);
    this.dispatch = computeDispatch(this.dispatchLayout, flattenXShape, this.workGroupSize);
    this.sliceDimGreaterThanOne = sliceDim > 1;
    this.shaderKey = `scatter_${indicesRank}_${updatesRank}_${this.sliceDimGreaterThanOne}_${outputDtype}`;
    const stridesType = getCoordsDataType(strides.length);
    this.uniforms = `sliceDim : i32; strides: ${stridesType}; size: i32;`;
    this.updatesRank = updatesRank;
    this.indicesRank = indicesRank;
  }
  getUserCode() {
    let indicesString = "";
    if (this.indicesRank === 1) {
      indicesString = "coords[0]";
    } else if (this.indicesRank === 2) {
      indicesString = "coords[0], j";
    }
    const indicesSnippet = `getIndices(${indicesString})`;
    const strideString = this.sliceDimGreaterThanOne ? "uniforms.strides[j]" : "uniforms.strides";
    let updatesString = "";
    let outCoordsString = "";
    let getUpdatesCoordsFromFlatIndex = "";
    if (this.updatesRank === 1) {
      updatesString = "coords[0]";
      outCoordsString = "flattenedIndex";
      getUpdatesCoordsFromFlatIndex = `
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {
        return index;
      }
      `;
    } else if (this.updatesRank === 2) {
      updatesString = "coords[0], coords[1]";
      outCoordsString = "vec2<i32>(flattenedIndex, coords[1])";
      getUpdatesCoordsFromFlatIndex = `
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {
        let d0 = index / uniforms.updatesShape[1];
        let d1 = index - d0 * uniforms.updatesShape[1];
        return vec2<i32>(d0, d1);
      }
      `;
    }
    const updatesSnippet = `getUpdates(${updatesString})`;
    const atomicAddSnippet = this.type === "int32" ? `atomicAdd(&(result.numbers[flatIndex]), i32(updateValue));` : `
     var assumed = atomicLoad(&(result.numbers[flatIndex]));
     var success = 0;
     for (; success == 0;) {
       let new = bitcast<f32>(assumed) + updateValue;
       let newI32 = bitcast<i32>(new);
       let resValue = atomicCompareExchangeWeak(&(result.numbers[flatIndex]), assumed, newI32);
       assumed = resValue[0];
       success = resValue[1];
     }
     `;
    const userCode = `
    ${getUpdatesCoordsFromFlatIndex}

      ${getMainHeaderAndGlobalIndexString()}

        if (index < uniforms.size) {
          let coords = getUpdatesCoordsFromFlatIndex(index);
          var flattenedIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexInside = i32(round(${indicesSnippet}));
            flattenedIndex = flattenedIndex + indexInside * ${strideString};
          }
          let updateValue = ${updatesSnippet};
          let flatIndex = getOutputIndexFromCoords(${outCoordsString});

         ${atomicAddSnippet}
        }
      }`;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/ScatterNd.ts
function scatterNd(args) {
  const { inputs, backend, attrs } = args;
  const { indices, updates } = inputs;
  const { shape } = attrs;
  const { sliceRank, numUpdates, sliceSize, strides, outputSize } = backend_util_exports.calculateShapes(updates, indices, shape);
  const flattenShape = [outputSize / sliceSize, sliceSize];
  if (outputSize === 0) {
    return backend.makeTensorInfo(shape, indices.dtype);
  }
  const flattenIndices = reshape2({ inputs: { x: indices }, backend, attrs: { shape: [numUpdates, sliceRank] } });
  const flattenX = reshape2({ inputs: { x: updates }, backend, attrs: { shape: [numUpdates, sliceSize] } });
  const type = flattenX.dtype;
  const output = fill2({ backend, attrs: { shape: flattenShape, value: 0, dtype: type } });
  const size = util_exports.sizeFromShape(flattenX.shape);
  const uniformData = [
    { type: "int32", data: [sliceRank] },
    { type: "int32", data: strides },
    { type: "int32", data: [size] }
  ];
  const program = new ScatterOptimizedProgram(flattenX.shape, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape, type);
  const res = backend.runWebGPUProgram(program, [flattenX, flattenIndices], type, uniformData, output);
  const reshaped = reshape2({ inputs: { x: res }, backend, attrs: { shape } });
  backend.disposeData(flattenIndices.dataId);
  backend.disposeData(flattenX.dataId);
  backend.disposeData(res.dataId);
  return reshaped;
}
var scatterNdConfig = {
  kernelName: ScatterNd,
  backendName: "webgpu",
  kernelFunc: scatterNd
};

// src/tfjs-backend-webgpu/src/select_webgpu.ts
var SelectProgram = class {
  constructor(cRank, shape, rank) {
    this.variableNames = ["c", "a", "b"];
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = shape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.cRank = cRank;
    this.rank = rank;
    this.shaderKey = "select";
  }
  getUserCode() {
    let cCoords;
    let abCoords;
    if (this.rank > 4) {
      throw Error(`Where for rank ${this.rank} is not yet supported`);
    }
    if (this.rank === 1) {
      abCoords = `resRC`;
      cCoords = `resRC`;
    } else {
      const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"];
      const cCoordVars = [];
      const abCoordVars = [];
      for (let i = 0; i < this.outputShape.length; i++) {
        abCoordVars.push(`${currentCoords[i]}`);
        if (i < this.cRank) {
          cCoordVars.push(`${currentCoords[i]}`);
        }
      }
      cCoords = cCoordVars.join();
      abCoords = abCoordVars.join();
    }
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let cVal = getC(${cCoords});
          if (cVal >= 1.0) {
            setOutputAtIndex(index, getA(${abCoords}));
          } else {
            setOutputAtIndex(index, getB(${abCoords}));
          }
        }
      }
    `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Select.ts
function select2(args) {
  const { inputs, backend } = args;
  const { condition, t, e } = inputs;
  const program = new SelectProgram(condition.shape.length, t.shape, t.shape.length);
  return backend.runWebGPUProgram(program, [condition, t, e], upcastType(t.dtype, e.dtype));
}
var selectConfig = {
  kernelName: Select,
  backendName: "webgpu",
  kernelFunc: select2
};

// src/tfjs-backend-webgpu/src/kernels/Sigmoid.ts
var sigmoid3 = unaryKernelFunc({ opType: 19 /* SIGMOID */ });
var sigmoidConfig = {
  kernelName: Sigmoid,
  backendName: "webgpu",
  kernelFunc: sigmoid3
};

// src/tfjs-backend-webgpu/src/kernels/Sin.ts
var sin2 = unaryKernelFunc({ opType: 17 /* SIN */ });
var sinConfig = {
  kernelName: Sin,
  backendName: "webgpu",
  kernelFunc: sin2
};

// src/tfjs-backend-webgpu/src/kernels/Sinh.ts
var sinh2 = unaryKernelFunc({ opType: 18 /* SINH */ });
var sinhConfig = {
  kernelName: Sinh,
  backendName: "webgpu",
  kernelFunc: sinh2
};

// src/tfjs-backend-webgpu/src/kernels/Sub.ts
var sub3 = binaryKernelFunc({
  opSnippet: 2 /* SUB */,
  cpuKernelImpl: subImplCPU,
  supportsComplex: true
});
var subConfig = {
  kernelName: Sub,
  backendName: "webgpu",
  kernelFunc: sub3
};

// src/tfjs-backend-webgpu/src/kernels/Softmax.ts
function softmax2(args) {
  const { inputs, backend, attrs } = args;
  const { logits } = inputs;
  const { dim } = attrs;
  const axes = util_exports.parseAxisParam([dim], logits.shape);
  const maxLogit = max2({
    inputs: { x: logits },
    backend,
    attrs: { reductionIndices: axes, keepDims: false }
  });
  const expandedShape = backend_util_exports.expandShapeToKeepDim(maxLogit.shape, axes);
  const maxLogitsReshaped = reshape2({ inputs: { x: maxLogit }, backend, attrs: { shape: expandedShape } });
  const a = sub3({ inputs: { a: logits, b: maxLogitsReshaped }, backend });
  const b = exp3({ inputs: { x: a }, backend });
  const sumExp = sum3({ inputs: { x: b }, backend, attrs: { axis: axes, keepDims: false } });
  const sumExpReshaped = reshape2({ inputs: { x: sumExp }, backend, attrs: { shape: expandedShape } });
  const res = realDiv({ inputs: { a: b, b: sumExpReshaped }, backend });
  backend.disposeData(maxLogit.dataId);
  backend.disposeData(maxLogitsReshaped.dataId);
  backend.disposeData(a.dataId);
  backend.disposeData(b.dataId);
  backend.disposeData(sumExp.dataId);
  backend.disposeData(sumExpReshaped.dataId);
  return res;
}
var softmaxConfig = {
  kernelName: Softmax,
  backendName: "webgpu",
  kernelFunc: softmax2
};

// src/tfjs-backend-webgpu/src/kernels/SpaceToBatchND.ts
var spaceToBatchND2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockShape, paddings } = attrs;
  util_exports.assert(x.shape.length <= 4, () => "spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet");
  const prod3 = blockShape.reduce((a, b) => a * b);
  const completePaddings = [[0, 0]];
  completePaddings.push(...paddings);
  for (let i = 1 + blockShape.length; i < x.shape.length; ++i) {
    completePaddings.push([0, 0]);
  }
  const toDispose = [];
  const paddedX = padV2({
    inputs: { x },
    backend,
    attrs: { paddings: completePaddings, constantValue: 0 }
  });
  const reshapedPaddedShape = backend_util_exports.getReshaped(paddedX.shape, blockShape, prod3, false);
  const permutedReshapedPaddedPermutation = backend_util_exports.getPermuted(reshapedPaddedShape.length, blockShape.length, false);
  const flattenShape = backend_util_exports.getReshapedPermuted(paddedX.shape, blockShape, prod3, false);
  const reshapedPaddedX = reshape2({ inputs: { x: paddedX }, backend, attrs: { shape: reshapedPaddedShape } });
  const paddedXT = transpose3({
    inputs: { x: reshapedPaddedX },
    backend,
    attrs: { perm: permutedReshapedPaddedPermutation }
  });
  const result = reshape2({ inputs: { x: paddedXT }, backend, attrs: { shape: flattenShape } });
  toDispose.push(paddedX);
  toDispose.push(reshapedPaddedX);
  toDispose.push(paddedXT);
  toDispose.forEach((t) => backend.disposeData(t.dataId));
  return result;
};
var spaceToBatchNDConfig = {
  kernelName: SpaceToBatchND,
  backendName: "webgpu",
  kernelFunc: spaceToBatchND2
};

// src/tfjs-backend-webgpu/src/scatter_webgpu.ts
var ScatterProgram = class {
  constructor(updateSize, sliceDim, indicesRank, updatesRank, strides, shape, summingDupeIndex = true) {
    this.variableNames = ["updates", "indices", "defaultValue"];
    this.workGroupSize = [64, 1, 1];
    this.workPerThread = 4;
    this.size = true;
    this.outputShape = shape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    const sliceDimGreaterThanOne = sliceDim > 1;
    this.shaderKey = `scatter_${indicesRank}_${updatesRank}_${sliceDimGreaterThanOne}`;
    const stridesType = getCoordsDataType(strides.length);
    this.uniforms = `updateSize : i32; sliceDim : i32; strides: ${stridesType};`;
    let indicesString = "";
    if (indicesRank === 1) {
      indicesString = "i";
    } else if (indicesRank === 2) {
      indicesString = "i, j";
    }
    this.indicesSnippet = `getIndices(${indicesString})`;
    let updatesString = "";
    if (updatesRank === 1) {
      updatesString = "i";
    } else if (updatesRank === 2) {
      updatesString = "i, coords[1]";
    }
    this.updatesSnippet = `getUpdates(${updatesString})`;
    this.strideString = sliceDimGreaterThanOne ? "uniforms.strides[j]" : "uniforms.strides";
  }
  getUserCode() {
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}

        let globalIndex = index * ${this.workPerThread};
        if (globalIndex < uniforms.size) {
          var sum = vec4<f32>(0.0);
          var found = vec4<bool>(false);
          for (var i = 0; i < uniforms.updateSize; i = i + 1) {
            var flattenedIndex = 0;
            for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
              let indexInside = i32(round(${this.indicesSnippet}));
              flattenedIndex = flattenedIndex + indexInside * ${this.strideString};
            }
            for (var innerIndex = 0; innerIndex < ${this.workPerThread}; innerIndex = innerIndex + 1) {
              let curIndex = globalIndex + innerIndex;
              let coords = getCoordsFromIndex(curIndex);
              if (flattenedIndex == coords[0]) {
                sum[innerIndex] = sum[innerIndex] + ${this.updatesSnippet};
                found[innerIndex] = true;
              }
            }
          }
          for (var innerIndex = 0; innerIndex < ${this.workPerThread}; innerIndex = innerIndex + 1) {
            let curIndex = globalIndex + innerIndex;
            if (curIndex < uniforms.size)
            {
              setOutputAtIndex(curIndex, mix(getDefaultValue(), sum[innerIndex], f32(found[innerIndex])));
            }
          }
        }
      }`;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/SparseToDense.ts
function sparseToDense2(args) {
  const { inputs, backend, attrs } = args;
  const { sparseIndices, sparseValues, defaultValue } = inputs;
  const { outputShape } = attrs;
  const { sliceRank, numUpdates, strides, outputSize } = backend_util_exports.calculateShapes(sparseValues, sparseIndices, outputShape);
  const sumDupeIndices = false;
  const uniformData = [
    { type: "int32", data: [numUpdates] },
    { type: "int32", data: [sliceRank] },
    { type: "int32", data: strides }
  ];
  const program = new ScatterProgram(numUpdates, sliceRank, sparseIndices.shape.length, sparseValues.shape.length, strides, [outputSize, 1], sumDupeIndices);
  const res = backend.runWebGPUProgram(program, [sparseValues, sparseIndices, defaultValue], sparseValues.dtype, uniformData);
  const reshaped = reshape2({ inputs: { x: res }, backend, attrs: { shape: outputShape } });
  backend.disposeData(res.dataId);
  return reshaped;
}
var sparseToDenseConfig = {
  kernelName: SparseToDense,
  backendName: "webgpu",
  kernelFunc: sparseToDense2
};

// src/tfjs-backend-webgpu/src/kernels/SplitV.ts
function splitV(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { numOrSizeSplits, axis } = attrs;
  const $axis = util_exports.parseAxisParam(axis, x.shape)[0];
  const splitSizes = backend_util_exports.prepareSplitSize(x, numOrSizeSplits, $axis);
  const xRank = x.shape.length;
  const begin = new Array(xRank).fill(0);
  const size = x.shape.slice();
  return splitSizes.map((s) => {
    const sliceSize = [...size];
    sliceSize[$axis] = s;
    const sliceT = slice2({ inputs: { x }, backend, attrs: { begin, size: sliceSize } });
    begin[$axis] += s;
    return sliceT;
  });
}
var splitVConfig = {
  kernelName: SplitV,
  backendName: "webgpu",
  kernelFunc: splitV
};

// src/tfjs-backend-webgpu/src/kernels/Sqrt.ts
var sqrt3 = unaryKernelFunc({ opType: 20 /* SQRT */ });
var sqrtConfig = {
  kernelName: Sqrt,
  backendName: "webgpu",
  kernelFunc: sqrt3
};

// src/tfjs-backend-webgpu/src/kernels/Square.ts
var squareConfig = {
  kernelName: Square,
  backendName: "webgpu",
  kernelFunc: ({ inputs, backend }) => {
    const { x } = inputs;
    const webGPUBackend = backend;
    const program = new UnaryOpProgram(x.shape, 21 /* SQUARE */);
    return webGPUBackend.runWebGPUProgram(program, [x], x.dtype);
  }
};

// src/tfjs-backend-webgpu/src/kernels/SquaredDifference.ts
var squaredDifference3 = binaryKernelFunc({
  opSnippet: 11 /* SQUARED_DIFFERENCE */
});
var squaredDifferenceConfig = {
  kernelName: SquaredDifference,
  backendName: "webgpu",
  kernelFunc: squaredDifference3
};

// src/tfjs-backend-webgpu/src/strided_slice_webgpu.ts
var StridedSliceProgram = class {
  constructor(destSize) {
    this.variableNames = ["x"];
    this.workPerThread = 1;
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = destSize;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
    const dtype = getCoordsDataType(this.outputShape.length);
    this.uniforms = `begin : ${dtype};  strides : ${dtype}; `;
    this.shaderKey = "stridedSlice";
  }
  getUserCode() {
    const rank = this.outputShape.length;
    let newCoords = "";
    if (rank === 1) {
      newCoords = "coords * uniforms.strides + uniforms.begin";
    } else {
      let outputAxis = 0;
      newCoords = this.outputShape.map((_, i) => {
        outputAxis++;
        return this.outputShape.length === 1 ? `coords * uniforms.strides[${i}] + uniforms.begin[${i}]` : `coords[${outputAxis - 1}] * uniforms.strides[${i}] + uniforms.begin[${i}]`;
      }).join(",");
    }
    const userCode = `
       ${getMainHeaderAndGlobalIndexString()}
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index);
           setOutputAtIndex(index, getX(${newCoords}));
         }
       }
     `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/StridedSlice.ts
function stridedSlice2(args) {
  const { inputs, backend, attrs } = args;
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
  } = slice_util_exports.sliceInfo(x.shape, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask);
  let result;
  if (isIdentity) {
    result = reshape2({ inputs: { x }, backend, attrs: { shape: finalShape } });
  } else if (sliceDim0 || isSimpleSlice) {
    util_exports.assert(x.shape.length >= 1, () => `Input must have rank at least 1, got: ${x.shape.length}`);
    const size = slice_util_exports.computeOutShape($begin, $end, $strides);
    const sliced = slice2({ inputs: { x }, backend, attrs: { begin: $begin, size } });
    result = reshape2({ inputs: { x: sliced }, backend, attrs: { shape: finalShape } });
    backend.disposeData(sliced.dataId);
  } else {
    const shouldExecuteOnCPU = backend.shouldExecuteOnCPU([x]);
    if (shouldExecuteOnCPU) {
      const values = backend.readSync(x.dataId);
      const xBuf = buffer(x.shape, x.dtype, values);
      const resultValues = stridedSliceImplCPU(finalShapeSparse, xBuf, $strides, $begin);
      result = backend.makeTensorInfo(finalShape, x.dtype, resultValues.values);
    } else {
      const program = new StridedSliceProgram(finalShapeSparse);
      const uniformData = [{ type: "int32", data: $begin }, { type: "int32", data: $strides }];
      const resultValues = backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
      result = reshape2({ inputs: { x: resultValues }, backend, attrs: { shape: finalShape } });
      backend.disposeData(resultValues.dataId);
    }
  }
  return result;
}
var stridedSliceConfig = {
  kernelName: StridedSlice,
  backendName: "webgpu",
  kernelFunc: stridedSlice2
};

// src/tfjs-backend-webgpu/src/kernels/StringNGrams.ts
function stringNGrams2(args) {
  const { inputs, backend, attrs } = args;
  const {
    separator,
    nGramWidths,
    leftPad,
    rightPad: rightPad2,
    padWidth,
    preserveShortSequences
  } = attrs;
  const { data, dataSplits } = inputs;
  const $data = backend.readSync(data.dataId);
  const $dataSplits = backend.readSync(dataSplits.dataId);
  const [nGrams, nGramsSplits] = stringNGramsImplCPU($data, $dataSplits, separator, nGramWidths, leftPad, rightPad2, padWidth, preserveShortSequences);
  return [
    backend.makeTensorInfo([nGrams.length], "string", nGrams),
    backend.makeTensorInfo(dataSplits.shape, "int32", nGramsSplits)
  ];
}
var stringNGramsConfig = {
  kernelName: StringNGrams,
  backendName: "webgpu",
  kernelFunc: stringNGrams2
};

// src/tfjs-backend-webgpu/src/kernels/Tanh.ts
var tanh3 = unaryKernelFunc({ opType: 22 /* TANH */ });
var tanhConfig = {
  kernelName: Tanh,
  backendName: "webgpu",
  kernelFunc: tanh3
};

// src/tfjs-backend-webgpu/src/tile_webgpu.ts
var TileProgram = class {
  constructor(aShape, reps) {
    this.variableNames = ["A"];
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[i] * reps[i];
    }
    this.outputShape = outputShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.rank = this.outputShape.length;
    this.shaderKey = "tile";
  }
  getUserCode() {
    const sourceCoords = getSourceCoords2(this.rank, "uniforms.");
    const userCode = `
      ${getMainHeaderAndGlobalIndexString()}
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          setOutputAtIndex(index, getA(${sourceCoords}));
        }
      }
    `;
    return userCode;
  }
};
function getSourceCoords2(rank, uniformPrefix = "") {
  if (rank >= 5) {
    throw Error(`Tile for rank ${rank} is not yet supported`);
  }
  if (rank === 1) {
    return `(resRC % ${uniformPrefix}aShape)`;
  }
  const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"];
  const sourceCoords = [];
  for (let i = 0; i < rank; i++) {
    sourceCoords.push(`(${currentCoords[i]} % ${uniformPrefix}aShape[${i}])`);
  }
  return sourceCoords.join();
}

// src/tfjs-backend-webgpu/src/kernels/Tile.ts
function tile2(params) {
  const { inputs, backend, attrs } = params;
  const { x } = inputs;
  const { reps } = attrs;
  if (backend.shouldExecuteOnCPU([x]) || x.dtype === "string" || x.shape.length >= 5) {
    const data = backend.readSync(x.dataId);
    const value = x.dtype === "string" ? data.map((d) => util_exports.decodeString(d)) : data;
    const buf = buffer(x.shape, x.dtype, value);
    const outBuf = tileImplCPU(buf, reps);
    return backend.makeTensorInfo(outBuf.shape, outBuf.dtype, outBuf.values);
  }
  const program = new TileProgram(x.shape, reps);
  const output = backend.runWebGPUProgram(program, [x], x.dtype);
  return output;
}
var tileConfig = {
  kernelName: Tile,
  backendName: "webgpu",
  kernelFunc: tile2
};

// src/tfjs-backend-webgpu/src/top_k_webgpu.ts
var SwapProgram = class {
  constructor(shape) {
    this.variableNames = ["x", "indices"];
    this.workGroupSize = [256, 1, 1];
    this.size = true;
    this.outputShape = shape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.uniforms = `inputSize : i32; firstPass : i32; negativeInf : f32;
        dir : i32; inc : i32;`;
    this.shaderKey = "swap";
  }
  getUserCode() {
    const userCode = `
        ${getMainHeaderAndGlobalIndexString()}
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // We compare elements pair-wise within a group of size 2 * inc.
            // The comparing rule for each group alternates between ascending
            // and descending. Within each group, we compare each pair at
            // positions i and i+inc. To decide whether an element at position i
            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
            // inc, it is in the first half of the group, we denote it as x0,
            // otherwise we denote it as x1.
            // For example, as shown in the Bitonic top K paper referenced
            // above, Figure5(a) shows that element[1] is in the second half of
            // the group when group size is 2, but it is in the first half of
            // the group when group size is 4.
            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;
            var i = 0;
            if (isFirstInPair) {
              i = elemIdx;
            } else {
              i = elemIdx - uniforms.inc;
            }

            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }

            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.inc;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.inc));
            }

            var x0 = f32(0.0);
            var x1 = f32(0.0);
            if (i0 < uniforms.inputSize) {
              x0 = getX(batch, i0);
            } else {
              x0 = uniforms.negativeInf;
            }
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = uniforms.negativeInf;
            }

            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;
            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
            if (reverse == isGreater) {
              // Elements in opposite order of direction
              let iTemp = i0;
              i0 = i1;
              i1 = iTemp;
            }
            if (isFirstInPair) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `;
    return userCode;
  }
};
var MergeProgram = class {
  constructor(shape) {
    this.variableNames = ["x", "indices"];
    this.workGroupSize = [256, 1, 1];
    this.size = true;
    this.outputShape = shape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.uniforms = `inputSize : i32; firstPass : i32; k : i32;`;
    this.shaderKey = "merge";
  }
  getUserCode() {
    const userCode = `
        ${getMainHeaderAndGlobalIndexString()}
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // The output size is half of the previous size.
            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _
            // (k=4), we only need to output the indices at positions |, the
            // indices at positions _ can be thrown away, see Figure5(b) After
            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced
            // above.
            // For example, the paper shows we only need to output the orange
            // bars. The output sequence should look like this | | | | | | | |.
            // Because the sequence is halved, to map the output index back to
            // the previous sequence to find the corresponding value, we need
            // to double the index. When we double the index, we basically
            // interpolate a position, so 2i looks like
            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k
            // position of each 2k positions by - elemIdx % k. E.g. for output
            // at index 4,5,6,7, we want to get the corresponding element at
            // original index 8,9,10,11, for output at index 8,9,10,11,
            // we want to get the corresponding element at original index
            // 16,17,18,19, so on and so forth.

            var i = 0;
            if (elemIdx < uniforms.k) {
              i = elemIdx;
            } else {
              i = elemIdx * 2 - elemIdx % uniforms.k;
            }
            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }
            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.k;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.k));
            }

            let x0 = getX(batch, i0);
            var x1 = f32(0.0);
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = x0;
            }

            if (x0 >= x1) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/TopK.ts
function disposeIntermediateTensorInfoOrNull(backend, tensorInfo) {
  if (tensorInfo !== null) {
    backend.disposeData(tensorInfo.dataId);
  }
}
function roundUpToPow2(num) {
  let pow22 = 1;
  while (pow22 < num) {
    pow22 *= 2;
  }
  return pow22;
}
function topK(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { k, sorted } = attrs;
  const xShape = x.shape;
  const lastDim = xShape[xShape.length - 1];
  if (backend.shouldExecuteOnCPU([x])) {
    const xVals = backend.readSync(x.dataId);
    const [allTopKVals, allTopKIndices] = topKImplCPU(xVals, xShape, x.dtype, k, sorted);
    return [
      backend.makeTensorInfo(allTopKVals.shape, allTopKVals.dtype, allTopKVals.values),
      backend.makeTensorInfo(allTopKIndices.shape, allTopKIndices.dtype, allTopKIndices.values)
    ];
  }
  if (k === 0) {
    xShape[xShape.length - 1] = 0;
    return [
      backend.makeTensorInfo(xShape, x.dtype, []),
      backend.makeTensorInfo(xShape, "int32", [])
    ];
  }
  if (lastDim === 1) {
    return [
      x,
      fill2({ attrs: { shape: xShape, dtype: "int32", value: 0 }, backend })
    ];
  }
  const xSize = util_exports.sizeFromShape(xShape);
  const batch = xSize / lastDim;
  const x2D = reshape2({ inputs: { x }, attrs: { shape: [batch, lastDim] }, backend });
  const kPow2 = roundUpToPow2(k);
  const lastDimPow2 = roundUpToPow2(lastDim);
  let indices = null;
  const getInputs = () => indices === null ? [x2D, x2D] : [x2D, indices];
  const runSwap = (dir, inc, shape) => {
    const inputs2 = getInputs();
    const program = new SwapProgram(shape);
    const firstPass = indices === null ? 1 : 0;
    const uniformDataSwap = [
      { type: "int32", data: [lastDim] },
      { type: "int32", data: [firstPass] },
      { type: "float32", data: [Number.NEGATIVE_INFINITY] },
      { type: "int32", data: [dir] },
      { type: "int32", data: [inc] }
    ];
    const prevIndices2 = indices;
    indices = backend.runWebGPUProgram(program, inputs2, "int32", uniformDataSwap);
    disposeIntermediateTensorInfoOrNull(backend, prevIndices2);
  };
  for (let len = 1; len < kPow2; len *= 2) {
    const dir = len * 2;
    for (let inc = len; inc >= 1; inc /= 2) {
      runSwap(dir, inc, [batch, lastDimPow2]);
    }
  }
  for (let indicesSize = lastDimPow2; indicesSize > kPow2; indicesSize /= 2) {
    const inputs2 = getInputs();
    const mergeProgram = new MergeProgram([batch, indicesSize / 2]);
    const firstPass = indices === null ? 1 : 0;
    const uniformDataMerge = [
      { type: "int32", data: [lastDim] },
      { type: "int32", data: [firstPass] },
      { type: "int32", data: [kPow2] }
    ];
    const prevIndices2 = indices;
    indices = backend.runWebGPUProgram(mergeProgram, inputs2, "int32", uniformDataMerge);
    disposeIntermediateTensorInfoOrNull(backend, prevIndices2);
    const len = kPow2 / 2;
    const dir = len * 2;
    for (let inc = len; inc >= 1; inc /= 2) {
      runSwap(dir, inc, indices.shape);
    }
  }
  let prevIndices = indices;
  indices = slice2({ inputs: { x: indices }, backend, attrs: { begin: 0, size: [batch, k] } });
  disposeIntermediateTensorInfoOrNull(backend, prevIndices);
  let values = gatherV2({ inputs: { x: x2D, indices }, backend, attrs: { axis: 1, batchDims: 1 } });
  disposeIntermediateTensorInfoOrNull(backend, x2D);
  const newShape = xShape.slice(0, -1);
  newShape.push(k);
  prevIndices = indices;
  indices = reshape2({ inputs: { x: indices }, attrs: { shape: newShape }, backend });
  disposeIntermediateTensorInfoOrNull(backend, prevIndices);
  const prevValues = values;
  values = reshape2({ inputs: { x: values }, attrs: { shape: newShape }, backend });
  disposeIntermediateTensorInfoOrNull(backend, prevValues);
  return [values, indices];
}
var topKConfig = {
  kernelName: TopK,
  backendName: "webgpu",
  kernelFunc: topK
};

// src/tfjs-backend-webgpu/src/transform_webgpu.ts
var TransformProgram = class {
  constructor(outShape) {
    this.variableNames = ["Image", "Transforms"];
    this.uniforms = "interpolationModeId : i32; fillModeId : i32; fillValue : f32;";
    this.workGroupSize = [64, 1, 1];
    this.size = true;
    this.outputShape = outShape;
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
    this.shaderKey = "transform";
  }
  getUserCode() {
    const userCode = `
          fn mapCoord(outCoord : f32, len : f32) -> f32{
            var inCoord = outCoord;
            if(uniforms.fillModeId == 2) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  if (inCoord < sz2) {
                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +
                    inCoord;
                  }
                  if (inCoord < -len) {
                    inCoord = inCoord + sz2;
                  } else {
                    inCoord = -inCoord - 1.0;
                  }
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));
                  if (inCoord >= len) {
                    inCoord = sz2 - inCoord - 1.0;
                  }
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 3) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 4) {
              return clamp(outCoord, 0.0, len - 1.0);
            }
            return outCoord;
          }
          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,
            channel : i32) -> f32 {
            var outputValue : f32;
            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {
                outputValue = getImage(batch, coordY, coordX, channel);
            } else {
              outputValue = uniforms.fillValue;
            }
            return outputValue;
          }

          ${getMainHeaderAndGlobalIndexString()}
            if (index < uniforms.size) {
              let coords = getCoordsFromIndex(index);
              var outputValue : f32;
              let batch = coords[0];
              let x = coords[2];
              let y = coords[1];
              let channel = coords[3];
              let xf = f32(x);
              let yf = f32(y);
              let a1 = getTransforms(batch, 0);
              let a2 = getTransforms(batch, 1);
              let a3 = getTransforms(batch, 2);
              let b1 = getTransforms(batch, 3);
              let b2 = getTransforms(batch, 4);
              let b3 = getTransforms(batch, 5);
              let c1 = getTransforms(batch, 6);
              let c2 = getTransforms(batch, 7);
              let projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = uniforms.fillValue;
              } else {
                let inX = (a1 * xf + a2 * yf + a3) / projection;
                let inY = (b1 * xf + b2 * yf + b3) / projection;
                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));
                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));

                if (uniforms.interpolationModeId == 1) {
                  let coordY = i32(round(mapY));
                  let coordX = i32(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  let yFloor = floor(mapY);
                  let xFloor = floor(mapX);
                  let yCeil = yFloor + 1.0;
                  let xCeil = xFloor + 1.0;
                  let valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);
                  let valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutputAtIndex(index, outputValue);
            }
          }
        `;
    return userCode;
  }
};

// src/tfjs-backend-webgpu/src/kernels/Transform.ts
function transform2(args) {
  const { inputs, backend, attrs } = args;
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
  const program = new TransformProgram(outShape);
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
  const uniformData = [
    { type: "int32", data: [interpolationModeId] },
    { type: "int32", data: [fillModeId] },
    { type: "float32", data: [fillValue] }
  ];
  return backend.runWebGPUProgram(program, [image, transforms], "float32", uniformData);
}
var transformConfig = {
  kernelName: Transform,
  backendName: "webgpu",
  kernelFunc: transform2
};

// src/tfjs-backend-webgpu/src/kernels/Unpack.ts
function unpack(args) {
  const { inputs, backend, attrs } = args;
  const { value } = inputs;
  let { axis } = attrs;
  if (axis < 0) {
    axis += value.shape.length;
  }
  const x = value;
  const xRank = x.shape.length;
  const num = value.shape[axis];
  const outShape = new Array(xRank - 1);
  let outIndex = 0;
  for (let i = 0; i < xRank; i++) {
    if (i !== axis) {
      outShape[outIndex++] = x.shape[i];
    }
  }
  const toDispose = [];
  const begin = new Array(xRank).fill(0);
  const size = x.shape.slice();
  size[axis] = 1;
  const res = new Array(num);
  for (let i = 0; i < res.length; i++) {
    begin[axis] = i;
    const sliced = slice2({ inputs: { x }, backend, attrs: { begin, size } });
    const reshaped = reshape2({ inputs: { x: sliced }, backend, attrs: { shape: outShape } });
    res[i] = reshaped;
    toDispose.push(sliced);
  }
  toDispose.forEach((t) => backend.disposeData(t.dataId));
  return res;
}
var unpackConfig = {
  kernelName: Unpack,
  backendName: "webgpu",
  kernelFunc: unpack
};

// src/tfjs-backend-webgpu/src/register_all_kernels.ts
var kernelConfigs = [
  _fusedMatMulConfig,
  absConfig,
  addConfig,
  addNConfig,
  argMaxConfig,
  argMinConfig,
  avgPoolConfig,
  batchMatMulConfig,
  batchToSpaceNDConfig,
  castConfig,
  ceilConfig,
  clipByValueConfig,
  complexConfig,
  concatConfig,
  conv2DConfig,
  conv2DBackpropInputConfig,
  cosConfig,
  coshConfig,
  cropAndResizeConfig,
  depthToSpaceConfig,
  depthwiseConv2dNativeConfig,
  einsumConfig,
  eluConfig,
  equalConfig,
  expConfig,
  expandDimsConfig,
  expm1Config,
  fillConfig,
  flipLeftRightConfig,
  fromPixelsConfig,
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
  imagConfig,
  leakyReluConfig,
  lessConfig,
  lessEqualConfig,
  logConfig,
  logicalAndConfig,
  logicalNotConfig,
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
  nonMaxSuppressionV5Config,
  notEqualConfig,
  onesLikeConfig,
  packConfig,
  padV2Config,
  powConfig,
  preluConfig,
  prodConfig,
  rangeConfig,
  realConfig,
  realDivConfig,
  reluConfig,
  relu6Config,
  reshapeConfig,
  resizeBilinearConfig,
  resizeNearestNeighborConfig,
  rotateWithOffsetConfig,
  rsqrtConfig,
  scatterNdConfig,
  selectConfig,
  sigmoidConfig,
  sinConfig,
  sinhConfig,
  sliceConfig,
  stridedSliceConfig,
  stringNGramsConfig,
  softmaxConfig,
  spaceToBatchNDConfig,
  sparseToDenseConfig,
  splitVConfig,
  sqrtConfig,
  squareConfig,
  squaredDifferenceConfig,
  subConfig,
  sumConfig,
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

// src/tfjs-backend-webgpu/src/buffer_manager.ts
var BufferManager = class {
  constructor(device) {
    this.device = device;
    this.numUsedBuffers = 0;
    this.numFreeBuffers = 0;
    this.freeBuffers = /* @__PURE__ */ new Map();
    this.usedBuffers = /* @__PURE__ */ new Map();
    this.numBytesUsed = 0;
    this.numBytesAllocated = 0;
  }
  acquireUploadBuffer(byteSize, usage) {
    return this.acquireBuffer(byteSize, usage, true);
  }
  acquireBuffer(byteSize, usage, mappedAtCreation = false) {
    const key = getBufferKey(byteSize, usage);
    if (!this.freeBuffers.has(key)) {
      this.freeBuffers.set(key, []);
    }
    if (!this.usedBuffers.has(key)) {
      this.usedBuffers.set(key, []);
    }
    this.numBytesUsed += byteSize;
    this.numUsedBuffers++;
    if (this.freeBuffers.get(key).length > 0) {
      this.numFreeBuffers--;
      const newBuffer2 = this.freeBuffers.get(key).shift();
      this.usedBuffers.get(key).push(newBuffer2);
      return newBuffer2;
    }
    this.numBytesAllocated += byteSize;
    const newBuffer = this.device.createBuffer({ mappedAtCreation, size: byteSize, usage });
    this.usedBuffers.get(key).push(newBuffer);
    return newBuffer;
  }
  releaseBuffer(buffer2, byteSize, usage) {
    if (this.freeBuffers.size === 0) {
      return;
    }
    const key = getBufferKey(byteSize, usage);
    if (!this.freeBuffers.has(key)) {
      this.freeBuffers.set(key, []);
    }
    this.freeBuffers.get(key).push(buffer2);
    this.numFreeBuffers++;
    this.numUsedBuffers--;
    const bufferList = this.usedBuffers.get(key);
    const bufferIndex = bufferList.indexOf(buffer2);
    if (bufferIndex < 0) {
      throw new Error("Cannot release a buffer that was never provided by this buffer manager");
    }
    bufferList.splice(bufferIndex, 1);
    this.numBytesUsed -= byteSize;
  }
  releaseUploadBuffer(buffer2, byteSize, usage) {
    buffer2.mapAsync(GPUMapMode.WRITE).then(() => {
      this.releaseBuffer(buffer2, byteSize, usage);
    }, (err) => {
    });
  }
  getNumUsedBuffers() {
    return this.numUsedBuffers;
  }
  getNumFreeBuffers() {
    return this.numFreeBuffers;
  }
  dispose() {
    this.freeBuffers.forEach((buffers, key) => {
      buffers.forEach((buff) => {
        buff.destroy();
      });
    });
    this.usedBuffers.forEach((buffers, key) => {
      buffers.forEach((buff) => {
        buff.destroy();
      });
    });
    this.freeBuffers = /* @__PURE__ */ new Map();
    this.usedBuffers = /* @__PURE__ */ new Map();
    this.numUsedBuffers = 0;
    this.numFreeBuffers = 0;
    this.numBytesUsed = 0;
    this.numBytesAllocated = 0;
  }
};
function getBufferKey(byteSize, usage) {
  return `${byteSize}_${usage}`;
}

// src/tfjs-backend-webgpu/src/kernels/FromPixels_utils/from_pixels_webgpu.ts
var FromPixelsProgram = class {
  constructor() {
    this.outputShape = [0];
    this.variableNames = [];
    this.workGroupSize = [256, 1, 1];
    this.lastUniformData = [];
    this.inputTexture = null;
    this.layout = null;
    this.lastPixelSize = { width: 0, height: 0 };
    this.disposed = false;
    this.shaderKey = "fromPixels";
    this.useImport = false;
  }
  updateOutputShape(outputShape) {
    if (util_exports.arraysEqual(this.outputShape, outputShape)) {
      return;
    }
    this.outputShape = outputShape;
    this.workPerThread = outputShape[2];
    this.dispatchLayout = flatDispatchLayout(this.outputShape);
    this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
  }
  makeFromPixelsSource() {
    const textureLoad = this.useImport ? "textureLoad(src, vec2<i32>(coords.yx));" : "textureLoad(src, vec2<i32>(coords.yx), 0)";
    const textureType = this.useImport ? "texture_external" : "texture_2d<f32>";
    return `
      @binding(1) @group(0) var src: ${textureType};

      ${getMainHeaderAndGlobalIndexString()}
        let flatIndexBase = index * uniforms.numChannels;
        for (var i = 0; i < uniforms.numChannels; i = i + 1) {
          let flatIndex = flatIndexBase + i;
          if (flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndexBase);
            let values = ${textureLoad};
            result.numbers[flatIndex] = i32(floor(255.0 * values[i]));
          }
        }
      }
  `;
  }
  getUserCode() {
    return this.makeFromPixelsSource();
  }
  setPipeline(pipeline) {
    this.pipeline = pipeline;
  }
  setUniform(device, uniformData) {
    if (!this.uniform) {
      const uniformBuffer = device.createBuffer({
        size: uniformData.length * 4,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      });
      this.uniform = uniformBuffer;
    }
    if (!uniformData || uniformData.length === this.lastUniformData.length && uniformData.every((v, i) => v === this.lastUniformData[i])) {
      return;
    }
    device.queue.writeBuffer(this.uniform, 0, new Uint32Array(uniformData));
    this.lastUniformData = uniformData;
  }
  makeInputTexture(device, pixelWidth, pixelHeight) {
    if (!this.inputTexture || this.lastPixelSize.width !== pixelWidth || this.lastPixelSize.height !== pixelHeight) {
      if (this.inputTexture) {
        this.inputTexture.destroy();
      }
      this.inputTexture = device.createTexture({
        size: [pixelWidth, pixelHeight],
        format: "rgba8unorm",
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
      });
      this.lastPixelSize.width = pixelWidth;
      this.lastPixelSize.height = pixelHeight;
    }
    return this.inputTexture;
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    if (this.uniform) {
      this.uniform.destroy();
    }
    if (this.inputTexture) {
      this.inputTexture.destroy();
    }
    this.disposed = true;
  }
  getLayout(device) {
    if (this.layout === null) {
      this.layout = this.createTextureLayout(device);
    }
    return this.layout;
  }
  createTextureLayout(device) {
    const bindGroupLayoutEntries = [];
    bindGroupLayoutEntries.push({
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: { type: "storage" }
    });
    bindGroupLayoutEntries.push({ binding: 1, visibility: GPUShaderStage.COMPUTE, texture: {} });
    bindGroupLayoutEntries.push({ binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: {} });
    const fromPixelBindGroupLayout = device.createBindGroupLayout({ entries: bindGroupLayoutEntries });
    const fromPixelPipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [fromPixelBindGroupLayout] });
    return {
      bindGroupLayout: fromPixelBindGroupLayout,
      pipelineLayout: fromPixelPipelineLayout
    };
  }
};

// src/tfjs-backend-webgpu/src/kernels/FromPixels_utils/from_pixels_import_webgpu.ts
var FromPixelsImportProgram = class extends FromPixelsProgram {
  constructor() {
    super(...arguments);
    this.layout = null;
    this.useImport = true;
  }
  getUserCode() {
    return this.makeFromPixelsSource();
  }
  getLayout(device) {
    if (this.layout === null) {
      this.layout = this.createTextureImportLayout(device);
    }
    return this.layout;
  }
  createTextureImportLayout(device) {
    const bindGroupLayoutEntries = [];
    bindGroupLayoutEntries.push({
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: { type: "storage" }
    });
    bindGroupLayoutEntries.push({
      binding: 1,
      visibility: GPUShaderStage.COMPUTE,
      externalTexture: {}
    });
    bindGroupLayoutEntries.push({ binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: {} });
    const fromPixelImportBindGroupLayout = device.createBindGroupLayout({ entries: bindGroupLayoutEntries });
    const fromPixelImportPipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [fromPixelImportBindGroupLayout] });
    return {
      bindGroupLayout: fromPixelImportBindGroupLayout,
      pipelineLayout: fromPixelImportPipelineLayout
    };
  }
};

// src/tfjs-backend-webgpu/src/backend_webgpu.ts
var CPU_HANDOFF_SIZE_THRESHOLD = env().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD");
var reshapeDispatch = (device, program) => {
  const MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE = device.limits.maxComputeWorkgroupsPerDimension;
  const layout = program["dispatchLayout"];
  const dispatch = program["dispatch"];
  if (dispatch.every((d) => d <= MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE)) {
    return dispatch;
  }
  util_exports.assert(dispatch[0] > MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE && layout.y === void 0 && layout.z === void 0, () => "Dispatch size exceeds WebGPU limits in Y or Z dimension.");
  let dispatchAverage = Math.ceil(Math.sqrt(dispatch[0]));
  if (dispatchAverage > MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE) {
    dispatchAverage = Math.ceil(Math.cbrt(dispatch[0]));
    util_exports.assert(dispatchAverage <= MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE, () => "Total dispatch size exceeds WebGPU maximum.");
    return [dispatchAverage, dispatchAverage, dispatchAverage];
  } else {
    return [dispatchAverage, dispatchAverage, 1];
  }
};
var _WebGPUBackend = class extends KernelBackend {
  constructor(device, supportTimeQuery = false) {
    super();
    this.commandQueueOwnedIds = /* @__PURE__ */ new WeakSet();
    this.tensorDisposalQueue = [];
    this.uniformDisposalQueue = [];
    this.stagingDisposalQueue = [];
    this.disposed = false;
    this.uploadWaitMs = 0;
    this.downloadWaitMs = 0;
    this.dispatchNumberInEncoder = 0;
    if (!isWebGPUSupported()) {
      throw new Error("WebGPU is not supported on this device");
    }
    this.layoutCache = {};
    this.pipelineCache = {};
    this.device = device;
    this.queue = device.queue;
    this.currentCommandEncoder = null;
    this.currentComputePass = null;
    this.supportTimeQuery = supportTimeQuery;
    this.bufferManager = new BufferManager(this.device);
    this.tensorMap = new DataStorage(this, engine());
    if (this.supportTimeQuery) {
      this.querySet = this.device.createQuerySet({
        type: "timestamp",
        count: 2
      });
    }
    if (env().getBool("WEBGPU_USE_PROFILE_TOOL")) {
      this.dummyCanvas = document.createElement("canvas");
      this.dummyCanvas.width = 1;
      this.dummyCanvas.height = 1;
      this.dummyContext = this.dummyCanvas.getContext("webgpu");
      this.dummyContext.configure({
        device,
        format: "bgra8unorm"
      });
      document.body.appendChild(this.dummyCanvas);
    }
  }
  nextDataId() {
    return _WebGPUBackend.nextDataId++;
  }
  floatPrecision() {
    return 32;
  }
  defaultGpuBufferUsage() {
    return GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST;
  }
  flushDisposalQueue() {
    this.tensorDisposalQueue.forEach((d) => {
      this.maybeReleaseBuffer(d);
      this.tensorMap.delete(d);
    });
    this.uniformDisposalQueue.forEach((d) => this.bufferManager.releaseBuffer(d.buffer, d.byteSize, d.usage));
    this.stagingDisposalQueue.forEach((d) => this.bufferManager.releaseUploadBuffer(d.buffer, d.byteSize, d.usage));
    this.tensorDisposalQueue = [];
    this.uniformDisposalQueue = [];
    this.stagingDisposalQueue = [];
  }
  disposeData(dataId, force = false) {
    if (this.tensorMap.has(dataId)) {
      const data = this.tensorMap.get(dataId);
      data.refCount--;
      if (!force && data.refCount > 0) {
        return false;
      }
      if (this.commandQueueOwnedIds.has(dataId)) {
        this.tensorDisposalQueue.push(dataId);
        return false;
      } else {
        this.maybeReleaseBuffer(dataId);
      }
      const { complexTensorInfos } = this.tensorMap.get(dataId);
      if (complexTensorInfos != null) {
        this.disposeData(complexTensorInfos.real.dataId, true);
        this.disposeData(complexTensorInfos.imag.dataId, true);
      }
      this.tensorMap.delete(dataId);
    }
    return true;
  }
  memory() {
    return {
      numBytesInGPU: this.bufferManager.numBytesUsed,
      numBytesAllocatedInGPU: this.bufferManager.numBytesAllocated,
      unreliable: false
    };
  }
  getBufferManager() {
    return this.bufferManager;
  }
  acquireBuffer(byteSize, usage = this.defaultGpuBufferUsage()) {
    return this.bufferManager.acquireBuffer(byteSize, usage);
  }
  maybeReleaseBuffer(dataId) {
    const info = this.tensorMap.get(dataId);
    if (info != null && info.bufferInfo.buffer != null) {
      this.bufferManager.releaseBuffer(info.bufferInfo.buffer, info.bufferInfo.byteSize, info.bufferInfo.usage);
      info.bufferInfo.buffer = null;
    }
  }
  refCount(dataId) {
    if (this.tensorMap.has(dataId)) {
      const tensorData = this.tensorMap.get(dataId);
      return tensorData.refCount;
    }
    return 0;
  }
  incRef(dataId) {
    const tensorData = this.tensorMap.get(dataId);
    tensorData.refCount++;
  }
  decRef(dataId) {
    if (this.tensorMap.has(dataId)) {
      const tensorData = this.tensorMap.get(dataId);
      tensorData.refCount--;
    }
  }
  write(values, shape, dtype) {
    if (dtype === "complex64" && values != null) {
      throw new Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);
    }
    const dataId = { id: this.nextDataId() };
    const byteSize = util_exports.sizeFromShape(shape) * GPUBytesPerElement(dtype);
    this.tensorMap.set(dataId, {
      dtype,
      values,
      bufferInfo: { byteSize, usage: this.defaultGpuBufferUsage() },
      refCount: 1
    });
    return dataId;
  }
  move(dataId, values, shape, dtype, refCount) {
    if (dtype === "complex64") {
      throw new Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);
    }
    const byteSize = util_exports.sizeFromShape(shape) * GPUBytesPerElement(dtype);
    this.tensorMap.set(dataId, {
      dtype,
      values,
      bufferInfo: { byteSize, usage: this.defaultGpuBufferUsage() },
      refCount
    });
  }
  submitQueue() {
    this.ensureComputePassEnded();
    this.queue.submit([this.currentCommandEncoder.finish()]);
    this.currentCommandEncoder = null;
    this.dispatchNumberInEncoder = 0;
    this.commandQueueOwnedIds = /* @__PURE__ */ new WeakSet();
    this.flushDisposalQueue();
  }
  getBuffer(dataId) {
    this.uploadToGPU(dataId);
    return this.tensorMap.get(dataId).bufferInfo.buffer;
  }
  getFromPixelsProgram(type) {
    switch (type) {
      case "copyExternal": {
        if (!this.fromPixelProgram) {
          this.fromPixelProgram = new FromPixelsProgram();
        }
        return this.fromPixelProgram;
      }
      case "import": {
        if (!this.fromPixelImportProgram) {
          this.fromPixelImportProgram = new FromPixelsImportProgram();
        }
        return this.fromPixelImportProgram;
      }
      default:
        util_exports.assert(false, () => `Unsupported fromPixels shape`);
        return void 0;
    }
  }
  ensureCommandEncoderReady() {
    if (!this.currentCommandEncoder) {
      this.currentCommandEncoder = this.device.createCommandEncoder();
    }
  }
  ensureComputePassEnded() {
    if (this.currentComputePass) {
      this.currentComputePass.endPass();
      this.currentComputePass = null;
    }
  }
  getComputePass() {
    if (!this.currentComputePass) {
      this.currentComputePass = this.currentCommandEncoder.beginComputePass();
    }
    return this.currentComputePass;
  }
  async getBufferData(info) {
    if (info.values != null) {
      return info.values;
    }
    const staging = this.acquireBuffer(info.bufferInfo.byteSize, GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ);
    this.ensureCommandEncoderReady();
    this.ensureComputePassEnded();
    this.currentCommandEncoder.copyBufferToBuffer(info.bufferInfo.buffer, 0, staging, 0, info.bufferInfo.byteSize);
    this.submitQueue();
    await staging.mapAsync(GPUMapMode.READ);
    const values = staging.getMappedRange().slice(0);
    staging.unmap();
    if (staging != null) {
      this.bufferManager.releaseBuffer(staging, info.bufferInfo.byteSize, GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ);
    }
    if (env().getBool("WEBGPU_USE_PROFILE_TOOL")) {
      util_exports.assert(this.dummyContext !== void 0, () => `Fail to get context for profiling tool`);
      this.dummyContext.getCurrentTexture();
    }
    return values;
  }
  convertAndCacheOnCPU(dataId, data) {
    const info = this.tensorMap.get(dataId);
    this.maybeReleaseBuffer(dataId);
    info.values = data;
    return info.values;
  }
  readSync(dataId) {
    const texData = this.tensorMap.get(dataId);
    const { values } = texData;
    if (values == null) {
      throw new Error("WebGPU readSync is only available for CPU-resident tensors.");
    }
    return values;
  }
  async read(dataId) {
    if (!this.tensorMap.has(dataId)) {
      throw new Error(`Tensor ${dataId} was not registered!`);
    }
    const info = this.tensorMap.get(dataId);
    const { values } = info;
    if (values != null) {
      return this.convertAndCacheOnCPU(dataId, values);
    }
    let vals;
    if (info.dtype === "complex64") {
      const ps = await Promise.all([
        this.read(info.complexTensorInfos.real.dataId),
        this.read(info.complexTensorInfos.imag.dataId)
      ]);
      const realValues = ps[0];
      const imagValues = ps[1];
      vals = backend_util_exports.mergeRealAndImagArrays(realValues, imagValues);
    } else {
      const data = await this.getBufferData(info);
      vals = ArrayBufferToTypedArray(data, info.dtype);
    }
    this.convertAndCacheOnCPU(dataId, vals);
    return vals;
  }
  bufferSync(t) {
    const data = this.readSync(t.dataId);
    let decodedData = data;
    if (t.dtype === "string") {
      try {
        decodedData = data.map((d) => util_exports.decodeString(d));
      } catch {
        throw new Error("Failed to decode encoded string bytes into utf-8");
      }
    }
    return buffer(t.shape, t.dtype, decodedData);
  }
  async time(f) {
    const oldActiveTimers = this.activeTimers;
    const newActiveTimers = [];
    let outerMostTime = false;
    if (this.programTimersStack == null) {
      this.programTimersStack = newActiveTimers;
      outerMostTime = true;
    } else {
      this.activeTimers.push(newActiveTimers);
    }
    this.activeTimers = newActiveTimers;
    f();
    const flattenedActiveTimerQueries = util_exports.flatten(this.activeTimers.map((d) => d.query)).filter((d) => d != null);
    const flattenedActiveTimerNames = util_exports.flatten(this.activeTimers.map((d) => d.name)).filter((d) => d != null);
    this.activeTimers = oldActiveTimers;
    if (outerMostTime) {
      this.programTimersStack = null;
    }
    const res = {
      uploadWaitMs: this.uploadWaitMs,
      downloadWaitMs: this.downloadWaitMs,
      kernelMs: null,
      wallMs: null
    };
    const kernelMs = await Promise.all(flattenedActiveTimerQueries);
    res["kernelMs"] = util_exports.sum(kernelMs);
    res["getExtraProfileInfo"] = () => kernelMs.map((d, i) => ({ name: flattenedActiveTimerNames[i], ms: d })).map((d) => `${d.name}: ${d.ms}`).join(", ");
    this.uploadWaitMs = 0;
    this.downloadWaitMs = 0;
    return res;
  }
  getAndSavePipeline(key, getPipeline) {
    if (!(key in this.pipelineCache)) {
      this.pipelineCache[key] = getPipeline();
    }
    return this.pipelineCache[key];
  }
  makeTensorInfo(shape, dtype, values) {
    let dataId;
    if (dtype === "string" && values != null && values.length > 0 && util_exports.isString(values[0])) {
      const encodedValues = values.map((d) => util_exports.encodeString(d));
      dataId = this.write(encodedValues, shape, dtype);
    } else {
      dataId = this.write(values, shape, dtype);
    }
    return { dataId, shape, dtype };
  }
  tensorToBinding(tensor2) {
    if (!tensor2) {
      return null;
    }
    const tensorData = this.tensorMap.get(tensor2.dataId);
    return {
      offset: 0,
      size: tensorData.bufferInfo.byteSize,
      buffer: tensorData.bufferInfo.buffer
    };
  }
  async getQueryTime(query) {
    if (this.supportTimeQuery) {
      return this.getTimeFromQuerySet(query);
    } else {
      return 0;
    }
  }
  uploadToGPU(dataId) {
    const info = this.tensorMap.get(dataId);
    if (info.bufferInfo.buffer != null) {
      return;
    }
    info.bufferInfo.buffer = this.acquireBuffer(info.bufferInfo.byteSize);
    if (info.values) {
      const stagingBuffer = this.bufferManager.acquireUploadBuffer(info.bufferInfo.byteSize, GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC);
      const arrayBuffer = stagingBuffer.getMappedRange();
      if (info.dtype === "int32" || info.dtype === "bool") {
        new Int32Array(arrayBuffer).set(info.values);
      } else {
        new Float32Array(arrayBuffer).set(info.values);
      }
      stagingBuffer.unmap();
      this.ensureCommandEncoderReady();
      this.ensureComputePassEnded();
      this.currentCommandEncoder.copyBufferToBuffer(stagingBuffer, 0, info.bufferInfo.buffer, 0, info.bufferInfo.byteSize);
      const stagingInfo = {
        byteSize: info.bufferInfo.byteSize,
        usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
        buffer: stagingBuffer
      };
      this.stagingDisposalQueue.push(stagingInfo);
    }
  }
  makeUniforms(uniformsWithType) {
    let currentOffset = 0;
    const offsets = [];
    uniformsWithType.forEach((d) => {
      if (d.data.length === 0) {
        d.data = [1];
      }
      let baseAlignment;
      switch (d.data.length) {
        case 1:
          baseAlignment = 4;
          break;
        case 2:
          baseAlignment = 8;
          break;
        case 3:
          baseAlignment = 16;
          break;
        case 4:
          baseAlignment = 16;
          break;
        default:
          util_exports.assert(false, () => `Unsupported ${d.data.length}D shape`);
      }
      currentOffset = Math.ceil(currentOffset / baseAlignment) * baseAlignment;
      offsets.push(currentOffset);
      currentOffset += d.data.length * 4;
    });
    const arrayBuffer = new ArrayBuffer(currentOffset);
    uniformsWithType.forEach((d, i) => {
      const offset = offsets[i];
      if (d.type === "int32") {
        new Int32Array(arrayBuffer, offset, d.data.length).set(d.data);
      } else if (d.type === "uint32") {
        new Uint32Array(arrayBuffer, offset, d.data.length).set(d.data);
      } else {
        new Float32Array(arrayBuffer, offset, d.data.length).set(d.data);
      }
    });
    const uniformBuffer = this.acquireBuffer(currentOffset, GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM);
    this.queue.writeBuffer(uniformBuffer, 0, arrayBuffer, 0, currentOffset);
    return { offset: 0, size: currentOffset, buffer: uniformBuffer };
  }
  createLayout(inputEntrySize) {
    const bindGroupLayoutEntries = [];
    bindGroupLayoutEntries.push({
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: { type: "storage" }
    });
    for (let i = 0; i < inputEntrySize; i++) {
      bindGroupLayoutEntries.push({
        binding: i + 1,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "read-only-storage" }
      });
    }
    bindGroupLayoutEntries.push({
      binding: inputEntrySize + 1,
      visibility: GPUShaderStage.COMPUTE,
      buffer: { type: "uniform" }
    });
    const bindGroupLayout = this.device.createBindGroupLayout({ entries: bindGroupLayoutEntries });
    const pipelineLayout = this.device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });
    return { bindGroupLayout, pipelineLayout };
  }
  getCachedOrCreateLayout(inputEntrySize) {
    if (!(inputEntrySize in this.layoutCache)) {
      this.layoutCache[inputEntrySize] = this.createLayout(inputEntrySize);
    }
    return this.layoutCache[inputEntrySize];
  }
  runWebGPUProgram(program, inputs, outputDtype, programUniforms, output) {
    if (!output) {
      output = this.makeTensorInfo(program.outputShape, outputDtype);
      if (util_exports.sizeFromShape(output.shape) === 0) {
        const outData = this.tensorMap.get(output.dataId);
        outData.values = util_exports.getTypedArrayFromDType(output.dtype, 0);
        return output;
      }
      this.uploadToGPU(output.dataId);
    }
    program.dispatch = reshapeDispatch(this.device, program);
    let uniformsWithType = [{ type: "float32", data: [NaN] }];
    const bufferShapes = inputs.concat(output).map((d) => d.shape);
    const uniformsType = "int32";
    bufferShapes.map((d) => {
      uniformsWithType.push({ type: uniformsType, data: d });
    });
    const strides = util_exports.computeStrides(output.shape);
    uniformsWithType.push({ type: uniformsType, data: strides });
    if (program.size) {
      const size = util_exports.sizeFromShape(program.outputShape);
      uniformsWithType.push({ type: uniformsType, data: [program.isVec4 ? size / 4 : size] });
    }
    if (programUniforms) {
      uniformsWithType = [...uniformsWithType, ...programUniforms];
    }
    const uniforms = this.makeUniforms(uniformsWithType);
    const inputsData = inputs.map((input, i) => {
      if (input.dtype === "complex64") {
        throw new Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);
      }
      this.uploadToGPU(input.dataId);
      return {
        dtype: this.tensorMap.get(input.dataId).dtype,
        shape: input.shape,
        name: program.variableNames[i]
      };
    });
    const bufferTypes = inputsData.map((d) => d.dtype).concat(output.dtype);
    const broadcastDims = inputsData.map((d) => backend_util_exports.getBroadcastDims(d.shape, output.shape));
    const inputShapesEqualsOutShape = inputsData.map((d) => util_exports.arraysEqual(d.shape, output.shape)).join("_");
    const broadcastDimsKey = broadcastDims.map((d) => d.join("_")).join(";");
    const key = makeShaderKey(program, bufferShapes, bufferTypes, broadcastDimsKey, inputShapesEqualsOutShape);
    const { bindGroupLayout, pipelineLayout } = this.getCachedOrCreateLayout(program.variableNames.length);
    const pipeline = this.getAndSavePipeline(key, () => {
      return compileProgram(this.device, program, pipelineLayout, inputsData, output);
    });
    const shouldTimeProgram = this.activeTimers != null;
    const bg = makeBindGroup(this.device, bindGroupLayout, inputs.map((t) => this.tensorToBinding(t)), this.tensorToBinding(output), uniforms);
    this.ensureCommandEncoderReady();
    const pass = this.getComputePass();
    if (shouldTimeProgram) {
      if (this.supportTimeQuery) {
        pass.writeTimestamp(this.querySet, 0);
      }
    }
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bg);
    pass.dispatch(program.dispatch[0], program.dispatch[1], program.dispatch[2]);
    if (shouldTimeProgram) {
      if (this.supportTimeQuery) {
        pass.writeTimestamp(this.querySet, 1);
      }
    }
    this.dispatchNumberInEncoder++;
    inputs.forEach((input) => {
      this.commandQueueOwnedIds.add(input.dataId);
    });
    this.commandQueueOwnedIds.add(output.dataId);
    const uniformInfo = {
      byteSize: uniforms.size,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
      buffer: uniforms.buffer
    };
    this.uniformDisposalQueue.push(uniformInfo);
    if (env().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE") <= this.dispatchNumberInEncoder) {
      this.submitQueue();
    }
    if (shouldTimeProgram) {
      this.activeTimers.push({
        name: program.constructor.name,
        query: this.getQueryTime(this.querySet)
      });
    }
    return output;
  }
  runFromPixelsProgram(program, output, layout, externalResource, outputId) {
    program.dispatch = reshapeDispatch(this.device, program);
    const bindGroup = this.device.createBindGroup({
      layout: layout.bindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: {
            buffer: output
          }
        },
        {
          binding: 1,
          resource: externalResource
        },
        {
          binding: 2,
          resource: {
            buffer: program.uniform
          }
        }
      ]
    });
    this.ensureCommandEncoderReady();
    const passEncoder = this.getComputePass();
    const shouldTimeProgram = this.activeTimers != null;
    if (shouldTimeProgram) {
      if (this.supportTimeQuery) {
        passEncoder.writeTimestamp(this.querySet, 0);
      }
    }
    passEncoder.setPipeline(program.pipeline);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.dispatch(program.dispatch[0], program.dispatch[1], program.dispatch[2]);
    if (shouldTimeProgram) {
      if (this.supportTimeQuery) {
        passEncoder.writeTimestamp(this.querySet, 1);
      }
    }
    this.commandQueueOwnedIds.add(outputId);
    this.submitQueue();
    if (shouldTimeProgram) {
      this.activeTimers.push({
        name: program.constructor.name,
        query: this.getQueryTime(this.querySet)
      });
    }
  }
  async getTimeFromQuerySet(querySet) {
    const queryBuffer = this.acquireBuffer(16, GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE);
    const dst = this.acquireBuffer(16, GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST);
    this.ensureCommandEncoderReady();
    this.ensureComputePassEnded();
    this.currentCommandEncoder.resolveQuerySet(querySet, 0, 2, queryBuffer, 0);
    this.currentCommandEncoder.copyBufferToBuffer(queryBuffer, 0, dst, 0, 16);
    this.submitQueue();
    await dst.mapAsync(GPUMapMode.READ);
    const arrayBuf = new BigUint64Array(dst.getMappedRange());
    const timeElapsedNanos = Number(arrayBuf[1] - arrayBuf[0]);
    dst.unmap();
    this.bufferManager.releaseBuffer(dst, 16, GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST);
    this.bufferManager.releaseBuffer(queryBuffer, 16, GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE);
    return timeElapsedNanos / 1e6;
  }
  shouldExecuteOnCPU(inputs, sizeThreshold = CPU_HANDOFF_SIZE_THRESHOLD) {
    return env().getBool("WEBGPU_CPU_FORWARD") && inputs.every((input) => this.tensorMap.get(input.dataId).bufferInfo.buffer == null && util_exports.sizeFromShape(input.shape) < sizeThreshold);
  }
  numDataIds() {
    return this.tensorMap.numDataIds() - this.tensorDisposalQueue.length;
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    this.bufferManager.dispose();
    if (this.fromPixelProgram) {
      this.fromPixelProgram.dispose();
    }
    if (this.fromPixelImportProgram) {
      this.fromPixelImportProgram.dispose();
    }
    this.disposed = true;
  }
};
var WebGPUBackend = _WebGPUBackend;
WebGPUBackend.nextDataId = 0;

// src/tfjs-backend-webgpu/src/webgpu.ts
var webgpu_exports = {};
__export(webgpu_exports, {
  WebGPUBackend: () => WebGPUBackend,
  webgpu_util: () => webgpu_util_exports
});

// src/tfjs-backend-webgpu/src/index.ts
if (isWebGPUSupported()) {
  registerBackend("webgpu", async () => {
    env().set("CHECK_COMPUTATION_FOR_ERRORS", false);
    const gpuDescriptor = {
      powerPreference: env().get("WEBGPU_USE_LOW_POWER_GPU") ? "low-power" : "high-performance"
    };
    const adapter = await navigator.gpu.requestAdapter(gpuDescriptor);
    const adapterLimits = adapter.limits;
    const deviceDescriptor = {};
    const supportTimeQuery = adapter.features.has("timestamp-query");
    deviceDescriptor.requiredLimits = {
      "maxComputeWorkgroupStorageSize": adapterLimits.maxComputeWorkgroupStorageSize,
      "maxComputeWorkgroupsPerDimension": adapterLimits.maxComputeWorkgroupsPerDimension
    };
    if (supportTimeQuery) {
      deviceDescriptor.requiredFeatures = ["timestamp-query"];
    } else {
      console.warn(`This device doesn't support timestamp-query extension. Start Chrome browser with flag --disable-dawn-features=disallow_unsafe_apis then try again. Or zero will shown for the kernel time when profiling mode isenabled. Using performance.now is not workable for webgpu sinceit doesn't support synchronously to read data from GPU.`);
    }
    const device = await adapter.requestDevice(deviceDescriptor);
    return new WebGPUBackend(device, supportTimeQuery);
  }, 3);
}
export {
  webgpu_exports as webgpu
};
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
 * you may not use backend file except in compliance with the License.
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
 * Copyright 2021 Google LLC. All Rights Reserved.
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
/** @license See the LICENSE file. */
//# sourceMappingURL=tfjs-backend-webgpu.esm.js.map
