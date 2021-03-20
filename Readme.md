### Basic Steps for projects
```
PS D:\Projects\NodeExpressMongoDB> npm install  -g express 
PS D:\Projects\NodeExpressMongoDB> npm install  -g express-generator
PS D:\Projects\NodeExpressMongoDB> express --view="ejs" ex1      

   create : ex1\
   create : ex1\public\
   create : ex1\public\javascripts\
   create : ex1\public\images\
   create : ex1\public\stylesheets\
   create : ex1\public\stylesheets\style.css
   create : ex1\routes\
   create : ex1\routes\index.js
   create : ex1\routes\users.js
   create : ex1\views\
   create : ex1\views\error.ejs
   create : ex1\package.json
   create : ex1\bin\
   create : ex1\bin\www

     > cd ex1

   install dependencies:
     > npm install

   run the app:
     > SET DEBUG=ex1:* & npm start
```
*****now go in side the folder ex1 and installed npm******
```
PS D:\Projects\NodeExpressMongoDB> cd ex1
PS D:\Projects\NodeExpressMongoDB\ex1> npm install
npm notice created a lockfile as package-lock.json. You should commit this file.
added 54 packages from 38 contributors and audited 55 packages in 6.221s
found 0 vulnerabilities

 *****why nodemon: automatically restarting the node application when file changes in the directory are detected*****
 ```
 *****why nodemon: automatically restarting the node application when file changes in the directory are detected.*****
 ```
PS D:\Projects\NodeExpressMongoDB\ex1> npm i nodemon

> nodemon@2.0.7 postinstall D:\Projects\NodeExpressMongoDB\ex1\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm WARN ws@7.4.4 requires a peer of bufferutil@^4.0.1 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.4.4 requires a peer of utf-8-validate@^5.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.2.5 requires a peer of bufferutil@^4.0.1 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.2.5 requires a peer of utf-8-validate@^5.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ nodemon@2.0.7
added 89 packages from 33 contributors and audited 381 packages in 25.96s
found 0 vulnerabilities
PS D:\Projects\NodeExpressMongoDB\ex1> SET DEBUG=ex1:* & npm start
At line:1 char:17
+ SET DEBUG=ex1:* & npm start
+                 ~
The ampersand (&) character is not allowed. The & operator is reserved for future use; wrap an ampersand in double quotation      
marks ("&") to pass it as part of a string.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : AmpersandNotAllowed
 
PS D:\Projects\NodeExpressMongoDB\ex1> 
```
*****Installed debug*****
```
PS D:\Projects\NodeExpressMongoDB\ex1> npm install debug
Debugger listening on ws://127.0.0.1:56986/1a3a7452-fb24-412c-b263-9b44c161b664
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
npm WARN registry Using stale data from https://registry.npmjs.org/ because the host is inaccessible -- are you offline?
npm WARN registry Using stale package data from https://registry.npmjs.org/ due to a request error during revalidation.
npm WARN ws@7.2.5 requires a peer of bufferutil@^4.0.1 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.2.5 requires a peer of utf-8-validate@^5.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ debug@2.6.9
updated 1 package in 14.32s
Waiting for the debugger to disconnect...
PS D:\Projects\NodeExpressMongoDB\ex1>
```
*****On Windows the environment variable is set using the set command.*****
PS D:\Projects\NodeExpressMongoDB\ex1> SET DEBUG=ex1:* & nmp start

> ex1@0.0.0 start D:\Projects\NodeExpressMongoDB\ex1
> node ./bin/www
---------------------------------------------------------
*****why mongodb: its a driver install and import MongoClient and access mongodb collection.*****
PS D:\Projects\NodeExpressMongoDB\ex1> npm install mongodb --save 
+ mongodb@3.6.4
added 1 package and audited 87 packages in 3.812s
found 0 vulnerabilities
*****why express-fileupload:  middleware for uploading files. It parses multipart/form-data requests, extracts the files if available, and make them available under req. files property.*****
PS D:\Projects\NodeExpressMongoDB\ex1> npm i express-fileupload
+ express-fileupload@1.2.1
added 4 packages from 2 contributors and audited 75 packages in 6.793s
found 0 vulnerabilities

PS D:\Projects\NodeExpressMongoDB\ex1> npm i fs                
+ fs@0.0.1-security
added 1 package and audited 76 packages in 3.147s
found 0 vulnerabilities

 *****why uuid:  create short non-sequential url-friendly unique ids.*****
PS D:\Projects\NodeExpressMongoDB\ex1> npm install uuid
+ uuid@8.3.2
added 1 package and audited 77 packages in 3.177s
found 0 vulnerabilities

*****why lodash : https://www.npmjs.com/package/lodash provides utility functions for common programming tasks using a functional programming paradigm;*****
PS D:\Projects\NodeExpressMongoDB\ex1> npm i --save lodash
npm WARN ws@7.2.5 requires a peer of bufferutil@^4.0.1 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.2.5 requires a peer of utf-8-validate@^5.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ lodash@4.17.21
updated 1 package and audited 362 packages in 7.652s
found 0 vulnerabilities

PS D:\Projects\NodeExpressMongoDB\ex1>  