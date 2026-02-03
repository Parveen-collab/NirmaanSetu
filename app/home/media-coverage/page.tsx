//Login Page
import MediaStory from './mediaCoverageComponent/MediaStory';
import CoverageHighlights from './mediaCoverageComponent/CoverageHighlights';
import PressMentions from './mediaCoverageComponent/PressMentions';
import MediaResources from './mediaCoverageComponent/MediaResources';
import Closing from './mediaCoverageComponent/Closing';
import Awards from './mediaCoverageComponent/Awards';
import MediaCoverage from './mediaCoverageComponent/MediaCoverage';

export const metadata = {
  title: "Media & Coverage | NirmaanSetu",
  description:
    "Explore media coverage, press mentions, and public recognition of NirmaanSetu and its mission to empower India’s construction workforce.",
};

const Page = () => {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-7xl px-4">
        <MediaCoverage/>
        <MediaStory/>
        <CoverageHighlights/>
        <PressMentions/>
        <Awards/>
        <MediaResources/>
        <Closing/>
      </div>
    </main>
  )
}

export default Page