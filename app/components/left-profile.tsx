"use client";

import { Avatar } from "@nextui-org/react";
import { siteConfig } from "../config/site-config";
import { Mail, MapPin } from "lucide-react";
import Footer from "./footer";

const LeftProfile = () => {
  return (
    <div
      key="left-profile"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      <div>
        {/*  top container */}
        <div>
          <Avatar src="/pp.jpg" className="w-20 h-20 text-large" />
        </div>

        {/* text container */}

        <div className="mt-6">
          <div className="text-xl font-medium text-primary">
            {siteConfig.title}
          </div>
          <h1 className="text-4xl mt-2 font-bold">{siteConfig.creator}</h1>
          <p className="text-2xl font-light text-neutral-500">
            {siteConfig.bio}
          </p>
        </div>
        {/* Buttons Container */}
        <div className="flex items-center gap-3 mt-6">
          <a
            href={`${siteConfig.locationLink}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <Mail size="14" />
            Contact Me
          </a>
        </div>
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftProfile;
