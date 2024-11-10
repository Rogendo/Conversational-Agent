"use client";
import { Banner } from "flowbite-react";
import { FaBookOpen } from "react-icons/fa";
import { HiArrowRight, HiX } from "react-icons/hi";

export function SigupBanner() {
  return (
    <Banner>
      <div className="flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="https://patientcare.care/"
            className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">
            <img src="/logo512.png" className="mr-2 h-6" alt="Patient Care Logo" />
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">
              Patient Care
            </span>
          </a>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            For more personlised Feeds and access to medical professionals t your finertips, sign up with us now!
          </p>
        </div>
        

      <div className="flex shrink-0 items-center">
          <a
            href="https://www.patientcare.care/healthcoverage"
            className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
            <FaBookOpen className="mr-2 h-4 w-4" />
            Learn more
          </a>
          <a
            href="https://www.patientcare.care/doctors"
            className="mr-2 inline-flex items-center justify-center rounded-lg bg-green-500 px-3 py-2 text-xs font-medium text-white hover:bg-green-200 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500">
            Get started
            <HiArrowRight className="ml-2 h-4 w-4" />
          </a>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
        </div>

    </Banner>
    // TODO : Add google analytics to monitor how long your users visit with your site, how long they spend on the site, and also predict the traffic mONITOR YOUR CHATBOT TRAFFIC
    // TODO : Session Id and saving the user sessions
    // TODO : Implement Language translation Models
    // TODO : Speech recognition
    // TODO : Implement a Sentiment classifier
    // TODO : Save the chatsessions as txt files apart from the flowise dashboard
    // TODO : Fetch and Feed the chatsessions txt files to amazon medical comprehend, then this context gotten from here will be used everytime a user starts a conversation.
    // TODO : the model
    
  );
}
