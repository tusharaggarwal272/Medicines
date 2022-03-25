import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
function Medicine() {
  const [medicines, setmedicines] = useState([]);
  const [tempmed, settempmed] = useState([]);
  const [loading, setloading] = useState(false);
  const [key, setkey] = useState('');
  useEffect(async () => {
    try {
      const res = (await (axios.get('https://dev.dashmed.in/sample-data'))).data;
      let data = res.data;
      setmedicines(data);
      settempmed(data);

    } catch (error) {
      console.log(error.message);
    }
  }, [])




  function sortmanufacturerdes() {
    let temp = medicines;
    const res = [...medicines].sort(function (a, b) {
      return b.manufacturer > a.manufacturer ? 1 : -1
    })
    setmedicines(res);
    settempmed(res);

  }
  function sortmanufacturerasc() {
    let temp = medicines;
    const res = [...medicines].sort(function (a, b) {
      return b.manufacturer < a.manufacturer ? 1 : -1
    })
    setmedicines(res);
    settempmed(res);
  }

  function filterBySearch() {
    let len = key.length;
    if (key == '' || key.length < len) {
      settempmed(medicines)
    }
    else {
      const temp = medicines.filter(med => med.medName.toLowerCase().includes(key.toLowerCase()));
      console.log(temp);

      settempmed(temp);
    }

  }

  function sorrsaltdes() {
    let temp = medicines;
    const res = [...medicines].sort(function (a, b) {
      return b.saltName > a.saltName ? 1 : -1
    })
    setmedicines(res);
    settempmed(res);
  }

  function sorrsaltasc() {
    let temp = medicines;
    const res = [...medicines].sort(function (a, b) {
      return b.saltName < a.saltName ? 1 : -1
    })
    setmedicines(res);
    settempmed(res);
  }
  function sorrmeddes() {
    let temp = medicines;
    const res = [...medicines].sort(function (a, b) {
      return b.medName > a.medName ? 1 : -1
    })
    setmedicines(res);
    settempmed(res);
  }

  function sorrmedasc() {
    let temp = medicines;
    const res = [...medicines].sort(function (a, b) {
      return b.medName < a.medName ? 1 : -1
    })
    setmedicines(res);
    settempmed(res);
  }
  return (


    medicines.length === 0 ? <div className="spinner-grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </div> :
      <div className='container'>


        <div className="col-lg-9 col-sm-12">
          <div className="row ">
            <input type="text" className="input-group-text col input-change" placeholder="Search with the medicine name" value={key} onChange={(e) => setkey(e.target.value)} onKeyUp={filterBySearch}></input>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>

                  <th style={{ background: '#ccc' }} scope="col"><i class="fas fa-sort-up" onClick={sorrmeddes}></i>MedName<i class="fas fa-sort-down" onClick={sorrmedasc}></i></th>
                  <th scope="col"><i class="fas fa-sort-up" onClick={sorrsaltdes}></i>Salt Name<i class="fas fa-sort-down" onClick={sorrsaltasc}></i></th>
                  <th scope="col"><i class="fas fa-sort-up" onClick={sortmanufacturerdes}></i>Manufacturer<i class="fas fa-sort-down" onClick={sortmanufacturerasc}></i></th>

                </tr>
              </thead>
              <tbody>

                {
                  tempmed.map((movieobj) => (
                    <tr>

                      <td style={{ background: '#ccc', textDecoration: 'underline',fontStyle:'italic' }}>{movieobj.medName}</td>

                      <td>{movieobj.saltName}</td>
                      <td>{movieobj.manufacturer}</td>

                    </tr>

                  ))

                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Medicine