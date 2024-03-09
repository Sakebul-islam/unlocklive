export const routes = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'pages',
    link: '/pages',

    subRoutes: [
      {
        name: 'page - 1',
        link: '/page-1',
      },
      {
        name: 'page - 2',
        link: '/page-2',
      },
      {
        name: 'page - 3',
        link: '/page-3',
      },
    ],
  },
  {
    name: 'menu',
    link: '/menu',

    subRoutes: [
      {
        name: 'menu - 1',
        link: '/menu-1',
      },
      {
        name: 'menu - 2',
        link: '/menu-2',
      },
      {
        name: 'menu - 3',
        link: '/menu-3',
      },
    ],
  },
  {
    name: 'contact us',
    link: '/contact',
  },
];
