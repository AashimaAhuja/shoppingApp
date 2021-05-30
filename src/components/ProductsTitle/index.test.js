import { shallow } from 'enzyme';
import ProductsTitle from './';

const defaultProps = {
  productsCount: 1,
  onToggleSoldItems: jest.fn(),
  showSoldItems: false
}

describe('<ProductsTitle/> Tests', ()=>{
  it('should render ProductsTitle Component', ()=>{
    const ProductsTitleComponent = shallow(<ProductsTitle />)
    expect(ProductsTitleComponent).toMatchSnapshot();
  });

  it('should handle ProductsTitle button click', ()=>{
    const mockFn = jest.fn();
    const wrapper = shallow(<ProductsTitle {...defaultProps} onToggleSoldItems={mockFn} />)
    expect(wrapper).toMatchSnapshot();
    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should handle ProductsTitle when showSoldItems is true', ()=>{
    const wrapper = shallow(<ProductsTitle {...defaultProps} showSoldItems={true} />)
    expect(wrapper).toMatchSnapshot();
    const button = wrapper.find('button');
    expect(button.text()).toEqual('Hide Sold Items');
  });
  
  it('should handle ProductsTitle when showSoldItems is false', ()=>{
    const wrapper = shallow(<ProductsTitle {...defaultProps} />)
    expect(wrapper).toMatchSnapshot();
    const button = wrapper.find('button');
    expect(button.text()).toEqual('Show Sold Items');
  });
})
