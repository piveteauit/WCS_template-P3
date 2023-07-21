import React, { useEffect, useState } from 'react';
import { getAll } from '../../../services';
import '../../../styles/UserList.css';


function UserList() {
  const [users, setUsers] = useState([]);
  const [tastes, setTastes] = useState([]);
  const [colors, setColors] = useState([]);
  const [terroirs, setTerroirs] = useState([]);
  const [cepages, setCepages] = useState([]);
  const [aromas, setAromas] = useState([]);
  const [intensities, setIntensities] = useState([]);
  const [flavors, setFlavors] = useState([]);

// RECUPERER LES NAMES USERS PAR LEUR ID

  useEffect(() => {
    Promise.all([
      getAll("users"),
      getAll("tastes"),
      getAll("colors"),
      getAll("terroirs"),
      getAll("cepages"),
      getAll("aromas"),
      getAll("intensity"),
      getAll("flavors")
    ])
      .then(([usersData, tastesData, colorsData, terroirsData, cepagesData, aromasData, intensitiesData, flavorsData]) => {
        
        setUsers(usersData);
        setTastes(tastesData);
        setColors(colorsData);
        setTerroirs(terroirsData);
        setCepages(cepagesData);
        setAromas(aromasData);
        setIntensities(intensitiesData);
        setFlavors(flavorsData);
      })
      .catch(error => console.log(error));
  }, []);


  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Fonctions pour récupérer les name par les id

  function getUserNameById(userId) {
    const user = users.find(user => user.id === userId);
    return user ? `${user.firstname} ${user.lastname}` : 'N/A';
}
  function getColorNameById(colorId) {
    const color = colors.find(color => color.id === colorId);
    return color ? `${color.name}` : 'N/A';
  }
  function getTerroirNameById(terroirId) {
    const terroir = terroirs.find(terroir => terroir.id === terroirId);
    return terroir ? `${terroir.name}` : 'N/A';
  }
  function getAromaNameById(aromaId) {
    const aroma = aromas.find(aroma => aroma.id === aromaId);
    return aroma ? `${aroma.name}` : 'N/A';
  }
  function getCepageNameById(cepageId) {
    const cepage = cepages.find(cepage => cepage.id === cepageId);
    return cepage ? `${cepage.name}` : 'N/A';
  }
  function getIntensityNameById(intensityId) {
    const intensity = intensities.find(intensity => intensity.id === intensityId);
    return intensity ? `${intensity.name}` : 'N/A';
  }
  function getFlavorNameById(flavorId) {
    const flavor = flavors.find(flavor => flavor.id === flavorId);
    return flavor ? `${flavor.name}` : 'N/A';
  }

  return (
    <div>
      <h1>UserList</h1>
      <table className='table-style'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Date</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}><td>{user.id}</td>
              <td>{formatDate(user.date)}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>TastesList</h1>
      <table className='table-style'>
        <thead>
          <tr>
            <th>ID de l'utilisateur</th>
            <th>Nom de l'utilisateur</th>
            <th>Couleur</th>
            <th>Terroir</th>
            <th>Cépage</th>
            <th>Arômes</th>
            <th>Intensité</th>
            <th>Saveurs</th>
          </tr>
        </thead>
        <tbody>
          {tastes.map(taste => (
            <tr key={taste.id}>
              <td>{taste.user_id}</td>
              <td>{getUserNameById(taste.user_id)}</td>
              <td>{getColorNameById(taste.color_id)}</td>
              <td>{getTerroirNameById(taste.terroir_id)}</td>
              <td>{getCepageNameById(taste.cepage_id)}</td>
              <td>{getAromaNameById(taste.aromas_id)}</td>
              <td>{getIntensityNameById(taste.intensity_id)}</td>
              <td>{getFlavorNameById(taste.flavors_id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;