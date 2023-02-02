import { useMemo, useState } from 'react';

export const useItemsSearch = (items) => {
	const [search, setSearch] = useState('');
	const lowercaseSearch = useMemo(
		() => search.toLocaleLowerCase().trim(),
		[search]
	);
	const results = useMemo(
		() =>
			items.filter(({ name }) =>
				name.toLocaleLowerCase().includes(lowercaseSearch)
			),
		[items, lowercaseSearch]
	);

	return {
		results,
		search,
		searchBarProps: {
			onChange: ({ currentTarget }) => setSearch(currentTarget.value),
			value: search,
		},
		setSearch,
	};
};
