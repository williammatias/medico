echo off
title List Android Emulators
:: See the title at the top. And this comment will not appear in the command prompt.
echo Printing Android Emulators Available.
%ANDROID_HOME%\tools\emulator -avd Nexus_5_API_23

