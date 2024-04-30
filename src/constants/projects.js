import foodOrder from '../images/projects/food_order.png';
import fetchMovie from '../images/projects/fetch_movie.png';
import backroads from '../images/projects/backroads.png';

export const projects = [
  {
    id: '1',
    projectImagePath: foodOrder,
    projectName: 'React Food Order',
    projectDescription:
      'Small food order app with validations and can submit in database using react js and Firebase',
    sourceCodeLink: 'https://github.com/joy016/food-order',
    projectDemoLink: 'https://joy016.github.io/food-order/',
  },
  {
    id: '2',
    projectImagePath: fetchMovie,
    projectName: 'Fetch Movie App',
    projectDescription:
      'A simple app that can add and fetch movies using React Js and Firebase, the movies are just static records coming from database, the app also has a simple form validation that checks fields if its empty before adding it',
    sourceCodeLink: 'https://github.com/joy016/Fetch-movies',
    projectDemoLink: 'https://joy016.github.io/Fetch-movies/',
  },
  {
    id: '3',
    projectImagePath: backroads,
    projectName: 'Backroads Clone',
    projectDescription: 'Backroads App cloning using next js, React Js',
    sourceCodeLink: 'https://github.com/joy016/backroads-clone',
    projectDemoLink: 'https://backroads-clone.vercel.app/',
  },
];
