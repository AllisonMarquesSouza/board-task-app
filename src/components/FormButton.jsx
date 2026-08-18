export default function FormButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="min-h-10 w-full rounded-full bg-[#F3F4F4] p-2 text-slate-900 transition hover:bg-[#F3F4F4]/50"
    >
      {children}
    </button>
  );
}
