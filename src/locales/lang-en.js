export const enLang ={
    seeMore: "...See more",
    home: {
        title: "Frontend Developer: Code faster than you talk and learn more than you work",
        resume: "resume",
        resumePhone: "Let's get in touch",
    },
    navbar: [
        {
            href: '#about',
            name: 'About',
        },
        {
            href: '#projects',
            name: 'Projects',
        },
        {
            href: '#experience',
            name: 'Experience',
        },
        {
            href: '#article',
            name: 'Articles',
        },
        {
            href: '#footer',
            name: 'Contact',
        }
    ],
    about: {
        title: 'About',
        icons: [
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/fast-icon.webp',
                name: 'Fast',
                desc: 'Fast load times and free interactions for better user experience.',
            },
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/usable-icon.webp',
                name: 'Usable',
                desc: "My layouts will always work on any device, doesn't matter the size.",
            },
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/clean-icon.webp',
                name: 'Clean',
                desc: 'I always try to do the cleanest code for readability, my highest priorty.',
            },
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/dynamic-icon.webp',
                name: 'Dynamic',
                desc: "Websites don't have to be static, I love making pages come to life.",
            },
        ],
        shortDesc: "These are all the technologies I use to make everything seem like magic on the Internet, ",
        spanDesc: "always looking for more to do great things.",
    },
    projects: {
        title: 'Projects',
        wrapper: [
            {
                name: 'Online Pokedex',
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/pokedex.webp',
                techs: ['React js', 'Sass', 'Git'],
                about: 'A fun project that i made while experimenting with the PokeApi',
                view: 'View site',
                projectLink: 'https://derwin1310.github.io/Pokeapi/', 
            }
        ],
    },
    experience: {
        title: 'Experience',
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        cite: "-Martin Fowler",
        jobs: 'Jobs',
        education: 'Education',
        jobsList:[
            {
                job: "Webmaster",
                time: "Dec 2020 - Oct 2021",
                org: "Network Speed",
                desc: "Web application development using JavaScript, CSS3 and HTML5, Deploy developments on GitHub and GIT Pages."
            },
        ],
        educationList: [
            {
                course: 'ReactJs',
                time: "Oct 2021 - Mar 2022",
                desc: "React is an open source Javascript library designed to create user interfaces with the goal of facilitating the development of single page applications. It is maintained by Facebook and the free software community."
            },
            {
                course: 'JavaScript',
                time: "Jun 2020 - Oct 2020",
                desc: "JavaScript is a dynamic, prototype-based, multi-paradigm, single-threaded language that supports object-oriented, imperative, and declarative styles (for example, functional programming)."
            },
            {
                course: 'CSS3',
                time: "Feb 2020 - Apr 2020",
                desc: "It is a graphic design language for defining and creating the presentation of a structured document written in a markup language (such as HTML). It is widely used to establish the visual design of web documents."
            },
            {
                course: 'HTML5',
                time: "Jan 2020 - Feb 2020",
                desc: "HTML is a markup language that allows us to indicate the structure of our website through tags. This language offers us great adaptability, a logical structure and is easy to interpret by both humans and machines."
            }
        ]
    },
    articles: {
        title: 'Articles',
        wrapper: [
            {
                src: 'https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/css-wallpaper.webp',
                article: "Best Practices with CSS",
                desc: "The first article I did, and it's about good practices in CSS3",
                date: "March",
                articleLink: 'https://medium.com/@derwin1310/aprende-las-buenas-practicas-en-css-cascade-style-sheets-3eab66cb738d',
            },
        ],
    },
    contact: {
        title: 'Contact',
        subtitle: "OK, LET'S CREATE SOMETHING BIG",
        contactDesc: "If you like my work and have any cool projects to work on, just send me a direct message or contact me through the social sites listed below.",
        formTitle: "Send me a message",
        name: "First Name",
        surname: "Last Name",
        email: "Email address",
        message: "Message",
        typeYourMessage: "Type your message",
        submit: "Submit"
    },
    modal: {
        emailOk: 'Thanks for your submission!',
        emailError: 'Oops! There was a problem submitting your form',
        submitOk: 'Now, while i read your email, i invite you to take a coffee from my coffee machine, nothing better than a coffee recently done 😊',
        submitError: "It looks like your email hasn't been sent yet 💩, i suggest you to take a coffee from this coffe Machine and try again in a minute.",
        textBtn: 'Have a nice day!'
    }
}