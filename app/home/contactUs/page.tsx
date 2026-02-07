//Contact Us Page
import ContactInfo from "@/src/components/features/contactUsComponent/ContactInfo";
import EmbededMap from "@/src/components/features/contactUsComponent/EmbededMap";
import GetInTouch from "@/src/components/features/contactUsComponent/GetInTouch";

export const metadata = {
  title: "Contact Us | NirmaanSetu",
  description:
    "Get in touch with NirmaanSetu support team for queries, assistance, or feedback.",
};

const ContactUs = () => {
  return (
    <main className='bg-background text-foreground'>
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Page Header */}
        <section className="min-h-[20vh] flex flex-col items-center justify-center text-center px-6 animate-fade">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h1>
        </section>

        <ContactInfo />
        <GetInTouch />
        <EmbededMap />
      </div>
    </main>
  )
}

export default ContactUs