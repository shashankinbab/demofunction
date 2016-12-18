'use strict';

const gulp = require('gulp');
const lambduhGulp = require('lambduh-gulp');
const runSequence = require('run-sequence');
const tap = require('gulp-tap');

// Set up gulp tasks for Lambda pipeline use
lambduhGulp(gulp);

gulp.task('chmod', function () {
	return gulp.src('dist/**')
		.pipe(tap(function (file) {
			file.stat.mode = parseInt('40755', 8);
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('lambda-zip-chmod', function (callback) {
	return runSequence(
		['clean'],
		['js', 'lib', 'bin', 'node-mods', 'env'],
		['chmod'],
		['zip'],
		callback
	);
});
