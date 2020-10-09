module.exports = {
	rules: {
		'body-leading-blank': [1, 'always'],
		'footer-leading-blank': [1, 'always'],
		'subject-empty': [2, 'never'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'docs',
				'feat',
				'fix',
				'refactor',
				'revert',
				'test',
			],
		],
	},
};