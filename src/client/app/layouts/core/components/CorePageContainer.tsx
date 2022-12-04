import React from 'react';

// import { css } from '@emotion/react';
// import { Container } from 'reactstrap';
import ScrollToTop from './ScrollToTop';

type Props = {
  children: React.ReactNode;
};

/**
 * Page wrapper handling the display of the Next.js Page component (as "children").
 *
 * XXX Core component, meant to be used by other layouts, shouldn't be used by other components directly.
 */
const CorePageContainer: React.FunctionComponent<Props> = (props): JSX.Element => {
  const { children } = props;

  return (
    <>
      <div
        className={'page-container'}
        // css={css`
        //   margin: 0 !important;
        //   padding: 0 !important;
        //   max-width: none !important;
        // `}
      >
        {children}
      </div>
      <ScrollToTop />
    </>
  );
};

export default CorePageContainer;
