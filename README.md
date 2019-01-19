# uriencode

A simple command line tool for calling encodeURIComponent on a string.

## Install
```
$ npm i uriencode -g
```

## Usage examples
```
$ uriencode "a string with spaces"
a%20string%20with%20spaces 

$ uriencode some/path/name
some%2Fpath%2Fname

$ uriencode email@addres.s
email%40addres.s
```
