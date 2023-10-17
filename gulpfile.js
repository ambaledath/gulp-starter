const { src, dest, watch, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");

const html = () => {
  return src("./*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./build/"));
};

const css = () => {
  return src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("./build/css"));
};

const js = () => {
  return src("./js/**/*.js").pipe(minify()).pipe(dest("./build/js"));
};

exports.default = () => {
  watch("./*.html", html);
  watch("./scss/**/*.scss", css);
  watch("./js/**/*.js", js);
};
