export default function InputText({ onChange, placeholder, value }) {
  return (
    <input
      onChange={onChange} //running function passed
      type="text"
      value={value}
      placeholder={placeholder}
      className="w-full rounded-lg p-2"
    />
  );
}
