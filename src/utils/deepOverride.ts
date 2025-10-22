const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  Object.prototype.toString.call(v) === "[object Object]";

const isDangerousKey = (k: string) =>
  k === "__proto__" || k === "prototype" || k === "constructor";

const clone = <T> (v: T): T => {
  if (Array.isArray(v)) return v.slice() as unknown as T;
  if (isPlainObject(v)) {
    const out: Record<string, unknown> = {};
    for (const k in v) {
      if (!isDangerousKey(k) && Object.prototype.hasOwnProperty.call(v, k)) {
        out[k] = clone((v as Record<string, unknown>)[k]);
      }
    }
    return out as T;
  }
  return v;
};

// ---- Overloads ----

// 1) Props-friendly: return exactly T (great for React props).
export function deepOverride<T extends object> (
  overrides: Partial<T> | undefined,
  defaults: T,
): T;

// 2) Generic variant (kept simple to avoid weird widenings).
export function deepOverride (
  overrides: unknown,
  defaults: unknown,
): unknown;

// ---- Impl ----
export function deepOverride (
  overrides: unknown,
  defaults: unknown,
): unknown {
  const merge = (base: unknown, top: unknown): unknown => {
    if (top === undefined) return clone(base);

    // If either side isn't a plain object, top wins
    if (!isPlainObject(base) || !isPlainObject(top)) {
      if (Array.isArray(base) && Array.isArray(top)) {
        return top.slice();
      }
      return clone(top);
    }

    // Both plain objects → clone base, then overlay/merge top.
    const out: Record<string, unknown> = {};
    for (const k in base as Record<string, unknown>) {
      if (!isDangerousKey(k) && Object.prototype.hasOwnProperty.call(base, k)) {
        out[k] = clone((base as Record<string, unknown>)[k]);
      }
    }
    for (const k in top as Record<string, unknown>) {
      if (isDangerousKey(k) || !Object.prototype.hasOwnProperty.call(top, k)) continue;

      const bVal = (base as Record<string, unknown>)[k];
      const tVal = (top as Record<string, unknown>)[k];

      if (Array.isArray(bVal) && Array.isArray(tVal)) {
        out[k] = tVal.slice();
      } else if (isPlainObject(bVal) && isPlainObject(tVal)) {
        out[k] = merge(bVal, tVal);
      } else {
        out[k] = clone(tVal);
      }
    }
    return out;
  };

  return merge(defaults, overrides);
}