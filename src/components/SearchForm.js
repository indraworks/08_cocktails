import React from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  //pake useRef masih ingtkan ?/krn useref itu diambil pada saat current valuenya
  //kita masukan di input jadi ref= {searchValue }
  //dan updatenya menggunakan useEffect beda dgn useState yg update dari onChange
  const searchValue = React.useRef("")
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.prevetDefault()
  }
  return (
    <div>
      <section className='section search'>
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>search your favorite coctail</label>
            <input
              type='text'
              id='name'
              ref={searchValue}
              onChange={searchCocktail}
            />
          </div>
        </form>
      </section>
    </div>
  )
}

export default SearchForm
/*
jadi gini bisa liat di context,js ada setseractTeem 
nah setipa user dia tulis di input dia mau invoke si state setsearchTerm yg ada di context 
dan sudah kita tangkap /share melalui useGlobal context
nah stiap dia change tsb melalui useEfect akan akibatkan setSeractterm bekerja 
makana kita buat function searchCocktail 
nah disini useRef valuenya itu kan diisi melalui valriable searchvalue 
maka state utk ubah searchTerm menajdi setsearchTem(searchvalue )
karena nilai input form tadi dimasukan ke searchvalue jadi nilai inilah yg bakal 
diset ke searchTerm di context!
ingat searchValue.current.value karena userRef yg diambill adalah current value!

nah supaya gak stiap ngetik berubah2 langsung 
maka gunakan on submit dgn prevernt default utk tunda cegah update terus 

*/
