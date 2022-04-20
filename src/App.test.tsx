import { render, screen } from '@testing-library/react';
import App from './App';



  test('renders title of counter', () => {
    const {getByText}=render(<App />);
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });
  

  


