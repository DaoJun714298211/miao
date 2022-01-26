var daojun714298211 = {
  chunk: function chunk(array, size = 1) {
    var res = [];
    var temp = [];
    var count = 0;

    for (var i = 0; i < array.length; i++) {
      temp.push(array[i]);
      count++;

      if (count == size || i == array.length - 1) {
        res.push(temp);
        temp = [];
        count = 0;
      }
    }

    return res;
  },

  compact: function compact(array) {
    var res = [];

    for (var i = 0; i < array.length; i++) {
      var c = array[i];

      if (!c || c !== c) {
        continue;
      }
      res.push(c);
    }

    return res;
  },

  drop: function drop(array, n = 1) {
    var res = [];

    if (n >= array.length) {
      return res;
    }

    for (var i = n; i < array.length; i++) {
      res.push(array[i]);
    }

    return res;
  },

  dropRight: function dropRight(array, n = 1) {
    if (n > array.length) {
      return [];
    }

    var res = [];

    for (var i = 0; i < array.length - n; i++) {
      res.push(array[i]);
    }

    return res;
  },

  dropRightWhile: function dropRightWhile() {},

  dropWhile: function dropWhile() {},

  fill: function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value;
    }

    return array;
  },

  findIndex: function findIndex() {},

  findLastIndex: function findLastIndex() {},

  flatten: function flatten(array) {
    var res = [];

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          res.push(array[i][j]);
        }
      } else {
        res.push(array[i]);
      }
    }

    return res;
  },

  flattenDeep: function flattenDeep(array) {
    var res = [];

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        res.push(...this.flattenDeep(array[i]));
      } else {
        res.push(array[i]);
      }
    }

    return res;
  },

  flattenDepth: function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return [...array];
    }

    var res = [];

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        res.push(...this.flattenDepth(array[i], depth - 1));
      } else {
        res.push(array[i]);
      }
    }

    return res;
  },

  fromPairs: function fromPairs(pairs) {
    var res = {};

    for (var i = 0; i < pairs.length; i++) {
      res[pairs[i][0]] = pairs[i][1];
    }

    return res;
  },

  head: function head(array) {
    return array[0];
  },

  indexOf: function indexOf(array, value, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex += array.length;
    }

    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }

    return -1;
  },

  initial: function inital(array) {
    var res = [];

    for (var i = 0; i < array.length - 1; i++) {
      res.push(array[i]);
    }

    return res;
  },

  join: function join(array, separator = ",") {
    if (array.length == 0) return "";

    var res = "" + array[0];

    for (var i = 1; i < array.length; i++) {
      res = res + separator + array[i];
    }

    return res;
  },

  last: function last(array) {
    return array[array.length - 1];
  },

  lastIndexOf: function lastIndexOf(
    array,
    value,
    fromIndex = array.length - 1
  ) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }

    return -1;
  },

  reverse: function reverse(array) {
    var res = [];

    for (var i = array.length - 1; i >= 0; i--) {
      res.push(array[i]);
    }

    return res;
  },

  uniq: function uniq(array) {
    var res = [];
    var map = {};

    for (var i = 0; i < array.length; i++) {
      if (array[i] in map) {
        continue;
      } else {
        map[array[i]] = 1;
        res.push(array[i]);
      }
    }

    return res;
  },

  without: function without(array) {
    var res = [];
    var map = {};

    for (var i = 1; i < arguments.length; i++) {
      map[arguments[i]] = 1;
    }

    for (var j = 0; j < array.length; j++) {
      if (array[j] in map) {
        continue;
      }
      res.push(array[j]);
    }

    return res;
  },

  zip: function zip() {
    var res = [];

    for (var i = 0; i < arguments[0].length; i++) {
      res[i] = [];

      for (var j = 0; j < arguments.length; j++) {
        res[i][j] = arguments[j][i];
      }
    }

    return res;
  },

  countBy: function countBy() {},

  every: function every() {},

  filter: function filter() {},

  find: function find() {},

  forEach: function forEach() {},

  groupBy: function groupBy(collection, iteratee) {},

  keyBy: function keyBy() {},

  map: function map() {},

  partition: function partition() {},

  reduce: function reduce() {},

  reduceRight: function reduceRight() {},

  reject: function reject() {},

  sample: function sample() {},

  shuffle: function shuffle() {},

  size: function size() {},

  some: function some() {},

  isBoolean: function isBoolean(value) {
    if (
      value == true ||
      value == false ||
      value == new Boolean(true) ||
      value == new Boolean(false)
    ) {
      return true;
    } else {
      return false;
    }
  },

  isEmpty: function isEmpty() {},

  isEqual: function isEqual() {},

  isNaN: function isNaN(value) {
    if (value == NaN || value == new Number(NaN)) {
      return true;
    } else {
      return false;
    }
  },

  isNil: function isNil(value) {},

  isNull: function isNull() {},

  isNumber: function isNumber() {},

  toArray: function toArray(value) {
    if (typeof value == "number" || value != 0) {
      return [];
    }

    var res = [];

    if (typeof value == "string" || Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        res.push(value[i]);
      }

      return res;
    }

    for (var key in value) {
      res.push(value[key]);
    }

    return res;
  },

  ceil: function ceil() {},

  max: function max() {},

  maxBy: function maxBy() {},

  sumBy: function sumBy() {},

  sum: function sum() {},

  repeat: function repeat() {},

  range: function range() {},

  cloneDeep: function cloneDeep() {},
};

// chunk,compact,drop,dropRight,dropRightWhile,dropWhile
// fill,findIndex,findLastIndex,flatten,flattenDeep,flattenDepth
// fromPairs,head,indexOf,initial,join,last,lastIndexOf,reverse
// uniq,uniqBy,without
// zip,countBy,every,filter,find,forEach,groupBy,keyBy,map
// partition,reduce,reduceRight,reject,sample,shuffle,size,some
// isBoolean,isEmpty,isEqual,isNaN,isNil,isNull,isNumber,
// toArray,ceil,max,maxBy,sumBy,sum,repeat,range,cloneDeep,
