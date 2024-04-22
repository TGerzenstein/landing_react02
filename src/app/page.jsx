"use client";

import React from 'react';
import Header from '/components/Header';
import SearchComponent from '../../components/SearchComponent';
import { useState } from 'react';


function HomePage() {
    const [searchText, setSearchText] = useState("");

    function handleSearch(text) {
      setSearchText(text);
    }

  return (
    <div>
      <Header searchText={searchText}  handleSearch={handleSearch} />
      <SearchComponent searchText={searchText} />
    </div>
  )
}

export default HomePage
