"use client";
// pages/Search.tsx
import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResultCard from '../components/SearchResultCard';
import rawData from '../../public/data.json';
import Footer from '../components/Footer';

interface SearchResult {
  fullname: string;
  address?: string;
  fiscalCode?: string;
  vatNumber?: string;
  pecAddress?: string;
  uniqueCode?: string;
  startDate?: string;
  endDate?: string;
}

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [formData, setFormData] = useState({ fullName: '', fiscalCode: '', vatNumber: '' });
  const [isSearchDone,setIsSearchDone] = useState(false)

  const handleSearch = (formData: { fullName: string; fiscalCode: string; vatNumber: string }) => {
    if (!formData.fullName && !formData.fiscalCode && !formData.vatNumber) {
      alert("Per favore, compila almeno uno dei campi di ricerca.");
      return;
    }
  
   
    const filteredResults = rawData.filter((item) => {
      return (
        (formData.fullName && (item as unknown as {
          fullname: any; name: string 
}).fullname?.includes(formData.fullName)) ||
        (formData.fiscalCode && item.fiscalCode?.includes(formData.fiscalCode)) ||
        (formData.vatNumber && item.vatNumber?.includes(formData.vatNumber))
      );
    }).sort((a,b)=> a.fullname.localeCompare(b.fullname));
    setSearchResults(filteredResults as unknown as SearchResult[]);


    if(filteredResults.length === 0){
      setIsSearchDone(true)
    } else {
      setSearchResults(filteredResults as unknown as SearchResult[]);
      setIsSearchDone(false);
    }
  };

  const handleReset = () => {
    setSearchResults([]);
    setFormData({ fullName: '', fiscalCode: '', vatNumber: '' });
    setIsSearchDone(false);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Ricerca</h1>
      <SearchForm formData={formData} setFormData={setFormData} onSearch={handleSearch} onReset={handleReset} />
      <div className="flex flex-col items-center justify-center mt-4">
      {isSearchDone && searchResults.length === 0 && (
        <p className='text-center mt-12'>Nessun risultato trovato per i criteri di ricerca inseriti.</p>
      )}
        {searchResults.map((result, index) => (
          <SearchResultCard fullname={''} key={index} {...result} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
