import React, { useEffect, useState } from "react"
import Loading from "../components/Loading"
import { useParams, Link } from "react-router-dom"

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" //ingat alamat mesti pake https

  //utk useEffect update
  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        //ambil data dari server base id
        const response = await fetch(`${url}${id}`) //cara ini gak bisa mesti sprti dibawah !

        const data = await response.json()
        console.log(data) //didapatkan drinks sbgai element object array maka:
        //ambil datanya mesti dgn data.drinks krn kumpulan aaraynya hanya 1 bah kita cukup kasih
        //data.drinks[0]
        if (data.drinks) {
          const {
            strDrink: name,
            strAlcoholic: info,
            strDrinkThumb: image,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          //ingredienstnya kitajadikan
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          //kita masukan ke cocktail
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail) //update cocktail -nya!
        } else {
          setCocktail(null) //jika error dinullkan saja data array dcocktail
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }
  //jika error /data kosong
  if (!cocktail) {
    return <h2 className='section-title'> no cocktail data receive!</h2>
  } else {
    //cocktail uda di update statenya tinggal d destructive
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name} />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name:</span>
              {name}
            </p>
            <p>
              <span className='drink-data'>category:</span>
              {category}
            </p>
            <p>
              <span className='drink-data'>info:</span>
              {info}
            </p>
            <p>
              <span className='drink-data'>glass:</span>
              {glass}
            </p>
            <p>
              <span className='drink-data'>instructions:</span>
              {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients:</span>
              {ingredients}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleCocktail
