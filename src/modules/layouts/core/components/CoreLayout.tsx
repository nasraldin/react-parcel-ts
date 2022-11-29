import classnames from 'clsx';
import React from 'react';
import useHasMounted from '~shared/hooks/useHasMounted';
import { LayoutType } from '../types';
import CorePageContainer from './CorePageContainer';
import Footer from './Footer/FooterContainer';
import NavBar from './NavBar/NavContainer';
// import { css } from '@emotion/react';

export type Props = {
  /**
   * Content to display within the layout.
   *
   * Essentially, the page's content.
   */
  children: React.ReactNode;

  /**
   * Name of the layout.
   *
   * Will be used as CSS class for the main wrapper element.
   */
  layoutName: LayoutType;

  /**
   * CSS applied to the main wrapper element.
   *
   * @example layoutBaseCSS={css`
   *   margin: 20px;
   * `}
   */
  // layoutBaseCSS?: SerializedStyles;

  /**
   * Internal name of the page.
   *
   * Used for analytics.
   * All events happening on the page will be linked to that page name.
   */
  pageName?: string;

  /**
   * Wrapper container for the page.
   *
   * By default, uses CorePageContainer component.
   */
  PageContainer?: React.FunctionComponent;

  /**
   * Force hiding the nav.
   */
  hideNav?: boolean;

  /**
   * Force hiding the footer.
   */
  hideFooter?: boolean;

  /**
   * Force hiding the preview banner.
   */
  hidePreviewBanner?: boolean;

  /**
   * Component to use as Footer.
   *
   * @default BaseFooter
   */
  FooterComponent?: React.FunctionComponent;

  /**
   * Component to use as Nav.
   *
   * @default BaseNav
   */
  Nav?: React.FunctionComponent;
};

/**
 * Handles the positioning of top-level elements within the page.
 *
 * It does the following:
 *  - Adds a Nav/Footer component, and the dynamic Next.js "Page" component in between.
 *  - Automatically track page views (Amplitude).
 *  - Handles errors by displaying the Error page, with the ability to contact technical support (which will send a Sentry User Feedback).
 *
 * XXX Core component, meant to be used by other layouts, shouldn't be used by other components directly.
 */
const CoreLayout: React.FunctionComponent<Props> = (props) => {
  const hasMounted = useHasMounted();
  const {
    children,
    layoutName,
    // layoutBaseCSS,
    // pageName,
    PageContainer = CorePageContainer,
    hideNav,
    hideFooter = true,
    FooterComponent = null,
    Nav = null,
  } = props;
  // const router: NextRouter = useRouter();
  // const isIframeWithFullPagePreview = router?.query?.fullPagePreview === '1';
  const isNavDisplayed = !hideNav && Nav;
  const isFooterDisplayed = !hideFooter && Footer;

  if (!hasMounted) {
    // Returns null on client-side | server-side, until the component has mounted
    return null;
  }

  return (
    <main
      role={'main'}
      className={layoutName}
      // css={css`
      //   ${layoutBaseCSS || ''}
      // `}
    >
      <NavBar />
      <span id="BACK_TO_TOP_ANCHOR" />

      {/* Loaded from components/Head - See https://github.com/mikemaccana/outdated-browser-rework */}
      {/*<div*/}
      {/*  id="outdated"*/}
      {/*  style={{ display: 'none' }}*/}
      {/*></div>*/}

      {/* {isPreviewModeBannerDisplayed && <PreviewModeBanner />} */}

      {isNavDisplayed && <Nav />}

      <div className={classnames('page-wrapper')}>{<PageContainer>{children}</PageContainer>}</div>

      {isFooterDisplayed && (FooterComponent ? <FooterComponent /> : <Footer />)}
    </main>
  );
};

export default CoreLayout;
