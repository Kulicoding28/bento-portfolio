import { GridItemInterface } from "@/app/config/site-config";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const Project = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} target="_blank">
      <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden">
        <Image
          className="z-0 object-cover object-center w-full h-full"
          alt={item.title}
          src={item.image as string}
        />
      </div>
    </Link>
  );
};

export default Project;
