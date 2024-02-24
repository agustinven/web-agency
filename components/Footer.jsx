import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const footer = () => {
  return (
    <div className="container mt-28 mb-4 md:flex flex-row justify-between">
      <div className="mt-2">
        <span className="text-xs">
          © 2024 Web Agency, todos los derechos reservados.
        </span>
      </div>
      <div className="flex flex-row items-end gap-x-3 text-center mt-2">
        <Instagram width={20} height={20} />
        <Facebook width={20} height={20} />
        <Linkedin width={20} height={20} />
        <Twitter widdth={20} height={20} />
      </div>
    </div>
  );
};

export default footer;
