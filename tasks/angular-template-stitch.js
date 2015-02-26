'use strict';

var taskName = 'angularTemplateStitch';

module.exports = function(grunt) {
    grunt.registerMultiTask(taskName, 'Combine AngularJS templates into a single HTML file.', function() {

    	var processIdentifierFunc = null;

    	if(this.data.options) {

    		processIdentifierFunc = this.data.options.processIdentifier;

	    	if(processIdentifierFunc && typeof(processIdentifierFunc) !== 'function') {
	    		throw new Error(taskName + ': processIdentifier must be a function.');
	    	}

    	}

        function generateMergedTemplate (cwd, source, dest) {

            var destFileContent = '';
            grunt.file.recurse(source, function(abspath, rootdir, subdir, filename) {
                // only work with HTML files
                if (/\.html$/.test(filename) && abspath.indexOf('/.') === -1) {
                    var id = abspath.substring(cwd.length + 1);
                    if(processIdentifierFunc) {
                    	// process the ID if desired to change
                    	id = processIdentifierFunc(id);
                    }
                    destFileContent += '<!-- ' + taskName + ' -->';
                    destFileContent += '<!-- ' + taskName + '.template="' + id + '" -->';
                    destFileContent += grunt.file.read(abspath);
                }
            });

            grunt.file.write(dest + '.html', destFileContent);
        };

        this.files.forEach(function(file) {
            var cwd = file.orig.cwd;
            var dest = file.dest;
            file.src.forEach(function(source) {
                generateMergedTemplate(cwd, source, dest);
            });
        });
    });

};