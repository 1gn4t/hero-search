import { useContext } from "react";
import { SearchContext } from "../context/search.context";

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("Use app context within provider!");
  return context;
};
