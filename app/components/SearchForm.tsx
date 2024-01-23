// components/SearchForm.tsx
import React from 'react';
interface SearchFormData {
  fullName: string;
  fiscalCode: string;
  vatNumber: string;
}

interface SearchFormProps {
  formData: SearchFormData;
  onSearch: (data: SearchFormData) => string;
  onReset: () => void;
  setFormData: React.Dispatch<React.SetStateAction<SearchFormData>>;
}

const formatInputValue = (value:string) => {
  return value.trim();
}

const SearchForm: React.FC<SearchFormProps> = ({ formData, onSearch, onReset, setFormData }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target;
    setFormData({ ...formData, [name]:formatInputValue(value) });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(formData);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-0">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fullName">
              Nome completo/ Ragione sociale
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                   type="text" 
                   name="fullName" 
                   value={formData?.fullName} 
                   onChange={handleChange} 
                   placeholder="Nome completo o Ragione sociale" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fiscalCode">
              Codice fiscale
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                   type="text" 
                   name="fiscalCode" 
                   value={formData?.fiscalCode} 
                   onChange={handleChange} 
                   placeholder="Codice fiscale" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vatNumber">
              P.IVA
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                   type="text" 
                   name="vatNumber" 
                   value={formData?.vatNumber} 
                   onChange={handleChange} 
                   placeholder="Partita IVA" />
          </div>
        </div>

        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cerca
          </button>
          <button type="button" onClick={onReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
