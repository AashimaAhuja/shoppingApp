import { shallow } from 'enzyme';
import * as React from 'react';
import CardList from './';

const defaultProps = {
    products: [
        {
            img: 'imageUrl',
            name: 'Prod 1',
            brand: 'Brand 1',
            price: 30,
            size: 30,
            sold: false,
            id: 1,
            isLiked: false
        },
        {
            img: 'imageUrl',
            name: 'Prod 1',
            brand: 'Brand 1',
            price: 30,
            size: 30,
            sold: false,
            id: 2,
            isLiked: false
        },
        {
            img: 'imageUrl',
            name: 'Prod 1',
            brand: 'Brand 1',
            price: 30,
            size: 30,
            sold: false,
            id: 3,
            isLiked: false
        },
        {
            img: 'imageUrl',
            name: 'Prod 1',
            brand: 'Brand 1',
            price: 30,
            size: 30,
            sold: false,
            id: 4,
            isLiked: false
        },
    ],
    onProductLike: jest.fn()
}

describe('<CardList/> Tests', () => {
    it('should render CardList Component', () => {
        const CardListComponent = shallow(<CardList />)
        expect(CardListComponent).toMatchSnapshot();
    });
    it('should render CardList Component with default Props', () => {
        const CardListComponent = shallow(<CardList {...defaultProps} />)
        expect(CardListComponent).toMatchSnapshot();
    });
})
