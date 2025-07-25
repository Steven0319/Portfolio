import { dataServices } from "@/data";
import Title from "./shared/Title";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
      <Title title="Services" subtitle="What I Offer" />

      <div className="flex justify-center mt-10">
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
          {dataServices.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-fit"
            >
              <h4 className="mb-4 text-xl flex gap-2 items-center">
                {service.icon}
                {service.title}
              </h4>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 mb-3 items-center">
                    <Check size={20} />
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
