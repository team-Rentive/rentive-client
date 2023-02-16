import axios from 'axios';

type AnyOBJ = { [key: string]: any };

// const BASE_URL = `39.118.50.38:400`;

export async function fetcher({
	method,
	path,
	params = {},
	body = {},
}: {
	method: 'get' | 'post' | 'put' | 'delete' | 'patch';
	path: string;
	params?: AnyOBJ;
	body?: AnyOBJ;
}) {
	try {
		const url = `${path}`;

		const { data } = await axios({
			url,
			method,
			data: { body },
			params: { params },
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		return data;
	} catch (err) {
		console.error(err);

		return null;
	}
}
