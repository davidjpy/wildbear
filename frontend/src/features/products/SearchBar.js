import { useState, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const SearchBar = () => {

    const inputRef = useRef();
    const [search, setSearch] = useState('');
    // const [suggestionMode, setSuggestionMode] = useState(true);
    const [listExpand, setListExpand] = useState(false);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleEmptySearch = () => {
        setSearch('');
        inputRef.current.focus();
    }

    // const toggleSuggestionMode = () => {
    //     setSuggestionMode(!suggestionMode);
    // }

    const toggleListExpand = () => {
        setListExpand(!listExpand);
    }

    return (
        <div className='searchbar'>
            <div className='searchbar__flexbox'>
                <div onClick={toggleListExpand} className='searchbar__label searchbar__label--start'>
                    <HiMenu className=' searchbar__icons searchbar__icons--menu' />
                </div>
                <div className={listExpand ? 'searchbar__dropdown searchbar__dropdown--active' : 'searchbar__dropdown'}>
                    <div className='searchbar__list'>
                        Turn Off Suggestion
                    </div>
                </div>
                <div className='searchbar__label searchbar__label--middle'>
                    <FaSearch className='searchbar__icons searchbar__icons--search' />
                </div>
                <input type='text' ref={inputRef} autoFocus onChange={(e) => handleSearchChange(e)} value={search} className='searchbar__input' placeholder='Search for products' />
                <div onClick={handleEmptySearch} className='searchbar__label searchbar__label--end'>
                    <FaTimes className='searchbar__icons' />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;