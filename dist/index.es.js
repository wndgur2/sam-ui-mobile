import K from "react";
var A = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ee() {
  if (F) return E;
  F = 1;
  var n = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function s(i, l, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      c = {};
      for (var d in l)
        d !== "key" && (c[d] = l[d]);
    } else c = l;
    return l = c.ref, {
      $$typeof: n,
      type: i,
      key: f,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return E.Fragment = u, E.jsx = s, E.jsxs = s, E;
}
var p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function re() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case G:
          return "Profiler";
        case W:
          return "StrictMode";
        case z:
          return "Suspense";
        case q:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case B:
            return e.displayName || "Context";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case J:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function s(e) {
      try {
        u(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), u(e);
      }
    }
    function i(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function D() {
      var e = n(this.type);
      return h[e] || (h[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, a, R, x) {
      var o = t.ref;
      return e = {
        $$typeof: w,
        type: e,
        key: r,
        props: t,
        _owner: a
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function O(e, r, t, a, R, x) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (Z(o)) {
            for (a = 0; a < o.length; a++)
              S(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(o);
      if (P.call(r, "key")) {
        o = n(e);
        var m = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          m,
          o
        ), $[o + a] = !0);
      }
      if (o = null, t !== void 0 && (s(t), o = "" + t), f(r) && (s(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var g in r)
          g !== "key" && (t[g] = r[g]);
      } else t = r;
      return o && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        o,
        t,
        l(),
        R,
        x
      );
    }
    function S(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    var v = K, w = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), B = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), y = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, Z = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, h = {}, C = v.react_stack_bottom_frame.bind(
      v,
      c
    )(), Y = k(i(c)), $ = {};
    p.Fragment = b, p.jsx = function(e, r, t) {
      var a = 1e4 > y.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !1,
        a ? Error("react-stack-top-frame") : C,
        a ? k(i(e)) : Y
      );
    }, p.jsxs = function(e, r, t) {
      var a = 1e4 > y.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !0,
        a ? Error("react-stack-top-frame") : C,
        a ? k(i(e)) : Y
      );
    };
  }()), p;
}
process.env.NODE_ENV === "production" ? A.exports = ee() : A.exports = re();
var _ = A.exports;
function te({ as: n, children: u, ...s }) {
  const i = n || "div";
  return /* @__PURE__ */ _.jsx(i, { ...s, children: u });
}
te.displayName = "Box";
function ne({ height: n = "12px", style: u, ...s }) {
  return /* @__PURE__ */ _.jsx("div", { style: { height: n, ...u }, ...s });
}
ne.displayName = "Spacing";
function se({ width: n, height: u, color: s, ...i }) {
  return /* @__PURE__ */ _.jsx("div", { ...i, style: { width: n, height: u, backgroundColor: s, ...i.style } });
}
function ue({
  direction: n,
  alignItems: u,
  justifyContent: s,
  flexWrap: i,
  gap: l,
  children: c,
  ...f
}) {
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      ...f,
      style: {
        display: "flex",
        flexDirection: n,
        alignItems: u,
        justifyContent: s,
        flexWrap: i,
        gap: l,
        ...f.style
      },
      children: c
    }
  );
}
function ae({
  columns: n,
  rows: u,
  gap: s,
  columnGap: i,
  rowGap: l,
  areas: c,
  children: f,
  ...d
}) {
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      ...d,
      style: {
        display: "grid",
        gridTemplateColumns: n,
        gridTemplateRows: u,
        gridTemplateAreas: c,
        gap: s,
        columnGap: i,
        rowGap: l,
        ...d.style
      },
      children: f
    }
  );
}
ae.displayName = "GridBox";
function oe({ column: n, row: u, area: s, children: i, ...l }) {
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      ...l,
      style: {
        gridColumn: n,
        gridRow: u,
        gridArea: s,
        ...l.style
      },
      children: i
    }
  );
}
oe.displayName = "GridCell";
export {
  se as Border,
  te as Box,
  ue as FlexBox,
  ae as GridBox,
  oe as GridCell,
  ne as Spacing
};
//# sourceMappingURL=index.es.js.map
