// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  // 817955 being hashbangfr group id
  GITLAB_API_BASE_URL: 'https://gitlab.com/api/v3/groups/817955/',
  // private token for user kanban
  GITLAB_API_TOKEN: 'JbdkpAL4A1EJUf2DMLTD',
  projectsColorMap: {
      komaks: '#ff995d',
      getmypool: '#bfcdff',
      owltail: '#bfe8b7',
      owlface: '#e2f1d3',
      owlright: '#74da6d',
      hashbang: '#f79eec',
      mngdeps: '#f1ff7a',
      hosting: '#d6d6d6',
      lepinard: '#dc4d66',
  },
};
