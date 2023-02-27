import React from 'react';

const CodeEditor= ({text}) => {
   return (
     <div
       className='language-klipse-eval-js'
     >
     {text}
     </div>
   );
}

export default CodeEditor