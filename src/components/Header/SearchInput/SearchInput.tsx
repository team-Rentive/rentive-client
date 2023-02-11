import styled from '@emotion/styled';
import { useCallback } from 'react';

interface SearchProps {
	searchText: string;
	setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const StyledInputBox = styled.div`
	& .search-input {
		width: 15rem;
		height: 2.5rem;
		border: 1px solid #dd9876;
		border-radius: 5px;
		padding: 0.5rem;
	}
`;

function Search({ searchText, setSearchText }: SearchProps) {
	const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
		setSearchText(e.target.value);
	}, []);

	const handleSubmit = useCallback<React.FormEventHandler>(
		(e) => {
			e.preventDefault();

			// 서치 아이템 페이지로 이동하는 함수
		},
		[searchText],
	);

	return (
		<StyledInputBox>
			<form onSubmit={handleSubmit}>
				<input
					className="search-input"
					value={searchText}
					onChange={handleChange}
					placeholder="검색어를 입력해보세요:)"
				/>
			</form>
		</StyledInputBox>
	);
}

export default Search;
