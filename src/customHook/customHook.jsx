import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("")
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if(!res.ok) {
          throw new Error("Could not fetch data")
        }
        return res.json()
      })
      .then((data) => {
        setCountries(data)
        setError(null)
       })
       .catch((err) => {
         setError(err.message)
         setCountries([])
        })
  }, [url])
  
  return { search, setSearch, countries, region, setRegion, error }
}

export default useFetch