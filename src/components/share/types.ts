import {CSSProperties} from 'react';

export type Primitves = string | boolean | number | symbol | null;

export type ComplexValues =
    | object
    | Array<Primitves | object>
    | Map<Exclude<Primitves, null>, Primitves | object>
    | Set<Exclude<Primitves, null> | object>;

export type GeneralObject = {
    [key: string]: Primitves | ComplexValues;
};

export type Style = CSSProperties;
