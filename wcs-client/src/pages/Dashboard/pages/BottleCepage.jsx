import React, { useState, useEffect } from 'react';
import './BottleCepage.css'; // Fichier de styles CSS pour personnaliser l'apparence du tableau
import axios from 'axios';
import '../../../styles/UserList.css';

function BottleCepage() {
  const [rows, setRows] = useState([
    { id: 1, REF: '', Date: '', Colors: '', Cepages: '', Terroirs: '', Operators: '', Years: '', Intensity: '', valid: false }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/bottle_per_cepage');
        const data = response.data;
        setRows(data); // Mettez à jour les données du tableau avec les données récupérées depuis le backend
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);


  const ajouterLigne = () => {
    const nouvelleLigne = {
      id: rows.length + 1,
      REF: '',
      Date: '',
      Colors: '',
      Cepages: '',
      Terroirs: '',
      Operators: '',
      Years: '',
      Intensity: '',
      valid: false
    };

    setRows([...rows, nouvelleLigne]);
  };

  const supprimerLigne = (id) => {
    const nouvellesLignes = rows.filter((row) => row.id !== id);
    setRows(nouvellesLignes);
  };

  const handleChange = (id, fieldName, value) => {
    const nouvellesLignes = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [fieldName]: value };
      }
      return row;
    });

    setRows(nouvellesLignes);
  };

  const validerChamp = (id) => {
    const nouvellesLignes = rows.map((row) => {
      if (row.id === id) {
        return { ...row, valid: true };
      }
      return row;
    });

    setRows(nouvellesLignes);
  };

  return (
    <div className='container-BC'>
      <h1>Bottle Cepage</h1>
      <table className="bottle-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>REF</th>
            <th>Date</th>
            <th>Colors</th>
            <th>Cepages</th>
            <th>Terroirs</th>
            <th>Operators</th>
            <th>Years</th>
            <th>Intensity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <textarea
                  value={row.REF}
                  onChange={(e) => handleChange(row.id, 'REF', e.target.value)}
                  readOnly={row.valid}
                  className={row.valid ? 'readonly' : ''}
                  style={{ fontSize: `${row.valid ? '1em' : 'inherit'}` }}
                />
              </td>
              <td>
                <textarea
                  value={row.Date}
                  onChange={(e) => handleChange(row.id, 'Date', e.target.value)}
                  readOnly={row.valid}
                  className={row.valid ? 'readonly' : ''}
                  style={{ fontSize: `${row.valid ? '1em' : 'inherit'}` }}
                />
              </td>
              <td>
                <textarea
                  value={row.Colors}
                  onChange={(e) => handleChange(row.id, 'Colors', e.target.value)}
                  readOnly={row.valid}
                  className={row.valid ? 'readonly' : ''}
                  style={{ fontSize: `${row.valid ? '1em' : 'inherit'}` }}
                />
              </td>
              <td>
                <textarea
                  value={row.Cepages}
                  onChange={(e) => handleChange(row.id, 'Cepages', e.target.value)}
                  readOnly={row.valid}
                  className={row.valid ? 'readonly' : ''}
                  style={{ fontSize: `${row.valid ? '1em' : 'inherit'}` }}
                />
              </td>
              <td>
                <textarea
                  value={row.Terroirs}
                  onChange={(e) => handleChange(row.id, 'Terroirs', e.target.value)}
                  readOnly={row.valid}
                  className={row.valid ? 'readonly' : ''}
                  style={{ fontSize: `${row.valid ? '1em' : 'inherit'}` }}
                />
              </td>
              <td>
                <textarea
                  value={row.Operators}
                  onChange={(e) => handleChange(row.id, 'Operators', e.target.value)}
                  readOnly={row.valid}
                  className={row.valid ? 'readonly' : ''}
                  style={{ fontSize: `${row.valid ? '1em' : 'inherit'}` }}
                />
              </td>
              <td>
                <textarea
                  value={row.Years}
                  onChange={(e) => handleChange(row.id, 'Years', e.target.value)}
                  readOnly={row.valid}
                  className={row.valid ? 'readonly' : ''}
                  style={{ fontSize: `${row.valid ? '1em' : 'inherit'}` }}
                />
              </td>
              <td>
                <textarea
                  value={row.Intensity}
                  onChange={(e) => handleChange(row.id, 'Intensity', e.target.value)}
                  readOnly={row.valid}
                  className={row.valid ? 'readonly' : ''}
                  style={{ fontSize: `${row.valid ? '1em' : 'inherit'}` }}
                />
              </td>
              <td>
                {row.valid ? (
                  <button className="add-button" onClick={() => supprimerLigne(row.id)}>Supprimer</button>
                ) : (
                  <button className="add-button" onClick={() => validerChamp(row.id)}>Valider</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-button" onClick={ajouterLigne}>Ajouter un Cépage</button>
    </div>
  );
}

export default BottleCepage;
