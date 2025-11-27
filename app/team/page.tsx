import Team from '@/components/Team';
import ChatWidget from '@/components/ChatWidget';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <Team />
      <ChatWidget />
    </main>
  );
}
