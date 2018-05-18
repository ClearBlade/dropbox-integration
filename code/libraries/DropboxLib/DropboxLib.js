

/**
 * DropBox is a file Manager Service Software
 * @typedef {Object} DropboxLib
 * @param {string} collectionName
 * 
 * @example 
 * var dropbox = DropboxLib(collectionName);
 * 
 */
function DropboxLib(collectionName) {


    function _isValidString(str) {
        return str && (typeof str === 'string');
    }

    /**
     * 
     * @typedef {Object} GetFile
     * @memberof DropboxLib
     * @param {string} fileName
     * @param {callback} callback
     * 
     * @example  
     * var dropbox = DropboxLib(collectionName);
     * ClearBlade.init({request:req}); // Where request has systemKey and systemSecret information
     * dropbox.GetFile(fileName, function(err, resp){
     *     if(err ){
     *       resp.error("Failed to GET File from Dropbox: " + JSON.stringify(err));
     *     }
     *     resp.success(data);          
     * }
     * 
     */
    function GetFile(fileName, callback) {
        if (!_isValidString(fileName)) {
            throw new Error('FileName must be set before trying to get it from Dropbox');
        }

        // Fails if user does not init into ClearBlade in the service.
        var query = ClearBlade.Query({ collectionName: collectionName }).equalTo("filename", fileName);

        query.fetch(function (err, data) {
            if (err || !data || data.TOTAL !== 1) {
                throw new Error("Failed to find filename: " + fileName + " due to error: " + JSON.stringify(data));
            }
            var url = data.DATA[0].url;
            var http = Requests();
            http.get({ url }, callback);
        });
    }

    return {
        GetFile
    };

    /**
     * This callback is displayed as part of sgEmail.
     * @callback callback
     * @param {Object} err
     * @param {Object} resp
     */
}