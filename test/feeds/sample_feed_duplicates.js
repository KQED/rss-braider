var feed = {
    "feed_name"         : "test file feed",
    "default_count"     : 1,
    "no_cdata_fields"  : ['description'],
    "plugins"           : ['kqed', 'add_content_encoded_block', 'wfw_slash_comments', 'add_media_thumbnail'],
    "meta" : {
        "title": "Test File Feed",
        "description": "This feed comes from a file",
        // "url": "http://example.com/feed/",
    },
    'custom_namespaces'   : {
        "slash"     : "http://purl.org/rss/1.0/modules/slash/",
        "media"     : "http://search.yahoo.com/mrss/",
        "ev"        : "http://purl.org/rss/2.0/modules/event/",
        "sy"        : "http://purl.org/rss/1.0/modules/syndication/",
        "wfw"       : "http://wellformedweb.org/CommentAPI/"
    },
    "sources" : [
        {
            "name"              : "sample_feed",
            "count"             : 1,
            "file_path"         : __dirname + "/../input_files/sample_feed_duplicates.xml",
            "fullname"          : "A Sample Feed"

        },

    ]
};
exports.feed = feed;