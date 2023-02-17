import React from 'react';
import ModuleButton from './ModuleButton';
import Progress_bar from './Progress_bar';

const ModuleWrapper = ({header, theme}) => {
  return (

    <div>
        <h2>{header}</h2>
        <ModuleButton theme={theme}></ModuleButton>
        <Progress_bar bgcolor = "#ffffe0" progress = 'Not Started' height = {20} />
    </div>
  )
}

export default ModuleWrapper

