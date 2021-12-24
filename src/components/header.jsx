import styled from 'styled-components'


function Header(){
 const H1 = styled.h1`
 font-family: sans-serif;
 letter-spacing: .2em
 `

 return(
  <div className="">
   <H1 className="text-white text-2xl uppercase font-bold">We're launching soon'</H1>
  </div>
 )
}

export default Header