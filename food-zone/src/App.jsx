import Navigation from './components/Navigation';
import styled from 'styled-components';
function App() {

  return (
    <Container>
      <TopContainer>
         <div className='logo'>
        <h1>FOOD ZONE</h1>
        </div>
        <div className='search-bar'>
          <input type="text" placeholder='Search Food' />
        </div>
      </TopContainer>
     
    </Container>


  )
}

export default App

const Container=styled.div`
  background-color: #ba4343;

`
const TopContainer=styled.div`
  .search-bar{
   
  }

`
