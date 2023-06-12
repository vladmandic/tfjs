var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod3) => function __require() {
  return mod3 || (0, cb[__getOwnPropNames(cb)[0]])((mod3 = { exports: {} }).exports, mod3), mod3.exports;
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
var __toESM = (mod3, isNodeMode, target) => (target = mod3 != null ? __create(__getProtoOf(mod3)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod3 || !mod3.__esModule ? __defProp(target, "default", { value: mod3, enumerable: true }) : target,
  mod3
));

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
      var p2;
      if ((p2 = str.indexOf("-")) > 0)
        throw Error("interior hyphen");
      else if (p2 === 0) {
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
          var radixLong = fromNumber(radix), div3 = this.div(radixLong), rem1 = div3.mul(radixLong).sub(this);
          return div3.toString(radix) + rem1.toInt().toString(radix);
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
      return !this.eq(
        /* validates */
        other
      );
    };
    LongPrototype.neq = LongPrototype.notEquals;
    LongPrototype.ne = LongPrototype.notEquals;
    LongPrototype.lessThan = function lessThan(other) {
      return this.comp(
        /* validates */
        other
      ) < 0;
    };
    LongPrototype.lt = LongPrototype.lessThan;
    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
      return this.comp(
        /* validates */
        other
      ) <= 0;
    };
    LongPrototype.lte = LongPrototype.lessThanOrEqual;
    LongPrototype.le = LongPrototype.lessThanOrEqual;
    LongPrototype.greaterThan = function greaterThan(other) {
      return this.comp(
        /* validates */
        other
      ) > 0;
    };
    LongPrototype.gt = LongPrototype.greaterThan;
    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
      return this.comp(
        /* validates */
        other
      ) >= 0;
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

// (disabled):src/node_modules/.pnpm/node-fetch@2.6.9/node_modules/node-fetch/browser.js
var require_browser = __commonJS({
  "(disabled):src/node_modules/.pnpm/node-fetch@2.6.9/node_modules/node-fetch/browser.js"() {
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
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
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
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
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
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
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
          seed = +/* @__PURE__ */ new Date();
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
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
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
          seed = +/* @__PURE__ */ new Date();
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
      // window object or global
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
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
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
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
    (function(global2, pool3, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom3(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten2(
          options.entropy ? [seed, tostring(pool3)] : seed == null ? autoseed() : seed,
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
        mixkey(tostring(arc4.S), pool3);
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
          return [+/* @__PURE__ */ new Date(), global2, plugins, global2.screen, tostring(pool3)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool3);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom3;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom3;
        });
      } else {
        math["seed" + rngname] = seedrandom3;
      }
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self !== "undefined" ? self : exports,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  }
});

// src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "src/node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js"(exports, module) {
    var alea3 = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea3;
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
  createTensorFromGPUData(values, shape, dtype) {
    return notYetImplemented("createTensorFromGPUData");
  }
  memory() {
    return notYetImplemented("memory");
  }
  /** Returns the highest precision for floats in bits (e.g. 16 or 32) */
  floatPrecision() {
    return notYetImplemented("floatPrecision");
  }
  /** Returns the smallest representable number.  */
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
function arraysEqualWithNull(n1, n2) {
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
    if (n1[i] !== null && n2[i] !== null && n1[i] !== n2[i]) {
      return false;
    }
  }
  return true;
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
  return getArrayFromDType(dtype, size);
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
function convertBackendValuesAndArrayBuffer(data, dtype) {
  if (Array.isArray(data)) {
    return data;
  }
  if (dtype === "float32") {
    return data instanceof Float32Array ? data : new Float32Array(data);
  } else if (dtype === "int32") {
    return data instanceof Int32Array ? data : new Int32Array(data);
  } else if (dtype === "bool" || dtype === "string") {
    return Uint8Array.from(new Int32Array(data));
  } else {
    throw new Error(`Unknown dtype ${dtype}`);
  }
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
  // tslint:disable-next-line: no-any
  constructor(global2) {
    this.global = global2;
    this.flags = {};
    this.flagRegistry = {};
    this.urlFlags = {};
    // Jasmine spies on this in 'environment_test.ts'
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
  getString(flagName) {
    return this.get(flagName);
  }
  getFlags() {
    return this.flags;
  }
  // For backwards compatibility.
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
  const lowerCaseValue = value.toLowerCase();
  if (lowerCaseValue === "true" || lowerCaseValue === "false") {
    return lowerCaseValue === "true";
  } else if (`${+lowerCaseValue}` === lowerCaseValue) {
    return +lowerCaseValue;
  } else {
    return value;
  }
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
var BitwiseAnd = "BitwiseAnd";
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
var Draw = "Draw";
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
var TensorScatterUpdate = "TensorScatterUpdate";
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
var StaticRegexReplace = "StaticRegexReplace";
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
  arraysEqualWithNull: () => arraysEqualWithNull,
  assert: () => assert,
  assertNonNegativeIntegerDimensions: () => assertNonNegativeIntegerDimensions,
  assertNonNull: () => assertNonNull,
  assertShapesMatch: () => assertShapesMatch,
  bytesFromStringArray: () => bytesFromStringArray,
  bytesPerElement: () => bytesPerElement,
  checkConversionForErrors: () => checkConversionForErrors,
  clamp: () => clamp,
  computeStrides: () => computeStrides,
  convertBackendValuesAndArrayBuffer: () => convertBackendValuesAndArrayBuffer,
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

// src/tfjs-core/src/platforms/is_typed_array_browser.ts
function isTypedArrayBrowser(a) {
  return a instanceof Float32Array || a instanceof Int32Array || a instanceof Uint8Array || a instanceof Uint8ClampedArray;
}

// src/tfjs-core/src/hash_util.ts
var LongExports = __toESM(require_long());
var Long = (
  // tslint:disable-next-line
  LongExports.default || LongExports
);
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
function isTypedArray(a) {
  if (env().platform.isTypedArray != null) {
    return env().platform.isTypedArray(a);
  } else {
    return isTypedArrayBrowser(a);
  }
}
function flatten(arr, result = [], skipTypedArray = false) {
  if (result == null) {
    result = [];
  }
  if (typeof arr === "boolean" || typeof arr === "number" || typeof arr === "string" || isPromise(arr) || arr == null || isTypedArray(arr) && skipTypedArray) {
    result.push(arr);
  } else if (Array.isArray(arr) || isTypedArray(arr)) {
    for (let i = 0; i < arr.length; ++i) {
      flatten(arr[i], result, skipTypedArray);
    }
  } else {
    let maxIndex = -1;
    for (const key of Object.keys(arr)) {
      if (/^([1-9]+[0-9]*|0)$/.test(key)) {
        maxIndex = Math.max(maxIndex, Number(key));
      }
    }
    for (let i = 0; i <= maxIndex; i++) {
      flatten(arr[i], result, skipTypedArray);
    }
  }
  return result;
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
        /* isLast */
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
        /* isLast */
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
        /* isLast */
      ));
    }
  }
  const sep = rank === 2 ? "," : "";
  lines[0] = "[" + (size > 0 ? lines[0] + sep : "");
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
  /**
   * Sets a value in the buffer at a given location.
   *
   * @param value The value to set.
   * @param locs  The location indices.
   *
   * @doc {heading: 'Tensors', subheading: 'Creation'}
   */
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
  /**
   * Returns the value in the buffer at the provided location.
   *
   * @param locs The location indices.
   *
   * @doc {heading: 'Tensors', subheading: 'Creation'}
   */
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
  /**
   * Creates an immutable `tf.Tensor` object from the buffer.
   *
   * @doc {heading: 'Tensors', subheading: 'Creation'}
   */
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
    /** Whether this tensor has been globally kept. */
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
  /**
   * Returns a promise of `tf.TensorBuffer` that holds the underlying data.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
  async buffer() {
    const vals = await this.data();
    return opHandler.buffer(this.shape, this.dtype, vals);
  }
  /**
   * Returns a `tf.TensorBuffer` that holds the underlying data.
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
  bufferSync() {
    return opHandler.buffer(this.shape, this.dtype, this.dataSync());
  }
  /**
   * Returns the tensor data as a nested array. The transfer of data is done
   * asynchronously.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
  async array() {
    const vals = await this.data();
    return toNestedArray(this.shape, vals, this.dtype === "complex64");
  }
  /**
   * Returns the tensor data as a nested array. The transfer of data is done
   * synchronously.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
  arraySync() {
    return toNestedArray(
      this.shape,
      this.dataSync(),
      this.dtype === "complex64"
    );
  }
  /**
   * Asynchronously downloads the values from the `tf.Tensor`. Returns a
   * promise of `TypedArray` that resolves when the computation has finished.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
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
  /**
   * Copy the tensor's data to a new GPU resource. Comparing to the `dataSync()`
   * and `data()`, this method prevents data from being downloaded to CPU.
   *
   * For WebGL backend, the data will be stored on a densely packed texture.
   * This means that the texture will use the RGBA channels to store value.
   *
   * For WebGPU backend, the data will be stored on a buffer. There is no
   * parameter, so can not use a user-defined size to create the buffer.
   *
   * @param options:
   *     For WebGL,
   *         - customTexShape: Optional. If set, will use the user defined
   *     texture shape to create the texture.
   *
   * @returns For WebGL backend, a GPUData contains the new texture and
   *     its information.
   *     {
   *        tensorRef: The tensor that is associated with this texture,
   *        texture: WebGLTexture,
   *        texShape: [number, number] // [height, width]
   *     }
   *
   *     For WebGPU backend, a GPUData contains the new buffer.
   *     {
   *        tensorRef: The tensor that is associated with this buffer,
   *        buffer: GPUBuffer,
   *     }
   *
   *     Remember to dispose the GPUData after it is used by
   *     `res.tensorRef.dispose()`.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
  dataToGPU(options) {
    this.throwIfDisposed();
    return trackerFn().readToGPU(this.dataId, options);
  }
  /**
   * Synchronously downloads the values from the `tf.Tensor`. This blocks the
   * UI thread until the values are ready, which can cause performance issues.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
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
  /** Returns the underlying bytes of the tensor's data. */
  async bytes() {
    this.throwIfDisposed();
    const data = await trackerFn().read(this.dataId);
    if (this.dtype === "string") {
      return data;
    } else {
      return new Uint8Array(data.buffer);
    }
  }
  /**
   * Disposes `tf.Tensor` from memory.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
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
  /**
   * Prints the `tf.Tensor`. See `tf.print` for details.
   *
   * @param verbose Whether to print verbose information about the tensor,
   *    including dtype and size.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
  print(verbose = false) {
    return opHandler.print(this, verbose);
  }
  /**
   * Returns a copy of the tensor. See `tf.clone` for details.
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
  clone() {
    this.throwIfDisposed();
    return opHandler.clone(this);
  }
  /**
   * Returns a human-readable description of the tensor. Useful for logging.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
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
  /**
   * Assign a new `tf.Tensor` to this variable. The new `tf.Tensor` must have
   * the same shape and dtype as the old `tf.Tensor`.
   *
   * @param newValue New tensor to be assigned to this variable.
   *
   * @doc {heading: 'Tensors', subheading: 'Classes'}
   */
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
    trackerFn().incRef(
      this,
      null
      /* backend */
    );
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
function isWebGLData(values) {
  return values != null && typeof values === "object" && "texture" in values && values.texture instanceof WebGLTexture;
}
function isWebGPUData(values) {
  return typeof GPUBuffer !== "undefined" && values != null && typeof values === "object" && "buffer" in values && values.buffer instanceof GPUBuffer;
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
    // Public since optimizers will use it.
    this.registeredVariables = {};
    this.nextTapeNodeId = 0;
    this.numBytes = 0;
    this.numTensors = 0;
    this.numStringTensors = 0;
    this.numDataBuffers = 0;
    // Number of nested tf.grad() statements when computing higher-order
    // gradients. E.g. `1` for first-order gradients and `2` for second-order
    // gradients. Used to track if the tape should be removed after a backprop.
    this.gradientDepth = 0;
    // Number of nested kernel calls. When kernel depth is greater than 1, we turn
    // off the tape.
    this.kernelDepth = 0;
    this.scopeStack = [];
    /**
     * Keeps track of the number of data moves during a kernel execution. We
     * maintain a stack since kernels can call other kernels, recursively.
     */
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
  constructor(ENV3) {
    this.ENV = ENV3;
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
  /**
   * Initializes a backend by looking up the backend name in the factory
   * registry and calling the factory method. Returns a boolean representing
   * whether the initialization of the backend suceeded. Throws an error if
   * there is no backend in the factory registry.
   */
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
  /**
   * This method is called instead of the public-facing tensor.clone() when
   * saving a tensor for backwards pass. It makes sure to add the clone
   * operation to the tape regardless of being called inside a kernel
   * execution.
   */
  clone(x) {
    const y = ENGINE.runKernel(
      Identity,
      { x }
    );
    const inputs = { x };
    const grad2 = (dy) => ({
      x: () => {
        const dtype = "float32";
        const gradInputs = { x: dy };
        const attrs = { dtype };
        return ENGINE.runKernel(
          Cast,
          gradInputs,
          // tslint:disable-next-line: no-unnecessary-type-assertion
          attrs
        );
      }
    });
    const saved = [];
    this.addTapeNode(this.state.activeScope.name, inputs, [y], grad2, saved, {});
    return y;
  }
  /**
   * Execute a kernel with the given name and return the output tensor.
   *
   * @param kernelName The name of the kernel to execute.
   * @param inputs A map of input names to tensors.
   * @param attrs A map of attribute names to their values. An attribute is a
   *     primitive (non-tensor) input to the kernel.
   * @param inputsToSave A list of tensors, inputs to save for the backprop
   *     computation.
   * @param outputsToSave A list of booleans, specifying which output to save
   *     for the backprop computation. These are booleans since the output
   * tensors are not visible to the user.
   */
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
  /**
   * Internal helper method to execute a kernel Func
   *
   * Use `runKernel` to execute kernels from outside of engine.
   */
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
      // Stop recording to a tape when running a kernel.
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
  /**
   * Saves tensors used in forward mode for use in backward mode.
   *
   * @param tensors the list of tensors to save.
   */
  saveTensorsForBackwardMode(tensors) {
    const saved = tensors.map((tensor2) => this.keep(this.clone(tensor2)));
    return saved;
  }
  /**
   * Returns a list of tensors to save for a given gradient calculation.
   *
   * @param kernelName name of kernel to look up gradient for.
   * @param inputs a map of input tensors.
   * @param outputs an array of output tensors from forward mode of kernel.
   */
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
  /**
   * Internal method used by public APIs for tensor creation. Makes a new
   * tensor with the provided shape, dtype and values. It always
   * creates a new data id and writes the values to the underlying backend.
   */
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
  /**
   * Internal method used by backends. Makes a new tensor
   * that is a wrapper around an existing data id. It doesn't create
   * a new data id, only increments the ref count used in memory tracking.
   * @deprecated
   */
  makeTensorFromDataId(dataId, shape, dtype, backend) {
    dtype = dtype || "float32";
    const tensorInfo = { dataId, shape, dtype };
    return this.makeTensorFromTensorInfo(tensorInfo, backend);
  }
  /**
   * Internal method used by backends. Makes a new tensor that is a wrapper
   * around an existing data id in TensorInfo. It doesn't create a new data id,
   * only increments the ref count used in memory tracking.
   */
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
  // Track the tensor by dataId and increase the refCount for the dataId in the
  // backend.
  // TODO(pyu10055): This is currently used by makeVariable method, to increase
  // refCount on the backend for the dataId. It can potentially be replaced with
  // Identity op indead of calling backend directly.
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
  /**
   * Start a scope. Use this with endScope() to achieve the same functionality
   * as scope() without the need for a function closure.
   */
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
  /**
   * End a scope. Use this with startScope() to achieve the same functionality
   * as scope() without the need for a function closure.
   */
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
  /**
   * Returns gradients of `f` with respect to each of the `xs`. The gradients
   * returned are of the same length as `xs`, but some might be null if `f`
   * was not a function of that `x`. It also takes optional dy to multiply the
   * gradient, which defaults to `1`.
   */
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
        // Pass the tidy function to avoid circular dep with `tape.ts`.
        (f2) => this.tidy(f2),
        // Pass an add function to avoide a circular dep with `tape.ts`.
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
  /**
   * Tracks a Tensor in the current scope to be automatically cleaned up
   * when the current scope ends, and returns the value.
   *
   * @param result The Tensor to track in the current scope.
   */
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
  /**
   * Resets the engine state. Removes all backends but does not remove
   * registered backend factories.
   */
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
  return typeof window !== "undefined" && window.document != null || //@ts-ignore
  typeof WorkerGlobalScope !== "undefined";
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
ENV2.registerFlag(
  "IS_SAFARI",
  () => typeof navigator !== "undefined" && navigator != null && navigator.userAgent != null && /Safari/.test(navigator.userAgent) && /Apple/.test(navigator.vendor)
);
ENV2.registerFlag("PROD", () => false);
ENV2.registerFlag(
  "TENSORLIKE_CHECK_SHAPE_CONSISTENCY",
  () => ENV2.getBool("DEBUG")
);
ENV2.registerFlag("DEPRECATION_WARNINGS_ENABLED", () => true);
ENV2.registerFlag("IS_TEST", () => false);
ENV2.registerFlag("CHECK_COMPUTATION_FOR_ERRORS", () => ENV2.getBool("DEBUG"));
ENV2.registerFlag("WRAP_TO_IMAGEBITMAP", () => false);
ENV2.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU", () => false);
ENV2.registerFlag("USE_SETTIMEOUTCUSTOM", () => false);

// src/tfjs-core/src/tensor_util_env.ts
function inferShape(val, dtype) {
  let firstElem = val;
  if (isTypedArray(val)) {
    return dtype === "string" ? [] : [val.length];
  }
  if (isWebGLData(val)) {
    const usedChannels = val.channels || "RGBA";
    return [val.height, val.width * usedChannels.length];
  } else if (isWebGPUData(val)) {
    return [val.buffer.size / (dtype == null ? 4 : bytesPerElement(dtype))];
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
function complex_(real3, imag3) {
  const $real = convertToTensor(real3, "real", "complex");
  const $imag = convertToTensor(imag3, "imag", "complex");
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
  } else if (dtype === "complex64") {
    throw new Error(
      `Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`
    );
  }
  if (isWebGPUData(values) || isWebGLData(values)) {
    if (dtype !== "float32" && dtype !== "int32") {
      throw new Error(
        `Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${dtype}.`
      );
    }
    return ENGINE.backend.createTensorFromGPUData(
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

// src/tfjs-core/src/io/composite_array_buffer.ts
var CompositeArrayBuffer = class {
  constructor(buffers) {
    this.shards = [];
    this.previousShardIndex = 0;
    if (buffers == null) {
      return;
    }
    if (!(buffers instanceof Array)) {
      buffers = [buffers];
    }
    buffers = buffers.map((bufferOrTypedArray) => {
      if (isTypedArray(bufferOrTypedArray)) {
        return bufferOrTypedArray.buffer;
      }
      return bufferOrTypedArray;
    });
    if (buffers.length === 0) {
      return;
    }
    this.bufferUniformSize = buffers[0].byteLength;
    let start = 0;
    for (let i = 0; i < buffers.length; i++) {
      const buffer2 = buffers[i];
      if (i !== buffers.length - 1 && buffer2.byteLength !== this.bufferUniformSize) {
        this.bufferUniformSize = void 0;
      }
      const end = start + buffer2.byteLength;
      this.shards.push({ buffer: buffer2, start, end });
      start = end;
    }
    if (this.shards.length === 0) {
      this.byteLength = 0;
    }
    this.byteLength = this.shards[this.shards.length - 1].end;
  }
  /**
   * Concatenate a number of ArrayBuffers into one.
   *
   * @param buffers An array of ArrayBuffers to concatenate, or a single
   *     ArrayBuffer.
   * @returns Result of concatenating `buffers` in order.
   */
  static join(buffers) {
    return new CompositeArrayBuffer(buffers).slice();
  }
  slice(start = 0, end = this.byteLength) {
    if (this.shards.length === 0) {
      return new ArrayBuffer(0);
    }
    start = isNaN(Number(start)) ? 0 : start;
    end = isNaN(Number(end)) ? 0 : end;
    start = Math.max(0, start);
    end = Math.min(this.byteLength, end);
    if (end <= start) {
      return new ArrayBuffer(0);
    }
    const startShardIndex = this.findShardForByte(start);
    if (startShardIndex === -1) {
      throw new Error(`Could not find start shard for byte ${start}`);
    }
    const size = end - start;
    const outputBuffer = new ArrayBuffer(size);
    const outputArray = new Uint8Array(outputBuffer);
    let sliced = 0;
    for (let i = startShardIndex; i < this.shards.length; i++) {
      const shard = this.shards[i];
      const globalStart = start + sliced;
      const localStart = globalStart - shard.start;
      const outputStart = sliced;
      const globalEnd = Math.min(end, shard.end);
      const localEnd = globalEnd - shard.start;
      const outputSlice = new Uint8Array(
        shard.buffer,
        localStart,
        localEnd - localStart
      );
      outputArray.set(outputSlice, outputStart);
      sliced += outputSlice.length;
      if (end < shard.end) {
        break;
      }
    }
    return outputBuffer;
  }
  /**
   * Get the index of the shard that contains the byte at `byteIndex`.
   */
  findShardForByte(byteIndex) {
    if (this.shards.length === 0 || byteIndex < 0 || byteIndex >= this.byteLength) {
      return -1;
    }
    if (this.bufferUniformSize != null) {
      this.previousShardIndex = Math.floor(byteIndex / this.bufferUniformSize);
      return this.previousShardIndex;
    }
    function check(shard) {
      if (byteIndex < shard.start) {
        return -1;
      }
      if (byteIndex >= shard.end) {
        return 1;
      }
      return 0;
    }
    if (check(this.shards[this.previousShardIndex]) === 0) {
      return this.previousShardIndex;
    }
    const index = search(this.shards, check);
    if (index === -1) {
      return -1;
    }
    this.previousShardIndex = index;
    return this.previousShardIndex;
  }
};
function search(sortedArray, compare) {
  let min3 = 0;
  let max3 = sortedArray.length;
  while (min3 <= max3) {
    const middle = Math.floor((max3 - min3) / 2) + min3;
    const side = compare(sortedArray[middle]);
    if (side === 0) {
      return middle;
    } else if (side < 0) {
      max3 = middle;
    } else {
      min3 = middle + 1;
    }
  }
  return -1;
}

// src/tfjs-core/src/io/io_utils.ts
var useNodeBuffer = typeof Buffer !== "undefined" && (typeof Blob === "undefined" || typeof atob === "undefined" || typeof btoa === "undefined");
function stringByteLength(str) {
  if (useNodeBuffer) {
    return Buffer.byteLength(str, "utf8");
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
    dateSaved: /* @__PURE__ */ new Date(),
    modelTopologyType: "JSON",
    modelTopologyBytes: modelArtifacts.modelTopology == null ? 0 : stringByteLength(JSON.stringify(modelArtifacts.modelTopology)),
    weightSpecsBytes: modelArtifacts.weightSpecs == null ? 0 : stringByteLength(JSON.stringify(modelArtifacts.weightSpecs)),
    weightDataBytes: modelArtifacts.weightData == null ? 0 : new CompositeArrayBuffer(modelArtifacts.weightData).byteLength
  };
}
function getWeightSpecs(weightsManifest) {
  const weightSpecs = [];
  for (const entry of weightsManifest) {
    weightSpecs.push(...entry.weights);
  }
  return weightSpecs;
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
  /**
   * Register a save-handler router.
   *
   * @param saveRouter A function that maps a URL-like string onto an instance
   * of `IOHandler` with the `save` method defined or `null`.
   */
  static registerSaveRouter(saveRouter) {
    IORouterRegistry.getInstance().saveRouters.push(saveRouter);
  }
  /**
   * Register a load-handler router.
   *
   * @param loadRouter A function that maps a URL-like string onto an instance
   * of `IOHandler` with the `load` method defined or `null`.
   */
  static registerLoadRouter(loadRouter) {
    IORouterRegistry.getInstance().loadRouters.push(loadRouter);
  }
  /**
   * Look up IOHandler for saving, given a URL-like string.
   *
   * @param url
   * @returns If only one match is found, an instance of IOHandler with the
   * `save` method defined. If no match is found, `null`.
   * @throws Error, if more than one match is found.
   */
  static getSaveHandlers(url) {
    return IORouterRegistry.getHandlers(url, "save");
  }
  /**
   * Look up IOHandler for loading, given a URL-like string.
   *
   * @param url
   * @param loadOptions Optional, custom load options.
   * @returns All valid handlers for `url`, given the currently registered
   *   handler routers.
   */
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
  /**
   * Perform database action to put model artifacts into or read model artifacts
   * from IndexedDB object store.
   *
   * Whether the action is put or get depends on whether `modelArtifacts` is
   * specified. If it is specified, the action will be put; otherwise the action
   * will be get.
   *
   * @param modelPath A unique string path for the model.
   * @param modelArtifacts If specified, it will be the model artifacts to be
   *   stored in IndexedDB.
   * @returns A `Promise` of `SaveResult`, if the action is put, or a `Promise`
   *   of `ModelArtifacts`, if the action is get.
   */
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
          modelArtifacts.weightData = CompositeArrayBuffer.join(
            modelArtifacts.weightData
          );
          const modelArtifactsInfo = getModelArtifactsInfoForJSON(modelArtifacts);
          const infoTx = db.transaction(INFO_STORE_NAME, "readwrite");
          let infoStore = infoTx.objectStore(INFO_STORE_NAME);
          let putInfoRequest;
          try {
            putInfoRequest = infoStore.put({ modelPath: this.modelPath, modelArtifactsInfo });
          } catch (error) {
            return reject(error);
          }
          let modelTx;
          putInfoRequest.onsuccess = () => {
            modelTx = db.transaction(MODEL_STORE_NAME, "readwrite");
            const modelStore = modelTx.objectStore(MODEL_STORE_NAME);
            let putModelRequest;
            try {
              putModelRequest = modelStore.put({
                modelPath: this.modelPath,
                modelArtifacts,
                modelArtifactsInfo
              });
            } catch (error) {
              return reject(error);
            }
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
  /**
   * Save model artifacts to browser local storage.
   *
   * See the documentation to `browserLocalStorage` for details on the saved
   * artifacts.
   *
   * @param modelArtifacts The model artifacts to be stored.
   * @returns An instance of SaveResult.
   */
  async save(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
      throw new Error(
        "BrowserLocalStorage.save() does not support saving model topology in binary formats yet."
      );
    } else {
      const topology = JSON.stringify(modelArtifacts.modelTopology);
      const weightSpecs = JSON.stringify(modelArtifacts.weightSpecs);
      const modelArtifactsInfo = getModelArtifactsInfoForJSON(modelArtifacts);
      const weightBuffer = CompositeArrayBuffer.join(modelArtifacts.weightData);
      try {
        this.LS.setItem(this.keys.info, JSON.stringify(modelArtifactsInfo));
        this.LS.setItem(this.keys.topology, topology);
        this.LS.setItem(this.keys.weightSpecs, weightSpecs);
        this.LS.setItem(
          this.keys.weightData,
          arrayBufferToBase64String(weightBuffer)
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
  /**
   * Load a model from local storage.
   *
   * See the documentation to `browserLocalStorage` for details on the saved
   * artifacts.
   *
   * @returns The loaded model (if loading succeeds).
   */
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
  /**
   * Register a save-handler router.
   *
   * @param saveRouter A function that maps a URL-like string onto an instance
   * of `IOHandler` with the `save` method defined or `null`.
   */
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
  constructor() {
    // For setTimeoutCustom
    this.messageName = "setTimeoutCustom";
    this.functionRefs = [];
    this.handledMessageCount = 0;
    this.hasEventListener = false;
  }
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
  // If the setTimeout nesting level is greater than 5 and timeout is less
  // than 4ms, timeout will be clamped to 4ms, which hurts the perf.
  // Interleaving window.postMessage and setTimeout will trick the browser and
  // avoid the clamp.
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
  isTypedArray(a) {
    return isTypedArrayBrowser(a);
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
  // tslint:disable-next-line:no-require-imports
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
  isTypedArray(a) {
    return this.util.types.isFloat32Array(a) || this.util.types.isInt32Array(a) || this.util.types.isUint8Array(a) || this.util.types.isUint8ClampedArray(a);
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
  return ENGINE.runKernel(
    RealDiv,
    inputs,
    attrs
  );
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
function computeOutputShape4D(inShape, filterShape, outChannels, strides, zeroPad, roundingMode) {
  if (zeroPad == null) {
    zeroPad = computeDefaultPad(inShape, filterShape[0], strides[0]);
  }
  const outShape = [0, 0, 0, outChannels];
  for (let index = 0; index < 3; index++) {
    if (inShape[index] + 2 * zeroPad >= filterShape[index]) {
      outShape[index] = round(
        (inShape[index] - filterShape[index] + 2 * zeroPad) / strides[index] + 1,
        roundingMode
      );
    }
  }
  return outShape;
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
  if (pad2 === "valid") {
    pad2 = 0;
  }
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
      [filterDepth, filterHeight, filterWidth],
      1,
      [strideDepth, strideHeight, strideWidth],
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
function stridesOrDilationsArePositive(values) {
  return parseTupleParam(values).every((value) => value > 0);
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
      pad2.forEach((p2) => {
        p2.forEach((v) => {
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
  assert(
    typeof strides === "number" && strides > 0 || Array.isArray(strides) && strides[0] > 0 && strides[1] > 0 && strides[2] > 0,
    () => `Error in avgPool3d: Stride must be > 0, but got '${strides}'`
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
function batchNorm_(x, mean3, variance, offset, scale2, varianceEpsilon) {
  if (varianceEpsilon == null) {
    varianceEpsilon = 1e-3;
  }
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean3, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale2 != null) {
    $scale = convertToTensor(scale2, "scale", "batchNorm");
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
function batchNorm2d_(x, mean3, variance, offset, scale2, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean3, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale2 != null) {
    $scale = convertToTensor(scale2, "scale", "batchNorm");
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
function batchNorm3d_(x, mean3, variance, offset, scale2, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean3, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale2 != null) {
    $scale = convertToTensor(scale2, "scale", "batchNorm");
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
function batchNorm4d_(x, mean3, variance, offset, scale2, varianceEpsilon) {
  const $x = convertToTensor(x, "x", "batchNorm");
  const $mean = convertToTensor(mean3, "mean", "batchNorm");
  const $variance = convertToTensor(variance, "variance", "batchNorm");
  let $scale;
  if (scale2 != null) {
    $scale = convertToTensor(scale2, "scale", "batchNorm");
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

// src/tfjs-core/src/ops/bitwise_and.ts
function bitwiseAnd_(x, y) {
  const $x = convertToTensor(x, "x", "bitwiseAnd");
  const $y = convertToTensor(y, "y", "bitwiseAnd");
  if (!arraysEqual($x.shape, $y.shape)) {
    throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${$x.shape}, y: ${$y.shape}`);
  }
  if ($x.dtype !== "int32" || $y.dtype !== "int32") {
    throw new Error(
      `BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${$x.dtype} and type of y: ${$y.dtype}`
    );
  }
  const inputs = { a: $x, b: $y };
  return ENGINE.runKernel(BitwiseAnd, inputs);
}
var bitwiseAnd = op({ bitwiseAnd_ });

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
  assertNonNegativeIntegerDimensions(shape);
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

// src/tfjs-core/src/ops/fill.ts
function fill(shape, value, dtype) {
  assertNonNegativeIntegerDimensions(shape);
  dtype = dtype || inferDtype(value);
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
  return concat(
    tensors,
    0
    /* axis */
  );
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
  assert(
    stridesOrDilationsArePositive(dilations),
    () => "Error in conv2D: Dilated rates should be larger than 0."
  );
  assert(
    stridesOrDilationsArePositive(strides),
    () => "Error in conv2D: Strides should be larger than 0."
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
    stridesOrDilationsArePositive(dilation),
    () => "Error in conv1D: Dilated rates should be larger than 0."
  );
  assert(
    stridesOrDilationsArePositive(stride),
    () => "Error in conv1D: Stride should be larger than 0."
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
  assert(
    stridesOrDilationsArePositive(dilations),
    () => "Error in conv3D: Dilated rates should be larger than 0."
  );
  assert(
    stridesOrDilationsArePositive(strides),
    () => "Error in conv3D: Strides should be larger than 0."
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
  assert(
    x4D.shape[3] === $filter.shape[2],
    () => `Error in dilation2d:  input and filter must have the same depth: ${x4D.shape[3]} vs ${$filter.shape[2]}`
  );
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
  const l = Math.max(shapeA.length, shapeB.length);
  const result = new Array(l);
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
      result[l - i - 1] = b;
    } else if (b === 1) {
      result[l - i - 1] = a;
    } else if (a !== b) {
      const errMsg = `Operands could not be broadcast together with shapes ${shapeA} and ${shapeB}.`;
      throw Error(errMsg);
    } else {
      result[l - i - 1] = a;
    }
  }
  return result;
}

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

// src/tfjs-core/src/ops/ensure_shape.ts
function ensureShape_(x, shape) {
  const $x = convertToTensor(x, "x", "ensureShape", "string_or_numeric");
  if (!arraysEqualWithNull($x.shape, shape)) {
    throw new Error(`EnsureShape: Shape of tensor ${$x.shape} is not compatible with expected shape ${shape}`);
  }
  return x;
}
var ensureShape = op({ ensureShape_ });

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
function normImpl(x, p2, axis = null) {
  if (x.rank === 0) {
    return abs(x);
  }
  if (x.rank !== 1 && axis === null) {
    return normImpl(reshape(x, [-1]), p2, axis);
  }
  if (x.rank === 1 || typeof axis === "number" || Array.isArray(axis) && axis.length === 1) {
    if (p2 === 1) {
      return sum2(abs(x), axis);
    }
    if (p2 === Infinity) {
      return max(abs(x), axis);
    }
    if (p2 === -Infinity) {
      return min(abs(x), axis);
    }
    if (p2 === "euclidean" || p2 === 2) {
      return sqrt(sum2(pow(abs(x), scalar(2, "int32")), axis));
    }
    throw new Error(`Error in norm: invalid ord value: ${p2}`);
  }
  if (Array.isArray(axis) && axis.length === 2) {
    if (p2 === 1) {
      return max(sum2(abs(x), axis[0]), axis[1] - 1);
    }
    if (p2 === Infinity) {
      return max(sum2(abs(x), axis[1]), axis[0]);
    }
    if (p2 === -Infinity) {
      return min(sum2(abs(x), axis[1]), axis[0]);
    }
    if (p2 === "fro" || p2 === "euclidean") {
      return sqrt(sum2(square(x), axis));
    }
    throw new Error(`Error in norm: invalid ord value: ${p2}`);
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
  const xMax = max(
    $x,
    axes,
    true
    /* keepDims */
  );
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
  assertNonNegativeIntegerDimensions(shape);
  if (dtype === "complex64") {
    const real3 = zeros(shape, "float32");
    const imag3 = zeros(shape, "float32");
    return complex(real3, imag3);
  }
  const values = makeZerosTypedArray(sizeFromShape(shape), dtype);
  return ENGINE.makeTensor(values, shape, dtype);
}

// src/tfjs-core/src/ops/ones.ts
function ones2(shape, dtype = "float32") {
  assertNonNegativeIntegerDimensions(shape);
  if (dtype === "complex64") {
    const real3 = ones2(shape, "float32");
    const imag3 = zeros(shape, "float32");
    return complex(real3, imag3);
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
  assertNonNegativeIntegerDimensions(shape);
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
  /** Returns next sample from a Gaussian distribution. */
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
  /** Handles proper rounding for non-floating-point numbers. */
  convertValue(value) {
    if (this.dtype == null || this.dtype === "float32") {
      return value;
    }
    return Math.round(value);
  }
  /** Returns true if less than 2-standard-deviations from the mean. */
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
  /** Returns next sample from a gamma distribution. */
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
  /** Handles proper rounding for non-floating-point numbers. */
  convertValue(value) {
    if (this.dtype === "float32") {
      return value;
    }
    return Math.round(value);
  }
};
var UniformRandom = class {
  constructor(min3 = 0, max3 = 1, dtype, seed) {
    /** Handles proper rounding for non floating point numbers. */
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
  assertNonNegativeIntegerDimensions(shape);
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
  assertNonNegativeIntegerDimensions(shape);
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
  assertNonNegativeIntegerDimensions(shape);
  const res = buffer(shape, dtype);
  const random = new UniformRandom(minval, maxval, null, seed);
  for (let i = 0; i < res.values.length; i++) {
    res.values[i] = random.nextValue();
  }
  return res.toTensor();
}
var randomUniform = op({ randomUniform_ });

// src/tfjs-core/src/ops/random_uniform_int.ts
function randomUniformInt_(shape, minval, maxval, seed) {
  return randomUniform(shape, minval, maxval, "int32", seed);
}
var randomUniformInt = op({ randomUniformInt_ });

// src/tfjs-core/src/ops/range.ts
function range(start, stop, step3 = 1, dtype = "float32") {
  if (step3 === 0) {
    throw new Error("Cannot have a step of zero");
  }
  const attrs = { start, stop, step: step3, dtype };
  return ENGINE.runKernel(
    Range,
    {},
    attrs
  );
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

// src/tfjs-core/src/ops/tensor_scatter_update.ts
function tensorScatterUpdate_(tensor2, indices, updates) {
  const $tensor = convertToTensor(tensor2, "tensor", "tensorScatterupdate");
  const $indices = convertToTensor(indices, "indices", "tensorScatterupdate", "int32");
  const $updates = convertToTensor(updates, "updates", "tensorScatterupdate");
  validateInput($updates, $indices, $tensor.shape);
  if ($tensor.dtype !== $updates.dtype) {
    throw new Error(
      `tensor and updates must have the same dtype, instead they are ${$tensor.dtype} and ${$updates.dtype}.`
    );
  }
  const inputs = {
    tensor: $tensor,
    indices: $indices,
    updates: $updates
  };
  const attrs = {};
  return ENGINE.runKernel(
    TensorScatterUpdate,
    inputs,
    attrs
  );
}
var tensorScatterUpdate = op({ tensorScatterUpdate_ });

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
  assertNonNegativeIntegerDimensions(shape);
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
  return add2($v, update);
}
var movingAverage = op({ movingAverage_ });

// src/tfjs-core/src/ops/scatter_nd.ts
function scatterND_(indices, updates, shape) {
  assertNonNegativeIntegerDimensions(shape);
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
  assertNonNegativeIntegerDimensions(outputShape);
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
    const dyActivation = getFusedDyActivation(dy, y, activation);
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
    activation,
    leakyreluAlpha
  };
  if (bias == null) {
    const customOp = customGrad((x4D2, filter2, save) => {
      let res = (
        // tslint:disable-next-line: no-unnecessary-type-assertion
        ENGINE.runKernel(
          FusedConv2D,
          inputs,
          attrs
        )
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
  const res = (
    // tslint:disable-next-line: no-unnecessary-type-assertion
    ENGINE.runKernel(
      DepthwiseConv2dNativeBackpropInput,
      inputs,
      attrs
    )
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
  activation = "linear",
  preluActivationWeights,
  leakyreluAlpha
}) {
  if (shouldFuse(ENGINE.state.gradientDepth, activation) === false) {
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
    /* depthwise */
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
      result = add2(result, bias);
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
      const res = (
        // tslint:disable-next-line: no-unnecessary-type-assertion
        ENGINE.runKernel(
          _FusedMatMul,
          inputs,
          attrs
        )
      );
      save([a3D2, b3D2, res]);
      return { value: reshape(res, outShape), gradFunc: grad2 };
    });
    return customOp(a3D, b3D);
  } else {
    const customOpWithBias = customGrad(
      (a3D2, b3D2, $bias2, save) => {
        const res = (
          // tslint:disable-next-line: no-unnecessary-type-assertion
          ENGINE.runKernel(
            _FusedMatMul,
            inputs,
            attrs
          )
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
    /* softNmsSigma */
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
    /* returnValidOutputs */
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
    /* returnScoresTensor */
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
  const scale2 = softNmsSigma > 0 ? -0.5 / softNmsSigma : 0;
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
      candidate.score = candidate.score * suppressWeight(iouThreshold, scale2, iou);
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
function suppressWeight(iouThreshold, scale2, iou) {
  const weight = Math.exp(scale2 * iou * iou);
  return iou <= iouThreshold ? weight : 0;
}
function ascendingComparator(c1, c2) {
  return c1.score - c2.score || c1.score === c2.score && c2.boxIndex - c1.boxIndex;
}

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
    /* softNmsSigma */
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
    grayscale = add2(add2($r, $g), $b);
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
  const $a = convertToTensor(a, "a", "bandPart");
  assert(
    $a.rank >= 2,
    () => `bandPart(): Rank must be at least 2, got ${$a.rank}.`
  );
  const shape = $a.shape;
  const [M, N] = $a.shape.slice(-2);
  let $numLower;
  let $numUpper;
  if (typeof numLower === "number") {
    assert(
      numLower % 1 === 0,
      () => `bandPart(): numLower must be an integer, got ${numLower}.`
    );
    assert(
      numLower <= M,
      () => `bandPart(): numLower (${numLower}) must not be greater than the number of rows (${M}).`
    );
    $numLower = convertToTensor(numLower < 0 ? M : numLower, "numLower", "bandPart");
  } else {
    assert(
      numLower.dtype === "int32",
      () => `bandPart(): numLower's dtype must be an int32.`
    );
    $numLower = where(less(numLower, 0), M, minimum(numLower, M));
  }
  if (typeof numUpper === "number") {
    assert(
      numUpper % 1 === 0,
      () => `bandPart(): numUpper must be an integer, got ${numUpper}.`
    );
    assert(
      numUpper <= N,
      () => `bandPart(): numUpper (${numUpper}) must not be greater than the number of columns (${N}).`
    );
    $numUpper = convertToTensor(numUpper < 0 ? N : numUpper, "numUpper", "bandPart");
  } else {
    assert(
      numUpper.dtype === "int32",
      () => `bandPart(): numUpper's dtype must be an int32.`
    );
    $numUpper = where(less(numUpper, 0), N, minimum(numUpper, N));
  }
  const i = reshape(range(0, M, 1, "int32"), [-1, 1]);
  const j = range(0, N, 1, "int32");
  const ij = sub(i, j);
  const inBand = logicalAnd(lessEqual(ij, $numLower), greaterEqual(ij, neg($numUpper)));
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

// src/tfjs-core/src/ops/string/static_regex_replace.ts
function staticRegexReplace_(input, pattern, rewrite, replaceGlobal = true) {
  const $input = convertToTensor(
    input,
    "input",
    "staticRegexReplace",
    "string"
  );
  const attrs = { pattern, rewrite, replaceGlobal };
  return ENGINE.runKernel(
    StaticRegexReplace,
    { x: $input },
    attrs
  );
}
var staticRegexReplace = op({ staticRegexReplace_ });

// src/tfjs-core/src/serialization.ts
var GLOBAL_CUSTOM_OBJECT = /* @__PURE__ */ new Map();
var GLOBAL_CUSTOM_NAMES = /* @__PURE__ */ new Map();
var Serializable = class {
  /**
   * Return the class name for this class to use in serialization contexts.
   *
   * Generally speaking this will be the same thing that constructor.name
   * would have returned.  However, the class name needs to be robust
   * against minification for serialization/deserialization to work properly.
   *
   * There's also places such as initializers.VarianceScaling, where
   * implementation details between different languages led to different
   * class hierarchies and a non-leaf node is used for serialization purposes.
   */
  getClassName() {
    return this.constructor.className;
  }
  /**
   * Creates an instance of T from a ConfigDict.
   *
   * This works for most descendants of serializable.  A few need to
   * provide special handling.
   * @param cls A Constructor for the class to instantiate.
   * @param config The Configuration for the object.
   */
  /** @nocollapse */
  static fromConfig(cls, config) {
    return new cls(config);
  }
};
var SerializationMap = class {
  constructor() {
    this.classNameMap = {};
  }
  /**
   * Returns the singleton instance of the map.
   */
  static getMap() {
    if (SerializationMap.instance == null) {
      SerializationMap.instance = new SerializationMap();
    }
    return SerializationMap.instance;
  }
  /**
   * Registers the class as serializable.
   */
  static register(cls) {
    SerializationMap.getMap().classNameMap[cls.className] = [cls, cls.fromConfig];
  }
};
function registerClass(cls, pkg, name) {
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
  if (typeof pkg === "undefined") {
    pkg = "Custom";
  }
  if (typeof name === "undefined") {
    name = cls.className;
  }
  const className = name;
  const registerName = pkg + ">" + className;
  SerializationMap.register(cls);
  GLOBAL_CUSTOM_OBJECT.set(registerName, cls);
  GLOBAL_CUSTOM_NAMES.set(cls, registerName);
  return cls;
}

// src/tfjs-core/src/optimizers/optimizer.ts
var Optimizer = class extends Serializable {
  /**
   * Executes `f()` and minimizes the scalar output of `f()` by computing
   * gradients of y with respect to the list of trainable variables provided by
   * `varList`. If no list is provided, it defaults to all trainable variables.
   *
   * @param f The function to execute and whose output to minimize.
   * @param returnCost Whether to return the scalar cost value produced by
   * executing `f()`.
   * @param varList An optional list of variables to update. If specified, only
   * the trainable variables in varList will be updated by minimize. Defaults to
   * all trainable variables.
   *
   * @doc {heading: 'Training', subheading: 'Optimizers'}
   */
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
  /**
   * The number of iterations that this optimizer instance has been invoked for.
   */
  get iterations() {
    if (this.iterations_ == null) {
      this.iterations_ = 0;
    }
    return this.iterations_;
  }
  incrementIterations() {
    this.iterations_ = this.iterations + 1;
  }
  /**
   * Executes f() and computes the gradient of the scalar output of f() with
   * respect to the list of trainable variables provided by `varList`. If no
   * list is provided, it defaults to all trainable variables.
   *
   * @param f The function to execute and whose output to use for computing
   * gradients with respect to variables.
   * @param varList An optional list of variables to compute gradients with
   * respect to. If specified, only the trainable variables in varList will have
   * gradients computed with respect to. Defaults to all trainable variables.
   *
   * @doc {heading: 'Training', subheading: 'Optimizers'}
   */
  computeGradients(f, varList) {
    return variableGrads(f, varList);
  }
  /**
   * Dispose the variables (if any) owned by this optimizer instance.
   */
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
      // Named for Python compatibility.
      // TODO(cais): Use 'int64' type when available.
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
  /**
   * Extract the first element of the weight values and set it
   * as the iterations counter variable of this instance of optimizer.
   *
   * @param weightValues
   * @returns Weight values with the first element consumed and excluded.
   */
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
    this.accumulatedGrads = [];
    this.accumulatedUpdates = [];
    if (epsilon2 == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  /** @nocollapse */
  static get className() {
    return "Adadelta";
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
  /** @nocollapse */
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["rho"], config["epsilon"]);
  }
};

// src/tfjs-core/src/optimizers/adagrad_optimizer.ts
var AdagradOptimizer = class extends Optimizer {
  constructor(learningRate, initialAccumulatorValue = 0.1) {
    super();
    this.learningRate = learningRate;
    this.initialAccumulatorValue = initialAccumulatorValue;
    this.accumulatedGrads = [];
  }
  /** @nocollapse */
  static get className() {
    return "Adagrad";
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
  /** @nocollapse */
  static fromConfig(cls, config) {
    return new cls(config["learningRate"], config["initialAccumulatorValue"]);
  }
};

// src/tfjs-core/src/optimizers/adam_optimizer.ts
var AdamOptimizer = class extends Optimizer {
  constructor(learningRate, beta1, beta2, epsilon2 = null) {
    super();
    this.learningRate = learningRate;
    this.beta1 = beta1;
    this.beta2 = beta2;
    this.epsilon = epsilon2;
    this.accumulatedFirstMoment = [];
    this.accumulatedSecondMoment = [];
    tidy(() => {
      this.accBeta1 = scalar(beta1).variable();
      this.accBeta2 = scalar(beta2).variable();
    });
    if (epsilon2 == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  /** @nocollapse */
  static get className() {
    return "Adam";
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
  /** @nocollapse */
  static fromConfig(cls, config) {
    return new cls(
      config["learningRate"],
      config["beta1"],
      config["beta2"],
      config["epsilon"]
    );
  }
};

// src/tfjs-core/src/optimizers/adamax_optimizer.ts
var AdamaxOptimizer = class extends Optimizer {
  constructor(learningRate, beta1, beta2, epsilon2 = null, decay = 0) {
    super();
    this.learningRate = learningRate;
    this.beta1 = beta1;
    this.beta2 = beta2;
    this.epsilon = epsilon2;
    this.decay = decay;
    this.accumulatedFirstMoment = [];
    this.accumulatedWeightedInfNorm = [];
    tidy(() => {
      this.iteration = scalar(0).variable();
      this.accBeta1 = scalar(beta1).variable();
    });
    if (epsilon2 == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
  }
  /** @nocollapse */
  static get className() {
    return "Adamax";
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
  /** @nocollapse */
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

// src/tfjs-core/src/optimizers/sgd_optimizer.ts
var SGDOptimizer = class extends Optimizer {
  constructor(learningRate) {
    super();
    this.learningRate = learningRate;
    this.setLearningRate(learningRate);
  }
  /** @nocollapse */
  static get className() {
    return "SGD";
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
  /**
   * Sets the learning rate of the optimizer.
   */
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
  /** @nocollapse */
  static fromConfig(cls, config) {
    return new cls(config["learningRate"]);
  }
};

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
  /** @nocollapse */
  // Name matters for Python compatibility.
  static get className() {
    return "Momentum";
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
  /**
   * Sets the momentum of the optimizer.
   *
   * @param momentum
   */
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
  /** @nocollapse */
  static fromConfig(cls, config) {
    return new cls(
      config["learningRate"],
      config["momentum"],
      config["useNesterov"]
    );
  }
};

// src/tfjs-core/src/optimizers/rmsprop_optimizer.ts
var RMSPropOptimizer = class extends Optimizer {
  constructor(learningRate, decay = 0.9, momentum = 0, epsilon2 = null, centered = false) {
    super();
    this.learningRate = learningRate;
    this.decay = decay;
    this.momentum = momentum;
    this.epsilon = epsilon2;
    this.accumulatedMeanSquares = [];
    this.accumulatedMoments = [];
    this.accumulatedMeanGrads = [];
    this.centered = centered;
    if (epsilon2 == null) {
      this.epsilon = ENGINE.backend.epsilon();
    }
    if (learningRate == null) {
      throw new Error(`learningRate for RMSPropOptimizer must be defined.`);
    }
  }
  /** @nocollapse */
  static get className() {
    return "RMSProp";
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
  /** @nocollapse */
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

// src/tfjs-core/src/optimizers/register_optimizers.ts
var OPTIMIZERS = [
  AdadeltaOptimizer,
  AdagradOptimizer,
  AdamOptimizer,
  AdamaxOptimizer,
  MomentumOptimizer,
  RMSPropOptimizer,
  SGDOptimizer
];
function registerOptimizers() {
  for (const optimizer of OPTIMIZERS) {
    registerClass(optimizer);
  }
}

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
    const weightBuffer = CompositeArrayBuffer.join(modelArtifacts.weightData);
    const weightsURL = window.URL.createObjectURL(new Blob(
      [weightBuffer],
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
      const weightBuffer = CompositeArrayBuffer.join(modelArtifacts.weightData);
      init.body.append(
        "model.weights.bin",
        new Blob([weightBuffer], { type: OCTET_STREAM_MIME_TYPE }),
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
  /**
   * Load model artifacts via HTTP request(s).
   *
   * See the documentation to `tf.io.http` for details on the saved
   * artifacts.
   *
   * @returns The loaded model artifacts (if loading succeeds).
   */
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
    return [weightSpecs, buffers];
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
    vals = // tslint:disable-next-line:no-any
    pixels.getContext("2d").getImageData(0, 0, width, height).data;
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
        /* element to add */
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
  stridesOrDilationsArePositive: () => stridesOrDilationsArePositive,
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
function mergeRealAndImagArrays(real3, imag3) {
  if (real3.length !== imag3.length) {
    throw new Error(
      `Cannot merge real and imag arrays of different lengths. real:${real3.length}, imag: ${imag3.length}.`
    );
  }
  const result = new Float32Array(real3.length * 2);
  for (let i = 0; i < result.length; i += 2) {
    result[i] = real3[i / 2];
    result[i + 1] = imag3[i / 2];
  }
  return result;
}
function splitRealAndImagArrays(complex3) {
  const real3 = new Float32Array(complex3.length / 2);
  const imag3 = new Float32Array(complex3.length / 2);
  for (let i = 0; i < complex3.length; i += 2) {
    real3[i / 2] = complex3[i];
    imag3[i / 2] = complex3[i + 1];
  }
  return { real: real3, imag: imag3 };
}
function complexWithEvenIndex(complex3) {
  const len = Math.ceil(complex3.length / 4);
  const real3 = new Float32Array(len);
  const imag3 = new Float32Array(len);
  for (let i = 0; i < complex3.length; i += 4) {
    real3[Math.floor(i / 4)] = complex3[i];
    imag3[Math.floor(i / 4)] = complex3[i + 1];
  }
  return { real: real3, imag: imag3 };
}
function complexWithOddIndex(complex3) {
  const len = Math.floor(complex3.length / 4);
  const real3 = new Float32Array(len);
  const imag3 = new Float32Array(len);
  for (let i = 2; i < complex3.length; i += 4) {
    real3[Math.floor(i / 4)] = complex3[i];
    imag3[Math.floor(i / 4)] = complex3[i + 1];
  }
  return { real: real3, imag: imag3 };
}
function getComplexWithIndex(complex3, index) {
  const real3 = complex3[index * 2];
  const imag3 = complex3[index * 2 + 1];
  return { real: real3, imag: imag3 };
}
function assignToTypedArray(data, real3, imag3, index) {
  data[index * 2] = real3;
  data[index * 2 + 1] = imag3;
}
function exponents(n, inverse) {
  const real3 = new Float32Array(n / 2);
  const imag3 = new Float32Array(n / 2);
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    const x = (inverse ? 2 : -2) * Math.PI * (i / n);
    real3[i] = Math.cos(x);
    imag3[i] = Math.sin(x);
  }
  return { real: real3, imag: imag3 };
}
function exponent(k, n, inverse) {
  const x = (inverse ? 2 : -2) * Math.PI * (k / n);
  const real3 = Math.cos(x);
  const imag3 = Math.sin(x);
  return { real: real3, imag: imag3 };
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
  } catch (err) {
    throw new Error(
      `Failed to decode encoded string bytes into utf-8, error: ${err}`
    );
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

// src/tfjs-core/src/index.ts
registerOptimizers();

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

// src/tfjs-backend-cpu/src/backend_cpu.ts
var whereImpl2 = kernel_impls_exports.whereImpl;
var _MathBackendCPU = class extends KernelBackend {
  constructor() {
    super();
    this.blockSize = 48;
    this.firstUse = true;
    this.data = new DataStorage(this, engine());
  }
  nextDataId() {
    return _MathBackendCPU.nextDataId++;
  }
  write(values, shape, dtype) {
    if (this.firstUse) {
      this.firstUse = false;
      if (env().get("IS_NODE")) {
        backend_util_exports.warn(
          "\n============================\nHi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. \n============================"
        );
      }
    }
    const dataId = { id: this.nextDataId() };
    this.data.set(dataId, { values, dtype, refCount: 1 });
    return dataId;
  }
  /**
   * Create a data bucket in cpu backend.
   * @param shape Shape of the `TensorInfo`.
   * @param dtype DType of the `TensorInfo`.
   * @param values The value of the `TensorInfo` stored as a flattened array.
   */
  makeTensorInfo(shape, dtype, values) {
    let outId;
    if (dtype === "string" && values != null && values.length > 0 && util_exports.isString(values[0])) {
      const encodedValues = values.map((d) => util_exports.encodeString(d));
      outId = this.write(encodedValues, shape, dtype);
    } else {
      outId = this.write(values, shape, dtype);
    }
    return { dataId: outId, shape, dtype };
  }
  /** Return refCount of a `TensorData`. */
  refCount(dataId) {
    if (this.data.has(dataId)) {
      const tensorData = this.data.get(dataId);
      return tensorData.refCount;
    }
    return 0;
  }
  /** Increase refCount of a `TensorData`. */
  incRef(dataId) {
    const tensorData = this.data.get(dataId);
    tensorData.refCount++;
  }
  /** Decrease refCount of a `TensorData`. */
  decRef(dataId) {
    if (this.data.has(dataId)) {
      const tensorData = this.data.get(dataId);
      tensorData.refCount--;
    }
  }
  move(dataId, values, shape, dtype, refCount) {
    this.data.set(dataId, { values, dtype, refCount });
  }
  numDataIds() {
    return this.data.numDataIds();
  }
  async read(dataId) {
    return this.readSync(dataId);
  }
  readSync(dataId) {
    const { dtype, complexTensorInfos } = this.data.get(dataId);
    if (dtype === "complex64") {
      const realValues = this.readSync(complexTensorInfos.real.dataId);
      const imagValues = this.readSync(complexTensorInfos.imag.dataId);
      return backend_util_exports.mergeRealAndImagArrays(realValues, imagValues);
    }
    return util_exports.convertBackendValuesAndArrayBuffer(
      this.data.get(dataId).values,
      dtype
    );
  }
  bufferSync(t) {
    const data = this.readSync(t.dataId);
    if (t.dtype === "string") {
      try {
        const strings = data.map((d) => util_exports.decodeString(d));
        return buffer(t.shape, t.dtype, strings);
      } catch {
        throw new Error("Failed to decode encoded string bytes into utf-8");
      }
    }
    return buffer(t.shape, t.dtype, data);
  }
  makeOutput(values, shape, dtype) {
    return engine().makeTensorFromTensorInfo(
      this.makeTensorInfo(shape, dtype, values),
      this
    );
  }
  /**
   * Dispose the memory if the dataId has 0 refCount. Return true if the memory
   * is released or memory is not managed in this backend, false if memory is
   * not cleared.
   * @param dataId
   * @oaram force Optional, remove the data regardless of refCount
   */
  disposeData(dataId, force = false) {
    if (this.data.has(dataId)) {
      this.data.get(dataId).refCount--;
      if (!force && this.data.get(dataId).refCount > 0) {
        return false;
      }
      const { complexTensorInfos } = this.data.get(dataId);
      if (complexTensorInfos != null) {
        this.disposeData(complexTensorInfos.real.dataId, true);
        this.disposeData(complexTensorInfos.imag.dataId, true);
      }
      this.data.delete(dataId);
    }
    return true;
  }
  disposeIntermediateTensorInfo(tensorInfo) {
    this.disposeData(tensorInfo.dataId);
  }
  async time(f) {
    const start = util_exports.now();
    f();
    const kernelMs = util_exports.now() - start;
    return { kernelMs };
  }
  memory() {
    return {
      // Unreliable due to automatic gc. The numbers above are cumulative.
      unreliable: true,
      reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]
    };
  }
  where(condition) {
    assertNotComplex([condition], "where");
    const condVals = this.readSync(condition.dataId);
    return whereImpl2(condition.shape, condVals);
  }
  dispose() {
  }
  floatPrecision() {
    return 32;
  }
  /** Returns the smallest representable number.  */
  epsilon() {
    return super.epsilon();
  }
};
var MathBackendCPU = _MathBackendCPU;
MathBackendCPU.nextDataId = 0;

// src/tfjs-backend-cpu/src/shared.ts
var shared_exports = {};
__export(shared_exports, {
  addImpl: () => addImpl,
  bincountImpl: () => bincountImpl,
  bincountReduceImpl: () => bincountReduceImpl,
  bitwiseAndImpl: () => bitwiseAndImpl,
  castImpl: () => castImpl,
  ceilImpl: () => ceilImpl,
  concatImpl: () => concatImpl,
  equalImpl: () => equalImpl,
  expImpl: () => expImpl,
  expm1Impl: () => expm1Impl,
  floorDivImpl: () => floorDivImpl,
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
  raggedGatherImpl: () => raggedGatherImpl,
  raggedRangeImpl: () => raggedRangeImpl,
  raggedTensorToTensorImpl: () => raggedTensorToTensorImpl,
  rangeImpl: () => rangeImpl,
  rsqrtImpl: () => rsqrtImpl,
  scatterImpl: () => scatterImpl,
  sigmoidImpl: () => sigmoidImpl,
  simpleAbsImpl: () => simpleAbsImpl,
  sliceImpl: () => sliceImpl,
  sparseFillEmptyRowsImpl: () => sparseFillEmptyRowsImpl,
  sparseReshapeImpl: () => sparseReshapeImpl,
  sparseSegmentReductionImpl: () => sparseSegmentReductionImpl,
  sqrtImpl: () => sqrtImpl,
  squaredDifferenceImpl: () => squaredDifferenceImpl,
  staticRegexReplaceImpl: () => staticRegexReplaceImpl,
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

// src/tfjs-backend-cpu/src/kernels/Abs.ts
function simpleAbsImpl(vals) {
  const resultValues = new Float32Array(vals.length);
  for (let i = 0; i < vals.length; ++i) {
    resultValues[i] = Math.abs(vals[i]);
  }
  return resultValues;
}
var abs2 = (args) => {
  const { x } = args.inputs;
  const cpuBackend = args.backend;
  assertNotComplex(x, "abs");
  let resultValues = new Float32Array(util_exports.sizeFromShape(x.shape));
  const values = cpuBackend.data.get(x.dataId).values;
  resultValues = simpleAbsImpl(values);
  return cpuBackend.makeOutput(resultValues, x.shape, x.dtype);
};
var absConfig = {
  kernelName: Abs,
  backendName: "cpu",
  kernelFunc: abs2
};

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
  const { real: real3, imag: imag3 } = inputs;
  const realVals = backend.data.get(real3.dataId).values;
  const imagVals = backend.data.get(imag3.dataId).values;
  const complexInfo = backend.makeTensorInfo(real3.shape, "complex64");
  const complex3 = backend.data.get(complexInfo.dataId);
  complex3.complexTensorInfos = {
    real: backend.makeTensorInfo(real3.shape, "float32", realVals),
    imag: backend.makeTensorInfo(imag3.shape, "float32", imagVals)
  };
  return complexInfo;
}
var complexConfig = {
  kernelName: Complex,
  backendName: "cpu",
  kernelFunc: complex2
};

// src/tfjs-backend-cpu/src/utils/zeros_impl.ts
function zeros2(backend, shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real3 = zeros2(backend, shape, "float32");
    const imag3 = zeros2(backend, shape, "float32");
    return complex2({ inputs: { real: real3, imag: imag3 }, backend });
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
var identityConfig = {
  kernelName: Identity,
  backendName: "cpu",
  kernelFunc: identity
};

// src/tfjs-backend-cpu/src/kernels/Real.ts
function real2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const real3 = backend.data.get(input.dataId).complexTensorInfos.real;
  const realVal = backend.data.get(real3.dataId).values;
  return backend.makeTensorInfo(real3.shape, real3.dtype, realVal);
}
var realConfig = {
  kernelName: Real,
  backendName: "cpu",
  kernelFunc: real2
};

// src/tfjs-backend-cpu/src/kernels/Cast.ts
function castImpl(values, shape, inputType, dtype) {
  if (dtype === "int32") {
    const resultValues = Int32Array.from(values);
    return [shape, "int32", resultValues];
  }
  if (dtype === "bool") {
    const zero = util_exports.toTypedArray([0], inputType);
    const [resultData, resultShape] = createSimpleBinaryKernelImpl(
      (a, b) => a !== b ? 1 : 0
    )(shape, [], values, zero, "bool");
    return [resultShape, "bool", resultData];
  }
  throw new Error(`Error in Cast: failed to cast ${inputType} to ${dtype}`);
}
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
  const values = backend.data.get(x.dataId).values;
  const [resultShape, resultType, resultData] = castImpl(values, x.shape, x.dtype, dtype);
  return backend.makeTensorInfo(resultShape, resultType, resultData);
}
var castConfig = {
  kernelName: Cast,
  backendName: "cpu",
  kernelFunc: cast2
};

// src/tfjs-backend-cpu/src/utils/binary_utils.ts
function binaryKernelFunc(name, simpleImpl, complexImpl, dtype) {
  if (complexImpl == null) {
    return ({ inputs, backend }) => {
      const { a, b } = inputs;
      const cpuBackend = backend;
      assertNotComplex([a, b], name);
      const aVals = cpuBackend.data.get(a.dataId).values;
      const bVals = cpuBackend.data.get(b.dataId).values;
      const decodedAVals = a.dtype === "string" ? (
        // tslint:disable-next-line: no-any
        backend_util_exports.fromUint8ToStringArray(aVals)
      ) : aVals;
      const decodedBVals = a.dtype === "string" ? (
        // tslint:disable-next-line: no-any
        backend_util_exports.fromUint8ToStringArray(bVals)
      ) : bVals;
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
var add3 = binaryKernelFunc(Add, addImpl, addComplexImpl);
var addConfig = {
  kernelName: Add,
  backendName: "cpu",
  kernelFunc: add3
};

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

// src/tfjs-backend-cpu/src/kernels/BitwiseAnd.ts
var bitwiseAndImpl = createSimpleBinaryKernelImpl((a, b) => a & b);
var bitwiseAnd2 = binaryKernelFunc(BitwiseAnd, bitwiseAndImpl);
var bitwiseAndConfig = {
  kernelName: BitwiseAnd,
  backendName: "cpu",
  kernelFunc: bitwiseAnd2
};

// src/tfjs-backend-cpu/src/utils/unary_impl.ts
function createSimpleUnaryImpl(op2) {
  return (values, dtype, attrs) => {
    const newValues = util_exports.getArrayFromDType(dtype, values.length);
    for (let i = 0; i < values.length; ++i) {
      newValues[i] = op2(values[i], attrs);
    }
    return newValues;
  };
}

// src/tfjs-backend-cpu/src/utils/unary_utils.ts
function unaryKernelFunc(name, op2, dtype) {
  const impl = createSimpleUnaryImpl(op2);
  return unaryKernelFuncFromImpl(name, impl, dtype);
}
function unaryKernelFuncFromImpl(name, unaryImpl, dtype) {
  return ({ inputs, attrs, backend }) => {
    const { x } = inputs;
    assertNotComplex(x, name);
    const cpuBackend = backend;
    const values = cpuBackend.data.get(x.dataId).values;
    let decoded;
    if (x.dtype === "string") {
      if (!Array.isArray(values)) {
        throw new Error("String tensor's value was not an instance of Array");
      }
      decoded = backend_util_exports.fromUint8ToStringArray(values);
    } else {
      decoded = values;
    }
    const $dtype = dtype || x.dtype;
    const newValues = unaryImpl(decoded, $dtype, attrs);
    return cpuBackend.makeTensorInfo(x.shape, $dtype, newValues);
  };
}

// src/tfjs-backend-cpu/src/kernels/Ceil.ts
var ceilImpl = createSimpleUnaryImpl((xi) => Math.ceil(xi));
var ceil2 = unaryKernelFuncFromImpl(Ceil, ceilImpl);
var ceilConfig = {
  kernelName: Ceil,
  backendName: "cpu",
  kernelFunc: ceil2
};

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
var equalConfig = {
  kernelName: Equal,
  backendName: "cpu",
  kernelFunc: equal2
};

// src/tfjs-backend-cpu/src/kernels/Exp.ts
var expImpl = createSimpleUnaryImpl((xi) => Math.exp(xi));
var exp2 = unaryKernelFuncFromImpl(Exp, expImpl, "float32");
var expConfig = {
  kernelName: Exp,
  backendName: "cpu",
  kernelFunc: exp2
};

// src/tfjs-backend-cpu/src/kernels/Expm1.ts
var expm1Impl = createSimpleUnaryImpl((xi) => Math.expm1(xi));
var expm12 = unaryKernelFuncFromImpl(Expm1, expm1Impl);
var expm1Config = {
  kernelName: Expm1,
  backendName: "cpu",
  kernelFunc: expm12
};

// src/tfjs-backend-cpu/src/kernels/Floor.ts
var floorImpl = createSimpleUnaryImpl((xi) => Math.floor(xi));
var floor2 = unaryKernelFuncFromImpl(Floor, floorImpl);
var floorConfig = {
  kernelName: Floor,
  backendName: "cpu",
  kernelFunc: floor2
};

// src/tfjs-backend-cpu/src/kernels/FloorDiv.ts
var floorDivImpl = createSimpleBinaryKernelImpl((a, b) => Math.floor(a / b));
var floorDiv2 = binaryKernelFunc(FloorDiv, floorDivImpl, null, "int32");
var floorDivConfig = {
  kernelName: FloorDiv,
  backendName: "cpu",
  kernelFunc: floorDiv2
};

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
      throw new Error(
        `Invalid indices: ${index} does not index into ${paramsShape}`
      );
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
var greater2 = binaryKernelFunc(Greater, greaterImpl, null, "bool");
var greaterConfig = {
  kernelName: Greater,
  backendName: "cpu",
  kernelFunc: greater2
};

// src/tfjs-backend-cpu/src/kernels/GreaterEqual.ts
var greaterEqualImpl = createSimpleBinaryKernelImpl((a, b) => a >= b ? 1 : 0);
var greaterEqual2 = binaryKernelFunc(
  GreaterEqual,
  greaterEqualImpl,
  null,
  "bool"
);
var greaterEqualConfig = {
  kernelName: GreaterEqual,
  backendName: "cpu",
  kernelFunc: greaterEqual2
};

// src/tfjs-backend-cpu/src/kernels/Less.ts
var lessImpl = createSimpleBinaryKernelImpl((a, b) => a < b ? 1 : 0);
var less2 = binaryKernelFunc(Less, lessImpl, null, "bool");
var lessConfig = {
  kernelName: Less,
  backendName: "cpu",
  kernelFunc: less2
};

// src/tfjs-backend-cpu/src/kernels/LessEqual.ts
var lessEqualImpl = createSimpleBinaryKernelImpl((a, b) => a <= b ? 1 : 0);
var lessEqual2 = binaryKernelFunc(LessEqual, lessEqualImpl, null, "bool");
var lessEqualConfig = {
  kernelName: LessEqual,
  backendName: "cpu",
  kernelFunc: lessEqual2
};

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
var log3 = unaryKernelFuncFromImpl(Log, logImpl);
var logConfig = {
  kernelName: Log,
  backendName: "cpu",
  kernelFunc: log3
};

// src/tfjs-backend-cpu/src/kernels/Max_impl.ts
function maxImpl(aVals, reduceSize, outShape, dtype) {
  const vals = util_exports.getTypedArrayFromDType(
    dtype,
    util_exports.sizeFromShape(outShape)
  );
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
var maximumImpl = createSimpleBinaryKernelImpl(
  (aValue, bValue) => Math.max(aValue, bValue)
);
var maximum2 = binaryKernelFunc(Maximum, maximumImpl);
var maximumConfig = {
  kernelName: Maximum,
  backendName: "cpu",
  kernelFunc: maximum2
};

// src/tfjs-backend-cpu/src/kernels/Minimum.ts
var minimumImpl = createSimpleBinaryKernelImpl(
  (aValue, bValue) => Math.min(aValue, bValue)
);
var minimum2 = binaryKernelFunc(Minimum, minimumImpl);
var minimumConfig = {
  kernelName: Minimum,
  backendName: "cpu",
  kernelFunc: minimum2
};

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
var multiply = binaryKernelFunc(Multiply, multiplyImpl, multiplyComplexImpl);
var multiplyConfig = {
  kernelName: Multiply,
  backendName: "cpu",
  kernelFunc: multiply
};

// src/tfjs-backend-cpu/src/kernels/Neg.ts
function negImpl(xVals, xShape, xDtype) {
  const minusOne = util_exports.createScalarValue(-1, xDtype);
  return multiplyImpl([], xShape, minusOne, xVals, xDtype);
}
function neg2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  assertNotComplex(x, "neg");
  const xVals = backend.data.get(x.dataId).values;
  const [res, newShape] = negImpl(xVals, x.shape, x.dtype);
  return backend.makeTensorInfo(newShape, x.dtype, res);
}
var negConfig = {
  kernelName: Neg,
  backendName: "cpu",
  kernelFunc: neg2
};

// src/tfjs-backend-cpu/src/kernels/NotEqual.ts
var notEqualImpl = createSimpleBinaryKernelImpl((a, b) => a !== b ? 1 : 0);
var notEqual2 = binaryKernelFunc(NotEqual, notEqualImpl, null, "bool");
var notEqualConfig = {
  kernelName: NotEqual,
  backendName: "cpu",
  kernelFunc: notEqual2
};

// src/tfjs-backend-cpu/src/kernels/Transpose_impl.ts
function transposeImpl(xVals, xShape, dtype, perm, newShape) {
  const xRank = xShape.length;
  const xSize = util_exports.sizeFromShape(xShape);
  const xStrides = util_exports.computeStrides(xShape);
  const newStrides = util_exports.computeStrides(newShape);
  const result = util_exports.getTypedArrayFromDType(
    dtype,
    util_exports.sizeFromShape(newShape)
  );
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

// src/tfjs-backend-cpu/src/kernels/Transpose.ts
function transpose2(args) {
  const { inputs, attrs, backend } = args;
  const { x } = inputs;
  const { perm } = attrs;
  assertNotComplex(x, "transpose");
  const xRank = x.shape.length;
  const newShape = new Array(xRank);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = x.shape[perm[i]];
  }
  const values = backend.data.get(x.dataId).values;
  const result = transposeImpl(values, x.shape, x.dtype, perm, newShape);
  const dataId = backend.write(result, newShape, x.dtype);
  return { dataId, shape: newShape, dtype: x.dtype };
}
var transposeConfig = {
  kernelName: Transpose,
  backendName: "cpu",
  kernelFunc: transpose2
};

// src/tfjs-backend-cpu/src/kernels/Prod.ts
function prodImpl(xShape, xDtype, xVals, reductionAxes) {
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(xShape, reductionAxes);
  const outDtype = upcastType(xDtype, "int32");
  const outVals = util_exports.makeZerosTypedArray(
    util_exports.sizeFromShape(outShape),
    outDtype
  );
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
function prod2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  assertNotComplex(x, "prod");
  const xRank = x.shape.length;
  const axes = util_exports.parseAxisParam(axis, x.shape);
  const permutation = backend_util_exports.getAxesPermutation(axes, xRank);
  let reductionAxes = axes;
  let permutedX = x;
  const intermediateTensorInfos = [];
  if (permutation != null) {
    permutedX = transpose2({ inputs: { x }, backend, attrs: { perm: permutation } });
    intermediateTensorInfos.push(permutedX);
    reductionAxes = backend_util_exports.getInnerMostAxes(reductionAxes.length, xRank);
  }
  const xVals = backend.data.get(permutedX.dataId).values;
  const { outVals, outShape, outDtype } = prodImpl(permutedX.shape, permutedX.dtype, xVals, reductionAxes);
  let resultShape = outShape;
  if (keepDims) {
    resultShape = backend_util_exports.expandShapeToKeepDim(outShape, axes);
  }
  intermediateTensorInfos.forEach(
    (t) => backend.disposeIntermediateTensorInfo(t)
  );
  return backend.makeTensorInfo(resultShape, outDtype, outVals);
}
var prodConfig = {
  kernelName: Prod,
  backendName: "cpu",
  kernelFunc: prod2
};

// src/tfjs-backend-cpu/src/kernels/RaggedGather_impl.ts
function validateIndices(indices, indicesShape, numParams) {
  indices.forEach((index, i) => {
    if (index < 0 || index >= numParams) {
      const locString = util_exports.indexToLoc(
        i,
        indicesShape.length,
        util_exports.computeStrides(indicesShape)
      ).join(",");
      throw new Error(
        `indices[${locString}] = ${index} is not in [0, ${numParams})`
      );
    }
  });
}
function validateSplits(paramsNestedSplits, numParamsDenseValues) {
  for (let dim = 0; dim < paramsNestedSplits.length; ++dim) {
    const splits = paramsNestedSplits[dim];
    const lastSplit = dim === paramsNestedSplits.length - 1 ? numParamsDenseValues : paramsNestedSplits[dim + 1].length;
    if (splits.length === 0) {
      throw new Error("Ragged splits may not be empty");
    }
    if (splits[0] < 0) {
      throw new Error("Ragged splits must be non-negative");
    }
    if (splits[splits.length - 1] > lastSplit) {
      throw new Error("Ragged splits must not point past values");
    }
    for (let i = 1; i < splits.length; ++i) {
      if (splits[i - 1] > splits[i]) {
        throw new Error("Ragged splits must be sorted in ascending order");
      }
    }
  }
}
function makeSplits(indices, indicesShape, paramsNestedSplits, numParamsDenseValues) {
  const valueSlices = [];
  let numValues = 0;
  const numSplits = indicesShape.length - 1 + paramsNestedSplits.length;
  const outSplits = new Array(numSplits).fill(null).map(() => [0]);
  validateSplits(paramsNestedSplits, numParamsDenseValues);
  let nrows = 1;
  for (let dim = 0; dim < indicesShape.length - 1; ++dim) {
    nrows *= indicesShape[dim];
    const rowLength = indicesShape[dim + 1];
    for (let i = 1; i < nrows + 1; ++i) {
      outSplits[dim].push(i * rowLength);
    }
  }
  for (let i = 0; i < indices.length; ++i) {
    let start = indices[i];
    let limit = indices[i] + 1;
    for (let dim = 0; dim < paramsNestedSplits.length; ++dim) {
      const splits = paramsNestedSplits[dim];
      const outDim = dim + indicesShape.length - 1;
      if (outDim >= 0) {
        const outSplitsOutDim = outSplits[outDim];
        const delta = outSplitsOutDim[outSplitsOutDim.length - 1] - splits[start];
        for (let j = start; j < limit; ++j) {
          outSplits[outDim].push(splits[j + 1] + delta);
        }
      }
      start = splits[start];
      limit = splits[limit];
    }
    if (limit !== start) {
      valueSlices.push([start, limit]);
      numValues += limit - start;
    }
  }
  return { outSplits, valueSlices, numValues };
}
function getSplits(outSplits) {
  const splitsOut = [];
  for (let i = 0; i < outSplits.length; ++i) {
    const numSplits = outSplits[i].length;
    const splits = util_exports.getArrayFromDType("int32", numSplits);
    splitsOut.push(splits);
    outSplits[i].forEach((value, j) => splits[j] = value);
  }
  return splitsOut;
}
function computeFlatOuterDims(orig, numOutDims) {
  const outDims = orig.slice(0, numOutDims);
  while (outDims.length < numOutDims) {
    outDims.push(1);
  }
  for (let inDim = numOutDims; inDim < orig.length; inDim++) {
    outDims[numOutDims - 1] *= orig[inDim];
  }
  return outDims;
}
function writeValueSlices(paramsDenseValues, paramsDenseValuesShape, valueSlices, valueSize, values, valuesShape) {
  const denseM = computeFlatOuterDims(paramsDenseValuesShape, 2)[1];
  const valuesM = computeFlatOuterDims(valuesShape, 2)[1];
  let outPos = 0;
  for (const slice3 of valueSlices) {
    for (let i = slice3[0]; i < slice3[1]; ++i) {
      for (let j = 0; j < valueSize; ++j) {
        values[outPos * valuesM + j] = paramsDenseValues[i * denseM + j];
      }
      ++outPos;
    }
  }
}
function getValues(paramsDenseValues, paramsDenseValuesShape, paramsDenseValuesDType, valueSlices, numValues) {
  const valuesShape = paramsDenseValuesShape.slice();
  valuesShape[0] = numValues;
  const valuesOut = util_exports.getArrayFromDType(
    paramsDenseValuesDType,
    util_exports.sizeFromShape(valuesShape)
  );
  const numElements = paramsDenseValues.length;
  const valueSize = numElements === 0 ? 0 : numElements / paramsDenseValuesShape[0];
  writeValueSlices(
    paramsDenseValues,
    paramsDenseValuesShape,
    valueSlices,
    valueSize,
    valuesOut,
    valuesShape
  );
  return [valuesOut, valuesShape];
}
function raggedGatherImpl(paramsNestedSplits, paramsNestedSplitsShapes, paramsDenseValues, paramsDenseValuesShape, paramsDenseValuesDType, indices, indicesShape, outputRaggedRank) {
  if (paramsNestedSplits.length === 0) {
    throw new Error("paramsNestedSplits must be non empty");
  }
  if (paramsNestedSplitsShapes[0].length === 0) {
    throw new Error("Split tensors must not be scalars");
  }
  const numParams = paramsNestedSplitsShapes[0][0] - 1;
  validateIndices(indices, indicesShape, numParams);
  if (paramsDenseValuesShape.length === 0) {
    throw new Error("params.rank must be nonzero");
  }
  const numParamsDenseValues = paramsDenseValuesShape[0];
  const { outSplits, valueSlices, numValues } = makeSplits(
    indices,
    indicesShape,
    paramsNestedSplits,
    numParamsDenseValues
  );
  const outputNestedSplits = getSplits(outSplits);
  const outputDenseValues = getValues(
    paramsDenseValues,
    paramsDenseValuesShape,
    paramsDenseValuesDType,
    valueSlices,
    numValues
  );
  return [outputNestedSplits, outputDenseValues[0], outputDenseValues[1]];
}

// src/tfjs-backend-cpu/src/kernels/RaggedRange_impl.ts
var INT32_MAX2 = 2147483647;
function raggedRangeImpl(starts, startsShape, startsDType, limits, limitsShape, deltas, deltasShape) {
  if (startsShape.length > 1) {
    throw new Error("starts must be a scalar or vector");
  }
  if (limitsShape.length > 1) {
    throw new Error("limits must be a scalar or vector");
  }
  if (deltasShape.length > 1) {
    throw new Error("deltas must be a scalar or vector");
  }
  const broadcastStarts = startsShape.length === 0;
  const broadcastLimits = limitsShape.length === 0;
  const broadcastDeltas = deltasShape.length === 0;
  const inSizes = [];
  if (!broadcastStarts) {
    inSizes.push(startsShape[0]);
  }
  if (!broadcastLimits) {
    inSizes.push(limitsShape[0]);
  }
  if (!broadcastDeltas) {
    inSizes.push(deltasShape[0]);
  }
  for (let i = 1; i < inSizes.length; ++i) {
    if (inSizes[i] !== inSizes[i - 1]) {
      throw new Error("starts, limits, and deltas must have the same shape");
    }
  }
  const nRows = inSizes.length === 0 ? 1 : inSizes[0];
  const rtNestedSplits = util_exports.getArrayFromDType("int32", nRows + 1);
  rtNestedSplits[0] = 0;
  for (let row = 0; row < nRows; ++row) {
    const start = broadcastStarts ? starts[0] : starts[row];
    const limit = broadcastLimits ? limits[0] : limits[row];
    const delta = broadcastDeltas ? deltas[0] : deltas[row];
    if (delta === 0) {
      throw new Error("Requires delta != 0");
    }
    let size;
    if (delta > 0 && limit < start || delta < 0 && limit > start) {
      size = 0;
    } else {
      size = Math.ceil(Math.abs((limit - start) / delta));
      if (size > INT32_MAX2) {
        throw new Error(`Requires ((limit - start) / delta) <= ${INT32_MAX2}`);
      }
    }
    rtNestedSplits[row + 1] = rtNestedSplits[row] + size;
  }
  const nVals = rtNestedSplits[nRows];
  const rtDenseValues = util_exports.getArrayFromDType(startsDType, nVals);
  let valueIndex = 0;
  for (let row = 0; row < nRows; ++row) {
    const rowSize = rtNestedSplits[row + 1] - rtNestedSplits[row];
    let value = broadcastStarts ? starts[0] : starts[row];
    const delta = broadcastDeltas ? deltas[0] : deltas[row];
    for (let i = 0; i < rowSize; ++i) {
      rtDenseValues[valueIndex++] = value;
      value += delta;
    }
  }
  return [rtNestedSplits, rtDenseValues];
}

// src/tfjs-backend-cpu/src/kernels/RaggedTensorToTensor_impl.ts
var RowPartitionType2 = backend_util_exports.RowPartitionType;
var RaggedTensorToTensorOp = class {
  constructor(shape, shapeShape, values, valuesShape, valuesDType, defaultValue, defaultValueShape, rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypeStrings) {
    this.shape = shape;
    this.shapeShape = shapeShape;
    this.values = values;
    this.valuesShape = valuesShape;
    this.valuesDType = valuesDType;
    this.defaultValue = defaultValue;
    this.defaultValueShape = defaultValueShape;
    this.rowPartitionValues = rowPartitionValues;
    this.rowPartitionValuesShapes = rowPartitionValuesShapes;
    this.rowPartitionTypes = backend_util_exports.getRowPartitionTypesHelper(rowPartitionTypeStrings);
    this.raggedRank = backend_util_exports.getRaggedRank(this.rowPartitionTypes);
  }
  getRowPartitionTypeByDimension(dimension) {
    if (this.rowPartitionTypes[0] === RowPartitionType2.FIRST_DIM_SIZE) {
      return this.rowPartitionTypes[dimension + 1];
    } else {
      return this.rowPartitionTypes[dimension];
    }
  }
  // Returns the relationship between dimension and dimension + 1.
  getRowPartitionTensor(dimension) {
    if (this.rowPartitionTypes[0] === RowPartitionType2.FIRST_DIM_SIZE) {
      return this.rowPartitionValues[dimension + 1];
    } else {
      return this.rowPartitionValues[dimension];
    }
  }
  getMaxWidth(dimension) {
    const rowPartitionTensor = this.getRowPartitionTensor(dimension - 1);
    switch (this.getRowPartitionTypeByDimension(dimension - 1)) {
      case RowPartitionType2.VALUE_ROWIDS:
        return RaggedTensorToTensorOp.getMaxWidthValueRowID(rowPartitionTensor);
      case RowPartitionType2.ROW_SPLITS:
        return RaggedTensorToTensorOp.getMaxWidthRowSplit(rowPartitionTensor);
      default:
        throw new Error(`Cannot handle partition type ${RowPartitionType2[this.getRowPartitionTypeByDimension(
          dimension - 1
        )]}`);
    }
  }
  static getMaxWidthRowSplit(rowSplit) {
    const tensorLength = rowSplit.length;
    if (tensorLength === 0 || tensorLength === 1) {
      return 0;
    }
    let maxWidth = 0;
    for (let i = 0; i < tensorLength - 1; ++i) {
      const currentWidth = rowSplit[i + 1] - rowSplit[i];
      if (currentWidth > maxWidth) {
        maxWidth = currentWidth;
      }
    }
    return maxWidth;
  }
  static getMaxWidthValueRowID(valueRowIds) {
    const indexLength = valueRowIds.length;
    if (indexLength === 0) {
      return 0;
    }
    let firstEqualIndex = 0;
    let firstEqualIndexValue = valueRowIds[0];
    let maxWidth = 0;
    for (let i = 1; i < indexLength; ++i) {
      const value = valueRowIds[i];
      if (value !== firstEqualIndexValue) {
        firstEqualIndexValue = value;
        maxWidth = Math.max(i - firstEqualIndex, maxWidth);
        firstEqualIndex = i;
      }
    }
    return Math.max(indexLength - firstEqualIndex, maxWidth);
  }
  tensorShapeFromTensor(t, tShape, isPartial = true) {
    if (tShape.length === 0) {
      if (t[0] === -1) {
        return [];
      }
      throw new Error(
        `The only valid scalar shape tensor is the fully unknown shape specified as -1.`
      );
    }
    return makeShape(t, isPartial);
  }
  calculateOutputSize(firstDim) {
    const valueShape = this.valuesShape;
    const defaultValueShape = this.defaultValueShape;
    backend_util_exports.validateDefaultValueShape(defaultValueShape, valueShape);
    const shape = this.tensorShapeFromTensor(this.shape, this.shapeShape);
    const outputShape = backend_util_exports.combineRaggedTensorToTensorShapes(
      this.raggedRank,
      shape,
      valueShape
    );
    const result = outputShape;
    if (result[0] < 0) {
      result[0] = firstDim;
    }
    for (let i = 1; i <= this.raggedRank; ++i) {
      if (result[i] < 0) {
        result[i] = this.getMaxWidth(i);
      }
    }
    return result;
  }
  /**
   * The outputIndex represents the index in the output tensor
   * where the first element of a particular dimension would be written.
   * If it is -1, it indicates that the index is out of scope.
   * Example, given firstDimension = 10, firstDimensionOutput = 6,
   * and outputIndexMultiplier = 100:
   * result = [0 100 200 300 400 500 -1 -1 -1 -1]
   * If firstDimensionOutput = 11 instead, then:
   * result = [0 100 200 300 400 500 600 700 800 900]
   */
  calculateFirstParentOutputIndex(firstDimension, outputIndexMultiplier, firstDimensionOutput) {
    const minDimension = Math.min(firstDimension, firstDimensionOutput);
    const result = [];
    let currentOutputIndex = 0;
    for (let i = 0; i < minDimension; ++i, currentOutputIndex += outputIndexMultiplier) {
      result.push(currentOutputIndex);
    }
    for (let i = minDimension; i < firstDimension; ++i) {
      result.push(-1);
    }
    util_exports.assert(
      result.length === firstDimension,
      () => "Final length of result must be equal to firstDimension."
    );
    return result;
  }
  calculateOutputIndexRowSplit(rowSplit, parentOutputIndex, outputIndexMultiplier, outputSize) {
    const rowSplitSize = rowSplit.length;
    const result = [];
    for (let i = 0; i < rowSplitSize - 1; ++i) {
      const rowLength = rowSplit[i + 1] - rowSplit[i];
      let realLength = Math.min(outputSize, rowLength);
      let parentOutputIndexCurrent = parentOutputIndex[i];
      if (parentOutputIndexCurrent === -1) {
        realLength = 0;
      }
      for (let j = 0; j < realLength; ++j) {
        result.push(parentOutputIndexCurrent);
        parentOutputIndexCurrent += outputIndexMultiplier;
      }
      for (let j = 0; j < rowLength - realLength; ++j) {
        result.push(-1);
      }
    }
    if (rowSplitSize > 0 && result.length !== rowSplit[rowSplitSize - 1]) {
      throw new Error("Invalid row split size.");
    }
    return result;
  }
  // Calculate the output index of the first element of a list.
  // The parentOutputIndex is the same computation for the previous list.
  // -1 indicates an element or list that is out of range.
  // The outputIndexMultiplier is the number of output indices one moves
  // forward for each column.
  // E.g., given:
  // valueRowIds:[0 1 2 2 2 3 5 5 6]
  // parentOutputIndex:[1000 1100 2000 2100 -1 3000 4000]
  // outputIndexMultiplier: 10
  // outputSize: 2
  // You get:
  // result = [1000 1100 2000 2010 -1 2100 -1 -1 3000]
  // result[0] = parentOutputIndex[valueRowIds[0]]
  // result[1] = parentOutputIndex[valueRowIds[1]]
  // result[2] = parentOutputIndex[valueRowIds[2]]
  // result[3] = parentOutputIndex[valueRowIds[2] + 10]
  // result[4] = -1 because it is the third element the size is 2.
  // result[5] = parentOutputIndex[valueRowIds[3]]
  // result[6] = -1 because parentOutputIndex[valueRowIds[6]] == -1
  // result[7] = -1 because parentOutputIndex[valueRowIds[6]] == -1
  // result[8] = parentOutputIndex[valueRowIds[7]]
  calculateOutputIndexValueRowID(valueRowIds, parentOutputIndex, outputIndexMultiplier, outputSize) {
    const indexSize = valueRowIds.length;
    const result = [];
    if (indexSize === 0) {
      return [];
    }
    let currentOutputColumn = 0;
    let currentValueRowId = valueRowIds[0];
    if (currentValueRowId >= parentOutputIndex.length) {
      throw new Error(
        `Got currentValueRowId=${currentValueRowId}, which is not less than ${parentOutputIndex.length}`
      );
    }
    let currentOutputIndex = parentOutputIndex[currentValueRowId];
    result.push(currentOutputIndex);
    for (let i = 1; i < indexSize; ++i) {
      const nextValueRowId = valueRowIds[i];
      if (nextValueRowId === currentValueRowId) {
        if (currentOutputIndex >= 0) {
          ++currentOutputColumn;
          if (currentOutputColumn < outputSize) {
            currentOutputIndex += outputIndexMultiplier;
          } else {
            currentOutputIndex = -1;
          }
        }
      } else {
        currentOutputColumn = 0;
        currentValueRowId = nextValueRowId;
        if (nextValueRowId >= parentOutputIndex.length) {
          throw new Error(
            `Got nextValueRowId=${nextValueRowId} which is not less than ${parentOutputIndex.length}`
          );
        }
        currentOutputIndex = parentOutputIndex[nextValueRowId];
      }
      result.push(currentOutputIndex);
    }
    if (result.length !== valueRowIds.length) {
      throw new Error("Invalid row ids.");
    }
    return result;
  }
  calculateOutputIndex(dimension, parentOutputIndex, outputIndexMultiplier, outputSize) {
    const rowPartitionTensor = this.getRowPartitionTensor(dimension);
    const partitionType = this.getRowPartitionTypeByDimension(dimension);
    switch (partitionType) {
      case RowPartitionType2.VALUE_ROWIDS:
        return this.calculateOutputIndexValueRowID(
          rowPartitionTensor,
          parentOutputIndex,
          outputIndexMultiplier,
          outputSize
        );
      case RowPartitionType2.ROW_SPLITS:
        if (rowPartitionTensor.length - 1 > parentOutputIndex.length) {
          throw new Error(`Row partition size is greater than output size: ${rowPartitionTensor.length - 1} > ${parentOutputIndex.length}`);
        }
        return this.calculateOutputIndexRowSplit(
          rowPartitionTensor,
          parentOutputIndex,
          outputIndexMultiplier,
          outputSize
        );
      default:
        throw new Error(
          `Unsupported partition type: ${RowPartitionType2[partitionType]}`
        );
    }
  }
  getFirstDimensionSize() {
    const firstPartitionTensor = this.rowPartitionValues[0];
    if (this.rowPartitionTypes.length === 0) {
      throw new Error("No row_partition_types given.");
    }
    const firstPartitionType = this.rowPartitionTypes[0];
    switch (firstPartitionType) {
      case RowPartitionType2.FIRST_DIM_SIZE:
        return firstPartitionTensor[0];
      case RowPartitionType2.VALUE_ROWIDS:
        throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");
      case RowPartitionType2.ROW_SPLITS:
        return this.rowPartitionValuesShapes[0][0] - 1;
      default:
        throw new Error(
          `Cannot handle type ${RowPartitionType2[firstPartitionType]}`
        );
    }
  }
  compute() {
    const firstPartitionTensor = this.rowPartitionValues[0];
    if (firstPartitionTensor.length <= 0) {
      throw new Error(
        "Invalid first partition input. Tensor requires at least one element."
      );
    }
    const firstDimension = this.getFirstDimensionSize();
    const outputSize = this.calculateOutputSize(firstDimension);
    const multiplier = new Array(this.raggedRank + 1);
    multiplier[multiplier.length - 1] = 1;
    for (let i = multiplier.length - 2; i >= 0; --i) {
      multiplier[i] = multiplier[i + 1] * outputSize[i + 1];
    }
    const outputShape = makeShape(outputSize, false);
    const outputTensor = util_exports.getArrayFromDType(
      this.valuesDType,
      util_exports.sizeFromShape(outputShape)
    );
    const fullSize = multiplier[0] * outputSize[0];
    if (fullSize > 0) {
      let outputIndex = this.calculateFirstParentOutputIndex(
        firstDimension,
        multiplier[0],
        outputSize[0]
      );
      for (let i = 1; i <= this.raggedRank; ++i) {
        const newOutputIndex = this.calculateOutputIndex(
          i - 1,
          outputIndex,
          multiplier[i],
          outputSize[i]
        );
        outputIndex = newOutputIndex;
      }
      this.setOutput(this.raggedRank, outputIndex, outputTensor, outputShape);
    }
    return [outputShape, outputTensor];
  }
  setOutput(raggedRank, outputIndex, outputTensor, outputShape) {
    if (outputTensor.length === 0) {
      return;
    }
    const valuesBase = this.values;
    const outputBase = outputTensor;
    let elementShape = outputShape.slice();
    elementShape = elementShape.slice(raggedRank + 1);
    const valueElementSize = util_exports.sizeFromShape(elementShape);
    const outputIndexSize = outputIndex.length;
    let defaultValue = this.defaultValue;
    if (defaultValue.length !== valueElementSize && defaultValue.length !== 1) {
      const srcShape = this.defaultValueShape;
      tidy(() => {
        const defaultValueTensor = reshape(defaultValue, srcShape);
        const bCastDefault = broadcastTo(defaultValueTensor, elementShape);
        defaultValue = bCastDefault.dataSync();
      });
    }
    let srcStart = 0;
    let dstStart = 0;
    let dstEnd = 0;
    for (let srcI = 0; srcI <= outputIndexSize; ++srcI) {
      let dstI = srcI < outputIndexSize ? outputIndex[srcI] : -1;
      if (dstI === dstEnd) {
        ++dstEnd;
        continue;
      }
      if (dstStart < dstEnd) {
        const src = valuesBase.subarray(srcStart * valueElementSize);
        const dst = outputBase.subarray(dstStart * valueElementSize);
        const nVals = (dstEnd - dstStart) * valueElementSize;
        copyArray(dst, src, nVals);
      }
      if (srcI >= outputIndexSize) {
        const outputSize = outputTensor.length;
        dstI = Math.floor(outputSize / valueElementSize);
      }
      if (dstI > dstEnd) {
        if (this.defaultValue.length === 1) {
          outputBase.subarray(dstEnd * valueElementSize, dstI * valueElementSize).fill(this.defaultValue[0]);
          dstEnd = dstI;
        } else {
          while (dstI > dstEnd) {
            const dst = outputBase.slice(dstEnd * valueElementSize);
            copyArray(dst, defaultValue, valueElementSize);
            ++dstEnd;
          }
        }
      }
      if (dstI < 0) {
        srcStart = srcI + 1;
        dstStart = dstEnd;
      } else {
        srcStart = srcI;
        dstStart = dstEnd;
        dstEnd = dstStart + 1;
      }
    }
  }
};
function copyArray(dst, src, size) {
  for (let i = 0; i < size; i++) {
    dst[i] = src[i];
  }
}
function makeShape(shape, isPartial) {
  const out = [];
  for (let dim of shape) {
    if (dim < 0) {
      if (!isPartial) {
        throw new Error(`Dimension ${dim} must be >= 0`);
      }
      if (dim < -1) {
        throw new Error(`Dimension ${dim} must be >= -1`);
      }
      dim = -1;
    }
    out.push(dim);
  }
  return out;
}
function raggedTensorToTensorImpl(shape, shapesShape, values, valuesShape, valuesDType, defaultValue, defaultValueShape, rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypes) {
  return new RaggedTensorToTensorOp(
    shape,
    shapesShape,
    values,
    valuesShape,
    valuesDType,
    defaultValue,
    defaultValueShape,
    rowPartitionValues,
    rowPartitionValuesShapes,
    rowPartitionTypes
  ).compute();
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
var rsqrtConfig = {
  kernelName: Rsqrt,
  backendName: "cpu",
  kernelFunc: rsqrt2
};

// src/tfjs-backend-cpu/src/kernels/Scatter_impl.ts
function scatterImpl(indices, updates, shape, outputSize, sliceSize, numUpdates, sliceRank, strides, defaultValue, sumDupeIndices) {
  const flattenShape = [outputSize / sliceSize, sliceSize];
  const indicesData = indices.values;
  const updatesData = updates.values;
  if (outputSize === 0) {
    return buffer(shape, updates.dtype);
  }
  const outBuf = defaultValue instanceof TensorBuffer ? defaultValue : buffer(flattenShape, updates.dtype);
  if (typeof defaultValue === "string") {
    outBuf.values.fill(defaultValue);
  } else if (typeof defaultValue === "number") {
    outBuf.values.fill(defaultValue);
  } else if (typeof defaultValue === "boolean") {
    outBuf.values.fill(+defaultValue);
  }
  for (let i = 0; i < numUpdates; i++) {
    const index = [];
    let flattenIndex = 0;
    for (let j = 0; j < sliceRank; j++) {
      const dim = indicesData[i * sliceRank + j];
      index.push(dim);
      flattenIndex += dim * strides[j];
    }
    if (flattenIndex < 0 || flattenIndex >= outputSize / sliceSize) {
      throw new Error(`Invalid indices: ${index} does not index into ${shape}`);
    }
    for (let k = 0; k < sliceSize; k++) {
      if (sumDupeIndices) {
        outBuf.values[flattenIndex * sliceSize + k] += updatesData[i * sliceSize + k];
      } else {
        outBuf.values[flattenIndex * sliceSize + k] = updates.rank === 0 ? updatesData[0] : updatesData[i * sliceSize + k];
      }
    }
  }
  return outBuf;
}

// src/tfjs-backend-cpu/src/kernels/Sigmoid.ts
var sigmoidImpl = createSimpleUnaryImpl((xi) => 1 / (1 + Math.exp(-xi)));
var sigmoid2 = unaryKernelFunc(Sigmoid, (xi) => 1 / (1 + Math.exp(-xi)));
var sigmoidConfig = {
  kernelName: Sigmoid,
  backendName: "cpu",
  kernelFunc: sigmoid2
};

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
function slice2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { begin, size } = attrs;
  assertNotComplex(x, "slice");
  const [$begin, $size] = slice_util_exports.parseSliceParams(x, begin, size);
  slice_util_exports.assertParamsValid(x, $begin, $size);
  const vals = backend.data.get(x.dataId).values;
  const outVals = sliceImpl(vals, $begin, $size, x.shape, x.dtype);
  return backend.makeTensorInfo($size, x.dtype, outVals);
}
var sliceConfig = {
  kernelName: Slice,
  backendName: "cpu",
  kernelFunc: slice2
};

// src/tfjs-backend-cpu/src/kernels/SparseFillEmptyRows_impl.ts
function sparseFillEmptyRowsImpl(indices, indicesShape, indicesDType, values, valuesDType, denseShape, defaultValue) {
  const indicesCount = indicesShape[0];
  const denseRows = denseShape[0];
  const emptyRowIndicator = new Array(denseRows);
  const reverseIndexMap = new Array(indicesCount);
  const rank = indicesShape[1];
  if (denseRows === 0) {
    if (indicesCount !== 0) {
      throw new Error(
        backend_util_exports.getSparseFillEmptyRowsIndicesDenseShapeMismatch(
          indicesCount
        )
      );
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
      throw new Error(
        backend_util_exports.getSparseFillEmptyRowsNegativeIndexErrorMessage(i, row)
      );
    }
    if (row >= denseRows) {
      throw new Error(
        backend_util_exports.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(
          i,
          row,
          denseRows
        )
      );
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
        throw new Error(
          backend_util_exports.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(
            unknownIndex,
            d
          )
        );
      }
      unknownIndex = d;
      outputShape.push(1);
    } else {
      if (size < 0) {
        throw new Error(
          backend_util_exports.getSparseReshapeNegativeOutputDimErrorMessage(
            d,
            size
          )
        );
      }
      product *= size;
      outputShape.push(size);
    }
  }
  if (unknownIndex !== -1) {
    if (product <= 0) {
      throw new Error(
        backend_util_exports.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage()
      );
    }
    const missing = Math.trunc(denseSize / product);
    if (product * missing !== denseSize) {
      throw new Error(
        backend_util_exports.getSparseReshapeInputOutputMultipleErrorMessage(
          inputShape,
          outputShape
        )
      );
    }
    outputShape[unknownIndex] = missing;
  }
  const outputSize = util_exports.sizeFromShape(outputShape);
  if (outputSize !== denseSize) {
    throw new Error(
      backend_util_exports.getSparseReshapeInputOutputMismatchErrorMessage(
        inputShape,
        outputShape
      )
    );
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
    throw new Error(
      backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage()
    );
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
    throw new Error(
      backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage()
    );
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
      throw new Error(
        backend_util_exports.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(
          outIndex,
          outputRows
        )
      );
    }
    if (outIndex > uninitializedIndex) {
      output.fill(defaultValue, uninitializedIndex * numCol, outIndex * numCol);
    }
    for (let i = start; i < end; ++i) {
      const index = indices[i];
      if (index < 0 || index >= inputFlat[0]) {
        throw new Error(
          backend_util_exports.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(
            i,
            indices[i],
            inputFlat[0]
          )
        );
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
var sqrtConfig = {
  kernelName: Sqrt,
  backendName: "cpu",
  kernelFunc: sqrt2
};

// src/tfjs-backend-cpu/src/kernels/SquaredDifference.ts
var squaredDifferenceImpl = createSimpleBinaryKernelImpl((a, b) => {
  const diff = a - b;
  return diff * diff;
});
var squaredDifference2 = binaryKernelFunc(SquaredDifference, squaredDifferenceImpl);
var squaredDifferenceConfig = {
  kernelName: SquaredDifference,
  backendName: "cpu",
  kernelFunc: squaredDifference2
};

// src/tfjs-backend-cpu/src/kernels/StaticRegexReplace.ts
var staticRegexReplaceImpl = createSimpleUnaryImpl((x, attrs) => {
  const { pattern, replaceGlobal, rewrite } = attrs;
  return x.replace(new RegExp(pattern, replaceGlobal ? "g" : ""), rewrite);
});
var staticRegexReplace2 = unaryKernelFuncFromImpl(StaticRegexReplace, staticRegexReplaceImpl);
var staticRegexReplaceConfig = {
  kernelName: StaticRegexReplace,
  backendName: "cpu",
  kernelFunc: staticRegexReplace2
};

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
  // Data and splits together form the definition of the ragged tensor,
  // where data is 1 dimensional and contains the values of the tensor
  // and splits denotes the indices at which each row starts.
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
var subConfig = {
  kernelName: Sub,
  backendName: "cpu",
  kernelFunc: sub2
};

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
    vals.forEach(
      (value, index) => valAndInd[index] = { value, index }
    );
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
  const uniqueElements = /* @__PURE__ */ new Map();
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
    const existingIndex = uniqueElements.get(element);
    if (existingIndex != null) {
      indices[i] = existingIndex;
    } else {
      const uniqueIndex = uniqueElements.size;
      uniqueElements.set(element, uniqueIndex);
      indices[i] = uniqueIndex;
      uniqueIndices.push(i);
    }
  }
  const outputTmpShape = newShape.slice();
  outputTmpShape[1] = uniqueElements.size;
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

// src/tfjs-backend-cpu/src/version.ts
var version2 = "0.0.0";

// src/tfjs-backend-cpu/src/base.ts
registerBackend(
  "cpu",
  () => new MathBackendCPU(),
  1
  /* priority */
);

// src/tfjs-backend-cpu/src/kernels/Elu.ts
var elu2 = unaryKernelFunc(Elu, (xi) => xi >= 0 ? xi : Math.exp(xi) - 1);
var eluConfig = {
  kernelName: Elu,
  backendName: "cpu",
  kernelFunc: elu2
};

// src/tfjs-backend-cpu/src/kernels/LeakyRelu.ts
function leakyRelu2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { alpha } = attrs;
  assertNotComplex([x], "leakyRelu");
  const xSize = util_exports.sizeFromShape(x.shape);
  const xVals = backend.data.get(x.dataId).values;
  const outVals = util_exports.getTypedArrayFromDType("float32", xSize);
  for (let i = 0; i < xVals.length; i++) {
    outVals[i] = xVals[i] < 0 ? alpha * xVals[i] : xVals[i];
  }
  return backend.makeTensorInfo(x.shape, "float32", outVals);
}
var leakyReluConfig = {
  kernelName: LeakyRelu,
  backendName: "cpu",
  kernelFunc: leakyRelu2
};

// src/tfjs-backend-cpu/src/kernels/Prelu.ts
var preluImpl = createSimpleBinaryKernelImpl(
  (xValue, aValue) => xValue < 0 ? aValue * xValue : xValue
);
function prelu2(args) {
  const { inputs, backend } = args;
  const { x, alpha } = inputs;
  assertNotComplex([x, alpha], "prelu");
  const aVals = backend.data.get(x.dataId).values;
  const bVals = backend.data.get(alpha.dataId).values;
  const [resultData, resultShape] = preluImpl(x.shape, alpha.shape, aVals, bVals, "float32");
  return backend.makeTensorInfo(resultShape, "float32", resultData);
}
var preluConfig = {
  kernelName: Prelu,
  backendName: "cpu",
  kernelFunc: prelu2
};

// src/tfjs-backend-cpu/src/kernels/Relu.ts
var relu2 = unaryKernelFunc(Relu, (xi) => Math.max(0, xi));
var reluConfig = {
  kernelName: Relu,
  backendName: "cpu",
  kernelFunc: relu2
};

// src/tfjs-backend-cpu/src/kernels/Relu6.ts
var relu62 = unaryKernelFunc(Relu6, (xi) => Math.min(Math.max(0, xi), 6));
var relu6Config = {
  kernelName: Relu6,
  backendName: "cpu",
  kernelFunc: relu62
};

// src/tfjs-backend-cpu/src/utils/fused_utils.ts
function applyActivation2(backend, x, activation, preluActivationWeights, leakyreluAlpha) {
  if (activation === "linear") {
    return identity({ inputs: { x }, backend });
  } else if (activation === "relu") {
    return relu2({ inputs: { x }, backend });
  } else if (activation === "elu") {
    return elu2({ inputs: { x }, backend });
  } else if (activation === "relu6") {
    return relu62({ inputs: { x }, backend });
  } else if (activation === "prelu") {
    return prelu2({ inputs: { x, alpha: preluActivationWeights }, backend });
  } else if (activation === "leakyrelu") {
    return leakyRelu2({ inputs: { x }, backend, attrs: { alpha: leakyreluAlpha } });
  } else if (activation === "sigmoid") {
    return sigmoid2({ inputs: { x }, backend });
  }
  throw new Error(
    `Activation ${activation} has not been implemented for the CPU backend.`
  );
}

// src/tfjs-backend-cpu/src/kernels/Reshape.ts
function reshape2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { shape } = attrs;
  const xSize = util_exports.sizeFromShape(x.shape);
  const $shape = util_exports.inferFromImplicitShape(shape, xSize);
  const $xSize = util_exports.sizeFromShape($shape);
  util_exports.assert(
    xSize === $xSize,
    () => `The new shape (${$shape}) has ${$xSize} elements and the old shape (${x.shape}) has ${xSize} elements. The new shape and old shape must have the same number of elements.`
  );
  backend.incRef(x.dataId);
  const xData = backend.data.get(x.dataId);
  if (xData.complexTensorInfos != null) {
    const real3 = xData.complexTensorInfos.real;
    const imag3 = xData.complexTensorInfos.imag;
    real3.shape = $shape;
    imag3.shape = $shape;
  }
  return { dataId: x.dataId, shape: $shape, dtype: x.dtype };
}
var reshapeConfig = {
  kernelName: Reshape,
  backendName: "cpu",
  kernelFunc: reshape2
};

// src/tfjs-backend-cpu/src/kernels/BatchMatMul.ts
function batchMatMul(args) {
  const { inputs, backend, attrs } = args;
  const { a, b } = inputs;
  const { transposeA, transposeB } = attrs;
  assertNotComplex([a, b], "matMul");
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
  const sharedDim = transposeA ? a3d.shape[1] : a3d.shape[2];
  const leftDim = transposeA ? a3d.shape[2] : a3d.shape[1];
  const rightDim = transposeB ? b3d.shape[1] : b3d.shape[2];
  const batchDim = Math.max(batchDimA, batchDimB);
  const a3dValues = backend.data.get(a3d.dataId).values;
  const b3dValues = backend.data.get(b3d.dataId).values;
  const a3dStrides = util_exports.computeStrides(a3d.shape);
  const b3dStrides = util_exports.computeStrides(b3d.shape);
  const [aBatch, aOuterStep, aInnerStep] = transposeA ? [a3dStrides[0], 1, a3dStrides[1]] : [a3dStrides[0], a3dStrides[1], 1];
  const [bInnerStep, bOuterStep, bBatch] = transposeB ? [1, b3dStrides[1], b3dStrides[0]] : [b3dStrides[1], 1, b3dStrides[0]];
  const size = leftDim * rightDim;
  const result = buffer([batchDim, leftDim, rightDim], a3d.dtype);
  const resVals = result.values;
  const blockSize = backend.blockSize;
  for (let bi = 0; bi < batchDim; bi++) {
    const batchIndexA = bi % batchDimA;
    const batchIndexB = bi % batchDimB;
    for (let i0 = 0; i0 < leftDim; i0 += blockSize) {
      const iBlock = Math.min(i0 + blockSize, leftDim);
      for (let j0 = 0; j0 < rightDim; j0 += blockSize) {
        const jBlock = Math.min(j0 + blockSize, rightDim);
        for (let k02 = 0; k02 < sharedDim; k02 += blockSize) {
          const kBlock = Math.min(k02 + blockSize, sharedDim);
          for (let i = i0; i < iBlock; i++) {
            for (let j = j0; j < jBlock; j++) {
              let sum4 = 0;
              for (let k = k02; k < kBlock; k++) {
                const aVal = (
                  // tslint:disable-next-line: max-line-length
                  a3dValues[batchIndexA * aBatch + i * aOuterStep + k * aInnerStep]
                );
                const bVal = (
                  // tslint:disable-next-line: max-line-length
                  b3dValues[k * bInnerStep + j * bOuterStep + batchIndexB * bBatch]
                );
                sum4 += aVal * bVal;
              }
              resVals[bi * size + (i * rightDim + j)] += sum4;
            }
          }
        }
      }
    }
  }
  backend.disposeIntermediateTensorInfo(a3d);
  backend.disposeIntermediateTensorInfo(b3d);
  return backend.makeTensorInfo(
    outShape,
    result.dtype,
    result.values
  );
}
var batchMatMulConfig = {
  kernelName: BatchMatMul,
  backendName: "cpu",
  kernelFunc: batchMatMul
};

// src/tfjs-backend-cpu/src/kernels/_FusedMatMul.ts
function _fusedMatMul(args) {
  const { inputs, backend, attrs } = args;
  const { a, b, bias, preluActivationWeights } = inputs;
  const { transposeA, transposeB, activation, leakyreluAlpha } = attrs;
  let current;
  let addRes;
  let activationRes;
  const intermediates = [];
  const matMulRes = batchMatMul({ inputs: { a, b }, attrs: { transposeA, transposeB }, backend });
  current = matMulRes;
  if (bias) {
    addRes = add3({ inputs: { a: current, b: bias }, backend });
    intermediates.push(current);
    current = addRes;
  }
  if (activation) {
    activationRes = applyActivation2(
      backend,
      current,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    );
    intermediates.push(current);
    current = activationRes;
  }
  for (const i of intermediates) {
    backend.disposeIntermediateTensorInfo(i);
  }
  return current;
}
var _fusedMatMulConfig = {
  kernelName: _FusedMatMul,
  backendName: "cpu",
  kernelFunc: _fusedMatMul
};

// src/tfjs-backend-cpu/src/kernels/Acos.ts
var acos2 = unaryKernelFunc(Acos, (xi) => Math.acos(xi));
var acosConfig = {
  kernelName: Acos,
  backendName: "cpu",
  kernelFunc: acos2
};

// src/tfjs-backend-cpu/src/kernels/Acosh.ts
var acosh2 = unaryKernelFunc(Acosh, (xi) => Math.acosh(xi));
var acoshConfig = {
  kernelName: Acosh,
  backendName: "cpu",
  kernelFunc: acosh2
};

// src/tfjs-backend-cpu/src/kernels/AddN.ts
function addN2(args) {
  const { inputs, backend } = args;
  const tensors = inputs;
  assertNotComplex(inputs, "addN");
  const vals = tensors.map((t) => backend.data.get(t.dataId).values);
  const outBuf = buffer(tensors[0].shape, tensors[0].dtype);
  const outVals = outBuf.values;
  for (let i = 0; i < tensors.length; i++) {
    const currVals = vals[i];
    for (let j = 0; j < outVals.length; j++) {
      outVals[j] += currVals[j];
    }
  }
  return backend.makeTensorInfo(outBuf.shape, outBuf.dtype, outBuf.values);
}
var addNConfig = {
  kernelName: AddN,
  backendName: "cpu",
  kernelFunc: addN2
};

// src/tfjs-backend-cpu/src/kernels/All.ts
function all2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  assertNotComplex(x, "all");
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  if (permutedAxes != null) {
    $x = transpose2({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    axes = backend_util_exports.getInnerMostAxes(axes.length, x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("all", axes, $x.shape.length);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes($x.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const vals = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(outShape), $x.dtype);
  const aVals = backend.data.get($x.dataId).values;
  for (let i = 0; i < vals.length; ++i) {
    const offset = i * reduceSize;
    let all3 = aVals[offset];
    for (let j = 0; j < reduceSize; ++j) {
      const value = aVals[offset + j];
      all3 = all3 && value;
    }
    vals[i] = all3;
  }
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo($x);
  }
  const result = backend.makeTensorInfo(outShape, $x.dtype, vals);
  if (keepDims) {
    const expandedShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    const reshapedResult = reshape2({ inputs: { x: result }, backend, attrs: { shape: expandedShape } });
    backend.disposeIntermediateTensorInfo(result);
    return reshapedResult;
  }
  return result;
}
var allConfig = {
  kernelName: All,
  backendName: "cpu",
  kernelFunc: all2
};

// src/tfjs-backend-cpu/src/kernels/Any.ts
function any2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  assertNotComplex(x, "any");
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  if (permutedAxes != null) {
    $x = transpose2({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    axes = backend_util_exports.getInnerMostAxes(axes.length, x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("any", axes, $x.shape.length);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes($x.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const vals = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(outShape), $x.dtype);
  const aVals = backend.data.get($x.dataId).values;
  for (let i = 0; i < vals.length; ++i) {
    const offset = i * reduceSize;
    let anyVal = aVals[offset];
    for (let j = 0; j < reduceSize; ++j) {
      const value = aVals[offset + j];
      anyVal = anyVal || value;
    }
    vals[i] = anyVal;
  }
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo($x);
  }
  const result = backend.makeTensorInfo(outShape, $x.dtype, vals);
  if (keepDims) {
    const expandedShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    const reshapedResult = reshape2({ inputs: { x: result }, backend, attrs: { shape: expandedShape } });
    backend.disposeIntermediateTensorInfo(result);
    return reshapedResult;
  }
  return result;
}
var anyConfig = {
  kernelName: Any,
  backendName: "cpu",
  kernelFunc: any2
};

// src/tfjs-backend-cpu/src/kernels/ArgMax.ts
function argMax2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis } = attrs;
  assertNotComplex(x, "argMax");
  let axes = util_exports.parseAxisParam(axis, x.shape);
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  const intermediateTensorInfos = [];
  if (permutedAxes != null) {
    $x = transpose2({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    intermediateTensorInfos.push($x);
    axes = backend_util_exports.getInnerMostAxes(axes.length, $x.shape.length);
  }
  axes = [axes[0]];
  backend_util_exports.assertAxesAreInnerMostDims("argMax", axes, $x.shape.length);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes($x.shape, axes);
  const outSize = util_exports.sizeFromShape(outShape);
  const vals = util_exports.makeZerosTypedArray(outSize, "int32");
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const aVals = backend.data.get($x.dataId).values;
  for (let i = 0; i < vals.length; ++i) {
    const offset = i * reduceSize;
    let max3 = aVals[offset];
    let maxIndex = 0;
    for (let j = 0; j < reduceSize; ++j) {
      const value = aVals[offset + j];
      if (value > max3) {
        max3 = value;
        maxIndex = j;
      }
    }
    vals[i] = maxIndex;
  }
  intermediateTensorInfos.forEach(
    (t) => backend.disposeIntermediateTensorInfo(t)
  );
  return backend.makeTensorInfo(outShape, "int32", vals);
}
var argMaxConfig = {
  kernelName: ArgMax,
  backendName: "cpu",
  kernelFunc: argMax2
};

// src/tfjs-backend-cpu/src/kernels/ArgMin.ts
function argMin2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis } = attrs;
  assertNotComplex(x, "argMin");
  let axes = util_exports.parseAxisParam(axis, x.shape);
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  const intermediateTensorInfos = [];
  if (permutedAxes != null) {
    $x = transpose2({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    intermediateTensorInfos.push($x);
    axes = backend_util_exports.getInnerMostAxes(axes.length, $x.shape.length);
  }
  axes = [axes[0]];
  backend_util_exports.assertAxesAreInnerMostDims("argMin", axes, $x.shape.length);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes($x.shape, axes);
  const outSize = util_exports.sizeFromShape(outShape);
  const vals = util_exports.makeZerosTypedArray(outSize, "int32");
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const aVals = backend.data.get($x.dataId).values;
  for (let i = 0; i < vals.length; ++i) {
    const offset = i * reduceSize;
    let min3 = aVals[offset];
    let minIndex = 0;
    for (let j = 0; j < reduceSize; ++j) {
      const value = aVals[offset + j];
      if (value < min3) {
        min3 = value;
        minIndex = j;
      }
    }
    vals[i] = minIndex;
  }
  intermediateTensorInfos.forEach(
    (t) => backend.disposeIntermediateTensorInfo(t)
  );
  return backend.makeTensorInfo(outShape, "int32", vals);
}
var argMinConfig = {
  kernelName: ArgMin,
  backendName: "cpu",
  kernelFunc: argMin2
};

// src/tfjs-backend-cpu/src/kernels/Asin.ts
var asin2 = unaryKernelFunc(Asin, (xi) => Math.asin(xi));
var asinConfig = {
  kernelName: Asin,
  backendName: "cpu",
  kernelFunc: asin2
};

// src/tfjs-backend-cpu/src/kernels/Asinh.ts
var asinh2 = unaryKernelFunc(Asinh, (xi) => Math.asinh(xi));
var asinhConfig = {
  kernelName: Asinh,
  backendName: "cpu",
  kernelFunc: asinh2
};

// src/tfjs-backend-cpu/src/kernels/Atan.ts
var atan3 = unaryKernelFunc(Atan, (xi) => Math.atan(xi));
var atanConfig = {
  kernelName: Atan,
  backendName: "cpu",
  kernelFunc: atan3
};

// src/tfjs-backend-cpu/src/kernels/Atan2.ts
var atan2Impl = createSimpleBinaryKernelImpl(
  (aValue, bValue) => Math.atan2(aValue, bValue)
);
var atan22 = binaryKernelFunc(Atan2, atan2Impl);
var atan2Config = {
  kernelName: Atan2,
  backendName: "cpu",
  kernelFunc: atan22
};

// src/tfjs-backend-cpu/src/kernels/Atanh.ts
var atanh2 = unaryKernelFunc(Atanh, (xi) => Math.atanh(xi));
var atanhConfig = {
  kernelName: Atanh,
  backendName: "cpu",
  kernelFunc: atanh2
};

// src/tfjs-backend-cpu/src/utils/pool_utils.ts
function pool2(xValues, xShape, dtype, strides, convInfo, poolType) {
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const effectiveFilterHeight = convInfo.effectiveFilterHeight;
  const effectiveFilterWidth = convInfo.effectiveFilterWidth;
  const padTop = convInfo.padInfo.top;
  const padLeft = convInfo.padInfo.left;
  const initialValue = poolType === "max" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  const output = buffer(convInfo.outShape, dtype);
  const outputVals = output.values;
  const outputBatchStrides = convInfo.outShape[1] * convInfo.outShape[2] * convInfo.outShape[3];
  const outputRowStrides = convInfo.outShape[2] * convInfo.outShape[3];
  const outputColStrides = convInfo.outShape[3];
  for (let b = 0; b < convInfo.batchSize; ++b) {
    const outputBatchOffset = b * outputBatchStrides;
    const inputBatchOffset = b * strides[0];
    for (let d = 0; d < convInfo.inChannels; ++d) {
      for (let yR = 0; yR < convInfo.outHeight; ++yR) {
        const xRCorner = yR * strideHeight - padTop;
        const xRMin = Math.max(0, xRCorner);
        const xRMax = Math.min(convInfo.inHeight, effectiveFilterHeight + xRCorner);
        const outputRowOffset = outputBatchOffset + yR * outputRowStrides;
        for (let yC = 0; yC < convInfo.outWidth; ++yC) {
          const xCCorner = yC * strideWidth - padLeft;
          const xCMin = Math.max(0, xCCorner);
          const xCMax = Math.min(convInfo.inWidth, effectiveFilterWidth + xCCorner);
          let minMaxValue = initialValue;
          let avgValue = 0;
          let count = 0;
          for (let xR = xRMin; xR < xRMax; xR += dilationHeight) {
            const xROffset = inputBatchOffset + xR * strides[1];
            for (let xC = xCMin; xC < xCMax; xC += dilationWidth) {
              const xCOffset = xROffset + xC * strides[2];
              const pixel = xValues[xCOffset + d];
              if (poolType === "max" && pixel > minMaxValue) {
                minMaxValue = pixel;
              } else if (poolType === "avg") {
                avgValue += pixel;
                count++;
              }
            }
            if (isNaN(minMaxValue)) {
              break;
            }
          }
          const outputOffset = outputRowOffset + yC * outputColStrides + d;
          outputVals[outputOffset] = poolType === "avg" ? avgValue / count : minMaxValue;
        }
      }
    }
  }
  return output;
}
function maxPoolPositions(xValues, xShape, dtype, convInfo, flattenPositions = false, includeBatchInIndex = false) {
  const maxPositions = buffer(convInfo.outShape, "int32");
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const effectiveFilterHeight = convInfo.effectiveFilterHeight;
  const effectiveFilterWidth = convInfo.effectiveFilterWidth;
  const padTop = convInfo.padInfo.top;
  const padLeft = convInfo.padInfo.left;
  const xBuf = buffer(xShape, dtype, xValues);
  for (let b = 0; b < convInfo.batchSize; ++b) {
    for (let d = 0; d < convInfo.inChannels; ++d) {
      for (let yR = 0; yR < convInfo.outHeight; ++yR) {
        const xRCorner = yR * strideHeight - padTop;
        let xRMin = xRCorner;
        while (xRMin < 0) {
          xRMin += dilationHeight;
        }
        const xRMax = Math.min(convInfo.inHeight, effectiveFilterHeight + xRCorner);
        for (let yC = 0; yC < convInfo.outWidth; ++yC) {
          const xCCorner = yC * strideWidth - padLeft;
          let xCMin = xCCorner;
          while (xCMin < 0) {
            xCMin += dilationWidth;
          }
          const xCMax = Math.min(convInfo.inWidth, effectiveFilterWidth + xCCorner);
          let maxValue = Number.NEGATIVE_INFINITY;
          let maxPosition = -1;
          for (let xR = xRMin; xR < xRMax; xR += dilationHeight) {
            const wR = xR - xRCorner;
            for (let xC = xCMin; xC < xCMax; xC += dilationWidth) {
              const wC = xC - xCCorner;
              const pixel = xBuf.get(b, xR, xC, d);
              if (pixel > maxValue) {
                maxValue = pixel;
                if (flattenPositions) {
                  maxPosition = includeBatchInIndex ? ((b * convInfo.inHeight + xR) * convInfo.inWidth + xC) * convInfo.inChannels + d : (xR * convInfo.inWidth + xC) * convInfo.inChannels + d;
                } else {
                  maxPosition = wR * effectiveFilterWidth + wC;
                }
              }
            }
          }
          maxPositions.set(maxPosition, b, yR, yC, d);
        }
      }
    }
  }
  return maxPositions;
}
function pool3d(xValues, xShape, dtype, strides, convInfo, poolType) {
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
  const initialValue = poolType === "max" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  const output = buffer(convInfo.outShape, dtype);
  const outputVals = output.values;
  const outputBatchStrides = convInfo.outShape[1] * convInfo.outShape[2] * convInfo.outShape[3] * convInfo.outShape[4];
  const outputDepthStrides = convInfo.outShape[2] * convInfo.outShape[3] * convInfo.outShape[4];
  const outputRowStrides = convInfo.outShape[3] * convInfo.outShape[4];
  const outputColStrides = convInfo.outShape[4];
  for (let batch = 0; batch < convInfo.batchSize; ++batch) {
    const outputBatchOffset = batch * outputBatchStrides;
    const inputBatchOffset = batch * strides[0];
    for (let channel = 0; channel < convInfo.inChannels; ++channel) {
      for (let yDepth = 0; yDepth < convInfo.outDepth; ++yDepth) {
        const xDepthCorner = yDepth * strideDepth - padFront;
        let xDepthMin = xDepthCorner;
        while (xDepthMin < 0) {
          xDepthMin += dilationDepth;
        }
        const xDepthMax = Math.min(convInfo.inDepth, effectiveFilterDepth + xDepthCorner);
        const outputDepthOffset = outputBatchOffset + yDepth * outputDepthStrides;
        for (let yRow = 0; yRow < convInfo.outHeight; ++yRow) {
          const xRowCorner = yRow * strideHeight - padTop;
          let xRowMin = xRowCorner;
          while (xRowMin < 0) {
            xRowMin += dilationHeight;
          }
          const xRowMax = Math.min(convInfo.inHeight, effectiveFilterHeight + xRowCorner);
          const outputRowOffset = outputDepthOffset + yRow * outputRowStrides;
          for (let yCol = 0; yCol < convInfo.outWidth; ++yCol) {
            const xColCorner = yCol * strideWidth - padLeft;
            let xColMin = xColCorner;
            while (xColMin < 0) {
              xColMin += dilationWidth;
            }
            const xColMax = Math.min(convInfo.inWidth, effectiveFilterWidth + xColCorner);
            const outputColOffset = outputRowOffset + yCol * outputColStrides;
            let minMaxValue = initialValue;
            let avgValue = 0;
            let count = 0;
            for (let xDepth = xDepthMin; xDepth < xDepthMax; xDepth += dilationDepth) {
              const xDepthOffset = inputBatchOffset + xDepth * strides[1];
              for (let xRow = xRowMin; xRow < xRowMax; xRow += dilationHeight) {
                const xRowOffset = xDepthOffset + xRow * strides[2];
                for (let xCol = xColMin; xCol < xColMax; xCol += dilationWidth) {
                  const xColOffset = xRowOffset + xCol * strides[3];
                  const pixel = xValues[xColOffset + channel];
                  if (poolType === "max" && pixel > minMaxValue) {
                    minMaxValue = pixel;
                  } else if (poolType === "avg") {
                    avgValue += pixel;
                    count++;
                  }
                  if (isNaN(minMaxValue)) {
                    break;
                  }
                }
                if (isNaN(minMaxValue)) {
                  break;
                }
              }
              if (isNaN(minMaxValue)) {
                break;
              }
            }
            const outputOffset = outputColOffset + channel;
            outputVals[outputOffset] = poolType === "avg" ? avgValue / Math.max(count, 1) : minMaxValue;
          }
        }
      }
    }
  }
  return output;
}
function maxPool3dPositions(xBuf, convInfo) {
  const maxPositions = buffer(convInfo.outShape, "int32");
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
  for (let batch = 0; batch < convInfo.batchSize; ++batch) {
    for (let channel = 0; channel < convInfo.inChannels; ++channel) {
      for (let yDepth = 0; yDepth < convInfo.outDepth; ++yDepth) {
        const xDepthCorner = yDepth * strideDepth - padFront;
        let xDepthMin = xDepthCorner;
        while (xDepthMin < 0) {
          xDepthMin += dilationDepth;
        }
        const xDepthMax = Math.min(convInfo.inDepth, effectiveFilterDepth + xDepthCorner);
        for (let yRow = 0; yRow < convInfo.outHeight; ++yRow) {
          const xRowCorner = yRow * strideHeight - padTop;
          let xRowMin = xRowCorner;
          while (xRowMin < 0) {
            xRowMin += dilationHeight;
          }
          const xRowMax = Math.min(convInfo.inHeight, effectiveFilterHeight + xRowCorner);
          for (let yCol = 0; yCol < convInfo.outWidth; ++yCol) {
            const xColCorner = yCol * strideWidth - padLeft;
            let xColMin = xColCorner;
            while (xColMin < 0) {
              xColMin += dilationWidth;
            }
            const xColMax = Math.min(convInfo.inWidth, effectiveFilterWidth + xColCorner);
            let maxValue = Number.NEGATIVE_INFINITY;
            let maxPosition = -1;
            for (let xDepth = xDepthMin; xDepth < xDepthMax; xDepth += dilationDepth) {
              const wDepth = xDepth - xDepthCorner;
              for (let xRow = xRowMin; xRow < xRowMax; xRow += dilationHeight) {
                const wRow = xRow - xRowCorner;
                for (let xCol = xColMin; xCol < xColMax; xCol += dilationWidth) {
                  const wCol = xCol - xColCorner;
                  const pixel = xBuf.get(
                    batch,
                    xDepth,
                    xRow,
                    xCol,
                    channel
                  );
                  if (pixel >= maxValue) {
                    maxValue = pixel;
                    maxPosition = wDepth * effectiveFilterHeight * effectiveFilterWidth + wRow * effectiveFilterHeight + wCol;
                  }
                }
              }
            }
            maxPositions.set(maxPosition, batch, yDepth, yRow, yCol, channel);
          }
        }
      }
    }
  }
  return maxPositions;
}

// src/tfjs-backend-cpu/src/kernels/AvgPool.ts
function avgPool2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  assertNotComplex(x, "avgPool");
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const dilations = 1;
  util_exports.assert(
    backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in avgPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  const convInfo = backend_util_exports.computePool2DInfo(
    x.shape,
    filterSize,
    strides,
    dilations,
    pad2,
    dimRoundingMode
  );
  let res;
  if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 && util_exports.arraysEqual(convInfo.inShape, convInfo.outShape)) {
    res = identity({ inputs: { x }, backend });
  } else {
    const xValues = backend.data.get(x.dataId).values;
    const strides2 = util_exports.computeStrides(x.shape);
    const buffer2 = pool2(xValues, x.shape, x.dtype, strides2, convInfo, "avg");
    res = backend.makeTensorInfo(
      convInfo.outShape,
      x.dtype,
      buffer2.values
    );
  }
  return res;
}
var avgPoolConfig = {
  kernelName: AvgPool,
  backendName: "cpu",
  kernelFunc: avgPool2
};

// src/tfjs-backend-cpu/src/kernels/AvgPool3D.ts
function avgPool3D(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat } = attrs;
  assertNotComplex(x, "avgPool3d");
  const convInfo = backend_util_exports.computePool3DInfo(
    x.shape,
    filterSize,
    strides,
    1,
    pad2,
    dimRoundingMode,
    dataFormat
  );
  const xValues = backend.data.get(x.dataId).values;
  const outBuf = pool3d(
    xValues,
    x.shape,
    x.dtype,
    util_exports.computeStrides(x.shape),
    convInfo,
    "avg"
  );
  return backend.makeTensorInfo(outBuf.shape, "float32", outBuf.values);
}
var avgPool3DConfig = {
  kernelName: AvgPool3D,
  backendName: "cpu",
  kernelFunc: avgPool3D
};

// src/tfjs-backend-cpu/src/kernels/AvgPool3DGrad.ts
function avgPool3DGrad(args) {
  const { inputs, backend, attrs } = args;
  const { dy, input } = inputs;
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  assertNotComplex([dy, input], "avgPool3DGrad");
  const convInfo = backend_util_exports.computePool3DInfo(
    input.shape,
    filterSize,
    strides,
    1,
    pad2,
    dimRoundingMode
  );
  const strideDepth = convInfo.strideDepth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const filterDepth = convInfo.filterDepth;
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const dilationDepth = convInfo.dilationDepth;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const effectiveFilterDepth = convInfo.effectiveFilterDepth;
  const effectiveFilterHeight = convInfo.effectiveFilterHeight;
  const effectiveFilterWidth = convInfo.effectiveFilterWidth;
  const padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
  const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
  const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
  const dx = buffer(input.shape, "float32");
  const avgMultiplier = 1 / (filterDepth * filterHeight * filterWidth);
  const dyBuf = backend.bufferSync(dy);
  for (let batch = 0; batch < convInfo.batchSize; ++batch) {
    for (let channel = 0; channel < convInfo.inChannels; ++channel) {
      for (let dxDepth = 0; dxDepth < convInfo.inDepth; ++dxDepth) {
        for (let dxRow = 0; dxRow < convInfo.inHeight; ++dxRow) {
          for (let dxCol = 0; dxCol < convInfo.inWidth; ++dxCol) {
            const dyDepthCorner = dxDepth - padFront;
            const dyRowCorner = dxRow - padTop;
            const dyColCorner = dxCol - padLeft;
            let dotProd = 0;
            for (let wDepth = 0; wDepth < effectiveFilterDepth; wDepth += dilationDepth) {
              const dyDepth = (dyDepthCorner + wDepth) / strideDepth;
              if (dyDepth < 0 || dyDepth >= convInfo.outDepth || Math.floor(dyDepth) !== dyDepth) {
                continue;
              }
              for (let wRow = 0; wRow < effectiveFilterHeight; wRow += dilationHeight) {
                const dyRow = (dyRowCorner + wRow) / strideHeight;
                if (dyRow < 0 || dyRow >= convInfo.outHeight || Math.floor(dyRow) !== dyRow) {
                  continue;
                }
                for (let wCol = 0; wCol < effectiveFilterWidth; wCol += dilationWidth) {
                  const dyCol = (dyColCorner + wCol) / strideWidth;
                  if (dyCol < 0 || dyCol >= convInfo.outWidth || Math.floor(dyCol) !== dyCol) {
                    continue;
                  }
                  const pixel = dyBuf.get(batch, dyDepth, dyRow, dyCol, channel);
                  dotProd += pixel;
                }
              }
            }
            dx.set(
              dotProd * avgMultiplier,
              batch,
              dxDepth,
              dxRow,
              dxCol,
              channel
            );
          }
        }
      }
    }
  }
  return backend.makeTensorInfo(dx.shape, dx.dtype, dx.values);
}
var avgPool3DGradConfig = {
  kernelName: AvgPool3DGrad,
  backendName: "cpu",
  kernelFunc: avgPool3DGrad
};

// src/tfjs-backend-cpu/src/kernels/AvgPoolGrad.ts
function avgPoolGrad(args) {
  const { inputs, backend, attrs } = args;
  const { dy, input } = inputs;
  const x = input;
  assertNotComplex([dy, input], "avgPoolGrad");
  const { filterSize, strides, pad: pad2 } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(
    x.shape,
    filterSize,
    strides,
    1,
    pad2
  );
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const effectiveFilterHeight = convInfo.effectiveFilterHeight;
  const effectiveFilterWidth = convInfo.effectiveFilterWidth;
  const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
  const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
  const dx = buffer(x.shape, "float32");
  const avgMultiplier = 1 / (filterHeight * filterWidth);
  const dyData = backend.data.get(dy.dataId).values;
  const dyBuf = buffer(
    dy.shape,
    "float32",
    dyData
  );
  for (let b = 0; b < convInfo.batchSize; ++b) {
    for (let d = 0; d < convInfo.inChannels; ++d) {
      for (let dxR = 0; dxR < convInfo.inHeight; ++dxR) {
        for (let dxC = 0; dxC < convInfo.inWidth; ++dxC) {
          const dyRCorner = dxR - padTop;
          const dyCCorner = dxC - padLeft;
          let dotProd = 0;
          for (let wR = 0; wR < effectiveFilterHeight; wR += dilationHeight) {
            const dyR = (dyRCorner + wR) / strideHeight;
            if (dyR < 0 || dyR >= convInfo.outHeight || Math.floor(dyR) !== dyR) {
              continue;
            }
            for (let wC = 0; wC < effectiveFilterWidth; wC += dilationWidth) {
              const dyC = (dyCCorner + wC) / strideWidth;
              if (dyC < 0 || dyC >= convInfo.outWidth || Math.floor(dyC) !== dyC) {
                continue;
              }
              const pixel = dyBuf.get(b, dyR, dyC, d);
              dotProd += pixel;
            }
          }
          dx.set(dotProd * avgMultiplier, b, dxR, dxC, d);
        }
      }
    }
  }
  return backend.makeTensorInfo(dx.shape, dx.dtype, dx.values);
}
var avgPoolGradConfig = {
  kernelName: AvgPoolGrad,
  backendName: "cpu",
  kernelFunc: avgPoolGrad
};

// src/tfjs-backend-cpu/src/kernels/BatchNorm.ts
function batchNorm2(args) {
  const { inputs, backend, attrs } = args;
  const { x, scale: scale2, offset, mean: mean3, variance } = inputs;
  util_exports.assert(
    mean3.shape.length === variance.shape.length,
    () => "Batch normalization gradient requires mean and variance to have equal ranks."
  );
  util_exports.assert(
    offset == null || mean3.shape.length === offset.shape.length,
    () => "Batch normalization gradient requires mean and offset to have equal ranks."
  );
  util_exports.assert(
    scale2 == null || mean3.shape.length === scale2.shape.length,
    () => "Batch normalization gradient requires mean and scale to have equal ranks."
  );
  assertNotComplex([x, mean3, variance, scale2, offset], "batchNorm");
  let { varianceEpsilon } = attrs;
  if (varianceEpsilon == null) {
    varianceEpsilon = 1e-3;
  }
  const xVals = backend.data.get(x.dataId).values;
  const mVals = backend.data.get(mean3.dataId).values;
  const varVals = backend.data.get(variance.dataId).values;
  const sVals = scale2 ? backend.data.get(scale2.dataId).values : new Float32Array([1]);
  const offVals = offset ? backend.data.get(offset.dataId).values : new Float32Array([0]);
  const outVals = new Float32Array(xVals.length);
  const offValsLength = offVals.length;
  const sValsLength = sVals.length;
  const varValsLength = varVals.length;
  const mValsLength = mVals.length;
  let offi = 0;
  let mi = 0;
  let si = 0;
  let vi = 0;
  for (let i = 0; i < xVals.length; ++i) {
    outVals[i] = offVals[offi++] + (xVals[i] - mVals[mi++]) * sVals[si++] / Math.sqrt(varVals[vi++] + varianceEpsilon);
    if (offi >= offValsLength) {
      offi = 0;
    }
    if (mi >= mValsLength) {
      mi = 0;
    }
    if (si >= sValsLength) {
      si = 0;
    }
    if (vi >= varValsLength) {
      vi = 0;
    }
  }
  return backend.makeTensorInfo(x.shape, x.dtype, outVals);
}
var batchNormConfig = {
  kernelName: FusedBatchNorm,
  backendName: "cpu",
  kernelFunc: batchNorm2
};

// src/tfjs-backend-cpu/src/kernels/BatchToSpaceND.ts
function batchToSpaceND2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockShape, crops } = attrs;
  assertNotComplex([x], "batchToSpaceND");
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
  backend.disposeIntermediateTensorInfo(xReshaped);
  backend.disposeIntermediateTensorInfo(xTransposed);
  backend.disposeIntermediateTensorInfo(xTransposedReshaped);
  return result;
}
var batchToSpaceNDConfig = {
  kernelName: BatchToSpaceND,
  backendName: "cpu",
  kernelFunc: batchToSpaceND2
};

// src/tfjs-backend-cpu/src/kernels/Bincount.ts
function bincount2(args) {
  const { inputs, backend, attrs } = args;
  const { x, weights } = inputs;
  const { size } = attrs;
  const xVals = backend.data.get(x.dataId).values;
  const weightsVals = backend.data.get(weights.dataId).values;
  const outVals = bincountImpl(xVals, weightsVals, weights.dtype, weights.shape, size);
  return backend.makeTensorInfo([size], weights.dtype, outVals);
}
var bincountConfig = {
  kernelName: Bincount,
  backendName: "cpu",
  kernelFunc: bincount2
};

// src/tfjs-backend-cpu/src/kernels/BroadcastArgs.ts
function broadcastArgs2(args) {
  const { inputs, backend } = args;
  const { s0, s1 } = inputs;
  const s0Vals = backend.data.get(s0.dataId).values;
  const s1Vals = backend.data.get(s1.dataId).values;
  const broadcastShape = backend_util_exports.assertAndGetBroadcastShape(
    Array.from(s0Vals),
    Array.from(s1Vals)
  );
  return backend.makeTensorInfo(
    [broadcastShape.length],
    "int32",
    Int32Array.from(broadcastShape)
  );
}
var broadcastArgsConfig = {
  kernelName: BroadcastArgs,
  backendName: "cpu",
  kernelFunc: broadcastArgs2
};

// src/tfjs-backend-cpu/src/kernels/ClipByValue.ts
var clipByValue2 = unaryKernelFunc(ClipByValue, (xi, attrs) => {
  const clipAttrs = attrs;
  if (xi > clipAttrs.clipValueMax) {
    return clipAttrs.clipValueMax;
  }
  return xi < clipAttrs.clipValueMin ? clipAttrs.clipValueMin : xi;
});
var clipByValueConfig = {
  kernelName: ClipByValue,
  backendName: "cpu",
  kernelFunc: clipByValue2
};

// src/tfjs-backend-cpu/src/kernels/ComplexAbs.ts
var complexAbs = (args) => {
  const { x } = args.inputs;
  const cpuBackend = args.backend;
  const resultValues = new Float32Array(util_exports.sizeFromShape(x.shape));
  const complexVals = cpuBackend.data.get(x.dataId);
  const real3 = complexVals.complexTensorInfos.real;
  const imag3 = complexVals.complexTensorInfos.imag;
  const realVals = cpuBackend.data.get(real3.dataId).values;
  const imagVals = cpuBackend.data.get(imag3.dataId).values;
  for (let i = 0; i < realVals.length; i++) {
    const real4 = realVals[i];
    const imag4 = imagVals[i];
    resultValues[i] = Math.hypot(real4, imag4);
  }
  return cpuBackend.makeOutput(resultValues, x.shape, "float32");
};
var complexAbsConfig = {
  kernelName: ComplexAbs,
  backendName: "cpu",
  kernelFunc: complexAbs
};

// src/tfjs-backend-cpu/src/kernels/Imag.ts
function imag2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const imag3 = backend.data.get(input.dataId).complexTensorInfos.imag;
  const imagVal = backend.data.get(imag3.dataId).values;
  return backend.makeTensorInfo(imag3.shape, imag3.dtype, imagVal);
}
var imagConfig = {
  kernelName: Imag,
  backendName: "cpu",
  kernelFunc: imag2
};

// src/tfjs-backend-cpu/src/kernels/Concat.ts
function concat2(args) {
  const { inputs, backend, attrs } = args;
  const { axis } = attrs;
  const $axis = util_exports.parseAxisParam(axis, inputs[0].shape)[0];
  const shapes = inputs.map((t) => t.shape);
  backend_util_exports.assertParamsConsistent(shapes, $axis);
  let outShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), $axis);
  if (util_exports.sizeFromShape(outShape) === 0) {
    return backend.makeTensorInfo(outShape, inputs[0].dtype, []);
  }
  const $inputs = inputs.filter((t) => util_exports.sizeFromShape(t.shape) > 0);
  if ($inputs.length === 1) {
    return identity({ inputs: { x: $inputs[0] }, backend });
  }
  if ($inputs[0].dtype === "complex64") {
    const reals = $inputs.map((t) => real2({ inputs: { input: t }, backend }));
    const imags = $inputs.map((t) => imag2({ inputs: { input: t }, backend }));
    const realConcated = concat2({ inputs: reals, backend, attrs: { axis: $axis } });
    const imagConcated = concat2({ inputs: imags, backend, attrs: { axis: $axis } });
    const result = complex2({ inputs: { real: realConcated, imag: imagConcated }, backend });
    reals.forEach((r) => backend.disposeIntermediateTensorInfo(r));
    imags.forEach((i) => backend.disposeIntermediateTensorInfo(i));
    backend.disposeIntermediateTensorInfo(realConcated);
    backend.disposeIntermediateTensorInfo(imagConcated);
    return result;
  }
  const inputs2D = $inputs.map((t) => {
    const innerSize = util_exports.sizeFromShape(t.shape.slice($axis));
    const shape = [-1, innerSize];
    return reshape2({ inputs: { x: t }, backend, attrs: { shape } });
  });
  const inputsValShapes = inputs2D.map((t) => {
    return { vals: backend.data.get(t.dataId).values, shape: t.shape };
  });
  outShape = backend_util_exports.computeOutShape(
    inputs2D.map((t) => t.shape),
    1
    /* axis */
  );
  const simplyConcat = inputs2D[0].shape[0] === 1;
  const outVals = concatImpl(inputsValShapes, outShape, inputs[0].dtype, simplyConcat);
  const finalOutShape = backend_util_exports.computeOutShape($inputs.map((t) => t.shape), $axis);
  const outInfo = backend.makeTensorInfo(finalOutShape, inputs[0].dtype, outVals);
  inputs2D.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return outInfo;
}
var concatConfig = {
  kernelName: Concat,
  backendName: "cpu",
  kernelFunc: concat2
};

// src/tfjs-backend-cpu/src/kernels/Conv2D.ts
function conv2D(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dataFormat, dilations, dimRoundingMode } = attrs;
  assertNotComplex([x, filter], "conv2d");
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    dilations,
    pad2,
    dimRoundingMode,
    false,
    $dataFormat
  );
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const padLeft = convInfo.padInfo.left;
  const padTop = convInfo.padInfo.top;
  const isChannelsLast = convInfo.dataFormat === "channelsLast";
  const y = new TensorBuffer(convInfo.outShape, x.dtype);
  const xStrides = util_exports.computeStrides(x.shape);
  const filterStrides = util_exports.computeStrides(filter.shape);
  const xBatchStride = xStrides[0];
  const xRowStride = isChannelsLast ? xStrides[1] : xStrides[2];
  const xColStride = isChannelsLast ? xStrides[2] : 1;
  const xChannelStride = isChannelsLast ? 1 : xStrides[1];
  const yBatchStride = y.strides[0];
  const yRowStride = isChannelsLast ? y.strides[1] : y.strides[2];
  const yColStride = isChannelsLast ? y.strides[2] : 1;
  const yChannelStride = isChannelsLast ? 1 : y.strides[1];
  const xVals = backend.data.get(x.dataId).values;
  const wVals = backend.data.get(filter.dataId).values;
  const yVals = y.values;
  for (let b = 0; b < convInfo.batchSize; ++b) {
    const xOffset1 = b * xBatchStride;
    const yOffset1 = b * yBatchStride;
    for (let yR = 0; yR < convInfo.outHeight; ++yR) {
      const yOffset2 = yOffset1 + yR * yRowStride;
      const xRCorner = yR * convInfo.strideHeight - padTop;
      for (let wR = 0; wR < filterHeight; ++wR) {
        const xR = xRCorner + wR * dilationHeight;
        if (xR < 0 || xR >= convInfo.inHeight) {
          continue;
        }
        const wOffset1 = wR * filterStrides[0];
        const xOffset2 = xOffset1 + xR * xRowStride;
        for (let yC = 0; yC < convInfo.outWidth; ++yC) {
          const yOffset3 = yOffset2 + yC * yColStride;
          const xCCorner = yC * convInfo.strideWidth - padLeft;
          for (let wC = 0; wC < filterWidth; ++wC) {
            const xC = xCCorner + wC * dilationWidth;
            if (xC < 0 || xC >= convInfo.inWidth) {
              continue;
            }
            const wOffset2 = wOffset1 + wC * filterStrides[1];
            const xOffset3 = xOffset2 + xC * xColStride;
            let wOffset3 = wOffset2;
            for (let d1 = 0; d1 < convInfo.inChannels; ++d1) {
              const xVal = xVals[xOffset3 + d1 * xChannelStride];
              for (let d2 = 0; d2 < convInfo.outChannels; ++d2) {
                yVals[yOffset3 + d2 * yChannelStride] += xVal * wVals[wOffset3 + d2];
              }
              wOffset3 += convInfo.outChannels;
            }
          }
        }
      }
    }
  }
  return backend.makeTensorInfo(y.shape, y.dtype, yVals);
}
var conv2DConfig = {
  kernelName: Conv2D,
  backendName: "cpu",
  kernelFunc: conv2D
};

// src/tfjs-backend-cpu/src/kernels/Conv2DBackpropFilter.ts
function conv2DBackpropFilter2(args) {
  const { inputs, backend, attrs } = args;
  const { x, dy } = inputs;
  const { strides, pad: pad2, dataFormat, dimRoundingMode, filterShape } = attrs;
  assertNotComplex([x, dy], "conv2dBackpropFilter");
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filterShape,
    strides,
    1,
    pad2,
    dimRoundingMode,
    false,
    $dataFormat
  );
  const { strideHeight, strideWidth, filterHeight, filterWidth } = convInfo;
  const isChannelsLast = convInfo.dataFormat === "channelsLast";
  const dW = new TensorBuffer(convInfo.filterShape, "float32");
  const leftPad = convInfo.padInfo.left;
  const topPad = convInfo.padInfo.top;
  const xVals = backend.data.get(x.dataId).values;
  const dyVals = backend.data.get(dy.dataId).values;
  const xBuf = new TensorBuffer(x.shape, x.dtype, xVals);
  const dyBuf = new TensorBuffer(dy.shape, dy.dtype, dyVals);
  for (let wR = 0; wR < filterHeight; ++wR) {
    const yRMin = Math.max(0, Math.ceil((topPad - wR) / strideHeight));
    const yRMax = Math.min(
      convInfo.outHeight,
      (convInfo.inHeight + topPad - wR) / strideHeight
    );
    for (let wC = 0; wC < filterWidth; ++wC) {
      const yCMin = Math.max(0, Math.ceil((leftPad - wC) / strideWidth));
      const yCMax = Math.min(
        convInfo.outWidth,
        (convInfo.inWidth + leftPad - wC) / strideWidth
      );
      for (let d1 = 0; d1 < convInfo.inChannels; ++d1) {
        for (let d2 = 0; d2 < convInfo.outChannels; ++d2) {
          let dotProd = 0;
          for (let b = 0; b < convInfo.batchSize; ++b) {
            for (let yR = yRMin; yR < yRMax; ++yR) {
              const xR = wR + yR * strideHeight - topPad;
              for (let yC = yCMin; yC < yCMax; ++yC) {
                const xC = wC + yC * strideWidth - leftPad;
                if (isChannelsLast) {
                  dotProd += xBuf.get(b, xR, xC, d1) * dyBuf.get(b, yR, yC, d2);
                } else {
                  dotProd += xBuf.get(b, d1, xR, xC) * dyBuf.get(b, d2, yR, yC);
                }
              }
            }
          }
          dW.set(dotProd, wR, wC, d1, d2);
        }
      }
    }
  }
  return backend.makeTensorInfo(dW.shape, dW.dtype, dW.values);
}
var conv2DBackpropFilterConfig = {
  kernelName: Conv2DBackpropFilter,
  backendName: "cpu",
  kernelFunc: conv2DBackpropFilter2
};

// src/tfjs-backend-cpu/src/kernels/Conv2DBackpropInput.ts
function conv2DBackpropInput2(args) {
  const { inputs, backend, attrs } = args;
  const { dy, filter } = inputs;
  const { inputShape, strides, pad: pad2, dataFormat, dimRoundingMode } = attrs;
  assertNotComplex([dy, filter], "conv2dBackpropInput");
  const filterStrides = util_exports.computeStrides(filter.shape);
  const dyStrides = util_exports.computeStrides(dy.shape);
  let $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(
    inputShape,
    filter.shape,
    strides,
    1,
    pad2,
    dimRoundingMode,
    false,
    $dataFormat
  );
  const dx = new TensorBuffer(convInfo.inShape, "float32");
  const dxValues = dx.values;
  const dyValues = backend.data.get(dy.dataId).values;
  const fltValues = backend.data.get(filter.dataId).values;
  const [fltS0, fltS1, fltS2] = filterStrides;
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
  $dataFormat = convInfo.dataFormat;
  const topPad = filterHeight - 1 - convInfo.padInfo.top;
  const leftPad = filterWidth - 1 - convInfo.padInfo.left;
  const isChannelsLast = $dataFormat === "channelsLast";
  const xBatchStride = dx.strides[0];
  const xRowStride = isChannelsLast ? dx.strides[1] : dx.strides[2];
  const xColStride = isChannelsLast ? dx.strides[2] : 1;
  const xChannelStride = isChannelsLast ? 1 : dx.strides[1];
  const yBatchStride = dyStrides[0];
  const yRowStride = isChannelsLast ? dyStrides[1] : dyStrides[2];
  const yColStride = isChannelsLast ? dyStrides[2] : 1;
  const yChannelStride = isChannelsLast ? 1 : dyStrides[1];
  for (let b = 0; b < batchSize; ++b) {
    for (let d1 = 0; d1 < inChannels; ++d1) {
      for (let xR = 0; xR < inHeight; ++xR) {
        const xRCorner = xR - topPad;
        const xRMin = Math.max(0, Math.ceil(xRCorner / strideHeight));
        const yRMax = Math.min(outHeight, (filterHeight + xRCorner) / strideHeight);
        for (let xC = 0; xC < inWidth; ++xC) {
          const xCCorner = xC - leftPad;
          const xCMin = Math.max(0, Math.ceil(xCCorner / strideWidth));
          const yCMax = Math.min(outWidth, (filterWidth + xCCorner) / strideWidth);
          let dotProd = 0;
          for (let yR = xRMin; yR < yRMax; ++yR) {
            const wR = yR * strideHeight - xRCorner;
            for (let yC = xCMin; yC < yCMax; ++yC) {
              const wC = yC * strideWidth - xCCorner;
              const dyOffset = yBatchStride * b + yRowStride * yR + yColStride * yC;
              const fltOffset = fltS0 * (filterHeight - 1 - wR) + fltS1 * (filterWidth - 1 - wC) + fltS2 * d1;
              for (let d2 = 0; d2 < outChannels; ++d2) {
                const pixel = dyValues[dyOffset + yChannelStride * d2];
                const weight = fltValues[fltOffset + d2];
                dotProd += pixel * weight;
              }
            }
          }
          const dxOffset = xBatchStride * b + xRowStride * xR + xColStride * xC + xChannelStride * d1;
          dxValues[dxOffset] = dotProd;
        }
      }
    }
  }
  return backend.makeTensorInfo(dx.shape, dx.dtype, dx.values);
}
var conv2DBackpropInputConfig = {
  kernelName: Conv2DBackpropInput,
  backendName: "cpu",
  kernelFunc: conv2DBackpropInput2
};

// src/tfjs-backend-cpu/src/kernels/Conv3D.ts
function conv3D(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dilations } = attrs;
  assertNotComplex([x, filter], "conv3d");
  const convInfo = backend_util_exports.computeConv3DInfo(
    x.shape,
    filter.shape,
    strides,
    dilations,
    pad2
  );
  const {
    filterDepth,
    filterHeight,
    filterWidth,
    dilationDepth,
    dilationHeight,
    dilationWidth,
    padInfo
  } = convInfo;
  const padFront = padInfo.front;
  const padLeft = padInfo.left;
  const padTop = padInfo.top;
  const y = new TensorBuffer(convInfo.outShape, x.dtype);
  const xVals = backend.data.get(x.dataId).values;
  const wVals = backend.data.get(filter.dataId).values;
  const yVals = y.values;
  const xStrides = util_exports.computeStrides(x.shape);
  const filterStrides = util_exports.computeStrides(filter.shape);
  for (let b = 0; b < convInfo.batchSize; ++b) {
    const xOffset1 = b * xStrides[0];
    const yOffset1 = b * y.strides[0];
    for (let yF = 0; yF < convInfo.outDepth; ++yF) {
      const yOffset2 = yOffset1 + yF * y.strides[1];
      const xFCorner = yF * convInfo.strideDepth - padFront;
      for (let wF = 0; wF < filterDepth; ++wF) {
        const xF = xFCorner + wF * dilationDepth;
        if (xF < 0 || xF >= convInfo.inDepth) {
          continue;
        }
        const wOffset1 = wF * filterStrides[0];
        const xOffset2 = xOffset1 + xF * xStrides[1];
        for (let yR = 0; yR < convInfo.outHeight; ++yR) {
          const yOffset3 = yOffset2 + yR * y.strides[2];
          const xRCorner = yR * convInfo.strideHeight - padTop;
          for (let wR = 0; wR < filterHeight; ++wR) {
            const xR = xRCorner + wR * dilationHeight;
            if (xR < 0 || xR >= convInfo.inHeight) {
              continue;
            }
            const wOffset2 = wOffset1 + wR * filterStrides[1];
            const xOffset3 = xOffset2 + xR * xStrides[2];
            for (let yC = 0; yC < convInfo.outWidth; ++yC) {
              const yOffset4 = yOffset3 + yC * convInfo.outChannels;
              const xCCorner = yC * convInfo.strideWidth - padLeft;
              for (let wC = 0; wC < filterWidth; ++wC) {
                const xC = xCCorner + wC * dilationWidth;
                if (xC < 0 || xC >= convInfo.inWidth) {
                  continue;
                }
                const wOffset3 = wOffset2 + wC * filterStrides[2];
                const xOffset4 = xOffset3 + xC * convInfo.inChannels;
                let wOffset4 = wOffset3;
                for (let d1 = 0; d1 < convInfo.inChannels; ++d1) {
                  const xVal = xVals[xOffset4 + d1];
                  for (let d2 = 0; d2 < convInfo.outChannels; ++d2) {
                    yVals[yOffset4 + d2] += xVal * wVals[wOffset4 + d2];
                  }
                  wOffset4 += convInfo.outChannels;
                }
              }
            }
          }
        }
      }
    }
  }
  return backend.makeTensorInfo(y.shape, y.dtype, y.values);
}
var conv3DConfig = {
  kernelName: Conv3D,
  backendName: "cpu",
  kernelFunc: conv3D
};

// src/tfjs-backend-cpu/src/kernels/Conv3DBackpropFilterV2.ts
function conv3DBackpropFilterV2(args) {
  const { inputs, backend, attrs } = args;
  const { x, dy } = inputs;
  const { strides, pad: pad2, filterShape } = attrs;
  assertNotComplex([x, dy], "conv3dBackpropFilterV2");
  const xStrides = util_exports.computeStrides(x.shape);
  const dyStrides = util_exports.computeStrides(dy.shape);
  const convInfo = backend_util_exports.computeConv3DInfo(
    x.shape,
    filterShape,
    strides,
    1,
    pad2
  );
  const strideDepth = convInfo.strideDepth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const filterDepth = convInfo.filterDepth;
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const dw = new TensorBuffer(convInfo.filterShape, "float32");
  const dwValues = dw.values;
  const [dwS0, dwS1, dwS2, dwS3] = dw.strides;
  const dyValues = backend.data.get(dy.dataId).values;
  const [dyS0, dyS1, dyS2, dyS3] = dyStrides;
  const xValues = backend.data.get(x.dataId).values;
  const [xS0, xS1, xS2, xS3] = xStrides;
  const frontPad = convInfo.padInfo.front;
  const leftPad = convInfo.padInfo.left;
  const topPad = convInfo.padInfo.top;
  for (let wF = 0; wF < filterDepth; ++wF) {
    const yFMin = Math.max(0, Math.ceil((frontPad - wF) / strideDepth));
    const yFMax = Math.min(
      convInfo.outDepth,
      (convInfo.inDepth + frontPad - wF) / strideDepth
    );
    const wOffset1 = wF * dwS0;
    for (let wR = 0; wR < filterHeight; ++wR) {
      const yRMin = Math.max(0, Math.ceil((topPad - wR) / strideHeight));
      const yRMax = Math.min(
        convInfo.outHeight,
        (convInfo.inHeight + topPad - wR) / strideHeight
      );
      const wOffset2 = wR * dwS1 + wOffset1;
      for (let wC = 0; wC < filterWidth; ++wC) {
        const yCMin = Math.max(0, Math.ceil((leftPad - wC) / strideWidth));
        const yCMax = Math.min(
          convInfo.outWidth,
          (convInfo.inWidth + leftPad - wC) / strideWidth
        );
        const wOffset3 = wC * dwS2 + wOffset2;
        for (let d1 = 0; d1 < convInfo.inChannels; ++d1) {
          const wOffset4 = d1 * dwS3 + wOffset3;
          for (let d2 = 0; d2 < convInfo.outChannels; ++d2) {
            let dotProd = 0;
            for (let b = 0; b < convInfo.batchSize; ++b) {
              const xOffset1 = b * xS0;
              const yOffset1 = b * dyS0;
              for (let yF = yFMin; yF < yFMax; ++yF) {
                const xF = wF + yF * strideDepth - frontPad;
                const xOffset2 = xF * xS1 + xOffset1;
                const yOffset2 = yF * dyS1 + yOffset1;
                for (let yR = yRMin; yR < yRMax; ++yR) {
                  const xR = wR + yR * strideHeight - topPad;
                  const xOffset3 = xR * xS2 + xOffset2;
                  const yOffset3 = yR * dyS2 + yOffset2;
                  for (let yC = yCMin; yC < yCMax; ++yC) {
                    const xC = wC + yC * strideWidth - leftPad;
                    const xOffset4 = xC * xS3 + xOffset3;
                    const yOffset4 = yC * dyS3 + yOffset3;
                    dotProd += xValues[xOffset4 + d1] * dyValues[yOffset4 + d2];
                  }
                }
              }
            }
            dwValues[wOffset4 + d2] = dotProd;
          }
        }
      }
    }
  }
  return backend.makeTensorInfo(dw.shape, dw.dtype, dw.values);
}
var conv3DBackpropFilterV2Config = {
  kernelName: Conv3DBackpropFilterV2,
  backendName: "cpu",
  kernelFunc: conv3DBackpropFilterV2
};

// src/tfjs-backend-cpu/src/kernels/Conv3DBackpropInputV2.ts
function conv3DBackpropInputV2(args) {
  const { inputs, backend, attrs } = args;
  const { dy, filter } = inputs;
  const { pad: pad2, strides, inputShape } = attrs;
  assertNotComplex([dy], "conv3dBackpropInputV2");
  const dyStrides = util_exports.computeStrides(dy.shape);
  const filterStrides = util_exports.computeStrides(filter.shape);
  const convInfo = backend_util_exports.computeConv3DInfo(
    inputShape,
    filter.shape,
    strides,
    1,
    pad2
  );
  const dx = new TensorBuffer(convInfo.inShape, "float32");
  const dxValues = dx.values;
  const [dxS0, dxS1, dxS2, dxS3] = dx.strides;
  const dyValues = backend.data.get(dy.dataId).values;
  const [dyS0, dyS1, dyS2, dyS3] = dyStrides;
  const fltValues = backend.data.get(filter.dataId).values;
  const [fltS0, fltS1, fltS2, fltS3] = filterStrides;
  const {
    batchSize,
    filterDepth,
    filterHeight,
    filterWidth,
    inChannels,
    inDepth,
    inHeight,
    inWidth,
    outChannels,
    outDepth,
    outHeight,
    outWidth,
    strideDepth,
    strideHeight,
    strideWidth
  } = convInfo;
  const frontPad = filterDepth - 1 - convInfo.padInfo.front;
  const topPad = filterHeight - 1 - convInfo.padInfo.top;
  const leftPad = filterWidth - 1 - convInfo.padInfo.left;
  for (let b = 0; b < batchSize; ++b) {
    for (let d1 = 0; d1 < inChannels; ++d1) {
      for (let xF = 0; xF < inDepth; ++xF) {
        const xFCorner = xF - frontPad;
        const xFMin = Math.max(0, Math.ceil(xFCorner / strideDepth));
        const yFMax = Math.min(outDepth, (filterDepth + xFCorner) / strideDepth);
        for (let xR = 0; xR < inHeight; ++xR) {
          const xRCorner = xR - topPad;
          const xRMin = Math.max(0, Math.ceil(xRCorner / strideHeight));
          const yRMax = Math.min(outHeight, (filterHeight + xRCorner) / strideHeight);
          for (let xC = 0; xC < inWidth; ++xC) {
            const xCCorner = xC - leftPad;
            const xCMin = Math.max(0, Math.ceil(xCCorner / strideWidth));
            const yCMax = Math.min(outWidth, (filterWidth + xCCorner) / strideWidth);
            let dotProd = 0;
            for (let yF = xFMin; yF < yFMax; ++yF) {
              const wF = yF * strideDepth - xFCorner;
              for (let yR = xRMin; yR < yRMax; ++yR) {
                const wR = yR * strideHeight - xRCorner;
                for (let yC = xCMin; yC < yCMax; ++yC) {
                  const wC = yC * strideWidth - xCCorner;
                  const dyOffset = dyS0 * b + dyS1 * yF + dyS2 * yR + dyS3 * yC;
                  const fltOffset = fltS0 * (filterDepth - 1 - wF) + fltS1 * (filterHeight - 1 - wR) + fltS2 * (filterWidth - 1 - wC) + fltS3 * d1;
                  for (let d2 = 0; d2 < outChannels; ++d2) {
                    const pixel = dyValues[dyOffset + d2];
                    const weight = fltValues[fltOffset + d2];
                    dotProd += pixel * weight;
                  }
                }
              }
            }
            dxValues[dxS0 * b + dxS1 * xF + dxS2 * xR + dxS3 * xC + d1] = dotProd;
          }
        }
      }
    }
  }
  return backend.makeTensorInfo(dx.shape, dx.dtype, dx.values);
}
var conv3DBackpropInputV2Config = {
  kernelName: Conv3DBackpropInputV2,
  backendName: "cpu",
  kernelFunc: conv3DBackpropInputV2
};

// src/tfjs-backend-cpu/src/kernels/Cos.ts
var cos2 = unaryKernelFunc(Cos, (xi) => Math.cos(xi));
var cosConfig = {
  kernelName: Cos,
  backendName: "cpu",
  kernelFunc: cos2
};

// src/tfjs-backend-cpu/src/kernels/Cosh.ts
var cosh2 = unaryKernelFunc(Cosh, (xi) => Math.cosh(xi));
var coshConfig = {
  kernelName: Cosh,
  backendName: "cpu",
  kernelFunc: cosh2
};

// src/tfjs-backend-cpu/src/kernels/CropAndResize.ts
function cropAndResize2(args) {
  const { inputs, backend, attrs } = args;
  const { image, boxes, boxInd } = inputs;
  const { cropSize, method, extrapolationValue } = attrs;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  const numBoxes = boxes.shape[0];
  const [cropHeight, cropWidth] = cropSize;
  const output = buffer([numBoxes, cropHeight, cropWidth, numChannels], "float32");
  const boxVals = backend.data.get(boxes.dataId).values;
  const boxIndVals = backend.data.get(boxInd.dataId).values;
  const imageVals = backend.data.get(image.dataId).values;
  const inStride = util_exports.computeStrides(image.shape);
  const outStride = util_exports.computeStrides(
    output.shape
  );
  for (let b = 0; b < numBoxes; b++) {
    const startInd = b * 4;
    const y1 = boxVals[startInd];
    const x1 = boxVals[startInd + 1];
    const y2 = boxVals[startInd + 2];
    const x2 = boxVals[startInd + 3];
    const bInd = boxIndVals[b];
    if (bInd >= batch) {
      continue;
    }
    const heightScale = cropHeight > 1 ? (y2 - y1) * (imageHeight - 1) / (cropHeight - 1) : 0;
    const widthScale = cropWidth > 1 ? (x2 - x1) * (imageWidth - 1) / (cropWidth - 1) : 0;
    for (let y = 0; y < cropHeight; y++) {
      const yInd = cropHeight > 1 ? y1 * (imageHeight - 1) + y * heightScale : 0.5 * (y1 + y2) * (imageHeight - 1);
      if (yInd < 0 || yInd > imageHeight - 1) {
        for (let x = 0; x < cropWidth; x++) {
          for (let c = 0; c < numChannels; c++) {
            const ind = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
            output.values[ind] = extrapolationValue;
          }
        }
        continue;
      }
      if (method === "bilinear") {
        const topInd = Math.floor(yInd);
        const bottomInd = Math.ceil(yInd);
        const yLerp = yInd - topInd;
        for (let x = 0; x < cropWidth; x++) {
          const xInd = cropWidth > 1 ? x1 * (imageWidth - 1) + x * widthScale : 0.5 * (x1 + x2) * (imageWidth - 1);
          if (xInd < 0 || xInd > imageWidth - 1) {
            for (let c = 0; c < numChannels; c++) {
              const ind = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
              output.values[ind] = extrapolationValue;
            }
            continue;
          }
          const leftInd = Math.floor(xInd);
          const rightInd = Math.ceil(xInd);
          const xLerp = xInd - leftInd;
          for (let c = 0; c < numChannels; c++) {
            let ind = c + leftInd * inStride[2] + topInd * inStride[1] + bInd * inStride[0];
            const topLeft = imageVals[ind];
            ind = c + rightInd * inStride[2] + topInd * inStride[1] + bInd * inStride[0];
            const topRight = imageVals[ind];
            ind = c + leftInd * inStride[2] + bottomInd * inStride[1] + bInd * inStride[0];
            const bottomLeft = imageVals[ind];
            ind = c + rightInd * inStride[2] + bottomInd * inStride[1] + bInd * inStride[0];
            const bottomRight = imageVals[ind];
            const top = topLeft + (topRight - topLeft) * xLerp;
            const bottom = bottomLeft + (bottomRight - bottomLeft) * xLerp;
            ind = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
            output.values[ind] = top + (bottom - top) * yLerp;
          }
        }
      } else {
        for (let x = 0; x < cropWidth; ++x) {
          const xInd = cropWidth > 1 ? x1 * (imageWidth - 1) + x * widthScale : 0.5 * (x1 + x2) * (imageWidth - 1);
          if (xInd < 0 || xInd > imageWidth - 1) {
            for (let c = 0; c < numChannels; c++) {
              const ind = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
              output.values[ind] = extrapolationValue;
            }
            continue;
          }
          const closestX = Math.round(xInd);
          const closestY = Math.round(yInd);
          for (let c = 0; c < numChannels; c++) {
            const inInd = c + closestX * inStride[2] + closestY * inStride[1] + bInd * inStride[0];
            const outInd = c + x * outStride[2] + y * outStride[1] + b * outStride[0];
            output.values[outInd] = imageVals[inInd];
          }
        }
      }
    }
  }
  return backend.makeTensorInfo(output.shape, output.dtype, output.values);
}
var cropAndResizeConfig = {
  kernelName: CropAndResize,
  backendName: "cpu",
  kernelFunc: cropAndResize2
};

// src/tfjs-backend-cpu/src/kernels/Cumprod.ts
function cumprod2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, exclusive, reverse: reverse3 } = attrs;
  assertNotComplex(x, "cumprod");
  const permutation = backend_util_exports.getAxesPermutation([axis], x.shape.length);
  let $x = x;
  if (permutation != null) {
    $x = transpose2({ inputs: { x }, backend, attrs: { perm: permutation } });
  }
  const permutedAxis = backend_util_exports.getInnerMostAxes(1, x.shape.length)[0];
  if (permutedAxis !== $x.shape.length - 1) {
    throw new Error(
      `backend.cumprod in CPU expects an inner-most axis=${$x.shape.length - 1} but got axis=${permutedAxis}`
    );
  }
  const resultDtype = upcastType($x.dtype, "int32");
  const vals = util_exports.makeOnesTypedArray(
    util_exports.sizeFromShape($x.shape),
    resultDtype
  );
  const aVals = backend.data.get($x.dataId).values;
  const finalDim = $x.shape[$x.shape.length - 1];
  const indexAdjuster = reverse3 ? (i, j) => i + finalDim - j - 1 : (i, j) => i + j;
  for (let i = 0; i < aVals.length; i += finalDim) {
    for (let j = 0; j < finalDim; j++) {
      const idx = indexAdjuster(i, j);
      if (j === 0) {
        vals[idx] = exclusive ? 1 : aVals[idx];
      } else {
        const prevIdx = indexAdjuster(i, j - 1);
        vals[idx] = exclusive ? aVals[prevIdx] * vals[prevIdx] : aVals[idx] * vals[prevIdx];
      }
    }
  }
  const result = backend.makeTensorInfo($x.shape, resultDtype, vals);
  if (permutation != null) {
    const reversePermutation = backend_util_exports.getUndoAxesPermutation(permutation);
    const reverseTransposedResult = transpose2(
      { inputs: { x: result }, backend, attrs: { perm: reversePermutation } }
    );
    backend.disposeIntermediateTensorInfo(result);
    backend.disposeIntermediateTensorInfo($x);
    return reverseTransposedResult;
  }
  return result;
}
var cumprodConfig = {
  kernelName: Cumprod,
  backendName: "cpu",
  kernelFunc: cumprod2
};

// src/tfjs-backend-cpu/src/kernels/Cumsum.ts
function cumsum2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, exclusive, reverse: reverse3 } = attrs;
  assertNotComplex(x, "cumsum");
  const permutation = backend_util_exports.getAxesPermutation([axis], x.shape.length);
  let $x = x;
  if (permutation != null) {
    $x = transpose2({ inputs: { x }, backend, attrs: { perm: permutation } });
  }
  const permutedAxis = backend_util_exports.getInnerMostAxes(1, x.shape.length)[0];
  if (permutedAxis !== $x.shape.length - 1) {
    throw new Error(
      `backend.cumsum in CPU expects an inner-most axis=${$x.shape.length - 1} but got axis=${permutedAxis}`
    );
  }
  const resultDtype = upcastType($x.dtype, "int32");
  const vals = util_exports.makeZerosTypedArray(
    util_exports.sizeFromShape($x.shape),
    resultDtype
  );
  const aVals = backend.data.get($x.dataId).values;
  const finalDim = $x.shape[$x.shape.length - 1];
  const indexAdjuster = reverse3 ? (i, j) => i + finalDim - j - 1 : (i, j) => i + j;
  for (let i = 0; i < aVals.length; i += finalDim) {
    for (let j = 0; j < finalDim; j++) {
      const idx = indexAdjuster(i, j);
      if (j === 0) {
        vals[idx] = exclusive ? 0 : aVals[idx];
      } else {
        const prevIdx = indexAdjuster(i, j - 1);
        vals[idx] = exclusive ? aVals[prevIdx] + vals[prevIdx] : aVals[idx] + vals[prevIdx];
      }
    }
  }
  const result = backend.makeTensorInfo($x.shape, resultDtype, vals);
  if (permutation != null) {
    const reversePermutation = backend_util_exports.getUndoAxesPermutation(permutation);
    const reverseTransposedResult = transpose2(
      { inputs: { x: result }, backend, attrs: { perm: reversePermutation } }
    );
    backend.disposeIntermediateTensorInfo(result);
    backend.disposeIntermediateTensorInfo($x);
    return reverseTransposedResult;
  }
  return result;
}
var cumsumConfig = {
  kernelName: Cumsum,
  backendName: "cpu",
  kernelFunc: cumsum2
};

// src/tfjs-backend-cpu/src/kernels/DenseBincount.ts
function denseBincount2(args) {
  const { inputs, backend, attrs } = args;
  const { x, weights } = inputs;
  const { size, binaryOutput } = attrs;
  if (x.shape.length === 1) {
    const xVals = backend.data.get(x.dataId).values;
    const weightsVals = backend.data.get(weights.dataId).values;
    const outVals = bincountImpl(xVals, weightsVals, weights.dtype, weights.shape, size);
    return backend.makeTensorInfo([size], weights.dtype, outVals);
  } else if (x.shape.length === 2) {
    const xBuf = backend.bufferSync(x);
    const weightsBuf = backend.bufferSync(weights);
    const outBuf = bincountReduceImpl(xBuf, weightsBuf, size, binaryOutput);
    return backend.makeTensorInfo(outBuf.shape, weights.dtype, outBuf.values);
  }
  throw new Error(
    `Error in denseBincount: input must be at most rank 2, but got rank${x.shape.length}.`
  );
}
var denseBincountConfig = {
  kernelName: DenseBincount,
  backendName: "cpu",
  kernelFunc: denseBincount2
};

// src/tfjs-backend-cpu/src/kernels/DepthToSpace.ts
function depthToSpace2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockSize, dataFormat } = attrs;
  util_exports.assert(
    dataFormat === "NHWC",
    () => `Only NHWC dataFormat supported on CPU for depthToSpace. Got ${dataFormat}`
  );
  const batchSize = x.shape[0];
  const inputHeight = x.shape[1];
  const inputWidth = x.shape[2];
  const inputDepth = x.shape[3];
  const outputHeight = inputHeight * blockSize;
  const outputWidth = inputWidth * blockSize;
  const outputDepth = inputDepth / (blockSize * blockSize);
  const xValues = backend.data.get(x.dataId).values;
  const result = new Float32Array(batchSize * outputHeight * outputWidth * outputDepth);
  let outputIdx = 0;
  for (let b = 0; b < batchSize; ++b) {
    for (let h = 0; h < outputHeight; ++h) {
      const inH = Math.floor(h / blockSize);
      const offsetH = h % blockSize;
      for (let w = 0; w < outputWidth; ++w) {
        const inW = Math.floor(w / blockSize);
        const offsetW = w % blockSize;
        const offsetD = (offsetH * blockSize + offsetW) * outputDepth;
        for (let d = 0; d < outputDepth; ++d) {
          const inD = d + offsetD;
          const inputIdx = inD + inputDepth * (inW + inputWidth * (inH + inputHeight * b));
          result[outputIdx++] = xValues[inputIdx];
        }
      }
    }
  }
  return backend.makeTensorInfo(
    [batchSize, outputHeight, outputWidth, outputDepth],
    x.dtype,
    result
  );
}
var depthToSpaceConfig = {
  kernelName: DepthToSpace,
  backendName: "cpu",
  kernelFunc: depthToSpace2
};

// src/tfjs-backend-cpu/src/kernels/DepthwiseConv2dNative.ts
function depthwiseConv2dNative(args) {
  const { inputs, backend, attrs } = args;
  const { x, filter } = inputs;
  const { strides, pad: pad2, dilations, dimRoundingMode } = attrs;
  assertNotComplex([x, filter], "depthwiseConv2DNative");
  const xStrides = util_exports.computeStrides(x.shape);
  const filterStrides = util_exports.computeStrides(filter.shape);
  let $dilations = dilations;
  if ($dilations == null) {
    $dilations = [1, 1];
  }
  util_exports.assert(
    backend_util_exports.eitherStridesOrDilationsAreOne(strides, $dilations),
    () => `Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${$dilations}'`
  );
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    $dilations,
    pad2,
    dimRoundingMode,
    true
    /* depthwise */
  );
  const { filterHeight, filterWidth, dilationHeight, dilationWidth, padInfo } = convInfo;
  const padLeft = padInfo.left;
  const padTop = padInfo.top;
  const chMul = convInfo.outChannels / convInfo.inChannels;
  const y = new TensorBuffer(convInfo.outShape, x.dtype);
  const xVals = backend.data.get(x.dataId).values;
  const wVals = backend.data.get(filter.dataId).values;
  const yVals = y.values;
  for (let b = 0; b < convInfo.batchSize; ++b) {
    const xOffset1 = b * xStrides[0];
    const yOffset1 = b * y.strides[0];
    for (let yR = 0; yR < convInfo.outHeight; ++yR) {
      const yOffset2 = yOffset1 + yR * y.strides[1];
      const xRCorner = yR * convInfo.strideHeight - padTop;
      for (let wR = 0; wR < filterHeight; ++wR) {
        const xR = xRCorner + wR * dilationHeight;
        if (xR < 0 || xR >= convInfo.inHeight) {
          continue;
        }
        const wOffset1 = wR * filterStrides[0];
        const xOffset2 = xOffset1 + xR * xStrides[1];
        for (let yC = 0; yC < convInfo.outWidth; ++yC) {
          const yOffset3 = yOffset2 + yC * y.strides[2];
          const xCCorner = yC * convInfo.strideWidth - padLeft;
          for (let wC = 0; wC < filterWidth; ++wC) {
            const xC = xCCorner + wC * dilationWidth;
            if (xC < 0 || xC >= convInfo.inWidth) {
              continue;
            }
            const wOffset2 = wOffset1 + wC * filterStrides[1];
            const xOffset3 = xOffset2 + xC * convInfo.inChannels;
            let yOffset4 = yOffset3;
            let wOffset3 = wOffset2;
            for (let d1 = 0; d1 < convInfo.inChannels; ++d1) {
              const xVal = xVals[xOffset3 + d1];
              for (let q = 0; q < chMul; ++q) {
                yVals[yOffset4 + q] += xVal * wVals[wOffset3 + q];
              }
              yOffset4 += chMul;
              wOffset3 += chMul;
            }
          }
        }
      }
    }
  }
  return backend.makeTensorInfo(y.shape, y.dtype, y.values);
}
var depthwiseConv2dNativeConfig = {
  kernelName: DepthwiseConv2dNative,
  backendName: "cpu",
  kernelFunc: depthwiseConv2dNative
};

// src/tfjs-backend-cpu/src/kernels/DepthwiseConv2dNativeBackpropFilter.ts
function depthwiseConv2dNativeBackpropFilter2(args) {
  const { inputs, backend, attrs } = args;
  const { x, dy } = inputs;
  const { strides, dilations, pad: pad2, dimRoundingMode, filterShape } = attrs;
  assertNotComplex([x, dy], "depthwiseConv2dNativeBackpropFilter");
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filterShape,
    strides,
    dilations,
    pad2,
    dimRoundingMode,
    true
    /* depthwise */
  );
  const { strideHeight, strideWidth, filterHeight, filterWidth } = convInfo;
  const dW = new TensorBuffer(convInfo.filterShape, "float32");
  const leftPad = convInfo.padInfo.left;
  const topPad = convInfo.padInfo.top;
  const chMul = convInfo.outChannels / convInfo.inChannels;
  const xVals = backend.data.get(x.dataId).values;
  const xBuf = new TensorBuffer(x.shape, x.dtype, xVals);
  const dyVals = backend.data.get(dy.dataId).values;
  const dyBuf = new TensorBuffer(dy.shape, dy.dtype, dyVals);
  for (let wR = 0; wR < filterHeight; ++wR) {
    const yRMin = Math.max(0, Math.ceil((topPad - wR) / strideHeight));
    const yRMax = Math.min(
      convInfo.outHeight,
      (convInfo.inHeight + topPad - wR) / strideHeight
    );
    for (let wC = 0; wC < filterWidth; ++wC) {
      const yCMin = Math.max(0, Math.ceil((leftPad - wC) / strideWidth));
      const yCMax = Math.min(
        convInfo.outWidth,
        (convInfo.inWidth + leftPad - wC) / strideWidth
      );
      for (let d2 = 0; d2 < convInfo.outChannels; ++d2) {
        const d1 = Math.trunc(d2 / chMul);
        const dm = d2 % chMul;
        let dotProd = 0;
        for (let b = 0; b < convInfo.batchSize; ++b) {
          for (let yR = yRMin; yR < yRMax; ++yR) {
            const xR = wR + yR * strideHeight - topPad;
            for (let yC = yCMin; yC < yCMax; ++yC) {
              const xC = wC + yC * strideWidth - leftPad;
              dotProd += xBuf.get(b, xR, xC, d1) * dyBuf.get(b, yR, yC, d2);
            }
          }
        }
        dW.set(dotProd, wR, wC, d1, dm);
      }
    }
  }
  return backend.makeTensorInfo(dW.shape, dW.dtype, dW.values);
}
var depthwiseConv2dNativeBackpropFilterConfig = {
  kernelName: DepthwiseConv2dNativeBackpropFilter,
  backendName: "cpu",
  kernelFunc: depthwiseConv2dNativeBackpropFilter2
};

// src/tfjs-backend-cpu/src/kernels/DepthwiseConv2dNativeBackpropInput.ts
function depthwiseConv2dNativeBackpropInput2(args) {
  const { inputs, backend, attrs } = args;
  const { dy, filter } = inputs;
  const { strides, dilations, pad: pad2, dimRoundingMode, inputShape } = attrs;
  assertNotComplex([dy, filter], "depthwiseConv2DNativeBackpropInput");
  const dyStrides = util_exports.computeStrides(dy.shape);
  const filterStrides = util_exports.computeStrides(filter.shape);
  const convInfo = backend_util_exports.computeConv2DInfo(
    inputShape,
    filter.shape,
    strides,
    dilations,
    pad2,
    dimRoundingMode,
    true
    /* depthwise */
  );
  const dx = new TensorBuffer(convInfo.inShape, "float32");
  const dxValues = dx.values;
  const [dxS0, dxS1, dxS2] = dx.strides;
  const dyValues = backend.data.get(dy.dataId).values;
  const [dyS0, dyS1, dyS2] = dyStrides;
  const fltValues = backend.data.get(filter.dataId).values;
  const [fltS0, fltS1, fltS2] = filterStrides;
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
  const chMul = outChannels / inChannels;
  for (let b = 0; b < batchSize; ++b) {
    for (let d1 = 0; d1 < inChannels; ++d1) {
      for (let xR = 0; xR < inHeight; ++xR) {
        const xRCorner = xR - topPad;
        const xRMin = Math.max(0, Math.ceil(xRCorner / strideHeight));
        const yRMax = Math.min(outHeight, (filterHeight + xRCorner) / strideHeight);
        for (let xC = 0; xC < inWidth; ++xC) {
          const xCCorner = xC - leftPad;
          const xCMin = Math.max(0, Math.ceil(xCCorner / strideWidth));
          const yCMax = Math.min(outWidth, (filterWidth + xCCorner) / strideWidth);
          let dotProd = 0;
          for (let yR = xRMin; yR < yRMax; ++yR) {
            const wR = yR * strideHeight - xRCorner;
            for (let yC = xCMin; yC < yCMax; ++yC) {
              const wC = yC * strideWidth - xCCorner;
              const dyOffset = dyS0 * b + dyS1 * yR + dyS2 * yC;
              const fltOffset = fltS0 * (filterHeight - 1 - wR) + fltS1 * (filterWidth - 1 - wC) + fltS2 * d1;
              for (let dm = 0; dm < chMul; ++dm) {
                const d2 = d1 * chMul + dm;
                const pixel = dyValues[dyOffset + d2];
                const weight = fltValues[fltOffset + dm];
                dotProd += pixel * weight;
              }
            }
          }
          dxValues[dxS0 * b + dxS1 * xR + dxS2 * xC + d1] = dotProd;
        }
      }
    }
  }
  return backend.makeTensorInfo(dx.shape, dx.dtype, dx.values);
}
var depthwiseConv2dNativeBackpropInputConfig = {
  kernelName: DepthwiseConv2dNativeBackpropInput,
  backendName: "cpu",
  kernelFunc: depthwiseConv2dNativeBackpropInput2
};

// src/tfjs-backend-cpu/src/kernels/Diag.ts
function diag2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  const xSize = util_exports.sizeFromShape(x.shape);
  const xVals = backend.data.get(x.dataId).values;
  const outBuf = buffer([xSize, xSize], x.dtype);
  const vals = outBuf.values;
  for (let i = 0; i < xVals.length; i++) {
    vals[i * xSize + i] = xVals[i];
  }
  const outShape = [...x.shape, ...x.shape];
  return backend.makeTensorInfo(outShape, outBuf.dtype, outBuf.values);
}
var diagConfig = {
  kernelName: Diag,
  backendName: "cpu",
  kernelFunc: diag2
};

// src/tfjs-backend-cpu/src/kernels/Dilation2D.ts
var dilation2DConfig = {
  kernelName: Dilation2D,
  backendName: "cpu",
  kernelFunc: ({ inputs, backend, attrs }) => {
    const { x, filter } = inputs;
    const { strides, pad: pad2, dilations } = attrs;
    const cpuBackend = backend;
    const xVals = cpuBackend.data.get(x.dataId).values;
    const xRank = x.shape.length;
    const filterVals = cpuBackend.data.get(filter.dataId).values;
    const filterRank = filter.shape.length;
    const {
      batchSize,
      inHeight,
      inWidth,
      inChannels,
      outHeight,
      outWidth,
      padInfo,
      strideHeight,
      strideWidth,
      filterHeight,
      filterWidth,
      dilationHeight,
      dilationWidth,
      outShape
    } = backend_util_exports.computeDilation2DInfo(
      x.shape,
      filter.shape,
      strides,
      pad2,
      "NHWC",
      dilations
    );
    const outSize = util_exports.sizeFromShape(outShape);
    const outRank = outShape.length;
    const outputVals = util_exports.getArrayFromDType(x.dtype, outSize);
    for (let b = 0; b < batchSize; ++b) {
      for (let hOut = 0; hOut < outHeight; ++hOut) {
        const hBeg = hOut * strideHeight - padInfo.top;
        for (let wOut = 0; wOut < outWidth; ++wOut) {
          const wBeg = wOut * strideWidth - padInfo.left;
          for (let d = 0; d < inChannels; ++d) {
            let curVal = Number.MIN_SAFE_INTEGER;
            for (let h = 0; h < filterHeight; ++h) {
              const hIn = hBeg + h * dilationHeight;
              if (hIn >= 0 && hIn < inHeight) {
                for (let w = 0; w < filterWidth; ++w) {
                  const wIn = wBeg + w * dilationWidth;
                  if (wIn >= 0 && wIn < inWidth) {
                    const xIndex = util_exports.locToIndex(
                      [b, hIn, wIn, d],
                      xRank,
                      util_exports.computeStrides(x.shape)
                    );
                    const filterIndex = util_exports.locToIndex(
                      [h, w, d],
                      filterRank,
                      util_exports.computeStrides(filter.shape)
                    );
                    const val = xVals[xIndex] + filterVals[filterIndex];
                    if (val > curVal) {
                      curVal = val;
                    }
                  }
                }
              }
            }
            const outputIndex = util_exports.locToIndex(
              [b, hOut, wOut, d],
              outRank,
              util_exports.computeStrides(outShape)
            );
            outputVals[outputIndex] = curVal;
          }
        }
      }
    }
    const dataId = cpuBackend.write(
      util_exports.toTypedArray(outputVals, x.dtype),
      outShape,
      x.dtype
    );
    return { dataId, shape: outShape, dtype: x.dtype };
  }
};

// src/tfjs-backend-cpu/src/kernels/Dilation2DBackpropFilter.ts
var dilation2DBackpropFilterConfig = {
  kernelName: Dilation2DBackpropFilter,
  backendName: "cpu",
  kernelFunc: ({ inputs, backend, attrs }) => {
    const { x, filter, dy } = inputs;
    const { strides, pad: pad2, dilations } = attrs;
    const cpuBackend = backend;
    const $x = util_exports.toNestedArray(
      x.shape,
      cpuBackend.data.get(x.dataId).values
    );
    const $filter = util_exports.toNestedArray(
      filter.shape,
      cpuBackend.data.get(filter.dataId).values
    );
    const {
      batchSize,
      inHeight,
      inWidth,
      inChannels,
      outHeight,
      outWidth,
      padInfo,
      strideHeight,
      strideWidth,
      filterHeight,
      filterWidth,
      dilationHeight,
      dilationWidth,
      outShape
    } = backend_util_exports.computeDilation2DInfo(
      x.shape,
      filter.shape,
      strides,
      pad2,
      "NHWC",
      dilations
    );
    util_exports.assert(
      dy.rank === outShape.length,
      () => `Error in ${Dilation2DBackpropFilter}, dy must have the same rank as output ${outShape.length}, but got ${dy.rank}`
    );
    const $dy = util_exports.toNestedArray(
      outShape,
      cpuBackend.data.get(dy.dataId).values
    );
    const gradients = util_exports.makeZerosNestedTypedArray(
      filter.shape,
      filter.dtype
    );
    for (let b = 0; b < batchSize; ++b) {
      for (let hOut = 0; hOut < outHeight; ++hOut) {
        const hBeg = hOut * strideHeight - padInfo.top;
        for (let wOut = 0; wOut < outWidth; ++wOut) {
          const wBeg = wOut * strideWidth - padInfo.left;
          for (let d = 0; d < inChannels; ++d) {
            let curVal = Number.MIN_SAFE_INTEGER;
            let hMax = 0;
            let wMax = 0;
            for (let h = 0; h < filterHeight; ++h) {
              const hIn = hBeg + h * dilationHeight;
              if (hIn >= 0 && hIn < inHeight) {
                for (let w = 0; w < filterWidth; ++w) {
                  const wIn = wBeg + w * dilationWidth;
                  if (wIn >= 0 && wIn < inWidth) {
                    const val = $x[b][hIn][wIn][d] + $filter[h][w][d];
                    if (val > curVal) {
                      curVal = val;
                      hMax = h;
                      wMax = w;
                    }
                  }
                }
              }
            }
            gradients[hMax][wMax][d] += $dy[b][hOut][wOut][d];
          }
        }
      }
    }
    const dataId = cpuBackend.write(
      util_exports.toTypedArray(gradients, x.dtype),
      filter.shape,
      filter.dtype
    );
    return { dataId, shape: filter.shape, dtype: filter.dtype };
  }
};

// src/tfjs-backend-cpu/src/kernels/Dilation2DBackpropInput.ts
var dilation2DBackpropInputConfig = {
  kernelName: Dilation2DBackpropInput,
  backendName: "cpu",
  kernelFunc: ({ inputs, backend, attrs }) => {
    const { x, filter, dy } = inputs;
    const { strides, pad: pad2, dilations } = attrs;
    const cpuBackend = backend;
    const $x = util_exports.toNestedArray(
      x.shape,
      cpuBackend.data.get(x.dataId).values
    );
    const $filter = util_exports.toNestedArray(
      filter.shape,
      cpuBackend.data.get(filter.dataId).values
    );
    const {
      batchSize,
      inHeight,
      inWidth,
      inChannels,
      outHeight,
      outWidth,
      padInfo,
      strideHeight,
      strideWidth,
      filterHeight,
      filterWidth,
      dilationHeight,
      dilationWidth,
      outShape
    } = backend_util_exports.computeDilation2DInfo(
      x.shape,
      filter.shape,
      strides,
      pad2,
      "NHWC",
      dilations
    );
    util_exports.assert(
      dy.rank === outShape.length,
      () => `Error in ${Dilation2DBackpropInput}, dy must have the same rank as output ${outShape.length}, but got ${dy.rank}`
    );
    const $dy = util_exports.toNestedArray(
      outShape,
      cpuBackend.data.get(dy.dataId).values
    );
    const gradients = util_exports.makeZerosNestedTypedArray(x.shape, x.dtype);
    for (let b = 0; b < batchSize; ++b) {
      for (let hOut = 0; hOut < outHeight; ++hOut) {
        const hBeg = hOut * strideHeight - padInfo.top;
        for (let wOut = 0; wOut < outWidth; ++wOut) {
          const wBeg = wOut * strideWidth - padInfo.left;
          for (let d = 0; d < inChannels; ++d) {
            let curVal = Number.MIN_SAFE_INTEGER;
            let hInMax = hBeg < 0 ? 0 : hBeg;
            let wInMax = wBeg < 0 ? 0 : wBeg;
            for (let h = 0; h < filterHeight; ++h) {
              const hIn = hBeg + h * dilationHeight;
              if (hIn >= 0 && hIn < inHeight) {
                for (let w = 0; w < filterWidth; ++w) {
                  const wIn = wBeg + w * dilationWidth;
                  if (wIn >= 0 && wIn < inWidth) {
                    const val = $x[b][hIn][wIn][d] + $filter[h][w][d];
                    if (val > curVal) {
                      curVal = val;
                      hInMax = hIn;
                      wInMax = wIn;
                    }
                  }
                }
              }
            }
            gradients[b][hInMax][wInMax][d] += $dy[b][hOut][wOut][d];
          }
        }
      }
    }
    const dataId = cpuBackend.write(
      util_exports.toTypedArray(gradients, x.dtype),
      x.shape,
      x.dtype
    );
    return { dataId, shape: x.shape, dtype: x.dtype };
  }
};

// src/tfjs-backend-cpu/src/kernels/Draw.ts
function draw(args) {
  const { inputs, backend, attrs } = args;
  const { image } = inputs;
  const { canvas, options } = attrs;
  const { contextOptions, imageOptions } = options || {};
  const alpha = imageOptions?.alpha || 1;
  const contextType = contextOptions?.contextType || "2d";
  if (contextType !== "2d") {
    throw new Error(`Context type ${contextOptions.contextType} is not supported by the CPU backend.`);
  }
  const ctx = canvas.getContext(
    contextType,
    contextOptions?.contextAttributes || {}
  );
  if (ctx == null) {
    throw new Error(`Could not get the context with ${contextType} type.`);
  }
  const [height, width] = image.shape.slice(0, 2);
  const depth = image.shape.length === 2 ? 1 : image.shape[2];
  const data = backend.data.get(image.dataId).values;
  const multiplier = image.dtype === "float32" ? 255 : 1;
  const bytes = new Uint8ClampedArray(width * height * 4);
  for (let i = 0; i < height * width; ++i) {
    const rgba = [0, 0, 0, 255 * alpha];
    for (let d = 0; d < depth; d++) {
      const value = data[i * depth + d];
      if (image.dtype === "float32") {
        if (value < 0 || value > 1) {
          throw new Error(
            `Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${value}.`
          );
        }
      } else if (image.dtype === "int32") {
        if (value < 0 || value > 255) {
          throw new Error(
            `Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${value}.`
          );
        }
      }
      if (depth === 1) {
        rgba[0] = value * multiplier;
        rgba[1] = value * multiplier;
        rgba[2] = value * multiplier;
      } else {
        rgba[d] = value * multiplier;
      }
    }
    const j = i * 4;
    bytes[j + 0] = Math.round(rgba[0]);
    bytes[j + 1] = Math.round(rgba[1]);
    bytes[j + 2] = Math.round(rgba[2]);
    bytes[j + 3] = Math.round(rgba[3]);
  }
  canvas.width = width;
  canvas.height = height;
  const imageData = new ImageData(bytes, width, height);
  ctx.putImageData(imageData, 0, 0);
  return image;
}
var drawConfig = {
  kernelName: Draw,
  backendName: "cpu",
  kernelFunc: draw
};

// src/tfjs-backend-cpu/src/kernels/Sum.ts
function sum3(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  assertNotComplex(x, "sum");
  let $x;
  if (x.dtype === "bool") {
    $x = cast2({ inputs: { x }, backend, attrs: { dtype: "int32" } });
  } else {
    $x = identity({ inputs: { x }, backend });
  }
  const xRank = $x.shape.length;
  const axes = util_exports.parseAxisParam(axis, $x.shape);
  const permutation = backend_util_exports.getAxesPermutation(axes, xRank);
  let reductionAxes = axes;
  let permutedX = $x;
  if (permutation != null) {
    permutedX = transpose2({ inputs: { x: $x }, backend, attrs: { perm: permutation } });
    reductionAxes = backend_util_exports.getInnerMostAxes(reductionAxes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims(
    "sum",
    reductionAxes,
    permutedX.shape.length
  );
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, reductionAxes);
  const resultDtype = backend_util_exports.upcastType(permutedX.dtype, "int32");
  let result = zeros2(backend, outShape, resultDtype);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const vals = backend.data.get(result.dataId).values;
  const aVals = backend.data.get(permutedX.dataId).values;
  for (let i = 0; i < vals.length; ++i) {
    const offset = i * reduceSize;
    let sum4 = 0;
    for (let j = 0; j < reduceSize; ++j) {
      sum4 += aVals[offset + j];
    }
    vals[i] = sum4;
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(result.shape, axes);
    const oldResult = result;
    result = reshape2({ inputs: { x: result }, backend, attrs: { shape: newShape } });
    backend.disposeIntermediateTensorInfo(oldResult);
  }
  backend.disposeIntermediateTensorInfo($x);
  if (permutation != null) {
    backend.disposeIntermediateTensorInfo(permutedX);
  }
  return result;
}
var sumConfig = {
  kernelName: Sum,
  backendName: "cpu",
  kernelFunc: sum3
};

// src/tfjs-backend-cpu/src/kernels/Einsum.ts
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
        x = transpose2({ inputs: { x: tensors[idTerm] }, backend, attrs: { perm } });
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
        out = multiply({ inputs: { a: x, b: out }, backend });
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
  backendName: "cpu",
  kernelFunc: einsum2
};

// src/tfjs-backend-cpu/src/kernels/EluGrad.ts
function eluGrad(args) {
  const { inputs, backend } = args;
  const { dy, y } = inputs;
  assertNotComplex([dy, y], "eluGrad");
  const resultValues = new Float32Array(util_exports.sizeFromShape(y.shape));
  const values = backend.data.get(y.dataId).values;
  const dyValues = backend.data.get(dy.dataId).values;
  for (let i = 0; i < values.length; ++i) {
    const v = values[i];
    if (v >= 0) {
      resultValues[i] = dyValues[i];
    } else {
      resultValues[i] = dyValues[i] * (v + 1);
    }
  }
  return backend.makeTensorInfo(y.shape, "float32", resultValues);
}
var eluGradConfig = {
  kernelName: EluGrad,
  backendName: "cpu",
  kernelFunc: eluGrad
};

// src/tfjs-backend-cpu/src/kernels/Erf.ts
var p = backend_util_exports.ERF_P;
var a1 = backend_util_exports.ERF_A1;
var a2 = backend_util_exports.ERF_A2;
var a3 = backend_util_exports.ERF_A3;
var a4 = backend_util_exports.ERF_A4;
var a5 = backend_util_exports.ERF_A5;
var erf2 = unaryKernelFunc(
  Erf,
  (xi) => {
    const sign3 = Math.sign(xi);
    const v = Math.abs(xi);
    const t = 1 / (1 + p * v);
    return sign3 * (1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-v * v));
  }
);
var erfConfig = {
  kernelName: Erf,
  backendName: "cpu",
  kernelFunc: erf2
};

// src/tfjs-backend-cpu/src/kernels/ExpandDims.ts
function expandDims2(args) {
  const { inputs, backend, attrs } = args;
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
  backendName: "cpu",
  kernelFunc: expandDims2
};

// src/tfjs-backend-cpu/src/kernels/RealDiv.ts
var realDivImpl = createSimpleBinaryKernelImpl((a, b) => a / b);
var div2 = binaryKernelFunc(RealDiv, realDivImpl);
var realDivConfig = {
  kernelName: RealDiv,
  backendName: "cpu",
  kernelFunc: div2
};

// src/tfjs-backend-cpu/src/utils/fft_utils.ts
function fftBatch(input, inverse, cpuBackend) {
  const inputShape = input.shape;
  const batch = inputShape[0];
  const innerDim = inputShape[1];
  const inputVals = cpuBackend.data.get(input.dataId);
  const real2D = inputVals.complexTensorInfos.real;
  const imag2D = inputVals.complexTensorInfos.imag;
  const resultShape = [batch, innerDim];
  const resultSize = util_exports.sizeFromShape(resultShape);
  const resultReal = util_exports.getTypedArrayFromDType("float32", resultSize);
  const resultImag = util_exports.getTypedArrayFromDType("float32", resultSize);
  for (let b = 0; b < batch; b++) {
    const r = slice2({
      inputs: { x: real2D },
      backend: cpuBackend,
      attrs: { begin: [b, 0], size: [1, innerDim] }
    });
    const i = slice2({
      inputs: { x: imag2D },
      backend: cpuBackend,
      attrs: { begin: [b, 0], size: [1, innerDim] }
    });
    const input2 = complex2({ inputs: { real: r, imag: i }, backend: cpuBackend });
    const { real: real3, imag: imag3 } = fftImpl(input2, inverse, cpuBackend);
    const res = backend_util_exports.mergeRealAndImagArrays(real3, imag3);
    for (let d = 0; d < innerDim; d++) {
      const c = backend_util_exports.getComplexWithIndex(res, d);
      resultReal[b * innerDim + d] = c.real;
      resultImag[b * innerDim + d] = c.imag;
    }
    cpuBackend.disposeIntermediateTensorInfo(r);
    cpuBackend.disposeIntermediateTensorInfo(i);
    cpuBackend.disposeIntermediateTensorInfo(input2);
  }
  const $realInfo = cpuBackend.makeTensorInfo(resultShape, "float32", resultReal);
  const $imagInfo = cpuBackend.makeTensorInfo(resultShape, "float32", resultImag);
  const result = complex2(
    { inputs: { real: $realInfo, imag: $imagInfo }, backend: cpuBackend }
  );
  cpuBackend.disposeIntermediateTensorInfo($realInfo);
  cpuBackend.disposeIntermediateTensorInfo($imagInfo);
  return result;
}
function fftImpl(input, inverse, cpuBackend) {
  const inputSize = util_exports.sizeFromShape(input.shape);
  const inputVals = cpuBackend.data.get(input.dataId);
  const realVals = cpuBackend.data.get(inputVals.complexTensorInfos.real.dataId).values;
  const imagVals = cpuBackend.data.get(inputVals.complexTensorInfos.imag.dataId).values;
  if (isExponentOf2(inputSize)) {
    const result = fftRadix2(realVals, imagVals, inputSize, inverse, cpuBackend);
    const resultShape = [input.shape[0], input.shape[1]];
    if (inverse) {
      const realInfo = cpuBackend.makeTensorInfo(resultShape, "float32", result.real);
      const imagInfo = cpuBackend.makeTensorInfo(resultShape, "float32", result.imag);
      const sizeInfo = cpuBackend.makeTensorInfo(
        [],
        "float32",
        util_exports.createScalarValue(inputSize, "float32")
      );
      const sizeInfoCopy = identity({ inputs: { x: sizeInfo }, backend: cpuBackend });
      const divRealInfo = realDivConfig.kernelFunc(
        { inputs: { a: realInfo, b: sizeInfo }, backend: cpuBackend }
      );
      const divImagInfo = realDivConfig.kernelFunc(
        { inputs: { a: imagInfo, b: sizeInfoCopy }, backend: cpuBackend }
      );
      const divRealVals = cpuBackend.data.get(divRealInfo.dataId).values;
      const divImagVals = cpuBackend.data.get(divImagInfo.dataId).values;
      cpuBackend.disposeIntermediateTensorInfo(realInfo);
      cpuBackend.disposeIntermediateTensorInfo(imagInfo);
      cpuBackend.disposeIntermediateTensorInfo(sizeInfo);
      cpuBackend.disposeIntermediateTensorInfo(sizeInfoCopy);
      cpuBackend.disposeIntermediateTensorInfo(divRealInfo);
      cpuBackend.disposeIntermediateTensorInfo(divImagInfo);
      return { real: divRealVals, imag: divImagVals };
    }
    return result;
  } else {
    const data = backend_util_exports.mergeRealAndImagArrays(realVals, imagVals);
    const rawOutput = fourierTransformByMatmul(data, inputSize, inverse);
    return backend_util_exports.splitRealAndImagArrays(rawOutput);
  }
}
function isExponentOf2(size) {
  return (size & size - 1) === 0;
}
function fftRadix2(realVals, imagVals, size, inverse, cpuBackend) {
  if (size === 1) {
    return { real: realVals, imag: imagVals };
  }
  const data = backend_util_exports.mergeRealAndImagArrays(realVals, imagVals);
  const half = size / 2;
  const evenComplex = backend_util_exports.complexWithEvenIndex(data);
  const evenRealVals = evenComplex.real;
  const evenImagVals = evenComplex.imag;
  const evenShape = [evenRealVals.length];
  const evenRealInfo = cpuBackend.makeTensorInfo(evenShape, "float32", evenRealVals);
  const evenImagInfo = cpuBackend.makeTensorInfo(evenShape, "float32", evenImagVals);
  const evenTensorInfo = complex2(
    { inputs: { real: evenRealInfo, imag: evenImagInfo }, backend: cpuBackend }
  );
  const oddComplex = backend_util_exports.complexWithOddIndex(data);
  const oddRealVals = oddComplex.real;
  const oddImagVals = oddComplex.imag;
  const oddShape = [oddRealVals.length];
  const oddRealInfo = cpuBackend.makeTensorInfo(oddShape, "float32", oddRealVals);
  const oddImagInfo = cpuBackend.makeTensorInfo(oddShape, "float32", oddImagVals);
  const oddTensorInfo = complex2(
    { inputs: { real: oddRealInfo, imag: oddImagInfo }, backend: cpuBackend }
  );
  const $evenComplex = fftRadix2(evenRealVals, evenImagVals, half, inverse, cpuBackend);
  const $evenRealVals = $evenComplex.real;
  const $evenImagVals = $evenComplex.imag;
  const $evenShape = [$evenRealVals.length];
  const $evenRealInfo = cpuBackend.makeTensorInfo($evenShape, "float32", $evenRealVals);
  const $evenImagInfo = cpuBackend.makeTensorInfo($evenShape, "float32", $evenImagVals);
  const $evenTensorInfo = complex2({
    inputs: { real: $evenRealInfo, imag: $evenImagInfo },
    backend: cpuBackend
  });
  const $oddComplex = fftRadix2(oddRealVals, oddImagVals, half, inverse, cpuBackend);
  const $oddRealVals = $oddComplex.real;
  const $oddImagVals = $oddComplex.imag;
  const $oddShape = [$oddRealVals.length];
  const $oddRealInfo = cpuBackend.makeTensorInfo($oddShape, "float32", $oddRealVals);
  const $oddImagInfo = cpuBackend.makeTensorInfo($oddShape, "float32", $oddImagVals);
  const $oddTensorInfo = complex2(
    { inputs: { real: $oddRealInfo, imag: $oddImagInfo }, backend: cpuBackend }
  );
  const e = backend_util_exports.exponents(size, inverse);
  const eShape = [e.real.length];
  const eRealInfo = cpuBackend.makeTensorInfo(eShape, "float32", e.real);
  const eImagInfo = cpuBackend.makeTensorInfo(eShape, "float32", e.imag);
  const complexInfo = complex2(
    { inputs: { real: eRealInfo, imag: eImagInfo }, backend: cpuBackend }
  );
  const exponentInfo = multiply(
    { inputs: { a: complexInfo, b: $oddTensorInfo }, backend: cpuBackend }
  );
  const addPart = add3({
    inputs: { a: $evenTensorInfo, b: exponentInfo },
    backend: cpuBackend
  });
  const subPart = sub2({
    inputs: { a: $evenTensorInfo, b: exponentInfo },
    backend: cpuBackend
  });
  const addPartReal = real2({ inputs: { input: addPart }, backend: cpuBackend });
  const subPartReal = real2({ inputs: { input: subPart }, backend: cpuBackend });
  const addPartImag = imag2({ inputs: { input: addPart }, backend: cpuBackend });
  const subPartImag = imag2({ inputs: { input: subPart }, backend: cpuBackend });
  const $real = concat2({
    inputs: [addPartReal, subPartReal],
    backend: cpuBackend,
    attrs: { axis: 0 }
  });
  const $imag = concat2({
    inputs: [addPartImag, subPartImag],
    backend: cpuBackend,
    attrs: { axis: 0 }
  });
  const $realVals = cpuBackend.data.get($real.dataId).values;
  const $imagVals = cpuBackend.data.get($imag.dataId).values;
  cpuBackend.disposeIntermediateTensorInfo(evenRealInfo);
  cpuBackend.disposeIntermediateTensorInfo(evenImagInfo);
  cpuBackend.disposeIntermediateTensorInfo(evenTensorInfo);
  cpuBackend.disposeIntermediateTensorInfo(oddRealInfo);
  cpuBackend.disposeIntermediateTensorInfo(oddImagInfo);
  cpuBackend.disposeIntermediateTensorInfo(oddTensorInfo);
  cpuBackend.disposeIntermediateTensorInfo($evenRealInfo);
  cpuBackend.disposeIntermediateTensorInfo($evenImagInfo);
  cpuBackend.disposeIntermediateTensorInfo($evenTensorInfo);
  cpuBackend.disposeIntermediateTensorInfo($oddRealInfo);
  cpuBackend.disposeIntermediateTensorInfo($oddImagInfo);
  cpuBackend.disposeIntermediateTensorInfo($oddTensorInfo);
  cpuBackend.disposeIntermediateTensorInfo(eRealInfo);
  cpuBackend.disposeIntermediateTensorInfo(eImagInfo);
  cpuBackend.disposeIntermediateTensorInfo(complexInfo);
  cpuBackend.disposeIntermediateTensorInfo(exponentInfo);
  cpuBackend.disposeIntermediateTensorInfo(addPart);
  cpuBackend.disposeIntermediateTensorInfo(subPart);
  cpuBackend.disposeIntermediateTensorInfo(addPartReal);
  cpuBackend.disposeIntermediateTensorInfo(addPartImag);
  cpuBackend.disposeIntermediateTensorInfo(subPartReal);
  cpuBackend.disposeIntermediateTensorInfo(subPartImag);
  cpuBackend.disposeIntermediateTensorInfo($real);
  cpuBackend.disposeIntermediateTensorInfo($imag);
  return { real: $realVals, imag: $imagVals };
}
function fourierTransformByMatmul(data, size, inverse) {
  const ret = new Float32Array(size * 2);
  for (let r = 0; r < size; r++) {
    let real3 = 0;
    let imag3 = 0;
    for (let c = 0; c < size; c++) {
      const e = backend_util_exports.exponent(r * c, size, inverse);
      const term = backend_util_exports.getComplexWithIndex(data, c);
      real3 += term.real * e.real - term.imag * e.imag;
      imag3 += term.real * e.imag + term.imag * e.real;
    }
    if (inverse) {
      real3 /= size;
      imag3 /= size;
    }
    backend_util_exports.assignToTypedArray(ret, real3, imag3, r);
  }
  return ret;
}

// src/tfjs-backend-cpu/src/kernels/FFT.ts
function fft2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const inputSize = util_exports.sizeFromShape(input.shape);
  const innerDimensionSize = input.shape[input.shape.length - 1];
  const batch = inputSize / innerDimensionSize;
  const input2D = reshape2({
    inputs: { x: input },
    backend,
    attrs: { shape: [batch, innerDimensionSize] }
  });
  const result = fftBatch(input2D, false, backend);
  const resultReshaped = reshape2({ inputs: { x: result }, backend, attrs: { shape: input.shape } });
  backend.disposeIntermediateTensorInfo(input2D);
  backend.disposeIntermediateTensorInfo(result);
  return resultReshaped;
}
var fftConfig = {
  kernelName: FFT,
  backendName: "cpu",
  kernelFunc: fft2
};

// src/tfjs-backend-cpu/src/kernels/Fill.ts
function fill2(args) {
  const { backend, attrs } = args;
  const { shape, value, dtype } = attrs;
  const $dtype = dtype || util_exports.inferDtype(value);
  const values = util_exports.getArrayFromDType($dtype, util_exports.sizeFromShape(shape));
  fillValues(values, value, $dtype);
  return backend.makeTensorInfo(shape, $dtype, values);
}
var fillConfig = {
  kernelName: Fill,
  backendName: "cpu",
  kernelFunc: fill2
};
function fillValues(values, value, dtype) {
  if (dtype === "string") {
    values.fill(value);
  } else {
    values.fill(value);
  }
}

// src/tfjs-backend-cpu/src/kernels/FlipLeftRight.ts
var flipLeftRightConfig = {
  kernelName: FlipLeftRight,
  backendName: "cpu",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { image } = inputs;
    const cpuBackend = backend;
    const output = util_exports.getTypedArrayFromDType(
      image.dtype,
      util_exports.sizeFromShape(image.shape)
    );
    const [batch, imageHeight, imageWidth, numChannels] = image.shape;
    const imageVals = cpuBackend.data.get(image.dataId).values;
    for (let batchIdx = 0; batchIdx < batch; batchIdx++) {
      const batchOffset = batchIdx * imageWidth * imageHeight * numChannels;
      for (let row = 0; row < imageHeight; row++) {
        const rowOffset = row * (imageWidth * numChannels);
        for (let col = 0; col < imageWidth; col++) {
          const colOffset = col * numChannels;
          for (let channel = 0; channel < numChannels; channel++) {
            const coordX = Math.round(imageWidth - col - 1);
            const outIdx = batchOffset + rowOffset + colOffset + channel;
            let outputValue = imageVals[outIdx];
            if (coordX >= 0 && coordX < imageWidth) {
              const rotatedColOffset = coordX * numChannels;
              const imageIdx = batchOffset + rowOffset + rotatedColOffset + channel;
              outputValue = imageVals[imageIdx];
            }
            output[outIdx] = outputValue;
          }
        }
      }
    }
    const dataId = cpuBackend.write(output, image.shape, image.dtype);
    return { dataId, shape: image.shape, dtype: image.dtype };
  }
};

// src/tfjs-backend-cpu/src/kernels/FusedConv2D.ts
function fusedConv2D(args) {
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
  let result = conv2D({
    inputs: { x, filter },
    backend,
    attrs: { strides, pad: pad2, dataFormat, dilations, dimRoundingMode }
  });
  if (bias) {
    const resultOld = result;
    if (dataFormat === "NCHW" && bias.shape.length === 1 && bias.shape[0] !== 1) {
      const reshapedBias = reshape2(
        { inputs: { x: bias }, backend, attrs: { shape: [bias.shape[0], 1, 1] } }
      );
      result = add3({ inputs: { a: result, b: reshapedBias }, backend });
      backend.disposeIntermediateTensorInfo(reshapedBias);
    } else {
      result = add3({ inputs: { a: result, b: bias }, backend });
    }
    backend.disposeIntermediateTensorInfo(resultOld);
  }
  if (activation) {
    const resultOld = result;
    if (dataFormat === "NCHW" && activation === "prelu" && preluActivationWeights.shape.length === 1 && preluActivationWeights.shape[0] !== 1) {
      const reshapedAlpha = reshape2({
        inputs: { x: preluActivationWeights },
        backend,
        attrs: { shape: [preluActivationWeights.shape[0], 1, 1] }
      });
      result = applyActivation2(
        backend,
        result,
        activation,
        reshapedAlpha,
        leakyreluAlpha
      );
      backend.disposeIntermediateTensorInfo(reshapedAlpha);
    } else {
      result = applyActivation2(
        backend,
        result,
        activation,
        preluActivationWeights,
        leakyreluAlpha
      );
    }
    backend.disposeIntermediateTensorInfo(resultOld);
  }
  return result;
}
var fusedConv2DConfig = {
  kernelName: FusedConv2D,
  backendName: "cpu",
  kernelFunc: fusedConv2D
};

// src/tfjs-backend-cpu/src/kernels/FusedDepthwiseConv2D.ts
function fusedDepthwiseConv2D(args) {
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
  let result = depthwiseConv2dNative({
    inputs: { x, filter },
    backend,
    attrs: { strides, pad: pad2, dataFormat, dilations, dimRoundingMode }
  });
  if (bias) {
    const oldResult = result;
    result = add3({ inputs: { a: result, b: bias }, backend });
    backend.disposeIntermediateTensorInfo(oldResult);
  }
  if (activation) {
    const oldResult = result;
    result = applyActivation2(
      backend,
      result,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    );
    backend.disposeIntermediateTensorInfo(oldResult);
  }
  return result;
}
var fusedDepthwiseConv2DConfig = {
  kernelName: FusedDepthwiseConv2D,
  backendName: "cpu",
  kernelFunc: fusedDepthwiseConv2D
};

// src/tfjs-backend-cpu/src/kernels/GatherNd.ts
function gatherNd(args) {
  const { inputs, backend } = args;
  const { params, indices } = inputs;
  const paramsSize = util_exports.sizeFromShape(params.shape);
  const indicesShape = indices.shape;
  const sliceRank = indicesShape[indicesShape.length - 1];
  const [resultShape, numSlices, sliceSize, strides] = backend_util_exports.prepareAndValidate(params, indices);
  if (numSlices === 0) {
    return backend.makeTensorInfo(resultShape, params.dtype, []);
  }
  const indicesData = backend.data.get(indices.dataId).values;
  const paramsBuf = backend.bufferSync(params);
  const outBuf = gatherNdImpl(
    indicesData,
    paramsBuf,
    params.dtype,
    numSlices,
    sliceRank,
    sliceSize,
    strides,
    params.shape,
    paramsSize
  );
  return backend.makeTensorInfo(resultShape, params.dtype, outBuf.values);
}
var gatherNdConfig = {
  kernelName: GatherNd,
  backendName: "cpu",
  kernelFunc: gatherNd
};

// src/tfjs-backend-cpu/src/kernels/GatherV2.ts
function gatherV2(args) {
  const { inputs, backend, attrs } = args;
  const { x, indices } = inputs;
  const { axis, batchDims } = attrs;
  assertNotComplex([x, indices], "gatherV2");
  const parsedAxis = util_exports.parseAxisParam(axis, x.shape)[0];
  const indicesVals = backend.data.get(indices.dataId).values;
  const axisDim = x.shape[parsedAxis];
  for (let i = 0; i < indicesVals.length; ++i) {
    const index = indicesVals[i];
    util_exports.assert(
      index <= axisDim - 1 && index >= 0,
      () => `GatherV2: the index value ${index} is not in [0, ${axisDim - 1}]`
    );
  }
  let $batchDims = batchDims;
  if (batchDims == null) {
    $batchDims = 0;
  }
  const indicesSize = util_exports.sizeFromShape(indices.shape);
  const shapeInfo = backend_util_exports.segment_util.collectGatherOpShapeInfo(
    x,
    indices,
    parsedAxis,
    $batchDims
  );
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
  const flattenOutputShape = [
    shapeInfo.batchSize,
    shapeInfo.outerSize,
    indicesSize / shapeInfo.batchSize,
    shapeInfo.sliceSize
  ];
  const indicesBuf = backend.bufferSync(flattenIndex);
  const xBuf = backend.bufferSync(flattenX);
  const outBuf = gatherV2Impl(xBuf, indicesBuf, flattenOutputShape);
  backend.disposeIntermediateTensorInfo(flattenX);
  backend.disposeIntermediateTensorInfo(flattenIndex);
  return backend.makeTensorInfo(
    shapeInfo.outputShape,
    outBuf.dtype,
    outBuf.values
  );
}
var gatherV2Config = {
  kernelName: GatherV2,
  backendName: "cpu",
  kernelFunc: gatherV2
};

// src/tfjs-backend-cpu/src/kernels/IFFT.ts
function ifft2(args) {
  const { inputs, backend } = args;
  const { input } = inputs;
  const inputSize = util_exports.sizeFromShape(input.shape);
  const innerDimensionSize = input.shape[input.shape.length - 1];
  const batch = inputSize / innerDimensionSize;
  const input2D = reshape2({
    inputs: { x: input },
    backend,
    attrs: { shape: [batch, innerDimensionSize] }
  });
  const result = fftBatch(input2D, true, backend);
  const resultReshaped = reshape2({ inputs: { x: result }, backend, attrs: { shape: input.shape } });
  backend.disposeIntermediateTensorInfo(input2D);
  backend.disposeIntermediateTensorInfo(result);
  return resultReshaped;
}
var ifftConfig = {
  kernelName: IFFT,
  backendName: "cpu",
  kernelFunc: ifft2
};

// src/tfjs-backend-cpu/src/kernels/IsFinite.ts
var isFinite3 = unaryKernelFunc(IsFinite, (xi) => Number.isFinite(xi) ? 1 : 0, "bool");
var isFiniteConfig = {
  kernelName: IsFinite,
  backendName: "cpu",
  kernelFunc: isFinite3
};

// src/tfjs-backend-cpu/src/kernels/IsInf.ts
var isInf2 = unaryKernelFunc(IsInf, (xi) => Math.abs(xi) === Infinity ? 1 : 0, "bool");
var isInfConfig = {
  kernelName: IsInf,
  backendName: "cpu",
  kernelFunc: isInf2
};

// src/tfjs-backend-cpu/src/kernels/IsNaN.ts
var isNaN3 = unaryKernelFunc(IsNan, (xi) => Number.isNaN(xi) ? 1 : 0, "bool");
var isNaNConfig = {
  kernelName: IsNan,
  backendName: "cpu",
  kernelFunc: isNaN3
};

// src/tfjs-backend-cpu/src/kernels/LinSpace.ts
function linSpace(args) {
  const { backend, attrs } = args;
  const { start, stop, num } = attrs;
  const outVals = linSpaceImpl(start, stop, num);
  return backend.makeTensorInfo([outVals.length], "float32", outVals);
}
var linSpaceConfig = {
  kernelName: LinSpace,
  backendName: "cpu",
  kernelFunc: linSpace
};

// src/tfjs-backend-cpu/src/kernels/Log1p.ts
var log1p2 = unaryKernelFunc(Log1p, (xi) => Math.log1p(xi));
var log1pConfig = {
  kernelName: Log1p,
  backendName: "cpu",
  kernelFunc: log1p2
};

// src/tfjs-backend-cpu/src/kernels/LogicalAnd.ts
var logicalAndImpl = createSimpleBinaryKernelImpl((a, b) => a && b);
var logicalAnd2 = binaryKernelFunc(
  LogicalAnd,
  logicalAndImpl,
  null,
  "bool"
);
var logicalAndConfig = {
  kernelName: LogicalAnd,
  backendName: "cpu",
  kernelFunc: logicalAnd2
};

// src/tfjs-backend-cpu/src/kernels/LogicalNot.ts
var logicalNot2 = unaryKernelFunc(LogicalNot, (xi) => xi ? 0 : 1, "bool");
var logicalNotConfig = {
  kernelName: LogicalNot,
  backendName: "cpu",
  kernelFunc: logicalNot2
};

// src/tfjs-backend-cpu/src/kernels/LogicalOr.ts
var logicalOrImpl = createSimpleBinaryKernelImpl((a, b) => a || b);
var logicalOr2 = binaryKernelFunc(LogicalOr, logicalOrImpl, null, "bool");
var logicalOrConfig = {
  kernelName: LogicalOr,
  backendName: "cpu",
  kernelFunc: logicalOr2
};

// src/tfjs-backend-cpu/src/kernels/LRN.ts
function lRN(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { depthRadius, bias, alpha, beta } = attrs;
  assertNotComplex(x, "LRN");
  const channels = x.shape[3];
  const maxD = channels - 1;
  const xValues = backend.data.get(x.dataId).values;
  const size = util_exports.sizeFromShape(x.shape);
  const result = new Float32Array(size);
  function sumAcrossChannels(offset) {
    const currentChannel = offset % channels;
    let beginSumOffset = offset - currentChannel + Math.max(0, currentChannel - depthRadius);
    const endSumOffset = offset - currentChannel + Math.min(currentChannel + depthRadius, maxD);
    let sum4 = 0;
    for (; beginSumOffset <= endSumOffset; beginSumOffset++) {
      const z = xValues[beginSumOffset];
      sum4 += z * z;
    }
    return sum4;
  }
  for (let offset = 0; offset < size; offset++) {
    const sum4 = sumAcrossChannels(offset);
    const val = xValues[offset] * Math.pow(bias + alpha * sum4, -beta);
    result[offset] = val;
  }
  return backend.makeTensorInfo(x.shape, x.dtype, result);
}
var LRNConfig = {
  kernelName: LRN,
  backendName: "cpu",
  kernelFunc: lRN
};

// src/tfjs-backend-cpu/src/kernels/LRNGrad.ts
function lRNGrad(args) {
  const { inputs, backend, attrs } = args;
  const { x, y, dy } = inputs;
  const { depthRadius, bias, alpha, beta } = attrs;
  assertNotComplex(dy, "LRNGrad");
  const dySize = util_exports.sizeFromShape(dy.shape);
  const channels = dy.shape[3];
  const dyValues = backend.data.get(dy.dataId).values;
  const xValues = backend.data.get(x.dataId).values;
  const yValues = backend.data.get(y.dataId).values;
  const result = new Float32Array(dySize);
  const size = dySize;
  for (let offset = 0; offset < size; offset++) {
    const currentChannel = offset % channels;
    const depthBegin = offset - currentChannel + Math.max(0, currentChannel - depthRadius);
    const depthEnd = offset - currentChannel + Math.min(channels, currentChannel + depthRadius + 1);
    let norm2 = 0;
    for (let k = depthBegin; k < depthEnd; k++) {
      norm2 += Math.pow(xValues[k], 2);
    }
    norm2 = alpha * norm2 + bias;
    for (let k = depthBegin; k < depthEnd; k++) {
      let dyi = -2 * alpha * beta * xValues[k] * yValues[offset] / norm2;
      if (offset === k) {
        dyi += Math.pow(norm2, -beta);
      }
      dyi *= dyValues[offset];
      result[k] += dyi;
    }
  }
  return backend.makeTensorInfo(dy.shape, x.dtype, result);
}
var LRNGradConfig = {
  kernelName: LRNGrad,
  backendName: "cpu",
  kernelFunc: lRNGrad
};

// src/tfjs-backend-cpu/src/kernels/Max.ts
function max2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { reductionIndices, keepDims } = attrs;
  const cpuBackend = backend;
  let xShape = x.shape;
  const xRank = xShape.length;
  const origAxes = util_exports.parseAxisParam(reductionIndices, xShape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let xVals = cpuBackend.data.get(x.dataId).values;
  if (permutedAxes != null) {
    const newShape = new Array(xRank);
    for (let i = 0; i < newShape.length; i++) {
      newShape[i] = xShape[permutedAxes[i]];
    }
    xVals = transposeImpl(xVals, xShape, x.dtype, permutedAxes, newShape);
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
    xShape = newShape;
  }
  assertNotComplex(x, "max");
  backend_util_exports.assertAxesAreInnerMostDims("max", axes, xRank);
  const [maxOutShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(xShape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const result = maxImpl(xVals, reduceSize, maxOutShape, x.dtype);
  const dataId = cpuBackend.write(result, maxOutShape, x.dtype);
  let outShape = maxOutShape;
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(maxOutShape, origAxes);
    outShape = newShape;
  }
  return { dataId, shape: outShape, dtype: x.dtype };
}
var maxConfig = {
  kernelName: Max,
  backendName: "cpu",
  kernelFunc: max2
};

// src/tfjs-backend-cpu/src/kernels/MaxPool.ts
function maxPool2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  assertNotComplex(x, "maxPool");
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const dilations = 1;
  util_exports.assert(
    backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations),
    () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`
  );
  const convInfo = backend_util_exports.computePool2DInfo(
    x.shape,
    filterSize,
    strides,
    dilations,
    pad2,
    dimRoundingMode
  );
  let res;
  if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 && util_exports.arraysEqual(convInfo.inShape, convInfo.outShape)) {
    res = identity({ inputs: { x }, backend });
  } else {
    const xValues = backend.data.get(x.dataId).values;
    const strides2 = util_exports.computeStrides(x.shape);
    const buffer2 = pool2(xValues, x.shape, x.dtype, strides2, convInfo, "max");
    res = backend.makeTensorInfo(
      convInfo.outShape,
      x.dtype,
      buffer2.values
    );
  }
  return res;
}
var maxPoolConfig = {
  kernelName: MaxPool,
  backendName: "cpu",
  kernelFunc: maxPool2
};

// src/tfjs-backend-cpu/src/kernels/MaxPool3D.ts
function maxPool3D(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { filterSize, strides, pad: pad2, dimRoundingMode, dataFormat } = attrs;
  assertNotComplex(x, "maxPool3d");
  const convInfo = backend_util_exports.computePool3DInfo(
    x.shape,
    filterSize,
    strides,
    1,
    pad2,
    dimRoundingMode,
    dataFormat
  );
  const xValues = backend.data.get(x.dataId).values;
  const outBuf = pool3d(
    xValues,
    x.shape,
    x.dtype,
    util_exports.computeStrides(x.shape),
    convInfo,
    "max"
  );
  return backend.makeTensorInfo(outBuf.shape, "float32", outBuf.values);
}
var maxPool3DConfig = {
  kernelName: MaxPool3D,
  backendName: "cpu",
  kernelFunc: maxPool3D
};

// src/tfjs-backend-cpu/src/kernels/MaxPool3DGrad.ts
function maxPool3DGrad(args) {
  const { inputs, backend, attrs } = args;
  const { dy, input } = inputs;
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  assertNotComplex([dy, input], "maxPool3DGrad");
  const convInfo = backend_util_exports.computePool3DInfo(
    input.shape,
    filterSize,
    strides,
    1,
    pad2,
    dimRoundingMode
  );
  const inputBuf = backend.bufferSync(input);
  const maxPosBuf = maxPool3dPositions(inputBuf, convInfo);
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
  const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
  const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
  const dx = buffer(input.shape, "float32");
  const dyBuf = backend.bufferSync(dy);
  for (let batch = 0; batch < convInfo.batchSize; ++batch) {
    for (let channel = 0; channel < convInfo.inChannels; ++channel) {
      for (let dxDepth = 0; dxDepth < convInfo.inDepth; ++dxDepth) {
        for (let dxRow = 0; dxRow < convInfo.inHeight; ++dxRow) {
          for (let dxCol = 0; dxCol < convInfo.inWidth; ++dxCol) {
            const dyDepthCorner = dxDepth - padFront;
            const dyRowCorner = dxRow - padTop;
            const dyColCorner = dxCol - padLeft;
            let dotProd = 0;
            for (let wDepth = 0; wDepth < effectiveFilterDepth; wDepth += dilationDepth) {
              const dyDepth = (dyDepthCorner + wDepth) / strideDepth;
              if (dyDepth < 0 || dyDepth >= convInfo.outDepth || Math.floor(dyDepth) !== dyDepth) {
                continue;
              }
              for (let wRow = 0; wRow < effectiveFilterHeight; wRow += dilationHeight) {
                const dyRow = (dyRowCorner + wRow) / strideHeight;
                if (dyRow < 0 || dyRow >= convInfo.outHeight || Math.floor(dyRow) !== dyRow) {
                  continue;
                }
                for (let wCol = 0; wCol < effectiveFilterWidth; wCol += dilationWidth) {
                  const dyCol = (dyColCorner + wCol) / strideWidth;
                  if (dyCol < 0 || dyCol >= convInfo.outWidth || Math.floor(dyCol) !== dyCol) {
                    continue;
                  }
                  const maxPos = effectiveFilterDepth * effectiveFilterHeight * effectiveFilterWidth - 1 - maxPosBuf.get(batch, dyDepth, dyRow, dyCol, channel);
                  const curPos = wDepth * effectiveFilterHeight * effectiveFilterWidth + wRow * effectiveFilterWidth + wCol;
                  const mask = maxPos === curPos ? 1 : 0;
                  if (mask === 0) {
                    continue;
                  }
                  const pixel = dyBuf.get(batch, dyDepth, dyRow, dyCol, channel);
                  dotProd += pixel * mask;
                }
              }
            }
            dx.set(dotProd, batch, dxDepth, dxRow, dxCol, channel);
          }
        }
      }
    }
  }
  return backend.makeTensorInfo(dx.shape, dx.dtype, dx.values);
}
var maxPool3DGradConfig = {
  kernelName: MaxPool3DGrad,
  backendName: "cpu",
  kernelFunc: maxPool3DGrad
};

// src/tfjs-backend-cpu/src/kernels/MaxPoolGrad.ts
function maxPoolGrad(args) {
  const { inputs, backend, attrs } = args;
  const { dy, input, output } = inputs;
  const x = input;
  assertNotComplex([input, output], "maxPoolGrad");
  const { filterSize, strides, pad: pad2, dimRoundingMode } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(
    x.shape,
    filterSize,
    strides,
    1,
    pad2,
    dimRoundingMode
  );
  const xValues = backend.data.get(x.dataId).values;
  const maxPosBuf = buffer(
    convInfo.outShape,
    x.dtype,
    maxPoolPositions(xValues, x.shape, x.dtype, convInfo).values
  );
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const effectiveFilterHeight = convInfo.effectiveFilterHeight;
  const effectiveFilterWidth = convInfo.effectiveFilterWidth;
  const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
  const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
  const dx = buffer(x.shape, "float32");
  const dyData = backend.data.get(dy.dataId).values;
  const dyBuf = buffer(
    dy.shape,
    "float32",
    dyData
  );
  for (let b = 0; b < convInfo.batchSize; ++b) {
    for (let d = 0; d < convInfo.inChannels; ++d) {
      for (let dxR = 0; dxR < convInfo.inHeight; ++dxR) {
        for (let dxC = 0; dxC < convInfo.inWidth; ++dxC) {
          const dyRCorner = dxR - padTop;
          const dyCCorner = dxC - padLeft;
          let dotProd = 0;
          for (let wR = 0; wR < effectiveFilterHeight; wR += dilationHeight) {
            const dyR = (dyRCorner + wR) / strideHeight;
            if (dyR < 0 || dyR >= convInfo.outHeight || Math.floor(dyR) !== dyR) {
              continue;
            }
            for (let wC = 0; wC < effectiveFilterWidth; wC += dilationWidth) {
              const dyC = (dyCCorner + wC) / strideWidth;
              if (dyC < 0 || dyC >= convInfo.outWidth || Math.floor(dyC) !== dyC) {
                continue;
              }
              const maxPos = effectiveFilterHeight * effectiveFilterWidth - 1 - maxPosBuf.get(b, dyR, dyC, d);
              const curPos = wR * effectiveFilterWidth + wC;
              const mask = maxPos === curPos ? 1 : 0;
              if (mask === 0) {
                continue;
              }
              const pixel = dyBuf.get(b, dyR, dyC, d);
              dotProd += pixel * mask;
            }
          }
          dx.set(dotProd, b, dxR, dxC, d);
        }
      }
    }
  }
  return backend.makeTensorInfo(dx.shape, dx.dtype, dx.values);
}
var maxPoolGradConfig = {
  kernelName: MaxPoolGrad,
  backendName: "cpu",
  kernelFunc: maxPoolGrad
};

// src/tfjs-backend-cpu/src/kernels/MaxPoolWithArgmax_impl.ts
function maxPoolWithArgmaxImpl(xValues, xShape, dtype, includeBatchInIndex, convInfo) {
  const strides = util_exports.computeStrides(xShape);
  const maxPools = pool2(xValues, xShape, dtype, strides, convInfo, "max");
  const maxPositions = maxPoolPositions(
    xValues,
    xShape,
    dtype,
    convInfo,
    true,
    includeBatchInIndex
  );
  return [maxPools.values, maxPositions.values];
}

// src/tfjs-backend-cpu/src/kernels/MaxPoolWithArgmax.ts
var maxPoolWithArgmaxConfig = {
  kernelName: MaxPoolWithArgmax,
  backendName: "cpu",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { x } = inputs;
    const { filterSize, strides, pad: pad2, includeBatchInIndex } = attrs;
    const cpuBackend = backend;
    assertNotComplex(x, "MaxPoolWithArgmax");
    const values = cpuBackend.data.get(x.dataId).values;
    const convInfo = backend_util_exports.computePool2DInfo(
      x.shape,
      filterSize,
      strides,
      [1, 1],
      pad2
    );
    const [pooled, indexes] = maxPoolWithArgmaxImpl(
      values,
      x.shape,
      x.dtype,
      includeBatchInIndex,
      convInfo
    );
    const pooledDataId = cpuBackend.write(pooled, convInfo.outShape, x.dtype);
    const indexesDataId = cpuBackend.write(indexes, convInfo.outShape, x.dtype);
    return [
      { dataId: pooledDataId, shape: convInfo.outShape, dtype: x.dtype },
      { dataId: indexesDataId, shape: convInfo.outShape, dtype: "int32" }
    ];
  }
};

// src/tfjs-backend-cpu/src/kernels/Mean.ts
function mean2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  const axes = util_exports.parseAxisParam(axis, x.shape);
  const shapes = backend_util_exports.computeOutAndReduceShapes(x.shape, axes);
  const reduceShape = shapes[1];
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const toDispose = [];
  const reduceSizeScalar = backend.makeTensorInfo([], "float32", new Float32Array([reduceSize]));
  toDispose.push(reduceSizeScalar);
  const $x = cast2({ inputs: { x }, backend, attrs: { dtype: "float32" } });
  toDispose.push($x);
  const res = div2({ inputs: { a: $x, b: reduceSizeScalar }, backend });
  toDispose.push(res);
  const result = sum3({ inputs: { x: res }, backend, attrs: { axis, keepDims } });
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
}
var meanConfig = {
  kernelName: Mean,
  backendName: "cpu",
  kernelFunc: mean2
};

// src/tfjs-backend-cpu/src/kernels/Min.ts
function min2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { axis, keepDims } = attrs;
  assertNotComplex(x, "min");
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  if (permutedAxes != null) {
    $x = transpose2({ inputs: { x }, backend, attrs: { perm: permutedAxes } });
    axes = backend_util_exports.getInnerMostAxes(axes.length, x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("min", axes, $x.shape.length);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes($x.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const vals = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(outShape), $x.dtype);
  const aVals = backend.data.get($x.dataId).values;
  for (let i = 0; i < vals.length; ++i) {
    const offset = i * reduceSize;
    let min3 = aVals[offset];
    for (let j = 0; j < reduceSize; ++j) {
      const value = aVals[offset + j];
      if (Number.isNaN(value) || value < min3) {
        min3 = value;
      }
    }
    vals[i] = min3;
  }
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo($x);
  }
  const result = backend.makeTensorInfo(outShape, $x.dtype, vals);
  if (keepDims) {
    const expandedShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    const reshapedResult = reshape2({ inputs: { x: result }, backend, attrs: { shape: expandedShape } });
    backend.disposeIntermediateTensorInfo(result);
    return reshapedResult;
  }
  return result;
}
var minConfig = {
  kernelName: Min,
  backendName: "cpu",
  kernelFunc: min2
};

// src/tfjs-backend-cpu/src/kernels/MirrorPad.ts
function mirrorPad2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { paddings, mode } = attrs;
  assertNotComplex(x, "mirrorPad");
  const outShape = paddings.map(
    (p2, i) => p2[0] + x.shape[i] + p2[1]
    /* afterPad */
  );
  const start = paddings.map((p2) => p2[0]);
  const end = paddings.map((p2, i) => p2[0] + x.shape[i]);
  const offset = mode === "reflect" ? 0 : 1;
  const xVals = backend.data.get(x.dataId).values;
  const xRank = x.shape.length;
  const xStrides = util_exports.computeStrides(x.shape);
  const resultSize = util_exports.sizeFromShape(outShape);
  const resultRank = outShape.length;
  const resultStrides = util_exports.computeStrides(outShape);
  const resVals = util_exports.getTypedArrayFromDType(x.dtype, resultSize);
  for (let i = 0; i < resultSize; i++) {
    let coords = util_exports.indexToLoc(i, resultRank, resultStrides);
    for (let i2 = 0; i2 < resultRank; i2++) {
      if (coords[i2] < start[i2]) {
        coords[i2] = start[i2] * 2 - coords[i2] - offset;
      } else if (coords[i2] >= end[i2]) {
        coords[i2] = (end[i2] - 1) * 2 - coords[i2] + offset;
      }
    }
    coords = coords.map((c, i2) => c - start[i2]);
    const inIndex = util_exports.locToIndex(coords, xRank, xStrides);
    resVals[i] = xVals[inIndex];
  }
  const outId = backend.write(resVals, outShape, x.dtype);
  return { dataId: outId, shape: outShape, dtype: x.dtype };
}
var mirrorPadConfig = {
  kernelName: MirrorPad,
  backendName: "cpu",
  kernelFunc: mirrorPad2
};

// src/tfjs-backend-cpu/src/kernels/Mod.ts
var modImpl = createSimpleBinaryKernelImpl((aValue, bValue) => {
  const rem = aValue % bValue;
  if (aValue < 0 && bValue < 0 || aValue >= 0 && bValue >= 0) {
    return rem;
  } else {
    return (rem + bValue) % bValue;
  }
});
var mod2 = binaryKernelFunc(Mod, modImpl);
var modConfig = {
  kernelName: Mod,
  backendName: "cpu",
  kernelFunc: mod2
};

// src/tfjs-backend-cpu/src/kernels/Multinomial.ts
var seedrandom2 = __toESM(require_seedrandom2());

// src/tfjs-backend-cpu/src/kernels/Softmax.ts
function softmax2(args) {
  const { inputs, backend, attrs } = args;
  const { logits } = inputs;
  const { dim } = attrs;
  const logitsRank = logits.shape.length;
  let $dim = dim;
  if ($dim === -1) {
    $dim = logitsRank - 1;
  }
  if ($dim !== logitsRank - 1) {
    throw Error(
      `Softmax along a non-last dimension is not yet supported. Logits was rank ${logitsRank} and dim was ${$dim}`
    );
  }
  const axes = util_exports.parseAxisParam([$dim], logits.shape);
  const maxLogit = max2({
    inputs: { x: logits },
    backend,
    attrs: { reductionIndices: axes, keepDims: false }
  });
  const expandedShape = backend_util_exports.expandShapeToKeepDim(maxLogit.shape, axes);
  const maxLogitReshaped = reshape2({ inputs: { x: maxLogit }, backend, attrs: { shape: expandedShape } });
  const a = sub2({ inputs: { a: logits, b: maxLogitReshaped }, backend });
  const b = exp2({ inputs: { x: a }, backend });
  const sumExp = sum3({ inputs: { x: b }, backend, attrs: { axis: axes, keepDims: false } });
  const sumReshaped = reshape2({ inputs: { x: sumExp }, backend, attrs: { shape: expandedShape } });
  const result = div2({ inputs: { a: b, b: sumReshaped }, backend });
  backend.disposeIntermediateTensorInfo(maxLogit);
  backend.disposeIntermediateTensorInfo(maxLogitReshaped);
  backend.disposeIntermediateTensorInfo(a);
  backend.disposeIntermediateTensorInfo(b);
  backend.disposeIntermediateTensorInfo(sumExp);
  backend.disposeIntermediateTensorInfo(sumReshaped);
  return result;
}
var softmaxConfig = {
  kernelName: Softmax,
  backendName: "cpu",
  kernelFunc: softmax2
};

// src/tfjs-backend-cpu/src/kernels/Multinomial.ts
function multinomial2(args) {
  const { inputs, backend, attrs } = args;
  const { logits } = inputs;
  const { numSamples, seed, normalized } = attrs;
  assertNotComplex(logits, "multinomial");
  const probabilities = normalized ? logits : softmax2({ inputs: { logits }, backend, attrs: { dim: -1 } });
  const batchSize = probabilities.shape[0];
  const numEvents = probabilities.shape[1];
  const probVals = backend.data.get(probabilities.dataId).values;
  const resShape = [batchSize, numSamples];
  const resVals = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(resShape), "int32");
  for (let b = 0; b < batchSize; ++b) {
    const offset = b * numEvents;
    const cdf = new Float32Array(numEvents - 1);
    cdf[0] = probVals[offset];
    for (let event = 1; event < cdf.length; ++event) {
      cdf[event] = cdf[event - 1] + probVals[offset + event];
    }
    const random = seedrandom2.alea(seed.toString());
    const outOffset = b * numSamples;
    for (let sampleId = 0; sampleId < numSamples; ++sampleId) {
      const r = random();
      resVals[outOffset + sampleId] = cdf.length;
      for (let event = 0; event < cdf.length; event++) {
        if (r < cdf[event]) {
          resVals[outOffset + sampleId] = event;
          break;
        }
      }
    }
  }
  if (!normalized) {
    backend.disposeIntermediateTensorInfo(probabilities);
  }
  return backend.makeTensorInfo(resShape, "int32", resVals);
}
var multinomialConfig = {
  kernelName: Multinomial,
  backendName: "cpu",
  kernelFunc: multinomial2
};

// src/tfjs-backend-cpu/src/kernels/NonMaxSuppressionV3.ts
var nonMaxSuppressionV3Impl2 = kernel_impls_exports.nonMaxSuppressionV3Impl;
function nonMaxSuppressionV3(args) {
  const { inputs, backend, attrs } = args;
  const { boxes, scores } = inputs;
  const { maxOutputSize, iouThreshold, scoreThreshold } = attrs;
  assertNotComplex(boxes, "NonMaxSuppression");
  const boxesVals = backend.data.get(boxes.dataId).values;
  const scoresVals = backend.data.get(scores.dataId).values;
  const { selectedIndices } = nonMaxSuppressionV3Impl2(
    boxesVals,
    scoresVals,
    maxOutputSize,
    iouThreshold,
    scoreThreshold
  );
  return backend.makeTensorInfo(
    [selectedIndices.length],
    "int32",
    new Int32Array(selectedIndices)
  );
}
var nonMaxSuppressionV3Config = {
  kernelName: NonMaxSuppressionV3,
  backendName: "cpu",
  kernelFunc: nonMaxSuppressionV3
};

// src/tfjs-backend-cpu/src/kernels/NonMaxSuppressionV4.ts
var nonMaxSuppressionV4Impl2 = kernel_impls_exports.nonMaxSuppressionV4Impl;
function nonMaxSuppressionV4(args) {
  const { inputs, backend, attrs } = args;
  const { boxes, scores } = inputs;
  const { maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize } = attrs;
  assertNotComplex(boxes, "NonMaxSuppressionPadded");
  const boxesVals = backend.data.get(boxes.dataId).values;
  const scoresVals = backend.data.get(scores.dataId).values;
  const { selectedIndices, validOutputs } = nonMaxSuppressionV4Impl2(
    boxesVals,
    scoresVals,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    padToMaxOutputSize
  );
  return [
    backend.makeTensorInfo(
      [selectedIndices.length],
      "int32",
      new Int32Array(selectedIndices)
    ),
    backend.makeTensorInfo([], "int32", new Int32Array([validOutputs]))
  ];
}
var nonMaxSuppressionV4Config = {
  kernelName: NonMaxSuppressionV4,
  backendName: "cpu",
  kernelFunc: nonMaxSuppressionV4
};

// src/tfjs-backend-cpu/src/kernels/NonMaxSuppressionV5.ts
var nonMaxSuppressionV5Impl2 = kernel_impls_exports.nonMaxSuppressionV5Impl;
function nonMaxSuppressionV5(args) {
  const { inputs, backend, attrs } = args;
  const { boxes, scores } = inputs;
  const { maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma } = attrs;
  assertNotComplex(boxes, "NonMaxSuppressionWithScore");
  const boxesVals = backend.data.get(boxes.dataId).values;
  const scoresVals = backend.data.get(scores.dataId).values;
  const maxOutputSizeVal = maxOutputSize;
  const iouThresholdVal = iouThreshold;
  const scoreThresholdVal = scoreThreshold;
  const softNmsSigmaVal = softNmsSigma;
  const { selectedIndices, selectedScores } = nonMaxSuppressionV5Impl2(
    boxesVals,
    scoresVals,
    maxOutputSizeVal,
    iouThresholdVal,
    scoreThresholdVal,
    softNmsSigmaVal
  );
  return [
    backend.makeTensorInfo(
      [selectedIndices.length],
      "int32",
      new Int32Array(selectedIndices)
    ),
    backend.makeTensorInfo(
      [selectedScores.length],
      "float32",
      new Float32Array(selectedScores)
    )
  ];
}
var nonMaxSuppressionV5Config = {
  kernelName: NonMaxSuppressionV5,
  backendName: "cpu",
  kernelFunc: nonMaxSuppressionV5
};

// src/tfjs-backend-cpu/src/kernels/OneHot.ts
function oneHot2(args) {
  const { inputs, backend, attrs } = args;
  const { indices } = inputs;
  const { dtype, depth, onValue, offValue } = attrs;
  assertNotComplex(indices, "oneHot");
  const indicesSize = util_exports.sizeFromShape(indices.shape);
  const res = new Float32Array(indicesSize * depth);
  res.fill(offValue);
  const indicesVal = backend.data.get(indices.dataId).values;
  for (let event = 0; event < indicesSize; ++event) {
    if (indicesVal[event] >= 0 && indicesVal[event] < depth) {
      res[event * depth + indicesVal[event]] = onValue;
    }
  }
  return backend.makeTensorInfo([...indices.shape, depth], dtype, res);
}
var oneHotConfig = {
  kernelName: OneHot,
  backendName: "cpu",
  kernelFunc: oneHot2
};

// src/tfjs-backend-cpu/src/kernels/ZerosLike.ts
function zerosLike2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  if (x.dtype === "string") {
    throw new Error("zerosLike is not supported for string tensors");
  } else if (x.dtype === "complex64") {
    const realPart = real2({ inputs: { input: x }, backend });
    const r = zerosLike2({ inputs: { x: realPart }, backend });
    const imagPart = imag2({ inputs: { input: x }, backend });
    const i = zerosLike2({ inputs: { x: imagPart }, backend });
    const result = complex2({ inputs: { real: r, imag: i }, backend });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(r);
    backend.disposeIntermediateTensorInfo(imagPart);
    backend.disposeIntermediateTensorInfo(i);
    return result;
  } else {
    return fill2({ backend, attrs: { shape: x.shape, value: 0, dtype: x.dtype } });
  }
}
var zerosLikeConfig = {
  kernelName: ZerosLike,
  backendName: "cpu",
  kernelFunc: zerosLike2
};

// src/tfjs-backend-cpu/src/kernels/OnesLike.ts
function onesLike2(args) {
  const { inputs, backend } = args;
  const { x } = inputs;
  if (x.dtype === "string") {
    throw new Error("onesLike is not supported for string tensors");
  } else if (x.dtype === "complex64") {
    const realPart = real2({ inputs: { input: x }, backend });
    const r = onesLike2({ inputs: { x: realPart }, backend });
    const imagPart = imag2({ inputs: { input: x }, backend });
    const i = zerosLike2({ inputs: { x: imagPart }, backend });
    const result = complex2({ inputs: { real: r, imag: i }, backend });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(r);
    backend.disposeIntermediateTensorInfo(imagPart);
    backend.disposeIntermediateTensorInfo(i);
    return result;
  } else {
    return fill2({ backend, attrs: { shape: x.shape, value: 1, dtype: x.dtype } });
  }
}
var onesLikeConfig = {
  kernelName: OnesLike,
  backendName: "cpu",
  kernelFunc: onesLike2
};

// src/tfjs-backend-cpu/src/kernels/Pack.ts
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
  intermediateTensorInfos.forEach(
    (t) => backend.disposeIntermediateTensorInfo(t)
  );
  return result;
}
var packConfig = {
  kernelName: Pack,
  backendName: "cpu",
  kernelFunc: pack
};

// src/tfjs-backend-cpu/src/kernels/PadV2.ts
function padV2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { paddings, constantValue } = attrs;
  assertNotComplex(x, "pad");
  const outShape = paddings.map(
    (p2, i) => p2[0] + x.shape[i] + p2[1]
    /* afterPad */
  );
  const start = paddings.map((p2) => p2[0]);
  const xVals = backend.data.get(x.dataId).values;
  const xSize = util_exports.sizeFromShape(x.shape);
  const xRank = x.shape.length;
  const xStrides = util_exports.computeStrides(x.shape);
  const resultSize = util_exports.sizeFromShape(outShape);
  const resultRank = outShape.length;
  const resultStrides = util_exports.computeStrides(outShape);
  const resVals = util_exports.getTypedArrayFromDType(x.dtype, resultSize);
  if (constantValue !== 0) {
    resVals.fill(constantValue);
  }
  for (let i = 0; i < xSize; i++) {
    const coords = util_exports.indexToLoc(i, xRank, xStrides);
    const outCoords = coords.map((c, i2) => c + start[i2]);
    const outIndex = util_exports.locToIndex(outCoords, resultRank, resultStrides);
    resVals[outIndex] = xVals[i];
  }
  const outId = backend.write(resVals, outShape, x.dtype);
  return { dataId: outId, shape: outShape, dtype: x.dtype };
}
var padV2Config = {
  kernelName: PadV2,
  backendName: "cpu",
  kernelFunc: padV2
};

// src/tfjs-backend-cpu/src/kernels/Pow.ts
var powImpl = createSimpleBinaryKernelImpl((a, b) => Math.pow(a, b));
var pow2 = binaryKernelFunc(Pow, powImpl);
var powConfig = {
  kernelName: Pow,
  backendName: "cpu",
  kernelFunc: pow2
};

// src/tfjs-backend-cpu/src/kernels/RaggedGather.ts
function raggedGather2(args) {
  const { inputs, backend, attrs } = args;
  const { paramsNestedSplits, paramsDenseValues, indices } = inputs;
  const { outputRaggedRank } = attrs;
  const $paramsNestedSplits = paramsNestedSplits.map(
    (t) => backend.data.get(t.dataId).values
  );
  const $paramsNestedSplitsShapes = paramsNestedSplits.map((t) => t.shape);
  const $paramsDenseValues = backend.data.get(paramsDenseValues.dataId).values;
  const $indices = backend.data.get(indices.dataId).values;
  const [outputNestedSplits, outputDenseValues, outputDenseValuesShape] = raggedGatherImpl(
    $paramsNestedSplits,
    $paramsNestedSplitsShapes,
    $paramsDenseValues,
    paramsDenseValues.shape,
    paramsDenseValues.dtype,
    $indices,
    indices.shape,
    outputRaggedRank
  );
  const outputNestedSplitsTensors = outputNestedSplits.map(
    (splits) => backend.makeTensorInfo([splits.length], "int32", splits)
  );
  const outputDenseValuesTensor = backend.makeTensorInfo(
    outputDenseValuesShape,
    paramsDenseValues.dtype,
    outputDenseValues
  );
  return outputNestedSplitsTensors.concat([outputDenseValuesTensor]);
}
var raggedGatherConfig = {
  kernelName: RaggedGather,
  backendName: "cpu",
  kernelFunc: raggedGather2
};

// src/tfjs-backend-cpu/src/kernels/RaggedRange.ts
function raggedRange2(args) {
  const { inputs, backend } = args;
  const { starts, limits, deltas } = inputs;
  const $starts = backend.data.get(starts.dataId).values;
  const $limits = backend.data.get(limits.dataId).values;
  const $deltas = backend.data.get(deltas.dataId).values;
  const [rtNestedSplitsData, rtDenseValuesData] = raggedRangeImpl(
    $starts,
    starts.shape,
    starts.dtype,
    $limits,
    limits.shape,
    $deltas,
    deltas.shape
  );
  const rtNestedSplits = backend.makeTensorInfo(
    [rtNestedSplitsData.length],
    "int32",
    rtNestedSplitsData
  );
  const rtDenseValues = backend.makeTensorInfo(
    [rtDenseValuesData.length],
    starts.dtype,
    rtDenseValuesData
  );
  return [rtNestedSplits, rtDenseValues];
}
var raggedRangeConfig = {
  kernelName: RaggedRange,
  backendName: "cpu",
  kernelFunc: raggedRange2
};

// src/tfjs-backend-cpu/src/kernels/RaggedTensorToTensor.ts
function raggedTensorToTensor2(args) {
  const { inputs, backend, attrs } = args;
  const { shape, values, defaultValue, rowPartitionTensors } = inputs;
  const { rowPartitionTypes } = attrs;
  const $shape = backend.data.get(shape.dataId).values;
  const $values = backend.data.get(values.dataId).values;
  const $defaultValue = backend.data.get(defaultValue.dataId).values;
  const $rowPartitionValues = rowPartitionTensors.map(
    (t) => backend.data.get(t.dataId).values
  );
  const rowPartitionValuesShapes = rowPartitionTensors.map((t) => t.shape);
  const [outputShape, output] = raggedTensorToTensorImpl(
    $shape,
    shape.shape,
    $values,
    values.shape,
    values.dtype,
    $defaultValue,
    defaultValue.shape,
    $rowPartitionValues,
    rowPartitionValuesShapes,
    rowPartitionTypes
  );
  return backend.makeTensorInfo(outputShape, values.dtype, output);
}
var raggedTensorToTensorConfig = {
  kernelName: RaggedTensorToTensor,
  backendName: "cpu",
  kernelFunc: raggedTensorToTensor2
};

// src/tfjs-backend-cpu/src/kernels/Range.ts
function range2(args) {
  const { backend, attrs } = args;
  const { start, stop, dtype, step: step3 } = attrs;
  const values = rangeImpl(start, stop, step3, dtype);
  return backend.makeTensorInfo([values.length], dtype, values);
}
var rangeConfig = {
  kernelName: Range,
  backendName: "cpu",
  kernelFunc: range2
};

// src/tfjs-backend-cpu/src/kernels/Reciprocal.ts
var reciprocal2 = unaryKernelFunc(Reciprocal, (xi) => 1 / xi);
var reciprocalConfig = {
  kernelName: Reciprocal,
  backendName: "cpu",
  kernelFunc: reciprocal2
};

// src/tfjs-backend-cpu/src/kernels/ResizeBilinear.ts
function resizeBilinear2(args) {
  const { inputs, backend, attrs } = args;
  const { images } = inputs;
  const { alignCorners, halfPixelCenters, size } = attrs;
  assertNotComplex(images, "resizeBilinear");
  const imagesStrides = util_exports.computeStrides(images.shape);
  const [newHeight, newWidth] = size;
  const [batch, oldHeight, oldWidth, numChannels] = images.shape;
  const xValues = backend.data.get(images.dataId).values;
  const result = new Float32Array(
    util_exports.sizeFromShape([batch, newHeight, newWidth, numChannels])
  );
  const effectiveInputSize = [
    alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight,
    alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth
  ];
  const effectiveOutputSize = [
    alignCorners && newHeight > 1 ? newHeight - 1 : newHeight,
    alignCorners && newWidth > 1 ? newWidth - 1 : newWidth
  ];
  let outputIdx = 0;
  const effectiveRowSizeRatio = effectiveInputSize[0] / effectiveOutputSize[0];
  const effectiveColSizeRatio = effectiveInputSize[1] / effectiveOutputSize[1];
  for (let b = 0; b < batch; b++) {
    for (let r = 0; r < newHeight; r++) {
      let sourceFracRow;
      if (halfPixelCenters) {
        sourceFracRow = effectiveRowSizeRatio * (r + 0.5) - 0.5;
      } else {
        sourceFracRow = effectiveRowSizeRatio * r;
      }
      const sourceRowFloor = Math.max(0, Math.floor(sourceFracRow));
      const rowFrac = sourceFracRow - sourceRowFloor;
      const sourceRowCeil = Math.min(oldHeight - 1, Math.ceil(sourceFracRow));
      const topRowOffset = b * imagesStrides[0] + sourceRowFloor * imagesStrides[1];
      const botRowOffset = b * imagesStrides[0] + sourceRowCeil * imagesStrides[1];
      for (let c = 0; c < newWidth; c++) {
        let sourceFracCol;
        if (halfPixelCenters) {
          sourceFracCol = effectiveColSizeRatio * (c + 0.5) - 0.5;
        } else {
          sourceFracCol = effectiveColSizeRatio * c;
        }
        const sourceColFloor = Math.max(0, Math.floor(sourceFracCol));
        const colFrac = sourceFracCol - sourceColFloor;
        const sourceColCeil = Math.min(oldWidth - 1, Math.ceil(sourceFracCol));
        const topLeftOffest = topRowOffset + sourceColFloor * imagesStrides[2];
        const botLeftOffset = botRowOffset + sourceColFloor * imagesStrides[2];
        const topRightOffset = topRowOffset + sourceColCeil * imagesStrides[2];
        const botRightOffest = botRowOffset + sourceColCeil * imagesStrides[2];
        for (let d = 0; d < numChannels; d++) {
          const topLeft = xValues[topLeftOffest + d];
          const bottomLeft = xValues[botLeftOffset + d];
          const topRight = xValues[topRightOffset + d];
          const bottomRight = xValues[botRightOffest + d];
          const top = topLeft + (topRight - topLeft) * colFrac;
          const bottom = bottomLeft + (bottomRight - bottomLeft) * colFrac;
          const newValue = top + (bottom - top) * rowFrac;
          result[outputIdx++] = newValue;
        }
      }
    }
  }
  return backend.makeTensorInfo(
    [batch, newHeight, newWidth, numChannels],
    "float32",
    result
  );
}
var resizeBilinearConfig = {
  kernelName: ResizeBilinear,
  backendName: "cpu",
  kernelFunc: resizeBilinear2
};

// src/tfjs-backend-cpu/src/kernels/ResizeBilinearGrad.ts
function resizeBilinearGrad(args) {
  const { inputs, backend, attrs } = args;
  const { images, dy } = inputs;
  const { alignCorners } = attrs;
  assertNotComplex([dy, images], "resizeBilinearGrad");
  const imagesStrides = util_exports.computeStrides(images.shape);
  const [batch, xHeight, xWidth, depth] = images.shape;
  const [, yHeight, yWidth] = dy.shape;
  const output = new Float32Array(batch * xHeight * xWidth * depth);
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
  const dyValues = backend.data.get(dy.dataId).values;
  let offset = 0;
  for (let b = 0; b < batch; b++) {
    const bOffset = b * imagesStrides[0];
    for (let r = 0; r < yHeight; r++) {
      const dxR = r * heightScale;
      const topDxRIndex = Math.floor(dxR);
      const bottomDxRIndex = Math.min(Math.ceil(dxR), xHeight - 1);
      const topDxROffset = bOffset + topDxRIndex * imagesStrides[1];
      const bottomDxROffset = bOffset + bottomDxRIndex * imagesStrides[1];
      const dxRLerp = dxR - topDxRIndex;
      const inverseDxRLerp = 1 - dxRLerp;
      for (let c = 0; c < yWidth; c++) {
        const dxC = c * widthScale;
        const leftDxCIndex = Math.floor(dxC);
        const rightDxCIndex = Math.min(Math.ceil(dxC), xWidth - 1);
        const dxCLerp = dxC - leftDxCIndex;
        const inverseDxCLerp = 1 - dxCLerp;
        const topLeftRCOffset = topDxROffset + leftDxCIndex * imagesStrides[2];
        const topRightRCOffset = topDxROffset + rightDxCIndex * imagesStrides[2];
        const bottomLeftRCOffset = bottomDxROffset + leftDxCIndex * imagesStrides[2];
        const bottomRightRCOffset = bottomDxROffset + rightDxCIndex * imagesStrides[2];
        const inverseDxRLerpTimesInverseDxCLerp = inverseDxRLerp * inverseDxCLerp;
        const inverseDxRLerpTimesDxCLerp = inverseDxRLerp * dxCLerp;
        const dxRLerpTimesInverseDxCLerp = dxRLerp * inverseDxCLerp;
        const dxRLerpTimesDxCLerp = dxRLerp * dxCLerp;
        for (let d = 0; d < depth; d++) {
          const dyVal = dyValues[offset++];
          output[topLeftRCOffset + d] += dyVal * inverseDxRLerpTimesInverseDxCLerp;
          output[topRightRCOffset + d] += dyVal * inverseDxRLerpTimesDxCLerp;
          output[bottomLeftRCOffset + d] += dyVal * dxRLerpTimesInverseDxCLerp;
          output[bottomRightRCOffset + d] += dyVal * dxRLerpTimesDxCLerp;
        }
      }
    }
  }
  return backend.makeTensorInfo(
    [batch, xWidth, xHeight, depth],
    "float32",
    output
  );
}
var resizeBilinearGradConfig = {
  kernelName: ResizeBilinearGrad,
  backendName: "cpu",
  kernelFunc: resizeBilinearGrad
};

// src/tfjs-backend-cpu/src/kernels/ResizeNearestNeighbor.ts
function resizeNearestNeighbor2(args) {
  const { inputs, backend, attrs } = args;
  const { images } = inputs;
  const { alignCorners, halfPixelCenters, size } = attrs;
  assertNotComplex(images, "resizeNearestNeighbor");
  const imagesStrides = util_exports.computeStrides(images.shape);
  const [newHeight, newWidth] = size;
  const [batch, oldHeight, oldWidth, numChannels] = images.shape;
  const xValues = backend.data.get(images.dataId).values;
  const output = new Float32Array(batch * newHeight * newWidth * numChannels);
  const effectiveInputSize = [
    alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight,
    alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth
  ];
  const effectiveOutputSize = [
    alignCorners && newHeight > 1 ? newHeight - 1 : newHeight,
    alignCorners && newWidth > 1 ? newWidth - 1 : newWidth
  ];
  const effectiveRowSizeRatio = effectiveInputSize[0] / effectiveOutputSize[0];
  const effectiveColSizeRatio = effectiveInputSize[1] / effectiveOutputSize[1];
  let outputOffset = 0;
  for (let b = 0; b < batch; b++) {
    const batchOffset = b * imagesStrides[0];
    for (let r = 0; r < newHeight; r++) {
      const sourceFracRow = halfPixelCenters ? effectiveRowSizeRatio * (r + 0.5) : effectiveRowSizeRatio * r;
      let sourceNearestRow = Math.min(
        oldHeight - 1,
        alignCorners ? Math.round(sourceFracRow) : Math.floor(sourceFracRow)
      );
      if (halfPixelCenters) {
        sourceNearestRow = Math.max(0, sourceNearestRow);
      }
      const rowOffset = batchOffset + sourceNearestRow * imagesStrides[1];
      for (let c = 0; c < newWidth; c++) {
        const sourceFracCol = halfPixelCenters ? effectiveColSizeRatio * (c + 0.5) : effectiveColSizeRatio * c;
        let sourceNearestCol = Math.min(
          oldWidth - 1,
          alignCorners ? Math.round(sourceFracCol) : Math.floor(sourceFracCol)
        );
        if (halfPixelCenters) {
          sourceNearestCol = Math.max(0, sourceNearestCol);
        }
        const colOffset = rowOffset + sourceNearestCol * imagesStrides[2];
        for (let d = 0; d < numChannels; d++) {
          const newVal = xValues[colOffset + d];
          output[outputOffset++] = newVal;
        }
      }
    }
  }
  return backend.makeTensorInfo(
    [batch, newHeight, newWidth, numChannels],
    images.dtype,
    output
  );
}
var resizeNearestNeighborConfig = {
  kernelName: ResizeNearestNeighbor,
  backendName: "cpu",
  kernelFunc: resizeNearestNeighbor2
};

// src/tfjs-backend-cpu/src/kernels/ResizeNearestNeighborGrad.ts
function resizeNearestNeighborGrad(args) {
  const { inputs, backend, attrs } = args;
  const { images, dy } = inputs;
  const { alignCorners } = attrs;
  assertNotComplex([dy, images], "resizeNearestNeighborGrad");
  const imagesStrides = util_exports.computeStrides(images.shape);
  const dyStrides = util_exports.computeStrides(dy.shape);
  const [batch, xHeight, xWidth, depth] = images.shape;
  const [, yHeight, yWidth] = dy.shape;
  const output = new Float32Array(batch * xHeight * xWidth * depth);
  const dyValues = backend.data.get(dy.dataId).values;
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
  for (let b = 0; b < batch; b++) {
    const batchOffset = b * imagesStrides[0];
    for (let r = 0; r < xHeight; r++) {
      const rowOffset = batchOffset + r * imagesStrides[1];
      const startRLerp = Math.floor(r * invHeightScale);
      const startDyR = Math.floor(startRLerp - winHeight / 2);
      for (let c = 0; c < xWidth; c++) {
        const colOffset = rowOffset + c * imagesStrides[2];
        const startCLerp = Math.floor(c * invWidthScale);
        const startDyC = Math.floor(startCLerp - winWidth / 2);
        for (let d = 0; d < depth; d++) {
          let accum = 0;
          for (let dyRIndex = 0; dyRIndex < winHeight; dyRIndex++) {
            const dyR = dyRIndex + startDyR;
            if (dyR < 0 || dyR >= yHeight) {
              continue;
            }
            const dyROffset = batchOffset + dyR * dyStrides[1];
            const sourceFracRow = dyR * heightScale;
            const sourceNearestRow = Math.min(
              xHeight - 1,
              alignCorners ? Math.round(sourceFracRow) : Math.floor(sourceFracRow)
            );
            if (r !== sourceNearestRow) {
              continue;
            }
            for (let dyCIndex = 0; dyCIndex < winWidth; dyCIndex++) {
              const dyC = dyCIndex + startDyC;
              if (dyC < 0 || dyC >= yWidth) {
                continue;
              }
              const dyCOffset = dyROffset + dyC * dyStrides[2];
              const sourceFracCol = dyC * widthScale;
              const sourceNearestCol = Math.min(
                xWidth - 1,
                alignCorners ? Math.round(sourceFracCol) : Math.floor(sourceFracCol)
              );
              if (c === sourceNearestCol) {
                accum += dyValues[dyCOffset + d];
              }
            }
          }
          output[colOffset + d] = accum;
        }
      }
    }
  }
  return backend.makeTensorInfo(images.shape, images.dtype, output);
}
var resizeNearestNeighborGradConfig = {
  kernelName: ResizeNearestNeighborGrad,
  backendName: "cpu",
  kernelFunc: resizeNearestNeighborGrad
};

// src/tfjs-backend-cpu/src/kernels/Reverse.ts
function reverse2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { dims } = attrs;
  assertNotComplex(x, "reverse");
  const xRank = x.shape.length;
  const $dims = util_exports.parseAxisParam(dims, x.shape);
  if (xRank === 0) {
    return identity({ inputs: { x }, backend });
  }
  const outBuf = new TensorBuffer(x.shape, x.dtype);
  const xBuf = backend.bufferSync(x);
  for (let i = 0; i < outBuf.size; i++) {
    const outLoc = outBuf.indexToLoc(i);
    const inLoc = outLoc.slice();
    $dims.forEach((d) => inLoc[d] = x.shape[d] - 1 - inLoc[d]);
    outBuf.set(xBuf.get(...inLoc), ...outLoc);
  }
  return backend.makeTensorInfo(outBuf.shape, outBuf.dtype, outBuf.values);
}
var reverseConfig = {
  kernelName: Reverse,
  backendName: "cpu",
  kernelFunc: reverse2
};

// src/tfjs-backend-cpu/src/kernels/RotateWithOffset.ts
var rotateWithOffsetConfig = {
  kernelName: RotateWithOffset,
  backendName: "cpu",
  kernelFunc: ({ inputs, attrs, backend }) => {
    const { image } = inputs;
    const { radians, fillValue, center } = attrs;
    const cpuBackend = backend;
    const output = util_exports.getTypedArrayFromDType(
      image.dtype,
      util_exports.sizeFromShape(image.shape)
    );
    const [batch, imageHeight, imageWidth, numChannels] = image.shape;
    const [centerX, centerY] = backend_util_exports.getImageCenter(center, imageHeight, imageWidth);
    const fullOpacityValue = 255;
    const sinFactor = Math.sin(radians);
    const cosFactor = Math.cos(radians);
    const imageVals = cpuBackend.data.get(image.dataId).values;
    for (let batchIdx = 0; batchIdx < batch; batchIdx++) {
      const batchOffset = batchIdx * imageWidth * imageHeight * numChannels;
      for (let row = 0; row < imageHeight; row++) {
        const rowOffset = row * (imageWidth * numChannels);
        for (let col = 0; col < imageWidth; col++) {
          const colOffset = col * numChannels;
          for (let channel = 0; channel < numChannels; channel++) {
            const coords = [batch, row, col, channel];
            const x = coords[2];
            const y = coords[1];
            let coordX = (x - centerX) * cosFactor - (y - centerY) * sinFactor;
            let coordY = (x - centerX) * sinFactor + (y - centerY) * cosFactor;
            coordX = Math.round(coordX + centerX);
            coordY = Math.round(coordY + centerY);
            let outputValue = fillValue;
            if (typeof fillValue !== "number") {
              if (channel === 3) {
                outputValue = fullOpacityValue;
              } else {
                outputValue = fillValue[channel];
              }
            }
            if (coordX >= 0 && coordX < imageWidth && coordY >= 0 && coordY < imageHeight) {
              const rotatedRowOffset = coordY * (imageWidth * numChannels);
              const rotatedColOffset = coordX * numChannels;
              const imageIdx = batchOffset + rotatedRowOffset + rotatedColOffset + channel;
              outputValue = imageVals[imageIdx];
            }
            const outIdx = batchOffset + rowOffset + colOffset + channel;
            output[outIdx] = outputValue;
          }
        }
      }
    }
    const dataId = cpuBackend.write(output, image.shape, image.dtype);
    return { dataId, shape: image.shape, dtype: image.dtype };
  }
};

// src/tfjs-backend-cpu/src/kernels/Round.ts
var round3 = unaryKernelFunc(Round, (xi) => {
  const base = Math.floor(xi);
  if (xi - base < 0.5) {
    return Math.floor(xi);
  } else if (xi - base > 0.5) {
    return Math.ceil(xi);
  } else {
    if (base % 2 === 0) {
      return base;
    } else {
      return base + 1;
    }
  }
});
var roundConfig = {
  kernelName: Round,
  backendName: "cpu",
  kernelFunc: round3
};

// src/tfjs-backend-cpu/src/kernels/ScatterNd.ts
function scatterNd(args) {
  const { inputs, backend, attrs } = args;
  const { indices, updates } = inputs;
  const { shape } = attrs;
  const { sliceRank, numUpdates, sliceSize, strides, outputSize } = backend_util_exports.calculateShapes(updates, indices, shape);
  const sumDupeIndices = true;
  const indicesBuf = backend.bufferSync(indices);
  const updatesBuf = backend.bufferSync(updates);
  const outBuf = scatterImpl(
    indicesBuf,
    updatesBuf,
    shape,
    outputSize,
    sliceSize,
    numUpdates,
    sliceRank,
    strides,
    0,
    sumDupeIndices
  );
  return backend.makeTensorInfo(shape, outBuf.dtype, outBuf.values);
}
var scatterNdConfig = {
  kernelName: ScatterNd,
  backendName: "cpu",
  kernelFunc: scatterNd
};

// src/tfjs-backend-cpu/src/kernels/SearchSorted_impl.ts
function lowerBound2(array, value) {
  let left = 0;
  let right = array.length;
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] < value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}
function upperBound2(array, value) {
  let left = 0;
  let right = array.length;
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] <= value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}
function searchSortedImpl(sortedInputs, values, batchSize, numInputs, numValues, side) {
  const output = util_exports.getArrayFromDType("int32", batchSize * numValues);
  for (let b = 0; b < batchSize; ++b) {
    const sortedInputsSlice = sortedInputs.slice(b * numInputs, (b + 1) * numInputs);
    const outputOffset = b * numValues;
    for (let i = 0; i < numValues; ++i) {
      output[outputOffset + i] = side === "left" ? lowerBound2(sortedInputsSlice, values[i + outputOffset]) : upperBound2(sortedInputsSlice, values[i + outputOffset]);
    }
  }
  return output;
}

// src/tfjs-backend-cpu/src/kernels/SearchSorted.ts
function searchSorted2(args) {
  const { inputs, backend, attrs } = args;
  const { sortedSequence, values } = inputs;
  const { side } = attrs;
  const $sortedSequence = backend.data.get(sortedSequence.dataId).values;
  const $values = backend.data.get(values.dataId).values;
  const output = searchSortedImpl(
    $sortedSequence,
    $values,
    sortedSequence.shape[0],
    sortedSequence.shape[1],
    values.shape[1],
    side
  );
  return backend.makeTensorInfo(values.shape, "int32", output);
}
var searchSortedConfig = {
  kernelName: SearchSorted,
  backendName: "cpu",
  kernelFunc: searchSorted2
};

// src/tfjs-backend-cpu/src/kernels/Select.ts
function select2(args) {
  const { inputs, backend } = args;
  const { condition, t, e } = inputs;
  assertNotComplex([condition, t, e], "select");
  const conditionRank = condition.shape.length;
  const values = backend.data.get(condition.dataId).values;
  const tValues = backend.data.get(t.dataId).values;
  const eValues = backend.data.get(e.dataId).values;
  const resultDtype = upcastType(t.dtype, e.dtype);
  const newValues = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(t.shape), resultDtype);
  let index = 0;
  const offset = conditionRank === 0 || conditionRank > 1 || t.shape.length === 1 ? 1 : util_exports.sizeFromShape(t.shape.slice(1));
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < offset; j++) {
      if (values[i] === 1) {
        newValues[index++] = tValues[i];
      } else {
        newValues[index++] = eValues[i];
      }
    }
  }
  return backend.makeTensorInfo(t.shape, resultDtype, newValues);
}
var selectConfig = {
  kernelName: Select,
  backendName: "cpu",
  kernelFunc: select2
};

// src/tfjs-backend-cpu/src/kernels/Selu.ts
var scaleAlpha = backend_util_exports.SELU_SCALEALPHA;
var scale = backend_util_exports.SELU_SCALE;
var selu2 = unaryKernelFunc(Selu, (xi) => {
  if (xi >= 0) {
    return scale * xi;
  } else {
    return scaleAlpha * (Math.exp(xi) - 1);
  }
});
var seluConfig = {
  kernelName: Selu,
  backendName: "cpu",
  kernelFunc: selu2
};

// src/tfjs-backend-cpu/src/kernels/Sign.ts
var sign2 = unaryKernelFunc(Sign, (xi) => {
  if (xi < 0) {
    return -1;
  } else if (xi > 0) {
    return 1;
  } else {
    return 0;
  }
});
var signConfig = {
  kernelName: Sign,
  backendName: "cpu",
  kernelFunc: sign2
};

// src/tfjs-backend-cpu/src/kernels/Sin.ts
var sin2 = unaryKernelFunc(Sin, (xi) => Math.sin(xi));
var sinConfig = {
  kernelName: Sin,
  backendName: "cpu",
  kernelFunc: sin2
};

// src/tfjs-backend-cpu/src/kernels/Sinh.ts
var sinh2 = unaryKernelFunc(Sinh, (xi) => Math.sinh(xi));
var sinhConfig = {
  kernelName: Sinh,
  backendName: "cpu",
  kernelFunc: sinh2
};

// src/tfjs-backend-cpu/src/kernels/Softplus.ts
var epsilon = 11920928955078125e-23;
var threshold2 = Math.log(epsilon) + 2;
var softplus2 = unaryKernelFunc(Softplus, (xi) => {
  const tooLarge = xi > -threshold2;
  const tooSmall = xi < threshold2;
  const expX = Math.exp(xi);
  let result;
  if (tooSmall) {
    result = expX;
  } else if (tooLarge) {
    result = xi;
  } else {
    result = Math.log(1 + expX);
  }
  return result;
});
var softplusConfig = {
  kernelName: Softplus,
  backendName: "cpu",
  kernelFunc: softplus2
};

// src/tfjs-backend-cpu/src/kernels/SpaceToBatchND.ts
function spaceToBatchND2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { blockShape, paddings } = attrs;
  assertNotComplex([x], "spaceToBatchND");
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
  backend.disposeIntermediateTensorInfo(paddedX);
  backend.disposeIntermediateTensorInfo(paddedXReshaped);
  backend.disposeIntermediateTensorInfo(paddedXT);
  return result;
}
var spaceToBatchNDConfig = {
  kernelName: SpaceToBatchND,
  backendName: "cpu",
  kernelFunc: spaceToBatchND2
};

// src/tfjs-backend-cpu/src/kernels/SparseFillEmptyRows.ts
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
  const $indices = backend.data.get(indices.dataId).values;
  const $values = backend.data.get(values.dataId).values;
  const $denseShape = backend.data.get(denseShape.dataId).values;
  const $defaultValue = backend.data.get(defaultValue.dataId).values[0];
  const [
    outputIndices,
    outputIndicesShape,
    outputValues,
    emptyRowIndicator,
    reverseIndexMap
  ] = sparseFillEmptyRowsImpl(
    $indices,
    indices.shape,
    indices.dtype,
    $values,
    values.dtype,
    $denseShape,
    $defaultValue
  );
  return [
    backend.makeTensorInfo(outputIndicesShape, indices.dtype, outputIndices),
    backend.makeTensorInfo(
      [outputIndicesShape[0]],
      values.dtype,
      outputValues
    ),
    backend.makeTensorInfo(
      [emptyRowIndicator.length],
      "bool",
      new Uint8Array(
        emptyRowIndicator.map((value) => Number(value))
      )
    ),
    backend.makeTensorInfo(
      [reverseIndexMap.length],
      indices.dtype,
      new Int32Array(reverseIndexMap)
    )
  ];
}
var sparseFillEmptyRowsConfig = {
  kernelName: SparseFillEmptyRows,
  backendName: "cpu",
  kernelFunc: sparseFillEmptyRows2
};

// src/tfjs-backend-cpu/src/kernels/SparseReshape.ts
function sparseReshape2(args) {
  const { inputs, backend } = args;
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
  const $inputShape = Array.from(backend.data.get(inputShape.dataId).values);
  const $inputIndices = backend.data.get(inputIndices.dataId).values;
  const targetShape = Array.from(backend.data.get(newShape.dataId).values);
  const [newIndices, indicesShape, outputShape] = sparseReshapeImpl(
    $inputIndices,
    inputIndices.shape,
    inputIndices.dtype,
    $inputShape,
    targetShape
  );
  return [
    backend.makeTensorInfo(indicesShape, inputIndices.dtype, newIndices),
    backend.makeTensorInfo(
      [outputShape.length],
      newShape.dtype,
      new Int32Array(outputShape)
    )
  ];
}
var sparseReshapeConfig = {
  kernelName: SparseReshape,
  backendName: "cpu",
  kernelFunc: sparseReshape2
};

// src/tfjs-backend-cpu/src/kernels/SparseSegmentMean.ts
function sparseSegmentMean2(args) {
  const { inputs, backend } = args;
  const { data, indices, segmentIds } = inputs;
  if (data.shape.length < 1) {
    throw new Error(
      `Data should be at least 1 dimensional but received scalar`
    );
  }
  if (indices.shape.length !== 1) {
    throw new Error(`Indices should be a vector but received shape
          ${indices.shape}`);
  }
  if (segmentIds.shape.length !== 1) {
    throw new Error(`Segment ids should be a vector but received shape
          ${segmentIds.shape}`);
  }
  if (indices.shape[0] !== segmentIds.shape[0]) {
    throw new Error(`segmentIds and indices should have same size.`);
  }
  const $data = backend.data.get(data.dataId).values;
  const $indices = backend.data.get(indices.dataId).values;
  const $segmentIds = backend.data.get(segmentIds.dataId).values;
  const [outputData, outputDataShape] = sparseSegmentReductionImpl(
    $data,
    data.shape,
    data.dtype,
    $indices,
    $segmentIds,
    true
  );
  return backend.makeTensorInfo(outputDataShape, data.dtype, outputData);
}
var sparseSegmentMeanConfig = {
  kernelName: SparseSegmentMean,
  backendName: "cpu",
  kernelFunc: sparseSegmentMean2
};

// src/tfjs-backend-cpu/src/kernels/SparseSegmentSum.ts
function sparseSegmentSum2(args) {
  const { inputs, backend } = args;
  const { data, indices, segmentIds } = inputs;
  if (data.shape.length < 1) {
    throw new Error(
      `Data should be at least 1 dimensional but received scalar`
    );
  }
  if (indices.shape.length !== 1) {
    throw new Error(`Indices should be a vector but received shape
         ${indices.shape}`);
  }
  if (segmentIds.shape.length !== 1) {
    throw new Error(`Segment ids should be a vector but received shape
         ${segmentIds.shape}`);
  }
  if (indices.shape[0] !== segmentIds.shape[0]) {
    throw new Error(`segmentIds and indices should have same size.`);
  }
  const $data = backend.data.get(data.dataId).values;
  const $indices = backend.data.get(indices.dataId).values;
  const $segmentIds = backend.data.get(segmentIds.dataId).values;
  const [outputData, outputDataShape] = sparseSegmentReductionImpl(
    $data,
    data.shape,
    data.dtype,
    $indices,
    $segmentIds
  );
  return backend.makeTensorInfo(outputDataShape, data.dtype, outputData);
}
var sparseSegmentSumConfig = {
  kernelName: SparseSegmentSum,
  backendName: "cpu",
  kernelFunc: sparseSegmentSum2
};

// src/tfjs-backend-cpu/src/kernels/SparseToDense.ts
function sparseToDense2(args) {
  const { inputs, backend, attrs } = args;
  const { sparseIndices, sparseValues, defaultValue } = inputs;
  const { outputShape } = attrs;
  const { sliceRank, numUpdates, sliceSize, strides, outputSize } = backend_util_exports.calculateShapes(sparseValues, sparseIndices, outputShape);
  const sumDupeIndices = false;
  const indicesBuf = backend.bufferSync(sparseIndices);
  let outBuf;
  switch (sparseValues.dtype) {
    case "bool": {
      const updatesBuf = backend.bufferSync(sparseValues);
      const $defaultValue = Boolean(backend.data.get(defaultValue.dataId).values[0]);
      outBuf = scatterImpl(
        indicesBuf,
        updatesBuf,
        outputShape,
        outputSize,
        sliceSize,
        numUpdates,
        sliceRank,
        strides,
        $defaultValue,
        sumDupeIndices
      );
      break;
    }
    case "float32": {
      const updatesBuf = backend.bufferSync(sparseValues);
      const $defaultValue = backend.data.get(defaultValue.dataId).values[0];
      outBuf = scatterImpl(
        indicesBuf,
        updatesBuf,
        outputShape,
        outputSize,
        sliceSize,
        numUpdates,
        sliceRank,
        strides,
        $defaultValue,
        sumDupeIndices
      );
      break;
    }
    case "int32": {
      const updatesBuf = backend.bufferSync(sparseValues);
      const $defaultValue = backend.data.get(defaultValue.dataId).values[0];
      outBuf = scatterImpl(
        indicesBuf,
        updatesBuf,
        outputShape,
        outputSize,
        sliceSize,
        numUpdates,
        sliceRank,
        strides,
        $defaultValue,
        sumDupeIndices
      );
      break;
    }
    case "string": {
      const updatesBuf = backend.bufferSync(sparseValues);
      const $defaultValue = util_exports.decodeString(
        backend.data.get(defaultValue.dataId).values[0]
      );
      outBuf = scatterImpl(
        indicesBuf,
        updatesBuf,
        outputShape,
        outputSize,
        sliceSize,
        numUpdates,
        sliceRank,
        strides,
        $defaultValue,
        sumDupeIndices
      );
      break;
    }
    default:
      throw new Error(`Unsupported type ${sparseValues.dtype}`);
  }
  return backend.makeTensorInfo(outputShape, outBuf.dtype, outBuf.values);
}
var sparseToDenseConfig = {
  kernelName: SparseToDense,
  backendName: "cpu",
  kernelFunc: sparseToDense2
};

// src/tfjs-backend-cpu/src/kernels/SplitV.ts
function splitV(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { numOrSizeSplits, axis } = attrs;
  const $axis = util_exports.parseAxisParam(axis, x.shape)[0];
  const splitSizes = backend_util_exports.prepareSplitSize(x, numOrSizeSplits, $axis);
  const begin = new Array(x.shape.length).fill(0);
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
  backendName: "cpu",
  kernelFunc: splitV
};

// src/tfjs-backend-cpu/src/kernels/Square.ts
var squareConfig = {
  kernelName: Square,
  backendName: "cpu",
  kernelFunc: ({ inputs, backend }) => {
    const { x } = inputs;
    const cpuBackend = backend;
    assertNotComplex(x, "square");
    const values = cpuBackend.data.get(x.dataId).values;
    const newValues = new Float32Array(values.length);
    for (let i = 0; i < values.length; ++i) {
      const value = values[i];
      newValues[i] = value * value;
    }
    const dataId = cpuBackend.write(newValues, x.shape, x.dtype);
    return { dataId, shape: x.shape, dtype: x.dtype };
  }
};

// src/tfjs-backend-cpu/src/kernels/Step.ts
var step2 = unaryKernelFunc(Step, (xi, attrs) => {
  const stepAttrs = attrs;
  if (isNaN(xi)) {
    return NaN;
  } else {
    return xi > 0 ? 1 : stepAttrs.alpha;
  }
});
var stepConfig = {
  kernelName: Step,
  backendName: "cpu",
  kernelFunc: step2
};

// src/tfjs-backend-cpu/src/kernels/StridedSlice.ts
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
  assertNotComplex(x, "stridedSlice");
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
    backend.disposeIntermediateTensorInfo(sliced);
  } else {
    const xBuf = backend.bufferSync(x);
    const outBuf = stridedSliceImpl(finalShapeSparse, xBuf, $strides, $begin);
    result = backend.makeTensorInfo(finalShape, outBuf.dtype, outBuf.values);
  }
  return result;
}
var stridedSliceConfig = {
  kernelName: StridedSlice,
  backendName: "cpu",
  kernelFunc: stridedSlice2
};

// src/tfjs-backend-cpu/src/kernels/StringNGrams.ts
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
  const $data = backend.data.get(data.dataId).values;
  const $dataSplits = backend.data.get(dataSplits.dataId).values;
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
  return [
    backend.makeTensorInfo([nGrams.length], "string", nGrams),
    backend.makeTensorInfo(dataSplits.shape, "int32", nGramsSplits)
  ];
}
var stringNGramsConfig = {
  kernelName: StringNGrams,
  backendName: "cpu",
  kernelFunc: stringNGrams2
};

// src/tfjs-backend-cpu/src/kernels/StringSplit.ts
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
    throw new Error(
      `Delimiter must be a scalar, got shape: ${delimiter.shape}`
    );
  }
  const $input = backend.data.get(input.dataId).values;
  const $delimiter = backend.data.get(delimiter.dataId).values[0];
  const [indices, values, shape] = stringSplitImpl($input, $delimiter, skipEmpty);
  const outputSize = values.length;
  return [
    backend.makeTensorInfo([outputSize, 2], "int32", indices),
    backend.makeTensorInfo([outputSize], "string", values),
    backend.makeTensorInfo([2], "int32", new Int32Array(shape))
  ];
}
var stringSplitConfig = {
  kernelName: StringSplit,
  backendName: "cpu",
  kernelFunc: stringSplit2
};

// src/tfjs-backend-cpu/src/kernels/StringToHashBucketFast.ts
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
  const $input = backend.data.get(input.dataId).values;
  const output = stringToHashBucketFastImpl($input, numBuckets);
  return backend.makeTensorInfo(input.shape, "int32", output);
}
var stringToHashBucketFastConfig = {
  kernelName: StringToHashBucketFast,
  backendName: "cpu",
  kernelFunc: stringToHashBucketFast2
};

// src/tfjs-backend-cpu/src/kernels/Tan.ts
var tan2 = unaryKernelFunc(Tan, (xi) => Math.tan(xi));
var tanConfig = {
  kernelName: Tan,
  backendName: "cpu",
  kernelFunc: tan2
};

// src/tfjs-backend-cpu/src/kernels/Tanh.ts
var tanh3 = unaryKernelFunc(Tanh, (xi) => Math.tanh(xi));
var tanhConfig = {
  kernelName: Tanh,
  backendName: "cpu",
  kernelFunc: tanh3
};

// src/tfjs-backend-cpu/src/kernels/TensorScatterUpdate.ts
function tensorScatterUpdate2(args) {
  const { inputs, backend } = args;
  const { tensor: tensor2, indices, updates } = inputs;
  const { sliceRank, numUpdates, sliceSize, strides, outputSize } = backend_util_exports.calculateShapes(updates, indices, tensor2.shape);
  const sumDupeIndices = false;
  const indicesBuf = backend.bufferSync(indices);
  const updatesBuf = backend.bufferSync(updates);
  const tensorBuf = backend.bufferSync(tensor2);
  const outBuf = scatterImpl(
    indicesBuf,
    updatesBuf,
    tensor2.shape,
    outputSize,
    sliceSize,
    numUpdates,
    sliceRank,
    strides,
    tensorBuf,
    sumDupeIndices
  );
  return backend.makeTensorInfo(tensor2.shape, outBuf.dtype, outBuf.values);
}
var tensorScatterUpdateConfig = {
  kernelName: TensorScatterUpdate,
  backendName: "cpu",
  kernelFunc: tensorScatterUpdate2
};

// src/tfjs-backend-cpu/src/kernels/Tile.ts
function tile2(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { reps } = attrs;
  assertNotComplex(x, "tile");
  const outBuf = tileImpl(backend.bufferSync(x), reps);
  return backend.makeTensorInfo(outBuf.shape, outBuf.dtype, outBuf.values);
}
var tileConfig = {
  kernelName: Tile,
  backendName: "cpu",
  kernelFunc: tile2
};

// src/tfjs-backend-cpu/src/kernels/TopK.ts
function topK(args) {
  const { inputs, backend, attrs } = args;
  const { x } = inputs;
  const { k, sorted } = attrs;
  assertNotComplex(x, "topk");
  const xVals = backend.data.get(x.dataId).values;
  const [allTopKVals, allTopKIndices] = topKImpl(xVals, x.shape, x.dtype, k, sorted);
  return [
    backend.makeTensorInfo(
      allTopKVals.shape,
      allTopKVals.dtype,
      allTopKVals.values
    ),
    backend.makeTensorInfo(
      allTopKIndices.shape,
      allTopKIndices.dtype,
      allTopKIndices.values
    )
  ];
}
var topKConfig = {
  kernelName: TopK,
  backendName: "cpu",
  kernelFunc: topK
};

// src/tfjs-backend-cpu/src/kernels/Transform.ts
function transform2(args) {
  const { inputs, attrs, backend } = args;
  const { image, transforms } = inputs;
  const { interpolation, fillMode, fillValue, outputShape } = attrs;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  const [outHeight, outWidth] = outputShape != null ? outputShape : [imageHeight, imageWidth];
  const outShape = [batch, outHeight, outWidth, numChannels];
  const inStrides = util_exports.computeStrides(image.shape);
  const batchInStride = inStrides[0];
  const rowInStride = inStrides[1];
  const colInStride = inStrides[2];
  const outStrides = util_exports.computeStrides(outShape);
  const batchOutStride = outStrides[0];
  const rowOutStride = outStrides[1];
  const colOutStride = outStrides[2];
  const outVals = util_exports.getTypedArrayFromDType(
    image.dtype,
    util_exports.sizeFromShape(outShape)
  );
  outVals.fill(fillValue);
  const imageVals = backend.data.get(image.dataId).values;
  const transformVals = backend.data.get(transforms.dataId).values;
  for (let b = 0; b < batch; ++b) {
    const transform3 = transforms.shape[0] === 1 ? transformVals : transformVals.subarray(b * 8, b * 8 + 8);
    for (let outY = 0; outY < outHeight; ++outY) {
      for (let outX = 0; outX < outWidth; ++outX) {
        for (let channel = 0; channel < numChannels; ++channel) {
          let val;
          const projection = transform3[6] * outX + transform3[7] * outY + 1;
          if (projection === 0) {
            continue;
          }
          const inX = (transform3[0] * outX + transform3[1] * outY + transform3[2]) / projection;
          const inY = (transform3[3] * outX + transform3[4] * outY + transform3[5]) / projection;
          const x = mapCoord(inX, imageWidth, fillMode);
          const y = mapCoord(inY, imageHeight, fillMode);
          switch (interpolation) {
            case "nearest":
              val = nearestInterpolation(
                imageVals,
                imageHeight,
                imageWidth,
                batchInStride,
                rowInStride,
                colInStride,
                b,
                y,
                x,
                channel,
                fillValue
              );
              break;
            case "bilinear":
              val = bilinearInterpolation(
                imageVals,
                imageHeight,
                imageWidth,
                batchInStride,
                rowInStride,
                colInStride,
                b,
                y,
                x,
                channel,
                fillValue
              );
              break;
            default:
              throw new Error(
                `Error in Transform: Expect 'nearest' or 'bilinear', but got ${interpolation}`
              );
          }
          const ind = b * batchOutStride + outY * rowOutStride + outX * colOutStride + channel;
          outVals[ind] = val;
        }
      }
    }
    return backend.makeTensorInfo(outShape, image.dtype, outVals);
  }
  const dataId = backend.write(outVals, outShape, image.dtype);
  return { dataId, shape: image.shape, dtype: image.dtype };
}
var transformConfig = {
  kernelName: Transform,
  backendName: "cpu",
  kernelFunc: transform2
};
function mapCoord(outCoord, len, mode) {
  switch (mode) {
    case "reflect":
      return mapCoordReflect(outCoord, len);
    case "wrap":
      return mapCoordWrap(outCoord, len);
    case "nearest":
      return mapCoordNearest(outCoord, len);
    case "constant":
    default:
      return mapCoordConstant(outCoord, len);
  }
}
function mapCoordReflect(outCoord, len) {
  let inCoord = outCoord;
  if (inCoord < 0) {
    if (len <= 1) {
      inCoord = 0;
    } else {
      const sz2 = 2 * len;
      if (inCoord < sz2) {
        inCoord = sz2 * Math.trunc(-inCoord / sz2) + inCoord;
      }
      inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1;
    }
  } else if (inCoord > len - 1) {
    if (len <= 1) {
      inCoord = 0;
    } else {
      const sz2 = 2 * len;
      inCoord -= sz2 * Math.trunc(inCoord / sz2);
      if (inCoord >= len) {
        inCoord = sz2 - inCoord - 1;
      }
    }
  }
  return util_exports.clamp(0, inCoord, len - 1);
}
function mapCoordWrap(outCoord, len) {
  let inCoord = outCoord;
  if (inCoord < 0) {
    if (len <= 1) {
      inCoord = 0;
    } else {
      const sz = len - 1;
      inCoord += len * (Math.trunc(-inCoord / sz) + 1);
    }
  } else if (inCoord > len - 1) {
    if (len <= 1) {
      inCoord = 0;
    } else {
      const sz = len - 1;
      inCoord -= len * Math.trunc(inCoord / sz);
    }
  }
  return util_exports.clamp(0, inCoord, len - 1);
}
function mapCoordConstant(outCoord, len) {
  return outCoord;
}
function mapCoordNearest(outCoord, len) {
  return util_exports.clamp(0, outCoord, len - 1);
}
function readWithFillValue(imageVals, imageHeight, imageWidth, batchStride, rowStride, colStride, batch, y, x, channel, fillValue) {
  const ind = batch * batchStride + y * rowStride + x * colStride + channel;
  if (0 <= y && y < imageHeight && 0 <= x && x < imageWidth) {
    return imageVals[ind];
  } else {
    return fillValue;
  }
}
function nearestInterpolation(imageVals, imageHeight, imageWidth, batchStride, rowStride, colStride, batch, y, x, channel, fillValue) {
  const $y = Math.round(y);
  const $x = Math.round(x);
  return readWithFillValue(
    imageVals,
    imageHeight,
    imageWidth,
    batchStride,
    rowStride,
    colStride,
    batch,
    $y,
    $x,
    channel,
    fillValue
  );
}
function bilinearInterpolation(imageVals, imageHeight, imageWidth, batchStride, rowStride, colStride, batch, y, x, channel, fillValue) {
  const yFloor = Math.floor(y);
  const xFloor = Math.floor(x);
  const yCeil = yFloor + 1;
  const xCeil = xFloor + 1;
  const valueYFloor = (xCeil - x) * readWithFillValue(
    imageVals,
    imageHeight,
    imageWidth,
    batchStride,
    rowStride,
    colStride,
    batch,
    yFloor,
    xFloor,
    channel,
    fillValue
  ) + (x - xFloor) * readWithFillValue(
    imageVals,
    imageHeight,
    imageWidth,
    batchStride,
    rowStride,
    colStride,
    batch,
    yFloor,
    xCeil,
    channel,
    fillValue
  );
  const valueYCeil = (xCeil - x) * readWithFillValue(
    imageVals,
    imageHeight,
    imageWidth,
    batchStride,
    rowStride,
    colStride,
    batch,
    yCeil,
    xFloor,
    channel,
    fillValue
  ) + (x - xFloor) * readWithFillValue(
    imageVals,
    imageHeight,
    imageWidth,
    batchStride,
    rowStride,
    colStride,
    batch,
    yCeil,
    xCeil,
    channel,
    fillValue
  );
  return (yCeil - y) * valueYFloor + (y - yFloor) * valueYCeil;
}

// src/tfjs-backend-cpu/src/kernels/Unique.ts
function unique2(args) {
  const { inputs, attrs, backend } = args;
  const { axis } = attrs;
  const { x } = inputs;
  assertNotComplex(x, "unique");
  const values = backend.data.get(x.dataId).values;
  const { outputValues, outputShape, indices } = uniqueImpl(values, axis, x.shape, x.dtype);
  return [
    backend.makeTensorInfo(outputShape, x.dtype, outputValues),
    backend.makeTensorInfo([indices.length], "int32", indices)
  ];
}
var uniqueConfig = {
  kernelName: Unique,
  backendName: "cpu",
  kernelFunc: unique2
};

// src/tfjs-backend-cpu/src/kernels/Unpack.ts
function unpack(args) {
  const { inputs, backend, attrs } = args;
  const { value } = inputs;
  let { axis } = attrs;
  if (axis < 0) {
    axis += value.shape.length;
  }
  const valueRank = value.shape.length;
  const num = value.shape[axis];
  const outShape = new Array(valueRank - 1);
  let outIndex = 0;
  for (let i = 0; i < valueRank; i++) {
    if (i !== axis) {
      outShape[outIndex++] = value.shape[i];
    }
  }
  const begin = new Array(valueRank).fill(0);
  const size = value.shape.slice();
  size[axis] = 1;
  const res = new Array(num);
  for (let i = 0; i < res.length; i++) {
    begin[axis] = i;
    const tempRes = slice2({ inputs: { x: value }, backend, attrs: { begin, size } });
    res[i] = reshape2({ inputs: { x: tempRes }, backend, attrs: { shape: outShape } });
    backend.disposeIntermediateTensorInfo(tempRes);
  }
  return res;
}
var unpackConfig = {
  kernelName: Unpack,
  backendName: "cpu",
  kernelFunc: unpack
};

// src/tfjs-backend-cpu/src/kernels/UnsortedSegmentSum.ts
function unsortedSegmentSum2(args) {
  const { inputs, backend, attrs } = args;
  const { x, segmentIds } = inputs;
  const { numSegments } = attrs;
  assertNotComplex(x, "unsortedSegmentSum");
  const xRank = x.shape.length;
  const segmentIdsRank = segmentIds.shape.length;
  const res = [];
  const intermediates = [];
  const numIters = xRank - segmentIdsRank;
  let $segmentIds = segmentIds;
  for (let i = 0; i < numIters; ++i) {
    const expanded = expandDims2(
      { inputs: { input: $segmentIds }, backend, attrs: { dim: i + 1 } }
    );
    $segmentIds = expanded;
    intermediates.push(expanded);
  }
  for (let i = 0; i < numSegments; ++i) {
    const scalarValue = util_exports.createScalarValue(
      i,
      "int32"
    );
    const segmentId = backend.makeTensorInfo([], "int32", scalarValue);
    const mask = equal2({ inputs: { a: segmentId, b: $segmentIds }, backend });
    const maskCasted = cast2({ inputs: { x: mask }, backend, attrs: { dtype: "float32" } });
    const mul2 = multiply({ inputs: { a: maskCasted, b: x }, backend });
    const sumTensorInfo = sum3({ inputs: { x: mul2 }, backend, attrs: { axis: 0, keepDims: false } });
    res.push(sumTensorInfo);
    intermediates.push(segmentId);
    intermediates.push(mask);
    intermediates.push(maskCasted);
    intermediates.push(mul2);
    intermediates.push(sumTensorInfo);
  }
  const result = pack({ inputs: res, backend, attrs: { axis: 0 } });
  intermediates.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
}
var unsortedSegmentSumConfig = {
  kernelName: UnsortedSegmentSum,
  backendName: "cpu",
  kernelFunc: unsortedSegmentSum2
};

// src/tfjs-backend-cpu/src/register_all_kernels.ts
var kernelConfigs = [
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
  atanConfig,
  atan2Config,
  atanhConfig,
  avgPoolConfig,
  avgPool3DConfig,
  avgPool3DGradConfig,
  avgPoolGradConfig,
  batchMatMulConfig,
  batchNormConfig,
  batchToSpaceNDConfig,
  bincountConfig,
  bitwiseAndConfig,
  broadcastArgsConfig,
  castConfig,
  ceilConfig,
  clipByValueConfig,
  complexConfig,
  complexAbsConfig,
  concatConfig,
  conv2DConfig,
  conv2DBackpropFilterConfig,
  conv2DBackpropInputConfig,
  conv3DConfig,
  conv3DBackpropFilterV2Config,
  conv3DBackpropInputV2Config,
  cosConfig,
  coshConfig,
  cropAndResizeConfig,
  cumprodConfig,
  cumsumConfig,
  denseBincountConfig,
  depthToSpaceConfig,
  depthwiseConv2dNativeConfig,
  depthwiseConv2dNativeBackpropFilterConfig,
  depthwiseConv2dNativeBackpropInputConfig,
  diagConfig,
  dilation2DConfig,
  dilation2DBackpropFilterConfig,
  dilation2DBackpropInputConfig,
  drawConfig,
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
  logConfig,
  log1pConfig,
  logicalAndConfig,
  logicalNotConfig,
  logicalOrConfig,
  LRNConfig,
  LRNGradConfig,
  maxConfig,
  maximumConfig,
  maxPoolConfig,
  maxPool3DConfig,
  maxPool3DGradConfig,
  maxPoolGradConfig,
  maxPoolWithArgmaxConfig,
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
  raggedGatherConfig,
  raggedRangeConfig,
  raggedTensorToTensorConfig,
  rangeConfig,
  realConfig,
  realDivConfig,
  reciprocalConfig,
  reluConfig,
  relu6Config,
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
  searchSortedConfig,
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
  staticRegexReplaceConfig,
  stepConfig,
  stridedSliceConfig,
  stringNGramsConfig,
  stringSplitConfig,
  stringToHashBucketFastConfig,
  subConfig,
  sumConfig,
  tanConfig,
  tanhConfig,
  tensorScatterUpdateConfig,
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
  MathBackendCPU,
  shared_exports as shared,
  version2 as version_cpu
};
//# sourceMappingURL=tfjs-backend-cpu.esm.js.map
