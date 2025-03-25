import Batsman from './Batsman'
import Users from './Users'
import Counter from './counter'
import Amount from './counter'
import Friends from './Friends'
import Music from './Music'
import Posts from './Posts'
import './App.css'
import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchMusic = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();

}
function App() {
  const postsPromise = fetchPosts();
  const bestPromise = fetchMusic();
  const friendsPromise = fetchFriends();
  const heartFall = () => {
    alert('love me')
  }
  const handleClick = () => {
    alert('click me')
  }
  const handCall = () => {
    alert('click me')
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Johnny is coming ctg..</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Suspense fallback={<h3>I LOVE MUSIC...</h3>}>
        <Music bestPromise={bestPromise}></Music>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <Amount></Amount>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handCall()}>Click me 4</button>
      <button onClick={() => handleAdd5(10)}>Click add 5</button>
      <button onClick={() => heartFall()}>MEOW🥲</button>
    </>
  )
}

export default App
