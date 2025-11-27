import FAQ from '@/components/FAQ';
import ChatWidget from '@/components/ChatWidget';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <FAQ />
      <ChatWidget />
    </main>
  );
}
