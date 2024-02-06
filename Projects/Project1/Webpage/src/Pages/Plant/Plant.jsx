import React, { useEffect, useState } from 'react';
import './Plant.css';
import PlantData from '../../Utils/PlantData.json';
import CardStructure from '../../Component/Card/CardStructure';
import { userAuth } from '../Auth/Auth';


export default function Plant() {

    const { searchText } = userAuth();
    let [plantData, setPlantData] = useState([]);

    useEffect(() => {

        setPlantData(PlantData?.filter?.((e) => e?.category === "plant"));

        let filterData = PlantData?.filter?.((e) => {
            return e?.name?.toLowerCase?.()?.includes?.(searchText?.toLowerCase?.());  // for search data
        });

        setPlantData(filterData?.filter?.((e) => e?.category === "plant"));  // for show only plant data 


    }, [searchText]);

    return (

        <>
            {/* Header-------------------------------- */}
            {/* <div className="plant-navbar">
                <NavigationBar search={true} setSearchText={setSearchText} />
            </div> */}


            <div className="plant-main">
                {plantData.map((e, i) => {
                    return <CardStructure data={e} key={i} />;
                })}
            </div>



            {/* Footer-------------------------------
            <div className="plant-footer">
                <Footer />
            </div> */}
        </>


    );
}
