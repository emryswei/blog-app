import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import PaperIcon from "@/icons/paper_cute_fi.svg";
import Twitter from "@/icons/twitter_cute_fi.svg";
import PicCute from "@/icons/pic_cute_fi.svg";
import VideoCute from "@/icons/video_cute_fi.svg";

interface NavItem {
  href: string;
  icon: StaticImageData;
  alt: string;
  label: string;
}

interface SideBarButtonProps {
  item: NavItem;
}

function SideBarButton({ item }: SideBarButtonProps) {
  return (
    <Button asChild className="h-auto">
      <Link href={item.href} className="flex flex-col">
        <Image src={item.icon} alt={item.alt} />
        <div>{item.label}</div>
      </Link>
    </Button>
  );
}

function ButtonContentPreview() {
  return <div>Hello</div>;
}

const navItems: NavItem[] = [
  {
    href: "/items/content",
    icon: PaperIcon,
    alt: "paper icon preview",
    label: "Count",
  },
  {
    href: "/items/social",
    icon: Twitter,
    alt: "twitter icon preview",
    label: "Count",
  },
  {
    href: "/items/chat",
    icon: PicCute,
    alt: "chat icon preview",
    label: "Count",
  },
  {
    href: "/items/video",
    icon: VideoCute,
    alt: "video icon preview",
    label: "Count",
  },
];

export default function SideBar() {
  return (
    <div className="bg-custom-background w-[30vw] flex flex-col">
      <div className="flex h-auto	">
        <div>Logo</div>
      </div>
      <div className="flex flex-row justify-center">
        {navItems.map((item) => (
          <SideBarButton key={item.href} item={item} />
        ))}
      </div>
      <div className="flex h-auto">
        <ButtonContentPreview />
      </div>
    </div>
  );
}
