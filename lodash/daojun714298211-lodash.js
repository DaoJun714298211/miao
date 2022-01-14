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

  dropRightWhile: function dropRightWhile(array,predicate=_.identity) {

  }

  dropWhile: function dropWhile(array,predicate=_.identity) {

  }

  fill: function fill(array, value, start = 0, end = array.length) {

  }
};

// chunk,compact,drop,dropRight,dropRightWhile,dropWhile
// fill,findIndex,findLastIndex
// flatten,flattenDeep,flattenDepth
// fromPairs,head,indexOf,initial,join,last,lastIndexOf,reverse
// uniq,uniqBy,without
// zip,countBy,every,filter,find,forEach,groupBy,keyBy,map
// partition,reduce,reduceRight,reject,sample,shuffle,size,some
// isBoolean,isEmpty,isEqual,
// isNaN,isNil,isNull,isNumber,
// toArray
// ceil,max,maxBy,sumBy,sum,repeat,range,cloneDeep,
