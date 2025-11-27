import WhyChooseUs from '@/components/WhyChooseUs';
import ChatWidget from '@/components/ChatWidget';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <WhyChooseUs />
      <ChatWidget />
    </main>
  );
}
