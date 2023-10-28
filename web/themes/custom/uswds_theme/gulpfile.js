const uswds = require("@uswds/compile");
const {parallel, watch, series, src} = require("gulp");
const gulp = require("gulp");

/**
 * USWDS version
 */
// Use version 3.
uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 * see https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/#step-4-create-path-settings-and-export-compile-functions
 */

uswds.paths.dist.theme = './src/sass';
uswds.paths.src.projectSass = './src/sass';
uswds.paths.dist.css = './dist/css';
uswds.paths.dist.img = './dist/img';
uswds.paths.dist.fonts = './dist/fonts';
uswds.paths.dist.js = './dist/js';

/**
 * Exports
 * Add as many as you need
 */

// Various compile functions.
exports.default = series(uswds.copyAssets, uswds.compile);
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.update = uswds.updateUswds;
exports.copyAssets = uswds.copyAssets;
