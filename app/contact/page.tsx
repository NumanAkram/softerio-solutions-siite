import Contact from '@/components/Contact';
import ChatWidget from '@/components/ChatWidget';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <Contact />
      <ChatWidget />
    </main>
  );
}
