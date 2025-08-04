// TypeScript版 Web Component
export interface ButtonClickDetail {
  label: string;
  variant: string;
}

export type ButtonVariant = "primary" | "secondary" | "danger";

export class SharedButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
    this.setupEventListeners();
  }

  static get observedAttributes(): string[] {
    return ["label", "variant", "disabled"];
  }

  attributeChangedCallback(): void {
    this.render();
  }

  get label(): string {
    return this.getAttribute("label") || "ボタン";
  }

  set label(value: string) {
    this.setAttribute("label", value);
  }

  get variant(): ButtonVariant {
    const variant = this.getAttribute("variant") as ButtonVariant;
    return ["primary", "secondary", "danger"].includes(variant)
      ? variant
      : "primary";
  }

  set variant(value: ButtonVariant) {
    this.setAttribute("variant", value);
  }

  get disabled(): boolean {
    return this.hasAttribute("disabled");
  }

  set disabled(value: boolean) {
    if (value) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  private render(): void {
    this.shadowRoot!.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        
        button {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
          font-family: inherit;
        }
        
        .primary {
          background-color: #007acc;
          color: white;
        }
        
        .primary:hover:not(:disabled) {
          background-color: #005c99;
          transform: translateY(-1px);
        }
        
        .secondary {
          background-color: #f8f9fa;
          color: #495057;
          border: 1px solid #dee2e6;
        }
        
        .secondary:hover:not(:disabled) {
          background-color: #e2e6ea;
          border-color: #adb5bd;
        }
        
        .danger {
          background-color: #dc3545;
          color: white;
        }
        
        .danger:hover:not(:disabled) {
          background-color: #c82333;
          transform: translateY(-1px);
        }
        
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
        }
        
        button:active:not(:disabled) {
          transform: translateY(0);
        }
      </style>
      <button class="${this.variant}" ${this.disabled ? "disabled" : ""}>
        ${this.label}
      </button>
    `;
  }

  private setupEventListeners(): void {
    this.shadowRoot!.addEventListener("click", (event: Event) => {
      if (!this.disabled) {
        event.preventDefault();

        const detail: ButtonClickDetail = {
          label: this.label,
          variant: this.variant,
        };

        this.dispatchEvent(
          new CustomEvent<ButtonClickDetail>("shared-button-click", {
            bubbles: true,
            composed: true,
            detail,
          })
        );
      }
    });
  }
}

// Custom Element として登録
if (!customElements.get("shared-button")) {
  customElements.define("shared-button", SharedButton);
}

// TypeScript用の型定義を追加
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "shared-button": {
        label?: string;
        variant?: ButtonVariant;
        disabled?: boolean;
        "onShared-button-click"?: (
          event: CustomEvent<ButtonClickDetail>
        ) => void;
      };
    }
  }
}
