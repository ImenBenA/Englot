=> npm install -g expo-cli

# if you want to run on Android Studio Emulator
* install jdk
* install and run Android Atudio
* go to tools -> AVD manager -> x86 images -> Marshmallow ANDROID 6.0 (target x86_64, api level 23) -> next
* run Emulator
close Android Studio if you want and leave the Emulator running

# Set up env paths to run the Emulator from command line without having to open Android Studio
## go to This PC -> Advanced system settings -> Env variables
### add variables : 
* ANDROID_HOME C:\Users\""REPLACE_WITH_CURRENT_USER""\AppData\Local\Android\Sdk
* JAVA_HOME C:\Program Files\Java\jdk1.8.0_152 (latest version)
### edit path
#### (Replace Imen BenAbderrahmen with current user)
* add : 
* C:\Users\Imen BenAbderrahmen\AppData\Local\Android\Sdk\platform-tools
* C:\Users\Imen BenAbderrahmen\AppData\Local\Android\Sdk\tools
* C:\Users\Imen BenAbderrahmen\AppData\Local\Android\Sdk\tools\bin
* C:\Program Files\Java\jdk1.8.0_152\bin
* C:\Users\Imen BenAbderrahmen\AppData\Local\Android\Sdk\emulator

# to run the Emulator from command line :
* cd %ANDROID_HOME%/tools
* emulator -list-avds (to list all of your current AVDs)
* emulator -avd THE_NAME_OF_YOUR_AVD_ANDROID6.0
* npm start or expo start
* a

# install git
## Pull changes
* git fetch --all
* git pull origin master

## Commit and push changes
* git add -A
* git commit -m "description"
* git push origin master
