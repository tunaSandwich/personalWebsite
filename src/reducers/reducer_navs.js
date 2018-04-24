export default function(){
  return [
    {
      title: 'Lucas Garza',
      backgroundImg: '../../style/images/backgroundLucas.jpg',
      occupation: 'DEVELOPER',
      github: {title: 'Github', imgLink: 'src/images/stackSymbols/githubIcon.png', link: 'https://github.com/tunaSandwich'},
      linkedin: {title: 'LinkedIn', imgLink: './images/stackSymbols/linkedIcon.png', link: 'https://linkedin.com/in/lucasgonzalezgarza'},
      phone: '(626) 807-5538',
      email: 'gonzalezgarza.lucas@gmail.com',
      about: 'My name is Lucas Garza. I am a motivated self-taught fullstack javascript developer. About two years ago I decided to commit full time to software development. I am most passionate about developing the skill-set to build powerful and useful applications.',
      id: 'Lucas'
    },
    {
      title: 'Projects',
      project: [
        {
          title: 'My Map App',
          projectStack: 'Javascript, Node, Express, MongoDB. Mongoose, MongoLab, EJS, Heroku, Bootstrap',
          description: 'I am the sole developer on this project. Users build up their personal map with all the cities and destinations that they have visited. They can then follow other users’ maps to compare each other’s destinations. I used an authentication middleware for Node called Passport.js. This project is far from finished, and I will continue to add features to this project. You can visit the app at: ',
          link: 'https://mymapapp.herokuapp.com',
          imgLink: '../../style/images/mapappImg.jpg',
          id: 'map'
        },
        {
          title: 'Personal Website',
          projectStack: 'React, Redux, JavaScript, JSX, ES6, Webpack, Babel',
          description: ' I update my personal site quite frequently to reflect new technologies that I am learning. Currently, my personal site is built with React + Redux. Some of the javascript in the project is written in ES6 syntax and then compiled using Babel. I also used Webpack as the module bundler for to project. The build of the site allows me to easily add and change content. I will continue adding more content as I continue building new projects. You can view source code at: ',
          link: 'https://github.com/tunaSandwich/lucasGarzaWebsite',
          imgLink: '../../style/images/lucasGarzaImg.jpg',
          id: 'lucas'
        },
        {
          title: 'Butthead 3D Model',
          projectStack: 'Maya, Z Brush, threejs',
          description: 'I took an intro course to 3D Modeling at Art Center just for fun. Decided to make a 3D rendering of Butthead. ',
          id: 'butthead'
        },
      ],
      id: 'Projects'
    },
    {
      title: 'Resume',
      file: '../../style/lucasResume.pdf',
      page: 1,
      id: 'Resume'
    }
  ]
}
