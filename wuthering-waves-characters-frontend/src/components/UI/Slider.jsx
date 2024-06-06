export default function Slider({ min, max, ...props }) {
  return <input type="range" min={min} max={max} {...props} />;
}
