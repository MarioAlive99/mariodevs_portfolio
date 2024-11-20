import logo1 from '../assets/itgam_logo.png';
import logo2 from '../assets/pilares_logo.png';
import img1 from '../assets/imagen1.jpg';
import img2 from '../assets/imagen2.jpg';
import img3 from '../assets/imagen3.jpg';

export const experiences = [
    {
        compania: 'Instituto Tecnologico Gustavo A. Madero',
        ocupacion: 'Desarrollador Backend PHP',
        colaboracion: 'Practicas Profesionales',
        logo: logo1,
        fecha: 'Enero - Junio 2023'
    },
    {
        compania: 'Instituto Tecnologico Gustavo A. Madero',
        ocupacion: 'Ayudante General Coordinación de Lenguas Extranjeras',
        colaboracion: 'Servicio Social',
        logo: logo1,
        fecha: 'Enero - Junio 2022'
    },
];

export const educationstudies = [
    {
        logo: logo1,
        nombre: 'Instituto Tecnologico Gustavo A. Madero',
        carrera: 'Ingenieria en Tecnologias de la Información y Comunicaciones',
        fecha_inicio: '2018',
        fecha_fin: '2023',
        especializacion: 'Desarrollo en Sistemas Web Full Stack'
    },
    {
        logo: logo2,
        nombre: 'Escuela de Codigo Pilares',
        carrera: 'Programador Web',
        fecha_inicio: 'Septiembre 2023',
        fecha_fin: 'Enero 2024',
        especializacion: 'Programador Java'
    }
];

export const projects = [
    {
        imagen: img1,
        nombre: 'Cotizador de Criptomonedas',
        duracion: 'Septiembre 2024',
        descripcion: 'Este proyecto se conecta a una API para obtener el precio de una Criptomoneda en dolares, pesos mexicanos y otras monedas. Introduce Zustand y Zod para ratificar las respuestas que alcanzamos de nuestra API',
        tecnologia: ["ReactJS", "API", "React Hooks"]
    },
    {
        imagen: img2,
        nombre: 'Clima API',
        duracion: 'Octubre 2024',
        descripcion: 'Este proyecto muestra como se valida y envia peticiones hacia una API, como leer las respuestas y como mostrar esta información',
        tecnologia: ["ReactJS", "API", "TailwindCSS"]
    },
    {
        imagen: img3,
        nombre: 'Landing Page',
        duracion: 'Noviembre 2024',
        descripcion: 'Este proyecto muestra una landing page personal para una pagina web de un producto',
        tecnologia: ["ReactJS", "TailwindCSS", "JS"]
    }
];