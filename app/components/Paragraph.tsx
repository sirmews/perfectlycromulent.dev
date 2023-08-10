import React from 'react';

export interface ParagraphProps {
  className?: string
  children?: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {

  // if children is a string, split it and render
  const content = React.Children.toArray(children).map((child) => {
    if (typeof child === 'string') {
      // Handle string: split and render with line breaks
      return child.split('\n').map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line}
          <br />
        </React.Fragment>
      ));
    } else {
      // Handle JSX/React element or other types
      return child;
    }
  });

  return (
    <p className={`${className} text-lg sm:text-xl`}>
      {content}
    </p>
  )
}
