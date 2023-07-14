import "animate.css";
import { Hability } from "../components/Hability";
import { hookGetImages } from "../hooks/hookGetImages";

// Importa las configuaciones
export const About = () => {
  const { images } = hookGetImages("img-tecnologies");
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="mt-20 w-full flex items-center flex-col animate__animated animate__backInLeft">
          <span className="text-4xl font-bold text-center m-5">Sobre Mí</span>
          <hr className="w-4/5 border-t-1 border-gray-500 my-1  " />
          <span className="w-3/4 text-center font-bold ">
            José Alejandro, un joven de 22 años de edad, cursando la carrera de
            Ingeniería en Sistemas Computacionales en el Tecnológico de Comitán.
            Una de las cosas que le apasiona es programar y encontrar soluciones
            a los problemas en el desarrollo de software. Es capaz de adaptarse
            a equipos de trabajo y tiene habilidades autodidactas, siempre con
            ganas de aprender cosas nuevas y demostrar sus habilidades
          </span>
        </div>
        {/* Tecnologias */}
        <div className="mt-10 w-full flex items-center flex-col animate__animated animate__fadeIn">
          <span className="text-4xl font-bold text-center m-5">
            Tecnologías
          </span>
          <hr className="w-4/5 border-t-1 border-gray-500 my-1  " />

          <div className=" w-4/5  ">
            <div className="w-full flex items-center justify-center xl:justify-between p-5 flex-wrap animate__animated animate__fadeInBottomLeft">
              <Hability
                image={images === null ? <p>Cargando....</p> : images[0].url}
                name="Css 3"
              />
              <Hability
                image={images === null ? <p>Cargando....</p> : images[1].url}
                name="Dart"
              />
              <Hability
                image={images === null ? <p>Cargando....</p> : images[2].url}
                name="Express"
              />
              <Hability
                image={images === null ? <p>Cargando....</p> : images[3].url}
                name="Flutter"
              />
              <Hability
                image={images === null ? <p>Cargando....</p> : images[4].url}
                name="Git"
              />{" "}
              <Hability
                image={images === null ? <p>Cargando....</p> : images[14].url}
                name="Tailwind"
              />
            </div>
            <div className="w-full flex items-center justify-center xl:justify-between md:justify-between p-5 flex-wrap animate__animated animate__fadeInBottomRight ">
              <Hability
                image={images === null ? <p>Cargando....</p> : images[5].url}
                name="Html 5"
              />
              <Hability
                image={images === null ? <p>Cargando....</p> : images[6].url}
                name="Javascript"
              />
              <Hability
                image={images === null ? <p>Cargando....</p> : images[8].url}
                name="Node js"
              />
              <Hability
                image={images === null ? <p>Cargando....</p> : images[9].url}
                name="Npm"
              />

              <Hability
                image={images === null ? <p>Cargando....</p> : images[11].url}
                name="Python"
              />
              <Hability
                image={images === null ? <p>Cargando....</p> : images[12].url}
                name="React"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
