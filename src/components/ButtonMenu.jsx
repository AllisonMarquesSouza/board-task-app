import { CodeXml, Menu, House } from "lucide-react";
import { useState } from "react";

export default function ButtonMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-20">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="rounded-full p-2 text-[#F3F4F4] transition hover:bg-[#F3F4F4]/50"
      >
        <Menu></Menu>
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 top-full mt-2 flex min-w-max flex-col gap-2 rounded-md bg-[#2C2C2C] p-2 text-white shadow-lg">
          <a
            href="https://github.com/AllisonMarquesSouza/board-task-app"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 bg-[#F3F4F4] text-[#2C2C2C] hover:bg-[#F3F4F4]/50 transition p-2 rounded-md"
          >
            <CodeXml />
            <span> Source Code</span>
          </a>

          <button className=" flex gap-2 bg-[#F3F4F4] text-[#2C2C2C] p-2 hover:bg-[#F3F4F4]/50 transition rounded-md">
            <House />
            <span> Main Page</span>
          </button>
        </div>
      )}
    </div>
  );
}
