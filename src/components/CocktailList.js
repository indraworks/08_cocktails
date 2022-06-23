import React from "react"
import Cocktail from "./Cocktail"
import Loading from "./Loading"
import { useGlobalContext } from "../context"
const CocktailList = () => {
  //menampilkan state cocttails smuanya atau loading jika data blum masuk dari server
  const { cocktails, loading } = useGlobalContext()
  //console.log(cocktails)
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <h2 className='section-title'>No cocktails criteria found!</h2>
  }
  return (
    <div>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default CocktailList
