import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Carousel from '@site/src/components/Carousel';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Accordion from 'react-bootstrap/Accordion';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Carousel, Tabs, TabItem, Accordion
};
