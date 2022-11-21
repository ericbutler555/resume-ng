# My Resume

Simple-ish single-page app (SPA) to serve as my online resume.

## Tech Stack

- [Angular 10](https://angular.io/) and the [@angular/cli](https://cli.angular.io/)
- [Sass](https://sass-lang.com/) for styling
- Local `JSON` files for simple, separated data

## Included Features

- `Components` to make sections modular and scope styling
- Centralized `Service` to manage HTTP requests
- `RxJS` and the `map()` operator to manipulate data returned from HTTP requests
- Observable `Subject` to listen and react to ongoing data changes
- `async` pipes to load data into the DOM asynchronously
- `*ngFor` loops to iterate over content arrays
- `*ngIf` checks to manage content display and prevent JS errors
- `[ngClass]` with ternary operators to dynamically add class names
- `@angular/animations` to define and execute DOM animations
- `@Input()` parameters to pass values into components
- `(click)` handlers that listen for user events
- Consistent use of `TypeScript` throughout for static type checking
- Local `JSON` files to fetch data objects from
- `POCOs` (plain old class objects) to define data models and params
- Property binding and dynamic HTML attributes using `[attr]="val"` notation
- Dynamic content using `{{val}}` text interpolation
- Native browser lazy-loading of images using new `loading="lazy"` attribute
- Sass `_variables.scss` partial for global CSS definitions
- Sass `mixins` for style injection
- Mobile-first CSS media queries for responsive design
- Webfonts from Google Fonts

## Note to Self 😛

To deploy changes to the live GitHub Pages site, run my custom `npm run publish` command to generate a prod build and save it in the `docs` directory.

**Also don't forget** to duplicate the `docs/index.html` page and save it as `docs/404.html`, per Angular's [deployment instructions](https://angular.io/guide/deployment#deploy-to-github-pages).

Then just `git push` to this GitHub repo.

## By the way

I also made a [React version](https://github.com/ericbutler555/resume-react) of this same resume if you're into that.
