module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
	rules: {
		'prefer-const': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'warn',
		'no-console': 'warn',
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/prefer-default-export': 'off',
		// default props를 설정하지 않았을 때 에러를 반환하는 기능 제거
		'react/require-default-props': 'off',
		// airbnb eslint의 import/extensions 조건을 해제하는 옵션
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				json: 'never',
				'': 'never',
			},
		],
	},
	parserOptions: {
		project: ['./tsconfig.json'], // Specify it only for TypeScript files
		createDefaultProgram: true,
	},
};
