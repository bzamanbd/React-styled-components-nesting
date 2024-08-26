import styled from "styled-components";

export const SericesHeading = styled.h1`
    color: var(--white-color);
    padding: 2rem 0rem;

`;

export const SericesSection = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 4rem;
`;



// GridTwoCols.js
export const GridTwoCols = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16;
  gap: ${(props) => props.gap || '16px'};
  width: 100%;
`;

// GridThreeCols.js
const GridThreeCols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.gap || '16px'};
  width: 100%;
`;

export default GridThreeCols;




  
  /* theme */
//   :root{
//     --primary-color:#7dcea0;;
//     --secondary-color:#f7dc6f; 
//     --text-color:#424242;
//     --para-text-color:#504e4d;
//     --btn-hover-bg-color:#003b99;
//     --bg-color:#ffffff;
//     --h-color:#0a043c;
//     --white-color:#ffffff;
//     --supporting-color:#ebf3fe;
//     --btn-box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
//   }
  
  