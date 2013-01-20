# node-string

## Purpose
A simple JavaScript module that can be used to replace formatted strings with arbitrary objects.

## Installation
You can install node-string via `npm`:

    npm install node-string

Or manually:

    git clone git://github.com/blparker/node-string.git node-string

## Example

var replace = require('node-string')

str = replace('Hello, ${test}', 'world');   // Hello, world
str = replace('Hello, ${test}', { test : 'world' });  // Hello, world
str = replace('Hello ${test} foo ${bar}', { test : 'world', bar : 'biz' });   // Hello world foo biz
str = replace('The ${data.one} brown ${data.two} jumped', { data : { one : 'quick', two : 'fox' } });   // The quick brown fox jumped

