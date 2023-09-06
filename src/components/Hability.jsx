import { hookGetImages } from "../hooks/hookGetImages";
import "animate.css";
export const Hability = ({ image, name }) => {
  const { images, isLoading } = hookGetImages("img-tecnologies");

  return (
    <>
      <div className="flex flex-col items-center justify-between scale hover:scale-125 transition duration-300  m-2 ">
        {isLoading ? (
          <div className="w-32 h-32 flex justify-center items-center">
            <p className="animate-spin rounded-full w-10 h-10 border  border-y-black"></p>
          </div>
        ) : (
          <img
            loading="lazy"
            className=" w-32 p-2 object-contain animate__animated animate__zoomIn"
            src={images[image].url}
            alt={`Logo ${name}`}
          />
        )}
        <p className="text-center font-bold">{name}</p>
      </div>
    </>
  );
};
