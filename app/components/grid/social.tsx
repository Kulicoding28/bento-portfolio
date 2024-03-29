import { GridItemInterface } from "@/app/config/site-config";
import Link from "next/link";
import Button from "../button";
import Icon from "@/public/icon";

const Social = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} target="_blank">
      {/* header */}
      <div className="flex items-center justify-between">
        {item.icon && <Icon type={item.icon} color={item.color ?? "#fff"} />}
        {item.layout === "2x2" && (
          <Button text={item.buttonTitle} color={item.color} />
        )}
      </div>

      {/* Content */}
      <div className="mt-2">
        <div className="@lg:text-lg font-semibold line-clamp-1">
          {item.title}
        </div>
        <div className="text-sm text-neutral-500">{item.username}</div>

        {item.description && (
          <div className="mt-2 text-sm text-neutral-500 line-clamp-2">
            {item.description}
          </div>
        )}

        {item.layout === "1x2" && (
          <div className="mt-2">
            <Button text={item.buttonTitle ?? ""} color={item.color} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Social;
