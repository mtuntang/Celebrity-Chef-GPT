import React, { useState } from "react";
import ChatBubble from "./ChatBubble";

// the image should be conditionally rendered based on the cuisine
function Chat({ response }) {
  return (
    <div>
      <div className="mt-4 ml-4">
        {/* TODO: loop over the messages (response) that the chatbot provides and render it on the Chat component*/}
        <ChatBubble text={response} chefName={"Uncle Roger"} />
      </div>
    </div>
  );
}

export default Chat;
