import Image from "next/image";
import clsx from "clsx";

import Button from "./components/button";

export default function Home() {
  return (
    <main className="min-h-screen p-4 flex">
      <div
        className={clsx(
          "flex items-center justify-center gap-8 grow lg:flex-row flex-col",
          "rounded-lg shadow-lg",
          "p-3 md:p-4 lg:p-24"
        )}
      >
        <div className="flex flex-col md:gap-16 gap-8">
          <div className="flex flex-col md:gap-6 gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
              Well crafted abstract images
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl">
              Eye catchy abstract gradient for project, wallpaper, and other
              things that kick start your presentation.
            </p>
          </div>
          <div className="flex gap-4 md:gap-8 justify-between md:justify-normal">
            <Button label="Learn more" variant="secondary" />
            <Button label="See pricing" variant="primary" />
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/banner.jpg"
            alt="banner"
            width={696}
            height={526}
            className="shrink-0"
          />
        </div>
      </div>
    </main>
  );
}
