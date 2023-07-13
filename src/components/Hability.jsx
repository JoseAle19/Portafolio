export const Hability = ({ image, name}) => {
  return (
    <>
      <div className='flex  flex-col items-center justify-between scale hover:scale-125 transition duration-300  m-2 ' >
        <img className=" w-32 p-2 object-contain" src={image} alt={`Logo ${name}`} />
        <p className='text-center font-bold' >{name}</p>
      </div>
    </>
  );
};
