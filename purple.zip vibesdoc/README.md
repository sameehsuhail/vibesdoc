# CODI [MVP]

The solution for at-home antibody testing.

## Getting Started

Start by cloning and then running `npm install` / `yarn install`.

Run app with `npm start` / `yarn start`

## Libraries Used

- [Typescript](https://www.typescriptlang.org/) - static typing
- [Material UI](https://material-ui.com/) - UI framework for MVP
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - app routing
- [React Helmet](https://github.com/nfl/react-helmet) - SEO
- [Capacitor](https://capacitor.ionicframework.com/docs/getting-started/) - invoking native SDKs on web (Camera, etc)
- [Formik](https://jaredpalmer.com/formik/) - form building and validation
- [Jest](https://jestjs.io/) - unit testing

## App Structure

- `src/assets` - Images, SVGs etc
- `src/components` - Custom components
- `src/hooks` - Custom hooks
- `src/layouts` - Custom layouts
- `src/pages` - All routes
- `src/utils` - Util functions

## Slack Chat

- https://mitcovid19-april20.slack.com/

## Prod Build (MVP)

- TBC

## Notable links

- https://ionicframework.com/docs/react/your-first-app/2-taking-photos

## Contributing

**Please read these guidelines before you begin contributing to the project.**

1. The project uses a slightly modified version of [git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), with no feature branches and the master branch tracking whatever is released.

    - When working on a feature, create a branch from `dev` named `features/{some-feature}`. 

    - When that feature is ready to merge to `dev` (and linting and unit tests pass), create a GitHub merge request to `dev`, and assign at least 2 other frontend devs for code review.

2. Use [semantic commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716).

3. Please unit test your code :)

4. For linting, the project uses eslint with [Airbnb TypeScript rules](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

    - If you use VS Code you can follow the instructions given in the VS Code section [here](https://thesoreon.com/blog/how-to-set-up-eslint-with-typescript-in-vs-code), which should enable eslint to work with TypeScript:
    
