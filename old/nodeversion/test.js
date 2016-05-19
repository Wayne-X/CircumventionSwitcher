
// https://www.npmjs.com/package/shelljs
require('shelljs/global');

//console.log(ls(pwd()));

// kill firefox
// echo "killing firefox"
if (exec('killall -e firefox &> /dev/null', {silent:true}).code !== 0) {
  echo('Error: Killing firefox failed');
  exit(1);
}
else{echo("killed firefox");}


// get proxy to set
// echo "getting proxy to set"
proxyToSet = String(process.argv[2]);

// run firefox with proxy
echo("running firefox with proxy " + String(proxyToSet));
if (exec('firefox -P proxyToSet &').code !== 0) {
  echo('Error: Firefox launch failed');
  exit(1);
}



// domain="www.domain.com"
// port="9999"


// cat profiles | grep "proxy$proxyToSet" -m 1 | grep 
// cat profiles | grep "proxy1" -m 1

// cat profiles | grep "proxy1" -m 1 | awk -v N=$N

// change proxy settings
// folderName="$(ls ~/.mozilla/firefox | grep -m 1 '.default')"
// cat ~/.mozilla/firefox/$folderName/prefs.js

// reload firefox

// firefox -ProfileManager

// chromium-browser --proxy-server="http://127.0.0.1:8080"


 
// if (!which('git')) {
//   echo('Sorry, this script requires git');
//   exit(1);
// }
 
// // Copy files to release dir 
// rm('-rf', 'out/Release');
// cp('-R', 'stuff/', 'out/Release');
 
// // Replace macros in each .js file 
// cd('lib');
// ls('*.js').forEach(function(file) {
//   sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
//   sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
//   sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
// });
// cd('..');
 
// // Run external tool synchronously 
// if (exec('git commit -am "Auto-commit"').code !== 0) {
//   echo('Error: Git commit failed');
//   exit(1);
// }

// echo('This is a test');
// ls;