export interface IPeople {
    id: number,
    image: string,
    name: string,
    title: string,
    quote: string,
}

const people: IPeople[] = [
    {
        id: 1,
        image: 'https://cs2.gamemodding.com/images/1bd2efdb393cddbed755aca53af603b7f5e19e42e7a0eb91286fe9620ec5689e.jpg',
        name: 'Petr B.',
        title: 'UX/UI Designer',
        quote: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IidSKOaGuL8pgEjIQJP0FFr-DMvfeFLL4XoeAUfbRDCTBz1USCUQ9-7YDdcLOy7P6M8&usqp=CAU',
        name: 'Alexey S.',
        title: 'Frontend developer',
        quote: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        image: 'https://cs2.gamemodding.com/images/748x405/2e2f991ea5d730158faa3a695cfed288ea154353aff0ffd061d442346bb62983.jpg',
        name: 'Gabe N.',
        title: 'Backend developer',
        quote: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }

];

export default people;