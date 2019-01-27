#!/usr/bin/env node
"use strict";
const { isEndNewline } = require("./utils");

var s = process.argv[2] || "";

if (s) {
    // s was a command line argument, so just perform the encoding and end
    performEncoding(s);
} else {
    // s doesn't exist yet, so read from stdin
    process.stdin.setEncoding("utf8");
    
    process.stdin.on("data", (chunk) => {
        s += chunk;
        if (process.stdin.isTTY)
            performEncoding(s);
    });
    
    process.stdin.on("end", () => {
        performEncoding(s);
    });

    process.stdin.on("error", (err) => {
        console.log(err);
        process.exit(1);
    });
}

function performEncoding(str) {
    if (isEndNewline(str))
        // Usually a newline at the end was added by the terminal program,
        // so we want to remove it
        str = str.substring(0, str.length - 1);
    console.log(encodeURIComponent(str));
    process.exit(0);
}
