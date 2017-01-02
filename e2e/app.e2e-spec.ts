import { CourseFirstAppPage } from './app.po';

describe('course-first-app App', function() {
  let page: CourseFirstAppPage;

  beforeEach(() => {
    page = new CourseFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
