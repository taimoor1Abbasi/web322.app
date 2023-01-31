const file = require('fs');    
var posts = [];
var categories = [];

exports.initialize = () => {
    return new Promise ((resolve, reject) => {
        file.readFile('./data/posts.json', (err,data) => {
            if (err) {
                reject ('unable to read file');
            }
            else {
                posts = JSON.parse(data);
            }
        });

        file.readFile('./data/categories.json', (err,data)=> {
            if (err) {
                reject ('unable to read file');
            }
            else {
                categories = JSON.parse(data);
            }
        })
        resolve();
    })
};

exports.getAllPosts = () => {
    return new Promise ((resolve,reject) => {
        if (posts.length == 0) {
            reject('no results returned');
        }
        else {
            resolve(posts);
        }
    })
};

exports.getPublishedPosts = () => {
    return new Promise ((resolve, reject) => {
        var publish = posts.filter(posts => posts.isPublished == true);
        if (publish.length == 0) {
            reject('no results returned');
        }
        resolve(publish);
    })
};

exports.getCategories = () => {
    return new Promise((resolve,reject) => {
        if (categories.length == 0) {
            reject ('no results returned');
        }
        else {
            resolve (categories);
        }
    })
};
