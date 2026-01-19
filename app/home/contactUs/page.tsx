//Contact Us Page
import ContactInfo from "./contactUsComponent/ContactInfo";
import EmbededMap from "./contactUsComponent/EmbededMap";
import GetInTouch from "./contactUsComponent/GetInTouch";

export const metadata = {
  title: "Contact Us | NirmaanSetu",
  description:
    "Get in touch with NirmaanSetu support team for queries, assistance, or feedback.",
};

const ContactUs = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className='bg-background text-foreground'>
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-primary mb-6">
          Contact Us
        </h1>

        {/* Contact Info */}
        <ContactInfo/>

        {/* Get In Touch */}
        <GetInTouch/>

        {/* Embedded Map */}
        <EmbededMap/>
      </main>
    </div>
  )
}

export default ContactUs