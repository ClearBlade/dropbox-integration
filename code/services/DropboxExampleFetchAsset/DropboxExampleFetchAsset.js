/**
 * Fetch the contents of an access-controlled Dropbox Resource
 * 
 * @param {string} fileName - filename associated with a row in dropbox_resources collection
 * @returns {string} content - contents of Dropbox hosted file
 */
function DropboxExampleFetchAsset(req, resp) {
    const COLLECTION = "dropbox_resources";

    if (!req.params.fileName || req.params.fileName === "") {
        req.params.fileName = "dropbox.txt";
    }

    const fileName = req.params.fileName;
    ClearBlade.init({ request: req });

    var dropbox = Dropbox(COLLECTION);

    dropbox.GetFile(fileName, function (err, data) {
        if (err) {
            resp.error("Failed to GET File from Dropbox: " + JSON.stringify(err));
        }
        resp.success(data);
    });
}