import React, { useRef, useEffect } from "react";
import plusSign from "../shared/assets/img/plus.png";
import "./TaskInput.css";
import stringHelper from "../helpers/stringHelper";

const AddTask = ({ handleSelect, text, handleChange }) => {
  const refAdd = useRef();

  useEffect(() => {
    refAdd.current.textContent = "";
  }, [text]);

  const handleClick = (e) => {
    refAdd.current.focus();
  };

  const handleKeydown = (e) => {
    // prevents multiline
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const saveSelection = (containerEl) => {
    var range = window.getSelection().getRangeAt(0);
    var preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(containerEl);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    var start = preSelectionRange.toString().length;

    return {
      start: start,
      end: start + range.toString().length,
    };
  };

  const restoreSelection = (containerEl, savedSel) => {
    var charIndex = 0,
      range = document.createRange();
    range.setStart(containerEl, 0);
    range.collapse(true);
    var nodeStack = [containerEl],
      node,
      foundStart = false,
      stop = false;

    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType == 3) {
        var nextCharIndex = charIndex + node.length;
        if (
          !foundStart &&
          savedSel.start >= charIndex &&
          savedSel.start <= nextCharIndex
        ) {
          range.setStart(node, savedSel.start - charIndex);
          foundStart = true;
        }
        if (
          foundStart &&
          savedSel.end >= charIndex &&
          savedSel.end <= nextCharIndex
        ) {
          range.setEnd(node, savedSel.end - charIndex);
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        var i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const handleKeyup = (e) => {
    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown"
    )
      return;

    const sel = saveSelection(refAdd.current);
    refAdd.current.innerHTML = stringHelper.getTypingTags(
      refAdd.current.textContent
    );
    //handleChange(refAdd.current.textContent);

    restoreSelection(refAdd.current, sel);
  };

  return (
    <div className="task">
      <img
        src={plusSign}
        alt="plus-sign"
        className="plus-sign"
        onClick={handleClick}
      />
      <div
        contentEditable="true"
        className="add-task"
        placeholder="Type to add a new task"
        ref={refAdd}
        onKeyUp={handleKeyup}
        onKeyDown={handleKeydown}
        onFocus={handleSelect}
      ></div>
    </div>
  );
};

export default AddTask;
