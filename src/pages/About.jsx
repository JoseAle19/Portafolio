import "animate.css";
import { Hability } from "../components/Hability";
import { hookGetImages } from "../hooks/hookGetImages";

// Importa las configuaciones
export const About = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="mt-20 w-full flex items-center flex-col animate__animated animate__backInLeft">
          <span className="text-4xl font-bold text-center m-5">Sobre Mí</span>
          <hr className="w-4/5 border-t-1 border-gray-500 my-1  " />
          <span className="w-3/4  font-bold ">
            José Alejandro, un joven de 22 años de edad, cursando la carrera de
            Ingeniería en Sistemas Computacionales en el Tecnológico de Comitán.
            Una de las cosas que le apasiona es programar y encontrar soluciones
            a los problemas en el desarrollo de software. Es capaz de adaptarse
            a equipos de trabajo y tiene habilidades autodidactas, siempre con
            ganas de aprender cosas nuevas y demostrar sus habilidades
          </span>
        </div>
        {/* Tecnologias */}
        <div className="my-10 w-full flex items-center flex-col animate__animated animate__fadeIn">
          <span className="text-4xl font-bold text-center m-5">
            Tecnologías
          </span>
          <hr className="w-4/5 border-t-1 border-gray-500 my-1  " />

          <div className="w-4/5 ">
            <div
              className="w-full flex items-center justify-center 
              md:flex md:flex-wrap md:justify-around
             xl:justify-between  flex-wrap animate__animated animate__fadeInBottomLeft"
            >
              <Hability image={0} name={"Css 3"} />
              <Hability image={1} name={"Dart"} />
              <Hability image={2} name="Express" />
              <Hability image={3} name="Flutter" />
              <Hability image={4} name="Git" />{" "}
              <Hability image={14} name="Tailwind" />
            </div>
            <div
              className="w-full flex items-center justify-center 
             md:flex md:flex-wrap md:justify-around
            xl:justify-between  flex-wrap animate__animated animate__fadeInBottomLeft"
            >
              <Hability image={5} name="Html 5" />
              <Hability image={6} name="Javascript" />
              <Hability image={8} name="Node js" />
              <Hability image={9} name="Npm" />
              <Hability image={11} name="Python" />
              <Hability image={12} name="React" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
