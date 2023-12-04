import React from "react";
import Link from "next/link";

type Tab = { label: string; path: string };

interface SideBarProps {
  tabs: Tab[];
  visible: boolean;
}

const SideBar = ({ tabs, visible }: SideBarProps) => {
  if (!visible) return null;

  return (
    <>
      <div className="bg-white w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
        <div className="flex flex-col gap-4">
          {tabs.map(({ label, path }) => (
            <Link href={`/${path}`} key={path}>
              <button className="bg-[#ff4081] text-white px-2 py-1 w-9/12 border-none font-bold rounded-2xl">
                {label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
