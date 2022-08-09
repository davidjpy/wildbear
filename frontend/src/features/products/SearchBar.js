import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='searchbar'>
            <p>WildBear</p>
            <div className='searchbar__flexbox'>
                <div className='searchbar__label searchbar__label--start'>
                    <HiMenu className=' searchbar__icons searchbar__icons--menu' />
                </div>
                <div className='searchbar__label searchbar__label--middle'>
                    <FaSearch className='searchbar__icons searchbar__icons--search' />
                </div>
                <input type='text' onChange={(e) => handleSearchChange(e)} className='searchbar__input' placeholder='Search for products' /> 
                <div onClick={() => console.log(search)} className='searchbar__label searchbar__label--end'>
                    <FaTimes className='searchbar__icons' />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;