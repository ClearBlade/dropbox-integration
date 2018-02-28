
# ipm package: dropbox-integration

## Overview

Provide role-based authorization for Dropbox

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

### - Out of the Box

This package contains an example S3 Object to fetch, and can be run upon a fresh install. Run `FetchDropboxAsset`

### - Integration with Developer's S3 Buckets

1. Create account: https://www.dropbox.com/
2. Upload asset to provide access control upon
3. Place assets URLs in `dropbox_resources` collection
4. Can fetch file contents via the `FetchDropboxAsset` code service

## API

<a name="FetchDropboxAsset"></a>

#### FetchDropboxAsset(filename) ⇒ <code>string</code>
Fetch the contents of an access-controlled Dropbox Resource

**Kind**: global function
**Returns**: <code>string</code> - content - contents of Dropbox hosted file

  
| Param | Type | Description |  
|:---:|:---:|:---:|  
| filename | <code>string</code> | filename associated with a row in dropbox_resources collection |  


## Usage

Call `FetchDropboxAsset` as an Authenticated User

### Code Services

`FetchDropboxAsset` - Fetch the contents of an access-controlled Dropbox Resource

### Collections

`dropbox_resources` - Stores key/value pairs of filenames and their respective URLs in Dropbox

### ...

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
