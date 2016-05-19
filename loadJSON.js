// loads just one file from measurements.ooni.torproject.org
// each file has multiple json
// leads into node-inspector as an array of JSON
// call with
// node-debug loadJSON.js fileaddr viewIndex
// node-debug loadJSON.js measurements/20121205T071604Z-MM-AS18399-http_header_field_manipulation-no_report_id-0.1.0-probe.json 0

// load required
var fs = require('fs');	// file write and read

srcAddr = process.argv[2];
viewIndex = process.argv[3];

// get list
fs.readFile(srcAddr, 'utf8', function (err,data) {
	if (err) {
		console.log("Bad list source address: " + srcAddr);
		return;
	}
	main(data);
});

function main(str){
	// split json by newline
	var arr = str.split("\n");
	// remove empty elements
	arr.map(function(x,i,a){if(x==""){a.splice(i,1)}});
	// make JSON strings into objects
	arr.map(function(x,i,a){a[i] = JSON.parse(x);});
	// break here to inspect
	console.log("Displaying report with index " + String(viewIndex) + " of " + String(arr.length) + " reports:")
	console.log(arr[Number(viewIndex)]);
}