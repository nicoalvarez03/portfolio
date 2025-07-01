import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJsonwebtokens } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaAngular } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import type { IconType } from "react-icons";

interface ProjectsDataProps {
    id: number;
    title: string;
    description: string;
    images: {
        src: string;
        alt: string;
    }[];
    tecnologies: {
        title?: string; // opcional, si se quiere mostrar el nombre de la tecnología
        icon: IconType; // Icono de la tecnología
    }[],
    repository?: string; // URL del repositorio del proyecto
}

interface SkillsDataProps {
    title: string;
    svg: string;
}

// Exportar los datos de proyectos y habilidades
export const projectsData: ProjectsDataProps[] = [
    {
        id: 1,
        title: "AirNoBnb",
        description: "Una plataforma de reservas de alojamientos similar a Airbnb, donde los usuarios pueden registrarse e iniciar sesion. Crear, modificar o eliminar alojamientos, también crear o eliminar reservas. Se hizo uso de JWT para la autenticación y autorización de usuarios. Los alojamientos se almacenan en una base de datos MongoDB y las imágenes se suben a Cloudinary para su almacenamiento y gestión. También se implemento componentes externos como react-toast, keen-slider, MUI-datepicker, entre otros. El proyecto fue desarrollado con React y Tailwind CSS en el frontend, y Node.js, Express y MongoDB en el backend.",
        images: [
            {
                src: "images/AirNoBnb/index.webp",
                alt: "AirNoBnb - Imagen principal"
            },
            {
                src: "images/AirNoBnb/login.webp",
                alt: "AirNoBnb - Login"
            },
            {
                src: "images/AirNoBnb/registro.webp",
                alt: "AirNoBnb - Registro"
            },
            {
                src: "images/AirNoBnb/perfil.webp",
                alt: "AirNoBnb - Perfil"
            },
            {
                src: "images/AirNoBnb/misReservas.webp",
                alt: "AirNoBnb - Mis Reservas"
            },
            {
                src: "images/AirNoBnb/misAlojamientos.webp",
                alt: "AirNoBnb - Mis Alojamientos"
            },
            {
                src: "images/AirNoBnb/nuevo1.webp",
                alt: "AirNoBnb - Nuevo Alojamiento"
            },
            {
                src: "images/AirNoBnb/nuevo2.webp",
                alt: "AirNoBnb - Nuevo Alojamiento 2"
            },
            {
                src: "images/AirNoBnb/edit1.webp",
                alt: "AirNoBnb - Editar Alojamiento"
            },
            {
                src: "images/AirNoBnb/edit2.webp",
                alt: "AirNoBnb - Editar Alojamiento 2"
            },
            {
                src: "images/AirNoBnb/eliminarAlojamiento.webp",
                alt: "AirNoBnb - Eliminar Alojamiento"
            },
            {
                src: "images/AirNoBnb/detalle1.webp",
                alt: "AirNoBnb - Detalle Alojamiento 1"
            },
            {
                src: "images/AirNoBnb/detalle2.webp",
                alt: "AirNoBnb - Detalle Alojamiento 2"
            },
            {
                src: "images/AirNoBnb/detalle3.webp",
                alt: "AirNoBnb - Detalle Alojamiento 3"
            },
            {
                src: "images/AirNoBnb/reservar.webp",
                alt: "AirNoBnb - Reservar Alojamiento"
            },
            {
                src: "images/AirNoBnb/visualizarReserva1.webp",
                alt: "AirNoBnb - Visualizar Reserva"
            }

        ],
        tecnologies: [
            {
                title: "React",
                icon: FaReact
            },
            {
                title: "Tailwind CSS",
                icon: RiTailwindCssFill
            },
            {
                title: "Node.js",
                icon: IoLogoNodejs
            },
            {
                title: "Express",
                icon: SiExpress
            },
            {
                title: "JWT",
                icon: SiJsonwebtokens
            },
            {
                title: "MongoDB",
                icon: BiLogoMongodb
            },
            {
                title: "Cloudinary",
                icon: SiCloudinary
            }
        ],
        repository: "https://github.com/nicoalvarez03/airbnb_clone_reactJs"
    },
    {
        id: 2,
        title: "Cartelera Cine",
        description: "Una aplicación hecha con HTML y tailwind CSS que muestra una cartelera de películas. Permite ver detalles de cada película, incluyendo su título, sinopsis, duración y género. También permite ver las salas disponibles y las funciones de cada película. Contiene un formulario de login y registro.",
        images: [
            {
                src: "images/CarteleraCine/index.webp",
                alt: "Cartelera Cine - Imagen principal"
            },
            {
                src: "images/CarteleraCine/index2.webp",
                alt: "Cartelera Cine - Imagen principal 2"
            },
            {
                src: "images/CarteleraCine/login.webp",
                alt: "Cartelera Cine - Login"
            },
            {
                src: "images/CarteleraCine/registro.webp",
                alt: "Cartelera Cine - Registro"
            },
            {
                src: "images/CarteleraCine/perfil.webp",
                alt: "Cartelera Cine - Perfil"
            },
            {
                src: "images/CarteleraCine/detallePelicula.webp",
                alt: "Cartelera Cine - Detalle de Película"
            },
            {
                src: "images/CarteleraCine/salas.webp",
                alt: "Cartelera Cine - Salas"
            }
        ],
        tecnologies: [
            {
                title: "HTML5",
                icon: FaHtml5
            },
            {
                title: "Tailwind CSS",
                icon: RiTailwindCssFill
            },
            {
                title: "JavaScript",
                icon: IoLogoJavascript
            }
        ],
        repository: "https://github.com/aAlvarez03/proyecto_cartelera_cine"
    },
    {
        id: 3,
        title: "Chollosevero",
        description: "Una aplicación web de comercio electrónico que permite a los usuarios encontrar los mejores chollos. También permite registrarse, iniciar sesión, navegar por productos, crear, editar o eliminar nuevos productos. Los administradores pueden gestionar productos y usuarios.",
        images: [
            {
                src: "images/Chollosevero/index.webp",
                alt: "Chollosevero - Imagen principal"
            },
            {
                src: "images/Chollosevero/login.webp",
                alt: "Chollosevero - Login"
            },
            {
                src: "images/Chollosevero/registro.webp",
                alt: "Chollosevero - Registro"
            },
            {
                src: "images/Chollosevero/creacionChollo.webp",
                alt: "Chollosevero - Creación de Chollo"
            },
            {
                src: "images/Chollosevero/editarChollo.webp",
                alt: "Chollosevero - Edición de Chollo"
            },
            {
                src: "images/Chollosevero/misChollos.webp",
                alt: "Chollosevero - Mis Chollos"
            },
            {
                src: "images/Chollosevero/visualizarChollo.webp",
                alt: "Chollosevero - Visualizar Chollo"
            },
            {
                src: "images/Chollosevero/gestionUsuarios.webp",
                alt: "Chollosevero - Gestión de Usuarios"
            },
        ],
        tecnologies: [
            {
                title: "Laravel",
                icon: FaLaravel
            },
            {
                title: "Bootstrap",
                icon: FaBootstrap
            },
            {
                title: "MySQL",
                icon: SiMysql
            }
        ],
        repository: "https://github.com/aAlvarez03/CholloSevero"
    },
    {
        id: 4,
        title: "MercadoLibre",
        description: "Una aplicación web que simula un clon de la conocida plataforma Mercado Libre. Hecha unicamente con HTML y CSS para mostrar productos, categorías (la cual permite navegar entre estas) y carrito de compras. También dispone de un formulario de login y registro.",
        images: [
            {
                src: "images/MercadoLibre/index.webp",
                alt: "Mercado Libre - Imagen principal"
            },
            {
                src: "images/MercadoLibre/login.webp",
                alt: "Mercado Libre - Login"
            },
            {
                src: "images/MercadoLibre/registro.webp",
                alt: "Mercado Libre - Registro"
            },
            {
                src: "images/MercadoLibre/categorias.webp",
                alt: "Mercado Libre - Categorías"
            },
            {
                src: "images/MercadoLibre/electrodomesticos.webp",
                alt: "Mercado Libre - Electrodomésticos"
            },
            {
                src: "images/MercadoLibre/carrito.webp",
                alt: "Mercado Libre - Carrito de Compras"
            },
        ],
        tecnologies: [
            {
                title: "HTML5",
                icon: FaHtml5
            },
            {
                title: "CSS3",
                icon: IoLogoCss3
            },
            {
                title: "JavaScript",
                icon: IoLogoJavascript
            }
        ],
        repository: "https://github.com/aAlvarez03/proyecto_1er_trimestre_diw"
    },
    {
        id: 5,
        title: "MiniMarket",
        description: "Aplicación web de comercio electrónico que permite a los usuarios navegar por los productos existentes ya sea a través de los destacados o las categorías disponibles. Pueden añadir productos al carrito.",
        images: [
            {
                src: "images/MiniMarket/index.webp",
                alt: "MiniMarket - Imagen principal"
            },
            {
                src: "images/MiniMarket/index2.webp",
                alt: "MiniMarket - Imagen principal 2"
            },
            {
                src: "images/MiniMarket/categorias.webp",
                alt: "MiniMarket - Categorías"
            },
            {
                src: "images/MiniMarket/carrito.webp",
                alt: "MiniMarket - Carrito de Compras"
            },
        ],
        tecnologies: [
            {
                title: "HTML5",
                icon: FaHtml5
            },
            {
                title: "CSS3",
                icon: IoLogoCss3
            },
            {
                title: "JavaScript",
                icon: IoLogoJavascript
            },
            {
                title: "Bootstrap",
                icon: FaBootstrap
            }
        ],
        repository: "https://github.com/aAlvarez03/Proyecto_MiniMarket"
    },
    {
        id: 6,
        title: "StreetFighter",
        description: "Aplicación web que simula una interfaz del conocido juego Street Fighter. Permite ver los personajes disponibles, los atributos que tiene cada personaje. También permite modificar la imagen de cada luchador.",
        images: [
            {
                src: "images/StreetFighter/index.webp",
                alt: "Street Fighter - Imagen principal"
            },
            {
                src: "images/StreetFighter/seleccion.webp",
                alt: "Street Fighter - Selección de Luchadores"
            },
            {
                src: "images/StreetFighter/modificar.webp",
                alt: "Street Fighter - Modificar Luchador"
            },
            {
                src: "images/StreetFighter/ready.webp",
                alt: "Street Fighter - Ready"
            }
        ],
        tecnologies: [
            {
                title: "Angular",
                icon: FaAngular
            },
            {
                title: "Bootstrap",
                icon: FaBootstrap
            },
            {
                title: "TypeScript",
                icon: SiTypescript
            }
        ],
        repository: "https://github.com/aAlvarez03/StreetFighterProyect"
    }
]

// Exportar los datos de habilidades
export const skillsData: SkillsDataProps[] = [
    {
        title: "React",
        svg: "images/svg/react.svg"
    },
    {
        title: "Node.js",
        svg: "images/svg/nodeJs.svg"
    },
    {
        title: "Express",
        svg: "images/svg/express.svg"
    },
    {
        title: "MongoDB",
        svg: "images/svg/mongodb.svg"
    },
    {
        title: "Tailwind CSS",
        svg: "images/svg/tailwind.svg"
    },
    {
        title: "JWT",
        svg: "images/svg/jwt.svg"
    },
    {
        title: "Cloudinary",
        svg: "images/svg/cloudinary.svg"
    },
    {
        title: "HTML5",
        svg: "images/svg/html.svg"
    },
    {
        title: "JavaScript",
        svg: "images/svg/javascript.svg"
    },
    {
        title: "Laravel",
        svg: "images/svg/laravel.svg"
    },
    {
        title: "MySQL",
        svg: "images/svg/mysql.svg"
    },
    {
        title: "Bootstrap",
        svg: "images/svg/bootstrap.svg"
    },
    {
        title: "CSS3",
        svg: "images/svg/css.svg"
    },
    {
        title: "Angular",
        svg: "images/svg/angular.svg"
    },
    {
        title: "TypeScript",
        svg: "images/svg/typescript.svg"
    },
    {
        title: "PHP",
        svg: "images/svg/php.svg"
    },
    {
        title: "Git",
        svg: "images/svg/git.svg"
    },
    {
        title: "GitHub",
        svg: "images/svg/github.svg"
    },
    {
        title: "Framer Motion",
        svg: "images/svg/framerMotion.svg"
    },
    {
        title: "Astro",
        svg: "images/svg/astro.svg"
    },
    {
        title: "Python",
        svg: "images/svg/python.svg"
    },
    {
        title: "Terminal",
        svg: "images/svg/terminal.svg"
    },
    {
        title: "Visual Studio Code",
        svg: "images/svg/vsc.svg"
    },
    {
        title: "Figma",
        svg: "images/svg/figma.svg"
    },
    {
        title: "Wordpress",
        svg: "images/svg/wordpress.svg"
    },
    {
        title: "Docker",
        svg: "images/svg/docker.svg"
    },
    {
        title: "Symfony",
        svg: "images/svg/symfony.svg"
    },
    {
        title: "Next.js",
        svg: "images/svg/nextJs.svg"
    },
    {
        title: ".NET",
        svg: "images/svg/net.svg"
    },
    {
        title: "Java",
        svg: "images/svg/java.svg"
    }
]
