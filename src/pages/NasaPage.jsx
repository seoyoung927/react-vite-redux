import { useState } from "react";
import GetData from "../components/GetData";

function NasaPage() {
    const [inputQuery, setInputQuery] = useState("apollo");
    const [query, setQuery] = useState("apollo");

    const handleInputQueryChange = (e) => {
        setInputQuery(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(inputQuery);
        // GetData 컴포넌트는 query 상태를 사용하여 자동으로 새로운 데이터를 가져옵니다.
    }
    
    return <>
        <form onSubmit={handleSubmit}>
        <label>
          Search Query:
          <input type="text" value={inputQuery} onChange={handleInputQueryChange} />
        </label>
        <button type="submit">Search</button>
      </form>

      <GetData query={query} />
    </>    
}

export default NasaPage;
