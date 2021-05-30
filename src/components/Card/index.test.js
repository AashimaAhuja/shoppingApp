import { shallow } from 'enzyme';
import * as React from 'react';
import Card from './';

const defaultProps = {
    product: {
        img: 'imageUrl',
        name: 'Prod 1',
        brand: 'Brand 1',
        price: 30,
        size: 30,
        sold: false,
        id: 1,
        isLiked: false
    },
    onProductLike: jest.fn()
}

describe('<Card/> Tests', () => {
    it('should render Card Component', () => {
        const CardComponent = shallow(<Card product={{}} />)
        expect(CardComponent).toMatchSnapshot();
    });

    it('should render Card Component with default Props', () => {
        const wrapper = shallow(<Card {...defaultProps} />)
        expect(wrapper).toMatchSnapshot();
        const label = wrapper.find('.img-container label');
        expect(label.text()).toEqual('SOLD');
    });

    it('should render Card Component with product sold', () => {
        const props = {
            ...defaultProps,
            product: {
                ...defaultProps.product,
                sold: true
            }
        }
        const CardComponent = shallow(<Card {...props} />)
        expect(CardComponent).toMatchSnapshot();
    });
    it('should render Card Component with product not sold', () => {
        const props = {
            ...defaultProps,
            product: {
                ...defaultProps.product,
                sold: false
            }
        }
        const CardComponent = shallow(<Card {...props} />)
        expect(CardComponent).toMatchSnapshot();
    });

    it('should render Card Component with product liked', () => {
        const props = {
            ...defaultProps,
            product: {
                ...defaultProps.product,
                isLiked: true
            }
        }
        const wrapper = shallow(<Card {...props} />)
        expect(wrapper).toMatchSnapshot();
        const button = wrapper.find('button');
        expect(button.text()).toEqual('Unlike')
    });

    it('should render Card Component with product is not liked', () => {
        const props = {
            ...defaultProps,
            product: {
                ...defaultProps.product,
                isLiked: false
            }
        }
        const wrapper = shallow(<Card {...props} />)
        expect(wrapper).toMatchSnapshot();
        const button = wrapper.find('button');
        expect(button.text()).toEqual('Like')
    });

    it('should render Card Component with button click and product not sold', () => {
        const onProductLikeMock = jest.fn(this, [1]);
        const wrapper = shallow(<Card {...defaultProps} onProductLike={onProductLikeMock} />)
        expect(wrapper).toMatchSnapshot();
        const button = wrapper.find('button');
        button.simulate('click');
        expect(onProductLikeMock).toHaveBeenCalledTimes(1);
    });
    
    it('should render Card Component with button clikc and product sold', () => {
        const props = {
            ...defaultProps,
            product: {
                ...defaultProps.product,
                sold: true
            }
        }
        const onProductLikeMock = jest.fn();
        const wrapper = shallow(<Card {...props} onProductLike={onProductLikeMock} />)
        expect(wrapper).toMatchSnapshot();
        const button = wrapper.find('button');
        button.simulate('click');
        expect(onProductLikeMock).toHaveBeenCalledTimes(0);
    });
})
