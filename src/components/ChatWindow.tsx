import React, { useState } from 'react';
import query from '../utils/FlowiseAI';
import { BsArrowRight } from 'react-icons/bs';


export const ChatWindow = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi, how can I help you?', user: 'Bot', time: new Date().toLocaleTimeString() },
  ]);
  const [loading, setLoading] = useState(false); // To show loading while waiting for the API

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return; // Don't send empty messages

    const userMessage = {
      type: 'user',
      text: inputMessage,
      user: 'User', // User's name
      time: new Date().toLocaleTimeString(), // Current time
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage(''); // Clear the input field

    setLoading(true);

    try {
      // Get or generate the session ID
      // const sessionId = getSessionId();
      const sessionId = 'session-1728850958711-zwnvvl0nm'
      console.log("here is the session id:", sessionId)
      
      // const apiResponse = await query(data, sessionId);   // Call the query function
      // Call the query function and pass the input message along with sessionId
      const apiResponse = await query({
        question: inputMessage,
        sessionId: sessionId,  // Make sure to reuse existing sessionId
      }, sessionId);

      const botResponse = {
        type: 'bot',
        text: apiResponse.text || "Sorry, I couldn't get a proper response.",
        user: 'Bot',
        time: new Date().toLocaleTimeString(),
      };


      setMessages((prevMessages) => [...prevMessages, botResponse]);
      
    } catch (error) {
      console.error('Error fetching bot response:', error);
      const errorMessage = {
        type: 'bot',
        text: "Sorry, I couldn't get a response. Try again later.",
        user: 'Bot',
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle the Enter key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of Enter key (newline)
      handleSendMessage(); // Call the send message function
    }
  };

  return (
    <div className="relative flex flex-col h-[80vh] w-[70vw] mx-auto bg-gray-300 border border-gray-300 rounded-lg shadow-lg">
      {/* Chat window */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.type === 'user' ? (
              <div className="flex items-start">
                <div className="p-3 max-w-lg rounded-lg bg-purple-500 text-white">
                  {message.text}
                  <div className="text-xs text-gray-200 mt-1">
                    <span>{message.user} • {message.time}</span>
                  </div>
                </div>
                <img src="therapist.png" alt="User" className="w-8 h-8 rounded-full ml-2" /> {/* User Icon */}
              </div>
            ) : (
              <div className="flex items-start">
                <img src="therapist.jpg" alt="Bot" className="w-8 h-8 rounded-full mr-2" /> {/* Bot Icon */}
                <div className="p-3 max-w-lg rounded-lg bg-gray-300 text-black">
                  {message.text}
                  <div className="text-xs text-gray-500 mt-1">
                    <span>{message.user} • {message.time}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="mr-auto mb-2 p-3 max-w-lg rounded-lg bg-gray-300 text-black flex items-start">
            <img src="therapist.jpg" alt="Bot" className="w-8 h-8 rounded-full mr-2" /> {/* Bot Icon */}
            <span>...</span>
          </div>
        )}
    
      </div>

         {/* Input field */}
         <div className="flex items-center shadow-xl border border-gray-400 rounded-full p-2 bg-gray-300 lg:w-[60%] mx-auto  ">
        <input
          type="text"
          className="flex-1 bg-inherit px-4 border-transparent focus:border-transparent focus:ring-0"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Add keydown event handler
        />
        <button
          className=" p-2 w-10 h-10  text-white rounded-full bg-gradient-to-br from-primary-darkGreen to-primary-purple flex items-center justify-center"
          onClick={handleSendMessage}
          disabled={loading}
          title="Send Message"
        > <BsArrowRight className='text-3xl'/>
        </button>
      </div>

      {/* Footer */}
      <p className='mt-2 text-center p-2'>For access to a wide variety of health professionals <a target='_blank' rel="noopener" href="https://www.patientcare.care/download" className='text-primary-purple underline hover:no-underline hover:text-primary-green'>download</a> the Patient Care Customer App now!</p>
      <p className=' text-center' >&copy; {new Date().getFullYear()} <a target='_blank' rel="noopener" href="https://www.patientcare.care" className='text-primary-purple underline hover:no-underline hover:text-primary-green'>Patient Care</a>. All rights reserved.</p>
    </div>
  );
};
