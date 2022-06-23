import React from "react"
import { Link } from "react-router-dom"

//masuki props dari cocktails yaitu
//id,name,image,info,glass utk render per individu
//jadi tiap2 25 list itu masuk disni dirender brdasar item props diatas
const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          info details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail

/*
hirakri setelah main ->section-> article 

*/
/*
nah jangan lupa utk buat link yg sama ngarah ke individu page cocktail 
yg mana sudah kita buat di App.js router utk per individu cocktail pagenya 
<Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>

      setelahmy jika diklik menuju ke pge singleCocktails
      disingleCocktail page kita gunakan useParams utk amabil link browser ${id}
*/
