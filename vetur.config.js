module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  projects: [
    {
      root: './packages/admin',
      tsconfig: './tsconfig.json',
    },
    {
      root: './packages/base',
      tsconfig: './tsconfig.json',
    },
  ],
}
