import { GridItemInterface } from "@/app/config/site-config";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-semibold">{item.category}</p>
          <small className="text-default-500">{item.tech}</small>
          <h4 className="font-bold text-large">{item.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={item.title}
            className="object-cover rounded-xl"
            src={item.image as string}
            width={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
};

export default Project;
