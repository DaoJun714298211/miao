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

  fill: function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value;
    }

    return array;
  },

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
};

// chunk,compact,drop,dropRight,dropRightWhile,dropWhile
// fill,findIndex,findLastIndex,flatten,flattenDeep,flattenDepth
// fromPairs,head,indexOf,initial,join,last,lastIndexOf,reverse
// uniq,uniqBy,without
// zip,countBy,every,filter,find,forEach,groupBy,keyBy,map
// partition,reduce,reduceRight,reject,sample,shuffle,size,some
// isBoolean,isEmpty,isEqual,isNaN,isNil,isNull,isNumber,
// toArray,ceil,max,maxBy,sumBy,sum,repeat,range,cloneDeep,
