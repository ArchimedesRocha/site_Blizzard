//------------------------------------------------------------------------------
//Import's
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

//------------------------------------------------------------------------------
//Compilador de SASS para CSS
function compilaSass() {
  return (
    gulp
      //Caminho de origem dos arquivos que serão compilados
      .src("scss/*.scss")
      //Nessa linha todos os arquivos são compilados
      .pipe(sass({ outputStyle: "compressed" }))
      //Configurando o autoprefixer
      .pipe(
        autoprefixer({
          //A declaração abaixo informa que o autoprefixer deverá configurar o código para até duas versões antes dos navegadores atuais, ou seja o código deverá rodar na versão atual do navegador e nas duas anteriores.
          overrideBrowserslist: ["last 2 versions"],
          cascade: false,
        })
      )
      //Em seguida a compilação vai para o diretório de destino
      .pipe(gulp.dest("css/"))
      //Força o update da página
      .pipe(browserSync.stream())
  );
}
gulp.task("css-minificado", compilaSass);

//------------------------------------------------------------------------------
//Minificador CSS para Bibliotecas externas
function pluginsCSS() {
  return gulp
    .src("css/lib/*.css")
    .pipe(concat("plugins.css"))
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
}
gulp.task("css-plugins-minificado", pluginsCSS);

//------------------------------------------------------------------------------
//Minificador de todo o código JavaScript para o arquivo all.js
function gulpJs() {
  return (
    gulp
      .src("js/scripts/*.js")
      //Concat
      .pipe(concat("all.js"))
      //Babel
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      //Uglify
      .pipe(uglify())
      .pipe(gulp.dest("js/"))
      //Força o update da página
      .pipe(browserSync.stream())
  );
}
gulp.task("js-all-minificado", gulpJs);

//------------------------------------------------------------------------------
//Minificador JS para Bibliotecas externas
function pluginsJs() {
  return (
    gulp
      .src(["./js/lib/aos.min.js", "./js/lib/swiper.min.js"])
      .pipe(concat("plugins.js"))
      .pipe(gulp.dest("js/"))
      //Força o update da página
      .pipe(browserSync.stream())
  );
}
gulp.task("js-plugins-minificado", pluginsJs);

//------------------------------------------------------------------------------
//BrowserSync Automation
function browser() {
  browserSync.init({
    server: {
      //O que será mostrado ao startar o BrowserSync, que será o index no nosso projeto.
      baseDir: "./",
    },
  });
}
gulp.task("browser-sync", browser);

//------------------------------------------------------------------------------
//Gulp Watch Rotina de Tarefas
function watch() {
  //Rotina para compilar o SCSS para CSS
  gulp.watch("scss/*.scss", compilaSass);
  //Rotina que minifica os arquivos css de plugins
  gulp.watch("css/lib/*css", pluginsCSS);
  //Rotina para quando eu mudar algo em arquivos HTML eles serem atualizados na página
  gulp.watch("*.html").on("change", browserSync.reload);
  //Rotina que minifica os arquivos javascript e os une em um único arquivo
  gulp.watch("js/scripts/*js", gulpJs);
  //Rotina que minifica os arquivos javascript de plugins
  gulp.watch("js/lib/*js", pluginsJs);
}
gulp.task("watch", watch);

//------------------------------------------------------------------------------
//Execução das Tarefas
gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "browser-sync",
    "css-minificado",
    "css-plugins-minificado",
    "js-all-minificado",
    "js-plugins-minificado"
  )
);
