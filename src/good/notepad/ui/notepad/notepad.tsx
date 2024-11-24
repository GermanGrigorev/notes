import { Editor } from "../../../../component/editor";

export function Notepad({ getCatalogUrl }: { getCatalogUrl: () => string }) {
  return (
    <div>
      <Editor />
    </div>
  );
}
