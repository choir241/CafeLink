export default function Button({
  onButtonClick,
  label,
}: {
  onButtonClick: () => void;
  label: string;
}) {
  return <button onClick={() => onButtonClick()}>{label}</button>;
}
