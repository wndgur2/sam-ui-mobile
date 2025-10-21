import re, { createContext as te, useContext as ne, useState as oe, useCallback as I } from "react";
var O = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ae() {
  if (D) return b;
  D = 1;
  var t = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function s(c, n, i) {
    var d = null;
    if (i !== void 0 && (d = "" + i), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      i = {};
      for (var o in n)
        o !== "key" && (i[o] = n[o]);
    } else i = n;
    return n = i.ref, {
      $$typeof: t,
      type: c,
      key: d,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return b.Fragment = l, b.jsx = s, b.jsxs = s, b;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function se() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case g:
          return "Fragment";
        case V:
          return "Profiler";
        case G:
          return "StrictMode";
        case Z:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case q:
            return e.displayName || "Context";
          case B:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case z:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function s(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), l(e);
      }
    }
    function c(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function o(e, r) {
      function a() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function p() {
      var e = t(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, r, a, u, y, j) {
      var f = a.ref;
      return e = {
        $$typeof: h,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
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
        value: y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, a, u, y, j) {
      var f = r.children;
      if (f !== void 0)
        if (u)
          if (K(f)) {
            for (u = 0; u < f.length; u++)
              R(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(f);
      if (C.call(r, "key")) {
        f = t(e);
        var v = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        u = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", F[f + u] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          v,
          f
        ), F[f + u] = !0);
      }
      if (f = null, a !== void 0 && (s(a), f = "" + a), d(r) && (s(r.key), f = "" + r.key), "key" in r) {
        a = {};
        for (var P in r)
          P !== "key" && (a[P] = r[P]);
      } else a = r;
      return f && o(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        f,
        a,
        n(),
        y,
        j
      );
    }
    function R(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    var x = re, h = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), q = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), A = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, K = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var M, N = {}, Y = x.react_stack_bottom_frame.bind(
      x,
      i
    )(), $ = w(c(i)), F = {};
    T.Fragment = g, T.jsx = function(e, r, a) {
      var u = 1e4 > A.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        a,
        !1,
        u ? Error("react-stack-top-frame") : Y,
        u ? w(c(e)) : $
      );
    }, T.jsxs = function(e, r, a) {
      var u = 1e4 > A.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        a,
        !0,
        u ? Error("react-stack-top-frame") : Y,
        u ? w(c(e)) : $
      );
    };
  }()), T;
}
process.env.NODE_ENV === "production" ? O.exports = ae() : O.exports = se();
var m = O.exports;
function le({ height: t = "12px", style: l, ...s }) {
  return /* @__PURE__ */ m.jsx("div", { style: { height: t, ...l }, ...s });
}
le.displayName = "Spacing";
function pe({ width: t, height: l, color: s, ...c }) {
  return /* @__PURE__ */ m.jsx("div", { ...c, style: { width: t, height: l, backgroundColor: s, ...c.style } });
}
function Ee({
  direction: t,
  alignItems: l,
  justifyContent: s,
  flexWrap: c,
  gap: n,
  children: i,
  ...d
}) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      ...d,
      style: {
        display: "flex",
        flexDirection: t,
        alignItems: l,
        justifyContent: s,
        flexWrap: c,
        gap: n,
        ...d.style
      },
      children: i
    }
  );
}
function ie({
  columns: t,
  rows: l,
  gap: s,
  columnGap: c,
  rowGap: n,
  areas: i,
  children: d,
  ...o
}) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      ...o,
      style: {
        display: "grid",
        gridTemplateColumns: t,
        gridTemplateRows: l,
        gridTemplateAreas: i,
        gap: s,
        columnGap: c,
        rowGap: n,
        ...o.style
      },
      children: d
    }
  );
}
ie.displayName = "GridBox";
function ce({ column: t, row: l, area: s, children: c, ...n }) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      ...n,
      style: {
        gridColumn: t,
        gridRow: l,
        gridArea: s,
        ...n.style
      },
      children: c
    }
  );
}
ce.displayName = "GridCell";
const U = te(null);
function ue() {
  const t = ne(U);
  if (!t) throw new Error("ModalContext missing provider");
  const { openModal: l, closeModal: s } = t;
  return { openModal: l, closeModal: s };
}
const fe = {
  style: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
function _e({
  children: t,
  wrapperAttributes: l = fe
}) {
  const [s, c] = oe(/* @__PURE__ */ new Map()), n = I((d, { z: o = 1 } = {}) => {
    const p = { content: d };
    c((E) => {
      const _ = new Map(E), R = E.get(o);
      return R ? _.set(o, [p, ...R]) : _.set(o, [p]), _;
    });
  }, []), i = I(() => {
    c((d) => {
      const o = new Map(d);
      console.log("version2");
      const p = Math.max(...Array.from(o.keys())), E = o.get(p).slice(1);
      return E.length > 0 ? o.set(p, E) : o.delete(p), o;
    });
  }, []);
  return /* @__PURE__ */ m.jsxs(U.Provider, { value: { openModal: n, closeModal: i }, children: [
    t,
    /* @__PURE__ */ m.jsx(de, { modals: s, ...l })
  ] });
}
function de({ modals: t, ...l }) {
  const s = Array.from(t.keys()).sort((n, i) => n - i), { closeModal: c } = ue();
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: s.map(
    (n) => t.get(n).map((i, d) => /* @__PURE__ */ m.jsx(
      "div",
      {
        onClick: (o) => {
          o.stopPropagation(), c();
        },
        ...l,
        children: /* @__PURE__ */ m.jsx("div", { onClick: (o) => o.stopPropagation(), children: i.content })
      },
      `modal-${n}-${d}`
    ))
  ) });
}
export {
  pe as Border,
  Ee as FlexBox,
  ie as GridBox,
  ce as GridCell,
  _e as ModalProvider,
  le as Spacing,
  ue as useModal
};
//# sourceMappingURL=index.es.js.map
