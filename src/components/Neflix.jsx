import { NetflixCard } from "./NetflixCard";
import cardsData from '../api/netflix_series.json'
import GridThreeCols, { SericesHeading,SericesSection, } from "./styles/NetflixStyle";

const Netflix = ()=>{ 
    return( 
        <SericesSection> 
            <SericesHeading>Netflix Serices</SericesHeading>
            <ul>
                <GridThreeCols gap='5rem'> 
                    {cardsData.map(cardData => <NetflixCard key={cardData.id} data={cardData}/>)}
                </GridThreeCols>
            </ul>
        </SericesSection>
    );
}

export default Netflix