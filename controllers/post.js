const Post = require('../models/Post');

/**
 * GET /post/new
 * Create new blog post page.
 */
exports.getBlog = (req, res) => {
    const unknownUser = !(req.user);

    res.render('blog', {
        title: 'User Blog',
        unknownUser,
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
    req.assert('content', 'Your blog post is empty!').trim().isEmpty();
    req.assert('title', 'You need a title!').trim().isEmpty();
    const errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/newpost');
    }
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.user
    });
    post.save((err) => {
        if (err) { return next(err); }
        req.flash('success', { msg: 'Success! New post created!' });
            res.redirect('/blog');

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