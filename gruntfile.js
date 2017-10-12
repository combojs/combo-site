/// <vs BeforeBuild='vendor, default' />
module.exports = function(grunt) {

	// config -----------------------------------------------------------------

	grunt.initConfig({

		// concat -------------------------------------------------------------

		concat: {
			"vendor-scripts": {
				src: [
					"app/scripts/vendor/material/material.js",
					"app/scripts/vendor/babel/polyfill.js",
					"app/scripts/vendor/fetch/fetch.js",
					"app/scripts/vendor/highlight/highlight.js",
					"app/scripts/vendor/routie/routie.js",
					"app/scripts/vendor/combo/combo.js"
				],
				dest: "app/builds/vendor.full.js"
			},
            "vendor-styles": {
				src: [
					"app/styles/vendor/material/material.css",
					"app/styles/vendor/highlight/highlight.css"
				],
				dest: "app/builds/vendor.full.css"
            },
            "custom-scripts": {
				src: [
                    "app/scripts/custom/*/**/**.js",
                    "app/scripts/custom/Config.js",
                    "app/scripts/custom/Routes.js"
				],
				dest: "app/builds/custom.full.js"
            },
            "custom-styles": {
				src: [
					"App/Styles/Custom/Template.css",
					"App/Styles/Custom/Custom.css"
				],
				dest: "app/builds/custom.full.css"
            }
        },

        // babel --------------------------------------------------------------

		babel: {
			"custom-scripts": {
				files: {
					"app/builds/custom.full.js": "app/builds/custom.full.js"
				}
			}
		},

        // uglify -----------------------------------------------------------

		uglify: {
			"vendor-scripts": {
				src: 'app/builds/vendor.full.js',
				dest: 'app/builds/vendor.min.js'
            },
			"custom-scripts": {
				src: 'app/builds/custom.full.js',
				dest: 'app/builds/custom.min.js'
            }
        },

		// cssmin -----------------------------------------------------------

		cssmin: {
            "vendor-styles": {
				src: 'app/Builds/vendor.full.css',
				dest: 'app/Builds/vendor.min.css'
            },
            "custom-styles": {
				src: 'app/builds/custom.full.css',
				dest: 'app/builds/custom.min.css'
            }
        }
	});

	// load -------------------------------------------------------------------

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");

	// register ---------------------------------------------------------------

    //
    // The default task compiles the custom scripts and styles.
    //
    grunt.registerTask("default", [
		"concat:custom-scripts",
		"concat:custom-styles",
		"cssmin:custom-styles",
		"babel:custom-scripts",
        "uglify:custom-scripts"
	]);

    //
    // The vendor task compiles the vendor scripts and styles.
    //
    grunt.registerTask("vendor", [
		"concat:vendor-scripts",
		"concat:vendor-styles",
		"cssmin:vendor-styles",
        "uglify:vendor-scripts"
	]);
}
