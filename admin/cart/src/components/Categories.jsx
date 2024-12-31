import { categories } from "../../../data"
import CategoryItem from "./Categoryitem"
import styled from 'styled-components';

const Container=styled.div`
display: flex;
padding: 20px;
height: 40vh;
justify-content: space-between;



    
`
const Categories = () => {
  return (
    
        <Container>
            {categories.map(item=>(

                <CategoryItem item={item} key={item.id}/>
            ))}



        </Container>
      
    
  )
}

export default Categories
