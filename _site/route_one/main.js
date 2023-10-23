var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// deno:https://esm.sh/stable/preact@10.18.1/es2022/preact.mjs
var M;
var h;
var J;
var oe;
var S;
var G;
var K;
var $;
var Q;
var E = {};
var X = [];
var re = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var F = Array.isArray;
function C(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
__name(C, "C");
function Y(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
__name(Y, "Y");
function le(t, e, n) {
  var r, l, o, i2 = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? l = e[o] : i2[o] = e[o];
  if (arguments.length > 2 && (i2.children = arguments.length > 3 ? M.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (o in t.defaultProps)
      i2[o] === void 0 && (i2[o] = t.defaultProps[o]);
  return U(t, i2, r, l, null);
}
__name(le, "le");
function U(t, e, n, r, l) {
  var o = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l ?? ++J };
  return l == null && h.vnode != null && h.vnode(o), o;
}
__name(U, "U");
function I(t) {
  return t.children;
}
__name(I, "I");
function W(t, e) {
  this.props = t, this.context = e;
}
__name(W, "W");
function L(t, e) {
  if (e == null)
    return t.__ ? L(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__d || n.__e;
  return typeof t.type == "function" ? L(t) : null;
}
__name(L, "L");
function Z(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Z(t);
  }
}
__name(Z, "Z");
function B(t) {
  (!t.__d && (t.__d = true) && S.push(t) && !H.__r++ || G !== h.debounceRendering) && ((G = h.debounceRendering) || K)(H);
}
__name(B, "B");
function H() {
  var t, e, n, r, l, o, i2, c, f;
  for (S.sort($); t = S.shift(); )
    t.__d && (e = S.length, r = void 0, l = void 0, o = void 0, c = (i2 = (n = t).__v).__e, (f = n.__P) && (r = [], l = [], (o = C({}, i2)).__v = i2.__v + 1, R(f, i2, o, n.__n, f.ownerSVGElement !== void 0, i2.__h != null ? [c] : null, r, c ?? L(i2), i2.__h, l), _e(r, i2, l), i2.__e != c && Z(i2)), S.length > e && S.sort($));
  H.__r = 0;
}
__name(H, "H");
function ee(t, e, n, r, l, o, i2, c, f, x, d) {
  var _, m, u, s, p, w, a, v2, b, g = 0, y = r && r.__k || X, T = y.length, P = T, D = e.length;
  for (n.__k = [], _ = 0; _ < D; _++)
    (s = n.__k[_] = (s = e[_]) == null || typeof s == "boolean" || typeof s == "function" ? null : typeof s == "string" || typeof s == "number" || typeof s == "bigint" ? U(null, s, null, null, s) : F(s) ? U(I, { children: s }, null, null, null) : s.__b > 0 ? U(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s) != null ? (s.__ = n, s.__b = n.__b + 1, (v2 = se(s, y, a = _ + g, P)) === -1 ? u = E : (u = y[v2] || E, y[v2] = void 0, P--), R(t, s, u, l, o, i2, c, f, x, d), p = s.__e, (m = s.ref) && u.ref != m && (u.ref && j(u.ref, null, s), d.push(m, s.__c || p, s)), p != null && (w == null && (w = p), (b = u === E || u.__v === null) ? v2 == -1 && g-- : v2 !== a && (v2 === a + 1 ? g++ : v2 > a ? P > D - a ? g += v2 - a : g-- : g = v2 < a && v2 == a - 1 ? v2 - a : 0), a = _ + g, typeof s.type != "function" || v2 === a && u.__k !== s.__k ? typeof s.type == "function" || v2 === a && !b ? s.__d !== void 0 ? (f = s.__d, s.__d = void 0) : f = p.nextSibling : f = ne(t, p, f) : f = te(s, f, t), typeof n.type == "function" && (n.__d = f))) : (u = y[_]) && u.key == null && u.__e && (u.__e == f && (u.__ = r, f = L(u)), O(u, u, false), y[_] = null);
  for (n.__e = w, _ = T; _--; )
    y[_] != null && (typeof n.type == "function" && y[_].__e != null && y[_].__e == n.__d && (n.__d = y[_].__e.nextSibling), O(y[_], y[_]));
}
__name(ee, "ee");
function te(t, e, n) {
  for (var r, l = t.__k, o = 0; l && o < l.length; o++)
    (r = l[o]) && (r.__ = t, e = typeof r.type == "function" ? te(r, e, n) : ne(n, r.__e, e));
  return e;
}
__name(te, "te");
function ne(t, e, n) {
  return n == null || n.parentNode !== t ? t.insertBefore(e, null) : e == n && e.parentNode != null || t.insertBefore(e, n), e.nextSibling;
}
__name(ne, "ne");
function se(t, e, n, r) {
  var l = t.key, o = t.type, i2 = n - 1, c = n + 1, f = e[n];
  if (f === null || f && l == f.key && o === f.type)
    return n;
  if (r > (f != null ? 1 : 0))
    for (; i2 >= 0 || c < e.length; ) {
      if (i2 >= 0) {
        if ((f = e[i2]) && l == f.key && o === f.type)
          return i2;
        i2--;
      }
      if (c < e.length) {
        if ((f = e[c]) && l == f.key && o === f.type)
          return c;
        c++;
      }
    }
  return -1;
}
__name(se, "se");
function ce(t, e, n, r, l) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in e || A(t, o, null, n[o], r);
  for (o in e)
    l && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === e[o] || A(t, o, e[o], n[o], r);
}
__name(ce, "ce");
function V(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || re.test(e) ? n : n + "px";
}
__name(V, "V");
function A(t, e, n, r, l) {
  var o;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || V(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || V(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r ? n.u = r.u : (n.u = Date.now(), t.addEventListener(e, o ? q : z, o)) : t.removeEventListener(e, o ? q : z, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (l)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in t)
        try {
          t[e] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === false && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
__name(A, "A");
function z(t) {
  var e = this.l[t.type + false];
  if (t.t) {
    if (t.t <= e.u)
      return;
  } else
    t.t = Date.now();
  return e(h.event ? h.event(t) : t);
}
__name(z, "z");
function q(t) {
  return this.l[t.type + true](h.event ? h.event(t) : t);
}
__name(q, "q");
function R(t, e, n, r, l, o, i2, c, f, x) {
  var d, _, m, u, s, p, w, a, v2, b, g, y, T, P, D, k = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, c = e.__e = n.__e, e.__h = null, o = [c]), (d = h.__b) && d(e);
  e:
    if (typeof k == "function")
      try {
        if (a = e.props, v2 = (d = k.contextType) && r[d.__c], b = d ? v2 ? v2.props.value : d.__ : r, n.__c ? w = (_ = e.__c = n.__c).__ = _.__E : ("prototype" in k && k.prototype.render ? e.__c = _ = new k(a, b) : (e.__c = _ = new W(a, b), _.constructor = k, _.render = fe), v2 && v2.sub(_), _.props = a, _.state || (_.state = {}), _.context = b, _.__n = r, m = _.__d = true, _.__h = [], _._sb = []), _.__s == null && (_.__s = _.state), k.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = C({}, _.__s)), C(_.__s, k.getDerivedStateFromProps(a, _.__s))), u = _.props, s = _.state, _.__v = e, m)
          k.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
          if (k.getDerivedStateFromProps == null && a !== u && _.componentWillReceiveProps != null && _.componentWillReceiveProps(a, b), !_.__e && (_.shouldComponentUpdate != null && _.shouldComponentUpdate(a, _.__s, b) === false || e.__v === n.__v)) {
            for (e.__v !== n.__v && (_.props = a, _.state = _.__s, _.__d = false), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(N) {
              N && (N.__ = e);
            }), g = 0; g < _._sb.length; g++)
              _.__h.push(_._sb[g]);
            _._sb = [], _.__h.length && i2.push(_);
            break e;
          }
          _.componentWillUpdate != null && _.componentWillUpdate(a, _.__s, b), _.componentDidUpdate != null && _.__h.push(function() {
            _.componentDidUpdate(u, s, p);
          });
        }
        if (_.context = b, _.props = a, _.__P = t, _.__e = false, y = h.__r, T = 0, "prototype" in k && k.prototype.render) {
          for (_.state = _.__s, _.__d = false, y && y(e), d = _.render(_.props, _.state, _.context), P = 0; P < _._sb.length; P++)
            _.__h.push(_._sb[P]);
          _._sb = [];
        } else
          do
            _.__d = false, y && y(e), d = _.render(_.props, _.state, _.context), _.state = _.__s;
          while (_.__d && ++T < 25);
        _.state = _.__s, _.getChildContext != null && (r = C(C({}, r), _.getChildContext())), m || _.getSnapshotBeforeUpdate == null || (p = _.getSnapshotBeforeUpdate(u, s)), ee(t, F(D = d != null && d.type === I && d.key == null ? d.props.children : d) ? D : [D], e, n, r, l, o, i2, c, f, x), _.base = e.__e, e.__h = null, _.__h.length && i2.push(_), w && (_.__E = _.__ = null);
      } catch (N) {
        e.__v = null, (f || o != null) && (e.__e = c, e.__h = !!f, o[o.indexOf(c)] = null), h.__e(N, e, n);
      }
    else
      o == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ue(n.__e, e, n, r, l, o, i2, f, x);
  (d = h.diffed) && d(e);
}
__name(R, "R");
function _e(t, e, n) {
  for (var r = 0; r < n.length; r++)
    j(n[r], n[++r], n[++r]);
  h.__c && h.__c(e, t), t.some(function(l) {
    try {
      t = l.__h, l.__h = [], t.some(function(o) {
        o.call(l);
      });
    } catch (o) {
      h.__e(o, l.__v);
    }
  });
}
__name(_e, "_e");
function ue(t, e, n, r, l, o, i2, c, f) {
  var x, d, _, m = n.props, u = e.props, s = e.type, p = 0;
  if (s === "svg" && (l = true), o != null) {
    for (; p < o.length; p++)
      if ((x = o[p]) && "setAttribute" in x == !!s && (s ? x.localName === s : x.nodeType === 3)) {
        t = x, o[p] = null;
        break;
      }
  }
  if (t == null) {
    if (s === null)
      return document.createTextNode(u);
    t = l ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s, u.is && u), o = null, c = false;
  }
  if (s === null)
    m === u || c && t.data === u || (t.data = u);
  else {
    if (o = o && M.call(t.childNodes), d = (m = n.props || E).dangerouslySetInnerHTML, _ = u.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (m = {}, p = 0; p < t.attributes.length; p++)
          m[t.attributes[p].name] = t.attributes[p].value;
      (_ || d) && (_ && (d && _.__html == d.__html || _.__html === t.innerHTML) || (t.innerHTML = _ && _.__html || ""));
    }
    if (ce(t, u, m, l, c), _)
      e.__k = [];
    else if (ee(t, F(p = e.props.children) ? p : [p], e, n, r, l && s !== "foreignObject", o, i2, o ? o[0] : n.__k && L(n, 0), c, f), o != null)
      for (p = o.length; p--; )
        o[p] != null && Y(o[p]);
    c || ("value" in u && (p = u.value) !== void 0 && (p !== t.value || s === "progress" && !p || s === "option" && p !== m.value) && A(t, "value", p, m.value, false), "checked" in u && (p = u.checked) !== void 0 && p !== t.checked && A(t, "checked", p, m.checked, false));
  }
  return t;
}
__name(ue, "ue");
function j(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    h.__e(r, n);
  }
}
__name(j, "j");
function O(t, e, n) {
  var r, l;
  if (h.unmount && h.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || j(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        h.__e(o, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (l = 0; l < r.length; l++)
      r[l] && O(r[l], e, n || typeof t.type != "function");
  n || t.__e == null || Y(t.__e), t.__ = t.__e = t.__d = void 0;
}
__name(O, "O");
function fe(t, e, n) {
  return this.constructor(t, n);
}
__name(fe, "fe");
function pe(t, e, n) {
  var r, l, o, i2;
  h.__ && h.__(t, e), l = (r = typeof n == "function") ? null : n && n.__k || e.__k, o = [], i2 = [], R(e, t = (!r && n || e).__k = le(I, null, [t]), l || E, E, e.ownerSVGElement !== void 0, !r && n ? [n] : l ? null : e.firstChild ? M.call(e.childNodes) : null, o, !r && n ? n : l ? l.__e : e.firstChild, r, i2), _e(o, t, i2);
}
__name(pe, "pe");
function ae(t, e) {
  pe(t, e, ae);
}
__name(ae, "ae");
M = X.slice, h = { __e: function(t, e, n, r) {
  for (var l, o, i2; e = e.__; )
    if ((l = e.__c) && !l.__)
      try {
        if ((o = l.constructor) && o.getDerivedStateFromError != null && (l.setState(o.getDerivedStateFromError(t)), i2 = l.__d), l.componentDidCatch != null && (l.componentDidCatch(t, r || {}), i2 = l.__d), i2)
          return l.__E = l;
      } catch (c) {
        t = c;
      }
  throw t;
} }, J = 0, oe = /* @__PURE__ */ __name(function(t) {
  return t != null && t.constructor === void 0;
}, "oe"), W.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = C({}, this.state), typeof t == "function" && (t = t(C({}, n), this.props)), t && C(n, t), t != null && this.__v && (e && this._sb.push(e), B(this));
}, W.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = true, t && this.__h.push(t), B(this));
}, W.prototype.render = I, S = [], K = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $ = /* @__PURE__ */ __name(function(t, e) {
  return t.__v.__b - e.__v.__b;
}, "$"), H.__r = 0, Q = 0;

// deno:https://esm.sh/stable/preact@10.18.1/es2022/jsx-runtime.js
var i = 0;
function v(n, s, f, a, l, u) {
  var r, o, _ = {};
  for (o in s)
    o == "ref" ? r = s[o] : _[o] = s[o];
  var t = { type: n, props: _, key: f, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --i, __source: l, __self: u };
  if (typeof n == "function" && (r = n.defaultProps))
    for (o in r)
      _[o] === void 0 && (_[o] = r[o]);
  return h.vnode && h.vnode(t), t;
}
__name(v, "v");

// deno:file:///workspaces/sandbox/islands/App.tsx
function button() {
  function alerter() {
    alert("hello world");
  }
  __name(alerter, "alerter");
  return /* @__PURE__ */ v("button", { onClick: alerter, children: "Click me" });
}
__name(button, "button");

// deno:file:///workspaces/sandbox/route_one/main.tsx
ae(/* @__PURE__ */ v(button, {}), document.getElementById("app"));
