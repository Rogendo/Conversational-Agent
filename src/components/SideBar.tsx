import { useState } from 'react';
import { Badge, Sidebar } from "flowbite-react";
import { HiAdjustments, HiQuestionMarkCircle, HiOutlineChatAlt2, HiOutlineChat,  HiOutlineClock, HiOutlineFilm, HiNewspaper, HiBell } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSettings, FiLogOut, FiUser } from 'react-icons/fi'; // Import icons
import Modal from './Modal';
import NotFoundModal from './NotFound';
import History from './History';

export function SideBar() {
  // State to manage the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHistoryOpen, setHistoryOpen] = useState(false);

  const [isNotFoundOpen, setNotFoundOpen] = useState(false);

  const openNotFound = ()=>{
    setNotFoundOpen(true);
  }

  const closeNotFound = ()=>{
    setNotFoundOpen(false);

  }
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openHistory = () => {
    setHistoryOpen(true);
  };

  const closeHistory = () => {
    setHistoryOpen(false);
  };
  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Tray Icon to toggle the sidebar - positioned at the top left */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-cyan-900 text-white shadow-lg hover:bg-cyan-800"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <Sidebar
        aria-label="Patient Care AI Therapist"
        className={`transition-all duration-300 fixed top-9 left-0 h-full overflow-y-auto ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}
      >
        <Sidebar.Logo href="/" img="/logo192.png" imgAlt="patient care logo" className='mb-9 flex items-center'>
          {isSidebarOpen && "Patient Care"}
        </Sidebar.Logo>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/explore" icon={HiOutlineChatAlt2} className="">
              {isSidebarOpen && "Explore Chatbots"}
            </Sidebar.Item>

            <Sidebar.Item href="/" icon={HiOutlineChat}>
              {isSidebarOpen && "Chat"}
            </Sidebar.Item>

            <Sidebar.Collapse icon={HiOutlineClock} onClick={openHistory} label={isSidebarOpen ? "History" : ""}>
              {/* Logic to list all available chat history for that specific user */}
            </Sidebar.Collapse>

            <Sidebar.Item href="#" onClick={openNotFound} icon={HiBell} label='3' labelColor='red'>
              {isSidebarOpen && "Notifications"}
            </Sidebar.Item>
            
            <Sidebar.Item href="/imaging"  icon={HiOutlineFilm}>
                {isSidebarOpen && "Imaging "}
            </Sidebar.Item>

            {/* 404 noModel component */}
            <NotFoundModal isOpen={isNotFoundOpen} onClose={closeNotFound}>
              
            </NotFoundModal>

            <Sidebar.ItemGroup>
            <Sidebar.Item href="#" onClick={openModal} icon={HiAdjustments}>
                {isSidebarOpen && "Settings"}
            </Sidebar.Item>

            <Sidebar.Item href="#" onClick={openModal} icon={HiQuestionMarkCircle}>
                {isSidebarOpen && "Ask "}
            </Sidebar.Item>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              
            </Modal>

            {/* History component */}
            <History isOpen={isHistoryOpen} onClose={closeHistory}>
            </History>

            </Sidebar.ItemGroup>
          </Sidebar.ItemGroup>
        </Sidebar.Items>

        <Sidebar.CTA>
          {/* <div className='mb-3 flex items-center bottom-1 '> */}
            <div className="mb-3 flex items-center">
              <Badge color="warning">Beta</Badge>
            </div>
            {isSidebarOpen && (
              <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                Available 24/7, it provides confidential support to help you maintain well-being or navigate difficult times, fitting seamlessly into your life.
              </div>
            )}
            {isSidebarOpen && (
              <a
                className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
                href="#"
              >
                Patient Care
              </a>
            )}
          {/* </div> */}
        </Sidebar.CTA>
        <br/>
        <div className="flex bottom-3 justify-center  space-x-6 mb-4">
          <button className="text-xl text-cyan-900 hover:text-cyan-700" title="Settings">
            <FiSettings />
          </button>
          <button className="text-xl text-xl text-cyan-900 hover:text-cyan-700" title="user@gmail.com">
            <FiUser />
          </button>
          <button className="text-xl text-xl text-cyan-900 hover:text-cyan-700" title="Log Out">
            <FiLogOut />
          </button>
         </div>
      </Sidebar>
    </div>
  );
}