export type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};

export type Camera = {
    x: number;
    y: number;
};

export enum LayerType {
    Square,
    Circle,
    Path,
    Text,
    Note
};

export type SquareLayer = {
    type: LayerType.Square;
    x: number;
    y: number;
    width: number;
    height: number;
    fill: Color;
    value?: string;
};

export type CircleLayer = {
    type: LayerType.Circle;
    x: number;
    y: number;
    width: number;
    height: number;
    fill: Color;
    value?: string;
};

export type PathLayer = {
    type: LayerType.Path;
    x: number;
    y: number;
    width: number;
    height: number;
    fill: Color;
    points: Number[][];
    value?: string;
};

export type TextLayer = {
    type: LayerType.Text;
    x: number;
    y: number;
    width: number;
    height: number;
    fill: Color;
    value?: string;
};

export type NoteLayer = {
    type: LayerType.Note;
    x: number;
    y: number;
    width: number;
    height: number;
    fill: Color;
    value?: string;
};

export type Point = {
    x: number;
    y: number;
};

export type XYWH = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export enum Side {
    Top = 1,
    Bottom = 2,
    Left = 4,
    Right = 8,
};





export type CanvasState =
    | { 
        mode: CanvasMode.None;
      }
    | { 
        mode: CanvasMode.SelectionNet,
        origin: Point;
        current?: Point;
      }
    | { 
        mode: CanvasMode.Translating,
        current: Point;
      }
    | { 
        mode: CanvasMode.Inserting,
        layerType: LayerType.Circle | LayerType.Square | LayerType.Text | LayerType.Note;
      }
    | { 
        mode: CanvasMode.Pencil
      }
    | { 
        mode: CanvasMode.Pressing,
        origin: Point;
      }
    | { 
        mode: CanvasMode.Resizing,
        initialBounds: XYWH;
        corner: Side;
      }
    ;


export enum CanvasMode {
    None,
    Pressing,
    SelectionNet,
    Translating,
    Inserting,
    Resizing,
    Pencil,
};
