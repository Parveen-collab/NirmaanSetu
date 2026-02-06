import FAQ from "@/src/components/ui/faqComponents/FAQ";
export const metadata = {
  title: "FAQ | NirmaanSetu",
  description:
    "Get in touch with NirmaanSetu support team for queries, assistance, or feedback.",
};

export default function FAQPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-7xl px-4">
        <FAQ />
      </div>
    </main>
  )
}
