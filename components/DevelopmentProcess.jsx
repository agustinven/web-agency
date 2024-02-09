import Image from "next/image";

const GridItem = ({ src, alt, text }) => (
  <div className="relative">
    <Image
      src={src}
      className="w-full h-[250px] object-cover opacity-60"
      width={300}
      height={300}
      alt={alt}
      unoptimized
    />
    <div className="absolute top-0 left-0 p-4 whitespace-pre-line w-[300px]">
      <p className="text-white text-[24px] font-bold" style={{ textWrap: 'balance' }}>
        {text}
      </p>
    </div>
  </div>
);



const DevelopmentProcess = () => {
  return (
    <section className="mt-12">
      <div className="container">
        {/* Title our services */}
        <div>
          <div className="flex flex-col gap-y-4">
            <h2 className="h2">
              NUESTROS <br />
              SERVICIOS
            </h2>
            <p className="max-w-[600px] text-gray">
              Innovación que impulsa el éxito. Descubre nuestros servicios
              diseñados para transformar tu visión en realidad.
            </p>
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <GridItem
            src={"/process/planification.jpg"}
            alt=""
            text="CONSULTA Y PLANIFICACIÓN"
          />
          <GridItem
            src={"/process/design.jpg"}
            alt=""
            text="DISEÑO Y PROTOTIPOS"
          />
          <GridItem
            src={"/process/desarrollo.jpg"}
            alt=""
            text="DESARROLLO Y CODIFICACIÓN"
          />
          <GridItem
            src={"/process/test.jpg"}
            alt=""
            text="PRUEBAS Y OPTIMIZACIONES"
          />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
