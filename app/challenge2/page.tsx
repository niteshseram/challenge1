import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/button";
import StatsCard from "@/components/stats-card";

export default function Home() {
  return (
    <main className="min-h-screen p-4 flex challenge-container">
      <div
        className={clsx(
          "flex items-center justify-center gap-12 md:gap-16 grow flex-col",
          "rounded md:rounded-md lg:rounded-lg shadow-sm md:shadow-md lg:shadow-lg",
          "px-4 py-12 md:px-4 md:py-16 lg:p-24",
          "challenge-bg"
        )}
      >
        <div className={clsx("flex flex-col justify-center gap-5", "lg:px-8")}>
          <div className="flex flex-col gap-3 items-center w-full">
            <p className="text-indigo-700 font-semibold">Statistics</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 text-center">
              More than premium abstract imagery
            </h1>
          </div>
          <p className="text-xl text-neutral-600 text-center">
            We view our platform not just as a service, but as a catalyst for
            enriching lives and adding value to the world through premium
            abstract imagery.
          </p>
        </div>
        <div className="flex gap-12 md:gap-16 lg:gap-8 w-full flex-col lg:flex-row items-center">
          <div
            className={clsx(
              "lg:flex-1",
              "lg:max-h-[544px] md:h-[656px] h-[311px] w-full relative"
            )}
          >
            <Image src="/challenge2.png" alt="challenge banner" fill />
          </div>
          <div className="flex flex-col md:gap-8 gap-6 flex-1 w-full">
            <p className="text-lg text-neutral-600">Our mission, in numbers</p>
            <StatsCard count={25664890} label="Downloads" />
            <StatsCard count={17219} label="Paid Users" />
            <StatsCard count={190654321} label="Images in library" />
          </div>
        </div>
      </div>
    </main>
  );
}
