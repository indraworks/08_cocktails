import React from "react"
//utk home meang ada 2 component dari vambar contoh
//bagian searchForm dan bagian coctaillist
import SearchForm from "../components/SearchForm"
import CocktailList from "../components/CocktailList"
const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
