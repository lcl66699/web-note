// module.exports = function(content, map, meta) {
//     console.log('im loaderA');

//     return content;
// }

//weback提供的 顺序
module.exports.pitch = function () {
    console.log('pitch A');
}
// 同步方式
module.exports = function (content, map, meta) {
    console.log('同步方式,im loaderA');
    // ……
    this.callback(null, content, map, meta);
}
