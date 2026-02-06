//Login Page
import MediaStory from '../../../src/components/ui/mediaCoverageComponent/MediaStory';
import CoverageHighlights from '../../../src/components/ui/mediaCoverageComponent/CoverageHighlights';
import PressMentions from '../../../src/components/ui/mediaCoverageComponent/PressMentions';
import MediaResources from '../../../src/components/ui/mediaCoverageComponent/MediaResources';
import Closing from '../../../src/components/ui/mediaCoverageComponent/Closing';
import Awards from '../../../src/components/ui/mediaCoverageComponent/Awards';
import MediaCoverage from '../../../src/components/ui/mediaCoverageComponent/MediaCoverage';

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