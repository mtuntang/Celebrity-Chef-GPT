import React, { useState } from "react";
import ChatBubble from "./ChatBubble";

// TODO: create a Chat component with ChatBubble rendering the response
// the image should be conditionally rendered based on the cuisine
function Chat({ response }) {
  return (
    <div>
      <div className="mt-4 ml-4">
        <ChatBubble
          text={response}
          chefName={"Uncle Roger"}
        />
      </div>
    </div>
  );
}

export default Chat;
