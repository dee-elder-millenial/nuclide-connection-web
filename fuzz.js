// Optional visual-depth fuzz helper for the nuclide viewer.
// This file is intentionally separate so visual effects can be adjusted without replacing index.html.
window.NUCLIDE_FUZZ_HELPER = {
  enabled: true,
  strength: 7,
  depth01(depth) {
    return Math.max(0, Math.min(1, (depth + 900) / 1800));
  },
  blurForDepth(depth) {
    return this.enabled ? Math.max(0, this.depth01(depth) * this.strength) : 0;
  }
};
