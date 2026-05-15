import { FaYoutube } from 'react-icons/fa';
import { TrooSigil, TrooWordmark } from './TrooBrand';

const YoutubeSection = () => {
  return (
    <section className="px-6 text-white">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-red-200/15 bg-[#120305]/78 p-8 shadow-[0_26px_90px_rgba(0,0,0,0.32)] sm:p-12">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex items-center gap-4">
            <FaYoutube className="text-red-600 text-6xl drop-shadow-[0_0_20px_rgba(229,9,24,0.5)]" />
            <TrooSigil className="!w-16 !min-w-16" />
          </div>
          <h2 className="flex flex-wrap items-center justify-center gap-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Subscribe to <TrooWordmark className="text-5xl" compact />
          </h2>
          <div className="text-lg font-medium text-red-50/76">
            Join <span className="font-semibold text-white">115,000+</span> subscribers
          </div>
          <p className="max-w-xl text-lg text-red-50/82">
            Catch new beat drops, visualizers, studio clips, and behind-the-scenes sessions straight from the Troo! channel.
          </p>
          <a
            href="https://www.youtube.com/@Troo?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md !bg-red-700 px-6 py-3 font-semibold !text-white !transition-all !duration-500 hover:!bg-red-500 hover:!text-white"
          >
            <FaYoutube />
            Visit & Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
