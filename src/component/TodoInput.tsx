
import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState('');

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!text.trim()) return;
    onAdd(text);
    setText('');
  }

  return (
    <form onSubmit={handleSumbit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}


