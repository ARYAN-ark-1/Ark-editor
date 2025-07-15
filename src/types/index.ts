// ✅ Import Monaco core type properly
import type * as monaco from "monaco-editor";
import { Id } from "../../convex/_generated/dataModel";

/** Define Theme */
export interface Theme {
  id: string;
  label: string;
  color: string;
}

/** Define LanguageRuntime */
export interface LanguageRuntime {
  language: string;
  version: string;
}

/** Define single Language config */
export interface Language {
  id: string;
  label: string;
  logoPath: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
}

/** Define ExecuteCode API response */
export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

/** Execution result stored in Zustand store */
export interface ExecutionResult {
  code: string;
  output: string;
  error: string | null;
}

/** ✅ Zustand store state + actions */
export interface CodeEditorState {
  language: string;
  output: string;
  isRunning: boolean;
  error: string | null;
  theme: string;
  fontSize: number;
  editor: monaco.editor.IStandaloneCodeEditor | null;
  executionResult: ExecutionResult | null;

  setEditor: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  getCode: () => string;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  runCode: () => Promise<void>;
}

/** Snippet model */
export interface Snippet {
  _id: Id<"snippets">;
  _creationTime: number;
  userId: string;
  language: string;
  code: string;
  title: string;
  userName: string;
}
