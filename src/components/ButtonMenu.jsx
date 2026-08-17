import { CodeXml, Menu, House } from "lucide-react";
import { useState } from "react";

export default function ButtonMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className=" text-[#F3F4F4] hover:bg-[#F3F4F4]/50 transition p-2 rounded-full"
      >
        <Menu></Menu>
      </button>
      {isMenuOpen && (
        <div className="flex flex-col gap-2 text-white ">
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
