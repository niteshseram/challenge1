"use client";

import clsx from "clsx";
import Input from "./input";
import TextArea from "./text-area";
import Button from "./button";

export default function ContactForm() {
  return (
    <form
      className={clsx(
        "flex flex-col gap-11",
        "w-full h-full p-4 md:p-8",
        "rounded-lg shadow-lg",
        "bg-white"
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 md:gap-8 md:flex-row">
          <div className="flex-1">
            <Input label="Name" placeholder="Your name" />
          </div>
          <div className="flex-1">
            <Input label="Email" placeholder="email@gmail.com" type="email" />
          </div>
        </div>
        <TextArea
          label="Description"
          placeholder="Write your message..."
          maxLength={500}
          rows={4}
        />
      </div>
      <Button label="Submit" />
    </form>
  );
}
