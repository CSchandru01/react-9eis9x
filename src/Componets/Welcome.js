import React from 'react';

function Greet(props) {
  const characters = props.characterData;
  const remove = props.removeCharacter;
  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    );
  };
  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => remove(index)}>Delete</button>
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };
  return (
    <div>
      <p> greeting from Greet</p>
      <table className="container">
        <TableHeader />
        <TableBody characterData={characters} />
      </table>
    </div>
  );
}
export default Greet;
