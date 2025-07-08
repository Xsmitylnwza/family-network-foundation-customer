'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

const CLINIC_LOCATION = {
  lat: 13.8430841,
  lng: 100.4708404,
};

export default function Map() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    async function init() {
      const L = (await import('leaflet')).default;
      // Fix marker icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      setIsClient(true);
    }
    init();
  }, []);

  if (!isClient) {
    return (
      <Box
        height='400px'
        width='100%'
        borderRadius={2}
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{ bgcolor: 'secondary.100' }}
      >
        <p>กำลังโหลดแผนที่...</p>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: '400px',
        width: '100%',
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        '& .leaflet-container': {
          height: '100%',
          width: '100%',
        },
      }}
    >
      <MapContainer
        center={[CLINIC_LOCATION.lat, CLINIC_LOCATION.lng]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={[CLINIC_LOCATION.lat, CLINIC_LOCATION.lng]}>
          <Popup>
            มูลนิธิเครือข่ายครอบครัว
            <br />
            77/47 ซอยแจ้งวัฒนะ 15 แยก 2 แขวงทุ่งสองห้อง
            <br />
            เขตหลักสี่ กรุงเทพมหานคร 10220
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
