import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardLayout from './components/layout/DashboardLayout';
import NotFound from './components/dashboard/404';
import LandingLayout from './components/layout/LandingLayout';


ChartJS.register(ArcElement, Tooltip, Legend);


// lazy imports
const Timeline = lazy(() => import('@/pages/(dashboard)/dashboard/Timeline'))
const Backlog = lazy(() => import('@/pages/(dashboard)/dashboard/Backlog'))
const Code = lazy(() => import('@/pages/(dashboard)/dashboard/Code'))
const Board = lazy(() => import('@/pages/(dashboard)/dashboard/Board'))
const Bot = lazy(() => import('@/pages/(dashboard)/dashboard/bot'))
const Dashboard = lazy(() => import('@/pages/(dashboard)/dashboard'))
const Index = lazy(() => import('@/pages/(root)'))

const router = createHashRouter(
  [
    {
      path: '/dashboard/timeline',
      element: <DashboardLayout><Timeline /></DashboardLayout>
    },
    {
      path: '/dashboard/board',
      element: <DashboardLayout><Board /></DashboardLayout>
    },
    {
      path: '/dashboard/code',
      element: <DashboardLayout><Code /></DashboardLayout>
    },
    {
      path: '/dashboard/backlog',
      element: <DashboardLayout><Backlog /></DashboardLayout>
    },
    {
      path: '/dashboard/bot',
      element: <DashboardLayout><Bot /></DashboardLayout>
    },
    {
      path: '/dashboard',
      element: <DashboardLayout><Dashboard /> </DashboardLayout>
    },
    {
      path: "/dashboard/*",
      element: <DashboardLayout><NotFound /></DashboardLayout>
    },
    {
      path: "/",
      element: <LandingLayout><Index /></LandingLayout>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Suspense> */}
    <RouterProvider router={router} />
    {/* </Suspense> */}
  </React.StrictMode>,
)
