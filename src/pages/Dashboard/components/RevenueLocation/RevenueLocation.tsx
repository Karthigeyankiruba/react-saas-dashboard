import { Box, Card, CardHeader, Flex, Progress, Text } from "@optiaxiom/react";
import { revenueCard } from "../RevenueCard/RevenueCard.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locationData = [
  { name: "New York", revenue: 72, lat: 40.7128, lng: -74.006 },
  { name: "San Francisco", revenue: 39, lat: 37.7749, lng: -122.4194 },
  { name: "Sydney", revenue: 25, lat: -33.8688, lng: 151.2093 },
  { name: "Singapore", revenue: 61, lat: 1.3521, lng: 103.8198 },
];

const createDotIcon = (color: string = "#000000") => {
  return L.divIcon({
    className: "custom-dot-marker",
    html: `<div style="
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${color};
      border: 2px solid #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    "></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
};

const ProgressMeter = ({ title, value }: { title: string; value: number }) => {
  return (
    <Flex gap="8" w="full" h="32">
      <Flex
        flexDirection="row"
        gap="8"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>{title}</Text>
        <Text>{value}k</Text>
      </Flex>
      <Progress value={50} size="xs" w="full" intent="primary" />
    </Flex>
  );
};

const RevenueLocation = () => {
  return (
    <Card className={revenueCard} w="full">
      <CardHeader>
        <Text fontWeight="600" fontSize="xl" color="fg.avatar.neutral">
          Revenue by Location
        </Text>
      </CardHeader>

      <Box
        style={{
          marginBottom: "20px",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
          width: "100%",
          height: "200px",
        }}
      >
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "200px", width: "100%", backgroundColor: "#f8f9fa" }}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            opacity={0.6}
          />
          {locationData.map((location, index) => (
            <Marker
              key={index}
              position={[location.lat, location.lng]}
              icon={createDotIcon("#000000")}
            >
              <Popup>
                <div>
                  <strong>{location.name}</strong>
                  <br />
                  Revenue: {location.revenue}K
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>

      <Flex gap="20" w="full">
        <ProgressMeter title="New York" value={72} />
        <ProgressMeter title="San Francisco" value={39} />
        <ProgressMeter title="Sydney" value={25} />
        <ProgressMeter title="Singapore" value={61} />
      </Flex>
    </Card>
  );
};

export default RevenueLocation;
