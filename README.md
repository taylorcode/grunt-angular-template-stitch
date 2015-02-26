# grunt-angular-template-stitch

> Stitch AngularJS templates into a single HTML file, delimiting them by a comment. Useful for proxy services that need HTML files.

```js
grunt.loadNpmTasks('grunt-angular-template-stitch');
```

## The "angularTemplateStitch" task

#### Example 1

```js
angularTemplateStitch: {
    dist: {
        files: [{
            expand : true
            cwd: 'app'
            src: 'views'
            dest: 'dist/stitched'
        }]
    }
}
```

Will generate a file `dist/stitched/views.html` that contains all html templates in `app/views`.

#### Example 2


```js
angularTemplateStitch: {
    dist: {
        files: [{
            expand : true
            cwd: 'app/views'
            src: '*'
            filter: 'isDirectory'
            dest: 'dist/stitched'
        }]
    }
}
```

Will generate a file (e.g. `dist/stitched/views/group1.html`) of all html templates for each folder within `app/views` (e.g. `app/views/group1/`)


#### Options

##### processIdentifier

Process function that allows you to change the if name for each of the templates.

```js
angularTemplateStitch: {
    dist: {
        ...
        options: {
            processIdentifier: function (id) {
                // just use the files name without extension
                return id.split('/').pop().replace('.html', '');
            }
        }
    }
}
```


*You will need to process your templates in angular using `angular-template-stitch`*

See: [angular-template-stitch](https://github.com/taylorcode/angular-template-stitch)

## Release History

- 0.1.0 : first release, adapted from angular-combine
