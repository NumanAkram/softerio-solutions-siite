'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import Image from 'next/image';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! What can I do for you?', sender: 'bot', avatar: '/images/Avatar.gif' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      avatar: 'user-icon'
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Thanks for your message! Our team will get back to you soon.',
        sender: 'bot',
        avatar: '/images/Avatar.gif'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white p-1 rounded-full shadow-lg hover:scale-110 transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center overflow-hidden"
        >
          <Image 
            src="/images/Avatar.gif" 
            alt="Chat Support" 
            width={56} 
            height={56} 
            className="w-full h-full object-cover rounded-full"
          />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[calc(100vw-3rem)] max-w-[320px] h-96 flex flex-col animate-fade-in-up transition-colors duration-300">
          {/* Header */}
          <div className="bg-teal-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <Image 
                  src="/images/Avatar.gif" 
                  alt="Support Avatar" 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Support</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {message.sender === 'bot' ? (
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-white">
                    <Image 
                      src="/images/Avatar.gif" 
                      alt="Support Avatar" 
                      width={32} 
                      height={32} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full flex-shrink-0 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                )}
                <div
                  className={`max-w-[60%] px-3 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  <p className="text-sm break-words">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2 items-center">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
              />
              <button
                onClick={sendMessage}
                className="bg-teal-500 hover:bg-teal-600 text-white w-9 h-9 rounded-full transition-colors flex items-center justify-center flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}