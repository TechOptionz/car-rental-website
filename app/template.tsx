/**
 * Re-mounts on every route change, giving each page a short CSS fade-up
 * (.page-enter). Pure CSS animation — content is interactive immediately
 * and the effect is disabled entirely under prefers-reduced-motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
