export default function TaskFormButtons({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-50 p-1 text-slate-900 w-full rounded-full"
    >
      {children}
    </button>
  );
}
/**
 flex-1 is a Tailwind utility that means:
 
 flex: 1 1 0%;
 
 The important idea is:
 
 "Take the available remaining space inside the flex container."
  

┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│Button              takes remaining space     │
└──────────────────────────────────────────────┘
 */
