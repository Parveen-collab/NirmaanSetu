import React from 'react'
import Breadcrumbs from "@/src/components/ui/Breadcrumbs";

export const metadata = {
  title: "Media & Coverage | NirmaanSetu",
  description:
    "Explore media coverage, press mentions, and public recognition of NirmaanSetu and its mission to empower India’s construction workforce.",
};

const MediaCoverage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-5xl mx-auto animate-fade">
      
      {/* Breadcrumbs */}
      <Breadcrumbs />

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
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Our Story in the Media
        </h2>
        <p className="text-muted leading-7">
          NirmaanSetu is building a digital ecosystem that simplifies hiring,
          job discovery, and material sourcing in the construction sector.
          By focusing on transparency, accessibility, and local connectivity,
          the platform aims to deliver real-world impact at scale.
        </p>
      </section>

      {/* Coverage Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Coverage Highlights
        </h2>

        <ul className="space-y-3 text-muted leading-7">
          <li>• Digitization of the unorganized construction sector</li>
          <li>• Employment generation for skilled and semi-skilled workers</li>
          <li>• Simplified contractor hiring and workforce management</li>
          <li>• Local construction material marketplace enablement</li>
          <li>• Technology-driven solutions for real labour challenges</li>
        </ul>
      </section>

      {/* Press Mentions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Press Mentions
        </h2>
        <p className="text-muted leading-7">
          We are actively engaging with media houses, industry publications,
          and digital platforms. Press articles, interviews, and feature stories
          will be published here as they become available.
        </p>

        <p className="text-sm text-muted mt-2">
          (Updates coming soon)
        </p>
      </section>

      {/* Awards */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Awards & Recognition
        </h2>
        <p className="text-muted leading-7">
          As NirmaanSetu continues to grow, any awards, recognitions, or
          acknowledgments from institutions, industry bodies, or innovation
          forums will be featured on this page.
        </p>

        <p className="text-sm text-muted mt-2">
          (To be announced)
        </p>
      </section>

      {/* Media Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Media Resources
        </h2>

        <ul className="space-y-2 text-muted leading-7">
          <li><strong>Company:</strong> NirmaanSetu</li>
          <li><strong>Sector:</strong> Construction, Labour Marketplace, Technology</li>
          <li><strong>Focus:</strong> Workforce empowerment, hiring, materials</li>
          <li><strong>Engagements:</strong> Interviews, collaborations, walkthroughs</li>
        </ul>

        <p className="mt-4 text-muted">
          Media inquiries:{" "}
          <span className="font-semibold text-primary">
            media@nirmaansetu.in
          </span>
        </p>
      </section>

      {/* Closing */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Looking Ahead
        </h2>
        <p className="text-muted leading-7">
          NirmaanSetu is more than a platform — it is a step toward a more
          transparent, efficient, and inclusive construction ecosystem.
          We look forward to sharing our journey as we continue to grow
          and create impact across India.
        </p>
      </section>
    </div>
  )
}

export default MediaCoverage