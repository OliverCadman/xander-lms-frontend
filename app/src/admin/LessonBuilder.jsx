import React, {useEffect, useState} from 'react';
import Header from '../common/Header';

import LessonContainer from './LessonContainer';
import Sidebar from './Sidebar';
import LessonWrapper from './LessonWrapper';
import AddElementButton from './AddElementButton';
import ElementSelectionList from './ElementSelectionList';
import Tag from './Tag';
import FadeIn from '../animations/FadeIn';

const elementsList = [
    'Heading 1',
    'Heading 2',
    'Paragraph',
    'Editor'
]

const LessonBuilder = ({headerRef, navHeight, headerHeight}) => {
    const [elementSelection, setElementSelection] = useState([]);
    const [elementButtonHandler, setElementButtonHandler] = useState({
        x: null,
        y: null,
        buttonClicked: false
    });
    

    const findElement = (id) => {
        return elementSelection.find(el => el.id === id);
    }

    const handleClick = (e) => {
        // Handles AddElementButton click
        // Determine mouse co-ordinates to display
        // dropdown to select an element.

        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setElementButtonHandler((prevState) => {
            let buttonClicked;
            if (!prevState.buttonClicked) {
                buttonClicked = true;
            } else {
                buttonClicked = false;
            }
            return {
                x: x,
                y: y,
                buttonClicked: buttonClicked
            }
        })
    }

    const selectTag = (element) => {
            switch (element) {
              case "Heading 1":
                return "h1";
              case "Heading 2":
                return "h2";
              case "Paragraph":
                return "p";
              default:
                return "Code Editor";
            } 
    }

    const handleElementSelection = (element, count) => {
        const tag = selectTag(element);
        let maxID = 0;
        
    
        if (!elementSelection || elementSelection.length === 0) {
            maxID = 1;
        } else {
            maxID = Math.max(...elementSelection.map(i => i.id));
            maxID = maxID + 1;
        }
    
        let obj = {
            element: element,
            tag: tag,
            id: maxID,
            html: '',
            hasContent: false,
            deleteFlagRaised: false
        }

        setElementSelection([...elementSelection, obj])
        setElementButtonHandler({...elementButtonHandler, buttonClicked: false})
    }

    const handleTextChange = (event, id) => {
        setElementSelection((prev) => {
           return prev.map(el => el.id === id ? {...el, html:event.target.value, hasContent: true} : el)
        });
    }

    const handleDeleteElement = (event, id) => {
        const el = findElement(id);

        if (!event.key === 'Backspace' && el.html) return;

        if (event.key === 'Backspace' && el.html === '') {
            if (!el.deleteFlagRaised) {
              setElementSelection((prev) => {
                return prev.map((el) =>
                  el.id === id ? { ...el, deleteFlagRaised: true } : el
                );
              });
            } else {
                setElementSelection((prev) => {
                return prev.filter((el) => el.id !== id);
                });
            }
        } else {
             setElementSelection((prev) => {
               return prev.map((el) =>
                 el.id === id ? { ...el, deleteFlagRaised: false} : el
               );
             });
        }
    }


  return (
    <>
      <div style={{ width: "100%" }}>
        <Header content="Lesson Builder" ref={headerRef}></Header>
      </div>
      <div style={{ height: `calc(100% - ${navHeight + headerHeight}px)` }}>
        <LessonContainer navHeight={navHeight} headerHeight={headerHeight}>
          <Sidebar></Sidebar>
          <LessonWrapper>
            {elementSelection.map((element, index) => {
              return (
                <Tag
                  key={index}
                  tag={element.tag}
                  html={element.html}
                  id={element.id}
                  handleTextChange={handleTextChange}
                  handleDeleteElement={handleDeleteElement}
                />
              );
            })}
            <AddElementButton handleClick={handleClick} />
            {elementButtonHandler.buttonClicked ? (
              <FadeIn>
                <ElementSelectionList
                  elements={elementsList}
                  position={elementButtonHandler}
                  handleElementSelection={handleElementSelection}
                />
              </FadeIn>
            ) : null}
          </LessonWrapper>
        </LessonContainer>
      </div>
    </>
  );
}

export default LessonBuilder