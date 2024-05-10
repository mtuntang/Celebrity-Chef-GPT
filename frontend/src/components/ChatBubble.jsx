import React from "react";

// only the robot replies
//* design reference to https://flowbite.com/docs/components/chat-bubble/ *//
function ChatBubble({ text, chefName }) {
  return (
    <div className="flex items-start gap-2.5">
      {chefName == "Uncle Roger" ? (
        <img
          class="w-8 h-8 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Nigel_Ng%2C_2020-11-14_A_%28crop%29.jpg"
          alt="nigel"
        />
      ) : (
        <img
          class="w-8 h-8 rounded-full"
          src="https://hips.hearstapps.com/hmg-prod/images/chef-host-gordon-ramsay-in-the-semi-finale-pt-2-3-chef-news-photo-1699984599.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
          alt="gordon"
        />
      )}
      <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-gray-900 dark:text-white">
            {chefName}
          </span>
        </div>
        <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {text}
        </p>
      </div>
    </div>
  );
}

export default ChatBubble;
