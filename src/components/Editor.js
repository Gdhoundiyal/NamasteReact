import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
const EditorComponent = () => {


  const editorInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editor",
      onReady: () => {
        editorInstance.current = editor;
      },
      autofocus: true,
      onchange: async () => {
        let content = await editor.saver.save();
        console.log("content", content);
      },
    });
    console.log("inside editor")
  };

  useEffect(()=>{
    console.log("useeffect ");
        initEditor()
        console.log("useeffect fucns ");
    return()=>{
        editorInstance?.current?.destroy()
        editorInstance.current = null;
    }

  },[])

  return <div id="editor" style={{background: "aqua"}}></div>;
};

export default EditorComponent;
