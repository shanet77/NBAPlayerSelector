import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './PlayerCards.css'
import database from './firebase'

function PlayerCards() {
  const [players, setPlayers] = useState([])

  // useEffect(() => {
  //   database
  //     .collection('nba-players')
  //     .onSnapshot((snapshot) =>
  //       setPlayers(snapshot.docs.map((doc) => doc.data()))
  //     )
  // }, [])
  
  
  // const fetchPlayers=async()=>{
  //   const response=database.collection('nba-players');
  //   const data=await response.get();
  //   data.docs.forEach(item=>{
  //    setPlayers([...players,item.data()])
  //   })
  // } 
  

  // useEffect(() => {
  //   fetchPlayers();
  // })

  useEffect(()=> {
    const fetchPlayers = async () => {
      const data = await database.collection("nba-players").get()
      setPlayers(data.docs.map(doc => doc.data()))
    }
    fetchPlayers()
  }, [])


  const swiped = (direction, nameToDelete) => {
    console.log('removing:' + nameToDelete)
  }

  const outOfFrame = (Name) => {
    console.log(Name + ' left the screen!')
  }

  //debugger;
 
  return (
    <div className='playerCards'>
      <div className='playerCards__cardContainer'>
        {players.map((player) => (
          <TinderCard
            className='playerCards__swipe'
            key={player.Name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, player.Name)}
            onCardLeftScreen={() => outOfFrame(player.Name)}
          >
            <div
              className='playerCards__card'
              style={{ backgroundImage: `url(${"https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1024"})` }}
            >
              <h3>{player.Name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )

}

export default PlayerCards