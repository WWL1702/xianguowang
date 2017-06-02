var gulp=require("gulp");
var uglify = require("gulp-uglify");	
gulp.task("index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("dist"));
});


gulp.task("uglify",function(){
	gulp.src("js/jquery-1.8.3.js")
	
	.pipe(uglify())//压缩
	.pipe(gulp.dest("dist/"));
});

var gulp=require("gulp");

gulp.task("denglu",function(){
	gulp.src("denglu.html")
	.pipe(gulp.dest("dist"));
});

gulp.task("uglify",function(){
	gulp.src("js/banner1.js")
	
	.pipe(uglify())//压缩
	.pipe(gulp.dest("dist/"));
});