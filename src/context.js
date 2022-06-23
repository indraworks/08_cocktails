import React, { useState, useContext, useEffect, Children } from "react"
import { useCallback } from "react"
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
//yg ingat nuat AppContext ,AppProvider,
//buat Global Context,
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  //masukan atau set smua state di context dan lakukan pasing props agar bisa di baca oleh anak component
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("a")
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = async () => {
    //nah kit aset loadaing sellau true wlaupun set awal sudah ada sebab kita kan gunaka useEfect
    //yg mana update stiap perubahan makanya kita set awal2 dgn true  sdang loading data blum masuk
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      //console.log(data)
      const { drinks } = data
      if (drinks) {
        //jika ada data drinks maka kit adestructive  dan kita maping nah kira return degnan
        const newCocktails = drinks.map((item) => {
          //nama object yg baru supaya lebih enak sbb
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])
  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
//mggunakan custom nama useGlobalContext
export const useGlobalContext = () => {
  return useContext(AppContext)
}
// jangan lupa export keduanya
export { AppContext, AppProvider }

/*
kita buat function FetchDrink utk ambil cocktails bersaarkan name tadi '
ygsiatnya dinamaik nnti di inputkan dalam form smatara kita dari contexr 
kirim function yg kita buat jadi dipanggil dari component inputearch form dgn dipstacth nantinya 


*/
