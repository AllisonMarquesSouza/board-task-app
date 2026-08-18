export default function FormButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#F3F4F4] p-1 text-slate-900 hover:bg-[#F3F4F4]/50 transition w-full rounded-full"
    >
      {children}
    </button>
  );
}
