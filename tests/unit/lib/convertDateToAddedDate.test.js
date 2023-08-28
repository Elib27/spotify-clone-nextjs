import convertDateToAddedDate from '@/lib/convertDateToAddedDate'

describe('convertDateToAddedDate', () => {
  it('should return the correct formatted date', () => {
    expect(convertDateToAddedDate('2017-05-26')).toBe('26 mai 2017')
  });
  it('should return the correct formatted date', () => {
    expect(convertDateToAddedDate('2022-11-07')).toBe('7 nov. 2022')
  });
  it('should return the correct formatted date', () => {
    expect(convertDateToAddedDate('2003-01-01')).toBe('1 janv. 2003')
  });
  it('should convert a date to "il y a x heures" when between 1 hour and 1 day ago', () => {
    const currentDate = new Date();
    const pastDate = new Date(currentDate - 5 * 60 * 60 * 1000); // 5 hours ago
    const result = convertDateToAddedDate(pastDate.toISOString());
    const expected = `il y a 5 heures`;
    expect(result).toEqual(expected);
  });

  it('should convert a date to "il y a x minutes" when between 1 minute and 1 hour ago', () => {
    const currentDate = new Date();
    const pastDate = new Date(currentDate - 5 * 60 * 1000); // 5 minutes ago
    const result = convertDateToAddedDate(pastDate.toISOString());
    const expected = `il y a 5 minutes`;
    expect(result).toEqual(expected);
  });

  it('should convert a date to "il y a x secondes" when less than 1 minute ago', () => {
    const currentDate = new Date();
    const pastDate = new Date(currentDate - 5000); // 5 seconds ago
    const result = convertDateToAddedDate(pastDate.toISOString());
    const expected = `il y a 5 secondes`;
    expect(result).toEqual(expected);
  });
})