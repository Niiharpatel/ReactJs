import React, { useEffect, useState } from 'react';
import HeaderCom from './Components/HeaderCom/HeaderCom';
import CardCom from './Components/CardCom/CardCom';
import axios from 'axios';
import './RestApi.css';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';

function RestApi() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const [filterRegion, setFilterRegion] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setData(response.data);
    } catch (error) {
      console.log('fetchData  error:', error);
    }
  };

  const filterData = data?.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (filterRegion !== '') {
    // fetch(`https://restcountries.com/v3.1/region/${filterRegion}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setData(data);
    //   });

    axios
      .get(`https://restcountries.com/v3.1/region/${filterRegion}`)
      .then((res) => setData(res.data));
  }

  useEffect(() => {
    fetchData();
    console.log('render');
  }, [setSearch, setFilterRegion]);

  return (
    <>
      <main>
        <div className="search_filter_section">
          <div className="search_container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              id="search_input"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter_container">
            <select
              className="select_menu"
              onChange={(e) =>
                setFilterRegion(e.target.value.toLocaleLowerCase())
              }
            >
              <option hidden>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
            </select>
          </div>
        </div>
        <div className="card_container">
          {data?.length === 0 ? (
            <ShimmerSimpleGallery card imageHeight={329} row={5} />
          ) : (
            filterData.map((item, ind) => {
              return (
                <CardCom
                  name={item.name.common}
                  flag={item.flags.svg}
                  population={item.population}
                  region={item.region}
                  capital={item.capital?.[0]}
                  key={ind}
                />
              );
            })
          )}
        </div>
      </main>
    </>
  );
}

export default RestApi;
