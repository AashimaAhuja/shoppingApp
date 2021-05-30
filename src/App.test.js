import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

const defaultProps = {
  testVisibleProducts: [
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
  ],
  testIsLoading: false,
  testShowSoldItems: false
}

describe('<App/> Tests', () => {
  let useEffect, useCallback;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f())
  }

  const mockUseCallback = () => {
    useCallback.mockImplementationOnce(f => f())
  }

  const mockUseCallbackWithId = (id) => {
    useCallback.mockImplementationOnce(f => f(id))
  }

  beforeAll(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    useCallback = jest.spyOn(React, 'useCallback');
    mockUseEffect();
    mockUseEffect();
    shallow(<App />)
  })

  it('should render App Component', () => {
    const AppComponent = shallow(<App />);
    expect(AppComponent).toMatchSnapshot();
  });

  it('should render App Component with default props', () => {
    mockUseEffect();
    mockUseEffect();
    mockUseCallback();
    mockUseCallbackWithId(1);
    const AppComponent = shallow(<App {...defaultProps} />)
    expect(AppComponent).toMatchSnapshot();
  });

  it('should render App Component with is Loading true', () => {
    const wrapper = shallow(<App testIsLoading={true} />)
    expect(wrapper).toMatchSnapshot();
    const loadingDiv = wrapper.find('.loading');
    expect(loadingDiv.text()).toEqual('Loading');
  });
})
