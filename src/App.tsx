import React, { ReactNode, useState } from 'react'
import './app.scss'

function App() {
  return (
    <div className="app-container">
      <FlipCard
        frontContent={<p>Qual o Teorema de Pitágoras?</p>}
        backContent={
          <div>
            <p>
              A soma dos quadrados de seus catetos corresponde ao
              quadrado de sua hipotenusa
            </p>
            <br />
            <strong>a² = b² + c²</strong>
          </div>
        }
      />
    </div>
  )
}

const FlipCard: React.FC<{
  frontContent: ReactNode
  backContent: ReactNode
}> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  return (
    <div
      className={
        isFlipped ? 'flip-card' : 'flip-card flip-card--flipped '
      }
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  )
}

export default App
