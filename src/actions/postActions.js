import { FETCH_POSTS } from './types';

// 分发操作
// export function fetchPosts() {
// 	return function (dispatch) {
// 		fetch('http://jsonplaceholder.typicode.com/posts')
// 			.then((res) => res.json())
// 			.then((posts) =>
// 				dispatch({
// 					type: FETCH_POSTS,
// 					payload: posts,
// 				})
// 			);
// 	};
// }

export const fetchPosts = () => (dispatch) => {
	fetch('http://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((posts) =>
			dispatch({
				type: FETCH_POSTS,
				payload: posts,
			})
		);
};
