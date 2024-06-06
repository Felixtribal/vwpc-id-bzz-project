import {screen , render } from "@testing-library/react";
import { Navbar } from "../components/Navbar/Navbar";

describe('Navbar component', () => {
    it('it should contain the menu text and the its icon', () => {
        render(<Navbar />)
        expect(screen.getByTestId("menuText")).toBeInTheDocument();
        expect(screen.getByTestId("menuText")).toBeVisible();

        expect(screen.getByTestId("menuIcon")).toBeInTheDocument();
        expect(screen.getByTestId("menuIcon")).toBeVisible();
    })
    it('it should display the search and the profile icon', () => {
        render(<Navbar />)
        expect(screen.getByTestId("searchIcon")).toBeInTheDocument();
        expect(screen.getByTestId("searchIcon")).toBeVisible();

        expect(screen.getByTestId("profileIcon")).toBeInTheDocument();
        expect(screen.getByTestId("profileIcon")).toBeVisible();
    })
    it('it should display the logo icon', () => {
        render(<Navbar />)
        expect(screen.getByTestId("logoIcon")).toBeInTheDocument();
        expect(screen.getByTestId("logoIcon")).toBeVisible();
    })
});



