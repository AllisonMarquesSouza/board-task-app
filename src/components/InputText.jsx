export default function InputText({ onChange, placeholder, value }) {
  return (
    <input
      onChange={onChange} //running function passed
      type="text"
      value={value}
      placeholder={placeholder}
      className="p-2 rounded-lg"
    />
  );
}
