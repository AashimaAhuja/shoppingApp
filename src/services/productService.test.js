import { getProductList } from './productService';

describe('product service tests', () => {
    beforeEach(() => {
        const fetchMock = jest.fn((url) =>
            new Promise((resolve, reject)=>{
                if(!url?.length){
                    return reject('error')
                }
                return resolve({
                    json: () => Promise.resolve(1),
                })
            })
        );
        jest.spyOn(global, 'fetch').mockImplementation(fetchMock);
    });

    afterAll(() => {
        global.fetch.mockClear();
    });

    it('should test when product service resolves', () => {
        expect(getProductList('url')).resolves.toBe(1);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
    
    it('should test when product service rejects', () => {
        expect(getProductList('')).rejects.toBe('error');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
})
