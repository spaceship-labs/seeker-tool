# seeker-tool

This Project implements the seeker-api to provide a graphical interface to search for blacklisted companies in México.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Configuration

By default the application will use the seekerone api located at seekerone.herokuapp.com to change this you can edit `app/scripts/app.js` changing the `RestangularProvider.setBaseUrl` to whatever URL you need. 
