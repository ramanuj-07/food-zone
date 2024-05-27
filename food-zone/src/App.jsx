
import styled from 'styled-components';
function App() {

  return (
    <Container>

      <TopContainer>
        <div className='logo'>
          <Box>  <h1>FOOD ZONE</h1> </Box>
        </div>
        <div className='searchBar'>
          <input type="text" placeholder='Search Food' />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>BreakFast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>

      </FilterContainer>

      <FoodCardsContainer>
        <FoodCard>

        </FoodCard>
      </FoodCardsContainer>

    </Container>


  )
}

export default App;

const FoodCard = styled.div`

`;

const FoodCardsContainer=styled.section `
  background-image: url("/bg.png");
  background-size:cover;
  height: calc(100vh - 180px);
  position: relative;
`
const FilterContainer = styled.div`
 justify-content:center;
 display:flex;
 gap:40px;
padding-bottom:10px;

`
const Button = styled.button`
  background-color:transparent;
  color: #e4d5d5;
  border:none;
  cursor:pointer;
  font-size:17px;
    &:hover{
      color:white;
    }

`
const Container = styled.div`
background-image: linear-gradient( 113.9deg,  rgba(241,106,56,1) 13%, rgba(213,32,39,1) 48.8%, rgba(170,65,39,1) 85.9% );
  max-width:1500px;
  margin:0 auto;
  
`
const TopContainer = styled.div`
  min-height: 150px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-right:40px;
  .logo{
  padding-left: 40px;
  }
  .searchBar{
    input{
      background-color:transparent;
      height:50px;
      width:250px;
      font-size:20px;
      color:red;
      background:white;
      border-radius: 10px;
      border:none;
      padding-left:10px;
    }
  }  


`
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 250px;
  border: 1px black;
  background-color: #bfe3e3;
  border-radius:24px;
`
