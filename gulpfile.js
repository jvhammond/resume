"use strict";

var gulp     = require("gulp"),
	plugins  = require("gulp-load-plugins")(),
	fs       = require("fs"),
	path     = require("path");

var config = {
	ignore     : ["node_modules", ".git", "package.json", "public"],
	whitespace : {
		newline        : true,
		trailingspaces : true,
		indentation    : "tabs"
	}
};

var jshintrc = {
	"node": true,
	"strict": false,
	"globalstrict": true,
	"predef": [
		"-Promise"
	],
	"globals": {
		"describe":   false,
		"it":         false,
		"before":     false,
		"beforeEach": false,
		"after":      false,
		"afterEach":  false,
		"Promise":    true
	},

	"bitwise":  true,
	"curly":    true,
	"eqeqeq":   true,
	"forin":    true,
	"freeze":   true,
	"immed":    true,
	"indent":   4,
	"latedef":  true,
	"newcap":   true,
	"noarg":    true,
	"noempty":  true,
	"nonbsp":   true,
	"nonew":    true,
	"undef":    true,
	"unused":  "vars",
	"trailing": true
};

function onError() {
	process.exit(-1);
}

// Get all paths
var paths = fs.readdirSync("./")
	.filter(function (file) {
		return config.ignore.indexOf(file) < 0;
	})
	.map(function (file) {
		if (fs.statSync(file).isDirectory()) {
			return file + "/**/*";
		}
		return file;
	});

//var paths = ['server'];

// Get all js paths
var jsPaths = paths
	.map(function (file) {
		if (path.basename(file) === "*") {
			return file + ".js";
		}
		return file;
	})
	.filter(function (file) {
		return path.extname(file) === ".js";
	});

gulp.task("lint:whitespace", function () {
	return gulp.src(paths)
		.pipe(plugins.lintspaces(config.whitespace))
		.pipe(plugins.lintspaces.reporter())
		.on("error", onError);
});

gulp.task("lint:js", function () {
	return gulp.src(jsPaths)
		.pipe(plugins.jshint(jshintrc))
		.pipe(plugins.jshint.reporter())
		.pipe(plugins.jshint.reporter("fail"))
		.on("error", onError);
});

gulp.task("lint",      ["lint:whitespace"]);
gulp.task("test",      ["lint"]);
gulp.task("default",   ["test"]);
