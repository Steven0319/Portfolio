import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/Container";

const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl mb-3">Hello I&apos;m</h3>
        <h1 className="text-4xl font-bold mb-3">Steven👨‍💻</h1>
        <h2 className="text-2xl text-gray-400">Frontend Developer</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2" /> Contact Me
            </Link>

            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="./cv-steven.pdf"
              target="_blank"
            >
              <Paperclip className="mr-2" /> Download CV
            </Link>
          </div>
        </div>
        <Image
          src="/profile.png"
          alt="Profile pic"
          width={140}
          height={140}
          className="rounded-full mx-auto mt-6"
        />
      </div>
    </Container>
  );
};

export default Introduction;
