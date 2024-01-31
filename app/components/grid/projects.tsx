import { GridItemInterface } from "@/app/config/site-config";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const Project = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} target="_blank">
      <div className="flex flex-col items-center">
        <p className="@lg:text-lg font-semibold line-clamp-1 ">{item.title}</p>
        <p className="text-sm text-neutral-500 ">{item.tech}</p>
      </div>
      <Image
        className="z-0 object-cover object-center w-full h-full"
        alt={item.title}
        src={item.image as string}
      />
    </Link>
  );
};

export default Project;
