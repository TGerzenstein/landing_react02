"use client";

import { useState } from 'react';
import React from 'react'
import Header from '../../../components/Header'
import SearchComponent from '../../../components/SearchComponent';


function ItemsPage() {
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

export default ItemsPage
