export const esLang ={
    seeMore: "...Ver más",
    home: {
        title: "Desarrollador Frontend: Codifica más rápido de lo que hablas y aprende más de lo que trabajas",
        resume: "currículum",
        resumePhone: 'Mantengámos el contacto',
    },
    navbar: [
        {
            href: '#about',
            name: 'Acerca',
        },
        {
            href: '#projects',
            name: 'Proyectos',
        },
        {
            href: '#experience',
            name: 'Experiencia',
        },
        {
            href: '#article',
            name: 'Artículos',
        },
        {
            href: '#footer',
            name: 'Contacto',
        }
    ],
    about: {
        title: 'Acerca',
        icons:  [
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/fast-icon.webp',
                name: 'Rápido',
                desc: 'Tiempos de carga rápidos e interacciones gratuitas para una mejor experiencia de usuario.',
            },
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/usable-icon.webp',
                name: 'Usable',
                desc: "Mis diseños siempre funcionarán en cualquier dispositivo, sin importar el tamaño.",
            },
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/clean-icon.webp',
                name: 'Limpio',
                desc: 'Siempre trato de hacer el código más limpio para facilitar la lectura, mi máxima prioridad.',
            },
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/dynamic-icon.webp',
                name: 'Dinámico',
                desc: "Los sitios web no tienen que ser estáticos, me encanta hacer que las páginas cobren vida.",
            },
        ],
        shortDesc: "Estas son todas las tecnologías que utilizo para hacer que todo parezca magia en Internet, ",
        spanDesc: "siempre buscando más para hacer grandes cosas.",
    },
    projects: {
        title: 'Proyectos',
        wrapper: [
            {
                name: 'Pokedex Online',
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/pokedex.webp',
                techs: ['React js', 'Sass', 'Git'],
                about: 'Un proyecto divertido que hice mientras experimentaba con la PokeApi',
                view: 'Ver sitio',
                projectLink: 'https://derwin1310.github.io/Pokeapi/', 
            },
        ],
    },   
    experience: {
        title: 'Experiencia',
        quote: "Cualquier necio puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos podamos entender.",
        cite: "-Martin Fowler",
        jobs: 'Empresas',
        education: 'Educación',
        jobsList:[
            {
                job: "Webmaster",
                time: "Dic. 2020 - Oct. 2021",
                org: "Network Speed",
                desc: "Desarrollo de aplicación Web utilizando JavaScript, CSS3 y HTML5, Deploy de desarrollos en GitHub y GIT Pages."
            }
        ],
        educationList: [
            {
                course: 'ReactJs',
                time: "Oct. 2021 - Mar. 2022",
                desc: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones de una sola página. Es mantenido por Facebook y la comunidad de software libre."
            },
            {
                course: 'JavaScript',
                time: "Jun. 2020 - Oct. 2020",
                desc: "JavaScript es un lenguaje dinámico basado en prototipos, multiparadigma, de un solo subproceso, que admite estilos orientados a objetos, imperativos y declarativos (por ejemplo, programación funcional)."
            },
            {
                course: 'CSS3',
                time: "Feb. 2020 - Abr. 2020",
                desc: "Es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcas (como HTML). Es ampliamente utilizado para establecer el diseño visual de los documentos web."
            },
            {
                course: 'HTML5',
                time: "Ene. 2020 - Feb. 2020",
                desc: "HTML es un lenguaje de marcas que nos permite indicar la estructura de nuestro sitio web a través de etiquetas. Este lenguaje nos ofrece una gran adaptabilidad, una estructura lógica y es fácil de interpretar tanto por humanos como por máquinas."
            }
        ]
    },
    articles:{
        title: 'Artículos',
        wrapper: [
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/css-wallpaper.webp',
                article: "Buenas Prácticas con CSS",
                desc: "El primer artículo que hice, y es sobre las buenas prácticas en CSS3",
                date: "Marzo",
                articleLink: 'https://medium.com/@derwin1310/aprende-las-buenas-practicas-en-css-cascade-style-sheets-3eab66cb738d',
            },
        ]
    },
    contact: {
        title: 'Contacto',
        subtitle: "OK, VAMOS A CREAR ALGO GRANDE",
        contactDesc: "Si te gusta mi trabajo y tienes algún proyecto genial en el que trabajar, solo envíame un mensaje directo o contáctame a través de los sitios sociales que se enumeran a continuación.",
        formTitle: "Envíeme un mensaje",
        name: "Nombre",
        surname: "Apellido",
        email: "Correo electronico",
        message: "Mensaje",
        typeYourMessage: "Escribe tu mensaje",
        submit: "Enviar",
        design: "Diseñado por"
    },
    modal: {
        emailOk: 'Gracias por enviar tu mensaje',
        emailError: '¡Ups! Hubo un problema al enviar su formulario',
        modalTextOk: 'Ahora, mientras leo tu correo, te invito a tomar un café de mi cafetera, nada mejor que un café recién hecho 😊',
        modalTextErr: "Parece que su correo electrónico aún no se ha enviado 💩, le sugiero que tome un café de esta máquina de café y vuelva a intentarlo en un minuto.",
        textBtn: '¡Qué tengas un buen día!'
    }
}

