/** Striped visual placeholder matching the source design — swap for a real
 *  image by replacing this element with next/image when photos are supplied. */
export default function Placeholder({
  label,
  aspectRatio,
  style,
}: {
  label: string;
  aspectRatio: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="ph-stripes" style={{ aspectRatio, ...style }}>
      [ {label} ]
    </div>
  );
}
