import { Project } from "../components/Project";
import { hookGetImages } from "../hooks/hookGetImages";
export const Projects = () => {
  const { images } = hookGetImages("imgs");
  return (
    <>
      <div className="w-full  bg-gray-200 flex flex-col items-center ">
        <div className="mt-20 w-full flex items-center flex-col animate__animated animate__fadeIn">
          <span className="text-4xl font-bold text-center m-5">Proyectos</span>
          <hr className="w-4/5 border-t-1 border-gray-500 my-2" />
          <span className=" w-3/4 text-center">
            Estos son algunos de los proyectos que he desarrollado durante mi
            aprendizaje, utilizando herramientas y tecnologías nuevas para el
            desarrollo. Me emociona compartir mis conocimientos contigo y espero
            que puedas evaluar mis habilidades y conocimientos.
          </span>
        </div>
        <div className="flex flex-wrap justify-center  ">
          <Project
            img={images === null ? <p>Cargando</p> : images[2].url}
            imgTitle={"Tienda de JoseStore"}
            urlDemoProject={"https://appcart.fly.dev/"}
            urlCodeProject={
              "https://github.com/JoseAle19/vanilla-shopping-cart-.git"
            }
          />

          <Project
            img={images === null ? <p>Cargando</p> : images[4].url}
            imgTitle={"Aplicacion de examen"}
            urlDemoProject={"https://bright-torte-0b0c68.netlify.app/"}
            urlCodeProject={"https://github.com/JoseAle19/quizapp.git"}
          />
          <Project
            img={images === null ? <p>Cargando</p> : images[5].url}
            imgTitle={"Rick and Morty"}
            urlDemoProject={"https://sprightly-treacle-5362c0.netlify.app/"}
            urlCodeProject={
              "https://github.com/JoseAle19/todo-rickAndMorty.git"
            }
          />
          <Project
            img={images === null ? <p>Cargando</p> : images[1].url}
            imgTitle={"Coffe app"}
            urlDemoProject={"https://devjoses.netlify.app/"}
          />
          <Project
            img={images === null ? <p>Cargando</p> : images[3].url}
            imgTitle={"Generador de imagenes (OpenAI)"}
            urlDemoProject={
              "https://generador-de-imagenes-h622ik3r4-joseale19.vercel.app/?vercelToolbarCode=vqvuRycepbuVty7"
            }
            urlCodeProject={
              "https://github.com/JoseAle19/generador-de-imagenes.git"
            }
          />
          <Project
            img={images === null ? <p>Cargando</p> : images[0].url}
            imgTitle={"Mini ecommerce de cafes"}
            urlDemoProject={"https://carlos170702.github.io/coffee/#/login"}
            urlCodeProject={"https://github.com/JoseAle19/RappiCoffee.git"}
          />

          {/* <Project
            img={Generator}
            imgTit
            imgTitle={"Generador de imagenes (OpenAI)"}
            urlDemoProject={"https://devjoses.netlify.app/"}
          />
          <Project
            img={Generator}
            imgTit
            imgTitle={"Generador de imagenes (OpenAI)"}
            urlDemoProject={"https://devjoses.netlify.app/"}
          /> */}
        </div>
        <div>Aplicaciones flutter</div>
      </div>
    </>
  );
};
