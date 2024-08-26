import NetflixCardItem, { CardContent,  RatingValue,  WatchButton } from "./styles/NetflixCardItem";

export const NetflixCard = ({data})=>{ 
    const { name,img_url,description,rating,cast,genre,watch_url } = data
    
    return(
        
        <li> 
            <NetflixCardItem>
            <img className="img" src={img_url} alt={name} width={'100%'} />
            <CardContent>
            <p className="title">Title: {name} </p>
            <p className="ratingNew">Rating: {<RatingValue>{rating}</RatingValue>} </p>
            <p>Genre: {genre} </p>
            <p>Cast: {cast} </p>
            <p className="description">Description: {description} </p>
            </CardContent>

            <WatchButton url={watch_url}>WatchNow</WatchButton>
            
            </NetflixCardItem>
            
        </li>
        
       
    );
}