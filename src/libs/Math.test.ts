import { Math } from './Math';

it('should sum two numbers', () => {
    const response = Math.sum(5, 10)
    expect(response).toBe(15);
})