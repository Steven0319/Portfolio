import Title from "@/components/shared/Title";
import { dataExperience } from "@/data";
import { BadgeCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Experience = () => {
  return (
    <section id="experience" className="p-6 md:px-12 md:py-44">
      {/* Título centrado */}
      <div className="text-center mb-10">
        <Title title="Experience" subtitle="Skills I have" />
      </div>

      {/* Contenedor de tarjetas centrado */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl p-6 rounded-xl border border-gray-600">
          <h3 className="text-center text-xl mb-6">
            Frontend Development 💄
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataExperience[0].experience.map((item) => (
              <div key={item.name}>
                <p className="flex items-center gap-2 mb-1">
                  <BadgeCheck className="text-primary" /> {item.name}
                </p>
                <p className="text-gray-400 text-sm mb-2">{item.subtitle}</p>
                <Progress value={item.value} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
