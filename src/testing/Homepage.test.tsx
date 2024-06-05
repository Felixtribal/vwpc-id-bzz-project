import { screen, render } from "@testing-library/react";
import { HomePage } from "../components/Pages/HomePage";

// defining resize observer in vitest
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
// global definition
vi.stubGlobal("ResizeObserver", ResizeObserverMock);


describe("Homepage component", () => {
  test("it should display the text at the homepage", () => {
    render(<HomePage />);
    const Text = /IDBUZZ/i;
    const homePageText = screen.getByText(Text);
    expect(homePageText).toBeVisible();
  });

  test('it should display VW yellow plate image', () => {
    render(<HomePage />);
    const image = screen.getByAltText("yellow plate");
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
  });
  
});
