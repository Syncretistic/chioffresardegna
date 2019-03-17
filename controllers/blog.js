/**
 * GET /blog
 * User blog page.
 */
exports.getBlog = (req, res) => {
    const unknownUser = !(req.user);

    res.render('blog', {
        title: 'User Blog',
        unknownUser,
    });
};
