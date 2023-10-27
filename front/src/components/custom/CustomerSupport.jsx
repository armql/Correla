import React, { useState, useEffect } from "react";
import chatbot from "../../assets/svg/chatbot.svg";

export default function CustomerSupport() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([
    {
      text: "I need help with Medical Consultation",
      action: handleMedicalConsultation,
      enabled: true,
    },
    {
      text: "I need help with Appointment Scheduling",
      action: handleAppointmentScheduling,
      enabled: true,
    },
    { text: "I have an Emergency", action: handleEmergency, enabled: true },
  ]);
  const [previousOptions, setPreviousOptions] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setCurrentOptions([
      {
        text: "I need help with Medical Consultation",
        action: handleMedicalConsultation,
        enabled: true,
      },
      {
        text: "I need help with Appointment Scheduling",
        action: handleAppointmentScheduling,
        enabled: true,
      },
      { text: "I have an Emergency", action: handleEmergency, enabled: true },
    ]);
    setPreviousOptions([]);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  function handleMedicalConsultation() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Medical Consultation", user: true },
    ]);
    // Store the previous options and show new options
    setPreviousOptions([...currentOptions]);
    setCurrentOptions([
      {
        text: "Implant Consultation",
        action: handleImplantConsultation,
        enabled: true,
      },
      {
        text: "Orthodontic Consultation",
        action: handleOrthodonticConsultation,
        enabled: true,
      },
      {
        text: "Denture Consultations",
        action: handleDentureConsultation,
        enabled: true,
      },
      {
        text: "Go Back",
        action: handleGoBack,
        enabled: true,
      },
    ]);
  }

  function handleGoBack() {
    setChat((prevChat) => [...prevChat, { text: "Going back...", user: true }]);

    if (previousOptions.length > 0) {
      // Get the previous options from the stack
      const prevOptions = previousOptions.pop();

      setCurrentOptions(prevOptions);
      setPreviousOptions([...previousOptions]); // Update the previousOptions stack
    }
  }

  function handleImplantConsultation() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Implant Consultation selected", user: true },
    ]);
    // Handle Implant Consultation logic
  }

  function handleOrthodonticConsultation() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Orthodontic Consultation selected", user: true },
    ]);
    // Handle Orthodontic Consultation logic
  }

  function handleDentureConsultation() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Denture Consultations selected", user: true },
    ]);
    // Handle Denture Consultations logic
  }

  function handleAppointmentScheduling() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Appointment Scheduling selected", user: true },
    ]);
    setCurrentOptions([
      {
        text: "Schedule with me (bot)",
        action: handleScheduleWithBot,
        enabled: true,
      },
      {
        text: "Schedule by yourself",
        action: handleScheduleByYourself,
        enabled: true,
      },
      {
        text: "Go Back",
        action: handleGoBack,
        enabled: true,
      },
    ]);
  }

  function handleScheduleWithBot() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Schedule with me (bot) selected", user: true },
    ]);
    // Handle Schedule with Bot logic
  }

  function handleScheduleByYourself() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Schedule by yourself selected", user: true },
    ]);
    // Handle Schedule by Yourself logic
  }

  function handleEmergency() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Emergency selected", user: true },
    ]);
    // Store the previous options and show new options
    setPreviousOptions([...currentOptions]);
    setCurrentOptions([
      { text: "I have severe pain", action: handleSeverePain, enabled: true },
      {
        text: "I have other concerns",
        action: handleOtherConcerns,
        enabled: true,
      },
      {
        text: "Go Back",
        action: handleGoBack,
        enabled: true,
      },
    ]);
  }

  function handleSeverePain() {
    setChat((prevChat) => [...prevChat, { text: "Severe Pain", user: true }]);
    // Handle Severe Pain logic
  }

  function handleOtherConcerns() {
    setChat((prevChat) => [
      ...prevChat,
      { text: "Other Concerns selected", user: true },
    ]);
    // Handle Other Concerns logic
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault(); // Prevent form submission (Enter key)
    if (input.trim() === "") return;

    // Simulate a response from the chatbot
    setTimeout(() => {
      const userQuestion = input.toLowerCase();
      let botResponse = "";

      // Default response for other user inputs
      botResponse =
        "I'm here to help! Please choose from the available options.";

      const botMessage = { text: botResponse, user: false };
      setChat((prevChat) => [...prevChat, botMessage]);
    }, 500);

    setInput("");
  };

  // Greet the user when the chat starts
  useEffect(() => {
    if (isChatOpen) {
      const initialBotMessage = {
        text: "Hello! How can I assist you today?",
        user: false,
      };
      setChat((prevChat) => [...prevChat, initialBotMessage]);
    }
  }, [isChatOpen]);

  return (
    <div className="fixed z-20 bottom-2 right-2">
      <div
        className={`flex justify-center items-center p-2 py-2.5 hover:scale-95 cursor-pointer transition active:scale-105 rounded-full bg-white ${
          isChatOpen ? "hidden" : "block"
        }`}
        onClick={toggleChat}
      >
        <img src={chatbot} alt="" className="w-9 h-9" />
      </div>

      {isChatOpen && (
        <div
          className="flex justify-between bg-white p-4 rounded-lg shadow-lg"
          style={{
            width: "300px",
            maxHeight: "400px",
            overflow: "hidden",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <div className="flex flex-row justify-between items-center text-lg font-semibold">
              Chat with Chatbot
              <button
                type="button"
                onClick={toggleChat}
                className="text-sm text-gray-700 hover:text-black font-light"
              >
                Close
              </button>
            </div>

            <div className="h-full flex flex-col justify-end">
              {chat.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.user
                      ? "text-right text-sm text-blue-800"
                      : "text-left text-sm text-gray-800"
                  } p-2 my-2`}
                >
                  <div
                    className={`${
                      message.user
                        ? "bg-blue-100 rounded-tl rounded-bl rounded-br"
                        : "bg-gray-200 rounded-tr rounded-br rounded-bl"
                    } inline-block p-2 rounded`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex bg-transparent flex-col gap-2">
              <div className="flex p-2 items-end flex-col w-full gap-2">
                {currentOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={option.action}
                    className={`border p-2 text-xs rounded-sm shadow-sm active:scale-105 ${
                      option.enabled
                        ? "bg-white hover:bg-gray-50"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={!option.enabled}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
