import { SideBar } from "./components/SideBar";
import { SigupBanner } from "./components/SignupBanner";
import { ChatWindow }  from "./components/ChatWindow";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Settings } from "./pages/Settings"; // Adjust path as necessary
import ExploreChatbots from "./pages/ExploreChatbots";
import { PregnancyBot } from "./pages/PregnancyBot";
import Imaging from "./pages/Imaging";

function App() {
  
  return (
   
      <main className="flex min-h-screen items-center justify-center gap-0 dark:bg-gray-800">
        <Router>
         <Routes>
          <Route path="/" element={<ChatWindow />} />  Home route for Chat 
          <Route path="/settings" element={<Settings />} /> Route for Settings
          <Route path="/explore" element={<ExploreChatbots />} /> Route for Exploreing Chatbots
          <Route path="/pregnancy" element={<PregnancyBot />} /> Route for Pregnancy Chatbots
          <Route path="/imaging" element={<Imaging />} /> Route for Imaging

        </Routes>
        </Router>

        {/* Stick the PatientCareBanner at the top */}
        <div className="left-100  w-900 absolute  top-2">
          
          <SigupBanner />
        </div>
        <SideBar />

        {/* <ChatWindow /> */}
      </main>
    
  );
}

export default App;