import {InfoEntity} from './InfoEntity';
describe('InfoEntity', () => {
  it('should return "Alex"', () => {
    const entity = new InfoEntity(['Alex'], new Date());
    expect(entity.getLast()).toBe('Alex');
  });
  it('should return "2.382.632.382"', () => {
    const entity = new InfoEntity(['', '2.382.632.400', '2.382.632.382'], new Date());
    expect(entity.getLast()).toBe('2.382.632.382');
  });
  it('should return "www.mysite.uk"', () => {
    const entity = new InfoEntity(['', 'www.google.com', 'www.wikipedia.org', 'www.mysite.uk'], new Date());
    expect(entity.getLast()).toBe('www.mysite.uk');
  });
  it('should return empty string', () => {
    const entity = new InfoEntity(['Alex'], new Date());
    entity.setData([])
    expect(entity.getLast()).toBe('');
  });
});
