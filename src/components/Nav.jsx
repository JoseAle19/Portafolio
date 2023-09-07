import { LinkNav } from "./LinkNav";
import {AboutSvg, CertificateSvg, ContactSvg, HomeSvg, ProjectSvg  } from "../svgs/svgs";
// React Router
export const Nav = ({ setIsOpen }) => {
  return (
    <>
      <div className="flex items-center  flex-col w-full h-full justify-between">
        <div className="  flex flex-col h-full justify-between w-full">
          <LinkNav
            onClick={setIsOpen}
            ulr={"/"}
            svg={<HomeSvg/>}
            description={"Inicio"}
          />
          <LinkNav
            onClick={setIsOpen}
            ulr={"/about"}
            svg={<AboutSvg/>}
            description={"Sobre mí"}
          />
          <LinkNav
            onClick={setIsOpen}
            ulr={"/projects"}
            svg={<ProjectSvg/>}
            description={"Proyectos"}
          />
          <LinkNav
            onClick={setIsOpen}
            ulr={"/certificates"}
            svg={<CertificateSvg/>}
            description={"Certificados"}
          />
          {/* <LinkNav
            onClick={setIsOpen}
            ulr={"/contact"}
            svg={<ContactSvg/>}
            description={"Contacto"}
          /> */}
        </div>
      </div>
    </>
  );
};
