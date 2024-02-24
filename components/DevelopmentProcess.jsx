"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";
import Image from "next/image";

const GridItem = ({ src, alt, title, text }) => (
  <motion.div
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.1 }}
    className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
  >
    <Image
      src={src}
      className="w-full h-[300px] lg:h-[340px] xl:h-[360px]  object-cover opacity-60 transition-transform duration-500 group-hover:scale-125"
      width={300}
      height={300}
      alt={alt}
      unoptimized
    />
    <div className="absolute top-0 left-0 p-4 whitespace-pre-line w-[300px]">
      <h3
        className="text-white text-[24px] font-bold"
        style={{ textWrap: "balance" }}
      >
        {title}
      </h3>
    </div>
    <div className="absolute top-24 left-0 flex translate-y-[60%] flex-col items-center justify-center px-4 transition-all duration-500 group-hover:translate-y-0">
      <p className="mb-3 xl:text-xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {text}
      </p>
    </div>
  </motion.div>
);

const DevelopmentProcess = () => {
  return (
    <section className="mt-28">
      <div className="container">
        {/* Title our services */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="flex flex-col gap-y-4">
            <h2 className="h2">
              PROCESO DE <br />
              DESARROLLO
            </h2>
            <p className="max-w-[600px] text-gray">
              Innovación que impulsa el éxito. Descubre nuestros servicios
              diseñados para transformar tu visión en realidad.
            </p>
          </div>
        </motion.div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <GridItem
            src={"/process/planification.webp"}
            alt=""
            title="CONSULTA Y PLANIFICACIÓN"
            text="En esta etapa inicial, nos sumergimos en tu visión y objetivos. Realizamos una consulta exhaustiva para comprender tus necesidades específicas y planificar estratégicamente cada paso del proceso de desarrollo digital. "
          />
          <GridItem
            src={"/process/design.webp"}
            alt=""
            title="DISEÑO Y PROTOTIPOS"
            text="Con una comprensión clara de tus requisitos, nuestro equipo de diseño da vida a tu visión. Desde la creación de wireframes hasta el diseño visual, cada detalle se cuida meticulosamente para ofrecerte un producto final atractivo y funcional. "
          />
          <GridItem
            src={"/process/desarrollo.webp"}
            alt=""
            title="DESARROLLO Y CODIFICACIÓN"
            text="Nuestros desarrolladores convierten diseños en una solución digital robusta y escalable, utilizando tecnologías de punta y codificación precisa para un rendimiento óptimo y una experiencia de usuario excepcional."
          />
          <GridItem
            src={"/process/test.webp"}
            alt=""
            title="PRUEBAS Y OPTIMIZACIONES"
            text="Antes del lanzamiento, sometemos tu proyecto a rigurosas pruebas. Identificamos y corregimos cualquier error potencial, garantizando un funcionamiento sin problemas en una variedad de dispositivos y navegadores."
          />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
