const markdown = require( "markdown" ).markdown;

const text = `
# h1ヘッダ
aaa
## h2ヘッダ
### h3 ヘッダ
#### h4ヘッダ
##### h5ヘッダ
リスト

* abc
* def
* ghi

##### h5-2ヘッダ
番号付

1. 操作１
2. 操作２
3. 操作3

[Google](http://www.google.co.jp)

## h2-2
test
`;
const tree = markdown.parse( text );
console.log(tree);