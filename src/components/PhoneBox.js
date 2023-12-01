import PhoneList from './PhoneList';
import SearchBar from './SearchBar';

export default function PhoneBox(
    {
        Delete,
        UpdateData,
        keyword,
        setKeyword,
        item,
        setItem,
        sort,
        setSort,
        isLoading,
        setIsLoading,
        page,
        setPage
    }
) {
    return (
        <>
            <SearchBar keyword={keyword} setKeyword={setKeyword} sort={sort} setSort={setSort} />
            <PhoneList
                UpdateData={UpdateData}
                Delete={Delete}
                item={item}
                setItem={setItem}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                page={page}
                setPage={setPage}
            />
        </>
    )
}