var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/node_modules/.pnpm/long@4.0.0/node_modules/long/src/long.js
var require_long = __commonJS({
  "src/node_modules/.pnpm/long@4.0.0/node_modules/long/src/long.js"(exports, module) {
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
        var low = wasm.mul(
          this.low,
          this.high,
          multiplier.low,
          multiplier.high
        );
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
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
          this.low,
          this.high,
          divisor.low,
          divisor.high
        );
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
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
          this.low,
          this.high,
          divisor.low,
          divisor.high
        );
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
      return new Long2(
        bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24,
        bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24,
        unsigned
      );
    };
    Long2.fromBytesBE = function fromBytesBE(bytes, unsigned) {
      return new Long2(
        bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7],
        bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3],
        unsigned
      );
    };
  }
});

// (disabled):src/node_modules/.pnpm/node-fetch@2.6.7/node_modules/node-fetch/browser.js
var require_browser = __commonJS({
  "(disabled):src/node_modules/.pnpm/node-fetch@2.6.7/node_modules/node-fetch/browser.js"() {
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
        var shortseed = mixkey(flatten4(
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
        (me.g = function(count2) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count2--) {
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
      function flatten4(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten4(obj[prop], depth - 1));
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

// src/tfjs-core/src/backends/backend.ts
var EPSILON_FLOAT32 = 1e-7;
var EPSILON_FLOAT16 = 1e-4;
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
  createTensorFromTexture(values, shape, dtype) {
    return notYetImplemented("createTensorFromTexture");
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
  let sum3 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum3 += arr[i];
  }
  return sum3;
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
function repeatedTry(checkFn, delayFn = (counter) => 0, maxCounter, scheduleFn) {
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
      if (scheduleFn != null) {
        scheduleFn(tryFn, nextBackoff);
      } else {
        setTimeout(tryFn, nextBackoff);
      }
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
    this.populateURLFlags();
  }
  flags = {};
  flagRegistry = {};
  urlFlags = {};
  platformName;
  platform;
  getQueryParams = getQueryParams;
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
var BroadcastTo = "BroadcastTo";
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
var Dilation2DBackpropInput = "Dilation2DBackpropInput";
var Dilation2DBackpropFilter = "Dilation2DBackpropFilter";
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
var Log = "Log";
var Log1p = "Log1p";
var LogicalAnd = "LogicalAnd";
var LogicalNot = "LogicalNot";
var LogicalOr = "LogicalOr";
var LogSoftmax = "LogSoftmax";
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
var RaggedGather = "RaggedGather";
var RaggedRange = "RaggedRange";
var RaggedTensorToTensor = "RaggedTensorToTensor";
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
    const [backend2] = key.split("_");
    if (backend2 === backendName) {
      result.push(config);
    }
  }
  return result;
}
function registerGradient(config) {
  const { kernelName } = config;
  if (gradRegistry.has(kernelName)) {
    if (env().getBool("DEBUG")) {
      warn(`Overriding the gradient for '${kernelName}'`);
    }
  }
  gradRegistry.set(kernelName, config);
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
      const input2 = inputs[name2];
      if (input2 != null) {
        const inputShape = input2.shape || result.shape;
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
      const input2 = nodeInputs[inputName];
      let anyInputFromX = false;
      for (let j = 0; j < xs.length; j++) {
        if (tensorsFromX[input2.id]) {
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
        padPerCol[j] = Math.max(
          padPerCol[j],
          valToString(valuesOrTuples[offset + j], 0, dtype).length
        );
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
  size;
  shape;
  strides;
  values;
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
  id;
  dataId;
  shape;
  size;
  dtype;
  rankType;
  kept = false;
  scopeId;
  strides;
  constructor(shape, dtype, dataId, id) {
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
  isDisposedInternal = false;
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
  name;
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
  registeredVariables = {};
  nextTapeNodeId = 0;
  numBytes = 0;
  numTensors = 0;
  numStringTensors = 0;
  numDataBuffers = 0;
  activeTape;
  gradientDepth = 0;
  kernelDepth = 0;
  activeScope;
  scopeStack = [];
  numDataMovesStack = [];
  nextScopeId = 0;
  tensorInfo = /* @__PURE__ */ new WeakMap();
  profiling = false;
  activeProfile = {
    newBytes: 0,
    newTensors: 0,
    peakBytes: 0,
    kernels: [],
    result: null,
    get kernelNames() {
      return Array.from(new Set(this.kernels.map((k) => k.name)));
    }
  };
  dispose() {
    for (const variableName in this.registeredVariables) {
      this.registeredVariables[variableName].dispose();
    }
  }
};
var _Engine = class {
  constructor(ENV4) {
    this.ENV = ENV4;
    this.state = new EngineState();
  }
  state;
  backendName;
  registry = {};
  registryFactory = {};
  profiler;
  backendInstance;
  pendingBackendInit;
  pendingBackendInitId = 0;
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
      const backend2 = registryFactoryEntry.factory();
      if (backend2 && !(backend2 instanceof KernelBackend) && typeof backend2.then === "function") {
        const promiseId = ++this.pendingBackendInitId;
        const success = backend2.then((backendInstance) => {
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
        this.registry[backendName] = backend2;
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
    throw new Error(
      `Could not initialize any backends, all backend initializations failed.`
    );
  }
  moveData(backend2, dataId) {
    const info = this.state.tensorInfo.get(dataId);
    const srcBackend = info.backend;
    const values = this.readSync(dataId);
    const refCount = srcBackend.refCount(dataId);
    srcBackend.disposeData(dataId, true);
    info.backend = backend2;
    backend2.move(dataId, values, info.shape, info.dtype, refCount);
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
      assert(
        kernel != null,
        () => `Cannot find registered kernel '${kernelName}' for backend '${this.backendName}'`
      );
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
    this.scopedRun(
      () => this.state.kernelDepth++,
      () => this.state.kernelDepth--,
      () => {
        if (!this.ENV.getBool("DEBUG") && !this.state.profiling) {
          outputs = kernelFunc();
        } else {
          kernelProfile = this.profiler.profileKernel(
            kernelOrScopeName,
            inputs,
            () => kernelFunc()
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
  makeTensor(values, shape, dtype, backend2) {
    if (values == null) {
      throw new Error("Values passed to engine.makeTensor() are null");
    }
    dtype = dtype || "float32";
    backend2 = backend2 || this.backend;
    let backendVals = values;
    if (dtype === "string" && isString(values[0])) {
      backendVals = values.map((d) => encodeString(d));
    }
    const dataId = backend2.write(backendVals, shape, dtype);
    const t = new Tensor(shape, dtype, dataId, this.nextTensorId());
    this.trackTensor(t, backend2);
    if (dtype === "string") {
      const info = this.state.tensorInfo.get(dataId);
      const newBytes = bytesFromStringArray(backendVals);
      this.state.numBytes += newBytes - info.bytes;
      info.bytes = newBytes;
    }
    return t;
  }
  makeTensorFromDataId(dataId, shape, dtype, backend2) {
    dtype = dtype || "float32";
    const tensorInfo = { dataId, shape, dtype };
    return this.makeTensorFromTensorInfo(tensorInfo, backend2);
  }
  makeTensorFromTensorInfo(tensorInfo, backend2) {
    const { dataId, shape, dtype } = tensorInfo;
    const t = new Tensor(shape, dtype, dataId, this.nextTensorId());
    this.trackTensor(t, backend2);
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
  trackTensor(a, backend2) {
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
        backend: backend2 || this.backend,
        dtype: a.dtype,
        shape: a.shape,
        bytes
      });
    }
    if (!(a instanceof Variable)) {
      this.track(a);
    }
  }
  incRef(a, backend2) {
    this.trackTensor(a, backend2);
    this.backend.incRef(a.dataId);
  }
  removeDataId(dataId, backend2) {
    if (this.state.tensorInfo.has(dataId) && this.state.tensorInfo.get(dataId).backend === backend2) {
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
        add
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
      inputs.forEach((input2, i) => {
        inputMap[i] = input2;
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
__publicField(Engine, "nextTensorId", 0);
__publicField(Engine, "nextVariableId", 0);
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
ENV2.registerFlag("USE_SETTIMEOUTCUSTOM", () => false);

// src/tfjs-core/src/tensor_util_env.ts
function inferShape(val, dtype) {
  let firstElem = val;
  if (isTypedArray(val)) {
    return dtype === "string" ? [] : [val.length];
  }
  if (typeof val === "object" && "texture" in val) {
    const usedChannels = val.channels || "RGBA";
    return [val.height, val.width * usedChannels.length];
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
function complex_(real2, imag2) {
  const $real = convertToTensor(real2, "real", "complex");
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
  if (typeof values === "object" && "texture" in values) {
    if (dtype !== "float32" && dtype !== "int32") {
      throw new Error(
        `Creating tensor from texture only supports 'float32'|'int32' dtype, while the dtype is ${dtype}.`
      );
    }
    values.channels = values.channels || "RGBA";
    return ENGINE.backend.createTensorFromTexture(
      values,
      shape || inferredShape,
      dtype
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

// src/tfjs-core/src/io/types.ts
var DTYPE_VALUE_SIZE_MAP = {
  "float32": 4,
  "float16": 2,
  "int32": 4,
  "uint16": 2,
  "uint8": 1,
  "bool": 1,
  "complex64": 8
};

// src/tfjs-core/src/io/io_utils.ts
var NUM_BYTES_STRING_LENGTH = 4;
async function encodeWeights(tensors, group) {
  const specs = [];
  const dataPromises = [];
  const names = Array.isArray(tensors) ? tensors.map((tensor2) => tensor2.name) : Object.keys(tensors);
  for (let i = 0; i < names.length; ++i) {
    const name = names[i];
    const t = Array.isArray(tensors) ? tensors[i].tensor : tensors[name];
    if (t.dtype !== "float32" && t.dtype !== "int32" && t.dtype !== "bool" && t.dtype !== "string" && t.dtype !== "complex64") {
      throw new Error(`Unsupported dtype in weight '${name}': ${t.dtype}`);
    }
    const spec = { name, shape: t.shape, dtype: t.dtype };
    if (t.dtype === "string") {
      const utf8bytes = new Promise(async (resolve) => {
        const vals = await t.bytes();
        const totalNumBytes = vals.reduce((p, c) => p + c.length, 0) + NUM_BYTES_STRING_LENGTH * vals.length;
        const bytes = new Uint8Array(totalNumBytes);
        let offset = 0;
        for (let i2 = 0; i2 < vals.length; i2++) {
          const val = vals[i2];
          const bytesOfLength = new Uint8Array(new Uint32Array([val.length]).buffer);
          bytes.set(bytesOfLength, offset);
          offset += NUM_BYTES_STRING_LENGTH;
          bytes.set(val, offset);
          offset += val.length;
        }
        resolve(bytes);
      });
      dataPromises.push(utf8bytes);
    } else {
      dataPromises.push(t.data());
    }
    if (group != null) {
      spec.group = group;
    }
    specs.push(spec);
  }
  const tensorValues = await Promise.all(dataPromises);
  return { data: concatenateTypedArrays(tensorValues), specs };
}
function decodeWeights(buffer2, specs) {
  const out = {};
  let float16Decode;
  let offset = 0;
  for (const spec of specs) {
    const name = spec.name;
    const dtype = spec.dtype;
    const shape = spec.shape;
    const size = sizeFromShape(shape);
    let values;
    if ("quantization" in spec) {
      const quantization = spec.quantization;
      if (quantization.dtype === "uint8" || quantization.dtype === "uint16") {
        if (!("min" in quantization && "scale" in quantization)) {
          throw new Error(
            `Weight ${spec.name} with quantization ${quantization.dtype} doesn't have corresponding metadata min and scale.`
          );
        }
      } else if (quantization.dtype === "float16") {
        if (dtype !== "float32") {
          throw new Error(
            `Weight ${spec.name} is quantized with ${quantization.dtype} which only supports weights of type float32 not ${dtype}.`
          );
        }
      } else {
        throw new Error(
          `Weight ${spec.name} has unknown quantization dtype ${quantization.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`
        );
      }
      const quantizationSizeFactor = DTYPE_VALUE_SIZE_MAP[quantization.dtype];
      const byteBuffer = buffer2.slice(offset, offset + size * quantizationSizeFactor);
      const quantizedArray = quantization.dtype === "uint8" ? new Uint8Array(byteBuffer) : new Uint16Array(byteBuffer);
      if (dtype === "float32") {
        if (quantization.dtype === "uint8" || quantization.dtype === "uint16") {
          values = new Float32Array(quantizedArray.length);
          for (let i = 0; i < quantizedArray.length; i++) {
            const v = quantizedArray[i];
            values[i] = v * quantization.scale + quantization.min;
          }
        } else if (quantization.dtype === "float16") {
          if (float16Decode === void 0) {
            float16Decode = getFloat16Decoder();
          }
          values = float16Decode(quantizedArray);
        } else {
          throw new Error(
            `Unsupported quantization type ${quantization.dtype} for weight type float32.`
          );
        }
      } else if (dtype === "int32") {
        if (quantization.dtype !== "uint8" && quantization.dtype !== "uint16") {
          throw new Error(
            `Unsupported quantization type ${quantization.dtype} for weight type int32.`
          );
        }
        values = new Int32Array(quantizedArray.length);
        for (let i = 0; i < quantizedArray.length; i++) {
          const v = quantizedArray[i];
          values[i] = Math.round(v * quantization.scale + quantization.min);
        }
      } else {
        throw new Error(`Unsupported dtype in weight '${name}': ${dtype}`);
      }
      offset += size * quantizationSizeFactor;
    } else if (dtype === "string") {
      const size2 = sizeFromShape(spec.shape);
      values = [];
      for (let i = 0; i < size2; i++) {
        const byteLength = new Uint32Array(
          buffer2.slice(offset, offset + NUM_BYTES_STRING_LENGTH)
        )[0];
        offset += NUM_BYTES_STRING_LENGTH;
        const bytes = new Uint8Array(buffer2.slice(offset, offset + byteLength));
        values.push(bytes);
        offset += byteLength;
      }
    } else {
      const dtypeFactor = DTYPE_VALUE_SIZE_MAP[dtype];
      const byteBuffer = buffer2.slice(offset, offset + size * dtypeFactor);
      if (dtype === "float32") {
        values = new Float32Array(byteBuffer);
      } else if (dtype === "int32") {
        values = new Int32Array(byteBuffer);
      } else if (dtype === "bool") {
        values = new Uint8Array(byteBuffer);
      } else if (dtype === "complex64") {
        values = new Float32Array(byteBuffer);
        const real2 = new Float32Array(values.length / 2);
        const image2 = new Float32Array(values.length / 2);
        for (let i = 0; i < real2.length; i++) {
          real2[i] = values[i * 2];
          image2[i] = values[i * 2 + 1];
        }
        const realTensor = tensor(real2, shape, "float32");
        const imageTensor = tensor(image2, shape, "float32");
        out[name] = complex(realTensor, imageTensor);
        realTensor.dispose();
        imageTensor.dispose();
      } else {
        throw new Error(`Unsupported dtype in weight '${name}': ${dtype}`);
      }
      offset += size * dtypeFactor;
    }
    if (dtype !== "complex64") {
      out[name] = tensor(values, shape, dtype);
    }
  }
  return out;
}
function concatenateTypedArrays(xs) {
  if (xs === null) {
    throw new Error(`Invalid input value: ${JSON.stringify(xs)}`);
  }
  let totalByteLength = 0;
  const normalizedXs = [];
  xs.forEach((x) => {
    totalByteLength += x.byteLength;
    normalizedXs.push(
      x.byteLength === x.buffer.byteLength ? x : new x.constructor(x)
    );
    if (!(x instanceof Float32Array || x instanceof Int32Array || x instanceof Uint8Array)) {
      throw new Error(`Unsupported TypedArray subtype: ${x.constructor.name}`);
    }
  });
  const y = new Uint8Array(totalByteLength);
  let offset = 0;
  normalizedXs.forEach((x) => {
    y.set(new Uint8Array(x.buffer), offset);
    offset += x.byteLength;
  });
  return y.buffer;
}
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
function basename(path) {
  const SEPARATOR = "/";
  path = path.trim();
  while (path.endsWith(SEPARATOR)) {
    path = path.slice(0, path.length - 1);
  }
  const items = path.split(SEPARATOR);
  return items[items.length - 1];
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
  if (artifacts.initializerSignature != null) {
    result.initializerSignature = artifacts.initializerSignature;
  }
  if (artifacts.trainingConfig != null) {
    result.trainingConfig = artifacts.trainingConfig;
  }
  return result;
}
function getModelArtifactsForJSONSync(modelJSON, weightSpecs, weightData) {
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
    if (!weightSpecs) {
      throw new Error("modelJSON has weightsManifest but weightSpecs is null");
    }
    if (!weightData) {
      throw new Error("modelJSON has weightsManifest but weightData is null");
    }
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
  if (modelJSON.initializerSignature != null) {
    modelArtifacts.initializerSignature = modelJSON.initializerSignature;
  }
  return modelArtifacts;
}
async function getModelArtifactsForJSON(modelJSON, loadWeights2) {
  let weightSpecs;
  let weightData;
  if (modelJSON.weightsManifest != null) {
    [weightSpecs, weightData] = await loadWeights2(modelJSON.weightsManifest);
  }
  return getModelArtifactsForJSONSync(modelJSON, weightSpecs, weightData);
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
function getWeightSpecs(weightsManifest) {
  const weightSpecs = [];
  for (const entry of weightsManifest) {
    weightSpecs.push(...entry.weights);
  }
  return weightSpecs;
}
function computeFloat16MantisaTable() {
  const convertMantissa = (i) => {
    let m = i << 13;
    let e = 0;
    while ((m & 8388608) === 0) {
      e -= 8388608;
      m <<= 1;
    }
    m &= ~8388608;
    e += 947912704;
    return m | e;
  };
  const mantisaTable = new Uint32Array(2048);
  mantisaTable[0] = 0;
  for (let i = 1; i < 1024; i++) {
    mantisaTable[i] = convertMantissa(i);
  }
  for (let i = 1024; i < 2048; i++) {
    mantisaTable[i] = 939524096 + (i - 1024 << 13);
  }
  return mantisaTable;
}
function computeFloat16ExponentTable() {
  const exponentTable = new Uint32Array(64);
  exponentTable[0] = 0;
  exponentTable[31] = 1199570944;
  exponentTable[32] = 2147483648;
  exponentTable[63] = 3347054592;
  for (let i = 1; i < 31; i++) {
    exponentTable[i] = i << 23;
  }
  for (let i = 33; i < 63; i++) {
    exponentTable[i] = 2147483648 + (i - 32 << 23);
  }
  return exponentTable;
}
function computeFloat16OffsetTable() {
  const offsetTable = new Uint32Array(64);
  for (let i = 0; i < 64; i++) {
    offsetTable[i] = 1024;
  }
  offsetTable[0] = offsetTable[32] = 0;
  return offsetTable;
}
function getFloat16Decoder() {
  const mantisaTable = computeFloat16MantisaTable();
  const exponentTable = computeFloat16ExponentTable();
  const offsetTable = computeFloat16OffsetTable();
  return (quantizedArray) => {
    const buffer2 = new ArrayBuffer(4 * quantizedArray.length);
    const bufferUint32View = new Uint32Array(buffer2);
    for (let index = 0; index < quantizedArray.length; index++) {
      const float16Bits = quantizedArray[index];
      const float32Bits = mantisaTable[offsetTable[float16Bits >> 10] + (float16Bits & 1023)] + exponentTable[float16Bits >> 10];
      bufferUint32View[index] = float32Bits;
    }
    return new Float32Array(buffer2);
  };
}

// src/tfjs-core/src/io/router_registry.ts
var _IORouterRegistry = class {
  saveRouters;
  loadRouters;
  constructor() {
    this.saveRouters = [];
    this.loadRouters = [];
  }
  static getInstance() {
    if (_IORouterRegistry.instance == null) {
      _IORouterRegistry.instance = new _IORouterRegistry();
    }
    return _IORouterRegistry.instance;
  }
  static registerSaveRouter(saveRouter) {
    _IORouterRegistry.getInstance().saveRouters.push(saveRouter);
  }
  static registerLoadRouter(loadRouter) {
    _IORouterRegistry.getInstance().loadRouters.push(loadRouter);
  }
  static getSaveHandlers(url) {
    return _IORouterRegistry.getHandlers(url, "save");
  }
  static getLoadHandlers(url, loadOptions) {
    return _IORouterRegistry.getHandlers(url, "load", loadOptions);
  }
  static getHandlers(url, handlerType, loadOptions) {
    const validHandlers = [];
    const routers = handlerType === "load" ? _IORouterRegistry.getInstance().loadRouters : _IORouterRegistry.getInstance().saveRouters;
    routers.forEach((router) => {
      const handler = router(url, loadOptions);
      if (handler !== null) {
        validHandlers.push(handler);
      }
    });
    return validHandlers;
  }
};
var IORouterRegistry = _IORouterRegistry;
__publicField(IORouterRegistry, "instance");
var registerSaveRouter = (loudRouter) => IORouterRegistry.registerSaveRouter(loudRouter);
var registerLoadRouter = (loudRouter) => IORouterRegistry.registerLoadRouter(loudRouter);
var getSaveHandlers = (url) => IORouterRegistry.getSaveHandlers(url);
var getLoadHandlers = (url, loadOptions) => IORouterRegistry.getLoadHandlers(url, loadOptions);

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
  indexedDB;
  modelPath;
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
__publicField(BrowserIndexedDB, "URL_SCHEME", "indexeddb://");
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
  indexedDB;
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
  LS;
  modelPath;
  keys;
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
          initializerSignature: modelArtifacts.initializerSignature != null ? modelArtifacts.initializerSignature : void 0,
          trainingConfig: modelArtifacts.trainingConfig != null ? modelArtifacts.trainingConfig : void 0
        };
        this.LS.setItem(this.keys.modelMetadata, JSON.stringify(metadata));
        return { modelArtifactsInfo };
      } catch (err) {
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
      if (metadata.initializerSignature != null) {
        out.initializerSignature = metadata.initializerSignature;
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
__publicField(BrowserLocalStorage, "URL_SCHEME", "localstorage://");
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
  LS;
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
var _ModelStoreManagerRegistry = class {
  managers;
  constructor() {
    this.managers = {};
  }
  static getInstance() {
    if (_ModelStoreManagerRegistry.instance == null) {
      _ModelStoreManagerRegistry.instance = new _ModelStoreManagerRegistry();
    }
    return _ModelStoreManagerRegistry.instance;
  }
  static registerManager(scheme, manager) {
    assert(scheme != null, () => "scheme must not be undefined or null.");
    if (scheme.endsWith(URL_SCHEME_SUFFIX)) {
      scheme = scheme.slice(0, scheme.indexOf(URL_SCHEME_SUFFIX));
    }
    assert(scheme.length > 0, () => "scheme must not be an empty string.");
    const registry = _ModelStoreManagerRegistry.getInstance();
    assert(
      registry.managers[scheme] == null,
      () => `A model store manager is already registered for scheme '${scheme}'.`
    );
    registry.managers[scheme] = manager;
  }
  static getManager(scheme) {
    const manager = _ModelStoreManagerRegistry.getInstance().managers[scheme];
    if (manager == null) {
      throw new Error(`Cannot find model manager for scheme '${scheme}'`);
    }
    return manager;
  }
  static getSchemes() {
    return Object.keys(_ModelStoreManagerRegistry.getInstance().managers);
  }
};
var ModelStoreManagerRegistry = _ModelStoreManagerRegistry;
__publicField(ModelStoreManagerRegistry, "instance");
function parseURL(url) {
  if (url.indexOf(URL_SCHEME_SUFFIX) === -1) {
    throw new Error(
      `The url string provided does not contain a scheme. Supported schemes are: ${ModelStoreManagerRegistry.getSchemes().join(",")}`
    );
  }
  return {
    scheme: url.split(URL_SCHEME_SUFFIX)[0],
    path: url.split(URL_SCHEME_SUFFIX)[1]
  };
}
async function cloneModelInternal(sourceURL, destURL, deleteSource = false) {
  assert(
    sourceURL !== destURL,
    () => `Old path and new path are the same: '${sourceURL}'`
  );
  const loadHandlers = IORouterRegistry.getLoadHandlers(sourceURL);
  assert(
    loadHandlers.length > 0,
    () => `Copying failed because no load handler is found for source URL ${sourceURL}.`
  );
  assert(
    loadHandlers.length < 2,
    () => `Copying failed because more than one (${loadHandlers.length}) load handlers for source URL ${sourceURL}.`
  );
  const loadHandler = loadHandlers[0];
  const saveHandlers = IORouterRegistry.getSaveHandlers(destURL);
  assert(
    saveHandlers.length > 0,
    () => `Copying failed because no save handler is found for destination URL ${destURL}.`
  );
  assert(
    saveHandlers.length < 2,
    () => `Copying failed because more than one (${loadHandlers.length}) save handlers for destination URL ${destURL}.`
  );
  const saveHandler = saveHandlers[0];
  const sourceScheme = parseURL(sourceURL).scheme;
  const sourcePath = parseURL(sourceURL).path;
  const sameMedium = sourceScheme === parseURL(sourceURL).scheme;
  const modelArtifacts = await loadHandler.load();
  if (deleteSource && sameMedium) {
    await ModelStoreManagerRegistry.getManager(sourceScheme).removeModel(sourcePath);
  }
  const saveResult = await saveHandler.save(modelArtifacts);
  if (deleteSource && !sameMedium) {
    await ModelStoreManagerRegistry.getManager(sourceScheme).removeModel(sourcePath);
  }
  return saveResult.modelArtifactsInfo;
}
async function listModels() {
  const schemes = ModelStoreManagerRegistry.getSchemes();
  const out = {};
  for (const scheme of schemes) {
    const schemeOut = await ModelStoreManagerRegistry.getManager(scheme).listModels();
    for (const path in schemeOut) {
      const url = scheme + URL_SCHEME_SUFFIX + path;
      out[url] = schemeOut[path];
    }
  }
  return out;
}
async function removeModel(url) {
  const schemeAndPath = parseURL(url);
  const manager = ModelStoreManagerRegistry.getManager(schemeAndPath.scheme);
  return manager.removeModel(schemeAndPath.path);
}
async function copyModel(sourceURL, destURL) {
  const deleteSource = false;
  return cloneModelInternal(sourceURL, destURL, deleteSource);
}
async function moveModel(sourceURL, destURL) {
  const deleteSource = true;
  return cloneModelInternal(sourceURL, destURL, deleteSource);
}

// src/tfjs-core/src/platforms/platform_browser.ts
var PlatformBrowser = class {
  textEncoder;
  messageName = "setTimeoutCustom";
  functionRefs = [];
  handledMessageCount = 0;
  hasEventListener = false;
  fetch(path, init) {
    return fetch(path, init);
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
  setTimeoutCustom(functionRef, delay) {
    if (typeof window === "undefined" || !env().getBool("USE_SETTIMEOUTCUSTOM")) {
      setTimeout(functionRef, delay);
      return;
    }
    this.functionRefs.push(functionRef);
    setTimeout(() => {
      window.postMessage(
        { name: this.messageName, index: this.functionRefs.length - 1 },
        "*"
      );
    }, delay);
    if (!this.hasEventListener) {
      this.hasEventListener = true;
      window.addEventListener("message", (event) => {
        if (event.source === window && event.data.name === this.messageName) {
          event.stopPropagation();
          const functionRef2 = this.functionRefs[event.data.index];
          functionRef2();
          this.handledMessageCount++;
          if (this.handledMessageCount === this.functionRefs.length) {
            this.functionRefs = [];
            this.handledMessageCount = 0;
          }
        }
      }, true);
    }
  }
};
if (env().get("IS_BROWSER")) {
  env().setPlatform("browser", new PlatformBrowser());
  try {
    ModelStoreManagerRegistry.registerManager(
      BrowserLocalStorage.URL_SCHEME,
      new BrowserLocalStorageManager()
    );
  } catch (err) {
  }
  try {
    ModelStoreManagerRegistry.registerManager(
      BrowserIndexedDB.URL_SCHEME,
      new BrowserIndexedDBManager()
    );
  } catch (err) {
  }
}

// src/tfjs-core/src/platforms/platform_node.ts
var getNodeFetch = {
  importFetch: () => require_browser()
};
var systemFetch;
var PlatformNode = class {
  textEncoder;
  util;
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

// src/tfjs-core/src/io/io.ts
var io_exports = {};
__export(io_exports, {
  browserFiles: () => browserFiles,
  browserHTTPRequest: () => browserHTTPRequest,
  concatenateArrayBuffers: () => concatenateArrayBuffers,
  copyModel: () => copyModel,
  decodeWeights: () => decodeWeights,
  encodeWeights: () => encodeWeights,
  fromMemory: () => fromMemory,
  fromMemorySync: () => fromMemorySync,
  getLoadHandlers: () => getLoadHandlers,
  getModelArtifactsForJSON: () => getModelArtifactsForJSON,
  getModelArtifactsForJSONSync: () => getModelArtifactsForJSONSync,
  getModelArtifactsInfoForJSON: () => getModelArtifactsInfoForJSON,
  getSaveHandlers: () => getSaveHandlers,
  getWeightSpecs: () => getWeightSpecs,
  http: () => http,
  isHTTPScheme: () => isHTTPScheme,
  listModels: () => listModels,
  loadWeights: () => loadWeights,
  moveModel: () => moveModel,
  registerLoadRouter: () => registerLoadRouter,
  registerSaveRouter: () => registerSaveRouter,
  removeModel: () => removeModel,
  weightsLoaderFactory: () => weightsLoaderFactory,
  withSaveHandler: () => withSaveHandler,
  withSaveHandlerSync: () => withSaveHandlerSync
});

// src/tfjs-core/src/io/browser_files.ts
var DEFAULT_FILE_NAME_PREFIX = "model";
var DEFAULT_JSON_EXTENSION_NAME = ".json";
var DEFAULT_WEIGHT_DATA_EXTENSION_NAME = ".weights.bin";
function defer(f) {
  return new Promise((resolve) => setTimeout(resolve)).then(f);
}
var _BrowserDownloads = class {
  modelJsonFileName;
  weightDataFileName;
  modelJsonAnchor;
  weightDataAnchor;
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
__publicField(BrowserDownloads, "URL_SCHEME", "downloads://");
var BrowserFiles = class {
  jsonFile;
  weightsFiles;
  constructor(files) {
    if (files == null || files.length < 1) {
      throw new Error(
        `When calling browserFiles, at least 1 file is required, but received ${files}`
      );
    }
    this.jsonFile = files[0];
    this.weightsFiles = files.slice(1);
  }
  async load() {
    return new Promise((resolve, reject) => {
      const jsonReader = new FileReader();
      jsonReader.onload = (event) => {
        const modelJSON = JSON.parse(event.target.result);
        const modelTopology = modelJSON.modelTopology;
        if (modelTopology == null) {
          reject(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));
          return;
        }
        const weightsManifest = modelJSON.weightsManifest;
        if (weightsManifest == null) {
          reject(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));
          return;
        }
        if (this.weightsFiles.length === 0) {
          resolve({ modelTopology });
          return;
        }
        const modelArtifactsPromise = getModelArtifactsForJSON(
          modelJSON,
          (weightsManifest2) => this.loadWeights(weightsManifest2)
        );
        resolve(modelArtifactsPromise);
      };
      jsonReader.onerror = (error) => reject(
        `Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`
      );
      jsonReader.readAsText(this.jsonFile);
    });
  }
  loadWeights(weightsManifest) {
    const weightSpecs = [];
    const paths = [];
    for (const entry of weightsManifest) {
      weightSpecs.push(...entry.weights);
      paths.push(...entry.paths);
    }
    const pathToFile = this.checkManifestAndWeightFiles(weightsManifest);
    const promises = paths.map((path) => this.loadWeightsFile(path, pathToFile[path]));
    return Promise.all(promises).then(
      (buffers) => [weightSpecs, concatenateArrayBuffers(buffers)]
    );
  }
  loadWeightsFile(path, file) {
    return new Promise((resolve, reject) => {
      const weightFileReader = new FileReader();
      weightFileReader.onload = (event) => {
        const weightData = event.target.result;
        resolve(weightData);
      };
      weightFileReader.onerror = (error) => reject(`Failed to weights data from file of path '${path}'.`);
      weightFileReader.readAsArrayBuffer(file);
    });
  }
  checkManifestAndWeightFiles(manifest) {
    const basenames = [];
    const fileNames = this.weightsFiles.map((file) => basename(file.name));
    const pathToFile = {};
    for (const group of manifest) {
      group.paths.forEach((path) => {
        const pathBasename = basename(path);
        if (basenames.indexOf(pathBasename) !== -1) {
          throw new Error(
            `Duplicate file basename found in weights manifest: '${pathBasename}'`
          );
        }
        basenames.push(pathBasename);
        if (fileNames.indexOf(pathBasename) === -1) {
          throw new Error(
            `Weight file with basename '${pathBasename}' is not provided.`
          );
        } else {
          pathToFile[path] = this.weightsFiles[fileNames.indexOf(pathBasename)];
        }
      });
    }
    if (basenames.length !== this.weightsFiles.length) {
      throw new Error(
        `Mismatch in the number of files in weights manifest (${basenames.length}) and the number of weight files provided (${this.weightsFiles.length}).`
      );
    }
    return pathToFile;
  }
};
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
function browserFiles(files) {
  return new BrowserFiles(files);
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
async function loadWeights(manifest, filePathPrefix = "", weightNames, requestInit) {
  const fetchWeights = (fetchUrls) => loadWeightsAsArrayBuffer(fetchUrls, { requestInit });
  const loadWeights2 = weightsLoaderFactory(fetchWeights);
  return loadWeights2(manifest, filePathPrefix, weightNames);
}
function weightsLoaderFactory(fetchWeightsFunction) {
  return async (manifest, filePathPrefix = "", weightNames) => {
    const groupIndicesToFetchMap = manifest.map(() => false);
    const groupWeightsToFetch = {};
    const weightsFound = weightNames != null ? weightNames.map(() => false) : [];
    const allManifestWeightNames = [];
    manifest.forEach((manifestGroupConfig, groupIndex) => {
      let groupOffset = 0;
      manifestGroupConfig.weights.forEach((weightsEntry) => {
        const rawDtype = "quantization" in weightsEntry ? weightsEntry.quantization.dtype : weightsEntry.dtype;
        const weightsBytes = DTYPE_VALUE_SIZE_MAP[rawDtype] * sizeFromShape(weightsEntry.shape);
        const enqueueWeightsForFetchingFn = () => {
          groupIndicesToFetchMap[groupIndex] = true;
          if (groupWeightsToFetch[groupIndex] == null) {
            groupWeightsToFetch[groupIndex] = [];
          }
          groupWeightsToFetch[groupIndex].push({
            manifestEntry: weightsEntry,
            groupOffset,
            sizeBytes: weightsBytes
          });
        };
        if (weightNames != null) {
          weightNames.forEach((weightName, weightIndex) => {
            if (weightName === weightsEntry.name) {
              enqueueWeightsForFetchingFn();
              weightsFound[weightIndex] = true;
            }
          });
        } else {
          enqueueWeightsForFetchingFn();
        }
        allManifestWeightNames.push(weightsEntry.name);
        groupOffset += weightsBytes;
      });
    });
    if (!weightsFound.every((found) => found)) {
      const weightsNotFound = weightNames.filter((_, i) => !weightsFound[i]);
      throw new Error(
        `Could not find weights in manifest with names: ${weightsNotFound.join(", ")}. 
Manifest JSON has weights with names: ${allManifestWeightNames.join(", ")}.`
      );
    }
    const groupIndicesToFetch = groupIndicesToFetchMap.reduce((accumulator, shouldFetch, i) => {
      if (shouldFetch) {
        accumulator.push(i);
      }
      return accumulator;
    }, []);
    const fetchUrls = [];
    groupIndicesToFetch.forEach((i) => {
      manifest[i].paths.forEach((filepath) => {
        const fetchUrl = filePathPrefix + (!filePathPrefix.endsWith("/") ? "/" : "") + filepath;
        fetchUrls.push(fetchUrl);
      });
    });
    const buffers = await fetchWeightsFunction(fetchUrls);
    const weightsTensorMap = {};
    let bufferIndexOffset = 0;
    groupIndicesToFetch.forEach((i) => {
      const numBuffers = manifest[i].paths.length;
      let groupBytes = 0;
      for (let i2 = 0; i2 < numBuffers; i2++) {
        groupBytes += buffers[bufferIndexOffset + i2].byteLength;
      }
      const groupBuffer = new ArrayBuffer(groupBytes);
      const groupByteBuffer = new Uint8Array(groupBuffer);
      let groupBufferOffset = 0;
      for (let i2 = 0; i2 < numBuffers; i2++) {
        const buffer2 = new Uint8Array(buffers[bufferIndexOffset + i2]);
        groupByteBuffer.set(buffer2, groupBufferOffset);
        groupBufferOffset += buffer2.byteLength;
      }
      const weightsEntries = groupWeightsToFetch[i];
      weightsEntries.forEach((weightsEntry) => {
        const byteBuffer = groupBuffer.slice(
          weightsEntry.groupOffset,
          weightsEntry.groupOffset + weightsEntry.sizeBytes
        );
        const nameToTensorMap = decodeWeights(byteBuffer, [weightsEntry.manifestEntry]);
        for (const name in nameToTensorMap) {
          weightsTensorMap[name] = nameToTensorMap[name];
        }
      });
      bufferIndexOffset += numBuffers;
    });
    return weightsTensorMap;
  };
}

// src/tfjs-core/src/io/http.ts
var OCTET_STREAM_MIME_TYPE = "application/octet-stream";
var JSON_TYPE = "application/json";
var HTTPRequest = class {
  path;
  requestInit;
  fetch;
  weightUrlConverter;
  DEFAULT_METHOD = "POST";
  weightPathPrefix;
  onProgress;
  constructor(path, loadOptions) {
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
    const init = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit);
    init.body = new FormData();
    const weightsManifest = [{
      paths: ["./model.weights.bin"],
      weights: modelArtifacts.weightSpecs
    }];
    const modelTopologyAndWeightManifest = getModelJSONForModelArtifacts(modelArtifacts, weightsManifest);
    init.body.append(
      "model.json",
      new Blob(
        [JSON.stringify(modelTopologyAndWeightManifest)],
        { type: JSON_TYPE }
      ),
      "model.json"
    );
    if (modelArtifacts.weightData != null) {
      init.body.append(
        "model.weights.bin",
        new Blob([modelArtifacts.weightData], { type: OCTET_STREAM_MIME_TYPE }),
        "model.weights.bin"
      );
    }
    const response = await this.fetch(this.path, init);
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
    const weightSpecs = getWeightSpecs(weightsManifest);
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
__publicField(HTTPRequest, "URL_SCHEME_REGEX", /^https?:\/\//);
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
function browserHTTPRequest(path, loadOptions) {
  return http(path, loadOptions);
}

// src/tfjs-core/src/io/passthrough.ts
var PassthroughLoader = class {
  constructor(modelArtifacts) {
    this.modelArtifacts = modelArtifacts;
  }
  load() {
    return this.modelArtifacts;
  }
};
var PassthroughSaver = class {
  constructor(saveHandler) {
    this.saveHandler = saveHandler;
  }
  save(modelArtifacts) {
    return this.saveHandler(modelArtifacts);
  }
};
var PassthroughAsync = class {
  load;
  save;
  constructor(handler) {
    if (handler.load) {
      this.load = () => Promise.resolve(handler.load());
    }
    if (handler.save) {
      this.save = (modelArtifacts) => Promise.resolve(handler.save(modelArtifacts));
    }
  }
};
function fromMemory(modelArtifacts, weightSpecs, weightData, trainingConfig) {
  const args = arguments;
  return new PassthroughAsync(fromMemorySync(...args));
}
function fromMemorySync(modelArtifacts, weightSpecs, weightData, trainingConfig) {
  if (arguments.length === 1) {
    const isModelArtifacts = modelArtifacts.modelTopology != null || modelArtifacts.weightSpecs != null;
    if (isModelArtifacts) {
      return new PassthroughLoader(modelArtifacts);
    } else {
      console.warn(
        "Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."
      );
      return new PassthroughLoader({ modelTopology: modelArtifacts });
    }
  } else {
    console.warn(
      "Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."
    );
    return new PassthroughLoader({
      modelTopology: modelArtifacts,
      weightSpecs,
      weightData,
      trainingConfig
    });
  }
}
function withSaveHandler(saveHandler) {
  return new PassthroughSaver(saveHandler);
}
function withSaveHandlerSync(saveHandler) {
  return new PassthroughSaver(saveHandler);
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
function oneHot_(indices, depth, onValue = 1, offValue = 0, dtype = "int32") {
  if (depth < 2) {
    throw new Error(`Error in oneHot: depth must be >=2, but it is ${depth}`);
  }
  const $indices = convertToTensor(indices, "indices", "oneHot", "int32");
  const inputs = { indices: $indices };
  const attrs = { dtype, depth, onValue, offValue };
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
function memory() {
  return ENGINE.memory();
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
function backend() {
  return ENGINE.backend;
}

// src/tfjs-core/src/ops/imag.ts
function imag_(input2) {
  const $input = convertToTensor(input2, "input", "imag");
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
function real_(input2) {
  const $input = convertToTensor(input2, "input", "real");
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
function assertParamsValid(input2, begin, size) {
  const inputRank = input2.shape.length;
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
      begin[i] + size[i] <= input2.shape[i],
      () => `Error in slice${inputRank}D: begin[${i}] + size[${i}] (${begin[i] + size[i]}) would overflow input.shape[${i}] (${input2.shape[i]})`
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
function buildDenseSpec(sparse, dense2) {
  dense2.beginMask = 0;
  dense2.endMask = 0;
  dense2.shrinkAxisMask = 0;
  let fullIndex = 0;
  dense2.beginValid = sparse.begin != null;
  dense2.endValid = sparse.end != null;
  dense2.begin = new Array(dense2.dims);
  dense2.end = new Array(dense2.dims);
  dense2.strides = new Array(dense2.dims);
  dense2.finalShapeGatherIndices = [];
  dense2.finalShapeGatherIndicesSparse = [];
  dense2.inputShapeGatherIndicesSparse = new Array(dense2.dims);
  for (let i = 0; i < sparse.dims; i++) {
    if (1 << i & sparse.ellipsisMask) {
      const nextIndex = Math.min(
        dense2.dims - (sparse.dims - i) + 1 + sparse.numAddAxisAfterEllipsis,
        dense2.dims
      );
      for (; fullIndex < nextIndex; fullIndex++) {
        dense2.begin[fullIndex] = 0;
        dense2.end[fullIndex] = 0;
        dense2.strides[fullIndex] = 1;
        dense2.beginMask |= 1 << fullIndex;
        dense2.endMask |= 1 << fullIndex;
        dense2.finalShapeGatherIndices.push(fullIndex);
        dense2.finalShapeGatherIndicesSparse.push(-1);
        dense2.inputShapeGatherIndicesSparse[fullIndex] = i;
      }
    } else if (1 << i & sparse.newAxisMask) {
      dense2.finalShapeGatherIndices.push(NEW_AXIS);
      dense2.finalShapeGatherIndicesSparse.push(-1);
    } else {
      if (fullIndex === dense2.begin.length) {
        throw Error(
          `Index out of range using input dim ${fullIndex}; input has only ${dense2.dims} dims, ${dense2.begin.length}.`
        );
      }
      if (sparse.begin != null) {
        dense2.begin[fullIndex] = sparse.begin[i];
      }
      if (sparse.end != null) {
        dense2.end[fullIndex] = sparse.end[i];
      }
      dense2.strides[fullIndex] = sparse.strides[i];
      if (sparse.beginMask & 1 << i) {
        dense2.beginMask |= 1 << fullIndex;
      }
      if (sparse.endMask & 1 << i) {
        dense2.endMask |= 1 << fullIndex;
      }
      if (sparse.shrinkAxisMask & 1 << i) {
        dense2.finalShapeGatherIndices.push(SHRINK_AXIS);
        dense2.finalShapeGatherIndicesSparse.push(-1);
        dense2.shrinkAxisMask |= 1 << fullIndex;
      } else {
        dense2.finalShapeGatherIndices.push(fullIndex);
        dense2.finalShapeGatherIndicesSparse.push(i);
      }
      dense2.inputShapeGatherIndicesSparse[fullIndex] = i;
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
var serialization_exports = {};
__export(serialization_exports, {
  Serializable: () => Serializable,
  SerializationMap: () => SerializationMap,
  registerClass: () => registerClass
});
var Serializable = class {
  getClassName() {
    return this.constructor.className;
  }
  static fromConfig(cls, config) {
    return new cls(config);
  }
};
var _SerializationMap = class {
  classNameMap;
  constructor() {
    this.classNameMap = {};
  }
  static getMap() {
    if (_SerializationMap.instance == null) {
      _SerializationMap.instance = new _SerializationMap();
    }
    return _SerializationMap.instance;
  }
  static register(cls) {
    _SerializationMap.getMap().classNameMap[cls.className] = [cls, cls.fromConfig];
  }
};
var SerializationMap = _SerializationMap;
__publicField(SerializationMap, "instance");
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
function computeDilation2DInfo(inputShape, filterShape, strides, pad2, dataFormat = "NHWC", dilations) {
  const inputChannels = inputShape[3];
  const $filterShape = [...filterShape, inputChannels];
  const $dataFormat = convertConv2DDataFormat(dataFormat);
  return computeConv2DInfo(
    inputShape,
    $filterShape,
    strides,
    dilations,
    pad2,
    null,
    null,
    $dataFormat
  );
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
  return computeConv2DInfo(
    inShape,
    filterShape,
    strides,
    dilations,
    pad2,
    roundingMode,
    false,
    dataFormat
  );
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
  return computeConv3DInfo(
    inShape,
    filterShape,
    strides,
    dilations,
    pad2,
    false,
    $dataFormat,
    roundingMode
  );
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
  const { padInfo, outHeight, outWidth } = getPadAndOutInfo(
    pad2,
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
  const { padInfo, outDepth, outHeight, outWidth } = get3DPadAndOutInfo(
    pad2,
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
function getPadAndOutInfo(pad2, inHeight, inWidth, strideHeight, strideWidth, filterHeight, filterWidth, roundingMode, dataFormat) {
  let padInfo;
  let outHeight;
  let outWidth;
  if (typeof pad2 === "number") {
    const padType = pad2 === 0 ? "VALID" : "NUMBER";
    padInfo = { top: pad2, bottom: pad2, left: pad2, right: pad2, type: padType };
    const outShape = computeOutputShape2D(
      [inHeight, inWidth],
      filterHeight,
      strideHeight,
      pad2,
      roundingMode
    );
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
    outHeight = round(
      (inHeight - filterHeight + top + bottom) / strideHeight + 1,
      roundingMode
    );
    outWidth = round(
      (inWidth - filterWidth + left + right) / strideWidth + 1,
      roundingMode
    );
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
    const outShape = computeOutputShape4D(
      [inDepth, inHeight, inWidth, 1],
      filterDepth,
      1,
      strideDepth,
      pad2,
      roundingMode
    );
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
      throw Error(
        `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`
      );
    } else if (typeof pad2 === "number") {
      assert(
        isInt(pad2),
        () => `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${pad2}.`
      );
    } else if (typeof pad2 === "object") {
      pad2.forEach((p) => {
        p.forEach((v) => {
          assert(
            isInt(v),
            () => `Error in ${opDesc}: pad must be an integer when using dimRoundingMode ${dimRoundingMode} but got pad ${v}.`
          );
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
  return ENGINE.runKernel(
    Reshape,
    inputs,
    attrs
  );
}
var reshape = op({ reshape_ });

// src/tfjs-core/src/ops/avg_pool.ts
function avgPool_(x, filterSize, strides, pad2, dimRoundingMode) {
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
  checkPadOnDimRoundingMode("avgPool", pad2, dimRoundingMode);
  const inputs = { x: x4D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
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
function avgPool3d_(x, filterSize, strides, pad2, dimRoundingMode, dataFormat = "NDHWC") {
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
  checkPadOnDimRoundingMode("avgPool3d", pad2, dimRoundingMode);
  const inputs = { x: x5D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat };
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
  const res = add2(weighted, $lstmBias);
  const batchSize = res.shape[0];
  const sliceCols = res.shape[1] / 4;
  const sliceSize = [batchSize, sliceCols];
  const i = slice(res, [0, 0], sliceSize);
  const j = slice(res, [0, sliceCols], sliceSize);
  const f = slice(res, [0, sliceCols * 2], sliceSize);
  const o = slice(res, [0, sliceCols * 3], sliceSize);
  const newC = add2(
    mul(sigmoid(i), tanh2(j)),
    mul($c, sigmoid(add2($forgetBias, f)))
  );
  const newH = mul(tanh2(newC), sigmoid(o));
  return [newC, newH];
}
var basicLSTMCell = op({ basicLSTMCell_ });

// src/tfjs-core/src/ops/batch_to_space_nd.ts
function batchToSpaceND_(x, blockShape, crops) {
  const $x = convertToTensor(x, "x", "batchToSpaceND");
  const prod2 = blockShape.reduce((a, b) => a * b);
  assert(
    $x.rank >= 1 + blockShape.length,
    () => `input rank is ${$x.rank} but should be > than blockShape.length ${blockShape.length}`
  );
  assert(
    crops.length === blockShape.length,
    () => `crops.length is ${crops.length} but should be equal to blockShape.length  ${blockShape.length}`
  );
  assert(
    $x.shape[0] % prod2 === 0,
    () => `input tensor batch is ${$x.shape[0]} but is not divisible by the product of the elements of blockShape ${blockShape.join(" * ")} === ${prod2}`
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
  let input2 = convertToTensor(x, "broadcastTo", "x");
  const xShape = input2.shape;
  if (shape.some((d) => !(d > 0) || d % 1 !== 0)) {
    throw new Error(`broadcastTo(): Invalid broadcast shape [${shape}].`);
  }
  if (shape.length < input2.rank) {
    throw new Error(`broadcastTo(): shape.length=${shape.length} < input.rank=${input2.rank}.`);
  }
  if (shape.length > input2.rank) {
    const newShape = input2.shape.slice();
    while (newShape.length < shape.length) {
      newShape.unshift(1);
    }
    input2 = reshape(input2, newShape);
  }
  const inputShape = input2.shape;
  const reps = Array.from(shape);
  for (let i = shape.length - 1; i >= 0; i--) {
    if (inputShape[i] === shape[i]) {
      reps[i] = 1;
    } else if (input2.shape[i] !== 1) {
      throw new Error(
        `broadcastTo(): [${xShape}] cannot be broadcast to [${shape}].`
      );
    }
  }
  const axes = reps.map((n, i) => n > 1 ? i : -1).filter((i) => i >= 0);
  if (axes.length === 0) {
    return clone(input2);
  }
  const inputs = { x: input2 };
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

// src/tfjs-core/src/ops/fill.ts
function fill(shape, value, dtype) {
  const attrs = { shape, value, dtype };
  return ENGINE.runKernel(Fill, {}, attrs);
}

// src/tfjs-core/src/ops/clip_by_value.ts
function clipByValue_(x, clipValueMin, clipValueMax) {
  const $x = convertToTensor(x, "x", "clipByValue");
  assert(
    clipValueMin <= clipValueMax,
    () => `Error in clip: min (${clipValueMin}) must be less than or equal to max (${clipValueMax}).`
  );
  if (clipValueMin === clipValueMax) {
    return fill($x.shape, clipValueMin, $x.dtype);
  }
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
function conv2d_(x, filter, strides, pad2, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode) {
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
  checkPadOnDimRoundingMode("conv2d", pad2, dimRoundingMode);
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
  const attrs = { strides, pad: pad2, dataFormat, dilations, dimRoundingMode };
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
function conv1d_(x, filter, stride, pad2, dataFormat = "NWC", dilation = 1, dimRoundingMode) {
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
  checkPadOnDimRoundingMode("conv1d", pad2, dimRoundingMode);
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
    pad2,
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
function conv2DBackpropInput_(xShape, dy, filter, strides, pad2, dataFormat = "NHWC", dimRoundingMode) {
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
  checkPadOnDimRoundingMode("conv2dDerInput", pad2, dimRoundingMode);
  const inputs = { dy: dy4D, filter };
  const attrs = { strides, pad: pad2, dataFormat, dimRoundingMode, inputShape: xShape4D };
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
function conv2dTranspose_(x, filter, outputShape, strides, pad2, dimRoundingMode) {
  const $x = convertToTensor(x, "x", "conv2dTranspose");
  const $filter = convertToTensor(filter, "filter", "conv2dTranspose");
  return conv2DBackpropInput(
    outputShape,
    $x,
    $filter,
    strides,
    pad2,
    "NHWC",
    dimRoundingMode
  );
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
  const attrs = { strides, pad: pad2, dataFormat, dilations };
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
function conv3DBackpropInput_(xShape, dy, filter, strides, pad2) {
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
  const attrs = { pad: pad2, strides, inputShape: xShape5D };
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
  return ENGINE.runKernel(
    Cumprod,
    inputs,
    attrs
  );
}
var cumprod = op({ cumprod_ });

// src/tfjs-core/src/ops/cumsum.ts
function cumsum_(x, axis = 0, exclusive = false, reverse2 = false) {
  const $x = convertToTensor(x, "x", "cumsum");
  const inputs = { x: $x };
  const attrs = { axis, exclusive, reverse: reverse2 };
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
function depthwiseConv2d_(x, filter, strides, pad2, dataFormat = "NHWC", dilations = [1, 1], dimRoundingMode) {
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
  checkPadOnDimRoundingMode("depthwiseConv2d", pad2, dimRoundingMode);
  const inputs = { x: x4D, filter: $filter };
  const attrs = { strides, pad: pad2, dataFormat, dilations, dimRoundingMode };
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
function dilation2d_(x, filter, strides, pad2, dilations = [1, 1], dataFormat = "NHWC") {
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
  const attrs = { strides, pad: pad2, dilations };
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
function pow_(base, exp2) {
  let $base = convertToTensor(base, "base", "pow");
  let $exp = convertToTensor(exp2, "exp", "pow");
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
function maxPool_(x, filterSize, strides, pad2, dimRoundingMode) {
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
  checkPadOnDimRoundingMode("maxPool", pad2, dimRoundingMode);
  const inputs = { x: x4D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
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
function maxPool3d_(x, filterSize = [1, 1, 1], strides, pad2, dimRoundingMode, dataFormat = "NDHWC") {
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
  checkPadOnDimRoundingMode("maxPool3d", pad2, dimRoundingMode);
  const inputs = { x: x5D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat };
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
function maxPoolWithArgmax_(x, filterSize, strides, pad2, includeBatchInIndex = false) {
  const $x = convertToTensor(x, "x", "maxPoolWithArgmax");
  const inputs = { x: $x };
  const attrs = { filterSize, strides, pad: pad2, includeBatchInIndex };
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
    const real2 = zeros(shape, "float32");
    const imag2 = zeros(shape, "float32");
    return complex(real2, imag2);
  }
  const values = makeZerosTypedArray(sizeFromShape(shape), dtype);
  return ENGINE.makeTensor(values, shape, dtype);
}

// src/tfjs-core/src/ops/ones.ts
function ones2(shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real2 = ones2(shape, "float32");
    const imag2 = zeros(shape, "float32");
    return complex(real2, imag2);
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
  let input2 = $data;
  const newStates = [];
  for (let i = 0; i < lstmCells.length; i++) {
    const output = lstmCells[i](input2, $c[i], $h[i]);
    newStates.push(output[0]);
    newStates.push(output[1]);
    input2 = output[1];
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
function pool_(input2, windowShape, poolingType, pad2, dilations, strides, dimRoundingMode) {
  if (dilations == null) {
    dilations = [1, 1];
  }
  if (strides == null) {
    strides = 1;
  }
  if (pad2 === 0) {
    pad2 = "valid";
  }
  const $x = convertToTensor(input2, "x", "maxPool");
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
    pad2
  );
  const dilation = [convInfo.dilationHeight, convInfo.dilationWidth];
  let basePadding;
  if (pad2 === "same") {
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
  const convertedPad = isDilationOne ? pad2 : "valid";
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

// src/tfjs-core/src/ops/ragged_gather.ts
function raggedGather_(paramsNestedSplits, paramsDenseValues, indices, outputRaggedRank) {
  const $paramsNestedSplits = paramsNestedSplits.map(
    (t, i) => convertToTensor(t, `tensors${i}`, "raggedGather", "int32")
  );
  const $paramsDenseValues = convertToTensor(paramsDenseValues, "paramsDenseValues", "raggedGather");
  const $indices = convertToTensor(indices, "indices", "raggedGather", "int32");
  const inputs = {
    paramsNestedSplits: $paramsNestedSplits,
    paramsDenseValues: $paramsDenseValues,
    indices: $indices
  };
  const attrs = { outputRaggedRank };
  const result = ENGINE.runKernel(RaggedGather, inputs, attrs);
  return {
    outputNestedSplits: result.slice(0, result.length - 1),
    outputDenseValues: result[result.length - 1]
  };
}
var raggedGather = op({ raggedGather_ });

// src/tfjs-core/src/ops/ragged_range.ts
function raggedRange_(starts, limits, deltas) {
  const $starts = convertToTensor(starts, "starts", "raggedRange");
  const $limits = convertToTensor(limits, "limits", "raggedRange", $starts.dtype);
  const $deltas = convertToTensor(deltas, "deltas", "raggedRange", $starts.dtype);
  const inputs = {
    starts: $starts,
    limits: $limits,
    deltas: $deltas
  };
  const result = ENGINE.runKernel(RaggedRange, inputs);
  return {
    rtNestedSplits: result[0],
    rtDenseValues: result[1]
  };
}
var raggedRange = op({ raggedRange_ });

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
  mean;
  stdDev;
  nextVal;
  dtype;
  truncated;
  upper;
  lower;
  random;
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
  alpha;
  beta;
  d;
  c;
  dtype;
  randu;
  randn;
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
  min;
  range;
  random;
  dtype;
  constructor(min3 = 0, max3 = 1, dtype, seed) {
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
  canReturnFloat = () => this.dtype == null || this.dtype === "float32";
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
function range(start, stop, step2 = 1, dtype = "float32") {
  if (step2 === 0) {
    throw new Error("Cannot have a step of zero");
  }
  const attrs = { start, stop, step: step2, dtype };
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
    pad2,
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
function fft_(input2) {
  assert(
    input2.dtype === "complex64",
    () => `The dtype for tf.spectral.fft() must be complex64 but got ${input2.dtype}.`
  );
  const inputs = { input: input2 };
  return ENGINE.runKernel(FFT, inputs);
}
var fft = op({ fft_ });

// src/tfjs-core/src/ops/spectral/ifft.ts
function ifft_(input2) {
  assert(
    input2.dtype === "complex64",
    () => `The dtype for tf.spectral.ifft() must be complex64 but got ${input2.dtype}.`
  );
  const inputs = { input: input2 };
  return ENGINE.runKernel(IFFT, inputs);
}
var ifft = op({ ifft_ });

// src/tfjs-core/src/ops/spectral/irfft.ts
function irfft_(input2) {
  const innerDimensionSize = input2.shape[input2.shape.length - 1];
  const batch = input2.size / innerDimensionSize;
  let ret;
  if (innerDimensionSize <= 2) {
    const complexInput = reshape(input2, [batch, innerDimensionSize]);
    ret = ifft(complexInput);
  } else {
    const outputShape = [batch, 2 * (innerDimensionSize - 1)];
    const realInput = reshape(real(input2), [batch, innerDimensionSize]);
    const imagInput = reshape(imag(input2), [batch, innerDimensionSize]);
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
  if (input2.rank === 3 && input2.shape[0] !== 0) {
    const temp = ret;
    const batch2 = input2.shape[0];
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
function rfft_(input2, fftLength) {
  assert(
    input2.dtype === "float32",
    () => `The dtype for rfft() must be real value but got ${input2.dtype}`
  );
  let innerDimensionSize = input2.shape[input2.shape.length - 1];
  const batch = input2.size / innerDimensionSize;
  let adjustedInput;
  if (fftLength != null && fftLength < innerDimensionSize) {
    const begin = input2.shape.map((v) => 0);
    const size = input2.shape.map((v) => v);
    size[input2.shape.length - 1] = fftLength;
    adjustedInput = slice(input2, begin, size);
    innerDimensionSize = fftLength;
  } else if (fftLength != null && fftLength > innerDimensionSize) {
    const zerosShape = input2.shape.map((v) => v);
    zerosShape[input2.shape.length - 1] = fftLength - innerDimensionSize;
    adjustedInput = concat([input2, zeros(zerosShape)], input2.shape.length - 1);
    innerDimensionSize = fftLength;
  } else {
    adjustedInput = input2;
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

// src/tfjs-core/src/ops/variable.ts
function variable(initialValue, trainable = true, name, dtype) {
  return ENGINE.makeVariable(initialValue, trainable, name, dtype);
}

// src/tfjs-core/src/ops/moving_average.ts
function movingAverage_(v, x, decay, step2, zeroDebias = true) {
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
      step2 != null,
      () => "When using zeroDebias: true, step is required."
    );
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
    floor(add2(randomUniform($noiseShape, 0, 1, "float32", seed), keepProb)),
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

// src/tfjs-core/src/ops/fused_ops.ts
var fused_ops_exports = {};
__export(fused_ops_exports, {
  conv2d: () => conv2d2,
  depthwiseConv2d: () => depthwiseConv2d2,
  matMul: () => matMul2
});

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
  checkPadOnDimRoundingMode("conv2dDerFilter", pad2, dimRoundingMode);
  const inputs = { x: x4D, dy: dy4D };
  const attrs = { strides, pad: pad2, dataFormat, dimRoundingMode, filterShape };
  return ENGINE.runKernel(
    Conv2DBackpropFilter,
    inputs,
    attrs
  );
}
var conv2DBackpropFilter = op({ conv2DBackpropFilter_ });

// src/tfjs-core/src/ops/fused_util.ts
function getFusedDyActivation(dy, y, activation2) {
  if (activation2 == null || activation2 === "linear") {
    return dy;
  }
  if (activation2 === "relu") {
    return mul(dy, step(y));
  }
  throw new Error(
    `Cannot compute gradient for fused activation ${activation2}.`
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
function applyActivation(x, activation2, preluActivationWeights, leakyreluAlpha) {
  if (activation2 === "linear") {
    return x;
  } else if (activation2 === "relu") {
    return relu(x);
  } else if (activation2 === "elu") {
    return elu(x);
  } else if (activation2 === "relu6") {
    return relu6(x);
  } else if (activation2 === "prelu") {
    return prelu(x, preluActivationWeights);
  } else if (activation2 === "leakyrelu") {
    return leakyRelu(x, leakyreluAlpha);
  } else if (activation2 === "sigmoid") {
    return sigmoid(x);
  }
  throw new Error(`Unknown fused activation ${activation2}.`);
}
var shouldFuse = (gradientDepth, activation2) => {
  const gradientMode = gradientDepth > 0;
  return !gradientMode || activation2 === "linear";
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
  activation: activation2 = "linear",
  preluActivationWeights,
  leakyreluAlpha
}) {
  activation2 = activation2 || "linear";
  if (shouldFuse(ENGINE.state.gradientDepth, activation2) === false) {
    assert(
      dataFormat === "NHWC",
      () => `Error in fused conv2d: got dataFormat of ${dataFormat} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`
    );
    let result = conv2d(
      x,
      filter,
      strides,
      pad2,
      dataFormat,
      dilations,
      dimRoundingMode
    );
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(
      result,
      activation2,
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
  checkPadOnDimRoundingMode("fused conv2d", pad2, dimRoundingMode);
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
    pad2,
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
    const dyActivation = getFusedDyActivation(dy, y, activation2);
    assert(
      tupleValuesAreOne(dilations),
      () => `Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${dilations}'`
    );
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
    activation: activation2,
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
  return ENGINE.runKernel(
    DepthwiseConv2dNativeBackpropFilter,
    inputs,
    attrs
  );
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
  pad: pad2,
  dataFormat = "NHWC",
  dilations = [1, 1],
  dimRoundingMode,
  bias,
  activation: activation2 = "linear",
  preluActivationWeights,
  leakyreluAlpha
}) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation2) === false) {
    let result = depthwiseConv2d(
      x,
      filter,
      strides,
      pad2,
      dataFormat,
      dilations,
      dimRoundingMode
    );
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(
      result,
      activation2,
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
    pad2,
    dimRoundingMode
  );
  const convInfo = computeConv2DInfo(
    x4D.shape,
    $filter.shape,
    strides,
    dilations,
    pad2,
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
    const dyActivation = getFusedDyActivation(dy, y, activation2);
    const xDer = depthwiseConv2dNativeBackpropInput(
      x4D2.shape,
      dyActivation,
      $filter2,
      strides,
      pad2,
      dilations,
      dimRoundingMode
    );
    const filterDer = depthwiseConv2dNativeBackpropFilter(
      x4D2,
      dyActivation,
      $filter2.shape,
      strides,
      pad2,
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
    pad: pad2,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation: activation2,
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
  activation: activation2 = "linear",
  preluActivationWeights,
  leakyreluAlpha = 0.2
}) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation2) === false) {
    let result = matMul(a, b, transposeA, transposeB);
    if (bias != null) {
      result = add2(result, bias);
    }
    return applyActivation(
      result,
      activation2,
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
    const dyActivation = getFusedDyActivation(reshape(dy, y.shape), y, activation2);
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
  const attrs = { transposeA, transposeB, activation: activation2, leakyreluAlpha };
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
function cropAndResize_(image2, boxes, boxInd, cropSize, method = "bilinear", extrapolationValue = 0) {
  const $image = convertToTensor(image2, "image", "cropAndResize");
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
function flipLeftRight_(image2) {
  const $image = convertToTensor(image2, "image", "flipLeftRight", "float32");
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
function grayscaleToRGB_(image2) {
  const $image = convertToTensor(image2, "image", "grayscaleToRGB");
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
function rotateWithOffset_(image2, radians, fillValue = 0, center = 0.5) {
  const $image = convertToTensor(image2, "image", "rotateWithOffset", "float32");
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
  return nonMaxSuppressionImpl_(
    boxes,
    scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    0
  );
}
function nonMaxSuppressionV4Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize) {
  return nonMaxSuppressionImpl_(
    boxes,
    scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    0,
    false,
    padToMaxOutputSize,
    true
  );
}
function nonMaxSuppressionV5Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma) {
  return nonMaxSuppressionImpl_(
    boxes,
    scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma,
    true
  );
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

// src/tfjs-core/src/ops/image/non_max_suppression_async.ts
async function nonMaxSuppressionAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppressionAsync");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppressionAsync");
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
  const boxesAndScores = await Promise.all([$boxes.data(), $scores.data()]);
  const boxesVals = boxesAndScores[0];
  const scoresVals = boxesAndScores[1];
  const { selectedIndices } = nonMaxSuppressionV3Impl(
    boxesVals,
    scoresVals,
    maxOutputSize,
    iouThreshold,
    scoreThreshold
  );
  if ($boxes !== boxes) {
    $boxes.dispose();
  }
  if ($scores !== scores) {
    $scores.dispose();
  }
  return tensor1d(selectedIndices, "int32");
}
var nonMaxSuppressionAsync = nonMaxSuppressionAsync_;

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

// src/tfjs-core/src/ops/image/non_max_suppression_with_score_async.ts
async function nonMaxSuppressionWithScoreAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppressionAsync");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppressionAsync");
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
  const boxesAndScores = await Promise.all([$boxes.data(), $scores.data()]);
  const boxesVals = boxesAndScores[0];
  const scoresVals = boxesAndScores[1];
  const { selectedIndices, selectedScores } = nonMaxSuppressionV5Impl(
    boxesVals,
    scoresVals,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma
  );
  if ($boxes !== boxes) {
    $boxes.dispose();
  }
  if ($scores !== scores) {
    $scores.dispose();
  }
  return {
    selectedIndices: tensor1d(selectedIndices, "int32"),
    selectedScores: tensor1d(selectedScores)
  };
}
var nonMaxSuppressionWithScoreAsync = nonMaxSuppressionWithScoreAsync_;

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

// src/tfjs-core/src/ops/image/non_max_suppression_padded_async.ts
async function nonMaxSuppressionPaddedAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
  const $boxes = convertToTensor(boxes, "boxes", "nonMaxSuppressionAsync");
  const $scores = convertToTensor(scores, "scores", "nonMaxSuppressionAsync");
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
  const [boxesVals, scoresVals] = await Promise.all([$boxes.data(), $scores.data()]);
  const { selectedIndices, validOutputs } = nonMaxSuppressionV4Impl(
    boxesVals,
    scoresVals,
    $maxOutputSize,
    $iouThreshold,
    $scoreThreshold,
    padToMaxOutputSize
  );
  if ($boxes !== boxes) {
    $boxes.dispose();
  }
  if ($scores !== scores) {
    $scores.dispose();
  }
  return {
    selectedIndices: tensor1d(selectedIndices, "int32"),
    validOutputs: scalar(validOutputs, "int32")
  };
}
var nonMaxSuppressionPaddedAsync = nonMaxSuppressionPaddedAsync_;

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
function threshold_(image2, method = "binary", inverted = false, threshValue = 0.5) {
  const $image = convertToTensor(image2, "image", "threshold");
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
    grayscale = add2(add2($r, $g), $b);
  } else {
    grayscale = image2;
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
function transform_(image2, transforms, interpolation = "nearest", fillMode = "constant", fillValue = 0, outputShape) {
  const $image = convertToTensor(image2, "image", "transform", "float32");
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
  const losses = add2(mul(scalar(0.5), square(quadratic)), mul(deltaScalar, linear));
  return computeWeightedLoss(losses, $weights, reduction);
}
var huberLoss = op({ huberLoss_ });

// src/tfjs-core/src/ops/losses/log_loss.ts
function logLoss_(labels, predictions, weights, epsilon2 = 1e-7, reduction = 3 /* SUM_BY_NONZERO_WEIGHTS */) {
  const $labels = convertToTensor(labels, "labels", "logLoss");
  const $predictions = convertToTensor(predictions, "predictions", "logLoss");
  let $weights = null;
  if (weights != null) {
    $weights = convertToTensor(weights, "weights", "logLoss");
  }
  assertShapesMatch($labels.shape, $predictions.shape, "Error in logLoss: ");
  const one = scalar(1);
  const epsilonScalar = scalar(epsilon2);
  const l13 = neg(mul($labels, log2(add2($predictions, epsilonScalar))));
  const l23 = mul(sub(one, $labels), log2(add2(sub(one, $predictions), epsilonScalar)));
  const losses = sub(l13, l23);
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
  return add2(sub(maxOutput, outputXTarget), sigmoidOutput);
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
    $multiClassLabels = add2(
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
    $onehotLabels = add2(
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
function stringSplit_(input2, delimiter, skipEmpty = true) {
  const $input = convertToTensor(input2, "input", "stringSplit", "string");
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
function stringToHashBucketFast_(input2, numBuckets) {
  const $input = convertToTensor(input2, "input", "stringToHashBucketFast", "string");
  const attrs = { numBuckets };
  if (numBuckets <= 0) {
    throw new Error(`Number of buckets must be at least 1`);
  }
  const inputs = { input: $input };
  return ENGINE.runKernel(StringToHashBucketFast, inputs, attrs);
}
var stringToHashBucketFast = op({ stringToHashBucketFast_ });

// src/tfjs-core/src/ops/ops.ts
var image = {
  flipLeftRight,
  grayscaleToRGB,
  resizeNearestNeighbor,
  resizeBilinear,
  rotateWithOffset,
  cropAndResize,
  nonMaxSuppression,
  nonMaxSuppressionAsync,
  nonMaxSuppressionWithScore,
  nonMaxSuppressionWithScoreAsync,
  nonMaxSuppressionPadded,
  nonMaxSuppressionPaddedAsync,
  threshold,
  transform
};
var linalg = {
  bandPart,
  gramSchmidt,
  qr
};

// src/tfjs-core/src/optimizers/optimizer.ts
var Optimizer = class extends Serializable {
  iterations_;
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
  constructor(learningRate, rho, epsilon2 = null) {
    super();
    this.learningRate = learningRate;
    this.rho = rho;
    this.epsilon = epsilon2;
    if (epsilon2 == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  accumulatedGrads = [];
  accumulatedUpdates = [];
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
        const newAccumulatedGrad = add2(
          mul(accumulatedGrad, this.rho),
          mul(square(gradient), 1 - this.rho)
        );
        const updates = mul(
          div(
            sqrt(add2(accumulatedUpdate, this.epsilon)),
            sqrt(add2(accumulatedGrad, this.epsilon))
          ),
          gradient
        );
        const newAccumulatedUpdate = add2(
          mul(accumulatedUpdate, this.rho),
          mul(square(updates), 1 - this.rho)
        );
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
__publicField(AdadeltaOptimizer, "className", "Adadelta");
registerClass(AdadeltaOptimizer);

// src/tfjs-core/src/optimizers/adagrad_optimizer.ts
var AdagradOptimizer = class extends Optimizer {
  constructor(learningRate, initialAccumulatorValue = 0.1) {
    super();
    this.learningRate = learningRate;
    this.initialAccumulatorValue = initialAccumulatorValue;
  }
  accumulatedGrads = [];
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
        const newAccumulatedGrad = add2(accumulatedGrad, square(gradient));
        accumulatedGrad.assign(newAccumulatedGrad);
        const newValue = add2(
          mul(
            div(
              gradient,
              sqrt(add2(newAccumulatedGrad, ENGINE.backend.epsilon()))
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
__publicField(AdagradOptimizer, "className", "Adagrad");
registerClass(AdagradOptimizer);

// src/tfjs-core/src/optimizers/adam_optimizer.ts
var AdamOptimizer = class extends Optimizer {
  constructor(learningRate, beta1, beta2, epsilon2 = null) {
    super();
    this.learningRate = learningRate;
    this.beta1 = beta1;
    this.beta2 = beta2;
    this.epsilon = epsilon2;
    tidy(() => {
      this.accBeta1 = scalar(beta1).variable();
      this.accBeta2 = scalar(beta2).variable();
    });
    if (epsilon2 == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  accBeta1;
  accBeta2;
  accumulatedFirstMoment = [];
  accumulatedSecondMoment = [];
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
        const newSecondMoment = add2(
          mul(secondMoment, this.beta2),
          mul(square(gradient), 1 - this.beta2)
        );
        const biasCorrectedFirstMoment = div(newFirstMoment, oneMinusAccBeta1);
        const biasCorrectedSecondMoment = div(newSecondMoment, oneMinusAccBeta2);
        firstMoment.assign(newFirstMoment);
        secondMoment.assign(newSecondMoment);
        const newValue = add2(
          mul(
            div(
              biasCorrectedFirstMoment,
              add2(sqrt(biasCorrectedSecondMoment), this.epsilon)
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
__publicField(AdamOptimizer, "className", "Adam");
registerClass(AdamOptimizer);

// src/tfjs-core/src/optimizers/adamax_optimizer.ts
var AdamaxOptimizer = class extends Optimizer {
  constructor(learningRate, beta1, beta2, epsilon2 = null, decay = 0) {
    super();
    this.learningRate = learningRate;
    this.beta1 = beta1;
    this.beta2 = beta2;
    this.epsilon = epsilon2;
    this.decay = decay;
    tidy(() => {
      this.iteration = scalar(0).variable();
      this.accBeta1 = scalar(beta1).variable();
    });
    if (epsilon2 == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  accBeta1;
  iteration;
  accumulatedFirstMoment = [];
  accumulatedWeightedInfNorm = [];
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
        const newValue = add2(
          mul(
            div(lr, oneMinusAccBeta1),
            div(newFirstMoment, add2(newWeightedInfNorm, this.epsilon))
          ),
          value
        );
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
    return new cls(
      config["learningRate"],
      config["beta1"],
      config["beta2"],
      config["epsilon"],
      config["decay"]
    );
  }
};
__publicField(AdamaxOptimizer, "className", "Adamax");
registerClass(AdamaxOptimizer);

// src/tfjs-core/src/optimizers/sgd_optimizer.ts
var SGDOptimizer = class extends Optimizer {
  constructor(learningRate) {
    super();
    this.learningRate = learningRate;
    this.setLearningRate(learningRate);
  }
  c;
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
__publicField(SGDOptimizer, "className", "SGD");
registerClass(SGDOptimizer);

// src/tfjs-core/src/optimizers/momentum_optimizer.ts
var MomentumOptimizer = class extends SGDOptimizer {
  constructor(learningRate, momentum, useNesterov = false) {
    super(learningRate);
    this.learningRate = learningRate;
    this.momentum = momentum;
    this.useNesterov = useNesterov;
    this.m = scalar(this.momentum);
  }
  m;
  accumulations = [];
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
          newValue = add2(
            mul(this.c, add2(gradient, mul(newAccumulation, this.m))),
            value
          );
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
__publicField(MomentumOptimizer, "className", "Momentum");
registerClass(MomentumOptimizer);

// src/tfjs-core/src/optimizers/rmsprop_optimizer.ts
var RMSPropOptimizer = class extends Optimizer {
  constructor(learningRate, decay = 0.9, momentum = 0, epsilon2 = null, centered = false) {
    super();
    this.learningRate = learningRate;
    this.decay = decay;
    this.momentum = momentum;
    this.epsilon = epsilon2;
    this.centered = centered;
    if (epsilon2 == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
    if (learningRate == null) {
      throw new Error(`learningRate for RMSPropOptimizer must be defined.`);
    }
  }
  centered;
  accumulatedMeanSquares = [];
  accumulatedMoments = [];
  accumulatedMeanGrads = [];
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
        const newAccumulatedMeanSquare = add2(
          mul(accumulatedMeanSquare, this.decay),
          mul(square(gradient), 1 - this.decay)
        );
        if (this.centered) {
          const accumulatedMeanGrad = this.accumulatedMeanGrads[i].variable;
          const newAccumulatedMeanGrad = add2(
            mul(accumulatedMeanGrad, this.decay),
            mul(gradient, 1 - this.decay)
          );
          const gradContribution = div(
            mul(gradient, this.learningRate),
            sqrt(
              sub(
                newAccumulatedMeanSquare,
                add2(square(newAccumulatedMeanGrad), this.epsilon)
              )
            )
          );
          const newAccumulatedMoments = add2(mul(accumulatedMoments, this.momentum), gradContribution);
          accumulatedMeanSquare.assign(newAccumulatedMeanSquare);
          accumulatedMeanGrad.assign(newAccumulatedMeanGrad);
          accumulatedMoments.assign(newAccumulatedMoments);
          const newValue = sub(value, newAccumulatedMoments);
          value.assign(newValue);
        } else {
          const newAccumulatedMeanSquare2 = add2(
            mul(accumulatedMeanSquare, this.decay),
            mul(square(gradient), 1 - this.decay)
          );
          const newAccumulatedMoments = add2(
            mul(accumulatedMoments, this.momentum),
            div(
              mul(gradient, this.learningRate),
              sqrt(add2(newAccumulatedMeanSquare2, this.epsilon))
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
__publicField(RMSPropOptimizer, "className", "RMSProp");
registerClass(RMSPropOptimizer);

// src/tfjs-core/src/optimizers/optimizer_constructors.ts
var OptimizerConstructors = class {
  static sgd(learningRate) {
    return new SGDOptimizer(learningRate);
  }
  static momentum(learningRate, momentum, useNesterov = false) {
    return new MomentumOptimizer(learningRate, momentum, useNesterov);
  }
  static rmsprop(learningRate, decay = 0.9, momentum = 0, epsilon2 = null, centered = false) {
    return new RMSPropOptimizer(
      learningRate,
      decay,
      momentum,
      epsilon2,
      centered
    );
  }
  static adam(learningRate = 1e-3, beta1 = 0.9, beta2 = 0.999, epsilon2 = null) {
    return new AdamOptimizer(learningRate, beta1, beta2, epsilon2);
  }
  static adadelta(learningRate = 1e-3, rho = 0.95, epsilon2 = null) {
    return new AdadeltaOptimizer(learningRate, rho, epsilon2);
  }
  static adamax(learningRate = 2e-3, beta1 = 0.9, beta2 = 0.999, epsilon2 = null, decay = 0) {
    return new AdamaxOptimizer(learningRate, beta1, beta2, epsilon2, decay);
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
function nextFrame() {
  return new Promise((resolve) => delayCallback(() => resolve()));
}

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
var RowPartitionType = /* @__PURE__ */ ((RowPartitionType2) => {
  RowPartitionType2[RowPartitionType2["FIRST_DIM_SIZE"] = 0] = "FIRST_DIM_SIZE";
  RowPartitionType2[RowPartitionType2["VALUE_ROWIDS"] = 1] = "VALUE_ROWIDS";
  RowPartitionType2[RowPartitionType2["ROW_LENGTHS"] = 2] = "ROW_LENGTHS";
  RowPartitionType2[RowPartitionType2["ROW_SPLITS"] = 3] = "ROW_SPLITS";
  RowPartitionType2[RowPartitionType2["ROW_LIMITS"] = 4] = "ROW_LIMITS";
  RowPartitionType2[RowPartitionType2["ROW_STARTS"] = 5] = "ROW_STARTS";
  return RowPartitionType2;
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
function getReshaped(inputShape, blockShape, prod2, batchToSpace = true) {
  let reshaped = [];
  if (batchToSpace) {
    reshaped = reshaped.concat(blockShape.slice(0));
    reshaped.push(inputShape[0] / prod2);
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
function getReshapedPermuted(inputShape, blockShape, prod2, batchToSpace = true) {
  const reshapedPermuted = [];
  if (batchToSpace) {
    reshapedPermuted.push(inputShape[0] / prod2);
  } else {
    reshapedPermuted.push(inputShape[0] * prod2);
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
function mergeRealAndImagArrays(real2, imag2) {
  if (real2.length !== imag2.length) {
    throw new Error(
      `Cannot merge real and imag arrays of different lengths. real:${real2.length}, imag: ${imag2.length}.`
    );
  }
  const result = new Float32Array(real2.length * 2);
  for (let i = 0; i < result.length; i += 2) {
    result[i] = real2[i / 2];
    result[i + 1] = imag2[i / 2];
  }
  return result;
}
function splitRealAndImagArrays(complex2) {
  const real2 = new Float32Array(complex2.length / 2);
  const imag2 = new Float32Array(complex2.length / 2);
  for (let i = 0; i < complex2.length; i += 2) {
    real2[i / 2] = complex2[i];
    imag2[i / 2] = complex2[i + 1];
  }
  return { real: real2, imag: imag2 };
}
function complexWithEvenIndex(complex2) {
  const len = Math.ceil(complex2.length / 4);
  const real2 = new Float32Array(len);
  const imag2 = new Float32Array(len);
  for (let i = 0; i < complex2.length; i += 4) {
    real2[Math.floor(i / 4)] = complex2[i];
    imag2[Math.floor(i / 4)] = complex2[i + 1];
  }
  return { real: real2, imag: imag2 };
}
function complexWithOddIndex(complex2) {
  const len = Math.floor(complex2.length / 4);
  const real2 = new Float32Array(len);
  const imag2 = new Float32Array(len);
  for (let i = 2; i < complex2.length; i += 4) {
    real2[Math.floor(i / 4)] = complex2[i];
    imag2[Math.floor(i / 4)] = complex2[i + 1];
  }
  return { real: real2, imag: imag2 };
}
function getComplexWithIndex(complex2, index) {
  const real2 = complex2[index * 2];
  const imag2 = complex2[index * 2 + 1];
  return { real: real2, imag: imag2 };
}
function assignToTypedArray(data, real2, imag2, index) {
  data[index * 2] = real2;
  data[index * 2 + 1] = imag2;
}
function exponents(n, inverse) {
  const real2 = new Float32Array(n / 2);
  const imag2 = new Float32Array(n / 2);
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    const x = (inverse ? 2 : -2) * Math.PI * (i / n);
    real2[i] = Math.cos(x);
    imag2[i] = Math.sin(x);
  }
  return { real: real2, imag: imag2 };
}
function exponent(k, n, inverse) {
  const x = (inverse ? 2 : -2) * Math.PI * (k / n);
  const real2 = Math.cos(x);
  const imag2 = Math.sin(x);
  return { real: real2, imag: imag2 };
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
    const numOfNegs = numOrSizeSplits.reduce((count2, value) => {
      if (value === -1) {
        count2 += 1;
      }
      return count2;
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
  } catch (err) {
    throw new Error(
      `Failed to decode encoded string bytes into utf-8, error: ${err}`
    );
  }
}
function fromStringArrayToUint8(strings) {
  return strings.map((s) => encodeString(s));
}

// src/tfjs-layers/src/errors.ts
var AttributeError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, AttributeError.prototype);
  }
};
var RuntimeError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, RuntimeError.prototype);
  }
};
var ValueError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, ValueError.prototype);
  }
};
var NotImplementedError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, NotImplementedError.prototype);
  }
};
var AssertionError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, AssertionError.prototype);
  }
};

// src/tfjs-layers/src/utils/executor_utils.ts
var LruCache = class {
  cache;
  maxEntries;
  constructor(maxEntries) {
    this.maxEntries = maxEntries || 100;
    this.cache = /* @__PURE__ */ new Map();
  }
  get(key) {
    let entry;
    if (this.cache.has(key)) {
      entry = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, entry);
    }
    return entry;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxEntries) {
      const keyToDelete = this.cache.keys().next().value;
      this.cache.delete(keyToDelete);
    }
    this.cache.set(key, value);
  }
  getMaxEntries() {
    return this.maxEntries;
  }
  setMaxEntries(maxEntries) {
    if (maxEntries < 0) {
      throw new Error(
        `The maxEntries of LRU caches must be at least 0, but got ${maxEntries}.`
      );
    }
    if (this.maxEntries > maxEntries) {
      for (let i = 0; i < this.maxEntries - maxEntries; i++) {
        const keyToDelete = this.cache.keys().next().value;
        this.cache.delete(keyToDelete);
      }
    }
    this.maxEntries = maxEntries;
  }
};

// src/tfjs-layers/src/utils/generic_utils.ts
function pyListRepeat(value, numValues) {
  if (Array.isArray(value)) {
    let newArray = [];
    for (let i = 0; i < numValues; i++) {
      newArray = newArray.concat(value);
    }
    return newArray;
  } else {
    const newArray = new Array(numValues);
    newArray.fill(value);
    return newArray;
  }
}
function assert2(val, message) {
  if (!val) {
    throw new AssertionError(message);
  }
}
function count(array, refernce) {
  let counter = 0;
  for (const item of array) {
    if (item === refernce) {
      counter++;
    }
  }
  return counter;
}
function singletonOrArray(xs) {
  if (xs.length === 1) {
    return xs[0];
  }
  return xs;
}
function toList(x) {
  if (Array.isArray(x)) {
    return x;
  }
  return [x];
}
function toSnakeCase(name) {
  const intermediate = name.replace(/(.)([A-Z][a-z0-9]+)/g, "$1_$2");
  const insecure = intermediate.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  if (insecure[0] !== "_") {
    return insecure;
  }
  return "private" + insecure;
}
function toCamelCase(identifier) {
  if (identifier.length <= 1) {
    return identifier;
  }
  if (identifier.indexOf("_") === -1) {
    return identifier;
  }
  return identifier.replace(/[_]+(\w|$)/g, (m, p1) => p1.toUpperCase());
}
var _GLOBAL_CUSTOM_OBJECTS = {};
function serializeKerasObject(instance) {
  if (instance === null || instance === void 0) {
    return null;
  }
  const dict = {};
  dict["className"] = instance.getClassName();
  dict["config"] = instance.getConfig();
  return dict;
}
function convertNDArrayScalarsInConfig(config) {
  if (config == null || typeof config !== "object") {
    return;
  } else if (Array.isArray(config)) {
    config.forEach((configItem) => convertNDArrayScalarsInConfig(configItem));
  } else {
    const fields = Object.keys(config);
    for (const field of fields) {
      const value = config[field];
      if (value != null && typeof value === "object") {
        if (!Array.isArray(value) && value["type"] === "ndarray" && typeof value["value"] === "number") {
          config[field] = value["value"];
        } else {
          convertNDArrayScalarsInConfig(value);
        }
      }
    }
  }
}
function deserializeKerasObject(identifier, moduleObjects = {}, customObjects = {}, printableModuleName = "object", fastWeightInit = false) {
  if (typeof identifier === "string") {
    const functionName = identifier;
    let fn;
    if (functionName in customObjects) {
      fn = customObjects[functionName];
    } else if (functionName in _GLOBAL_CUSTOM_OBJECTS) {
      fn = _GLOBAL_CUSTOM_OBJECTS[functionName];
    } else {
      fn = moduleObjects[functionName];
      if (fn == null) {
        throw new ValueError(
          `Unknown ${printableModuleName}: ${identifier}. This may be due to one of the following reasons:
1. The ${printableModuleName} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${printableModuleName} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`
        );
      }
    }
    return fn;
  } else {
    const config = identifier;
    if (config["className"] == null || config["config"] == null) {
      throw new ValueError(
        `${printableModuleName}: Improper config format: ${JSON.stringify(config)}.
'className' and 'config' must set.`
      );
    }
    const className = config["className"];
    let cls, fromConfig;
    if (className in customObjects) {
      [cls, fromConfig] = customObjects[className];
    } else if (className in _GLOBAL_CUSTOM_OBJECTS) {
      [cls, fromConfig] = _GLOBAL_CUSTOM_OBJECTS["className"];
    } else if (className in moduleObjects) {
      [cls, fromConfig] = moduleObjects[className];
    }
    if (cls == null) {
      throw new ValueError(
        `Unknown ${printableModuleName}: ${className}. This may be due to one of the following reasons:
1. The ${printableModuleName} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${printableModuleName} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`
      );
    }
    if (fromConfig != null) {
      const customObjectsCombined = {};
      for (const key of Object.keys(_GLOBAL_CUSTOM_OBJECTS)) {
        customObjectsCombined[key] = _GLOBAL_CUSTOM_OBJECTS[key];
      }
      for (const key of Object.keys(customObjects)) {
        customObjectsCombined[key] = customObjects[key];
      }
      const nestedConfig = config["config"];
      nestedConfig["customObjects"] = customObjectsCombined;
      const backupCustomObjects = { ..._GLOBAL_CUSTOM_OBJECTS };
      for (const key of Object.keys(customObjects)) {
        _GLOBAL_CUSTOM_OBJECTS[key] = customObjects[key];
      }
      convertNDArrayScalarsInConfig(config["config"]);
      const returnObj = fromConfig(cls, config["config"], customObjects, fastWeightInit);
      _GLOBAL_CUSTOM_OBJECTS = { ...backupCustomObjects };
      return returnObj;
    } else {
      const backupCustomObjects = { ..._GLOBAL_CUSTOM_OBJECTS };
      for (const key of Object.keys(customObjects)) {
        _GLOBAL_CUSTOM_OBJECTS[key] = customObjects[key];
      }
      const returnObj = new cls(config["config"]);
      _GLOBAL_CUSTOM_OBJECTS = { ...backupCustomObjects };
      return returnObj;
    }
  }
}
function numberCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function reverseNumberCompare(a, b) {
  return -1 * numberCompare(a, b);
}
function unique2(xs) {
  if (xs == null) {
    return xs;
  }
  const out = [];
  for (const x of xs) {
    if (out.indexOf(x) === -1) {
      out.push(x);
    }
  }
  return out;
}
function isObjectEmpty(obj) {
  if (obj == null) {
    throw new ValueError(`Invalid value in obj: ${JSON.stringify(obj)}`);
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
function checkStringTypeUnionValue(values, label, value) {
  if (value == null) {
    return;
  }
  if (values.indexOf(value) < 0) {
    throw new ValueError(`${value} is not a valid ${label}.  Valid values are ${values} or null/undefined.`);
  }
}
function checkArrayTypeAndLength(x, expectedType, minLength = 0, maxLength = Infinity) {
  assert2(minLength >= 0);
  assert2(maxLength >= minLength);
  return Array.isArray(x) && x.length >= minLength && x.length <= maxLength && x.every((e) => typeof e === expectedType);
}
function assertPositiveInteger(value, name) {
  if (Array.isArray(value)) {
    util_exports.assert(
      value.length > 0,
      () => `${name} is unexpectedly an empty array.`
    );
    value.forEach(
      (v, i) => assertPositiveInteger(v, `element ${i + 1} of ${name}`)
    );
  } else {
    util_exports.assert(
      Number.isInteger(value) && value > 0,
      () => `Expected ${name} to be a positive integer, but got ${formatAsFriendlyString(value)}.`
    );
  }
}
function formatAsFriendlyString(value) {
  if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    return "[" + value.map((v) => formatAsFriendlyString(v)).join(",") + "]";
  } else if (typeof value === "string") {
    return `"${value}"`;
  } else {
    return `${value}`;
  }
}
function debounce(f, waitMs, nowFunc) {
  let lastTime = nowFunc != null ? nowFunc() : util_exports.now();
  let lastResult;
  const f2 = (...args) => {
    const now2 = nowFunc != null ? nowFunc() : util_exports.now();
    if (now2 - lastTime < waitMs) {
      return lastResult;
    }
    lastTime = now2;
    lastResult = f(...args);
    return lastResult;
  };
  return f2;
}
function mapActivationToFusedKernel(activationName) {
  if (activationName === "relu") {
    return "relu";
  }
  if (activationName === "linear") {
    return "linear";
  }
  if (activationName === "elu") {
    return "elu";
  }
  return null;
}

// src/tfjs-layers/src/backend/state.ts
var _nextUniqueTensorId = 0;
function getNextUniqueTensorId() {
  return _nextUniqueTensorId++;
}
var _uidPrefixes = {};
function getUid(prefix = "") {
  if (!(prefix in _uidPrefixes)) {
    _uidPrefixes[prefix] = 0;
  }
  _uidPrefixes[prefix] += 1;
  return prefix + _uidPrefixes[prefix].toString();
}

// src/tfjs-layers/src/keras_format/common.ts
var VALID_DATA_FORMAT_VALUES = ["channelsFirst", "channelsLast"];
var VALID_INTERPOLATION_FORMAT_VALUES = ["nearest", "bilinear"];
var VALID_PADDING_MODE_VALUES = ["valid", "same", "causal"];
var VALID_POOL_MODE_VALUES = ["max", "avg"];
var VALID_BIDIRECTIONAL_MERGE_MODES = ["sum", "mul", "concat", "ave"];

// src/tfjs-layers/src/common.ts
var nameMap = /* @__PURE__ */ new Map();
function checkDataFormat(value) {
  checkStringTypeUnionValue(VALID_DATA_FORMAT_VALUES, "DataFormat", value);
}
function checkInterpolationFormat(value) {
  checkStringTypeUnionValue(
    VALID_INTERPOLATION_FORMAT_VALUES,
    "InterpolationFormat",
    value
  );
}
function checkPaddingMode(value) {
  checkStringTypeUnionValue(VALID_PADDING_MODE_VALUES, "PaddingMode", value);
}
function checkPoolMode(value) {
  checkStringTypeUnionValue(VALID_POOL_MODE_VALUES, "PoolMode", value);
}
var _nameScopeStack = [];
var _nameScopeDivider = "/";
function nameScope(name, fn) {
  _nameScopeStack.push(name);
  try {
    const val = fn();
    _nameScopeStack.pop();
    return val;
  } catch (e) {
    _nameScopeStack.pop();
    throw e;
  }
}
function currentNameScopePrefix() {
  if (_nameScopeStack.length === 0) {
    return "";
  } else {
    return _nameScopeStack.join(_nameScopeDivider) + _nameScopeDivider;
  }
}
function getScopedTensorName(tensorName) {
  if (!isValidTensorName(tensorName)) {
    throw new Error("Not a valid tensor name: '" + tensorName + "'");
  }
  return currentNameScopePrefix() + tensorName;
}
function getUniqueTensorName(scopedName) {
  if (!isValidTensorName(scopedName)) {
    throw new Error("Not a valid tensor name: '" + scopedName + "'");
  }
  if (!nameMap.has(scopedName)) {
    nameMap.set(scopedName, 0);
  }
  const index = nameMap.get(scopedName);
  nameMap.set(scopedName, nameMap.get(scopedName) + 1);
  if (index > 0) {
    const result = `${scopedName}_${index}`;
    nameMap.set(result, 1);
    return result;
  } else {
    return scopedName;
  }
}
var tensorNameRegex = new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);
function isValidTensorName(name) {
  return !!name.match(tensorNameRegex);
}

// src/tfjs-layers/src/utils/math_utils.ts
function isInteger(x) {
  return x === parseInt(x.toString(), 10);
}
function arrayProd(array, begin, end) {
  if (begin == null) {
    begin = 0;
  }
  if (end == null) {
    end = array.length;
  }
  let prod2 = 1;
  for (let i = begin; i < end; ++i) {
    prod2 *= array[i];
  }
  return prod2;
}
function min2(array) {
  if (array.length === 0) {
    return Number.NaN;
  }
  let min3 = Number.POSITIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value < min3) {
      min3 = value;
    }
  }
  return min3;
}
function max2(array) {
  if (array.length === 0) {
    return Number.NaN;
  }
  let max3 = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value > max3) {
      max3 = value;
    }
  }
  return max3;
}
function range2(begin, end) {
  if (end < begin) {
    throw new ValueError(`end (${end}) < begin (${begin}) is forbidden.`);
  }
  const out = [];
  for (let i = begin; i < end; ++i) {
    out.push(i);
  }
  return out;
}

// src/tfjs-layers/src/backend/common.ts
var _epsilon;
function epsilon() {
  if (_epsilon == null) {
    _epsilon = backend().epsilon();
  }
  return _epsilon;
}
function imageDataFormat() {
  return "channelsLast";
}

// src/tfjs-layers/src/backend/tfjs_backend.ts
function cast2(x, dtype) {
  return cast(x, dtype);
}
function expandDims2(x, axis = -1) {
  const outShape = x.shape.slice();
  if (axis < 0) {
    axis = outShape.length + axis + 1;
  }
  outShape.splice(axis, 0, 1);
  return reshape(x, outShape);
}
function repeat(x, n) {
  return tidy(() => {
    if (x.shape.length !== 2) {
      throw new ValueError(
        `repeat() expects a rank-2 tensor, but received a rank-${x.shape.length} tensor.`
      );
    }
    const y = expandDims2(x, 1);
    return tile2(y, [1, n, 1]);
  });
}
function flatten2(x) {
  const newShape = [arrayProd(x.shape)];
  return reshape(x, newShape);
}
function batchFlatten(x) {
  if (x.rank <= 1) {
    throw new ValueError(
      `batchFlatten requires a minimum rank of 2. Got rank: ${x.rank}.`
    );
  }
  const newShape = [x.shape[0], arrayProd(x.shape, 1)];
  return reshape(x, newShape);
}
function sliceAlongFirstAxis(array, start, size) {
  return tidy(() => {
    switch (array.rank) {
      case 1:
        return slice1d(array, start, size);
      case 2:
        return slice2d(
          array,
          [start, 0],
          [size, array.shape[1]]
        );
      case 3:
        return slice3d(
          array,
          [start, 0, 0],
          [size, array.shape[1], array.shape[2]]
        );
      case 4:
        return slice4d(
          array,
          [start, 0, 0, 0],
          [size, array.shape[1], array.shape[2], array.shape[3]]
        );
      case 5:
        return slice(array, [start, 0, 0, 0, 0], [
          size,
          array.shape[1],
          array.shape[2],
          array.shape[3],
          array.shape[4]
        ]);
      case 6:
        return slice(array, [start, 0, 0, 0, 0, 0], [
          size,
          array.shape[1],
          array.shape[2],
          array.shape[3],
          array.shape[4],
          array.shape[5]
        ]);
      default:
        throw new ValueError(
          `sliceAlongFirstAxis() received an unsupported tensor rank: ${array.rank}`
        );
    }
  });
}
function sliceAlongLastAxis(array, start, size) {
  return tidy(() => {
    switch (array.rank) {
      case 1:
        return slice1d(array, start, size);
      case 2:
        return slice2d(
          array,
          [0, start],
          [array.shape[0], size]
        );
      case 3:
        return slice3d(
          array,
          [0, 0, start],
          [array.shape[0], array.shape[1], size]
        );
      case 4:
        return slice4d(
          array,
          [0, 0, 0, start],
          [array.shape[0], array.shape[1], array.shape[2], size]
        );
      default:
        throw new ValueError(
          `sliceAlongLastAxis() received an unsupported tensor rank: ${array.rank}`
        );
    }
  });
}
function sliceAlongAxis(array, start, size, axis) {
  return tidy(() => {
    switch (array.rank) {
      case 1:
        return slice1d(array, start, size);
      case 2:
        switch (axis) {
          case 1:
            return sliceAlongFirstAxis(array, start, size);
          case 2:
            return sliceAlongLastAxis(array, start, size);
          default:
            throw new ValueError(
              `The axis is not within the rank of the tensor ${axis}`
            );
        }
      case 3:
        switch (axis) {
          case 1:
            return sliceAlongFirstAxis(array, start, size);
          case 2:
            return slice3d(
              array,
              [0, start, 0],
              [array.shape[0], size, array.shape[2]]
            );
          case 3:
            return sliceAlongLastAxis(array, start, size);
          default:
            throw new ValueError(
              `The axis is not within the rank of the tensor ${axis}`
            );
        }
      case 4:
        switch (axis) {
          case 1:
            return sliceAlongFirstAxis(array, start, size);
          case 2:
            return slice4d(
              array,
              [0, start, 0, 0],
              [array.shape[0], size, array.shape[2], array.shape[3]]
            );
          case 3:
            return slice4d(
              array,
              [0, 0, start, 0],
              [array.shape[0], array.shape[1], size, array.shape[3]]
            );
          case 4:
            return sliceAlongLastAxis(array, start, size);
          default:
            throw new ValueError(
              `The axis is not within the rank of the tensor ${axis}`
            );
        }
      default:
        throw new ValueError(
          `sliceAlongLastAxis() received an unsupported tensor rank: ${array.rank}`
        );
    }
  });
}
function concatenate(tensors, axis = -1) {
  let rank;
  if (axis < 0) {
    rank = tensors[0].rank;
    if (rank !== 0) {
      axis = rank;
    } else {
      axis = 0;
    }
  }
  if (axis === tensors[0].rank) {
    axis = -1;
  }
  return concat(tensors, axis);
}
function concatAlongFirstAxis(a, b) {
  switch (a.rank) {
    case 1:
      return concat1d([a, b]);
    case 2:
      return concat2d([a, b], 0);
    case 3:
      return concat3d([a, b], 0);
    case 4:
      return concat4d([a, b], 0);
    default:
      throw new ValueError(
        `concatAlongFirstAxis() received an unsupported tensor rank: ${a.rank}`
      );
  }
}
function tile2(x, n) {
  if (!Array.isArray(n)) {
    n = [n];
  }
  if (x.rank !== n.length) {
    throw new ValueError(
      `The length of input n (${n.length}) does not match the number of dimensions in input x (${x.rank})`
    );
  }
  return tile(x, n);
}
function randomNormal2(shape, mean2 = 0, stddev = 1, dtype, seed) {
  return randomNormal(shape, mean2, stddev, dtype, seed);
}
function dot2(a, b, activation2, bias) {
  if (a.rank < 2 || b.rank < 2) {
    throw new NotImplementedError(
      `dot requires both inputs to be rank >= 2 but got x shape = ${a.shape} and y shape = ${b.shape}`
    );
  }
  if (b.rank >= 3) {
    const xLastDim = a.shape.slice(-1)[0];
    const ySecondLastDim = b.shape.slice(-2)[0];
    if (xLastDim !== ySecondLastDim) {
      throw new NotImplementedError(
        `If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${a.shape} and  y shape = ${b.shape}`
      );
    }
  }
  if (a.rank === 2 && b.rank === 2) {
    const transposeA = false;
    const transposeB = false;
    return fused_ops_exports.matMul({
      a,
      b,
      transposeA,
      transposeB,
      bias: bias ? reshapeBias(a.rank, bias, imageDataFormat()) : null,
      activation: activation2
    });
  } else {
    const aFirstDims = a.shape.slice();
    const aLastDim = aFirstDims.pop();
    a = reshape(a, [-1, aLastDim]);
    const bShape = b.shape.slice();
    const bLastDim = bShape.pop();
    const ySecondLastDim = bShape.pop();
    const yOtherDims = [...bShape, bLastDim];
    const perm = Array.from({ length: b.rank }, (_, i) => {
      if (i === 0) {
        return b.rank - 2;
      } else if (i <= b.rank - 2) {
        return i - 1;
      }
      return i;
    });
    b = reshape(transpose(b, perm), [ySecondLastDim, -1]);
    const outputShape = [...aFirstDims, ...yOtherDims];
    const transposeA = false;
    const transposeB = false;
    return reshape(
      fused_ops_exports.matMul({
        a,
        b,
        transposeA,
        transposeB,
        bias: bias ? reshapeBias(a.rank, bias, imageDataFormat()) : null,
        activation: activation2
      }),
      outputShape
    );
  }
}
function gather2(reference, indices, axis) {
  return tidy(() => {
    if (Array.isArray(indices)) {
      indices = tensor1d(indices, "int32");
    } else {
      indices = cast(indices, "int32");
    }
    return gather(reference, indices, axis);
  });
}
function square2(x) {
  return mul(x, x);
}
function reshapeBias(xRank, bias, dataFormat) {
  const biasShape = bias.shape;
  if (bias.rank !== 1 && bias.rank !== xRank) {
    throw new ValueError(
      `Unexpected bias dimensions: ${bias.rank}; expected it to be 1 or ${xRank}`
    );
  }
  if (xRank === 5) {
    if (dataFormat === "channelsFirst") {
      if (biasShape.length === 1) {
        return reshape(bias, [1, biasShape[0], 1, 1, 1]);
      } else {
        return reshape(
          bias,
          [1, biasShape[3], biasShape[0], biasShape[1], biasShape[2]]
        );
      }
    } else if (dataFormat === "channelsLast") {
      if (biasShape.length === 1) {
        return reshape(bias, [1, 1, 1, 1, biasShape[0]]);
      } else {
        return reshape(bias, [1].concat(biasShape));
      }
    }
  } else if (xRank === 4) {
    if (dataFormat === "channelsFirst") {
      if (biasShape.length === 1) {
        return reshape(bias, [1, biasShape[0], 1, 1]);
      } else {
        return reshape(bias, [1, biasShape[2], biasShape[0], biasShape[1]]);
      }
    } else if (dataFormat === "channelsLast") {
      if (biasShape.length === 1) {
        return reshape(bias, [1, 1, 1, biasShape[0]]);
      } else {
        return reshape(bias, [1].concat(biasShape));
      }
    }
  } else if (xRank === 3) {
    if (dataFormat === "channelsFirst") {
      if (biasShape.length === 1) {
        return reshape(bias, [1, biasShape[0], 1]);
      } else {
        return reshape(bias, [1, biasShape[1], biasShape[0]]);
      }
    } else if (dataFormat === "channelsLast") {
      if (biasShape.length === 1) {
        return reshape(bias, [1, 1, biasShape[0]]);
      } else {
        return reshape(bias, [1].concat(biasShape));
      }
    }
  } else if (xRank < 3) {
    return bias;
  }
  throw new ValueError(`Unsupported input rank by biasAdd: ${bias.rank}`);
}
function biasAdd(x, bias, dataFormat) {
  return tidy(() => {
    if (dataFormat == null) {
      dataFormat = imageDataFormat();
    }
    checkDataFormat(dataFormat);
    return add2(x, reshapeBias(x.rank, bias, dataFormat));
  });
}
function elu2(x, alpha = 1) {
  if (alpha !== 1) {
    throw new NotImplementedError(
      `Support for alpha values other than 1 (${alpha}) is not implemented yet.`
    );
  }
  return elu(x);
}
function softsign(x) {
  return tidy(() => div(x, add2(abs(x), 1)));
}
function dropout2(x, level, noiseShape, seed) {
  return tidy(() => dropout(x, level, noiseShape, seed));
}
function hardSigmoid(x) {
  return tidy(() => {
    const y = add2(0.5, mul(0.2, x));
    return clipByValue(y, 0, 1);
  });
}
function inTrainPhase(x, alt, training = false) {
  return training ? x() : alt();
}

// src/tfjs-layers/src/keras_format/initializer_config.ts
var VALID_FAN_MODE_VALUES = ["fanIn", "fanOut", "fanAvg"];
var VALID_DISTRIBUTION_VALUES = ["normal", "uniform", "truncatedNormal"];

// src/tfjs-layers/src/initializers.ts
function checkFanMode(value) {
  checkStringTypeUnionValue(VALID_FAN_MODE_VALUES, "FanMode", value);
}
function checkDistribution(value) {
  checkStringTypeUnionValue(VALID_DISTRIBUTION_VALUES, "Distribution", value);
}
var Initializer = class extends serialization_exports.Serializable {
  fromConfigUsesCustomObjects() {
    return false;
  }
  getConfig() {
    return {};
  }
};
var Zeros = class extends Initializer {
  apply(shape, dtype) {
    return zeros(shape, dtype);
  }
};
__publicField(Zeros, "className", "Zeros");
serialization_exports.registerClass(Zeros);
var Ones = class extends Initializer {
  apply(shape, dtype) {
    return ones2(shape, dtype);
  }
};
__publicField(Ones, "className", "Ones");
serialization_exports.registerClass(Ones);
var Constant = class extends Initializer {
  value;
  constructor(args) {
    super();
    if (typeof args !== "object") {
      throw new ValueError(
        `Expected argument of type ConstantConfig but got ${args}`
      );
    }
    if (args.value === void 0) {
      throw new ValueError(`config must have value set but got ${args}`);
    }
    this.value = args.value;
  }
  apply(shape, dtype) {
    return tidy(() => mul(scalar(this.value), ones2(shape, dtype)));
  }
  getConfig() {
    return {
      value: this.value
    };
  }
};
__publicField(Constant, "className", "Constant");
serialization_exports.registerClass(Constant);
var RandomUniform = class extends Initializer {
  DEFAULT_MINVAL = -0.05;
  DEFAULT_MAXVAL = 0.05;
  minval;
  maxval;
  seed;
  constructor(args) {
    super();
    this.minval = args.minval || this.DEFAULT_MINVAL;
    this.maxval = args.maxval || this.DEFAULT_MAXVAL;
    this.seed = args.seed;
  }
  apply(shape, dtype) {
    return randomUniform(shape, this.minval, this.maxval, dtype);
  }
  getConfig() {
    return { minval: this.minval, maxval: this.maxval, seed: this.seed };
  }
};
__publicField(RandomUniform, "className", "RandomUniform");
serialization_exports.registerClass(RandomUniform);
var RandomNormal = class extends Initializer {
  DEFAULT_MEAN = 0;
  DEFAULT_STDDEV = 0.05;
  mean;
  stddev;
  seed;
  constructor(args) {
    super();
    this.mean = args.mean || this.DEFAULT_MEAN;
    this.stddev = args.stddev || this.DEFAULT_STDDEV;
    this.seed = args.seed;
  }
  apply(shape, dtype) {
    dtype = dtype || "float32";
    if (dtype !== "float32" && dtype !== "int32") {
      throw new NotImplementedError(
        `randomNormal does not support dType ${dtype}.`
      );
    }
    return randomNormal2(shape, this.mean, this.stddev, dtype, this.seed);
  }
  getConfig() {
    return { mean: this.mean, stddev: this.stddev, seed: this.seed };
  }
};
__publicField(RandomNormal, "className", "RandomNormal");
serialization_exports.registerClass(RandomNormal);
var TruncatedNormal = class extends Initializer {
  DEFAULT_MEAN = 0;
  DEFAULT_STDDEV = 0.05;
  mean;
  stddev;
  seed;
  constructor(args) {
    super();
    this.mean = args.mean || this.DEFAULT_MEAN;
    this.stddev = args.stddev || this.DEFAULT_STDDEV;
    this.seed = args.seed;
  }
  apply(shape, dtype) {
    dtype = dtype || "float32";
    if (dtype !== "float32" && dtype !== "int32") {
      throw new NotImplementedError(
        `truncatedNormal does not support dType ${dtype}.`
      );
    }
    return truncatedNormal(shape, this.mean, this.stddev, dtype, this.seed);
  }
  getConfig() {
    return { mean: this.mean, stddev: this.stddev, seed: this.seed };
  }
};
__publicField(TruncatedNormal, "className", "TruncatedNormal");
serialization_exports.registerClass(TruncatedNormal);
var Identity2 = class extends Initializer {
  gain;
  constructor(args) {
    super();
    this.gain = args.gain != null ? args.gain : 1;
  }
  apply(shape, dtype) {
    return tidy(() => {
      if (shape.length !== 2 || shape[0] !== shape[1]) {
        throw new ValueError(
          "Identity matrix initializer can only be used for 2D square matrices."
        );
      } else {
        return mul(this.gain, eye(shape[0]));
      }
    });
  }
  getConfig() {
    return { gain: this.gain };
  }
};
__publicField(Identity2, "className", "Identity");
serialization_exports.registerClass(Identity2);
function computeFans(shape, dataFormat = "channelsLast") {
  let fanIn;
  let fanOut;
  checkDataFormat(dataFormat);
  if (shape.length === 2) {
    fanIn = shape[0];
    fanOut = shape[1];
  } else if ([3, 4, 5].indexOf(shape.length) !== -1) {
    if (dataFormat === "channelsFirst") {
      const receptiveFieldSize = arrayProd(shape, 2);
      fanIn = shape[1] * receptiveFieldSize;
      fanOut = shape[0] * receptiveFieldSize;
    } else if (dataFormat === "channelsLast") {
      const receptiveFieldSize = arrayProd(shape, 0, shape.length - 2);
      fanIn = shape[shape.length - 2] * receptiveFieldSize;
      fanOut = shape[shape.length - 1] * receptiveFieldSize;
    }
  } else {
    const shapeProd = arrayProd(shape);
    fanIn = Math.sqrt(shapeProd);
    fanOut = Math.sqrt(shapeProd);
  }
  return [fanIn, fanOut];
}
var VarianceScaling = class extends Initializer {
  scale;
  mode;
  distribution;
  seed;
  constructor(args) {
    super();
    if (args.scale < 0) {
      throw new ValueError(
        `scale must be a positive float. Got: ${args.scale}`
      );
    }
    this.scale = args.scale == null ? 1 : args.scale;
    this.mode = args.mode == null ? "fanIn" : args.mode;
    checkFanMode(this.mode);
    this.distribution = args.distribution == null ? "normal" : args.distribution;
    checkDistribution(this.distribution);
    this.seed = args.seed;
  }
  apply(shape, dtype) {
    const fans = computeFans(shape);
    const fanIn = fans[0];
    const fanOut = fans[1];
    let scale = this.scale;
    if (this.mode === "fanIn") {
      scale /= Math.max(1, fanIn);
    } else if (this.mode === "fanOut") {
      scale /= Math.max(1, fanOut);
    } else {
      scale /= Math.max(1, (fanIn + fanOut) / 2);
    }
    if (this.distribution === "normal") {
      const stddev = Math.sqrt(scale);
      dtype = dtype || "float32";
      if (dtype !== "float32" && dtype !== "int32") {
        throw new NotImplementedError(
          `${this.getClassName()} does not support dType ${dtype}.`
        );
      }
      return truncatedNormal(shape, 0, stddev, dtype, this.seed);
    } else {
      const limit = Math.sqrt(3 * scale);
      return randomUniform(shape, -limit, limit, dtype);
    }
  }
  getConfig() {
    return {
      scale: this.scale,
      mode: this.mode,
      distribution: this.distribution,
      seed: this.seed
    };
  }
};
__publicField(VarianceScaling, "className", "VarianceScaling");
serialization_exports.registerClass(VarianceScaling);
var GlorotUniform = class extends VarianceScaling {
  constructor(args) {
    super({
      scale: 1,
      mode: "fanAvg",
      distribution: "uniform",
      seed: args == null ? null : args.seed
    });
  }
  getClassName() {
    return VarianceScaling.className;
  }
};
__publicField(GlorotUniform, "className", "GlorotUniform");
serialization_exports.registerClass(GlorotUniform);
var GlorotNormal = class extends VarianceScaling {
  constructor(args) {
    super({
      scale: 1,
      mode: "fanAvg",
      distribution: "normal",
      seed: args == null ? null : args.seed
    });
  }
  getClassName() {
    return VarianceScaling.className;
  }
};
__publicField(GlorotNormal, "className", "GlorotNormal");
serialization_exports.registerClass(GlorotNormal);
var HeNormal = class extends VarianceScaling {
  constructor(args) {
    super({
      scale: 2,
      mode: "fanIn",
      distribution: "normal",
      seed: args == null ? null : args.seed
    });
  }
  getClassName() {
    return VarianceScaling.className;
  }
};
__publicField(HeNormal, "className", "HeNormal");
serialization_exports.registerClass(HeNormal);
var HeUniform = class extends VarianceScaling {
  constructor(args) {
    super({
      scale: 2,
      mode: "fanIn",
      distribution: "uniform",
      seed: args == null ? null : args.seed
    });
  }
  getClassName() {
    return VarianceScaling.className;
  }
};
__publicField(HeUniform, "className", "HeUniform");
serialization_exports.registerClass(HeUniform);
var LeCunNormal = class extends VarianceScaling {
  constructor(args) {
    super({
      scale: 1,
      mode: "fanIn",
      distribution: "normal",
      seed: args == null ? null : args.seed
    });
  }
  getClassName() {
    return VarianceScaling.className;
  }
};
__publicField(LeCunNormal, "className", "LeCunNormal");
serialization_exports.registerClass(LeCunNormal);
var LeCunUniform = class extends VarianceScaling {
  constructor(args) {
    super({
      scale: 1,
      mode: "fanIn",
      distribution: "uniform",
      seed: args == null ? null : args.seed
    });
  }
  getClassName() {
    return VarianceScaling.className;
  }
};
__publicField(LeCunUniform, "className", "LeCunNormal");
serialization_exports.registerClass(LeCunUniform);
var Orthogonal = class extends Initializer {
  DEFAULT_GAIN = 1;
  gain;
  seed;
  constructor(args) {
    super();
    this.gain = args.gain == null ? this.DEFAULT_GAIN : args.gain;
    this.seed = args.seed;
    if (this.seed != null) {
      throw new NotImplementedError(
        "Random seed is not implemented for Orthogonal Initializer yet."
      );
    }
  }
  apply(shape, dtype) {
    return tidy(() => {
      if (shape.length < 2) {
        throw new NotImplementedError("Shape must be at least 2D.");
      }
      if (shape[0] * shape[1] > 2e3) {
        console.warn(
          `Orthogonal initializer is being called on a matrix with more than 2000 (${shape[0] * shape[1]}) elements: Slowness may result.`
        );
      }
      const normalizedShape = shape[0] > shape[1] ? [shape[1], shape[0]] : shape;
      const a = randomNormal2(normalizedShape, 0, 1, "float32");
      let q = linalg.gramSchmidt(a);
      if (shape[0] > shape[1]) {
        q = transpose(q);
      }
      return mul(this.gain, q);
    });
  }
  getConfig() {
    return {
      gain: this.gain,
      seed: this.seed
    };
  }
};
__publicField(Orthogonal, "className", "Orthogonal");
serialization_exports.registerClass(Orthogonal);
var INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
  "constant": "Constant",
  "glorotNormal": "GlorotNormal",
  "glorotUniform": "GlorotUniform",
  "heNormal": "HeNormal",
  "heUniform": "HeUniform",
  "identity": "Identity",
  "leCunNormal": "LeCunNormal",
  "leCunUniform": "LeCunUniform",
  "ones": "Ones",
  "orthogonal": "Orthogonal",
  "randomNormal": "RandomNormal",
  "randomUniform": "RandomUniform",
  "truncatedNormal": "TruncatedNormal",
  "varianceScaling": "VarianceScaling",
  "zeros": "Zeros"
};
function deserializeInitializer(config, customObjects = {}) {
  return deserializeKerasObject(
    config,
    serialization_exports.SerializationMap.getMap().classNameMap,
    customObjects,
    "initializer"
  );
}
function serializeInitializer(initializer) {
  return serializeKerasObject(initializer);
}
function getInitializer(identifier) {
  if (typeof identifier === "string") {
    const className = identifier in INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ? INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] : identifier;
    if (className === "GlorotNormal") {
      return new GlorotNormal();
    } else if (className === "GlorotUniform") {
      return new GlorotUniform();
    } else if (className === "HeNormal") {
      return new HeNormal();
    } else if (className === "HeUniform") {
      return new HeUniform();
    } else if (className === "LeCunNormal") {
      return new LeCunNormal();
    } else if (className === "LeCunUniform") {
      return new LeCunUniform();
    } else {
      const config = {};
      config["className"] = className;
      config["config"] = {};
      return deserializeInitializer(config);
    }
  } else if (identifier instanceof Initializer) {
    return identifier;
  } else {
    return deserializeInitializer(identifier);
  }
}

// src/tfjs-layers/src/utils/types_utils.ts
function isArrayOfShapes(x) {
  return Array.isArray(x) && Array.isArray(x[0]);
}
function normalizeShapeList(x) {
  if (x.length === 0) {
    return [];
  }
  if (!Array.isArray(x[0])) {
    return [x];
  }
  return x;
}
function getExactlyOneTensor(xs) {
  let x;
  if (Array.isArray(xs)) {
    if (xs.length !== 1) {
      throw new ValueError(`Expected Tensor length to be 1; got ${xs.length}`);
    }
    x = xs[0];
  } else {
    x = xs;
  }
  return x;
}
function getExactlyOneShape(shapes) {
  if (Array.isArray(shapes) && Array.isArray(shapes[0])) {
    if (shapes.length === 1) {
      shapes = shapes;
      return shapes[0];
    } else {
      throw new ValueError(`Expected exactly 1 Shape; got ${shapes.length}`);
    }
  } else {
    return shapes;
  }
}

// src/tfjs-layers/src/utils/variable_utils.ts
function countParamsInWeights(weights) {
  let count2 = 0;
  for (const weight of weights) {
    if (weight.shape.length === 0) {
      count2 += 1;
    } else {
      count2 += weight.shape.reduce((a, b) => a * b);
    }
  }
  return count2;
}

// src/tfjs-layers/src/variables.ts
var DEFAULT_VARIABLE_NAME_PREFIX = "Variable";
var LayerVariable = class {
  dtype;
  shape;
  id;
  name;
  originalName;
  trainable_;
  val;
  constraint;
  constructor(val, dtype = "float32", name = DEFAULT_VARIABLE_NAME_PREFIX, trainable = true, constraint = null) {
    this.dtype = dtype == null ? "float32" : dtype;
    this.shape = val.shape;
    this.id = getNextUniqueTensorId();
    name = name == null ? DEFAULT_VARIABLE_NAME_PREFIX : name;
    this.originalName = getScopedTensorName(name);
    this.name = getUniqueTensorName(this.originalName);
    this.trainable_ = trainable;
    this.constraint = constraint;
    this.val = variable(val, this.trainable_, this.name, this.dtype);
  }
  read() {
    this.assertNotDisposed();
    return this.val;
  }
  write(newVal) {
    this.assertNotDisposed();
    checkShapesMatch(this.val, newVal);
    if (this.val.id !== newVal.id) {
      this.val.assign(newVal);
      if (this.constraint != null) {
        this.val.assign(this.constraint.apply(this.val));
      }
    }
    return this;
  }
  dispose() {
    this.assertNotDisposed();
    this.val.dispose();
  }
  assertNotDisposed() {
    if (this.val.isDisposed) {
      throw new Error(`LayersVariable ${this.name} is already disposed.`);
    }
  }
  get trainable() {
    return this.trainable_;
  }
  set trainable(trainable) {
    this.trainable_ = trainable;
    this.val.trainable = trainable;
  }
};
function checkShapesMatch(x, y) {
  if (x.shape.toString() !== y.shape.toString()) {
    throw new Error(
      "Shape mismatch: " + JSON.stringify(x.shape) + " vs. " + JSON.stringify(y.shape)
    );
  }
}
function batchGetValue(xs) {
  return xs.map((x) => x.read());
}
function batchSetValue(variablesAndValues) {
  variablesAndValues.forEach((variableAndValue) => {
    const variable2 = variableAndValue[0];
    variable2.write(variableAndValue[1]);
  });
}

// src/tfjs-layers/src/engine/topology.ts
var InputSpec = class {
  dtype;
  shape;
  ndim;
  maxNDim;
  minNDim;
  axes;
  constructor(args) {
    this.dtype = args.dtype;
    this.shape = args.shape;
    if (args.shape != null) {
      this.ndim = args.shape.length;
    } else {
      this.ndim = args.ndim;
    }
    this.maxNDim = args.maxNDim;
    this.minNDim = args.minNDim;
    this.axes = args.axes || {};
  }
};
var SymbolicTensor = class {
  constructor(dtype, shape, sourceLayer, inputs, callArgs, name, outputTensorIndex) {
    this.dtype = dtype;
    this.shape = shape;
    this.sourceLayer = sourceLayer;
    this.inputs = inputs;
    this.callArgs = callArgs;
    this.outputTensorIndex = outputTensorIndex;
    this.id = getNextUniqueTensorId();
    if (name != null) {
      this.originalName = getScopedTensorName(name);
      this.name = getUniqueTensorName(this.originalName);
    }
    this.rank = shape.length;
  }
  id;
  name;
  originalName;
  rank;
  nodeIndex;
  tensorIndex;
};
var _nextNodeID = 0;
var Node = class {
  constructor(args, callArgs) {
    this.callArgs = callArgs;
    this.id = _nextNodeID++;
    this.outboundLayer = args.outboundLayer;
    this.inboundLayers = args.inboundLayers;
    this.nodeIndices = args.nodeIndices;
    this.tensorIndices = args.tensorIndices;
    this.inputTensors = args.inputTensors;
    this.outputTensors = args.outputTensors;
    this.inputMasks = args.inputMasks;
    this.outputMasks = args.outputMasks;
    this.inputShapes = args.inputShapes;
    this.outputShapes = args.outputShapes;
    for (const layer of args.inboundLayers) {
      if (layer != null) {
        layer.outboundNodes.push(this);
      }
    }
    args.outboundLayer.inboundNodes.push(this);
  }
  outboundLayer;
  inboundLayers;
  nodeIndices;
  tensorIndices;
  inputTensors;
  outputTensors;
  inputMasks;
  outputMasks;
  inputShapes;
  outputShapes;
  id;
  getConfig() {
    const inboundNames = [];
    for (const layer of this.inboundLayers) {
      if (layer != null) {
        inboundNames.push(layer.name);
      } else {
        inboundNames.push(null);
      }
    }
    return {
      outboundLayer: this.outboundLayer ? this.outboundLayer.name : null,
      inboundLayers: inboundNames,
      nodeIndices: this.nodeIndices,
      tensorIndices: this.tensorIndices
    };
  }
};
var _nextLayerID = 0;
var Layer = class extends serialization_exports.Serializable {
  name;
  inputSpec;
  supportsMasking;
  trainable_;
  batchInputShape;
  dtype;
  initialWeights;
  inboundNodes;
  outboundNodes;
  activityRegularizer;
  _trainableWeights;
  _nonTrainableWeights;
  _losses;
  _updates;
  _built;
  _callHook = null;
  _addedWeightNames = [];
  id;
  _stateful = false;
  _refCount;
  fastWeightInitDuringBuild;
  constructor(args = {}) {
    super();
    this.id = _nextLayerID++;
    this.activityRegularizer = null;
    this.inputSpec = null;
    this.supportsMasking = false;
    this._trainableWeights = [];
    this._nonTrainableWeights = [];
    this._losses = [];
    this._updates = [];
    this._built = false;
    this.inboundNodes = [];
    this.outboundNodes = [];
    let name = args.name;
    if (!name) {
      const prefix = this.getClassName();
      name = toSnakeCase(prefix) + "_" + getUid(prefix);
    }
    this.name = name;
    this.trainable_ = args.trainable == null ? true : args.trainable;
    if (args.inputShape != null || args.batchInputShape != null) {
      let batchInputShape;
      if (args.batchInputShape != null) {
        batchInputShape = args.batchInputShape;
      } else if (args.inputShape != null) {
        let batchSize = null;
        if (args.batchSize != null) {
          batchSize = args.batchSize;
        }
        batchInputShape = [batchSize].concat(args.inputShape);
      }
      this.batchInputShape = batchInputShape;
      let dtype = args.dtype;
      if (dtype == null) {
        dtype = args.inputDType;
      }
      if (dtype == null) {
        dtype = "float32";
      }
      this.dtype = dtype;
    }
    if (args.weights != null) {
      this.initialWeights = args.weights;
    } else {
      this.initialWeights = null;
    }
    this._refCount = null;
    this.fastWeightInitDuringBuild = false;
  }
  static nodeKey(layer, nodeIndex) {
    return layer.name + "_ib-" + nodeIndex.toString();
  }
  getNodeAtIndex(nodeIndex, attrName) {
    if (this.inboundNodes.length === 0) {
      throw new RuntimeError(
        `The layer has never been called and thus has no defined ${attrName}.`
      );
    }
    if (this.inboundNodes.length <= nodeIndex) {
      throw new ValueError(
        `Asked to get ${attrName} at node ${nodeIndex}, but the layer has only ${this.inboundNodes.length} inbound nodes.`
      );
    }
    return this.inboundNodes[nodeIndex];
  }
  getInputAt(nodeIndex) {
    return singletonOrArray(
      this.getNodeAtIndex(nodeIndex, "input").inputTensors
    );
  }
  getOutputAt(nodeIndex) {
    return singletonOrArray(
      this.getNodeAtIndex(nodeIndex, "output").outputTensors
    );
  }
  get input() {
    if (this.inboundNodes.length > 1) {
      throw new AttributeError(
        `Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`
      );
    } else if (this.inboundNodes.length === 0) {
      throw new AttributeError(
        `Layer ${this.name} is not connected, no input to return.`
      );
    }
    return singletonOrArray(
      this.getNodeAtIndex(0, "input").inputTensors
    );
  }
  get output() {
    if (this.inboundNodes.length === 0) {
      throw new AttributeError(
        `Layer ${this.name} has no inbound nodes.`
      );
    }
    if (this.inboundNodes.length > 1) {
      throw new AttributeError(
        `Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`
      );
    }
    return singletonOrArray(
      this.getNodeAtIndex(0, "output").outputTensors
    );
  }
  get losses() {
    return this._losses;
  }
  calculateLosses() {
    return this.losses.map((lossFn) => lossFn());
  }
  get updates() {
    return this._updates;
  }
  get built() {
    return this._built;
  }
  set built(built) {
    this._built = built;
  }
  get trainable() {
    return this.trainable_;
  }
  set trainable(trainable) {
    this._trainableWeights.forEach((w) => w.trainable = trainable);
    this.trainable_ = trainable;
  }
  get trainableWeights() {
    if (this.trainable_) {
      return this._trainableWeights.filter((w) => w.trainable);
    } else {
      return [];
    }
  }
  set trainableWeights(weights) {
    this._trainableWeights = weights;
  }
  get nonTrainableWeights() {
    if (this.trainable) {
      return this._trainableWeights.filter((w) => !w.trainable).concat(this._nonTrainableWeights);
    } else {
      return this._trainableWeights.concat(this._nonTrainableWeights);
    }
  }
  set nonTrainableWeights(weights) {
    this._nonTrainableWeights = weights;
  }
  get weights() {
    return this.trainableWeights.concat(this.nonTrainableWeights);
  }
  get stateful() {
    return this._stateful;
  }
  resetStates() {
    if (!this.stateful) {
      throw new Error(
        "Cannot call the resetStates() method of a non-stateful Layer object."
      );
    }
  }
  assertInputCompatibility(inputs) {
    inputs = toList(inputs);
    if (this.inputSpec == null || this.inputSpec.length === 0) {
      return;
    }
    const inputSpec = toList(this.inputSpec);
    if (inputs.length !== inputSpec.length) {
      throw new ValueError(
        `Layer ${this.name} expects ${inputSpec.length} inputs, but it received ${inputs.length} input tensors. Input received: ${inputs}`
      );
    }
    for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      const x = inputs[inputIndex];
      const spec = inputSpec[inputIndex];
      if (spec == null) {
        continue;
      }
      const ndim = x.rank;
      if (spec.ndim != null) {
        if (ndim !== spec.ndim) {
          throw new ValueError(
            `Input ${inputIndex} is incompatible with layer ${this.name}: expected ndim=${spec.ndim}, found ndim=${ndim}`
          );
        }
      }
      if (spec.maxNDim != null) {
        if (ndim > spec.maxNDim) {
          throw new ValueError(
            `Input ${inputIndex} is incompatible with layer ${this.name}: expected max_ndim=${spec.maxNDim}, found ndim=${ndim}`
          );
        }
      }
      if (spec.minNDim != null) {
        if (ndim < spec.minNDim) {
          throw new ValueError(
            `Input ${inputIndex} is incompatible with layer ${this.name}: expected min_ndim=${spec.minNDim}, found ndim=${ndim}.`
          );
        }
      }
      if (spec.dtype != null) {
        if (x.dtype !== spec.dtype) {
          throw new ValueError(
            `Input ${inputIndex} is incompatible with layer ${this.name} : expected dtype=${spec.dtype}, found dtype=${x.dtype}.`
          );
        }
      }
      if (spec.axes) {
        const xShape = x.shape;
        for (const key in spec.axes) {
          const axis = Number(key);
          const value = spec.axes[key];
          const xShapeAtAxis = axis >= 0 ? xShape[axis] : xShape[xShape.length + axis];
          if (value != null && [value, null].indexOf(xShapeAtAxis) === -1) {
            throw new ValueError(
              `Input ${inputIndex} is incompatible with layer ${this.name}: expected axis ${axis} of input shape to have value ${value} but got shape ${xShape}.`
            );
          }
        }
      }
      if (spec.shape != null) {
        for (let i = 0; i < spec.shape.length; ++i) {
          const specDim = spec.shape[i];
          const dim = x.shape[i];
          if (specDim != null && dim != null) {
            if (specDim !== dim) {
              throw new ValueError(
                `Input ${inputIndex} is incompatible with layer ${this.name}: expected shape=${spec.shape}, found shape=${x.shape}.`
              );
            }
          }
        }
      }
    }
  }
  call(inputs, kwargs) {
    return inputs;
  }
  invokeCallHook(inputs, kwargs) {
    if (this._callHook != null) {
      this._callHook(inputs, kwargs);
    }
  }
  setCallHook(callHook) {
    this._callHook = callHook;
  }
  clearCallHook() {
    this._callHook = null;
  }
  apply(inputs, kwargs) {
    kwargs = kwargs || {};
    this.assertNotDisposed();
    const inputsList = toList(inputs);
    let allAreSymbolic = true;
    for (const input2 of inputsList) {
      if (!(input2 instanceof SymbolicTensor)) {
        allAreSymbolic = false;
        break;
      }
    }
    let noneAreSymbolic = true;
    for (const input2 of inputsList) {
      if (input2 instanceof SymbolicTensor) {
        noneAreSymbolic = false;
        break;
      }
    }
    if (allAreSymbolic === noneAreSymbolic) {
      throw new ValueError(
        "Arguments to apply() must be all SymbolicTensors or all Tensors"
      );
    }
    return nameScope(this.name, () => {
      if (!this.built) {
        this.assertInputCompatibility(inputs);
        const inputShapes = [];
        for (const xElem of toList(inputs)) {
          inputShapes.push(xElem.shape);
        }
        this.build(singletonOrArray(inputShapes));
        this.built = true;
        if (this.initialWeights) {
          this.setWeights(this.initialWeights);
        }
        if (this._refCount === null && noneAreSymbolic) {
          this._refCount = 1;
        }
      }
      this.assertInputCompatibility(inputs);
      if (noneAreSymbolic) {
        let output = this.call(inputs, kwargs);
        const outputList = toList(output);
        const outputListCopy = [];
        for (let x of outputList) {
          if (inputsList.indexOf(x) !== -1) {
            x = x.clone();
          }
          outputListCopy.push(x);
        }
        output = singletonOrArray(outputListCopy);
        if (this.activityRegularizer != null) {
          throw new NotImplementedError(
            "Layer invocation in the presence of activity regularizer(s) is not supported yet."
          );
        }
        return output;
      } else {
        const inputShape = collectInputShape(inputs);
        const outputShape = this.computeOutputShape(inputShape);
        let output;
        const outputDType = guessOutputDType(inputs);
        this.warnOnIncompatibleInputShape(
          Array.isArray(inputs) ? inputShape[0] : inputShape
        );
        if (outputShape != null && outputShape.length > 0 && Array.isArray(outputShape[0])) {
          output = outputShape.map(
            (shape, index) => new SymbolicTensor(
              outputDType,
              shape,
              this,
              toList(inputs),
              kwargs,
              this.name,
              index
            )
          );
        } else {
          output = new SymbolicTensor(
            outputDType,
            outputShape,
            this,
            toList(inputs),
            kwargs,
            this.name
          );
        }
        this.addInboundNode(
          inputs,
          output,
          null,
          null,
          inputShape,
          outputShape,
          kwargs
        );
        this._refCount++;
        if (this.activityRegularizer != null) {
          throw new NotImplementedError(
            "Layer invocation in the presence of activity regularizer(s) is not supported yet."
          );
        }
        return output;
      }
    });
  }
  warnOnIncompatibleInputShape(inputShape) {
    if (this.batchInputShape == null) {
      return;
    } else if (inputShape.length !== this.batchInputShape.length) {
      console.warn(
        `The rank of the input tensor provided (shape: ${JSON.stringify(inputShape)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`
      );
    } else {
      let dimMismatch = false;
      this.batchInputShape.forEach((dimension, i) => {
        if (dimension != null && inputShape[i] != null && inputShape[i] !== dimension) {
          dimMismatch = true;
        }
      });
      if (dimMismatch) {
        console.warn(
          `The shape of the input tensor (${JSON.stringify(inputShape)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`
        );
      }
    }
  }
  get outputShape() {
    if (this.inboundNodes == null || this.inboundNodes.length === 0) {
      throw new AttributeError(
        `The layer ${this.name} has never been called and thus has no defined output shape.`
      );
    }
    const allOutputShapes = [];
    for (const node of this.inboundNodes) {
      const shapeString = JSON.stringify(node.outputShapes);
      if (allOutputShapes.indexOf(shapeString) === -1) {
        allOutputShapes.push(shapeString);
      }
    }
    if (allOutputShapes.length === 1) {
      const outputShapes = this.inboundNodes[0].outputShapes;
      if (Array.isArray(outputShapes) && Array.isArray(outputShapes[0]) && outputShapes.length === 1) {
        return outputShapes[0];
      } else {
        return outputShapes;
      }
    } else {
      throw new AttributeError(
        `The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`
      );
    }
  }
  countParams() {
    if (!this.built) {
      throw new RuntimeError(
        `You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`
      );
    }
    return countParamsInWeights(this.weights);
  }
  build(inputShape) {
    this.built = true;
  }
  getWeights(trainableOnly = false) {
    return batchGetValue(trainableOnly ? this.trainableWeights : this.weights);
  }
  setWeights(weights) {
    tidy(() => {
      const params = this.weights;
      if (params.length !== weights.length) {
        throw new ValueError(
          `You called setWeights(weights) on layer "${this.name}" with a weight list of length ${weights.length}, but the layer was expecting ${params.length} weights. Provided weights: ${weights}...`
        );
      }
      if (params.length === 0) {
        return;
      }
      const weightValueTuples = [];
      const paramValues = batchGetValue(params);
      for (let i = 0; i < paramValues.length; ++i) {
        const pv = paramValues[i];
        const p = params[i];
        const w = weights[i];
        if (!util_exports.arraysEqual(pv.shape, w.shape)) {
          throw new ValueError(
            `Layer weight shape ${pv.shape} not compatible with provided weight shape ${w.shape}`
          );
        }
        weightValueTuples.push([p, w]);
      }
      batchSetValue(weightValueTuples);
    });
  }
  addWeight(name, shape, dtype, initializer, regularizer, trainable, constraint, getInitializerFunc) {
    if (this._addedWeightNames.indexOf(name) !== -1) {
      throw new ValueError(
        `Duplicate weight name ${name} for layer ${this.name}`
      );
    }
    this._addedWeightNames.push(name);
    if (dtype == null) {
      dtype = "float32";
    }
    if (this.fastWeightInitDuringBuild) {
      initializer = getInitializerFunc != null ? getInitializerFunc() : getInitializer("zeros");
    }
    const initValue = initializer.apply(shape, dtype);
    const weight = new LayerVariable(initValue, dtype, name, trainable, constraint);
    initValue.dispose();
    if (regularizer != null) {
      this.addLoss(() => regularizer.apply(weight.read()));
    }
    if (trainable == null) {
      trainable = true;
    }
    if (trainable) {
      this._trainableWeights.push(weight);
    } else {
      this._nonTrainableWeights.push(weight);
    }
    return weight;
  }
  setFastWeightInitDuringBuild(value) {
    this.fastWeightInitDuringBuild = value;
  }
  addLoss(losses) {
    if (losses == null || Array.isArray(losses) && losses.length === 0) {
      return;
    }
    losses = toList(losses);
    if (this._losses !== void 0 && this._losses !== null) {
      this.losses.push(...losses);
    }
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  computeMask(inputs, mask) {
    if (!this.supportsMasking) {
      if (mask != null) {
        if (Array.isArray(mask)) {
          mask.forEach((maskElement) => {
            if (maskElement != null) {
              throw new TypeError(
                `Layer ${this.name} does not support masking, but was passed an inputMask.`
              );
            }
          });
        } else {
          throw new TypeError(
            `Layer ${this.name} does not support masking, but was passed an inputMask.`
          );
        }
      }
      return null;
    }
    return mask;
  }
  addInboundNode(inputTensors, outputTensors, inputMasks, outputMasks, inputShapes, outputShapes, kwargs = null) {
    const inputTensorList = toList(inputTensors);
    outputTensors = toList(outputTensors);
    inputMasks = toList(inputMasks);
    outputMasks = toList(outputMasks);
    inputShapes = normalizeShapeList(inputShapes);
    outputShapes = normalizeShapeList(outputShapes);
    const inboundLayers = [];
    const nodeIndices = [];
    const tensorIndices = [];
    for (const x of inputTensorList) {
      inboundLayers.push(x.sourceLayer);
      nodeIndices.push(x.nodeIndex);
      tensorIndices.push(x.tensorIndex);
    }
    new Node(
      {
        outboundLayer: this,
        inboundLayers,
        nodeIndices,
        tensorIndices,
        inputTensors: inputTensorList,
        outputTensors,
        inputMasks,
        outputMasks,
        inputShapes,
        outputShapes
      },
      kwargs
    );
    for (let i = 0; i < outputTensors.length; i++) {
      outputTensors[i].sourceLayer = this;
      outputTensors[i].nodeIndex = this.inboundNodes.length - 1;
      outputTensors[i].tensorIndex = i;
    }
  }
  getConfig() {
    const config = { name: this.name, trainable: this.trainable };
    if (this.batchInputShape != null) {
      config["batchInputShape"] = this.batchInputShape;
    }
    if (this.dtype != null) {
      config["dtype"] = this.dtype;
    }
    return config;
  }
  disposeWeights() {
    this.weights.forEach((weight) => weight.dispose());
    return this.weights.length;
  }
  assertNotDisposed() {
    if (this._refCount === 0) {
      throw new Error(`Layer '${this.name}' is already disposed.`);
    }
  }
  dispose() {
    if (!this.built) {
      throw new Error(
        `Cannot dispose Layer ${this.name} because it has not been built yet.`
      );
    }
    if (this._refCount === null) {
      throw new Error(
        `Cannot dispose Layer ${this.name} because it has not been used yet.`
      );
    }
    this.assertNotDisposed();
    let numDisposedVariables = 0;
    if (--this._refCount === 0) {
      numDisposedVariables = this.disposeWeights();
    }
    return { refCountAfterDispose: this._refCount, numDisposedVariables };
  }
};
function collectInputShape(inputTensors) {
  inputTensors = toList(inputTensors);
  const shapes = [];
  for (const x of inputTensors) {
    shapes.push(x.shape);
  }
  return singletonOrArray(shapes);
}
function guessOutputDType(inputTensors) {
  return "float32";
}
function getSourceInputs(tensor2, layer, nodeIndex) {
  if (layer == null || nodeIndex != null && nodeIndex > 0) {
    layer = tensor2.sourceLayer;
    nodeIndex = tensor2.nodeIndex;
  }
  if (layer.inboundNodes.length === 0) {
    return [tensor2];
  } else {
    const node = layer.inboundNodes[nodeIndex];
    if (node.inboundLayers.length === 0) {
      return node.inputTensors;
    } else {
      const sourceTensors = [];
      for (let i = 0; i < node.inboundLayers.length; i++) {
        const x = node.inputTensors[i];
        const layer2 = node.inboundLayers[i];
        const nodeIndex2 = node.nodeIndices[i];
        const previousSources = getSourceInputs(x, layer2, nodeIndex2);
        for (const x2 of previousSources) {
          if (sourceTensors.indexOf(x2) === -1) {
            sourceTensors.push(x2);
          }
        }
      }
      return sourceTensors;
    }
  }
}

// src/tfjs-layers/src/engine/input_layer.ts
var InputLayer = class extends Layer {
  sparse;
  constructor(args) {
    super({
      dtype: args.dtype,
      name: args.name != null ? args.name : getUid("input").toString()
    });
    if (args.batchSize == null) {
      args.batchSize = null;
    }
    if (args.sparse == null) {
      args.sparse = false;
    }
    this.trainable = false;
    this.built = true;
    this.sparse = args.sparse;
    if (args.inputShape != null && args.batchInputShape != null) {
      throw new ValueError(
        "Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time."
      );
    }
    let batchInputShape = args.batchInputShape;
    if (batchInputShape == null) {
      if (args.inputShape == null) {
        throw new ValueError(
          "An InputLayer should be passed either a `batchInputShape` or an `inputShape`."
        );
      } else {
        batchInputShape = [args.batchSize].concat(args.inputShape);
      }
    } else {
      if (args.batchSize != null) {
        throw new ValueError(
          "Cannot specify batchSize if batchInputShape is specified when creating an InputLayer."
        );
      }
    }
    const dtype = args.dtype || "float32";
    this.batchInputShape = batchInputShape;
    this.dtype = dtype;
    this.inputSpec = [{ shape: batchInputShape }];
    const inputTensor = new SymbolicTensor(
      this.dtype,
      this.batchInputShape,
      this,
      [],
      {},
      this.name
    );
    inputTensor.nodeIndex = 0;
    inputTensor.tensorIndex = 0;
    new Node({
      outboundLayer: this,
      inboundLayers: [],
      nodeIndices: [],
      tensorIndices: [],
      inputTensors: [inputTensor],
      outputTensors: [inputTensor],
      inputMasks: [null],
      outputMasks: [null],
      inputShapes: [batchInputShape],
      outputShapes: [batchInputShape]
    });
  }
  apply(inputs, kwargs) {
    throw new ValueError(
      `Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`
    );
  }
  dispose() {
    return { refCountAfterDispose: this._refCount, numDisposedVariables: 0 };
  }
  getConfig() {
    return {
      batchInputShape: this.batchInputShape,
      dtype: this.dtype,
      sparse: this.sparse,
      name: this.name
    };
  }
};
__publicField(InputLayer, "className", "InputLayer");
serialization_exports.registerClass(InputLayer);
function Input(config) {
  if (config.batchShape == null && config.shape == null) {
    throw new Error(
      "Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension."
    );
  }
  if (config.batchShape != null && config.shape != null) {
    throw new ValueError(
      "Please provide either a `shape` or `batchShape` argument to Input, but not both."
    );
  }
  let batchShape = config.batchShape;
  if (config.shape != null && batchShape == null) {
    batchShape = [null].concat(config.shape);
  }
  let dtype = config.dtype;
  if (dtype == null) {
    dtype = "float32";
  }
  const inputLayer2 = new InputLayer({
    batchInputShape: batchShape,
    name: config.name,
    dtype,
    sparse: config.sparse
  });
  const outputs = inputLayer2.inboundNodes[0].outputTensors;
  return outputs[0];
}

// src/tfjs-layers/src/engine/executor.ts
function assertFeedCompatibility(key, val) {
  if (key.dtype == null || key.dtype === val.dtype) {
    return val;
  }
  try {
    return cast(val, key.dtype);
  } catch (err) {
    throw new ValueError(
      `The dtype of the feed (${val.dtype}) can not be cast to the dtype of the key '${key.name}' (${key.dtype}).`
    );
  }
}
var FeedDict = class {
  id2Value = {};
  id2Mask = {};
  name2Id = {};
  constructor(feeds) {
    if (feeds instanceof FeedDict) {
      for (const id in feeds.id2Value) {
        this.id2Value[id] = feeds.id2Value[id];
        if (id in feeds.id2Mask) {
          this.id2Mask[id] = feeds.id2Mask[id];
        }
      }
    } else {
      if (feeds == null) {
        return;
      }
      for (const feed of feeds) {
        this.add(feed.key, feed.value);
      }
    }
  }
  add(key, value, mask) {
    if (this.id2Value[key.id] == null) {
      this.id2Value[key.id] = assertFeedCompatibility(key, value);
      this.name2Id[key.name] = key.id;
      if (mask != null) {
        this.id2Mask[key.id] = mask;
      }
    } else {
      throw new ValueError(`Duplicate key: name=${key.name}, id=${key.id}`);
    }
    return this;
  }
  addFeed(feed) {
    this.add(feed.key, feed.value);
  }
  hasKey(key) {
    return this.id2Value[key.id] != null;
  }
  names() {
    return Object.keys(this.name2Id);
  }
  getValue(key) {
    if (key instanceof SymbolicTensor) {
      if (this.id2Value[key.id] == null) {
        throw new ValueError(`Nonexistent key: ${key.name}`);
      } else {
        return this.id2Value[key.id];
      }
    } else {
      const id = this.name2Id[key];
      if (id == null) {
        throw new ValueError(`Feed dict has no SymbolicTensor name: ${key}`);
      }
      return this.id2Value[id];
    }
  }
  getMask(key) {
    if (key instanceof SymbolicTensor) {
      if (this.id2Value[key.id] == null) {
        throw new ValueError(`Nonexistent key: ${key.name}`);
      } else {
        return this.id2Mask[key.id];
      }
    } else {
      const id = this.name2Id[key];
      if (id == null) {
        throw new ValueError(`Feed dict has no SymbolicTensor name: ${key}`);
      }
      return this.id2Mask[id];
    }
  }
  disposeMasks() {
    if (this.id2Mask != null) {
      dispose(this.id2Mask);
    }
  }
};
var cachedSorted = new LruCache();
var cachedRecipientCounts = new LruCache();
function updateCacheMaxEntries(maxEntries) {
  if (cachedSorted != null) {
    cachedSorted.setMaxEntries(maxEntries);
  }
  if (cachedRecipientCounts != null) {
    cachedRecipientCounts.setMaxEntries(maxEntries);
  }
}
function execute(fetches, feedDict, kwargs, probe) {
  const training = kwargs == null ? false : kwargs["training"];
  const arrayFetches = Array.isArray(fetches);
  const fetchArray = arrayFetches ? fetches : [fetches];
  const outputNames = fetchArray.map((t) => t.name);
  const finalOutputs = [];
  const feedNames = feedDict.names();
  for (const outputName of outputNames) {
    if (feedNames.indexOf(outputName) !== -1) {
      finalOutputs.push(feedDict.getValue(outputName));
    } else {
      finalOutputs.push(null);
    }
  }
  if (probe != null) {
    probe.maxNumTensors = -Infinity;
    probe.minNumTensors = Infinity;
  }
  const fetchAndFeedKey = outputNames.join(",") + "|" + feedDict.names().sort().join(",");
  let sorted = cachedSorted.get(fetchAndFeedKey);
  let recipientCounts;
  if (sorted == null) {
    const out = getTopologicalSortAndRecipientCounts(fetchArray, feedDict);
    sorted = out.sorted;
    recipientCounts = out.recipientCounts;
    cachedSorted.put(fetchAndFeedKey, sorted);
    cachedRecipientCounts.put(fetchAndFeedKey, recipientCounts);
  }
  recipientCounts = {};
  if (!training) {
    Object.assign(recipientCounts, cachedRecipientCounts.get(fetchAndFeedKey));
  }
  const internalFeedDict = new FeedDict(feedDict);
  for (let i = 0; i < sorted.length; ++i) {
    if (probe != null) {
      const numTensors = memory().numTensors;
      if (numTensors > probe.maxNumTensors) {
        probe.maxNumTensors = numTensors;
      }
      if (numTensors < probe.minNumTensors) {
        probe.minNumTensors = numTensors;
      }
    }
    const symbolic = sorted[i];
    const srcLayer = symbolic.sourceLayer;
    if (srcLayer instanceof InputLayer) {
      continue;
    }
    const inputValues = [];
    const inputMasks = [];
    const tensorsToDispose = [];
    let maskExists = false;
    for (const input2 of symbolic.inputs) {
      const value = internalFeedDict.getValue(input2);
      const mask = internalFeedDict.getMask(input2);
      inputValues.push(value);
      inputMasks.push(mask);
      if (mask != null) {
        maskExists = true;
      }
      if (!training) {
        recipientCounts[input2.name]--;
        if (recipientCounts[input2.name] === 0 && !feedDict.hasKey(input2) && outputNames.indexOf(input2.name) === -1 && !value.isDisposed && input2.sourceLayer.stateful !== true) {
          tensorsToDispose.push(value);
        }
      }
    }
    if (maskExists) {
      kwargs = kwargs || {};
      kwargs["mask"] = inputMasks[0];
    }
    const outputTensors = toList(srcLayer.apply(inputValues, kwargs));
    let outputMask = null;
    if (srcLayer.supportsMasking) {
      outputMask = srcLayer.computeMask(inputValues, inputMasks);
    }
    const layerOutputs = getNodeOutputs(symbolic);
    const outputSymbolicTensors = Array.isArray(layerOutputs) ? layerOutputs : [layerOutputs];
    for (let i2 = 0; i2 < outputSymbolicTensors.length; ++i2) {
      if (!internalFeedDict.hasKey(outputSymbolicTensors[i2])) {
        internalFeedDict.add(
          outputSymbolicTensors[i2],
          outputTensors[i2],
          Array.isArray(outputMask) ? outputMask[0] : outputMask
        );
      }
      const index = outputNames.indexOf(outputSymbolicTensors[i2].name);
      if (index !== -1) {
        finalOutputs[index] = outputTensors[i2];
      }
    }
    if (!training) {
      dispose(tensorsToDispose);
    }
  }
  internalFeedDict.disposeMasks();
  return arrayFetches ? finalOutputs : finalOutputs[0];
}
function getTopologicalSortAndRecipientCounts(fetches, feedDict) {
  util_exports.assert(
    fetches != null && fetches.length > 0,
    () => `Expected at least one fetch, got none`
  );
  let finalSorted = [];
  let finalRecipientMap = {};
  if (fetches.length === 1) {
    const out = getTopologicalSortAndRecipientCountsForOneFetch(fetches[0], feedDict);
    finalSorted = out.sorted;
    finalRecipientMap = out.recipientMap;
  } else {
    const visited = /* @__PURE__ */ new Set();
    for (const fetch4 of fetches) {
      const { sorted, recipientMap } = getTopologicalSortAndRecipientCountsForOneFetch(fetch4, feedDict);
      for (const symbolicTensor of sorted) {
        if (!visited.has(symbolicTensor.name)) {
          finalSorted.push(symbolicTensor);
          visited.add(symbolicTensor.name);
        }
      }
      for (const name in recipientMap) {
        if (finalRecipientMap[name] == null) {
          finalRecipientMap[name] = /* @__PURE__ */ new Set();
        }
        recipientMap[name].forEach(
          (recipient) => finalRecipientMap[name].add(recipient)
        );
      }
    }
  }
  return {
    sorted: finalSorted,
    recipientCounts: recipientMap2Counts(finalRecipientMap)
  };
}
function recipientMap2Counts(recipientMap) {
  const recipientCounts = {};
  for (const name in recipientMap) {
    recipientCounts[name] = recipientMap[name].size;
  }
  return recipientCounts;
}
function getTopologicalSortAndRecipientCountsForOneFetch(fetch4, feedDict) {
  const visited = /* @__PURE__ */ new Set();
  const sorted = [];
  const recipientMap = {};
  for (const key of feedDict.names()) {
    visited.add(key);
  }
  const stack2 = [];
  const marks = [];
  stack2.push(fetch4);
  while (stack2.length > 0) {
    const top = stack2[stack2.length - 1];
    if (visited.has(top.name)) {
      stack2.pop();
      continue;
    }
    const topIsMarked = marks[marks.length - 1] === stack2.length - 1;
    if (top.inputs.length === 0 || topIsMarked) {
      stack2.pop();
      sorted.push(top);
      visited.add(top.name);
      if (topIsMarked) {
        marks.pop();
      }
    } else {
      marks.push(stack2.length - 1);
      for (const input2 of top.inputs) {
        if (recipientMap[input2.name] == null) {
          recipientMap[input2.name] = /* @__PURE__ */ new Set();
        }
        recipientMap[input2.name].add(top.name);
        if (visited.has(input2.name)) {
          continue;
        }
        stack2.push(input2);
      }
    }
  }
  return { sorted, recipientMap };
}
function getNodeOutputs(fetch4) {
  let layerOutputs;
  if (fetch4.sourceLayer.inboundNodes.length === 1) {
    layerOutputs = fetch4.sourceLayer.output;
  } else {
    let nodeIndex = null;
    for (let i = 0; i < fetch4.sourceLayer.inboundNodes.length; ++i) {
      for (const outputTensor of fetch4.sourceLayer.inboundNodes[i].outputTensors) {
        if (outputTensor.id === fetch4.id) {
          nodeIndex = i;
          break;
        }
      }
    }
    layerOutputs = fetch4.sourceLayer.getOutputAt(nodeIndex);
  }
  return layerOutputs;
}

// src/tfjs-layers/src/flags_layers.ts
var ENV3 = env();
ENV3.registerFlag(
  "TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",
  () => 100,
  updateCacheMaxEntries
);

// src/tfjs-core/src/gradients/Abs_grad.ts
var absGradConfig = {
  kernelName: Abs,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(dy, step(cast(x, "float32"), -1)) };
  }
};

// src/tfjs-core/src/gradients/Acos_grad.ts
var acosGradConfig = {
  kernelName: Acos,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return {
      x: () => {
        const a = square(cast(x, "float32"));
        const b = sqrt(sub(scalar(1), a));
        return neg(div(dy, b));
      }
    };
  }
};

// src/tfjs-core/src/gradients/Acosh_grad.ts
var acoshGradConfig = {
  kernelName: Acosh,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return {
      x: () => {
        const a = sqrt(sub(square(cast(x, "float32")), 1));
        return div(dy, a);
      }
    };
  }
};

// src/tfjs-core/src/gradients/Add_grad.ts
var addGradConfig = {
  kernelName: Add,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const outShape = assertAndGetBroadcastShape(a.shape, b.shape);
    const derA = () => {
      let res = dy;
      const reduceAxes = getReductionAxes(a.shape, outShape);
      if (reduceAxes.length > 0) {
        res = sum2(res, reduceAxes);
      }
      return reshape(res, a.shape);
    };
    const derB = () => {
      let res = dy;
      const reduceAxes = getReductionAxes(b.shape, outShape);
      if (reduceAxes.length > 0) {
        res = sum2(res, reduceAxes);
      }
      return reshape(res, b.shape);
    };
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/AddN_grad.ts
var addNGradConfig = {
  kernelName: AddN,
  saveAllInputs: true,
  gradFunc: (dy, saved) => {
    const ders = {};
    saved.forEach((_, i) => {
      ders[i] = () => dy.clone();
    });
    return ders;
  }
};

// src/tfjs-core/src/gradients/ArgMax_grad.ts
var argMaxGradConfig = {
  kernelName: ArgMax,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => zerosLike(x) };
  }
};

// src/tfjs-core/src/gradients/ArgMin_grad.ts
var argMinGradConfig = {
  kernelName: ArgMin,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => zerosLike(x) };
  }
};

// src/tfjs-core/src/gradients/Asin_grad.ts
var asinGradConfig = {
  kernelName: Asin,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => div(dy, sqrt(sub(scalar(1), square(cast(x, "float32"))))) };
  }
};

// src/tfjs-core/src/gradients/Asinh_grad.ts
var asinhGradConfig = {
  kernelName: Asinh,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return {
      x: () => {
        const a = sqrt(add2(scalar(1), square(cast(x, "float32"))));
        return div(dy, a);
      }
    };
  }
};

// src/tfjs-core/src/gradients/Atan2_grad.ts
var atan2GradConfig = {
  kernelName: Atan2,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const outShape = assertAndGetBroadcastShape(a.shape, b.shape);
    const derA = () => {
      const d = add2(square(a), square(b));
      let res = mul(dy, div(b, d));
      const reduceAxes = getReductionAxes(a.shape, outShape);
      if (reduceAxes.length > 0) {
        res = sum2(res, reduceAxes);
      }
      return reshape(res, a.shape);
    };
    const derB = () => {
      const d = add2(square(a), square(b));
      let res = neg(mul(dy, div(a, d)));
      const reduceAxes = getReductionAxes(b.shape, outShape);
      if (reduceAxes.length > 0) {
        res = sum2(res, reduceAxes);
      }
      return reshape(res, b.shape);
    };
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/Atan_grad.ts
var atanGradConfig = {
  kernelName: Atan,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => div(dy, add2(square(cast(x, "float32")), 1)) };
  }
};

// src/tfjs-core/src/gradients/Atanh_grad.ts
var atanhGradConfig = {
  kernelName: Atanh,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => div(dy, sub(scalar(1), square(cast(x, "float32")))) };
  }
};

// src/tfjs-core/src/ops/avg_pool_3d_grad.ts
function avgPool3dGrad_(dy, input2, filterSize, strides, pad2, dimRoundingMode) {
  const $dy = convertToTensor(dy, "dy", "avgPool3dGrad");
  const $input = convertToTensor(input2, "input", "avgPool3dGrad");
  let dy5D = $dy;
  let input5D = $input;
  let reshapedTo5D = false;
  if ($input.rank === 4) {
    reshapedTo5D = true;
    dy5D = reshape(
      $dy,
      [1, $dy.shape[0], $dy.shape[1], $dy.shape[2], $dy.shape[3]]
    );
    input5D = reshape($input, [
      1,
      $input.shape[0],
      $input.shape[1],
      $input.shape[2],
      $input.shape[3]
    ]);
  }
  assert(
    dy5D.rank === 5,
    () => `Error in avgPool3dGrad: dy must be rank 5 but got rank ${dy5D.rank}.`
  );
  assert(
    input5D.rank === 5,
    () => `Error in avgPool3dGrad: input must be rank 5 but got rank ${input5D.rank}.`
  );
  checkPadOnDimRoundingMode("avgPool3dGrad", pad2, dimRoundingMode);
  const inputs = { dy: dy5D, input: input5D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
  const res = ENGINE.runKernel(
    AvgPool3DGrad,
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
var avgPool3dGrad = op({ avgPool3dGrad_ });

// src/tfjs-core/src/gradients/AvgPool3D_grad.ts
var avgPool3DGradConfig = {
  kernelName: AvgPool3D,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
    return {
      x: () => avgPool3dGrad(
        dy,
        x,
        filterSize,
        strides,
        pad2,
        dimRoundingMode
      )
    };
  }
};

// src/tfjs-core/src/ops/avg_pool_grad.ts
function avgPoolGrad_(dy, input2, filterSize, strides, pad2) {
  const $dy = convertToTensor(dy, "dy", "avgPoolGrad");
  const $input = convertToTensor(input2, "input", "avgPoolGrad");
  assert(
    $input.rank === $dy.rank,
    () => `Rank of input (${$input.rank}) does not match rank of dy (${$dy.rank})`
  );
  let input4D = $input;
  let dy4D = $dy;
  let reshapedTo4D = false;
  if ($input.rank === 3) {
    reshapedTo4D = true;
    input4D = reshape($input, [1, $input.shape[0], $input.shape[1], $input.shape[2]]);
    dy4D = reshape($dy, [1, $dy.shape[0], $dy.shape[1], $dy.shape[2]]);
  }
  assert(
    dy4D.rank === 4,
    () => `Error in avgPoolGrad: dy must be rank 4 but got rank ${dy4D.rank}.`
  );
  assert(
    input4D.rank === 4,
    () => `Error in avgPoolGrad: input must be rank 4 but got rank ${input4D.rank}.`
  );
  const inputs = { dy: dy4D, input: input4D };
  const attrs = { filterSize, strides, pad: pad2 };
  const res = ENGINE.runKernel(
    AvgPoolGrad,
    inputs,
    attrs
  );
  if (reshapedTo4D) {
    return reshape(res, [res.shape[1], res.shape[2], res.shape[3]]);
  }
  return res;
}
var avgPoolGrad = op({ avgPoolGrad_ });

// src/tfjs-core/src/gradients/AvgPool_grad.ts
var avgPoolGradConfig = {
  kernelName: AvgPool,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { filterSize, strides, pad: pad2 } = attrs;
    return { x: () => avgPoolGrad(dy, x, filterSize, strides, pad2) };
  }
};

// src/tfjs-core/src/gradients/BatchMatMul_grad.ts
var batchMatMulGradConfig = {
  kernelName: BatchMatMul,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved, attrs) => {
    const [a, b] = saved;
    const { transposeA, transposeB } = attrs;
    if (!transposeA && !transposeB) {
      return {
        a: () => matMul(dy, b, false, true),
        b: () => matMul(a, dy, true, false)
      };
    } else if (!transposeA && transposeB) {
      return {
        a: () => matMul(dy, b, false, false),
        b: () => matMul(dy, a, true, false)
      };
    } else if (transposeA && !transposeB) {
      return {
        a: () => matMul(b, dy, false, true),
        b: () => matMul(a, dy, false, false)
      };
    } else {
      return {
        a: () => matMul(b, dy, true, true),
        b: () => matMul(dy, a, true, true)
      };
    }
  }
};

// src/tfjs-core/src/gradients/BatchToSpaceND_grad.ts
var batchToSpaceNDGradConfig = {
  kernelName: BatchToSpaceND,
  gradFunc: (dy, saved, attrs) => {
    const { blockShape, crops } = attrs;
    return { x: () => spaceToBatchND(dy, blockShape, crops) };
  }
};

// src/tfjs-core/src/gradients/BroadcastTo_grad.ts
var broadcastToGradConfig = {
  kernelName: BroadcastTo,
  gradFunc: (dy, saved, attrs) => {
    const broadCastToAttrs = attrs;
    const inputShape = broadCastToAttrs.inputShape;
    const outputShape = broadCastToAttrs.shape;
    const reps = Array.from(outputShape);
    for (let i = inputShape.length - 1; i >= 0; i--) {
      if (inputShape[i] === outputShape[i]) {
        reps[i] = 1;
      } else if (inputShape[i] !== 1) {
        throw new Error(`broadcastTo(): [${inputShape}] cannot be broadcast to [${outputShape}].`);
      }
    }
    const axes = [];
    for (let i = 0; i < reps.length; i++) {
      if (reps[i] > 1) {
        axes.push(i);
      }
    }
    return { x: () => sum2(dy, axes, true) };
  }
};

// src/tfjs-core/src/gradients/Cast_grad.ts
var castGradConfig = {
  kernelName: Cast,
  gradFunc: (dy) => {
    return { x: () => dy.clone() };
  }
};

// src/tfjs-core/src/gradients/Ceil_grad.ts
var ceilGradConfig = {
  kernelName: Ceil,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/ClipByValue_grad.ts
var clipByValueGradConfig = {
  kernelName: ClipByValue,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { clipValueMin, clipValueMax } = attrs;
    return {
      x: () => where(
        logicalAnd(greaterEqual(x, clipValueMin), lessEqual(x, clipValueMax)),
        dy,
        zerosLike(dy)
      )
    };
  }
};

// src/tfjs-core/src/gradients/ComplexAbs_grad.ts
var complexAbsGradConfig = {
  kernelName: ComplexAbs,
  inputsToSave: ["x"],
  gradFunc: absGradConfig.gradFunc
};

// src/tfjs-core/src/gradients/Concat_grad.ts
var concatGradConfig = {
  kernelName: Concat,
  saveAllInputs: true,
  gradFunc: (dy, saved, attrs) => {
    const shapes = saved.map((t) => t.shape);
    const { axis } = attrs;
    const $axis = parseAxisParam(axis, saved[0].shape)[0];
    const sizeSplits = shapes.map((s) => s[$axis]);
    const derTensors = split(dy, sizeSplits, $axis);
    return derTensors.map((t) => () => t);
  }
};

// src/tfjs-core/src/gradients/Conv2D_grad.ts
var conv2DGradConfig = {
  kernelName: Conv2D,
  inputsToSave: ["x", "filter"],
  gradFunc: (dy, saved, attrs) => {
    const [x4D, $filter] = saved;
    const { dilations, strides, pad: pad2, dataFormat } = attrs;
    assert(
      tupleValuesAreOne(dilations),
      () => `Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${dilations}'`
    );
    return {
      x: () => conv2DBackpropInput(x4D.shape, dy, $filter, strides, pad2, dataFormat),
      filter: () => conv2DBackpropFilter(x4D, dy, $filter.shape, strides, pad2, dataFormat)
    };
  }
};

// src/tfjs-core/src/gradients/Conv2DBackpropInput_grad.ts
var conv2DBackpropInputGradConfig = {
  kernelName: Conv2DBackpropInput,
  inputsToSave: ["dy", "filter"],
  gradFunc: (ddx, saved, attrs) => {
    const [dy, filter] = saved;
    const { strides, pad: pad2, dataFormat, dimRoundingMode } = attrs;
    return {
      dy: () => conv2d(
        ddx,
        filter,
        strides,
        pad2,
        dataFormat,
        1,
        dimRoundingMode
      ),
      filter: () => conv2DBackpropFilter(
        ddx,
        dy,
        filter.shape,
        strides,
        pad2,
        dataFormat,
        dimRoundingMode
      )
    };
  }
};

// src/tfjs-core/src/ops/conv3d_backprop_filter.ts
function conv3DBackpropFilter_(x, dy, filterShape, strides, pad2) {
  let x5D = x;
  if (x.rank === 4) {
    x5D = reshape(x, [1, x.shape[0], x.shape[1], x.shape[2], x.shape[3]]);
  }
  let dy5D = dy;
  if (dy5D.rank === 4) {
    dy5D = reshape(dy, [1, dy.shape[0], dy.shape[1], dy.shape[2], dy.shape[3]]);
  }
  assert(
    x5D.rank === 5,
    () => `Error in conv3dDerFilter: input must be rank 5, but got shape ${x5D.shape}.`
  );
  assert(
    dy5D.rank === 5,
    () => `Error in conv3dDerFilter: dy must be rank 5, but got shape ${dy5D.shape}.`
  );
  assert(
    filterShape.length === 5,
    () => `Error in conv3dDerFilter: filterShape must be length 5, but got ${filterShape}.`
  );
  assert(
    x5D.shape[4] === filterShape[3],
    () => `Error in conv3dDerFilter: depth of input ${x5D.shape[4]}) must match input depth in filter (${filterShape[3]}.`
  );
  assert(
    dy5D.shape[4] === filterShape[4],
    () => `Error in conv3dDerFilter: depth of dy (${dy5D.shape[4]}) must match output depth for filter (${filterShape[4]}).`
  );
  const inputs = { x: x5D, dy: dy5D };
  const attrs = { strides, pad: pad2, filterShape };
  return ENGINE.runKernel(
    Conv3DBackpropFilterV2,
    inputs,
    attrs
  );
}
var conv3DBackpropFilter = op({ conv3DBackpropFilter_ });

// src/tfjs-core/src/gradients/Conv3D_grad.ts
var conv3DGradConfig = {
  kernelName: Conv3D,
  inputsToSave: ["x", "filter"],
  gradFunc: (dy, saved, attrs) => {
    const { dilations, strides, pad: pad2 } = attrs;
    assert(
      tupleValuesAreOne(dilations),
      () => `Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${dilations}'`
    );
    const [x5D, $filter] = saved;
    return {
      x: () => conv3DBackpropInput(
        x5D.shape,
        dy,
        $filter,
        strides,
        pad2
      ),
      filter: () => conv3DBackpropFilter(
        x5D,
        dy,
        $filter.shape,
        strides,
        pad2
      )
    };
  }
};

// src/tfjs-core/src/gradients/Cos_grad.ts
var cosGradConfig = {
  kernelName: Cos,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(neg(sin(cast(x, "float32"))), dy) };
  }
};

// src/tfjs-core/src/gradients/Cosh_grad.ts
var coshGradConfig = {
  kernelName: Cosh,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(sinh(cast(x, "float32")), dy) };
  }
};

// src/tfjs-core/src/gradients/Cumsum_grad.ts
var cumsumGradConfig = {
  kernelName: Cumsum,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { axis, exclusive, reverse: reverse2 } = attrs;
    return {
      x: () => {
        const permutation = getAxesPermutation([axis], x.rank);
        let out = cumsum(dy, axis, exclusive, !reverse2);
        if (permutation != null) {
          out = transpose(out, permutation);
        }
        return out;
      }
    };
  }
};

// src/tfjs-core/src/gradients/DepthwiseConv2dNative_grad.ts
var depthwiseConv2dNativeGradConfig = {
  kernelName: DepthwiseConv2dNative,
  inputsToSave: ["x", "filter"],
  gradFunc: (dy, saved, attrs) => {
    const { dilations, strides, pad: pad2, dimRoundingMode } = attrs;
    const $dilations = dilations == null ? [1, 1] : dilations;
    assert(
      tupleValuesAreOne($dilations),
      () => `Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${$dilations}'`
    );
    const [x, filter] = saved;
    assert(
      x.rank === 4,
      () => `Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${x.rank}.`
    );
    assert(
      filter.rank === 4,
      () => `Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${filter.rank}.`
    );
    assert(
      x.shape[3] === filter.shape[2],
      () => `Error in gradient of depthwiseConv2d: number of input channels (${x.shape[3]}) must match the inChannels dimension in filter ${filter.shape[2]}.`
    );
    assert(
      eitherStridesOrDilationsAreOne(strides, $dilations),
      () => `Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${strides} and dilations '${$dilations}'.`
    );
    checkPadOnDimRoundingMode(
      "depthwiseConv2d",
      pad2,
      dimRoundingMode
    );
    return {
      x: () => depthwiseConv2dNativeBackpropInput(
        x.shape,
        dy,
        filter,
        strides,
        pad2,
        $dilations,
        dimRoundingMode
      ),
      filter: () => depthwiseConv2dNativeBackpropFilter(
        x,
        dy,
        filter.shape,
        strides,
        pad2,
        $dilations,
        dimRoundingMode
      )
    };
  }
};

// src/tfjs-core/src/gradients/Dilation2D_grad.ts
var dilation2dGradConfig = {
  kernelName: Dilation2D,
  inputsToSave: ["x", "filter"],
  gradFunc: (dy, saved, attrs) => {
    const [x, filter] = saved;
    const inputInputs = { x, filter, dy };
    const filterInputs = { x, filter, dy };
    return {
      x: () => ENGINE.runKernel(
        Dilation2DBackpropInput,
        inputInputs,
        attrs
      ),
      filter: () => ENGINE.runKernel(
        Dilation2DBackpropFilter,
        filterInputs,
        attrs
      )
    };
  }
};

// src/tfjs-core/src/gradients/Elu_grad.ts
var eluGradConfig = {
  kernelName: Elu,
  outputsToSave: [true],
  gradFunc: (dy, saved) => {
    const [y] = saved;
    const inputs = { dy, y };
    return { x: () => ENGINE.runKernel(EluGrad, inputs) };
  }
};

// src/tfjs-core/src/gradients/Erf_grad.ts
var erfGradConfig = {
  kernelName: Erf,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    const a = mul(exp(neg(square(x))), 2 / Math.sqrt(Math.PI));
    return { x: () => mul(dy, a) };
  }
};

// src/tfjs-core/src/gradients/Exp_grad.ts
var expGradConfig = {
  kernelName: Exp,
  outputsToSave: [true],
  gradFunc: (dy, saved) => {
    const [y] = saved;
    return { x: () => mul(dy, y) };
  }
};

// src/tfjs-core/src/gradients/ExpandDims_grad.ts
var expandDimsGradConfig = {
  kernelName: ExpandDims,
  inputsToSave: ["input"],
  gradFunc: (dy, saved) => {
    const [input2] = saved;
    return { input: () => reshape(dy, input2.shape) };
  }
};

// src/tfjs-core/src/gradients/Expm1_grad.ts
var expm1GradConfig = {
  kernelName: Expm1,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(dy, exp(x)) };
  }
};

// src/tfjs-core/src/gradients/Floor_grad.ts
var floorGradConfig = {
  kernelName: Floor,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/FloorDiv_grad.ts
var floorDivGradConfig = {
  kernelName: FloorDiv,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const outShape = assertAndGetBroadcastShape(a.shape, b.shape);
    const derA = () => {
      const res = div(dy, cast(b, "float32"));
      const reduceAxes = getReductionAxes(a.shape, outShape);
      if (reduceAxes.length > 0) {
        return reshape(sum2(res, reduceAxes), a.shape);
      }
      return res;
    };
    const derB = () => {
      let res = mul(dy, cast(a, "float32"));
      const reduceAxes = getReductionAxes(b.shape, outShape);
      if (reduceAxes.length > 0) {
        res = reshape(sum2(res, reduceAxes), b.shape);
      }
      const tmp = square(b);
      return neg(div(res, cast(tmp, "float32")));
    };
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/FusedBatchNorm_grad.ts
var fusedBatchNormGradConfig = {
  kernelName: FusedBatchNorm,
  inputsToSave: ["x", "mean", "variance", "scale"],
  gradFunc: (dy, saved, attrs) => {
    const { varianceEpsilon } = attrs;
    const [x, mean2, variance, scale] = saved;
    const scaleValue = scale == null ? scalar(1) : scale;
    const reductionAxes = getReductionAxes(mean2.shape, x.shape);
    const tileShape = [];
    if (mean2.rank === 1) {
      for (let i = 0; i < x.shape.length - 1; ++i) {
        tileShape.push(x.shape[i]);
      }
      tileShape.push(1);
    }
    const xMinusMean = sub(x, mean2);
    const dyTimesScaleValue = mul(dy, scaleValue);
    const oneOverSqrtVariance = rsqrt(add2(variance, scalar(varianceEpsilon)));
    const minusHalfRCube = mul(
      mul(mul(oneOverSqrtVariance, oneOverSqrtVariance), oneOverSqrtVariance),
      scalar(-0.5)
    );
    const derX = () => {
      if (mean2.rank === 1) {
        return reshape(
          mul(
            mul(
              dy,
              tile(
                reshape(oneOverSqrtVariance, [1, 1, 1, mean2.shape[0]]),
                tileShape
              )
            ),
            scaleValue
          ),
          x.shape
        );
      } else {
        return reshape(mul(mul(dy, oneOverSqrtVariance), scaleValue), x.shape);
      }
    };
    const derMean = () => {
      let meanDer = mul(mul(oneOverSqrtVariance, scalar(-1)), dyTimesScaleValue);
      if (mean2.rank === 1) {
        meanDer = sum2(meanDer, reductionAxes);
      }
      return reshape(meanDer, mean2.shape);
    };
    const derVariance = () => {
      let varianceDer = mul(mul(minusHalfRCube, xMinusMean), dyTimesScaleValue);
      if (mean2.rank === 1) {
        varianceDer = sum2(varianceDer, reductionAxes);
      }
      return reshape(varianceDer, mean2.shape);
    };
    const derScale = () => {
      const xMinusMean2TimesRsqrt = mul(xMinusMean, oneOverSqrtVariance);
      let scaleDer = mul(dy, xMinusMean2TimesRsqrt);
      if (mean2.rank === 1) {
        scaleDer = sum2(scaleDer, reductionAxes);
      }
      return reshape(scaleDer, mean2.shape);
    };
    const derOffset = () => {
      let offsetDer = dy;
      if (mean2.rank === 1) {
        offsetDer = sum2(offsetDer, reductionAxes);
      }
      return reshape(offsetDer, mean2.shape);
    };
    return {
      x: derX,
      mean: derMean,
      variance: derVariance,
      scale: derScale,
      offset: derOffset
    };
  }
};

// src/tfjs-core/src/gradients/GatherV2_grad.ts
var gatherGradConfig = {
  kernelName: GatherV2,
  inputsToSave: ["x", "indices"],
  gradFunc: (dy, saved, attrs) => {
    const [x, indices] = saved;
    const { axis } = attrs;
    const parsedAxis = parseAxisParam(axis, x.shape)[0];
    const derX = () => {
      const paramsShape = x.shape;
      const indicesSize = indices.size;
      const outerShape = paramsShape.slice(0, parsedAxis);
      const outerDims = outerShape.length;
      const innerShape = paramsShape.slice(axis, paramsShape.length).slice(1);
      const innerDims = innerShape.length;
      const outerAxesIndices = arrayRange(0, outerDims);
      const innerAxesIndices = arrayRange(outerDims + 1, outerDims + 1 + innerDims);
      const valuesShape = arrayConcat([outerShape, [indicesSize], innerShape]);
      const values = reshape(dy, valuesShape);
      const reshapedIndices = reshape(indices, [indicesSize]);
      const transposeDims = arrayConcat([[outerDims], outerAxesIndices, innerAxesIndices]);
      const valuesTranspose = transpose(values, transposeDims);
      let paramsGrad = unsortedSegmentSum(
        valuesTranspose,
        reshapedIndices,
        x.shape[parsedAxis]
      );
      const invertTransposeDims = getUndoAxesPermutation(transposeDims);
      paramsGrad = transpose(paramsGrad, invertTransposeDims);
      return paramsGrad;
    };
    return { x: derX, indices: () => indices };
  }
};
function arrayRange(start, stop) {
  const result = [];
  for (let i = start; i < stop; ++i) {
    result.push(i);
  }
  return result;
}
function arrayConcat(arrays) {
  const result = [];
  for (let i = 0; i < arrays.length; ++i) {
    for (let j = 0; j < arrays[i].length; ++j) {
      result.push(arrays[i][j]);
    }
  }
  return result;
}

// src/tfjs-core/src/gradients/GreaterEqual_grad.ts
var greaterEqualGradConfig = {
  kernelName: GreaterEqual,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    return { a: () => zerosLike(a), b: () => zerosLike(b) };
  }
};

// src/tfjs-core/src/gradients/Identity_grad.ts
var identityGradConfig = {
  kernelName: Identity,
  gradFunc: (dy) => {
    return { x: () => cast(dy, "float32") };
  }
};

// src/tfjs-core/src/gradients/IsFinite_grad.ts
var isFiniteGradConfig = {
  kernelName: IsFinite,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/IsInf_grad.ts
var isInfGradConfig = {
  kernelName: IsInf,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/IsNan_grad.ts
var isNanGradConfig = {
  kernelName: IsNan,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/LeakyRelu_grad.ts
var leakyReluGradConfig = {
  kernelName: LeakyRelu,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { alpha } = attrs;
    const mask = greater(x, 0);
    return { x: () => where(mask, dy, mul(dy, alpha)) };
  }
};

// src/tfjs-core/src/gradients/Log1p_grad.ts
var log1pGradConfig = {
  kernelName: Log1p,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => div(dy, add2(x, 1)) };
  }
};

// src/tfjs-core/src/gradients/Log_grad.ts
var logGradConfig = {
  kernelName: Log,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => div(dy, cast(x, "float32")) };
  }
};

// src/tfjs-core/src/gradients/LogSoftmax_grad.ts
var logSoftmaxGradConfig = {
  kernelName: LogSoftmax,
  inputsToSave: [],
  outputsToSave: [true],
  gradFunc: (dy, saved, attrs) => {
    const [value] = saved;
    const { axis } = attrs;
    return {
      logits: () => {
        const keepDims = true;
        const softmax3 = exp(value);
        return sub(dy, mul(sum2(dy, axis, keepDims), softmax3));
      }
    };
  }
};

// src/tfjs-core/src/ops/local_response_normalization_backprop.ts
function localResponseNormalizationBackprop_(x, y, dy, depthRadius = 5, bias = 1, alpha = 1, beta = 0.5) {
  const inputs = { x, y, dy };
  const attrs = { depthRadius, bias, alpha, beta };
  return ENGINE.runKernel(
    LRNGrad,
    inputs,
    attrs
  );
}
var localResponseNormalizationBackprop = op({ localResponseNormalizationBackprop_ });

// src/tfjs-core/src/gradients/LRN_grad.ts
var lrnGradConfig = {
  kernelName: LRN,
  inputsToSave: ["x"],
  outputsToSave: [true],
  gradFunc: (dy, saved, attrs) => {
    const [x, y] = saved;
    const { depthRadius, bias, alpha, beta } = attrs;
    return {
      x: () => localResponseNormalizationBackprop(
        x,
        y,
        dy,
        depthRadius,
        bias,
        alpha,
        beta
      )
    };
  }
};

// src/tfjs-core/src/gradients/min_max_grad_util.ts
function gradForMinAndMax(dy, y, xOrig, origAxes) {
  if (y.rank < xOrig.rank) {
    y = reshape(y, expandShapeToKeepDim(y.shape, origAxes));
  }
  if (dy.rank < xOrig.rank) {
    dy = reshape(dy, expandShapeToKeepDim(dy.shape, origAxes));
  }
  return {
    x: () => {
      const dx = mul(dy, cast(equal(xOrig, y), dy.dtype));
      return dx;
    }
  };
}

// src/tfjs-core/src/gradients/Max_grad.ts
var maxGradConfig = {
  kernelName: Max,
  inputsToSave: ["x"],
  outputsToSave: [true],
  gradFunc: (dy, saved, attrs) => {
    const maxAttrs = attrs;
    const { reductionIndices } = maxAttrs;
    const x = saved[0];
    const y = saved[1];
    const origAxes = parseAxisParam(reductionIndices, x.shape);
    const maxGrad = gradForMinAndMax(dy, y, x, origAxes);
    return {
      x: () => {
        return maxGrad["x"]();
      }
    };
  }
};

// src/tfjs-core/src/gradients/Maximum_grad.ts
var maximumGradConfig = {
  kernelName: Maximum,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const derA = () => mul(dy, cast(greaterEqual(a, b), "float32"));
    const derB = () => mul(dy, cast(less(a, b), "float32"));
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/ops/max_pool_3d_grad.ts
function maxPool3dGrad_(dy, input2, output, filterSize, strides, pad2, dimRoundingMode) {
  const $dy = convertToTensor(dy, "dy", "maxPool3dGrad");
  const $input = convertToTensor(input2, "input", "maxPool3dGrad");
  const $output = convertToTensor(output, "output", "maxPool3dGrad");
  let dy5D = $dy;
  let input5D = $input;
  let output5D = $output;
  let reshapedTo5D = false;
  if ($input.rank === 4) {
    reshapedTo5D = true;
    dy5D = reshape(
      $dy,
      [1, $dy.shape[0], $dy.shape[1], $dy.shape[2], $dy.shape[3]]
    );
    input5D = reshape($input, [
      1,
      $input.shape[0],
      $input.shape[1],
      $input.shape[2],
      $input.shape[3]
    ]);
    output5D = reshape($output, [
      1,
      $output.shape[0],
      $output.shape[1],
      $output.shape[2],
      $output.shape[3]
    ]);
  }
  assert(
    dy5D.rank === 5,
    () => `Error in maxPool3dGrad: dy must be rank 5 but got rank ${dy5D.rank}.`
  );
  assert(
    input5D.rank === 5,
    () => `Error in maxPool3dGrad: input must be rank 5 but got rank ${input5D.rank}.`
  );
  assert(
    output5D.rank === 5,
    () => `Error in maxPool3dGrad: output must be rank 5 but got rank ${output5D.rank}.`
  );
  checkPadOnDimRoundingMode("maxPool3dGrad", pad2, dimRoundingMode);
  const inputs = { dy: dy5D, input: input5D, output: output5D };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
  const res = ENGINE.runKernel(
    MaxPool3DGrad,
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
var maxPool3dGrad = op({ maxPool3dGrad_ });

// src/tfjs-core/src/gradients/MaxPool3D_grad.ts
var maxPool3DGradConfig = {
  kernelName: MaxPool3D,
  inputsToSave: ["x"],
  outputsToSave: [true],
  gradFunc: (dy, saved, attrs) => {
    const [x, y] = saved;
    const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
    return {
      x: () => maxPool3dGrad(
        dy,
        x,
        y,
        filterSize,
        strides,
        pad2,
        dimRoundingMode
      )
    };
  }
};

// src/tfjs-core/src/ops/max_pool_grad.ts
function maxPoolGrad_(dy, input2, output, filterSize, strides, pad2, dimRoundingMode) {
  const $dy = convertToTensor(dy, "dy", "maxPoolGrad");
  const $input = convertToTensor(input2, "input", "maxPoolGrad");
  const $output = convertToTensor(output, "output", "maxPoolGrad");
  assert(
    $input.rank === $dy.rank,
    () => `Rank of input (${$input.rank}) does not match rank of dy (${$dy.rank})`
  );
  assert(
    $dy.rank === 4,
    () => `Error in maxPoolGrad: dy must be rank 4 but got rank ${$dy.rank}.`
  );
  assert(
    $input.rank === 4,
    () => `Error in maxPoolGrad: input must be rank 4 but got rank ${$input.rank}.`
  );
  checkPadOnDimRoundingMode("maxPoolGrad", pad2, dimRoundingMode);
  const inputs = { dy: $dy, input: $input, output: $output };
  const attrs = { filterSize, strides, pad: pad2, dimRoundingMode };
  return ENGINE.runKernel(
    MaxPoolGrad,
    inputs,
    attrs
  );
}
var maxPoolGrad = op({ maxPoolGrad_ });

// src/tfjs-core/src/gradients/MaxPool_grad.ts
var maxPoolGradConfig = {
  kernelName: MaxPool,
  inputsToSave: ["x"],
  outputsToSave: [true],
  gradFunc: (dy, saved, attrs) => {
    const [x, y] = saved;
    const { filterSize, strides, pad: pad2 } = attrs;
    return {
      x: () => maxPoolGrad(dy, x, y, filterSize, strides, pad2)
    };
  }
};

// src/tfjs-core/src/gradients/Mean_grad.ts
var meanGradConfig = {
  kernelName: Mean,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { axis } = attrs;
    const axes = parseAxisParam(axis, x.shape);
    const shapes = computeOutAndReduceShapes(x.shape, axes);
    const reduceShape = shapes[1];
    const reduceSize = sizeFromShape(reduceShape);
    const derX = () => {
      const expandedDyShape = x.shape.slice();
      axes.forEach((axis2) => {
        expandedDyShape[axis2] = 1;
      });
      const expandedDy = reshape(dy, expandedDyShape);
      const res = div(mul(expandedDy, ones2(x.shape, "float32")), reduceSize);
      return res;
    };
    return { x: derX };
  }
};

// src/tfjs-core/src/gradients/Min_grad.ts
var minGradConfig = {
  kernelName: Min,
  inputsToSave: ["x"],
  outputsToSave: [true],
  gradFunc: (dy, saved, attrs) => {
    const minAttrs = attrs;
    const { axis } = minAttrs;
    const [x, y] = saved;
    const origAxes = parseAxisParam(axis, x.shape);
    const minGrad = gradForMinAndMax(dy, y, x, origAxes);
    return {
      x: () => {
        return minGrad["x"]();
      }
    };
  }
};

// src/tfjs-core/src/gradients/Minimum_grad.ts
var minimumGradConfig = {
  kernelName: Minimum,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const derA = () => mul(dy, cast(lessEqual(a, b), "float32"));
    const derB = () => mul(dy, cast(greater(a, b), "float32"));
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/MirrorPad_grad.ts
var mirrorPadGradConfig = {
  kernelName: MirrorPad,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const x = saved[0];
    const { paddings } = attrs;
    const begin = paddings.map((p) => p[0]);
    return { x: () => slice(dy, begin, x.shape) };
  }
};

// src/tfjs-core/src/gradients/Mod_grad.ts
var modGradConfig = {
  kernelName: Mod,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const outShape = assertAndGetBroadcastShape(a.shape, b.shape);
    const derA = () => {
      const reduceAxes = getReductionAxes(a.shape, outShape);
      if (reduceAxes.length > 0) {
        return reshape(sum2(dy, reduceAxes), a.shape);
      }
      return dy;
    };
    const derB = () => {
      const res = mul(dy, neg(floor(div(a, b))));
      const reduceAxes = getReductionAxes(b.shape, outShape);
      if (reduceAxes.length > 0) {
        return reshape(sum2(res, reduceAxes), b.shape);
      }
      return res;
    };
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/Multiply_grad.ts
var multiplyGradConfig = {
  kernelName: Multiply,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const outShape = assertAndGetBroadcastShape(a.shape, b.shape);
    const derA = () => {
      const res = mul(dy, cast(b, "float32"));
      const reduceAxes = getReductionAxes(a.shape, outShape);
      if (reduceAxes.length > 0) {
        return reshape(sum2(res, reduceAxes), a.shape);
      }
      return res;
    };
    const derB = () => {
      const res = mul(dy, cast(a, "float32"));
      const reduceAxes = getReductionAxes(b.shape, outShape);
      if (reduceAxes.length > 0) {
        return reshape(sum2(res, reduceAxes), b.shape);
      }
      return res;
    };
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/Neg_grad.ts
var negGradConfig = {
  kernelName: Neg,
  gradFunc: (dy) => {
    return { x: () => neg(dy) };
  }
};

// src/tfjs-core/src/gradients/OneHot_grad.ts
var oneHotGradConfig = {
  kernelName: OneHot,
  inputsToSave: ["indices"],
  gradFunc: (dy, saved) => {
    const indices = saved[0];
    return { indices: () => zeros(indices.shape, "float32") };
  }
};

// src/tfjs-core/src/gradients/OnesLike_grad.ts
var onesLikeGradConfig = {
  kernelName: OnesLike,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/Pack_grad.ts
var packGradConfig = {
  kernelName: Pack,
  saveAllInputs: true,
  gradFunc: (dy, saved, attrs) => {
    const { axis } = attrs;
    const derTensors = unstack(dy, axis);
    return derTensors.map((t) => () => t);
  }
};

// src/tfjs-core/src/gradients/PadV2_grad.ts
var padV2GradConfig = {
  kernelName: PadV2,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const x = saved[0];
    const { paddings } = attrs;
    const begin = paddings.map((p) => p[0]);
    return { x: () => slice(dy, begin, x.shape) };
  }
};

// src/tfjs-core/src/gradients/Pow_grad.ts
var powGradConfig = {
  kernelName: Pow,
  inputsToSave: ["a", "b"],
  outputsToSave: [true],
  gradFunc: (dy, saved) => {
    const [a, b, y] = saved;
    const base = a;
    const exp2 = b;
    const outShape = assertAndGetBroadcastShape(base.shape, exp2.shape);
    const derBase = () => {
      const expFloat = cast(exp2, "float32");
      let res = mul(dy, mul(expFloat, pow(base, sub(expFloat, scalar(1)))));
      const reduceAxes = getReductionAxes(base.shape, outShape);
      if (reduceAxes.length > 0) {
        res = sum2(res, reduceAxes);
      }
      return reshape(res, base.shape);
    };
    const derExp = () => {
      const condition = greater(base, 0);
      const logBase = where(condition, log2(base), zerosLike(base));
      let res = mul(dy, mul(y, logBase));
      const reduceAxes = getReductionAxes(exp2.shape, outShape);
      if (reduceAxes.length > 0) {
        res = sum2(res, reduceAxes);
      }
      return reshape(res, exp2.shape);
    };
    return { a: derBase, b: derExp };
  }
};

// src/tfjs-core/src/gradients/Prelu_grad.ts
var preluGradConfig = {
  kernelName: Prelu,
  inputsToSave: ["x", "alpha"],
  gradFunc: (dy, saved) => {
    const [x, alpha] = saved;
    const mask = greater(x, 0);
    return {
      x: () => where(mask, dy, mul(dy, alpha)),
      alpha: () => {
        let res = where(mask, zerosLike(dy), mul(dy, x));
        const reduceAxes = getReductionAxes(alpha.shape, dy.shape);
        if (reduceAxes.length > 0) {
          res = sum2(res, reduceAxes);
        }
        return reshape(res, alpha.shape);
      }
    };
  }
};

// src/tfjs-core/src/gradients/Prod_grad.ts
function prodGradFn_(x, dy, axis) {
  const expandedYShape = x.shape.slice();
  expandedYShape[axis] = 1;
  const expandedDy = reshape(dy, expandedYShape);
  const xCumProd = cumprod(x, axis, true, false);
  const xCumRevProd = cumprod(x, axis, true, true);
  const dx = mul(xCumProd, xCumRevProd);
  return mul(expandedDy, dx);
}
function prodsGradFn_(x, dy, axis) {
  const xRank = x.shape.length;
  const finalProdAxis = xRank - axis.length;
  const xPermutation = backend_util_exports.getAxesPermutation(axis, xRank);
  let permutedX = x;
  if (xPermutation != null) {
    permutedX = transpose(x, xPermutation);
  }
  const newShape = permutedX.shape.slice();
  const removedShape = newShape.splice(xRank - axis.length, axis.length);
  const endPartShape = removedShape.reduce((p, c) => p * c, 1);
  newShape.push(endPartShape);
  const reshapedPermutedX = permutedX.reshape(newShape);
  let prodGrad = prodGradFn_(reshapedPermutedX, dy, finalProdAxis);
  prodGrad = prodGrad.reshape(permutedX.shape);
  if (xPermutation != null) {
    const undoPermutation = backend_util_exports.getUndoAxesPermutation(xPermutation);
    prodGrad = transpose(prodGrad, undoPermutation);
  }
  return prodGrad;
}
var prodGradConfig = {
  kernelName: Prod,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { axis } = attrs;
    let axisArr = [];
    if (axis === void 0 || axis === null) {
      axisArr = x.shape.map((_, i) => i);
    } else if (typeof axis === "number") {
      axisArr = [axis];
    } else {
      axisArr = axis;
    }
    return { x: () => prodsGradFn_(x, dy, axisArr) };
  }
};

// src/tfjs-core/src/gradients/RealDiv_grad.ts
var divGradConfig = {
  kernelName: RealDiv,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const outShape = assertAndGetBroadcastShape(a.shape, b.shape);
    const derA = () => {
      const res = div(dy, cast(b, "float32"));
      const reduceAxes = getReductionAxes(a.shape, outShape);
      if (reduceAxes.length > 0) {
        return reshape(sum2(res, reduceAxes), a.shape);
      }
      return res;
    };
    const derB = () => {
      let res = mul(dy, cast(a, "float32"));
      const reduceAxes = getReductionAxes(b.shape, outShape);
      if (reduceAxes.length > 0) {
        res = reshape(sum2(res, reduceAxes), b.shape);
      }
      const tmp = square(b);
      return neg(div(res, cast(tmp, "float32")));
    };
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/Reciprocal_grad.ts
var reciprocalGradConfig = {
  kernelName: Reciprocal,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => div(dy, neg(square(x))) };
  }
};

// src/tfjs-core/src/gradients/Relu6_grad.ts
var relu6GradConfig = {
  kernelName: Relu6,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    const mask = mul(lessEqual(x, 6), step(x));
    return { x: () => mul(dy, cast(mask, "float32")) };
  }
};

// src/tfjs-core/src/gradients/Relu_grad.ts
var reluGradConfig = {
  kernelName: Relu,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(dy, cast(step(x), "float32")) };
  }
};

// src/tfjs-core/src/gradients/Reshape_grad.ts
var reshapeGradConfig = {
  kernelName: Reshape,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => reshape(dy, x.shape) };
  }
};

// src/tfjs-core/src/gradients/ResizeBilinear_grad.ts
var resizeBilinearGradConfig = {
  kernelName: ResizeBilinear,
  inputsToSave: ["images"],
  gradFunc: (dy, saved, attrs) => {
    const [images] = saved;
    const inputs = { dy, images };
    const imagesDer = () => ENGINE.runKernel(
      ResizeBilinearGrad,
      inputs,
      attrs
    );
    return { images: imagesDer };
  }
};

// src/tfjs-core/src/gradients/ResizeNearestNeighbor_grad.ts
var resizeNearestNeighborGradConfig = {
  kernelName: ResizeNearestNeighbor,
  inputsToSave: ["images"],
  gradFunc: (dy, saved, attrs) => {
    const [images] = saved;
    const inputs = { dy, images };
    const imagesDer = () => ENGINE.runKernel(
      ResizeNearestNeighborGrad,
      inputs,
      attrs
    );
    return { images: imagesDer };
  }
};

// src/tfjs-core/src/gradients/Reverse_grad.ts
var reverseGradConfig = {
  kernelName: Reverse,
  gradFunc: (dy, saved, attrs) => {
    const { dims } = attrs;
    const axes = parseAxisParam(dims, dy.shape);
    return { x: () => reverse(dy, axes) };
  }
};

// src/tfjs-core/src/gradients/Round_grad.ts
var roundGradConfig = {
  kernelName: Round,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/Rsqrt_grad.ts
var rsqrtGradConfig = {
  kernelName: Rsqrt,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => neg(div(dy, mul(pow(x, 1.5), 2))) };
  }
};

// src/tfjs-core/src/gradients/Select_grad.ts
var selectGradConfig = {
  kernelName: Select,
  inputsToSave: ["condition"],
  gradFunc: (dy, saved) => {
    const [condition] = saved;
    return {
      condition: () => cast(zerosLike(condition), "float32"),
      t: () => mul(dy, cast(condition, dy.dtype)),
      e: () => mul(dy, cast(logicalNot(condition), dy.dtype))
    };
  }
};

// src/tfjs-core/src/gradients/Selu_grad.ts
var seluGradConfig = {
  kernelName: Selu,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return {
      x: () => {
        const mask = greater(x, scalar(0));
        const scaleAlpha = scalar(SELU_SCALEALPHA);
        const scale = scalar(SELU_SCALE);
        const greaterThanZeroDer = mul(dy, scale);
        const lessEqualZeroDer = mul(mul(dy, scaleAlpha), exp(cast(x, "float32")));
        return where(mask, greaterThanZeroDer, lessEqualZeroDer);
      }
    };
  }
};

// src/tfjs-core/src/gradients/Sigmoid_grad.ts
var sigmoidGradConfig = {
  kernelName: Sigmoid,
  outputsToSave: [true],
  gradFunc: (dy, saved) => {
    const [y] = saved;
    return { x: () => mul(dy, mul(y, sub(scalar(1), y))) };
  }
};

// src/tfjs-core/src/gradients/Sign_grad.ts
var signGradConfig = {
  kernelName: Sign,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/Sin_grad.ts
var sinGradConfig = {
  kernelName: Sin,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(cos(cast(x, "float32")), dy) };
  }
};

// src/tfjs-core/src/gradients/Sinh_grad.ts
var sinhGradConfig = {
  kernelName: Sinh,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(cosh(cast(x, "float32")), dy) };
  }
};

// src/tfjs-core/src/gradients/Slice_grad.ts
var sliceGradConfig = {
  kernelName: Slice,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { begin, size } = attrs;
    const inputShape = x.shape;
    const [begin_, size_] = parseSliceParams(x, begin, size);
    const paddings = [];
    for (let i = 0; i < dy.rank; i++) {
      paddings.push([begin_[i], inputShape[i] - begin_[i] - size_[i]]);
    }
    return { x: () => pad(dy, paddings) };
  }
};

// src/tfjs-core/src/gradients/Softmax_grad.ts
var softmaxGradConfig = {
  kernelName: Softmax,
  outputsToSave: [true],
  gradFunc: (dy, saved, attrs) => {
    const [y] = saved;
    const { dim } = attrs;
    const keepDims = true;
    const dyTimesY = mul(dy, y);
    return {
      logits: () => sub(dyTimesY, mul(sum2(dyTimesY, [dim], keepDims), y))
    };
  }
};

// src/tfjs-core/src/gradients/Softplus_grad.ts
var softplusGradConfig = {
  kernelName: Softplus,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(dy, sigmoid(x)) };
  }
};

// src/tfjs-core/src/gradients/SpaceToBatchND_grad.ts
var spaceToBatchNDGradConfig = {
  kernelName: SpaceToBatchND,
  gradFunc: (dy, saved, attrs) => {
    const { blockShape, paddings } = attrs;
    return { x: () => batchToSpaceND(dy, blockShape, paddings) };
  }
};

// src/tfjs-core/src/gradients/SplitV_grad.ts
var splitVGradConfig = {
  kernelName: SplitV,
  gradFunc: (dy, saved, attrs) => {
    const { axis } = attrs;
    return { x: () => concat(dy, axis) };
  }
};

// src/tfjs-core/src/gradients/Sqrt_grad.ts
var sqrtGradConfig = {
  kernelName: Sqrt,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => div(dy, mul(sqrt(cast(x, "float32")), 2)) };
  }
};

// src/tfjs-core/src/gradients/Square_grad.ts
var squareGradConfig = {
  kernelName: Square,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => mul(dy, mul(cast(x, "float32"), 2)) };
  }
};

// src/tfjs-core/src/gradients/SquaredDifference_grad.ts
var squaredDifferenceGradConfig = {
  kernelName: SquaredDifference,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const two = scalar(2);
    const derA = () => mul(dy, mul(two, sub(a, b)));
    const derB = () => mul(dy, mul(two, sub(b, a)));
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/Step_grad.ts
var stepGradConfig = {
  kernelName: Step,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/gradients/Sub_grad.ts
var subGradConfig = {
  kernelName: Sub,
  inputsToSave: ["a", "b"],
  gradFunc: (dy, saved) => {
    const [a, b] = saved;
    const outShape = assertAndGetBroadcastShape(a.shape, b.shape);
    const derA = () => {
      let res = dy;
      const reduceAxes = getReductionAxes(a.shape, outShape);
      if (reduceAxes.length > 0) {
        res = sum2(res, reduceAxes);
      }
      return reshape(res, a.shape);
    };
    const derB = () => {
      let res = dy;
      const reduceAxes = getReductionAxes(b.shape, outShape);
      if (reduceAxes.length > 0) {
        res = sum2(res, reduceAxes);
      }
      return reshape(neg(res), b.shape);
    };
    return { a: derA, b: derB };
  }
};

// src/tfjs-core/src/gradients/Sum_grad.ts
var sumGradConfig = {
  kernelName: Sum,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const expandedDyShape = x.shape.slice();
    const { axis } = attrs;
    const axes = parseAxisParam(axis, x.shape);
    axes.forEach((axis2) => {
      expandedDyShape[axis2] = 1;
    });
    const expandedDy = reshape(dy, expandedDyShape);
    const derX = mul(expandedDy, ones2(x.shape, "float32"));
    return { x: () => derX };
  }
};

// src/tfjs-core/src/gradients/Tan_grad.ts
var tanGradConfig = {
  kernelName: Tan,
  inputsToSave: ["x"],
  gradFunc: (dy, saved) => {
    const [x] = saved;
    return { x: () => div(dy, square(cos(x))) };
  }
};

// src/tfjs-core/src/gradients/Tanh_grad.ts
var tanhGradConfig = {
  kernelName: Tanh,
  outputsToSave: [true],
  gradFunc: (dy, saved) => {
    const [y] = saved;
    return { x: () => mul(sub(scalar(1), square(y)), dy) };
  }
};

// src/tfjs-core/src/gradients/Tile_grad.ts
var tileGradConfig = {
  kernelName: Tile,
  inputsToSave: ["x"],
  gradFunc: (dy, saved, attrs) => {
    const [x] = saved;
    const { reps } = attrs;
    const derX = () => {
      let xGrad = zerosLike(x);
      if (x.rank === 1) {
        for (let i = 0; i < reps[0]; ++i) {
          xGrad = add2(xGrad, slice(dy, [i * x.shape[0]], [x.shape[0]]));
        }
      } else if (x.rank === 2) {
        for (let i = 0; i < reps[0]; ++i) {
          for (let j = 0; j < reps[1]; ++j) {
            xGrad = add2(xGrad, slice(dy, [i * x.shape[0], j * x.shape[1]], [
              x.shape[0],
              x.shape[1]
            ]));
          }
        }
      } else if (x.rank === 3) {
        for (let i = 0; i < reps[0]; ++i) {
          for (let j = 0; j < reps[1]; ++j) {
            for (let k = 0; k < reps[2]; ++k) {
              xGrad = add2(
                xGrad,
                slice(
                  dy,
                  [i * x.shape[0], j * x.shape[1], k * x.shape[2]],
                  [x.shape[0], x.shape[1], x.shape[2]]
                )
              );
            }
          }
        }
      } else if (x.rank === 4) {
        for (let i = 0; i < reps[0]; ++i) {
          for (let j = 0; j < reps[1]; ++j) {
            for (let k = 0; k < reps[2]; ++k) {
              for (let l = 0; l < reps[3]; ++l) {
                xGrad = add2(
                  xGrad,
                  slice(
                    dy,
                    [
                      i * x.shape[0],
                      j * x.shape[1],
                      k * x.shape[2],
                      l * x.shape[3]
                    ],
                    [x.shape[0], x.shape[1], x.shape[2], x.shape[3]]
                  )
                );
              }
            }
          }
        }
      } else {
        throw new Error(
          `Gradient for tile operation is not implemented for rank-${x.rank} tensors yet.`
        );
      }
      return xGrad;
    };
    return { x: derX };
  }
};

// src/tfjs-core/src/gradients/Transpose_grad.ts
var transposeGradConfig = {
  kernelName: Transpose,
  gradFunc: (dy, saved, attrs) => {
    const transposeAttrs = attrs;
    const { perm } = transposeAttrs;
    const undoPerm = getUndoAxesPermutation(perm);
    return { x: () => transpose(dy, undoPerm) };
  }
};

// src/tfjs-core/src/gradients/Unpack_grad.ts
var unpackGradConfig = {
  kernelName: Unpack,
  gradFunc: (dy, saved, attrs) => {
    const unpackAttrs = attrs;
    const { axis } = unpackAttrs;
    return { value: () => stack(dy, axis) };
  }
};

// src/tfjs-core/src/gradients/UnsortedSegmentSum_grad.ts
var unsortedSegmentSumGradConfig = {
  kernelName: UnsortedSegmentSum,
  inputsToSave: ["segmentIds"],
  gradFunc: (dy, saved) => {
    const [segmentIds] = saved;
    const derX = () => {
      return gatherDropNegatives(dy, segmentIds);
    };
    return { x: derX };
  }
};
function gatherDropNegatives(x, indices) {
  const zeroClippedIndices = maximum(indices, zerosLike(indices));
  const gathered = gather(x, zeroClippedIndices);
  let isPositive = greaterEqual(indices, scalar(0, "int32"));
  const numIters = gathered.rank - isPositive.rank;
  for (let i = 0; i < numIters; ++i) {
    isPositive = expandDims(isPositive, i + 1);
  }
  isPositive = logicalAnd(isPositive, ones2(gathered.shape, "bool"));
  const zeroSlice = zerosLike(gathered);
  return where(isPositive, gathered, zeroSlice);
}

// src/tfjs-core/src/gradients/ZerosLike_grad.ts
var zerosLikeGradConfig = {
  kernelName: ZerosLike,
  gradFunc: (dy) => {
    return { x: () => zerosLike(dy) };
  }
};

// src/tfjs-core/src/register_all_gradients.ts
var gradConfigs = [
  absGradConfig,
  acosGradConfig,
  acoshGradConfig,
  addGradConfig,
  addNGradConfig,
  argMaxGradConfig,
  argMinGradConfig,
  asinGradConfig,
  asinhGradConfig,
  atan2GradConfig,
  atanGradConfig,
  atanhGradConfig,
  avgPool3DGradConfig,
  avgPoolGradConfig,
  batchMatMulGradConfig,
  batchToSpaceNDGradConfig,
  broadcastToGradConfig,
  castGradConfig,
  ceilGradConfig,
  clipByValueGradConfig,
  complexAbsGradConfig,
  concatGradConfig,
  conv2DBackpropInputGradConfig,
  conv2DGradConfig,
  conv3DGradConfig,
  cosGradConfig,
  coshGradConfig,
  cumsumGradConfig,
  depthwiseConv2dNativeGradConfig,
  dilation2dGradConfig,
  divGradConfig,
  eluGradConfig,
  erfGradConfig,
  expGradConfig,
  expandDimsGradConfig,
  expm1GradConfig,
  floorDivGradConfig,
  floorGradConfig,
  fusedBatchNormGradConfig,
  gatherGradConfig,
  greaterEqualGradConfig,
  identityGradConfig,
  isFiniteGradConfig,
  isInfGradConfig,
  isNanGradConfig,
  leakyReluGradConfig,
  log1pGradConfig,
  logGradConfig,
  logSoftmaxGradConfig,
  lrnGradConfig,
  maxGradConfig,
  maxGradConfig,
  maximumGradConfig,
  maxPool3DGradConfig,
  maxPoolGradConfig,
  meanGradConfig,
  minGradConfig,
  minimumGradConfig,
  mirrorPadGradConfig,
  modGradConfig,
  multiplyGradConfig,
  negGradConfig,
  oneHotGradConfig,
  onesLikeGradConfig,
  packGradConfig,
  padV2GradConfig,
  padV2GradConfig,
  powGradConfig,
  preluGradConfig,
  prodGradConfig,
  reciprocalGradConfig,
  relu6GradConfig,
  reluGradConfig,
  reshapeGradConfig,
  resizeBilinearGradConfig,
  resizeNearestNeighborGradConfig,
  reverseGradConfig,
  roundGradConfig,
  rsqrtGradConfig,
  selectGradConfig,
  seluGradConfig,
  sigmoidGradConfig,
  signGradConfig,
  sinGradConfig,
  sinhGradConfig,
  sliceGradConfig,
  softmaxGradConfig,
  softplusGradConfig,
  spaceToBatchNDGradConfig,
  spaceToBatchNDGradConfig,
  splitVGradConfig,
  splitVGradConfig,
  sqrtGradConfig,
  squaredDifferenceGradConfig,
  squareGradConfig,
  stepGradConfig,
  subGradConfig,
  sumGradConfig,
  tanGradConfig,
  tanhGradConfig,
  tileGradConfig,
  transposeGradConfig,
  unpackGradConfig,
  unsortedSegmentSumGradConfig,
  zerosLikeGradConfig
];
for (const gradientConfig of gradConfigs) {
  registerGradient(gradientConfig);
}

// src/tfjs-layers/src/exports_constraints.ts
var exports_constraints_exports = {};
__export(exports_constraints_exports, {
  maxNorm: () => maxNorm,
  minMaxNorm: () => minMaxNorm,
  nonNeg: () => nonNeg,
  unitNorm: () => unitNorm
});

// src/tfjs-layers/src/constraints.ts
function calcL2Norms(w, axis) {
  return tidy(() => sqrt(sum2(mul(w, w), axis, true)));
}
var Constraint = class extends serialization_exports.Serializable {
  getConfig() {
    return {};
  }
};
var MaxNorm = class extends Constraint {
  maxValue;
  axis;
  defaultMaxValue = 2;
  defaultAxis = 0;
  constructor(args) {
    super();
    this.maxValue = args.maxValue != null ? args.maxValue : this.defaultMaxValue;
    this.axis = args.axis != null ? args.axis : this.defaultAxis;
  }
  apply(w) {
    return tidy(() => {
      const norms = calcL2Norms(w, this.axis);
      const desired = clipByValue(norms, 0, this.maxValue);
      return mul(w, div(desired, add2(epsilon(), norms)));
    });
  }
  getConfig() {
    return { maxValue: this.maxValue, axis: this.axis };
  }
};
__publicField(MaxNorm, "className", "MaxNorm");
serialization_exports.registerClass(MaxNorm);
var UnitNorm = class extends Constraint {
  axis;
  defaultAxis = 0;
  constructor(args) {
    super();
    this.axis = args.axis != null ? args.axis : this.defaultAxis;
  }
  apply(w) {
    return tidy(
      () => div(w, add2(epsilon(), calcL2Norms(w, this.axis)))
    );
  }
  getConfig() {
    return { axis: this.axis };
  }
};
__publicField(UnitNorm, "className", "UnitNorm");
serialization_exports.registerClass(UnitNorm);
var NonNeg = class extends Constraint {
  apply(w) {
    return relu(w);
  }
};
__publicField(NonNeg, "className", "NonNeg");
serialization_exports.registerClass(NonNeg);
var MinMaxNorm = class extends Constraint {
  minValue;
  maxValue;
  rate;
  axis;
  defaultMinValue = 0;
  defaultMaxValue = 1;
  defaultRate = 1;
  defaultAxis = 0;
  constructor(args) {
    super();
    this.minValue = args.minValue != null ? args.minValue : this.defaultMinValue;
    this.maxValue = args.maxValue != null ? args.maxValue : this.defaultMaxValue;
    this.rate = args.rate != null ? args.rate : this.defaultRate;
    this.axis = args.axis != null ? args.axis : this.defaultAxis;
  }
  apply(w) {
    return tidy(() => {
      const norms = calcL2Norms(w, this.axis);
      const desired = add2(
        mul(
          this.rate,
          clipByValue(norms, this.minValue, this.maxValue)
        ),
        mul(1 - this.rate, norms)
      );
      return mul(w, div(desired, add2(epsilon(), norms)));
    });
  }
  getConfig() {
    return {
      minValue: this.minValue,
      maxValue: this.maxValue,
      rate: this.rate,
      axis: this.axis
    };
  }
};
__publicField(MinMaxNorm, "className", "MinMaxNorm");
serialization_exports.registerClass(MinMaxNorm);
var CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
  "maxNorm": "MaxNorm",
  "minMaxNorm": "MinMaxNorm",
  "nonNeg": "NonNeg",
  "unitNorm": "UnitNorm"
};
function serializeConstraint(constraint) {
  return serializeKerasObject(constraint);
}
function deserializeConstraint(config, customObjects = {}) {
  return deserializeKerasObject(
    config,
    serialization_exports.SerializationMap.getMap().classNameMap,
    customObjects,
    "constraint"
  );
}
function getConstraint(identifier) {
  if (identifier == null) {
    return null;
  }
  if (typeof identifier === "string") {
    const className = identifier in CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP ? CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] : identifier;
    const config = { className, config: {} };
    return deserializeConstraint(config);
  } else if (identifier instanceof Constraint) {
    return identifier;
  } else {
    return deserializeConstraint(identifier);
  }
}

// src/tfjs-layers/src/exports_constraints.ts
function maxNorm(args) {
  return new MaxNorm(args);
}
function unitNorm(args) {
  return new UnitNorm(args);
}
function nonNeg() {
  return new NonNeg();
}
function minMaxNorm(config) {
  return new MinMaxNorm(config);
}

// src/tfjs-layers/src/exports_initializers.ts
var exports_initializers_exports = {};
__export(exports_initializers_exports, {
  constant: () => constant,
  glorotNormal: () => glorotNormal,
  glorotUniform: () => glorotUniform,
  heNormal: () => heNormal,
  heUniform: () => heUniform,
  identity: () => identity,
  leCunNormal: () => leCunNormal,
  leCunUniform: () => leCunUniform,
  ones: () => ones3,
  orthogonal: () => orthogonal,
  randomNormal: () => randomNormal3,
  randomUniform: () => randomUniform2,
  truncatedNormal: () => truncatedNormal2,
  varianceScaling: () => varianceScaling,
  zeros: () => zeros2
});
function zeros2() {
  return new Zeros();
}
function ones3() {
  return new Ones();
}
function constant(args) {
  return new Constant(args);
}
function randomUniform2(args) {
  return new RandomUniform(args);
}
function randomNormal3(args) {
  return new RandomNormal(args);
}
function truncatedNormal2(args) {
  return new TruncatedNormal(args);
}
function identity(args) {
  return new Identity2(args);
}
function varianceScaling(config) {
  return new VarianceScaling(config);
}
function glorotUniform(args) {
  return new GlorotUniform(args);
}
function glorotNormal(args) {
  return new GlorotNormal(args);
}
function heNormal(args) {
  return new HeNormal(args);
}
function heUniform(args) {
  return new HeUniform(args);
}
function leCunNormal(args) {
  return new LeCunNormal(args);
}
function leCunUniform(args) {
  return new LeCunUniform(args);
}
function orthogonal(args) {
  return new Orthogonal(args);
}

// src/tfjs-layers/src/exports_layers.ts
var exports_layers_exports = {};
__export(exports_layers_exports, {
  Layer: () => Layer,
  RNN: () => RNN,
  RNNCell: () => RNNCell,
  activation: () => activation,
  add: () => add3,
  alphaDropout: () => alphaDropout,
  average: () => average,
  averagePooling1d: () => averagePooling1d,
  averagePooling2d: () => averagePooling2d,
  averagePooling3d: () => averagePooling3d,
  avgPool1d: () => avgPool1d,
  avgPool2d: () => avgPool2d,
  avgPool3d: () => avgPool3d2,
  avgPooling1d: () => avgPooling1d,
  avgPooling2d: () => avgPooling2d,
  avgPooling3d: () => avgPooling3d,
  batchNormalization: () => batchNormalization2,
  bidirectional: () => bidirectional,
  categoryEncoding: () => categoryEncoding,
  centerCrop: () => centerCrop,
  concatenate: () => concatenate2,
  conv1d: () => conv1d2,
  conv2d: () => conv2d3,
  conv2dTranspose: () => conv2dTranspose2,
  conv3d: () => conv3d2,
  conv3dTranspose: () => conv3dTranspose2,
  convLstm2d: () => convLstm2d,
  convLstm2dCell: () => convLstm2dCell,
  cropping2D: () => cropping2D,
  dense: () => dense,
  depthwiseConv2d: () => depthwiseConv2d4,
  dot: () => dot3,
  dropout: () => dropout3,
  elu: () => elu3,
  embedding: () => embedding,
  flatten: () => flatten3,
  gaussianDropout: () => gaussianDropout,
  gaussianNoise: () => gaussianNoise,
  globalAveragePooling1d: () => globalAveragePooling1d,
  globalAveragePooling2d: () => globalAveragePooling2d,
  globalMaxPool1d: () => globalMaxPool1d,
  globalMaxPool2d: () => globalMaxPool2d,
  globalMaxPooling1d: () => globalMaxPooling1d,
  globalMaxPooling2d: () => globalMaxPooling2d,
  gru: () => gru,
  gruCell: () => gruCell,
  input: () => input,
  inputLayer: () => inputLayer,
  layerNormalization: () => layerNormalization,
  leakyReLU: () => leakyReLU,
  lstm: () => lstm,
  lstmCell: () => lstmCell,
  masking: () => masking,
  maxPool1d: () => maxPool1d,
  maxPool2d: () => maxPool2d,
  maxPooling1d: () => maxPooling1d,
  maxPooling2d: () => maxPooling2d,
  maxPooling3d: () => maxPooling3d,
  maximum: () => maximum2,
  minimum: () => minimum2,
  multiply: () => multiply,
  permute: () => permute,
  prelu: () => prelu2,
  reLU: () => reLU,
  repeatVector: () => repeatVector,
  rescaling: () => rescaling,
  reshape: () => reshape2,
  resizing: () => resizing,
  rnn: () => rnn2,
  separableConv2d: () => separableConv2d2,
  simpleRNN: () => simpleRNN,
  simpleRNNCell: () => simpleRNNCell,
  softmax: () => softmax2,
  spatialDropout1d: () => spatialDropout1d,
  stackedRNNCells: () => stackedRNNCells,
  thresholdedReLU: () => thresholdedReLU,
  timeDistributed: () => timeDistributed,
  upSampling2d: () => upSampling2d,
  zeroPadding2d: () => zeroPadding2d
});

// src/tfjs-layers/src/logs.ts
async function resolveScalarsInLogs(logs) {
  if (logs == null) {
    return;
  }
  const promises = [];
  const keys = [];
  const scalarsToDispose = [];
  for (const key in logs) {
    const value = logs[key];
    if (typeof value !== "number") {
      const valueScalar = value;
      promises.push(valueScalar.data());
      keys.push(key);
      scalarsToDispose.push(valueScalar);
    }
  }
  if (promises.length > 0) {
    const values = await Promise.all(promises);
    for (let i = 0; i < values.length; ++i) {
      logs[keys[i]] = values[i][0];
    }
    dispose(scalarsToDispose);
  }
}
function disposeTensorsInLogs(logs) {
  if (logs == null) {
    return;
  }
  for (const key in logs) {
    const value = logs[key];
    if (typeof value !== "number") {
      value.dispose();
    }
  }
}

// src/tfjs-layers/src/base_callbacks.ts
var DEFAULT_YIELD_EVERY_MS = 125;
var BaseCallback = class {
  validationData = null;
  params;
  setParams(params) {
    this.params = params;
  }
  async onEpochBegin(epoch, logs) {
  }
  async onEpochEnd(epoch, logs) {
  }
  async onBatchBegin(batch, logs) {
  }
  async onBatchEnd(batch, logs) {
  }
  async onTrainBegin(logs) {
  }
  async onTrainEnd(logs) {
  }
  setModel(model2) {
  }
};
var CallbackList = class {
  callbacks;
  queueLength;
  constructor(callbacks2, queueLength = 10) {
    if (callbacks2 == null) {
      callbacks2 = [];
    }
    this.callbacks = callbacks2;
    this.queueLength = queueLength;
  }
  append(callback) {
    this.callbacks.push(callback);
  }
  setParams(params) {
    for (const callback of this.callbacks) {
      callback.setParams(params);
    }
  }
  setModel(model2) {
    for (const callback of this.callbacks) {
      callback.setModel(model2);
    }
  }
  async onEpochBegin(epoch, logs) {
    if (logs == null) {
      logs = {};
    }
    for (const callback of this.callbacks) {
      await callback.onEpochBegin(epoch, logs);
    }
  }
  async onEpochEnd(epoch, logs) {
    if (logs == null) {
      logs = {};
    }
    for (const callback of this.callbacks) {
      await callback.onEpochEnd(epoch, logs);
    }
  }
  async onBatchBegin(batch, logs) {
    if (logs == null) {
      logs = {};
    }
    for (const callback of this.callbacks) {
      await callback.onBatchBegin(batch, logs);
    }
  }
  async onBatchEnd(batch, logs) {
    if (logs == null) {
      logs = {};
    }
    for (const callback of this.callbacks) {
      await callback.onBatchEnd(batch, logs);
    }
  }
  async onTrainBegin(logs) {
    if (logs == null) {
      logs = {};
    }
    for (const callback of this.callbacks) {
      await callback.onTrainBegin(logs);
    }
  }
  async onTrainEnd(logs) {
    if (logs == null) {
      logs = {};
    }
    for (const callback of this.callbacks) {
      await callback.onTrainEnd(logs);
    }
  }
};
var BaseLogger = class extends BaseCallback {
  seen;
  totals;
  constructor() {
    super();
  }
  async onEpochBegin(epoch) {
    this.seen = 0;
    this.totals = {};
  }
  async onBatchEnd(batch, logs) {
    if (logs == null) {
      logs = {};
    }
    const batchSize = logs["size"] == null ? 0 : logs["size"];
    this.seen += batchSize;
    for (const key in logs) {
      const value = logs[key];
      if (typeof value === "number") {
        if (!this.totals.hasOwnProperty(key)) {
          this.totals[key] = 0;
        }
        this.totals[key] = this.totals[key] + value * batchSize;
      } else {
        let oldTotalsToDispose;
        if (key in this.totals) {
          oldTotalsToDispose = this.totals[key];
        } else {
          this.totals[key] = 0;
        }
        const total = tidy(() => add2(this.totals[key], mul(value, batchSize)));
        this.totals[key] = total;
        if (oldTotalsToDispose != null) {
          oldTotalsToDispose.dispose();
        }
      }
    }
  }
  async onEpochEnd(epoch, logs) {
    if (logs != null) {
      for (const key of this.params["metrics"]) {
        if (this.totals[key] == null) {
          continue;
        }
        if (typeof this.totals[key] === "number") {
          logs[key] = this.totals[key] / this.seen;
        } else {
          tidy(() => {
            const log3 = mul(div(1, this.seen), this.totals[key]);
            logs[key] = log3;
            this.totals[key].dispose();
            keep(logs[key]);
          });
        }
      }
    }
  }
};
var History = class extends BaseCallback {
  epoch;
  history;
  async onTrainBegin(logs) {
    this.epoch = [];
    this.history = {};
  }
  async onEpochEnd(epoch, logs) {
    if (logs == null) {
      logs = {};
    }
    this.epoch.push(epoch);
    for (const key in logs) {
      if (this.history[key] == null) {
        this.history[key] = [];
      }
      this.history[key].push(logs[key]);
    }
  }
  async syncData() {
    const promises = [];
    const keys = [];
    const indices = [];
    for (const key in this.history) {
      const valueArray = this.history[key];
      for (let i = 0; i < valueArray.length; ++i) {
        if (typeof valueArray[i] !== "number") {
          const valueScalar = valueArray[i];
          promises.push(valueScalar.data());
          keys.push(key);
          indices.push(i);
        }
      }
    }
    const values = await Promise.all(promises);
    for (let n = 0; n < values.length; ++n) {
      const tensorToDispose = this.history[keys[n]][indices[n]];
      tensorToDispose.dispose();
      this.history[keys[n]][indices[n]] = values[n][0];
    }
  }
};
var CustomCallback = class extends BaseCallback {
  trainBegin;
  trainEnd;
  epochBegin;
  epochEnd;
  batchBegin;
  batchEnd;
  yield;
  yieldEvery;
  currentEpoch = 0;
  nowFunc;
  nextFrameFunc;
  constructor(args, yieldEvery) {
    super();
    this.nowFunc = args.nowFunc;
    this.nextFrameFunc = args.nextFrameFunc || nextFrame;
    this.yieldEvery = yieldEvery || "auto";
    if (this.yieldEvery === "auto") {
      this.yieldEvery = DEFAULT_YIELD_EVERY_MS;
    }
    if (this.yieldEvery === "never" && args.onYield != null) {
      throw new Error(
        "yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback"
      );
    }
    if (util_exports.isNumber(this.yieldEvery)) {
      this.maybeWait = debounce(
        this.maybeWait.bind(this),
        this.yieldEvery,
        this.nowFunc
      );
    }
    this.trainBegin = args.onTrainBegin;
    this.trainEnd = args.onTrainEnd;
    this.epochBegin = args.onEpochBegin;
    this.epochEnd = args.onEpochEnd;
    this.batchBegin = args.onBatchBegin;
    this.batchEnd = args.onBatchEnd;
    this.yield = args.onYield;
  }
  async maybeWait(epoch, batch, logs) {
    const ps = [];
    if (this.yield != null) {
      await resolveScalarsInLogs(logs);
      ps.push(this.yield(epoch, batch, logs));
    }
    ps.push(this.nextFrameFunc());
    await Promise.all(ps);
  }
  async onEpochBegin(epoch, logs) {
    this.currentEpoch = epoch;
    if (this.epochBegin != null) {
      await resolveScalarsInLogs(logs);
      await this.epochBegin(epoch, logs);
    }
  }
  async onEpochEnd(epoch, logs) {
    const ps = [];
    if (this.epochEnd != null) {
      await resolveScalarsInLogs(logs);
      ps.push(this.epochEnd(epoch, logs));
    }
    if (this.yieldEvery === "epoch") {
      ps.push(this.nextFrameFunc());
    }
    await Promise.all(ps);
  }
  async onBatchBegin(batch, logs) {
    if (this.batchBegin != null) {
      await resolveScalarsInLogs(logs);
      await this.batchBegin(batch, logs);
    }
  }
  async onBatchEnd(batch, logs) {
    const ps = [];
    if (this.batchEnd != null) {
      await resolveScalarsInLogs(logs);
      ps.push(this.batchEnd(batch, logs));
    }
    if (this.yieldEvery === "batch") {
      ps.push(this.nextFrameFunc());
    } else if (util_exports.isNumber(this.yieldEvery)) {
      ps.push(this.maybeWait(this.currentEpoch, batch, logs));
    }
    await Promise.all(ps);
  }
  async onTrainBegin(logs) {
    if (this.trainBegin != null) {
      await resolveScalarsInLogs(logs);
      await this.trainBegin(logs);
    }
  }
  async onTrainEnd(logs) {
    if (this.trainEnd != null) {
      await resolveScalarsInLogs(logs);
      await this.trainEnd(logs);
    }
  }
};
function standardizeCallbacks(callbacks2, yieldEvery) {
  if (callbacks2 == null) {
    callbacks2 = {};
  }
  if (callbacks2 instanceof BaseCallback) {
    return [callbacks2];
  }
  if (Array.isArray(callbacks2) && callbacks2[0] instanceof BaseCallback) {
    return callbacks2;
  }
  const callbackConfigs = toList(callbacks2);
  return callbackConfigs.map(
    (callbackConfig) => new CustomCallback(callbackConfig, yieldEvery)
  );
}
var _CallbackConstructorRegistry = class {
  constructor() {
  }
  static registerCallbackConstructor(verbosityLevel, callbackConstructor) {
    util_exports.assert(
      verbosityLevel >= 0 && Number.isInteger(verbosityLevel),
      () => `Verbosity level is expected to be an integer >= 0, but got ${verbosityLevel}`
    );
    _CallbackConstructorRegistry.checkForDuplicate(callbackConstructor);
    if (_CallbackConstructorRegistry.constructors[verbosityLevel] == null) {
      _CallbackConstructorRegistry.constructors[verbosityLevel] = [];
    }
    _CallbackConstructorRegistry.constructors[verbosityLevel].push(
      callbackConstructor
    );
  }
  static checkForDuplicate(callbackConstructor) {
    for (const levelName in _CallbackConstructorRegistry.constructors) {
      const constructors = _CallbackConstructorRegistry.constructors[+levelName];
      constructors.forEach((ctor) => {
        if (ctor === callbackConstructor) {
          throw new ValueError("Duplicate callback constructor.");
        }
      });
    }
  }
  static clear() {
    _CallbackConstructorRegistry.constructors = {};
  }
  static createCallbacks(verbosityLevel) {
    const constructors = [];
    for (const levelName in _CallbackConstructorRegistry.constructors) {
      const level = +levelName;
      if (verbosityLevel >= level) {
        constructors.push(..._CallbackConstructorRegistry.constructors[level]);
      }
    }
    return constructors.map((ctor) => new ctor());
  }
};
var CallbackConstructorRegistry = _CallbackConstructorRegistry;
__publicField(CallbackConstructorRegistry, "constructors", {});
function configureCallbacks(callbacks2, verbose, epochs, initialEpoch, numTrainSamples, stepsPerEpoch, batchSize, doValidation, callbackMetrics) {
  const history = new History();
  const actualCallbacks = [
    new BaseLogger(),
    ...CallbackConstructorRegistry.createCallbacks(verbose)
  ];
  if (callbacks2 != null) {
    actualCallbacks.push(...callbacks2);
  }
  actualCallbacks.push(history);
  const callbackList = new CallbackList(actualCallbacks);
  callbackList.setParams({
    epochs,
    initialEpoch,
    samples: numTrainSamples,
    steps: stepsPerEpoch,
    batchSize,
    verbose,
    doValidation,
    metrics: callbackMetrics
  });
  return { callbackList, history };
}

// src/tfjs-layers/src/layers/serialization.ts
function deserialize(config, customObjects = {}, fastWeightInit = false) {
  return deserializeKerasObject(
    config,
    serialization_exports.SerializationMap.getMap().classNameMap,
    customObjects,
    "layer",
    fastWeightInit
  );
}

// src/tfjs-layers/src/losses.ts
function l2Normalize(x, axis) {
  return tidy(() => {
    if (x.dtype !== "float32") {
      x = cast(x, "float32");
    }
    const squareSum = sum2(square2(x), axis, true);
    const epsilonTensor = fill(squareSum.shape, epsilon());
    const norm2 = sqrt(maximum(squareSum, epsilonTensor));
    return div(x, norm2);
  });
}
function meanSquaredError2(yTrue, yPred) {
  return tidy(() => mean(square2(sub(yPred, yTrue)), -1));
}
function meanAbsoluteError(yTrue, yPred) {
  return tidy(() => mean(abs(sub(yPred, yTrue)), -1));
}
function meanAbsolutePercentageError(yTrue, yPred) {
  return tidy(() => {
    const diff = sub(yTrue, yPred);
    const clippedTrue = clipByValue(abs(yTrue), epsilon(), Number.MAX_VALUE);
    const absResult = abs(div(diff, clippedTrue));
    return mul(100, mean(absResult, -1));
  });
}
function meanSquaredLogarithmicError(yTrue, yPred) {
  return tidy(() => {
    const clippedPred = clipByValue(yPred, epsilon(), Number.MAX_VALUE);
    const firstLog = log2(add2(1, clippedPred));
    const clippedTrue = clipByValue(yTrue, epsilon(), Number.MAX_VALUE);
    const secondLog = log2(add2(1, clippedTrue));
    return mean(square2(sub(firstLog, secondLog)), -1);
  });
}
function squaredHinge(yTrue, yPred) {
  return tidy(() => {
    const maxResult = maximum(0, sub(1, mul(yTrue, yPred)));
    return mean(square2(maxResult), -1);
  });
}
function hinge(yTrue, yPred) {
  return tidy(() => {
    const maxResult = maximum(0, sub(1, mul(yTrue, yPred)));
    return mean(maxResult, -1);
  });
}
function categoricalHinge(yTrue, yPred) {
  return tidy(() => {
    const pos = sum2(mul(yTrue, yPred), -1);
    const neg2 = max(mul(sub(1, yTrue), yPred), -1);
    return maximum(0, add2(1, sub(neg2, pos)));
  });
}
function logcosh(yTrue, yPred) {
  return tidy(() => {
    const log22 = Math.log(2);
    const predictionDiff = sub(yPred, yTrue);
    const logcoshResult = sub(
      add2(predictionDiff, softplus(mul(-2, predictionDiff))),
      log22
    );
    return mean(logcoshResult, -1);
  });
}
function categoricalCrossentropy(target, output, fromLogits = false) {
  return tidy(() => {
    if (fromLogits) {
      output = softmax(output);
    } else {
      const outputSum = sum2(output, output.shape.length - 1, true);
      output = div(output, outputSum);
    }
    output = clipByValue(output, epsilon(), 1 - epsilon());
    return neg(sum2(
      mul(cast(target, "float32"), log2(output)),
      output.shape.length - 1
    ));
  });
}
function sparseCategoricalCrossentropy(target, output, fromLogits = false) {
  return tidy(() => {
    const flatTarget = cast(floor(flatten2(target)), "int32");
    output = clipByValue(output, epsilon(), 1 - epsilon());
    const outputShape = output.shape;
    const oneHotTarget = reshape(
      oneHot(flatTarget, outputShape[outputShape.length - 1]),
      outputShape
    );
    return categoricalCrossentropy(oneHotTarget, output, fromLogits);
  });
}
function sigmoidCrossEntropyWithLogits(labels, logits) {
  if (!util_exports.arraysEqual(labels.shape, logits.shape)) {
    throw new ValueError(
      `logits and labels must have the same shape, but got shapes ${JSON.stringify(labels.shape)} and ${JSON.stringify(logits.shape)}`
    );
  }
  return tidy(() => {
    const reluLogits = relu(logits);
    const negAbsLogits = neg(abs(logits));
    return add2(
      sub(reluLogits, mul(logits, labels)),
      log1p(exp(negAbsLogits))
    );
  });
}
function binaryCrossentropy(yTrue, yPred) {
  return tidy(() => {
    let y;
    y = clipByValue(yPred, epsilon(), 1 - epsilon());
    y = log2(div(y, sub(1, y)));
    return mean(sigmoidCrossEntropyWithLogits(yTrue, y), -1);
  });
}
function kullbackLeiblerDivergence(yTrue, yPred) {
  return tidy(() => {
    const clippedTrue = clipByValue(yTrue, epsilon(), 1);
    const clippedPred = clipByValue(yPred, epsilon(), 1);
    return sum2(
      mul(yTrue, log2(div(clippedTrue, clippedPred))),
      -1
    );
  });
}
function poisson(yTrue, yPred) {
  return tidy(() => {
    const logPred = log2(add2(epsilon(), yPred));
    return mean(sub(yPred, mul(yTrue, logPred)), -1);
  });
}
function cosineProximity(yTrue, yPred) {
  return tidy(() => {
    const trueNormalized = l2Normalize(yTrue, -1);
    const predNormalized = l2Normalize(yPred, -1);
    const trueXPred = mul(trueNormalized, predNormalized);
    return neg(sum2(trueXPred, -1));
  });
}
var lossesMap = {
  meanSquaredError: meanSquaredError2,
  meanAbsoluteError,
  meanAbsolutePercentageError,
  meanSquaredLogarithmicError,
  squaredHinge,
  hinge,
  categoricalHinge,
  logcosh,
  categoricalCrossentropy,
  sparseCategoricalCrossentropy,
  binaryCrossentropy,
  kullbackLeiblerDivergence,
  poisson,
  cosineProximity
};
function get(identifierOrFn) {
  if (typeof identifierOrFn === "string") {
    if (identifierOrFn in lossesMap) {
      return lossesMap[identifierOrFn];
    }
    let errMsg = `Unknown loss ${identifierOrFn}`;
    if (identifierOrFn.toLowerCase().includes("softmaxcrossentropy")) {
      errMsg = `Unknown loss ${identifierOrFn}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`;
    }
    throw new ValueError(errMsg);
  } else {
    return identifierOrFn;
  }
}

// src/tfjs-layers/src/metrics.ts
function binaryAccuracy(yTrue, yPred) {
  return tidy(() => {
    const threshold2 = mul(0.5, onesLike(yPred));
    const yPredThresholded = cast2(greater(yPred, threshold2), yTrue.dtype);
    return mean(equal(yTrue, yPredThresholded), -1);
  });
}
function categoricalAccuracy(yTrue, yPred) {
  return tidy(
    () => cast2(
      equal(argMax(yTrue, -1), argMax(yPred, -1)),
      "float32"
    )
  );
}
function truePositives(yTrue, yPred) {
  return tidy(() => {
    return cast(
      sum2(logicalAnd(equal(yTrue, 1), equal(yPred, 1))),
      "float32"
    );
  });
}
function falseNegatives(yTrue, yPred) {
  return tidy(() => {
    return cast(
      sum2(logicalAnd(equal(yTrue, 1), equal(yPred, 0))),
      "float32"
    );
  });
}
function falsePositives(yTrue, yPred) {
  return tidy(() => {
    return cast(
      sum2(logicalAnd(equal(yTrue, 0), equal(yPred, 1))),
      "float32"
    );
  });
}
function precision(yTrue, yPred) {
  return tidy(() => {
    const tp = truePositives(yTrue, yPred);
    const fp = falsePositives(yTrue, yPred);
    const denominator = add2(tp, fp);
    return cast(
      where(greater(denominator, 0), div(tp, denominator), 0),
      "float32"
    );
  });
}
function recall(yTrue, yPred) {
  return tidy(() => {
    const tp = truePositives(yTrue, yPred);
    const fn = falseNegatives(yTrue, yPred);
    const denominator = add2(tp, fn);
    return cast(
      where(greater(denominator, 0), div(tp, denominator), 0),
      "float32"
    );
  });
}
function binaryCrossentropy2(yTrue, yPred) {
  return binaryCrossentropy(yTrue, yPred);
}
function sparseCategoricalAccuracy(yTrue, yPred) {
  if (yTrue.rank === yPred.rank) {
    yTrue = squeeze(yTrue, [yTrue.rank - 1]);
  }
  yPred = argMax(yPred, -1);
  if (yPred.dtype !== yTrue.dtype) {
    yPred = cast(yPred, yTrue.dtype);
  }
  return cast(equal(yTrue, yPred), "float32");
}
var mse = meanSquaredError2;
var MSE = meanSquaredError2;
var mae = meanAbsoluteError;
var MAE = meanAbsoluteError;
var mape = meanAbsolutePercentageError;
var MAPE = meanAbsolutePercentageError;
var categoricalCrossentropy2 = categoricalCrossentropy;
var cosine = cosineProximity;
var sparseCategoricalCrossentropy2 = sparseCategoricalCrossentropy;
var metricsMap = {
  binaryAccuracy,
  categoricalAccuracy,
  precision,
  categoricalCrossentropy: categoricalCrossentropy2,
  sparseCategoricalCrossentropy: sparseCategoricalCrossentropy2,
  mse,
  MSE,
  mae,
  MAE,
  mape,
  MAPE,
  cosine
};
function get2(identifier) {
  if (typeof identifier === "string" && identifier in metricsMap) {
    return metricsMap[identifier];
  } else if (typeof identifier !== "string" && identifier != null) {
    return identifier;
  } else {
    throw new ValueError(`Unknown metric ${identifier}`);
  }
}
function getLossOrMetricName(fn) {
  assert2(fn !== null, `Unknown LossOrMetricFn ${fn}`);
  if (typeof fn === "string") {
    return fn;
  } else {
    let fnName;
    for (const key of Object.keys(lossesMap)) {
      if (lossesMap[key] === fn) {
        fnName = key;
        break;
      }
    }
    if (fnName !== void 0) {
      return fnName;
    }
    for (const key of Object.keys(metricsMap)) {
      if (metricsMap[key] === fn) {
        fnName = key;
        break;
      }
    }
    if (fnName !== void 0) {
      return fnName;
    }
    return fn.name;
  }
}

// src/tfjs-layers/src/optimizers.ts
function getOptimizer(identifier) {
  const optimizerMap = {
    "Adagrad": () => train.adagrad(0.01),
    "Adadelta": () => train.adadelta(1, 0.95, epsilon()),
    "Adam": () => train.adam(1e-3, 0.9, 0.999, epsilon()),
    "Adamax": () => train.adamax(2e-3, 0.9, 0.999, epsilon(), 0),
    "RMSProp": () => train.rmsprop(1e-3, 0.9, 0, epsilon()),
    "SGD": () => train.sgd(0.01)
  };
  optimizerMap["adagrad"] = optimizerMap["Adagrad"];
  optimizerMap["adadelta"] = optimizerMap["Adadelta"];
  optimizerMap["adam"] = optimizerMap["Adam"];
  optimizerMap["adamax"] = optimizerMap["Adamax"];
  optimizerMap["rmsprop"] = optimizerMap["RMSProp"];
  optimizerMap["sgd"] = optimizerMap["SGD"];
  if (identifier in optimizerMap) {
    return optimizerMap[identifier]();
  }
  throw new ValueError(`Unknown Optimizer ${identifier}`);
}

// src/tfjs-layers/src/user_defined_metadata.ts
var MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH = 1 * 1024 * 1024;
function checkUserDefinedMetadata(userDefinedMetadata, modelName, checkSize = false) {
  if (userDefinedMetadata == null || typeof userDefinedMetadata !== "object" || Object.getPrototypeOf(userDefinedMetadata) !== Object.prototype || !plainObjectCheck(userDefinedMetadata)) {
    throw new Error(
      "User-defined metadata is expected to be a JSON object, but is not."
    );
  }
  if (checkSize) {
    const out = JSON.stringify(userDefinedMetadata);
    if (out.length > MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH) {
      console.warn(
        `User-defined metadata of model "${modelName}" is too large in size (length=${out.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH}.`
      );
    }
  }
}
function plainObjectCheck(x) {
  if (x === null) {
    return true;
  } else if (typeof x === "object") {
    if (Object.getPrototypeOf(x) === Object.prototype) {
      const keys = Object.keys(x);
      for (const key of keys) {
        if (typeof key !== "string") {
          return false;
        }
        if (!plainObjectCheck(x[key])) {
          return false;
        }
      }
      return true;
    } else {
      if (Array.isArray(x)) {
        for (const item of x) {
          if (!plainObjectCheck(item)) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  } else {
    const xType = typeof x;
    return xType === "string" || xType === "number" || xType === "boolean";
  }
}

// src/tfjs-layers/src/utils/layer_utils.ts
function printSummary(model2, lineLength, positions, printFn = console.log) {
  const sequentialLike = isModelSequentialLike(model2);
  const toDisplay = ["Layer (type)", "Input Shape", "Output shape", "Param #"];
  if (sequentialLike) {
    lineLength = lineLength || 90;
    positions = positions || [0.32, 0.61, 0.89, 1];
  } else {
    lineLength = lineLength || 115;
    positions = positions || [0.24, 0.48, 0.7, 0.8, 1];
  }
  if (positions[positions.length - 1] <= 1) {
    positions = positions.map((p) => Math.floor(lineLength * p));
  }
  let relevantNodes;
  if (!sequentialLike) {
    toDisplay.push("Receives inputs");
    relevantNodes = [];
    for (const depth in model2.nodesByDepth) {
      relevantNodes.push(...model2.nodesByDepth[depth]);
    }
  }
  printFn("_".repeat(lineLength));
  printRow(toDisplay, positions, printFn);
  printFn("=".repeat(lineLength));
  const layers = model2.layers;
  for (let i = 0; i < layers.length; ++i) {
    if (sequentialLike) {
      printLayerSummary(layers[i], positions, printFn);
    } else {
      printLayerSummaryWithConnections(
        layers[i],
        positions,
        relevantNodes,
        printFn
      );
    }
    printFn((i === layers.length - 1 ? "=" : "_").repeat(lineLength));
  }
  model2.checkTrainableWeightsConsistency();
  const trainableCount = countTrainableParams(model2);
  const nonTrainableCount = countParamsInWeights(model2.nonTrainableWeights);
  printFn(`Total params: ${trainableCount + nonTrainableCount}`);
  printFn(`Trainable params: ${trainableCount}`);
  printFn(`Non-trainable params: ${nonTrainableCount}`);
  printFn("_".repeat(lineLength));
}
function countTrainableParams(model2) {
  let trainableCount;
  if (model2.collectedTrainableWeights != null) {
    trainableCount = countParamsInWeights(model2.collectedTrainableWeights);
  } else {
    trainableCount = countParamsInWeights(model2.trainableWeights);
  }
  return trainableCount;
}
function isModelSequentialLike(model2) {
  let sequentialLike = true;
  const nodesByDepth = [];
  const nodes = [];
  for (const depth in model2.nodesByDepth) {
    nodesByDepth.push(model2.nodesByDepth[depth]);
  }
  for (const depthNodes of nodesByDepth) {
    if (depthNodes.length > 1 || depthNodes.length === 1 && depthNodes[0].inboundLayers.length > 1) {
      sequentialLike = false;
      break;
    }
    nodes.push(...depthNodes);
  }
  if (sequentialLike) {
    for (const layer of model2.layers) {
      let flag = false;
      for (const node of layer.inboundNodes) {
        if (nodes.indexOf(node) !== -1) {
          if (flag) {
            sequentialLike = false;
            break;
          } else {
            flag = true;
          }
        }
      }
      if (!sequentialLike) {
        break;
      }
    }
  }
  return sequentialLike;
}
function printRow(fields, positions, printFn = console.log) {
  let line = "";
  for (let i = 0; i < fields.length; ++i) {
    if (i > 0) {
      line = line.slice(0, line.length - 1) + " ";
    }
    line += fields[i];
    line = line.slice(0, positions[i]);
    line += " ".repeat(positions[i] - line.length);
  }
  printFn(line);
}
function printLayerSummary(layer, positions, printFn) {
  let outputShape;
  let inputShape;
  try {
    inputShape = layer.inboundNodes.map(
      (x) => JSON.stringify(x.inputShapes)
    ).join(",");
  } catch (err) {
    inputShape = "multiple";
  }
  try {
    outputShape = JSON.stringify(layer.outputShape);
  } catch (err) {
    outputShape = "multiple";
  }
  const name = layer.name;
  const className = layer.getClassName();
  const fields = [
    `${name} (${className})`,
    inputShape,
    outputShape,
    layer.countParams().toString()
  ];
  printRow(fields, positions, printFn);
}
function printLayerSummaryWithConnections(layer, positions, relevantNodes, printFn) {
  let outputShape;
  let inputShape;
  try {
    inputShape = layer.inboundNodes.map(
      (x) => JSON.stringify(x.inputShapes)
    ).join(",");
  } catch (err) {
    inputShape = "multiple";
  }
  try {
    outputShape = JSON.stringify(layer.outputShape);
  } catch (err) {
    outputShape = "multiple";
  }
  const connections = [];
  for (const node of layer.inboundNodes) {
    if (relevantNodes != null && relevantNodes.length > 0 && relevantNodes.indexOf(node) === -1) {
      continue;
    }
    for (let i = 0; i < node.inboundLayers.length; ++i) {
      const inboundLayer = node.inboundLayers[i].name;
      const inboundLayerIndex = node.nodeIndices[i];
      const inboundTensorIndex = node.tensorIndices[i];
      connections.push(
        `${inboundLayer}[${inboundLayerIndex}][${inboundTensorIndex}]`
      );
    }
  }
  const name = layer.name;
  const className = layer.getClassName();
  const firstConnection = connections.length === 0 ? "" : connections[0];
  const fields = [
    `${name} (${className})`,
    inputShape,
    outputShape,
    layer.countParams().toString(),
    firstConnection
  ];
  printRow(fields, positions, printFn);
  for (let i = 1; i < connections.length; ++i) {
    printRow(["", "", "", "", connections[i]], positions, printFn);
  }
}

// src/tfjs-layers/src/utils/serialization_utils.ts
function isArrayItemInputOrOutputName(key, index, value) {
  return (key === "inboundNodes" || key === "outputLayers" || key === "inputLayers") && index === 0 && typeof value === "string";
}
function convertPythonicToTs(pythonicConfig, key) {
  if (pythonicConfig === null) {
    return null;
  } else if (typeof pythonicConfig === "string") {
    return toCamelCase(pythonicConfig);
  } else if (typeof pythonicConfig === "number" || typeof pythonicConfig === "boolean") {
    return pythonicConfig;
  } else if (pythonicConfig instanceof Array) {
    const tsArray = [];
    const arrayLength = pythonicConfig.length;
    for (let i = 0; i < arrayLength; ++i) {
      const item = pythonicConfig[i];
      if (isArrayItemInputOrOutputName(key, i, item)) {
        tsArray.push(item);
      } else {
        tsArray.push(convertPythonicToTs(item, key));
      }
    }
    return tsArray;
  } else {
    const tsDict = {};
    for (const pythonicKey of Object.keys(pythonicConfig)) {
      const pythonicValue = pythonicConfig[pythonicKey];
      if (pythonicKey === "name" && typeof pythonicValue === "string") {
        tsDict[pythonicKey] = pythonicValue;
      } else {
        const tsKey = toCamelCase(pythonicKey);
        tsDict[tsKey] = convertPythonicToTs(pythonicValue, tsKey);
      }
    }
    return tsDict;
  }
}
function convertTsToPythonic(tsConfig, key) {
  if (tsConfig === null || tsConfig === void 0) {
    return null;
  } else if (typeof tsConfig === "string") {
    return toSnakeCase(tsConfig);
  } else if (typeof tsConfig === "number" || typeof tsConfig === "boolean") {
    return tsConfig;
  } else if (tsConfig instanceof Array) {
    const pyArray = [];
    const arrayLength = tsConfig.length;
    for (let i = 0; i < arrayLength; ++i) {
      const item = tsConfig[i];
      if (isArrayItemInputOrOutputName(key, i, item)) {
        pyArray.push(item);
      } else {
        pyArray.push(convertTsToPythonic(item, key));
      }
    }
    return pyArray;
  } else {
    const pyDict = {};
    for (const tsKey of Object.keys(tsConfig)) {
      const tsValue = tsConfig[tsKey];
      const pyKey = toSnakeCase(tsKey);
      if ((tsKey === "name" || tsKey === "className") && typeof tsValue === "string") {
        pyDict[pyKey] = tsValue;
      } else {
        pyDict[pyKey] = convertTsToPythonic(tsValue, tsKey);
      }
    }
    return pyDict;
  }
}

// src/tfjs-layers/src/version.ts
var version2 = "0.0.0";

// src/tfjs-layers/src/engine/container.ts
var Container = class extends Layer {
  inputs;
  outputs;
  inputLayers;
  inputLayersNodeIndices;
  inputLayersTensorIndices;
  outputLayers;
  outputLayersNodeIndices;
  outputLayersTensorIndices;
  layers;
  layersByDepth;
  nodesByDepth;
  internalContainerRefs;
  containerNodes = /* @__PURE__ */ new Set();
  inputNames;
  outputNames;
  feedInputShapes;
  internalInputShapes;
  internalOutputShapes;
  feedInputNames;
  feedOutputNames;
  constructor(args) {
    super({});
    this.name = args.name;
    if (this.name == null) {
      const prefix = this.getClassName().toLowerCase();
      this.name = getUid(prefix);
    }
    this.supportsMasking = false;
    this.trainable_ = true;
    if (Array.isArray(args.inputs)) {
      this.inputs = args.inputs.slice();
    } else {
      this.inputs = [args.inputs];
    }
    if (Array.isArray(args.outputs)) {
      this.outputs = args.outputs.slice();
    } else {
      this.outputs = [args.outputs];
    }
    if (unique2(this.inputs).length !== this.inputs.length) {
      throw new ValueError(
        `The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map((x) => x.name)}`
      );
    }
    if (unique2(this.outputs).length !== this.outputs.length) {
      console.warn(
        `The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map((x) => x.name)}`
      );
    }
    this.inputLayers = [];
    this.inputLayersNodeIndices = [];
    this.inputLayersTensorIndices = [];
    this.outputLayers = [];
    this.outputLayersNodeIndices = [];
    this.outputLayersTensorIndices = [];
    this.layers = [];
    this.internalContainerRefs = [];
    for (const x of this.outputs) {
      const layer = x.sourceLayer;
      const nodeIndex = x.nodeIndex;
      const tensorIndex = x.tensorIndex;
      this.outputLayers.push(layer);
      this.outputLayersNodeIndices.push(nodeIndex);
      this.outputLayersTensorIndices.push(tensorIndex);
    }
    for (const x of this.inputs) {
      const layer = x.sourceLayer;
      const nodeIndex = x.nodeIndex;
      const tensorIndex = x.tensorIndex;
      assert2(nodeIndex === 0, "input layer has >1 nodes");
      assert2(tensorIndex === 0, "input layer has >1 tensors");
      this.inputLayers.push(layer);
      this.inputLayersNodeIndices.push(nodeIndex);
      this.inputLayersTensorIndices.push(tensorIndex);
    }
    this.inputNames = [];
    this.outputNames = [];
    this.feedInputShapes = [];
    this.feedInputNames = [];
    this.feedOutputNames = [];
    for (let i = 0; i < this.inputLayers.length; i++) {
      const layer = this.inputLayers[i];
      if (!(layer instanceof InputLayer)) {
        throw new TypeError(
          `Input layers to a LayersModel must be InputLayer objects. Received inputs: ${args.inputs}. Input ${i} (0-based) originates from layer type ${layer.getClassName()}.`
        );
      }
      this.inputNames.push(layer.name);
      this.feedInputShapes.push(layer.batchInputShape);
      this.feedInputNames.push(layer.name);
    }
    for (const layer of this.outputLayers) {
      this.outputNames.push(layer.name);
    }
    this.internalInputShapes = this.inputs.map((x) => x.shape);
    this.internalOutputShapes = this.outputs.map((x) => x.shape);
    const nodesDepths = {};
    const nodeIDToNode = {};
    const layersDepths = {};
    const layerIDToLayer = {};
    const layerIndices = {};
    const nodesInDecreasingDepth = [];
    const buildMapOfGraph = (tensor2, finishedNodes2, nodesInProgress2, layer, nodeIndex, tensorIndex) => {
      if (layer == null || nodeIndex == null || tensorIndex == null) {
        layer = tensor2.sourceLayer;
        nodeIndex = tensor2.nodeIndex;
        tensorIndex = tensor2.tensorIndex;
      }
      const node = layer.inboundNodes[nodeIndex];
      if (nodesInProgress2.indexOf(node) !== -1) {
        throw new RuntimeError(
          `The tensor ${tensor2.name} at layer "${layer.name}" is part of a cycle.`
        );
      }
      if (finishedNodes2.indexOf(node) !== -1) {
        return;
      }
      this.containerNodes.add(Container.nodeKey(layer, nodeIndex));
      if (!(layer.id in layerIndices)) {
        layerIndices[layer.id] = Object.keys(layerIndices).length;
      }
      if (nodesInProgress2.indexOf(node) === -1) {
        nodesInProgress2.push(node);
      }
      const numInboundLayers = node.inboundLayers.length;
      for (let i = 0; i < numInboundLayers; i++) {
        const x = node.inputTensors[i];
        const layer2 = node.inboundLayers[i];
        const nodeIndex2 = node.nodeIndices[i];
        const tensorIndex2 = node.tensorIndices[i];
        buildMapOfGraph(
          x,
          finishedNodes2,
          nodesInProgress2,
          layer2,
          nodeIndex2,
          tensorIndex2
        );
      }
      finishedNodes2.push(node);
      while (nodesInProgress2.indexOf(node) >= 0) {
        nodesInProgress2.splice(nodesInProgress2.indexOf(node), 1);
      }
      nodesInDecreasingDepth.push(node);
    };
    const finishedNodes = [];
    const nodesInProgress = [];
    for (const x of this.outputs) {
      buildMapOfGraph(x, finishedNodes, nodesInProgress);
    }
    const reversedNodesInDecreasingDepth = nodesInDecreasingDepth.slice().reverse();
    for (const node of reversedNodesInDecreasingDepth) {
      nodeIDToNode[node.id] = node;
      if (!(node.id in nodesDepths)) {
        nodesDepths[node.id] = 0;
      }
      let depth = nodesDepths[node.id];
      const previousDepth = layersDepths[node.outboundLayer.id] == null ? 0 : layersDepths[node.outboundLayer.id];
      depth = Math.max(depth, previousDepth);
      layersDepths[node.outboundLayer.id] = depth;
      layerIDToLayer[node.outboundLayer.id] = node.outboundLayer;
      nodesDepths[node.id] = depth;
      for (let i = 0; i < node.inboundLayers.length; i++) {
        const inboundLayer = node.inboundLayers[i];
        const nodeIndex = node.nodeIndices[i];
        const inboundNode = inboundLayer.inboundNodes[nodeIndex];
        const previousDepth2 = nodesDepths[inboundNode.id] == null ? 0 : nodesDepths[inboundNode.id];
        nodesDepths[inboundNode.id] = Math.max(depth + 1, previousDepth2);
        nodeIDToNode[inboundNode.id] = inboundNode;
      }
    }
    const nodesByDepth = {};
    for (const nodeID in nodesDepths) {
      const depth = nodesDepths[nodeID];
      if (!(depth in nodesByDepth)) {
        nodesByDepth[depth] = [];
      }
      nodesByDepth[depth].push(nodeIDToNode[nodeID]);
    }
    const layersByDepth = {};
    for (const layerID in layersDepths) {
      const depth = layersDepths[layerID];
      if (!(depth in layersByDepth)) {
        layersByDepth[depth] = [];
      }
      layersByDepth[depth].push(layerIDToLayer[layerID]);
    }
    let depthKeys = Object.keys(layersByDepth).map((x) => parseInt(x, 10)).sort(reverseNumberCompare);
    this.layers = [];
    for (const depth of depthKeys) {
      const layersForDepth = layersByDepth[depth];
      layersForDepth.sort((a, b) => {
        const aIndex = layerIndices[a.id];
        const bIndex = layerIndices[b.id];
        if (aIndex < bIndex) {
          return -1;
        }
        if (aIndex > bIndex) {
          return 1;
        }
        return 0;
      });
      for (const layer of layersForDepth) {
        if (layer instanceof Container) {
          this.internalContainerRefs.push(layer);
        }
        this.layers.push(layer);
      }
    }
    this.layersByDepth = layersByDepth;
    depthKeys = Object.keys(nodesByDepth).map((x) => parseInt(x, 10)).sort(reverseNumberCompare);
    const computableTensors = this.inputs.slice();
    const layersWithCompleteInput = [];
    for (const depth of depthKeys) {
      for (const node of nodesByDepth[depth]) {
        const layer = node.outboundLayer;
        if (layer != null) {
          for (const x of node.inputTensors) {
            if (computableTensors.indexOf(x) === -1) {
              throw new RuntimeError(
                `Graph disconnected: cannot obtain value for tensor ${x} at layer "${layer.name}". The following previous layers were accessed without issue: ${layersWithCompleteInput}`
              );
            }
          }
          for (const x of node.outputTensors) {
            computableTensors.push(x);
          }
          layersWithCompleteInput.push(layer.name);
        }
      }
    }
    this.nodesByDepth = nodesByDepth;
    const allNames = this.layers.map((x) => x.name);
    for (const name of allNames) {
      const numOccurrences = allNames.filter((x) => x === name).length;
      if (numOccurrences !== 1) {
        throw new RuntimeError(
          `The name "${name}" is used ${numOccurrences} times in the model. All layer names should be unique. Layer names: ` + JSON.stringify(allNames)
        );
      }
    }
    this.outboundNodes = [];
    this.inboundNodes = [];
    new Node({
      outboundLayer: this,
      inboundLayers: [],
      nodeIndices: [],
      tensorIndices: [],
      inputTensors: this.inputs,
      outputTensors: this.outputs,
      inputMasks: this.inputs.map((x) => null),
      outputMasks: this.outputs.map((x) => null),
      inputShapes: this.inputs.map((x) => x.shape),
      outputShapes: this.outputs.map((x) => x.shape)
    });
    this.built = true;
    this._refCount = 1;
  }
  assertNotDisposed() {
    if (this._refCount === 0) {
      throw new Error(`Container '${this.name}' is already disposed.`);
    }
  }
  dispose() {
    this.assertNotDisposed();
    const result = { refCountAfterDispose: null, numDisposedVariables: 0 };
    if (--this._refCount === 0) {
      for (const layer of this.layers) {
        result.numDisposedVariables += layer.dispose().numDisposedVariables;
      }
      for (const container of this.internalContainerRefs) {
        result.numDisposedVariables += container.dispose().numDisposedVariables;
      }
    }
    result.refCountAfterDispose = this._refCount;
    return result;
  }
  get trainable() {
    return this.trainable_;
  }
  set trainable(trainable) {
    this.layers.forEach((layer) => {
      layer._trainableWeights.forEach((w) => w.trainable = trainable);
    });
    this.trainable_ = trainable;
  }
  get trainableWeights() {
    if (this._trainableWeights.length > 0) {
      throw new ValueError(
        "Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array."
      );
    }
    if (!this.trainable) {
      return [];
    }
    let weights = [];
    for (const layer of this.layers) {
      weights = weights.concat(layer.trainableWeights);
    }
    return weights;
  }
  get nonTrainableWeights() {
    const weights = [];
    for (const layer of this.layers) {
      weights.push(...layer.nonTrainableWeights);
    }
    if (!this.trainable) {
      const trainableWeights = [];
      for (const layer of this.layers) {
        trainableWeights.push(...layer.trainableWeights);
      }
      return trainableWeights.concat(weights);
    }
    return weights;
  }
  get weights() {
    return this.trainableWeights.concat(this.nonTrainableWeights);
  }
  loadWeights(weights, strict = true) {
    const nameToWeight = {};
    let totalWeightsCount = 0;
    for (const layer of this.layers) {
      for (const weight of layer.weights) {
        if (nameToWeight[weight.originalName] != null) {
          throw new ValueError(`Duplicate weight name: ${weight.originalName}`);
        }
        nameToWeight[weight.originalName] = weight;
        totalWeightsCount++;
      }
    }
    const weightValueTuples = [];
    for (const name in weights) {
      let validatedName = name;
      if (nameToWeight[name] == null) {
        const tokens = name.split("/");
        const shortenNameArray = tokens.slice(0, -2).concat([tokens[tokens.length - 1]]);
        validatedName = shortenNameArray.join("/");
      }
      if (nameToWeight[validatedName] != null) {
        weightValueTuples.push([nameToWeight[validatedName], weights[name]]);
      } else if (strict) {
        throw new ValueError(
          `Provided weight data has no target variable: ${name}`
        );
      }
      delete nameToWeight[validatedName];
    }
    if (strict) {
      const unsetNames = [];
      for (const name in nameToWeight) {
        unsetNames.push(name);
      }
      if (unsetNames.length > 0) {
        throw new ValueError(
          `${unsetNames.length} of ${totalWeightsCount} weights are not set: ${unsetNames}`
        );
      }
    }
    batchSetValue(weightValueTuples);
  }
  updatedConfig() {
    const theConfig = this.getConfig();
    const modelConfig = {};
    modelConfig["className"] = this.getClassName();
    modelConfig["config"] = theConfig;
    modelConfig["kerasVersion"] = `tfjs-layers ${version2}`;
    modelConfig["backend"] = "TensorFlow.js";
    return modelConfig;
  }
  toJSON(unused, returnString = true) {
    const modelConfig = convertTsToPythonic(this.updatedConfig());
    return returnString ? JSON.stringify(modelConfig) : modelConfig;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = toList(inputs);
      const feedDict = new FeedDict();
      for (let i = 0; i < this.inputs.length; ++i) {
        feedDict.add(this.inputs[i], inputs[i]);
      }
      return execute(this.outputs, feedDict, kwargs);
    });
  }
  computeMask(inputs, mask) {
    return tidy(() => {
      inputs = toList(inputs);
      let masks;
      if (mask == null) {
        masks = pyListRepeat(null, inputs.length);
      } else {
        masks = toList(mask);
      }
      return this.runInternalGraph(inputs, masks)[1];
    });
  }
  computeOutputShape(inputShape) {
    const inputShapes = normalizeShapeList(inputShape);
    if (inputShapes.length !== this.inputLayers.length) {
      throw new ValueError(
        `Invalid inputShape argument ${inputShape}: model has ${this.inputLayers.length} tensor inputs.`
      );
    }
    const layersToOutputShapes = {};
    for (let i = 0; i < inputShapes.length; i++) {
      const layer = this.inputLayers[i];
      const inputShape2 = inputShapes[i];
      const shapeKey = layer.name + "_0_0";
      layersToOutputShapes[shapeKey] = inputShape2;
    }
    const depthKeys = Object.keys(this.nodesByDepth).map((x) => parseInt(x, 10)).sort(reverseNumberCompare);
    if (depthKeys.length > 1) {
      for (const depth of depthKeys) {
        const nodes = this.nodesByDepth[depth];
        for (const node of nodes) {
          const layer = node.outboundLayer;
          if (this.inputLayers.map((x) => x.id).indexOf(layer.id) !== -1) {
            continue;
          }
          const inputShapes2 = [];
          for (let j = 0; j < node.inboundLayers.length; j++) {
            const inboundLayer = node.inboundLayers[j];
            const nodeIndex2 = node.nodeIndices[j];
            const tensorIndex = node.tensorIndices[j];
            const shapeKey = `${inboundLayer.name}_${nodeIndex2}_${tensorIndex}`;
            const inputShape2 = layersToOutputShapes[shapeKey];
            inputShapes2.push(inputShape2);
          }
          const outputShape = layer.computeOutputShape(
            singletonOrArray(inputShapes2)
          );
          const outputShapes2 = normalizeShapeList(outputShape);
          const nodeIndex = layer.inboundNodes.indexOf(node);
          for (let j = 0; j < outputShapes2.length; j++) {
            const shapeKey = `${layer.name}_${nodeIndex}_${j}`;
            layersToOutputShapes[shapeKey] = outputShapes2[j];
          }
        }
      }
    }
    const outputShapes = [];
    const outputShapeKeys = [];
    for (let i = 0; i < this.outputLayers.length; i++) {
      const layer = this.outputLayers[i];
      const nodeIndex = this.outputLayersNodeIndices[i];
      const tensorIndex = this.outputLayersTensorIndices[i];
      const shapeKey = `${layer.name}_${nodeIndex}_${tensorIndex}`;
      outputShapeKeys.push(shapeKey);
    }
    for (let i = 0; i < outputShapeKeys.length; i++) {
      const key = outputShapeKeys[i];
      assert2(key in layersToOutputShapes);
      outputShapes.push(layersToOutputShapes[key]);
    }
    return singletonOrArray(outputShapes);
  }
  runInternalGraph(inputs, masks) {
    if (masks == null) {
      masks = pyListRepeat(null, inputs.length);
    }
    const tensorMap = {};
    for (let i = 0; i < this.inputs.length; ++i) {
      const x = this.inputs[i];
      const y = inputs[i];
      const mask = masks[i];
      tensorMap[x.id] = [y, mask];
    }
    const depthKeys = Object.keys(this.nodesByDepth).map((x) => parseInt(x, 10)).sort(reverseNumberCompare);
    for (const depth of depthKeys) {
      const nodes = this.nodesByDepth[depth];
      for (const node of nodes) {
        const layer = node.outboundLayer;
        const referenceInputTensors = node.inputTensors;
        const referenceOutputTensors = node.outputTensors;
        const computedData = new Array();
        for (const x of referenceInputTensors) {
          if (x.id in tensorMap) {
            computedData.push(tensorMap[x.id]);
          }
        }
        if (computedData.length === referenceInputTensors.length) {
          let kwargs = {};
          let computedTensors;
          let computedMasks;
          let outputTensors2;
          let outputMasks2;
          if (node.callArgs != null) {
            kwargs = node.callArgs;
          }
          if (computedData.length === 1) {
            const [computedTensor, computedMask] = computedData[0];
            if (kwargs["mask"] == null) {
              kwargs["mask"] = computedMask;
            }
            outputTensors2 = toList(layer.call(computedTensor, kwargs));
            outputMasks2 = toList(
              layer.computeMask(computedTensor, computedMask)
            );
            computedTensors = [computedTensor];
            computedMasks = [computedMask];
          } else {
            computedTensors = computedData.map((x) => x[0]);
            computedMasks = computedData.map((x) => x[1]);
            if (kwargs["mask"] == null) {
              kwargs["mask"] = computedMasks;
            }
            outputTensors2 = toList(layer.call(computedTensors, kwargs));
            outputMasks2 = toList(
              layer.computeMask(computedTensors, computedMasks)
            );
          }
          if (layer.activityRegularizer) {
            throw new NotImplementedError(
              "LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet."
            );
          }
          for (let i = 0; i < referenceOutputTensors.length; ++i) {
            const x = referenceOutputTensors[i];
            const y = outputTensors2[i];
            const mask = outputMasks2[i];
            tensorMap[x.id] = [y, mask];
          }
        }
      }
    }
    const outputTensors = [];
    const outputMasks = [];
    const outputShapes = [];
    for (const x of this.outputs) {
      assert2(
        x.id in tensorMap,
        `Could not compute output ${x.name} : ${x.id}`
      );
      const [tensor2, mask] = tensorMap[x.id];
      outputShapes.push(tensor2.shape);
      outputTensors.push(tensor2);
      outputMasks.push(mask);
    }
    return [outputTensors, outputMasks, outputShapes];
  }
  buildNodeConversionMap(layers) {
    const nodeConversionMap = {};
    let keptNodes;
    for (const layer of this.layers) {
      keptNodes = layer instanceof Container ? 1 : 0;
      for (let originalNodeIndex = 0; originalNodeIndex < layer.inboundNodes.length; originalNodeIndex++) {
        const nodeKey = Container.nodeKey(layer, originalNodeIndex);
        if (this.containerNodes.has(nodeKey)) {
          nodeConversionMap[nodeKey] = keptNodes;
          keptNodes += 1;
        }
      }
    }
    return nodeConversionMap;
  }
  getLayer(name, index) {
    if (index != null) {
      if (this.layers.length <= index) {
        throw new ValueError(
          `Was asked to retrieve layer at index ${index}, but model only has ${this.layers.length} layer(s).`
        );
      } else {
        return this.layers[index];
      }
    } else {
      if (name == null) {
        throw new ValueError("Provide either a layer name or layer index");
      }
    }
    for (const layer of this.layers) {
      if (layer.name === name) {
        return layer;
      }
    }
    throw new ValueError(`No such layer: ${name}`);
  }
  calculateLosses() {
    return tidy(() => {
      const losses = [];
      for (const layer of this.layers) {
        for (let nodeIndex = 0; nodeIndex < layer.inboundNodes.length; ++nodeIndex) {
          const nodeKey = Container.nodeKey(layer, nodeIndex);
          if (this.containerNodes.has(nodeKey)) {
            losses.push(...layer.calculateLosses());
          }
        }
      }
      return losses;
    });
  }
  getConfig() {
    const config = { name: this.name };
    const nodeConversionMap = this.buildNodeConversionMap(this.layers);
    const layerConfigs = [];
    for (const layer of this.layers) {
      const layerClassName = layer.getClassName();
      const layerConfig = layer.getConfig();
      const filteredInboundNodes = [];
      for (let originalNodeIndex = 0; originalNodeIndex < layer.inboundNodes.length; originalNodeIndex++) {
        const node = layer.inboundNodes[originalNodeIndex];
        const nodeKey = Container.nodeKey(layer, originalNodeIndex);
        let kwargs = {};
        if (this.containerNodes.has(nodeKey)) {
          if (node.callArgs) {
            try {
              JSON.stringify(node.callArgs);
              kwargs = node.callArgs;
            } catch (err) {
              console.warn(
                `Layer ${layer.name} was passed non-serializable keyword arguments: ${node.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`
              );
              kwargs = {};
            }
          }
          if (node.inboundLayers.length > 0) {
            const nodeData = [];
            for (let i = 0; i < node.inboundLayers.length; i++) {
              const inboundLayer = node.inboundLayers[i];
              const nodeIndex = node.nodeIndices[i];
              const tensorIndex = node.tensorIndices[i];
              const nodeKey2 = Container.nodeKey(inboundLayer, nodeIndex);
              let newNodeIndex = nodeConversionMap[nodeKey2];
              if (newNodeIndex == null) {
                newNodeIndex = 0;
              }
              nodeData.push(
                [inboundLayer.name, newNodeIndex, tensorIndex, kwargs]
              );
            }
            filteredInboundNodes.push(nodeData);
          }
        }
      }
      const dict = {};
      dict["name"] = layer.name;
      dict["className"] = layerClassName;
      dict["config"] = layerConfig;
      dict["inboundNodes"] = filteredInboundNodes;
      layerConfigs.push(dict);
    }
    config["layers"] = layerConfigs;
    const modelInputs = [];
    for (let i = 0; i < this.inputLayers.length; i++) {
      const layer = this.inputLayers[i];
      const nodeIndex = this.inputLayersNodeIndices[i];
      const nodeKey = Container.nodeKey(layer, nodeIndex);
      if (!this.containerNodes.has(nodeKey)) {
        continue;
      }
      let newNodeIndex = nodeConversionMap[nodeKey];
      if (newNodeIndex === null || newNodeIndex === void 0) {
        newNodeIndex = 0;
      }
      const tensorIndex = this.inputLayersTensorIndices[i];
      modelInputs.push([layer.name, newNodeIndex, tensorIndex]);
    }
    config["inputLayers"] = modelInputs;
    const modelOutputs = [];
    for (let i = 0; i < this.outputLayers.length; i++) {
      const layer = this.outputLayers[i];
      const nodeIndex = this.outputLayersNodeIndices[i];
      const nodeKey = Container.nodeKey(layer, nodeIndex);
      if (!this.containerNodes.has(nodeKey)) {
        continue;
      }
      let newNodeIndex = nodeConversionMap[nodeKey];
      if (newNodeIndex === null || newNodeIndex === void 0) {
        newNodeIndex = 0;
      }
      const tensorIndex = this.outputLayersTensorIndices[i];
      modelOutputs.push([layer.name, newNodeIndex, tensorIndex]);
    }
    config["outputLayers"] = modelOutputs;
    return config;
  }
  static fromConfig(cls, config, customObjects = {}, fastWeightInit = false) {
    const createdLayers = {};
    const unprocessedNodes = {};
    function addUnprocessedNode(layer, nodeData) {
      if (!(layer.name in unprocessedNodes)) {
        unprocessedNodes[layer.name] = [nodeData];
      } else {
        unprocessedNodes[layer.name].push(nodeData);
      }
    }
    function processNode(layer, nodeData) {
      const inputTensors2 = [];
      let kwargs;
      for (const inputData of nodeData) {
        const inboundLayerName = inputData[0];
        const inboundNodeIndex = inputData[1];
        const inboundTensorIndex = inputData[2];
        kwargs = inputData[3] == null ? {} : inputData[3];
        if (!(inboundLayerName in createdLayers)) {
          addUnprocessedNode(layer, nodeData);
          return;
        }
        const inboundLayer = createdLayers[inboundLayerName];
        if (inboundLayer.inboundNodes.length <= inboundNodeIndex) {
          addUnprocessedNode(layer, nodeData);
          return;
        }
        const inboundNode = inboundLayer.inboundNodes[inboundNodeIndex];
        inputTensors2.push(inboundNode.outputTensors[inboundTensorIndex]);
      }
      if (inputTensors2.length > 0) {
        layer.apply(
          singletonOrArray(inputTensors2),
          kwargs
        );
      }
    }
    function processLayer(layerData) {
      const layerName = layerData["name"];
      const layer = deserialize(
        layerData,
        config["customObjects"] != null ? config["customObjects"] : {}
      );
      layer.setFastWeightInitDuringBuild(fastWeightInit);
      createdLayers[layerName] = layer;
      const inboundNodesData = layerData["inboundNodes"];
      inboundNodesData.forEach((nodeData) => {
        if (!(nodeData instanceof Array)) {
          throw new ValueError(
            `Corrupted configuration, expected array for nodeData: ${nodeData}`
          );
        }
        addUnprocessedNode(layer, nodeData);
      });
    }
    const name = config["name"];
    const layersFromConfig = config["layers"];
    for (const layerData of layersFromConfig) {
      processLayer(layerData);
    }
    while (!isObjectEmpty(unprocessedNodes)) {
      for (const layerData of layersFromConfig) {
        const layer = createdLayers[layerData["name"]];
        if (layer.name in unprocessedNodes) {
          const currentUnprocessedNodesForLayer = unprocessedNodes[layer.name];
          delete unprocessedNodes[layer.name];
          for (const nodeData of currentUnprocessedNodesForLayer) {
            processNode(layer, nodeData);
          }
        }
      }
    }
    const inputTensors = [];
    const outputTensors = [];
    const inputLayersFromConfig = config["inputLayers"];
    for (const layerData of inputLayersFromConfig) {
      const layerName = layerData[0];
      const nodeIndex = layerData[1];
      const tensorIndex = layerData[2];
      assert2(layerName in createdLayers);
      const layer = createdLayers[layerName];
      const layerOutputTensors = layer.inboundNodes[nodeIndex].outputTensors;
      inputTensors.push(layerOutputTensors[tensorIndex]);
    }
    const outputLayersFromConfig = config["outputLayers"];
    for (const layerData of outputLayersFromConfig) {
      const layerName = layerData[0];
      const nodeIndex = layerData[1];
      const tensorIndex = layerData[2];
      assert2(layerName in createdLayers);
      const layer = createdLayers[layerName];
      const layerOutputTensors = layer.inboundNodes[nodeIndex].outputTensors;
      outputTensors.push(layerOutputTensors[tensorIndex]);
    }
    return new cls({ inputs: inputTensors, outputs: outputTensors, name });
  }
  get stateful() {
    if (this._stateful) {
      throw new ValueError(
        "Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false."
      );
    }
    for (const layer of this.layers) {
      if (layer.stateful) {
        return true;
      }
    }
    return false;
  }
  resetStates() {
    tidy(() => {
      this.layers.forEach((layer) => {
        if (layer.stateful) {
          layer.resetStates();
        }
      });
    });
  }
};

// src/tfjs-layers/src/engine/training_utils.ts
function standardizeSampleOrClassWeights(xWeight, outputNames, weightType) {
  const numOutputs = outputNames.length;
  if (xWeight == null || Array.isArray(xWeight) && xWeight.length === 0) {
    return outputNames.map((name) => null);
  }
  if (numOutputs === 1) {
    if (Array.isArray(xWeight) && xWeight.length === 1) {
      return xWeight;
    } else if (typeof xWeight === "object" && outputNames[0] in xWeight) {
      return [xWeight[outputNames[0]]];
    } else {
      return [xWeight];
    }
  }
  if (Array.isArray(xWeight)) {
    if (xWeight.length !== numOutputs) {
      throw new Error(
        `Provided ${weightType} is an array of ${xWeight.length} element(s), but the model has ${numOutputs} outputs. Make sure a set of weights is provided for each model output.`
      );
    }
    return xWeight;
  } else if (typeof xWeight === "object" && Object.keys(xWeight).length > 0 && typeof xWeight[Object.keys(xWeight)[0]] === "object") {
    const output = [];
    outputNames.forEach((outputName) => {
      if (outputName in xWeight) {
        output.push(xWeight[outputName]);
      } else {
        output.push(null);
      }
    });
    return output;
  } else {
    throw new Error(
      `The model has multiple (${numOutputs}) outputs, so ${weightType} must be either an array with ${numOutputs} elements or an object with ${outputNames} keys. Provided ${weightType} not understood: ${JSON.stringify(xWeight)}`
    );
  }
}
function standardizeClassWeights(classWeight, outputNames) {
  return standardizeSampleOrClassWeights(
    classWeight,
    outputNames,
    "classWeight"
  );
}
async function standardizeWeights(y, sampleWeight, classWeight, sampleWeightMode) {
  if (sampleWeight != null || sampleWeightMode != null) {
    throw new Error("Support sampleWeight is not implemented yet");
  }
  if (classWeight != null) {
    const yClasses = tidy(() => {
      if (y.shape.length === 1) {
        return clone(y);
      } else if (y.shape.length === 2) {
        if (y.shape[1] > 1) {
          const axis = 1;
          return argMax(y, axis);
        } else if (y.shape[1] === 1) {
          return reshape(y, [y.shape[0]]);
        } else {
          throw new Error(
            `Encountered unexpected last-dimension size (${y.shape[1]}) during handling of class weights. The size is expected to be >= 1.`
          );
        }
      } else {
        throw new Error(
          `Unexpected rank of target (y) tensor (${y.rank}) during handling of class weights. The rank is expected to be 1 or 2.`
        );
      }
    });
    const yClassIndices = Array.from(await yClasses.data());
    dispose(yClasses);
    const classSampleWeight = [];
    yClassIndices.forEach((classIndex) => {
      if (classWeight[classIndex] == null) {
        throw new Error(
          `classWeight must contain all classes in the training data. The class ${classIndex} exists in the data but not in classWeight`
        );
      } else {
        classSampleWeight.push(classWeight[classIndex]);
      }
    });
    return tensor1d(classSampleWeight, "float32");
  } else {
    return null;
  }
}
function computeWeightedLoss2(losses, sampleWeights) {
  return mul(losses, sampleWeights);
}

// src/tfjs-layers/src/engine/training_dataset.ts
var DEFAULT_VALIDATION_BATCH_SIZE = 32;
function standardizeDataIteratorOutput(model2, iteratorOut) {
  let xs;
  let ys;
  const iteratorOutObj = iteratorOut;
  xs = iteratorOutObj["xs"];
  ys = iteratorOutObj["ys"];
  util_exports.assert(
    xs != null && ys != null,
    () => `A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${iteratorOut}`
  );
  const flattenedXs = flattenTensorOrArrayOrMap("input", model2.inputNames, xs);
  const flattenedYs = flattenTensorOrArrayOrMap("output", model2.outputNames, ys);
  const batchSize = flattenedXs[0].shape[0];
  util_exports.assert(
    flattenedXs.length === model2.inputs.length,
    () => `LayersModel has ${model2.inputs.length} inputs, but the dataset provides ${flattenedXs.length} inputs.  (Expected input keys: ${JSON.stringify(model2.inputNames)})`
  );
  util_exports.assert(
    flattenedYs.length === model2.outputs.length,
    () => `LayersModel has ${model2.outputs.length} outputs, but the dataset provides ${flattenedYs.length} outputs.  (Expected output keys: ${JSON.stringify(model2.outputNames)})`
  );
  for (let xIndex = 0; xIndex < flattenedXs.length; xIndex++) {
    util_exports.assert(
      flattenedXs[xIndex].shape[0] === batchSize,
      () => `Batch size mismatch: input ${model2.inputNames[xIndex]} has ${flattenedXs[xIndex].shape[0]}; expected  ${batchSize} based on input ${model2.inputNames[0]}.`
    );
  }
  for (let yIndex = 0; yIndex < flattenedYs.length; yIndex++) {
    util_exports.assert(
      flattenedYs[yIndex].shape[0] === batchSize,
      () => `Batch size mismatch: output ${model2.outputNames[yIndex]} has ${flattenedYs[yIndex].shape[0]}; expected  ${batchSize} based on input ${model2.inputNames[0]}.`
    );
  }
  return { xs: flattenedXs, ys: flattenedYs };
}
function flattenTensorOrArrayOrMap(inputOrOutput, names, values) {
  if (values instanceof Tensor) {
    return [values];
  } else if (Array.isArray(values)) {
    util_exports.assert(
      values.length === names.length,
      () => `Received an array of ${values.length} Tensors, but expected ${names.length} to match the ${inputOrOutput} keys ${names}.`
    );
    return values;
  } else {
    const result = [];
    for (const name of names) {
      if (values[name] == null) {
        throw new ValueError(
          `The feature data generated by the dataset lacks the required ${inputOrOutput} key '${name}'.`
        );
      }
      result.push(values[name]);
    }
    return result;
  }
}
function standardizeTensorValidationData(data) {
  if (data.length === 3) {
    throw new NotImplementedError(
      "Validation with sample weights is not implemented yet."
    );
  }
  return { xs: data[0], ys: data[1] };
}
async function fitDataset(model2, dataset, args) {
  const hasBatchesPerEpoch = args.batchesPerEpoch != null;
  util_exports.assert(
    model2.optimizer != null,
    () => "You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."
  );
  util_exports.assert(
    args != null,
    () => `For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call.`
  );
  util_exports.assert(
    args.epochs != null && args.epochs > 0 && Number.isInteger(args.epochs),
    () => `For fitDataset(), config.epochs is expected to be a positive integer, but got ${args.epochs}`
  );
  util_exports.assert(
    !hasBatchesPerEpoch || args.batchesPerEpoch > 0 && Number.isInteger(args.batchesPerEpoch),
    () => `For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${args.batchesPerEpoch}`
  );
  util_exports.assert(
    args["validationSplit"] == null,
    () => "`validationSplit` is not supported by `fitDataset()`. Use validationData instead."
  );
  if (model2.isTraining) {
    throw new Error(
      "Cannot start training because another fit() call is ongoing."
    );
  }
  model2.isTraining = true;
  try {
    const doValidation = args.validationData != null;
    let valXs;
    let valYs;
    if (doValidation) {
      if (isDatasetObject(args.validationData)) {
        util_exports.assert(
          args.validationBatches == null || args.validationBatches > 0 && Number.isInteger(args.validationBatches),
          () => `For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${args.validationBatches}`
        );
      } else {
        const validationData = standardizeTensorValidationData(
          args.validationData
        );
        valXs = validationData.xs;
        valYs = validationData.ys;
      }
    }
    const trainFunction = model2.makeTrainFunction();
    const outLabels = model2.getDedupedMetricsNames();
    let callbackMetrics;
    if (doValidation) {
      callbackMetrics = outLabels.slice().concat(outLabels.map((n) => "val_" + n));
    } else {
      callbackMetrics = outLabels.slice();
    }
    const callbacks2 = standardizeCallbacks(args.callbacks, args.yieldEvery);
    const verbose = args.verbose == null ? 1 : args.verbose;
    const { callbackList, history } = configureCallbacks(
      callbacks2,
      verbose,
      args.epochs,
      null,
      null,
      getStepsPerEpoch(dataset, args),
      null,
      doValidation,
      callbackMetrics
    );
    callbackList.setModel(model2);
    model2.history = history;
    await callbackList.onTrainBegin();
    model2.stopTraining_ = false;
    let epoch = args.initialEpoch == null ? 0 : args.initialEpoch;
    let dataIterator = await dataset.iterator();
    while (epoch < args.epochs) {
      const epochLogs = {};
      await callbackList.onEpochBegin(epoch);
      let stepsDone = 0;
      let batchIndex = 0;
      if (!hasBatchesPerEpoch) {
        dataIterator = await dataset.iterator();
      }
      while (hasBatchesPerEpoch ? stepsDone < args.batchesPerEpoch : true) {
        const iteratorOut = await dataIterator.next();
        if (hasBatchesPerEpoch && iteratorOut.done) {
          console.warn(
            `You provided \`batchesPerEpoch\` as ${args.batchesPerEpoch}, but your dataset iterator ran out of data after ${stepsDone} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${args.batchesPerEpoch * args.epochs} batches). You may need to use the repeat() function when building your dataset.`
          );
          break;
        }
        if (iteratorOut.value != null) {
          const { xs, ys } = standardizeDataIteratorOutput(model2, iteratorOut.value);
          const batchLogs = {};
          batchLogs["batch"] = batchIndex;
          batchLogs["size"] = xs[0].shape[0];
          await callbackList.onBatchBegin(batchIndex, batchLogs);
          const sampleWeights = [];
          if (args.classWeight != null) {
            const standardClassWeights = standardizeClassWeights(args.classWeight, model2.outputNames);
            for (let i = 0; i < standardClassWeights.length; ++i) {
              sampleWeights.push(await standardizeWeights(
                ys[i],
                null,
                standardClassWeights[i]
              ));
            }
          }
          const ins = xs.concat(ys).concat(sampleWeights);
          const outs = trainFunction(ins);
          dispose(ins);
          for (let i = 0; i < outLabels.length; ++i) {
            const label = outLabels[i];
            const out = outs[i];
            batchLogs[label] = out;
            keep(out);
          }
          await callbackList.onBatchEnd(batchIndex, batchLogs);
          disposeTensorsInLogs(batchLogs);
          batchIndex++;
          stepsDone++;
        }
        if (hasBatchesPerEpoch ? stepsDone >= args.batchesPerEpoch : iteratorOut.done) {
          if (doValidation) {
            let valOuts;
            if (isDatasetObject(args.validationData)) {
              valOuts = toList(await model2.evaluateDataset(
                args.validationData,
                { batches: args.validationBatches }
              ));
            } else {
              valOuts = toList(model2.evaluate(valXs, valYs, {
                batchSize: args.validationBatchSize == null ? DEFAULT_VALIDATION_BATCH_SIZE : args.validationBatchSize,
                verbose: 0
              }));
            }
            for (let i = 0; i < model2.metricsNames.length; ++i) {
              epochLogs[`val_${model2.metricsNames[i]}`] = valOuts[i];
            }
          }
          break;
        }
        if (model2.stopTraining_) {
          break;
        }
      }
      await callbackList.onEpochEnd(epoch, epochLogs);
      epoch++;
      if (model2.stopTraining_) {
        break;
      }
    }
    await callbackList.onTrainEnd();
    await model2.history.syncData();
    return model2.history;
  } finally {
    model2.isTraining = false;
  }
}
function getStepsPerEpoch(dataset, args) {
  let stepsPerEpoch = null;
  if (args.batchesPerEpoch != null) {
    stepsPerEpoch = args.batchesPerEpoch;
  } else if (Number.isFinite(dataset.size)) {
    stepsPerEpoch = dataset.size;
  }
  return stepsPerEpoch;
}
function isDatasetObject(dataset) {
  return typeof dataset.iterator === "function";
}
function isLazyIteratorObject(iterator) {
  return typeof iterator.next === "function";
}
async function evaluateDataset(model2, dataset, args) {
  args = args || {};
  const hasBatches = args.batches != null;
  const f = model2.testFunction;
  let outs = [];
  if (args.verbose > 0) {
    throw new NotImplementedError("Verbose mode is not implemented yet.");
  }
  util_exports.assert(
    !hasBatches || args.batches > 0 && Number.isInteger(args.batches),
    () => `Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(args.batches)}`
  );
  const dataIterator = isLazyIteratorObject(dataset) ? dataset : await dataset.iterator();
  let numExamples = 0;
  let batch = 0;
  while (hasBatches ? batch < args.batches : true) {
    const iteratorOut = await dataIterator.next();
    outs = tidy(() => {
      if (iteratorOut.value) {
        const { xs, ys } = standardizeDataIteratorOutput(model2, iteratorOut.value);
        const xsAndYs = xs.concat(ys);
        const batchOuts = tidy(() => f(xsAndYs));
        dispose(xsAndYs);
        if (batch === 0) {
          for (let i = 0; i < batchOuts.length; ++i) {
            outs.push(scalar(0));
          }
        }
        const batchSize = xsAndYs[0].shape[0];
        for (let i = 0; i < batchOuts.length; ++i) {
          const batchOut = batchOuts[i];
          const oldScalar = outs[i];
          outs[i] = tidy(() => add2(outs[i], mul(batchSize, batchOut)));
          if (batch > 0) {
            dispose(oldScalar);
          }
        }
        dispose(batchOuts);
        numExamples += batchSize;
        ++batch;
      }
      return outs;
    });
    if (iteratorOut.done) {
      if (hasBatches) {
        console.warn(
          `Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${args.batches} batches). You may need to use the repeat() function when building your dataset.`
        );
      }
      break;
    }
  }
  for (let i = 0; i < outs.length; ++i) {
    const oldScalar = outs[i];
    outs[i] = div(outs[i], numExamples);
    dispose(oldScalar);
  }
  return singletonOrArray(outs);
}

// src/tfjs-layers/src/engine/training_tensors.ts
function checkBatchSize(batchSize) {
  util_exports.assert(
    batchSize > 0 && Number.isInteger(batchSize),
    () => `batchSize is required to be a positive integer, but got ${batchSize}`
  );
}
function sliceArrays(arrays, start, stop) {
  if (arrays == null) {
    return [null];
  } else if (Array.isArray(arrays)) {
    return arrays.map((array) => sliceAlongFirstAxis(array, start, stop - start));
  } else {
    return sliceAlongFirstAxis(arrays, start, stop - start);
  }
}
function sliceArraysByIndices(arrays, indices) {
  return tidy(() => {
    if (arrays == null) {
      return null;
    } else if (Array.isArray(arrays)) {
      return arrays.map(
        (array) => sliceArraysByIndices(array, indices)
      );
    } else {
      return gather2(
        arrays,
        indices.dtype === "int32" ? indices : cast(indices, "int32")
      );
    }
  });
}
function makeBatches(size, batchSize) {
  const output = [];
  let batchStart = 0;
  let batchEnd = null;
  while (batchStart < size) {
    batchEnd = batchStart + batchSize;
    if (batchEnd >= size) {
      batchEnd = size;
    }
    output.push([batchStart, batchEnd]);
    batchStart = batchEnd;
  }
  return output;
}
async function fitLoop(model2, f, ins, outLabels, batchSize, epochs, verbose, callbacks2, valF, valIns, shuffle2, callbackMetrics, initialEpoch, stepsPerEpoch, validationSteps) {
  if (batchSize == null) {
    batchSize = 32;
  }
  if (epochs == null) {
    epochs = 1;
  }
  if (shuffle2 == null) {
    shuffle2 = true;
  }
  if (initialEpoch == null) {
    initialEpoch = 0;
  }
  let doValidation = false;
  if (valF != null && valIns != null) {
    doValidation = true;
  }
  if (validationSteps != null) {
    doValidation = true;
    if (stepsPerEpoch == null) {
      throw new ValueError(
        "Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set."
      );
    }
  }
  const numTrainSamples = model2.checkNumSamples(ins, batchSize, stepsPerEpoch, "steps_per_epoch");
  let indexArray;
  if (numTrainSamples != null) {
    indexArray = range2(0, numTrainSamples);
  }
  if (verbose == null) {
    verbose = 1;
  }
  const { callbackList, history } = configureCallbacks(
    callbacks2,
    verbose,
    epochs,
    initialEpoch,
    numTrainSamples,
    stepsPerEpoch,
    batchSize,
    doValidation,
    callbackMetrics
  );
  callbackList.setModel(model2);
  model2.history = history;
  await callbackList.onTrainBegin();
  model2.stopTraining_ = false;
  for (let epoch = initialEpoch; epoch < epochs; ++epoch) {
    await callbackList.onEpochBegin(epoch);
    const epochLogs = {};
    if (stepsPerEpoch != null) {
      throw new NotImplementedError(
        "stepsPerEpoch mode is not implemented yet."
      );
    } else {
      if (shuffle2 === "batch") {
        throw new NotImplementedError("batch shuffling is not implemneted yet");
      } else if (shuffle2) {
        util_exports.shuffle(indexArray);
      }
      const epochIndexArray1D = tensor1d(indexArray);
      const batches = makeBatches(numTrainSamples, batchSize);
      for (let batchIndex = 0; batchIndex < batches.length; ++batchIndex) {
        const batchLogs = {};
        await callbackList.onBatchBegin(batchIndex, batchLogs);
        tidy(() => {
          const batchStart = batches[batchIndex][0];
          const batchEnd = batches[batchIndex][1];
          const batchIds = sliceAlongFirstAxis(
            epochIndexArray1D,
            batchStart,
            batchEnd - batchStart
          );
          batchLogs["batch"] = batchIndex;
          batchLogs["size"] = batchEnd - batchStart;
          const insBatch = sliceArraysByIndices(ins, batchIds);
          const outs = f(insBatch);
          for (let i = 0; i < outLabels.length; ++i) {
            const label = outLabels[i];
            const out = outs[i];
            batchLogs[label] = out;
            keep(out);
          }
          if (batchIndex === batches.length - 1) {
            if (doValidation) {
              const valOuts = model2.testLoop(valF, valIns, batchSize);
              for (let i = 0; i < outLabels.length; ++i) {
                const label = outLabels[i];
                const out = valOuts[i];
                keep(out);
                epochLogs["val_" + label] = out;
              }
            }
          }
        });
        await callbackList.onBatchEnd(batchIndex, batchLogs);
        disposeTensorsInLogs(batchLogs);
        if (model2.stopTraining_) {
          break;
        }
      }
      epochIndexArray1D.dispose();
    }
    await callbackList.onEpochEnd(epoch, epochLogs);
    if (model2.stopTraining_) {
      break;
    }
  }
  await callbackList.onTrainEnd();
  await model2.history.syncData();
  return model2.history;
}
async function fitTensors(model2, x, y, args = {}) {
  if (model2.isTraining) {
    throw new Error(
      "Cannot start training because another fit() call is ongoing."
    );
  }
  model2.isTraining = true;
  let inputs;
  let targets;
  let originalInputs;
  let originalTargets;
  let inputValX;
  let inputValY;
  let valX;
  let valY;
  let sampleWeights;
  try {
    const batchSize = args.batchSize == null ? 32 : args.batchSize;
    checkBatchSize(batchSize);
    const checkBatchAxis = false;
    const standardizedOuts = await model2.standardizeUserData(
      x,
      y,
      args.sampleWeight,
      args.classWeight,
      checkBatchAxis,
      batchSize
    );
    inputs = standardizedOuts[0];
    targets = standardizedOuts[1];
    sampleWeights = standardizedOuts[2];
    let doValidation = false;
    let valIns;
    if (args.validationData != null && args.validationData.length > 0) {
      doValidation = true;
      if (args.validationData.length === 2) {
        inputValX = args.validationData[0];
        inputValY = args.validationData[1];
      } else if (args.validationData.length === 3) {
        throw new NotImplementedError(
          "validationData including sample weights is not supported yet."
        );
      } else {
        throw new ValueError(
          `When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${args.validationData} is invalid.`
        );
      }
      const checkBatchAxis2 = true;
      const valStandardized = await model2.standardizeUserData(
        inputValX,
        inputValY,
        null,
        null,
        checkBatchAxis2,
        batchSize
      );
      valX = valStandardized[0];
      valY = valStandardized[1];
      valIns = valX.concat(valY);
    } else if (args.validationSplit != null && args.validationSplit > 0 && args.validationSplit < 1) {
      doValidation = true;
      const splitAt = Math.floor(inputs[0].shape[0] * (1 - args.validationSplit));
      const originalBatchSize = inputs[0].shape[0];
      valX = sliceArrays(inputs, splitAt, originalBatchSize);
      originalInputs = inputs;
      inputs = sliceArrays(inputs, 0, splitAt);
      valY = sliceArrays(targets, splitAt, originalBatchSize);
      originalTargets = targets;
      targets = sliceArrays(targets, 0, splitAt);
      valIns = valX.concat(valY);
    } else if (args.validationSteps != null) {
      doValidation = true;
    }
    const ins = inputs.concat(targets).concat(sampleWeights);
    model2.checkTrainableWeightsConsistency();
    const trainFunction = model2.makeTrainFunction();
    const outLabels = model2.getDedupedMetricsNames();
    let valFunction;
    let callbackMetrics;
    if (doValidation) {
      model2.makeTestFunction();
      valFunction = model2.testFunction;
      callbackMetrics = outLabels.slice().concat(outLabels.map((n) => "val_" + n));
    } else {
      valFunction = null;
      valIns = [];
      callbackMetrics = outLabels.slice();
    }
    const callbacks2 = standardizeCallbacks(args.callbacks, args.yieldEvery);
    const out = await fitLoop(
      model2,
      trainFunction,
      ins,
      outLabels,
      batchSize,
      args.epochs,
      args.verbose,
      callbacks2,
      valFunction,
      valIns,
      args.shuffle,
      callbackMetrics,
      args.initialEpoch,
      null,
      null
    );
    return out;
  } finally {
    model2.isTraining = false;
    disposeNewTensors(inputs, x);
    disposeNewTensors(targets, y);
    disposeNewTensors(originalInputs, x);
    disposeNewTensors(originalTargets, y);
    disposeNewTensors(valX, inputValX);
    disposeNewTensors(valY, inputValY);
    if (sampleWeights != null) {
      dispose(sampleWeights);
    }
  }
}
function ensureTensorsRank2OrHigher(tensors) {
  const outs = [];
  if (tensors instanceof Tensor) {
    tensors = [tensors];
  }
  for (let i = 0; i < tensors.length; ++i) {
    const tensor2 = tensors[i];
    if (tensor2.rank === 1) {
      outs.push(expandDims2(tensor2, 1));
    } else if (tensor2.rank === 0) {
      throw new Error(
        "Expected tensor to be at least 1D, but received a 0D tensor (scalar)."
      );
    } else {
      outs.push(tensor2);
    }
  }
  return outs;
}
function disposeNewTensors(tensors, refTensors) {
  if (tensors == null) {
    return;
  }
  const oldTensorIds = [];
  if (refTensors instanceof Tensor) {
    oldTensorIds.push(refTensors.id);
  } else if (Array.isArray(refTensors)) {
    refTensors.forEach((t) => oldTensorIds.push(t.id));
  } else if (refTensors != null) {
    for (const name in refTensors) {
      const oldTensor = refTensors[name];
      oldTensorIds.push(oldTensor.id);
    }
  }
  const tensorsToDispose = [];
  if (tensors instanceof Tensor) {
    if (oldTensorIds.indexOf(tensors.id) === -1) {
      tensorsToDispose.push(tensors);
    }
  } else if (Array.isArray(tensors)) {
    tensors.forEach((t) => {
      if (oldTensorIds.indexOf(t.id) === -1) {
        tensorsToDispose.push(t);
      }
    });
  } else if (tensors != null) {
    for (const name in tensors) {
      const tensor2 = tensors[name];
      if (oldTensorIds.indexOf(tensor2.id) === -1) {
        tensorsToDispose.push(tensor2);
      }
    }
  }
  tensorsToDispose.forEach((t) => {
    if (!t.isDisposed) {
      t.dispose();
    }
  });
}

// src/tfjs-layers/src/engine/training.ts
function isDataTensor(x) {
  return x instanceof Tensor;
}
function isDataArray(x) {
  return Array.isArray(x);
}
function isDataDict(x) {
  return !isDataTensor(x) && !isDataArray(x);
}
function standardizeInputData(data, names, shapes, checkBatchAxis = true, exceptionPrefix = "") {
  if (names == null || names.length === 0) {
    if (data != null) {
      let gotUnexpectedData = false;
      if (isDataArray(data) && data.length > 0) {
        gotUnexpectedData = true;
      } else if (isDataDict(data)) {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            gotUnexpectedData = true;
            break;
          }
        }
      } else {
        gotUnexpectedData = true;
      }
      if (gotUnexpectedData) {
        throw new ValueError(
          `Error when checking model ${exceptionPrefix} expected no data, but got ${data}`
        );
      }
    }
    return [];
  }
  if (data == null) {
    return names.map((name) => null);
  }
  let arrays;
  if (isDataDict(data)) {
    data = data;
    arrays = [];
    for (const name of names) {
      if (data[name] == null) {
        throw new ValueError(
          `No data provided for "${name}". Need data for each key in: ${names}`
        );
      }
      arrays.push(data[name]);
    }
  } else if (isDataArray(data)) {
    data = data;
    if (data.length !== names.length) {
      throw new ValueError(
        `Error when checking model ${exceptionPrefix}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${names.length} Tensor(s), but instead got the following list of Tensor(s): ${data}`
      );
    }
    arrays = data;
  } else {
    data = data;
    if (names.length > 1) {
      throw new ValueError(
        `The model ${exceptionPrefix} expects ${names.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${data.shape}`
      );
    }
    arrays = [data];
  }
  arrays = ensureTensorsRank2OrHigher(arrays);
  if (shapes != null) {
    for (let i = 0; i < names.length; ++i) {
      if (shapes[i] == null) {
        continue;
      }
      const array = arrays[i];
      if (array.shape.length !== shapes[i].length) {
        throw new ValueError(
          `Error when checking ${exceptionPrefix}: expected ${names[i]} to have ${shapes[i].length} dimension(s). but got array with shape ${array.shape}`
        );
      }
      for (let j = 0; j < shapes[i].length; ++j) {
        if (j === 0 && !checkBatchAxis) {
          continue;
        }
        const dim = array.shape[j];
        const refDim = shapes[i][j];
        if (refDim != null && refDim >= 0 && dim !== refDim) {
          throw new ValueError(
            `${exceptionPrefix} expected a batch of elements where each example has shape [${shapes[i].slice(1, shapes[i].length)}] (i.e.,tensor shape [*,${shapes[i].slice(1, shapes[i].length)}]) but the ${exceptionPrefix} received an input with ${array.shape[0]} examples, each with shape [${array.shape.slice(1, array.shape.length)}] (tensor shape [${array.shape}])`
          );
        }
      }
    }
  }
  return arrays;
}
function checkArrayLengths(inputs, targets, weights) {
  const setX = unique2(inputs.map((input2) => input2.shape[0]));
  setX.sort();
  const setY = unique2(targets.map((target) => target.shape[0]));
  setY.sort();
  if (setX.length > 1) {
    throw new ValueError(
      `All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(inputs.map((input2) => input2.shape))}`
    );
  }
  if (setY.length > 1) {
    throw new ValueError(
      `All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(targets.map((target) => target.shape))}`
    );
  }
  if (setX.length > 0 && setY.length > 0 && !util_exports.arraysEqual(setX, setY)) {
    throw new ValueError(
      `Input Tensors should have the same number of samples as target Tensors. Found ${setX[0]} input sample(s) and ${setY[0]} target sample(s).`
    );
  }
}
function checkLossAndTargetCompatibility(targets, lossFns, outputShapes) {
  const keyLosses = [
    meanSquaredError2,
    binaryCrossentropy,
    categoricalCrossentropy
  ];
  for (let i = 0; i < targets.length; ++i) {
    const y = targets[i];
    const loss = lossFns[i];
    const shape = outputShapes[i];
    if (loss == null) {
      continue;
    }
    if (loss === categoricalCrossentropy) {
      if (y.shape[y.shape.length - 1] === 1) {
        throw new ValueError(
          `You are passing a target array of shape ${y.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`
        );
      }
    }
    if (keyLosses.indexOf(loss) !== -1) {
      const slicedYShape = y.shape.slice(1);
      const slicedShape = shape.slice(1);
      for (let j = 0; j < slicedYShape.length; ++j) {
        const targetDim = slicedYShape[j];
        const outDim = slicedShape[j];
        if (outDim != null && targetDim !== outDim) {
          throw new ValueError(
            `A target Tensor with shape ${y.shape} was passed for an output of shape ${shape}, while using a loss function that expects targets to have the same shape as the output.`
          );
        }
      }
    }
  }
}
function checkInputData(data, names, shapes, checkBatchAxis = true, exceptionPrefix = "") {
  let arrays;
  if (Array.isArray(data)) {
    if (data.length !== names.length) {
      throw new ValueError(
        `Error when checking model ${exceptionPrefix}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${names.length} Tensor(s), but instead got ${data.length} Tensors(s).`
      );
    }
    arrays = data;
  } else {
    if (names.length > 1) {
      throw new ValueError(
        `The model expects ${names.length} ${exceptionPrefix} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(data.shape)}.`
      );
    }
    arrays = [data];
  }
  if (shapes != null) {
    for (let i = 0; i < names.length; ++i) {
      if (shapes[i] == null) {
        continue;
      }
      const array = arrays[i];
      if (array.shape.length !== shapes[i].length) {
        throw new ValueError(
          `Error when checking ${exceptionPrefix}: expected ${names[i]} to have ${shapes[i].length} dimension(s), but got array with shape ${JSON.stringify(array.shape)}`
        );
      }
      for (let j = 0; j < shapes[i].length; ++j) {
        if (j === 0 && !checkBatchAxis) {
          continue;
        }
        const dim = array.shape[j];
        const refDim = shapes[i][j];
        if (refDim != null) {
          if (refDim !== dim) {
            throw new ValueError(
              `Error when checking ${exceptionPrefix}: expected ${names[i]} to have shape ${JSON.stringify(shapes[i])} but got array with shape ${JSON.stringify(array.shape)}.`
            );
          }
        }
      }
    }
  }
}
function collectMetrics(metrics, outputNames) {
  if (metrics == null || Array.isArray(metrics) && metrics.length === 0) {
    return outputNames.map((name) => []);
  }
  let wrappedMetrics;
  if (typeof metrics === "string" || typeof metrics === "function") {
    wrappedMetrics = [metrics];
  } else if (Array.isArray(metrics) || typeof metrics === "object") {
    wrappedMetrics = metrics;
  } else {
    throw new TypeError(
      `Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${metrics}`
    );
  }
  if (Array.isArray(wrappedMetrics)) {
    return outputNames.map(
      (name) => wrappedMetrics
    );
  } else {
    const nestedMetrics = [];
    for (const name of outputNames) {
      let outputMetrics = wrappedMetrics.hasOwnProperty(name) ? wrappedMetrics[name] : [];
      if (!Array.isArray(outputMetrics)) {
        outputMetrics = [outputMetrics];
      }
      nestedMetrics.push(outputMetrics);
    }
    return nestedMetrics;
  }
}
var LAYERS_MODEL_FORMAT_NAME = "layers-model";
var LayersModel = class extends Container {
  optimizer_;
  isOptimizerOwned;
  loss;
  lossFunctions;
  feedOutputShapes;
  feedLossFns;
  collectedTrainableWeights;
  testFunction;
  history;
  stopTraining_;
  isTraining;
  metrics;
  metricsNames;
  metricsTensors;
  userDefinedMetadata;
  constructor(args) {
    super(args);
    this.isTraining = false;
  }
  summary(lineLength, positions, printFn = console.log) {
    if (!this.built) {
      throw new ValueError(
        `This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).`
      );
    }
    printSummary(this, lineLength, positions, printFn);
  }
  compile(args) {
    if (args.loss == null) {
      args.loss = [];
    }
    this.loss = args.loss;
    if (typeof args.optimizer === "string") {
      this.optimizer_ = getOptimizer(args.optimizer);
      this.isOptimizerOwned = true;
    } else {
      if (!(args.optimizer instanceof Optimizer)) {
        throw new ValueError(
          `User-defined optimizer must be an instance of tf.Optimizer.`
        );
      }
      this.optimizer_ = args.optimizer;
      this.isOptimizerOwned = false;
    }
    let lossFunctions = [];
    if (!Array.isArray(args.loss) && typeof args.loss !== "string" && typeof args.loss !== "function") {
      args.loss = args.loss;
      for (const name in args.loss) {
        if (this.outputNames.indexOf(name) === -1) {
          throw new ValueError(
            `Unknown entry in loss dictionary: "${name}". Only expected the following keys: ${this.outputNames}`
          );
        }
      }
      for (const name of this.outputNames) {
        if (args.loss[name] == null) {
          console.warn(
            `Output "${name}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${name} during training`
          );
        }
        lossFunctions.push(get(args.loss[name]));
      }
    } else if (Array.isArray(args.loss)) {
      if (args.loss.length !== this.outputs.length) {
        throw new ValueError(
          `When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${args.loss}.`
        );
      }
      const theLosses = args.loss;
      lossFunctions = theLosses.map((l) => get(l));
    } else {
      const lossFunction = get(args.loss);
      this.outputs.forEach((_) => {
        lossFunctions.push(lossFunction);
      });
    }
    this.lossFunctions = lossFunctions;
    this.feedOutputNames = [];
    this.feedOutputShapes = [];
    this.feedLossFns = [];
    for (let i = 0; i < this.outputs.length; ++i) {
      const shape = this.internalOutputShapes[i];
      const name = this.outputNames[i];
      this.feedOutputNames.push(name);
      this.feedOutputShapes.push(shape);
      this.feedLossFns.push(this.lossFunctions[i]);
    }
    const skipTargetIndices = [];
    this.metrics = args.metrics;
    this.metricsNames = ["loss"];
    this.metricsTensors = [];
    nameScope("loss", () => {
      for (let i = 0; i < this.outputs.length; ++i) {
        if (skipTargetIndices.indexOf(i) !== -1) {
          continue;
        }
        const weightedLoss = this.lossFunctions[i];
        if (this.outputs.length > 1) {
          this.metricsTensors.push([weightedLoss, i]);
          this.metricsNames.push(this.outputNames[i] + "_loss");
        }
      }
    });
    const nestedMetrics = collectMetrics(args.metrics, this.outputNames);
    const appendMetric = (outputIndex, metricName, metricTensor) => {
      if (this.outputNames.length > 1) {
        metricName = this.outputNames[outputIndex] + "_" + metricName;
      }
      this.metricsNames.push(metricName);
      this.metricsTensors.push([metricTensor, outputIndex]);
    };
    nameScope("metric", () => {
      for (let i = 0; i < this.outputs.length; ++i) {
        if (skipTargetIndices.indexOf(i) !== -1) {
          continue;
        }
        const outputMetrics = nestedMetrics[i];
        const handleMetrics = (metrics) => {
          const metricNamePrefix = "";
          let metricName;
          let accFn;
          let weightedMetricFn;
          for (const metric of metrics) {
            if (typeof metric === "string" && ["accuracy", "acc", "crossentropy", "ce"].indexOf(metric) !== -1) {
              const outputShape = this.internalOutputShapes[i];
              if (outputShape[outputShape.length - 1] === 1 || this.lossFunctions[i] === binaryCrossentropy) {
                if (["accuracy", "acc"].indexOf(metric) !== -1) {
                  accFn = binaryAccuracy;
                } else if (["crossentropy", "ce"].indexOf(metric) !== -1) {
                  accFn = binaryCrossentropy2;
                }
              } else if (this.lossFunctions[i] === sparseCategoricalCrossentropy) {
                if (["accuracy", "acc"].indexOf(metric) !== -1) {
                  accFn = sparseCategoricalAccuracy;
                } else if (["crossentropy", "ce"].indexOf(metric) !== -1) {
                  accFn = sparseCategoricalCrossentropy2;
                }
              } else {
                if (["accuracy", "acc"].indexOf(metric) !== -1) {
                  accFn = categoricalAccuracy;
                } else if (["crossentropy", "ce"].indexOf(metric) !== -1) {
                  accFn = categoricalCrossentropy2;
                }
              }
              let suffix;
              if (["accuracy", "acc"].indexOf(metric) !== -1) {
                suffix = "acc";
              } else if (["crossentropy", "ce"].indexOf(metric) !== -1) {
                suffix = "ce";
              }
              weightedMetricFn = accFn;
              metricName = metricNamePrefix + suffix;
            } else {
              const metricFn = get2(metric);
              weightedMetricFn = metricFn;
              metricName = metricNamePrefix + getLossOrMetricName(metric);
            }
            let metricResult;
            nameScope(metricName, () => {
              metricResult = weightedMetricFn;
            });
            appendMetric(i, metricName, metricResult);
          }
        };
        handleMetrics(outputMetrics);
      }
    });
    this.collectedTrainableWeights = this.trainableWeights;
  }
  checkTrainableWeightsConsistency() {
    if (this.collectedTrainableWeights == null) {
      return;
    }
    if (this.trainableWeights.length !== this.collectedTrainableWeights.length) {
      console.warn(
        "Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?"
      );
    }
  }
  evaluate(x, y, args = {}) {
    const batchSize = args.batchSize == null ? 32 : args.batchSize;
    checkBatchSize(batchSize);
    const checkBatchAxis = true;
    const standardizedOuts = this.standardizeUserDataXY(x, y, checkBatchAxis, batchSize);
    try {
      const ins = standardizedOuts[0].concat(standardizedOuts[1]);
      this.makeTestFunction();
      const f = this.testFunction;
      const testOuts = this.testLoop(f, ins, batchSize, args.verbose, args.steps);
      return singletonOrArray(testOuts);
    } finally {
      disposeNewTensors(standardizedOuts[0], x);
      disposeNewTensors(standardizedOuts[1], y);
    }
  }
  async evaluateDataset(dataset, args) {
    this.makeTestFunction();
    return evaluateDataset(this, dataset, args);
  }
  checkNumSamples(ins, batchSize, steps, stepsName = "steps") {
    let numSamples;
    if (steps != null) {
      numSamples = null;
      if (batchSize != null) {
        throw new ValueError(
          `If ${stepsName} is set, batchSize must be null or undefined.Got batchSize = ${batchSize}`
        );
      }
    } else if (ins != null) {
      if (Array.isArray(ins)) {
        numSamples = ins[0].shape[0];
      } else {
        numSamples = ins.shape[0];
      }
    } else {
      throw new ValueError(
        `Either the input data should have a defined shape, or ${stepsName} shoud be specified.`
      );
    }
    return numSamples;
  }
  execute(inputs, outputs) {
    if (Array.isArray(outputs) && outputs.length === 0) {
      throw new ValueError(
        "`outputs` is an empty Array, which is not allowed."
      );
    }
    const outputsIsArray = Array.isArray(outputs);
    const outputNames = outputsIsArray ? outputs : [outputs];
    const outputSymbolicTensors = this.retrieveSymbolicTensors(outputNames);
    const feedDict = new FeedDict();
    if (inputs instanceof Tensor) {
      inputs = [inputs];
    }
    if (Array.isArray(inputs)) {
      if (inputs.length !== this.inputs.length) {
        throw new ValueError(
          `The number of inputs provided (${inputs.length}) does not match the number of inputs of this model (${this.inputs.length}).`
        );
      }
      for (let i = 0; i < this.inputs.length; ++i) {
        feedDict.add(this.inputs[i], inputs[i]);
      }
    } else {
      for (const input2 of this.inputs) {
        const tensorValue = inputs[input2.name];
        if (tensorValue == null) {
          throw new ValueError(
            `No value is provided for the model's input ${input2.name}`
          );
        }
        feedDict.add(input2, tensorValue);
      }
    }
    const executeOutputs = execute(outputSymbolicTensors, feedDict);
    return outputsIsArray ? executeOutputs : executeOutputs[0];
  }
  retrieveSymbolicTensors(symbolicTensorNames) {
    const outputSymbolicTensors = pyListRepeat(null, symbolicTensorNames.length);
    let outputsRemaining = symbolicTensorNames.length;
    for (const layer of this.layers) {
      const layerOutputs = Array.isArray(layer.output) ? layer.output : [layer.output];
      const layerOutputNames = layerOutputs.map((output) => output.name);
      for (let i = 0; i < symbolicTensorNames.length; ++i) {
        const index = layerOutputNames.indexOf(symbolicTensorNames[i]);
        if (index !== -1) {
          outputSymbolicTensors[i] = layerOutputs[index];
          outputsRemaining--;
        }
        if (outputsRemaining === 0) {
          break;
        }
      }
      if (outputsRemaining === 0) {
        break;
      }
    }
    if (outputsRemaining > 0) {
      const remainingNames = [];
      outputSymbolicTensors.forEach((tensor2, i) => {
        if (tensor2 == null) {
          remainingNames.push(symbolicTensorNames[i]);
        }
      });
      throw new ValueError(
        `Cannot find SymbolicTensors for output name(s): ${JSON.stringify(remainingNames)}`
      );
    }
    return outputSymbolicTensors;
  }
  predictLoop(ins, batchSize = 32, verbose = false) {
    return tidy(() => {
      const numSamples = this.checkNumSamples(ins);
      if (verbose) {
        throw new NotImplementedError(
          "Verbose predictLoop() is not implemented yet."
        );
      }
      const batches = makeBatches(numSamples, batchSize);
      const outsBatches = this.outputs.map((output) => []);
      for (let batchIndex = 0; batchIndex < batches.length; ++batchIndex) {
        const batchOuts = tidy(() => {
          const batchStart = batches[batchIndex][0];
          const batchEnd = batches[batchIndex][1];
          const insBatch = sliceArrays(ins, batchStart, batchEnd);
          const feeds = [];
          if (Array.isArray(insBatch)) {
            for (let i = 0; i < insBatch.length; ++i) {
              feeds.push({ key: this.inputs[i], value: insBatch[i] });
            }
          } else {
            feeds.push({ key: this.inputs[0], value: insBatch });
          }
          const feedDict = new FeedDict(feeds);
          return execute(this.outputs, feedDict);
        });
        batchOuts.forEach((batchOut, i) => outsBatches[i].push(batchOut));
      }
      return singletonOrArray(
        outsBatches.map((batches2) => concat(batches2, 0))
      );
    });
  }
  predict(x, args = {}) {
    const xsRank2OrHigher = ensureTensorsRank2OrHigher(x);
    checkInputData(
      xsRank2OrHigher,
      this.inputNames,
      this.feedInputShapes,
      false
    );
    try {
      const batchSize = args.batchSize == null ? 32 : args.batchSize;
      checkBatchSize(batchSize);
      return this.predictLoop(xsRank2OrHigher, batchSize);
    } finally {
      disposeNewTensors(xsRank2OrHigher, x);
    }
  }
  predictOnBatch(x) {
    checkInputData(x, this.inputNames, this.feedInputShapes, true);
    const batchSize = (Array.isArray(x) ? x[0] : x).shape[0];
    return this.predictLoop(x, batchSize);
  }
  standardizeUserDataXY(x, y, checkBatchAxis = true, batchSize) {
    if (this.optimizer_ == null) {
      throw new RuntimeError(
        "You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs)."
      );
    }
    const outputShapes = [];
    for (let i = 0; i < this.feedOutputShapes.length; ++i) {
      const outputShape = this.feedOutputShapes[i];
      const lossFn = this.feedLossFns[i];
      if (lossFn === sparseCategoricalCrossentropy) {
        outputShapes.push(
          outputShape.slice(0, outputShape.length - 1).concat([1])
        );
      } else {
        outputShapes.push(outputShape);
      }
    }
    x = standardizeInputData(
      x,
      this.feedInputNames,
      this.feedInputShapes,
      false,
      "input"
    );
    y = standardizeInputData(
      y,
      this.feedOutputNames,
      outputShapes,
      false,
      "target"
    );
    checkArrayLengths(x, y, null);
    checkLossAndTargetCompatibility(y, this.feedLossFns, this.feedOutputShapes);
    if (this.stateful && batchSize != null && batchSize > 0) {
      if (x[0].shape[0] % batchSize !== 0) {
        throw new ValueError(
          `In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${batchSize}. Found: ${x[0].shape[0]} sample(s).`
        );
      }
    }
    return [x, y];
  }
  async standardizeUserData(x, y, sampleWeight, classWeight, checkBatchAxis = true, batchSize) {
    const [standardXs, standardYs] = this.standardizeUserDataXY(x, y, checkBatchAxis, batchSize);
    if (sampleWeight != null) {
      throw new Error("sample weight is not supported yet.");
    }
    let standardSampleWeights = null;
    if (classWeight != null) {
      const classWeights = standardizeClassWeights(classWeight, this.outputNames);
      standardSampleWeights = [];
      for (let i = 0; i < classWeights.length; ++i) {
        standardSampleWeights.push(
          await standardizeWeights(standardYs[i], null, classWeights[i])
        );
      }
    }
    return [standardXs, standardYs, standardSampleWeights];
  }
  testLoop(f, ins, batchSize, verbose = 0, steps) {
    return tidy(() => {
      const numSamples = this.checkNumSamples(ins, batchSize, steps, "steps");
      const outs = [];
      if (verbose > 0) {
        throw new NotImplementedError("Verbose mode is not implemented yet.");
      }
      if (steps != null) {
        throw new NotImplementedError(
          "steps mode in testLoop() is not implemented yet"
        );
      } else {
        const batches = makeBatches(numSamples, batchSize);
        const indexArray = tensor1d(range2(0, numSamples));
        for (let batchIndex = 0; batchIndex < batches.length; ++batchIndex) {
          const batchStart = batches[batchIndex][0];
          const batchEnd = batches[batchIndex][1];
          const batchIds = sliceAlongFirstAxis(
            indexArray,
            batchStart,
            batchEnd - batchStart
          );
          const insBatch = sliceArraysByIndices(ins, batchIds);
          const batchOuts = f(insBatch);
          if (batchIndex === 0) {
            for (let i = 0; i < batchOuts.length; ++i) {
              outs.push(scalar(0));
            }
          }
          for (let i = 0; i < batchOuts.length; ++i) {
            const batchOut = batchOuts[i];
            outs[i] = add2(outs[i], mul(batchEnd - batchStart, batchOut));
          }
        }
        for (let i = 0; i < outs.length; ++i) {
          outs[i] = div(outs[i], numSamples);
        }
      }
      return outs;
    });
  }
  getDedupedMetricsNames() {
    const outLabels = this.metricsNames;
    const dedupedOutLabels = [];
    for (let i = 0; i < outLabels.length; ++i) {
      const label = outLabels[i];
      let newLabel = label;
      if (count(outLabels, label) > 1) {
        const dupIndex = count(outLabels.slice(0, i), label);
        newLabel += `_${dupIndex}`;
      }
      dedupedOutLabels.push(newLabel);
    }
    return dedupedOutLabels;
  }
  makeTrainFunction() {
    return (data) => {
      const lossValues = [];
      const inputs = data.slice(0, this.inputs.length);
      const targets = data.slice(
        this.inputs.length,
        this.inputs.length + this.outputs.length
      );
      const sampleWeights = data.slice(
        this.inputs.length + this.outputs.length,
        this.inputs.length + this.outputs.length * 2
      );
      const metricsValues = [];
      const totalLossFunction = () => {
        const feeds = [];
        for (let i = 0; i < this.inputs.length; ++i) {
          feeds.push({ key: this.inputs[i], value: inputs[i] });
        }
        const feedDict = new FeedDict(feeds);
        const outputs = execute(this.outputs, feedDict, { "training": true });
        let totalLoss;
        for (let i = 0; i < this.lossFunctions.length; ++i) {
          const lossFunction = this.lossFunctions[i];
          let loss = lossFunction(targets[i], outputs[i]);
          if (sampleWeights[i] != null) {
            loss = computeWeightedLoss2(loss, sampleWeights[i]);
          }
          const meanLoss = mean(loss);
          lossValues.push(meanLoss);
          if (i === 0) {
            totalLoss = loss;
          } else {
            totalLoss = add2(totalLoss, loss);
          }
        }
        for (let i = 0; i < this.metricsTensors.length; ++i) {
          let weightedMetric;
          if (this.outputs.length > 1 && i < this.outputs.length) {
            weightedMetric = lossValues[i];
          } else {
            const metric = this.metricsTensors[i][0];
            const outputIndex = this.metricsTensors[i][1];
            weightedMetric = mean(metric(targets[outputIndex], outputs[outputIndex]));
          }
          keep(weightedMetric);
          metricsValues.push(weightedMetric);
        }
        totalLoss = mean(totalLoss);
        this.calculateLosses().forEach((regularizerLoss) => {
          totalLoss = add2(totalLoss, regularizerLoss);
        });
        return totalLoss;
      };
      const variables = this.collectedTrainableWeights.map(
        (param) => param.read()
      );
      const returnCost = true;
      const totalLossValue = this.optimizer_.minimize(totalLossFunction, returnCost, variables);
      return [totalLossValue].concat(metricsValues);
    };
  }
  makeTestFunction() {
    this.testFunction = (data) => {
      return tidy(() => {
        const valOutputs = [];
        let totalLoss;
        const inputs = data.slice(0, this.inputs.length);
        const targets = data.slice(
          this.inputs.length,
          this.inputs.length + this.outputs.length
        );
        const feeds = [];
        for (let i = 0; i < this.inputs.length; ++i) {
          feeds.push({ key: this.inputs[i], value: inputs[i] });
        }
        const feedDict = new FeedDict(feeds);
        const outputs = execute(this.outputs, feedDict);
        for (let i = 0; i < this.lossFunctions.length; ++i) {
          const lossFunction = this.lossFunctions[i];
          const loss = mean(lossFunction(targets[i], outputs[i]));
          if (i === 0) {
            totalLoss = loss;
          } else {
            totalLoss = add2(totalLoss, loss);
          }
          valOutputs.push(totalLoss);
        }
        for (let i = 0; i < this.metricsTensors.length; ++i) {
          const metric = this.metricsTensors[i][0];
          const outputIndex = this.metricsTensors[i][1];
          const meanMetric = mean(metric(targets[outputIndex], outputs[outputIndex]));
          valOutputs.push(meanMetric);
        }
        return valOutputs;
      });
    };
  }
  async fit(x, y, args = {}) {
    return fitTensors(this, x, y, args);
  }
  async fitDataset(dataset, args) {
    return fitDataset(this, dataset, args);
  }
  async trainOnBatch(x, y) {
    const standardizeOut = await this.standardizeUserData(x, y);
    const inputs = standardizeOut[0];
    const targets = standardizeOut[1];
    const trainFunction = this.makeTrainFunction();
    const losses = trainFunction(inputs.concat(targets));
    const lossValues = [];
    for (const loss of losses) {
      const v = await loss.data();
      lossValues.push(v[0]);
    }
    dispose(losses);
    disposeNewTensors(standardizeOut[0], x);
    disposeNewTensors(standardizeOut[1], y);
    return singletonOrArray(lossValues);
  }
  getNamedWeights(config) {
    const namedWeights = [];
    const trainableOnly = config != null && config.trainableOnly;
    const weights = trainableOnly ? this.trainableWeights : this.weights;
    const weightValues = this.getWeights(trainableOnly);
    for (let i = 0; i < weights.length; ++i) {
      if (trainableOnly && !weights[i].trainable) {
        continue;
      }
      namedWeights.push(
        { name: weights[i].originalName, tensor: weightValues[i] }
      );
    }
    return namedWeights;
  }
  set stopTraining(stop) {
    this.stopTraining_ = stop;
  }
  get stopTraining() {
    return this.stopTraining_;
  }
  get optimizer() {
    return this.optimizer_;
  }
  set optimizer(optimizer) {
    if (this.optimizer_ !== optimizer) {
      this.optimizer_ = optimizer;
      this.isOptimizerOwned = false;
    }
  }
  dispose() {
    const result = super.dispose();
    if (result.refCountAfterDispose === 0 && this.optimizer != null && this.isOptimizerOwned) {
      const numTensorsBeforeOptmizerDisposal = memory().numTensors;
      this.optimizer_.dispose();
      result.numDisposedVariables += numTensorsBeforeOptmizerDisposal - memory().numTensors;
    }
    return result;
  }
  getLossIdentifiers() {
    let lossNames;
    if (typeof this.loss === "string") {
      lossNames = toSnakeCase(this.loss);
    } else if (Array.isArray(this.loss)) {
      for (const loss of this.loss) {
        if (typeof loss !== "string") {
          throw new Error("Serialization of non-string loss is not supported.");
        }
      }
      lossNames = this.loss.map((name) => toSnakeCase(name));
    } else {
      const outputNames = Object.keys(this.loss);
      lossNames = {};
      const losses = this.loss;
      for (const outputName of outputNames) {
        if (typeof losses[outputName] === "string") {
          lossNames[outputName] = toSnakeCase(losses[outputName]);
        } else {
          throw new Error("Serialization of non-string loss is not supported.");
        }
      }
    }
    return lossNames;
  }
  getMetricIdentifiers() {
    if (typeof this.metrics === "string" || typeof this.metrics === "function") {
      return [toSnakeCase(getLossOrMetricName(this.metrics))];
    } else if (Array.isArray(this.metrics)) {
      return this.metrics.map(
        (metric) => toSnakeCase(getLossOrMetricName(metric))
      );
    } else {
      const metricsIdentifiers = {};
      for (const key in this.metrics) {
        metricsIdentifiers[key] = toSnakeCase(getLossOrMetricName(this.metrics[key]));
      }
      return metricsIdentifiers;
    }
  }
  getTrainingConfig() {
    return {
      loss: this.getLossIdentifiers(),
      metrics: this.getMetricIdentifiers(),
      optimizer_config: {
        class_name: this.optimizer.getClassName(),
        config: this.optimizer.getConfig()
      }
    };
  }
  loadTrainingConfig(trainingConfig) {
    if (trainingConfig.weighted_metrics != null) {
      throw new Error("Loading weight_metrics is not supported yet.");
    }
    if (trainingConfig.loss_weights != null) {
      throw new Error("Loading loss_weights is not supported yet.");
    }
    if (trainingConfig.sample_weight_mode != null) {
      throw new Error("Loading sample_weight_mode is not supported yet.");
    }
    const tsConfig = convertPythonicToTs(trainingConfig.optimizer_config);
    const optimizer = deserialize(tsConfig);
    let loss;
    if (typeof trainingConfig.loss === "string") {
      loss = toCamelCase(trainingConfig.loss);
    } else if (Array.isArray(trainingConfig.loss)) {
      loss = trainingConfig.loss.map((lossEntry) => toCamelCase(lossEntry));
    } else if (trainingConfig.loss != null) {
      loss = {};
      for (const key in trainingConfig.loss) {
        loss[key] = toCamelCase(trainingConfig.loss[key]);
      }
    }
    let metrics;
    if (Array.isArray(trainingConfig.metrics)) {
      metrics = trainingConfig.metrics.map((metric) => toCamelCase(metric));
    } else if (trainingConfig.metrics != null) {
      metrics = {};
      for (const key in trainingConfig.metrics) {
        metrics[key] = toCamelCase(trainingConfig.metrics[key]);
      }
    }
    this.compile({ loss, metrics, optimizer });
  }
  async save(handlerOrURL, config) {
    if (typeof handlerOrURL === "string") {
      const handlers = io_exports.getSaveHandlers(handlerOrURL);
      if (handlers.length === 0) {
        throw new ValueError(
          `Cannot find any save handlers for URL '${handlerOrURL}'`
        );
      } else if (handlers.length > 1) {
        throw new ValueError(
          `Found more than one (${handlers.length}) save handlers for URL '${handlerOrURL}'`
        );
      }
      handlerOrURL = handlers[0];
    }
    if (handlerOrURL.save == null) {
      throw new ValueError(
        "LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined."
      );
    }
    const weightDataAndSpecs = await io_exports.encodeWeights(this.getNamedWeights(config));
    const returnString = false;
    const unusedArg = null;
    const modelConfig = this.toJSON(unusedArg, returnString);
    const modelArtifacts = {
      modelTopology: modelConfig,
      format: LAYERS_MODEL_FORMAT_NAME,
      generatedBy: `TensorFlow.js tfjs-layers v${version2}`,
      convertedBy: null
    };
    const includeOptimizer = config == null ? false : config.includeOptimizer;
    if (includeOptimizer && this.optimizer != null) {
      modelArtifacts.trainingConfig = this.getTrainingConfig();
      const weightType = "optimizer";
      const { data: optimizerWeightData, specs: optimizerWeightSpecs } = await io_exports.encodeWeights(await this.optimizer.getWeights(), weightType);
      weightDataAndSpecs.specs.push(...optimizerWeightSpecs);
      weightDataAndSpecs.data = io_exports.concatenateArrayBuffers(
        [weightDataAndSpecs.data, optimizerWeightData]
      );
    }
    if (this.userDefinedMetadata != null) {
      const checkSize = true;
      checkUserDefinedMetadata(this.userDefinedMetadata, this.name, checkSize);
      modelArtifacts.userDefinedMetadata = this.userDefinedMetadata;
    }
    modelArtifacts.weightData = weightDataAndSpecs.data;
    modelArtifacts.weightSpecs = weightDataAndSpecs.specs;
    return handlerOrURL.save(modelArtifacts);
  }
  setUserDefinedMetadata(userDefinedMetadata) {
    checkUserDefinedMetadata(userDefinedMetadata, this.name);
    this.userDefinedMetadata = userDefinedMetadata;
  }
  getUserDefinedMetadata() {
    return this.userDefinedMetadata;
  }
};
__publicField(LayersModel, "className", "Model");
serialization_exports.registerClass(LayersModel);
var Functional = class extends LayersModel {
};
__publicField(Functional, "className", "Functional");
serialization_exports.registerClass(Functional);

// src/tfjs-layers/src/models.ts
async function modelFromJSON(modelAndWeightsConfig, customObjects) {
  if (!("modelTopology" in modelAndWeightsConfig)) {
    modelAndWeightsConfig = { modelTopology: modelAndWeightsConfig };
  }
  modelAndWeightsConfig = modelAndWeightsConfig;
  let modelTopology = modelAndWeightsConfig.modelTopology;
  if (modelTopology["model_config"] != null) {
    modelTopology = modelTopology["model_config"];
  }
  const tsConfig = convertPythonicToTs(modelTopology);
  const model2 = deserialize(tsConfig, customObjects);
  if (modelAndWeightsConfig.weightsManifest != null) {
    const weightValues = await io_exports.loadWeights(
      modelAndWeightsConfig.weightsManifest,
      modelAndWeightsConfig.pathPrefix,
      model2.weights.map((weight) => weight.originalName)
    );
    const uniqueWeightValues = {};
    for (const weight of model2.weights) {
      uniqueWeightValues[weight.originalName] = weightValues[weight.originalName];
    }
    model2.loadWeights(uniqueWeightValues);
    dispose(weightValues);
  }
  return model2;
}
async function loadLayersModel(pathOrIOHandler, options) {
  if (options == null) {
    options = {};
  }
  if (typeof pathOrIOHandler === "string") {
    const handlers = io_exports.getLoadHandlers(pathOrIOHandler, options);
    if (handlers.length === 0) {
      handlers.push(io_exports.browserHTTPRequest(pathOrIOHandler, options));
    } else if (handlers.length > 1) {
      throw new ValueError(
        `Found more than one (${handlers.length}) load handlers for URL '${pathOrIOHandler}'`
      );
    }
    pathOrIOHandler = handlers[0];
  }
  return loadLayersModelFromIOHandler(pathOrIOHandler, void 0, options);
}
async function loadLayersModelFromIOHandler(handler, customObjects, options) {
  if (options == null) {
    options = {};
  }
  if (handler.load == null) {
    throw new ValueError(
      "Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented."
    );
  }
  const artifacts = await handler.load();
  let modelTopology = artifacts.modelTopology;
  if (modelTopology["model_config"] != null) {
    modelTopology = modelTopology["model_config"];
  }
  const strict = options.strict == null ? true : options.strict;
  const fastWeightInit = artifacts.weightData != null && artifacts.weightSpecs != null && strict;
  const model2 = deserialize(
    convertPythonicToTs(modelTopology),
    customObjects,
    fastWeightInit
  );
  const trainingConfig = artifacts.trainingConfig;
  if (trainingConfig != null) {
    model2.loadTrainingConfig(trainingConfig);
  }
  if (artifacts.userDefinedMetadata != null) {
    model2.setUserDefinedMetadata(artifacts.userDefinedMetadata);
  }
  if (artifacts.weightData != null) {
    if (artifacts.weightSpecs == null) {
      throw new ValueError(
        "LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed."
      );
    }
    const { modelWeights, optimizerWeights } = decodeModelAndOptimizerWeights(
      artifacts.weightData,
      artifacts.weightSpecs
    );
    model2.loadWeights(modelWeights, strict);
    if (model2.optimizer != null && optimizerWeights.length > 0) {
      await model2.optimizer.setWeights(optimizerWeights);
    }
    dispose(modelWeights);
    dispose(optimizerWeights.map((w) => w.tensor));
  }
  return model2;
}
function decodeModelAndOptimizerWeights(buffer2, specs) {
  const name2Tensor = io_exports.decodeWeights(buffer2, specs);
  const modelWeights = {};
  const optimizerWeights = [];
  specs.forEach((spec) => {
    if (spec.group === "optimizer") {
      optimizerWeights.push({ name: spec.name, tensor: name2Tensor[spec.name] });
    } else {
      modelWeights[spec.name] = name2Tensor[spec.name];
    }
  });
  return { modelWeights, optimizerWeights };
}
var _Sequential = class extends LayersModel {
  model;
  constructor(args) {
    super({ inputs: [], outputs: [] });
    args = args || {};
    this.trainable = true;
    this.built = false;
    this.name = args.name != null ? args.name : getUid("sequential_");
    if (args.layers != null) {
      for (const layer of args.layers) {
        this.add(layer);
      }
    }
  }
  checkShape(layer) {
    const shape = layer.inboundNodes[0].outputTensors[0].shape;
    if (shape.some((x) => x < 0)) {
      throw new ValueError(
        `Negative dimension size caused by adding layer ${layer.name} with input shape [${layer.inboundNodes[0].inputTensors[0].shape}]`
      );
    }
  }
  add(layer) {
    const isLayerModelInstance = layer instanceof _Sequential || layer instanceof LayersModel;
    let modelLayer;
    if (isLayerModelInstance) {
      modelLayer = layer;
      if (modelLayer.outputs.length !== 1) {
        throw new ValueError(
          "All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API."
        );
      }
      if (modelLayer.inputs.length !== 1) {
        throw new ValueError(
          "All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API."
        );
      }
    }
    if (this.outputs.length === 0) {
      if (layer.inboundNodes.length === 0) {
        if (layer.batchInputShape == null) {
          throw new ValueError(
            "The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument."
          );
        }
        const x = Input({
          batchShape: layer.batchInputShape,
          dtype: layer.dtype,
          name: layer.name + "_input"
        });
        layer.apply(x);
      }
      if (isLayerModelInstance) {
        this.outputs = modelLayer.outputs;
        this.inputs = modelLayer.inputs;
      } else {
        if (layer.inboundNodes.length !== 1) {
          throw new ValueError(
            `A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${layer.name} which has ${layer.inboundNodes.length} pre-existing inbound connections.`
          );
        }
        if (layer.inboundNodes[0].outputTensors.length !== 1) {
          throw new ValueError(
            "All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API."
          );
        }
        this.checkShape(layer);
        this.outputs = [layer.inboundNodes[0].outputTensors[0]];
        this.inputs = getSourceInputs(this.outputs[0]);
      }
      this.inboundNodes = [];
      new Node({
        outboundLayer: this,
        inboundLayers: [],
        nodeIndices: [],
        tensorIndices: [],
        inputTensors: this.inputs,
        outputTensors: this.outputs,
        inputMasks: pyListRepeat(null, this.inputs.length),
        outputMasks: [null],
        inputShapes: this.inputs.map((x) => x.shape),
        outputShapes: this.outputs[0].shape
      });
    } else {
      const outputTensor = layer.apply(this.outputs[0]);
      if (Array.isArray(outputTensor)) {
        throw new TypeError(
          "All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API."
        );
      }
      this.checkShape(layer);
      this.outputs = [outputTensor];
      this.inboundNodes[0].outputTensors = this.outputs;
      this.inboundNodes[0].outputShapes = [this.outputs[0].shape];
    }
    this.layers.push(layer);
    this.built = false;
  }
  pop() {
    if (this.layers.length === 0) {
      throw new TypeError("There are no layers in the model.");
    }
    this.layers.pop();
    if (this.layers.length === 0) {
      this.outputs = [];
      this.inboundNodes = [];
      this.outboundNodes = [];
    } else {
      const lastLayerIndex = this.layers.length - 1;
      this.layers[lastLayerIndex].outboundNodes = [];
      this.outputs = [this.layers[lastLayerIndex].output];
      this.inboundNodes[0].outputTensors = this.outputs;
      this.inboundNodes[0].outputShapes = [this.outputs[0].shape];
    }
  }
  call(inputs, kwargs) {
    if (this.model == null) {
      this.build();
    }
    return this.model.call(inputs, kwargs);
  }
  build(inputShape) {
    getExactlyOneShape(inputShape);
    if (this.inputs.length === 0 || this.outputs.length === 0) {
      throw new TypeError(
        "Sequential model cannot be built: model is empty. Add some layers first."
      );
    }
    this.model = new LayersModel({
      inputs: this.inputs,
      outputs: this.outputs[0],
      name: this.name + "_model"
    });
    this.model.trainable = this.trainable;
    this.supportsMasking = this.model.supportsMasking;
    this.inputLayers = this.model.inputLayers;
    this.inputLayersNodeIndices = this.model.inputLayersNodeIndices;
    this.inputLayersTensorIndices = this.model.inputLayersTensorIndices;
    this.outputLayers = this.model.outputLayers;
    this.outputLayersNodeIndices = this.model.outputLayersNodeIndices;
    this.outputLayersTensorIndices = this.model.outputLayersTensorIndices;
    this.nodesByDepth = this.model.nodesByDepth;
    this.containerNodes = this.model.containerNodes;
    this.outputNames = this.model.outputNames;
    this.inputNames = this.model.inputNames;
    this.built = true;
  }
  countParams() {
    if (!this.built) {
      this.build();
    }
    return super.countParams();
  }
  summary(lineLength, positions, printFn = console.log) {
    if (!this.built) {
      this.build();
    }
    super.summary(lineLength, positions, printFn);
  }
  setWeights(weights) {
    if (this.model == null) {
      this.build();
    }
    this.model.setWeights(weights);
  }
  evaluate(x, y, args = {}) {
    if (!this.built) {
      throw new RuntimeError(
        "The model needs to be compiled before being used."
      );
    }
    return this.model.evaluate(x, y, args);
  }
  async evaluateDataset(dataset, args) {
    if (!this.built) {
      throw new RuntimeError(
        "The model needs to be compiled before being used."
      );
    }
    return this.model.evaluateDataset(dataset, args);
  }
  predict(x, args = {}) {
    if (this.model == null) {
      this.build();
    }
    return this.model.predict(x, args);
  }
  predictOnBatch(x) {
    if (this.model == null) {
      this.build();
    }
    return this.model.predictOnBatch(x);
  }
  compile(args) {
    this.build();
    this.model.compile(args);
    this.optimizer_ = this.model.optimizer;
    this.isOptimizerOwned = this.model.isOptimizerOwned;
    this.loss = this.model.loss;
    this.metrics = this.model.metrics;
    this.metricsTensors = this.model.metricsTensors;
    this.metricsNames = this.model.metricsNames;
  }
  get optimizer() {
    return this.model == null ? void 0 : this.model.optimizer;
  }
  set optimizer(optimizer) {
    this.model.optimizer = optimizer;
  }
  async fit(x, y, args = {}) {
    if (!this.built) {
      throw new RuntimeError(
        "The model needs to be compiled before being used."
      );
    }
    return this.model.fit(x, y, args);
  }
  async fitDataset(dataset, args) {
    if (!this.built) {
      throw new RuntimeError(
        "The model needs to be compiled before being used."
      );
    }
    return this.model.fitDataset(dataset, args);
  }
  async trainOnBatch(x, y) {
    return this.model.trainOnBatch(x, y);
  }
  static fromConfig(cls, config, customObjects = {}, fastWeightInit = false) {
    let configArray;
    let extraModelConfig = {};
    if (config instanceof Array) {
      if (!(config[0].className != null) || config[0]["className"] === "Merge") {
        throw new ValueError("Legacy serialization format not supported yet.");
      }
      configArray = config;
    } else {
      util_exports.assert(
        config["layers"] != null,
        () => `When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field.`
      );
      configArray = config["layers"];
      delete config["layers"];
      extraModelConfig = config;
    }
    const model2 = new cls(extraModelConfig);
    if (!(model2 instanceof _Sequential)) {
      throw new NotImplementedError(
        `Sequential.fromConfig called on non-Sequential input: ${model2}`
      );
    }
    for (const conf of configArray) {
      const customObjects2 = void 0;
      const layer = deserialize(
        conf,
        customObjects2,
        fastWeightInit
      );
      if (fastWeightInit) {
        layer.setFastWeightInitDuringBuild(true);
      }
      model2.add(layer);
    }
    return model2;
  }
  set stopTraining(stop) {
    if (this.model == null) {
      throw new ValueError(
        "Cannot set the stopTraining property of a sequential model before it is compiled."
      );
    }
    this.model.stopTraining = stop;
  }
  get stopTraining() {
    if (this.model == null) {
      throw new ValueError(
        "Cannot get the stopTraining property of a sequential model before it is compiled."
      );
    }
    return this.model.stopTraining;
  }
  getConfig() {
    const layers = [];
    for (const layer of this.layers) {
      const dict = {};
      dict["className"] = layer.getClassName();
      dict["config"] = layer.getConfig();
      layers.push(dict);
    }
    return { name: this.name, layers };
  }
};
var Sequential = _Sequential;
__publicField(Sequential, "className", "Sequential");
serialization_exports.registerClass(Sequential);

// src/tfjs-layers/src/exports.ts
function model(args) {
  return new LayersModel(args);
}
function sequential(config) {
  return new Sequential(config);
}
function input(config) {
  return Input(config);
}
function registerCallbackConstructor(verbosityLevel, callbackConstructor) {
  CallbackConstructorRegistry.registerCallbackConstructor(
    verbosityLevel,
    callbackConstructor
  );
}

// src/tfjs-layers/src/activations.ts
var Activation2 = class extends serialization_exports.Serializable {
  getConfig() {
    return {};
  }
};
var Elu2 = class extends Activation2 {
  apply(x, alpha = 1) {
    return elu2(x, alpha);
  }
};
__publicField(Elu2, "className", "elu");
serialization_exports.registerClass(Elu2);
var Selu2 = class extends Activation2 {
  apply(x) {
    return selu(x);
  }
};
__publicField(Selu2, "className", "selu");
serialization_exports.registerClass(Selu2);
var Relu2 = class extends Activation2 {
  apply(x) {
    return relu(x);
  }
};
__publicField(Relu2, "className", "relu");
serialization_exports.registerClass(Relu2);
var Relu62 = class extends Activation2 {
  apply(x) {
    return tidy(() => minimum(6, relu(x)));
  }
};
__publicField(Relu62, "className", "relu6");
serialization_exports.registerClass(Relu62);
var Linear = class extends Activation2 {
  apply(x) {
    return x;
  }
};
__publicField(Linear, "className", "linear");
serialization_exports.registerClass(Linear);
var Sigmoid2 = class extends Activation2 {
  apply(x) {
    return sigmoid(x);
  }
};
__publicField(Sigmoid2, "className", "sigmoid");
serialization_exports.registerClass(Sigmoid2);
var HardSigmoid = class extends Activation2 {
  apply(x) {
    return hardSigmoid(x);
  }
};
__publicField(HardSigmoid, "className", "hardSigmoid");
serialization_exports.registerClass(HardSigmoid);
var Softplus2 = class extends Activation2 {
  apply(x) {
    return softplus(x);
  }
};
__publicField(Softplus2, "className", "softplus");
serialization_exports.registerClass(Softplus2);
var Softsign = class extends Activation2 {
  apply(x) {
    return softsign(x);
  }
};
__publicField(Softsign, "className", "softsign");
serialization_exports.registerClass(Softsign);
var Tanh2 = class extends Activation2 {
  apply(x) {
    return tanh2(x);
  }
};
__publicField(Tanh2, "className", "tanh");
serialization_exports.registerClass(Tanh2);
var Softmax2 = class extends Activation2 {
  apply(x, axis = -1) {
    return softmax(x, axis);
  }
};
__publicField(Softmax2, "className", "softmax");
serialization_exports.registerClass(Softmax2);
var LogSoftmax2 = class extends Activation2 {
  apply(x, axis = -1) {
    return logSoftmax(x, axis);
  }
};
__publicField(LogSoftmax2, "className", "logSoftmax");
serialization_exports.registerClass(LogSoftmax2);
var Swish = class extends Activation2 {
  apply(x, alpha = 1) {
    return tidy(() => mul(sigmoid(mul(x, alpha)), x));
  }
};
__publicField(Swish, "className", "swish");
serialization_exports.registerClass(Swish);
var Mish = class extends Activation2 {
  apply(x) {
    return tidy(() => mul(x, tanh2(softplus(x))));
  }
};
__publicField(Mish, "className", "mish");
serialization_exports.registerClass(Mish);
function serializeActivation(activation2) {
  return activation2.getClassName();
}
function deserializeActivation(config, customObjects = {}) {
  return deserializeKerasObject(
    config,
    serialization_exports.SerializationMap.getMap().classNameMap,
    customObjects,
    "activation"
  );
}
function getActivation(identifier) {
  if (identifier == null) {
    const config = {};
    config["className"] = "linear";
    config["config"] = {};
    return deserializeActivation(config);
  }
  if (typeof identifier === "string") {
    const config = {};
    config["className"] = identifier;
    config["config"] = {};
    return deserializeActivation(config);
  } else if (identifier instanceof Activation2) {
    return identifier;
  } else {
    return deserializeActivation(identifier);
  }
}

// src/tfjs-layers/src/regularizers.ts
function assertObjectArgs(args) {
  if (args != null && typeof args !== "object") {
    throw new Error(
      `Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${args}`
    );
  }
}
var Regularizer = class extends serialization_exports.Serializable {
};
var L1L2 = class extends Regularizer {
  l1;
  l2;
  hasL1;
  hasL2;
  constructor(args) {
    super();
    assertObjectArgs(args);
    this.l1 = args == null || args.l1 == null ? 0.01 : args.l1;
    this.l2 = args == null || args.l2 == null ? 0.01 : args.l2;
    this.hasL1 = this.l1 !== 0;
    this.hasL2 = this.l2 !== 0;
  }
  apply(x) {
    return tidy(() => {
      let regularization = zeros([1]);
      if (this.hasL1) {
        regularization = add2(regularization, sum2(mul(this.l1, abs(x))));
      }
      if (this.hasL2) {
        regularization = add2(regularization, sum2(mul(this.l2, square2(x))));
      }
      return reshape(regularization, []);
    });
  }
  getConfig() {
    return { "l1": this.l1, "l2": this.l2 };
  }
  static fromConfig(cls, config) {
    return new cls({ l1: config["l1"], l2: config["l2"] });
  }
};
__publicField(L1L2, "className", "L1L2");
serialization_exports.registerClass(L1L2);
function l1(args) {
  assertObjectArgs(args);
  return new L1L2({ l1: args != null ? args.l1 : null, l2: 0 });
}
function l2(args) {
  assertObjectArgs(args);
  return new L1L2({ l2: args != null ? args.l2 : null, l1: 0 });
}
var REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
  "l1l2": "L1L2"
};
function serializeRegularizer(constraint) {
  return serializeKerasObject(constraint);
}
function deserializeRegularizer(config, customObjects = {}) {
  return deserializeKerasObject(
    config,
    serialization_exports.SerializationMap.getMap().classNameMap,
    customObjects,
    "regularizer"
  );
}
function getRegularizer(identifier) {
  if (identifier == null) {
    return null;
  }
  if (typeof identifier === "string") {
    const className = identifier in REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ? REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] : identifier;
    const config = { className, config: {} };
    return deserializeRegularizer(config);
  } else if (identifier instanceof Regularizer) {
    return identifier;
  } else {
    return deserializeRegularizer(identifier);
  }
}

// src/tfjs-layers/src/layers/advanced_activations.ts
var ReLU = class extends Layer {
  maxValue;
  constructor(args) {
    super(args == null ? {} : args);
    this.supportsMasking = true;
    if (args != null) {
      this.maxValue = args.maxValue;
    }
  }
  call(inputs, kwargs) {
    inputs = getExactlyOneTensor(inputs);
    let output = relu(inputs);
    if (this.maxValue != null) {
      output = clipByValue(output, 0, this.maxValue);
    }
    return output;
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const config = { maxValue: this.maxValue };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(ReLU, "className", "ReLU");
serialization_exports.registerClass(ReLU);
var LeakyReLU = class extends Layer {
  alpha;
  DEFAULT_ALPHA = 0.3;
  constructor(args) {
    super(args == null ? {} : args);
    if (args == null) {
      args = {};
    }
    this.alpha = args.alpha == null ? this.DEFAULT_ALPHA : args.alpha;
  }
  call(inputs, kwargs) {
    const x = getExactlyOneTensor(inputs);
    return leakyRelu(x, this.alpha);
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const config = { alpha: this.alpha };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(LeakyReLU, "className", "LeakyReLU");
serialization_exports.registerClass(LeakyReLU);
var PReLU = class extends Layer {
  alphaInitializer;
  alphaRegularizer;
  alphaConstraint;
  sharedAxes;
  alpha;
  DEFAULT_ALPHA_INITIALIZER = "zeros";
  constructor(args) {
    super(args == null ? {} : args);
    if (args == null) {
      args = {};
    }
    this.supportsMasking = true;
    this.alphaInitializer = getInitializer(args.alphaInitializer || this.DEFAULT_ALPHA_INITIALIZER);
    this.alphaRegularizer = getRegularizer(args.alphaRegularizer);
    this.alphaConstraint = getConstraint(args.alphaConstraint);
    if (args.sharedAxes == null) {
      this.sharedAxes = null;
    } else if (Array.isArray(args.sharedAxes)) {
      this.sharedAxes = args.sharedAxes;
    } else if (typeof args.sharedAxes === "number") {
      this.sharedAxes = [args.sharedAxes];
    } else {
      throw new ValueError(
        `Expected sharedAxes to be a number or an array of numbers, but got ${args.sharedAxes}`
      );
    }
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const paramShape = inputShape.slice(1);
    if (this.sharedAxes != null) {
      for (const i of this.sharedAxes) {
        paramShape[i - 1] = 1;
      }
    }
    this.alpha = this.addWeight(
      "alpha",
      paramShape,
      "float32",
      this.alphaInitializer,
      this.alphaRegularizer,
      true,
      this.alphaConstraint
    );
    const axes = {};
    if (this.sharedAxes != null) {
      for (let i = 1; i < inputShape.length; ++i) {
        axes[i] = inputShape[i];
      }
    }
    this.inputSpec = [new InputSpec({
      ndim: inputShape.length,
      axes
    })];
    this.built = true;
  }
  call(inputs, kwargs) {
    inputs = getExactlyOneTensor(inputs);
    return prelu(inputs, this.alpha.read());
  }
  getConfig() {
    const config = {
      alphaInitializer: serializeInitializer(this.alphaInitializer),
      alphaRegularizer: serializeRegularizer(this.alphaRegularizer),
      alphaConstraint: serializeConstraint(this.alphaConstraint),
      sharedAxes: this.sharedAxes
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(PReLU, "className", "PReLU");
serialization_exports.registerClass(PReLU);
var ELU = class extends Layer {
  alpha;
  DEFAULT_ALPHA = 1;
  constructor(args) {
    super(args == null ? {} : args);
    if (args == null) {
      args = {};
    }
    if (args.alpha != null && args.alpha !== this.DEFAULT_ALPHA) {
      throw new NotImplementedError(
        `Non-default alpha value (${args.alpha}) is not supported by the ELU layer yet.`
      );
    }
    this.alpha = args.alpha == null ? this.DEFAULT_ALPHA : args.alpha;
  }
  call(inputs, kwargs) {
    const x = getExactlyOneTensor(inputs);
    return elu(x);
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const config = { alpha: this.alpha };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(ELU, "className", "ELU");
serialization_exports.registerClass(ELU);
var ThresholdedReLU = class extends Layer {
  theta;
  DEFAULT_THETA = 1;
  constructor(args) {
    super(args == null ? {} : args);
    if (args == null) {
      args = {};
    }
    this.theta = args.theta == null ? this.DEFAULT_THETA : args.theta;
  }
  call(inputs, kwargs) {
    const x = getExactlyOneTensor(inputs);
    return mul(x, cast(greater(x, this.theta), "float32"));
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const config = { theta: this.theta };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(ThresholdedReLU, "className", "ThresholdedReLU");
serialization_exports.registerClass(ThresholdedReLU);
var Softmax3 = class extends Layer {
  axis;
  softmax;
  DEFAULT_AXIS = 1;
  constructor(args) {
    super(args == null ? {} : args);
    if (args == null) {
      args = {};
    }
    this.softmax = new Softmax2().apply;
    this.axis = args.axis == null ? this.DEFAULT_AXIS : args.axis;
  }
  call(inputs, kwargs) {
    const x = getExactlyOneTensor(inputs);
    return this.softmax(x, this.axis);
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const config = { axis: this.axis };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Softmax3, "className", "Softmax");
serialization_exports.registerClass(Softmax3);

// src/tfjs-layers/src/utils/conv_utils.ts
function normalizeArray(value, n, name) {
  if (typeof value === "number") {
    return pyListRepeat(value, n);
  } else {
    if (value.length !== n) {
      throw new ValueError(
        `The ${name} argument must be an integer or tuple of ${n} integers. Received: ${value.length} elements.`
      );
    }
    for (let i = 0; i < n; ++i) {
      const singleValue = value[i];
      if (!isInteger(singleValue)) {
        throw new ValueError(
          `The ${name} argument must be an integer or tuple of ${n} integers. Received: ${JSON.stringify(value)} including a non-integer number ${singleValue}`
        );
      }
    }
    return value;
  }
}
function convOutputLength(inputLength, filterSize, padding, stride, dilation = 1) {
  if (inputLength == null) {
    return inputLength;
  }
  const dilatedFilterSize = filterSize + (filterSize - 1) * (dilation - 1);
  let outputLength;
  if (padding === "same") {
    outputLength = inputLength;
  } else {
    outputLength = inputLength - dilatedFilterSize + 1;
  }
  return Math.floor((outputLength + stride - 1) / stride);
}
function deconvLength(dimSize, strideSize, kernelSize, padding) {
  if (dimSize == null) {
    return null;
  }
  if (padding === "valid") {
    dimSize = dimSize * strideSize + max2([kernelSize - strideSize, 0]);
  } else if (padding === "same") {
    dimSize = dimSize * strideSize;
  } else {
    throw new ValueError(`Unsupport padding mode: ${padding}.`);
  }
  return dimSize;
}

// src/tfjs-layers/src/layers/convolutional.ts
function preprocessConv2DInput(x, dataFormat) {
  return tidy(() => {
    checkDataFormat(dataFormat);
    if (dataFormat === "channelsFirst") {
      return transpose(x, [0, 2, 3, 1]);
    } else {
      return x;
    }
  });
}
function preprocessConv3DInput(x, dataFormat) {
  return tidy(() => {
    checkDataFormat(dataFormat);
    if (dataFormat === "channelsFirst") {
      return transpose(x, [0, 2, 3, 4, 1]);
    } else {
      return x;
    }
  });
}
function conv1dWithBias(x, kernel, bias, strides = 1, padding = "valid", dataFormat, dilationRate = 1) {
  return tidy(() => {
    if (dataFormat == null) {
      dataFormat = imageDataFormat();
    }
    checkDataFormat(dataFormat);
    if (x.shape.length !== 3) {
      throw new ValueError(
        `The input of a conv1dWithBias operation should be 3, but is ${x.shape.length} instead.`
      );
    }
    if (kernel.shape.length !== 3) {
      throw new ValueError(
        `The kernel for a conv1dWithBias operation should be 3, but is ${kernel.shape.length} instead`
      );
    }
    if (bias != null && bias.shape.length !== 1) {
      throw new ValueError(
        `The bias for a conv1dWithBias operation should be 1, but is ${kernel.shape.length} instead`
      );
    }
    if (dataFormat === "channelsFirst") {
      x = transpose(x, [0, 2, 1]);
    }
    if (padding === "causal") {
      throw new NotImplementedError(
        "The support for CAUSAL padding mode in conv1dWithBias is not implemented yet."
      );
    }
    let y = conv1d(
      x,
      kernel,
      strides,
      padding === "same" ? "same" : "valid",
      "NWC",
      dilationRate
    );
    if (bias != null) {
      y = biasAdd(y, bias);
    }
    return y;
  });
}
function conv2dWithBiasActivation(x, kernel, bias, strides = [1, 1], padding = "valid", dataFormat, dilationRate, activation2 = null) {
  return tidy(() => {
    if (dataFormat == null) {
      dataFormat = imageDataFormat();
    }
    checkDataFormat(dataFormat);
    if (x.rank !== 3 && x.rank !== 4) {
      throw new ValueError(
        `conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${x.rank}.`
      );
    }
    if (kernel.rank !== 3 && kernel.rank !== 4) {
      throw new ValueError(
        `conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${x.rank}.`
      );
    }
    let y = preprocessConv2DInput(x, dataFormat);
    if (padding === "causal") {
      throw new NotImplementedError(
        "The support for CAUSAL padding mode in conv1dWithBias is not implemented yet."
      );
    }
    y = fused_ops_exports.conv2d({
      x: y,
      filter: kernel,
      strides,
      pad: padding === "same" ? "same" : "valid",
      dilations: dilationRate,
      dataFormat: "NHWC",
      bias,
      activation: activation2
    });
    if (dataFormat === "channelsFirst") {
      y = transpose(y, [0, 3, 1, 2]);
    }
    return y;
  });
}
function conv3dWithBias(x, kernel, bias, strides = [1, 1, 1], padding = "valid", dataFormat, dilationRate) {
  return tidy(() => {
    if (dataFormat == null) {
      dataFormat = imageDataFormat();
    }
    checkDataFormat(dataFormat);
    if (x.rank !== 4 && x.rank !== 5) {
      throw new ValueError(
        `conv3dWithBias expects input to be of rank 4 or 5, but received ${x.rank}.`
      );
    }
    if (kernel.rank !== 4 && kernel.rank !== 5) {
      throw new ValueError(
        `conv3dWithBias expects kernel to be of rank 4 or 5, but received ${x.rank}.`
      );
    }
    let y = preprocessConv3DInput(x, dataFormat);
    if (padding === "causal") {
      throw new NotImplementedError(
        "The support for CAUSAL padding mode in conv3dWithBias is not implemented yet."
      );
    }
    y = conv3d(
      y,
      kernel,
      strides,
      padding === "same" ? "same" : "valid",
      "NDHWC",
      dilationRate
    );
    if (bias != null) {
      y = biasAdd(y, bias);
    }
    if (dataFormat === "channelsFirst") {
      y = transpose(y, [0, 4, 1, 2, 3]);
    }
    return y;
  });
}
var BaseConv = class extends Layer {
  rank;
  kernelSize;
  strides;
  padding;
  dataFormat;
  activation;
  useBias;
  dilationRate;
  biasInitializer;
  biasConstraint;
  biasRegularizer;
  bias = null;
  DEFAULT_KERNEL_INITIALIZER = "glorotNormal";
  DEFAULT_BIAS_INITIALIZER = "zeros";
  constructor(rank, args) {
    super(args);
    BaseConv.verifyArgs(args);
    this.rank = rank;
    assertPositiveInteger(this.rank, "rank");
    if (this.rank !== 1 && this.rank !== 2 && this.rank !== 3) {
      throw new NotImplementedError(
        `Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`
      );
    }
    this.kernelSize = normalizeArray(args.kernelSize, rank, "kernelSize");
    this.strides = normalizeArray(
      args.strides == null ? 1 : args.strides,
      rank,
      "strides"
    );
    this.padding = args.padding == null ? "valid" : args.padding;
    checkPaddingMode(this.padding);
    this.dataFormat = args.dataFormat == null ? "channelsLast" : args.dataFormat;
    checkDataFormat(this.dataFormat);
    this.activation = getActivation(args.activation);
    this.useBias = args.useBias == null ? true : args.useBias;
    this.biasInitializer = getInitializer(args.biasInitializer || this.DEFAULT_BIAS_INITIALIZER);
    this.biasConstraint = getConstraint(args.biasConstraint);
    this.biasRegularizer = getRegularizer(args.biasRegularizer);
    this.activityRegularizer = getRegularizer(args.activityRegularizer);
    this.dilationRate = normalizeArray(
      args.dilationRate == null ? 1 : args.dilationRate,
      rank,
      "dilationRate"
    );
    if (this.rank === 1 && (Array.isArray(this.dilationRate) && this.dilationRate.length !== 1)) {
      throw new ValueError(
        `dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`
      );
    } else if (this.rank === 2) {
      if (typeof this.dilationRate === "number") {
        this.dilationRate = [this.dilationRate, this.dilationRate];
      } else if (this.dilationRate.length !== 2) {
        throw new ValueError(
          `dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`
        );
      }
    } else if (this.rank === 3) {
      if (typeof this.dilationRate === "number") {
        this.dilationRate = [this.dilationRate, this.dilationRate, this.dilationRate];
      } else if (this.dilationRate.length !== 3) {
        throw new ValueError(
          `dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`
        );
      }
    }
  }
  static verifyArgs(args) {
    assert2(
      "kernelSize" in args,
      `required key 'kernelSize' not in config`
    );
    if (typeof args.kernelSize !== "number" && !checkArrayTypeAndLength(
      args.kernelSize,
      "number",
      1,
      3
    )) {
      throw new ValueError(
        `BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(args.kernelSize)}.`
      );
    }
  }
  getConfig() {
    const config = {
      kernelSize: this.kernelSize,
      strides: this.strides,
      padding: this.padding,
      dataFormat: this.dataFormat,
      dilationRate: this.dilationRate,
      activation: serializeActivation(this.activation),
      useBias: this.useBias,
      biasInitializer: serializeInitializer(this.biasInitializer),
      biasRegularizer: serializeRegularizer(this.biasRegularizer),
      activityRegularizer: serializeRegularizer(this.activityRegularizer),
      biasConstraint: serializeConstraint(this.biasConstraint)
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
var Conv = class extends BaseConv {
  filters;
  kernel = null;
  kernelInitializer;
  kernelConstraint;
  kernelRegularizer;
  constructor(rank, args) {
    super(rank, args);
    Conv.verifyArgs(args);
    this.filters = args.filters;
    assertPositiveInteger(this.filters, "filters");
    this.kernelInitializer = getInitializer(
      args.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
    );
    this.kernelConstraint = getConstraint(args.kernelConstraint);
    this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const channelAxis = this.dataFormat === "channelsFirst" ? 1 : inputShape.length - 1;
    if (inputShape[channelAxis] == null) {
      throw new ValueError(
        `The channel dimension of the input should be defined. Found ${inputShape[channelAxis]}`
      );
    }
    const inputDim = inputShape[channelAxis];
    const kernelShape = this.kernelSize.concat([inputDim, this.filters]);
    this.kernel = this.addWeight(
      "kernel",
      kernelShape,
      null,
      this.kernelInitializer,
      this.kernelRegularizer,
      true,
      this.kernelConstraint
    );
    if (this.useBias) {
      this.bias = this.addWeight(
        "bias",
        [this.filters],
        null,
        this.biasInitializer,
        this.biasRegularizer,
        true,
        this.biasConstraint
      );
    }
    this.inputSpec = [{ ndim: this.rank + 2, axes: { [channelAxis]: inputDim } }];
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = getExactlyOneTensor(inputs);
      let outputs;
      const biasValue = this.bias == null ? null : this.bias.read();
      const fusedActivationName = mapActivationToFusedKernel(
        this.activation.getClassName()
      );
      if (fusedActivationName != null && this.rank === 2) {
        outputs = conv2dWithBiasActivation(
          inputs,
          this.kernel.read(),
          biasValue,
          this.strides,
          this.padding,
          this.dataFormat,
          this.dilationRate,
          fusedActivationName
        );
      } else {
        if (this.rank === 1) {
          outputs = conv1dWithBias(
            inputs,
            this.kernel.read(),
            biasValue,
            this.strides[0],
            this.padding,
            this.dataFormat,
            this.dilationRate[0]
          );
        } else if (this.rank === 2) {
          outputs = conv2dWithBiasActivation(
            inputs,
            this.kernel.read(),
            biasValue,
            this.strides,
            this.padding,
            this.dataFormat,
            this.dilationRate
          );
        } else if (this.rank === 3) {
          outputs = conv3dWithBias(
            inputs,
            this.kernel.read(),
            biasValue,
            this.strides,
            this.padding,
            this.dataFormat,
            this.dilationRate
          );
        } else {
          throw new NotImplementedError(
            "convolutions greater than 3D are not implemented yet."
          );
        }
        if (this.activation != null) {
          outputs = this.activation.apply(outputs);
        }
      }
      return outputs;
    });
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const newSpace = [];
    const space = this.dataFormat === "channelsLast" ? inputShape.slice(1, inputShape.length - 1) : inputShape.slice(2);
    for (let i = 0; i < space.length; ++i) {
      const newDim = convOutputLength(
        space[i],
        this.kernelSize[i],
        this.padding,
        this.strides[i],
        typeof this.dilationRate === "number" ? this.dilationRate : this.dilationRate[i]
      );
      newSpace.push(newDim);
    }
    let outputShape = [inputShape[0]];
    if (this.dataFormat === "channelsLast") {
      outputShape = outputShape.concat(newSpace);
      outputShape.push(this.filters);
    } else {
      outputShape.push(this.filters);
      outputShape = outputShape.concat(newSpace);
    }
    return outputShape;
  }
  getConfig() {
    const config = {
      filters: this.filters,
      kernelInitializer: serializeInitializer(this.kernelInitializer),
      kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
      kernelConstraint: serializeConstraint(this.kernelConstraint)
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
  static verifyArgs(args) {
    if (!("filters" in args) || typeof args.filters !== "number" || args.filters < 1) {
      throw new ValueError(
        `Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(args.filters)}`
      );
    }
  }
};
var _Conv2D = class extends Conv {
  constructor(args) {
    super(2, args);
    _Conv2D.verifyArgs(args);
  }
  getConfig() {
    const config = super.getConfig();
    delete config["rank"];
    return config;
  }
  static verifyArgs(args) {
    if (typeof args.kernelSize !== "number" && !checkArrayTypeAndLength(
      args.kernelSize,
      "number",
      1,
      2
    )) {
      throw new ValueError(
        `Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(args.kernelSize)}.`
      );
    }
  }
};
var Conv2D2 = _Conv2D;
__publicField(Conv2D2, "className", "Conv2D");
serialization_exports.registerClass(Conv2D2);
var _Conv3D = class extends Conv {
  constructor(args) {
    super(3, args);
    _Conv3D.verifyArgs(args);
  }
  getConfig() {
    const config = super.getConfig();
    delete config["rank"];
    return config;
  }
  static verifyArgs(args) {
    if (typeof args.kernelSize !== "number") {
      if (!(Array.isArray(args.kernelSize) && (args.kernelSize.length === 1 || args.kernelSize.length === 3))) {
        throw new ValueError(
          `Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(args.kernelSize)}.`
        );
      }
    }
  }
};
var Conv3D2 = _Conv3D;
__publicField(Conv3D2, "className", "Conv3D");
serialization_exports.registerClass(Conv3D2);
var Conv2DTranspose = class extends Conv2D2 {
  inputSpec;
  constructor(args) {
    super(args);
    this.inputSpec = [new InputSpec({ ndim: 4 })];
    if (this.padding !== "same" && this.padding !== "valid") {
      throw new ValueError(
        `Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`
      );
    }
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    if (inputShape.length !== 4) {
      throw new ValueError(
        "Input should have rank 4; Received input shape: " + JSON.stringify(inputShape)
      );
    }
    const channelAxis = this.dataFormat === "channelsFirst" ? 1 : inputShape.length - 1;
    if (inputShape[channelAxis] == null) {
      throw new ValueError(
        "The channel dimension of the inputs should be defined. Found `None`."
      );
    }
    const inputDim = inputShape[channelAxis];
    const kernelShape = this.kernelSize.concat([this.filters, inputDim]);
    this.kernel = this.addWeight(
      "kernel",
      kernelShape,
      "float32",
      this.kernelInitializer,
      this.kernelRegularizer,
      true,
      this.kernelConstraint
    );
    if (this.useBias) {
      this.bias = this.addWeight(
        "bias",
        [this.filters],
        "float32",
        this.biasInitializer,
        this.biasRegularizer,
        true,
        this.biasConstraint
      );
    }
    this.inputSpec = [new InputSpec({ ndim: 4, axes: { [channelAxis]: inputDim } })];
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      let input2 = getExactlyOneTensor(inputs);
      if (input2.shape.length !== 4) {
        throw new ValueError(
          `Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${input2.shape.length}`
        );
      }
      const inputShape = input2.shape;
      const batchSize = inputShape[0];
      let hAxis;
      let wAxis;
      if (this.dataFormat === "channelsFirst") {
        hAxis = 2;
        wAxis = 3;
      } else {
        hAxis = 1;
        wAxis = 2;
      }
      const height = inputShape[hAxis];
      const width = inputShape[wAxis];
      const kernelH = this.kernelSize[0];
      const kernelW = this.kernelSize[1];
      const strideH = this.strides[0];
      const strideW = this.strides[1];
      const outHeight = deconvLength(height, strideH, kernelH, this.padding);
      const outWidth = deconvLength(width, strideW, kernelW, this.padding);
      const outputShape = [batchSize, outHeight, outWidth, this.filters];
      if (this.dataFormat !== "channelsLast") {
        input2 = transpose(input2, [0, 2, 3, 1]);
      }
      let outputs = conv2dTranspose(
        input2,
        this.kernel.read(),
        outputShape,
        this.strides,
        this.padding
      );
      if (this.dataFormat !== "channelsLast") {
        outputs = transpose(outputs, [0, 3, 1, 2]);
      }
      if (this.bias != null) {
        outputs = biasAdd(outputs, this.bias.read(), this.dataFormat);
      }
      if (this.activation != null) {
        outputs = this.activation.apply(outputs);
      }
      return outputs;
    });
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const outputShape = inputShape.slice();
    let channelAxis;
    let heightAxis;
    let widthAxis;
    if (this.dataFormat === "channelsFirst") {
      channelAxis = 1;
      heightAxis = 2;
      widthAxis = 3;
    } else {
      channelAxis = 3;
      heightAxis = 1;
      widthAxis = 2;
    }
    const kernelH = this.kernelSize[0];
    const kernelW = this.kernelSize[1];
    const strideH = this.strides[0];
    const strideW = this.strides[1];
    outputShape[channelAxis] = this.filters;
    outputShape[heightAxis] = deconvLength(outputShape[heightAxis], strideH, kernelH, this.padding);
    outputShape[widthAxis] = deconvLength(outputShape[widthAxis], strideW, kernelW, this.padding);
    return outputShape;
  }
  getConfig() {
    const config = super.getConfig();
    delete config["dilationRate"];
    return config;
  }
};
__publicField(Conv2DTranspose, "className", "Conv2DTranspose");
serialization_exports.registerClass(Conv2DTranspose);
var Conv3DTranspose = class extends Conv3D2 {
  inputSpec;
  constructor(args) {
    super(args);
    this.inputSpec = [new InputSpec({ ndim: 5 })];
    if (this.padding !== "same" && this.padding !== "valid") {
      throw new ValueError(
        `Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`
      );
    }
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    if (inputShape.length !== 5) {
      throw new ValueError(
        "Input should have rank 5; Received input shape: " + JSON.stringify(inputShape)
      );
    }
    const channelAxis = this.dataFormat === "channelsFirst" ? 1 : inputShape.length - 1;
    if (inputShape[channelAxis] == null) {
      throw new ValueError(
        "The channel dimension of the inputs should be defined. Found `None`."
      );
    }
    const inputDim = inputShape[channelAxis];
    const kernelShape = this.kernelSize.concat([this.filters, inputDim]);
    this.kernel = this.addWeight(
      "kernel",
      kernelShape,
      "float32",
      this.kernelInitializer,
      this.kernelRegularizer,
      true,
      this.kernelConstraint
    );
    if (this.useBias) {
      this.bias = this.addWeight(
        "bias",
        [this.filters],
        "float32",
        this.biasInitializer,
        this.biasRegularizer,
        true,
        this.biasConstraint
      );
    }
    this.inputSpec = [new InputSpec({ ndim: 5, axes: { [channelAxis]: inputDim } })];
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      let input2 = getExactlyOneTensor(inputs);
      if (input2.shape.length !== 5) {
        throw new ValueError(
          `Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${input2.shape.length}`
        );
      }
      const inputShape = input2.shape;
      const batchSize = inputShape[0];
      let hAxis;
      let wAxis;
      let dAxis;
      if (this.dataFormat === "channelsFirst") {
        dAxis = 2;
        hAxis = 3;
        wAxis = 4;
      } else {
        dAxis = 1;
        hAxis = 2;
        wAxis = 3;
      }
      const depth = inputShape[dAxis];
      const height = inputShape[hAxis];
      const width = inputShape[wAxis];
      const kernelD = this.kernelSize[0];
      const kernelH = this.kernelSize[1];
      const kernelW = this.kernelSize[2];
      const strideD = this.strides[0];
      const strideH = this.strides[1];
      const strideW = this.strides[2];
      const outDepth = deconvLength(depth, strideD, kernelD, this.padding);
      const outHeight = deconvLength(height, strideH, kernelH, this.padding);
      const outWidth = deconvLength(width, strideW, kernelW, this.padding);
      const outputShape = [batchSize, outDepth, outHeight, outWidth, this.filters];
      if (this.dataFormat !== "channelsLast") {
        input2 = transpose(input2, [0, 2, 3, 4, 1]);
      }
      let outputs = conv3dTranspose(
        input2,
        this.kernel.read(),
        outputShape,
        this.strides,
        this.padding
      );
      if (this.dataFormat !== "channelsLast") {
        outputs = transpose(outputs, [0, 4, 1, 2, 3]);
      }
      if (this.bias !== null) {
        outputs = biasAdd(outputs, this.bias.read(), this.dataFormat);
      }
      if (this.activation !== null) {
        outputs = this.activation.apply(outputs);
      }
      return outputs;
    });
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const outputShape = inputShape.slice();
    let channelAxis;
    let depthAxis;
    let heightAxis;
    let widthAxis;
    if (this.dataFormat === "channelsFirst") {
      channelAxis = 1;
      depthAxis = 2;
      heightAxis = 3;
      widthAxis = 4;
    } else {
      channelAxis = 4;
      depthAxis = 1;
      heightAxis = 2;
      widthAxis = 3;
    }
    const kernelD = this.kernelSize[0];
    const kernelH = this.kernelSize[1];
    const kernelW = this.kernelSize[2];
    const strideD = this.strides[0];
    const strideH = this.strides[1];
    const strideW = this.strides[2];
    outputShape[channelAxis] = this.filters;
    outputShape[depthAxis] = deconvLength(outputShape[depthAxis], strideD, kernelD, this.padding);
    outputShape[heightAxis] = deconvLength(outputShape[heightAxis], strideH, kernelH, this.padding);
    outputShape[widthAxis] = deconvLength(outputShape[widthAxis], strideW, kernelW, this.padding);
    return outputShape;
  }
  getConfig() {
    const config = super.getConfig();
    delete config["dilationRate"];
    return config;
  }
};
__publicField(Conv3DTranspose, "className", "Conv3DTranspose");
serialization_exports.registerClass(Conv3DTranspose);
var SeparableConv = class extends Conv {
  depthMultiplier;
  depthwiseInitializer;
  depthwiseRegularizer;
  depthwiseConstraint;
  pointwiseInitializer;
  pointwiseRegularizer;
  pointwiseConstraint;
  DEFAULT_DEPTHWISE_INITIALIZER = "glorotUniform";
  DEFAULT_POINTWISE_INITIALIZER = "glorotUniform";
  depthwiseKernel = null;
  pointwiseKernel = null;
  constructor(rank, config) {
    super(rank, config);
    if (config.filters == null) {
      throw new ValueError(
        "The `filters` configuration field is required by SeparableConv, but is unspecified."
      );
    }
    if (config.kernelInitializer != null || config.kernelRegularizer != null || config.kernelConstraint != null) {
      throw new ValueError(
        "Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead."
      );
    }
    if (config.padding != null && config.padding !== "same" && config.padding !== "valid") {
      throw new ValueError(
        `SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(config.padding)}`
      );
    }
    this.depthMultiplier = config.depthMultiplier == null ? 1 : config.depthMultiplier;
    this.depthwiseInitializer = getInitializer(
      config.depthwiseInitializer || this.DEFAULT_DEPTHWISE_INITIALIZER
    );
    this.depthwiseRegularizer = getRegularizer(config.depthwiseRegularizer);
    this.depthwiseConstraint = getConstraint(config.depthwiseConstraint);
    this.pointwiseInitializer = getInitializer(
      config.depthwiseInitializer || this.DEFAULT_POINTWISE_INITIALIZER
    );
    this.pointwiseRegularizer = getRegularizer(config.pointwiseRegularizer);
    this.pointwiseConstraint = getConstraint(config.pointwiseConstraint);
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    if (inputShape.length < this.rank + 2) {
      throw new ValueError(
        `Inputs to SeparableConv${this.rank}D should have rank ${this.rank + 2}, but received input shape: ${JSON.stringify(inputShape)}`
      );
    }
    const channelAxis = this.dataFormat === "channelsFirst" ? 1 : inputShape.length - 1;
    if (inputShape[channelAxis] == null || inputShape[channelAxis] < 0) {
      throw new ValueError(
        `The channel dimension of the inputs should be defined, but found ${JSON.stringify(inputShape[channelAxis])}`
      );
    }
    const inputDim = inputShape[channelAxis];
    const depthwiseKernelShape = this.kernelSize.concat([inputDim, this.depthMultiplier]);
    const pointwiseKernelShape = [];
    for (let i = 0; i < this.rank; ++i) {
      pointwiseKernelShape.push(1);
    }
    pointwiseKernelShape.push(inputDim * this.depthMultiplier, this.filters);
    const trainable = true;
    this.depthwiseKernel = this.addWeight(
      "depthwise_kernel",
      depthwiseKernelShape,
      "float32",
      this.depthwiseInitializer,
      this.depthwiseRegularizer,
      trainable,
      this.depthwiseConstraint
    );
    this.pointwiseKernel = this.addWeight(
      "pointwise_kernel",
      pointwiseKernelShape,
      "float32",
      this.pointwiseInitializer,
      this.pointwiseRegularizer,
      trainable,
      this.pointwiseConstraint
    );
    if (this.useBias) {
      this.bias = this.addWeight(
        "bias",
        [this.filters],
        "float32",
        this.biasInitializer,
        this.biasRegularizer,
        trainable,
        this.biasConstraint
      );
    } else {
      this.bias = null;
    }
    this.inputSpec = [new InputSpec({ ndim: this.rank + 2, axes: { [channelAxis]: inputDim } })];
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = getExactlyOneTensor(inputs);
      let output;
      if (this.rank === 1) {
        throw new NotImplementedError(
          "1D separable convolution is not implemented yet."
        );
      } else if (this.rank === 2) {
        if (this.dataFormat === "channelsFirst") {
          inputs = transpose(inputs, [0, 2, 3, 1]);
        }
        output = separableConv2d(
          inputs,
          this.depthwiseKernel.read(),
          this.pointwiseKernel.read(),
          this.strides,
          this.padding,
          this.dilationRate,
          "NHWC"
        );
      }
      if (this.useBias) {
        output = biasAdd(output, this.bias.read(), this.dataFormat);
      }
      if (this.activation != null) {
        output = this.activation.apply(output);
      }
      if (this.dataFormat === "channelsFirst") {
        output = transpose(output, [0, 3, 1, 2]);
      }
      return output;
    });
  }
  getConfig() {
    const config = super.getConfig();
    delete config["rank"];
    delete config["kernelInitializer"];
    delete config["kernelRegularizer"];
    delete config["kernelConstraint"];
    config["depthwiseInitializer"] = serializeInitializer(this.depthwiseInitializer);
    config["pointwiseInitializer"] = serializeInitializer(this.pointwiseInitializer);
    config["depthwiseRegularizer"] = serializeRegularizer(this.depthwiseRegularizer);
    config["pointwiseRegularizer"] = serializeRegularizer(this.pointwiseRegularizer);
    config["depthwiseConstraint"] = serializeConstraint(this.depthwiseConstraint);
    config["pointwiseConstraint"] = serializeConstraint(this.pointwiseConstraint);
    return config;
  }
};
__publicField(SeparableConv, "className", "SeparableConv");
var SeparableConv2D = class extends SeparableConv {
  constructor(args) {
    super(2, args);
  }
};
__publicField(SeparableConv2D, "className", "SeparableConv2D");
serialization_exports.registerClass(SeparableConv2D);
var _Conv1D = class extends Conv {
  constructor(args) {
    super(1, args);
    _Conv1D.verifyArgs(args);
    this.inputSpec = [{ ndim: 3 }];
  }
  getConfig() {
    const config = super.getConfig();
    delete config["rank"];
    delete config["dataFormat"];
    return config;
  }
  static verifyArgs(args) {
    if (typeof args.kernelSize !== "number" && !checkArrayTypeAndLength(
      args.kernelSize,
      "number",
      1,
      1
    )) {
      throw new ValueError(
        `Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(args.kernelSize)}.`
      );
    }
  }
};
var Conv1D = _Conv1D;
__publicField(Conv1D, "className", "Conv1D");
serialization_exports.registerClass(Conv1D);
var Cropping2D = class extends Layer {
  cropping;
  dataFormat;
  constructor(args) {
    super(args);
    if (typeof args.cropping === "number") {
      this.cropping = [[args.cropping, args.cropping], [args.cropping, args.cropping]];
    } else if (typeof args.cropping[0] === "number") {
      this.cropping = [
        [args.cropping[0], args.cropping[0]],
        [args.cropping[1], args.cropping[1]]
      ];
    } else {
      this.cropping = args.cropping;
    }
    this.dataFormat = args.dataFormat === void 0 ? "channelsLast" : args.dataFormat;
    this.inputSpec = [{ ndim: 4 }];
  }
  computeOutputShape(inputShape) {
    if (this.dataFormat === "channelsFirst") {
      return [
        inputShape[0],
        inputShape[1],
        inputShape[2] - this.cropping[0][0] - this.cropping[0][1],
        inputShape[3] - this.cropping[1][0] - this.cropping[1][1]
      ];
    } else {
      return [
        inputShape[0],
        inputShape[1] - this.cropping[0][0] - this.cropping[0][1],
        inputShape[2] - this.cropping[1][0] - this.cropping[1][1],
        inputShape[3]
      ];
    }
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = getExactlyOneTensor(inputs);
      if (this.dataFormat === "channelsLast") {
        const hSliced = sliceAlongAxis(
          inputs,
          this.cropping[0][0],
          inputs.shape[1] - this.cropping[0][0] - this.cropping[0][1],
          2
        );
        return sliceAlongAxis(
          hSliced,
          this.cropping[1][0],
          inputs.shape[2] - this.cropping[1][1] - this.cropping[1][0],
          3
        );
      } else {
        const hSliced = sliceAlongAxis(
          inputs,
          this.cropping[0][0],
          inputs.shape[2] - this.cropping[0][0] - this.cropping[0][1],
          3
        );
        return sliceAlongAxis(
          hSliced,
          this.cropping[1][0],
          inputs.shape[3] - this.cropping[1][1] - this.cropping[1][0],
          4
        );
      }
    });
  }
  getConfig() {
    const config = { cropping: this.cropping, dataFormat: this.dataFormat };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Cropping2D, "className", "Cropping2D");
serialization_exports.registerClass(Cropping2D);
var UpSampling2D = class extends Layer {
  DEFAULT_SIZE = [2, 2];
  size;
  dataFormat;
  interpolation;
  constructor(args) {
    super(args);
    this.inputSpec = [{ ndim: 4 }];
    this.size = args.size == null ? this.DEFAULT_SIZE : args.size;
    this.dataFormat = args.dataFormat == null ? "channelsLast" : args.dataFormat;
    checkDataFormat(this.dataFormat);
    this.interpolation = args.interpolation == null ? "nearest" : args.interpolation;
    checkInterpolationFormat(this.interpolation);
  }
  computeOutputShape(inputShape) {
    if (this.dataFormat === "channelsFirst") {
      const height = inputShape[2] == null ? null : this.size[0] * inputShape[2];
      const width = inputShape[3] == null ? null : this.size[1] * inputShape[3];
      return [inputShape[0], inputShape[1], height, width];
    } else {
      const height = inputShape[1] == null ? null : this.size[0] * inputShape[1];
      const width = inputShape[2] == null ? null : this.size[1] * inputShape[2];
      return [inputShape[0], height, width, inputShape[3]];
    }
  }
  call(inputs, kwargs) {
    return tidy(() => {
      let input2 = getExactlyOneTensor(inputs);
      const inputShape = input2.shape;
      if (this.dataFormat === "channelsFirst") {
        input2 = transpose(input2, [0, 2, 3, 1]);
        const height = this.size[0] * inputShape[2];
        const width = this.size[1] * inputShape[3];
        const resized = this.interpolation === "nearest" ? image.resizeNearestNeighbor(input2, [height, width]) : image.resizeBilinear(input2, [height, width]);
        return transpose(resized, [0, 3, 1, 2]);
      } else {
        const height = this.size[0] * inputShape[1];
        const width = this.size[1] * inputShape[2];
        return this.interpolation === "nearest" ? image.resizeNearestNeighbor(input2, [height, width]) : image.resizeBilinear(input2, [height, width]);
      }
    });
  }
  getConfig() {
    const config = {
      size: this.size,
      dataFormat: this.dataFormat,
      interpolation: this.interpolation
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(UpSampling2D, "className", "UpSampling2D");
serialization_exports.registerClass(UpSampling2D);

// src/tfjs-layers/src/layers/convolutional_depthwise.ts
function depthwiseConv2d3(x, depthwiseKernel, strides = [1, 1], padding = "valid", dataFormat, dilationRate) {
  return tidy(() => {
    if (dataFormat == null) {
      dataFormat = imageDataFormat();
    }
    checkDataFormat(dataFormat);
    let y = preprocessConv2DInput(x, dataFormat);
    if (x.rank !== 4) {
      throw new ValueError(
        `Input for depthwiseConv2d is required to be 4-D, but is instead ${x.rank}-D`
      );
    }
    if (depthwiseKernel.rank !== 4) {
      throw new ValueError(
        `depthwiseKernel is required to be 4-D, but is instead ${depthwiseKernel.rank}-D`
      );
    }
    y = depthwiseConv2d(
      y,
      depthwiseKernel,
      strides,
      padding === "same" ? "same" : "valid",
      "NHWC",
      dilationRate
    );
    if (dataFormat === "channelsFirst") {
      y = transpose(y, [0, 3, 1, 2]);
    }
    return y;
  });
}
var DepthwiseConv2D = class extends BaseConv {
  depthMultiplier;
  depthwiseInitializer;
  depthwiseConstraint;
  depthwiseRegularizer;
  depthwiseKernel = null;
  constructor(args) {
    super(2, args);
    this.depthMultiplier = args.depthMultiplier == null ? 1 : args.depthMultiplier;
    this.depthwiseInitializer = getInitializer(
      args.depthwiseInitializer || this.DEFAULT_KERNEL_INITIALIZER
    );
    this.depthwiseConstraint = getConstraint(args.depthwiseConstraint);
    this.depthwiseRegularizer = getRegularizer(args.depthwiseRegularizer);
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    if (inputShape.length < 4) {
      throw new ValueError(
        `Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(inputShape)}.`
      );
    }
    const channelAxis = this.dataFormat === "channelsFirst" ? 1 : 3;
    if (inputShape[channelAxis] == null || inputShape[channelAxis] < 0) {
      throw new ValueError(
        `The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${inputShape[channelAxis]}).`
      );
    }
    const inputDim = inputShape[channelAxis];
    const depthwiseKernelShape = [
      this.kernelSize[0],
      this.kernelSize[1],
      inputDim,
      this.depthMultiplier
    ];
    this.depthwiseKernel = this.addWeight(
      "depthwise_kernel",
      depthwiseKernelShape,
      null,
      this.depthwiseInitializer,
      this.depthwiseRegularizer,
      true,
      this.depthwiseConstraint
    );
    if (this.useBias) {
      this.bias = this.addWeight(
        "bias",
        [inputDim * this.depthMultiplier],
        null,
        this.biasInitializer,
        this.biasRegularizer,
        true,
        this.biasConstraint
      );
    } else {
      this.bias = null;
    }
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = getExactlyOneTensor(inputs);
      let outputs = depthwiseConv2d3(
        inputs,
        this.depthwiseKernel.read(),
        this.strides,
        this.padding,
        this.dataFormat,
        null
      );
      if (this.useBias) {
        outputs = biasAdd(outputs, this.bias.read(), this.dataFormat);
      }
      if (this.activation != null) {
        outputs = this.activation.apply(outputs);
      }
      return outputs;
    });
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const rows = this.dataFormat === "channelsFirst" ? inputShape[2] : inputShape[1];
    const cols = this.dataFormat === "channelsFirst" ? inputShape[3] : inputShape[2];
    const outFilters = this.dataFormat === "channelsFirst" ? inputShape[1] * this.depthMultiplier : inputShape[3] * this.depthMultiplier;
    const outRows = convOutputLength(
      rows,
      this.kernelSize[0],
      this.padding,
      this.strides[0]
    );
    const outCols = convOutputLength(
      cols,
      this.kernelSize[1],
      this.padding,
      this.strides[1]
    );
    if (this.dataFormat === "channelsFirst") {
      return [inputShape[0], outFilters, outRows, outCols];
    } else {
      return [inputShape[0], outRows, outCols, outFilters];
    }
  }
  getConfig() {
    const config = super.getConfig();
    config["depthMultiplier"] = this.depthMultiplier;
    config["depthwiseInitializer"] = serializeInitializer(this.depthwiseInitializer);
    config["depthwiseRegularizer"] = serializeRegularizer(this.depthwiseRegularizer);
    config["depthwiseConstraint"] = serializeConstraint(this.depthwiseRegularizer);
    return config;
  }
};
__publicField(DepthwiseConv2D, "className", "DepthwiseConv2D");
serialization_exports.registerClass(DepthwiseConv2D);

// src/tfjs-layers/src/layers/recurrent.ts
function standardizeArgs(inputs, initialState, constants, numConstants) {
  if (Array.isArray(inputs)) {
    if (initialState != null || constants != null) {
      throw new ValueError(
        "When inputs is an array, neither initialState or constants should be provided"
      );
    }
    if (numConstants != null) {
      constants = inputs.slice(inputs.length - numConstants, inputs.length);
      inputs = inputs.slice(0, inputs.length - numConstants);
    }
    if (inputs.length > 1) {
      initialState = inputs.slice(1, inputs.length);
    }
    inputs = inputs[0];
  }
  function toListOrNull(x) {
    if (x == null || Array.isArray(x)) {
      return x;
    } else {
      return [x];
    }
  }
  initialState = toListOrNull(initialState);
  constants = toListOrNull(constants);
  return { inputs, initialState, constants };
}
function rnn(stepFunction, inputs, initialStates, goBackwards = false, mask, constants, unroll = false, needPerStepOutputs = false) {
  return tidy(() => {
    const ndim = inputs.shape.length;
    if (ndim < 3) {
      throw new ValueError(`Input should be at least 3D, but is ${ndim}D.`);
    }
    const axes = [1, 0].concat(range2(2, ndim));
    inputs = transpose(inputs, axes);
    if (constants != null) {
      throw new NotImplementedError(
        "The rnn() functoin of the deeplearn.js backend does not support constants yet."
      );
    }
    if (unroll) {
      console.warn(
        "Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."
      );
    }
    if (mask != null) {
      mask = cast(cast(mask, "bool"), "float32");
      if (mask.rank === ndim - 1) {
        mask = expandDims(mask, -1);
      }
      mask = transpose(mask, axes);
    }
    if (goBackwards) {
      inputs = reverse(inputs, 0);
      if (mask != null) {
        mask = reverse(mask, 0);
      }
    }
    const perStepOutputs = [];
    let lastOutput;
    let states = initialStates;
    const timeSteps = inputs.shape[0];
    const perStepInputs = unstack(inputs);
    let perStepMasks;
    if (mask != null) {
      perStepMasks = unstack(mask);
    }
    for (let t = 0; t < timeSteps; ++t) {
      const currentInput = perStepInputs[t];
      const stepOutputs = tidy(() => stepFunction(currentInput, states));
      if (mask == null) {
        lastOutput = stepOutputs[0];
        states = stepOutputs[1];
      } else {
        const maskedOutputs = tidy(() => {
          const stepMask = perStepMasks[t];
          const negStepMask = sub(onesLike(stepMask), stepMask);
          const output = add2(
            mul(stepOutputs[0], stepMask),
            mul(states[0], negStepMask)
          );
          const newStates = states.map((state, i) => {
            return add2(
              mul(stepOutputs[1][i], stepMask),
              mul(state, negStepMask)
            );
          });
          return { output, newStates };
        });
        lastOutput = maskedOutputs.output;
        states = maskedOutputs.newStates;
      }
      if (needPerStepOutputs) {
        perStepOutputs.push(lastOutput);
      }
    }
    let outputs;
    if (needPerStepOutputs) {
      const axis = 1;
      outputs = stack(perStepOutputs, axis);
    }
    return [lastOutput, outputs, states];
  });
}
var _RNN = class extends Layer {
  cell;
  returnSequences;
  returnState;
  goBackwards;
  unroll;
  stateSpec;
  states_;
  keptStates;
  numConstants;
  constructor(args) {
    super(args);
    let cell;
    if (args.cell == null) {
      throw new ValueError(
        "cell property is missing for the constructor of RNN."
      );
    } else if (Array.isArray(args.cell)) {
      cell = new StackedRNNCells({ cells: args.cell });
    } else {
      cell = args.cell;
    }
    if (cell.stateSize == null) {
      throw new ValueError(
        "The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state)."
      );
    }
    this.cell = cell;
    this.returnSequences = args.returnSequences == null ? false : args.returnSequences;
    this.returnState = args.returnState == null ? false : args.returnState;
    this.goBackwards = args.goBackwards == null ? false : args.goBackwards;
    this._stateful = args.stateful == null ? false : args.stateful;
    this.unroll = args.unroll == null ? false : args.unroll;
    this.supportsMasking = true;
    this.inputSpec = [new InputSpec({ ndim: 3 })];
    this.stateSpec = null;
    this.states_ = null;
    this.numConstants = null;
    this.keptStates = [];
  }
  getStates() {
    if (this.states_ == null) {
      const numStates = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
      return range2(0, numStates).map((x) => null);
    } else {
      return this.states_;
    }
  }
  setStates(states) {
    this.states_ = states;
  }
  computeOutputShape(inputShape) {
    if (isArrayOfShapes(inputShape)) {
      inputShape = inputShape[0];
    }
    inputShape = inputShape;
    let stateSize = this.cell.stateSize;
    if (!Array.isArray(stateSize)) {
      stateSize = [stateSize];
    }
    const outputDim = stateSize[0];
    let outputShape;
    if (this.returnSequences) {
      outputShape = [inputShape[0], inputShape[1], outputDim];
    } else {
      outputShape = [inputShape[0], outputDim];
    }
    if (this.returnState) {
      const stateShape = [];
      for (const dim of stateSize) {
        stateShape.push([inputShape[0], dim]);
      }
      return [outputShape].concat(stateShape);
    } else {
      return outputShape;
    }
  }
  computeMask(inputs, mask) {
    return tidy(() => {
      if (Array.isArray(mask)) {
        mask = mask[0];
      }
      const outputMask = this.returnSequences ? mask : null;
      if (this.returnState) {
        const stateMask = this.states.map((s) => null);
        return [outputMask].concat(stateMask);
      } else {
        return outputMask;
      }
    });
  }
  get states() {
    if (this.states_ == null) {
      const numStates = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
      const output = [];
      for (let i = 0; i < numStates; ++i) {
        output.push(null);
      }
      return output;
    } else {
      return this.states_;
    }
  }
  set states(s) {
    this.states_ = s;
  }
  build(inputShape) {
    const constantShape = null;
    if (this.numConstants != null) {
      throw new NotImplementedError(
        "Constants support is not implemented in RNN yet."
      );
    }
    if (isArrayOfShapes(inputShape)) {
      inputShape = inputShape[0];
    }
    inputShape = inputShape;
    const batchSize = this.stateful ? inputShape[0] : null;
    const inputDim = inputShape.slice(2);
    this.inputSpec[0] = new InputSpec({ shape: [batchSize, null, ...inputDim] });
    const stepInputShape = [inputShape[0]].concat(inputShape.slice(2));
    if (constantShape != null) {
      throw new NotImplementedError(
        "Constants support is not implemented in RNN yet."
      );
    } else {
      this.cell.build(stepInputShape);
    }
    let stateSize;
    if (Array.isArray(this.cell.stateSize)) {
      stateSize = this.cell.stateSize;
    } else {
      stateSize = [this.cell.stateSize];
    }
    if (this.stateSpec != null) {
      if (!util_exports.arraysEqual(
        this.stateSpec.map((spec) => spec.shape[spec.shape.length - 1]),
        stateSize
      )) {
        throw new ValueError(
          `An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`
        );
      }
    } else {
      this.stateSpec = stateSize.map((dim) => new InputSpec({ shape: [null, dim] }));
    }
    if (this.stateful) {
      this.resetStates();
    }
  }
  resetStates(states, training = false) {
    tidy(() => {
      if (!this.stateful) {
        throw new AttributeError(
          "Cannot call resetStates() on an RNN Layer that is not stateful."
        );
      }
      const batchSize = this.inputSpec[0].shape[0];
      if (batchSize == null) {
        throw new ValueError(
          "If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer."
        );
      }
      if (this.states_ == null) {
        if (Array.isArray(this.cell.stateSize)) {
          this.states_ = this.cell.stateSize.map((dim) => zeros([batchSize, dim]));
        } else {
          this.states_ = [zeros([batchSize, this.cell.stateSize])];
        }
      } else if (states == null) {
        dispose(this.states_);
        if (this.keptStates != null) {
          dispose(this.keptStates);
          this.keptStates = [];
        }
        if (Array.isArray(this.cell.stateSize)) {
          this.states_ = this.cell.stateSize.map((dim) => zeros([batchSize, dim]));
        } else {
          this.states_[0] = zeros([batchSize, this.cell.stateSize]);
        }
      } else {
        if (!Array.isArray(states)) {
          states = [states];
        }
        if (states.length !== this.states_.length) {
          throw new ValueError(
            `Layer ${this.name} expects ${this.states_.length} state(s), but it received ${states.length} state value(s). Input received: ${states}`
          );
        }
        if (training === true) {
          this.keptStates.push(this.states_.slice());
        } else {
          dispose(this.states_);
        }
        for (let index = 0; index < this.states_.length; ++index) {
          const value = states[index];
          const dim = Array.isArray(this.cell.stateSize) ? this.cell.stateSize[index] : this.cell.stateSize;
          const expectedShape = [batchSize, dim];
          if (!util_exports.arraysEqual(value.shape, expectedShape)) {
            throw new ValueError(
              `State ${index} is incompatible with layer ${this.name}: expected shape=${expectedShape}, received shape=${value.shape}`
            );
          }
          this.states_[index] = value;
        }
      }
      this.states_ = this.states_.map((state) => keep(state.clone()));
    });
  }
  apply(inputs, kwargs) {
    let initialState = kwargs == null ? null : kwargs["initialState"];
    let constants = kwargs == null ? null : kwargs["constants"];
    if (kwargs == null) {
      kwargs = {};
    }
    const standardized = standardizeArgs(inputs, initialState, constants, this.numConstants);
    inputs = standardized.inputs;
    initialState = standardized.initialState;
    constants = standardized.constants;
    let additionalInputs = [];
    let additionalSpecs = [];
    if (initialState != null) {
      kwargs["initialState"] = initialState;
      additionalInputs = additionalInputs.concat(initialState);
      this.stateSpec = [];
      for (const state of initialState) {
        this.stateSpec.push(new InputSpec({ shape: state.shape }));
      }
      additionalSpecs = additionalSpecs.concat(this.stateSpec);
    }
    if (constants != null) {
      kwargs["constants"] = constants;
      additionalInputs = additionalInputs.concat(constants);
      this.numConstants = constants.length;
    }
    const isTensor = additionalInputs[0] instanceof SymbolicTensor;
    if (isTensor) {
      const fullInput = [inputs].concat(additionalInputs);
      const fullInputSpec = this.inputSpec.concat(additionalSpecs);
      const originalInputSpec = this.inputSpec;
      this.inputSpec = fullInputSpec;
      const output = super.apply(fullInput, kwargs);
      this.inputSpec = originalInputSpec;
      return output;
    } else {
      return super.apply(inputs, kwargs);
    }
  }
  call(inputs, kwargs) {
    return tidy(() => {
      const mask = kwargs == null ? null : kwargs["mask"];
      const training = kwargs == null ? null : kwargs["training"];
      let initialState = kwargs == null ? null : kwargs["initialState"];
      inputs = getExactlyOneTensor(inputs);
      if (initialState == null) {
        if (this.stateful) {
          initialState = this.states_;
        } else {
          initialState = this.getInitialState(inputs);
        }
      }
      const numStates = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
      if (initialState.length !== numStates) {
        throw new ValueError(
          `RNN Layer has ${numStates} state(s) but was passed ${initialState.length} initial state(s).`
        );
      }
      if (this.unroll) {
        console.warn(
          "Ignoring unroll = true for RNN layer, due to imperative backend."
        );
      }
      const cellCallKwargs = { training };
      const step2 = (inputs2, states2) => {
        const outputs2 = this.cell.call([inputs2].concat(states2), cellCallKwargs);
        return [outputs2[0], outputs2.slice(1)];
      };
      const rnnOutputs = rnn(
        step2,
        inputs,
        initialState,
        this.goBackwards,
        mask,
        null,
        this.unroll,
        this.returnSequences
      );
      const lastOutput = rnnOutputs[0];
      const outputs = rnnOutputs[1];
      const states = rnnOutputs[2];
      if (this.stateful) {
        this.resetStates(states, training);
      }
      const output = this.returnSequences ? outputs : lastOutput;
      if (this.returnState) {
        return [output].concat(states);
      } else {
        return output;
      }
    });
  }
  getInitialState(inputs) {
    return tidy(() => {
      let initialState = zeros(inputs.shape);
      initialState = sum2(initialState, [1, 2]);
      initialState = expandDims2(initialState);
      if (Array.isArray(this.cell.stateSize)) {
        return this.cell.stateSize.map(
          (dim) => dim > 1 ? tile2(initialState, [1, dim]) : initialState
        );
      } else {
        return this.cell.stateSize > 1 ? [tile2(initialState, [1, this.cell.stateSize])] : [initialState];
      }
    });
  }
  get trainableWeights() {
    if (!this.trainable) {
      return [];
    }
    return this.cell.trainableWeights;
  }
  get nonTrainableWeights() {
    if (!this.trainable) {
      return this.cell.weights;
    }
    return this.cell.nonTrainableWeights;
  }
  setFastWeightInitDuringBuild(value) {
    super.setFastWeightInitDuringBuild(value);
    if (this.cell != null) {
      this.cell.setFastWeightInitDuringBuild(value);
    }
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const config = {
      returnSequences: this.returnSequences,
      returnState: this.returnState,
      goBackwards: this.goBackwards,
      stateful: this.stateful,
      unroll: this.unroll
    };
    if (this.numConstants != null) {
      config["numConstants"] = this.numConstants;
    }
    const cellConfig = this.cell.getConfig();
    if (this.getClassName() === _RNN.className) {
      config["cell"] = {
        "className": this.cell.getClassName(),
        "config": cellConfig
      };
    }
    return { ...cellConfig, ...baseConfig, ...config };
  }
  static fromConfig(cls, config, customObjects = {}) {
    const cellConfig = config["cell"];
    const cell = deserialize(cellConfig, customObjects);
    return new cls(Object.assign(config, { cell }));
  }
};
var RNN = _RNN;
__publicField(RNN, "className", "RNN");
serialization_exports.registerClass(RNN);
var RNNCell = class extends Layer {
  dropoutMask;
  recurrentDropoutMask;
};
var SimpleRNNCell = class extends RNNCell {
  units;
  activation;
  useBias;
  kernelInitializer;
  recurrentInitializer;
  biasInitializer;
  kernelConstraint;
  recurrentConstraint;
  biasConstraint;
  kernelRegularizer;
  recurrentRegularizer;
  biasRegularizer;
  dropout;
  recurrentDropout;
  dropoutFunc;
  stateSize;
  kernel;
  recurrentKernel;
  bias;
  DEFAULT_ACTIVATION = "tanh";
  DEFAULT_KERNEL_INITIALIZER = "glorotNormal";
  DEFAULT_RECURRENT_INITIALIZER = "orthogonal";
  DEFAULT_BIAS_INITIALIZER = "zeros";
  constructor(args) {
    super(args);
    this.units = args.units;
    assertPositiveInteger(this.units, `units`);
    this.activation = getActivation(
      args.activation == null ? this.DEFAULT_ACTIVATION : args.activation
    );
    this.useBias = args.useBias == null ? true : args.useBias;
    this.kernelInitializer = getInitializer(
      args.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
    );
    this.recurrentInitializer = getInitializer(
      args.recurrentInitializer || this.DEFAULT_RECURRENT_INITIALIZER
    );
    this.biasInitializer = getInitializer(args.biasInitializer || this.DEFAULT_BIAS_INITIALIZER);
    this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
    this.recurrentRegularizer = getRegularizer(args.recurrentRegularizer);
    this.biasRegularizer = getRegularizer(args.biasRegularizer);
    this.kernelConstraint = getConstraint(args.kernelConstraint);
    this.recurrentConstraint = getConstraint(args.recurrentConstraint);
    this.biasConstraint = getConstraint(args.biasConstraint);
    this.dropout = min2(
      [1, max2([0, args.dropout == null ? 0 : args.dropout])]
    );
    this.recurrentDropout = min2([
      1,
      max2(
        [0, args.recurrentDropout == null ? 0 : args.recurrentDropout]
      )
    ]);
    this.dropoutFunc = args.dropoutFunc;
    this.stateSize = this.units;
    this.dropoutMask = null;
    this.recurrentDropoutMask = null;
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    this.kernel = this.addWeight(
      "kernel",
      [inputShape[inputShape.length - 1], this.units],
      null,
      this.kernelInitializer,
      this.kernelRegularizer,
      true,
      this.kernelConstraint
    );
    this.recurrentKernel = this.addWeight(
      "recurrent_kernel",
      [this.units, this.units],
      null,
      this.recurrentInitializer,
      this.recurrentRegularizer,
      true,
      this.recurrentConstraint
    );
    if (this.useBias) {
      this.bias = this.addWeight(
        "bias",
        [this.units],
        null,
        this.biasInitializer,
        this.biasRegularizer,
        true,
        this.biasConstraint
      );
    } else {
      this.bias = null;
    }
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = inputs;
      if (inputs.length !== 2) {
        throw new ValueError(
          `SimpleRNNCell expects 2 input Tensors, got ${inputs.length}.`
        );
      }
      let prevOutput = inputs[1];
      inputs = inputs[0];
      const training = kwargs["training"] == null ? false : kwargs["training"];
      if (0 < this.dropout && this.dropout < 1 && this.dropoutMask == null) {
        this.dropoutMask = generateDropoutMask({
          ones: () => onesLike(inputs),
          rate: this.dropout,
          training,
          dropoutFunc: this.dropoutFunc
        });
      }
      if (0 < this.recurrentDropout && this.recurrentDropout < 1 && this.recurrentDropoutMask == null) {
        this.recurrentDropoutMask = generateDropoutMask({
          ones: () => onesLike(prevOutput),
          rate: this.recurrentDropout,
          training,
          dropoutFunc: this.dropoutFunc
        });
      }
      let h;
      const dpMask = this.dropoutMask;
      const recDpMask = this.recurrentDropoutMask;
      if (dpMask != null) {
        h = dot2(mul(inputs, dpMask), this.kernel.read());
      } else {
        h = dot2(inputs, this.kernel.read());
      }
      if (this.bias != null) {
        h = biasAdd(h, this.bias.read());
      }
      if (recDpMask != null) {
        prevOutput = mul(prevOutput, recDpMask);
      }
      let output = add2(h, dot2(prevOutput, this.recurrentKernel.read()));
      if (this.activation != null) {
        output = this.activation.apply(output);
      }
      return [output, output];
    });
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const config = {
      units: this.units,
      activation: serializeActivation(this.activation),
      useBias: this.useBias,
      kernelInitializer: serializeInitializer(this.kernelInitializer),
      recurrentInitializer: serializeInitializer(this.recurrentInitializer),
      biasInitializer: serializeInitializer(this.biasInitializer),
      kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
      recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
      biasRegularizer: serializeRegularizer(this.biasRegularizer),
      activityRegularizer: serializeRegularizer(this.activityRegularizer),
      kernelConstraint: serializeConstraint(this.kernelConstraint),
      recurrentConstraint: serializeConstraint(this.recurrentConstraint),
      biasConstraint: serializeConstraint(this.biasConstraint),
      dropout: this.dropout,
      recurrentDropout: this.recurrentDropout
    };
    return { ...baseConfig, ...config };
  }
};
__publicField(SimpleRNNCell, "className", "SimpleRNNCell");
serialization_exports.registerClass(SimpleRNNCell);
var SimpleRNN = class extends RNN {
  constructor(args) {
    args.cell = new SimpleRNNCell(args);
    super(args);
  }
  call(inputs, kwargs) {
    return tidy(() => {
      if (this.cell.dropoutMask != null) {
        dispose(this.cell.dropoutMask);
        this.cell.dropoutMask = null;
      }
      if (this.cell.recurrentDropoutMask != null) {
        dispose(this.cell.recurrentDropoutMask);
        this.cell.recurrentDropoutMask = null;
      }
      const mask = kwargs == null ? null : kwargs["mask"];
      const training = kwargs == null ? null : kwargs["training"];
      const initialState = kwargs == null ? null : kwargs["initialState"];
      return super.call(inputs, { mask, training, initialState });
    });
  }
  static fromConfig(cls, config) {
    return new cls(config);
  }
};
__publicField(SimpleRNN, "className", "SimpleRNN");
serialization_exports.registerClass(SimpleRNN);
var GRUCell = class extends RNNCell {
  units;
  activation;
  recurrentActivation;
  useBias;
  kernelInitializer;
  recurrentInitializer;
  biasInitializer;
  kernelRegularizer;
  recurrentRegularizer;
  biasRegularizer;
  kernelConstraint;
  recurrentConstraint;
  biasConstraint;
  dropout;
  recurrentDropout;
  dropoutFunc;
  stateSize;
  implementation;
  DEFAULT_ACTIVATION = "tanh";
  DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid";
  DEFAULT_KERNEL_INITIALIZER = "glorotNormal";
  DEFAULT_RECURRENT_INITIALIZER = "orthogonal";
  DEFAULT_BIAS_INITIALIZER = "zeros";
  kernel;
  recurrentKernel;
  bias;
  constructor(args) {
    super(args);
    if (args.resetAfter) {
      throw new ValueError(
        `GRUCell does not support reset_after parameter set to true.`
      );
    }
    this.units = args.units;
    assertPositiveInteger(this.units, "units");
    this.activation = getActivation(
      args.activation === void 0 ? this.DEFAULT_ACTIVATION : args.activation
    );
    this.recurrentActivation = getActivation(
      args.recurrentActivation === void 0 ? this.DEFAULT_RECURRENT_ACTIVATION : args.recurrentActivation
    );
    this.useBias = args.useBias == null ? true : args.useBias;
    this.kernelInitializer = getInitializer(
      args.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
    );
    this.recurrentInitializer = getInitializer(
      args.recurrentInitializer || this.DEFAULT_RECURRENT_INITIALIZER
    );
    this.biasInitializer = getInitializer(args.biasInitializer || this.DEFAULT_BIAS_INITIALIZER);
    this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
    this.recurrentRegularizer = getRegularizer(args.recurrentRegularizer);
    this.biasRegularizer = getRegularizer(args.biasRegularizer);
    this.kernelConstraint = getConstraint(args.kernelConstraint);
    this.recurrentConstraint = getConstraint(args.recurrentConstraint);
    this.biasConstraint = getConstraint(args.biasConstraint);
    this.dropout = min2(
      [1, max2([0, args.dropout == null ? 0 : args.dropout])]
    );
    this.recurrentDropout = min2([
      1,
      max2(
        [0, args.recurrentDropout == null ? 0 : args.recurrentDropout]
      )
    ]);
    this.dropoutFunc = args.dropoutFunc;
    this.implementation = args.implementation;
    this.stateSize = this.units;
    this.dropoutMask = null;
    this.recurrentDropoutMask = null;
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const inputDim = inputShape[inputShape.length - 1];
    this.kernel = this.addWeight(
      "kernel",
      [inputDim, this.units * 3],
      null,
      this.kernelInitializer,
      this.kernelRegularizer,
      true,
      this.kernelConstraint
    );
    this.recurrentKernel = this.addWeight(
      "recurrent_kernel",
      [this.units, this.units * 3],
      null,
      this.recurrentInitializer,
      this.recurrentRegularizer,
      true,
      this.recurrentConstraint
    );
    if (this.useBias) {
      this.bias = this.addWeight(
        "bias",
        [this.units * 3],
        null,
        this.biasInitializer,
        this.biasRegularizer,
        true,
        this.biasConstraint
      );
    } else {
      this.bias = null;
    }
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = inputs;
      if (inputs.length !== 2) {
        throw new ValueError(
          `GRUCell expects 2 input Tensors (inputs, h, c), got ${inputs.length}.`
        );
      }
      const training = kwargs["training"] == null ? false : kwargs["training"];
      let hTMinus1 = inputs[1];
      inputs = inputs[0];
      if (0 < this.dropout && this.dropout < 1 && this.dropoutMask == null) {
        this.dropoutMask = generateDropoutMask({
          ones: () => onesLike(inputs),
          rate: this.dropout,
          training,
          count: 3,
          dropoutFunc: this.dropoutFunc
        });
      }
      if (0 < this.recurrentDropout && this.recurrentDropout < 1 && this.recurrentDropoutMask == null) {
        this.recurrentDropoutMask = generateDropoutMask({
          ones: () => onesLike(hTMinus1),
          rate: this.recurrentDropout,
          training,
          count: 3,
          dropoutFunc: this.dropoutFunc
        });
      }
      const dpMask = this.dropoutMask;
      const recDpMask = this.recurrentDropoutMask;
      let z;
      let r;
      let hh;
      if (0 < this.dropout && this.dropout < 1) {
        inputs = mul(inputs, dpMask[0]);
      }
      let matrixX = dot2(inputs, this.kernel.read());
      if (this.useBias) {
        matrixX = biasAdd(matrixX, this.bias.read());
      }
      if (0 < this.recurrentDropout && this.recurrentDropout < 1) {
        hTMinus1 = mul(hTMinus1, recDpMask[0]);
      }
      const recurrentKernelValue = this.recurrentKernel.read();
      const [rk1, rk2] = split(
        recurrentKernelValue,
        [2 * this.units, this.units],
        recurrentKernelValue.rank - 1
      );
      const matrixInner = dot2(hTMinus1, rk1);
      const [xZ, xR, xH] = split(matrixX, 3, matrixX.rank - 1);
      const [recurrentZ, recurrentR] = split(matrixInner, 2, matrixInner.rank - 1);
      z = this.recurrentActivation.apply(add2(xZ, recurrentZ));
      r = this.recurrentActivation.apply(add2(xR, recurrentR));
      const recurrentH = dot2(mul(r, hTMinus1), rk2);
      hh = this.activation.apply(add2(xH, recurrentH));
      const h = add2(mul(z, hTMinus1), mul(add2(1, neg(z)), hh));
      return [h, h];
    });
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const config = {
      units: this.units,
      activation: serializeActivation(this.activation),
      recurrentActivation: serializeActivation(this.recurrentActivation),
      useBias: this.useBias,
      kernelInitializer: serializeInitializer(this.kernelInitializer),
      recurrentInitializer: serializeInitializer(this.recurrentInitializer),
      biasInitializer: serializeInitializer(this.biasInitializer),
      kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
      recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
      biasRegularizer: serializeRegularizer(this.biasRegularizer),
      activityRegularizer: serializeRegularizer(this.activityRegularizer),
      kernelConstraint: serializeConstraint(this.kernelConstraint),
      recurrentConstraint: serializeConstraint(this.recurrentConstraint),
      biasConstraint: serializeConstraint(this.biasConstraint),
      dropout: this.dropout,
      recurrentDropout: this.recurrentDropout,
      implementation: this.implementation,
      resetAfter: false
    };
    return { ...baseConfig, ...config };
  }
};
__publicField(GRUCell, "className", "GRUCell");
serialization_exports.registerClass(GRUCell);
var GRU = class extends RNN {
  constructor(args) {
    if (args.implementation === 0) {
      console.warn(
        "`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."
      );
    }
    args.cell = new GRUCell(args);
    super(args);
  }
  call(inputs, kwargs) {
    return tidy(() => {
      if (this.cell.dropoutMask != null) {
        dispose(this.cell.dropoutMask);
        this.cell.dropoutMask = null;
      }
      if (this.cell.recurrentDropoutMask != null) {
        dispose(this.cell.recurrentDropoutMask);
        this.cell.recurrentDropoutMask = null;
      }
      const mask = kwargs == null ? null : kwargs["mask"];
      const training = kwargs == null ? null : kwargs["training"];
      const initialState = kwargs == null ? null : kwargs["initialState"];
      return super.call(inputs, { mask, training, initialState });
    });
  }
  static fromConfig(cls, config) {
    if (config["implmentation"] === 0) {
      config["implementation"] = 1;
    }
    return new cls(config);
  }
};
__publicField(GRU, "className", "GRU");
serialization_exports.registerClass(GRU);
var LSTMCell = class extends RNNCell {
  units;
  activation;
  recurrentActivation;
  useBias;
  kernelInitializer;
  recurrentInitializer;
  biasInitializer;
  unitForgetBias;
  kernelConstraint;
  recurrentConstraint;
  biasConstraint;
  kernelRegularizer;
  recurrentRegularizer;
  biasRegularizer;
  dropout;
  recurrentDropout;
  dropoutFunc;
  stateSize;
  implementation;
  DEFAULT_ACTIVATION = "tanh";
  DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid";
  DEFAULT_KERNEL_INITIALIZER = "glorotNormal";
  DEFAULT_RECURRENT_INITIALIZER = "orthogonal";
  DEFAULT_BIAS_INITIALIZER = "zeros";
  kernel;
  recurrentKernel;
  bias;
  constructor(args) {
    super(args);
    this.units = args.units;
    assertPositiveInteger(this.units, "units");
    this.activation = getActivation(
      args.activation === void 0 ? this.DEFAULT_ACTIVATION : args.activation
    );
    this.recurrentActivation = getActivation(
      args.recurrentActivation === void 0 ? this.DEFAULT_RECURRENT_ACTIVATION : args.recurrentActivation
    );
    this.useBias = args.useBias == null ? true : args.useBias;
    this.kernelInitializer = getInitializer(
      args.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
    );
    this.recurrentInitializer = getInitializer(
      args.recurrentInitializer || this.DEFAULT_RECURRENT_INITIALIZER
    );
    this.biasInitializer = getInitializer(args.biasInitializer || this.DEFAULT_BIAS_INITIALIZER);
    this.unitForgetBias = args.unitForgetBias;
    this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
    this.recurrentRegularizer = getRegularizer(args.recurrentRegularizer);
    this.biasRegularizer = getRegularizer(args.biasRegularizer);
    this.kernelConstraint = getConstraint(args.kernelConstraint);
    this.recurrentConstraint = getConstraint(args.recurrentConstraint);
    this.biasConstraint = getConstraint(args.biasConstraint);
    this.dropout = min2(
      [1, max2([0, args.dropout == null ? 0 : args.dropout])]
    );
    this.recurrentDropout = min2([
      1,
      max2(
        [0, args.recurrentDropout == null ? 0 : args.recurrentDropout]
      )
    ]);
    this.dropoutFunc = args.dropoutFunc;
    this.implementation = args.implementation;
    this.stateSize = [this.units, this.units];
    this.dropoutMask = null;
    this.recurrentDropoutMask = null;
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const inputDim = inputShape[inputShape.length - 1];
    this.kernel = this.addWeight(
      "kernel",
      [inputDim, this.units * 4],
      null,
      this.kernelInitializer,
      this.kernelRegularizer,
      true,
      this.kernelConstraint
    );
    this.recurrentKernel = this.addWeight(
      "recurrent_kernel",
      [this.units, this.units * 4],
      null,
      this.recurrentInitializer,
      this.recurrentRegularizer,
      true,
      this.recurrentConstraint
    );
    let biasInitializer;
    if (this.useBias) {
      if (this.unitForgetBias) {
        const capturedBiasInit = this.biasInitializer;
        const capturedUnits = this.units;
        biasInitializer = new class CustomInit extends Initializer {
          static className = "CustomInit";
          apply(shape, dtype) {
            const bI = capturedBiasInit.apply([capturedUnits]);
            const bF = new Ones().apply([capturedUnits]);
            const bCAndH = capturedBiasInit.apply([capturedUnits * 2]);
            return concatAlongFirstAxis(
              concatAlongFirstAxis(bI, bF),
              bCAndH
            );
          }
        }();
      } else {
        biasInitializer = this.biasInitializer;
      }
      this.bias = this.addWeight(
        "bias",
        [this.units * 4],
        null,
        biasInitializer,
        this.biasRegularizer,
        true,
        this.biasConstraint
      );
    } else {
      this.bias = null;
    }
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      const training = kwargs["training"] == null ? false : kwargs["training"];
      inputs = inputs;
      if (inputs.length !== 3) {
        throw new ValueError(
          `LSTMCell expects 3 input Tensors (inputs, h, c), got ${inputs.length}.`
        );
      }
      let hTMinus1 = inputs[1];
      const cTMinus1 = inputs[2];
      inputs = inputs[0];
      if (0 < this.dropout && this.dropout < 1 && this.dropoutMask == null) {
        this.dropoutMask = generateDropoutMask({
          ones: () => onesLike(inputs),
          rate: this.dropout,
          training,
          count: 4,
          dropoutFunc: this.dropoutFunc
        });
      }
      if (0 < this.recurrentDropout && this.recurrentDropout < 1 && this.recurrentDropoutMask == null) {
        this.recurrentDropoutMask = generateDropoutMask({
          ones: () => onesLike(hTMinus1),
          rate: this.recurrentDropout,
          training,
          count: 4,
          dropoutFunc: this.dropoutFunc
        });
      }
      const dpMask = this.dropoutMask;
      const recDpMask = this.recurrentDropoutMask;
      let i;
      let f;
      let c;
      let o;
      if (0 < this.dropout && this.dropout < 1) {
        inputs = mul(inputs, dpMask[0]);
      }
      let z = dot2(inputs, this.kernel.read());
      if (0 < this.recurrentDropout && this.recurrentDropout < 1) {
        hTMinus1 = mul(hTMinus1, recDpMask[0]);
      }
      z = add2(z, dot2(hTMinus1, this.recurrentKernel.read()));
      if (this.useBias) {
        z = biasAdd(z, this.bias.read());
      }
      const [z0, z1, z2, z3] = split(z, 4, z.rank - 1);
      i = this.recurrentActivation.apply(z0);
      f = this.recurrentActivation.apply(z1);
      c = add2(mul(f, cTMinus1), mul(i, this.activation.apply(z2)));
      o = this.recurrentActivation.apply(z3);
      const h = mul(o, this.activation.apply(c));
      return [h, h, c];
    });
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const config = {
      units: this.units,
      activation: serializeActivation(this.activation),
      recurrentActivation: serializeActivation(this.recurrentActivation),
      useBias: this.useBias,
      kernelInitializer: serializeInitializer(this.kernelInitializer),
      recurrentInitializer: serializeInitializer(this.recurrentInitializer),
      biasInitializer: serializeInitializer(this.biasInitializer),
      unitForgetBias: this.unitForgetBias,
      kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
      recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
      biasRegularizer: serializeRegularizer(this.biasRegularizer),
      activityRegularizer: serializeRegularizer(this.activityRegularizer),
      kernelConstraint: serializeConstraint(this.kernelConstraint),
      recurrentConstraint: serializeConstraint(this.recurrentConstraint),
      biasConstraint: serializeConstraint(this.biasConstraint),
      dropout: this.dropout,
      recurrentDropout: this.recurrentDropout,
      implementation: this.implementation
    };
    return { ...baseConfig, ...config };
  }
};
__publicField(LSTMCell, "className", "LSTMCell");
serialization_exports.registerClass(LSTMCell);
var LSTM = class extends RNN {
  constructor(args) {
    if (args.implementation === 0) {
      console.warn(
        "`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."
      );
    }
    args.cell = new LSTMCell(args);
    super(args);
  }
  call(inputs, kwargs) {
    return tidy(() => {
      if (this.cell.dropoutMask != null) {
        dispose(this.cell.dropoutMask);
        this.cell.dropoutMask = null;
      }
      if (this.cell.recurrentDropoutMask != null) {
        dispose(this.cell.recurrentDropoutMask);
        this.cell.recurrentDropoutMask = null;
      }
      const mask = kwargs == null ? null : kwargs["mask"];
      const training = kwargs == null ? null : kwargs["training"];
      const initialState = kwargs == null ? null : kwargs["initialState"];
      return super.call(inputs, { mask, training, initialState });
    });
  }
  static fromConfig(cls, config) {
    if (config["implmentation"] === 0) {
      config["implementation"] = 1;
    }
    return new cls(config);
  }
};
__publicField(LSTM, "className", "LSTM");
serialization_exports.registerClass(LSTM);
var StackedRNNCells = class extends RNNCell {
  cells;
  constructor(args) {
    super(args);
    this.cells = args.cells;
  }
  get stateSize() {
    const stateSize = [];
    for (const cell of this.cells.slice().reverse()) {
      if (Array.isArray(cell.stateSize)) {
        stateSize.push(...cell.stateSize);
      } else {
        stateSize.push(cell.stateSize);
      }
    }
    return stateSize;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = inputs;
      let states = inputs.slice(1);
      const nestedStates = [];
      for (const cell of this.cells.slice().reverse()) {
        if (Array.isArray(cell.stateSize)) {
          nestedStates.push(states.splice(0, cell.stateSize.length));
        } else {
          nestedStates.push(states.splice(0, 1));
        }
      }
      nestedStates.reverse();
      const newNestedStates = [];
      let callInputs;
      for (let i = 0; i < this.cells.length; ++i) {
        const cell = this.cells[i];
        states = nestedStates[i];
        if (i === 0) {
          callInputs = [inputs[0]].concat(states);
        } else {
          callInputs = [callInputs[0]].concat(states);
        }
        callInputs = cell.call(callInputs, kwargs);
        newNestedStates.push(callInputs.slice(1));
      }
      states = [];
      for (const cellStates of newNestedStates.slice().reverse()) {
        states.push(...cellStates);
      }
      return [callInputs[0]].concat(states);
    });
  }
  build(inputShape) {
    if (isArrayOfShapes(inputShape)) {
      inputShape = inputShape[0];
    }
    inputShape = inputShape;
    let outputDim;
    this.cells.forEach((cell, i) => {
      nameScope(`RNNCell_${i}`, () => {
        cell.build(inputShape);
        if (Array.isArray(cell.stateSize)) {
          outputDim = cell.stateSize[0];
        } else {
          outputDim = cell.stateSize;
        }
        inputShape = [inputShape[0], outputDim];
      });
    });
    this.built = true;
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const getCellConfig = (cell) => {
      return {
        "className": cell.getClassName(),
        "config": cell.getConfig()
      };
    };
    const cellConfigs = this.cells.map(getCellConfig);
    const config = { "cells": cellConfigs };
    return { ...baseConfig, ...config };
  }
  static fromConfig(cls, config, customObjects = {}) {
    const cells = [];
    for (const cellConfig of config["cells"]) {
      cells.push(deserialize(cellConfig, customObjects));
    }
    return new cls({ cells });
  }
  get trainableWeights() {
    if (!this.trainable) {
      return [];
    }
    const weights = [];
    for (const cell of this.cells) {
      weights.push(...cell.trainableWeights);
    }
    return weights;
  }
  get nonTrainableWeights() {
    const weights = [];
    for (const cell of this.cells) {
      weights.push(...cell.nonTrainableWeights);
    }
    if (!this.trainable) {
      const trainableWeights = [];
      for (const cell of this.cells) {
        trainableWeights.push(...cell.trainableWeights);
      }
      return trainableWeights.concat(weights);
    }
    return weights;
  }
  getWeights() {
    const weights = [];
    for (const cell of this.cells) {
      weights.push(...cell.weights);
    }
    return batchGetValue(weights);
  }
  setWeights(weights) {
    const tuples = [];
    for (const cell of this.cells) {
      const numParams = cell.weights.length;
      const inputWeights = weights.splice(numParams);
      for (let i = 0; i < cell.weights.length; ++i) {
        tuples.push([cell.weights[i], inputWeights[i]]);
      }
    }
    batchSetValue(tuples);
  }
};
__publicField(StackedRNNCells, "className", "StackedRNNCells");
serialization_exports.registerClass(StackedRNNCells);
function generateDropoutMask(args) {
  const { ones: ones4, rate, training = false, count: count2 = 1, dropoutFunc } = args;
  const droppedInputs = () => dropoutFunc != null ? dropoutFunc(ones4(), rate) : dropout2(ones4(), rate);
  const createMask = () => inTrainPhase(droppedInputs, ones4, training);
  if (!count2 || count2 <= 1) {
    return keep(createMask().clone());
  }
  const masks = Array(count2).fill(void 0).map(createMask);
  return masks.map((m) => keep(m.clone()));
}

// src/tfjs-layers/src/layers/convolutional_recurrent.ts
var ConvRNN2D = class extends RNN {
  cell;
  constructor(args) {
    if (args.unroll) {
      throw new NotImplementedError(
        "Unrolling is not possible with convolutional RNNs."
      );
    }
    if (Array.isArray(args.cell)) {
      throw new NotImplementedError(
        "It is not possible at the moment to stack convolutional cells."
      );
    }
    super(args);
    this.inputSpec = [new InputSpec({ ndim: 5 })];
  }
  call(inputs, kwargs) {
    return tidy(() => {
      if (this.cell.dropoutMask != null) {
        dispose(this.cell.dropoutMask);
        this.cell.dropoutMask = null;
      }
      if (this.cell.recurrentDropoutMask != null) {
        dispose(this.cell.recurrentDropoutMask);
        this.cell.recurrentDropoutMask = null;
      }
      if (kwargs && kwargs["constants"]) {
        throw new ValueError("ConvRNN2D cell does not support constants");
      }
      const mask = kwargs == null ? null : kwargs["mask"];
      const training = kwargs == null ? null : kwargs["training"];
      const initialState = kwargs == null ? null : kwargs["initialState"];
      return super.call(inputs, { mask, training, initialState });
    });
  }
  computeOutputShape(inputShape) {
    let outShape = this.computeSingleOutputShape(inputShape);
    if (!this.returnSequences) {
      outShape = [outShape[0], ...outShape.slice(2)];
    }
    if (this.returnState) {
      outShape = [outShape, ...Array(2).fill([inputShape[0], ...outShape.slice(-3)])];
    }
    return outShape;
  }
  getInitialState(inputs) {
    return tidy(() => {
      const { stateSize } = this.cell;
      const inputShape = inputs.shape;
      const outputShape = this.computeSingleOutputShape(inputShape);
      const stateShape = [outputShape[0], ...outputShape.slice(2)];
      const initialState = zeros(stateShape);
      if (Array.isArray(stateSize)) {
        return Array(stateSize.length).fill(initialState);
      }
      return [initialState];
    });
  }
  resetStates(states, training = false) {
    tidy(() => {
      if (!this.stateful) {
        throw new AttributeError(
          "Cannot call resetStates() on an RNN Layer that is not stateful."
        );
      }
      const inputShape = this.inputSpec[0].shape;
      const outputShape = this.computeSingleOutputShape(inputShape);
      const stateShape = [outputShape[0], ...outputShape.slice(2)];
      const batchSize = inputShape[0];
      if (batchSize == null) {
        throw new ValueError(
          "If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer."
        );
      }
      if (this.getStates() == null) {
        if (Array.isArray(this.cell.stateSize)) {
          this.states_ = this.cell.stateSize.map(() => zeros(stateShape));
        } else {
          this.states_ = [zeros(stateShape)];
        }
      } else if (states == null) {
        dispose(this.states_);
        if (this.keptStates != null) {
          dispose(this.keptStates);
          this.keptStates = [];
        }
        if (Array.isArray(this.cell.stateSize)) {
          this.states_ = this.cell.stateSize.map(() => zeros(stateShape));
        } else {
          this.states_[0] = zeros(stateShape);
        }
      } else {
        if (!Array.isArray(states)) {
          states = [states];
        }
        if (states.length !== this.states_.length) {
          throw new ValueError(
            `Layer ${this.name} expects ${this.states_.length} state(s), but it received ${states.length} state value(s). Input received: ${states}`
          );
        }
        if (training) {
          this.keptStates.push(this.states_.slice());
        } else {
          dispose(this.states_);
        }
        for (let index = 0; index < this.states_.length; ++index) {
          const value = states[index];
          const expectedShape = stateShape;
          if (!util_exports.arraysEqual(value.shape, expectedShape)) {
            throw new ValueError(
              `State ${index} is incompatible with layer ${this.name}: expected shape=${expectedShape}, received shape=${value.shape}`
            );
          }
          this.states_[index] = value;
        }
      }
      this.states_ = this.states_.map((state) => keep(state.clone()));
    });
  }
  computeSingleOutputShape(inputShape) {
    const { dataFormat, filters, kernelSize, padding, strides, dilationRate } = this.cell;
    const isChannelsFirst = dataFormat === "channelsFirst";
    const h = inputShape[isChannelsFirst ? 3 : 2];
    const w = inputShape[isChannelsFirst ? 4 : 3];
    const hOut = convOutputLength(
      h,
      kernelSize[0],
      padding,
      strides[0],
      dilationRate[0]
    );
    const wOut = convOutputLength(
      w,
      kernelSize[1],
      padding,
      strides[1],
      dilationRate[1]
    );
    const outShape = [
      ...inputShape.slice(0, 2),
      ...isChannelsFirst ? [filters, hOut, wOut] : [hOut, wOut, filters]
    ];
    return outShape;
  }
};
__publicField(ConvRNN2D, "className", "ConvRNN2D");
var ConvLSTM2DCell = class extends LSTMCell {
  filters;
  kernelSize;
  strides;
  padding;
  dataFormat;
  dilationRate;
  constructor(args) {
    const {
      filters,
      kernelSize,
      strides,
      padding,
      dataFormat,
      dilationRate
    } = args;
    super({ ...args, units: filters });
    this.filters = filters;
    assertPositiveInteger(this.filters, "filters");
    this.kernelSize = normalizeArray(kernelSize, 2, "kernelSize");
    this.kernelSize.forEach((size) => assertPositiveInteger(size, "kernelSize"));
    this.strides = normalizeArray(strides || 1, 2, "strides");
    this.strides.forEach((stride) => assertPositiveInteger(stride, "strides"));
    this.padding = padding || "valid";
    checkPaddingMode(this.padding);
    this.dataFormat = dataFormat || "channelsLast";
    checkDataFormat(this.dataFormat);
    this.dilationRate = normalizeArray(dilationRate || 1, 2, "dilationRate");
    this.dilationRate.forEach(
      (rate) => assertPositiveInteger(rate, "dilationRate")
    );
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const channelAxis = this.dataFormat === "channelsFirst" ? 1 : inputShape.length - 1;
    if (inputShape[channelAxis] == null) {
      throw new ValueError(
        `The channel dimension of the input should be defined. Found ${inputShape[channelAxis]}`
      );
    }
    const inputDim = inputShape[channelAxis];
    const numOfKernels = 4;
    const kernelShape = this.kernelSize.concat([inputDim, this.filters * numOfKernels]);
    this.kernel = this.addWeight(
      "kernel",
      kernelShape,
      null,
      this.kernelInitializer,
      this.kernelRegularizer,
      true,
      this.kernelConstraint
    );
    const recurrentKernelShape = this.kernelSize.concat([this.filters, this.filters * numOfKernels]);
    this.recurrentKernel = this.addWeight(
      "recurrent_kernel",
      recurrentKernelShape,
      null,
      this.recurrentInitializer,
      this.recurrentRegularizer,
      true,
      this.recurrentConstraint
    );
    if (this.useBias) {
      let biasInitializer;
      if (this.unitForgetBias) {
        const init = this.biasInitializer;
        const filters = this.filters;
        biasInitializer = new class CustomInit extends Initializer {
          static className = "CustomInit";
          apply(shape, dtype) {
            const biasI = init.apply([filters]);
            const biasF = ones2([filters]);
            const biasCAndO = init.apply([filters * 2]);
            return concatenate([biasI, biasF, biasCAndO]);
          }
        }();
      } else {
        biasInitializer = this.biasInitializer;
      }
      this.bias = this.addWeight(
        "bias",
        [this.filters * numOfKernels],
        null,
        biasInitializer,
        this.biasRegularizer,
        true,
        this.biasConstraint
      );
    }
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      if (inputs.length !== 3) {
        throw new ValueError(
          `ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${inputs.length}.`
        );
      }
      const training = kwargs["training"] || false;
      const x = inputs[0];
      const hTMinus1 = inputs[1];
      const cTMinus1 = inputs[2];
      const numOfKernels = 4;
      if (0 < this.dropout && this.dropout < 1 && this.dropoutMask == null) {
        this.dropoutMask = generateDropoutMask({
          ones: () => onesLike(x),
          rate: this.dropout,
          training,
          count: numOfKernels,
          dropoutFunc: this.dropoutFunc
        });
      }
      const dropoutMask = this.dropoutMask;
      const applyDropout = (x2, mask, index) => {
        if (!mask || !mask[index]) {
          return x2;
        }
        return mul(mask[index], x2);
      };
      let xI = applyDropout(x, dropoutMask, 0);
      let xF = applyDropout(x, dropoutMask, 1);
      let xC = applyDropout(x, dropoutMask, 2);
      let xO = applyDropout(x, dropoutMask, 3);
      if (0 < this.recurrentDropout && this.recurrentDropout < 1 && this.recurrentDropoutMask == null) {
        this.recurrentDropoutMask = generateDropoutMask({
          ones: () => onesLike(hTMinus1),
          rate: this.recurrentDropout,
          training,
          count: numOfKernels,
          dropoutFunc: this.dropoutFunc
        });
      }
      const recDropoutMask = this.recurrentDropoutMask;
      let hI = applyDropout(hTMinus1, recDropoutMask, 0);
      let hF = applyDropout(hTMinus1, recDropoutMask, 1);
      let hC = applyDropout(hTMinus1, recDropoutMask, 2);
      let hO = applyDropout(hTMinus1, recDropoutMask, 3);
      const kernelChannelAxis = 3;
      const [kernelI, kernelF, kernelC, kernelO] = split(this.kernel.read(), numOfKernels, kernelChannelAxis);
      const [biasI, biasF, biasC, biasO] = this.useBias ? split(this.bias.read(), numOfKernels) : [null, null, null, null];
      xI = this.inputConv(xI, kernelI, biasI, this.padding);
      xF = this.inputConv(xF, kernelF, biasF, this.padding);
      xC = this.inputConv(xC, kernelC, biasC, this.padding);
      xO = this.inputConv(xO, kernelO, biasO, this.padding);
      const [recKernelI, recKernelF, recKernelC, recKernelO] = split(
        this.recurrentKernel.read(),
        numOfKernels,
        kernelChannelAxis
      );
      hI = this.recurrentConv(hI, recKernelI);
      hF = this.recurrentConv(hF, recKernelF);
      hC = this.recurrentConv(hC, recKernelC);
      hO = this.recurrentConv(hO, recKernelO);
      const i = this.recurrentActivation.apply(add2(xI, hI));
      const f = this.recurrentActivation.apply(add2(xF, hF));
      const c = add2(
        mul(f, cTMinus1),
        mul(i, this.activation.apply(add2(xC, hC)))
      );
      const h = mul(
        this.recurrentActivation.apply(add2(xO, hO)),
        this.activation.apply(c)
      );
      return [h, h, c];
    });
  }
  getConfig() {
    const { "units": _, ...baseConfig } = super.getConfig();
    const config = {
      filters: this.filters,
      kernelSize: this.kernelSize,
      padding: this.padding,
      dataFormat: this.dataFormat,
      dilationRate: this.dilationRate,
      strides: this.strides
    };
    return { ...baseConfig, ...config };
  }
  inputConv(x, w, b, padding) {
    const out = conv2d(
      x,
      w,
      this.strides,
      padding || "valid",
      this.dataFormat === "channelsFirst" ? "NCHW" : "NHWC",
      this.dilationRate
    );
    if (b) {
      return biasAdd(out, b, this.dataFormat);
    }
    return out;
  }
  recurrentConv(x, w) {
    const strides = 1;
    return conv2d(
      x,
      w,
      strides,
      "same",
      this.dataFormat === "channelsFirst" ? "NCHW" : "NHWC"
    );
  }
};
__publicField(ConvLSTM2DCell, "className", "ConvLSTM2DCell");
serialization_exports.registerClass(ConvLSTM2DCell);
var ConvLSTM2D = class extends ConvRNN2D {
  constructor(args) {
    const cell = new ConvLSTM2DCell(args);
    super({ ...args, cell });
  }
  static fromConfig(cls, config) {
    return new cls(config);
  }
};
__publicField(ConvLSTM2D, "className", "ConvLSTM2D");
serialization_exports.registerClass(ConvLSTM2D);

// src/tfjs-layers/src/layers/core.ts
var Dropout = class extends Layer {
  rate;
  noiseShape;
  seed;
  constructor(args) {
    super(args);
    this.rate = Math.max(Math.min(args.rate, 1), 0);
    this.noiseShape = args.noiseShape;
    this.seed = args.seed;
    this.supportsMasking = true;
  }
  getNoiseShape(input2) {
    if (this.noiseShape == null) {
      return this.noiseShape;
    }
    const inputShape = input2.shape;
    const noiseShape = [];
    for (let i = 0; i < this.noiseShape.length; ++i) {
      noiseShape.push(
        this.noiseShape[i] == null ? inputShape[i] : this.noiseShape[i]
      );
    }
    return noiseShape;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      const input2 = getExactlyOneTensor(inputs);
      if (0 < this.rate && this.rate < 1) {
        const training = kwargs["training"] == null ? false : kwargs["training"];
        const noiseShape = this.getNoiseShape(input2);
        const output = inTrainPhase(
          () => dropout2(input2, this.rate, noiseShape, this.seed),
          () => input2,
          training
        );
        return output;
      }
      return inputs;
    });
  }
  getConfig() {
    const config = {
      rate: this.rate,
      noiseShape: this.noiseShape,
      seed: this.seed
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
  dispose() {
    return super.dispose();
  }
};
__publicField(Dropout, "className", "Dropout");
serialization_exports.registerClass(Dropout);
var SpatialDropout1D = class extends Dropout {
  constructor(args) {
    super(args);
    this.inputSpec = [{ ndim: 3 }];
  }
  getNoiseShape(input2) {
    const inputShape = input2.shape;
    return [inputShape[0], 1, inputShape[2]];
  }
};
__publicField(SpatialDropout1D, "className", "SpatialDropout1D");
serialization_exports.registerClass(SpatialDropout1D);
var Dense = class extends Layer {
  units;
  activation = null;
  useBias = true;
  kernelInitializer;
  biasInitializer;
  kernel = null;
  bias = null;
  DEFAULT_KERNEL_INITIALIZER = "glorotNormal";
  DEFAULT_BIAS_INITIALIZER = "zeros";
  kernelConstraint;
  biasConstraint;
  kernelRegularizer;
  biasRegularizer;
  constructor(args) {
    super(args);
    if (args.batchInputShape == null && args.inputShape == null && args.inputDim != null) {
      let batchSize = null;
      if (args.batchSize != null) {
        batchSize = args.batchSize;
      }
      this.batchInputShape = [batchSize, args.inputDim];
    }
    this.units = args.units;
    assertPositiveInteger(this.units, "units");
    this.activation = getActivation(args.activation);
    if (args.useBias != null) {
      this.useBias = args.useBias;
    }
    this.kernelInitializer = getInitializer(
      args.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
    );
    this.biasInitializer = getInitializer(args.biasInitializer || this.DEFAULT_BIAS_INITIALIZER);
    this.kernelConstraint = getConstraint(args.kernelConstraint);
    this.biasConstraint = getConstraint(args.biasConstraint);
    this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
    this.biasRegularizer = getRegularizer(args.biasRegularizer);
    this.activityRegularizer = getRegularizer(args.activityRegularizer);
    this.supportsMasking = true;
    this.inputSpec = [{ minNDim: 2 }];
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const inputLastDim = inputShape[inputShape.length - 1];
    if (this.kernel == null) {
      this.kernel = this.addWeight(
        "kernel",
        [inputLastDim, this.units],
        null,
        this.kernelInitializer,
        this.kernelRegularizer,
        true,
        this.kernelConstraint
      );
      if (this.useBias) {
        this.bias = this.addWeight(
          "bias",
          [this.units],
          null,
          this.biasInitializer,
          this.biasRegularizer,
          true,
          this.biasConstraint
        );
      }
    }
    this.inputSpec = [{ minNDim: 2, axes: { [-1]: inputLastDim } }];
    this.built = true;
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const outputShape = inputShape.slice();
    outputShape[outputShape.length - 1] = this.units;
    return outputShape;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      const input2 = getExactlyOneTensor(inputs);
      const fusedActivationName = mapActivationToFusedKernel(this.activation.getClassName());
      let output;
      if (fusedActivationName != null) {
        output = dot2(
          input2,
          this.kernel.read(),
          fusedActivationName,
          this.bias ? this.bias.read() : null
        );
      } else {
        output = dot2(input2, this.kernel.read());
        if (this.bias != null) {
          output = biasAdd(output, this.bias.read());
        }
        if (this.activation != null) {
          output = this.activation.apply(output);
        }
      }
      return output;
    });
  }
  getConfig() {
    const config = {
      units: this.units,
      activation: serializeActivation(this.activation),
      useBias: this.useBias,
      kernelInitializer: serializeInitializer(this.kernelInitializer),
      biasInitializer: serializeInitializer(this.biasInitializer),
      kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
      biasRegularizer: serializeRegularizer(this.biasRegularizer),
      activityRegularizer: serializeRegularizer(this.activityRegularizer),
      kernelConstraint: serializeConstraint(this.kernelConstraint),
      biasConstraint: serializeConstraint(this.biasConstraint)
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Dense, "className", "Dense");
serialization_exports.registerClass(Dense);
var Flatten = class extends Layer {
  dataFormat;
  constructor(args) {
    args = args || {};
    super(args);
    this.inputSpec = [{ minNDim: 3 }];
    this.dataFormat = args.dataFormat;
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    for (const dim of inputShape.slice(1)) {
      if (dim == null) {
        throw new ValueError(
          `The shape of the input to "Flatten" is not fully defined (got ${inputShape.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`
        );
      }
    }
    return [inputShape[0], arrayProd(inputShape, 1)];
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      let input2 = getExactlyOneTensor(inputs);
      if (this.dataFormat === "channelsFirst" && input2.rank > 1) {
        const permutation = [0];
        for (let i = 2; i < input2.rank; ++i) {
          permutation.push(i);
        }
        permutation.push(1);
        input2 = transpose(input2, permutation);
      }
      return batchFlatten(input2);
    });
  }
  getConfig() {
    const config = {};
    if (this.dataFormat != null) {
      config["dataFormat"] = this.dataFormat;
    }
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Flatten, "className", "Flatten");
serialization_exports.registerClass(Flatten);
var Activation5 = class extends Layer {
  activation;
  constructor(args) {
    super(args);
    this.supportsMasking = true;
    this.activation = getActivation(args.activation);
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      const input2 = getExactlyOneTensor(inputs);
      return this.activation.apply(input2);
    });
  }
  getConfig() {
    const config = { activation: serializeActivation(this.activation) };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Activation5, "className", "Activation");
serialization_exports.registerClass(Activation5);
var RepeatVector = class extends Layer {
  n;
  constructor(args) {
    super(args);
    this.n = args.n;
    this.inputSpec = [{ ndim: 2 }];
  }
  computeOutputShape(inputShape) {
    return [inputShape[0], this.n, inputShape[1]];
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = getExactlyOneTensor(inputs);
      return repeat(inputs, this.n);
    });
  }
  getConfig() {
    const config = {
      n: this.n
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(RepeatVector, "className", "RepeatVector");
serialization_exports.registerClass(RepeatVector);
var Reshape2 = class extends Layer {
  targetShape;
  constructor(args) {
    super(args);
    this.targetShape = args.targetShape;
    for (let i = 0; i < this.targetShape.length; ++i) {
      if (this.isUnknown(this.targetShape[i])) {
        this.targetShape[i] = null;
      }
    }
  }
  isUnknown(dim) {
    return dim < 0 || dim == null;
  }
  fixUnknownDimension(inputShape, outputShape) {
    const errorMsg = "Total size of new array must be unchanged.";
    const finalShape = outputShape.slice();
    let known = 1;
    let unknown = null;
    for (let i = 0; i < finalShape.length; ++i) {
      const dim = finalShape[i];
      if (this.isUnknown(dim)) {
        if (unknown === null) {
          unknown = i;
        } else {
          throw new ValueError("Can only specifiy one unknown dimension.");
        }
      } else {
        known *= dim;
      }
    }
    const originalSize = arrayProd(inputShape);
    if (unknown !== null) {
      if (known === 0 || originalSize % known !== 0) {
        throw new ValueError(errorMsg);
      }
      finalShape[unknown] = originalSize / known;
    } else if (originalSize !== known) {
      throw new ValueError(errorMsg);
    }
    return finalShape;
  }
  computeOutputShape(inputShape) {
    let anyUnknownDims = false;
    for (let i = 0; i < inputShape.length; ++i) {
      if (this.isUnknown(inputShape[i])) {
        anyUnknownDims = true;
        break;
      }
    }
    if (anyUnknownDims) {
      return inputShape.slice(0, 1).concat(this.targetShape);
    } else {
      return inputShape.slice(0, 1).concat(
        this.fixUnknownDimension(inputShape.slice(1), this.targetShape)
      );
    }
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      const input2 = getExactlyOneTensor(inputs);
      const inputShape = input2.shape;
      const outputShape = inputShape.slice(0, 1).concat(
        this.fixUnknownDimension(inputShape.slice(1), this.targetShape)
      );
      return reshape(input2, outputShape);
    });
  }
  getConfig() {
    const config = {
      targetShape: this.targetShape
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Reshape2, "className", "Reshape");
serialization_exports.registerClass(Reshape2);
var Permute = class extends Layer {
  dims;
  dimsIncludingBatch;
  constructor(args) {
    super(args);
    if (args.dims == null) {
      throw new Error(
        "Required configuration field `dims` is missing during Permute constructor call."
      );
    }
    if (!Array.isArray(args.dims)) {
      throw new Error(
        `Permute constructor requires \`dims\` to be an Array, but received ${args.dims} instead.`
      );
    }
    const expectedSortedIndices = range2(1, args.dims.length + 1);
    if (!util_exports.arraysEqual(args.dims.slice().sort(), expectedSortedIndices)) {
      throw new Error(
        "Invalid permutation `dims`: " + JSON.stringify(args.dims) + " `dims` must contain consecutive integers starting from 1."
      );
    }
    this.dims = args.dims;
    this.dimsIncludingBatch = [0].concat(this.dims);
    this.inputSpec = [new InputSpec({ ndim: this.dims.length + 1 })];
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const outputShape = inputShape.slice();
    this.dims.forEach((dim, i) => {
      outputShape[i + 1] = inputShape[dim];
    });
    return outputShape;
  }
  call(inputs, kwargs) {
    return transpose(getExactlyOneTensor(inputs), this.dimsIncludingBatch);
  }
  getConfig() {
    const config = {
      dims: this.dims
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Permute, "className", "Permute");
serialization_exports.registerClass(Permute);
var Masking = class extends Layer {
  maskValue;
  constructor(args) {
    super(args == null ? {} : args);
    this.supportsMasking = true;
    if (args != null) {
      this.maskValue = args.maskValue == null ? 0 : args.maskValue;
    } else {
      this.maskValue = 0;
    }
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const config = { maskValue: this.maskValue };
    Object.assign(config, baseConfig);
    return config;
  }
  computeMask(inputs, mask) {
    const input2 = getExactlyOneTensor(inputs);
    const axis = -1;
    return any(notEqual(input2, this.maskValue), axis);
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      const input2 = getExactlyOneTensor(inputs);
      const axis = -1;
      const keepDims = true;
      const booleanMask = any(notEqual(input2, this.maskValue), axis, keepDims);
      const output = mul(input2, cast(booleanMask, input2.dtype));
      return output;
    });
  }
};
__publicField(Masking, "className", "Masking");
serialization_exports.registerClass(Masking);

// src/tfjs-layers/src/layers/embeddings.ts
var Embedding = class extends Layer {
  inputDim;
  outputDim;
  embeddingsInitializer;
  maskZero;
  inputLength;
  embeddings = null;
  DEFAULT_EMBEDDINGS_INITIALIZER = "randomUniform";
  embeddingsRegularizer;
  embeddingsConstraint;
  constructor(args) {
    super(args);
    if (args.batchInputShape == null && args.inputShape == null) {
      let batchSize = null;
      if (args.batchSize != null) {
        batchSize = args.batchSize;
      }
      if (args.inputLength == null) {
        this.batchInputShape = [batchSize, null];
      } else {
        this.batchInputShape = [batchSize].concat(toList(args.inputLength));
      }
    }
    this.inputDim = args.inputDim;
    assertPositiveInteger(this.inputDim, "inputDim");
    this.outputDim = args.outputDim;
    assertPositiveInteger(this.outputDim, "outputDim");
    this.embeddingsInitializer = getInitializer(
      args.embeddingsInitializer || this.DEFAULT_EMBEDDINGS_INITIALIZER
    );
    this.embeddingsRegularizer = getRegularizer(args.embeddingsRegularizer);
    this.activityRegularizer = getRegularizer(args.activityRegularizer);
    this.embeddingsConstraint = getConstraint(args.embeddingsConstraint);
    this.maskZero = args.maskZero;
    this.supportsMasking = args.maskZero;
    this.inputLength = args.inputLength;
  }
  build(inputShape) {
    this.embeddings = this.addWeight(
      "embeddings",
      [this.inputDim, this.outputDim],
      this.dtype,
      this.embeddingsInitializer,
      this.embeddingsRegularizer,
      true,
      this.embeddingsConstraint
    );
    this.built = true;
  }
  warnOnIncompatibleInputShape(inputShape) {
  }
  computeMask(inputs, mask) {
    return tidy(() => {
      if (!this.maskZero) {
        return null;
      } else {
        inputs = getExactlyOneTensor(inputs);
        return notEqual(inputs, zerosLike(inputs));
      }
    });
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    if (this.inputLength == null) {
      return [...inputShape, this.outputDim];
    }
    const inLens = toList(this.inputLength);
    if (inLens.length !== inputShape.length - 1) {
      throw new ValueError(
        `"inputLength" is ${this.inputLength}, but received input shape has shape ${inputShape}`
      );
    } else {
      let i = 0;
      for (let k = 0; k < inLens.length; ++k) {
        const s1 = inLens[k];
        const s2 = inputShape[k + 1];
        if (s1 != null && s2 != null && s1 !== s2) {
          throw new ValueError(
            `"inputLength" is ${this.inputLength}, but received input shape has shape ${inputShape}`
          );
        } else if (s1 == null) {
          inLens[i] = s2;
        }
        i++;
      }
    }
    return [inputShape[0], ...inLens, this.outputDim];
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      let input2 = getExactlyOneTensor(inputs);
      if (input2.dtype !== "int32") {
        input2 = cast2(input2, "int32");
      }
      const output = gather2(this.embeddings.read(), reshape(input2, [input2.size]));
      return reshape(
        output,
        getExactlyOneShape(this.computeOutputShape(input2.shape))
      );
    });
  }
  getConfig() {
    const config = {
      inputDim: this.inputDim,
      outputDim: this.outputDim,
      embeddingsInitializer: serializeInitializer(this.embeddingsInitializer),
      embeddingsRegularizer: serializeRegularizer(this.embeddingsRegularizer),
      activityRegularizer: serializeRegularizer(this.activityRegularizer),
      embeddingsConstraint: serializeConstraint(this.embeddingsConstraint),
      maskZero: this.maskZero,
      inputLength: this.inputLength
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Embedding, "className", "Embedding");
serialization_exports.registerClass(Embedding);

// src/tfjs-layers/src/layers/merge.ts
var Merge = class extends Layer {
  reshapeRequired;
  constructor(args) {
    super(args || {});
    this.supportsMasking = true;
  }
  mergeFunction(inputs) {
    throw new NotImplementedError();
  }
  computeElementwiseOpOutputShape(shape1, shape2) {
    if (shape1 == null || shape2 == null) {
      return null;
    } else if (shape1.length < shape2.length) {
      return this.computeElementwiseOpOutputShape(shape2, shape1);
    } else if (shape2.length === 0) {
      return shape1;
    }
    const outputShape = shape1.slice(0, shape1.length - shape2.length);
    for (let k = 0; k < shape2.length; ++k) {
      const i = shape1[shape1.length - shape2.length + k];
      const j = shape2[k];
      if (i == null || j == null || i < 0 || j < 0) {
        outputShape.push(null);
      } else if (i === 1) {
        outputShape.push(j);
      } else if (j === 1) {
        outputShape.push(i);
      } else {
        if (i !== j) {
          throw new ValueError(
            "Operands could not be broadcast together with shapes " + JSON.stringify(shape1) + " " + JSON.stringify(shape2)
          );
        }
        outputShape.push(i);
      }
    }
    return outputShape;
  }
  build(inputShape) {
    if (Array.isArray(inputShape) && !Array.isArray(inputShape[0])) {
      inputShape = [getExactlyOneShape(inputShape)];
    }
    inputShape = inputShape;
    if (inputShape.length < 2) {
      throw new ValueError(
        `A merge layer should be called on an Array of at least 2 inputs. Got ${inputShape.length} input(s).`
      );
    }
    let batchSizes = [];
    for (const shape of inputShape) {
      if (shape != null && shape[0] !== null) {
        batchSizes.push(shape[0]);
      }
    }
    batchSizes = unique2(batchSizes);
    if (batchSizes.length > 1) {
      throw new ValueError(
        `Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(inputShape)}.`
      );
    }
    let outputShape = inputShape[0] == null ? null : inputShape[0].slice(1);
    for (let i = 1; i < inputShape.length; ++i) {
      const shape = inputShape[i] == null ? null : inputShape[i].slice(1);
      outputShape = this.computeElementwiseOpOutputShape(outputShape, shape);
    }
    const allRanks = inputShape.map((shape) => shape.length);
    if (inputShape.indexOf(null) === -1 && unique2(allRanks).length === 1) {
      this.reshapeRequired = false;
    } else {
      this.reshapeRequired = true;
    }
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = inputs;
      if (this.reshapeRequired) {
        const reshapedInputs = [];
        const inputDims = inputs.map((input2) => input2.rank);
        if (inputDims.indexOf(null) === -1) {
          const maxNDim = max2(inputDims);
          for (let x of inputs) {
            const xNDim = x.rank;
            for (let k = 0; k < maxNDim - xNDim; ++k) {
              x = expandDims2(x, 1);
            }
            reshapedInputs.push(x);
          }
          return this.mergeFunction(reshapedInputs);
        } else {
          let transposed = false;
          for (const x of inputs) {
            const xNDim = x.rank;
            if (xNDim == null) {
              const xShape = x.shape;
              const batchSize = xShape[0];
              const newShape = xShape.slice(1).concat([batchSize]);
              let xTransposed = reshape(
                x,
                [batchSize].concat(arrayProd(xShape.slice(1)))
              );
              xTransposed = transpose(xTransposed, [1, 0]);
              xTransposed = reshape(xTransposed, newShape);
              reshapedInputs.push(xTransposed);
              transposed = true;
            } else if (xNDim > 1) {
              const dims = range2(1, xNDim).concat([0]);
              reshapedInputs.push(transpose(x, dims));
              transposed = true;
            } else {
              reshapedInputs.push(x);
            }
          }
          let y = this.mergeFunction(reshapedInputs);
          const yNDim = y.rank;
          if (transposed) {
            if (yNDim == null) {
              const yShape = y.shape;
              const yNDim2 = yShape.length;
              const batchSize = yShape[yNDim2 - 1];
              const newShape = [batchSize].concat(yShape.slice(0, yShape.length - 1));
              y = reshape(
                transpose(reshape(y, [-1, batchSize]), [1, 0]),
                newShape
              );
            } else if (yNDim > 1) {
              const dims = [yNDim - 1].concat(range2(0, yNDim - 1));
              y = transpose(y, dims);
            }
          }
          return y;
        }
      } else {
        return this.mergeFunction(inputs);
      }
    });
  }
  computeOutputShape(inputShape) {
    inputShape = inputShape;
    let outputShape;
    if (inputShape[0] == null) {
      outputShape = null;
    } else {
      outputShape = inputShape[0].slice(1);
    }
    for (let i = 1; i < inputShape.length; ++i) {
      const shape = inputShape[i] == null ? null : inputShape[i].slice(1);
      outputShape = this.computeElementwiseOpOutputShape(outputShape, shape);
    }
    let batchSizes = [];
    for (const shape of inputShape) {
      if (shape != null && shape[0] !== null) {
        batchSizes.push(shape[0]);
      }
    }
    batchSizes = unique2(batchSizes);
    if (batchSizes.length === 1) {
      outputShape = batchSizes.concat(outputShape);
    } else {
      outputShape = [null].concat(outputShape);
    }
    return outputShape;
  }
  computeMask(inputs, mask) {
    return tidy(() => {
      if (mask == null) {
        return null;
      }
      if (!Array.isArray(mask)) {
        throw new ValueError("`mask` should be an Array");
      }
      if (!Array.isArray(inputs)) {
        throw new ValueError("`inputs` should be an Array");
      }
      if (mask.length !== inputs.length) {
        throw new ValueError(
          `The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${inputs.length} vs ${mask.length})`
        );
      }
      if (mask.every((m) => m == null)) {
        return null;
      }
      mask = mask.map((m) => m == null ? m : expandDims(m, 0));
      let output = mask[0];
      for (let i = 1; i < mask.length - 1; ++i) {
        output = logicalAnd(output, mask[i]);
      }
      return output;
    });
  }
};
var Add2 = class extends Merge {
  constructor(args) {
    super(args);
  }
  mergeFunction(inputs) {
    return tidy(() => {
      let output = inputs[0].clone();
      for (let i = 1; i < inputs.length; ++i) {
        output = add2(output, inputs[i]);
      }
      return output;
    });
  }
};
__publicField(Add2, "className", "Add");
serialization_exports.registerClass(Add2);
var Multiply2 = class extends Merge {
  constructor(args) {
    super(args);
  }
  mergeFunction(inputs) {
    return tidy(() => {
      let output = inputs[0].clone();
      for (let i = 1; i < inputs.length; ++i) {
        output = mul(output, inputs[i]);
      }
      return output;
    });
  }
};
__publicField(Multiply2, "className", "Multiply");
serialization_exports.registerClass(Multiply2);
var Average = class extends Merge {
  constructor(args) {
    super(args);
  }
  mergeFunction(inputs) {
    return tidy(() => {
      let output = inputs[0].clone();
      for (let i = 1; i < inputs.length; ++i) {
        output = add2(output, inputs[i]);
      }
      return mul(1 / inputs.length, output);
    });
  }
};
__publicField(Average, "className", "Average");
serialization_exports.registerClass(Average);
var Maximum2 = class extends Merge {
  constructor(args) {
    super(args);
  }
  mergeFunction(inputs) {
    return tidy(() => {
      let output = inputs[0];
      for (let i = 1; i < inputs.length; ++i) {
        output = maximum(output, inputs[i]);
      }
      return output;
    });
  }
};
__publicField(Maximum2, "className", "Maximum");
serialization_exports.registerClass(Maximum2);
var Minimum2 = class extends Merge {
  constructor(args) {
    super(args);
  }
  mergeFunction(inputs) {
    return tidy(() => {
      let output = inputs[0];
      for (let i = 1; i < inputs.length; ++i) {
        output = minimum(output, inputs[i]);
      }
      return output;
    });
  }
};
__publicField(Minimum2, "className", "Minimum");
serialization_exports.registerClass(Minimum2);
var Concatenate = class extends Merge {
  DEFAULT_AXIS = -1;
  axis;
  constructor(args) {
    super(args);
    if (args == null) {
      args = {};
    }
    this.axis = args.axis == null ? this.DEFAULT_AXIS : args.axis;
    this.supportsMasking = true;
    this.reshapeRequired = false;
  }
  build(inputShape) {
    if (!(Array.isArray(inputShape) && Array.isArray(inputShape[0])) || inputShape.length === 1) {
      throw new ValueError(
        "A `Concatenate` layer should be called on a list of at least 2 inputs"
      );
    }
    inputShape = inputShape;
    let allNoneShape = true;
    for (const shape of inputShape) {
      if (shape != null) {
        allNoneShape = false;
        break;
      }
    }
    if (allNoneShape) {
      return;
    }
    const shapeSet = [];
    for (let i = 0; i < inputShape.length; ++i) {
      const shapeWithoutConcatAxis = inputShape[i].slice();
      shapeWithoutConcatAxis.splice(this.axis, 1);
      let exists = false;
      for (const shape of shapeSet) {
        if (util_exports.arraysEqual(shape, shapeWithoutConcatAxis)) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        shapeSet.push(shapeWithoutConcatAxis);
      }
    }
    if (shapeSet.length > 1) {
      throw new ValueError(
        "A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: " + JSON.stringify(inputShape)
      );
    }
  }
  mergeFunction(inputs) {
    return tidy(() => {
      return concatenate(inputs, this.axis);
    });
  }
  computeOutputShape(inputShape) {
    if (!(Array.isArray(inputShape) && Array.isArray(inputShape[0]))) {
      throw new ValueError(
        "A `Concatenate` layer should be called on a list of inputs."
      );
    }
    const inputShapes = inputShape;
    const outputShape = inputShapes[0].slice();
    const axis = this.axis < 0 ? outputShape.length + this.axis : this.axis;
    for (const shape of inputShapes.slice(1)) {
      if (outputShape[axis] == null || shape[axis] == null) {
        outputShape[axis] = null;
        break;
      }
      outputShape[axis] += shape[axis];
    }
    return outputShape;
  }
  computeMask(inputs, mask) {
    if (mask == null) {
      return null;
    }
    if (!Array.isArray(mask)) {
      throw new ValueError("`mask` should be an array for Concatenate");
    }
    if (!Array.isArray(inputs)) {
      throw new ValueError("`inputs` should be an array for Concatenate");
    }
    if (mask.length !== inputs.length) {
      throw new ValueError(
        `Mismatch in the length of mask (${mask.length}) and the legnth of inputs (${inputs.length})`
      );
    }
    return tidy(() => {
      let allNullMasks = true;
      mask.forEach((m) => {
        if (m != null) {
          allNullMasks = false;
          return;
        }
      });
      if (allNullMasks) {
        return null;
      }
      const outputMasks = [];
      for (let i = 0; i < inputs.length; ++i) {
        if (mask[i] == null) {
          outputMasks.push(cast(onesLike(inputs[i]), "bool"));
        } else if (mask[i].rank < inputs[i].rank) {
          outputMasks.push(expandDims(mask[i], -1));
        } else {
          outputMasks.push(mask[i]);
        }
      }
      const concatenatedMasks = concat(outputMasks, this.axis);
      return all(concatenatedMasks, -1, false);
    });
  }
  getConfig() {
    const config = {
      "axis": this.axis
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Concatenate, "className", "Concatenate");
serialization_exports.registerClass(Concatenate);
function interpretAxis(axis, dim) {
  while (axis < 0) {
    axis += dim;
  }
  return axis;
}
function batchDot(x, y, axes) {
  if (x.shape.length > 3 || y.shape.length > 3) {
    throw new NotImplementedError(
      "batchDot is not implemented for tensors of 4D or higher rank yet"
    );
  }
  util_exports.assert(
    x.shape.length >= 2,
    () => `batchDot requires the rank of x to be >= 2, but got ${x.shape.length}`
  );
  util_exports.assert(
    x.shape.length >= 2,
    () => `batchDot requires the rank of y to be >= 2, but got ${y.shape.length}`
  );
  if (typeof axes === "number") {
    axes = [axes, axes];
  }
  if (x.dtype === "complex64" || y.dtype === "complex64") {
    throw new NotImplementedError(
      "batchDot is not implemented for complex64-type Tensors yet."
    );
  }
  const xNDim = x.shape.length;
  const yNDim = y.shape.length;
  if (axes == null) {
    axes = [xNDim - 1, yNDim - 2];
  }
  const axesArray = axes;
  return tidy(() => {
    let diff;
    if (xNDim > yNDim) {
      diff = xNDim - yNDim;
      const diffShape = [];
      for (let i = 0; i < diff; ++i) {
        diffShape.push(1);
      }
      y = reshape(y, y.shape.concat(diffShape));
    } else if (yNDim > xNDim) {
      diff = yNDim - xNDim;
      const diffShape = [];
      for (let i = 0; i < diff; ++i) {
        diffShape.push(1);
      }
      x = reshape(x, x.shape.concat(diffShape));
    } else {
      diff = 0;
    }
    let out;
    if (x.shape.length === 2 && y.shape.length === 2) {
      if (axesArray[0] === axesArray[1]) {
        out = sum2(mul(x, y), axesArray[0]);
      } else {
        out = sum2(mul(transpose(x, [1, 0]), y), axesArray[1]);
      }
    } else {
      const adjX = axesArray[0] !== x.shape.length - 1;
      const adjY = axesArray[1] === y.shape.length - 1;
      out = matMul(x, y, adjX, adjY);
    }
    if (diff > 0) {
      let idx;
      if (xNDim > yNDim) {
        idx = xNDim + yNDim - 3;
      } else {
        idx = xNDim - 1;
      }
      const squeezeAxes = [];
      for (let i = idx; i < idx + diff; ++i) {
        squeezeAxes.push(i);
      }
      out = squeeze(out, squeezeAxes);
    }
    if (out.shape.length === 1) {
      out = expandDims(out, 1);
    }
    return out;
  });
}
var Dot = class extends Merge {
  axes;
  normalize;
  constructor(args) {
    super(args);
    this.axes = args.axes;
    this.normalize = args.normalize == null ? false : args.normalize;
    this.supportsMasking = true;
    this.reshapeRequired = false;
  }
  build(inputShape) {
    util_exports.assert(
      Array.isArray(inputShape) && inputShape.length === 2 && Array.isArray(inputShape[0]) && Array.isArray(inputShape[1]),
      () => "A `Dot` layer should be called on a list of exactly 2 inputs."
    );
    const shape1 = inputShape[0];
    const shape2 = inputShape[1];
    if (shape1.length > 3 || shape2.length > 3) {
      throw new NotImplementedError(
        "Dot layer does not support tensors of 4D or higher rank yet."
      );
    }
    const axes = this.interpretAxes(shape1, shape2);
    if (shape1[axes[0]] !== shape2[axes[1]]) {
      throw new ValueError(
        `Dimension incompatibility: ${shape1[axes[0]]} !== ${shape2[axes[1]]}`
      );
    }
  }
  mergeFunction(inputs) {
    if (inputs.length !== 2) {
      throw new ValueError(
        `A \`Dot\` layer must be called on exactly 2 inputs, but received ${inputs.length} input(s).`
      );
    }
    let x1 = inputs[0];
    let x2 = inputs[1];
    let axes;
    if (!Array.isArray(this.axes)) {
      axes = [
        interpretAxis(this.axes, x1.shape.length),
        interpretAxis(this.axes, x2.shape.length)
      ];
    } else {
      axes = this.axes.map(
        (axis, i) => interpretAxis(
          axis,
          inputs[i].shape.length
        )
      );
    }
    if (this.normalize) {
      x1 = l2Normalize(x1, axes[0]);
      x2 = l2Normalize(x2, axes[1]);
    }
    return batchDot(x1, x2, axes);
  }
  interpretAxes(shape1, shape2) {
    let axes;
    if (!Array.isArray(this.axes)) {
      axes = [
        interpretAxis(this.axes, shape1.length),
        interpretAxis(this.axes, shape2.length)
      ];
    } else {
      axes = this.axes;
    }
    return axes;
  }
  computeOutputShape(inputShape) {
    util_exports.assert(
      Array.isArray(inputShape) && inputShape.length === 2 && Array.isArray(inputShape[0]) && Array.isArray(inputShape[1]),
      () => "A `Dot` layer should be called on a list of exactly 2 inputs."
    );
    const shape1 = inputShape[0].slice();
    const shape2 = inputShape[1].slice();
    if (shape1.length > 3 || shape2.length > 3) {
      throw new NotImplementedError(
        "Dot layer does not support tensors of 4D or higher rank yet."
      );
    }
    const axes = this.interpretAxes(shape1, shape2);
    shape1.splice(axes[0], 1);
    shape2.splice(axes[1], 1);
    shape2.splice(0, 1);
    const outputShape = shape1.concat(shape2);
    if (outputShape.length === 1) {
      outputShape.push(1);
    }
    return outputShape;
  }
  computeMask(inputs, mask) {
    return null;
  }
  getConfig() {
    const config = {
      "axes": this.axes,
      "normalize": this.normalize
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(Dot, "className", "Dot");
serialization_exports.registerClass(Dot);

// src/tfjs-layers/src/layers/noise.ts
var GaussianNoise = class extends Layer {
  stddev;
  constructor(args) {
    super(args);
    this.supportsMasking = true;
    this.stddev = args.stddev;
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const config = { stddev: this.stddev };
    Object.assign(config, baseConfig);
    return config;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      const input2 = getExactlyOneTensor(inputs);
      const noised = () => add2(randomNormal2(input2.shape, 0, this.stddev), input2);
      const output = inTrainPhase(noised, () => input2, kwargs["training"] || false);
      return output;
    });
  }
};
__publicField(GaussianNoise, "className", "GaussianNoise");
serialization_exports.registerClass(GaussianNoise);
var GaussianDropout = class extends Layer {
  rate;
  constructor(args) {
    super(args);
    this.supportsMasking = true;
    this.rate = args.rate;
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const config = { rate: this.rate };
    Object.assign(config, baseConfig);
    return config;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      const input2 = getExactlyOneTensor(inputs);
      if (this.rate > 0 && this.rate < 1) {
        const noised = () => {
          const stddev = Math.sqrt(this.rate / (1 - this.rate));
          return mul(input2, randomNormal2(input2.shape, 1, stddev));
        };
        return inTrainPhase(noised, () => input2, kwargs["training"] || false);
      }
      return input2;
    });
  }
};
__publicField(GaussianDropout, "className", "GaussianDropout");
serialization_exports.registerClass(GaussianDropout);
var AlphaDropout = class extends Layer {
  rate;
  noiseShape;
  constructor(args) {
    super(args);
    this.supportsMasking = true;
    this.rate = args.rate;
    this.noiseShape = args.noiseShape;
  }
  _getNoiseShape(inputs) {
    return this.noiseShape || getExactlyOneTensor(inputs).shape;
  }
  computeOutputShape(inputShape) {
    return inputShape;
  }
  getConfig() {
    const baseConfig = super.getConfig();
    const config = { rate: this.rate };
    Object.assign(config, baseConfig);
    return config;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      if (this.rate < 1 && this.rate > 0) {
        const noiseShape = this._getNoiseShape(inputs);
        const droppedInputs = () => {
          const input2 = getExactlyOneTensor(inputs);
          const alpha = 1.6732632423543772;
          const scale = 1.0507009873554805;
          const alphaP = -alpha * scale;
          let keptIdx = greaterEqual(randomUniform(noiseShape), this.rate);
          keptIdx = cast2(keptIdx, "float32");
          const a = ((1 - this.rate) * (1 + this.rate * alphaP ** 2)) ** -0.5;
          const b = -a * alphaP * this.rate;
          const x = add2(mul(input2, keptIdx), mul(add2(keptIdx, -1), alphaP));
          return add2(mul(x, a), b);
        };
        return inTrainPhase(
          droppedInputs,
          () => getExactlyOneTensor(inputs),
          kwargs["training"] || false
        );
      }
      return inputs;
    });
  }
};
__publicField(AlphaDropout, "className", "AlphaDropout");
serialization_exports.registerClass(AlphaDropout);

// src/tfjs-layers/src/layers/normalization.ts
function batchNormalization(x, mean2, variance, beta, gamma, epsilon2 = 1e-3) {
  let out;
  if (x.rank === 2) {
    out = batchNorm2d(
      x,
      mean2,
      variance,
      beta,
      gamma,
      epsilon2
    );
  } else if (x.rank === 3) {
    out = batchNorm3d(
      x,
      mean2,
      variance,
      beta,
      gamma,
      epsilon2
    );
  } else if (x.rank === 4) {
    out = batchNorm4d(
      x,
      mean2,
      variance,
      beta,
      gamma,
      epsilon2
    );
  } else {
    throw new NotImplementedError(
      `batchNormalization is not implemented for array of rank ${x.rank} yet`
    );
  }
  return out;
}
function regularNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon2 = 1e-3) {
  return tidy(() => {
    const meanAndVariance = moments(x, reductionAxes);
    const mean2 = meanAndVariance.mean;
    const variance = meanAndVariance.variance;
    const normed = batchNormalization(x, mean2, variance, beta, gamma, epsilon2);
    return [normed, mean2, variance];
  });
}
function broadcastNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon2 = 1e-3) {
  return tidy(() => {
    const meanAndVariance = moments(x, reductionAxes);
    const mean2 = meanAndVariance.mean;
    const variance = meanAndVariance.variance;
    const targetShape = [];
    for (const axis of range2(0, x.rank)) {
      if (reductionAxes.indexOf(axis) !== -1) {
        targetShape.push(1);
      } else {
        targetShape.push(x.shape[axis]);
      }
    }
    const broadcastMean = reshape(mean2, targetShape);
    const broadcastVariance = reshape(variance, targetShape);
    const broadcastGamma = gamma == null ? null : reshape(gamma, targetShape);
    const broadcastBeta = beta == null ? null : reshape(beta, targetShape);
    const normed = batchNormalization(
      x,
      broadcastMean,
      broadcastVariance,
      broadcastBeta,
      broadcastGamma,
      epsilon2
    );
    return [normed, mean2, variance];
  });
}
function normalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon2 = 1e-3) {
  if (util_exports.arraysEqual(
    reductionAxes.slice().sort(),
    range2(0, x.rank - 1)
  )) {
    return regularNormalizeBatchInTraining(
      x,
      gamma,
      beta,
      reductionAxes,
      epsilon2
    );
  } else {
    return broadcastNormalizeBatchInTraining(
      x,
      gamma,
      beta,
      reductionAxes,
      epsilon2
    );
  }
}
var BatchNormalization = class extends Layer {
  axis;
  momentum;
  epsilon;
  center;
  scale;
  betaInitializer;
  gammaInitializer;
  movingMeanInitializer;
  movingVarianceInitializer;
  betaConstraint;
  gammaConstraint;
  betaRegularizer;
  gammaRegularizer;
  gamma;
  beta;
  movingMean;
  movingVariance;
  constructor(args) {
    if (args == null) {
      args = {};
    }
    super(args);
    this.supportsMasking = true;
    this.axis = args.axis == null ? -1 : args.axis;
    this.momentum = args.momentum == null ? 0.99 : args.momentum;
    this.epsilon = args.epsilon == null ? 1e-3 : args.epsilon;
    this.center = args.center == null ? true : args.center;
    this.scale = args.scale == null ? true : args.scale;
    this.betaInitializer = getInitializer(args.betaInitializer || "zeros");
    this.gammaInitializer = getInitializer(args.gammaInitializer || "ones");
    this.movingMeanInitializer = getInitializer(args.movingMeanInitializer || "zeros");
    this.movingVarianceInitializer = getInitializer(args.movingVarianceInitializer || "ones");
    this.betaConstraint = getConstraint(args.betaConstraint);
    this.gammaConstraint = getConstraint(args.gammaConstraint);
    this.betaRegularizer = getRegularizer(args.betaRegularizer);
    this.gammaRegularizer = getRegularizer(args.gammaRegularizer);
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const axis = this.axis >= 0 ? this.axis : this.axis + inputShape.length;
    const dim = inputShape[axis];
    if (dim == null) {
      throw new ValueError(
        `Axis ${axis} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(inputShape)}.`
      );
    }
    this.inputSpec = [new InputSpec({ ndim: inputShape.length, axes: { [axis]: dim } })];
    const shape = [dim];
    if (this.scale) {
      this.gamma = this.addWeight(
        "gamma",
        shape,
        null,
        this.gammaInitializer,
        this.gammaRegularizer,
        true,
        this.gammaConstraint
      );
    }
    if (this.center) {
      this.beta = this.addWeight(
        "beta",
        shape,
        null,
        this.betaInitializer,
        this.betaRegularizer,
        true,
        this.betaConstraint
      );
    }
    this.movingMean = this.addWeight(
      "moving_mean",
      shape,
      null,
      this.movingMeanInitializer,
      null,
      false
    );
    this.movingVariance = this.addWeight(
      "moving_variance",
      shape,
      null,
      this.movingVarianceInitializer,
      null,
      false
    );
    this.built = true;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      const training = kwargs["training"] == null ? false : kwargs["training"];
      const input2 = getExactlyOneTensor(inputs);
      const inputShape = input2.shape;
      const ndim = inputShape.length;
      const reductionAxes = range2(0, ndim);
      const axis = this.axis >= 0 ? this.axis : this.axis + ndim;
      reductionAxes.splice(axis, 1);
      const broadcastShape = pyListRepeat(1, ndim);
      broadcastShape[axis] = inputShape[axis];
      const sortedReductionAxes = reductionAxes.slice();
      sortedReductionAxes.sort();
      const needsBroadcasting = !util_exports.arraysEqual(
        sortedReductionAxes,
        range2(0, ndim).slice(0, ndim - 1)
      );
      const normalizeInference = () => {
        if (needsBroadcasting) {
          const broadcastMovingMean = reshape(this.movingMean.read(), broadcastShape);
          const broadcastMovingVariance = reshape(this.movingVariance.read(), broadcastShape);
          const broadcastBeta = this.center ? reshape(this.beta.read(), broadcastShape) : null;
          const broadcastGamma = this.scale ? reshape(this.gamma.read(), broadcastShape) : null;
          return batchNormalization(
            input2,
            broadcastMovingMean,
            broadcastMovingVariance,
            broadcastBeta,
            broadcastGamma,
            this.epsilon
          );
        } else {
          return batchNormalization(
            input2,
            this.movingMean.read(),
            this.movingVariance.read(),
            this.beta == null ? null : this.beta.read(),
            this.gamma == null ? null : this.gamma.read(),
            this.epsilon
          );
        }
      };
      if (!training) {
        return normalizeInference();
      }
      const [normedTraining, mean2, variance] = normalizeBatchInTraining(
        input2,
        this.gamma.read(),
        this.beta.read(),
        reductionAxes,
        this.epsilon
      );
      const doMovingAverage = (variable2, value, momentum) => {
        tidy(() => {
          const decay = 1 - momentum;
          const origValue = variable2.read();
          const updateDelta = mul(sub(origValue, value), decay);
          variable2.write(sub(origValue, updateDelta));
        });
      };
      const updateMovingMeanAndVariance = () => {
        doMovingAverage(this.movingMean, mean2, this.momentum);
        doMovingAverage(this.movingVariance, variance, this.momentum);
      };
      updateMovingMeanAndVariance();
      return normedTraining;
    });
  }
  getConfig() {
    const config = {
      axis: this.axis,
      momentum: this.momentum,
      epsilon: this.epsilon,
      center: this.center,
      scale: this.scale,
      betaInitializer: serializeInitializer(this.betaInitializer),
      gammaInitializer: serializeInitializer(this.gammaInitializer),
      movingMeanInitializer: serializeInitializer(this.movingMeanInitializer),
      movingVarianceInitializer: serializeInitializer(this.movingVarianceInitializer),
      betaRegularizer: serializeRegularizer(this.betaRegularizer),
      gammaRegularizer: serializeRegularizer(this.gammaRegularizer),
      betaConstraint: serializeConstraint(this.betaConstraint),
      gammaConstraint: serializeConstraint(this.gammaConstraint)
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(BatchNormalization, "className", "BatchNormalization");
serialization_exports.registerClass(BatchNormalization);
var LayerNormalization = class extends Layer {
  axis;
  epsilon;
  center;
  scale;
  betaInitializer;
  gammaInitializer;
  betaRegularizer;
  gammaRegularizer;
  gamma;
  beta;
  constructor(args) {
    if (args == null) {
      args = {};
    }
    super(args);
    this.axis = args.axis == null ? -1 : args.axis;
    if (typeof this.axis === "number") {
      if (!Number.isInteger(this.axis)) {
        throw new Error(
          `Expected axis to be an integer, but received ${this.axis}`
        );
      }
    } else if (Array.isArray(this.axis)) {
      for (const axis of this.axis) {
        if (!Number.isInteger(axis)) {
          throw new Error(
            `Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`
          );
        }
      }
    } else {
      throw new Error(
        `Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`
      );
    }
    this.epsilon = args.epsilon == null ? 1e-3 : args.epsilon;
    this.center = args.center == null ? true : args.center;
    this.scale = args.scale == null ? true : args.scale;
    this.betaInitializer = getInitializer(args.betaInitializer || "zeros");
    this.gammaInitializer = getInitializer(args.gammaInitializer || "ones");
    this.betaRegularizer = getRegularizer(args.betaRegularizer);
    this.gammaRegularizer = getRegularizer(args.gammaRegularizer);
    this.supportsMasking = true;
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const nDims = inputShape.length;
    if (typeof this.axis === "number") {
      this.axis = [this.axis];
    }
    for (let i = 0; i < this.axis.length; ++i) {
      if (this.axis[i] < 0) {
        this.axis[i] += nDims;
      }
    }
    for (const axis of this.axis) {
      if (axis < 0 || axis >= nDims) {
        throw new Error(`Invalid axis: ${axis}`);
      }
    }
    if (this.axis.length !== unique2(this.axis).length) {
      throw new Error(`Found duplicate axes in: ${this.axis}`);
    }
    const paramShape = this.axis.map((axis) => inputShape[axis]);
    const trainable = true;
    if (this.scale) {
      this.gamma = this.addWeight(
        "gamma",
        paramShape,
        "float32",
        this.gammaInitializer,
        this.gammaRegularizer,
        trainable
      );
    } else {
      this.gamma = null;
    }
    if (this.center) {
      this.beta = this.addWeight(
        "beta",
        paramShape,
        "float32",
        this.betaInitializer,
        this.betaRegularizer,
        trainable
      );
    } else {
      this.beta = null;
    }
    this.built = true;
  }
  call(inputs, kwargs) {
    const input2 = getExactlyOneTensor(inputs);
    const inputShape = input2.shape;
    const nDims = inputShape.length;
    return tidy(() => {
      const keepDims = true;
      let { mean: mean2, variance } = moments(input2, this.axis, keepDims);
      const broadcastShape = pyListRepeat(1, nDims);
      for (const dim of this.axis) {
        broadcastShape[dim] = inputShape[dim];
      }
      const broadcast = (v) => {
        if (v != null && v.shape.length !== nDims) {
          return reshape(v, broadcastShape);
        } else {
          return v;
        }
      };
      let scale = this.scale ? broadcast(this.gamma.read()) : null;
      let offset = this.center ? broadcast(this.beta.read()) : null;
      const momentsTiling = [];
      const scaleOffsetTiling = [];
      for (let i = 0; i < nDims; ++i) {
        if (this.axis.indexOf(i) !== -1) {
          momentsTiling.push(inputShape[i]);
          scaleOffsetTiling.push(1);
        } else {
          momentsTiling.push(1);
          scaleOffsetTiling.push(inputShape[i]);
        }
      }
      mean2 = tile(mean2, momentsTiling);
      variance = tile(variance, momentsTiling);
      if (scale != null) {
        scale = tile(scale, scaleOffsetTiling);
      }
      if (offset != null) {
        offset = tile(offset, scaleOffsetTiling);
      }
      return batchNormalization(
        input2,
        mean2,
        variance,
        offset,
        scale,
        this.epsilon
      );
    });
  }
  getConfig() {
    const config = {
      axis: this.axis,
      epsilon: this.epsilon,
      center: this.center,
      scale: this.scale,
      betaInitializer: serializeInitializer(this.betaInitializer),
      gammaInitializer: serializeInitializer(this.gammaInitializer),
      betaRegularizer: serializeRegularizer(this.betaRegularizer),
      gammaRegularizer: serializeRegularizer(this.gammaRegularizer)
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(LayerNormalization, "className", "LayerNormalization");
serialization_exports.registerClass(LayerNormalization);

// src/tfjs-layers/src/layers/padding.ts
function spatial2dPadding(x, padding, dataFormat) {
  return tidy(() => {
    if (x.rank !== 4) {
      throw new ValueError(
        `temporalPadding expects input tensor to be 4-D, but received a ${x.rank}-D tensor.`
      );
    }
    if (padding == null) {
      padding = [[1, 1], [1, 1]];
    }
    if (padding.length !== 2 || padding[0].length !== 2 || padding[1].length !== 2) {
      throw new ValueError(
        "spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers."
      );
    }
    if (dataFormat == null) {
      dataFormat = imageDataFormat();
    }
    if (dataFormat !== "channelsLast" && dataFormat !== "channelsFirst") {
      throw new ValueError(
        `Unknown data format: ${dataFormat}. Supported data formats are 'channelsLast' and 'channelsFirst.`
      );
    }
    let pattern;
    if (dataFormat === "channelsFirst") {
      pattern = [[0, 0], [0, 0], padding[0], padding[1]];
    } else {
      pattern = [[0, 0], padding[0], padding[1], [0, 0]];
    }
    return pad(x, pattern);
  });
}
var ZeroPadding2D = class extends Layer {
  dataFormat;
  padding;
  constructor(args) {
    if (args == null) {
      args = {};
    }
    super(args);
    this.dataFormat = args.dataFormat == null ? imageDataFormat() : args.dataFormat;
    if (args.padding == null) {
      this.padding = [[1, 1], [1, 1]];
    } else if (typeof args.padding === "number") {
      this.padding = [[args.padding, args.padding], [args.padding, args.padding]];
    } else {
      args.padding = args.padding;
      if (args.padding.length !== 2) {
        throw new ValueError(
          `ZeroPadding2D expects padding to be a length-2 array, but received a length-${args.padding.length} array.`
        );
      }
      let heightPadding;
      let widthPadding;
      if (typeof args.padding[0] === "number") {
        heightPadding = [args.padding[0], args.padding[0]];
        widthPadding = [args.padding[1], args.padding[1]];
      } else {
        args.padding = args.padding;
        if (args.padding[0].length !== 2) {
          throw new ValueError(
            `ZeroPadding2D expects height padding to be a length-2 array, but received a length-${args.padding[0].length} array.`
          );
        }
        heightPadding = args.padding[0];
        if (args.padding[1].length !== 2) {
          throw new ValueError(
            `ZeroPadding2D expects width padding to be a length-2 array, but received a length-${args.padding[1].length} array.`
          );
        }
        widthPadding = args.padding[1];
      }
      this.padding = [heightPadding, widthPadding];
    }
    this.inputSpec = [new InputSpec({ ndim: 4 })];
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    let rows;
    let cols;
    if (this.dataFormat === "channelsFirst") {
      if (inputShape[2] != null && inputShape[2] >= 0) {
        rows = inputShape[2] + this.padding[0][0] + this.padding[0][1];
      } else {
        rows = null;
      }
      if (inputShape[3] != null && inputShape[3] >= 0) {
        cols = inputShape[3] + this.padding[1][0] + this.padding[1][1];
      } else {
        cols = null;
      }
      return [inputShape[0], inputShape[1], rows, cols];
    } else {
      if (inputShape[1] != null && inputShape[1] >= 0) {
        rows = inputShape[1] + this.padding[0][0] + this.padding[0][1];
      } else {
        rows = null;
      }
      if (inputShape[2] != null && inputShape[2] >= 0) {
        cols = inputShape[2] + this.padding[1][0] + this.padding[1][1];
      } else {
        cols = null;
      }
      return [inputShape[0], rows, cols, inputShape[3]];
    }
  }
  call(inputs, kwargs) {
    return tidy(
      () => spatial2dPadding(
        getExactlyOneTensor(inputs),
        this.padding,
        this.dataFormat
      )
    );
  }
  getConfig() {
    const config = {
      padding: this.padding,
      dataFormat: this.dataFormat
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
__publicField(ZeroPadding2D, "className", "ZeroPadding2D");
serialization_exports.registerClass(ZeroPadding2D);

// src/tfjs-layers/src/layers/pooling.ts
function pool2d(x, poolSize, strides, padding, dataFormat, poolMode) {
  return tidy(() => {
    checkDataFormat(dataFormat);
    checkPoolMode(poolMode);
    checkPaddingMode(padding);
    if (strides == null) {
      strides = [1, 1];
    }
    if (padding == null) {
      padding = "valid";
    }
    if (dataFormat == null) {
      dataFormat = imageDataFormat();
    }
    if (poolMode == null) {
      poolMode = "max";
    }
    x = preprocessConv2DInput(x, dataFormat);
    let y;
    const paddingString = padding === "same" ? "same" : "valid";
    if (poolMode === "max") {
      y = maxPool(x, poolSize, strides, paddingString);
    } else {
      y = avgPool(
        x,
        poolSize,
        strides,
        paddingString
      );
    }
    if (dataFormat === "channelsFirst") {
      y = transpose(y, [0, 3, 1, 2]);
    }
    return y;
  });
}
function pool3d(x, poolSize, strides, padding, dataFormat, poolMode) {
  return tidy(() => {
    checkDataFormat(dataFormat);
    checkPoolMode(poolMode);
    checkPaddingMode(padding);
    if (strides == null) {
      strides = [1, 1, 1];
    }
    if (padding == null) {
      padding = "valid";
    }
    if (dataFormat == null) {
      dataFormat = imageDataFormat();
    }
    if (poolMode == null) {
      poolMode = "max";
    }
    x = preprocessConv3DInput(x, dataFormat);
    let y;
    const paddingString = padding === "same" ? "same" : "valid";
    if (poolMode === "max") {
      y = maxPool3d(x, poolSize, strides, paddingString);
    } else {
      y = avgPool3d(x, poolSize, strides, paddingString);
    }
    if (dataFormat === "channelsFirst") {
      y = transpose(y, [0, 4, 1, 2, 3]);
    }
    return y;
  });
}
var Pooling1D = class extends Layer {
  poolSize;
  strides;
  padding;
  constructor(args) {
    if (args.poolSize == null) {
      args.poolSize = 2;
    }
    super(args);
    if (typeof args.poolSize === "number") {
      this.poolSize = [args.poolSize];
    } else if (Array.isArray(args.poolSize) && args.poolSize.length === 1 && typeof args.poolSize[0] === "number") {
      this.poolSize = args.poolSize;
    } else {
      throw new ValueError(
        `poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(args.poolSize)}`
      );
    }
    assertPositiveInteger(this.poolSize, "poolSize");
    if (args.strides == null) {
      this.strides = this.poolSize;
    } else {
      if (typeof args.strides === "number") {
        this.strides = [args.strides];
      } else if (Array.isArray(args.strides) && args.strides.length === 1 && typeof args.strides[0] === "number") {
        this.strides = args.strides;
      } else {
        throw new ValueError(
          `strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(args.strides)}`
        );
      }
    }
    assertPositiveInteger(this.strides, "strides");
    this.padding = args.padding == null ? "valid" : args.padding;
    checkPaddingMode(this.padding);
    this.inputSpec = [new InputSpec({ ndim: 3 })];
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const length = convOutputLength(
      inputShape[1],
      this.poolSize[0],
      this.padding,
      this.strides[0]
    );
    return [inputShape[0], length, inputShape[2]];
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      inputs = expandDims2(getExactlyOneTensor(inputs), 2);
      const output = this.poolingFunction(
        getExactlyOneTensor(inputs),
        [this.poolSize[0], 1],
        [this.strides[0], 1],
        this.padding,
        "channelsLast"
      );
      return squeeze(output, [2]);
    });
  }
  getConfig() {
    const config = {
      poolSize: this.poolSize,
      padding: this.padding,
      strides: this.strides
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
var MaxPooling1D = class extends Pooling1D {
  constructor(args) {
    super(args);
  }
  poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
    checkDataFormat(dataFormat);
    checkPaddingMode(padding);
    return pool2d(inputs, poolSize, strides, padding, dataFormat, "max");
  }
};
__publicField(MaxPooling1D, "className", "MaxPooling1D");
serialization_exports.registerClass(MaxPooling1D);
var AveragePooling1D = class extends Pooling1D {
  constructor(args) {
    super(args);
  }
  poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
    checkDataFormat(dataFormat);
    checkPaddingMode(padding);
    return pool2d(inputs, poolSize, strides, padding, dataFormat, "avg");
  }
};
__publicField(AveragePooling1D, "className", "AveragePooling1D");
serialization_exports.registerClass(AveragePooling1D);
var Pooling2D = class extends Layer {
  poolSize;
  strides;
  padding;
  dataFormat;
  constructor(args) {
    if (args.poolSize == null) {
      args.poolSize = [2, 2];
    }
    super(args);
    this.poolSize = Array.isArray(args.poolSize) ? args.poolSize : [args.poolSize, args.poolSize];
    if (args.strides == null) {
      this.strides = this.poolSize;
    } else if (Array.isArray(args.strides)) {
      if (args.strides.length !== 2) {
        throw new ValueError(
          `If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${args.strides.length}.`
        );
      }
      this.strides = args.strides;
    } else {
      this.strides = [args.strides, args.strides];
    }
    assertPositiveInteger(this.poolSize, "poolSize");
    assertPositiveInteger(this.strides, "strides");
    this.padding = args.padding == null ? "valid" : args.padding;
    this.dataFormat = args.dataFormat == null ? "channelsLast" : args.dataFormat;
    checkDataFormat(this.dataFormat);
    checkPaddingMode(this.padding);
    this.inputSpec = [new InputSpec({ ndim: 4 })];
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    let rows = this.dataFormat === "channelsFirst" ? inputShape[2] : inputShape[1];
    let cols = this.dataFormat === "channelsFirst" ? inputShape[3] : inputShape[2];
    rows = convOutputLength(rows, this.poolSize[0], this.padding, this.strides[0]);
    cols = convOutputLength(cols, this.poolSize[1], this.padding, this.strides[1]);
    if (this.dataFormat === "channelsFirst") {
      return [inputShape[0], inputShape[1], rows, cols];
    } else {
      return [inputShape[0], rows, cols, inputShape[3]];
    }
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      return this.poolingFunction(
        getExactlyOneTensor(inputs),
        this.poolSize,
        this.strides,
        this.padding,
        this.dataFormat
      );
    });
  }
  getConfig() {
    const config = {
      poolSize: this.poolSize,
      padding: this.padding,
      strides: this.strides,
      dataFormat: this.dataFormat
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
var MaxPooling2D = class extends Pooling2D {
  constructor(args) {
    super(args);
  }
  poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
    checkDataFormat(dataFormat);
    checkPaddingMode(padding);
    return pool2d(inputs, poolSize, strides, padding, dataFormat, "max");
  }
};
__publicField(MaxPooling2D, "className", "MaxPooling2D");
serialization_exports.registerClass(MaxPooling2D);
var AveragePooling2D = class extends Pooling2D {
  constructor(args) {
    super(args);
  }
  poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
    checkDataFormat(dataFormat);
    checkPaddingMode(padding);
    return pool2d(inputs, poolSize, strides, padding, dataFormat, "avg");
  }
};
__publicField(AveragePooling2D, "className", "AveragePooling2D");
serialization_exports.registerClass(AveragePooling2D);
var Pooling3D = class extends Layer {
  poolSize;
  strides;
  padding;
  dataFormat;
  constructor(args) {
    if (args.poolSize == null) {
      args.poolSize = [2, 2, 2];
    }
    super(args);
    this.poolSize = Array.isArray(args.poolSize) ? args.poolSize : [args.poolSize, args.poolSize, args.poolSize];
    if (args.strides == null) {
      this.strides = this.poolSize;
    } else if (Array.isArray(args.strides)) {
      if (args.strides.length !== 3) {
        throw new ValueError(
          `If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${args.strides.length}.`
        );
      }
      this.strides = args.strides;
    } else {
      this.strides = [args.strides, args.strides, args.strides];
    }
    assertPositiveInteger(this.poolSize, "poolSize");
    assertPositiveInteger(this.strides, "strides");
    this.padding = args.padding == null ? "valid" : args.padding;
    this.dataFormat = args.dataFormat == null ? "channelsLast" : args.dataFormat;
    checkDataFormat(this.dataFormat);
    checkPaddingMode(this.padding);
    this.inputSpec = [new InputSpec({ ndim: 5 })];
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    let depths = this.dataFormat === "channelsFirst" ? inputShape[2] : inputShape[1];
    let rows = this.dataFormat === "channelsFirst" ? inputShape[3] : inputShape[2];
    let cols = this.dataFormat === "channelsFirst" ? inputShape[4] : inputShape[3];
    depths = convOutputLength(
      depths,
      this.poolSize[0],
      this.padding,
      this.strides[0]
    );
    rows = convOutputLength(rows, this.poolSize[1], this.padding, this.strides[1]);
    cols = convOutputLength(cols, this.poolSize[2], this.padding, this.strides[2]);
    if (this.dataFormat === "channelsFirst") {
      return [inputShape[0], inputShape[1], depths, rows, cols];
    } else {
      return [inputShape[0], depths, rows, cols, inputShape[4]];
    }
  }
  call(inputs, kwargs) {
    return tidy(() => {
      this.invokeCallHook(inputs, kwargs);
      return this.poolingFunction(
        getExactlyOneTensor(inputs),
        this.poolSize,
        this.strides,
        this.padding,
        this.dataFormat
      );
    });
  }
  getConfig() {
    const config = {
      poolSize: this.poolSize,
      padding: this.padding,
      strides: this.strides,
      dataFormat: this.dataFormat
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
var MaxPooling3D = class extends Pooling3D {
  constructor(args) {
    super(args);
  }
  poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
    checkDataFormat(dataFormat);
    checkPaddingMode(padding);
    return pool3d(
      inputs,
      poolSize,
      strides,
      padding,
      dataFormat,
      "max"
    );
  }
};
__publicField(MaxPooling3D, "className", "MaxPooling3D");
serialization_exports.registerClass(MaxPooling3D);
var AveragePooling3D = class extends Pooling3D {
  constructor(args) {
    super(args);
  }
  poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
    checkDataFormat(dataFormat);
    checkPaddingMode(padding);
    return pool3d(
      inputs,
      poolSize,
      strides,
      padding,
      dataFormat,
      "avg"
    );
  }
};
__publicField(AveragePooling3D, "className", "AveragePooling3D");
serialization_exports.registerClass(AveragePooling3D);
var GlobalPooling1D = class extends Layer {
  constructor(args) {
    super(args);
    this.inputSpec = [new InputSpec({ ndim: 3 })];
  }
  computeOutputShape(inputShape) {
    return [inputShape[0], inputShape[2]];
  }
  call(inputs, kwargs) {
    throw new NotImplementedError();
  }
};
var GlobalAveragePooling1D = class extends GlobalPooling1D {
  constructor(args) {
    super(args || {});
  }
  call(inputs, kwargs) {
    return tidy(() => {
      const input2 = getExactlyOneTensor(inputs);
      return mean(input2, 1);
    });
  }
};
__publicField(GlobalAveragePooling1D, "className", "GlobalAveragePooling1D");
serialization_exports.registerClass(GlobalAveragePooling1D);
var GlobalMaxPooling1D = class extends GlobalPooling1D {
  constructor(args) {
    super(args || {});
  }
  call(inputs, kwargs) {
    return tidy(() => {
      const input2 = getExactlyOneTensor(inputs);
      return max(input2, 1);
    });
  }
};
__publicField(GlobalMaxPooling1D, "className", "GlobalMaxPooling1D");
serialization_exports.registerClass(GlobalMaxPooling1D);
var GlobalPooling2D = class extends Layer {
  dataFormat;
  constructor(args) {
    super(args);
    this.dataFormat = args.dataFormat == null ? "channelsLast" : args.dataFormat;
    checkDataFormat(this.dataFormat);
    this.inputSpec = [new InputSpec({ ndim: 4 })];
  }
  computeOutputShape(inputShape) {
    inputShape = inputShape;
    if (this.dataFormat === "channelsLast") {
      return [inputShape[0], inputShape[3]];
    } else {
      return [inputShape[0], inputShape[1]];
    }
  }
  call(inputs, kwargs) {
    throw new NotImplementedError();
  }
  getConfig() {
    const config = { dataFormat: this.dataFormat };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
};
var GlobalAveragePooling2D = class extends GlobalPooling2D {
  call(inputs, kwargs) {
    return tidy(() => {
      const input2 = getExactlyOneTensor(inputs);
      if (this.dataFormat === "channelsLast") {
        return mean(input2, [1, 2]);
      } else {
        return mean(input2, [2, 3]);
      }
    });
  }
};
__publicField(GlobalAveragePooling2D, "className", "GlobalAveragePooling2D");
serialization_exports.registerClass(GlobalAveragePooling2D);
var GlobalMaxPooling2D = class extends GlobalPooling2D {
  call(inputs, kwargs) {
    return tidy(() => {
      const input2 = getExactlyOneTensor(inputs);
      if (this.dataFormat === "channelsLast") {
        return max(input2, [1, 2]);
      } else {
        return max(input2, [2, 3]);
      }
    });
  }
};
__publicField(GlobalMaxPooling2D, "className", "GlobalMaxPooling2D");
serialization_exports.registerClass(GlobalMaxPooling2D);

// src/tfjs-layers/src/layers/wrappers.ts
var Wrapper = class extends Layer {
  layer;
  constructor(args) {
    super(args);
    this.layer = args.layer;
  }
  build(inputShape) {
    this.built = true;
  }
  get trainable() {
    if (this.layer != null) {
      return this.layer.trainable;
    } else {
      return false;
    }
  }
  set trainable(value) {
    if (this.layer != null) {
      this.layer.trainable = value;
    }
  }
  get trainableWeights() {
    return this.layer.trainableWeights;
  }
  get nonTrainableWeights() {
    return this.layer.nonTrainableWeights;
  }
  get updates() {
    return this.layer._updates;
  }
  get losses() {
    return this.layer.losses;
  }
  getWeights() {
    return this.layer.getWeights();
  }
  setWeights(weights) {
    this.layer.setWeights(weights);
  }
  getConfig() {
    const config = {
      "layer": {
        "className": this.layer.getClassName(),
        "config": this.layer.getConfig()
      }
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
  setFastWeightInitDuringBuild(value) {
    super.setFastWeightInitDuringBuild(value);
    if (this.layer != null) {
      this.layer.setFastWeightInitDuringBuild(value);
    }
  }
  static fromConfig(cls, config, customObjects = {}) {
    const layerConfig = config["layer"];
    const layer = deserialize(layerConfig, customObjects);
    delete config["layer"];
    const newConfig = { layer };
    Object.assign(newConfig, config);
    return new cls(newConfig);
  }
};
var TimeDistributed = class extends Wrapper {
  constructor(args) {
    super(args);
    this.supportsMasking = true;
  }
  build(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    if (inputShape.length < 3) {
      throw new ValueError(
        `TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(inputShape)}`
      );
    }
    this.inputSpec = [{ shape: inputShape }];
    const childInputShape = [inputShape[0]].concat(inputShape.slice(2));
    if (!this.layer.built) {
      this.layer.build(childInputShape);
      this.layer.built = true;
    }
    super.build(inputShape);
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const childInputShape = [inputShape[0]].concat(inputShape.slice(2));
    const childOutputShape = this.layer.computeOutputShape(childInputShape);
    const timesteps = inputShape[1];
    return [childOutputShape[0], timesteps].concat(childOutputShape.slice(1));
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = getExactlyOneTensor(inputs);
      const step2 = (inputs2, states) => {
        const output = getExactlyOneTensor(this.layer.call(inputs2, kwargs));
        return [output, []];
      };
      const rnnOutputs = rnn(
        step2,
        inputs,
        [],
        false,
        null,
        null,
        false,
        true
      );
      const y = rnnOutputs[1];
      return y;
    });
  }
};
__publicField(TimeDistributed, "className", "TimeDistributed");
serialization_exports.registerClass(TimeDistributed);
function checkBidirectionalMergeMode(value) {
  checkStringTypeUnionValue(
    VALID_BIDIRECTIONAL_MERGE_MODES,
    "BidirectionalMergeMode",
    value
  );
}
var DEFAULT_BIDIRECTIONAL_MERGE_MODE = "concat";
var Bidirectional = class extends Wrapper {
  mergeMode;
  forwardLayer;
  backwardLayer;
  returnSequences;
  returnState;
  numConstants;
  _trainable;
  constructor(args) {
    super(args);
    const layerConfig = args.layer.getConfig();
    const forwDict = {};
    forwDict["className"] = args.layer.getClassName();
    forwDict["config"] = layerConfig;
    this.forwardLayer = deserialize(forwDict);
    layerConfig["goBackwards"] = layerConfig["goBackwards"] === true ? false : true;
    const backDict = {};
    backDict["className"] = args.layer.getClassName();
    backDict["config"] = layerConfig;
    this.backwardLayer = deserialize(backDict);
    this.forwardLayer.name = "forward_" + this.forwardLayer.name;
    this.backwardLayer.name = "backward_" + this.backwardLayer.name;
    this.mergeMode = args.mergeMode === void 0 ? DEFAULT_BIDIRECTIONAL_MERGE_MODE : args.mergeMode;
    checkBidirectionalMergeMode(this.mergeMode);
    if (args.weights) {
      throw new NotImplementedError(
        "weights support is not implemented for Bidirectional layer yet."
      );
    }
    this._stateful = args.layer.stateful;
    this.returnSequences = args.layer.returnSequences;
    this.returnState = args.layer.returnState;
    this.supportsMasking = true;
    this._trainable = true;
    this.inputSpec = args.layer.inputSpec;
    this.numConstants = null;
  }
  get trainable() {
    return this._trainable;
  }
  set trainable(value) {
    this._trainable = value;
    if (this.forwardLayer != null) {
      this.forwardLayer.trainable = value;
    }
    if (this.backwardLayer != null) {
      this.backwardLayer.trainable = value;
    }
  }
  getWeights() {
    return this.forwardLayer.getWeights().concat(
      this.backwardLayer.getWeights()
    );
  }
  setWeights(weights) {
    const numWeights = weights.length;
    const numeightsOver2 = Math.floor(numWeights / 2);
    this.forwardLayer.setWeights(weights.slice(0, numeightsOver2));
    this.backwardLayer.setWeights(weights.slice(numeightsOver2));
  }
  computeOutputShape(inputShape) {
    let layerShapes = this.forwardLayer.computeOutputShape(inputShape);
    if (!(Array.isArray(layerShapes) && Array.isArray(layerShapes[0]))) {
      layerShapes = [layerShapes];
    }
    layerShapes = layerShapes;
    let outputShape;
    let outputShapes;
    let stateShape;
    if (this.returnState) {
      stateShape = layerShapes.slice(1);
      outputShape = layerShapes[0];
    } else {
      outputShape = layerShapes[0];
    }
    outputShape = outputShape;
    if (this.mergeMode === "concat") {
      outputShape[outputShape.length - 1] *= 2;
      outputShapes = [outputShape];
    } else if (this.mergeMode == null) {
      outputShapes = [outputShape, outputShape.slice()];
    } else {
      outputShapes = [outputShape];
    }
    if (this.returnState) {
      if (this.mergeMode == null) {
        return outputShapes.concat(stateShape).concat(stateShape.slice());
      }
      return [outputShape].concat(stateShape).concat(stateShape.slice());
    }
    return singletonOrArray(outputShapes);
  }
  apply(inputs, kwargs) {
    let initialState = kwargs == null ? null : kwargs["initialState"];
    let constants = kwargs == null ? null : kwargs["constants"];
    if (kwargs == null) {
      kwargs = {};
    }
    const standardized = standardizeArgs(inputs, initialState, constants, this.numConstants);
    inputs = standardized.inputs;
    initialState = standardized.initialState;
    constants = standardized.constants;
    if (Array.isArray(inputs)) {
      initialState = inputs.slice(1);
      inputs = inputs[0];
    }
    if ((initialState == null || initialState.length === 0) && constants == null) {
      return super.apply(inputs, kwargs);
    }
    const additionalInputs = [];
    const additionalSpecs = [];
    if (initialState != null) {
      const numStates = initialState.length;
      if (numStates % 2 > 0) {
        throw new ValueError(
          "When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs."
        );
      }
      kwargs["initialState"] = initialState;
      additionalInputs.push(...initialState);
      const stateSpecs = initialState.map((state) => new InputSpec({ shape: state.shape }));
      this.forwardLayer.stateSpec = stateSpecs.slice(0, numStates / 2);
      this.backwardLayer.stateSpec = stateSpecs.slice(numStates / 2);
      additionalSpecs.push(...stateSpecs);
    }
    if (constants != null) {
      throw new NotImplementedError(
        "Support for constants in Bidirectional layers is not implemented yet."
      );
    }
    const isSymbolicTensor = additionalInputs[0] instanceof SymbolicTensor;
    for (const tensor2 of additionalInputs) {
      if (tensor2 instanceof SymbolicTensor !== isSymbolicTensor) {
        throw new ValueError(
          "The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors"
        );
      }
    }
    if (isSymbolicTensor) {
      const fullInput = [inputs].concat(additionalInputs);
      const fullInputSpec = this.inputSpec.concat(additionalSpecs);
      const originalInputSpec = this.inputSpec;
      this.inputSpec = fullInputSpec;
      const output = super.apply(fullInput, kwargs);
      this.inputSpec = originalInputSpec;
      return output;
    } else {
      return super.apply(inputs, kwargs);
    }
  }
  call(inputs, kwargs) {
    return tidy(() => {
      const initialState = kwargs["initialState"];
      let y;
      let yRev;
      if (initialState == null) {
        y = this.forwardLayer.call(inputs, kwargs);
        yRev = this.backwardLayer.call(inputs, kwargs);
      } else {
        const forwardState = initialState.slice(0, initialState.length / 2);
        const backwardState = initialState.slice(initialState.length / 2);
        y = this.forwardLayer.call(
          inputs,
          Object.assign(kwargs, { initialState: forwardState })
        );
        yRev = this.backwardLayer.call(
          inputs,
          Object.assign(kwargs, { initialState: backwardState })
        );
      }
      let states;
      if (this.returnState) {
        if (Array.isArray(y)) {
          states = y.slice(1).concat(yRev.slice(1));
        } else {
        }
        y = y[0];
        yRev = yRev[0];
      }
      if (this.returnSequences) {
        yRev = reverse(yRev, 1);
      }
      let output;
      if (this.mergeMode === "concat") {
        output = concatenate([y, yRev]);
      } else if (this.mergeMode === "sum") {
        output = add2(y, yRev);
      } else if (this.mergeMode === "ave") {
        output = mul(0.5, add2(y, yRev));
      } else if (this.mergeMode === "mul") {
        output = mul(y, yRev);
      } else if (this.mergeMode == null) {
        output = [y, yRev];
      }
      if (this.returnState) {
        if (this.mergeMode == null) {
          return output.concat(states);
        }
        return [output].concat(states);
      }
      return output;
    });
  }
  resetStates(states) {
    this.forwardLayer.resetStates();
    this.backwardLayer.resetStates();
  }
  build(inputShape) {
    nameScope(this.forwardLayer.name, () => {
      this.forwardLayer.build(inputShape);
    });
    nameScope(this.backwardLayer.name, () => {
      this.backwardLayer.build(inputShape);
    });
    this.built = true;
  }
  computeMask(inputs, mask) {
    if (Array.isArray(mask)) {
      mask = mask[0];
    }
    let outputMask;
    if (this.returnSequences) {
      if (this.mergeMode == null) {
        outputMask = [mask, mask];
      } else {
        outputMask = mask;
      }
    } else {
      if (this.mergeMode == null) {
        outputMask = [null, null];
      } else {
        outputMask = null;
      }
    }
    if (this.returnState) {
      const states = this.forwardLayer.states;
      const stateMask = states.map((state) => null);
      if (Array.isArray(outputMask)) {
        return outputMask.concat(stateMask).concat(stateMask);
      } else {
        return [outputMask].concat(stateMask).concat(stateMask);
      }
    } else {
      return outputMask;
    }
  }
  get trainableWeights() {
    return this.forwardLayer.trainableWeights.concat(
      this.backwardLayer.trainableWeights
    );
  }
  get nonTrainableWeights() {
    return this.forwardLayer.nonTrainableWeights.concat(
      this.backwardLayer.nonTrainableWeights
    );
  }
  setFastWeightInitDuringBuild(value) {
    super.setFastWeightInitDuringBuild(value);
    if (this.forwardLayer != null) {
      this.forwardLayer.setFastWeightInitDuringBuild(value);
    }
    if (this.backwardLayer != null) {
      this.backwardLayer.setFastWeightInitDuringBuild(value);
    }
  }
  getConfig() {
    const config = {
      "mergeMode": this.mergeMode
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
  static fromConfig(cls, config) {
    const rnnLayer = deserialize(config["layer"]);
    delete config["layer"];
    if (config["numConstants"] != null) {
      throw new NotImplementedError(
        `Deserialization of a Bidirectional layer with numConstants present is not supported yet.`
      );
    }
    const newConfig = config;
    newConfig["layer"] = rnnLayer;
    return new cls(newConfig);
  }
};
__publicField(Bidirectional, "className", "Bidirectional");
serialization_exports.registerClass(Bidirectional);

// src/tfjs-layers/src/layers/preprocessing/image_preprocessing.ts
var Rescaling = class extends Layer {
  scale;
  offset;
  constructor(args) {
    super(args);
    this.scale = args.scale;
    if (args.offset) {
      this.offset = args.offset;
    } else {
      this.offset = 0;
    }
  }
  getConfig() {
    const config = {
      "scale": this.scale,
      "offset": this.offset
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = getExactlyOneTensor(inputs);
      if (inputs.dtype !== "float32") {
        inputs = cast2(inputs, "float32");
      }
      return add2(mul(inputs, this.scale), this.offset);
    });
  }
};
__publicField(Rescaling, "className", "Rescaling");
serialization_exports.registerClass(Rescaling);

// src/tfjs-layers/src/layers/preprocessing/center_crop.ts
var { resizeBilinear: resizeBilinear2, cropAndResize: cropAndResize2 } = image;
var CenterCrop = class extends Layer {
  height;
  width;
  constructor(args) {
    super(args);
    this.height = args.height;
    this.width = args.width;
  }
  centerCrop(inputs, hBuffer, wBuffer, height, width, inputHeight, inputWidth, dtype) {
    return tidy(() => {
      let input2;
      let isRank3 = false;
      const top = hBuffer / inputHeight;
      const left = wBuffer / inputWidth;
      const bottom = (height + hBuffer) / inputHeight;
      const right = (width + wBuffer) / inputWidth;
      const bound = [top, left, bottom, right];
      const boxesArr = [];
      if (inputs.rank === 3) {
        isRank3 = true;
        input2 = stack([inputs]);
      } else {
        input2 = inputs;
      }
      for (let i = 0; i < input2.shape[0]; i++) {
        boxesArr.push(bound);
      }
      const boxes = tensor(boxesArr, [boxesArr.length, 4]);
      const boxInd = range(0, boxesArr.length, 1, "int32");
      const cropSize = [height, width];
      const cropped = cropAndResize2(input2, boxes, boxInd, cropSize, "nearest");
      if (isRank3) {
        return cast2(getExactlyOneTensor(unstack(cropped)), dtype);
      }
      return cast2(cropped, dtype);
    });
  }
  upsize(inputs, height, width, dtype) {
    return tidy(() => {
      const outputs = resizeBilinear2(inputs, [height, width]);
      return cast2(outputs, dtype);
    });
  }
  call(inputs, kwargs) {
    return tidy(() => {
      const rankedInputs = getExactlyOneTensor(inputs);
      const dtype = rankedInputs.dtype;
      const inputShape = rankedInputs.shape;
      const inputHeight = inputShape[inputShape.length - 3];
      const inputWidth = inputShape[inputShape.length - 2];
      let hBuffer = 0;
      if (inputHeight !== this.height) {
        hBuffer = Math.floor((inputHeight - this.height) / 2);
      }
      let wBuffer = 0;
      if (inputWidth !== this.width) {
        wBuffer = Math.floor((inputWidth - this.width) / 2);
        if (wBuffer === 0) {
          wBuffer = 1;
        }
      }
      if (hBuffer >= 0 && wBuffer >= 0) {
        return this.centerCrop(
          rankedInputs,
          hBuffer,
          wBuffer,
          this.height,
          this.width,
          inputHeight,
          inputWidth,
          dtype
        );
      } else {
        return this.upsize(inputs, this.height, this.width, dtype);
      }
    });
  }
  getConfig() {
    const config = {
      "height": this.height,
      "width": this.width
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const hAxis = inputShape.length - 3;
    const wAxis = inputShape.length - 2;
    inputShape[hAxis] = this.height;
    inputShape[wAxis] = this.width;
    return inputShape;
  }
};
__publicField(CenterCrop, "className", "CenterCrop");
serialization_exports.registerClass(CenterCrop);

// src/tfjs-layers/src/layers/preprocessing/preprocessing_utils.ts
function encodeCategoricalInputs(inputs, outputMode, depth, weights) {
  let input2 = getExactlyOneTensor(inputs);
  if (input2.dtype !== "int32") {
    input2 = cast2(input2, "int32");
  }
  if (outputMode === "int") {
    return input2;
  }
  const originalShape = input2.shape;
  if (input2.rank === 0) {
    input2 = expandDims(input2, -1);
  }
  if (outputMode === "oneHot") {
    if (input2.shape[input2.shape.length - 1] !== 1) {
      input2 = expandDims(input2, -1);
    }
  }
  if (input2.rank > 2) {
    throw new ValueError(`When outputMode is not int, maximum output rank is 2 Received outputMode ${outputMode} and input shape ${originalShape} which would result in output rank ${input2.rank}.`);
  }
  const binaryOutput = ["multiHot", "oneHot"].includes(outputMode);
  const denseBincountInput = input2;
  let binCounts;
  if (typeof weights !== "undefined" && outputMode === "count") {
    binCounts = denseBincount(denseBincountInput, weights, depth, binaryOutput);
  } else {
    binCounts = denseBincount(denseBincountInput, [], depth, binaryOutput);
  }
  if (outputMode !== "tfIdf") {
    return binCounts;
  }
  if (weights) {
    return mul(binCounts, weights);
  } else {
    throw new ValueError(
      `When outputMode is 'tfIdf', weights must be provided.`
    );
  }
}

// src/tfjs-layers/src/layers/preprocessing/category_encoding.ts
var CategoryEncoding = class extends Layer {
  numTokens;
  outputMode;
  constructor(args) {
    super(args);
    this.numTokens = args.numTokens;
    if (args.outputMode) {
      this.outputMode = args.outputMode;
    } else {
      this.outputMode = "multiHot";
    }
  }
  getConfig() {
    const config = {
      "numTokens": this.numTokens,
      "outputMode": this.outputMode
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    if (inputShape == null) {
      return [this.numTokens];
    }
    if (this.outputMode === "oneHot" && inputShape[inputShape.length - 1] !== 1) {
      inputShape.push(this.numTokens);
      return inputShape;
    }
    inputShape[inputShape.length - 1] = this.numTokens;
    return inputShape;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      inputs = getExactlyOneTensor(inputs);
      if (inputs.dtype !== "int32") {
        inputs = cast2(inputs, "int32");
      }
      let countWeights;
      if (typeof kwargs["countWeights"] !== "undefined") {
        if (this.outputMode !== "count") {
          throw new ValueError(
            `countWeights is not used when outputMode !== count.
              Received countWeights=${kwargs["countWeights"]}`
          );
        }
        countWeights = getExactlyOneTensor(kwargs["countWeights"]);
      }
      const maxValue = max(inputs);
      const minValue = min(inputs);
      const greaterEqualMax = greater(this.numTokens, maxValue).bufferSync().get(0);
      const greaterMin = greaterEqual(minValue, 0).bufferSync().get(0);
      if (!(greaterEqualMax && greaterMin)) {
        throw new ValueError(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);
      }
      return encodeCategoricalInputs(
        inputs,
        this.outputMode,
        this.numTokens,
        countWeights
      );
    });
  }
};
__publicField(CategoryEncoding, "className", "CategoryEncoding");
serialization_exports.registerClass(CategoryEncoding);

// src/tfjs-layers/src/layers/preprocessing/image_resizing.ts
var INTERPOLATION_KEYS = ["bilinear", "nearest"];
var INTERPOLATION_METHODS = new Set(INTERPOLATION_KEYS);
var Resizing = class extends Layer {
  height;
  width;
  interpolation;
  cropToAspectRatio;
  constructor(args) {
    super(args);
    this.height = args.height;
    this.width = args.width;
    if (args.interpolation) {
      if (INTERPOLATION_METHODS.has(args.interpolation)) {
        this.interpolation = args.interpolation;
      } else {
        throw new ValueError(`Invalid interpolation parameter: ${args.interpolation} is not implemented`);
      }
    } else {
      this.interpolation = "bilinear";
    }
    this.cropToAspectRatio = Boolean(args.cropToAspectRatio);
  }
  computeOutputShape(inputShape) {
    inputShape = getExactlyOneShape(inputShape);
    const numChannels = inputShape[2];
    return [this.height, this.width, numChannels];
  }
  getConfig() {
    const config = {
      "height": this.height,
      "width": this.width,
      "interpolation": this.interpolation,
      "cropToAspectRatio": this.cropToAspectRatio
    };
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
  call(inputs, kwargs) {
    return tidy(() => {
      const size = [this.height, this.width];
      if (this.interpolation === "bilinear") {
        return image.resizeBilinear(inputs, size, !this.cropToAspectRatio);
      } else if (this.interpolation === "nearest") {
        return image.resizeNearestNeighbor(
          inputs,
          size,
          !this.cropToAspectRatio
        );
      } else {
        throw new Error(`Interpolation is ${this.interpolation} but only ${[...INTERPOLATION_METHODS]} are supported`);
      }
    });
  }
};
__publicField(Resizing, "className", "Resizing");
serialization_exports.registerClass(Resizing);

// src/tfjs-layers/src/exports_layers.ts
function inputLayer(args) {
  return new InputLayer(args);
}
function elu3(args) {
  return new ELU(args);
}
function reLU(args) {
  return new ReLU(args);
}
function leakyReLU(args) {
  return new LeakyReLU(args);
}
function prelu2(args) {
  return new PReLU(args);
}
function softmax2(args) {
  return new Softmax3(args);
}
function thresholdedReLU(args) {
  return new ThresholdedReLU(args);
}
function conv1d2(args) {
  return new Conv1D(args);
}
function conv2d3(args) {
  return new Conv2D2(args);
}
function conv2dTranspose2(args) {
  return new Conv2DTranspose(args);
}
function conv3d2(args) {
  return new Conv3D2(args);
}
function conv3dTranspose2(args) {
  return new Conv3DTranspose(args);
}
function separableConv2d2(args) {
  return new SeparableConv2D(args);
}
function cropping2D(args) {
  return new Cropping2D(args);
}
function upSampling2d(args) {
  return new UpSampling2D(args);
}
function depthwiseConv2d4(args) {
  return new DepthwiseConv2D(args);
}
function activation(args) {
  return new Activation5(args);
}
function dense(args) {
  return new Dense(args);
}
function dropout3(args) {
  return new Dropout(args);
}
function spatialDropout1d(args) {
  return new SpatialDropout1D(args);
}
function flatten3(args) {
  return new Flatten(args);
}
function repeatVector(args) {
  return new RepeatVector(args);
}
function reshape2(args) {
  return new Reshape2(args);
}
function permute(args) {
  return new Permute(args);
}
function embedding(args) {
  return new Embedding(args);
}
function add3(args) {
  return new Add2(args);
}
function average(args) {
  return new Average(args);
}
function concatenate2(args) {
  return new Concatenate(args);
}
function maximum2(args) {
  return new Maximum2(args);
}
function minimum2(args) {
  return new Minimum2(args);
}
function multiply(args) {
  return new Multiply2(args);
}
function dot3(args) {
  return new Dot(args);
}
function batchNormalization2(args) {
  return new BatchNormalization(args);
}
function layerNormalization(args) {
  return new LayerNormalization(args);
}
function zeroPadding2d(args) {
  return new ZeroPadding2D(args);
}
function averagePooling1d(args) {
  return new AveragePooling1D(args);
}
function avgPool1d(args) {
  return averagePooling1d(args);
}
function avgPooling1d(args) {
  return averagePooling1d(args);
}
function averagePooling2d(args) {
  return new AveragePooling2D(args);
}
function avgPool2d(args) {
  return averagePooling2d(args);
}
function avgPooling2d(args) {
  return averagePooling2d(args);
}
function averagePooling3d(args) {
  return new AveragePooling3D(args);
}
function avgPool3d2(args) {
  return averagePooling3d(args);
}
function avgPooling3d(args) {
  return averagePooling3d(args);
}
function globalAveragePooling1d(args) {
  return new GlobalAveragePooling1D(args);
}
function globalAveragePooling2d(args) {
  return new GlobalAveragePooling2D(args);
}
function globalMaxPooling1d(args) {
  return new GlobalMaxPooling1D(args);
}
function globalMaxPooling2d(args) {
  return new GlobalMaxPooling2D(args);
}
function maxPooling1d(args) {
  return new MaxPooling1D(args);
}
function maxPooling2d(args) {
  return new MaxPooling2D(args);
}
function maxPooling3d(args) {
  return new MaxPooling3D(args);
}
function gru(args) {
  return new GRU(args);
}
function gruCell(args) {
  return new GRUCell(args);
}
function lstm(args) {
  return new LSTM(args);
}
function lstmCell(args) {
  return new LSTMCell(args);
}
function simpleRNN(args) {
  return new SimpleRNN(args);
}
function simpleRNNCell(args) {
  return new SimpleRNNCell(args);
}
function convLstm2d(args) {
  return new ConvLSTM2D(args);
}
function convLstm2dCell(args) {
  return new ConvLSTM2DCell(args);
}
function rnn2(args) {
  return new RNN(args);
}
function stackedRNNCells(args) {
  return new StackedRNNCells(args);
}
function bidirectional(args) {
  return new Bidirectional(args);
}
function timeDistributed(args) {
  return new TimeDistributed(args);
}
var globalMaxPool1d = globalMaxPooling1d;
var globalMaxPool2d = globalMaxPooling2d;
var maxPool1d = maxPooling1d;
var maxPool2d = maxPooling2d;
function gaussianNoise(args) {
  return new GaussianNoise(args);
}
function gaussianDropout(args) {
  return new GaussianDropout(args);
}
function alphaDropout(args) {
  return new AlphaDropout(args);
}
function masking(args) {
  return new Masking(args);
}
function rescaling(args) {
  return new Rescaling(args);
}
function centerCrop(args) {
  return new CenterCrop(args);
}
function resizing(args) {
  return new Resizing(args);
}
function categoryEncoding(args) {
  return new CategoryEncoding(args);
}

// src/tfjs-layers/src/exports_metrics.ts
var exports_metrics_exports = {};
__export(exports_metrics_exports, {
  MAPE: () => MAPE2,
  MSE: () => MSE2,
  binaryAccuracy: () => binaryAccuracy2,
  binaryCrossentropy: () => binaryCrossentropy3,
  categoricalAccuracy: () => categoricalAccuracy2,
  categoricalCrossentropy: () => categoricalCrossentropy3,
  cosineProximity: () => cosineProximity2,
  mape: () => mape2,
  meanAbsoluteError: () => meanAbsoluteError2,
  meanAbsolutePercentageError: () => meanAbsolutePercentageError2,
  meanSquaredError: () => meanSquaredError3,
  mse: () => mse2,
  precision: () => precision2,
  recall: () => recall2,
  sparseCategoricalAccuracy: () => sparseCategoricalAccuracy2
});
function binaryAccuracy2(yTrue, yPred) {
  return binaryAccuracy(yTrue, yPred);
}
function binaryCrossentropy3(yTrue, yPred) {
  return binaryCrossentropy2(yTrue, yPred);
}
function sparseCategoricalAccuracy2(yTrue, yPred) {
  return sparseCategoricalAccuracy(yTrue, yPred);
}
function categoricalAccuracy2(yTrue, yPred) {
  return categoricalAccuracy(yTrue, yPred);
}
function categoricalCrossentropy3(yTrue, yPred) {
  return categoricalCrossentropy2(yTrue, yPred);
}
function precision2(yTrue, yPred) {
  return precision(yTrue, yPred);
}
function recall2(yTrue, yPred) {
  return recall(yTrue, yPred);
}
function cosineProximity2(yTrue, yPred) {
  return cosineProximity(yTrue, yPred);
}
function meanAbsoluteError2(yTrue, yPred) {
  return meanAbsoluteError(yTrue, yPred);
}
function meanAbsolutePercentageError2(yTrue, yPred) {
  return meanAbsolutePercentageError(yTrue, yPred);
}
function MAPE2(yTrue, yPred) {
  return meanAbsolutePercentageError(yTrue, yPred);
}
function mape2(yTrue, yPred) {
  return meanAbsolutePercentageError(yTrue, yPred);
}
function meanSquaredError3(yTrue, yPred) {
  return meanSquaredError2(yTrue, yPred);
}
function MSE2(yTrue, yPred) {
  return meanSquaredError2(yTrue, yPred);
}
function mse2(yTrue, yPred) {
  return meanSquaredError2(yTrue, yPred);
}

// src/tfjs-layers/src/exports_models.ts
var exports_models_exports = {};
__export(exports_models_exports, {
  modelFromJSON: () => modelFromJSON
});

// src/tfjs-layers/src/exports_regularizers.ts
var exports_regularizers_exports = {};
__export(exports_regularizers_exports, {
  l1: () => l12,
  l1l2: () => l1l2,
  l2: () => l22
});
function l1l2(config) {
  return new L1L2(config);
}
function l12(config) {
  return l1(config);
}
function l22(config) {
  return l2(config);
}

// src/tfjs-layers/src/callbacks.ts
var Callback = class extends BaseCallback {
  model = null;
  setModel(model2) {
    if (!(model2 instanceof LayersModel)) {
      throw new Error("model must be a LayersModel, not some other Container");
    }
    this.model = model2;
  }
};
function less2(currVal, prevVal) {
  return currVal < prevVal;
}
function greater2(currVal, prevVal) {
  return currVal > prevVal;
}
var EarlyStopping = class extends Callback {
  monitor;
  minDelta;
  patience;
  baseline;
  verbose;
  mode;
  monitorFunc;
  wait;
  stoppedEpoch;
  best;
  constructor(args) {
    super();
    if (args == null) {
      args = {};
    }
    if (args.restoreBestWeights) {
      throw new NotImplementedError(
        "restoreBestWeights = True is not implemented in EarlyStopping yet."
      );
    }
    this.monitor = args.monitor || "val_loss";
    this.minDelta = Math.abs(args.minDelta || 0);
    this.patience = args.patience || 0;
    this.verbose = args.verbose || 0;
    this.mode = args.mode || "auto";
    this.baseline = args.baseline;
    if (["auto", "min", "max"].indexOf(this.mode) === -1) {
      console.warn(
        `EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`
      );
      this.mode = "auto";
    }
    if (this.mode === "min") {
      this.monitorFunc = less2;
    } else if (this.mode === "max") {
      this.monitorFunc = greater2;
    } else {
      if (this.monitor.indexOf("acc") !== -1) {
        this.monitorFunc = greater2;
      } else {
        this.monitorFunc = less2;
      }
    }
    if (this.monitorFunc === less2) {
      this.minDelta *= -1;
    }
  }
  async onTrainBegin(logs) {
    this.wait = 0;
    this.stoppedEpoch = 0;
    if (this.baseline != null) {
      this.best = this.baseline;
    } else {
      this.best = this.monitorFunc === less2 ? Infinity : -Infinity;
    }
  }
  async onEpochEnd(epoch, logs) {
    await resolveScalarsInLogs(logs);
    const current = this.getMonitorValue(logs);
    if (current == null) {
      return;
    }
    if (this.monitorFunc(current - this.minDelta, this.best)) {
      this.best = current;
      this.wait = 0;
    } else {
      this.wait++;
      if (this.wait >= this.patience) {
        this.stoppedEpoch = epoch;
        this.model.stopTraining = true;
      }
    }
  }
  async onTrainEnd(logs) {
    if (this.stoppedEpoch > 0 && this.verbose) {
      console.log(`Epoch ${this.stoppedEpoch}: early stopping.`);
    }
  }
  getMonitorValue(logs) {
    if (logs == null) {
      logs = {};
    }
    const monitorValue = logs[this.monitor];
    if (monitorValue == null) {
      console.warn(
        `Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(logs)}`
      );
    }
    return monitorValue;
  }
};
function earlyStopping(args) {
  return new EarlyStopping(args);
}
var callbacks = { earlyStopping };
export {
  Callback,
  CallbackList,
  CustomCallback,
  EarlyStopping,
  History,
  InputSpec,
  LayerVariable,
  LayersModel,
  RNN,
  Sequential,
  SymbolicTensor,
  callbacks,
  exports_constraints_exports as constraints,
  exports_initializers_exports as initializers,
  input,
  exports_layers_exports as layers,
  loadLayersModel,
  exports_metrics_exports as metrics,
  model,
  exports_models_exports as models,
  registerCallbackConstructor,
  exports_regularizers_exports as regularizers,
  sequential,
  version2 as version_layers
};
//# sourceMappingURL=tfjs-layers.esm.js.map
