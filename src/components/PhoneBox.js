import PhoneList from './PhoneList';
import SearchBar from './SearchBar';

export default function PhoneBox(
    {
        Delete,
        UpdateData,
        user,
        setUser,
        item,
        setItem
    }
) {
    return (
        <>
            <SearchBar />
            <PhoneList
                UpdateData={UpdateData}
                Delete={Delete}
                item={item}
                setItem={setItem}
            />
        </>
    )
}