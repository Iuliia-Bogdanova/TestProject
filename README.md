Gulp, HTML, SCSS, JS

Figma, PixelPerfect

Desktop-first adaptive 1440px, 930px, 360px

https://test-project-mocha-tau.vercel.app/

https://www.figma.com/file/pMAizCVz391A8Wm9i07qP6/Untitled?type=design&node-id=0%3A1&mode=design&t=C1WNqYGhBDQMBng0-1  



Starting Monday, September 1st, 2025, Node.js 18 will no longer be supported on Vercel. Additionally, the legacy build image associated with Node.js 18 will also be deprecated.

This change impacts all projects – including Python and Ruby builds – that have their Node.js version set to 18. Upgrading to Node.js 22 ensures your builds utilize the latest build image, continue to receive security updates, and avoid potential errors.

Your account is associated with the following projects using Node.js 18:

test-project
How to upgrade
Team Owners and Members can upgrade all deprecated projects with a single click from the Vercel Dashboard. Alternatively, you can upgrade individual projects on the Build and Deployment page in your Vercel Project Settings.

Note: If you’ve explicitly set your Node.js version in package.json, this will override any dashboard setting so you’ll still need to update that manually to "22.x".

You can additionally check your affected projects via CLI, by running:

$ npm i -g vercel@latest
$ vercel project ls --update-required --scope VERCEL_TEAM_SLUG
For more information, check out the documentation.
