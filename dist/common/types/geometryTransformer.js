"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometryTransformer = void 0;
const wkx = require("wkx");
class GeometryTransformer {
    to(geojson) {
        return wkx.Geometry.parseGeoJSON(geojson).toWkt();
    }
    from(wkb) {
        if (!wkb)
            return;
        return wkx.Geometry.parse(wkb).toGeoJSON();
    }
}
exports.GeometryTransformer = GeometryTransformer;
//# sourceMappingURL=geometryTransformer.js.map