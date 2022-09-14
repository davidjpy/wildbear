import { useState, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';

const SearchBar = ({ leftMenuRef, handleOpenLeftMenu, handleCloseLeftMenu, searchParams, setSearchParams, closeMenuRef }) => {

    const inputRef = useRef();
    const [listExpand, setListExpand] = useState(false);

    const handleSearchChange = (e) => {
        setSearchParams({ search: e.target.value });
    }

    const handleEmptySearch = () => {
        setSearchParams({ search: '' });
        inputRef.current.focus();
    }

    const toggleListExpand = () => {
        setListExpand(!listExpand);
    }

    const toggleLeftMenu = () => {
        if (leftMenuRef.current.style.left === '-250px') {
            handleOpenLeftMenu();
        } else {
            handleCloseLeftMenu();
        }
    }

    return (
        <div className='searchbar'>
            <div ref={closeMenuRef} onClick={toggleLeftMenu} className='searchbar__leftmenu'>
                <AiOutlineMenuUnfold className='searchbar__icons searchbar__icons--leftmenu' />
            </div>
            <div className='searchbar__flexbox'>
                <div onClick={toggleListExpand} className='searchbar__label searchbar__label--start'>
                    <HiMenu className='searchbar__icons searchbar__icons--menu' />
                </div>
                <div className={listExpand ? 'searchbar__dropdown searchbar__dropdown--active' : 'searchbar__dropdown'}>
                    <div className='searchbar__list'>
                        Turn Off Suggestion
                    </div>
                </div>
                <div className='searchbar__label searchbar__label--middle'>
                    <FaSearch className='searchbar__icons searchbar__icons--search' />
                </div>
                <input type='text' ref={inputRef} autoFocus onChange={(e) => handleSearchChange(e)} value={searchParams.get('search')} className='searchbar__input' placeholder='Search for products' />
                <div onClick={handleEmptySearch} className='searchbar__label searchbar__label--end'>
                    <FaTimes className='searchbar__icons' />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;