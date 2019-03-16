/**
 * GET /userblog
 * User blog page.
 */
exports.getBlog = (req, res) => {
    const unknownUser = !(req.user);

    res.render('userblog', {
        title: 'User Blog',
        unknownUser,
    });
};
