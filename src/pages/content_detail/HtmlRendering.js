import sanitizeHtml from 'sanitize-html';

const defaultOptions = {
  allowedTags: [ 'b', 'i', 'em', 'strong', 'p', 'u', 's', 'ul', 'ol', 'span', 'strong', 'li', 'br'],
  
  allowedIframeHostnames: ['www.youtube.com']
};

const sanitize = (dirty, options) => ({
  __html: sanitizeHtml(
    dirty, 
    options= { ...defaultOptions, ...options }
  )
});

const HtmlRenderingParagraph = ({ html, options }) => {
  console.log('render');
  return (
    <div dangerouslySetInnerHTML={sanitize(html, options)} style={{
      fontWeight: '400',
      fontSize: '0.875rem',
      lineHeight: '1.43',
      letterSpacing: '0.01071em',
      color: 'rgba(0, 0, 0, 0.6)',
    }}/>
  );
};

export default HtmlRenderingParagraph;