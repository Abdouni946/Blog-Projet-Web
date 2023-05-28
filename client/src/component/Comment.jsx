import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Singlepost(props) {
  const location = useLocation();

  return (
    <div >

      <section class="bg-white dark:bg-gray-900 py-8 lg:py-1">
        <div class="max-w-2xl mx-auto px-4">
          <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                  class="mr-2 w-6 h-6 rounded-full"
                  src="data:image/png;base64,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"
                  alt="#" />{props.email.split("@")[0]} </p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-03-12"
                  title="March 12th, 2022">Mar. 17, 2023</time></p>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400">{props.content}</p>
            <div class=" cursor-default	 mt-4 space-x-4 flex items-center text-sm text-gray-500  dark:text-gray-400">
              <svg aria-hidden="true" className="cursor-default	 mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              Reply

            </div>
          </article>

        </div>
      </section>
    </div>
  )
}
