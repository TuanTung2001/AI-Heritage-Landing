import Home6ImageParallaxMultiPage from "@/components/homes";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title: "NexCyra",
  description: "NexCyra",
  keywords: 'NexCyra',
  openGraph: {
    title: 'Home NexCyra',
    description: 'They may be gone, but their words, their wisdom, and their love don’t have to be.',
    image: '/logo 2.png',
    url: 'https://example.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter NexCyra',
    description: 'Description for Twitter Card',
    image: '/logo 2.png',
  },
};

export default function Home() {
  return (
    <>
      <Home6ImageParallaxMultiPage />
    </>
  );
}
