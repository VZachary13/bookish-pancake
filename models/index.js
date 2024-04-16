const CommentTag = require('./CommentTag');
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    through: {
        model: CommentTag,
        unique: true,
    },
});

Comment.belongsTo(Post, {
    through: {
        model: CommentTag,
        unique: true,
    },
});

module.exports = {
    CommentTag,
    Comment,
    Post,
    User,
};