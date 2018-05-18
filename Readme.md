
# ipm package: dropbox-integration

## Overview

Provide role-based authorization for Dropbox. This package helps user to get contents of a file on dropbox using the filename. It assumes the user enters the corresponding {fileName, url} tuple in the collection.

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

* `FetchDropboxAsset` - Fetch the contents of an access-controlled Dropbox Resource. ___Note___: Make sure to initialize ClearBlade Object, before calling the Library methods. i.e. `ClearBlade.init({request:req});`

### Code Libraries

* `DropboxLib` - This library provides a method to get file contents from Dropbox using a filename. It internally uses a collection to get dropbox url for corresponding filename. 
***Note***: User needs to add a new file, url entry in the collections before trying to access it.

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
// Need to init into ClearBlade as Dropbox uses it internally.
ClearBlade.init({request:req});
var dropbox = Dropbox(collectionName);
dropbox.GetFile(fileName, function(err, resp){
    if(err ){
      resp.error("Failed to GET File from Dropbox: " + JSON.stringify(err));
    }
    resp.success(data);          
}
```
