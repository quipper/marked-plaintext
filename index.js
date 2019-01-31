(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['b'], factory);
  } else {
    // Browser globals
    root.MarkedPlaintext = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  function MarkedPlaintext (options) {
    this.options = options || {};
    this.whitespaceDelimiter = this.options.spaces ? ' ' : '\n';
    this.showImageText = (typeof this.options !== 'undefined') ? this.options.showImageText : true;
  }

  MarkedPlaintext.prototype.code = function(code, lang, escaped) {
    return this.whitespaceDelimiter + this.whitespaceDelimiter + code + this.whitespaceDelimiter + this.whitespaceDelimiter;
  }
  MarkedPlaintext.prototype.blockquote = function(quote) {
    return '\t' + quote + this.whitespaceDelimiter;
  }
  MarkedPlaintext.prototype.html = function(html) {
    return html;
  }
  MarkedPlaintext.prototype.heading = function(text, level, raw) {
    return text;
  }
  MarkedPlaintext.prototype.hr = function() {
    return this.whitespaceDelimiter + this.whitespaceDelimiter;
  }
  MarkedPlaintext.prototype.list = function(body, ordered) {
    return body;
  }
  MarkedPlaintext.prototype.listitem = function(text) {
    return '\t' + text + this.whitespaceDelimiter;
  }
  MarkedPlaintext.prototype.paragraph = function(text) {
    return this.whitespaceDelimiter + text + this.whitespaceDelimiter;
  }
  MarkedPlaintext.prototype.table = function(header, body) {
    return  this.whitespaceDelimiter + header + this.whitespaceDelimiter + body + this.whitespaceDelimiter;
  }
  MarkedPlaintext.prototype.tablerow = function(content) {
    return content + this.whitespaceDelimiter;
  }
  MarkedPlaintext.prototype.tablecell = function(content, flags) {
    return content + '\t';
  }
  MarkedPlaintext.prototype.strong = function(text) {
    return text;
  }
  MarkedPlaintext.prototype.em = function(text) {
    return text;
  }
  MarkedPlaintext.prototype.codespan = function(text) {
    return text;
  }
  MarkedPlaintext.prototype.br = function() {
    return this.whitespaceDelimiter + this.whitespaceDelimiter;
  }
  MarkedPlaintext.prototype.del = function(text) {
    return text;
  }
  MarkedPlaintext.prototype.link = function(href, title, text) {
    return text;
  }
  MarkedPlaintext.prototype.image = function(href, title, text) {
    return this.showImageText ? text : '';
  }
  MarkedPlaintext.prototype.text = function(text) {
    return text;
  }

  return MarkedPlaintext;
}));
