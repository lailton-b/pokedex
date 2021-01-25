import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 80px 0 100px;
  padding: 0 15px;

  @media (max-width: 375px) {
    padding: 0 5px;
  }
`;

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  @media (max-width: 1050px) {
    grid-gap: 5px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    li:nth-child(10) {
      grid-column: 2;
    }
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);

    li:nth-child(10) {
      grid-column: initial;
    }
  }
`;

export const Card = styled.li`
  position: relative;
  padding: 30px 0;
  height: 273.19px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &.fire { background-color: #FDDFDF; }
  &.ice { background-color: #97c8eb; }
	&.grass { background-color: #DEFDE0; }
	&.electric { background-color: #FCF7DE; }
	&.water { background-color: #DEF3FD; }
	&.ground { background-color: #f4e7da; }
	&.rock { background-color: #d5d5d4; }
	&.fairy { background-color: #fceaff; }
	&.poison { background-color: #98d7a5; }
	&.bug { background-color: #f8d5a3; }
	&.dragon { background-color: #97b3e6; }
	&.psychic { background-color: #eaeda1; }
	&.flying { background-color: #F5F5F5; }
	&.fighting { background-color: #E6E0D4; }
	&.normal { background-color: #F5F5F5; }
  &.ghost { background-color:#01001d; }
  &.steel { background-color: #C7CCD0; }
  &.dark { background-color: #070707; }

  &:before {
    content: "";

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;

    background-color: rgba(54, 52, 52, 0.1);
  }

  > div {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  > img {
    display: block;
    width: 65%;
    margin: 15px auto 0;

    @media (max-width: 540px) {
      width: 50%;
    }

    @media (max-width: 414px) {
      width: 85%;
    }
  }

  strong, span {
    display: block;
    text-align: center;
  }

  strong {
    width: 150px;
    margin-top: 30px;
    text-transform: capitalize;
    font-size: 1.5rem;
    color: #333;
  }

  span {
    margin-top: 1px;
    color: #363636;
  }
`;

export const Pagination = styled.div` 
  position: relative;
  width: 100%;
  margin-top: 40px;

  .pagination_link {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;

    padding: 10px 20px;
    background-color: #fac706;
  }

  .prev {
    position: absolute;
    left: 0;

    svg {
      margin-right: 5px;
    }
  }

  .next {
    position: absolute;
    right: 0;

    svg {
      margin-left: 5px;
    }
  }
`;

export const Page = styled.span` 
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  font-size: 1.5rem;
  padding: 10px 0;
  color: #fac706;
`;

export const Loading = styled.div` 
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;

  width: 200px;
  height: 200px;

  background-color: #161b22;
  border-radius: 10px;
  box-shadow: 0 0 0 3px #fac706, 0 0 0 6px #161b22;

  img {
    width: 100px;
    animation: loading 1s ease-in-out infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;