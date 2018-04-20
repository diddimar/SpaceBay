// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiRoot: 'http://localhost:5000/api',
  firebaseConfig: {
    apiKey: 'AIzaSyAatiO7ihR-iqLNe4AfmpTJ3LIt0x1lWA0',
    authDomain: 'n-o-y-b.firebaseapp.com',
    databaseURL: 'https://n-o-y-b.firebaseio.com',
    projectId: 'n-o-y-b',
    storageBucket: 'n-o-y-b.appspot.com',
    messagingSenderId: '124879268968'
  }
};
