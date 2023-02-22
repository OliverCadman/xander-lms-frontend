import React, {createRef, useRef} from 'react';
import ContentEditable from 'react-contenteditable';

import './Tag.css'

const Tag = ({tag, html, id, handleTextChange, handleDeleteElement}) => {
    const contentEditable = createRef();

  return (
    <ContentEditable
    tagName={tag}
    disabled={false}
    onChange={(e) => handleTextChange(e, id)}
    innerRef={contentEditable}
    html={html}
    style={{width: '50%', marginLeft: '1rem', border: 'none', outline: 'none'}}
    className={tag === 'h1' ? 'h1-edit' : tag === 'h2' ? 'h2-edit' : tag === 'p' ? 'p-edit' : null}
    onKeyUp={(e) => handleDeleteElement(e, id)}>
    </ContentEditable>
  )
}

export default Tag

