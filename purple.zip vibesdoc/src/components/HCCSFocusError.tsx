import * as React from 'react';
import { useFormikContext } from 'formik';

const HCCSFocusError = (): null => {
  const { errors, isSubmitting, isValidating } = useFormikContext();

  React.useEffect(() => {
    if (isSubmitting && !isValidating) {
      const keys = Object.keys(errors);
      if (keys.length > 0) {
        const selector = `[name=${keys[0]}]`;
        let errorElement: HTMLElement = null;
        errorElement = document.querySelector(selector) as HTMLElement;
        if (!errorElement) {
          errorElement = document.getElementById(keys[0]);
        }
        const yOffset = -130;
        const y = errorElement?.getBoundingClientRect()?.top + window.pageYOffset + yOffset;
        const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
        if (isSmoothScrollSupported) {
          // not on IE/Edge
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          // for Edge
          document.body.scrollTop = y;
          // use an offset to compensate for the fixed header
          document.documentElement.scrollTop = y;
        }
        setTimeout(() => {
          errorElement?.focus();
        }, 500);
      }
    }
  }, [errors, isSubmitting, isValidating]);

  return null;
};

export default HCCSFocusError;
