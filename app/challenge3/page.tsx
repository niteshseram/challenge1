import clsx from "clsx";

import MetadataInfo from "@/components/challenge3/metadata";
import ContactForm from "@/components/challenge3/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen p-4 challenge-container">
      <div
        className={clsx(
          "flex items-center justify-center gap-12 md:gap-16 lg:gap-8 flex-col lg:flex-row",
          "rounded md:rounded-md lg:rounded-lg shadow-sm md:shadow-md lg:shadow-lg",
          "px-3 py-12 md:px-4 md:py-[83px] lg:py-[297px] lg:px-24",
          "challenge-bg"
        )}
      >
        <div className="flex flex-col flex-1 gap-10 md:gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
              Talk to our team
            </h1>
            <p className="text-xl text-neutral-600">
              We&apos;re committed to delivering the support you require to make
              your experience as smooth and satisfying as possible.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <MetadataInfo
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"
                    fill="currentColor"
                  />
                </svg>
              }
              label="4 Privet Drive Little Whinging, Surrey, England"
            />
            <MetadataInfo
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"
                    fill="currentColor"
                  />
                </svg>
              }
              label="+1 1800 900 21312"
            />
            <MetadataInfo
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
                    fill="currentColor"
                  />
                </svg>
              }
              label="hello@greatfrontend.com"
            />
          </div>
        </div>
        <div className="flex flex-1 w-full">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
