import { Project } from "../components/Project";
import { projects } from "../mocks/projects.json";
export const Projects = () => {
  return (
    <>
      <div className="w-full   flex flex-col items-center ">
        <div className="mt-20 w-full  flex items-center flex-col animate__animated animate__fadeIn">
          <span className="text-4xl font-bold text-center m-5">Proyectos</span>
          <hr className="w-4/5 border-t-1 border-gray-500 my-2" />
          <span className=" w-3/4 font-bold">
            Estos son algunos de los proyectos que he desarrollado durante mi
            aprendizaje, utilizando herramientas y tecnologías nuevas para el
            desarrollo. Me emociona compartir mis conocimientos contigo y espero
            que puedas evaluar mis habilidades y conocimientos.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  ">
          {projects.map((project) => {
            return (
              <Project
                key={project.img}
                img={project.img}
                imgTitle={project.imgTitle}
                urlDemoProject={project.urlDemoProject}
                urlCodeProject={project.urlCodeProject}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
