import { useState } from "react";
import {
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Volume2,
  ArrowUp,
  FileText,
  Mic,
  CheckCircle,
  ClipboardList,
} from "lucide-react";

export default function AI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="bg-gradient-to-r from-[#103570] to-[#004FCE] px-4 font-[Manrope] py-12">
      <div className="w-full lg:max-w-[1440px] mx-auto">
        <h1 className="text-[#FCE38A]">Live Ai Coach</h1>
        <h1 className="text-3xl text-white mb-9 mt-4">
          Take a Suggestion Coaching{" "}
        </h1>
      </div>
      <div className="w-full lg:max-w-[1440px] flex flex-col lg:flex-row gap-4 mx-auto my-12">
        {/* text container */}
        <div className="w-full lg:max-w-[883px] rounded-md bg-white">
          <nav className="p-6 text-3xl font-semibold">AI Sales Coach</nav>

          {/* chat display container */}
          <div className="bg-[#CDCDCD] flex-grow relative h-[400px] py-4 px-4 overflow-auto space-y-3">
            <p className="bg-white p-2 text-sm absolute left-5 w-3/4 lg:max-w-2/4 rounded-sm">
              Hello! I'm your AI sales coach. How can I help you improve your
              sales performance today?
            </p>
            {/* Messages from input */}
            <div className="flex flex-col space-y-2 pt-16">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="self-end bg-green-600 text-white px-4 py-2 rounded-md max-w-[70%] text-sm"
                >
                  {msg}
                </div>
              ))}
            </div>
          </div>

          {/* sending container */}
          <div>
            {/* suggestion buttons*/}
            <div className="flex flex-col lg:flex-row gap-6 justify-around p-6">
              <button className="text-[#002868] bg-[#00286814] rounded-md px-2 py-1">
                How do I handle objections?
              </button>
              <button className="text-[#002868] bg-[#00286814] rounded-md px-2 py-1">
                Give me a cold email template
              </button>
              <button className="text-[#002868] bg-[#00286814] rounded-md px-2 py-1">
                Closing techniques
              </button>
              <button className="text-[#002868] bg-[#00286814] rounded-md px-2 py-1">
                Negotiation Tips
              </button>
            </div>

            {/* input and send button */}
            <div className="flex flex-col lg:flex-row p-6 gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex grow border-2 border-[#E5E7EB] px-2 py-2 rounded-sm"
              />
              <button
                onClick={() => {
                  if (input.trim() !== "") {
                    setMessages((prev) => [...prev, input]);
                    setInput("");
                  }
                }}
                className="bg-[#002868] py-3 lg:px-3 text-white rounded-sm flex items-center gap-2 justify-center"
              >
                Send <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* middle container */}
        <div className="hidden lg:flex lg:flex-col justify-around text-gray-600 bg-white p-3 rounded-3xl h-[300px] mt-22">
          <RefreshCw />
          <ThumbsUp />
          <ThumbsDown />
          <ClipboardList />
          <Volume2 />
        </div>

        {/* right container */}
        <div className="flex flex-col h-full">
          <div className="space-y-3">
            {/* analysis section */}
            <div className="p-6 bg-[#EFEFEF] space-y-4 rounded-md">
              <h1 className="text-2xl font-semibold">Real-time Analysis</h1>

              {/* confidence container */}
              <div className="space-y-3 bg-white p-3 rounded-md">
                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <h1>Confidence Level</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="h-2 w-9/10 rounded-sm bg-gradient-to-r from-green-600 from-0% via-green-600 via-[85%] to-gray-300 to-[85%]"></div>
                  <div>85%</div>
                </div>
              </div>

              {/* confidence text container */}
              <div className="space-y-3 bg-white p-3 rounded-md">
                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <h1>Confidence Level</h1>
                </div>
                <div className="text-[#909090]">
                  85% improvement in objection handling
                </div>
              </div>
            </div>

            {/* quick actions container */}
            <div className="p-6 bg-[#EFEFEF] space-y-4 rounded-md">
              <h1 className="text-2xl font-semibold">Quick actions</h1>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="p-2 w-full bg-white rounded-md space-y-2 font-semibold">
                  <FileText className="text-blue-900" />
                  <h1>Generate Script</h1>
                </div>
                <div className="p-2 w-full bg-white rounded-md space-y-2 font-semibold">
                  <Mic className="text-blue-900" />
                  <h1>Practice Pitch</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
