import "animate.css";
import { Hability } from "../components/Hability";
// Importa las configuaciones
export const About = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="mt-20 w-full flex items-center flex-col animate__animated animate__backInLeft">
          <span className="text-4xl font-bold text-center m-5">Sobre Mí</span>
          <hr className="w-4/5 border-t-1 border-gray-500 my-1  " />
          <span className="w-3/4  font-bold ">
            ¡Hola! Soy José Alejandro, tengo 22 años y actualmente estoy
            estudiando Ingeniería en Sistemas Computacionales en el Tecnológico
            de Comitán. Una de mis mayores pasiones es la programación, disfruto
            enfrentando desafíos y resolviendo problemas en el desarrollo de
            software. Me considero adaptable en equipos de trabajo y poseo
            habilidades autodidactas. Siempre estoy entusiasmado por aprender
            nuevas cosas y ansioso por demostrar mis habilidades en el campo de
            la informática.
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
              md:grid md:grid-cols-3 md:justify-around
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
              md:grid md:grid-cols-3 md:justify-around
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
