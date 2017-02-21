// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,

  GITLAB_API_BASE_URL: 'https://gitlab.com/api/v3/groups/xxxx/',
  GITLAB_API_TOKEN: 'XXXX',
  projectsColorMap: {
      projet1: '#ff995d',
      projet2: '#bfcdff',
  },
};
