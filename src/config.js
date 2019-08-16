E = module.exports = {};

if (process.argv[2]) { // DEBUG
    E.LOGGING_CHANNEL = '545120636603990027';
    E.MODERATOR_ROLES = [
        "396824570604027904", 
        "298306453473853452",
        "296803054403977216",
        "298460365950550016"
    ];
    E.VISITOR_ROLE = "549039528321482752",
    E.REGULAR_ROLE = "549039578686947338",
    E.BLEND_CHANNEL = "502691951750021131",
    E.RDZIP_WEBHOOK_ID = process.env.DEBUG_RDZIP_WEBHOOK_ID,
    E.RDZIP_WEBHOOK_TOKEN = process.env.DEBUG_RDZIP_WEBHOOK_TOKEN
} else { // RELEASE
    E.LOGGING_CHANNEL = '362784581344034816';
    E.MODERATOR_ROLES = [
        "298306453473853452",
        "296803054403977216",
        "298460365950550016"
    ];
    E.VISITOR_ROLE = "517143450391543818",
    E.REGULAR_ROLE = "517143533853868074",
    E.BLEND_CHANNEL = "424455939874095104",
    E.RDZIP_WEBHOOK_ID = process.env.RELEASE_RDZIP_WEBHOOK_ID,
    E.RDZIP_WEBHOOK_TOKEN = process.env.RELEASE_RDZIP_WEBHOOK_TOKEN
}