import mockData from './mockData.json';
import type { MockData } from '../types/data';

// Type assertion to ensure the imported JSON matches our interface
const data: MockData = mockData as MockData;

/**
 * Data service providing centralized access to all mock data
 * This service acts as a single source of truth for all dashboard data
 */
export class DataService {
  /**
   * Get metrics data for dashboard KPI cards
   * @returns Array of metric data with values, trends, and styling
   */
  static getMetrics() {
    return data.metrics;
  }

  /**
   * Get top selling products data for the products table
   * @returns Array of product data with names, prices, quantities, and amounts
   */
  static getTopSellingProducts() {
    return data.topSellingProducts;
  }

  /**
   * Get revenue chart data for line chart visualization
   * @returns Array of monthly revenue data with current and previous week values
   */
  static getRevenueChartData() {
    return data.revenueChart;
  }

  /**
   * Get projections chart data for bar chart visualization
   * @returns Array of monthly data with actuals and projections
   */
  static getProjectionsChartData() {
    return data.projectionsChart;
  }

  /**
   * Get total sales data for donut chart visualization
   * @returns Array of sales data by channel with values and colors
   */
  static getTotalSalesData() {
    return data.totalSales;
  }

  /**
   * Get revenue locations data for map visualization
   * @returns Array of location data with coordinates and revenue values
   */
  static getRevenueLocations() {
    return data.revenueLocations;
  }

  /**
   * Get notifications data for notification sidebar
   * @returns Array of notification data with icons, messages, and metadata
   */
  static getNotifications() {
    return data.notifications;
  }

  /**
   * Get orders data for order list table
   * @returns Array of order data with user info, projects, and status
   */
  static getOrders() {
    return data.orders;
  }

  /**
   * Get all data at once (useful for debugging or bulk operations)
   * @returns Complete mock data object
   */
  static getAllData() {
    return data;
  }
}

// Export individual data getters for convenience
export const {
  getMetrics,
  getTopSellingProducts,
  getRevenueChartData,
  getProjectionsChartData,
  getTotalSalesData,
  getRevenueLocations,
  getNotifications,
  getOrders,
  getAllData
} = DataService;
