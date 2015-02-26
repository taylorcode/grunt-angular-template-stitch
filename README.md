# grunt-angular-combine

> Combine AngularJS partials into a single HTML file.

```js
grunt.loadNpmTasks('grunt-angular-combine');
```

## The "angularCombine" task

### Overview
In your project's Gruntfile, add a section named `angularCombine` to the data object passed into `grunt.initConfig()`.

#### Example 1

```js
angularCombine: {
    dist: {
        files: [{
            expand : true
            cwd: 'app'
            src: 'views'
            dest: 'dist/combined'
        }]
    }
}
```

Will generate a file `dist/combined/views.html` that contains all html templates in `app/views`.

#### Example 2


```js
angularCombine: {
    dist: {
        files: [{
            expand : true
            cwd: 'app/views'
            src: '*'
            filter: 'isDirectory'
            dest: 'dist/combined'
        }]
    }
}
```

Will generate a file (e.g. `dist/combined/views/group1.html`) of all html templates for each folder within `app/views` (e.g. `app/views/group1/`)


#### Options

##### processIdentifier

Process function that allows you to change the if name for each of the templates.

```js
angularCombine: {
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

## Release History

- 0.1.0-m : add ability to change id name for templates
