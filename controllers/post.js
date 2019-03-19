const Post = require('../models/Post');
/**
 * GET /post/new
 * Create new blog post page.
 */
exports.getBlog = (req, res) => {
    const unknownUser = !(req.user);
    if (unknownUser){
        res.redirect('/');
    }
    const userId = (req.params.id) ? req.params.id : req.user.id;
    Post.find({author: userId})

    res.render('blog', {
        title: 'User Blog',
        userBlog,
    });
};

/**
 * GET /post/new
 * Create new blog post.
 */
exports.getNewPost = (req, res) => {
    const unknownUser = !(req.user);

    res.render('newpost', {
        title: 'New Post',
        unknownUser,
    });
};

exports.postNewPost = (req, res, next) => {
    req.sanitizeBody('content');
    req.sanitizeBody('title');
    // req.assert('content', 'Your blog post is empty!').
    // req.assert('title', 'You need a title!').trim().isNotEmpty();
    const errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        req.flash('error', errors);
        return res.redirect('/post/new');
    }
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.user
    });

    post.save((err) => {
        console.log('dove sono');
        if (err) { return next(err); }
        req.flash('success', { msg: 'Success! New post created!' });
        res.redirect('/post/new');
    });
    // User.findById(req.user.id, (err, user) => {
    //     if (err) { return next(err); }
    //     user.email = req.body.email || '';
    //     user.profile.name = req.body.name || '';
    //     user.profile.gender = req.body.gender || '';
    //     user.profile.location = req.body.location || '';
    //     user.profile.website = req.body.website || '';
    //     user.save((err) => {
    //         if (err) {
    //             if (err.code === 11000) {
    //                 req.flash('errors', { msg: 'The email address you have entered is already associated with an account.' });
    //                 return res.redirect('/account');
    //             }
    //             return next(err);
    //         }
    //         req.flash('success', { msg: 'Profile information has been updated.' });
    //         res.redirect('/account');
    //     });
    // });
};
