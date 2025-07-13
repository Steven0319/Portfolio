import { dataContact } from "@/data";
import Title from "./shared/Title";
import Link from "next/link";
import ContactForm from "./Contact-form";

const Contact = () => {
  return (
    <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="contact">
      <Title title="Contact Me" subtitle="Get in touch with me 👋" />

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
        <div>
          {dataContact.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4 text-center"
            >
              {data.icon}
              <p className="font-semibold">{data.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{data.subtitle}</p>
              <Link
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                {data.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;