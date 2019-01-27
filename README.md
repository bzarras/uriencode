# uriencode

A simple command line tool for calling encodeURIComponent on a string.

## Install
```
$ npm i @bzarras/uriencode -g
```

## Usage examples
Simplest usage is to pass your string as an argument:
```
$ uriencode "a string with spaces"
a%20string%20with%20spaces 

$ uriencode some/path/name
some%2Fpath%2Fname

$ uriencode email@addres.s
email%40addres.s
```
You can also read from STDIN:
```
$ echo "a string with spaces" | uriencode
a%20string%20with%20spaces
```
Pipes, redirects, and TTY input are accepted.
