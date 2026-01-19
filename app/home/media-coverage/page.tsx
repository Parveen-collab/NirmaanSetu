//Login Page
import MediaStory from './mediaCoverageComponent/MediaStory';
import CoverageHighlights from './mediaCoverageComponent/CoverageHighlights';
import PressMentions from './mediaCoverageComponent/PressMentions';
import MediaResources from './mediaCoverageComponent/MediaResources';
import Closing from './mediaCoverageComponent/Closing';
import Awards from './mediaCoverageComponent/Awards';

export const metadata = {
  title: "Media & Coverage | NirmaanSetu",
  description:
    "Explore media coverage, press mentions, and public recognition of NirmaanSetu and its mission to empower India’s construction workforce.",
};

const MediaCoverage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className='bg-background text-foreground'>
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-primary mb-6">
          Media & Coverage
        </h1>

        {/* Intro */}
        <p className="text-muted leading-7 mb-8">
          NirmaanSetu has been gaining attention for its mission to organize and
          empower India’s unorganized construction workforce through technology.
          Our efforts to bridge the gap between skilled workers, contractors, and
          material suppliers continue to resonate across industry discussions.
        </p>

        {/* Media Story */}
        <MediaStory/>

        {/* Coverage Highlights */}
        <CoverageHighlights/>

        {/* Press Mentions */}
        <PressMentions/>

        {/* Awards */}
        <Awards/>

        {/* Media Resources */}
        <MediaResources/>

        {/* Closing */}
        <Closing/>
      </main>
    </div>
  )
}

export default MediaCoverage