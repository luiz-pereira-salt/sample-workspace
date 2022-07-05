import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@dinasty/root-app',
  app: () => System.import('@dinasty/root-app'),
  activeWhen: '/',
});

registerApplication({
  name: '@dinasty/colonies',
  app: () => System.import('@dinasty/colonies'),
  activeWhen: '/colonies',
});

registerApplication({
  name: '@dinasty/navbar',
  app: () => System.import('@dinasty/navbar'),
  activeWhen: '/',
});

start();
