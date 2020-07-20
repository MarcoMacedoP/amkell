import { HomePage } from "./pages/Home";
import { MaterialsPage } from "./pages/Materials";
import { ProyectsPage } from "./pages/Proyects";
import { ContactPage } from "./pages/Contact";
import { CompanyPage } from "./pages/Company";
import { SolutionsPage } from "./pages/Solutions";
import { GalleryPage } from "./pages/Gallery";
import { Project } from "./pages/Project";
import { Solution } from "./pages/Solution";
import { Material } from "./pages/Material";

export interface Route {
  title: string;
  path: string;
  exact?: boolean;
  component: React.FC<any>;
}

const routes: Route[] = [
  {
    title: "Home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    title: "Materiales",
    path: "/materiales",
    exact: true,
    component: MaterialsPage,
  },
  {
    title: "Material",
    path: "/materiales/:slug",
    exact: true,
    component: Material,
  },
  {
    title: "Proyectos",
    path: "/proyectos",
    exact: true,
    component: ProyectsPage,
  },
  {
    title: "Proyecto",
    path: "/proyectos/:slug",
    exact: true,
    component: Project,
  },
  {
    title: "Contacto",
    path: "/contacto",
    exact: true,
    component: ContactPage,
  },
  {
    title: "Compañia",
    path: "/compañia",
    component: CompanyPage,
  },
  {
    title: "Soluciones",
    path: "/soluciones",
    exact: true,
    component: SolutionsPage,
  },
  {
    title: "Solucion",
    path: "/soluciones/:slug",
    exact: true,
    component: Solution,
  },

  {
    title: "Galería",
    path: "/galeria",
    component: GalleryPage,
  },
];

export default routes;
