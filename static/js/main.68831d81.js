!function(){"use strict";var e,n,t,r={6198:function(e,n,t){var r=t(7294),a=t(3935),i=(t(2526),t(1817),t(1539),t(2165),t(6992),t(8783),t(3948),t(7042),t(1038),t(4916),t(7601),t(1954)),o=t(5893);function s(e){var n=e.name,t=void 0===n?"notFound":n,r=e.color,a=void 0===r?"#009ada":r,s=e.width,c=void 0===s?"28":s,l=e.height,d=void 0===l?"28":l,m=e.small,u=void 0!==m&&m;return(0,o.jsx)(i.JO,{icon:{notFound:"tabler:error-404",facebook:"ant-design:facebook-filled",github:"fa-brands:github-square",linkedin:"akar-icons:linkedin-box-fill",like:"akar-icons:heart",share:"bi:share-fill",html:"bi:filetype-html",css:"bi:filetype-css",js:"fluent:javascript-16-regular",git:"uil:github-alt",react:"akar-icons:react-fill",redux:"akar-icons:redux-fill"}[t],color:a,width:u?20:c,height:u?20:d})}t(3371),t(3321);var c,l,d,m,u=t(586);function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var h,f=u.ZP.div.attrs({className:"theme theme--animation"})(c||(c=p([""]))),g=u.ZP.h2(l||(l=p(["\n\tfont-size: 2.3rem;\n\tfont-weight: 800;\n\tposition: relative;\n\ttext-align: center;\n\tmargin-bottom: 5rem;\n    ",";\n\n\t&::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\ttop: 2rem;\n\t\twidth: 4rem;\n\t\tborder-bottom: 0.2rem solid var(--primary);\n\t}\n"])),(function(e){return e.variant&&"color: var(--light-text)"})),x=u.ZP.section(d||(d=p(["\n    ","\n    \n\t&:nth-child(2n) {\n        background-color: var(--bg-color2);\n\t}\n    \n\t> div {\n\t\tcolor: var(--text-color);\n\t\t\n\t\tpadding: 5rem 1rem;\n\t\tmax-width: 1500px;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\tline-height: 140%;\n\n\t\th3 {\n\t\t\tfont-size: 22px;\n\t\t}\n\n\t\th4 {\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\tp,\n\t\tspan {\n\t\t\tfont-size: 16px;\n\t\t}\n\n\t\tp,\n\t\tspan {\n\t\t\tline-height: 120%;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 768px) {\n\t\tmax-width: 700px;\n\t}\n"])),(function(e){return e.variant&&"background-color: var(--dark);"})),b=u.ZP.label(m||(m=p(["\n\twidth: 100%;\n\tcolor: var(--light-text);\n\tmargin-bottom: .3rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&:nth-child(-n+3) {\n\t\twidth: 48%;\n\t}\n\n\tinput,\n\ttextarea {\n\t\tmargin-bottom: 1rem;\n\t\tbackground-color: transparent;\n\t\tborder: 1px solid var(--primary);\n\t\tborder-radius: 0.3rem;\n\t\tpadding: 0.7rem 0.5rem;\n\t\tcolor: var(--light-text);\n\t\tresize: none;\n\n\t\t&::placeholder {\n\t\t\tfont-family: 'Varela Round', sans-serif;\n\t\t}\n\t}\n    \n\t@media only screen and (max-width: 768px) {\n\t\t&:nth-child(-n+3) {\n\t\t\twidth: 100%;\n\t\t}\n}\n"])));function v(e){var n=e.name,t=void 0===n?"":n,r=e.type,a=void 0===r?"text":r,i=e.placeholder;return(0,o.jsxs)(b,{children:[t,i?(0,o.jsx)("textarea",{placeholder:i}):(0,o.jsx)("input",{autoComplete:"off",placeholder:t,type:a,id:t})]})}function w(){return localStorage.getItem("color-theme")}function j(e){localStorage.setItem("color-theme",e),document.documentElement.setAttribute("data-color-theme",e)}h=window.matchMedia("(prefers-color-scheme: light)").matches&&"light",j(w()||h||"dark");var y=t(3379),k=t.n(y),P=t(7795),O=t.n(P),S=t(569),A=t.n(S),Z=t(3565),C=t.n(Z),I=t(9216),z=t.n(I),D=t(4589),M=t.n(D),E=t(3387),T={};function L(e){var n=e.children,t=e.name,r=e.variant;return(0,o.jsx)(x,{variant:r,id:t,children:(0,o.jsx)("div",{children:n})})}T.styleTagTransform=M(),T.setAttributes=C(),T.insert=A().bind(null,"head"),T.domAPI=O(),T.insertStyleElement=z(),k()(E.Z,T),E.Z&&E.Z.locals&&E.Z.locals;var N={seeMore:"...See more",home:{title:"Frontend Developer: Code faster than you talk and learn more than you work",resume:"resume",resumePhone:"Let's get in touch"},navbar:[{href:"#about",name:"About"},{href:"#projects",name:"Projects"},{href:"#experience",name:"Experience"},{href:"#article",name:"Articles"},{href:"#footer",name:"Contact"}],about:{title:"About",icons:[{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/fast-icon.webp",name:"Fast",desc:"Fast load times and free interactions for better user experience."},{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/usable-icon.webp",name:"Usable",desc:"My layouts will always work on any device, doesn't matter the size."},{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/clean-icon.webp",name:"Clean",desc:"I always try to do the cleanest code for readability, my highest priorty."},{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/dynamic-icon.webp",name:"Dynamic",desc:"Websites don't have to be static, I love making pages come to life."}],technologies:"These are all the technologies I use to make everything seem like magic on the Internet, ",blueText:"always looking for more to do great things."},projects:{title:"Projects",wrapper:[{name:"Online Pokedex",src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/pokedex.webp",techs:["React js","Sass","Git"],about:"A fun project that i made while experimenting with the PokeApi",view:"View site",projectLink:"https://derwin1310.github.io/Pokeapi/"}]},experience:{title:"Experience",quote:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",cite:"-Martin Fowler",career:"Careers",courses:"Education",careers:[{job:"Webmaster",time:"Dec 2020 - Oct 2021",org:"Network Speed",desc:"Web application development using JavaScript, CSS3 and HTML5, Deploy developments on GitHub and GIT Pages."}],education:[{name:"ReactJs",time:"Oct 2021 - Mar 2022",desc:"React is an open source Javascript library designed to create user interfaces with the goal of facilitating the development of single page applications. It is maintained by Facebook and the free software community."},{name:"JavaScript",time:"Jun 2020 - Oct 2020",desc:"JavaScript is a dynamic, prototype-based, multi-paradigm, single-threaded language that supports object-oriented, imperative, and declarative styles (for example, functional programming)."},{name:"CSS3",time:"Feb 2020 - Apr 2020",desc:"It is a graphic design language for defining and creating the presentation of a structured document written in a markup language (such as HTML). It is widely used to establish the visual design of web documents."},{name:"HTML5",time:"Jan 2020 - Feb 2020",desc:"HTML is a markup language that allows us to indicate the structure of our website through tags. This language offers us great adaptability, a logical structure and is easy to interpret by both humans and machines."}]},articles:{title:"Articles",wrapper:[{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/css-wallpaper.webp",article:"Best Practices with CSS",desc:"The first article I did, and it's about good practices in CSS3",date:"March",articleLink:"https://medium.com/@derwin1310/aprende-las-buenas-practicas-en-css-cascade-style-sheets-3eab66cb738d"}]},contact:{title:"Contact",subtitle:"OK, LET'S CREATE SOMETHING BIG",contactDesc:"If you like my work and have any cool projects to work on, just send me a direct message or contact me through the social sites listed below.",formTitle:"Send me a message",name:"First Name",surname:"Last Name",email:"Email address",message:"Message",typeYourMessage:"Type your message",submit:"Submit"}},R={seeMore:"...Ver más",home:{title:"Desarrollador Frontend: Codifica más rápido de lo que hablas y aprende más de lo que trabajas",resume:"currículum",resumePhone:"Mantengámos el contacto"},navbar:[{href:"#about",name:"Acerca"},{href:"#projects",name:"Proyectos"},{href:"#experience",name:"Experiencia"},{href:"#article",name:"Artículos"},{href:"#footer",name:"Contacto"}],about:{title:"Acerca",icons:[{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/fast-icon.webp",name:"Rápido",desc:"Tiempos de carga rápidos e interacciones gratuitas para una mejor experiencia de usuario."},{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/usable-icon.webp",name:"Usable",desc:"Mis diseños siempre funcionarán en cualquier dispositivo, sin importar el tamaño."},{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/clean-icon.webp",name:"Limpio",desc:"Siempre trato de hacer el código más limpio para facilitar la lectura, mi máxima prioridad."},{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/dynamic-icon.webp",name:"Dinámico",desc:"Los sitios web no tienen que ser estáticos, me encanta hacer que las páginas cobren vida."}],technologies:"Estas son todas las tecnologías que utilizo para hacer que todo parezca magia en Internet, ",blueText:"siempre buscando más para hacer grandes cosas."},projects:{title:"Proyectos",wrapper:[{name:"Pokedex Online",src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/pokedex.webp",techs:["React js","Sass","Git"],about:"Un proyecto divertido que hice mientras experimentaba con la PokeApi",view:"Ver sitio",projectLink:"https://derwin1310.github.io/Pokeapi/"}]},experience:{title:"Experiencia",quote:"Cualquier necio puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos podamos entender.",cite:"-Martin Fowler",career:"Carreras",courses:"Educación",careers:[{job:"Webmaster",time:"Dic. 2020 - Oct. 2021",org:"Network Speed",desc:"Desarrollo de aplicación Web utilizando JavaScript, CSS3 y HTML5, Deploy de desarrollos en GitHub y GIT Pages."}],education:[{name:"ReactJs",time:"Oct. 2021 - Mar. 2022",desc:"React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones de una sola página. Es mantenido por Facebook y la comunidad de software libre."},{name:"JavaScript",time:"Jun. 2020 - Oct. 2020",desc:"JavaScript es un lenguaje dinámico basado en prototipos, multiparadigma, de un solo subproceso, que admite estilos orientados a objetos, imperativos y declarativos (por ejemplo, programación funcional)."},{name:"CSS3",time:"Feb. 2020 - Abr. 2020",desc:"Es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcas (como HTML). Es ampliamente utilizado para establecer el diseño visual de los documentos web."},{name:"HTML5",time:"Ene. 2020 - Feb. 2020",desc:"HTML es un lenguaje de marcas que nos permite indicar la estructura de nuestro sitio web a través de etiquetas. Este lenguaje nos ofrece una gran adaptabilidad, una estructura lógica y es fácil de interpretar tanto por humanos como por máquinas."}]},articles:{title:"Artículos",wrapper:[{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/css-wallpaper.webp",article:"Buenas Prácticas con CSS",desc:"El primer artículo que hice, y es sobre las buenas prácticas en CSS3",date:"Marzo",articleLink:"https://medium.com/@derwin1310/aprende-las-buenas-practicas-en-css-cascade-style-sheets-3eab66cb738d"}]},contact:{title:"Contacto",subtitle:"OK, VAMOS A CREAR ALGO GRANDE",contactDesc:"Si te gusta mi trabajo y tienes algún proyecto genial en el que trabajar, solo envíame un mensaje directo o contáctame a través de los sitios sociales que se enumeran a continuación.",formTitle:"Envíeme un mensaje",name:"Nombre",surname:"Apellido",email:"Correo electronico",message:"Mensaje",typeYourMessage:"Escribe tu mensaje",submit:"Enviar"}};function J(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(e){s=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?q(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var F,B,G,H,W,Y,V,_=(0,r.createContext)();function Q(e){var n=e.children,t=J((0,r.useState)(w()),2),a=t[0],i=t[1],s=J((0,r.useState)(!1),2),c=s[0],l=s[1],d=localStorage.getItem("lang"),m=function(e){return localStorage.setItem("lang",e)},u=J((0,r.useState)(d||"en"),2),p=u[0],h=u[1];(0,r.useEffect)((function(){return!d&&m("en")}),[]);var f={setActiveBtn:l,activeBtn:c,locale:p,defaultTheme:a,setLanguage:function(e){h(e),m(e)},changeTheme:function(){var e,n="dark"===w()?"light":"dark";i(n),j(n),(e=document.getElementById("theme")).classList.remove("theme--animation"),setTimeout((function(){return e.classList.add("theme--animation")}),300)},language:{en:N,es:R}[p]};return(0,o.jsx)(_.Provider,{value:f,children:n})}function X(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var U=u.ZP.div(F||(F=X(["\n    background-color: #000000bb;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    height: 94vh;\n    justify-content: space-around;\n    width: 100%;\n    padding: 0 1rem;\n    color: var(--light-text);\n\n    &::before {\n        content: '';\n        top: 0;\n        width: 100%;\n        height: 100vh;\n        z-index: -1;\n        position: absolute;\n        background-image: url('https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/galaxyWallpaper.webp');\n    }\n\n    @media only screen and (max-width: 768px) {\n        height: 100vh;\n        justify-content:space-between;\n        box-shadow: 0px 20px 20px  #0007;\n    }\n"]))),K=u.ZP.a(B||(B=X(["\n    animation-name: fade, fadeIn;\n    animation-duration: 3s;\n    text-decoration: none;\n    background-color: transparent;\n    color: var(--light-text);\n    border: 3px solid var(--light-text);\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1.5rem;\n    padding: 0.8rem 4rem;\n    transition: all .1s;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n    \n    &:active {\n        transform: scale(1);\n    }\n\n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        padding: .8rem 0;\n        text-align: center;\n        margin-bottom: 2rem;\n        font-size: 1.5rem;\n        color: var(--primary);\n        border-color: var(--primary);\n\n        &:hover {\n            transform: none;\n        }\n\n        &:active {\n            transform: scale(1.1);\n        }\n\n        @media only screen and (max-width: 480px) {\n            margin: 2rem 0\n        }\n    }\n"]))),$=u.ZP.header(G||(G=X(["\n    animation-name: fade, fadeIn;\n    animation-duration: 3s;\n    display: flex;\n    flex-direction: column;\n    max-width: 1600px;\n    font-size: 5rem;\n    line-height: 120%;\n\n    @media only screen and (max-width: 768px) {\n        height: 50%;\n        max-width: 768px;\n        margin-top: 5rem;\n        justify-content: space-between;\n    }\n\n    @media only screen and (max-width: 480px) {\n        height: 100%;\n    }\n"]))),ee=u.ZP.div(H||(H=X(["\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n\n    @media only screen and (max-width: 768px) {\n        gap: .5rem;\n    }\n"]))),ne=u.ZP.h1(W||(W=X(["\n    font-size: 6rem;\n    display: inline;\n    font-weight: 100;\n\n    @media only screen and (max-width: 768px) {\n        line-height: 120%;\n        font-size: 3rem;\n    }\n\n    @media only screen and (max-width: 480px) {\n        line-height: 120%;\n        font-size: 2.5rem;\n    }\n"]))),te=u.ZP.q(Y||(Y=X(["\n    @media only screen and (max-width: 768px) {\n        font-size: 2rem;\n        line-height: 120%;\n    }\n\n    @media only screen and (max-width: 480px) {\n        font-size: 2rem;\n    }\n"]))),re=u.ZP.img(V||(V=X(["\n    width: 90px;\n    height: 100px;\n\n    @media only screen and (max-width: 768px) {\n        height: 60px;\n        width: 60px;\n    }\n"])));function ae(){var e=(0,r.useContext)(_).language.home,n=e.title,t=e.resume,a=e.resumePhone,i=window.innerWidth>=769?t:a;return(0,o.jsxs)(U,{id:"home",children:[(0,o.jsxs)($,{children:[(0,o.jsxs)(ee,{children:[(0,o.jsx)(re,{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp",alt:"niceLogo"}),(0,o.jsx)(ne,{children:"Derwin Romero"})]}),(0,o.jsx)(te,{children:n})]}),(0,o.jsx)(K,{href:"https://github.com/Derwin1310/assets-for-portfolio/raw/main/about-imgs/CV%20Derwin%20Romero.pdf",children:i})]})}t(7327);var ie,oe,se,ce,le,de,me,ue=t(6786),pe=t(2173),he={};function fe(){var e=(0,r.useContext)(_),n=e.activeBtn,t=e.setActiveBtn;return(0,o.jsxs)("div",{onClick:function(){return t(!n)},className:"burger-btn ".concat(n?"opened":""),children:[(0,o.jsx)("div",{className:"burger-btn__line"}),(0,o.jsx)("div",{className:"burger-btn__line"}),(0,o.jsx)("div",{className:"burger-btn__line"})]})}function ge(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}he.styleTagTransform=M(),he.setAttributes=C(),he.insert=A().bind(null,"head"),he.domAPI=O(),he.insertStyleElement=z(),k()(pe.Z,he),pe.Z&&pe.Z.locals&&pe.Z.locals,t(1249);var xe,be,ve,we,je,ye,ke=u.ZP.div(ie||(ie=ge(["\n    display: flex;\n    justify-content: center;\n    position: sticky;\n    top: 0;\n    background-color: #000000bb;\n    z-index: 100;\n    box-shadow: 0px 10px 10px  #0007;\n"]))),Pe=u.ZP.nav(oe||(oe=ge(["\n    animation-name: fade, fadeIn;\n    animation-duration: 3s;\n    display: flex;\n    justify-content: space-between;\n    height: 6vh;\n    padding: 0.5rem 1rem;\n    width: 1600px;\n\n    @media only screen and (max-width: 768px) {\n        animation-name: ",";\n        animation-duration: 1s;\n        background-color: #0C002Bee;\n        height: 100%;\n        width: 100%;\n        visibility: ",";\n        transition: all .7s ease-in-out;\n        position: fixed;\n        padding-top: 2rem;\n        top: 0;\n        flex-direction: column;\n        justify-content: center;\n    }\n"])),(function(e){return e.variant?"fadeRight":"fadeExit"}),(function(e){return e.variant?"visible":"hidden"})),Oe=u.ZP.ul(se||(se=ge(["\n    align-items: center;\n    display: flex;\n    gap: 0.5rem;\n\n    @media only screen and (max-width: 768px) {\n        flex-direction: column;\n        gap: 2rem;\n        margin: 0 auto;\n    }\n"]))),Se=u.ZP.img(ce||(ce=ge(["\n    width: 2rem;\n    cursor: pointer;\n\n    @media only screen and (max-width: 768px) {\n        width: 4rem;\n    }\n"]))),Ae=u.ZP.a(le||(le=ge(["\n    font-size: 1.2rem;\n    color: var(--light-text);\n    text-decoration: none;\n\n    &:hover {\n        color: var(--primary);\n        transition: color .5s;\n    }\n\n    @media only screen and (max-width: 768px) {\n        font-size: 2rem;\n    }\n\n"]))),Ze=u.ZP.div(de||(de=ge(["\n    align-items: center;\n    display: flex;\n    gap: 2rem;\n\n    .css-qc6sy-singleValue {\n        color: var(--light-text);\n    }\n\n    .css-1pahdxg-control,\n    .css-1s2u09g-control {\n        background-color: transparent;\n        border: none;\n        box-shadow: none;\n    }\n\n    .css-319lph-ValueContainer,\n    .css-tlfecz-indicatorContainer,\n    .css-1gtu0rj-indicatorContainer {\n        padding: 0;\n    }\n\n    .css-tlfecz-indicatorContainer {\n        color: var(--primary);\n    }\n\n    .css-1gtu0rj-indicatorContainer {\n        color: #420A1A;\n    }\n\n    .css-2613qy-menu {\n        border: none;\n    }\n\n    .css-1okebmr-indicatorSeparator {\n        display: none;\n    }\n\n    @media only screen and (max-width: 768px) {\n        margin-top: 2rem;\n        flex-direction: column;\n\n        .css-qc6sy-singleValue {\n            font-size: 1.5rem;\n        }\n    }\n"]))),Ce=u.ZP.div(me||(me=ge(["\n    align-items: center;\n    border: 2px solid ",";\n    background-color: ",";\n    border-radius: 3rem;\n    color: ",";\n    ",";\n    cursor: pointer;\n    display: flex;\n\n    span {\n        font-size: 1.3rem;\n        margin: 3px .5rem 0;\n    }\n\n    img {\n        border-radius: 50%;\n        outline: 2px solid ",";\n        padding: 6px;\n    }\n"])),(function(e){return e.variant?"var(--light-text)":"var(--primary)"}),(function(e){return e.variant?"var(--links)":"#420A1A"}),(function(e){return e.variant?"var(--light-text)":"var(--primary)"}),(function(e){return e.variant&&"flex-direction: row-reverse"}),(function(e){return e.variant?"var(--light-text)":"var(--primary)"}));function Ie(){return(0,r.useContext)(_).language.navbar.map((function(e){var n=e.href,t=e.name;return(0,o.jsx)("li",{children:(0,o.jsx)(Ae,{href:n,children:t})},t)}))}function ze(){var e=(0,r.useContext)(_),n=e.changeTheme,t=e.defaultTheme,a="light"===t?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAaVJREFUOE+1lYFNwzAQRZsJKBNQJoBOQDsBjFAmoGzABsAEZIR2AtIJmk5ANyCdIPxnnZHjxJWDhCUriX3/++7f+VJMMkfbtpVM26IoljmQIscIGxG3PEWchckyCohP4p3mONMhllNHgb41lyJoQgLtrczjMlrnoE/NqTDXfi8mRsc7zSpXS9MezE6YRYqY0yGfhSELDODGQLX2dp5Ae0RGpIswykGNZUxYjZ63Anxo8gxHrY9H2dTeNtqfJJNnpHsDbC0SPvH+3tbnkMekfJ8jBkD4eFaGYEskkSDLPJvYNCXTWwEfhoCy2ZjnVFDVkyLIKnvOO62t9f6q+azvtwSxt4kxmG+KgPikhfUfiN3h5syLOC5cpAlvSBBSvAuEZ70hIiJ50hyWYgjEmoAk78qAncwHFXPQwXEpOsrccsO7ozkxQzJ7H1du0QUpReJvnQ/woJdV9gWB0LTlSl96Fis/HzK1WwV7XOkvk+y3caWaUKehpPJgueCQXuMaapuc2mkoRuB0jevaooSc/oL+boxt9E0o0blIxhL/y6+J3gDxYO+Ivf8BM9vjcBg+hXMAAAAASUVORK5CYII=":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC4yOTkiIGhlaWdodD0iMTguMjk5IiB2aWV3Qm94PSIwIDAgMTguMjk5IDE4LjI5OSI+DQogIDxwYXRoIGlkPSJJY29uX2ZlYXRoZXItbW9vbiIgZGF0YS1uYW1lPSJJY29uIGZlYXRoZXItbW9vbiIgZD0iTTE5LjI1LDExLjcyNEE4LjI1LDguMjUsMCwxLDEsMTAuMjc2LDIuNzVhNi40MTcsNi40MTcsMCwwLDAsOC45NzQsOC45NzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS44NjggLTEuODMzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTMxYjZkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS44MzMiLz4NCjwvc3ZnPg0K",i="light"===t?"Off":"On";return(0,o.jsxs)(Ce,{variant:"light"===t,onClick:n,children:[(0,o.jsx)("span",{children:i}),(0,o.jsx)("img",{src:a,alt:"img theme"})]})}function De(){var e=(0,r.useContext)(_),n=e.locale,t=e.setLanguage,a=e.activeBtn,i=[{value:"en",label:"US"},{value:"es",label:"ES"}],s=i.filter((function(e){return e.value===n}));return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(fe,{}),(0,o.jsx)(ke,{children:(0,o.jsxs)(Pe,{variant:a,children:[(0,o.jsxs)(Oe,{children:[(0,o.jsx)("a",{href:"#home",children:(0,o.jsx)(Se,{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/logo.webp",alt:"small logo"})}),(0,o.jsx)(Ie,{})]}),(0,o.jsxs)(Ze,{children:[(0,o.jsx)(ue.ZP,{menuPlacement:"auto",options:i,defaultValue:s,onChange:function(e){return t(e.value)}}),(0,o.jsx)(ze,{})]})]})})]})}function Me(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var Ee,Te,Le,Ne,Re=u.ZP.div(xe||(xe=Me(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 3rem;\n    gap: 1rem;\n\n    @media only screen and (max-width: 768px) {\n        text-align: center;\n        margin-left: auto;\n        margin-right: auto;\n    }\n"]))),Je=u.ZP.h4(be||(be=Me(["\n    font-size:2.3rem;\n    color: var(--secondary);\n"]))),qe=u.ZP.p(ve||(ve=Me(["\n    color: var(--secondary);\n"]))),Fe=u.ZP.section(we||(we=Me(["\n    display: flex;\n    margin: 0 auto 5rem;\n    gap: 1rem;\n    justify-content: space-between;\n\n    @media only screen and (max-width: 768px) {\n        width: 100%;\n        order: 1;\n        overflow: scroll;\n        overflow-y: hidden;\n        gap: 5rem;\n        padding: 0 4rem;\n    }\n"]))),Be=u.ZP.div(je||(je=Me(["\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    text-align: center;\n    width: 20rem;\n\n    h3 {\n        font-weight: 600;\n    }\n"]))),Ge=u.ZP.div(ye||(ye=Me(["\n    display: grid;\n    grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );\n    column-gap: 1rem;\n    row-gap: 1rem;\n    place-items: center;\n    width: 100%;\n"])));function He(){var e=(0,r.useContext)(_).language.about.icons;return(0,o.jsx)(Fe,{children:e.map((function(e){var n=e.name,t=e.desc,r=e.src;return(0,o.jsxs)(Be,{children:[(0,o.jsx)("img",{src:r,alt:n}),(0,o.jsx)("h3",{children:n}),(0,o.jsx)("p",{children:t})]},n)}))})}function We(){return(0,o.jsx)(Ge,{children:["js","html","css","react","redux","git"].map((function(e){return(0,o.jsx)(s,{name:e,width:"100",height:"100"},e)}))})}function Ye(){var e=(0,r.useContext)(_).language.about,n=e.title,t=e.technologies,a=e.blueText;return(0,o.jsxs)(L,{name:"about",children:[(0,o.jsx)(g,{children:n}),(0,o.jsx)(He,{}),(0,o.jsxs)(Re,{children:[(0,o.jsx)(Je,{children:"Derwin Romero"}),t,(0,o.jsx)(qe,{children:a})]}),(0,o.jsx)(We,{})]})}function Ve(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var _e,Qe,Xe,Ue,Ke,$e=u.ZP.section(Ee||(Ee=Ve(["\n    display: grid;\n    width: 100%;\n    grid-auto-rows: 300px;\n    grid-template-columns: repeat(1, 390px);\n    gap: 2rem;\n    justify-content: center;\n\n    img {\n        width: 100%;\n        height: 450px;\n        object-fit: cover;\n    }\n\n    @media only screen and (max-width: 768px) {\n        display: flex;\n        gap: 2rem;\n        flex-wrap: nowrap;\n        overflow: scroll;\n        overflow-y: hidden;\n        justify-content: space-between;\n    }\n"]))),en=u.ZP.article(Te||(Te=Ve(["\n    @media only screen and (min-width: 769px) {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        \n        &:hover img {\n            opacity: 0;\n            transition: all .5s;\n        }\n\n        &:hover div {\n            opacity: 1;\n            transition: all 2s;\n        }\n    }\n\n    @media only screen and (max-width: 768px) {\n        border-radius: 5px;\n        border: 1px solid var(--links);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 300px;\n        margin-left: auto;\n        margin-right: auto;\n\n        img {\n            width: 300px;\n            height: 230px;\n        }\n    }\n"]))),nn=u.ZP.div(Le||(Le=Ve(["\n    @media only screen and (min-width: 769px) {\n        position: absolute;\n        top: 2rem;\n        opacity: 0;\n\n        h4 {\n            font-size: 22px;\n        }\n\n        span {\n            display: block;\n            color: var(--primary);\n            margin-bottom: 3rem;\n        }\n\n        p {\n            display: none;\n        }\n    }\n\n    @media only screen and (max-width: 768px) {\n        padding: 1rem;\n        display: flex;\n        flex-direction: column;\n        gap: .5rem;\n\n        span {\n            color: var(--primary);\n        }\n\n        a {\n            text-decoration: none;\n            color: var(--links);\n        }\n    }\n"]))),tn=u.ZP.a(Ne||(Ne=Ve(["\n    @media only screen and (min-width: 769px) {\n        text-decoration: none;\n        color: var(--text-color);\n        border: 3px solid var(--primary);\n        padding: .2rem 1.5rem;\n        border-radius: 3px;\n    }\n\n    @media only screen and (max-width: 768px) {\n        display: none;\n    }\n"])));function rn(){var e=(0,r.useContext)(_).language,n=e.projects.wrapper,t=e.seeMore;return(0,o.jsx)($e,{children:n.map((function(e){var n=e.name,r=e.src,a=e.about,i=e.techs,s=e.view,c=e.projectLink;return(0,o.jsxs)(en,{children:[(0,o.jsx)("img",{src:r,alt:n}),(0,o.jsxs)(nn,{children:[(0,o.jsx)("h4",{children:n}),(0,o.jsxs)("span",{children:[i.map((function(e){return e})).join(", "),"."]}),(0,o.jsxs)("p",{children:[a,(0,o.jsx)("a",{href:c,target:"_blank",children:t})]}),(0,o.jsx)(tn,{href:c,target:"_blank",children:s})]})]},n)}))})}function an(){var e=(0,r.useContext)(_).language.projects.title;return(0,o.jsxs)(L,{name:"projects",children:[(0,o.jsx)(g,{children:e}),(0,o.jsx)(rn,{})]})}function on(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var sn,cn,ln,dn=u.ZP.q(_e||(_e=on(["\n\tdisplay: block;\n\ttext-align: center;\n\tmax-width: 75ch;\n\tmargin: 0 auto;\n"]))),mn=u.ZP.h3(Qe||(Qe=on(["\n\tmax-width: 1200px;\n\tmargin: 4rem auto 0;\n"]))),un=u.ZP.section(Xe||(Xe=on(["\n\tdisplay: flex;\n\tpadding-bottom: 3rem;\n\tmax-width: 1200px;\n\tmargin: 2rem auto 0;\n\tgap: 3rem;\n\t",";\n\n\t@media only screen and (max-width: 768px) {\n\t\tflex-direction: column;\n\t\tgap: 1rem;\n\t\tmargin-left: 1rem;\n\t}\n"])),(function(e){return e.variant&&"border-bottom: 2px solid var(--links)"})),pn=u.ZP.h4(Ue||(Ue=on(["\n\twidth: 13rem;\n\tcolor: var(--primary);\n\tmargin-bottom: 1rem;\n"]))),hn=u.ZP.h4(Ke||(Ke=on(["\n\tcolor: var(--secondary);\n\tmargin-bottom: 1rem;\n"])));function fn(){var e=(0,r.useContext)(_).language.experience,n=e.careers,t=e.career;return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(mn,{children:t}),n.map((function(e){var n=e.job,t=e.time,r=e.org,a=e.desc;return(0,o.jsx)("article",{children:(0,o.jsxs)(un,{variant:"border-b",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(pn,{children:n}),(0,o.jsx)("time",{children:t})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(hn,{children:r}),(0,o.jsx)("p",{children:a})]})]})},n)}))]})}function gn(){var e=(0,r.useContext)(_).language.experience,n=e.education,t=e.courses;return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(mn,{children:t}),n.map((function(e){var n=e.name,t=e.time,r=e.desc;return(0,o.jsx)("article",{children:(0,o.jsxs)(un,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(pn,{children:n}),(0,o.jsx)("time",{children:t})]}),(0,o.jsx)("p",{children:r})]})},n)}))]})}function xn(){var e=(0,r.useContext)(_).language.experience,n=e.quote,t=e.cite,a=e.title;return(0,o.jsxs)(L,{name:"experience",children:[(0,o.jsx)(g,{children:a}),(0,o.jsxs)(dn,{children:[(0,o.jsx)("blockquote",{children:n}),(0,o.jsx)("cite",{children:t})]}),(0,o.jsx)(fn,{}),(0,o.jsx)(gn,{})]})}function bn(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var vn,wn,jn,yn,kn,Pn=u.ZP.article(sn||(sn=bn(["\n\tdisplay: grid;\n\tgrid-auto-rows: 450px;\n\tgrid-template-columns: repeat(1, 390px);\n\tgrid-gap: 3rem 1rem;\n\tjustify-content: space-evenly;\n\n\t@media only screen and (max-width: 768px) {\n\t\tdisplay: flex;\n\t\tgap: 2rem;\n\t\toverflow: scroll;\n\t\toverflow-y: hidden;\n\t\twidth: 100%;\n\t\tflex-wrap: nowrap;\n\t\tjustify-content: space-between;\n\t}\n"]))),On=u.ZP.div(cn||(cn=bn(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\tgap: 1rem;\n\n\timg {\n\t\twidth: 100%;\n\t\theight: 450px;\n\t\tobject-fit: cover;\n\t}\n\n\th4 {\n\t\tcolor: var(--primary);\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: var(--links);\n\t}\n\n\t@media only screen and (max-width: 768px) {\n\t\twidth: 300px;\n\t\tborder: 1px solid var(--links);\n\t\tborder-radius: 5px;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\n\t\th4,\n\t\tp {\n\t\t\tpadding: 0 1rem;\n\t\t}\n\n\t\timg {\n\t\t\twidth: 300px;\n\t\t\theight: 230px;\n\t\t}\n\t}\n"]))),Sn=u.ZP.div(ln||(ln=bn(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tcolor: var(--secondary);\n\n\t@media only screen and (max-width: 768px) {\n\t\tpadding: 0 1rem;\n\t\tpadding-bottom: 1rem;\n\t}\n"])));function An(){var e=(0,r.useContext)(_).language,n=e.articles.wrapper,t=e.seeMore;return(0,o.jsx)(Pn,{children:n.map((function(e){var n=e.src,r=e.article,a=e.desc,i=e.date,c=e.articleLink;return(0,o.jsxs)(On,{children:[(0,o.jsx)("img",{src:n,alt:"CSS article"}),(0,o.jsx)("h4",{children:r}),(0,o.jsxs)("p",{children:[a,(0,o.jsx)("a",{href:c,target:"_blank",children:t})]}),(0,o.jsxs)(Sn,{children:[(0,o.jsx)(s,{name:"share",small:!0}),(0,o.jsx)(s,{name:"like",small:!0}),(0,o.jsx)("time",{children:i})]})]},r)}))})}function Zn(){var e=(0,r.useContext)(_).language.articles.title;return(0,o.jsxs)(L,{name:"article",children:[(0,o.jsx)(g,{children:e}),(0,o.jsx)(An,{})]})}function Cn(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var In=u.ZP.div(vn||(vn=Cn(["\n\tmax-width: 768px;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: center;\n\tgap: 2rem;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tcolor: var(--light-text);\n\n\t@media only screen and (max-width: 768px) {\n\t\tp {\n\t\t\tcolor: var(--secondary);\n\t\t}\n\t}\n"]))),zn=u.ZP.div(wn||(wn=Cn(["\n\tflex-direction: row;\n\tjustify-content: center;\n\tmargin: 2rem auto 0;\n\tcolor: var(--light-text);\n\tmax-width: 768px;\n\tdisplay: flex;\n\tgap: 2rem;\n\n\tsection {\n\t\tdisplay: flex;\n\t\talign-items: flex-end;\n\t\tgap: 0.3rem;\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: var(--secondary);\n\t\tfont-weight: 600;\n\t}\n\n\t@media only screen and (max-width: 768px) {\n\t\tflex-wrap: wrap;\n\t}\n"]))),Dn=u.ZP.div(jn||(jn=Cn(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tmax-width: 768px;\n\tmargin: 2rem auto 0;\n\n\th3 {\n\t\tcolor: var(--primary);\n\t\twidth: 100%;\n\t\tmargin-bottom: 0.6rem;\n\t}\n"]))),Mn=u.ZP.button(yn||(yn=Cn(["\n\tborder: 3px solid var(--primary);\n\tbackground-color: transparent;\n\tcolor: var(--primary);\n\twidth: 100%;\n\tpadding: 0.5rem 3rem;\n\tfont-size: 1.3rem;\n\tfont-family: 'Varela Round', sans-serif;\n\tborder-radius: 0.3rem;\n\tcursor: pointer;\n"]))),En=u.ZP.figcaption(kn||(kn=Cn(["\n    margin: 8rem auto 0;\n    text-align: center;\n"])));function Tn(){return(0,o.jsx)(zn,{children:[{icon:"facebook",href:"https://www.facebook.com/derwin.romero1310",social:"Facebook"},{icon:"github",href:"https://github.com/Derwin1310",social:"Github"},{icon:"linkedin",href:"https://www.linkedin.com/in/derwinerr/",social:"LinkedIn"}].map((function(e){var n=e.icon,t=e.href,r=e.social;return(0,o.jsxs)("section",{children:[(0,o.jsx)(s,{name:n}),(0,o.jsx)("a",{target:"_blank",href:t,children:r})]},r)}))})}function Ln(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Nn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ln(Object(t),!0).forEach((function(n){Rn(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ln(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Rn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Jn(){var e=(0,r.useContext)(_).language.contact,n=e.name,t=e.surname,a=e.email,i=e.message,s=e.typeYourMessage,c=e.formTitle,l=e.submit,d=[{name:n},{name:t},{name:a,type:"email"},{name:i,placeholder:s}];return(0,o.jsxs)(Dn,{children:[(0,o.jsx)("h3",{children:c}),d.map((function(e){return(0,r.createElement)(v,Nn(Nn({},e),{},{key:e.name}))})),(0,o.jsx)(Mn,{type:"submit",children:l})]})}function qn(){var e=(0,r.useContext)(_).language.contact,n=e.title,t=e.subtitle,a=e.contactDesc;return(0,o.jsx)("footer",{children:(0,o.jsxs)(L,{variant:!0,name:"footer",children:[(0,o.jsx)(g,{variant:!0,children:n}),(0,o.jsxs)(In,{children:[(0,o.jsx)("h3",{children:t}),(0,o.jsx)("p",{children:a})]}),(0,o.jsx)(Tn,{}),(0,o.jsx)(Jn,{}),(0,o.jsx)(En,{children:(0,o.jsx)("img",{src:"https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/gaiden.webp",alt:"gaiden"})})]})})}function Fn(){return(0,o.jsx)(Q,{children:(0,o.jsxs)(f,{id:"theme",children:[(0,o.jsx)(ae,{}),(0,o.jsx)(De,{}),(0,o.jsx)(Ye,{}),(0,o.jsx)(an,{}),(0,o.jsx)(xn,{}),(0,o.jsx)(Zn,{}),(0,o.jsx)(qn,{})]})})}t(9070),t(7941),t(5003),t(4747),t(9337),a.render((0,o.jsx)(Fn,{}),document.getElementById("root"))},2173:function(e,n,t){var r=t(7537),a=t.n(r),i=t(3645),o=t.n(i)()(a());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.Z=o},3387:function(e,n,t){var r=t(7537),a=t.n(r),i=t(3645),o=t.n(i)()(a());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.Z=o}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={id:e,exports:{}};return r[e](t,t.exports,i),t.exports}i.m=r,e=[],i.O=function(n,t,r,a){if(!t){var o=1/0;for(d=0;d<e.length;d++){t=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<t.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](t[c])}))?t.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,r,a]},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,{a:n}),n},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var o={};n=n||[null,t({}),t([]),t(t)];for(var s=2&r&&e;"object"==typeof s&&!~n.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(n){o[n]=function(){return e[n]}}));return o.default=function(){return e},i.d(a,o),a},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};i.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,a,o=t[0],s=t[1],c=t[2],l=0;if(o.some((function(n){return 0!==e[n]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var d=c(i)}for(n&&n(t);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},t=self.webpackChunkportfolio_web=self.webpackChunkportfolio_web||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=i.O(void 0,[353],(function(){return i(6198)}));o=i.O(o)}();
//# sourceMappingURL=main.68831d81.js.map