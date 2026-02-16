//Login Page
import MediaStory from '@/src/components/features/media-coverage/MediaStory';
import CoverageHighlights from '@/src/components/features/media-coverage/CoverageHighlights';
import PressMentions from '@/src/components/features/media-coverage/PressMentions';
import MediaResources from '@/src/components/features/media-coverage/MediaResources';
import Closing from '@/src/components/features/media-coverage/Closing';
import Awards from '@/src/components/features/media-coverage/Awards';
import MediaCoverage from '@/src/components/features/media-coverage/MediaCoverage';

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