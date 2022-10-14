import type { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import '@wangeditor/editor/dist/css/style.css';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

export const WangEditor: FC<{
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value = '', onChange }) => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {};

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor === null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <div className="border-solid border border-slate-300">
      <Toolbar
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        className="border-solid border-0 border-b border-slate-300"
      />
      <Editor
        defaultConfig={editorConfig}
        value={value}
        onCreated={setEditor}
        onChange={(editor) => {
          onChange?.(editor.getHtml());
        }}
        mode="default"
        style={{ height: '300px', overflowY: 'hidden' }}
      />
    </div>
  );
};
