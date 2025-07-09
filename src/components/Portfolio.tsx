import { dataPortfolio } from "@/data";
import Title from "./shared/Title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Recent Work 💼" />

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {dataPortfolio.map((data) => (
          <div key={data.id} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-center">{data.title}</h3>
            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex gap-4">
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={data.urlGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
