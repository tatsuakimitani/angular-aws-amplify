// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  amplify: {
    // 以下がAWS Amplify(Auth)の設定
    Auth: {
      identityPoolId: 'us-west-2:25395d70-667e-4e2b-becb-9c466b182a1b',
      region: 'us-west-2',
      userPoolId: 'us-west-2_4oIXtcnjy',
      userPoolWebClientId: '674kv18iiqt7rgfh5idjr8nmf0'
    }
  }
};
