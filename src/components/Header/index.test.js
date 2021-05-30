import { shallow } from 'enzyme';
import * as React from 'react';
import Header from './';

const defaultProps = {
  visibleProducts : [
      {
          isLiked: true,
          id: 1,
          name: 'prod 1'
      },
      {
          isLiked: true,
          id: 2,
          name: 'prod 1'
      },
      {
          isLiked: true,
          id: 3,
          name: 'prod 1'
      },
      {
          isLiked: true,
          id: 4,
          name: 'prod 1'
      },
      {
          isLiked: false,
          id: 5,
          name: 'prod 1'
      },
  ]
}

describe('<Header/> Tests', ()=>{
  it('should render Header Component', ()=>{
    const HeaderComponent = shallow(<Header visibleProducts={[]} />)
    expect(HeaderComponent).toMatchSnapshot();
  });
  it('should render Header Component with visible products', ()=>{
    const wrapper = shallow(<Header {...defaultProps} />)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('dl').length).toEqual(1);
    expect(wrapper.find('dt').length).toEqual(4);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').text()).toEqual('Likes 4');
  });
  it('should render Header Component with showLikedItems as true', ()=>{
    const wrapper = shallow(<Header {...defaultProps} testShowLikeditems={true} />)
    expect(wrapper).toMatchSnapshot(); 
    const likesCount = wrapper.find('.likes-count');
    likesCount.simulate('click');
  });
})
