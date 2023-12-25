import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import Image from "next/image";

const myLoader = ({ src }) => {
  return `${src}`;
};

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  // useEffect(() => {
  //   heightFix();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      

      <div className="relative max-w-6xl -mt-28 mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-7 md:pb-16">
            <h1 className="h2 mb-4">Steps to follow</h1>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Section content */}

          <ol class="relative border-s border-gray-200 -mt-5 dark:border-gray-700">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-base font-normal leading-none text-gray-700 dark:text-gray-500">
                Step 1
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Select show original of any gmail you want to analyze. 
              </h3>
              <div class="px-3 mt-2 ml-8">
                <img src="show_original.png" className="w-full h-[500px]"/>
              </div>
              
            </li>
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-base font-normal leading-none text-gray-700 dark:text-gray-500">
                Step 2
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Copy the header by clicking Copy to clipboard
              </h3>
              <div class="px-3 mt-2 ml-8">
                <img src="copy_clipboard.png" className="w-full h-[500px]"/>
              </div>
            </li>
            <li class="ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-base font-normal leading-none text-gray-600 dark:text-gray-500">
                Step 3
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Paste the header and generate email classification and report
              </h3>
              <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mt-2 mb-4 sm:w-auto sm:mb-0"
                    href="/verify"
                  >
                    Start Now
                  </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Features;
