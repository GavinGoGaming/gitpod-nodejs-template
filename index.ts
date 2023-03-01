var json: JSON;
var parse: Function;
parse = (json = JSON).parse;
var keys: Array<String> = parse('{"Keys":["Hello", "World"]}')['Keys'];
for(var k of keys) {
    console.log(k);
}