import React from 'react'
import Bootcard from './Bootcard'

let data = [{
    img: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=600",
    Name: "Parrot",
    Description: "Parrots are known as one of the most intelligent birds."
}, {
    img: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=600",
    Name: "Lion",
    Description: "The lion is a wild terrestrial animal called the king of the forest."
},
{
    img: "https://images.pexels.com/photos/45911/peacock-plumage-bird-peafowl-45911.jpeg?auto=compress&cs=tinysrgb&w=600",
    Name: "Peacock",
    Description: "The peacock is brightly coloured, with a crest of spatula wire-like feathers."
}, {
    img: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=600",
    Name: "Dolphine",
    Description: "Dolphins are highly intelligent marine mammals."

}]

function Bootmapcom() {
    return (
        <>
            {data.map((e, i) => {
                return <Bootcard CardData={e} key={i} />
            })}
        </>
    )
}

export default Bootmapcom