ionic cordova build android --prod --release -- -- --packageType=bundle

keytool -genkey -v -keystore myapp-release-key.keystore -alias com.exel.myapp -keyalg RSA -keysize 2048 -validity 10000

keytool -exportcert -list -v -alias com.exel.myapp -keystore myapp-release-key.keystore

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore myapp-release-key.keystore C:\ionic\myapp\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk com.exel.myapp

jarsigner -verify -verbose -certs C:\ionic\myapp\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk

zipalign -v 4 C:\ionic\myapp\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk myapp-release-signed.apk

apksigner verify exercisetips.apk



The JKS keystore uses a proprietary format. It is recommended to migrate to PKCS12 which is an industry standard format using "keytool -importkeystore -srckeystore myapp-release-key.keystore -destkeystore myapp-release-key.keystore -deststoretype pkcs12".




command to use for google play strore deploy

1. ionic cordova platform add android
2. ionic cordova build android --prod --release -- -- --packageType=bundle
3. keytool -genkey -v -keystore bharat-release-key.keystore -alias com.app.bharattransport  -keyalg RSA -keysize 2048 -validity 10000
4. keytool -exportcert -list -v -alias com.app.bharattransport -keystore bharat-release-key.keystore
5. jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore bharat-release-key.keystore ./platforms/android/app/build/outputs/bundle/release/app-release.aab com.app.bharattransport