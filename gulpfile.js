var gulp = require("gulp"),
	compass = require("gulp-compass"),
	del = require("del")
	runSequence = require("run-sequence");

gulp.task("default",function(){
	return runSequence('clean',["build"],"watch");
});

gulp.task("clean",function(cb){
	return del("./dist",cb);
});

gulp.task("build",function(){
	return runSequence(["compass"],["staticFile"]);
});

gulp.task("compass",function(){
	return gulp.src("./src/**/*.scss")
		   .pipe(compass({
			   	config_file:'config.rb',
			   	css:"src/css",
			   	sass:"src/sass"
		   }))
		   .on("error",function(err){
			   	console.log("err");
			   	this.emit("end");
		   })
		   .pipe(gulp.dest("./dist/css/"));
});

gulp.task("staticFile",function(){
	return gulp.src([
			"./src/font*/*.*",
			"./src/images*/**/*.*",
			"./src/js*/**/*.js",
			"./src/**/*.html"
		])
		.pipe(gulp.dest("./dist/"));
});

gulp.task("watch",function(){
	return gulp.watch([
			"./src/*.html",
			"./src/**/*.scss",
			"./src/**/*.js",
			"./src/images/**/*.*"
		],function(){
			return runSequence(["build"]);
		});
});

