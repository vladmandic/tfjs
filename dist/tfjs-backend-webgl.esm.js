var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod3) => function __require() {
  return mod3 || (0, cb[Object.keys(cb)[0]])((mod3 = { exports: {} }).exports, mod3), mod3.exports;
};
var __export = (target, all3) => {
  __markAsModule(target);
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
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
    LongPrototype.isEven = function isEven2() {
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
    LongPrototype.multiply = function multiply3(multiplier) {
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
    this.data = new WeakMap();
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
        console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${platform}.`);
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
    ns._tfGlobals = new Map();
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
var AvgPoolGrad = "AvgPoolGrad";
var AvgPool3D = "AvgPool3D";
var AvgPool3DGrad = "AvgPool3DGrad";
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
var Conv3DBackpropFilterV2 = "Conv3DBackpropFilterV2";
var Conv3DBackpropInputV2 = "Conv3DBackpropInputV2";
var Cos = "Cos";
var Cosh = "Cosh";
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
var EluGrad = "EluGrad";
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
var LinSpace = "LinSpace";
var Log = "Log";
var Log1p = "Log1p";
var LogicalAnd = "LogicalAnd";
var LogicalNot = "LogicalNot";
var LogicalOr = "LogicalOr";
var LRN = "LRN";
var LRNGrad = "LRNGrad";
var Max = "Max";
var Maximum = "Maximum";
var MaxPool = "MaxPool";
var MaxPoolGrad = "MaxPoolGrad";
var MaxPool3D = "MaxPool3D";
var MaxPool3DGrad = "MaxPool3DGrad";
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
var ResizeNearestNeighborGrad = "ResizeNearestNeighborGrad";
var ResizeBilinear = "ResizeBilinear";
var ResizeBilinearGrad = "ResizeBilinearGrad";
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
var kernelRegistry = getGlobal("kernelRegistry", () => new Map());
var gradRegistry = getGlobal("gradRegistry", () => new Map());
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
var LongExports = __toModule(require_long());
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
var Rank;
(function(Rank10) {
  Rank10["R0"] = "R0";
  Rank10["R1"] = "R1";
  Rank10["R2"] = "R2";
  Rank10["R3"] = "R3";
  Rank10["R4"] = "R4";
  Rank10["R5"] = "R5";
  Rank10["R6"] = "R6";
})(Rank || (Rank = {}));
var UpcastInt32AndMap;
(function(UpcastInt32AndMap2) {
  UpcastInt32AndMap2["float32"] = "float32";
  UpcastInt32AndMap2["int32"] = "int32";
  UpcastInt32AndMap2["bool"] = "int32";
  UpcastInt32AndMap2["complex64"] = "complex64";
})(UpcastInt32AndMap || (UpcastInt32AndMap = {}));
var UpcastBoolAndMap;
(function(UpcastBoolAndMap2) {
  UpcastBoolAndMap2["float32"] = "float32";
  UpcastBoolAndMap2["int32"] = "int32";
  UpcastBoolAndMap2["bool"] = "bool";
  UpcastBoolAndMap2["complex64"] = "complex64";
})(UpcastBoolAndMap || (UpcastBoolAndMap = {}));
var UpcastFloat32AndMap;
(function(UpcastFloat32AndMap2) {
  UpcastFloat32AndMap2["float32"] = "float32";
  UpcastFloat32AndMap2["int32"] = "float32";
  UpcastFloat32AndMap2["bool"] = "float32";
  UpcastFloat32AndMap2["complex64"] = "complex64";
})(UpcastFloat32AndMap || (UpcastFloat32AndMap = {}));
var UpcastComplex64AndMap;
(function(UpcastComplex64AndMap2) {
  UpcastComplex64AndMap2["float32"] = "complex64";
  UpcastComplex64AndMap2["int32"] = "complex64";
  UpcastComplex64AndMap2["bool"] = "complex64";
  UpcastComplex64AndMap2["complex64"] = "complex64";
})(UpcastComplex64AndMap || (UpcastComplex64AndMap = {}));
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
  const seen = new Set();
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
    this.tensorInfo = new WeakMap();
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
var device_util_exports = {};
__export(device_util_exports, {
  isBrowser: () => isBrowser,
  isMobile: () => isMobile,
  mockIsMobile: () => mockIsMobile
});
function _isNavigatorDefined() {
  return typeof navigator !== "undefined" && navigator != null;
}
var isMobileMockValue;
function mockIsMobile(value) {
  isMobileMockValue = value;
}
function isMobile(nav) {
  if (isMobileMockValue !== void 0) {
    return isMobileMockValue;
  }
  if (nav || _isNavigatorDefined()) {
    if (!nav) {
      nav = navigator;
    }
    if (nav.product === "ReactNative") {
      return true;
    }
    const a = nav.userAgent || nav.vendor || (typeof window !== "undefined" ? window.opera : "");
    if (!a) {
      const navAny = nav;
      return navAny.userAgentData && navAny.userAgentData.mobile;
    }
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
  }
  return false;
}
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
if (env().get("IS_NODE")) {
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in avgPool: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in avgPool3d: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
function batchNorm_(x, mean2, variance, offset, scale, varianceEpsilon) {
  if (varianceEpsilon == null) {
    varianceEpsilon = 1e-3;
  }
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean2, "mean", "batchNorm");
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
function batchNorm2d_(x, mean2, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean2, "mean", "batchNorm");
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
function batchNorm3d_(x, mean2, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean2, "mean", "batchNorm");
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
function batchNorm4d_(x, mean2, variance, offset, scale, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean2, "mean", "batchNorm");
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in conv2d: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in conv1d: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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

// src/tfjs-core/src/ops/cumsum.ts
function cumsum_(x, axis = 0, exclusive = false, reverse3 = false) {
  const $x = convertToTensor(x, "x", "cumsum");
  const inputs = { x: $x };
  const attrs = { axis, exclusive, reverse: reverse3 };
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
var log4 = op({ log_ });

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
    const value = sub(cast(shifted, "float32"), log4(sum2(exp(shifted), axis, keepDims)));
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
  const d = log4(c);
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in maxPool: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in maxPool3d: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
function pool_(input, windowShape, poolingType, pad2, dilations, strides) {
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
  const forwardOp = poolingType === "avg" ? () => avgPool(convertedX, windowShape, strides, convertedPad) : () => maxPool(convertedX, windowShape, strides, convertedPad);
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
function pow_(base2, exp4) {
  let $base = convertToTensor(base2, "base", "pow");
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
var seedrandom = __toModule(require_seedrandom2());
var MPRandGauss = class {
  constructor(mean2, stdDeviation, dtype, truncated, seed) {
    this.mean = mean2;
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
function randomNormal_(shape, mean2 = 0, stdDev = 1, dtype, seed) {
  if (dtype != null && dtype === "bool") {
    throw new Error(`Unsupported data type ${dtype}`);
  }
  const randGauss = new MPRandGauss(mean2, stdDev, dtype, false, seed);
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
function range(start, stop, step3 = 1, dtype = "float32") {
  if (step3 === 0) {
    throw new Error("Cannot have a step of zero");
  }
  const attrs = { start, stop, step: step3, dtype };
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
function truncatedNormal_(shape, mean2 = 0, stdDev = 1, dtype, seed) {
  if (dtype != null && dtype === "bool") {
    throw new Error(`Unsupported data type $ { dtype }`);
  }
  const randGauss = new MPRandGauss(mean2, stdDev, dtype, true, seed);
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
function movingAverage_(v, x, decay, step3, zeroDebias = true) {
  const $v = convertToTensor(v, "v", "movingAverage");
  const $x = convertToTensor(x, "x", "movingAverage");
  const $decay = convertToTensor(decay, "decay", "movingAverage");
  assertTypesMatch($v, $x);
  assert(arraysEqual($v.shape, $x.shape), () => "Shape mismatch in v and x");
  const one = scalar(1);
  const oneMinusDecay = sub(one, $decay);
  let update = mul(sub($x, $v), oneMinusDecay);
  if (zeroDebias) {
    assert(step3 != null, () => "When using zeroDebias: true, step is required.");
    const $step = convertToTensor(step3, "step", "movingAverage");
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in fused conv2d: pad must be an integer when using, dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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
  if (dimRoundingMode != null) {
    assert(isInt(pad2), () => `Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`);
  }
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

// src/tfjs-core/src/ops/loss_ops_utils.ts
var Reduction;
(function(Reduction2) {
  Reduction2[Reduction2["NONE"] = 0] = "NONE";
  Reduction2[Reduction2["MEAN"] = 1] = "MEAN";
  Reduction2[Reduction2["SUM"] = 2] = "SUM";
  Reduction2[Reduction2["SUM_BY_NONZERO_WEIGHTS"] = 3] = "SUM_BY_NONZERO_WEIGHTS";
})(Reduction || (Reduction = {}));

// src/tfjs-core/src/ops/losses/compute_weighted_loss.ts
function computeWeightedLoss_(losses, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  const $losses = convertToTensor(losses, "losses", "computeWeightedLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "computeWeightedLoss");
  }
  const weightedLoss = $weights == null ? $losses : mul($losses, $weights);
  if (reduction === Reduction.NONE) {
    return weightedLoss;
  }
  if (reduction === Reduction.SUM) {
    return sum2(weightedLoss);
  }
  if (reduction === Reduction.MEAN) {
    if ($weights == null) {
      return mean(weightedLoss);
    } else {
      const broadcastFactor = $losses.size / $weights.size;
      const result = div(sum2(weightedLoss), sum2($weights));
      return broadcastFactor > 1 ? div(result, scalar(broadcastFactor)) : result;
    }
  }
  if (reduction === Reduction.SUM_BY_NONZERO_WEIGHTS) {
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
function absoluteDifference_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
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
function cosineDistance_(labels, predictions, axis, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
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
function hingeLoss_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
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
function huberLoss_(labels, predictions, weights, delta = 1, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
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
function logLoss_(labels, predictions, weights, epsilon = 1e-7, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
  const $labels = convertToTensor(labels, "labels", "logLoss");
  const $predictions = convertToTensor(predictions, "predictions", "logLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "logLoss");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in logLoss: ");
  const one = scalar(1);
  const epsilonScalar = scalar(epsilon);
  const l1 = neg(mul($labels, log4(add2($predictions, epsilonScalar))));
  const l2 = mul(sub(one, $labels), log4(add2(sub(one, $predictions), epsilonScalar)));
  const losses = sub(l1, l2);
  return computeWeightedLoss(losses, $weights, reduction);
}
var logLoss = op({ logLoss_ });

// src/tfjs-core/src/ops/losses/mean_squared_error.ts
function meanSquaredError_(labels, predictions, weights, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
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
function sigmoidCrossEntropy_(multiClassLabels, logits, weights, labelSmoothing = 0, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
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
function softmaxCrossEntropy_(onehotLabels, logits, weights, labelSmoothing = 0, reduction = Reduction.SUM_BY_NONZERO_WEIGHTS) {
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
  const $indices = convertToTensor(indices, "indices", "sparseFillEmptyRows");
  const $values = convertToTensor(values, "values", "sparseFillEmptyRows");
  const $denseShape = convertToTensor(denseShape, "denseShape", "sparseFillEmptyRows");
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
  const $inputIndices = convertToTensor(inputIndices, "inputIndices", "sparseReshape");
  const $inputShape = convertToTensor(inputShape, "inputShape", "sparseReshape");
  const $newShape = convertToTensor(newShape, "newShape", "sparseReshape");
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
  const $indices = convertToTensor(indices, "indices", "sparseSegmentMean");
  const $segmentIds = convertToTensor(segmentIds, "segmentIds", "sparseSegmentMean");
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
  const $indices = convertToTensor(indices, "indices", "sparseSegmentSum");
  const $segmentIds = convertToTensor(segmentIds, "segmentIds", "sparseSegmentSum");
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

// src/tfjs-backend-webgl/src/webgl_util.ts
var webgl_util_exports = {};
__export(webgl_util_exports, {
  assertNotComplex: () => assertNotComplex,
  bindCanvasToFramebuffer: () => bindCanvasToFramebuffer,
  bindColorTextureToFramebuffer: () => bindColorTextureToFramebuffer,
  bindTextureToProgramUniformSampler: () => bindTextureToProgramUniformSampler,
  bindTextureUnit: () => bindTextureUnit,
  bindVertexBufferToProgramAttribute: () => bindVertexBufferToProgramAttribute,
  callAndCheck: () => callAndCheck,
  canBeRepresented: () => canBeRepresented,
  createFragmentShader: () => createFragmentShader,
  createFramebuffer: () => createFramebuffer,
  createProgram: () => createProgram,
  createStaticIndexBuffer: () => createStaticIndexBuffer,
  createStaticVertexBuffer: () => createStaticVertexBuffer,
  createTexture: () => createTexture,
  createVertexShader: () => createVertexShader,
  getBatchDim: () => getBatchDim,
  getExtensionOrThrow: () => getExtensionOrThrow,
  getFramebufferErrorMessage: () => getFramebufferErrorMessage,
  getMaxTexturesInShader: () => getMaxTexturesInShader,
  getNumChannels: () => getNumChannels,
  getProgramUniformLocation: () => getProgramUniformLocation,
  getProgramUniformLocationOrThrow: () => getProgramUniformLocationOrThrow,
  getRowsCols: () => getRowsCols,
  getShapeAs3D: () => getShapeAs3D,
  getTextureShapeFromLogicalShape: () => getTextureShapeFromLogicalShape,
  getWebGLDisjointQueryTimerVersion: () => getWebGLDisjointQueryTimerVersion,
  getWebGLErrorMessage: () => getWebGLErrorMessage,
  getWebGLMaxTextureSize: () => getWebGLMaxTextureSize,
  hasExtension: () => hasExtension,
  isCapableOfRenderingToFloatTexture: () => isCapableOfRenderingToFloatTexture,
  isDownloadFloatTextureEnabled: () => isDownloadFloatTextureEnabled,
  isReshapeFree: () => isReshapeFree,
  isWebGLFenceEnabled: () => isWebGLFenceEnabled,
  isWebGLVersionEnabled: () => isWebGLVersionEnabled,
  linkProgram: () => linkProgram,
  resetMaxTextureSize: () => resetMaxTextureSize,
  resetMaxTexturesInShader: () => resetMaxTexturesInShader,
  unbindColorTextureFromFramebuffer: () => unbindColorTextureFromFramebuffer,
  unbindTextureUnit: () => unbindTextureUnit,
  validateFramebuffer: () => validateFramebuffer,
  validateProgram: () => validateProgram,
  validateTextureSize: () => validateTextureSize
});

// src/tfjs-backend-webgl/src/canvas_util.ts
var contexts = {};
var WEBGL_ATTRIBUTES = {
  alpha: false,
  antialias: false,
  premultipliedAlpha: false,
  preserveDrawingBuffer: false,
  depth: false,
  stencil: false,
  failIfMajorPerformanceCaveat: true
};
function setWebGLContext(webGLVersion, gl) {
  contexts[webGLVersion] = gl;
}
function getWebGLContext(webGLVersion) {
  if (!(webGLVersion in contexts)) {
    const newCtx = getWebGLRenderingContext(webGLVersion);
    if (newCtx !== null) {
      contexts[webGLVersion] = newCtx;
    } else {
      console.log("Could not get context for WebGL version", webGLVersion);
      return null;
    }
  }
  const gl = contexts[webGLVersion];
  if (gl.isContextLost()) {
    delete contexts[webGLVersion];
    return getWebGLContext(webGLVersion);
  }
  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.STENCIL_TEST);
  gl.disable(gl.BLEND);
  gl.disable(gl.DITHER);
  gl.disable(gl.POLYGON_OFFSET_FILL);
  gl.disable(gl.SAMPLE_COVERAGE);
  gl.enable(gl.SCISSOR_TEST);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  return contexts[webGLVersion];
}
function createCanvas(webGLVersion) {
  if (typeof OffscreenCanvas !== "undefined" && webGLVersion === 2) {
    return new OffscreenCanvas(300, 150);
  } else if (typeof document !== "undefined") {
    return document.createElement("canvas");
  } else {
    throw new Error("Cannot create a canvas in this context");
  }
}
function getWebGLRenderingContext(webGLVersion) {
  if (webGLVersion !== 1 && webGLVersion !== 2) {
    throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
  }
  const canvas = createCanvas(webGLVersion);
  canvas.addEventListener("webglcontextlost", (ev) => {
    ev.preventDefault();
    delete contexts[webGLVersion];
  }, false);
  if (webGLVersion === 1) {
    return canvas.getContext("webgl", WEBGL_ATTRIBUTES) || canvas.getContext("experimental-webgl", WEBGL_ATTRIBUTES);
  }
  return canvas.getContext("webgl2", WEBGL_ATTRIBUTES);
}

// src/tfjs-backend-webgl/src/tex_util.ts
var PackingScheme;
(function(PackingScheme2) {
  PackingScheme2[PackingScheme2["DENSE"] = 0] = "DENSE";
  PackingScheme2[PackingScheme2["SHARED_BATCH"] = 1] = "SHARED_BATCH";
})(PackingScheme || (PackingScheme = {}));
var TextureUsage;
(function(TextureUsage2) {
  TextureUsage2[TextureUsage2["RENDER"] = 0] = "RENDER";
  TextureUsage2[TextureUsage2["UPLOAD"] = 1] = "UPLOAD";
  TextureUsage2[TextureUsage2["PIXELS"] = 2] = "PIXELS";
  TextureUsage2[TextureUsage2["DOWNLOAD"] = 3] = "DOWNLOAD";
})(TextureUsage || (TextureUsage = {}));
var PhysicalTextureType;
(function(PhysicalTextureType2) {
  PhysicalTextureType2[PhysicalTextureType2["UNPACKED_FLOAT16"] = 0] = "UNPACKED_FLOAT16";
  PhysicalTextureType2[PhysicalTextureType2["UNPACKED_FLOAT32"] = 1] = "UNPACKED_FLOAT32";
  PhysicalTextureType2[PhysicalTextureType2["PACKED_4X1_UNSIGNED_BYTE"] = 2] = "PACKED_4X1_UNSIGNED_BYTE";
  PhysicalTextureType2[PhysicalTextureType2["PACKED_2X2_FLOAT32"] = 3] = "PACKED_2X2_FLOAT32";
  PhysicalTextureType2[PhysicalTextureType2["PACKED_2X2_FLOAT16"] = 4] = "PACKED_2X2_FLOAT16";
})(PhysicalTextureType || (PhysicalTextureType = {}));
function getUnpackedMatrixTextureShapeWidthHeight(rows, columns) {
  return [columns, rows];
}
function getUnpackedArraySizeFromMatrixSize(matrixSize, channelsPerTexture) {
  return matrixSize * channelsPerTexture;
}
function getDenseTexShape(shape) {
  const size = util_exports.sizeFromShape(shape);
  const texelsNeeded = Math.ceil(size / 4);
  return util_exports.sizeToSquarishShape(texelsNeeded);
}
function getPackedMatrixTextureShapeWidthHeight(rows, columns) {
  return [
    Math.max(1, Math.ceil(columns / 2)),
    Math.max(1, Math.ceil(rows / 2))
  ];
}
function getPackedRGBAArraySizeFromMatrixShape(rows, columns) {
  const [w, h] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
  return w * h * 4;
}
function getTextureConfig(gl, textureHalfFloatExtension) {
  const glany = gl;
  let internalFormatFloat;
  let internalFormatHalfFloat;
  let internalFormatPackedHalfFloat;
  let internalFormatPackedFloat;
  let textureFormatFloat;
  let downloadTextureFormat;
  let downloadUnpackNumChannels;
  let defaultNumChannels;
  let textureTypeHalfFloat;
  let textureTypeFloat;
  if (env().getNumber("WEBGL_VERSION") === 2) {
    internalFormatFloat = glany.R32F;
    internalFormatHalfFloat = glany.R16F;
    internalFormatPackedHalfFloat = glany.RGBA16F;
    internalFormatPackedFloat = glany.RGBA32F;
    textureFormatFloat = glany.RED;
    downloadUnpackNumChannels = 4;
    defaultNumChannels = 1;
    textureTypeHalfFloat = glany.HALF_FLOAT;
    textureTypeFloat = glany.FLOAT;
  } else {
    internalFormatFloat = gl.RGBA;
    internalFormatHalfFloat = gl.RGBA;
    internalFormatPackedHalfFloat = gl.RGBA;
    internalFormatPackedFloat = glany.RGBA;
    textureFormatFloat = gl.RGBA;
    downloadUnpackNumChannels = 4;
    defaultNumChannels = 4;
    textureTypeHalfFloat = textureHalfFloatExtension != null ? textureHalfFloatExtension.HALF_FLOAT_OES : null;
    textureTypeFloat = gl.FLOAT;
  }
  downloadTextureFormat = gl.RGBA;
  return {
    internalFormatFloat,
    internalFormatHalfFloat,
    internalFormatPackedHalfFloat,
    internalFormatPackedFloat,
    textureFormatFloat,
    downloadTextureFormat,
    downloadUnpackNumChannels,
    defaultNumChannels,
    textureTypeHalfFloat,
    textureTypeFloat
  };
}

// src/tfjs-backend-webgl/src/webgl_util.ts
function callAndCheck(gl, func) {
  const returnValue = func();
  if (env().getBool("DEBUG")) {
    checkWebGLError(gl);
  }
  return returnValue;
}
function checkWebGLError(gl) {
  const error = gl.getError();
  if (error !== gl.NO_ERROR) {
    throw new Error("WebGL Error: " + getWebGLErrorMessage(gl, error));
  }
}
var MIN_FLOAT16 = 596e-10;
var MAX_FLOAT16 = 65504;
function canBeRepresented(num) {
  if (env().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || num === 0 || MIN_FLOAT16 < Math.abs(num) && Math.abs(num) < MAX_FLOAT16) {
    return true;
  }
  return false;
}
function getWebGLErrorMessage(gl, status) {
  switch (status) {
    case gl.NO_ERROR:
      return "NO_ERROR";
    case gl.INVALID_ENUM:
      return "INVALID_ENUM";
    case gl.INVALID_VALUE:
      return "INVALID_VALUE";
    case gl.INVALID_OPERATION:
      return "INVALID_OPERATION";
    case gl.INVALID_FRAMEBUFFER_OPERATION:
      return "INVALID_FRAMEBUFFER_OPERATION";
    case gl.OUT_OF_MEMORY:
      return "OUT_OF_MEMORY";
    case gl.CONTEXT_LOST_WEBGL:
      return "CONTEXT_LOST_WEBGL";
    default:
      return `Unknown error code ${status}`;
  }
}
function getExtensionOrThrow(gl, extensionName) {
  return throwIfNull(gl, () => gl.getExtension(extensionName), 'Extension "' + extensionName + '" not supported on this browser.');
}
function createVertexShader(gl, vertexShaderSource) {
  const vertexShader = throwIfNull(gl, () => gl.createShader(gl.VERTEX_SHADER), "Unable to create vertex WebGLShader.");
  callAndCheck(gl, () => gl.shaderSource(vertexShader, vertexShaderSource));
  callAndCheck(gl, () => gl.compileShader(vertexShader));
  if (gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS) === false) {
    console.log(gl.getShaderInfoLog(vertexShader));
    throw new Error("Failed to compile vertex shader.");
  }
  return vertexShader;
}
function createFragmentShader(gl, fragmentShaderSource) {
  const fragmentShader = throwIfNull(gl, () => gl.createShader(gl.FRAGMENT_SHADER), "Unable to create fragment WebGLShader.");
  callAndCheck(gl, () => gl.shaderSource(fragmentShader, fragmentShaderSource));
  callAndCheck(gl, () => gl.compileShader(fragmentShader));
  if (gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) === false) {
    logShaderSourceAndInfoLog(fragmentShaderSource, gl.getShaderInfoLog(fragmentShader));
    throw new Error("Failed to compile fragment shader.");
  }
  return fragmentShader;
}
var lineNumberRegex = /ERROR: [0-9]+:([0-9]+):/g;
function logShaderSourceAndInfoLog(shaderSource, shaderInfoLog) {
  const lineNumberRegexResult = lineNumberRegex.exec(shaderInfoLog);
  if (lineNumberRegexResult == null) {
    console.log(`Couldn't parse line number in error: ${shaderInfoLog}`);
    console.log(shaderSource);
    return;
  }
  const lineNumber = +lineNumberRegexResult[1];
  const shaderLines = shaderSource.split("\n");
  const pad2 = shaderLines.length.toString().length + 2;
  const linesWithLineNumbers = shaderLines.map((line, lineNumber2) => util_exports.rightPad((lineNumber2 + 1).toString(), pad2) + line);
  let maxLineLength = 0;
  for (let i = 0; i < linesWithLineNumbers.length; i++) {
    maxLineLength = Math.max(linesWithLineNumbers[i].length, maxLineLength);
  }
  const beforeErrorLines = linesWithLineNumbers.slice(0, lineNumber - 1);
  const errorLine = linesWithLineNumbers.slice(lineNumber - 1, lineNumber);
  const afterErrorLines = linesWithLineNumbers.slice(lineNumber);
  console.log(beforeErrorLines.join("\n"));
  console.log(shaderInfoLog.split("\n")[0]);
  console.log(`%c ${util_exports.rightPad(errorLine[0], maxLineLength)}`, "border:1px solid red; background-color:#e3d2d2; color:#a61717");
  console.log(afterErrorLines.join("\n"));
}
function createProgram(gl) {
  return throwIfNull(gl, () => gl.createProgram(), "Unable to create WebGLProgram.");
}
function linkProgram(gl, program) {
  callAndCheck(gl, () => gl.linkProgram(program));
  if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
    console.log(gl.getProgramInfoLog(program));
    throw new Error("Failed to link vertex and fragment shaders.");
  }
}
function validateProgram(gl, program) {
  callAndCheck(gl, () => gl.validateProgram(program));
  if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
    console.log(gl.getProgramInfoLog(program));
    throw new Error("Shader program validation failed.");
  }
}
function createStaticVertexBuffer(gl, data) {
  const buffer2 = throwIfNull(gl, () => gl.createBuffer(), "Unable to create WebGLBuffer");
  callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, buffer2));
  callAndCheck(gl, () => gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW));
  return buffer2;
}
function createStaticIndexBuffer(gl, data) {
  const buffer2 = throwIfNull(gl, () => gl.createBuffer(), "Unable to create WebGLBuffer");
  callAndCheck(gl, () => gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer2));
  callAndCheck(gl, () => gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW));
  return buffer2;
}
function getNumChannels() {
  if (env().getNumber("WEBGL_VERSION") === 2) {
    return 1;
  }
  return 4;
}
function createTexture(gl) {
  return throwIfNull(gl, () => gl.createTexture(), "Unable to create WebGLTexture.");
}
function validateTextureSize(width, height) {
  const maxTextureSize = env().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (width <= 0 || height <= 0) {
    const requested = `[${width}x${height}]`;
    throw new Error("Requested texture size " + requested + " is invalid.");
  }
  if (width > maxTextureSize || height > maxTextureSize) {
    const requested = `[${width}x${height}]`;
    const max3 = `[${maxTextureSize}x${maxTextureSize}]`;
    throw new Error("Requested texture size " + requested + " greater than WebGL maximum on this browser / GPU " + max3 + ".");
  }
}
function createFramebuffer(gl) {
  return throwIfNull(gl, () => gl.createFramebuffer(), "Unable to create WebGLFramebuffer.");
}
function bindVertexBufferToProgramAttribute(gl, program, attribute, buffer2, arrayEntriesPerItem, itemStrideInBytes, itemOffsetInBytes) {
  const loc = gl.getAttribLocation(program, attribute);
  if (loc === -1) {
    return false;
  }
  callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, buffer2));
  callAndCheck(gl, () => gl.vertexAttribPointer(loc, arrayEntriesPerItem, gl.FLOAT, false, itemStrideInBytes, itemOffsetInBytes));
  callAndCheck(gl, () => gl.enableVertexAttribArray(loc));
  return true;
}
function bindTextureUnit(gl, texture, textureUnit) {
  validateTextureUnit(gl, textureUnit);
  callAndCheck(gl, () => gl.activeTexture(gl.TEXTURE0 + textureUnit));
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
}
function unbindTextureUnit(gl, textureUnit) {
  validateTextureUnit(gl, textureUnit);
  callAndCheck(gl, () => gl.activeTexture(gl.TEXTURE0 + textureUnit));
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function getProgramUniformLocationOrThrow(gl, program, uniformName) {
  return throwIfNull(gl, () => gl.getUniformLocation(program, uniformName), 'uniform "' + uniformName + '" not present in program.');
}
function getProgramUniformLocation(gl, program, uniformName) {
  return gl.getUniformLocation(program, uniformName);
}
function bindTextureToProgramUniformSampler(gl, texture, uniformSamplerLocation, textureUnit) {
  callAndCheck(gl, () => bindTextureUnit(gl, texture, textureUnit));
  callAndCheck(gl, () => gl.uniform1i(uniformSamplerLocation, textureUnit));
}
function bindCanvasToFramebuffer(gl) {
  callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, null));
  callAndCheck(gl, () => gl.viewport(0, 0, gl.canvas.width, gl.canvas.height));
  callAndCheck(gl, () => gl.scissor(0, 0, gl.canvas.width, gl.canvas.height));
}
function bindColorTextureToFramebuffer(gl, texture, framebuffer) {
  callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer));
  callAndCheck(gl, () => gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0));
}
function unbindColorTextureFromFramebuffer(gl, framebuffer) {
  callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer));
  callAndCheck(gl, () => gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, null, 0));
}
function validateFramebuffer(gl) {
  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status !== gl.FRAMEBUFFER_COMPLETE) {
    throw new Error("Error binding framebuffer: " + getFramebufferErrorMessage(gl, status));
  }
}
function getFramebufferErrorMessage(gl, status) {
  switch (status) {
    case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case gl.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    default:
      return `unknown error ${status}`;
  }
}
function throwIfNull(gl, returnTOrNull, failureMessage) {
  const tOrNull = callAndCheck(gl, () => returnTOrNull());
  if (tOrNull == null) {
    throw new Error(failureMessage);
  }
  return tOrNull;
}
function validateTextureUnit(gl, textureUnit) {
  const maxTextureUnit = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1;
  const glTextureUnit = textureUnit + gl.TEXTURE0;
  if (glTextureUnit < gl.TEXTURE0 || glTextureUnit > maxTextureUnit) {
    const textureUnitRange = `[gl.TEXTURE0, gl.TEXTURE${maxTextureUnit}]`;
    throw new Error(`textureUnit must be in ${textureUnitRange}.`);
  }
}
function getBatchDim(shape, dimsToSkip = 2) {
  return util_exports.sizeFromShape(shape.slice(0, shape.length - dimsToSkip));
}
function getRowsCols(shape) {
  if (shape.length === 0) {
    throw Error("Cannot get rows and columns of an empty shape array.");
  }
  return [
    shape.length > 1 ? shape[shape.length - 2] : 1,
    shape[shape.length - 1]
  ];
}
function getShapeAs3D(shape) {
  let shapeAs3D = [1, 1, 1];
  const isScalar = shape.length === 0 || shape.length === 1 && shape[0] === 1;
  if (!isScalar) {
    shapeAs3D = [getBatchDim(shape), ...getRowsCols(shape)];
  }
  return shapeAs3D;
}
function getTextureShapeFromLogicalShape(logShape, isPacked = false) {
  let maxTexSize = env().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (isPacked) {
    maxTexSize = maxTexSize * 2;
    logShape = logShape.map((d, i) => i >= logShape.length - 2 ? util_exports.nearestLargerEven(logShape[i]) : logShape[i]);
    if (logShape.length === 1) {
      logShape = [2, logShape[0]];
    }
  }
  if (logShape.length !== 2) {
    const squeezeResult = util_exports.squeezeShape(logShape);
    logShape = squeezeResult.newShape;
  }
  let size = util_exports.sizeFromShape(logShape);
  if (logShape.length <= 1 && size <= maxTexSize) {
    return [1, size];
  } else if (logShape.length === 2 && logShape[0] <= maxTexSize && logShape[1] <= maxTexSize) {
    return logShape;
  } else if (logShape.length === 3 && logShape[0] * logShape[1] <= maxTexSize && logShape[2] <= maxTexSize) {
    return [logShape[0] * logShape[1], logShape[2]];
  } else if (logShape.length === 3 && logShape[0] <= maxTexSize && logShape[1] * logShape[2] <= maxTexSize) {
    return [logShape[0], logShape[1] * logShape[2]];
  } else if (logShape.length === 4 && logShape[0] * logShape[1] * logShape[2] <= maxTexSize && logShape[3] <= maxTexSize) {
    return [logShape[0] * logShape[1] * logShape[2], logShape[3]];
  } else if (logShape.length === 4 && logShape[0] <= maxTexSize && logShape[1] * logShape[2] * logShape[3] <= maxTexSize) {
    return [logShape[0], logShape[1] * logShape[2] * logShape[3]];
  } else {
    if (isPacked) {
      const batchDim = getBatchDim(logShape);
      let rows = 2, cols = 2;
      if (logShape.length) {
        [rows, cols] = getRowsCols(logShape);
      }
      size = batchDim * (rows / 2) * (cols / 2);
      return util_exports.sizeToSquarishShape(size).map((d) => d * 2);
    }
    return util_exports.sizeToSquarishShape(size);
  }
}
function isEven(n) {
  return n % 2 === 0;
}
function isReshapeFree(shape1, shape2) {
  shape1 = shape1.slice(-2);
  shape2 = shape2.slice(-2);
  if (util_exports.arraysEqual(shape1, shape2)) {
    return true;
  }
  if (!shape1.length || !shape2.length) {
    return true;
  }
  if (shape1[0] === 0 || shape1[1] === 0 || shape2[0] === 0 || shape2[1] === 0) {
    return true;
  }
  if (shape1.length !== shape2.length) {
    const shape1Cols = shape1.slice(-1)[0];
    const shape2Cols = shape2.slice(-1)[0];
    if (shape1Cols === shape2Cols) {
      return true;
    }
    if (isEven(shape1Cols) && isEven(shape2Cols) && (shape1[0] === 1 || shape2[0] === 1)) {
      return true;
    }
  }
  return shape1[1] === shape2[1] && isEven(shape1[0]) && isEven(shape2[0]);
}
var MAX_TEXTURE_SIZE;
var MAX_TEXTURES_IN_SHADER;
function getWebGLMaxTextureSize(webGLVersion) {
  if (MAX_TEXTURE_SIZE == null) {
    const gl = getWebGLContext(webGLVersion);
    MAX_TEXTURE_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  }
  return MAX_TEXTURE_SIZE;
}
function resetMaxTextureSize() {
  MAX_TEXTURE_SIZE = null;
}
function resetMaxTexturesInShader() {
  MAX_TEXTURES_IN_SHADER = null;
}
function getMaxTexturesInShader(webGLVersion) {
  if (MAX_TEXTURES_IN_SHADER == null) {
    const gl = getWebGLContext(webGLVersion);
    MAX_TEXTURES_IN_SHADER = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
  }
  return Math.min(16, MAX_TEXTURES_IN_SHADER);
}
function getWebGLDisjointQueryTimerVersion(webGLVersion) {
  if (webGLVersion === 0) {
    return 0;
  }
  let queryTimerVersion;
  const gl = getWebGLContext(webGLVersion);
  if (hasExtension(gl, "EXT_disjoint_timer_query_webgl2") && webGLVersion === 2) {
    queryTimerVersion = 2;
  } else if (hasExtension(gl, "EXT_disjoint_timer_query")) {
    queryTimerVersion = 1;
  } else {
    queryTimerVersion = 0;
  }
  return queryTimerVersion;
}
function hasExtension(gl, extensionName) {
  const ext = gl.getExtension(extensionName);
  return ext != null;
}
function isWebGLVersionEnabled(webGLVersion) {
  try {
    const gl = getWebGLContext(webGLVersion);
    if (gl != null) {
      return true;
    }
  } catch (e) {
    console.log("Error when getting WebGL context: ", e);
    return false;
  }
  return false;
}
function isCapableOfRenderingToFloatTexture(webGLVersion) {
  if (webGLVersion === 0) {
    return false;
  }
  const gl = getWebGLContext(webGLVersion);
  if (webGLVersion === 1) {
    if (!hasExtension(gl, "OES_texture_float")) {
      return false;
    }
  } else {
    if (!hasExtension(gl, "EXT_color_buffer_float")) {
      return false;
    }
  }
  const isFrameBufferComplete = createFloatTextureAndBindToFramebuffer(gl);
  return isFrameBufferComplete;
}
function isDownloadFloatTextureEnabled(webGLVersion) {
  if (webGLVersion === 0) {
    return false;
  }
  const gl = getWebGLContext(webGLVersion);
  if (webGLVersion === 1) {
    if (!hasExtension(gl, "OES_texture_float")) {
      return false;
    }
    if (!hasExtension(gl, "WEBGL_color_buffer_float")) {
      return false;
    }
  } else {
    if (hasExtension(gl, "EXT_color_buffer_float")) {
      return createFloatTextureAndBindToFramebuffer(gl);
    }
    const COLOR_BUFFER_HALF_FLOAT = "EXT_color_buffer_half_float";
    if (hasExtension(gl, COLOR_BUFFER_HALF_FLOAT)) {
      const textureHalfFloatExtension = gl.getExtension(COLOR_BUFFER_HALF_FLOAT);
      return createHalfFloatTextureAndBindToFramebuffer(gl, textureHalfFloatExtension);
    }
    return false;
  }
  const isFrameBufferComplete = createFloatTextureAndBindToFramebuffer(gl);
  return isFrameBufferComplete;
}
function createFloatTextureAndBindToFramebuffer(gl) {
  const texConfig = getTextureConfig(gl);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  const width = 1;
  const height = 1;
  gl.texImage2D(gl.TEXTURE_2D, 0, texConfig.internalFormatFloat, width, height, 0, texConfig.textureFormatFloat, texConfig.textureTypeFloat, null);
  const frameBuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  const isFrameBufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
  gl.bindTexture(gl.TEXTURE_2D, null);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.deleteTexture(texture);
  gl.deleteFramebuffer(frameBuffer);
  return isFrameBufferComplete;
}
function createHalfFloatTextureAndBindToFramebuffer(gl, textureHalfFloatExtension) {
  const texConfig = getTextureConfig(gl, textureHalfFloatExtension);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  const width = 1;
  const height = 1;
  gl.texImage2D(gl.TEXTURE_2D, 0, texConfig.internalFormatHalfFloat, width, height, 0, texConfig.textureFormatFloat, texConfig.textureTypeHalfFloat, null);
  const frameBuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  const isFrameBufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
  gl.bindTexture(gl.TEXTURE_2D, null);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.deleteTexture(texture);
  gl.deleteFramebuffer(frameBuffer);
  return isFrameBufferComplete;
}
function isWebGLFenceEnabled(webGLVersion) {
  if (webGLVersion !== 2) {
    return false;
  }
  const gl = getWebGLContext(webGLVersion);
  const isEnabled = gl.fenceSync != null;
  return isEnabled;
}
function assertNotComplex(tensor2, opName) {
  if (!Array.isArray(tensor2)) {
    tensor2 = [tensor2];
  }
  tensor2.forEach((t) => {
    if (t != null) {
      util_exports.assert(t.dtype !== "complex64", () => `${opName} does not support complex64 tensors in the WebGL backend.`);
    }
  });
}

// src/tfjs-backend-webgl/src/flags_webgl.ts
var ENV3 = env();
ENV3.registerFlag("HAS_WEBGL", () => ENV3.getNumber("WEBGL_VERSION") > 0);
ENV3.registerFlag("WEBGL_VERSION", () => {
  if (isWebGLVersionEnabled(2)) {
    return 2;
  } else if (isWebGLVersionEnabled(1)) {
    return 1;
  }
  return 0;
});
ENV3.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS", () => false);
ENV3.registerFlag("WEBGL_BUFFER_SUPPORTED", () => ENV3.get("WEBGL_VERSION") === 2);
ENV3.registerFlag("WEBGL_CPU_FORWARD", () => true);
ENV3.registerFlag("WEBGL_FORCE_F16_TEXTURES", () => false);
ENV3.registerFlag("WEBGL_PACK", () => ENV3.getBool("HAS_WEBGL"));
ENV3.registerFlag("WEBGL_PACK_NORMALIZATION", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_PACK_CLIP", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_PACK_DEPTHWISECONV", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_PACK_REDUCE", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_LAZILY_UNPACK", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_CONV_IM2COL", () => ENV3.getBool("WEBGL_PACK"));
ENV3.registerFlag("WEBGL_MAX_TEXTURE_SIZE", () => getWebGLMaxTextureSize(ENV3.getNumber("WEBGL_VERSION")));
ENV3.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", () => getMaxTexturesInShader(ENV3.getNumber("WEBGL_VERSION")));
ENV3.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", () => {
  const webGLVersion = ENV3.getNumber("WEBGL_VERSION");
  if (webGLVersion === 0) {
    return 0;
  }
  return getWebGLDisjointQueryTimerVersion(webGLVersion);
});
ENV3.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", () => ENV3.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && !device_util_exports.isMobile());
ENV3.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", () => isCapableOfRenderingToFloatTexture(ENV3.getNumber("WEBGL_VERSION")));
ENV3.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", () => {
  return ENV3.getBool("WEBGL_FORCE_F16_TEXTURES") ? false : ENV3.getBool("WEBGL_RENDER_FLOAT32_CAPABLE");
});
ENV3.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", () => isDownloadFloatTextureEnabled(ENV3.getNumber("WEBGL_VERSION")));
ENV3.registerFlag("WEBGL_FENCE_API_ENABLED", () => isWebGLFenceEnabled(ENV3.getNumber("WEBGL_VERSION")));
ENV3.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", () => {
  const useUniforms = ENV3.getBool("WEBGL_RENDER_FLOAT32_ENABLED");
  return useUniforms ? 4 : 0;
});
ENV3.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD", () => {
  return -1;
}, (threshold2) => {
  if (threshold2 < 0 && threshold2 !== -1) {
    throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${threshold2}.`);
  }
});
ENV3.registerFlag("WEBGL_FLUSH_THRESHOLD", () => {
  return device_util_exports.isMobile() ? 1 : -1;
}, (threshold2) => {
  if (threshold2 < 0 && threshold2 !== -1) {
    throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${threshold2}.`);
  }
});
ENV3.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD", () => 128);
ENV3.registerFlag("WEBGL_USE_SHAPES_UNIFORMS", () => false);
ENV3.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD", () => 1e5);
ENV3.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD", () => 128);

// src/tfjs-backend-webgl/src/glsl_version.ts
function getGlslDifferences() {
  let version3;
  let attribute;
  let varyingVs;
  let varyingFs;
  let texture2D;
  let output;
  let defineOutput;
  let defineSpecialNaN;
  let defineSpecialInf;
  let defineRound;
  if (env().getNumber("WEBGL_VERSION") === 2) {
    version3 = "#version 300 es";
    attribute = "in";
    varyingVs = "out";
    varyingFs = "in";
    texture2D = "texture";
    output = "outputColor";
    defineOutput = "out vec4 outputColor;";
    defineSpecialNaN = `
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `;
    defineSpecialInf = ``;
    defineRound = `
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `;
  } else {
    version3 = "";
    attribute = "attribute";
    varyingVs = "varying";
    varyingFs = "varying";
    texture2D = "texture2D";
    output = "gl_FragColor";
    defineOutput = "";
    defineSpecialNaN = `
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `;
    defineSpecialInf = `
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `;
    defineRound = `
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `;
  }
  return {
    version: version3,
    attribute,
    varyingVs,
    varyingFs,
    texture2D,
    output,
    defineOutput,
    defineSpecialNaN,
    defineSpecialInf,
    defineRound
  };
}

// src/tfjs-backend-webgl/src/shader_compiler_util.ts
function getLogicalCoordinatesFromFlatIndex(coords2, shape, index = "index") {
  const strides = util_exports.computeStrides(shape);
  return strides.map((stride, i) => {
    const line1 = `int ${coords2[i]} = ${index} / ${stride}`;
    const line2 = i === strides.length - 1 ? `int ${coords2[i + 1]} = ${index} - ${coords2[i]} * ${stride}` : `index -= ${coords2[i]} * ${stride}`;
    return `${line1}; ${line2};`;
  }).join("");
}
function getOutputLogicalCoordinatesFromFlatIndexByUniform(coords2, shape, index = "index") {
  const strides = util_exports.computeStrides(shape);
  return strides.map((_, i) => {
    const line1 = `int ${coords2[i]} = ${index} / outShapeStrides[${i}]`;
    const line2 = i === strides.length - 1 ? `int ${coords2[i + 1]} = ${index} - ${coords2[i]} * outShapeStrides[${i}]` : `index -= ${coords2[i]} * outShapeStrides[${i}]`;
    return `${line1}; ${line2};`;
  }).join("");
}
function symbolicallyComputeStrides(indicesArr, variableName) {
  const numCoords = indicesArr.length;
  const shape = indicesArr.map((d) => `${variableName}[${d}]`);
  const strides = new Array(numCoords - 1);
  strides[numCoords - 2] = shape[numCoords - 1];
  for (let i = numCoords - 3; i >= 0; --i) {
    strides[i] = `(${strides[i + 1]} * ${shape[i + 1]})`;
  }
  return strides;
}
function getLogicalCoordinatesFromFlatIndexByUniform(coords2, variableName, index = "index") {
  const indicesArray = coords2.map((_, i) => i);
  const strides = symbolicallyComputeStrides(indicesArray, variableName);
  return strides.map((_, i) => {
    const line1 = `int ${coords2[i]} = ${index} / ${strides[i]}`;
    const line2 = i === strides.length - 1 ? `int ${coords2[i + 1]} = ${index} - ${coords2[i]} * ${strides[i]}` : `index -= ${coords2[i]} * ${strides[i]}`;
    return `${line1}; ${line2};`;
  }).join("");
}
function getFlatIndexFrom3D(shape) {
  const strides = util_exports.computeStrides(shape).map((d) => d.toString());
  return `
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${strides[0]} + coords.y * ${strides[1]} + coords.z;
  }
`;
}
function getFlatIndexFrom3DOutput() {
  return `
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`;
}
var ENCODE_FLOAT_SNIPPET = `
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;

// src/tfjs-backend-webgl/src/shader_compiler.ts
var { getBroadcastDims: getBroadcastDims2 } = backend_util_exports;
function makeShader(inputsInfo, outputShape, program) {
  const prefixSnippets = [];
  inputsInfo.forEach((x) => {
    const size = util_exports.sizeFromShape(x.shapeInfo.logicalShape);
    if (x.shapeInfo.isUniform) {
      prefixSnippets.push(`uniform float ${x.name}${size > 1 ? `[${size}]` : ""};`);
    } else {
      prefixSnippets.push(`uniform sampler2D ${x.name};`);
      prefixSnippets.push(`uniform int offset${x.name};`);
    }
    if (program.enableShapeUniforms) {
      const { uniformShape } = getUniformInfoFromShape(program.packedInputs, x.shapeInfo.logicalShape, x.shapeInfo.texShape);
      switch (uniformShape.length) {
        case 1:
          prefixSnippets.push(`uniform int ${x.name}Shape;`);
          break;
        case 2:
          prefixSnippets.push(`uniform ivec2 ${x.name}Shape;`);
          break;
        case 3:
          prefixSnippets.push(`uniform ivec3 ${x.name}Shape;`);
          break;
        case 4:
          prefixSnippets.push(`uniform ivec4 ${x.name}Shape;`);
          break;
        default:
          break;
      }
      prefixSnippets.push(`uniform ivec2 ${x.name}TexShape;`);
    }
  });
  if (program.enableShapeUniforms) {
    switch (outputShape.logicalShape.length) {
      case 1:
        prefixSnippets.push(`uniform int outShape;`);
        break;
      case 2:
        prefixSnippets.push(`uniform ivec2 outShape;`);
        prefixSnippets.push(`uniform int outShapeStrides;`);
        break;
      case 3:
        prefixSnippets.push(`uniform ivec3 outShape;`);
        prefixSnippets.push(`uniform ivec2 outShapeStrides;`);
        break;
      case 4:
        prefixSnippets.push(`uniform ivec4 outShape;`);
        prefixSnippets.push(`uniform ivec3 outShapeStrides;`);
        break;
      default:
        break;
    }
    prefixSnippets.push(`uniform ivec2 outTexShape;`);
  }
  if (program.customUniforms) {
    program.customUniforms.forEach((d) => {
      prefixSnippets.push(`uniform ${d.type} ${d.name}${d.arrayIndex ? `[${d.arrayIndex}]` : ""};`);
    });
  }
  const inputPrefixSnippet = prefixSnippets.join("\n");
  const inputSamplingSnippet = inputsInfo.map((x) => getInputSamplingSnippet(x, outputShape, program.packedInputs, program.enableShapeUniforms)).join("\n");
  const outTexShape = outputShape.texShape;
  const glsl = getGlslDifferences();
  const floatTextureSampleSnippet = getFloatTextureSampleSnippet(glsl);
  let outputSamplingSnippet;
  let floatTextureSetOutputSnippet;
  let shaderPrefix = getShaderPrefix(glsl);
  if (outputShape.isPacked) {
    outputSamplingSnippet = getPackedOutputSamplingSnippet(outputShape.logicalShape, outTexShape, program.enableShapeUniforms);
    floatTextureSetOutputSnippet = getFloatTextureSetRGBASnippet(glsl);
  } else {
    outputSamplingSnippet = getOutputSamplingSnippet(outputShape.logicalShape, outTexShape, program.enableShapeUniforms);
    floatTextureSetOutputSnippet = getFloatTextureSetRSnippet(glsl);
  }
  if (program.packedInputs) {
    shaderPrefix += SHADER_PACKED_PREFIX;
  }
  const source = [
    shaderPrefix,
    floatTextureSampleSnippet,
    floatTextureSetOutputSnippet,
    inputPrefixSnippet,
    outputSamplingSnippet,
    inputSamplingSnippet,
    program.userCode
  ].join("\n");
  return source;
}
function getSamplerFromInInfo(inInfo, enableShapeUniforms = false) {
  const shape = inInfo.shapeInfo.logicalShape;
  switch (shape.length) {
    case 0:
      return getSamplerScalar(inInfo, enableShapeUniforms);
    case 1:
      return getSampler1D(inInfo, enableShapeUniforms);
    case 2:
      return getSampler2D(inInfo, enableShapeUniforms);
    case 3:
      return getSampler3D(inInfo, enableShapeUniforms);
    case 4:
      return getSampler4D(inInfo, enableShapeUniforms);
    case 5:
      return getSampler5D(inInfo);
    case 6:
      return getSampler6D(inInfo);
    default:
      throw new Error(`${shape.length}-D input sampling is not yet supported`);
  }
}
function getPackedSamplerFromInInfo(inInfo, enableShapeUniforms) {
  const shape = inInfo.shapeInfo.logicalShape;
  switch (shape.length) {
    case 0:
      return getPackedSamplerScalar(inInfo);
    case 1:
      return getPackedSampler1D(inInfo, enableShapeUniforms);
    case 2:
      return getPackedSampler2D(inInfo, enableShapeUniforms);
    case 3:
      return getPackedSampler3D(inInfo, enableShapeUniforms);
    default:
      return getPackedSamplerND(inInfo, enableShapeUniforms);
  }
}
function getInputSamplingSnippet(inInfo, outShapeInfo, usesPackedTextures = false, enableShapeUniforms) {
  let res = "";
  if (usesPackedTextures) {
    res += getPackedSamplerFromInInfo(inInfo, enableShapeUniforms);
  } else {
    res += getSamplerFromInInfo(inInfo, enableShapeUniforms);
  }
  const inShape = inInfo.shapeInfo.logicalShape;
  const outShape = outShapeInfo.logicalShape;
  if (inShape.length <= outShape.length) {
    if (usesPackedTextures) {
      res += getPackedSamplerAtOutputCoords(inInfo, outShapeInfo);
    } else {
      res += getSamplerAtOutputCoords(inInfo, outShapeInfo);
    }
  }
  return res;
}
function getPackedOutputSamplingSnippet(outShape, outTexShape, enableShapeUniforms) {
  switch (outShape.length) {
    case 0:
      return getOutputScalarCoords();
    case 1:
      return getOutputPacked1DCoords(outShape, outTexShape, enableShapeUniforms);
    case 2:
      return getOutputPacked2DCoords(outShape, outTexShape, enableShapeUniforms);
    case 3:
      return getOutputPacked3DCoords(outShape, outTexShape, enableShapeUniforms);
    default:
      return getOutputPackedNDCoords(outShape, outTexShape, enableShapeUniforms);
  }
}
function getOutputSamplingSnippet(outShape, outTexShape, enableShapeUniforms) {
  switch (outShape.length) {
    case 0:
      return getOutputScalarCoords();
    case 1:
      return getOutput1DCoords(outShape, outTexShape, enableShapeUniforms);
    case 2:
      return getOutput2DCoords(outShape, outTexShape, enableShapeUniforms);
    case 3:
      return getOutput3DCoords(outShape, outTexShape, enableShapeUniforms);
    case 4:
      return getOutput4DCoords(outShape, outTexShape, enableShapeUniforms);
    case 5:
      return getOutput5DCoords(outShape, outTexShape);
    case 6:
      return getOutput6DCoords(outShape, outTexShape);
    default:
      throw new Error(`${outShape.length}-D output sampling is not yet supported`);
  }
}
function getFloatTextureSampleSnippet(glsl) {
  return `
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${glsl.texture2D}(textureSampler, uv).r;
    }
  `;
}
function getFloatTextureSetRSnippet(glsl) {
  return `
    void setOutput(float val) {
      ${glsl.output} = vec4(val, 0, 0, 0);
    }
  `;
}
function getFloatTextureSetRGBASnippet(glsl) {
  return `
    void setOutput(vec4 val) {
      ${glsl.output} = val;
    }
  `;
}
function getShaderPrefix(glsl) {
  const SHADER_PREFIX = `${glsl.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${glsl.varyingFs} vec2 resultUV;
    ${glsl.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${glsl.defineSpecialNaN}
    ${glsl.defineSpecialInf}
    ${glsl.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${SAMPLE_1D_SNIPPET}
    ${SAMPLE_2D_SNIPPET}
    ${SAMPLE_3D_SNIPPET}
  `;
  return SHADER_PREFIX;
}
var SAMPLE_1D_SNIPPET = `
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
var SAMPLE_2D_SNIPPET = `
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
var SAMPLE_3D_SNIPPET = `
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
var SHADER_PACKED_PREFIX = `
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;
function getOutputScalarCoords() {
  return `
    int getOutputCoords() {
      return 0;
    }
  `;
}
function getOutputPacked1DCoords(shape, texShape, enableShapeUniforms) {
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  if (packedTexShape[0] === 1) {
    if (enableShapeUniforms) {
      return `
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `;
    }
    return `
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${packedTexShape[1]}.0);
      }
    `;
  }
  if (packedTexShape[1] === 1) {
    if (enableShapeUniforms) {
      return `
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `;
    }
    return `
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${packedTexShape[0]}.0);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `;
  }
  return `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      return 2 * (resTexRC.x * ${packedTexShape[1]} + resTexRC.y);
    }
  `;
}
function getOutput1DCoords(shape, texShape, enableShapeUniforms) {
  if (texShape[0] === 1) {
    if (enableShapeUniforms) {
      return `
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `;
    }
    return `
      int getOutputCoords() {
        return int(resultUV.x * ${texShape[1]}.0);
      }
    `;
  }
  if (texShape[1] === 1) {
    if (enableShapeUniforms) {
      return `
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `;
    }
    return `
      int getOutputCoords() {
        return int(resultUV.y * ${texShape[0]}.0);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `;
  }
  return `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      return resTexRC.x * ${texShape[1]} + resTexRC.y;
    }
  `;
}
function getOutputPacked3DCoords(shape, texShape, enableShapeUniforms) {
  if (enableShapeUniforms) {
    return `
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;
  }
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  const texelsInLogicalRow = Math.ceil(shape[2] / 2);
  const texelsInBatch = texelsInLogicalRow * Math.ceil(shape[1] / 2);
  return `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;

      int b = index / ${texelsInBatch};
      index -= b * ${texelsInBatch};

      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec3(b, r, c);
    }
  `;
}
function getOutput3DCoords(shape, texShape, enableShapeUniforms) {
  if (enableShapeUniforms) {
    const coordsFromIndexSnippet2 = getOutputLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d"], shape);
    return `
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${coordsFromIndexSnippet2}
    return ivec3(r, c, d);
  }
`;
  }
  const coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(["r", "c", "d"], shape);
  return `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      ${coordsFromIndexSnippet}
      return ivec3(r, c, d);
    }
  `;
}
function getOutputPackedNDCoords(shape, texShape, enableShapeUniforms) {
  if (enableShapeUniforms) {
    return `
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;
  }
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  const texelsInLogicalRow = Math.ceil(shape[shape.length - 1] / 2);
  const texelsInBatch = texelsInLogicalRow * Math.ceil(shape[shape.length - 2] / 2);
  let texelsInBatchN = texelsInBatch;
  let batches = ``;
  let coords2 = "b, r, c";
  for (let b = 2; b < shape.length - 1; b++) {
    texelsInBatchN *= shape[shape.length - b - 1];
    batches = `
      int b${b} = index / ${texelsInBatchN};
      index -= b${b} * ${texelsInBatchN};
    ` + batches;
    coords2 = `b${b}, ` + coords2;
  }
  return `
    ivec${shape.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;

      ${batches}

      int b = index / ${texelsInBatch};
      index -= b * ${texelsInBatch};

      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec${shape.length}(${coords2});
    }
  `;
}
function getOutput4DCoords(shape, texShape, enableShapeUniforms) {
  if (enableShapeUniforms) {
    const coordsFromIndexSnippet2 = getOutputLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d", "d2"], shape);
    return `
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${coordsFromIndexSnippet2}
      return ivec4(r, c, d, d2);
    }
  `;
  }
  const coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(["r", "c", "d", "d2"], shape);
  return `
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      ${coordsFromIndexSnippet}
      return ivec4(r, c, d, d2);
    }
  `;
}
function getOutput5DCoords(shape, texShape) {
  const coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(["r", "c", "d", "d2", "d3"], shape);
  return `
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${texShape[0]},
                             ${texShape[1]}));

      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;

      ${coordsFromIndexSnippet}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `;
}
function getOutput6DCoords(shape, texShape) {
  const coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(["r", "c", "d", "d2", "d3", "d4"], shape);
  return `
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;

      ${coordsFromIndexSnippet}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `;
}
function getOutputPacked2DCoords(shape, texShape, enableShapeUniforms) {
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  if (util_exports.arraysEqual(shape, texShape)) {
    if (enableShapeUniforms) {
      return `
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `;
    }
    return `
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      }
    `;
  }
  const texelsInLogicalRow = Math.ceil(shape[1] / 2);
  if (enableShapeUniforms) {
    return `
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `;
  }
  return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));

      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;
      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec2(r, c);
    }
  `;
}
function getOutput2DCoords(shape, texShape, enableShapeUniforms) {
  if (util_exports.arraysEqual(shape, texShape)) {
    if (enableShapeUniforms) {
      return `
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `;
    }
    return `
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${texShape[0]}, ${texShape[1]}));
      }
    `;
  }
  if (shape[1] === 1) {
    if (enableShapeUniforms) {
      return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `;
    }
    return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${texShape[0]}, ${texShape[1]}));
        int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `;
  }
  if (shape[0] === 1) {
    if (enableShapeUniforms) {
      return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `;
    }
    return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${texShape[0]}, ${texShape[1]}));
        int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `;
  }
  return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      int r = index / ${shape[1]};
      int c = index - r * ${shape[1]};
      return ivec2(r, c);
    }
  `;
}
function getFlatOffsetUniformName(texName) {
  return `offset${texName}`;
}
function getPackedSamplerScalar(inputInfo) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const glsl = getGlslDifferences();
  return `
    vec4 ${funcName}() {
      return ${glsl.texture2D}(${texName}, halfCR);
    }
  `;
}
function getSamplerScalar(inputInfo, enableShapeUniforms) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  if (inputInfo.shapeInfo.isUniform) {
    return `float ${funcName}() {return ${texName};}`;
  }
  const [texNumR, texNumC] = inputInfo.shapeInfo.texShape;
  if (texNumR === 1 && texNumC === 1) {
    return `
      float ${funcName}() {
        return sampleTexture(${texName}, halfCR);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  if (enableShapeUniforms) {
    return `
    float ${funcName}() {
      vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  const [tNumR, tNumC] = inputInfo.shapeInfo.texShape;
  return `
    float ${funcName}() {
      vec2 uv = uvFromFlat(${tNumR}, ${tNumC}, ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getPackedSampler1D(inputInfo, enableShapeUniforms) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const texShape = inputInfo.shapeInfo.texShape;
  const glsl = getGlslDifferences();
  if (enableShapeUniforms) {
    return `
    vec4 ${funcName}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${texName}TexShape[0]) / 2.0), ceil(float(${texName}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
  }
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  return `
    vec4 ${funcName}(int index) {
      vec2 uv = packedUVfrom1D(
        ${packedTexShape[0]}, ${packedTexShape[1]}, index);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler1D(inputInfo, enableShapeUniforms) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int index) {
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const texShape = inputInfo.shapeInfo.texShape;
  const tNumR = texShape[0];
  const tNumC = texShape[1];
  if (tNumC === 1 && tNumR === 1) {
    return `
      float ${funcName}(int index) {
        return sampleTexture(${texName}, halfCR);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  if (tNumC === 1) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${offset}) + 0.5) / float(${texName}TexShape[0]));
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
      float ${funcName}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${offset}) + 0.5) / ${tNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (tNumR === 1) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int index) {
        vec2 uv = vec2((float(index + ${offset}) + 0.5) / float(${texName}TexShape[1]), 0.5);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
      float ${funcName}(int index) {
        vec2 uv = vec2((float(index + ${offset}) + 0.5) / ${tNumC}.0, 0.5);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    float ${funcName}(int index) {
      vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  return `
    float ${funcName}(int index) {
      vec2 uv = uvFromFlat(${tNumR}, ${tNumC}, index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getPackedSampler2D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  const glsl = getGlslDifferences();
  if (texShape != null && util_exports.arraysEqual(shape, texShape)) {
    if (enableShapeUniforms) {
      return `
      vec4 ${funcName}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${texName}TexShape[1], ${texName}TexShape[0]);

        return ${glsl.texture2D}(${texName}, uv);
      }
    `;
    }
    return `
      vec4 ${funcName}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${texNumC}.0, ${texNumR}.0);

        return ${glsl.texture2D}(${texName}, uv);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    vec4 ${funcName}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${texName}TexShape[0]) / 2.0), ceil(float(${texName}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${texName}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
  }
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  const valuesPerRow = Math.ceil(shape[1] / 2);
  return `
    vec4 ${funcName}(int row, int col) {
      vec2 uv = packedUVfrom2D(${valuesPerRow}, ${packedTexShape[0]}, ${packedTexShape[1]}, row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler2D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const texShape = inputInfo.shapeInfo.texShape;
  if (texShape != null && util_exports.arraysEqual(shape, texShape)) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    const texNumR2 = texShape[0];
    const texNumC2 = texShape[1];
    return `
    float ${funcName}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${texNumC2}.0, ${texNumR2}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  const { newShape, keptDims } = util_exports.squeezeShape(shape);
  const squeezedShape = newShape;
  if (squeezedShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
    const params = ["row", "col"];
    return `
      ${getSamplerFromInInfo(newInputInfo, enableShapeUniforms)}
      float ${funcName}(int row, int col) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
  }
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${shape[1]}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  const offset = getFlatOffsetUniformName(texName);
  if (texNumC === 1) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col) {
        float index = dot(vec3(row, col, ${offset}), vec3(${texName}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${texName}TexShape[0]));
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
    float ${funcName}(int row, int col) {
      float index = dot(vec3(row, col, ${offset}), vec3(${shape[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${texNumR}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  if (texNumR === 1) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col) {
        float index = dot(vec3(row, col, ${offset}), vec3(${texName}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${texName}TexShape[1]), 0.5);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
    float ${funcName}(int row, int col) {
      float index = dot(vec3(row, col, ${offset}), vec3(${shape[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${texNumC}.0, 0.5);
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  if (enableShapeUniforms) {
    return `
      float ${funcName}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${texName}Shape[1] + col + ${offset};
        vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], index);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  return `
  float ${funcName}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${shape[1]} + col + ${offset};
    vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
    return sampleTexture(${texName}, uv);
  }
`;
}
function getPackedSampler3D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const texShape = inputInfo.shapeInfo.texShape;
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  if (shape[0] === 1) {
    const squeezedShape = shape.slice(1);
    const keptDims = [1, 2];
    const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
    const params = ["b", "row", "col"];
    return `
        ${getPackedSamplerFromInInfo(newInputInfo, enableShapeUniforms)}
        vec4 ${funcName}(int b, int row, int col) {
          return ${funcName}(${getSqueezedParams(params, keptDims)});
        }
      `;
  }
  const glsl = getGlslDifferences();
  if (enableShapeUniforms) {
    return `
    vec4 ${funcName}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${texName}TexShape[0]) / 2.0), ceil(float(${texName}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${texName}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${texName}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
  }
  const texNumR = packedTexShape[0];
  const texNumC = packedTexShape[1];
  const valuesPerRow = Math.ceil(shape[2] / 2);
  const texelsInBatch = valuesPerRow * Math.ceil(shape[1] / 2);
  return `
    vec4 ${funcName}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${texNumR}, ${texNumC}, ${texelsInBatch}, ${valuesPerRow}, b, row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler3D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const stride0 = shape[1] * shape[2];
  const stride1 = shape[2];
  const { newShape, keptDims } = util_exports.squeezeShape(shape);
  const squeezedShape = newShape;
  if (squeezedShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
    const params = ["row", "col", "depth"];
    return `
        ${getSamplerFromInInfo(newInputInfo, enableShapeUniforms)}
        float ${funcName}(int row, int col, int depth) {
          return ${funcName}(${getSqueezedParams(params, keptDims)});
        }
      `;
  }
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${stride0}, ${stride1}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  const flatOffset = inputInfo.shapeInfo.flatOffset;
  if (texNumC === stride0 && flatOffset == null) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col, int depth) {
        int stride1 = ${texName}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
        float ${funcName}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${stride1}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${texNumC}.0, ${texNumR}.0);
          return sampleTexture(${texName}, uv);
        }
      `;
  }
  if (texNumC === stride1 && flatOffset == null) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${texName}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
    float ${funcName}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${shape[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${texNumC}.0, ${texNumR}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  const offset = getFlatOffsetUniformName(texName);
  if (enableShapeUniforms) {
    return `
    float ${funcName}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${texName}Shape[1] * ${texName}Shape[2];
      int stride1 = ${texName}Shape[2];
      int index = row * ${stride0} + col * ${stride1} + depth + ${offset};
      vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], index);
      return sampleTexture(${texName}, uv);
    }
    `;
  }
  return `
      float ${funcName}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${stride0} + col * ${stride1} + depth + ${offset};
        vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
        return sampleTexture(${texName}, uv);
      }
  `;
}
function getPackedSamplerND(inputInfo, enableShapeUniforms) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const glsl = getGlslDifferences();
  if (enableShapeUniforms) {
    return `
    vec4 ${funcName}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${texName}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${texName}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${texName}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${texName}TexShape[0]) / 2.0), ceil(float(${texName}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${glsl.texture2D}(${texName}, uv);
    }
  `;
  }
  const shape = inputInfo.shapeInfo.logicalShape;
  const rank = shape.length;
  const texShape = inputInfo.shapeInfo.texShape;
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  const texNumR = packedTexShape[0];
  const texNumC = packedTexShape[1];
  const valuesPerRow = Math.ceil(shape[rank - 1] / 2);
  let texelsInBatch = valuesPerRow * Math.ceil(shape[rank - 2] / 2);
  let params = `int b, int row, int col`;
  let index = `b * ${texelsInBatch} + (row / 2) * ${valuesPerRow} + (col / 2)`;
  for (let b = 2; b < rank - 1; b++) {
    params = `int b${b}, ` + params;
    texelsInBatch *= shape[rank - b - 1];
    index = `b${b} * ${texelsInBatch} + ` + index;
  }
  return `
    vec4 ${funcName}(${params}) {
      int index = ${index};
      int texR = index / ${texNumC};
      int texC = index - texR * ${texNumC};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${texNumC}, ${texNumR});
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler4D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const stride2 = shape[3];
  const stride1 = shape[2] * stride2;
  const stride0 = shape[1] * stride1;
  const { newShape, keptDims } = util_exports.squeezeShape(shape);
  if (newShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, newShape);
    const params = ["row", "col", "depth", "depth2"];
    return `
      ${getSamplerFromInInfo(newInputInfo, enableShapeUniforms)}
      float ${funcName}(int row, int col, int depth, int depth2) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
  }
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${stride0}, ${stride1}, ${stride2}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const flatOffset = inputInfo.shapeInfo.flatOffset;
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  const stride2Str = `int stride2 = ${texName}Shape[3];`;
  const stride1Str = `int stride1 = ${texName}Shape[2] * stride2;`;
  const stride0Str = `int stride0 = ${texName}Shape[1] * stride1;`;
  if (texNumC === stride0 && flatOffset == null) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        ${stride2Str}
        ${stride1Str}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${stride1}, ${stride2}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (texNumC === stride2 && flatOffset == null) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${texName}Shape[1] * ${texName}Shape[2], ${texName}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${shape[1] * shape[2]}, ${shape[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  if (enableShapeUniforms) {
    return `
    float ${funcName}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${stride2Str}
      ${stride1Str}
      ${stride0Str}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  return `
    float ${funcName}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} +
          depth * ${stride2} + depth2;
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getSampler5D(inputInfo) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const stride3 = shape[4];
  const stride2 = shape[3] * stride3;
  const stride1 = shape[2] * stride2;
  const stride0 = shape[1] * stride1;
  const { newShape, keptDims } = util_exports.squeezeShape(shape);
  if (newShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, newShape);
    const params = ["row", "col", "depth", "depth2", "depth3"];
    return `
      ${getSamplerFromInInfo(newInputInfo)}
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
  }
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${stride0}, ${stride1}, ${stride2}, ${stride3})) +
          depth3;
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const flatOffset = inputInfo.shapeInfo.flatOffset;
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  if (texNumC === stride0 && flatOffset == null) {
    return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${stride1}, ${stride2}, ${stride3}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (texNumC === stride3 && flatOffset == null) {
    return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${shape[1] * shape[2] * shape[3]},
               ${shape[2] * shape[3]}, ${shape[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  return `
    float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} + depth * ${stride2} +
          depth2 * ${stride3} + depth3 + ${offset};
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getSampler6D(inputInfo) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const { newShape, keptDims } = util_exports.squeezeShape(shape);
  if (newShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, newShape);
    const params = ["row", "col", "depth", "depth2", "depth3", "depth4"];
    return `
      ${getSamplerFromInInfo(newInputInfo)}
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
  }
  const stride4 = shape[5];
  const stride3 = shape[4] * stride4;
  const stride2 = shape[3] * stride3;
  const stride1 = shape[2] * stride2;
  const stride0 = shape[1] * stride1;
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${stride0}, ${stride1}, ${stride2}, ${stride3})) +
          dot(
            vec2(depth3, depth4),
            vec2(${stride4}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const flatOffset = inputInfo.shapeInfo.flatOffset;
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  if (texNumC === stride0 && flatOffset == null) {
    return `
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${stride1}, ${stride2}, ${stride3}, ${stride4})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (texNumC === stride4 && flatOffset == null) {
    return `
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${shape[1] * shape[2] * shape[3] * shape[4]},
               ${shape[2] * shape[3] * shape[4]},
               ${shape[3] * shape[4]},
               ${shape[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  return `
    float ${funcName}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} + depth * ${stride2} +
          depth2 * ${stride3} + depth3 * ${stride4} + depth4 + ${offset};
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getUniformSampler(inputInfo) {
  const texName = inputInfo.name;
  const inSize = util_exports.sizeFromShape(inputInfo.shapeInfo.logicalShape);
  if (inSize < 2) {
    return `return ${texName};`;
  }
  return `
    for (int i = 0; i < ${inSize}; i++) {
      if (i == index) {
        return ${texName}[i];
      }
    }
  `;
}
function getPackedSamplerAtOutputCoords(inputInfo, outShapeInfo) {
  const texName = inputInfo.name;
  const texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
  const funcName = "get" + texFuncSnippet + "AtOutCoords";
  const inRank = inputInfo.shapeInfo.logicalShape.length;
  const outRank = outShapeInfo.logicalShape.length;
  const broadcastDims = getBroadcastDims2(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
  const type = getCoordsDataType(outRank);
  const rankDiff = outRank - inRank;
  let coordsSnippet;
  const fields = ["x", "y", "z", "w", "u", "v"];
  if (inRank === 0) {
    coordsSnippet = "";
  } else if (outRank < 2 && broadcastDims.length >= 1) {
    coordsSnippet = "coords = 0;";
  } else {
    coordsSnippet = broadcastDims.map((d) => `coords.${fields[d + rankDiff]} = 0;`).join("\n");
  }
  let unpackedCoordsSnippet = "";
  if (outRank < 2 && inRank > 0) {
    unpackedCoordsSnippet = "coords";
  } else {
    unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape.map((s, i) => `coords.${fields[i + rankDiff]}`).join(", ");
  }
  let output = `return outputValue;`;
  const inSize = util_exports.sizeFromShape(inputInfo.shapeInfo.logicalShape);
  const isInputScalar = inSize === 1;
  const outSize = util_exports.sizeFromShape(outShapeInfo.logicalShape);
  const isOutputScalar = outSize === 1;
  if (inRank === 1 && !isInputScalar && !isOutputScalar) {
    output = `
      return vec4(outputValue.xy, outputValue.xy);
    `;
  } else if (isInputScalar && !isOutputScalar) {
    if (outRank === 1) {
      output = `
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `;
    } else {
      output = `
        return vec4(outputValue.x);
      `;
    }
  } else if (broadcastDims.length) {
    const rows = inRank - 2;
    const cols = inRank - 1;
    if (broadcastDims.indexOf(rows) > -1 && broadcastDims.indexOf(cols) > -1) {
      output = `return vec4(outputValue.x);`;
    } else if (broadcastDims.indexOf(rows) > -1) {
      output = `return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`;
    } else if (broadcastDims.indexOf(cols) > -1) {
      output = `return vec4(outputValue.xx, outputValue.zz);`;
    }
  }
  return `
    vec4 ${funcName}() {
      ${type} coords = getOutputCoords();
      ${coordsSnippet}
      vec4 outputValue = get${texFuncSnippet}(${unpackedCoordsSnippet});
      ${output}
    }
  `;
}
function getSamplerAtOutputCoords(inputInfo, outShapeInfo) {
  const texName = inputInfo.name;
  const texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
  const funcName = "get" + texFuncSnippet + "AtOutCoords";
  const outTexShape = outShapeInfo.texShape;
  const inTexShape = inputInfo.shapeInfo.texShape;
  const inRank = inputInfo.shapeInfo.logicalShape.length;
  const outRank = outShapeInfo.logicalShape.length;
  if (!inputInfo.shapeInfo.isUniform && inRank === outRank && inputInfo.shapeInfo.flatOffset == null && util_exports.arraysEqual(inTexShape, outTexShape)) {
    return `
      float ${funcName}() {
        return sampleTexture(${texName}, resultUV);
      }
    `;
  }
  const type = getCoordsDataType(outRank);
  const broadcastDims = getBroadcastDims2(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
  const rankDiff = outRank - inRank;
  let coordsSnippet;
  const fields = ["x", "y", "z", "w", "u", "v"];
  if (inRank === 0) {
    coordsSnippet = "";
  } else if (outRank < 2 && broadcastDims.length >= 1) {
    coordsSnippet = "coords = 0;";
  } else {
    coordsSnippet = broadcastDims.map((d) => `coords.${fields[d + rankDiff]} = 0;`).join("\n");
  }
  let unpackedCoordsSnippet = "";
  if (outRank < 2 && inRank > 0) {
    unpackedCoordsSnippet = "coords";
  } else {
    unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape.map((s, i) => `coords.${fields[i + rankDiff]}`).join(", ");
  }
  return `
    float ${funcName}() {
      ${type} coords = getOutputCoords();
      ${coordsSnippet}
      return get${texFuncSnippet}(${unpackedCoordsSnippet});
    }
  `;
}
function getCoordsDataType(rank) {
  if (rank <= 1) {
    return "int";
  } else if (rank === 2) {
    return "ivec2";
  } else if (rank === 3) {
    return "ivec3";
  } else if (rank === 4) {
    return "ivec4";
  } else if (rank === 5) {
    return "ivec5";
  } else if (rank === 6) {
    return "ivec6";
  } else {
    throw Error(`GPU for rank ${rank} is not yet supported`);
  }
}
function getUniformInfoFromShape(isPacked, shape, texShape) {
  const { newShape, keptDims } = util_exports.squeezeShape(shape);
  const rank = shape.length;
  const useSqueezePackedShape = isPacked && rank === 3 && shape[0] === 1;
  const squeezeShape2 = useSqueezePackedShape ? shape.slice(1) : newShape;
  const useSqueezeShape = !isPacked && rank > 1 && !util_exports.arraysEqual(shape, texShape) && newShape.length < rank || useSqueezePackedShape;
  const uniformShape = useSqueezeShape ? squeezeShape2 : shape;
  return { useSqueezeShape, uniformShape, keptDims };
}
function squeezeInputInfo(inInfo, squeezedShape) {
  const newInputInfo = JSON.parse(JSON.stringify(inInfo));
  newInputInfo.shapeInfo.logicalShape = squeezedShape;
  return newInputInfo;
}
function getSqueezedParams(params, keptDims) {
  return keptDims.map((d) => params[d]).join(", ");
}

// src/tfjs-backend-webgl/src/gpgpu_math.ts
function compileProgram(gpgpu, program, inputs, output) {
  const inputInfos = inputs.map((input, i) => {
    const shapeInfo = {
      logicalShape: input.shape,
      texShape: input.isUniform ? null : input.texData.texShape,
      isUniform: input.isUniform,
      isPacked: input.isUniform ? false : input.texData.isPacked,
      flatOffset: null
    };
    if (input.texData != null && input.texData.slice != null && input.texData.slice.flatOffset > 0) {
      shapeInfo.flatOffset = input.texData.slice.flatOffset;
    }
    return { name: program.variableNames[i], shapeInfo };
  });
  const inShapeInfos = inputInfos.map((x) => x.shapeInfo);
  const outShapeInfo = {
    logicalShape: output.shape,
    texShape: output.texData.texShape,
    isUniform: false,
    isPacked: output.texData.isPacked,
    flatOffset: null
  };
  const source = makeShader(inputInfos, outShapeInfo, program);
  const fragmentShader = createFragmentShader(gpgpu.gl, source);
  const webGLProgram = gpgpu.createProgram(fragmentShader);
  let infLoc = null;
  const nanLoc = gpgpu.getUniformLocation(webGLProgram, "NAN", false);
  if (env().getNumber("WEBGL_VERSION") === 1) {
    infLoc = gpgpu.getUniformLocation(webGLProgram, "INFINITY", false);
  }
  const shouldThrow = false;
  const uniformLocations = {};
  const inShapesLocations = {};
  const inTexShapesLocations = {};
  for (let i = 0; i < program.variableNames.length; i++) {
    const varName = program.variableNames[i];
    uniformLocations[varName] = gpgpu.getUniformLocation(webGLProgram, varName, shouldThrow);
    uniformLocations[`offset${varName}`] = gpgpu.getUniformLocation(webGLProgram, `offset${varName}`, shouldThrow);
    if (program.enableShapeUniforms) {
      inShapesLocations[`${varName}Shape`] = gpgpu.getUniformLocation(webGLProgram, `${varName}Shape`, shouldThrow);
      inTexShapesLocations[`${varName}TexShape`] = gpgpu.getUniformLocation(webGLProgram, `${varName}TexShape`, shouldThrow);
    }
  }
  let outShapeLocation;
  let outTexShapeLocation;
  let outShapeStridesLocation;
  if (program.enableShapeUniforms) {
    outShapeLocation = gpgpu.getUniformLocation(webGLProgram, "outShape", shouldThrow);
    outShapeStridesLocation = gpgpu.getUniformLocation(webGLProgram, "outShapeStrides", shouldThrow);
    outTexShapeLocation = gpgpu.getUniformLocation(webGLProgram, "outTexShape", shouldThrow);
  }
  const customUniformLocations = [];
  if (program.customUniforms) {
    program.customUniforms.forEach((d, i) => {
      customUniformLocations[i] = gpgpu.getUniformLocation(webGLProgram, d.name, shouldThrow);
    });
  }
  return {
    program,
    fragmentShader,
    source,
    webGLProgram,
    uniformLocations,
    customUniformLocations,
    inShapeInfos,
    outShapeInfo,
    infLoc,
    nanLoc,
    inShapesLocations,
    inTexShapesLocations,
    outShapeLocation,
    outShapeStridesLocation,
    outTexShapeLocation
  };
}
function validateBinaryAndProgram(shapeInfos, inputs) {
  if (shapeInfos.length !== inputs.length) {
    throw Error(`Binary was compiled with ${shapeInfos.length} inputs, but was executed with ${inputs.length} inputs`);
  }
  shapeInfos.forEach((s, i) => {
    const shapeA = s.logicalShape;
    const input = inputs[i];
    const shapeB = input.shape;
    if (!util_exports.arraysEqual(shapeA, shapeB)) {
      throw Error(`Binary was compiled with different shapes than the current args. Shapes ${shapeA} and ${shapeB} must match`);
    }
    if (s.isUniform && input.isUniform) {
      return;
    }
    const texShapeA = s.texShape;
    const texShapeB = input.isUniform ? null : input.texData.texShape;
    if (!util_exports.arraysEqual(texShapeA, texShapeB)) {
      throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${texShapeA} and ${texShapeB} must match`);
    }
  });
}
function runProgram(gpgpu, binary, inputs, output, customUniformValues) {
  if (!binary.program.enableShapeUniforms) {
    validateBinaryAndProgram(binary.inShapeInfos, inputs);
    validateBinaryAndProgram([binary.outShapeInfo], [output]);
  }
  const outTex = output.texData.texture;
  const outTexShape = output.texData.texShape;
  if (output.texData.isPacked) {
    gpgpu.setOutputPackedMatrixTexture(outTex, outTexShape[0], outTexShape[1]);
  } else {
    gpgpu.setOutputMatrixTexture(outTex, outTexShape[0], outTexShape[1]);
  }
  gpgpu.setProgram(binary.webGLProgram);
  if (env().getNumber("WEBGL_VERSION") === 1) {
    if (binary.infLoc !== null) {
      gpgpu.gl.uniform1f(binary.infLoc, Infinity);
    }
  }
  if (binary.nanLoc !== null) {
    gpgpu.gl.uniform1f(binary.nanLoc, NaN);
  }
  inputs.forEach((input, i) => {
    const varName = binary.program.variableNames[i];
    const varLoc = binary.uniformLocations[varName];
    const varOffsetLoc = binary.uniformLocations[`offset${varName}`];
    const varShapeLoc = binary.inShapesLocations[`${varName}Shape`];
    const varTexShapeLoc = binary.inTexShapesLocations[`${varName}TexShape`];
    if (varShapeLoc) {
      const { uniformShape } = getUniformInfoFromShape(binary.program.packedInputs, input.shape, input.texData.texShape);
      switch (uniformShape.length) {
        case 1:
          gpgpu.gl.uniform1iv(varShapeLoc, new Int32Array(uniformShape));
          break;
        case 2:
          gpgpu.gl.uniform2iv(varShapeLoc, new Int32Array(uniformShape));
          break;
        case 3:
          gpgpu.gl.uniform3iv(varShapeLoc, new Int32Array(uniformShape));
          break;
        case 4:
          gpgpu.gl.uniform4iv(varShapeLoc, new Int32Array(uniformShape));
          break;
        default:
          break;
      }
    }
    if (varTexShapeLoc) {
      gpgpu.gl.uniform2i(varTexShapeLoc, input.texData.texShape[0], input.texData.texShape[1]);
    }
    if (varLoc == null) {
      return;
    }
    if (input.isUniform) {
      if (util_exports.sizeFromShape(input.shape) < 2) {
        gpgpu.gl.uniform1f(varLoc, input.uniformValues[0]);
      } else {
        let vals = input.uniformValues;
        if (!(vals instanceof Float32Array)) {
          vals = new Float32Array(vals);
        }
        gpgpu.gl.uniform1fv(varLoc, vals);
      }
      return;
    }
    if (input.texData.slice != null && varOffsetLoc != null) {
      gpgpu.gl.uniform1i(varOffsetLoc, input.texData.slice.flatOffset);
    }
    gpgpu.setInputMatrixTexture(input.texData.texture, varLoc, i);
  });
  const outShapeLoc = binary.outShapeLocation;
  if (outShapeLoc) {
    switch (output.shape.length) {
      case 1:
        gpgpu.gl.uniform1iv(outShapeLoc, new Int32Array(output.shape));
        break;
      case 2:
        gpgpu.gl.uniform2iv(outShapeLoc, new Int32Array(output.shape));
        break;
      case 3:
        gpgpu.gl.uniform3iv(outShapeLoc, new Int32Array(output.shape));
        break;
      case 4:
        gpgpu.gl.uniform4iv(outShapeLoc, new Int32Array(output.shape));
        break;
      default:
        break;
    }
  }
  if (binary.outShapeStridesLocation) {
    const strides = util_exports.computeStrides(output.shape);
    switch (output.shape.length) {
      case 2:
        gpgpu.gl.uniform1iv(binary.outShapeStridesLocation, new Int32Array(strides));
        break;
      case 3:
        gpgpu.gl.uniform2iv(binary.outShapeStridesLocation, new Int32Array(strides));
        break;
      case 4:
        gpgpu.gl.uniform3iv(binary.outShapeStridesLocation, new Int32Array(strides));
        break;
      default:
        break;
    }
  }
  if (binary.outTexShapeLocation) {
    gpgpu.gl.uniform2i(binary.outTexShapeLocation, output.texData.texShape[0], output.texData.texShape[1]);
  }
  if (binary.program.customUniforms && customUniformValues) {
    binary.program.customUniforms.forEach((d, i) => {
      const customLoc = binary.customUniformLocations[i];
      const customValue = customUniformValues[i];
      if (d.type === "float") {
        gpgpu.gl.uniform1fv(customLoc, customValue);
      } else if (d.type === "vec2") {
        gpgpu.gl.uniform2fv(customLoc, customValue);
      } else if (d.type === "vec3") {
        gpgpu.gl.uniform3fv(customLoc, customValue);
      } else if (d.type === "vec4") {
        gpgpu.gl.uniform4fv(customLoc, customValue);
      } else if (d.type === "int") {
        gpgpu.gl.uniform1iv(customLoc, customValue);
      } else if (d.type === "ivec2") {
        gpgpu.gl.uniform2iv(customLoc, customValue);
      } else if (d.type === "ivec3") {
        gpgpu.gl.uniform3iv(customLoc, customValue);
      } else if (d.type === "ivec4") {
        gpgpu.gl.uniform4iv(customLoc, customValue);
      } else {
        throw Error(`uniform type ${d.type} is not supported yet.`);
      }
    });
  }
  gpgpu.executeProgram();
}
function makeShaderKey(program, inputs, output) {
  let keyInputs = "";
  inputs.concat(output).forEach((x) => {
    const hasOffset = x.texData != null && x.texData.slice != null && x.texData.slice.flatOffset > 0;
    if (program.enableShapeUniforms && !x.isUniform) {
      const xTexShape = x.texData.texShape;
      const { useSqueezeShape, uniformShape, keptDims } = getUniformInfoFromShape(program.packedInputs, x.shape, xTexShape);
      let rank1 = "", rank2 = "", rank34 = "";
      if (uniformShape.length === 1 && program.packedInputs) {
        const packedTexShape = [Math.ceil(xTexShape[0] / 2), Math.ceil(xTexShape[1] / 2)];
        rank1 = `${packedTexShape[0] > 1}_${packedTexShape[1] > 1}`;
      } else if (uniformShape.length === 2 && !program.packedInputs) {
        rank2 = `${uniformShape[0] > 1}_${uniformShape[1] > 1}`;
      } else if (uniformShape.length > 2 && !program.packedInputs) {
        const strides = util_exports.computeStrides(uniformShape);
        rank34 = `${strides[0] === xTexShape[1]}_${strides[strides.length - 1] === xTexShape[1]}`;
      }
      const xRank = x.shape.length;
      const isLogicalShapTexShapeEqual = uniformShape.length === 2 && util_exports.arraysEqual(x.shape, xTexShape);
      const isScalar = util_exports.sizeFromShape(x.shape) === 1;
      const broadcastDims = backend_util_exports.getBroadcastDims(x.shape, output.shape);
      const isInOutTexShapeEqual = !program.packedInputs && xRank === output.shape.length && util_exports.arraysEqual(xTexShape, output.texData.texShape);
      const isTexShapeGreaterThanOne = program.packedInputs || uniformShape.length > 2 ? "" : `${xTexShape[0] > 1}_${xTexShape[1] > 1}`;
      keyInputs += `${xRank}_${isInOutTexShapeEqual}_${useSqueezeShape ? keptDims : ""}_${uniformShape.length}_${isScalar}_${broadcastDims}_${isLogicalShapTexShapeEqual}_${rank1}_${rank2}_${rank34}_${isTexShapeGreaterThanOne}_${hasOffset}`;
    } else {
      const texShape = x.isUniform ? "uniform" : x.texData.texShape;
      keyInputs += `${x.shape}_${texShape}_${hasOffset}`;
    }
  });
  const keyUserCode = program.userCode;
  let key = program.constructor.name;
  key += "_" + keyInputs + "_" + keyUserCode + `${env().getNumber("WEBGL_VERSION")}`;
  return key;
}
function useShapeUniforms(rank) {
  return env().getBool("WEBGL_USE_SHAPES_UNIFORMS") && rank <= 4;
}

// src/tfjs-backend-webgl/src/decode_matrix_gpu.ts
var DecodeMatrixProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = false;
    this.packedOutput = true;
    this.outPackingScheme = PackingScheme.DENSE;
    this.customUniforms = [{ name: "texShape", type: "ivec2" }];
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms ? getOutputLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d"], outputShape) : getLogicalCoordinatesFromFlatIndex(["r", "c", "d"], outputShape)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${glsl.output} = result;
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/decode_matrix_packed_gpu.ts
var DecodeMatrixPackedProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outPackingScheme = PackingScheme.DENSE;
    this.customUniforms = [{ name: "texShape", type: "ivec2" }];
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms ? getOutputLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d"], outputShape) : getLogicalCoordinatesFromFlatIndex(["r", "c", "d"], outputShape)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${glsl.output} = result;
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/encode_float_gpu.ts
var EncodeFloatProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.outTexUsage = TextureUsage.DOWNLOAD;
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.userCode = `
      ${ENCODE_FLOAT_SNIPPET}

      void main() {
        float x = getAAtOutCoords();
        ${glsl.output} = encode_float(x);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/encode_float_packed_gpu.ts
var EncodeFloatPackedProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = false;
    this.outTexUsage = TextureUsage.DOWNLOAD;
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.userCode = `
      ${ENCODE_FLOAT_SNIPPET}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${glsl.output} = encode_float(x);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/encode_matrix_gpu.ts
var EncodeMatrixProgram = class {
  constructor(outputShape, inputIsUnsignedByte = false) {
    this.variableNames = ["A"];
    this.customUniforms = [{ name: "texShape", type: "ivec2" }];
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    let output = `result`;
    if (inputIsUnsignedByte) {
      output = `floor(result * 255. + 0.5)`;
    }
    this.userCode = `
      ${this.enableShapeUniforms ? getFlatIndexFrom3DOutput() : getFlatIndexFrom3D(outputShape)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / texShape[1];
        int c = imod(flatIndex, texShape[1]);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
        vec4 values = ${glsl.texture2D}(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ${glsl.output} = vec4(${output}, 0., 0., 0.);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/encode_matrix_packed_gpu.ts
var EncodeMatrixPackedProgram = class {
  constructor(outputShape, inputIsUnsignedByte = false) {
    this.variableNames = ["A"];
    this.packedInputs = false;
    this.packedOutput = true;
    this.customUniforms = [{ name: "texShape", type: "ivec2" }];
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    let mainLoop = "";
    let output = "result";
    if (inputIsUnsignedByte) {
      output = "floor(result * 255. + 0.5)";
    }
    for (let row = 0; row <= 1; row++) {
      for (let col = 0; col <= 1; col++) {
        const channel = row * 2 + col;
        mainLoop += `
          localCoords = coords;
          if(localCoords[2] + ${col} < ${this.enableShapeUniforms ? "outShape[2]" : `${outputShape[2]}`}) {
          localCoords[2] += ${col};
          if (localCoords[1] + ${row} < ${this.enableShapeUniforms ? "outShape[1]" : `${outputShape[1]}`}) {
            localCoords[1] += ${row};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${glsl.texture2D}(A, uv);

            if (offset == 0) {
              result[${channel}] = values[0];
            } else if (offset == 1) {
              result[${channel}] = values[1];
            } else if (offset == 2) {
              result[${channel}] = values[2];
            } else {
              result[${channel}] = values[3];
            }
          }
        }
        `;
      }
    }
    this.userCode = `
        ${this.enableShapeUniforms ? getFlatIndexFrom3DOutput() : getFlatIndexFrom3D(outputShape)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${mainLoop}

          ${glsl.output} = ${output};
        }
    `;
  }
};

// src/tfjs-backend-webgl/src/gpgpu_util.ts
var gpgpu_util_exports = {};
__export(gpgpu_util_exports, {
  bindVertexProgramAttributeStreams: () => bindVertexProgramAttributeStreams,
  createBufferFromOutputTexture: () => createBufferFromOutputTexture,
  createFloat16MatrixTexture: () => createFloat16MatrixTexture,
  createFloat16PackedMatrixTexture: () => createFloat16PackedMatrixTexture,
  createFloat32MatrixTexture: () => createFloat32MatrixTexture,
  createIndexBuffer: () => createIndexBuffer,
  createPackedMatrixTexture: () => createPackedMatrixTexture,
  createUnsignedBytesMatrixTexture: () => createUnsignedBytesMatrixTexture,
  createVertexBuffer: () => createVertexBuffer,
  createVertexShader: () => createVertexShader2,
  downloadByteEncodedFloatMatrixFromOutputTexture: () => downloadByteEncodedFloatMatrixFromOutputTexture,
  downloadFloat32MatrixFromBuffer: () => downloadFloat32MatrixFromBuffer,
  downloadMatrixFromPackedOutputTexture: () => downloadMatrixFromPackedOutputTexture,
  downloadPackedMatrixFromBuffer: () => downloadPackedMatrixFromBuffer,
  getInternalFormatForFloat16MatrixTexture: () => getInternalFormatForFloat16MatrixTexture,
  getInternalFormatForFloat16PackedMatrixTexture: () => getInternalFormatForFloat16PackedMatrixTexture,
  getInternalFormatForFloat32MatrixTexture: () => getInternalFormatForFloat32MatrixTexture,
  getInternalFormatForPackedMatrixTexture: () => getInternalFormatForPackedMatrixTexture,
  getInternalFormatForUnsignedBytesMatrixTexture: () => getInternalFormatForUnsignedBytesMatrixTexture,
  uploadDenseMatrixToTexture: () => uploadDenseMatrixToTexture,
  uploadPixelDataToTexture: () => uploadPixelDataToTexture
});
function createVertexShader2(gl) {
  const glsl = getGlslDifferences();
  const vertexShaderSource = `${glsl.version}
    precision highp float;
    ${glsl.attribute} vec3 clipSpacePos;
    ${glsl.attribute} vec2 uv;
    ${glsl.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;
  return createVertexShader(gl, vertexShaderSource);
}
function createVertexBuffer(gl) {
  const vertexArray = new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]);
  return createStaticVertexBuffer(gl, vertexArray);
}
function createIndexBuffer(gl) {
  const triangleVertexIndices = new Uint16Array([0, 1, 2, 2, 1, 3]);
  return createStaticIndexBuffer(gl, triangleVertexIndices);
}
function createAndConfigureTexture(gl, width, height, internalFormat, textureFormat, textureType) {
  validateTextureSize(width, height);
  const texture = createTexture(gl);
  const tex2d = gl.TEXTURE_2D;
  callAndCheck(gl, () => gl.bindTexture(tex2d, texture));
  callAndCheck(gl, () => gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE));
  callAndCheck(gl, () => gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE));
  callAndCheck(gl, () => gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST));
  callAndCheck(gl, () => gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST));
  callAndCheck(gl, () => gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, textureFormat, textureType, null));
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
  return texture;
}
function getInternalFormatForFloat32MatrixTexture(textureConfig) {
  return textureConfig.internalFormatFloat;
}
function createFloat32MatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getUnpackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat32MatrixTexture(textureConfig), textureConfig.textureFormatFloat, gl.FLOAT);
}
function getInternalFormatForFloat16MatrixTexture(textureConfig) {
  return textureConfig.internalFormatHalfFloat;
}
function createFloat16MatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getUnpackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat16MatrixTexture(textureConfig), textureConfig.textureFormatFloat, textureConfig.textureTypeHalfFloat);
}
function getInternalFormatForUnsignedBytesMatrixTexture(textureConfig) {
  return textureConfig.downloadTextureFormat;
}
function createUnsignedBytesMatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getUnpackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForUnsignedBytesMatrixTexture(textureConfig), gl.RGBA, gl.UNSIGNED_BYTE);
}
function getInternalFormatForPackedMatrixTexture(textureConfig) {
  return textureConfig.internalFormatPackedFloat;
}
function createPackedMatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForPackedMatrixTexture(textureConfig), gl.RGBA, gl.FLOAT);
}
function getInternalFormatForFloat16PackedMatrixTexture(textureConfig) {
  return textureConfig.internalFormatPackedHalfFloat;
}
function createFloat16PackedMatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat16PackedMatrixTexture(textureConfig), gl.RGBA, textureConfig.textureTypeHalfFloat);
}
function bindVertexProgramAttributeStreams(gl, program, vertexBuffer) {
  const posOffset = 0;
  const uvOffset = 3 * 4;
  const stride = 3 * 4 + 2 * 4;
  callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer));
  const success = bindVertexBufferToProgramAttribute(gl, program, "clipSpacePos", vertexBuffer, 3, stride, posOffset);
  return success && bindVertexBufferToProgramAttribute(gl, program, "uv", vertexBuffer, 2, stride, uvOffset);
}
function uploadDenseMatrixToTexture(gl, texture, width, height, data, textureConfig) {
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
  let dataForUpload, texelDataType, internalFormat;
  if (data instanceof Uint8Array) {
    dataForUpload = new Uint8Array(width * height * 4);
    texelDataType = gl.UNSIGNED_BYTE;
    internalFormat = gl.RGBA;
  } else {
    dataForUpload = new Float32Array(width * height * 4);
    texelDataType = gl.FLOAT;
    internalFormat = textureConfig.internalFormatPackedFloat;
  }
  dataForUpload.set(data);
  callAndCheck(gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, gl.RGBA, texelDataType, dataForUpload));
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function uploadPixelDataToTexture(gl, texture, pixels) {
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
  if (pixels.data instanceof Uint8Array) {
    callAndCheck(gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pixels.width, pixels.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels.data));
  } else {
    callAndCheck(gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pixels));
  }
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function createBufferFromOutputTexture(gl2, rows, columns, textureConfig) {
  const buffer2 = gl2.createBuffer();
  callAndCheck(gl2, () => gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer2));
  const bytesPerFloat = 4;
  const valuesPerTexel = 4;
  const bufferSizeBytes = bytesPerFloat * valuesPerTexel * rows * columns;
  callAndCheck(gl2, () => gl2.bufferData(gl2.PIXEL_PACK_BUFFER, bufferSizeBytes, gl2.STREAM_READ));
  callAndCheck(gl2, () => gl2.readPixels(0, 0, columns, rows, gl2.RGBA, gl2.FLOAT, 0));
  callAndCheck(gl2, () => gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null));
  return buffer2;
}
function downloadFloat32MatrixFromBuffer(gl, buffer2, size) {
  const gl2 = gl;
  const downloadTarget = new Float32Array(size);
  gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer2);
  gl2.getBufferSubData(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget);
  gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
  return downloadTarget;
}
function downloadByteEncodedFloatMatrixFromOutputTexture(gl, rows, columns, textureConfig) {
  const [w, h] = getUnpackedMatrixTextureShapeWidthHeight(rows, columns);
  const numChannels = 4;
  const downloadTarget = new Uint8Array(getUnpackedArraySizeFromMatrixSize(rows * columns, numChannels));
  callAndCheck(gl, () => gl.readPixels(0, 0, w, h, textureConfig.downloadTextureFormat, gl.UNSIGNED_BYTE, downloadTarget));
  return new Float32Array(downloadTarget.buffer);
}
function downloadPackedMatrixFromBuffer(gl, buffer2, batch, rows, cols, physicalRows, physicalCols, textureConfig) {
  const gl2 = gl;
  const downloadTarget = new Float32Array(getPackedRGBAArraySizeFromMatrixShape(physicalRows, physicalCols));
  gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer2);
  gl2.getBufferSubData(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget);
  gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
  return downloadTarget;
}
function downloadMatrixFromPackedOutputTexture(gl, physicalRows, physicalCols) {
  const packedRGBA = new Float32Array(physicalRows * physicalCols * 4);
  callAndCheck(gl, () => gl.readPixels(0, 0, physicalCols, physicalRows, gl.RGBA, gl.FLOAT, packedRGBA));
  return packedRGBA;
}

// src/tfjs-backend-webgl/src/gpgpu_context.ts
var GPGPUContext = class {
  constructor(gl) {
    this.outputTexture = null;
    this.program = null;
    this.disposed = false;
    this.vertexAttrsAreBound = false;
    this.itemsToPoll = [];
    const glVersion = env().getNumber("WEBGL_VERSION");
    if (gl != null) {
      this.gl = gl;
      setWebGLContext(glVersion, gl);
    } else {
      this.gl = getWebGLContext(glVersion);
    }
    let COLOR_BUFFER_FLOAT = "WEBGL_color_buffer_float";
    const COLOR_BUFFER_HALF_FLOAT = "EXT_color_buffer_half_float";
    if (env().getNumber("WEBGL_VERSION") === 1) {
      const TEXTURE_FLOAT = "OES_texture_float";
      const TEXTURE_HALF_FLOAT = "OES_texture_half_float";
      this.textureFloatExtension = getExtensionOrThrow(this.gl, TEXTURE_FLOAT);
      if (hasExtension(this.gl, TEXTURE_HALF_FLOAT)) {
        this.textureHalfFloatExtension = getExtensionOrThrow(this.gl, TEXTURE_HALF_FLOAT);
      } else if (env().get("WEBGL_FORCE_F16_TEXTURES")) {
        throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
      }
      this.colorBufferFloatExtension = this.gl.getExtension(COLOR_BUFFER_FLOAT);
      if (hasExtension(this.gl, COLOR_BUFFER_HALF_FLOAT)) {
        this.colorBufferHalfFloatExtension = getExtensionOrThrow(this.gl, COLOR_BUFFER_HALF_FLOAT);
      } else if (env().get("WEBGL_FORCE_F16_TEXTURES")) {
        throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
      }
    } else {
      COLOR_BUFFER_FLOAT = "EXT_color_buffer_float";
      if (hasExtension(this.gl, COLOR_BUFFER_FLOAT)) {
        this.colorBufferFloatExtension = this.gl.getExtension(COLOR_BUFFER_FLOAT);
      } else if (hasExtension(this.gl, COLOR_BUFFER_HALF_FLOAT)) {
        this.colorBufferHalfFloatExtension = this.gl.getExtension(COLOR_BUFFER_HALF_FLOAT);
      } else {
        throw new Error("GL context does not support color renderable floats");
      }
    }
    this.vertexBuffer = createVertexBuffer(this.gl);
    this.indexBuffer = createIndexBuffer(this.gl);
    this.framebuffer = createFramebuffer(this.gl);
    this.textureConfig = getTextureConfig(this.gl, this.textureHalfFloatExtension);
  }
  get debug() {
    return env().getBool("DEBUG");
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    if (this.program != null) {
      console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.");
    }
    if (this.outputTexture != null) {
      console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
    }
    const gl = this.gl;
    callAndCheck(gl, () => gl.finish());
    callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, null));
    callAndCheck(gl, () => gl.deleteFramebuffer(this.framebuffer));
    callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, null));
    callAndCheck(gl, () => gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null));
    callAndCheck(gl, () => gl.deleteBuffer(this.indexBuffer));
    this.disposed = true;
  }
  createFloat32MatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createFloat32MatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  createFloat16MatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createFloat16MatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  createUnsignedBytesMatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createUnsignedBytesMatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  uploadPixelDataToTexture(texture, pixels) {
    this.throwIfDisposed();
    uploadPixelDataToTexture(this.gl, texture, pixels);
  }
  uploadDenseMatrixToTexture(texture, width, height, data) {
    this.throwIfDisposed();
    uploadDenseMatrixToTexture(this.gl, texture, width, height, data, this.textureConfig);
  }
  createFloat16PackedMatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createFloat16PackedMatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  createPackedMatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createPackedMatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  deleteMatrixTexture(texture) {
    this.throwIfDisposed();
    if (this.outputTexture === texture) {
      unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
      this.outputTexture = null;
    }
    callAndCheck(this.gl, () => this.gl.deleteTexture(texture));
  }
  downloadByteEncodedFloatMatrixFromOutputTexture(texture, rows, columns) {
    return this.downloadMatrixDriver(texture, () => downloadByteEncodedFloatMatrixFromOutputTexture(this.gl, rows, columns, this.textureConfig));
  }
  downloadPackedMatrixFromBuffer(buffer2, batch, rows, columns, physicalRows, physicalCols) {
    return downloadPackedMatrixFromBuffer(this.gl, buffer2, batch, rows, columns, physicalRows, physicalCols, this.textureConfig);
  }
  downloadFloat32MatrixFromBuffer(buffer2, size) {
    return downloadFloat32MatrixFromBuffer(this.gl, buffer2, size);
  }
  createBufferFromTexture(texture, rows, columns) {
    this.bindTextureToFrameBuffer(texture);
    const result = createBufferFromOutputTexture(this.gl, rows, columns, this.textureConfig);
    this.unbindTextureToFrameBuffer();
    return result;
  }
  createAndWaitForFence() {
    const fenceContext = this.createFence(this.gl);
    return this.pollFence(fenceContext);
  }
  createFence(gl) {
    let query;
    let isFencePassed;
    if (env().getBool("WEBGL_FENCE_API_ENABLED")) {
      const gl2 = gl;
      const sync = gl2.fenceSync(gl2.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      isFencePassed = () => {
        const status = gl2.clientWaitSync(sync, 0, 0);
        return status === gl2.ALREADY_SIGNALED || status === gl2.CONDITION_SATISFIED;
      };
      query = sync;
    } else if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0) {
      query = this.beginQuery();
      this.endQuery();
      isFencePassed = () => this.isQueryAvailable(query, env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
    } else {
      isFencePassed = () => true;
    }
    return { query, isFencePassed };
  }
  downloadMatrixFromPackedTexture(texture, physicalRows, physicalCols) {
    return this.downloadMatrixDriver(texture, () => downloadMatrixFromPackedOutputTexture(this.gl, physicalRows, physicalCols));
  }
  createProgram(fragmentShader) {
    this.throwIfDisposed();
    const gl = this.gl;
    if (this.vertexShader == null) {
      this.vertexShader = createVertexShader2(gl);
    }
    const program = createProgram(gl);
    callAndCheck(gl, () => gl.attachShader(program, this.vertexShader));
    callAndCheck(gl, () => gl.attachShader(program, fragmentShader));
    linkProgram(gl, program);
    if (this.debug) {
      validateProgram(gl, program);
    }
    if (!this.vertexAttrsAreBound) {
      this.setProgram(program);
      this.vertexAttrsAreBound = bindVertexProgramAttributeStreams(gl, this.program, this.vertexBuffer);
    }
    return program;
  }
  deleteProgram(program) {
    this.throwIfDisposed();
    if (program === this.program) {
      this.program = null;
    }
    if (program != null) {
      callAndCheck(this.gl, () => this.gl.deleteProgram(program));
    }
  }
  setProgram(program) {
    this.throwIfDisposed();
    this.program = program;
    if (this.program != null && this.debug) {
      validateProgram(this.gl, this.program);
    }
    callAndCheck(this.gl, () => this.gl.useProgram(program));
  }
  getUniformLocation(program, uniformName, shouldThrow = true) {
    this.throwIfDisposed();
    if (shouldThrow) {
      return getProgramUniformLocationOrThrow(this.gl, program, uniformName);
    } else {
      return getProgramUniformLocation(this.gl, program, uniformName);
    }
  }
  getAttributeLocation(program, attribute) {
    this.throwIfDisposed();
    return callAndCheck(this.gl, () => this.gl.getAttribLocation(program, attribute));
  }
  getUniformLocationNoThrow(program, uniformName) {
    this.throwIfDisposed();
    return this.gl.getUniformLocation(program, uniformName);
  }
  setInputMatrixTexture(inputMatrixTexture, uniformLocation, textureUnit) {
    this.throwIfDisposed();
    this.throwIfNoProgram();
    bindTextureToProgramUniformSampler(this.gl, inputMatrixTexture, uniformLocation, textureUnit);
  }
  setOutputMatrixTexture(outputMatrixTexture, rows, columns) {
    this.setOutputMatrixTextureDriver(outputMatrixTexture, columns, rows);
  }
  setOutputPackedMatrixTexture(outputPackedMatrixTexture, rows, columns) {
    this.throwIfDisposed();
    const [width, height] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
    this.setOutputMatrixTextureDriver(outputPackedMatrixTexture, width, height);
  }
  setOutputMatrixWriteRegion(startRow, numRows, startColumn, numColumns) {
    this.setOutputMatrixWriteRegionDriver(startColumn, startRow, numColumns, numRows);
  }
  setOutputPackedMatrixWriteRegion(startRow, numRows, startColumn, numColumns) {
    throw new Error("setOutputPackedMatrixWriteRegion not implemented.");
  }
  debugValidate() {
    if (this.program != null) {
      validateProgram(this.gl, this.program);
    }
    validateFramebuffer(this.gl);
  }
  executeProgram() {
    this.throwIfDisposed();
    this.throwIfNoProgram();
    const gl = this.gl;
    if (this.debug) {
      this.debugValidate();
    }
    callAndCheck(gl, () => gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0));
  }
  blockUntilAllProgramsCompleted() {
    this.throwIfDisposed();
    callAndCheck(this.gl, () => this.gl.finish());
  }
  getQueryTimerExtension() {
    if (this.disjointQueryTimerExtension == null) {
      this.disjointQueryTimerExtension = getExtensionOrThrow(this.gl, env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") === 2 ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query");
    }
    return this.disjointQueryTimerExtension;
  }
  getQueryTimerExtensionWebGL2() {
    return this.getQueryTimerExtension();
  }
  getQueryTimerExtensionWebGL1() {
    return this.getQueryTimerExtension();
  }
  beginQuery() {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") === 2) {
      const gl2 = this.gl;
      const ext2 = this.getQueryTimerExtensionWebGL2();
      const query2 = gl2.createQuery();
      gl2.beginQuery(ext2.TIME_ELAPSED_EXT, query2);
      return query2;
    }
    const ext = this.getQueryTimerExtensionWebGL1();
    const query = ext.createQueryEXT();
    ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
    return query;
  }
  endQuery() {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") === 2) {
      const gl2 = this.gl;
      const ext2 = this.getQueryTimerExtensionWebGL2();
      gl2.endQuery(ext2.TIME_ELAPSED_EXT);
      return;
    }
    const ext = this.getQueryTimerExtensionWebGL1();
    ext.endQueryEXT(ext.TIME_ELAPSED_EXT);
  }
  async waitForQueryAndGetTime(query) {
    await util_exports.repeatedTry(() => this.disposed || this.isQueryAvailable(query, env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")));
    return this.getQueryTime(query, env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
  }
  getQueryTime(query, queryTimerVersion) {
    if (queryTimerVersion === 0) {
      return null;
    }
    if (queryTimerVersion === 2) {
      const gl2 = this.gl;
      const timeElapsedNanos = gl2.getQueryParameter(query, gl2.QUERY_RESULT);
      return timeElapsedNanos / 1e6;
    } else {
      const ext = this.getQueryTimerExtensionWebGL1();
      const timeElapsedNanos = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
      return timeElapsedNanos / 1e6;
    }
  }
  isQueryAvailable(query, queryTimerVersion) {
    if (queryTimerVersion === 0) {
      return true;
    }
    if (queryTimerVersion === 2) {
      const gl2 = this.gl;
      const ext = this.getQueryTimerExtensionWebGL2();
      const available = gl2.getQueryParameter(query, gl2.QUERY_RESULT_AVAILABLE);
      if (this.disjoint == null) {
        this.disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
      }
      return available && !this.disjoint;
    } else {
      const ext = this.getQueryTimerExtensionWebGL1();
      const available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
      if (this.disjoint == null) {
        this.disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
      }
      return available && !this.disjoint;
    }
  }
  pollFence(fenceContext) {
    return new Promise((resolve) => {
      this.addItemToPoll(() => fenceContext.isFencePassed(), () => resolve());
    });
  }
  pollItems() {
    const index = linearSearchLastTrue(this.itemsToPoll.map((x) => x.isDoneFn));
    for (let i = 0; i <= index; ++i) {
      const { resolveFn } = this.itemsToPoll[i];
      resolveFn();
    }
    this.itemsToPoll = this.itemsToPoll.slice(index + 1);
  }
  addItemToPoll(isDoneFn, resolveFn) {
    this.itemsToPoll.push({ isDoneFn, resolveFn });
    if (this.itemsToPoll.length > 1) {
      return;
    }
    util_exports.repeatedTry(() => {
      this.pollItems();
      return this.itemsToPoll.length === 0;
    });
  }
  bindTextureToFrameBuffer(texture) {
    this.throwIfDisposed();
    bindColorTextureToFramebuffer(this.gl, texture, this.framebuffer);
    if (this.debug) {
      validateFramebuffer(this.gl);
    }
  }
  unbindTextureToFrameBuffer() {
    if (this.outputTexture != null) {
      bindColorTextureToFramebuffer(this.gl, this.outputTexture, this.framebuffer);
      if (this.debug) {
        validateFramebuffer(this.gl);
      }
    } else {
      unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
    }
  }
  downloadMatrixDriver(texture, downloadAndDecode) {
    this.bindTextureToFrameBuffer(texture);
    const result = downloadAndDecode();
    this.unbindTextureToFrameBuffer();
    return result;
  }
  setOutputMatrixTextureDriver(outputMatrixTextureMaybePacked, width, height) {
    this.throwIfDisposed();
    const gl = this.gl;
    bindColorTextureToFramebuffer(gl, outputMatrixTextureMaybePacked, this.framebuffer);
    if (this.debug) {
      validateFramebuffer(gl);
    }
    this.outputTexture = outputMatrixTextureMaybePacked;
    callAndCheck(gl, () => gl.viewport(0, 0, width, height));
    callAndCheck(gl, () => gl.scissor(0, 0, width, height));
  }
  setOutputMatrixWriteRegionDriver(x, y, width, height) {
    this.throwIfDisposed();
    callAndCheck(this.gl, () => this.gl.scissor(x, y, width, height));
  }
  throwIfDisposed() {
    if (this.disposed) {
      throw new Error("Attempted to use disposed GPGPUContext.");
    }
  }
  throwIfNoProgram() {
    if (this.program == null) {
      throw new Error("No GPU program is currently set.");
    }
  }
};
function linearSearchLastTrue(arr) {
  let i = 0;
  for (; i < arr.length; ++i) {
    const isDone = arr[i]();
    if (!isDone) {
      break;
    }
  }
  return i - 1;
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
function assertNotComplex2(tensor2, opName) {
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
function complex2(args) {
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
    return complex2({ inputs: { real: real4, imag: imag3 }, backend });
  }
  const values = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(shape), dtype);
  return backend.makeTensorInfo(shape, dtype, values);
}

// src/tfjs-backend-cpu/src/kernels/Identity.ts
function identity(args) {
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
      return identity({ inputs: { x }, backend });
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
    const result = identity({ inputs: { x }, backend });
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
function binaryKernelFunc(name, simpleImpl, complexImpl, dtype) {
  if (complexImpl == null) {
    return ({ inputs, backend }) => {
      const { a, b } = inputs;
      const cpuBackend = backend;
      assertNotComplex2([a, b], name);
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
      const result = complex2({ inputs: { real: resultReal, imag: resultImag }, backend: cpuBackend });
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
var add3 = binaryKernelFunc(Add, addImpl, addComplexImpl);

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
function unaryKernelFunc(name, op2, dtype) {
  return ({ inputs, attrs, backend }) => {
    const { x } = inputs;
    assertNotComplex2(x, name);
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
    assertNotComplex2(x, name);
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
    outBuf.values[i] = xBuf.values[originalIndex];
  }
  return outBuf;
}

// src/tfjs-backend-cpu/src/kernels/Greater.ts
var greaterImpl = createSimpleBinaryKernelImpl((a, b) => a > b ? 1 : 0);
var greater2 = binaryKernelFunc(Greater, greaterImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/GreaterEqual.ts
var greaterEqualImpl = createSimpleBinaryKernelImpl((a, b) => a >= b ? 1 : 0);
var greaterEqual2 = binaryKernelFunc(GreaterEqual, greaterEqualImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/Less.ts
var lessImpl = createSimpleBinaryKernelImpl((a, b) => a < b ? 1 : 0);
var less2 = binaryKernelFunc(Less, lessImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/LessEqual.ts
var lessEqualImpl = createSimpleBinaryKernelImpl((a, b) => a <= b ? 1 : 0);
var lessEqual2 = binaryKernelFunc(LessEqual, lessEqualImpl, null, "bool");

// src/tfjs-backend-cpu/src/kernels/LinSpace_impl.ts
function linSpaceImpl(start, stop, num) {
  const step3 = (stop - start) / (num - 1);
  const values = util_exports.makeZerosTypedArray(num, "float32");
  values[0] = start;
  for (let i = 1; i < values.length; i++) {
    values[i] = values[i - 1] + step3;
  }
  return values;
}

// src/tfjs-backend-cpu/src/kernels/Log.ts
var logImpl = createSimpleUnaryImpl((xi) => Math.log(xi));
var log5 = unaryKernelFuncFromImpl(Log, logImpl);

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
var maximum2 = binaryKernelFunc(Maximum, maximumImpl);

// src/tfjs-backend-cpu/src/kernels/Minimum.ts
var minimumImpl = createSimpleBinaryKernelImpl((aValue, bValue) => Math.min(aValue, bValue));
var minimum2 = binaryKernelFunc(Minimum, minimumImpl);

// src/tfjs-backend-cpu/src/kernels/Multiply.ts
var multiplyImpl = createSimpleBinaryKernelImpl((aValue, bValue) => aValue * bValue);
var multiplyComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return {
    real: aReal * bReal - aImag * bImag,
    imag: aReal * bImag + aImag * bReal
  };
});
var multiply = binaryKernelFunc(Multiply, multiplyImpl, multiplyComplexImpl);

// src/tfjs-backend-cpu/src/kernels/Neg.ts
function negImpl(xVals, xShape, xDtype) {
  const minusOne = util_exports.createScalarValue(-1, xDtype);
  return multiplyImpl([], xShape, minusOne, xVals, xDtype);
}

// src/tfjs-backend-cpu/src/kernels/NotEqual.ts
var notEqualImpl = createSimpleBinaryKernelImpl((a, b) => a !== b ? 1 : 0);
var notEqual2 = binaryKernelFunc(NotEqual, notEqualImpl, null, "bool");

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

// src/tfjs-backend-cpu/src/kernels/SparseFillEmptyRows_impl.ts
function sparseFillEmptyRowsImpl(indices, indicesShape, indicesDType, values, valuesDType, denseShape, defaultValue) {
  const indicesCount = indicesShape[0];
  const denseRows = denseShape[0];
  const emptyRowIndicator = new Array(denseRows);
  const reverseIndexMap = new Array(indicesCount);
  const rank = indicesShape[1];
  if (denseRows === 0) {
    if (indicesCount !== 0) {
      throw new Error(`Received SparseTensor with denseShape[0] = 0 but
         indices.shape[0] = ${indicesCount}`);
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
      throw new Error(`indices(${i}, 0) is invalid: ${row} < 0`);
    }
    if (row >= denseRows) {
      throw new Error(`indices(${i}, 0) is invalid: ${row} >= ${denseRows}`);
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
        throw new Error(`only one output dimension may be -1, not both ${unknownIndex} and ${d}`);
      }
      unknownIndex = d;
      outputShape.push(1);
    } else {
      if (size < 0) {
        throw new Error(`size ${d} must be non-negative, not ${size}`);
      }
      product *= size;
      outputShape.push(size);
    }
  }
  if (unknownIndex !== -1) {
    if (product <= 0) {
      throw new Error("reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero");
    }
    const missing = Math.trunc(denseSize / product);
    if (product * missing !== denseSize) {
      throw new Error(`Input to reshape is a SparseTensor with ${denseSize}
          dense values, but the requested shape requires a multiple of ${product}. inputShape=${inputShape} outputShape= ${outputShape}`);
    }
    outputShape[unknownIndex] = missing;
  }
  const outputSize = util_exports.sizeFromShape(outputShape);
  if (outputSize !== denseSize) {
    throw new Error(`Input to reshape is a tensor with ${denseSize} dense values, but the requested shape has ${outputSize}. inputShape=${inputShape} outputShape=${outputShape}`);
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
  if (numIndices !== segmentIds.length) {
    throw new Error(`segmentIds and indices should have same size.`);
  }
  const inputFlat = [inputShape[0], input.length / inputShape[0]];
  const numCol = inputFlat[1];
  const lastSegmentIdPlusOne = numIndices > 0 ? segmentIds[numIndices - 1] + 1 : 0;
  const outputRows = lastSegmentIdPlusOne;
  if (outputRows < 0) {
    throw new Error(`segment ids must be >= 0`);
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
    throw new Error(`segment ids must be >= 0`);
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
        throw new Error(`segment ids are not increasing`);
      }
    }
    if (outIndex < 0 || outIndex >= outputRows) {
      throw new Error(`Segment id ${outIndex} out of range [0, ${outputRows}), possibly because segmentIds input is not sorted.`);
    }
    if (outIndex > uninitializedIndex) {
      output.fill(defaultValue, uninitializedIndex * numCol, outIndex * numCol);
    }
    for (let i = start; i < end; ++i) {
      const index = indices[i];
      if (index < 0 || index >= inputFlat[0]) {
        throw new Error(`Bad: indices[${i}] == ${indices[i]} out of range [0, ${inputFlat[0]})`);
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
var sqrt2 = unaryKernelFunc(Sqrt, (xi) => Math.sqrt(xi));

// src/tfjs-backend-cpu/src/kernels/SquaredDifference.ts
var squaredDifferenceImpl = createSimpleBinaryKernelImpl((a, b) => {
  const diff = a - b;
  return diff * diff;
});
var squaredDifference2 = binaryKernelFunc(SquaredDifference, squaredDifferenceImpl);

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
var sub2 = binaryKernelFunc(Sub, subImpl, subComplexImpl);

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

// src/tfjs-backend-webgl/src/kernel_utils/shared.ts
var {
  addImpl: addImplCPU,
  bincountImpl: bincountImplCPU,
  bincountReduceImpl: bincountReduceImplCPU,
  ceilImpl: ceilImplCPU,
  concatImpl: concatImplCPU,
  equalImpl: equalImplCPU,
  expImpl: expImplCPU,
  expm1Impl: expm1ImplCPU,
  floorImpl: floorImplCPU,
  gatherNdImpl: gatherNdImplCPU,
  gatherV2Impl: gatherV2ImplCPU,
  greaterImpl: greaterImplCPU,
  greaterEqualImpl: greaterEqualImplCPU,
  lessImpl: lessImplCPU,
  lessEqualImpl: lessEqualImplCPU,
  linSpaceImpl: linSpaceImplCPU,
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
  sigmoidImpl: sigmoidImplCPU,
  simpleAbsImpl: simpleAbsImplCPU,
  sliceImpl: sliceImplCPU,
  sparseFillEmptyRowsImpl: sparseFillEmptyRowsImplCPU,
  sparseReshapeImpl: sparseReshapeImplCPU,
  sparseSegmentReductionImpl: sparseSegmentReductionImplCPU,
  sqrtImpl: sqrtImplCPU,
  stridedSliceImpl: stridedSliceImplCPU,
  stringNGramsImpl: stringNGramsImplCPU,
  stringSplitImpl: stringSplitImplCPU,
  stringToHashBucketFastImpl: stringToHashBucketFastImplCPU,
  subImpl: subImplCPU,
  tileImpl: tileImplCPU,
  topKImpl: topKImplCPU,
  transposeImpl: transposeImplCPU,
  uniqueImpl: uniqueImplCPU
} = shared_exports;

// src/tfjs-backend-webgl/src/packing_util.ts
function getVecChannels(name, rank) {
  return ["x", "y", "z", "w", "u", "v"].slice(0, rank).map((d) => `${name}.${d}`);
}
function getChannels(name, rank) {
  if (rank === 1) {
    return [name];
  }
  return getVecChannels(name, rank);
}
function getSourceCoords(rank, dims) {
  if (rank === 1) {
    return "rc";
  }
  let coords2 = "";
  for (let i = 0; i < rank; i++) {
    coords2 += dims[i];
    if (i < rank - 1) {
      coords2 += ",";
    }
  }
  return coords2;
}

// src/tfjs-backend-webgl/src/pack_gpu.ts
var PackProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = false;
    this.packedOutput = true;
    this.outputShape = outputShape;
    const rank = outputShape.length;
    if (rank === 0) {
      this.userCode = `
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;
    } else {
      const channels = getChannels("rc", rank);
      const dtype = getCoordsDataType(rank);
      const outOfBoundsCondition = getOutOfBoundsCondition(rank, outputShape, channels);
      const setup = getSetup(rank, outputShape[outputShape.length - 1], outputShape[outputShape.length - 2], channels);
      const output = getOutput(outputShape, channels);
      this.userCode = `
        void main() {
          ${dtype} rc = getOutputCoords();

          if(${outOfBoundsCondition}) {
            setOutput(vec4(0));
          } else {
            ${setup}

            setOutput(vec4(${output}));
          }
        }
      `;
    }
  }
};
function getSourceCoordsArr(rank, dims) {
  const coords2 = [];
  for (let row = 0; row <= 1; row++) {
    for (let col = 0; col <= 1; col++) {
      let coord = `${row === 0 ? "r" : "rp1"}, ${col === 0 ? "c" : "cp1"}`;
      for (let d = 2; d < rank; d++) {
        coord = `${dims[dims.length - 1 - d]},` + coord;
      }
      coords2.push(coord);
    }
  }
  return coords2;
}
function getOutOfBoundsCondition(rank, shape, dims) {
  if (rank === 1) {
    return `rc > ${shape[0]}`;
  }
  let cond = "";
  for (let i = rank - 2; i < rank; i++) {
    cond += `${dims[i]} >= ${shape[i]}`;
    if (i < rank - 1) {
      cond += "||";
    }
  }
  return cond;
}
function getSetup(rank, cols, rows, dims) {
  if (rank === 1) {
    return "";
  }
  const innerDims = dims.slice(-2);
  return `
    int r = ${innerDims[0]};
    int c = ${innerDims[1]};
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= ${cols};
    bool rEdge = rp1 >= ${rows};
  `;
}
function getOutput(shape, dims) {
  const rank = shape.length;
  const sourceCoords = getSourceCoordsArr(rank, dims);
  if (rank === 1) {
    return `getA(rc),
            rc + 1 >= ${shape[0]} ? 0. : getA(rc + 1),
            0, 0`;
  }
  return `getA(${sourceCoords[0]}),
          cEdge ? 0. : getA(${sourceCoords[1]}),
          rEdge ? 0. : getA(${sourceCoords[2]}),
          rEdge || cEdge ? 0. : getA(${sourceCoords[3]})`;
}

// src/tfjs-backend-webgl/src/reshape_packed_gpu.ts
var ReshapePackedProgram = class {
  constructor(outputShape, inputShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{ name: "inputShape", type: "ivec3" }];
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    let mainLoop = ``;
    for (let i = 0; i < 4; i++) {
      let thisRC = `thisRC = rc;`;
      if (i % 2 === 1) {
        thisRC += `thisRC.z += 1;`;
      }
      if (i > 1) {
        thisRC += `thisRC.y += 1;`;
      }
      mainLoop += `
        ${thisRC}
        ${i > 0 ? `if(thisRC.y < rows && thisRC.z < cols){` : ""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${i}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${i > 0 ? "}" : ""}
      `;
    }
    this.userCode = `
      ${getReshapedInputCoords(inputShape, this.enableShapeUniforms)}
      ${this.enableShapeUniforms ? getFlatIndexFrom3DOutput() : getFlatIndexFrom3D(outputShape)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms ? "outShape[1]" : outputShape[1]};
        int cols = ${this.enableShapeUniforms ? "outShape[2]" : outputShape[2]};

        ${mainLoop}

        setOutput(result);
      }
    `;
  }
};
function getReshapedInputCoords(shape, enableShapeUniforms) {
  const coordsFromIndexSnippet = enableShapeUniforms ? getLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d"], "inputShape") : getLogicalCoordinatesFromFlatIndex(["r", "c", "d"], shape);
  return `
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${coordsFromIndexSnippet}
      return ivec3(r, c, d);
    }
  `;
}

// src/tfjs-backend-webgl/src/texture_manager.ts
var TextureManager = class {
  constructor(gpgpu) {
    this.gpgpu = gpgpu;
    this.numUsedTextures = 0;
    this.numFreeTextures = 0;
    this._numBytesAllocated = 0;
    this._numBytesFree = 0;
    this.freeTextures = {};
    this.logEnabled = false;
    this.usedTextures = {};
  }
  acquireTexture(shapeRC, usage, isPacked) {
    const physicalTexType = getPhysicalFromLogicalTextureType(usage, isPacked);
    const shapeKey = getKeyFromTextureShape(shapeRC, physicalTexType, isPacked);
    if (!(shapeKey in this.freeTextures)) {
      this.freeTextures[shapeKey] = [];
    }
    if (!(shapeKey in this.usedTextures)) {
      this.usedTextures[shapeKey] = [];
    }
    const texBytes = computeBytes(shapeRC, physicalTexType, this.gpgpu.gl, this.gpgpu.textureConfig, isPacked);
    if (this.freeTextures[shapeKey].length > 0) {
      this.numFreeTextures--;
      this.numUsedTextures++;
      this._numBytesFree -= texBytes;
      this.log();
      const newTexture2 = this.freeTextures[shapeKey].shift();
      this.usedTextures[shapeKey].push(newTexture2);
      return newTexture2;
    }
    let newTexture;
    if (physicalTexType === PhysicalTextureType.PACKED_2X2_FLOAT32) {
      newTexture = this.gpgpu.createPackedMatrixTexture(shapeRC[0], shapeRC[1]);
    } else if (physicalTexType === PhysicalTextureType.PACKED_2X2_FLOAT16) {
      newTexture = this.gpgpu.createFloat16PackedMatrixTexture(shapeRC[0], shapeRC[1]);
    } else if (physicalTexType === PhysicalTextureType.UNPACKED_FLOAT32) {
      newTexture = this.gpgpu.createFloat32MatrixTexture(shapeRC[0], shapeRC[1]);
    } else if (physicalTexType === PhysicalTextureType.UNPACKED_FLOAT16) {
      newTexture = this.gpgpu.createFloat16MatrixTexture(shapeRC[0], shapeRC[1]);
    } else if (physicalTexType === PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE) {
      newTexture = this.gpgpu.createUnsignedBytesMatrixTexture(shapeRC[0], shapeRC[1]);
    }
    this.usedTextures[shapeKey].push(newTexture);
    this.numUsedTextures++;
    this._numBytesAllocated += texBytes;
    this.log();
    return newTexture;
  }
  releaseTexture(texture, shape, logicalTexType, isPacked) {
    if (this.freeTextures == null) {
      return;
    }
    const physicalTexType = getPhysicalFromLogicalTextureType(logicalTexType, isPacked);
    const shapeKey = getKeyFromTextureShape(shape, physicalTexType, isPacked);
    if (!(shapeKey in this.freeTextures)) {
      this.freeTextures[shapeKey] = [];
    }
    const texBytes = computeBytes(shape, physicalTexType, this.gpgpu.gl, this.gpgpu.textureConfig, isPacked);
    const deleteTexThreshold = env().get("WEBGL_DELETE_TEXTURE_THRESHOLD");
    if (deleteTexThreshold !== -1 && this._numBytesAllocated > deleteTexThreshold) {
      this.gpgpu.deleteMatrixTexture(texture);
      this._numBytesAllocated -= texBytes;
    } else {
      this.freeTextures[shapeKey].push(texture);
      this.numFreeTextures++;
      this._numBytesFree += texBytes;
    }
    this.numUsedTextures--;
    const texList = this.usedTextures[shapeKey];
    const texIndex = texList.indexOf(texture);
    if (texIndex < 0) {
      throw new Error("Cannot release a texture that was never provided by this texture manager");
    }
    texList.splice(texIndex, 1);
    this.log();
  }
  log() {
    if (!this.logEnabled) {
      return;
    }
    const total = this.numFreeTextures + this.numUsedTextures;
    console.log("Free/Used", `${this.numFreeTextures} / ${this.numUsedTextures}`, `(${total})`);
    const freeRatio = this._numBytesFree / this._numBytesAllocated;
    console.log(`Bytes allocated: ${this._numBytesAllocated}`);
    console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100 * freeRatio)}%)`);
  }
  get numBytesAllocated() {
    return this._numBytesAllocated;
  }
  get numBytesFree() {
    return this._numBytesFree;
  }
  getNumUsedTextures() {
    return this.numUsedTextures;
  }
  getNumFreeTextures() {
    return this.numFreeTextures;
  }
  dispose() {
    if (this.freeTextures == null) {
      return;
    }
    for (const texShape in this.freeTextures) {
      this.freeTextures[texShape].forEach((tex) => {
        this.gpgpu.deleteMatrixTexture(tex);
      });
    }
    for (const texShape in this.usedTextures) {
      this.usedTextures[texShape].forEach((tex) => {
        this.gpgpu.deleteMatrixTexture(tex);
      });
    }
    this.freeTextures = null;
    this.usedTextures = null;
    this.numUsedTextures = 0;
    this.numFreeTextures = 0;
    this._numBytesAllocated = 0;
    this._numBytesFree = 0;
  }
};
function numBytesForInternalFormat(gl, internalFormat) {
  const glany = gl;
  if (internalFormat === glany.R32F) {
    return 4;
  } else if (internalFormat === glany.R16F) {
    return 2;
  } else if (internalFormat === glany.RGBA32F) {
    return 16;
  } else if (internalFormat === gl.RGBA) {
    return 16;
  } else if (internalFormat === glany.RGBA16F) {
    return 8;
  }
  throw new Error(`Unknown internal format ${internalFormat}`);
}
function computeBytes(shape, physicalTexType, gl, textureConfig, isPacked) {
  const internalFormat = internalFormatForPhysicalTexType(physicalTexType, textureConfig);
  let numElements;
  if (isPacked) {
    const [packedWidth, packedHeight] = getPackedMatrixTextureShapeWidthHeight(shape[0], shape[1]);
    numElements = packedWidth * packedHeight;
  } else {
    const [width, height] = getUnpackedMatrixTextureShapeWidthHeight(shape[0], shape[1]);
    numElements = width * height;
  }
  const bytesPerElement2 = numBytesForInternalFormat(gl, internalFormat);
  return numElements * bytesPerElement2;
}
function internalFormatForPhysicalTexType(physicalTexType, textureConfig) {
  switch (physicalTexType) {
    case PhysicalTextureType.PACKED_2X2_FLOAT32:
      return getInternalFormatForPackedMatrixTexture(textureConfig);
    case PhysicalTextureType.PACKED_2X2_FLOAT16:
      return getInternalFormatForFloat16PackedMatrixTexture(textureConfig);
    case PhysicalTextureType.UNPACKED_FLOAT32:
      return getInternalFormatForFloat32MatrixTexture(textureConfig);
    case PhysicalTextureType.UNPACKED_FLOAT16:
      return getInternalFormatForFloat16MatrixTexture(textureConfig);
    case PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE:
      return getInternalFormatForUnsignedBytesMatrixTexture(textureConfig);
    default:
      throw new Error(`Unknown physical texture type ${physicalTexType}`);
  }
}
function getPhysicalTextureForRendering(isPacked) {
  if (env().getBool("WEBGL_RENDER_FLOAT32_ENABLED")) {
    if (isPacked) {
      return PhysicalTextureType.PACKED_2X2_FLOAT32;
    }
    return PhysicalTextureType.UNPACKED_FLOAT32;
  }
  if (isPacked) {
    return PhysicalTextureType.PACKED_2X2_FLOAT16;
  }
  return PhysicalTextureType.UNPACKED_FLOAT16;
}
function getPhysicalFromLogicalTextureType(logicalTexType, isPacked) {
  if (logicalTexType === TextureUsage.UPLOAD) {
    return PhysicalTextureType.PACKED_2X2_FLOAT32;
  } else if (logicalTexType === TextureUsage.RENDER || logicalTexType == null) {
    return getPhysicalTextureForRendering(isPacked);
  } else if (logicalTexType === TextureUsage.DOWNLOAD || logicalTexType === TextureUsage.PIXELS) {
    return PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE;
  }
  throw new Error(`Unknown logical texture type ${logicalTexType}`);
}
function getKeyFromTextureShape(shapeRowsCol, physicalTexType, isPacked) {
  return `${shapeRowsCol[0]}_${shapeRowsCol[1]}_${physicalTexType}_${isPacked}`;
}

// src/tfjs-backend-webgl/src/unaryop_gpu.ts
var UnaryOpProgram = class {
  constructor(aShape, opSnippet) {
    this.variableNames = ["A"];
    this.outputShape = aShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      float unaryOperation(float x) {
        ${opSnippet}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `;
  }
};
var CHECK_NAN_SNIPPET = `if (isnan(x)) return x;`;
var LINEAR = `return x;`;
var ABS = `return abs(x);`;
var ELU = `return (x >= 0.0) ? x : (exp(x) - 1.0);`;
var RELU = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : x;
`;
var RELU6 = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : min(6.0, x);
`;
var CLONE = "return x;";
var SIGMOID = `return 1.0 / (1.0 + exp(-1.0 * x));`;

// src/tfjs-backend-webgl/src/unaryop_packed_gpu.ts
var LINEAR2 = `return x;`;
var ELU2 = `
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`;
var RELU2 = `
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var RELU62 = `
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var SIGMOID2 = `return 1.0 / (1.0 + exp(-1.0 * x));`;
var UnaryOpPackedProgram = class {
  constructor(aShape, opSnippet) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = aShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      vec4 unaryOperation(vec4 x) {
        ${opSnippet}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/unpack_gpu.ts
var UnpackProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = false;
    this.outputShape = outputShape;
    const rank = outputShape.length;
    const channels = getChannels("rc", rank);
    const dtype = getCoordsDataType(rank);
    const sourceCoords = getSourceCoords(rank, channels);
    const innerDims = channels.slice(-2);
    const coords2 = rank <= 1 ? "rc" : `vec2(${innerDims.join(",")})`;
    this.userCode = `
      void main() {
        ${dtype} rc = getOutputCoords();
        vec4 packedInput = getA(${sourceCoords});

        setOutput(getChannel(packedInput, ${coords2}));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/backend_webgl.ts
var whereImpl2 = kernel_impls_exports.whereImpl;
var EPSILON_FLOAT322 = 1e-7;
var EPSILON_FLOAT162 = 1e-4;
var binaryCaches = {};
function getBinaryCache(webGLVersion) {
  if (webGLVersion in binaryCaches) {
    return binaryCaches[webGLVersion];
  }
  binaryCaches[webGLVersion] = {};
  return binaryCaches[webGLVersion];
}
var CPU_HANDOFF_SIZE_THRESHOLD = env().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");
var BEFORE_PAGING_CONSTANT = 600;
function numMBBeforeWarning() {
  if (env().global.screen == null) {
    return 1024;
  }
  return env().global.screen.height * env().global.screen.width * window.devicePixelRatio * BEFORE_PAGING_CONSTANT / 1024 / 1024;
}
var _MathBackendWebGL = class extends KernelBackend {
  constructor(gpgpu) {
    super();
    this.pendingRead = new WeakMap();
    this.pendingDisposal = new WeakSet();
    this.dataRefCount = new WeakMap();
    this.numBytesInGPU = 0;
    this.uploadWaitMs = 0;
    this.downloadWaitMs = 0;
    this.lastGlFlushTime = 0;
    this.warnedAboutMemory = false;
    this.pendingDeletes = 0;
    this.disposed = false;
    if (!env().getBool("HAS_WEBGL")) {
      throw new Error("WebGL is not supported on this device");
    }
    if (gpgpu == null) {
      const gl = getWebGLContext(env().getNumber("WEBGL_VERSION"));
      this.binaryCache = getBinaryCache(env().getNumber("WEBGL_VERSION"));
      this.gpgpu = new GPGPUContext(gl);
      this.canvas = gl.canvas;
      this.gpgpuCreatedLocally = true;
    } else {
      this.gpgpu = gpgpu;
      this.binaryCache = {};
      this.gpgpuCreatedLocally = false;
      this.canvas = gpgpu.gl.canvas;
    }
    this.textureManager = new TextureManager(this.gpgpu);
    this.numMBBeforeWarning = numMBBeforeWarning();
    this.texData = new DataStorage(this, engine());
  }
  nextDataId() {
    return _MathBackendWebGL.nextDataId++;
  }
  numDataIds() {
    return this.texData.numDataIds() - this.pendingDeletes;
  }
  write(values, shape, dtype) {
    if (env().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS") || env().getBool("DEBUG")) {
      this.checkNumericalProblems(values);
    }
    if (dtype === "complex64" && values != null) {
      throw new Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);
    }
    const dataId = { id: this.nextDataId() };
    this.texData.set(dataId, { shape, dtype, values, usage: TextureUsage.UPLOAD, refCount: 1 });
    return dataId;
  }
  refCount(dataId) {
    if (this.texData.has(dataId)) {
      const tensorData = this.texData.get(dataId);
      return tensorData.refCount;
    }
    return 0;
  }
  incRef(dataId) {
    const texData = this.texData.get(dataId);
    texData.refCount++;
  }
  decRef(dataId) {
    if (this.texData.has(dataId)) {
      const texData = this.texData.get(dataId);
      texData.refCount--;
    }
  }
  move(dataId, values, shape, dtype, refCount) {
    if (env().getBool("DEBUG")) {
      this.checkNumericalProblems(values);
    }
    if (dtype === "complex64") {
      throw new Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);
    }
    this.texData.set(dataId, { shape, dtype, values, usage: TextureUsage.UPLOAD, refCount });
  }
  disposeIntermediateTensorInfo(tensorInfo) {
    this.disposeData(tensorInfo.dataId);
  }
  readSync(dataId) {
    const texData = this.texData.get(dataId);
    const { values, dtype, complexTensorInfos, slice: slice3, shape, isPacked } = texData;
    if (slice3 != null) {
      let program;
      if (isPacked) {
        program = new UnaryOpPackedProgram(shape, CLONE);
      } else {
        program = new UnaryOpProgram(shape, CLONE);
      }
      const res = this.runWebGLProgram(program, [{ dataId, shape, dtype }], dtype);
      const data = this.readSync(res.dataId);
      this.disposeIntermediateTensorInfo(res);
      return data;
    }
    if (values != null) {
      return this.convertAndCacheOnCPU(dataId);
    }
    if (dtype === "string") {
      return values;
    }
    const shouldTimeProgram = this.activeTimers != null;
    let start;
    if (shouldTimeProgram) {
      start = util_exports.now();
    }
    let result;
    if (dtype === "complex64") {
      const realValues = this.readSync(complexTensorInfos.real.dataId);
      const imagValues = this.readSync(complexTensorInfos.imag.dataId);
      result = backend_util_exports.mergeRealAndImagArrays(realValues, imagValues);
    } else {
      result = this.getValuesFromTexture(dataId);
    }
    if (shouldTimeProgram) {
      this.downloadWaitMs += util_exports.now() - start;
    }
    return this.convertAndCacheOnCPU(dataId, result);
  }
  async read(dataId) {
    if (this.pendingRead.has(dataId)) {
      const subscribers2 = this.pendingRead.get(dataId);
      return new Promise((resolve) => subscribers2.push(resolve));
    }
    const texData = this.texData.get(dataId);
    const { values, shape, slice: slice3, dtype, complexTensorInfos, isPacked } = texData;
    if (slice3 != null) {
      let program;
      if (isPacked) {
        program = new UnaryOpPackedProgram(shape, CLONE);
      } else {
        program = new UnaryOpProgram(shape, CLONE);
      }
      const res = this.runWebGLProgram(program, [{ dataId, shape, dtype }], dtype);
      const data = this.read(res.dataId);
      this.disposeIntermediateTensorInfo(res);
      return data;
    }
    if (values != null) {
      return this.convertAndCacheOnCPU(dataId);
    }
    if (env().getBool("DEBUG")) {
      if (!env().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && env().getNumber("WEBGL_VERSION") === 2) {
        throw new Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);
      }
    }
    let buffer2 = null;
    let tmpDownloadTarget;
    if (dtype !== "complex64" && env().get("WEBGL_BUFFER_SUPPORTED")) {
      tmpDownloadTarget = this.decode(dataId);
      const tmpData = this.texData.get(tmpDownloadTarget.dataId);
      buffer2 = this.gpgpu.createBufferFromTexture(tmpData.texture, ...getDenseTexShape(shape));
    }
    this.pendingRead.set(dataId, []);
    if (dtype !== "complex64") {
      await this.gpgpu.createAndWaitForFence();
    }
    let vals;
    if (dtype === "complex64") {
      const ps = await Promise.all([
        this.read(complexTensorInfos.real.dataId),
        this.read(complexTensorInfos.imag.dataId)
      ]);
      const realValues = ps[0];
      const imagValues = ps[1];
      vals = backend_util_exports.mergeRealAndImagArrays(realValues, imagValues);
    } else if (buffer2 == null) {
      vals = this.getValuesFromTexture(dataId);
    } else {
      const size = util_exports.sizeFromShape(shape);
      vals = this.gpgpu.downloadFloat32MatrixFromBuffer(buffer2, size);
    }
    if (tmpDownloadTarget != null) {
      this.disposeIntermediateTensorInfo(tmpDownloadTarget);
    }
    if (buffer2 != null) {
      const gl = this.gpgpu.gl;
      callAndCheck(gl, () => gl.deleteBuffer(buffer2));
    }
    const dTypeVals = this.convertAndCacheOnCPU(dataId, vals);
    const subscribers = this.pendingRead.get(dataId);
    this.pendingRead.delete(dataId);
    subscribers.forEach((resolve) => resolve(dTypeVals));
    if (this.pendingDisposal.has(dataId)) {
      this.pendingDisposal.delete(dataId);
      if (this.disposeData(dataId)) {
        engine().removeDataId(dataId, this);
      }
      this.pendingDeletes--;
    }
    return dTypeVals;
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
  checkNumericalProblems(values) {
    if (values == null) {
      return;
    }
    for (let i = 0; i < values.length; i++) {
      const num = values[i];
      if (!canBeRepresented(num)) {
        if (env().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")) {
          throw Error(`The value ${num} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);
        }
        throw Error(`The value ${num} cannot be represented on this device.`);
      }
    }
  }
  getValuesFromTexture(dataId) {
    const { shape, dtype, isPacked } = this.texData.get(dataId);
    const size = util_exports.sizeFromShape(shape);
    if (env().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
      const tmpTarget = this.decode(dataId);
      const tmpData2 = this.texData.get(tmpTarget.dataId);
      const vals2 = this.gpgpu.downloadMatrixFromPackedTexture(tmpData2.texture, ...getDenseTexShape(shape)).subarray(0, size);
      this.disposeIntermediateTensorInfo(tmpTarget);
      return vals2;
    }
    const shouldUsePackedProgram = env().getBool("WEBGL_PACK") && isPacked === true;
    const outputShape = shouldUsePackedProgram ? getShapeAs3D(shape) : shape;
    const program = shouldUsePackedProgram ? new EncodeFloatPackedProgram(outputShape) : new EncodeFloatProgram(outputShape);
    const output = this.runWebGLProgram(program, [{ shape: outputShape, dtype, dataId }], "float32");
    const tmpData = this.texData.get(output.dataId);
    const vals = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(tmpData.texture, tmpData.texShape[0], tmpData.texShape[1]).subarray(0, size);
    this.disposeIntermediateTensorInfo(output);
    return vals;
  }
  timerAvailable() {
    return env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0;
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
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0) {
      const kernelMs = await Promise.all(flattenedActiveTimerQueries);
      res["kernelMs"] = util_exports.sum(kernelMs);
      res["getExtraProfileInfo"] = () => kernelMs.map((d, i) => ({ name: flattenedActiveTimerNames[i], ms: d })).map((d) => `${d.name}: ${d.ms}`).join(", ");
    } else {
      res["kernelMs"] = {
        error: "WebGL query timers are not supported in this environment."
      };
    }
    this.uploadWaitMs = 0;
    this.downloadWaitMs = 0;
    return res;
  }
  memory() {
    return {
      unreliable: false,
      numBytesInGPU: this.numBytesInGPU,
      numBytesInGPUAllocated: this.textureManager.numBytesAllocated,
      numBytesInGPUFree: this.textureManager.numBytesFree
    };
  }
  startTimer() {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0) {
      return this.gpgpu.beginQuery();
    }
    return { startMs: util_exports.now(), endMs: null };
  }
  endTimer(query) {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0) {
      this.gpgpu.endQuery();
      return query;
    }
    query.endMs = util_exports.now();
    return query;
  }
  async getQueryTime(query) {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0) {
      return this.gpgpu.waitForQueryAndGetTime(query);
    }
    const timerQuery = query;
    return timerQuery.endMs - timerQuery.startMs;
  }
  disposeData(dataId, force = false) {
    if (this.pendingDisposal.has(dataId)) {
      return false;
    }
    if (!this.texData.has(dataId)) {
      return true;
    }
    if (force) {
      this.texData.get(dataId).refCount = 0;
    } else {
      this.texData.get(dataId).refCount--;
    }
    if (!force && this.texData.get(dataId).refCount > 0) {
      return false;
    }
    if (this.pendingRead.has(dataId)) {
      this.pendingDisposal.add(dataId);
      this.pendingDeletes++;
      return false;
    }
    this.releaseGPUData(dataId);
    const { complexTensorInfos } = this.texData.get(dataId);
    if (complexTensorInfos != null) {
      this.disposeData(complexTensorInfos.real.dataId, force);
      this.disposeData(complexTensorInfos.imag.dataId, force);
    }
    this.texData.delete(dataId);
    return true;
  }
  releaseGPUData(dataId) {
    const { texture, dtype, texShape, usage, isPacked, slice: slice3 } = this.texData.get(dataId);
    const key = slice3 && slice3.origDataId || dataId;
    const refCount = this.dataRefCount.get(key);
    if (refCount > 1) {
      this.dataRefCount.set(key, refCount - 1);
    } else {
      this.dataRefCount.delete(key);
      if (texture != null) {
        this.numBytesInGPU -= this.computeBytes(texShape, dtype);
        this.textureManager.releaseTexture(texture, texShape, usage, isPacked);
      }
    }
    const texData = this.texData.get(dataId);
    texData.texture = null;
    texData.texShape = null;
    texData.isPacked = false;
    texData.slice = null;
  }
  getTexture(dataId) {
    this.uploadToGPU(dataId);
    return this.texData.get(dataId).texture;
  }
  getDataInfo(dataId) {
    return this.texData.get(dataId);
  }
  shouldExecuteOnCPU(inputs, sizeThreshold = CPU_HANDOFF_SIZE_THRESHOLD) {
    return env().getBool("WEBGL_CPU_FORWARD") && inputs.every((input) => this.texData.get(input.dataId).texture == null && util_exports.sizeFromShape(input.shape) < sizeThreshold);
  }
  getGPGPUContext() {
    return this.gpgpu;
  }
  where(condition) {
    backend_util_exports.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
    const condVals = condition.dataSync();
    return whereImpl2(condition.shape, condVals);
  }
  packedUnaryOp(x, op2, dtype) {
    const program = new UnaryOpPackedProgram(x.shape, op2);
    const outInfo = this.compileAndRun(program, [x], dtype);
    return engine().makeTensorFromDataId(outInfo.dataId, outInfo.shape, outInfo.dtype);
  }
  abs(x) {
    if (this.shouldExecuteOnCPU([x]) && x.dtype !== "complex64") {
      const outValues = simpleAbsImplCPU(this.texData.get(x.dataId).values);
      return this.makeOutput(x.shape, x.dtype, outValues);
    }
    if (env().getBool("WEBGL_PACK_UNARY_OPERATIONS")) {
      return this.packedUnaryOp(x, ABS, x.dtype);
    }
    const program = new UnaryOpProgram(x.shape, ABS);
    const outInfo = this.compileAndRun(program, [x]);
    return engine().makeTensorFromDataId(outInfo.dataId, outInfo.shape, outInfo.dtype);
  }
  makeTensorInfo(shape, dtype, values) {
    let dataId;
    if (dtype === "string" && values != null && values.length > 0 && util_exports.isString(values[0])) {
      const encodedValues = values.map((d) => util_exports.encodeString(d));
      dataId = this.write(encodedValues, shape, dtype);
    } else {
      dataId = this.write(values, shape, dtype);
    }
    this.texData.get(dataId).usage = null;
    return { dataId, shape, dtype };
  }
  makeOutput(shape, dtype, values) {
    const { dataId } = this.makeTensorInfo(shape, dtype, values);
    return engine().makeTensorFromDataId(dataId, shape, dtype, this);
  }
  unpackTensor(input) {
    const program = new UnpackProgram(input.shape);
    return this.runWebGLProgram(program, [input], input.dtype);
  }
  packTensor(input) {
    const program = new PackProgram(input.shape);
    const preventEagerUnpackingOutput = true;
    return this.runWebGLProgram(program, [input], input.dtype, null, preventEagerUnpackingOutput);
  }
  packedReshape(input, afterShape) {
    const input3DShape = [
      getBatchDim(input.shape),
      ...getRowsCols(input.shape)
    ];
    const input3D = {
      dtype: input.dtype,
      shape: input3DShape,
      dataId: input.dataId
    };
    const afterShapeAs3D = [
      getBatchDim(afterShape),
      ...getRowsCols(afterShape)
    ];
    const program = new ReshapePackedProgram(afterShapeAs3D, input3DShape);
    const preventEagerUnpackingOfOutput = true;
    const customValues = [input3DShape];
    const output = this.runWebGLProgram(program, [input3D], input.dtype, customValues, preventEagerUnpackingOfOutput);
    return { dataId: output.dataId, shape: afterShape, dtype: output.dtype };
  }
  decode(dataId) {
    const texData = this.texData.get(dataId);
    const { isPacked, shape, dtype } = texData;
    const shapeAs3D = getShapeAs3D(shape);
    let program;
    const denseTexShape = getDenseTexShape(shapeAs3D);
    if (isPacked) {
      program = new DecodeMatrixPackedProgram(shapeAs3D);
    } else {
      program = new DecodeMatrixProgram(shapeAs3D);
    }
    const preventEagerUnpackingOfOutput = true;
    const customValues = [denseTexShape];
    const out = this.runWebGLProgram(program, [{ shape: shapeAs3D, dtype, dataId }], dtype, customValues, preventEagerUnpackingOfOutput);
    return { dtype, shape, dataId: out.dataId };
  }
  runWebGLProgram(program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput = false) {
    const output = this.makeTensorInfo(program.outputShape, outputDtype);
    const outData = this.texData.get(output.dataId);
    if (program.packedOutput) {
      outData.isPacked = true;
    }
    if (program.outPackingScheme === PackingScheme.DENSE) {
      const texelShape = getDenseTexShape(program.outputShape);
      outData.texShape = texelShape.map((d) => d * 2);
    }
    if (program.outTexUsage != null) {
      outData.usage = program.outTexUsage;
    }
    if (util_exports.sizeFromShape(output.shape) === 0) {
      outData.values = util_exports.getTypedArrayFromDType(output.dtype, 0);
      return output;
    }
    const dataToDispose = [];
    const inputsData = inputs.map((input) => {
      if (input.dtype === "complex64") {
        throw new Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);
      }
      let texData = this.texData.get(input.dataId);
      if (texData.texture == null) {
        if (!program.packedInputs && util_exports.sizeFromShape(input.shape) <= env().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM")) {
          return {
            shape: input.shape,
            texData: null,
            isUniform: true,
            uniformValues: texData.values
          };
        }
        if (program.packedInputs) {
          texData.isPacked = true;
          texData.shape = input.shape;
        }
      } else if (!!texData.isPacked !== !!program.packedInputs) {
        input = texData.isPacked ? this.unpackTensor(input) : this.packTensor(input);
        dataToDispose.push(input);
        texData = this.texData.get(input.dataId);
      } else if (texData.isPacked && !isReshapeFree(texData.shape, input.shape)) {
        const savedInput = input;
        const targetShape = input.shape;
        input.shape = texData.shape;
        input = this.packedReshape(input, targetShape);
        dataToDispose.push(input);
        texData = this.texData.get(input.dataId);
        savedInput.shape = targetShape;
      }
      this.uploadToGPU(input.dataId);
      return { shape: input.shape, texData, isUniform: false };
    });
    this.uploadToGPU(output.dataId);
    const outputData = { shape: output.shape, texData: outData, isUniform: false };
    const key = makeShaderKey(program, inputsData, outputData);
    const binary = this.getAndSaveBinary(key, () => {
      return compileProgram(this.gpgpu, program, inputsData, outputData);
    });
    const shouldTimeProgram = this.activeTimers != null;
    let query;
    if (shouldTimeProgram) {
      query = this.startTimer();
    }
    runProgram(this.gpgpu, binary, inputsData, outputData, customUniformValues);
    dataToDispose.forEach((info) => this.disposeIntermediateTensorInfo(info));
    if (shouldTimeProgram) {
      query = this.endTimer(query);
      this.activeTimers.push({ name: program.constructor.name, query: this.getQueryTime(query) });
    }
    const glFlushThreshold = env().get("WEBGL_FLUSH_THRESHOLD");
    if (glFlushThreshold > 0) {
      const time = util_exports.now();
      if (time - this.lastGlFlushTime > glFlushThreshold) {
        this.gpgpu.gl.flush();
        this.lastGlFlushTime = time;
      }
    }
    if (!env().getBool("WEBGL_LAZILY_UNPACK") && outData.isPacked && preventEagerUnpackingOfOutput === false) {
      const unpacked = this.unpackTensor(output);
      this.disposeIntermediateTensorInfo(output);
      return unpacked;
    }
    return output;
  }
  compileAndRun(program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput = false) {
    outputDtype = outputDtype || inputs[0].dtype;
    const outInfo = this.runWebGLProgram(program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput);
    return outInfo;
  }
  getAndSaveBinary(key, getBinary) {
    if (!(key in this.binaryCache)) {
      this.binaryCache[key] = getBinary();
    }
    return this.binaryCache[key];
  }
  getTextureManager() {
    return this.textureManager;
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    if (!env().getBool("IS_TEST")) {
      const allKeys = Object.keys(this.binaryCache);
      allKeys.forEach((key) => {
        this.gpgpu.deleteProgram(this.binaryCache[key].webGLProgram);
        delete this.binaryCache[key];
      });
    }
    this.textureManager.dispose();
    if (this.canvas != null && (typeof HTMLCanvasElement !== "undefined" && this.canvas instanceof HTMLCanvasElement)) {
      this.canvas.remove();
    } else {
      this.canvas = null;
    }
    if (this.gpgpuCreatedLocally) {
      this.gpgpu.program = null;
      this.gpgpu.dispose();
    }
    this.disposed = true;
  }
  floatPrecision() {
    if (this.floatPrecisionValue == null) {
      this.floatPrecisionValue = tidy(() => {
        if (!env().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
          const debugFlag = env().getBool("DEBUG");
          env().set("DEBUG", false);
          const underflowCheckValue = this.abs(scalar(1e-8)).dataSync()[0];
          env().set("DEBUG", debugFlag);
          if (underflowCheckValue > 0) {
            return 32;
          }
        }
        return 16;
      });
    }
    return this.floatPrecisionValue;
  }
  epsilon() {
    return this.floatPrecision() === 32 ? EPSILON_FLOAT322 : EPSILON_FLOAT162;
  }
  uploadToGPU(dataId) {
    const texData = this.texData.get(dataId);
    const { shape, dtype, values, texture, usage, isPacked } = texData;
    if (texture != null) {
      return;
    }
    const shouldTimeProgram = this.activeTimers != null;
    let start;
    if (shouldTimeProgram) {
      start = util_exports.now();
    }
    let texShape = texData.texShape;
    if (texShape == null) {
      texShape = getTextureShapeFromLogicalShape(shape, isPacked);
      texData.texShape = texShape;
    }
    if (values != null) {
      const shapeAs3D = getShapeAs3D(shape);
      let program;
      let width = texShape[1], height = texShape[0];
      const isByteArray = values instanceof Uint8Array || values instanceof Uint8ClampedArray;
      if (isPacked) {
        [width, height] = getPackedMatrixTextureShapeWidthHeight(texShape[0], texShape[1]);
        program = new EncodeMatrixPackedProgram(shapeAs3D, isByteArray);
      } else {
        program = new EncodeMatrixProgram(shapeAs3D, isByteArray);
      }
      const tempDenseInputHandle = this.makeTensorInfo([height, width], dtype);
      if (isByteArray) {
        this.texData.get(tempDenseInputHandle.dataId).usage = TextureUsage.PIXELS;
      } else {
        this.texData.get(tempDenseInputHandle.dataId).usage = TextureUsage.UPLOAD;
      }
      this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(tempDenseInputHandle.dataId), width, height, values);
      const customValues = [[height, width]];
      const preventEagerUnpacking = true;
      const encodedOutputTarget = this.runWebGLProgram(program, [tempDenseInputHandle], dtype, customValues, preventEagerUnpacking);
      const outputTexData = this.texData.get(encodedOutputTarget.dataId);
      texData.texture = outputTexData.texture;
      texData.texShape = outputTexData.texShape;
      texData.isPacked = outputTexData.isPacked;
      texData.usage = outputTexData.usage;
      this.disposeIntermediateTensorInfo(tempDenseInputHandle);
      this.texData.delete(encodedOutputTarget.dataId);
      texData.values = null;
      if (shouldTimeProgram) {
        this.uploadWaitMs += util_exports.now() - start;
      }
    } else {
      const newTexture = this.acquireTexture(texShape, usage, dtype, isPacked);
      texData.texture = newTexture;
    }
  }
  convertAndCacheOnCPU(dataId, float32Values) {
    const texData = this.texData.get(dataId);
    const { dtype } = texData;
    this.releaseGPUData(dataId);
    if (float32Values != null) {
      texData.values = float32ToTypedArray(float32Values, dtype);
    }
    return texData.values;
  }
  acquireTexture(texShape, texType, dtype, isPacked) {
    this.numBytesInGPU += this.computeBytes(texShape, dtype);
    if (!this.warnedAboutMemory && this.numBytesInGPU > this.numMBBeforeWarning * 1024 * 1024) {
      const mb = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
      this.warnedAboutMemory = true;
      console.warn(`High memory usage in GPU: ${mb} MB, most likely due to a memory leak`);
    }
    return this.textureManager.acquireTexture(texShape, texType, isPacked);
  }
  computeBytes(shape, dtype) {
    return shape[0] * shape[1] * util_exports.bytesPerElement(dtype);
  }
};
var MathBackendWebGL = _MathBackendWebGL;
MathBackendWebGL.nextDataId = 0;
function float32ToTypedArray(a, dtype) {
  if (dtype === "float32" || dtype === "complex64") {
    return a;
  } else if (dtype === "int32" || dtype === "bool") {
    const result = dtype === "int32" ? new Int32Array(a.length) : new Uint8Array(a.length);
    for (let i = 0; i < result.length; ++i) {
      result[i] = Math.round(a[i]);
    }
    return result;
  } else {
    throw new Error(`Unknown dtype ${dtype}`);
  }
}

// src/tfjs-backend-webgl/src/version.ts
var version2 = "0.0.0";

// src/tfjs-backend-webgl/src/webgl.ts
function forceHalfFloat() {
  env().set("WEBGL_FORCE_F16_TEXTURES", true);
}

// src/tfjs-backend-webgl/src/base.ts
if (device_util_exports.isBrowser()) {
  registerBackend("webgl", () => new MathBackendWebGL(), 2);
}
var webgl = { forceHalfFloat };

// src/tfjs-backend-webgl/src/binaryop_gpu.ts
var CHECK_NAN_SNIPPET2 = `
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;
var BinaryOpProgram = class {
  constructor(op2, aShape, bShape) {
    this.variableNames = ["A", "B"];
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      float binaryOperation(float a, float b) {
        ${op2}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/binaryop_packed_gpu.ts
var CHECK_NAN_SNIPPET3 = `
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;
var BinaryOpPackedProgram = class {
  constructor(op2, aShape, bShape, checkOutOfBounds = false) {
    this.variableNames = ["A", "B"];
    this.supportsBroadcasting = true;
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    const rank = this.outputShape.length;
    this.enableShapeUniforms = useShapeUniforms(rank);
    let checkOutOfBoundsString = "";
    if (checkOutOfBounds) {
      if (rank === 0 || util_exports.sizeFromShape(this.outputShape) === 1) {
        checkOutOfBoundsString = `
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;
      } else {
        const dtype = getCoordsDataType(rank);
        checkOutOfBoundsString = `
          ${dtype} coords = getOutputCoords();
        `;
        if (rank === 1) {
          if (this.enableShapeUniforms) {
            checkOutOfBoundsString += `
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;
          } else {
            checkOutOfBoundsString += `
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;
          }
        } else {
          const channels = getChannels("coords", rank);
          if (this.enableShapeUniforms) {
            checkOutOfBoundsString += `
            bool nextRowOutOfBounds =
              (${channels[rank - 2]} + 1) >= outShape[${rank} - 2];
            bool nextColOutOfBounds =
              (${channels[rank - 1]} + 1) >= outShape[${rank} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `;
          } else {
            checkOutOfBoundsString += `
            bool nextRowOutOfBounds =
              (${channels[rank - 2]} + 1) >= ${this.outputShape[rank - 2]};
            bool nextColOutOfBounds =
              (${channels[rank - 1]} + 1) >= ${this.outputShape[rank - 1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `;
          }
        }
      }
    }
    this.userCode = `
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${op2}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${checkOutOfBoundsString}

        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Identity.ts
function identity2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  backend.incRef(x.dataId);
  return { dataId: x.dataId, shape: x.shape, dtype: x.dtype };
}
var identityConfig = {
  kernelName: Identity,
  backendName: "webgl",
  kernelFunc: identity2
};

// src/tfjs-backend-webgl/src/kernels/Complex.ts
function complex3(args) {
  const { inputs, backend } = args;
  const { real: real4, imag: imag3 } = inputs;
  const complexInfo = backend.makeTensorInfo(real4.shape, "complex64");
  const complex4 = backend.texData.get(complexInfo.dataId);
  const realTensorInfo = identity2({ inputs: { x: real4 }, backend });
  const imagTensorInfo = identity2({ inputs: { x: imag3 }, backend });
  complex4.complexTensorInfos = { real: realTensorInfo, imag: imagTensorInfo };
  return complexInfo;
}
var complexConfig = {
  kernelName: Complex,
  backendName: "webgl",
  kernelFunc: complex3
};

// src/tfjs-backend-webgl/src/kernels/LeakyRelu.ts
var LEAKYRELU = `return (a < 0.) ? b * a : a;`;
var LEAKYRELU_PACKED = `
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;
function leakyRelu2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { alpha } = attrs;
  const $alpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(alpha, "float32"));
  const program = env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new BinaryOpPackedProgram(LEAKYRELU_PACKED, x.shape, $alpha.shape) : new BinaryOpProgram(LEAKYRELU, x.shape, $alpha.shape);
  const result = backend.runWebGLProgram(program, [x, $alpha], "float32");
  backend.disposeIntermediateTensorInfo($alpha);
  return result;
}
var leakyReluConfig = {
  kernelName: LeakyRelu,
  backendName: "webgl",
  kernelFunc: leakyRelu2
};

// src/tfjs-backend-webgl/src/kernels/Prelu.ts
var PRELU = `return (a < 0.) ? b * a : a;`;
var PRELU_PACKED = `
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;
function prelu2(args) {
  const { inputs, backend } = args;
  const { x, alpha } = inputs;
  const program = env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new BinaryOpPackedProgram(PRELU_PACKED, x.shape, alpha.shape) : new BinaryOpProgram(PRELU, x.shape, alpha.shape);
  return backend.runWebGLProgram(program, [x, alpha], "float32");
}
var preluConfig = {
  kernelName: Prelu,
  backendName: "webgl",
  kernelFunc: prelu2
};

// src/tfjs-backend-webgl/src/kernel_utils/kernel_funcs_utils.ts
var CHECK_NAN_SNIPPET_UNARY = `if (isnan(x)) return x;`;
var CHECK_NAN_SNIPPET_BINARY = `
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;
var CHECK_NAN_SNIPPET_BINARY_PACKED = `
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;
function unaryKernelFunc2({ opSnippet, packedOpSnippet, cpuKernelImpl, dtype }) {
  return ({ inputs, backend }) => {
    const { x } = inputs;
    const webglBackend = backend;
    const $dtype = dtype || x.dtype;
    if (webglBackend.shouldExecuteOnCPU([x]) && cpuKernelImpl != null) {
      const xData = webglBackend.texData.get(x.dataId);
      const outValues = cpuKernelImpl(xData.values, $dtype);
      return webglBackend.makeTensorInfo(x.shape, $dtype, outValues);
    }
    const shouldUsePackedProgram = env().getBool("WEBGL_PACK_UNARY_OPERATIONS") && packedOpSnippet != null;
    let program;
    if (shouldUsePackedProgram) {
      program = new UnaryOpPackedProgram(x.shape, packedOpSnippet);
    } else {
      program = new UnaryOpProgram(x.shape, opSnippet);
    }
    return webglBackend.runWebGLProgram(program, [x], $dtype);
  };
}
function binaryKernelFunc2({
  opSnippet,
  packedOpSnippet,
  checkOutOfBounds = false,
  supportsComplex = false,
  cpuKernelImpl,
  dtype
}) {
  return ({ inputs, backend }) => {
    const { a, b } = inputs;
    const webglBackend = backend;
    if (supportsComplex && a.dtype === "complex64") {
      const aData = webglBackend.texData.get(a.dataId);
      const bData = webglBackend.texData.get(b.dataId);
      const [real4, imag3] = [
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
        const program2 = new BinaryOpProgram(opSnippet, a.shape, b.shape);
        return webglBackend.runWebGLProgram(program2, [aHandle, bHandle], upcastType(aPart.dtype, bPart.dtype));
      });
      const complexOutput = complex3({ inputs: { real: real4, imag: imag3 }, backend: webglBackend });
      webglBackend.disposeIntermediateTensorInfo(real4);
      webglBackend.disposeIntermediateTensorInfo(imag3);
      return complexOutput;
    }
    const $dtype = dtype || upcastType(a.dtype, b.dtype);
    if ((a.dtype === "string" || b.dtype === "string" || webglBackend.shouldExecuteOnCPU([a, b])) && cpuKernelImpl != null) {
      const aVals = webglBackend.texData.get(a.dataId).values;
      const bVals = webglBackend.texData.get(b.dataId).values;
      const decodedAVals = a.dtype === "string" ? backend_util_exports.fromUint8ToStringArray(aVals) : aVals;
      const decodedBVals = a.dtype === "string" ? backend_util_exports.fromUint8ToStringArray(bVals) : bVals;
      const [outValues, outShape] = cpuKernelImpl(a.shape, b.shape, decodedAVals, decodedBVals, $dtype);
      const out = webglBackend.makeTensorInfo(outShape, $dtype);
      const outData = webglBackend.texData.get(out.dataId);
      outData.values = outValues;
      return out;
    }
    const shouldUsePackedProgram = env().getBool("WEBGL_PACK_BINARY_OPERATIONS") && packedOpSnippet != null;
    let program;
    if (shouldUsePackedProgram) {
      program = new BinaryOpPackedProgram(packedOpSnippet, a.shape, b.shape, checkOutOfBounds);
    } else {
      program = new BinaryOpProgram(opSnippet, a.shape, b.shape);
    }
    return webglBackend.runWebGLProgram(program, [a, b], $dtype);
  };
}
function mapActivationToShaderProgram(activation, packed = false) {
  if (activation === "linear") {
    if (packed) {
      return LINEAR2;
    }
    return LINEAR;
  } else if (activation === "relu") {
    if (packed) {
      return RELU2;
    }
    return RELU;
  } else if (activation === "elu") {
    if (packed) {
      return ELU2;
    }
    return ELU;
  } else if (activation === "relu6") {
    if (packed) {
      return RELU62;
    }
    return RELU6;
  } else if (activation === "prelu") {
    if (packed) {
      return PRELU_PACKED;
    }
    return PRELU;
  } else if (activation === "leakyrelu") {
    if (packed) {
      return LEAKYRELU_PACKED;
    }
    return LEAKYRELU;
  } else if (activation === "sigmoid") {
    if (packed) {
      return SIGMOID2;
    }
    return SIGMOID;
  }
  throw new Error(`Activation ${activation} has not been implemented for the WebGL backend.`);
}

// src/tfjs-backend-webgl/src/mulmat_packed_gpu.ts
var MatMulPackedProgram = class {
  constructor(aShape, bShape, outputShape, transposeA = false, transposeB = false, addBias = false, activation = null, hasPreluActivation = false, hasLeakyreluActivation = false) {
    this.variableNames = ["matrixA", "matrixB"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const sharedDim = transposeA ? aShape[1] : aShape[2];
    const sharedDimensionPacked = Math.ceil(sharedDim / 2);
    const aSample = transposeA ? "i * 2, rc.y" : "rc.y, i * 2";
    const bSample = transposeB ? "rc.z, i * 2" : "i * 2, rc.z";
    const aSwizzle = transposeA ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"];
    const bSwizzle = transposeB ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"];
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivation) {
        activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
      } else if (hasLeakyreluActivation) {
        activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${activation}
        }`;
      } else {
        activationSnippet = `vec4 activation(vec4 x) {
          ${activation}
        }`;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyreluActivation) {
      this.variableNames.push("leakyreluAlpha");
    }
    let batchASnippet = "rc.x";
    let batchBSnippet = "rc.x";
    if (aShape[0] < bShape[0]) {
      batchASnippet = `int(min(float(rc.x), ${aShape[0] - 1}.))`;
    } else if (bShape[0] < aShape[0]) {
      batchBSnippet = `int(min(float(rc.x), ${bShape[0] - 1}.))`;
    }
    this.userCode = `
      ${activationSnippet}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${sharedDimensionPacked}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${sharedDimensionPacked}; i++) {
          int batchA = ${batchASnippet};
          int batchB = ${batchBSnippet};
          vec4 a = getMatrixA(batchA, ${aSample});
          vec4 b = getMatrixB(batchB, ${bSample});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${aSwizzle[0]} * ${bSwizzle[0]});
          result += (${aSwizzle[1]} * ${bSwizzle[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${addBiasSnippet}

        ${applyActivationSnippet}

        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/binaryop_complex_gpu.ts
var COMPLEX_MULTIPLY = {
  REAL: "return areal * breal - aimag * bimag;",
  IMAG: "return areal * bimag + aimag * breal;"
};
var BinaryOpComplexProgram = class {
  constructor(op2, aShape, bShape) {
    this.variableNames = ["AReal", "AImag", "BReal", "BImag"];
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    this.userCode = `
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${op2}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Multiply.ts
var MUL = "return a * b;";
function multiply2(args) {
  const { inputs, backend } = args;
  const { a, b } = inputs;
  const dtype = backend_util_exports.upcastType(a.dtype, b.dtype);
  if (a.dtype === "complex64") {
    const aData = backend.texData.get(a.dataId);
    const bData = backend.texData.get(b.dataId);
    const realProgram = new BinaryOpComplexProgram(COMPLEX_MULTIPLY.REAL, a.shape, b.shape);
    const imagProgram = new BinaryOpComplexProgram(COMPLEX_MULTIPLY.IMAG, a.shape, b.shape);
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
    const realPart = backend.runWebGLProgram(realProgram, inputs2, "float32");
    const imagPart = backend.runWebGLProgram(imagProgram, inputs2, "float32");
    const complexOutput = complex3({ inputs: { real: realPart, imag: imagPart }, backend });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(imagPart);
    return complexOutput;
  }
  if (backend.shouldExecuteOnCPU([a, b])) {
    const aData = backend.texData.get(a.dataId);
    const bData = backend.texData.get(b.dataId);
    const [outValues, outShape] = multiplyImplCPU(a.shape, b.shape, aData.values, bData.values, dtype);
    const out = backend.makeTensorInfo(outShape, dtype);
    const outData = backend.texData.get(out.dataId);
    outData.values = outValues;
    return out;
  }
  let program;
  if (env().getBool("WEBGL_PACK_BINARY_OPERATIONS")) {
    program = new BinaryOpPackedProgram(MUL, a.shape, b.shape);
  } else {
    program = new BinaryOpProgram(MUL, a.shape, b.shape);
  }
  return backend.runWebGLProgram(program, [a, b], dtype);
}
var multiplyConfig = {
  kernelName: Multiply,
  backendName: "webgl",
  kernelFunc: multiply2
};

// src/tfjs-backend-webgl/src/kernel_utils/reshape.ts
function packedReshape(input, afterShape, backend) {
  const input3DShape = [
    getBatchDim(input.shape),
    ...getRowsCols(input.shape)
  ];
  const input3D = {
    dtype: input.dtype,
    shape: input3DShape,
    dataId: input.dataId
  };
  const afterShapeAs3D = [
    getBatchDim(afterShape),
    ...getRowsCols(afterShape)
  ];
  const program = new ReshapePackedProgram(afterShapeAs3D, input3DShape);
  const preventEagerUnpackingOfOutput = true;
  const customValues = [input3DShape];
  const output = backend.runWebGLProgram(program, [input3D], input.dtype, customValues, preventEagerUnpackingOfOutput);
  return { dataId: output.dataId, shape: afterShape, dtype: output.dtype };
}

// src/tfjs-backend-webgl/src/kernels/Reshape.ts
function reshape2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { shape } = attrs;
  const webglBackend = backend;
  const xSize = util_exports.sizeFromShape(x.shape);
  const $shape = util_exports.inferFromImplicitShape(shape, xSize);
  const $xSize = util_exports.sizeFromShape($shape);
  util_exports.assert(xSize === $xSize, () => `The new shape (${$shape}) has ${$xSize} elements and the old shape (${x.shape}) has ${xSize} elements. The new shape and old shape must have the same number of elements.`);
  const xTexData = webglBackend.texData.get(x.dataId);
  if (xTexData.isPacked && !isReshapeFree(x.shape, $shape) && !(xTexData.texture !== null && isReshapeFree(xTexData.shape, $shape))) {
    return packedReshape(x, $shape, webglBackend);
  }
  webglBackend.incRef(x.dataId);
  return { dataId: x.dataId, shape: $shape, dtype: x.dtype };
}
var reshapeConfig = {
  kernelName: Reshape,
  backendName: "webgl",
  kernelFunc: reshape2
};

// src/tfjs-backend-webgl/src/mean_gpu.ts
var MeanProgram = class {
  constructor(reduceInfo, divisor) {
    this.variableNames = ["x"];
    const { windowSize, batchSize, inSize, outSize } = reduceInfo;
    this.outputShape = [batchSize, outSize];
    const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
    const windowSizeVec4Remainder = windowSize % 4;
    let updateSnippet = `sumValue += dot(values, ones);`;
    if (divisor != null) {
      const denominator = 1 / divisor;
      updateSnippet = `sumValue += dot(values * ${util_exports.isInt(denominator) ? denominator.toPrecision(2) : denominator}, ones);`;
    }
    let checkOutOfBounds = "";
    if (inSize % windowSize > 0) {
      checkOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return 0.0;
        }
      `;
    }
    this.userCode = `
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${checkOutOfBounds}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        float sumValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${updateSnippet}
        }
        setOutput(sumValue);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/reduce_gpu.ts
var ReduceProgram = class {
  constructor(reduceInfo, reduceType) {
    this.variableNames = ["x"];
    const { windowSize, batchSize, inSize, outSize } = reduceInfo;
    this.outputShape = [batchSize, outSize];
    let initializationValue = "0.0";
    let compareOp = ``;
    if (reduceType === "prod") {
      initializationValue = "1.0";
    } else if (reduceType === "min") {
      initializationValue = "1.0 / 1e-20";
      compareOp = `min`;
    } else if (reduceType === "max") {
      initializationValue = "-1.0 / 1e-20";
      compareOp = `max`;
    }
    let returnValue = `${reduceType}(${reduceType}(${reduceType}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;
    if (reduceType === "sum") {
      returnValue = `sumValue`;
    } else if (reduceType === "prod") {
      returnValue = `prodValue`;
    } else if (reduceType === "all") {
      returnValue = `allValue`;
    } else if (reduceType === "any") {
      returnValue = `anyValue`;
    }
    const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
    const windowSizeVec4Remainder = windowSize % 4;
    let updateSnippet = `
      if (${reduceType === "sum"}) {
        sumValue += dot(values, ones);
      } else if (${reduceType === "prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
        if (${reduceType === "min"} || ${reduceType === "max"}) {
          minMaxValue = ${compareOp}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `;
    let vecType = `vec4`;
    if (reduceType === "all") {
      initializationValue = "1.0";
      updateSnippet = `
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `;
      vecType = `bvec4`;
    } else if (reduceType === "any") {
      initializationValue = "0.0";
      updateSnippet = `
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `;
      vecType = `bvec4`;
    }
    let checkOutOfBounds = "";
    if (inSize % windowSize > 0) {
      checkOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return initializationValue;
        }
      `;
    }
    this.userCode = `
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${checkOutOfBounds}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        vec4 minMaxValue = vec4(${initializationValue});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${updateSnippet}
        }
        setOutput(${returnValue});
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernel_utils/reduce.ts
function getReductionStages(inShape) {
  const stages = [];
  while (stages.length === 0 || stages[stages.length - 1].outSize !== 1) {
    const outSize = stages.length ? stages[stages.length - 1].outSize : inShape[1];
    const windowSize = backend_util_exports.computeOptimalWindowSize(outSize);
    stages.push({
      inSize: outSize,
      windowSize,
      outSize: Math.ceil(outSize / windowSize)
    });
  }
  return stages;
}
function reduce(x, dtype, reductionType, backend) {
  const reductionStages = getReductionStages(x.shape);
  let result = x;
  for (let i = 0; i < reductionStages.length; i++) {
    const { inSize, windowSize, outSize } = reductionStages[i];
    let program;
    let previousResult;
    if (reductionType === "mean") {
      program = i === 0 ? new MeanProgram({ windowSize, inSize, batchSize: x.shape[0], outSize }, inSize) : new MeanProgram({ windowSize, inSize, batchSize: x.shape[0], outSize });
    } else {
      program = new ReduceProgram({ windowSize, inSize, batchSize: x.shape[0], outSize }, reductionType);
    }
    previousResult = result;
    result = backend.runWebGLProgram(program, [result], dtype);
    if (previousResult.dataId !== x.dataId) {
      backend.disposeIntermediateTensorInfo(previousResult);
    }
  }
  return result;
}

// src/tfjs-backend-webgl/src/transpose_gpu.ts
var TransposeProgram = class {
  constructor(aShape, newDim) {
    this.variableNames = ["A"];
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[newDim[i]];
    }
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    const dtype = getCoordsDataType(this.rank);
    const switched = getSwitchedCoords(newDim);
    this.userCode = `
    void main() {
      ${dtype} resRC = getOutputCoords();
      setOutput(getA(${switched}));
    }
    `;
  }
};
function getSwitchedCoords(newDim) {
  const rank = newDim.length;
  if (rank > 6) {
    throw Error(`Transpose for rank ${rank} is not yet supported`);
  }
  const originalOrder = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"];
  const switchedCoords = new Array(rank);
  for (let i = 0; i < newDim.length; i++) {
    switchedCoords[newDim[i]] = originalOrder[i];
  }
  return switchedCoords.join();
}

// src/tfjs-backend-webgl/src/transpose_packed_gpu.ts
var TransposePackedProgram = class {
  constructor(aShape, newDim) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[newDim[i]];
    }
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    if (this.rank > 6) {
      throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);
    }
    const dtype = getCoordsDataType(this.rank);
    const outputOrder = getVecChannels("rc", this.rank);
    const switchedOrder = new Array(this.rank);
    for (let i = 0; i < newDim.length; i++) {
      switchedOrder[newDim[i]] = outputOrder[i];
    }
    const innerDims = `vec2(${switchedOrder.slice(-2).join()})`;
    const nextColumn = `++${outputOrder[this.rank - 1]} < ${outputShape[this.rank - 1]}`;
    const getc = `getChannel(getA(${switchedOrder.join()}), ${innerDims})`;
    this.userCode = `
    void main() {
      ${dtype} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${getc};
      if(${nextColumn}) {
        result[1] = ${getc};
      }
      --${outputOrder[this.rank - 1]};
      if(++${outputOrder[this.rank - 2]} < ${outputShape[this.rank - 2]}) {
        result[2] = ${getc};
        if(${nextColumn}) {
          result[3] = ${getc};
        }
      }
      setOutput(result);
    }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Transpose_impl.ts
function transposeImpl2(x, perm, backend) {
  const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new TransposePackedProgram(x.shape, perm) : new TransposeProgram(x.shape, perm);
  return backend.runWebGLProgram(program, [x], x.dtype);
}

// src/tfjs-backend-webgl/src/kernels/Sum_impl.ts
function sumImpl(x, axis, keepDims, backend) {
  const reductionIndices = axis;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(reductionIndices, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  const sumInputIsTransposed = permutedAxes != null;
  let sumInput = x;
  if (sumInputIsTransposed) {
    sumInput = transposeImpl2(x, permutedAxes, backend);
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims("sum", axes, xRank);
  const [sumOutShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(sumInput.shape, axes);
  let outShape = sumOutShape;
  if (keepDims) {
    outShape = backend_util_exports.expandShapeToKeepDim(sumOutShape, origAxes);
  }
  const inSize = util_exports.sizeFromShape(reduceShape);
  const xSize = util_exports.sizeFromShape(x.shape);
  const batchSize = xSize / inSize;
  const reshapedInput = reshape2({ inputs: { x: sumInput }, attrs: { shape: [batchSize, inSize] }, backend });
  const outType = sumOutType(x.dtype);
  const reduced = reduce(reshapedInput, outType, "sum", backend);
  const out = reshape2({ inputs: { x: reduced }, attrs: { shape: outShape }, backend });
  backend.disposeIntermediateTensorInfo(reshapedInput);
  backend.disposeIntermediateTensorInfo(reduced);
  if (sumInputIsTransposed) {
    backend.disposeIntermediateTensorInfo(sumInput);
  }
  return out;
}

// src/tfjs-backend-webgl/src/kernels/Sum.ts
function sum3(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  return sumImpl(x, axis, keepDims, backend);
}
var sumConfig = {
  kernelName: Sum,
  backendName: "webgl",
  kernelFunc: sum3
};

// src/tfjs-backend-webgl/src/kernels/Transpose.ts
function transpose3(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { perm } = attrs;
  const webglBackend = backend;
  const xRank = x.shape.length;
  const newShape = new Array(xRank);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = x.shape[perm[i]];
  }
  let out;
  if (webglBackend.shouldExecuteOnCPU([x])) {
    const xTexData = webglBackend.texData.get(x.dataId);
    const values = xTexData.values;
    const outValues = transposeImplCPU(values, x.shape, x.dtype, perm, newShape);
    out = webglBackend.makeTensorInfo(newShape, x.dtype);
    const outData = webglBackend.texData.get(out.dataId);
    outData.values = outValues;
  } else {
    out = transposeImpl2(x, perm, webglBackend);
  }
  return out;
}
var transposeConfig = {
  kernelName: Transpose,
  backendName: "webgl",
  kernelFunc: transpose3
};

// src/tfjs-backend-webgl/src/kernels/BatchMatMul_impl.ts
var MATMUL_SHARED_DIM_THRESHOLD = 1e3;
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
  const sharedDim = transposeA ? a3d.shape[1] : a3d.shape[2];
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  const hasLeakyreluAlpha = activation === "leakyrelu";
  const fusedActivation = activation != null ? mapActivationToShaderProgram(activation, true) : null;
  const containsFusedOps = hasBias || hasPreluActivationWeights || hasLeakyreluAlpha || fusedActivation != null;
  let out;
  if ((outerShapeA === 1 || outerShapeB === 1) && sharedDim > MATMUL_SHARED_DIM_THRESHOLD && containsFusedOps === false) {
    let aVec = a3d;
    let bVec = b3d;
    if (transposeA) {
      aVec = transpose3({ inputs: { x: a3d }, backend, attrs: { perm: [0, 2, 1] } });
      intermediates.push(aVec);
    }
    if (transposeB) {
      bVec = transpose3({ inputs: { x: b3d }, backend, attrs: { perm: [0, 2, 1] } });
      intermediates.push(bVec);
    }
    const shouldReshapeA = outerShapeB !== 1;
    const shouldReshapeB = outerShapeB === 1;
    let aVec3d = aVec;
    if (shouldReshapeA) {
      aVec3d = reshape2({
        inputs: { x: aVec },
        backend,
        attrs: { shape: [batchDim, sharedDim, 1] }
      });
      intermediates.push(aVec3d);
    }
    const axis = outerShapeB === 1 ? 2 : 1;
    let bVec3d = bVec;
    if (shouldReshapeB) {
      bVec3d = reshape2({
        inputs: { x: bVec },
        backend,
        attrs: { shape: [batchDim, 1, sharedDim] }
      });
      intermediates.push(bVec3d);
    }
    const product = multiply2({ inputs: { a: aVec3d, b: bVec3d }, backend });
    out = sum3({ inputs: { x: product }, backend, attrs: { axis, keepDims: true } });
    intermediates.push(product);
  } else {
    const dtype = upcastType(a.dtype, b.dtype);
    const program = new MatMulPackedProgram(a3dShape, b3dShape, [batchDim, outerShapeA, outerShapeB], transposeA, transposeB, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
    const inputs = [a3d, b3d];
    if (bias != null) {
      inputs.push(bias);
    }
    if (hasPreluActivationWeights) {
      inputs.push(preluActivationWeights);
    }
    if (hasLeakyreluAlpha) {
      const $leakyreluAlpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(leakyreluAlpha, "float32"));
      inputs.push($leakyreluAlpha);
      intermediates.push($leakyreluAlpha);
    }
    out = backend.runWebGLProgram(program, inputs, dtype);
  }
  const outReshaped = reshape2({ inputs: { x: out }, backend, attrs: { shape: outShape } });
  intermediates.push(out);
  for (const i of intermediates) {
    backend.disposeIntermediateTensorInfo(i);
  }
  return outReshaped;
}

// src/tfjs-backend-webgl/src/kernels/_FusedMatMul.ts
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
  backendName: "webgl",
  kernelFunc: _fusedMatMul
};

// src/tfjs-backend-webgl/src/kernels/Abs.ts
var ABS2 = `return abs(x);`;
function abs2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  if (backend.shouldExecuteOnCPU([x]) && x.dtype !== "complex64") {
    const xData = backend.texData.get(x.dataId);
    const outValues = simpleAbsImplCPU(xData.values);
    return backend.makeTensorInfo(x.shape, x.dtype, outValues);
  }
  let program;
  if (env().getBool("WEBGL_PACK_UNARY_OPERATIONS")) {
    program = new UnaryOpPackedProgram(x.shape, ABS2);
  } else {
    program = new UnaryOpProgram(x.shape, ABS2);
  }
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var absConfig = {
  kernelName: Abs,
  backendName: "webgl",
  kernelFunc: abs2
};

// src/tfjs-backend-webgl/src/kernels/Acos.ts
var ACOS = CHECK_NAN_SNIPPET + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`;
var acos2 = unaryKernelFunc2({ opSnippet: ACOS });
var acosConfig = {
  kernelName: Acos,
  backendName: "webgl",
  kernelFunc: acos2
};

// src/tfjs-backend-webgl/src/kernels/Acosh.ts
var ACOSH = CHECK_NAN_SNIPPET + `
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`;
var acosh2 = unaryKernelFunc2({ opSnippet: ACOSH });
var acoshConfig = {
  kernelName: Acosh,
  backendName: "webgl",
  kernelFunc: acosh2
};

// src/tfjs-backend-webgl/src/kernels/Add.ts
var ADD = "return a + b;";
var addKernelFunc = binaryKernelFunc2({
  opSnippet: ADD,
  packedOpSnippet: ADD,
  supportsComplex: true,
  cpuKernelImpl: addImplCPU
});
var addConfig = {
  kernelName: Add,
  backendName: "webgl",
  kernelFunc: addKernelFunc
};

// src/tfjs-backend-webgl/src/addn_gpu.ts
var AddNProgram = class {
  constructor(outputShape, shapes) {
    this.outputShape = [];
    this.outputShape = outputShape;
    this.variableNames = shapes.map((_, i) => `T${i}`);
    const snippets = [];
    this.variableNames.forEach((variable2) => {
      snippets.push(`float v${variable2} = get${variable2}AtOutCoords();`);
    });
    const operation = this.variableNames.map((variable2) => {
      return `v${variable2}`;
    }).join(" + ");
    this.userCode = `
      void main() {
        ${snippets.join("\n        ")}

        float result = ${operation};
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/addn_packed_gpu.ts
var AddNPackedProgram = class {
  constructor(outputShape, shapes) {
    this.outputShape = [];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = outputShape;
    this.variableNames = shapes.map((_, i) => `T${i}`);
    const snippets = [];
    this.variableNames.forEach((variable2) => {
      snippets.push(`vec4 v${variable2} = get${variable2}AtOutCoords();`);
    });
    const operation = this.variableNames.map((variable2) => {
      return `v${variable2}`;
    }).join(" + ");
    this.userCode = `
      void main() {
        ${snippets.join("\n        ")}

        vec4 result = ${operation};
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/AddN.ts
function addN2(args) {
  const { inputs, backend } = args;
  const tensors = inputs;
  if (tensors.length === 1) {
    return identity2({ inputs: { x: tensors[0] }, backend });
  }
  if (tensors.length > env().get("WEBGL_MAX_TEXTURES_IN_SHADER")) {
    const midIndex = Math.floor(tensors.length / 2);
    const leftSide = addN2({ inputs: tensors.slice(0, midIndex), backend });
    const rightSide = addN2({ inputs: tensors.slice(midIndex), backend });
    return addN2({ inputs: [leftSide, rightSide], backend });
  }
  const dtype = tensors.map((t) => t.dtype).reduce((d1, d2) => upcastType(d1, d2));
  const shapes = tensors.map((t) => t.shape);
  const usePackedOp = env().getBool("WEBGL_PACK");
  const program = usePackedOp ? new AddNPackedProgram(tensors[0].shape, shapes) : new AddNProgram(tensors[0].shape, shapes);
  return backend.runWebGLProgram(program, tensors, dtype);
}
var addNConfig = {
  kernelName: AddN,
  backendName: "webgl",
  kernelFunc: addN2
};

// src/tfjs-backend-webgl/src/kernels/All.ts
function all2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let permutedX = x;
  if (permutedAxes != null) {
    permutedX = transpose3({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims("all", axes, xRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, axes);
  const inSize = util_exports.sizeFromShape(reduceShape);
  const a2D = reshape2({ inputs: { x: permutedX }, backend, attrs: { shape: [-1, inSize] } });
  const reduced = reduce(a2D, a2D.dtype, "all", backend);
  let res;
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    res = reshape2({ inputs: { x: reduced }, backend, attrs: { shape: newShape } });
  } else {
    res = reshape2({ inputs: { x: reduced }, backend, attrs: { shape: outShape } });
  }
  backend.disposeIntermediateTensorInfo(a2D);
  backend.disposeIntermediateTensorInfo(reduced);
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo(permutedX);
  }
  return res;
}
var allConfig = {
  kernelName: All,
  backendName: "webgl",
  kernelFunc: all2
};

// src/tfjs-backend-webgl/src/kernels/Any.ts
function any2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let permutedX = x;
  if (permutedAxes != null) {
    permutedX = transpose3({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims("any", axes, xRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, axes);
  const inSize = util_exports.sizeFromShape(reduceShape);
  const a2D = reshape2({ inputs: { x: permutedX }, backend, attrs: { shape: [-1, inSize] } });
  const reduced = reduce(a2D, a2D.dtype, "any", backend);
  let res;
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    res = reshape2({ inputs: { x: reduced }, backend, attrs: { shape: newShape } });
  } else {
    res = reshape2({ inputs: { x: reduced }, backend, attrs: { shape: outShape } });
  }
  backend.disposeIntermediateTensorInfo(a2D);
  backend.disposeIntermediateTensorInfo(reduced);
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo(permutedX);
  }
  return res;
}
var anyConfig = {
  kernelName: Any,
  backendName: "webgl",
  kernelFunc: any2
};

// src/tfjs-backend-webgl/src/argminmax_gpu.ts
var ArgMinMaxProgram = class {
  constructor(reduceInfo, op2, firstPass) {
    this.variableNames = ["A"];
    const { windowSize, batchSize, outSize } = reduceInfo;
    if (!firstPass) {
      this.variableNames.push("bestIndicesA");
    }
    this.outputShape = [batchSize, outSize];
    const compOp = op2 === "max" ? ">" : "<";
    const indexSnippet = firstPass ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${windowSize}; i++) {
          int inIdx = ${indexSnippet};
          float candidate = getA(batch, inIdx);
          if (candidate ${compOp} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/argminmax_packed_gpu.ts
var ArgMinMaxPackedProgram = class {
  constructor(shape, windowSize, op2, firstPass) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    util_exports.assert(shape.length > 2, () => `Packed arg${op2.charAt(0).toUpperCase() + op2.slice(1)} supports only inputs with rank above 2.`);
    const inSize = shape[shape.length - 1];
    const outSize = Math.ceil(inSize / windowSize);
    this.outputShape = shape.slice(0, -1);
    if (outSize > 1) {
      this.outputShape.push(outSize);
    }
    if (!firstPass) {
      this.variableNames.push("bestIndicesA");
    }
    const outShape = this.outputShape;
    const rank = outShape.length;
    const dtype = getCoordsDataType(rank);
    const coords2 = getChannels("coords", rank);
    let sourceLocSetup;
    let sourceRank;
    if (outSize === 1) {
      sourceRank = rank + 1;
      const sourceLocDType = getCoordsDataType(sourceRank);
      sourceLocSetup = `
        ${sourceLocDType} sourceLocR = ${sourceLocDType}(${coords2.join()}, 0);
        ++${coords2[rank - 1]};
        ${sourceLocDType} sourceLocG = ${sourceLocDType}(${coords2.join()}, 0);
        ++${coords2[rank - 2]};
        ${sourceLocDType} sourceLocA = ${sourceLocDType}(${coords2.join()}, 0);
        --${coords2[rank - 1]};
        ${sourceLocDType} sourceLocB = ${sourceLocDType}(${coords2.join()}, 0);
        --${coords2[rank - 2]};`;
    } else {
      sourceRank = rank;
      sourceLocSetup = `
        ${dtype} sourceLocR = coords;
        ++${coords2[rank - 1]};
        ${dtype} sourceLocG = coords;
        ++${coords2[rank - 2]};
        ${dtype} sourceLocA = coords;
        --${coords2[rank - 1]};
        ${dtype} sourceLocB = coords;
        --${coords2[rank - 2]};`;
    }
    const channels = ["x", "y", "z", "w", "u", "v"].slice(0, sourceRank);
    const inChannel = "." + channels[sourceRank - 1];
    const intChannels = channels.map((x) => "int " + x);
    const srcRCoords = getChannels("sourceLocR", sourceRank - 1).concat("inIdx.r");
    const srcGCoords = getChannels("sourceLocG", sourceRank - 1).concat("inIdx.g");
    const srcBCoords = getChannels("sourceLocB", sourceRank - 1).concat("inIdx.b");
    const srcACoords = getChannels("sourceLocA", sourceRank - 1).concat("inIdx.a");
    const compOp = op2 === "max" ? "greaterThan" : "lessThan";
    const fetchCandidateIdx = firstPass ? "" : `
          inIdx = round(vec4(getBestIndicesAChannel(${srcRCoords.join()}),
                             getBestIndicesAChannel(${srcGCoords.join()}),
                             getBestIndicesAChannel(${srcBCoords.join()}),
                             getBestIndicesAChannel(${srcACoords.join()})));`;
    const fetchValue = `vec4(
            getAChannel(${srcRCoords.join()}),
            hasNextCol ? getAChannel(${srcGCoords.join()}) : 0.,
            hasNextRow ? getAChannel(${srcBCoords.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${srcACoords.join()}) : 0.)`;
    const getBestIndicesAChannelSnippet = firstPass ? "" : `
      float getBestIndicesAChannel(${intChannels.join()}) {
        return getChannel(getBestIndicesA(${channels.join()}),
                                          vec2(${channels.slice(-2).join()}));
      }`;
    this.userCode = `
      float getAChannel(${intChannels.join()}) {
        return getChannel(getA(${channels.join()}),
                               vec2(${channels.slice(-2).join()}));
      }
      ${getBestIndicesAChannelSnippet}
      void main() {
        ${dtype} coords = getOutputCoords();
        bool hasNextCol = ${coords2[rank - 1]} < ${outShape[rank - 1] - 1};
        bool hasNextRow = ${coords2[rank - 2]} < ${outShape[rank - 2] - 1};
        ${sourceLocSetup}
        ivec4 srcIdx = ivec4(sourceLocR${inChannel}, sourceLocG${inChannel},
          sourceLocB${inChannel}, sourceLocA${inChannel}) * ${windowSize};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${fetchValue};

        for (int i = 0; i < ${windowSize}; i++) {
          inIdx = srcIdx;
          ${fetchCandidateIdx}
          vec4 candidate = ${fetchValue};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${compOp}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernel_utils/arg_min_max.ts
function argReduce(backend, x, reduceType, bestIndicesA = null) {
  let batchSize = x.shape[0];
  let inSize = x.shape[1];
  if (bestIndicesA != null) {
    batchSize = bestIndicesA.shape[0];
    inSize = bestIndicesA.shape[1];
  }
  const windowSize = backend_util_exports.computeOptimalWindowSize(inSize);
  const reduceInfo = { windowSize, inSize, batchSize, outSize: Math.ceil(inSize / windowSize) };
  const program = new ArgMinMaxProgram(reduceInfo, reduceType, bestIndicesA == null);
  const inputs = [x];
  if (bestIndicesA != null) {
    inputs.push(bestIndicesA);
  }
  const output = backend.runWebGLProgram(program, inputs, "int32");
  if (output.shape[1] === 1) {
    return output;
  }
  const result = argReduce(backend, x, reduceType, output);
  backend.disposeIntermediateTensorInfo(output);
  return result;
}
function argReducePacked(backend, x, reduceType, bestIndicesA = null) {
  const inShape = bestIndicesA != null ? bestIndicesA.shape : x.shape;
  const inSize = inShape[inShape.length - 1];
  const windowSize = backend_util_exports.computeOptimalWindowSize(inSize);
  const program = new ArgMinMaxPackedProgram(inShape, windowSize, reduceType, bestIndicesA == null);
  const inputs = bestIndicesA == null ? [x] : [x, bestIndicesA];
  const output = backend.runWebGLProgram(program, inputs, "int32");
  if (output.shape.length === x.shape.length) {
    const result = argReducePacked(backend, x, reduceType, output);
    backend.disposeIntermediateTensorInfo(output);
    return result;
  }
  return output;
}
function argMinMaxReduce(backend, x, axis, reduceType) {
  const axes = [axis];
  backend_util_exports.assertAxesAreInnerMostDims("arg" + reduceType.charAt(0).toUpperCase() + reduceType.slice(1), axes, x.shape.length);
  if (!env().getBool("WEBGL_PACK_REDUCE") || x.shape.length <= 2) {
    const intermediateTensorInfos = [];
    const xtexData = backend.texData.get(x.dataId);
    const xIsPacked = xtexData !== null && xtexData.isPacked;
    let xUnPacked = x;
    if (xIsPacked) {
      xUnPacked = backend.unpackTensor(x);
      intermediateTensorInfos.push(xUnPacked);
    }
    const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(xUnPacked.shape, axes);
    const inSize = util_exports.sizeFromShape(reduceShape);
    const a2D = reshape2({ inputs: { x: xUnPacked }, backend, attrs: { shape: [-1, inSize] } });
    intermediateTensorInfos.push(a2D);
    const reduced = argReduce(backend, a2D, reduceType);
    intermediateTensorInfos.push(reduced);
    const reshaped = reshape2({ inputs: { x: reduced }, backend, attrs: { shape: outShape } });
    intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
    return reshaped;
  }
  return argReducePacked(backend, x, reduceType);
}

// src/tfjs-backend-webgl/src/kernels/ArgMax.ts
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
  const out = argMinMaxReduce(backend, $x, axes[0], "max");
  intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return out;
}
var argMaxConfig = {
  kernelName: ArgMax,
  backendName: "webgl",
  kernelFunc: argMax2
};

// src/tfjs-backend-webgl/src/kernels/ArgMin.ts
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
  const out = argMinMaxReduce(backend, $x, axes[0], "min");
  intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return out;
}
var argMinConfig = {
  kernelName: ArgMin,
  backendName: "webgl",
  kernelFunc: argMin2
};

// src/tfjs-backend-webgl/src/kernels/Asin.ts
var ASIN = CHECK_NAN_SNIPPET + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`;
var asin2 = unaryKernelFunc2({ opSnippet: ASIN });
var asinConfig = {
  kernelName: Asin,
  backendName: "webgl",
  kernelFunc: asin2
};

// src/tfjs-backend-webgl/src/kernels/Asinh.ts
var ASINH = CHECK_NAN_SNIPPET + `return log(x + sqrt(x * x + 1.0));`;
var asinh2 = unaryKernelFunc2({ opSnippet: ASINH });
var asinhConfig = {
  kernelName: Asinh,
  backendName: "webgl",
  kernelFunc: asinh2
};

// src/tfjs-backend-webgl/src/kernels/Atan.ts
var ATAN = CHECK_NAN_SNIPPET + `
  return atan(x);
`;
var atan3 = unaryKernelFunc2({ opSnippet: ATAN });
var atanConfig = {
  kernelName: Atan,
  backendName: "webgl",
  kernelFunc: atan3
};

// src/tfjs-backend-webgl/src/kernels/Atan2.ts
var ATAN2 = CHECK_NAN_SNIPPET_BINARY + `
  return atan(a, b);
`;
var ATAN2_PACKED = `
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  ` + CHECK_NAN_SNIPPET_BINARY_PACKED + `
  return result;
`;
var atan22 = binaryKernelFunc2({ opSnippet: ATAN2, packedOpSnippet: ATAN2_PACKED });
var atan2Config = {
  kernelName: Atan2,
  backendName: "webgl",
  kernelFunc: atan22
};

// src/tfjs-backend-webgl/src/kernels/Atanh.ts
var ATANH = CHECK_NAN_SNIPPET + `
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`;
var atanh2 = unaryKernelFunc2({ opSnippet: ATANH });
var atanhConfig = {
  kernelName: Atanh,
  backendName: "webgl",
  kernelFunc: atanh2
};

// src/tfjs-backend-webgl/src/pool_gpu.ts
var Pool2DProgram = class {
  constructor(convInfo, poolType, computePositions, flattenPositions = false, includeBatchInIndex = false) {
    this.variableNames = ["x"];
    if (poolType === "avg" && computePositions) {
      throw new Error("Cannot compute positions for average pool.");
    }
    const filterWidth = convInfo.filterWidth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    this.outputShape = convInfo.outShape;
    const isAvgPool = poolType === "avg";
    const batchFlattenPositionStr = `((batch  * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + d`;
    const flattenPositionStr = `(xR * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + d`;
    let initializationValue = "0.0";
    if (!isAvgPool) {
      initializationValue = "-1.0 / 1e-20";
    }
    if (computePositions) {
      const compareOp2 = ">=";
      this.userCode = `
        const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
        const ivec2 pads = ivec2(${padTop}, ${padLeft});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${compareOp2} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${flattenPositions ? includeBatchInIndex ? batchFlattenPositionStr : flattenPositionStr : `wR * ${effectiveFilterWidth} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;
      return;
    }
    const compareOp = "max";
    let returnValue = `${poolType}(${poolType}(${poolType}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;
    if (poolType === "avg") {
      returnValue = `avgValue / count`;
    }
    const filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
    const filterWidthVec4Remainder = filterWidth % 4;
    const updateSnippet = `
      if (${isAvgPool}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
      }
    `;
    this.userCode = `
      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${convInfo.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${initializationValue});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${convInfo.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidthNearestVec4}; wC += 4) {
            int xC = xCCorner + wC * ${dilationWidth};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              getValue(batch, xR, xC + 2 * ${dilationWidth}, d),
              getValue(batch, xR, xC + 3 * ${dilationWidth}, d)
            );

            ${updateSnippet}
          }

          int xC = xCCorner + ${filterWidthNearestVec4};
          if (${filterWidthVec4Remainder === 1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${updateSnippet}
          } else if (${filterWidthVec4Remainder === 2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              initializationValue,
              initializationValue
            );

            ${updateSnippet}
          } else if (${filterWidthVec4Remainder === 3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              getValue(batch, xR, xC + 2 * ${dilationWidth}, d),
              initializationValue
            );

            ${updateSnippet}
          }
        }
        setOutput(${returnValue});
      }
    `;
  }
};
var Pool3DProgram = class {
  constructor(convInfo, poolType, computePositions, flattenPositions = false, includeBatchInIndex = false) {
    this.variableNames = ["x"];
    if (poolType === "avg" && computePositions) {
      throw new Error("Cannot compute positions for average pool.");
    }
    const filterWidth = convInfo.filterWidth;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterDepth = convInfo.effectiveFilterDepth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padFront = convInfo.padInfo.front;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    this.outputShape = convInfo.outShape;
    const isAvgPool = poolType === "avg";
    let initializationValue = "0.0";
    if (!isAvgPool) {
      initializationValue = "-1.0 / 1e-20";
    }
    if (computePositions) {
      const compareOp2 = ">=";
      this.userCode = `
        const ivec3 strides =
            ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
        const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${effectiveFilterDepth};
              wD += ${dilationDepth}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${convInfo.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${effectiveFilterHeight};
                wR += ${dilationHeight}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${convInfo.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${effectiveFilterWidth};
                  wC += ${dilationWidth}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${convInfo.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${compareOp2} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${flattenPositions ? includeBatchInIndex ? `(((batch * ${convInfo.inDepth} + xD) * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + ch` : `((xD * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + ch` : `wD * ${effectiveFilterHeight} * ${effectiveFilterWidth} +
                      wR * ${effectiveFilterWidth} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;
      return;
    }
    const compareOp = "max";
    let returnValue = `${poolType}(${poolType}(${poolType}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;
    if (poolType === "avg") {
      returnValue = `avgValue / count`;
    }
    const filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
    const filterWidthVec4Remainder = filterWidth % 4;
    const updateSnippet = `
      if (${isAvgPool}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
      }
    `;
    this.userCode = `
      const ivec3 strides =
        ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${convInfo.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${initializationValue});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
            wD += ${dilationDepth}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${convInfo.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${filterWidthNearestVec4}; wC += 4) {
              int xC = xCCorner + wC * ${dilationWidth};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 2 * ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 3 * ${dilationWidth}, ch)
              );

              ${updateSnippet}
            }

            int xC = xCCorner + ${filterWidthNearestVec4};
            if (${filterWidthVec4Remainder === 1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${updateSnippet}
            } else if (${filterWidthVec4Remainder === 2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                initializationValue,
                initializationValue
              );

              ${updateSnippet}
            } else if (${filterWidthVec4Remainder === 3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 2 * ${dilationWidth}, ch),
                initializationValue
              );

              ${updateSnippet}
            }
          }
          setOutput(${returnValue});
        }
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/AvgPool.ts
function avgPool2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  assertNotComplex(x, "avgPool");
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const dilations = 1;
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in avgPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, dilations, pad2, dimRoundingMode);
  if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 && util_exports.arraysEqual(convInfo.inShape, convInfo.outShape)) {
    return identity2({ inputs: { x }, backend });
  }
  const avgPoolProgram = new Pool2DProgram(convInfo, "avg", false);
  return backend.runWebGLProgram(avgPoolProgram, [x], "float32");
}
var avgPoolConfig = {
  kernelName: AvgPool,
  backendName: "webgl",
  kernelFunc: avgPool2
};

// src/tfjs-backend-webgl/src/kernels/AvgPool3D.ts
function avgPool3D(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat } = attrs;
  const dilations = [1, 1, 1];
  const convInfo = backend_util_exports.computePool3DInfo(x.shape, filterSize, strides, dilations, pad2, dimRoundingMode, dataFormat);
  const avgPoolProgram = new Pool3DProgram(convInfo, "avg", false);
  return backend.runWebGLProgram(avgPoolProgram, [x], "float32");
}
var avgPool3DConfig = {
  kernelName: AvgPool3D,
  backendName: "webgl",
  kernelFunc: avgPool3D
};

// src/tfjs-backend-webgl/src/avg_pool_backprop_gpu.ts
var AvgPool2DBackpropProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy"];
    this.outputShape = convInfo.inShape;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
    const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
    const avgMultiplier = 1 / (filterHeight * filterWidth);
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});
      const float avgMultiplier = float(${avgMultiplier});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${effectiveFilterWidth};
            wC+= ${dilationWidth}) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var AvgPool3DBackpropProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy"];
    this.outputShape = convInfo.inShape;
    const filterDepth = convInfo.filterDepth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterDepth = convInfo.effectiveFilterDepth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
    const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
    const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
    const avgMultiplier = 1 / (filterDepth * filterHeight * filterWidth);
    this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});
      const float avgMultiplier = float(${avgMultiplier});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
            wD += ${dilationDepth}) {
          float dyD = float(dyDCorner + wD) / ${strideDepth}.0;

          if (dyD < 0.0 || dyD >= ${convInfo.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/AvgPool3DGrad.ts
function avgPool3DGrad(args) {
  const { inputs, backend, attrs } = args;
  const { dy, input } = inputs;
  const x = input;
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const dilations = [1, 1, 1];
  const convInfo = backend_util_exports.computePool3DInfo(x.shape, filterSize, strides, dilations, pad2, dimRoundingMode);
  const avgPoolBackpropProgram = new AvgPool3DBackpropProgram(convInfo);
  return backend.runWebGLProgram(avgPoolBackpropProgram, [dy], x.dtype);
}
var avgPoolGrad3DConfig = {
  kernelName: AvgPool3DGrad,
  backendName: "webgl",
  kernelFunc: avgPool3DGrad
};

// src/tfjs-backend-webgl/src/kernels/AvgPoolGrad.ts
function avgPoolGrad(args) {
  const { inputs, backend, attrs } = args;
  const { dy, input } = inputs;
  const x = input;
  assertNotComplex([dy, input], "avgPoolGrad");
  const { filterSize, strides, pad: pad2 } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, 1, pad2);
  const avgPoolBackpropProgram = new AvgPool2DBackpropProgram(convInfo);
  return backend.runWebGLProgram(avgPoolBackpropProgram, [dy], x.dtype);
}
var avgPoolGradConfig = {
  kernelName: AvgPoolGrad,
  backendName: "webgl",
  kernelFunc: avgPoolGrad
};

// src/tfjs-backend-webgl/src/kernels/BatchMatMul.ts
function batchMatMul(args) {
  const { inputs, backend, attrs } = args;
  const { a, b } = inputs;
  const { transposeA, transposeB } = attrs;
  return batchMatMulImpl({ a, b, transposeA, transposeB, backend });
}
var batchMatMulConfig = {
  kernelName: BatchMatMul,
  backendName: "webgl",
  kernelFunc: batchMatMul
};

// src/tfjs-backend-webgl/src/batchnorm_gpu.ts
var BatchNormProgram = class {
  constructor(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
    this.outputShape = [];
    this.variableNames = ["x", "mean", "variance"];
    backend_util_exports.assertAndGetBroadcastShape(xShape, meanShape);
    backend_util_exports.assertAndGetBroadcastShape(xShape, varianceShape);
    let offsetSnippet = "0.0";
    if (offsetShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, offsetShape);
      this.variableNames.push("offset");
      offsetSnippet = "getOffsetAtOutCoords()";
    }
    let scaleSnippet = "1.0";
    if (scaleShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, scaleShape);
      this.variableNames.push("scale");
      scaleSnippet = "getScaleAtOutCoords()";
    }
    this.outputShape = xShape;
    this.userCode = `
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${offsetSnippet};
        float scale = ${scaleSnippet};
        float inv = scale * inversesqrt(variance + float(${varianceEpsilon}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/batchnorm_packed_gpu.ts
var BatchNormPackedProgram = class {
  constructor(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
    this.packedInputs = true;
    this.packedOutput = true;
    this.variableNames = ["x", "mean", "variance"];
    backend_util_exports.assertAndGetBroadcastShape(xShape, meanShape);
    backend_util_exports.assertAndGetBroadcastShape(xShape, varianceShape);
    let offsetSnippet = "vec4(0.0)";
    if (offsetShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, offsetShape);
      this.variableNames.push("offset");
      offsetSnippet = "getOffsetAtOutCoords()";
    }
    let scaleSnippet = "vec4(1.0)";
    if (scaleShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, scaleShape);
      this.variableNames.push("scale");
      scaleSnippet = "getScaleAtOutCoords()";
    }
    this.outputShape = xShape;
    this.userCode = `
      void main() {
        vec4 offset = ${offsetSnippet};
        vec4 scale = ${scaleSnippet};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${varianceEpsilon}));

        setOutput((x - mean) * inv + offset);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/BatchNorm.ts
var batchNorm2 = ({ inputs, backend, attrs }) => {
  const { x, mean: mean2, variance, offset, scale } = inputs;
  util_exports.assert(mean2.shape.length === variance.shape.length, () => "Batch normalization gradient requires mean and variance to have equal ranks.");
  util_exports.assert(offset == null || mean2.shape.length === offset.shape.length, () => "Batch normalization gradient requires mean and offset to have equal ranks.");
  util_exports.assert(scale == null || mean2.shape.length === scale.shape.length, () => "Batch normalization gradient requires mean and scale to have equal ranks.");
  let { varianceEpsilon } = attrs;
  if (varianceEpsilon == null) {
    varianceEpsilon = 1e-3;
  }
  const finalInputs = [x, mean2, variance];
  let offsetShape = null;
  if (offset != null) {
    offsetShape = offset.shape;
    finalInputs.push(offset);
  }
  let scaleShape = null;
  if (scale != null) {
    scaleShape = scale.shape;
    finalInputs.push(scale);
  }
  const program = env().getBool("WEBGL_PACK_NORMALIZATION") ? new BatchNormPackedProgram(x.shape, mean2.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon) : new BatchNormProgram(x.shape, mean2.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon);
  const output = backend.runWebGLProgram(program, finalInputs, finalInputs[0].dtype);
  return output;
};
var batchNormConfig = {
  kernelName: FusedBatchNorm,
  backendName: "webgl",
  kernelFunc: batchNorm2
};

// src/tfjs-backend-webgl/src/slice_gpu.ts
var SliceProgram = class {
  constructor(destSize) {
    this.variableNames = ["source"];
    this.outputShape = destSize;
    this.rank = destSize.length;
    const dtype = getCoordsDataType(this.rank);
    this.customUniforms = [{ name: "start", arrayIndex: this.rank, type: "int" }];
    const sourceCoords = getCoords(this.rank);
    let body;
    const coordSum = destSize.map((_, i) => {
      return `sourceLoc.${coords[i]} = start[${i}] + coords.${coords[i]};`;
    });
    body = `
        ${dtype} sourceLoc;
        ${dtype} coords = getOutputCoords();
        ${coordSum.join("\n")}
      `;
    this.userCode = `
      void main() {
        ${body}
        setOutput(getSource(${sourceCoords}));
      }
    `;
  }
};
var coords = ["x", "y", "z", "w", "u", "v"];
function getCoords(rank) {
  if (rank === 1) {
    return "sourceLoc";
  } else if (rank <= 6) {
    return coords.slice(0, rank).map((x) => "sourceLoc." + x).join(",");
  } else {
    throw Error(`Slicing for rank ${rank} is not yet supported`);
  }
}

// src/tfjs-backend-webgl/src/slice_packed_gpu.ts
var SlicePackedProgram = class {
  constructor(destSize) {
    this.variableNames = ["source"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = destSize;
    this.rank = destSize.length;
    this.customUniforms = [{ name: "start", arrayIndex: this.rank, type: "int" }];
    const dtype = getCoordsDataType(this.rank);
    const coords2 = getChannels("coords", this.rank);
    const sourceLoc = getChannels("sourceLoc", this.rank);
    const innerDims = this.rank === 1 ? "sourceLoc" : `vec2(${sourceLoc.slice(-2).join()})`;
    const getChannel = `getChannel(getSource(${sourceLoc.join()}), ${innerDims})`;
    const upperRow = `
      result.x = ${getChannel};
      if (++${coords2[this.rank - 1]} < ${destSize[this.rank - 1]}) {
        ++${sourceLoc[this.rank - 1]};
        result.y = ${getChannel};
        --${sourceLoc[this.rank - 1]};
      }
    `;
    const lowerRow = this.rank === 1 ? "" : `
      --${coords2[this.rank - 1]};
      if (++${coords2[this.rank - 2]} < ${destSize[this.rank - 2]}) {
        ++${sourceLoc[this.rank - 2]};
        result.z = ${getChannel};
        if (++${coords2[this.rank - 1]} < ${destSize[this.rank - 1]}) {
          ++${sourceLoc[this.rank - 1]};
          result.w = ${getChannel};
        }
      }
    `;
    const sourceLocSetup = this.rank <= 4 ? `sourceLoc = coords +
            ${dtype}(${destSize.map((_, i) => `start[${i}]`).join()});` : destSize.map((_, i) => `${sourceLoc[i]} = ${coords2[i]} + start[${i}];`).join("\n");
    this.userCode = `
      void main() {
        ${dtype} coords = getOutputCoords();
        ${dtype} sourceLoc;
        ${sourceLocSetup}
        vec4 result = vec4(0.);
        ${upperRow}
        ${lowerRow}
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Slice.ts
function shallowSlice(x, begin, size, backend) {
  const xTexData = backend.texData.get(x.dataId);
  const t = backend.makeTensorInfo(size, x.dtype);
  const newTexData = backend.texData.get(t.dataId);
  Object.assign(newTexData, xTexData);
  newTexData.refCount = 1;
  newTexData.shape = size;
  newTexData.dtype = x.dtype;
  let flatOffset = slice_util_exports.computeFlatOffset(begin, util_exports.computeStrides(x.shape));
  if (xTexData.slice) {
    flatOffset += xTexData.slice.flatOffset;
  }
  newTexData.slice = {
    flatOffset,
    origDataId: xTexData.slice && xTexData.slice.origDataId || x.dataId
  };
  const refCount = backend.dataRefCount.get(newTexData.slice.origDataId) || 1;
  backend.dataRefCount.set(newTexData.slice.origDataId, refCount + 1);
  return t;
}
function slice2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { begin, size } = attrs;
  const [$begin, $size] = slice_util_exports.parseSliceParams(x, begin, size);
  slice_util_exports.assertParamsValid(x, $begin, $size);
  if (util_exports.sizeFromShape($size) === 0) {
    return backend.makeTensorInfo($size, x.dtype, []);
  }
  if (backend.shouldExecuteOnCPU([x]) || x.dtype === "string") {
    const xTexData = backend.texData.get(x.dataId);
    const outValues = sliceImplCPU(xTexData.values, $begin, $size, x.shape, x.dtype);
    return backend.makeTensorInfo($size, x.dtype, outValues);
  }
  const { isPacked } = backend.texData.get(x.dataId);
  const isContinous = slice_util_exports.isSliceContinous(x.shape, $begin, $size);
  if (isPacked || !isContinous) {
    const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new SlicePackedProgram($size) : new SliceProgram($size);
    const customValues = [$begin];
    return backend.runWebGLProgram(program, [x], x.dtype, customValues);
  }
  backend.uploadToGPU(x.dataId);
  return shallowSlice(x, $begin, $size, backend);
}
var sliceConfig = {
  kernelName: Slice,
  backendName: "webgl",
  kernelFunc: slice2
};

// src/tfjs-backend-webgl/src/kernels/BatchToSpaceND.ts
var batchToSpaceND2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockShape, crops } = attrs;
  util_exports.assert(x.shape.length <= 4, () => "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");
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
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return sliced;
};
var batchToSpaceNDConfig = {
  kernelName: BatchToSpaceND,
  backendName: "webgl",
  kernelFunc: batchToSpaceND2
};

// src/tfjs-backend-webgl/src/kernels/Bincount.ts
function bincount2(args) {
  const { inputs, backend, attrs } = args;
  const { x, weights } = inputs;
  const { size } = attrs;
  const xVals = backend.readSync(x.dataId);
  const weightsVals = backend.readSync(weights.dataId);
  const outVals = bincountImplCPU(xVals, weightsVals, weights.dtype, weights.shape, size);
  return backend.makeTensorInfo([size], weights.dtype, outVals);
}
var bincountConfig = {
  kernelName: Bincount,
  backendName: "webgl",
  kernelFunc: bincount2
};

// src/tfjs-backend-webgl/src/kernels/BroadcastArgs.ts
function broadcastArgs2(args) {
  const { inputs, backend } = args;
  const { s0, s1 } = inputs;
  const s0Vals = backend.readSync(s0.dataId);
  const s1Vals = backend.readSync(s1.dataId);
  const broadcastShape = backend_util_exports.assertAndGetBroadcastShape(Array.from(s0Vals), Array.from(s1Vals));
  return backend.makeTensorInfo([broadcastShape.length], "int32", Int32Array.from(broadcastShape));
}
var broadcastArgsConfig = {
  kernelName: BroadcastArgs,
  backendName: "webgl",
  kernelFunc: broadcastArgs2
};

// src/tfjs-backend-webgl/src/kernels/NotEqual.ts
var NOT_EQUAL = `return float(a != b);`;
var notEqual3 = binaryKernelFunc2({ opSnippet: NOT_EQUAL, cpuKernelImpl: notEqualImplCPU, dtype: "bool" });
var notEqualConfig = {
  kernelName: NotEqual,
  backendName: "webgl",
  kernelFunc: notEqual3
};

// src/tfjs-backend-webgl/src/kernels/Real.ts
function real3(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const inputData = backend.texData.get(input.dataId);
  return identity2({ inputs: { x: inputData.complexTensorInfos.real }, backend });
}
var realConfig = {
  kernelName: Real,
  backendName: "webgl",
  kernelFunc: real3
};

// src/tfjs-backend-webgl/src/kernel_utils/int.ts
var TO_INT = `return float(int(x));`;
function int(input, backend) {
  const program = new UnaryOpProgram(input.shape, TO_INT);
  const output = backend.runWebGLProgram(program, [input], "int32");
  return { dataId: output.dataId, shape: output.shape, dtype: output.dtype };
}

// src/tfjs-backend-webgl/src/kernels/Cast.ts
function cast3(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { dtype } = attrs;
  if (dtype === "complex64") {
    if (x.dtype === "complex64") {
      return identity2({ inputs: { x }, backend });
    }
    const zerosTensor = zeros(x.shape);
    const floatX = cast3({ inputs: { x }, backend, attrs: { dtype: "float32" } });
    const result = complex3({ inputs: { real: floatX, imag: zerosTensor }, backend });
    zerosTensor.dispose();
    backend.disposeIntermediateTensorInfo(floatX);
    return result;
  }
  if (x.dtype === "complex64") {
    const realPart = real3({ inputs: { input: x }, backend });
    const result = cast3({ inputs: { x: realPart }, backend, attrs: { dtype } });
    backend.disposeIntermediateTensorInfo(realPart);
    return result;
  }
  if (!util_exports.hasEncodingLoss(x.dtype, dtype)) {
    const result = identity2({ inputs: { x }, backend });
    return { dataId: result.dataId, shape: result.shape, dtype };
  }
  if (dtype === "int32") {
    return int(x, backend);
  }
  if (dtype === "bool") {
    const zerosTensorInfo = backend.makeTensorInfo([], "bool", util_exports.getTypedArrayFromDType("bool", 1));
    const binaryInputs = { a: x, b: zerosTensorInfo };
    const result = notEqual3({ inputs: binaryInputs, backend });
    backend.disposeIntermediateTensorInfo(zerosTensorInfo);
    return result;
  }
  throw new Error(`Error in Cast: failed to cast ${x.dtype} to ${dtype}`);
}
var castConfig = {
  kernelName: Cast,
  backendName: "webgl",
  kernelFunc: cast3
};

// src/tfjs-backend-webgl/src/kernels/Ceil.ts
var CEIL = `return ceil(x);`;
var ceil3 = unaryKernelFunc2({ opSnippet: CEIL, packedOpSnippet: CEIL, cpuKernelImpl: ceilImplCPU });
var ceilConfig = {
  kernelName: Ceil,
  backendName: "webgl",
  kernelFunc: ceil3
};

// src/tfjs-backend-webgl/src/clip_gpu.ts
var ClipProgram = class {
  constructor(aShape) {
    this.variableNames = ["A"];
    this.customUniforms = [
      { name: "minVal", type: "float" },
      { name: "maxVal", type: "float" }
    ];
    this.outputShape = aShape;
    this.userCode = `

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/clip_packed_gpu.ts
var ClipPackedProgram = class {
  constructor(aShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [
      { name: "minVal", type: "float" },
      { name: "maxVal", type: "float" }
    ];
    this.outputShape = aShape;
    this.userCode = `
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/ClipByValue.ts
function clipByValue2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { clipValueMin, clipValueMax } = attrs;
  let program;
  if (env().getBool("WEBGL_PACK_CLIP")) {
    program = new ClipPackedProgram(x.shape);
  } else {
    program = new ClipProgram(x.shape);
  }
  const customValues = [[clipValueMin], [clipValueMax]];
  return backend.runWebGLProgram(program, [x], x.dtype, customValues);
}
var clipByValueConfig = {
  kernelName: ClipByValue,
  backendName: "webgl",
  kernelFunc: clipByValue2
};

// src/tfjs-backend-webgl/src/complex_abs_gpu.ts
var ComplexAbsProgram = class {
  constructor(shape) {
    this.variableNames = ["real", "imag"];
    this.outputShape = shape;
    this.userCode = `
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/ComplexAbs.ts
function makeComplexComponentTensorInfo(complexTensor, complexPart) {
  return {
    dataId: complexPart.dataId,
    dtype: complexPart.dtype,
    shape: complexTensor.shape
  };
}
function complexAbs(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  const xData = backend.texData.get(x.dataId);
  const program = new ComplexAbsProgram(x.shape);
  const programInputs = [
    makeComplexComponentTensorInfo(x, xData.complexTensorInfos.real),
    makeComplexComponentTensorInfo(x, xData.complexTensorInfos.imag)
  ];
  return backend.runWebGLProgram(program, programInputs, programInputs[0].dtype);
}
var complexAbsConfig = {
  kernelName: ComplexAbs,
  backendName: "webgl",
  kernelFunc: complexAbs
};

// src/tfjs-backend-webgl/src/concat_gpu.ts
var ConcatProgram = class {
  constructor(shapes) {
    this.outputShape = [];
    this.outputShape = backend_util_exports.computeOutShape(shapes, 1);
    this.variableNames = shapes.map((_, i) => `T${i}`);
    const offsets = new Array(shapes.length - 1);
    offsets[0] = shapes[0][1];
    for (let i = 1; i < offsets.length; i++) {
      offsets[i] = offsets[i - 1] + shapes[i][1];
    }
    const snippets = [`if (yC < ${offsets[0]}) setOutput(getT0(yR, yC));`];
    for (let i = 1; i < offsets.length; i++) {
      const shift = offsets[i - 1];
      snippets.push(`else if (yC < ${offsets[i]}) setOutput(getT${i}(yR, yC-${shift}));`);
    }
    const lastIndex = offsets.length;
    const lastShift = offsets[offsets.length - 1];
    snippets.push(`else setOutput(getT${lastIndex}(yR, yC-${lastShift}));`);
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${snippets.join("\n        ")}
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/concat_packed_gpu.ts
var ConcatPackedProgram = class {
  constructor(shapes, axis) {
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = [];
    this.outputShape = backend_util_exports.computeOutShape(shapes, axis);
    const shape = this.outputShape;
    const rank = shape.length;
    const dtype = getCoordsDataType(rank);
    const coords2 = getChannels("coords", rank);
    const channels = ["x", "y", "z", "w", "u", "v"].slice(0, rank);
    this.variableNames = shapes.map((_, i) => `T${i}`);
    const offsets = new Array(shapes.length - 1);
    offsets[0] = shapes[0][axis];
    for (let i = 1; i < offsets.length; i++) {
      offsets[i] = offsets[i - 1] + shapes[i][axis];
    }
    const channel = channels[axis];
    const lastChannels = channels.slice(-2);
    const allChannels = channels.join();
    let getValueSnippet = `if (${channel} < ${offsets[0]}) {
        return getChannel(
            getT0(${allChannels}), vec2(${lastChannels.join()}));
        }`;
    for (let i = 1; i < offsets.length; i++) {
      const shift2 = offsets[i - 1];
      getValueSnippet += `
        if (${channel} < ${offsets[i]}  && ${channel} >= ${offsets[i - 1]}) {
          return getChannel(
            getT${i}(${shiftedChannels(channels, channel, shift2)}),
            vec2(${shiftedChannels(lastChannels, channel, shift2)}));
        }`;
    }
    const lastIndex = offsets.length;
    const shift = offsets[offsets.length - 1];
    getValueSnippet += `
        return getChannel(
          getT${lastIndex}(${shiftedChannels(channels, channel, shift)}),
          vec2(${shiftedChannels(lastChannels, channel, shift)}));`;
    this.userCode = `
      float getValue(${channels.map((x) => "int " + x)}) {
        ${getValueSnippet}
      }

      void main() {
        ${dtype} coords = getOutputCoords();
        vec4 result = vec4(getValue(${coords2}), 0., 0., 0.);

        ${coords2[rank - 1]} = ${coords2[rank - 1]} + 1;
        if (${coords2[rank - 1]} < ${shape[rank - 1]}) {
          result.g = getValue(${coords2});
        }

        ${coords2[rank - 2]} = ${coords2[rank - 2]} + 1;
        if (${coords2[rank - 2]} < ${shape[rank - 2]}) {
          result.a = getValue(${coords2});
        }

        ${coords2[rank - 1]} = ${coords2[rank - 1]} - 1;
        if (${coords2[rank - 2]} < ${shape[rank - 2]} &&
            ${coords2[rank - 1]} < ${shape[rank - 1]}) {
          result.b = getValue(${coords2});
        }
        setOutput(result);
      }
    `;
  }
};
function shiftedChannels(channels, channel, shift) {
  const channelIdx = channels.indexOf(channel);
  const res = channels.map((c, idx) => {
    if (idx === channelIdx) {
      return `${c} - ${shift}`;
    } else {
      return c;
    }
  });
  return res.join();
}

// src/tfjs-backend-webgl/src/kernels/Imag.ts
function imag2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const inputData = backend.texData.get(input.dataId);
  return identity2({ inputs: { x: inputData.complexTensorInfos.imag }, backend });
}
var imagConfig = {
  kernelName: Imag,
  backendName: "webgl",
  kernelFunc: imag2
};

// src/tfjs-backend-webgl/src/kernels/Concat_impl.ts
function concatImpl2(inputs, axis, backend) {
  const dtype = inputs[0].dtype;
  if (dtype === "complex64") {
    const reals = inputs.map((t) => real3({ inputs: { input: t }, backend }));
    const imags = inputs.map((t) => imag2({ inputs: { input: t }, backend }));
    const realConcated = concatImpl2(reals, axis, backend);
    const imagConcated = concatImpl2(imags, axis, backend);
    const result2 = complex3({ inputs: { real: realConcated, imag: imagConcated }, backend });
    reals.forEach((r) => backend.disposeIntermediateTensorInfo(r));
    imags.forEach((i) => backend.disposeIntermediateTensorInfo(i));
    backend.disposeIntermediateTensorInfo(realConcated);
    backend.disposeIntermediateTensorInfo(imagConcated);
    return result2;
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
    tensors2D2.forEach((t) => backend.disposeIntermediateTensorInfo(t));
    return outInfo;
  }
  if (inputs.length > env().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
    const midIndex = Math.floor(inputs.length / 2);
    const leftSide = concatImpl2(inputs.slice(0, midIndex), axis, backend);
    const rightSide = concatImpl2(inputs.slice(midIndex), axis, backend);
    const result2 = concatImpl2([leftSide, rightSide], axis, backend);
    backend.disposeIntermediateTensorInfo(leftSide);
    backend.disposeIntermediateTensorInfo(rightSide);
    return result2;
  }
  if (env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && inputs[0].shape.length > 1) {
    const program2 = new ConcatPackedProgram(inputs.map((t) => t.shape), axis);
    return backend.runWebGLProgram(program2, inputs, dtype);
  }
  const { tensors2D, outShape } = computeTensors2D(inputs, axis, backend);
  const program = new ConcatProgram(tensors2D.map((t) => t.shape));
  const result = backend.runWebGLProgram(program, tensors2D, dtype);
  tensors2D.forEach((r) => backend.disposeIntermediateTensorInfo(r));
  const reshapedResult = reshape2({ inputs: { x: result }, attrs: { shape: outShape }, backend });
  backend.disposeIntermediateTensorInfo(result);
  return reshapedResult;
}
function computeTensors2D(inputs, axis, backend) {
  const outShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), axis);
  const tensors2D = inputs.map((x) => reshape2({
    inputs: { x },
    attrs: { shape: [-1, util_exports.sizeFromShape(x.shape.slice(axis))] },
    backend
  }));
  return { tensors2D, outShape };
}

// src/tfjs-backend-webgl/src/kernels/Concat.ts
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
    return identity2({ inputs: { x: $inputs[0] }, backend });
  }
  const shapes = $inputs.map((t) => t.shape);
  backend_util_exports.assertParamsConsistent(shapes, $axis);
  return concatImpl2($inputs, $axis, backend);
}
var concatConfig = {
  kernelName: Concat,
  backendName: "webgl",
  kernelFunc: concat2
};

// src/tfjs-backend-webgl/src/conv_gpu.ts
var Conv2DProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivationWeights = false, hasLeakyreluAlpha = false) {
    this.variableNames = ["x", "W"];
    this.outputShape = convInfo.outShape;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
    const inputDepthVec4Remainder = convInfo.inChannels % 4;
    const isChannelsLast = convInfo.dataFormat === "channelsLast";
    const rowDim = isChannelsLast ? 1 : 2;
    const colDim = isChannelsLast ? 2 : 3;
    const channelDim = isChannelsLast ? 3 : 1;
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivationWeights) {
        activationSnippet = `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
      } else if (hasLeakyreluAlpha) {
        activationSnippet = `float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${activation}
        }`;
      } else {
        activationSnippet = `
          float activation(float x) {
            ${activation}
          }
        `;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyreluAlpha) {
      this.variableNames.push("leakyreluAlpha");
    }
    this.userCode = `
      ${activationSnippet}

      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${channelDim}];

        ivec2 xRCCorner =
            ivec2(coords[${rowDim}], coords[${colDim}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          int xR = xRCorner + wR * ${dilationHeight};

          if (xR < 0 || xR >= ${convInfo.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            int xC = xCCorner + wC * ${dilationWidth};

            if (xC < 0 || xC >= ${convInfo.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${inputDepthNearestVec4}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${isChannelsLast}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${inputDepthVec4Remainder === 1}) {

              if (${isChannelsLast}) {
                dotProd +=
                    getX(batch, xR, xC, ${inputDepthNearestVec4}) *
                    getW(wR, wC, ${inputDepthNearestVec4}, d2);
              } else {
                dotProd +=
                    getX(batch, ${inputDepthNearestVec4}, xR, xC) *
                    getW(wR, wC, ${inputDepthNearestVec4}, d2);
              }

            } else if (${inputDepthVec4Remainder === 2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${inputDepthNearestVec4}, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 1, d2)
              );

              if (${isChannelsLast}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${inputDepthNearestVec4}, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${inputDepthVec4Remainder === 3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${inputDepthNearestVec4}, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 1, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 2, d2)
              );

              if (${isChannelsLast}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 1),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${inputDepthNearestVec4}, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 1, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
  }
};
var Conv3DProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "W"];
    this.outputShape = convInfo.outShape;
    const padFront = convInfo.padInfo.front;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const filterDepth = convInfo.filterDepth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
    const inputDepthVec4Remainder = convInfo.inChannels % 4;
    this.userCode = `
      const ivec3 strides = ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${filterDepth}; wF++) {
          int xF = xFCorner + wF * ${dilationDepth};

          if (xF < 0 || xF >= ${convInfo.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${filterHeight}; wR++) {
            int xR = xRCorner + wR * ${dilationHeight};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${filterWidth}; wC++) {
              int xC = xCCorner + wC * ${dilationWidth};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${inputDepthNearestVec4}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${inputDepthVec4Remainder === 1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}) *
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2);
              } else if (${inputDepthVec4Remainder === 2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${inputDepthVec4Remainder === 3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 1),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 1, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/im2col_packed_gpu.ts
var Im2ColPackedProgram = class {
  constructor(outputShape, convInfo) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [
      { name: "inputShape", type: "ivec3" },
      { name: "pad", type: "ivec2" },
      { name: "stride", type: "ivec2" },
      { name: "dilation", type: "ivec2" },
      { name: "inChannels", type: "int" },
      { name: "itemsPerBlockRow", type: "int" },
      { name: "outWidth", type: "int" }
    ];
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const { dataFormat } = convInfo;
    const glsl = getGlslDifferences();
    const isChannelsLast = dataFormat === "channelsLast";
    const rowDim = isChannelsLast ? 0 : 1;
    const colDim = isChannelsLast ? 1 : 2;
    const boundsCheckingSnippet = this.enableShapeUniforms ? "if(blockIndex < outShape[1] && pos < outShape[0]) {" : `if(blockIndex < ${outputShape[1]} && pos < ${outputShape[0]}) {`;
    let unrolled = ``;
    for (let row = 0; row <= 1; row++) {
      for (let col = 0; col <= 1; col++) {
        unrolled += `
          blockIndex = rc.y + ${col};
          pos = rc.x + ${row};

          ${boundsCheckingSnippet}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${rowDim}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${colDim}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${isChannelsLast}) {
                  innerDims = vec2(d1, ch);
                  result[${row * 2 + col}] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${row * 2 + col}] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;
      }
    }
    this.userCode = `
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${unrolled}

        ${glsl.output} = result;
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Conv2D_impl.ts
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
  const xTexData = backend.texData.get(x.dataId);
  const sharedMatMulDim = convInfo.inChannels;
  const outerShapeX = xShape[0] * xShape[1] * xShape[2];
  const outerShapeFilter = convInfo.outChannels;
  const isChannelsLast = convInfo.dataFormat === "channelsLast";
  const transposeA = false;
  const transposeB = false;
  let out;
  const intermediates = [];
  const batchMatMulWillBeUnpacked = (outerShapeX === 1 || outerShapeFilter === 1) && sharedMatMulDim > MATMUL_SHARED_DIM_THRESHOLD;
  const canOptimize = !batchMatMulWillBeUnpacked && xTexData.isPacked && isChannelsLast && xTexData.texture != null && xShape[2] % 2 !== 0 && util_exports.arraysEqual(xTexData.shape.slice(-3), xShape.slice(-3));
  if (canOptimize) {
    const targetShape = xShape[0] * xShape[1] * (xShape[2] + 1);
    const xReshaped = {
      dataId: x.dataId,
      shape: [1, targetShape, convInfo.inChannels],
      dtype: x.dtype
    };
    const originalXTexDataShape = xTexData.shape;
    xTexData.shape = xTexData.shape.slice();
    xTexData.shape[xTexData.shape.length - 2]++;
    util_exports.assert(isReshapeFree(xTexData.shape, xReshaped.shape), () => `packed reshape ${xTexData.shape} to ${xReshaped.shape} isn't free`);
    const filterReshaped = reshape2({
      inputs: { x: filter },
      backend,
      attrs: { shape: [1, convInfo.inChannels, convInfo.outChannels] }
    });
    intermediates.push(filterReshaped);
    const pointwiseConv = batchMatMulImpl({
      a: xReshaped,
      b: filterReshaped,
      backend,
      transposeA,
      transposeB,
      bias,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    });
    const pointwiseConvTexData = backend.texData.get(pointwiseConv.dataId);
    util_exports.assert(pointwiseConvTexData.isPacked, () => "batchMatMul result is expected to be packed");
    xTexData.shape = originalXTexDataShape;
    pointwiseConvTexData.shape = convInfo.outShape;
    out = identity2({ inputs: { x: pointwiseConv }, backend });
    out.shape = convInfo.outShape;
    intermediates.push(pointwiseConv);
  } else {
    const targetShape = isChannelsLast ? xShape[0] * xShape[1] * xShape[2] : xShape[0] * xShape[2] * xShape[3];
    const xReshaped = reshape2({
      inputs: { x },
      backend,
      attrs: { shape: [1, targetShape, convInfo.inChannels] }
    });
    const filterReshaped = reshape2({
      inputs: { x: filter },
      backend,
      attrs: { shape: [1, convInfo.inChannels, convInfo.outChannels] }
    });
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
    out = reshape2({ inputs: { x: result }, backend, attrs: { shape: convInfo.outShape } });
    intermediates.push(xReshaped);
    intermediates.push(filterReshaped);
    intermediates.push(result);
  }
  for (const i of intermediates) {
    backend.disposeIntermediateTensorInfo(i);
  }
  return out;
}
function conv2dWithIm2Row({
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
    outWidth,
    outHeight,
    dataFormat
  } = convInfo;
  const isChannelsLast = dataFormat === "channelsLast";
  const sharedDim = filterWidth * filterHeight * inChannels;
  const numCols = outHeight * outWidth;
  const x2ColShape = [sharedDim, numCols];
  const transposeA = true;
  const transposeB = false;
  const intermediates = [];
  const xSqueezed = reshape2({ inputs: { x }, backend, attrs: { shape: x.shape.slice(1) } });
  const w2Row = reshape2({
    inputs: { x: filter },
    backend,
    attrs: { shape: [1, sharedDim, util_exports.sizeFromShape(filter.shape) / sharedDim] }
  });
  intermediates.push(xSqueezed);
  intermediates.push(w2Row);
  const im2ColProgram = new Im2ColPackedProgram(x2ColShape, convInfo);
  const customValues = [
    xSqueezed.shape,
    [convInfo.padInfo.top, convInfo.padInfo.left],
    [convInfo.strideHeight, convInfo.strideWidth],
    [convInfo.dilationHeight, convInfo.dilationWidth],
    [convInfo.inChannels],
    [convInfo.filterWidth * convInfo.inChannels],
    [convInfo.outWidth]
  ];
  const im2Col = backend.runWebGLProgram(im2ColProgram, [xSqueezed], "float32", customValues);
  const im2ColReshaped = reshape2({
    inputs: { x: im2Col },
    backend,
    attrs: { shape: [1, x2ColShape[0], x2ColShape[1]] }
  });
  intermediates.push(im2Col);
  intermediates.push(im2ColReshaped);
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  const hasLeakyreluAlpha = activation === "leakyrelu";
  const fusedActivation = activation ? mapActivationToShaderProgram(activation, true) : null;
  const matmulProgram = new MatMulPackedProgram(im2ColReshaped.shape, w2Row.shape, [1, numCols, convInfo.outChannels], transposeA, transposeB, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
  const inputs = [im2ColReshaped, w2Row];
  if (bias) {
    inputs.push(bias);
  }
  if (hasPreluActivationWeights) {
    inputs.push(preluActivationWeights);
  }
  if (hasLeakyreluAlpha) {
    const $leakyreluAlpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(leakyreluAlpha, "float32"));
    inputs.push($leakyreluAlpha);
    intermediates.push($leakyreluAlpha);
  }
  const product = backend.runWebGLProgram(matmulProgram, inputs, "float32");
  const outShape = isChannelsLast ? [1, outHeight, outWidth, convInfo.outChannels] : [1, convInfo.outChannels, outHeight, outWidth];
  const out = reshape2({ inputs: { x: product }, backend, attrs: { shape: outShape } });
  intermediates.push(product);
  for (const i of intermediates) {
    backend.disposeIntermediateTensorInfo(i);
  }
  return out;
}

// src/tfjs-backend-webgl/src/kernels/Conv2D.ts
function conv2d3(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dataFormat, dilations, dimRoundingMode } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad2, dimRoundingMode, false, $dataFormat);
  let out;
  if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 && convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 && convInfo.strideHeight === 1 && convInfo.strideWidth === 1 && (convInfo.padInfo.type === "SAME" || convInfo.padInfo.type === "VALID")) {
    out = conv2dByMatMul({ x, filter, convInfo, backend });
  } else if (env().getBool("WEBGL_CONV_IM2COL") && x.shape[0] === 1) {
    out = conv2dWithIm2Row({ x, filter, convInfo, backend });
  } else {
    const program = new Conv2DProgram(convInfo);
    out = backend.runWebGLProgram(program, [x, filter], "float32");
  }
  const outReshaped = reshape2({ inputs: { x: out }, backend, attrs: { shape: convInfo.outShape } });
  backend.disposeIntermediateTensorInfo(out);
  return outReshaped;
}
var conv2DConfig = {
  kernelName: Conv2D,
  backendName: "webgl",
  kernelFunc: conv2d3
};

// src/tfjs-backend-webgl/src/conv_backprop_gpu.ts
var Conv2DDerFilterProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "dy"];
    this.outputShape = convInfo.filterShape;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const isChannelsLast = convInfo.dataFormat === "channelsLast";
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
            int xR = wR + yR * ${strideHeight} - ${padTop};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
              int xC = wC + yC * ${strideWidth} - ${padLeft};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              if (${isChannelsLast}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var Conv2DDerInputProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "W"];
    this.outputShape = convInfo.inShape;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const isChannelsLast = convInfo.dataFormat === "channelsLast";
    const padTop = filterHeight - 1 - convInfo.padInfo.top;
    const padLeft = filterWidth - 1 - convInfo.padInfo.left;
    const rowDim = isChannelsLast ? 1 : 2;
    const colDim = isChannelsLast ? 2 : 3;
    const channelDim = isChannelsLast ? 3 : 1;
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${channelDim}];

        ivec2 dyCorner = ivec2(coords[${rowDim}], coords[${colDim}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${filterHeight} - 1 - wR;

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${filterWidth} - 1 - wC;

            for (int d2 = 0; d2 < ${convInfo.outChannels}; d2++) {

              if (${isChannelsLast}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var Conv3DDerFilterProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "dy"];
    this.outputShape = convInfo.filterShape;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padFront = convInfo.padInfo.front;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    this.userCode = `
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yF = 0; yF < ${convInfo.outDepth}; yF++) {
            int xF = wF + yF * ${strideDepth} - ${padFront};

            if (xF < 0 || xF >= ${convInfo.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
              int xR = wR + yR * ${strideHeight} - ${padTop};

              if (xR < 0 || xR >= ${convInfo.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
                int xC = wC + yC * ${strideWidth} - ${padLeft};

                if (xC < 0 || xC >= ${convInfo.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var Conv3DDerInputProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "W"];
    this.outputShape = convInfo.inShape;
    const filterDepth = convInfo.filterDepth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padFront = filterDepth - 1 - convInfo.padInfo.front;
    const padTop = filterHeight - 1 - convInfo.padInfo.top;
    const padLeft = filterWidth - 1 - convInfo.padInfo.left;
    this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${filterDepth}; wF++) {
          float dyF = float(dyFCorner + wF) / ${strideDepth}.0;

          if (dyF < 0.0 || dyF >= ${convInfo.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${filterDepth} - 1 - wF;

          for (int wR = 0; wR < ${filterHeight}; wR++) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${filterHeight} - 1 - wR;

            for (int wC = 0; wC < ${filterWidth}; wC++) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${filterWidth} - 1 - wC;

              for (int d2 = 0; d2 < ${convInfo.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Conv2DBackpropFilter.ts
function conv2DBackpropFilter2(args) {
  const { inputs, backend, attrs } = args;
  const { x, dy } = inputs;
  const { strides, pad: pad2, dataFormat, dimRoundingMode, filterShape } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filterShape, strides, 1, pad2, dimRoundingMode, false, $dataFormat);
  const program = new Conv2DDerFilterProgram(convInfo);
  return backend.runWebGLProgram(program, [x, dy], "float32");
}
var conv2DBackpropFilterConfig = {
  kernelName: Conv2DBackpropFilter,
  backendName: "webgl",
  kernelFunc: conv2DBackpropFilter2
};

// src/tfjs-backend-webgl/src/kernels/Conv2DBackpropInput.ts
function conv2DBackpropInput2(args) {
  const { inputs, backend, attrs } = args;
  const { dy, filter } = inputs;
  const { inputShape, strides, pad: pad2, dataFormat, dimRoundingMode } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(inputShape, filter.shape, strides, 1, pad2, dimRoundingMode, false, $dataFormat);
  const program = new Conv2DDerInputProgram(convInfo);
  return backend.runWebGLProgram(program, [dy, filter], "float32");
}
var conv2DBackpropInputConfig = {
  kernelName: Conv2DBackpropInput,
  backendName: "webgl",
  kernelFunc: conv2DBackpropInput2
};

// src/tfjs-backend-webgl/src/kernels/Conv3D.ts
function conv3D(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dilations } = attrs;
  const convInfo = backend_util_exports.computeConv3DInfo(x.shape, filter.shape, strides, dilations, pad2);
  const program = new Conv3DProgram(convInfo);
  return backend.runWebGLProgram(program, [x, filter], "float32");
}
var conv3DConfig = {
  kernelName: Conv3D,
  backendName: "webgl",
  kernelFunc: conv3D
};

// src/tfjs-backend-webgl/src/kernels/Conv3DBackpropFilterV2.ts
function conv3DBackpropFilterV2(args) {
  const { inputs, backend, attrs } = args;
  const { x, dy } = inputs;
  const { strides, pad: pad2, filterShape } = attrs;
  const convInfo = backend_util_exports.computeConv3DInfo(x.shape, filterShape, strides, 1, pad2);
  const program = new Conv3DDerFilterProgram(convInfo);
  return backend.runWebGLProgram(program, [x, dy], "float32");
}
var conv3DBackpropFilterV2Config = {
  kernelName: Conv3DBackpropFilterV2,
  backendName: "webgl",
  kernelFunc: conv3DBackpropFilterV2
};

// src/tfjs-backend-webgl/src/kernels/Conv3DBackpropInputV2.ts
function conv3DBackpropInput2(args) {
  const { inputs, backend, attrs } = args;
  const { dy, filter } = inputs;
  const { pad: pad2, strides, inputShape } = attrs;
  const convInfo = backend_util_exports.computeConv3DInfo(inputShape, filter.shape, strides, 1, pad2);
  const program = new Conv3DDerInputProgram(convInfo);
  return backend.runWebGLProgram(program, [dy, filter], "float32");
}
var conv3DBackpropInputConfig = {
  kernelName: Conv3DBackpropInputV2,
  backendName: "webgl",
  kernelFunc: conv3DBackpropInput2
};

// src/tfjs-backend-webgl/src/kernels/Cos.ts
var COS = CHECK_NAN_SNIPPET_UNARY + `
  return cos(x);
`;
var cos2 = unaryKernelFunc2({ opSnippet: COS });
var cosConfig = {
  kernelName: Cos,
  backendName: "webgl",
  kernelFunc: cos2
};

// src/tfjs-backend-webgl/src/kernels/Cosh.ts
var COSH = `
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`;
var cosh2 = unaryKernelFunc2({ opSnippet: COSH });
var coshConfig = {
  kernelName: Cosh,
  backendName: "webgl",
  kernelFunc: cosh2
};

// src/tfjs-backend-webgl/src/crop_and_resize_gpu.ts
var CropAndResizeProgram = class {
  constructor(imageShape, boxShape, cropSize, method, extrapolationValue) {
    this.variableNames = ["Image", "Boxes", "BoxInd"];
    this.outputShape = [];
    const [batch, imageHeight, imageWidth, depth] = imageShape;
    const [numBoxes] = boxShape;
    const [cropHeight, cropWidth] = cropSize;
    this.outputShape = [numBoxes, cropHeight, cropWidth, depth];
    const methodId = method === "bilinear" ? 1 : 0;
    const [inputHeightFloat, inputWidthFloat] = [`${imageHeight - 1}.0`, `${imageWidth - 1}.0`];
    const [heightRatio, heightScale, inY] = cropHeight > 1 ? [
      `${(imageHeight - 1) / (cropHeight - 1)}`,
      "(y2-y1) * height_ratio",
      `y1*${inputHeightFloat} + float(y)*(height_scale)`
    ] : [
      "0.0",
      "0.0",
      `0.5 * (y1+y2) * ${inputHeightFloat}`
    ];
    const [widthRatio, widthScale, inX] = cropWidth > 1 ? [
      `${(imageWidth - 1) / (cropWidth - 1)}`,
      "(x2-x1) * width_ratio",
      `x1*${inputWidthFloat} + float(x)*(width_scale)`
    ] : [
      "0.0",
      "0.0",
      `0.5 * (x1+x2) * ${inputWidthFloat}`
    ];
    this.userCode = `
      const float height_ratio = float(${heightRatio});
      const float width_ratio = float(${widthRatio});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${batch}) {
          return;
        }

        float height_scale = ${heightScale};
        float width_scale = ${widthScale};

        float in_y = ${inY};
        if( in_y < 0.0 || in_y > ${inputHeightFloat} ) {
          setOutput(float(${extrapolationValue}));
          return;
        }
        float in_x = ${inX};
        if( in_x < 0.0 || in_x > ${inputWidthFloat} ) {
          setOutput(float(${extrapolationValue}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${methodId} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/CropAndResize.ts
var cropAndResize2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { image, boxes, boxInd } = inputs;
  const { cropSize, method, extrapolationValue } = attrs;
  const program = new CropAndResizeProgram(image.shape, boxes.shape, cropSize, method, extrapolationValue);
  return backend.runWebGLProgram(program, [image, boxes, boxInd], "float32");
};
var cropAndResizeConfig = {
  kernelName: CropAndResize,
  backendName: "webgl",
  kernelFunc: cropAndResize2
};

// src/tfjs-backend-webgl/src/cumsum_gpu.ts
var CumSumProgram = class {
  constructor(shape, exclusive, reverse3) {
    this.variableNames = ["x"];
    this.customUniforms = [{ name: "index", type: "float" }];
    this.outputShape = shape;
    const rank = shape.length;
    const val = exclusive ? "0.0" : `getX(${getCoords2(rank, "coords")})`;
    const length = shape[shape.length - 1];
    let condition = "";
    let idxString = "";
    if (exclusive) {
      condition = reverse3 ? `end != ${length - 1}` : "end != 0";
      idxString = reverse3 ? "end + 1" : "end - 1";
    } else {
      condition = reverse3 ? `end + pow2 < ${length}` : "end >= pow2";
      idxString = reverse3 ? "end + pow2" : "end - pow2";
    }
    this.userCode = `
      void main() {
        ${getCoordsDataType(rank)} coords = getOutputCoords();
        int end = ${getFinalCoord(rank, "coords")};
        float val = ${val};
        int pow2 = int(pow(2.0, index));
        if (${condition}) {
          int idx = ${idxString};
          ${getFinalCoord(rank, "coords")} = idx;
          val += getX(${getCoords2(rank, "coords")});
        }
        setOutput(val);
      }
    `;
  }
};
function getCoords2(rank, name) {
  if (rank === 1) {
    return `${name}`;
  } else if (rank === 2) {
    return `${name}.x, ${name}.y`;
  } else if (rank === 3) {
    return `${name}.x, ${name}.y, ${name}.z`;
  } else if (rank === 4) {
    return `${name}.x, ${name}.y, ${name}.z, ${name}.w`;
  } else {
    throw Error(`Cumulative sum for rank ${rank} is not yet supported`);
  }
}
function getFinalCoord(rank, name) {
  if (rank === 1) {
    return `${name}`;
  } else if (rank === 2) {
    return `${name}.y`;
  } else if (rank === 3) {
    return `${name}.z`;
  } else if (rank === 4) {
    return `${name}.w`;
  } else {
    throw Error(`Cumulative sum for rank ${rank} is not yet supported`);
  }
}

// src/tfjs-backend-webgl/src/kernels/Cumsum.ts
function cumsum2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, exclusive, reverse: reverse3 } = attrs;
  const xRank = x.shape.length;
  const permutation = backend_util_exports.getAxesPermutation([axis], xRank);
  let permutedX = x;
  if (permutation != null) {
    permutedX = transpose3({ inputs: { x }, backend, attrs: { perm: permutation } });
  }
  const permutedAxis = backend_util_exports.getInnerMostAxes(1, xRank)[0];
  if (permutedAxis !== xRank - 1) {
    throw new Error(`WebGL cumsum shader expects an inner-most axis=${x.shape.length - 1} but got axis=${axis}`);
  }
  const size = permutedX.shape[permutedAxis];
  let result = identity2({ inputs: { x: permutedX }, backend });
  for (let i = 0; i <= Math.ceil(Math.log2(size)) - 1; i++) {
    const program = new CumSumProgram(permutedX.shape, false, reverse3);
    const customValues = [[i]];
    const prevResult = result;
    result = backend.runWebGLProgram(program, [result], result.dtype, customValues);
    backend.disposeIntermediateTensorInfo(prevResult);
  }
  if (exclusive) {
    const program = new CumSumProgram(permutedX.shape, exclusive, reverse3);
    const prevResult = result;
    result = backend.runWebGLProgram(program, [result], result.dtype);
    backend.disposeIntermediateTensorInfo(prevResult);
  }
  if (permutation != null) {
    const reversePermutation = backend_util_exports.getUndoAxesPermutation(permutation);
    const reverseTransposedResult = transpose3({ inputs: { x: result }, backend, attrs: { perm: reversePermutation } });
    backend.disposeIntermediateTensorInfo(result);
    backend.disposeIntermediateTensorInfo(permutedX);
    return reverseTransposedResult;
  }
  return result;
}
var cumsumConfig = {
  kernelName: Cumsum,
  backendName: "webgl",
  kernelFunc: cumsum2
};

// src/tfjs-backend-webgl/src/kernels/DenseBincount.ts
function denseBincount2(args) {
  const { inputs, backend, attrs } = args;
  const { x, weights } = inputs;
  const { size, binaryOutput } = attrs;
  if (x.shape.length === 1) {
    const xVals = backend.readSync(x.dataId);
    const weightsVals = backend.readSync(weights.dataId);
    const outVals = bincountImplCPU(xVals, weightsVals, weights.dtype, weights.shape, size);
    return backend.makeTensorInfo([size], weights.dtype, outVals);
  } else if (x.shape.length === 2) {
    const xBuf = backend.bufferSync(x);
    const weightsBuf = backend.bufferSync(weights);
    const outBuf = bincountReduceImplCPU(xBuf, weightsBuf, size, binaryOutput);
    return backend.makeTensorInfo(outBuf.shape, weights.dtype, outBuf.values);
  }
  throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${x.shape.length}.`);
}
var denseBincountConfig = {
  kernelName: DenseBincount,
  backendName: "webgl",
  kernelFunc: denseBincount2
};

// src/tfjs-backend-webgl/src/depth_to_space_gpu.ts
var DepthToSpaceProgram = class {
  constructor(outputShape, blockSize, dataFormat) {
    this.variableNames = ["x"];
    this.outputShape = [];
    this.outputShape = outputShape;
    this.blockSize = blockSize;
    this.dataFormat = dataFormat;
    this.userCode = `
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${blockSize};
      int offset_h = imod(h, ${blockSize});
      int in_w = w / ${blockSize};
      int offset_w = imod(w, ${blockSize});
      int offset_d = (offset_h * ${blockSize} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `;
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
      return this.outputShape[3];
    } else {
      return this.outputShape[1];
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

// src/tfjs-backend-webgl/src/kernels/DepthToSpace.ts
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
  const program = new DepthToSpaceProgram(outputShape, blockSize, dataFormat);
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var depthToSpaceConfig = {
  kernelName: DepthToSpace,
  backendName: "webgl",
  kernelFunc: depthToSpace2
};

// src/tfjs-backend-webgl/src/conv_gpu_depthwise.ts
var DepthwiseConv2DProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false, hasLeakyReluAlpha = false) {
    this.variableNames = ["x", "W"];
    this.customUniforms = [
      { name: "pads", type: "ivec2" },
      { name: "strides", type: "ivec2" },
      { name: "dilations", type: "ivec2" },
      { name: "inDims", type: "ivec2" }
    ];
    this.outputShape = convInfo.outShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const channelMul = convInfo.outChannels / convInfo.inChannels;
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivation) {
        activationSnippet = `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
      } else if (hasLeakyReluAlpha) {
        activationSnippet = `float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${activation}
        }`;
      } else {
        activationSnippet = `
          float activation(float x) {
            ${activation}
          }
        `;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyReluAlpha) {
      this.variableNames.push("leakyreluAlpha");
    }
    this.userCode = `
      ${activationSnippet}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${channelMul};
        int q = d2 - d1 * ${channelMul};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/conv_packed_gpu_depthwise.ts
var DepthwiseConvPacked2DProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false, hasLeakyReluAlpha = false) {
    this.variableNames = ["x", "W"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [
      { name: "pads", type: "ivec2" },
      { name: "strides", type: "ivec2" },
      { name: "dilations", type: "ivec2" },
      { name: "inDims", type: "ivec2" }
    ];
    this.outputShape = convInfo.outShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const channelMul = convInfo.outChannels / convInfo.inChannels;
    const padLeft = convInfo.padInfo.left;
    const strideWidth = convInfo.strideWidth;
    const dilationWidth = convInfo.dilationWidth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const texelsAcross = filterWidth;
    let mainLoop = `
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;
    for (let c = 0; c < filterWidth; c++) {
      mainLoop += `
          vec4 xTexelC${c * 2};
          int xTexelC${c * 2}Ready;
          vec4 xTexelC${c * 2 + 1};
          int xTexelC${c * 2 + 1}Ready;
          vec4 xC${c};`;
    }
    mainLoop += `
    for (int r = 0; r < ${filterHeight}; r++) {
      `;
    for (let c = 0; c < filterWidth; c++) {
      mainLoop += `
          xTexelC${c * 2} = vec4(0.0);
          xTexelC${c * 2}Ready = 0;
          xTexelC${c * 2 + 1} = vec4(0.0);
          xTexelC${c * 2 + 1}Ready = 0;
          xC${c} = vec4(0.0);`;
    }
    mainLoop += `
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;
    for (let texelC = 0; texelC < (texelsAcross + 1) / 2; texelC++) {
      const colIndex = texelC * 2;
      mainLoop += `
          xC = xCCorner + ${colIndex * dilationWidth};
          `;
      if (strideWidth === 1) {
        if (colIndex < filterWidth) {
          if (padLeft % 2 === 1) {
            mainLoop += `
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex}Ready == 0) {
                  xTexelC${colIndex} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${colIndex}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex}Ready = 1;
                }
              `;
            if (dilationWidth === 1 && colIndex > 0) {
              mainLoop += `
                xC${colIndex} = vec4(xTexelC${colIndex - 2}.zw, xTexelC${colIndex}.xy);
                `;
            } else {
              mainLoop += `
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${colIndex} = vec4(previous.zw, xTexelC${colIndex}.xy);
                  } else {
                    xC${colIndex} = vec4(0.0, 0.0, xTexelC${colIndex}.xy);
                  }
                  `;
            }
          } else {
            mainLoop += `
                if (xC >= 0 && xC < inDims[1] && xTexelC${colIndex}Ready == 0) {
                  xTexelC${colIndex} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${colIndex}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex}Ready = 1;
                }

                xC${colIndex} = xTexelC${colIndex};
                `;
          }
          if (colIndex + 1 < filterWidth) {
            const nextTexelOffset = padLeft % 2 === 0 ? util_exports.nearestLargerEven(dilationWidth) : dilationWidth;
            if (dilationWidth % 2 === 0 && padLeft % 2 === 1 || dilationWidth % 2 !== 0 && padLeft % 2 !== 1) {
              mainLoop += `
                  xCOffset = xC + imod(pads[1], 2) + ${nextTexelOffset};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                    xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${colIndex + 1}.zw = vec2(0.0);
                    }
                    xTexelC${colIndex + 1}Ready = 1;
                  }
                  `;
              if (dilationWidth > 1) {
                mainLoop += `
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex}Ready == 0) {
                      xTexelC${colIndex} = getX(batch, xR, xCOffset, d1);
                      xTexelC${colIndex}Ready = 1;
                    }
                    `;
              }
              mainLoop += `
                  xC${colIndex + 1} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.xy);
                  `;
            } else {
              if (nextTexelOffset === 1) {
                mainLoop += `
                    xC${colIndex + 1} = xTexelC${colIndex};
                    `;
              } else {
                mainLoop += `
                    xCOffset = xC + ${nextTexelOffset};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                      xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${colIndex + 1}.zw = vec2(0.0);
                      }
                      xTexelC${colIndex + 1}Ready = 1;
                    }

                    xC${colIndex + 1} = xTexelC${colIndex + 1};
                    `;
              }
            }
          }
        }
      } else {
        if (colIndex < filterWidth) {
          if (padLeft % 2 === 1) {
            mainLoop += `
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex}Ready == 0) {
                  xTexelC${colIndex} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${colIndex}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                  xTexelC${colIndex + 1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${colIndex + 1}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex + 1}Ready = 1;
                }

                xC${colIndex} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.zw);
              `;
            if (colIndex + 1 < filterWidth) {
              mainLoop += `
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${colIndex + 1} = vec4(xTexelC${colIndex + 1}.xy, final.xy);
                `;
            }
          } else {
            mainLoop += `
                if(xC >= 0 && xC < inDims[1] && xTexelC${colIndex}Ready == 0) {
                  xTexelC${colIndex} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${colIndex}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                  xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${colIndex + 1}.zw = vec2(0.);
                  }
                  xTexelC${colIndex + 1}Ready = 1;
                }

                xC${colIndex} = vec4(
                  xTexelC${colIndex}.xy, xTexelC${colIndex + 1}.xy);
              `;
            if (colIndex + 1 < filterWidth) {
              mainLoop += `
                  xC${colIndex + 1} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.zw);
                `;
            }
          }
        }
      }
      if (colIndex < filterWidth) {
        mainLoop += `
            wTexel = getW(r, ${colIndex}, d1, q);
            dotProd += xC${colIndex} * vec4(wTexel.xz, wTexel.xz);
          `;
        if (colIndex + 1 < filterWidth) {
          mainLoop += `
              wTexel = getW(r, ${colIndex + 1}, d1, q);
              dotProd += xC${colIndex + 1} * vec4(wTexel.xz, wTexel.xz);
            `;
        }
      }
    }
    mainLoop += `
    }
  `;
    mainLoop += `
      }
    `;
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivation) {
        activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
      } else if (hasLeakyReluAlpha) {
        activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${activation}
        }`;
      } else {
        activationSnippet = `vec4 activation(vec4 x) {
          ${activation}
        }`;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyReluAlpha) {
      this.variableNames.push("leakyreluAlpha");
    }
    this.userCode = `
      ${activationSnippet}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${channelMul};
        int q = d2 - d1 * ${channelMul};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${mainLoop}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/DepthwiseConv2dNative.ts
function depthwiseConv2dNative(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dilations, dimRoundingMode } = attrs;
  let $dilations = dilations;
  if ($dilations == null) {
    $dilations = [1, 1];
  }
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, $dilations), () => `Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${$dilations}'`);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, $dilations, pad2, dimRoundingMode, true);
  let program;
  if (env().getBool("WEBGL_PACK_DEPTHWISECONV") && convInfo.strideWidth <= 2 && convInfo.outChannels / convInfo.inChannels === 1) {
    program = new DepthwiseConvPacked2DProgram(convInfo);
  } else {
    program = new DepthwiseConv2DProgram(convInfo);
  }
  const customValues = [
    [convInfo.padInfo.top, convInfo.padInfo.left],
    [convInfo.strideHeight, convInfo.strideWidth],
    [convInfo.dilationHeight, convInfo.dilationWidth],
    [convInfo.inHeight, convInfo.inWidth]
  ];
  return backend.runWebGLProgram(program, [x, filter], "float32", customValues);
}
var depthwiseConv2dNativeConfig = {
  kernelName: DepthwiseConv2dNative,
  backendName: "webgl",
  kernelFunc: depthwiseConv2dNative
};

// src/tfjs-backend-webgl/src/conv_backprop_gpu_depthwise.ts
var DepthwiseConv2DDerFilterProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "dy"];
    this.outputShape = convInfo.filterShape;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const channelMul = convInfo.outChannels / convInfo.inChannels;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${channelMul} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
            int xR = wR + yR * ${strideHeight} - ${padTop};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
              int xC = wC + yC * ${strideWidth} - ${padLeft};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var DepthwiseConv2DDerInputProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "W"];
    this.outputShape = convInfo.inShape;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padTop = filterHeight - 1 - convInfo.padInfo.top;
    const padLeft = filterWidth - 1 - convInfo.padInfo.left;
    const channelMul = convInfo.outChannels / convInfo.inChannels;
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${filterHeight}; wR++) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${filterHeight} - 1 - wR;

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${filterWidth} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${channelMul}; dm++) {
              int d2 = d1 * ${channelMul} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/DepthwiseConv2dNativeBackpropFilter.ts
function depthwiseConv2dNativeBackpropFilter2(args) {
  const { inputs, backend, attrs } = args;
  const { x, dy } = inputs;
  const { strides, dilations, pad: pad2, dimRoundingMode, filterShape } = attrs;
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filterShape, strides, dilations, pad2, dimRoundingMode, true);
  const program = new DepthwiseConv2DDerFilterProgram(convInfo);
  return backend.runWebGLProgram(program, [x, dy], "float32");
}
var depthwiseConv2dNativeBackpropFilterConfig = {
  kernelName: DepthwiseConv2dNativeBackpropFilter,
  backendName: "webgl",
  kernelFunc: depthwiseConv2dNativeBackpropFilter2
};

// src/tfjs-backend-webgl/src/kernels/DepthwiseConv2dNativeBackpropInput.ts
function depthwiseConv2dNativeBackpropInput2(args) {
  const { inputs, backend, attrs } = args;
  const { dy, filter } = inputs;
  const { strides, dilations, pad: pad2, dimRoundingMode, inputShape } = attrs;
  const convInfo = backend_util_exports.computeConv2DInfo(inputShape, filter.shape, strides, dilations, pad2, dimRoundingMode, true);
  const program = new DepthwiseConv2DDerInputProgram(convInfo);
  return backend.runWebGLProgram(program, [dy, filter], "float32");
}
var depthwiseConv2dNativeBackpropInputConfig = {
  kernelName: DepthwiseConv2dNativeBackpropInput,
  backendName: "webgl",
  kernelFunc: depthwiseConv2dNativeBackpropInput2
};

// src/tfjs-backend-webgl/src/diag_gpu.ts
var DiagProgram = class {
  constructor(size) {
    this.variableNames = ["X"];
    this.outputShape = [size, size];
    this.userCode = `
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Diag.ts
function diag2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  const outShape = [...x.shape, ...x.shape];
  const xSize = util_exports.sizeFromShape(x.shape);
  const flat = reshape2({ inputs: { x }, backend, attrs: { shape: [xSize] } });
  const program = new DiagProgram(xSize);
  const res = backend.runWebGLProgram(program, [flat], flat.dtype);
  const out = reshape2({ inputs: { x: res }, backend, attrs: { shape: outShape } });
  backend.disposeIntermediateTensorInfo(flat);
  backend.disposeIntermediateTensorInfo(res);
  return out;
}
var diagConfig = {
  kernelName: Diag,
  backendName: "webgl",
  kernelFunc: diag2
};

// src/tfjs-backend-webgl/src/dilation_gpu.ts
var Dilation2DProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "W"];
    this.outputShape = convInfo.outShape;
    const {
      inHeight,
      inWidth,
      padInfo,
      strideHeight,
      strideWidth,
      filterHeight,
      filterWidth,
      dilationHeight,
      dilationWidth
    } = convInfo;
    const { top: padTop, left: padLeft } = padInfo;
    this.userCode = `
      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${filterHeight}; h++) {
          int hIn = hBeg + h * ${dilationHeight};

          if (hIn >= 0 && hIn < ${inHeight}) {
            for (int w = 0; w < ${filterWidth}; w++) {
              int wIn = wBeg + w * ${dilationWidth};

              if (wIn >= 0 && wIn < ${inWidth}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Dilation2D.ts
function dilation2D(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dilations } = attrs;
  const convInfo = backend_util_exports.computeDilation2DInfo(x.shape, filter.shape, strides, pad2, "NHWC", dilations);
  let out;
  const program = new Dilation2DProgram(convInfo);
  out = backend.runWebGLProgram(program, [x, filter], "float32");
  const outReshaped = reshape2({ inputs: { x: out }, backend, attrs: { shape: convInfo.outShape } });
  backend.disposeIntermediateTensorInfo(out);
  return outReshaped;
}
var dilation2DConfig = {
  kernelName: Dilation2D,
  backendName: "webgl",
  kernelFunc: dilation2D
};

// src/tfjs-backend-webgl/src/kernels/Einsum.ts
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
        out = multiply2({ inputs: { a: x, b: out }, backend });
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
    backend.disposeIntermediateTensorInfo(tensorInfo);
  }
  return out;
}
var einsumConfig = {
  kernelName: Einsum,
  backendName: "webgl",
  kernelFunc: einsum2
};

// src/tfjs-backend-webgl/src/kernels/Elu.ts
var ELU3 = `return (x >= 0.0) ? x : (exp(x) - 1.0);`;
var ELU_PACKED = `
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`;
var elu2 = unaryKernelFunc2({ opSnippet: ELU3, packedOpSnippet: ELU_PACKED });
var eluConfig = {
  kernelName: Elu,
  backendName: "webgl",
  kernelFunc: elu2
};

// src/tfjs-backend-webgl/src/kernels/EluGrad.ts
var ELU_DER = `return (b >= 1.0) ? a : a * (b + 1.0);`;
var ELU_DER_PACKED = `
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`;
var eluGrad = (args) => {
  const { inputs, backend } = args;
  const { dy, y } = inputs;
  const program = env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new BinaryOpPackedProgram(ELU_DER_PACKED, dy.shape, y.shape) : new BinaryOpProgram(ELU_DER, dy.shape, y.shape);
  return backend.runWebGLProgram(program, [dy, y], dy.dtype);
};
var eluGradConfig = {
  kernelName: EluGrad,
  backendName: "webgl",
  kernelFunc: eluGrad
};

// src/tfjs-backend-webgl/src/kernels/Equal.ts
var PACKED_EQUAL = `
  return vec4(equal(a, b));
`;
var EQUAL = `return float(a == b);`;
var equal3 = binaryKernelFunc2({
  opSnippet: EQUAL,
  packedOpSnippet: PACKED_EQUAL,
  dtype: "bool",
  cpuKernelImpl: equalImplCPU
});
var equalConfig = {
  kernelName: Equal,
  backendName: "webgl",
  kernelFunc: equal3
};

// src/tfjs-backend-webgl/src/kernels/Erf.ts
var ERF = `
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${backend_util_exports.ERF_P};
  float a1 = ${backend_util_exports.ERF_A1};
  float a2 = ${backend_util_exports.ERF_A2};
  float a3 = ${backend_util_exports.ERF_A3};
  float a4 = ${backend_util_exports.ERF_A4};
  float a5 = ${backend_util_exports.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`;
var erf2 = unaryKernelFunc2({ opSnippet: ERF });
var erfConfig = {
  kernelName: Erf,
  backendName: "webgl",
  kernelFunc: erf2
};

// src/tfjs-backend-webgl/src/kernels/Exp.ts
var EXP = `return exp(x);`;
var exp3 = unaryKernelFunc2({
  opSnippet: EXP,
  packedOpSnippet: EXP,
  cpuKernelImpl: expImplCPU,
  dtype: "float32"
});
var expConfig = {
  kernelName: Exp,
  backendName: "webgl",
  kernelFunc: exp3
};

// src/tfjs-backend-webgl/src/kernels/ExpandDims.ts
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
  backendName: "webgl",
  kernelFunc: expandDims2
};

// src/tfjs-backend-webgl/src/kernels/Expm1.ts
var EXPM1 = `return exp(x) - 1.0;`;
var expm13 = unaryKernelFunc2({ opSnippet: EXPM1, packedOpSnippet: EXPM1, cpuKernelImpl: expm1ImplCPU });
var expm1Config = {
  kernelName: Expm1,
  backendName: "webgl",
  kernelFunc: expm13
};

// src/tfjs-backend-webgl/src/fft_gpu.ts
var FFTProgram = class {
  constructor(component, inputShape, inverse) {
    this.variableNames = ["real", "imag"];
    const innerDim = inputShape[1];
    this.outputShape = inputShape;
    const exponentMultiplierSnippet = inverse ? `2.0 * ${Math.PI}` : `-2.0 * ${Math.PI}`;
    const resultDenominator = inverse ? `${innerDim}.0` : "1.0";
    let opString;
    if (component === "real") {
      opString = "return real * expR - imag * expI;";
    } else if (component === "imag") {
      opString = "return real * expI + imag * expR;";
    } else {
      throw new Error(`FFT component must be either "real" or "imag", got ${component}.`);
    }
    this.userCode = `
      const float exponentMultiplier = ${exponentMultiplierSnippet};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${opString}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${innerDim});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${innerDim}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${resultDenominator};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/FFT_impl.ts
function fftImpl(x, inverse, backend) {
  const xData = backend.texData.get(x.dataId);
  const inputSize = util_exports.sizeFromShape(x.shape);
  const innerDimensionSize = x.shape[x.shape.length - 1];
  const batch = inputSize / innerDimensionSize;
  const input2D = reshape2({ inputs: { x }, backend, attrs: { shape: [batch, innerDimensionSize] } });
  const xShape = input2D.shape;
  const realProgram = new FFTProgram("real", xShape, inverse);
  const imagProgram = new FFTProgram("imag", xShape, inverse);
  const inputs = [
    {
      dataId: xData.complexTensorInfos.real.dataId,
      dtype: xData.complexTensorInfos.real.dtype,
      shape: xShape
    },
    {
      dataId: xData.complexTensorInfos.imag.dataId,
      dtype: xData.complexTensorInfos.imag.dtype,
      shape: xShape
    }
  ];
  const realPart = backend.runWebGLProgram(realProgram, inputs, "float32");
  const imagPart = backend.runWebGLProgram(imagProgram, inputs, "float32");
  const complexOutput = complex3({ inputs: { real: realPart, imag: imagPart }, backend });
  backend.disposeIntermediateTensorInfo(realPart);
  backend.disposeIntermediateTensorInfo(imagPart);
  const complexOutputReshaped = reshape2({ inputs: { x: complexOutput }, backend, attrs: { shape: x.shape } });
  backend.disposeIntermediateTensorInfo(input2D);
  backend.disposeIntermediateTensorInfo(complexOutput);
  return complexOutputReshaped;
}

// src/tfjs-backend-webgl/src/kernels/FFT.ts
function fft2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  return fftImpl(input, false, backend);
}
var fftConfig = {
  kernelName: FFT,
  backendName: "webgl",
  kernelFunc: fft2
};

// src/tfjs-backend-webgl/src/fill_gpu.ts
var FillProgram = class {
  constructor(shape, value) {
    this.outputShape = [];
    this.customUniforms = [{ name: "value", type: "float" }];
    this.variableNames = ["x"];
    this.outputShape = shape;
    this.userCode = `
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Fill.ts
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
    const program = new FillProgram(shape, value);
    const customValues = [[value]];
    return backend.runWebGLProgram(program, [], dtype, customValues);
  }
}
var fillConfig = {
  kernelName: Fill,
  backendName: "webgl",
  kernelFunc: fill2
};

// src/tfjs-backend-webgl/src/flip_left_right_gpu.ts
var FlipLeftRightProgram = class {
  constructor(imageShape) {
    this.variableNames = ["Image"];
    this.outputShape = [];
    const imageWidth = imageShape[2];
    this.outputShape = imageShape;
    this.userCode = `
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${imageWidth} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${imageWidth}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/FlipLeftRight.ts
var flipLeftRightConfig = {
  kernelName: FlipLeftRight,
  backendName: "webgl",
  kernelFunc: ({ inputs, backend }) => {
    const { image } = inputs;
    const webglBackend = backend;
    const program = new FlipLeftRightProgram(image.shape);
    const output = webglBackend.runWebGLProgram(program, [image], image.dtype);
    return output;
  }
};

// src/tfjs-backend-webgl/src/kernels/Floor.ts
var FLOOR = `return floor(x);`;
var floor3 = unaryKernelFunc2({ opSnippet: FLOOR, packedOpSnippet: FLOOR, cpuKernelImpl: floorImplCPU });
var floorConfig = {
  kernelName: Floor,
  backendName: "webgl",
  kernelFunc: floor3
};

// src/tfjs-backend-webgl/src/kernels/FloorDiv.ts
var INT_DIV = `
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`;
var INT_DIV_PACKED = `
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`;
var floorDiv2 = binaryKernelFunc2({ opSnippet: INT_DIV, packedOpSnippet: INT_DIV_PACKED, dtype: "int32" });
var floorDivConfig = {
  kernelName: FloorDiv,
  backendName: "webgl",
  kernelFunc: floorDiv2
};

// src/tfjs-backend-webgl/src/kernels/FromPixels_utils/from_pixels_gpu.ts
var FromPixelsProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    const glsl = getGlslDifferences();
    const [height, width] = outputShape;
    this.outputShape = outputShape;
    this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${width}.0, ${height}.0);

        vec4 values = ${glsl.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/FromPixels_utils/from_pixels_packed_gpu.ts
var FromPixelsPackedProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = false;
    this.packedOutput = true;
    const glsl = getGlslDifferences();
    const [height, width] = outputShape;
    this.outputShape = outputShape;
    this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${width}.0, ${height}.0);
            vec4 values = ${glsl.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${glsl.output} = result;
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/FromPixels.ts
var fromPixelsConfig = {
  kernelName: FromPixels,
  backendName: "webgl",
  kernelFunc: fromPixels2
};
var fromPixels2DContext2;
function fromPixels2(args) {
  const { inputs, backend, attrs } = args;
  let { pixels } = inputs;
  const { numChannels } = attrs;
  const isVideo = typeof HTMLVideoElement !== "undefined" && pixels instanceof HTMLVideoElement;
  const isImage = typeof HTMLImageElement !== "undefined" && pixels instanceof HTMLImageElement;
  const [width, height] = isVideo ? [
    pixels.videoWidth,
    pixels.videoHeight
  ] : [pixels.width, pixels.height];
  const texShape = [height, width];
  const outShape = [height, width, numChannels];
  if (isImage || isVideo) {
    if (fromPixels2DContext2 == null) {
      fromPixels2DContext2 = document.createElement("canvas").getContext("2d");
    }
    fromPixels2DContext2.canvas.width = width;
    fromPixels2DContext2.canvas.height = height;
    fromPixels2DContext2.drawImage(pixels, 0, 0, width, height);
    pixels = fromPixels2DContext2.canvas;
  }
  const tempPixelHandle = backend.makeTensorInfo(texShape, "int32");
  backend.texData.get(tempPixelHandle.dataId).usage = TextureUsage.PIXELS;
  backend.gpgpu.uploadPixelDataToTexture(backend.getTexture(tempPixelHandle.dataId), pixels);
  const program = env().getBool("WEBGL_PACK") ? new FromPixelsPackedProgram(outShape) : new FromPixelsProgram(outShape);
  const res = backend.runWebGLProgram(program, [tempPixelHandle], "int32");
  backend.disposeData(tempPixelHandle.dataId);
  return res;
}

// src/tfjs-backend-webgl/src/kernels/FusedConv2D.ts
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
  let out;
  const intermediates = [];
  if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 && convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 && convInfo.strideHeight === 1 && convInfo.strideWidth === 1 && (convInfo.padInfo.type === "SAME" || convInfo.padInfo.type === "VALID")) {
    out = conv2dByMatMul({
      x,
      filter,
      convInfo,
      backend,
      bias,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    });
  } else if (env().getBool("WEBGL_CONV_IM2COL") && x.shape[0] === 1) {
    out = conv2dWithIm2Row({
      x,
      filter,
      convInfo,
      backend,
      bias,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    });
  } else {
    const hasBias = bias != null;
    const hasPreluActivationWeights = preluActivationWeights != null;
    const hasLeakyreluAlpha = activation === "leakyrelu";
    const fusedActivation = activation ? mapActivationToShaderProgram(activation, false) : null;
    const program = new Conv2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
    const inputs2 = [x, filter];
    if (bias) {
      inputs2.push(bias);
    }
    if (preluActivationWeights) {
      inputs2.push(preluActivationWeights);
    }
    if (hasLeakyreluAlpha) {
      const $leakyreluAlpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(leakyreluAlpha, "float32"));
      inputs2.push($leakyreluAlpha);
      intermediates.push($leakyreluAlpha);
    }
    out = backend.runWebGLProgram(program, inputs2, "float32");
  }
  const outReshaped = reshape2({ inputs: { x: out }, backend, attrs: { shape: convInfo.outShape } });
  intermediates.push(out);
  intermediates.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return outReshaped;
}
var fusedConv2DConfig = {
  kernelName: FusedConv2D,
  backendName: "webgl",
  kernelFunc: fusedConv2d
};

// src/tfjs-backend-webgl/src/kernels/FusedDepthwiseConv2D.ts
function fusedDepthwiseConv2D(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter, bias, preluActivationWeights } = inputs;
  const { strides, pad: pad2, dilations, dimRoundingMode, activation, leakyreluAlpha } = attrs;
  const intermediates = [];
  let $dilations = dilations;
  if ($dilations == null) {
    $dilations = [1, 1];
  }
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, $dilations), () => `Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${$dilations}'`);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, $dilations, pad2, dimRoundingMode, true);
  const shouldPackDepthwiseConv = env().getBool("WEBGL_PACK_DEPTHWISECONV") && convInfo.strideWidth <= 2 && convInfo.outChannels / convInfo.inChannels === 1;
  const fusedActivation = activation ? mapActivationToShaderProgram(activation, shouldPackDepthwiseConv) : null;
  const programInputs = [x, filter];
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  const hasLeakyreluAlpha = activation === "leakyrelu";
  if (hasBias) {
    programInputs.push(bias);
  }
  if (hasPreluActivationWeights) {
    programInputs.push(preluActivationWeights);
  }
  if (hasLeakyreluAlpha) {
    const $leakyreluAlpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(leakyreluAlpha, "float32"));
    programInputs.push($leakyreluAlpha);
    intermediates.push($leakyreluAlpha);
  }
  let program;
  if (shouldPackDepthwiseConv) {
    program = new DepthwiseConvPacked2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
  } else {
    program = new DepthwiseConv2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
  }
  const customValues = [
    [convInfo.padInfo.top, convInfo.padInfo.left],
    [convInfo.strideHeight, convInfo.strideWidth],
    [convInfo.dilationHeight, convInfo.dilationWidth],
    [convInfo.inHeight, convInfo.inWidth]
  ];
  const result = backend.runWebGLProgram(program, programInputs, "float32", customValues);
  intermediates.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
}
var fusedDepthwiseConv2DConfig = {
  kernelName: FusedDepthwiseConv2D,
  backendName: "webgl",
  kernelFunc: fusedDepthwiseConv2D
};

// src/tfjs-backend-webgl/src/gather_nd_gpu.ts
var GatherNDProgram = class {
  constructor(sliceDim, strides, shape) {
    this.sliceDim = sliceDim;
    this.strides = strides;
    this.variableNames = ["x", "indices"];
    this.outputShape = shape;
    const stridesType = getCoordsDataType(strides.length);
    const dtype = getCoordsDataType(shape.length);
    const strideString = this.sliceDim > 1 ? "strides[j]" : "strides";
    this.userCode = `
        ${stridesType} strides = ${stridesType}(${this.strides});
         void main() {
          ${dtype} coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < ${this.sliceDim}; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * ${strideString};
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `;
  }
};

// src/tfjs-backend-webgl/src/kernels/GatherNd.ts
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
  const program = new GatherNDProgram(sliceRank, strides, [numSlices, sliceSize]);
  const res = backend.runWebGLProgram(program, [flattenX, flattenIndices], flattenX.dtype);
  const reshaped = reshape2({ inputs: { x: res }, backend, attrs: { shape: resultShape } });
  backend.disposeIntermediateTensorInfo(flattenIndices);
  backend.disposeIntermediateTensorInfo(flattenX);
  backend.disposeIntermediateTensorInfo(res);
  return reshaped;
}
var gatherNdConfig = {
  kernelName: GatherNd,
  backendName: "webgl",
  kernelFunc: gatherNd
};

// src/tfjs-backend-webgl/src/gather_gpu.ts
var GatherProgram = class {
  constructor(aShape, outputShape) {
    this.variableNames = ["A", "indices"];
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    const dtype = getCoordsDataType(this.rank);
    const sourceCoords = getSourceCoords2(aShape, 2);
    this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        setOutput(getA(${sourceCoords}));
      }
    `;
  }
};
function getSourceCoords2(aShape, axis) {
  const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"];
  const sourceCoords = [];
  for (let i = 0; i < aShape.length; i++) {
    if (i === 2) {
      sourceCoords.push("int(getIndices(resRC.x, resRC.z))");
    } else {
      sourceCoords.push(`${currentCoords[i]}`);
    }
  }
  return sourceCoords.join();
}

// src/tfjs-backend-webgl/src/kernels/GatherV2.ts
function gatherV2(args) {
  const { inputs, backend, attrs } = args;
  const { x, indices } = inputs;
  const { axis, batchDims } = attrs;
  const parsedAxis = util_exports.parseAxisParam(axis, x.shape)[0];
  const indicesVals = backend.readSync(indices.dataId);
  const axisDim = x.shape[parsedAxis];
  for (let i = 0; i < indicesVals.length; ++i) {
    const index = indicesVals[i];
    util_exports.assert(index <= axisDim - 1 && index >= 0, () => `GatherV2: the index value ${index} is not in [0, ${axisDim - 1}]`);
  }
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
  if (backend.shouldExecuteOnCPU([x, indices]) || x.dtype === "string") {
    const indicesBuf = backend.bufferSync(flattenIndex);
    const xBuf = backend.bufferSync(flattenX);
    const outBuf = gatherV2ImplCPU(xBuf, indicesBuf, flattenOutputShape);
    toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
    return backend.makeTensorInfo(shapeInfo.outputShape, outBuf.dtype, outBuf.values);
  }
  const program = new GatherProgram(flattenX.shape, flattenOutputShape);
  const res = backend.runWebGLProgram(program, [flattenX, flattenIndex], flattenX.dtype);
  toDispose.push(res);
  const reshaped = reshape2({ inputs: { x: res }, backend, attrs: { shape: shapeInfo.outputShape } });
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return reshaped;
}
var gatherV2Config = {
  kernelName: GatherV2,
  backendName: "webgl",
  kernelFunc: gatherV2
};

// src/tfjs-backend-webgl/src/kernels/Greater.ts
var GREATER = `return float(a > b);`;
var GREATER_PACKED = `
  return vec4(greaterThan(a, b));
`;
var greater3 = binaryKernelFunc2({
  opSnippet: GREATER,
  packedOpSnippet: GREATER_PACKED,
  cpuKernelImpl: greaterImplCPU,
  dtype: "bool"
});
var greaterConfig = {
  kernelName: Greater,
  backendName: "webgl",
  kernelFunc: greater3
};

// src/tfjs-backend-webgl/src/kernels/GreaterEqual.ts
var GREATER_EQUAL = `return float(a >= b);`;
var GREATER_EQUAL_PACKED = `
  return vec4(greaterThanEqual(a, b));
`;
var greaterEqual3 = binaryKernelFunc2({
  opSnippet: GREATER_EQUAL,
  packedOpSnippet: GREATER_EQUAL_PACKED,
  dtype: "bool",
  cpuKernelImpl: greaterEqualImplCPU
});
var greaterEqualConfig = {
  kernelName: GreaterEqual,
  backendName: "webgl",
  kernelFunc: greaterEqual3
};

// src/tfjs-backend-webgl/src/kernels/IFFT.ts
function ifft2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  return fftImpl(input, true, backend);
}
var ifftConfig = {
  kernelName: IFFT,
  backendName: "webgl",
  kernelFunc: ifft2
};

// src/tfjs-backend-webgl/src/kernels/IsFinite.ts
var IS_FINITE = `return float(!isnan(x) && !isinf(x));`;
var isFinite3 = unaryKernelFunc2({ opSnippet: IS_FINITE, dtype: "bool" });
var isFiniteConfig = {
  kernelName: IsFinite,
  backendName: "webgl",
  kernelFunc: isFinite3
};

// src/tfjs-backend-webgl/src/kernels/IsInf.ts
var IS_INF = `return float(isinf(x));`;
var isInf2 = unaryKernelFunc2({ opSnippet: IS_INF, dtype: "bool" });
var isInfConfig = {
  kernelName: IsInf,
  backendName: "webgl",
  kernelFunc: isInf2
};

// src/tfjs-backend-webgl/src/kernels/IsNaN.ts
var IS_NAN = `return float(isnan(x));`;
var isNaN3 = unaryKernelFunc2({ opSnippet: IS_NAN, dtype: "bool" });
var isNaNConfig = {
  kernelName: IsNan,
  backendName: "webgl",
  kernelFunc: isNaN3
};

// src/tfjs-backend-webgl/src/kernels/Less.ts
var LESS = `return float(a < b);`;
var LESS_PACKED = `
  return vec4(lessThan(a, b));
`;
var less3 = binaryKernelFunc2({
  opSnippet: LESS,
  packedOpSnippet: LESS_PACKED,
  cpuKernelImpl: lessImplCPU,
  dtype: "bool"
});
var lessConfig = {
  kernelName: Less,
  backendName: "webgl",
  kernelFunc: less3
};

// src/tfjs-backend-webgl/src/kernels/LessEqual.ts
var LESS_EQUAL = `return float(a <= b);`;
var LESS_EQUAL_PACKED = `
  return vec4(lessThanEqual(a, b));
`;
var lessEqual3 = binaryKernelFunc2({
  opSnippet: LESS_EQUAL,
  packedOpSnippet: LESS_EQUAL_PACKED,
  cpuKernelImpl: lessEqualImplCPU,
  dtype: "bool"
});
var lessEqualConfig = {
  kernelName: LessEqual,
  backendName: "webgl",
  kernelFunc: lessEqual3
};

// src/tfjs-backend-webgl/src/kernels/LinSpace.ts
function linSpace(args) {
  const { backend, attrs } = args;
  const { start, stop, num } = attrs;
  const outVals = linSpaceImplCPU(start, stop, num);
  return backend.makeTensorInfo([outVals.length], "float32", outVals);
}
var linSpaceConfig = {
  kernelName: LinSpace,
  backendName: "webgl",
  kernelFunc: linSpace
};

// src/tfjs-backend-webgl/src/kernels/Log.ts
var LOG = `if (x < 0.0) return NAN;
  return log(x);`;
var LOG_PACKED = `
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`;
var log6 = unaryKernelFunc2({ opSnippet: LOG, packedOpSnippet: LOG_PACKED, cpuKernelImpl: logImplCPU });
var logConfig = {
  kernelName: Log,
  backendName: "webgl",
  kernelFunc: log6
};

// src/tfjs-backend-webgl/src/kernels/Log1p.ts
var LOG1P = `return log(1.0 + x);`;
var log1p2 = unaryKernelFunc2({ opSnippet: LOG1P });
var log1pConfig = {
  kernelName: Log1p,
  backendName: "webgl",
  kernelFunc: log1p2
};

// src/tfjs-backend-webgl/src/kernels/LogicalAnd.ts
var LOGICAL_AND = `return float(a >= 1.0 && b >= 1.0);`;
var LOGICAL_AND_PACKED = `
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`;
var logicalAnd2 = binaryKernelFunc2({
  opSnippet: LOGICAL_AND,
  packedOpSnippet: LOGICAL_AND_PACKED,
  dtype: "bool"
});
var logicalAndConfig = {
  kernelName: LogicalAnd,
  backendName: "webgl",
  kernelFunc: logicalAnd2
};

// src/tfjs-backend-webgl/src/kernels/LogicalNot.ts
var LOGICAL_NOT = `return float(!(x >= 1.0));`;
var logicalNot2 = unaryKernelFunc2({ opSnippet: LOGICAL_NOT });
var logicalNotConfig = {
  kernelName: LogicalNot,
  backendName: "webgl",
  kernelFunc: logicalNot2
};

// src/tfjs-backend-webgl/src/kernels/LogicalOr.ts
var LOGICAL_OR = `return float(a >= 1.0 || b >= 1.0);`;
var LOGICAL_OR_PACKED = `
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`;
var logicalOr2 = binaryKernelFunc2({ opSnippet: LOGICAL_OR, packedOpSnippet: LOGICAL_OR_PACKED, dtype: "bool" });
var logicalOrConfig = {
  kernelName: LogicalOr,
  backendName: "webgl",
  kernelFunc: logicalOr2
};

// src/tfjs-backend-webgl/src/lrn_gpu.ts
var LRNProgram = class {
  constructor(xShape, radius, bias, alpha, beta) {
    this.variableNames = ["x"];
    this.outputShape = [];
    const rad = radius;
    const maxD = xShape[3] - 1;
    this.outputShape = xShape;
    let powOperator;
    const basis = `float(${bias}) + float(${alpha}) * sum`;
    if (beta === 0.5) {
      powOperator = `inversesqrt(${basis})`;
    } else if (beta === 1) {
      powOperator = `1.0/(${basis})`;
    } else {
      powOperator = `exp(log(${basis}) * float(-${beta}));`;
    }
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${rad}; j <= ${rad}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${maxD}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${powOperator};
        setOutput(val);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/lrn_packed_gpu.ts
var LRNPackedProgram = class {
  constructor(xShape, radius, bias, alpha, beta) {
    this.variableNames = ["x"];
    this.outputShape = [];
    this.packedInputs = true;
    this.packedOutput = true;
    const rad = radius;
    const maxD = xShape[3] - 1;
    this.outputShape = xShape;
    let powOperator;
    const basis = `float(${bias}) + float(${alpha}) * sum`;
    if (beta === 0.5) {
      powOperator = `inversesqrt(${basis})`;
    } else if (beta === 1) {
      powOperator = `1.0/(${basis})`;
    } else {
      powOperator = `exp(log(${basis}) * float(-${beta}));`;
    }
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${rad};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${rad}; j <= ${rad}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${maxD}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${powOperator};
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/LRN.ts
var lrn = (args) => {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { depthRadius, bias, alpha, beta } = attrs;
  const program = env().getBool("WEBGL_PACK_NORMALIZATION") ? new LRNPackedProgram(x.shape, depthRadius, bias, alpha, beta) : new LRNProgram(x.shape, depthRadius, bias, alpha, beta);
  return backend.runWebGLProgram(program, [x], x.dtype);
};
var LRNConfig = {
  kernelName: LRN,
  backendName: "webgl",
  kernelFunc: lrn
};

// src/tfjs-backend-webgl/src/lrn_grad_gpu.ts
var LRNGradProgram = class {
  constructor(inputShape, depthRadius, bias, alpha, beta) {
    this.variableNames = ["inputImage", "outputImage", "dy"];
    this.outputShape = [];
    this.outputShape = inputShape;
    this.depth = inputShape[3];
    this.depthRadius = depthRadius;
    this.bias = bias;
    this.alpha = alpha;
    this.beta = beta;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${depthRadius})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${depthRadius} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${alpha}) * norm + float(${bias});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${alpha})
                * float(${beta})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${beta});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/LRNGrad.ts
var lrnGrad = (args) => {
  const { inputs, backend, attrs } = args;
  const { x, y, dy } = inputs;
  const { depthRadius, bias, alpha, beta } = attrs;
  const program = new LRNGradProgram(x.shape, depthRadius, bias, alpha, beta);
  return backend.runWebGLProgram(program, [x, y, dy], x.dtype);
};
var LRNGradConfig = {
  kernelName: LRNGrad,
  backendName: "webgl",
  kernelFunc: lrnGrad
};

// src/tfjs-backend-webgl/src/kernels/Max_impl.ts
function maxImpl2(x, reduceShape, outShape, backend) {
  const inSize = util_exports.sizeFromShape(reduceShape);
  const xSize = util_exports.sizeFromShape(x.shape);
  const batchSize = xSize / inSize;
  const reshapedInput = reshape2({ inputs: { x }, attrs: { shape: [batchSize, inSize] }, backend });
  const reduced = reduce(reshapedInput, x.dtype, "max", backend);
  const reshapedOutput = reshape2({ inputs: { x: reduced }, attrs: { shape: outShape }, backend });
  backend.disposeIntermediateTensorInfo(reshapedInput);
  backend.disposeIntermediateTensorInfo(reduced);
  return reshapedOutput;
}

// src/tfjs-backend-webgl/src/kernels/Max.ts
function max2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { reductionIndices, keepDims } = attrs;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(reductionIndices, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  const maxInputIsTransposed = permutedAxes != null;
  const shouldExecuteOnCPU = backend.shouldExecuteOnCPU([x]);
  let maxInput = x;
  if (maxInputIsTransposed) {
    if (shouldExecuteOnCPU) {
      const xTexData = backend.texData.get(maxInput.dataId);
      const values = xTexData.values;
      const newShape = new Array(xRank);
      for (let i = 0; i < newShape.length; i++) {
        newShape[i] = x.shape[permutedAxes[i]];
      }
      const maxInputValues = transposeImplCPU(values, x.shape, x.dtype, permutedAxes, newShape);
      maxInput = backend.makeTensorInfo(newShape, x.dtype);
      const maxInputData = backend.texData.get(maxInput.dataId);
      maxInputData.values = maxInputValues;
    } else {
      maxInput = transposeImpl2(x, permutedAxes, backend);
    }
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims("max", axes, xRank);
  const [maxOutShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(maxInput.shape, axes);
  let outShape = maxOutShape;
  if (keepDims) {
    outShape = backend_util_exports.expandShapeToKeepDim(maxOutShape, origAxes);
  }
  let out;
  if (shouldExecuteOnCPU) {
    const xTexData = backend.texData.get(maxInput.dataId);
    const values = xTexData.values;
    const outValues = maxImplCPU(values, util_exports.sizeFromShape(reduceShape), outShape, x.dtype);
    out = backend.makeTensorInfo(outShape, x.dtype);
    const outData = backend.texData.get(out.dataId);
    outData.values = outValues;
  } else {
    out = maxImpl2(maxInput, reduceShape, outShape, backend);
  }
  if (maxInputIsTransposed) {
    backend.disposeIntermediateTensorInfo(maxInput);
  }
  return out;
}
var maxConfig = {
  kernelName: Max,
  backendName: "webgl",
  kernelFunc: max2
};

// src/tfjs-backend-webgl/src/kernels/Maximum.ts
var MAXIMUM = CHECK_NAN_SNIPPET2 + `
  return max(a, b);
`;
var MAXIMUM_PACKED = `
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  ` + CHECK_NAN_SNIPPET3 + `
  return result;
`;
var maximum3 = binaryKernelFunc2({
  opSnippet: MAXIMUM,
  packedOpSnippet: MAXIMUM_PACKED,
  cpuKernelImpl: maximumImplCPU
});
var maximumConfig = {
  kernelName: Maximum,
  backendName: "webgl",
  kernelFunc: maximum3
};

// src/tfjs-backend-webgl/src/kernels/MaxPool.ts
function maxPool2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  assertNotComplex(x, "maxPool");
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const dilations = 1;
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, dilations, pad2, dimRoundingMode);
  if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 && util_exports.arraysEqual(convInfo.inShape, convInfo.outShape)) {
    return identity2({ inputs: { x }, backend });
  }
  const maxPoolProgram = new Pool2DProgram(convInfo, "max", false);
  return backend.runWebGLProgram(maxPoolProgram, [x], x.dtype);
}
var maxPoolConfig = {
  kernelName: MaxPool,
  backendName: "webgl",
  kernelFunc: maxPool2
};

// src/tfjs-backend-webgl/src/kernels/MaxPool3D.ts
function maxPool3d2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { filterSize, strides, pad: pad2, dataFormat, dimRoundingMode } = attrs;
  const dilations = [1, 1, 1];
  const convInfo = backend_util_exports.computePool3DInfo(x.shape, filterSize, strides, dilations, pad2, dimRoundingMode, dataFormat);
  const maxPoolProgram = new Pool3DProgram(convInfo, "max", false);
  return backend.runWebGLProgram(maxPoolProgram, [x], x.dtype);
}
var maxPool3DConfig = {
  kernelName: MaxPool3D,
  backendName: "webgl",
  kernelFunc: maxPool3d2
};

// src/tfjs-backend-webgl/src/max_pool_backprop_gpu.ts
var MaxPool2DBackpropProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "maxPos"];
    this.outputShape = convInfo.inShape;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
    const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
    const lastIndex = effectiveFilterHeight * effectiveFilterWidth - 1;
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${effectiveFilterHeight};
          wR += ${dilationHeight}) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${effectiveFilterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${lastIndex} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${effectiveFilterWidth} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var MaxPool3DBackpropProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "maxPos"];
    this.outputShape = convInfo.inShape;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterDepth = convInfo.effectiveFilterDepth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
    const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
    const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
    const lastIndex = effectiveFilterDepth * effectiveFilterHeight * effectiveFilterWidth - 1;
    this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
           wD += ${dilationDepth}) {
          float dyD = float(dyDCorner + wD) / ${strideDepth}.0;

          if (dyD < 0.0 || dyD >= ${convInfo.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${lastIndex} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${effectiveFilterHeight} * ${effectiveFilterWidth} +
                  wR * ${effectiveFilterWidth} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/MaxPool3DGrad.ts
function maxPool3DGrad(args) {
  const { inputs, backend, attrs } = args;
  const { dy, input } = inputs;
  const x = input;
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const dilations = [1, 1, 1];
  const convInfo = backend_util_exports.computePool3DInfo(x.shape, filterSize, strides, dilations, pad2, dimRoundingMode);
  const maxPool3dPositionsProgram = new Pool3DProgram(convInfo, "max", true);
  const maxPool3dPositions = backend.runWebGLProgram(maxPool3dPositionsProgram, [x], x.dtype);
  const maxPoolBackpropProgram = new MaxPool3DBackpropProgram(convInfo);
  const result = backend.runWebGLProgram(maxPoolBackpropProgram, [dy, maxPool3dPositions], x.dtype);
  backend.disposeIntermediateTensorInfo(maxPool3dPositions);
  return result;
}
var maxPoolGrad3DConfig = {
  kernelName: MaxPool3DGrad,
  backendName: "webgl",
  kernelFunc: maxPool3DGrad
};

// src/tfjs-backend-webgl/src/kernels/MaxPoolGrad.ts
function maxPoolGrad(args) {
  const { inputs, backend, attrs } = args;
  const { dy, input, output } = inputs;
  const x = input;
  assertNotComplex([input, output], "maxPoolGrad");
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, 1, pad2, dimRoundingMode);
  const getPositions = true;
  const maxPoolPositionsProgram = new Pool2DProgram(convInfo, "max", getPositions);
  const maxPoolPositions = backend.runWebGLProgram(maxPoolPositionsProgram, [x], x.dtype);
  const maxPoolBackPropProgram = new MaxPool2DBackpropProgram(convInfo);
  const result = backend.runWebGLProgram(maxPoolBackPropProgram, [dy, maxPoolPositions], x.dtype);
  backend.disposeIntermediateTensorInfo(maxPoolPositions);
  return result;
}
var maxPoolGradConfig = {
  kernelName: MaxPoolGrad,
  backendName: "webgl",
  kernelFunc: maxPoolGrad
};

// src/tfjs-backend-webgl/src/kernels/MaxPoolWithArgmax_impl.ts
function maxPoolWithArgmaxImpl(x, includeBatchInIndex, convInfo, backend) {
  let program = new Pool2DProgram(convInfo, "max", false);
  const poolOutput = backend.runWebGLProgram(program, [x], "float32");
  program = new Pool2DProgram(convInfo, "max", true, true, includeBatchInIndex);
  const indexOutput = backend.runWebGLProgram(program, [x], "float32");
  return [poolOutput, indexOutput];
}

// src/tfjs-backend-webgl/src/kernels/MaxPoolWithArgmax.ts
var maxPoolWithArgmaxConfig = {
  kernelName: MaxPoolWithArgmax,
  backendName: "webgl",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { x } = inputs;
    const { filterSize, strides, pad: pad2, includeBatchInIndex } = attrs;
    const webglBackend = backend;
    util_exports.assert(x.shape.length === 4, () => `Error in maxPool: input must be rank 4 but got rank ${x.shape.length}.`);
    const dilations = [1, 1];
    util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
    const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, dilations, pad2);
    const [result, indexes] = maxPoolWithArgmaxImpl(x, includeBatchInIndex, convInfo, webglBackend);
    return [result, indexes];
  }
};

// src/tfjs-backend-webgl/src/kernels/Mean_impl.ts
function meanImpl(x, reduceShape, outShape, backend) {
  const inSize = util_exports.sizeFromShape(reduceShape);
  const xSize = util_exports.sizeFromShape(x.shape);
  const batchSize = xSize / inSize;
  const reshapedInput = reshape2({ inputs: { x }, attrs: { shape: [batchSize, inSize] }, backend });
  const reduced = reduce(reshapedInput, "float32", "mean", backend);
  const reshapedOutput = reshape2({ inputs: { x: reduced }, attrs: { shape: outShape }, backend });
  backend.disposeIntermediateTensorInfo(reshapedInput);
  backend.disposeIntermediateTensorInfo(reduced);
  return reshapedOutput;
}

// src/tfjs-backend-webgl/src/kernels/Mean.ts
var meanConfig = {
  kernelName: Mean,
  backendName: "webgl",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { x } = inputs;
    const { keepDims, axis } = attrs;
    const webglBackend = backend;
    const xRank = x.shape.length;
    const origAxes = util_exports.parseAxisParam(axis, x.shape);
    let axes = origAxes;
    const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
    const meanInputIsTransposed = permutedAxes != null;
    const shouldExecuteOnCPU = webglBackend.shouldExecuteOnCPU([x]);
    const intermediates = [];
    let meanInput = x;
    if (meanInputIsTransposed) {
      if (shouldExecuteOnCPU) {
        const xTexData = webglBackend.texData.get(meanInput.dataId);
        const values = xTexData.values;
        const newShape = new Array(xRank);
        for (let i = 0; i < newShape.length; i++) {
          newShape[i] = x.shape[permutedAxes[i]];
        }
        const meanInputValues = transposeImplCPU(values, x.shape, x.dtype, permutedAxes, newShape);
        meanInput = webglBackend.makeTensorInfo(newShape, x.dtype);
        const meanInputData = webglBackend.texData.get(meanInput.dataId);
        meanInputData.values = meanInputValues;
      } else {
        meanInput = transposeImpl2(x, permutedAxes, webglBackend);
      }
      intermediates.push(meanInput);
      axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
    }
    backend_util_exports.assertAxesAreInnerMostDims("sum", axes, xRank);
    const [meanOutShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(meanInput.shape, axes);
    let outShape = meanOutShape;
    if (keepDims) {
      outShape = backend_util_exports.expandShapeToKeepDim(meanOutShape, origAxes);
    }
    const out = meanImpl(meanInput, reduceShape, outShape, webglBackend);
    for (const i of intermediates) {
      webglBackend.disposeIntermediateTensorInfo(i);
    }
    return out;
  }
};

// src/tfjs-backend-webgl/src/kernels/Min.ts
function min2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let permutedX = x;
  if (permutedAxes != null) {
    permutedX = transpose3({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    axes = backend_util_exports.getInnerMostAxes(axes.length, x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("min", axes, xRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, axes);
  const inSize = util_exports.sizeFromShape(reduceShape);
  const a2D = reshape2({ inputs: { x: permutedX }, backend, attrs: { shape: [-1, inSize] } });
  const reduced = reduce(a2D, a2D.dtype, "min", backend);
  let res;
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    res = reshape2({ inputs: { x: reduced }, backend, attrs: { shape: newShape } });
  } else {
    res = reshape2({ inputs: { x: reduced }, backend, attrs: { shape: outShape } });
  }
  backend.disposeIntermediateTensorInfo(a2D);
  backend.disposeIntermediateTensorInfo(reduced);
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo(permutedX);
  }
  return res;
}
var minConfig = {
  kernelName: Min,
  backendName: "webgl",
  kernelFunc: min2
};

// src/tfjs-backend-webgl/src/kernels/Minimum.ts
var MINIMUM = CHECK_NAN_SNIPPET2 + `
  return min(a, b);
`;
var MINIMUM_PACKED = `
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  ` + CHECK_NAN_SNIPPET3 + `
  return result;
`;
var minimum3 = binaryKernelFunc2({
  opSnippet: MINIMUM,
  packedOpSnippet: MINIMUM_PACKED,
  cpuKernelImpl: minimumImplCPU
});
var minimumConfig = {
  kernelName: Minimum,
  backendName: "webgl",
  kernelFunc: minimum3
};

// src/tfjs-backend-webgl/src/mirror_pad_gpu.ts
var MirrorPadProgram = class {
  constructor(xShape, paddings, mode) {
    this.variableNames = ["x"];
    this.outputShape = paddings.map((p, i) => p[0] + xShape[i] + p[1]);
    const rank = xShape.length;
    const dtype = getCoordsDataType(rank);
    const start = paddings.map((p) => p[0]).join(",");
    const end = paddings.map((p, i) => p[0] + xShape[i]).join(",");
    const unpackedCoords = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, rank);
    const offset = mode === "reflect" ? 0 : 1;
    if (rank === 1) {
      this.userCode = `
        int start = ${start};
        int end = ${end};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${offset};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${offset};
          }
          setOutput(getX(outC - start));
        }
      `;
      return;
    }
    this.userCode = `
      ${dtype} start = ${dtype}(${start});
      ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outC = getOutputCoords();
        for (int i = 0; i < ${rank}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${offset};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${offset};
          }
        }
        ${dtype} coords = outC - start;
        setOutput(getX(${unpackedCoords}));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/mirror_pad_packed_gpu.ts
var MirrorPadPackedProgram = class {
  constructor(xShape, paddings, mode) {
    this.variableNames = ["x"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = paddings.map((p, i) => p[0] + xShape[i] + p[1]);
    const rank = xShape.length;
    const dtype = getCoordsDataType(rank);
    const start = paddings.map((p) => p[0]).join(",");
    const end = paddings.map((p, i) => p[0] + xShape[i]).join(",");
    const coords2 = getChannels("rc", rank);
    const source = getChannels("source", rank);
    const cLimit = `${coords2[rank - 1]} < ${this.outputShape[rank - 1]}`;
    const innerDims = rank === 1 ? "source" : `vec2(${source.slice(-2).join()})`;
    const offset = mode === "reflect" ? 0 : 1;
    let mainLoop = "";
    if (rank === 1) {
      const padSetup = `
        ${dtype} source = rc;
        if (source < start) {
          source = start * 2 - source - ${offset};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${offset};
        }
        source -= start;
      `;
      mainLoop = `
        ${dtype} rc = outputLoc;
        ${padSetup}
        result[0] = getChannel(getX(${source.join()}), ${innerDims});
        ${coords2[rank - 1]} += 1;
        if(${cLimit}) {
          ${padSetup}
          result[1] = getChannel(getX(${source.join()}), ${innerDims});
        }
      `;
    } else {
      const padSetup = `
        ${dtype} source = rc;
        ${dtype} lt = ${dtype}(lessThan(source, start));
        ${dtype} gte = ${dtype}(greaterThanEqual(source, end));
        ${dtype} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${offset}) +
                gte * ((end - 1) * 2 - source + ${offset});
        source -= start;
      `;
      mainLoop = `
        ${dtype} rc = outputLoc;
        ${padSetup}
        result[0] = getChannel(getX(${source.join()}), ${innerDims});
        ${coords2[rank - 1]} += 1;
        if(${cLimit}) {
          ${padSetup}
          result[1] = getChannel(getX(${source.join()}), ${innerDims});
        }
        rc = outputLoc;
        ${coords2[rank - 2]} += 1;
        if(${coords2[rank - 2]} < ${this.outputShape[rank - 2]}) {
          ${padSetup}
          result[2] = getChannel(getX(${source.join()}), ${innerDims});
          ${coords2[rank - 1]} += 1;
          if(${cLimit}) {
            ${padSetup}
            result[3] = getChannel(getX(${source.join()}), ${innerDims});
          }
        }
      `;
    }
    this.userCode = `
      const ${dtype} start = ${dtype}(${start});
      const ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${mainLoop}
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/MirrorPad.ts
var mirrorPadKernelFunc = ({ inputs, backend, attrs }) => {
  const { x } = inputs;
  const { paddings, mode } = attrs;
  const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new MirrorPadPackedProgram(x.shape, paddings, mode) : new MirrorPadProgram(x.shape, paddings, mode);
  const output = backend.runWebGLProgram(program, [x], x.dtype);
  return output;
};
var mirrorPadConfig = {
  kernelName: MirrorPad,
  backendName: "webgl",
  kernelFunc: mirrorPadKernelFunc
};

// src/tfjs-backend-webgl/src/kernels/Mod.ts
var MOD = `if (b == 0.0) return NAN;
  return mod(a, b);`;
var MOD_PACKED = `
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  ` + CHECK_NAN_SNIPPET3 + `
  return result;
`;
var mod2 = binaryKernelFunc2({
  opSnippet: MOD,
  packedOpSnippet: MOD_PACKED
});
var modConfig = {
  kernelName: Mod,
  backendName: "webgl",
  kernelFunc: mod2
};

// src/tfjs-backend-webgl/src/multinomial_gpu.ts
var MultinomialProgram = class {
  constructor(batchSize, numOutcomes, numSamples) {
    this.variableNames = ["probs"];
    this.customUniforms = [{ name: "seed", type: "float" }];
    this.outputShape = [batchSize, numSamples];
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${numOutcomes - 1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${numOutcomes - 1}));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/RealDiv.ts
var DIV = `
if (a == b) {
  return 1.0;
};
return a / b;`;
var DIV_PACKED = `
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`;
var realDiv = binaryKernelFunc2({ opSnippet: DIV, packedOpSnippet: DIV_PACKED, checkOutOfBounds: true });
var realDivConfig = {
  kernelName: RealDiv,
  backendName: "webgl",
  kernelFunc: realDiv
};

// src/tfjs-backend-webgl/src/kernels/Sub.ts
var SUB = "return a - b;";
var sub3 = binaryKernelFunc2({
  opSnippet: SUB,
  packedOpSnippet: SUB,
  supportsComplex: true,
  cpuKernelImpl: subImplCPU
});
var subConfig = {
  kernelName: Sub,
  backendName: "webgl",
  kernelFunc: sub3
};

// src/tfjs-backend-webgl/src/kernels/Softmax.ts
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
  backend.disposeIntermediateTensorInfo(maxLogit);
  backend.disposeIntermediateTensorInfo(maxLogitsReshaped);
  backend.disposeIntermediateTensorInfo(a);
  backend.disposeIntermediateTensorInfo(b);
  backend.disposeIntermediateTensorInfo(sumExp);
  backend.disposeIntermediateTensorInfo(sumExpReshaped);
  return res;
}
var softmaxConfig = {
  kernelName: Softmax,
  backendName: "webgl",
  kernelFunc: softmax2
};

// src/tfjs-backend-webgl/src/kernels/Multinomial.ts
function multinomial2(args) {
  const { inputs, backend, attrs } = args;
  const { logits } = inputs;
  const { numSamples, seed, normalized } = attrs;
  const probs = normalized ? logits : softmax2({ inputs: { logits }, backend, attrs: { dim: logits.shape.length - 1 } });
  const batchSize = probs.shape[0];
  const numOutcomes = probs.shape[1];
  const program = new MultinomialProgram(batchSize, numOutcomes, numSamples);
  const customValues = [[seed]];
  const res = backend.runWebGLProgram(program, [probs], "int32", customValues);
  if (!normalized) {
    backend.disposeIntermediateTensorInfo(probs);
  }
  return res;
}
var multinomialConfig = {
  kernelName: Multinomial,
  backendName: "webgl",
  kernelFunc: multinomial2
};

// src/tfjs-backend-webgl/src/kernels/Neg.ts
var NEG = `return -x;`;
function neg2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  if (backend.shouldExecuteOnCPU([x])) {
    const xData = backend.texData.get(x.dataId);
    const [outValues, newShape] = negImplCPU(xData.values, x.shape, x.dtype);
    return backend.makeTensorInfo(newShape, x.dtype, outValues);
  }
  let program;
  if (env().getBool("WEBGL_PACK_UNARY_OPERATIONS")) {
    program = new UnaryOpPackedProgram(x.shape, NEG);
  } else {
    program = new UnaryOpProgram(x.shape, NEG);
  }
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var negConfig = {
  kernelName: Neg,
  backendName: "webgl",
  kernelFunc: neg2
};

// src/tfjs-backend-webgl/src/kernels/NonMaxSuppressionV3.ts
var nonMaxSuppressionV3Impl2 = kernel_impls_exports.nonMaxSuppressionV3Impl;
function nonMaxSuppressionV3(args) {
  backend_util_exports.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  const { inputs, backend, attrs } = args;
  const { boxes, scores } = inputs;
  const { maxOutputSize, iouThreshold, scoreThreshold } = attrs;
  const boxesVals = backend.readSync(boxes.dataId);
  const scoresVals = backend.readSync(scores.dataId);
  const { selectedIndices } = nonMaxSuppressionV3Impl2(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold);
  return backend.makeTensorInfo([selectedIndices.length], "int32", new Int32Array(selectedIndices));
}
var nonMaxSuppressionV3Config = {
  kernelName: NonMaxSuppressionV3,
  backendName: "webgl",
  kernelFunc: nonMaxSuppressionV3
};

// src/tfjs-backend-webgl/src/kernels/NonMaxSuppressionV4.ts
var nonMaxSuppressionV4Impl2 = kernel_impls_exports.nonMaxSuppressionV4Impl;
function nonMaxSuppressionV4(args) {
  backend_util_exports.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  const { inputs, backend, attrs } = args;
  const { boxes, scores } = inputs;
  const { maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize } = attrs;
  const boxesVals = backend.readSync(boxes.dataId);
  const scoresVals = backend.readSync(scores.dataId);
  const { selectedIndices, validOutputs } = nonMaxSuppressionV4Impl2(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
  return [
    backend.makeTensorInfo([selectedIndices.length], "int32", new Int32Array(selectedIndices)),
    backend.makeTensorInfo([], "int32", new Int32Array([validOutputs]))
  ];
}
var nonMaxSuppressionV4Config = {
  kernelName: NonMaxSuppressionV4,
  backendName: "webgl",
  kernelFunc: nonMaxSuppressionV4
};

// src/tfjs-backend-webgl/src/kernels/NonMaxSuppressionV5.ts
var nonMaxSuppressionV5Impl2 = kernel_impls_exports.nonMaxSuppressionV5Impl;
function nonMaxSuppressionV5(args) {
  backend_util_exports.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  const { inputs, backend, attrs } = args;
  const { boxes, scores } = inputs;
  const { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma } = attrs;
  const boxesVals = backend.readSync(boxes.dataId);
  const scoresVals = backend.readSync(scores.dataId);
  const maxOutputSizeVal = maxOutputSize;
  const iouThresholdVal = iouThreshold;
  const scoreThresholdVal = scoreThreshold;
  const softNmsSigmaVal = softNmsSigma;
  const { selectedIndices, selectedScores } = nonMaxSuppressionV5Impl2(boxesVals, scoresVals, maxOutputSizeVal, iouThresholdVal, scoreThresholdVal, softNmsSigmaVal);
  return [
    backend.makeTensorInfo([selectedIndices.length], "int32", new Int32Array(selectedIndices)),
    backend.makeTensorInfo([selectedScores.length], "float32", new Float32Array(selectedScores))
  ];
}
var nonMaxSuppressionV5Config = {
  kernelName: NonMaxSuppressionV5,
  backendName: "webgl",
  kernelFunc: nonMaxSuppressionV5
};

// src/tfjs-backend-webgl/src/onehot_gpu.ts
var OneHotProgram = class {
  constructor(numIndices, depth, onValue, offValue) {
    this.variableNames = ["indices"];
    this.outputShape = [numIndices, depth];
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${offValue}), float(${onValue}),
                      float(index == coords.y)));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/OneHot.ts
var oneHot2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { indices } = inputs;
  const { depth, onValue, offValue } = attrs;
  const indicesSize = util_exports.sizeFromShape(indices.shape);
  const program = new OneHotProgram(indicesSize, depth, onValue, offValue);
  const reshaped = reshape2({ inputs: { x: indices }, backend, attrs: { shape: [indicesSize] } });
  const result = backend.runWebGLProgram(program, [reshaped], indices.dtype);
  backend.disposeIntermediateTensorInfo(reshaped);
  const outShape = [...indices.shape, depth];
  const out = reshape2({ inputs: { x: result }, backend, attrs: { shape: outShape } });
  backend.disposeIntermediateTensorInfo(result);
  return out;
};
var oneHotConfig = {
  kernelName: OneHot,
  backendName: "webgl",
  kernelFunc: oneHot2
};

// src/tfjs-backend-webgl/src/kernels/ZerosLike.ts
function zerosLike2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  if (x.dtype === "complex64") {
    const realPart = real3({ inputs: { input: x }, backend });
    const r = zerosLike2({ inputs: { x: realPart }, backend });
    const imagPart = imag2({ inputs: { input: x }, backend });
    const i = zerosLike2({ inputs: { x: imagPart }, backend });
    const result = complex3({ inputs: { real: r, imag: i }, backend });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(r);
    backend.disposeIntermediateTensorInfo(imagPart);
    backend.disposeIntermediateTensorInfo(i);
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
  backendName: "webgl",
  kernelFunc: zerosLike2
};

// src/tfjs-backend-webgl/src/kernels/OnesLike.ts
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
    const result = complex3({ inputs: { real: r, imag: i }, backend });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(r);
    backend.disposeIntermediateTensorInfo(imagPart);
    backend.disposeIntermediateTensorInfo(i);
    return result;
  } else {
    return fill2({ attrs: { shape: x.shape, dtype: x.dtype, value: 1 }, backend });
  }
}
var onesLikeConfig = {
  kernelName: OnesLike,
  backendName: "webgl",
  kernelFunc: onesLike2
};

// src/tfjs-backend-webgl/src/kernels/Pack.ts
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
  intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
}
var packConfig = {
  kernelName: Pack,
  backendName: "webgl",
  kernelFunc: pack
};

// src/tfjs-backend-webgl/src/pad_gpu.ts
var PadProgram = class {
  constructor(xShape, paddings, constantValue) {
    this.variableNames = ["x"];
    this.customUniforms = [{ name: "value", type: "float" }];
    this.outputShape = paddings.map((p, i) => p[0] + xShape[i] + p[1]);
    const rank = xShape.length;
    const type = getCoordsDataType(rank);
    const start = paddings.map((p) => p[0]).join(",");
    const end = paddings.map((p, i) => p[0] + xShape[i]).join(",");
    const unpackedCoords = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, rank);
    if (rank === 1) {
      this.userCode = `
        int start = ${start};
        int end = ${end};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;
      return;
    }
    this.userCode = `
      ${type} start = ${type}(${start});
      ${type} end = ${type}(${end});

      void main() {
        ${type} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${type} coords = outC - start;
          setOutput(getX(${unpackedCoords}));
        }
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/pad_packed_gpu.ts
var PadPackedProgram = class {
  constructor(xShape, paddings, constantValue) {
    this.variableNames = ["x"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{ name: "value", type: "float" }];
    this.outputShape = paddings.map((p, i) => p[0] + xShape[i] + p[1]);
    const rank = xShape.length;
    const dtype = getCoordsDataType(rank);
    const start = paddings.map((p) => p[0]).join(",");
    const end = paddings.map((p, i) => p[0] + xShape[i]).join(",");
    const coords2 = getChannels("rc", rank);
    const source = getChannels("source", rank);
    const cLimit = `${coords2[rank - 1]} < ${this.outputShape[rank - 1]}`;
    const innerDims = rank === 1 ? "source" : `vec2(${source.slice(-2).join()})`;
    const componentSetup = [
      `${dtype} rc = outputLoc;`,
      `${coords2[rank - 1]} += 1;
       if(${cLimit}) {
      `,
      rank === 1 ? "" : `}
       rc = outputLoc;
       ${coords2[rank - 2]} += 1;
       if(${coords2[rank - 2]} < ${this.outputShape[rank - 2]}) {`,
      rank === 1 ? "" : `  ${coords2[rank - 1]} += 1;
         if(${cLimit}) {`
    ];
    const paddingArea = rank === 1 ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";
    let mainLoop = "";
    for (let i = 0, j = rank === 1 ? 2 : 4; i < j; i++) {
      mainLoop += `
        ${componentSetup[i]}
        if (${paddingArea}) {
          result[${i}] = float(value);
        } else {
          ${dtype} source = rc - start;
          result[${i}] = getChannel(getX(${source.join()}), ${innerDims});
        }
      `;
    }
    mainLoop += rank === 1 ? `} ` : `}}`;
    this.userCode = `
      const ${dtype} start = ${dtype}(${start});
      const ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${mainLoop}
        setOutput(result);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/PadV2.ts
var padV2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { paddings, constantValue } = attrs;
  if (util_exports.sizeFromShape(x.shape) === 0) {
    const outputShape = paddings.map((p, i) => p[0] + x.shape[i] + p[1]);
    return fill2({
      backend,
      attrs: { shape: outputShape, value: constantValue, dtype: x.dtype }
    });
  }
  const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new PadPackedProgram(x.shape, paddings, constantValue) : new PadProgram(x.shape, paddings, constantValue);
  const customValues = [[constantValue]];
  return backend.runWebGLProgram(program, [x], x.dtype, customValues);
};
var padV2Config = {
  kernelName: PadV2,
  backendName: "webgl",
  kernelFunc: padV2
};

// src/tfjs-backend-webgl/src/kernels/Pow.ts
var POW = `
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`;
var POW_PACKED = `
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  ` + CHECK_NAN_SNIPPET3 + `
  return result;
`;
var pow2 = binaryKernelFunc2({ opSnippet: POW, packedOpSnippet: POW_PACKED });
var powConfig = {
  kernelName: Pow,
  backendName: "webgl",
  kernelFunc: pow2
};

// src/tfjs-backend-webgl/src/kernels/Prod.ts
function prod2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  const xRank = x.shape.length;
  const toDispose = [];
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let permutedX = x;
  if (permutedAxes != null) {
    permutedX = transpose3({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
    toDispose.push(permutedX);
  }
  backend_util_exports.assertAxesAreInnerMostDims("prod", axes, xRank);
  let res;
  if (backend.shouldExecuteOnCPU([permutedX])) {
    const xVals = backend.texData.get(permutedX.dataId).values;
    const { outVals, outShape, outDtype } = prodImplCPU(permutedX.shape, permutedX.dtype, xVals, axes);
    res = backend.makeTensorInfo(outShape, outDtype, outVals);
  } else {
    const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, axes);
    const inSize = util_exports.sizeFromShape(reduceShape);
    const a2D = reshape2({ inputs: { x: permutedX }, backend, attrs: { shape: [-1, inSize] } });
    const outputDType = sumOutType(x.dtype);
    const reduced = reduce(a2D, outputDType, "prod", backend);
    res = reshape2({ inputs: { x: reduced }, backend, attrs: { shape: outShape } });
    toDispose.push(a2D);
    toDispose.push(reduced);
  }
  if (keepDims) {
    toDispose.push(res);
    const newShape = backend_util_exports.expandShapeToKeepDim(res.shape, origAxes);
    res = reshape2({ inputs: { x: res }, backend, attrs: { shape: newShape } });
  }
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return res;
}
var prodConfig = {
  kernelName: Prod,
  backendName: "webgl",
  kernelFunc: prod2
};

// src/tfjs-backend-webgl/src/kernels/Range.ts
var range2 = (args) => {
  const { backend, attrs } = args;
  const { start, stop, step: step3, dtype } = attrs;
  const values = rangeImplCPU(start, stop, step3, dtype);
  return backend.makeTensorInfo([values.length], dtype, values);
};
var rangeConfig = {
  kernelName: Range,
  backendName: "webgl",
  kernelFunc: range2
};

// src/tfjs-backend-webgl/src/kernels/Reciprocal.ts
var RECIPROCAL = `return 1.0 / x;`;
var reciprocal2 = unaryKernelFunc2({ opSnippet: RECIPROCAL });
var reciprocalConfig = {
  kernelName: Reciprocal,
  backendName: "webgl",
  kernelFunc: reciprocal2
};

// src/tfjs-backend-webgl/src/kernels/Relu.ts
var RELU3 = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : x;
`;
var RELU_PACKED = `
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var relu2 = unaryKernelFunc2({ opSnippet: RELU3, packedOpSnippet: RELU_PACKED });
var reluConfig = {
  kernelName: Relu,
  backendName: "webgl",
  kernelFunc: relu2
};

// src/tfjs-backend-webgl/src/kernels/Relu6.ts
var RELU63 = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : min(6.0, x);
`;
var RELU6_PACKED = `
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var relu62 = unaryKernelFunc2({ opSnippet: RELU63, packedOpSnippet: RELU6_PACKED });
var relu6Config = {
  kernelName: Relu6,
  backendName: "webgl",
  kernelFunc: relu62
};

// src/tfjs-backend-webgl/src/resize_bilinear_gpu.ts
var ResizeBilinearProgram = class {
  constructor(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
    this.variableNames = ["A"];
    this.outputShape = [];
    const [batch, oldHeight, oldWidth, depth] = inputShape;
    this.outputShape = [batch, newHeight, newWidth, depth];
    const effectiveInSize = [
      alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight,
      alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth
    ];
    const effectiveOutSize = [
      alignCorners && newHeight > 1 ? newHeight - 1 : newHeight,
      alignCorners && newWidth > 1 ? newWidth - 1 : newWidth
    ];
    let sourceFracIndexRC;
    if (halfPixelCenters) {
      sourceFracIndexRC = `(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`;
    } else {
      sourceFracIndexRC = `vec2(yRC) * effectiveInputOverOutputRatioRC`;
    }
    this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec2 inputShapeRC = vec2(${oldHeight}.0, ${oldWidth}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${sourceFracIndexRC};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/resize_bilinear_packed_gpu.ts
var ResizeBilinearPackedProgram = class {
  constructor(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = [];
    const [batch, oldHeight, oldWidth, depth] = inputShape;
    this.outputShape = [batch, newHeight, newWidth, depth];
    const effectiveInSize = [
      alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight,
      alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth
    ];
    const effectiveOutSize = [
      alignCorners && newHeight > 1 ? newHeight - 1 : newHeight,
      alignCorners && newWidth > 1 ? newWidth - 1 : newWidth
    ];
    let sourceFracIndexRC;
    if (halfPixelCenters) {
      sourceFracIndexRC = `(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`;
    } else {
      sourceFracIndexRC = `vec3(yRC) * effectiveInputOverOutputRatioRC`;
    }
    this.userCode = `
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec3 inputShapeRC = vec3(${oldHeight}.0, ${oldWidth}.0,
                                     ${oldWidth}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${sourceFracIndexRC};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${depth - 1};
        bool hasNextRow = coords.z < ${newWidth - 1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/ResizeBilinear.ts
function resizeBilinear2(args) {
  const { inputs, backend, attrs } = args;
  const { images } = inputs;
  const { alignCorners, halfPixelCenters, size } = attrs;
  const [newHeight, newWidth] = size;
  const program = env().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new ResizeBilinearPackedProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters) : new ResizeBilinearProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters);
  return backend.runWebGLProgram(program, [images], "float32");
}
var resizeBilinearConfig = {
  kernelName: ResizeBilinear,
  backendName: "webgl",
  kernelFunc: resizeBilinear2
};

// src/tfjs-backend-webgl/src/resize_bilinear_backprop_gpu.ts
var ResizeBilinearBackpropProgram = class {
  constructor(dyShape, inputShape, alignCorners) {
    this.variableNames = ["dy"];
    this.outputShape = [];
    this.outputShape = inputShape;
    const [, xHeight, xWidth] = inputShape;
    const [, yHeight, yWidth] = dyShape;
    const effectiveXSize = [
      alignCorners && yHeight > 1 ? xHeight - 1 : xHeight,
      alignCorners && yWidth > 1 ? xWidth - 1 : xWidth
    ];
    const effectiveYSize = [
      alignCorners && yHeight > 1 ? yHeight - 1 : yHeight,
      alignCorners && yWidth > 1 ? yWidth - 1 : yWidth
    ];
    const heightScale = effectiveXSize[0] / effectiveYSize[0];
    const widthScale = effectiveXSize[1] / effectiveYSize[1];
    const invHeightScale = 1 / heightScale;
    const invWidthScale = 1 / widthScale;
    const winHeight = Math.ceil(invHeightScale) * 2 + 2;
    const winWidth = Math.ceil(invWidthScale) * 2 + 2;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${heightScale});
        const float widthScale = float(${widthScale});

        const float invHeightScale = float(${invHeightScale});
        const float invWidthScale = float(${invWidthScale});

        const int winHeight = int(${winHeight});
        const int winWidth = int(${winWidth});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${yHeight}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${yWidth}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${xHeight - 1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${xWidth - 1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/ResizeBilinearGrad.ts
function resizeBilinearGrad(args) {
  const { inputs, backend, attrs } = args;
  const { images, dy } = inputs;
  const { alignCorners } = attrs;
  const program = new ResizeBilinearBackpropProgram(dy.shape, images.shape, alignCorners);
  return backend.runWebGLProgram(program, [dy], dy.dtype);
}
var resizeBilinearGradConfig = {
  kernelName: ResizeBilinearGrad,
  backendName: "webgl",
  kernelFunc: resizeBilinearGrad
};

// src/tfjs-backend-webgl/src/resize_nearest_neighbor_gpu.ts
var ResizeNearestNeighborProgram = class {
  constructor(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
    this.variableNames = ["A"];
    this.outputShape = [];
    const [batch, oldHeight, oldWidth, depth] = inputShape;
    this.outputShape = [batch, newHeight, newWidth, depth];
    const effectiveInSize = [
      alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight,
      alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth
    ];
    const effectiveOutSize = [
      alignCorners && newHeight > 1 ? newHeight - 1 : newHeight,
      alignCorners && newWidth > 1 ? newWidth - 1 : newWidth
    ];
    const roundBase = alignCorners ? "0.5" : "0.0";
    let sourceFracIndexRC;
    if (halfPixelCenters) {
      sourceFracIndexRC = `max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`;
    } else {
      sourceFracIndexRC = `vec2(yRC) * effectiveInputOverOutputRatioRC`;
    }
    this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec2 inputShapeRC = vec2(${oldHeight}.0, ${oldWidth}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${sourceFracIndexRC};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${roundBase})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/resize_nearest_neighbor_packed_gpu.ts
var ResizeNearestNeighborPackedProgram = class {
  constructor(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = [];
    const [batch, oldHeight, oldWidth, depth] = inputShape;
    this.outputShape = [batch, newHeight, newWidth, depth];
    const effectiveInSize = [
      alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight,
      alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth
    ];
    const effectiveOutSize = [
      alignCorners && newHeight > 1 ? newHeight - 1 : newHeight,
      alignCorners && newWidth > 1 ? newWidth - 1 : newWidth
    ];
    const roundBase = alignCorners ? "0.5" : "0.0";
    let sourceFracIndexRC;
    if (halfPixelCenters) {
      sourceFracIndexRC = `max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`;
    } else {
      sourceFracIndexRC = `vec3(yRC) * effectiveInputOverOutputRatioRC`;
    }
    this.userCode = `
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec3 inputShapeRC = vec3(${oldHeight}.0, ${oldWidth}.0,
                                     ${oldWidth}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${sourceFracIndexRC};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${roundBase})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${depth - 1};
        bool hasNextRow = coords.z < ${newWidth - 1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/ResizeNearestNeighbor.ts
function resizeNearestNeighbor2(args) {
  const { inputs, backend, attrs } = args;
  const { images } = inputs;
  const { alignCorners, halfPixelCenters, size } = attrs;
  const [newHeight, newWidth] = size;
  const program = env().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new ResizeNearestNeighborPackedProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters) : new ResizeNearestNeighborProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters);
  return backend.runWebGLProgram(program, [images], images.dtype);
}
var resizeNearestNeighborConfig = {
  kernelName: ResizeNearestNeighbor,
  backendName: "webgl",
  kernelFunc: resizeNearestNeighbor2
};

// src/tfjs-backend-webgl/src/resize_nearest_neighbor_backprop_gpu.ts
var ResizeNearestNeigborBackpropProgram = class {
  constructor(dyShape, inputShape, alignCorners) {
    this.variableNames = ["dy"];
    this.outputShape = [];
    this.outputShape = inputShape;
    const [, xHeight, xWidth] = inputShape;
    const [, yHeight, yWidth] = dyShape;
    const effectiveXSize = [
      alignCorners && yHeight > 1 ? xHeight - 1 : xHeight,
      alignCorners && yWidth > 1 ? xWidth - 1 : xWidth
    ];
    const effectiveYSize = [
      alignCorners && yHeight > 1 ? yHeight - 1 : yHeight,
      alignCorners && yWidth > 1 ? yWidth - 1 : yWidth
    ];
    const heightScale = effectiveXSize[0] / effectiveYSize[0];
    const widthScale = effectiveXSize[1] / effectiveYSize[1];
    const invHeightScale = 1 / heightScale;
    const invWidthScale = 1 / widthScale;
    const winHeight = Math.ceil(invHeightScale) * 2 + 2;
    const winWidth = Math.ceil(invWidthScale) * 2 + 2;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${heightScale});
        const float widthScale = float(${widthScale});

        const float invHeightScale = float(${invHeightScale});
        const float invWidthScale = float(${invWidthScale});

        const int winHeight = int(${winHeight});
        const int winWidth = int(${winWidth});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${yHeight}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${yWidth}) {
              continue;
            }

            float sourceFracRow =
              float(${effectiveXSize[0]}) *
                (float(dyR) / float(${effectiveYSize[0]}));

            float sourceFracCol =
                float(${effectiveXSize[1]}) *
                  (float(dyC) / float(${effectiveYSize[1]}));

            int sourceNearestRow = int(min(
                float(int(${xHeight}) - 1),
                ${alignCorners} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${xWidth}) - 1),
                ${alignCorners} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/ResizeNearestNeighborGrad.ts
function resizeNearestNeighborGrad(args) {
  const { inputs, backend, attrs } = args;
  const { images, dy } = inputs;
  const { alignCorners } = attrs;
  const program = new ResizeNearestNeigborBackpropProgram(dy.shape, images.shape, alignCorners);
  return backend.runWebGLProgram(program, [dy], dy.dtype);
}
var resizeNearestNeighborGradConfig = {
  kernelName: ResizeNearestNeighborGrad,
  backendName: "webgl",
  kernelFunc: resizeNearestNeighborGrad
};

// src/tfjs-backend-webgl/src/reverse_gpu.ts
var ReverseProgram = class {
  constructor(xShape, axis) {
    this.variableNames = ["x"];
    const rank = xShape.length;
    if (rank > 4) {
      throw new Error(`WebGL backend: Reverse of rank-${rank} tensor is not yet supported`);
    }
    this.outputShape = xShape;
    if (rank === 1) {
      this.userCode = `
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${xShape[0]} - coord - 1));
        }
      `;
      return;
    }
    const getInCoord = (i) => {
      if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
        return `${xShape[i]} - coords[${i}] - 1`;
      }
      return `coords[${i}]`;
    };
    const inCoords = xShape.map((_, i) => getInCoord(i)).join(",");
    const type = getCoordsDataType(rank);
    this.userCode = `
      void main() {
        ${type} coords = getOutputCoords();
        setOutput(getX(${inCoords}));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/reverse_packed_gpu.ts
var ReversePackedProgram = class {
  constructor(xShape, axis) {
    this.variableNames = ["x"];
    this.packedInputs = true;
    this.packedOutput = true;
    const rank = xShape.length;
    if (rank > 4) {
      throw new Error(`WebGL backend: Reverse of rank-${rank} tensor is not yet supported`);
    }
    this.outputShape = xShape;
    const channels = getChannels("rc", rank);
    const nextColumn = `${channels[rank - 1]} + 1 < ${this.outputShape[rank - 1]}`;
    const nextRow = `${channels[rank - 2]} + 1 < ${this.outputShape[rank - 2]}`;
    const type = getCoordsDataType(rank);
    if (rank === 1) {
      this.userCode = `
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${xShape[0]} - rc - 1),
            ${xShape[0]} - rc - 1);
          if(${nextColumn}){
              result.g = getChannel(getX(${xShape[0]} - (rc  + 1) - 1),
                ${xShape[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `;
    } else {
      this.userCode = `
        void main() {
          ${type} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${getR(channels.slice())};
          if(${nextColumn}){
            result.g = ${getG(channels.slice())};
          }
          if(${nextRow}) {
            result.b = ${getB(channels.slice())};
            if(${nextColumn}) {
              result.a = ${getA(channels.slice())};
            }
          }
          setOutput(result);
        }
    `;
    }
    function getR(channels2) {
      return getChannel(channels2);
    }
    function getG(channels2) {
      channels2[rank - 1] = "(" + channels2[rank - 1] + ` + 1)`;
      return getChannel(channels2);
    }
    function getB(channels2) {
      channels2[rank - 2] = "(" + channels2[rank - 2] + ` + 1)`;
      return getChannel(channels2);
    }
    function getA(channels2) {
      channels2[rank - 1] = "(" + channels2[rank - 1] + ` + 1)`;
      channels2[rank - 2] = "(" + channels2[rank - 2] + ` + 1)`;
      return getChannel(channels2);
    }
    function getChannel(channels2) {
      const inCoordsArray = xShape.map((_, i) => getInCoord(i, channels2));
      const inCoords = inCoordsArray.join(",");
      const innerDims = inCoordsArray.slice(-2).join(",");
      return `getChannel(getX(${inCoords}), vec2(${innerDims}))`;
    }
    function getInCoord(i, channels1) {
      if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
        return `${xShape[i]} - ${channels1[i]} - 1`;
      } else {
        return `${channels1[i]}`;
      }
    }
  }
};

// src/tfjs-backend-webgl/src/kernels/Reverse.ts
function reverse2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { dims } = attrs;
  const xRank = x.shape.length;
  const $dims = util_exports.parseAxisParam(dims, x.shape);
  if (xRank === 0) {
    return identity2({ inputs: { x }, backend });
  }
  const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new ReversePackedProgram(x.shape, $dims) : new ReverseProgram(x.shape, $dims);
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var reverseConfig = {
  kernelName: Reverse,
  backendName: "webgl",
  kernelFunc: reverse2
};

// src/tfjs-backend-webgl/src/rotate_gpu.ts
var RotateProgram = class {
  constructor(imageShape, fillValue) {
    this.variableNames = ["Image"];
    this.outputShape = [];
    this.customUniforms = [{ name: "params", type: "vec4" }];
    const imageHeight = imageShape[1];
    const imageWidth = imageShape[2];
    this.outputShape = imageShape;
    let fillSnippet = "";
    if (typeof fillValue === "number") {
      fillSnippet = `float outputValue = ${fillValue.toFixed(2)};`;
    } else {
      fillSnippet = `
        vec3 fill = vec3(${fillValue.join(",")});
        float outputValue = fill[coords[3]];`;
    }
    this.userCode = `
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${fillSnippet}
          if(coordX >= 0 && coordX < ${imageWidth} && coordY >= 0 && coordY < ${imageHeight}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/RotateWithOffset.ts
var rotateWithOffsetConfig = {
  kernelName: RotateWithOffset,
  backendName: "webgl",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { image } = inputs;
    const { radians, fillValue, center } = attrs;
    const webglBackend = backend;
    const program = new RotateProgram(image.shape, fillValue);
    const [centerX, centerY] = backend_util_exports.getImageCenter(center, image.shape[1], image.shape[2]);
    const customValues = [[centerX, centerY, Math.sin(radians), Math.cos(radians)]];
    const output = webglBackend.runWebGLProgram(program, [image], image.dtype, customValues);
    return output;
  }
};

// src/tfjs-backend-webgl/src/kernels/Round.ts
var ROUND = `
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`;
var round3 = unaryKernelFunc2({ opSnippet: ROUND });
var roundConfig = {
  kernelName: Round,
  backendName: "webgl",
  kernelFunc: round3
};

// src/tfjs-backend-webgl/src/kernels/Rsqrt.ts
var RSQRT = `return inversesqrt(x);`;
var rsqrt3 = unaryKernelFunc2({ opSnippet: RSQRT, cpuKernelImpl: rsqrtImplCPU });
var rsqrtConfig = {
  kernelName: Rsqrt,
  backendName: "webgl",
  kernelFunc: rsqrt3
};

// src/tfjs-backend-webgl/src/scatter_gpu.ts
var ScatterProgram = class {
  constructor(updateSize, sliceDim, indicesRank, updatesRank, strides, shape, summingDupeIndex = true) {
    this.variableNames = ["updates", "indices", "defaultValue"];
    this.outputShape = shape;
    const stridesType = getCoordsDataType(strides.length);
    const dtype = getCoordsDataType(shape.length);
    let indicesString = "";
    if (indicesRank === 1) {
      indicesString = "i";
    } else if (indicesRank === 2) {
      indicesString = "i, j";
    }
    const indicesSnippet = `getIndices(${indicesString})`;
    let updatesString = "";
    if (updatesRank === 1) {
      updatesString = "i";
    } else if (updatesRank === 2) {
      updatesString = "i, coords[1]";
    }
    const updatesSnippet = `getUpdates(${updatesString})`;
    const strideString = sliceDim > 1 ? "strides[j]" : "strides";
    this.userCode = `
        ${stridesType} strides = ${stridesType}(${strides});

        void main() {
          ${dtype} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${updateSize}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${sliceDim}; j++) {
              int index = round(${indicesSnippet});
              flattenedIndex += index * ${strideString};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${updatesSnippet};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `;
  }
};

// src/tfjs-backend-webgl/src/kernels/ScatterNd.ts
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
  const defaultValue = backend.makeTensorInfo([], "float32", new Float32Array([0]));
  const program = new ScatterProgram(numUpdates, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape);
  const res = backend.runWebGLProgram(program, [flattenX, flattenIndices, defaultValue], flattenX.dtype);
  const reshaped = reshape2({ inputs: { x: res }, backend, attrs: { shape } });
  backend.disposeIntermediateTensorInfo(flattenIndices);
  backend.disposeIntermediateTensorInfo(flattenX);
  backend.disposeIntermediateTensorInfo(res);
  backend.disposeIntermediateTensorInfo(defaultValue);
  return reshaped;
}
var scatterNdConfig = {
  kernelName: ScatterNd,
  backendName: "webgl",
  kernelFunc: scatterNd
};

// src/tfjs-backend-webgl/src/select_gpu.ts
var SelectProgram = class {
  constructor(cRank, shape, rank) {
    this.variableNames = ["c", "a", "b"];
    this.outputShape = shape;
    let cCoords;
    let abCoords;
    if (rank > 4) {
      throw Error(`Where for rank ${rank} is not yet supported`);
    }
    if (rank === 1) {
      abCoords = `resRC`;
      cCoords = `resRC`;
    } else {
      const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"];
      const cCoordVars = [];
      const abCoordVars = [];
      for (let i = 0; i < shape.length; i++) {
        abCoordVars.push(`${currentCoords[i]}`);
        if (i < cRank) {
          cCoordVars.push(`${currentCoords[i]}`);
        }
      }
      cCoords = cCoordVars.join();
      abCoords = abCoordVars.join();
    }
    const dtype = getCoordsDataType(rank);
    this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        float cVal = getC(${cCoords});
        if (cVal >= 1.0) {
          setOutput(getA(${abCoords}));
        } else {
          setOutput(getB(${abCoords}));
        }
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Select.ts
function select2(args) {
  const { inputs, backend } = args;
  const { condition, t, e } = inputs;
  const program = new SelectProgram(condition.shape.length, t.shape, t.shape.length);
  return backend.runWebGLProgram(program, [condition, t, e], upcastType(t.dtype, e.dtype));
}
var selectConfig = {
  kernelName: Select,
  backendName: "webgl",
  kernelFunc: select2
};

// src/tfjs-backend-webgl/src/kernels/Selu.ts
var SELU = `
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${backend_util_exports.SELU_SCALEALPHA};
  float scale = ${backend_util_exports.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`;
var selu2 = unaryKernelFunc2({ opSnippet: SELU });
var seluConfig = {
  kernelName: Selu,
  backendName: "webgl",
  kernelFunc: selu2
};

// src/tfjs-backend-webgl/src/kernels/Sigmoid.ts
var SIGMOID3 = `return 1.0 / (1.0 + exp(-1.0 * x));`;
var sigmoid3 = unaryKernelFunc2({
  opSnippet: SIGMOID3,
  packedOpSnippet: SIGMOID3,
  cpuKernelImpl: sigmoidImplCPU
});
var sigmoidConfig = {
  kernelName: Sigmoid,
  backendName: "webgl",
  kernelFunc: sigmoid3
};

// src/tfjs-backend-webgl/src/kernels/Sign.ts
var SIGN = `
  if (isnan(x)) { return 0.0; }
  return sign(x);
`;
var sign2 = unaryKernelFunc2({ opSnippet: SIGN });
var signConfig = {
  kernelName: Sign,
  backendName: "webgl",
  kernelFunc: sign2
};

// src/tfjs-backend-webgl/src/kernels/Sin.ts
var SIN = CHECK_NAN_SNIPPET_UNARY + `
  return sin(x);
`;
var sin2 = unaryKernelFunc2({ opSnippet: SIN });
var sinConfig = {
  kernelName: Sin,
  backendName: "webgl",
  kernelFunc: sin2
};

// src/tfjs-backend-webgl/src/kernels/Sinh.ts
var SINH = `
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`;
var sinh2 = unaryKernelFunc2({ opSnippet: SINH });
var sinhConfig = {
  kernelName: Sinh,
  backendName: "webgl",
  kernelFunc: sinh2
};

// src/tfjs-backend-webgl/src/kernels/Softplus.ts
var SOFTPLUS = `
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`;
var softplus2 = unaryKernelFunc2({ opSnippet: SOFTPLUS });
var softplusConfig = {
  kernelName: Softplus,
  backendName: "webgl",
  kernelFunc: softplus2
};

// src/tfjs-backend-webgl/src/kernels/SpaceToBatchND.ts
var spaceToBatchND2 = (args) => {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockShape, paddings } = attrs;
  util_exports.assert(x.shape.length <= 4, () => "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");
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
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
};
var spaceToBatchNDConfig = {
  kernelName: SpaceToBatchND,
  backendName: "webgl",
  kernelFunc: spaceToBatchND2
};

// src/tfjs-backend-webgl/src/kernels/SparseFillEmptyRows.ts
function sparseFillEmptyRows2(args) {
  const { inputs, backend } = args;
  const { indices, values, denseShape, defaultValue } = inputs;
  if (denseShape.shape.length !== 1) {
    throw new Error(`Dense shape must be a vector, saw:
         ${denseShape.shape}`);
  }
  if (indices.shape.length !== 2) {
    throw new Error(`Indices must be a matrix, saw:
         ${indices.shape}`);
  }
  if (values.shape.length !== 1) {
    throw new Error(`Values must be a vector, saw:
         ${values.shape}`);
  }
  if (defaultValue.shape.length !== 0) {
    throw new Error(`Default value must be a scalar, saw:
        ${defaultValue.shape}`);
  }
  const $indices = backend.readSync(indices.dataId);
  const $values = backend.readSync(values.dataId);
  const $denseShape = backend.readSync(denseShape.dataId);
  const $defaultValue = backend.readSync(defaultValue.dataId)[0];
  const [
    outputIndices,
    outputIndicesShape,
    outputValues,
    emptyRowIndicator,
    reverseIndexMap
  ] = sparseFillEmptyRowsImplCPU($indices, indices.shape, indices.dtype, $values, values.dtype, $denseShape, $defaultValue);
  return [
    backend.makeTensorInfo(outputIndicesShape, indices.dtype, outputIndices),
    backend.makeTensorInfo([outputIndicesShape[0]], values.dtype, outputValues),
    backend.makeTensorInfo([emptyRowIndicator.length], "bool", new Uint8Array(emptyRowIndicator.map((value) => Number(value)))),
    backend.makeTensorInfo([reverseIndexMap.length], indices.dtype, new Int32Array(reverseIndexMap))
  ];
}
var sparseFillEmptyRowsConfig = {
  kernelName: SparseFillEmptyRows,
  backendName: "webgl",
  kernelFunc: sparseFillEmptyRows2
};

// src/tfjs-backend-webgl/src/kernels/SparseReshape.ts
function sparseReshape2(args) {
  const { inputs, backend } = args;
  const { inputIndices, inputShape, newShape } = inputs;
  if (inputIndices.shape.length !== 2) {
    throw new Error(`Input indices should be a matrix but received shape ${inputIndices.shape}`);
  }
  if (inputShape.shape.length !== 1) {
    throw new Error(`Input shape should be a vector but received shape ${inputShape.shape}`);
  }
  if (newShape.shape.length !== 1) {
    throw new Error(`Target shape should be a vector but received shape ${newShape.shape}`);
  }
  const $inputShape = Array.from(backend.readSync(inputShape.dataId));
  const $inputIndices = backend.readSync(inputIndices.dataId);
  const targetShape = Array.from(backend.readSync(newShape.dataId));
  const [newIndices, indicesShape, outputShape] = sparseReshapeImplCPU($inputIndices, inputIndices.shape, inputIndices.dtype, $inputShape, targetShape);
  return [
    backend.makeTensorInfo(indicesShape, inputIndices.dtype, newIndices),
    backend.makeTensorInfo([outputShape.length], newShape.dtype, new Int32Array(outputShape))
  ];
}
var sparseReshapeConfig = {
  kernelName: SparseReshape,
  backendName: "webgl",
  kernelFunc: sparseReshape2
};

// src/tfjs-backend-webgl/src/kernels/SparseSegmentMean.ts
function sparseSegmentMean2(args) {
  const { inputs, backend } = args;
  const { data, indices, segmentIds } = inputs;
  if (data.shape.length < 1) {
    throw new Error(`Data should be at least 1 dimensional but received scalar`);
  }
  if (indices.shape.length !== 1) {
    throw new Error(`Indices should be a vector but received shape
              ${indices.shape}`);
  }
  if (segmentIds.shape.length !== 1) {
    throw new Error(`Segment ids should be a vector but received shape
              ${segmentIds.shape}`);
  }
  const $data = backend.readSync(data.dataId);
  const $indices = backend.readSync(indices.dataId);
  const $segmentIds = backend.readSync(segmentIds.dataId);
  const [outputData, outputDataShape] = sparseSegmentReductionImplCPU($data, data.shape, data.dtype, $indices, $segmentIds, true);
  return backend.makeTensorInfo(outputDataShape, data.dtype, outputData);
}
var sparseSegmentMeanConfig = {
  kernelName: SparseSegmentMean,
  backendName: "webgl",
  kernelFunc: sparseSegmentMean2
};

// src/tfjs-backend-webgl/src/kernels/SparseSegmentSum.ts
function sparseSegmentSum2(args) {
  const { inputs, backend } = args;
  const { data, indices, segmentIds } = inputs;
  if (data.shape.length < 1) {
    throw new Error(`Data should be at least 1 dimensional but received scalar`);
  }
  if (indices.shape.length !== 1) {
    throw new Error(`Indices should be a vector but received shape
             ${indices.shape}`);
  }
  if (segmentIds.shape.length !== 1) {
    throw new Error(`Segment ids should be a vector but received shape
             ${segmentIds.shape}`);
  }
  const $data = backend.readSync(data.dataId);
  const $indices = backend.readSync(indices.dataId);
  const $segmentIds = backend.readSync(segmentIds.dataId);
  const [outputData, outputDataShape] = sparseSegmentReductionImplCPU($data, data.shape, data.dtype, $indices, $segmentIds);
  return backend.makeTensorInfo(outputDataShape, data.dtype, outputData);
}
var sparseSegmentSumConfig = {
  kernelName: SparseSegmentSum,
  backendName: "webgl",
  kernelFunc: sparseSegmentSum2
};

// src/tfjs-backend-webgl/src/kernels/SparseToDense.ts
function sparseToDense2(args) {
  const { inputs, backend, attrs } = args;
  const { sparseIndices, sparseValues, defaultValue } = inputs;
  const { outputShape } = attrs;
  const { sliceRank, numUpdates, strides, outputSize } = backend_util_exports.calculateShapes(sparseValues, sparseIndices, outputShape);
  const sumDupeIndices = false;
  const program = new ScatterProgram(numUpdates, sliceRank, sparseIndices.shape.length, sparseValues.shape.length, strides, [outputSize, 1], sumDupeIndices);
  const res = backend.runWebGLProgram(program, [sparseValues, sparseIndices, defaultValue], sparseValues.dtype);
  const reshaped = reshape2({ inputs: { x: res }, backend, attrs: { shape: outputShape } });
  backend.disposeIntermediateTensorInfo(res);
  return reshaped;
}
var sparseToDenseConfig = {
  kernelName: SparseToDense,
  backendName: "webgl",
  kernelFunc: sparseToDense2
};

// src/tfjs-backend-webgl/src/kernels/SplitV.ts
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
  backendName: "webgl",
  kernelFunc: splitV
};

// src/tfjs-backend-webgl/src/kernels/Sqrt.ts
var SQRT = `return sqrt(x);`;
var sqrt3 = unaryKernelFunc2({ opSnippet: SQRT, packedOpSnippet: SQRT, cpuKernelImpl: sqrtImplCPU });
var sqrtConfig = {
  kernelName: Sqrt,
  backendName: "webgl",
  kernelFunc: sqrt3
};

// src/tfjs-backend-webgl/src/kernels/Square.ts
var SQUARE = `return x * x;`;
var square2 = unaryKernelFunc2({ opSnippet: SQUARE });
var squareConfig = {
  kernelName: Square,
  backendName: "webgl",
  kernelFunc: square2
};

// src/tfjs-backend-webgl/src/kernels/SquaredDifference.ts
var SQUARED_DIFFERENCE = "return (a - b) * (a - b);";
var squaredDifference3 = binaryKernelFunc2({ opSnippet: SQUARED_DIFFERENCE, packedOpSnippet: SQUARED_DIFFERENCE });
var squaredDifferenceConfig = {
  kernelName: SquaredDifference,
  backendName: "webgl",
  kernelFunc: squaredDifference3
};

// src/tfjs-backend-webgl/src/kernels/Step.ts
function step2({ inputs, attrs, backend }) {
  const { x } = inputs;
  const opSnippet = CHECK_NAN_SNIPPET + `
    return x > 0.0 ? 1.0 : float(${attrs.alpha});
  `;
  const program = new UnaryOpProgram(x.shape, opSnippet);
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var stepConfig = {
  kernelName: Step,
  backendName: "webgl",
  kernelFunc: step2
};

// src/tfjs-backend-webgl/src/strided_slice_gpu.ts
var StridedSliceProgram = class {
  constructor(begin, strides, size) {
    this.variableNames = ["x"];
    this.outputShape = size;
    const rank = size.length;
    const inputDtype = getCoordsDataType(size.length);
    const dtype = getCoordsDataType(size.length);
    let newCoords = "";
    if (rank === 1) {
      newCoords = "coords * strides + begin";
    } else {
      let outputAxis = 0;
      newCoords = size.map((_, i) => {
        outputAxis++;
        return size.length === 1 ? `coords * strides[${i}] + begin[${i}]` : `coords[${outputAxis - 1}] * strides[${i}] + begin[${i}]`;
      }).join(",");
    }
    this.userCode = `
      ${inputDtype} begin = ${inputDtype}(${begin});
      ${inputDtype} strides = ${inputDtype}(${strides});

      void main() {
        ${dtype} coords = getOutputCoords();
        setOutput(getX(${newCoords}));
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/StridedSlice.ts
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
    backend.disposeIntermediateTensorInfo(sliced);
  } else {
    const shouldExecuteOnCPU = backend.shouldExecuteOnCPU([x]);
    if (shouldExecuteOnCPU) {
      const values = backend.readSync(x.dataId);
      const xBuf = buffer(x.shape, x.dtype, values);
      const resultValues = stridedSliceImplCPU(finalShapeSparse, xBuf, $strides, $begin);
      result = backend.makeTensorInfo(finalShape, x.dtype, resultValues.values);
    } else {
      const program = new StridedSliceProgram($begin, $strides, finalShapeSparse);
      result = backend.runWebGLProgram(program, [x], x.dtype);
    }
  }
  const resultReshaped = reshape2({ inputs: { x: result }, backend, attrs: { shape: finalShape } });
  backend.disposeIntermediateTensorInfo(result);
  return resultReshaped;
}
var stridedSliceConfig = {
  kernelName: StridedSlice,
  backendName: "webgl",
  kernelFunc: stridedSlice2
};

// src/tfjs-backend-webgl/src/kernels/StringNGrams.ts
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
  backendName: "webgl",
  kernelFunc: stringNGrams2
};

// src/tfjs-backend-webgl/src/kernels/StringSplit.ts
function stringSplit2(args) {
  const { inputs, backend, attrs } = args;
  const { skipEmpty } = attrs;
  const { input, delimiter } = inputs;
  if (input.dtype !== "string") {
    throw new Error("Input must be of datatype string");
  }
  if (input.shape.length !== 1) {
    throw new Error(`Input must be a vector, got shape: ${input.shape}`);
  }
  if (delimiter.shape.length !== 0) {
    throw new Error(`Delimiter must be a scalar, got shape: ${delimiter.shape}`);
  }
  const $input = backend.readSync(input.dataId);
  const $delimiter = backend.readSync(delimiter.dataId)[0];
  const [indices, values, shape] = stringSplitImplCPU($input, $delimiter, skipEmpty);
  const outputSize = values.length;
  return [
    backend.makeTensorInfo([outputSize, 2], "int32", indices),
    backend.makeTensorInfo([outputSize], "string", values),
    backend.makeTensorInfo([2], "int32", new Int32Array(shape))
  ];
}
var stringSplitConfig = {
  kernelName: StringSplit,
  backendName: "webgl",
  kernelFunc: stringSplit2
};

// src/tfjs-backend-webgl/src/kernels/StringToHashBucketFast.ts
function stringToHashBucketFast2(args) {
  const { inputs, backend, attrs } = args;
  const { numBuckets } = attrs;
  const { input } = inputs;
  if (input.dtype !== "string") {
    throw new Error("Input must be of datatype string");
  }
  if (numBuckets <= 0) {
    throw new Error(`Number of buckets must be at least 1`);
  }
  const $input = backend.readSync(input.dataId);
  const output = stringToHashBucketFastImplCPU($input, numBuckets);
  return backend.makeTensorInfo(input.shape, "int32", output);
}
var stringToHashBucketFastConfig = {
  kernelName: StringToHashBucketFast,
  backendName: "webgl",
  kernelFunc: stringToHashBucketFast2
};

// src/tfjs-backend-webgl/src/kernels/Tan.ts
var TAN = `return tan(x);`;
var tan2 = unaryKernelFunc2({ opSnippet: TAN });
var tanConfig = {
  kernelName: Tan,
  backendName: "webgl",
  kernelFunc: tan2
};

// src/tfjs-backend-webgl/src/kernels/Tanh.ts
var TANH = `
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`;
var tanh3 = unaryKernelFunc2({ opSnippet: TANH });
var tanhConfig = {
  kernelName: Tanh,
  backendName: "webgl",
  kernelFunc: tanh3
};

// src/tfjs-backend-webgl/src/tile_gpu.ts
var TileProgram = class {
  constructor(aShape, reps) {
    this.variableNames = ["A"];
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[i] * reps[i];
    }
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    const dtype = getCoordsDataType(this.rank);
    const sourceCoords = getSourceCoords3(aShape);
    this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        setOutput(getA(${sourceCoords}));
      }
    `;
  }
};
function getSourceCoords3(aShape) {
  const rank = aShape.length;
  if (rank > 5) {
    throw Error(`Tile for rank ${rank} is not yet supported`);
  }
  if (rank === 1) {
    return `imod(resRC, ${aShape[0]})`;
  }
  const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"];
  const sourceCoords = [];
  for (let i = 0; i < aShape.length; i++) {
    sourceCoords.push(`imod(${currentCoords[i]}, ${aShape[i]})`);
  }
  return sourceCoords.join();
}

// src/tfjs-backend-webgl/src/kernels/Tile.ts
function tile2(params) {
  const { inputs, backend, attrs } = params;
  const { x } = inputs;
  const { reps } = attrs;
  if (x.dtype === "string" || x.shape.length > 5) {
    const data = backend.readSync(x.dataId);
    const value = x.dtype === "string" ? data.map((d) => util_exports.decodeString(d)) : data;
    const buf = buffer(x.shape, x.dtype, value);
    const outBuf = tileImplCPU(buf, reps);
    return backend.makeTensorInfo(outBuf.shape, outBuf.dtype, outBuf.values);
  }
  const program = new TileProgram(x.shape, reps);
  const output = backend.runWebGLProgram(program, [x], x.dtype);
  return output;
}
var tileConfig = {
  kernelName: Tile,
  backendName: "webgl",
  kernelFunc: tile2
};

// src/tfjs-backend-webgl/src/top_k_gpu.ts
var SwapProgram = class {
  constructor(shape) {
    this.variableNames = ["x", "indices"];
    this.customUniforms = [
      { name: "n", type: "int" },
      { name: "firstPass", type: "int" },
      { name: "negativeInf", type: "float" },
      { name: "dir", type: "int" },
      { name: "inc", type: "int" }
    ];
    this.outputShape = shape;
    this.userCode = `
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `;
  }
};
var MergeProgram = class {
  constructor(shape) {
    this.variableNames = ["x", "indices"];
    this.customUniforms = [
      { name: "n", type: "int" },
      { name: "firstPass", type: "int" },
      { name: "k", type: "int" }
    ];
    this.outputShape = shape;
    this.userCode = `
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `;
  }
};

// src/tfjs-backend-webgl/src/kernels/TopK.ts
function disposeIntermediateTensorInfoOrNull(backend, tensorInfo) {
  if (tensorInfo !== null) {
    backend.disposeIntermediateTensorInfo(tensorInfo);
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
  const TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD = env().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD");
  const TOPK_K_CPU_HANDOFF_THRESHOLD = env().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD");
  const xShape = x.shape;
  const lastDim = xShape[xShape.length - 1];
  if (backend.shouldExecuteOnCPU([x]) || lastDim < TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD || k > TOPK_K_CPU_HANDOFF_THRESHOLD) {
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
  const xtexData = backend.texData.get(x.dataId);
  const xIsPacked = xtexData !== null && xtexData.isPacked;
  const xUnPacked = xIsPacked ? backend.unpackTensor(x) : x;
  const xSize = util_exports.sizeFromShape(xShape);
  const batch = xSize / lastDim;
  const x2D = reshape2({ inputs: { x: xUnPacked }, attrs: { shape: [batch, lastDim] }, backend });
  if (xIsPacked) {
    disposeIntermediateTensorInfoOrNull(backend, xUnPacked);
  }
  const kPow2 = roundUpToPow2(k);
  const lastDimPow2 = roundUpToPow2(lastDim);
  let indices = null;
  const getInputs = () => indices === null ? [x2D, x2D] : [x2D, indices];
  const runSwap = (dir, inc, shape) => {
    const inputs2 = getInputs();
    const program = new SwapProgram(shape);
    const fistPass = indices === null ? 1 : 0;
    const customValues = [[lastDim], [fistPass], [Number.NEGATIVE_INFINITY], [dir], [inc]];
    const prevIndices2 = indices;
    indices = backend.runWebGLProgram(program, inputs2, "int32", customValues);
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
    const customValues = [[lastDim], [firstPass], [kPow2]];
    const prevIndices2 = indices;
    indices = backend.runWebGLProgram(mergeProgram, inputs2, "int32", customValues);
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
  backendName: "webgl",
  kernelFunc: topK
};

// src/tfjs-backend-webgl/src/transform_gpu.ts
var TransformProgram = class {
  constructor(imageHeight, imageWidth, interpolation, fillMode, fillValue, outShape) {
    this.variableNames = ["Image", "Transforms"];
    this.outputShape = outShape;
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
    this.userCode = `
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${fillModeId} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${fillModeId} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${fillModeId} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${imageHeight} && 0 <= coordX && coordX < ${imageWidth}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${fillValue});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${fillValue});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${imageWidth}));
                float mapY = mapCoord(inY, float(${imageHeight}));

                if (${interpolationModeId} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `;
  }
};

// src/tfjs-backend-webgl/src/kernels/Transform.ts
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
  const program = new TransformProgram(imageHeight, imageWidth, interpolation, fillMode, fillValue, outShape);
  return backend.runWebGLProgram(program, [image, transforms], "float32");
}
var transformConfig = {
  kernelName: Transform,
  backendName: "webgl",
  kernelFunc: transform2
};

// src/tfjs-backend-webgl/src/kernels/Unique.ts
function unique2(args) {
  const { inputs, attrs, backend } = args;
  const { axis } = attrs;
  const { x } = inputs;
  assertNotComplex(x, "unique");
  console.warn("WARNING: ", "UI might be locked temporarily as data is being downloaded");
  const values = backend.readSync(x.dataId);
  const { outputValues, outputShape, indices } = uniqueImplCPU(values, axis, x.shape, x.dtype);
  return [
    backend.makeTensorInfo(outputShape, x.dtype, outputValues),
    backend.makeTensorInfo([indices.length], "int32", indices)
  ];
}
var uniqueConfig = {
  kernelName: Unique,
  backendName: "webgl",
  kernelFunc: unique2
};

// src/tfjs-backend-webgl/src/kernels/Unpack.ts
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
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return res;
}
var unpackConfig = {
  kernelName: Unpack,
  backendName: "webgl",
  kernelFunc: unpack
};

// src/tfjs-backend-webgl/src/segment_gpu.ts
var SegmentOpProgram = class {
  constructor(segOpInfo, segOpType) {
    this.variableNames = ["x", "segmentIds"];
    const windowSize = segOpInfo.windowSize;
    const batchSize = segOpInfo.batchSize;
    const inSize = segOpInfo.inSize;
    const numSegments = segOpInfo.numSegments;
    const outSize = numSegments * Math.ceil(inSize / windowSize);
    this.outputShape = [batchSize, outSize];
    const initializationValue = "0.0";
    const returnValue = `sumValue`;
    const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
    const windowSizeVec4Remainder = windowSize % 4;
    const updateSnippet = `
        sumValue += dot(values, segFilter);
    `;
    let checkValueOutOfBounds = "";
    if (inSize % windowSize > 0) {
      checkValueOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return initializationValue;
        }
      `;
    }
    let checkSegmentIdOutOfBounds = "";
    if (inSize % windowSize > 0) {
      checkSegmentIdOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return -1.0;
        }
      `;
    }
    this.userCode = `
      const float initializationValue = ${initializationValue};

      float getValue(int batch, int inIdx) {
        ${checkValueOutOfBounds}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${checkSegmentIdOutOfBounds}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${numSegments})) * float(${windowSize}));
        int currentSeg = int(mod(float(outIdx), float(${numSegments})));

        float sumValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${updateSnippet}
        }
        setOutput(${returnValue});
      }
    `;
  }
};

// src/tfjs-backend-webgl/src/kernels/UnsortedSegmentSum.ts
function unsortedSegmentSum2(args) {
  const { inputs, backend, attrs } = args;
  const { x, segmentIds } = inputs;
  const { numSegments } = attrs;
  const xRank = x.shape.length;
  const toDispose = [];
  let axis = 0;
  const permutation = backend_util_exports.getAxesPermutation([axis], xRank);
  let permutedX = x;
  if (permutation != null) {
    permutedX = transpose3({ inputs: { x }, backend, attrs: { perm: permutation } });
    toDispose.push(permutedX);
    axis = backend_util_exports.getInnerMostAxes(1, xRank)[0];
  }
  const outShape = backend_util_exports.segment_util.computeOutShape(permutedX.shape, axis, numSegments);
  const inSize = util_exports.sizeFromShape([permutedX.shape[axis]]);
  const a2D = reshape2({ inputs: { x: permutedX }, backend, attrs: { shape: [-1, inSize] } });
  toDispose.push(a2D);
  const outputDType = sumOutType(x.dtype);
  const segOpCompute = (x2, segOpType, segmentIds2, dtype, numSegments2) => {
    const batchSize = x2.shape[0];
    const inSize2 = x2.shape[1];
    const windowSize = backend_util_exports.segment_util.segOpComputeOptimalWindowSize(inSize2, numSegments2);
    const segOpInfo = { windowSize, inSize: inSize2, batchSize, numSegments: numSegments2 };
    const program = new SegmentOpProgram(segOpInfo, segOpType);
    const output = backend.compileAndRun(program, [x2, segmentIds2], dtype);
    toDispose.push(output);
    if (output.shape[1] === numSegments2) {
      return output;
    }
    const rangeInfo = range2({
      backend,
      attrs: { start: 0, stop: numSegments2, step: 1, dtype: "float32" }
    });
    const tileInfo = tile2({
      inputs: { x: rangeInfo },
      backend,
      attrs: { reps: [inSize2 / windowSize] }
    });
    toDispose.push(rangeInfo);
    toDispose.push(tileInfo);
    const result2 = segOpCompute(output, segOpType, tileInfo, dtype, numSegments2);
    return result2;
  };
  const segOpResult = segOpCompute(a2D, "unsortedSegmentSum", segmentIds, outputDType, numSegments);
  const reshaped = reshape2({ inputs: { x: segOpResult }, backend, attrs: { shape: outShape } });
  let result = reshaped;
  if (permutation != null) {
    toDispose.push(reshaped);
    const perm = backend_util_exports.getUndoAxesPermutation(permutation);
    result = transpose3({ inputs: { x: result }, backend, attrs: { perm } });
  }
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
}
var unsortedSegmentSumConfig = {
  kernelName: UnsortedSegmentSum,
  backendName: "webgl",
  kernelFunc: unsortedSegmentSum2
};

// src/tfjs-backend-webgl/src/register_all_kernels.ts
var kernelConfigs = [
  LRNConfig,
  LRNGradConfig,
  _fusedMatMulConfig,
  absConfig,
  acosConfig,
  acoshConfig,
  addConfig,
  addNConfig,
  allConfig,
  anyConfig,
  argMaxConfig,
  argMinConfig,
  asinConfig,
  asinhConfig,
  atan2Config,
  atanConfig,
  atanhConfig,
  avgPool3DConfig,
  avgPoolConfig,
  avgPoolGrad3DConfig,
  avgPoolGradConfig,
  batchMatMulConfig,
  batchNormConfig,
  batchToSpaceNDConfig,
  bincountConfig,
  broadcastArgsConfig,
  castConfig,
  ceilConfig,
  clipByValueConfig,
  complexAbsConfig,
  complexConfig,
  concatConfig,
  conv2DBackpropFilterConfig,
  conv2DBackpropInputConfig,
  conv2DConfig,
  conv3DBackpropFilterV2Config,
  conv3DBackpropInputConfig,
  conv3DConfig,
  cosConfig,
  coshConfig,
  cropAndResizeConfig,
  cumsumConfig,
  denseBincountConfig,
  depthToSpaceConfig,
  depthwiseConv2dNativeBackpropFilterConfig,
  depthwiseConv2dNativeBackpropInputConfig,
  depthwiseConv2dNativeConfig,
  diagConfig,
  dilation2DConfig,
  einsumConfig,
  eluConfig,
  eluGradConfig,
  equalConfig,
  erfConfig,
  expConfig,
  expandDimsConfig,
  expm1Config,
  fftConfig,
  fillConfig,
  flipLeftRightConfig,
  floorConfig,
  floorDivConfig,
  fromPixelsConfig,
  fusedConv2DConfig,
  fusedDepthwiseConv2DConfig,
  gatherNdConfig,
  gatherV2Config,
  greaterConfig,
  greaterEqualConfig,
  identityConfig,
  ifftConfig,
  imagConfig,
  isFiniteConfig,
  isInfConfig,
  isNaNConfig,
  leakyReluConfig,
  lessConfig,
  lessEqualConfig,
  linSpaceConfig,
  log1pConfig,
  logConfig,
  logicalAndConfig,
  logicalNotConfig,
  logicalOrConfig,
  maxConfig,
  maxPool3DConfig,
  maxPoolConfig,
  maxPoolGrad3DConfig,
  maxPoolGradConfig,
  maxPoolWithArgmaxConfig,
  maximumConfig,
  meanConfig,
  minConfig,
  minimumConfig,
  mirrorPadConfig,
  modConfig,
  multinomialConfig,
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
  realConfig,
  realDivConfig,
  reciprocalConfig,
  relu6Config,
  reluConfig,
  reshapeConfig,
  resizeBilinearConfig,
  resizeBilinearGradConfig,
  resizeNearestNeighborConfig,
  resizeNearestNeighborGradConfig,
  reverseConfig,
  rotateWithOffsetConfig,
  roundConfig,
  rsqrtConfig,
  scatterNdConfig,
  selectConfig,
  seluConfig,
  sigmoidConfig,
  signConfig,
  sinConfig,
  sinhConfig,
  sliceConfig,
  softmaxConfig,
  softplusConfig,
  spaceToBatchNDConfig,
  sparseFillEmptyRowsConfig,
  sparseReshapeConfig,
  sparseSegmentMeanConfig,
  sparseSegmentSumConfig,
  sparseToDenseConfig,
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
  uniqueConfig,
  unpackConfig,
  unsortedSegmentSumConfig,
  zerosLikeConfig
];
for (const kernelConfig of kernelConfigs) {
  registerKernel(kernelConfig);
}
export {
  GPGPUContext,
  MathBackendWebGL,
  forceHalfFloat,
  gpgpu_util_exports as gpgpu_util,
  setWebGLContext,
  version2 as version_webgl,
  webgl,
  webgl_util_exports as webgl_util
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
//# sourceMappingURL=tfjs-backend-webgl.esm.js.map
