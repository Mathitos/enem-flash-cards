import React, { useEffect, useState } from 'react'
import './app.scss'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, query, where, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB5RSYKvUPsSaOWzXNSveQ3S_Lg678D6lM',
  authDomain: 'flash-cards-95e03.firebaseapp.com',
  projectId: 'flash-cards-95e03',
  storageBucket: 'flash-cards-95e03.appspot.com',
  messagingSenderId: '491480215396',
  appId: '1:491480215396:web:20f245a02ee20be1d6d471',
  measurementId: 'G-W9897GM6SY',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

type CardData = {
  id: string
  frontData: string
  backData: string
}

const App = () => {
  const [cards, setCards] = useState<Array<CardData>>([])

  useEffect(() => {
    const foo = async () => {
      const q = query(collection(db, 'cards'))

      const querySnapshot = await getDocs(q)
      const cardsResult = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        frontData: doc.data().frontData,
        backData: doc.data().backData,
      }))
      setCards(cardsResult)
    }

    foo()
  }, [])

  return (
    <div className="app-container">
      {cards.map((card) => (
        <FlipCard key={card.id} data={card} />
      ))}
    </div>
  )
}

const FlipCard: React.FC<{
  data: CardData
}> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  return (
    <div
      className={
        isFlipped ? 'flip-card' : 'flip-card flip-card--flipped '
      }
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{data.frontData}</div>
        <div className="flip-card-back">{data.backData}</div>
      </div>
    </div>
  )
}

export default App
