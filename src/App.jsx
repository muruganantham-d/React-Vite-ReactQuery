import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styled from 'styled-components';
import {useQuery} from '@tanstack/react-query'
import { getPosts } from './service';

const Container = styled.div`
display:flex;
flex-direction: column;
align-item: center;
margin-top:50px;
`

const Title = styled.h1`
font-size: 36px;
font-weight: bold;
margin-bottom: 20px;
`

const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const ListItem = styled.div`
background-color: #f5f5f5;
border-radius: 5px;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
padding: 10px;
margin-bottom: 10px;
`

function App() {
  
   const [selectedPost, setSelectedPost] = useState('');

  const {isLoading, error, data} = useQuery({
     querykey: ["posts"],
     queryFn: getPosts,
  });

  if(isLoading) return <p>...Loading data</p>;

  if (error){
    return <p>Error fetching data{error.message}</p>
  }
  return (
   <Container>
      <Title>List of Post React Query{selectedPost}</Title>
      <List>
        {
           data.map((item) => (
            <ListItem key={item.id} onClick={() => setSelectedPost(item.id)}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </ListItem>
          ))
        }
      </List>
   </Container>


  )
}

export default App
