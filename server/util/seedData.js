var User = require('../api/users/userModel');
var Post = require('../api/posts/postModel');
var Category = require('../api/category/categoryModel');
var _ = require('lodash');


var users = [
    { username: 'Jimmylo', password: 'test' },
    { username: 'Xoko', password: 'test' },
    { username: 'katamon', password: 'test' }
];

var categories = [
    { name: 'intros' },
    { name: 'angular' },
    { name: 'UI/UX' }
];

var posts = [
    { title: 'Learn angular 2 today', text: 'Angular to is so dope' },
    { title: '10 reasons you should love IE7', text: 'IE7 is so amazing' },
    { title: 'Why we switched to Go', text: 'go is dope' }
];

var createDoc = function(Model, doc) {
    // console.log('MODEL', Model)
    // console.log('doc', doc)
    return new Promise(function(resolve, reject) {
        new Model(doc).save(function(err, saved) {
            // console.log('SAVED', saved)
            return err ? reject(err) : resolve(saved);
        });
    });
};

var cleanDB = function() {
    var cleanPromises = [User, Category, Post]
        .map(function(model) {
            return model.remove().exec();
        });
    return Promise.all(cleanPromises);
}

var createUsers = function(data) {

    var promises = users.map(function(user) {
        return createDoc(User, user);
    });

    return Promise.all(promises)
        .then(function(users) {
            return _.merge({ users: users }, data || {});
        });
};

console.log('createUsers', createUsers)

var createCategories = function(data) {
    console.log('CATEGORIES data', data)
    console.log('categories', categories)
    var promises = categories.map(function(category) {
        console.log('eachCATEGORY', category)

        return new Promise(function(resolve, reject) {
            new Category(category).save(function(err, saved) {
                console.log('CATEGORY SAVED', saved)
                return err ? reject(err) : resolve(saved);
            });
        });


        // return createDoc(Category, category);
    });
    console.log('CATEGORIES PROMISES', promises)
    return Promise.all(promises)
        .then(function(categories) {
            console.log('CATEGORIES IN PROMISE', categories)
            return _.merge({ categories: categories }, data || {});
        });
};

var createPosts = function(data) {
    var addCategory = function(post, category) {
        post.categories.push(category);

        return new Promise(function(resolve, reject) {
            post.save(function(err, saved) {
                return err ? reject(err) : resolve(saved)
            });
        });
    };

    var newPosts = posts.map(function(post, i) {
        post.author = data.users[i]._id;
        return createDoc(Post, post);
    });

    return Promise.all(newPosts)
        .then(function(savedPosts) {
            return Promise.all(savedPosts.map(function(post, i) {
                return addCategory(post, data.categories[i])
            }));
        })
        .then(function() {
            return 'Seeded DB with 3 Posts, 3 Users, 3 Categories';
        });
}



cleanDB()
    .then(createUsers())
    .then(createCategories())
    //     // .then(createPosts)
    .catch(function(err) {
        console.log('ERR', err)
    });