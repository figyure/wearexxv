This setup is for a Mac machine.
As a preface, be sure you have NodeJS/NPM set up on your computer: http://nodejs.org/download/


1. Open your terminal and paste the following and hit enter. You may be prompted to enter your user or admin password.
sudo npm install browser-sync gulp gulp-sass gulp-sourcemaps

2. Then paste this and hit enter. 
sudo npm install browser-sync gulp gulp-sass gulp-sourcemaps --save-dev

3. In terminal, navigate (using "cd") to your local working directory (your forked XXV folder) 
Example: $ cd ~/Desktop/wearexxv/

4. Type "gulp" and hit enter. Your browser will now automatically reload any changes to your HTML / CSS files on save! 
You can use the "External" URL provided by the terminal after running gulp to view and sync on other computers / devices on the same WIFI.
