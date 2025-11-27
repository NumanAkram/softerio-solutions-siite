import Statistics from '@/components/Statistics';
import ChatWidget from '@/components/ChatWidget';

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <Statistics />
      <ChatWidget />
    </main>
  );
}
