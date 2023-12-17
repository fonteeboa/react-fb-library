
import matchMedia from 'match-media-mock';

// Mock the window.matchMedia function
const originalMatchMedia = window.matchMedia;
const mockMatchMedia = matchMedia.create();

beforeAll(() => {
  window.matchMedia = mockMatchMedia;
});

afterAll(() => {
  window.matchMedia = originalMatchMedia;
});

export const setMatchMediaMock = () => {
    beforeAll(() => {
        window.matchMedia = mockMatchMedia;
    });
      
    afterAll(() => {
        window.matchMedia = originalMatchMedia;
    });
};