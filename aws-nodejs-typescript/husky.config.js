// https://github.com/typicode/husky
module.exports = {
    hooks: {
        'pre-commit': 'lint-staged',
        'pre-push': 'yarn test',
    },
};
