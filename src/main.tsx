import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import AuthLayout from './components/layout/AuthLayout';


ChartJS.register(ArcElement, Tooltip, Legend);


// lazy imports
const DashboardLayout = lazy(() => import('./components/layout/DashboardLayout'))
const NotFound = lazy(() => import('./components/dashboard/404'))
const LandingLayout = lazy(() => import('./components/layout/LandingLayout'))
const Timeline = lazy(() => import('@/pages/(dashboard)/dashboard/Timeline'))
const Backlog = lazy(() => import('@/pages/(dashboard)/dashboard/Backlog'))
const Code = lazy(() => import('@/pages/(dashboard)/dashboard/Code'))
const Board = lazy(() => import('@/pages/(dashboard)/dashboard/Board'))
const Bot = lazy(() => import('@/pages/(dashboard)/dashboard/bot'))
const Dashboard = lazy(() => import('@/pages/(dashboard)/dashboard'))
const Index = lazy(() => import('@/pages/(root)'))
const Documents = lazy(() => import('@/pages/(dashboard)/dashboard/Documents'))
const Team = lazy(() => import('@/pages/(dashboard)/dashboard/Team'))
const TeamMember = lazy(() => import('@/pages/(dashboard)/dashboard/Team/TeamMember.tsx'))
const Login = lazy(() => import('@/pages/(auth)/Login'))
const Signup = lazy(() => import('@/pages/(auth)/Signup'))

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
      path: '/dashboard/documents',
      element: <DashboardLayout><Documents /></DashboardLayout>
    },
    {
      path: '/dashboard/team',
      element: <DashboardLayout><Team /></DashboardLayout>
    }, {
      path: '/dashboard/team/:name',
      element: <DashboardLayout><TeamMember /></DashboardLayout>
    },

    {
      path: '/auth/signup',
      element: <AuthLayout><Signup /></AuthLayout>
    },
    {
      path: "/auth/login",
      element: <AuthLayout><Login /></AuthLayout>
    },
    {
      path: "/",
      element: <LandingLayout><Index /></LandingLayout>
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Suspense> */}
    <RouterProvider router={router} />
    {/* </Suspense> */}
  </React.StrictMode>,
)
