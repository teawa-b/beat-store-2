import Artists from '@/components/Artists';
import FAQS from '@/components/FAQS';
import Licenses from '@/components/Licenses';
import TrackListing from '@/components/track-listing';
import { MoveUp } from 'lucide-react';
// import Particles from '@/components/ui/ReactBits/Particles';
// import Background from '@/components/Background';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO
import { useEffect, useState } from 'react';
import YoutubeSection from '@/components/YouTube';
import MailerLitePopUp from '../src/components/MailerLitePopup';
// import PackList from '@/components/PackList';
const Home = ({ size }: { size: string }) => {
  // document.title = `Troo! | Home`;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll position
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate 90% of the page height
      const ninetyPercentHeight = 0.9 * documentHeight;

      // Show button if scrolled past 90% of the page
      setShowButton(scrollPosition + windowHeight >= ninetyPercentHeight);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO metadata
  const baseUrl = window.location.origin;
  const canonicalUrl = `${baseUrl}/`;
  const title = 'Troo! | Type Beats, Instrumentals & YouTube Beat Drops';
  const description =
    'Shop Troo! type beats and instrumentals with red-room energy, melodic loops, hard drums, instant downloads, and flexible licensing for artists.';
  const keywords =
    'Troo beats, type beats, instrumentals, music production, hip hop beats, trap beats, rap beats, beat download, youtube beats, melodic type beats';
  const imageUrl = `${baseUrl}/troo-og.svg`;
  return (
    <div className="overflow-x-hidden flex flex-col gap-64 relative">
      {/* React Helmet for SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Troo!" />

        {/* Twitter Card for X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Structured Data (JSON-LD) for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: canonicalUrl,
            name: 'Troo!',
            description: description,
            publisher: {
              '@type': 'Organization',
              name: 'Troo!',
              logo: {
                '@type': 'ImageObject',
                url: imageUrl,
              },
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: `${baseUrl}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
      </Helmet>
      <MailerLitePopUp />
      <TrackListing
        limitTrackCount={50}
        // searchTerm={searchTerm}
        // setSearchTerm={setSearchTerm}
      />
      <Artists size={size} />
      {/* <PackList /> */}
      <Licenses />
      {/* FAQS */}
      <div className="flex flex-col justify-center self-center md:min-w-6xl">
        <div className="z-50 flex flex-col gap-12">
          <h2 className={`font-bold ${size}`}>FAQS</h2>
          <FAQS />
        </div>
      </div>
      {/* <Contact fullscreen={false} /> */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="z-50 fixed bottom-35 lg:right-20 right-5 transition-all duration-300 transform !bg-transparent"
        >
          <MoveUp />
        </button>
      )}
      <YoutubeSection />
    </div>
  );
};

export default Home;
