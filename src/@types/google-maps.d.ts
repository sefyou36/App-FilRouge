declare namespace google.maps {
    class Map {
      constructor(mapDiv: Element, opts?: MapOptions);
    }
  
    class Marker {
      constructor(opts?: MarkerOptions);
    }
  
    interface MapOptions {
      center: LatLngLiteral;
      zoom: number;
    }
  
    interface MarkerOptions {
      position: LatLngLiteral;
      map: Map;
    }
  
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  }
  
  interface Window {
    google: typeof google;
  }