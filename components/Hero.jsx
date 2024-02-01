import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-fit bg-red">
      <div className="max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] px-[24px] mx-auto flex flex-col mt-12 mb-12">
        <div className="mb-4">
          {/* title */}
          <h1 className="text-[54px]  text-yellow leading-[70px] break-all">
            DIGITALIZA <br />
            TUS IDEAS
          </h1>
        </div>
        <div>
          <Image
            src={"/hero/dark-walk.jpg"}
            className="hidden"
            width={200}
            height={36}
            alt=""
          />
          <p className="text-white max-w-[370px]">
            Explora el poder de la innovación. Transformamos ideas en
            experiencias excepcionales. Tu futuro comienza aquí, con nosotros.
          </p>
        </div>
        <Button variant="accent">Contactanos</Button>
      </div>
    </section>
  );
};

export default Hero;
