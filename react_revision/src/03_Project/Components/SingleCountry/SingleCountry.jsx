import React, { useContext, useEffect, useState } from 'react';
import './SingleCountry.css';
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ShimmerContentBlock } from 'react-shimmer-effects';
import { themeContext } from '../../Context/ThemeContext';

function SingleCountry() {
  const [isDark] = useContext(themeContext);
  const [countryData, setCountryData] = useState(null);

  const [notFound, setNotFound] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const countryName = params.country;

  const { state } = useLocation();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        setIsLoading(false);
        setCountryData(res.data[0]);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return (
      <>
        <div>
          <h1>Country Not Found</h1>
        </div>
      </>
    );
  }
  return (
    <main className={` ${isDark && 'dark'} single_main`}>
      <div className="single_container">
        <p className="back_btn" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
        </p>

        {isLoading ? (
          <>
            <div style={{ marginInline: '20px', marginTop: '20px' }}>
              <ShimmerContentBlock
                title
                text
                cta
                thumbnailWidth={300}
                thumbnailHeight={310}
              />
            </div>
          </>
        ) : (
          <div className="country_section">
            <div className="img_div">
              <img src={countryData?.flags?.svg} alt="" />
            </div>
            <div className="country_content">
              <h1>{countryData?.name?.common}</h1>
              <div className="country_details">
                <div className="left">
                  <p>
                    <b>Native Name:</b>
                    <span className="native_name">
                      {' '}
                      {countryData?.name?.nativeName?.eng?.common}
                    </span>
                  </p>
                  <p>
                    <b>Population: </b>
                    <span className="population">
                      {countryData?.population
                        ? countryData?.population.toLocaleString('en-IN')
                        : '-'}
                    </span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="region">{countryData?.region}</span>
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    <span className="sub_region">{countryData?.subregion}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">
                      {countryData?.capital?.join(', ')}
                    </span>
                  </p>
                </div>
                <div className="right">
                  <p>
                    <b>Top Level Domain: </b>
                    <span className="domain">{countryData?.tld?.[0]}</span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className="currency">
                      {countryData?.currencies
                        ? Object.values(countryData?.currencies)
                            .map((cur) => cur.name)
                            .join(',')
                        : '-'}
                    </span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className="lang">
                      {countryData?.languages
                        ? Object.values(countryData.languages).join(', ')
                        : '-'}
                    </span>
                  </p>
                </div>
              </div>

              {countryData?.borders?.length !== 0 && (
                <div className="border_country">
                  <span>
                    <b>Border Countries:&nbsp; </b>{' '}
                    {countryData?.borders?.map((border) => (
                      <Link
                        className="border_country_btn"
                        key={border}
                        to={`${border}`}
                      >
                        {border + ' '}
                      </Link>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default SingleCountry;
