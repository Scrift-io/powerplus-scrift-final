import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ExternalLink, Navigation, Phone, Clock, Satellite, Map as MapIcon, Globe } from 'lucide-react';
const Map = () => {
  const [mapView, setMapView] = useState<'roadmap' | 'satellite' | 'hybrid' | 'terrain'>('roadmap');
  const [zoom, setZoom] = useState(15);
  const openGoogleMaps = () => {
    const address = "LC-40, Landhi Industrial Area, Near Opal Laboratory, Karachi, Pakistan 71500";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };
  const openDirections = () => {
    const address = "LC-40, Landhi Industrial Area, Near Opal Laboratory, Karachi, Pakistan 71500";
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(directionsUrl, '_blank');
  };
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 1, 20));
  };
  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 1, 1));
  };
  const getMapTypeIcon = (type: string) => {
    switch (type) {
      case 'satellite':
        return <Satellite size={16} />;
      case 'hybrid':
        return <Globe size={16} />;
      case 'terrain':
        return <MapIcon size={16} />;
      default:
        return <MapIcon size={16} />;
    }
  };
  return <Card className="border-2 border-progressive-light-grey shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-progressive-dark-grey flex items-center gap-3">
          <MapPin className="text-progressive-red" size={28} />
          Find Us Here
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          {/* Interactive Map Container */}
          <div className="relative w-full h-96 bg-gray-100 overflow-hidden">
            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1234567890123!2d67.1234567!3d24.8234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLC-40%20Landhi%20Industrial%20Area%2C%20Karachi%2C%20Pakistan!5e${mapView === 'satellite' ? '1' : '0'}!3m2!1sen!2spk!4v1234567890123`} width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" />
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {/* Map Type Selector */}
            <div className="bg-white rounded-lg shadow-lg p-1 flex flex-col gap-1">
              {(['roadmap', 'satellite', 'hybrid', 'terrain'] as const).map(type => <button key={type} onClick={() => setMapView(type)} className={`px-3 py-2 text-xs font-medium rounded-md transition-colors flex items-center gap-2 ${mapView === type ? 'bg-progressive-red text-white' : 'text-gray-700 hover:bg-gray-100'}`} title={type.charAt(0).toUpperCase() + type.slice(1)}>
                  {getMapTypeIcon(type)}
                  <span className="capitalize">{type}</span>
                </button>)}
            </div>

            {/* Zoom Controls */}
            
          </div>

          {/* Action Buttons - Bottom Right */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button onClick={openGoogleMaps} className="flex items-center justify-center gap-2 bg-progressive-red hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg">
              <ExternalLink size={14} />
              View on Google Maps
            </button>
            <button onClick={openDirections} className="flex items-center justify-center gap-2 border-2 border-progressive-red text-progressive-red hover:bg-progressive-red hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-white shadow-lg">
              <Navigation size={14} />
              Get Directions
            </button>
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default Map;