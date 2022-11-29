import React, { useEffect, useState } from 'react';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const top = 20;
  const BACK_TO_TOP_ANCHOR = 'BACK_TO_TOP_ANCHOR';

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top);
    };
    onScroll();
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [top]);

  const handleClick = (event: React.MouseEvent<Element>) => {
    const anchor = ((event.target as Element).ownerDocument || document).querySelector(`#${BACK_TO_TOP_ANCHOR}`);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <>
      {visible && (
        <button onClick={handleClick} className="btn btn-outline-primary btn-lg back-to-top">
          Up
        </button>
      )}
    </>
  );
};

export default ScrollTop;
