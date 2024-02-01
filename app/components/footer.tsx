import ThemeToggle from "./theme-toggle";

const Footer = () => {
  return (
    <div className="flex items-center justify-center pt-6 w-full  border-t border-neutral-100 dark:border-neutral-800">
      <div className="container flex items-center justify-between">
        <div className="text-xs text-neutral-500">
          ©2024 gibahtech. All Rights Reserved
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
