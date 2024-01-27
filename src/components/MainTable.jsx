import React from 'react'
import PeriodicTable from '../assets/PeriodicTableJSON.json'

const cardColor = {
  "nonmetal": "#E27Aff",
  "noble gas": "#EBBFD8",
  "alkali metal": "#FBC9E5",
  "alkaline earth metal": "#5BC2E7",
  "metalloid": "#BFEAEC",
  "halogen": "#A2D34D",
  "metal": "#CEDC00",
  "transition metal": "#A3C7D2",
  "lanthanoid": "#E6363F",
  "actinoid": "#EADA24",
  "post-transition metal": "#0dd406"
}


export const MainTable = ({ onChangeElement }) => {

  return (
    <>
      <h1>Tabla periodica de los elementos quimicos</h1>
      <div className='main-table-container'>
        {
          PeriodicTable.map((el) =>
            <div key={el.name}
              style={{
                gridColumn: el.xpos,
                gridRow: el.ypos,
                backgroundColor: cardColor[el.groupBlock]
            }}>
              <div className="card" onClick={() => onChangeElement(Object.values(el))}>
                <p>{el.symbol}</p>
                <p>{el.name}</p>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
