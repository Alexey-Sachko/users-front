import React from 'react';

const CardsTable = ({ cards, loading, deleteCard }) => {
  return !loading ? (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Password</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { cards && cards.map((card, idx) => {
          
          const { name, password, _id: id } = card;

          return (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>{name}</td>
              <td>{password}</td>
              <td className="text-right pr-3">
                <button className="btn btn-danger" onClick={() => deleteCard(id)}>
                  <i className="fas fa-times"/>
                </button>
              </td>
            </tr>
          )

        }) }
      </tbody>
    </table>
  ) : (
    <h2>...loading</h2>
  )
}

export default CardsTable;