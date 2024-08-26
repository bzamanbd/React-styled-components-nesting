import styled from "styled-components";

const NetflixCardItem = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: .5rem;
    gap: 1rem;
    padding: 0;
    color: var(--font-color);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    min-height: 38rem;
    position: relative;
    .img{ 
        border-radius: .5rem .5rem 0 0;
    }
`;

export const CardImg = styled.img`
  src  : ${(props) => props.src || ''};
  width: ${(props) => props.width || '100%'};
  border-radius: .5rem .5rem 0 0;
`;

export const CardContent = styled.div`
    padding: 0rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem; 
    text-align: left;
    font-size: .9rem;
    .title{ 
        font-size: 1.2rem;
        font-weight: 800;
    }
    .ratingNew{ 
        font-weight: 800;
    }
    .description{ 
        color: #aeaeae;
    }
`;

const StyledRatingValue = styled.span`
    background-color: ${(props)=>props.bg || 'pink'};
    padding: .25rem .8rem;
    border-radius: .2rem;
    font-weight  :600;
    &:after{ 
        content: ' ⭐️ ⭐️ ⭐️ ⭐️';
    }
`;

export const RatingValue =({children})=>{ 
    const getColor = children>=8.7? 'purple' : 'orange';
    return <StyledRatingValue bg={getColor}>{children}</StyledRatingValue>
}


const StyledWatchButton = styled.button`
    position: absolute;
    bottom: 2rem;
    text-align: center;
    font-size: .78rem;
    right: 50%;
    transform: translateX(50%);
    border: none;
    padding: 1rem 1.5rem;
    &:hover{
        background: var(--white-color);
        border: none;
        color: var(--black-color);
    }
    &:before{ 
        content: '🇧🇩 ';
    }
    &:after{ 
        content: ' 🎬';
    }
`;

export const WatchButton = ({url, children})=>{ 
    const handleClick = () => {window.open( url, '_blank') };
    return <StyledWatchButton onClick={handleClick}>{children}</StyledWatchButton>;
}



export default NetflixCardItem