import { HomePage } from "./pages/Home";
import { MaterialsPage } from "./pages/Materials";
import { ProyectsPage } from "./pages/Proyects";
import { ContactPage } from "./pages/Contact";
import { CompanyPage } from "./pages/Company";
import { SolutionsPage } from "./pages/Solutions";
import { GalleryPage } from "./pages/Gallery";

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    title: 'Materiales',
    path: '/materiales',
    exact: true,
    component: MaterialsPage
  },
  {
    title: 'Proyectos',
    path: '/proyectos',
    exact: true,
    component: ProyectsPage
  },
  {
    title: 'Contacto',
    path: '/contacto',
    exact: true,
    component: ContactPage
  },
  {
    title: 'Compañia',
    path: '/compañia',
    component: CompanyPage
  },
  {
    title: 'Soluciones',
    path: '/soluciones',
    component: SolutionsPage
  }, {
    title: 'Galería',
    path: '/galeria',
    component: GalleryPage

  }
]

export default routes