

/**
 * DropBox is a file Manager Service Software
 * @typedef {Object} DropboxLib
 * @param {string} collectionName
 * @param {Object} cbInitInfo
 * 
 * @example 
 * var cbInitInfo = req; // Required: req.systemKey, req.systemSecret
 * var dropbox = DropboxLib(collectionName, cbInitInfo);
 * 
 */
function DropboxLib(collectionName, cbInitInfo){
    if(!cbInitInfo || typeof cbInitInfo !== 'object'){
        throw new Error('Error with Initializing into ClearBlade System');
    }
    ClearBlade.init({request:cbInitInfo});
    
    function _isValidString(str) {
        return str && (typeof str === 'string');
    }
    
    /**
     * This method gets the url from the fileName and fetches it's content from Dropbox
     * @function GetFile
     * @memberof DropboxLib
     * @param {string} fileName
     * @param {callback} callback
     * 
     * @example  
     * var dropbox = DropboxLib(collectionName,cbInitInfo);
     * dropbox.GetFile(fileName, function(err, resp){
     *     if(err ){
     *       resp.error("Failed to GET File from Dropbox: " + JSON.stringify(err));
     *     }
     *     resp.success(data);          
     * }
     * 
     */
    function GetFile(fileName, callback){
        if(!_isValidString(fileName)){
            throw new Error('FileName must be set before trying to get it from Dropbox');
        }
        
        var query = ClearBlade.Query({collectionName:collectionName}).equalTo("filename", fileName);
        
        query.fetch(function(err, data){
            if(err ||  ! data || data.TOTAL !== 1){
                throw new Error("Failed to find filename: " + fileName + " due to error: " + JSON.stringify(data));
            }
            var url = data.DATA[0].url;
            var http = Requests();
            http.get({url}, callback);
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

