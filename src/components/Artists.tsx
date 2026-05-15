// src/components/Artists.tsx
import { motion } from 'framer-motion';
import TiltedCard from './ui/ReactBits/TitledCard';
import { useNavigate } from 'react-router-dom';

// Use URL references instead of static imports to avoid bundling ~15MB of GIFs
const Gunna = new URL('../../src/Images/artist/gunna1.gif', import.meta.url).href;
const Larry = new URL('../../src/Images/artist/june.gif', import.meta.url).href;
const KeyGlock = new URL('../../src/Images/artist/key.gif', import.meta.url).href;

const Artists = ({ size }: { size: string }) => {
  const navigate = useNavigate();
  const handleCardClick = (term: string) => {
    navigate(`/beats?search=${encodeURIComponent(term)}`);
  };
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        viewport={{ once: true }}
        className="flex flex-col gap-12 px-4"
      >
        <div>
          <h2 className={`font-black ${size}`}>Troo! Type Beat Lanes</h2>
          <p className="text-sm text-red-50/55 mt-1">
            Tap a lane to jump into beats built for that artist pocket.
          </p>
        </div>
        <div className="flex gap-24 flex-wrap justify-center z-10">
          <div onClick={() => handleCardClick('Key Glock')}>
            <TiltedCard
              imageSrc={KeyGlock}
              altText="Key Glock Type Beats"
              captionText="Key Glock Type Beats"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="bg-[#120305]/75 border border-red-200/15 m-6 p-3 rounded-lg font-bold">
                  Key Glock Type Beats
                </p>
              }
            />
          </div>
          <div onClick={() => handleCardClick('Larry June')}>
            <TiltedCard
              imageSrc={Larry}
              altText="Larry June Type Beats"
              captionText="Larry June Type Beats"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="bg-[#120305]/75 border border-red-200/15 m-6 p-3 rounded-lg font-bold">
                  Larry June Type Beats
                </p>
              }
            />
          </div>

          <div onClick={() => handleCardClick('Gunna')}>
            <TiltedCard
              imageSrc={Gunna}
              altText="Gunna Type Beats"
              captionText="Gunna Type Beats"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="bg-[#120305]/75 border border-red-200/15 m-6 p-3 rounded-lg font-bold">
                  Gunna Type Beats
                </p>
              }
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Artists;
