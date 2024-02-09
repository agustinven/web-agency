import React from "react";
import { Code2 } from "lucide-react";

const OurServices = () => {
  // Array de datos que representan los servicios
  const services = [
    { id: 1, icon: <Code2 />, text: "SEO" },
    { id: 2, icon: <Code2 />, text: "Desarrollo Web" },
    { id: 3, icon: <Code2 />, text: "Marketing Digital" },
    { id: 4, icon: <Code2 />, text: "Diseño UX/UI" },
  ];

  // Dividir el array de servicios en dos grupos
  const servicesTop = services.slice(0, 2);
  const servicesBottom = services.slice(2, 4);

  return (
    <div>
      <div className="mt-12 container mx-auto flex flex-col gap-x-12 lg:gap-x-[100px] xl:gap-x-[350px] justify-between md:flex-row ">
        {/* Title our services */}
        <div className="">
          <div className="flex flex-col gap-y-4">
            <h2 className="h2">
              NUESTROS <br />
              SERVICIOS
            </h2>
            <p className="text-gray">
              Innovación que impulsa el éxito. Descubre nuestros servicios
              diseñados para transformar tu visión en realidad.
            </p>
          </div>
        </div>
        {/* Icons services */}
        <div className="flex gap-x-4">
          <div className="hidden md:flex flex-col items-end justify-end gap-y-4 text-white">
            {servicesTop.map((service) => (
              <ServiceIcon
                key={service.id}
                icon={service.icon}
                text={service.text}
              />
            ))}
          </div>
          <div className="hidden md:flex flex-col items-end justify-end gap-y-4 text-white">
            {servicesBottom.map((service) => (
              <ServiceIcon
                key={service.id}
                icon={service.icon}
                text={service.text}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Services */}
      <div class="container mt-12 xl:mt-14 flex flex-col services__p">
        <div class="border-t-[1px] border-gray  py-4 md:py-6">
          <p>Desarrollo Web</p>
        </div>
        <div class="border-t-[1px] border-gray  py-4 md:py-6">
          <p>Diseño Adaptativo</p>
        </div>
        <div class="border-t-[1px] border-gray  py-4 md:py-6">
          <p>Marketing Digital</p>
        </div>
        <div class="border-t-[1px] border-gray border-b-2 py-4 md:py-6">
          <p>E-commerce</p>
        </div>
      </div>
    </div>
  );
};

const ServiceIcon = ({ icon, text }) => (
  <div className="flex items-center border-2 rounded-full px-6 py-1 gap-x-3 truncate">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);

export default OurServices;
