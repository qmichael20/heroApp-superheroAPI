import queryString from "query-string";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { HeroList } from "../hero/HeroList";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [{ searchText }, handleInputChange] = useForm({
    searchText: q,
  });

  const { data, loading } = useFetch(`search/${q}`);

  const heroesFilters = data?.results ? data.results : [];

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="m-2">
      <form onSubmit={handleSearch}>
        <div className="row mt-3">
          <div className="col-6">
            <input
              type="text"
              placeholder="Search for your favorite hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-6">
            <button className="btn btn-outline-primary" type="submit">
              Buscar
            </button>
          </div>
        </div>
      </form>

      <div className="mt-4">
        <h4>Results</h4>
        <hr />
        {q === "" ? (
          <div className="alert alert-info text-center" role="alert">
            Search for your favorite hero...
          </div>
        ) : (
          heroesFilters.length === 0 &&
          loading === false && (
            <div className="alert alert-danger text-center" role="alert">
              No heroes have been found with : {q}
            </div>
          )
        )}

        {loading === true && q !== "" && (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border text-primary m-5"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {heroesFilters.length > 0 && <HeroList heroes={heroesFilters} />}
      </div>
    </div>
  );
};
