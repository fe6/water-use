import { VNode, RendererNode, RendererElement } from 'vue';

export type renderNode = VNode<RendererNode, RendererElement, { [key: string]: any; }> | null;
