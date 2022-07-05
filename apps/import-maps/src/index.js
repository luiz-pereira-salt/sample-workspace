const express = require('express');
const cors = require('cors');

const app = express();

let imports = {
  'single-spa': 'https://polyglot.microfrontends.app/npm/single-spa@5.9.0/lib/system/single-spa.min.js',
  react: 'https://cdn.jsdelivr.net/npm/react@17.0.1/umd/react.production.min.js',
  'react-dom': 'https://polyglot.microfrontends.app/npm/react-dom@17.0.1/umd/react-dom.production.min.js',
  '@dinasty/root-app': 'http://localhost:9002/root.js',
  '@dinasty/navbar': 'http://localhost:9004/navbar.js',
};

let portals = [
  {
    name: '@dinasty/colonies',
    systemjs: 'http://localhost:9003/colonies.js',
    link: 'colonies',
    icon: 'https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.png',
    route: '/colonies',
  },
  {
    name: 'cat404',
    external: 'https://http.cat/',
    link: 'Cats',
    icon: 'https://www.creativefabrica.com/wp-content/uploads/2021/01/26/Cat-Icon-Graphics-8071439-1-1-580x387.jpg',
    route: '/cat',
  },
];

app.use(cors());

app.get('/', (req, res) => {
  const systemJsPortals = portals
    .filter((p) => p.systemjs)
    .map((p) => ({
      [p.name]: p.systemjs,
    }))
    .reduce((prev, curr) => {
      return { ...prev, ...curr };
    }, imports);

  res.status(200).jsonp({
    imports: systemJsPortals,
  });
});

app.post('/', (req, res) => {});

app.get('/portals', (_, res) => {
  res.jsonp(portals);
});

const fallbackPort = 9001;

app.listen(process.env.PORT ?? fallbackPort, () => {
  process.stdout.write(`Express import maps server runing at ports ${process.env.PORT ?? fallbackPort}`);
});
