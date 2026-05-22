import { IconExplore, IconPlay } from "@/components/icons";

export const menuItems: {
  url: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/explore",
    title: "Kham pha",
    icon: <IconExplore className="size-5" />,
  },
];
