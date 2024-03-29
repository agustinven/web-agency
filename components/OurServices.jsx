"use client";
import { Code2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

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
      <div className="mt-28 container mx-auto flex flex-col gap-x-12 lg:gap-x-[100px] xl:gap-x-[350px] justify-between md:flex-row ">
        {/* Title our services */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
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
        </motion.div>
        {/* Icons services */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" flex gap-x-4"
        >
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
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="container"
      >
        <Accordion
          type="single"
          collapsible
          className="md:w-3/4 mt-12 xl:mt-14 services__p"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Desarrollo Web</AccordionTrigger>
            <AccordionContent>
              Nuestro equipo de desarrollo web crea sitios innovadores que
              destacan por su funcionalidad y diseño atractivo. Utilizamos
              tecnologías de vanguardia para garantizar un rendimiento óptimo y
              una experiencia de usuario excepcional.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Diseño Adaptativo</AccordionTrigger>
            <AccordionContent>
              Enfocados en la accesibilidad, creamos diseños adaptables que se
              ajustan perfectamente a cualquier dispositivo, brindando una
              experiencia consistente y atractiva en todas las pantallas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Marketing Digital</AccordionTrigger>
            <AccordionContent>
              A través de estrategias personalizadas, potenciamos la visibilidad
              de tu marca en línea, utilizando diversas herramientas como SEO,
              publicidad en redes sociales y contenido relevante para alcanzar a
              tu audiencia objetivo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>E-commerce</AccordionTrigger>
            <AccordionContent>
              Construimos plataformas de comercio electrónico robustas y seguras
              que optimizan la experiencia de compra del usuario, aumentando las
              conversiones y generando un crecimiento constante para tu negocio
              en línea.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
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
