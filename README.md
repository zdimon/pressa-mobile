#Installing on Ubuntu 15.

##Libs for building for Ubuntu

    sudo apt-get install click cmake libicu-dev pkg-config devscripts qtbase5-dev qtchooser qtdeclarative5-dev qtfeedback5-dev qtlocation5-dev qtmultimedia5-dev qtpim5-dev libqt5sensors5-dev qtsystems5-dev

    sudo apt-get install -y lib32ncurses5 lib32gomp1 lib32z1-dev
    sudo apt-get install -y lib32gcc1 libc6-i386 lib32z1 lib32stdc++6
    sudo apt-get install android-tools-adb

##Installing nodejs.

    sudo apt-get install nodejs-legacy

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

##Ionic and cordova

    sudo npm install -g cordova

    sudo npm install -g ionic

## Bower gulp.

    sudo npm install bower gulp

##Java JRE JDK

    sudo apt-get install default-jre default-jdk

Download and unpack SDK http://developer.android.com/sdk/installing/index.html?pkg=tools

    echo "export ANDROID_HOME=<path-to-sdk>" >> ~/.bashrc
    echo "export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools" >> ~/.bashrc
    echo "export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-amd64" >> ~/.bashrc
    source ~/.bashrc

## Add platforms

    ionic platform add android
    ionic platform add ios
    ionic platform add ubuntu

## Test application

### Desktop

    ionic serve

### Android on connected device with debug connection = True

    ionic run android

### Ubuntu

    ionic run ubuntu

### IOS

    ionic run ios
