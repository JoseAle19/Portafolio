import { hookGetImages } from "../hooks/hookGetImages";
import "animate.css";
export const PlaceHolder = ({indexImage, description = 'nada'}) => {
  const { images, isLoading } = hookGetImages("imgs");

  return (
    <>
      <div className="flex flex-col items-center justify-between scale hover:scale-125 transition duration-300  m-2 ">
        {isLoading ? (
          <div className="w-48   h-64 flex justify-center items-center">
            <p className="animate-spin rounded-full w-10 h-10 border  border-y-black"></p>
          </div>
        ) : (
          <img
            className=" w-32 p-2 object-contain animate__animated animate__zoomIn"
            src={images[indexImage].url}
            alt={` ${description}`}
          />
        )}
        <p className="text-center font-bold">{name}</p>
      </div>
    </>
  );
};
