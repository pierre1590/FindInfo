// components/SearchResultCard.tsx
interface SearchResultCardProps {
    fullname: string;
    address?: string;
    fiscalCode?: string;
    vatNumber?: string;
    pecAddress?: string;
    uniqueCode?: string;
    startDate?: string;
    endDate?: string;
  }
  
  const formatDate = (dateString: string): string => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };


  const SearchResultCard: React.FC<SearchResultCardProps> = ({
    fullname,
    address,
    fiscalCode,
    vatNumber,
    pecAddress,
    uniqueCode,
    startDate,
    endDate,
  }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mb-4 transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="font-bold text-xl mb-2">{fullname}</h3>
        <ul>
          {address && <li><strong>Indirizzo:</strong> {address}</li>}
          {fiscalCode && <li><strong>Codice Fiscale:</strong> {fiscalCode}</li>}
          {vatNumber && <li><strong>P. IVA:</strong> {vatNumber}</li>}
          {pecAddress && <li><strong>Indirizzo PEC:</strong> {pecAddress}</li>}
          {uniqueCode && <li><strong>Codice Univoco:</strong> {uniqueCode}</li>}
          {startDate && <li><strong>Data Inizio Attività:</strong> {formatDate(startDate)}</li>}
          {endDate && <li><strong>Data Fine Attività:</strong> {endDate}</li>}
        </ul>
      </div>
    );
  };
  
  export default SearchResultCard;
  