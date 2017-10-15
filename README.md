xcomponent demo
---------------

A forkable demo repo for [xcomponent](https://github.com/krakenjs/xcomponent) to help you get started.

[xcomponent](https://github.com/krakenjs/xcomponent) is a cross-domain component library which helps you render iframes and popups, pass down props, accept callbacks, and much more. This repo sets you up with the best possible starting point for building an xcomponent, including:

- Predefined webpack, babel, karma etc. configs for working with xcomponent
- Predefined test-setup, including a mock component frame
- Predefined demo pages for both iframe and popup components

### Useful starting points

- [Component definition](./src/login/component.jsx)
- [Demo in iframe mode](./demo/iframe/index.htm)
- [Demo in popup mode](./demo/popup/index.htm)
- [Component test](./test/tests/login.js)

Quick Start
-----------

#### Getting Started

- Fork the module
- Install: `npm install`
- Start editing code in `./src` and writing tests in `./tests`
- Build: `npm run build`

#### Building

```bash
npm run build
```

#### Running Demo Server

```bash
npm run demo
```

#### Deploying

- Host your bundled xcomponent script somewhere, e.g. `https://mysite.com/login.xcomponent.js`
- Set up a public url for your component, e.g. `https://mysite.com/login`
- Make sure the `login.xcomponent.js` is included in the login page, and using `window.xprops`

Now other sites can include `https://mysite.com/login.xcomponent.js` on their pages, and render your component!

#### Tests

- Edit tests in `./test/tests`
- Run the tests:

  ```bash
  npm run test
  ```

#### Testing with different/multiple browsers

```bash
npm run karma -- --browser=PhantomJS
npm run karma -- --browser=Chrome
npm run karma -- --browser=Safari
npm run karma -- --browser=Firefox
npm run karma -- --browser=PhantomJS,Chrome,Safari,Firefox
```

#### Keeping the browser open after tests

```bash
npm run karma -- --keep-open
```

#### Publishing

##### Before you publish for the first time:

- Remove the example code in `./src`, `./test/tests` and `./demo`
- Edit the module name in `package.json`
- Edit `README.md` and `CONTRIBUTING.md`

##### Then:

- Publish your code: `npm run release` to build and publish a patch version
- Or `npm run release:patch`, `npm run release:minor`, `npm run release:major`

Notes
-----

- `webpack.config.js` is set up to build both `iframe` and `popup` versions of your component. Normally this will be overkill and you'll just want to pick one. The reason there's an example of both is, the popup rendering code adds more to the bundle size, so cutting this out can streamline your bundle if you only need iframe support.

- The karma tests use a mock for the component window (i.e. everything displayed in the popup window or iframe window). This can be seen [here](./test/windows/login). When writing tests which need to consume `window.xprops` and call callbacks like `window.xprops.onLogin()`, you'll need to do that here.

- This module imports from `xcomponent/src` rather than `xcomponent/dist`, allowing your build to take advantage of tree-shaking, flow-types, etc. from `xcomponent` and all of its dependencies. That means that various babel plugins etc. that are required by `xcomponent` and its dependencies are included in this module. If this isn't to your liking, you're free to switch to `xcomponent/dist`, but be warned that you will lose out on some benefits this way. It will reduce the build time though.

- This module is forked from [grumbler](https://github.com/krakenjs/grumbler), which gives a solid (but opinionated) default setup for front-end javascript libraries, including webpack, karma, babel, flowtype, etc. You're free to switch out any of these technologies, but the existing setup is likely to give the best compatibility especially given the previous note around importing from `xcomponent/src`.