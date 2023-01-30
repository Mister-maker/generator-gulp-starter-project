const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  welcome() {
    this.log('Welcome to the Gulp and Sass Generator!');
  }

  writing() {
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('package-lock.json'),
      this.destinationPath('package-lock.json')
    );
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
  }

  end() {
    this.log(' ');
    this.log(
      'Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you do NOT have Gulp itself installed globally.'
    );
    this.log(' ');
    this.log("If you're not sure how to do this, read this for more info:");
    this.log('https://gulpjs.com/docs/en/getting-started/quick-start/');
    this.log(' ');
    this.log(
      "Once you have the Gulp CLI installed globally, you can run 'gulp' in this project directory to run Gulp with browserSync!"
    );
    this.log(' ');
    this.log('If you want to use broserSync, run "gulp bs" instead.')
  }
};
