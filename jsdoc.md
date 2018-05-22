## Functions

<dl>
<dt><a href="#DropboxExampleFetchAsset">DropboxExampleFetchAsset(fileName)</a> ⇒ <code>string</code></dt>
<dd><p>Fetch the contents of an access-controlled Dropbox Resource</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Dropbox">Dropbox</a> : <code>Object</code></dt>
<dd><p>DropBox is a file Manager Service Software</p>
</dd>
</dl>

<a name="DropboxExampleFetchAsset"></a>

## DropboxExampleFetchAsset(fileName) ⇒ <code>string</code>
Fetch the contents of an access-controlled Dropbox Resource

**Kind**: global function  
**Returns**: <code>string</code> - content - contents of Dropbox hosted file  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | filename associated with a row in dropbox_resources collection |

<a name="Dropbox"></a>

## Dropbox : <code>Object</code>
DropBox is a file Manager Service Software

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| collectionName | <code>string</code> | 

**Example**  
```js
var dropbox = Dropbox(collectionName);
```
<a name="Dropbox.GetFile"></a>

### Dropbox.GetFile : <code>Object</code>
**Kind**: static typedef of [<code>Dropbox</code>](#Dropbox)  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| callback | <code>callback</code> | 

**Example**  
```js
var dropbox = Dropbox(collectionName);
ClearBlade.init({request:req}); // Where request has systemKey and systemSecret information
dropbox.GetFile(fileName, function(err, resp){
    if(err ){
      resp.error("Failed to GET File from Dropbox: " + JSON.stringify(err));
    }
    resp.success(data);          
}
```
