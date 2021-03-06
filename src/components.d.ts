/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcSlider {
        "config": any;
        "contentData": {
    url: string;
    imgSrc: string;
    alt: string;
  }[];
    }
}
declare global {
    interface HTMLWcSliderElement extends Components.WcSlider, HTMLStencilElement {
    }
    var HTMLWcSliderElement: {
        prototype: HTMLWcSliderElement;
        new (): HTMLWcSliderElement;
    };
    interface HTMLElementTagNameMap {
        "wc-slider": HTMLWcSliderElement;
    }
}
declare namespace LocalJSX {
    interface WcSlider {
        "config"?: any;
        "contentData"?: {
    url: string;
    imgSrc: string;
    alt: string;
  }[];
    }
    interface IntrinsicElements {
        "wc-slider": WcSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-slider": LocalJSX.WcSlider & JSXBase.HTMLAttributes<HTMLWcSliderElement>;
        }
    }
}
