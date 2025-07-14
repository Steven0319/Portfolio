import { Phone } from "lucide-react";
import Image from "next/image";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="About Me" subtitle="Get to Know Me" />

      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          {/* CAROUSEL */}
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="Slider image"
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>

          <p className="my-8">
            I am a passionate developer who finds deep inspiration in lines of
            code and challenging algorithms. When I am not coding, I enjoy being
            outdoors and practicing sports, believing in the importance of
            keeping both mind and body in balance. I am also an avid reader,
            constantly seeking knowledge and personal growth through books. On
            social media, I love sharing my passion for programming by creating
            inspiring and educational content to connect with fellow tech
            enthusiasts.
          </p>

          <a href="tel:+50687933283">
            <Button>
              <Phone size={20} className="mr-2" />
              Let’s talk
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;