import { User } from '@/lib/usersContext';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserEdit from '../userEdit';

test('UserEdit component renders correctly', () => {
  const mockUser: User = {
    id: '1',
    name: 'John Doe',
    email: 'test@example.com',
    profilePicture: 'http://example.com/profile.jpg',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    lastLogin: new Date(),
    preferences: {},
    contactInfo: {
      addressStreet: '123 Main St',
      addressCity: 'Anytown',
      addressPostalCode: '12345',
      addressCountry: 'USA',
    },
  };
  const mockOnSubmit = jest.fn();
  render(<UserEdit user={mockUser} onSubmit={mockOnSubmit} />);
  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  expect(nameInput);
  expect(emailInput);
  fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
  fireEvent.change(emailInput, { target: { value: 'doejane@example.com' } });
  fireEvent.click(screen.getByRole('button', { name: 'Save Changes' }));
  expect(mockOnSubmit).toHaveBeenCalledWith({
    ...mockUser,
    name: 'Jane Doe',
    email: 'doejane@example.com',
  });
});
