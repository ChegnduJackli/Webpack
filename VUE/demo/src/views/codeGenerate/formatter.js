
var hyphenateRE = /\B([A-Z])/g;

export const formatter = {

  //替换{{里面的内容}}， 如{{person.name}},替换name变量
  //如替换:只有发票状态为{{status}}才能进项操作{{name}} 
  //传递为data: let data={status:'1',name:'2'}
  parseExpr (expr, data) {
    // const doubleQuoteExpr = /\{\{(.+?)\}\}/g; //{{}}匹配
    const doubleQuoteExpr = /\@\@(.+?)\@\@/g; //{{}}匹配
    if (expr.indexOf('@@') !== -1) {
      return expr.replace(doubleQuoteExpr, (...args) => {
        return this._getVal(args[1], data);
      })
    }
    else {
      return expr;
    }
  },
  //ojb是对象的话，可以多层解析，如：{name:'1',child:{name:'2'}}
  _getVal (expr, obj) {
    let result = obj;
    if (typeof result !== "object") {
      return result;
    }
    //这句话太玄妙了 解决多层，person.name,
    return expr.split('.').reduce((data, currentVal) => {
      return data[currentVal.trim()];
    }, result);
  },

  /** 驼峰改为连字符，如GoodJob => good_job
* Hyphenate a camelCase string.
*/
  camelToUnderscore: function (str) {
    return str.replace(hyphenateRE, '_$1').toLowerCase()
  },

};
