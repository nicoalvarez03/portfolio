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

export const projectsData: ProjectsDataProps[] = [
    {
        id: 1,
        title: "AirNoBnb",
        description: "Una plataforma de reservas de alojamientos similar a Airbnb, donde los usuarios pueden registrarse e iniciar sesion. Crear, modificar o eliminar alojamientos, también crear o eliminar reservas.",
        images: [
            {
                src: "images/AirNoBnb/index.png",
                alt: "AirNoBnb - Imagen principal"
            },
            {
                src: "images/AirNoBnb/login.png",
                alt: "AirNoBnb - Login"
            },
            {
                src: "images/AirNoBnb/registro.png",
                alt: "AirNoBnb - Registro"
            },
            {
                src: "images/AirNoBnb/perfil.png",
                alt: "AirNoBnb - Perfil"
            },
            {
                src: "images/AirNoBnb/misReservas.png",
                alt: "AirNoBnb - Mis Reservas"
            },
            {
                src: "images/AirNoBnb/misAlojamientos.png",
                alt: "AirNoBnb - Mis Alojamientos"
            },
            {
                src: "images/AirNoBnb/nuevo1.png",
                alt: "AirNoBnb - Nuevo Alojamiento"
            },
            {
                src: "images/AirNoBnb/nuevo2.png",
                alt: "AirNoBnb - Nuevo Alojamiento 2"
            },
            {
                src: "images/AirNoBnb/edit1.png",
                alt: "AirNoBnb - Editar Alojamiento"
            },
            {
                src: "images/AirNoBnb/edit2.png",
                alt: "AirNoBnb - Editar Alojamiento 2"
            },
            {
                src: "images/AirNoBnb/eliminarAlojamiento.png",
                alt: "AirNoBnb - Eliminar Alojamiento"
            },
            {
                src: "images/AirNoBnb/detalle1.png",
                alt: "AirNoBnb - Detalle Alojamiento 1"
            },
            {
                src: "images/AirNoBnb/detalle2.png",
                alt: "AirNoBnb - Detalle Alojamiento 2"
            },
            {
                src: "images/AirNoBnb/detalle3.png",
                alt: "AirNoBnb - Detalle Alojamiento 3"
            },
            {
                src: "images/AirNoBnb/reservar.png",
                alt: "AirNoBnb - Reservar Alojamiento"
            },
            {
                src: "images/AirNoBnb/visualizarReserva1.png",
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
                src: "images/CarteleraCine/index.png",
                alt: "Cartelera Cine - Imagen principal"
            },
            {
                src: "images/CarteleraCine/index2.png",
                alt: "Cartelera Cine - Imagen principal 2"
            },
            {
                src: "images/CarteleraCine/login.png",
                alt: "Cartelera Cine - Login"
            },
            {
                src: "images/CarteleraCine/registro.png",
                alt: "Cartelera Cine - Registro"
            },
            {
                src: "images/CarteleraCine/perfil.png",
                alt: "Cartelera Cine - Perfil"
            },
            {
                src: "images/CarteleraCine/detallePelicula.png",
                alt: "Cartelera Cine - Detalle de Película"
            },
            {
                src: "images/CarteleraCine/salas.png",
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
        description: "Una aplicación web de comercio electrónico que permite a los usuarios registrarse, iniciar sesión, navegar por productos, crear, editar o eliminar nuevos productos. Los administradores pueden gestionar productos y usuarios.",
        images: [
            {
                src: "images/Chollosevero/index.png",
                alt: "Chollosevero - Imagen principal"
            },
            {
                src: "images/Chollosevero/login.png",
                alt: "Chollosevero - Login"
            },
            {
                src: "images/Chollosevero/registro.png",
                alt: "Chollosevero - Registro"
            },
            {
                src: "images/Chollosevero/creacionChollo.png",
                alt: "Chollosevero - Creación de Chollo"
            },
            {
                src: "images/Chollosevero/editarChollo.png",
                alt: "Chollosevero - Edición de Chollo"
            },
            {
                src: "images/Chollosevero/misChollos.png",
                alt: "Chollosevero - Mis Chollos"
            },
            {
                src: "images/Chollosevero/visualizarChollo.png",
                alt: "Chollosevero - Visualizar Chollo"
            },
            {
                src: "images/Chollosevero/gestionUsuarios.png",
                alt: "Chollosevero - Gestión de Usuarios"
            },
        ],
        tecnologies: [
            {
                title: "Laravel",
                icon: FaLaravel
            },
            {
                title: "Tailwind CSS",
                icon: RiTailwindCssFill
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
        description: "Una aplicación web que simula un clon de la conocida plataforma Mercado Libre. Hecha unicamente con HTML y CSS para mostrar productos, categorías y carrito de compras. También dispone de un formulario de login y registro.",
        images: [
            {
                src: "images/MercadoLibre/index.png",
                alt: "Mercado Libre - Imagen principal"
            },
            {
                src: "images/MercadoLibre/login.png",
                alt: "Mercado Libre - Login"
            },
            {
                src: "images/MercadoLibre/registro.png",
                alt: "Mercado Libre - Registro"
            },
            {
                src: "images/MercadoLibre/categorias.png",
                alt: "Mercado Libre - Categorías"
            },
            {
                src: "images/MercadoLibre/electrodomesticos.png",
                alt: "Mercado Libre - Electrodomésticos"
            },
            {
                src: "images/MercadoLibre/carrito.png",
                alt: "Mercado Libre - Carrito de Compras"
            },
        ],
        tecnologies: [
            {
                title: "HTML5",
                icon: FaHtml5
            },
            {
                title: "Bootstrap",
                icon: FaBootstrap
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
                src: "images/MiniMarket/index.jpg",
                alt: "MiniMarket - Imagen principal"
            },
            {
                src: "images/MiniMarket/index2.jpg",
                alt: "MiniMarket - Imagen principal 2"
            },
            {
                src: "images/MiniMarket/categorias.jpg",
                alt: "MiniMarket - Categorías"
            },
            {
                src: "images/MiniMarket/carrito.jpg",
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
                src: "images/StreetFighter/index.png",
                alt: "Street Fighter - Imagen principal"
            },
            {
                src: "images/StreetFighter/seleccion.png",
                alt: "Street Fighter - Selección de Luchadores"
            },
            {
                src: "images/StreetFighter/modificar.png",
                alt: "Street Fighter - Modificar Luchador"
            },
            {
                src: "images/StreetFighter/ready.png",
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