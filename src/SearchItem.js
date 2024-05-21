import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <>
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='Search'>SearchItem</label>
        <input 
        type='text'
        id='search'
        role='searchBox'
        placeholder='search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </form>
    </>
  )
}

export default SearchItem