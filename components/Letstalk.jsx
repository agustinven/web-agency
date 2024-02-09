// Import Button
import { Button } from "./ui/button";

const Letstalk = () => {
  return (
    <div className="container mt-12">
      <div className="bg-yellow  px-2 md:px-24 xl:px-40 rounded-b-[40px] py-8 flex flex-col gap-y-8 text-center">
        <h2 className="text-[24px] md:text-[36px] xl:text-[48px] text-black font-extrabold">
          COMENZEMOS A DIALOGAR SOBRE TUS IDEAS
        </h2>
        <div>
          <Button variant="accent" size="md" className="">
            Hablemos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Letstalk;
