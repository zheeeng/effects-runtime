
import type { vec4 } from '@types/gl-matrix';

export namespace spec {
    export type RGBAColorValue = vec4 | [number, number, number, number];

    export interface TextContentOptions {
        /**
         * Text content.
         */
        text?: string;
        /**
         * Font family.
         */
        fontFamily?: string;
        /**
         * Font size.
         */
        fontSize?: number;
        /**
         * Font weight.
         */
        fontWeight?: number;
        /**
         * Font style.
         */
        fontStyle?: string;
        /**
         * Text alignment.
         */
        textAlign?: 'left' | 'center' | 'right';
        /**
         * Text baseline.
         */
        textBaseline?: 'top' | 'hanging' | 'middle' | 'bottom' | 'alphabetic' | 'ideographic';
        /**
         * Text color.
         */
        color?: RGBAColorValue;
        /**
         * Text outline color.
         */
        outlineColor?: RGBAColorValue;
        /**
         * Text outline width.
         */
        outlineWidth?: number;
        /**
         * Text shadow color.
         */
        shadowColor?: RGBAColorValue;
        /**
         * Text shadow blur.
         */
        shadowBlur?: number;
        /**
         * Text shadow offset.
         */
        shadowOffsetX?: number;
        shadowOffsetY?: number;

        // Fancy text effects
        fancyEffects?: FancyTextEffect[];
    }

    export interface FancyTextEffect {
        type: 'stroke' | 'shadow' | 'gradient' | 'glow';
        // Common properties for all effects
        color?: RGBAColorValue;
        // Type-specific properties
        width?: number; // For stroke
        blur?: number; // For shadow and glow
        offsetX?: number; // For shadow
        offsetY?: number; // For shadow
        stops?: { offset: number; color: RGBAColorValue }[]; // For gradient
        direction?: vec4; // For gradient (start point and end point)
        strength?: number; // For glow
    }

    export interface TextContentData {
        type: 'text';
        options: TextContentOptions;
    }
}
