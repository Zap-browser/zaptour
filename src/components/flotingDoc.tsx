import { FloatingDock } from "@/components/ui/floating-dock";
import zap from "../assets/zap.png"; 
import {
  IconHome,
  IconMan,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Dashboard",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "dashboard",
    },
    {
      title: "ZAP Usage?",
      icon: (
        <img
          src={zap}
          width={90}
          height={90}
        />
      ),
      href: "usage",
    },
    {
      title: "Web-Injections",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "injections",
    },
    {
      title: "Peers",
      icon: (
        <IconMan className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "peers",
    },
  ];
  return (
    <div className="fixed bottom-[10px] flex justify-center w-full z-10">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
