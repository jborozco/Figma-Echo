"use strict";
//show Editor interface
figma.showUI(__html__, { width: 320, height: 640, title: "Promt new text" });
//Message received
figma.ui.onmessage = msg => {



  if (msg.type === 'actionGenerate') {
    let selectedElements = figma.currentPage.selection.length;
    let selectedElementType = figma.currentPage.selection.
    console.log(selectedElementType)

  if (selectedElements = 1) {

      figma.closePlugin('generate');

    }



    // get value in the widget0
    // push it in the selected field
    figma.closePlugin('generated');
  }

  //if canceled, close the app.

  if (msg.type === 'actionExit') {
    figma.closePlugin();
  }
};
//figma.closePlugin();
