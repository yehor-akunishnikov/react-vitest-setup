import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {Sum} from './Sum.tsx';

describe('Sum component test', () => {
  it('should return 3 for a = 1, b = 2', () => {
    render(<Sum />);

    const increment = screen.getByTestId('increment');

    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(increment);

    expect(screen.getByTestId('output').innerHTML).toBe('3');
  });
});