import { useContext, useEffect, useState, createContext } from "react";
// import PropTypes from "prop-types";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

// CitiesProvider.propTypes = {
//   children: PropTypes.object,
// };

// eslint-disable-next-line react/prop-types
const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

function useCities() {
  const context = useContext(CitiesContext);

  // if we try to access this where the component is not a child of the provider.
  if (context === undefined)
    throw new Error("CitiesContext was used outsie the cities provider.");
  return context;
}

export { CitiesProvider, useCities };
