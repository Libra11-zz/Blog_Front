function transformTime(timestamp) {
  if (timestamp) {
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var M = time.getMonth() + 1;
    var d = time.getDate();
    return y + '-' + M + '-' + d;
  } else {
    return '';
  }
}
export {
  transformTime
}