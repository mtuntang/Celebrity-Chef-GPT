import "./App.css";
import FormQuery from "./components/FormQuery";
import ChatBubble from "./components/ChatBubble";

function App() {
  const passAPI = async ({ ingredients, tools, time, cuisine }) => {
    // TODO: complete api fetch function when done
  };

  return (
    <div className="flex">
      <div className="w-2/5">
        <FormQuery onSubmit={passAPI} />
      </div>
      <div className="w-3/5">
        <div className="mt-4 ml-4">
          <ChatBubble text={"Hi"} chefName={"Gordon Ramsay"} />
        </div>
      </div>
    </div>
  );
}

export default App;
