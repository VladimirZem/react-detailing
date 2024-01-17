import React from 'react'
import { useParams } from 'react-router-dom'

import FullCardService from '../Components/FullCardService'
import axios from 'axios'




type propsList = {
    name: string;
}
type propsImageList = {
    image: string;
}
interface serviceItems {
    description: string;
    id: number;
    imageTitle: string;
    serviceList: propsList[];
    advantage: propsList[];
    imagesSlider: propsImageList[];
    startPrice: number;
    time: string;
    title: string;
    types: string;
}




const Detailing: React.FC = () => {
    const { cardTitle } = useParams();
    const [element, setElement] = React.useState<serviceItems[]>();



    React.useEffect(() => {
        async function getFullElem() {
            try {
                const { data } = await axios.get(`https://41f1aaf4b6b26e63.mokky.dev/detailing`)
                setElement(data)
            } catch (error) {
                console.log(error)
                alert(error)
            }
        }
        getFullElem();
    }, [])

    if (!element) {
        return <>Loading....</>
    }


    return (
        <div>
            {element.map((obj: serviceItems) => obj.title === cardTitle && <FullCardService key={obj.id} {...obj} />)}
        </div>
    )
}

export default Detailing
