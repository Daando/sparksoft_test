import { fireEvent, render, screen } from '@testing-library/react';
import App from "../App";

test('TEST - APP renders without crashing', () => {
    const { getByText } = render(<App/>);
    expect(getByText(/ADD CONTACT/i)).toBeInTheDocument();
});

test('TEST - APP page change working', () => {
    const { getByText } = render(<App/>);
    fireEvent.click(screen.getByText('View Contact'));
    test.each([
        expect(getByText(/Users from database/i)).toBeInTheDocument(),
    ])
});

test('TEST - APP name field change', () => {
    render(<App/>);
    const nameField = screen.getByTestId('name-field').querySelector('input');
    fireEvent.change(nameField! , {target: { value: 'Charles Wing'}});
    expect(nameField!.value).toBe('Charles Wing');
});

test('TEST - APP phone field change', () => {
    render(<App/>);
    const phoneField = screen.getByTestId('phone-field').querySelector('input');
    fireEvent.change(phoneField! , {target: { value: '+36304841564'}});
    expect(phoneField!.value).toBe('+36304841564');
});

test('TEST - APP phone field errorhandling - good value', () => {
    render(<App/>);
    const phoneField = screen.getByTestId('phone-field').querySelector('input');
    fireEvent.change(phoneField! , {target: { value: '+36304841564'}});
    expect(phoneField?.getAttribute('aria-invalid')).toBe("false");
});

test('TEST - APP phone field errorhandling - bad value ', () => {
    render(<App/>);
    const phoneField = screen.getByTestId('phone-field').querySelector('input');
    fireEvent.change(phoneField! , {target: { value: '+96441'}});
    expect(phoneField?.getAttribute('aria-invalid')).toBe("true");
});

test('TEST - APP website field change', () => {
    render(<App/>);
    const webSiteField = screen.getByTestId('website-field').querySelector('input');
    fireEvent.change(webSiteField! , {target: { value: 'www.google.hu'}});
    expect(webSiteField!.value).toBe('www.google.hu');
});

test('TEST - APP website field errorhandling - good value', () => {
    render(<App/>);
    const webSiteField = screen.getByTestId('website-field').querySelector('input');
    fireEvent.change(webSiteField! , {target: { value: 'google.hu'}});
    expect(webSiteField?.getAttribute('aria-invalid')).toBe("false");
});

test('TEST - APP website field errorhandling - good value', () => {
    render(<App/>);
    const webSiteField = screen.getByTestId('website-field').querySelector('input');
    fireEvent.change(webSiteField! , {target: { value: 'www.google.hu'}});
    expect(webSiteField?.getAttribute('aria-invalid')).toBe("false");
});

test('TEST - APP website field errorhandling - bad value', () => {
    render(<App/>);
    const webSiteField = screen.getByTestId('website-field').querySelector('input');
    fireEvent.change(webSiteField! , {target: { value: 'adb'}});
    expect(webSiteField?.getAttribute('aria-invalid')).toBe("true");
});

test('TEST - APP username field change', () => {
    render(<App/>);
    const userNameField = screen.getByTestId('user_name-field').querySelector('input');
    fireEvent.change(userNameField! , {target: { value: 'xerxesz'}});
    expect(userNameField!.value).toBe('xerxesz');
});


test('TEST - APP email field change', () => {
    render(<App/>);
    const emailField = screen.getByTestId('user_name-field').querySelector('input');
    fireEvent.change(emailField! , {target: { value: 'charles.wing@haha.hu'}});
    expect(emailField!.value).toBe('charles.wing@haha.hu');
});
