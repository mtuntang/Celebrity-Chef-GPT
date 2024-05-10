import "./App.css";
import FormQuery from "./components/FormQuery";
import ChatBubble from "./components/ChatBubble";
import Chat from "./components/Chat";

function App() {
  const passAPI = async ({ ingredients, tools, time, cuisine }) => {
    // TODO: complete api fetch function when done
  };

  return (
    <div className="flex">
      <div className="w-2/5 h-screen">
        <FormQuery onSubmit={passAPI} />
      </div>
      <div className="w-3/5 bg-indigo-50 h-screen bg-opacity-50">
        <Chat response={"Don't be scared of cooking!"} />
      </div>
    </div>
  );
}

export default App;
