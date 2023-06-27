import { ValueTransformer } from 'typeorm';
import { Geometry } from 'geojson';
export declare class GeometryTransformer implements ValueTransformer {
    to(geojson: Geometry): string;
    from(wkb: string): Record<string, string> | undefined;
}
