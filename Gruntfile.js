module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: "client/scripts/controllers/controller.js",
                dest: "server/public/assets/scripts/controllers/controller.min.js"
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"

                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"

                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: "client",
                src: "views/index.html",
                dest: "server/public/assets/"
            },
            htmlRoutes: {
                expand: true,
                cwd: "client",
                src: [
                    "views/routes/curling.html",
                    "views/routes/home.html",
                    "views/routes/contact.html",
                    "views/routes/career.html",
                    "views/routes/projects.html",
                    "views/routes/education.html",

                ],
                dest: "server/public/assets/"
            },
            photos: {
                expand: true,
                cwd:'client',
                src: [
                    "styles/photos/ryancurling_bw.jpg",
                    "styles/photos/fargo_2011_bw.png",
                    "styles/photos/trials_photo.jpg",
                    "styles/photos/UWEC.jpg",
                    "styles/photos/prime.png",
                    "styles/photos/twitter_Fotor.png",
                    "styles/photos/gmail_bw.jpg",
                    "styles/photos/linkedin_bw.png",
                    "styles/photos/wiki.png",
                    "styles/photos/usacurl.png"


                ],
                dest:"server/public/assets/"

            },

            style: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/style.css"
                ],
                "dest": "server/public/assets"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
