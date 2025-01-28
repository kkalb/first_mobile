import { render, screen } from '@testing-library/react-native';

import { Welcome } from './Welcome';

describe('App component', () => {
  describe('Render method', () => {
    it('should render the first button', () => {
      render(<Welcome />);

      const buttonMO = screen.getByTestId('buttonMO');
      expect(buttonMO).toBeVisible();
    });
  });
});
