
/**
 * GET /newpost
 * Create new blog post page.
 */
exports.getNewPost = (req, res) => {
    const unknownUser = !(req.user);

    res.render('newpost', {
        title: 'New Post',
        unknownUser,
    });
};
