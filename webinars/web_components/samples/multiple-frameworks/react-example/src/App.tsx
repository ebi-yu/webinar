import React, { useEffect, useState } from "react";
import "./App.css";
import "../../shared-button";
import type { ButtonClickDetail } from "../../shared-button";

function App() {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const handleButtonClick = (event: Event) => {
      const customEvent = event as CustomEvent<ButtonClickDetail>;
      const message = `${customEvent.detail.label} (${customEvent.detail.variant}) がクリックされました`;

      setEvents((prev) => [message, ...prev].slice(0, 5)); // 最新5件のみ保持
    };

    // Web ComponentのイベントをReactで受信
    document.addEventListener("shared-button-click", handleButtonClick);

    return () => {
      document.removeEventListener("shared-button-click", handleButtonClick);
    };
  }, []);

  return (
    <div className="App">
      <h1>React + Web Components</h1>
      <p>ReactアプリケーションでWeb Componentsを使用する例</p>

      <div className="button-group">
        <shared-button label="プライマリ" variant="primary" />
        <shared-button label="セカンダリ" variant="secondary" />
        <shared-button label="危険" variant="danger" />
      </div>

      <div className="event-log">
        <h2>イベントログ</h2>
        {events.length === 0 ? (
          <p>ボタンをクリックしてください</p>
        ) : (
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
