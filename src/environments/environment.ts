// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  amplify: {
    // 以下がAWS Amplify(Auth)の設定
    Auth: {
      identityPoolId: 'us-west-2:caf62a87-4d4a-4b46-b534-e20e496ce640',
      region: 'us-west-2',
      userPoolId: 'us-west-2_oVnK0wCSe',
      userPoolWebClientId: '7appmollq067mj00fd85ff7tbt'
    }
  }
};
