import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useNavigation } from "@/hooks/useNavigation";

type Tab = { label: string; path: string };

interface SideBarProps {
  tabs: Tab[];
  visible: boolean;
}

const SideBar = ({ tabs, visible }: SideBarProps) => {
  const { data: user } = useCurrentUser();
  const { router } = useNavigation();

  if (!visible) return null;

  return (
    <>
      <div className="bg-white w-56 absolute top-20 right-0 py-5 flex flex-col border-2 border-gray-800 z-10">
        <div className="flex flex-col gap-4">
          {tabs.map(({ label, path }) => (
            <Link href={`/${path}`} key={path}>
              <button className="bg-[#ff4081] text-white px-2 py-1 w-9/12 border-none font-bold rounded-2xl">
                {label}
              </button>
            </Link>
          ))}
          {user &&
            <div
              onClick={() => signOut()}
              className="px-3 text-center text-sm hover:underline"
            >
              로그아웃
            </div>
          }
          {!user &&
            <div
              onClick={() => router.push('/auth')}
              className="px-3 text-center text-sm hover:underline"
            >
              로그인
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default SideBar;
