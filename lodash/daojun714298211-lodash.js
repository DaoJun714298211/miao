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
};
