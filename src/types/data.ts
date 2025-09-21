export interface MetricData {
  title: string;
  value: string;
  description: string;
  trend: 'up' | 'down';
  color: string;
  clickable?: boolean;
  route?: string;
}

export interface ProductData {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

export interface ChartDataPoint {
  month: string;
  currentWeek?: number;
  previousWeek?: number;
  actuals?: number;
  projections?: number;
}

export interface SalesData {
  name: string;
  value: number;
  color: string;
}

export interface LocationData {
  name: string;
  revenue: number;
  lat: number;
  lng: number;
}

export interface NotificationData {
  id: number;
  icon: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
  color: string;
}

export interface OrderData {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: string;
  statusColor: string;
}

export interface MockData {
  metrics: MetricData[];
  topSellingProducts: ProductData[];
  revenueChart: ChartDataPoint[];
  projectionsChart: ChartDataPoint[];
  totalSales: SalesData[];
  revenueLocations: LocationData[];
  notifications: NotificationData[];
  orders: OrderData[];
}
