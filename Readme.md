
# ipm package: dropbox-integration

## Overview

Provide role-based authorization for Dropbox. 

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

### - Out of the Box

This package contains an example S3 Object to fetch, and can be run upon a fresh install. Run `FetchDropboxAsset`

### - Integration with Developer's S3 Buckets

1. Create account: https://www.dropbox.com/
2. Upload asset to provide access control upon
3. Place assets URLs in `dropbox_resources` collection
4. Can use the library method `DropboxLib.GetFile` to fetch file contents.
5. An example code service `FetchDropboxAsset` implements the same.

## Usage
The DropboxLib provides user with a method to get contents of file using the filename. It does so under the assumption that the file name exists in the collection with a valid Url.

To test call `FetchDropboxAsset` with relevant parameters as an Authenticated User.

##Assets

### Code Services

* `FetchDropboxAsset` - Fetch the contents of an access-controlled Dropbox Resource

### Collections

* `dropbox_resources` - Stores key/value pairs of filenames and their respective URLs in Dropbox


## API

<a name="DropboxLib"></a>

## DropboxLib : <code>Object</code>
DropBox is a file Manager Service Software

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| collectionName | <code>string</code> | 
| cbInitInfo | <code>Object</code> | 

**Example** 
 
```js
var cbInitInfo = req; // Required: req.systemKey, req.systemSecret
var dropbox = DropboxLib(collectionName, cbInitInfo);
```
<a name="DropboxLib.GetFile"></a>

### DropboxLib.GetFile(fileName, callback)
This method gets the url from the fileName and fetches it's content from Dropbox.

**Kind**: static method of [<code>DropboxLib</code>](#DropboxLib)  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| callback | <code>callback</code> | 

**Example**  

```js
var dropbox = DropboxLib(collectionName,cbInitInfo);
dropbox.GetFile(fileName, function(err, resp){
    if(err ){
      resp.error("Failed to GET File from Dropbox: " + JSON.stringify(err));
    }
    resp.success(data);          
}
```

